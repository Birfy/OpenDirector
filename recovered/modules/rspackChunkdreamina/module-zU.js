export function n(e, t, i) {
  let r;
  const n = i.getInstanceSync();
  if (n) {
    const a = {};
    a.isTimeLimitedFree = +!!n.isInFreemiumStage;
    const o = n.getNeedCredits(t);
    a.creditsNeed = (r = o == null ? undefined : o.credits) != null ? r : 0;
    a.creditsNow = n.commercialCreditService.localCredit;
    e.setParams(a);
  }
}
