import { l } from "./module-OvZ_2.js";
function r(e) {
  let t;
  let n;
  let r;
  return {
    key: e.modelReqKey,
    coverUrl: e.iconUrl,
    iconUrl: e.iconUrlSvg,
    name: l(e.modelName, e.modelNameStarlingKey),
    description: l(e.modelTip, e.modelTipStarlingKey),
    source: (t = e.extra) == null ? undefined : t.modelSource,
    feats: e.feats,
    featsCantCombine: e.featsCantCombine,
    featConfig: e.featConfig,
    modelBgPromptStarlingKey: e.modelBgPromptStarlingKey,
    resolutionMap: e.resolutionMap,
    defaultResolutionType: e.defaultResolutionType,
    isNewModel: e.isNewModel,
    commercialConfig: e.commercialConfig,
    inputImageLimit: e.inputImageLimit,
    preAuditPolicy: e.preAuditPolicy,
    subjectPreAuditPolicy: e.subjectPreAuditPolicy,
    defaultGenerateCount: e.defaultGenerateCount,
    generateCountOptions: e.generateCountOptions,
    maxPromptLength:
      typeof (r = (n = e.extra) == null ? undefined : n.maxPromptLength) ===
        "number" && r > 0
        ? r
        : undefined,
    generationParamConfig: e.generationParamConfig,
    supportCustomResolution: e.supportCustomResolution,
  };
}
export function m(e) {
  return {
    modelList: e.modelList.map(r),
    publishLoadingTime: e.publishLoadingTime,
    secUid: e.secUid,
    defaultModelIndex: e.defaultModelIndex,
    firstSelectedModel: e.firstSelectedModel,
    isInternal: e.isInternal,
    mobileAvailableModelKeys: e.mobileAvailableModelKeys,
    postEditParamConfigs: e.postEditParamConfigs,
  };
}
