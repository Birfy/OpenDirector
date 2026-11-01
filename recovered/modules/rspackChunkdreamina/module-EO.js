import r from "AB";
import a from "ec6";
import n from "oN";
import s from "Eh";
import d from "uR";
import { MinFeatures } from "./module-xh.js";
import p from "./module-Rd.js";
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
export class DAImagePaintingAbility extends d.DANode {
  constructor() {
    super(...arguments);
    this.coreParam = undefined;
    this.posteditParam = undefined;
    this.maskUri = undefined;
    this.upScale = undefined;
    this.originUri = undefined;
    this.canvasData = undefined;
  }
  childNodes() {
    let e = [];
    let coreParam = this.coreParam;
    if (coreParam != undefined) {
      e.push(coreParam);
    }
    let posteditParam = this.posteditParam;
    if (posteditParam != undefined) {
      e.push(posteditParam);
    }
    let upScale = this.upScale;
    if (upScale != undefined) {
      e.push(upScale);
    }
    let canvasData = this.canvasData;
    if (canvasData != undefined) {
      e.push(canvasData);
    }
    return e;
  }
  calculateMinFeatures() {
    let e;
    if (
      ((e = this.posteditParam) == null ? undefined : e.generateType) ===
      r.DAAIGCGenerateType.byteEditPainting
    ) {
      if (this.canvasData === undefined) {
        this.minFeatures = [MinFeatures.AIGC_GenerateType_byteEditPainting_v2];
      } else {
        this.minFeatures = [MinFeatures.AIGC_GenerateType_byteEditPainting];
      }
    }
    return super.calculateMinFeatures();
  }
}
o(
  [p.serializable("core_param", () => n.DAGenCoreParam)],
  DAImagePaintingAbility.prototype,
  "coreParam",
  undefined,
);
o(
  [p.serializable("postedit_param", () => s.DAPostEditParam)],
  DAImagePaintingAbility.prototype,
  "posteditParam",
  undefined,
);
o(
  [p.serializable("mask_uri")],
  DAImagePaintingAbility.prototype,
  "maskUri",
  undefined,
);
o(
  [p.serializable("up_scale", () => DAImageReqOutPaintingUpScale)],
  DAImagePaintingAbility.prototype,
  "upScale",
  undefined,
);
o(
  [p.serializable("origin_uri")],
  DAImagePaintingAbility.prototype,
  "originUri",
  undefined,
);
o(
  [p.serializable("canvas_data", () => a.DACanvasData)],
  DAImagePaintingAbility.prototype,
  "canvasData",
  undefined,
);
export class DAImageReqOutPaintingUpScale extends d.DANode {
  constructor() {
    super(...arguments);
    this.top = undefined;
    this.bottom = undefined;
    this.left = undefined;
    this.right = undefined;
    this.maxSize = undefined;
    this.imageRatio = undefined;
  }
}
o(
  [p.serializable("top")],
  DAImageReqOutPaintingUpScale.prototype,
  "top",
  undefined,
);
o(
  [p.serializable("bottom")],
  DAImageReqOutPaintingUpScale.prototype,
  "bottom",
  undefined,
);
o(
  [p.serializable("left")],
  DAImageReqOutPaintingUpScale.prototype,
  "left",
  undefined,
);
o(
  [p.serializable("right")],
  DAImageReqOutPaintingUpScale.prototype,
  "right",
  undefined,
);
o(
  [p.serializable("max_size")],
  DAImageReqOutPaintingUpScale.prototype,
  "maxSize",
  undefined,
);
o(
  [p.serializable("image_ratio")],
  DAImageReqOutPaintingUpScale.prototype,
  "imageRatio",
  undefined,
);
