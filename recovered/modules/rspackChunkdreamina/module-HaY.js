import r from "oa";
import a from "bk";
import n from "qa";
import o from "Ut";
import s from "K8";
import d from "Bx";
import l from "fRi";
import { E as E_1 } from "./module-FI.js";
import c from "Gr4";
import m from "gu";
import g from "k1J";
import h from "Oh";
import p from "VFa";
import v from "s9b";
import { T as T_1 } from "./module-PXv.js";
import { g8 } from "./module-sa0.js";
import f from "Po";
import b from "Dm";
import y from "hE";
import k from "N37";
import S from "yMd";
function C(e, t) {
  let i;
  let C;
  let M;
  let T;
  let A;
  let R;
  let P;
  const { targetAIGCData } = t;
  const E = n._(t, ["targetAIGCData"]);
  const G =
    (A = t.targetAIGCData.originalInput) == null ||
    (T = A.videoGenInputs) == null
      ? undefined
      : T[0];
  const x = g.W();
  const w = Object.assign(
    E,
    a._(
      r._(
        {},
        x,
        h.P({
          submitId: x.submitId,
          isRegenerate: t.isRegenerate,
          targetAIGCData: t.targetAIGCData,
          taskPayload: t.taskPayload,
          isPostEdit: true,
        }),
      ),
      {
        mode: (i = t.mode) != null ? i : o.DAAIGCMode.workbench,
        originHistoryId: (C = targetAIGCData.historyRecordId) != null ? C : "",
        originAgenticHistoryId: p.B(targetAIGCData),
        originItemId:
          (M = (R = targetAIGCData.item) == null ? undefined : R.id) != null
            ? M
            : "",
        draftContent: targetAIGCData.draftContent,
        input: {
          videoGenInputs: a._(r._({}, G), {
            resolution: l.Xd(targetAIGCData),
            vid: t.input.videoGenInputs.vid,
            v2vOpt: a._(r._({}, t.input.videoGenInputs.v2vOpt), {
              avMix: t.isRegenerate
                ? t.input.videoGenInputs.v2vOpt.avMix
                : v.O(targetAIGCData),
            }),
          }),
        },
        infiniteCanvasExtend: t.infiniteCanvasExtend,
      },
    ),
  );
  return e.createInstance(T_1, {
    mockDataCreator: () => {
      var e;
      var t;
      var i;
      b.X3(w.submitId, "submitId is required");
      b.X3(
        (t = w.taskPayload) == null ? undefined : t.taskExtra,
        "taskExtra is required",
      );
      return a._(
        r._(
          {},
          y.l({
            submitId: w.submitId,
            generateType: S.ce.Text2Video,
            workspaceId: w.workspaceId,
          }),
          k.p(targetAIGCData, {
            daVideoProcessType: o.DAVideoProcessType.InsertFrame,
            originHistoryId: w.originHistoryId,
            originAgenticHistoryId: w.originAgenticHistoryId,
            originItemId: w.originItemId,
            isRegenerate: (e = w.isRegenerate) != null && e,
          }),
        ),
        {
          prompt: targetAIGCData.prompt,
          video: undefined,
          videoDuration: targetAIGCData.videoDuration,
          originVideo: undefined,
          item: undefined,
          originalInput: a._(r._({}, targetAIGCData.originalInput), {
            videoGenInputs: [
              f.A(
                {},
                (i = targetAIGCData.originalInput) == null
                  ? undefined
                  : i.videoGenInputs[0],
                w.input.videoGenInputs,
              ),
            ],
          }),
          taskExtra: w.taskPayload.taskExtra,
        },
      );
    },
    processInputParamsConverter: () => s.TZ(new d.j(w).convert()),
    submitQueryParams: {
      babiParam: g8({
        modelKey:
          (P = targetAIGCData.originalInput) == null
            ? undefined
            : P.modelReqKey,
      }),
    },
    generatorCommerceManager: e.createInstance(E_1, {
      sceneOptions: c.I({
        scene: m.Sk.VideoFrameInterpolation,
        videoDuration: 0,
      }),
      submitId: w.submitId,
    }),
  });
}
export { C as m };
