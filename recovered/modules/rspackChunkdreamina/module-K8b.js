import r from "HrI";
export function RA(e, t) {
  return e && (!t || t === r.j);
}
export function Xl(e) {
  return e === r.j;
}
export function Mr(commercialFeature, t) {
  if (!((i = t == null ? undefined : t.isOversea) != null && i)) {
    return {
      commercialFeature,
      isReady: true,
      enableVipGate: false,
    };
  }
  if (!commercialFeature) {
    return {
      isReady: false,
      enableVipGate: false,
    };
  }
  var i;
  const { commercialStrategyService, membershipService } = commercialFeature;
  const isReady =
    commercialStrategyService.isReady && membershipService.snapshot.isReady;
  return {
    commercialFeature,
    isReady,
    enableVipGate: isReady && !commercialStrategyService.isInFreemiumStage,
    membershipGate: {
      isReady: membershipService.snapshot.isReady,
      hasActiveMembership: membershipService.hasActiveMembership,
    },
  };
}
