import i from "EYk";
import n from "M8X";
export var Z = (e) => {
  var t;
  var { scene, sceneOptions, containerService } = e;
  var { reason } =
    (t = n
      .cQ(containerService, i.a)
      .commercialBenefitsManager.computeStrategyBenefit(scene, sceneOptions)) !=
    null
      ? t
      : {};
  return reason;
};
