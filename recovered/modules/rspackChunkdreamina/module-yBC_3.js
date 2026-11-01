import r from "NY";
import a from "oa";
import n from "bk";
import o from "qa";
import s from "Ut";
import d from "K8";
import l from "JSz";
import u from "ek1";
import c from "cF";
import m from "KK1";
import { E } from "./module-FI.js";
import h from "EQa";
import p from "uy2";
import v from "Svm";
import I from "k1J";
import _ from "Oh";
import { T } from "./module-PXv.js";
import { X as X_1 } from "./module-oK7.js";
import y from "Rb";
import k from "Dm";
import S from "M8X";
import C from "XJB";
import M from "H26";
import { K } from "./module-BF_2.js";
import A from "hE";
import R from "ELo";
function P(materialList, t, i) {
  materialList.forEach((e) => {
    if (e.materialType === "image") {
      var { imageInfo } = e;
      if (imageInfo) {
        t.push(() =>
          r._(function* () {
            e.imageInfo = yield h.Y(i, imageInfo);
          })(),
        );
      }
    } else if (e.materialType === "video") {
      var { videoInfo } = e;
      if (videoInfo) {
        t.push(() =>
          r._(function* () {
            e.videoInfo = yield p.E(i, videoInfo);
          })(),
        );
      }
    } else if (e.materialType === "audio") {
      var { audioInfo } = e;
      if (audioInfo) {
        t.push(() =>
          r._(function* () {
            e.audioInfo = yield v.Z(i, audioInfo);
          })(),
        );
      }
    }
  });
}
function D(e, t) {
  const i = I.W();
  const v = n._(
    a._(
      {},
      i,
      _.P({
        submitId: i.submitId,
        isRegenerate: t.isRegenerate,
        targetAIGCData: t.isRegenerate ? t.targetAIGCData : undefined,
        taskPayload: t.taskPayload,
        isDraftMode:
          t.isRegenerate || (H = t.input.videoGenInputs[0]) == null
            ? undefined
            : H.isDraftMode,
        isPostEdit:
          ((Q = t.taskPayload) == null
            ? undefined
            : Q.taskExtra.videoProcessType) === s.DAVideoProcessType.VideoEdit,
      }),
    ),
    {
      mode: (j = t.mode) != null ? j : s.DAAIGCMode.workbench,
    },
  );
  if (t.isRegenerate) {
    const { targetAIGCData } = t;
    const { agentOptData } = targetAIGCData;
    const G = targetAIGCData.originalInput;
    L = n._(a._({}, v), {
      isRegenerate: t.isRegenerate,
      input: n._(a._({}, G), {
        videoAspectRatio: u.x(G.videoAspectRatio, targetAIGCData.videoRatio),
      }),
      draftContent: targetAIGCData.draftContent,
      infiniteCanvasExtend: t.infiniteCanvasExtend,
      workspaceId: t.workspaceId,
    });
    if (agentOptData == null ? undefined : agentOptData.conversationId) {
      L.conversationId = agentOptData.conversationId;
    }
  } else {
    const { isRegenerate } = t;
    const w = o._(t, ["isRegenerate"]);
    L = n._(a._({}, w, v), {
      input: n._(a._({}, w.input), {
        videoAspectRatio: u.x(w.input.videoAspectRatio),
      }),
    });
  }
  if (L.conversationId) {
    L.turnId = l.bz();
  }
  const O = [];
  const F = L.input.videoGenInputs[0];
  if (F) {
    var j;
    var H;
    var Q;
    var U;
    var V;
    var L;
    let K;
    let N;
    let W;
    const { firstFrameImage } = F;
    if (firstFrameImage) {
      O.push(() =>
        r._(function* () {
          F.firstFrameImage = yield h.Y(e, firstFrameImage);
        })(),
      );
    }
    const { endFrameImage } = F;
    if (endFrameImage) {
      O.push(() =>
        r._(function* () {
          F.endFrameImage = yield h.Y(e, endFrameImage);
        })(),
      );
    }
    if ((K = F.multiFrames) != null) {
      K.forEach((t) => {
        var { mediaInfo } = t;
        if (
          (mediaInfo == null ? undefined : mediaInfo.mediaType) ===
          s.DAMediaType.Image
        ) {
          var { imageInfo } = mediaInfo;
          O.push(() =>
            r._(function* () {
              let i;
              const r = yield h.Y(e, imageInfo);
              if (
                ((i = t.mediaInfo) == null ? undefined : i.mediaType) ===
                s.DAMediaType.Image
              ) {
                t.mediaInfo.imageInfo = r;
              }
            })(),
          );
        } else if (
          (mediaInfo == null ? undefined : mediaInfo.mediaType) ===
          s.DAMediaType.Video
        ) {
          var { videoInfo } = mediaInfo;
          O.push(() =>
            r._(function* () {
              let i;
              const r = yield p.E(e, videoInfo);
              if (
                ((i = t.mediaInfo) == null ? undefined : i.mediaType) ===
                s.DAMediaType.Video
              ) {
                t.mediaInfo.videoInfo = r;
              }
            })(),
          );
        }
      });
    }
    if ((N = F.unifiedEditInput) == null ? undefined : N.materialList) {
      P(F.unifiedEditInput.materialList, O, e);
    }
    if ((W = F.longVideoInput) == null ? undefined : W.materialList) {
      P(F.longVideoInput.materialList, O, e);
    }
  }
  const X =
    !!(F == null ? undefined : F.firstFrameImage) ||
    !!(F == null ? undefined : F.endFrameImage);
  const { modelReqKey } = L.input;
  return e.createInstance(T, {
    mockDataCreator: () => {
      var t;
      var i;
      var agentOptData;
      var o;
      var d;
      var l;
      var u;
      var isAutoDuration;
      var lastProcessFlow;
      t = L;
      o = S.cQ(e, R.B);
      u =
        typeof (l = (d = t.input.videoGenInputs[0]).durationMs) === "number" &&
        Number.isFinite(l) &&
        l > 0
          ? l / M.K
          : 0;
      isAutoDuration = l === -1;
      if (t.conversationId && t.turnId) {
        agentOptData = {
          conversationId: t.conversationId,
          turnId: t.turnId,
        };
      }
      k.X3(
        (i = t.taskPayload) == null ? undefined : i.taskExtra,
        "taskExtra is required",
      );
      lastProcessFlow =
        t.taskPayload.taskExtra.videoProcessType ===
        s.DAVideoProcessType.VideoEdit
          ? s.DAVideoProcessType.VideoEdit
          : s.DAVideoProcessType.VideoGen;
      return n._(
        a._(
          {},
          A.l({
            submitId: t.submitId,
            generateType: 10,
            workspaceId: t.workspaceId,
          }),
        ),
        {
          prompt: d.prompt,
          videoModelConfig: (() => {
            if (t.input.videoModelConfig) {
              return t.input.videoModelConfig;
            }
            var e = t.input.modelReqKey
              ? o.getVideoModelConfig(t.input.modelReqKey)
              : undefined;
            if (e) {
              return K(e);
            }
          })(),
          originalInput: t.input,
          videoRatio: t.input.videoAspectRatio
            ? C.nD[t.input.videoAspectRatio]
            : undefined,
          originVideo: undefined,
          item: undefined,
          video:
            u > 0
              ? {
                  duration: u,
                  videoId: "mock-data",
                }
              : undefined,
          videoDuration: u,
          isAutoDuration,
          processFlows: [
            {
              curProcessFlows: [lastProcessFlow],
            },
          ],
          lastProcessFlow,
          taskExtra: t.taskPayload.taskExtra,
          refInfo: ((e) => {
            let t;
            let i;
            let r;
            let n;
            let o;
            let d;
            let l;
            let u;
            let c;
            let m;
            let g;
            let h;
            let p;
            let v;
            const I = (o = e.taskPayload) == null ? undefined : o.taskExtra;
            if (
              (I == null ? undefined : I.videoProcessType) ===
                s.DAVideoProcessType.VideoEdit &&
              I.originId
            ) {
              const _ =
                (u = e.input.videoGenInputs[0]) == null ||
                (l = u.unifiedEditInput) == null ||
                (d = l.materialList.find((e) => e.materialType === "video")) ==
                  null
                  ? undefined
                  : d.videoInfo;
              const imageUrl =
                (t =
                  (i = _ == null ? undefined : _.coverUrl) != null
                    ? i
                    : _ == null || (c = _.originVideo) == null
                      ? undefined
                      : c.coverUrl) != null
                  ? t
                  : (m = I.coverInfo) == null
                    ? undefined
                    : m.imageUrl;
              const width =
                (r =
                  _ == null || (g = _.originVideo) == null
                    ? undefined
                    : g.width) != null
                  ? r
                  : (h = I.coverInfo) == null
                    ? undefined
                    : h.width;
              const height =
                (n =
                  _ == null || (p = _.originVideo) == null
                    ? undefined
                    : p.height) != null
                  ? n
                  : (v = I.coverInfo) == null
                    ? undefined
                    : v.height;
              return {
                refType: y.DMLAigcDataRefType.History,
                refRecordInfo: a._(
                  {
                    refHistoryId: I.originId,
                  },
                  imageUrl
                    ? {
                        refItemInfo: a._(
                          {
                            imageUrl,
                          },
                          typeof width === "number"
                            ? {
                                width,
                              }
                            : {},
                          typeof height === "number"
                            ? {
                                height,
                              }
                            : {},
                        ),
                      }
                    : {},
                ),
              };
            }
          })(t),
          agentOptData,
        },
      );
    },
    processInputParamsConverter: () =>
      r._(function* () {
        if (O.length > 0) {
          yield Promise.all(O.map((e) => e()));
        }
        return d.TZ(new c.H(L).convert());
      })(),
    submitQueryParams: {
      babiParam: X_1(X, {
        modelKey: modelReqKey,
        templateId:
          (V = L.taskPayload) == null || (U = V.taskExtra) == null
            ? undefined
            : U.templateId,
      }),
    },
    generatorCommerceManager: e.createInstance(E, {
      sceneOptions: m.Z(L),
      submitId: L.submitId,
    }),
  });
}
export { D as a };
