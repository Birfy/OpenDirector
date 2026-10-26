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
export class ImageGenerationImageContent extends DANode {
  constructor() {
    super(...arguments);
    this.imageUri = undefined;
    this.imageUrl = undefined;
    this.width = undefined;
    this.height = undefined;
    this.format = undefined;
    this.itemId = undefined;
    this.historyId = undefined;
    this.originAgenticHistoryId = undefined;
  }
  childNodes() {
    return [];
  }
}
o(
  [a.serializable("image_uri")],
  ImageGenerationImageContent.prototype,
  "imageUri",
  undefined,
);
o(
  [a.serializable("image_url")],
  ImageGenerationImageContent.prototype,
  "imageUrl",
  undefined,
);
o(
  [a.serializable("width")],
  ImageGenerationImageContent.prototype,
  "width",
  undefined,
);
o(
  [a.serializable("height")],
  ImageGenerationImageContent.prototype,
  "height",
  undefined,
);
o(
  [a.serializable("format")],
  ImageGenerationImageContent.prototype,
  "format",
  undefined,
);
o(
  [a.serializable("item_id")],
  ImageGenerationImageContent.prototype,
  "itemId",
  undefined,
);
o(
  [a.serializable("history_id")],
  ImageGenerationImageContent.prototype,
  "historyId",
  undefined,
);
o(
  [a.serializable("origin_agentic_history_id")],
  ImageGenerationImageContent.prototype,
  "originAgenticHistoryId",
  undefined,
);
