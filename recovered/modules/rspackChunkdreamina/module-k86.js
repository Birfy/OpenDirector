import r from "oa";
import a from "bk";
import n from "qa";
import o from "Po";
import s from "Ut";
import d from "ad";
import l from "Lii";
import u from "k1J";
import { w } from "./module-e2O.js";
import m from "U1t";
import g from "yMd";
import h from "hE";
import p from "T8M";
import v from "pyg";
import { W } from "./module-Tgc.js";
function _(e, t) {
  const i = ((e) => {
    let t;
    let input;
    const c = u.W();
    const m = a._(r._({}, c), {
      mode: (t = e.mode) != null ? t : s.DAAIGCMode.workbench,
    });
    if (e.isRegenerate) {
      input = a._(r._({}, m), {
        isRegenerate: true,
        draftContent: e.targetAIGCData.draftContent,
        workspaceId: e.workspaceId,
        input: ((e) => {
          const e_textToSpeechAbility = e.textToSpeechAbility;
          if (!e_textToSpeechAbility) {
            throw Error(
              "history record is missing audio generation parameters",
            );
          }
          if (e_textToSpeechAbility.mode === s.DAGenerateTTSMode.UnifiedEdit) {
            return {
              ttsMode: s.DAGenerateTTSMode.UnifiedEdit,
              modelReqKey: e_textToSpeechAbility.modelReqKey,
              unifiedEditInput:
                (i =
                  (n = e.unifiedEditInput) != null
                    ? n
                    : d.oy(
                        e_textToSpeechAbility.unifiedEditInput,
                        e.resources,
                      )) != null
                  ? i
                  : {
                      materialList: [],
                      metaList: [],
                    },
            };
          }
          if (
            e_textToSpeechAbility.mode === s.DAGenerateTTSMode.AudioSeparation
          ) {
            var i;
            var n;
            let o;
            const l = e_textToSpeechAbility.audioSeparationParam;
            const u = d.F9(
              l == null ? undefined : l.sourceMaterial,
              e.resources,
            );
            if (!(l == null || (o = l.prompt) == null ? undefined : o.trim())) {
              throw Error(
                "history record is missing the audio separation prompt",
              );
            }
            const c = {
              ttsMode: s.DAGenerateTTSMode.AudioSeparation,
              modelReqKey: e_textToSpeechAbility.modelReqKey,
              prompt: l.prompt,
            };
            if (
              (u == null ? undefined : u.materialType) === "video" &&
              u.videoInfo
            ) {
              return a._(r._({}, c), {
                sourceMaterial: {
                  materialType: "video",
                  videoInfo: u.videoInfo,
                },
              });
            }
            if (
              (u == null ? undefined : u.materialType) === "audio" &&
              u.audioInfo
            ) {
              return a._(r._({}, c), {
                sourceMaterial: {
                  materialType: "audio",
                  audioInfo: u.audioInfo,
                },
              });
            }
            throw Error(
              "history record is missing the audio separation source material",
            );
          }
          if (e_textToSpeechAbility.mode !== s.DAGenerateTTSMode.TTS) {
            throw Error("unsupported audio generation mode in history record");
          }
          const {
            text,
            idInfo = new s.DAIdInfo(),
            audioConfig = new s.DAAudioConfig(),
            voiceName,
          } = e_textToSpeechAbility;
          return {
            ttsMode: s.DAGenerateTTSMode.TTS,
            modelReqKey: e_textToSpeechAbility.modelReqKey,
            text,
            idInfo,
            audioConfig,
            voiceName,
          };
        })(e.targetAIGCData),
      });
    } else {
      const { isRegenerate } = e;
      const h = n._(e, ["isRegenerate"]);
      input = r._({}, m, h);
    }
    o.A(
      input,
      l.y({
        targetMetricsExtra: e.isRegenerate
          ? e.targetAIGCData.metricsExtra
          : undefined,
        metricsExtra: e.isRegenerate ? undefined : e.metricsExtra,
        isRegenerate: e.isRegenerate,
        input,
      }),
    );
    return input;
  })(t);
  const { options, modelConfig } = W(e, i, {
    materials: ((e) => {
      switch (e.ttsMode) {
        case s.DAGenerateTTSMode.UnifiedEdit:
          return e.unifiedEditInput.materialList;
        case s.DAGenerateTTSMode.AudioSeparation:
          return [e.sourceMaterial];
        case s.DAGenerateTTSMode.TTS:
          return [];
      }
    })(i.input),
    commercialText: ((e) => {
      switch (e.ttsMode) {
        case s.DAGenerateTTSMode.UnifiedEdit:
          let t;
          if ((t = v.y(e.unifiedEditInput)) != null) {
            return t;
          }
          return "";
        case s.DAGenerateTTSMode.TTS:
          return e.text;
        case s.DAGenerateTTSMode.AudioSeparation:
          return e.prompt;
      }
    })(i.input),
  });
  const b = ((e, t) => {
    const { input } = e;
    const textToSpeechAbility = m.L(input);
    return a._(
      r._(
        {},
        h.l({
          submitId: e.submitId,
          generateType: g.ce.TTSGenerateAudio,
          workspaceId: e.workspaceId,
        }),
      ),
      {
        textToSpeechAbility,
        unifiedEditInput:
          input.ttsMode === s.DAGenerateTTSMode.UnifiedEdit
            ? input.unifiedEditInput
            : undefined,
        sourceMaterial:
          input.ttsMode === s.DAGenerateTTSMode.AudioSeparation
            ? input.sourceMaterial
            : undefined,
        metricsExtra: e.metricsExtra,
        modelInfo: p.b(t),
        prompt:
          input.ttsMode === s.DAGenerateTTSMode.AudioSeparation
            ? input.prompt
            : textToSpeechAbility.text,
      },
    );
  })(i, modelConfig);
  return e.createInstance(
    w,
    a._(r._({}, options), {
      mockDataCreator: () => b,
    }),
  );
}
export function v8(e, t) {
  return _(
    e,
    a._(r._({}, t), {
      input: a._(r._({}, t.input), {
        ttsMode: s.DAGenerateTTSMode.TTS,
      }),
    }),
  );
}
export function iA(e, t) {
  return _(
    e,
    a._(r._({}, t), {
      input: a._(r._({}, t.input), {
        ttsMode: s.DAGenerateTTSMode.UnifiedEdit,
      }),
    }),
  );
}
export function AP(e, t) {
  return _(
    e,
    a._(r._({}, t), {
      input: a._(r._({}, t.input), {
        ttsMode: s.DAGenerateTTSMode.AudioSeparation,
      }),
    }),
  );
}
export function AZ(e, t) {
  return _(e, t);
}
