import i from "Ut";
import { O } from "./module-hy8.js";
import { r as r_1 } from "./module-Xu.js";
import o from "ad";
export function L(e) {
  const t = new i.DATextToSpeechAbility();
  t.modelReqKey = e.modelReqKey;
  t.mode = e.ttsMode;
  t.text = "";
  t.voiceName = "";
  switch (e.ttsMode) {
    case i.DAGenerateTTSMode.TTS:
      t.text = e.text;
      t.idInfo = r_1(e.idInfo);
      t.audioConfig = O(e.audioConfig);
      t.voiceName = e.voiceName;
      break;
    case i.DAGenerateTTSMode.UnifiedEdit:
      t.unifiedEditInput = o.TX(e.unifiedEditInput);
      break;
    case i.DAGenerateTTSMode.AudioSeparation:
      const r = new i.DAAudioSeparationParam();
      r.sourceMaterial = o.I1(e.sourceMaterial);
      r.prompt = e.prompt;
      t.audioSeparationParam = r;
      break;
    case i.DAGenerateTTSMode.VideoTranslation:
      const s = new i.DAVideoTranslationParam();
      s.sourceMaterial = o.I1(e.sourceMaterial);
      s.targetLanguage = e.targetLanguage;
      t.videoTranslationParam = s;
  }
  return t;
}
