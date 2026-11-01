import r from "NY";
import l from "oa";
import n from "bk";
import i from "z8";
import s from "CgK";
import o from "bT";
import u from "ED";
import _d from "xb";
import v from "wF";
import p from "Kt";
import { vN, xd } from "./module-rUX.js";
import { Y as Y_1 } from "./module-wW.js";
import { k as k_1 } from "./module-Ea.js";
import y from "xi";
import { R as R_1 } from "./module-FK_3.js";
import { a as a_1 } from "./module-EK_2.js";
import b from "BO";
import { v as v_1 } from "./module-L8M.js";
import "Vx";
import "qrE";
import "Su";
import "t0h";
import k from "Ix";
import S from "RH";
import C from "MzS";
import w from "U9";
import L from "zS";
import P from "Qey";
import N from "pr";
import E from "yw";
import M from "Ly";
import { W as W_1 } from "./module-cS_3.js";
import T from "gY";
import { X as X_1 } from "./module-nkz.js";
import * as F from "./module-CTB.js";
import O from "cO";
import X from "Ev";
const j = {
  large: 20,
  normal: 20,
  small: 16,
};
const useD = (e) => {
  var { player, progress, disableDrag = false, onDragEnd } = e;
  var nRef = o.useRef(null);
  var sRef = o.useRef(0);
  var [controlledProgress, setControlledProgress] = o.useState(progress);
  o.useEffect(() => {
    if (!T.A(progress)) {
      setControlledProgress(progress);
    }
  }, [progress]);
  var onDragMove = L.A((e) => {
    if (!disableDrag) {
      setControlledProgress(e);
      if (player != null) {
        player.seek(player.duration * e);
      }
    }
  });
  var onDragStart = L.A((e) => {
    var a;
    sRef.current =
      (a = player == null ? undefined : player.currentTime) != null ? a : 0;
    onDragMove(e);
  });
  var onDragEnd_1 = L.A((e) => {
    onDragMove(e);
    if (!disableDrag) {
      var a;
      if (onDragEnd != null) {
        onDragEnd(
          sRef.current,
          ((a = player == null ? undefined : player.duration) != null ? a : 0) *
            e,
        );
      }
    }
  });
  var { progress: progress_1, isDragging } = X_1({
    el: nRef.current,
    zeroAt: "left",
    controlledProgress,
    onDragMove,
    onDragStart,
    onDragEnd: onDragEnd_1,
    throttle: 16,
  });
  var y = o.useMemo(() => {
    let e;
    return {
      right: ((e = 1 - progress_1), `${100 * e}%`),
    };
  }, [progress_1]);
  return i.jsx("div", {
    className: _d("progress-wrapper-AEfytJ", {
      "active-fSNrIG": isDragging,
    }),
    role: "slider",
    "aria-label": P.Ay.t(
      "octo_canvas_agent_attachment_video_seek_label",
      {
        fileName: P.Ay.t("frame_change_video_title", {}, "视频"),
      },
      "调整 {fileName} 的播放进度",
    ),
    tabIndex: disableDrag || !player ? -1 : 0,
    "aria-disabled": disableDrag || !player,
    "aria-valuemin": 0,
    "aria-valuemax": 100,
    "aria-valuenow": Math.round(100 * progress_1),
    onKeyDown: (e) => {
      if (
        !disableDrag &&
        player &&
        Number.isFinite(player.duration) &&
        !(player.duration <= 0)
      ) {
        var a = W_1(e.key, progress_1, 0, 1, 5 / player.duration);
        if (a !== undefined) {
          e.preventDefault();
          e.stopPropagation();
          var n = player.currentTime;
          onDragMove(a);
          if (onDragEnd != null) {
            onDragEnd(n, player.duration * a);
          }
        }
      }
    },
    ref: nRef,
    children: i.jsxs("div", {
      className: "bg-coG99N",
      children: [
        i.jsx("div", {
          className: "current-qsBiBg",
          style: y,
        }),
        disableDrag
          ? null
          : i.jsx("div", {
              className: "handler-Ak87bX",
              style: y,
            }),
      ],
    }),
  });
};
const W = "controls-icon-CfXHW2";
const V = "controls-current-time-text-8RC5hG";
const z = "controls-zoom-in-out-nfYpS1";
const B = "disabled-control-PrgSPI";
const I = {
  large: "large-YQTjMQ",
  normal: "normal-lCT86A",
  small: "small-_OhKbx",
};
const K = {
  large: {
    padding: 20,
  },
  normal: {
    padding: "20px 12px 20px 20px",
  },
  small: {
    padding: 8,
  },
};
const $ = (e, controlsDisplay) => {
  var a;
  var r;
  if (e === "left") {
    if (
      (r = controlsDisplay == null ? undefined : controlsDisplay.left) != null
    ) {
      return r;
    }
    return ["playButton", "playTime"];
  }
  if (
    (a = controlsDisplay == null ? undefined : controlsDisplay.right) != null
  ) {
    return a;
  }
  return ["volume", "definition", "fullscreen"];
};
const J = o.memo(function (e) {
  const {
    playerState,
    visible,
    player,
    videoContainer,
    hideProgress,
    hideVolumeProgress,
    alwaysShowVolumeProgress,
    controlsStyle,
    defaultVideoDefinition,
    definitionList,
    selectedDefinition,
    definitionPopupVisible,
    onDefinitionPopupVisibleChange,
    onDefinitionSelect,
    onDefinitionChanged,
    showControlsWhileLoading,
    customToggleFullscreen,
    onVideoFullscreen,
    onVideoPlay,
    onVideoPause,
    onVideoProgressDragEnd,
    onVolumeChange,
    updateCacheDefinition,
    controlsMode = "large",
    disableFullscreen,
    disableDragProgress,
    controlsDisplay,
    immersiveControl,
    controlsClassName,
    onControlsMouseEnter,
    onControlsMouseLeave,
    controlsTimelineClassName,
    controlsPlayClassName,
  } = e;
  const enRef = o.useRef(null);
  const [ei, setEi] = o.useState(controlsMode);
  const [eo, setEo] = o.useState();
  const [ed, setEd] = o.useState(playerState.isFullscreen);
  const ev = o.useMemo(() => ei === "small", [ei]);
  o.useEffect(() => {
    setEi(controlsMode);
  }, [controlsMode]);
  o.useEffect(() => {
    if (playerState.isFullscreen) {
      setEi("large");
    } else {
      setEi(controlsMode);
    }
    setEd(playerState.isFullscreen);
  }, [playerState.isFullscreen, controlsMode]);
  o.useEffect(() => {
    var e = () => {
      setEd(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", e);
    return () => {
      document.removeEventListener("fullscreenchange", e);
    };
  }, []);
  o.useEffect(() => {
    if (selectedDefinition === undefined) {
      var e =
        definitionList == null
          ? undefined
          : definitionList.find(
              (e) =>
                e.definition.toLowerCase() ===
                (defaultVideoDefinition == null
                  ? undefined
                  : defaultVideoDefinition.toLowerCase()),
            );
      if (e) {
        setEo(e);
      }
    }
  }, [definitionList, defaultVideoDefinition, selectedDefinition]);
  const ep = o.useMemo(() => {
    var e;
    if (selectedDefinition === undefined) {
      return eo;
    }
    if (
      (e =
        definitionList == null
          ? undefined
          : definitionList.find(
              (e) =>
                e.definition.toLowerCase() === selectedDefinition.toLowerCase(),
            )) != null
    ) {
      return e;
    }
    return {
      definition: selectedDefinition,
      url: "",
    };
  }, [eo, definitionList, selectedDefinition]);
  const em = o.useCallback(
    (e) => {
      e.stopPropagation();
      if (disableFullscreen) {
        if (onVideoFullscreen != null) {
          onVideoFullscreen();
        }
        return;
      }
      if (player && videoContainer) {
        if (customToggleFullscreen) {
          return void customToggleFullscreen();
        }
        if (ed) {
          try {
            player.exitFullscreen();
            setEd(false);
          } catch (error) {
            y.V.error("退出全屏失败:", error);
            if (document.exitFullscreen) {
              document.exitFullscreen().catch(y.V.error);
            }
          }
        } else {
          try {
            player.getFullscreen(videoContainer);
            setEd(true);
          } catch (error) {
            y.V.error("进入全屏失败:", error);
          }
        }
        if (onVideoFullscreen != null) {
          onVideoFullscreen();
        }
      }
    },
    [
      onVideoFullscreen,
      player,
      ed,
      videoContainer,
      disableFullscreen,
      customToggleFullscreen,
    ],
  );
  const eh = o.useCallback(
    (e) => {
      if (playerState.dataLoaded) {
        var a;
        var l = e.target;
        if (!((a = enRef.current) != null && a.contains(l))) {
          if (playerState.paused) {
            if (player != null) {
              player.play();
            }
            if (onVideoPlay != null) {
              onVideoPlay();
            }
          } else {
            if (player != null) {
              player.pause();
            }
            if (onVideoPause != null) {
              onVideoPause();
            }
          }
        }
      }
    },
    [
      onVideoPause,
      onVideoPlay,
      player,
      playerState.dataLoaded,
      playerState.paused,
    ],
  );
  const eg = o.useCallback(
    (e) => {
      e.stopPropagation();
      if (playerState.dataLoaded && immersiveControl) {
        immersiveControl.onChange(!immersiveControl.active);
      }
    },
    [immersiveControl, playerState.dataLoaded],
  );
  const ey = o.useCallback(
    (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        eg(e);
      }
    },
    [eg],
  );
  const ef = o.useCallback(
    (e) => {
      if (onDefinitionSelect) {
        onDefinitionSelect(e);
      } else {
        if (player != null) {
          player.changeDefinition(e);
        }
        setEo(e);
        if (updateCacheDefinition != null) {
          updateCacheDefinition(e.definition);
        }
        if (onDefinitionChanged != null) {
          onDefinitionChanged(e);
        }
      }
      if (onDefinitionPopupVisibleChange != null) {
        onDefinitionPopupVisibleChange(false);
      }
    },
    [
      onDefinitionChanged,
      onDefinitionPopupVisibleChange,
      onDefinitionSelect,
      player,
      updateCacheDefinition,
    ],
  );
  const iconWrapperClassName = o.useMemo(() => I[ei], [ei]);
  const eb = o.useMemo(() => K[ei], [ei]);
  const size = o.useMemo(() => j[ei], [ei]);
  const ek = o.useMemo(
    () =>
      i.jsx(E.iWP, {
        size,
        className: W,
      }),
    [size],
  );
  const eS = o.useMemo(
    () =>
      i.jsx(E._Zj, {
        size,
        className: W,
      }),
    [size],
  );
  const eC = o.useMemo(
    () =>
      i.jsx(E.AYg, {
        size,
        className: W,
      }),
    [size],
  );
  const ew = o.useMemo(
    () =>
      i.jsx(E.XJG, {
        size,
        className: W,
      }),
    [size],
  );
  const eL = o.useMemo(
    () =>
      i.jsx(E.C2I, {
        size,
        className: W,
      }),
    [size],
  );
  const eP = o.useMemo(
    () =>
      i.jsx(E.nTQ, {
        size,
        className: W,
      }),
    [size],
  );
  const eN = o.useCallback(() => {
    if (
      (definitionList == null ? undefined : definitionList.length) &&
      definitionList.length > 0
    ) {
      return i.jsx(S.A, {
        className: "menu-list-bT_OD9",
        children: definitionList.map((e) =>
          i.jsx(
            S.A.Item,
            {
              onClick: () => ef(e),
              className: _d({
                "menu-item-_iemYs": true,
                "active-menu-item-_VAiXC":
                  (ep == null ? undefined : ep.definition) === e.definition,
              }),
              children: i.jsxs("div", {
                className: "item-wrap-cF_QrG",
                children: [
                  e.definition,
                  e.definition === (ep == null ? undefined : ep.definition) &&
                    ek,
                ],
              }),
            },
            e.definition,
          ),
        ),
      });
    }
    return null;
  }, [ep, definitionList, ef, ek]);
  const eE = L.A((e) => {
    var a;
    var o;
    switch (e) {
      case "playButton":
        return i.jsx("div", {
          "aria-disabled": !playerState.dataLoaded,
          className: _d("play-btn-MY_GHe", iconWrapperClassName, {
            [B]: !playerState.dataLoaded,
          }),
          role: "button",
          tabIndex: playerState.dataLoaded ? 0 : -1,
          "aria-label": playerState.paused
            ? P.Ay.t("ai_music_play", {}, "播放")
            : P.Ay.t("ai_music_pause", {}, "暂停"),
          onKeyDown: N.q,
          onClick: ev && playerState.dataLoaded ? eh : undefined,
          children: playerState.paused ? eC : eS,
        });
      case "playTime":
        return i.jsxs("div", {
          "aria-disabled": !playerState.dataLoaded,
          className: _d("controls-play-time-aiFWJg", {
            [B]: !playerState.dataLoaded,
          }),
          children: [
            i.jsx("span", {
              className: V,
              children: M.N(playerState.currentTime),
            }),
            i.jsx(w.A, {
              type: "vertical",
              className: "divider-hGUDCo",
            }),
            i.jsx("span", {
              className: "controls-duration-text-_Ikh0A",
              children: M.N(playerState.duration),
            }),
          ],
        });
      case "volume":
        return i.jsx("div", {
          "aria-disabled": !playerState.dataLoaded,
          className: _d("controls-volume-LLKcnQ", {
            [B]: !playerState.dataLoaded,
          }),
          children: i.jsx(F.f, {
            player,
            volume: playerState.volume,
            muted:
              playerState.muted ||
              ((a = player == null ? undefined : player.muted) != null && a),
            onVolumeChange,
            iconWrapperClassName,
            hideVolumeProgress: hideVolumeProgress || ev,
            alwaysShowVolumeProgress: alwaysShowVolumeProgress && !ev,
          }),
        });
      case "definition":
        if (ep) {
          return i.jsx(
            C.A,
            n._(
              l._(
                {
                  droplist: eN(),
                  position: "top",
                  trigger: "click",
                },
                definitionPopupVisible === undefined
                  ? {}
                  : {
                      popupVisible: definitionPopupVisible,
                    },
              ),
              {
                onVisibleChange: onDefinitionPopupVisibleChange,
                getPopupContainer: videoContainer
                  ? () => videoContainer
                  : undefined,
                children: i.jsx("span", {
                  role: "button",
                  tabIndex: 0,
                  "aria-label": [
                    P.Ay.t("web_aigc_video_definition_title", {}, "视频清晰度"),
                    ep.definition,
                  ].join(" · "),
                  "aria-haspopup": "menu",
                  onKeyDown: N.q,
                  className: V,
                  children: ep.definition,
                }),
              },
            ),
          );
        }
        return null;
      case "fullscreen":
        return i.jsx("div", {
          "aria-disabled": !playerState.dataLoaded,
          className: _d(z, {
            [B]: !playerState.dataLoaded,
          }),
          role: "button",
          tabIndex: playerState.dataLoaded ? 0 : -1,
          "aria-label": ed
            ? P.Ay.t("octo_canvas_video_fullscreen_close_label", {}, "关闭全屏")
            : P.Ay.t(
                "octo_canvas_agent_attachment_video_fullscreen_label",
                {},
                "在浏览器中全屏显示",
              ),
          onKeyDown: N.q,
          onClick: playerState.dataLoaded ? em : undefined,
          children: ed ? ew : eL,
        });
      case "immersive":
        if (immersiveControl) {
          return i.jsx(k.A, {
            className: "immersive-tooltip-kRQ9wl",
            content: (o = immersiveControl.label) != null ? o : "",
            position: "top",
            disabled: !immersiveControl.label,
            getPopupContainer: videoContainer
              ? () => videoContainer
              : undefined,
            children: i.jsx("div", {
              role: "button",
              "aria-label": immersiveControl.label,
              "aria-disabled": !playerState.dataLoaded,
              "aria-pressed": immersiveControl.active,
              className: _d(z, {
                [B]: !playerState.dataLoaded,
              }),
              tabIndex: playerState.dataLoaded ? 0 : -1,
              onClick: playerState.dataLoaded ? eg : undefined,
              onKeyDown: playerState.dataLoaded ? ey : undefined,
              children: eP,
            }),
          });
        }
        return null;
      default:
        return null;
    }
  });
  const eM = o.useMemo(() => $("left", controlsDisplay), [controlsDisplay]);
  const ej = o.useMemo(() => $("right", controlsDisplay), [controlsDisplay]);
  const eA = o.useMemo(() => eM.length === 0 && ej.length === 0, [eM, ej]);
  if ((playerState.dataLoaded || showControlsWhileLoading) && visible) {
    return i.jsxs("div", {
      className: _d("controls-wXY0PO", controlsClassName),
      onClick: ev || !playerState.dataLoaded ? undefined : eh,
      onMouseEnter: onControlsMouseEnter,
      onMouseLeave: onControlsMouseLeave,
      style: controlsStyle,
      children: [
        hideProgress
          ? null
          : i.jsx("div", {
              "aria-disabled": !playerState.dataLoaded,
              className: _d(
                controlsTimelineClassName,
                eA ? "only-show-progress-Ys8Qok" : "controls-timeline-Ky_SzM",
                iconWrapperClassName,
                {
                  [B]: !playerState.dataLoaded,
                },
              ),
              ref: enRef,
              style: eA ? K.large : undefined,
              children: i.jsx(useD, {
                player,
                progress: playerState.progress,
                disableDrag: disableDragProgress || !playerState.dataLoaded,
                onDragEnd: onVideoProgressDragEnd,
              }),
            }),
        eA
          ? null
          : i.jsxs("div", {
              className: _d(controlsPlayClassName, "controls-play-_LK2E8"),
              style: eb,
              children: [
                i.jsx("div", {
                  className: "controls-left-_OXhD0",
                  children: eM
                    .map((e) => ({
                      key: e,
                      content: eE(e),
                    }))
                    .filter((e) => e.content !== null)
                    .map((e) => {
                      var { key, content } = e;
                      return i.jsx(
                        "div",
                        {
                          children: content,
                        },
                        key,
                      );
                    }),
                }),
                i.jsx("div", {
                  className: "controls-right-ey9eP1",
                  onClick: (e) => e.stopPropagation(),
                  children: ej
                    .map((e) => ({
                      key: e,
                      content: eE(e),
                    }))
                    .filter((e) => e.content !== null)
                    .map((e) => {
                      var { key, content } = e;
                      return i.jsx(
                        "div",
                        {
                          children: content,
                        },
                        key,
                      );
                    }),
                }),
              ],
            }),
      ],
    });
  }
  return null;
});
const Z = o.memo((e) => {
  var { maskUrl, className, maskClassName } = e;
  var n = X.gm
    ? {
        backdropFilter: "unset",
        WebkitBackdropFilter: "unset",
      }
    : {};
  return i.jsxs("div", {
    className: _d("cover-mask-wrapper-WgCT9J", className),
    style: l._({}, n),
    children: [
      i.jsx("img", {
        alt: "",
        src: O.m(maskUrl, null, {
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
            "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1-W1Je%1-%mlNalIy$1RJNWRHTkhPWFZh$np$d1kzaz$Nb%Z-$W14aW$%RjNZa2RHTlZwW$N-WlpNamwwWTBjNWRWcFhO$EJqZ$Rsc$lqTmFiR05wT$hSWldFNXl%REpPZ*1SdFZubE1WekZvWXpKemRX%kl%alJa$0$wd$p*aE5Q%T09",
        }),
        crossOrigin: "anonymous",
      }),
      i.jsx("div", {
        className: _d("mask-ZY59Ku", maskClassName),
      }),
    ],
  });
});
Z.displayName = "CoverMask";
const H = "fade-enter-T7_c0A";
const Q = "100%";
const U = o.forwardRef((e, t) => {
  var {
    onMouseEnter,
    onMouseLeave,
    onVideoPlay,
    onVideoPlayEnd,
    onVideoPause,
    onVideoProgressDragEnd,
    onVolumeChange,
    onVideoFullscreen,
    onVideoCurrentTimeChanged,
    customToggleFullscreen,
    currentTime,
    maskCoverUrl,
    defaultVideoDefinition,
    definitionList,
    selectedDefinition,
    definitionPopupVisible,
    onDefinitionPopupVisibleChange,
    onDefinitionChanged,
    onDefinitionSelect,
    showControlsWhileLoading,
    hideProgress,
    hideVolumeProgress,
    alwaysShowVolumeProgress,
    containerHeight,
    containerWidth,
    wrapperClassName,
    videoContainerClassName,
    customControlClassName,
    controlsClassName,
    onControlsMouseEnter,
    onControlsMouseLeave,
    controlsTimelineClassName,
    controlsPlayClassName,
    playOptions,
    renderVideoSlots,
    renderVideoSupport,
    controlsStyle,
    controlsDisplay,
    immersiveControl,
    tryAutoPlayWithVolume,
    fullscreenPlayHide,
    controlsDisplayMode = "hover",
    controlsHoverDelay,
    disableFullscreen,
    disableDragProgress,
    enableContextMenu = false,
    contextMenu = [],
    videoPlayerNode,
    player,
    playerState,
    controlsMode,
    updateCacheDefinition,
  } = e;
  var evRef = o.useRef(null);
  o.useEffect(() => {
    if (
      player &&
      tryAutoPlayWithVolume &&
      (playOptions == null || !playOptions.autoplayMuted) &&
      (playOptions == null ? undefined : playOptions.autoplay) !== false
    ) {
      if (v_1()) {
        return void ((e) => {
          function t() {
            const window_WeixinJSBridge = window.WeixinJSBridge;
            if (
              (window_WeixinJSBridge == null
                ? undefined
                : window_WeixinJSBridge.invoke) &&
              typeof window_WeixinJSBridge.invoke === "function"
            ) {
              window_WeixinJSBridge.invoke("getNetworkType", {}, function () {
                e();
              });
            }
          }
          if (window.WeixinJSBridge) {
            t();
          } else {
            document.addEventListener(
              "WeixinJSBridgeReady",
              function () {
                t();
              },
              false,
            );
          }
        })(() => {
          player.play();
        });
      }
      player.play().catch((e) => {
        y.V.error("autoplay error", e);
        player.muted = true;
        player.play();
      });
    }
  }, [player, tryAutoPlayWithVolume, playOptions]);
  o.useEffect(() => {
    if (player && currentTime) {
      player.currentTime = currentTime;
    }
  }, [currentTime, player]);
  o.useEffect(() => {
    if (playerState.ended) {
      if (onVideoPlayEnd != null) {
        onVideoPlayEnd();
      }
    }
  }, [onVideoPlayEnd, playerState.ended]);
  o.useEffect(() => {
    if (onVideoCurrentTimeChanged != null) {
      onVideoCurrentTimeChanged(playerState.currentTime);
    }
  }, [playerState.currentTime, onVideoCurrentTimeChanged]);
  o.useEffect(() => {
    var evRef_current = evRef.current;
    if (evRef_current) {
      if (onMouseEnter) {
        evRef_current.addEventListener("mouseenter", onMouseEnter);
      }
      if (onMouseLeave) {
        evRef_current.addEventListener("mouseleave", onMouseLeave);
      }
      return () => {
        if (onMouseEnter) {
          evRef_current.removeEventListener("mouseenter", onMouseEnter);
        }
        if (onMouseLeave) {
          evRef_current.removeEventListener("mouseleave", onMouseLeave);
        }
      };
    }
  }, [onMouseLeave, onMouseEnter]);
  var { isHovered, handleMouseEnter, handleMouseLeave } = b.D({
    delay: controlsHoverDelay != null ? controlsHoverDelay : 0,
  });
  var eg = o.useMemo(() => {
    if (maskCoverUrl) {
      return i.jsx(Z, {
        maskUrl: maskCoverUrl,
      });
    }
    return null;
  }, [maskCoverUrl]);
  var ey = a_1(
    !!fullscreenPlayHide && playerState.isFullscreen && !playerState.paused,
    fullscreenPlayHide != null ? fullscreenPlayHide : 0,
  );
  var ef = o.useMemo(
    () =>
      controlsDisplayMode === "always" ||
      (controlsDisplayMode !== "never" && isHovered),
    [controlsDisplayMode, isHovered],
  );
  var e_ = o.useMemo(() => {
    if (
      definitionPopupVisible ||
      (showControlsWhileLoading && !playerState.dataLoaded)
    ) {
      return H;
    }
    if (controlsDisplayMode === "hover") {
      if (isHovered) {
        return H;
      }
      return "fade-leave-kg_Al4";
    }
    return "";
  }, [
    controlsDisplayMode,
    definitionPopupVisible,
    isHovered,
    playerState.dataLoaded,
    showControlsWhileLoading,
  ]);
  var visible =
    ef ||
    !!definitionPopupVisible ||
    !!(showControlsWhileLoading && !playerState.dataLoaded);
  var ex = o.useMemo(() => {
    if (enableContextMenu && contextMenu.length > 0) {
      return i.jsxs(R_1, {
        getPopupContainer: playerState.isFullscreen
          ? () => document.body
          : undefined,
        baseOptions: contextMenu,
        disable: !enableContextMenu,
        children: [
          videoPlayerNode,
          !playerState.dataLoaded && eg,
          playerState.dataLoaded
            ? i.jsx("div", {
                className: customControlClassName,
                children:
                  renderVideoSupport == null
                    ? undefined
                    : renderVideoSupport({
                        playerState,
                        playerRoot: evRef.current,
                      }),
              })
            : null,
        ],
      });
    }
    return i.jsxs(i.Fragment, {
      children: [
        videoPlayerNode,
        !playerState.dataLoaded && eg,
        playerState.dataLoaded
          ? i.jsx("div", {
              className: customControlClassName,
              children:
                renderVideoSupport == null
                  ? undefined
                  : renderVideoSupport({
                      playerState,
                      playerRoot: evRef.current,
                    }),
            })
          : null,
      ],
    });
  }, [
    enableContextMenu,
    contextMenu,
    eg,
    customControlClassName,
    renderVideoSupport,
    videoPlayerNode,
    playerState,
  ]);
  return i.jsxs("div", {
    className: _d("video-container-wvjp4G", wrapperClassName, {
      "hide-controls-H9BSue": ey,
      "loading-akn7zO": !playerState.dataLoaded,
    }),
    ref: evRef,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    children: [
      i.jsx("div", {
        style: {
          width: containerWidth != null ? containerWidth : Q,
          height: containerHeight != null ? containerHeight : Q,
          position: playerState.isFullscreen ? "unset" : "relative",
        },
        className: _d("video-node-wrapper-q0WwHJ", videoContainerClassName),
        children: ex,
      }),
      i.jsx("div", {
        className: "controls-tr-qvgG4_",
        children:
          renderVideoSlots == null
            ? undefined
            : renderVideoSlots(evRef, playerState, isHovered),
      }),
      i.jsx(J, {
        controlsStyle,
        playerState,
        visible,
        controlsClassName: _d([
          controlsClassName,
          e_,
          showControlsWhileLoading && !playerState.dataLoaded
            ? "controls-above-loading-b8e92D"
            : undefined,
        ]),
        onControlsMouseEnter,
        onControlsMouseLeave,
        controlsTimelineClassName,
        controlsPlayClassName,
        controlsDisplay,
        immersiveControl,
        player,
        videoContainer: evRef.current,
        customToggleFullscreen,
        onVideoFullscreen,
        onVideoPlay,
        onVideoPause,
        onVideoProgressDragEnd,
        onVolumeChange,
        defaultVideoDefinition,
        definitionList,
        selectedDefinition,
        definitionPopupVisible,
        onDefinitionPopupVisibleChange,
        onDefinitionChanged,
        onDefinitionSelect,
        showControlsWhileLoading,
        updateCacheDefinition,
        controlsMode,
        disableFullscreen,
        disableDragProgress,
        hideProgress,
        hideVolumeProgress,
        alwaysShowVolumeProgress,
      }),
    ],
  });
});
U.displayName = "BaseVideoPlayer";
const Y = u.PA(U);
const q = o.forwardRef(function (e, t) {
  const {
    url,
    coverUrl,
    loop = true,
    id,
    delayLoading,
    callbackMap,
    playOptions,
    playerType = "raw",
    enablePauseWhenOutView = true,
    withCache = false,
    cacheManager = vN,
    containerClickTogglesPlay = true,
    videoElementClassName,
    onVideoPlay,
    onVideoPause,
    onVideoError,
    onVideoClick,
    onCreatePlayer,
    onVolumeChange,
    renderLoading,
    reuseVideo,
  } = e;
  const FRef = o.useRef(null);
  const WRef = o.useRef(null);
  const V = v.h(p._);
  const id_1 = o.useMemo(() => xd(id), [id]);
  const [B, setB] = o.useState(delayLoading != null && delayLoading);
  o.useEffect(() => {
    if (delayLoading) {
      var e = setTimeout(() => {
        setB(false);
      }, 1000);
      return () => clearTimeout(e);
    }
  }, [delayLoading]);
  const videoPlayerManager = o.useMemo(() => {
    var e = l._(
      {
        id: id_1,
        url,
        loop,
        poster: coverUrl,
        autoplay: false,
        playerType,
        callbackMap,
        muted: Y_1.muted,
      },
      playOptions != null ? playOptions : {},
    );
    if (!withCache) {
      return V.createInstance(
        k_1,
        n._(l._({}, e), {
          reuseVideo,
        }),
      );
    }
    var t = n._(l._({}, e), {
      needCache: true,
    });
    var r = cacheManager.get(id_1);
    if (r) {
      r.updateConfig(t);
    } else {
      r = cacheManager.create(t, V);
    }
    return r;
  }, [
    withCache,
    cacheManager,
    id_1,
    url,
    loop,
    coverUrl,
    playerType,
    playOptions,
    callbackMap,
    reuseVideo,
    V,
  ]);
  o.useEffect(() => {
    videoPlayerManager.init();
    return () => {
      if (!withCache) {
        videoPlayerManager.dispose();
      }
    };
  }, [videoPlayerManager, withCache]);
  s.A(
    () =>
      r._(function* () {
        if (url) {
          yield videoPlayerManager.updateConfig(
            n._(
              l._(
                {
                  url,
                  loop,
                  poster: coverUrl,
                  autoplay: false,
                  playerType,
                },
                playOptions,
              ),
              {
                callbackMap,
                reuseVideo,
              },
            ),
          );
        }
      })(),
    [
      url,
      loop,
      coverUrl,
      playOptions,
      callbackMap,
      playerType,
      reuseVideo,
      videoPlayerManager,
    ],
  );
  const { playerState } = videoPlayerManager;
  const K_player = videoPlayerManager.player;
  o.useEffect(() => {
    if (
      WRef.current &&
      (K_player == null ? undefined : K_player.root) &&
      playerState.dataLoaded
    ) {
      if (!WRef.current.contains(K_player.root)) {
        WRef.current.innerHTML = "";
        WRef.current.appendChild(K_player.root);
      }
      if (onCreatePlayer != null) {
        onCreatePlayer(K_player);
      }
    }
  }, [K_player, playerState.dataLoaded, onCreatePlayer]);
  o.useEffect(() => {
    if (K_player && onVideoError) {
      var e = K_player.onError((e) => {
        onVideoError(e);
      });
      return () => {
        if (e != null) {
          e.dispose();
        }
      };
    }
  }, [K_player, onVideoError]);
  const onClick = o.useCallback(
    (e) => {
      if (onVideoClick != null) {
        onVideoClick(e);
      }
      if (containerClickTogglesPlay) {
        var t;
        var a = e.target;
        if (!((t = FRef.current) != null && t.contains(a))) {
          if (playerState.paused) {
            if (K_player != null) {
              K_player.play();
            }
            if (onVideoPlay != null) {
              onVideoPlay();
            }
          } else {
            if (K_player != null) {
              K_player.pause();
            }
            if (onVideoPause != null) {
              onVideoPause();
            }
          }
        }
      }
    },
    [
      containerClickTogglesPlay,
      onVideoClick,
      onVideoPause,
      onVideoPlay,
      K_player,
      playerState.paused,
    ],
  );
  const videoPlayerNode = o.useMemo(() => {
    var e = !playerState.dataLoaded && !!renderLoading;
    return i.jsxs(i.Fragment, {
      children: [
        i.jsx("div", {
          className: _d("video-wrapper-RJQOTL", videoElementClassName),
          ref: WRef,
          onClick,
          id: id_1,
        }),
        !B && e
          ? i.jsx("div", {
              className: "loading-wrapper-C7vxI1",
              children: renderLoading(),
            })
          : null,
      ],
    });
  }, [
    onClick,
    id_1,
    playerState.dataLoaded,
    B,
    renderLoading,
    videoElementClassName,
  ]);
  const ZRef = o.useRef(false);
  o.useEffect(() => {
    if (enablePauseWhenOutView && WRef.current) {
      var e;
      var t;
      var a;
      var r;
      e = WRef.current;
      (r = new IntersectionObserver(
        (e) => {
          e.forEach((e) => {
            var a;
            var r;
            if (e.isIntersecting) {
              if (!(t == null || (a = t.inView) == null)) {
                a.call(t);
              }
            } else if (!(t == null || (r = t.outView) == null)) {
              r.call(t);
            }
          });
        },
        {
          root: null,
          rootMargin: "0px",
          threshold:
            (a = (t = {
              outView: () => {
                if (!playerState.paused) {
                  if (K_player != null) {
                    K_player.pause();
                  }
                  ZRef.current = true;
                }
              },
              inView: () => {
                if (ZRef.current) {
                  if (K_player != null) {
                    K_player.play();
                  }
                  ZRef.current = false;
                }
              },
            }).threshold) != null
              ? a
              : 0.1,
        },
      )).observe(e);
      var l = r;
      return () => {
        l.disconnect();
      };
    }
  }, [K_player, playerState.paused, enablePauseWhenOutView]);
  o.useImperativeHandle(
    t,
    () =>
      ((e) => {
        const { videoPlayerManager, clearCache, onVideoPlay, onVideoPause } = e;
        let i = 0;
        let s = 0;
        return {
          play: (e) =>
            r._(function* () {
              const { player } = videoPlayerManager;
              if (!player) {
                return void y.V.error(
                  "play error",
                  "player is not initialized",
                );
              }
              const r = ++i;
              const n = s;
              const o = () => {
                if (r === i) {
                  if (n !== s) {
                    return void player.pause();
                  }
                  if (onVideoPlay != null) {
                    onVideoPlay();
                  }
                }
              };
              try {
                if (e !== undefined) {
                  player.muted = e;
                }
                yield player.play();
                o();
              } catch (error) {
                if (r !== i || n !== s) {
                  return;
                }
                y.V.error("autoplay error", error);
                player.muted = e === undefined || e;
                if (!videoPlayerManager.playerState.dataLoaded) {
                  player.load();
                }
                setTimeout(() => {
                  if (r === i && n === s) {
                    player
                      .play()
                      .then(o)
                      .catch((e) => {
                        y.V.error("muted autoplay error", e);
                      });
                  }
                }, 2);
              }
            })(),
          replay() {
            let e;
            if ((e = videoPlayerManager.player) != null) {
              e.replay();
            }
          },
          pause() {
            s += 1;
            const { player } = videoPlayerManager;
            if (player) {
              const a = player.paused;
              player.pause();
              if (!(a || onVideoPause == null)) {
                onVideoPause();
              }
            }
          },
          setCurrentTime(e) {
            if (videoPlayerManager.player) {
              videoPlayerManager.player.currentTime = e;
            }
          },
          getCurrentTime() {
            let e;
            let a;
            if (
              (e =
                (a = videoPlayerManager.player) == null
                  ? undefined
                  : a.currentTime) != null
            ) {
              return e;
            }
            return 0;
          },
          loop() {
            if (videoPlayerManager.player) {
              videoPlayerManager.player.loop = true;
            }
          },
          getPlayer: () => videoPlayerManager.player,
          getPlayerState: () => videoPlayerManager.playerState,
          clearCache() {
            if (clearCache) {
              clearCache();
            } else {
              videoPlayerManager.clearCache();
            }
          },
          dispose() {
            let e;
            s += 1;
            if ((e = videoPlayerManager.player) != null) {
              e.dispose();
            }
          },
        };
      })({
        videoPlayerManager,
        clearCache: withCache ? () => cacheManager.clear(id_1) : undefined,
        onVideoPlay,
        onVideoPause,
      }),
    [
      cacheManager,
      id_1,
      videoPlayerManager,
      withCache,
      onVideoPlay,
      onVideoPause,
    ],
  );
  const Y_1_muted = Y_1.muted;
  const Q =
    typeof (playOptions == null ? undefined : playOptions.muted) === "boolean"
      ? playOptions.muted
      : Y_1_muted;
  o.useEffect(() => {
    if (K_player) {
      K_player.muted = Q;
    }
  }, [K_player, Q]);
  const onVolumeChange_1 = o.useCallback(
    (e) => {
      Y_1.setMuted(e === 0);
      if (onVolumeChange != null) {
        onVolumeChange(e);
      }
    },
    [onVolumeChange],
  );
  return i.jsx(
    Y,
    n._(
      l._({}, e, {
        player: K_player,
        playerState,
        videoPlayerNode,
      }),
      {
        onVolumeChange: onVolumeChange_1,
      },
    ),
  );
});
var G = u.PA(q);
export { G as L };
