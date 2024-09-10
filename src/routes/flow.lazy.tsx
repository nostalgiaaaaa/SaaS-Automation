import { useCallback, useLayoutEffect, useRef, useState } from "react";
import { ELKOPTIONS, useDragStore } from "../drag/store/drag";
import { Node } from "../drag/components/Node/Node";
import { css } from "@styled-system/css";
import { Connections } from "../drag/components/Connections/Connections";
import invariant from "tiny-invariant";
import { createLazyFileRoute } from "@tanstack/react-router";
import { flowEdges, flowNodes } from "@/drag/data/flowData";
import { DragNode } from "@/drag/type";

export const Route = createLazyFileRoute("/flow")({
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
  const [chatList, setChatList] = useState([
    { from: "bot", message: "안녕하세요." },
  ]);

  useLayoutEffect(() => {
    invariant(dragContainerRef.current);
    setWidth(dragContainerRef.current.clientWidth);
    setHeight(dragContainerRef.current.clientHeight);

    onLayout({ direction: direction, useInitialNodes: true });

    setTop(0);
    setLeft(0);
    setZoomLevel(1);

    setTimeout(() => {
      setChatList((oldArray) => [
        ...oldArray,
        { from: "bot", message: "성함이 어떻게 되시나요?" },
      ]);
    }, 1500);
  }, []);

  const selectNone = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const appMode = (event.target as HTMLElement).getAttribute("data-click");
    if (appMode === "FLOWS") {
      event.stopPropagation();
      dragStore.selectNode("");
    }
  };
  const [text, setText] = useState("");

  const hadleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setText(value);
  };
  const sendMessage = (event: React.FormEvent<HTMLElement>) => {
    event.preventDefault();
    setChatList((oldArray) => [...oldArray, { from: "user", message: text }]);
    returnNodeFlowAction(text);
    setText("");
  };

  const returnNodeFlowAction = useCallback(
    (text: string) => {
      const returnAction = (node: DragNode, value: string) => {
        let result = node.data.action(value);
        const sourceEdges = edgeList.filter((edge) => edge.source === node.id);
        if (node.title !== "Match Message") {
          sourceEdges.forEach((edge) => {
            const target = nodeList.find((node) => node.id === edge.target);
            if (target) result = returnAction(target, result);
          });
        } else {
          const target = nodeList.find(
            (node) => String(result) === node.data?.triggerValue
          );
          if (target) result = returnAction(target, result);
        }
        return result;
      };
      const nodeList = Array.from(dragStore.nodes.values());
      const edgeList = Array.from(dragStore.edges.values());
      const input = nodeList.find((node) => node.type === "input");
      if (input) {
        const result = returnAction(input, text);
        setTimeout(() => {
          setChatList((oldArray) => [...oldArray, result]);
        }, 1500);
      }
    },
    [dragStore.edges, dragStore.nodes]
  );

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
        ? flowNodes
        : Array.from(dragStore.nodes.values());
      const es = useInitialNodes
        ? flowEdges
        : Array.from(dragStore.edges.values());

      dragStore.getLayoutedElements(ns, es, opts);
    },
    [dragStore]
  );

  const setNodeData = (
    event: React.ChangeEvent<HTMLInputElement>,
    key: string
  ) => {
    const value = event.target.value;
    dragStore.setData(key, value);
  };

  const dragContainerStyle = css({
    width: "100vw",
    height: "calc(100vh - 25px)",
    backgroundColor: "#fff",
    position: "relative",
    overflow: "hidden",
  });

  const panelContainerStyle = css({
    position: "absolute",
    width: "fit",
    minWidth: "300px",
    height: "100%",
    background:
      "radial-gradient(100.03% 140.18% at 0% 85.53%, #ff00ff 0%, #724ebf 95.31%)",
    right: "-300px",
    borderTopLeftRadius: "12px",
    borderBottomLeftRadius: "12px",
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    padding: "24px",
    transition: "right 0.1s ease-in-out",
  });

  const slidePanelStyle: React.CSSProperties = {
    right: dragStore.selectedNode ? "0px" : "",
  };

  const panelTitleStyle = css({
    fontSize: "32px",
    color: "#fff",
    fontWeight: "bold",
  });

  const inputWrapStyle = css({
    display: "flex",
    gap: "12px",
    alignItems: "center",
  });

  const labelStyle = css({
    color: "#fff",
    fontSize: "16px",
    fontWeight: "bold",
  });

  const inputStyle = css({
    width: "200px",
    backgroundColor: "#fff",
    border: "2px solid #ea33f7",
    padding: "4px",
    borderRadius: "8px",
  });

  const chatContainerStyle = css({
    position: "absolute",
    width: "400px",
    height: "650px",
    border: "5px #cfc7ff solid",
    borderRadius: "16px",
    top: "20%",
    left: "50%",
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    backgroundImage:
      'url("https://64.media.tumblr.com/913fc95846350c30232a5608a322b78e/tumblr_obykzyjxZt1vbllj8o4_1280.png")',
    backgroundSize: "cover",
    transition: "top 0.1s ease-in-out",

    display: "flex",
    flexDirection: "column",
  });
  const slideChatStyle: React.CSSProperties = {
    top: dragStore.selectedNode ? "100%" : "20%",
  };

  const chatSectionStyle = css({ flex: "1" });
  const chatGroupStyle = css({
    width: "100%",
    height: "100%",
    overflow: "auto",
    display: "flex",
    flexDirection: "column",
    gap: "24px",
    padding: "24px 12px",
  });
  const chatItemStyle = (from: string) =>
    css({
      display: "flex",
      alignItems: "center",
      gap: "8px",
      alignSelf: from === "bot" ? "start" : "end",
      animation: "fadeIn 0.3s ease-in",
    });

  const chatIconStyle = css({
    width: "40px",
    height: "40px",
  });
  const chatStyle = (from: string) =>
    css({
      borderRadius: "8px",
      backgroundColor: from === "bot" ? "#fff" : "rgb(22, 119, 255)",
      padding: "6px 12px",
      color: from === "bot" ? "#000" : "#fff",
    });

  const inputSectionStyle = css({
    width: "100%",
    height: "fit-content",
    padding: "12px",
  });

  const formStyle = css({
    width: "100%",
    display: "flex",
  });

  const chatInputStyle = css({
    fontSize: "1.5em",
    height: "2em",
    padding: "4px 10px",
    backgroundColor: "#fff",
    border: "1px solid #d9d9d9",
    transition: "all 0.2s",
    display: "inline-block",
    textOverflow: "ellipsis",
    borderLeftRadius: "8px",
    outline: "none !important",
    flex: "1",
  });
  const chatButtonStyle = css({
    fontSize: "1.5em",
    height: "2em",
    borderRightRadius: "8px",
    color: "#fff",
    backgroundColor: "#1677ff",
    boxShadow: "0 2px 0 rgba(5, 145, 255, 0.1)",
    padding: "4px 15px",
    textAlign: "center",
    userSelect: "none",
    whiteSpace: "nowrap",
    fontWeight: "400",
    cursor: "pointer",
  });

  return (
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

      <div className={panelContainerStyle} style={slidePanelStyle}>
        {dragStore.selectedNode && (
          <>
            <span className={panelTitleStyle}>
              {dragStore.selectedNode.title}
            </span>
            {Object.keys(dragStore.selectedNode.data)
              .filter((key) => key !== "action")
              .map((key) => {
                return (
                  <div key={key} className={inputWrapStyle}>
                    <label className={labelStyle}>{key}</label>
                    <input
                      type="text"
                      className={inputStyle}
                      value={dragStore.selectedNode!.data[key]}
                      onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setNodeData(e, key)
                      }
                    />
                  </div>
                );
              })}
          </>
        )}
      </div>

      <div className={chatContainerStyle} style={slideChatStyle}>
        <section className={chatSectionStyle}>
          <ul className={chatGroupStyle}>
            {chatList.map((chat, index) => (
              <li key={index} className={chatItemStyle(chat.from)}>
                {chat.from === "bot" && (
                  <div className={chatIconStyle}>
                    <a href="https://svgshare.com/s/4V0">
                      <img
                        src="https://svgshare.com/i/4V0.svg"
                        title="avatar"
                      />
                    </a>
                  </div>
                )}
                <div className={chatStyle(chat.from)}>{chat.message}</div>
              </li>
            ))}
          </ul>
        </section>
        <section className={inputSectionStyle}>
          <form className={formStyle} onSubmit={sendMessage}>
            <input
              type="text"
              className={chatInputStyle}
              value={text}
              onInput={hadleInput}
            />
            <button className={chatButtonStyle}>
              <span>Send</span>
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}
