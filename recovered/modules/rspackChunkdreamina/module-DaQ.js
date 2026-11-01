export function c(e) {
  const isTimeLimitedCreditTrial =
    (e == null ? undefined : e.limitFreeType) === 2;
  const creditTrialQuotaAll = e == null ? undefined : e.quotaAll;
  const creditTrialQuotaLeft = e == null ? undefined : e.quotaLeft;
  return {
    isTimeLimitedCreditTrial,
    creditTrialQuotaAll,
    creditTrialQuotaLeft,
    creditTrialAvailableTimes:
      !isTimeLimitedCreditTrial &&
      typeof creditTrialQuotaLeft === "number" &&
      creditTrialQuotaLeft > 0
        ? creditTrialQuotaLeft
        : undefined,
    hasAvailableCreditTrial: !!(
      e &&
      creditTrialQuotaAll !== -2 &&
      creditTrialQuotaLeft !== -2 &&
      ((creditTrialQuotaAll === -1 && creditTrialQuotaLeft === -1) ||
        (creditTrialQuotaLeft != null ? creditTrialQuotaLeft : 0) > 0)
    ),
  };
}
