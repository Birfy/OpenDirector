const r = (function () {
  if (typeof Map !== "undefined") {
    return Map;
  }
  function t(__entries__, e) {
    let n = -1;
    __entries__.some((t, r) => t[0] === e && ((n = r), true));
    return n;
  }
  class e {
    constructor() {
      this.__entries__ = [];
    }
    get(e) {
      const n = t(this.__entries__, e);
      const r = this.__entries__[n];
      return r && r[1];
    }
    set(e, n) {
      const r = t(this.__entries__, e);
      if (~r) {
        this.__entries__[r][1] = n;
      } else {
        this.__entries__.push([e, n]);
      }
    }
    delete(e) {
      const __entries__ = this.__entries__;
      const r = t(__entries__, e);
      if (~r) {
        __entries__.splice(r, 1);
      }
    }
    has(e) {
      return !!~t(this.__entries__, e);
    }
    clear() {
      this.__entries__.splice(0);
    }
    forEach(t, e = null) {
      for (let n = 0, r = this.__entries__; n < r.length; n++) {
        const i = r[n];
        t.call(e, i[1], i[0]);
      }
    }
  }
  Object.defineProperty(e.prototype, "size", {
    get: function () {
      return this.__entries__.length;
    },
    enumerable: true,
    configurable: true,
  });
  return e;
})();
const i =
  typeof window !== "undefined" &&
  typeof document !== "undefined" &&
  window.document === document;
const o =
  global !== undefined && global.Math === Math
    ? global
    : typeof self !== "undefined" && self.Math === Math
      ? self
      : typeof window !== "undefined" && window.Math === Math
        ? window
        : Function("return this")();
const u =
  typeof requestAnimationFrame === "function"
    ? requestAnimationFrame.bind(o)
    : (t) => setTimeout(() => t(Date.now()), 1000 / 60);
const a = [
  "top",
  "right",
  "bottom",
  "left",
  "width",
  "height",
  "size",
  "weight",
];
const s = typeof MutationObserver !== "undefined";
const c = (function () {
  class t {
    constructor() {
      this.connected_ = false;
      this.mutationEventsAdded_ = false;
      this.mutationsObserver_ = null;
      this.observers_ = [];
      this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
      this.refresh = ((t) => {
        let e = false;
        let n = false;
        let r = 0;
        function i() {
          if (e) {
            e = false;
            t();
          }
          if (n) {
            a();
          }
        }
        function o() {
          u(i);
        }
        function a() {
          const t = Date.now();
          if (e) {
            if (t - r < 2) {
              return;
            }
            n = true;
          } else {
            e = true;
            n = false;
            setTimeout(o, 20);
          }
          r = t;
        }
        return a;
      })(this.refresh.bind(this));
    }
    addObserver(t) {
      if (!~this.observers_.indexOf(t)) {
        this.observers_.push(t);
      }
      if (!this.connected_) {
        this.connect_();
      }
    }
    removeObserver(t) {
      const observers_ = this.observers_;
      const n = observers_.indexOf(t);
      if (~n) {
        observers_.splice(n, 1);
      }
      if (!observers_.length && this.connected_) {
        this.disconnect_();
      }
    }
    refresh() {
      if (this.updateObservers_()) {
        this.refresh();
      }
    }
    updateObservers_() {
      const t = this.observers_.filter((t) => {
        t.gatherActive();
        return t.hasActive();
      });
      t.forEach((t) => t.broadcastActive());
      return t.length > 0;
    }
    connect_() {
      if (i && !this.connected_) {
        document.addEventListener("transitionend", this.onTransitionEnd_);
        window.addEventListener("resize", this.refresh);
        if (s) {
          this.mutationsObserver_ = new MutationObserver(this.refresh);
          this.mutationsObserver_.observe(document, {
            attributes: true,
            childList: true,
            characterData: true,
            subtree: true,
          });
        } else {
          document.addEventListener("DOMSubtreeModified", this.refresh);
          this.mutationEventsAdded_ = true;
        }
        this.connected_ = true;
      }
    }
    disconnect_() {
      if (i && this.connected_) {
        document.removeEventListener("transitionend", this.onTransitionEnd_);
        window.removeEventListener("resize", this.refresh);
        if (this.mutationsObserver_) {
          this.mutationsObserver_.disconnect();
        }
        if (this.mutationEventsAdded_) {
          document.removeEventListener("DOMSubtreeModified", this.refresh);
        }
        this.mutationsObserver_ = null;
        this.mutationEventsAdded_ = false;
        this.connected_ = false;
      }
    }
    onTransitionEnd_(t) {
      const t_propertyName = t.propertyName;
      const n = t_propertyName === undefined ? "" : t_propertyName;
      if (a.some((t) => !!~n.indexOf(t))) {
        this.refresh();
      }
    }
    static getInstance() {
      if (!this.instance_) {
        this.instance_ = new t();
      }
      return this.instance_;
    }
  }
  t.instance_ = null;
  return t;
})();
const f = (t, e) => {
  for (let n = 0, r = Object.keys(e); n < r.length; n++) {
    const i = r[n];
    Object.defineProperty(t, i, {
      value: e[i],
      enumerable: false,
      writable: false,
      configurable: true,
    });
  }
  return t;
};
const d = (t) => (t && t.ownerDocument && t.ownerDocument.defaultView) || o;
const l = p(0, 0, 0, 0);
function h(t) {
  return parseFloat(t) || 0;
}
function v(t) {
  const e = [];
  for (let n = 1; n < arguments.length; n++) {
    e[n - 1] = arguments[n];
  }
  return e.reduce((acc, item) => acc + h(t["border-" + item + "-width"]), 0);
}
const m =
  typeof SVGGraphicsElement !== "undefined"
    ? (t) => t instanceof d(t).SVGGraphicsElement
    : (t) => t instanceof d(t).SVGElement && typeof t.getBBox === "function";
