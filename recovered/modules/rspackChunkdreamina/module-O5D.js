export var R = (e) => {
  var t;
  var { scene, sceneOptions, commercialStrategyService } = e;
  var a =
    (t = commercialStrategyService.commercialBenefitsManager.getPluginConfig(
      scene,
      sceneOptions,
    )) == null
      ? undefined
      : t.resourceType;
  if (a != null) {
    return a;
  }
  return "";
};
