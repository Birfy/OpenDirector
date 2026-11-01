import r from "oa";
import a from "bk";
import n from "qa";
import o from "Ut";
import s from "K8";
import d from "gIi";
import l from "k1J";
import u from "Oh";
import c from "VFa";
import m from "s9b";
import { T as T_1 } from "./module-PXv.js";
import h from "UH9";
import { FQ } from "./module-sa0.js";
import v from "Dm";
import I from "hE";
import _ from "N37";
import f from "yMd";
function b(e, t) {
  let i;
  let b;
  let y;
  let k;
  let S;
  let C;
  let M;
  let T;
  const { targetAIGCData } = t;
  const R = n._(t, ["targetAIGCData"]);
  const P =
    (C = t.targetAIGCData.originalInput) == null ||
    (S = C.videoGenInputs) == null
      ? undefined
      : S[0];
  const D = l.W();
  const E = a._(
    r._(
      {},
      R,
      D,
      u.P({
        submitId: D.submitId,
        isRegenerate: t.isRegenerate,
        targetAIGCData: t.targetAIGCData,
        taskPayload: t.taskPayload,
        isPostEdit: true,
      }),
    ),
    {
      mode: (b = t.mode) != null ? b : o.DAAIGCMode.workbench,
      originHistoryId: (y = t.targetAIGCData.historyRecordId) != null ? y : "",
      originAgenticHistoryId: c.B(t.targetAIGCData),
      originItemId:
        (k = (M = t.targetAIGCData.item) == null ? undefined : M.id) != null
          ? k
          : "",
      draftContent: t.targetAIGCData.draftContent,
      input: {
        videoGenInputs: {
          vid: t.isRegenerate ? P.vid : t.input.videoGenInputs.vid,
          v2vOpt: t.isRegenerate
            ? {
                labSr: P.v2vOpt.labSr,
                avMix: m.O(targetAIGCData),
              }
            : a._(r._({}, t.input.videoGenInputs.v2vOpt), {
                avMix: m.O(targetAIGCData),
              }),
        },
      },
      infiniteCanvasExtend: t.infiniteCanvasExtend,
    },
  );
  return e.createInstance(T_1, {
    mockDataCreator: () => {
      var e;
      var t;
      v.X3(
        (t = E.taskPayload) == null ? undefined : t.taskExtra,
        "taskExtra is required",
      );
      return a._(
        r._(
          {},
          I.l({
            submitId: E.submitId,
            generateType: f.ce.Text2Video,
            workspaceId: E.workspaceId,
          }),
          _.p(targetAIGCData, {
            daVideoProcessType: o.DAVideoProcessType.LabSR,
            originHistoryId: E.originHistoryId,
            originItemId: E.originItemId,
            isRegenerate: (e = E.isRegenerate) != null && e,
          }),
        ),
        {
          video: undefined,
          videoDuration: targetAIGCData.videoDuration,
          originVideo: undefined,
          item: undefined,
          taskExtra: E.taskPayload.taskExtra,
        },
      );
    },
    processInputParamsConverter: () => s.TZ(new d.q(E).convert()),
    submitQueryParams: {
      babiParam:
        ((i = {
          modelKey:
            (T = targetAIGCData.originalInput) == null
              ? undefined
              : T.modelReqKey,
        }),
        FQ({
          scenario: "image_video_generation",
          featureKey: "image_to_video",
          featureEntranceDetail: "".concat(h.F(), "-image_to_video"),
          extraParams: {
            modelId: i == null ? undefined : i.modelKey,
          },
        })),
    },
  });
}
export { b as v };
