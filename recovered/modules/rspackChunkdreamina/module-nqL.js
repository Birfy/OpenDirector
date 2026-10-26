import { l } from "./module-OvZ.js";
function o(e) {
  let i;
  let t;
  let o;
  return {
    key: e.modelReqKey,
    coverUrl: e.iconUrl,
    iconUrl: e.iconUrlSvg,
    name: l(e.modelName, e.modelNameStarlingKey),
    description: l(e.modelTip, e.modelTipStarlingKey),
    source: (i = e.extra) == null ? undefined : i.modelSource,
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
      typeof (o = (t = e.extra) == null ? undefined : t.maxPromptLength) ===
        "number" && o > 0
        ? o
        : undefined,
    generationParamConfig: e.generationParamConfig,
    supportCustomResolution: e.supportCustomResolution,
  };
}
export function m(e) {
  return {
    modelList: e.modelList.map(o),
    publishLoadingTime: e.publishLoadingTime,
    secUid: e.secUid,
    defaultModelIndex: e.defaultModelIndex,
    firstSelectedModel: e.firstSelectedModel,
    isInternal: e.isInternal,
    mobileAvailableModelKeys: e.mobileAvailableModelKeys,
    postEditParamConfigs: e.postEditParamConfigs,
  };
}
