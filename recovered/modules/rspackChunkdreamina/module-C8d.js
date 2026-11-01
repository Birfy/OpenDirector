import i from "BxE";
import { d } from "./module-Ud_2.js";
import { E } from "./module-f4l.js";
import { R } from "./module-O5D.js";
export var H = (e) => {
  var { scene, sceneOptions, commercialStrategyService } = e;
  var l = E({
    scene,
    sceneOptions,
    commercialStrategyService,
  });
  var s = R({
    scene,
    sceneOptions,
    commercialStrategyService,
  });
  return i
    .A([
      ...d({
        scene,
        sceneOptions,
        commercialStrategyService,
      }),
    ])
    .map((e) => "".concat(s, ":").concat(l, ":").concat(e));
};
