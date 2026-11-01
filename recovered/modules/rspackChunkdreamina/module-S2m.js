import r from "oa";
import a from "bk";
import n from "qa";
import o from "Ut";
import s from "K8";
import { E as E_1 } from "./module-FI.js";
import l from "qGm";
import u from "VFa";
import c from "k1J";
import m from "P2s";
import { X } from "./module-MGT.js";
import h from "Oqd";
import p from "UH9";
import { ri } from "./module-sa0.js";
import _ from "M8X";
import f from "jp";
import b from "qg";
import y from "PH6";
import k from "yMd";
import S from "Tz";
import C from "hE";
import M from "Wa8";
import T from "T8M";
import A from "ELo";
function I() {
  return ri({
    scenario: "image_video_generation",
    featureKey: "to_image_smart_edit",
    featureEntrance: p.F(),
    featureEntranceDetail: "".concat(p.F(), "-smart-edit"),
  });
}
function R(e, model) {
  const i = _.cQ(e, A.B).getImageModelConfig(model);
  if (i) {
    return r._({}, i, T.b(i));
  }
}
function P(e) {
  const { originWidth, originHeight } = e;
  if (originWidth && originHeight) {
    return f.B({
      width: originWidth,
      height: originHeight,
    });
  }
}
function D(e) {
  let t;
  return {
    imageRatio: P(e),
    metricsExtra: e.metricsExtra,
    usedPostEditTypes: [y.j.SmartEdit],
    isDraftGen: true,
    totalImageCount: 1,
    smartEditOutputResolution: (t = e.outputResolution) != null ? t : b.aJ,
  };
}
function E(e, t) {
  let i;
  if (t.draftContent) {
    e.draftContent = t.draftContent;
  }
  e.isDraftGen = t.isDraftGen;
  e.smartEditOutputResolution =
    (i = t.smartEditOutputResolution) != null ? i : e.smartEditOutputResolution;
  if (e.modelInfo == null) {
    e.modelInfo = t.modelInfo;
  }
}
export function Zn(e, t) {
  let i;
  let p;
  let v;
  let _;
  let f;
  let b;
  let y;
  const { targetAIGCData } = t;
  const A = n._(t, ["targetAIGCData"]);
  const G = c.W();
  f = ((e) => {
    if (e.isRegenerate) {
      var t;
      var i;
      let r;
      let a;
      const n =
        (a = e.targetAIGCData.refInfo) == null || (r = a.refRecordInfo) == null
          ? undefined
          : r.refItemInfo;
      return {
        originUri: n == null ? undefined : n.uri,
        originUrl: n == null ? undefined : n.imageUrl,
        originWidth: n == null ? undefined : n.width,
        originHeight: n == null ? undefined : n.height,
      };
    }
    const o = e.targetAIGCData.itemList.find((t) => t.id === e.itemId);
    const s = o == null || (i = o.image.largeImages) == null ? undefined : i[0];
    return {
      originUri: s == null ? undefined : s.imageUri,
      originUrl:
        (t = o == null ? undefined : o.commonAttr.coverUrl) != null
          ? t
          : s == null
            ? undefined
            : s.imageUrl,
      originWidth: s == null ? undefined : s.width,
      originHeight: s == null ? undefined : s.height,
    };
  })(t);
  const x = {
    originUri: (i = t.originUri) != null ? i : f.originUri,
    originUrl: (p = t.originUrl) != null ? p : f.originUrl,
    originWidth: (v = t.originWidth) != null ? v : f.originWidth,
    originHeight: (_ = t.originHeight) != null ? _ : f.originHeight,
  };
  const w = Object.assign(
    A,
    r._(
      a._(r._({}, G), {
        model: (b = t.model) != null ? b : "",
        mode: (y = t.mode) != null ? y : o.DAAIGCMode.workbench,
        draftContent: targetAIGCData.draftContent,
        infiniteCanvasExtend: t.infiniteCanvasExtend,
      }),
      x,
      ((e) => {
        if (e.isRegenerate) {
          let t;
          const i =
            (t = e.targetAIGCData.refInfo) == null
              ? undefined
              : t.refRecordInfo;
          const { refItemId, refHistoryId, refAgenticHistoryId } =
            i != null ? i : {};
          if (!refItemId || !refHistoryId) {
            throw Error("Invalid smart edit regenerate ref info");
          }
          return {
            itemId: refItemId,
            originHistoryId: refHistoryId,
            originAgenticHistoryId: refAgenticHistoryId,
          };
        }
        const historyRecordId = e.targetAIGCData.historyRecordId;
        if (!historyRecordId) {
          throw Error("Invalid smart edit origin history id");
        }
        return {
          itemId: e.itemId,
          originHistoryId: historyRecordId,
          originAgenticHistoryId: u.B(e.targetAIGCData),
        };
      })(t),
    ),
  );
  Object.assign(
    w,
    m.r(e, {
      targetAIGCData,
      metricsExtra: t.isRegenerate ? undefined : t.metricsExtra,
      isRegenerate: t.isRegenerate,
      submitId: G.submitId,
      input: w,
    }),
  );
  return e.createInstance(X, {
    mockDataCreator: () => {
      var t;
      var i;
      var n;
      var o;
      var s;
      var d;
      var l;
      var u;
      var c;
      var m;
      var g;
      var h;
      var p;
      var v;
      var I;
      i = w.submitId;
      n = (t = P(w)) != null ? t : targetAIGCData.imageRatio;
      return a._(
        r._(
          {},
          C.l({
            submitId: i,
            generateType: k.ce.SmartEdit,
            workspaceId: w.workspaceId,
          }),
          M.T(targetAIGCData),
          D(w),
        ),
        {
          prompt: w.prompt,
          unifiedEditInput: undefined,
          modelInfo: R(e, w.model),
          imageRatio: n,
          refInfo: (I =
            (v = S.d(targetAIGCData, {
              originHistoryId: w.originHistoryId,
              originAgenticHistoryId: w.originAgenticHistoryId,
              itemId: w.itemId,
              isRegenerate: (o = w.isRegenerate) != null && o,
            })) == null
              ? undefined
              : v.refRecordInfo)
            ? a._(r._({}, v), {
                refRecordInfo: a._(r._({}, I), {
                  refItemInfo: a._(
                    r._({}, (s = I.refItemInfo) != null ? s : {}),
                    {
                      imageUrl:
                        (d = w.originUrl) != null
                          ? d
                          : (m = I.refItemInfo) == null
                            ? undefined
                            : m.imageUrl,
                      uri:
                        (l = w.originUri) != null
                          ? l
                          : (g = I.refItemInfo) == null
                            ? undefined
                            : g.uri,
                      width:
                        (u = w.originWidth) != null
                          ? u
                          : (h = I.refItemInfo) == null
                            ? undefined
                            : h.width,
                      height:
                        (c = w.originHeight) != null
                          ? c
                          : (p = I.refItemInfo) == null
                            ? undefined
                            : p.height,
                    },
                  ),
                }),
              })
            : v,
          text2imageParams: {
            largeImageInfo: targetAIGCData.text2imageParams.largeImageInfo,
            imageRatio: n,
            isIntelligentAspectRatio:
              targetAIGCData.text2imageParams.isIntelligentAspectRatio,
          },
        },
      );
    },
    processInputParamsConverter: () => s.TZ(new h.G(w).convert()),
    submitQueryParams: {
      babiParam: I(),
    },
    syncSubmitSuccessExtraData: E,
    syncPollingFailureExtraData: E,
    generatorCommerceManager: e.createInstance(E_1, {
      sceneOptions: l.C({
        modelReqKey: w.model,
        resolutionType: w.outputResolution,
      }),
      submitId: w.submitId,
    }),
  });
}
export function Hg(e, t) {
  let i;
  let n;
  let u;
  let p;
  if ("targetAIGCData" in t) {
    return Zn(e, t);
  }
  u = c.W();
  Object.assign(
    (p = Object.assign(
      t,
      a._(r._({}, u), {
        model: (i = t.model) != null ? i : "",
        mode: (n = t.mode) != null ? n : o.DAAIGCMode.workbench,
      }),
    )),
    m.r(e, {
      metricsExtra: t.metricsExtra,
      submitId: u.submitId,
      input: p,
      isRegenerate: t.isRegenerate,
    }),
  );
  return e.createInstance(X, {
    mockDataCreator: () => {
      var t;
      var i;
      t = p.submitId;
      i = P(p);
      return a._(
        r._(
          {},
          C.l({
            submitId: t,
            generateType: k.ce.SmartEdit,
            workspaceId: p.workspaceId,
          }),
          D(p),
        ),
        {
          prompt: p.prompt,
          modelInfo: R(e, p.model),
          imageRatio: i,
          text2imageParams: {
            imageRatio: i,
          },
        },
      );
    },
    processInputParamsConverter: () => s.TZ(new h.G(p).convert()),
    submitQueryParams: {
      babiParam: I(),
    },
    syncSubmitSuccessExtraData: E,
    syncPollingFailureExtraData: E,
    generatorCommerceManager: e.createInstance(E_1, {
      sceneOptions: l.C({
        modelReqKey: p.model,
        resolutionType: p.outputResolution,
      }),
      submitId: p.submitId,
    }),
  });
}
