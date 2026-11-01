import r from "Ut";
import { MGenerateAIEffectInput } from "./module-UN2.js";
import { ServerGenerateAudioInput } from "./module-J5.js";
import { ServerGenerateImageInput } from "./module-LHk.js";
import { ServerGenerateVideoAudioEffectInput } from "./module-IP.js";
import { ServerGenerateVideoBGMInput } from "./module-Gfm.js";
import { ServerGenerateVideoInput } from "./module-bs.js";
import { ServerMGenerateVideoInput } from "./module-kU.js";
import { ServerMergeVideoInput } from "./module-xt8.js";
import { ServerSubtitleEraseInput } from "./module-G8.js";
import { ServerVideoWorkflowInput } from "./module-hX.js";
import { ServerNodeType } from "./module-of.js";
import f from "./module-Rd.js";
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
export class ServerNode extends f.Serializable {
  constructor() {
    super(...arguments);
    this.id = "";
    this.type = ServerNodeType.Unset;
    this.aigcMode = r.DAAIGCMode.none;
    this.creationAgentVersion = undefined;
    this.description = "";
    this.generateVideoInput = undefined;
    this.generateImageInput = undefined;
    this.mGenerateVideoInput = undefined;
    this.generateVideoAudioEffect = undefined;
    this.videoBGMInput = undefined;
    this.mGenerateAIEffectInput = undefined;
    this.videoWorkflowInput = undefined;
    this.mergeVideoInput = undefined;
    this.subtitleEraseInput = undefined;
    this.generateAudioInput = undefined;
  }
}
o([f.serializable("id")], ServerNode.prototype, "id", undefined);
o([f.serializable("type")], ServerNode.prototype, "type", undefined);
o([f.serializable("aigc_mode")], ServerNode.prototype, "aigcMode", undefined);
o(
  [f.serializable("creation_agent_version")],
  ServerNode.prototype,
  "creationAgentVersion",
  undefined,
);
o(
  [f.serializable("description")],
  ServerNode.prototype,
  "description",
  undefined,
);
o(
  [f.serializable("generate_video_input", () => ServerGenerateVideoInput)],
  ServerNode.prototype,
  "generateVideoInput",
  undefined,
);
o(
  [f.serializable("m_generate_image_input", () => ServerGenerateImageInput)],
  ServerNode.prototype,
  "generateImageInput",
  undefined,
);
o(
  [f.serializable("m_generate_video_input", () => ServerMGenerateVideoInput)],
  ServerNode.prototype,
  "mGenerateVideoInput",
  undefined,
);
o(
  [
    f.serializable(
      "generate_video_audio_effect_input",
      () => ServerGenerateVideoAudioEffectInput,
    ),
  ],
  ServerNode.prototype,
  "generateVideoAudioEffect",
  undefined,
);
o(
  [
    f.serializable(
      "m_generate_video_bgm_input",
      () => ServerGenerateVideoBGMInput,
    ),
  ],
  ServerNode.prototype,
  "videoBGMInput",
  undefined,
);
o(
  [f.serializable("ai_effect_input", () => MGenerateAIEffectInput)],
  ServerNode.prototype,
  "mGenerateAIEffectInput",
  undefined,
);
o(
  [f.serializable("video_workflow_input", () => ServerVideoWorkflowInput)],
  ServerNode.prototype,
  "videoWorkflowInput",
  undefined,
);
o(
  [f.serializable("merge_video_input", () => ServerMergeVideoInput)],
  ServerNode.prototype,
  "mergeVideoInput",
  undefined,
);
o(
  [f.serializable("subtitle_erase_input", () => ServerSubtitleEraseInput)],
  ServerNode.prototype,
  "subtitleEraseInput",
  undefined,
);
o(
  [f.serializable("generate_audio_input", () => ServerGenerateAudioInput)],
  ServerNode.prototype,
  "generateAudioInput",
  undefined,
);
