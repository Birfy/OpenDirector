import r from "oa";
import n from "bk";
const s = "LimitFree";
function a(e, t, i) {
  let r;
  const n = typeof e === "object" && e !== null ? e : undefined;
  if ((r = n == null ? undefined : n[t]) != null) {
    return r;
  }
  if (n == null) {
    return undefined;
  }
  return n[i];
}
function o(e, t, i) {
  const r = a(e, t, i);
  if (Array.isArray(r)) {
    return r;
  }
  return [];
}
function l(e) {
  return (
    Number(a(e, "quotaAll", "quota_all")) === -2 ||
    Number(a(e, "quotaLeft", "quota_left")) === -2
  );
}
export function p(e) {
  const { strategy, userBenefits, isOversea = false } = e;
  if (strategy) {
    const strategies = strategy.strategies.map((e) => {
      var e_limitStrategy = e.limitStrategy;
      if (e.payMode !== s || !e_limitStrategy) {
        return e;
      }
      var c =
        !l(e_limitStrategy) &&
        ((e) => {
          const { userBenefits, triplet, role, limitFreeType, isOversea } = e;
          const d = o(userBenefits, "assetList", "asset_list").find(
            (e) =>
              String(a(e, "resourceType", "resource_type")) ===
                triplet.resourceType &&
              String(a(e, "resourceId", "resource_id")) ===
                triplet.resourceId &&
              String(a(e, "benefitType", "benefit_type")) ===
                triplet.benefitType,
          );
          return o(d, "assetDetails", "asset_details").some(
            (e) =>
              a(e, "payMode", "pay_mode") === s &&
              a(e, "quotaType", "quota_type") ===
                (isOversea ? "TrialTimes" : "trialTimes") &&
              !l(e) &&
              String(a(e, "role", "role")) === String(role) &&
              Number(a(e, "limitFreeType", "limit_free_type")) ===
                Number(limitFreeType),
          );
        })({
          userBenefits,
          triplet: strategy.benefitTriplet,
          role: e_limitStrategy.role,
          limitFreeType: e_limitStrategy.limitFreeType,
          isOversea,
        });
      if (!!e_limitStrategy.isCreditTrial === c) {
        return e;
      }
      return n._(r._({}, e), {
        limitStrategy: n._(r._({}, e_limitStrategy), {
          isCreditTrial: c || undefined,
        }),
      });
    });
    if (strategies.some((e, i) => e !== strategy.strategies[i])) {
      return n._(r._({}, strategy), {
        strategies,
      });
    }
    return strategy;
  }
}
