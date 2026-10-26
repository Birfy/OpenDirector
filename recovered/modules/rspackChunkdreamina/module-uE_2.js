import r from "NY";
import a from "oa";
import n from "bk";
import o from "qa";
import s from "Ut";
import d from "K8";
import l from "JSz";
import u from "grV";
import c from "tq";
import { E as E_1 } from "./module-FI.js";
import g from "j6i";
import h from "gu";
import p from "GUP";
import v from "Nux";
import I from "k1J";
import _ from "P2s";
import { X } from "./module-MGT.js";
import { X as X_1 } from "./module-FZt.js";
import { C as C_1 } from "./module-zFO.js";
import k from "mL";
import S from "M8X";
import C from "jp";
import M from "yMd";
import T from "hE";
import A from "ELo";
const R = [C_1];
export function Y(e, t) {
  let i;
  let y;
  const P = I.W();
  const D = n._(a._({}, P), {
    mode: (i = t.mode) != null ? i : s.DAAIGCMode.workbench,
    sampleStrength: v.Vx,
  });
  const { isRegenerate } = t;
  const G = o._(t, ["isRegenerate"]);
  const x = n._(a._({}, G, D), {
    sampleStrength: v.Vx,
  });
  if (x.conversationId) {
    x.turnId = l.bz();
  }
  Object.assign(
    x,
    _.r(e, {
      metricsExtra: t.metricsExtra,
      isRegenerate: false,
      submitId: P.submitId,
      input: x,
    }),
  );
  return e.createInstance(X, {
    mockDataCreator: () => {
      var agentOptData;
      var i;
      var imageRatio;
      i = S.cQ(e, A.B);
      if (x.conversationId && x.turnId) {
        agentOptData = {
          conversationId: x.conversationId,
          turnId: x.turnId,
        };
      }
      imageRatio = C.B(x.largeImageInfo);
      return n._(
        a._(
          {},
          T.l({
            submitId: x.submitId,
            generateType: M.ce.GuiEditText,
          }),
        ),
        {
          prompt: x.prompt,
          blendImageInfo: k.A(x.abilityList),
          modelInfo: i.getImageModelConfig(x.model),
          imageRatio,
          text2imageParams: {
            largeImageInfo: x.largeImageInfo,
            isIntelligentAspectRatio: x.isIntelligentAspectRatio,
          },
          metricsExtra: x.metricsExtra,
          isDraftGen: true,
          agentOptData,
          totalImageCount: 1,
        },
      );
    },
    processInputParamsConverter: () =>
      r._(function* () {
        for (let t = 0; t < x.abilityList.length; t++) {
          for (const i of R) {
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
        return d.TZ(new u.h(x).convert());
      })(),
    submitQueryParams: {
      babiParam: X_1({
        abilityList: x.abilityList,
        modelKey: x.model,
        templateId: (y = x.metricsExtra) == null ? undefined : y.templateId,
      }),
    },
    generatorCommerceManager: e.createInstance(E_1, {
      sceneOptions: g.O({
        scene: h.Sk.ImageBlend,
        abilityList: x.abilityList,
        modelReqKey: x.model,
        resolutionType: c.S(x.largeImageInfo.resolutionType),
        imageInputNum: p.m(x.abilityList),
        benefitCount: x.generateCount,
      }),
      submitId: x.submitId,
    }),
  });
}
