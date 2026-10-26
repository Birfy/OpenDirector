export function T(e) {
  let t;
  let r;
  return (
    ((r = e.interruptApproval) == null ? undefined : r.status) ===
      "pending_approval" ||
    Object.values(
      (t = e.agentConversationSubAgentInterruptApprovals) != null ? t : {},
    ).some((e) => e.status === "pending_approval")
  );
}
