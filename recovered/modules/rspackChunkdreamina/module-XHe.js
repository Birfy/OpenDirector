import r from "oa";
import a from "bk";
import n from "qa";
import o from "Ut";
import s from "K8";
import d from "LG";
import l from "d8R";
import u from "UeX";
import { E } from "./module-FI.js";
import m from "j6i";
import g from "deo";
import h from "gu";
import p from "T7";
import v from "k1J";
import I from "VFa";
import _ from "P2s";
import { X } from "./module-MGT.js";
import b from "UH9";
import { ri } from "./module-sa0.js";
import S from "hE";
import C from "Wa8";
import M from "Tz";
import T from "yMd";
function k() {
  return ri({
    scenario: "image_video_generation",
    featureKey: "to_image_remove",
    featureEntranceDetail: "".concat(b.F(), "-inpaintremove"),
  });
}
function A(e, t, i) {
  let d;
  let l;
  const { targetAIGCData } = t;
  const b = n._(t, ["targetAIGCData"]);
  const y = v.W();
  const A = Object.assign(
    b,
    r._(
      a._(r._({}, y), {
        mode: (d = t.mode) != null ? d : o.DAAIGCMode.workbench,
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
              (l = targetAIGCData.historyRecordId) != null ? l : "",
            originAgenticHistoryId: I.B(targetAIGCData),
          },
    ),
  );
  Object.assign(
    A,
    _.r(e, {
      targetAIGCData: t.targetAIGCData,
      metricsExtra: t.isRegenerate ? undefined : t.metricsExtra,
      isRegenerate: t.isRegenerate,
      submitId: y.submitId,
      input: A,
    }),
  );
  return e.createInstance(X, {
    mockDataCreator: () => {
      var e;
      var t;
      t = A.submitId;
      return a._(
        r._(
          {},
          S.l({
            submitId: t,
            generateType: T.ce.InPaintRemove,
            workspaceId: A.workspaceId,
          }),
          C.T(targetAIGCData),
        ),
        {
          prompt: A.prompt,
          refInfo: M.d(targetAIGCData, {
            originHistoryId: A.originHistoryId,
            itemId: A.itemId,
            isRegenerate: (e = A.isRegenerate) != null && e,
            originAgenticHistoryId: A.originAgenticHistoryId,
          }),
          text2imageParams: {
            largeImageInfo: targetAIGCData.text2imageParams.largeImageInfo,
            isIntelligentAspectRatio:
              targetAIGCData.text2imageParams.isIntelligentAspectRatio,
          },
          metricsExtra: A.metricsExtra,
          isDraftGen: true,
        },
      );
    },
    processInputParamsConverter: () => s.TZ(new i(A).convert()),
    submitQueryParams: {
      babiParam: k(),
    },
    generatorCommerceManager: e.createInstance(E, {
      sceneOptions: m.O({
        scene: g.r({
          containerService: e,
          abTestKey: p.s.DreaminaModelConfigPostV45,
          defaultScene: h.Sk.ImageInPaintEraserButton,
        }),
      }),
      submitId: A.submitId,
    }),
  });
}
export function nG(e, t) {
  return A(e, t, d.r);
}
export function XO(e, t) {
  let i;
  let n;
  let d;
  if ("targetAIGCData" in t) {
    return A(e, t, u.w);
  }
  n = v.W();
  Object.assign(
    (d = Object.assign(
      t,
      a._(r._({}, n), {
        mode: (i = t.mode) != null ? i : o.DAAIGCMode.workbench,
      }),
    )),
    _.r(e, {
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
          S.l({
            submitId: t,
            generateType: T.ce.InPaintRemove,
            workspaceId: d.workspaceId,
          }),
        ),
        {
          prompt: d.prompt,
          text2imageParams: {},
          paintingParams: {
            prompt: (e = d.prompt) != null ? e : "",
            maskUri: d.maskUri,
            originImage: d.originUri
              ? {
                  imageUri: d.originUri,
                  imageUrl: d.originUrl,
                  width: d.originWidth,
                  height: d.originHeight,
                }
              : undefined,
          },
          metricsExtra: d.metricsExtra,
          isDraftGen: true,
        },
      );
    },
    processInputParamsConverter: () => s.TZ(new l.O(d).convert()),
    submitQueryParams: {
      babiParam: k(),
    },
    generatorCommerceManager: e.createInstance(E, {
      sceneOptions: m.O({
        scene: g.r({
          containerService: e,
          abTestKey: p.s.DreaminaModelConfigPostV45,
          defaultScene: h.Sk.ImageInPaintEraserButton,
        }),
      }),
      submitId: d.submitId,
    }),
  });
}
