import { DAAIGCImage } from "./module-Cw.js";
import { DAEverPhoto } from "./module-Gc.js";
import { DALinkableResource, DAResourceSourceFrom } from "./module-Pb.js";
import { DAImageResourcePlatformType } from "./module-C9.js";
import d from "Rd";
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
export class DAImageResource extends DALinkableResource {
  constructor() {
    super(...arguments);
    this.sourceFrom = DAResourceSourceFrom.none;
    this.platformType = DAImageResourcePlatformType.imageX;
    this.name = "";
    this.uri = undefined;
    this.everPhoto = undefined;
    this.aigcImage = undefined;
    this.width = 0;
    this.height = 0;
    this.format = "";
    this.algoExtra = undefined;
    this.title = undefined;
    this.link = undefined;
    this.isAnimated = undefined;
  }
  afterInit() {
    super.afterInit();
    this.type = "image";
  }
  afterParse() {
    super.afterParse();
    if (this.uri === undefined && this.rawData.getString("uri") != undefined) {
      this.uri = this.rawData.getString("uri");
    }
  }
  afterToJSON() {
    let e = super.afterToJSON();
    e.set("uri", this.uri);
    return e;
  }
  childNodes() {
    let e = [];
    let everPhoto = this.everPhoto;
    if (everPhoto != undefined) {
      e.push(everPhoto);
    }
    let aigcImage = this.aigcImage;
    if (aigcImage != undefined) {
      e.push(aigcImage);
    }
    return e;
  }
  isValid() {
    return this.uri != undefined && this.uri.length > 0;
  }
}
o(
  [d.serializable("source_from")],
  DAImageResource.prototype,
  "sourceFrom",
  undefined,
);
o(
  [d.serializable("platform_type")],
  DAImageResource.prototype,
  "platformType",
  undefined,
);
o([d.serializable("name")], DAImageResource.prototype, "name", undefined);
o([d.serializable("image_uri")], DAImageResource.prototype, "uri", undefined);
o(
  [d.serializable("ever_photo", () => DAEverPhoto)],
  DAImageResource.prototype,
  "everPhoto",
  undefined,
);
o(
  [d.serializable("aigc_image", () => DAAIGCImage)],
  DAImageResource.prototype,
  "aigcImage",
  undefined,
);
o([d.serializable("width")], DAImageResource.prototype, "width", undefined);
o([d.serializable("height")], DAImageResource.prototype, "height", undefined);
o([d.serializable("format")], DAImageResource.prototype, "format", undefined);
o(
  [d.serializable("algo_extra")],
  DAImageResource.prototype,
  "algoExtra",
  undefined,
);
o([d.serializable("title")], DAImageResource.prototype, "title", undefined);
o([d.serializable("link")], DAImageResource.prototype, "link", undefined);
o(
  [d.serializable("is_animated")],
  DAImageResource.prototype,
  "isAnimated",
  undefined,
);
