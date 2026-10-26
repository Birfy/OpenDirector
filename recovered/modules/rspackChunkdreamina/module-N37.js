import i from "A1";
import s from "Rb";
export function p(e, t) {
  let r;
  let a;
  return {
    draftContent: e.draftContent,
    videoRatio: e.videoRatio,
    video: {
      duration:
        (r = (a = e.video) == null ? undefined : a.duration) != null ? r : 0,
      videoId: "mock-data",
    },
    processFlows: t.isRegenerate
      ? e.processFlows
      : [
          ...e.processFlows,
          {
            curProcessFlows: [t.daVideoProcessType],
          },
        ],
    lastProcessFlow: t.daVideoProcessType,
    videoModelConfig: e.videoModelConfig,
    refInfo: ((e, t) => {
      const { originHistoryId, originAgenticHistoryId, itemId, isRegenerate } =
        t;
      const imageUrl = (() => {
        var t;
        var r;
        var s;
        var a;
        var n;
        var o;
        var d;
        var c;
        var u;
        var l;
        var _;
        var h =
          (a = e.originalInput) == null ||
          (s = a.videoGenInputs) == null ||
          (r = s[0]) == null ||
          (t = r.firstFrameImage) == null
            ? undefined
            : t.imageUrl;
        if (h) {
          return h;
        }
        var m =
          (u = e.originalInput) == null ||
          (c = u.videoGenInputs) == null ||
          (d = c[0]) == null ||
          (o = d.i2vOpt) == null ||
          (n = o.realmanAvatar) == null
            ? undefined
            : n.originImage.imageUrl;
        if (m) {
          return m;
        }
        var v = (l = e.item) == null ? undefined : l.commonAttr.coverUrlMap;
        if (v && Object.keys(v).length > 0) {
          return i.T(v);
        }
        if ((_ = e.item) == null) {
          return undefined;
        }
        return _.commonAttr.coverUrl;
      })();
      if (isRegenerate) {
        return e.refInfo;
      }
      return {
        refType: s.DMLAigcDataRefType.History,
        refRecordInfo: {
          refHistoryId: originHistoryId,
          refAgenticHistoryId: originAgenticHistoryId,
          refItemId: itemId,
          refItemInfo: imageUrl
            ? {
                imageUrl,
              }
            : undefined,
        },
      };
    })(e, {
      originHistoryId: t.originHistoryId,
      originAgenticHistoryId: t.originAgenticHistoryId,
      itemId: t.originItemId,
      isRegenerate: t.isRegenerate,
    }),
  };
}
