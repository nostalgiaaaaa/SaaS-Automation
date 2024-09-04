import { edgeType } from "../type";

export const initialNodes = [
  {
    id: "1",
    type: "input",
    data: { label: "input" },
    position: { x: 0, y: 0 },
  },
  {
    id: "2",
    data: { label: "node 2" },
    position: { x: 0, y: 0 },
  },
  {
    id: "2a",
    data: { label: "node 2a" },
    position: { x: 0, y: 0 },
  },
  {
    id: "2b",
    data: { label: "node 2b" },
    position: { x: 0, y: 0 },
  },
  {
    id: "2c",
    data: { label: "node 2c" },
    position: { x: 0, y: 0 },
  },
  {
    id: "2d",
    data: { label: "node 2d" },
    position: { x: 0, y: 0 },
  },
  {
    id: "3",
    data: { label: "node 3" },
    position: { x: 0, y: 0 },
  },
  {
    id: "4",
    data: { label: "node 4" },
    position: { x: 0, y: 0 },
  },
  {
    id: "5",
    data: { label: "node 5" },
    position: { x: 0, y: 0 },
  },
  {
    id: "6",
    type: "output",
    data: { label: "output" },
    position: { x: 0, y: 0 },
  },
  {
    id: "7",
    type: "output",
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
