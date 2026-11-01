import r from "oN";
import a from "nG";
import n from "uR";
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
export class DAImageUnifiedGenerateAbility extends n.DANode {
  constructor() {
    super(...arguments);
    this.coreParam = undefined;
    this.generateType = undefined;
    this.unifiedAbilityList = undefined;
  }
  childNodes() {
    let e = [];
    let coreParam = this.coreParam;
    if (coreParam != undefined) {
      e.push(coreParam);
    }
    let unifiedAbilityList = this.unifiedAbilityList;
    if (unifiedAbilityList != undefined) {
      unifiedAbilityList.forEach((t) => {
        e.push(t);
      });
    }
    return e;
  }
}
o(
  [s.serializable("core_param", () => r.DAGenCoreParam)],
  DAImageUnifiedGenerateAbility.prototype,
  "coreParam",
  undefined,
);
o(
  [s.serializable("generate_type")],
  DAImageUnifiedGenerateAbility.prototype,
  "generateType",
  undefined,
);
o(
  [s.serializable("unified_ability_list", () => a.UnifiedAbility)],
  DAImageUnifiedGenerateAbility.prototype,
  "unifiedAbilityList",
  undefined,
);
