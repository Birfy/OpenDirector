import r from "oa";
import n from "bk";
import a from "qa";
import o from "z8";
import s from "zS";
import l from "cO";
import c from "bT";
import d from "yI";
import p from "EC";
import h from "rU";
import _f from "xb";
import { HM, mA, vw } from "./module-TA.js";
import * as w from "./module-FEe.js";
import { r as r_1 } from "./module-xB_2.js";
import R from "A3";
import { e as e_1 } from "./module-gO.js";
import { H as H_1 } from "./module-PQ.js";
import { n as n_1 } from "./module-tO.js";
function u(e, onLoadRef) {
  const i = e == null ? undefined : e.src;
  if (e && e["data-loaded-src"] !== i) {
    e["data-loaded-src"] = i;
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
          var a = false;
          var o = false;
          onLoadRef.current(
            n._(r._({}, nativeEvent), {
              nativeEvent,
              currentTarget: e,
              target: e,
              isDefaultPrevented: () => a,
              isPropagationStopped: () => o,
              persist: () => {},
              preventDefault: () => {
                a = true;
                nativeEvent.preventDefault();
              },
              stopPropagation: () => {
                o = true;
                nativeEvent.stopPropagation();
              },
            }),
          );
        }
      });
  }
}
const m = c.memo(
  c.forwardRef(function (e, t) {
    const [i, ...m] = [e, t];
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
    } = i;
    const E = a._(i, [
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
    const [W] = m;
    const MRef = c.useRef(null);
    const [C, setC] = c.useState(false);
    const [I, setI] = c.useState(sizes);
    const $Ref = c.useRef(setI);
    $Ref.current = setI;
    const O = mode === "autoSize";
    const Z = s.A((e) => {
      if (
        (W &&
          (typeof W === "function"
            ? W(e)
            : typeof W === "object" && (W.current = e)),
        e)
      ) {
        if (O) {
          if (
            (MRef.current ||
              (MRef.current = new ResizeObserver(
                d.A((e) => {
                  for (var t of e) {
                    var i;
                    var r = t.target;
                    if ((i = $Ref.current) != null) {
                      i.call($Ref, "".concat(r.width, "px"));
                    }
                  }
                }),
              )),
            e === null)
          ) {
            MRef.current.disconnect();
          } else {
            MRef.current.observe(e);
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
              var i;
              return (
                ((i = e.srcSet) == null ? undefined : i.includes(currentSrc)) ||
                e.src === currentSrc
              );
            })) &&
        !C
      ) {
        setC(true);
      } else if (onError) {
        onError(e);
      }
    });
    c.useEffect(() => {
      setC(false);
    }, [src, srcSet, sourcesAttr]);
    if (O || src || srcSet) {
      if (O || mode !== "picture") {
        if (O) {
          return o.jsx(
            "img",
            n._(r._({}, E), {
              elementtiming: elementTiming,
              fetchpriority: fetchPriority,
              loading,
              width,
              height,
              decoding,
              className,
              style,
              sizes: I,
              srcSet: I ? srcSet : "",
              src: l.m(I ? src : "", null, {
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
              ref: Z,
              onLoad: onLoad_1,
              onError: onError_1,
            }),
          );
        }
        return o.jsx(
          "img",
          n._(r._({}, E), {
            elementtiming: elementTiming,
            fetchpriority: fetchPriority,
            loading,
            width,
            height,
            decoding,
            className,
            style,
            srcSet,
            src: l.m(src, null, {
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
            ref: Z,
            onLoad: onLoad_1,
            onError: onError_1,
          }),
        );
      }
      return o.jsxs("picture", {
        children: [
          !C &&
            (sourcesAttr == null
              ? undefined
              : sourcesAttr.map((e) =>
                  o.jsx(
                    "source",
                    r._({}, e),
                    "".concat(e.srcSet, "-").concat(e.type),
                  ),
                )),
          o.jsx(
            "img",
            n._(r._({}, E), {
              elementtiming: elementTiming,
              fetchpriority: fetchPriority,
              loading,
              width,
              height,
              decoding,
              className,
              style,
              src: l.m(src, null, {
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
              ref: Z,
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
m.displayName = "ImageElement";
const v = (e) => {
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
  var m = {
    transition: "".concat(name, " ").concat(duration, "ms"),
    [name]: 0,
  };
  return o.jsx(h.Ay, {
    nodeRef,
    in: _in,
    timeout: duration,
    mountOnEnter,
    children: (e) => {
      if (children == null) {
        return undefined;
      }
      return children(r._({}, m, u[e]));
    },
  });
};
const g = "image-peSfdV";
const _ = "(mosaic-legacy/.*)~0x0";
function x(e, t) {
  const { useWebp = false, width, height } = t || {};
  for (const [a, { match, replace }] of Object.entries({
    [_]: {
      match: new RegExp(_),
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
    if (new RegExp(a).test(e)) {
      const l = e.replace(match, replace);
      if (!useWebp) {
        return l;
      }
      return l.replace(/\.image$/, ".webp");
    }
  }
  return e;
}
function T(e) {
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
export var sg = c.forwardRef(function (e, t) {
  let i;
  const { onLoad } = e;
  const uRef = c.useRef(onLoad);
  const { imageResolutionCacheManager } = c.useContext(n_1);
  const f = H_1();
  const { isHeroImage, onHeroImageLoad } = c.useContext(r_1);
  const WRef = c.useRef({
    inViewTime: 0,
    loadTime: 0,
    renderTime: 0,
    startTime: 0,
  });
  const M = s.A((e) => {
    Object.assign(WRef.current, e);
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
    let i;
    let o;
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
    const props_1 = a._(e, [
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
    const [sizeRef_1, U] = (function (e) {
      let t;
      let i;
      const r =
        arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      const n =
        !(arguments.length > 2) || arguments[2] === undefined || arguments[2];
      const a =
        arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
      let o = 50;
      let s = false;
      if (typeof r === "string") {
        t = r;
      } else {
        if (r.dimension) {
          t = r.dimension;
        }
        if (r.throttle) {
          o = r.throttle;
        }
        if (r.throttleOption) {
          i = r.throttleOption;
        }
        if (r.ignoreHidden) {
          s = r.ignoreHidden;
        }
      }
      const lRef = c.useRef();
      const [d, setD] = c.useState(() => {
        var t = typeof e === "function" ? e() : e;
        return {
          width: (t || {}).clientWidth || 0,
          height: (t || {}).clientHeight || 0,
        };
      });
      const m = c.useCallback(
        (e) => {
          if (e == null ? undefined : e.length) {
            var { width, height } = e[0].contentRect;
            if (!(s && width === 0 && height === 0)) {
              setD((e) => {
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
      const { run } = R.default(m, o, [m], i);
      c.useLayoutEffect(() => {
        var t;
        var lRef_current = lRef.current;
        if (e) {
          lRef_current = typeof e === "function" ? e() : e;
        }
        if (n) {
          t = new ResizeObserver(run);
          if (lRef_current) {
            t.observe(lRef_current);
          }
        }
        return () => {
          var e;
          if (t == null || (e = t.disconnect) == null) {
            return undefined;
          }
          return e.call(t);
        };
      }, [lRef.current, typeof e === "function" ? undefined : e, m, n, ...a]);
      return [lRef, d];
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
    const width_1 = c.useMemo(() => {
      var e;
      return Math.round((e = L(width)) != null ? e : U.width);
    }, [(i = L(width)) != null ? i : U.width]);
    const height_1 = c.useMemo(() => {
      var e;
      return Math.round((e = L(height)) != null ? e : U.height);
    }, [(o = L(height)) != null ? o : U.height]);
    const J = c.useMemo(
      function () {
        return ((e, t, i) => {
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
          const p =
            (v =
              resolutionUrlMap == null ? undefined : resolutionUrlMap[480]) !=
            null
              ? v
              : "";
          const h = width > 0 && height > 0;
          if ((e === "smart_crop" || e === "legacy" || e === "cdn") && !h) {
            return {
              src: l.m(undefined, null, {
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
                src: l.m(src != null ? src : p, null, {
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
                    const i = [];
                    let r = 0;
                    for (const n of t) {
                      const a = Number(n);
                      if (!isNaN(a)) {
                        i.push(a);
                        r = Math.max(r, a);
                      }
                    }
                    const o = [];
                    for (const s of t) {
                      const l = e[s];
                      if (s === "origin") {
                        o.push("".concat(l, " ").concat(r + 1, "w"));
                      } else {
                        const c = Number(s);
                        if (!isNaN(c)) {
                          o.push("".concat(l, " ").concat(c, "w"));
                        }
                      }
                    }
                    return o.join(",");
                  }
                })(resolutionUrlMap),
              };
            case "smart_crop":
              if (w.W_) {
                var v;
                let g;
                const f = vw({
                  width,
                  height,
                  resolutionUrlMap,
                });
                return {
                  src: l.m((g = f != null ? f : src) != null ? g : p, null, {
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
              let b;
              let _;
              let T;
              let imageKey;
              let R;
              const N = HM({
                width,
                height,
                resolutionUrlMap,
                autoPickNext: true,
              });
              if (N && resolutionUrlMap) {
                imageKey = ((e, t) => {
                  for (const i of Object.keys(e)) {
                    if (e[i] === t) {
                      return i;
                    }
                  }
                })(resolutionUrlMap, N);
              }
              if (i && cacheKey && imageKey && useCache) {
                R = i.getLoadedImageUrlFromCache(cacheKey, "legacy", imageKey);
              }
              return {
                imageKey,
                src: l.m(
                  (b =
                    (_ =
                      (T =
                        R == null ? undefined : R.loadedHigherResolutionUrl) !=
                      null
                        ? T
                        : N) != null
                      ? _
                      : src) != null
                    ? b
                    : p,
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
                  R == null ? undefined : R.loadedLowerResolutionUrl,
                srcSet: undefined,
                hasCache: !!(R == null
                  ? undefined
                  : R.loadedHigherResolutionUrl),
              };
            case "cdn":
              const { width: width_1, height: height_1 } = mA(width, height);
              const E = src || p;
              const sourcesAttr = [];
              if (
                cdnOptimizeConfig == null
                  ? undefined
                  : cdnOptimizeConfig.useWebp
              ) {
                sourcesAttr.push({
                  srcSet: x(E, {
                    useWebp: true,
                    width: width_1,
                    height: height_1,
                  }),
                  type: "image/webp",
                });
              }
              sourcesAttr.push({
                srcSet: x(E, {
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
                src: l.m(src != null ? src : p, null, {
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
    if (Object.hasOwnProperty.call(J, "src")) {
      props_1.src = l.m(J.src, null, {
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
    if (Object.hasOwnProperty.call(J, "srcSet")) {
      props_1.srcSet = J.srcSet;
    }
    if (Object.hasOwnProperty.call(J, "sourcesAttr")) {
      props_1.sourcesAttr = J.sourcesAttr;
    }
    const [K, setK] = c.useState({
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
        J.imageKey &&
        ["legacy", "smart_crop"].includes(sizePickMode_1)
      ) {
        t.setLoadedImageUrlToCache(cacheKey, sizePickMode_1, J.imageKey, J.src);
      }
    });
    const handleError_1 = s.A((e) => {
      setK({
        isImageError: true,
        isImageLoad: false,
      });
    });
    c.useEffect(() => {
      if (useChangeLoading && src && !J.hasCache) {
        setK((e) =>
          n._(r._({}, e), {
            isImageLoad: false,
          }),
        );
      }
    }, [src, useChangeLoading, J.hasCache]);
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
      progressiveSrc: J.progressiveSrc,
    };
  })(e, imageResolutionCacheManager);
  const { inViewRef, delayRender, show, inView } = ((e) => {
    const { delayTime, transitionTime } = e;
    const [inViewRef_1, n, inView_1] = ((e) => {
      const { time } = e;
      const [i, r] = p.A();
      const nRef = c.useRef(false);
      const [a, setA] = c.useState(typeof time !== "number");
      c.useEffect(() => {
        var e;
        if (typeof time !== "number") {
          return void setA(true);
        }
        if (r && !nRef.current) {
          e = window.setTimeout(() => {
            setA(true);
            nRef.current = true;
            e = undefined;
          }, time);
        }
        return () => {
          if (e) {
            clearTimeout(e);
          }
        };
      }, [r, time]);
      return [i, a, r];
    })({
      time: delayTime,
    });
    const sRef = c.useRef(null);
    const delayRender_1 = c.useCallback(
      (children) =>
        o.jsx(v, {
          nodeRef: sRef,
          in: n,
          duration: transitionTime,
          cssConfig: {
            name: "opacity",
            value: 1,
          },
          mountOnEnter: true,
          children: (style) =>
            o.jsx("div", {
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
  c.useEffect(() => {
    if (inView) {
      var e = WRef.current;
      M({
        inViewTime: e.inViewTime === 0 ? performance.now() : e.inViewTime,
      });
    }
  }, [inView, M]);
  const ee = isHeroImage_1 != null ? isHeroImage_1 : isHeroImage;
  const et = s.A(function (e) {
    const t =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    const i =
      WRef.current.renderTime === 0
        ? performance.now()
        : WRef.current.renderTime;
    const loadTime = t === 0 ? WRef.current.loadTime : t;
    if (e && ee && onHeroImageLoad) {
      onHeroImageLoad(
        e_1(e, {
          loadTime,
          renderTime: i,
          startTime: i,
          inViewTime: WRef.current.inViewTime,
        }),
      );
    }
    M({
      loadTime,
      renderTime: i,
      startTime: i,
    });
  });
  c.useEffect(() => {
    if (show) {
      T(() => et());
    }
  }, [et, show]);
  uRef.current = (e) => {
    var t = performance.now();
    handleLoad(e);
    if (onLoad != null) {
      onLoad(e);
    }
    if (show) {
      T(() => et(e, t));
    } else {
      M({
        loadTime: t,
      });
    }
  };
  const ei = c.useMemo(
    () =>
      r._(
        {},
        imageStyle,
        f.enable
          ? undefined
          : {
              transition: "none",
              opacity: 1,
            },
      ),
    [imageStyle, f.enable],
  );
  const mode = c.useMemo(
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
  const ea = s.A((e) => {
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
  const eo = o.jsx(
    m,
    n._(
      r._(
        {
          elementTiming:
            elementTiming != null ? elementTiming : ee ? "" : undefined,
          mode,
          className: _f(g, imageClassName, {
            "imageHide-hZe58f":
              isImageError || (!canShowImage && !elementTiming),
            "noAnimation-xfRspw": progressiveSrc,
          }),
          style: ei,
        },
        props,
      ),
      {
        loading: !lazy && inView ? "eager" : "lazy",
        fetchPriority:
          (i = props.fetchPriority) != null ? i : inView ? "high" : "low",
        sizes: sizePickMode === "browser" ? undefined : sizes,
        onLoadRef: uRef,
        onError: handleError,
        ref: ea,
      },
    ),
  );
  const es = c.useMemo(() => {
    if (progressiveSrc) {
      return o.jsx("img", {
        src: l.m(progressiveSrc, null, {
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
        className: _f(g, imageClassName),
        style: ei,
        crossOrigin: "anonymous",
      });
    }
    return o.jsx(o.Fragment, {});
  }, [progressiveSrc, imageClassName, ei]);
  if (rawMode) {
    return o.jsx(o.Fragment, {
      children: eo,
    });
  }
  return o.jsxs("div", {
    ref: en,
    className: _f("container-ZaGd6_", layoutClassName),
    style: layoutStyle,
    children: [
      e.lazy && f.enable ? delayRender(eo) : eo,
      canShowPlaceholder && f.enable && e.placeholder,
      !canShowImage && es,
      isImageError && e.errorPlaceHolder,
    ],
  });
});
sg.displayName = "ImageComponent";
