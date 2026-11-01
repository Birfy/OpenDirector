import { AIEffectInput } from "./module-uRv.js";
import a from "./module-Rd.js";
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
export class MGenerateAIEffectInput extends a.Serializable {
  constructor() {
    super(...arguments);
    this.aigcGenerateType = undefined;
    this.aiEffectID = undefined;
    this.reqKey = undefined;
    this.inputs = undefined;
    this.seed = undefined;
  }
}
o(
  [a.serializable("generate_type", undefined, "int64")],
  MGenerateAIEffectInput.prototype,
  "aigcGenerateType",
  undefined,
);
o(
  [a.serializable("ai_effect_id", undefined, "int64")],
  MGenerateAIEffectInput.prototype,
  "aiEffectID",
  undefined,
);
o(
  [a.serializable("req_key")],
  MGenerateAIEffectInput.prototype,
  "reqKey",
  undefined,
);
o(
  [a.serializable("inputs", () => AIEffectInput)],
  MGenerateAIEffectInput.prototype,
  "inputs",
  undefined,
);
o(
  [a.serializable("seed", undefined, "int64")],
  MGenerateAIEffectInput.prototype,
  "seed",
  undefined,
);
