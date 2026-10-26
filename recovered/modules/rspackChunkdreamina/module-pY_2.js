export function n(e, t, i) {
  let a;
  const n = t.getInstanceSync();
  if (i && n) {
    const r = n.getTrialInfo(i);
    const o = {};
    if (r) {
      o.isFreetrial = +(Number(r.isStrategyFreeTrial) === 1);
      o.vipRightTrialType = r.trialType;
    }
    const l = n.getNeedCredits(i);
    o.creditsNeed = (a = l == null ? undefined : l.credits) != null ? a : 0;
    o.creditsNow = n.commercialCreditService.localCredit;
    e.setParams(o);
  }
}
