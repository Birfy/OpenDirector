import n from "j8A";
import { AgentGenerateType } from "./module-Aa.js";
import { CutoutAgentDraftBuilder } from "./module-mF.js";
import { GenVideoAgentDraftBuilder } from "./module-EfG.js";
import { ImagePaintingAgentDraftBuilder } from "./module-wX.js";
import { ImageProHDAgentDraftBuilder } from "./module-s9.js";
import { ImageToImageAgentDraftBuilder } from "./module-yb.js";
import { MergeVideoAgentDraftBuilder } from "./module-qT.js";
import { TextToImageAgentDraftBuilder } from "./module-xq.js";
import { TextToMusicAgentDraftBuilder } from "./module-Eff.js";
import f from "./module-Rd.js";
let o;
export var CreateAgentDraftRetCode;
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
export const createDraftForAgent = function (e) {
  let t;
  let i;
  let o = new CreateAgentDraftReq(e);
  switch (o.agentGenerateType) {
    case AgentGenerateType.textToImage:
      i = new TextToImageAgentDraftBuilder();
      break;
    case AgentGenerateType.blendByteEdit:
    case AgentGenerateType.blendIPKeep:
      i = new ImageToImageAgentDraftBuilder();
      break;
    case AgentGenerateType.paintingImageFineTune:
    case AgentGenerateType.paintingImageExtend:
    case AgentGenerateType.paintingImageReconstruct:
      i = new ImagePaintingAgentDraftBuilder();
      break;
    case AgentGenerateType.genVideo:
      i = new GenVideoAgentDraftBuilder();
      break;
    case AgentGenerateType.proHD:
      i = new ImageProHDAgentDraftBuilder();
      break;
    case AgentGenerateType.cutout:
      i = new CutoutAgentDraftBuilder();
      break;
    case AgentGenerateType.mergeVideo:
      i = new MergeVideoAgentDraftBuilder();
      break;
    case AgentGenerateType.text2music:
      i = new TextToMusicAgentDraftBuilder();
  }
  return (
    (t = i == null ? undefined : i.buildDraft(o)) != null
      ? t
      : CreateAgentDraftResp.buildErrorRsp(
          CreateAgentDraftRetCode.agentDraftBuilderNotFound,
          `\u{68C0}\u{67E5}\u{662F}\u{5426}\u{5B9E}\u{73B0}\u{4E86}\u{5BF9}\u{5E94} AgentDraftBuilder, req=${e}`,
        )
  ).toJSONString();
};
export class CreateAgentDraftReq extends f.Serializable {
  constructor() {
    super(...arguments);
    this.agentGenerateType = undefined;
    this.aigcMode = undefined;
    this.creationAgentVersion = undefined;
    this.imageDraftReq = undefined;
    this.videoDraftReq = undefined;
    this.audioDraftReq = undefined;
  }
}
a(
  [f.serializable("agentGenerateType")],
  CreateAgentDraftReq.prototype,
  "agentGenerateType",
  undefined,
);
a(
  [f.serializable("aigcMode")],
  CreateAgentDraftReq.prototype,
  "aigcMode",
  undefined,
);
a(
  [f.serializable("creationAgentVersion")],
  CreateAgentDraftReq.prototype,
  "creationAgentVersion",
  undefined,
);
a(
  [f.serializable("imageDraftReq")],
  CreateAgentDraftReq.prototype,
  "imageDraftReq",
  undefined,
);
a(
  [f.serializable("videoDraftReq")],
  CreateAgentDraftReq.prototype,
  "videoDraftReq",
  undefined,
);
a(
  [f.serializable("audioDraftReq")],
  CreateAgentDraftReq.prototype,
  "audioDraftReq",
  undefined,
);
export class ImageDraftReq extends f.Serializable {
  constructor() {
    super(...arguments);
    this.prompt = undefined;
    this.modelReqKey = undefined;
    this.targetImageInfo = undefined;
    this.blendImageUri = undefined;
    this.proHDInfo = undefined;
    this.promptPlaceholderInfoList = undefined;
    this.blendImageUriList = undefined;
    this.imageGenerateOption = undefined;
    this.cutoutInfo = undefined;
    this.unifiedEditInput = undefined;
  }
}
a([f.serializable("prompt")], ImageDraftReq.prototype, "prompt", undefined);
a(
  [f.serializable("modelReqKey")],
  ImageDraftReq.prototype,
  "modelReqKey",
  undefined,
);
a(
  [f.serializable("targetImageInfo")],
  ImageDraftReq.prototype,
  "targetImageInfo",
  undefined,
);
a(
  [f.serializable("blendImageUri")],
  ImageDraftReq.prototype,
  "blendImageUri",
  undefined,
);
a(
  [f.serializable("proHDInfo")],
  ImageDraftReq.prototype,
  "proHDInfo",
  undefined,
);
a(
  [f.serializable("promptPlaceholderInfoList")],
  ImageDraftReq.prototype,
  "promptPlaceholderInfoList",
  undefined,
);
a(
  [f.serializable("blendImageUriList")],
  ImageDraftReq.prototype,
  "blendImageUriList",
  undefined,
);
a(
  [f.serializable("imageGenerateOption")],
  ImageDraftReq.prototype,
  "imageGenerateOption",
  undefined,
);
a(
  [f.serializable("cutoutInfo")],
  ImageDraftReq.prototype,
  "cutoutInfo",
  undefined,
);
a(
  [f.serializable("unifiedEditInput")],
  ImageDraftReq.prototype,
  "unifiedEditInput",
  undefined,
);
export class BlendPromptPlaceHolderInfo extends f.Serializable {
  constructor() {
    super(...arguments);
    this.abilityIndex = undefined;
  }
}
a(
  [f.serializable("abilityIndex")],
  BlendPromptPlaceHolderInfo.prototype,
  "abilityIndex",
  undefined,
);
export class VideoDraftReq extends f.Serializable {
  constructor() {
    super(...arguments);
    this.prompt = undefined;
    this.modelReqKey = undefined;
    this.refInfo = undefined;
    this.targetVideoInfo = undefined;
    this.firstFrameImageUri = undefined;
    this.endFrameImageUri = undefined;
    this.multiFrameInfos = undefined;
    this.unifiedEditInput = undefined;
    this.mergeVideoInput = undefined;
  }
}
a([f.serializable("prompt")], VideoDraftReq.prototype, "prompt", undefined);
a(
  [f.serializable("modelReqKey")],
  VideoDraftReq.prototype,
  "modelReqKey",
  undefined,
);
a([f.serializable("refInfo")], VideoDraftReq.prototype, "refInfo", undefined);
a(
  [f.serializable("targetVideoInfo")],
  VideoDraftReq.prototype,
  "targetVideoInfo",
  undefined,
);
a(
  [f.serializable("firstFrameImageUri")],
  VideoDraftReq.prototype,
  "firstFrameImageUri",
  undefined,
);
a(
  [f.serializable("endFrameImageUri")],
  VideoDraftReq.prototype,
  "endFrameImageUri",
  undefined,
);
a(
  [f.serializable("multiFrameInfos")],
  VideoDraftReq.prototype,
  "multiFrameInfos",
  undefined,
);
a(
  [f.serializable("unifiedEditInput")],
  VideoDraftReq.prototype,
  "unifiedEditInput",
  undefined,
);
a(
  [f.serializable("mergeVideoInput")],
  VideoDraftReq.prototype,
  "mergeVideoInput",
  undefined,
);
export class AudioDraftReq extends f.Serializable {
  constructor() {
    super(...arguments);
    this.prompt = undefined;
    this.modelReqKey = undefined;
  }
}
a([f.serializable("prompt")], AudioDraftReq.prototype, "prompt", undefined);
a(
  [f.serializable("modelReqKey")],
  AudioDraftReq.prototype,
  "modelReqKey",
  undefined,
);
export class CreateAgentDraftResp extends f.Serializable {
  static buildErrorRsp(e, t) {
    return new CreateAgentDraftResp(e, t, new n.DADraft());
  }
  static buildSucceedRsp(e) {
    return new CreateAgentDraftResp(
      CreateAgentDraftRetCode.succeed,
      "succeed",
      e,
    );
  }
  constructor(e, t, i) {
    super();
    this.code = e;
    this.msg = t;
    this.draft = i.toJSONString();
  }
}
a([f.serializable("code")], CreateAgentDraftResp.prototype, "code", undefined);
a([f.serializable("msg")], CreateAgentDraftResp.prototype, "msg", undefined);
a(
  [f.serializable("draft")],
  CreateAgentDraftResp.prototype,
  "draft",
  undefined,
);
o = CreateAgentDraftRetCode || (CreateAgentDraftRetCode = {});
o[(o.succeed = 0)] = "succeed";
o[(o.convertDraftBuildQeqFailed = 1)] = "convertDraftBuildQeqFailed";
o[(o.buildDraftFailed = 2)] = "buildDraftFailed";
o[(o.agentDraftBuilderNotFound = 3)] = "agentDraftBuilderNotFound";