function p(x, y_1, width, height) {
  return {
    x,
    y: y_1,
    width,
    height,
  };
}
class y {
  constructor(t) {
    this.broadcastWidth = 0;
    this.broadcastHeight = 0;
    this.contentRect_ = p(0, 0, 0, 0);
    this.target = t;
  }
  isActive() {
    const t = ((t) => {
      if (!i) {
        return l;
      }
      if (m(t)) {
        let e;
        return p(0, 0, (e = t.getBBox()).width, e.height);
      }
      return ((t) => {
        let e;
        const t_clientWidth = t.clientWidth;
        const t_clientHeight = t.clientHeight;
        if (!t_clientWidth && !t_clientHeight) {
          return l;
        }
        const i = d(t).getComputedStyle(t);
        const o = ((t) => {
          const e = {};
          for (
            let n = 0, r = ["top", "right", "bottom", "left"];
            n < r.length;
            n++
          ) {
            const i = r[n];
            const o = t["padding-" + i];
            e[i] = h(o);
          }
          return e;
        })(i);
        const u = o.left + o.right;
        const a = o.top + o.bottom;
        let s = h(i.width);
        let c = h(i.height);
        if (i.boxSizing === "border-box") {
          if (Math.round(s + u) !== t_clientWidth) {
            s -= v(i, "left", "right") + u;
          }
          if (Math.round(c + a) !== t_clientHeight) {
            c -= v(i, "top", "bottom") + a;
          }
        }
        if ((e = t) !== d(e).document.documentElement) {
          const f = Math.round(s + u) - t_clientWidth;
          const m = Math.round(c + a) - t_clientHeight;
          if (Math.abs(f) !== 1) {
            s -= f;
          }
          if (Math.abs(m) !== 1) {
            c -= m;
          }
        }
        return p(o.left, o.top, s, c);
      })(t);
    })(this.target);
    this.contentRect_ = t;
    return t.width !== this.broadcastWidth || t.height !== this.broadcastHeight;
  }
  broadcastRect() {
    const contentRect_ = this.contentRect_;
    this.broadcastWidth = contentRect_.width;
    this.broadcastHeight = contentRect_.height;
    return contentRect_;
  }
}
const _ = function (target, e) {
  let n;
  let r;
  let i;
  let o;
  let u;
  n = e.x;
  r = e.y;
  i = e.width;
  o = e.height;
  f(
    (u = Object.create(
      (typeof DOMRectReadOnly !== "undefined" ? DOMRectReadOnly : Object)
        .prototype,
    )),
    {
      x: n,
      y: r,
      width: i,
      height: o,
      top: r,
      right: n + i,
      bottom: o + r,
      left: n,
    },
  );
  const contentRect = u;
  f(this, {
    target,
    contentRect,
  });
};
class b {
  constructor(t, e, n) {
    this.activeObservations_ = [];
    this.observations_ = new r();
    if (typeof t !== "function") {
      throw TypeError(
        "The callback provided as parameter 1 is not a function.",
      );
    }
    this.callback_ = t;
    this.controller_ = e;
    this.callbackCtx_ = n;
  }
  observe(t) {
    if (!arguments.length) {
      throw TypeError("1 argument required, but only 0 present.");
    }
    if (!(typeof Element === "undefined") && Element instanceof Object) {
      if (!(t instanceof d(t).Element)) {
        throw TypeError('parameter 1 is not of type "Element".');
      }
      const e = this.observations_;
      if (!e.has(t)) {
        e.set(t, new y(t));
        this.controller_.addObserver(this);
        this.controller_.refresh();
      }
    }
  }
  unobserve(t) {
    if (!arguments.length) {
      throw TypeError("1 argument required, but only 0 present.");
    }
    if (!(typeof Element === "undefined") && Element instanceof Object) {
      if (!(t instanceof d(t).Element)) {
        throw TypeError('parameter 1 is not of type "Element".');
      }
      const e = this.observations_;
      if (e.has(t)) {
        e.delete(t);
        if (!e.size) {
          this.controller_.removeObserver(this);
        }
      }
    }
  }
  disconnect() {
    this.clearActive();
    this.observations_.clear();
    this.controller_.removeObserver(this);
  }
  gatherActive() {
    const t = this;
    this.clearActive();
    this.observations_.forEach((e) => {
      if (e.isActive()) {
        t.activeObservations_.push(e);
      }
    });
  }
  broadcastActive() {
    if (this.hasActive()) {
      const t = this.callbackCtx_;
      const e = this.activeObservations_.map(
        (t) => new _(t.target, t.broadcastRect()),
      );
      this.callback_.call(t, e, t);
      this.clearActive();
    }
  }
  clearActive() {
    this.activeObservations_.splice(0);
  }
  hasActive() {
    return this.activeObservations_.length > 0;
  }
}
const g = typeof WeakMap !== "undefined" ? new WeakMap() : new r();
const w = function t(e) {
  if (!(this instanceof t)) {
    throw TypeError("Cannot call a class as a function.");
  }
  if (!arguments.length) {
    throw TypeError("1 argument required, but only 0 present.");
  }
  const n = new b(e, c.getInstance(), this);
  g.set(this, n);
};
["observe", "unobserve", "disconnect"].forEach((t) => {
  w.prototype[t] = function () {
    let e;
    return (e = g.get(this))[t].apply(e, arguments);
  };
});
export default o.ResizeObserver !== undefined ? o.ResizeObserver : w;
