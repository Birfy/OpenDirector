import { DANode } from "./module-uR.js";
import { DAAudioResource } from "./module-GL.js";
import { DAImageResource } from "./module-HS.js";
import { DAUnifiedEditMaterialType } from "./module-Na.js";
import { DASubjectData } from "./module-w1.js";
import { DAVideoResource } from "./module-Wq.js";
import c from "Rd";
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
export class DAUnifiedEditMaterial extends DANode {
  constructor() {
    super(...arguments);
    this.materialType = DAUnifiedEditMaterialType.Image;
    this.imageInfo = undefined;
    this.videoInfo = undefined;
    this.audioInfo = undefined;
    this.subjectData = undefined;
  }
  childNodes() {
    let e = [];
    if (this.imageInfo != undefined) {
      e.push(this.imageInfo);
    }
    if (this.videoInfo != undefined) {
      e.push(this.videoInfo);
    }
    if (this.audioInfo != undefined) {
      e.push(this.audioInfo);
    }
    if (this.subjectData != undefined) {
      e.push(this.subjectData);
    }
    return e;
  }
}
o(
  [c.serializable("material_type")],
  DAUnifiedEditMaterial.prototype,
  "materialType",
  undefined,
);
o(
  [c.serializable("image_info", () => DAImageResource)],
  DAUnifiedEditMaterial.prototype,
  "imageInfo",
  undefined,
);
o(
  [c.serializable("video_info", () => DAVideoResource)],
  DAUnifiedEditMaterial.prototype,
  "videoInfo",
  undefined,
);
o(
  [c.serializable("audio_info", () => DAAudioResource)],
  DAUnifiedEditMaterial.prototype,
  "audioInfo",
  undefined,
);
o(
  [c.serializable("subject_data", () => DASubjectData)],
  DAUnifiedEditMaterial.prototype,
  "subjectData",
  undefined,
);
