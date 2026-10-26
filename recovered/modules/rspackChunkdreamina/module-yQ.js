import r from "oa";
import a from "bk";
import n from "qa";
import o from "Ut";
import s from "K8";
import d from "AB9";
import { E as E_1 } from "./module-FI.js";
import u from "Gr4";
import c from "gu";
import m from "k1J";
import g from "Oh";
import h from "s9b";
import p from "VFa";
import { T as T_1 } from "./module-PXv.js";
import I from "UH9";
import _ from "hP";
import f from "GS";
import b from "Dm";
import y from "hE";
import k from "N37";
import S from "yMd";
export function Q(e, t) {
  let i;
  let C;
  let M;
  let T;
  let A;
  let R;
  let P;
  let D;
  let E;
  const { targetAIGCData } = t;
  const x = n._(t, ["targetAIGCData"]);
  const w =
    (P = t.targetAIGCData.originalInput) == null ||
    (R = P.videoGenInputs) == null
      ? undefined
      : R[0];
  const O = m.W();
  const F = Object.assign(
    x,
    a._(
      r._(
        {},
        O,
        g.P({
          submitId: O.submitId,
          isRegenerate: t.isRegenerate,
          targetAIGCData: t.targetAIGCData,
          taskPayload: t.taskPayload,
          isPostEdit: true,
        }),
      ),
      {
        mode: (C = t.mode) != null ? C : o.DAAIGCMode.workbench,
        draftContent: targetAIGCData.draftContent,
        v2vOpt: {
          avMix: t.isRegenerate
            ? w == null || (D = w.v2vOpt) == null
              ? undefined
              : D.avMix
            : h.O(targetAIGCData),
        },
        videoAudioInput: x.isRegenerate
          ? {
              originHistoryId:
                (M = targetAIGCData.videoAudioEffectParams.originHistoryId) !=
                null
                  ? M
                  : "",
              originAgenticHistoryId:
                targetAIGCData.refInfo.refRecordInfo.refAgenticHistoryId,
              originItemId:
                (T = targetAIGCData.videoAudioEffectParams.originItemId) != null
                  ? T
                  : "",
              originVideoDetail: targetAIGCData.item.video,
            }
          : {
              originHistoryId:
                (A = targetAIGCData.historyRecordId) != null ? A : "",
              originAgenticHistoryId: p.B(targetAIGCData),
              originItemId: targetAIGCData.item.id,
              originVideoDetail: targetAIGCData.item.video,
            },
      },
    ),
  );
  return e.createInstance(T_1, {
    mockDataCreator: () => {
      var e;
      var t;
      b.X3(F.submitId, "submitId is required");
      b.X3(
        (t = F.taskPayload) == null ? undefined : t.taskExtra,
        "taskExtra is required",
      );
      b.X3(F.videoAudioInput);
      return a._(
        r._(
          {},
          y.l({
            submitId: F.submitId,
            generateType: S.ce.VideoAudioEffect,
            workspaceId: F.workspaceId,
          }),
          k.p(targetAIGCData, {
            daVideoProcessType: o.DAVideoProcessType.VideoAudioEffect,
            originHistoryId: F.videoAudioInput.originHistoryId,
            originAgenticHistoryId: F.videoAudioInput.originAgenticHistoryId,
            originItemId: F.videoAudioInput.originItemId,
            isRegenerate: (e = F.isRegenerate) != null && e,
          }),
        ),
        {
          videoDuration: targetAIGCData.videoDuration,
          originVideo: undefined,
          item: undefined,
          prompt: targetAIGCData.prompt,
          modelInfo: targetAIGCData.modelInfo,
          video: targetAIGCData.video,
          originalInput: targetAIGCData.originalInput,
          taskExtra: F.taskPayload.taskExtra,
        },
      );
    },
    processInputParamsConverter: () => s.TZ(new d.x(F).convert()),
    submitQueryParams: {
      babiParam:
        ((i = {
          modelKey:
            (E = targetAIGCData.originalInput) == null
              ? undefined
              : E.modelReqKey,
        }),
        f.OC({
          scenario: "image_video_generation",
          featureKey: "to_audio_effect",
          featureEntranceDetail: "".concat(I.F(), "-to_audio_effect"),
          editType: "tool",
          toolId: _.M.PostEditAudioGeneration,
          extraParams: {
            modelId: i == null ? undefined : i.modelKey,
          },
        })),
    },
    generatorCommerceManager: e.createInstance(E_1, {
      sceneOptions: u.I({
        scene: c.Sk.VideoAudioEffect,
        videoDuration: targetAIGCData.videoDuration,
      }),
      submitId: F.submitId,
    }),
  });
}
