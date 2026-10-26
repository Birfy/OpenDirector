import { DANode } from "./module-uR.js";
import { ImageGenerationResourceContent } from "./module-NG.js";
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
export class ImageGenerationInputResource extends DANode {
  constructor() {
    super(...arguments);
    this.content = undefined;
    this.resourceType = undefined;
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
  [n.serializable("content", () => ImageGenerationResourceContent)],
  ImageGenerationInputResource.prototype,
  "content",
  undefined,
);
o(
  [n.serializable("resource_type")],
  ImageGenerationInputResource.prototype,
  "resourceType",
  undefined,
);
o(
  [n.serializable("purpose")],
  ImageGenerationInputResource.prototype,
  "purpose",
  undefined,
);
