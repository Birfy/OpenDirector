import r from "oa";
import a from "bk";
import n from "qa";
import o from "Ut";
import s from "K8";
import d from "An";
import l from "kiY";
import u from "k1J";
import c from "VFa";
import m from "P2s";
import { X } from "./module-MGT.js";
import h from "UH9";
import { ri } from "./module-sa0.js";
import I from "yMd";
import _ from "hE";
import f from "Wa8";
import b from "Tz";
function v() {
  return ri({
    scenario: "image_video_generation",
    featureKey: "to_image_enhancement",
    featureEntranceDetail: "".concat(h.F(), "-enhancement"),
  });
}
function y(e, t, i) {
  let d;
  let l;
  const { targetAIGCData } = t;
  const p = n._(t, ["targetAIGCData"]);
  const y = u.W();
  const k = Object.assign(
    p,
    r._(
      a._(r._({}, y), {
        mode: (d = t.mode) != null ? d : o.DAAIGCMode.workbench,
        draftContent: t.targetAIGCData.draftContent,
        infiniteCanvasExtend: t.infiniteCanvasExtend,
      }),
      t.isRegenerate
        ? {
            itemId: t.targetAIGCData.refInfo.refRecordInfo.refItemId,
            originHistoryId:
              t.targetAIGCData.refInfo.refRecordInfo.refHistoryId,
            originAgenticHistoryId:
              t.targetAIGCData.refInfo.refRecordInfo.refAgenticHistoryId,
          }
        : {
            itemId: t.itemId,
            originHistoryId:
              (l = t.targetAIGCData.historyRecordId) != null ? l : "",
            originAgenticHistoryId: c.B(t.targetAIGCData),
          },
    ),
  );
  Object.assign(
    k,
    m.r(e, {
      targetAIGCData: t.targetAIGCData,
      metricsExtra: t.isRegenerate ? undefined : t.metricsExtra,
      isRegenerate: t.isRegenerate,
      submitId: y.submitId,
      input: k,
    }),
  );
  return e.createInstance(X, {
    mockDataCreator: () => {
      var e;
      var i;
      var n;
      var o;
      e = t.targetAIGCData;
      n = k.submitId;
      o = _.l({
        submitId: n,
        generateType: I.ce.SuperDefinition,
        workspaceId: k.workspaceId,
      });
      return a._(r._({}, o, f.T(e)), {
        refInfo: b.d(e, {
          originHistoryId: k.originHistoryId,
          originAgenticHistoryId: k.originAgenticHistoryId,
          itemId: k.itemId,
          isRegenerate: (i = k.isRegenerate) != null && i,
        }),
        text2imageParams: {
          largeImageInfo: e.text2imageParams.largeImageInfo,
          isIntelligentAspectRatio: e.text2imageParams.isIntelligentAspectRatio,
        },
        metricsExtra: k.metricsExtra,
        isDraftGen: true,
      });
    },
    processInputParamsConverter: () => s.TZ(new i(k).convert()),
    submitQueryParams: {
      babiParam: v(),
    },
  });
}
export function Mv(e, t) {
  return y(e, t, d.M);
}
export function W$(e, t) {
  let i;
  let n;
  let c;
  if ("targetAIGCData" in t) {
    return y(e, t, d.M);
  }
  n = u.W();
  Object.assign(
    (c = Object.assign(
      t,
      a._(r._({}, n), {
        mode: (i = t.mode) != null ? i : o.DAAIGCMode.workbench,
      }),
    )),
    m.r(e, {
      metricsExtra: t.metricsExtra,
      submitId: n.submitId,
      input: c,
      isRegenerate: false,
    }),
  );
  return e.createInstance(X, {
    mockDataCreator: () => {
      var e;
      e = c.submitId;
      return a._(
        r._(
          {},
          _.l({
            submitId: e,
            generateType: I.ce.SuperDefinition,
            workspaceId: c.workspaceId,
          }),
        ),
        {
          text2imageParams: {},
          metricsExtra: c.metricsExtra,
          isDraftGen: true,
        },
      );
    },
    processInputParamsConverter: () => s.TZ(new l.O(c).convert()),
    submitQueryParams: {
      babiParam: v(),
    },
  });
}
