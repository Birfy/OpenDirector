import r from "oN";
import a from "uR";
import { DAImageBlendAbilityItem } from "./module-HZ.js";
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
export class DAImageMixBlendAbility extends a.DANode {
  constructor() {
    super(...arguments);
    this.coreParam = undefined;
    this.abilityList = undefined;
    this.isDefault = undefined;
    this.imageUriList = undefined;
  }
  childNodes() {
    let e = [];
    let coreParam = this.coreParam;
    if (coreParam != undefined) {
      e.push(coreParam);
    }
    let abilityList = this.abilityList;
    if (abilityList != undefined) {
      abilityList.forEach((t) => {
        e.push(t);
      });
    }
    return e;
  }
}
o(
  [s.serializable("core_param", () => r.DAGenCoreParam)],
  DAImageMixBlendAbility.prototype,
  "coreParam",
  undefined,
);
o(
  [s.serializable("ability_list", () => DAImageBlendAbilityItem)],
  DAImageMixBlendAbility.prototype,
  "abilityList",
  undefined,
);
o(
  [s.serializable("is_default")],
  DAImageMixBlendAbility.prototype,
  "isDefault",
  undefined,
);
o(
  [s.serializable("image_uri_list")],
  DAImageMixBlendAbility.prototype,
  "imageUriList",
  undefined,
);
