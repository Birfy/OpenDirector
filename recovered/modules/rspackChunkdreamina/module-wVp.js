import n from "oa";
import a from "bk";
import { N } from "./module-Tj_3.js";
export function l(e, t) {
  if (e && (t == null ? undefined : t.length)) {
    let i;
    let r;
    let l;
    let d;
    const { videoTemplate } = e;
    if (videoTemplate) {
      const m = t.find((e) => e.key === String(videoTemplate));
      if (m == null ? undefined : m.effectRefItemInfo) {
        return a._(n._({}, m.effectRefItemInfo), {
          video: a._(n._({}, m.effectRefItemInfo.video), {
            videoId:
              (i =
                (r = m.effectRefItemInfo.video) == null
                  ? undefined
                  : r.videoId) != null
                ? i
                : "",
            duration: N(
              (l = m.effectRefItemInfo.video) == null
                ? undefined
                : l.durationMs,
              (d = m.effectRefItemInfo.video) == null ? undefined : d.duration,
            ),
          }),
        });
      }
    }
  }
}
