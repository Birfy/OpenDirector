import r from "HS";
import a from "uR";
import { DAAudioTag } from "./module-cvi.js";
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
export class DAGenerateBackgroundMusicAbility extends a.DANode {
  constructor() {
    super(...arguments);
    this.prompt = undefined;
    this.duration = undefined;
    this.tags = [];
    this.refImage = undefined;
  }
}
o(
  [s.serializable("prompt")],
  DAGenerateBackgroundMusicAbility.prototype,
  "prompt",
  undefined,
);
o(
  [s.serializable("duration")],
  DAGenerateBackgroundMusicAbility.prototype,
  "duration",
  undefined,
);
o(
  [s.serializable("tags", () => DAAudioTag)],
  DAGenerateBackgroundMusicAbility.prototype,
  "tags",
  undefined,
);
o(
  [s.serializable("ref_image", () => r.DAImageResource)],
  DAGenerateBackgroundMusicAbility.prototype,
  "refImage",
  undefined,
);
