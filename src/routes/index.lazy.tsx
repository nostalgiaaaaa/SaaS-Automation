import { useCallback, useLayoutEffect, useRef, useState } from "react";
import { initialNodes, initialEdges } from "../drag/data/nodes-edges";
import { ELKOPTIONS, useDragStore } from "../drag/store/drag";
import { Node } from "../drag/components/Node/Node";
import { css } from "@styled-system/css";
import { Connections } from "../drag/components/Connections/Connections";
import invariant from "tiny-invariant";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: Drag,
});

function Drag() {
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

  const selectNone = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const appMode = (event.target as HTMLElement).getAttribute("data-click");
    if (appMode === "FLOWS") {
      event.stopPropagation();
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
    height: "calc(100vh - 25px)",
    backgroundColor: "#fff",
    position: "relative",
    overflow: "hidden",
  });

  const buttonGroupstyle = css({
    position: "absolute",
    display: "flex",
    gap: "8px",
    padding: "8px",
    left: "45%",
  });

  const buttonstyle = (value: string) =>
    css({
      padding: "4px 8px",
      borderRadius: "4px",
      background: value === direction ? "#b72cf2" : "#fff",
      color: value === direction ? "#fff" : "#000",
      border: value === direction ? "1px solid #000" : "1px solid #000",
      fontWeight: "bold",
      cursor: "pointer",
    });

  return (
    <div
      ref={dragContainerRef}
      className={dragContainerStyle}
      onClick={selectNone}
      data-click="FLOWS"
    >
      <div className={buttonGroupstyle}>
        <button
          className={buttonstyle("RIGHT")}
          onClick={() => onLayout({ direction: "RIGHT" })}
        >
          Horizontal
        </button>
        <button
          className={buttonstyle("DOWN")}
          onClick={() => onLayout({ direction: "DOWN" })}
        >
          Vertical
        </button>
      </div>
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
  );
}
