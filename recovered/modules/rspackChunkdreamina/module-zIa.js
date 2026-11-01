import r from "oa";
import a from "bk";
import n from "qa";
import o from "Ut";
import s from "K8";
import d from "tk7";
import { E as E_1 } from "./module-FI.js";
import u from "Gr4";
import c from "gu";
import m from "k1J";
import g from "VFa";
import h from "Oh";
import p from "s9b";
import { T as T_1 } from "./module-PXv.js";
import I from "UH9";
import _ from "hP";
import f from "GS";
import b from "Dm";
import y from "hE";
import k from "N37";
import S from "Po";
import C from "yMd";
export function U(e, t) {
  let i;
  let M;
  let templateId;
  let A;
  let R;
  let P;
  let D;
  let E;
  let G;
  let x;
  let w;
  let O;
  let F;
  let j;
  let H;
  let Q;
  let U;
  let V;
  let L;
  let K;
  let N;
  let W;
  let q;
  const { targetAIGCData } = t;
  const X = n._(t, ["targetAIGCData"]);
  const modelReqKey = X.isRegenerate
    ? (G = t.targetAIGCData.originalInput) == null
      ? undefined
      : G.modelReqKey
    : t.input.modelReqKey;
  const Z = m.W();
  const videoMode = X.isRegenerate
    ? (A =
        (w = targetAIGCData.originalInput) == null ||
        (x = w.videoGenInputs[0]) == null
          ? undefined
          : x.videoMode) != null
      ? A
      : o.DAVideoMode.avatar
    : X.input.videoGenInputs.videoMode;
  const Y =
    X.isRegenerate &&
    (R =
      (F = t.targetAIGCData.refInfo) == null || (O = F.refRecordInfo) == null
        ? undefined
        : O.refHistoryId) != null
      ? R
      : t.targetAIGCData.historyRecordId;
  const originAgenticHistoryId = X.isRegenerate
    ? (H = t.targetAIGCData.refInfo) == null || (j = H.refRecordInfo) == null
      ? undefined
      : j.refAgenticHistoryId
    : g.B(t.targetAIGCData);
  const ee = X.isRegenerate
    ? (P =
        (U = t.targetAIGCData.refInfo) == null || (Q = U.refRecordInfo) == null
          ? undefined
          : Q.refItemId) != null
      ? P
      : (V = t.targetAIGCData.item) == null
        ? undefined
        : V.id
    : (L = t.targetAIGCData.item) == null
      ? undefined
      : L.id;
  const et = a._(
    r._(
      {},
      X,
      Z,
      h.P({
        submitId: Z.submitId,
        isRegenerate: t.isRegenerate,
        targetAIGCData: t.targetAIGCData,
        taskPayload: t.taskPayload,
        isPostEdit: true,
      }),
    ),
    {
      mode: (D = t.mode) != null ? D : o.DAAIGCMode.workbench,
      originHistoryId: Y != null ? Y : "",
      originAgenticHistoryId,
      originItemId: ee != null ? ee : "",
      draftContent: t.targetAIGCData.draftContent,
      input: {
        videoGenInputs: {
          videoMode,
          v2vOpt: X.isRegenerate
            ? {
                lipSync:
                  (K = X.input) == null
                    ? undefined
                    : K.videoGenInputs.v2vOpt.lipSync,
                avMix:
                  targetAIGCData.originalInput.videoGenInputs[0].v2vOpt.avMix,
              }
            : {
                lipSync: X.input.videoGenInputs.v2vOpt.lipSync,
                avMix: p.O(targetAIGCData),
              },
        },
        modelReqKey,
      },
    },
  );
  return e.createInstance(T_1, {
    mockDataCreator: () => {
      var e;
      var t;
      var i;
      var n;
      b.X3(et.submitId, "submitId is required");
      b.X3(
        (t = et.taskPayload) == null ? undefined : t.taskExtra,
        "taskExtra is required",
      );
      return a._(
        r._(
          {},
          y.l({
            submitId: et.submitId,
            generateType: C.ce.LipSync,
            workspaceId: et.workspaceId,
          }),
          k.p(targetAIGCData, {
            daVideoProcessType: o.DAVideoProcessType.LipSync,
            originHistoryId: et.originHistoryId,
            originAgenticHistoryId: et.originAgenticHistoryId,
            originItemId: et.originItemId,
            isRegenerate: (e = et.isRegenerate) != null && e,
          }),
        ),
        {
          video: undefined,
          videoDuration: targetAIGCData.videoDuration,
          originVideo: undefined,
          item: undefined,
          ttsInfo:
            (i = et.input.videoGenInputs.v2vOpt.lipSync) == null
              ? undefined
              : i.ttsInfo,
          originalInput: a._(r._({}, targetAIGCData.originalInput), {
            videoGenInputs: [
              S.A(
                {},
                (n = targetAIGCData.originalInput) == null
                  ? undefined
                  : n.videoGenInputs[0],
                et.input.videoGenInputs,
              ),
            ],
          }),
          taskExtra: et.taskPayload.taskExtra,
        },
      );
    },
    processInputParamsConverter: () => s.TZ(new d.x(et).convert()),
    submitQueryParams: {
      babiParam:
        ((templateId =
          (M = (i = {
            modelKey: et.input.modelReqKey,
            templateId:
              (W = et.taskPayload) == null || (N = W.taskExtra) == null
                ? undefined
                : N.templateId,
          }).templateId) && M !== "0"
            ? M
            : undefined),
        f.OC({
          scenario: "image_video_generation",
          featureKey: "to_video-lipsync",
          featureEntranceDetail: "".concat(I.F(), "-to_video-lipsync"),
          editType: templateId ? "template" : "tool",
          toolId: templateId ? _.M.TemplateCharacter : _.M.Character,
          templateId,
          extraParams: {
            modelId: i == null ? undefined : i.modelKey,
          },
        })),
    },
    generatorCommerceManager: e.createInstance(E_1, {
      sceneOptions: u.I({
        scene: c.Sk.LipSync,
        modelReqKey,
        videoDuration:
          (E = (q = targetAIGCData.video) == null ? undefined : q.duration) !=
          null
            ? E
            : 0,
      }),
      submitId: et.submitId,
    }),
  });
}
