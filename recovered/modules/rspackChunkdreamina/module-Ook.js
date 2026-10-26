import r from "p3N";
export function D(e) {
  const { modelConfig, chargeUnits } = e;
  const a = modelConfig == null ? undefined : modelConfig.commercialConfig;
  if (a == null ? undefined : a.benefitType) {
    return r.w({
      billingMode: a.billingMode,
      amount: a.amount,
      chargeUnits,
    });
  }
  return chargeUnits;
}
