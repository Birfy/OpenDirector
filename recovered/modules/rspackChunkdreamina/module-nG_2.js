import { DANode } from "./module-uR.js";
import a from "ew";
import n from "xh";
import { AbilityCode } from "./module-RU.js";
import { AbilityParam } from "./module-ec_2.js";
import l from "Rd";
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
export class UnifiedAbility extends DANode {
  constructor() {
    super(...arguments);
    this.abilityCode = undefined;
    this.abilityParam = undefined;
  }
  calculateMinFeatures() {
    let e = [];
    if (this.abilityCode === AbilityCode.RmBackground) {
      e.push(n.MinFeatures.AIGC_Ability_removeBackground);
    }
    this.minFeatures = e;
    return super.calculateMinFeatures();
  }
  calculateMinVersion() {
    if (this.abilityCode === AbilityCode.RmBackground) {
      this.minVersion = a.FeaturesMinVersion.RemoveBackground;
    }
    return super.calculateMinVersion();
  }
  childNodes() {
    let e = [];
    let abilityParam = this.abilityParam;
    if (abilityParam != undefined) {
      e.push(abilityParam);
    }
    return e;
  }
}
o(
  [l.serializable("ability_code")],
  UnifiedAbility.prototype,
  "abilityCode",
  undefined,
);
o(
  [l.serializable("ability_param", () => AbilityParam)],
  UnifiedAbility.prototype,
  "abilityParam",
  undefined,
);
