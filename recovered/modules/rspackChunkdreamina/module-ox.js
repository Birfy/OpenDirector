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
export class DAUnifiedEditExtendInput extends DANode {
  constructor() {
    super(...arguments);
    this.enable = false;
    this.extendFromMaterialIdx = undefined;
  }
}
o(
  [d.serializable("enable")],
  DAUnifiedEditExtendInput.prototype,
  "enable",
  undefined,
);
o(
  [d.serializable("extend_from_material_idx")],
  DAUnifiedEditExtendInput.prototype,
  "extendFromMaterialIdx",
  undefined,
);
export class DAUnifiedEditEditInput extends DANode {
  constructor() {
    super(...arguments);
    this.enable = false;
    this.editFromMaterialIdx = undefined;
    this.startTimestampMs = undefined;
    this.endTimestampMs = undefined;
  }
}
o(
  [d.serializable("enable")],
  DAUnifiedEditEditInput.prototype,
  "enable",
  undefined,
);
o(
  [d.serializable("edit_from_material_idx")],
  DAUnifiedEditEditInput.prototype,
  "editFromMaterialIdx",
  undefined,
);
o(
  [d.serializable("start_timestamp_ms")],
  DAUnifiedEditEditInput.prototype,
  "startTimestampMs",
  undefined,
);
o(
  [d.serializable("end_timestamp_ms")],
  DAUnifiedEditEditInput.prototype,
  "endTimestampMs",
  undefined,
);
export class DAUnifiedEditInput extends DANode {
  constructor() {
    super(...arguments);
    this.materialList = [];
    this.metaList = [];
    this.extendInput = undefined;
    this.editInput = undefined;
  }
  hasMaterialSourceInfo() {
    let e = false;
    this.metaList.forEach((t) => {
      var i;
      if (
        ((i = t.materialRef) == null ? undefined : i.sourceInfo) != undefined
      ) {
        e = true;
      }
    });
    return e;
  }
  hasVideoContinuation() {
    let e;
    return (
      ((e = this.extendInput) == null ? undefined : e.enable) === true &&
      this.extendInput.extendFromMaterialIdx != undefined &&
      !!(this.extendInput.extendFromMaterialIdx >= 0)
    );
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
    if (this.extendInput != undefined) {
      e.push(this.extendInput);
    }
    if (this.editInput != undefined) {
      e.push(this.editInput);
    }
    return e;
  }
}
o(
  [d.serializable("material_list", () => DAUnifiedEditMaterial)],
  DAUnifiedEditInput.prototype,
  "materialList",
  undefined,
);
o(
  [d.serializable("meta_list", () => DAUnifiedEditMeta)],
  DAUnifiedEditInput.prototype,
  "metaList",
  undefined,
);
o(
  [d.serializable("extend_input", () => DAUnifiedEditExtendInput)],
  DAUnifiedEditInput.prototype,
  "extendInput",
  undefined,
);
o(
  [d.serializable("edit_input", () => DAUnifiedEditEditInput)],
  DAUnifiedEditInput.prototype,
  "editInput",
  undefined,
);
