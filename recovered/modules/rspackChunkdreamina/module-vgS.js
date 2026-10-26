import s from "z8";
import "yS";
import o from "gL";
import c from "pr";
import l from "Qey";
import u from "yw";
import g from "wF";
import d from "ED";
import "uw5";
import "tQ";
import h from "VAR";
import m from "Vyy";
import p from "bT";
import _v from "xb";
import f from "xH6";
import C from "cO";
import R from "kch";
import T from "Bk";
import k from "Kt";
import z from "W2s";
import D from "P4r";
import P from "SZS";
import E from "Foo";
import L from "mZ";
import W from "BXZ";
import F from "Ia4";
import X from "YZ";
import H from "oa";
import Y from "bk";
import ee from "hUS";
import ea from "C6j";
import er from "NY";
import en from "QWK";
import es from "Gwc";
import eo from "rYM";
import ec from "yMd";
import el from "Dm";
import eu from "b5";
import eg from "K8";
import ed from "xi";
import eh from "Hr";
import em from "UH9";
import ep from "ur";
import ev from "GS";
import ey from "hP";
import eM from "dw4";
import eC from "o7";
import eN from "bgf";
import eA from "SJ";
import ez from "Ut";
import eD from "gpv";
import eP from "ibm";
import eW from "c8J";
import eF from "qG1";
import eO from "yX";
import eG from "lYO";
import e$ from "ai0";
import eX from "ks";
import eH from "g98";
import eY from "M8X";
import eJ from "RT";
import eV from "AAv";
import eK from "tbW";
import eq from "anN";
import e0 from "kT";
import e9 from "Vb7";
import e8 from "zS";
import e6 from "YNT";
import e7 from "FV";
import te from "rq";
import tt from "Qu";
import tc from "sX8";
import tl from "KDB";
import tg from "k4";
import td from "pE";
import th from "u39";
import tM from "prY";
import tS from "Hp";
import tb from "OQ";
import tC from "RMk";
import tj from "Q6K";
import tx from "qa";
import tN from "p21";
import tw from "K5v";
import tD from "taU";
import tP from "WCZ";
import tE from "F6B";
import tZ from "beA";
import tO from "LaG";
import tJ from "PC";
import "Vx";
import t0 from "Ix";
import t4 from "Sjz";
import ir from "EN6";
import ic from "F94";
import iu from "bdu";
import ig from "n9m";
import im from "quO";
import iv from "w4x";
import iy from "Fyh";
import i_ from "CA4";
import ib from "NdV";
const M = [f.gP.ByteEdit];
function I(e) {
  return M.includes(e);
}
function S(e) {
  const t = e.filter(I);
  if (t.length > 0) {
    return t;
  }
  return M;
}
const _ = p.memo(function (e) {
  const { isChecked, isDisabled, size = 16 } = e;
  if (isDisabled) {
    return s.jsx("div", {
      className: "checkbox-icon-disabled-cUc9IG",
      style: {
        width: size,
        height: size,
      },
    });
  }
  if (isChecked) {
    return s.jsx("div", {
      className: "checkbox-icon-checked-dY0A6K",
      style: {
        width: size,
        height: size,
      },
      children: s.jsx("div", {
        className: "checkbox-icon-checked-inner-xBIudg",
      }),
    });
  }
  return s.jsx("div", {
    className: "checkbox-icon-5V1lka",
    style: {
      width: size,
      height: size,
    },
  });
});
function b(e) {
  const { isChecked, isDisabled, text, extraIcon } = e;
  return s.jsxs("span", {
    className: "checkbox-content-vpfpyX",
    children: [
      s.jsx(_, {
        isChecked,
        isDisabled,
      }),
      s.jsx("span", {
        className: _v({
          "checkbox-text-oEiaBT": true,
          "checkbox-text-disabled-sabI5S": isDisabled,
          "checkbox-text-selected-Ai6V6k": isChecked && !isDisabled,
        }),
        children: text,
      }),
      extraIcon,
    ],
  });
}
const j = p.memo(function (e) {
  const { url, tip } = e;
  return s.jsxs("div", {
    className: "hover-video-wrap-vkna0s",
    children: [
      s.jsx(
        "video",
        {
          autoPlay: true,
          loop: true,
          className: "hover-video-gkKMiP",
          crossOrigin: "anonymous",
          children: s.jsx("source", {
            src: C.m(url, null, {
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
                "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1-lZwWFJqQmtXRXBzWTNrNWFtSXlO$EJh$np$d1R*Z*tiR0p0$m5sWld*SjJZMms1-0dKd$$te*pi$FZvWWtNNWJWcFhSakJr$0$wc1kzaz$jR0p-%m01-$$6Rn$Xb*Mx-kdOdFJqQmlNM*wy$1RJNWRHTkhPWFZh$np$d1kzaz$l$nB-$214amJWWjFX$EpWZEd*WE1Xa*FNbF-wWWxjNWExbFhkM1paTWpsMFkw-z$k$nB-TlRCam$%bHZZak5h-kdOcE1Xc*lNal$3$2xjM%1Fd3lhSFpr-lZaN$R*a*FjRnBI$m5aTWJsSjZa$WRHZ$ZvelZubz0",
            }),
            type: "video/mp4",
          }),
        },
        url,
      ),
      tip
        ? s.jsx("p", {
            className: "hover-tip-MdJKk7",
            children: tip,
          })
        : null,
    ],
  });
});
const x = p.memo(function (e) {
  const { url, tip } = e;
  return s.jsxs("div", {
    className: "container-fhlnhb",
    children: [
      s.jsx("img", {
        alt: tip,
        src: C.m(url, null, {
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
            "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1-lZwWFJqQmtXRXBzWTNrNWFtSXlO$EJh$np$d1R*Z*tiR0p0$m5sWld*SjJZMms1-0dKd$$te*pi$FZvWWtNNWJWcFhSakJr$0$wc1kzaz$jR0p-%m01-$$6Rn$Xb*Mx-kdOdFJqQmlNM*wy$1RJNWRHTkhPWFZh$np$d1kzaz$l$nB-$214amJWWjFX$EpWZEd*WE1Xa*FNbF-wWWxjNWExbFhkM1paTWpsMFkw-z$k$nB-TlRCam$%bHZZak5h-kdOcE1Xc*lNal$3$2xjM%1Fd3lhSFpr-lZaN$R*ZHNkRmx-Wkd4TWJsSjZa$WRHZ$ZvelZubz0",
        }),
        className: "image-mM89Vr",
        "data-apm-action": "ability-type-hover-used",
        crossOrigin: "anonymous",
      }),
      s.jsx("p", {
        className: "text-UYx1g7",
        children: tip,
      }),
    ],
  });
});
const N = p.memo(function (e) {
  const { hoverUrl, hoverTips, hoverType } = e;
  const r = p.useMemo(() => {
    switch (hoverType) {
      case "image":
        return s.jsx(x, {
          url: hoverUrl,
          tip: hoverTips,
        });
      case "video":
        return s.jsx(j, {
          url: hoverUrl,
          tip: hoverTips,
        });
      default:
        return null;
    }
  }, [hoverType, hoverUrl, hoverTips]);
  if (!hoverUrl && hoverTips) {
    return s.jsx("div", {
      className: "tooltip-content-zyGMxd",
      role: "tooltip",
      children: s.jsx("div", {
        className: "tooltip-content-inner-GU7uya",
        children: hoverTips,
      }),
    });
  }
  if (hoverUrl || hoverTips) {
    return s.jsx("div", {
      className: "dropdown-content-w9FWxC",
      children: r,
    });
  }
  return null;
});
const w = {
  "buttons-container": "buttons-container-LSakhi",
  buttonsContainer: "buttons-container-LSakhi",
  "buttons-list": "buttons-list-LpfiYC",
  buttonsList: "buttons-list-LpfiYC",
  checkbox: "checkbox-NvYfPj",
  "checkbox-content": "checkbox-content-EzaxQn",
  checkboxContent: "checkbox-content-EzaxQn",
  "checkbox-text": "checkbox-text-vsZ778",
  checkboxText: "checkbox-text-vsZ778",
  popover: "popover-fVJczt",
};
const A = d.PA(function (e) {
  const { currentAbilityType, abilityConfigs, onAbilityChange } = e;
  const r = p.useMemo(() => {
    var e = S(abilityConfigs.map((e) => e.abilityType));
    return abilityConfigs.filter((t) => e.includes(t.abilityType));
  }, [abilityConfigs]);
  const n = p.useMemo(
    () => ({
      popupAlign: {
        top: 8,
        bottom: 8,
      },
    }),
    [],
  );
  const getPopupContainer = p.useCallback(() => document.body, []);
  return s.jsx("div", {
    className: w.buttonsContainer,
    children: s.jsx("div", {
      className: w.buttonsList,
      children: r.map((e) => {
        var checked = currentAbilityType === e.abilityType;
        return s.jsx(
          h.A,
          {
            className: w.popover,
            content: s.jsx(N, {
              hoverUrl: e.hoverInfo.hoverUrl,
              hoverTips: e.hoverInfo.hoverTips,
              hoverType: e.hoverInfo.hoverType,
            }),
            triggerProps: n,
            getPopupContainer,
            showArrow: false,
            children: s.jsx(m.A, {
              checked,
              onChange: () => onAbilityChange(e.abilityType),
              className: _v(w.checkbox, checked ? w.active : ""),
              disabled: e.disabled,
              children: (t) => {
                var { checked } = t;
                return s.jsx(b, {
                  isChecked: checked,
                  isDisabled: e.disabled,
                  text: e.name,
                });
              },
            }),
          },
          e.abilityType,
        );
      }),
    }),
  });
});
const U = p.memo(function (e) {
  const { isSameAspectRatioWithImage, onChange } = e;
  const a = p.useMemo(
    () => l.Ay.t("web_new_ratio_ratio_align", {}, "与参考图比例一致"),
    [],
  );
  return s.jsxs("div", {
    className: "keep-same-aspect-ratio-us7mIZ",
    children: [
      s.jsx(m.A, {
        checked: isSameAspectRatioWithImage,
        onChange,
        className: _v("checkbox-vTW2wT", {
          "checked-Ol5BLk": isSameAspectRatioWithImage,
        }),
      }),
      s.jsx("span", {
        children: a,
      }),
    ],
  });
});
const Z = p.memo(function (e) {
  const {
    isLocked,
    isSameAspectRatioWithImage,
    aspectRatio,
    customWidth,
    customHeight,
    handleAspectRatioChange,
    handleDimensionChange,
    handleLockChange,
    handleKeepSameAspectRatioChange,
    imageRangeConfig,
  } = e;
  const options = p.useMemo(() => E.i, []);
  const m = p.useMemo(
    () => aspectRatio || "".concat(customWidth, ":").concat(customHeight),
    [aspectRatio, customWidth, customHeight],
  );
  const v = p.useMemo(() => {
    if (!m) {
      return 1;
    }
    var [e, t] = m.split(":").map(Number);
    if (e && t) {
      return e / t;
    }
    return 1;
  }, [m]);
  const maxWidth = p.useMemo(() => {
    var e = isLocked
      ? Math.sqrt(imageRangeConfig.maxPixelNum * v)
      : imageRangeConfig.maxPixelNum / customHeight;
    return Math.min(imageRangeConfig.maxLength, Math.floor(e));
  }, [imageRangeConfig, v, isLocked, customHeight]);
  const maxHeight = p.useMemo(() => {
    var e = isLocked
      ? Math.sqrt(imageRangeConfig.maxPixelNum / v)
      : imageRangeConfig.maxPixelNum / customWidth;
    return Math.min(imageRangeConfig.maxLength, Math.floor(e));
  }, [imageRangeConfig, v, isLocked, customWidth]);
  return s.jsxs("div", {
    className: "ratio-selector-XHRT92",
    children: [
      s.jsxs(L.R, {
        title: l.Ay.t("web_generator_box_select_ratio", {}, "选择比例"),
        children: [
          s.jsx(W._, {
            options,
            value: aspectRatio,
            onChange: handleAspectRatioChange,
          }),
          s.jsx(U, {
            isSameAspectRatioWithImage,
            onChange: handleKeepSameAspectRatioChange,
          }),
        ],
      }),
      s.jsx(L.R, {
        title: l.Ay.t("web_new_reference_image_ratio", {}, "尺寸"),
        children: s.jsx(F.F, {
          width: customWidth,
          height: customHeight,
          minWidth: imageRangeConfig.minLength,
          maxWidth,
          minHeight: imageRangeConfig.minLength,
          maxHeight,
          onChange: handleDimensionChange,
          aspectRatio: m,
          maintainAspectRatio: !!isLocked,
          onAspectRatioMaintainChange: handleLockChange,
        }),
      }),
    ],
  });
});
const O = {
  "warning-icon": "warning-icon-UhbIoJ",
  warningIcon: "warning-icon-UhbIoJ",
  "ratio-warning-tip": "ratio-warning-tip-TT2dWW",
  ratioWarningTip: "ratio-warning-tip-TT2dWW",
  "tooltip-content": "tooltip-content-qTCV8_",
  tooltipContent: "tooltip-content-qTCV8_",
  "btn-wrap": "btn-wrap-ZMGbSa",
  btnWrap: "btn-wrap-ZMGbSa",
  "not-process": "not-process-kllRPE",
  notProcess: "not-process-kllRPE",
  "change-now": "change-now-nYchIj",
  changeNow: "change-now-nYchIj",
};
const useG = (e) => {
  var { imageRatio, rightDistance = 98, onUpdate, onDismiss } = e;
  var [popupVisible, setPopupVisible] = p.useState(false);
  var g = p.useCallback(() => {
    setPopupVisible(false);
    onDismiss();
  }, [onDismiss]);
  var d = p.useCallback(() => {
    setPopupVisible(false);
    onUpdate();
  }, [onUpdate]);
  var m = p.useCallback(() => {
    setPopupVisible(true);
  }, []);
  var v = p.useCallback(() => {
    setPopupVisible(false);
  }, []);
  var y = p.useCallback((e) => {
    e.stopPropagation();
  }, []);
  return s.jsx(h.A, {
    className: O.ratioWarningTip,
    showArrow: false,
    popupVisible,
    content: s.jsxs("div", {
      className: O.tooltipContent,
      onMouseLeave: v,
      onClick: y,
      children: [
        s.jsx("div", {
          className: O.text,
          children: l.Ay.t(
            "web_new_ratio_difference",
            {
              ratio: imageRatio,
            },
            "当前生图比例与参考图差异较大，是否切换至{ratio}？",
          ),
        }),
        s.jsxs("div", {
          className: O.btnWrap,
          children: [
            s.jsx("div", {
              className: O.notProcess,
              role: "button",
              tabIndex: 0,
              onKeyDown: c.q,
              onClick: g,
              children: l.Ay.t("web_new_ratio_no_action", {}, "暂不处理"),
            }),
            s.jsx("div", {
              className: O.changeNow,
              role: "button",
              tabIndex: 0,
              onKeyDown: c.q,
              onClick: d,
              children: l.Ay.t("web_new_ratio_switch_now", {}, "立即切换"),
            }),
          ],
        }),
      ],
    }),
    children: s.jsx(u.iQw, {
      className: O.warningIcon,
      style: {
        right: `${rightDistance + 4}px`,
      },
      onMouseEnter: m,
    }),
  });
};
const B = {
  container: "container-VtImzq",
  title: "title-mOCOG1",
  button: "button-Dsk5aR",
  disabled: "disabled-KjSRTc",
  icon: "icon-GY43c2",
  rotate: "rotate-pIXmYE",
  tooltip: "tooltip-lihU1k",
  trigger: "trigger-CR5Xjm",
};
const $ = p.memo(function (e) {
  const {
    abilityType,
    dimensionControl: {
      isLocked,
      isSameAspectRatioWithImage,
      imageRangeConfig,
      customWidth,
      customHeight,
      aspectRatio,
      disableRatioSetting,
      imageFitRatio,
      handleAspectRatioChange,
      handleDimensionChange,
      handleLockChange,
      handleKeepSameAspectRatioChange,
      showRatioSettingWarning,
    },
  } = e;
  const [_, set_] = p.useState(false);
  const C = g.h(k._);
  const [j, setJ] = p.useState(false);
  p.useEffect(() => {
    setJ(false);
  }, [aspectRatio]);
  const N = p.useMemo(() => {
    if (
      aspectRatio &&
      ((e) => {
        var t;
        var i;
        var a =
          ((t = e == null ? undefined : e.width) != null ? t : P.QJ.width) /
          ((i = e == null ? undefined : e.height) != null ? i : P.QJ.height);
        for (var [r, n] of z.A.entries()) {
          if (Math.abs(n - a) < 0.004) {
            if (D.r(r, e)) {
              return r;
            }
            return undefined;
          }
        }
      })({
        width: customWidth,
        height: customHeight,
      }) &&
      !disableRatioSetting
    ) {
      return l.Ay.t(
        "web_new_reference_setting_aspect_ratio",
        {
          aspect_ratio: aspectRatio,
        },
        "生图比例 {aspect_ratio}",
      );
    }
    return "".concat(
      l.Ay.t("web_new_ratio_ratio_customize", {}, "生图比例 自定义"),
    );
  }, [aspectRatio, customWidth, customHeight, disableRatioSetting]);
  const w = p.useMemo(() => {
    if (abilityType) {
      return l.Ay.t(R.Ol[abilityType], {}, R.c4[abilityType]);
    }
    return "";
  }, [abilityType]);
  const A = p.useCallback(() => {
    var e = C.createInstance(T.D);
    e.setParams({
      action: "show",
    });
    e.report();
  }, [C]);
  const E = p.useCallback(
    (e) => {
      if (!disableRatioSetting) {
        set_(e);
        if (e) {
          A();
        }
      }
    },
    [disableRatioSetting, A],
  );
  const onUpdate = p.useCallback(() => {
    if (handleAspectRatioChange != null) {
      handleAspectRatioChange(imageFitRatio);
    }
  }, [handleAspectRatioChange, imageFitRatio]);
  const onDismiss = p.useCallback(() => {
    setJ(true);
  }, []);
  const F = p.useMemo(() => {
    if (disableRatioSetting) {
      return w;
    }
    return s.jsx(Z, {
      isLocked,
      isSameAspectRatioWithImage,
      aspectRatio,
      customWidth,
      customHeight,
      imageRangeConfig,
      handleDimensionChange,
      handleAspectRatioChange,
      handleLockChange,
      handleKeepSameAspectRatioChange,
    });
  }, [
    aspectRatio,
    customWidth,
    customHeight,
    disableRatioSetting,
    w,
    handleAspectRatioChange,
    handleDimensionChange,
    handleLockChange,
    isLocked,
    isSameAspectRatioWithImage,
    handleKeepSameAspectRatioChange,
    imageRangeConfig,
  ]);
  const U = p.useMemo(
    () =>
      s.jsxs("div", {
        className: _v(B.button, {
          [B.disabled]: disableRatioSetting,
        }),
        children: [
          showRatioSettingWarning && !j && imageFitRatio
            ? s.jsx(useG, {
                imageRatio: imageFitRatio,
                onUpdate,
                onDismiss,
              })
            : null,
          s.jsx("span", {
            className: B.ratioText,
            children: N,
          }),
          s.jsx(u.rIS, {
            className: _v(B.icon, {
              [B.rotate]: _,
            }),
          }),
        ],
      }),
    [
      disableRatioSetting,
      _,
      N,
      showRatioSettingWarning,
      imageFitRatio,
      onUpdate,
      j,
      onDismiss,
    ],
  );
  return s.jsxs("div", {
    className: B.container,
    children: [
      s.jsx("div", {
        className: B.title,
        children: l.Ay.t(
          "web_reference_edit_placeholder_text",
          {},
          "请选择你要参考的图片维度",
        ),
      }),
      s.jsx(h.A, {
        className: _v(B.trigger, {
          [B.tooltip]: disableRatioSetting,
        }),
        trigger: disableRatioSetting ? "hover" : "click",
        onVisibleChange: E,
        content: F,
        showArrow: false,
        children: U,
      }),
    ],
  });
});
const Q = (e, t) => {
  var i = {
    aspectRatio: t,
  };
  if (t < e) {
    return Y._(H._({}, i), {
      height: "100%",
      width: "auto",
    });
  }
  return Y._(H._({}, i), {
    width: "100%",
    height: "auto",
  });
};
const J = "image-rIu_yQ";
const V = p.memo(function (e) {
  const {
    imageSize,
    imageUrl,
    customRatio,
    containerRatio,
    imageFillMode = "fit",
  } = e;
  const o = imageSize.width / imageSize.height;
  const cRef = p.useRef(null);
  const uRef = p.useRef(null);
  const [g, setG] = p.useState();
  const [h, setH] = p.useState();
  const [v, setV] = p.useState(false);
  const uRef_current = uRef.current;
  const cRef_current = cRef.current;
  const S = p.useMemo(() => {
    var e = {
      aspectRatio: o,
    };
    if (imageFillMode === "fit") {
      return Q(customRatio, o);
    }
    if (o < customRatio) {
      return Y._(H._({}, e), {
        height: "auto",
        width: "100%",
      });
    }
    return Y._(H._({}, e), {
      width: "auto",
      height: "100%",
    });
  }, [o, customRatio, imageFillMode]);
  p.useLayoutEffect(() => {
    if (cRef.current) {
      var e = cRef.current.offsetWidth;
      var t = cRef.current.offsetHeight;
      if (e !== 0 && t !== 0) {
        setH({
          width: "".concat(e, "px"),
          height: "".concat(t, "px"),
        });
        setV(true);
      }
    }
  }, [imageSize, customRatio, cRef_current]);
  const _ = p.useMemo(() => {
    if (customRatio > containerRatio) {
      return {
        aspectRatio: customRatio,
        height: "auto",
        width: "100%",
      };
    }
    return {
      aspectRatio: customRatio,
      height: "100%",
      width: "auto",
    };
  }, [customRatio, containerRatio]);
  p.useLayoutEffect(() => {
    if (uRef.current) {
      var e = uRef.current.offsetWidth;
      var t = uRef.current.offsetHeight;
      if (e !== 0 && t !== 0) {
        setG({
          width: "".concat(e, "px"),
          height: "".concat(t, "px"),
        });
      }
    }
  }, [imageSize, customRatio, uRef_current, S]);
  return s.jsxs(s.Fragment, {
    children: [
      s.jsx("div", {
        className: _v("scale-placeholder-EYpy0l", {
          "hidden-boOzLj": v,
        }),
        ref: cRef,
        style: _,
        children: s.jsx("div", {
          ref: uRef,
          className: "scale-placeholder-content-GhQcoL",
          style: S,
          children: s.jsx("img", {
            alt: "",
            className: J,
            src: C.m(imageUrl, null, {
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
                "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1-lZwWFJqQmtXRXBzWTNrNWFtSXlO$EJh$np$d1R*Z*tiR0p0$m5sWld*SjJZMms1-0dKd$$te*pi$FZvWWtNNWJWcFhSakJr$0$wc1kzaz$jR0p-%m01-$$6Rn$Xb*Mx-kdOdFJqQmlNM*wy$1RJNWRHTkhPWFZh$np$d1kzaz$l$nB-$214amJWWjFX$EpWZEd*WE1Xa*FNbF-wWWxjNWExbFhkM1paTWpsMFkw-z$k$nB-TlRCam$%b*9X$zFz-zJ*W$$q$k1XRXBz$20x$2$WcFhO$3Bh$Xp*d1lsZEdibHB%T1doWmJXeHpZ$mhTTl$4W$Nte*Fi$lo1$2xjMWFscFRNWEJp$jBad$dsTTFNR016-%doamJX%XhZM2M5%FE9PQ",
            }),
            crossOrigin: "anonymous",
          }),
        }),
      }),
      !!(h && g) &&
        s.jsx("div", {
          className: _v("scale-container-Yy5KxA"),
          style: {
            width: h.width,
            height: h.height,
          },
          children: s.jsx("div", {
            className: "scale-content-ABqEu4",
            style: {
              width: g.width,
              height: g.height,
            },
            children: s.jsx("img", {
              alt: l.Ay.t("frame_change_reference_image"),
              className: J,
              src: C.m(imageUrl, null, {
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
                  "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1-lZwWFJqQmtXRXBzWTNrNWFtSXlO$EJh$np$d1R*Z*tiR0p0$m5sWld*SjJZMms1-0dKd$$te*pi$FZvWWtNNWJWcFhSakJr$0$wc1kzaz$jR0p-%m01-$$6Rn$Xb*Mx-kdOdFJqQmlNM*wy$1RJNWRHTkhPWFZh$np$d1kzaz$l$nB-$214amJWWjFX$EpWZEd*WE1Xa*FNbF-wWWxjNWExbFhkM1paTWpsMFkw-z$k$nB-TlRCam$%b*9X$zFz-zJ*W$$q$k1XRXBz$20x$2$WcFhO$3Bh$Xp*d1lsZEdibHB%T1doWmJXeHpZ$mhTTl$4W$Nte*Fi$lo1$2xjMWFscFRNWEJp$jBad$dsTTFNR016-%doamJX%XhZM2M5%FE9PQ",
              }),
              crossOrigin: "anonymous",
            }),
          }),
        }),
    ],
  });
});
const K = p.memo(function (e) {
  const { currentAbilityConfig, currentImage, customWidth, customHeight } = e;
  const customRatio = customWidth / customHeight;
  const o = p.useMemo(() => {
    if (currentImage) {
      return s.jsx(V, {
        containerRatio: X.Rh,
        imageSize: currentImage,
        imageUrl: currentImage.url,
        customRatio,
      });
    }
    return s.jsx(s.Fragment, {});
  }, [currentImage, customRatio]);
  if (currentImage) {
    if (currentAbilityConfig) {
      return s.jsx(
        currentAbilityConfig.referenceImageComponent,
        {
          image: currentImage,
          customRatio,
          children: o,
        },
        currentAbilityConfig.abilityType,
      );
    }
    return o;
  }
  return null;
});
const q = d.PA(function (e) {
  const { currentAbilityConfig } = e;
  if (currentAbilityConfig) {
    return s.jsx(currentAbilityConfig.interactComponent, {});
  }
  return null;
});
function useEt(e) {
  const { available, saving = false, onClick, invalidHoverText } = e;
  const n = p.useCallback(() => {
    if (!saving && available) {
      onClick();
    }
  }, [saving, available, onClick]);
  return s.jsx(h.A, {
    className: "trigger-CpJJMH",
    disabled: available || saving,
    position: "tr",
    showArrow: false,
    content: s.jsx("div", {
      className: "hover-text-sFw62G",
      children:
        invalidHoverText ||
        l.Ay.t("web_new_wimg2img_content_select", {}, "请选择参考特征"),
    }),
    children: s.jsx("div", {
      className: _v("save-XfCVdw", {
        "disabled-HYWjaG": !available,
        "saving-u9Da8r": saving,
      }),
      role: "button",
      tabIndex: available && !saving ? 0 : -1,
      "aria-disabled": !available || saving,
      "aria-busy": saving,
      onKeyDown: c.q,
      onClick: n,
      children: saving
        ? s.jsxs(s.Fragment, {
            children: [
              s.jsx(ee.w, {
                size: 12,
              }),
              l.Ay.t("web_reference_edit_popup_saving", {}, "保存中"),
            ],
          })
        : l.Ay.t("web_new_image_reference_save_btn", {}, "保存"),
    }),
  });
}
const ei = d.PA(function (e) {
  const {
    imageContainerId,
    currentImage,
    currentAbilityConfig,
    currentAbilityType,
    dimensionControl,
    abilityConfigs,
    availableSave,
    invalidHoverText,
    saving = false,
    uiConfig,
    onAbilityChange,
    onSave,
  } = e;
  const currentAbilityConfig_1 =
    currentAbilityConfig && I(currentAbilityConfig.abilityType)
      ? currentAbilityConfig
      : null;
  return s.jsxs("div", {
    className: "reference-image-modal-KRRzzh",
    children: [
      s.jsxs("div", {
        id: imageContainerId,
        className: "image-container-y4lPnv",
        children: [
          s.jsx(K, {
            currentAbilityConfig: currentAbilityConfig_1,
            currentImage,
            customWidth: dimensionControl.customWidth,
            customHeight: dimensionControl.customHeight,
          }),
          s.jsx(q, {
            currentAbilityConfig: currentAbilityConfig_1,
          }),
        ],
      }),
      !(uiConfig == null ? undefined : uiConfig.hideAbilityList) &&
        s.jsxs(s.Fragment, {
          children: [
            s.jsx($, {
              dimensionControl,
              abilityType: currentAbilityType,
            }),
            s.jsx(A, {
              currentAbilityType,
              abilityConfigs,
              onAbilityChange,
            }),
          ],
        }),
      s.jsx("div", {
        className: "footer-WcXfxP",
        children: s.jsx(useEt, {
          available: availableSave,
          saving,
          onClick: onSave,
          invalidHoverText,
        }),
      }),
    ],
  });
});
class ef {
  reviewImage(e) {
    return er
      ._(function* () {
        const t = yield this._algorithmDataService.requestAlgorithm(
          "benchmark_test_user_upload_image_input.image_face_ip",
          {
            params: {},
            fileList: [
              {
                fileUri: e,
              },
            ],
            options: {
              ipCheck: true,
            },
          },
          {
            babi_param: ev.Wu(
              ev.OC({
                scenario: "image_video_generation",
                featureKey: "aigc_to_image",
                featureEntranceDetail: "".concat(em.F(), "-algo_proxy"),
                editType: "canva",
                toolId: ey.M.Canva,
              }),
            ),
          },
        );
        if (t.ok) {
          return {
            passed: true,
            error: undefined,
          };
        }
        return {
          passed: false,
          error:
            t.code === -2 || t.code === -1
              ? f.Gj.NetworkError
              : f.Gj.SafetyCheckError,
        };
      })
      .call(this);
  }
  constructor(e) {
    this._algorithmDataService = e;
  }
}
ef = en.Cg(
  [
    en.Qj(0, ep.o),
    en.Sn("design:type", Function),
    en.Sn("design:paramtypes", [ep.o === undefined ? Object : ep.o]),
  ],
  ef,
);
class eI {
  get isCompleted() {
    return this.overallStatus === "completed";
  }
  get isFailed() {
    return this.overallStatus === "failed";
  }
  get isRunning() {
    return this.overallStatus === "running";
  }
  reset() {
    this.uploadStatus = "init";
    this.uploadError = undefined;
    this.uploadResult = undefined;
    this.safetyReviewStatus = "init";
    this.safetyReviewResult = undefined;
    this.overallStatus = "init";
    this.overallError = undefined;
  }
  setUploadStatus(e, t, i) {
    this.uploadStatus = e;
    this.uploadError = t;
    if (i !== undefined) {
      this.uploadResult = i;
    }
  }
  setSafetyReviewStatus(e, t) {
    this.safetyReviewStatus = e;
    if (t !== undefined) {
      this.safetyReviewResult = t;
    }
  }
  setOverallStatus(e, t) {
    this.overallStatus = e;
    this.overallError = t;
  }
  constructor() {
    this.uploadStatus = "init";
    this.uploadError = undefined;
    this.uploadResult = undefined;
    this.safetyReviewStatus = "init";
    this.overallStatus = "init";
    this.overallError = undefined;
    eM.l_(this);
  }
}
class eS {
  startTasks(e) {
    this.store.reset();
    this.store.setOverallStatus("running");
    this._currentTaskPromise = this._executeTasks(e);
  }
  getTaskStatus() {
    return this.store.overallStatus;
  }
  waitForCompletion() {
    return er
      ._(function* () {
        if (!this._currentTaskPromise) {
          throw Error("No tasks are running");
        }
        if (!this.store.isCompleted) {
          if (this.store.isFailed) {
            throw Error("Tasks failed: ".concat(this.store.overallError));
          }
          yield this._currentTaskPromise;
        }
      })
      .call(this);
  }
  cleanup() {
    this.store.reset();
    this._currentTaskPromise = undefined;
    ed.V.info("AsyncTaskManager", "Cleaned up tasks");
  }
  _executeTasks(e) {
    return er
      ._(function* () {
        if (e.uploadPromise) {
          const t = yield this._executeUploadTask(e.uploadPromise);
          if (!t.ok) {
            return void this.store.setOverallStatus("failed", t.msg);
          }
          this.store.setUploadStatus("completed", undefined, t.value);
        }
        if (e.includeSafetyReview && this.store.uploadResult) {
          const i = yield this._executeSafetyReviewTask(
            this.store.uploadResult,
          );
          if (!i.ok) {
            return void this.store.setOverallStatus("failed", i.msg);
          }
          this.store.setSafetyReviewStatus("completed", i.value);
        }
        this.store.setOverallStatus("completed");
        ed.V.info("AsyncTaskManager", "All tasks completed successfully");
      })
      .call(this);
  }
  _executeUploadTask(e) {
    return er
      ._(function* () {
        this.store.setUploadStatus("running");
        try {
          const t = yield e;
          this.store.setUploadStatus("completed", undefined, t);
          ed.V.info("AsyncTaskManager", "Upload task completed:", t);
          return eg.TZ(t);
        } catch (error) {
          const i = error instanceof Error ? error.message : "Unknown error";
          this.store.setUploadStatus("failed", i);
          ed.V.error("AsyncTaskManager", "Upload task failed", error);
          return eu.r(error);
        }
      })
      .call(this);
  }
  _executeSafetyReviewTask(e) {
    return er
      ._(function* () {
        this.store.setSafetyReviewStatus("running");
        const t = l.Ay.t(X.tK);
        try {
          const i = yield this._safetyReviewManager.reviewImage(e);
          this.store.setSafetyReviewStatus("completed", i);
          ed.V.info("AsyncTaskManager", "Safety review task completed:", t);
          if (!i.passed) {
            this._showErrorTip(t);
            return eg.xz(-1, t);
          }
          return eg.TZ(i);
        } catch (error) {
          this.store.setSafetyReviewStatus("failed", {
            passed: false,
            error: f.Gj.Failed,
          });
          ed.V.error("AsyncTaskManager", "Safety review task failed:", error);
          return eg.xz(
            -1,
            l.Ay.t(
              "web_new_result_toast_neterror_retry",
              {},
              "网络异常，请重试",
            ),
          );
        }
      })
      .call(this);
  }
  _showErrorTip(e) {
    let t;
    let i;
    const a =
      ((t =
        (i = document.querySelector("#".concat(this._imageContainerID))) == null
          ? undefined
          : i.getBoundingClientRect().top) != null
        ? t
        : 0) + 20;
    eh.l.error({
      content: e,
      position: "top",
      style: {
        position: "relative",
        top: "".concat(a, "px"),
      },
    });
  }
  constructor(e, t) {
    this._imageContainerID = e;
    this._containerService = t;
    this.store = new eI();
    this._safetyReviewManager = this._containerService.createInstance(ef);
  }
}
eS = en.Cg(
  [
    en.Qj(1, k._),
    en.Sn("design:type", Function),
    en.Sn("design:paramtypes", [String, k._ === undefined ? Object : k._]),
  ],
  eS,
);
const e_ = "AbilityTypeNotFoundError";
class eb {
  registerAbilityConfig(e) {
    this._abilityConfigs.set(e.abilityType, e);
  }
  registerAbilityConfigs(e) {
    e.forEach((e) => {
      this._abilityConfigs.set(e.abilityType, e);
    });
  }
  registerAbilityPlugin(e, t) {
    const i = this._abilityPlugins.get(e) || [];
    i.push(t);
    this._abilityPlugins.set(e, i);
  }
  runAbilityPlugins(e) {
    (this._abilityPlugins.get(e) || []).forEach((e) => {
      e.run();
    });
  }
  getAllAbilityConfigs() {
    return Array.from(this._abilityConfigs.values());
  }
  getAbilityConfigs(e) {
    return e
      .map((e) => this._abilityConfigs.get(e))
      .filter((e) => e !== undefined);
  }
  changeAbility(e, t) {
    return er
      ._(function* () {
        const i = this._abilityConfigs.get(e);
        el.F4(
          i,
          "[".concat(e_, "] Ability config for ").concat(e, " not found"),
        );
        const a = yield i.handleAbilityChange(t);
        this._reportIdentificationStatus(e, a);
        yield i.postProcess(t);
        return a;
      })
      .call(this);
  }
  afterAbilitySelect(e) {
    const t = this._abilityConfigs.get(e);
    el.F4(t, "Ability config for ".concat(e, " not found"));
    t.afterSelect();
  }
  cancelRecognize(e) {
    const t = this._abilityConfigs.get(e);
    el.F4(t, "Ability config for ".concat(e, " not found"));
    t.cancelRecognize();
  }
  checkAsyncFlowSupport(e) {
    const t = this._abilityConfigs.get(e);
    return (t == null ? undefined : t.supportsAsyncFlow) || false;
  }
  startAsyncTaskGroup(e) {
    this._asyncTaskManager.startTasks(e);
  }
  getAsyncTaskManager() {
    return this._asyncTaskManager;
  }
  _reportIdentificationStatus(type, t) {
    const i = es.C(t);
    const a = this._containerService.createInstance(eo.W);
    a.setParams({
      status: i,
      type,
      generateType: ec.ce.Blend,
      failReason: i === "fail" ? t : undefined,
    });
    a.report();
  }
  constructor(e, t) {
    this._imageContainerID = e;
    this._containerService = t;
    this._abilityConfigs = new Map();
    this._abilityPlugins = new Map();
    this._asyncTaskManager = this._containerService.createInstance(
      eS,
      this._imageContainerID,
    );
  }
}
eb = en.Cg(
  [
    en.Qj(1, k._),
    en.Sn("design:type", Function),
    en.Sn("design:paramtypes", [String, k._ === undefined ? Object : k._]),
  ],
  eb,
);
class ej {
  get availableSave() {
    return !!this._imageStore.currentAbilityConfig && !this.invalidHoverText;
  }
  setSaving(e) {
    this.saving = e;
  }
  setInvalidHoverText(e) {
    this.invalidHoverText = e;
  }
  reset() {
    this.saving = false;
  }
  constructor(e) {
    this._imageStore = e;
    this.saving = false;
    this.invalidHoverText = undefined;
    eM.l_(this);
  }
}
class ex extends eC.jG {
  setupAsyncTaskManagerListener() {
    const { store } = this._abilityManager.getAsyncTaskManager();
    eM.mJ(
      () => [store.overallStatus, store.overallError],
      (e) => {
        var [t, i] = e;
        if (t === "failed") {
          this.store.setInvalidHoverText(i);
        }
      },
    );
  }
  dispose() {
    this.store.reset();
    super.dispose();
  }
  constructor(e, t, i) {
    var a;
    super();
    a = this;
    this._abilityManager = e;
    this._imageStore = t;
    this._onSave = i;
    this.store = new ej(this._imageStore);
    this.save = () =>
      er._(function* () {
        let e;
        const { currentAbilityConfig } = a._imageStore;
        if (currentAbilityConfig) {
          try {
            if (
              currentAbilityConfig.supportsAsyncFlow &&
              a._abilityManager.getAsyncTaskManager().store.overallStatus ===
                "running"
            ) {
              a.store.setSaving(true);
              yield a._abilityManager.getAsyncTaskManager().waitForCompletion();
            }
            if (!a.store.availableSave) {
              return;
            }
            if ((e = currentAbilityConfig.onSave) != null) {
              e.call(currentAbilityConfig);
            }
            a._save();
          } finally {
            a.store.setSaving(false);
          }
        }
      })();
    this._save = () => {
      var e;
      var t;
      var i =
        (e = this._imageStore.currentAbilityConfig) == null
          ? undefined
          : e.store.getReferImageParams();
      if (i) {
        if ((t = this._onSave) != null) {
          t.call(this, i);
        }
      }
    };
    this.setupAsyncTaskManagerListener();
  }
}
const useEw = (e) => {
  var {
    visible,
    content,
    onRemove,
    mask = true,
    fixed = true,
    zIndex = "99999",
  } = e;
  p.useEffect(() => {
    var e;
    if (!visible) {
      e = setTimeout(() => {
        if (onRemove != null) {
          onRemove();
        }
      }, 300);
    }
    return () => clearTimeout(e);
  }, [visible, onRemove]);
  return s.jsx("div", {
    style: {
      zIndex,
    },
    className: _v("hanging-hnD0mu", {
      "fixed-ESjXgv": fixed,
      "hanging-mask-qyR81_": mask,
      "hanging-mask-hidden-bb7Ppk": !visible,
    }),
    children: s.jsx("div", {
      children: content,
    }),
  });
};
class eR {
  show(e) {
    const t =
      arguments.length > 1 && arguments[1] !== undefined
        ? arguments[1]
        : {
            container: document.body,
            zIndex: "9999",
          };
    const { showMask = true, container = document.body, zIndex = "9999" } = t;
    const n = document.createElement("div");
    n.style.position = "relative";
    n.style.zIndex = zIndex;
    if (container !== document.body) {
      n.style.left = "50%";
      n.style.transform = "translateX(-50%)";
    }
    container.appendChild(n);
    this._container = n;
    const s = () => {
      var e;
      if ((e = this._hangingRoot) != null) {
        e.destroy();
      }
      this._hangingRoot = undefined;
      if (n.parentNode) {
        n.parentNode.removeChild(n);
      }
    };
    this._hangingProps = {
      content: e,
      visible: true,
      mask: showMask,
      onRemove: () => {
        s();
      },
      zIndex,
      fixed: container === document.body,
    };
    this._render(this._hangingProps);
  }
  hide() {
    if (this._hangingProps) {
      this._hangingProps.visible = false;
      this._render(this._hangingProps);
    }
  }
  constructor() {
    this._render = (e) => {
      if (this._container) {
        var t;
        var i;
        var a = s.jsx(useEw, H._({}, e));
        var r = this._hangingRoot;
        if (r) {
          r.render(a);
        } else {
          this._hangingRoot =
            ((t = this._container),
            (i = eA.H(t)).render(a),
            (i.destroy = function () {
              setTimeout(() => {
                var e;
                if (!(i == null || (e = i.unmount) == null)) {
                  e.call(i);
                }
              });
            }),
            i);
        }
      }
    };
  }
}
function eT(e) {
  const { content, onCancel, showCancel = true, style = {} } = e;
  return s.jsxs("div", {
    className: "content-wrap-LRotxg",
    style,
    children: [
      content,
      showCancel &&
        s.jsx("span", {
          role: "button",
          tabIndex: 0,
          onKeyDown: c.q,
          className: "cancel-ujhdCi",
          onClick: () => {
            if (onCancel == null) {
              return undefined;
            }
            return onCancel();
          },
          children: l.Ay.t("wen_new_cancel_reference_image", {}, "取消"),
        }),
    ],
  });
}
class ek extends eC.jG {
  dispose() {
    this._dreaminaHanging.hide();
    super.dispose();
  }
  _getImageContainerPosition() {
    let e;
    let t;
    return (
      ((e =
        (t = document.querySelector("#".concat(this._imageContainerId))) == null
          ? undefined
          : t.getBoundingClientRect().top) != null
        ? e
        : 0) + 20
    );
  }
  _setAbility(e) {
    this._imageStore.setCurrentAbilityType(e);
    this._abilityManager.afterAbilitySelect(e);
  }
  _handleRecognizeResult(e, t) {
    const i = X.MP[e];
    if (t !== f.Gj.Success) {
      this._imageStore.setCurrentAbilityType(null);
    }
    switch (t) {
      case f.Gj.Success:
        this._setAbility(e);
        break;
      case f.Gj.NetworkError:
        this._showErrorTips(X.pj);
        break;
      case f.Gj.Empty:
        this._showErrorTips(i);
        break;
      case f.Gj.DownloadImageError:
      case f.Gj.FacePredictError:
        this._showErrorTips(X.pj);
        break;
      case f.Gj.NoSegmentObjectFoundError:
      case f.Gj.SegmentFailedError:
      case f.Gj.PoseDetectError:
        this._showErrorTips(i);
        break;
      case f.Gj.SafetyCheckError:
        this._showErrorTips(X.tK);
        break;
      case f.Gj.IpKeepMultipySubject:
        this._setAbility(e);
        this._showErrorTips(X.TH);
        break;
      case f.Gj.IpKeepNoSubject:
        this._setAbility(e);
        this._showErrorTips(X.jV);
        break;
      case f.Gj.ImageIPIsBlocked:
        this._showErrorTips(X.tK);
    }
  }
  _showErrorTips(e) {
    const t = this._getImageContainerPosition();
    eh.l.error({
      content: l.Ay.t(e),
      position: "top",
      style: {
        position: "relative",
        top: "".concat(t, "px"),
      },
    });
  }
  _delayShowLoading(e, t) {
    setTimeout(() => {
      if (this._imageStore.isProcessing) {
        var t = X.$5[e] || X.ut;
        var i = this._getImageContainerPosition();
        this._dreaminaHanging.show(
          s.jsx(eT, {
            style: {
              top: "".concat(i, "px"),
            },
            content: s.jsxs(s.Fragment, {
              children: [
                s.jsx(ee.w, {
                  size: 16,
                }),
                s.jsx("span", {
                  style: {
                    paddingLeft: "8px",
                  },
                  children: l.Ay.t(t),
                }),
              ],
            }),
            onCancel: () => {
              this._dreaminaHanging.hide();
              this._imageStore.setLoading(false);
              this._abilityManager.cancelRecognize(e);
            },
          }),
        );
      }
    }, t);
  }
  constructor(e, t, i, a, r) {
    var n;
    super();
    n = this;
    this._imageContainerId = e;
    this._imageStore = t;
    this._abilityManager = i;
    this._saveController = a;
    this._containerService = r;
    this.handleChangeAbility = (e) => {
      this._reportReferencePopup(e);
      this.changeAbility(e);
    };
    this.changeAbility = (e) =>
      er._(function* () {
        if (
          !n._imageStore.isProcessing &&
          n._imageStore.currentImage &&
          !n._saveController.store.saving
        ) {
          try {
            n._imageStore.setLoading(true);
            n._delayShowLoading(e, 100);
            if (
              n._abilityManager.checkAsyncFlowSupport(e) &&
              n._imageStore.imageUploadPromise
            ) {
              n._abilityManager.startAsyncTaskGroup({
                includeSafetyReview: true,
                uploadPromise: n._imageStore.imageUploadPromise,
              });
              ed.V.info("AbilitySelectController", "Started async task group");
            } else if (
              !(yield n._imageStore.imageUploadPromise) ||
              !n._imageStore.currentImage.uri
            ) {
              return void ed.V.error("upload image failed");
            }
            if ((t = n._imageStore.currentAbilityConfig) != null) {
              t.beforeLeave();
            }
            var t;
            const i = Y._(H._({}, n._imageStore.currentImage), {
              uri: n._imageStore.currentImage.uri,
            });
            const a = yield n._abilityManager.changeAbility(e, i);
            n._handleRecognizeResult(e, a);
          } catch (error) {
            ed.V.error("Error changing ability:", error);
            if (error instanceof Error && error.message.includes(e_)) {
              return;
            }
            n._showErrorTips(X.pj);
          } finally {
            n._imageStore.setLoading(false);
            n._dreaminaHanging.hide();
          }
        }
      })();
    this._reportReferencePopup = (referenceSet) => {
      var t = this._containerService.createInstance(eN.f);
      t.setParams({
        action: "click_reference",
        referenceSet,
      });
      t.report();
    };
    this._dreaminaHanging = new eR();
  }
}
ek = en.Cg(
  [
    en.Qj(4, k._),
    en.Sn("design:type", Function),
    en.Sn("design:paramtypes", [
      String,
      typeof ReferenceImageStore === "undefined" ? Object : ReferenceImageStore,
      typeof AbilityManager === "undefined" ? Object : AbilityManager,
      typeof AbilitySaveController === "undefined"
        ? Object
        : AbilitySaveController,
      k._ === undefined ? Object : k._,
    ]),
  ],
  ek,
);
function eE(width, height) {
  let i;
  let a = Infinity;
  for (const [r, n] of z.A.entries()) {
    const s = Math.abs(n * height - width);
    if (s < a) {
      i = r;
      a = s;
    }
  }
  return i;
}
class eL {
  get dimensionControl() {
    return {
      customWidth: this.store.customWidth,
      customHeight: this.store.customHeight,
      isLocked: this.store.isLocked,
      isSameAspectRatioWithImage: this.store.isSameAspectRatioWithImage,
      aspectRatio: this.store.aspectRatio,
      imageFitRatio: this.imageFitRatio,
      disableRatioSetting: this.store.disableRatioSetting,
      showRatioSettingWarning: this.store.showRatioSettingWarning,
      imageRangeConfig: this.store.imageRangeConfig,
      handleDimensionChange: this.setDimension,
      handleAspectRatioChange: this.handleAspectRatioChange,
      handleLockChange: this.handleLockChange,
      handleKeepSameAspectRatioChange: this.handleKeepSameAspectRatioChange,
    };
  }
  get imageFitRatio() {
    if (!this.store.currentImage) {
      return "1:1";
    }
    const e =
      eE(this.store.currentImage.width, this.store.currentImage.height) ||
      ez.DAImageRatioType.ImageRatioType_11;
    return eD.F(e);
  }
  _reportPictureRatioClick(e) {
    const t = this._containerService.createInstance(T.D);
    t.setParams(
      H._(
        {
          action: "click",
        },
        e,
      ),
    );
    t.report();
  }
  constructor(e, t) {
    this.store = e;
    this._containerService = t;
    this.setLock = (e) => {
      var { customWidth, customHeight } = this.store;
      var a = e ? "".concat(customWidth, ":").concat(customHeight) : undefined;
      if (a) {
        this.setAspectRatio(a);
      } else {
        this.store.setAspectRatio(undefined);
      }
      this.store.setLock(e);
    };
    this.setDimension = (e, t) => {
      this.store.setDimension(e, t);
    };
    this.setAspectRatio = (e) => {
      this.store.setAspectRatio(e);
      this.store.setLock(true);
    };
    this.handleKeepSameAspectRatioChange = (e) => {
      this._reportPictureRatioClick({
        item: "same_ratio_refer",
      });
      if (!e) {
        this.setAspectRatio("1:1");
        this.store.setIsSameAspectRatioWithImage(false);
        return;
      }
      this.store.setAspectRatio(undefined);
      var { currentImageRatio } = this.store;
      var { width, height } = eP.F(
        currentImageRatio,
        this.store.imageRangeConfig,
      );
      this.setDimension(width, height);
      this.store.setIsSameAspectRatioWithImage(true);
    };
    this.handleAspectRatioChange = (ratioValue) => {
      this._reportPictureRatioClick({
        item: "ratio",
        ratioValue,
      });
      this.setAspectRatio(ratioValue);
    };
    this.handleLockChange = (e) => {
      this._reportPictureRatioClick({
        item: "lock",
      });
      this.setLock(e);
    };
  }
}
eL = en.Cg(
  [
    en.Qj(1, k._),
    en.Sn("design:type", Function),
    en.Sn("design:paramtypes", [
      typeof ReferenceImageStore === "undefined" ? Object : ReferenceImageStore,
      k._ === undefined ? Object : k._,
    ]),
  ],
  eL,
);
class eU extends eC.jG {}
class eZ extends eU {
  dispose() {
    this._disposers.forEach((e) => e());
    this._disposers = [];
    super.dispose();
  }
  start() {
    this._autoUpdateShowRatioSettingWarning();
    const e = eM.mJ(
      () => [
        this._imageStore.currentAbilityType,
        this._imageStore.customWidth,
        this._imageStore.customHeight,
      ],
      eW.A(this._autoUpdateShowRatioSettingWarning, 200, {
        leading: false,
      }),
    );
    this._disposers.push(e, e);
  }
  stop() {
    this.dispose();
  }
  constructor(e) {
    super();
    this._imageStore = e;
    this._disposers = [];
    this._autoUpdateShowRatioSettingWarning = () => {
      var { currentAbilityType, customWidth, customHeight, currentImage } =
        this._imageStore;
      if (
        currentAbilityType !== f.gP.ControlNetDepth &&
        currentAbilityType !== f.gP.ControlNetCanny
      ) {
        return void this._imageStore.setShowRatioSettingWarning(false);
      }
      el.F4(currentImage, "currentImage is nil");
      var r =
        eE(currentImage.width, currentImage.height) ||
        ez.DAImageRatioType.ImageRatioType_11;
      var n = z.A.get(r) || z.i.OneOne;
      var s = currentImage.width / currentImage.height;
      var o = Math.abs(customWidth / customHeight - s);
      var c = o > Math.abs(n - s) && o > eF.S;
      this._imageStore.setShowRatioSettingWarning(c);
    };
  }
}
class eB {
  preload() {
    setTimeout(() => {
      this._executePreloadRecognizeTaskInIdleTime();
      this._uploadTransparentPngInIdleTime();
    }, 1000);
  }
  _uploadTransparentPngInIdleTime() {
    let e;
    let t;
    let i;
    const a = (e = this._imageStore.currentImage) == null ? undefined : e.url;
    el.F4(a, "url is nil");
    (
      ((t = window) == null ? undefined : t.requestIdleCallback) ||
      ((i = window) == null ? undefined : i.setTimeout)
    )(() => {
      eG.c({
        fileOrUrl: a,
        containerService: this._containerService,
      });
    });
  }
  _executePreloadRecognizeTaskInIdleTime() {
    this._getPreloadTask().forEach((e) => {
      this._asyncQueue.addTask(e.loader);
    });
  }
  _getPreloadTask() {
    const e = [];
    this._imageStore.abilityConfigs.forEach((t) => {
      e.push({
        loader: () =>
          er
            ._(function* () {
              if (
                ![f.gP.ControlNetPose, f.gP.ControlNetCanny].includes(
                  t.abilityType,
                )
              ) {
                yield this._imageStore.imageUploadPromise;
                let e;
                const i =
                  (e = this._imageStore.currentImage) == null
                    ? undefined
                    : e.uri;
                el.F4(i, "uri is nil");
                ed.V.info("blend alert preload task: ", t.abilityType);
                yield t.recognizer.preRecognize(i);
              }
            })
            .call(this),
      });
    });
    return e;
  }
  constructor(e, t) {
    this._imageStore = e;
    this._containerService = t;
    this._asyncQueue = new eO.O({
      concurrent: 2,
    });
  }
}
eB = en.Cg(
  [
    en.Qj(1, k._),
    en.Sn("design:type", Function),
    en.Sn("design:paramtypes", [
      typeof ReferenceImageStore === "undefined" ? Object : ReferenceImageStore,
      k._ === undefined ? Object : k._,
    ]),
  ],
  eB,
);
class eQ extends eC.jG {
  get isUploading() {
    return this._isUploading;
  }
  dispose() {
    this.removeResizeObserver();
    super.dispose();
  }
  loadImageDetail(e, t) {
    return er
      ._(function* () {
        const {
          width = 0,
          height = 0,
          file = null,
          url = "",
          uri,
        } = {
          width: 0,
          height: 0,
          file: null,
          url: "",
          ...e,
        };
        let o = "";
        if (url) {
          o = url;
        } else if (file) {
          o = URL.createObjectURL(file);
        }
        if (width && height && uri) {
          this._updateImageInfo({
            width,
            height,
            url: o,
            uri,
          });
          this._calculateSizeAndUpdate(t);
          return;
        }
        if (o) {
          try {
            const { width: width_1, height: height_1 } = yield eX.y(o);
            this._updateImageInfo({
              width: width_1,
              height: height_1,
              url: o,
            });
            this._calculateSizeAndUpdate(t);
          } catch (error) {
            ed.V.error("Failed to load image:", error);
            this._updateImageInfo({
              width: 0,
              height: 0,
              url: o,
            });
          }
        }
      })
      .call(this);
  }
  importImage(e) {
    return er
      ._(function* () {
        if (this._uploadPromise) {
          return this._uploadPromise;
        }
        if ("file" in e) {
          let t;
          let i;
          if (!this._isFileValid(e.file)) {
            return void this._showUploadOverLimitToast();
          }
          this._isUploading = true;
          this._uploadPromise =
            ((t = {
              containerService: this._containerService,
              file: e.file,
              isAdd: true,
            }),
            (i = er._(function* () {
              const { containerService, file } = t;
              const a = eY.cQ(containerService, eH.H);
              const r = yield a.uploadImage({
                file,
              });
              if (!r.ok) {
                return eg.xz(r.code, r.msg, r.errorInfo);
              }
              const { uri } = r.value;
              return eg.TZ(uri);
            })()),
            er._(function* () {
              const e = yield i;
              if (e.ok) {
                return e.value;
              }
            })());
        } else {
          this._uploadPromise = Promise.resolve(e.uri);
        }
        this._imageStore.setImageUploadPromise(this._uploadPromise);
        try {
          const a = yield this._uploadPromise;
          if (!a) {
            throw Error("Failed to get image uri");
          }
          const r = this._imageStore.currentImage;
          this._imageStore.setCurrentImage({
            width: (r == null ? undefined : r.width) || 0,
            height: (r == null ? undefined : r.height) || 0,
            url: (r == null ? undefined : r.url) || "",
            uri: a,
          });
          this._reportImportReferenceImageMaterial({
            status: "success",
          });
          return a;
        } catch (error) {
          const n = eu.r(error);
          this._reportImportReferenceImageMaterial({
            status: "fail",
            failReason: "Failed to import image: ".concat(n.msg),
          });
          ed.V.error("Failed to import image:", n.msg);
          this._showUploadErrorToast();
          return;
        } finally {
          this._isUploading = false;
          this._uploadPromise = null;
        }
      })
      .call(this);
  }
  addResizeObserver(e) {
    this.removeResizeObserver();
    const t = document.querySelector("#".concat(e));
    if (t) {
      this._resizeObserver = new ResizeObserver(() => {
        this._calculateSizeAndUpdate(e);
      });
      this._resizeObserver.observe(t);
    }
  }
  removeResizeObserver() {
    if (this._resizeObserver) {
      this._resizeObserver.disconnect();
      this._resizeObserver = undefined;
    }
  }
  _isFileValid(e) {
    return e.size < 31457280;
  }
  _calculateSizeAndUpdate(e) {
    const t = this._getPaintContainerSize(e);
    this._updateImageContainerSize(t.width, t.height);
  }
  _getPaintContainerSize(e) {
    const t = document.querySelector("#".concat(e));
    if (t) {
      return {
        width: t.offsetWidth,
        height: t.offsetHeight,
      };
    }
    return {
      width: 0,
      height: 0,
    };
  }
  _updateImageContainerSize(e, t) {
    this._imageContainerSize = {
      width: e,
      height: t,
    };
    this._imageStore.setContainerSize({
      width: e,
      height: t,
    });
  }
  _updateImageInfo(e) {
    this._imageInfo = e;
    let t;
    const uri =
      e.uri ||
      ((t = this._imageStore.currentImage) == null ? undefined : t.uri) ||
      "";
    this._imageStore.setCurrentImage({
      width: e.width,
      height: e.height,
      url: e.url,
      uri,
    });
  }
  _reportImportReferenceImageMaterial(e) {
    const t = this._containerService.createInstance(e$.k);
    t.setParams(
      H._(
        {
          position: "generation",
          modal: "aigc_image",
          materialSource: "local",
          materialType: "image",
          actionType: "click",
        },
        e,
      ),
    );
    t.report("dev");
  }
  constructor(e, t) {
    super();
    this._imageStore = e;
    this._containerService = t;
    this._isUploading = false;
    this._imageInfo = {
      width: 0,
      height: 0,
      url: "",
    };
    this._uploadPromise = null;
    this._imageContainerSize = {
      width: 0,
      height: 0,
    };
    this._showUploadErrorToast = () => {
      var e = l.Ay.t(
        "web_new_result_toast_neterror_retry",
        {},
        "网络异常，请重试",
      );
      eh.l.warning(e);
    };
    this._showUploadOverLimitToast = () => {
      var e = l.Ay.t(
        "web_new_upload_error_m",
        {
          number0: 30,
        },
        "请上传图片大小不超过{number0}MB的图片",
      );
      eh.l.warning(e);
    };
  }
}
eQ = en.Cg(
  [
    en.Qj(1, k._),
    en.Sn("design:type", Function),
    en.Sn("design:paramtypes", [
      typeof ReferenceImageStore === "undefined" ? Object : ReferenceImageStore,
      k._ === undefined ? Object : k._,
    ]),
  ],
  eQ,
);
class e1 extends eC.jG {
  dispose() {
    super.dispose();
  }
}
class e4 extends e1 {
  execute() {
    return er
      ._(function* () {
        if (this._conflictParams.disabled) {
          return Promise.resolve();
        }
        const abilityConfigs = this._imageStore.abilityConfigs;
        const t = this._calculateAbilityConflictAndUpdate(
          abilityConfigs,
          this._conflictParams,
        );
        this._calculateHoverInfoAndUpdate(abilityConfigs, t);
        return Promise.resolve();
      })
      .call(this);
  }
  dispose() {
    super.dispose();
  }
  _calculateHoverInfoAndUpdate(e, t) {
    return er
      ._(function* () {
        const i = yield this._imcConfigService.getImcConfigByKey(
          eV.r1.ImagineConfigs,
        );
        if (i) {
          e.forEach((e) => {
            if (!e.disabled) {
              var a;
              var r;
              var hoverTips =
                ((a = e.abilityType),
                (r = {
                  [f.gP.ByteEdit]: l.Ay.t(
                    "web_new_image_reference_custom_description_detailed",
                    {},
                    "你可以直接描述如何调整图片，例如：“把背景换个颜色”、“把长发改成短发”等等",
                  ),
                  [f.gP.FaceGan]: "",
                  [f.gP.BgPaint]: "",
                  [f.gP.IpKeep]: "",
                  [f.gP.ControlNetCanny]: "",
                  [f.gP.ControlNetDepth]: "",
                  [f.gP.ControlNetPose]: "",
                  [f.gP.Unknown]: "",
                  [f.gP.ControlNet]: "",
                  [f.gP.StyleReference]: "",
                  [f.gP.StyleCode]: "",
                  [f.gP.T2I]: "",
                  [f.gP.I2I]: "",
                }[a])) !== null && r !== undefined
                  ? r
                  : "";
              e.updateHoverInfo({
                hoverType: "video",
                hoverTips,
                hoverUrl: ((e, t) => {
                  switch (e.abilityType) {
                    case f.gP.ByteEdit:
                      return t.byteEdit;
                    case f.gP.BgPaint:
                      return t.bgPaint;
                    case f.gP.FaceGan:
                      return t.faceGan;
                    case f.gP.ControlNetCanny:
                      return t.canny;
                    case f.gP.ControlNetDepth:
                      return t.depth;
                    case f.gP.ControlNetPose:
                      return t.pose;
                    case f.gP.StyleReference:
                      return t.styleReference;
                    case f.gP.IpKeep:
                      return t.ipKeep;
                    default:
                      return "";
                  }
                })(e, i),
              });
              return;
            }
            var s = this._calculateConflictHoverInfo(e.abilityType, t);
            e.updateHoverInfo(s);
          });
        }
      })
      .call(this);
  }
  _calculateConflictHoverInfo(e, t) {
    let i = "";
    let hoverUrl = "";
    if (e === f.gP.BgPaint) {
      i = this._getBgPaintConflictHoverInfo(e, t);
    }
    if (!i) {
      const r = this._getAbilityConflictHoverInfo(e, t);
      i = r.conflictTips;
      hoverUrl = r.conflictHoverUrl;
    }
    return {
      hoverType: "image",
      hoverTips: i,
      hoverUrl,
    };
  }
  _getAbilityConflictHoverInfo(e, t) {
    const i = eK.ef[e];
    const a = t.get(e);
    let conflictTips = eK._I[e];
    let conflictHoverUrl = "";
    if (a && a.length > 0) {
      let s;
      const o = a[a.length - 1];
      conflictTips = eJ.A(i) ? i : (s = i[o]) != null ? s : conflictTips;
      conflictHoverUrl = this._getConflictHoverUrl(e, o);
    }
    return {
      conflictTips,
      conflictHoverUrl,
    };
  }
  _getConflictHoverUrl(e, t) {
    if (eK.lD[e] !== t) {
      return "";
    }
    for (
      let i = this._conflictParams.existAbilityList.length - 1;
      i >= 0;
      i--
    ) {
      const a = this._conflictParams.existAbilityList[i];
      if (ea.G(a) === t) {
        return eq.N(a);
      }
    }
    return "";
  }
  _getBgPaintConflictHoverInfo(e, t) {
    let i;
    const a = t.get(e);
    const r = [];
    if (a != null) {
      a.forEach((e) => {
        if (
          [
            f.gP.ControlNetCanny,
            f.gP.ControlNetDepth,
            f.gP.ControlNetPose,
          ].includes(e)
        ) {
          r.push(e);
        }
      });
    }
    i = r.length;
    return {
      1: l.Ay.t(
        "web_new_multiple_object_cancel1",
        {
          string0: l.Ay.t(eK.$V[r[0]], {}, eK.hy[r[0]]),
        },
        "Can’t reference an object after selecting {string0}",
      ),
      2: l.Ay.t(
        "web_new_multiple_object_cancel2",
        {
          string0: l.Ay.t(eK.$V[r[0]], {}, eK.hy[r[0]]),
          string1: l.Ay.t(eK.$V[r[1]], {}, eK.hy[r[1]]),
        },
        "Can’t reference an object after selecting {string0} and {string1}",
      ),
      3: l.Ay.t(
        "web_new_multiple_object_cancel3",
        {
          string0: l.Ay.t(eK.$V[r[0]], {}, eK.hy[r[0]]),
          string1: l.Ay.t(eK.$V[r[1]], {}, eK.hy[r[1]]),
          string2: l.Ay.t(eK.$V[r[2]], {}, eK.hy[r[2]]),
        },
        "Can’t reference an object after selecting {string0}, {string1}, and {string2}",
      ),
    }[i];
  }
  _calculateAbilityConflictAndUpdate(e, t) {
    const i = this._calculateAbilityConflictMap(t);
    i.forEach((t, i) => {
      var a = e.find((e) => e.abilityType === i);
      if (a) {
        a.updateDisabledStatus(true);
      }
    });
    return i;
  }
  _calculateAbilityConflictMap(e) {
    const { existAbilityList } = e;
    let { conflictList } = e;
    if (!conflictList) {
      conflictList = eK.Jy;
    }
    const a = new Map();
    conflictList.forEach((e) => {
      existAbilityList.forEach((t) => {
        var i = ea.G(t);
        var r = e.indexOf(i);
        if (r !== -1) {
          var n = [...e];
          n.splice(r, 1);
          n.forEach((e) => {
            var t;
            var r = (t = a.get(e)) != null ? t : [];
            r.push(i);
            a.set(e, r);
          });
        }
      });
    });
    return this._excludeSpecialConflictAbility(a);
  }
  _excludeSpecialConflictAbility(e) {
    const t = [];
    e.forEach((e, i) => {
      var a = 0;
      var r = 0;
      if (i === f.gP.FaceGan || i === f.gP.StyleReference) {
        e.forEach((e) => {
          if (e === f.gP.FaceGan) {
            a++;
          }
          if (e === f.gP.StyleReference) {
            r++;
          }
        });
        if (i === f.gP.FaceGan && !e.some((e) => e !== f.gP.FaceGan) && a < 2) {
          e.splice(e.indexOf(f.gP.FaceGan), 1);
        }
        if (
          i === f.gP.StyleReference &&
          !e.some((e) => e !== f.gP.StyleReference) &&
          r < 5
        ) {
          for (var n = 0; n < r; n++) {
            e.splice(e.indexOf(f.gP.StyleReference), 1);
          }
        }
        if (e.length === 0) {
          t.push(i);
        }
      }
    });
    t.forEach((t) => {
      e.delete(t);
    });
    return e;
  }
  constructor(e, t, i, a) {
    super();
    this._imageStore = e;
    this._conflictParams = t;
    this._containerService = i;
    this._imcConfigService = a;
  }
}
e4 = en.Cg(
  [
    en.Qj(2, k._),
    en.Qj(3, e0.R),
    en.Sn("design:type", Function),
    en.Sn("design:paramtypes", [
      typeof ReferenceImageStore === "undefined" ? Object : ReferenceImageStore,
      typeof ConflictParams === "undefined" ? Object : ConflictParams,
      k._ === undefined ? Object : k._,
      e0.R === undefined ? Object : e0.R,
    ]),
  ],
  e4,
);
class e2 extends e1 {
  execute() {
    return er
      ._(function* () {
        if (
          ((e = this._initialBlendParams) == null || !e.model) &&
          !(this._conflictParams.existAbilityList.length > 0)
        ) {
          var e;
          const t = this._imageStore.abilityConfigs.find((e) => !e.disabled);
          if (t) {
            return this._abilitySelectController.changeAbility(t.abilityType);
          }
        }
      })
      .call(this);
  }
  constructor(e, t, i, a) {
    super();
    this._abilitySelectController = e;
    this._imageStore = t;
    this._conflictParams = i;
    this._initialBlendParams = a;
  }
}
class e3 extends e1 {
  execute() {
    return er
      ._(function* () {
        yield this._referenceImageLoader.loadImageDetail(
          this._image,
          this._imageContainerId,
        );
        this._referenceImageLoader.importImage(this._image);
        this._referenceImageLoader.addResizeObserver(this._imageContainerId);
        return Promise.resolve();
      })
      .call(this);
  }
  dispose() {
    this._referenceImageLoader.removeResizeObserver();
    super.dispose();
  }
  constructor(e, t, i) {
    super();
    this._referenceImageLoader = e;
    this._image = t;
    this._imageContainerId = i;
  }
}
class e5 extends e1 {
  execute() {
    return er
      ._(function* () {
        const { initialBlendParams } = this._params;
        this._initializeUiConfig();
        if (initialBlendParams == null ? undefined : initialBlendParams.model) {
          return this._handleRestoreData();
        }
        return this._handleCreateImageData();
      })
      .call(this);
  }
  _initializeUiConfig() {
    const { uiConfig } = this._params;
    if (uiConfig) {
      this._params.imageStore.setUiConfig(uiConfig);
    }
  }
  _handleCreateImageData() {
    return er
      ._(function* () {
        yield this._restoreImageData();
        this._restoreCommonData();
      })
      .call(this);
  }
  _handleRestoreData() {
    return er
      ._(function* () {
        yield this._restoreImageData();
        this._restoreCommonData();
        this._restoreAbilityData();
      })
      .call(this);
  }
  _restoreAbilityData() {
    let e;
    let t;
    const { initialBlendParams, image, imageStore, abilitySelectController } =
      this._params;
    el.F4(
      initialBlendParams == null || (e = initialBlendParams.model) == null
        ? undefined
        : e.abilityName,
      "ability name error",
    );
    const s = ea.G(initialBlendParams.model);
    imageStore.setCurrentAbilityType(s);
    abilitySelectController.changeAbility(s);
    if ((t = imageStore.currentAbilityConfig) != null) {
      t.store.initWithImagineParams(
        initialBlendParams,
        "uri" in image ? image.uri : undefined,
      );
    }
  }
  _restoreImageData() {
    const { image } = this._params;
    return this._containerService
      .createInstance(
        e3,
        this._params.referenceImageLoader,
        image,
        this._params.imageContainerId,
      )
      .execute();
  }
  _restoreCommonData() {
    const { imageStore, initialBlendParams } = this._params;
    el.F4(initialBlendParams, "initialBlendParams is nil");
    const {
      isDimensionLocked,
      generateWidth,
      generateHeight,
      ratio,
      imageRangeConfig,
      aspectRatioImageSizeMap,
    } = initialBlendParams;
    if (imageStore.isLocked !== isDimensionLocked) {
      imageStore.setLock(!!isDimensionLocked);
    }
    imageStore.setDimension(generateWidth, generateHeight);
    imageStore.setImageRangeConfig(imageRangeConfig);
    imageStore.setAspectRatioImageSizeMap(aspectRatioImageSizeMap);
    if (ratio) {
      imageStore.setAspectRatio(ratio);
    }
    if (generateWidth && generateHeight) {
      imageStore.setDimension(generateWidth, generateHeight);
    }
  }
  constructor(e, t) {
    super();
    this._params = e;
    this._containerService = t;
  }
}
e5 = en.Cg(
  [
    en.Qj(1, k._),
    en.Sn("design:type", Function),
    en.Sn("design:paramtypes", [Object, k._ === undefined ? Object : k._]),
  ],
  e5,
);
const ti = {
  Resize: "resize",
  Move: "move",
  Rotate: "rotate",
  None: "none",
};
const ta = {
  Default: "default",
  ResizeTopLeftToBottomRight: "resize_top_left_to_bottom_right",
  ResizeTopRightToBottomLeft: "resize_top_right_to_bottom_left",
  Move: "move",
  RotateTop: "rotate_top",
  RotateRight: "rotate_right",
  RotateBottom: "rotate_bottom",
  RotateLeft: "rotate_left",
  Crosshair: "crosshair",
};
const tr = {
  Brush: "brush",
  Eraser: "eraser",
  Move: "move",
  Select: "select",
  BoxSelect: "box_select",
};
const TnContext = p.createContext(null);
const TnContext_Provider = TnContext.Provider;
const useTo = () => p.useContext(TnContext);
const useTu = (e) => {
  var {
    paintRef,
    store,
    hooks: { onEditorCreated, onPaintInstanceCreated, onEditorDestroy },
  } = e;
  var sRef = p.useRef(null);
  var oRef = p.useRef(null);
  p.useEffect(() => {
    if (!sRef.current) {
      sRef.current = new tc.F({
        container: paintRef.current,
      });
      sRef.current.registerMode("bg_paint", tl.y);
      oRef.current = sRef.current.changeMode("bg_paint");
      onEditorCreated(sRef.current);
      onPaintInstanceCreated(oRef.current);
      store.updateIsEditorReady(true);
      return () => {
        var e;
        if ((e = sRef.current) != null) {
          e.destroy();
        }
        sRef.current = null;
        onEditorDestroy();
      };
    }
  }, [store]);
  return {
    graphicEditorRef: sRef,
    paintInstanceRef: oRef,
  };
};
const defaultSize = {
  [tr.Brush]: td.FY,
  [tr.Eraser]: td.FY,
};
const { k: k_1, b: b_1 } = th.q(
  {
    x: td.AC,
    y: td.ob,
  },
  {
    x: td.Gy,
    y: td.kO,
  },
);
function ty(e) {
  const t =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return Math.round((k_1 * e + b_1) / Math.abs(t));
}
function tf(e) {
  const t =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  const i = parseInt(e.substring(1, 3), 16);
  const a = parseInt(e.substring(3, 5), 16);
  const r = parseInt(e.substring(5, 7), 16);
  return "rgba(".concat(i, ",").concat(a, ",").concat(r, ",").concat(t, ")");
}
function tI(e, t) {
  if (isNaN(e)) {
    return t;
  }
  return e;
}
const useT = (e, referenceImageStore) => {
  var i = p.useCallback((e, t, i) => {
    var a = t / i;
    if (e === a) {
      return {
        width: t,
        height: i,
      };
    }
    if (e > a) {
      return {
        width: t,
        height: t / e,
      };
    }
    return {
      width: tI(i * e, t),
      height: tI(i, i),
    };
  }, []);
  var a = p.useCallback((e, a) => {
    var r;
    var { width, height } = {
      width: (r = referenceImageStore.containerSize.width),
      height: r / X.Rh,
    };
    var { width: width_1, height: height_1 } = i(a, width, height);
    var {
      scale,
      width: width_2,
      height: height_2,
    } = ((e) => {
      const { paintWidth, paintHeight, imageWidth, imageHeight, fitMode } = e;
      if (fitMode === tS.j.CenterCrop) {
        return {
          scale: 1,
          width: paintWidth,
          height: paintHeight,
        };
      }
      const s = paintWidth / paintHeight;
      const o = imageWidth / imageHeight;
      if (o === s) {
        return {
          scale: paintWidth / imageWidth,
          width: paintWidth,
          height: paintHeight,
        };
      }
      if (o > s) {
        return {
          scale: paintWidth / imageWidth,
          width: paintWidth,
          height: paintWidth / o,
        };
      }
      return {
        scale: tI(paintHeight / imageHeight, 1),
        width: tI(paintHeight * o, 0),
        height: tI(paintHeight, 0),
      };
    })({
      paintWidth: width_1,
      paintHeight: height_1,
      imageWidth: e.width,
      imageHeight: e.height,
    });
    return {
      paintWidth: width_1,
      paintHeight: height_1,
      imageWidth: width_2,
      imageHeight: height_2,
      imageScale: scale,
    };
  }, []);
  var r = z.A.get(tM.i(referenceImageStore.aspectRatio));
  var n =
    referenceImageStore.customWidth / referenceImageStore.customHeight || P.at;
  var { paintWidth, paintHeight, imageWidth, imageHeight } = a(
    e,
    r != null ? r : n,
  );
  return {
    paintWidth,
    paintHeight,
    imageWidth,
    imageHeight,
  };
};
function tA() {
  let e;
  let t;
  const { store } = (e = useTo()) != null ? e : {};
  const {
    moveX = 0,
    moveY = 0,
    scale = 1,
    rotate = 0,
  } = (t = tN.F(store, (e) => ({
    moveX: e.moveX,
    moveY: e.moveY,
    scale: e.scale,
    rotate: e.rotate,
  }))) != null
    ? t
    : {};
  return {
    moveX,
    moveY,
    scale,
    rotate,
  };
}
const tR = p.memo(function (e) {
  let t;
  const {
    containerStyle,
    imageHeight,
    imageWidth,
    children,
    paintWidth,
    paintHeight,
    rawImageWidth,
    rawImageHeight,
    abilityType,
    isInitialLoad,
    imageUrl,
    largeImageInfo,
  } = e;
  const v = tx._(e, [
    "containerStyle",
    "imageHeight",
    "imageWidth",
    "children",
    "paintWidth",
    "paintHeight",
    "rawImageWidth",
    "rawImageHeight",
    "abilityType",
    "isInitialLoad",
    "imageUrl",
    "largeImageInfo",
  ]);
  ((e) => {
    let t;
    const {
      rawImageWidth,
      rawImageHeight,
      paintWidth,
      paintHeight,
      imageUrl,
      abilityType,
      largeImageInfo,
    } = e;
    const lRef = p.useRef(false);
    const u = useTo();
    const { referenceImageStore, store } = u != null ? u : {};
    const h =
      (t =
        referenceImageStore == null
          ? undefined
          : referenceImageStore.aspectRatio) != null
        ? t
        : X.UT;
    p.useEffect(() => {
      if (
        !lRef.current &&
        rawImageHeight &&
        rawImageWidth &&
        imageUrl &&
        (abilityType === f.gP.BgPaint || abilityType === f.gP.ByteEdit)
      ) {
        lRef.current = true;
        var { width, height } = tw.r({
          largeImageInfo,
          scale: 1,
          rawImageSize: {
            width: rawImageWidth,
            height: rawImageHeight,
          },
        });
        if (store != null) {
          store.updateRawImageSize(rawImageWidth, rawImageHeight);
        }
        if (store != null) {
          store.updateImageUrl(imageUrl);
        }
        if (store != null) {
          store.initActualPaintSize(width, height);
        }
        if (store != null) {
          store.updatePaintSize(paintWidth, paintHeight, false);
        }
      }
    }, [
      store,
      rawImageHeight,
      rawImageWidth,
      paintWidth,
      paintHeight,
      imageUrl,
      abilityType,
      h,
      largeImageInfo,
    ]);
    p.useEffect(() => {
      if (lRef.current) {
        var { width, height } = tw.r({
          largeImageInfo,
          scale: 1,
          rawImageSize: {
            width: rawImageWidth,
            height: rawImageHeight,
          },
        });
        if (store != null) {
          store.updateActualPaintSize(width, height);
        }
      }
    }, [store, largeImageInfo, rawImageHeight, rawImageWidth]);
    p.useEffect(() => {
      if (lRef.current) {
        if (store != null) {
          store.updatePaintSize(paintWidth, paintHeight, true);
        }
      }
    }, [store, paintWidth, paintHeight]);
  })({
    rawImageWidth,
    rawImageHeight,
    paintWidth,
    paintHeight,
    imageUrl,
    abilityType,
    largeImageInfo,
  });
  const { store } = (t = useTo()) != null ? t : {};
  const M = tN.F(store, (e) => e.isTransforming);
  const I = ((e) => {
    const {
      imageWidth,
      imageHeight,
      paintWidth,
      paintHeight,
      isInitActualSize,
    } = e;
    const { moveX, moveY, scale, rotate } = tA();
    const u = Math.floor(
      isInitActualSize
        ? moveX - imageWidth / 2
        : paintWidth / 2 - imageWidth / 2,
    );
    const g = Math.floor(
      isInitActualSize
        ? moveY - imageHeight / 2
        : paintHeight / 2 - imageHeight / 2,
    );
    return {
      width: "".concat(imageWidth, "px"),
      height: "".concat(imageHeight, "px"),
      transform: "translate("
        .concat(u, "px, ")
        .concat(g, "px) scale(")
        .concat(scale, ") rotate(")
        .concat(rotate, "deg)"),
    };
  })({
    imageHeight,
    imageWidth,
    paintWidth,
    paintHeight,
    isInitActualSize: store == null ? undefined : store.isInitActualSize,
  });
  return s.jsx(
    "div",
    Y._(H._({}, v), {
      style: H._({}, containerStyle, I, {
        transition: isInitialLoad || M ? "none" : "all 300ms ease-in-out",
      }),
      children,
    }),
  );
});
const tT = {
  "paint-container": "paint-container-DCz0Sf",
  paintContainer: "paint-container-DCz0Sf",
  "paint-content": "paint-content-eEUbyL",
  paintContent: "paint-content-eEUbyL",
  "image-wrap": "image-wrap-n5lyQr",
  imageWrap: "image-wrap-n5lyQr",
  image: "image-Z_lU7u",
  "imagine-graphic-editor": "imagine-graphic-editor-bO1EST",
  imagineGraphicEditor: "imagine-graphic-editor-bO1EST",
  hidden: "hidden-fhIKrA",
  fadeOut: "fadeOut-NfDNMV",
  visible: "visible-VLenoa",
  fadeIn: "fadeIn-k4jkwB",
};
const tk = d.PA(function (e) {
  const {
    paintWidth,
    paintHeight,
    imageWidth,
    imageHeight,
    imageW,
    imageH,
    abilityType,
    url,
    isInitialLoad,
    largeImageInfo,
    paintRef,
    paintContentRef,
    instances,
  } = e;
  const { resizeInstance, dragInstance } = instances;
  const f = p.useMemo(
    () => [resizeInstance, dragInstance],
    [resizeInstance, dragInstance],
  );
  const { store } = useTo();
  const { isEditorReady } = store;
  const {
    elementRef,
    elementStyle,
    resetTransformStyle,
    activateAllWatchers,
    deactivatedAllWatchers,
  } = tj.c(f);
  p.useEffect(() => {
    activateAllWatchers();
    return () => {
      deactivatedAllWatchers();
    };
  }, [
    resetTransformStyle,
    activateAllWatchers,
    deactivatedAllWatchers,
    elementRef,
  ]);
  const NRef = p.useRef(null);
  p.useEffect(() => {
    var e = () => {
      var NRef_current = NRef.current;
      if (NRef_current) {
        var { offsetHeight, offsetWidth } = NRef_current;
        dragInstance.setRangeContainer(NRef_current, {
          width: offsetWidth,
          height: offsetHeight,
        });
      }
    };
    e();
    window.addEventListener("resize", e);
    return () => {
      window.removeEventListener("resize", e);
    };
  }, [dragInstance]);
  return s.jsx("div", {
    ref: NRef,
    className: tT.paintContainer,
    id: "paint-container",
    onMouseDown: (e) => {
      var { target } = e;
      if (target === paintContentRef.current || target === NRef.current) {
        store.updateIsSelectImage(false);
      }
    },
    style: {
      justifyContent: "center",
    },
    children: s.jsx("div", {
      style: H._({}, elementStyle),
      ref: elementRef,
      "data-role": "role-frame",
      className: tT.imageWrap,
      children: s.jsx("div", {
        className: tT.paintContent,
        style: {
          width: "".concat(paintWidth, "px"),
          height: "".concat(paintHeight, "px"),
        },
        ref: paintContentRef,
        children: s.jsxs(tR, {
          abilityType,
          className: tT.imageContainer,
          imageWidth,
          imageHeight,
          paintHeight,
          paintWidth,
          rawImageHeight: imageH,
          rawImageWidth: imageW,
          containerStyle: {
            transition: isInitialLoad ? "none" : "all 300ms ease-in-out",
          },
          largeImageInfo,
          isInitialLoad,
          imageUrl: url,
          children: [
            s.jsx(tb.sg, {
              placeholder: url
                ? s.jsx(tC.I, {
                    size: 24,
                  })
                : null,
              className: tT.image,
              imageStyle: {
                overflow: "hidden",
                objectFit: "contain",
              },
              src: C.m(url, null, {
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
                  "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1-lZwWFJqQmtXRXBzWTNrNWFtSXlO$EJh$np$d1R*Z*tiR0p0$m5sWld*SjJZMms1-0dKd$$te*pi$FZvWWtNNWJWcFhSakJr$0$wc1kzaz$jR0p-%m01-$$6Rn$Xb*Mx-kdOdFJqQmlNM*wy$1RJNWRHTkhPWFZh$np$d1kzaz$l$nB-$214amJWWjFX$EpWZEd*WE1Xa*FNbF-wWWxjNWExbFhkM1paTWpsMFkw-z$k$nB-TlRCam$%bDNX$mRzZFdSRE1XcFpWel$5$1ZoTmRtTkhSbkJp-mx*MFd%Skdk$1J0%m5wTWJsSjZa$WRHZ$ZvelZubz0",
              }),
              crossOrigin: "anonymous",
              "data-apm-action": "image-paint",
            }),
            s.jsx("div", {
              className: tT.imagineGraphicEditor,
              ref: paintRef,
              style: {
                width: "".concat(imageWidth, "px"),
                height: "".concat(imageHeight, "px"),
                opacity: +!!isEditorReady,
              },
            }),
          ],
        }),
      }),
    }),
  });
});
const tz = d.PA(function (e) {
  const {
    image,
    referenceImageStore,
    store,
    abilityType,
    onEditorCreated,
    onPaintInstanceCreated,
    onEditorDestroy,
    customWidth,
    customHeight,
  } = e;
  const gRef = p.useRef(null);
  const dRef = p.useRef(null);
  const [h, setH] = p.useState(true);
  const v = customWidth / customHeight;
  const yRef = p.useRef(v);
  p.useEffect(() => {
    if (v !== yRef.current && h) {
      setH(false);
    }
  }, [v, h]);
  const { paintWidth, paintHeight, imageWidth, imageHeight } = useT(
    image,
    referenceImageStore,
  );
  const { graphicEditorRef, paintInstanceRef } = useTu({
    paintRef: dRef,
    store: store.paintStore,
    hooks: {
      onEditorCreated,
      onPaintInstanceCreated,
      onEditorDestroy,
    },
  });
  const C = e8.A(() => {
    paintInstanceRef.current.changeCanvasSize({
      width: imageWidth,
      height: imageHeight,
    });
    var e = te.C(tt.k(e7.o.bgPaintBrushSize));
    var tr_Brush = tr.Brush;
    var i = e6.p;
    paintInstanceRef.current.getCanvasElement().className =
      "canvas-style-bnU6qY";
    paintInstanceRef.current.brush.changeBrushColor(tf(e6.C, i));
    var a = ty(e[tr_Brush]);
    paintInstanceRef.current.brush.changeBrushSize(a);
  });
  const j = p.useMemo(
    () => ({
      width: customWidth,
      height: customHeight,
    }),
    [customWidth, customHeight],
  );
  p.useEffect(() => {
    C();
  }, [C]);
  return s.jsx(TnContext_Provider, {
    value: {
      store: store.paintStore,
      paintDependency: {
        editor: graphicEditorRef.current,
        paintInstance: paintInstanceRef.current,
      },
      referenceImageStore,
    },
    children: s.jsx(tk, {
      paintWidth,
      paintHeight,
      imageWidth,
      imageHeight,
      imageW: image.width,
      imageH: image.height,
      url: image.url,
      abilityType,
      isInitialLoad: h,
      largeImageInfo: j,
      paintContentRef: gRef,
      paintRef: dRef,
      instances: {
        dragInstance: e9.w,
        resizeInstance: e9.u,
      },
    }),
  });
});
const tL = /^\#([A-Fa-f0-9]{3}|[A-Fa-f0-9]{6})$/i;
function tW(e) {
  if (tL.test(e)) {
    e = tf(e);
  }
  let t;
  const i = ((t = e.match(/\d+(\.?\d+)?/g)) != null ? t : []).map(Number);
  if (i[3] <= 1) {
    i[3] *= tP.ip;
  }
  return i;
}
const tF = /^data:image\/(\w+);base64,/;
const tU = () => {
  var e;
  var t = useTo();
  var { paintDependency } = t != null ? t : {};
  return {
    paintModeInstance:
      (e =
        paintDependency == null ? undefined : paintDependency.paintInstance) !=
      null
        ? e
        : undefined,
  };
};
function useTG() {
  let e;
  let t;
  const { elementRef, isIntersecting, observe, unobserve } = tO.Je();
  const { store } = (e = useTo()) != null ? e : {};
  const o = (t = tN.F(store, (e) => e.isTransforming)) != null && t;
  p.useEffect(() => {
    if (o) {
      unobserve();
    } else {
      observe();
    }
  }, [o]);
  return [elementRef, isIntersecting];
}
const TBContext = p.createContext({
  width: 0,
  height: 0,
});
function t$() {
  return p.useContext(TBContext);
}
function tX(e, t) {
  const { x, y } = e;
  return [
    x * Math.cos(t) + y * Math.sin(t),
    -x * Math.sin(t) + y * Math.cos(t),
  ];
}
function tH(e, t, i, a) {
  const r = (e / 180) * Math.PI;
  const n = tX(
    {
      x: t / 2,
      y: i / 2,
    },
    r,
  );
  const s = tX(
    {
      x: t / 2,
      y: -i / 2,
    },
    r,
  );
  const o = tX(
    {
      x: -t / 2,
      y: -i / 2,
    },
    r,
  );
  const c = tX(
    {
      x: -t / 2,
      y: i / 2,
    },
    r,
  );
  const { x, y } = a;
  return {
    tl: {
      x: c[0] + x,
      y: -(c[1] - y),
    },
    tr: {
      x: n[0] + x,
      y: -(n[1] - y),
    },
    br: {
      x: s[0] + x,
      y: -(s[1] - y),
    },
    bl: {
      x: o[0] + x,
      y: -(o[1] - y),
    },
  };
}
function tY(e, t) {
  const { x, y } = e;
  const { x: x_1, y: y_1 } = t;
  const s = x < x_1;
  const o = y < y_1;
  if (s && o) {
    return "tl";
  }
  if (s && !o) {
    return "bl";
  }
  if (!s && o) {
    return "tr";
  }
  return "br";
}
function tQ(e, rotate, width, height, r) {
  const [n, s] = {
    top: ["tl", "tr"],
    right: ["tr", "br"],
    bottom: ["br", "bl"],
    left: ["bl", "tl"],
  }[e];
  const o = tH(rotate, width, height, r);
  const c = o[n];
  const l = o[s];
  const u = tY(c, r);
  const g = tY(l, r);
  if (u === "tl" && g === "tr") {
    return "top";
  }
  if (u === "tr" && g === "br") {
    return "right";
  }
  if (u === "br" && g === "bl") {
    return "bottom";
  }
  return "left";
}
function useTV(e) {
  let t;
  let i;
  const { store } = (t = useTo()) != null ? t : {};
  const r = (i = tN.F(store, (e) => e.transformType)) != null ? i : ti.None;
  const [n, setN] = p.useState(false);
  let o = 2;
  if (n && r === e) {
    o = 1;
  } else if (r !== ti.None) {
    o = 0;
  }
  return {
    status: o,
    setActive: setN,
  };
}
const tK = {
  top: ta.RotateTop,
  right: ta.RotateRight,
  bottom: ta.RotateBottom,
  left: ta.RotateLeft,
};
const tq = p.forwardRef(function (e, t) {
  const {
    isActive,
    sideDirection,
    style,
    centerRef,
    onShowInteractChange,
    onRotatePointerChange,
  } = e;
  const l = tx._(e, [
    "isActive",
    "sideDirection",
    "style",
    "centerRef",
    "onShowInteractChange",
    "onRotatePointerChange",
  ]);
  const { status, startRotate } = ((e, t, i, a) => {
    let r;
    let n;
    const { store } = (r = useTo()) != null ? r : {};
    const { status, setActive } = useTV(ti.Rotate);
    const { width, height } = t$();
    const {
      rotate = 0,
      moveX = 0,
      moveY = 0,
    } = (n = tN.F(store, (e) => ({
      rotate: e.rotate,
      moveX: e.moveX,
      moveY: e.moveY,
    }))) != null
      ? n
      : {};
    return {
      status,
      startRotate: (r) => {
        if (t) {
          var { top, left } = t.getBoundingClientRect();
          var m = {
            x: r.pageX,
            y: r.pageY,
          };
          var p = {
            x: left,
            y: top,
          };
          var v =
            tK[
              tQ(e, rotate, width, height, {
                x: moveX,
                y: moveY,
              })
            ];
          if (i != null) {
            i(false);
          }
          setActive(true);
          if (store != null) {
            store.updateTransformType(ti.Rotate);
          }
          if (store != null) {
            store.updateActionCursor(v);
          }
          if (a != null) {
            a({
              x: r.pageX,
              y: r.pageY,
            });
          }
          var y = (e) => {
            var { pageX, pageY } = e;
            var r = ((e, t, i, a) => {
              const r = [0, 0];
              const n = [0, 0];
              const { x, y } = e;
              const { x: x_1, y: y_1 } = t;
              const { x: x_2, y: y_2 } = i;
              r[0] = x_1 - x;
              r[1] = y_1 - y;
              n[0] = x_2 - x;
              n[1] = y_2 - y;
              const d = r[0] * n[1] - r[1] * n[0];
              const h = Math.sqrt((x - x_1) ** 2 + (y - y_1) ** 2);
              const m = Math.sqrt((x - x_2) ** 2 + (y - y_2) ** 2);
              const p =
                (h ** 2 +
                  m ** 2 -
                  Math.sqrt((x_1 - x_2) ** 2 + (y_1 - y_2) ** 2) ** 2) /
                (2 * h * m);
              const v = a ? Math.acos(p) : (180 * Math.acos(p)) / Math.PI;
              if (d < 0) {
                return -v;
              }
              return v;
            })(
              p,
              m,
              {
                x: pageX,
                y: pageY,
              },
              false,
            );
            if (store != null) {
              store.updateRotate((rotate + r + 360) % 360);
            }
            if (a != null) {
              a({
                x: pageX,
                y: pageY,
              });
            }
          };
          var f = () => {
            window.removeEventListener("mousemove", y);
            window.removeEventListener("mouseup", f);
            setActive(false);
            if (i != null) {
              i(true);
            }
            if (store != null) {
              store.resetTransformType();
            }
            if (store != null) {
              store.resetActionCursor();
            }
          };
          window.addEventListener("mousemove", y);
          window.addEventListener("mouseup", f);
        }
      },
    };
  })(
    sideDirection,
    centerRef.current,
    onShowInteractChange,
    onRotatePointerChange,
  );
  const h = ((e) => {
    let t;
    let i;
    const { width, height } = t$();
    const { store } = (t = useTo()) != null ? t : {};
    const {
      moveX = 0,
      moveY = 0,
      rotate = 0,
    } = (i = tN.F(store, (e) => ({
      moveX: e.moveX,
      moveY: e.moveY,
      rotate: e.rotate,
    }))) != null
      ? i
      : {};
    return tQ(e, rotate, width, height, {
      x: moveX,
      y: moveY,
    });
  })(sideDirection);
  const m = {
    top: 0,
    right: 90,
    bottom: 180,
    left: 270,
  }[sideDirection];
  const p = _v("icon-w4mTk7", {
    "icon-active-kF2nbU": status === 1,
  });
  const v = _v(
    "rotate-button-hhUY7k",
    {
      "rotate-button-active-oIdN6Z": isActive && (status === 2 || status === 1),
    },
    {
      top: "top-g5GXvV",
      right: "right-iB_HCd",
      bottom: "bottom-Qs9sOf",
      left: "left-qzb1rN",
    }[h],
  );
  const f = ["left", "right"].includes(sideDirection);
  return s.jsxs(
    "div",
    Y._(H._({}, l), {
      style: Y._(H._({}, style), {
        transform:
          `${f ? "translateY(-50%)" : "translateX(-50%)"} rotate(`.concat(
            m,
            "deg)",
          ),
      }),
      className: v,
      children: [
        s.jsx("div", {
          className: p,
          onMouseDown: (e) => {
            e.stopPropagation();
            startRotate(e);
          },
          children: s.jsx(u.nad, {
            size: 16,
          }),
        }),
        s.jsx("span", {
          className: "expose-spot-EkNVqN",
          ref: t,
        }),
      ],
    }),
  );
});
const T1Context = p.createContext({
  x: 0,
  y: 0,
});
function t2(e) {
  return "url(".concat(e, ") 12 12, pointer");
}
const t3 = {
  [ta.Default]: "default",
  [ta.ResizeTopLeftToBottomRight]: t2(
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjBfZF81ODM3Xzc1ODMpIj4KPHBhdGggZD0iTTkuMjQgMTIuMDdMMTMuMzEgMTYuMTRMMTAuNDkgMTguOTdMMTguOTYgMTguOTVMMTguOTcgMTAuNDhMMTYuMTMgMTMuMzJMMTIuMDYgOS4yNkwxMC42NCA3Ljg0TDEzLjQ5IDVINVYxMy40OEw3LjgzIDEwLjY2TDkuMjQgMTIuMDdaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMTAuMyAxMS43MkwxNC43MyAxNi4xNEwxMi45IDE3Ljk3TDE3Ljk2IDE3Ljk1TDE3Ljk3IDEyLjlMMTYuMTMgMTQuNzRMMTEuNyAxMC4zMkw5LjIzIDcuODRMMTEuMDcgNkg2VjExLjA3TDcuODMgOS4yNEwxMC4zIDExLjcyWiIgZmlsbD0iYmxhY2siLz4KPC9nPgo8ZGVmcz4KPGZpbHRlciBpZD0iZmlsdGVyMF9kXzU4MzdfNzU4MyIgeD0iMy4yIiB5PSI0LjIiIHdpZHRoPSIxNy41NyIgaGVpZ2h0PSIxNy41NyIgZmlsdGVyVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM9InNSR0IiPgo8ZmVGbG9vZCBmbG9vZC1vcGFjaXR5PSIwIiByZXN1bHQ9IkJhY2tncm91bmRJbWFnZUZpeCIvPgo8ZmVDb2xvck1hdHJpeCBpbj0iU291cmNlQWxwaGEiIHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAxMjcgMCIgcmVzdWx0PSJoYXJkQWxwaGEiLz4KPGZlT2Zmc2V0IGR5PSIxIi8+CjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjAuOSIvPgo8ZmVDb2xvck1hdHJpeCB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC42NSAwIi8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIHJlc3VsdD0iZWZmZWN0MV9kcm9wU2hhZG93XzU4MzdfNzU4MyIvPgo8ZmVCbGVuZCBtb2RlPSJub3JtYWwiIGluPSJTb3VyY2VHcmFwaGljIiBpbjI9ImVmZmVjdDFfZHJvcFNoYWRvd181ODM3Xzc1ODMiIHJlc3VsdD0ic2hhcGUiLz4KPC9maWx0ZXI+CjwvZGVmcz4KPC9zdmc+Cg==",
  ),
  [ta.ResizeTopRightToBottomLeft]: t2(
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjBfZF81ODMzXzI5NzM4KSI+CjxwYXRoIGQ9Ik0xNC43MyAxMi4wN0wxMC42NiAxNi4xNEwxMy40OSAxOC45N0w1LjAxIDE4Ljk1TDUgMTAuNDhMNy44NCAxMy4zMkwxMS45MiA5LjI2TDEzLjMzIDcuODRMMTAuNDkgNUgxOC45N1YxMy40OEwxNi4xNCAxMC42NkwxNC43MyAxMi4wN1oiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xMy42NyAxMS43Mkw5LjI0IDE2LjE0TDExLjA3IDE3Ljk3TDYuMDEgMTcuOTVMNiAxMi45TDcuODQgMTQuNzRMMTIuMjcgMTAuMzJMMTQuNzQgNy44NEwxMi45IDZIMTcuOTdWMTEuMDdMMTYuMTQgOS4yNEwxMy42NyAxMS43MloiIGZpbGw9ImJsYWNrIi8+CjwvZz4KPGRlZnM+CjxmaWx0ZXIgaWQ9ImZpbHRlcjBfZF81ODMzXzI5NzM4IiB4PSIzLjIiIHk9IjQuMiIgd2lkdGg9IjE3LjU3IiBoZWlnaHQ9IjE3LjU3IiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+CjxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+CjxmZUNvbG9yTWF0cml4IGluPSJTb3VyY2VBbHBoYSIgdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDEyNyAwIiByZXN1bHQ9ImhhcmRBbHBoYSIvPgo8ZmVPZmZzZXQgZHk9IjEiLz4KPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMC45Ii8+CjxmZUNvbG9yTWF0cml4IHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwLjY1IDAiLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbjI9IkJhY2tncm91bmRJbWFnZUZpeCIgcmVzdWx0PSJlZmZlY3QxX2Ryb3BTaGFkb3dfNTgzM18yOTczOCIvPgo8ZmVCbGVuZCBtb2RlPSJub3JtYWwiIGluPSJTb3VyY2VHcmFwaGljIiBpbjI9ImVmZmVjdDFfZHJvcFNoYWRvd181ODMzXzI5NzM4IiByZXN1bHQ9InNoYXBlIi8+CjwvZmlsdGVyPgo8L2RlZnM+Cjwvc3ZnPgo=",
  ),
  [ta.Move]: "move",
  [ta.RotateTop]: t2(
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgiIGhlaWdodD0iMjgiIHZpZXdCb3g9IjAgMCAyOCAyOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjBfZF82MjgxXzcyOTgpIj4KPHBhdGggZD0iTTkuMjk3NzEgMTAuNjQxMkM5LjkxNTIyIDEwLjAyMzcgMTAuNjQ4MyA5LjUzMzkgMTEuNDU1MSA5LjE5OTdDMTIuMjYxOSA4Ljg2NTUxIDEzLjEyNjcgOC42OTM1IDE0IDguNjkzNUMxNC44NzMzIDguNjkzNSAxNS43MzggOC44NjU1MSAxNi41NDQ4IDkuMTk5N0MxNy4zNTE2IDkuNTMzOSAxOC4wODQ3IDEwLjAyMzcgMTguNzAyMiAxMC42NDEyTDIwLjcxNzUgMTIuNjU2NUwyMy40MDQ1IDkuOTY5NDlWMTguMDMwNUwxNS4zNDM1IDE4LjAzMDVMMTguMDMwNSAxNS4zNDM1TDE2LjAxNTIgMTMuMzI4MkMxNS43NTA2IDEzLjA2MzYgMTUuNDM2NCAxMi44NTM3IDE1LjA5MDYgMTIuNzEwNEMxNC43NDQ4IDEyLjU2NzIgMTQuMzc0MiAxMi40OTM1IDE0IDEyLjQ5MzVDMTMuNjI1NyAxMi40OTM1IDEzLjI1NTEgMTIuNTY3MiAxMi45MDkzIDEyLjcxMDRDMTIuNTYzNSAxMi44NTM3IDEyLjI0OTQgMTMuMDYzNiAxMS45ODQ3IDEzLjMyODJMOS45Njk0NiAxNS4zNDM1TDEyLjY1NjUgMTguMDMwNUg0LjU5NTQ1VjkuOTY5NDlMNy4yODI0NiAxMi42NTY1TDkuMjk3NzEgMTAuNjQxMloiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xMS4zMTM1IDEyLjY1NTZMOC42MjY0NSAxNS4zNDI2TDEwLjMwNTggMTcuMDIySDUuNjAzNTdMNS42MDM1NyAxMi4zMTk4TDcuMjgyOTUgMTMuOTk5MUw5Ljk2OTk1IDExLjMxMjFDMTAuNDk5MiAxMC43ODI4IDExLjEyNzYgMTAuMzYzIDExLjgxOTIgMTAuMDc2NUMxMi41MTA3IDkuNzkwMDggMTMuMjUxOSA5LjY0MjY1IDE0LjAwMDUgOS42NDI2NUMxNC43NDkgOS42NDI2NSAxNS40OTAyIDkuNzkwMDggMTYuMTgxOCAxMC4wNzY1QzE2Ljg3MzMgMTAuMzYzIDE3LjUwMTcgMTAuNzgyOCAxOC4wMzEgMTEuMzEyMUwyMC43MTggMTMuOTk5MUwyMi4zOTc0IDEyLjMxOThMMjIuMzk3NCAxNy4wMjJIMTcuNjk1MUwxOS4zNzQ1IDE1LjM0MjZMMTYuNjg3NSAxMi42NTU2QzE2LjMzNDYgMTIuMzAyOCAxNS45MTU3IDEyLjAyMjkgMTUuNDU0NyAxMS44MzE5QzE0Ljk5MzYgMTEuNjQwOSAxNC40OTk1IDExLjU0MjYgMTQuMDAwNSAxMS41NDI2QzEzLjUwMTQgMTEuNTQyNiAxMy4wMDczIDExLjY0MDkgMTIuNTQ2MyAxMS44MzE5QzEyLjA4NTIgMTIuMDIyOSAxMS42NjYzIDEyLjMwMjggMTEuMzEzNSAxMi42NTU2WiIgZmlsbD0iYmxhY2siLz4KPC9nPgo8ZGVmcz4KPGZpbHRlciBpZD0iZmlsdGVyMF9kXzYyODFfNzI5OCIgeD0iMi43NDUxIiB5PSI3Ljg3MTA5IiB3aWR0aD0iMjIuNTA5MyIgaGVpZ2h0PSIxMy4wMzcxIiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+CjxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+CjxmZUNvbG9yTWF0cml4IGluPSJTb3VyY2VBbHBoYSIgdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDEyNyAwIiByZXN1bHQ9ImhhcmRBbHBoYSIvPgo8ZmVPZmZzZXQgZHk9IjEuMDI3ODQiLz4KPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMC45MjUwNTYiLz4KPGZlQ29sb3JNYXRyaXggdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAuNjUgMCIvPgo8ZmVCbGVuZCBtb2RlPSJub3JtYWwiIGluMj0iQmFja2dyb3VuZEltYWdlRml4IiByZXN1bHQ9ImVmZmVjdDFfZHJvcFNoYWRvd182MjgxXzcyOTgiLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJlZmZlY3QxX2Ryb3BTaGFkb3dfNjI4MV83Mjk4IiByZXN1bHQ9InNoYXBlIi8+CjwvZmlsdGVyPgo8L2RlZnM+Cjwvc3ZnPgo=",
  ),
  [ta.RotateRight]: t2(
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgiIGhlaWdodD0iMjgiIHZpZXdCb3g9IjAgMCAyOCAyOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjBfZF82MjgxXzcyNzEpIj4KPHBhdGggZD0iTTE3LjM1ODggOS4yOTc3MUMxNy45NzYzIDkuOTE1MjIgMTguNDY2MSAxMC42NDgzIDE4LjgwMDMgMTEuNDU1MUMxOS4xMzQ1IDEyLjI2MTkgMTkuMzA2NSAxMy4xMjY3IDE5LjMwNjUgMTRDMTkuMzA2NSAxNC44NzMzIDE5LjEzNDUgMTUuNzM4IDE4LjgwMDMgMTYuNTQ0OEMxOC40NjYxIDE3LjM1MTYgMTcuOTc2MyAxOC4wODQ3IDE3LjM1ODggMTguNzAyMkwxNS4zNDM1IDIwLjcxNzVMMTguMDMwNSAyMy40MDQ1TDkuOTY5NDkgMjMuNDA0NUw5Ljk2OTQ5IDE1LjM0MzVMMTIuNjU2NSAxOC4wMzA1TDE0LjY3MTggMTYuMDE1MkMxNC45MzY0IDE1Ljc1MDYgMTUuMTQ2MyAxNS40MzY0IDE1LjI4OTYgMTUuMDkwNkMxNS40MzI4IDE0Ljc0NDggMTUuNTA2NSAxNC4zNzQyIDE1LjUwNjUgMTRDMTUuNTA2NSAxMy42MjU3IDE1LjQzMjggMTMuMjU1MSAxNS4yODk2IDEyLjkwOTNDMTUuMTQ2MyAxMi41NjM1IDE0LjkzNjQgMTIuMjQ5NCAxNC42NzE4IDExLjk4NDdMMTIuNjU2NSA5Ljk2OTQ2TDkuOTY5NDkgMTIuNjU2NUw5Ljk2OTQ5IDQuNTk1NDVMMTguMDMwNSA0LjU5NTQ1TDE1LjM0MzUgNy4yODI0NkwxNy4zNTg4IDkuMjk3NzFaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMTUuMzQ0NCAxMS4zMTM1TDEyLjY1NzMgOC42MjY0NUwxMC45NzggMTAuMzA1OEwxMC45NzggNS42MDM1N0wxNS42ODAyIDUuNjAzNTdMMTQuMDAwOSA3LjI4Mjk1TDE2LjY4NzkgOS45Njk5NkMxNy4yMTcyIDEwLjQ5OTIgMTcuNjM3IDExLjEyNzYgMTcuOTIzNSAxMS44MTkyQzE4LjIwOTkgMTIuNTEwNyAxOC4zNTc0IDEzLjI1MTkgMTguMzU3NCAxNC4wMDA1QzE4LjM1NzQgMTQuNzQ5IDE4LjIwOTkgMTUuNDkwMiAxNy45MjM1IDE2LjE4MThDMTcuNjM3IDE2Ljg3MzMgMTcuMjE3MiAxNy41MDE3IDE2LjY4NzkgMTguMDMxTDE0LjAwMDkgMjAuNzE4TDE1LjY4MDIgMjIuMzk3NEwxMC45NzggMjIuMzk3NEwxMC45NzggMTcuNjk1MUwxMi42NTc0IDE5LjM3NDVMMTUuMzQ0NCAxNi42ODc1QzE1LjY5NzIgMTYuMzM0NiAxNS45NzcxIDE1LjkxNTcgMTYuMTY4MSAxNS40NTQ3QzE2LjM1OTEgMTQuOTkzNiAxNi40NTc0IDE0LjQ5OTUgMTYuNDU3NCAxNC4wMDA1QzE2LjQ1NzQgMTMuNTAxNCAxNi4zNTkxIDEzLjAwNzMgMTYuMTY4MSAxMi41NDYzQzE1Ljk3NzEgMTIuMDg1MiAxNS42OTcyIDExLjY2NjMgMTUuMzQ0NCAxMS4zMTM1WiIgZmlsbD0iYmxhY2siLz4KPC9nPgo8ZGVmcz4KPGZpbHRlciBpZD0iZmlsdGVyMF9kXzYyODFfNzI3MSIgeD0iOC4xMTk2MSIgeT0iMy43NzI5NCIgd2lkdGg9IjEzLjAzNzEiIGhlaWdodD0iMjIuNTA5MyIgZmlsdGVyVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM9InNSR0IiPgo8ZmVGbG9vZCBmbG9vZC1vcGFjaXR5PSIwIiByZXN1bHQ9IkJhY2tncm91bmRJbWFnZUZpeCIvPgo8ZmVDb2xvck1hdHJpeCBpbj0iU291cmNlQWxwaGEiIHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAxMjcgMCIgcmVzdWx0PSJoYXJkQWxwaGEiLz4KPGZlT2Zmc2V0IGR5PSIxLjAyNzg0Ii8+CjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjAuOTI1MDU2Ii8+CjxmZUNvbG9yTWF0cml4IHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwLjY1IDAiLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbjI9IkJhY2tncm91bmRJbWFnZUZpeCIgcmVzdWx0PSJlZmZlY3QxX2Ryb3BTaGFkb3dfNjI4MV83MjcxIi8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW49IlNvdXJjZUdyYXBoaWMiIGluMj0iZWZmZWN0MV9kcm9wU2hhZG93XzYyODFfNzI3MSIgcmVzdWx0PSJzaGFwZSIvPgo8L2ZpbHRlcj4KPC9kZWZzPgo8L3N2Zz4K",
  ),
  [ta.RotateBottom]: t2(
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgiIGhlaWdodD0iMjgiIHZpZXdCb3g9IjAgMCAyOCAyOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjBfZF82MjgxXzcyMzEpIj4KPHBhdGggZD0iTTE4LjcwMjMgMTcuMzU4OEMxOC4wODQ4IDE3Ljk3NjMgMTcuMzUxNyAxOC40NjYxIDE2LjU0NDkgMTguODAwM0MxNS43MzgxIDE5LjEzNDUgMTQuODczMyAxOS4zMDY1IDE0IDE5LjMwNjVDMTMuMTI2NyAxOS4zMDY1IDEyLjI2MiAxOS4xMzQ1IDExLjQ1NTIgMTguODAwM0MxMC42NDg0IDE4LjQ2NjEgOS45MTUyOCAxNy45NzYzIDkuMjk3NzcgMTcuMzU4OEw3LjI4MjUyIDE1LjM0MzVMNC41OTU1MSAxOC4wMzA1TDQuNTk1NTEgOS45Njk0OUwxMi42NTY1IDkuOTY5NDlMOS45Njk1MiAxMi42NTY1TDExLjk4NDggMTQuNjcxOEMxMi4yNDk0IDE0LjkzNjQgMTIuNTYzNiAxNS4xNDYzIDEyLjkwOTQgMTUuMjg5NkMxMy4yNTUyIDE1LjQzMjggMTMuNjI1OCAxNS41MDY1IDE0IDE1LjUwNjVDMTQuMzc0MyAxNS41MDY1IDE0Ljc0NDkgMTUuNDMyOCAxNS4wOTA3IDE1LjI4OTZDMTUuNDM2NSAxNS4xNDYzIDE1Ljc1MDYgMTQuOTM2NCAxNi4wMTUzIDE0LjY3MTdMMTguMDMwNSAxMi42NTY1TDE1LjM0MzUgOS45Njk0OUwyMy40MDQ2IDkuOTY5NDlMMjMuNDA0NSAxOC4wMzA1TDIwLjcxNzUgMTUuMzQzNUwxOC43MDIzIDE3LjM1ODhaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMTYuNjg2NSAxNS4zNDQ0TDE5LjM3MzUgMTIuNjU3M0wxNy42OTQyIDEwLjk3OEwyMi4zOTY0IDEwLjk3OEwyMi4zOTY0IDE1LjY4MDJMMjAuNzE3MSAxNC4wMDA5TDE4LjAzIDE2LjY4NzlDMTcuNTAwOCAxNy4yMTcyIDE2Ljg3MjQgMTcuNjM3IDE2LjE4MDggMTcuOTIzNUMxNS40ODkzIDE4LjIwOTkgMTQuNzQ4MSAxOC4zNTc0IDEzLjk5OTUgMTguMzU3NEMxMy4yNTEgMTguMzU3NCAxMi41MDk4IDE4LjIwOTkgMTEuODE4MiAxNy45MjM1QzExLjEyNjcgMTcuNjM3IDEwLjQ5ODMgMTcuMjE3MiA5Ljk2OTAyIDE2LjY4NzlMNy4yODIwMiAxNC4wMDA5TDUuNjAyNjQgMTUuNjgwMkw1LjYwMjY0IDEwLjk3OEwxMC4zMDQ5IDEwLjk3OEw4LjYyNTUyIDEyLjY1NzRMMTEuMzEyNSAxNS4zNDQ0QzExLjY2NTQgMTUuNjk3MiAxMi4wODQzIDE1Ljk3NzEgMTIuNTQ1MyAxNi4xNjgxQzEzLjAwNjQgMTYuMzU5MSAxMy41MDA1IDE2LjQ1NzQgMTMuOTk5NSAxNi40NTc0QzE0LjQ5ODYgMTYuNDU3NCAxNC45OTI3IDE2LjM1OTEgMTUuNDUzNyAxNi4xNjgxQzE1LjkxNDggMTUuOTc3MSAxNi4zMzM3IDE1LjY5NzIgMTYuNjg2NSAxNS4zNDQ0WiIgZmlsbD0iYmxhY2siLz4KPC9nPgo8ZGVmcz4KPGZpbHRlciBpZD0iZmlsdGVyMF9kXzYyODFfNzIzMSIgeD0iMi43NDU1OSIgeT0iOS4xNDc0NSIgd2lkdGg9IjIyLjUwOTMiIGhlaWdodD0iMTMuMDM3MSIgZmlsdGVyVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM9InNSR0IiPgo8ZmVGbG9vZCBmbG9vZC1vcGFjaXR5PSIwIiByZXN1bHQ9IkJhY2tncm91bmRJbWFnZUZpeCIvPgo8ZmVDb2xvck1hdHJpeCBpbj0iU291cmNlQWxwaGEiIHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAxMjcgMCIgcmVzdWx0PSJoYXJkQWxwaGEiLz4KPGZlT2Zmc2V0IGR5PSIxLjAyNzg0Ii8+CjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjAuOTI1MDU2Ii8+CjxmZUNvbG9yTWF0cml4IHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwLjY1IDAiLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbjI9IkJhY2tncm91bmRJbWFnZUZpeCIgcmVzdWx0PSJlZmZlY3QxX2Ryb3BTaGFkb3dfNjI4MV83MjMxIi8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW49IlNvdXJjZUdyYXBoaWMiIGluMj0iZWZmZWN0MV9kcm9wU2hhZG93XzYyODFfNzIzMSIgcmVzdWx0PSJzaGFwZSIvPgo8L2ZpbHRlcj4KPC9kZWZzPgo8L3N2Zz4K",
  ),
  [ta.RotateLeft]: t2(
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgiIGhlaWdodD0iMjgiIHZpZXdCb3g9IjAgMCAyOCAyOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjBfZF82MjgxXzczMjUpIj4KPHBhdGggZD0iTTEwLjY0MTIgMTguNzAyM0MxMC4wMjM3IDE4LjA4NDggOS41MzM5IDE3LjM1MTcgOS4xOTk3IDE2LjU0NDlDOC44NjU1MSAxNS43MzgxIDguNjkzNSAxNC44NzMzIDguNjkzNSAxNEM4LjY5MzUgMTMuMTI2NyA4Ljg2NTUxIDEyLjI2MiA5LjE5OTcgMTEuNDU1MkM5LjUzMzkgMTAuNjQ4NCAxMC4wMjM3IDkuOTE1MjggMTAuNjQxMiA5LjI5Nzc3TDEyLjY1NjUgNy4yODI1Mkw5Ljk2OTQ5IDQuNTk1NTFMMTguMDMwNSA0LjU5NTUxTDE4LjAzMDUgMTIuNjU2NUwxNS4zNDM1IDkuOTY5NTJMMTMuMzI4MiAxMS45ODQ4QzEzLjA2MzYgMTIuMjQ5NCAxMi44NTM3IDEyLjU2MzYgMTIuNzEwNCAxMi45MDk0QzEyLjU2NzIgMTMuMjU1MiAxMi40OTM1IDEzLjYyNTggMTIuNDkzNSAxNEMxMi40OTM1IDE0LjM3NDMgMTIuNTY3MiAxNC43NDQ5IDEyLjcxMDQgMTUuMDkwN0MxMi44NTM3IDE1LjQzNjUgMTMuMDYzNiAxNS43NTA2IDEzLjMyODIgMTYuMDE1M0wxNS4zNDM1IDE4LjAzMDVMMTguMDMwNSAxNS4zNDM1TDE4LjAzMDUgMjMuNDA0Nkw5Ljk2OTQ5IDIzLjQwNDVMMTIuNjU2NSAyMC43MTc1TDEwLjY0MTIgMTguNzAyM1oiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xMi42NTU2IDE2LjY4NjVMMTUuMzQyNyAxOS4zNzM1TDE3LjAyMiAxNy42OTQyTDE3LjAyMiAyMi4zOTY0TDEyLjMxOTggMjIuMzk2NEwxMy45OTkxIDIwLjcxNzFMMTEuMzEyMSAxOC4wM0MxMC43ODI4IDE3LjUwMDggMTAuMzYzIDE2Ljg3MjQgMTAuMDc2NSAxNi4xODA4QzkuNzkwMDggMTUuNDg5MyA5LjY0MjY1IDE0Ljc0ODEgOS42NDI2NSAxMy45OTk1QzkuNjQyNjUgMTMuMjUxIDkuNzkwMDggMTIuNTA5OCAxMC4wNzY1IDExLjgxODJDMTAuMzYzIDExLjEyNjcgMTAuNzgyOCAxMC40OTgzIDExLjMxMjEgOS45NjkwMkwxMy45OTkxIDcuMjgyMDJMMTIuMzE5OCA1LjYwMjY0TDE3LjAyMiA1LjYwMjY0TDE3LjAyMiAxMC4zMDQ5TDE1LjM0MjYgOC42MjU1MkwxMi42NTU2IDExLjMxMjVDMTIuMzAyOCAxMS42NjU0IDEyLjAyMjkgMTIuMDg0MyAxMS44MzE5IDEyLjU0NTNDMTEuNjQwOSAxMy4wMDY0IDExLjU0MjYgMTMuNTAwNSAxMS41NDI2IDEzLjk5OTVDMTEuNTQyNiAxNC40OTg2IDExLjY0MDkgMTQuOTkyNyAxMS44MzE5IDE1LjQ1MzdDMTIuMDIyOSAxNS45MTQ4IDEyLjMwMjggMTYuMzMzNyAxMi42NTU2IDE2LjY4NjVaIiBmaWxsPSJibGFjayIvPgo8L2c+CjxkZWZzPgo8ZmlsdGVyIGlkPSJmaWx0ZXIwX2RfNjI4MV83MzI1IiB4PSI2Ljg0MzI1IiB5PSIzLjc3MzQzIiB3aWR0aD0iMTMuMDM3MSIgaGVpZ2h0PSIyMi41MDkzIiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+CjxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+CjxmZUNvbG9yTWF0cml4IGluPSJTb3VyY2VBbHBoYSIgdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDEyNyAwIiByZXN1bHQ9ImhhcmRBbHBoYSIvPgo8ZmVPZmZzZXQgZHk9IjEuMDI3ODQiLz4KPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMC45MjUwNTYiLz4KPGZlQ29sb3JNYXRyaXggdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAuNjUgMCIvPgo8ZmVCbGVuZCBtb2RlPSJub3JtYWwiIGluMj0iQmFja2dyb3VuZEltYWdlRml4IiByZXN1bHQ9ImVmZmVjdDFfZHJvcFNoYWRvd182MjgxXzczMjUiLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJlZmZlY3QxX2Ryb3BTaGFkb3dfNjI4MV83MzI1IiByZXN1bHQ9InNoYXBlIi8+CjwvZmlsdGVyPgo8L2RlZnM+Cjwvc3ZnPgo=",
  ),
  [ta.Crosshair]: "crosshair",
};
function useT5() {
  let e;
  let t;
  const { x, y } = p.useContext(T1Context);
  const { store } = (e = useTo()) != null ? e : {};
  const {
    rotate = 0,
    transformType = ti.None,
    actionCursor = ta.Default,
  } = (t = tN.F(store, (e) => ({
    transformType: e.transformType,
    rotate: e.rotate,
    actionCursor: e.actionCursor,
  }))) != null
    ? t
    : {};
  const l = (360 + t4.g(rotate, 0)) % 360;
  const u = transformType === ti.Rotate;
  if (u) {
    return s.jsx(t0.A, {
      content: "".concat(l, "°"),
      className: "tip-Mtvc3c",
      position: "bl",
      popupVisible: u,
      getPopupContainer: () => document.body,
      children: s.jsx("span", {
        className: "pointer-uaAoMZ",
        style: {
          left: x,
          top: y,
          cursor: t3[actionCursor],
        },
      }),
    });
  }
  return null;
}
const useT9 = (e) => {
  var { onShowInteractChange } = e;
  var iRef = p.useRef(null);
  var [a, r] = useTG();
  var [n, right] = useTG();
  var [c, bottom] = useTG();
  var [u, g] = useTG();
  var d = ((e) => {
    let t;
    let i;
    let a;
    let r;
    let n;
    const { top, right, bottom, left } = e;
    const { store } = (r = useTo()) != null ? r : {};
    const g = (n = tN.F(store, (e) => e.isTransforming)) != null && n;
    const d = ((e, t) => {
      const [i, setI] = p.useState(e);
      p.useEffect(() => {
        if (t) {
          setI(e);
        }
      }, [t]);
      return i;
    })(
      (() => {
        let e;
        let t;
        const { store } = (e = useTo()) != null ? e : {};
        const {
          moveX = 0,
          moveY = 0,
          rotate = 0,
        } = (t = tN.F(store, (e) => ({
          moveX: e.moveX,
          moveY: e.moveY,
          rotate: e.rotate,
        }))) != null
          ? t
          : {};
        const { width, height } = t$();
        const c = tQ("top", rotate, width, height, {
          x: moveX,
          y: moveY,
        });
        const l = tQ("right", rotate, width, height, {
          x: moveX,
          y: moveY,
        });
        const u = tQ("left", rotate, width, height, {
          x: moveY,
          y: moveY,
        });
        const g = {
          [c]: "top",
          [l]: "right",
          [tQ("bottom", rotate, width, height, {
            x: moveY,
            y: moveY,
          })]: "bottom",
          [u]: "left",
        };
        return [g.top, g.right, g.bottom, g.left];
      })(),
      !g,
    );
    t = {
      top,
      right,
      bottom,
      left,
    };
    i = d.map((e) => t[e]);
    if ((a = d.findIndex((e, t) => i[t])) < 0) {
      return null;
    }
    return d[a];
  })({
    top: r,
    right,
    bottom,
    left: g,
  });
  var [h, setH] = p.useState({
    x: 0,
    y: 0,
  });
  return s.jsx(s.Fragment, {
    children: s.jsxs(T1Context.Provider, {
      value: h,
      children: [
        s.jsx(tq, {
          ref: a,
          isActive: d === "top",
          sideDirection: "top",
          style: {
            top: -44,
            left: "50%",
          },
          centerRef: iRef,
          onShowInteractChange,
          onRotatePointerChange: setH,
        }),
        s.jsx(tq, {
          ref: n,
          isActive: d === "right",
          sideDirection: "right",
          style: {
            right: -44,
            top: "50%",
          },
          centerRef: iRef,
          onShowInteractChange,
          onRotatePointerChange: setH,
        }),
        s.jsx(tq, {
          ref: c,
          isActive: d === "bottom",
          sideDirection: "bottom",
          style: {
            bottom: -44,
            left: "50%",
          },
          centerRef: iRef,
          onShowInteractChange,
          onRotatePointerChange: setH,
        }),
        s.jsx(tq, {
          ref: u,
          isActive: d === "left",
          sideDirection: "left",
          style: {
            left: -44,
            top: "50%",
          },
          centerRef: iRef,
          onShowInteractChange,
          onRotatePointerChange: setH,
        }),
        s.jsx("span", {
          ref: iRef,
          className: "center-hWBX0X",
        }),
        tJ.createPortal(s.jsx(useT5, {}), document.body),
      ],
    }),
  });
};
const T8Context = p.createContext({
  width: 0,
  height: 0,
});
function useT6() {
  return p.useContext(T8Context);
}
function t7(rotate, t, i, a, r, n) {
  const { width, height } = (function (e, t, i) {
    const a =
      arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
    const r = (e / 180) * Math.PI;
    const n = t / Math.abs(a);
    const s = i / Math.abs(a);
    return {
      width: Math.abs(n * Math.cos(-r)) + Math.abs(s * Math.sin(-r)),
      height: Math.abs(n * Math.sin(-r)) + Math.abs(s * Math.cos(-r)),
    };
  })(rotate, t, i, n);
  return {
    x: {
      min: -width / 2 + 12,
      max: a + width / 2 - 12,
    },
    y: {
      min: -height / 2 + 12,
      max: r + height / 2 - 12,
    },
  };
}
const useIe = () => {
  var [e, setE] = p.useState(td.P9);
  p.useEffect(() => {
    var e = e9.u.onScaleChange((e) => {
      setE(e);
    });
    return () => e.dispose();
  }, []);
  return e;
};
const it = {
  tl: ta.ResizeTopLeftToBottomRight,
  tr: ta.ResizeTopRightToBottomLeft,
  br: ta.ResizeTopLeftToBottomRight,
  bl: ta.ResizeTopRightToBottomLeft,
};
const ii = (e) => {
  var { direction, style, onShowInteractChange } = e;
  var r = tx._(e, ["direction", "style", "onShowInteractChange"]);
  var { startResize, status } = ((e) => {
    let t;
    let i;
    const { store } = (t = useTo()) != null ? t : {};
    const { status, setActive } = useTV(ti.Resize);
    const {
      moveX = 0,
      moveY = 0,
      scale = 1,
      rotate = 0,
    } = (i = tN.F(store, (e) => ({
      moveX: e.moveX,
      moveY: e.moveY,
      scale: e.scale,
      rotate: e.rotate,
    }))) != null
      ? i
      : {};
    const { width, height } = t$();
    const { width: width_1, height: height_1 } = useT6();
    const m = useIe();
    return {
      status,
      startResize: (t, i) => {
        var r = {
          tl: "br",
          tr: "bl",
          br: "tl",
          bl: "tr",
        }[i];
        if (document.getElementById("paint-container")) {
          var p = {
            x: t.clientX,
            y: t.clientY,
          };
          if (e != null) {
            e(false);
          }
          setActive(true);
          if (store != null) {
            store.updateTransformType(ti.Resize);
          }
          var v = tH(rotate, width, height, {
            x: moveX,
            y: moveY,
          });
          var y = v[r];
          var f = v[i];
          var { x: x_1 } = f;
          var I =
            it[
              tY(f, {
                x: moveX,
                y: moveY,
              })
            ];
          if (store != null) {
            store.updateActionCursor(I);
          }
          var S = x_1 < moveX;
          var _ = (e) => {
            var { clientX, clientY } = e;
            var n = clientX - p.x;
            var s = S ? width - n : width + n;
            var o = s / width;
            var v = height * o;
            if (!(s < 36) && !(v < 36)) {
              var { x: x_1, y: y_1 } = ((e, t, i, a) => {
                const r = (e / 180) * Math.PI;
                const n = tX(
                  {
                    x: t / 2,
                    y: i / 2,
                  },
                  r,
                );
                const s = tX(
                  {
                    x: t / 2,
                    y: -i / 2,
                  },
                  r,
                );
                const o = tX(
                  {
                    x: -t / 2,
                    y: -i / 2,
                  },
                  r,
                );
                const c = tX(
                  {
                    x: -t / 2,
                    y: i / 2,
                  },
                  r,
                );
                const { x, y } = a;
                return {
                  tl: {
                    x: x - c[0],
                    y: y + c[1],
                  },
                  tr: {
                    x: x - n[0],
                    y: y + n[1],
                  },
                  br: {
                    x: x - s[0],
                    y: y + s[1],
                  },
                  bl: {
                    x: x - o[0],
                    y: y + o[1],
                  },
                };
              })(rotate, s, v, y)[r];
              var I = o * scale;
              if (!(I < 0)) {
                var { x: x_2, y: y_2 } = t7(rotate, s, v, width_1, height_1, m);
                var { min, max } = x_2;
                var { min: min_1, max: max_1 } = y_2;
                if (x_1 >= min && x_1 <= max && y_1 >= min_1 && y_1 <= max_1) {
                  if (store != null) {
                    store.updateScale(I);
                  }
                  if (store != null) {
                    store.updateMoveX(x_1);
                  }
                  if (store != null) {
                    store.updateMoveY(y_1);
                  }
                }
              }
            }
          };
          window.addEventListener("mousemove", _);
          window.addEventListener("mouseup", () => {
            window.removeEventListener("mousemove", _);
            setActive(false);
            if (e != null) {
              e(true);
            }
            if (store != null) {
              store.resetTransformType();
            }
            if (store != null) {
              store.resetActionCursor();
            }
          });
        }
      },
    };
  })(onShowInteractChange);
  var c = ((e) => {
    let t;
    let i;
    const { width, height } = t$();
    const { store } = (t = useTo()) != null ? t : {};
    const {
      moveX = 0,
      moveY = 0,
      rotate = 0,
    } = (i = tN.F(store, (e) => ({
      moveX: e.moveX,
      moveY: e.moveY,
      rotate: e.rotate,
    }))) != null
      ? i
      : {};
    return tY(
      tH(rotate, width, height, {
        x: moveX,
        y: moveY,
      })[e],
      {
        x: moveX,
        y: moveY,
      },
    );
  })(direction);
  var l = _v(
    "border-button-M0q6U6",
    {
      "border-button-tl-NB4WId": c === "tl",
      "border-button-tr-o9XL1p": c === "tr",
      "border-button-bl-zyw3qZ": c === "bl",
      "border-button-br-F_5Hjc": c === "br",
    },
    {
      "border-button-active-_gG6dB": status === 1,
      "border-button-hidden-nVwGrS": status === 0,
    },
  );
  return s.jsx(
    "div",
    Y._(H._({}, r), {
      style: H._(
        {},
        {
          tl: {
            left: 0,
            top: 0,
            transform: "translate(-50%, -50%)",
          },
          tr: {
            right: 0,
            top: 0,
            transform: "translate(50%, -50%)",
          },
          br: {
            right: 0,
            bottom: 0,
            transform: "translate(50%, 50%)",
          },
          bl: {
            left: 0,
            bottom: 0,
            transform: "translate(-50%, 50%)",
          },
        }[direction],
        style,
      ),
      className: l,
      onMouseDown: (e) => {
        e.stopPropagation();
        startResize(e, direction);
      },
      children: s.jsx("div", {
        className: "circle-LKct0F",
      }),
    }),
  );
};
function ia(e) {
  const { onShowInteractChange } = e;
  return s.jsxs(s.Fragment, {
    children: [
      s.jsx(ii, {
        direction: "tl",
        onShowInteractChange,
      }),
      s.jsx(ii, {
        direction: "tr",
        onShowInteractChange,
      }),
      s.jsx(ii, {
        direction: "br",
        onShowInteractChange,
      }),
      s.jsx(ii, {
        direction: "bl",
        onShowInteractChange,
      }),
    ],
  });
}
function useIs(e) {
  let t;
  let i;
  const { children, onShowInteractChange } = e;
  const n = tx._(e, ["children", "onShowInteractChange"]);
  const o = g.h(k._);
  const { startMove } = ((e) => {
    let t;
    let i;
    const { width, height } = useT6();
    const { store } = (t = useTo()) != null ? t : {};
    const s = useIe();
    const [, setO] = p.useState(false);
    const {
      moveX = 0,
      moveY = 0,
      rotate = 0,
    } = (i = tN.F(store, (e) => ({
      scale: e.scale,
      moveX: e.moveX,
      moveY: e.moveY,
      rotate: e.rotate,
    }))) != null
      ? i
      : {};
    const { width: width_1, height: height_1 } = t$();
    return {
      startMove: (t) => {
        var i = {
          x: t.clientX,
          y: t.clientY,
        };
        setO(true);
        if (e != null) {
          e(false);
        }
        if (store != null) {
          store.updateTransformType(ti.Move);
        }
        if (store != null) {
          store.updateActionCursor(ta.Move);
        }
        var { x, y } = t7(rotate, width_1, height_1, width, height, s);
        var p = (e) => {
          var { clientX, clientY } = e;
          var r = clientX - i.x;
          var s = clientY - i.y;
          var o = Math.min(x.max, Math.max(x.min, moveX + r));
          var u = Math.min(y.max, Math.max(y.min, moveY + s));
          if (store != null) {
            store.updateMoveX(o);
          }
          if (store != null) {
            store.updateMoveY(u);
          }
        };
        var v = () => {
          window.removeEventListener("mousemove", p);
          window.removeEventListener("mouseup", v);
          setO(false);
          if (e != null) {
            e(true);
          }
          if (store != null) {
            store.resetTransformType();
          }
          if (store != null) {
            store.resetActionCursor();
          }
        };
        window.addEventListener("mousemove", p);
        window.addEventListener("mouseup", v);
      },
    };
  })(onShowInteractChange);
  const { store } = (t = useTo()) != null ? t : {};
  const { isSelectImage = false } =
    (i = tN.F(store, (e) => ({
      isSelectImage: e.isSelectImage,
    }))) != null
      ? i
      : {};
  const d = p.useCallback(
    (e) => {
      var t = o.createInstance(ir.c);
      t.setParams({
        action: "use",
        item: e,
      });
      t.report();
    },
    [o],
  );
  const h = _v("frameInteract-kRdxvs", {
    "frameInteractActive-e2kxBl": isSelectImage,
  });
  return s.jsx(
    "div",
    Y._(H._({}, n), {
      className: h,
      onMouseDown: (e) => {
        e.stopPropagation();
        if (isSelectImage) {
          d("move_layer");
          startMove(e);
        }
      },
      onClick: () => {
        if (!((store != null && store.isSelectImage) || store == null)) {
          store.updateIsSelectImage(true);
        }
      },
      children: isSelectImage ? children : null,
    }),
  );
}
const useIo = (e) => {
  var t;
  var i;
  var {
    containerWidth,
    containerHeight,
    paintWidth,
    paintHeight,
    imageWidth,
    imageHeight,
    scale,
    paintScale,
    onShowInteractChange,
  } = e;
  var { framePosition, frameSize } = ((e) => {
    const {
      scale,
      paintScale,
      containerWidth,
      containerHeight,
      paintWidth,
      paintHeight,
      imageWidth,
      imageHeight,
    } = e;
    const { moveX, moveY, rotate } = tA();
    const { x, y: y_1 } = tZ.x();
    const m = Math.abs(paintScale);
    const scale_1 = scale * m;
    const y = imageWidth * scale_1;
    const f = imageHeight * scale_1;
    const M =
      (containerWidth - paintWidth * m) / 2 + x * m + (moveX * m - y / 2);
    return {
      scale: scale_1,
      frameSize: p.useMemo(
        () => ({
          width: y,
          height: f,
        }),
        [y, f],
      ),
      framePosition: {
        width: `${imageWidth * scale_1}px`,
        height: `${imageHeight * scale_1}px`,
        transform: "translate("
          .concat(M, "px, ")
          .concat(
            (containerHeight - paintHeight * m) / 2 +
              y_1 * m +
              (moveY * m - f / 2),
            "px) rotate(",
          )
          .concat(rotate, "deg)"),
      },
    };
  })({
    scale,
    paintScale,
    containerWidth,
    containerHeight,
    paintWidth,
    paintHeight,
    imageWidth,
    imageHeight,
  });
  var v = p.useMemo(
    () => ({
      width: paintWidth,
      height: paintHeight,
    }),
    [paintWidth, paintHeight],
  );
  var { store } = (t = useTo()) != null ? t : {};
  (() => {
    let e;
    let t;
    const { store } = (e = useTo()) != null ? e : {};
    const a = (t = tN.F(store, (e) => e.actionCursor)) != null ? t : ta.Default;
    const rRef = p.useRef(null);
    p.useEffect(() => {
      var e;
      var t =
        (e = document.getElementsByClassName(X.XI)) == null ? undefined : e[0];
      if (t) {
        rRef.current = t.firstElementChild;
        return () => {
          if (rRef.current) {
            rRef.current.style.cursor = "default";
          }
        };
      }
    }, []);
    p.useEffect(() => {
      if (rRef.current) {
        rRef.current.style.cursor = t3[a];
      }
    }, [a]);
  })();
  var { isSelectActive, isTransforming } =
    (i = tN.F(store, (e) => ({
      isSelectActive: e.isSelectActive,
      isTransforming: e.isTransforming,
    }))) != null
      ? i
      : {};
  if (!isSelectActive) {
    return null;
  }
  var I = Y._(H._({}, framePosition), {
    transition: isTransforming ? "" : "all .1s ease-in-out",
  });
  return s.jsx(TBContext.Provider, {
    value: frameSize,
    children: s.jsx(T8Context.Provider, {
      value: v,
      children: s.jsxs(useIs, {
        style: I,
        children: [
          s.jsx(useT9, {
            onShowInteractChange,
          }),
          s.jsx(ia, {
            onShowInteractChange,
          }),
        ],
      }),
    }),
  });
};
const useIl = () => {
  var [undo, setUndo] = p.useState(true);
  var [redo, setRedo] = p.useState(true);
  var { paintModeInstance } = tU();
  var n = g.h(k._);
  var o = p.useCallback(
    (e) => {
      var t = n.createInstance(ir.c);
      t.setParams({
        action: "click",
        item: e,
      });
      t.report();
    },
    [n],
  );
  p.useEffect(() => {
    if (paintModeInstance) {
      paintModeInstance.onCommandMangerModel("redoStack", (e) => {
        setRedo(e.length === 0);
      });
      paintModeInstance.onCommandMangerModel("undoStack", (e) => {
        setUndo(e.length === 0);
      });
    }
  }, [paintModeInstance]);
  p.useEffect(() => {
    if (paintModeInstance) {
      var { redoStack, undoStack } = paintModeInstance.getCommandData();
      setRedo(redoStack.length === 0);
      setUndo(undoStack.length === 0);
    }
  }, [paintModeInstance]);
  return s.jsx("div", {
    className: "container-cZafz2",
    children: s.jsx(ic.h, {
      isLimit: {
        undo,
        redo,
      },
      handleUndo: () => {
        if (paintModeInstance != null) {
          paintModeInstance.undo();
        }
        o("undo");
      },
      handleRedo: () => {
        if (paintModeInstance != null) {
          paintModeInstance.redo();
        }
        o("redo");
      },
    }),
  });
};
const id = (e) => {
  var t = e9.w.onDragStatusChange(e);
  return () => {
    t.dispose();
  };
};
const useIh = (e) => {
  var t;
  var i;
  var { className } = e;
  var r = p.useSyncExternalStore(id, e9.w.getSnapshot.bind(e9.w));
  var n = g.h(k._);
  var { store } = (t = useTo()) != null ? t : {};
  var { paintModeInstance } = tU();
  var { drawAction = tr.Brush } =
    (i = tN.F(store, (e) => ({
      drawAction: e == null ? undefined : e.drawAction,
    }))) != null
      ? i
      : {};
  p.useEffect(() => {
    if (drawAction !== tr.Move) {
      e9.w.changeStatus("disabled");
    }
  }, [drawAction]);
  var u = p.useCallback(
    (e, t) => {
      var i = n.createInstance(ir.c);
      i.setParams({
        action: e,
        item: t,
      });
      i.report();
    },
    [n],
  );
  p.useEffect(() => {
    var e = e9.w.onMouseUp(() => u("use", "move_canvas"));
    return () => e.dispose();
  }, [u]);
  p.useEffect(() => {
    if (r === "active") {
      if (store != null) {
        store.updateDrawAction(tr.Move);
      }
    }
    if (["active", "advent"].includes(r)) {
      if (paintModeInstance != null) {
        paintModeInstance.updateMousePosition({
          offsetX: "-9999px",
          offsetY: "-9999px",
        });
      }
    }
  }, [r, store, paintModeInstance]);
  return s.jsx("div", {
    className,
    children: s.jsx(ig.p, {
      dragActive: r === "active",
      handleClickMove: () => {
        u("click", "move_canvas");
        if (r === "active") {
          e9.w.changeStatus("disabled");
        } else {
          e9.w.changeStatus("active");
        }
      },
    }),
  });
};
const useIp = (e) => {
  var t;
  var i;
  var { className } = e;
  var { store } = (t = useTo()) != null ? t : {};
  var { paintModeInstance } = tU();
  var o = g.h(k._);
  var { drawAction = tr.Brush, isSelectActive = false } =
    (i = tN.F(store, (e) => ({
      drawAction: e.drawAction,
      isSelectActive: e.isSelectActive,
    }))) != null
      ? i
      : {};
  p.useEffect(() => {
    if (isSelectActive) {
      if (paintModeInstance != null) {
        paintModeInstance.updateMousePosition({
          offsetX: "-9999px",
          offsetY: "-9999px",
        });
      }
    }
  }, [isSelectActive, paintModeInstance]);
  p.useEffect(() => {
    if (drawAction !== tr.Select) {
      if (store != null) {
        store.updateIsSelectActive(false);
      }
      if (store != null) {
        store.updateIsSelectImage(false);
      }
    }
  }, [drawAction, store]);
  p.useEffect(() => {
    if (store != null) {
      store.updateDrawAction(tr.Select);
    }
    if (store != null) {
      store.updateIsSelectActive(true);
    }
    if (store != null) {
      store.updateIsSelectImage(true);
    }
  }, [store]);
  var u = p.useCallback(
    (e) => {
      var t = o.createInstance(ir.c);
      t.setParams({
        action: "click",
        item: e,
      });
      t.report();
    },
    [o],
  );
  return s.jsx("div", {
    className,
    children: s.jsx(im.J, {
      onClick: () => {
        if (!isSelectActive) {
          u("move_layer");
          if (store != null) {
            store.updateIsSelectActive(true);
          }
          if (store != null) {
            store.updateIsSelectImage(true);
          }
          if (store != null) {
            store.updateDrawAction(tr.Select);
          }
        }
      },
      isActive: isSelectActive,
    }),
  });
};
const useIM = (e) => {
  var t;
  var {
    hiddenSelect,
    hiddenDrag,
    hiddenBoxSelection = true,
    hiddenRecognition,
    onShowInteractChange,
  } = e;
  var {
    paintModeInstance,
    drawAction,
    brushSize,
    eraserSize,
    onChangeBrushSize,
    switchDrawAction,
    onClickReset,
    onAfterChange,
  } = ((e) => {
    var t;
    var i;
    var { paintModeInstance } = tU();
    var { store } = (t = useTo()) != null ? t : {};
    var n = g.h(k._);
    var {
      drawAction = tr.Brush,
      brushSize = defaultSize[tr.Brush],
      eraserSize = defaultSize[tr.Eraser],
    } = (i = tN.F(store, (e) => ({
      drawAction: e.drawAction,
      brushSize: e.brushSize,
      eraserSize: e.eraserSize,
    }))) != null
      ? i
      : {};
    p.useEffect(() => {
      if (paintModeInstance != null) {
        paintModeInstance.onPaintAction((t) => {
          var { action } = t;
          if (e != null) {
            e(action !== "startPaint");
          }
        });
      }
    }, [paintModeInstance, e]);
    var l = useIe();
    var u = p.useCallback(
      (e) => {
        var t = n.createInstance(ir.c);
        t.setParams(e);
        t.report();
      },
      [n],
    );
    var d = (e) => {
      var { action } = e;
      var i = store == null ? undefined : store.drawAction;
      if (
        action === "endPaint" &&
        [tr.Brush, tr.Eraser, tr.BoxSelect].includes(i != null ? i : tr.Move)
      ) {
        var a = i ? iu.C(i) : undefined;
        if (!a) {
          return;
        }
        u({
          action: "use",
          item: a,
        });
      }
    };
    p.useEffect(() => {
      var e;
      e = te.C(
        ((e) => {
          const { key, defaultSize, sizeLimit } = e;
          try {
            const r = tg.b.getItem(key);
            if (!r) {
              return defaultSize;
            }
            const n = JSON.parse(r);
            if (
              Object.values(n).some(
                (e) => e < sizeLimit.min || e > sizeLimit.max,
              )
            ) {
              return defaultSize;
            }
            return n;
          } catch (e) {
            return defaultSize;
          }
        })({
          key: e7.o.bgPaintBrushSize,
          defaultSize,
          sizeLimit: {
            max: td.Gy,
            min: td.AC,
          },
        }),
      );
      if (store != null) {
        store.updateBrushSize(e[tr.Brush]);
      }
      if (store != null) {
        store.updateEraserSize(e[tr.Eraser]);
      }
    }, []);
    p.useEffect(() => {
      if (paintModeInstance != null) {
        paintModeInstance.onPaintAction(d);
      }
    }, [paintModeInstance]);
    p.useEffect(() => {
      if (drawAction === tr.Brush) {
        var e = ty(brushSize, l);
        if (paintModeInstance != null) {
          paintModeInstance.brush.changeBrushSize(e);
        }
      }
      if (drawAction === tr.Eraser) {
        var t = ty(eraserSize, l);
        if (paintModeInstance != null) {
          paintModeInstance.brush.changeBrushSize(t);
        }
      }
    }, [eraserSize, brushSize, drawAction, paintModeInstance, l]);
    p.useEffect(() => {
      if (
        paintModeInstance &&
        [tr.Brush, tr.BoxSelect, tr.Eraser].includes(drawAction)
      ) {
        paintModeInstance.updateDrawAction(drawAction);
      }
    }, [drawAction, paintModeInstance]);
    return {
      paintModeInstance,
      drawAction,
      brushSize,
      eraserSize,
      onChangeBrushSize: (e) => {
        if (!Array.isArray(e)) {
          var t = {
            [tr.Brush]: e,
            [tr.Eraser]: e,
          };
          tg.b.setItem(e7.o.bgPaintBrushSize, JSON.stringify(t));
          if (store != null) {
            store.updateBrushSize(e);
          }
          if (store != null) {
            store.updateEraserSize(e);
          }
        }
      },
      switchDrawAction: (e) => {
        if (store != null) {
          store.updateDrawAction(e);
        }
        if (paintModeInstance != null) {
          paintModeInstance.updateMousePosition({
            offsetX: "50%",
            offsetY: "50%",
          });
        }
      },
      onClickReset: () => {
        if (paintModeInstance != null) {
          paintModeInstance.clearCanvas(true);
        }
        u({
          action: "click",
          item: "ai_identifiaction",
        });
      },
      onAfterChange: (e, t) => {
        if (e === tr.BoxSelect) {
          u({
            action: "click",
            item: "box_select",
          });
        } else if (!Array.isArray(t)) {
          u({
            action: "click",
            item: e === tr.Brush ? "brush_slider" : "eraser_slider",
            value: t == null ? undefined : t.toString(),
          });
        }
      },
    };
  })(onShowInteractChange);
  var S = p.useMemo(
    () => [hiddenSelect, hiddenRecognition].filter((e) => !e).length,
    [hiddenSelect, hiddenRecognition],
  );
  var _ = p.useMemo(
    () => ({
      top: "-44px",
      left: `-${36 * S + 4 * S}px`,
      borderRadius: "8px",
    }),
    [S],
  );
  var b = p.useMemo(() => {
    var e = S + 1;
    if (!hiddenBoxSelection) {
      e += 1;
    }
    return {
      top: "-44px",
      left: `-${36 * e + 4 * e}px`,
      borderRadius: "8px",
    };
  }, [S, hiddenBoxSelection]);
  var boxSelectionConfig = p.useMemo(() => {
    if (!hiddenBoxSelection) {
      return {
        isActive: drawAction === tr.BoxSelect,
        onClick: () => switchDrawAction(tr.BoxSelect),
        onAfterChange: () => {
          onAfterChange(tr.BoxSelect);
        },
        buttonStyle: {},
        tips: l.Ay.t("dreamina_image4_select_hovertip", {}, "Box"),
      };
    }
  }, [hiddenBoxSelection, drawAction, switchDrawAction, onAfterChange]);
  var { store } = (t = useTo()) != null ? t : {};
  p.useEffect(() => {
    if (!hiddenSelect) {
      if (store != null) {
        store.updateDrawAction(tr.Select);
      }
      return;
    }
    if (!hiddenBoxSelection) {
      if (store != null) {
        store.updateDrawAction(tr.BoxSelect);
      }
      return;
    }
    if (store != null) {
      store.updateDrawAction(tr.Brush);
    }
  }, [hiddenSelect, hiddenBoxSelection, store]);
  return s.jsxs("div", {
    className: "container-OXTV2O",
    children: [
      !hiddenSelect && s.jsx(useIp, {}),
      !hiddenRecognition &&
        s.jsx(iv.M, {
          tips: l.Ay.t("web_new_wimg2img_content_intelligent", {}, "智能识别"),
          className: "intelligent-recognition-DsX9PG",
          icon: s.jsx(u.WN2, {
            role: "button",
            tabIndex: 0,
            "aria-label": [
              l.Ay.t("t2i_painter_reset", {}, "重置"),
              l.Ay.t("video_unified_edit", {}, "参考内容"),
            ].join(" · "),
            onKeyDown: c.q,
            onClick: onClickReset,
            size: 16,
          }),
        }),
      s.jsx(iy.G, {
        brushConfig: {
          contentStyle: _,
          isActive: drawAction === tr.Brush,
          size: brushSize,
          onChange: (e) => {
            onChangeBrushSize(e);
          },
          onClick: () => switchDrawAction(tr.Brush),
          onAfterChange: (e) => {
            onChangeBrushSize(e);
            onAfterChange(tr.Brush, e);
            if (paintModeInstance != null) {
              paintModeInstance.updateMousePosition({
                offsetX: "50%",
                offsetY: "50%",
              });
            }
          },
        },
        eraserConfig: {
          contentStyle: b,
          disabled: drawAction === tr.BoxSelect,
          isActive: drawAction === tr.Eraser,
          size: eraserSize,
          onChange: (e) => {
            onChangeBrushSize(e);
          },
          onClick: () => switchDrawAction(tr.Eraser),
          onAfterChange: (e) => {
            onChangeBrushSize(e);
            onAfterChange(tr.Eraser, e);
            if (paintModeInstance != null) {
              paintModeInstance.updateMousePosition({
                offsetX: "50%",
                offsetY: "50%",
              });
            }
          },
        },
        boxSelectionConfig,
      }),
      !hiddenDrag && s.jsx(useIh, {}),
    ],
  });
};
const iI = (e) => {
  var { showInteract, onShowInteractChange, prefix, suffix } = e;
  return s.jsxs("div", {
    className: "container-d5H1s3",
    style: showInteract
      ? {}
      : {
          display: "none",
        },
    children: [
      prefix,
      s.jsx(
        useIM,
        Y._(H._({}, e), {
          onShowInteractChange,
        }),
      ),
      s.jsx(useIl, {}),
      suffix,
    ],
  });
};
function iS() {
  return s.jsx("div", {
    className: "container-oVTR2h",
    children: s.jsx("div", {
      children: l.Ay.t(
        "web_new_wimg2img_content_smear",
        {},
        "涂抹选择想要参考的主体",
      ),
    }),
  });
}
const iC = (e) => {
  var t = e9.u.onScaleChange(e);
  return () => {
    t.dispose();
  };
};
const useIj = () => {
  var e;
  var { store, paintDependency: { paintInstance } = {} } =
    (e = useTo()) != null ? e : {};
  var a = g.h(k._);
  var r = p.useSyncExternalStore(iC, e9.u.getSnapshot.bind(e9.u));
  p.useEffect(() => {
    if (store != null) {
      store.updatePaintScale(r);
    }
    if (paintInstance != null) {
      paintInstance.changeDomScale(Math.abs(r));
    }
  }, [paintInstance, r, store]);
  p.useEffect(() => {
    var e;
    e9.u.scale =
      (e = store == null ? undefined : store.paintScale) != null ? e : -1;
  }, [store == null ? undefined : store.paintScale]);
  var n = p.useCallback(
    (e, t) => {
      var i = a.createInstance(ir.c);
      i.setParams({
        action: "click",
        item: e,
        value: t,
      });
      i.report();
    },
    [a],
  );
  var o = i_.y({
    handleSelectScaleCallback: (e) => {
      n("select_scale", e.toString());
    },
    currentScale: r,
  });
  var handleScaleUp = p.useCallback(() => {
    n("add_scale", o.handleScaleUp().toString());
  }, [n, o]);
  var handleScaleDown = p.useCallback(() => {
    n("minus_scale", o.handleScaleDown().toString());
  }, [n, o]);
  return s.jsx(ib.B, {
    scale: r,
    logic: Y._(H._({}, o), {
      handleScaleUp,
      handleScaleDown,
    }),
  });
};
const ix = (e) => {
  var { showInteract } = e;
  return s.jsx("div", {
    className: "rightInteract-Lffv8C",
    style: showInteract
      ? {}
      : {
          display: "none",
        },
    children: s.jsx(useIj, {}),
  });
};
const iN = p.memo(function (e) {
  const {
    hiddenSelect,
    hiddenDrag,
    hiddenRecognition,
    hiddenBoxSelection,
    scale,
    paintScale,
    containerWidth,
    containerHeight,
    paintWidth,
    paintHeight,
    imageDisplayWidth,
    imageDisplayHeight,
    hideRightInteract,
    hideFrameInteract,
    drawMaskSuccessCb,
    leftPrefix,
    leftSuffix,
  } = e;
  const { paintModeInstance } = tU();
  const SRef = p.useRef(paintModeInstance);
  SRef.current = paintModeInstance;
  const { triggerDrawMasks } = ((e, t) => {
    var i;
    var { store } = (i = useTo()) != null ? i : {};
    var r = tN.F(store, (e) => e.maskList);
    return {
      triggerDrawMasks: p.useCallback(() => {
        if ((r == null ? undefined : r.length) !== 0) {
          var i;
          var n;
          var s;
          var { currentSelection } =
            (i = (n = e.current) == null ? undefined : n.getModel()) != null
              ? i
              : {};
          if (currentSelection) {
            if ((s = e.current) != null) {
              s.drawBoxSelection(currentSelection);
            }
            return;
          }
          if (r != null) {
            r.forEach((i) => {
              let r;
              r = i.mask.url;
              er._(function* () {
                if (e.current) {
                  const i = !tF.test(r);
                  const n = e.current.getCanvasElement();
                  const image = document.createElement("canvas");
                  const o = image.getContext("2d");
                  const c = e.current.getModel().canvasOriginSize;
                  image.width = Math.ceil(n.width / c.width);
                  image.height = Math.ceil(n.height / c.height);
                  const l = () => {
                    o.imageSmoothingEnabled = true;
                    o.imageSmoothingQuality = "high";
                  };
                  l();
                  if (i) {
                    let u;
                    const [, g] = yield (
                      ((u = tW(e.current.brush.getBrushColor())),
                      er._(function* () {
                        return yield tE.R(r, tP.m1, u);
                      })())
                    );
                    if (t != null) {
                      t();
                    }
                    if (!g) {
                      return;
                    }
                    image.width = g.width;
                    image.height = g.height;
                    l();
                    o.putImageData(g, 0, 0);
                    e.current.drawImage({
                      image,
                    });
                    e.current.recordFirstScreen(g);
                    return;
                  }
                  const d = store == null ? undefined : store.getMaskDataMap(r);
                  if (d) {
                    image.width = d.width;
                    image.height = d.height;
                    l();
                    o.putImageData(d, 0, 0);
                    e.current.drawImage({
                      image,
                    });
                    const h = store == null ? undefined : store.getPaths(r);
                    if (h) {
                      e.current.drawPaths(h);
                    }
                    e.current.recordFirstScreen(d);
                    return;
                  }
                  const m = yield tD.yt(r);
                  if (m) {
                    image.width = m.width;
                    image.height = m.height;
                    o.drawImage(m, 0, 0);
                    e.current.drawImage({
                      image,
                    });
                    e.current.recordFirstScreen(
                      o.getImageData(0, 0, image.width, image.height),
                    );
                  }
                }
              })();
            });
          }
        }
      }, [r]),
    };
  })(SRef, drawMaskSuccessCb);
  p.useEffect(() => {
    if (paintModeInstance != null) {
      paintModeInstance.changeCanvasContainerSize({
        width: imageDisplayWidth,
        height: imageDisplayHeight,
      });
    }
  }, [imageDisplayHeight, imageDisplayWidth, paintModeInstance]);
  p.useEffect(() => {
    triggerDrawMasks();
  }, [paintModeInstance, triggerDrawMasks]);
  p.useEffect(() => {
    if (!tg.b.getItem(e7.o.isShowBGPaintMessage)) {
      tg.b.setItem(e7.o.isShowBGPaintMessage, "true");
      eh.l.normal({
        content: s.jsx(iS, {}),
      });
    }
  }, []);
  const [showInteract, setShowInteract] = p.useState(true);
  return s.jsxs("div", {
    className: "interact-wrapper-GLeQeG",
    children: [
      !hideFrameInteract &&
        s.jsx(useIo, {
          scale,
          paintScale,
          containerWidth,
          containerHeight,
          paintWidth,
          paintHeight,
          imageWidth: imageDisplayWidth,
          imageHeight: imageDisplayHeight,
          onShowInteractChange: setShowInteract,
        }),
      s.jsxs("div", {
        className: "interact-toolbar-hQyHDX",
        children: [
          s.jsx(iI, {
            hiddenSelect,
            hiddenDrag,
            hiddenRecognition,
            hiddenBoxSelection,
            showInteract,
            prefix: leftPrefix,
            suffix: leftSuffix,
          }),
          !hideRightInteract &&
            s.jsx(ix, {
              showInteract,
            }),
        ],
      }),
    ],
  });
});
const iw = d.PA(function (e) {
  const {
    store,
    referenceImageStore,
    paintDependency,
    leftPrefix,
    leftSuffix,
    hideFrameInteract,
    hideRightInteract,
    hiddenSelect,
    hiddenRecognition,
    hiddenBoxSelection,
  } = e;
  const { paintWidth, paintHeight, imageWidth, imageHeight } = useT(
    referenceImageStore.currentImage,
    referenceImageStore,
  );
  if (store.isEditorReady) {
    return s.jsx(TnContext_Provider, {
      value: {
        store,
        paintDependency,
        referenceImageStore,
      },
      children: s.jsx(iN, {
        containerWidth: referenceImageStore.containerSize.width,
        containerHeight: referenceImageStore.containerSize.height,
        paintWidth,
        paintHeight,
        scale: store.scale,
        paintScale: store.paintScale,
        imageDisplayHeight: imageHeight,
        imageDisplayWidth: imageWidth,
        drawMaskSuccessCb: () => {},
        leftPrefix,
        leftSuffix,
        hideFrameInteract,
        hideRightInteract,
        hiddenSelect,
        hiddenBoxSelection,
        hiddenRecognition,
      }),
    });
  }
  return s.jsx("div", {});
});
class iA {
  beforeLeave() {
    return Promise.resolve();
  }
  afterSelect() {}
  updateDisabledStatus(e) {
    this.disabled = e;
  }
  updateHoverInfo(e) {
    this.hoverInfo = e;
  }
  updateAbilityName(e) {
    this.name = e;
  }
  cancelRecognize() {
    this.recognizer.cancelRecognize();
  }
  onSave() {}
  constructor() {
    this.name = "";
    this.hoverInfo = {
      hoverType: "image",
      hoverUrl: "",
      hoverTips: "",
    };
    this.disabled = false;
    this.supportsAsyncFlow = false;
  }
}
en.Cg([eM.sH], iA.prototype, "name", undefined);
en.Cg(
  [
    eM.sH,
    en.Sn("design:type", typeof HoverInfo === "undefined" ? Object : HoverInfo),
  ],
  iA.prototype,
  "hoverInfo",
  undefined,
);
en.Cg([eM.sH], iA.prototype, "disabled", undefined);
en.Cg([eM.sH], iA.prototype, "supportsAsyncFlow", undefined);
en.Cg(
  [
    eM.XI.bound,
    en.Sn("design:type", Function),
    en.Sn("design:paramtypes", [Boolean]),
    en.Sn("design:returntype", undefined),
  ],
  iA.prototype,
  "updateDisabledStatus",
  null,
);
en.Cg(
  [
    eM.XI.bound,
    en.Sn("design:type", Function),
    en.Sn("design:paramtypes", [
      typeof HoverInfo === "undefined" ? Object : HoverInfo,
    ]),
    en.Sn("design:returntype", undefined),
  ],
  iA.prototype,
  "updateHoverInfo",
  null,
);
en.Cg(
  [
    eM.XI.bound,
    en.Sn("design:type", Function),
    en.Sn("design:paramtypes", [String]),
    en.Sn("design:returntype", undefined),
  ],
  iA.prototype,
  "updateAbilityName",
  null,
);
const iR = require("iI");
const iT = require("HJp");
const ik = require("JlF");
const iz = require("R3");
const iD = require("yk");
const iP = require("oHD");
class iE {
  cancelRecognize() {
    this._isCancelRecognize = true;
  }
  reset() {
    if (this.mutexLock.isLocked) {
      this.mutexLock.release();
    }
  }
  setRecognizeCache(e, t) {
    if (!this._isCancelRecognize) {
      this.recognizeCacheMap.put(e, t);
    }
  }
  getRecognizeCache(e) {
    return this.recognizeCacheMap.get(e);
  }
  getCacheKey(e, t) {
    return er
      ._(function* () {
        if (t) {
          if (t instanceof File) {
            return yield iD.$(this._containerService, t);
          }
          return iP.W(t);
        }
        return e;
      })
      .call(this);
  }
  constructor(e) {
    this._containerService = e;
    this.mutexLock = new ik.P();
    this.recognizeCacheMap = new iz.q(10);
    this._isCancelRecognize = false;
  }
}
iE = en.Cg(
  [
    en.Qj(0, k._),
    en.Sn("design:type", Function),
    en.Sn("design:paramtypes", [k._ === undefined ? Object : k._]),
  ],
  iE,
);
class iL extends iE {
  recognize(e) {
    return er
      ._(function* () {
        this._isCancelRecognize = false;
        const { resp } = yield this.preRecognize(e);
        if (resp.ok) {
          if (this._isCancelRecognize) {
            return {
              recognizeResult: f.Gj.Cancelled,
            };
          }
          const maskList = resp.value;
          return {
            data: {
              maskList,
              recognizeImageUrl:
                maskList == null ? undefined : maskList[0].mask.url,
            },
            recognizeResult: f.Gj.Success,
          };
        }
        const { code } = resp;
        switch (code) {
          case 2046:
            return {
              recognizeResult: f.Gj.NoSegmentObjectFoundError,
            };
          case 2047:
            return {
              recognizeResult: f.Gj.SegmentFailedError,
            };
          default:
            return {
              recognizeResult: f.Gj.NetworkError,
            };
        }
      })
      .call(this);
  }
  preRecognize(e) {
    return er
      ._(function* () {
        yield this.mutexLock.acquire();
        try {
          const t = yield this.getCacheKey(e);
          const i = this.getRecognizeCache(t);
          if (i) {
            return i;
          }
          const a = this._controlnetPreviewDataService.getSaliencySEG(
            {
              imageUriList: [e],
              mode: iR.L.Canvas,
            },
            {
              babi_param: ev.Wu(
                ev.OC({
                  scenario: "image_video_generation",
                  featureKey: "to_image_referenceimage",
                  featureEntranceDetail: "".concat(
                    em.F(),
                    "-referenceimage-object_detection",
                  ),
                  editType: "canva",
                  toolId: ey.M.Canva,
                }),
              ),
            },
          );
          const r = this._controlnetPreviewDataService.getSaliencySEG(
            {
              imageUriList: [e],
            },
            {
              babi_param: ev.Wu(
                ev.OC({
                  scenario: "image_video_generation",
                  featureKey: "to_image_referenceimage",
                  featureEntranceDetail: "".concat(
                    em.F(),
                    "-referenceimage-object_detection",
                  ),
                  editType: "canva",
                  toolId: ey.M.Canva,
                }),
              ),
            },
          );
          const [n, s] = yield Promise.all([a, r]);
          if (n.ok) {
            if (
              s.ok &&
              ((c = n.value) == null || (o = c[0]) == null
                ? undefined
                : o.mask) &&
              ((u = s.value) == null || (l = u[0]) == null ? undefined : l.mask)
            ) {
              n.value[0].mask.url =
                (d = s.value) == null || (g = d[0]) == null
                  ? undefined
                  : g.mask.url;
            }
            this.setRecognizeCache(t, {
              resp: n,
            });
          }
          if (n.ok) {
            var o;
            var c;
            var l;
            var u;
            var g;
            var d;
            let h;
            let m;
            const p = n.value;
            const v =
              p == null || (m = p[0]) == null || (h = m.mask) == null
                ? undefined
                : h.url;
            eX.y(v);
          }
          return {
            resp: n,
          };
        } finally {
          this.mutexLock.release();
        }
      })
      .call(this);
  }
  constructor(e, t) {
    super(e);
    this._controlnetPreviewDataService = t;
  }
}
iL = en.Cg(
  [
    en.Qj(0, k._),
    en.Qj(1, iT.Z),
    en.Sn("design:type", Function),
    en.Sn("design:paramtypes", [
      k._ === undefined ? Object : k._,
      typeof ControlnetPreviewDataService === "undefined"
        ? Object
        : ControlnetPreviewDataService,
    ]),
  ],
  iL,
);
const iW = require("uGr");
const iF = require("bDG");
class iU {
  get isTransforming() {
    return this.transformType !== ti.None;
  }
  get isInitActualSize() {
    return this._isInitActualSize;
  }
  clearMaskUriToImageDataMap() {
    this.maskUriToImageDataMap.clear();
  }
  setMaskUriToImageDataMap(e, t) {
    this.maskUriToImageDataMap.set(e, t);
  }
  updateIsSelectImage(e) {
    this.isSelectImage = e;
  }
  updateRawImageSize(e, t) {
    this.rawImageSize = {
      width: e,
      height: t,
    };
  }
  updateImageUrl(e) {
    this.rawImageUrl = e;
  }
  initActualPaintSize(e, t) {
    this.actualPaintSize = {
      width: e,
      height: t,
    };
    if (
      Object.keys((i = this.transformData) != null ? i : {}).length === iF.J ||
      this.transformData === null
    ) {
      this._isInitActualSize = true;
      this.moveX = e / 2;
      this.moveY = t / 2;
      this.paintWidth = e;
      this.paintHeight = t;
      return;
    }
    var i;
    let a;
    const { width = 0, height = 0 } =
      (a = this.originPaintSize) != null ? a : {};
    const { moveX = 0, moveY = 0 } = this.transformData;
    const { width: width_1, height: height_1 } = this.rawImageSize;
    const { moveX: moveX_1, moveY: moveY_1 } = iW.e({
      currentMove: {
        moveX,
        moveY,
      },
      currentSize: {
        width,
        height,
      },
      targetSize: {
        width: e,
        height: t,
      },
      imageSize: {
        width: width_1,
        height: height_1,
      },
      imageScale: this.scale,
      imageRotate: this.rotate,
    });
    this._isInitActualSize = true;
    this.moveX = moveX_1;
    this.moveY = moveY_1;
    this.paintWidth = e;
    this.paintHeight = t;
  }
  updatePaintSize(e, t) {
    const needHandleEdge =
      arguments.length > 2 && arguments[2] !== undefined && arguments[2];
    if (this._isInitActualSize) {
      const { moveX, moveY } = this;
      const { width, height } = this.rawImageSize;
      if (width && height) {
        const { moveX: moveX_1, moveY: moveY_1 } = iW.e({
          currentMove: {
            moveX,
            moveY,
          },
          currentSize: {
            width: this.paintWidth,
            height: this.paintHeight,
          },
          targetSize: {
            width: e,
            height: t,
          },
          imageSize: {
            width,
            height,
          },
          imageScale: this.scale,
          imageRotate: this.rotate,
          needHandleEdge,
        });
        this.moveX = moveX_1;
        this.moveY = moveY_1;
      }
      this.paintWidth = e;
      this.paintHeight = t;
    }
  }
  updateActualPaintSize(e, t) {
    this.actualPaintSize = {
      width: e,
      height: t,
    };
  }
  updateIsEditorReady(e) {
    this.isEditorReady = e;
  }
  updateIsSelectActive(e) {
    this.isSelectActive = e;
  }
  updateDrawAction(e) {
    this.drawAction = e;
  }
  updateBrushSize(e) {
    this.brushSize = e;
  }
  updateEraserSize(e) {
    this.eraserSize = e;
  }
  updateTransformType(e) {
    this.transformType = e;
  }
  updatePaintScale(e) {
    this.paintScale = e;
  }
  updateActionCursor(e) {
    this.actionCursor = e;
  }
  resetTransformType() {
    this.transformType = ti.None;
  }
  resetActionCursor() {
    this.actionCursor = ta.Default;
  }
  updateMoveX(e) {
    this.moveX = e;
  }
  updateMoveY(e) {
    this.moveY = e;
  }
  updateScale(e) {
    this.scale = e;
  }
  updateRotate(e) {
    this.rotate = e;
  }
  updateOriginPaintSize(e, t) {
    this.originPaintSize = {
      width: e,
      height: t,
    };
  }
  reset() {
    this.isEditorReady = false;
    this.paintWidth = 0;
    this.paintHeight = 0;
    this.moveX = 0;
    this.moveY = 0;
    this.scale = 1;
    this.rotate = 0;
    this.isSelectImage = true;
    this.actualPaintSize = {
      width: 0,
      height: 0,
    };
    this.rawImageSize = {
      width: 0,
      height: 0,
    };
    this.rawImageUrl = "";
    this._isInitActualSize = false;
    this.isSelectActive = true;
    this.drawAction = tr.Select;
    this.brushSize = 1;
    this.eraserSize = 1;
    this.transformType = ti.None;
    this.paintScale = -1;
    this.actionCursor = ta.Default;
    this.maskList = [];
    this.transformData = null;
    this.originPaintSize = {
      width: 0,
      height: 0,
    };
  }
  updateMaskList(e) {
    this.maskList = e;
  }
  initTransformData(e) {
    this.transformData = e;
    const { scale = 1, rotate = 0 } = e;
    this.updateScale(scale);
    this.updateRotate(rotate);
  }
  constructor() {
    this.isEditorReady = false;
    this.paintWidth = 0;
    this.paintHeight = 0;
    this.moveX = 0;
    this.moveY = 0;
    this.scale = 1;
    this.rotate = 0;
    this.isSelectImage = false;
    this.isSelectActive = false;
    this.drawAction = tr.Select;
    this.brushSize = 1;
    this.eraserSize = 1;
    this.transformType = ti.None;
    this.paintScale = -1;
    this.actionCursor = ta.Default;
    this.maskList = [];
    this.maskUriToImageDataMap = new Map();
    this.paths = new Map();
    this.actualPaintSize = {
      width: 0,
      height: 0,
    };
    this.rawImageSize = {
      width: 0,
      height: 0,
    };
    this.rawImageUrl = "";
    this.transformData = null;
    this._isInitActualSize = false;
    this.getMaskDataMap = (e) => this.maskUriToImageDataMap.get(e);
    this.getPaths = (e) => this.paths.get(e);
    eM.Gn(this);
  }
}
en.Cg([eM.sH], iU.prototype, "isEditorReady", undefined);
en.Cg([eM.sH], iU.prototype, "paintWidth", undefined);
en.Cg([eM.sH], iU.prototype, "paintHeight", undefined);
en.Cg([eM.sH], iU.prototype, "moveX", undefined);
en.Cg([eM.sH], iU.prototype, "moveY", undefined);
en.Cg([eM.sH], iU.prototype, "scale", undefined);
en.Cg([eM.sH], iU.prototype, "rotate", undefined);
en.Cg([eM.sH], iU.prototype, "isSelectImage", undefined);
en.Cg([eM.sH], iU.prototype, "isSelectActive", undefined);
en.Cg([eM.sH], iU.prototype, "drawAction", undefined);
en.Cg([eM.sH], iU.prototype, "brushSize", undefined);
en.Cg([eM.sH], iU.prototype, "eraserSize", undefined);
en.Cg([eM.sH], iU.prototype, "transformType", undefined);
en.Cg([eM.sH], iU.prototype, "paintScale", undefined);
en.Cg([eM.sH], iU.prototype, "actionCursor", undefined);
en.Cg(
  [
    eM.sH,
    en.Sn(
      "design:type",
      typeof DreaminaSaliencySEGMaskList === "undefined"
        ? Object
        : DreaminaSaliencySEGMaskList,
    ),
  ],
  iU.prototype,
  "maskList",
  undefined,
);
en.Cg([eM.sH], iU.prototype, "rawImageUrl", undefined);
en.Cg(
  [eM.sH, en.Sn("design:type", Object)],
  iU.prototype,
  "transformData",
  undefined,
);
en.Cg(
  [eM.sH, en.Sn("design:type", Object)],
  iU.prototype,
  "originPaintSize",
  undefined,
);
en.Cg(
  [eM.EW, en.Sn("design:type", Boolean), en.Sn("design:paramtypes", [])],
  iU.prototype,
  "isTransforming",
  null,
);
en.Cg(
  [eM.EW, en.Sn("design:type", Boolean), en.Sn("design:paramtypes", [])],
  iU.prototype,
  "isInitActualSize",
  null,
);
en.Cg(
  [
    eM.XI.bound,
    en.Sn("design:type", Function),
    en.Sn("design:paramtypes", []),
    en.Sn("design:returntype", undefined),
  ],
  iU.prototype,
  "clearMaskUriToImageDataMap",
  null,
);
en.Cg(
  [
    eM.XI.bound,
    en.Sn("design:type", Function),
    en.Sn("design:paramtypes", [
      String,
      typeof ImageData === "undefined" ? Object : ImageData,
    ]),
    en.Sn("design:returntype", undefined),
  ],
  iU.prototype,
  "setMaskUriToImageDataMap",
  null,
);
en.Cg(
  [
    eM.XI.bound,
    en.Sn("design:type", Function),
    en.Sn("design:paramtypes", [Boolean]),
    en.Sn("design:returntype", undefined),
  ],
  iU.prototype,
  "updateIsSelectImage",
  null,
);
en.Cg(
  [
    eM.XI.bound,
    en.Sn("design:type", Function),
    en.Sn("design:paramtypes", [Number, Number]),
    en.Sn("design:returntype", undefined),
  ],
  iU.prototype,
  "updateRawImageSize",
  null,
);
en.Cg(
  [
    eM.XI.bound,
    en.Sn("design:type", Function),
    en.Sn("design:paramtypes", [String]),
    en.Sn("design:returntype", undefined),
  ],
  iU.prototype,
  "updateImageUrl",
  null,
);
en.Cg(
  [
    eM.XI.bound,
    en.Sn("design:type", Function),
    en.Sn("design:paramtypes", [Number, Number]),
    en.Sn("design:returntype", undefined),
  ],
  iU.prototype,
  "initActualPaintSize",
  null,
);
en.Cg(
  [
    eM.XI.bound,
    en.Sn("design:type", Function),
    en.Sn("design:paramtypes", [Number, Number, undefined]),
    en.Sn("design:returntype", undefined),
  ],
  iU.prototype,
  "updatePaintSize",
  null,
);
en.Cg(
  [
    eM.XI.bound,
    en.Sn("design:type", Function),
    en.Sn("design:paramtypes", [Number, Number]),
    en.Sn("design:returntype", undefined),
  ],
  iU.prototype,
  "updateActualPaintSize",
  null,
);
en.Cg(
  [
    eM.XI.bound,
    en.Sn("design:type", Function),
    en.Sn("design:paramtypes", [Boolean]),
    en.Sn("design:returntype", undefined),
  ],
  iU.prototype,
  "updateIsEditorReady",
  null,
);
en.Cg(
  [
    eM.XI.bound,
    en.Sn("design:type", Function),
    en.Sn("design:paramtypes", [Boolean]),
    en.Sn("design:returntype", undefined),
  ],
  iU.prototype,
  "updateIsSelectActive",
  null,
);
en.Cg(
  [
    eM.XI.bound,
    en.Sn("design:type", Function),
    en.Sn("design:paramtypes", [tr === undefined ? Object : tr]),
    en.Sn("design:returntype", undefined),
  ],
  iU.prototype,
  "updateDrawAction",
  null,
);
en.Cg(
  [
    eM.XI.bound,
    en.Sn("design:type", Function),
    en.Sn("design:paramtypes", [Number]),
    en.Sn("design:returntype", undefined),
  ],
  iU.prototype,
  "updateBrushSize",
  null,
);
en.Cg(
  [
    eM.XI.bound,
    en.Sn("design:type", Function),
    en.Sn("design:paramtypes", [Number]),
    en.Sn("design:returntype", undefined),
  ],
  iU.prototype,
  "updateEraserSize",
  null,
);
en.Cg(
  [
    eM.XI.bound,
    en.Sn("design:type", Function),
    en.Sn("design:paramtypes", [ti === undefined ? Object : ti]),
    en.Sn("design:returntype", undefined),
  ],
  iU.prototype,
  "updateTransformType",
  null,
);
en.Cg(
  [
    eM.XI.bound,
    en.Sn("design:type", Function),
    en.Sn("design:paramtypes", [Number]),
    en.Sn("design:returntype", undefined),
  ],
  iU.prototype,
  "updatePaintScale",
  null,
);
en.Cg(
  [
    eM.XI.bound,
    en.Sn("design:type", Function),
    en.Sn("design:paramtypes", [ta === undefined ? Object : ta]),
    en.Sn("design:returntype", undefined),
  ],
  iU.prototype,
  "updateActionCursor",
  null,
);
en.Cg(
  [
    eM.XI.bound,
    en.Sn("design:type", Function),
    en.Sn("design:paramtypes", []),
    en.Sn("design:returntype", undefined),
  ],
  iU.prototype,
  "resetTransformType",
  null,
);
en.Cg(
  [
    eM.XI.bound,
    en.Sn("design:type", Function),
    en.Sn("design:paramtypes", []),
    en.Sn("design:returntype", undefined),
  ],
  iU.prototype,
  "resetActionCursor",
  null,
);
en.Cg(
  [
    eM.XI.bound,
    en.Sn("design:type", Function),
    en.Sn("design:paramtypes", [Number]),
    en.Sn("design:returntype", undefined),
  ],
  iU.prototype,
  "updateMoveX",
  null,
);
en.Cg(
  [
    eM.XI.bound,
    en.Sn("design:type", Function),
    en.Sn("design:paramtypes", [Number]),
    en.Sn("design:returntype", undefined),
  ],
  iU.prototype,
  "updateMoveY",
  null,
);
en.Cg(
  [
    eM.XI.bound,
    en.Sn("design:type", Function),
    en.Sn("design:paramtypes", [Number]),
    en.Sn("design:returntype", undefined),
  ],
  iU.prototype,
  "updateScale",
  null,
);
en.Cg(
  [
    eM.XI.bound,
    en.Sn("design:type", Function),
    en.Sn("design:paramtypes", [Number]),
    en.Sn("design:returntype", undefined),
  ],
  iU.prototype,
  "updateRotate",
  null,
);
en.Cg(
  [
    eM.XI.bound,
    en.Sn("design:type", Function),
    en.Sn("design:paramtypes", [Number, Number]),
    en.Sn("design:returntype", undefined),
  ],
  iU.prototype,
  "updateOriginPaintSize",
  null,
);
en.Cg(
  [
    eM.XI.bound,
    en.Sn("design:type", Function),
    en.Sn("design:paramtypes", []),
    en.Sn("design:returntype", undefined),
  ],
  iU.prototype,
  "reset",
  null,
);
en.Cg(
  [
    eM.XI.bound,
    en.Sn("design:type", Function),
    en.Sn("design:paramtypes", [
      typeof DreaminaSaliencySEGMaskList === "undefined"
        ? Object
        : DreaminaSaliencySEGMaskList,
    ]),
    en.Sn("design:returntype", undefined),
  ],
  iU.prototype,
  "updateMaskList",
  null,
);
en.Cg(
  [
    eM.XI.bound,
    en.Sn("design:type", Function),
    en.Sn("design:paramtypes", [Object]),
    en.Sn("design:returntype", undefined),
  ],
  iU.prototype,
  "initTransformData",
  null,
);
class iZ {
  setOriginUri(e) {
    this.originUri = e;
  }
  setOriginUrl(e) {
    this.originUrl = e;
  }
  reset() {
    this.originUri = "";
    this.originUrl = "";
  }
  getCommonParam() {
    const aspectRatio = this._referenceImageStore.aspectRatio;
    return {
      isDimensionLocked: this._referenceImageStore.isLocked,
      generateWidth: this._referenceImageStore.customWidth,
      generateHeight: this._referenceImageStore.customHeight,
      ratio: aspectRatio,
      imageRangeConfig: this._referenceImageStore.imageRangeConfig,
      aspectRatioImageSizeMap:
        this._referenceImageStore.aspectRatioImageSizeMap,
    };
  }
  constructor(e) {
    this._referenceImageStore = e;
    this.originUri = "";
    this.originUrl = "";
  }
}
class iO extends iZ {
  get isRecognized() {
    return this.paintStore.maskList.length !== 0;
  }
  savePaintMask() {
    const e = this.paintModeInstance.generatePaintContent();
    this.paintStore.updateMaskList([
      {
        mask: {
          uri: "",
          url: e,
        },
      },
    ]);
    const t = this.paintModeInstance.getImageData();
    this.paintStore.clearMaskUriToImageDataMap();
    this.paintStore.setMaskUriToImageDataMap(e, t);
  }
  getReferImageParams() {
    const e = super.getCommonParam();
    const t = this.paintModeInstance.generatePaintContent();
    const { moveX, moveY } = iW.e({
      currentMove: {
        moveX: this.paintStore.moveX,
        moveY: this.paintStore.moveY,
      },
      currentSize: {
        width: this.paintStore.paintWidth,
        height: this.paintStore.paintHeight,
      },
      targetSize: this.paintStore.actualPaintSize,
      imageSize: this.paintStore.rawImageSize,
      imageScale: this.paintStore.scale,
      imageRotate: this.paintStore.rotate,
    });
    return Y._(H._({}, e), {
      model: {
        originImage: {
          imageUri: this.originUri,
          imageUrl: this.paintStore.rawImageUrl,
        },
        originMask: {
          imageUri: "",
          imageUrl: t,
        },
        extra: {
          moveX: t4.g(moveX, 2),
          moveY: t4.g(moveY, 2),
          scale: t4.g(this.paintStore.scale, 2),
          rotate: t4.g(this.paintStore.rotate, 2),
        },
        abilityName: ez.DABlendAbilityName.BgPaint,
        paintSize: {
          width: this.paintStore.actualPaintSize.width,
          height: this.paintStore.actualPaintSize.height,
        },
      },
    });
  }
  updatePaintModeInstance(e) {
    this.paintModeInstance = e;
  }
  reset() {
    this.paintStore.reset();
    super.reset();
  }
  initWithImagineParams(e, t) {
    let i;
    if (
      ((i = e.model) == null ? undefined : i.abilityName) ===
      ez.DABlendAbilityName.BgPaint
    ) {
      let a;
      let r;
      let n;
      let s;
      let o;
      const { originMask, originImage, paintSize, mask } = e.model;
      this.originUri = (a = originImage.imageUri) != null ? a : "";
      this.paintStore.updateMaskList([
        {
          mask: {
            uri: (r = originMask.imageUri) != null ? r : "",
            url: (n = originMask.imageUrl) != null ? n : "",
          },
        },
      ]);
      const d =
        paintSize != null
          ? paintSize
          : {
              width:
                (s = mask == null ? undefined : mask.width) != null ? s : 1024,
              height:
                (o = mask == null ? undefined : mask.height) != null ? o : 1024,
            };
      this.paintStore.updateOriginPaintSize(d.width, d.height);
      this.paintStore.initTransformData(e.model.extra);
    }
  }
  constructor(e) {
    super(e);
    this.paintStore = new iU();
    eM.Gn(this);
  }
}
en.Cg(
  [eM.EW, en.Sn("design:type", Boolean), en.Sn("design:paramtypes", [])],
  iO.prototype,
  "isRecognized",
  null,
);
en.Cg(
  [
    eM.XI.bound,
    en.Sn("design:type", Function),
    en.Sn("design:paramtypes", [
      typeof PaintMode === "undefined" ? Object : PaintMode,
    ]),
    en.Sn("design:returntype", undefined),
  ],
  iO.prototype,
  "updatePaintModeInstance",
  null,
);
en.Cg(
  [
    eM.XI.bound,
    en.Sn("design:type", Function),
    en.Sn("design:paramtypes", []),
    en.Sn("design:returntype", undefined),
  ],
  iO.prototype,
  "reset",
  null,
);
class iG extends iA {
  handleAbilityChange(e) {
    return er
      ._(function* () {
        if (this.store.paintStore.maskList.length) {
          return f.Gj.Success;
        }
        let t;
        const i = yield this.recognizer.recognize(e.uri);
        this.store.setOriginUri(e.uri);
        if (i.recognizeResult === f.Gj.Success) {
          el.X3(
            (t = i.data) == null ? undefined : t.maskList,
            "maskList is required",
          );
          this.store.paintStore.updateMaskList(i.data.maskList);
        }
        return i.recognizeResult;
      })
      .call(this);
  }
  postProcess(e) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(H._({}, e));
      }, 0);
    });
  }
  _createInteractComponent() {
    return d.PA(() =>
      s.jsx(iw, {
        store: this.store.paintStore,
        referenceImageStore: this._referenceImageStore,
        paintDependency: this._paintDependency,
      }),
    );
  }
  _createReferenceImageComponent() {
    return d.PA((e) => {
      var { image } = e;
      var i = p.useCallback((e) => {
        this._updateGraphicEditor(e);
      }, []);
      var a = p.useCallback((e) => {
        this.store.updatePaintModeInstance(e);
        this._updatePaintModeInstance(e);
      }, []);
      var r = p.useCallback(() => {
        this._updateGraphicEditor(null);
      }, []);
      p.useEffect(
        () => () => {
          this.store.savePaintMask();
          this._updateGraphicEditor(null);
          this._updatePaintModeInstance(null);
          this.store.paintStore.updatePaintScale(-1);
          e9.u.reset();
          e9.w.reset();
        },
        [],
      );
      return s.jsx(tz, {
        image,
        abilityType: this.abilityType,
        referenceImageStore: this._referenceImageStore,
        store: this.store,
        customWidth: this._referenceImageStore.customWidth,
        customHeight: this._referenceImageStore.customHeight,
        onEditorCreated: i,
        onPaintInstanceCreated: a,
        onEditorDestroy: r,
      });
    });
  }
  _updatePaintModeInstance(e) {
    this._paintDependency.paintInstance = e;
  }
  _updateGraphicEditor(e) {
    this._paintDependency.editor = e;
  }
  constructor(e, t) {
    super();
    this._referenceImageStore = e;
    this._containerService = t;
    this.name = l.Ay.t("web_reference_element_object", {}, "主体识别");
    this.abilityType = f.gP.BgPaint;
    this.interactComponent = this._createInteractComponent();
    this.referenceImageComponent = this._createReferenceImageComponent();
    this._paintDependency = {
      editor: null,
      paintInstance: null,
    };
    this.store = this._containerService.createInstance(
      iO,
      this._referenceImageStore,
    );
    this.recognizer = this._containerService.createInstance(iL);
  }
}
en.Cg(
  [eM.sH, en.Sn("design:type", Object)],
  iG.prototype,
  "_paintDependency",
  undefined,
);
en.Cg(
  [
    eM.XI.bound,
    en.Sn("design:type", Function),
    en.Sn("design:paramtypes", [Object]),
    en.Sn("design:returntype", undefined),
  ],
  iG.prototype,
  "_updatePaintModeInstance",
  null,
);
en.Cg(
  [
    eM.XI.bound,
    en.Sn("design:type", Function),
    en.Sn("design:paramtypes", [Object]),
    en.Sn("design:returntype", undefined),
  ],
  iG.prototype,
  "_updateGraphicEditor",
  null,
);
iG = en.Cg(
  [
    en.Qj(1, k._),
    en.Sn("design:type", Function),
    en.Sn("design:paramtypes", [
      typeof ReferenceImageStore === "undefined" ? Object : ReferenceImageStore,
      k._ === undefined ? Object : k._,
    ]),
  ],
  iG,
);
const iB = require("VA");
const i$ = require("TK");
const iX = require("Bb");
const iH = require("uVZ");
const iY = d.PA(function (e) {
  const {
    image,
    referenceImageStore,
    mode,
    store,
    abilityType,
    onEditorCreated,
    onPaintInstanceCreated,
    onEditorDestroy,
    customWidth,
    customHeight,
  } = e;
  const dRef = p.useRef(null);
  const hRef = p.useRef(null);
  const [m, setM] = p.useState(true);
  const y = customWidth / customHeight;
  const fRef = p.useRef(y);
  p.useEffect(() => {
    if (y !== fRef.current && m) {
      setM(false);
    }
  }, [y, m]);
  const { paintWidth, paintHeight, imageWidth, imageHeight } = useT(
    image,
    referenceImageStore,
  );
  const store_1 = p.useMemo(() => {
    if (mode === "paint") {
      return store.maskPaintStore;
    }
    return store.mattingPaintStore;
  }, [mode, store]);
  const { graphicEditorRef, paintInstanceRef } = useTu({
    paintRef: hRef,
    store: store_1,
    hooks: {
      onEditorCreated,
      onPaintInstanceCreated,
      onEditorDestroy,
    },
  });
  const x = e8.A(() => {
    paintInstanceRef.current.changeCanvasSize({
      width: image.width,
      height: image.height,
    });
    var e = te.C(tt.k(e7.o.bgPaintBrushSize));
    var tr_Brush = tr.Brush;
    var a = e6.p;
    paintInstanceRef.current.getCanvasElement().className =
      "canvas-style-sF47Jb";
    paintInstanceRef.current.brush.changeBrushColor(tf(e6.C, a));
    var r = ty(e[tr_Brush]);
    paintInstanceRef.current.brush.changeBrushSize(r);
  });
  const N = p.useMemo(
    () => ({
      width: customWidth,
      height: customHeight,
    }),
    [customWidth, customHeight],
  );
  p.useEffect(() => {
    x();
  }, [x]);
  return s.jsx(TnContext_Provider, {
    value: {
      store: store_1,
      paintDependency: {
        editor: graphicEditorRef.current,
        paintInstance: paintInstanceRef.current,
      },
      referenceImageStore,
    },
    children: s.jsx(tk, {
      paintWidth,
      paintHeight,
      imageWidth,
      imageHeight,
      imageW: image.width,
      imageH: image.height,
      url: image.url,
      abilityType,
      isInitialLoad: m,
      largeImageInfo: N,
      paintContentRef: dRef,
      paintRef: hRef,
      instances: {
        dragInstance: e9.w,
        resizeInstance: e9.u,
      },
    }),
  });
});
const iQ = d.PA(function (e) {
  const { maskPaintStore } = e;
  const { paintMaskUrl } = maskPaintStore;
  if (paintMaskUrl) {
    return s.jsx("img", {
      alt: "",
      draggable: false,
      crossOrigin: "anonymous",
      className: "mask-F1PdIj",
      src: C.m(paintMaskUrl, null, {
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
          "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1-lZwWFJqQmtXRXBzWTNrNWFtSXlO$EJh$np$d1R*Z*tiR0p0$m5sWld*SjJZMms1-0dKd$$te*pi$FZvWWtNNWJWcFhSakJr$0$wc1kzaz$jR0p-%m01-$$6Rn$Xb*Mx-kdOdFJqQmlNM*wy$1RJNWRHTkhPWFZh$np$d1kzaz$l$nB-$214amJWWjFX$EpWZEd*WE1Xa*FNbF-wWWxjNWExbFhkM1paTWpsMFkw-z$k$nB-TlRCam$%bHBa$mhT-k$4WFZtd*hXRk-wWTBkR2NHSn$$WFJp$jBaNll-az$h$1ZZ$W14T$-xWnJZ$mhSZEdOSFJuQmlibE-wWWxkR2$tRj$O$EJqTTJob1kyMWtN$04z%FQwPQ",
      }),
    });
  }
  return null;
});
const iJ = d.PA(function (e) {
  const { maskPaintStore } = e;
  const maskPaintStore_paintBoxSelectionPosition =
    maskPaintStore.paintBoxSelectionPosition;
  if (maskPaintStore_paintBoxSelectionPosition) {
    return s.jsx("div", {
      style: {
        position: "absolute",
        left: "".concat(maskPaintStore_paintBoxSelectionPosition.x, "px"),
        top: "".concat(maskPaintStore_paintBoxSelectionPosition.y, "px"),
        width: "".concat(maskPaintStore_paintBoxSelectionPosition.width, "px"),
        height: "".concat(
          maskPaintStore_paintBoxSelectionPosition.height,
          "px",
        ),
        border: "2px dashed #00CAE0",
        backgroundColor: "transparent",
        boxSizing: "border-box",
        borderRadius: "2px",
        pointerEvents: "none",
        zIndex: 2,
      },
    });
  }
  return null;
});
const iV = p.memo(function (e) {
  const { customRatio, imageSize, children } = e;
  const r = imageSize.width / imageSize.height;
  const n = p.useMemo(() => Q(X.Rh, customRatio), [customRatio]);
  const o = p.useMemo(() => Q(customRatio, r), [customRatio, r]);
  return s.jsx("div", {
    className: "reference-image-shadow-BvkWHS",
    children: s.jsx("div", {
      className: "custom-ratio-area-X9VFJa",
      style: n,
      children: s.jsx("div", {
        className: "content-vXTjCS",
        style: o,
        children,
      }),
    }),
  });
});
const iK = p.memo(function (e) {
  const { store, children, customRatio, image } = e;
  return s.jsxs(s.Fragment, {
    children: [
      children,
      s.jsx(iV, {
        customRatio,
        imageSize: image,
        children: s.jsxs(s.Fragment, {
          children: [
            s.jsx(iQ, {
              maskPaintStore: store.maskPaintStore,
            }),
            s.jsx(iJ, {
              maskPaintStore: store.maskPaintStore,
            }),
          ],
        }),
      }),
    ],
  });
});
require("xj");
const iq = require("R8");
const i0 = p.memo(function (e) {
  const { icon, tooltip, onClick } = e;
  const r = p.useMemo(
    () => ({
      popupAlign: {
        bottom: 8,
        top: 8,
      },
    }),
    [],
  );
  return s.jsx(t0.A, {
    content: tooltip,
    position: "bottom",
    triggerProps: r,
    children: s.jsx("div", {
      role: "button",
      "aria-label": tooltip,
      "aria-disabled": !onClick,
      tabIndex: onClick ? 0 : -1,
      onKeyDown: c.q,
      className: "icon-button-HUBWtk",
      onClick,
      children: s.jsx("div", {
        className: "icon-container-gLFhGj",
        children: icon,
      }),
    }),
  });
});
const i1 = p.memo(function (e) {
  const { name } = e;
  return s.jsx("span", {
    className: "content-Oz2bZZ",
    children: name,
  });
});
function useI4(e) {
  const { onSaveMatting, onExitMatting, mattingPaintStore } = e;
  const r = tx._(e, ["onSaveMatting", "onExitMatting", "mattingPaintStore"]);
  const n = p.useMemo(
    () => l.Ay.t("web_image_remove_bg_btn_done", {}, "Done"),
    [],
  );
  const o = p.useMemo(
    () =>
      s.jsx(u.bWN, {
        size: 16,
      }),
    [],
  );
  const c = p.useMemo(
    () =>
      s.jsx(i0, {
        icon: o,
        tooltip: "关闭",
        onClick: onExitMatting,
      }),
    [o, onExitMatting],
  );
  const g = p.useMemo(
    () =>
      s.jsx("div", {
        className: "button-wrap-ESAgz9",
        children: s.jsx(iq.A, {
          className: "confirm-button-aKyTr4",
          onClick: onSaveMatting,
          children: n,
        }),
      }),
    [n, onSaveMatting],
  );
  const d = p.useMemo(
    () => l.Ay.t("web_image_remove_bg_hovertip", {}, "抠图"),
    [],
  );
  return s.jsxs(s.Fragment, {
    children: [
      s.jsx(i1, {
        name: d,
      }),
      s.jsx(
        iw,
        Y._(H._({}, r), {
          leftPrefix: c,
          leftSuffix: g,
          store: mattingPaintStore,
        }),
      ),
    ],
  });
}
const i2 = {
  "reference-level-container": "reference-level-container-FdvEDL",
  referenceLevelContainer: "reference-level-container-FdvEDL",
  "reference-content": "reference-content-oQZkYj",
  referenceContent: "reference-content-oQZkYj",
  "slider-wrap": "slider-wrap-gY6yNA",
  sliderWrap: "slider-wrap-gY6yNA",
  slider: "slider-N6LYs9",
  "interact-area": "interact-area-mt6DRI",
  interactArea: "interact-area-mt6DRI",
  active: "active-PzexUr",
  "param-icon": "param-icon-AeEs3F",
  paramIcon: "param-icon-AeEs3F",
  "icon-container": "icon-container-u1hkft",
  iconContainer: "icon-container-u1hkft",
  icon: "icon-GU48zq",
};
const i3 = {
  container: "container-YjFrVT",
  panel: "panel-WNdvvJ",
  showPanel: "showPanel-oiaU4W",
  hide: "hide-X0sqbT",
  hidePanel: "hidePanel-lHaTZK",
};
const i5 = p.forwardRef(function (e, t) {
  const {
    content,
    children,
    containerClassName,
    contentClassName,
    contentStyle,
    isDisable = false,
    needStopPropagation = false,
    hasBackdropFilter = true,
    isUseHover,
    onVisibleChange,
    onMouseEnter,
    onMouseOut,
  } = e;
  const vRef = p.useRef(null);
  const fRef = p.useRef(null);
  const MRef = p.useRef(false);
  const IRef = p.useRef(false);
  const [S, setS] = p.useState(false);
  const b = p.useCallback(
    (e) => {
      if (needStopPropagation) {
        if (e != null) {
          e.stopPropagation();
        }
      }
      if (!isDisable && content) {
        var t;
        var a;
        var r = !S;
        setS(r);
        var n = e
          ? {
              x: e.clientX,
              y: e.clientY,
            }
          : undefined;
        var { width = 0, height = 0 } =
          (t =
            (a = fRef.current) == null
              ? undefined
              : a.getBoundingClientRect()) != null
            ? t
            : {};
        if (onVisibleChange != null) {
          onVisibleChange(r, n, {
            width,
            height,
          });
        }
      }
    },
    [content, isDisable, needStopPropagation, onVisibleChange, S],
  );
  const C = p.useCallback(
    (e) => {
      var vRef_current = vRef.current;
      if (vRef_current && !vRef_current.contains(e.target) && S) {
        setS(false);
        if (onVisibleChange != null) {
          onVisibleChange(false);
        }
      }
    },
    [onVisibleChange, S],
  );
  const close = p.useCallback(() => {
    setS(false);
    if (onVisibleChange != null) {
      onVisibleChange(false);
    }
  }, [onVisibleChange]);
  const open = p.useCallback(() => {
    b();
  }, [b]);
  const N = p.useCallback(() => {
    if (onMouseEnter != null) {
      onMouseEnter();
    }
    if (isUseHover && !isDisable) {
      MRef.current = true;
      setTimeout(() => {
        if (!S && (MRef.current || IRef.current)) {
          open();
        }
      }, 200);
    }
  }, [isDisable, isUseHover, onMouseEnter, open, S]);
  const w = p.useCallback(() => {
    if (onMouseOut != null) {
      onMouseOut();
    }
    if (isUseHover && !isDisable) {
      MRef.current = false;
      setTimeout(() => {
        if (!(MRef.current || IRef.current || !S)) {
          close();
        }
      }, 200);
    }
  }, [isDisable, isUseHover, onMouseOut, close, S]);
  const A = p.useCallback(() => {
    if (isUseHover && !isDisable) {
      IRef.current = true;
      setTimeout(() => {
        if (!S && (MRef.current || IRef.current)) {
          open();
        }
      }, 200);
    }
  }, [isDisable, isUseHover, open, S]);
  const R = p.useCallback(() => {
    if (isUseHover && !isDisable) {
      IRef.current = false;
      setTimeout(() => {
        if (!(MRef.current || IRef.current || !S)) {
          close();
        }
      }, 200);
    }
  }, [isDisable, isUseHover, close, S]);
  p.useEffect(() => {
    document.addEventListener("mousedown", C);
    return () => {
      document.removeEventListener("mousedown", C);
    };
  }, [C]);
  p.useImperativeHandle(t, () => ({
    close,
    open,
  }));
  return s.jsxs("div", {
    className: _v(i3.container, containerClassName),
    ref: vRef,
    children: [
      s.jsx("div", {
        onClick: b,
        onMouseEnter: N,
        onMouseLeave: w,
        children,
      }),
      s.jsx("div", {
        ref: fRef,
        className: _v(i3.panel, contentClassName, {
          [i3.hide]: !S,
          [i3.panelWithBackdropFilter]: hasBackdropFilter,
        }),
        onMouseEnter: A,
        onMouseLeave: R,
        style: contentStyle,
        children: content,
      }),
    ],
  });
});
const i9 = require("SfX");
const i8 = require("hGN");
const i6 = require("cS");
const i7 = "active-DtrkGr";
const ae = require("xx");
const at = require("gY");
function useAi(e) {
  let t;
  let i;
  const {
    "aria-label": aria_label,
    className,
    min,
    max,
    step = 1,
    marks,
    onlyMarkValue,
    value,
    style,
    cssConfigs,
    onChange,
    onAfterChange,
    formatTooltip,
    triggerBar = false,
    isDisable = false,
    showValueTooltip = true,
    disableTooltipContent,
  } = e;
  const b = ae
    .A(marks)
    .map(Number)
    .sort((e, t) => e - t);
  const C = b.length > 0;
  const j = e8.A((e) => (Math.min(Math.max(min, e), max) - min) / (max - min));
  const x = j(value);
  const NRef = p.useRef(null);
  const [w, setW] = p.useState(x);
  const [R, T, k] = i9.A(false);
  const [z, D] = i8.A();
  const P = e8.A((e) => {
    var t;
    var i = (t = NRef.current) == null ? undefined : t.getBoundingClientRect();
    if (i) {
      return Math.max(0, Math.min((e.x - i.x) / i.width, 1));
    }
    return 0;
  });
  const E = e8.A((e) => {
    var t = (max - min) * e + min;
    if (onlyMarkValue && b.length) {
      var i = b[0];
      var a = Math.abs(b[0] - t);
      for (var r = 1; r < b.length; r++) {
        var s = Math.abs(b[r] - t);
        if (s < a) {
          a = s;
          i = b[r];
        }
      }
      return i;
    }
    var l = Math.floor((t - min) / step);
    var g = min + l * step;
    var d = g + step;
    if (t - g < d - t) {
      return g;
    }
    return Math.min(d, max);
  });
  const L = e8.A((e) => {
    if (!isDisable) {
      T(true);
      var t = P(e);
      setW(t);
      if (onChange != null) {
        onChange(E(t));
      }
    }
  });
  const W = e8.A((e) => {
    if (!isDisable && k()) {
      T(false);
      var t = P(e);
      setW(t);
      if (onAfterChange != null) {
        onAfterChange(E(t));
      }
    }
  });
  const F = e8.A((e) => {
    if (!isDisable && k()) {
      var t = P(e);
      setW(t);
      if (onChange != null) {
        onChange(E(t));
      }
    }
  });
  p.useEffect(() => {
    var NRef_current = NRef.current;
    document.addEventListener("mouseup", W);
    document.addEventListener("mousemove", F);
    if (NRef_current != null) {
      NRef_current.addEventListener("mousedown", L);
    }
    return () => {
      document.removeEventListener("mouseup", W);
      document.removeEventListener("mousemove", F);
      if (NRef_current != null) {
        NRef_current.removeEventListener("mousedown", L);
      }
    };
  }, [L, F, W]);
  const U = E(R || at.A(x) ? w : x);
  const Z = j(U);
  const O = formatTooltip ? formatTooltip(U) : "".concat(U);
  const G = b.map((e) => j(e));
  return s.jsx(t0.A, {
    content: disableTooltipContent,
    disabled: !isDisable,
    triggerProps: {
      popupAlign: {
        top: 8,
      },
    },
    children: s.jsx("div", {
      className: _v(className, "slider-zyWFmS", {
        "with-marks-ZBK5VQ": C,
      }),
      style,
      children: s.jsxs("div", {
        className: _v(
          "slider-wrapper-AKZBg9",
          cssConfigs == null || (t = cssConfigs.sliderWrapper) == null
            ? undefined
            : t.className,
        ),
        style:
          cssConfigs == null || (i = cssConfigs.sliderWrapper) == null
            ? undefined
            : i.style,
        ref: NRef,
        children: [
          s.jsxs("div", {
            className: _v("slider-road-KRgJkF", {
              [i7]: R,
              "slider-road-disable-IaF2mG": isDisable,
            }),
            children: [
              s.jsx("div", {
                className: "slider-bar-zv9OBo",
                style: {
                  right: `${(1 - Z) * 100}%`,
                },
              }),
              s.jsx(t0.A, {
                className: "trigger-w4Fqr1",
                content: O,
                popupVisible: !!showValueTooltip && (R || D),
                triggerProps: {
                  popupAlign: {
                    top: 4,
                  },
                },
                children: s.jsx("div", {
                  className: _v({
                    "slider-button-bar-vaBfnN": triggerBar,
                    "slider-button-brick-TmB8Xz": !triggerBar,
                  }),
                  role: "slider",
                  tabIndex: isDisable ? -1 : 0,
                  "aria-label": aria_label,
                  "aria-valuemin": min,
                  "aria-valuemax": max,
                  "aria-valuenow": U,
                  "aria-valuetext": O,
                  "aria-disabled": isDisable,
                  onKeyDown: (e) => {
                    if (!isDisable) {
                      var t = i6.W(
                        e.key,
                        U,
                        min,
                        max,
                        step,
                        onlyMarkValue ? b : undefined,
                      );
                      if (t !== undefined) {
                        e.preventDefault();
                        e.stopPropagation();
                        if (t !== U) {
                          if (onChange != null) {
                            onChange(t);
                          }
                          if (onAfterChange != null) {
                            onAfterChange(t);
                          }
                        }
                      }
                    }
                  },
                  ref: z,
                  style: {
                    right: `${(1 - Z) * 100}%`,
                  },
                }),
              }),
            ],
          }),
          G.map((e, t) =>
            s.jsx(
              "div",
              {
                className: _v("slider-dot-bg8MNy", {
                  [i7]: e <= Z,
                }),
                style: {
                  right: `${(1 - e) * 100}%`,
                },
              },
              t,
            ),
          ),
        ],
      }),
    }),
  });
}
function useAa(e) {
  const {
    referenceLevel,
    isActive,
    hideLabel,
    sliderInfo,
    onChange,
    onAfterValueChange,
    onUpdateActiveOption,
    onReferenceLevelVisibleChange,
  } = e;
  const h = p.useMemo(
    () => l.Ay.t("web_new_wimg2img_title_intensity", {}, "参考强度"),
    [],
  );
  const m = p.useMemo(
    () => ({
      popupAlign: {
        bottom: 8,
        top: 8,
      },
    }),
    [],
  );
  const v = p.useMemo(() => {
    if (hideLabel) {
      return s.jsx(t0.A, {
        disabled: isActive,
        content: h,
        position: "bottom",
        triggerProps: m,
        className: i2.tooltip,
        children: s.jsx("div", {
          className: i2.iconContainer,
          children: s.jsx(u.Da7, {
            className: _v(i2.icon, {
              [i2.active]: isActive,
            }),
          }),
        }),
      });
    }
    return s.jsxs("div", {
      className: _v(i2.interactArea, {
        [i2.active]: isActive,
      }),
      role: "button",
      tabIndex: 0,
      onKeyDown: c.q,
      "aria-expanded": isActive,
      onClick: onUpdateActiveOption,
      children: [
        s.jsx(u.Da7, {
          className: i2.paramIcon,
        }),
        s.jsx("span", {
          children: h,
        }),
      ],
    });
  }, [hideLabel, isActive, h, onUpdateActiveOption, m]);
  return s.jsx(i5, {
    containerClassName: i2.referenceLevelContainer,
    contentClassName: i2.referenceContent,
    onVisibleChange: onReferenceLevelVisibleChange,
    content: s.jsxs("div", {
      className: i2.sliderWrap,
      children: [
        s.jsx(useAi, {
          "aria-label": l.Ay.t(
            "web_new_wimg2img_title_intensity",
            {},
            "参考强度",
          ),
          max: sliderInfo.max,
          min: sliderInfo.min,
          step: sliderInfo.step,
          value: referenceLevel,
          onChange,
          triggerBar: true,
          className: i2.slider,
          onAfterChange: onAfterValueChange,
        }),
        s.jsx("span", {
          children: Math.round(referenceLevel),
        }),
      ],
    }),
    children: v,
  });
}
function useAr(e) {
  const {
    referenceLevel,
    sliderInfo,
    showCutoutEntry = false,
    onStartPaint,
    onStartMatting,
    showPaintEntry = false,
  } = e;
  const [g, setG] = p.useState(false);
  const h = p.useCallback(
    (t) => {
      var i;
      if (!(Array.isArray(t) || (i = e.onUpdateReferenceLevel) == null)) {
        i.call(e, t);
      }
    },
    [e],
  );
  const m = p.useCallback(
    (t) => {
      var i;
      if (!(Array.isArray(t) || (i = e.onAfterChange) == null)) {
        i.call(e, t);
      }
    },
    [e],
  );
  const v = p.useCallback((e) => {
    setG(e);
  }, []);
  const y = p.useCallback(() => {
    setG(true);
  }, []);
  const tooltip = p.useMemo(
    () => l.Ay.t("web_image_remove_bg_hovertip", {}, "Remove background"),
    [],
  );
  const M = p.useMemo(
    () => l.Ay.t("dreamina_image4_select_area", {}, "选定编辑区域"),
    [],
  );
  return s.jsxs("div", {
    className: "interact-container-iTCyxu",
    children: [
      showPaintEntry
        ? s.jsx("div", {
            className: "paint-entry-container-_IvfbM",
            children: s.jsxs("div", {
              role: "button",
              tabIndex: 0,
              onKeyDown: c.q,
              className: "paint-entry-rsxRBH",
              onClick: onStartPaint,
              children: [
                s.jsx(u.Ybi, {
                  size: 16,
                  className: "paint-icon-FzILtF",
                }),
                s.jsx("span", {
                  className: "paint-label-xKRvln",
                  children: M,
                }),
              ],
            }),
          })
        : null,
      showCutoutEntry
        ? s.jsx(i0, {
            icon: s.jsx(u.bWW, {
              size: 16,
              className: "entry-icon-uvzC9w",
            }),
            tooltip,
            onClick: onStartMatting,
          })
        : null,
      s.jsx("div", {
        className: "strength-NaSojl",
        children: s.jsx(useAa, {
          referenceLevel,
          isActive: g,
          hideLabel: true,
          sliderInfo,
          onAfterValueChange: m,
          onChange: h,
          onReferenceLevelVisibleChange: v,
          onUpdateActiveOption: y,
        }),
      }),
    ],
  });
}
const an = p.memo(function (e) {
  const { onSavePaint, onExitPaint, maskPaintStore } = e;
  const r = tx._(e, ["onSavePaint", "onExitPaint", "maskPaintStore"]);
  const n = p.useMemo(
    () => l.Ay.t("web_image_remove_bg_btn_done", {}, "Done"),
    [],
  );
  const o = p.useMemo(
    () =>
      s.jsx(u.bWN, {
        size: 16,
      }),
    [],
  );
  const c = p.useMemo(
    () =>
      s.jsx(i0, {
        icon: o,
        tooltip: "关闭",
        onClick: onExitPaint,
      }),
    [o, onExitPaint],
  );
  const g = p.useMemo(
    () =>
      s.jsx("div", {
        className: "button-wrap-BFkSIb",
        children: s.jsx(iq.A, {
          className: "confirm-button-jrOuMT",
          onClick: onSavePaint,
          children: n,
        }),
      }),
    [n, onSavePaint],
  );
  const d = p.useMemo(
    () => l.Ay.t("dreamina_image4_smart_edit_area", {}, "智能编辑区域"),
    [],
  );
  return s.jsxs(s.Fragment, {
    children: [
      s.jsx(i1, {
        name: d,
      }),
      s.jsx(
        iw,
        Y._(H._({}, r), {
          hiddenBoxSelection: false,
          leftPrefix: c,
          leftSuffix: g,
          hideFrameInteract: true,
          store: maskPaintStore,
          hiddenSelect: true,
          hiddenRecognition: true,
        }),
      ),
    ],
  });
});
const as = d.PA((e) => {
  var { mode } = e;
  var i = tx._(e, ["mode"]);
  switch (mode) {
    case "matting":
      return s.jsx(useI4, H._({}, i));
    case "paint":
      return s.jsx(an, H._({}, i));
    default:
      return s.jsx(useAr, H._({}, i));
  }
});
function ao(e) {
  let t = document.createElement("canvas");
  t.width = e.width;
  t.height = e.height;
  const i = t.getContext("2d");
  if (i != null) {
    i.putImageData(e, 0, 0);
  }
  const a = t.toDataURL("image/png");
  if (i != null) {
    i.clearRect(0, 0, t.width, t.height);
  }
  t = null;
  return a;
}
function ac(e) {
  return er._(function* () {
    const t = yield eX.y(e);
    let i = document.createElement("canvas");
    i.width = t.width;
    i.height = t.height;
    const a = i.getContext("2d");
    if (a != null) {
      a.drawImage(t, 0, 0, t.width, t.height, 0, 0, i.width, i.height);
    }
    const r = a == null ? undefined : a.getImageData(0, 0, i.width, i.height);
    if (a != null) {
      a.clearRect(0, 0, t.width, t.height);
    }
    i.remove();
    i = null;
    return r;
  })();
}
class al extends iE {
  recognize(e) {
    return er
      ._(function* () {
        if (this._ignoreRecognition || !e) {
          return {
            recognizeResult: f.Gj.Success,
          };
        }
        this._isCancelRecognize = false;
        let t;
        const { safetyCheckResp } = yield this.preRecognize(e);
        if (safetyCheckResp.stop) {
          return {
            recognizeResult:
              (t = safetyCheckResp.status) != null ? t : f.Gj.NetworkError,
          };
        }
        return {
          recognizeResult: f.Gj.Success,
        };
      })
      .call(this);
  }
  preRecognize(e) {
    return er
      ._(function* () {
        yield this.mutexLock.acquire();
        try {
          const t = yield this.getCacheKey(e);
          const i = this.getRecognizeCache(t);
          if (i) {
            return i;
          }
          const safetyCheckResp = yield this._safetyCheck(e);
          const r = {
            safetyCheckResp,
          };
          if (
            !(
              safetyCheckResp.stop &&
              safetyCheckResp.status === f.Gj.NetworkError
            )
          ) {
            this.setRecognizeCache(t, r);
          }
          return r;
        } finally {
          this.mutexLock.release();
        }
      })
      .call(this);
  }
  setIgnoreRecognition(e) {
    this._ignoreRecognition = e;
  }
  setFetchMaskCancelled(e) {
    this._isFetchMaskCancelled = e;
  }
  fetchSaliencyMask(e) {
    return er
      ._(function* () {
        let t;
        let i;
        const a = yield this._controlnetPreviewDataService.getSaliencySEG(
          {
            imageUriList: [e],
            mode: iR.L.Canvas,
          },
          {
            babi_param: ev.Wu(
              ev.OC({
                scenario: "image_video_generation",
                featureKey: "to_image_referenceimage",
                featureEntranceDetail: "".concat(
                  em.F(),
                  "-referenceimage-object_detection",
                ),
                editType: "canva",
                toolId: ey.M.Canva,
              }),
            ),
          },
        );
        if (this._isFetchMaskCancelled) {
          return {
            status: "cancelled",
            maskList: [],
          };
        }
        if (!a.ok) {
          if ([2046, 2047].includes(a.code)) {
            return {
              status: "empty",
              maskList: [],
            };
          }
          return {
            status: "failed",
            maskList: [],
          };
        }
        const a_value = a.value;
        const n =
          a_value == null || (i = a_value[0]) == null || (t = i.mask) == null
            ? undefined
            : t.url;
        yield tD.yt(n);
        return {
          status: "success",
          maskList: a_value,
        };
      })
      .call(this);
  }
  _safetyCheck(e) {
    return er
      ._(function* () {
        const t = yield this._algorithmDataService.requestAlgorithm(
          "benchmark_test_user_upload_image_input.image_face_ip",
          {
            params: {},
            fileList: [
              {
                fileUri: e,
              },
            ],
            options: {
              ipCheck: true,
            },
          },
          {
            babi_param: ev.Wu(
              ev.OC({
                scenario: "image_video_generation",
                featureKey: "aigc_to_image",
                featureEntranceDetail: "".concat(em.F(), "-algo_proxy"),
                editType: "canva",
                toolId: ey.M.Canva,
              }),
            ),
          },
        );
        if (this._isCancelRecognize) {
          return {
            stop: true,
            status: f.Gj.Cancelled,
          };
        }
        if (t.ok) {
          return {
            stop: false,
            status: null,
          };
        }
        return {
          stop: true,
          status:
            t.code === -2 || t.code === -1
              ? f.Gj.NetworkError
              : f.Gj.SafetyCheckError,
        };
      })
      .call(this);
  }
  constructor(e, t, i) {
    super(e);
    this._algorithmDataService = t;
    this._controlnetPreviewDataService = i;
    this._ignoreRecognition = false;
    this._isFetchMaskCancelled = false;
  }
}
al = en.Cg(
  [
    en.Qj(0, k._),
    en.Qj(1, ep.o),
    en.Qj(2, iT.Z),
    en.Sn("design:type", Function),
    en.Sn("design:paramtypes", [
      k._ === undefined ? Object : k._,
      ep.o === undefined ? Object : ep.o,
      typeof ControlnetPreviewDataService === "undefined"
        ? Object
        : ControlnetPreviewDataService,
    ]),
  ],
  al,
);
class au extends iU {
  get extra() {
    if (this.paintBoxSelectionPosition) {
      let e;
      const imageRatio =
        ((e = this.referenceImageStore) == null ? undefined : e.aspectRatio) ||
        "1:1";
      return {
        type: "box_selection",
        position: Y._(H._({}, this.paintBoxSelectionPosition), {
          imageRatio,
        }),
        isCutout: this.isCutout,
      };
    }
    return {
      type: "paint",
      isCutout: this.isCutout,
    };
  }
  updateBoxSelectionPosition(e) {
    this.paintBoxSelectionPosition = e;
  }
  updatePaintingMaskUrl(e) {
    this.paintMaskUrl = e;
  }
  resetPaintingData() {
    this.paintMaskUrl = undefined;
    this.paintBoxSelectionPosition = undefined;
    this.isCutout = false;
  }
  setIsCutout(e) {
    this.isCutout = e;
  }
  syncPaintMask() {
    if (this.paintMaskUrl) {
      const e = [
        {
          mask: {
            uri: "",
            url: this.paintMaskUrl,
          },
        },
      ];
      this.updateMaskList(e);
    }
  }
  constructor(e) {
    super();
    this.referenceImageStore = e;
    this.paintMaskUrl = undefined;
    this.isCutout = false;
    eM.Gn(this);
  }
}
en.Cg(
  [eM.sH, en.Sn("design:type", String)],
  au.prototype,
  "paintMaskUrl",
  undefined,
);
en.Cg(
  [
    eM.sH,
    en.Sn(
      "design:type",
      typeof BoxSelectionPosition === "undefined"
        ? Object
        : BoxSelectionPosition,
    ),
  ],
  au.prototype,
  "paintBoxSelectionPosition",
  undefined,
);
en.Cg([eM.sH], au.prototype, "isCutout", undefined);
en.Cg(
  [eM.EW, en.Sn("design:type", Object), en.Sn("design:paramtypes", [])],
  au.prototype,
  "extra",
  null,
);
en.Cg(
  [
    eM.XI.bound,
    en.Sn("design:type", Function),
    en.Sn("design:paramtypes", [
      typeof BoxSelectionPosition === "undefined"
        ? Object
        : BoxSelectionPosition,
    ]),
    en.Sn("design:returntype", undefined),
  ],
  au.prototype,
  "updateBoxSelectionPosition",
  null,
);
en.Cg(
  [
    eM.XI.bound,
    en.Sn("design:type", Function),
    en.Sn("design:paramtypes", [String]),
    en.Sn("design:returntype", undefined),
  ],
  au.prototype,
  "updatePaintingMaskUrl",
  null,
);
en.Cg(
  [
    eM.XI.bound,
    en.Sn("design:type", Function),
    en.Sn("design:paramtypes", []),
    en.Sn("design:returntype", undefined),
  ],
  au.prototype,
  "resetPaintingData",
  null,
);
en.Cg(
  [
    eM.XI.bound,
    en.Sn("design:type", Function),
    en.Sn("design:paramtypes", [Boolean]),
    en.Sn("design:returntype", undefined),
  ],
  au.prototype,
  "setIsCutout",
  null,
);
en.Cg(
  [
    eM.XI.bound,
    en.Sn("design:type", Function),
    en.Sn("design:paramtypes", []),
    en.Sn("design:returntype", undefined),
  ],
  au.prototype,
  "syncPaintMask",
  null,
);
class ag extends iZ {
  get isRecognized() {
    return this.originUri !== "";
  }
  initWithImagineParams(e, t) {
    let i;
    let a;
    if (
      ((a = e.model) == null ? undefined : a.abilityName) ===
      ez.DABlendAbilityName.ByteEdit
    ) {
      this.referenceLevel = e.model.strength
        ? Math.floor(e.model.strength * X.qG.max)
        : Math.round(X.qG.default);
      if (t) {
        this.setOriginUri(t);
      }
      this.setOriginUrl((i = e.model.source.imageUrl) != null ? i : "");
      this.processExtra(e.model.extra);
      this.processMask(e.model.mask);
    }
  }
  processExtra(e) {
    if (e) {
      const { type } = e;
      if (type === "paint") {
        return void this.maskPaintStore.updateBoxSelectionPosition(undefined);
      }
      if (e.position) {
        const i = this._convertPositionForRatioChange(e.position);
        this.maskPaintStore.updateBoxSelectionPosition(i);
      }
    }
  }
  processMask(e) {
    return er
      ._(function* () {
        if (e) {
          const { imageUrl, imageUri } = e;
          if (imageUrl) {
            if (!imageUri && imageUrl) {
              return void this.maskPaintStore.updatePaintingMaskUrl(imageUrl);
            }
            const [a, r, n] = tW(e6.C);
            const [s] = yield tE.R(imageUrl, [a, r, n, 127], tP.MR);
            if (s) {
              eM.h5(() => {
                this.maskPaintStore.updatePaintingMaskUrl(s);
              });
            }
          }
        }
      })
      .call(this);
  }
  getReferImageParams() {
    let e;
    let t;
    const i = super.getCommonParam();
    el.X3(this.originUri, "originUri is empty");
    el.X3(this.originUrl, "originUrl is empty");
    return H._(
      {
        model: {
          abilityName: ez.DABlendAbilityName.ByteEdit,
          strength: this.referenceLevel / X.qG.max,
          source: {
            imageUri: this.originUri,
            imageUrl: this.originUrl,
            width:
              (e = this._referenceImageStore.currentImage) == null
                ? undefined
                : e.width,
            height:
              (t = this._referenceImageStore.currentImage) == null
                ? undefined
                : t.height,
          },
          mask: this.maskPaintStore.paintMaskUrl
            ? {
                imageUri: "",
                imageUrl: this.maskPaintStore.paintMaskUrl,
              }
            : undefined,
          extra: this.maskPaintStore.extra,
        },
      },
      i,
    );
  }
  updateReferenceLevel(e) {
    this.referenceLevel = e;
  }
  reset() {
    super.reset();
    this.referenceLevel = Math.round(X.qG.default);
    this.maskPaintStore.resetPaintingData();
  }
  setIsCutout(e) {
    this.maskPaintStore.setIsCutout(e);
  }
  updateMode(e) {
    this.mode = e;
  }
  updatePaintModeInstance(e) {
    this.paintModeInstance = e;
  }
  _convertPositionForRatioChange(e) {
    const { x, y, width, height, imageRatio } = e;
    const aspectRatio = this.referenceImageStore.aspectRatio;
    const { containerSize } = this.referenceImageStore;
    const { currentImage } = this.referenceImageStore;
    if (!aspectRatio || !containerSize.width || !containerSize.height) {
      return {
        x,
        y,
        width,
        height,
      };
    }
    const l = this._parseRatio(imageRatio);
    const u = this._parseRatio(aspectRatio);
    if (Math.abs(l - u) < 0.001) {
      return {
        x,
        y,
        width,
        height,
      };
    }
    const g = this._calculateActualImageDisplaySize(
      currentImage,
      l,
      containerSize,
    );
    const d = this._calculateActualImageDisplaySize(
      currentImage,
      u,
      containerSize,
    );
    const h = d.width / g.width;
    const m = d.height / g.height;
    return {
      x: Math.round(x * h),
      y: Math.round(y * m),
      width: Math.round(width * h),
      height: Math.round(height * m),
    };
  }
  _parseRatio(e) {
    const t = e.split(":");
    if (t.length !== 2) {
      return 1;
    }
    const i = parseFloat(t[0]);
    const a = parseFloat(t[1]);
    if (i && a) {
      return i / a;
    }
    return 1;
  }
  _calculateFitSize(e, t) {
    if (e > t.width / t.height) {
      return {
        width: t.width,
        height: t.width / e,
      };
    }
    return {
      width: t.height * e,
      height: t.height,
    };
  }
  _calculateActualImageDisplaySize(e, t, i) {
    const a = this._calculateFitSize(t, i);
    if (!(e == null ? undefined : e.width) || !e.height) {
      return a;
    }
    const r = e.width / e.height;
    return this._calculateFitSize(r, a);
  }
  constructor(e) {
    super(e);
    this.referenceImageStore = e;
    this.mattingPaintStore = new iU();
    this.referenceLevel = X.qG.default;
    this.mode = "view";
    this.maskPaintStore = new au(e);
    eM.Gn(this);
  }
}
en.Cg([eM.sH], ag.prototype, "referenceLevel", undefined);
en.Cg([eM.sH, en.Sn("design:type", String)], ag.prototype, "mode", undefined);
en.Cg(
  [eM.EW, en.Sn("design:type", Boolean), en.Sn("design:paramtypes", [])],
  ag.prototype,
  "isRecognized",
  null,
);
en.Cg(
  [
    eM.XI.bound,
    en.Sn("design:type", Function),
    en.Sn("design:paramtypes", [
      typeof AbilityReferenceModalParams === "undefined"
        ? Object
        : AbilityReferenceModalParams,
      String,
    ]),
    en.Sn("design:returntype", undefined),
  ],
  ag.prototype,
  "initWithImagineParams",
  null,
);
en.Cg(
  [
    eM.XI.bound,
    en.Sn("design:type", Function),
    en.Sn("design:paramtypes", [
      typeof ImageAbilityByteEditExtra === "undefined"
        ? Object
        : ImageAbilityByteEditExtra,
    ]),
    en.Sn("design:returntype", undefined),
  ],
  ag.prototype,
  "processExtra",
  null,
);
en.Cg(
  [
    eM.XI.bound,
    en.Sn("design:type", Function),
    en.Sn("design:paramtypes", [
      typeof DreaminaImageInfo === "undefined" ? Object : DreaminaImageInfo,
    ]),
    en.Sn("design:returntype", Promise),
  ],
  ag.prototype,
  "processMask",
  null,
);
en.Cg(
  [
    eM.XI.bound,
    en.Sn("design:type", Function),
    en.Sn("design:paramtypes", [Number]),
    en.Sn("design:returntype", undefined),
  ],
  ag.prototype,
  "updateReferenceLevel",
  null,
);
en.Cg(
  [
    eM.XI.bound,
    en.Sn("design:type", Function),
    en.Sn("design:paramtypes", []),
    en.Sn("design:returntype", undefined),
  ],
  ag.prototype,
  "reset",
  null,
);
en.Cg(
  [
    eM.XI.bound,
    en.Sn("design:type", Function),
    en.Sn("design:paramtypes", [Boolean]),
    en.Sn("design:returntype", undefined),
  ],
  ag.prototype,
  "setIsCutout",
  null,
);
en.Cg(
  [
    eM.XI.bound,
    en.Sn("design:type", Function),
    en.Sn("design:paramtypes", [String]),
    en.Sn("design:returntype", undefined),
  ],
  ag.prototype,
  "updateMode",
  null,
);
en.Cg(
  [
    eM.XI.bound,
    en.Sn("design:type", Function),
    en.Sn("design:paramtypes", [
      typeof PaintMode === "undefined" ? Object : PaintMode,
    ]),
    en.Sn("design:returntype", undefined),
  ],
  ag.prototype,
  "updatePaintModeInstance",
  null,
);
const ad = require("oT");
const ah = require("ad1");
const am = require("RV6");
class ap {
  process() {
    return er
      ._(function* () {
        const e = this._paintModeInstance.generatePaintContent();
        const { moveX, moveY } = iW.e({
          currentMove: {
            moveX: this._store.mattingPaintStore.moveX,
            moveY: this._store.mattingPaintStore.moveY,
          },
          currentSize: {
            width: this._store.mattingPaintStore.paintWidth,
            height: this._store.mattingPaintStore.paintHeight,
          },
          targetSize: this._store.mattingPaintStore.actualPaintSize,
          imageSize: this._store.mattingPaintStore.rawImageSize,
          imageScale: this._store.mattingPaintStore.scale,
          imageRotate: this._store.mattingPaintStore.rotate,
        });
        const a = {
          imageMoveX: t4.g(moveX, 2),
          imageMoveY: t4.g(moveY, 2),
          scale: t4.g(this._store.mattingPaintStore.scale, 2),
          rotate: t4.g(this._store.mattingPaintStore.rotate, 2),
          paintWidth: this._store.mattingPaintStore.actualPaintSize.width,
          paintHeight: this._store.mattingPaintStore.actualPaintSize.height,
        };
        const [r] = yield (function (e, t) {
          const i =
            arguments.length > 2 && arguments[2] !== undefined
              ? arguments[2]
              : 1;
          return er._(function* () {
            const a = yield ac(e);
            const [, r] = yield am.t(t);
            const r_data = r.data;
            if (!(a == null ? undefined : a.data) || !r_data) {
              return ["", false];
            }
            let s = true;
            for (let o = 0; o < r_data.length; o += 4) {
              if (r_data[o + tP.HG] !== 255) {
                s = false;
              }
              const c = r_data[o + tP.HG] * i;
              a.data[o + tP.HG] = Math.ceil(c);
              if (
                r_data[o + tP.AG] === tP.MR[tP.AG] &&
                r_data[o + tP.tw] === tP.MR[tP.tw] &&
                r_data[o + tP.A4] === tP.MR[tP.A4]
              ) {
                a.data[o + tP.AG] = tP.m1[tP.AG];
                a.data[o + tP.tw] = tP.m1[tP.tw];
                a.data[o + tP.A4] = tP.m1[tP.A4];
              }
            }
            return [ao(a), s];
          })();
        })(this._store.mattingPaintStore.rawImageUrl, e, 1 / e6.p);
        if (this._isAborted) {
          return iX.YQ();
        }
        const n = yield this._getTransformedImageBase64(
          Y._(H._({}, a), {
            imageUrl: r,
          }),
          "rgba(255, 255, 255, 255)",
        );
        if (this._isAborted) {
          return iX.YQ();
        }
        const s = this._uploadMaskImage(n);
        if (this._isAborted) {
          return iX.YQ();
        }
        return s;
      })
      .call(this);
  }
  abort() {
    this._isAborted = true;
  }
  _uploadMaskImage(e) {
    return er
      ._(function* () {
        const t = ad.G(e);
        const file = ah.t(t);
        const a = yield this._dreaminaUploadService.uploadImage({
          file,
        });
        if (!a.ok) {
          return a;
        }
        const { uri, height, width } = a.value;
        return eg.TZ({
          url: URL.createObjectURL(file),
          width,
          height,
          uri,
        });
      })
      .call(this);
  }
  _getPaintImageSize(e) {
    const { paintWidth, paintHeight, imageWidth, imageHeight } = e;
    const n = paintWidth / paintHeight;
    const s = imageWidth / imageHeight;
    if (s === n) {
      return {
        scale: paintWidth / imageWidth,
        width: Math.round(paintWidth),
        height: Math.round(paintHeight),
      };
    }
    if (s > n) {
      return {
        scale: paintWidth / imageWidth,
        width: Math.round(paintWidth),
        height: Math.round(paintWidth / s),
      };
    }
    return {
      scale: tI(paintHeight / imageHeight, 1),
      width: Math.round(tI(paintHeight * s, 0)),
      height: Math.round(tI(paintHeight, 0)),
    };
  }
  _getTransformedImageBase64(e, t) {
    return er
      ._(function* () {
        const {
          imageUrl,
          paintWidth,
          paintHeight,
          imageMoveX,
          imageMoveY,
          scale,
          rotate,
        } = e;
        let l = document.createElement("canvas");
        l.width = paintWidth;
        l.height = paintHeight;
        const u = l.getContext("2d");
        if (!u) {
          return Promise.resolve("");
        }
        u.clearRect(0, 0, l.width, l.height);
        u.fillStyle = t;
        u.fillRect(0, 0, l.width, l.height);
        u.translate(imageMoveX, imageMoveY);
        u.rotate((Math.PI / 180) * rotate);
        const g = document.createElement("img");
        g.src = C.m(imageUrl, null, {
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
            "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1-lZwWFJqQmtXRXBzWTNrNWFtSXlO$EJh$np$d1R*Z*tiR0p0$m5sWld*SjJZMms1-0dKd$$te*pi$FZvWWtNNWJWcFhSakJr$0$wc1kzaz$jR0p-%m01-$$6Rn$Xb*Mx-kdOdFJqQmlNM*wy$1RJNWRHTkhPWFZh$np$d1kzaz$l$nB-$214amJWWjFX$EpWZEd*WE1Xa*FNbF-wWWxjNWExbFhkM1pa$jBwd1lrZHNNR0Z-$m5wT%1rbzFaRWRWZEZwWF$uQmtRemww$1Zo%01HRlhO$z$N$0$KN$lqSk9iR016$*5aamF%$XdZekpHZ$ZvelZubz0",
        });
        g.crossOrigin = "anonymous";
        const d = () => {
          if (l) {
            l.width = 0;
            l.height = 0;
            l = null;
          }
        };
        return new Promise((resolve, reject) => {
          g.onload = () => {
            var t;
            var i = this._getPaintImageSize({
              paintWidth,
              paintHeight,
              imageWidth: g.width,
              imageHeight: g.height,
            });
            var n = i.width * scale;
            var s = i.height * scale;
            if (u != null) {
              u.drawImage(g, 0, 0, g.width, g.height, -n / 2, -s / 2, n, s);
            }
            if (u != null) {
              u.setTransform(1, 0, 0, 1, 0, 0);
            }
            resolve(
              (t = l == null ? undefined : l.toDataURL()) != null ? t : "",
            );
            d();
          };
          g.onerror = (e) => {
            reject(e);
            d();
          };
        });
      })
      .call(this);
  }
  constructor(e, t, i) {
    this._paintModeInstance = e;
    this._store = t;
    this._dreaminaUploadService = i;
    this._isAborted = false;
  }
}
ap = en.Cg(
  [
    en.Qj(2, eH.H),
    en.Sn("design:type", Function),
    en.Sn("design:paramtypes", [
      typeof PaintMode === "undefined" ? Object : PaintMode,
      typeof ByteEditStore === "undefined" ? Object : ByteEditStore,
      eH.H === undefined ? Object : eH.H,
    ]),
  ],
  ap,
);
class av extends iA {
  handleAbilityChange(e) {
    return er
      ._(function* () {
        let t;
        let i;
        let a;
        const r = (
          (a = this._cachedImageData) == null || (i = a.postEdit) == null
            ? undefined
            : i.currentImage
        )
          ? Y._(H._({}, this._cachedImageData.postEdit.currentImage), {
              uri:
                (t = this._cachedImageData.postEdit.currentImage.uri) != null
                  ? t
                  : "",
            })
          : e;
        const n = yield this.recognizer.recognize(r.uri);
        if (r.uri) {
          this.store.setOriginUri(r.uri);
        } else {
          this._updateImageInfoForAsyncImageUpload();
        }
        this.store.setOriginUrl(r.url);
        return n.recognizeResult;
      })
      .call(this);
  }
  beforeLeave() {
    this._backupPostEditImageData();
    this._restoreOriginImageData();
    return Promise.resolve();
  }
  afterSelect() {
    this._backupOriginImageData();
    this._restorePostEditImageData();
  }
  postProcess(e) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(H._({}, e));
      }, 0);
    });
  }
  onSave() {
    if (this.store.mode === "paint") {
      this._savePainting();
    }
  }
  _restoreOriginImageData() {
    let e;
    const { imageUploadPromise, currentImage } =
      (e = this._cachedImageData.origin) != null ? e : {};
    if (imageUploadPromise) {
      this._referenceImageStore.setImageUploadPromise(imageUploadPromise);
    }
    if (currentImage) {
      this._referenceImageStore.setCurrentImage(currentImage);
    }
  }
  _restorePostEditImageData() {
    let e;
    const { imageUploadPromise, currentImage } =
      (e = this._cachedImageData.postEdit) != null ? e : {};
    if (imageUploadPromise) {
      this._referenceImageStore.setImageUploadPromise(imageUploadPromise);
    }
    if (currentImage) {
      this._referenceImageStore.setCurrentImage(currentImage);
    }
  }
  _backupOriginImageData() {
    let e;
    let t;
    this._cachedImageData.origin = {
      imageUploadPromise: this._referenceImageStore.imageUploadPromise,
      currentImage: this._referenceImageStore.currentImage,
    };
    if (
      !(
        ((e = this._referenceImageStore.currentImage) == null
          ? undefined
          : e.uri) || (t = this._referenceImageStore.imageUploadPromise) == null
      )
    ) {
      t.then((e) => {
        var t;
        if (
          e &&
          ((t = this._cachedImageData.origin) == null
            ? undefined
            : t.currentImage)
        ) {
          this._cachedImageData.origin.currentImage = Y._(
            H._({}, this._cachedImageData.origin.currentImage),
            {
              uri: e,
            },
          );
        }
      });
    }
  }
  _backupPostEditImageData() {
    this._cachedImageData.postEdit = {
      imageUploadPromise: this._referenceImageStore.imageUploadPromise,
      currentImage: this._referenceImageStore.currentImage,
    };
  }
  _fetchMaskListWithFallback() {
    return er
      ._(function* () {
        const e = yield this.recognizer.fetchSaliencyMask(this.store.originUri);
        if (e.status === "empty" && !e.maskList.length) {
          const { width, height } = yield eX.y(this.store.originUrl);
          return {
            maskList: [
              {
                mask: {
                  url: (function () {
                    const e =
                      arguments.length > 0 && arguments[0] !== undefined
                        ? arguments[0]
                        : 1;
                    const t =
                      arguments.length > 1 && arguments[1] !== undefined
                        ? arguments[1]
                        : 1;
                    const i = document.createElement("canvas");
                    i.width = e;
                    i.height = t;
                    const a = i.getContext("2d");
                    if (!a) {
                      return "";
                    }
                    const r = a.createImageData(e, t);
                    for (let { data } = r, s = 0; s < data.length; s += 4) {
                      data[s + tP.AG] = 0;
                      data[s + tP.tw] = 0;
                      data[s + tP.A4] = 0;
                      data[s + tP.HG] = 0;
                    }
                    a.putImageData(r, 0, 0);
                    const o = i.toDataURL("image/png");
                    a.clearRect(0, 0, e, t);
                    i.width = 0;
                    i.height = 0;
                    i.remove();
                    return o;
                  })(width, height),
                  uri: "",
                },
              },
            ],
            status: "success",
          };
        }
        return e;
      })
      .call(this);
  }
  _transformMask(e) {
    return Promise.all(
      e.map((e) => {
        var { mask } = e;
        return er._(function* () {
          const { url, uri } = mask;
          return {
            mask: {
              uri,
              url: yield er._(function* () {
                const t = yield ac(url);
                if (!(t == null ? undefined : t.data)) {
                  return "";
                }
                const [i, a, r] = tW(e6.C);
                const n = new ImageData(t.width, t.height);
                const n_data = n.data;
                for (let o = 0; o < t.data.length; o += 4) {
                  const c = t.data[o];
                  const l = t.data[o + 1];
                  const u = t.data[o + 2];
                  const g = t.data[o + 3];
                  if (c === 0 && l === 0 && u === 0 && g === 0) {
                    n_data[o] = 0;
                    n_data[o + 1] = 0;
                    n_data[o + 2] = 0;
                    n_data[o + 3] = 0;
                  } else {
                    n_data[o] = i;
                    n_data[o + 1] = a;
                    n_data[o + 2] = r;
                    const d = e6.p * g;
                    n_data[o + 3] = d;
                  }
                }
                return ao(n);
              })(),
            },
          };
        })();
      }),
    );
  }
  _getImageContainerPosition() {
    let e;
    let t;
    return (
      ((e =
        (t = document.querySelector(
          "#".concat(this._referenceImageStore.imageContainerId),
        )) == null
          ? undefined
          : t.getBoundingClientRect().top) != null
        ? e
        : 0) + 20
    );
  }
  _reportReferenceLevel() {
    const e = this._containerService.createInstance(eN.f);
    e.setParams({
      action: "adjust_reference_level",
      referenceSet: this.abilityType,
    });
    e.report();
  }
  _reportPopupClickAction(e) {
    const t = this._containerService.createInstance(eN.f);
    t.setParams({
      action: e,
      referenceSet: this.abilityType,
    });
    t.report();
  }
  _reportIdentificationStatus(e) {
    const t = {
      success: f.Gj.Success,
      empty: f.Gj.Success,
      failed: f.Gj.Failed,
      cancelled: f.Gj.Cancelled,
    };
    const i = es.C(t[e]);
    const a = this._containerService.createInstance(eo.W);
    a.setParams({
      status: i,
      type: this.abilityType,
      generateType: ec.ce.Blend,
      failReason: i === "fail" ? e : undefined,
    });
    a.report();
  }
  _createInteractComponent() {
    return d.PA(() => {
      var e;
      return s.jsx(as, {
        mattingPaintStore: this.store.mattingPaintStore,
        maskPaintStore: this.store.maskPaintStore,
        mode: this.store.mode,
        referenceLevel: this.store.referenceLevel,
        sliderInfo: X.qG,
        onStartMatting: this._startMatting,
        onSaveMatting: this._saveMatting,
        onExitMatting: this._exitMatting,
        onStartPaint: this._startPainting,
        onSavePaint: this._savePainting,
        onExitPaint: this._exitPainting,
        onUpdateReferenceLevel: this._updateReferenceLevel,
        paintDependency: this._paintDependency,
        referenceImageStore: this._referenceImageStore,
        showCutoutEntry: this._enableCutout,
        showPaintEntry:
          (e = this._referenceImageStore.uiConfig) == null
            ? undefined
            : e.showByteEditPaintEntry,
      });
    });
  }
  _createReferenceImageComponent() {
    return d.PA((e) => {
      var { image } = e;
      var i = p.useCallback((e) => {
        this._updateGraphicEditor(e);
      }, []);
      var a = p.useCallback((e) => {
        this.store.updatePaintModeInstance(e);
        this._updatePaintModeInstance(e);
        this._updateGuideVisibility();
      }, []);
      var r = p.useCallback(() => {
        this._updateGraphicEditor(null);
      }, []);
      p.useEffect(
        () => () => {
          this._exitPainting();
          this._updateGraphicEditor(null);
          this._updatePaintModeInstance(null);
          this.store.mattingPaintStore.updatePaintScale(-1);
          this.store.maskPaintStore.updatePaintScale(-1);
          e9.u.reset();
          e9.w.reset();
        },
        [],
      );
      if (this.store.mode === "view") {
        return s.jsx(
          iK,
          H._(
            {
              store: this.store,
            },
            e,
          ),
        );
      }
      return s.jsx(iY, {
        mode: this.store.mode,
        image,
        abilityType: this.abilityType,
        referenceImageStore: this._referenceImageStore,
        store: this.store,
        customWidth: this._referenceImageStore.customWidth,
        customHeight: this._referenceImageStore.customHeight,
        onEditorCreated: i,
        onPaintInstanceCreated: a,
        onEditorDestroy: r,
      });
    });
  }
  _updatePaintModeInstance(e) {
    this._paintDependency.paintInstance = e;
    if (this.store.mode === "paint") {
      let t;
      const i = this.store.maskPaintStore.paintBoxSelectionPosition;
      if (i) {
        if ((t = this.store.paintModeInstance) != null) {
          t.getModel().setSelection({
            startX: i.x,
            startY: i.y,
            endX: i.x + i.width,
            endY: i.y + i.height,
          });
        }
      }
    }
  }
  _updateGraphicEditor(e) {
    this._paintDependency.editor = e;
  }
  _warn(e) {
    const t = this._getImageContainerPosition();
    eh.l.warning({
      content: l.Ay.t(e),
      position: "top",
      style: {
        position: "relative",
        top: "".concat(t, "px"),
      },
    });
  }
  _updateGuideVisibility() {
    if (this.store.mode !== "paint") {
      let e;
      if ((e = this._paintDependency.paintInstance) != null) {
        e.hideBoxSelectGuide();
      }
      return;
    }
    if (this._paintDependency.paintInstance) {
      if (!this.store.maskPaintStore.paintMaskUrl) {
        this._paintDependency.paintInstance.showBoxSelectGuide();
        setTimeout(() => {
          var e;
          if ((e = this._paintDependency.paintInstance) != null) {
            e.hideBoxSelectGuide();
          }
        }, 3000);
        return;
      }
      this._paintDependency.paintInstance.hideBoxSelectGuide();
    }
  }
  constructor(e, t, i) {
    var a;
    super();
    a = this;
    this._referenceImageStore = e;
    this._containerService = t;
    this._configurationService = i;
    this.name = l.Ay.t("web_reference_element_smart", {}, "智能参考");
    this.abilityType = f.gP.ByteEdit;
    this.interactComponent = this._createInteractComponent();
    this.referenceImageComponent = this._createReferenceImageComponent();
    this._paintDependency = {
      editor: null,
      paintInstance: null,
    };
    this._dreaminaHanging = new eR();
    this._cachedImageData = {};
    this._enableCutout =
      this._configurationService.abTestManager.getBooleanAbTestValue(
        iB.ob.EnableByteEditCutout,
      );
    this._updateReferenceLevel = (e) => {
      this.store.updateReferenceLevel(e);
      this._reportReferenceLevel();
    };
    this._updateImageInfoForAsyncImageUpload = () => {
      var e;
      var t;
      if (
        !(
          ((e = this._referenceImageStore.currentImage) != null && e.uri) ||
          (t = this._referenceImageStore.imageUploadPromise) == null
        )
      ) {
        t.then((e) => {
          var t;
          if (e) {
            if (
              (t = this._cachedImageData.origin) == null
                ? undefined
                : t.currentImage
            ) {
              this._cachedImageData.origin.currentImage = Y._(
                H._({}, this._cachedImageData.origin.currentImage),
                {
                  uri: e,
                },
              );
            }
            if (!this.store.originUri) {
              this.store.setOriginUri(e);
            }
          }
        });
      }
    };
    this._saveMatting = () =>
      er._(function* () {
        const e = a._containerService.createInstance(
          ap,
          a.store.paintModeInstance,
          a.store,
        );
        const t = e.process();
        const i = new Promise((resolve) => {
          t.then((t) => {
            resolve(t.ok ? t.value.uri : undefined);
          });
        });
        const r = a._getImageContainerPosition();
        a._dreaminaHanging.show(
          s.jsx(eT, {
            style: {
              top: "".concat(r, "px"),
            },
            content: s.jsx(ee.w, {
              size: 16,
            }),
            onCancel: () => {
              e.abort();
              a._dreaminaHanging.hide();
            },
          }),
        );
        a._referenceImageStore.setImageUploadPromise(i);
        const n = yield t;
        if (!n.ok) {
          if (n.code === iX.gn.Cancelled) {
            return;
          }
          a._dreaminaHanging.hide();
          const o = l.Ay.t(
            "web_image_remove_bg_failed_toast",
            {},
            "Couldn't remove background. Try again.",
          );
          a._warn(o);
          return;
        }
        a.store.maskPaintStore.resetPaintingData();
        const n_value = n.value;
        a._dreaminaHanging.hide();
        a._referenceImageStore.setCurrentImage(n_value);
        const { uri, url } = n_value;
        a.store.setOriginUri(uri != null ? uri : "");
        a.store.setOriginUrl(url);
        a.store.setIsCutout(true);
        a._exitPainting();
        a.recognizer.setIgnoreRecognition(true);
        a._reportPopupClickAction("confirm_cutout");
      })();
    this._exitMatting = () => {
      this.store.updateMode("view");
      this.store.mattingPaintStore.reset();
      e9.u.reset();
      e9.w.reset();
    };
    this._startMatting = () =>
      er._(function* () {
        if (a._enableCutout) {
          a._reportPopupClickAction("click_cutout");
          a.recognizer.setFetchMaskCancelled(false);
          const e = a._getImageContainerPosition();
          a._dreaminaHanging.show(
            s.jsx(eT, {
              style: {
                top: "".concat(e, "px"),
              },
              content: s.jsxs(s.Fragment, {
                children: [
                  s.jsx(ee.w, {
                    size: 16,
                  }),
                  s.jsx("span", {
                    style: {
                      paddingLeft: "8px",
                    },
                    children: l.Ay.t(
                      "web_recognizing_object",
                      {},
                      "Recognizing object...",
                    ),
                  }),
                ],
              }),
              onCancel: () => {
                a._dreaminaHanging.hide();
                a.recognizer.setFetchMaskCancelled(true);
              },
            }),
          );
          yield a._referenceImageStore.imageUploadPromise;
          const t = yield a._fetchMaskListWithFallback();
          a._reportIdentificationStatus(t.status);
          if (t.status !== "cancelled") {
            if (t.status === "failed") {
              a._dreaminaHanging.hide();
              const i = l.Ay.t(
                "web_image_remove_bg_failed_toast",
                {},
                "Couldn't remove background. Try again.",
              );
              a._warn(i);
              return;
            }
            const r = yield a._transformMask(t.maskList);
            e9.u.reset();
            e9.w.reset();
            a.store.mattingPaintStore.reset();
            a.store.mattingPaintStore.updateMaskList(r);
            a.store.updateMode("matting");
            a._updateGuideVisibility();
            a._dreaminaHanging.hide();
          }
        }
      })();
    this._startPainting = () => {
      this.store.maskPaintStore.syncPaintMask();
      this.store.updateMode("paint");
      this._updateGuideVisibility();
      this._reportPopupClickAction("click_box_select");
    };
    this._savePainting = () => {
      var e;
      var t;
      var i;
      var a =
        (t = this._paintDependency.paintInstance) == null
          ? undefined
          : t.generatePaintContent();
      if (a) {
        this.store.maskPaintStore.updatePaintingMaskUrl(a);
        this.store.updateMode("view");
        this.store.maskPaintStore.reset();
        var { currentSelection } =
          (e =
            (i = this.store.paintModeInstance) == null
              ? undefined
              : i.getModel()) != null
            ? e
            : {};
        if (currentSelection) {
          var n = iH.w(currentSelection);
          this.store.maskPaintStore.updateBoxSelectionPosition(n);
        } else {
          this.store.maskPaintStore.updateBoxSelectionPosition(undefined);
        }
        e9.u.reset();
        e9.w.reset();
        this._reportPopupClickAction("confirm_box_select");
      }
    };
    this._exitPainting = () => {
      this.store.updateMode("view");
      this.store.maskPaintStore.reset();
      e9.u.reset();
      e9.w.reset();
    };
    this.store = this._containerService.createInstance(
      ag,
      this._referenceImageStore,
    );
    this.recognizer = this._containerService.createInstance(al);
    this.supportsAsyncFlow = true;
    this.recognizer.setIgnoreRecognition(true);
  }
}
en.Cg(
  [eM.sH, en.Sn("design:type", Object)],
  av.prototype,
  "_paintDependency",
  undefined,
);
en.Cg(
  [
    eM.XI.bound,
    en.Sn("design:type", Function),
    en.Sn("design:paramtypes", [Object]),
    en.Sn("design:returntype", undefined),
  ],
  av.prototype,
  "_updatePaintModeInstance",
  null,
);
en.Cg(
  [
    eM.XI.bound,
    en.Sn("design:type", Function),
    en.Sn("design:paramtypes", [Object]),
    en.Sn("design:returntype", undefined),
  ],
  av.prototype,
  "_updateGraphicEditor",
  null,
);
av = en.Cg(
  [
    en.Qj(1, k._),
    en.Qj(2, i$.a),
    en.Sn("design:type", Function),
    en.Sn("design:paramtypes", [
      typeof ReferenceImageStore === "undefined" ? Object : ReferenceImageStore,
      k._ === undefined ? Object : k._,
      i$.a === undefined ? Object : i$.a,
    ]),
  ],
  av,
);
const ay = require("VH");
const af = "clip-parent-u9wqVz";
const aM = "clip-content-tPSQvu";
const aI = "text-JUJbOM";
const aS = "image-container-E_1hJZ";
const a_ = {
  [f.gP.ControlNetCanny]: "web_image_ref_option_outline",
  [f.gP.ControlNetDepth]: "web_image_ref_option_depth",
  [f.gP.ControlNetPose]: "web_image_ref_option_posture",
  [f.gP.IpKeep]: "",
  [f.gP.BgPaint]: "",
  [f.gP.FaceGan]: "",
  [f.gP.Unknown]: "",
  [f.gP.ControlNet]: "",
  [f.gP.StyleReference]: "",
  [f.gP.ByteEdit]: "",
  [f.gP.StyleCode]: "",
  [f.gP.T2I]: "",
  [f.gP.I2I]: "",
};
const ab = {
  [f.gP.ControlNetCanny]: "Outline",
  [f.gP.ControlNetDepth]: "Depth",
  [f.gP.ControlNetPose]: "Posture",
  [f.gP.IpKeep]: "",
  [f.gP.BgPaint]: "",
  [f.gP.FaceGan]: "",
  [f.gP.Unknown]: "",
  [f.gP.ControlNet]: "",
  [f.gP.StyleReference]: "",
  [f.gP.ByteEdit]: "",
  [f.gP.StyleCode]: "",
  [f.gP.T2I]: "",
  [f.gP.I2I]: "",
};
function useAC(e) {
  const {
    ratio,
    image,
    fitMode,
    previewUrl,
    abilityType,
    style = {},
    className,
  } = e;
  const [u, setU] = p.useState();
  const [d, setD] = p.useState(ratio);
  p.useLayoutEffect(() => {
    if (fitMode === tS.j.AdaptToCanvas) {
      setU(ratio);
      setD(1);
    } else {
      setU(1);
      setD(ratio);
    }
  }, [fitMode, ratio]);
  const mRef = p.useRef(null);
  const [v, setV] = p.useState(null);
  p.useLayoutEffect(() => {
    if (mRef.current) {
      if (fitMode === tS.j.AdaptToCanvas) {
        setV({
          width: "100%",
          height: "100%",
        });
      } else {
        setV({
          width: "".concat(mRef.current.offsetWidth, "px"),
          height: "".concat(mRef.current.offsetHeight, "px"),
        });
      }
    }
  }, [fitMode]);
  const imageFillMode = p.useMemo(() => {
    if (fitMode === tS.j.AdaptToCanvas) {
      return "fit";
    }
    return "crop";
  }, [fitMode]);
  return s.jsxs("div", {
    className: "controlNetImages-qiCIH3",
    children: [
      s.jsxs("div", {
        ref: mRef,
        className: _v(af, className),
        style,
        children: [
          s.jsx("span", {
            className: aI,
            children: l.Ay.t("web_new_function_original", {}, "原图"),
          }),
          s.jsx("div", {
            className: aM,
            style: {
              aspectRatio: d,
            },
            children: s.jsx("div", {
              className: aS,
              style: {
                width: v == null ? undefined : v.width,
                height: v == null ? undefined : v.height,
                visibility: v ? "visible" : "hidden",
              },
              children:
                !!u &&
                s.jsx(V, {
                  imageUrl: image.url,
                  imageSize: image,
                  customRatio: ratio,
                  containerRatio: 1,
                  imageFillMode,
                }),
            }),
          }),
        ],
      }),
      s.jsxs("div", {
        className: _v(af, className),
        style,
        children: [
          s.jsx("span", {
            className: aI,
            children: l.Ay.t(a_[abilityType], {}, ab[abilityType]),
          }),
          s.jsx("div", {
            className: aM,
            style: {
              aspectRatio: d,
            },
            children: s.jsx("div", {
              className: aS,
              style: {
                width: v == null ? undefined : v.width,
                height: v == null ? undefined : v.height,
                visibility: v ? "visible" : "hidden",
              },
              children:
                !!u &&
                s.jsx(V, {
                  imageUrl: previewUrl,
                  imageSize: image,
                  customRatio: ratio,
                  containerRatio: 1,
                  imageFillMode,
                }),
            }),
          }),
        ],
      }),
    ],
  });
}
const aj = "fit-mode-option-fPoUAJ";
const ax = "active-WcJLfP";
const aN = {
  [tS.j.AdaptToCanvas]: "web_canvas_adjust_fit",
  [tS.j.CenterCrop]: "web_canvas_adjust_fill",
};
const aw = {
  [tS.j.AdaptToCanvas]: "Fit & center",
  [tS.j.CenterCrop]: "Fill & crop",
};
function useAA(e) {
  const {
    fitMode,
    isActive,
    onChangeFitMode,
    onVisibleChange,
    onWarningTipVisible,
  } = e;
  const [o, setO] = p.useState(false);
  const dRef = p.useRef(null);
  const h = p.useCallback(
    (e) => {
      setO(e);
      onVisibleChange(e);
    },
    [onVisibleChange],
  );
  const m = p.useCallback(
    (e) => {
      var t;
      onChangeFitMode(e);
      if ((t = dRef.current) != null) {
        t.close();
      }
    },
    [onChangeFitMode],
  );
  return s.jsx(i5, {
    contentClassName: "fit-mode-container-m8vsCg",
    onVisibleChange: h,
    ref: dRef,
    content: s.jsxs(s.Fragment, {
      children: [
        s.jsx("div", {
          className: _v(aj, {
            [ax]: fitMode === tS.j.CenterCrop,
          }),
          role: "button",
          tabIndex: 0,
          onKeyDown: c.q,
          "aria-pressed": fitMode === tS.j.CenterCrop,
          onClick: () => m(tS.j.CenterCrop),
          children: l.Ay.t("web_canvas_adjust_fill", {}, "居中裁切"),
        }),
        s.jsxs("div", {
          className: _v(aj, "adjust-mode-Fvwa8w", {
            [ax]: fitMode === tS.j.AdaptToCanvas,
          }),
          role: "button",
          tabIndex: 0,
          onKeyDown: c.q,
          "aria-pressed": fitMode === tS.j.AdaptToCanvas,
          onClick: () => m(tS.j.AdaptToCanvas),
          children: [
            l.Ay.t("web_canvas_adjust_fit", {}, "适应画布"),
            s.jsx(t0.A, {
              className: "trigger-KkoMqW",
              content: l.Ay.t(
                "web_new_adapt_the_canva",
                {},
                "选择适应画布，我们会在空白区域进行补色处理",
              ),
              onVisibleChange: onWarningTipVisible,
              children: s.jsx(u.G_L, {
                className: "help-icon-Jk6qJ4",
              }),
            }),
          ],
        }),
      ],
    }),
    children: s.jsxs("div", {
      className: _v("interact-area-hcRVJ3", {
        [ax]: isActive,
      }),
      children: [
        s.jsx("span", {
          children: l.Ay.t(aN[fitMode], {}, aw[fitMode]),
        }),
        s.jsx(u.rIS, {
          className: _v("arrow-icon-s0qUuE", {
            [ax]: o,
          }),
        }),
      ],
    }),
  });
}
function useAR(e) {
  const { referenceLevel, fitMode, name } = e;
  const [r, setR] = p.useState("");
  const o =
    name === f.gP.ControlNetCanny ||
    name === f.gP.ControlNetDepth ||
    name === f.gP.ControlNetPose;
  const c = p.useCallback(
    (t) => {
      var i;
      if (!(Array.isArray(t) || (i = e.onUpdateReferenceLevel) == null)) {
        i.call(e, t);
      }
    },
    [e],
  );
  const l = p.useCallback(
    (t) => {
      var i;
      if (!(Array.isArray(t) || (i = e.onAfterChange) == null)) {
        i.call(e, t);
      }
    },
    [e],
  );
  const u = p.useCallback((e) => {
    if (e) {
      setR("adjust_reference_level");
    } else {
      setR("");
    }
  }, []);
  const g = p.useCallback((e) => {
    if (e) {
      setR("select_canvas_mode");
    } else {
      setR("");
    }
  }, []);
  const d = p.useCallback(() => {
    setR("adjust_reference_level");
  }, []);
  const onWarningTipVisible = p.useCallback((e) => {}, [o]);
  const onChangeFitMode = p.useCallback(
    (t) => {
      var i;
      if ((i = e.onUpdateFitMode) != null) {
        i.call(e, t);
      }
    },
    [e],
  );
  return s.jsxs("div", {
    className: "control-net-interact-okXlMW",
    children: [
      s.jsx(useAa, {
        referenceLevel,
        sliderInfo: {
          min: X.u4.min,
          max: X.u4.max,
          step: X.u4.step,
        },
        isActive: r === "adjust_reference_level",
        onChange: c,
        onAfterValueChange: l,
        onUpdateActiveOption: d,
        onReferenceLevelVisibleChange: u,
      }),
      s.jsx("div", {
        className: "divider-SNe16t",
      }),
      s.jsx(useAA, {
        fitMode,
        isActive: r === "select_canvas_mode",
        onChangeFitMode,
        onVisibleChange: g,
        onWarningTipVisible,
      }),
    ],
  });
}
class aT extends iE {
  recognize(originUri, t) {
    return er
      ._(function* () {
        this._isCancelRecognize = false;
        const i = yield this.preRecognize(originUri, t);
        if (this._name === f.gP.ControlNetPose) {
          const { poseDetectRes } = i;
          if (!poseDetectRes) {
            return {
              recognizeResult: f.Gj.PoseDetectError,
            };
          }
          if (!poseDetectRes.ok) {
            return {
              recognizeResult:
                poseDetectRes.code === -2 || poseDetectRes.code === -1
                  ? f.Gj.NetworkError
                  : f.Gj.PoseDetectError,
            };
          }
          if (!poseDetectRes.value.isPose) {
            return {
              recognizeResult: f.Gj.PoseDetectError,
            };
          }
        }
        const { blendPreviewRes } = i;
        if (blendPreviewRes.ok) {
          if (this._isCancelRecognize) {
            return {
              recognizeResult: f.Gj.Cancelled,
            };
          }
          let n;
          let s;
          let o;
          let c;
          let l;
          let u;
          const { ability } = blendPreviewRes.value;
          if (ability) {
            return {
              data: {
                previewUrl:
                  (n =
                    ability == null ||
                    (c = ability.largeImageList) == null ||
                    (o = c[0]) == null
                      ? undefined
                      : o.imageUrl) != null
                    ? n
                    : "",
                previewUri:
                  (s =
                    ability == null ||
                    (u = ability.largeImageList) == null ||
                    (l = u[0]) == null
                      ? undefined
                      : l.imageUri) != null
                    ? s
                    : "",
                originUri,
              },
              recognizeResult: f.Gj.Success,
            };
          }
          return {
            recognizeResult: f.Gj.Empty,
          };
        }
        const { code } = blendPreviewRes;
        if (code === 2003) {
          return {
            recognizeResult: f.Gj.ImageIPIsBlocked,
          };
        }
        return {
          recognizeResult: f.Gj.NetworkError,
        };
      })
      .call(this);
  }
  cancelRecognize() {
    this._isCancelRecognize = true;
  }
  preRecognize(e, t) {
    return er
      ._(function* () {
        yield this.mutexLock.acquire();
        try {
          let i;
          const a = yield this.getCacheKey(e, t);
          const r = yield this.getRecognizeCache(a);
          if (r) {
            return r;
          }
          const n = yield this._getRecognizeUri(e, t);
          const s =
            this._controlnetPreviewDataService.generateControlnetPreview(
              {
                model: X.Qp,
                ability: {
                  name: ez.DABlendAbilityName.ControlNet,
                  imageUriList: [n],
                  controlNetList: [
                    {
                      name: X.M$[this._name],
                      strength: X.u4.default / X.u4.max,
                      imageIndex: 0,
                    },
                  ],
                },
              },
              {
                babi_param: ev.Wu(
                  ev.OC({
                    scenario: "image_video_generation",
                    featureKey: "to_image_referenceimage",
                    featureEntranceDetail: ""
                      .concat(em.F(), "-referenceimage-")
                      .concat(this._name),
                    editType: "canva",
                    toolId: ey.M.Canva,
                  }),
                ),
              },
            );
          if (this._name === f.gP.ControlNetPose) {
            i = this._controlnetPreviewDataService.poseDetect(
              {
                uri: n,
              },
              {
                babi_param: ev.Wu(
                  ev.OC({
                    scenario: "image_video_generation",
                    featureKey: "to_image_referenceimage",
                    featureEntranceDetail: "".concat(
                      em.F(),
                      "-referenceimage-pose_detection",
                    ),
                    editType: "canva",
                    toolId: ey.M.Canva,
                  }),
                ),
              },
            );
          }
          const [o, c] = yield Promise.all([s, i]);
          if (this._name === f.gP.ControlNetPose) {
            if (o.ok && (c == null ? undefined : c.ok)) {
              this.setRecognizeCache(a, {
                blendPreviewRes: o,
                poseDetectRes: c,
                name: f.gP.ControlNetPose,
              });
            }
          } else if (o.ok) {
            this.setRecognizeCache(a, {
              blendPreviewRes: o,
              name: this._name,
            });
          }
          return {
            blendPreviewRes: o,
            poseDetectRes: c,
            name: this._name,
          };
        } finally {
          this.mutexLock.release();
        }
      })
      .call(this);
  }
  _getRecognizeUri(e, t) {
    return er
      ._(function* () {
        if (!t) {
          return e;
        }
        const i = yield eG.c({
          fileOrUrl: t,
          containerService: this._containerService,
        });
        if (i.ok) {
          return i.value || "";
        }
        return e;
      })
      .call(this);
  }
  constructor(e, t, i) {
    super(t);
    this._name = e;
    this._controlnetPreviewDataService = i;
  }
}
aT = en.Cg(
  [
    en.Qj(1, k._),
    en.Qj(2, iT.Z),
    en.Sn("design:type", Function),
    en.Sn("design:paramtypes", [
      typeof ValidControlNet === "undefined" ? Object : ValidControlNet,
      k._ === undefined ? Object : k._,
      iT.Z === undefined ? Object : iT.Z,
    ]),
  ],
  aT,
);
class ak extends iZ {
  get isRecognized() {
    return this.previewUrl !== "";
  }
  updateReferenceLevel(e) {
    this.referenceLevel = e;
  }
  updateFitMode(e) {
    this.fitMode = e;
  }
  updatePreviewUrl(e) {
    this.previewUrl = e;
  }
  updatePreviewUri(e) {
    this.previewUri = e;
  }
  reset() {
    super.reset();
    this.referenceLevel = Math.round(X.u4.default);
    this.originUri = "";
    this.previewUri = "";
    this.previewUrl = "";
  }
  initWithImagineParams(e, t) {
    let i;
    if (
      ((i = e.model) == null ? undefined : i.abilityName) ===
      ez.DABlendAbilityName.ControlNet
    ) {
      let a;
      let r;
      let n;
      let s;
      let o;
      let c;
      let l;
      let u;
      let g;
      let d;
      let h;
      let m;
      const { controlNet, extra } = e.model;
      this.referenceLevel = controlNet.strength * X.u4.max;
      const { fitMode } = extra;
      this.fitMode = fitMode;
      const f = controlNet.name;
      switch (f) {
        case ay._.Pose:
          this.previewUrl =
            (a = controlNet.pose.previewImage.imageUrl) != null ? a : "";
          this.previewUri =
            (r = controlNet.pose.previewImage.imageUri) != null ? r : "";
          this.originUri =
            (n = controlNet.pose.originImage.imageUri) != null ? n : "";
          this.originUrl =
            (s = controlNet.pose.originImage.imageUrl) != null ? s : "";
          break;
        case ay._.Depth:
          this.previewUrl =
            (o = controlNet.depth.previewImage.imageUrl) != null ? o : "";
          this.previewUri =
            (c = controlNet.depth.previewImage.imageUri) != null ? c : "";
          this.originUri =
            (l = controlNet.depth.originImage.imageUri) != null ? l : "";
          this.originUrl =
            (u = controlNet.depth.originImage.imageUrl) != null ? u : "";
          break;
        case ay._.Canny:
          this.previewUrl =
            (g = controlNet.canny.previewImage.imageUrl) != null ? g : "";
          this.previewUri =
            (d = controlNet.canny.previewImage.imageUri) != null ? d : "";
          this.originUri =
            (h = controlNet.canny.originImage.imageUri) != null ? h : "";
          this.originUrl =
            (m = controlNet.canny.originImage.imageUrl) != null ? m : "";
          break;
        default:
          el.DR(f);
      }
    }
  }
  getReferImageParams() {
    const e = super.getCommonParam();
    const t = {
      image: {},
      originImage: {
        imageUri: this.originUri,
        imageUrl: this.originUrl,
      },
      previewImage: {
        imageUri: this.previewUri,
        imageUrl: this.previewUrl,
      },
    };
    let controlNet;
    switch (this._name) {
      case ay._.Pose:
        controlNet = {
          name: ay._.Pose,
          strength: this.referenceLevel / 100,
          imageIndex: 0,
          pose: t,
        };
        break;
      case ay._.Depth:
        controlNet = {
          name: ay._.Depth,
          strength: this.referenceLevel / 100,
          imageIndex: 0,
          depth: t,
        };
        break;
      case ay._.Canny:
        controlNet = {
          name: ay._.Canny,
          strength: this.referenceLevel / 100,
          imageIndex: 0,
          canny: t,
        };
        break;
      default:
        el.DR(this._name);
    }
    el.F4(controlNet);
    return H._(
      {
        model: {
          abilityName: ez.DABlendAbilityName.ControlNet,
          controlNet,
          extra: {
            name: this._name,
            fitMode: this.fitMode,
            imageIndex: 0,
          },
        },
      },
      e,
    );
  }
  constructor(e, t) {
    super(e);
    this.referenceImageStore = e;
    this._name = t;
    this.referenceLevel = X.u4.default;
    this.fitMode = tS.j.CenterCrop;
    this.previewUrl = "";
    this.previewUri = "";
    eM.Gn(this);
  }
}
en.Cg([eM.sH], ak.prototype, "referenceLevel", undefined);
en.Cg([eM.sH], ak.prototype, "fitMode", undefined);
en.Cg([eM.sH], ak.prototype, "previewUrl", undefined);
en.Cg(
  [eM.EW, en.Sn("design:type", Boolean), en.Sn("design:paramtypes", [])],
  ak.prototype,
  "isRecognized",
  null,
);
en.Cg(
  [
    eM.XI.bound,
    en.Sn("design:type", Function),
    en.Sn("design:paramtypes", [Number]),
    en.Sn("design:returntype", undefined),
  ],
  ak.prototype,
  "updateReferenceLevel",
  null,
);
en.Cg(
  [
    eM.XI.bound,
    en.Sn("design:type", Function),
    en.Sn("design:paramtypes", [tS.j === undefined ? Object : tS.j]),
    en.Sn("design:returntype", undefined),
  ],
  ak.prototype,
  "updateFitMode",
  null,
);
en.Cg(
  [
    eM.XI.bound,
    en.Sn("design:type", Function),
    en.Sn("design:paramtypes", [String]),
    en.Sn("design:returntype", undefined),
  ],
  ak.prototype,
  "updatePreviewUrl",
  null,
);
en.Cg(
  [
    eM.XI.bound,
    en.Sn("design:type", Function),
    en.Sn("design:paramtypes", [String]),
    en.Sn("design:returntype", undefined),
  ],
  ak.prototype,
  "updatePreviewUri",
  null,
);
en.Cg(
  [
    eM.XI.bound,
    en.Sn("design:type", Function),
    en.Sn("design:paramtypes", []),
    en.Sn("design:returntype", undefined),
  ],
  ak.prototype,
  "reset",
  null,
);
en.Cg(
  [
    eM.XI.bound,
    en.Sn("design:type", Function),
    en.Sn("design:paramtypes", [
      typeof AbilityReferenceModalParams === "undefined"
        ? Object
        : AbilityReferenceModalParams,
      String,
    ]),
    en.Sn("design:returntype", undefined),
  ],
  ak.prototype,
  "initWithImagineParams",
  null,
);
class az extends iA {
  handleAbilityChange(e) {
    return er
      ._(function* () {
        const t = yield this.recognizer.recognize(e.uri);
        if (t.recognizeResult === f.Gj.Success) {
          const { data } = t;
          this.store.setOriginUri(e.uri);
          this.store.setOriginUrl(e.url);
          this.store.updatePreviewUrl(
            (data == null ? undefined : data.previewUrl) || "",
          );
          this.store.updatePreviewUri(
            (data == null ? undefined : data.previewUri) || "",
          );
        }
        return t.recognizeResult;
      })
      .call(this);
  }
  postProcess(e) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(H._({}, e));
      }, 0);
    });
  }
  _createReferenceImageComponent() {
    return d.PA((e) => {
      var { image } = e;
      var { customWidth, customHeight } = this._referenceImageStore;
      return s.jsx(useAC, {
        abilityType: this.abilityType,
        image,
        fitMode: this.store.fitMode,
        previewUrl: this.store.previewUrl,
        ratio: customWidth / customHeight,
      });
    });
  }
  _reportReferenceLevel() {
    const e = this._containerService.createInstance(eN.f);
    e.setParams({
      action: "adjust_reference_level",
      referenceSet: this.abilityType,
    });
    e.report();
  }
  _createInteractComponent() {
    return d.PA(() =>
      s.jsx(useAR, {
        name: this.abilityType,
        referenceLevel: this.store.referenceLevel,
        fitMode: this.store.fitMode,
        onUpdateFitMode: this.store.updateFitMode,
        onUpdateReferenceLevel: this._updateReferenceLevel,
      }),
    );
  }
  constructor(e, t) {
    super();
    this._referenceImageStore = e;
    this._containerService = t;
    this.name = l.Ay.t("web_reference_element_depth", {}, "景深");
    this.abilityType = f.gP.ControlNetDepth;
    this.interactComponent = this._createInteractComponent();
    this.referenceImageComponent = this._createReferenceImageComponent();
    this._updateReferenceLevel = (e) => {
      this.store.updateReferenceLevel(e);
      this._reportReferenceLevel();
    };
    this.recognizer = this._containerService.createInstance(
      aT,
      f.gP.ControlNetDepth,
    );
    this.store = this._containerService.createInstance(
      ak,
      this._referenceImageStore,
      ay._.Depth,
    );
  }
}
az = en.Cg(
  [
    en.Qj(1, k._),
    en.Sn("design:type", Function),
    en.Sn("design:paramtypes", [
      typeof ReferenceImageStore === "undefined" ? Object : ReferenceImageStore,
      k._ === undefined ? Object : k._,
    ]),
  ],
  az,
);
class aD extends iA {
  handleAbilityChange(e) {
    return er
      ._(function* () {
        const t = yield this.recognizer.recognize(e.uri);
        if (t.recognizeResult === f.Gj.Success) {
          const { data } = t;
          this.store.setOriginUri(e.uri);
          this.store.setOriginUrl(e.url);
          this.store.updatePreviewUrl(
            (data == null ? undefined : data.previewUrl) || "",
          );
          this.store.updatePreviewUri(
            (data == null ? undefined : data.previewUri) || "",
          );
        }
        return t.recognizeResult;
      })
      .call(this);
  }
  postProcess(e) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(H._({}, e));
      }, 0);
    });
  }
  _createReferenceImageComponent() {
    return d.PA((e) => {
      var { image } = e;
      var { customWidth, customHeight } = this._referenceImageStore;
      return s.jsx(useAC, {
        abilityType: this.abilityType,
        image,
        fitMode: this.store.fitMode,
        previewUrl: this.store.previewUrl,
        ratio: customWidth / customHeight,
      });
    });
  }
  _reportReferenceLevel() {
    const e = this._containerService.createInstance(eN.f);
    e.setParams({
      action: "adjust_reference_level",
      referenceSet: this.abilityType,
    });
    e.report();
  }
  _createInteractComponent() {
    return d.PA(() =>
      s.jsx(useAR, {
        name: this.abilityType,
        referenceLevel: this.store.referenceLevel,
        fitMode: this.store.fitMode,
        onUpdateFitMode: this.store.updateFitMode,
        onUpdateReferenceLevel: this._updateReferenceLevel,
      }),
    );
  }
  constructor(e, t) {
    super();
    this._referenceImageStore = e;
    this._containerService = t;
    this.name = l.Ay.t("web_reference_element_edge", {}, "边缘轮廓");
    this.abilityType = f.gP.ControlNetCanny;
    this.interactComponent = this._createInteractComponent();
    this.referenceImageComponent = this._createReferenceImageComponent();
    this._updateReferenceLevel = (e) => {
      this.store.updateReferenceLevel(e);
      this._reportReferenceLevel();
    };
    this.recognizer = this._containerService.createInstance(
      aT,
      f.gP.ControlNetCanny,
    );
    this.store = this._containerService.createInstance(
      ak,
      this._referenceImageStore,
      ay._.Canny,
    );
  }
}
aD = en.Cg(
  [
    en.Qj(1, k._),
    en.Sn("design:type", Function),
    en.Sn("design:paramtypes", [
      typeof ReferenceImageStore === "undefined" ? Object : ReferenceImageStore,
      k._ === undefined ? Object : k._,
    ]),
  ],
  aD,
);
const aP = "box-akjK9Y";
const aE = p.memo(function (e) {
  const { face, scale, selected, onSelectFace } = e;
  const { x, y, width, height, realSize } = p.useMemo(() => {
    var [e, a, r, n] = face.faceRect;
    e *= scale;
    a *= scale;
    var realSize_1 = Math.min((r *= scale), (n *= scale));
    if (realSize_1 <= 16) {
      e -= Math.abs(r - 16) / 2;
      a -= Math.abs(n - 16) / 2;
      r = Math.max(r, 16);
      n = Math.max(n, 16);
    }
    return {
      x: e,
      y: a,
      width: r,
      height: n,
      realSize: realSize_1,
    };
  }, [face, scale]);
  const h = realSize >= 58;
  return s.jsxs("div", {
    className: _v("face-rect-IPNquE", {
      "selected-shSwLX": selected,
      "small-rect-wsFFMw": !h,
      "large-rect-wL0B5k": h,
    }),
    style: {
      left: "".concat(x, "px"),
      top: "".concat(y, "px"),
      width: "".concat(width, "px"),
      height: "".concat(height, "px"),
    },
    role: "button",
    tabIndex: 0,
    onKeyDown: c.q,
    "aria-label": [
      l.Ay.t("octo_director_stage_select", {}, "选择"),
      l.Ay.t("web_reference_element_face", {}, "人物长相"),
    ].join(" · "),
    "aria-pressed": selected,
    onClick: () => onSelectFace(face.faceKey),
    children: [
      s.jsx("div", {
        className: aP,
      }),
      s.jsx("div", {
        className: aP,
      }),
      s.jsx("div", {
        className: aP,
      }),
      s.jsx("div", {
        className: aP,
      }),
    ],
  });
});
const aL = p.memo(function (e) {
  const { imageSize, faceRects, selectedIndex, customRatio, onSelectFace } = e;
  const o = imageSize.width / imageSize.height;
  const cRef = p.useRef(null);
  const [l, setL] = p.useState(1);
  const [g, setG] = p.useState();
  p.useEffect(() => {
    if (cRef.current) {
      var e = cRef.current.offsetWidth;
      var i = cRef.current.offsetHeight;
      setL(Math.min(e / imageSize.width, i / imageSize.height));
      setG({
        width: e,
        height: i,
      });
    }
  }, [imageSize, customRatio]);
  const h = p.useMemo(() => {
    if (g) {
      return s.jsx("div", {
        className: "face-rect-container-oyx6N8",
        style: {
          width: g.width,
          height: g.height,
        },
        children: faceRects.map((face, t) =>
          s.jsx(
            aE,
            {
              face,
              scale: l,
              selected: t === selectedIndex,
              onSelectFace,
            },
            face.faceKey,
          ),
        ),
      });
    }
    return null;
  }, [faceRects, selectedIndex, l, g, onSelectFace]);
  return s.jsxs(s.Fragment, {
    children: [
      s.jsx("div", {
        className: "placeholder-container-hajLDj",
        style: {
          aspectRatio: customRatio,
        },
        children: s.jsx("div", {
          ref: cRef,
          className: "placeholder-face-rect-container-ZpB0kU",
          style: {
            aspectRatio: o,
          },
        }),
      }),
      h,
    ],
  });
});
const aW = p.forwardRef(function (e, t) {
  const { faceKey, picture, active, onClick } = e;
  const o = p.useCallback(() => {
    if (onClick != null) {
      onClick(faceKey);
    }
  }, [onClick, faceKey]);
  return s.jsx("div", {
    ref: t,
    className: _v({
      "item-LgYecw": true,
      "item-active-fiAktM": active,
    }),
    role: "button",
    tabIndex: 0,
    onKeyDown: c.q,
    "aria-label": [
      l.Ay.t("octo_director_stage_select", {}, "选择"),
      l.Ay.t("web_reference_element_face", {}, "人物长相"),
    ].join(" · "),
    "aria-pressed": active,
    onClick: o,
    children: s.jsx("img", {
      alt: "",
      className: "image-O18hvo",
      src: C.m(picture, null, {
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
          "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1-lZwWFJqQmtXRXBzWTNrNWFtSXlO$EJh$np$d1R*Z*tiR0p0$m5sWld*SjJZMms1-0dKd$$te*pi$FZvWWtNNWJWcFhSakJr$0$wc1kzaz$jR0p-%m01-$$6Rn$Xb*Mx-kdOdFJqQmlNM*wy$1RJNWRHTkhPWFZh$np$d1kzaz$l$nB-$214amJWWjFX$EpWZEd*WE1Xa*FNbF-wWWxjNWExbFhkM1paTWpsMFkw-z$k$nB-TlRCam$%bHRX$mRP-k$4WFpHa*lh$EZ3WW01%2JHTnRSbXBr%XpsdFdWZE9iRXhZ$*pOaFd*SnFZ$%01-lZsWFRteE1XRTR6W$Zo%2FtRkRNWEJr%jFaMFRHN$Nlb$ZI%m5s-%0xWj-",
      }),
      crossOrigin: "anonymous",
    }),
  });
});
function aF(e) {
  const { icon, externalClassName, onClick } = e;
  return s.jsx("div", {
    className: _v("switch-arrow-rptjHw", externalClassName),
    role: "button",
    tabIndex: 0,
    onKeyDown: c.q,
    "aria-label": e.label,
    onClick,
    children: s.jsx(icon, {
      size: 20,
    }),
  });
}
function useAU(e) {
  const { faces, selectedIndex, onSelectFace } = e;
  const r = e8.A((e) => {
    if (onSelectFace != null) {
      onSelectFace(e);
    }
  });
  const {
    moveX,
    moveNextOne,
    movePrevOne,
    showNext,
    showPrev,
    wrapRef,
    firstElementRef,
    lastElementRef,
  } = ((e, t) => {
    var iRef = p.useRef(null);
    var [a, setA] = p.useState(false);
    var [firstElementRef_1, s] = tO.lV(undefined, () => {
      setA(true);
    });
    var [lastElementRef_1, c] = tO.lV();
    var [moveX_1, setL] = p.useState(0);
    var showPrev_1 = a && !s && t > 1;
    var showNext_1 = a && !c && t > 1;
    var h = e8.A((e) => {
      var iRef_current = iRef.current;
      if (iRef_current) {
        return Math.min(
          0,
          Math.max(iRef_current.clientWidth - (44 * t + 8 * (t - 1)), e),
        );
      }
      return 0;
    });
    var m = e8.A((e) => {
      var iRef_current = iRef.current;
      if (!iRef_current) {
        return 0;
      }
      var r = iRef_current.clientWidth / 2;
      var n = 0;
      for (var s = 0; s < t; s++) {
        var o = 52 * s;
        var c = (s + 1) * 52;
        if (r >= o && r < c) {
          n = s;
          break;
        }
      }
      var l = -(52 * (e - n));
      if (e <= n) {
        return 0;
      }
      return h(l);
    });
    var v = e8.A(() => {
      setL(m(e));
    });
    p.useEffect(() => {
      window.addEventListener("resize", v);
      return () => {
        window.removeEventListener("resize", v);
      };
    }, [v]);
    p.useEffect(() => {
      setL(m(e));
    }, [e, t, m]);
    var moveNextOne_1 = e8.A(() => {
      setL((e) => h(e - 52));
    });
    return {
      firstElementRef: firstElementRef_1,
      lastElementRef: lastElementRef_1,
      wrapRef: iRef,
      moveX: moveX_1,
      showNext: showNext_1,
      showPrev: showPrev_1,
      movePrevOne: e8.A(() => {
        setL((e) => h(e + 52));
      }),
      moveNextOne: moveNextOne_1,
    };
  })(selectedIndex, faces.length);
  const y = e8.A(() => {
    movePrevOne();
  });
  const f = e8.A(() => {
    moveNextOne();
  });
  const M = p.useMemo(
    () =>
      faces.map((e, i) => {
        if (i === 0) {
          return s.jsx(
            aW,
            {
              ref: firstElementRef,
              active: e.isSelected,
              faceKey: e.faceKey,
              picture: e.picture,
              onClick: r,
            },
            e.faceKey,
          );
        }
        if (i === faces.length - 1) {
          return s.jsx(
            aW,
            {
              ref: lastElementRef,
              active: e.isSelected,
              faceKey: e.faceKey,
              picture: e.picture,
              onClick: r,
            },
            e.faceKey,
          );
        }
        return s.jsx(
          aW,
          {
            active: e.isSelected,
            faceKey: e.faceKey,
            picture: e.picture,
            onClick: r,
          },
          e.faceKey,
        );
      }),
    [faces, firstElementRef, lastElementRef, r],
  );
  return s.jsx("div", {
    className: "switch-container-qQrGZ9",
    children: s.jsxs("div", {
      className: "switch-bgJYe6",
      ref: wrapRef,
      children: [
        s.jsx("div", {
          className: "item-wrap-rxXFNc",
          style: {
            transform: "translateX(".concat(moveX, "px)"),
          },
          children: M,
        }),
        showPrev &&
          s.jsx(aF, {
            label: [
              l.Ay.t(
                "octo_generation_history_locate_previous_label",
                {},
                "上一个",
              ),
              l.Ay.t("web_reference_element_face", {}, "人物长相"),
            ].join(" · "),
            externalClassName: "prev-icon-rA5MoP",
            icon: u.bWN,
            onClick: y,
          }),
        showNext &&
          s.jsx(aF, {
            label: [
              l.Ay.t("octo_generation_history_locate_next_label", {}, "下一个"),
              l.Ay.t("web_reference_element_face", {}, "人物长相"),
            ].join(" · "),
            externalClassName: "next-icon-kbfYGk",
            icon: u.Vjx,
            onClick: f,
          }),
      ],
    }),
  });
}
function useAZ(e) {
  const { selectedIndex, faceRects, onSelectFaceRect, imageSize, customRatio } =
    e;
  const onSelectFace = p.useCallback(
    (e) => {
      onSelectFaceRect(e);
    },
    [onSelectFaceRect],
  );
  return s.jsxs(s.Fragment, {
    children: [
      s.jsx(aL, {
        imageSize,
        faceRects,
        selectedIndex,
        customRatio,
        onSelectFace,
      }),
      s.jsx(useAU, {
        selectedIndex,
        faces: faceRects,
        onSelectFace,
      }),
    ],
  });
}
const aO = require("CR");
function aG(e) {
  const [t, i, a, r] = e;
  return "".concat(t, "_").concat(i, "_").concat(a, "_").concat(r);
}
class aB extends iE {
  recognize(e, t) {
    return er
      ._(function* () {
        this._isCancelRecognize = false;
        const { recognizeResp, auditResp } = yield this.preRecognize(e, t);
        if (!auditResp.ok) {
          const { code: code_1 } = auditResp;
          return {
            recognizeResult:
              code_1 === aO.Q.ErrUploadImageCopyrightBlock
                ? f.Gj.SafetyCheckError
                : f.Gj.NetworkError,
          };
        }
        if (this._isCancelRecognize) {
          return {
            recognizeResult: f.Gj.Cancelled,
          };
        }
        if (auditResp.value.status !== "pass") {
          return {
            recognizeResult: f.Gj.ImageIPIsBlocked,
          };
        }
        if (recognizeResp.ok) {
          if (this._isCancelRecognize) {
            return {
              recognizeResult: f.Gj.Cancelled,
            };
          }
          let n;
          const { faceRecognizeList } = recognizeResp.value;
          const o = (n = faceRecognizeList[0]) != null ? n : [];
          if (o.length) {
            return {
              data: {
                faceRecognizeList: o
                  .map((e) => {
                    var { faceRect } = e;
                    var faceKey = aG(faceRect);
                    return Y._(H._({}, e), {
                      picture: "",
                      faceKey,
                    });
                  })
                  .sort((e, t) => {
                    var i;
                    var a;
                    var { faceRect } = e;
                    var { faceRect: faceRect_1 } = t;
                    if (
                      ((i = faceRect[0]) != null ? i : 0) >
                      ((a = faceRect_1[0]) != null ? a : 0)
                    ) {
                      return 1;
                    }
                    return -1;
                  }),
              },
              recognizeResult: f.Gj.Success,
            };
          }
          return {
            recognizeResult: f.Gj.Empty,
          };
        }
        const { code } = recognizeResp;
        switch (code) {
          case 2037:
            return {
              recognizeResult: f.Gj.DownloadImageError,
            };
          case 2038:
            return {
              recognizeResult: f.Gj.FacePredictError,
            };
          case 2049:
            return {
              recognizeResult: f.Gj.ImageIPIsBlocked,
            };
          default:
            return {
              recognizeResult: f.Gj.NetworkError,
            };
        }
      })
      .call(this);
  }
  preRecognize(e, t) {
    return er
      ._(function* () {
        yield this.mutexLock.acquire();
        try {
          const i = yield this.getCacheKey(e, t);
          const a = this.getRecognizeCache(i);
          if (a) {
            return a;
          }
          const r = this._auditImage(e);
          const n = this._recognizeFace(e);
          const [s, o] = yield Promise.all([r, n]);
          const c = [s, o].every((e) => e.code === 0);
          const l = {
            recognizeResp: o,
            auditResp: s,
          };
          if (c) {
            this.setRecognizeCache(i, l);
          }
          return l;
        } finally {
          this.mutexLock.release();
        }
      })
      .call(this);
  }
  _recognizeFace(e) {
    return this._controlnetPreviewDataService.getRecognizeFace(
      {
        imageUriList: [e],
      },
      {
        babi_param: ev.Wu(
          ev.OC({
            scenario: "image_video_generation",
            featureKey: "to_image_referenceimage",
            featureEntranceDetail: "".concat(
              em.F(),
              "-referenceimage-human_face",
            ),
            editType: "canva",
            toolId: ey.M.Canva,
          }),
        ),
      },
    );
  }
  _auditImage(e) {
    return er
      ._(function* () {
        const t = yield this._algorithmDataService.requestAlgorithm(
          "benchmark_test_user_upload_image_input.image_face_ip",
          {
            params: {},
            fileList: [
              {
                fileUri: e,
              },
            ],
            options: {
              ipCheck: true,
            },
          },
          {
            babi_param: ev.Wu(
              ev.OC({
                scenario: "image_video_generation",
                featureKey: "aigc_to_image",
                featureEntranceDetail: "".concat(em.F(), "-algo_proxy"),
                editType: "canva",
                toolId: ey.M.Canva,
              }),
            ),
          },
        );
        if (t.ok) {
          return eg.TZ({
            status: "pass",
          });
        }
        return eg.xz(t.code, t.msg, t);
      })
      .call(this);
  }
  constructor(e, t, i) {
    super(e);
    this._algorithmDataService = t;
    this._controlnetPreviewDataService = i;
  }
}
aB = en.Cg(
  [
    en.Qj(0, k._),
    en.Qj(1, ep.o),
    en.Qj(2, iT.Z),
    en.Sn("design:type", Function),
    en.Sn("design:paramtypes", [
      k._ === undefined ? Object : k._,
      ep.o === undefined ? Object : ep.o,
      iT.Z === undefined ? Object : iT.Z,
    ]),
  ],
  aB,
);
const a$ = require("GJ");
class aX extends iZ {
  get faceRects() {
    return this.faceRecognizeList.map((e) =>
      ((e) => {
        const { faceRect, keypoint } = e;
        const a = tx._(e, ["faceRect", "keypoint"]);
        const [r, n, s, o] = faceRect;
        return Y._(H._({}, a), {
          faceRect: [+r, +n, +s, +o],
          keypoint: keypoint.map((e) => +e),
        });
      })(
        Y._(H._({}, e), {
          isSelected: this.selectedKey === e.faceKey,
        }),
      ),
    );
  }
  get isRecognized() {
    return this.faceRecognizeList.length !== 0;
  }
  get selectRectIndex() {
    return this.faceRects.findIndex((e) => e.isSelected);
  }
  setFaceRecognizeList(e) {
    this.faceRecognizeList = e;
  }
  setSelectedKey(e) {
    this.selectedKey = e;
  }
  getDefaultSelectedFaceKey(e) {
    let t = 0;
    let i = "";
    e.forEach((e) => {
      var { faceRect, faceKey } = e;
      var [, , n, s] = faceRect;
      var o = n * s;
      if (o > t) {
        t = o;
        i = faceKey;
      }
    });
    return i;
  }
  initWithImagineParams(e, t) {
    let i;
    if (
      ((i = e.model) == null ? undefined : i.abilityName) ===
      ez.DABlendAbilityName.FaceGan
    ) {
      el.X3(e.model.source.imageUri, "imageUri is null");
      el.X3(e.model.source.imageUrl, "imageUrl is null");
      el.X3(this._referenceImageStore.currentImage, "image is null");
      const a = e.model.faceData.map((e) => {
        var e_faceRect = e.faceRect;
        var i = aG(e_faceRect);
        if (e.isSelected) {
          this.setSelectedKey(i);
        }
        return Y._(H._({}, e), {
          faceRect: e_faceRect,
          picture: "",
          faceKey: i,
        });
      });
      this.setOriginUri(e.model.source.imageUri);
      this.setOriginUrl(e.model.source.imageUrl);
      this.clipFacePicture(this.originUrl);
      this.setFaceRecognizeList(a);
    }
  }
  getReferImageParams() {
    const e = super.getCommonParam();
    const faceData = this.faceRecognizeList.map((e) => ({
      keypoint: e.keypoint,
      faceRect: e.faceRect,
      isSelected: aG(e.faceRect) === this.selectedKey,
    }));
    el.X3(this.originUri, "originUri is empty");
    el.X3(this.originUrl, "originUrl is empty");
    return H._(
      {
        model: {
          abilityName: ez.DABlendAbilityName.FaceGan,
          source: {
            imageUri: this.originUri,
            imageUrl: this.originUrl,
          },
          faceData,
        },
      },
      e,
    );
  }
  reset() {
    let e;
    this.faceRecognizeList = [];
    this.selectedKey = "";
    if ((e = this._clipInstance) != null) {
      e.clear();
    }
    this._clipInstance = null;
  }
  clipFacePicture(e) {
    return er
      ._(function* () {
        if (!this._clipInstance) {
          this._clipInstance = new a$.B();
        }
        const _clipInstance = this._clipInstance;
        try {
          const { width, height } = yield eX.y(e);
          yield _clipInstance.init(e, width, height);
          const r = this.faceRecognizeList.map((e) =>
            Y._(H._({}, e), {
              picture: ((e, t) => {
                const [i, a, r, n] = t.faceRect;
                const s =
                  r > n
                    ? [i, Math.max(0, a - (r - n) / 2), r, r]
                    : [Math.max(0, i - (n - r) / 2), a, n, n];
                return e.clipRect(...s);
              })(_clipInstance, e),
            }),
          );
          this.faceRecognizeList = r;
        } catch (error) {
          ed.V.error("clipFacePicture", error);
        }
      })
      .call(this);
  }
  constructor(e) {
    super(e);
    this.faceRecognizeList = [];
    this.selectedKey = "";
    this.selectFaceRect = (e) => {
      this.selectedKey = e;
    };
    eM.Gn(this);
    this._clipInstance = null;
  }
}
en.Cg(
  [eM.sH, en.Sn("design:type", Array)],
  aX.prototype,
  "faceRecognizeList",
  undefined,
);
en.Cg([eM.sH], aX.prototype, "selectedKey", undefined);
en.Cg(
  [
    eM.XI.bound,
    en.Sn("design:type", Function),
    en.Sn("design:paramtypes", [
      typeof AbilityReferenceModalParams === "undefined"
        ? Object
        : AbilityReferenceModalParams,
      String,
    ]),
    en.Sn("design:returntype", undefined),
  ],
  aX.prototype,
  "initWithImagineParams",
  null,
);
class aH extends iA {
  handleAbilityChange(e) {
    return er
      ._(function* () {
        let t;
        let i;
        let a;
        let r;
        const n = yield this.recognizer.recognize(e.uri);
        if (n.recognizeResult === f.Gj.Success) {
          this.store.setOriginUri(e.uri);
          this.store.setOriginUrl(e.url);
          this.store.setSelectedKey(
            this.store.getDefaultSelectedFaceKey(
              (t = (a = n.data) == null ? undefined : a.faceRecognizeList) !=
                null
                ? t
                : [],
            ),
          );
          this.store.clipFacePicture(e.url);
          this.store.setFaceRecognizeList(
            (i = (r = n.data) == null ? undefined : r.faceRecognizeList) != null
              ? i
              : [],
          );
        }
        return n.recognizeResult;
      })
      .call(this);
  }
  postProcess(e) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(H._({}, e));
      }, 0);
    });
  }
  _createReferenceImageComponent() {
    return d.PA((e) =>
      s.jsx(s.Fragment, {
        children: e.children,
      }),
    );
  }
  _createInteractComponent() {
    return d.PA(() => {
      var { currentImage } = this.referenceImageStore;
      if (!currentImage) {
        return s.jsx(s.Fragment, {});
      }
      var { customWidth, customHeight } = this.referenceImageStore;
      return s.jsx(useAZ, {
        imageSize: currentImage,
        faceRects: this.store.faceRects,
        selectedIndex: this.store.selectRectIndex,
        onSelectFaceRect: this.store.selectFaceRect,
        customRatio: customWidth / customHeight,
      });
    });
  }
  constructor(e, t) {
    super();
    this.referenceImageStore = e;
    this._containerService = t;
    this.name = l.Ay.t("web_dre_t2i_reference_option_one_face", {}, "人像写真");
    this.abilityType = f.gP.FaceGan;
    this.interactComponent = this._createInteractComponent();
    this.referenceImageComponent = this._createReferenceImageComponent();
    this.recognizer = this._containerService.createInstance(aB);
    this.store = this._containerService.createInstance(
      aX,
      this.referenceImageStore,
    );
  }
}
aH = en.Cg(
  [
    en.Qj(1, k._),
    en.Sn("design:type", Function),
    en.Sn("design:paramtypes", [
      typeof ReferenceImageStore === "undefined" ? Object : ReferenceImageStore,
      k._ === undefined ? Object : k._,
    ]),
  ],
  aH,
);
const aY = require("HSi");
class aQ extends iE {
  recognize(e) {
    return er
      ._(function* () {
        this._isCancelRecognize = false;
        let t;
        let i;
        let a;
        let r;
        let n;
        const { safetyCheckResp, subjectCheckResp, image2descriptionResp } =
          yield this.preRecognize(e);
        if (safetyCheckResp.stop) {
          return {
            recognizeResult:
              (a = safetyCheckResp.status) != null ? a : f.Gj.NetworkError,
          };
        }
        if (subjectCheckResp.stop) {
          return {
            recognizeResult:
              (r = subjectCheckResp.status) != null ? r : f.Gj.NetworkError,
          };
        }
        if (image2descriptionResp.stop) {
          return {
            recognizeResult:
              (n = image2descriptionResp.status) != null
                ? n
                : f.Gj.NetworkError,
          };
        }
        return {
          data: {
            imageDescription:
              (t = image2descriptionResp.description) != null ? t : "",
            uri: e,
          },
          recognizeResult:
            (i = subjectCheckResp.status) != null ? i : f.Gj.Success,
        };
      })
      .call(this);
  }
  preRecognize(e) {
    return er
      ._(function* () {
        yield this.mutexLock.acquire();
        try {
          const t = yield this.getCacheKey(e);
          const i = this.getRecognizeCache(t);
          if (i) {
            return i;
          }
          const a = this._safetyCheck(e);
          const r = this._subjectCheck(e);
          const n = this._image2description(e);
          const [s, o, c] = yield Promise.all([a, r, n]);
          const l = {
            safetyCheckResp: s,
            subjectCheckResp: o,
            image2descriptionResp: c,
          };
          if (
            [s, o, c].every((e) => !e.stop || e.status !== f.Gj.NetworkError)
          ) {
            this.setRecognizeCache(t, l);
          }
          return l;
        } finally {
          this.mutexLock.release();
        }
      })
      .call(this);
  }
  _safetyCheck(e) {
    return er
      ._(function* () {
        const t = yield this._algorithmDataService.requestAlgorithm(
          "benchmark_test_user_upload_image_input.image_face_ip",
          {
            params: {},
            fileList: [
              {
                fileUri: e,
              },
            ],
            options: {
              ipCheck: true,
            },
          },
          {
            babi_param: ev.Wu(
              ev.OC({
                scenario: "image_video_generation",
                featureKey: "aigc_to_image",
                featureEntranceDetail: "".concat(em.F(), "-algo_proxy"),
                editType: "canva",
                toolId: ey.M.Canva,
              }),
            ),
          },
        );
        if (this._isCancelRecognize) {
          return {
            stop: true,
            status: f.Gj.Cancelled,
          };
        }
        if (t.ok) {
          return {
            stop: false,
            status: null,
          };
        }
        return {
          stop: true,
          status:
            t.code === -2 || t.code === -1
              ? f.Gj.NetworkError
              : f.Gj.SafetyCheckError,
        };
      })
      .call(this);
  }
  _subjectCheck(e) {
    return er
      ._(function* () {
        const t = this._recognizeFace(e);
        const i = this._controlnetPreviewDataService.getSaliencySEG(
          {
            imageUriList: [e],
            mode: iR.L.Workbench,
          },
          {
            babi_param: ev.Wu(
              ev.OC({
                scenario: "image_video_generation",
                featureKey: "to_image_referenceimage",
                featureEntranceDetail: "".concat(
                  em.F(),
                  "-referenceimage-object_detection",
                ),
                editType: "canva",
                toolId: ey.M.Canva,
              }),
            ),
          },
        );
        const [a, r] = yield Promise.all([t, i]);
        if (this._isCancelRecognize) {
          return {
            stop: true,
            status: f.Gj.Cancelled,
          };
        }
        if (!a.ok) {
          return {
            stop: false,
            status: null,
          };
        }
        const { faceRecognizeList } = a.value;
        const length = faceRecognizeList[0].length;
        let o = false;
        if (r.ok) {
          o = true;
        }
        if (length > 1) {
          return {
            stop: false,
            status: f.Gj.IpKeepMultipySubject,
          };
        }
        if (length !== 0 || o) {
          return {
            stop: false,
            status: null,
          };
        }
        return {
          stop: false,
          status: f.Gj.IpKeepNoSubject,
        };
      })
      .call(this);
  }
  _recognizeFace(e) {
    return this._controlnetPreviewDataService.getRecognizeFace(
      {
        imageUriList: [e],
      },
      {
        babi_param: ev.Wu(
          ev.OC({
            scenario: "image_video_generation",
            featureKey: "to_image_referenceimage",
            featureEntranceDetail: "".concat(
              em.F(),
              "-referenceimage-human_face",
            ),
            editType: "canva",
            toolId: ey.M.Canva,
          }),
        ),
      },
    );
  }
  _image2description(e) {
    return er
      ._(function* () {
        const t = yield this._imageModelConfigDataService.getImagePrompt(
          {
            fileUri: e,
          },
          {
            babi_param: ev.Wu(
              ev.OC({
                scenario: "image_video_generation",
                featureKey: "aigc_to_image",
                featureEntranceDetail: "".concat(
                  em.F(),
                  "-get_image_description",
                ),
                editType: "canva",
                toolId: ey.M.Canva,
              }),
            ),
          },
        );
        if (this._isCancelRecognize) {
          return {
            stop: true,
            status: f.Gj.Cancelled,
          };
        }
        if (!t.ok) {
          return {
            stop: true,
            status: f.Gj.NetworkError,
          };
        }
        const { description } = t.value;
        return {
          stop: false,
          description,
          status: f.Gj.Success,
        };
      })
      .call(this);
  }
  constructor(e, t, i, a) {
    super(e);
    this._algorithmDataService = t;
    this._controlnetPreviewDataService = i;
    this._imageModelConfigDataService = a;
  }
}
aQ = en.Cg(
  [
    en.Qj(0, k._),
    en.Qj(1, ep.o),
    en.Qj(2, iT.Z),
    en.Qj(3, aY.G),
    en.Sn("design:type", Function),
    en.Sn("design:paramtypes", [
      k._ === undefined ? Object : k._,
      ep.o === undefined ? Object : ep.o,
      typeof ControlnetPreviewDataService === "undefined"
        ? Object
        : ControlnetPreviewDataService,
      aY.G === undefined ? Object : aY.G,
    ]),
  ],
  aQ,
);
const aJ = require("lpX");
class aV extends iZ {
  get isRecognized() {
    return this.originUri !== "";
  }
  initWithImagineParams(e, t) {
    let i;
    let a;
    let r;
    if (
      ((r = e.model) == null ? undefined : r.abilityName) ===
      ez.DABlendAbilityName.IpKeep
    ) {
      this.originUri = (i = e.model.source.imageUri) != null ? i : "";
      this.originUrl = (a = e.model.source.imageUrl) != null ? a : "";
      this.imageDescription = e.model.ipData[0].description;
      this.refIpWeight = e.model.ipData[0].refIpWeight * aJ.G.ip.rate;
      this.refIdWeight = e.model.ipData[0].refIdWeight * aJ.G.id.rate;
    }
  }
  getReferImageParams() {
    const e = super.getCommonParam();
    el.X3(this.originUri, "originUri is empty");
    el.X3(this.originUrl, "originUrl is empty");
    return H._(
      {
        model: {
          abilityName: ez.DABlendAbilityName.IpKeep,
          source: {
            imageUri: this.originUri,
            imageUrl: this.originUrl,
          },
          ipData: [
            {
              description: this.imageDescription,
              refIpWeight: this.refIpWeight / aJ.G.ip.rate,
              refIdWeight: this.refIdWeight / aJ.G.id.rate,
            },
          ],
        },
      },
      e,
    );
  }
  updateRefIpWeight(e) {
    this.refIpWeight = e;
  }
  updateRefIdWeight(e) {
    this.refIdWeight = e;
  }
  setImageDescription(e) {
    this.imageDescription = e;
  }
  reset() {
    super.reset();
    this.refIdWeight = aJ.G.id.default;
    this.refIpWeight = aJ.G.ip.default;
    this.imageDescription = "";
  }
  constructor(e) {
    super(e);
    this.refIpWeight = aJ.G.ip.default;
    this.refIdWeight = aJ.G.id.default;
    this.imageDescription = "";
    eM.Gn(this);
  }
}
en.Cg([eM.sH], aV.prototype, "refIpWeight", undefined);
en.Cg([eM.sH], aV.prototype, "refIdWeight", undefined);
en.Cg([eM.sH], aV.prototype, "imageDescription", undefined);
en.Cg(
  [eM.EW, en.Sn("design:type", Boolean), en.Sn("design:paramtypes", [])],
  aV.prototype,
  "isRecognized",
  null,
);
en.Cg(
  [
    eM.XI.bound,
    en.Sn("design:type", Function),
    en.Sn("design:paramtypes", [
      typeof AbilityReferenceModalParams === "undefined"
        ? Object
        : AbilityReferenceModalParams,
      String,
    ]),
    en.Sn("design:returntype", undefined),
  ],
  aV.prototype,
  "initWithImagineParams",
  null,
);
en.Cg(
  [
    eM.XI.bound,
    en.Sn("design:type", Function),
    en.Sn("design:paramtypes", [Number]),
    en.Sn("design:returntype", undefined),
  ],
  aV.prototype,
  "updateRefIpWeight",
  null,
);
en.Cg(
  [
    eM.XI.bound,
    en.Sn("design:type", Function),
    en.Sn("design:paramtypes", [Number]),
    en.Sn("design:returntype", undefined),
  ],
  aV.prototype,
  "updateRefIdWeight",
  null,
);
en.Cg(
  [
    eM.XI.bound,
    en.Sn("design:type", Function),
    en.Sn("design:paramtypes", []),
    en.Sn("design:returntype", undefined),
  ],
  aV.prototype,
  "reset",
  null,
);
class aK extends iA {
  handleAbilityChange(e) {
    return er
      ._(function* () {
        let t;
        let i;
        const a = yield this.recognizer.recognize(e.uri);
        this.store.setOriginUri(e.uri);
        this.store.setOriginUrl(e.url);
        this.store.setImageDescription(
          (t = (i = a.data) == null ? undefined : i.imageDescription) != null
            ? t
            : "",
        );
        return a.recognizeResult;
      })
      .call(this);
  }
  postProcess(e) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(H._({}, e));
      }, 0);
    });
  }
  _createReferenceImageComponent() {
    return d.PA((e) =>
      s.jsx(s.Fragment, {
        children: e.children,
      }),
    );
  }
  _reportReferenceLevel() {
    const e = this._containerService.createInstance(eN.f);
    e.setParams({
      action: "adjust_reference_level",
      referenceSet: this.abilityType,
    });
    e.report();
  }
  _createInteractComponent() {
    return d.PA(() => s.jsx(s.Fragment, {}));
  }
  constructor(e, t) {
    super();
    this._referenceImageStore = e;
    this._containerService = t;
    this.name = l.Ay.t("web_reference_element_character", {}, "角色特征");
    this.abilityType = f.gP.IpKeep;
    this.interactComponent = this._createInteractComponent();
    this.referenceImageComponent = this._createReferenceImageComponent();
    this._updateRefIdWeight = (e) => {
      this.store.updateRefIdWeight(e);
      this._reportReferenceLevel();
    };
    this._updateRefIpWeight = (e) => {
      this.store.updateRefIpWeight(e);
      this._reportReferenceLevel();
    };
    this.recognizer = this._containerService.createInstance(aQ);
    this.store = this._containerService.createInstance(
      aV,
      this._referenceImageStore,
    );
  }
}
aK = en.Cg(
  [
    en.Qj(1, k._),
    en.Sn("design:type", Function),
    en.Sn("design:paramtypes", [
      typeof ReferenceImageStore === "undefined" ? Object : ReferenceImageStore,
      k._ === undefined ? Object : k._,
    ]),
  ],
  aK,
);
class aq extends iA {
  handleAbilityChange(e) {
    return er
      ._(function* () {
        const t = yield this.recognizer.recognize(e.uri);
        if (t.recognizeResult === f.Gj.Success) {
          const { data } = t;
          this.store.setOriginUri(e.uri);
          this.store.setOriginUrl(e.url);
          this.store.updatePreviewUrl(
            (data == null ? undefined : data.previewUrl) || "",
          );
          this.store.updatePreviewUri(
            (data == null ? undefined : data.previewUri) || "",
          );
        }
        return t.recognizeResult;
      })
      .call(this);
  }
  postProcess(e) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(H._({}, e));
      }, 0);
    });
  }
  _createReferenceImageComponent() {
    return d.PA((e) => {
      var { image } = e;
      var { customWidth, customHeight } = this._referenceImageStore;
      return s.jsx(useAC, {
        abilityType: this.abilityType,
        image,
        fitMode: this.store.fitMode,
        previewUrl: this.store.previewUrl,
        ratio: customWidth / customHeight,
      });
    });
  }
  _reportReferenceLevel() {
    const e = this._containerService.createInstance(eN.f);
    e.setParams({
      action: "adjust_reference_level",
      referenceSet: this.abilityType,
    });
    e.report();
  }
  _createInteractComponent() {
    return d.PA(() =>
      s.jsx(useAR, {
        name: this.abilityType,
        referenceLevel: this.store.referenceLevel,
        fitMode: this.store.fitMode,
        onUpdateFitMode: this.store.updateFitMode,
        onUpdateReferenceLevel: this._updateReferenceLevel,
      }),
    );
  }
  constructor(e, t) {
    super();
    this._referenceImageStore = e;
    this._containerService = t;
    this.name = l.Ay.t("web_reference_element_pose", {}, "人物姿势");
    this.abilityType = f.gP.ControlNetPose;
    this.interactComponent = this._createInteractComponent();
    this.referenceImageComponent = this._createReferenceImageComponent();
    this._updateReferenceLevel = (e) => {
      this.store.updateReferenceLevel(e);
      this._reportReferenceLevel();
    };
    this.recognizer = t.createInstance(aT, f.gP.ControlNetPose);
    this.store = t.createInstance(ak, this._referenceImageStore, ay._.Pose);
  }
}
aq = en.Cg(
  [
    en.Qj(1, k._),
    en.Sn("design:type", Function),
    en.Sn("design:paramtypes", [
      typeof ReferenceImageStore === "undefined" ? Object : ReferenceImageStore,
      k._ === undefined ? Object : k._,
    ]),
  ],
  aq,
);
function useA0(e) {
  const { referenceLevel, sliderInfo } = e;
  const [a, setA] = p.useState(false);
  const n = p.useCallback(
    (t) => {
      var i;
      if (!(Array.isArray(t) || (i = e.onUpdateReferenceLevel) == null)) {
        i.call(e, t);
      }
    },
    [e],
  );
  const o = p.useCallback(
    (t) => {
      var i;
      if (!(Array.isArray(t) || (i = e.onAfterChange) == null)) {
        i.call(e, t);
      }
    },
    [e],
  );
  const c = p.useCallback((e) => {
    setA(e);
  }, []);
  const l = p.useCallback(() => {
    setA(true);
  }, []);
  return s.jsx("div", {
    className: "interact-k3nQ4g",
    children: s.jsx(useAa, {
      referenceLevel,
      isActive: a,
      sliderInfo,
      onAfterValueChange: o,
      onChange: n,
      onReferenceLevelVisibleChange: c,
      onUpdateActiveOption: l,
    }),
  });
}
class a1 extends iE {
  recognize(e) {
    return er
      ._(function* () {
        yield this.preRecognize(e);
        return {
          recognizeResult: f.Gj.Success,
        };
      })
      .call(this);
  }
  preRecognize(e) {
    return Promise.resolve();
  }
  constructor(e) {
    super(e);
  }
}
a1 = en.Cg(
  [
    en.Qj(0, k._),
    en.Sn("design:type", Function),
    en.Sn("design:paramtypes", [k._ === undefined ? Object : k._]),
  ],
  a1,
);
class a4 extends iZ {
  get isRecognized() {
    return false;
  }
  initWithImagineParams(e, t) {
    let i;
    let a;
    let r;
    let n;
    if (
      ((n = e.model) == null ? undefined : n.abilityName) ===
      ez.DABlendAbilityName.StyleReference
    ) {
      this.originUri =
        (i = (a = e.model.styleReference.image.imageUri) != null ? a : t) !=
        null
          ? i
          : "";
      this.originUrl =
        (r = e.model.styleReference.image.imageUrl) != null ? r : "";
      this.referenceLevel = Math.floor(
        e.model.styleReference.styleWeight * X.S0.max,
      );
    }
  }
  getReferImageParams() {
    let e;
    let t;
    const i = super.getCommonParam();
    const imageUri = this.originUri
      ? this.originUri
      : (e = this.referenceImageStore.currentImage) == null
        ? undefined
        : e.uri;
    const r = this.originUrl
      ? this.originUrl
      : (t = this.referenceImageStore.currentImage) == null
        ? undefined
        : t.url;
    el.X3(imageUri, "originUri is empty");
    el.X3(r, "originUrl is empty");
    return H._(
      {
        model: {
          abilityName: ez.DABlendAbilityName.StyleReference,
          styleReference: {
            styleWeight: this.referenceLevel / X.S0.max,
            image: {
              imageUri,
              imageUrl: r,
            },
          },
        },
      },
      i,
    );
  }
  updateReferenceLevel(e) {
    this.referenceLevel = e;
  }
  reset() {
    super.reset();
    this.referenceLevel = Math.round(X.S0.default);
  }
  constructor(e) {
    super(e);
    this.referenceImageStore = e;
    this.referenceLevel = X.S0.default;
    eM.Gn(this);
  }
}
en.Cg([eM.sH], a4.prototype, "referenceLevel", undefined);
en.Cg(
  [
    eM.XI.bound,
    en.Sn("design:type", Function),
    en.Sn("design:paramtypes", [
      typeof AbilityReferenceModalParams === "undefined"
        ? Object
        : AbilityReferenceModalParams,
      String,
    ]),
    en.Sn("design:returntype", undefined),
  ],
  a4.prototype,
  "initWithImagineParams",
  null,
);
en.Cg(
  [
    eM.XI.bound,
    en.Sn("design:type", Function),
    en.Sn("design:paramtypes", [Number]),
    en.Sn("design:returntype", undefined),
  ],
  a4.prototype,
  "updateReferenceLevel",
  null,
);
en.Cg(
  [
    eM.XI.bound,
    en.Sn("design:type", Function),
    en.Sn("design:paramtypes", []),
    en.Sn("design:returntype", undefined),
  ],
  a4.prototype,
  "reset",
  null,
);
class a2 extends iA {
  handleAbilityChange(e) {
    return er
      ._(function* () {
        const t = yield this.recognizer.recognize(e.uri);
        if (e.uri) {
          this.store.setOriginUri(e.uri);
        }
        this.store.setOriginUrl(e.url);
        return t.recognizeResult;
      })
      .call(this);
  }
  postProcess(e) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(H._({}, e));
      }, 0);
    });
  }
  _createReferenceImageComponent() {
    return d.PA((e) =>
      s.jsx(s.Fragment, {
        children: e.children,
      }),
    );
  }
  _reportReferenceLevel() {
    const e = this._containerService.createInstance(eN.f);
    e.setParams({
      action: "adjust_reference_level",
      referenceSet: this.abilityType,
    });
    e.report();
  }
  _createInteractComponent() {
    return d.PA(() =>
      s.jsx(useA0, {
        sliderInfo: X.S0,
        referenceLevel: this.store.referenceLevel,
        onUpdateReferenceLevel: this._updateReferenceLevel,
      }),
    );
  }
  constructor(e, t) {
    super();
    this._referenceImageStore = e;
    this._containerService = t;
    this.name = l.Ay.t("web_reference_element_style", {}, "风格参考");
    this.abilityType = f.gP.StyleReference;
    this.supportsAsyncFlow = true;
    this.interactComponent = this._createInteractComponent();
    this.referenceImageComponent = this._createReferenceImageComponent();
    this._updateReferenceLevel = (e) => {
      this.store.updateReferenceLevel(e);
      this._reportReferenceLevel();
    };
    this.recognizer = this._containerService.createInstance(a1);
    this.store = this._containerService.createInstance(
      a4,
      this._referenceImageStore,
    );
  }
}
a2 = en.Cg(
  [
    en.Qj(1, k._),
    en.Sn("design:type", Function),
    en.Sn("design:paramtypes", [
      typeof ReferenceImageStore === "undefined" ? Object : ReferenceImageStore,
      k._ === undefined ? Object : k._,
    ]),
  ],
  a2,
);
class a3 extends e1 {
  execute() {
    return er
      ._(function* () {
        this._loadAbilityConfig(this._displayAbilities);
        this._loadAbilityPlugins();
        return Promise.resolve();
      })
      .call(this);
  }
  dispose() {
    super.dispose();
  }
  _loadAbilityPlugins() {
    this._loadFaceGanAbilityPlugin();
  }
  _loadFaceGanAbilityPlugin() {}
  _loadAbilityConfig(e) {
    const t = this._createAbilityConfigList(e);
    this._abilityManager.registerAbilityConfigs(t);
    this._imageStore.updateAbilityConfigs(t);
    return t;
  }
  _createAbilityConfigList(e) {
    const t = [];
    S(e).forEach((e) => {
      switch (e) {
        case f.gP.ByteEdit:
          t.push(this._containerService.createInstance(av, this._imageStore));
          break;
        case f.gP.BgPaint:
          t.push(this._containerService.createInstance(iG, this._imageStore));
          break;
        case f.gP.FaceGan:
          t.push(this._containerService.createInstance(aH, this._imageStore));
          break;
        case f.gP.IpKeep:
          t.push(this._containerService.createInstance(aK, this._imageStore));
          break;
        case f.gP.StyleReference:
          t.push(this._containerService.createInstance(a2, this._imageStore));
          break;
        case f.gP.ControlNetCanny:
          t.push(this._containerService.createInstance(aD, this._imageStore));
          break;
        case f.gP.ControlNetDepth:
          t.push(this._containerService.createInstance(az, this._imageStore));
          break;
        case f.gP.ControlNetPose:
          t.push(this._containerService.createInstance(aq, this._imageStore));
      }
    });
    return t;
  }
  constructor(e, t, i, a, r, n) {
    super();
    this._displayAbilities = e;
    this._abilityManager = t;
    this._imageStore = i;
    this._conflictParams = a;
    this._containerService = r;
    this._imcConfigService = n;
  }
}
a3 = en.Cg(
  [
    en.Qj(4, k._),
    en.Qj(5, e0.R),
    en.Sn("design:type", Function),
    en.Sn("design:paramtypes", [
      Array,
      typeof AbilityManager === "undefined" ? Object : AbilityManager,
      typeof ReferenceImageStore === "undefined" ? Object : ReferenceImageStore,
      typeof ConflictParams === "undefined" ? Object : ConflictParams,
      k._ === undefined ? Object : k._,
      e0.R === undefined ? Object : e0.R,
    ]),
  ],
  a3,
);
class a5 extends e1 {
  execute() {
    return er
      ._(function* () {
        this._referenceImageStore.setImageContainerId(this._imageContainerId);
        return Promise.resolve();
      })
      .call(this);
  }
  constructor(e, t) {
    super();
    this._referenceImageStore = e;
    this._imageContainerId = t;
  }
}
class a9 extends e1 {
  execute() {
    return er
      ._(function* () {
        this._params.pluginList.forEach((e) => {
          e.start();
        });
        this._params.preloadManager.preload();
        return Promise.resolve();
      })
      .call(this);
  }
  constructor(e) {
    super();
    this._params = e;
  }
}
class a8 extends e1 {
  execute() {
    return er
      ._(function* () {
        if (this._conflictParams.existAbilityList.length !== 0) {
          this._conflictParams.existAbilityList.forEach((e) => {
            var t;
            if (e.abilityName === ez.DABlendAbilityName.FaceGan) {
              if (
                (t = this._imageStore.abilityConfigs.find(
                  (e) => e.abilityType === f.gP.FaceGan,
                )) != null
              ) {
                t.updateAbilityName(
                  l.Ay.t(
                    "web_dre_t2i_reference_option_more_faces",
                    {},
                    "人像合影",
                  ),
                );
              }
            }
          });
          return Promise.resolve();
        }
      })
      .call(this);
  }
  constructor(e, t) {
    super();
    this._imageStore = e;
    this._conflictParams = t;
  }
}
class a6 {
  run() {
    return er
      ._(function* () {
        for (const e of this._taskList) {
          yield e.execute();
        }
      })
      .call(this);
  }
  registerTask(e) {
    this._taskList.push(e);
  }
  constructor() {
    this._taskList = [];
    this._taskList = [];
  }
}
const a7 = require("aF");
class re {
  get currentAbilityConfig() {
    return (
      (this.currentAbilityType &&
        this.abilityConfigs.find(
          (e) => e.abilityType === this.currentAbilityType,
        )) ||
      null
    );
  }
  get isProcessing() {
    return this.loading;
  }
  get imageRatioText() {
    let e;
    return l.Ay.t(
      "web_new_reference_setting_aspect_ratio",
      {
        aspect_ratio: (e = this.aspectRatio) != null ? e : "",
      },
      "生图比例 {aspect_ratio}",
    );
  }
  setImageContainerId(e) {
    this.imageContainerId = e;
  }
  _updateCustomDimension(e) {
    if (e) {
      let t;
      const i = a7.z(e) ? tM.i(e) : undefined;
      if (i) {
        const { width, height } =
          (t = this.aspectRatioImageSizeMap[i]) != null ? t : P.Pn[i];
        this.setDimension(width, height);
        this.setIsSameAspectRatioWithImage(
          this.currentImageRatio === this.customWidth / this.customHeight,
        );
      }
    }
  }
  constructor() {
    this.imageUploadPromise = null;
    this.currentImage = null;
    this.currentImageRatio = 1;
    this.currentAbilityType = null;
    this.referenceStrength = 0.5;
    this.abilityConfigs = [];
    this.containerSize = {
      width: 0,
      height: 0,
    };
    this.imageContainerId = "";
    this.isLocked = true;
    this.customWidth = 512;
    this.customHeight = 512;
    this.aspectRatio = undefined;
    this.loading = false;
    this.isRatioSelectorVisible = false;
    this.disableRatioSetting = false;
    this.showRatioSettingWarning = false;
    this.isSameAspectRatioWithImage = false;
    this.imageRangeConfig = {
      minLength: P.z,
      maxLength: P.du,
      maxPixelNum: P.zt,
    };
    this.aspectRatioImageSizeMap = {};
    this.uiConfig = undefined;
    this.updateAbilityConfigs = (e) => {
      this.abilityConfigs = e;
    };
    this.setCurrentAbilityType = (e) => {
      this.currentAbilityType = e;
    };
    this.setReferenceStrength = (e) => {
      this.referenceStrength = e;
    };
    this.setAspectRatio = (e) => {
      this.aspectRatio = e;
      this._updateCustomDimension(e);
    };
    this.setDisableRatioSetting = (e) => {
      this.disableRatioSetting = e;
    };
    this.setDimension = (e, t) => {
      this.customWidth = e;
      this.customHeight = t;
    };
    this.setAspectRatioImageSizeMap = (e) => {
      this.aspectRatioImageSizeMap = e;
    };
    this.setImageRangeConfig = (e) => {
      this.imageRangeConfig = e;
    };
    this.setImageUploadPromise = (e) => {
      this.imageUploadPromise = e;
    };
    this.setCurrentImage = (e) => {
      this.currentImage = e;
      this.currentImageRatio = e.width / e.height;
    };
    this.setLoading = (e) => {
      this.loading = e;
    };
    this.toggleRatioSelector = () => {
      this.isRatioSelectorVisible = !this.isRatioSelectorVisible;
    };
    this.setLock = (e) => {
      this.isLocked = e;
      if (!e) {
        this.setIsSameAspectRatioWithImage(false);
      }
    };
    this.setContainerSize = (e) => {
      this.containerSize = e;
    };
    this.setUiConfig = (e) => {
      this.uiConfig = e;
    };
    this.setShowRatioSettingWarning = (e) => {
      this.showRatioSettingWarning = e;
    };
    this.setIsSameAspectRatioWithImage = (e) => {
      this.isSameAspectRatioWithImage = e;
    };
    eM.l_(this);
  }
}
en.Cg(
  [eM.EW, en.Sn("design:type", Object), en.Sn("design:paramtypes", [])],
  re.prototype,
  "currentAbilityConfig",
  null,
);
en.Cg(
  [eM.EW, en.Sn("design:type", Boolean), en.Sn("design:paramtypes", [])],
  re.prototype,
  "isProcessing",
  null,
);
en.Cg(
  [eM.EW, en.Sn("design:type", String), en.Sn("design:paramtypes", [])],
  re.prototype,
  "imageRatioText",
  null,
);
const imageContainerId = "reference-image-container";
const ri = d.PA(function (e) {
  let t;
  let i;
  let a;
  let pluginList;
  let n;
  let o;
  let c;
  let l;
  const {
    image,
    conflictParams,
    onSave,
    displayAbilities,
    initialBlendParams,
    uiConfig,
  } = e;
  t = {
    image,
    displayAbilities,
    initialBlendParams,
    conflictParams,
    imageContainerId,
    uiConfig,
    onSave,
  };
  i = g.h(k._);
  a = p.useMemo(() => {
    var e;
    var abilityManager;
    var referenceImageLoader;
    var preloadManager;
    e = i.createInstance(re);
    abilityManager = i.createInstance(eb, t.imageContainerId);
    referenceImageLoader = i.createInstance(eQ, e);
    preloadManager = i.createInstance(eB, e);
    return {
      store: e,
      abilityManager,
      referenceImageLoader,
      preloadManager,
    };
  }, [i, t]);
  pluginList = p.useMemo(() => [i.createInstance(eZ, a.store)], []);
  n = p.useMemo(
    () =>
      ((e, t, i) => {
        const { store, abilityManager } = t;
        const abilitySaveController_1 = e.createInstance(
          ex,
          abilityManager,
          store,
          i.onSave,
        );
        return {
          abilitySelectController: e.createInstance(
            ek,
            i.imageContainerId,
            store,
            abilityManager,
            abilitySaveController_1,
          ),
          abilitySaveController: abilitySaveController_1,
          imageRatioController: e.createInstance(eL, store),
        };
      })(i, a, t),
    [],
  );
  o = p.useMemo(() => H._({}, a, n), []);
  c = p.useMemo(() => {
    var e;
    var initialBlendParams_1;
    var n;
    var s;
    var c;
    var l;
    var u;
    var g;
    var d;
    var h;
    e = S(t.displayAbilities);
    initialBlendParams_1 = ((e, t) => {
      const { initialBlendParams } = e;
      const a =
        initialBlendParams == null ? undefined : initialBlendParams.model;
      if (!a) {
        return initialBlendParams;
      }
      const r = ea.G(a);
      if (t.includes(r)) {
        return initialBlendParams;
      }
      return Y._(H._({}, initialBlendParams), {
        model: undefined,
      });
    })(t, e);
    n = i.createInstance(a6);
    s = i.createInstance(e5, {
      image: t.image,
      imageStore: o.store,
      imageContainerId: t.imageContainerId,
      referenceImageLoader: o.referenceImageLoader,
      abilitySelectController: o.abilitySelectController,
      initialBlendParams: initialBlendParams_1,
      uiConfig: t.uiConfig,
      isReplace: false,
    });
    c = i.createInstance(a3, e, o.abilityManager, o.store, t.conflictParams);
    l = i.createInstance(e4, o.store, t.conflictParams);
    u = i.createInstance(
      e2,
      o.abilitySelectController,
      o.store,
      t.conflictParams,
      initialBlendParams_1,
    );
    g = i.createInstance(a8, o.store, t.conflictParams);
    d = i.createInstance(a5, o.store, t.imageContainerId);
    h = i.createInstance(a9, {
      pluginList,
      preloadManager: o.preloadManager,
    });
    n.registerTask(c);
    n.registerTask(l);
    n.registerTask(g);
    n.registerTask(s);
    n.registerTask(d);
    n.registerTask(h);
    n.registerTask(u);
    return n;
  }, []);
  l = p.useCallback(() => {
    c.run();
  }, []);
  p.useEffect(() => {
    l();
  }, [l]);
  const f = o;
  const { store, abilitySelectController, abilitySaveController } = f;
  const { availableSave, invalidHoverText, saving } =
    abilitySaveController.store;
  return s.jsx(ei, {
    imageContainerId,
    uiConfig,
    currentImage: store.currentImage,
    currentAbilityConfig: store.currentAbilityConfig,
    currentAbilityType: store.currentAbilityType,
    dimensionControl: f.imageRatioController.dimensionControl,
    abilityConfigs: store.abilityConfigs,
    availableSave,
    saving,
    invalidHoverText,
    onAbilityChange: abilitySelectController.handleChangeAbility,
    onSave: abilitySaveController.save,
  });
});
function ra(e) {
  let t;
  let i;
  const {
    containerService,
    image,
    initialBlendParams,
    conflictParams,
    onSave,
    displayAbilities,
    onCancel,
    uiConfig,
  } = e;
  const title =
    (t = uiConfig == null ? undefined : uiConfig.modalTitle) != null
      ? t
      : l.Ay.t("web_reference_edit_popup_title", {}, "参考图");
  return (i = o.A.confirm({
    ariaModal: !navigator.userAgent.includes("Chrome/131"),
    wrapClassName: "reference-imagine-modal",
    title,
    footer: null,
    simple: false,
    escToExit: false,
    icon: null,
    className: "reference-imagine-modal-container-mYQL_S",
    closeIcon: s.jsx(u.gzW, {
      role: "button",
      tabIndex: 0,
      "aria-label": l.Ay.t("dreamina_web_common_close"),
      onKeyDown: c.q,
    }),
    closable: true,
    maskClosable: false,
    onCancel: () => {
      if (onCancel != null) {
        onCancel();
      }
    },
    content: s.jsx(g.Z, {
      instantiationService: containerService,
      children: s.jsx(ri, {
        image,
        conflictParams,
        displayAbilities,
        containerService,
        initialBlendParams,
        uiConfig,
        onSave: (e) => {
          if (i != null) {
            i.close();
          }
          i = undefined;
          if (onSave != null) {
            onSave(e);
          }
        },
      }),
    }),
  }));
}
export { ra as E };
