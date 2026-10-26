import r from "oa";
import a from "bk";
import n from "qa";
import o from "Ut";
import s from "M8X";
import d from "K8";
import l from "s6C";
import u from "yB";
import { S as S_1 } from "./module-V7j.js";
import m from "Gr4";
import g from "gu";
import { E } from "./module-FI.js";
import p from "CR";
import v from "yMd";
import I from "A14";
import _ from "nss";
import f from "k1J";
import b from "Oh";
import y from "VFa";
import k from "hE";
import S from "N37";
import { T } from "./module-PXv.js";
import { g8 } from "./module-sa0.js";
export function h(e, t) {
  let i;
  const r =
    (i = s.cQ(e, _.Y).getInstanceSync()) == null
      ? undefined
      : i.videoModelConfigData.data;
  const a = I.iI(
    t.targetAIGCData,
    (r == null ? undefined : r.ok) ? r.value.subtitleEraseConfig : undefined,
    t.isRegenerate,
  );
  if (
    !a.eligible ||
    !I.cu(a, {
      sourceVideo: t.input.sourceVideo,
      modelReqKey: t.modelReqKey,
    })
  ) {
    return d.xz(p.Q.ErrClientCommon, "字幕擦除源视频或公共配置不可用");
  }
  const n = s.cQ(e, u.X).getInstanceSync();
  if (
    I._N(t.targetAIGCData) &&
    S_1(
      n,
      m.I({
        scene: g.Sk.VideoSubtitleErase,
        videoDuration: t.input.sourceVideo.duration,
        inputVideoDuration: t.input.sourceVideo.duration,
      }),
    )
  ) {
    return d.TZ(undefined);
  }
  return d.xz(p.Q.ErrClientCommon, "字幕擦除权限或积分报价未就绪");
}
export function J(e, t) {
  let i;
  let s;
  let u;
  const { targetAIGCData, modelReqKey } = t;
  const I = n._(t, ["targetAIGCData", "modelReqKey"]);
  const _ = f.W();
  const A = a._(
    r._(
      {},
      I,
      _,
      b.P({
        submitId: _.submitId,
        isRegenerate: t.isRegenerate,
        targetAIGCData,
        taskPayload: t.taskPayload,
        isPostEdit: true,
      }),
    ),
    {
      mode: o.DAAIGCMode.workbench,
      originHistoryId: (i = targetAIGCData.historyRecordId) != null ? i : "",
      originAgenticHistoryId: y.B(targetAIGCData),
      originItemId:
        (s = (u = targetAIGCData.item) == null ? undefined : u.id) != null
          ? s
          : "",
      draftContent: targetAIGCData.draftContent,
      originalInput: targetAIGCData.originalInput,
    },
  );
  const R = new l.W(A).convert();
  return e.createInstance(T, {
    mockDataCreator: () => {
      var e;
      var i;
      return a._(
        r._(
          {},
          k.l({
            submitId: A.submitId,
            generateType: v.ce.Text2Video,
            workspaceId: A.workspaceId,
          }),
          S.p(targetAIGCData, {
            daVideoProcessType: o.DAVideoProcessType.SubtitleErase,
            originHistoryId: A.originHistoryId,
            originAgenticHistoryId: A.originAgenticHistoryId,
            originItemId: A.originItemId,
            isRegenerate: t.isRegenerate,
          }),
        ),
        {
          prompt: targetAIGCData.prompt,
          originalInput: targetAIGCData.originalInput,
          videoDuration: A.input.sourceVideo.duration,
          video: undefined,
          originVideo: undefined,
          item: undefined,
          taskExtra:
            (e = (i = A.taskPayload) == null ? undefined : i.taskExtra) != null
              ? e
              : targetAIGCData.taskExtra,
          draftContent: R.draftContent,
        },
      );
    },
    processInputParamsConverter: () => {
      var i = h(e, t);
      if (i.ok) {
        return d.TZ(R);
      }
      return i;
    },
    submitQueryParams: {
      babiParam: g8({
        modelKey: modelReqKey,
      }),
    },
    generatorCommerceManager: e.createInstance(E, {
      sceneOptions: m.I({
        scene: g.Sk.VideoSubtitleErase,
        videoDuration: A.input.sourceVideo.duration,
        inputVideoDuration: A.input.sourceVideo.duration,
      }),
      submitId: A.submitId,
      validateBeforeSubmit: () => {
        var i = h(e, t);
        if (!i.ok) {
          throw Error(i.msg);
        }
      },
    }),
  });
}
