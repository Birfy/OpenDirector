import { DAPromptElementNode } from "./module-Ph.js";
import { DAPromptLyricsTagNode } from "./module-Fms.js";
import { DAPromptTextNode } from "./module-kMD.js";
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
export class DAPromptParagraphNode extends DAPromptElementNode {
  constructor() {
    super(...arguments);
    this.children = [];
  }
  afterInit() {
    super.afterInit();
    this.type = "paragraph";
  }
  afterParse() {
    super.afterParse();
    this.children = this.children.map((e, t, i) => {
      if (e.type === "lyrics_tag") {
        return new DAPromptLyricsTagNode(undefined, e.rawData);
      }
      if (e.type === "paragraph") {
        return new DAPromptParagraphNode(undefined, e.rawData);
      }
      if (e.type === "text") {
        return new DAPromptTextNode(undefined, e.rawData);
      }
      return e;
    });
  }
}
o(
  [s.serializable("children", () => DAPromptElementNode)],
  DAPromptParagraphNode.prototype,
  "children",
  undefined,
);
