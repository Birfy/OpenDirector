import a from "Ut";
import n from "yMd";
export function Y(e, t) {
  let i;
  let r;
  const o = {};
  const { originalInput, ttsInfo } = t;
  const u =
    originalInput == null || (i = originalInput.videoGenInputs[0]) == null
      ? undefined
      : i.videoMode;
  if (ttsInfo) {
    if (u === a.DAVideoMode.avatar) {
      r = "standard";
    }
    if (u === a.DAVideoMode.avatarLoopy) {
      r = "vivid";
    }
    if (u === a.DAVideoMode.avatarHq) {
      r = "high_quality";
    }
    if (u === a.DAVideoMode.avatarHq480) {
      r = "hq_480";
    }
    const { sourceType, toneCategoryId, toneCategoryKey, toneId, toneKey } =
      ttsInfo;
    const { recommendedVoiceIds } = t.taskExtra;
    if (recommendedVoiceIds) {
      o.recVoiceId = recommendedVoiceIds.join();
      o.useRecVoice = +!!recommendedVoiceIds.includes(toneId);
    }
    if (sourceType === n.yA.LocalFile) {
      o.lipSyncType = "upload_audio";
      o.lipSyncMode = r;
      o.voiceCategoryId = toneCategoryId ? "".concat(toneCategoryId) : "all";
      o.voiceCategoryKey = toneCategoryKey;
      const g = "upload_audio_placeholder_tone_id";
      o.voiceId = toneId === g ? "" : toneId;
      o.voiceKey = toneKey;
      o.isAudioToAudio = +("tone" in ttsInfo && toneId !== g);
    } else {
      const { text, speed, toneEmotion } = ttsInfo;
      o.lipSyncType = "text_to_speech";
      o.lipSyncMode = r;
      o.script = text;
      o.audioSpeed = speed.toFixed(1);
      o.voiceCategoryId = toneCategoryId ? "".concat(toneCategoryId) : "all";
      o.voiceCategoryKey = toneCategoryKey;
      o.voiceId = toneId;
      o.voiceKey = toneKey;
      o.emotion = toneEmotion == null ? undefined : toneEmotion.emotion;
    }
    e.setParams(o);
  }
}
