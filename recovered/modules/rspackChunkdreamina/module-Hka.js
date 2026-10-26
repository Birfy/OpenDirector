import r from "AB";
import a from "z3F";
import { FeaturesMinVersion } from "./module-ew.js";
import { DAAgentAbility } from "./module-vX.js";
import { DAAICameraAbility } from "./module-src.js";
import { DAImageGenerateAbilities } from "./module-Ej.js";
import { DAImageGenerateType } from "./module-M8t.js";
import u from "./module-Rd.js";
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
export class DAImageBaseComponent extends a.DAComponent {
  constructor() {
    super(...arguments);
    this.generateType = DAImageGenerateType.none;
    this.abilities = undefined;
    this.agent = undefined;
    this.aiCamera = undefined;
  }
  afterInit() {
    super.afterInit();
    this.type = "image_base_component";
    this.minVersion = FeaturesMinVersion.ImageBaseComponent;
  }
  afterParse() {
    let e;
    let t;
    let i;
    let o;
    let a;
    let n;
    let s;
    super.afterParse();
    if (this.genType === undefined) {
      switch (this.generateType) {
        case DAImageGenerateType.generate:
          this.genType = r.DAAIGCGenerateType.text2image;
          break;
        case DAImageGenerateType.blend:
          this.genType = r.DAAIGCGenerateType.blend;
          break;
        case DAImageGenerateType.superResolution:
          this.genType = r.DAAIGCGenerateType.superResolution;
          break;
        case DAImageGenerateType.normalHD:
          this.genType = r.DAAIGCGenerateType.normalHD;
          break;
        case DAImageGenerateType.painting:
          this.genType =
            (i =
              (t = (e = this.abilities) == null ? undefined : e.painting) ==
              null
                ? undefined
                : t.posteditParam) == null
              ? undefined
              : i.generateType;
          break;
        case DAImageGenerateType.proHD:
          this.genType = r.DAAIGCGenerateType.proHD;
          break;
        case DAImageGenerateType.unifiedGenerate:
          this.genType =
            (a =
              (o = this.abilities) == null ? undefined : o.unifiedGenerate) ==
            null
              ? undefined
              : a.generateType;
          break;
        case DAImageGenerateType.unifiedGenerateV2:
          this.genType =
            (s =
              (n = this.abilities) == null ? undefined : n.unifiedGenerateV2) ==
            null
              ? undefined
              : s.generateType;
      }
    }
  }
  childNodes() {
    let e = [];
    let abilities = this.abilities;
    if (abilities != undefined) {
      e.push(abilities);
    }
    let agent = this.agent;
    if (agent != undefined) {
      e.push(agent);
    }
    let aiCamera = this.aiCamera;
    if (aiCamera != undefined) {
      e.push(aiCamera);
    }
    return e;
  }
}
o(
  [u.serializable("generate_type")],
  DAImageBaseComponent.prototype,
  "generateType",
  undefined,
);
o(
  [u.serializable("abilities", () => DAImageGenerateAbilities)],
  DAImageBaseComponent.prototype,
  "abilities",
  undefined,
);
o(
  [u.serializable("agent", () => DAAgentAbility)],
  DAImageBaseComponent.prototype,
  "agent",
  undefined,
);
o(
  [u.serializable("ai_camera", () => DAAICameraAbility)],
  DAImageBaseComponent.prototype,
  "aiCamera",
  undefined,
);
