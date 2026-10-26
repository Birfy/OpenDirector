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
export class UnifiedGenOption extends DANode {
  constructor() {
    super(...arguments);
    this.genCount = undefined;
    this.generateAll = undefined;
    this.isForceSingle = undefined;
    this.genModelType = undefined;
    this.maxGenCount = undefined;
    this.genAction = undefined;
  }
}
o(
  [a.serializable("gen_count")],
  UnifiedGenOption.prototype,
  "genCount",
  undefined,
);
o(
  [a.serializable("generate_all")],
  UnifiedGenOption.prototype,
  "generateAll",
  undefined,
);
o(
  [a.serializable("is_force_single")],
  UnifiedGenOption.prototype,
  "isForceSingle",
  undefined,
);
o(
  [a.serializable("gen_model_type")],
  UnifiedGenOption.prototype,
  "genModelType",
  undefined,
);
o(
  [a.serializable("max_gen_count")],
  UnifiedGenOption.prototype,
  "maxGenCount",
  undefined,
);
o(
  [a.serializable("gen_action")],
  UnifiedGenOption.prototype,
  "genAction",
  undefined,
);
