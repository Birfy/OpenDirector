import r from "uR";
import { DAGenerateBackgroundMusicAbility } from "./module-Mx.js";
import { DAGenerateInstrumentalAbility } from "./module-bKF.js";
import { DAGenerateSongAbility } from "./module-u0.js";
import { DATextToSpeechAbility } from "./module-OU.js";
import l from "./module-Rd.js";
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
export class DAAudioGenerateAbilities extends r.DANode {
  constructor() {
    super(...arguments);
    this.generateSong = undefined;
    this.generateBackgroundMusic = undefined;
    this.generateInstrumental = undefined;
    this.textToSpeech = undefined;
  }
  childNodes() {
    let e = [];
    if (this.generateSong != undefined) {
      e.push(this.generateSong);
    }
    if (this.generateBackgroundMusic != undefined) {
      e.push(this.generateBackgroundMusic);
    }
    if (this.generateInstrumental != undefined) {
      e.push(this.generateInstrumental);
    }
    if (this.textToSpeech != undefined) {
      e.push(this.textToSpeech);
    }
    return e;
  }
}
o(
  [l.serializable("generate_song", () => DAGenerateSongAbility)],
  DAAudioGenerateAbilities.prototype,
  "generateSong",
  undefined,
);
o(
  [
    l.serializable(
      "generate_background_music",
      () => DAGenerateBackgroundMusicAbility,
    ),
  ],
  DAAudioGenerateAbilities.prototype,
  "generateBackgroundMusic",
  undefined,
);
o(
  [
    l.serializable(
      "generate_instrumental",
      () => DAGenerateInstrumentalAbility,
    ),
  ],
  DAAudioGenerateAbilities.prototype,
  "generateInstrumental",
  undefined,
);
o(
  [l.serializable("text_to_speech", () => DATextToSpeechAbility)],
  DAAudioGenerateAbilities.prototype,
  "textToSpeech",
  undefined,
);
