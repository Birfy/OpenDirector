import n from "Ut";
import a from "yMd";
const o = "upload_audio_placeholder_tone_id";
const r = (e) => {
  if (e.sourceType === a.yA.LocalFile && e.toneId === o) {
    return "音频原声";
  }
  if (
    e.toneItemPlatform === n.CommonItemPlatform.Local ||
    e.toneItemPlatform === n.CommonItemPlatform.Template
  ) {
    return "自定义音色";
  }
  return e.toneKey;
};
export function F(e) {
  if (!e) {
    return new n.DALipSyncAbility();
  }
  let t;
  const i = new n.DALipSyncAbility();
  if (e.sourceType === a.yA.LocalFile) {
    i.ttsContent = undefined;
    i.audioToneId = r(e);
    i.audioItemPlatform = e.toneItemPlatform;
    i.audioSpeed = undefined;
    i.audioResourceId = (
      e == null || (t = e.toneId) == null ? undefined : t.includes(o)
    )
      ? undefined
      : String(e.toneId);
    i.audioSpeed = undefined;
    i.ttsContent = undefined;
  } else {
    i.ttsContent = e.text;
    i.audioToneId = r(e);
    i.audioResourceId = String(e.toneId);
    i.audioItemPlatform = e.toneItemPlatform;
    i.audioToneEmotion = ((e) => {
      if (e) {
        var t = new n.LipSyncInfoToneEmotion();
        t.emotion = e.emotion;
        t.emotionScale = e.emotionScale;
        return t;
      }
    })(e.toneEmotion);
    i.audioSpeed = e.speed;
  }
  return i;
}
export function Q(e) {
  if (e) {
    let t;
    let i;
    let o;
    let r;
    let l;
    let d;
    let u;
    let m;
    let s;
    let g;
    let p;
    const sourceType = e.ttsContent ? a.yA.TextToSpeech : a.yA.LocalFile;
    const toneEmotion = ((e) => {
      if (e) {
        return {
          emotion: e.emotion,
          emotionScale: e.emotionScale,
        };
      }
    })(e.audioToneEmotion);
    if (sourceType === a.yA.TextToSpeech) {
      return {
        sourceType,
        name: (d = e.audioToneId) != null ? d : "",
        toneId: (u = e.audioResourceId) != null ? u : "",
        toneItemPlatform:
          (m = e.audioItemPlatform) != null ? m : n.CommonItemPlatform.Loki,
        toneEmotion,
        text: (s = e.ttsContent) != null ? s : "",
        speed: (g = e.audioSpeed) != null ? g : 1,
        toneCategoryId: 0,
        toneCategoryKey: "all",
        toneKey: (p = e.audioToneId) != null ? p : "",
      };
    }
    return {
      sourceType,
      name:
        (t = ((l = e.audio) == null ? undefined : l.name) || e.audioToneId) !=
        null
          ? t
          : "",
      toneId: (i = e.audioResourceId) != null ? i : "",
      toneItemPlatform:
        (o = e.audioItemPlatform) != null ? o : n.CommonItemPlatform.Loki,
      toneCategoryId: 0,
      toneCategoryKey: "all",
      toneKey: (r = e.audioToneId) != null ? r : "",
    };
  }
}
