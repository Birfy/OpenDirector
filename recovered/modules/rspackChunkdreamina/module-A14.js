import i from "Ut";
import r from "L4";
import { E as E_1 } from "./module-PUH.js";
export function cu(e, t) {
  return (
    e.modelReqKey === t.modelReqKey &&
    e.sourceVideo.videoId === t.sourceVideo.videoId &&
    e.sourceVideo.duration === t.sourceVideo.duration &&
    e.sourceVideo.width === t.sourceVideo.width &&
    e.sourceVideo.height === t.sourceVideo.height
  );
}
export function _N(e) {
  return true;
}
export function iI(e, t) {
  const n = arguments.length > 2 && arguments[2] !== undefined && arguments[2];
  try {
    C = E_1(e);
    if (n) {
      var o;
      var l;
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
      var _;
      var y;
      var b;
      var A;
      var x;
      var T;
      var I;
      var w;
      var C;
      var S;
      let k;
      let N;
      let F;
      const R = new i.DADraft(e.draftContent).findMainComponent();
      if (
        !(R instanceof i.DAVideoBaseComponent) ||
        R.processType !== i.DAVideoProcessType.SubtitleErase ||
        !((S =
          (F = R.abilities) == null ||
          (N = F.subtitleErase) == null ||
          (k = N.subtitleEraseInput) == null
            ? undefined
            : k.sourceVideo) == null
          ? undefined
          : S.vid)
      ) {
        return {
          eligible: false,
          reason: "source_unavailable",
        };
      }
    }
  } catch (e) {
    return {
      eligible: false,
      reason: "source_unavailable",
    };
  }
  if (C.hasProcess && !n) {
    return {
      eligible: false,
      reason: "already_subtitle_erase",
    };
  }
  const { components } = C;
  const { video } = e;
  const videoId =
    (o = S == null ? undefined : S.vid) != null
      ? o
      : video == null
        ? undefined
        : video.videoId;
  const P =
    (l =
      (u =
        (s =
          (d =
            (b = e.item) == null || (y = b.video) == null
              ? undefined
              : y.originVideo) != null
            ? d
            : (T = e.item) == null ||
                (x = T.video) == null ||
                (A = x.transcodedVideo) == null
              ? undefined
              : A.origin) != null
          ? s
          : video == null
            ? undefined
            : video.originVideo) != null
        ? u
        : video == null || (I = video.transcodedVideo) == null
          ? undefined
          : I.origin) != null
      ? l
      : e.originVideo;
  const width =
    (c =
      (m = S == null ? undefined : S.width) != null
        ? m
        : P == null
          ? undefined
          : P.width) != null
      ? c
      : 0;
  const height =
    (v =
      (p = S == null ? undefined : S.height) != null
        ? p
        : P == null
          ? undefined
          : P.height) != null
      ? v
      : 0;
  const B = video == null ? undefined : video.durationMs;
  const O =
    B !== undefined && Number.isFinite(B) && B > 0 ? B / 1000 : undefined;
  const duration =
    (g =
      (f =
        (h = S == null ? undefined : S.getDurationSecond()) != null ? h : O) !=
      null
        ? f
        : P == null
          ? undefined
          : P.duration) != null
      ? g
      : video == null
        ? undefined
        : video.duration;
  if (
    (!n && e.statusModel.statusCode !== r.A.FinalSuccess) ||
    !videoId ||
    (!n &&
      (P == null ? undefined : P.vid) &&
      P.vid !== (video == null ? undefined : video.videoId)) ||
    !Number.isFinite(width) ||
    !Number.isFinite(height) ||
    width <= 0 ||
    height <= 0 ||
    duration === undefined ||
    !Number.isFinite(duration) ||
    duration <= 0
  ) {
    return {
      eligible: false,
      reason: "source_unavailable",
    };
  }
  const modelReqKey =
    (_ = components
      .map((e) => {
        var t;
        var n;
        var i;
        if (
          (i = e.abilities) == null ||
          (n = i.genVideo) == null ||
          (t = n.text2VideoParams) == null
        ) {
          return undefined;
        }
        return t.modelReqKey;
      })
      .find(Boolean)) != null
      ? _
      : (w = e.originalInput) == null
        ? undefined
        : w.modelReqKey;
  if (modelReqKey && t) {
    if (
      Math.max(width, height) > t.maxLongEdge ||
      Math.min(width, height) > t.maxShortEdge
    ) {
      return {
        eligible: false,
        reason: "resolution_unsupported",
      };
    }
    return {
      eligible: true,
      modelReqKey,
      sourceVideo: {
        videoId,
        width,
        height,
        duration,
      },
    };
  }
  return {
    eligible: false,
    reason: "config_unavailable",
  };
}
