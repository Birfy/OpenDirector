import r from "NY";
import a from "oa";
import n from "bk";
import o from "Ut";
import s from "M8X";
import d from "K8";
import l from "EBI";
import u from "cT";
import { E as E_1 } from "./module-FI.js";
import m from "Gr4";
import g from "gu";
import h from "k1J";
import p from "Oh";
import v from "uy2";
import I from "ELo";
import { T as T_1 } from "./module-PXv.js";
import f from "Dm";
import b from "hE";
import y from "yMd";
import { K } from "./module-BF_2.js";
import S from "UH9";
import C from "hP";
import M from "GS";
function T(e, t) {
  let i;
  let T;
  let templateId;
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
  const H = s.cQ(e, I.B);
  const modelReqKey =
    (t.isRegenerate
      ? (E = t.targetAIGCData.originalInput) == null
        ? undefined
        : E.modelReqKey
      : t.input.modelReqKey) || H.actionCopyModelReplacedKey;
  const U = h.W();
  const V = n._(
    a._(
      {},
      U,
      p.P({
        submitId: U.submitId,
        isRegenerate: t.isRegenerate,
        targetAIGCData: t.isRegenerate ? t.targetAIGCData : undefined,
        taskPayload: t.taskPayload,
        isPostEdit: false,
      }),
    ),
    {
      mode: (R = t.mode) != null ? R : o.DAAIGCMode.workbench,
      workspaceId: t.workspaceId,
      input: {
        videoGenInputs: {
          v2vOpt: t.isRegenerate
            ? {
                videoTemplate:
                  (G =
                    t.targetAIGCData.originalInput.videoGenInputs[0].v2vOpt) ==
                  null
                    ? undefined
                    : G.videoTemplate,
              }
            : t.input.videoGenInputs.v2vOpt,
        },
        modelReqKey,
        seed: l.V(),
      },
      infiniteCanvasExtend: t.isRegenerate ? t.infiniteCanvasExtend : undefined,
    },
  );
  const L = t.isRegenerate
    ? (P = (x = t.targetAIGCData.video) == null ? undefined : x.duration) !=
      null
      ? P
      : 0
    : (D =
          (O = t.input.videoGenInputs.v2vOpt.videoTemplate) == null ||
          (w = O.videoInfo) == null
            ? undefined
            : w.duration) != null
      ? D
      : 0;
  return e.createInstance(T_1, {
    mockDataCreator: () =>
      ((e, t) => {
        f.X3(t.submitId, "submitId is required");
        f.X3(
          (d = t.taskPayload) == null ? undefined : d.taskExtra,
          "taskExtra is required",
        );
        let i;
        let r;
        var d;
        let l;
        let u;
        let c;
        let m;
        const g = s.cQ(e, I.B);
        const processFlows = [
          {
            curProcessFlows: [o.DAVideoProcessType.VideoTemplate],
          },
        ];
        const { videoTemplate } = t.input.videoGenInputs.v2vOpt;
        const v = Math.min(
          (i =
            (r =
              videoTemplate == null || (l = videoTemplate.videoInfo) == null
                ? undefined
                : l.duration) != null
              ? r
              : videoTemplate == null ||
                  (c = videoTemplate.videoTemplateItem) == null ||
                  (u = c.video) == null
                ? undefined
                : u.duration) != null
            ? i
            : 0,
          30,
        );
        return n._(
          a._(
            {},
            b.l({
              submitId: t.submitId,
              generateType: y.ce.VideoTemplate,
              workspaceId: t.workspaceId,
            }),
          ),
          {
            video: undefined,
            videoModelConfig: (() => {
              var e = t.input.modelReqKey
                ? g.getActionCopyModelConfig(t.input.modelReqKey)
                : undefined;
              if (e) {
                return K(e);
              }
            })(),
            originVideo: undefined,
            item: undefined,
            videoDuration: v,
            originalInput: n._(a._({}, t.input), {
              priority: o.DAPriority.Normal,
              videoGenInputs: [t.input.videoGenInputs],
              seed: t.input.seed,
              videoAspectRatio: "1:1",
            }),
            processFlows,
            lastProcessFlow:
              (m = processFlows.at(-1)) == null
                ? undefined
                : m.curProcessFlows.at(0),
            taskExtra: t.taskPayload.taskExtra,
          },
        );
      })(e, V),
    processInputParamsConverter: () =>
      r._(function* () {
        const { v2vOpt } = V.input.videoGenInputs;
        const { videoTemplate } = v2vOpt;
        if (
          !(videoTemplate == null
            ? undefined
            : videoTemplate.videoTemplateItemId) &&
          (videoTemplate == null ? undefined : videoTemplate.videoInfo)
        ) {
          videoTemplate.videoInfo = yield v.E(e, videoTemplate.videoInfo);
        }
        return d.TZ(new u.I(V).convert());
      })(),
    submitQueryParams: {
      babiParam:
        ((templateId =
          (T = (i = {
            modelKey: V.input.modelReqKey,
            templateId:
              (j = V.taskPayload) == null || (F = j.taskExtra) == null
                ? undefined
                : F.templateId,
          }).templateId) && T !== "0"
            ? T
            : undefined),
        M.OC({
          scenario: "image_video_generation",
          featureKey: "text_to_video",
          featureEntranceDetail: "".concat(S.F(), "-text_to_video"),
          editType: templateId ? "template" : "tool",
          toolId: templateId
            ? C.M.TemplateVideoActionDriver
            : C.M.VideoActionDriver,
          templateId,
          extraParams: {
            modelId: i == null ? undefined : i.modelKey,
          },
        })),
    },
    generatorCommerceManager: e.createInstance(E_1, {
      sceneOptions: m.I({
        scene: g.Sk.ActionCopy,
        videoDuration: L,
        modelReqKey,
      }),
      submitId: V.submitId,
    }),
  });
}
export { T as b };
