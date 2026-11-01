export function m(e) {
  return {
    id: e.commonAttr.id,
    effectType: e.commonAttr.effectType,
    commonAttr: e.commonAttr,
    author: e.author,
    statistic: e.statistic,
    aigcImageParams: e.aigcImageParams,
    actData: e.actData,
    extra: e.extra,
    permission: e.permission,
    canvasInfo: e.canvasInfo,
  };
}
