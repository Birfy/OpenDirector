import n from "Ut";
import r from "ad";
import { v } from "./module-d1Q.js";
export function x(e, t) {
  let i;
  let o;
  const s = v(e);
  switch (s == null ? undefined : s.mode) {
    case n.DAGenerateTTSMode.AudioSeparation:
      return r.F9(
        (i = s.audioSeparationParam) == null ? undefined : i.sourceMaterial,
        t,
      );
    case n.DAGenerateTTSMode.VideoTranslation:
      return r.F9(
        (o = s.videoTranslationParam) == null ? undefined : o.sourceMaterial,
        t,
      );
    default:
      return;
  }
}
