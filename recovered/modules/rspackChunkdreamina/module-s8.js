import * as o from "./module-Ut_2.js";
export class DAMultiFrameInfoUtil {
  static convertToDAMultiFrames(e) {
    return e.map((e, t, i) => {
      let r;
      let a;
      let n;
      r = new o.DAMultiFrame();
      r.idx = e.idx;
      r.durationMs = e.durationMs;
      r.prompt = e.prompt;
      a = new o.DAMediaInfo();
      if (e.mediaType != undefined) {
        a.mediaType = e.mediaType;
      }
      n = new o.DAImageResource();
      n.uri = e.mediaUri;
      n.sourceFrom = o.DAResourceSourceFrom.upload;
      a.imageInfo = n;
      r.mediaInfo = a;
      return r;
    });
  }
}
