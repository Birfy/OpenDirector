import { I } from "./module-OY4.js";
import { MG } from "./module-SI_2.js";
export var $ = (e) => {
  var {
    scene,
    extraBenefits = [],
    sceneOptions,
    commercialStrategyService,
  } = e;
  return (
    !!(commercialStrategyService == null
      ? undefined
      : commercialStrategyService.isReady) &&
    MG[
      I({
        scene,
        extraBenefits,
        sceneOptions,
        commercialStrategyService,
      })
    ] > MG[""]
  );
};
