import r from "oa";
import a from "bk";
import n from "qa";
import o from "Ut";
import s from "K8";
import d from "AoG";
import l from "hGZ";
import u from "uau";
import { E } from "./module-FI.js";
import m from "j6i";
import g from "gu";
import h from "k1J";
import p from "P2s";
import { X } from "./module-MGT.js";
import I from "UH9";
import { ri } from "./module-sa0.js";
import b from "hE";
import y from "Wa8";
import k from "Tz";
import S from "yMd";
function f() {
  return ri({
    scenario: "image_video_generation",
    featureKey: "to_image_etta_painting",
    featureEntranceDetail: "".concat(I.F(), "-etta_painting"),
  });
}
function C(e, t, i) {
  let d;
  let l;
  const { targetAIGCData } = t;
  const I = n._(t, ["targetAIGCData"]);
  const _ = h.W();
  const C = Object.assign(
    I,
    r._(
      a._(r._({}, _), {
        mode: (d = t.mode) != null ? d : o.DAAIGCMode.workbench,
        draftContent: targetAIGCData.draftContent,
        infiniteCanvasExtend: t.infiniteCanvasExtend,
      }),
      t.isRegenerate
        ? {
            itemId: targetAIGCData.refInfo.refRecordInfo.refItemId,
            originHistoryId: targetAIGCData.refInfo.refRecordInfo.refHistoryId,
          }
        : {
            itemId: t.itemId,
            originHistoryId:
              (l = targetAIGCData.historyRecordId) != null ? l : "",
          },
    ),
  );
  Object.assign(
    C,
    p.r(e, {
      targetAIGCData: t.targetAIGCData,
      metricsExtra: t.isRegenerate ? undefined : t.metricsExtra,
      isRegenerate: t.isRegenerate,
      submitId: _.submitId,
      input: C,
    }),
  );
  return e.createInstance(X, {
    mockDataCreator: () => {
      var e;
      var t;
      t = C.submitId;
      return a._(
        r._(
          {},
          b.l({
            submitId: t,
            generateType: S.ce.EttaPainting,
            workspaceId: C.workspaceId,
          }),
          y.T(targetAIGCData),
        ),
        {
          prompt: C.prompt,
          refInfo: k.d(targetAIGCData, {
            originHistoryId: C.originHistoryId,
            itemId: C.itemId,
            isRegenerate: (e = C.isRegenerate) != null && e,
          }),
          text2imageParams: {
            largeImageInfo: targetAIGCData.text2imageParams.largeImageInfo,
          },
          metricsExtra: C.metricsExtra,
          isDraftGen: true,
        },
      );
    },
    processInputParamsConverter: () => s.TZ(new i(C).convert()),
    submitQueryParams: {
      babiParam: f(),
    },
    generatorCommerceManager: e.createInstance(E, {
      sceneOptions: m.O({
        scene: g.Sk.ImageEttaPainting,
      }),
      submitId: C.submitId,
    }),
  });
}
export function su(e, t) {
  return C(e, t, d.d);
}
export function wL(e, t) {
  let i;
  let n;
  let d;
  if ("targetAIGCData" in t) {
    return C(e, t, u.X);
  }
  n = h.W();
  Object.assign(
    (d = Object.assign(
      t,
      a._(r._({}, n), {
        mode: (i = t.mode) != null ? i : o.DAAIGCMode.workbench,
      }),
    )),
    p.r(e, {
      metricsExtra: t.metricsExtra,
      submitId: n.submitId,
      input: d,
      isRegenerate: false,
    }),
  );
  return e.createInstance(X, {
    mockDataCreator: () => {
      var e;
      e = d.submitId;
      return a._(
        r._(
          {},
          b.l({
            submitId: e,
            generateType: S.ce.EttaPainting,
            workspaceId: d.workspaceId,
          }),
        ),
        {
          prompt: d.prompt,
          text2imageParams: {},
          metricsExtra: d.metricsExtra,
          isDraftGen: true,
        },
      );
    },
    processInputParamsConverter: () => s.TZ(new l.I(d).convert()),
    submitQueryParams: {
      babiParam: f(),
    },
    generatorCommerceManager: e.createInstance(E, {
      sceneOptions: m.O({
        scene: g.Sk.ImageEttaPainting,
      }),
      submitId: d.submitId,
    }),
  });
}
