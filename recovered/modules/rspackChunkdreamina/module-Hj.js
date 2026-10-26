import r from "Rd";
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
export class DAUnifiedEditInputAgent extends r.Serializable {
  constructor() {
    super(...arguments);
    this.materialList = undefined;
    this.metaList = undefined;
    this.extendInput = undefined;
    this.editInput = undefined;
  }
}
o(
  [r.serializable("materialList", () => DAUnifiedEditMaterialAgent)],
  DAUnifiedEditInputAgent.prototype,
  "materialList",
  undefined,
);
o(
  [r.serializable("metaList", () => DAUnifiedEditMetaAgent)],
  DAUnifiedEditInputAgent.prototype,
  "metaList",
  undefined,
);
o(
  [r.serializable("extendInput", () => DAUnifiedEditExtendInputAgent)],
  DAUnifiedEditInputAgent.prototype,
  "extendInput",
  undefined,
);
o(
  [r.serializable("editInput", () => DAUnifiedEditEditInputAgent)],
  DAUnifiedEditInputAgent.prototype,
  "editInput",
  undefined,
);
export class DAUnifiedEditExtendInputAgent extends r.Serializable {
  constructor() {
    super(...arguments);
    this.enable = false;
    this.extendFromMaterialIdx = undefined;
  }
}
o(
  [r.serializable("enable")],
  DAUnifiedEditExtendInputAgent.prototype,
  "enable",
  undefined,
);
o(
  [r.serializable("extendFromMaterialIdx", undefined, "int")],
  DAUnifiedEditExtendInputAgent.prototype,
  "extendFromMaterialIdx",
  undefined,
);
export class DAUnifiedEditEditInputAgent extends r.Serializable {
  constructor() {
    super(...arguments);
    this.enable = false;
    this.editFromMaterialIdx = undefined;
    this.startTimestampMs = undefined;
    this.endTimestampMs = undefined;
  }
}
o(
  [r.serializable("enable")],
  DAUnifiedEditEditInputAgent.prototype,
  "enable",
  undefined,
);
o(
  [r.serializable("editFromMaterialIdx", undefined, "int")],
  DAUnifiedEditEditInputAgent.prototype,
  "editFromMaterialIdx",
  undefined,
);
o(
  [r.serializable("startTimestampMs", undefined, "int")],
  DAUnifiedEditEditInputAgent.prototype,
  "startTimestampMs",
  undefined,
);
o(
  [r.serializable("endTimestampMs", undefined, "int")],
  DAUnifiedEditEditInputAgent.prototype,
  "endTimestampMs",
  undefined,
);
export class DAUnifiedEditMaterialSubjectData extends r.Serializable {
  constructor() {
    super(...arguments);
    this.uid = "";
    this.subjectId = "";
    this.dataId = "";
    this.content = undefined;
  }
}
o(
  [r.serializable("uid")],
  DAUnifiedEditMaterialSubjectData.prototype,
  "uid",
  undefined,
);
o(
  [r.serializable("subjectId")],
  DAUnifiedEditMaterialSubjectData.prototype,
  "subjectId",
  undefined,
);
o(
  [r.serializable("dataId")],
  DAUnifiedEditMaterialSubjectData.prototype,
  "dataId",
  undefined,
);
o(
  [r.serializable("content", () => DAUnifiedEditMaterialSubjectContent)],
  DAUnifiedEditMaterialSubjectData.prototype,
  "content",
  undefined,
);
export class DAUnifiedEditMaterialSubjectContent extends r.Serializable {
  constructor() {
    super(...arguments);
    this.name = "";
    this.mainImage = undefined;
    this.auxiliaryImages = undefined;
    this.videoInfo = undefined;
    this.audioInfo = undefined;
    this.selectedVoice = undefined;
  }
}
o(
  [r.serializable("name")],
  DAUnifiedEditMaterialSubjectContent.prototype,
  "name",
  undefined,
);
o(
  [r.serializable("mainImage", () => DAUnifiedEditMaterialImageInfoAgent)],
  DAUnifiedEditMaterialSubjectContent.prototype,
  "mainImage",
  undefined,
);
o(
  [
    r.serializable(
      "auxiliaryImages",
      () => DAUnifiedEditMaterialImageInfoAgent,
    ),
  ],
  DAUnifiedEditMaterialSubjectContent.prototype,
  "auxiliaryImages",
  undefined,
);
o(
  [r.serializable("videoInfo", () => DAUnifiedEditMaterialVideoInfoAgent)],
  DAUnifiedEditMaterialSubjectContent.prototype,
  "videoInfo",
  undefined,
);
o(
  [r.serializable("audioInfo", () => DAUnifiedEditMaterialAudioInfoAgent)],
  DAUnifiedEditMaterialSubjectContent.prototype,
  "audioInfo",
  undefined,
);
o(
  [r.serializable("selectedVoice", () => DAUnifiedEditMaterialAudioInfoAgent)],
  DAUnifiedEditMaterialSubjectContent.prototype,
  "selectedVoice",
  undefined,
);
export class DAUnifiedEditMaterialImageInfoAgent extends r.Serializable {
  constructor() {
    super(...arguments);
    this.imageUri = undefined;
    this.aigcImage = undefined;
  }
}
o(
  [r.serializable("imageUri")],
  DAUnifiedEditMaterialImageInfoAgent.prototype,
  "imageUri",
  undefined,
);
o(
  [r.serializable("aigcImage", () => DAUnifiedEditMaterialAigcImageAgent)],
  DAUnifiedEditMaterialImageInfoAgent.prototype,
  "aigcImage",
  undefined,
);
export class DAUnifiedEditMaterialAigcImageAgent extends r.Serializable {
  constructor() {
    super(...arguments);
    this.itemId = undefined;
  }
}
o(
  [r.serializable("itemId", undefined, "int")],
  DAUnifiedEditMaterialAigcImageAgent.prototype,
  "itemId",
  undefined,
);
export class DAUnifiedEditMaterialVideoInfoAgent extends r.Serializable {
  constructor() {
    super(...arguments);
    this.vid = undefined;
  }
}
o(
  [r.serializable("vid")],
  DAUnifiedEditMaterialVideoInfoAgent.prototype,
  "vid",
  undefined,
);
export class DAUnifiedEditMaterialAudioInfoAgent extends r.Serializable {
  constructor() {
    super(...arguments);
    this.vid = undefined;
  }
}
o(
  [r.serializable("vid")],
  DAUnifiedEditMaterialAudioInfoAgent.prototype,
  "vid",
  undefined,
);
export class DAUnifiedEditMaterialAgent extends r.Serializable {
  constructor() {
    super(...arguments);
    this.materialType = undefined;
    this.materialId = undefined;
    this.imageInfo = undefined;
    this.subjectData = undefined;
  }
}
o(
  [r.serializable("materialType")],
  DAUnifiedEditMaterialAgent.prototype,
  "materialType",
  undefined,
);
o(
  [r.serializable("materialId")],
  DAUnifiedEditMaterialAgent.prototype,
  "materialId",
  undefined,
);
o(
  [r.serializable("imageInfo", () => DAUnifiedEditMaterialImageInfoAgent)],
  DAUnifiedEditMaterialAgent.prototype,
  "imageInfo",
  undefined,
);
o(
  [r.serializable("subjectData", () => DAUnifiedEditMaterialSubjectData)],
  DAUnifiedEditMaterialAgent.prototype,
  "subjectData",
  undefined,
);
export class DAUnifiedEditMetaAgent extends r.Serializable {
  constructor() {
    super(...arguments);
    this.metaType = undefined;
    this.text = undefined;
    this.materialIndex = undefined;
  }
}
o(
  [r.serializable("metaType")],
  DAUnifiedEditMetaAgent.prototype,
  "metaType",
  undefined,
);
o(
  [r.serializable("text")],
  DAUnifiedEditMetaAgent.prototype,
  "text",
  undefined,
);
o(
  [r.serializable("materialIndex")],
  DAUnifiedEditMetaAgent.prototype,
  "materialIndex",
  undefined,
);
