import r from "oa";
import a from "bk";
import n from "qa";
import o from "Ut";
import s from "K8";
import d from "Td";
import l from "LOh";
import u from "fq";
import { E } from "./module-FI.js";
import m from "j6i";
import g from "gu";
import h from "k1J";
import p from "VFa";
import v from "P2s";
import { X } from "./module-MGT.js";
import _ from "UH9";
import { ri } from "./module-sa0.js";
import y from "yMd";
import k from "hE";
import S from "Wa8";
import C from "Tz";
function b() {
  return ri({
    scenario: "image_video_generation",
    featureKey: "to_image_expand",
    featureEntranceDetail: "".concat(_.F(), "-expand"),
  });
}
function M(e, t, i) {
  let d;
  const { targetAIGCData } = t;
  const u = n._(t, ["targetAIGCData"]);
  const _ = h.W();
  const f = Object.assign(
    u,
    r._(
      a._(r._({}, _), {
        mode: t.mode || o.DAAIGCMode.workbench,
        draftContent: targetAIGCData.draftContent,
        infiniteCanvasExtend: t.infiniteCanvasExtend,
      }),
      t.isRegenerate
        ? {
            itemId: targetAIGCData.refInfo.refRecordInfo.refItemId,
            originHistoryId: targetAIGCData.refInfo.refRecordInfo.refHistoryId,
            originAgenticHistoryId:
              targetAIGCData.refInfo.refRecordInfo.refAgenticHistoryId,
          }
        : {
            itemId: t.itemId,
            originHistoryId:
              (d = targetAIGCData.historyRecordId) != null ? d : "",
            originAgenticHistoryId: p.B(targetAIGCData),
          },
    ),
  );
  Object.assign(
    f,
    v.r(e, {
      targetAIGCData: t.targetAIGCData,
      metricsExtra: t.isRegenerate ? undefined : t.metricsExtra,
      isRegenerate: t.isRegenerate,
      submitId: _.submitId,
      input: f,
    }),
  );
  return e.createInstance(X, {
    mockDataCreator: () => {
      var e;
      var t;
      t = f.submitId;
      return a._(
        r._(
          {},
          k.l({
            submitId: t,
            generateType: y.ce.OutPaint,
            workspaceId: f.workspaceId,
          }),
          S.T(targetAIGCData),
        ),
        {
          imageRatio: f.upScale.imageRatio,
          refInfo: C.d(targetAIGCData, {
            originHistoryId: f.originHistoryId,
            originAgenticHistoryId: f.originAgenticHistoryId,
            itemId: f.itemId,
            isRegenerate: (e = f.isRegenerate) != null && e,
          }),
          prompt: f.prompt,
          text2imageParams: {
            largeImageInfo: targetAIGCData.text2imageParams.largeImageInfo,
          },
          metricsExtra: f.metricsExtra,
          isDraftGen: true,
        },
      );
    },
    processInputParamsConverter: () => s.TZ(new i(f).convert()),
    submitQueryParams: {
      babiParam: b(),
    },
    generatorCommerceManager: e.createInstance(E, {
      sceneOptions: m.O({
        scene: g.Sk.ImageOutPaintButton,
      }),
      submitId: f.submitId,
    }),
  });
}
export function ir(e, t) {
  return M(e, t, d.c);
}
export function mc(e, t) {
  let i;
  let n;
  let d;
  if ("targetAIGCData" in t) {
    return M(e, t, u.x);
  }
  n = h.W();
  Object.assign(
    (d = Object.assign(
      t,
      a._(r._({}, n), {
        mode: (i = t.mode) != null ? i : o.DAAIGCMode.workbench,
      }),
    )),
    v.r(e, {
      metricsExtra: t.metricsExtra,
      submitId: n.submitId,
      input: d,
      isRegenerate: false,
    }),
  );
  return e.createInstance(X, {
    mockDataCreator: () => {
      var e;
      var t;
      t = d.submitId;
      return a._(
        r._(
          {},
          k.l({
            submitId: t,
            generateType: y.ce.OutPaint,
            workspaceId: d.workspaceId,
          }),
        ),
        {
          imageRatio: d.upScale.imageRatio,
          prompt: d.prompt,
          paintingParams: {
            prompt: (e = d.prompt) != null ? e : "",
            upScale: d.upScale,
            originImage: d.originUri
              ? {
                  imageUri: d.originUri,
                  imageUrl: d.originUrl,
                  width: d.originWidth,
                  height: d.originHeight,
                }
              : undefined,
          },
          text2imageParams: {},
          metricsExtra: d.metricsExtra,
          isDraftGen: true,
        },
      );
    },
    processInputParamsConverter: () => s.TZ(new l.o(d).convert()),
    submitQueryParams: {
      babiParam: b(),
    },
    generatorCommerceManager: e.createInstance(E, {
      sceneOptions: m.O({
        scene: g.Sk.ImageOutPaintButton,
      }),
      submitId: d.submitId,
    }),
  });
}
