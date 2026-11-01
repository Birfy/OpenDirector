import r from "oa";
import n from "bk";
export function I(e) {
  let t;
  const { strategy, userBenefits } = e;
  if (strategy) {
    const { resourceType, resourceId, benefitType } = strategy.benefitTriplet;
    const u =
      userBenefits == null || (t = userBenefits.assetList) == null
        ? undefined
        : t.find(
            (e) =>
              e.resourceType === resourceType &&
              e.resourceId === resourceId &&
              e.benefitType === benefitType,
          );
    const strategies = strategy.strategies.map((e) => {
      var t;
      var { limitStrategy } = e;
      if (e.payMode !== "LimitFree" || !limitStrategy) {
        return e;
      }
      var s =
        u == null || (t = u.assetDetails) == null
          ? undefined
          : t.find(
              (e) =>
                e.payMode === "LimitFree" &&
                e.role === limitStrategy.role &&
                e.limitFreeType === limitStrategy.limitFreeType,
            );
      var isGift = (s == null ? undefined : s.isGift) === true || undefined;
      if (limitStrategy.isGift === isGift) {
        return e;
      }
      return n._(r._({}, e), {
        limitStrategy: n._(r._({}, limitStrategy), {
          isGift,
        }),
      });
    });
    if (strategies.some((e, t) => e !== strategy.strategies[t])) {
      return n._(r._({}, strategy), {
        strategies,
      });
    }
    return strategy;
  }
}
