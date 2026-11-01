export var E = (e) => {
  var t;
  var { scene, sceneOptions, commercialStrategyService } = e;
  var a =
    (t = commercialStrategyService.commercialBenefitsManager.getPluginConfig(
      scene,
      sceneOptions,
    )) == null
      ? undefined
      : t.strategyId;
  if (a != null) {
    return a;
  }
  return "";
};
