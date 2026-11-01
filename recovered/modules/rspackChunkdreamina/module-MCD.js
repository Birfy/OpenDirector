const i = "always";
const o = "hybrid";
const a = "animation";
const s = "translate-first";
function u(t) {
  return Math.sqrt(t[0] * t[0] + t[1] * t[1]);
}
function c(t) {
  if (t instanceof Number) {
    return [t];
  }
  if (t instanceof Array) {
    return [].concat(t);
  }
  return [].concat(t.valueOf());
}
const l = (() => {
  function t(e) {
    const r = this;
    this.operatorAdd = function (e) {
      const n = (e = c(e)).length >= r.x.length ? [e, r.x] : [r.x, e];
      return new t(
        n[0].map((t, e) => t + (n[1][e] !== undefined ? n[1][e] : n[1][0])),
      );
    };
    this.operatorSub = function (e) {
      const n = (e = c(e)).length > r.x.length ? [e, r.x] : [r.x, e];
      return new t(
        n[0].map((t, e) => t - (n[1][e] !== undefined ? n[1][e] : n[1][0])),
      );
    };
    this.operatorMul = function (e) {
      const n = (e = c(e)).length > r.x.length ? [e, r.x] : [r.x, e];
      return new t(
        n[0].map((t, e) => t * (n[1][e] !== undefined ? n[1][e] : n[1][0])),
      );
    };
    this.operatorDiv = function (e) {
      const n = (e = c(e)).length > r.x.length ? [e, r.x] : [r.x, e];
      return new t(
        n[0].map((t, e) => t / (n[1][e] !== undefined ? n[1][e] : n[1][0])),
      );
    };
    this.x = c(e) || [];
  }
  const t_prototype = t.prototype;
  t_prototype.get = function (t) {
    return this.x[t];
  };
  t_prototype.v = function () {
    return [].concat(this.x);
  };
  t_prototype.size = function () {
    return this.x.length;
  };
  t_prototype.valueOf = function () {
    return this.x.valueOf();
  };
  t_prototype.toString = function () {
    return this.x.toString();
  };
  t_prototype.mul = function (t) {
    if ((t = this.convert(t)).length !== this.x.length) {
      throw Error(
        "Can not process vector inner-product, input vector dim " +
          t.length +
          " don't match resource vector dim " +
          this.x.length,
      );
    }
    let e = 0;
    this.x.forEach((n, r) => (e += n + t[r]));
    return e;
  };
  return t;
})();
function h(t, R_1) {
  if (typeof t === "number") {
    return {
      R: t,
      I: 0,
    };
  }
  if (t.isComplex) {
    return t;
  }
  return {
    R: R_1,
    I: 0,
  };
}
const d = (() => {
  function t(e, r = 0) {
    const i = this;
    this.operatorAdd = function (e) {
      e = h(e, 0);
      return new t(i.R + e.R, i.I + e.I);
    };
    this.operatorSub = function (e) {
      e = h(e, 0);
      return new t(i.R - e.R, i.I - e.I);
    };
    this.operatorMul = function (e) {
      e = h(e, 1);
      return new t(i.R * e.R - i.I * e.I, i.I * e.R + i.R * e.I);
    };
    this.operatorDiv = function (e) {
      const n = (e = h(e, 1)).R ** 2 + e.I ** 2;
      return new t((i.R * e.R + i.I * e.I) / n, (i.I * e.R - i.R * e.I) / n);
    };
    this.operatorPow = function (e) {
      let n = i.z();
      if (n === 0) {
        return new t(0);
      }
      const r = Math.acos(i.R / n) * e;
      return new t((n = n ** e) * Math.cos(r), n * Math.sin(r));
    };
    if (typeof e === "number") {
      this.R = Number(e);
      this.I = Number(r);
    } else if (e.isComplex) {
      this.R = e.r();
      this.I = e.i();
    }
    this.isComplex = true;
  }
  const t_prototype = t.prototype;
  t_prototype.valueOf = function () {
    return this.R.valueOf();
  };
  t_prototype.toString = function () {
    return this.R.toFixed(3) + "+" + this.I.toFixed(3) + "i";
  };
  t_prototype.isNaN = ((t) => {
    function e() {
      return t.apply(this, arguments);
    }
    e.toString = function () {
      return t.toString();
    };
    return e;
  })(function () {
    return isNaN(this.R) || isNaN(this.I);
  });
  t_prototype.isReal = function () {
    return this.I === 0 && !this.isNaN();
  };
  t_prototype.inRangeR = function (t, e) {
    return this.R <= e && this.R >= t;
  };
  t_prototype.inRangeI = function (t, e) {
    return this.I <= e && this.I >= t;
  };
  t_prototype.setR = function (t) {
    this.R = Number(t);
  };
  t_prototype.setI = function (t) {
    this.I = Number(t);
  };
  t_prototype.r = function () {
    return this.R;
  };
  t_prototype.i = function () {
    return this.I;
  };
  t_prototype.z = function () {
    return Math.sqrt(this.R ** 2 + this.I ** 2);
  };
  t_prototype.theta = function () {
    const t = this.z();
    return Math.acos(this.R / t);
  };
  return t;
})();
const f = (t, e) => {
  if (t.operatorAdd) {
    return t.operatorAdd(e);
  }
  return t + e;
};
const m = (t, e) => {
  if (t.operatorSub) {
    return t.operatorSub(e);
  }
  return t - e;
};
const p = (t, e) => {
  if (t.operatorMul) {
    return t.operatorMul(e);
  }
  return t * e;
};
const v = (t, e) => {
  if (t.operatorDiv) {
    return t.operatorDiv(e);
  }
  return t / e;
};
function g(t) {
  if (t >= 0) {
    return Math.sqrt(t);
  }
  return new d(0, Math.sqrt(-t));
}
const y = Math.sqrt(3);
const b = 2 ** (1 / 3);
const w = g(-1);
const S = new d(0).operatorSub(w);
function T(t, e, n, r = true) {
  if (e === n && e === 0) {
    return t ** v(1, 3);
  }
  let i;
  let o;
  let a;
  let s;
  let u;
  let c;
  let l;
  let h;
  s = -3 * e + 3 * n - 1;
  u = -9 * e ** 2 + 9 * n * e + 9 * e - 9 * n ** 2;
  l = b * (c = 3 * s);
  const T = [
    4 * u ** 3 +
      (h =
        54 * e ** 3 -
        243 * t * e ** 2 -
        81 * n * e ** 2 +
        162 * e ** 2 -
        81 * n ** 2 * e -
        162 * t * e +
        486 * t * n * e -
        81 * n * e +
        54 * n ** 3 -
        243 * t * n ** 2 -
        27 * t +
        162 * t * n) **
        2,
    h,
    -(2 * e - n) / s,
    u,
    c,
    l,
  ];
  const M = T[0];
  const E = T[1];
  const x = T[2];
  const R = T[3];
  const O = T[4];
  const C = T[5];
  o = new d(f(g(M), E));
  a = v(1, 3);
  const Y = o.operatorPow ? o.operatorPow(a) : o ** a;
  const D = f(m(v(Y, C), v(new d(p(b, R)), p(Y, O))), x);
  const N = [];
  if (
    (i = M).operatorLessEqual
      ? i.operatorLessEqual(1e-12)
      : (1e-12).operatorGreaterEqual
        ? (1e-12).operatorGreaterEqual(i)
        : i.operatorGreater
          ? !i.operatorGreater(1e-12)
          : i <= 1e-12
  ) {
    [
      D,
      f(
        f(
          v(p(m(p(w, y), 1), Y), p(2, C)),
          v(p(f(p(w, y), 1), R), p(p(Y, C), b)),
        ),
        x,
      ),
      f(
        f(
          v(p(m(p(S, y), 1), Y), p(2, C)),
          v(p(f(p(S, y), 1), R), p(p(Y, C), b)),
        ),
        x,
      ),
    ].forEach((t) => {
      if (t.inRangeR(0, 1)) {
        N.push(t.r());
      }
    });
    N.sort();
  } else {
    N.push(D.r());
  }
  if (r) {
    return N[0];
  }
  return N;
}
const M = (t, e) => {
  if (t.operatorAdd) {
    return t.operatorAdd(e);
  }
  return t + e;
};
const E = (t, e) => {
  if (t.operatorSub) {
    return t.operatorSub(e);
  }
  return t - e;
};
const x = (t, e) => {
  if (t.operatorDiv) {
    return t.operatorDiv(e);
  }
  return t / e;
};
function R(t, e, n = "x") {
  const r = t[0];
  const i = t[1];
  const o = t[2];
  const a = t[3];
  const s = n === "x" ? T(e, r, o) : n === "y" ? T(e, i, a) : e;
  const u = (t, e) => {
    let n;
    let r;
    return M(
      ((n = E(e, t)), (r = s), n.operatorMul ? n.operatorMul(r) : n * r),
      t,
    );
  };
  const c = new l([0, 0]);
  const h = new l([r, i]);
  const d = new l([o, a]);
  const f = new l([1, 1]);
  const m = u(c, h);
  const p = u(h, d);
  const v = u(d, f);
  const g = u(m, p);
  const y = u(p, v);
  const b = u(g, y);
  const w = [m, g].map((t) => x(t, M(b, 1e-9)));
  const S = w[0];
  const R = w[1];
  const O = [y, v].map((t) => x(E(t, b), M(E(f, b), 1e-9)));
  const C = O[0];
  const Y = O[1];
  return [[].concat(S.v(), R.v()), [].concat(C.v(), Y.v())];
}
function O(t, e, n) {
  return 3 * t * n * (1 - n) ** 2 + 3 * e * (1 - n) * n ** 2 + n ** 3;
}
function C(t, e, n = "x") {
  const r = t[0];
  const i = t[1];
  const o = t[2];
  const a = t[3];
  const s =
    e === 0
      ? 0
      : e === 1
        ? 1
        : n === "x"
          ? T(e, r, o)
          : n === "y"
            ? T(e, i, a)
            : e;
  return [n === "x" ? e : O(r, o, s), n === "y" ? e : O(i, a, s)];
}
function Y(t) {
  if (window.requestAnimationFrame) {
    return window.requestAnimationFrame(t);
  }
  return setTimeout(t, 17);
}
function D(t) {
  if (window.requestAnimationFrame) {
    return window.cancelAnimationFrame(t);
  }
  return clearTimeout(t, 17);
}
export class A {
  constructor(t = {}) {
    var e = this;
    this.setBounce = function (t) {
      if (!isNaN(t)) {
        e.bouncing = Number(t);
      }
    };
    this.setDamp = function (t = 0) {
      if (!isNaN(t)) {
        e.damp = Number(t);
      }
    };
    this.setTransform = function (t = {}, n = {}) {
      if (e.fixedX && t.translateX) {
        delete t.translateX;
      }
      if (e.fixedY && t.translateY) {
        delete t.translateY;
      }
      if (n.merge) {
        ["translateX", "translateY", "scale"].forEach((n) => {
          if (t[n] !== undefined) {
            e.transform[n] = parseFloat(t[n]);
          }
        });
        const i = t.transformOrigin;
        if (i instanceof Array && i.length === 2) {
          e.transform.transformOrigin = i.map((t) => parseFloat(t));
        }
      } else {
        e.transform = {
          ...t,
        };
      }
      if (!n.silent) {
        e.update();
      }
      return e;
    };
    this.on = function (t, n) {
      if (n && typeof n === "function") {
        const i = "on" + t[0].toUpperCase() + t.slice(1);
        if (e[i]) {
          if (i === "onTransform") {
            e[i] = function () {
              return n(
                {
                  ...e.transform,
                },
                {
                  complete: !e.busy(),
                  dirty: e.dirty(),
                },
              );
            };
          } else {
            e[i] = n;
          }
        } else {
          console.warn("[Transform]Unsupport event:", t);
        }
      }
      return e;
    };
    this.restore = function (silent) {
      if (!silent) {
        const n = e.transform;
        Y(function () {
          e.onRestore(n);
        });
      }
      if (e.dragMode === i) {
        e.zoomTo(1, {
          fitEdge: true,
        });
      } else {
        e.setTransform(
          {},
          {
            merge: false,
            silent,
          },
        );
      }
    };
    this.getTransform = function (t) {
      switch (t) {
        case "css":
          return e.toCSS();
        case "style":
          return e.toStyle();
        default:
          return {
            ...e.transform,
          };
      }
    };
    this.dirty = function () {
      const e_transform = e.transform;
      const t_translateX = e_transform.translateX;
      const t_translateY = e_transform.translateY;
      const t_scale = e_transform.scale;
      return (
        (t_translateX === undefined ? 0 : t_translateX) !== 0 ||
        (t_translateY === undefined ? 0 : t_translateY) !== 0 ||
        (t_scale === undefined ? 1 : t_scale) !== 1
      );
    };
    this.busy = function () {
      return !e.disableContentTouch || e.cancelSwipe || e.animating;
    };
    this.isTapStop = function () {
      return e.isTapStopped;
    };
    this.apply = function () {
      if (e.dom) {
        const t = e.toCSS();
        e.dom.style.transform = t.transform || "";
        e.dom.style.webkitTransform = t.transform || "";
        e.dom.style.transformOrigin = t.transformOrigin || "center center";
        e.dom.style.webkitTransformOrigin =
          t.transformOrigin || "center center";
      }
      e.onTransform();
      e.timer = 0;
    };
    this.update = function () {
      D(e.timer);
      e.timer = Y(e.apply);
      e.lastTransform = {
        ...e.transform,
      };
    };
    this.cancel = function () {
      D(e.timer);
      e.transform = {
        ...e.lastTransform,
      };
    };
    this.toTop = function () {
      const scale = e.transform.scale;
      return Math.round(
        Math.abs(e._remainToEdge(1, 1)[1] / (scale === undefined ? 1 : scale)),
      );
    };
    this.toBottom = function () {
      const scale = e.transform.scale;
      return Math.round(
        Math.abs(e._remainToEdge(1, -1)[1] / (scale === undefined ? 1 : scale)),
      );
    };
    this.toLeft = function () {
      const scale = e.transform.scale;
      return Math.round(
        Math.abs(e._remainToEdge(1, 1)[0] / (scale === undefined ? 1 : scale)),
      );
    };
    this.toRight = function () {
      const scale = e.transform.scale;
      return Math.round(
        Math.abs(e._remainToEdge(-1, 1)[0] / (scale === undefined ? 1 : scale)),
      );
    };
    this.getOriginXY = function (t) {
      const n = t[0];
      const r = t[1];
      const i = e._getTransformedBounding();
      const i_left = i.left;
      const i_top = i.top;
      const scale = e.transform.scale;
      const u = scale === undefined ? 1 : scale;
      return [(n - i_left) / u, (r - i_top) / u];
    };
    this.setScreenCenter = function (t, n, r) {
      const i = e.getOriginXY([t, n]);
      const o = i[0];
      const a = i[1];
      return e.setCenter(o, a, r);
    };
    this.setCenter = function (t, n, r) {
      const e_transform = e.transform;
      const e_fixedX = e.fixedX;
      const e_fixedY = e.fixedY;
      const e_boundingRect = e.boundingRect;
      const e_viewport = e.viewport;
      const i_translateX = e_transform.translateX;
      const i_translateY = e_transform.translateY;
      const i_scale = e_transform.scale;
      const d = i_scale === undefined ? 1 : i_scale;
      let i_transformOrigin = e_transform.transformOrigin;
      const m = e_boundingRect || e_viewport;
      const m_top = m.top;
      const m_bottom = m.bottom;
      const m_left = m.left;
      const m_right = m.right;
      if (!i_transformOrigin) {
        i_transformOrigin = [(m_right - m_left) / 2, (m_bottom - m_top) / 2];
      }
      if (!e_fixedX) {
        const b = t - i_transformOrigin[0];
        t = i_transformOrigin[0] + b;
        e_transform.translateX =
          (i_translateX === undefined ? 0 : i_translateX) + (b * (d - 1)) / d;
        i_transformOrigin[0] = t;
      }
      if (!e_fixedY) {
        const w = n - i_transformOrigin[1];
        n = i_transformOrigin[1] + w;
        e_transform.translateY =
          (i_translateY === undefined ? 0 : i_translateY) + (w * (d - 1)) / d;
        i_transformOrigin[1] = n;
      }
      e_transform.transformOrigin = i_transformOrigin;
      if (r) {
        e.update();
      }
    };
    this.zoomToScreenCenter = function (t, n, i = {}) {
      const o = n[0];
      const a = n[1];
      e.setScreenCenter(o, a, true);
      Y(function () {
        return Y(function () {
          e.zoomTo(t, {
            fitEdge: true,
            ...i,
          });
        });
      });
    };
    this.zoomToCenter = function (t, n, i = {}) {
      const o = n[0];
      const a = n[1];
      e.setCenter(o, a, true);
      Y(function () {
        return Y(function () {
          e.zoomTo(t, {
            fitEdge: true,
            ...i,
          });
        });
      });
    };
    this.zoomTo = function (t, n = {}) {
      const r = n;
      const r_transition = r.transition;
      const r_easingFunc = r.easingFunc;
      const r_duration = r.duration;
      const s = r_duration === undefined ? 0 : r_duration;
      const r_silent = r.silent;
      const c = r_silent === undefined || r_silent;
      const r_fitEdge = r.fitEdge;
      const r_callback = r.callback;
      const e_maxScale = e.maxScale;
      const e_minScale = e.minScale;
      const e_transform = e.transform;
      const m_scale = e_transform.scale;
      const m_translateX = e_transform.translateX;
      const m_translateY = e_transform.translateY;
      const y = Math.max(
        Math.min(t, e_maxScale === undefined ? 1 : e_maxScale),
        e_minScale === undefined ? 1 : e_minScale,
      );
      const b = y / (m_scale === undefined ? 1 : m_scale);
      e.transform.scale = y;
      e.transform.translateX =
        (m_translateX === undefined ? 0 : m_translateX) / b;
      e.transform.translateY =
        (m_translateY === undefined ? 0 : m_translateY) / b;
      if (r_fitEdge !== undefined && r_fitEdge) {
        e.fit(false);
      }
      if (e.dom && s) {
        e.dom.style.transition =
          (r_transition === undefined ? "all" : r_transition) +
          " " +
          s +
          "ms " +
          (r_easingFunc === undefined ? "ease-out" : r_easingFunc);
        e.animating = true;
        setTimeout(() => {
          e.dom.style.transition = "";
          e.animating = false;
          if (!c) {
            e.onZoomEnd(null, y);
          }
          if (typeof r_callback === "function") {
            r_callback(y);
          }
        }, s);
      } else if (typeof r_callback === "function") {
        r_callback(y);
      }
      e.update();
    };
    this.zoom = function (t = 1, n = {}) {
      const scale = e.transform.scale;
      e.zoomTo((scale === undefined ? 1 : scale) * t, n);
    };
    this.drag = function (t, n, r, i, o) {
      const e_transform = e.transform;
      const e_interActBound = e.interActBound;
      const e_fixedX = e.fixedX;
      const e_fixedY = e.fixedY;
      const e_bounceRateX = e.bounceRateX;
      const e_bounceRateY = e.bounceRateY;
      const a_translateX = e_transform.translateX;
      const a_translateY = e_transform.translateY;
      const a_scale = e_transform.scale;
      const p = a_scale === undefined ? 1 : a_scale;
      if (e_fixedX) {
        t = 0;
      }
      if (e_fixedY) {
        n = 0;
      }
      const v = e._remainToEdge(t, n, e_interActBound);
      const g = v[0];
      const y = v[1];
      const b = (g + t) * t > 0;
      const w = (y + n) * n > 0;
      let S = 0;
      let T = 0;
      const M = Math.abs(t) > Math.abs(n);
      const toEdge = (M && b) || (!M && w);
      if (t) {
        S = i ? t : e._getDragV(t, g, b, r ? e_bounceRateX : 0);
        e.transform.translateX =
          (a_translateX === undefined ? 0 : a_translateX) + S / p;
      }
      if (n) {
        T = o ? n : e._getDragV(n, y, w, r ? e_bounceRateY : 0);
        e.transform.translateY =
          (a_translateY === undefined ? 0 : a_translateY) + T / p;
      }
      const remain = [e_fixedX ? 0 : -g, e_fixedY ? 0 : -y];
      e.update();
      if (e.interActBound) {
        e.interActBound = {
          left: e_interActBound.left + S,
          right: e_interActBound.right + S,
          top: e_interActBound.top + T,
          bottom: e_interActBound.bottom + T,
        };
      }
      return {
        toEdge,
        remain,
      };
    };
    this.fit = function (t = true, n, r) {
      let i = false;
      const e_transform = e.transform;
      const o_translateX = e_transform.translateX;
      const s = o_translateX === undefined ? 0 : o_translateX;
      const o_translateY = e_transform.translateY;
      const c = o_translateY === undefined ? 0 : o_translateY;
      const o_scale = e_transform.scale;
      const h = o_scale === undefined ? 1 : o_scale;
      const d = e._outOfEdge();
      const d_outX = d.outX;
      const d_outY = d.outY;
      const d_outLeft = d.outLeft;
      const d_outRight = d.outRight;
      const d_outTop = d.outTop;
      const d_outBottom = d.outBottom;
      if (!n && d_outX) {
        if (d_outRight) {
          e.transform.translateX = s + d_outRight / h;
        }
        if (d_outLeft) {
          e.transform.translateX = s + d_outLeft / h;
        }
        i = true;
      }
      if (!r && d_outY) {
        if (d_outBottom) {
          e.transform.translateY = c + d_outBottom / h;
        }
        if (d_outTop) {
          e.transform.translateY = c + d_outTop / h;
        }
        i = true;
      }
      if (i && t) {
        e.bounce();
      }
      e.update();
      return i;
    };
    this.fitX = function (t = true) {
      return e.fit(t, false, true);
    };
    this.fitY = function (t = true) {
      return e.fit(t, true, false);
    };
    this.swipe = function (t) {
      if (e.damp) {
        const n = u(t);
        if (!isNaN(n)) {
          if (e.cancelSwipe) {
            e.cancelSwipe();
          }
          let r = 0;
          let i = Math.ceil(n / e.damp);
          const o = e.transform;
          const s = o.translateX;
          const c = o.translateY;
          const l = o.scale;
          const h = l === undefined ? 1 : l;
          const d = [].concat(e.cubic.scroll);
          const f = [].concat(e.cubic.bounce);
          if (e.dom) {
            let m = 850;
            let p = [null, d];
            let v = 0;
            let g = 0;
            let y = 0;
            const b = [
              [
                0,
                [(s === undefined ? 0 : s) * h, (c === undefined ? 0 : c) * h],
              ],
            ];
            const w = function () {
              v = 0;
              e.cancelSwipe();
            };
            const S = (t[0] * i) / 2;
            const T = (t[1] * i) / 2;
            const M = e.bounceRateX;
            const E = e.bounceRateY;
            const x = e._outOfEdge();
            const R = x.outX;
            const O = x.outY;
            const N = e.drag(S, T, false, M, E).remain;
            const X = e._outOfEdge();
            const j = X.outX;
            const B = X.outY;
            if (j || B) {
              p[1] = f;
            }
            const _ = 0.33 * window.innerWidth;
            const q = 0.33 * window.innerHeight;
            if (e.swipeMode === a) {
              e.cancel();
              const A = e._setSwipeBounceByAnimation(
                T,
                N[1],
                B,
                O,
                E,
                m,
                p[1],
                q,
              );
              const k = e._setSwipeBounceByAnimation(
                S,
                N[0],
                j,
                R,
                M,
                m,
                p[1],
                _,
              );
              const L = k.length > 1;
              const I = A.length > 1;
              [k, A].forEach((t, e) =>
                t.forEach((t) => {
                  t[1] += b[0][1][e];
                  for (let n = 0; n < b.length; n += 1) {
                    if (t[0] === b[n][0]) {
                      b[n][1][e] = t[1];
                      return;
                    } else if (t[0] < b[n][0]) {
                      const r = [null, null];
                      r[e] = t[1];
                      b.splice(n, 0, [t[0], r]);
                      return;
                    }
                  }
                  const i = [null, null];
                  i[e] = t[1];
                  b.push([t[0], i]);
                }),
              );
              const F = b[b.length - 1][0];
              const P = {};
              b.forEach((t, e) => {
                const n = t[0];
                t[1].map((r, i) => {
                  if (r === null) {
                    const o = b[e - 1][1][i];
                    const a = b[e - 1][0];
                    let s = o;
                    let u = a;
                    for (let c = e + 1; c < b.length; c += 1) {
                      if (b[c][1][i] !== null) {
                        s = b[c][1][i];
                        u = b[c][0];
                        break;
                      }
                    }
                    if (a !== u) {
                      const l = [];
                      [a, n, u].forEach((t, e) => {
                        if (P[t]) {
                          l[e] = P[t];
                        } else {
                          l[e] = C(p[1], t / F, "x")[1];
                        }
                      });
                      t[1][i] = o + ((s - o) * (l[1] - l[0])) / (l[2] - l[0]);
                    } else {
                      t[1][i] = o;
                    }
                  }
                });
              });
              b.forEach((t) => {
                t[1] =
                  "transform: " +
                  e.toCSS({
                    translateX: t[1][0] / h,
                    translateY: t[1][1] / h,
                    scale: h,
                  }).transform;
              });
              e._appendAnimation(b, "cubic-bezier(" + p[1].join(","), F);
              v = setTimeout(w, F + 17);
              e.cancelSwipe = function () {
                e._stopAnimation();
                e._syncDom();
                e.dom.style.animation = "";
                if (v) {
                  clearTimeout(v);
                  if (L || I) {
                    e.fit(false);
                  }
                }
                e.cancelSwipe = null;
                e.onSwipeEnd(e.transform);
              };
            } else {
              e.dom.style.transition =
                "transform " + m + "ms cubic-bezier(" + p[1].join(",") + ")";
              r = Y(function () {
                v = setTimeout(w, m);
                const t = function (t) {
                  const e = t(m, p) || {};
                  m = e.swipeSpan || m;
                  p = e.cubicBezier || p;
                  clearTimeout(v);
                  v = setTimeout(w, m);
                };
                if (j) {
                  if (R && S * N[0] > 0) {
                    e.fitX(false);
                  } else {
                    p[1] = [].concat(f);
                    g = e._setSwipeBounce(S, N[0], M, t, "x", _);
                  }
                }
                if (B) {
                  if (O && T * N[1] > 0) {
                    e.fitY(false);
                  } else {
                    p[1] = [].concat(f);
                    y = e._setSwipeBounce(T, N[1], E, t, "y", q);
                  }
                }
              });
              e.cancelSwipe = function () {
                if (r) {
                  D(r);
                }
                if (v) {
                  if (g) {
                    clearTimeout(g);
                  }
                  if (y) {
                    clearTimeout(y);
                  }
                  clearTimeout(v);
                  e._syncDom();
                  if (g || y) {
                    e.fit(false);
                  }
                }
                e.dom.style.transition = "";
                e.cancelSwipe = null;
                e.onSwipeEnd(e.transform);
              };
            }
          } else {
            const z = t[0] / i;
            const V = t[1] / i;
            r = Y(function t() {
              const n = (i - 0.5) * z;
              const o = (i - 0.5) * V;
              e.drag(n, o);
              if ((i -= 1) > 0) {
                r = Y(t);
                e.cancelSwipe = function () {
                  if (r) {
                    D(r);
                  }
                  e.cancelSwipe = null;
                  e.onSwipeEnd(e.transform);
                };
              } else {
                r = 0;
                e.cancelSwipe();
              }
            });
          }
        }
      }
    };
    this.bounce = function () {
      const e_bouncing = e.bouncing;
      if (e_bouncing && e.dom) {
        e.dom.style.transition =
          "all " + e_bouncing + "ms cubic-bezier(.14, 1, .34, 1)";
        e.animating = true;
        setTimeout(() => {
          e.animating = false;
          e.dom.style.transition = "";
        }, e_bouncing);
      }
    };
    this.touchStart = function (t) {
      e.disableContentTouch = true;
      if (e.active && !e.animating) {
        e.scaling = false;
        e.dragging = false;
        if (e.cancelSwipe) {
          e.cancelSwipe();
          e.isTapStopped = true;
        } else if (!e.dirty()) {
          if (e.useDomBoundary) {
            e.setBoundary(e.dom.getBoundingClientRect());
          }
          e.onSchedule();
        }
        if (t.touches.length > 1) {
          const n = e.transform.scale;
          e.disableContentTouch = false;
          const r = e.getOriginXY([
            (t.touches[1].clientX + t.touches[0].clientX) / 2,
            (t.touches[1].clientY + t.touches[0].clientY) / 2,
          ]);
          const a = r[0];
          const s = r[1];
          e.pinchStartCenter = [a, s];
          e.setCenter(a, s);
          e.pinchStartLen = u([
            t.touches[1].clientX - t.touches[0].clientX,
            t.touches[1].clientY - t.touches[0].clientY,
          ]);
          e.scaling = true;
          e.onZoomStart(t, n === undefined ? 1 : n, e.pinchStartCenter);
        } else if (e.dragMode === i || (e.dragMode === o && e.dirty())) {
          e.disableContentTouch = false;
          e.dragStartTime = +new Date();
          e.lastDragStartTime = 0;
          const c = t.touches && t.touches[0] ? t.touches[0].clientX : 0;
          const l = t.touches && t.touches[0] ? t.touches[0].clientY : 0;
          e.dragStartV = [c, l];
          e.lastDragStartV = [];
          e.dragX = c;
          e.dragY = l;
        }
      }
    };
    this.touchMove = function (t) {
      if (!e.disableContentTouch) {
        const n = t.changedTouches;
        const r = n === undefined ? [] : n;
        if (e.scaling) {
          if (t.touches.length > 1) {
            const i = u([
              t.touches[1].clientX - t.touches[0].clientX,
              t.touches[1].clientY - t.touches[0].clientY,
            ]);
            e.zoom(i / e.pinchStartLen);
            e.pinchStartLen = i;
          }
        } else {
          const o = r[0] ? r[0].clientX : 0;
          const a = r[0] ? r[0].clientY : 0;
          const s = o - e.dragX;
          const c = a - e.dragY;
          const l = e.drag(s, c, e.dragging).toEdge;
          e.dragX = o;
          e.dragY = a;
          const h = +new Date();
          if (h > e.dragStartTime + 100) {
            e.lastDragStartV = e.dragStartV;
            e.lastDragStartTime = e.dragStartTime;
            e.dragStartTime = h;
            e.dragStartV = [o, a];
          }
          if (!e.dragging) {
            e.dragging = true;
            if (l) {
              e.disableContentTouch = true;
            } else {
              e.onDragStart(t);
              e.interActBound = e._getTransformedBounding(true);
            }
          }
        }
        if (e.preventScroll) {
          t.preventDefault();
        }
      }
    };
    this.touchEnd = function (t) {
      if (!e.disableContentTouch && t.touches.length === 0) {
        const n = e.transform.scale;
        const r = n === undefined ? 1 : n;
        if (e.scaling) {
          e.onZoomEnd(t, r, e.pinchStartCenter);
          if (r < 1) {
            e.restore();
          } else {
            e.fit();
          }
        } else if (e.dragging) {
          let i = new Date() - e.dragStartTime;
          let o = e.dragStartV;
          if (i < 50 && e.lastDragStartTime) {
            i = new Date() - e.lastDragStartTime;
            o = e.lastDragStartV;
          }
          const a = [
            t.changedTouches && t.changedTouches[0]
              ? t.changedTouches[0].clientX
              : 0,
            t.changedTouches && t.changedTouches[0]
              ? t.changedTouches[0].clientY
              : 0,
          ];
          const s = [(17 * (a[0] - o[0])) / i, (17 * (a[1] - o[1])) / i];
          e.onDragEnd(t);
          if (u(s) > e.motionThreshold) {
            e.swipe(s);
          } else {
            e.fit();
          }
        }
        Y(function () {
          e.disableContentTouch = true;
          e.pinchStartLen = 0;
          e.interActBound = null;
          e.isTapStopped = false;
        });
      }
    };
    this._outOfEdge = function () {
      const t = e._getTransformedBounding();
      const t_left = t.left;
      const t_right = t.right;
      const t_top = t.top;
      const t_bottom = t.bottom;
      const e_edges = e.edges;
      const s = e_edges.left - t_left;
      const u = e_edges.right - t_right;
      const c = e_edges.top - t_top;
      const l = e_edges.bottom - t_bottom;
      const outLeft = s < 0 ? s : 0;
      const outRight = u > 0 ? u : 0;
      const outTop = c < 0 ? c : 0;
      const outBottom = l > 0 ? l : 0;
      return {
        outX: !!(outLeft || outRight),
        outY: !!(outTop || outBottom),
        outLeft,
        outRight,
        outTop,
        outBottom,
      };
    };
    this._remainToEdge = function (t, n, r) {
      const i = [0, 0];
      const e_edges = e.edges;
      const a = r || e._getTransformedBounding();
      const a_left = a.left;
      const a_right = a.right;
      const a_top = a.top;
      const a_bottom = a.bottom;
      const h = t > 0 ? e_edges.left : e_edges.right;
      const d = n > 0 ? e_edges.top : e_edges.bottom;
      i[0] = (t > 0 ? a_left : a_right) - h;
      i[1] = (n > 0 ? a_top : a_bottom) - d;
      return i;
    };
    this._computeEdge = function () {
      const e_viewport = e.viewport;
      const t_left = e_viewport.left;
      const t_right = e_viewport.right;
      const t_top = e_viewport.top;
      const t_bottom = e_viewport.bottom;
      if (e.boundingRect) {
        const s = e.boundingRect;
        const u = s.left;
        const c = s.right;
        e.edges = {
          left: Math.max(u, t_left),
          top: Math.max(s.top, t_top),
          right: Math.min(c, t_right),
          bottom: Math.min(s.bottom, t_bottom),
        };
      } else {
        e.edges = {
          ...e.viewport,
        };
      }
    };
    this.dom = null;
    this.useDomBoundary = false;
    this.viewport = {
      left: 0,
      right: window.innerWidth,
      top: 0,
      bottom: window.innerHeight,
    };
    this.maxScale = 2;
    this.minScale = 0.5;
    this.fixedX = false;
    this.fixedY = false;
    this.active = true;
    this.preventScroll = true;
    this.dragMode = o;
    this.swipeMode = a;
    this.transformMode = s;
    this.transform = {};
    this.onZoomStart = function () {};
    this.onZoomEnd = function () {};
    this.onDragStart = function () {};
    this.onDragEnd = function () {};
    this.onSwipeEnd = function () {};
    this.onTransform = function () {};
    this.onRestore = function () {};
    this.onSchedule = function () {};
    this.cubic = {
      scroll: [0.33, 1, 0.66, 1],
      bounce: [0.17, 1, 0.17, 1],
    };
    this.bouncing = 300;
    this.bounceRateX = 0;
    this.bounceRateY = 0;
    this.damp = 2;
    this.motionThreshold = 10;
    this.config(t);
    this.boundingRect = null;
    this.disableContentTouch = true;
    this.scaling = false;
    this.pinchStartCenter = [];
    this.pinchStartLen = 0;
    this.dragging = false;
    this.dragX = 0;
    this.dragY = 0;
    this.dragStartTime = 0;
    this.dragStartV = [0, 0];
    this.edges = {};
    this.timer = 0;
    this.animating = false;
    this.cancelSwipe = null;
    this.isTapStopped = false;
    this.interActBound = null;
    this._computeEdge();
    this.lastTransform = {};
    this.animationStyleDom = null;
  }
  enable() {
    this.active = true;
    return this;
  }
  disable() {
    this.active = false;
    return this;
  }
  config(t = {}) {
    const e = t;
    const e_viewport = e.viewport;
    const e_dom = e.dom;
    const e_useDomBoundary = e.useDomBoundary;
    const e_maxScale = e.maxScale;
    const e_minScale = e.minScale;
    const e_fixedX = e.fixedX;
    const e_fixedY = e.fixedY;
    const e_bounceRateX = e.bounceRateX;
    const e_bounceRateY = e.bounceRateY;
    const e_active = e.active;
    const e_preventScroll = e.preventScroll;
    const e_transform = e.transform;
    const e_damp = e.damp;
    const e_dragMode = e.dragMode;
    const e_swipeMode = e.swipeMode;
    const e_cubic = e.cubic;
    const e_transformMode = e.transformMode;
    const e_motionThreshold = e.motionThreshold;
    const e_bounce = e.bounce;
    const e_onZoomStart = e.onZoomStart;
    const e_onZoomEnd = e.onZoomEnd;
    const e_onDragStart = e.onDragStart;
    const e_onDragEnd = e.onDragEnd;
    const e_onSwipeEnd = e.onSwipeEnd;
    const e_onTransform = e.onTransform;
    const e_onRestore = e.onRestore;
    const e_onSchedule = e.onSchedule;
    if (e_viewport) {
      this.setViewport(e_viewport);
    }
    if (e_dom) {
      this.setDom(e_dom, e_useDomBoundary);
    }
    if (e_maxScale) {
      this.setMaxScale(e_maxScale);
    }
    if (e_minScale) {
      this.setMinScale(e_minScale);
    }
    if (e_dragMode) {
      this.setDragMode(e_dragMode);
    }
    if (e_swipeMode) {
      this.setSwipeMode(e_swipeMode);
    }
    if (e_transformMode) {
      this.setTransformMode(e_transformMode);
    }
    if (e_cubic) {
      this.setCubic(e_cubic);
    }
    if (e_motionThreshold !== undefined) {
      this.setMotionThreshold(e_motionThreshold);
    }
    if (e_bounceRateX !== undefined) {
      this.setBounceRateX(e_bounceRateX);
    }
    if (e_bounceRateY !== undefined) {
      this.setBounceRateY(e_bounceRateY);
    }
    if (e_fixedX !== undefined) {
      this.setFixedX(e_fixedX);
    }
    if (e_fixedY !== undefined) {
      this.setFixedY(e_fixedY);
    }
    if (e_active !== undefined) {
      this.active = !!e_active;
    }
    if (e_preventScroll !== undefined) {
      this.preventScroll = !!e_preventScroll;
    }
    if (e_transform) {
      this.setTransform(e_transform);
    }
    if (e_damp !== undefined) {
      this.setDamp(e_damp);
    }
    if (e_bounce !== undefined) {
      this.setBounce(e_bounce);
    }
    this.on("transform", e_onTransform)
      .on("restore", e_onRestore)
      .on("schedule", e_onSchedule)
      .on("zoomStart", e_onZoomStart)
      .on("zoomEnd", e_onZoomEnd)
      .on("dragStart", e_onDragStart)
      .on("dragEnd", e_onDragEnd)
      .on("swipeEnd", e_onSwipeEnd);
    return this;
  }
  setDom(t, e = true) {
    const n = this;
    if (t) {
      this.useDomBoundary = e;
      if (this.dom !== t) {
        this.removeDom();
        this.dom = t;
        t.addEventListener("touchstart", this.touchStart);
        t.addEventListener("touchmove", this.touchMove);
        t.addEventListener("touchend", this.touchEnd);
        t.addEventListener("touchcancel", this.touchEnd);
        t.style.willChange = "transform";
        t.style.transition = "";
        t.style.transform = "";
        t.style.webkitTransform = "";
        t.style.transformOrigin = "";
        t.style.webkitTransformOrigin = "";
        this.transform = {};
        this.lastTransform = {};
        if (e) {
          Y(function () {
            if (!n.boundingRect) {
              n.setBoundary(t.getBoundingClientRect());
            }
          });
        }
      }
    }
    return this;
  }
  setBoundary(t, e = false) {
    const n = e ? this._getRawBounding(t) : t;
    const n_left = n.left;
    const n_right = n.right;
    const n_top = n.top;
    const n_bottom = n.bottom;
    this.boundingRect = {
      ...(this.boundingRect || this.viewport),
      left: n_left,
      right: n_right,
      top: n_top,
      bottom: n_bottom,
    };
    this._computeEdge();
    return this;
  }
  removeDom() {
    if (this.dom) {
      this.dom.removeEventListener("touchstart", this.touchStart);
      this.dom.removeEventListener("touchmove", this.touchMove);
      this.dom.removeEventListener("touchend", this.touchEnd);
      this.dom.removeEventListener("touchcancel", this.touchEnd);
    }
    return this;
  }
  setMaxScale(t) {
    if (!isNaN(t)) {
      this.maxScale = Math.max(Number(t), 1);
    }
    return this;
  }
  setMinScale(t) {
    if (!isNaN(t)) {
      this.minScale = Math.min(Number(t), 1);
    }
    return this;
  }
  setMotionThreshold(t) {
    if (!isNaN(t)) {
      this.motionThreshold = t;
    }
    return this;
  }
  setCubic(t = {}) {
    for (const e in t) {
      if (t[e] instanceof Array && t[e].length === 4) {
        this.cubic[e] = t[e].map((t) => {
          if (isNaN(Number(t))) {
            return Number(t);
          }
          return 0;
        });
      }
    }
    return this;
  }
  setDragMode(t) {
    this.dragMode = t;
  }
  setSwipeMode(t) {
    this.swipeMode = t;
  }
  setTransformMode(t) {
    this.transformMode = t;
  }
  setBounceRateX(t) {
    if (!isNaN(t)) {
      this.bounceRateX = Math.min(Number(t), 1);
    }
    return this;
  }
  setBounceRateY(t) {
    if (!isNaN(t)) {
      this.bounceRateY = Math.min(Number(t), 1);
    }
    return this;
  }
  setViewport(t = {}) {
    const e = this;
    let n = false;
    ["left", "right", "top", "bottom"].forEach((r) => {
      const i = Number(t[r]);
      if (!isNaN(i)) {
        e.viewport[r] = i;
        n = true;
      }
    });
    if (n) {
      this._computeEdge();
    }
    return this;
  }
  setFixedX(t) {
    this.fixedX = !!t;
    if (t) {
      const e = this.transform.transformOrigin;
      if (e) {
        const n = this.boundingRect || this.viewport;
        const r = n.left;
        const i = n.right;
        e[0] = (i - r) / 2;
      }
      this.setTransform(
        {
          translateX: 0,
        },
        {
          merge: true,
        },
      );
    }
    return this;
  }
  setFixedY(t) {
    this.fixedY = !!t;
    if (t) {
      const e = this.transform.transformOrigin;
      if (e) {
        const n = this.boundingRect || this.viewport;
        const r = n.top;
        const i = n.bottom;
        e[1] = (i - r) / 2;
      }
      this.setTransform(
        {
          translateY: 0,
        },
        {
          merge: true,
        },
      );
    }
    return this;
  }
  toStyle() {
    const t = this.toCSS();
    const t_transform = t.transform;
    const t_transformOrigin = t.transformOrigin;
    let r = "";
    if (t_transform) {
      r += "transform: " + t_transform;
    }
    if (t_transformOrigin) {
      r += "transform-origin: " + t_transformOrigin;
    }
    return r;
  }
  toCSS(t) {
    let transform = "";
    let transformOrigin = "center";
    if (t || this.dirty()) {
      const r = t || this.transform;
      if (this.transformMode === s) {
        const i = this.transform.scale;
        const o = i === undefined ? 1 : i;
        ["translateX", "translateY"].forEach((t) => {
          if (r[t] !== undefined) {
            transform += t + "(" + r[t] * o + "px)";
          }
        });
        transform += "scale(" + o + ")";
      } else if (this.transformMode === "scale-first") {
        ["scale", "translateX", "translateY"].forEach((t, n) => {
          if (r[t] !== undefined) {
            transform += t + "(" + r[t] + (n ? "px" : "") + ")";
          }
        });
      } else {
        const a = r.scale;
        const u = a === undefined ? 1 : a;
        const c = r.translateX;
        const l = r.translateY;
        transform =
          "matrix(" +
          u +
          ", 0, 0, " +
          u +
          ", " +
          (c === undefined ? 0 : c) * u +
          ", " +
          (l === undefined ? 0 : l) * u +
          ")";
      }
    }
    if (this.transform.transformOrigin) {
      transformOrigin = this.transform.transformOrigin
        .map((t) => Math.round(t) + "px")
        .join(" ");
    }
    return {
      transform,
      transformOrigin,
    };
  }
  _getTransformedBounding() {
    const boundingRect = this.boundingRect;
    const viewport = this.viewport;
    const transform = this.transform;
    const r = boundingRect || viewport;
    const r_left = r.left;
    const r_top = r.top;
    const r_right = r.right;
    const r_bottom = r.bottom;
    const n_scale = transform.scale;
    const c = n_scale === undefined ? 1 : n_scale;
    const n_transformOrigin = transform.transformOrigin;
    const h =
      n_transformOrigin === undefined
        ? [(r_right - r_left) / 2, (r_bottom - r_top) / 2]
        : n_transformOrigin;
    const n_translateX = transform.translateX;
    const n_translateY = transform.translateY;
    const m = h[0];
    const p = h[1];
    const v = ((n_translateX === undefined ? 0 : n_translateX) - m) * c + m;
    const g = ((n_translateY === undefined ? 0 : n_translateY) - p) * c + p;
    return {
      left: r_left + v,
      right: r_left + v + (r_right - r_left) * c,
      top: r_top + g,
      bottom: r_top + g + (r_bottom - r_top) * c,
    };
  }
  _getRawBounding(t) {
    const transform = this.transform;
    const t_left = t.left;
    const t_top = t.top;
    const t_right = t.right;
    const t_bottom = t.bottom;
    const e_scale = transform.scale;
    const s = e_scale === undefined ? 1 : e_scale;
    const e_transformOrigin = transform.transformOrigin;
    const c =
      e_transformOrigin === undefined
        ? [(t_right - t_left) / 2, (t_bottom - t_top) / 2]
        : e_transformOrigin;
    const e_translateX = transform.translateX;
    const e_translateY = transform.translateY;
    const d = c[0];
    const f = c[1];
    const m = ((e_translateX === undefined ? 0 : e_translateX) - d) * s + d;
    const p = ((e_translateY === undefined ? 0 : e_translateY) - f) * s + f;
    return {
      left: t_left - m,
      right: t_left - m + (t_right - t_left) / s,
      top: t_top - p,
      bottom: t_top - p + (t_bottom - t_top) / s,
    };
  }
  _getDragV(t, e, n, r) {
    let i = 0;
    let o = 0;
    if (n) {
      if (r) {
        const a = e * t > 0;
        i = a ? t * r : (e + t) * r;
        o = a ? i : -e + i;
      } else {
        o = -e;
      }
    } else {
      o = t;
    }
    return o;
  }
  _setSwipeBounceByAnimation(t, e, n, r, i, o, a, s = Infinity) {
    const u = [];
    const c = t * e < 0;
    if (n) {
      if (r && !c) {
        u.push([o, e]);
      } else {
        let l = (c ? t * i : (t - e) * i) / 2;
        if (Math.abs(l) > s) {
          l *= Math.abs(s / l);
        }
        const h = l + (c ? 0 : e);
        const d = C(a, Math.abs(h) / (2 * Math.abs(l) + Math.abs(e)), "y")[0];
        const f = Math.floor(o * d);
        if (!(d > 0.1)) {
          u.push([f, h]);
        }
        u.push([o, e]);
      }
    } else {
      t = (Math.min(Math.abs(t), Math.abs(e)) * Math.abs(t)) / t;
      u.push([o, t]);
    }
    return u;
  }
  _setSwipeBounce(t, e, n, r, i = "x", o) {
    const a = this;
    if (o === undefined) {
      o = Infinity;
    }
    const s = t * e < 0;
    let u = s ? t * n : (t - e) * n;
    if (Math.abs(u) > o) {
      u *= Math.abs(o / u);
    }
    const c = (u + (s ? 0 : e)) / t;
    let l = 0;
    r(function (t, e) {
      const n = 17 * Math.max(Math.floor((C(e[1], c, "y")[0] * t) / 17), 2);
      const swipeSpan = t - n;
      l = setTimeout(() => {
        r(function (t, cubicBezier) {
          let n = 1 - swipeSpan / t;
          let r = 0;
          const s = function () {
            if (i === "x") {
              a.fitX(false);
            } else if (i === "y") {
              a.fitY(false);
            }
            if (a.dom) {
              a.dom.style.transition =
                `transform ${swipeSpan - r}ms cubic-bezier(` +
                cubicBezier[1].map((t) => t.toFixed(3)).join(",") +
                ")";
            }
          };
          if (n > 0) {
            cubicBezier = R(cubicBezier[1], n, "x");
            s();
          } else {
            n = 17 / t;
            r = 17;
            cubicBezier = R(cubicBezier[1], n, "x");
            Y(s);
          }
          return {
            cubicBezier,
            swipeSpan,
          };
        });
      }, n);
    });
    return l;
  }
  _syncDom() {
    if (this.dom) {
      const t = window
        .getComputedStyle(this.dom)
        .getPropertyValue("transform")
        .split(")")[0]
        .split(", ")
        .map((t) => parseFloat(t));
      const e = t[3];
      const n = e === undefined ? 1 : e;
      const r = t[4];
      const i = t[5];
      this.setTransform(
        {
          scale: n,
          translateX: Math.round(r === undefined ? 0 : r) / n,
          translateY: Math.round(i === undefined ? 0 : i) / n,
        },
        {
          merge: true,
        },
      );
    }
  }
  _appendStyle(t) {
    if (this.animationStyleDom) {
      const e = this.animationStyleDom.firstChild;
      if (e) {
        this.animationStyleDom.removeChild(e);
      }
    } else {
      const n = document.head || document.getElementsByTagName("head")[0];
      const r = document.createElement("style");
      n.appendChild(r);
      r.type = "text/css";
      this.animationStyleDom = r;
    }
    if (this.animationStyleDom.styleSheet) {
      this.animationStyleDom.styleSheet.cssText = t;
    } else {
      this.animationStyleDom.appendChild(document.createTextNode(t));
    }
  }
  _appendAnimation(t, e, n) {
    const r = this;
    const i =
      "__transformable_key_" +
      parseInt((0.5 + 0.5 * Math.random()) * 10000000000000000).toString(16);
    const o = [];
    for (let a = 0; a < t.length; a += 1) {
      const s = t[a];
      const u = s[0];
      const c = s[1];
      const l = Math.floor((u / n) * 100);
      o.push(l + "% { " + c + " }");
    }
    const h =
      "@keyframes " + i + " {\n            " + o.join("\n") + "\n        }";
    this._appendStyle(h);
    if (this.dom) {
      Y(function () {
        r.dom.style.animation = i + " " + n + "ms " + e;
        r.dom.style.animationFillMode = "forwards";
      });
    }
  }
  _stopAnimation() {
    if (this.dom) {
      this.dom.style.animationPlayState = "paused";
    }
  }
}
