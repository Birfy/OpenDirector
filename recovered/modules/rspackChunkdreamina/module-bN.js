import n from "oa";
import r from "bk";
import a from "qa";
import o from "Ut";
import s from "Rb";
import l from "I3";
import d from "fm";
import u from "fg";
import v from "sC";
import c from "YB";
import { h } from "./module-cV_2.js";
import p from "R9c";
import f from "yMd";
import { a as a_1 } from "./module-Wqv.js";
import y from "Fc";
import { r as r_1 } from "./module-SkF.js";
import { d as d_1 } from "./module-lFB.js";
const I = ["1k", "1.5k", "2k", "4k", "8k"];
function _(e, width, height) {
  let n;
  return !!(e == null || (n = e.imageRatioSizes) == null
    ? undefined
    : n.some((e) => e.width === width && e.height === height));
}
export class q extends a_1 {
  constructor(e, t) {
    super(e, t);
    var i;
    var s;
    var u;
    var g = t.draftContent ? e.draft : undefined;
    this.isDraftGen = !!g;
    var S = new c.o(g, t.resources);
    if (g) {
      this.unifiedEditInput = v.A(g, t.resources);
    }
    var A = (u = t.itemList) == null ? undefined : u[0];
    var b = A == null ? undefined : A.aigcImageParams;
    var M = S.textToImageParams(b == null ? undefined : b.text2imageParams);
    var { modelConfig } = M;
    var k = a._(M, ["modelConfig"]);
    this.blendImageInfo = S.blendImageInfo(A);
    this.effectItemImageSize = (function (e) {
      let t;
      let i;
      let r;
      let a;
      const o =
        arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      const s =
        (a = e.itemList) == null ||
        (r = a[0]) == null ||
        (i = r.image) == null ||
        (t = i.largeImages) == null
          ? undefined
          : t[0];
      if ((s == null ? undefined : s.width) && s.height) {
        const { width, height } = s;
        const resolutionType = ((e) => {
          let t;
          let i;
          const {
            width,
            height,
            inputImageSize,
            isIntelligentAspectRatio,
            resolutionMap,
          } = e;
          const l =
            inputImageSize == null ? undefined : inputImageSize.resolutionType;
          const d =
            l &&
            _(
              resolutionMap == null ? undefined : resolutionMap[l],
              width,
              height,
            )
              ? l
              : I.find((e) =>
                  _(
                    resolutionMap == null ? undefined : resolutionMap[e],
                    width,
                    height,
                  ),
                );
          if (d) {
            return d;
          }
          if (
            (isIntelligentAspectRatio &&
              l &&
              (!(resolutionMap == null || (i = resolutionMap[l]) == null
                ? undefined
                : i.imageRangeConfig) ||
                ((e, t, i) => {
                  let n;
                  const { minLength, maxLength, maxPixelNum } =
                    (n = e == null ? undefined : e.imageRangeConfig) != null
                      ? n
                      : {};
                  return (
                    minLength !== undefined &&
                    maxLength !== undefined &&
                    maxPixelNum !== undefined &&
                    t >= minLength &&
                    t <= maxLength &&
                    i >= minLength &&
                    i <= maxLength &&
                    t * i <= maxPixelNum
                  );
                })(resolutionMap[l], width, height))) ||
            (l &&
              inputImageSize.width === width &&
              inputImageSize.height === height) ||
            (l &&
              ((e, t, i, n) => {
                let r;
                let a;
                const o =
                  e == null ||
                  (a = e[t]) == null ||
                  (r = a.imageRangeConfig) == null
                    ? undefined
                    : r.maxPixelNum;
                const s = I.slice(0, I.indexOf(t)).flatMap((t) => {
                  var i;
                  var n;
                  var r;
                  if (
                    (i =
                      e == null ||
                      (r = e[t]) == null ||
                      (n = r.imageRangeConfig) == null
                        ? undefined
                        : n.maxPixelNum) != null
                  ) {
                    return i;
                  }
                  return [];
                });
                if (o === undefined || s.length === 0) {
                  return false;
                }
                const l = i * n;
                return l > Math.max(...s) && l <= o;
              })(resolutionMap, l, width, height))
          ) {
            return l;
          }
          if ((t = width * height) < 3686400) {
            return "1k";
          }
          if (t < 8847360) {
            return "2k";
          }
          if (t < 35389440) {
            return "4k";
          }
          return "8k";
        })(
          n._(
            {
              width,
              height,
            },
            o,
          ),
        );
        return {
          width,
          height,
          resolutionType,
        };
      }
    })(t, {
      inputImageSize: k.largeImageInfo,
      isIntelligentAspectRatio: k.isIntelligentAspectRatio,
      resolutionMap:
        modelConfig == null ? undefined : modelConfig.resolutionMap,
    });
    this.draftContent = ((e) => {
      let t;
      let i;
      const { draftContent } = e;
      if (draftContent) {
        return draftContent;
      }
      const { itemList } = e;
      if (!(itemList == null ? undefined : itemList[0])) {
        return "";
      }
      const { aigcImageParams } = itemList[0];
      const s = d.uc(JSON.stringify(itemList[0]));
      const l = d.uc(JSON.stringify(aigcImageParams));
      if (
        (t =
          (i = new o.ADTODA_ImageTransformer(l, s).convertToDraft()) == null
            ? undefined
            : i.toJSONString()) != null
      ) {
        return t;
      }
      return "";
    })(t);
    this.smartEditOutputResolution = ((e, t) => {
      let i;
      if (e === f.ce.SmartEdit && t) {
        if ((i = y.A(t)) == null) {
          return undefined;
        }
        return i.extra.submit.outputResolution;
      }
    })(this.generateType, this.draftContent);
    this.usedPostEditTypes = S.getUsedPostEditTypes();
    this.maxGenerateCount = S.getGenerateCount();
    this.isForceSingleGeneration = S.getIsForceSingleGeneration();
    this.imageRatio = k.imageRatio;
    this.text2imageParams = k;
    this.modelInfo = ((e, t, i) => {
      if (!t.hasModel()) {
        let a;
        if (
          (a = e.modelInfo) == null ? undefined : a.generationWaitTipStarlingKey
        ) {
          return {
            generationWaitTipStarlingKey:
              e.modelInfo.generationWaitTipStarlingKey,
          };
        }
        return undefined;
      }
      if (e.modelInfo) {
        return r._(n._({}, e.modelInfo), {
          feats: i == null ? undefined : i.feats,
          featsCantCombine: i == null ? undefined : i.featsCantCombine,
        });
      }
      if (i) {
        return r._(n._({}, i), {
          generationWaitTipStarlingKey: undefined,
        });
      }
    })(t, S, modelConfig);
    this.paintingParams = S.paintingParam(b);
    this.proHDParams = S.proHDParams();
    this.viewControlParams = S.viewControlParams(b);
    this.canvasDraft = S.canvasDataParams();
    this.totalImageCount = Number(e.wrapper.totalImageCount);
    this.finishedImageCount = Number(e.wrapper.finishedImageCount);
    this.confirmStatus = ((e) => {
      const { confirmStatus } = e.wrapper;
      if (confirmStatus) {
        return {
          1: h.UnConfirm,
          2: h.ConfirmContinue,
          3: h.GiveUp,
        }[confirmStatus];
      }
    })(e);
    this.imageType = ((e) => {
      const { imageType } = e.wrapper;
      if (imageType) {
        return {
          1: p.o.Group_Image,
          2: p.o.Edit_Image,
          3: p.o.Text_Image,
        }[imageType];
      }
    })(e);
    if (!this.prompt) {
      this.prompt = this.text2imageParams.prompt;
    }
    this.metricsExtra = ((e) => {
      const t = {
        promptSource: f.lY.Custom,
        generateId: "",
        generateCount: 1,
        templateId: "0",
        enterFrom: "click",
      };
      if (!e) {
        return t;
      }
      const i = l.j(e, t);
      return n._(
        {},
        t,
        Object.fromEntries(
          [
            "collectionId",
            "drawType",
            "enterFrom",
            "enterScenario",
            "generateCount",
            "generateId",
            "impressionId",
            "isRegenerate",
            "lastRequestId",
            "originItemId",
            "originRequestId",
            "promptSource",
            "reportPage",
            "replyMessageId",
            "userMessageId",
            "searchId",
            "searchKeyword",
            "searchRequestId",
            "templateDuration",
            "templateFrom",
            "templateId",
            "templatePrompt",
            "templateSource",
            "templateStyleCode",
            "templateTypeId",
            "referenceTemplateCnt",
            "referenceTemplateId",
            "sceneOptions",
            "showcaseId",
            "toolItemId",
            "isBoxSelect",
            "isCutout",
            "generateLogId",
            "generateSuggestion",
            "generateSuggestionText",
            "markTagCnt",
            "markBoxCnt",
            "imageTextCnt",
            "imageArrowCnt",
            "subject_material_state",
          ]
            .filter((e) => i[e] !== undefined)
            .map((e) => [e, i[e]]),
        ),
      );
    })(t.metricsExtra || "");
    this.metricsExtra.originItemId = S.postEditOriginItemId();
    this.failedItemList =
      (i = (s = t.failedItemList) == null ? undefined : s.map((e) => r_1(e))) !=
      null
        ? i
        : [];
    this.preGenItemIds = d_1(t);
    this.forecastResolution = t.forecastResolution;
    this.totalImageCount = t.totalImageCount;
    this.finishedImageCount = t.finishedImageCount;
    this.imageType = t.imageType;
    this.imageDisplayMode =
      t.imageDisplayMode === p.d.AllAtOnce ||
      t.imageDisplayMode === p.d.OneByOne
        ? t.imageDisplayMode
        : p.d.Default;
  }
}
export function E(e) {
  let t;
  const i = s.DMLAigcData.build(JSON.stringify(e));
  const n = u.o(e, d.Cb);
  if ((t = n.itemList) != null) {
    t.forEach((e) => {
      var t;
      var i;
      if (e.aigcDraft) {
        e.aigcDraft.content =
          (i = e.aigcDraft.content || n.draftContent) != null ? i : "";
      }
      e.aigcDraftResources =
        (t = e.aigcDraftResources) != null ? t : n.resources;
    });
  }
  return new q(i, n);
}
