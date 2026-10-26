import { a } from "./module-Knp_2.js";
import r from "yMd";
import { q } from "./module-qxT.js";
function o(t, e) {
  let i;
  let o;
  let l;
  let s;
  let u;
  let c;
  let d;
  let h;
  let m;
  let v;
  let p;
  let f;
  let g;
  const y = {};
  if (a(e)) {
    y.templateDuration = e.video.durationMs;
    y.prompt =
      (s = e.aigcImageParams) == null ||
      (l = s.text2videoParams) == null ||
      (o = l.videoGenInputs) == null ||
      (i = o[0]) == null
        ? undefined
        : i.prompt;
    y.model =
      (c = e.aigcImageParams) == null || (u = c.text2videoParams) == null
        ? undefined
        : u.modelReqKey;
    y.seed =
      (h = e.aigcImageParams) == null || (d = h.text2videoParams) == null
        ? undefined
        : d.seed;
    y.scale =
      (v = e.aigcImageParams) == null || (m = v.text2videoParams) == null
        ? undefined
        : m.videoAspectRatio;
    if (
      ((p = e.aigcImageParams) == null ? undefined : p.generateType) ===
      r.ce.LipSync
    ) {
      y.isVoiceClonePublic = q(
        (f = e.aigcImageParams.publishOpt) == null
          ? undefined
          : f.publicCloneVoice,
      );
      y.isUploadVoicePublic = q(
        (g = e.aigcImageParams.publishOpt) == null
          ? undefined
          : g.publicUserAudio,
      );
    }
    t.setParams(y);
  }
}
export { o as a };
