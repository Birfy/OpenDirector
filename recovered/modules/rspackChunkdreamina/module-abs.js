import r from "oa";
import a from "bk";
import n from "qa";
import o from "Ut";
import s from "K8";
import d from "JSz";
import l from "EBI";
import u from "Os";
import c from "eIy";
import m from "yMd";
import g from "tq";
import { E as E_1 } from "./module-FI.js";
import p from "j6i";
import v from "gu";
import I from "Nux";
import _ from "k1J";
import f from "P2s";
import { X } from "./module-MGT.js";
import { a as a_1 } from "./module-rm3.js";
import { W } from "./module-Wga.js";
import { z } from "./module-dEP.js";
import C from "UH9";
import M from "hP";
import T from "GS";
import R from "M8X";
import P from "jp";
import D from "hE";
import E from "T8M";
import G from "ELo";
function A(e) {
  let t;
  const templateId = (t = e.templateId) && t !== "0" ? t : undefined;
  return T.OC({
    scenario: "image_video_generation",
    featureKey: "aigc_to_image",
    featureEntranceDetail: "".concat(C.F(), "-").concat(e.modelKey),
    editType: templateId ? "template" : "tool",
    toolId: templateId ? M.M.TemplateImage : M.M.ToolImage,
    templateId,
    extraParams: {
      modelId: e.modelKey,
      generateType: e.generateType,
    },
  });
}
function x(e) {
  return (
    !!("action" in e && "originAigcData" in e) &&
    (e.action === u.f.Continue || e.action === u.f.Stop)
  );
}
function w(containerService, t) {
  let i;
  const s = _.W();
  const u = a._(r._({}, s), {
    seed: l.V(),
    mode: t.mode || o.DAAIGCMode.workbench,
  });
  if (t.isRegenerate) {
    const { targetAIGCData } = t;
    const { prompt, generateType, text2imageParams, modelInfo, agentOptData } =
      targetAIGCData;
    i = a._(
      r._(
        a._(r._({}, u), {
          prompt: prompt || "",
          generateType,
          largeImageInfo: {
            width: text2imageParams.largeImageInfo.width,
            height: text2imageParams.largeImageInfo.height,
            resolutionType: text2imageParams.largeImageInfo.resolutionType,
          },
          isIntelligentAspectRatio: text2imageParams.isIntelligentAspectRatio,
          model: (modelInfo == null ? undefined : modelInfo.modelReqKey) || "",
          negativePrompt: "",
          sampleStrength: text2imageParams.sampleStrength || I.Vx,
        }),
        W(text2imageParams),
      ),
      {
        isForceSingleGeneration: targetAIGCData.isForceSingleGeneration,
        infiniteCanvasExtend: t.infiniteCanvasExtend,
        workspaceId: t.workspaceId,
        generateCount: t.generateCount,
      },
    );
    if (agentOptData == null ? undefined : agentOptData.conversationId) {
      i.conversationId = agentOptData.conversationId;
    }
  } else {
    const { isRegenerate, metricsExtra } = t;
    const C = n._(t, ["isRegenerate", "metricsExtra"]);
    i = a._(r._({}, C, u), {
      submitId: x(t) ? t.submitId : u.submitId,
      sampleStrength: I.Vx,
    });
  }
  if (i.conversationId) {
    i.turnId = d.bz();
  }
  const M = f.r(containerService, {
    targetAIGCData: t.isRegenerate ? t.targetAIGCData : undefined,
    metricsExtra: t.isRegenerate ? undefined : t.metricsExtra,
    isRegenerate: t.isRegenerate,
    submitId: i.submitId,
    input: i,
  });
  Object.assign(i, M);
  const benefitCount = z({
    containerService,
    isRegenerate: t.isRegenerate,
    targetAIGCData: t.isRegenerate ? t.targetAIGCData : undefined,
    action: x(t) ? t.action : undefined,
    originAIGCData: x(t) ? t.originAigcData : undefined,
    modelReqKey: i.model,
    generateCount: i.generateCount,
  });
  return {
    realInput: i,
    benefitCount,
  };
}
export function OT(e, t) {
  const { realInput } = w(e, t);
  return {
    params: new c.T(realInput).convert(),
    queryParams: {
      babiParam: A({
        modelKey: realInput.model || "",
      }),
      webComponentOpenFlag:
        realInput.model === "external_model_gemini_flash_image_v25"
          ? "1"
          : undefined,
    },
  };
}
export function Pb(e, t) {
  let i;
  const { realInput, benefitCount } = w(e, t);
  const d = t.isPartial ? a_1 : X;
  return e.createInstance(d, {
    mockDataCreator: () => {
      var i;
      var agentOptData;
      var s;
      var submitId;
      var imageRatio;
      if (x(t)) {
        return t.originAigcData;
      }
      i = {
        generateType: m.ce.Text2Image,
      };
      s = R.cQ(e, G.B).getImageModelConfig(realInput.model);
      submitId = realInput.submitId;
      if (realInput.conversationId && realInput.turnId) {
        agentOptData = {
          conversationId: realInput.conversationId,
          turnId: realInput.turnId,
        };
      }
      imageRatio = P.B(realInput.largeImageInfo);
      return a._(
        r._(
          {},
          D.l({
            submitId,
            generateType: i.generateType,
            workspaceId: realInput.workspaceId,
          }),
        ),
        {
          prompt: realInput.prompt,
          modelInfo: s ? r._({}, s, E.b(s)) : undefined,
          imageRatio,
          text2imageParams: {
            largeImageInfo: realInput.largeImageInfo,
            isIntelligentAspectRatio: realInput.isIntelligentAspectRatio,
            quality: realInput.quality,
            background: realInput.background,
            stylize: realInput.stylize,
          },
          metricsExtra: realInput.metricsExtra,
          maxGenerateCount: realInput.generateCount,
          isDraftGen: true,
          agentOptData,
        },
      );
    },
    processInputParamsConverter: () => s.TZ(new c.T(realInput).convert()),
    submitQueryParams: {
      babiParam: A({
        modelKey: realInput.model || "",
        generateType: realInput.generateType
          ? String(realInput.generateType)
          : undefined,
        templateId:
          (i = realInput.metricsExtra) == null ? undefined : i.templateId,
      }),
      webComponentOpenFlag:
        realInput.model === "external_model_gemini_flash_image_v25"
          ? "1"
          : undefined,
    },
    generatorCommerceManager: e.createInstance(E_1, {
      sceneOptions: p.O({
        scene: v.Sk.ImageBasicGenerate,
        resolutionType: g.S(realInput.largeImageInfo.resolutionType),
        modelReqKey: realInput.model,
        imageInputNum: 0,
        benefitCount,
      }),
      submitId: realInput.submitId,
    }),
  });
}
