import i from "oa";
import n from "bk";
import o from "qa";
import a from "z8";
import s from "zS";
import c from "cO";
import l from "bT";
import m from "yI";
import d from "EC";
import p from "rU";
import _R from "xb";
import { HM, mA, vw } from "./module-TA_3.js";
import * as $ from "./module-FEe_2.js";
import { r as r_1 } from "./module-xB_3.js";
import _ from "A3";
import W from "gO";
import { H as H_1 } from "./module-PQ_3.js";
import { n as n_1 } from "./module-tO_3.js";
function u(e, onLoadRef) {
  const r = e == null ? undefined : e.src;
  if (e && e["data-loaded-src"] !== r) {
    e["data-loaded-src"] = r;
    ("decode" in e ? e.decode() : Promise.resolve())
      .catch(() => {})
      .then(() => {
        if (
          e.parentElement &&
          e.isConnected &&
          (onLoadRef == null ? undefined : onLoadRef.current)
        ) {
          var nativeEvent = new Event("load");
          Object.defineProperty(nativeEvent, "target", {
            writable: false,
            value: e,
          });
          var o = false;
          var a = false;
          onLoadRef.current(
            n._(i._({}, nativeEvent), {
              nativeEvent,
              currentTarget: e,
              target: e,
              isDefaultPrevented: () => o,
              isPropagationStopped: () => a,
              persist: () => {},
              preventDefault: () => {
                o = true;
                nativeEvent.preventDefault();
              },
              stopPropagation: () => {
                a = true;
                nativeEvent.stopPropagation();
              },
            }),
          );
        }
      });
  }
}
const h = l.memo(
  l.forwardRef(function (e, t) {
    const [r, ...h] = [e, t];
    const {
      elementTiming,
      sizes,
      mode,
      src,
      srcSet,
      sourcesAttr,
      width,
      height,
      decoding,
      className,
      style,
      fetchPriority,
      loading,
      onLoadRef,
      onLoad,
      onError,
    } = r;
    const I = o._(r, [
      "elementTiming",
      "sizes",
      "mode",
      "src",
      "srcSet",
      "sourcesAttr",
      "width",
      "height",
      "decoding",
      "className",
      "style",
      "fetchPriority",
      "loading",
      "onLoadRef",
      "onLoad",
      "onError",
    ]);
    const [S] = h;
    const kRef = l.useRef(null);
    const [M, setM] = l.useState(false);
    const [F, setF] = l.useState(sizes);
    const JRef = l.useRef(setF);
    JRef.current = setF;
    const z = mode === "autoSize";
    const j = s.A((e) => {
      if (
        (S &&
          (typeof S === "function"
            ? S(e)
            : typeof S === "object" && (S.current = e)),
        e)
      ) {
        if (z) {
          if (
            (kRef.current ||
              (kRef.current = new ResizeObserver(
                m.A((e) => {
                  for (var t of e) {
                    var r;
                    var i = t.target;
                    if ((r = JRef.current) != null) {
                      r.call(JRef, "".concat(i.width, "px"));
                    }
                  }
                }),
              )),
            e === null)
          ) {
            kRef.current.disconnect();
          } else {
            kRef.current.observe(e);
          }
        }
        if (e.complete) {
          u(e, onLoadRef);
        }
      }
    });
    const onLoad_1 = s.A((e) => {
      u(e.currentTarget, onLoadRef);
    });
    const onError_1 = s.A((e) => {
      if (mode !== "picture" && onError) {
        return void onError(e);
      }
      var { currentSrc } = e.currentTarget;
      if (
        (sourcesAttr == null
          ? undefined
          : sourcesAttr.find((e) => {
              var r;
              return (
                ((r = e.srcSet) == null ? undefined : r.includes(currentSrc)) ||
                e.src === currentSrc
              );
            })) &&
        !M
      ) {
        setM(true);
      } else if (onError) {
        onError(e);
      }
    });
    l.useEffect(() => {
      setM(false);
    }, [src, srcSet, sourcesAttr]);
    if (z || src || srcSet) {
      if (z || mode !== "picture") {
        if (z) {
          return a.jsx(
            "img",
            n._(i._({}, I), {
              elementtiming: elementTiming,
              fetchpriority: fetchPriority,
              loading,
              width,
              height,
              decoding,
              className,
              style,
              sizes: F,
              srcSet: F ? srcSet : "",
              src: c.m(F ? src : "", null, {
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
                  "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWQxbFh%bkpa$jJSc1kzaz$h$1JZ$*5CaWJWWjZZM2s1-W1Je%1-Z*lNalZzWW01%2$rd3p%bmxaZ$Rsc$lqSXhkMkl5Tld4aWJsSjZ%REpzZEZsWFpHeE1XRmw1$ERKT2RtSllRblpp-lZaM$pFaE5kb%Z-T$do-%1s$jBXb*Q0-kdKWFZu$mtRel$3WXpOb2FHTnRaREZqZHowOQ",
              }),
              ref: j,
              onLoad: onLoad_1,
              onError: onError_1,
            }),
          );
        }
        return a.jsx(
          "img",
          n._(i._({}, I), {
            elementtiming: elementTiming,
            fetchpriority: fetchPriority,
            loading,
            width,
            height,
            decoding,
            className,
            style,
            srcSet,
            src: c.m(src, null, {
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
                "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWQxbFh%bkpa$jJSc1kzaz$h$1JZ$*5CaWJWWjZZM2s1-W1Je%1-Z*lNalZzWW01%2$rd3p%bmxaZ$Rsc$lqSXhkMkl5Tld4aWJsSjZ%REpzZEZsWFpHeE1XRmw1$ERKT2RtSllRblpp-lZaM$pFaE5kb%Z-T$do-%1s$jBXb*Q0-kdKWFZu$mtRel$3WXpOb2FHTnRaREZqZHowOQ",
            }),
            ref: j,
            onLoad: onLoad_1,
            onError: onError_1,
          }),
        );
      }
      return a.jsxs("picture", {
        children: [
          !M &&
            (sourcesAttr == null
              ? undefined
              : sourcesAttr.map((e) =>
                  a.jsx(
                    "source",
                    i._({}, e),
                    "".concat(e.srcSet, "-").concat(e.type),
                  ),
                )),
          a.jsx(
            "img",
            n._(i._({}, I), {
              elementtiming: elementTiming,
              fetchpriority: fetchPriority,
              loading,
              width,
              height,
              decoding,
              className,
              style,
              src: c.m(src, null, {
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
                  "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWQxbFh%bkpa$jJSc1kzaz$h$1JZ$*5CaWJWWjZZM2s1-W1Je%1-Z*lNalZzWW01%2$rd3p%bmxaZ$Rsc$lqSXhkMkl5Tld4aWJsSjZ%REpzZEZsWFpHeE1XRmw1$ERKT2RtSllRblpp-lZaM$pFaE5kb%Z-T$do-%1s$jBXb*Q0-kdKWFZu$mtRel$3WXpOb2FHTnRaREZqZHowOQ",
              }),
              ref: j,
              onLoad: onLoad_1,
              onError: onError_1,
            }),
          ),
        ],
      });
    }
    return null;
  }),
);
h.displayName = "ImageElement";
const g = (e) => {
  var {
    nodeRef,
    mountOnEnter,
    children,
    in: _in,
    cssConfig,
    duration = 300,
  } = e;
  var { name, value } = cssConfig;
  var u = {
    entering: {
      [name]: value,
    },
    entered: {
      [name]: value,
    },
    exiting: {
      [name]: 0,
    },
    exited: {
      [name]: 0,
    },
  };
  var h = {
    transition: "".concat(name, " ").concat(duration, "ms"),
    [name]: 0,
  };
  return a.jsx(p.Ay, {
    nodeRef,
    in: _in,
    timeout: duration,
    mountOnEnter,
    children: (e) => {
      if (children == null) {
        return undefined;
      }
      return children(i._({}, h, u[e]));
    },
  });
};
const f = "image-peSfdV";
const T = "(mosaic-legacy/.*)~0x0";
function b(e, t) {
  const { useWebp = false, width, height } = t || {};
  for (const [o, { match, replace }] of Object.entries({
    [T]: {
      match: new RegExp(T),
      replace: "$1~".concat(width, "x").concat(height),
    },
    "(?!.*-sign)ibytedtos(?!.*-sign)": {
      match: /~\d+x\d+/,
      replace: "~".concat(width, "x").concat(height),
    },
    "(?!.*-sign)ibyteimg(?!.*-sign)": {
      match: /-obj|-resize:\d+:\d+/,
      replace: "-resize:".concat(width, ":").concat(height),
    },
    "googleusercontent.com": {
      match: /=(.*)/,
      replace: "=w".concat(width, "-h").concat(height),
    },
  })) {
    if (new RegExp(o).test(e)) {
      const c = e.replace(match, replace);
      if (!useWebp) {
        return c;
      }
      return c.replace(/\.image$/, ".webp");
    }
  }
  return e;
}
function E(e) {
  let t;
  if ((t = window) == null) {
    return undefined;
  }
  return t.requestAnimationFrame(() => {
    var t;
    if ((t = window) != null) {
      t.requestAnimationFrame(e);
    }
  });
}
export var sg = l.forwardRef(function (e, t) {
  let r;
  const { onLoad } = e;
  const uRef = l.useRef(onLoad);
  const { imageResolutionCacheManager } = l.useContext(n_1);
  const R = H_1();
  const { isHeroImage, onHeroImageLoad } = l.useContext(r_1);
  const SRef = l.useRef({
    inViewTime: 0,
    loadTime: 0,
    renderTime: 0,
    startTime: 0,
  });
  const k = s.A((e) => {
    Object.assign(SRef.current, e);
  });
  const {
    isHeroImage: isHeroImage_1,
    elementTiming,
    sizeRef,
    sizes,
    canShowImage,
    imageStyle,
    layoutStyle,
    imageClassName,
    layoutClassName,
    rawMode,
    props,
    isImageError,
    canShowPlaceholder,
    handleLoad,
    handleError,
    lazy,
    sizePickMode,
    progressiveSrc,
  } = ((e, t) => {
    let r;
    let a;
    const {
      src,
      sources,
      sizes,
      cdnOptimizeConfig,
      resolutionUrlMap,
      useChangeLoading,
      placeholder,
      errorPlaceHolder,
      imageStyle,
      layoutStyle,
      rawMode,
      imageClassName,
      layoutClassName,
      lazy,
      imageLazyTime,
      sizePickMode,
      elementTiming,
      isHeroImage,
      width,
      height,
      enableUseSize,
      preloadSizes,
      devMode,
      ignoreHidden,
      cacheKey,
      useCache,
    } = e;
    const props_1 = o._(e, [
      "src",
      "sources",
      "sizes",
      "cdnOptimizeConfig",
      "resolutionUrlMap",
      "useChangeLoading",
      "placeholder",
      "errorPlaceHolder",
      "imageStyle",
      "layoutStyle",
      "rawMode",
      "imageClassName",
      "layoutClassName",
      "lazy",
      "imageLazyTime",
      "sizePickMode",
      "elementTiming",
      "isHeroImage",
      "width",
      "height",
      "enableUseSize",
      "preloadSizes",
      "devMode",
      "ignoreHidden",
      "cacheKey",
      "useCache",
    ]);
    const sizePickMode_1 =
      sizePickMode != null
        ? sizePickMode
        : resolutionUrlMap
          ? "legacy"
          : "none";
    const [sizeRef_1, D] = (function (e) {
      let t;
      let r;
      const i =
        arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      const n =
        !(arguments.length > 2) || arguments[2] === undefined || arguments[2];
      const o =
        arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
      let a = 50;
      let s = false;
      if (typeof i === "string") {
        t = i;
      } else {
        if (i.dimension) {
          t = i.dimension;
        }
        if (i.throttle) {
          a = i.throttle;
        }
        if (i.throttleOption) {
          r = i.throttleOption;
        }
        if (i.ignoreHidden) {
          s = i.ignoreHidden;
        }
      }
      const cRef = l.useRef();
      const [m, setM] = l.useState(() => {
        var t = typeof e === "function" ? e() : e;
        return {
          width: (t || {}).clientWidth || 0,
          height: (t || {}).clientHeight || 0,
        };
      });
      const h = l.useCallback(
        (e) => {
          if (e == null ? undefined : e.length) {
            var { width, height } = e[0].contentRect;
            if (!(s && width === 0 && height === 0)) {
              setM((e) => {
                if (e) {
                  if (t === "width") {
                    if (e.width !== width) {
                      return {
                        width,
                        height,
                      };
                    }
                    return e;
                  }
                  if (t === "height") {
                    if (e.height !== height) {
                      return {
                        width,
                        height,
                      };
                    }
                    return e;
                  }
                  if (e.width !== width || e.height !== height) {
                    return {
                      width,
                      height,
                    };
                  }
                  return e;
                }
                return {
                  width,
                  height,
                };
              });
            }
          }
        },
        [t, s],
      );
      const { run } = _.default(h, a, [h], r);
      l.useLayoutEffect(() => {
        var t;
        var cRef_current = cRef.current;
        if (e) {
          cRef_current = typeof e === "function" ? e() : e;
        }
        if (n) {
          t = new ResizeObserver(run);
          if (cRef_current) {
            t.observe(cRef_current);
          }
        }
        return () => {
          var e;
          if (t == null || (e = t.disconnect) == null) {
            return undefined;
          }
          return e.call(t);
        };
      }, [cRef.current, typeof e === "function" ? undefined : e, h, n, ...o]);
      return [cRef, m];
    })(
      undefined,
      {
        ignoreHidden,
      },
      enableUseSize,
    );
    const L = s.A((e) => {
      if (typeof e === "number") {
        return e;
      }
      if (typeof e === "string") {
        var t = parseFloat(e);
        if (!isNaN(t)) {
          return t;
        }
      }
    });
    const width_1 = l.useMemo(() => {
      var e;
      return Math.round((e = L(width)) != null ? e : D.width);
    }, [(r = L(width)) != null ? r : D.width]);
    const height_1 = l.useMemo(() => {
      var e;
      return Math.round((e = L(height)) != null ? e : D.height);
    }, [(a = L(height)) != null ? a : D.height]);
    const U = l.useMemo(
      function () {
        return ((e, t, r) => {
          const {
            src,
            sources,
            resolutionUrlMap,
            srcSet,
            width,
            height,
            cdnOptimizeConfig,
            cacheKey,
            useCache,
          } = t;
          const d =
            (g =
              resolutionUrlMap == null ? undefined : resolutionUrlMap[480]) !=
            null
              ? g
              : "";
          const p = width > 0 && height > 0;
          if ((e === "smart_crop" || e === "legacy" || e === "cdn") && !p) {
            return {
              src: c.m(undefined, null, {
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
                  "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWQxbFh%bkpa$jJSc1kzaz$h$1JZ$*5CaWJWWjZZM2s1-W1Je%1-Z*lNalZzWW01%2$rd3p%bmxaZ$Rsc$lqSXhkMkl5Tld4aWJsSjZ%REpzZEZsWFpHeE1XRmw1$ERKc2RWcEhWalJN-mxKNlp$ZEdl$m96$m5vPQ",
              }),
              srcSet: undefined,
            };
          }
          switch (e) {
            case "browser":
              return {
                src: c.m(src != null ? src : d, null, {
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
                    "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWQxbFh%bkpa$jJSc1kzaz$h$1JZ$*5CaWJWWjZZM2s1-W1Je%1-Z*lNalZzWW01%2$rd3p%bmxaZ$Rsc$lqSXhkMkl5Tld4aWJsSjZ%REpzZEZsWFpHeE1XRmw1$ERKc2RWcEhWalJN-mxKNlp$ZEdl$m96$m5vPQ",
                }),
                srcSet: ((e) => {
                  if (e) {
                    const t = Object.keys(e);
                    const r = [];
                    let i = 0;
                    for (const n of t) {
                      const o = Number(n);
                      if (!isNaN(o)) {
                        r.push(o);
                        i = Math.max(i, o);
                      }
                    }
                    const a = [];
                    for (const s of t) {
                      const c = e[s];
                      if (s === "origin") {
                        a.push("".concat(c, " ").concat(i + 1, "w"));
                      } else {
                        const l = Number(s);
                        if (!isNaN(l)) {
                          a.push("".concat(c, " ").concat(l, "w"));
                        }
                      }
                    }
                    return a.join(",");
                  }
                })(resolutionUrlMap),
              };
            case "smart_crop":
              if ($.W_) {
                var g;
                let f;
                const R = vw({
                  width,
                  height,
                  resolutionUrlMap,
                });
                return {
                  src: c.m((f = R != null ? R : src) != null ? f : d, null, {
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
                      "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWQxbFh%bkpa$jJSc1kzaz$h$1JZ$*5CaWJWWjZZM2s1-W1Je%1-Z*lNalZzWW01%2$rd3p%bmxaZ$Rsc$lqSXhkMkl5Tld4aWJsSjZ%REpzZEZsWFpHeE1XRmw1$ERKc2RWcEhWalJN-mxKNlp$ZEdl$m96$m5vPQ",
                  }),
                  srcSet: undefined,
                };
              }
            case "legacy":
              let y;
              let T;
              let E;
              let imageKey;
              let _;
              const W = HM({
                width,
                height,
                resolutionUrlMap,
                autoPickNext: true,
              });
              if (W && resolutionUrlMap) {
                imageKey = ((e, t) => {
                  for (const r of Object.keys(e)) {
                    if (e[r] === t) {
                      return r;
                    }
                  }
                })(resolutionUrlMap, W);
              }
              if (r && cacheKey && imageKey && useCache) {
                _ = r.getLoadedImageUrlFromCache(cacheKey, "legacy", imageKey);
              }
              return {
                imageKey,
                src: c.m(
                  (y =
                    (T =
                      (E =
                        _ == null ? undefined : _.loadedHigherResolutionUrl) !=
                      null
                        ? E
                        : W) != null
                      ? T
                      : src) != null
                    ? y
                    : d,
                  null,
                  {
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
                      "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWQxbFh%bkpa$jJSc1kzaz$h$1JZ$*5CaWJWWjZZM2s1-W1Je%1-Z*lNalZzWW01%2$rd3p%bmxaZ$Rsc$lqSXhkMkl5Tld4aWJsSjZ%REpzZEZsWFpHeE1XRmw1$ERKc2RWcEhWalJN-mxKNlp$ZEdl$m96$m5vPQ",
                  },
                ),
                progressiveSrc:
                  _ == null ? undefined : _.loadedLowerResolutionUrl,
                srcSet: undefined,
                hasCache: !!(_ == null
                  ? undefined
                  : _.loadedHigherResolutionUrl),
              };
            case "cdn":
              const { width: width_1, height: height_1 } = mA(width, height);
              const I = src || d;
              const sourcesAttr = [];
              if (
                cdnOptimizeConfig == null
                  ? undefined
                  : cdnOptimizeConfig.useWebp
              ) {
                sourcesAttr.push({
                  srcSet: b(I, {
                    useWebp: true,
                    width: width_1,
                    height: height_1,
                  }),
                  type: "image/webp",
                });
              }
              sourcesAttr.push({
                srcSet: b(I, {
                  width: width_1,
                  height: height_1,
                }),
                type: "image/jpeg",
              });
              return {
                src,
                sourcesAttr,
              };
            case "picture":
              return {
                src,
                sourcesAttr: sources,
              };
            default:
              return {
                src: c.m(src != null ? src : d, null, {
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
                    "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWQxbFh%bkpa$jJSc1kzaz$h$1JZ$*5CaWJWWjZZM2s1-W1Je%1-Z*lNalZzWW01%2$rd3p%bmxaZ$Rsc$lqSXhkMkl5Tld4aWJsSjZ%REpzZEZsWFpHeE1XRmw1$ERKc2RWcEhWalJN-mxKNlp$ZEdl$m96$m5vPQ",
                }),
                srcSet,
              };
          }
        })(
          sizePickMode_1,
          {
            src,
            sources,
            resolutionUrlMap,
            width: width_1,
            height: height_1,
            cdnOptimizeConfig,
            cacheKey,
            useCache,
          },
          t,
        );
      },
      [
        sizePickMode_1,
        src,
        sources,
        resolutionUrlMap,
        width_1,
        height_1,
        cdnOptimizeConfig,
        t,
        cacheKey,
        useCache,
      ],
    );
    if (Object.hasOwnProperty.call(U, "src")) {
      props_1.src = c.m(U.src, null, {
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
          "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWQxbFh%bkpa$jJSc1kzaz$h$1JZ$*5CaWJWWjZZM2s1-W1Je%1-Z*lNalZzWW01%2$rd3p%bmxaZ$Rsc$lqSXhkMkl5Tld4aWJsSjZ%REpzZEZsWFpHeE1XRmw1$ERKc2RWcEhWalJN-mxKNlp$ZEdl$m96$m5vPQ",
      });
    }
    if (Object.hasOwnProperty.call(U, "srcSet")) {
      props_1.srcSet = U.srcSet;
    }
    if (Object.hasOwnProperty.call(U, "sourcesAttr")) {
      props_1.sourcesAttr = U.sourcesAttr;
    }
    const [K, setK] = l.useState({
      isImageLoad: false,
      isImageError: false,
    });
    const canShowPlaceholder_1 = !src || (!K.isImageLoad && !K.isImageError);
    const canShowImage_1 = K.isImageLoad && !K.isImageError;
    const handleLoad_1 = s.A((e) => {
      setK({
        isImageLoad: true,
        isImageError: false,
      });
      if (
        t &&
        cacheKey &&
        U.imageKey &&
        ["legacy", "smart_crop"].includes(sizePickMode_1)
      ) {
        t.setLoadedImageUrlToCache(cacheKey, sizePickMode_1, U.imageKey, U.src);
      }
    });
    const handleError_1 = s.A((e) => {
      setK({
        isImageError: true,
        isImageLoad: false,
      });
    });
    l.useEffect(() => {
      if (useChangeLoading && src && !U.hasCache) {
        setK((e) =>
          n._(i._({}, e), {
            isImageLoad: false,
          }),
        );
      }
    }, [src, useChangeLoading, U.hasCache]);
    return {
      sizeRef: sizeRef_1,
      sizes,
      imageStyle,
      layoutStyle,
      rawMode,
      imageClassName,
      layoutClassName,
      props: props_1,
      isImageError: K.isImageError,
      canShowPlaceholder: canShowPlaceholder_1,
      canShowImage: canShowImage_1,
      handleLoad: handleLoad_1,
      handleError: handleError_1,
      lazy,
      sizePickMode: sizePickMode_1,
      elementTiming,
      isHeroImage,
      progressiveSrc: U.progressiveSrc,
    };
  })(e, imageResolutionCacheManager);
  const { inViewRef, delayRender, show, inView } = ((e) => {
    const { delayTime, transitionTime } = e;
    const [inViewRef_1, n, inView_1] = ((e) => {
      const { time } = e;
      const [r, i] = d.A();
      const nRef = l.useRef(false);
      const [o, setO] = l.useState(typeof time !== "number");
      l.useEffect(() => {
        var e;
        if (typeof time !== "number") {
          return void setO(true);
        }
        if (i && !nRef.current) {
          e = window.setTimeout(() => {
            setO(true);
            nRef.current = true;
            e = undefined;
          }, time);
        }
        return () => {
          if (e) {
            clearTimeout(e);
          }
        };
      }, [i, time]);
      return [r, o, i];
    })({
      time: delayTime,
    });
    const sRef = l.useRef(null);
    const delayRender_1 = l.useCallback(
      (children) =>
        a.jsx(g, {
          nodeRef: sRef,
          in: n,
          duration: transitionTime,
          cssConfig: {
            name: "opacity",
            value: 1,
          },
          mountOnEnter: true,
          children: (style) =>
            a.jsx("div", {
              style,
              ref: sRef,
              children,
            }),
        }),
      [n, transitionTime],
    );
    return {
      inView: inView_1,
      show: n,
      inViewRef: inViewRef_1,
      delayRender: delayRender_1,
    };
  })({
    delayTime: e.imageLazyTime,
    transitionTime: 300,
  });
  l.useEffect(() => {
    if (inView) {
      var e = SRef.current;
      k({
        inViewTime: e.inViewTime === 0 ? performance.now() : e.inViewTime,
      });
    }
  }, [inView, k]);
  const ee = isHeroImage_1 != null ? isHeroImage_1 : isHeroImage;
  const et = s.A(function (e) {
    const t =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    const r =
      SRef.current.renderTime === 0
        ? performance.now()
        : SRef.current.renderTime;
    const loadTime = t === 0 ? SRef.current.loadTime : t;
    if (e && ee && onHeroImageLoad) {
      onHeroImageLoad(
        W.e(e, {
          loadTime,
          renderTime: r,
          startTime: r,
          inViewTime: SRef.current.inViewTime,
        }),
      );
    }
    k({
      loadTime,
      renderTime: r,
      startTime: r,
    });
  });
  l.useEffect(() => {
    if (show) {
      E(() => et());
    }
  }, [et, show]);
  uRef.current = (e) => {
    var t = performance.now();
    handleLoad(e);
    if (onLoad != null) {
      onLoad(e);
    }
    if (show) {
      E(() => et(e, t));
    } else {
      k({
        loadTime: t,
      });
    }
  };
  const er = l.useMemo(
    () =>
      i._(
        {},
        imageStyle,
        R.enable
          ? undefined
          : {
              transition: "none",
              opacity: 1,
            },
      ),
    [imageStyle, R.enable],
  );
  const mode = l.useMemo(
    () =>
      ((e) => {
        switch (e) {
          case "browser":
            return "autoSize";
          case "smart_crop":
          case "legacy":
          case "none":
          default:
            return;
          case "cdn":
          case "picture":
            return "picture";
        }
      })(sizePickMode),
    [sizePickMode],
  );
  const en = s.A((e) => {
    if (e) {
      inViewRef.current = e;
      sizeRef.current = e;
    }
  });
  const eo = s.A((e) => {
    if (t) {
      if (typeof t === "function") {
        t(e);
      } else if (typeof t === "object") {
        t.current = e;
      }
    }
    if (!e) {
      return;
    }
  });
  const ea = a.jsx(
    h,
    n._(
      i._(
        {
          elementTiming:
            elementTiming != null ? elementTiming : ee ? "" : undefined,
          mode,
          className: _R(f, imageClassName, {
            "imageHide-hZe58f":
              isImageError || (!canShowImage && !elementTiming),
            "noAnimation-xfRspw": progressiveSrc,
          }),
          style: er,
        },
        props,
      ),
      {
        loading: !lazy && inView ? "eager" : "lazy",
        fetchPriority:
          (r = props.fetchPriority) != null ? r : inView ? "high" : "low",
        sizes: sizePickMode === "browser" ? undefined : sizes,
        onLoadRef: uRef,
        onError: handleError,
        ref: eo,
      },
    ),
  );
  const es = l.useMemo(() => {
    if (progressiveSrc) {
      return a.jsx("img", {
        src: c.m(progressiveSrc, null, {
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
            "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWQxbFh%bkpa$jJSc1kzaz$h$1JZ$*5CaWJWWjZZM2s1-W1Je%1-Z*lNalZzWW01%2$rd3p%bmxaZ$Rsc$lqSXhkMkl5Tld4aWJsSjZ%REpzZEZsWFpHeE1XRmw1$ERKc2RWcEhWalJN-mxKNlp$ZEdl$m96$m5vPQ",
        }),
        className: _R(f, imageClassName),
        style: er,
        crossOrigin: "anonymous",
      });
    }
    return a.jsx(a.Fragment, {});
  }, [progressiveSrc, imageClassName, er]);
  if (rawMode) {
    return a.jsx(a.Fragment, {
      children: ea,
    });
  }
  return a.jsxs("div", {
    ref: en,
    className: _R("container-ZaGd6_", layoutClassName),
    style: layoutStyle,
    children: [
      e.lazy && R.enable ? delayRender(ea) : ea,
      canShowPlaceholder && R.enable && e.placeholder,
      !canShowImage && es,
      isImageError && e.errorPlaceHolder,
    ],
  });
});
sg.displayName = "ImageComponent";
