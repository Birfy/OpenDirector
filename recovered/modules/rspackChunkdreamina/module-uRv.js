import r from "HS";
import a from "uR";
import n from "./module-Rd.js";
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
export class AIEffectInput extends a.DANode {
  constructor() {
    super(...arguments);
    this.uuid = undefined;
    this.resourceType = undefined;
    this.image = undefined;
    this.text = undefined;
  }
  childNodes() {
    let e = [];
    if (this.image != undefined) {
      e.push(this.image);
    }
    return e;
  }
}
o([n.serializable("uuid")], AIEffectInput.prototype, "uuid", undefined);
o(
  [n.serializable("resource_type")],
  AIEffectInput.prototype,
  "resourceType",
  undefined,
);
o(
  [n.serializable("image", () => r.DAImageResource)],
  AIEffectInput.prototype,
  "image",
  undefined,
);
o([n.serializable("text")], AIEffectInput.prototype, "text", undefined);
