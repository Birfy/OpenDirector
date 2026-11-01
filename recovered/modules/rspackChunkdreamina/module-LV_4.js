import { d } from "./module-YpG_2.js";
import { O } from "./module-Y5t_2.js";
export function k(e, t) {
  const i = {};
  const { audioData } = t;
  if (audioData) {
    const { audioList } = audioData;
    if (d(t)) {
      const l = audioList.filter((e) => e.status === "fail").length;
      i.audioVid =
        l === 3
          ? "0,0,0"
          : audioList
              .map((e) => {
                var t;
                var i;
                if ((t = (i = e.audio) == null ? undefined : i.vid) != null) {
                  return t;
                }
                return 0;
              })
              .join(",");
      i.audioGenerateResult = l !== 0 ? "fail_".concat(l) : "success";
      i.audioGenerateFailCode = audioList
        .map((e) => {
          var { status } = e;
          if (status === "success") {
            return "0";
          }
          return status;
        })
        .join(",");
    }
    if (O(t)) {
      i.aiMusicId = audioList
        .map((e) => {
          var { audio } = e;
          if (audio == null) {
            return undefined;
          }
          return audio.vid;
        })
        .join(",");
    }
    e.setParams(i);
  }
}
