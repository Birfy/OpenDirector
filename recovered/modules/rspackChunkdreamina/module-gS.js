import n from "./module-Rd.js";
let o;
export var DAVideoPromptSource;
const a =
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
o = DAVideoPromptSource || (DAVideoPromptSource = {});
o.Custom = "custom";
o.Regenerate = "regenerate";
o.Remix = "remix";
o.AddMore = "add_more";
o.Reprompt = "reprompt";
o.LipSync = "lip_sync";
o.ReDub = "re_dub";
export class DAVideoTaskExtraCoverInfo extends n.Serializable {
  constructor() {
    super(...arguments);
    this.imageUrl = undefined;
    this.imageUri = undefined;
    this.width = undefined;
    this.height = undefined;
    this.format = undefined;
  }
}
a(
  [n.serializable("imageUrl")],
  DAVideoTaskExtraCoverInfo.prototype,
  "imageUrl",
  undefined,
);
a(
  [n.serializable("imageUri")],
  DAVideoTaskExtraCoverInfo.prototype,
  "imageUri",
  undefined,
);
a(
  [n.serializable("width")],
  DAVideoTaskExtraCoverInfo.prototype,
  "width",
  undefined,
);
a(
  [n.serializable("height")],
  DAVideoTaskExtraCoverInfo.prototype,
  "height",
  undefined,
);
a(
  [n.serializable("format")],
  DAVideoTaskExtraCoverInfo.prototype,
  "format",
  undefined,
);
export class DAVideoTaskExtra extends n.Serializable {
  constructor() {
    super(...arguments);
    this.promptSource = undefined;
    this.videoProcessType = undefined;
    this.originId = undefined;
    this.isDefaultSeed = 1;
    this.previewId = undefined;
    this.originSubmitId = undefined;
    this.lastSubmitId = undefined;
    this.coverInfo = undefined;
  }
}
a(
  [n.serializable("promptSource")],
  DAVideoTaskExtra.prototype,
  "promptSource",
  undefined,
);
a(
  [n.serializable("videoProcessType")],
  DAVideoTaskExtra.prototype,
  "videoProcessType",
  undefined,
);
a(
  [n.serializable("originId")],
  DAVideoTaskExtra.prototype,
  "originId",
  undefined,
);
a(
  [n.serializable("isDefaultSeed")],
  DAVideoTaskExtra.prototype,
  "isDefaultSeed",
  undefined,
);
a(
  [n.serializable("previewId")],
  DAVideoTaskExtra.prototype,
  "previewId",
  undefined,
);
a(
  [n.serializable("originSubmitId")],
  DAVideoTaskExtra.prototype,
  "originSubmitId",
  undefined,
);
a(
  [n.serializable("lastSubmitId")],
  DAVideoTaskExtra.prototype,
  "lastSubmitId",
  undefined,
);
a(
  [n.serializable("coverInfo", () => DAVideoTaskExtraCoverInfo)],
  DAVideoTaskExtra.prototype,
  "coverInfo",
  undefined,
);
