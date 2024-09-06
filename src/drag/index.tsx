import { useCallback, useLayoutEffect, useRef, useState } from "react";
import { initialNodes, initialEdges } from "./data/nodes-edges";
import { ELKOPTIONS, useDragStore } from "./store/drag";
import { Node } from "./components/Node/Node";
import { css } from "@styled-system/css";
import { Connections } from "./components/Connections/Connections";
import invariant from "tiny-invariant";

export const Drag = () => {
  const dragStore = useDragStore();
  const dragContainerRef = useRef<HTMLDivElement | null>(null);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const [direction, setDirection] = useState("RIGHT");
  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(1);

  useLayoutEffect(() => {
    invariant(dragContainerRef.current);
    setWidth(dragContainerRef.current.clientWidth);
    setHeight(dragContainerRef.current.clientHeight);

    onLayout({ direction: direction, useInitialNodes: true });

    setTop(0);
    setLeft(0);
    setZoomLevel(1);
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const selectNone = (evt: any) => {
    if (evt.target.dataset.click === "FLOWS") {
      evt.stopPropagation();
      dragStore.selectNode("");
    }
  };

  const onLayout = useCallback(
    ({
      direction,
      useInitialNodes = false,
    }: {
      direction: string;
      useInitialNodes?: boolean;
    }) => {
      setDirection(direction);

      const opts = { "elk.direction": direction, ...ELKOPTIONS };
      const ns = useInitialNodes
        ? initialNodes
        : Array.from(dragStore.nodes.values());
      const es = useInitialNodes
        ? initialEdges
        : Array.from(dragStore.edges.values());

      dragStore.getLayoutedElements(ns, es, opts);
    },
    [dragStore]
  );

  const dragContainerStyle = css({
    width: "100vw",
    height: "100vh",
    backgroundColor: "#fff",
    position: "relative",
    overflow: "hidden",
  });

  return (
    <>
      <button onClick={() => onLayout({ direction: "DOWN" })}>수직</button>
      <button onClick={() => onLayout({ direction: "RIGHT" })}>수평</button>
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
              dragContainerRef={dragContainerRef.current}
              node={node}
              hasChild={Array.from(dragStore.edges.values()).some(
                (edge) => edge.source === node.id
              )}
              direction={direction}
              key={node.id}
            ></Node>
          );
        })}
      </div>
    </>
  );
};
