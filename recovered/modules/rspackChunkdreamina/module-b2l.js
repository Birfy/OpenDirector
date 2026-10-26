import n from "NY";
import o from "QWK";
import a from "K8";
import l from "Kt";
import r from "yF";
import d from "KC";
import u from "qN";
import s from "dR";
import g from "K6J";
import c from "fg";
import m from "fm";
import f from "b5";
import v from "iN";
import p from "cBI";
import h from "Fw";
import y from "oa";
import M from "bk";
import S from "qa";
import D from "H26";
import { l as l_1 } from "./module-OvZ.js";
import { A } from "./module-EGl.js";
import { DL, gS, hq } from "./module-H8.js";
const _ = Object.values(h.n1);
class C {
  get _networkClient() {
    let e;
    let i;
    if (!this._networkClientInstance) {
      this._networkClientInstance =
        ((e = this._containerService),
        (i = new d.LL().build({
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        })),
        p.U(e, i),
        u.Wh(i),
        s.vo(i),
        r.P(i),
        g.U(i),
        i);
    }
    return this._networkClientInstance;
  }
  fetchAudioModelConfig() {
    return n
      ._(function* () {
        const e =
          arguments.length > 0 && arguments[0] !== undefined
            ? arguments[0]
            : {};
        try {
          const { needCache = true, needRefresh, sceneList = _ } = e;
          const o = yield this._networkClient.post(
            this._getUrl("/mweb/v1/audio_generate/get_common_config"),
            c.w({
              sceneList,
            }),
            {
              params: {
                needCache,
                needRefresh,
              },
            },
          );
          const l = c.o(o.data, m.Cb);
          return a.TZ(l);
        } catch (error) {
          return f.r(error);
        }
      })
      .apply(this, arguments);
  }
  _getUrl(path) {
    return this._httpApiSettingService.getRequestURL({
      domainType: v.X.DEFAULT,
      path,
    });
  }
  constructor(e, i) {
    this._containerService = e;
    this._httpApiSettingService = i;
  }
}
C = o.Cg(
  [
    o.Qj(0, l._),
    o.Qj(1, v.r),
    o.Sn("design:type", Function),
    o.Sn("design:paramtypes", [
      l._ === undefined ? Object : l._,
      v.r === undefined ? Object : v.r,
    ]),
  ],
  C,
);
const T = new Set(Object.values(hq));
const k = {
  resourceId: "",
  resourceIdType: "",
  resourceSubType: "",
  benefitType: "",
};
const R = Object.values(h.n1);
function V(e) {
  return e.flatMap((e) => {
    var i = l_1("", e);
    if (i.trim()) {
      return [i];
    }
    return [];
  });
}
function I(e, i) {
  if (typeof e !== "number") {
    return i;
  }
  return Math.round(e / D.K);
}
function L(e) {
  return T.has(e);
}
function U(e) {
  let i;
  let t;
  return {
    defaultStarlingKeys:
      (i = e == null ? undefined : e.default) != null ? i : [],
    withReferenceStarlingKeys:
      (t = e == null ? undefined : e.withReference) != null ? t : [],
  };
}
export class Y {
  fetchAudioModelConfig(e) {
    return n
      ._(function* () {
        const i = yield this._repository.fetchAudioModelConfig(e);
        if (i.ok) {
          return a.TZ(
            ((e) => {
              const i = {};
              for (const t of R) {
                const n = e[t];
                if (n) {
                  i[t] = ((e, i) => {
                    let t;
                    let n;
                    let o;
                    let a;
                    let l;
                    let r;
                    let d;
                    let u;
                    let s;
                    const g =
                      (l = e.modelList) == null
                        ? undefined
                        : l[e.defaultModelIdx];
                    const c =
                      (t =
                        (r = e.modelList) == null
                          ? undefined
                          : r.filter((e) => {
                              var i;
                              return (
                                ((i = e.modelStatus) != null
                                  ? i
                                  : h.WO.Online) === h.WO.Online
                              );
                            })) != null
                        ? t
                        : [];
                    return {
                      defaultModelKey:
                        (n =
                          (o =
                            (d = c.find(
                              (e) =>
                                e.modelReqKey ===
                                (g == null ? undefined : g.modelReqKey),
                            )) == null
                              ? undefined
                              : d.modelReqKey) != null
                            ? o
                            : (u = c[0]) == null
                              ? undefined
                              : u.modelReqKey) != null
                          ? n
                          : "",
                      promptPlaceholders:
                        i !== h.n1.Song ||
                        ((s = e.bgPromptStarlingKeyList) == null
                          ? undefined
                          : s.length)
                          ? V((a = e.bgPromptStarlingKeyList) != null ? a : [])
                          : V(["song_bg_prompt_placeholder"]),
                      modelList: c.map((e) => {
                        var i;
                        var t;
                        var n;
                        var o;
                        var a;
                        var l;
                        var r;
                        var d;
                        var u;
                        var s;
                        var g;
                        var c;
                        var f;
                        var v =
                          (g = e.options) == null
                            ? undefined
                            : g.find((e) => e.key === gS.DurationMs);
                        var p = v == null ? undefined : v.slideBarVal;
                        var _ = (s = e.extra) != null ? s : {};
                        var {
                          modelSource,
                          audioPlayMode,
                          complianceConfirmationGroupKey,
                        } = _;
                        var R = S._(_, [
                          "modelSource",
                          "audioPlayMode",
                          "complianceConfirmationGroupKey",
                        ]);
                        var extra = M._(y._({}, R), {
                          playMode:
                            audioPlayMode != null
                              ? audioPlayMode
                              : h.Wu.Generated,
                          complianceConfirmationGroupKey:
                            complianceConfirmationGroupKey
                              ? m.Cb(complianceConfirmationGroupKey)
                              : undefined,
                        });
                        return {
                          key: e.modelReqKey,
                          name:
                            l_1(e.modelName, e.modelNameStarlingKey) ||
                            e.modelReqKey,
                          description: l_1(e.modelTip, e.modelTipStarlingKey),
                          source: modelSource,
                          coverUrl:
                            (c = e.icon) == null ? undefined : c.imageUrl,
                          iconUrl:
                            (f = e.iconSvg) == null ? undefined : f.imageUrl,
                          iconTag: ((e) => {
                            if (e === "new" || e === "beta") {
                              return e;
                            }
                          })(e.iconTag),
                          duration: {
                            min: I(p == null ? undefined : p.min, 30),
                            max: I(p == null ? undefined : p.max, 360),
                          },
                          durationStep: I(p == null ? undefined : p.step, 1),
                          defaultDuration: I(
                            p == null ? undefined : p.default,
                            30,
                          ),
                          commercialConfig: ((e) => {
                            let i;
                            const t =
                              (i = e == null ? undefined : e.default) != null
                                ? i
                                : k;
                            const { billingMode } = e != null ? e : {};
                            if (billingMode) {
                              return M._(y._({}, t), {
                                billingMode,
                              });
                            }
                            return t;
                          })(e.commercialConfig),
                          generateModes: ((t =
                            (o =
                              (i = e.options) == null
                                ? undefined
                                : i.find(
                                    (e) => e.key === gS.AudioGenerateMode,
                                  )) == null || (n = o.enumVal) == null
                              ? undefined
                              : n.stringValue) != null
                            ? t
                            : []
                          ).filter(L),
                          omniDubbingConfig: ((e) => {
                            const i =
                              e == null
                                ? undefined
                                : e.find((e) => e.key === gS.OmniDubbing);
                            const t =
                              i == null ? undefined : i.omniDubbingConfig;
                            if (t == null ? undefined : t.unifiedEditConfig) {
                              return {
                                referenceLimits: A(t.unifiedEditConfig),
                                promptPlaceholderConfig: U(
                                  t.bgPromptStarlingKeyMap,
                                ),
                                maxPromptLength: t.maxPromptLength,
                              };
                            }
                          })(e.options),
                          videoTranslationConfig: ((e) => {
                            let i;
                            let t;
                            let n;
                            let o;
                            const a =
                              e == null
                                ? undefined
                                : e.find((e) => e.key === gS.VideoTranslation);
                            const l =
                              a == null ? undefined : a.videoTranslationConfig;
                            const r =
                              (o =
                                l == null ? undefined : l.unifiedEditConfig) !=
                              null
                                ? o
                                : a == null
                                  ? undefined
                                  : a.unifiedEditConfig;
                            const referenceLimits = r ? A(r) : undefined;
                            const targetLanguages = (
                              (i =
                                (n =
                                  e == null
                                    ? undefined
                                    : e.find(
                                        (e) =>
                                          e.key ===
                                          gS.VideoTranslationTargetLanguage,
                                      )) == null || (t = n.enumVal) == null
                                  ? undefined
                                  : t.structValue) != null
                                ? i
                                : []
                            ).flatMap((e) => {
                              if (e.sourceValue) {
                                return [
                                  {
                                    value: e.sourceValue,
                                    label: l_1(e.starlingValue, e.starlingKey),
                                  },
                                ];
                              }
                              return [];
                            });
                            if (
                              referenceLimits ||
                              targetLanguages.length !== 0
                            ) {
                              return M._(
                                y._(
                                  {},
                                  referenceLimits
                                    ? {
                                        referenceLimits,
                                      }
                                    : null,
                                ),
                                {
                                  targetLanguages,
                                  promptPlaceholderConfig: U(
                                    l == null
                                      ? undefined
                                      : l.bgPromptStarlingKeyMap,
                                  ),
                                },
                              );
                            }
                          })(e.options),
                          audioSeparationConfig: ((e) => {
                            let i;
                            const t =
                              e == null
                                ? undefined
                                : e.find((e) => e.key === gS.AudioSeparation);
                            if (t) {
                              const n = t.audioSeparationConfig;
                              return {
                                referenceLimits: A(
                                  (i =
                                    n == null
                                      ? undefined
                                      : n.unifiedEditConfig) != null
                                    ? i
                                    : t.unifiedEditConfig,
                                ),
                                promptPlaceholderConfig: U(
                                  n == null
                                    ? undefined
                                    : n.bgPromptStarlingKeyMap,
                                ),
                                maxPromptLength:
                                  n == null ? undefined : n.maxPromptLength,
                              };
                            }
                          })(e.options),
                          textReadingConfig: ((e) => {
                            const i =
                              e == null
                                ? undefined
                                : e.find((e) => e.key === gS.TextReading);
                            const t = i == null ? undefined : i.ttsConfig;
                            if (
                              t == null ? undefined : t.bgPromptStarlingKeyMap
                            ) {
                              return {
                                promptPlaceholderConfig: U(
                                  t.bgPromptStarlingKeyMap,
                                ),
                                maxPromptLength: t.maxPromptLength,
                              };
                            }
                          })(e.options),
                          voiceConfig: {
                            isSpeedAdjustmentEnabled: (u = new Set(
                              (l =
                                (d =
                                  (a = e.options) == null
                                    ? undefined
                                    : a.find(
                                        (e) => e.key === gS.VoiceOption,
                                      )) == null || (r = d.enumVal) == null
                                  ? undefined
                                  : r.stringValue) != null
                                ? l
                                : [],
                            )).has(DL.Speed),
                            isEmotionSelectionEnabled: u.has(DL.Emotion),
                          },
                          extra,
                        };
                      }),
                    };
                  })(n, t);
                }
              }
              return i;
            })(i.value),
          );
        }
        return i;
      })
      .call(this);
  }
  constructor(e) {
    this._containerService = e;
    this._serviceBrand = undefined;
    this._repository = this._containerService.createInstance(C);
  }
}
Y = o.Cg(
  [
    o.Qj(0, l._),
    o.Sn("design:type", Function),
    o.Sn("design:paramtypes", [l._ === undefined ? Object : l._]),
  ],
  Y,
);
