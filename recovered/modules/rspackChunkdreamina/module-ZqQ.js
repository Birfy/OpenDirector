export function p(e) {
  const t = e && typeof e === "object" ? e : {};
  return {
    fullPage: t.fullPage === true,
    creditMini: t.creditMini === true,
    membershipMini: t.membershipMini === true,
    modelSelectionMini: t.modelSelectionMini === true,
  };
}
