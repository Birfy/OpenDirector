import i from "BxE";
import { d as d_1 } from "./module-Ud_2.js";
import { E } from "./module-f4l.js";
import { R } from "./module-O5D.js";
export var $ = (e) => {
  var text;
  var isTextLink;
  var {
    scene,
    extraBenefits = [],
    sceneOptions,
    commercialStrategyService,
  } = e;
  if (
    !(commercialStrategyService == null
      ? undefined
      : commercialStrategyService.isReady) ||
    (commercialStrategyService == null
      ? undefined
      : commercialStrategyService.isInFreemiumStage)
  ) {
    return {};
  }
  var resourceId = E({
    scene,
    sceneOptions,
    commercialStrategyService,
  });
  var resourceType = R({
    scene,
    sceneOptions,
    commercialStrategyService,
  });
  i.A([
    ...d_1({
      scene,
      sceneOptions,
      commercialStrategyService,
    }),
    ...extraBenefits,
  ]).forEach((benefitType) => {
    var i = commercialStrategyService.getBenefitStrategy({
      resourceType,
      resourceId,
      benefitType,
    });
    if (i) {
      var n;
      var a =
        i == null || (n = i.benefitsDisplayResource) == null
          ? undefined
          : n.textLinkConfig;
      if (a) {
        text = a.text;
        isTextLink = a.jumpSubscriptionPage;
      }
    }
  });
  return {
    text,
    isTextLink,
  };
};
