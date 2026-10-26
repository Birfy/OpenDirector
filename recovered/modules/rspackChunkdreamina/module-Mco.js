import r from "AB";
import a from "z3F";
import { FeaturesMinVersion } from "./module-ew.js";
import { MinFeatures } from "./module-xh.js";
import { DAVideoGenerateAbilities } from "./module-xEO.js";
import { DAVideoGenerateType } from "./module-kv.js";
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
export class DAVideoBaseComponent extends a.DAComponent {
  constructor() {
    super(...arguments);
    this.generateType = DAVideoGenerateType.none;
    this.abilities = undefined;
    this.processType = undefined;
  }
  afterInit() {
    super.afterInit();
    this.type = "video_base_component";
    this.minVersion = FeaturesMinVersion.VideoBaseComponent;
  }
  afterParse() {
    super.afterParse();
    if (this.genType === undefined) {
      switch (this.generateType) {
        case DAVideoGenerateType.genVideo:
        case DAVideoGenerateType.subtitleErase:
          this.genType = r.DAAIGCGenerateType.text2Video;
          break;
        case DAVideoGenerateType.lipSync:
          this.genType = r.DAAIGCGenerateType.lipSync;
          break;
        case DAVideoGenerateType.videoTemplate:
          this.genType = r.DAAIGCGenerateType.videoTemplate;
          break;
        case DAVideoGenerateType.videoAudioEffect:
          this.genType = r.DAAIGCGenerateType.videoAudioEffect;
          break;
        case DAVideoGenerateType.videoBgm:
          this.genType = r.DAAIGCGenerateType.videoBGM;
          break;
        case DAVideoGenerateType.mergeVideo:
          this.genType = r.DAAIGCGenerateType.mergeVideo;
      }
    }
  }
  componentWillResignMain(e) {
    let t;
    super.componentWillResignMain(e);
    if (((t = this.abilities) == null ? undefined : t.lipSync) != undefined) {
      this.minFeatures = [MinFeatures.AIGC_LipSync_PostEdit];
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
    let e;
    let t;
    let i;
    let o =
      (i =
        (t = (e = this.abilities) == null ? undefined : e.genVideo) == null
          ? undefined
          : t.text2VideoParams) == null
        ? undefined
        : i.modelReqKey;
    if (
      this.generateType === DAVideoGenerateType.videoTemplate &&
      o != undefined &&
      o != "dreamina_imitator_0.1"
    ) {
      this.minVersion = FeaturesMinVersion.VideoTemplateAddModelReq;
    }
    return super.calculateMinVersion();
  }
}
o(
  [p.serializable("generate_type")],
  DAVideoBaseComponent.prototype,
  "generateType",
  undefined,
);
o(
  [p.serializable("abilities", () => DAVideoGenerateAbilities)],
  DAVideoBaseComponent.prototype,
  "abilities",
  undefined,
);
o(
  [p.serializable("process_type")],
  DAVideoBaseComponent.prototype,
  "processType",
  undefined,
);
