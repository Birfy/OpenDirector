import { DANode } from "./module-uR.js";
import a from "ew";
import { DAImageResolutionType } from "./module-Cw.js";
import s from "Rd";
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
export class DAReqImageInfo extends DANode {
  constructor() {
    super(...arguments);
    this.height = undefined;
    this.width = undefined;
    this.format = undefined;
    this.imageSceneList = undefined;
    this.resolutionType = undefined;
  }
  childNodes() {
    let e = [];
    let imageSceneList = this.imageSceneList;
    if (imageSceneList != undefined) {
      imageSceneList.forEach((t) => {
        e.push(t);
      });
    }
    return e;
  }
  calculateMinVersion() {
    if (this.resolutionType === DAImageResolutionType.ImageResolutionType_4k) {
      this.minVersion = a.FeaturesMinVersion.ImageModel40UHD;
    }
    return super.calculateMinVersion();
  }
}
o([s.serializable("height")], DAReqImageInfo.prototype, "height", undefined);
o([s.serializable("width")], DAReqImageInfo.prototype, "width", undefined);
o([s.serializable("format")], DAReqImageInfo.prototype, "format", undefined);
o(
  [s.serializable("image_scene_list", () => DAImageScene)],
  DAReqImageInfo.prototype,
  "imageSceneList",
  undefined,
);
o(
  [s.serializable("resolution_type")],
  DAReqImageInfo.prototype,
  "resolutionType",
  undefined,
);
export class DAImageScene extends DANode {
  constructor() {
    super(...arguments);
    this.scene = undefined;
    this.height = undefined;
    this.width = undefined;
    this.format = undefined;
    this.uniqKey = undefined;
  }
}
o([s.serializable("scene")], DAImageScene.prototype, "scene", undefined);
o([s.serializable("height")], DAImageScene.prototype, "height", undefined);
o([s.serializable("width")], DAImageScene.prototype, "width", undefined);
o([s.serializable("format")], DAImageScene.prototype, "format", undefined);
o([s.serializable("uniq_key")], DAImageScene.prototype, "uniqKey", undefined);
