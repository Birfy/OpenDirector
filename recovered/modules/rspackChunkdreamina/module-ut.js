import { DANode } from "./module-uR.js";
import { ImageContent } from "./module-Nd.js";
import { ReferenceContent } from "./module-u5.js";
import { TextContent } from "./module-Wc.js";
import d from "Rd";
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
export class ResourceContent extends DANode {
  constructor() {
    super(...arguments);
    this.text = undefined;
    this.image = undefined;
    this.ref = undefined;
  }
  childNodes() {
    let e = [];
    let text = this.text;
    if (text != undefined) {
      e.push(text);
    }
    let image = this.image;
    if (image != undefined) {
      e.push(image);
    }
    let ref = this.ref;
    if (ref != undefined) {
      e.push(ref);
    }
    return e;
  }
}
o(
  [d.serializable("text", () => TextContent)],
  ResourceContent.prototype,
  "text",
  undefined,
);
o(
  [d.serializable("image", () => ImageContent)],
  ResourceContent.prototype,
  "image",
  undefined,
);
o(
  [d.serializable("ref", () => ReferenceContent)],
  ResourceContent.prototype,
  "ref",
  undefined,
);
