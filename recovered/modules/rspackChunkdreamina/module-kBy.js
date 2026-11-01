import r from "uR";
import { MinFeatures } from "./module-xh.js";
import { AIEffectInput } from "./module-uRv.js";
import s from "./module-Rd.js";
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
export class AIEffectGenerateAbility extends r.DANode {
  constructor() {
    super(...arguments);
    this.aiEffectID = undefined;
    this.aiEffectName = undefined;
    this.reqKey = undefined;
    this.width = 1;
    this.height = 1;
    this.seed = undefined;
    this.inputs = undefined;
  }
  calculateMinFeatures() {
    this.minFeatures = [MinFeatures.AIGC_GenerateType_AI_Effect];
    return super.calculateMinFeatures();
  }
  childNodes() {
    let e = [];
    if (this.inputs != undefined) {
      this.inputs.forEach((t) => {
        e.push(t);
      });
    }
    return e;
  }
}
o(
  [s.serializable("ai_effect_id", undefined, "int64")],
  AIEffectGenerateAbility.prototype,
  "aiEffectID",
  undefined,
);
o(
  [s.serializable("ai_effect_name")],
  AIEffectGenerateAbility.prototype,
  "aiEffectName",
  undefined,
);
o(
  [s.serializable("req_key")],
  AIEffectGenerateAbility.prototype,
  "reqKey",
  undefined,
);
o(
  [s.serializable("width", undefined, "int")],
  AIEffectGenerateAbility.prototype,
  "width",
  undefined,
);
o(
  [s.serializable("height", undefined, "int")],
  AIEffectGenerateAbility.prototype,
  "height",
  undefined,
);
o(
  [s.serializable("seed", undefined, "int64")],
  AIEffectGenerateAbility.prototype,
  "seed",
  undefined,
);
o(
  [s.serializable("inputs", () => AIEffectInput)],
  AIEffectGenerateAbility.prototype,
  "inputs",
  undefined,
);
