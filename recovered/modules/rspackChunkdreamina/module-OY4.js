import { MG } from "./module-SI_2.js";
import n from "BxE";
import { d as d_1 } from "./module-Ud_2.js";
import { E } from "./module-f4l.js";
import c from "wzO";
import { R } from "./module-O5D.js";
const l = (e) => {
  switch (e) {
    case c.C.ALL:
      return "";
    case c.C.STANDARD:
      return "standard";
    case c.C.ARTISAN:
      return "artisan";
    case c.C.MAESTRO:
      return "maestro";
    case "ultra":
      return "ultra";
    default:
      return "";
  }
};
export var I = (e) => {
  var t;
  var r;
  var {
    scene,
    sceneOptions,
    extraBenefits = [],
    commercialStrategyService,
  } = e;
  if (
    !(commercialStrategyService == null
      ? undefined
      : commercialStrategyService.isReady)
  ) {
    return "";
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
  var _ = n.A([
    ...d_1({
      scene,
      sceneOptions,
      commercialStrategyService,
    }),
    ...extraBenefits,
  ]);
  var g = [];
  for (var benefitType of _) {
    var p = commercialStrategyService.getBenefitStrategy({
      resourceType,
      resourceId,
      benefitType,
    });
    if (p != null) {
      p.strategies.forEach((e) => {
        var t;
        var r;
        var i;
        var n =
          (t = (r = e.creditStrategy) == null ? undefined : r.role) != null
            ? t
            : (i = e.subscribeStrategy) == null
              ? undefined
              : i.role;
        var a = n ? l(n) : undefined;
        if (a) {
          g.push(a);
        }
      });
    }
  }
  if (
    (t =
      (r = n.A(g).sort((e, t) => MG[e] - MG[t])) == null ? undefined : r[0]) !=
    null
  ) {
    return t;
  }
  return "";
};
