import { DANode } from "./module-uR.js";
import { ImageGenerationInputResource } from "./module-EvH.js";
import { UnifiedAbilityPolicy } from "./module-te_2.js";
import s from "Rd";
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
export class UnifiedAbilityV2 extends DANode {
  constructor() {
    super(...arguments);
    this.abilityCode = undefined;
    this.resourceList = undefined;
    this.policy = undefined;
    this.extra = undefined;
  }
  childNodes() {
    let e = [];
    let resourceList = this.resourceList;
    if (resourceList != undefined) {
      resourceList.forEach((t) => {
        e.push(t);
      });
    }
    let policy = this.policy;
    if (policy != undefined) {
      e.push(policy);
    }
    return e;
  }
}
o(
  [s.serializable("ability_code")],
  UnifiedAbilityV2.prototype,
  "abilityCode",
  undefined,
);
o(
  [s.serializable("resource_list", () => ImageGenerationInputResource)],
  UnifiedAbilityV2.prototype,
  "resourceList",
  undefined,
);
o(
  [s.serializable("policy", () => UnifiedAbilityPolicy)],
  UnifiedAbilityV2.prototype,
  "policy",
  undefined,
);
o([s.serializable("extra")], UnifiedAbilityV2.prototype, "extra", undefined);
