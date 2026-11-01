import r from "uR";
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
export class DAAudioConfig extends r.DANode {
  constructor() {
    super(...arguments);
    this.format = "mp3";
    this.sampleRate = 24000;
    this.speechRate = 0;
    this.pitchRate = 0;
    this.emotion = undefined;
    this.emotionScale = undefined;
    this.enableTimestamp = undefined;
  }
}
o([a.serializable("format")], DAAudioConfig.prototype, "format", undefined);
o(
  [a.serializable("sample_rate")],
  DAAudioConfig.prototype,
  "sampleRate",
  undefined,
);
o(
  [a.serializable("speech_rate")],
  DAAudioConfig.prototype,
  "speechRate",
  undefined,
);
o(
  [a.serializable("pitch_rate")],
  DAAudioConfig.prototype,
  "pitchRate",
  undefined,
);
o([a.serializable("emotion")], DAAudioConfig.prototype, "emotion", undefined);
o(
  [a.serializable("emotion_scale")],
  DAAudioConfig.prototype,
  "emotionScale",
  undefined,
);
o(
  [a.serializable("enable_timestamp")],
  DAAudioConfig.prototype,
  "enableTimestamp",
  undefined,
);
