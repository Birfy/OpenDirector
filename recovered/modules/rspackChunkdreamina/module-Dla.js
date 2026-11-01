import n from "oa";
import o from "bk";
import l from "z8";
import "yS";
import i from "gL";
import _s from "xb";
import d from "Qey";
import u from "yw";
import v from "lj";
import m from "oe";
import h from "M8X";
import p from "wF";
import f from "xi";
import g from "pr";
import b from "bT";
import { Q as Q_1 } from "./module-RX_2.js";
import { H as H_1 } from "./module-N2P.js";
import * as y from "./module-ja.js";
import _ from "cO";
import { I as I_1 } from "./module-RMk_2.js";
import { N } from "./module-Pxp.js";
import j from "ks";
import M from "FK";
import { U as U_1 } from "./module-j1_2.js";
import S from "zS";
import P from "h5";
import W from "xhn";
import { DocxViewer } from "./module-H0x.js";
import { MarkdownViewer } from "./module-oEs.js";
import { PdfViewer } from "./module-PP_2.js";
let a;
const k = b.memo(function (e) {
  const { audioInfo, controlsClassName } = e;
  const { url, duration } = audioInfo;
  const duration_1 = H_1(url, duration);
  b.useEffect(() => {
    var e = (e) => {
      e.stopPropagation();
      e.stopImmediatePropagation();
      e.preventDefault();
    };
    window.addEventListener("wheel", e, {
      capture: true,
      passive: false,
    });
    return () => {
      window.removeEventListener("wheel", e, {
        capture: true,
      });
    };
  }, []);
  return l.jsx("div", {
    className: "audio-preview-content-uQyk4T",
    children: l.jsx(y.q, {
      url,
      containerWidth: "100%",
      duration: duration_1,
      enableProgress: true,
      controlsClassName,
    }),
  });
});
const L = "preview-yNupwg";
const E = "loading-sykMrF";
function useT(e) {
  const { imageUrl, onChange } = e;
  const { backgroundColor } = N(imageUrl);
  b.useEffect(() => {
    onChange(backgroundColor);
  }, [backgroundColor, onChange]);
  return null;
}
const z = b.memo(function (e) {
  const {
    imageInfo,
    active = true,
    onClose,
    contextMenuTriggerProps,
    topActions,
    enableSmartBackground = false,
  } = e;
  const { url } = imageInfo;
  const realImageSize = ((e, width, r) => {
    const [a, setA] = b.useState({
      width: width || 0,
      height: r || 0,
    });
    b.useEffect(() => {
      if (width && r) {
        setA({
          width,
          height: r,
        });
      } else if (e) {
        j.y(e)
          .then((e) => {
            setA({
              width: e.width,
              height: e.height,
            });
          })
          .catch((e) => {
            f.V.error("[useImageSize] failed to load image:", e);
            setA({
              width: 0,
              height: 0,
            });
          });
      } else {
        setA({
          width: 0,
          height: 0,
        });
      }
    }, [e, width, r]);
    return a;
  })(url, imageInfo.width, imageInfo.height);
  const [h, setH] = b.useState(1);
  const [w, setW] = b.useState(1);
  const [y, setY] = b.useState(false);
  const [C, setC] = b.useState(false);
  const [P, setP] = b.useState();
  const FRef = b.useRef(null);
  const RRef = b.useRef(null);
  const HRef = b.useRef(null);
  const IRef = b.useRef(h);
  const DRef = b.useRef(w);
  const O = b.useCallback(() => {
    var e;
    var t;
    var r;
    var a;
    var n =
      (e = (r = FRef.current) == null ? undefined : r.clientWidth) != null
        ? e
        : window.innerWidth;
    var o = Math.max(
      ((t = (a = FRef.current) == null ? undefined : a.clientHeight) != null
        ? t
        : window.innerHeight) -
        40 -
        80 * !!topActions,
      0,
    );
    return Math.min(
      Math.max(n - 160, 0) / Math.max(realImageSize.width, 1),
      o / Math.max(realImageSize.height, 1),
    );
  }, [realImageSize.width, realImageSize.height, topActions]);
  const centerScrollContainer = b.useCallback(() => {
    var RRef_current = RRef.current;
    if (RRef_current) {
      var { scrollWidth, clientWidth, scrollHeight, clientHeight } =
        RRef_current;
      if (!(scrollWidth <= clientWidth && scrollHeight <= clientHeight)) {
        RRef_current.scrollTo({
          left: Math.max(0, (scrollWidth - clientWidth) / 2),
          top: Math.max(0, (scrollHeight - clientHeight) / 2),
        });
      }
    }
  }, []);
  const applyFitScale = b.useCallback(() => {
    var e = O();
    setW(e);
    setH(e);
  }, [O]);
  b.useEffect(() => {
    IRef.current = h;
  }, [h]);
  b.useEffect(() => {
    DRef.current = w;
  }, [w]);
  b.useEffect(() => {
    if (!enableSmartBackground) {
      setP(undefined);
    }
  }, [enableSmartBackground]);
  const { handleMouseDown, hasDraggedRef, isDragging } = ((e, t, r) => {
    var aRef = b.useRef({
      x: 0,
      y: 0,
    });
    var nRef = b.useRef({
      x: 0,
      y: 0,
    });
    var oRef = b.useRef(false);
    var [isDragging_1, setIsDragging] = b.useState(false);
    var s = b.useCallback(
      (t) => {
        var r = t.clientX - aRef.current.x;
        var l = t.clientY - aRef.current.y;
        if (Math.abs(r) > 2 || Math.abs(l) > 2) {
          oRef.current = true;
        }
        if (e.current) {
          e.current.scrollTo({
            left: nRef.current.x - r,
            top: nRef.current.y - l,
          });
        }
      },
      [e],
    );
    var c = b.useCallback(() => {
      setIsDragging(false);
      document.removeEventListener("mousemove", s);
      document.removeEventListener("mouseup", c);
    }, []);
    return {
      handleMouseDown: b.useCallback(
        (l) => {
          if (!(t <= r) && e.current) {
            l.preventDefault();
            oRef.current = false;
            setIsDragging(true);
            aRef.current = {
              x: l.clientX,
              y: l.clientY,
            };
            nRef.current = {
              x: e.current.scrollLeft,
              y: e.current.scrollTop,
            };
            document.addEventListener("mousemove", s);
            document.addEventListener("mouseup", c);
          }
        },
        [t, r, e, s, c],
      ),
      hasDraggedRef: oRef,
      isDragging: isDragging_1,
    };
  })(RRef, h, w);
  ((e) => {
    var {
      applyFitScale,
      centerScrollContainer,
      scaleRef,
      initialScaleRef,
      enabled,
      onClose,
    } = e;
    var i = S.A((e) => {
      e.preventDefault();
      e.stopPropagation();
      if (scaleRef.current > initialScaleRef.current) {
        applyFitScale();
        requestAnimationFrame(() => {
          centerScrollContainer();
        });
        return;
      }
      if (onClose != null) {
        onClose();
      }
    });
    b.useEffect(() => {
      if (enabled) {
        var e = (e) => {
          if (e.key === "Escape") {
            i(e);
          }
        };
        window.addEventListener("keydown", e, true);
        return () => {
          window.removeEventListener("keydown", e, true);
        };
      }
    }, [enabled, i]);
  })({
    applyFitScale,
    centerScrollContainer,
    scaleRef: IRef,
    initialScaleRef: DRef,
    enabled: active,
    onClose,
  });
  b.useEffect(() => {
    if (active) {
      var e = (e) => {
        var t = e.key === "ArrowUp" || e.code === "ArrowUp";
        var r = e.key === "ArrowDown" || e.code === "ArrowDown";
        if (t || r) {
          e.preventDefault();
          e.stopPropagation();
          e.stopImmediatePropagation();
        }
      };
      window.addEventListener("keydown", e, true);
      return () => {
        window.removeEventListener("keydown", e, true);
      };
    }
  }, [active]);
  b.useEffect(() => {
    if (active) {
      var e = (e) => {
        var FRef_current = FRef.current;
        if (FRef_current) {
          var r = e.target;
          if (r && FRef_current.contains(r)) {
            e.stopPropagation();
            e.stopImmediatePropagation();
            return;
          }
          e.preventDefault();
        }
      };
      window.addEventListener("wheel", e, {
        capture: true,
        passive: false,
      });
      return () => {
        window.removeEventListener("wheel", e, {
          capture: true,
        });
      };
    }
  }, [active]);
  b.useEffect(() => {
    if (active && realImageSize.width !== 0 && realImageSize.height !== 0) {
      applyFitScale();
      var e = () => {
        if (!(IRef.current > DRef.current)) {
          applyFitScale();
        }
      };
      window.addEventListener("resize", e);
      return () => {
        window.removeEventListener("resize", e);
      };
    }
  }, [active, realImageSize.width, realImageSize.height, applyFitScale]);
  b.useLayoutEffect(() => {
    if (h > w) {
      centerScrollContainer();
    }
  }, [h, w, centerScrollContainer]);
  const onLoad = b.useCallback(() => {
    setY(true);
  }, []);
  const q = ((e) => {
    var {
      scale,
      initialScale,
      realImageSize,
      hasDraggedRef,
      applyFitScale,
      centerScrollContainer,
      setScale,
    } = e;
    return b.useCallback(
      (e) => {
        if (!hasDraggedRef.current) {
          var s = scale > initialScale;
          if (!s) {
            e.stopPropagation();
          }
          if (s) {
            applyFitScale();
            requestAnimationFrame(() => {
              centerScrollContainer();
            });
            return;
          }
          var c = realImageSize.width * scale;
          var d = realImageSize.height * scale;
          setScale(
            c < realImageSize.width || d < realImageSize.height
              ? 1
              : 1.1 * scale,
          );
        }
      },
      [
        scale,
        initialScale,
        realImageSize.width,
        realImageSize.height,
        hasDraggedRef,
        applyFitScale,
        centerScrollContainer,
        setScale,
      ],
    );
  })({
    scale: h,
    initialScale: w,
    realImageSize,
    hasDraggedRef,
    applyFitScale,
    centerScrollContainer,
    setScale: setH,
  });
  const B = b.useCallback(() => {
    setC(true);
  }, []);
  const $ = b.useCallback(() => {
    setC(false);
  }, []);
  const onClick = ((e) => {
    var { containerRef, imageRef, onClose } = e;
    return b.useCallback(
      (e) => {
        var n;
        var o = e.target === containerRef.current;
        var l =
          e.target !== imageRef.current &&
          !((n = imageRef.current) == null ? undefined : n.contains(e.target));
        if (o || l) {
          if (onClose != null) {
            onClose();
          }
        }
      },
      [containerRef, imageRef, onClose],
    );
  })({
    containerRef: FRef,
    imageRef: HRef,
    onClose,
  });
  const Y = b.useMemo(() => {
    if (C) {
      if (h > w) {
        return "zoom-out-cursor-Kb8BWE";
      }
      return "zoom-in-cursor-pRAQW9";
    }
  }, [C, h, w]);
  const G = b.useMemo(() => {
    if (topActions || P) {
      return o._(
        n._(
          {},
          topActions
            ? {
                paddingTop: 80,
                boxSizing: "border-box",
              }
            : undefined,
        ),
        {
          backgroundColor: P,
        },
      );
    }
  }, [P, topActions]);
  const ee = b.useMemo(
    () => ({
      width: realImageSize.width * h,
      height: realImageSize.height * h,
      placeSelf: "center",
      cursor: h > w ? (isDragging ? "grabbing" : "grab") : "zoom-in",
      borderRadius: h > w ? 0 : "16px",
    }),
    [h, realImageSize, isDragging, w],
  );
  const children = b.useMemo(() => {
    if (contextMenuTriggerProps) {
      return l.jsx(
        M.R,
        o._(n._({}, contextMenuTriggerProps), {
          style: o._(n._({}, contextMenuTriggerProps.style), {
            display: "grid",
          }),
          children: l.jsx("img", {
            ref: HRef,
            src: _.m(url, null, {
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
                "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1-W1Je%1-%mlNalIy$1RJNWRHTkhPWFZh$np$d1kzaz$jR0p-%m01-$$6RjNZMjFXTW1*WFZqTk1NbXgw$1Zka2JFeFlRbmxh$0Zwd1dsa*pk$1JJ$*pSWldFcH$aRmhO%FE9PQ",
            }),
            alt: d.Ay.t("frame_change_image_title"),
            role: "button",
            tabIndex: 0,
            "aria-pressed": h > w,
            onKeyDown: g.q,
            className: L,
            style: ee,
            "data-loaded": y,
            onMouseEnter: B,
            onMouseLeave: $,
            onMouseDown: handleMouseDown,
            onClick: q,
            onLoad,
            draggable: "false",
            crossOrigin: "anonymous",
          }),
        }),
      );
    }
    return l.jsx(U_1, {
      children: l.jsx("img", {
        ref: HRef,
        src: _.m(url, null, {
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
            "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1-W1Je%1-%mlNalIy$1RJNWRHTkhPWFZh$np$d1kzaz$jR0p-%m01-$$6RjNZMjFXTW1*WFZqTk1NbXgw$1Zka2JFeFlRbmxh$0Zwd1dsa*pk$1JJ$*pSWldFcH$aRmhO%FE9PQ",
        }),
        alt: d.Ay.t("frame_change_image_title"),
        role: "button",
        tabIndex: 0,
        "aria-pressed": h > w,
        onKeyDown: g.q,
        className: L,
        style: ee,
        "data-loaded": y,
        onMouseEnter: B,
        onMouseLeave: $,
        onMouseDown: handleMouseDown,
        onClick: q,
        onLoad,
        draggable: "false",
        crossOrigin: "anonymous",
      }),
    });
  }, [
    url,
    contextMenuTriggerProps,
    ee,
    y,
    B,
    $,
    handleMouseDown,
    q,
    h,
    w,
    onLoad,
  ]);
  return l.jsxs("div", {
    ref: FRef,
    className: _s("zoom-image-container-xtX6gF", Y),
    onClick,
    children: [
      topActions
        ? l.jsx("div", {
            className: "top-actions-bar-KoxyKj",
            onClick: (e) => {
              e.stopPropagation();
            },
            children: topActions,
          })
        : null,
      enableSmartBackground
        ? l.jsx(useT, {
            imageUrl: url,
            onChange: setP,
          })
        : null,
      url
        ? l.jsxs("div", {
            ref: RRef,
            className: "scroll-container-oPw73e",
            style: G,
            children: [
              l.jsx("div", {
                className: "image-wrapper-lNlU44",
                children,
              }),
              !y &&
                l.jsx(I_1, {
                  className: E,
                  size: 24,
                }),
            ],
          })
        : l.jsx(I_1, {
            className: E,
            size: 24,
          }),
    ],
  });
});
const F = {
  "video-preview-container": "video-preview-container-i9Jwsk",
  videoPreviewContainer: "video-preview-container-i9Jwsk",
  "video-wrapper": "video-wrapper-ZMZ_bm",
  videoWrapper: "video-wrapper-ZMZ_bm",
};
const R = b.memo(function (e) {
  const { videoInfo, verticalSafeArea = 40 } = e;
  const { url, poster } = videoInfo;
  const oRef = b.useRef(null);
  const iRef = b.useRef(null);
  const [s, setS] = b.useState({
    width: P.DK(),
    height: P.mJ(),
  });
  const [d, setD] = b.useState({
    width: videoInfo.width || 0,
    height: videoInfo.height || 0,
  });
  b.useEffect(() => {
    var e = () => {
      setS({
        width: P.DK(),
        height: P.mJ(),
      });
    };
    window.addEventListener("resize", e);
    return () => {
      window.removeEventListener("resize", e);
    };
  }, []);
  b.useEffect(() => {
    setD({
      width: videoInfo.width || 0,
      height: videoInfo.height || 0,
    });
  }, [videoInfo.width, videoInfo.height]);
  const onMetaLoaded = b.useCallback(() => {
    if (oRef.current) {
      var e = oRef.current.querySelector("video");
      if ((e == null ? undefined : e.videoWidth) && e.videoHeight) {
        setD({
          width: e.videoWidth,
          height: e.videoHeight,
        });
      }
    }
  }, []);
  const callbackMap = b.useMemo(
    () => ({
      onMetaLoaded,
    }),
    [onMetaLoaded],
  );
  const aspectRatio = b.useMemo(() => {
    var { width, height } = d;
    if (width === 0 && height === 0) {
      return "16 / 9";
    }
    return "".concat(width, " / ").concat(height);
  }, [d]);
  const p = b.useMemo(() => {
    var { width, height } = s;
    var maxWidth = Math.max(width - 160, 0);
    var n = Math.max(height - verticalSafeArea, 0);
    if (d.width > 0 && d.height > 0) {
      var o = Math.min(maxWidth / d.width, n / d.height, 1);
      return {
        width: d.width * o,
        height: d.height * o,
      };
    }
    return {
      aspectRatio,
      width: "auto",
      maxWidth,
      height: n,
    };
  }, [d, s, aspectRatio, verticalSafeArea]);
  const onMouseEnter = b.useCallback(() => {
    var e;
    if ((e = iRef.current) != null) {
      e.play();
    }
  }, []);
  const onMouseLeave = b.useCallback(() => {
    var e;
    if ((e = iRef.current) != null) {
      e.pause();
    }
  }, []);
  b.useEffect(() => {
    var e = (e) => {
      e.stopPropagation();
      e.stopImmediatePropagation();
      e.preventDefault();
    };
    window.addEventListener("wheel", e, {
      capture: true,
      passive: false,
    });
    return () => {
      window.removeEventListener("wheel", e, {
        capture: true,
      });
    };
  }, []);
  return l.jsx("div", {
    ref: oRef,
    className: F.videoPreviewContainer,
    style: p,
    children: l.jsx(W.L, {
      wrapperClassName: F.videoWrapper,
      videoElementClassName: F.videoElement,
      ref: iRef,
      url,
      onMouseEnter,
      onMouseLeave,
      coverUrl: poster,
      callbackMap,
      controlsMode: "normal",
      playerType: "raw",
      tryAutoPlayWithVolume: true,
      loop: true,
    }),
  });
});
const O = b.memo(function (e) {
  const { content } = e;
  const [r, setR] = b.useState(false);
  const [n, setN] = b.useState(content);
  if (n !== content) {
    setN(content);
    setR(false);
  }
  const onLoaded = b.useCallback(() => {
    setR(true);
  }, []);
  return l.jsxs("div", {
    className: "wrapper-Qnlt3t",
    "data-loading": !r || undefined,
    children: [
      r
        ? null
        : l.jsx("div", {
            className: "loading-overlay-VIAuyw",
            children: l.jsx(I_1, {
              size: 24,
            }),
          }),
      l.jsx("div", {
        className: r ? "content-visible-LIldDb" : "content-hidden-i9VtFJ",
        children: b.cloneElement(content, {
          onLoaded,
        }),
      }),
    ],
  });
});
const Q = {
  pdf: PdfViewer,
  docx: DocxViewer,
  markdown: MarkdownViewer,
};
const X = b.memo(function (e) {
  const { type, url } = e;
  const content = b.useMemo(() => {
    var e = Q[type];
    return l.jsx(e, {
      url,
    });
  }, [type, url]);
  return l.jsx(O, {
    content,
  });
});
const J = b.memo(function (e) {
  const { item, active, paging, imagePreviewOptions, onClose } = e;
  switch (item.type) {
    case "image":
      return l.jsx(
        z,
        o._(n._({}, imagePreviewOptions), {
          imageInfo: item,
          active,
          onClose,
        }),
      );
    case "video":
      return l.jsx(R, {
        videoInfo: {
          url: item.url,
          width: item.width,
          height: item.height,
          poster: item.coverUrl,
        },
        verticalSafeArea: paging ? 160 : undefined,
      });
    case "audio":
      return l.jsx(k, {
        audioInfo: {
          url: item.url,
          duration: item.duration,
          title: item.name,
        },
        controlsClassName: "player-controller-unUnDB",
      });
    default:
      return l.jsx(X, {
        type: item.type,
        url: item.url,
      });
  }
});
const V = ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"];
const K = new Set(["image", "pdf", "docx", "markdown"]);
const U = new Set(["image", "video"]);
const q = b.memo(function (e) {
  const { items, index, imagePreviewOptions, onMove, onClose } = e;
  const [i, setI] = b.useState(() => new Set([index]));
  if (!i.has(index)) {
    setI(new Set(i).add(index));
  }
  const { length } = items;
  const paging = length > 1;
  const u = U.has(items[index].type);
  b.useLayoutEffect(() => {
    if (paging) {
      var e = (e) => {
        if (!e.isComposing && V.includes(e.key)) {
          e.preventDefault();
          e.stopImmediatePropagation();
          onMove(e.key === "ArrowLeft" || e.key === "ArrowUp" ? -1 : 1);
        }
      };
      window.addEventListener("keydown", e, true);
      return () => window.removeEventListener("keydown", e, true);
    }
  }, [paging, onMove]);
  return l.jsxs("div", {
    className: u ? "preview-xttOaR" : undefined,
    onClick: (e) => {
      if (u && e.target === e.currentTarget) {
        onClose();
      }
    },
    children: [
      items.map((item, t) => {
        var active = t === index;
        if (active || (i.has(t) && K.has(item.type))) {
          return l.jsx(
            "div",
            {
              className: active ? "active-slot-N4c7pb" : "inactive-slot-GFeugb",
              "data-preview-active": active || undefined,
              children: l.jsx(J, {
                item,
                active,
                paging,
                imagePreviewOptions,
                onClose,
              }),
            },
            t,
          );
        }
        return null;
      }),
      paging
        ? l.jsx(Q_1, {
            className: "pager-mA84K1",
            index,
            length,
            showPageNumber: true,
            onPrevious: () => onMove(-1),
            onNext: () => onMove(1),
          })
        : null,
    ],
  });
});
const B = {
  background: "var(--bg-mask-80, rgba(0, 0, 0, 0.8))",
};
const maskStyle = o._(n._({}, B), {
  pointerEvents: "none",
});
class Z {
  _getModalProps() {
    const { items, className, imagePreviewOptions } = this._options;
    return o._(
      n._(
        {},
        ((e, wrapClassName) => {
          const r = {
            title: undefined,
            className: undefined,
            maskStyle: undefined,
            focusLock: undefined,
            escToExit: true,
            closeIcon: l.jsx(u.gzW, {
              role: "button",
              tabIndex: 0,
              "aria-label": d.Ay.t("dreamina_web_common_close"),
              onKeyDown: g.q,
              size: e.type === "image" ? undefined : 20,
            }),
          };
          switch (e.type) {
            case "image":
              return o._(n._({}, r), {
                simple: true,
                wrapClassName: _s(
                  "enlarge-image-preview-modal-VBFzYq",
                  wrapClassName,
                ),
                maskStyle,
                focusLock: true,
                escToExit: false,
              });
            case "video":
              return o._(n._({}, r), {
                simple: true,
                wrapClassName: _s(
                  "enlarge-video-preview-modal-AoWZGw",
                  wrapClassName,
                ),
              });
            case "audio":
              return o._(n._({}, r), {
                title: e.name,
                simple: false,
                className: "audio-preview-modal-n1B9vT",
                wrapClassName: _s(
                  "audio-preview-modal-wrapper-cSVHCg",
                  wrapClassName,
                ),
                maskStyle: B,
                focusLock: true,
              });
            default:
              return o._(n._({}, r), {
                simple: false,
                className: "document-preview-modal-O_Rlny",
                wrapClassName,
              });
          }
        })(items[this._index], className),
      ),
      {
        content: l.jsx(p.Z, {
          instantiationService: this._containerService,
          children: l.jsx(q, {
            items,
            imagePreviewOptions,
            index: this._index,
            onMove: this._move,
            onClose: this.close,
          }),
        }),
      },
    );
  }
  constructor(e, t, r) {
    this._containerService = e;
    this._options = t;
    this._closing = false;
    this.close = () => {
      this._closing = true;
      this._modal.close();
    };
    this._move = (e) => {
      if (!this._closing) {
        var t;
        var r;
        var { length } = this._options.items;
        this._index = (this._index + e + length) % length;
        if ((t = (r = this._options).onIndexChange) != null) {
          t.call(r, this._index);
        }
        this._modal.update(this._getModalProps());
      }
    };
    var { promise, resolve } = Promise.withResolvers();
    this.closed = promise;
    this._index = r;
    var c = ((e, t) => {
      try {
        return h.cQ(e, v.K).onKeepAliveChange((e) => {
          var { status } = e;
          if (status === m.V.InActivated) {
            t();
          }
        });
      } catch (error) {
        f.V.warn("[MediaPreviewModal] 获取路由服务失败", error);
        return;
      }
    })(e, this.close);
    var { signal } = t;
    if (signal != null) {
      signal.addEventListener("abort", this.close, {
        once: true,
      });
    }
    this._modal = i.A.confirm(
      o._(n._({}, this._getModalProps()), {
        footer: null,
        icon: null,
        closable: true,
        mask: true,
        maskClosable: true,
        onCancel: () => {
          this._closing = true;
        },
        afterClose: () => {
          if (c != null) {
            c.dispose();
          }
          if (signal != null) {
            signal.removeEventListener("abort", this.close);
          }
          if (a === this) {
            a = undefined;
          }
          resolve();
        },
      }),
    );
  }
}
export function H(e, t) {
  const { items, initialIndex = 0, signal } = t;
  if (signal == null ? undefined : signal.aborted) {
    return Promise.resolve();
  }
  if (items[initialIndex]) {
    if (a != null) {
      a.close();
    }
    return (a = new Z(e, t, initialIndex)).closed;
  }
  f.V.warn("[MediaPreviewModal] initialIndex 越界", {
    initialIndex,
    length: items.length,
  });
  return Promise.resolve();
}
