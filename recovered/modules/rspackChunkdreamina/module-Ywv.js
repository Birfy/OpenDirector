import r from "oa";
import a from "bk";
import n from "qa";
import o from "Ut";
import s from "K8";
import d from "cb";
import l from "fRi";
import u from "k1J";
import c from "Oh";
import m from "VFa";
import g from "s9b";
import { T as T_1 } from "./module-PXv.js";
import { g8 } from "./module-sa0.js";
import v from "Po";
import I from "Dm";
import _ from "hE";
import f from "N37";
import b from "H26";
import y from "yMd";
function k(e, t) {
  let i;
  let k;
  let S;
  let C;
  let M;
  let T;
  let A;
  let R;
  const { targetAIGCData } = t;
  const D = n._(t, ["targetAIGCData"]);
  const E =
    (M = t.targetAIGCData.originalInput) == null ||
    (C = M.videoGenInputs) == null
      ? undefined
      : C[0];
  const G = u.W();
  const x = a._(
    r._(
      {},
      D,
      G,
      c.P({
        submitId: G.submitId,
        isRegenerate: t.isRegenerate,
        targetAIGCData: t.targetAIGCData,
        taskPayload: t.taskPayload,
        isPostEdit: true,
      }),
    ),
    {
      mode: (i = t.mode) != null ? i : o.DAAIGCMode.workbench,
      originHistoryId: (k = t.targetAIGCData.historyRecordId) != null ? k : "",
      originAgenticHistoryId: m.B(t.targetAIGCData),
      originItemId:
        (S = (T = t.targetAIGCData.item) == null ? undefined : T.id) != null
          ? S
          : "",
      draftContent: t.targetAIGCData.draftContent,
      input: {
        videoGenInputs: a._(r._({}, E), {
          resolution: l.Xd(targetAIGCData),
          vid: t.isRegenerate ? E.vid : t.input.videoGenInputs.vid,
          v2vOpt: t.isRegenerate
            ? {
                extend: E.v2vOpt.extend,
                avMix:
                  E == null || (A = E.v2vOpt) == null ? undefined : A.avMix,
              }
            : a._(r._({}, t.input.videoGenInputs.v2vOpt), {
                avMix: g.O(targetAIGCData),
              }),
        }),
      },
      infiniteCanvasExtend: t.infiniteCanvasExtend,
    },
  );
  return e.createInstance(T_1, {
    mockDataCreator: () => {
      var e;
      var t;
      var i;
      var n;
      var s;
      var d;
      var videoDuration;
      videoDuration =
        ((e =
          (n = x.input.videoGenInputs.v2vOpt) == null || (i = n.extend) == null
            ? undefined
            : i.extendDurationMs) != null
          ? e
          : 0) / b.K;
      I.X3(
        (s = x.taskPayload) == null ? undefined : s.taskExtra,
        "taskExtra is required",
      );
      return a._(
        r._(
          {},
          _.l({
            submitId: x.submitId,
            generateType: y.ce.Text2Video,
            workspaceId: x.workspaceId,
          }),
          f.p(targetAIGCData, {
            daVideoProcessType: o.DAVideoProcessType.Extend,
            originHistoryId: x.originHistoryId,
            originAgenticHistoryId: x.originAgenticHistoryId,
            originItemId: x.originItemId,
            isRegenerate: (t = x.isRegenerate) != null && t,
          }),
        ),
        {
          video: undefined,
          videoDuration,
          originVideo: undefined,
          item: undefined,
          originalInput: a._(r._({}, targetAIGCData.originalInput), {
            videoGenInputs: [
              v.A(
                {},
                (d = targetAIGCData.originalInput) == null
                  ? undefined
                  : d.videoGenInputs[0],
                x.input.videoGenInputs,
              ),
            ],
          }),
          taskExtra: x.taskPayload.taskExtra,
        },
      );
    },
    processInputParamsConverter: () => s.TZ(new d.u(x).convert()),
    submitQueryParams: {
      babiParam: g8({
        modelKey:
          (R = targetAIGCData.originalInput) == null
            ? undefined
            : R.modelReqKey,
      }),
    },
  });
}
export { k as l };
