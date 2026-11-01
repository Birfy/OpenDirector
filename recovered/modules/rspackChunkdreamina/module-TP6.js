import r from "Cw";
import a from "Ut";
import n from "./module-Rd.js";
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
export class ServerImageResource extends n.Serializable {
  constructor() {
    super(...arguments);
    this.imageUri = undefined;
    this.link = undefined;
    this.width = 0;
    this.height = 0;
    this.format = undefined;
    this.algoExtra = undefined;
    this.everPhoto = undefined;
    this.aigcImage = undefined;
  }
  static fromDAImageResource(e, t) {
    let i = new ServerImageResource();
    switch (e.sourceFrom) {
      case a.DAResourceSourceFrom.link:
        break;
      case a.DAResourceSourceFrom.upload:
      case a.DAResourceSourceFrom.produced:
      case a.DAResourceSourceFrom.none:
        i.imageUri = e.uri;
    }
    i.width = e.width;
    i.height = e.height;
    i.format = e.format;
    i.algoExtra = e.algoExtra;
    i.everPhoto = e.everPhoto;
    i.aigcImage = e.aigcImage;
    return i;
  }
  static fromDAImageLipSyncFace(e, t) {
    let i = new ServerImageResource();
    i.imageUri = e.imageUri;
    i.width = e.width;
    i.height = e.height;
    return i;
  }
}
o(
  [n.serializable("image_uri")],
  ServerImageResource.prototype,
  "imageUri",
  undefined,
);
o([n.serializable("link")], ServerImageResource.prototype, "link", undefined);
o([n.serializable("width")], ServerImageResource.prototype, "width", undefined);
o(
  [n.serializable("height")],
  ServerImageResource.prototype,
  "height",
  undefined,
);
o(
  [n.serializable("format")],
  ServerImageResource.prototype,
  "format",
  undefined,
);
o(
  [n.serializable("algo_extra")],
  ServerImageResource.prototype,
  "algoExtra",
  undefined,
);
o(
  [n.serializable("ever_photo", () => a.DAEverPhoto)],
  ServerImageResource.prototype,
  "everPhoto",
  undefined,
);
o(
  [n.serializable("aigc_image", () => r.DAAIGCImage)],
  ServerImageResource.prototype,
  "aigcImage",
  undefined,
);
