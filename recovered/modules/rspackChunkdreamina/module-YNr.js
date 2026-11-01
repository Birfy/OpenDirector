import i from "Ut";
import r from "cV2";
import a from "wEp";
import o from "A4";
import l from "L4";
const u = new Set([i.DAVideoProcessType.SR, i.DAVideoProcessType.LabSR]);
function s(e) {
  if (e.videoRatio !== undefined) {
    const t = i.DAImageRatioTypeUtils.titleOfValue(e.videoRatio);
    const n = i.DAImageRatioTypeUtils.ratioValue(e.videoRatio);
    if (t && Number.isFinite(n) && n > 0) {
      return {
        text: t,
        value: n,
      };
    }
  }
  return {};
}
export function Hx(e) {
  if (
    ((n = e.statusModel) == null ? undefined : n.statusCode) ===
    l.A.FinalSuccess
  ) {
    let t;
    var n;
    var i;
    const a = [
      ...[(t = e.item) == null ? undefined : t.video, e.video].flatMap((e) => {
        var t;
        var n;
        return [
          e == null ? undefined : e.originVideo,
          e == null || (n = e.transcodedVideo) == null ? undefined : n.origin,
          ...Object.values(
            (t = e == null ? undefined : e.transcodedVideo) != null ? t : {},
          ),
        ];
      }),
      e.originVideo,
    ].find((e) => {
      if (!e) {
        return false;
      }
      var { width, height } = e;
      return (
        typeof width === "number" &&
        typeof height === "number" &&
        Number.isFinite(width) &&
        Number.isFinite(height) &&
        width > 0 &&
        height > 0
      );
    });
    if (a) {
      const u = o.i(a.width, a.height);
      if (u) {
        return u;
      }
    }
    const d = s(e);
    if (d.text) {
      return d;
    }
  }
  const c = (i = e.originalInput) == null ? undefined : i.videoAspectRatio;
  if (c === "adaptive") {
    return {
      isAdaptive: true,
    };
  }
  const m = s(e);
  if (m.text) {
    return m;
  }
  const v = r.x(c);
  if (v) {
    return {
      text: c,
      value: v.width / v.height,
    };
  }
  return {};
}
export function vZ(e) {
  let t;
  let n;
  return (
    !!(e.lastProcessFlow && u.has(e.lastProcessFlow)) ||
    ((t = e.processFlows) != null &&
      !!t.some((e) => e.curProcessFlows.some((e) => u.has(e)))) ||
    !!((n = e.originalInput) == null
      ? undefined
      : n.videoGenInputs.some((e) => {
          var t;
          var n;
          if ((n = e.v2vOpt) == null || (t = n.superResolution) == null) {
            return undefined;
          }
          return t.aigcSr;
        }))
  );
}
export function G5(e) {
  let t;
  let n;
  let i;
  let r;
  const { video, originVideo, videoDuration, isAutoDuration } = e;
  if (!video) {
    return {
      vid: "",
      coverUrl: "",
      videoUrl: "",
      duration: videoDuration,
      isAutoDuration,
    };
  }
  const { definitionList, defaultDefinition, defaultDefinitionVideoUrl } = a.H(
    video,
    originVideo,
    {
      preferOriginAsDefault: vZ(e),
    },
  );
  return {
    vid:
      (t =
        (originVideo == null ? undefined : originVideo.vid) || video.videoId) !=
      null
        ? t
        : "",
    coverUrl: (n = video.coverUrl) != null ? n : "",
    videoUrl:
      (i =
        (r = a.q(video)) != null
          ? r
          : originVideo == null
            ? undefined
            : originVideo.videoUrl) != null
        ? i
        : "",
    definitionList,
    defaultDefinition,
    defaultDefinitionVideoUrl,
    duration: videoDuration,
    isAutoDuration,
  };
}
