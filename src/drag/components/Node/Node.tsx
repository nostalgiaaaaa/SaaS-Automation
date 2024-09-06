import { useEffect, useRef, useState } from "react";
import { DragNode } from "../../type";
import {
  HANDLEWIDTH,
  NODEHEIGHT,
  NODEWIDTH,
  OUTLINEWIDHT,
  useDragStore,
} from "../../store/drag";
// import { css } from "@styled-system/css";
import { NodeStyle } from "./Node.style";
import { getDesignerIcon } from "@/drag/data/KaravanIcons";
import { SvgIcon } from "../SvgIcon";

export const Node = ({
  dragContainerRef,
  node,
  hasChild,
  direction,
}: {
  dragContainerRef: HTMLDivElement | null;
  node: DragNode;
  hasChild: boolean;
  direction: string;
}) => {
  const draggableRef = useRef<HTMLDivElement | null>(null);
  const dragStore = useDragStore();

  const [moving, setMoving] = useState(false);
  const [press, setPress] = useState(false);
  let prevPosX = 0;
  let prevPosY = 0;

  useEffect(() => {
    if (draggableRef.current) draggable(draggableRef.current);
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
    console.log(moving);
    console.log(press);
  };

  const style = NodeStyle();

  const rootStyle: React.CSSProperties = {
    top: `${node.position.y}px`,
    left: `${node.position.x}px`,
  };

  const nodeStyle: React.CSSProperties = {
    padding: `${OUTLINEWIDHT}px`,
  };

  const itemStyle: React.CSSProperties = {
    width: `${NODEWIDTH}px`,
    height: `${NODEHEIGHT}px`,
    backgroundColor: node.color,
    outline: `0px solid ${node.color}B3`,
    outlineWidth:
      dragStore.selectedNode?.id === node.id ? `${OUTLINEWIDHT}px` : "",
  };

  const handleStyle: React.CSSProperties = {
    width: `${HANDLEWIDTH}px`,
    height: `${HANDLEWIDTH}px`,
    backgroundColor: `${node.color}`,
    bottom: direction === "RIGHT" ? `calc(50% - ${HANDLEWIDTH / 2}px)` : "-18%",
    right: direction === "RIGHT" ? "-18%" : `calc(50% - ${HANDLEWIDTH / 2}px)`,
  };

  return (
    <div className={style.root} style={rootStyle}>
      {!hasChild && (
        <div
          className={
            direction === "RIGHT" ? style.handleRight : style.handleBottom
          }
          style={handleStyle}
        >
          <SvgIcon name="plus" size={10} fill={"#fff"} />
        </div>
      )}

      <div className={style.node} style={nodeStyle}>
        <div ref={draggableRef} className={style.item} style={itemStyle}>
          <div className={style.content}> {getDesignerIcon("rest")}</div>
        </div>
      </div>
    </div>
  );
};
