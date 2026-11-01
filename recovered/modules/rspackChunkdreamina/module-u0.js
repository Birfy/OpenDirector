import r from "uR";
import { DAAudioTag } from "./module-cvi.js";
import { DARichPrompt } from "./module-M5u.js";
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
export class DAGenerateSongAbility extends r.DANode {
  constructor() {
    super(...arguments);
    this.prompt = undefined;
    this.lyrics = undefined;
    this.duration = undefined;
    this.tags = [];
    this.title = undefined;
    this.modelReqKey = undefined;
  }
}
o(
  [s.serializable("prompt")],
  DAGenerateSongAbility.prototype,
  "prompt",
  undefined,
);
o(
  [s.serializable("lyrics", () => DARichPrompt)],
  DAGenerateSongAbility.prototype,
  "lyrics",
  undefined,
);
o(
  [s.serializable("duration")],
  DAGenerateSongAbility.prototype,
  "duration",
  undefined,
);
o(
  [s.serializable("tags", () => DAAudioTag)],
  DAGenerateSongAbility.prototype,
  "tags",
  undefined,
);
o(
  [s.serializable("title")],
  DAGenerateSongAbility.prototype,
  "title",
  undefined,
);
o(
  [s.serializable("model_req_key")],
  DAGenerateSongAbility.prototype,
  "modelReqKey",
  undefined,
);
