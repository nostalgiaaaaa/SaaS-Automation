import { useEffect, useRef, useState } from "react";
import { DragNode } from "../../type";
import { NODEHEIGHT, NODEWIDTH, useDragStore } from "../../store/drag";
// import { css } from "@styled-system/css";
import { NodeStyle } from "./Node.style";

export const Node = ({
  node,
  dragContainerRef,
}: {
  node: DragNode;
  dragContainerRef: HTMLDivElement | null;
}) => {
  const draggableRef = useRef<HTMLDivElement | null>(null);
  const dragStore = useDragStore();

  const [moving, setMoving] = useState(false);
  const [press, setPress] = useState(false);
  let prevPosX = 0;
  let prevPosY = 0;

  useEffect(() => {
    if (draggableRef.current) draggable(draggableRef.current);
    console.log(moving, press);
  }, []);

  const draggable = (element: HTMLDivElement) => {
    element.onmousedown = start;
    element.onmouseup = end;
  };

  const start = (e: MouseEvent) => {
    if (e.button !== 0) return;

    if (draggableRef.current) draggableRef.current.style.zIndex = "998";
    dragStore.selectNode(node.id);
    prevPosX = e.clientX;
    prevPosY = e.clientY;

    setPress(true);

    if (dragContainerRef)
      dragContainerRef.addEventListener("mousemove", move, false);
  };
  const move = (e: MouseEvent) => {
    setMoving(true);
    const posX = prevPosX - e.clientX;
    const posY = prevPosY - e.clientY;
    prevPosX = e.clientX;
    prevPosY = e.clientY;

    dragStore.updatePosition({ x: posX, y: posY });
  };

  const end = (e: MouseEvent) => {
    if (e.button !== 0) return;

    if (draggableRef.current) draggableRef.current.style.zIndex = "1";
    if (dragContainerRef)
      dragContainerRef.removeEventListener("mousemove", move, false);
    setMoving(false);
    setPress(false);
  };

  const style = NodeStyle();

  const positionStyle: React.CSSProperties = {
    top: `${node.position.y}px`,
    left: `${node.position.x}px`,
  };
  const selectedStyle: React.CSSProperties = {
    width: `${NODEWIDTH}px`,
    height: `${NODEHEIGHT}px`,
    backgroundColor: node.color,
    outline: `0px solid ${node.color}b0`,
    outlineWidth: dragStore.selectedNode?.id === node.id ? "8px" : "",
  };

  return (
    <div ref={draggableRef} className={style.root} style={positionStyle}>
      <div className={style.block} style={selectedStyle}>
        <div className={style.content}>{node.id}</div>
      </div>
    </div>
  );
};
