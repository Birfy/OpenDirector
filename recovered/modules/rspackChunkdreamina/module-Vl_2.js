import { M } from "./module-l1.js";
const a = {
  benefitKey: "image_basic_generate",
  resourceId: "generate_img",
  resourceType: "aigc",
};
function n(e, resolutionType, quality, imageInputNum) {
  let n;
  let o;
  if (e) {
    if (
      (n =
        (o = M({
          rules: e.rules,
          resolutionType,
          quality,
          imageInputNum,
        })) == null
          ? undefined
          : o.benefit) != null
    ) {
      return n;
    }
    return e.default;
  }
}
export function h(e) {
  let t;
  let r;
  let i;
  const { catalog, options } = e;
  const c = catalog.find((e) => e.modelReqKey === options.modelReqKey);
  if (!c) {
    return {
      status: "unsupported",
      reason: "model_not_found",
    };
  }
  const u =
    (t =
      (r = n(
        c.base,
        options.resolutionType,
        options.quality,
        options.imageInputNum,
      )) != null
        ? r
        : options.fallbackBenefit) != null
      ? t
      : a;
  const _ =
    options.imageInputNum > 0
      ? n(
          c.blend,
          options.resolutionType,
          options.quality,
          options.imageInputNum,
        )
      : undefined;
  let extraBenefitKeys = [];
  if (!c.perPiece) {
    extraBenefitKeys = _
      ? [_.benefitKey]
      : [...((i = options.fallbackExtraBenefitKeys) != null ? i : [])];
  }
  return {
    strategyId: "generate_img",
    resourceType: u.resourceType,
    resourceId: u.resourceId,
    benefitKey: u.benefitKey,
    extraBenefitKeys,
    batchNumber: options.outputCount,
    benefitAmount: options.benefitAmount,
  };
}
