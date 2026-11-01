import r from "AB";
import a from "z3F";
import { FeaturesMinVersion } from "./module-ew.js";
import { MinFeatures } from "./module-xh.js";
import { DAAudioGenerateAbilities } from "./module-uv.js";
import { AudioGenerateType } from "./module-gj.js";
import p from "./module-Rd.js";
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
export class DAAudioBaseComponent extends a.DAComponent {
  constructor() {
    super(...arguments);
    this.generateType = AudioGenerateType.GenerateSong;
    this.abilities = undefined;
  }
  afterInit() {
    super.afterInit();
    this.type = "audio_base_component";
    this.minVersion = FeaturesMinVersion.AudioBaseComponent;
  }
  afterParse() {
    super.afterParse();
    if (this.genType === undefined) {
      switch (this.generateType) {
        case AudioGenerateType.GenerateSong:
          this.genType = r.DAAIGCGenerateType.text2Song;
          break;
        case AudioGenerateType.GenerateInstrumental:
          this.genType = r.DAAIGCGenerateType.text2Instrumental;
          break;
        case AudioGenerateType.GenerateTTS:
          this.genType = r.DAAIGCGenerateType.audioTTS;
          break;
        case AudioGenerateType.VideoDubbing:
          this.genType = r.DAAIGCGenerateType.videoDubbing;
      }
    }
  }
  childNodes() {
    let e = [];
    let abilities = this.abilities;
    if (abilities != undefined) {
      e.push(abilities);
    }
    return e;
  }
  calculateMinVersion() {
    if (
      this.generateType === AudioGenerateType.VideoDubbing ||
      this.genType === r.DAAIGCGenerateType.videoDubbing
    ) {
      this.minVersion = FeaturesMinVersion.SeedAudioV2;
    }
    return super.calculateMinVersion();
  }
  calculateMinFeatures() {
    let e;
    let t;
    let i = [];
    let o =
      (t = (e = this.abilities) == null ? undefined : e.generateSong) == null
        ? undefined
        : t.modelReqKey;
    if (
      this.genType === r.DAAIGCGenerateType.text2Song &&
      o != undefined &&
      o.length > 0
    ) {
      i.push(MinFeatures.AIGC_GenerateType_Text2SongSupportModel);
    }
    this.minFeatures = i;
    return super.calculateMinFeatures();
  }
}
o(
  [p.serializable("generate_type")],
  DAAudioBaseComponent.prototype,
  "generateType",
  undefined,
);
o(
  [p.serializable("abilities", () => DAAudioGenerateAbilities)],
  DAAudioBaseComponent.prototype,
  "abilities",
  undefined,
);
