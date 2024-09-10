import { ElkNode } from "elkjs";

export interface Position {
  x: number;
  y: number;
}

export interface NodeData {
  id: string;
  title: string;
  type: string;
  color: string;
  position: Position;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
}

export interface DragNode extends NodeData, ElkNode {}

export interface Edge {
  id: string;
  source: string;
  target: string;
  type: string;
  animated: boolean;
}

export const edgeType = "smoothstep";
