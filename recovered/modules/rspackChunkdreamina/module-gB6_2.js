import r from "yMd";
import { dO } from "./module-Lg_3.js";
import n from "LLl";
import s from "HSE";
import { S } from "./module-BDO_4.js";
import { M } from "./module-zM_3.js";
import { a } from "./module-Knp_3.js";
import u from "hA";
function d(e) {
  if (n.Y(e)) {
    return dO.Image;
  }
  if (s.J(e)) {
    return dO.Collection;
  }
  if (S(e)) {
    let t;
    if (
      ((t = e.canvasInfo) == null ? undefined : t.canvasSourceType) ===
      M.ShortDrama
    ) {
      return dO.ShortNovel;
    }
    return dO.Story;
  }
  if (a(e)) {
    return ((e) => {
      let t;
      let i;
      let n;
      let s;
      let o;
      let l;
      let c;
      const { aigcImageParams } = e;
      if (
        (aigcImageParams == null ? undefined : aigcImageParams.generateType) &&
        aigcImageParams.generateType === r.ce.LipSync
      ) {
        return dO.LipSnyc;
      }
      if (
        aigcImageParams == null ||
        (s = aigcImageParams.text2videoParams) == null ||
        (n = s.videoGenInputs[0]) == null ||
        (i = n.firstFrameImage) == null ||
        (t = i.aigcImage) == null
          ? undefined
          : t.aigcImageParams
      ) {
        return dO.TextToImageToVideo;
      }
      if (
        aigcImageParams == null ||
        (c = aigcImageParams.text2videoParams) == null ||
        (l = c.videoGenInputs[0]) == null ||
        (o = l.v2vOpt) == null
          ? undefined
          : o.videoTemplate
      ) {
        return dO.ActionCopy;
      }
      return dO.Video;
    })(e);
  }
  if (u.T(e)) {
    return dO.Canvas;
  }
}
export { d as s };
