import { create } from "zustand";
import invariant from "tiny-invariant";
// import dagre from "dagre";
import ELK, {
  ElkExtendedEdge,
  ElkNode,
  LayoutOptions,
} from "elkjs/lib/elk.bundled.js";
// import { initialNodes, initialEdges } from "./data/nodes-edges";
import { DragNode, Edge, edgeType, NodeData, Position } from "../type";
import { v4 as uuidv4 } from "uuid";

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
  "layering.layerConstraint": "FIRST",

  "org.eclipse.elk.layered.considerModelOrder.strategy": "NODES_AND_EDGES",
  // "elk.padding": "[top=25,left=25,bottom=25,right=25]",
  // separateConnectedComponents: "false",
};

export type BoardContextValue = {
  nodes: Map<string, DragNode>;
  edges: Map<string, Edge>;
  selectedNode: DragNode | undefined;
  selectedEdge: Edge | undefined;

  addNode: (
    node: NodeData,
    options: LayoutOptions,
    parentId: string,
    childId?: string
  ) => void;
  deleteNode: (nodeId: string) => void;
  selectNode: (id: string) => void;
  updatePosition: (pos: Position) => void;
  getLayoutedElements: (
    nodes: NodeData[],
    edges: Edge[],
    options: LayoutOptions
  ) => void;
  setData: (key: string, value: string) => void;
  clearAll: () => void;
};

export const useDragStore = create<BoardContextValue>((set, get) => ({
  nodes: new Map(),
  edges: new Map(),
  selectedNode: undefined,
  selectedEdge: undefined,

  addNode: async (
    node: NodeData,
    options = {},
    parentId: string
    // childId?: string
  ) => {
    node.id = uuidv4().substring(0, 8);
    const parentNode = get().nodes.get(parentId);

    if (!parentNode) return;

    const edge: Edge = {
      id: `e_${parentId}_${node.id}`,
      source: parentId,
      target: node.id,
      type: edgeType,
      animated: false,
    };
    const nodeList = Array.from(get().nodes.values());
    const edgeList = Array.from(get().edges.values());

    const graph: ElkNode = {
      id: "root",
      layoutOptions: options,
      children: [
        ...nodeList,
        {
          ...node,
          width: NODEWIDTH,
          height: NODEHEIGHT,
        },
      ],
      edges: [
        ...(edgeList as unknown as ElkExtendedEdge[]),
        edge as unknown as ElkExtendedEdge,
      ],
      x: parentNode.position.x,
      y: parentNode.position.y,
    };

    const elk = new ELK();
    await elk
      .layout(graph)
      .then((layoutedGraph: ElkNode) => {
        const nodeMap = new Map<string, DragNode>();
        const edgeMap = new Map<string, Edge>();
        layoutedGraph.children?.forEach((node: ElkNode) => {
          const newNode = {
            ...node,
            position: { x: node.x!, y: node.y! },
          } as DragNode;
          nodeMap.set(newNode.id, newNode);
        });

        layoutedGraph.edges?.forEach((edge) => {
          edgeMap.set(edge.id, edge as unknown as Edge);
        });

        set(() => {
          return {
            selectedNode: undefined,
            nodes: nodeMap,
            edges: edgeMap,
          };
        });
      })
      .catch(console.error);
  },
  deleteNode: (nodeId: string) => {
    set((state) => {
      state.nodes.delete(nodeId);
      const deleteEdgeList = Array.from(state.edges.values()).filter(
        (edge) => edge.source === nodeId || edge.target === nodeId
      );

      deleteEdgeList.forEach((edge) => {
        state.edges.delete(edge.id);
      });
      return {
        nodes: new Map(state.nodes),
        edges: new Map(state.edges),
      };
    });
  },
  selectNode: (id: string) => {
    set((state) => {
      const selected = state.nodes.get(id);

      return { selectedNode: selected };
    });
  },

  setData: (key, value) => {
    set((state) => {
      if (state.selectedNode) {
        state.selectedNode.data[key] = value;
        return {
          selectedNode: state.selectedNode,
        };
      } else return {};
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
    const graph: ElkNode = {
      id: "root",
      layoutOptions: options,
      children: nodes.map((node) => ({
        ...node,
        width: NODEWIDTH,
        height: NODEHEIGHT,
      })),
      edges: edges as unknown as ElkExtendedEdge[],
    };

    const elk = new ELK();

    await elk
      .layout(graph)
      .then((layoutedGraph: ElkNode) => {
        const nodeMap = new Map<string, DragNode>();
        const edgeMap = new Map<string, Edge>();
        layoutedGraph.children?.forEach((node: ElkNode) => {
          const newNode = {
            ...node,
            position: { x: node.x!, y: node.y! },
          } as DragNode;
          nodeMap.set(newNode.id, newNode);
        });

        layoutedGraph.edges?.forEach((edge) => {
          edgeMap.set(edge.id, edge as unknown as Edge);
        });

        set(() => {
          return {
            selectedNode: undefined,
            nodes: nodeMap,
            edges: edgeMap,
          };
        });
      })
      .catch(console.error);
  },
  clearAll: () => {
    set(() => {
      return {
        nodes: new Map(),
        edges: new Map(),
        selectedNode: undefined,
        selectedEdge: undefined,
      };
    });
  },
}));
