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
export class ImageInputCommonOption extends DANode {
  constructor() {
    super(...arguments);
    this.strength = undefined;
    this.resolution_type = undefined;
  }
  childNodes() {
    return [];
  }
}
o(
  [a.serializable("strength")],
  ImageInputCommonOption.prototype,
  "strength",
  undefined,
);
o(
  [a.serializable("resolution_type")],
  ImageInputCommonOption.prototype,
  "resolution_type",
  undefined,
);
