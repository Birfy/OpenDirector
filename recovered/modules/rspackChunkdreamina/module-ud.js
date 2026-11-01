import r from "Eh";
import a from "uR";
import { FeaturesMinVersion } from "./module-ew.js";
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
export class DAImageNormalHDAbility extends a.DANode {
  constructor() {
    super(...arguments);
    this.posteditParam = undefined;
  }
  childNodes() {
    let e = [];
    let posteditParam = this.posteditParam;
    if (posteditParam != undefined) {
      e.push(posteditParam);
    }
    return e;
  }
  calculateMinVersion() {
    let e;
    if (
      ((e = this.posteditParam) == null ? undefined : e.originImage) !=
      undefined
    ) {
      return FeaturesMinVersion.ImageOriginHD;
    }
    return super.calculateMinVersion();
  }
}
o(
  [s.serializable("postedit_param", () => r.DAPostEditParam)],
  DAImageNormalHDAbility.prototype,
  "posteditParam",
  undefined,
);
