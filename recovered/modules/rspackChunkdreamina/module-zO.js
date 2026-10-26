import { DANode } from "./module-uR.js";
import { DAUnifiedEditMaterial } from "./module-ly.js";
import { DAUnifiedEditMaterialType } from "./module-Na.js";
import { DAUnifiedEditMeta } from "./module-iF.js";
import d from "Rd";
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
export class DALongVideoConfig extends DANode {
  constructor() {
    super(...arguments);
    this.extra = undefined;
  }
}
o([d.serializable("extra")], DALongVideoConfig.prototype, "extra", undefined);
export class DALongVideoInput extends DANode {
  constructor() {
    super(...arguments);
    this.materialList = [];
    this.metaList = [];
    this.longVideoConfig = undefined;
  }
  hasSubjectMaterial() {
    let e = false;
    this.materialList.forEach((t) => {
      if (t.materialType === DAUnifiedEditMaterialType.Subject) {
        e = true;
      }
    });
    return e;
  }
  hasSubjectWithVideoOrAudio() {
    let e = false;
    this.materialList.forEach((t) => {
      var i;
      if (t.materialType === DAUnifiedEditMaterialType.Subject) {
        let o = (i = t.subjectData) == null ? undefined : i.content;
        if (o != undefined) {
          if (o.videoInfo != undefined || o.audioInfo != undefined) {
            e = true;
          }
          if (o.selectedVoice != undefined) {
            e = true;
          }
        }
      }
    });
    return e;
  }
  childNodes() {
    let e = [];
    this.materialList.forEach((t) => {
      e.push(t);
    });
    this.metaList.forEach((t) => {
      e.push(t);
    });
    if (this.longVideoConfig != undefined) {
      e.push(this.longVideoConfig);
    }
    return e;
  }
}
o(
  [d.serializable("material_list", () => DAUnifiedEditMaterial)],
  DALongVideoInput.prototype,
  "materialList",
  undefined,
);
o(
  [d.serializable("meta_list", () => DAUnifiedEditMeta)],
  DALongVideoInput.prototype,
  "metaList",
  undefined,
);
o(
  [d.serializable("long_video_config", () => DALongVideoConfig)],
  DALongVideoInput.prototype,
  "longVideoConfig",
  undefined,
);
