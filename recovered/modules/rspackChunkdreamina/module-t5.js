import r from "oN";
import a from "vi";
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
export class DAImageGenerateAbility extends n.DANode {
  constructor() {
    super(...arguments);
    this.coreParam = undefined;
    this.historyOption = undefined;
  }
  childNodes() {
    let e = [];
    let coreParam = this.coreParam;
    if (coreParam != undefined) {
      e.push(coreParam);
    }
    let historyOption = this.historyOption;
    if (historyOption != undefined) {
      e.push(historyOption);
    }
    return e;
  }
}
o(
  [s.serializable("core_param", () => r.DAGenCoreParam)],
  DAImageGenerateAbility.prototype,
  "coreParam",
  undefined,
);
o(
  [s.serializable("history_option", () => a.DAHistoryOption)],
  DAImageGenerateAbility.prototype,
  "historyOption",
  undefined,
);
