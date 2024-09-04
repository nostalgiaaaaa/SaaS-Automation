import { NODEHEIGHT, NODEWIDTH } from "@/drag/store/drag";
import { DragNode, Edge } from "@/drag/type";

export const Connections = ({
  nodes,
  edges,
  zoomLevel,
  width,
  height,
  top,
  left,
  direction,
}: {
  nodes: Map<string, DragNode>;
  edges: Map<string, Edge>;
  zoomLevel: number;
  width: number;
  height: number;
  top: number;
  left: number;
  direction: string;
}) => {
  const totalWidth = NODEWIDTH + 16;
  const totalHeight = NODEHEIGHT + 16;
  const getStartX = (edge: Edge, sourceNode: DragNode) => {
    if (direction === "LR")
      return (sourceNode.position.x + totalWidth - left + 8) / zoomLevel;
    else return (sourceNode.position.x + totalWidth / 2) / zoomLevel;
  };

  const getStartY = (edge: Edge, sourceNode: DragNode) => {
    if (direction === "LR")
      return (sourceNode.position.y + totalHeight / 2 - top) / zoomLevel;
    else return (sourceNode.position.y + totalHeight - top) / zoomLevel;
  };

  const getEndX = (edge: Edge, targetNode: DragNode) => {
    if (direction === "LR")
      return (targetNode.position.x - left - 8) / zoomLevel;
    else return (targetNode.position.x - left - 8) / zoomLevel;
  };

  const getEndY = (edge: Edge, targetNode: DragNode) => {
    if (direction === "LR")
      return (targetNode.position.y + totalHeight / 2 - top) / zoomLevel;
    else return (targetNode.position.y + totalHeight / 2 - top) / zoomLevel;
  };

  const getPathD = (edge: Edge, sourceNode: DragNode, targetNode: DragNode) => {
    if (direction === "LR") {
      return `M ${getStartX(edge, sourceNode)},${getStartY(edge, sourceNode)} C ${getEndX(edge, targetNode)},${getStartY(edge, sourceNode)} ${getStartX(edge, sourceNode)},${getEndY(
        edge,
        targetNode
      )}   ${getEndX(edge, targetNode)},${getEndY(edge, targetNode)}`;
    } else {
      return `M ${getStartX(edge, sourceNode)},${getStartY(edge, sourceNode)} C ${getStartX(edge, sourceNode)},${getEndY(edge, targetNode)} ${getEndX(edge, targetNode)},${getStartY(
        edge,
        sourceNode
      )}   ${getEndX(edge, targetNode)},${getEndY(edge, targetNode)}`;
      // }
    }
  };
  return (
    <div className="connections" style={{ width: width, height: height }}>
      <svg
        style={{
          width: width,
          height: height,
          position: "absolute",
          left: left,
          top: top,
          overflow: "visible",
        }}
        viewBox={"0 0 " + width + " " + height}
      >
        <defs>
          <marker
            id="circle-start"
            className="circle"
            markerWidth="24"
            markerHeight="24"
            refX="20"
            refY="12"
            orient="auto"
            markerUnits="userSpaceOnUse"
          >
            <circle cx="12" cy="12" r="11" />
          </marker>

          <marker
            id="circle-end"
            className="circle"
            markerWidth="24"
            markerHeight="24"
            refX="4"
            refY="12"
            orient="auto"
            markerUnits="userSpaceOnUse"
          >
            <circle cx="12" cy="12" r="11" />
          </marker>
        </defs>
        {Array.from(edges.values()).map((edge) => {
          const sourceNode = nodes.get(edge.source);
          const targetNode = nodes.get(edge.target);
          if (sourceNode && targetNode)
            return (
              <g key={edge.id}>
                <path
                  d={getPathD(edge, sourceNode, targetNode)}
                  key={edge.id + "-background"}
                  className="path-background"
                  markerStart="url(#circle-start)"
                  markerEnd="url(#circle-end)"
                  // style={{ strokeWidth: `3px` }}
                />
                <path
                  d={getPathD(edge, sourceNode, targetNode)}
                  key={edge.id + "-incoming"}
                  className="path-incoming"
                  markerStart="url(#circle-start)"
                  markerEnd="url(#circle-end)"
                  // style={{ strokeWidth: `2px` }}
                />
              </g>
            );
        })}
      </svg>
    </div>
  );
};
