import axios from "axios";

// const SLACK_URL = 'https://cors-anywhere.herokuapp.com/https://slack.com/api';
const SLACK_URL = "https://thingproxy.freeboard.io/fetch/https://slack.com/api";
// const SLACK_URL = 'https://cors.sh/https://slack.com/api';
// const SLACK_URL = 'https://cors.bridged.cc/https://slack.com/api';
const SLACK_CHANNEL_ID = "C07GDHUJR6D";

export interface Message {
  type: string;
  user: string;
  text: string;
  thread_ts: string;
  parent_user_id?: string;
  reply_count?: number;
  subscribed?: boolean;
  last_read?: string;
  unread_count?: number;
  ts: string;
}

export class ChattingSlackModule {
  // // 관리자향 : 채팅방 입장 시 ts 값 저장
  // static saveSlackTsAfterEnter(ts: string) {
  //   localStorage.setItem("slackTs", ts);
  // }

  // 사용자향 : 슬랙에 첫 메시지 전송
  static async sendStartMsg(conts: string) {
    const result = await axios({
      method: "post",
      url: SLACK_URL + "/chat.postMessage",
      data: {
        text: conts,
        channel: "C07GDHUJR6D",
      },
      headers: {
        "Content-type": "application/json",
        //
        Authorization: `Bearer ${import.meta.env.VITE_SLACK_BOT_TOKEN}`,
      },
    });
    localStorage.setItem("slackTs", result.data.ts);
    return result.data.message.text;
  }

  // 사용자향 : 슬랙에서 관리자 메시지 받아오기
  static async getMsg() {
    const result = await axios({
      method: "get",
      url:
        SLACK_URL +
        "/conversations.replies" +
        `?channel=${SLACK_CHANNEL_ID}` +
        `&ts=${localStorage.getItem("slackTs")}`,
      headers: {
        "Content-type": "application/json",
        //
        Authorization: `Bearer ${import.meta.env.VITE_SLACK_BOT_TOKEN}`,
      },
    });
    return result.data.messages;
  }

  // 슬랙에 채팅 종료 이모티콘 추가
  // static async addReactions() {
  //   const result = await axios({
  //     method: "post",
  //     url: SLACK_URL + "/reactions.add",
  //     data: {
  //       name: "채팅-종료",
  //       channel: SLACK_CHANNEL_ID,
  //       timestamp: localStorage.getItem("slackTs"),
  //     },
  //     headers: {
  //       "Content-type": "application/json",
  //       //
  //       Authorization: `Bearer ${import.meta.env.VITE_SLACK_BOT_TOKEN}`,
  //     },
  //   });
  //   localStorage.removeItem("slackTs");
  // }
}
