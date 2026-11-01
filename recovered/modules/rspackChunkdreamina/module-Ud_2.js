export var d = (e) => {
  var t;
  var { scene, sceneOptions, commercialStrategyService } = e;
  var { benefitKey, extraBenefitKeys } =
    (t =
      commercialStrategyService.commercialBenefitsManager.computeStrategyBenefit(
        scene,
        sceneOptions,
      )) != null
      ? t
      : {};
  if (benefitKey) {
    return [benefitKey, ...(extraBenefitKeys != null ? extraBenefitKeys : [])];
  }
  return [];
};
