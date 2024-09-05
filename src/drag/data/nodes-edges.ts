import { edgeType, NodeData } from "../type";

export const initialNodes: NodeData[] = [
  {
    id: "1",
    type: "1",
    color: "#9ee485",
    data: { label: "input" },
    position: { x: 0, y: 0 },
  },
  {
    id: "2",
    type: "1",
    color: "#9ee485",
    data: { label: "node 2" },
    position: { x: 0, y: 0 },
  },
  {
    id: "2a",
    type: "2",
    color: "#f080ff",
    data: { label: "node 2a" },
    position: { x: 0, y: 0 },
  },
  {
    id: "2b",
    type: "3",
    color: "#8088ff",
    data: { label: "node 2b" },
    position: { x: 0, y: 0 },
  },
  {
    id: "2c",
    type: "4",
    color: "#ffca80",
    data: { label: "node 2c" },
    position: { x: 0, y: 0 },
  },
  {
    id: "2d",
    type: "1",
    color: "#9ee485",
    data: { label: "node 2d" },
    position: { x: 0, y: 0 },
  },
  {
    id: "3",
    type: "1",
    color: "#9ee485",
    data: { label: "node 3" },
    position: { x: 0, y: 0 },
  },
  {
    id: "4",
    type: "3",
    color: "#8088ff",
    data: { label: "node 4" },
    position: { x: 0, y: 0 },
  },
  {
    id: "5",
    type: "2",
    color: "#f080ff",
    data: { label: "node 5" },
    position: { x: 0, y: 0 },
  },
  {
    id: "6",
    type: "4",
    color: "#ffca80",
    data: { label: "output" },
    position: { x: 0, y: 0 },
  },
  {
    id: "7",
    type: "1",
    color: "#9ee485",
    data: { label: "output" },
    position: { x: 0, y: 0 },
  },
];

export const initialEdges = [
  { id: "e12", source: "1", target: "2", type: edgeType, animated: true },
  { id: "e13", source: "1", target: "3", type: edgeType, animated: true },
  { id: "e22a", source: "2", target: "2a", type: edgeType, animated: true },
  { id: "e22b", source: "2", target: "2b", type: edgeType, animated: true },
  { id: "e22c", source: "2", target: "2c", type: edgeType, animated: true },
  { id: "e2c2d", source: "2c", target: "2d", type: edgeType, animated: true },
  { id: "e45", source: "4", target: "5", type: edgeType, animated: true },
  { id: "e56", source: "5", target: "6", type: edgeType, animated: true },
  { id: "e57", source: "5", target: "7", type: edgeType, animated: true },
];
