import { DAText2VideoParams } from "./module-PH_2.js";
import a from "./module-Rd.js";
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
export class ServerMGenerateVideoInput extends a.Serializable {
  constructor() {
    super(...arguments);
    this.input = undefined;
    this.scene = undefined;
  }
}
o(
  [a.serializable("input", () => DAText2VideoParams)],
  ServerMGenerateVideoInput.prototype,
  "input",
  undefined,
);
o(
  [a.serializable("scene")],
  ServerMGenerateVideoInput.prototype,
  "scene",
  undefined,
);
