export var Y = (e) => {
  var { scene, benefitAmount = 0, sceneOptions, commercialStrategyService } = e;
  if (!Number.isFinite(benefitAmount)) {
    return 3;
  }
  var a =
    commercialStrategyService == null
      ? undefined
      : commercialStrategyService.commercialBenefitsManager.getPluginConfig(
          scene,
          sceneOptions,
        );
  if (a == null ? undefined : a.maxBenefitAmount) {
    return Math.min(benefitAmount, a == null ? undefined : a.maxBenefitAmount);
  }
  return benefitAmount;
};
