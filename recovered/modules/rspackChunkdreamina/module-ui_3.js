import a from "oa";
import r from "bk";
import i from "qa";
import { B } from "./module-Jy_2.js";
import l from "yMd";
import { l as l_1 } from "./module-OvZ_2.js";
import c from "Ut";
import { A } from "./module-EGl_2.js";
const d = (e) =>
  a._(
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
function m(e) {
  const { enumVal, forbiddenDisplay, key, lensMotionVal } = e;
  const { defaultValIdx = 0 } = enumVal != null ? enumVal : {};
  switch (key) {
    case l.pH.Fps:
    case l.pH.Frames:
      return {
        type: key,
        values:
          (p = enumVal == null ? undefined : enumVal.intValue) != null ? p : [],
        disabled: forbiddenDisplay,
        defaultValue:
          enumVal == null ? undefined : enumVal.intValue[defaultValIdx],
      };
    case l.pH.FramesSlideBar:
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
        r._(a._({}, e), {
          key,
        }),
      );
    case l.pH.InputMediaType:
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
    case l.pH.FirstFrameConfig:
      return a._(
        {
          type: key,
          disabled: forbiddenDisplay,
        },
        d(e.firstFrameConfig),
      );
    case l.pH.EndFrameConfig:
      return a._(
        {
          type: key,
          disabled: forbiddenDisplay,
        },
        d(e.endFrameConfig),
      );
    case l.pH.LensMotionType:
    case l.pH.CameraStrength:
    case l.pH.VideoAspectRatio:
    case l.pH.MotionSpeed:
    case l.pH.AudioOption:
      return {
        type: key,
        values:
          (h = enumVal == null ? undefined : enumVal.stringValue) != null
            ? h
            : [],
        disabled: forbiddenDisplay,
        defaultValue:
          enumVal == null ? undefined : enumVal.stringValue[defaultValIdx],
      };
    case l.pH.Boximator:
    case l.pH.SupportExtend:
      return {
        type: key,
        disabled: forbiddenDisplay,
      };
    case l.pH.Resolution:
      var p;
      var v;
      var h;
      let g;
      const f =
        enumVal == null ? undefined : enumVal.stringValue[defaultValIdx];
      var b = {};
      if (enumVal != null) {
        enumVal.stringValue.forEach((e, n) => {
          var a;
          if ((a = enumVal.text) == null ? undefined : a[n]) {
            b[e] = enumVal.text[n];
          }
        });
      }
      return {
        type: key,
        values:
          (g = enumVal == null ? undefined : enumVal.stringValue) != null
            ? g
            : [],
        disabled: forbiddenDisplay,
        defaultValue: f != null ? f : undefined,
        labels: Object.keys(b).length > 0 ? b : undefined,
      };
    case l.pH.LensRecipe:
      let _;
      const values =
        (_ =
          lensMotionVal == null
            ? undefined
            : lensMotionVal.lensRecipeList.map((e) => {
                var t;
                var n;
                var a;
                var r;
                var i;
                return {
                  iconUrl: e.icon.imageUrl,
                  key: e.key,
                  name: l_1(e.name, e.nameStarlingKey),
                  strengths:
                    (t =
                      (a = e.strengthList) == null
                        ? undefined
                        : a.map((e) => ({
                            key: e.strengthKey,
                            name: l_1(e.name, e.nameStarlingKey),
                            value: e.strength,
                            nameStarlingKey: e.nameStarlingKey,
                          }))) != null
                      ? t
                      : [],
                  defaultStrength:
                    (i = e.strengthList) == null ||
                    (r = i[(n = e.defaultStrengthIdx) != null ? n : 0]) == null
                      ? undefined
                      : r.strengthKey,
                  nameStarlingKey: e.nameStarlingKey,
                };
              })) != null
          ? _
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
    case l.pH.MultiFrames:
      return ((e) => {
        var t;
        var n;
        var a;
        var r;
        var { key, forbiddenDisplay, multiFramesConfig } = e;
        var {
          durationMs,
          firstSegmentGenerationEnabled = false,
          endSegmentGenerationEnabled = false,
          minGenerationDurationMs = 0,
          maxMediaCount = 0,
          mediaConfig = [],
        } = multiFramesConfig != null ? multiFramesConfig : {};
        var h = mediaConfig.find((e) => {
          var { mediaType } = e;
          return mediaType === c.DAMediaType.Image;
        });
        var g = mediaConfig.find((e) => {
          var { mediaType } = e;
          return mediaType === c.DAMediaType.Video;
        });
        return {
          type: key,
          frameTransitionDurationMsConfig: {
            defaultValue:
              (t = durationMs == null ? undefined : durationMs.default) != null
                ? t
                : 0,
            min:
              (n = durationMs == null ? undefined : durationMs.min) != null
                ? n
                : 0,
            max:
              (a = durationMs == null ? undefined : durationMs.max) != null
                ? a
                : 0,
            step:
              (r = durationMs == null ? undefined : durationMs.step) != null
                ? r
                : 0,
          },
          leadingSegmentGenerationEnabled: firstSegmentGenerationEnabled,
          trailingSegmentGenerationEnabled: endSegmentGenerationEnabled,
          minGenerationDurationMs,
          maxFrameCount: maxMediaCount,
          imageConfig: h ? {} : undefined,
          videoConfig: g
            ? {
                maxDurationMs: g.maxVideoMediaDurationMs,
              }
            : undefined,
          disabled: forbiddenDisplay,
        };
      })(
        r._(a._({}, e), {
          key,
        }),
      );
    case l.pH.UnifiedEdit:
      return ((e) => {
        var { forbiddenDisplay, unifiedEditConfig } = e;
        return a._(
          {
            type: e.key,
            disabled: forbiddenDisplay,
          },
          d(unifiedEditConfig),
          A(unifiedEditConfig),
        );
      })(
        r._(a._({}, e), {
          key,
        }),
      );
    case l.pH.ExtendConfig:
      return ((e) => {
        var t;
        var n;
        var { extendConfigVal, forbiddenDisplay, key } = e;
        return r._(
          a._(
            {
              type: key,
              disabled: forbiddenDisplay,
            },
            d(extendConfigVal),
          ),
          {
            defaultModelKey:
              extendConfigVal == null
                ? undefined
                : extendConfigVal.defaultModelReqKey,
            supportModelKeys:
              (t =
                extendConfigVal == null ||
                (n = extendConfigVal.supportModelReqKey) == null
                  ? undefined
                  : n.filter(Boolean)) != null
                ? t
                : [],
          },
        );
      })(
        r._(a._({}, e), {
          key,
        }),
      );
    case l.pH.LongVideo:
      return ((e) => {
        var t;
        var n;
        var i;
        var o;
        var l;
        var { durationMs } = (t = e.longVideoConfig) != null ? t : {};
        return r._(
          a._(
            {
              type: e.key,
              disabled: e.forbiddenDisplay,
            },
            d(e.longVideoConfig),
          ),
          {
            durationMsConfig: {
              defaultValue:
                (n = durationMs == null ? undefined : durationMs.default) !=
                null
                  ? n
                  : 0,
              min:
                (i = durationMs == null ? undefined : durationMs.min) != null
                  ? i
                  : 0,
              max:
                (o = durationMs == null ? undefined : durationMs.max) != null
                  ? o
                  : 0,
              step:
                (l = durationMs == null ? undefined : durationMs.step) != null
                  ? l
                  : 0,
            },
          },
        );
      })(
        r._(a._({}, e), {
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
function p(e) {
  return e.key !== l.pH.EditConfig && e.key !== l.pH.GenerateFromDraftConfig;
}
export function F(e, t) {
  let n;
  let c;
  let u;
  let d;
  let v;
  let h;
  const g = (n = e.extra) != null ? n : {};
  const { modelSource } = g;
  const b = i._(g, ["modelSource"]);
  const extra = r._(a._({}, b), {
    enableTaskCancel:
      (c = (u = e.extra) == null ? undefined : u.enableTaskCancel) == null || c,
  });
  return {
    key: e.modelReqKey,
    modelNameStarlingKey: e.modelNameStarlingKey,
    isDraft: ((d = e.extra) == null ? undefined : d.isDraftMode) === true,
    name: l_1(e.modelName, e.modelNameStarlingKey),
    description: l_1(e.modelTip, e.modelTipStarlingKey),
    source: modelSource,
    coverUrl: e.icon.imageUrl,
    iconUrl: (v = e.iconSvg) == null ? undefined : v.imageUrl,
    iconTag: e.iconTag,
    featureKey: e.featureKey,
    commercialConfig: e.commercialConfig,
    extra,
    status: e.modelStatus,
    featureConfig: e.featureKey ? t[e.featureKey] : undefined,
    fields: e.options.filter(p).map(m),
    mutexList: (h = e.mutexConf) == null ? undefined : h.mutexList,
    preAuditPolicy: e.preAuditPolicy,
    subjectPreAuditPolicy: e.subjectPreAuditPolicy,
    editConfig: ((e) => {
      let t;
      let n;
      const i =
        (n = e.options.find((e) => e.key === l.pH.EditConfig)) == null
          ? undefined
          : n.editConfigVal;
      if (i) {
        const {
          defaultModelReqKey,
          supportModelReqKey,
          maxPromptLength,
          editMinVideoDuration,
          editMaxVideoDuration,
        } = i;
        const supportModelKeys =
          (t =
            supportModelReqKey == null
              ? undefined
              : supportModelReqKey.filter(Boolean)) != null
            ? t
            : [];
        const p = a._(
          {},
          (i == null ? undefined : i.videoAspectRatioMode)
            ? {
                videoAspectRatioMode: i.videoAspectRatioMode,
              }
            : undefined,
          (i == null ? undefined : i.durationMode)
            ? {
                durationMode: i.durationMode,
              }
            : undefined,
        );
        if (
          defaultModelReqKey ||
          supportModelKeys.length ||
          typeof maxPromptLength === "number" ||
          typeof editMinVideoDuration === "number" ||
          typeof editMaxVideoDuration === "number" ||
          p.videoAspectRatioMode ||
          p.durationMode
        ) {
          return r._(a._({}, p), {
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
      let t;
      let n;
      let a;
      let r;
      let i;
      let s;
      let c;
      const u =
        (c = e.options.find((e) => e.key === l.pH.GenerateFromDraftConfig)) ==
          null || (s = c.generateFromDraftConfigVal) == null
          ? undefined
          : s.resolution;
      if (u) {
        a = (t = u.stringValue) != null ? t : [];
        r = new Set((n = u.disabledStringValue) != null ? n : []);
        i = a[u.defaultValIdx];
        return {
          resolutionOptions: a.map((e, t) => {
            var n;
            var a;
            var i;
            return {
              value: e,
              label:
                (n =
                  (a = (i = u.text) == null ? undefined : i[t]) != null
                    ? a
                    : B[e]) != null
                  ? n
                  : e,
              disabled: r.has(e),
            };
          }),
          defaultResolution: i && !r.has(i) ? i : undefined,
        };
      }
    })(e),
  };
}
export function C(e) {
  const modelList = e.modelList.map((t) => F(t, e.featureConf));
  return {
    modelList,
    defaultModel: modelList[e.defaultModelIdx],
    disabled: e.forbiddenDisplay,
    modelReqKeyEmptyReplace: e.modelReqKeyEmptyReplace,
    mobileAvailableModelKeys: e.mobileAvailableModelKeys,
    superResolutionConfig: e.superResolutionConfig,
    subtitleEraseConfig: ((e) => {
      let t;
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
          e == null || (t = e.benefitKey) == null ? undefined : t.trim();
        return a._(
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
