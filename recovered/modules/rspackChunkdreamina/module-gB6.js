import a from "yMd";
import { dO } from "./module-Lg.js";
import n from "LLl";
import o from "HSE";
import { S } from "./module-BDO_2.js";
import { M } from "./module-zM_2.js";
import { a as a_1 } from "./module-Knp_2.js";
import c from "hA";
export function s(t) {
  if (n.Y(t)) {
    return dO.Image;
  }
  if (o.J(t)) {
    return dO.Collection;
  }
  if (S(t)) {
    let e;
    if (
      ((e = t.canvasInfo) == null ? undefined : e.canvasSourceType) ===
      M.ShortDrama
    ) {
      return dO.ShortNovel;
    }
    return dO.Story;
  }
  if (a_1(t)) {
    return ((t) => {
      let e;
      let i;
      let n;
      let o;
      let l;
      let s;
      let u;
      const { aigcImageParams } = t;
      if (
        (aigcImageParams == null ? undefined : aigcImageParams.generateType) &&
        aigcImageParams.generateType === a.ce.LipSync
      ) {
        return dO.LipSnyc;
      }
      if (
        aigcImageParams == null ||
        (o = aigcImageParams.text2videoParams) == null ||
        (n = o.videoGenInputs[0]) == null ||
        (i = n.firstFrameImage) == null ||
        (e = i.aigcImage) == null
          ? undefined
          : e.aigcImageParams
      ) {
        return dO.TextToImageToVideo;
      }
      if (
        aigcImageParams == null ||
        (u = aigcImageParams.text2videoParams) == null ||
        (s = u.videoGenInputs[0]) == null ||
        (l = s.v2vOpt) == null
          ? undefined
          : l.videoTemplate
      ) {
        return dO.ActionCopy;
      }
      return dO.Video;
    })(t);
  }
  if (c.T(t)) {
    return dO.Canvas;
  }
}
