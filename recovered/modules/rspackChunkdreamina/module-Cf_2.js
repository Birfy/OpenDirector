import { O } from "./module-Y5t.js";
import n from "yMd";
function a(e) {
  let t;
  let i;
  let a;
  if (O(e)) {
    if (
      ((t = e.videoBgmParams) == null ? undefined : t.promptSource) ===
        n.B$.Tag ||
      ((a = e.videoBgmParams) == null || (i = a.tags) == null
        ? undefined
        : i.length)
    ) {
      return "custom_ai_music";
    }
    return "music_based_on_picture";
  }
}
export function x(e, t) {
  if (O(t)) {
    let i;
    const n = {};
    const { audioList, defaultIndex } = (i = t.audioData) != null ? i : {};
    if (audioList == null ? undefined : audioList.length) {
      n.aiMusicId = audioList
        .map((e) => {
          var { audio } = e;
          if (audio == null) {
            return undefined;
          }
          return audio.vid;
        })
        .join(",");
    }
    if (defaultIndex !== undefined) {
      n.aiMusicRank = defaultIndex + 1;
    }
    const s = a(t);
    if (s) {
      n.aiVideoMusicType = s;
    }
    n.aiMusicSubmitid = t.idModel.submitId;
    n.aiMusicTaskid = t.idModel.taskId;
    const u = ((e) => {
      let t;
      let i;
      if (
        (i = e.videoBgmParams) == null || (t = i.tags) == null
          ? undefined
          : t.length
      ) {
        return e.videoBgmParams.tags.map((e) => e.name).join(",");
      }
    })(t);
    if (u) {
      n.musicPrompt = u;
    }
    e.setParams(n);
  }
}
export var mR = x;
export function iU(e, t) {
  const aiVideoMusicType = a(t);
  if (aiVideoMusicType) {
    e.setParams({
      aiVideoMusicType,
    });
  }
}
