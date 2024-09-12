import {
  HANDLEWIDTH,
  NODEHEIGHT,
  NODEWIDTH,
  OUTLINEWIDHT,
} from "@/drag/store/drag";
import { DragNode, Edge } from "@/drag/type";
import "./index.css";

export const Connections = ({
  nodes,
  edges,
  width,
  height,
  top,
  left,
  direction,
}: {
  nodes: Map<string, DragNode>;
  edges: Map<string, Edge>;
  width: number;
  height: number;
  top: number;
  left: number;
  direction: string;
}) => {
  const centerX = (NODEWIDTH + OUTLINEWIDHT * 2) / 2;
  const centerY = (NODEHEIGHT + OUTLINEWIDHT * 2) / 2;
  const getStartX = (sourceNode: DragNode) => {
    return sourceNode.position.x + centerX - left;
  };

  const getStartY = (sourceNode: DragNode) => {
    return sourceNode.position.y + centerY - top;
  };

  const getEndX = (targetNode: DragNode) => {
    return targetNode.position.x + centerX - left;
  };

  const getEndY = (targetNode: DragNode) => {
    return targetNode.position.y + centerY - top;
  };

  const getPathD = (sourceNode: DragNode, targetNode: DragNode) => {
    if (direction === "RIGHT") {
      return `M ${getStartX(sourceNode)},${getStartY(sourceNode)} L ${Math.round(getEndX(targetNode))}.001,${Math.round(getEndY(targetNode))}.001`;
    } else {
      return `M ${getStartX(sourceNode)},${getStartY(sourceNode)} L ${Math.round(getEndX(targetNode))}.001,${Math.round(getEndY(targetNode))}.001`;
    }
  };
  return (
    <div className='connections' style={{ width: width, height: height }}>
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
        {Array.from(edges.values()).map((edge) => {
          const sourceNode = nodes.get(edge.source);
          const targetNode = nodes.get(edge.target);
          if (sourceNode && targetNode) {
            const startColor = `${sourceNode.color}`;
            const endColor = `${targetNode.color}`;

            const hypotenuse = Math.sqrt(
              Math.pow(targetNode.position.x - sourceNode.position.x, 2) +
                Math.pow(targetNode.position.y - sourceNode.position.y, 2)
            );
            const cos =
              (targetNode.position.x - sourceNode.position.x) / hypotenuse;
            const sin =
              (targetNode.position.y - sourceNode.position.y) / hypotenuse;

            const x1 = cos >= 0 ? "0%" : `${-cos * 100}%`;
            const y1 = sin >= 0 ? "0%" : `${-sin * 100}%`;
            const x2 = cos >= 0 ? `${cos * 100}%` : "0%";
            const y2 = sin >= 0 ? `${sin * 100}%` : "0%";
            return (
              <defs key={edge.id + "defs"}>
                <linearGradient
                  id={edge.id + "-grad"}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                >
                  <stop
                    offset='0%'
                    style={{ stopColor: startColor, stopOpacity: 1 }}
                  />
                  <stop
                    offset='100%'
                    style={{ stopColor: endColor, stopOpacity: 1 }}
                  />
                </linearGradient>
                <marker
                  id={edge.id + "-circle-start"}
                  markerWidth={HANDLEWIDTH}
                  markerHeight={HANDLEWIDTH}
                  refX='-28'
                  refY={HANDLEWIDTH / 2}
                  orient='auto'
                  markerUnits='userSpaceOnUse'
                >
                  <circle
                    cx={HANDLEWIDTH / 2}
                    cy={HANDLEWIDTH / 2}
                    r={HANDLEWIDTH / 2}
                    fill={startColor}
                  />
                </marker>

                <marker
                  id={edge.id + "-circle-end"}
                  markerWidth={HANDLEWIDTH}
                  markerHeight={HANDLEWIDTH}
                  refX='60'
                  refY={HANDLEWIDTH / 2}
                  orient='auto'
                  markerUnits='userSpaceOnUse'
                >
                  <circle
                    cx={HANDLEWIDTH / 2}
                    cy={HANDLEWIDTH / 2}
                    r={HANDLEWIDTH / 2}
                    fill={endColor}
                  />
                </marker>
              </defs>
            );
          }
        })}

        {Array.from(edges.values()).map((edge) => {
          const sourceNode = nodes.get(edge.source);
          const targetNode = nodes.get(edge.target);
          if (sourceNode && targetNode)
            return (
              <g key={edge.id}>
                <path
                  d={getPathD(sourceNode, targetNode)}
                  key={edge.id + "-incoming"}
                  className='path-incoming'
                  stroke={`url(#${edge.id}-grad)`}
                  markerStart={`url(#${edge.id}-circle-start)`}
                  markerEnd={`url(#${edge.id}-circle-end)`}
                  // style={{ strokeWidth: `2px` }}
                />
              </g>
            );
        })}
      </svg>
    </div>
  );
};
