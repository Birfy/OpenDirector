export function n(e, t, i) {
  let r;
  const n = t.getInstanceSync();
  if (i && n) {
    const a = n.getTrialInfo(i);
    const o = {};
    if (a) {
      o.isFreetrial = +(Number(a.isStrategyFreeTrial) === 1);
      o.vipRightTrialType = a.trialType;
    }
    const l = n.getNeedCredits(i);
    o.creditsNeed = (r = l == null ? undefined : l.credits) != null ? r : 0;
    o.creditsNow = n.commercialCreditService.localCredit;
    e.setParams(o);
  }
}
