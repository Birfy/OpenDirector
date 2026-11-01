import i from "zS";
import n from "ZOC";
import a from "wF";
import { l as l_1 } from "./module-Mj_2.js";
import c from "bT";
import l from "EYk";
export var O = (e) => {
  var {
    extraBenefits,
    scene,
    sceneOptions,
    batchNumber,
    discount,
    benefitAmount,
  } = e;
  var commercialStrategyService = a.h(l.a);
  var extraBenefits_1 = n.A(extraBenefits);
  var _ = i.A(() =>
    l_1({
      scene,
      extraBenefits: extraBenefits_1,
      benefitAmount,
      commercialStrategyService,
      discount,
      sceneOptions,
      batchNumber,
    }),
  );
  var [g, setG] = c.useState(_());
  c.useEffect(() => {
    setG(_());
    var e = commercialStrategyService.onAllBenefitStrategyChange(() => {
      setG(_());
    });
    return () => {
      e.dispose();
    };
  }, [
    sceneOptions,
    scene,
    extraBenefits_1,
    commercialStrategyService,
    batchNumber,
    benefitAmount,
    discount,
    _,
  ]);
  return g;
};
