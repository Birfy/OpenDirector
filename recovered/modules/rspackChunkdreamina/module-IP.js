import { DAVideoGenV2VAVMix } from "./module-Gp.js";
import a from "./module-Rd.js";
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
export class ServerGenerateVideoAudioEffectInput extends a.Serializable {
  constructor() {
    super(...arguments);
    this.originHistoryId = undefined;
    this.originItemId = undefined;
    this.avMix = undefined;
  }
}
o(
  [a.serializable("origin_history_id", undefined, "int64")],
  ServerGenerateVideoAudioEffectInput.prototype,
  "originHistoryId",
  undefined,
);
o(
  [a.serializable("origin_item_id", undefined, "int64")],
  ServerGenerateVideoAudioEffectInput.prototype,
  "originItemId",
  undefined,
);
o(
  [a.serializable("av_mix", () => DAVideoGenV2VAVMix)],
  ServerGenerateVideoAudioEffectInput.prototype,
  "avMix",
  undefined,
);
