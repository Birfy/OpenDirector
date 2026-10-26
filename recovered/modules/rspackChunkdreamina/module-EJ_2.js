import r from "HS";
import a from "uR";
import n from "Ut";
import { FeaturesMinVersion } from "./module-ew.js";
import { DAVideoGenV2VAVMix } from "./module-Gp.js";
import { DAVideoGenV2VExtend } from "./module-XJU.js";
import { DAVideoGenV2VGenerateFromDraft } from "./module-ixz.js";
import { DAVideoGenV2VInsertFrame } from "./module-N9.js";
import { DAVideoGenV2VLabSr } from "./module-sM.js";
import { DAVideoGenV2VSuperResolution } from "./module-aR.js";
import v from "./module-Rd.js";
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
export class DAVideoGenV2V extends a.DANode {
  constructor() {
    super(...arguments);
    this.generateFromDraft = undefined;
    this.videoTemplate = undefined;
    this.superResolution = undefined;
    this.insertFrame = undefined;
    this.extend = undefined;
    this.labSr = undefined;
    this.avMix = undefined;
  }
  afterInit() {
    super.afterInit();
    this.minVersion = FeaturesMinVersion.VideoGenV2V;
  }
  childNodes() {
    let e = [];
    let videoTemplate = this.videoTemplate;
    if (videoTemplate != undefined) {
      e.push(videoTemplate);
    }
    let superResolution = this.superResolution;
    if (superResolution != undefined) {
      e.push(superResolution);
    }
    let insertFrame = this.insertFrame;
    if (insertFrame != undefined) {
      e.push(insertFrame);
    }
    let extend = this.extend;
    if (extend != undefined) {
      e.push(extend);
    }
    let labSr = this.labSr;
    if (labSr != undefined) {
      e.push(labSr);
    }
    let avMix = this.avMix;
    if (avMix != undefined) {
      e.push(avMix);
    }
    let generateFromDraft = this.generateFromDraft;
    if (generateFromDraft != undefined) {
      e.push(generateFromDraft);
    }
    return e;
  }
}
o(
  [v.serializable("generate_from_draft", () => DAVideoGenV2VGenerateFromDraft)],
  DAVideoGenV2V.prototype,
  "generateFromDraft",
  undefined,
);
o(
  [v.serializable("video_template", () => DAVideoGenVideoTemplate)],
  DAVideoGenV2V.prototype,
  "videoTemplate",
  undefined,
);
o(
  [v.serializable("super_resolution", () => DAVideoGenV2VSuperResolution)],
  DAVideoGenV2V.prototype,
  "superResolution",
  undefined,
);
o(
  [v.serializable("insert_frame", () => DAVideoGenV2VInsertFrame)],
  DAVideoGenV2V.prototype,
  "insertFrame",
  undefined,
);
o(
  [v.serializable("extend", () => DAVideoGenV2VExtend)],
  DAVideoGenV2V.prototype,
  "extend",
  undefined,
);
o(
  [v.serializable("lab_sr", () => DAVideoGenV2VLabSr)],
  DAVideoGenV2V.prototype,
  "labSr",
  undefined,
);
o(
  [v.serializable("av_mix", () => DAVideoGenV2VAVMix)],
  DAVideoGenV2V.prototype,
  "avMix",
  undefined,
);
export class DAVideoGenVideoTemplate extends a.DANode {
  constructor() {
    super(...arguments);
    this.enable = undefined;
    this.videoTemplate = undefined;
    this.imageInfo = undefined;
    this.videoInfo = undefined;
  }
  afterInit() {
    super.afterInit();
    this.minVersion = FeaturesMinVersion.VideoTemplateAbility;
  }
  childNodes() {
    let e = [];
    let imageInfo = this.imageInfo;
    if (imageInfo != undefined) {
      e.push(imageInfo);
    }
    let videoInfo = this.videoInfo;
    if (videoInfo != undefined) {
      e.push(videoInfo);
    }
    return e;
  }
}
o(
  [v.serializable("enable")],
  DAVideoGenVideoTemplate.prototype,
  "enable",
  undefined,
);
o(
  [v.serializable("video_template_item_id", undefined, "int64")],
  DAVideoGenVideoTemplate.prototype,
  "videoTemplate",
  undefined,
);
o(
  [v.serializable("image_info", () => r.DAImageResource)],
  DAVideoGenVideoTemplate.prototype,
  "imageInfo",
  undefined,
);
o(
  [v.serializable("video_info", () => n.DAVideoResource)],
  DAVideoGenVideoTemplate.prototype,
  "videoInfo",
  undefined,
);
