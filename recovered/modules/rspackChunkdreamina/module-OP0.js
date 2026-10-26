import r from "oa";
import a from "bk";
import n from "qa";
import o from "Ut";
import s from "K8";
import { E as E_1 } from "./module-FI.js";
import l from "j6i";
import u from "gu";
import c from "VFa";
import m from "k1J";
import g from "P2s";
import { X } from "./module-MGT.js";
import p from "CSy";
import v from "UH9";
import { ri } from "./module-sa0.js";
import f from "jp";
import b from "yMd";
import y from "Tz";
import k from "hE";
import S from "Wa8";
function _() {
  return ri({
    scenario: "image_video_generation",
    featureKey: "to_image_view_control",
    featureEntrance: v.F(),
    featureEntranceDetail: "".concat(v.F(), "-view-control"),
  });
}
function C(e) {
  return {
    yaw: e.viewControl.yaw,
    pitch: e.viewControl.pitch,
    distance: e.viewControl.distance,
  };
}
function M(e) {
  const { originWidth, originHeight } = e;
  if (originWidth && originHeight) {
    return f.B({
      width: originWidth,
      height: originHeight,
    });
  }
}
function T(e, t) {
  let i;
  let r;
  let a;
  let n;
  if (
    (i =
      (r = e.reportPage) != null
        ? r
        : (a = e.metricsExtra) == null
          ? undefined
          : a.reportPage) != null
  ) {
    return i;
  }
  if (t == null || (n = t.metricsExtra) == null) {
    return undefined;
  }
  return n.reportPage;
}
const model = "dreamina_image_lora_v43";
export function c7(e, t) {
  let i;
  let v;
  let I;
  let f;
  let R;
  let P;
  const { targetAIGCData, reportPage } = t;
  const G = n._(t, ["targetAIGCData", "reportPage"]);
  const x = m.W();
  R = ((e) => {
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
  const w = {
    originUri: (i = t.originUri) != null ? i : R.originUri,
    originUrl: (v = t.originUrl) != null ? v : R.originUrl,
    originWidth: (I = t.originWidth) != null ? I : R.originWidth,
    originHeight: (f = t.originHeight) != null ? f : R.originHeight,
  };
  const O = Object.assign(
    G,
    r._(
      a._(r._({}, x), {
        model,
        mode: (P = t.mode) != null ? P : o.DAAIGCMode.workbench,
        draftContent: targetAIGCData.draftContent,
        infiniteCanvasExtend: t.infiniteCanvasExtend,
      }),
      w,
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
            throw Error("Invalid view control regenerate ref info");
          }
          return {
            itemId: refItemId,
            originHistoryId: refHistoryId,
            originAgenticHistoryId: refAgenticHistoryId,
          };
        }
        const historyRecordId = e.targetAIGCData.historyRecordId;
        if (!historyRecordId) {
          throw Error("Invalid view control origin history id");
        }
        return {
          itemId: e.itemId,
          originHistoryId: historyRecordId,
          originAgenticHistoryId: c.B(e.targetAIGCData),
        };
      })(t),
    ),
  );
  Object.assign(
    O,
    g.r(e, {
      targetAIGCData,
      metricsExtra: a._(r._({}, t.isRegenerate ? undefined : t.metricsExtra), {
        reportPage: T(t, targetAIGCData),
      }),
      isRegenerate: t.isRegenerate,
      submitId: x.submitId,
      input: O,
    }),
  );
  return e.createInstance(X, {
    mockDataCreator: () => {
      var e;
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
      t = O.submitId;
      i = (e = M(O)) != null ? e : targetAIGCData.imageRatio;
      return a._(
        r._(
          {},
          k.l({
            submitId: t,
            generateType: b.ce.ViewControl,
            workspaceId: O.workspaceId,
          }),
          S.T(targetAIGCData),
        ),
        {
          imageRatio: i,
          refInfo: (v =
            (p = y.d(targetAIGCData, {
              originHistoryId: O.originHistoryId,
              originAgenticHistoryId: O.originAgenticHistoryId,
              itemId: O.itemId,
              isRegenerate: (n = O.isRegenerate) != null && n,
            })) == null
              ? undefined
              : p.refRecordInfo)
            ? a._(r._({}, p), {
                refRecordInfo: a._(r._({}, v), {
                  refItemInfo: a._(
                    r._({}, (o = v.refItemInfo) != null ? o : {}),
                    {
                      imageUrl:
                        (s = O.originUrl) != null
                          ? s
                          : (c = v.refItemInfo) == null
                            ? undefined
                            : c.imageUrl,
                      uri:
                        (d = O.originUri) != null
                          ? d
                          : (m = v.refItemInfo) == null
                            ? undefined
                            : m.uri,
                      width:
                        (l = O.originWidth) != null
                          ? l
                          : (g = v.refItemInfo) == null
                            ? undefined
                            : g.width,
                      height:
                        (u = O.originHeight) != null
                          ? u
                          : (h = v.refItemInfo) == null
                            ? undefined
                            : h.height,
                    },
                  ),
                }),
              })
            : p,
          viewControlParams: C(O),
          text2imageParams: {
            largeImageInfo: targetAIGCData.text2imageParams.largeImageInfo,
            imageRatio: i,
            isIntelligentAspectRatio:
              targetAIGCData.text2imageParams.isIntelligentAspectRatio,
          },
          metricsExtra: O.metricsExtra,
          isDraftGen: true,
        },
      );
    },
    processInputParamsConverter: () => s.TZ(new p.R(O).convert()),
    submitQueryParams: {
      babiParam: _(),
    },
    generatorCommerceManager: e.createInstance(E_1, {
      sceneOptions: l.O({
        scene: u.Sk.ImageViewControl,
      }),
      submitId: O.submitId,
    }),
  });
}
export function wM(e, t) {
  if ("targetAIGCData" in t) {
    return c7(e, t);
  }
  return ((e, t) => {
    let i;
    const c = m.W();
    const { reportPage } = t;
    const I = Object.assign(
      n._(t, ["reportPage"]),
      a._(r._({}, c), {
        model,
        mode: (i = t.mode) != null ? i : o.DAAIGCMode.workbench,
      }),
    );
    Object.assign(
      I,
      g.r(e, {
        metricsExtra: a._(r._({}, t.metricsExtra), {
          reportPage: T(t),
        }),
        submitId: c.submitId,
        input: I,
        isRegenerate: false,
      }),
    );
    return e.createInstance(X, {
      mockDataCreator: () => {
        var e;
        var t;
        e = I.submitId;
        t = M(I);
        return a._(
          r._(
            {},
            k.l({
              submitId: e,
              generateType: b.ce.ViewControl,
              workspaceId: I.workspaceId,
            }),
          ),
          {
            imageRatio: t,
            viewControlParams: C(I),
            text2imageParams: {
              imageRatio: t,
            },
            metricsExtra: I.metricsExtra,
            isDraftGen: true,
          },
        );
      },
      processInputParamsConverter: () => s.TZ(new p.R(I).convert()),
      submitQueryParams: {
        babiParam: _(),
      },
      generatorCommerceManager: e.createInstance(E_1, {
        sceneOptions: l.O({
          scene: u.Sk.ImageViewControl,
        }),
        submitId: I.submitId,
      }),
    });
  })(e, t);
}
