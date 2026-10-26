export function H(e, t) {
  const { agentOptData } = t;
  if (agentOptData) {
    const a = {};
    if (agentOptData.conversationId !== undefined) {
      a.conversationId = agentOptData.conversationId;
    }
    a.turnId = agentOptData.turnId;
    e.setParams(a);
  }
}
