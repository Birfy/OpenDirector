import { DANode } from "./module-uR.js";
import { ResourceContent } from "./module-ut.js";
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
export class ImageInputResource extends DANode {
  constructor() {
    super(...arguments);
    this.content = undefined;
    this.resource_type = undefined;
    this.purpose = undefined;
  }
  childNodes() {
    let e = [];
    let content = this.content;
    if (content != undefined) {
      e.push(content);
    }
    return e;
  }
}
o(
  [n.serializable("content", () => ResourceContent)],
  ImageInputResource.prototype,
  "content",
  undefined,
);
o(
  [n.serializable("resource_type")],
  ImageInputResource.prototype,
  "resource_type",
  undefined,
);
o(
  [n.serializable("purpose")],
  ImageInputResource.prototype,
  "purpose",
  undefined,
);
