import { BQ, MN, f2, qT, sH, vx, w6 } from "./module-dw4.js";
import i from "bT";
import { PA, Pe } from "./module-f8T.js";
let a = 0;
const s = {};
function u(e) {
  if (!s[e]) {
    s[e] = ((e) => {
      if (typeof Symbol === "function") {
        return Symbol(e);
      }
      const t = "__$mobx-react " + e + " (" + a + ")";
      a++;
      return t;
    })(e);
  }
  return s[e];
}
function c(e, t) {
  if (l(e, t)) {
    return true;
  }
  if (
    typeof e !== "object" ||
    e === null ||
    typeof t !== "object" ||
    t === null
  ) {
    return false;
  }
  const n = Object.keys(e);
  const r = Object.keys(t);
  if (n.length !== r.length) {
    return false;
  }
  for (let i = 0; i < n.length; i++) {
    if (!Object.hasOwnProperty.call(t, n[i]) || !l(e[n[i]], t[n[i]])) {
      return false;
    }
  }
  return true;
}
function l(e, t) {
  if (e === t) {
    return e !== 0 || 1 / e == 1 / t;
  }
  return e != e && t != t;
}
function f(e, t, n) {
  if (Object.hasOwnProperty.call(e, t)) {
    e[t] = n;
  } else {
    Object.defineProperty(e, t, {
      enumerable: false,
      configurable: true,
      writable: true,
      value: n,
    });
  }
}
const h = u("patchMixins");
const d = u("patchedDefinition");
function v(e, t) {
  let n;
  const r = this;
  for (
    var i = arguments.length, o = Array(i > 2 ? i - 2 : 0), a = 2;
    a < i;
    a++
  ) {
    o[a - 2] = arguments[a];
  }
  t.locks++;
  try {
    if (e != null) {
      n = e.apply(this, o);
    }
    return n;
  } finally {
    t.locks--;
    if (t.locks === 0) {
      t.methods.forEach((e) => {
        e.apply(r, o);
      });
    }
  }
}
function _(e, t) {
  return function () {
    for (var n = arguments.length, r = Array(n), i = 0; i < n; i++) {
      r[i] = arguments[i];
    }
    v.call.apply(v, [this, e, t].concat(r));
  };
}
function p(e, t, n) {
  let r;
  let i;
  i = (r = e[h] = e[h] || {})[t] = r[t] || {};
  i.locks = i.locks || 0;
  i.methods = i.methods || [];
  const o = i;
  if (o.methods.indexOf(n) < 0) {
    o.methods.push(n);
  }
  const a = Object.getOwnPropertyDescriptor(e, t);
  if (!a || !a[d]) {
    const s = e[t];
    const u = (function e(t, n, enumerable, i, o) {
      let s = _(o, i);
      return {
        [d]: true,
        get: function () {
          return s;
        },
        set: function (o) {
          if (this === t) {
            s = _(o, i);
          } else {
            const a = e(this, n, enumerable, i, o);
            Object.defineProperty(this, n, a);
          }
        },
        configurable: true,
        enumerable,
      };
    })(e, t, a ? a.enumerable : undefined, o, s);
    Object.defineProperty(e, t, u);
  }
}
const b = BQ || "$mobx";
const g = u("isMobXReactObserver");
const y = u("isUnmounted");
const m = u("skipRender");
const O = u("isForcingUpdate");
function w(e) {
  return (
    e.displayName ||
    e.name ||
    (e.constructor && (e.constructor.displayName || e.constructor.name)) ||
    "<component>"
  );
}
function S(e) {
  const t = this;
  f(this, m, false);
  f(this, O, false);
  const n = w(this);
  const o = e.bind(this);
  let a = false;
  const s = () => {
    var e = new qT(n + ".render()", function () {
      if (!a && ((a = true), t[y] !== true)) {
        let n = true;
        try {
          f(t, O, true);
          if (!t[m]) {
            i.Component.prototype.forceUpdate.call(t);
          }
          n = false;
        } finally {
          f(t, O, false);
          if (n) {
            e.dispose();
            t.render[b] = null;
          }
        }
      }
    });
    e.reactComponent = t;
    return e;
  };
  function u() {
    a = false;
    let e;
    const t = (e = u[b]) != null ? e : (u[b] = s());
    let n;
    let i;
    t.track(function () {
      try {
        i = vx(false, o);
      } catch (error) {
        n = error;
      }
    });
    if (n) {
      throw n;
    }
    return i;
  }
  return u;
}
function A(e, t) {
  if (Pe()) {
    console.warn(
      "[mobx-react] It seems that a re-rendering of a React component is triggered while in static (server-side) mode. Please make sure components are rendered only once server-side.",
    );
  }
  return this.state !== t || !c(this.props, e);
}
function j(e, t) {
  const n = u("reactProp_" + t + "_valueHolder");
  const i = u("reactProp_" + t + "_atomHolder");
  function o() {
    if (!this[i]) {
      f(this, i, MN("reactive " + t));
    }
    return this[i];
  }
  Object.defineProperty(e, t, {
    configurable: true,
    enumerable: true,
    get: function () {
      let e = false;
      if (f2 && w6) {
        e = f2(true);
      }
      o.call(this).reportObserved();
      if (f2 && w6) {
        w6(e);
      }
      return this[n];
    },
    set: function (e) {
      if (this[O] || c(this[n], e)) {
        f(this, n, e);
      } else {
        f(this, n, e);
        f(this, m, true);
        o.call(this).reportChanged();
        f(this, m, false);
      }
    },
  });
}
function k(e) {
  if (e.isMobxInjector === true) {
    console.warn(
      "Mobx observer: You are trying to use `observer` on a component that already has `inject`. Please apply `observer` before applying `inject`",
    );
  }
  if (
    !(
      Object.prototype.isPrototypeOf.call(i.Component, e) ||
      Object.prototype.isPrototypeOf.call(i.PureComponent, e)
    )
  ) {
    return PA(e);
  }
  const e_prototype = e.prototype;
  if (e[g]) {
    console.warn(
      "The provided component class (" +
        w(e_prototype) +
        ")\n                has already been declared as an observer component.",
    );
  } else {
    e[g] = true;
  }
  if (e_prototype.componentWillReact) {
    throw Error(
      "The componentWillReact life-cycle event is no longer supported",
    );
  }
  if (e.__proto__ !== i.PureComponent) {
    if (e_prototype.shouldComponentUpdate) {
      if (e_prototype.shouldComponentUpdate !== A) {
        throw Error(
          "It is not allowed to use shouldComponentUpdate in observer based components.",
        );
      }
    } else {
      e_prototype.shouldComponentUpdate = A;
    }
  }
  j(e_prototype, "props");
  j(e_prototype, "state");
  if (e.contextType) {
    j(e_prototype, "context");
  }
  const t_render = e_prototype.render;
  if (typeof t_render !== "function") {
    throw Error(
      "[mobx-react] class component (" +
        w(e_prototype) +
        ") is missing `render` method.\n`observer` requires `render` being a function defined on prototype.\n`render = () => {}` or `render = function() {}` is not supported.",
    );
  }
  e_prototype.render = function () {
    this.render = Pe() ? t_render : S.call(this, t_render);
    return this.render();
  };
  p(e_prototype, "componentDidMount", function () {
    this[y] = false;
    if (!this.render[b]) {
      i.Component.prototype.forceUpdate.call(this);
    }
  });
  p(e_prototype, "componentWillUnmount", function () {
    if (!Pe()) {
      const e = this.render[b];
      if (e) {
        e.dispose();
        this.render[b] = null;
      } else {
        console.warn(
          "The reactive render of an observer class component (" +
            w(this) +
            ")\n                was overridden after MobX attached. This may result in a memory leak if the\n                overridden reactive render was not properly disposed.",
        );
      }
      this[y] = true;
    }
  });
  return e;
}
export { k as PA };
if (!i.Component) {
  throw Error("mobx-react requires React to be available");
}
if (!sH) {
  throw Error("mobx-react requires mobx to be available");
}
