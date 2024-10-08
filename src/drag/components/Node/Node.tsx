import { useEffect, useRef, useState } from "react";
import { DragNode } from "../../type";
import {
  ELKOPTIONS,
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
  dragBoardRef,
  node,
  hasChild,
  direction,
}: {
  dragBoardRef: HTMLDivElement | null;
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
    dragStore.selectNode(node.id);
    prevPosX = e.clientX;
    prevPosY = e.clientY;

    setPress(true);

    if (dragBoardRef) dragBoardRef.addEventListener("mousemove", move, false);
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

    if (dragBoardRef)
      dragBoardRef.removeEventListener("mousemove", move, false);
    setMoving(false);
    setPress(false);
    console.log(moving);
    console.log(press);
  };

  const addNewNode = () => {
    const newNode: DragNode = {
      id: "",
      title: "new Node",
      type: "5",
      color: "#b0b0b0",
      position: { x: 0, y: 0 },
      data: {},
    };
    dragStore.addNode(newNode, ELKOPTIONS, node.id);
  };

  const deleteNode = () => {
    dragStore.deleteNode(node.id);
  };

  const style = NodeStyle();

  const rootStyle: React.CSSProperties = {
    top: `${node.position.y}px`,
    left: `${node.position.x}px`,
    zIndex: dragStore.selectedNode?.id === node.id ? "10" : "",
  };

  const nodeStyle: React.CSSProperties = {
    padding: `${OUTLINEWIDHT}px`,
  };
  const itemStyle: React.CSSProperties = {
    width: `${NODEWIDTH}px`,
    height: `${NODEHEIGHT}px`,
    backgroundColor: node.color,
    outline:
      dragStore.selectedNode?.id === node.id
        ? `${OUTLINEWIDHT}px solid ${node.color}B3`
        : `0px solid ${node.color}B3`,
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
        <button
          className={
            direction === "RIGHT" ? style.handleRight : style.handleBottom
          }
          style={handleStyle}
          onClick={() => addNewNode()}
        >
          <SvgIcon name='plus' size={10} fill={"#fff"} />
        </button>
      )}

      <div className={style.node} style={nodeStyle}>
        <div ref={draggableRef} className={style.item} style={itemStyle}>
          <div className={style.content}>
            {node.title.includes("Slack") && (
              <a href='https://svgshare.com/s/4V0'>
                <img
                  src='https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg'
                  title='avatar'
                />
              </a>
            )}
            {node.title.includes("Filter") && getDesignerIcon("filter")}
            {node.title.includes("Chat") && getDesignerIcon("chat")}
            {node.title === "Message" && getDesignerIcon("message")}
            {!node.title.includes("Slack") &&
              !node.title.includes("Filter") &&
              !node.title.includes("Chat") &&
              getDesignerIcon("rest")}
          </div>
        </div>
      </div>

      <button className={style.deleteButton} onClick={() => deleteNode()}>
        <SvgIcon name='close' size={12} fill={"#fff"} stroke={"#fff"} />
      </button>

      <div className={style.labelGroup}>
        <span className={style.label}>
          {node.data.label ? node.data.label : node.title}
        </span>
      </div>
    </div>
  );
};
