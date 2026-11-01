import a from "oa";
import o from "bk";
import i from "z8";
import r from "bT";
import l from "UOA";
import s from "SX";
import c from "ED";
import u from "Qey";
import d from "yw";
import m from "xm3";
import p from "wF";
import h from "lBB";
import _ from "n3Q";
import g from "iPS";
import v from "mZ";
import x from "GI";
import j from "tq";
import y from "qa";
import f from "M9I";
import M from "YU";
import k from "Du8";
import C from "jDU";
import A from "gu";
import T from "GUP";
import N from "BV";
import R from "JDp";
import P from "d53";
import S from "gC";
import V from "n3";
import F from "qp9";
import I from "NY";
import W from "z7R";
import $ from "EYk";
import O from "pr";
import E from "xb";
import z from "kDD";
import "Vx";
import Z from "Ix";
import X from "BXZ";
import Q from "Ia4";
import en from "L0T";
import eo from "hA6";
import ei from "oJV";
const b = c.PA(function () {
  let e;
  let n;
  const { imageGeneratorManager } = p.h(m.V);
  const { imageBackgroundMode, imageBackgroundModeOptions } =
    imageGeneratorManager.data;
  const [l, setL] = r.useState(false);
  const c = r.useCallback((e) => {
    setL(e);
  }, []);
  if (!imageBackgroundMode || imageBackgroundModeOptions.length === 0) {
    return null;
  }
  const b =
    imageBackgroundMode === "auto"
      ? u.Ay.t("web_image_params_background_auto_summary", {}, "自动背景")
      : (e =
            (n = imageBackgroundModeOptions.find((e) => {
              var { value } = e;
              return value === imageBackgroundMode;
            })) == null
              ? undefined
              : n.label) != null
        ? e
        : "";
  return i.jsx(_.I, {
    className: "popover-qlFWsN",
    content: i.jsx(g.Y, {
      className: "panel-jN1puA",
      children: i.jsx(v.R, {
        className: "field-xyg1wi",
        title: u.Ay.t("octo_canvas_video_matting_background", {}, "背景"),
        children: i.jsx(x.h, {
          className: "radio-group-y3IBK7",
          options: imageBackgroundModeOptions,
          value: imageBackgroundMode,
          onChange: imageGeneratorManager.changeImageBackgroundMode,
        }),
      }),
    }),
    popupVisible: l,
    onVisibleChange: c,
    children: i.jsx(h.E, {
      active: l,
      "aria-expanded": l,
      icon: i.jsx(d.M5n, {
        "aria-hidden": true,
        size: 16,
      }),
      children: i.jsx("span", {
        className: "button-content-oPCSK3",
        children: b,
      }),
    }),
  });
});
const w = c.PA(function (e) {
  let n;
  let t;
  const {
    aspectRatioSupported,
    aspectRatioText,
    compactContentVisible = false,
    qualityText,
    resolutionText,
  } = e;
  const { compact } = r.useContext(k.R);
  const { imageGeneratorManager } = p.h(m.V);
  const {
    data: {
      largeImageInfo,
      isAspectRatioAuto,
      currentSelectedImageModel,
      params,
    },
  } = imageGeneratorManager;
  const b = C.l({
    scene: A.Sk.ImageUhd,
    resolutionType: largeImageInfo.resolutionType,
    modelReqKey:
      (n =
        currentSelectedImageModel == null
          ? undefined
          : currentSelectedImageModel.key) != null
        ? n
        : "high_aes_general_v20:general_v2.0",
    imageInputNum: T.m(
      (t = params.abilityList) == null ? undefined : t.map((e) => e.blendModel),
    ),
  });
  const j = r.useMemo(
    () =>
      resolutionText &&
      i.jsxs(i.Fragment, {
        children: [
          i.jsx("div", {
            className: P.A.divider,
          }),
          i.jsx(N.n, {
            ignoreClickIntercept: true,
            component: null,
            sceneOptions: b,
            children: i.jsx(R.D, {
              text: resolutionText,
            }),
          }),
        ],
      }),
    [resolutionText, b],
  );
  const y = r.useMemo(
    () =>
      qualityText &&
      i.jsxs(i.Fragment, {
        children: [
          i.jsx("div", {
            className: P.A.divider,
          }),
          qualityText,
        ],
      }),
    [qualityText],
  );
  if (aspectRatioSupported) {
    if (compact && compactContentVisible) {
      return i.jsxs(i.Fragment, {
        children: [j, y],
      });
    }
    if (isAspectRatioAuto) {
      return i.jsxs("span", {
        className: P.A.buttonText,
        children: [u.Ay.t("web_new_video_image_ratio_auto", {}, "自动匹配"), y],
      });
    }
    return i.jsxs("span", {
      className: P.A.buttonText,
      children: [aspectRatioText, j, y],
    });
  }
  return null;
});
const L = r.memo(function (e) {
  const {
    scene,
    sceneOptions,
    modelName,
    resolutionLabel,
    className,
    onMembershipClick,
  } = e;
  const c = p.h($.a);
  const { text, isTextLink } = z.$({
    scene,
    sceneOptions,
    commercialStrategyService: c,
  });
  const h = r.useCallback(
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
  return i.jsx(S.I, {
    source: V.HH.ClickGenerate,
    children: i.jsxs("div", {
      className: E("model-limit-free-info-VXfph4", className),
      children: [
        modelName
          ? i.jsx("span", {
              className: "model-name-ywx6yu",
              children: modelName,
            })
          : null,
        resolutionLabel
          ? i.jsx("span", {
              className: "resolution-label-_PJBDC",
              children: resolutionLabel,
            })
          : null,
        text
          ? i.jsxs("span", {
              className: E("membership-text-TIaUV1", {
                "is-free-for-vip-HX4lXv": isTextLink,
              }),
              role: isTextLink ? "button" : undefined,
              tabIndex: isTextLink ? 0 : undefined,
              onKeyDown: O.q,
              onClick: h,
              children: [
                i.jsx("span", {
                  className: "inner-text-mGw8h0",
                  children: text,
                }),
                isTextLink
                  ? i.jsx(d.Vjx, {
                      className: "chevron-right-XfT2SC",
                    })
                  : null,
              ],
            })
          : null,
      ],
    }),
  });
});
const B = c.PA(function (e) {
  let n;
  let t;
  const { className } = e;
  const o = p.h($.a);
  const { imageGeneratorManager } = p.h(m.V);
  const {
    data: { largeImageInfo, resolutionOptions, params },
  } = imageGeneratorManager;
  const d = p.h(W.jV);
  const { modelOptions } = imageGeneratorManager.metadata;
  const modelName = r.useMemo(() => {
    var e;
    return (
      ((e = modelOptions.find((e) => e.value === params.model)) == null
        ? undefined
        : e.label) || ""
    );
  }, [modelOptions, params.model]);
  const resolutionLabel = r.useMemo(() => {
    var e;
    return (
      ((e = resolutionOptions.find(
        (e) => e.value === largeImageInfo.resolutionType,
      )) == null
        ? undefined
        : e.label) || ""
    ).toString();
  }, [resolutionOptions, largeImageInfo.resolutionType]);
  const v = C.l({
    scene: A.Sk.ImageUhd,
    modelReqKey: params.model,
    resolutionType: largeImageInfo.resolutionType,
    abilityList:
      (n = params.abilityList) == null ? undefined : n.map((e) => e.blendModel),
    imageInputNum: T.m(
      (t = params.abilityList) == null ? undefined : t.map((e) => e.blendModel),
    ),
  });
  const x = r.useMemo(
    () =>
      o.isBenefitExistsInFreeConfig({
        scene: A.Sk.ImageUhd,
        sceneOptions: v,
      }),
    [o, v],
  );
  const b = r.useCallback(
    () =>
      I._(function* () {
        (yield d.getInstance()).showVIPSubscribeModal({
          sceneOptions: v,
          resolveVipInterceptionContext: true,
          customReportParams: {
            source: "generator_parameter_selection_tooltip",
          },
        });
        imageGeneratorManager.reportManager.reportAdPlacement(
          v,
          "generator_parameter_selection_tooltip",
          "click_to_vip_page",
        );
      })(),
    [d, imageGeneratorManager, v],
  );
  r.useEffect(() => {
    imageGeneratorManager.reportManager.reportAdPlacement(
      v,
      "generator_parameter_selection_tooltip",
      "show",
    );
  }, [imageGeneratorManager, v]);
  if (x) {
    return i.jsx(L, {
      className,
      scene: A.Sk.ImageUhd,
      sceneOptions: v,
      modelName,
      resolutionLabel,
      onMembershipClick: b,
    });
  }
  return null;
});
const U = "custom";
const q = c.PA(function (e) {
  let n;
  let t;
  const { customOptionDisabled, customOptionVisible, value, onChange } = e;
  const { imageGeneratorManager } = p.h(m.V);
  const {
    data: { resolutionOptions, params },
  } = imageGeneratorManager;
  const b = r.useMemo(() => {
    var e = resolutionOptions.map((e) =>
      o._(a._({}, e), {
        label: e.value.toUpperCase(),
      }),
    );
    if (customOptionVisible) {
      return [
        ...e,
        {
          disabled: customOptionDisabled,
          label: u.Ay.t("web_canva_agent_param_setting_manual", {}, "自定义"),
          value: U,
        },
      ];
    }
    return e;
  }, [customOptionDisabled, customOptionVisible, resolutionOptions]);
  const j = C.l({
    scene: A.Sk.ImageUhd,
    modelReqKey: params.model,
    abilityList:
      (n = params.abilityList) == null ? undefined : n.map((e) => e.blendModel),
    imageInputNum: T.m(
      (t = params.abilityList) == null ? undefined : t.map((e) => e.blendModel),
    ),
  });
  const renderOption = r.useCallback(
    (e, n) => {
      var t =
        e.value === U
          ? e.label
          : i.jsx(N.n, {
              ignoreClickIntercept: true,
              component: null,
              sceneOptions: o._(a._({}, j), {
                resolutionType: e.value,
              }),
              children: i.jsx(F.I, {
                option: e,
              }),
            });
      return i.jsx(S.I, {
        className: "option-container-dAa4l3",
        source: V.HH.ClickGenerate,
        children: t,
      });
    },
    [j],
  );
  if (b.length === 0) {
    return null;
  }
  return i.jsxs(v.R, {
    title: u.Ay.t("web_new_choose_image_resolution", {}, "选择分辨率"),
    children: [
      i.jsx(x.h, {
        className: "resolution-radio-group-_9KtXA",
        options: b,
        renderOption,
        value,
        onChange,
      }),
      i.jsx(B, {}),
    ],
  });
});
const J = c.PA(function (e) {
  const { qualityText, resolutionSelection } = e;
  const l = y._(e, ["qualityText", "resolutionSelection"]);
  const { imageGeneratorManager } = p.h(m.V);
  const {
    data: { largeImageInfo, resolutionOptions, aspectRatio },
    metadata: { isModelSupportAspectRatio },
  } = imageGeneratorManager;
  const v = r.useMemo(
    () =>
      i.jsx(f.z, {
        aspectRatio,
        size: 16,
      }),
    [aspectRatio],
  );
  const x = r.useMemo(
    () => u.Ay.t("dreamina_image4_ratio_auto_1", {}, "Auto ratio"),
    [],
  );
  const aspectRatioText = r.useMemo(() => aspectRatio || x, [aspectRatio, x]);
  const j = resolutionSelection === U;
  const resolutionText = r.useMemo(() => {
    var e;
    if (j) {
      return u.Ay.t("web_canva_agent_param_setting_manual", {}, "自定义");
    }
    if (resolutionOptions.length !== 0) {
      if (
        (e = resolutionOptions.find(
          (e) => e.value === largeImageInfo.resolutionType,
        )) == null
      ) {
        return undefined;
      }
      return e.value.toUpperCase();
    }
  }, [j, largeImageInfo.resolutionType, resolutionOptions]);
  const content = r.useMemo(
    () =>
      [
        isModelSupportAspectRatio ? aspectRatioText : undefined,
        isModelSupportAspectRatio ? resolutionText : undefined,
        qualityText,
      ]
        .filter(Boolean)
        .join(" · "),
    [aspectRatioText, isModelSupportAspectRatio, qualityText, resolutionText],
  );
  return i.jsx(M.F, {
    content,
    children: i.jsx(
      h.E,
      o._(
        a._(
          {
            icon: v,
          },
          l,
        ),
        {
          children: i.jsx(w, {
            aspectRatioSupported: isModelSupportAspectRatio,
            aspectRatioText,
            qualityText,
            resolutionText,
          }),
        },
      ),
    ),
  });
});
const H = c.PA(function () {
  const { imageGeneratorManager } = p.h(m.V);
  const {
    data: {
      aspectRatio,
      aspectRatioOptions,
      isAspectRatioAuto,
      aspectRatioAutoToolTip,
    },
    changeAspectRatio,
  } = imageGeneratorManager;
  return i.jsx(v.R, {
    title: u.Ay.t("web_generator_box_select_ratio", {}, "选择比例"),
    children: i.jsx(Z.A, {
      disabled: !isAspectRatioAuto,
      content: aspectRatioAutoToolTip,
      children: i.jsx(X._, {
        responsive: true,
        options: aspectRatioOptions,
        value: aspectRatio,
        onChange: changeAspectRatio,
        disabled: isAspectRatioAuto,
      }),
    }),
  });
});
const K = c.PA(function (e) {
  const { onDimensionCommit } = e;
  const { imageGeneratorManager } = p.h(m.V);
  const {
    data: {
      largeImageInfo,
      aspectRatio,
      imageRangeConfig,
      isLockRatio,
      isDimensionDisabled,
      dimensionDisabledToolTip,
    },
    changeDimension,
    changeAspectRatioMaintain,
    reportManager: { reportInputAspectRatio },
  } = imageGeneratorManager;
  const { width, height } = largeImageInfo;
  const validate = r.useCallback(
    (e, n) => {
      var {
        lengthMultiple,
        maxAspectRatio,
        minPixelNum,
        minLength,
        maxLength,
        maxPixelNum,
      } = imageRangeConfig;
      if (e < minLength || n < minLength) {
        return u.Ay.t(
          "web_image_params_size_min_length",
          {
            minLength,
          },
          "宽或高不能低于 ".concat(minLength, " px"),
        );
      }
      if (e > maxLength || n > maxLength) {
        return u.Ay.t(
          "web_image_params_size_max_length",
          {
            maxLength,
          },
          "宽或高不能超过 ".concat(maxLength, " px"),
        );
      }
      if (lengthMultiple && e % lengthMultiple != 0) {
        return u.Ay.t(
          "web_image_params_size_width_multiple",
          {
            multiple: lengthMultiple,
          },
          "宽需为 ".concat(lengthMultiple, " 的倍数"),
        );
      }
      if (lengthMultiple && n % lengthMultiple != 0) {
        return u.Ay.t(
          "web_image_params_size_height_multiple",
          {
            multiple: lengthMultiple,
          },
          "高需为 ".concat(lengthMultiple, " 的倍数"),
        );
      }
      if (maxAspectRatio && Math.max(e, n) / Math.min(e, n) > maxAspectRatio) {
        return u.Ay.t(
          "web_image_params_size_max_aspect_ratio",
          {
            maxAspectRatio,
          },
          "长边与短边比例不能超过 ".concat(maxAspectRatio, ":1"),
        );
      }
      if (minPixelNum && e * n < minPixelNum) {
        return u.Ay.t(
          "web_image_params_size_min_pixels",
          {
            current: e * n,
            min: minPixelNum,
          },
          "总像素不得低于 ".concat(minPixelNum, "（当前 ").concat(e * n, "）"),
        );
      }
      if (e * n > maxPixelNum) {
        return u.Ay.t(
          "web_image_params_size_max_pixels",
          {
            current: e * n,
            max: maxPixelNum,
          },
          "总像素不得超过 ".concat(maxPixelNum, "（当前 ").concat(e * n, "）"),
        );
      }
    },
    [imageRangeConfig],
  );
  const aspectRatio_1 = r.useMemo(
    () => aspectRatio || "".concat(width, ":").concat(height),
    [aspectRatio, width, height],
  );
  const f = r.useMemo(() => {
    var [e, n] = aspectRatio_1.split(":").map(Number);
    if (e && n) {
      return e / n;
    }
    return 1;
  }, [aspectRatio_1]);
  const maxWidth = r.useMemo(() => {
    var e = isLockRatio
      ? Math.sqrt(imageRangeConfig.maxPixelNum * f)
      : imageRangeConfig.maxPixelNum / height;
    return Math.min(imageRangeConfig.maxLength, Math.floor(e));
  }, [imageRangeConfig, f, isLockRatio, height]);
  const maxHeight = r.useMemo(() => {
    var e = isLockRatio
      ? Math.sqrt(imageRangeConfig.maxPixelNum / f)
      : imageRangeConfig.maxPixelNum / width;
    return Math.min(imageRangeConfig.maxLength, Math.floor(e));
  }, [imageRangeConfig, f, isLockRatio, width]);
  const C = r.useCallback(
    (e, t) => {
      var a = e !== width || t !== height;
      changeDimension(e, t);
      if (a) {
        if (onDimensionCommit != null) {
          onDimensionCommit();
        }
      }
    },
    [changeDimension, height, onDimensionCommit, width],
  );
  return i.jsx(v.R, {
    title: u.Ay.t("web_new_reference_image_ratio", {}, "尺寸"),
    children: i.jsx(Z.A, {
      disabled: !isDimensionDisabled,
      content: dimensionDisabledToolTip,
      children: i.jsx(Q.F, {
        width,
        height,
        minWidth: imageRangeConfig.minLength,
        maxWidth,
        minHeight: imageRangeConfig.minLength,
        maxHeight,
        aspectRatio: aspectRatio_1,
        maintainAspectRatio: isLockRatio,
        validate,
        onChange: C,
        onAspectRatioMaintainChange: changeAspectRatioMaintain,
        disabled: isDimensionDisabled,
        onBlur: reportInputAspectRatio,
      }),
    }),
  });
});
const G = u.Ay.t(
  "web_image_params_quality_tooltip",
  {},
  "分辨率决定图片的像素尺寸，细节生成程度影响细节表现和生成耗时，不改变像素尺寸。",
);
const Y = r.memo(function (e) {
  const { options, value, onChange } = e;
  return i.jsx(v.R, {
    title: i.jsxs("span", {
      className: "title-kBlH90",
      children: [
        u.Ay.t("web_image_params_quality", {}, "细节生成程度"),
        i.jsx(Z.A, {
          className: "tooltip-Gh03zy",
          content: G,
          position: "top",
          style: {
            maxWidth: 320,
          },
          trigger: ["hover", "focus"],
          children: i.jsx("button", {
            type: "button",
            className: "info-button-XS1ZLV",
            "aria-label": G,
            children: i.jsx(d.G_L, {
              size: 12,
            }),
          }),
        }),
      ],
    }),
    children: i.jsx(x.h, {
      className: "quality-radio-group-aPucnk",
      options,
      value,
      onChange,
    }),
  });
});
const ee = c.PA(function (e) {
  const {
    customResolutionOptionDisabled,
    customResolutionOptionVisible,
    resolutionSelection,
    onResolutionChange,
    quality,
    qualityOptions,
    onQualityChange,
  } = e;
  const { variant } = r.useContext(k.R);
  const { imageGeneratorManager } = p.h(m.V);
  const {
    data: { currentSelectedImageModel, supportCustomResolution },
    metadata: {
      disableChooseHighWidth,
      hideCustomRatio,
      isModelSupportAspectRatio,
    },
  } = imageGeneratorManager;
  const j =
    variant === "default" && disableChooseHighWidth && !supportCustomResolution;
  const y = isModelSupportAspectRatio && !hideCustomRatio && !j;
  r.useEffect(() => {
    if (j) {
      imageGeneratorManager.normalizeDimensionByCurrentModel();
    }
  }, [
    j,
    imageGeneratorManager,
    currentSelectedImageModel == null
      ? undefined
      : currentSelectedImageModel.key,
  ]);
  return i.jsxs(g.Y, {
    className: "panel-g6370K",
    children: [
      isModelSupportAspectRatio
        ? i.jsxs(i.Fragment, {
            children: [
              i.jsx(H, {}),
              i.jsx(q, {
                customOptionDisabled: customResolutionOptionDisabled,
                customOptionVisible: customResolutionOptionVisible,
                value: resolutionSelection,
                onChange: onResolutionChange,
              }),
            ],
          })
        : null,
      y
        ? i.jsx(K, {
            onDimensionCommit: () => onResolutionChange("custom"),
          })
        : null,
      quality && qualityOptions.length > 0
        ? i.jsx(Y, {
            options: qualityOptions,
            value: quality,
            onChange: onQualityChange,
          })
        : null,
    ],
  });
});
const et = {
  high_aes_general_v50p_large: 5,
  jm_image_model_oa_it: 8,
  jm_image_model_lib_f: 8,
  jm_image_model_lib_s: 8,
  jm_image_model_yc_mj82: 8,
};
const ea = c.PA(function () {
  let e;
  let n;
  let t;
  let a;
  const [o, setO] = r.useState(false);
  const { imageGeneratorManager } = p.h(m.V);
  const {
    data: {
      aspectRatioOptions,
      currentSelectedImageModel,
      imageQuality,
      imageQualityOptions,
      isCustomResolutionSelected,
      isIntelligentAspectRatio,
      largeImageInfo,
      supportCustomResolution,
    },
    metadata: { isModelSupportAspectRatio },
    reportManager,
  } = imageGeneratorManager;
  const M = (e = j.S(largeImageInfo.resolutionType)) != null ? e : "1k";
  const resolutionSelection = isCustomResolutionSelected ? U : M;
  const C = Math.min(
    (n =
      et[
        (t =
          currentSelectedImageModel == null
            ? undefined
            : currentSelectedImageModel.key) != null
          ? t
          : ""
      ]) != null
      ? n
      : aspectRatioOptions.length,
    aspectRatioOptions.length,
  );
  const A = aspectRatioOptions.length > C;
  const T = A ? `calc((100% - ${(C - 1) * 2}px) / `.concat(C, ")") : undefined;
  const style = r.useMemo(
    () => ({
      "--aspect-ratio-options-count": "".concat(C),
      "--content-generator-aspect-ratio-option-width": T,
      "--content-generator-aspect-ratio-option-flex": T
        ? "0 0 ".concat(T)
        : undefined,
      "--content-generator-aspect-ratio-option-height": A
        ? `${60}px`
        : undefined,
      "--content-generator-aspect-ratio-row-gap": A ? `${2}px` : undefined,
      "--content-generator-aspect-ratio-content-gap": A ? `${12}px` : undefined,
      "--content-generator-aspect-ratio-label-height": A
        ? `${12}px`
        : undefined,
      width: A ? 400 : undefined,
    }),
    [C, A, T],
  );
  const qualityText =
    (a = imageQualityOptions.find((e) => {
      var { value } = e;
      return value === imageQuality;
    })) == null
      ? undefined
      : a.label;
  const onResolutionChange = r.useCallback(
    (e) => {
      if (e === U) {
        return void imageGeneratorManager.changeCustomResolutionSelected(true);
      }
      var n = resolutionSelection === U && e === M;
      imageGeneratorManager.changeResolution(e);
      if (n) {
        imageGeneratorManager.normalizeDimensionByCurrentModel();
      }
    },
    [M, imageGeneratorManager, resolutionSelection],
  );
  const w = r.useCallback(
    (e) => {
      setO(e);
      if (e) {
        reportManager.reportClickSettings();
      }
    },
    [reportManager],
  );
  if (isModelSupportAspectRatio) {
    return i.jsx(_.I, {
      className: en.A.popover,
      style,
      content: i.jsx(ee, {
        customResolutionOptionDisabled: isIntelligentAspectRatio,
        customResolutionOptionVisible:
          supportCustomResolution && isModelSupportAspectRatio,
        resolutionSelection,
        onResolutionChange,
        quality: imageQuality,
        qualityOptions: imageQualityOptions,
        onQualityChange: imageGeneratorManager.changeImageQuality,
      }),
      popupVisible: o,
      onVisibleChange: w,
      children: i.jsx(J, {
        active: o,
        qualityText,
        resolutionSelection,
      }),
    });
  }
  return null;
});
const er = r.memo(function (e) {
  let n;
  const { className } = e;
  const limitations = eo.n();
  const o =
    (n =
      limitations == null
        ? undefined
        : limitations.trialInfo.unitCreditFreeTrialPieces) != null
      ? n
      : 0;
  const showUnlimitedUnitCreditFreeTrial = !!(limitations == null
    ? undefined
    : limitations.trialInfo.isUnlimitedUnitCreditFreeTrial);
  const l = !!(limitations == null
    ? undefined
    : limitations.trialInfo.isCreditTrial);
  if (o > 0 || showUnlimitedUnitCreditFreeTrial || l) {
    return i.jsx(ei.X, {
      limitations,
      freeTrialPieces: o,
      freeTrialTipClassName: className,
      showUnlimitedUnitCreditFreeTrial,
    });
  }
  return null;
});
function el(e) {
  const { freeTrialPieces = 0, generateCount } = e;
  return freeTrialPieces > 0 && generateCount > freeTrialPieces;
}
function es(e) {
  const { freeTrialPieces, options } = e;
  if (!freeTrialPieces || freeTrialPieces <= 0) {
    return options;
  }
  return options.map((e) =>
    o._(a._({}, e), {
      disabled:
        e.disabled ||
        el({
          freeTrialPieces,
          generateCount: e.value,
        }),
    }),
  );
}
const ec = r.memo(function (e) {
  const { chargeByCount, generateCountOptions, value, onChange } = e;
  const l = eo.n();
  const s = l == null ? undefined : l.trialInfo.unitCreditFreeTrialPieces;
  const c = r.useMemo(
    () =>
      es({
        freeTrialPieces: s,
        options: generateCountOptions,
      }),
    [s, generateCountOptions],
  );
  const d = r.useMemo(
    () =>
      ((e) => {
        const { freeTrialPieces, generateCount, options } = e;
        if (
          el({
            freeTrialPieces,
            generateCount,
          })
        ) {
          return es({
            freeTrialPieces,
            options,
          }).reduce((acc, item) => {
            if (item.disabled) {
              return acc;
            }
            if (acc === undefined) {
              return item.value;
            }
            return Math.max(acc, item.value);
          }, undefined);
        }
      })({
        freeTrialPieces: s,
        generateCount: value,
        options: generateCountOptions,
      }),
    [s, generateCountOptions, value],
  );
  r.useEffect(() => {
    if (d !== undefined && d !== value) {
      onChange(d);
    }
  }, [d, onChange, value]);
  const m = r.useCallback(
    (generateCount) => {
      if (
        !el({
          freeTrialPieces: s,
          generateCount,
        })
      ) {
        onChange(generateCount);
      }
    },
    [s, onChange],
  );
  const title = i.jsxs("div", {
    className: "generate-count-title-ZwzftV",
    children: [
      i.jsx("span", {
        children: u.Ay.t("web_new_image_generate_count", {}, "生成数量"),
      }),
      chargeByCount ? i.jsx(er, {}) : null,
    ],
  });
  return i.jsx(v.R, {
    className: "generate-count-field-Kir3iH",
    title,
    children: i.jsx(x.h, {
      className: "generate-count-radio-group-CEbc8O",
      options: c,
      value: d != null ? d : value,
      onChange: m,
    }),
  });
});
c.PA(function () {
  const { variant } = r.useContext(k.R);
  const { imageGeneratorManager } = p.h(m.V);
  const {
    data: { commercialSceneOptions, effectiveGenerateCount },
    metadata: { chargeByCount, generateCountOptions, generateCountVisible },
    changeGenerateCount,
  } = imageGeneratorManager;
  if (
    variant !== "default" ||
    !generateCountVisible ||
    effectiveGenerateCount === undefined
  ) {
    return null;
  }
  const u = i.jsx(ec, {
    chargeByCount,
    generateCountOptions,
    value: effectiveGenerateCount,
    onChange: changeGenerateCount,
  });
  if (chargeByCount) {
    return i.jsx(N.n, {
      ignoreClickIntercept: true,
      component: null,
      sceneOptions: commercialSceneOptions,
      children: u,
    });
  }
  return u;
});
const eu = c.PA(function () {
  const [e, setE] = r.useState(false);
  const { imageGeneratorManager } = p.h(m.V);
  const {
    data: { commercialSceneOptions, effectiveGenerateCount },
    metadata: { chargeByCount, generateCountOptions, generateCountVisible },
    changeGenerateCount,
  } = imageGeneratorManager;
  const x = r.useMemo(
    () => u.Ay.t("web_new_image_generate_count", {}, "生成数量"),
    [],
  );
  const b = r.useMemo(() => i.jsx(d.t55, {}), []);
  const j = r.useCallback((e) => {
    setE(e);
  }, []);
  if (!generateCountVisible || effectiveGenerateCount === undefined) {
    return null;
  }
  const y = chargeByCount
    ? i.jsx(N.n, {
        ignoreClickIntercept: true,
        component: null,
        sceneOptions: commercialSceneOptions,
        children: i.jsx(er, {}),
      })
    : null;
  const f = u.Ay.t(
    "web_image_cnt_setting",
    {
      num: effectiveGenerateCount,
    },
    "".concat(effectiveGenerateCount, "张"),
  );
  const M = "".concat(x, ": ").concat(effectiveGenerateCount);
  const k = i.jsx(ec, {
    chargeByCount,
    generateCountOptions,
    value: effectiveGenerateCount,
    onChange: changeGenerateCount,
  });
  const C = chargeByCount
    ? i.jsx(N.n, {
        ignoreClickIntercept: true,
        component: null,
        sceneOptions: commercialSceneOptions,
        children: k,
      })
    : k;
  return i.jsx(_.I, {
    className: "popover-T14klf",
    content: i.jsx(g.Y, {
      className: "panel-e5f8XU",
      children: C,
    }),
    popupVisible: e,
    onVisibleChange: j,
    children: i.jsx(h.E, {
      active: e,
      "aria-expanded": e,
      "aria-label": M,
      icon: b,
      children: i.jsxs("span", {
        className: "button-content-WFwlH4",
        children: [
          i.jsx("span", {
            children: f,
          }),
          y,
        ],
      }),
    }),
  });
});
const ed = require("bE");
const em = require("j6i");
const ep = require("Kt");
const eh = require("CaR");
const e_ = require("Dh");
const eg = require("XC");
const ev = c.PA(function (e) {
  const { option, className } = e;
  const { label, extra } = option;
  const l = p.h(W.jV);
  const s = p.h(m.V);
  const c = p.h($.a);
  const { imageGeneratorManager } = s;
  const {
    metadata: { generateImageModelList },
    data: { largeImageInfo, abilityList },
  } = imageGeneratorManager;
  const g = r.useMemo(
    () => generateImageModelList.find((e) => e.key === option.value.toString()),
    [generateImageModelList, option.value],
  );
  const v = r.useMemo(() => {
    if (g == null) {
      return undefined;
    }
    return g.resolutionMap;
  }, [g]);
  const x = r.useMemo(
    () =>
      ((e, n) => {
        if (e && !(Object.keys(e).length <= 1)) {
          if (n) {
            var t = e[n];
            if (t == null ? undefined : t.resolutionName) {
              return {
                resolutionName: t.resolutionName,
                resolutionType: n,
              };
            }
          }
          var a = Object.values(e).find((e) => {
            if (e == null) {
              return undefined;
            }
            return e.resolutionName;
          });
          if (a == null ? undefined : a.resolutionName) {
            var o;
            var i =
              (o = Object.entries(e).find((e) => {
                var [n, t] = e;
                return t === a;
              })) == null
                ? undefined
                : o[0];
            if (!i) {
              return;
            }
            return {
              resolutionName: a.resolutionName,
              resolutionType: i,
            };
          }
        }
      })(v, largeImageInfo == null ? undefined : largeImageInfo.resolutionType),
    [largeImageInfo == null ? undefined : largeImageInfo.resolutionType, v],
  );
  const b = em.O({
    scene: A.Sk.ImageModelSwitch,
    modelReqKey: option.value.toString(),
    resolutionType: x == null ? undefined : x.resolutionType,
    abilityList:
      abilityList == null ? undefined : abilityList.map((e) => e.blendModel),
    imageInputNum: T.m(
      abilityList == null ? undefined : abilityList.map((e) => e.blendModel),
    ),
  });
  const j = r.useCallback(
    () =>
      I._(function* () {
        (yield l.getInstance()).showVIPSubscribeModal({
          sceneOptions: b,
          source: "generator_model_selection_tooltip",
          resolveVipInterceptionContext: true,
          customReportParams: {
            source: "generator_model_selection_tooltip",
            trigger_model_key: option.value,
            trigger_model_name: label,
          },
        });
        imageGeneratorManager.reportManager.reportAdPlacement(
          b,
          "generator_model_selection_tooltip",
          "click_to_vip_page",
        );
      })(),
    [l, imageGeneratorManager, label, b],
  );
  r.useEffect(() => {
    imageGeneratorManager.reportManager.reportAdPlacement(
      b,
      "generator_model_selection_tooltip",
      "show",
    );
  }, [imageGeneratorManager, b]);
  const { text } = z.$({
    scene: A.Sk.ImageModelSwitch,
    sceneOptions: b,
    commercialStrategyService: c,
  });
  if (text) {
    return i.jsx(L, {
      className,
      scene: A.Sk.ImageModelSwitch,
      sceneOptions: b,
      modelName: label,
      resolutionLabel: x == null ? undefined : x.resolutionName,
      onMembershipClick: j,
    });
  }
  return i.jsx("div", {
    className,
    children:
      typeof extra.description === "function"
        ? extra.description(option)
        : extra.description,
  });
});
const ex = c.PA(function () {
  const e = p.h(m.V);
  const n = p.h(ed.c);
  const instantiationService = p.h(ep._);
  const l = eh.dK();
  const { imageGeneratorManager } = e;
  const {
    metadata: { modelOptions },
    data: { currentSelectedImageModel, largeImageInfo, abilityList },
    switchModel,
  } = imageGeneratorManager;
  const g = r.useMemo(
    () =>
      modelOptions.map((e) =>
        o._(a._({}, e), {
          extra: o._(a._({}, e.extra), {
            hoverDescription: n.hasLogin
              ? (option) =>
                  i.jsx(p.Z, {
                    instantiationService,
                    children: i.jsx(ev, {
                      option,
                    }),
                  })
              : undefined,
          }),
        }),
      ),
    [modelOptions, n.hasLogin, instantiationService],
  );
  const v = eg.P({
    currentValue:
      currentSelectedImageModel == null
        ? undefined
        : currentSelectedImageModel.key,
    options: g,
    onAllowedChange: switchModel,
    getSceneOptions: (modelReqKey) =>
      em.O({
        scene: A.Sk.ImageModelSwitch,
        modelReqKey,
        resolutionType:
          largeImageInfo == null ? undefined : largeImageInfo.resolutionType,
        abilityList:
          abilityList == null
            ? undefined
            : abilityList.map((e) => e.blendModel),
        imageInputNum: T.m(
          abilityList == null
            ? undefined
            : abilityList.map((e) => e.blendModel),
        ),
      }),
    onBlocked: (e) => {
      imageGeneratorManager.reportManager.reportAdPlacement(
        e,
        "vip_right_model_select",
        "click_to_vip_page",
      );
    },
  });
  return i.jsx(M.F, {
    content:
      currentSelectedImageModel == null
        ? undefined
        : currentSelectedImageModel.name,
    children: i.jsx(e_.W, {
      optionCommonCommercialWrapperProps: {
        isVipTooltipDisabled: l !== "v0",
      },
      options: g,
      value:
        currentSelectedImageModel == null
          ? undefined
          : currentSelectedImageModel.key,
      onChange: v,
    }),
  });
});
const eb = require("./module-KuO.js");
const ej = require("MMW");
const ey = require("nh");
const ef = require("b5l");
const eM = c.PA(function () {
  const { imageGeneratorManager } = p.h(m.V);
  const { imageStylization, imageStylizationRange } =
    imageGeneratorManager.data;
  const {
    max = 0,
    min = 0,
    step = 1,
  } = imageStylizationRange != null ? imageStylizationRange : {};
  const [s, setS] = r.useState(false);
  const [x, setX] = r.useState(imageStylization);
  const [j, setJ] = r.useState();
  const id = r.useId();
  const M = r.useMemo(
    () =>
      i.jsx(d.yrQ, {
        size: 16,
      }),
    [],
  );
  const k = u.Ay.t(
    "web_image_params_stylization_label",
    {
      max,
      min,
    },
    "风格化强度 ".concat(min, " - ").concat(max),
  );
  const C = u.Ay.t(
    "web_image_params_stylization_tooltip",
    {},
    "控制画面的艺术化程度。数值越低越贴近提示词；越高艺术化表现越强，但可能偏离部分描述。",
  );
  const A = u.Ay.t(
    "web_image_params_stylization_range_error",
    {
      max,
      min,
    },
    "请输入 ".concat(min, " - ").concat(max, " 的数值"),
  );
  r.useEffect(() => {
    setX(imageStylization);
    setJ(undefined);
  }, [max, min, step, imageStylization]);
  const T = r.useCallback((e) => {
    setS(e);
  }, []);
  const N = r.useCallback(
    (e) => {
      if (Number.isFinite(e)) {
        setX(e);
        setJ(ef.S(e, min, max, step) ? undefined : A);
      } else {
        setX(undefined);
        setJ(undefined);
      }
    },
    [max, min, A, step],
  );
  const onBlur = r.useCallback(() => {
    if (imageStylization !== undefined) {
      var t = ef.G(x, imageStylization, min, max, step);
      setX(t);
      setJ(undefined);
      if (t !== imageStylization) {
        imageGeneratorManager.changeImageStylization(t);
      }
    }
  }, [x, imageGeneratorManager, max, min, step, imageStylization]);
  if (imageStylizationRange && imageStylization !== undefined) {
    return i.jsx(_.I, {
      className: "popover-DQH84Y",
      content: i.jsx(g.Y, {
        children: i.jsx(v.R, {
          title: i.jsxs("span", {
            className: "title-zvB7dQ",
            children: [
              k,
              i.jsx(Z.A, {
                className: "tooltip-jxBwPR",
                content: C,
                position: "top",
                style: {
                  maxWidth: 320,
                },
                trigger: ["hover", "focus"],
                children: i.jsx("button", {
                  type: "button",
                  className: "info-button-NdaymP",
                  "aria-label": C,
                  children: i.jsx(d.G_L, {
                    size: 12,
                  }),
                }),
              }),
            ],
          }),
          children: i.jsxs("div", {
            className: "input-container-kglmqD",
            children: [
              i.jsx(ej.m, {
                "aria-label": k,
                "aria-describedby": j ? id : undefined,
                "aria-invalid": !!j || undefined,
                "aria-valuemax": max,
                "aria-valuemin": min,
                className: "input-WXdd22",
                error: !!j,
                hideControl: true,
                precision: 0,
                step,
                value: x,
                onBlur,
                onChange: N,
              }),
              i.jsx(ey.A, {
                id,
                message: j,
              }),
            ],
          }),
        }),
      }),
      popupVisible: s,
      onVisibleChange: T,
      children: i.jsx(h.E, {
        active: s,
        "aria-expanded": s,
        icon: M,
        children: i.jsx("span", {
          children: imageStylization,
        }),
      }),
    });
  }
  return null;
});
const ek = require("qO");
const eC = c.PA(function () {
  const { imageGeneratorManager } = p.h(m.V);
  const {
    insertQuotesToInput,
    data: { ettaDisabled, ettaToolTip },
  } = imageGeneratorManager;
  const { promptInputRef, promptEditorRef } = r.useContext(ek.b);
  const s = r.useCallback(() => {
    insertQuotesToInput(promptInputRef, promptEditorRef);
  }, [insertQuotesToInput, promptInputRef, promptEditorRef]);
  const c = r.useMemo(() => i.jsx(d.kTu, {}), []);
  if (ettaDisabled) {
    return null;
  }
  return i.jsx(Z.A, {
    content: ettaToolTip,
    children: i.jsx(h.E, {
      icon: c,
      onClick: s,
    }),
  });
});
var eA = r.memo(function (e) {
  return i.jsxs(
    l.U,
    o._(a._({}, e), {
      children: [
        i.jsx(s.R, {}),
        i.jsx(ex, {}),
        i.jsx(ea, {}),
        i.jsx(eu, {}),
        i.jsx(b, {}),
        i.jsx(eM, {}),
        i.jsx(eC, {}),
        i.jsx(eb.U, {}),
      ],
    }),
  );
});
export { eA as Y };
