import r from "oa";
import a from "bk";
import n from "Ut";
import o from "K8";
import s from "FC6";
import d from "QJz";
import { E } from "./module-FI.js";
import u from "j6i";
import c from "gu";
import m from "k1J";
import g from "VFa";
import h from "P2s";
import { X } from "./module-MGT.js";
import v from "UH9";
import { ri } from "./module-sa0.js";
import f from "yMd";
import b from "hE";
import y from "Wa8";
import k from "Tz";
function _() {
  return ri({
    scenario: "image_video_generation",
    featureKey: "to_image_aienhancement",
    featureEntranceDetail: "".concat(v.F(), "-aienhancement"),
  });
}
function S(e, t, i) {
  let s;
  let d;
  let v;
  let I;
  let S;
  let C;
  let M;
  let T;
  const A = m.W();
  const R = Object.assign(
    t,
    r._(
      a._(r._({}, A), {
        mode: (s = t.mode) != null ? s : n.DAAIGCMode.workbench,
        draftContent: t.targetAIGCData.draftContent,
        infiniteCanvasExtend: t.infiniteCanvasExtend,
      }),
      t.isRegenerate
        ? {
            itemId:
              (I = t.targetAIGCData.refInfo) == null ||
              (v = I.refRecordInfo) == null
                ? undefined
                : v.refItemId,
            originHistoryId:
              (C = t.targetAIGCData.refInfo) == null ||
              (S = C.refRecordInfo) == null
                ? undefined
                : S.refHistoryId,
            originAgenticHistoryId:
              (T = t.targetAIGCData.refInfo) == null ||
              (M = T.refRecordInfo) == null
                ? undefined
                : M.refAgenticHistoryId,
          }
        : {
            itemId: t.itemId,
            originHistoryId:
              (d = t.targetAIGCData.historyRecordId) != null ? d : "",
            originAgenticHistoryId: g.B(t.targetAIGCData),
          },
    ),
  );
  Object.assign(
    R,
    h.r(e, {
      targetAIGCData: t.targetAIGCData,
      metricsExtra: t.isRegenerate ? undefined : t.metricsExtra,
      isRegenerate: t.isRegenerate,
      submitId: A.submitId,
      input: R,
    }),
  );
  return e.createInstance(X, {
    mockDataCreator: () => {
      var e;
      var i;
      var o;
      var s;
      var d;
      var l;
      var u;
      var c;
      var m;
      var g;
      var h;
      e = t.targetAIGCData;
      h = R.submitId;
      return a._(
        r._(
          {},
          b.l({
            submitId: h,
            generateType: f.ce.ProHD,
            workspaceId: R.workspaceId,
          }),
          y.T(e),
        ),
        {
          refInfo:
            R.originHistoryId && R.itemId
              ? k.d(e, {
                  originHistoryId: R.originHistoryId,
                  originAgenticHistoryId: R.originAgenticHistoryId,
                  itemId: R.itemId,
                  isRegenerate: (i = R.isRegenerate) != null && i,
                })
              : undefined,
          proHDParams: {
            resolutionType:
              (o =
                (u = R.proHDParams) == null ? undefined : u.resolutionType) !=
              null
                ? o
                : n.DAImageProHDResolutionType.TwoK,
            originalImageStrength:
              (s =
                (c = R.proHDParams) == null
                  ? undefined
                  : c.originalImageStrength) != null
                ? s
                : 0,
            detailStrength:
              (d =
                (m = R.proHDParams) == null ? undefined : m.detailStrength) !=
              null
                ? d
                : 0,
            sceneType:
              (l = (g = R.proHDParams) == null ? undefined : g.sceneType) !=
              null
                ? l
                : n.DAImageProHDSceneType.Auto,
            originImage: r._({}, R.proHDParams.originImage),
          },
          text2imageParams: {
            largeImageInfo: e.text2imageParams.largeImageInfo,
            isIntelligentAspectRatio:
              e.text2imageParams.isIntelligentAspectRatio,
          },
          metricsExtra: R.metricsExtra,
          isDraftGen: true,
        },
      );
    },
    processInputParamsConverter: () => o.TZ(new i(R).convert()),
    submitQueryParams: {
      babiParam: _(),
    },
    generatorCommerceManager: e.createInstance(E, {
      sceneOptions: u.O({
        scene: c.Sk.ImageProHD,
        proHDResolutionType: R.proHDParams.resolutionType,
      }),
      submitId: R.submitId,
    }),
  });
}
export function Bm(e, t) {
  return S(e, t, s.B);
}
export function nL(e, t) {
  let i;
  let g;
  let v;
  if ("targetAIGCData" in t) {
    return S(e, t, s.B);
  }
  g = m.W();
  Object.assign(
    (v = Object.assign(
      t,
      a._(r._({}, g), {
        mode: (i = t.mode) != null ? i : n.DAAIGCMode.workbench,
      }),
    )),
    h.r(e, {
      metricsExtra: t.metricsExtra,
      submitId: g.submitId,
      input: v,
      isRegenerate: false,
    }),
  );
  return e.createInstance(X, {
    mockDataCreator: () => {
      var e;
      var t;
      var i;
      var o;
      var s;
      var d;
      var l;
      var u;
      var c;
      var m;
      var g;
      g = v.submitId;
      return a._(
        r._(
          {},
          b.l({
            submitId: g,
            generateType: f.ce.ProHD,
            workspaceId: v.workspaceId,
          }),
        ),
        {
          proHDParams: {
            resolutionType:
              (e =
                (l = v.proHDParams) == null ? undefined : l.resolutionType) !=
              null
                ? e
                : n.DAImageProHDResolutionType.TwoK,
            originalImageStrength:
              (t =
                (u = v.proHDParams) == null
                  ? undefined
                  : u.originalImageStrength) != null
                ? t
                : 0,
            detailStrength:
              (i =
                (c = v.proHDParams) == null ? undefined : c.detailStrength) !=
              null
                ? i
                : 0,
            sceneType:
              (o = (m = v.proHDParams) == null ? undefined : m.sceneType) !=
              null
                ? o
                : n.DAImageProHDSceneType.Auto,
            originImage: a._(r._({}, v.proHDParams.originImage), {
              imageUri: v.originUri,
              width: (s = v.originWidth) != null ? s : 0,
              height: (d = v.originHeight) != null ? d : 0,
            }),
          },
          text2imageParams: {},
          metricsExtra: v.metricsExtra,
          isDraftGen: true,
        },
      );
    },
    processInputParamsConverter: () => o.TZ(new d.T(v).convert()),
    submitQueryParams: {
      babiParam: _(),
    },
    generatorCommerceManager: e.createInstance(E, {
      sceneOptions: u.O({
        scene: c.Sk.ImageProHD,
        proHDResolutionType: v.proHDParams.resolutionType,
      }),
      submitId: v.submitId,
    }),
  });
}
