import r from "oa";
import a from "bk";
import n from "qa";
import o from "Po";
import s from "Ut";
import d from "ad";
import l from "Lii";
import u from "k1J";
import { T } from "./module-PXv.js";
import m from "pyg";
import { W } from "./module-Tgc.js";
import h from "U1t";
import p from "yMd";
import v from "hE";
function I(e, t) {
  const i = ((e) => {
    let t;
    let i;
    let input;
    const m = u.W();
    const g = a._(r._({}, m), {
      mode: (t = e.mode) != null ? t : s.DAAIGCMode.workbench,
    });
    if (e.isRegenerate) {
      input = a._(r._({}, g), {
        isRegenerate: true,
        draftContent: e.targetAIGCData.draftContent,
        workspaceId: e.workspaceId,
        input: ((e) => {
          let t;
          let i;
          const e_videoDubbingInfo = e.videoDubbingInfo;
          const a =
            e_videoDubbingInfo == null
              ? undefined
              : e_videoDubbingInfo.textToSpeechAbility;
          if (!a) {
            throw Error("history record is missing video dubbing parameters");
          }
          if (a.mode === s.DAGenerateTTSMode.UnifiedEdit) {
            return {
              ttsMode: s.DAGenerateTTSMode.UnifiedEdit,
              modelReqKey: a.modelReqKey,
              unifiedEditInput:
                (t =
                  (i = e_videoDubbingInfo.unifiedEditInput) != null
                    ? i
                    : d.oy(a.unifiedEditInput, e_videoDubbingInfo.resources)) !=
                null
                  ? t
                  : {
                      materialList: [],
                      metaList: [],
                    },
            };
          }
          if (a.mode === s.DAGenerateTTSMode.VideoTranslation) {
            const n = a.videoTranslationParam;
            if (!n) {
              throw Error(
                "history record is missing video translation parameters",
              );
            }
            if (!n.targetLanguage.trim()) {
              throw Error(
                "history record is missing the video translation target language",
              );
            }
            const o = d.F9(n.sourceMaterial, e_videoDubbingInfo.resources);
            if (
              (o == null ? undefined : o.materialType) !== "video" ||
              !o.videoInfo
            ) {
              throw Error(
                "history record is missing the video translation source video",
              );
            }
            return {
              ttsMode: s.DAGenerateTTSMode.VideoTranslation,
              modelReqKey: a.modelReqKey,
              targetLanguage: n.targetLanguage,
              sourceMaterial: {
                materialType: "video",
                videoInfo: o.videoInfo,
              },
            };
          }
          throw Error("unsupported video dubbing mode in history record");
        })(e.targetAIGCData),
      });
    } else {
      const { isRegenerate } = e;
      const p = n._(e, ["isRegenerate"]);
      input = r._({}, g, p);
    }
    o.A(
      input,
      l.y({
        targetMetricsExtra: e.isRegenerate
          ? (i = e.targetAIGCData.videoDubbingInfo) == null
            ? undefined
            : i.metricsExtra
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
        case s.DAGenerateTTSMode.VideoTranslation:
          return [e.sourceMaterial];
      }
    })(i.input),
    commercialText: ((e) => {
      switch (e.ttsMode) {
        case s.DAGenerateTTSMode.UnifiedEdit:
          let t;
          if ((t = m.y(e.unifiedEditInput)) != null) {
            return t;
          }
          return "";
        case s.DAGenerateTTSMode.VideoTranslation:
          return "";
      }
    })(i.input),
  });
  const f = ((e, t) => {
    let i;
    let n;
    let o;
    let d;
    let l;
    const { input } = e;
    const textToSpeechAbility = h.L(input);
    const unifiedEditInput =
      input.ttsMode === s.DAGenerateTTSMode.UnifiedEdit
        ? input.unifiedEditInput
        : undefined;
    const I =
      unifiedEditInput == null ||
      (d = unifiedEditInput.materialList.find(
        (e) => e.materialType === "video",
      )) == null
        ? undefined
        : d.videoInfo;
    return a._(
      r._(
        {},
        v.l({
          submitId: e.submitId,
          generateType: p.ce.VideoDubbing,
          workspaceId: e.workspaceId,
        }),
      ),
      {
        videoDubbingInfo: {
          textToSpeechAbility,
          unifiedEditInput,
          sourceMaterial:
            input.ttsMode === s.DAGenerateTTSMode.VideoTranslation
              ? input.sourceMaterial
              : undefined,
          metricsExtra: e.metricsExtra,
        },
        videoModelConfig: t
          ? {
              modelReqKey: t.key,
              modelName: t.name,
            }
          : undefined,
        processFlows: [],
        video: undefined,
        originVideo: undefined,
        lastProcessFlow: undefined,
        item: undefined,
        videoDuration: (i = I == null ? undefined : I.duration) != null ? i : 0,
        prompt: (n = m.y(unifiedEditInput)) != null ? n : "",
        taskExtra: a._(r._({}, e.metricsExtra), {
          enterFrom:
            (o = (l = e.metricsExtra) == null ? undefined : l.enterFrom) != null
              ? o
              : "click",
        }),
      },
    );
  })(i, modelConfig);
  return e.createInstance(
    T,
    a._(r._({}, options), {
      mockDataCreator: () => f,
    }),
  );
}
export function rw(e, t) {
  return I(
    e,
    a._(r._({}, t), {
      input: a._(r._({}, t.input), {
        ttsMode: s.DAGenerateTTSMode.UnifiedEdit,
      }),
    }),
  );
}
export function iV(e, t) {
  return I(
    e,
    a._(r._({}, t), {
      input: a._(r._({}, t.input), {
        ttsMode: s.DAGenerateTTSMode.VideoTranslation,
      }),
    }),
  );
}
export function qL(e, t) {
  return I(e, t);
}
