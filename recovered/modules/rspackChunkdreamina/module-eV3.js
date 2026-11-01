import r from "AB";
import a from "PjO";
import n from "Jc";
import s from "qY3";
import d from "uR";
import { FeaturesMinVersion } from "./module-ew.js";
import { MinFeatures } from "./module-xh.js";
import u from "./module-Rd.js";
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
export class DAImageUnifiedGenerateAbilityV2 extends d.DANode {
  constructor() {
    super(...arguments);
    this.prompt = undefined;
    this.model = undefined;
    this.stylize = undefined;
    this.generateType = undefined;
    this.unifiedAbilityList = undefined;
    this.renderConfig = undefined;
    this.genOption = undefined;
  }
  calculateMinVersion() {
    this.minVersion =
      this.stylize != undefined
        ? FeaturesMinVersion.ImageGenerationParams
        : FeaturesMinVersion.UnifiedGenerateV2;
    return super.calculateMinVersion();
  }
  calculateMinFeatures() {
    let e = [];
    if (this.stylize != undefined) {
      e.push(MinFeatures.AIGC_Image_GenerationParams);
    }
    if (this.generateType === r.DAAIGCGenerateType.viewControl) {
      e.push(MinFeatures.AIGC_Ability_ViewControl);
    }
    if (this.generateType === r.DAAIGCGenerateType.smartEdit) {
      e.push(MinFeatures.AIGC_Ability_SmartEdit);
    }
    this.minFeatures = e;
    return super.calculateMinFeatures();
  }
  childNodes() {
    let e = [];
    let unifiedAbilityList = this.unifiedAbilityList;
    if (unifiedAbilityList != undefined) {
      unifiedAbilityList.forEach((t) => {
        e.push(t);
      });
    }
    let renderConfig = this.renderConfig;
    if (renderConfig != undefined) {
      e.push(renderConfig);
    }
    let genOption = this.genOption;
    if (genOption != undefined) {
      e.push(genOption);
    }
    return e;
  }
}
o(
  [u.serializable("prompt")],
  DAImageUnifiedGenerateAbilityV2.prototype,
  "prompt",
  undefined,
);
o(
  [u.serializable("model")],
  DAImageUnifiedGenerateAbilityV2.prototype,
  "model",
  undefined,
);
o(
  [u.serializable("stylize")],
  DAImageUnifiedGenerateAbilityV2.prototype,
  "stylize",
  undefined,
);
o(
  [u.serializable("generate_type")],
  DAImageUnifiedGenerateAbilityV2.prototype,
  "generateType",
  undefined,
);
o(
  [u.serializable("unified_ability_list", () => n.UnifiedAbilityV2)],
  DAImageUnifiedGenerateAbilityV2.prototype,
  "unifiedAbilityList",
  undefined,
);
o(
  [u.serializable("render_config", () => a.ImageRenderSpec)],
  DAImageUnifiedGenerateAbilityV2.prototype,
  "renderConfig",
  undefined,
);
o(
  [u.serializable("gen_option", () => s.UnifiedGenOption)],
  DAImageUnifiedGenerateAbilityV2.prototype,
  "genOption",
  undefined,
);
