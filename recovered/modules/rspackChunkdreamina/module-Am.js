import r from "oN";
import a from "Eh";
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
export class DAImageSuperResolutionAbility extends n.DANode {
  constructor() {
    super(...arguments);
    this.coreParam = undefined;
    this.posteditParam = undefined;
    this.canvasLayerId = undefined;
  }
  childNodes() {
    let e = [];
    let coreParam = this.coreParam;
    if (coreParam != undefined) {
      e.push(coreParam);
    }
    let posteditParam = this.posteditParam;
    if (posteditParam != undefined) {
      e.push(posteditParam);
    }
    return e;
  }
}
o(
  [s.serializable("core_param", () => r.DAGenCoreParam)],
  DAImageSuperResolutionAbility.prototype,
  "coreParam",
  undefined,
);
o(
  [s.serializable("postedit_param", () => a.DAPostEditParam)],
  DAImageSuperResolutionAbility.prototype,
  "posteditParam",
  undefined,
);
o(
  [s.serializable("canvas_layer_id")],
  DAImageSuperResolutionAbility.prototype,
  "canvasLayerId",
  undefined,
);
