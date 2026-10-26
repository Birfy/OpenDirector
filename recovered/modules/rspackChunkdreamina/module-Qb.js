export function D(e) {
  const {
    submitId,
    mediaConversationId,
    submitIdsFromMessages,
    associatedSubAgentConversationIds,
    multiTurnSubAgentConversationIds,
  } = e;
  return (
    !!submitIdsFromMessages.has(submitId) ||
    !!(
      mediaConversationId &&
      associatedSubAgentConversationIds.has(mediaConversationId) &&
      !multiTurnSubAgentConversationIds.has(mediaConversationId)
    )
  );
}
