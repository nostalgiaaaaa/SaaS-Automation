import { useLayoutEffect, useRef, useState } from "react";
import { initialNodes, initialEdges } from "./data/nodes-edges";
import { useDragStore } from "./store/drag";
import { Node } from "./components/Node/Node";
import { css } from "@styled-system/css";
import { Connections } from "./components/Connections/Connections";
import invariant from "tiny-invariant";
import "./style/index.css";

export const Drag = () => {
  const dragStore = useDragStore();
  const dragContainerRef = useRef<HTMLDivElement | null>(null);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const [direction, setDirection] = useState("LR");
  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(1);

  useLayoutEffect(() => {
    dragStore.getLayoutedElements(
      initialNodes,
      initialEdges,
      direction as "TB" | "LR"
    );

    invariant(dragContainerRef.current);
    setWidth(dragContainerRef.current.clientWidth);
    setHeight(dragContainerRef.current.clientHeight);
  }, []);

  const selectNone = (evt: any) => {
    if (evt.target.dataset.click === "FLOWS") {
      evt.stopPropagation();
      dragStore.selectNode("");
    }
  };

  const handleDirection = (direction: "TB" | "LR") => {
    setDirection(direction);
    dragStore.getLayoutedElements(initialNodes, initialEdges, direction);
  };

  const dragContainerStyle = css({
    width: "100vw",
    height: "100vh",
    backgroundColor: "#fff",
    position: "relative",
    overflow: "hidden",
  });

  return (
    <>
      <button onClick={() => handleDirection("LR")}>수평</button>
      <button onClick={() => handleDirection("TB")}>수직</button>
      <div
        ref={dragContainerRef}
        className={dragContainerStyle}
        onClick={selectNone}
        data-click="FLOWS"
      >
        <Connections
          nodes={dragStore.nodes}
          edges={dragStore.edges}
          zoomLevel={zoomLevel}
          width={width}
          height={height}
          top={top}
          left={left}
          direction={direction}
        ></Connections>
        {Array.from(dragStore.nodes.values()).map((node) => {
          return (
            <Node
              node={node}
              dragContainerRef={dragContainerRef.current}
              key={node.id}
            ></Node>
          );
        })}
      </div>
    </>
  );
};
