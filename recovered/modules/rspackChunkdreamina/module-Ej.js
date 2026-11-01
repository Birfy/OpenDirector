import r from "cX";
import a from "uR";
import { DAImageBlendAbility } from "./module-HZ.js";
import { DAImageGenerateAbility } from "./module-t5.js";
import { DAImageMixBlendAbility } from "./module-tAP.js";
import { DAImageNormalHDAbility } from "./module-ud.js";
import { DAImagePaintingAbility } from "./module-EO.js";
import { DAImageProHDAbility } from "./module-fV1.js";
import { DAImageSuperResolutionAbility } from "./module-Am.js";
import { DAImageUnifiedGenerateAbility } from "./module-Nz.js";
import { DAImageUnifiedGenerateAbilityV2 } from "./module-eV3.js";
import g from "./module-Rd.js";
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
export class DAImageGenerateAbilities extends a.DANode {
  constructor() {
    super(...arguments);
    this.generate = undefined;
    this.blend = undefined;
    this.mixBlend = undefined;
    this.painting = undefined;
    this.superResolution = undefined;
    this.normalHD = undefined;
    this.proHD = undefined;
    this.genOption = undefined;
    this.unifiedGenerate = undefined;
    this.unifiedGenerateV2 = undefined;
  }
  childNodes() {
    let e = [];
    let generate = this.generate;
    if (generate != undefined) {
      e.push(generate);
    }
    let blend = this.blend;
    if (blend != undefined) {
      e.push(blend);
    }
    let mixBlend = this.mixBlend;
    if (mixBlend != undefined) {
      e.push(mixBlend);
    }
    let painting = this.painting;
    if (painting != undefined) {
      e.push(painting);
    }
    let superResolution = this.superResolution;
    if (superResolution != undefined) {
      e.push(superResolution);
    }
    let normalHD = this.normalHD;
    if (normalHD != undefined) {
      e.push(normalHD);
    }
    let proHD = this.proHD;
    if (proHD != undefined) {
      e.push(proHD);
    }
    let genOption = this.genOption;
    if (genOption != undefined) {
      e.push(genOption);
    }
    let unifiedGenerate = this.unifiedGenerate;
    if (unifiedGenerate != undefined) {
      e.push(unifiedGenerate);
    }
    let unifiedGenerateV2 = this.unifiedGenerateV2;
    if (unifiedGenerateV2 != undefined) {
      e.push(unifiedGenerateV2);
    }
    return e;
  }
}
o(
  [g.serializable("generate", () => DAImageGenerateAbility)],
  DAImageGenerateAbilities.prototype,
  "generate",
  undefined,
);
o(
  [g.serializable("blend", () => DAImageBlendAbility)],
  DAImageGenerateAbilities.prototype,
  "blend",
  undefined,
);
o(
  [g.serializable("mix_blend", () => DAImageMixBlendAbility)],
  DAImageGenerateAbilities.prototype,
  "mixBlend",
  undefined,
);
o(
  [g.serializable("painting", () => DAImagePaintingAbility)],
  DAImageGenerateAbilities.prototype,
  "painting",
  undefined,
);
o(
  [g.serializable("super_resolution", () => DAImageSuperResolutionAbility)],
  DAImageGenerateAbilities.prototype,
  "superResolution",
  undefined,
);
o(
  [g.serializable("normal_hd", () => DAImageNormalHDAbility)],
  DAImageGenerateAbilities.prototype,
  "normalHD",
  undefined,
);
o(
  [g.serializable("pro_hd", () => DAImageProHDAbility)],
  DAImageGenerateAbilities.prototype,
  "proHD",
  undefined,
);
o(
  [g.serializable("gen_option", () => r.DAImageGenerateOption)],
  DAImageGenerateAbilities.prototype,
  "genOption",
  undefined,
);
o(
  [g.serializable("unified_generate", () => DAImageUnifiedGenerateAbility)],
  DAImageGenerateAbilities.prototype,
  "unifiedGenerate",
  undefined,
);
o(
  [
    g.serializable(
      "unified_generate_v2",
      () => DAImageUnifiedGenerateAbilityV2,
    ),
  ],
  DAImageGenerateAbilities.prototype,
  "unifiedGenerateV2",
  undefined,
);
