import { create } from "zustand";
import invariant from "tiny-invariant";
// import dagre from "dagre";
import ELK, { ElkNode, LayoutOptions } from "elkjs/lib/elk.bundled.js";
// import { initialNodes, initialEdges } from "./data/nodes-edges";
import { DragNode, Edge, NodeData, Position } from "../type";

export type NodeEntry = {
  element: HTMLElement;
};

export const NODEWIDTH = 80;
export const NODEHEIGHT = 80;
export const HANDLEWIDTH = 32;
export const OUTLINEWIDHT = 6;

export const ELKOPTIONS = {
  "elk.algorithm": "layered",
  "elk.nodeLabels.placement": "INSIDE V_CENTER H_RIGHT",
  "org.eclipse.elk.layered.layering.strategy": "INTERACTIVE",
  "org.eclipse.elk.edgeRouting": "ORTHOGONAL",
  "elk.layered.unnecessaryBendpoints": "true",
  "org.eclipse.elk.layered.nodePlacement.bk.fixedAlignment": "BALANCED",
  "org.eclipse.elk.layered.nodePlacement.bk.edgeStraightening":
    "IMPROVE_STRAIGHTNESS",
  "org.eclipse.elk.layered.cycleBreaking.strategy": "DEPTH_FIRST",
  "org.eclipse.elk.insideSelfLoops.activate": "true",
  "org.eclipse.elk.layered.nodePlacement.favorStraightEdges": "true",
  "org.eclipse.elk.layered.considerModelOrder.crossingCounterNodeInfluence":
    "0.001",
  "nodePlacement.strategy": "BRANDES_KOEPF",
  "org.eclipse.elk.layered.edgeLabels.sideSelection": "ALWAYS_UP",
  "org.eclipse.elk.spacing.portPort": "10",
  "	org.eclipse.elk.radial.centerOnRoot": "true",
  portConstraints: "FIXED_ORDER",
  "nodeSize.constraints": "[MINIMUM_SIZE]",
  "elk.alignment": "CENTER",
  "elk.edgeLabels.inline": "true",
  "elk.edgeRouting": "SPLINES",

  "elk.spacing.nodeNode": "80",
  "elk.spacing.componentComponent": "80",
  "elk.layered.spacing.nodeNodeBetweenLayers": "80",

  "elk.padding": "[top=25,left=25,bottom=25,right=25]",
  // separateConnectedComponents: "false",
  // "org.eclipse.elk.layered.considerModelOrder.strategy": "NODES_AND_EDGES",
};

export type BoardContextValue = {
  nodes: Map<string, DragNode>;
  edges: Map<string, Edge>;
  selectedNode: DragNode | undefined;
  selectedEdge: Edge | undefined;

  initialNodes: (nodes: DragNode[]) => void;
  initialEdges: (edges: Edge[]) => void;
  // addNode: (node: DragNode, parentId: string, childId: string) => void;
  selectNode: (id: string) => void;
  updatePosition: (pos: Position) => void;
  getLayoutedElements: (
    nodes: NodeData[],
    edges: Edge[],
    options: LayoutOptions
  ) => void;
};

export const useDragStore = create<BoardContextValue>((set) => ({
  nodes: new Map(),
  edges: new Map(),
  selectedNode: undefined,
  selectedEdge: undefined,

  initialNodes: (nodes: DragNode[]) => {
    const nodeMap = new Map();
    nodes.forEach((node) => {
      nodeMap.set(node.id, node);
    });
    set(() => {
      return {
        nodes: nodeMap,
      };
    });
  },
  initialEdges: (edges: Edge[]) => {
    const edgeMap = new Map();
    edges.forEach((edge) => {
      edgeMap.set(edge.id, edge);
    });
    set(() => {
      return {
        edges: edgeMap,
      };
    });
  },
  // addNode: (node: DragNode, parentId?: string, childId?: string) => {
  //   set((state) => {
  //     const nodeMap = state.nodes;
  //     const edgeMap = state.edges;
  //     nodeMap.set(node.id, node);

  //     if (parentId) {
  //       const newEdge = {
  //         id: "edge_" + parentId + "_" + node.id,
  //         source: parentId,
  //         target: node.id,
  //         type: edgeType,
  //         animated: true,
  //       };
  //       edgeMap.set(newEdge.id, newEdge);
  //     }
  //     if (childId) {
  //       const newEdge = {
  //         id: "edge_" + node.id + "_" + childId,
  //         source: childId,
  //         target: node.id,
  //         type: edgeType,
  //         animated: true,
  //       };
  //       edgeMap.set(newEdge.id, newEdge);
  //     }

  //     return {
  //       nodes: nodeMap,
  //       edges: edgeMap,
  //     };
  //   });
  // },
  selectNode: (id: string) => {
    set((state) => {
      const selected = state.nodes.get(id);

      return { selectedNode: selected };
    });
  },

  updatePosition: (pos: Position) => {
    set((state) => {
      const temp = state.selectedNode;
      invariant(temp);
      temp.position.x -= pos.x;
      temp.position.y -= pos.y;

      return {
        selectedNode: temp,
      };
    });
  },

  getLayoutedElements: async (nodes, edges, options = {}) => {
    const isHorizontal = options["direction"] === "RIGHT";

    const graph: ElkNode = {
      id: "root",
      layoutOptions: options,
      children: nodes.map((node) => ({
        ...node,
        targetPosition: isHorizontal ? "left" : "top",
        sourcePosition: isHorizontal ? "right" : "bottom",
        width: NODEWIDTH,
        height: NODEHEIGHT,
      })),
      edges: edges,
    };

    const elk = new ELK();
    const nodeMap = new Map<string, DragNode>();
    const edgeMap = new Map<string, Edge>();

    await elk
      .layout(graph)
      .then((layoutedGraph: ElkNode) => {
        layoutedGraph.children?.forEach((node: ElkNode) => {
          const newNode: DragNode = {
            ...node,
            position: { x: node.x!, y: node.y! },
          };
          nodeMap.set(newNode.id, newNode);
        });

        layoutedGraph.edges?.forEach((edge) => {
          edgeMap.set(edge.id, edge);
        });
      })
      .catch(console.error);
    set(() => {
      return {
        nodes: nodeMap,
        edges: edgeMap,
      };
    });
  },
}));
