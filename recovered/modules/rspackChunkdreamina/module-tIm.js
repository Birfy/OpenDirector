import r from "oa";
import a from "bk";
import n from "Ut";
import o from "Dm";
import s from "M8X";
import d from "K8";
import l from "yTt";
import u from "xyG";
import { E as E_1 } from "./module-FI.js";
import m from "bV6";
import g from "k1J";
import h from "Oh";
import p from "ELo";
import { T as T_1 } from "./module-PXv.js";
import { X } from "./module-oK7.js";
import _ from "yMd";
import f from "hE";
import b from "N37";
export function H(e, t) {
  let i;
  let y;
  let k;
  let S;
  let C;
  let M;
  let T;
  const A = g.W();
  const { targetAIGCData } = t;
  const P = m.e(targetAIGCData, t);
  o.X3(P, "A draft source origin is required");
  const modelKey =
    (S = targetAIGCData.originalInput) == null ? undefined : S.modelReqKey;
  o.X3(modelKey, "A draft source model is required");
  const modelConfig = s.cQ(e, p.B).getVideoModelConfig(modelKey);
  o.X3(modelConfig, "The draft source model configuration is unavailable");
  const G = a._(
    r._(
      {},
      A,
      h.P({
        submitId: A.submitId,
        isRegenerate: t.isRegenerate,
        targetAIGCData,
        taskPayload: a._(r._({}, t.taskPayload), {
          taskExtra: a._(
            r._({}, (C = t.taskPayload) == null ? undefined : C.taskExtra),
            {
              enterFrom:
                (i =
                  (y =
                    (T = t.taskPayload) == null || (M = T.taskExtra) == null
                      ? undefined
                      : M.enterFrom) != null
                    ? y
                    : targetAIGCData.taskExtra.enterFrom) != null
                  ? i
                  : "click",
              videoProcessType: n.DAVideoProcessType.GenerateFromDraft,
            },
          ),
        }),
        isPostEdit: true,
      }),
    ),
    {
      mode: (k = t.mode) != null ? k : n.DAAIGCMode.workbench,
      infiniteCanvasExtend: t.infiniteCanvasExtend,
      originHistoryId: P.originHistoryId,
      originAgenticHistoryId: P.originAgenticHistoryId,
      originItemId: P.originItemId,
      draftContent: targetAIGCData.draftContent,
      resolution: t.resolution,
      availableResolutions: u.IU(modelConfig),
      workspaceId: t.workspaceId,
      isRegenerate: t.isRegenerate,
    },
  );
  const x = new l.i(G).convert();
  return e.createInstance(T_1, {
    mockDataCreator: () => {
      var e;
      var t;
      var i;
      e = a._(r._({}, G), {
        draftContent: x.draftContent,
      });
      o.X3(
        (i = e.taskPayload) == null ? undefined : i.taskExtra,
        "taskExtra is required",
      );
      return a._(
        r._(
          {},
          f.l({
            submitId: e.submitId,
            generateType: _.ce.Text2Video,
            workspaceId: e.workspaceId,
          }),
          b.p(targetAIGCData, {
            daVideoProcessType: n.DAVideoProcessType.GenerateFromDraft,
            originHistoryId: e.originHistoryId,
            originAgenticHistoryId: e.originAgenticHistoryId,
            originItemId: e.originItemId,
            isRegenerate: (t = e.isRegenerate) != null && t,
          }),
        ),
        {
          prompt: targetAIGCData.prompt,
          video: undefined,
          videoDuration: targetAIGCData.videoDuration,
          isAutoDuration: targetAIGCData.isAutoDuration,
          originVideo: undefined,
          item: undefined,
          draftContent: e.draftContent,
          originalInput: targetAIGCData.originalInput,
          taskExtra: e.taskPayload.taskExtra,
        },
      );
    },
    processInputParamsConverter: () => d.TZ(x),
    submitQueryParams: {
      babiParam: X(false, {
        modelKey,
      }),
    },
    generatorCommerceManager: e.createInstance(E_1, {
      sceneOptions: u.ux(
        targetAIGCData,
        a._(r._({}, t), {
          modelConfig,
        }),
      ),
      submitId: G.submitId,
    }),
  });
}
