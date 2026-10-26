import r from "uR";
import { AIEffectGenerateAbility } from "./module-kBy.js";
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
export class AIEffectGenerateAbilities extends r.DANode {
  constructor() {
    super(...arguments);
    this.generate = undefined;
  }
  childNodes() {
    let e = [];
    let generate = this.generate;
    if (generate != undefined) {
      e.push(generate);
    }
    return e;
  }
}
o(
  [n.serializable("generate", () => AIEffectGenerateAbility)],
  AIEffectGenerateAbilities.prototype,
  "generate",
  undefined,
);
