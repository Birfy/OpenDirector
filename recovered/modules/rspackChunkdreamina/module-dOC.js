import r from "AB";
import a from "z3F";
import { FeaturesMinVersion } from "./module-ew.js";
import { AIEffectGenerateAbilities } from "./module-Xo.js";
import d from "./module-Rd.js";
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
export class DAAIEffectBaseComponent extends a.DAComponent {
  constructor() {
    super(...arguments);
    this.aigcGenerateType = r.DAAIGCGenerateType.none;
    this.abilities = undefined;
  }
  afterInit() {
    super.afterInit();
    this.type = "ai_effect_base_component";
    this.minVersion = FeaturesMinVersion.AIFeatureBaseComponent;
  }
  afterParse() {
    super.afterParse();
    if (this.genType === undefined) {
      this.genType = this.aigcGenerateType;
    }
  }
  childNodes() {
    let e = [];
    let abilities = this.abilities;
    if (abilities != undefined) {
      e.push(abilities);
    }
    return e;
  }
}
o(
  [d.serializable("aigc_generate_type")],
  DAAIEffectBaseComponent.prototype,
  "aigcGenerateType",
  undefined,
);
o(
  [d.serializable("abilities", () => AIEffectGenerateAbilities)],
  DAAIEffectBaseComponent.prototype,
  "abilities",
  undefined,
);
