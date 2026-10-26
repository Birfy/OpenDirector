import { w } from "./module-p3N.js";
const a = Object.freeze({
  benefitKey: "audio_tts_generate",
  resourceId: "generate_audio",
  resourceType: "aigc",
});
export function A(e) {
  const { catalog, options } = e;
  const n =
    options.type !== "text_to_speech" || options.modelReqKey
      ? catalog == null
        ? undefined
        : catalog.find((e) => e.modelReqKey === options.modelReqKey)
      : undefined;
  const o =
    options.type !== "text_to_speech" || options.modelReqKey
      ? n == null
        ? undefined
        : n.benefit
      : a;
  if (!o) {
    return {
      status: "unsupported",
      reason: catalog ? "model_not_found" : "model_catalog_unavailable",
    };
  }
  const chargeUnits =
    options.type === "text_to_speech" && options.chargeUnits !== undefined
      ? options.chargeUnits
      : options.benefitAmount;
  const c = (n == null ? undefined : n.billingMode)
    ? w({
        billingMode: n.billingMode,
        amount: n.benefit.amount,
        chargeUnits,
      })
    : options.benefitAmount;
  return {
    strategyId: "generate_audio",
    resourceType: o.resourceType,
    resourceId: o.resourceId,
    benefitKey: o.benefitKey,
    extraBenefitKeys: [],
    batchNumber: 1,
    benefitAmount: c,
    maxBenefitAmount: c,
  };
}
