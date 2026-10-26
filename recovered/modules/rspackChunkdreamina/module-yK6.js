export function d(e) {
  const t = Array.isArray(e) ? e : [e];
  const r = [];
  t.forEach((e) => {
    var t;
    var i;
    var { scene, sceneOptions, commercialStrategyService } = e;
    var c = ((e) => {
      const t = e == null ? undefined : e.benefitTriplets;
      if (Array.isArray(t) && t.length !== 0) {
        if (
          t.every(
            (e) =>
              typeof e === "object" &&
              e !== null &&
              typeof e.resourceType === "string" &&
              typeof e.resourceId === "string" &&
              typeof e.benefitType === "string" &&
              e.benefitType.length > 0,
          )
        ) {
          return t;
        }
        return undefined;
      }
    })(sceneOptions);
    if (c) {
      return void r.push(...c);
    }
    var { strategyId, benefitKey, extraBenefitKeys } =
      (t =
        commercialStrategyService.commercialBenefitsManager.computeStrategyBenefit(
          scene,
          sceneOptions,
        )) != null
        ? t
        : {};
    var { resourceType } =
      (i = commercialStrategyService.commercialBenefitsManager.getPluginConfig(
        scene,
        sceneOptions,
      )) != null
        ? i
        : {};
    var f = [benefitKey, ...(extraBenefitKeys != null ? extraBenefitKeys : [])]
      .filter((e) => !!e)
      .map((e) => ({
        resourceType: resourceType != null ? resourceType : "",
        resourceId: strategyId != null ? strategyId : "",
        benefitType: e != null ? e : "",
      }));
    r.push(...f);
  });
  if (r.length !== 0) {
    const { commercialStrategyService } = t[0];
    return commercialStrategyService.batchGetBenefitReportData(r);
  }
}
