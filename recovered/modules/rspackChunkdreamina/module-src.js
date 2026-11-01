import r from "uR";
import a from "Ut";
import { MinFeatures } from "./module-xh.js";
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
export class DAAICameraAbility extends r.DANode {
  constructor() {
    super(...arguments);
    this.realGenerateType = undefined;
    this.historyOption = undefined;
    this.postEditType = undefined;
    this.cameraToolItemId = undefined;
  }
  calculateMinFeatures() {
    let e = [];
    if (this.cameraToolItemId != undefined) {
      e.push(MinFeatures.AIGC_BlendAbility_cameraToolItemId);
    }
    this.minFeatures = e;
    return super.calculateMinFeatures();
  }
}
o(
  [s.serializable("camera_api")],
  DAAICameraAbility.prototype,
  "realGenerateType",
  undefined,
);
o(
  [s.serializable("history_option", () => a.DAHistoryOption)],
  DAAICameraAbility.prototype,
  "historyOption",
  undefined,
);
o(
  [s.serializable("post_edit_type")],
  DAAICameraAbility.prototype,
  "postEditType",
  undefined,
);
o(
  [s.serializable("camera_tool_item_id", undefined, "string")],
  DAAICameraAbility.prototype,
  "cameraToolItemId",
  undefined,
);
