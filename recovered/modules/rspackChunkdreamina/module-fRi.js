import i from "Ut";
import r from "L4";
const a = {
  480: "480p",
  720: "720p",
  1080: "1080p",
  1440: "2k",
  2160: "4k",
};
export function* zQ(e) {
  if (e) {
    const t = new i.DADraft(e);
    for (
      let n = new Set(), r = t.findMainComponent();
      r instanceof i.DAVideoBaseComponent && !n.has(r);
    ) {
      n.add(r);
      yield r;
      r = t.findParentComponent(r);
    }
  }
}
export function Xd(e) {
  const t =
    arguments.length > 1 && arguments[1] !== undefined
      ? arguments[1]
      : (s = e.originalInput) == null || (u = s.videoGenInputs[0]) == null
        ? undefined
        : u.resolution;
  const n = [];
  try {
    for (const l of zQ(e.draftContent)) {
      n.push(l);
    }
  } catch (e) {}
  if (
    !(
      e.lastProcessFlow === i.DAVideoProcessType.GenerateFromDraft ||
      ((d = e.processFlows) == null
        ? undefined
        : d.some((e) =>
            e.curProcessFlows.includes(i.DAVideoProcessType.GenerateFromDraft),
          )) ||
      n.some((e) => e.processType === i.DAVideoProcessType.GenerateFromDraft)
    )
  ) {
    return t;
  }
  if (
    ((c = e.statusModel) == null ? undefined : c.statusCode) ===
    r.A.FinalSuccess
  ) {
    var u;
    var s;
    var d;
    var c;
    var m;
    var v;
    var p;
    var g;
    var f;
    var h;
    let _;
    let y;
    let b;
    let A;
    let x;
    let T;
    const I =
      (_ = (A = e.item) == null ? undefined : A.video) != null ? _ : e.video;
    const w =
      (y =
        (b = I == null ? undefined : I.originVideo) != null
          ? b
          : I == null || (x = I.transcodedVideo) == null
            ? undefined
            : x.origin) != null
        ? y
        : e.originVideo;
    const C =
      w == null || (T = w.definition) == null ? undefined : T.toLowerCase();
    if (C && Object.values(a).includes(C)) {
      return C;
    }
    if ((w == null ? undefined : w.width) && w.height) {
      h = a[Math.min(w.width, w.height)];
    }
  }
  const S = (m = e.statusModel) == null ? undefined : m.statusCode;
  const k = [
    r.A.Init,
    r.A.SubmitOk,
    r.A.HistoryStatusThinking,
    r.A.HistoryStatusPartialSuccess,
  ].includes(S);
  const N = [
    r.A.PreTnsCheckNotPass,
    r.A.FinalGenerateFail,
    r.A.PostTnsCheckNotPass,
  ].includes(S);
  const F =
    (f = e.originalInput) == null ||
    (g = f.videoGenInputs[0]) == null ||
    (p = g.v2vOpt) == null ||
    (v = p.superResolution) == null
      ? undefined
      : v.resolution;
  if (k && e.lastProcessFlow === i.DAVideoProcessType.SR && F) {
    return F.toLowerCase();
  }
  for (const R of n) {
    if (!N || R !== n[0] || R.processType !== i.DAVideoProcessType.SR) {
      let M;
      let E;
      let D;
      let P;
      let j;
      let V;
      const B =
        (P = R.abilities) == null ||
        (D = P.genVideo) == null ||
        (E = D.text2VideoParams) == null ||
        (M = E.videoGenInputs) == null
          ? undefined
          : M[0];
      if (
        R.processType === i.DAVideoProcessType.SR &&
        (B == null || (V = B.v2vOpt) == null || (j = V.superResolution) == null
          ? undefined
          : j.resolution)
      ) {
        return B.v2vOpt.superResolution.resolution.toLowerCase();
      }
      if (
        R.processType === i.DAVideoProcessType.GenerateFromDraft ||
        R.processType === i.DAVideoProcessType.VideoGen
      ) {
        return (B == null ? undefined : B.resolution) || h;
      }
    }
  }
  return h;
}
