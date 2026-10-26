import r from "NY";
import a from "oa";
import n from "bk";
import o from "qa";
import s from "Ut";
import d from "K8";
import l from "JSz";
import u from "SZS";
import c from "Os";
import m from "mLp";
import g from "tq";
import h from "lu4";
import { E as E_1 } from "./module-FI.js";
import v from "j6i";
import I from "gu";
import _ from "GUP";
import f from "Nux";
import b from "k1J";
import y from "P2s";
import { X } from "./module-MGT.js";
import { a as a_1 } from "./module-rm3.js";
import { X as X_1 } from "./module-FZt.js";
import M from "mL";
import T from "M8X";
import A from "jp";
import R from "yMd";
import P from "hE";
import D from "ELo";
const E = [require("./module-zFO.js").C];
export function H(e, t) {
  let i;
  let G;
  let x;
  const w = b.W();
  const O = n._(a._({}, w), {
    mode: (i = t.mode) != null ? i : s.DAAIGCMode.workbench,
    sampleStrength: f.Vx,
  });
  if (t.isRegenerate) {
    const { targetAIGCData } = t;
    const {
      prompt,
      text2imageParams,
      modelInfo,
      blendImageInfo,
      agentOptData,
      totalImageCount,
    } = targetAIGCData;
    x = n._(a._({}, O), {
      prompt: prompt || "",
      largeImageInfo: {
        width: text2imageParams.largeImageInfo.width,
        height: text2imageParams.largeImageInfo.height,
        resolutionType: text2imageParams.largeImageInfo.resolutionType,
      },
      isIntelligentAspectRatio: text2imageParams.isIntelligentAspectRatio,
      model: (modelInfo == null ? undefined : modelInfo.modelReqKey) || "",
      abilityList: blendImageInfo != null ? blendImageInfo : [],
      sampleStrength: text2imageParams.sampleStrength || f.Vx,
      generateCount:
        totalImageCount != null
          ? totalImageCount
          : h.C({
              feats: modelInfo == null ? undefined : modelInfo.feats,
              generateCount: u.qV,
            }),
      workspaceId: t.workspaceId,
    });
    if (agentOptData == null ? undefined : agentOptData.conversationId) {
      x.conversationId = agentOptData.conversationId;
    }
  } else {
    const { isRegenerate } = t;
    const N = o._(t, ["isRegenerate"]);
    x = n._(a._({}, N, O), {
      sampleStrength: f.Vx,
    });
  }
  if (x.conversationId) {
    x.turnId = l.bz();
  }
  Object.assign(
    x,
    y.r(e, {
      targetAIGCData: t.isRegenerate ? t.targetAIGCData : undefined,
      metricsExtra: t.isRegenerate ? undefined : t.metricsExtra,
      isRegenerate: t.isRegenerate,
      submitId: w.submitId,
      input: x,
    }),
  );
  const W = t.isPartial ? a_1 : X;
  return e.createInstance(W, {
    mockDataCreator: () => {
      var i;
      var agentOptData;
      var o;
      var imageRatio;
      if (
        "action" in t &&
        "originAigcData" in t &&
        (t.action === c.f.Continue || t.action === c.f.Stop)
      ) {
        return t.originAigcData;
      }
      i = x;
      o = T.cQ(e, D.B);
      if (i.conversationId && i.turnId) {
        agentOptData = {
          conversationId: i.conversationId,
          turnId: i.turnId,
        };
      }
      imageRatio = A.B(i.largeImageInfo);
      return n._(
        a._(
          {},
          P.l({
            submitId: i.submitId,
            generateType: R.ce.Fusion,
            workspaceId: i.workspaceId,
          }),
        ),
        {
          prompt: i.prompt,
          blendImageInfo: M.A(i.abilityList),
          modelInfo: o.getImageModelConfig(i.model),
          imageRatio,
          text2imageParams: {
            largeImageInfo: i.largeImageInfo,
            isIntelligentAspectRatio: i.isIntelligentAspectRatio,
          },
          metricsExtra: i.metricsExtra,
          isDraftGen: true,
          agentOptData,
        },
      );
    },
    processInputParamsConverter: () =>
      r._(function* () {
        for (let t = 0; t < x.abilityList.length; t++) {
          for (const i of E) {
            const ability = x.abilityList[t];
            const a = yield e
              .createInstance(i, {
                ability,
                inputParams: x,
              })
              .process();
            if (!a.ok) {
              return a;
            }
            x.abilityList[t] = a.value;
          }
        }
        return d.TZ(new m.p(x).convert());
      })(),
    submitQueryParams: {
      babiParam: X_1({
        abilityList: x.abilityList,
        modelKey: x.model,
        templateId: (G = x.metricsExtra) == null ? undefined : G.templateId,
      }),
      webComponentOpenFlag:
        x.model === "external_model_gemini_flash_image_v25" ? "1" : undefined,
    },
    generatorCommerceManager: e.createInstance(E_1, {
      sceneOptions: v.O({
        scene: I.Sk.ImageBlend,
        abilityList: x.abilityList,
        modelReqKey: x.model,
        resolutionType: g.S(x.largeImageInfo.resolutionType),
        imageInputNum: _.m(x.abilityList),
        benefitCount: x.generateCount,
      }),
      submitId: x.submitId,
    }),
  });
}
