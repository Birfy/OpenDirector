import { DANode } from "./module-uR.js";
import { DAAIGCGenerateType } from "./module-AB.js";
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
export class DAVideoRefParam extends DANode {
  constructor() {
    super(...arguments);
    this.generateType = DAAIGCGenerateType.none;
    this.itemId = undefined;
    this.generateId = undefined;
    this.originHistoryId = undefined;
    this.originAgenticHistoryId = undefined;
  }
}
o(
  [n.serializable("generate_type")],
  DAVideoRefParam.prototype,
  "generateType",
  undefined,
);
o(
  [n.serializable("item_id", undefined, "int64")],
  DAVideoRefParam.prototype,
  "itemId",
  undefined,
);
o(
  [n.serializable("generate_id", undefined, "string")],
  DAVideoRefParam.prototype,
  "generateId",
  undefined,
);
o(
  [n.serializable("origin_history_id", undefined, "int64")],
  DAVideoRefParam.prototype,
  "originHistoryId",
  undefined,
);
o(
  [n.serializable("origin_agentic_history_id", undefined, "string")],
  DAVideoRefParam.prototype,
  "originAgenticHistoryId",
  undefined,
);
