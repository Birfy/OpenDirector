import a from "oa";
import r from "bk";
import o from "z8";
import i from "bT";
import s from "UOA";
import l from "SX";
import { P as P_1 } from "./module-j8j.js";
import * as d from "./module-Gn2.js";
import u from "ED";
import p from "Qey";
import m from "bE";
import v from "xm3";
import h from "wF";
import f from "jv";
import x from "LaG";
import _ from "n3Q";
import g from "qa";
import "Vx";
import b from "Ix";
import j from "M9I";
import y from "Ogf";
import k from "lBB";
import M from "YU";
import A from "oZZ";
import C from "hA6";
import w from "oJV";
import R from "iPS";
import S from "mZ";
import V from "BXZ";
import I from "zS";
import _E from "xb";
import W from "yw";
import $ from "gC";
import O from "g9";
import z from "n3";
import L from "SNb";
import H from "qp9";
import B from "GI";
import U from "vIx";
import q from "r6q";
import X from "BTP";
import J from "d6Z";
import { Q } from "./module-tHk.js";
import ee from "Ldn";
import er from "Du8";
import eo from "ekv";
import el from "pr";
import ec from "c8J";
import ed from "cO";
import eg from "Gr4";
import eb from "gu";
import ej from "Kt";
import ey from "CaR";
import ek from "Dh";
import { P as P_2 } from "./module-XC_2.js";
import eA from "NY";
import eC from "z7R";
import ew from "yMd";
import eN from "EYk";
import eP from "kDD";
import eV from "CkM";
import eF from "oq";
import eE from "qO";
import eD from "hUS";
import eW from "RMk";
import e$ from "PC";
import eJ from "xK4";
const N = i.memo(function (e) {
  const limitations = C.n();
  return o.jsxs("div", {
    className: "commercial-content-S2P4bf",
    children: [
      e.text,
      o.jsx(w.X, {
        limitations,
      }),
    ],
  });
});
const P = u.PA(function (e) {
  const {
    isModelListLoading,
    aspectRatioText,
    commercialSceneOptions,
    resolutionText,
  } = e;
  const s = i.useMemo(
    () =>
      resolutionText &&
      o.jsxs(o.Fragment, {
        children: [
          o.jsx("div", {
            className: "divider-rx_m4W",
          }),
          o.jsx(A.v, {
            ignoreClickIntercept: true,
            component: null,
            sceneOptions: commercialSceneOptions,
            children: o.jsx(N, {
              text: resolutionText,
            }),
          }),
        ],
      }),
    [resolutionText, commercialSceneOptions],
  );
  if (isModelListLoading) {
    return o.jsx("span", {
      children: p.Ay.t("web_new_video_settings_button_content", {}, "加载中"),
    });
  }
  return o.jsxs("span", {
    className: "button-text-tC6CzM",
    children: [aspectRatioText, s],
  });
});
const T = u.PA(function (e) {
  let t;
  let n;
  let s;
  const {
    firstTimeTooltipContent,
    firstTimeTooltipVisible,
    onFirstTimeTooltipClickOutside,
  } = e;
  const u = g._(e, [
    "firstTimeTooltipContent",
    "firstTimeTooltipVisible",
    "onFirstTimeTooltipClickOutside",
  ]);
  const { videoGeneratorManager } = h.h(v.V);
  const {
    data: {
      aspectRatio,
      aspectRatioAutoMatched,
      commercialSceneOptions,
      resolution,
      videoAspectRatioMode,
    },
    metadata: { isModelListLoading, resolutionOptions },
  } = videoGeneratorManager;
  const T = i.useMemo(
    () =>
      o.jsx(j.z, {
        aspectRatio: aspectRatioAutoMatched ? undefined : aspectRatio,
        size: 16,
      }),
    [aspectRatio, aspectRatioAutoMatched],
  );
  let aspectRatioText = aspectRatio != null ? aspectRatio : "";
  if (videoAspectRatioMode === y.E.Adaptive) {
    aspectRatioText = p.Ay.t("seedance_ratio_auto", {}, "自动");
  } else if (aspectRatioAutoMatched || !aspectRatio) {
    aspectRatioText = p.Ay.t("web_new_video_image_ratio_auto", {}, "自动匹配");
  }
  const S = resolutionOptions.find((e) => e.value === resolution);
  const resolutionText =
    resolutionOptions.length > 0 && S !== undefined
      ? (n = S.label) == null
        ? undefined
        : n.toString()
      : undefined;
  const commercialSceneOptions_1 =
    (t =
      S == null || (s = S.extra) == null
        ? undefined
        : s.commercialSceneOptions) != null
      ? t
      : commercialSceneOptions;
  const I = i.useMemo(
    () => [aspectRatioText, resolutionText].filter(Boolean).join(" · "),
    [aspectRatioText, resolutionText],
  );
  return o.jsx(b.A, {
    content: firstTimeTooltipContent,
    disabled: !firstTimeTooltipVisible,
    popupVisible: firstTimeTooltipVisible,
    position: "top",
    showArrow: true,
    triggerProps: {
      onClickOutside: onFirstTimeTooltipClickOutside,
    },
    children: o.jsx(M.F, {
      content: I,
      popupVisible: !firstTimeTooltipVisible && !u.active && undefined,
      children: o.jsx(
        k.E,
        r._(
          a._(
            {
              icon: T,
            },
            u,
          ),
          {
            children: o.jsx(P, {
              aspectRatioText,
              commercialSceneOptions: commercialSceneOptions_1,
              isModelListLoading,
              resolutionText,
            }),
          },
        ),
      ),
    }),
  });
});
const F = u.PA(function () {
  const { videoGeneratorManager } = h.h(v.V);
  const {
    data: { aspectRatio, aspectRatioAutoMatched, videoAspectRatioMode },
    metadata: { aspectRatioOptions },
    continuationManager,
    changeAspectRatio,
  } = videoGeneratorManager;
  const enabled = continuationManager.data.enabled;
  const d = aspectRatioAutoMatched || enabled;
  const u = i.useMemo(() => {
    if (enabled) {
      return p.Ay.t("seedance_25_extend_ratio", {}, "暂不支持调整延长视频比例");
    }
    if (videoAspectRatioMode === y.E.Adaptive) {
      return p.Ay.t(
        "seedance_25_video_edit_ratio_adaptive_tip",
        {},
        "根据编辑视频自动适配比例，暂不支持调整",
      );
    }
    return p.Ay.t(
      "web_new_model_hover_ratio_adapted",
      {
        aspectRatio,
      },
      "根据输入图片自动适配 {aspectRatio} 比例，暂不支持调整",
    );
  }, [aspectRatio, enabled, videoAspectRatioMode]);
  const m = i.useMemo(
    () => ({
      disabled: !d,
      position: "top",
      trigger: "hover",
    }),
    [d],
  );
  return o.jsx(S.R, {
    title: p.Ay.t("web_generator_box_select_ratio", {}, "选择比例"),
    children: o.jsx(b.A, {
      content: u,
      triggerProps: m,
      children: o.jsx(V._, {
        responsive: true,
        className: "aspect-ratio-radio-group-bbvhwj",
        options: aspectRatioOptions,
        value: aspectRatio,
        onChange: changeAspectRatio,
        disabled: d,
      }),
    }),
  });
});
L.vw;
const Z = u.PA(function () {
  const { videoGeneratorManager } = h.h(v.V);
  const {
    data: { resolution, model },
    metadata: { resolutionOptions },
    continuationManager,
    changeResolution,
  } = videoGeneratorManager;
  O.f(
    "web_video_generate_upscale_resolution_tip",
    "Native output is 720p.\nHigher resolutions are upscaled from it.",
  );
  const enabled = continuationManager.data.enabled;
  const c = p.Ay.t(
    "seedance_25_extend_resolution",
    {},
    "暂不支持调整延长视频分辨率",
  );
  const d = (model == null ? undefined : model.isDraft)
    ? p.Ay.t("sd25_draft_resolution", {}, "样片分辨率")
    : p.Ay.t("web_new_choose_video_resolution", {}, "选择分辨率");
  const u = i.useMemo(
    () => ({
      disabled: !enabled,
      position: "top",
      trigger: "hover",
    }),
    [enabled],
  );
  const m = I.A((e) => {
    var t;
    return o.jsx($.I, {
      className: "option-container-htgUE_",
      source: z.HH.ClickSide,
      children: o.jsx(A.v, {
        ignoreClickIntercept: true,
        component: null,
        sceneOptions:
          (t = e.extra) == null ? undefined : t.commercialSceneOptions,
        children: o.jsx(H.I, {
          option: e,
        }),
      }),
    });
  });
  if (resolutionOptions.length === 0) {
    return null;
  }
  return o.jsx(S.R, {
    title: o.jsxs("span", {
      className: _E("title-S8Hkfw", {
        "resolution-title-od4frh":
          !(model == null ? undefined : model.isDraft) && false,
      }),
      children: [
        d,
        (model == null ? undefined : model.isDraft)
          ? o.jsx(b.A, {
              content: p.Ay.t(
                "sd25_draft_resolution_tip",
                {},
                "先生成480P样片，确认后可升级为高清正片。",
              ),
              children: o.jsx(W.G_L, {
                className: "info-icon-QvdxiA",
              }),
            })
          : null,
        (model == null || model.isDraft, null),
      ],
    }),
    children: o.jsx(b.A, {
      content: c,
      triggerProps: u,
      children: o.jsx(B.h, {
        className: "resolution-radio-group-OrLVV4",
        disabled: enabled,
        options: resolutionOptions,
        renderOption: m,
        value: resolution,
        onChange: changeResolution,
      }),
    }),
  });
});
const K = i.memo(function () {
  return o.jsxs(R.Y, {
    className: "panel-g1jjMw",
    children: [o.jsx(F, {}), o.jsx(Z, {})],
  });
});
const G = u.PA(function (e) {
  const t = h.h(v.V);
  const n = h.h(m.c);
  const { videoGeneratorManager } = t;
  const {
    data: { model },
    metadata: { isModelListLoading, aspectRatioOptions, resolutionOptions },
    reportManager,
  } = videoGeneratorManager;
  const u = i.useMemo(() => o.jsx(K, {}), []);
  const [g, setG] = i.useState(false);
  const j = n.hasLogin ? n.userProfile.uid : "guest";
  const storageKey = `dreamina_sd25_draft_resolution_tip_shown-`.concat(j);
  const { dismiss, show, visible } = f.u({
    storageKey,
  });
  const [ref, w] = x.lV();
  i.useEffect(() => {
    if (
      e.draftModelSwitchRequest &&
      e.draftModelSwitchRequest.accountScope === j &&
      e.draftModelSwitchRequest.modelKey ===
        (model == null ? undefined : model.key) &&
      (model == null ? undefined : model.isDraft) &&
      !g
    ) {
      if (w) {
        show();
      }
    } else {
      dismiss();
    }
  }, [j, dismiss, w, model, g, e.draftModelSwitchRequest, show]);
  const style = i.useMemo(
    () => ({
      "--aspect-ratio-options-count": "".concat(aspectRatioOptions.length),
      "--resolution-options-count": "".concat(resolutionOptions.length),
    }),
    [aspectRatioOptions.length, resolutionOptions.length],
  );
  const P = i.useCallback(
    (e) => {
      setG(e);
      if (e) {
        dismiss();
        reportManager.reportClickSettings();
      }
    },
    [dismiss, reportManager],
  );
  return o.jsx(_.I, {
    className: "popover-lc6Qx3",
    style,
    disabled: isModelListLoading,
    content: u,
    popupVisible: g,
    onVisibleChange: P,
    children: o.jsx("div", {
      ref,
      children: o.jsx(T, {
        active: g,
        firstTimeTooltipVisible: visible,
        firstTimeTooltipContent: p.Ay.t(
          "sd25_draft_resolution_tip",
          {},
          "先生成480P样片，确认后可升级为高清正片。",
        ),
        onFirstTimeTooltipClickOutside: dismiss,
      }),
    }),
  });
});
const Y = u.PA(function () {
  let e;
  let t;
  let n;
  let a;
  let r;
  const { videoGeneratorManager } = h.h(v.V);
  const {
    metadata: {
      durationOptions,
      isModelListLoading,
      isDurationOptionHidden,
      isDurationSliderOption,
    },
    data: { durationMode, durationMs, videoEditSourceDurationMs },
    featureManager: {
      data: { isLongVideoEngaged, isOmniReferenceEngaged, isVideoEditEngaged },
    },
    changeDurationMs,
    longVideoManager,
    setDurationMs,
  } = videoGeneratorManager;
  const {
    metadata: {
      durationOptions: durationOptions_1,
      isLongVideoFeatureSelected,
    },
    data: { targetDurationMs },
    changeTargetDurationMs,
  } = longVideoManager;
  const [S, setS] = i.useState(isLongVideoFeatureSelected);
  const F = isLongVideoEngaged ? durationOptions_1 : durationOptions;
  const I = isLongVideoEngaged ? targetDurationMs : durationMs;
  const E = isLongVideoEngaged ? changeTargetDurationMs : changeDurationMs;
  const popupVisible = isLongVideoEngaged && !S;
  const W = isVideoEditEngaged && durationMode === y.P.Adaptive;
  const $ = i.useMemo(
    () => ({
      className: "trigger-CYnp2H",
      disabled: isModelListLoading,
    }),
    [isModelListLoading],
  );
  const O = i.useMemo(
    () => ({
      className: "duration-trigger-UlzQgh",
    }),
    [],
  );
  const z = i.useMemo(
    () => [
      {
        label: p.Ay.t("web_new_video_settings_button_content", {}, "加载中"),
        value: -1,
      },
    ],
    [],
  );
  const L = i.useCallback(
    (e) => {
      changeTargetDurationMs(e * q.K);
    },
    [changeTargetDurationMs],
  );
  const values = i.useMemo(
    () =>
      durationOptions_1
        .filter((e) => !e.disabled)
        .map((e) => e.value / q.K)
        .filter(Number.isFinite)
        .sort((e, t) => e - t),
    [durationOptions_1],
  );
  const B = (e = values[0]) != null ? e : 0;
  const Z = (t = values[values.length - 1]) != null ? t : B;
  const step =
    (n = values
      .slice(1)
      .map((e, t) => e - values[t])
      .find((e) => e > 0)) != null
      ? n
      : 1;
  const disabledRangeTooltipContent = p.Ay.t(
    "web_sd25_duration_range_hover_tip",
    {
      num1: B,
      num2: Z,
    },
    "时长需在 ".concat(B, " - ").concat(Z, " 秒内"),
  );
  const Y = Number((Z / 60).toFixed(1));
  const ee = p.Ay.t(
    "seedance_25_longvideo_tooltip",
    {
      num: Y,
      string: Y,
    },
    "最长可生成".concat(Y, "分钟"),
  );
  const et = (a = F.find((e) => e.value === I)) == null ? undefined : a.label;
  const en = (r = F.find((e) => e.value === I)) == null ? undefined : r.icon;
  const {
    durationValues,
    selectedDurationSeconds,
    minDurationSeconds,
    maxDurationSeconds,
    durationStepSeconds,
  } = i.useMemo(
    () => Q(durationOptions, durationMs),
    [durationMs, durationOptions],
  );
  const el = p.Ay.t(
    "web_sd25_duration_range_hover_tip",
    {
      num1: minDurationSeconds,
      num2: maxDurationSeconds,
    },
    "时长需在 "
      .concat(minDurationSeconds, " - ")
      .concat(maxDurationSeconds, " 秒内"),
  );
  const ec = et != null ? et : "".concat(selectedDurationSeconds, "s");
  const ed = i.useMemo(
    () => U._(selectedDurationSeconds),
    [selectedDurationSeconds],
  );
  const eu = i.useMemo(
    () =>
      U._(
        Math.round(
          (videoEditSourceDurationMs != null
            ? videoEditSourceDurationMs
            : durationMs) / q.K,
        ),
      ),
    [durationMs, videoEditSourceDurationMs],
  );
  const ep = p.Ay.t("web_generator_box_select_duration", {}, "选择视频时长");
  const em = i.useCallback(
    (e) => {
      changeDurationMs(e * q.K);
    },
    [changeDurationMs],
  );
  const onPreviewChange = i.useCallback(
    (e) => {
      setDurationMs(e * q.K);
    },
    [setDurationMs],
  );
  i.useEffect(() => {
    if (popupVisible) {
      var e = () => {
        setS(true);
      };
      document.addEventListener("pointerdown", e, true);
      return () => {
        document.removeEventListener("pointerdown", e, true);
      };
    }
  }, [popupVisible]);
  if (W) {
    const eh = p.Ay.t("seedance_duration_auto", {}, "自动");
    return o.jsx(M.F, {
      content: p.Ay.t("seedance_25_edit_time", {}, "与上传的视频时长一致"),
      children: o.jsx(k.E, {
        icon: eu,
        readOnly: true,
        children: eh,
      }),
    });
  }
  if (
    (!isLongVideoEngaged && isDurationOptionHidden) ||
    !F.length ||
    (isLongVideoEngaged && !values.length)
  ) {
    return null;
  }
  if (isLongVideoEngaged) {
    const ef = I / q.K;
    return o.jsx(b.A, {
      content: ee,
      position: "top",
      showArrow: true,
      popupVisible,
      triggerProps: {
        popupAlign: {
          top: 8,
        },
      },
      children: o.jsx(X.P, {
        value: ef,
        min: B,
        max: Z,
        step,
        values,
        title: ep,
        scaleMin: 0,
        tickInterval: 30,
        tickSnapThreshold: 10,
        triggerProps: $,
        disabledRangeTooltipContent,
        onChange: L,
        children: o.jsx(k.E, {
          icon: en,
          children: "".concat(ef, "s"),
        }),
      }),
    });
  }
  if (isDurationSliderOption && durationValues.length) {
    return o.jsx(M.F, {
      content: ec,
      children: o.jsx(X.P, {
        value: selectedDurationSeconds,
        min: minDurationSeconds,
        max: maxDurationSeconds,
        step: durationStepSeconds,
        values: durationValues,
        title: ep,
        scaleMin: 0,
        tickInterval: 5,
        tickSnapThreshold: 0,
        triggerProps: O,
        disabledRangeTooltipContent: isOmniReferenceEngaged ? el : undefined,
        onChange: em,
        onPreviewChange,
        children: o.jsx(k.E, {
          icon: ed,
          disabled: isModelListLoading,
          children: ec,
        }),
      }),
    });
  }
  return o.jsx(M.F, {
    content: et,
    children: o.jsx(J.O, {
      triggerProps: $,
      dropdownTitle: ep,
      dropdownMenuStyle: {
        maxHeight: "292px",
      },
      options: isModelListLoading ? z : F,
      value: isModelListLoading ? -1 : I,
      onChange: E,
    }),
  });
});
const et = u.PA(function () {
  const { videoGeneratorManager } = h.h(v.V);
  const { featureManager } = videoGeneratorManager;
  const {
    metadata: {
      featureOptions,
      isFeatureSelectionBadgeVisible,
      isVideoEditFeatureSelected,
    },
    data: { feature },
    switchFeature,
    dismissFeatureSelectionBadge,
  } = featureManager;
  const p = i.useMemo(
    () =>
      featureOptions.map((e) => {
        if (e.value === "longVideo") {
          return r._(a._({}, e), {
            icon: o.jsx("span", {
              className: "long-video-feature-icon-UVJvHL",
              children: e.icon,
            }),
          });
        }
        if (e.value !== "videoEdit" || isVideoEditFeatureSelected) {
          return e;
        }
        return r._(a._({}, e), {
          icon: o.jsxs("span", {
            className: "new-feature-icon-hN9Vgw",
            children: [
              e.icon,
              o.jsx("span", {
                className: "new-feature-badge-_b8wlZ",
              }),
            ],
          }),
        });
      }),
    [featureOptions, isVideoEditFeatureSelected],
  );
  const m = i.useMemo(() => {
    var e = p.find((e) => e.value === feature);
    if (e == null) {
      return undefined;
    }
    return e.label;
  }, [feature, p]);
  const f = i.useCallback(
    (e) => {
      dismissFeatureSelectionBadge(e);
      switchFeature(e);
    },
    [dismissFeatureSelectionBadge, switchFeature],
  );
  if (featureOptions.length <= 1) {
    return null;
  }
  return o.jsx(M.F, {
    content: m,
    children: o.jsxs("div", {
      className: "feature-select-GsLQn0",
      onMouseDown: () => dismissFeatureSelectionBadge(),
      children: [
        o.jsx(ee.T, {
          arrowIcon: null,
          options: p,
          value: feature,
          onChange: f,
        }),
        isFeatureSelectionBadgeVisible
          ? o.jsx("div", {
              className: "badge-container-IeD9rW",
              children: o.jsx("div", {
                className: "badge-zYHJx8",
              }),
            })
          : null,
      ],
    }),
  });
});
const en = u.PA(function () {
  const { videoGeneratorManager } = h.h(v.V);
  const {
    data: { batchNumber },
    metadata: { batchNumberOptions, batchNumberVisible },
    setBatchNumber,
  } = videoGeneratorManager;
  if (batchNumberVisible) {
    return o.jsx(S.R, {
      title: p.Ay.t("web_new_video_generate_count", {}, "生成数量"),
      children: o.jsx(B.h, {
        className: "batch-number-radio-group-O7gwPQ",
        options: batchNumberOptions,
        value: batchNumber,
        onChange: setBatchNumber,
      }),
    });
  }
  return null;
});
const ea = u.PA(function () {
  const [e, setE] = i.useState(false);
  const { videoGeneratorManager } = h.h(v.V);
  const {
    data: { effectiveBatchNumber },
    metadata: { batchNumberVisible },
  } = videoGeneratorManager;
  const s = i.useMemo(
    () => p.Ay.t("web_new_video_generate_count", {}, "生成数量"),
    [],
  );
  const l = i.useMemo(() => o.jsx(W.t55, {}), []);
  const c = i.useCallback((e) => {
    setE(e);
  }, []);
  if (!batchNumberVisible) {
    return null;
  }
  const d = p.Ay.t(
    "web_video_cnt_setting",
    {
      num: effectiveBatchNumber,
    },
    "".concat(effectiveBatchNumber),
  );
  return o.jsx(_.I, {
    className: "popover-Ivpfkk",
    content: o.jsx(R.Y, {
      className: "panel-LjkofH",
      children: o.jsx(en, {}),
    }),
    popupVisible: e,
    onVisibleChange: c,
    children: o.jsx(k.E, {
      active: e,
      "aria-expanded": e,
      "aria-label": "".concat(s, ": ").concat(effectiveBatchNumber),
      icon: l,
      children: o.jsx("span", {
        className: "button-content-jBrbKA",
        children: d,
      }),
    }),
  });
});
const ei = u.PA(function () {
  const { videoGeneratorManager } = h.h(v.V);
  const {
    data: { generationDurationMs },
    featureManager,
  } = videoGeneratorManager;
  const { compact } = i.useContext(er.R);
  const {
    data: { isMultiFramesEngaged },
  } = featureManager;
  const s = eo.j(generationDurationMs);
  const l = p.Ay.t("multiframe_time", {}, "生成总时长");
  const c = generationDurationMs > 0 ? "".concat(l).concat(s) : l;
  if (isMultiFramesEngaged) {
    return o.jsx(b.A, {
      content: c,
      children: o.jsxs("div", {
        className: "generation-duration-_PJIqa",
        children: [
          o.jsx(W.ffy, {}),
          compact
            ? null
            : o.jsx("div", {
                className: "duration-text-fb8yMo",
                children: s,
              }),
        ],
      }),
    });
  }
  return null;
});
const es = u.PA(function (e) {
  const { videoGeneratorManager } = h.h(v.V);
  const {
    metadata: { isModelListLoading, currentLensMovementRecipe },
  } = videoGeneratorManager;
  const l = i.useMemo(() => o.jsx(W.PEB, {}), []);
  const c = i.useMemo(() => {
    if (isModelListLoading) {
      return o.jsx("span", {
        children: p.Ay.t("web_new_video_settings_button_content", {}, "加载中"),
      });
    }
    return (
      (currentLensMovementRecipe == null
        ? undefined
        : currentLensMovementRecipe.name) ||
      p.Ay.t("cameramove_default_null", {}, "运镜：无")
    );
  }, [currentLensMovementRecipe, isModelListLoading]);
  return o.jsx("div", {
    children: o.jsx(M.F, {
      content: c,
      children: o.jsx(
        k.E,
        r._(
          a._(
            {
              icon: l,
            },
            e,
          ),
          {
            children: o.jsx("span", {
              className: "button-text-sLmsdD",
              children: c,
            }),
          },
        ),
      ),
    }),
  });
});
const eu = "preview-container-FOGF1E";
const ep = i.memo(function (e) {
  const { option, checked } = e;
  const { value, label, disabled } = option;
  const { videoGeneratorManager } = h.h(v.V);
  const {
    metadata: { lensMovementRecipes },
  } = videoGeneratorManager;
  const d = i.useMemo(() => {
    if (!value) {
      return o.jsx("div", {
        className: eu,
        children: o.jsx("div", {
          className: "default-recipe-item-NReMrn",
          children: o.jsx(W.r7P, {
            size: 20,
            className: "recipe-icon-U8Pglf",
          }),
        }),
      });
    }
    var e = lensMovementRecipes.find((e) => e.key === value);
    return o.jsxs("div", {
      className: eu,
      children: [
        o.jsx("img", {
          src: ed.m(e == null ? undefined : e.iconUrl, null, {
            logType: "js.href/src",
            reportOnly: "false",
            blackConfig: "{}",
            configMode: "merge",
            isCloseSSRReport: true,
            bid: "cc_dreamina",
            region: "cn",
            urlLimit: "-1",
            htmlLimit: "-1",
            isSaveValidUrl: false,
            isRuntimeLog: false,
            isDOMParser: false,
            escapeRule: "escape-report",
            reportUrl:
              "https://mon.zijieapi.com/monitor_browser/collect/batch/security/?bid=cc_dreamina",
            htmlparserOptions: "{}",
            scmBranch: "-",
            scmName: "-",
            scmVersion: "-",
            webpackPluginVersion: "3.6.0",
            filename:
              "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1-lZwWFJqQmtXRXBzWTNrNWFtSXlO$EJh$np$d1R*Z*tiR0p0$m5sWld*SjJZMms1-0dKd$$te*pi$FZvWWtNNWJWcFhSakJr$0$wc1kzaz$Nb%Z-$W14aW$%Rn$Xb*Mx-kdOdFJqQmlNM*wy$1RJNWRHTkhPWFZh$np$d1kzaz$Nb%Z-$W14aW$%Rn$Xb*Mx-kdOdFJqQmlNM*wwWk$jNWRtSkhTbWhq-$Rre$lWZFNiR0o1T$c1-$Z6$nNZMjFHT%dJelN-%mlSM$oxWTNre*RHSXpXbXhp$jFaM$pFTXhl$nB-$*5CalIx$jBZekpXT%dSS*JI$mFNMDEyWkcxc2ExcFhPSFJhTWxaM$dsaEthR1JIT1hsT$-zaHNZbT$OZEdKWE9%SmFWekZzWW01%mRHTnRWbXBo$0$Kc1R*Z*tl$0l6$m5kT%0xcHdXa2RXZ*t4WFpHe*li$lo1$1Zo%2RtTnBNWE5h$npWNlR*-3hkb$J0$m5S-$Z6$Xd%RmhL-kZreWJIZ*F$ekZxWWpJM%1*cFhO$EJN-mxKNlp$ZEdl$m96$m5vPQ",
          }),
          alt: "",
          className: "recipe-preview-ps2d2t",
          crossOrigin: "anonymous",
          draggable: false,
        }),
        o.jsx("div", {
          className: "recipe-preview-border-YyCwQ2",
        }),
      ],
    });
  }, [value, lensMovementRecipes]);
  return o.jsxs("div", {
    className: _E("radio-content-PomwGb", {
      "checked-FC4TZe": checked,
      "disabled-YOBrhC": disabled,
    }),
    children: [
      d,
      o.jsx("span", {
        className: "label-gGe1bA",
        children: label,
      }),
    ],
  });
});
const em = {
  "scroll-wrapper": "scroll-wrapper-ds_bTc",
  scrollWrapper: "scroll-wrapper-ds_bTc",
  "radio-group-wrapper": "radio-group-wrapper-T8MsmB",
  radioGroupWrapper: "radio-group-wrapper-T8MsmB",
  scrollable: "scrollable-_6nIGI",
  "scroll-arrow": "scroll-arrow-WSeTM_",
  scrollArrow: "scroll-arrow-WSeTM_",
  disabled: "disabled-jkWQgg",
  "scroll-arrow-left": "scroll-arrow-left-uA4BWl",
  scrollArrowLeft: "scroll-arrow-left-uA4BWl",
  "scroll-arrow-right": "scroll-arrow-right-nUptfZ",
  scrollArrowRight: "scroll-arrow-right-nUptfZ",
};
const ev = i.memo(function (e) {
  const { className, options = [] } = e;
  const s = g._(e, ["className", "options"]);
  const lRef = i.useRef(null);
  const [c, setC] = i.useState(true);
  const [u, setU] = i.useState(true);
  const v = i.useMemo(() => options.length > 6, [options]);
  const h = i.useCallback(() => {
    if (v) {
      var e = lRef.current;
      if (e) {
        var { scrollLeft, scrollWidth, clientWidth } = e;
        setC(scrollLeft <= 1);
        setU(scrollLeft >= scrollWidth - clientWidth - 1);
      }
    }
  }, [v]);
  const f = i.useCallback((e) => {
    var left;
    var lRef_current = lRef.current;
    if (lRef_current) {
      var { clientWidth, scrollLeft, scrollWidth } = lRef_current;
      var i = Math.max(0.6 * clientWidth, 200);
      left =
        e === "left"
          ? Math.max(0, scrollLeft - i)
          : Math.min(scrollWidth - clientWidth, scrollLeft + i);
      lRef_current.scrollTo({
        left,
        behavior: "smooth",
      });
    }
  }, []);
  const x = i.useCallback(() => {
    if (!c) {
      f("left");
    }
  }, [f, c]);
  const _ = i.useCallback(() => {
    if (!u) {
      f("right");
    }
  }, [f, u]);
  const b = i.useMemo(() => ec.A(h, 100), [h]);
  i.useEffect(() => {
    if (v) {
      var e = lRef.current;
      if (e) {
        h();
        e.addEventListener("scroll", b, {
          passive: true,
        });
        return () => {
          e.removeEventListener("scroll", b);
        };
      }
    }
  }, [b, v, h]);
  const j = i.useCallback(
    (e, checked) =>
      o.jsx(ep, {
        option: e,
        checked,
      }),
    [],
  );
  return o.jsxs("div", {
    className: _E(em.scrollWrapper, {
      [em.scrollable]: v,
    }),
    children: [
      o.jsx("div", {
        className: _E(em.scrollArrow, em.scrollArrowLeft, {
          [em.disabled]: c,
        }),
        role: "button",
        tabIndex: c ? -1 : 0,
        "aria-disabled": c,
        "aria-label": p.Ay.t(
          "web_agent_subject_material_scroll_versions_left",
          {},
          "向左滚动",
        ),
        onKeyDown: el.q,
        onClick: x,
        children: o.jsx(W.gu7, {
          size: 12,
        }),
      }),
      o.jsx("div", {
        className: em.radioGroupWrapper,
        ref: lRef,
        children: o.jsx(
          B.h,
          r._(a._({}, s), {
            className: _E(em.radioGroup, className),
            options,
            renderOption: j,
          }),
        ),
      }),
      o.jsx("div", {
        className: _E(em.scrollArrow, em.scrollArrowRight, {
          [em.disabled]: u,
        }),
        role: "button",
        tabIndex: u ? -1 : 0,
        "aria-disabled": u,
        "aria-label": p.Ay.t(
          "web_agent_subject_material_scroll_versions_right",
          {},
          "向右滚动",
        ),
        onKeyDown: el.q,
        onClick: _,
        children: o.jsx(W.Vjx, {
          size: 12,
        }),
      }),
    ],
  });
});
const eh = u.PA(function () {
  const { videoGeneratorManager } = h.h(v.V);
  const {
    data: { lensMovementRecipe },
    metadata: {
      lensMovementRecipeOptions,
      lensMovementRecipeDisabled,
      lensMovementRecipeTooltipProps,
    },
    changeLensMovementRecipe,
  } = videoGeneratorManager;
  return o.jsx(S.R, {
    title: p.Ay.t("cameramove_lenspick", {}, "选择运镜"),
    children: o.jsx(
      b.A,
      r._(a._({}, lensMovementRecipeTooltipProps), {
        children: o.jsx(ev, {
          options: lensMovementRecipeOptions,
          value:
            lensMovementRecipe != null
              ? lensMovementRecipe
              : lensMovementRecipeOptions[0].value,
          onChange: changeLensMovementRecipe,
          disabled: lensMovementRecipeDisabled,
        }),
      }),
    ),
  });
});
const ef = u.PA(function () {
  const { videoGeneratorManager } = h.h(v.V);
  const {
    data: { lensMovementStrength },
    metadata: { lensMovementStrengthOptions, lensMovementRecipeDisabled },
    changeLensMovementStrength,
  } = videoGeneratorManager;
  return o.jsx(S.R, {
    title: p.Ay.t("cameramove_strengthpick", {}, "选择幅度"),
    children: o.jsx(B.h, {
      className: "lens-movement-strength-radio-group-_hEtTl",
      options: lensMovementStrengthOptions,
      value: lensMovementStrength || "",
      onChange: changeLensMovementStrength,
      disabled: lensMovementRecipeDisabled,
    }),
  });
});
const ex = i.memo(function () {
  return o.jsxs(R.Y, {
    children: [o.jsx(eh, {}), o.jsx(ef, {})],
  });
});
const e_ = u.PA(function () {
  const { videoGeneratorManager } = h.h(v.V);
  const {
    metadata: {
      isModelListLoading,
      lensMovementRecipes,
      isLensMovementRecipeOptionHidden,
    },
    reportManager,
  } = videoGeneratorManager;
  const s = i.useMemo(() => o.jsx(ex, {}), []);
  const [l, setL] = i.useState(false);
  const d = i.useCallback(
    (e) => {
      if (e) {
        reportManager.reportOpenMovementSetting();
      }
      setL(e);
    },
    [reportManager],
  );
  if (lensMovementRecipes.length <= 0 || isLensMovementRecipeOptionHidden) {
    return null;
  }
  return o.jsx(_.I, {
    className: "popover-tkEnTc",
    disabled: isModelListLoading,
    content: s,
    popupVisible: l,
    onVisibleChange: d,
    children: o.jsx(es, {
      active: l,
    }),
  });
});
const eT = i.memo(function (e) {
  const {
    scene,
    sceneOptions,
    modelName,
    resolutionLabel,
    className,
    onMembershipClick,
  } = e;
  const c = h.h(eN.a);
  const { text, isTextLink } = eP.$({
    scene,
    sceneOptions,
    commercialStrategyService: c,
  });
  const p = i.useCallback(
    (e) => {
      if (isTextLink) {
        e.stopPropagation();
        e.preventDefault();
        if (onMembershipClick != null) {
          onMembershipClick();
        }
      }
    },
    [isTextLink, onMembershipClick],
  );
  return o.jsx($.I, {
    source: z.HH.ClickGenerate,
    children: o.jsxs("div", {
      className: _E("model-limit-free-info-f_b45I", className),
      children: [
        modelName
          ? o.jsx("span", {
              className: "model-name-mhOGi2",
              children: modelName,
            })
          : null,
        resolutionLabel
          ? o.jsx("span", {
              className: "resolution-label-p0_YWf",
              children: resolutionLabel,
            })
          : null,
        text
          ? o.jsxs("span", {
              className: _E("membership-text-LID780", {
                "is-free-for-vip-mtJJJS": isTextLink,
              }),
              role: isTextLink ? "button" : undefined,
              tabIndex: isTextLink ? 0 : undefined,
              onKeyDown: el.q,
              onClick: p,
              children: [
                o.jsx("span", {
                  className: "inner-text-aeG5FT",
                  children: text,
                }),
                isTextLink
                  ? o.jsx(W.Vjx, {
                      className: "chevron-right-VcqbcF",
                    })
                  : null,
              ],
            })
          : null,
      ],
    }),
  });
});
const eR = u.PA(function (e) {
  const { option, className } = e;
  const { extra, label } = option;
  const l = h.h(eC.jV);
  const c = h.h(v.V);
  const d = h.h(eN.a);
  const { videoGeneratorManager } = c;
  const {
    metadata: { models },
    data: { durationMs, resolution },
  } = videoGeneratorManager;
  const x = i.useMemo(
    () => models.find((e) => e.key === option.value.toString()),
    [models, option.value],
  );
  const _ = i.useMemo(() => {
    var e;
    var t;
    if (
      (e =
        x == null ||
        (t = x.fields.find((e) => e.type === ew.pH.Resolution)) == null
          ? undefined
          : t.values) != null
    ) {
      return e;
    }
    return [];
  }, [x == null ? undefined : x.fields]);
  const resolutionLabel = i.useMemo(() => {
    var e;
    if (_.length > 1) {
      if ((e = _.find((e) => e === resolution)) != null) {
        return e;
      }
      return _[0];
    }
    return "";
  }, [_, resolution]);
  const sceneOptions = eg.I({
    scene: eb.Sk.VideoModelSwitch,
    modelReqKey: option.value.toString(),
    videoDuration: durationMs,
    resolution,
  });
  const onMembershipClick = i.useCallback(
    () =>
      eA._(function* () {
        (yield l.getInstance()).showVIPSubscribeModal({
          sceneOptions: a._({}, sceneOptions),
          source: "generator_model_selection_tooltip",
          resolveVipInterceptionContext: true,
          customReportParams: {
            source: "generator_model_selection_tooltip",
            trigger_model_key: option.value,
            trigger_model_name: label,
          },
        });
        videoGeneratorManager.reportManager.reportAdPlacement(
          sceneOptions,
          "generator_model_selection_tooltip",
          "click_to_vip_page",
        );
      })(),
    [l, videoGeneratorManager, sceneOptions, label],
  );
  i.useEffect(() => {
    videoGeneratorManager.reportManager.reportAdPlacement(
      sceneOptions,
      "generator_model_selection_tooltip",
      "show",
    );
  }, [videoGeneratorManager, sceneOptions]);
  const { text } = eP.$({
    scene: eb.Sk.VideoModelSwitch,
    sceneOptions,
    commercialStrategyService: d,
  });
  if (text) {
    return o.jsx(eT, {
      className,
      scene: eb.Sk.VideoModelSwitch,
      sceneOptions,
      resolutionLabel,
      onMembershipClick,
    });
  }
  return o.jsx("div", {
    className,
    children:
      typeof extra.description === "function"
        ? extra.description(option)
        : extra.description,
  });
});
const eS = u.PA(function (e) {
  const { variant } = i.useContext(er.R);
  const { videoGeneratorManager } = h.h(v.V);
  const {
    metadata: { modelOptions, isModelListLoading, models },
    data: { modelKey, model, durationMs, resolution },
    modelManager,
  } = videoGeneratorManager;
  const { switchModel } = modelManager;
  const b = h.h(m.c);
  const instantiationService = h.h(ej._);
  const y = ey.dK();
  const k = i.useMemo(() => {
    if (variant !== "canvas") {
      return modelOptions;
    }
    var e = new Set(models.filter((e) => e.isDraft).map((e) => e.key));
    return modelOptions.filter((t) => !e.has(t.value));
  }, [modelOptions, models, variant]);
  const A = i.useMemo(
    () => [
      {
        label: p.Ay.t("web_new_video_settings_button_content", {}, "加载中"),
        value: "",
        extra: {},
      },
    ],
    [],
  );
  const C = i.useMemo(
    () => ({
      disabled: isModelListLoading,
    }),
    [isModelListLoading],
  );
  const w = i.useMemo(
    () =>
      k.map((e) =>
        r._(a._({}, e), {
          extra: r._(a._({}, e.extra), {
            hoverDescription: b.hasLogin
              ? (e) =>
                  o.jsx(h.Z, {
                    instantiationService,
                    children: o.jsx(eR, {
                      option: e,
                    }),
                  })
              : undefined,
          }),
        }),
      ),
    [k, b.hasLogin, instantiationService],
  );
  const N = P_2({
    currentValue: modelKey,
    options: w,
    onAllowedChange: (modelKey_1) => {
      var a;
      var r = models.find((e) => e.key === modelKey_1);
      switchModel(modelKey_1);
      if ((a = e.onDraftModelSwitch) != null) {
        a.call(
          e,
          (r == null ? undefined : r.isDraft) &&
            modelKey_1 !== modelKey &&
            videoGeneratorManager.data.modelKey === modelKey_1
            ? {
                modelKey: modelKey_1,
                accountScope: b.hasLogin ? b.userProfile.uid : "guest",
              }
            : undefined,
        );
      }
    },
    getSceneOptions: (modelReqKey) =>
      eg.I({
        scene: eb.Sk.VideoModelSwitch,
        modelReqKey,
        videoDuration: durationMs,
        resolution,
      }),
    onBlocked: (e) => {
      videoGeneratorManager.reportManager.reportAdPlacement(
        e,
        "vip_right_model_select",
        "click_to_vip_page",
      );
    },
  });
  return o.jsx(M.F, {
    content: model == null ? undefined : model.name,
    children: o.jsx(ek.W, {
      triggerProps: C,
      optionCommonCommercialWrapperProps: {
        isVipTooltipDisabled: y !== "v0",
      },
      options: isModelListLoading ? A : w,
      value: modelKey,
      onChange: N,
    }),
  });
});
const eI = u.PA(function () {
  const { compact } = i.useContext(er.R);
  const { videoGeneratorManager } = h.h(v.V);
  const { featureManager, multiFramesManager } = videoGeneratorManager;
  const {
    data: { isMultiFramesEngaged },
  } = featureManager;
  const {
    data: { frameResources },
    resetFrames,
  } = multiFramesManager;
  const c = i.useCallback(() => {
    eF.a.confirm({
      title: p.Ay.t("multiframe_clearcheck_title", {}, "确认全部清空"),
      content: p.Ay.t(
        "multiframe_clearcheck_text",
        {},
        "清空后的智能多帧将无法找回",
      ),
      onOk: resetFrames,
    });
  }, [resetFrames]);
  const d = i.useMemo(
    () =>
      o.jsx(W.Pwl, {
        className: "icon-TbSwLw",
      }),
    [],
  );
  const u = p.Ay.t("multiframe_clear", {}, "全部清空");
  if (isMultiFramesEngaged && frameResources.length) {
    return o.jsx(M.F, {
      content: u,
      children: o.jsx("div", {
        className: _E("multi-frames-reset-button-container-abZRn7", {
          "icon-only-ma0__A": compact,
        }),
        children: o.jsx(eV.M, {
          "aria-label": compact ? u : undefined,
          className: "multi-frames-reset-button-ejBaU5",
          icon: d,
          onClick: c,
          children: compact ? null : u,
        }),
      }),
    });
  }
  return null;
});
const eO = "trigger-wrap-Bozi3_";
const ez = "task-entry-button-nTzVX3";
const eL = "task-entry-edit-icon-H7A4hd";
const eH = "task-status-icon-Pd3Abi";
const eB = "task-title-jQhSfG";
const eZ = "task-title-row-RhWkRh";
const eK = "task-retry-button-u9YjnB";
const eG = "task-content-Cgf97X";
const eU = "task-header-qbZlCs";
const eq = "task-header-main-kp3cyA";
const useEX = (e) => {
  var { anchorRef } = e;
  var [n, setN] = i.useState();
  i.useEffect(() => {
    var anchorRef_current = anchorRef.current;
    if (anchorRef_current && typeof document !== "undefined") {
      var n = () => {
        var t = anchorRef_current.getBoundingClientRect();
        setN({
          left: t.left + t.width / 2,
          top: t.top + t.height / 2 - 20,
        });
      };
      n();
      window.addEventListener("resize", n);
      window.addEventListener("scroll", n, true);
      return () => {
        window.removeEventListener("resize", n);
        window.removeEventListener("scroll", n, true);
      };
    }
  }, [anchorRef]);
  if (!n || typeof document === "undefined") {
    return null;
  }
  return e$.createPortal(
    o.jsx("span", {
      className: "drop-card-YORtos",
      style: n,
      "aria-hidden": true,
      children: o.jsx("span", {
        className: "drop-card-inner-COn0pT",
        children: o.jsx(W.ZcK, {}),
      }),
    }),
    document.body,
  );
};
const useEQ = (e) => {
  var { originalPrompt, tooltipTriggerProps } = e;
  var [a, setA] = i.useState(false);
  return o.jsxs("span", {
    className: "task-description-GlOfN_",
    children: [
      o.jsx("span", {
        className: "task-description-label-uFIo7S",
        children: p.Ay.t("prompt_optimize_default", {}, "原始："),
      }),
      o.jsx(b.A, {
        content: o.jsx("span", {
          className: "task-description-tooltip-content-dx2Hfo",
          children: originalPrompt,
        }),
        disabled: !a,
        position: "top",
        showArrow: false,
        popupHoverStay: false,
        triggerProps: tooltipTriggerProps,
        children: o.jsx(eJ.d, {
          className: "task-description-text-dMgCVa",
          onEllipsisChange: setA,
          children: originalPrompt,
        }),
      }),
    ],
  });
};
const eY = {
  mouseLeaveDelay: 0,
  popupAlign: {
    top: 8,
  },
};
const e0 = (e) => {
  var t;
  var n;
  if (e.status === "enhancing") {
    return p.Ay.t("prompt_optimizing", {}, "优化中...");
  }
  if (e.status === "failed") {
    return p.Ay.t("prompt_optimize_fail", {}, "优化失败");
  }
  return p.Ay.t(
    "prompt_optimize_task",
    {
      string: (t = e.displayNo) != null ? t : "",
    },
    "优化方案".concat((n = e.displayNo) != null ? n : ""),
  );
};
const e1 = () => p.Ay.t("prompt_optimize_cancel", {}, "取消优化");
const e2 = (e) => {
  if (e.status === "enhancing") {
    return e1();
  }
  return p.Ay.t("prompt_optimize_remove", {}, "移除优化");
};
const e5 = u.PA(function (e) {
  const { onTaskSelected } = e;
  const { promptEnhancementManager } = h.h(v.V).videoGeneratorManager;
  const {
    canLoadPreviousTasks,
    displayTasks,
    hasStartablePrompt,
    isClearingTasks,
    isMaxParallelEnhancement,
    isLoadingPreviousTasks,
    loadPreviousTasks,
    retryTask,
    startEnhancement,
  } = promptEnhancementManager;
  const xRef = i.useRef(null);
  const _Ref = i.useRef();
  const gRef = i.useRef(false);
  const jRef = i.useRef(displayTasks.length);
  i.useEffect(() => {
    var xRef_current = xRef.current;
    if (xRef_current) {
      var t = _Ref.current;
      if (t && !isLoadingPreviousTasks) {
        xRef_current.scrollTop =
          xRef_current.scrollHeight - t.scrollHeight + t.scrollTop;
        _Ref.current = undefined;
        jRef.current = displayTasks.length;
        return;
      }
      var n = jRef.current !== displayTasks.length;
      jRef.current = displayTasks.length;
      if (!gRef.current || n) {
        xRef_current.scrollTop = xRef_current.scrollHeight;
        gRef.current = true;
      }
    }
  }, [displayTasks.length, isLoadingPreviousTasks]);
  const y = !hasStartablePrompt || isMaxParallelEnhancement || isClearingTasks;
  let k = p.Ay.t("prompt_optimize_noprompt", {}, "请先添加提示词");
  if (isClearingTasks) {
    k = p.Ay.t("prompt_optimize_clearing", {}, "正在清空任务");
  } else if (isMaxParallelEnhancement) {
    k = p.Ay.t(
      "prompt_optimize_max_parallel_error",
      {},
      "超过最大数量限制，请等其他任务完成后再试试",
    );
  }
  return o.jsxs("div", {
    className: "task-popover-zVCpxp",
    children: [
      o.jsxs("div", {
        className: "popover-header-RnwPgp",
        children: [
          o.jsx("div", {
            className: "popover-title-omdl8s",
            children: p.Ay.t("prompt_optimize", {}, "优化提示词"),
          }),
          o.jsx("button", {
            type: "button",
            className: "clear-tasks-button-O_BsB3",
            disabled: isClearingTasks,
            onClick: (e) => {
              e.stopPropagation();
              promptEnhancementManager.clearTasks();
            },
            children: isClearingTasks
              ? p.Ay.t("prompt_optimize_clear_loading", {}, "loading")
              : p.Ay.t("prompt_optimize_all_clean", {}, "全部清空"),
          }),
        ],
      }),
      o.jsxs("div", {
        ref: xRef,
        className: "task-list-NlbL9W",
        onScroll: () => {
          var xRef_current = xRef.current;
          if (
            xRef_current &&
            !(xRef_current.scrollTop > 16) &&
            canLoadPreviousTasks &&
            !isLoadingPreviousTasks
          ) {
            _Ref.current = {
              scrollHeight: xRef_current.scrollHeight,
              scrollTop: xRef_current.scrollTop,
            };
            loadPreviousTasks();
          }
        },
        children: [
          isLoadingPreviousTasks
            ? o.jsx("div", {
                className: "task-list-top-loading-eN9nnH",
                children: o.jsx(eW.I, {
                  size: 16,
                }),
              })
            : null,
          displayTasks.map((e) =>
            o.jsxs(
              "div",
              {
                className: _E("task-item-kq7CC5", {
                  "clickable-aR0vAl": e.status === "succeeded",
                  "loading-pKv7gV": e.status === "enhancing",
                  "failed-gcigyy": e.status === "failed",
                }),
                children: [
                  e.status === "failed"
                    ? o.jsx("div", {
                        className: "task-body-vFQGwD",
                        children: o.jsxs("span", {
                          className: eG,
                          children: [
                            o.jsx("span", {
                              className: eU,
                              children: o.jsxs("span", {
                                className: eq,
                                children: [
                                  o.jsx("span", {
                                    className: eH,
                                    children: o.jsx(W.G_L, {}),
                                  }),
                                  o.jsxs("span", {
                                    className: eZ,
                                    children: [
                                      o.jsx("span", {
                                        className: eB,
                                        children: e0(e),
                                      }),
                                      o.jsx("button", {
                                        type: "button",
                                        className: eK,
                                        onClick: (t) => {
                                          t.stopPropagation();
                                          retryTask(e.peTaskId);
                                        },
                                        children: p.Ay.t(
                                          "prompt_optimize_retry",
                                          {},
                                          "重试",
                                        ),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                            o.jsx(useEQ, {
                              originalPrompt: e.originalPrompt,
                              tooltipTriggerProps: eY,
                            }),
                          ],
                        }),
                      })
                    : o.jsx("button", {
                        type: "button",
                        className: "task-use-button-vBiCW0",
                        "aria-disabled": e.status !== "succeeded",
                        tabIndex: e.status === "succeeded" ? undefined : -1,
                        onClick: (a) => {
                          a.stopPropagation();
                          if (e.status === "succeeded") {
                            promptEnhancementManager.useTask(e.peTaskId);
                            if (onTaskSelected != null) {
                              onTaskSelected();
                            }
                          }
                        },
                        children: o.jsxs("span", {
                          className: eG,
                          children: [
                            o.jsx("span", {
                              className: eU,
                              children: o.jsxs("span", {
                                className: eq,
                                children: [
                                  o.jsx("span", {
                                    className: eH,
                                    children:
                                      e.status === "enhancing"
                                        ? o.jsx(eD.w, {
                                            size: 16,
                                          })
                                        : o.jsx(W.tuV, {}),
                                  }),
                                  o.jsxs("span", {
                                    className: eZ,
                                    children: [
                                      o.jsx("span", {
                                        className: eB,
                                        children: e0(e),
                                      }),
                                      o.jsx("span", {
                                        "aria-hidden": "true",
                                        className: _E(
                                          eK,
                                          "task-retry-button-placeholder-sc06p2",
                                        ),
                                        children: p.Ay.t(
                                          "prompt_optimize_retry",
                                          {},
                                          "重试",
                                        ),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                            o.jsx(useEQ, {
                              originalPrompt: e.originalPrompt,
                              tooltipTriggerProps: eY,
                            }),
                          ],
                        }),
                      }),
                  o.jsx(b.A, {
                    content: e2(e),
                    disabled: e.status !== "enhancing",
                    position: "top",
                    showArrow: false,
                    popupHoverStay: false,
                    triggerProps: eY,
                    children: o.jsx("button", {
                      type: "button",
                      className: "task-remove-button-Yz8gEt",
                      "aria-label": e2(e),
                      onClick: (t) => {
                        t.stopPropagation();
                        promptEnhancementManager.removeTask(e.peTaskId);
                      },
                      children: o.jsx(W.cOJ, {}),
                    }),
                  }),
                ],
              },
              e.peTaskId,
            ),
          ),
        ],
      }),
      o.jsx("div", {
        className: "fixed-menu-FK7QgD",
        children: o.jsx(b.A, {
          content: k,
          disabled: !y,
          position: "top",
          showArrow: false,
          triggerProps: {
            className: "add-task-tooltip-TO129f",
            popupAlign: {
              top: 8,
            },
          },
          children: o.jsx("span", {
            className: "add-task-tooltip-anchor-CgB1XC",
            children: o.jsxs("button", {
              type: "button",
              className: "add-task-button-OxD2QF",
              disabled: y,
              onClick: (e) => {
                e.stopPropagation();
                startEnhancement();
              },
              children: [
                o.jsx(W.xZp, {
                  size: 16,
                }),
                o.jsx("span", {
                  children: p.Ay.t("prompt_optimize_add", {}, "添加优化"),
                }),
              ],
            }),
          }),
        }),
      }),
    ],
  });
});
const e3 = u.PA(function () {
  const e = h.h(v.V);
  const { id } = i.useContext(eE.b);
  const { promptEnhancementManager, reportManager } = e.videoGeneratorManager;
  const {
    contentGeneratorManager: { visibleContentGeneratorInstance },
  } = e;
  const {
    canShowEntry,
    canShowTaskEntry,
    completedTaskCountText,
    hasAcceptedTask,
    hasStartablePrompt,
    isGuideBadgeDismissed,
    isEnhancing,
    isClearingTasks,
    isMaxParallelEnhancement,
    showGuide,
    showPlusOne,
    startEnhancement,
    dismissGuide,
    restoreAcceptedTaskOriginalPrompt,
  } = promptEnhancementManager;
  const w =
    showPlusOne &&
    (visibleContentGeneratorInstance == null
      ? undefined
      : visibleContentGeneratorInstance.id) === id;
  const [N, setN] = i.useState(false);
  const [T, setT] = i.useState(false);
  const [S, setS] = i.useState(showGuide);
  const [F, setF] = i.useState(false);
  const [E, setE] = i.useState(false);
  const ORef = i.useRef(false);
  const zRef = i.useRef(null);
  i.useEffect(() => {
    setS(showGuide);
  }, [showGuide]);
  const H = i.useCallback((e) => {
    ORef.current = e;
    setE(e);
  }, []);
  const onTaskSelected = i.useCallback(() => {
    H(false);
    setF(false);
  }, [H]);
  const Z = i.useMemo(() => {
    if (isGuideBadgeDismissed) {
      return o.jsx(W.ZcK, {});
    }
    return o.jsx(W.Z4h, {});
  }, [isGuideBadgeDismissed]);
  const K = i.useMemo(
    () =>
      o.jsx(e5, {
        onTaskSelected,
      }),
    [onTaskSelected],
  );
  const G = S && !N && !isEnhancing;
  let U = p.Ay.t("prompt_optimize", {}, "优化提示词");
  if (hasStartablePrompt) {
    if (isClearingTasks) {
      U = p.Ay.t("prompt_optimize_clearing", {}, "正在清空任务");
    } else if (isMaxParallelEnhancement) {
      U = p.Ay.t(
        "prompt_optimize_max_parallel_error",
        {},
        "超过最大数量限制，请等其他任务完成后再试试",
      );
    } else if (S) {
      U = p.Ay.t("prompt_optimize_try", {}, "试一试优化提示词");
    }
  } else {
    U = p.Ay.t("prompt_optimize_noprompt", {}, "请先添加提示词");
  }
  if (canShowEntry || canShowTaskEntry) {
    if (canShowTaskEntry) {
      if (hasAcceptedTask) {
        return o.jsx("div", {
          ref: zRef,
          className: eO,
          children: o.jsx(b.A, {
            content: e1(),
            position: "top",
            showArrow: false,
            popupHoverStay: false,
            triggerProps: eY,
            children: o.jsxs("button", {
              type: "button",
              className: _E(ez, "accepted-entry-button-kKzFCi"),
              disabled: isClearingTasks,
              "aria-label": e1(),
              onClick: restoreAcceptedTaskOriginalPrompt,
              children: [
                o.jsx(W.ZcK, {
                  className: eL,
                }),
                o.jsx(W.gzW, {
                  className: "task-entry-close-icon-V1K7KX",
                }),
              ],
            }),
          }),
        });
      }
      return o.jsxs("div", {
        ref: zRef,
        className: eO,
        children: [
          w
            ? o.jsx(useEX, {
                anchorRef: zRef,
              })
            : null,
          o.jsx(_.I, {
            trigger: ["click"],
            content: K,
            popupVisible: F,
            onVisibleChange: (e) => {
              if (e || !ORef.current) {
                setF(e);
                if (e && !F) {
                  reportManager.reportPromptOptimizeAction("show");
                }
              }
            },
            triggerProps: {
              position: "top",
              className: "task-popover-trigger-oBemgM",
              onClickOutside: () => {
                H(false);
                setF(false);
              },
              clickToClose: false,
              mouseLeaveToClose: !E,
              popupAlign: {
                top: L.vw,
                bottom: L.vw,
              },
              style: {
                padding: 0,
              },
            },
            children: o.jsx(b.A, {
              content: p.Ay.t("prompt_optimize", {}, "优化提示词"),
              position: "top",
              showArrow: false,
              popupHoverStay: false,
              popupVisible: !F && T,
              triggerProps: eY,
              children: o.jsxs("button", {
                type: "button",
                className: _E(ez, {
                  "active-a3Lbma": F,
                }),
                disabled: isClearingTasks,
                "aria-label": p.Ay.t("prompt_optimize", {}, "优化提示词"),
                onClick: () => {
                  setT(false);
                  H(true);
                  setF(true);
                },
                onMouseEnter: () => {
                  if (!F) {
                    setT(true);
                  }
                },
                onMouseLeave: () => {
                  setT(false);
                },
                children: [
                  o.jsx(W.ZcK, {
                    className: eL,
                  }),
                  o.jsx("span", {
                    className: "task-entry-status-AB04Xa",
                    children: isEnhancing
                      ? o.jsx(eD.w, {
                          className: "task-entry-loading-icon-X9lKLc",
                          size: 16,
                        })
                      : completedTaskCountText,
                  }),
                ],
              }),
            }),
          }),
        ],
      });
    }
    return o.jsx(b.A, {
      content: U,
      position: "top",
      showArrow: S && !N,
      popupVisible: S || N,
      onVisibleChange: (e) => {
        if (!S) {
          setN(e);
          if (!e) {
            dismissGuide();
          }
        }
      },
      triggerProps: {
        popupAlign: {
          top: 8,
        },
        style: {
          pointerEvents: G ? "none" : undefined,
        },
      },
      children: o.jsxs("div", {
        ref: zRef,
        className: eO,
        onMouseEnter: () => {
          if (!S) {
            setN(true);
          }
        },
        onMouseLeave: () => {
          setN(false);
          setS(false);
          dismissGuide();
        },
        children: [
          w
            ? o.jsx(useEX, {
                anchorRef: zRef,
              })
            : null,
          o.jsx(k.E, {
            active: N || S,
            className: "prompt-enhancement-button-GloSb0",
            icon: Z,
            disabled:
              !hasStartablePrompt ||
              isClearingTasks ||
              isMaxParallelEnhancement,
            onClick: startEnhancement,
            "aria-label": p.Ay.t("prompt_optimize", {}, "优化提示词"),
          }),
        ],
      }),
    });
  }
  return null;
});
var e8 = i.memo(function (e) {
  const [draftModelSwitchRequest, setDraftModelSwitchRequest] = i.useState();
  return o.jsxs(
    s.U,
    r._(a._({}, e), {
      children: [
        o.jsx(l.R, {}),
        o.jsx(eS, {
          onDraftModelSwitch: setDraftModelSwitchRequest,
        }),
        o.jsx(et, {}),
        o.jsx(P_1, {}),
        o.jsx(G, {
          draftModelSwitchRequest,
        }),
        o.jsx(ea, {}),
        o.jsx(Y, {}),
        o.jsx(ei, {}),
        o.jsx(e_, {}),
        o.jsx(d.z, {}),
        o.jsx(eI, {}),
        o.jsx(e3, {}),
      ],
    }),
  );
});
export { e8 as s };
