import r from "oa";
import a from "bk";
import n from "qa";
import o from "Ut";
import s from "K8";
import d from "FlD";
import { E as E_1 } from "./module-FI.js";
import u from "Gr4";
import c from "gu";
import m from "k1J";
import g from "Oh";
import h from "s9b";
import { T as T_1 } from "./module-PXv.js";
import v from "UH9";
import I from "hP";
import _ from "GS";
import f from "Dm";
import b from "hE";
import y from "N37";
import k from "yMd";
export function l(e, t) {
  let i;
  let S;
  let C;
  let M;
  let T;
  let A;
  const { targetAIGCData } = t;
  const P = n._(t, ["targetAIGCData"]);
  const D =
    (M = t.targetAIGCData.originalInput) == null ||
    (C = M.videoGenInputs) == null
      ? undefined
      : C[0];
  const E = m.W();
  const G = Object.assign(
    P,
    a._(
      r._(
        {},
        E,
        g.P({
          submitId: E.submitId,
          isRegenerate: t.isRegenerate,
          targetAIGCData: t.targetAIGCData,
          taskPayload: t.taskPayload,
          isPostEdit: true,
        }),
      ),
      {
        mode: (S = t.mode) != null ? S : o.DAAIGCMode.workbench,
        draftContent: t.targetAIGCData.draftContent,
        v2vOpt: {
          avMix: t.isRegenerate
            ? D == null || (T = D.v2vOpt) == null
              ? undefined
              : T.avMix
            : h.O(targetAIGCData),
        },
        infiniteCanvasExtend: t.infiniteCanvasExtend,
      },
    ),
  );
  return e.createInstance(T_1, {
    mockDataCreator: () => {
      var e;
      var i;
      var n;
      e = t.targetAIGCData;
      f.X3(
        (n = G.taskPayload) == null ? undefined : n.taskExtra,
        "taskExtra is required",
      );
      return a._(
        r._(
          {},
          b.l({
            submitId: G.submitId,
            generateType: k.ce.VideoBGM,
            workspaceId: G.workspaceId,
          }),
          y.p(e, {
            daVideoProcessType: o.DAVideoProcessType.VideoBGM,
            originHistoryId: G.input.originHistoryId,
            originAgenticHistoryId: G.input.originAgenticHistoryId,
            originItemId: G.input.originItemId,
            isRegenerate: (i = G.isRegenerate) != null && i,
          }),
        ),
        {
          originVideo: undefined,
          item: undefined,
          prompt: undefined,
          modelInfo: e.modelInfo,
          video: e.video,
          videoDuration: e.videoDuration,
          originalInput: e.originalInput,
          videoBgmParams: {
            tags: G.input.tags,
          },
          taskExtra: G.taskPayload.taskExtra,
        },
      );
    },
    processInputParamsConverter: () => s.TZ(new d.a(G).convert()),
    submitQueryParams: {
      babiParam:
        ((i = {
          modelKey:
            (A = targetAIGCData.originalInput) == null
              ? undefined
              : A.modelReqKey,
        }),
        _.OC({
          scenario: "image_video_generation",
          featureKey: "to_video_bgm",
          featureEntranceDetail: "".concat(v.F(), "-to_video_bgm"),
          editType: "tool",
          toolId: I.M.PostEditAudioGeneration,
          extraParams: {
            modelId: i == null ? undefined : i.modelKey,
          },
        })),
    },
    generatorCommerceManager: e.createInstance(E_1, {
      sceneOptions: u.I({
        scene: c.Sk.GenerateVideoBGM,
        videoDuration: t.targetAIGCData.videoDuration,
      }),
      submitId: G.submitId,
    }),
  });
}
