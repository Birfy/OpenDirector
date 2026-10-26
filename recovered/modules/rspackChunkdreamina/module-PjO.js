import { DANode } from "./module-uR.js";
import { DAUtils } from "./module-pz.js";
import n from "ew";
import s from "xh";
import { DAImageRatioTypeUtils } from "./module-wEw.js";
import l from "Rd";
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
export class ImageRenderSpec extends DANode {
  constructor() {
    super(...arguments);
    this.quality = undefined;
    this.background = undefined;
    this.imageRatio = undefined;
    this.width = undefined;
    this.height = undefined;
    this.resolutionType = undefined;
    this.intelligentRatio = undefined;
  }
  requiresImageGenerationParams() {
    return (
      this.quality != undefined ||
      this.background != undefined ||
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
o([l.serializable("quality")], ImageRenderSpec.prototype, "quality", undefined);
o(
  [l.serializable("background")],
  ImageRenderSpec.prototype,
  "background",
  undefined,
);
o(
  [l.serializable("image_ratio")],
  ImageRenderSpec.prototype,
  "imageRatio",
  undefined,
);
o([l.serializable("width")], ImageRenderSpec.prototype, "width", undefined);
o([l.serializable("height")], ImageRenderSpec.prototype, "height", undefined);
o(
  [l.serializable("resolution_type")],
  ImageRenderSpec.prototype,
  "resolutionType",
  undefined,
);
o(
  [l.serializable("intelligent_ratio")],
  ImageRenderSpec.prototype,
  "intelligentRatio",
  undefined,
);
