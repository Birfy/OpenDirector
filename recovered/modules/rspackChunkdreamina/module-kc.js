import o from "Ut";
import { ServerNodeType } from "./module-of.js";
import { ServerNode } from "./module-Xn.js";
import { DAToServerFlowError, DAToServerFlowErrorCode } from "./module-Yw_2.js";
import { ServerAudioTag, ServerGenerateAudioInput } from "./module-J5.js";
import d from "./module-Rd.js";
export const ServerAudioTransformer = class e {
  static transformAudioBaseComponent(t, i) {
    let d;
    if (t.aigcMode === o.DAAIGCMode.none) {
      return new DAToServerFlowError(
        DAToServerFlowErrorCode.AIGCModeUnsupport,
        "Audio component AIGC mode is not supported",
      );
    }
    let l = new ServerGenerateAudioInput();
    let p = e.transformAudioGenerateInput(t, l);
    if (p.code != DAToServerFlowErrorCode.NoError) {
      return p;
    }
    let u = new ServerNode();
    u.type = ServerNodeType.GenerateAudio;
    u.id = t.id;
    u.aigcMode = t.aigcMode;
    u.creationAgentVersion =
      (d = t.metaData) == null ? undefined : d.creationAgentVersion;
    u.generateAudioInput = l;
    i.nodes.push(u);
    return new DAToServerFlowError(DAToServerFlowErrorCode.NoError, "");
  }
  static transformAudioGenerateInput(t, i) {
    let r;
    let a;
    let n;
    let s;
    switch (t.generateType) {
      case o.AudioGenerateType.GenerateSong:
        return e.transformGenerateSong(
          i,
          (r = t.abilities) == null ? undefined : r.generateSong,
        );
      case o.AudioGenerateType.GenerateInstrumental:
        return e.transformGenerateInstrumental(
          i,
          (a = t.abilities) == null ? undefined : a.generateInstrumental,
        );
      case o.AudioGenerateType.GenerateBackgroundMusic:
        return e.transformGenerateBackgroundMusic(
          i,
          (n = t.abilities) == null ? undefined : n.generateBackgroundMusic,
        );
      case o.AudioGenerateType.GenerateTTS:
      case o.AudioGenerateType.VideoDubbing:
        return e.transformTextToSpeech(
          i,
          (s = t.abilities) == null ? undefined : s.textToSpeech,
          t.generateType,
        );
    }
  }
  static transformGenerateSong(t, i) {
    if (i === undefined) {
      return new DAToServerFlowError(
        DAToServerFlowErrorCode.AudioBaseComponentWithoutGenerateSong,
        "",
      );
    }
    t.type = o.AudioGenerateType.GenerateSong;
    t.prompt = i.prompt;
    t.duration = i.duration;
    t.title = i.title;
    t.modelReqKey = i.modelReqKey;
    if (i.lyrics != undefined) {
      t.lyrics = e.convertPromptElementNodeToString(i.lyrics.children);
    }
    if (i.tags.length > 0) {
      t.tags = e.convertAudioTags(i.tags);
    }
    return new DAToServerFlowError(DAToServerFlowErrorCode.NoError, "");
  }
  static transformGenerateInstrumental(e, t) {
    if (t === undefined) {
      return new DAToServerFlowError(
        DAToServerFlowErrorCode.AudioBaseComponentWithoutGenerateInstrumental,
        "",
      );
    }
    e.type = o.AudioGenerateType.GenerateInstrumental;
    e.prompt = t.prompt;
    e.duration = t.duration;
    return new DAToServerFlowError(DAToServerFlowErrorCode.NoError, "");
  }
  static transformGenerateBackgroundMusic(e, t) {
    return new DAToServerFlowError(
      DAToServerFlowErrorCode.AudioBaseComponentWithoutGenerateBackgroundMusic,
      "GenerateBackgroundMusic not implemented yet",
    );
  }
  static transformTextToSpeech(e, t, i = o.AudioGenerateType.GenerateTTS) {
    if (t === undefined) {
      return new DAToServerFlowError(
        DAToServerFlowErrorCode.AudioBaseComponentWithoutTextToSpeech,
        "",
      );
    }
    e.type = i;
    e.generateTTSParam = t;
    e.modelReqKey = t.modelReqKey;
    return new DAToServerFlowError(DAToServerFlowErrorCode.NoError, "");
  }
  static convertAudioTags(t) {
    return t.map((t) => {
      let i = new ServerAudioTag();
      i.key = t.key;
      i.name = t.name;
      i.type = e.convertAudioTagType(t.tagType);
      return i;
    });
  }
  static convertAudioTagType(e) {
    if (e !== undefined && e !== "") {
      switch (e) {
        case "genre":
          return o.AudioTagType.Genre;
        case "emotion":
          return o.AudioTagType.Emotion;
        case "instrument":
          return o.AudioTagType.Instrument;
        case "scene":
          return o.AudioTagType.Scene;
        case "mood":
          return o.AudioTagType.Mood;
        case "gender":
          return o.AudioTagType.Gender;
        default:
          return;
      }
    }
  }
  static convertPromptElementNodeToString(t) {
    let i = "";
    for (let r = 0; r < t.length; r++) {
      let a = t[r];
      if (a instanceof o.DAPromptTextNode) {
        i += d.ForcedCast.toClass(a, o.DAPromptTextNode).content;
      } else if (a instanceof o.DAPromptLyricsTagNode) {
        i += `[${d.ForcedCast.toClass(a, o.DAPromptLyricsTagNode).content}]`;
      } else if (a instanceof o.DAPromptParagraphNode) {
        i +=
          e.convertPromptElementNodeToString(
            d.ForcedCast.toClass(a, o.DAPromptParagraphNode).children,
          ) + "\n";
      }
    }
    return i;
  }
};
