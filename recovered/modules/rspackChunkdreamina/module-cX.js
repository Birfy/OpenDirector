import { DANode } from "./module-uR.js";
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
export class DAImageGenerateOption extends DANode {
  constructor() {
    super(...arguments);
    this.isNeedConfirm = undefined;
    this.genCount = undefined;
    this.isForceSingle = undefined;
    this.generateAll = undefined;
    this.cotType = undefined;
  }
}
o(
  [a.serializable("is_need_confirm")],
  DAImageGenerateOption.prototype,
  "isNeedConfirm",
  undefined,
);
o(
  [a.serializable("gen_count")],
  DAImageGenerateOption.prototype,
  "genCount",
  undefined,
);
o(
  [a.serializable("is_force_single")],
  DAImageGenerateOption.prototype,
  "isForceSingle",
  undefined,
);
o(
  [a.serializable("generate_all")],
  DAImageGenerateOption.prototype,
  "generateAll",
  undefined,
);
o(
  [a.serializable("cot_type")],
  DAImageGenerateOption.prototype,
  "cotType",
  undefined,
);
