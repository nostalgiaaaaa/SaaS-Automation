import { edgeType, NodeData } from "../type";

const onMessage = {
  id: "1",
  title: "On Message",
  type: "input",
  color: "#9ee485",
  data: {
    action: (message: string) => {
      return message;
    },
  },
  position: { x: 0, y: 0 },
};
const matchMessage = {
  id: "2",
  title: "Match Message",
  type: "2",
  color: "#f080ff",
  data: {
    label: "",
    filter: "김형창",
    action: (message: string) => {
      if (message.includes(matchMessage.data.filter)) return true;
      else return false;
    },
  },
  position: { x: 0, y: 0 },
};
const message1 = {
  id: "3-1",
  type: "3",
  title: "Message",
  color: "#ffca80",
  data: {
    label: "",
    triggerValue: "true",
    message: "응답 메세지입니다.",
    action: () => {
      return message1.data.message;
    },
  },
  position: { x: 0, y: 0 },
};

const message2 = {
  id: "3-2",
  title: "Message",
  type: "3",
  color: "#ffca80",
  data: {
    label: "",
    triggerValue: "false",
    message: "응답 메세지입니다.",
    action: () => {
      return message2.data.message;
    },
  },
  position: { x: 0, y: 0 },
};

const sendMessage = {
  id: "4",
  title: "Send Message",
  type: "output",
  color: "#8088ff",
  data: {
    label: "",
    action: (message: string) => {
      return { from: "bot", message: message };
    },
  },
  position: { x: 0, y: 0 },
};

export const flowNodes: NodeData[] = [
  onMessage,
  matchMessage,
  message1,
  message2,
  sendMessage,
];

export const flowEdges = [
  { id: "e_1_2", source: "1", target: "2", type: edgeType, animated: true },
  { id: "e_2_3-1", source: "2", target: "3-1", type: edgeType, animated: true },
  { id: "e_2_3-2", source: "2", target: "3-2", type: edgeType, animated: true },
  {
    id: "e_3-1_4",
    source: "3-1",
    target: "4",
    type: edgeType,
    animated: true,
  },
  {
    id: "e_3-2_4",
    source: "3-2",
    target: "4",
    type: edgeType,
    animated: true,
  },
];
