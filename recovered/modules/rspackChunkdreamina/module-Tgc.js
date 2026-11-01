import r from "NY";
import a from "h28";
import n from "M8X";
import o from "K8";
import s from "ptR";
import { E } from "./module-FI.js";
import { r as r_1 } from "./module-Qa1.js";
import u from "gu";
import { D } from "./module-Ook.js";
import m from "nss";
import g from "EQa";
import h from "uy2";
import p from "Svm";
import v from "UH9";
import I from "hP";
import _ from "GS";
export function W(e, t, i) {
  let f;
  const { materials, commercialText } = i;
  f = [];
  materials.forEach((t) => {
    if (t.materialType === "image") {
      var { imageInfo } = t;
      if (imageInfo) {
        f.push(() =>
          r._(function* () {
            t.imageInfo = yield g.Y(e, imageInfo);
          })(),
        );
      }
    } else if (t.materialType === "video") {
      var { videoInfo } = t;
      if (videoInfo) {
        f.push(() =>
          r._(function* () {
            t.videoInfo = yield h.E(e, videoInfo);
          })(),
        );
      }
    } else if (t.materialType === "audio") {
      var { audioInfo } = t;
      if (audioInfo) {
        f.push(() =>
          r._(function* () {
            t.audioInfo = yield p.Z(e, audioInfo);
          })(),
        );
      }
    }
  });
  const k = f;
  const modelConfig = ((e, t) => {
    let i;
    if (t) {
      if ((i = n.cQ(e, m.Y).getInstanceSync()) == null) {
        return undefined;
      }
      return i.getAudioModelConfig(t);
    }
  })(e, t.input.modelReqKey);
  const C = a.h(commercialText);
  return {
    options: {
      processInputParamsConverter: () =>
        r._(function* () {
          if (k.length > 0) {
            yield Promise.all(k.map((e) => e()));
          }
          return o.TZ(new s.l(t).convert());
        })(),
      submitQueryParams: {
        babiParam: _.OC({
          scenario: "audio_generation",
          featureKey: "text_to_speech",
          featureEntranceDetail: "".concat(v.F(), "-text_to_speech"),
          editType: "tool",
          toolId: I.M.AudioGeneration,
        }),
      },
      generatorCommerceManager: e.createInstance(E, {
        sceneOptions: r_1({
          scene: u.Sk.AudioTTSGenerate,
          audioDuration: C,
          modelReqKey: t.input.modelReqKey,
          benefitAmount: D({
            modelConfig,
            chargeUnits: C,
          }),
        }),
        submitId: t.submitId,
      }),
    },
    modelConfig,
  };
}
