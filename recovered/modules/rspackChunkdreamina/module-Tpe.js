import { DAImageGenerateOption } from "./module-cX.js";
import a from "Rd";
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
export class DAImageGenerateOptionInfo extends a.Serializable {
  constructor() {
    super(...arguments);
    this.isNeedConfirm = undefined;
    this.genCount = undefined;
    this.cotType = undefined;
    this.isForceSingle = undefined;
    this.generateAll = undefined;
  }
}
o(
  [a.serializable("isNeedConfirm")],
  DAImageGenerateOptionInfo.prototype,
  "isNeedConfirm",
  undefined,
);
o(
  [a.serializable("genCount")],
  DAImageGenerateOptionInfo.prototype,
  "genCount",
  undefined,
);
o(
  [a.serializable("cotType")],
  DAImageGenerateOptionInfo.prototype,
  "cotType",
  undefined,
);
o(
  [a.serializable("isForceSingle")],
  DAImageGenerateOptionInfo.prototype,
  "isForceSingle",
  undefined,
);
o(
  [a.serializable("generateAll")],
  DAImageGenerateOptionInfo.prototype,
  "generateAll",
  undefined,
);
export class DAImageGenerateOptionInfoUtil {
  static convertToDAImageGenerateOption(e) {
    if (e === undefined) {
      return;
    }
    let t = new DAImageGenerateOption();
    t.isNeedConfirm = e.isNeedConfirm;
    t.genCount = e.genCount;
    t.cotType = e.cotType;
    t.isForceSingle = e.isForceSingle;
    t.generateAll = e.generateAll;
    return t;
  }
}
