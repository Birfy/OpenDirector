import { DANode } from "./module-uR.js";
import { ViewControlOption } from "./module-OV.js";
import n from "Rd";
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
export class UnifiedAbilityOption extends DANode {
  constructor() {
    super(...arguments);
    this.viewControl = undefined;
  }
  childNodes() {
    let e = [];
    let viewControl = this.viewControl;
    if (viewControl != undefined) {
      e.push(viewControl);
    }
    return e;
  }
}
o(
  [n.serializable("view_control", () => ViewControlOption)],
  UnifiedAbilityOption.prototype,
  "viewControl",
  undefined,
);
export class UnifiedAbilityPolicy extends DANode {
  constructor() {
    super(...arguments);
    this.abilityOption = undefined;
  }
  childNodes() {
    let e = [];
    let abilityOption = this.abilityOption;
    if (abilityOption != undefined) {
      e.push(abilityOption);
    }
    return e;
  }
}
o(
  [n.serializable("ability_option", () => UnifiedAbilityOption)],
  UnifiedAbilityPolicy.prototype,
  "abilityOption",
  undefined,
);
