import a from "oa";
import r from "z8";
import o from "ED";
import i from "xm3";
import s from "wF";
import l from "V99";
import c from "bk";
import d from "bT";
import _u from "xb";
import m from "Ev";
import v from "PSJ";
import h from "v5";
import f from "qa";
import x from "Qey";
import _ from "gC";
import g from "n3";
import b from "UW";
import j from "O7U";
import animationUrl from "dzx";
import imageUrl from "Rk";
import M from "LVe";
import { y as y_1 } from "./module-HWv.js";
import N from "G6S";
import S from "yw";
import V from "Du8";
import F from "CkM";
import D from "Hvt";
import $ from "gwU";
import O from "ErZ";
import H from "ekv";
import B from "Akd";
import Z from "n3Q";
import K from "acN";
import G from "Hr";
import U from "r6q";
import q from "dC";
import X from "Pp";
import J from "MMW";
import "Vx";
import Y from "Ix";
import ee from "cO";
import eo from "qO";
import ed from "vaY";
import eu from "HK";
import { C as C_1 } from "./module-Kvf.js";
import em from "bR6";
import ev from "eVu";
import eh from "let";
import ef from "OdF";
import e_ from "yeG";
import ej from "RCIu";
import eC from "fSn";
import { P as P_1 } from "./module-j8j.js";
const A = d.memo(function (e) {
  const title = d.useMemo(
    () => x.Ay.t("multiframe_guide", {}, "支持一镜到底"),
    [],
  );
  const description = d.useMemo(
    () => x.Ay.t("multiframe_guide_2", {}, "连续的镜头，生成效果更佳"),
    [],
  );
  return r.jsx(
    M.K,
    a._(
      {
        imageUrl,
        animationUrl,
        title,
        description,
      },
      e,
    ),
  );
});
const C = o.PA(function (e) {
  const { index, lastFrame } = e;
  const o = f._(e, ["index", "lastFrame"]);
  const { isSegmentLocked = false } = lastFrame != null ? lastFrame : {};
  const { referenceRenderProps } = o;
  const { videoGeneratorManager } = s.h(i.V);
  const { featureManager, multiFramesManager } = videoGeneratorManager;
  const {
    data: { isFirstLastFramesEngaged, isMultiFramesEngaged },
  } = featureManager;
  const {
    metadata: { acceptedFileTypes },
    data: { hasFrameResources },
    importFramesFromLocal,
  } = multiFramesManager;
  const N = d.useMemo(
    () =>
      x.Ay.t(
        "multiframe_frame",
        {
          string0: "".concat(index),
        },
        "第".concat(index, "帧"),
      ),
    [index],
  );
  const P = d.useMemo(
    () => ({
      content: x.Ay.t(
        "multiframe_frame_upload",
        {
          string0: "".concat(index),
        },
        "上传第".concat(index, "帧"),
      ),
    }),
    [index],
  );
  const T = d.useMemo(
    () =>
      r.jsx(_.I, {
        component: null,
        guardFileDrop: true,
        source: g.HH.Upload,
        children: r.jsx(
          b.L,
          c._(a._({}, o), {
            accept: acceptedFileTypes,
            className: _u("upload-kNtcTZ", {
              "locked-x5sKRd": isSegmentLocked,
            }),
            disabled: !acceptedFileTypes || isSegmentLocked,
            label: N,
            multiple: true,
            onChange: importFramesFromLocal,
          }),
        ),
      }),
    [o, acceptedFileTypes, isSegmentLocked, N, importFramesFromLocal],
  );
  if (
    d.useMemo(
      () =>
        isFirstLastFramesEngaged ||
        (isMultiFramesEngaged && !hasFrameResources),
      [isFirstLastFramesEngaged, isMultiFramesEngaged, hasFrameResources],
    )
  ) {
    return r.jsx(A, {
      children: T,
    });
  }
  return r.jsx(
    j.t,
    c._(
      a._(
        {
          referenceRenderProps,
        },
        P,
      ),
      {
        children: T,
      },
    ),
  );
});
const P = (e) => {
  e.preventDefault();
  e.stopPropagation();
};
const T = o.PA(function (e) {
  const { imageResource, referenceRenderProps = {} } = e;
  const o = f._(e, ["imageResource", "referenceRenderProps"]);
  const { visualIndex = 0 } = referenceRenderProps;
  const { videoGeneratorManager } = s.h(i.V);
  const {
    data: { resourceAuditPolicy },
    metadata: { lastFrameVisible, acceptedImageFileTypes },
    referenceAuditManager,
    removeFirstFrameImage,
    removeLastFrameImage,
    importFirstFrameImageFromLocal,
    importLastFrameImageFromLocal,
  } = videoGeneratorManager;
  const { isPreviewLoading, auditTooltipContent, auditIcon, auditLabel } = y_1({
    referenceAuditManager,
    resource: imageResource,
    resourceAuditPolicy,
  });
  const T = visualIndex === 0;
  const R = d.useMemo(() => {
    if (lastFrameVisible) {
      if (T) {
        return x.Ay.t("web_new_video_upload_first_frame", {}, "首帧");
      }
      return x.Ay.t("web_new_video_upload_last_frame", {}, "尾帧");
    }
    return x.Ay.t("web_reference_edit_popup_title", {}, "参考图");
  }, [lastFrameVisible, T]);
  const onDropFromLocal = d.useCallback(
    (e) => {
      if (T) {
        importFirstFrameImageFromLocal(e);
      } else {
        importLastFrameImageFromLocal(e);
      }
    },
    [T, importFirstFrameImageFromLocal, importLastFrameImageFromLocal],
  );
  const onRemove = T ? removeFirstFrameImage : removeLastFrameImage;
  return r.jsx(j.t, {
    resource: imageResource,
    label: R,
    content: auditTooltipContent,
    referenceRenderProps,
    children: r.jsx(
      N.d,
      c._(
        a._(
          {
            imageResource,
            accept: acceptedImageFileTypes,
            loading: isPreviewLoading,
            icon: auditIcon,
            label: auditLabel,
            referenceRenderProps,
          },
          o,
        ),
        {
          onRemove,
          onDropFromLocal,
          onContextMenu: P,
        },
      ),
    ),
  });
});
const R = o.PA(function (e) {
  const { referenceRenderProps = {} } = e;
  const { visualIndex = 0 } = referenceRenderProps;
  const { videoGeneratorManager } = s.h(i.V);
  const {
    metadata: {
      lastFrameVisible,
      lastFrameDisabled,
      lastFrameTooltipProps,
      firstFrameTooltipProps,
      acceptedImageFileTypes,
    },
    importFirstFrameImageFromLocal,
    importLastFrameImageFromLocal,
  } = videoGeneratorManager;
  const y = visualIndex === 0;
  const k = d.useMemo(() => {
    if (lastFrameVisible) {
      if (y) {
        return x.Ay.t("web_new_video_upload_first_frame", {}, "首帧");
      }
      return x.Ay.t("web_new_video_upload_last_frame", {}, "尾帧");
    }
  }, [lastFrameVisible, y]);
  const disabled = d.useMemo(
    () => !y && lastFrameDisabled,
    [lastFrameDisabled, y],
  );
  const A = y ? importFirstFrameImageFromLocal : importLastFrameImageFromLocal;
  const C = d.useMemo(() => {
    if (y) {
      return firstFrameTooltipProps;
    }
    return lastFrameTooltipProps;
  }, [y, firstFrameTooltipProps, lastFrameTooltipProps]);
  return r.jsx(
    j.t,
    c._(
      a._(
        {
          referenceRenderProps,
        },
        C,
      ),
      {
        children: r.jsx(_.I, {
          component: null,
          guardFileDrop: true,
          source: g.HH.Upload,
          children: r.jsx(
            b.L,
            a._(
              {
                accept: acceptedImageFileTypes,
                label: k,
                disabled,
                onChange: A,
              },
              e,
            ),
          ),
        }),
      },
    ),
  );
});
const I = o.PA(function () {
  const { videoGeneratorManager } = s.h(i.V);
  const {
    metadata: { lastFrameVisible, lastFrameDisabled },
    swapReferenceImages,
  } = videoGeneratorManager;
  const { collapsed } = d.useContext(V.R);
  const l = d.useMemo(() => r.jsx(S.hRh, {}), []);
  const c = d.useCallback(
    (e) => {
      e.stopPropagation();
      swapReferenceImages();
    },
    [swapReferenceImages],
  );
  if (m.H8 || lastFrameVisible) {
    return r.jsx(F.M, {
      className: _u("swap-button-V7BeR8", {
        "collapsed-aHHTE1": collapsed,
        "hidden-sdUqoh": !lastFrameVisible,
      }),
      disabled: lastFrameDisabled,
      icon: l,
      onClick: c,
    });
  }
  return null;
});
const firstLastFrames = o.PA(function (e) {
  const { videoGeneratorManager } = s.h(i.V);
  const {
    metadata: { lastFrameVisible, isCurrentModelSupportMultiFrames },
    data: { firstFrameImage, lastFrameImage },
  } = videoGeneratorManager;
  const f = d.useMemo(() => r.jsx(R, {}, "upload"), []);
  const x = d.useMemo(
    () =>
      r.jsx(
        C,
        {
          index: 3,
        },
        "frame-upload",
      ),
    [],
  );
  const _ = d.useMemo(() => {
    if (firstFrameImage) {
      return r.jsx(
        T,
        {
          imageResource: firstFrameImage,
        },
        firstFrameImage.id,
      );
    }
    return f;
  }, [firstFrameImage, f]);
  const g = d.useMemo(() => {
    if (lastFrameImage) {
      return r.jsx(
        T,
        {
          imageResource: lastFrameImage,
        },
        lastFrameImage.id,
      );
    }
    return f;
  }, [lastFrameImage, f]);
  const bRef = d.useRef(lastFrameVisible);
  d.useEffect(() => {
    bRef.current = lastFrameVisible;
  }, [lastFrameVisible]);
  return r.jsxs(
    v.B,
    c._(a._({}, e), {
      children: [
        r.jsx(h.V, {
          children: _,
        }),
        r.jsx(I, {}),
        m.H8 || lastFrameVisible
          ? r.jsxs(h.V, {
              visualIndexOffset: 1,
              className: _u("last-frame-FxU_Hl", {
                "exit-active-PDk5u2":
                  !lastFrameVisible && bRef.current !== lastFrameVisible,
                "exit-done-P7isKh": !lastFrameVisible,
              }),
              children: [
                lastFrameVisible ? g : null,
                lastFrameVisible &&
                lastFrameImage &&
                isCurrentModelSupportMultiFrames
                  ? x
                  : null,
              ],
            })
          : null,
      ],
    }),
  );
});
const sortingStrategy = (e) => {
  var { index, activeIndex, overIndex } = e;
  return {
    x:
      index >= Math.min(activeIndex, overIndex) &&
      index <= Math.max(activeIndex, overIndex)
        ? 112 * Math.sign(activeIndex - overIndex)
        : 0,
    y: 0,
    scaleX: 1,
    scaleY: 1,
  };
};
const z = (e) => {
  e.preventDefault();
  e.stopPropagation();
};
const L = o.PA(function (e) {
  const { frame, index, previousFrame } = e;
  const l = f._(e, ["frame", "index", "previousFrame"]);
  const { referenceRenderProps } = l;
  const { resource, isSegmentLocked = false } = frame;
  const { isSegmentLocked: isSegmentLocked_1 = false } =
    previousFrame != null ? previousFrame : {};
  const { videoGeneratorManager } = s.h(i.V);
  const { referenceAuditManager } = videoGeneratorManager;
  const {
    data: { resourceAuditPolicy },
  } = videoGeneratorManager;
  const { multiFramesManager } = videoGeneratorManager;
  const {
    metadata: { acceptedFileTypes, framesSortable },
    removeReferenceResource,
    dropFrameFromLocal,
  } = multiFramesManager;
  const { isPreviewLoading, auditTooltipContent, auditIcon, auditLabel } = y_1({
    referenceAuditManager,
    resource,
    resourceAuditPolicy,
  });
  const V = d.useMemo(
    () => isSegmentLocked || isSegmentLocked_1,
    [isSegmentLocked, isSegmentLocked_1],
  );
  const F = d.useMemo(
    () =>
      x.Ay.t(
        "multiframe_frame",
        {
          string0: "".concat(index),
        },
        "第".concat(index, "帧"),
      ),
    [index],
  );
  const I = d.useCallback(
    (e) => dropFrameFromLocal(e, index),
    [dropFrameFromLocal, index],
  );
  const E = d.useMemo(
    () =>
      a._(
        {
          accept: acceptedFileTypes,
          className: _u("frame-WHlOst", {
            "locked-j4EqCu": V,
          }),
          onRemove: V ? undefined : removeReferenceResource,
          onDropFromLocal: V ? undefined : I,
          loading: isPreviewLoading,
          icon: auditIcon,
          label: auditLabel,
        },
        l,
      ),
    [
      acceptedFileTypes,
      V,
      removeReferenceResource,
      I,
      isPreviewLoading,
      auditIcon,
      auditLabel,
      l,
    ],
  );
  const D = d.useMemo(() => {
    if (resource.type === "image") {
      return r.jsx(
        N.d,
        c._(
          a._(
            {
              imageResource: resource,
            },
            E,
          ),
          {
            onContextMenu: z,
          },
        ),
      );
    }
    return r.jsx(
      $.L,
      a._(
        {
          videoResource: resource,
        },
        E,
      ),
    );
  }, [resource, E]);
  const L = d.useCallback(
    () =>
      d.cloneElement(D, {
        onRemove: undefined,
      }),
    [D],
  );
  return r.jsx(O.g, {
    item: resource,
    disabled: framesSortable,
    renderDragOverlay: L,
    sortingStrategy,
    children: r.jsx(j.t, {
      resource,
      label: F,
      content: auditTooltipContent,
      referenceRenderProps,
      children: D,
    }),
  });
});
const Q = o.PA(function (e) {
  const { frame, index, onVisibleChange } = e;
  const { videoGeneratorManager } = s.h(i.V);
  const {
    reportManager: { reportEnterMultiFramesPrompt },
    multiFramesManager,
  } = videoGeneratorManager;
  const {
    metadata: {
      frameTransitionDurationRange,
      frameTransitionDurationStep,
      frameTransitionPromptMaxLength,
    },
    changeFrameTransitionPrompt,
    changeFrameTransitionDuration,
    applyDurationToFrameTransitions,
  } = multiFramesManager;
  const { prompt, durationMs } = frame;
  const [min, max] = frameTransitionDurationRange;
  const prefix = d.useMemo(() => r.jsx(S.ffy, {}), []);
  const M = d.useCallback(
    (e) => K.A(Number.isNaN(e) ? 0 : e, ...frameTransitionDurationRange),
    [frameTransitionDurationRange],
  );
  const formatter = d.useCallback(
    (e, t) => {
      var n = typeof e === "string" ? Number.parseFloat(e) : e;
      if (t.userTyping) {
        return t.input;
      }
      return "".concat(M(n), "s");
    },
    [M],
  );
  const parser = d.useCallback(
    (e) =>
      M(
        Math.floor(Number.parseFloat(e) / frameTransitionDurationStep) *
          frameTransitionDurationStep,
      ),
    [M, frameTransitionDurationStep],
  );
  const w = d.useCallback(
    (e) => changeFrameTransitionPrompt(e, index),
    [index, changeFrameTransitionPrompt],
  );
  const N = d.useCallback(
    (e) => changeFrameTransitionDuration(e * U.K, index),
    [index, changeFrameTransitionDuration],
  );
  const P = d.useMemo(() => r.jsx(S.bzS, {}), []);
  const T = d.useCallback(
    () => applyDurationToFrameTransitions(durationMs),
    [durationMs, applyDurationToFrameTransitions],
  );
  const onKeyDown = d.useCallback(
    (e) => {
      if (e.key === "Escape") {
        if (onVisibleChange != null) {
          onVisibleChange(false);
        }
        return;
      }
    },
    [onVisibleChange],
  );
  const onMaxLengthExceeded = d.useCallback(() => {
    G.l.warning(
      x.Ay.t(
        "web_new_character_tts_text_reach_limit",
        {
          number: frameTransitionPromptMaxLength,
        },
        "文本达到{number}字上限",
      ),
    );
  }, [frameTransitionPromptMaxLength]);
  const F = d.useCallback(() => {
    if (onVisibleChange != null) {
      onVisibleChange(false);
    }
  }, [onVisibleChange]);
  return r.jsxs("div", {
    className: "panel-qswAgd",
    children: [
      r.jsx("div", {
        className: "header-wTZzLq",
        children: r.jsx("span", {
          className: "title-d9OorM",
          children: x.Ay.t("multiframe_prompt", {}, "运镜描述"),
        }),
      }),
      r.jsx("div", {
        className: "content-AWb_Xj",
        children: r.jsx(q.X, {
          autoFocus: true,
          maxLength: frameTransitionPromptMaxLength,
          placeholder: x.Ay.t(
            "multiframe_prompt_default",
            {},
            "请描述镜头之间的转换画面或运动方式",
          ),
          value: prompt,
          onChange: w,
          onKeyDown,
          onMaxLengthExceeded,
          onBlur: reportEnterMultiFramesPrompt,
        }),
      }),
      r.jsxs("div", {
        className: "footer-Bgysox",
        children: [
          r.jsxs("div", {
            className: "duration-config-omls0Z",
            children: [
              r.jsx(j.t, {
                content: x.Ay.t("multiframe_timeset", {}, "选择运镜时长"),
                children: r.jsx(J.m, {
                  value: durationMs / U.K,
                  prefix,
                  className: "duration-input-vOYujz",
                  min,
                  max,
                  step: frameTransitionDurationStep,
                  formatter,
                  parser,
                  onChange: N,
                  onKeyDown,
                }),
              }),
              r.jsx("span", {
                children: "-",
              }),
              r.jsx(j.t, {
                content: x.Ay.t(
                  "multiframe_time_applyall_hover",
                  {},
                  "将运镜时长应用至全部",
                ),
                children: r.jsx(X.b, {
                  icon: P,
                  onClick: T,
                  children: x.Ay.t(
                    "multiframe_time_applyall_icon",
                    {},
                    "应用至全部",
                  ),
                }),
              }),
            ],
          }),
          r.jsx(X.b, {
            type: "primary",
            disabled: !prompt,
            className: "confirm-button-b9Ul3M",
            onClick: F,
            children: x.Ay.t("web_common_popup_btn_confirm", {}, "确认"),
          }),
        ],
      }),
    ],
  });
});
const et = o.PA(function (e) {
  const { frame } = e;
  const { resource, segmentVideo } = frame;
  const oRef = d.useRef(null);
  const onPause = d.useCallback(() => {
    var oRef_current = oRef.current;
    if (oRef_current && segmentVideo) {
      if (resource.type === "video") {
        oRef_current.currentTime = resource.duration;
      }
      oRef_current.play();
    }
  }, [segmentVideo, resource]);
  const sRef = d.useRef(onPause);
  d.useEffect(() => sRef.current(), []);
  if (segmentVideo) {
    return r.jsxs("div", {
      className: "video-container-f9fMww",
      children: [
        r.jsx("video", {
          ref: oRef,
          src: ee.m(segmentVideo.url, null, {
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
              "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1-lZwWFJqQmtXRXBzWTNrNWFtSXlO$EJh$np$d1R*Z*tiR0p0$m5sWld*SjJZMms1-0dKd$$te*pi$FZvWWtNNWJWcFhSakJr$0$wc1kzaz$Nb%Z-$W14aW$%Rn$Xb*Mx-kdOdFJqQmlNM*wy$1RJNWRHTkhPWFZh$np$d1kzaz$Nb%Z-$W14aW$%Rn$Xb*Mx-kdOdFJqQmlNM*wwWWxo$2My%khhM1Jh-mtwb1lsZFdla3hZ%214-WJWWj$Xb*Mx-WxwW$R-Wmti$3hy$2xjN*R*b3lWblZh$0$wb1pF-z$l$Xh-T$R*a$N*Snd%RmRhZ$ZsWE1Xe*pl$E$3WTIxR2RXTXliREJo$npsM$R*aENl$nBZ$25C-$dHTjBaRzFz-TFwWE9I$mtTRTQw$1ZoS2Jt%ll%$DA9",
          }),
          className: "video-iTzVpK",
          muted: true,
          playsInline: true,
          onPause,
        }),
        r.jsx("div", {
          className: "mask-Ick7uE",
        }),
        r.jsx("div", {
          className: "title-uRxa0T",
          children: x.Ay.t("multiframe_segment", {}, "运镜片段"),
        }),
      ],
    });
  }
  return null;
});
const en = "control-button-H4VskE";
const ea = "control-button-content-Maz1x9";
const er = o.PA(function (e) {
  const { frame, index, onConfigButtonClick } = e;
  const { isSegmentLocked = false } = frame;
  const { videoGeneratorManager } = s.h(i.V);
  const { multiFramesManager } = videoGeneratorManager;
  const { lockFrameTransitionSegment, unlockFrameTransitionSegment } =
    multiFramesManager;
  const m = d.useMemo(() => r.jsx(S.Da7, {}), []);
  const v = d.useMemo(() => r.jsx(S.jwT, {}), []);
  const h = d.useMemo(() => r.jsx(S.wD9, {}), []);
  const f = d.useCallback(() => {
    lockFrameTransitionSegment(index);
  }, [index, lockFrameTransitionSegment]);
  const _ = d.useCallback(() => {
    unlockFrameTransitionSegment(index);
  }, [index, unlockFrameTransitionSegment]);
  return r.jsxs("div", {
    className: "panel-ZQLmBt",
    children: [
      r.jsx(et, {
        frame,
      }),
      r.jsx("div", {
        className: "controls-kZnxB5",
        children: isSegmentLocked
          ? r.jsx(Y.A, {
              content: x.Ay.t(
                "multiframe_reedit",
                {},
                "重新编辑「此片段」运镜效果",
              ),
              children: r.jsx(X.b, {
                className: en,
                icon: h,
                onClick: _,
                children: r.jsx("span", {
                  className: ea,
                  children: x.Ay.t(
                    "multiframe_unlock_segment",
                    {},
                    "解锁该运镜",
                  ),
                }),
              }),
            })
          : r.jsxs(r.Fragment, {
              children: [
                r.jsx(X.b, {
                  className: en,
                  icon: m,
                  onClick: onConfigButtonClick,
                  children: r.jsx("span", {
                    className: ea,
                    children: x.Ay.t(
                      "multiframe_set_camera_movement",
                      {},
                      "设置运镜",
                    ),
                  }),
                }),
                r.jsx(Y.A, {
                  content: x.Ay.t(
                    "multiframe_keep_segment",
                    {},
                    "保持「此片段」运镜效果不变",
                  ),
                  children: r.jsx(X.b, {
                    className: en,
                    icon: v,
                    onClick: f,
                    children: r.jsx("span", {
                      className: ea,
                      children: x.Ay.t(
                        "multiframe_lock_segment",
                        {},
                        "锁定该运镜",
                      ),
                    }),
                  }),
                }),
              ],
            }),
      }),
    ],
  });
});
const ei = o.PA(function (e) {
  const { index } = e;
  const n = f._(e, ["index"]);
  const { id } = d.useContext(eo.b);
  const { contentGeneratorManager, videoGeneratorManager } = s.h(i.V);
  const {
    data: { visibleContentGeneratorInstanceId },
  } = contentGeneratorManager;
  const { multiFramesManager } = videoGeneratorManager;
  const {
    metadata: { segmentLockTooltipVisible },
    dismissSegmentLockTooltip,
  } = multiFramesManager;
  const h = d.useMemo(
    () =>
      r.jsxs("span", {
        className: "tooltip-content-kXSeL1",
        children: [
          r.jsx(S.jwT, {
            size: 16,
          }),
          x.Ay.t(
            "multiframe_lockguide",
            {},
            "锁定运镜描述，可以固定片段生成效果",
          ),
        ],
      }),
    [],
  );
  const _ = d.useMemo(
    () =>
      id === visibleContentGeneratorInstanceId &&
      index === 1 &&
      segmentLockTooltipVisible,
    [id, visibleContentGeneratorInstanceId, index, segmentLockTooltipVisible],
  );
  const g = d.useCallback(
    (e) => {
      if (!e) {
        dismissSegmentLockTooltip();
      }
    },
    [dismissSegmentLockTooltip],
  );
  return r.jsx(
    j.t,
    a._(
      {
        content: h,
        className: "tooltip-dIyoT3",
        showArrow: true,
        popupVisible: _,
        onVisibleChange: g,
      },
      n,
    ),
  );
});
const es = "locked-OujGid";
const el = o.PA(function (e) {
  const { frame, index, readOnly = false } = e;
  const l = f._(e, ["frame", "index", "readOnly"]);
  const { prompt, durationMs, segmentVideo, isSegmentLocked = false } = frame;
  const { referenceRenderProps } = l;
  const {
    videoGeneratorManager: {
      reportManager: { reportClickMultiFramesDescription },
    },
  } = s.h(i.V);
  const [y, setY] = d.useState(false);
  const [M, setM] = d.useState(false);
  const C = d.useMemo(() => !y && M, [y, M]);
  const trigger = d.useMemo(() => {
    if (isSegmentLocked) {
      return ["hover", "click"];
    }
    return "hover";
  }, [isSegmentLocked]);
  const N = d.useMemo(
    () =>
      r.jsx(Q, {
        frame,
        index,
        onVisibleChange: setY,
      }),
    [frame, index],
  );
  const onConfigButtonClick = d.useCallback(() => {
    setY(true);
    setM(false);
  }, []);
  const T = d.useMemo(
    () =>
      r.jsx(er, {
        frame,
        index,
        onConfigButtonClick,
      }),
    [frame, index, onConfigButtonClick],
  );
  const R = d.useCallback(
    (e) => {
      setY(e);
      if (e) {
        reportClickMultiFramesDescription();
      }
    },
    [reportClickMultiFramesDescription],
  );
  const V = d.useCallback(
    (e) => {
      if (!(y && e)) {
        setM(e);
      }
    },
    [y],
  );
  const [F, setF] = d.useState(prompt);
  d.useEffect(() => {
    if (!y) {
      setF(prompt);
    }
  }, [prompt, y]);
  const E = d.useMemo(() => {
    if (isSegmentLocked) {
      return r.jsx(S.jwT, {});
    }
    return r.jsx(S.yv4, {});
  }, [isSegmentLocked]);
  const D = d.useMemo(() => {
    if (isSegmentLocked) {
      return undefined;
    }
    return H.j(durationMs);
  }, [durationMs, isSegmentLocked]);
  const style = d.useMemo(
    () => ({
      maxWidth: 320,
    }),
    [],
  );
  const $ = d.useMemo(() => {
    if (y || segmentVideo) {
      return {
        content: null,
      };
    }
    if (readOnly) {
      return {
        content: x.Ay.t(
          "multiframe_shotfirst",
          {},
          "请先添加镜头，运镜描述仅支持在镜头间添加",
        ),
      };
    }
    return {
      content: F || x.Ay.t("multiframe_describe", {}, "添加画面描述"),
    };
  }, [readOnly, F, y, segmentVideo]);
  return r.jsx(Z.I, {
    content: N,
    disabled: readOnly || isSegmentLocked,
    popupVisible: y,
    onVisibleChange: R,
    children: r.jsx(Z.I, {
      trigger,
      content: T,
      disabled: readOnly || !segmentVideo,
      popupVisible: C,
      onVisibleChange: V,
      children: r.jsx(
        j.t,
        c._(
          a._(
            {
              referenceRenderProps,
              className: "tooltip-KfUGJs",
              style,
            },
            $,
          ),
          {
            children: r.jsx(ei, {
              referenceRenderProps,
              index,
              children:
                F && !readOnly
                  ? r.jsx(
                      B.T,
                      a._(
                        {
                          referenceId: index,
                          icon: E,
                          label: D,
                          active: y || M,
                          className: _u("attachment-cAciIa", {
                            [es]: isSegmentLocked,
                          }),
                        },
                        l,
                      ),
                    )
                  : r.jsx(
                      b.L,
                      a._(
                        {
                          icon: E,
                          label: D,
                          active: y || M,
                          className: _u("upload-aA1BNM", {
                            "read-only-gfOPJe": readOnly,
                            [es]: isSegmentLocked,
                          }),
                          readOnly: true,
                        },
                        l,
                      ),
                    ),
            }),
          },
        ),
      ),
    }),
  });
});
const multiFrames = o.PA(function (e) {
  const { videoGeneratorManager } = s.h(i.V);
  const { multiFramesManager } = videoGeneratorManager;
  const {
    metadata: { referenceItems },
    data: { hasFrameResources },
    moveReferenceResource,
    removeReferenceResource,
    dismissSegmentLockTooltip,
  } = multiFramesManager;
  const x = d.useCallback(
    (e, t) => {
      moveReferenceResource((e >> 1) + 1, (t >> 1) + 1);
    },
    [moveReferenceResource],
  );
  const _ = d.useCallback((e) => {
    if (e.type === "frame") {
      var { id: id_1, type: type_1 } = e;
      var o = f._(e, ["id", "type"]);
      return r.jsx(L, a._({}, o), id_1);
    }
    if (e.type === "transition") {
      var { id: id_2, type: type_2 } = e;
      var l = f._(e, ["id", "type"]);
      return r.jsx(el, a._({}, l), id_2);
    }
    var { id, type } = e;
    var u = f._(e, ["id", "type"]);
    return r.jsx(C, a._({}, u), id);
  }, []);
  return r.jsx(D.Q, {
    items: referenceItems,
    sortingStrategy,
    onMove: x,
    onRemove: removeReferenceResource,
    children: r.jsx(
      v.B,
      c._(a._({}, e), {
        children: r.jsx(h.V, {
          axisAligned: hasFrameResources,
          layout: "tiled",
          onMouseEnter: dismissSegmentLockTooltip,
          children: referenceItems.map(_),
        }),
      }),
    ),
  });
});
function useEx() {
  const { videoGeneratorManager } = s.h(i.V);
  const { insertReferenceIntoPrompt } =
    videoGeneratorManager.omniReferenceManager;
  const onInsertReferenceIntoPrompt = d.useCallback(
    (e) => {
      insertReferenceIntoPrompt({
        type: e.type,
        id: e.id,
      });
    },
    [insertReferenceIntoPrompt],
  );
  return d.useMemo(
    () => ({
      insertIntoPromptLabelKey: "web_add_to_chat",
      insertIntoPromptDefaultText: "添加到输入框",
      onInsertReferenceIntoPrompt,
    }),
    [onInsertReferenceIntoPrompt],
  );
}
const eg = o.PA(function (e) {
  const { audioResource, sortable = true, acceptedFileTypes } = e;
  const l = f._(e, ["audioResource", "sortable", "acceptedFileTypes"]);
  const { referenceRenderProps } = l;
  const { videoGeneratorManager } = s.h(i.V);
  const {
    data: { resourceAuditPolicy },
    omniReferenceManager,
    referenceAuditManager,
  } = videoGeneratorManager;
  const {
    metadata: { acceptedFileTypes: acceptedFileTypes_1 },
    removeReferenceResource,
    replaceReferenceResourceFromLocal,
  } = omniReferenceManager;
  const b = useEx();
  const { isAuditing, auditTooltipContent, auditIcon, auditLabel } = y_1({
    referenceAuditManager,
    resource: audioResource,
    resourceAuditPolicy,
  });
  const C = d.useMemo(() => {
    if (auditTooltipContent) {
      return r.jsx(
        ed.G,
        c._(
          a._(
            {
              reference: audioResource,
            },
            b,
          ),
          {
            children: auditTooltipContent,
          },
        ),
      );
    }
  }, [auditTooltipContent, audioResource, b]);
  const N = d.useMemo(
    () =>
      r.jsx(
        e_.q,
        c._(
          a._(
            {
              audioResource,
              accept:
                acceptedFileTypes != null
                  ? acceptedFileTypes
                  : acceptedFileTypes_1,
              loading: isAuditing,
              icon: auditIcon,
              label: auditLabel,
            },
            l,
          ),
          {
            onRemove: removeReferenceResource,
            onDropFromLocal: replaceReferenceResourceFromLocal,
          },
        ),
      ),
    [
      audioResource,
      acceptedFileTypes,
      acceptedFileTypes_1,
      isAuditing,
      auditIcon,
      auditLabel,
      removeReferenceResource,
      replaceReferenceResourceFromLocal,
      l,
    ],
  );
  const P = d.useCallback(
    () =>
      d.cloneElement(N, {
        onRemove: undefined,
      }),
    [N],
  );
  const T = r.jsx(j.t, {
    resource: audioResource,
    content: C,
    referenceRenderProps,
    children: N,
  });
  if (sortable) {
    return r.jsx(O.g, {
      item: audioResource,
      renderDragOverlay: P,
      children: T,
    });
  }
  return T;
});
const eb = o.PA(function (e) {
  const { imageResource, sortable = true, acceptedFileTypes } = e;
  const l = f._(e, ["imageResource", "sortable", "acceptedFileTypes"]);
  const { referenceRenderProps } = l;
  const { videoGeneratorManager } = s.h(i.V);
  const {
    data: { resourceAuditPolicy },
    omniReferenceManager,
    referenceAuditManager,
  } = videoGeneratorManager;
  const {
    metadata: { acceptedFileTypes: acceptedFileTypes_1 },
    removeReferenceResource,
    replaceReferenceResourceFromLocal,
  } = omniReferenceManager;
  const b = useEx();
  const { isPreviewLoading, auditTooltipContent, auditIcon, auditLabel } = y_1({
    referenceAuditManager,
    resource: imageResource,
    resourceAuditPolicy,
  });
  const C = d.useMemo(() => {
    if (auditTooltipContent) {
      return r.jsx(
        ed.G,
        c._(
          a._(
            {
              reference: imageResource,
            },
            b,
          ),
          {
            children: auditTooltipContent,
          },
        ),
      );
    }
  }, [auditTooltipContent, imageResource, b]);
  const P = d.useMemo(
    () =>
      r.jsx(
        N.d,
        c._(
          a._(
            {
              imageResource,
              accept:
                acceptedFileTypes != null
                  ? acceptedFileTypes
                  : acceptedFileTypes_1,
              loading: isPreviewLoading,
              icon: auditIcon,
              label: auditLabel,
            },
            l,
          ),
          {
            onRemove: removeReferenceResource,
            onDropFromLocal: replaceReferenceResourceFromLocal,
          },
        ),
      ),
    [
      imageResource,
      acceptedFileTypes,
      acceptedFileTypes_1,
      isPreviewLoading,
      auditIcon,
      auditLabel,
      removeReferenceResource,
      replaceReferenceResourceFromLocal,
      l,
    ],
  );
  const T = d.useCallback(
    () =>
      d.cloneElement(P, {
        onRemove: undefined,
      }),
    [P],
  );
  const R = r.jsx(j.t, {
    resource: imageResource,
    content: C,
    referenceRenderProps,
    children: P,
  });
  if (sortable) {
    return r.jsx(O.g, {
      item: imageResource,
      renderDragOverlay: T,
      children: R,
    });
  }
  return R;
});
const ey = o.PA(function (e) {
  const { videoResource, sortable = true, acceptedFileTypes } = e;
  const l = f._(e, ["videoResource", "sortable", "acceptedFileTypes"]);
  const { referenceRenderProps } = l;
  const { videoGeneratorManager } = s.h(i.V);
  const {
    data: { resourceAuditPolicy },
    continuationManager,
    omniReferenceManager,
    referenceAuditManager,
  } = videoGeneratorManager;
  const {
    metadata: { acceptedFileTypes: acceptedFileTypes_1 },
    removeReferenceResource,
    replaceReferenceResourceFromLocal,
  } = omniReferenceManager;
  const k = useEx();
  const { id } = videoResource;
  const A = continuationManager.isOriginReference(id);
  const { isAuditing, auditTooltipContent, auditIcon, auditLabel } = y_1({
    referenceAuditManager,
    resource: videoResource,
    resourceAuditPolicy,
  });
  const { tooltipKey, tooltipProps } = ((e) => {
    const { resourceId, defaultContent } = e;
    const [a, setA] = d.useState(false);
    const o = d.useMemo(
      () => x.Ay.t("web_3d_video_upload_success", {}, "3D视频上传成功"),
      [],
    );
    const tooltipKey_1 = a ? "dcc-import-success" : "default";
    d.useEffect(() => {
      var e = (e) => {
        if (e === resourceId && ej.O9(e)) {
          setA(true);
        }
      };
      e(resourceId);
      return ej.cp(e);
    }, [resourceId]);
    d.useEffect(() => {
      if (a) {
        var e = window.setTimeout(() => {
          setA(false);
        }, 3000);
        return () => {
          window.clearTimeout(e);
        };
      }
    }, [a]);
    return {
      tooltipKey: tooltipKey_1,
      tooltipProps: d.useMemo(() => {
        if (a) {
          return {
            content: o,
            popupVisible: true,
            showArrow: true,
          };
        }
        return {
          content: defaultContent,
        };
      }, [defaultContent, o, a]),
    };
  })({
    resourceId: id,
    defaultContent: d.useMemo(() => {
      if (auditTooltipContent) {
        return r.jsx(
          ed.G,
          c._(
            a._(
              {
                reference: videoResource,
              },
              k,
            ),
            {
              children: auditTooltipContent,
            },
          ),
        );
      }
    }, [k, videoResource, auditTooltipContent]),
  });
  const V = d.useMemo(
    () =>
      r.jsx(
        $.L,
        c._(
          a._(
            {
              videoResource,
              accept:
                acceptedFileTypes != null
                  ? acceptedFileTypes
                  : acceptedFileTypes_1,
              loading: isAuditing,
              icon: auditIcon,
              label: auditLabel,
            },
            l,
          ),
          {
            onRemove: removeReferenceResource,
            onDropFromLocal: A ? undefined : replaceReferenceResourceFromLocal,
          },
        ),
      ),
    [
      videoResource,
      acceptedFileTypes,
      acceptedFileTypes_1,
      isAuditing,
      auditIcon,
      auditLabel,
      A,
      removeReferenceResource,
      replaceReferenceResourceFromLocal,
      l,
    ],
  );
  const F = d.useCallback(
    () =>
      d.cloneElement(V, {
        onRemove: undefined,
      }),
    [V],
  );
  const I = r.jsx(
    j.t,
    c._(
      a._(
        {
          resource: videoResource,
          referenceRenderProps,
        },
        tooltipProps,
      ),
      {
        children: V,
      },
    ),
    tooltipKey,
  );
  if (!sortable || A) {
    return I;
  }
  return r.jsx(O.g, {
    item: videoResource,
    renderDragOverlay: F,
    children: I,
  });
});
function ek(e) {
  return e.type === "image" || e.type === "video" || e.type === "audio";
}
function eM(e) {
  const { reference } = e;
  const n = f._(e, ["reference"]);
  if (reference.type === "image") {
    return r.jsx(
      eb,
      a._(
        {
          imageResource: reference,
        },
        n,
      ),
    );
  }
  if (reference.type === "video") {
    return r.jsx(
      ey,
      a._(
        {
          videoResource: reference,
        },
        n,
      ),
    );
  }
  return r.jsx(
    eg,
    a._(
      {
        audioResource: reference,
      },
      n,
    ),
  );
}
const eA = o.PA(function (e) {
  const { reference, visualIndex, acceptedFileTypes, contextMenuActions } = e;
  const { videoGeneratorManager } = s.h(i.V);
  const { continuationManager } = videoGeneratorManager;
  const m = continuationManager.isOriginReference(reference.id);
  const referenceRenderProps = d.useMemo(
    () => ({
      axisAligned: true,
      groupCollapsed: false,
      indexInGroup: visualIndex,
      visualIndex,
    }),
    [visualIndex],
  );
  return r.jsx(
    ed.G,
    c._(
      a._(
        {
          reference,
        },
        contextMenuActions,
      ),
      {
        children: r.jsx(eM, {
          reference,
          sortable: !m,
          acceptedFileTypes,
          referenceRenderProps,
        }),
      },
    ),
  );
});
const ew = o.PA(function (e) {
  var {
    referenceRenderProps = {},
    acceptedFileTypes,
    disabled = false,
    dropAcceptedFileTypes = acceptedFileTypes,
  } = e;
  const u = f._(e, [
    "referenceRenderProps",
    "acceptedFileTypes",
    "disabled",
    "dropAcceptedFileTypes",
  ]);
  const { videoGeneratorManager } = s.h(i.V);
  const {
    featureManager: {
      data: { isVideoEditEngaged },
    },
    omniReferenceManager,
  } = videoGeneratorManager;
  const {
    importReferenceResourcesFromLocal,
    metadata: { omniReferenceResourceLimit },
  } = omniReferenceManager;
  const number =
    omniReferenceResourceLimit == null
      ? undefined
      : omniReferenceResourceLimit.maxTotalCount;
  const M = d.useMemo(() => {
    if (disabled && typeof number === "number") {
      return {
        content: x.Ay.t(
          "video_unified_edit_reference_max_count",
          {
            number,
          },
          "最多支持 {number} 个参考内容",
        ),
      };
    }
    return {
      content: isVideoEditEngaged
        ? x.Ay.t("seedance_25_edit_upload_tip2", {}, "上传参考内容")
        : x.Ay.t("video_unified_edit_upload", {}, "上传参考内容"),
    };
  }, [disabled, isVideoEditEngaged, number]);
  const A = d.useCallback(
    (e) => {
      if (acceptedFileTypes) {
        e.preventDefault();
        eC.y({
          accept: acceptedFileTypes,
          multiple: true,
          onFilesSelected: importReferenceResourcesFromLocal,
        });
      }
    },
    [acceptedFileTypes, importReferenceResourcesFromLocal],
  );
  const C = d.useMemo(
    () =>
      r.jsx(_.I, {
        component: null,
        guardFileDrop: true,
        source: g.HH.Upload,
        children: r.jsx(
          b.L,
          a._(
            {
              accept: dropAcceptedFileTypes,
              disabled,
              label: x.Ay.t("video_unified_edit", {}, "参考内容"),
              multiple: true,
              referenceRenderProps,
              onChange: importReferenceResourcesFromLocal,
              onClick: A,
            },
            u,
          ),
        ),
      }),
    [
      u,
      disabled,
      dropAcceptedFileTypes,
      A,
      importReferenceResourcesFromLocal,
      referenceRenderProps,
    ],
  );
  return r.jsx(
    j.t,
    c._(
      a._(
        {
          referenceRenderProps,
        },
        M,
      ),
      {
        children: C,
      },
    ),
  );
});
const eP = o.PA(function (e) {
  const { referenceRenderProps = {}, sourceLabel, videoResource } = e;
  const { videoGeneratorManager } = s.h(i.V);
  const {
    data: { resourceAuditPolicy },
    metadata: { acceptedVideoFileTypes },
    omniReferenceManager: {
      removeReferenceResource,
      replaceVideoEditSourceFromLocal,
    },
    referenceAuditManager,
  } = videoGeneratorManager;
  const m = y_1({
    referenceAuditManager,
    resource: videoResource,
    resourceAuditPolicy,
  });
  return r.jsx(j.t, {
    resource: videoResource,
    content: m.auditTooltipContent,
    label: r.jsxs("span", {
      className: "tooltip-content-ToB3DU",
      children: [
        r.jsx("span", {
          children: videoResource.name || sourceLabel,
        }),
        r.jsx(P_1, {
          variant: "tooltipLink",
        }),
      ],
    }),
    referenceRenderProps,
    children: r.jsx($.L, {
      videoResource,
      accept: acceptedVideoFileTypes,
      loading: m.isPreviewLoading,
      icon: m.auditIcon,
      label: m.auditLabel,
      referenceRenderProps,
      onRemove: removeReferenceResource,
      onDropFromLocal: replaceVideoEditSourceFromLocal,
    }),
  });
});
const eT = o.PA(function (e) {
  const { referenceRenderProps = {} } = e;
  const { videoGeneratorManager } = s.h(i.V);
  const {
    metadata: { acceptedVideoFileTypes },
    omniReferenceManager,
  } = videoGeneratorManager;
  const {
    data: { videoEditSourceReference },
    importVideoEditSourceFromLocal,
  } = omniReferenceManager;
  const d = x.Ay.t("seedance_25_edit_video", {}, "编辑视频");
  if (videoEditSourceReference && videoEditSourceReference.type === "video") {
    return r.jsx(eP, {
      videoResource: videoEditSourceReference,
      sourceLabel: d,
      referenceRenderProps,
    });
  }
  return r.jsx(j.t, {
    content: x.Ay.t("seedance_25_edit_upload_tip1", {}, "上传要编辑的视频"),
    referenceRenderProps,
    children: r.jsx(_.I, {
      component: null,
      guardFileDrop: true,
      source: g.HH.Upload,
      children: r.jsx(b.L, {
        accept: acceptedVideoFileTypes,
        icon: r.jsx(S.nre, {}),
        label: d,
        referenceRenderProps,
        onChange: importVideoEditSourceFromLocal,
      }),
    }),
  });
});
function eR() {
  return r.jsx(h.V, {
    className: "video-edit-source-reference-group-KB2boy",
    children: r.jsx(eT, {}),
  });
}
const panelTabs = ["all", "image", "video", "audio"];
const eV = o.PA(function (e) {
  const { className } = e;
  const n = f._(e, ["className"]);
  const { videoGeneratorManager } = s.h(i.V);
  const { omniReferenceManager, continuationManager, featureManager } =
    videoGeneratorManager;
  const {
    data: { isVideoEditEngaged },
  } = featureManager;
  const {
    data: {
      references,
      referencePanelActiveTab,
      referencePanelVisible,
      videoEditReferenceResources,
      videoEditSourceReference,
    },
    metadata: {
      acceptedFileTypes,
      acceptedFileTypesByGroup,
      canAddReferenceByTab,
      referenceUploadVisible,
    },
    moveReferenceResource,
    removeReferenceResource,
    removeReferenceResources,
    setReferencePanelActiveTab,
    setReferencePanelVisible,
  } = omniReferenceManager;
  const contextMenuActions = useEx();
  const { referenceGroupWidth, setReferencesElement } = C_1(em.zh);
  const references_1 = isVideoEditEngaged
    ? videoEditReferenceResources
    : references;
  const E = isVideoEditEngaged && videoEditSourceReference ? 1 : 0;
  const visualIndexOffset = +!!isVideoEditEngaged;
  const {
    visibleReferences,
    sortableReferences,
    moreEntryReference,
    panelVisible,
    contentLayoutStacked,
    referenceGroupVisible,
    moreEntryVisible,
  } = d.useMemo(
    () =>
      em.W8(references_1, {
        morePanelVisible: referencePanelVisible,
        referenceGroupWidthBreakpoint: referenceGroupWidth,
      }),
    [references_1, referenceGroupWidth, referencePanelVisible],
  );
  const { originReferenceId } = continuationManager.data;
  const G = d.useMemo(
    () => [
      r.jsx(
        ew,
        {
          acceptedFileTypes,
          disabled: !referenceUploadVisible,
        },
        "upload",
      ),
    ],
    [acceptedFileTypes, referenceUploadVisible],
  );
  const U = d.useMemo(
    () =>
      visibleReferences.map((e) =>
        r.jsx(
          ed.G,
          c._(
            a._(
              {
                reference: e,
              },
              contextMenuActions,
            ),
            {
              children: r.jsx(eM, {
                reference: e,
                sortable: e.id !== originReferenceId,
              }),
            },
          ),
          e.id,
        ),
      ),
    [contextMenuActions, originReferenceId, visibleReferences],
  );
  const q = isVideoEditEngaged ? r.jsx(eR, {}) : null;
  const X = d.useCallback(() => {
    setReferencePanelVisible(!referencePanelVisible);
  }, [referencePanelVisible, setReferencePanelVisible]);
  const J = d.useMemo(() => {
    if (moreEntryVisible && moreEntryReference) {
      return [
        r.jsx(
          ev.u,
          {
            resource: moreEntryReference,
            onClick: X,
            renderResource: (e, t) => {
              var n;
              if (
                ((n = t.referenceRenderProps) == null
                  ? undefined
                  : n.groupCollapsed) &&
                ek(e)
              ) {
                return r.jsx("div", {
                  className: "collapsed-more-entry-Tf_3QN",
                  onClick: X,
                  children: r.jsx(eM, {
                    reference: e,
                    sortable: false,
                    acceptedFileTypes,
                    referenceRenderProps: t.referenceRenderProps,
                  }),
                });
              }
              return null;
            },
          },
          "more",
        ),
      ];
    }
    return [];
  }, [acceptedFileTypes, X, moreEntryReference, moreEntryVisible]);
  const Q = d.useMemo(() => [...U, ...J, ...G], [U, J, G]);
  const onClearReferences = d.useCallback(
    (e) => {
      if (e.length !== 0) {
        removeReferenceResources(e);
      }
    },
    [removeReferenceResources],
  );
  const onCollapse = d.useCallback(() => {
    setReferencePanelVisible(false);
  }, [setReferencePanelVisible]);
  const renderReference = d.useCallback(
    (e, t, n) => {
      var { acceptedFileTypes } = n;
      if (ek(e)) {
        return r.jsx(eA, {
          reference: e,
          visualIndex: t + visualIndexOffset,
          acceptedFileTypes,
          contextMenuActions,
        });
      }
      return null;
    },
    [contextMenuActions, visualIndexOffset],
  );
  const renderUpload = d.useCallback((e) => r.jsx(ew, a._({}, e)), []);
  const ea = d.useCallback(
    (e, t) => {
      moveReferenceResource(e + E, t + E);
    },
    [moveReferenceResource, E],
  );
  return r.jsx(D.Q, {
    items: referenceGroupVisible ? sortableReferences : [],
    onMove: ea,
    onRemove: removeReferenceResource,
    children: r.jsxs(
      v.B,
      c._(
        a._(
          {
            ref: setReferencesElement,
          },
          n,
        ),
        {
          className: _u(className, "references-znTOhV", {
            "panel-visible-aLdvIt": panelVisible,
            "video-edit-engaged-ysWDMn": isVideoEditEngaged,
            "content-generator-references-stacked-layout":
              contentLayoutStacked && !isVideoEditEngaged,
            "content-generator-video-edit-panel-layout":
              panelVisible && isVideoEditEngaged,
          }),
          children: [
            panelVisible
              ? r.jsx(eh.M, {
                  className: "panel-slot-Y64cv9",
                  children: r.jsx(eu.y, {
                    references: references_1,
                    activeTab: referencePanelActiveTab,
                    panelTabs,
                    children: r.jsx(ef.c, {
                      references: references_1,
                      activeTab: referencePanelActiveTab,
                      panelTabs,
                      acceptedFileTypes,
                      acceptedFileTypesByTab: acceptedFileTypesByGroup,
                      canAddByTab: canAddReferenceByTab,
                      onActiveTabChange: setReferencePanelActiveTab,
                      onClearReferences,
                      onCollapse,
                      onMove: ea,
                      renderReference,
                      renderUpload,
                    }),
                  }),
                })
              : null,
            q,
            referenceGroupVisible
              ? r.jsx(h.V, {
                  visualIndexOffset,
                  children: Q,
                })
              : null,
          ],
        },
      ),
    ),
  });
});
const eF = {
  firstLastFrames,
  multiFrames,
  omniReference: eV,
  videoEdit: eV,
  longVideo: eV,
};
var eI = o.PA(function (e) {
  const { videoGeneratorManager } = s.h(i.V);
  const {
    featureManager,
    data: { references },
  } = videoGeneratorManager;
  const {
    data: { feature },
  } = featureManager;
  const d = Object.hasOwn(eF, feature) ? eF[feature] : firstLastFrames;
  return r.jsx(l.n, {
    resources: references,
    children: r.jsx(d, a._({}, e)),
  });
});
export { eI as p };
