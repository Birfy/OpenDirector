import i from "jH";
export function N(e) {
  const t = i.UE({
    mainConversationId: e.conversationId,
    mainReplyMessages: e.taskData.replyMessages,
    subAgentReplyMessages: e.agentConversationSubAgentReplyMessages,
    subAgentTaskStates: e.agentConversationSubAgentTaskStates,
  });
  const r = new Set();
  return [...e.taskData.replyMessages, ...t].filter(
    (e) => !e.id || (!r.has(e.id) && (r.add(e.id), true)),
  );
}
