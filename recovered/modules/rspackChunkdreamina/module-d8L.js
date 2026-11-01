import _r from "fyk";
import i from "bT";
import a from "wnX";
import l from "rJ";
import { A as A_1 } from "./module-NFc.js";
import c from "jW8";
export var d = i.forwardRef(function (e, t) {
  const e_style = e.style;
  const e_className = e.className;
  const e_status = e.status;
  const e_src = e.src;
  const e_width = e.width;
  const e_height = e.height;
  const e_alt = e.alt;
  const alt = e_alt === undefined ? "" : e_alt;
  const e_fit = e.fit;
  const g = e_fit === undefined ? "cover" : e_fit;
  const e_position = e.position;
  const y = e_position === undefined ? "center" : e_position;
  const e_radius = e.radius;
  const e_bordered = e.bordered;
  const e_loadingArea = e.loadingArea;
  const e_errorArea = e.errorArea;
  const e_showLoading = e.showLoading;
  const e_showError = e.showError;
  const e_animateDuration = e.animateDuration;
  const R = e_animateDuration === undefined ? 200 : e_animateDuration;
  const e_retryTime = e.retryTime;
  const I = e_retryTime === undefined ? 0 : e_retryTime;
  const e_forceHttps = e.forceHttps;
  const e_boxWidth = e.boxWidth;
  const e_boxHeight = e.boxHeight;
  const e_topOverlap = e.topOverlap;
  const e_bottomOverlap = e.bottomOverlap;
  const e_showImage = e.showImage;
  const D = e_showImage === undefined || e_showImage;
  const e_staticLabel = e.staticLabel;
  const e_nativeProps = e.nativeProps;
  const V = e_nativeProps === undefined ? {} : e_nativeProps;
  const e_onChange = e.onChange;
  const e_onClick = e.onClick;
  const e_onLoad = e.onLoad;
  const e_onError = e.onError;
  const e_onAutoRetry = e.onAutoRetry;
  const J = c.Jg();
  const j = c.lW();
  const j_windowWidth = j.windowWidth;
  const j_windowHeight = j.windowHeight;
  const K = c.pK(e_staticLabel && e_showLoading ? "loading" : "init");
  const _ = K[0];
  const Z = K[1];
  const Q = c.pK("");
  const $ = Q[0];
  const ee = Q[1];
  const et = c.pK(false);
  const en = et[0];
  const er = et[1];
  const eoRef = i.useRef(null);
  const eiRef = i.useRef(null);
  const eaRef = i.useRef(null);
  const elRef = i.useRef(0);
  const euRef = i.useRef(null);
  const ecRef = i.useRef(false);
  const preview = g.indexOf("preview") >= 0;
  const width = (e_boxWidth === undefined ? 0 : e_boxWidth) || j_windowWidth;
  const height =
    (e_boxHeight === undefined ? 0 : e_boxHeight) || j_windowHeight;
  const em = e_status === undefined ? _ : e_status;
  const ev = i.useMemo(
    function () {
      const style = {};
      if (!preview) {
        style.objectFit = g;
        style.objectPosition = y;
      }
      return {
        alt,
        src: e_forceHttps ? e_src.replace("http://", "https://") : e_src,
        className: `image-content${e_bordered ? " bordered" : ""} ` + J,
        style,
      };
    },
    [alt, e_bordered, g, e_forceHttps, preview, y, e_radius, e_src, J],
  );
  function retry() {
    ey(true);
  }
  function eh(e) {
    Z(e);
    if (e_onChange) {
      e_onChange(e);
    }
  }
  function eg(e) {
    const eoRef_current = eoRef.current;
    if (eoRef_current) {
      if (eoRef_current.children && eoRef_current.children.length) {
        eoRef_current.replaceChild(e, eoRef_current.children[0]);
      } else {
        eoRef_current.appendChild(e);
      }
    }
  }
  function eC(e, t) {
    ecRef.current = true;
    eh("loaded");
    const t_width = t.width;
    const t_height = t.height;
    let o = "";
    if (preview) {
      const i =
        (t_width === undefined ? 0 : t_width) /
        (t_height === undefined ? 0 : t_height);
      const a = width / height;
      if (g === "preview-y") {
        if (i < a) {
          t.style.width = width + "px";
          t.style.height = `${width / i}px`;
          o = "preview-overflow-y";
        } else {
          o = "preview-fit-contain-y";
        }
      } else if (g === "preview-x") {
        if (i > a) {
          t.style.width = `${height * i}px`;
          t.style.height = height + "px";
          o = "preview-overflow-x";
        } else {
          o = "preview-fit-contain-x";
        }
      }
    }
    if (o) {
      t.classList.add(o);
    }
    ee(o ? o + "-container" : "");
    if (e_onLoad) {
      e_onLoad(e, t);
    }
  }
  function ey(e) {
    if (euRef.current) {
      euRef.current.src = "";
      euRef.current = null;
    }
    if (D && !e_staticLabel) {
      eh("loading");
      const t = new Image();
      Object.keys(V).forEach((e) => {
        t[e] = V[e];
      });
      t.className = ev.className;
      Object.keys(ev.style).forEach((e) => {
        t.style[e] = ev.style[e];
      });
      t.onload = function (e) {
        euRef.current = null;
        eiRef.current = t;
        eC(e, t);
        eg(t);
      };
      t.onerror = function (t) {
        euRef.current = null;
        if (e || elRef.current >= I) {
          eh("error");
          eg(document.createElement("div"));
          if (e_onError) {
            e_onError(t);
          }
        } else {
          elRef.current += 1;
          if (e_onAutoRetry) {
            e_onAutoRetry(t);
          }
          ey();
        }
      };
      a.dY(function () {
        t.src = ev.src;
        t.alt = ev.alt;
        euRef.current = t;
      });
    }
  }
  function onError(e) {
    const t = e ? e.nativeEvent : null;
    if (elRef.current >= I) {
      eh("error");
      if (e_onError) {
        e_onError(t);
      }
    } else {
      elRef.current += 1;
      if (e_onAutoRetry) {
        e_onAutoRetry(t);
      }
      er(true);
      a.dY(function () {
        er(false);
      });
    }
  }
  i.useImperativeHandle(t, function () {
    return {
      dom: eaRef.current,
      image: eiRef.current,
      retry,
    };
  });
  i.useEffect(
    function () {
      elRef.current = 0;
      ey();
    },
    [ev, e_width, e_height, D, e_staticLabel],
  );
  i.useEffect(
    function () {
      let e;
      if (
        e_staticLabel &&
        !ecRef.current &&
        (e = eiRef.current) != null &&
        e.complete
      ) {
        if (eiRef.current.naturalWidth || eiRef.current.naturalHeight) {
          eC(null, eiRef.current);
        } else {
          onError(null);
        }
      }
    },
    [e_staticLabel],
  );
  return i.createElement(l.Wb, null, function (e) {
    const e_prefixCls = e.prefixCls;
    const e_locale = e.locale;
    const s = e_locale === undefined ? a.q : e_locale;
    return i.createElement(
      "div",
      {
        className: a.xF(
          e_prefixCls + "-image all-border-box",
          {
            preview,
          },
          J,
          $,
          e_className,
        ),
        style: _r(
          {},
          (() => {
            if (preview) {
              const e =
                g === "preview-x"
                  ? {
                      overflowX: "auto",
                    }
                  : {
                      overflowY: "auto",
                    };
              return _r(
                {
                  width,
                  height,
                },
                e,
              );
            }
            return {
              width: Number(e_width) || e_width,
              height: Number(e_height) || e_height,
            };
          })(),
          e_style || {},
        ),
        ref: eaRef,
      },
      e_bottomOverlap !== null
        ? i.createElement(
            "div",
            {
              className: "image-content image-bottom-overlap",
              style: {
                borderRadius: e_radius,
              },
            },
            e_bottomOverlap ||
              i.createElement("div", {
                className: "image-placeholder",
              }),
          )
        : null,
      i.createElement(
        "div",
        {
          className: a.xF("image-container", em, {
            animate: !!R,
            "static-label": e_staticLabel,
            "has-loaded": ecRef.current,
          }),
          style: c.yx({
            borderRadius: e_radius,
            transitionDuration: R + "ms",
          }),
          onClick: e_onClick,
          ref: eoRef,
        },
        e_staticLabel && D && !en
          ? i.createElement(
              "img",
              _r({}, V, ev, {
                ref: eiRef,
                onLoad: function (e) {
                  return eC(e.nativeEvent, eiRef.current);
                },
                onError,
              }),
            )
          : null,
      ),
      e_showLoading && em === "loading"
        ? i.createElement(
            "div",
            {
              className: "image-content image-loading-container",
              style: {
                borderRadius: e_radius,
              },
            },
            e_loadingArea ||
              i.createElement(
                "div",
                {
                  className: "image-loading",
                },
                i.createElement(A_1, {
                  type: "circle",
                  className: "loading-icon",
                  radius: 8.5,
                  stroke: 3,
                }),
              ),
          )
        : null,
      e_showError && em === "error"
        ? i.createElement(
            "div",
            {
              className: "image-content image-error-container",
              onClick: function (e) {
                e.stopPropagation();
                retry();
              },
              style: {
                borderRadius: e_radius,
              },
            },
            e_errorArea ||
              i.createElement(
                "div",
                {
                  className: "image-retry-load",
                },
                s.Image.loadError,
              ),
          )
        : null,
      e_topOverlap
        ? i.createElement(
            "div",
            {
              className: "image-content image-top-overlap",
              style: {
                borderRadius: e_radius,
              },
            },
            e_topOverlap,
          )
        : null,
    );
  });
});
export { d as A };
