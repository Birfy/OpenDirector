export function n(e, t, i) {
  let a;
  const n = i.getInstanceSync();
  if (n) {
    const r = {};
    r.isTimeLimitedFree = +!!n.isInFreemiumStage;
    const o = n.getNeedCredits(t);
    r.creditsNeed = (a = o == null ? undefined : o.credits) != null ? a : 0;
    r.creditsNow = n.commercialCreditService.localCredit;
    e.setParams(r);
  }
}
