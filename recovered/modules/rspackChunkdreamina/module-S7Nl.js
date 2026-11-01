import r from "oa";
import a from "bk";
import n from "qa";
import o from "Po";
import s from "Ut";
import d from "K8";
import l from "bKg";
import u from "gu";
import { E } from "./module-FI.js";
import { G } from "./module-CKD.js";
import g from "fF";
import h from "Fw";
import p from "k1J";
import v from "Lii";
import I from "TTs";
import { w } from "./module-e2O.js";
import f from "UH9";
import b from "hP";
import y from "GS";
import k from "yMd";
import S from "hE";
import C from "T8M";
export function J(e, t) {
  const i = p.W();
  const M = a._(r._({}, i), {
    mode: (T = t.mode) != null ? T : s.DAAIGCMode.workbench,
  });
  if (t.isRegenerate) {
    var T;
    var input;
    let R;
    let P;
    let D;
    let E;
    let G;
    const { targetAIGCData } = t;
    const w =
      (R = targetAIGCData.instrumentalAbility) != null
        ? R
        : targetAIGCData.songAbility;
    const modelReqKey =
      (P =
        (G = targetAIGCData.songAbility) == null ? undefined : G.modelReqKey) !=
      null
        ? P
        : "";
    input = a._(r._({}, M), {
      isRegenerate: t.isRegenerate,
      draftContent: targetAIGCData.draftContent,
      workspaceId: t.workspaceId,
      input: {
        musicMode: h.n1.Song,
        prompt: (D = w == null ? undefined : w.prompt) != null ? D : "",
        duration: (E = w == null ? undefined : w.duration) != null ? E : 30,
        modelReqKey,
      },
    });
  } else {
    const { isRegenerate } = t;
    const j = n._(t, ["isRegenerate"]);
    input = r._({}, M, j);
  }
  o.A(
    input,
    v.y({
      targetMetricsExtra: t.isRegenerate
        ? t.targetAIGCData.metricsExtra
        : undefined,
      metricsExtra: t.isRegenerate ? undefined : t.metricsExtra,
      isRegenerate: t.isRegenerate,
      input,
    }),
  );
  const scene = t.isRegenerate
    ? u.Sk.MusicBasicReGenerate
    : u.Sk.MusicBasicGenerate;
  return e.createInstance(w, {
    mockDataCreator: () => {
      var t;
      var i;
      var songAbility;
      var o;
      t = input;
      i = I.q(e, input.input.modelReqKey);
      songAbility = new s.DAGenerateSongAbility();
      songAbility.prompt = t.input.prompt;
      songAbility.duration = t.input.duration;
      songAbility.modelReqKey = t.input.modelReqKey;
      songAbility.tags = [];
      o = S.l({
        submitId: t.submitId,
        generateType: k.ce.Text2Song,
        workspaceId: t.workspaceId,
      });
      return a._(r._({}, o), {
        idModel: a._(r._({}, o.idModel), {
          generateId: t.submitId,
        }),
        modelInfo: C.b(i),
        songAbility,
        metricsExtra: t.metricsExtra,
      });
    },
    processInputParamsConverter: () => d.TZ(new l.M(input).convert()),
    submitQueryParams: {
      babiParam: y.OC({
        scenario: "audio_generation",
        featureKey: "music_generation",
        featureEntranceDetail: "".concat(f.F(), "-music_generation"),
        editType: "tool",
        toolId: b.M.AudioGeneration,
      }),
    },
    generatorCommerceManager: e.createInstance(E, {
      sceneOptions: G({
        scene,
        modelReqKey: input.input.modelReqKey,
        audioDuration: input.input.duration,
        benefitAmount: g.Jl,
        isRegenerate: t.isRegenerate,
      }),
      submitId: input.submitId,
    }),
  });
}
