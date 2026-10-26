import r from "AB";
import a from "Eh";
import n from "uR";
import { FeaturesMinVersion } from "./module-ew.js";
import { MinFeatures } from "./module-xh.js";
import l from "./module-Rd.js";
const o =
  (this && this.__decorate) ||
  function (e, t, i, o) {
    let r;
    const arguments_length = arguments.length;
    let n =
      arguments_length < 3
        ? t
        : o === null
          ? (o = Object.getOwnPropertyDescriptor(t, i))
          : o;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
      n = Reflect.decorate(e, t, i, o);
    } else {
      for (let s = e.length - 1; s >= 0; s--) {
        if ((r = e[s])) {
          n =
            (arguments_length < 3
              ? r(n)
              : arguments_length > 3
                ? r(t, i, n)
                : r(t, i)) || n;
        }
      }
    }
    if (arguments_length > 3 && n) {
      Object.defineProperty(t, i, n);
    }
    return n;
  };
export class DAImageProHDAbility extends n.DANode {
  constructor() {
    super(...arguments);
    this.resolutionType = undefined;
    this.hdSceneType = undefined;
    this.originalImageStrength = undefined;
    this.detailStrength = undefined;
    this.posteditParam = undefined;
  }
  calculateMinFeatures() {
    let e;
    if (
      ((e = this.posteditParam) == null ? undefined : e.generateType) ===
      r.DAAIGCGenerateType.proHD
    ) {
      return [MinFeatures.AIGC_GenerateType_ProHD];
    }
    return [];
  }
  calculateMinVersion() {
    let e;
    if (
      ((e = this.posteditParam) == null ? undefined : e.generateType) ===
      r.DAAIGCGenerateType.proHD
    ) {
      return FeaturesMinVersion.ImageProHD;
    }
    return "";
  }
  childNodes() {
    let e = [];
    let posteditParam = this.posteditParam;
    if (posteditParam != undefined) {
      e.push(posteditParam);
    }
    return e;
  }
}
o(
  [l.serializable("resolution_type")],
  DAImageProHDAbility.prototype,
  "resolutionType",
  undefined,
);
o(
  [l.serializable("hd_scene_type")],
  DAImageProHDAbility.prototype,
  "hdSceneType",
  undefined,
);
o(
  [l.serializable("original_image_strength")],
  DAImageProHDAbility.prototype,
  "originalImageStrength",
  undefined,
);
o(
  [l.serializable("detail_strength")],
  DAImageProHDAbility.prototype,
  "detailStrength",
  undefined,
);
o(
  [l.serializable("postedit_param", () => a.DAPostEditParam)],
  DAImageProHDAbility.prototype,
  "posteditParam",
  undefined,
);
