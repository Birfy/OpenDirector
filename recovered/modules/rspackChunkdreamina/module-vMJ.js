import r from "oa";
import a from "bk";
import n from "Ut";
import o from "K8";
import s from "mcc";
import d from "k1J";
import l from "VFa";
import u from "P2s";
import { X } from "./module-MGT.js";
import m from "UH9";
import { ri } from "./module-sa0.js";
import h from "yMd";
import p from "hE";
import v from "Wa8";
import I from "Tz";
export function B(e, t) {
  let i;
  let _;
  const f = d.W();
  const input = Object.assign(
    t,
    r._(
      a._(r._({}, f), {
        mode: (i = t.mode) != null ? i : n.DAAIGCMode.workbench,
        draftContent: t.targetAIGCData.draftContent,
        infiniteCanvasExtend: t.infiniteCanvasExtend,
      }),
      t.isRegenerate
        ? {
            itemId: t.targetAIGCData.refInfo.refRecordInfo.refItemId,
            originHistoryId:
              t.targetAIGCData.refInfo.refRecordInfo.refHistoryId,
            originAgenticHistoryId:
              t.targetAIGCData.refInfo.refRecordInfo.refAgenticHistoryId,
          }
        : {
            itemId: t.itemId,
            originHistoryId:
              (_ = t.targetAIGCData.historyRecordId) != null ? _ : "",
            originAgenticHistoryId: l.B(t.targetAIGCData),
          },
    ),
  );
  Object.assign(
    input,
    u.r(e, {
      targetAIGCData: t.targetAIGCData,
      metricsExtra: t.isRegenerate ? undefined : t.metricsExtra,
      isRegenerate: t.isRegenerate,
      submitId: f.submitId,
      input,
    }),
  );
  return e.createInstance(X, {
    mockDataCreator: () => {
      var e;
      var i;
      var submitId;
      e = t.targetAIGCData;
      submitId = input.submitId;
      return a._(
        r._(
          {},
          p.l({
            submitId,
            generateType: h.ce.SuperResolution,
            workspaceId: input.workspaceId,
          }),
          v.T(e),
        ),
        {
          refInfo: I.d(e, {
            originHistoryId: input.originHistoryId,
            originAgenticHistoryId: input.originAgenticHistoryId,
            itemId: input.itemId,
            isRegenerate: (i = input.isRegenerate) != null && i,
          }),
          text2imageParams: {
            largeImageInfo: e.text2imageParams.largeImageInfo,
            isIntelligentAspectRatio:
              e.text2imageParams.isIntelligentAspectRatio,
          },
          metricsExtra: input.metricsExtra,
          isDraftGen: true,
        },
      );
    },
    processInputParamsConverter: () => o.TZ(new s.f(input).convert()),
    submitQueryParams: {
      babiParam: ri({
        scenario: "image_video_generation",
        featureKey: "to_image_touch",
        featureEntranceDetail: "".concat(m.F(), "-touch"),
      }),
    },
  });
}
