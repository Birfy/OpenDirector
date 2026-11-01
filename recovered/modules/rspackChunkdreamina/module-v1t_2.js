import r from "oa";
import a from "bk";
import n from "qa";
import o from "Ut";
import s from "Dm";
import d from "K8";
import l from "GX";
import u from "yMd";
import c from "fRi";
import { E as E_1 } from "./module-FI.js";
import g from "Gr4";
import h from "gu";
import p from "k1J";
import v from "Oh";
import I from "VFa";
import _ from "s9b";
import { T as T_1 } from "./module-PXv.js";
import { g8 } from "./module-sa0.js";
import y from "hE";
import k from "N37";
function S(e, t, i, n) {
  s.X3(
    i &&
      typeof i === "object" &&
      typeof i.vid === "string" &&
      i.vid.trim() &&
      [i.width, i.height, i.durationSeconds].every(
        (e) => Number.isFinite(e) && e > 0,
      ),
    "Uploaded video super resolution source is invalid",
  );
  s.X3(
    [n.targetWidth, n.targetHeight].every((e) => Number.isFinite(e) && e > 0) &&
      (n.resolution === "2K" || n.resolution === "4K"),
    "Uploaded video super resolution target is invalid",
  );
  let c;
  let I;
  let _;
  let k;
  let S;
  let C;
  let M;
  let T;
  const { vid, width, height, durationSeconds } = i;
  const E = {
    vid,
    width,
    height,
    durationSeconds,
  };
  const G = p.W();
  const x = t.isRegenerate ? t.targetAIGCData.taskExtra : undefined;
  const taskExtra = a._(
    r._({}, x, (k = t.taskPayload) == null ? undefined : k.taskExtra),
    {
      enterFrom:
        (c =
          (I =
            (C = t.taskPayload) == null || (S = C.taskExtra) == null
              ? undefined
              : S.enterFrom) != null
            ? I
            : x == null
              ? undefined
              : x.enterFrom) != null
          ? c
          : "click",
      isRegenerate: t.isRegenerate,
      uploadedSuperResolutionSource: r._({}, E),
      videoProcessType: o.DAVideoProcessType.SR,
      originId: undefined,
      previewId: undefined,
      previewSubmitId: undefined,
      videoStage: undefined,
    },
  );
  const O = a._(
    r._(
      {},
      G,
      v.P({
        submitId: G.submitId,
        isRegenerate: t.isRegenerate,
        isPostEdit: true,
        taskPayload: {
          taskExtra,
        },
      }),
    ),
    {
      mode: (_ = t.mode) != null ? _ : o.DAAIGCMode.workbench,
      isRegenerate: t.isRegenerate,
      workspaceId: t.workspaceId,
      infiniteCanvasExtend: t.infiniteCanvasExtend,
      input: {
        videoGenInputs: {
          vid: E.vid,
          v2vOpt: {
            superResolution: {
              originWidth: E.width,
              originHeight: E.height,
              targetWidth: n.targetWidth,
              targetHeight: n.targetHeight,
              resolution: n.resolution,
              aigcSr: true,
            },
          },
        },
      },
    },
  );
  let F = JSON.parse(
    ((T = O.taskPayload) == null || (M = T.taskExtra) == null
      ? undefined
      : M.sceneOptions) || "{}",
  );
  if (Array.isArray(F)) {
    F = Object.assign({}, ...F);
  }
  return e.createInstance(T_1, {
    mockDataCreator: () => {
      var e;
      var t;
      s.X3(
        (t = O.taskPayload) == null ? undefined : t.taskExtra,
        "taskExtra is required",
      );
      return a._(
        r._(
          {},
          y.l({
            submitId: O.submitId,
            generateType: u.ce.Text2Video,
            workspaceId: O.workspaceId,
          }),
        ),
        {
          video: undefined,
          originVideo: undefined,
          item: undefined,
          videoDuration: E.durationSeconds,
          processFlows: [
            {
              curProcessFlows: [o.DAVideoProcessType.SR],
            },
          ],
          lastProcessFlow: o.DAVideoProcessType.SR,
          draftContent: (e = O.draftContent) != null ? e : "",
          originalInput: {
            videoGenInputs: [O.input.videoGenInputs],
            seed: 0,
            priority: o.DAPriority.Normal,
          },
          taskExtra: O.taskPayload.taskExtra,
        },
      );
    },
    processInputParamsConverter: () => d.TZ(new l.N(O).convert()),
    submitQueryParams: {
      babiParam: g8(),
    },
    generatorCommerceManager: e.createInstance(E_1, {
      sceneOptions: g.I(
        a._(r._({}, F), {
          scene: h.Sk.VideoUpscale,
          videoDuration: E.durationSeconds,
          resolution: n.resolution,
        }),
      ),
      submitId: O.submitId,
    }),
  });
}
export function Y(e, t) {
  if ("source" in t) {
    return S(e, t, t.source, t.superResolution);
  }
  if (
    t.isRegenerate &&
    t.targetAIGCData.lastProcessFlow === o.DAVideoProcessType.SR &&
    t.targetAIGCData.taskExtra.uploadedSuperResolutionSource !== undefined
  ) {
    var i;
    var C;
    var M;
    var T;
    var A;
    var R;
    var P;
    var D;
    var E;
    var G;
    var x;
    var w;
    var O;
    var F;
    var j;
    var H;
    var Q;
    let U;
    let V;
    const L = t.targetAIGCData.taskExtra.uploadedSuperResolutionSource;
    const K =
      (U = t.targetAIGCData.originalInput) == null
        ? undefined
        : U.videoGenInputs[0];
    const N =
      K == null || (V = K.v2vOpt) == null ? undefined : V.superResolution;
    s.X3(
      L &&
        N &&
        K.vid === L.vid &&
        N.originWidth === L.width &&
        N.originHeight === L.height,
      "Uploaded video super resolution source does not match the original input",
    );
    return S(e, t, L, N);
  }
  const { targetAIGCData } = t;
  const q = n._(t, ["targetAIGCData"]);
  const videoDuration =
    (i = (A = targetAIGCData.video) == null ? undefined : A.duration) != null
      ? i
      : targetAIGCData.videoDuration;
  const X =
    (P = t.targetAIGCData.originalInput) == null ||
    (R = P.videoGenInputs) == null
      ? undefined
      : R[0];
  const z = t.isRegenerate
    ? X == null || (E = X.v2vOpt) == null || (D = E.superResolution) == null
      ? undefined
      : D.resolution
    : (w = t.input) == null ||
        (x = w.videoGenInputs.v2vOpt) == null ||
        (G = x.superResolution) == null
      ? undefined
      : G.resolution;
  const Z = p.W();
  const J = Object.assign(
    q,
    a._(
      r._(
        {},
        Z,
        v.P({
          submitId: Z.submitId,
          isRegenerate: t.isRegenerate,
          targetAIGCData: t.targetAIGCData,
          taskPayload: t.taskPayload,
          isPostEdit: true,
        }),
      ),
      {
        mode: (C = t.mode) != null ? C : o.DAAIGCMode.workbench,
        originHistoryId: (M = targetAIGCData.historyRecordId) != null ? M : "",
        originAgenticHistoryId: I.B(targetAIGCData),
        originItemId:
          (T = (O = targetAIGCData.item) == null ? undefined : O.id) != null
            ? T
            : "",
        draftContent: targetAIGCData.draftContent,
        infiniteCanvasExtend: t.infiniteCanvasExtend,
        input: {
          videoGenInputs: a._(r._({}, X), {
            resolution: c.Xd(targetAIGCData),
            vid: t.isRegenerate ? X.vid : t.input.videoGenInputs.vid,
            v2vOpt: t.isRegenerate
              ? {
                  superResolution: X.v2vOpt.superResolution,
                  avMix: X.v2vOpt.avMix,
                }
              : a._(r._({}, t.input.videoGenInputs.v2vOpt), {
                  avMix: _.O(targetAIGCData),
                }),
          }),
        },
      },
    ),
  );
  if ((F = J.taskPayload) == null ? undefined : F.taskExtra) {
    J.taskPayload.taskExtra.uploadedSuperResolutionSource = undefined;
  }
  let Y = JSON.parse(
    ((H = J.taskPayload) == null || (j = H.taskExtra) == null
      ? undefined
      : j.sceneOptions) || "{}",
  );
  if (Array.isArray(Y)) {
    Y = Object.assign({}, ...Y);
  }
  return e.createInstance(T_1, {
    mockDataCreator: () => {
      var e;
      var t;
      var i;
      var n;
      var d;
      var l;
      var c;
      var m;
      var g;
      e = {
        generateType: u.ce.Text2Video,
      };
      s.X3(J.submitId, "submitId is required");
      s.X3(
        (l = J.taskPayload) == null ? undefined : l.taskExtra,
        "taskExtra is required",
      );
      g =
        (t =
          (c = targetAIGCData.originalInput) == null
            ? undefined
            : c.videoGenInputs[0]) != null
          ? t
          : {};
      return a._(
        r._(
          {},
          y.l({
            submitId: J.submitId,
            generateType: e.generateType,
            workspaceId: J.workspaceId,
          }),
          k.p(targetAIGCData, {
            daVideoProcessType: o.DAVideoProcessType.SR,
            originHistoryId: (i = J.originHistoryId) != null ? i : "",
            originAgenticHistoryId: J.originAgenticHistoryId,
            originItemId: (n = J.originItemId) != null ? n : "",
            isRegenerate: (d = J.isRegenerate) != null && d,
          }),
        ),
        {
          prompt: targetAIGCData.prompt,
          video: undefined,
          videoDuration: targetAIGCData.videoDuration,
          originVideo: undefined,
          item: undefined,
          originalInput: a._(r._({}, targetAIGCData.originalInput), {
            videoGenInputs: [r._({}, g, J.input.videoGenInputs)],
          }),
          taskExtra: (m = J.taskPayload) == null ? undefined : m.taskExtra,
        },
      );
    },
    processInputParamsConverter: () => d.TZ(new l.N(J).convert()),
    submitQueryParams: {
      babiParam: g8({
        modelKey:
          (Q = targetAIGCData.originalInput) == null
            ? undefined
            : Q.modelReqKey,
      }),
    },
    generatorCommerceManager: e.createInstance(E_1, {
      sceneOptions: g.I(
        a._(r._({}, Y), {
          scene: h.Sk.VideoUpscale,
          videoDuration,
          resolution: z != null ? z : Y.resolution,
        }),
      ),
      submitId: J.submitId,
    }),
  });
}
