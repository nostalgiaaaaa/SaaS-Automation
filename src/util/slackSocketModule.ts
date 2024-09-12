import { App } from "@slack/bolt";

export const app = new App({
  token: import.meta.env.VITE_SLACK_BOT_TOKEN,
  signingSecret: import.meta.env.SLACK_SIGNING_SECRET,
  socketMode: true,
  appToken: import.meta.env.SLACK_APP_TOKEN,
});

app.message("hello", async ({ message, say }) => {
  await say(`Hey there <@${message.user}>!`);
});
