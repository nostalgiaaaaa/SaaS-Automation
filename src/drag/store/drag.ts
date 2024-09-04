import { create } from "zustand";
import invariant from "tiny-invariant";
import dagre from "dagre";

// import { initialNodes, initialEdges } from "./data/nodes-edges";
import { DragNode, Edge, edgeType, NodeData, Position } from "../type";

export type NodeEntry = {
  element: HTMLElement;
};

export const NODEWIDTH = 80;
export const NODEHEIGHT = 80;

export type BoardContextValue = {
  nodes: Map<string, DragNode>;
  edges: Map<string, Edge>;
  selectedNode: DragNode | undefined;
  selectedEdge: Edge | undefined;

  initialNodes: (nodes: DragNode[]) => void;
  initialEdges: (edges: Edge[]) => void;
  addNode: (node: DragNode, parentId: string, childId: string) => void;
  selectNode: (id: string) => void;
  updatePosition: (pos: Position) => void;

  dagreGraph: dagre.graphlib.Graph;
  getLayoutedElements: (
    nodes: NodeData[],
    edges: Edge[],
    direction?: "TB" | "LR"
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
  addNode: (node: DragNode, parentId?: string, childId?: string) => {
    set((state) => {
      const nodeMap = state.nodes;
      const edgeMap = state.edges;
      nodeMap.set(node.id, node);

      if (parentId) {
        const newEdge = {
          id: "edge_" + parentId + "_" + node.id,
          source: parentId,
          target: node.id,
          type: edgeType,
          animated: true,
        };
        edgeMap.set(newEdge.id, newEdge);
      }
      if (childId) {
        const newEdge = {
          id: "edge_" + node.id + "_" + childId,
          source: childId,
          target: node.id,
          type: edgeType,
          animated: true,
        };
        edgeMap.set(newEdge.id, newEdge);
      }

      return {
        nodes: nodeMap,
        edges: edgeMap,
      };
    });
  },
  selectNode: (id: string) => {
    set((state) => {
      const selected = state.nodes.get(id);

      return { selectedNode: selected };
    });
  },
  selectEdge: (id: string) => {
    set((state) => {
      const selected = state.edges.get(id);

      return { selectedEdge: selected };
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

  dagreGraph: new dagre.graphlib.Graph(),
  getLayoutedElements: (nodes, edges, direction = "LR") => {
    set((state) => {
      state.dagreGraph.setDefaultEdgeLabel(() => ({}));
      const isHorizontal = direction === "TB";
      state.dagreGraph.setGraph({ rankdir: direction });

      nodes.forEach((node) => {
        state.dagreGraph.setNode(node.id, {
          width: NODEWIDTH,
          height: NODEHEIGHT,
        });
      });

      const nodeMap = new Map();
      const edgeMap = new Map();

      edges.forEach((edge) => {
        state.dagreGraph.setEdge(edge.source, edge.target);
        edgeMap.set(edge.id, edge);
      });

      dagre.layout(state.dagreGraph);

      nodes.map((node) => {
        const nodeWithPosition = state.dagreGraph.node(node.id);
        const newNode = {
          ...node,
          targetPosition: isHorizontal ? "left" : "top",
          sourcePosition: isHorizontal ? "right" : "bottom",
          // We are shifting the dagre node position (anchor=center center) to the top left
          // so it matches the React Flow node anchor point (top left).
          position: {
            x: nodeWithPosition.x - NODEWIDTH / 2,
            y: nodeWithPosition.y - NODEHEIGHT / 2,
          },
        };
        nodeMap.set(newNode.id, newNode);
      });

      return {
        nodes: nodeMap,
        edges: edgeMap,
      };
    });
  },
}));
