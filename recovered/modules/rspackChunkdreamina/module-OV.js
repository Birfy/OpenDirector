import { DANode } from "./module-uR.js";
import { ImageInputCommonOption } from "./module-K0.js";
import n from "Rd";
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
export class ImageInputOption extends DANode {
  constructor() {
    super(...arguments);
    this.common_option = undefined;
    this.out_painting = undefined;
    this.view_control = undefined;
  }
  childNodes() {
    let e = [];
    let common_option = this.common_option;
    if (common_option != undefined) {
      e.push(common_option);
    }
    let out_painting = this.out_painting;
    if (out_painting != undefined) {
      e.push(out_painting);
    }
    let view_control = this.view_control;
    if (view_control != undefined) {
      e.push(view_control);
    }
    return e;
  }
}
o(
  [n.serializable("common_option", () => ImageInputCommonOption)],
  ImageInputOption.prototype,
  "common_option",
  undefined,
);
o(
  [n.serializable("out_painting", () => ReqOutPaintingUpScale)],
  ImageInputOption.prototype,
  "out_painting",
  undefined,
);
o(
  [n.serializable("view_control", () => ViewControlOption)],
  ImageInputOption.prototype,
  "view_control",
  undefined,
);
export class ViewControlOption extends DANode {
  constructor() {
    super(...arguments);
    this.yaw = undefined;
    this.pitch = undefined;
  }
}
o([n.serializable("yaw")], ViewControlOption.prototype, "yaw", undefined);
o([n.serializable("pitch")], ViewControlOption.prototype, "pitch", undefined);
export class ReqOutPaintingUpScale extends DANode {
  constructor() {
    super(...arguments);
    this.bottom = undefined;
    this.left = undefined;
    this.right = undefined;
    this.top = undefined;
    this.max_size = undefined;
    this.image_ratio = undefined;
  }
}
o(
  [n.serializable("bottom")],
  ReqOutPaintingUpScale.prototype,
  "bottom",
  undefined,
);
o([n.serializable("left")], ReqOutPaintingUpScale.prototype, "left", undefined);
o(
  [n.serializable("right")],
  ReqOutPaintingUpScale.prototype,
  "right",
  undefined,
);
o([n.serializable("top")], ReqOutPaintingUpScale.prototype, "top", undefined);
o(
  [n.serializable("max_size")],
  ReqOutPaintingUpScale.prototype,
  "max_size",
  undefined,
);
o(
  [n.serializable("image_ratio")],
  ReqOutPaintingUpScale.prototype,
  "image_ratio",
  undefined,
);
