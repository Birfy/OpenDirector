import { DANode } from "./module-uR.js";
import { DAUnifiedEditMaterialRef } from "./module-ix.js";
import { DAUnifiedEditMaterialType } from "./module-Na.js";
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
export class DAUnifiedEditMeta extends DANode {
  constructor() {
    super(...arguments);
    this.metaType = DAUnifiedEditMaterialType.Text;
    this.text = "";
    this.materialRef = undefined;
  }
  childNodes() {
    let e = [];
    if (this.materialRef != undefined) {
      e.push(this.materialRef);
    }
    return e;
  }
}
o(
  [s.serializable("meta_type")],
  DAUnifiedEditMeta.prototype,
  "metaType",
  undefined,
);
o([s.serializable("text")], DAUnifiedEditMeta.prototype, "text", undefined);
o(
  [s.serializable("material_ref", () => DAUnifiedEditMaterialRef)],
  DAUnifiedEditMeta.prototype,
  "materialRef",
  undefined,
);
