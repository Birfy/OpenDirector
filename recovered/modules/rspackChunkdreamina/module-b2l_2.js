import a from "NY";
import r from "QWK";
import i from "K8";
import o from "Kt";
import l from "yF";
import s from "KC";
import c from "qN";
import u from "dR";
import d from "K6J";
import m from "fg";
import p from "fm";
import v from "b5";
import h from "iN";
import g from "cBI";
import f from "Fw";
import y from "oa";
import x from "bk";
import k from "qa";
import C from "H26";
import { l as l_1 } from "./module-OvZ_2.js";
import { A as A_1 } from "./module-EGl_2.js";
import { DL, gS, hq } from "./module-H8_2.js";
const b = Object.values(f.n1);
class _ {
  get _networkClient() {
    let e;
    let t;
    if (!this._networkClientInstance) {
      this._networkClientInstance =
        ((e = this._containerService),
        (t = new s.LL().build({
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        })),
        g.U(e, t),
        c.Wh(t),
        u.vo(t),
        l.P(t),
        d.U(t),
        t);
    }
    return this._networkClientInstance;
  }
  fetchAudioModelConfig() {
    return a
      ._(function* () {
        const e =
          arguments.length > 0 && arguments[0] !== undefined
            ? arguments[0]
            : {};
        try {
          const { needCache = true, needRefresh, sceneList = b } = e;
          const r = yield this._networkClient.post(
            this._getUrl("/mweb/v1/audio_generate/get_common_config"),
            m.w({
              sceneList,
            }),
            {
              params: {
                needCache,
                needRefresh,
              },
            },
          );
          const o = m.o(r.data, p.Cb);
          return i.TZ(o);
        } catch (error) {
          return v.r(error);
        }
      })
      .apply(this, arguments);
  }
  _getUrl(path) {
    return this._httpApiSettingService.getRequestURL({
      domainType: h.X.DEFAULT,
      path,
    });
  }
  constructor(e, t) {
    this._containerService = e;
    this._httpApiSettingService = t;
  }
}
_ = r.Cg(
  [
    r.Qj(0, o._),
    r.Qj(1, h.r),
    r.Sn("design:type", Function),
    r.Sn("design:paramtypes", [
      o._ === undefined ? Object : o._,
      h.r === undefined ? Object : h.r,
    ]),
  ],
  _,
);
const T = new Set(Object.values(hq));
const N = {
  resourceId: "",
  resourceIdType: "",
  resourceSubType: "",
  benefitType: "",
};
const R = Object.values(f.n1);
function A(e) {
  return e.flatMap((e) => {
    var t = l_1("", e);
    if (t.trim()) {
      return [t];
    }
    return [];
  });
}
function S(e, t) {
  if (typeof e !== "number") {
    return t;
  }
  return Math.round(e / C.K);
}
function F(e) {
  return T.has(e);
}
function W(e) {
  let t;
  let n;
  return {
    defaultStarlingKeys:
      (t = e == null ? undefined : e.default) != null ? t : [],
    withReferenceStarlingKeys:
      (n = e == null ? undefined : e.withReference) != null ? n : [],
  };
}
export class Y {
  fetchAudioModelConfig(e) {
    return a
      ._(function* () {
        const t = yield this._repository.fetchAudioModelConfig(e);
        if (t.ok) {
          return i.TZ(
            ((e) => {
              const t = {};
              for (const n of R) {
                const a = e[n];
                if (a) {
                  t[n] = ((e, t) => {
                    let n;
                    let a;
                    let r;
                    let i;
                    let o;
                    let l;
                    let s;
                    let c;
                    let u;
                    const d =
                      (o = e.modelList) == null
                        ? undefined
                        : o[e.defaultModelIdx];
                    const m =
                      (n =
                        (l = e.modelList) == null
                          ? undefined
                          : l.filter((e) => {
                              var t;
                              return (
                                ((t = e.modelStatus) != null
                                  ? t
                                  : f.WO.Online) === f.WO.Online
                              );
                            })) != null
                        ? n
                        : [];
                    return {
                      defaultModelKey:
                        (a =
                          (r =
                            (s = m.find(
                              (e) =>
                                e.modelReqKey ===
                                (d == null ? undefined : d.modelReqKey),
                            )) == null
                              ? undefined
                              : s.modelReqKey) != null
                            ? r
                            : (c = m[0]) == null
                              ? undefined
                              : c.modelReqKey) != null
                          ? a
                          : "",
                      promptPlaceholders:
                        t !== f.n1.Song ||
                        ((u = e.bgPromptStarlingKeyList) == null
                          ? undefined
                          : u.length)
                          ? A((i = e.bgPromptStarlingKeyList) != null ? i : [])
                          : A(["song_bg_prompt_placeholder"]),
                      modelList: m.map((e) => {
                        var t;
                        var n;
                        var a;
                        var r;
                        var i;
                        var o;
                        var l;
                        var s;
                        var c;
                        var u;
                        var d;
                        var m;
                        var v;
                        var h =
                          (d = e.options) == null
                            ? undefined
                            : d.find((e) => e.key === gS.DurationMs);
                        var g = h == null ? undefined : h.slideBarVal;
                        var b = (u = e.extra) != null ? u : {};
                        var {
                          modelSource,
                          audioPlayMode,
                          complianceConfirmationGroupKey,
                        } = b;
                        var R = k._(b, [
                          "modelSource",
                          "audioPlayMode",
                          "complianceConfirmationGroupKey",
                        ]);
                        var extra = x._(y._({}, R), {
                          playMode:
                            audioPlayMode != null
                              ? audioPlayMode
                              : f.Wu.Generated,
                          complianceConfirmationGroupKey:
                            complianceConfirmationGroupKey
                              ? p.Cb(complianceConfirmationGroupKey)
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
                            (m = e.icon) == null ? undefined : m.imageUrl,
                          iconUrl:
                            (v = e.iconSvg) == null ? undefined : v.imageUrl,
                          iconTag: ((e) => {
                            if (e === "new" || e === "beta") {
                              return e;
                            }
                          })(e.iconTag),
                          duration: {
                            min: S(g == null ? undefined : g.min, 30),
                            max: S(g == null ? undefined : g.max, 360),
                          },
                          durationStep: S(g == null ? undefined : g.step, 1),
                          defaultDuration: S(
                            g == null ? undefined : g.default,
                            30,
                          ),
                          commercialConfig: ((e) => {
                            let t;
                            const n =
                              (t = e == null ? undefined : e.default) != null
                                ? t
                                : N;
                            const { billingMode } = e != null ? e : {};
                            if (billingMode) {
                              return x._(y._({}, n), {
                                billingMode,
                              });
                            }
                            return n;
                          })(e.commercialConfig),
                          generateModes: ((n =
                            (r =
                              (t = e.options) == null
                                ? undefined
                                : t.find(
                                    (e) => e.key === gS.AudioGenerateMode,
                                  )) == null || (a = r.enumVal) == null
                              ? undefined
                              : a.stringValue) != null
                            ? n
                            : []
                          ).filter(F),
                          omniDubbingConfig: ((e) => {
                            const t =
                              e == null
                                ? undefined
                                : e.find((e) => e.key === gS.OmniDubbing);
                            const n =
                              t == null ? undefined : t.omniDubbingConfig;
                            if (n == null ? undefined : n.unifiedEditConfig) {
                              return {
                                referenceLimits: A_1(n.unifiedEditConfig),
                                promptPlaceholderConfig: W(
                                  n.bgPromptStarlingKeyMap,
                                ),
                                maxPromptLength: n.maxPromptLength,
                              };
                            }
                          })(e.options),
                          videoTranslationConfig: ((e) => {
                            let t;
                            let n;
                            let a;
                            let r;
                            const i =
                              e == null
                                ? undefined
                                : e.find((e) => e.key === gS.VideoTranslation);
                            const o =
                              i == null ? undefined : i.videoTranslationConfig;
                            const l =
                              (r =
                                o == null ? undefined : o.unifiedEditConfig) !=
                              null
                                ? r
                                : i == null
                                  ? undefined
                                  : i.unifiedEditConfig;
                            const referenceLimits = l ? A_1(l) : undefined;
                            const targetLanguages = (
                              (t =
                                (a =
                                  e == null
                                    ? undefined
                                    : e.find(
                                        (e) =>
                                          e.key ===
                                          gS.VideoTranslationTargetLanguage,
                                      )) == null || (n = a.enumVal) == null
                                  ? undefined
                                  : n.structValue) != null
                                ? t
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
                              return x._(
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
                                  promptPlaceholderConfig: W(
                                    o == null
                                      ? undefined
                                      : o.bgPromptStarlingKeyMap,
                                  ),
                                },
                              );
                            }
                          })(e.options),
                          audioSeparationConfig: ((e) => {
                            let t;
                            const n =
                              e == null
                                ? undefined
                                : e.find((e) => e.key === gS.AudioSeparation);
                            if (n) {
                              const a = n.audioSeparationConfig;
                              return {
                                referenceLimits: A_1(
                                  (t =
                                    a == null
                                      ? undefined
                                      : a.unifiedEditConfig) != null
                                    ? t
                                    : n.unifiedEditConfig,
                                ),
                                promptPlaceholderConfig: W(
                                  a == null
                                    ? undefined
                                    : a.bgPromptStarlingKeyMap,
                                ),
                                maxPromptLength:
                                  a == null ? undefined : a.maxPromptLength,
                              };
                            }
                          })(e.options),
                          textReadingConfig: ((e) => {
                            const t =
                              e == null
                                ? undefined
                                : e.find((e) => e.key === gS.TextReading);
                            const n = t == null ? undefined : t.ttsConfig;
                            if (
                              n == null ? undefined : n.bgPromptStarlingKeyMap
                            ) {
                              return {
                                promptPlaceholderConfig: W(
                                  n.bgPromptStarlingKeyMap,
                                ),
                                maxPromptLength: n.maxPromptLength,
                              };
                            }
                          })(e.options),
                          voiceConfig: {
                            isSpeedAdjustmentEnabled: (c = new Set(
                              (o =
                                (s =
                                  (i = e.options) == null
                                    ? undefined
                                    : i.find(
                                        (e) => e.key === gS.VoiceOption,
                                      )) == null || (l = s.enumVal) == null
                                  ? undefined
                                  : l.stringValue) != null
                                ? o
                                : [],
                            )).has(DL.Speed),
                            isEmotionSelectionEnabled: c.has(DL.Emotion),
                          },
                          extra,
                        };
                      }),
                    };
                  })(a, n);
                }
              }
              return t;
            })(t.value),
          );
        }
        return t;
      })
      .call(this);
  }
  constructor(e) {
    this._containerService = e;
    this._serviceBrand = undefined;
    this._repository = this._containerService.createInstance(_);
  }
}
Y = r.Cg(
  [
    r.Qj(0, o._),
    r.Sn("design:type", Function),
    r.Sn("design:paramtypes", [o._ === undefined ? Object : o._]),
  ],
  Y,
);
