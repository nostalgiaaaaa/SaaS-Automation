export interface Position {
  x: number;
  y: number;
}

export interface NodeData {
  id: string;
  type?: string;
  data: unknown;
  position: Position;
}

export interface DragNode extends NodeData {
  targetPosition: string;
  sourcePosition: string;
}

export interface Edge {
  id: string;
  source: string;
  target: string;
  type: string;
  animated: boolean;
}

export const edgeType = "smoothstep";
