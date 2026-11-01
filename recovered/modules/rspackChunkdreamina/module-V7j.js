export function p(e) {
  return !!(e && Number.isFinite(e.credits) && e.details.length);
}
export function S(e, t) {
  return !!(
    (e == null ? undefined : e.membershipService.snapshot.isReady) &&
    e.membershipService.hasActiveMembership &&
    e.commercialStrategyService.isReady &&
    e.getCommerceRightCanUse(t) &&
    p(e.getNeedCredits(t))
  );
}
