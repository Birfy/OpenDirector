import r from "oa";
import a from "bk";
import n from "Ut";
import o from "Dm";
import s from "M8X";
import d from "K8";
import l from "yXq";
import u from "mY6";
import { E } from "./module-FI.js";
import m from "Gr4";
import g from "gu";
import h from "k1J";
import p from "Oh";
import v from "ELo";
import { T as T_1 } from "./module-PXv.js";
import _ from "UH9";
import f from "hP";
import b from "GS";
import y from "hE";
import k from "yMd";
import { K } from "./module-BF_2.js";
import C from "H26";
function M(e, t, i) {
  let M;
  let T;
  let templateId;
  const R = a._(r._({}, h.W()), {
    mode: (G = t.mode) != null ? G : n.DAAIGCMode.workbench,
  });
  let P = t.isRegenerate
    ? (O = t.targetAIGCData.originalInput) == null
      ? undefined
      : O.modelReqKey
    : t.input.modelReqKey;
  if (t.isRegenerate) {
    const { targetAIGCData } = t;
    const E =
      (W = targetAIGCData.originalInput) == null
        ? undefined
        : W.videoGenInputs[0];
    o.X3(E, "when regenerate should has videoGenInput");
    o.X3(targetAIGCData.ttsInfo, "when regenerate should has ttsInfo");
    if (!P) {
      var G;
      var x;
      var w;
      var O;
      var F;
      var j;
      var H;
      var Q;
      var U;
      var V;
      var L;
      var K;
      var N;
      var W;
      let q;
      const B = s.cQ(e, v.B);
      const X = l.c.videoModeToLipSyncMode(E.videoMode);
      P = X
        ? (q = B.findDigitalHumanModelByLipSyncMode(X, i)) == null
          ? undefined
          : q.key
        : undefined;
    }
    N = a._(
      r._(
        a._(r._({}, R), {
          input: {
            videoGenInputs: {
              videoMode: E.videoMode,
              prompt: E.prompt,
            },
            modelReqKey: P,
          },
          workspaceId: t.workspaceId,
        }),
        p.P({
          submitId: R.submitId,
          isRegenerate: t.isRegenerate,
          targetAIGCData: t.targetAIGCData,
          taskPayload: undefined,
          isPostEdit: false,
        }),
      ),
      {
        isRegenerate: true,
        draftContent: targetAIGCData.draftContent,
        infiniteCanvasExtend: t.infiniteCanvasExtend,
      },
    );
    if (i) {
      let z;
      const Z = (z = E.v2vOpt) == null ? undefined : z.lipSyncUserVideo;
      o.X3(Z, "when generate by video should has lipSyncUserData");
      N.input.videoGenInputs.v2vOpt = {
        lipSyncUserVideo: a._(r._({}, Z), {
          ttsInfo: targetAIGCData.ttsInfo,
          originVideo: a._(r._({}, Z.originVideo), {
            originVideo: r._({}, Z.originVideo.originVideo),
          }),
        }),
      };
    } else {
      let J;
      const Y =
        E == null || (J = E.i2vOpt) == null ? undefined : J.realmanAvatar;
      o.X3(Y, "when generate by image should has lipSyncUserData");
      N.input.videoGenInputs.i2vOpt = {
        realmanAvatar: a._(r._({}, Y), {
          ttsInfo: targetAIGCData.ttsInfo,
        }),
      };
    }
  } else {
    N = r._(
      a._(r._({}, R), {
        input: t.input,
        workspaceId: t.workspaceId,
      }),
      p.P({
        submitId: R.submitId,
        isRegenerate: false,
        targetAIGCData: undefined,
        taskPayload: t.taskPayload,
        isPostEdit: false,
      }),
    );
  }
  const videoDuration =
    (x =
      (w =
        (H = N.input.videoGenInputs.i2vOpt) == null ||
        (j = H.realmanAvatar) == null ||
        (F = j.originAudio) == null
          ? undefined
          : F.duration) != null
        ? w
        : (V = N.input.videoGenInputs.v2vOpt) == null ||
            (U = V.lipSyncUserVideo) == null ||
            (Q = U.originVideo) == null
          ? undefined
          : Q.duration) != null
      ? x
      : 0;
  return e.createInstance(T_1, {
    mockDataCreator: () => {
      var i;
      var d;
      var l;
      var u;
      var c;
      var m;
      var g;
      var processFlows;
      i = N;
      d = t.isRegenerate ? t.targetAIGCData : undefined;
      m = !!((l = i.input.videoGenInputs.v2vOpt) == null
        ? undefined
        : l.lipSyncUserVideo);
      g = s.cQ(e, v.B);
      o.X3(
        (u = i.taskPayload) == null ? undefined : u.taskExtra,
        "taskExtra is required",
      );
      processFlows = [
        {
          curProcessFlows: m
            ? [n.DAVideoProcessType.LipSyncUserVideo]
            : [n.DAVideoProcessType.LipSyncImage],
        },
      ];
      return a._(
        r._(
          {},
          y.l({
            submitId: i.submitId,
            generateType: k.ce.LipSync,
            workspaceId: i.workspaceId,
          }),
          (() => {
            var videoGenInputs = i.input.videoGenInputs;
            if (
              (t = videoGenInputs.v2vOpt) == null
                ? undefined
                : t.lipSyncUserVideo
            ) {
              var t;
              var r;
              var a;
              var { originVideo, ttsInfo: ttsInfo_1 } =
                videoGenInputs.v2vOpt.lipSyncUserVideo;
              o.X3(
                originVideo.originVideo.width && originVideo.originVideo.height,
                "originVideo width and height is required",
              );
              var u =
                originVideo.originVideo.width / originVideo.originVideo.height;
              var c =
                (r = n.DAImageRatioTypeUtils.valueToType(u)) != null
                  ? r
                  : n.DAImageRatioType.ImageRatioType_11;
              var m = Math.round((a = originVideo.duration) != null ? a : 0);
              return {
                videoRatio: c,
                video: {
                  duration: m,
                  videoId: "mock-data",
                },
                videoDuration: m,
                refInfo: d ? d.refInfo : undefined,
                originalInput: d
                  ? d.originalInput
                  : {
                      videoGenInputs: [videoGenInputs],
                      videoAspectRatio: n.DAImageRatioTypeUtils.titleOfValue(c),
                      seed: 0,
                      priority: n.DAPriority.Normal,
                    },
                ttsInfo: ttsInfo_1,
              };
            }
            var g;
            var h;
            var {
              originImage,
              originAudio,
              ttsInfo,
              beforeSilenceMillisecond,
              afterSilenceMillisecond,
            } = videoGenInputs.i2vOpt.realmanAvatar;
            o.X3(
              originImage.width && originImage.height,
              "originImage width and height is required",
            );
            var b = Math.round(
              (g = originAudio == null ? undefined : originAudio.duration) !=
                null
                ? g
                : 0,
            );
            b +=
              ((beforeSilenceMillisecond != null
                ? beforeSilenceMillisecond
                : 0) +
                (afterSilenceMillisecond != null
                  ? afterSilenceMillisecond
                  : 0)) /
              C.K;
            var y = originImage.width / originImage.height;
            var k =
              (h = n.DAImageRatioTypeUtils.valueToType(y)) != null
                ? h
                : n.DAImageRatioType.ImageRatioType_11;
            return {
              videoRatio: k,
              video: {
                duration: b,
                videoId: "mock-data",
              },
              videoDuration: b,
              refInfo: d ? d.refInfo : undefined,
              originalInput: d
                ? d.originalInput
                : {
                    videoGenInputs: [videoGenInputs],
                    videoAspectRatio: n.DAImageRatioTypeUtils.titleOfValue(k),
                    seed: 0,
                    priority: n.DAPriority.Normal,
                  },
              ttsInfo,
            };
          })(),
        ),
        {
          videoModelConfig: (() => {
            var e = i.input.modelReqKey
              ? g.getDigitalHumanModelConfig(i.input.modelReqKey)
              : undefined;
            if (e) {
              return K(e);
            }
          })(),
          originVideo: undefined,
          item: undefined,
          processFlows,
          lastProcessFlow:
            (c = processFlows.at(-1)) == null
              ? undefined
              : c.curProcessFlows.at(0),
          taskExtra: i.taskPayload.taskExtra,
        },
      );
    },
    processInputParamsConverter: () => d.TZ(new u.C(N).convert()),
    submitQueryParams: {
      babiParam:
        ((templateId =
          (T = (M = {
            modelKey: P,
            templateId:
              (K = N.taskPayload) == null || (L = K.taskExtra) == null
                ? undefined
                : L.templateId,
          }).templateId) && T !== "0"
            ? T
            : undefined),
        b.OC({
          scenario: "image_video_generation",
          featureKey: "text_to_video",
          featureEntranceDetail: "".concat(_.F(), "-text_to_video"),
          editType: templateId ? "template" : "tool",
          toolId: templateId ? f.M.TemplateCharacter : f.M.Character,
          templateId,
          extraParams: {
            modelId: M == null ? undefined : M.modelKey,
          },
        })),
    },
    generatorCommerceManager: e.createInstance(E, {
      sceneOptions: m.I({
        scene: g.Sk.LipSync,
        modelReqKey: P,
        videoDuration,
      }),
      submitId: N.submitId,
    }),
  });
}
export { M as n };
