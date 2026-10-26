import { DAAudioTag } from "./module-cvi.js";
import { DAVideoGenV2VAVMix } from "./module-Gp.js";
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
export class ServerGenerateVideoBGMInput extends n.Serializable {
  constructor() {
    super(...arguments);
    this.originHistoryId = undefined;
    this.originItemId = undefined;
    this.duration = undefined;
    this.tags = undefined;
    this.avMix = undefined;
  }
}
o(
  [n.serializable("origin_history_id")],
  ServerGenerateVideoBGMInput.prototype,
  "originHistoryId",
  undefined,
);
o(
  [n.serializable("origin_item_id")],
  ServerGenerateVideoBGMInput.prototype,
  "originItemId",
  undefined,
);
o(
  [n.serializable("duration")],
  ServerGenerateVideoBGMInput.prototype,
  "duration",
  undefined,
);
o(
  [n.serializable("tags", () => DAAudioTag)],
  ServerGenerateVideoBGMInput.prototype,
  "tags",
  undefined,
);
o(
  [n.serializable("av_mix", () => DAVideoGenV2VAVMix)],
  ServerGenerateVideoBGMInput.prototype,
  "avMix",
  undefined,
);
