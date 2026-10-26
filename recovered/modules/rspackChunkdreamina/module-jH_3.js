import { j } from "./module-zT.js";
export function sW(e) {
  const t = ((e) => {
    const {
      mainConversationId,
      mainReplyMessages,
      subAgentReplyMessages = [],
      subAgentTaskStates,
    } = e;
    return j({
      mainConversationId,
      messages: [...mainReplyMessages, ...subAgentReplyMessages],
      subAgentTaskStates,
    });
  })(e);
  const i = new Set();
  return {
    conversationIds: t.subAgentTasks.flatMap((e) => {
      if (e.subAgentConversationId) {
        return [e.subAgentConversationId];
      }
      return [];
    }),
    replyMessages: t.subAgentTasks.flatMap((e) =>
      e.internalMessages.flatMap((e) => {
        var { rawMessage } = e;
        if (i.has(rawMessage.id)) {
          return [];
        }
        i.add(rawMessage.id);
        return [rawMessage];
      }),
    ),
  };
}
export function vv(e) {
  return sW(e).conversationIds;
}
export function UE(e) {
  const {
    mainConversationId,
    mainReplyMessages,
    subAgentReplyMessages = [],
    subAgentTaskStates,
  } = e;
  if (subAgentReplyMessages.length === 0) {
    return [];
  }
  return sW({
    mainConversationId,
    mainReplyMessages,
    subAgentReplyMessages,
    subAgentTaskStates,
  }).replyMessages;
}
