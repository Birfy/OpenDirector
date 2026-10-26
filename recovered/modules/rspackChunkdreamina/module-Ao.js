import * as o from "./module-Ut_2.js";
import r from "Edn";
import a from "uv";
import n from "gj";
import { IDADraftBuilder } from "./module-VTK.js";
import d from "Rd";
let l = d.getOrCreateInterface("builder_draft_builder", "DADraftBuildReq");
export class DAAudioTextToSpeechDraftReq extends d.RTSDataClass {
  constructor() {
    super(...arguments);
    this.aigcGenType = undefined;
    this.aigcMode = undefined;
    this.metaData = undefined;
    this.refInfo = undefined;
    this.localMockData = undefined;
    this.text = "";
    this.idInfo = undefined;
    this.audioConfig = undefined;
    this.voiceName = "";
    this.mode = o.DAGenerateTTSMode.TTS;
    this.unifiedEditInput = undefined;
    this.modelReqKey = "";
    this.generateType = undefined;
    this.videoTranslationParam = undefined;
    this.audioSeparationParam = undefined;
  }
}
d.initMetadataFor(
  "class",
  DAAudioTextToSpeechDraftReq,
  "DAAudioTextToSpeechDraftReq",
  undefined,
  [l],
  "audio_text_to_speech_draft_builder",
);
export class DAAudioTextToSpeechDraftBuilder extends IDADraftBuilder {
  buildDraft(e, t, i) {
    let a = super.buildDraft(e, t, i);
    let s = d.CondCast.toClass(a.findMainComponent(), r.DAAudioBaseComponent);
    if (s != undefined && s.genType === undefined) {
      s.genType =
        s.generateType === n.AudioGenerateType.VideoDubbing
          ? o.DAAIGCGenerateType.videoDubbing
          : o.DAAIGCGenerateType.audioTTS;
    }
    return a;
  }
  createComponent(e) {
    let t;
    let i;
    let s;
    let d;
    let l;
    d = new o.DATextToSpeechAbility();
    d.text = e.text;
    d.idInfo = (i = e.idInfo) != null ? i : new o.DAIdInfo();
    d.voiceName = e.voiceName;
    d.audioConfig = (s = e.audioConfig) != null ? s : new o.DAAudioConfig();
    d.mode = e.mode;
    d.unifiedEditInput = e.unifiedEditInput;
    d.modelReqKey = e.modelReqKey;
    d.videoTranslationParam = e.videoTranslationParam;
    d.audioSeparationParam = e.audioSeparationParam;
    let c = d;
    let p = new r.DAAudioBaseComponent();
    if (e.generateType != undefined) {
      p.generateType = e.generateType;
    } else if (e.aigcGenType === o.DAAIGCGenerateType.audioTTS) {
      p.generateType = n.AudioGenerateType.GenerateTTS;
    } else if (e.aigcGenType === o.DAAIGCGenerateType.videoDubbing) {
      p.generateType = n.AudioGenerateType.VideoDubbing;
    } else {
      p.generateType =
        e.mode === o.DAGenerateTTSMode.VideoTranslation ||
        (e.mode === o.DAGenerateTTSMode.UnifiedEdit && c.hasVideoMaterial())
          ? n.AudioGenerateType.VideoDubbing
          : n.AudioGenerateType.GenerateTTS;
    }
    p.genType =
      (t = e.aigcGenType) != null
        ? t
        : p.generateType === n.AudioGenerateType.VideoDubbing
          ? o.DAAIGCGenerateType.videoDubbing
          : o.DAAIGCGenerateType.audioTTS;
    l = new a.DAAudioGenerateAbilities();
    l.textToSpeech = c;
    p.abilities = l;
    return p;
  }
  verifySelf(e, t) {
    if (e.componentList.length != 1) {
      t.appendError("Speech 只能作为根节点存在");
    }
    return t;
  }
}
