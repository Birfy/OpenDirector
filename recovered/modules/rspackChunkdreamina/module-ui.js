import n from "oa";
import o from "bk";
import a from "qa";
import { B } from "./module-Jy.js";
import r from "yMd";
import { l as l_1 } from "./module-OvZ.js";
import u from "Ut";
import { A } from "./module-EGl.js";
const g = (e) =>
  n._(
    {},
    (e == null ? undefined : e.videoAspectRatioMode)
      ? {
          videoAspectRatioMode: e.videoAspectRatioMode,
        }
      : undefined,
    (e == null ? undefined : e.durationMode)
      ? {
          durationMode: e.durationMode,
        }
      : undefined,
  );
function c(e) {
  const { enumVal, forbiddenDisplay, key, lensMotionVal } = e;
  const { defaultValIdx = 0 } = enumVal != null ? enumVal : {};
  switch (key) {
    case r.pH.Fps:
    case r.pH.Frames:
      return {
        type: key,
        values:
          (m = enumVal == null ? undefined : enumVal.intValue) != null ? m : [],
        disabled: forbiddenDisplay,
        defaultValue:
          enumVal == null ? undefined : enumVal.intValue[defaultValIdx],
      };
    case r.pH.FramesSlideBar:
      return ((e) => {
        var { forbiddenDisplay, key, slideBarVal } = e;
        var {
          min = 0,
          max = 0,
          step = 0,
          default: _default,
        } = slideBarVal != null ? slideBarVal : {};
        return {
          type: key,
          min,
          max,
          step,
          defaultValue: _default,
          disabled: forbiddenDisplay,
        };
      })(
        o._(n._({}, e), {
          key,
        }),
      );
    case r.pH.InputMediaType:
      return {
        type: key,
        values:
          (f = enumVal == null ? undefined : enumVal.stringValue) != null
            ? f
            : [],
        disabled: forbiddenDisplay,
        defaultValue:
          enumVal == null ? undefined : enumVal.stringValue[defaultValIdx],
      };
    case r.pH.FirstFrameConfig:
      return n._(
        {
          type: key,
          disabled: forbiddenDisplay,
        },
        g(e.firstFrameConfig),
      );
    case r.pH.EndFrameConfig:
      return n._(
        {
          type: key,
          disabled: forbiddenDisplay,
        },
        g(e.endFrameConfig),
      );
    case r.pH.LensMotionType:
    case r.pH.CameraStrength:
    case r.pH.VideoAspectRatio:
    case r.pH.MotionSpeed:
    case r.pH.AudioOption:
      return {
        type: key,
        values:
          (v = enumVal == null ? undefined : enumVal.stringValue) != null
            ? v
            : [],
        disabled: forbiddenDisplay,
        defaultValue:
          enumVal == null ? undefined : enumVal.stringValue[defaultValIdx],
      };
    case r.pH.Boximator:
    case r.pH.SupportExtend:
      return {
        type: key,
        disabled: forbiddenDisplay,
      };
    case r.pH.Resolution:
      var m;
      var f;
      var v;
      let p;
      const h =
        enumVal == null ? undefined : enumVal.stringValue[defaultValIdx];
      var _ = {};
      if (enumVal != null) {
        enumVal.stringValue.forEach((e, t) => {
          var n;
          if ((n = enumVal.text) == null ? undefined : n[t]) {
            _[e] = enumVal.text[t];
          }
        });
      }
      return {
        type: key,
        values:
          (p = enumVal == null ? undefined : enumVal.stringValue) != null
            ? p
            : [],
        disabled: forbiddenDisplay,
        defaultValue: h != null ? h : undefined,
        labels: Object.keys(_).length > 0 ? _ : undefined,
      };
    case r.pH.LensRecipe:
      let C;
      const values =
        (C =
          lensMotionVal == null
            ? undefined
            : lensMotionVal.lensRecipeList.map((e) => {
                var i;
                var t;
                var n;
                var o;
                var a;
                return {
                  iconUrl: e.icon.imageUrl,
                  key: e.key,
                  name: l_1(e.name, e.nameStarlingKey),
                  strengths:
                    (i =
                      (n = e.strengthList) == null
                        ? undefined
                        : n.map((e) => ({
                            key: e.strengthKey,
                            name: l_1(e.name, e.nameStarlingKey),
                            value: e.strength,
                            nameStarlingKey: e.nameStarlingKey,
                          }))) != null
                      ? i
                      : [],
                  defaultStrength:
                    (a = e.strengthList) == null ||
                    (o = a[(t = e.defaultStrengthIdx) != null ? t : 0]) == null
                      ? undefined
                      : o.strengthKey,
                  nameStarlingKey: e.nameStarlingKey,
                };
              })) != null
          ? C
          : [];
      return {
        type: key,
        values,
        disabled: forbiddenDisplay,
        defaultValue:
          typeof (lensMotionVal == null
            ? undefined
            : lensMotionVal.defaultValIdx) === "number"
            ? values[lensMotionVal.defaultValIdx]
            : undefined,
      };
    case r.pH.MultiFrames:
      return ((e) => {
        var i;
        var t;
        var n;
        var o;
        var { key, forbiddenDisplay, multiFramesConfig } = e;
        var {
          durationMs,
          firstSegmentGenerationEnabled = false,
          endSegmentGenerationEnabled = false,
          minGenerationDurationMs = 0,
          maxMediaCount = 0,
          mediaConfig = [],
        } = multiFramesConfig != null ? multiFramesConfig : {};
        var v = mediaConfig.find((e) => {
          var { mediaType } = e;
          return mediaType === u.DAMediaType.Image;
        });
        var p = mediaConfig.find((e) => {
          var { mediaType } = e;
          return mediaType === u.DAMediaType.Video;
        });
        return {
          type: key,
          frameTransitionDurationMsConfig: {
            defaultValue:
              (i = durationMs == null ? undefined : durationMs.default) != null
                ? i
                : 0,
            min:
              (t = durationMs == null ? undefined : durationMs.min) != null
                ? t
                : 0,
            max:
              (n = durationMs == null ? undefined : durationMs.max) != null
                ? n
                : 0,
            step:
              (o = durationMs == null ? undefined : durationMs.step) != null
                ? o
                : 0,
          },
          leadingSegmentGenerationEnabled: firstSegmentGenerationEnabled,
          trailingSegmentGenerationEnabled: endSegmentGenerationEnabled,
          minGenerationDurationMs,
          maxFrameCount: maxMediaCount,
          imageConfig: v ? {} : undefined,
          videoConfig: p
            ? {
                maxDurationMs: p.maxVideoMediaDurationMs,
              }
            : undefined,
          disabled: forbiddenDisplay,
        };
      })(
        o._(n._({}, e), {
          key,
        }),
      );
    case r.pH.UnifiedEdit:
      return ((e) => {
        var { forbiddenDisplay, unifiedEditConfig } = e;
        return n._(
          {
            type: e.key,
            disabled: forbiddenDisplay,
          },
          g(unifiedEditConfig),
          A(unifiedEditConfig),
        );
      })(
        o._(n._({}, e), {
          key,
        }),
      );
    case r.pH.ExtendConfig:
      return ((e) => {
        var i;
        var t;
        var { extendConfigVal, forbiddenDisplay, key } = e;
        return o._(
          n._(
            {
              type: key,
              disabled: forbiddenDisplay,
            },
            g(extendConfigVal),
          ),
          {
            defaultModelKey:
              extendConfigVal == null
                ? undefined
                : extendConfigVal.defaultModelReqKey,
            supportModelKeys:
              (i =
                extendConfigVal == null ||
                (t = extendConfigVal.supportModelReqKey) == null
                  ? undefined
                  : t.filter(Boolean)) != null
                ? i
                : [],
          },
        );
      })(
        o._(n._({}, e), {
          key,
        }),
      );
    case r.pH.LongVideo:
      return ((e) => {
        var i;
        var t;
        var a;
        var l;
        var r;
        var { durationMs } = (i = e.longVideoConfig) != null ? i : {};
        return o._(
          n._(
            {
              type: e.key,
              disabled: e.forbiddenDisplay,
            },
            g(e.longVideoConfig),
          ),
          {
            durationMsConfig: {
              defaultValue:
                (t = durationMs == null ? undefined : durationMs.default) !=
                null
                  ? t
                  : 0,
              min:
                (a = durationMs == null ? undefined : durationMs.min) != null
                  ? a
                  : 0,
              max:
                (l = durationMs == null ? undefined : durationMs.max) != null
                  ? l
                  : 0,
              step:
                (r = durationMs == null ? undefined : durationMs.step) != null
                  ? r
                  : 0,
            },
          },
        );
      })(
        o._(n._({}, e), {
          key,
        }),
      );
    default:
      return {
        type: key,
        values: [],
        disabled: forbiddenDisplay,
      };
  }
}
function m(e) {
  return e.key !== r.pH.EditConfig && e.key !== r.pH.GenerateFromDraftConfig;
}
export function F(e, i) {
  let t;
  let u;
  let s;
  let g;
  let f;
  let v;
  const p = (t = e.extra) != null ? t : {};
  const { modelSource } = p;
  const _ = a._(p, ["modelSource"]);
  const extra = o._(n._({}, _), {
    enableTaskCancel:
      (u = (s = e.extra) == null ? undefined : s.enableTaskCancel) == null || u,
  });
  return {
    key: e.modelReqKey,
    modelNameStarlingKey: e.modelNameStarlingKey,
    isDraft: ((g = e.extra) == null ? undefined : g.isDraftMode) === true,
    name: l_1(e.modelName, e.modelNameStarlingKey),
    description: l_1(e.modelTip, e.modelTipStarlingKey),
    source: modelSource,
    coverUrl: e.icon.imageUrl,
    iconUrl: (f = e.iconSvg) == null ? undefined : f.imageUrl,
    iconTag: e.iconTag,
    featureKey: e.featureKey,
    commercialConfig: e.commercialConfig,
    extra,
    status: e.modelStatus,
    featureConfig: e.featureKey ? i[e.featureKey] : undefined,
    fields: e.options.filter(m).map(c),
    mutexList: (v = e.mutexConf) == null ? undefined : v.mutexList,
    preAuditPolicy: e.preAuditPolicy,
    subjectPreAuditPolicy: e.subjectPreAuditPolicy,
    editConfig: ((e) => {
      let i;
      let t;
      const a =
        (t = e.options.find((e) => e.key === r.pH.EditConfig)) == null
          ? undefined
          : t.editConfigVal;
      if (a) {
        const {
          defaultModelReqKey,
          supportModelReqKey,
          maxPromptLength,
          editMinVideoDuration,
          editMaxVideoDuration,
        } = a;
        const supportModelKeys =
          (i =
            supportModelReqKey == null
              ? undefined
              : supportModelReqKey.filter(Boolean)) != null
            ? i
            : [];
        const m = n._(
          {},
          (a == null ? undefined : a.videoAspectRatioMode)
            ? {
                videoAspectRatioMode: a.videoAspectRatioMode,
              }
            : undefined,
          (a == null ? undefined : a.durationMode)
            ? {
                durationMode: a.durationMode,
              }
            : undefined,
        );
        if (
          defaultModelReqKey ||
          supportModelKeys.length ||
          typeof maxPromptLength === "number" ||
          typeof editMinVideoDuration === "number" ||
          typeof editMaxVideoDuration === "number" ||
          m.videoAspectRatioMode ||
          m.durationMode
        ) {
          return o._(n._({}, m), {
            defaultModelKey: defaultModelReqKey,
            supportModelKeys,
            maxPromptLength,
            editMinVideoDuration,
            editMaxVideoDuration,
          });
        }
      }
    })(e),
    generateFromDraftConfig: ((e) => {
      let i;
      let t;
      let n;
      let o;
      let a;
      let d;
      let u;
      const s =
        (u = e.options.find((e) => e.key === r.pH.GenerateFromDraftConfig)) ==
          null || (d = u.generateFromDraftConfigVal) == null
          ? undefined
          : d.resolution;
      if (s) {
        n = (i = s.stringValue) != null ? i : [];
        o = new Set((t = s.disabledStringValue) != null ? t : []);
        a = n[s.defaultValIdx];
        return {
          resolutionOptions: n.map((e, i) => {
            var t;
            var n;
            var a;
            return {
              value: e,
              label:
                (t =
                  (n = (a = s.text) == null ? undefined : a[i]) != null
                    ? n
                    : B[e]) != null
                  ? t
                  : e,
              disabled: o.has(e),
            };
          }),
          defaultResolution: a && !o.has(a) ? a : undefined,
        };
      }
    })(e),
  };
}
export function C(e) {
  const modelList = e.modelList.map((i) => F(i, e.featureConf));
  return {
    modelList,
    defaultModel: modelList[e.defaultModelIdx],
    disabled: e.forbiddenDisplay,
    modelReqKeyEmptyReplace: e.modelReqKeyEmptyReplace,
    mobileAvailableModelKeys: e.mobileAvailableModelKeys,
    superResolutionConfig: e.superResolutionConfig,
    subtitleEraseConfig: ((e) => {
      let i;
      const { maxLongEdge, maxShortEdge } = e != null ? e : {};
      if (
        maxLongEdge !== undefined &&
        maxShortEdge !== undefined &&
        Number.isInteger(maxLongEdge) &&
        Number.isInteger(maxShortEdge) &&
        !(maxShortEdge <= 0) &&
        !(maxLongEdge < maxShortEdge)
      ) {
        const benefitKey =
          e == null || (i = e.benefitKey) == null ? undefined : i.trim();
        return n._(
          {
            maxLongEdge,
            maxShortEdge,
          },
          benefitKey
            ? {
                benefitKey,
              }
            : {},
        );
      }
    })(e.subtitleEraseConfig),
  };
}
