import { lU } from "./module-ol0.js";
export function K(e) {
  const { conversationIds, replyMessages, resumeConversationStrMap } = e;
  const a = lU(replyMessages, conversationIds);
  const interruptApprovals = {};
  const s = {};
  for (const l of conversationIds) {
    const d = a[l];
    if ((d == null ? undefined : d.status) === "pending_approval") {
      interruptApprovals[l] = d;
      const u = resumeConversationStrMap[l];
      if (u) {
        s[l] = u;
      }
    }
  }
  if (Object.keys(interruptApprovals).length === 0) {
    return {};
  }
  return {
    interruptApprovals,
    resumeConversationStrMap: Object.keys(s).length > 0 ? s : undefined,
  };
}
