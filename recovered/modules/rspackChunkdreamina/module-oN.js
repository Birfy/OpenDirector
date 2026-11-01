import { DANode } from "./module-uR.js";
import { DAUtils } from "./module-pz.js";
import n from "ew";
import s from "xh";
import { DAAIGCGenerateType } from "./module-AB.js";
import { DAImageRatioTypeUtils } from "./module-wEw.js";
import { DAReqImageInfo } from "./module-M0.js";
import p from "Rd";
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
export class DAGenCoreParam extends DANode {
  constructor() {
    super(...arguments);
    this.model = undefined;
    this.quality = undefined;
    this.background = undefined;
    this.stylize = undefined;
    this.prompt = undefined;
    this.negativePrompt = undefined;
    this.sampleSteps = undefined;
    this.seed = undefined;
    this.sampleStrength = undefined;
    this.imageRatio = undefined;
    this.largeImageInfo = undefined;
    this.strength = undefined;
    this.intelligentRatio = undefined;
    this.generateType = DAAIGCGenerateType.none;
  }
  childNodes() {
    let e = [];
    let largeImageInfo = this.largeImageInfo;
    if (largeImageInfo != undefined) {
      e.push(largeImageInfo);
    }
    return e;
  }
  requiresImageGenerationParams() {
    return (
      this.quality != undefined ||
      this.background != undefined ||
      this.stylize != undefined ||
      DAImageRatioTypeUtils.isExtendedGenerationRatio(this.imageRatio)
    );
  }
  calculateMinVersion() {
    let e = super.calculateMinVersion();
    if (
      this.requiresImageGenerationParams() &&
      DAUtils.compareSemVersion(e, n.FeaturesMinVersion.ImageGenerationParams) <
        0
    ) {
      return n.FeaturesMinVersion.ImageGenerationParams;
    }
    return e;
  }
  calculateMinFeatures() {
    let e = super.calculateMinFeatures();
    if (
      this.requiresImageGenerationParams() &&
      e.indexOf(s.MinFeatures.AIGC_Image_GenerationParams) < 0
    ) {
      e.push(s.MinFeatures.AIGC_Image_GenerationParams);
    }
    return e;
  }
}
o([p.serializable("model")], DAGenCoreParam.prototype, "model", undefined);
o([p.serializable("quality")], DAGenCoreParam.prototype, "quality", undefined);
o(
  [p.serializable("background")],
  DAGenCoreParam.prototype,
  "background",
  undefined,
);
o([p.serializable("stylize")], DAGenCoreParam.prototype, "stylize", undefined);
o([p.serializable("prompt")], DAGenCoreParam.prototype, "prompt", undefined);
o(
  [p.serializable("negative_prompt")],
  DAGenCoreParam.prototype,
  "negativePrompt",
  undefined,
);
o(
  [p.serializable("sample_steps")],
  DAGenCoreParam.prototype,
  "sampleSteps",
  undefined,
);
o([p.serializable("seed")], DAGenCoreParam.prototype, "seed", undefined);
o(
  [p.serializable("sample_strength")],
  DAGenCoreParam.prototype,
  "sampleStrength",
  undefined,
);
o(
  [p.serializable("image_ratio")],
  DAGenCoreParam.prototype,
  "imageRatio",
  undefined,
);
o(
  [p.serializable("large_image_info", () => DAReqImageInfo)],
  DAGenCoreParam.prototype,
  "largeImageInfo",
  undefined,
);
o(
  [p.serializable("strength")],
  DAGenCoreParam.prototype,
  "strength",
  undefined,
);
o(
  [p.serializable("intelligent_ratio")],
  DAGenCoreParam.prototype,
  "intelligentRatio",
  undefined,
);
o(
  [p.serializable("generate_type")],
  DAGenCoreParam.prototype,
  "generateType",
  undefined,
);
