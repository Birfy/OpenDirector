import o from "Ut";
export const convertMergeVideoInput = function (e) {
  let t;
  let i;
  if (e === undefined) {
    return {
      data: undefined,
    };
  }
  if (e.targetFormat === undefined || e.targetFormat === "") {
    return {
      msg: "mergeVideoInput.targetFormat is required",
    };
  }
  let r = new o.DAMergeVideoInput();
  r.targetWidth = e.targetWidth;
  r.targetHeight = e.targetHeight;
  r.targetFormat = e.targetFormat;
  let a = (t = e.bgmList) != null ? t : [];
  let n = [];
  for (let e = 0; e < a.length; e++) {
    let t = a[e];
    let i = t.vid;
    if (i === undefined || i === "") {
      return {
        msg: `mergeVideoInput.bgmList[${e}].vid is required`,
      };
    }
    if (t.durationMs === undefined) {
      return {
        msg: `mergeVideoInput.bgmList[${e}].durationMs is required`,
      };
    }
    let r = new o.DAAudioResource();
    r.vid = i;
    r.sourceFrom = o.DAResourceSourceFrom.upload;
    r.setDurationMilliSecond(t.durationMs);
    r.sourceStartMs = t.sourceStartMs;
    r.sourceDurationMs = t.sourceDurationMs;
    n.push(r);
  }
  let s = (i = e.videoList) != null ? i : [];
  if (s.length === 0) {
    return {
      msg: "mergeVideoInput.videoList is required",
    };
  }
  let d = [];
  for (let e = 0; e < s.length; e++) {
    let t = s[e];
    if (t.vid === undefined || t.vid === "") {
      return {
        msg: `mergeVideoInput.videoList[${e}].vid is required`,
      };
    }
    if (t.durationMs === undefined) {
      return {
        msg: `mergeVideoInput.videoList[${e}].durationMs is required`,
      };
    }
    let i = new o.DAVideoResource();
    i.vid = t.vid;
    i.sourceFrom = o.DAResourceSourceFrom.upload;
    i.setDurationMilliSecond(t.durationMs);
    i.sourceStartMs = t.sourceStartMs;
    i.sourceDurationMs = t.sourceDurationMs;
    d.push(i);
  }
  r.bgmList = n;
  r.videoList = d;
  return {
    data: r,
  };
};
