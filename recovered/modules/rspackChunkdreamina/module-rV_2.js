import r from "oa";
import n from "bk";
const s = "LimitFree";
function a(role, t) {
  return String(role) === String(t);
}
function o(e) {
  let t;
  let i;
  let o;
  const { strategy, metadata, userBenefits } = e;
  if (strategy) {
    const c =
      userBenefits == null || (t = userBenefits.assetList) == null
        ? undefined
        : t.find((e) => {
            var t;
            t = strategy.benefitTriplet;
            return (
              String(e.resourceType) === t.resourceType &&
              String(e.resourceId) === t.resourceId &&
              String(e.benefitType) === t.benefitType
            );
          });
    const p =
      metadata == null || (i = metadata.metadataList) == null
        ? undefined
        : i.find(
            (e) =>
              String(e.resourceType) === strategy.benefitTriplet.resourceType &&
              String(e.resourceId) === strategy.benefitTriplet.resourceId,
          );
    const v =
      p == null || (o = p.benefitsPayStrategy) == null
        ? undefined
        : o.find(
            (e) =>
              String(e.benefitType) === strategy.benefitTriplet.benefitType,
          );
    let h = false;
    const strategies = strategy.strategies.map((e) => {
      var t;
      var i;
      var o;
      var l;
      var u;
      var e_limitStrategy = e.limitStrategy;
      if (
        e.payMode !== s ||
        Number(
          e_limitStrategy == null ? undefined : e_limitStrategy.limitFreeType,
        ) !== 8
      ) {
        return e;
      }
      var p =
        c == null || (o = c.assetDetails) == null
          ? undefined
          : o.find(
              (e) =>
                e.payMode === s &&
                Number(e.limitFreeType) === 8 &&
                a(
                  e.role,
                  e_limitStrategy == null ? undefined : e_limitStrategy.role,
                ),
            );
      var m =
        v == null ||
        (u = v.limitfreeStrategy) == null ||
        (l = u.limitfreeLimits) == null
          ? undefined
          : l.find(
              (e) =>
                Number(e.limitFreeType) === 8 &&
                a(
                  e.role,
                  e_limitStrategy == null ? undefined : e_limitStrategy.role,
                ),
            );
      if (
        !(
          typeof (t = m == null ? undefined : m.limitUnitCredit) === "number" &&
          Number.isFinite(t) &&
          t > 0
        )
      ) {
        if (
          (e_limitStrategy == null
            ? undefined
            : e_limitStrategy.limitUnitCredit) === undefined
        ) {
          return e;
        }
        h = true;
        return n._(r._({}, e), {
          limitStrategy: n._(r._({}, e_limitStrategy), {
            limitUnitCredit: undefined,
          }),
        });
      }
      var limitUnitCredit =
        (i = p == null ? undefined : p.limitUnitCredits) != null
          ? i
          : m == null
            ? undefined
            : m.limitUnitCredit;
      if (
        typeof limitUnitCredit === "number" &&
        Number.isFinite(limitUnitCredit) &&
        limitUnitCredit >= 0 &&
        (e_limitStrategy == null
          ? undefined
          : e_limitStrategy.limitUnitCredit) !== limitUnitCredit
      ) {
        h = true;
        return n._(r._({}, e), {
          limitStrategy: n._(r._({}, e_limitStrategy), {
            limitUnitCredit,
          }),
        });
      }
      return e;
    });
    if (h) {
      return n._(r._({}, strategy), {
        strategies,
      });
    }
    return strategy;
  }
}
export { o as r };
