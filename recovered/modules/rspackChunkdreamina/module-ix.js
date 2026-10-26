import { DANode } from "./module-uR.js";
import a from "Rd";
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
export class DAUnifiedEditMaterialSourceInfo extends DANode {
  constructor() {
    super(...arguments);
    this.sourceMaterialIdx = 0;
    this.timestampMs = 0;
  }
}
o(
  [a.serializable("source_material_idx")],
  DAUnifiedEditMaterialSourceInfo.prototype,
  "sourceMaterialIdx",
  undefined,
);
o(
  [a.serializable("timestamp_ms")],
  DAUnifiedEditMaterialSourceInfo.prototype,
  "timestampMs",
  undefined,
);
export class DAUnifiedEditMaterialRef extends DANode {
  constructor() {
    super(...arguments);
    this.materialIdx = 0;
    this.sourceInfo = undefined;
  }
  childNodes() {
    let e = [];
    if (this.sourceInfo != undefined) {
      e.push(this.sourceInfo);
    }
    return e;
  }
}
o(
  [a.serializable("material_idx")],
  DAUnifiedEditMaterialRef.prototype,
  "materialIdx",
  undefined,
);
o(
  [a.serializable("source_info", () => DAUnifiedEditMaterialSourceInfo)],
  DAUnifiedEditMaterialRef.prototype,
  "sourceInfo",
  undefined,
);
