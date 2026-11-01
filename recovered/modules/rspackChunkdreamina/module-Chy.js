export function U(e) {
  const { isOversea, isTeam, interceptionType, policy, trigger } = e;
  return (
    !isOversea &&
    !isTeam &&
    (trigger === "model_selection"
      ? (policy == null ? undefined : policy.modelSelectionMini) === true &&
        interceptionType === "vip_insufficient"
      : interceptionType === "vip_insufficient"
        ? (policy == null ? undefined : policy.membershipMini) === true
        : (policy == null ? undefined : policy.creditMini) === true &&
          interceptionType === "credit_insufficient")
  );
}
