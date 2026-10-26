export function bH(e) {
  const { type, messageId, conversationId, createTime } = e;
  return {
    id:
      messageId != null
        ? messageId
        : "".concat(
            conversationId != null ? conversationId : "unknown",
            ":compact",
          ),
    event: type,
    conversationId,
    data: JSON.stringify({
      type,
      conversation_id: conversationId,
      message_id: messageId,
      create_time: createTime,
    }),
  };
}
Object.defineProperty(exports, "jo", {
  enumerable: true,
  get: () => "COMPACT_FINISHED",
});
Object.defineProperty(exports, "yD", {
  enumerable: true,
  get: () => "COMPACT_STARTED",
});
