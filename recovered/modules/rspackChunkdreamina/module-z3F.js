import { DAAIGCMode } from "./module-J4.js";
import { DADraftMetadata } from "./module-E9.js";
import { DANode } from "./module-uR.js";
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
export class DAComponent extends DANode {
  constructor() {
    super(...arguments);
    this.name = undefined;
    this.parentId = undefined;
    this.aigcMode = DAAIGCMode.none;
    this.genType = undefined;
    this.metaData = undefined;
  }
  afterInit() {
    super.afterInit();
    this.type = "component";
  }
  componentWillResignMain(e) {}
}
o([s.serializable("name")], DAComponent.prototype, "name", undefined);
o([s.serializable("parent_id")], DAComponent.prototype, "parentId", undefined);
o([s.serializable("aigc_mode")], DAComponent.prototype, "aigcMode", undefined);
o([s.serializable("gen_type")], DAComponent.prototype, "genType", undefined);
o(
  [s.serializable("metadata", () => DADraftMetadata)],
  DAComponent.prototype,
  "metaData",
  undefined,
);
