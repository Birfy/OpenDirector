import r from "oa";
import a from "bk";
import n from "qa";
import o from "Ut";
import s from "K8";
import d from "BUQ";
import l from "Qlw";
import u from "C95";
import { E } from "./module-FI.js";
import m from "j6i";
import g from "deo";
import h from "gu";
import p from "k3X";
import v from "T7";
import I from "k1J";
import _ from "VFa";
import f from "P2s";
import { X } from "./module-MGT.js";
import y from "UH9";
import { ri } from "./module-sa0.js";
import C from "hE";
import M from "Wa8";
import T from "Tz";
import A from "yMd";
function S() {
  return ri({
    scenario: "image_video_generation",
    featureKey: "to_image_inpaint",
    featureEntranceDetail: "".concat(y.F(), "-inpainting"),
  });
}
function R(e, t, i) {
  let d;
  let l;
  const { targetAIGCData } = t;
  const y = n._(t, ["targetAIGCData"]);
  const k = I.W();
  const R = Object.assign(
    y,
    r._(
      a._(r._({}, k), {
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
            originAgenticHistoryId: _.B(targetAIGCData),
          },
    ),
  );
  Object.assign(
    R,
    f.r(e, {
      targetAIGCData: t.targetAIGCData,
      metricsExtra: t.isRegenerate ? undefined : t.metricsExtra,
      isRegenerate: t.isRegenerate,
      submitId: k.submitId,
      input: R,
    }),
  );
  return e.createInstance(X, {
    mockDataCreator: () => {
      var e;
      var t;
      t = R.submitId;
      return a._(
        r._(
          {},
          C.l({
            submitId: t,
            generateType: A.ce.InPaint,
            workspaceId: R.workspaceId,
          }),
          M.T(targetAIGCData),
        ),
        {
          prompt: R.prompt,
          refInfo: T.d(targetAIGCData, {
            originHistoryId: R.originHistoryId,
            itemId: R.itemId,
            isRegenerate: (e = R.isRegenerate) != null && e,
            originAgenticHistoryId: R.originAgenticHistoryId,
          }),
          text2imageParams: {
            largeImageInfo: targetAIGCData.text2imageParams.largeImageInfo,
            isIntelligentAspectRatio:
              targetAIGCData.text2imageParams.isIntelligentAspectRatio,
          },
          metricsExtra: R.metricsExtra,
          isDraftGen: true,
        },
      );
    },
    processInputParamsConverter: () => s.TZ(new i(R).convert()),
    submitQueryParams: {
      babiParam: S(),
    },
    generatorCommerceManager: e.createInstance(E, {
      sceneOptions: m.O({
        scene: g.r({
          containerService: e,
          abTestKey: v.s.DreaminaModelConfigPostV45,
          defaultScene: h.Sk.ImageInPaintRepaintButton,
        }),
        benefitCount: p.P({
          containerService: e,
          abTestKey: v.s.DreaminaModelConfigPostV45,
          defaultBenefitCount: 1,
          scene: h.Sk.ImageInPaintRepaintButton,
        }),
      }),
      submitId: R.submitId,
    }),
  });
}
export function pt(e, t) {
  return R(e, t, d.p);
}
export function vi(e, t) {
  let i;
  let n;
  let d;
  if ("targetAIGCData" in t) {
    return R(e, t, u.B);
  }
  n = I.W();
  Object.assign(
    (d = Object.assign(
      t,
      a._(r._({}, n), {
        mode: (i = t.mode) != null ? i : o.DAAIGCMode.workbench,
      }),
    )),
    f.r(e, {
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
          C.l({
            submitId: t,
            generateType: A.ce.InPaint,
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
    processInputParamsConverter: () => s.TZ(new l.H(d).convert()),
    submitQueryParams: {
      babiParam: S(),
    },
    generatorCommerceManager: e.createInstance(E, {
      sceneOptions: m.O({
        scene: g.r({
          containerService: e,
          abTestKey: v.s.DreaminaModelConfigPostV45,
          defaultScene: h.Sk.ImageInPaintRepaintButton,
        }),
      }),
      submitId: d.submitId,
    }),
  });
}
