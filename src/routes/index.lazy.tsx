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
  const dragBoardRef = useRef<HTMLDivElement | null>(null);

  const [direction, setDirection] = useState("RIGHT");

  useLayoutEffect(() => {
    dragStore.clearAll();
    invariant(dragBoardRef.current);
    const width = dragBoardRef.current.clientWidth;
    const height = dragBoardRef.current.clientHeight;
    dragStore.setWidth(width);
    dragStore.setHeight(height);
    dragStore.updateBoardScale(1);
    dragStore.updateBoardPosition({
      x: (width * 3) / 8,
      y: (height * 3) / 8,
    });
    draggable(dragBoardRef.current);

    onLayout({ direction: direction, useInitialNodes: true });
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

  const draggable = (element: HTMLDivElement) => {
    element.onmousedown = start;
    element.onmouseup = end;
  };

  let prevPosX = 0;
  let prevPosY = 0;
  const start = (e: MouseEvent) => {
    if (e.button !== 0) return;
    if ((e.target as HTMLDivElement).dataset.click !== "FLOWS") return;
    prevPosX = e.clientX;
    prevPosY = e.clientY;

    if (dragContainerRef.current) {
      dragContainerRef.current.addEventListener("mousemove", move, false);
      dragContainerRef.current.addEventListener("mouseout", end, false);
    }
  };
  const move = (e: MouseEvent) => {
    const posX = prevPosX - e.clientX;
    const posY = prevPosY - e.clientY;
    prevPosX = e.clientX;
    prevPosY = e.clientY;

    dragStore.updateBoardPosition({ x: posX, y: posY });
  };

  const end = (e: MouseEvent) => {
    if (e.button !== 0) return;

    if (dragContainerRef.current) {
      dragContainerRef.current.removeEventListener("mousemove", move, false);
      dragContainerRef.current.removeEventListener("mouseout", end, false);
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const zoomIn = (e: any) => {
    const delta = e.deltaY > 0 ? 0.1 : -0.1;
    const newScale = dragStore.scale + delta;
    // const ratio = 1 - newScale / dragStore.scale;
    if (newScale < 0.5 || newScale > 3) return;

    const xOrg = e.clientX / dragStore.scale;
    const yOrg = e.clientY / dragStore.scale;
    const xNew = xOrg * newScale;
    const yNew = yOrg * newScale;
    const xDiff = e.clientX - xNew;
    const yDiff = e.clientY - yNew;

    dragStore.updateBoardPosition({
      x: xDiff,
      y: yDiff,
    });

    dragStore.updateBoardScale(newScale);
  };

  const dragContainerStyle = css({
    width: "100vw",
    height: "calc(100vh - 35px)",
    position: "relative",
    overflow: "hidden",
  });

  const dragBoardStyle = css({
    width: "400%",
    height: "400%",
    position: "absolute",
    backgroundColor: "#efefef",
  });
  const boardPositionStyle: React.CSSProperties = {
    transform: `translate(${dragStore.boardX}px, ${dragStore.boardY}px) scale(${dragStore.scale})`,
  };

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
    <div ref={dragContainerRef} className={dragContainerStyle}>
      <div
        ref={dragBoardRef}
        className={dragBoardStyle}
        style={boardPositionStyle}
        onClick={selectNone}
        data-click='FLOWS'
        // onWheel={zoomIn}
      >
        <Connections
          nodes={dragStore.nodes}
          edges={dragStore.edges}
          width={dragStore.width}
          height={dragStore.height}
          top={dragStore.boardY}
          left={dragStore.boardX}
          direction={direction}
        ></Connections>
        {Array.from(dragStore.nodes.values()).map((node) => {
          return (
            <Node
              dragBoardRef={dragBoardRef.current}
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
    </div>
  );
}
