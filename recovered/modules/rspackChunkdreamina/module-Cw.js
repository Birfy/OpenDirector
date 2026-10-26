import { DANode } from "./module-uR.js";
import s from "Rd";
let o;
export var DAImageResolutionType;
const a =
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
export class DAAIGCImage extends DANode {
  constructor() {
    super(...arguments);
    this.itemId = undefined;
  }
}
a(
  [s.serializable("item_id", undefined, "int64")],
  DAAIGCImage.prototype,
  "itemId",
  undefined,
);
o = DAImageResolutionType || (DAImageResolutionType = {});
o.ImageResolutionType_1k = "1k";
o.ImageResolutionType_1_5k = "1.5k";
o.ImageResolutionType_2k = "2k";
o.ImageResolutionType_4k = "4k";
o.ImageResolutionType_8k = "8k";
export class DAImageResolutionTypeUtils {
  static strToType(e) {
    if (e !== undefined) {
      switch (e) {
        case "1k":
          return DAImageResolutionType.ImageResolutionType_1k;
        case "1.5k":
          return DAImageResolutionType.ImageResolutionType_1_5k;
        case "2k":
          return DAImageResolutionType.ImageResolutionType_2k;
        case "4k":
          return DAImageResolutionType.ImageResolutionType_4k;
        case "8k":
          return DAImageResolutionType.ImageResolutionType_8k;
        default:
          return;
      }
    }
  }
}
