import { DANode } from "./module-uR.js";
import { ImageGenerationImageContent } from "./module-eJF.js";
import { ImageGenerationTextContent } from "./module-eQY.js";
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
export class ImageGenerationResourceContent extends DANode {
  constructor() {
    super(...arguments);
    this.text = undefined;
    this.image = undefined;
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
    return e;
  }
}
o(
  [s.serializable("text", () => ImageGenerationTextContent)],
  ImageGenerationResourceContent.prototype,
  "text",
  undefined,
);
o(
  [s.serializable("image", () => ImageGenerationImageContent)],
  ImageGenerationResourceContent.prototype,
  "image",
  undefined,
);
