function r(e) {
  for (
    var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1;
    r < t;
    r++
  ) {
    n[r - 1] = arguments[r];
  }
  throw Error(
    typeof e === "number"
      ? "[MobX] minified error nr: " +
          e +
          (n.length ? " " + n.map(String).join(",") : "") +
          ". Find the full error at: https://github.com/mobxjs/mobx/blob/main/packages/mobx/src/errors.ts"
      : "[MobX] " + e,
  );
}
let i;
let o;
let a;
let s;
let u;
let c;
let l;
let f;
let h;
let d;
let v;
const _ = {};
function p() {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (global !== undefined) {
    return global;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  return _;
}
const O = [];
Object.freeze(O);
const w = {};
Object.freeze(w);
const S = typeof Proxy !== "undefined";
const A = Object.toString();
function j() {
  if (!S) {
    r("Proxy not available");
  }
}
function k(e) {
  let t = false;
  return function () {
    if (!t) {
      t = true;
      return e.apply(this, arguments);
    }
  };
}
const x = function () {};
function P(e) {
  return typeof e === "function";
}
function E(e) {
  switch (typeof e) {
    case "string":
    case "symbol":
    case "number":
      return true;
  }
  return false;
}
function T(e) {
  return e !== null && typeof e === "object";
}
function R(e) {
  if (!T(e)) {
    return false;
  }
  const t = Object.getPrototypeOf(e);
  if (t == null) {
    return true;
  }
  const n = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return typeof n === "function" && n.toString() === A;
}
function M(e) {
  const t = e == null ? undefined : e.constructor;
  return (
    !!t &&
    (t.name === "GeneratorFunction" || t.displayName === "GeneratorFunction")
  );
}
function V(e, t, n) {
  Object.defineProperty(e, t, {
    enumerable: false,
    writable: true,
    configurable: true,
    value: n,
  });
}
function C(e, t, n) {
  Object.defineProperty(e, t, {
    enumerable: false,
    writable: false,
    configurable: true,
    value: n,
  });
}
function D(e, t) {
  const n = "isMobX" + e;
  t.prototype[n] = true;
  return function (e) {
    return T(e) && e[n] === true;
  };
}
function N(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Map]";
}
function B(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Set]";
}
const L = Object.getOwnPropertySymbols !== undefined;
const I =
  typeof Reflect !== "undefined" && Reflect.ownKeys
    ? Reflect.ownKeys
    : L
      ? (e) =>
          Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
      : Object.getOwnPropertyNames;
function U(e) {
  if (e === null) {
    return null;
  }
  if (typeof e === "object") {
    return "" + e;
  }
  return e;
}
function K(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
const q =
  Object.getOwnPropertyDescriptors ||
  ((e) => {
    const t = {};
    I(e).forEach((n) => {
      t[n] = Object.getOwnPropertyDescriptor(e, n);
    });
    return t;
  });
function G(e, t, n) {
  if (n) {
    e |= t;
  } else {
    e &= ~t;
  }
  return e;
}
function z(e, t) {
  if (t == null || t > e.length) {
    t = e.length;
  }
  for (var n = 0, r = Array(t); n < t; n++) {
    r[n] = e[n];
  }
  return r;
}
function H(e, t) {
  for (let n = 0; n < t.length; n++) {
    const r = t[n];
    r.enumerable = r.enumerable || false;
    r.configurable = true;
    if ("value" in r) {
      r.writable = true;
    }
    Object.defineProperty(
      e,
      ((e) => {
        const t = ((e, t) => {
          if (typeof e !== "object" || !e) {
            return e;
          }
          const n = e[Symbol.toPrimitive];
          if (n !== undefined) {
            const r = n.call(e, t || "default");
            if (typeof r !== "object") {
              return r;
            }
            throw TypeError("@@toPrimitive must return a primitive value.");
          }
          return (t === "string" ? String : Number)(e);
        })(e, "string");
        if (typeof t === "symbol") {
          return t;
        }
        return t + "";
      })(r.key),
      r,
    );
  }
}
function W(e, t, n) {
  if (t) {
    H(e.prototype, t);
  }
  if (n) {
    H(e, n);
  }
  Object.defineProperty(e, "prototype", {
    writable: false,
  });
  return e;
}
function $(e, t) {
  let n =
    (typeof Symbol !== "undefined" && e[Symbol.iterator]) || e["@@iterator"];
  if (n) {
    return (n = n.call(e)).next.bind(n);
  }
  if (
    Array.isArray(e) ||
    (n = ((e) => {
      if (e) {
        if (typeof e === "string") {
          return z(e, undefined);
        }
        let t = {}.toString.call(e).slice(8, -1);
        if (t === "Object" && e.constructor) {
          t = e.constructor.name;
        }
        if (t === "Map" || t === "Set") {
          return Array.from(e);
        }
        if (
          t === "Arguments" ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
        ) {
          return z(e, undefined);
        }
        return undefined;
      }
    })(e)) ||
    (t && e && typeof e.length === "number")
  ) {
    if (n) {
      e = n;
    }
    let r = 0;
    return function () {
      if (r >= e.length) {
        return {
          done: true,
        };
      }
      return {
        done: false,
        value: e[r++],
      };
    };
  }
  throw TypeError(
    "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
  );
}
function X(e, t) {
  e.prototype = Object.create(t.prototype);
  e.prototype.constructor = e;
  Y(e, t);
}
function Y(e, t) {
  return (Y = Object.setPrototypeOf
    ? Object.setPrototypeOf.bind()
    : function (e, t) {
        e.__proto__ = t;
        return e;
      })(e, t);
}
const J = Symbol("mobx-stored-annotations");
function Q(e) {
  return Object.assign(function (t, n) {
    if (ee(n)) {
      return e.decorate_20223_(t, n);
    }
    Z(t, n, e);
  }, e);
}
function Z(e, t, n) {
  if (!K(e, J)) {
    V(e, J, {
      ...e[J],
    });
  }
  if (n.annotationType_ !== "override") {
    e[J][t] = n;
  }
}
function ee(e) {
  return typeof e === "object" && typeof e.kind === "string";
}
export var BQ = Symbol("mobx administration");
const en = (() => {
  function e(e = "Atom") {
    this.name_ = undefined;
    this.flags_ = 0;
    this.observers_ = new Set();
    this.lastAccessedBy_ = 0;
    this.lowestObserverState_ = h.NOT_TRACKING_;
    this.onBOL = undefined;
    this.onBUOL = undefined;
    this.name_ = e;
  }
  const e_prototype = e.prototype;
  e_prototype.onBO = function () {
    if (this.onBOL) {
      this.onBOL.forEach((e) => e());
    }
  };
  e_prototype.onBUO = function () {
    if (this.onBUOL) {
      this.onBUOL.forEach((e) => e());
    }
  };
  e_prototype.reportObserved = function () {
    return td(this);
  };
  e_prototype.reportChanged = function () {
    tf();
    tv(this);
    th();
  };
  e_prototype.toString = function () {
    return this.name_;
  };
  return W(e, [
    {
      key: "isBeingObserved",
      get: function () {
        return !!(this.flags_ & e.isBeingObservedMask_);
      },
      set: function (t) {
        this.flags_ = G(this.flags_, e.isBeingObservedMask_, t);
      },
    },
    {
      key: "isPendingUnobservation",
      get: function () {
        return !!(this.flags_ & e.isPendingUnobservationMask_);
      },
      set: function (t) {
        this.flags_ = G(this.flags_, e.isPendingUnobservationMask_, t);
      },
    },
    {
      key: "diffValue",
      get: function () {
        return +!!(this.flags_ & e.diffValueMask_);
      },
      set: function (t) {
        this.flags_ = G(this.flags_, e.diffValueMask_, t === 1);
      },
    },
  ]);
})();
en.isBeingObservedMask_ = 1;
en.isPendingUnobservationMask_ = 2;
en.diffValueMask_ = 4;
const er = D("Atom", en);
export function MN(e, t = x, n = x) {
  const r = new en(e);
  if (t !== x) {
    tB("onBO", r, t, undefined);
  }
  if (n !== x) {
    tN(r, n);
  }
  return r;
}
export var m3 = {
  identity: function (e, t) {
    return e === t;
  },
  structural: function (e, t) {
    return nG(e, t);
  },
  default: function (e, t) {
    if (Object.is) {
      return Object.is(e, t);
    }
    if (e === t) {
      return e !== 0 || 1 / e == 1 / t;
    }
    return e != e && t != t;
  },
  shallow: function (e, t) {
    return nG(e, t, 1);
  },
};
function ea(e, t, n) {
  if (tX(e)) {
    return e;
  }
  if (Array.isArray(e)) {
    return sH.array(e, {
      name: n,
    });
  }
  if (R(e)) {
    return sH.object(e, undefined, {
      name: n,
    });
  }
  if (N(e)) {
    return sH.map(e, {
      name: n,
    });
  }
  if (B(e)) {
    return sH.set(e, {
      name: n,
    });
  }
  if (typeof e === "function" && !tR(e) && !tF(e)) {
    if (M(e)) {
      return tW(e);
    } else {
      return tE(n, e);
    }
  }
  return e;
}
function enhancer(e) {
  return e;
}
function eu(e, t) {
  return {
    annotationType_: e,
    options_: t,
    make_: ec,
    extend_: el,
    decorate_20223_: ef,
  };
}
function ec(e, t, n, r) {
  if ((i = this.options_) != null && i.bound) {
    return +(this.extend_(e, t, n, false) !== null);
  }
  if (r === e.target_) {
    return 2 * (this.extend_(e, t, n, false) !== null);
  }
  if (tR(n.value)) {
    return 1;
  }
  var i;
  const o = eh(e, this, t, n, false);
  Object.defineProperty(r, t, o);
  return 2;
}
function el(e, t, n, r) {
  const i = eh(e, this, t, n);
  return e.defineProperty_(t, i, r);
}
function ef(e, t) {
  let n;
  const t_kind = t.kind;
  const t_name = t.name;
  const t_addInitializer = t.addInitializer;
  const s = this;
  const u = (e) => {
    let t;
    let n;
    let r;
    let i;
    return eF(
      (t = (n = s.options_) == null ? undefined : n.name) != null
        ? t
        : t_name.toString(),
      e,
      (r = (i = s.options_) == null ? undefined : i.autoAction) != null && r,
    );
  };
  if (t_kind == "field") {
    return function (e) {
      let t;
      let n = e;
      if (!tR(n)) {
        n = u(n);
      }
      if ((t = s.options_) != null && t.bound) {
        n = n.bind(this);
        n.isMobxAction = true;
      }
      return n;
    };
  }
  if (t_kind == "method") {
    if (!tR(e)) {
      e = u(e);
    }
    if ((n = this.options_) != null && n.bound) {
      t_addInitializer(function () {
        const e = this[t_name].bind(this);
        e.isMobxAction = true;
        this[t_name] = e;
      });
    }
    return e;
  }
  r(
    "Cannot apply '" +
      s.annotationType_ +
      "' to '" +
      String(t_name) +
      "' (kind: " +
      t_kind +
      "):\n'" +
      s.annotationType_ +
      "' can only be used on properties with a function value.",
  );
}
function eh(e, t, n, r, i = tu.safeDescriptors) {
  t.annotationType_;
  r.value;
  let o;
  let a;
  let s;
  let u;
  let c;
  let l;
  let f;
  let h;
  let r_value = r.value;
  if ((o = t.options_) != null && o.bound) {
    r_value = r_value.bind((h = e.proxy_) != null ? h : e.target_);
  }
  return {
    value: eF(
      (a = (s = t.options_) == null ? undefined : s.name) != null
        ? a
        : n.toString(),
      r_value,
      (u = (c = t.options_) == null ? undefined : c.autoAction) != null && u,
      (l = t.options_) != null && l.bound
        ? (f = e.proxy_) != null
          ? f
          : e.target_
        : undefined,
    ),
    configurable: !i || e.isPlainObject_,
    enumerable: false,
    writable: !i,
  };
}
function ed(e, t) {
  return {
    annotationType_: e,
    options_: t,
    make_: ev,
    extend_: e_,
    decorate_20223_: ep,
  };
}
function ev(e, t, n, r) {
  if (r === e.target_) {
    return 2 * (this.extend_(e, t, n, false) !== null);
  }
  if (
    (i = this.options_) != null &&
    i.bound &&
    (!K(e.target_, t) || !tF(e.target_[t])) &&
    this.extend_(e, t, n, false) === null
  ) {
    return 0;
  }
  if (tF(n.value)) {
    return 1;
  }
  var i;
  const o = eb(e, this, t, n, false, false);
  Object.defineProperty(r, t, o);
  return 2;
}
function e_(e, t, n, r) {
  let i;
  const o = eb(
    e,
    this,
    t,
    n,
    (i = this.options_) == null ? undefined : i.bound,
  );
  return e.defineProperty_(t, o, r);
}
function ep(e, t) {
  let n;
  const t_name = t.name;
  const t_addInitializer = t.addInitializer;
  if (!tF(e)) {
    e = tW(e);
  }
  if ((n = this.options_) != null && n.bound) {
    t_addInitializer(function () {
      const e = this[t_name].bind(this);
      e.isMobXFlow = true;
      this[t_name] = e;
    });
  }
  return e;
}
function eb(e, t, n, r, i, o = tu.safeDescriptors) {
  t.annotationType_;
  r.value;
  let a;
  let r_value = r.value;
  if (!tF(r_value)) {
    r_value = tW(r_value);
  }
  if (i) {
    r_value = r_value.bind((a = e.proxy_) != null ? a : e.target_);
    r_value.isMobXFlow = true;
  }
  return {
    value: r_value,
    configurable: !o || e.isPlainObject_,
    enumerable: false,
    writable: !o,
  };
}
function eg(e, t) {
  return {
    annotationType_: e,
    options_: t,
    make_: ey,
    extend_: em,
    decorate_20223_: eO,
  };
}
function ey(e, t, n) {
  return +(this.extend_(e, t, n, false) !== null);
}
function em(e, t, n, r) {
  let i;
  let o;
  i = this;
  o = n;
  i.annotationType_;
  o.get;
  return e.defineComputedProperty_(
    t,
    {
      ...this.options_,
      get: n.get,
      set: n.set,
    },
    r,
  );
}
function eO(get, t) {
  const n = this;
  const t_name = t.name;
  t.addInitializer(function () {
    const t = nj(this)[BQ];
    const i = {
      ...n.options_,
      get,
      context: this,
    };
    if (!i.name) {
      i.name = "ObservableObject." + t_name.toString();
    }
    t.values_.set(t_name, new e1(i));
  });
  return function () {
    return this[BQ].getObservablePropValue_(t_name);
  };
}
function ew(e, t) {
  return {
    annotationType_: e,
    options_: t,
    make_: eS,
    extend_: eA,
    decorate_20223_: ej,
  };
}
function eS(e, t, n) {
  return +(this.extend_(e, t, n, false) !== null);
}
function eA(e, t, n, r) {
  let i;
  let o;
  let a;
  a = this;
  a.annotationType_;
  return e.defineObservableProperty_(
    t,
    n.value,
    (i = (o = this.options_) == null ? undefined : o.enhancer) != null ? i : ea,
    r,
  );
}
function ej(e, t) {
  const n = this;
  const t_kind = t.kind;
  const t_name = t.name;
  const o = new WeakSet();
  function a(e, t) {
    let r;
    let a;
    const s = nj(e)[BQ];
    const u = new eZ(
      t,
      (r = (a = n.options_) == null ? undefined : a.enhancer) != null ? r : ea,
      "ObservableObject." + t_name.toString(),
      false,
    );
    s.values_.set(t_name, u);
    o.add(e);
  }
  if (t_kind == "accessor") {
    return {
      get: function () {
        if (!o.has(this)) {
          a(this, e.get.call(this));
        }
        return this[BQ].getObservablePropValue_(t_name);
      },
      set: function (e) {
        if (!o.has(this)) {
          a(this, e);
        }
        return this[BQ].setObservablePropValue_(t_name, e);
      },
      init: function (e) {
        if (!o.has(this)) {
          a(this, e);
        }
        return e;
      },
    };
  }
}
const ek = ex();
function ex(e) {
  return {
    annotationType_: "true",
    options_: e,
    make_: eP,
    extend_: eE,
    decorate_20223_: eT,
  };
}
function eP(e, t, n, r) {
  if (n.get) {
    return EW.make_(e, t, n, r);
  }
  if (n.set) {
    var i;
    var o;
    var a;
    var s;
    var u;
    const set = eF(t.toString(), n.set);
    if (r === e.target_) {
      return (
        2 *
        (e.defineProperty_(t, {
          configurable: !tu.safeDescriptors || e.isPlainObject_,
          set,
        }) !==
          null)
      );
    }
    Object.defineProperty(r, t, {
      configurable: true,
      set,
    });
    return 2;
  }
  if (r !== e.target_ && typeof n.value === "function") {
    if (M(n.value)) {
      return ((s = this.options_) != null && s.autoBind ? tW.bound : tW).make_(
        e,
        t,
        n,
        r,
      );
    }
    return ((a = this.options_) != null && a.autoBind ? tE.bound : tE).make_(
      e,
      t,
      n,
      r,
    );
  }
  const l =
    ((i = this.options_) == null ? undefined : i.deep) === false ? sH.ref : sH;
  if (
    typeof n.value === "function" &&
    (o = this.options_) != null &&
    o.autoBind
  ) {
    n.value = n.value.bind((u = e.proxy_) != null ? u : e.target_);
  }
  return l.make_(e, t, n, r);
}
function eE(e, t, n, r) {
  let i;
  let o;
  let a;
  if (n.get) {
    return EW.extend_(e, t, n, r);
  }
  if (n.set) {
    return e.defineProperty_(
      t,
      {
        configurable: !tu.safeDescriptors || e.isPlainObject_,
        set: eF(t.toString(), n.set),
      },
      r,
    );
  }
  if (
    typeof n.value === "function" &&
    (i = this.options_) != null &&
    i.autoBind
  ) {
    n.value = n.value.bind((a = e.proxy_) != null ? a : e.target_);
  }
  return (
    ((o = this.options_) == null ? undefined : o.deep) === false ? sH.ref : sH
  ).extend_(e, t, n, r);
}
function eT(e, t) {
  r("'" + this.annotationType_ + "' cannot be used as a decorator");
}
const eR = {
  deep: true,
  name: undefined,
  defaultDecorator: undefined,
  proxy: true,
};
Object.freeze(eR);
const eM = ew("observable");
const eV = ew("observable.ref", {
  enhancer,
});
const eC = ew("observable.shallow", {
  enhancer: function (e, t, name) {
    if (e == null || nP(e) || nh(e) || np(e) || nm(e)) {
      return e;
    }
    if (Array.isArray(e)) {
      return sH.array(e, {
        name,
        deep: false,
      });
    }
    if (R(e)) {
      return sH.object(e, undefined, {
        name,
        deep: false,
      });
    }
    if (N(e)) {
      return sH.map(e, {
        name,
        deep: false,
      });
    }
    if (B(e)) {
      return sH.set(e, {
        name,
        deep: false,
      });
    }
  },
});
const eD = ew("observable.struct", {
  enhancer: function (e, t) {
    if (nG(e, t)) {
      return t;
    }
    return e;
  },
});
const deep = Q(eM);
function eB(e) {
  let t;
  let n;
  let r;
  if (e.deep === true) {
    return ea;
  }
  if (e.deep === false) {
    return enhancer;
  }
  if (
    (t = e.defaultDecorator) &&
    (n = (r = t.options_) == null ? undefined : r.enhancer) != null
  ) {
    return n;
  }
  return ea;
}
function eL(e, t, n) {
  if (ee(t)) {
    return eM.decorate_20223_(e, t);
  }
  if (E(t)) {
    return void Z(e, t, eM);
  }
  if (tX(e)) {
    return e;
  }
  if (R(e)) {
    return sH.object(e, t, n);
  }
  if (Array.isArray(e)) {
    return sH.array(e, t);
  }
  if (N(e)) {
    return sH.map(e, t);
  }
  if (B(e)) {
    return sH.set(e, t);
  }
  if (typeof e === "object" && e !== null) {
    return e;
  }
  return sH.box(e, t);
}
Object.assign(eL, deep);
export var sH = Object.assign(eL, {
  box: function (e, t) {
    const n = t || eR;
    return new eZ(e, eB(n), n.name, true, n.equals);
  },
  array: function (e, t) {
    const n = t || eR;
    return (
      tu.useProxies === false || n.proxy === false
        ? function (e, t, n) {
            return new nD(e, t, n);
          }
        : function (e, t, n = "ObservableArray", r = false) {
            j();
            return nK(() => {
              const i = new no(n, t, r, false);
              C(i.values_, BQ, i);
              const o = new Proxy(i.values_, ni);
              i.proxy_ = o;
              if (e && e.length) {
                i.spliceWithArray_(0, 0, e);
              }
              return o;
            });
          }
    )(e, eB(n), n.name);
  },
  map: function (e, t) {
    const n = t || eR;
    return new n_(e, eB(n), n.name);
  },
  set: function (e, t) {
    const n = t || eR;
    return new ny(e, eB(n), n.name);
  },
  object: function (e, t, n) {
    return nK(() => {
      let r;
      let i;
      let o;
      let a;
      return tU(
        tu.useProxies === false || (n == null ? undefined : n.proxy) === false
          ? nj({}, n)
          : ((r = {}),
            (i = n),
            j(),
            (a = (o = (r = nj(r, i))[BQ]).proxy_) != null
              ? a
              : (o.proxy_ = new Proxy(r, t2))),
        e,
        t,
      );
    });
  },
  ref: Q(eV),
  shallow: Q(eC),
  deep,
  struct: Q(eD),
});
const eU = "computed";
const eK = eg(eU);
const eq = eg("computed.struct", {
  equals: m3.structural,
});
export var EW = function (e, t) {
  if (ee(t)) {
    return eK.decorate_20223_(e, t);
  }
  if (E(t)) {
    return Z(e, t, eK);
  }
  if (R(e)) {
    return Q(eg(eU, e));
  }
  const n = R(t) ? t : {};
  n.get = e;
  if (!n.name) {
    n.name = e.name || "";
  }
  return new e1(n);
};
Object.assign(EW, eK);
EW.struct = Q(eq);
var parentActionId_ = 0;
var eH = 1;
var eW =
  (l =
    (f = Object.getOwnPropertyDescriptor(function () {}, "name")) == null
      ? undefined
      : f.configurable) != null && l;
var e$ = {
  value: "action",
  configurable: true,
  writable: false,
  enumerable: false,
};
function eF(e, t, n, r) {
  function i() {
    return eX(e, n, t, r || this, arguments);
  }
  if (n === undefined) {
    n = false;
  }
  i.isMobxAction = true;
  i.toString = function () {
    return t.toString();
  };
  if (eW) {
    e$.value = e;
    Object.defineProperty(i, "name", e$);
  }
  return i;
}
function eX(e, t, n, i, o) {
  let a;
  let prevDerivation_;
  let runAsAction_;
  let prevAllowStateChanges_;
  let l;
  let f;
  a = t;
  prevDerivation_ = tu.trackingDerivation;
  runAsAction_ = !a || !prevDerivation_;
  tf();
  prevAllowStateChanges_ = tu.allowStateChanges;
  if (runAsAction_) {
    te();
    prevAllowStateChanges_ = eJ(true);
  }
  parentActionId_ = (l = {
    runAsAction_,
    prevDerivation_,
    prevAllowStateChanges_,
    prevAllowStateReads_: f2(true),
    notifySpy_: false,
    startTime_: 0,
    actionId_: eH++,
    parentActionId_,
  }).actionId_;
  const h = l;
  try {
    return n.apply(i, o);
  } catch (error) {
    h.error_ = error;
    throw error;
  } finally {
    if (parentActionId_ !== (f = h).actionId_) {
      r(30);
    }
    parentActionId_ = f.parentActionId_;
    if (f.error_ !== undefined) {
      tu.suppressReactionErrors = true;
    }
    eQ(f.prevAllowStateChanges_);
    w6(f.prevAllowStateReads_);
    th();
    if (f.runAsAction_) {
      tt(f.prevDerivation_);
    }
    tu.suppressReactionErrors = false;
  }
}
export function vx(e, t) {
  const n = eJ(e);
  try {
    return t();
  } finally {
    eQ(n);
  }
}
function eJ(e) {
  const tu_allowStateChanges = tu.allowStateChanges;
  tu.allowStateChanges = e;
  return tu_allowStateChanges;
}
function eQ(e) {
  tu.allowStateChanges = e;
}
class eZ extends en {
  constructor(t, n, r = "ObservableValue", i = true, o) {
    if (o === undefined) {
      o = m3.default;
    }
    super(r);
    this.enhancer = undefined;
    this.name_ = undefined;
    this.equals = undefined;
    this.hasUnreportedChange_ = false;
    this.interceptors_ = undefined;
    this.changeListeners_ = undefined;
    this.value_ = undefined;
    this.dehancer = undefined;
    this.enhancer = n;
    this.name_ = r;
    this.equals = o;
    this.value_ = n(t, undefined, r);
  }
  dehanceValue(e) {
    if (this.dehancer !== undefined) {
      return this.dehancer(e);
    }
    return e;
  }
  set(e) {
    this.value_;
    if ((e = this.prepareNewValue_(e)) !== tu.UNCHANGED) {
      this.setNewValue_(e);
    }
  }
  prepareNewValue_(e) {
    e8(this);
    if (t3(this)) {
      const t = t6(this, {
        object: this,
        type: nr,
        newValue: e,
      });
      if (!t) {
        return tu.UNCHANGED;
      }
      e = t.newValue;
    }
    e = this.enhancer(e, this.value_, this.name_);
    if (this.equals(this.value_, e)) {
      return tu.UNCHANGED;
    }
    return e;
  }
  setNewValue_(e) {
    const value_ = this.value_;
    this.value_ = e;
    this.reportChanged();
    if (t8(this)) {
      t7(this, {
        type: nr,
        object: this,
        newValue: e,
        oldValue: value_,
      });
    }
  }
  get() {
    this.reportObserved();
    return this.dehanceValue(this.value_);
  }
  intercept_(e) {
    return t4(this, e);
  }
  observe_(e, t) {
    if (t) {
      e({
        observableKind: "value",
        debugObjectName: this.name_,
        object: this,
        type: nr,
        newValue: this.value_,
        oldValue: undefined,
      });
    }
    return t5(this, e);
  }
  raw() {
    return this.value_;
  }
  toJSON() {
    return this.get();
  }
  toString() {
    return this.name_ + "[" + this.value_ + "]";
  }
  valueOf() {
    return U(this.get());
  }
  [Symbol.toPrimitive]() {
    return this.valueOf();
  }
}
const e0 = D("ObservableValue", eZ);
var e1 = (() => {
  function e(e) {
    this.dependenciesState_ = h.NOT_TRACKING_;
    this.observing_ = [];
    this.newObserving_ = null;
    this.observers_ = new Set();
    this.runId_ = 0;
    this.lastAccessedBy_ = 0;
    this.lowestObserverState_ = h.UP_TO_DATE_;
    this.unboundDepsCount_ = 0;
    this.value_ = new e3(null);
    this.name_ = undefined;
    this.triggeredBy_ = undefined;
    this.flags_ = 0;
    this.derivation = undefined;
    this.setter_ = undefined;
    this.isTracing_ = d.NONE;
    this.scope_ = undefined;
    this.equals_ = undefined;
    this.requiresReaction_ = undefined;
    this.keepAlive_ = undefined;
    this.onBOL = undefined;
    this.onBUOL = undefined;
    if (!e.get) {
      r(31);
    }
    this.derivation = e.get;
    this.name_ = e.name || "ComputedValue";
    if (e.set) {
      this.setter_ = eF("ComputedValue-setter", e.set);
    }
    this.equals_ =
      e.equals ||
      (e.compareStructural || e.struct ? m3.structural : m3.default);
    this.scope_ = e.context;
    this.requiresReaction_ = e.requiresReaction;
    this.keepAlive_ = !!e.keepAlive;
  }
  const e_prototype = e.prototype;
  e_prototype.onBecomeStale_ = function () {
    let e;
    e = this;
    if (e.lowestObserverState_ === h.UP_TO_DATE_) {
      e.lowestObserverState_ = h.POSSIBLY_STALE_;
      e.observers_.forEach((e) => {
        if (e.dependenciesState_ === h.UP_TO_DATE_) {
          e.dependenciesState_ = h.POSSIBLY_STALE_;
          e.onBecomeStale_();
        }
      });
    }
  };
  e_prototype.onBO = function () {
    if (this.onBOL) {
      this.onBOL.forEach((e) => e());
    }
  };
  e_prototype.onBUO = function () {
    if (this.onBUOL) {
      this.onBUOL.forEach((e) => e());
    }
  };
  e_prototype.get = function () {
    if (this.isComputing) {
      r(32, this.name_, this.derivation);
    }
    if (tu.inBatch !== 0 || this.observers_.size !== 0 || this.keepAlive_) {
      td(this);
      if (e6(this)) {
        let e;
        const t = tu.trackingContext;
        if (this.keepAlive_ && !t) {
          tu.trackingContext = this;
        }
        if (this.trackAndCompute()) {
          e = this;
          if (e.lowestObserverState_ !== h.STALE_) {
            e.lowestObserverState_ = h.STALE_;
            e.observers_.forEach((t) => {
              if (t.dependenciesState_ === h.POSSIBLY_STALE_) {
                t.dependenciesState_ = h.STALE_;
              } else if (t.dependenciesState_ === h.UP_TO_DATE_) {
                e.lowestObserverState_ = h.UP_TO_DATE_;
              }
            });
          }
        }
        tu.trackingContext = t;
      }
    } else {
      if (e6(this)) {
        this.warnAboutUntrackedRead_();
        tf();
        this.value_ = this.computeValue_(false);
        th();
      }
    }
    const value_ = this.value_;
    if (e4(value_)) {
      throw value_.cause;
    }
    return value_;
  };
  e_prototype.set = function (e) {
    if (this.setter_) {
      if (this.isRunningSetter) {
        r(33, this.name_);
      }
      this.isRunningSetter = true;
      try {
        this.setter_.call(this.scope_, e);
      } finally {
        this.isRunningSetter = false;
      }
    } else {
      r(34, this.name_);
    }
  };
  e_prototype.trackAndCompute = function () {
    const value_ = this.value_;
    const t = this.dependenciesState_ === h.NOT_TRACKING_;
    const n = this.computeValue_(true);
    const r = t || e4(value_) || e4(n) || !this.equals_(value_, n);
    if (r) {
      this.value_ = n;
    }
    return r;
  };
  e_prototype.computeValue_ = function (e) {
    this.isComputing = true;
    let t;
    const n = eJ(false);
    if (e) {
      t = e5(this, this.derivation, this.scope_);
    } else if (tu.disableErrorBoundaries === true) {
      t = this.derivation.call(this.scope_);
    } else {
      try {
        t = this.derivation.call(this.scope_);
      } catch (error) {
        t = new e3(error);
      }
    }
    eQ(n);
    this.isComputing = false;
    return t;
  };
  e_prototype.suspend_ = function () {
    if (!this.keepAlive_) {
      e7(this);
      this.value_ = undefined;
    }
  };
  e_prototype.observe_ = function (e, t) {
    const object = this;
    let r = true;
    let i;
    return fm(() => {
      const o = object.get();
      if (!r || t) {
        const a = te();
        e({
          observableKind: "computed",
          debugObjectName: object.name_,
          type: nr,
          object,
          newValue: o,
          oldValue: i,
        });
        tt(a);
      }
      r = false;
      i = o;
    });
  };
  e_prototype.warnAboutUntrackedRead_ = function () {};
  e_prototype.toString = function () {
    return this.name_ + "[" + this.derivation.toString() + "]";
  };
  e_prototype.valueOf = function () {
    return U(this.get());
  };
  e_prototype[Symbol.toPrimitive] = function () {
    return this.valueOf();
  };
  return W(e, [
    {
      key: "isComputing",
      get: function () {
        return !!(this.flags_ & e.isComputingMask_);
      },
      set: function (t) {
        this.flags_ = G(this.flags_, e.isComputingMask_, t);
      },
    },
    {
      key: "isRunningSetter",
      get: function () {
        return !!(this.flags_ & e.isRunningSetterMask_);
      },
      set: function (t) {
        this.flags_ = G(this.flags_, e.isRunningSetterMask_, t);
      },
    },
    {
      key: "isBeingObserved",
      get: function () {
        return !!(this.flags_ & e.isBeingObservedMask_);
      },
      set: function (t) {
        this.flags_ = G(this.flags_, e.isBeingObservedMask_, t);
      },
    },
    {
      key: "isPendingUnobservation",
      get: function () {
        return !!(this.flags_ & e.isPendingUnobservationMask_);
      },
      set: function (t) {
        this.flags_ = G(this.flags_, e.isPendingUnobservationMask_, t);
      },
    },
    {
      key: "diffValue",
      get: function () {
        return +!!(this.flags_ & e.diffValueMask_);
      },
      set: function (t) {
        this.flags_ = G(this.flags_, e.diffValueMask_, t === 1);
      },
    },
  ]);
})();
e1.isComputingMask_ = 1;
e1.isRunningSetterMask_ = 2;
e1.isBeingObservedMask_ = 4;
e1.isPendingUnobservationMask_ = 8;
e1.diffValueMask_ = 16;
var e2 = D("ComputedValue", e1);
i = h || (h = {});
i[(i.NOT_TRACKING_ = -1)] = "NOT_TRACKING_";
i[(i.UP_TO_DATE_ = 0)] = "UP_TO_DATE_";
i[(i.POSSIBLY_STALE_ = 1)] = "POSSIBLY_STALE_";
i[(i.STALE_ = 2)] = "STALE_";
o = d || (d = {});
o[(o.NONE = 0)] = "NONE";
o[(o.LOG = 1)] = "LOG";
o[(o.BREAK = 2)] = "BREAK";
var e3 = function (e) {
  this.cause = undefined;
  this.cause = e;
};
function e4(e) {
  return e instanceof e3;
}
function e6(e) {
  switch (e.dependenciesState_) {
    case h.UP_TO_DATE_:
      return false;
    case h.NOT_TRACKING_:
    case h.STALE_:
      return true;
    case h.POSSIBLY_STALE_:
      const t = f2(true);
      const n = te();
      const r = e.observing_;
      for (let i = r.length, o = 0; o < i; o++) {
        const a = r[o];
        if (e2(a)) {
          if (tu.disableErrorBoundaries) {
            a.get();
          } else {
            try {
              a.get();
            } catch (e) {
              tt(n);
              w6(t);
              return true;
            }
          }
          if (e.dependenciesState_ === h.STALE_) {
            tt(n);
            w6(t);
            return true;
          }
        }
      }
      ti(e);
      tt(n);
      w6(t);
      return false;
  }
}
function e8(e) {}
function e5(e, t, n) {
  let r;
  const i = f2(true);
  ti(e);
  e.newObserving_ = Array(e.runId_ === 0 ? 100 : e.observing_.length);
  e.unboundDepsCount_ = 0;
  e.runId_ = ++tu.runId;
  const tu_trackingDerivation = tu.trackingDerivation;
  tu.trackingDerivation = e;
  tu.inBatch++;
  if (tu.disableErrorBoundaries === true) {
    r = t.call(n);
  } else {
    try {
      r = t.call(n);
    } catch (error) {
      r = new e3(error);
    }
  }
  tu.inBatch--;
  tu.trackingDerivation = tu_trackingDerivation;
  ((e) => {
    const e_observing_ = e.observing_;
    const n = (e.observing_ = e.newObserving_);
    let h_UP_TO_DATE_ = h.UP_TO_DATE_;
    let i = 0;
    for (var o = e.unboundDepsCount_, a = 0; a < o; a++) {
      const s = n[a];
      if (s.diffValue === 0) {
        s.diffValue = 1;
        if (i !== a) {
          n[i] = s;
        }
        i++;
      }
      if (s.dependenciesState_ > h_UP_TO_DATE_) {
        h_UP_TO_DATE_ = s.dependenciesState_;
      }
    }
    n.length = i;
    e.newObserving_ = null;
    for (o = e_observing_.length; o--;) {
      const u = e_observing_[o];
      if (u.diffValue === 0) {
        tc(u, e);
      }
      u.diffValue = 0;
    }
    while (i--) {
      let c;
      let l;
      const f = n[i];
      if (f.diffValue === 1) {
        f.diffValue = 0;
        c = f;
        l = e;
        c.observers_.add(l);
        if (c.lowestObserverState_ > l.dependenciesState_) {
          c.lowestObserverState_ = l.dependenciesState_;
        }
      }
    }
    if (h_UP_TO_DATE_ !== h.UP_TO_DATE_) {
      e.dependenciesState_ = h_UP_TO_DATE_;
      e.onBecomeStale_();
    }
  })(e);
  w6(i);
  return r;
}
function e7(e) {
  const e_observing_ = e.observing_;
  e.observing_ = [];
  for (let n = e_observing_.length; n--;) {
    tc(e_observing_[n], e);
  }
  e.dependenciesState_ = h.NOT_TRACKING_;
}
export function O8(e) {
  const t = te();
  try {
    return e();
  } finally {
    tt(t);
  }
}
function te() {
  const tu_trackingDerivation = tu.trackingDerivation;
  tu.trackingDerivation = null;
  return tu_trackingDerivation;
}
function tt(e) {
  tu.trackingDerivation = e;
}
export function f2(e) {
  const tu_allowStateReads = tu.allowStateReads;
  tu.allowStateReads = e;
  return tu_allowStateReads;
}
export function w6(e) {
  tu.allowStateReads = e;
}
function ti(e) {
  if (e.dependenciesState_ !== h.UP_TO_DATE_) {
    e.dependenciesState_ = h.UP_TO_DATE_;
    const t = e.observing_;
    for (let n = t.length; n--;) {
      t[n].lowestObserverState_ = h.UP_TO_DATE_;
    }
  }
}
const to = function () {
  this.version = 6;
  this.UNCHANGED = {};
  this.trackingDerivation = null;
  this.trackingContext = null;
  this.runId = 0;
  this.mobxGuid = 0;
  this.inBatch = 0;
  this.pendingUnobservations = [];
  this.pendingReactions = [];
  this.isRunningReactions = false;
  this.allowStateChanges = false;
  this.allowStateReads = true;
  this.enforceActions = true;
  this.spyListeners = [];
  this.globalReactionErrorHandlers = [];
  this.computedRequiresReaction = false;
  this.reactionRequiresObservable = false;
  this.observableRequiresReaction = false;
  this.disableErrorBoundaries = false;
  this.suppressReactionErrors = false;
  this.useProxies = true;
  this.verifyProxies = false;
  this.safeDescriptors = true;
};
let ta = true;
let ts = false;
var tu = ((a = p()).__mobxInstanceCount > 0 && !a.__mobxGlobals && (ta = false),
a.__mobxGlobals && a.__mobxGlobals.version !== new to().version && (ta = false),
ta)
  ? a.__mobxGlobals
    ? ((a.__mobxInstanceCount += 1),
      a.__mobxGlobals.UNCHANGED || (a.__mobxGlobals.UNCHANGED = {}),
      a.__mobxGlobals)
    : ((a.__mobxInstanceCount = 1), (a.__mobxGlobals = new to()))
  : (setTimeout(() => {
      if (!ts) {
        r(35);
      }
    }, 1),
    new to());
function tc(e, t) {
  e.observers_.delete(t);
  if (e.observers_.size === 0) {
    tl(e);
  }
}
function tl(e) {
  if (e.isPendingUnobservation === false) {
    e.isPendingUnobservation = true;
    tu.pendingUnobservations.push(e);
  }
}
function tf() {
  tu.inBatch++;
}
function th() {
  if (--tu.inBatch == 0) {
    tb();
    for (let e = tu.pendingUnobservations, t = 0; t < e.length; t++) {
      const n = e[t];
      n.isPendingUnobservation = false;
      if (n.observers_.size === 0) {
        if (n.isBeingObserved) {
          n.isBeingObserved = false;
          n.onBUO();
        }
        if (n instanceof e1) {
          n.suspend_();
        }
      }
    }
    tu.pendingUnobservations = [];
  }
}
function td(e) {
  const tu_trackingDerivation = tu.trackingDerivation;
  if (tu_trackingDerivation !== null) {
    if (tu_trackingDerivation.runId_ !== e.lastAccessedBy_) {
      e.lastAccessedBy_ = tu_trackingDerivation.runId_;
      tu_trackingDerivation.newObserving_[
        tu_trackingDerivation.unboundDepsCount_++
      ] = e;
      if (!e.isBeingObserved && tu.trackingContext) {
        e.isBeingObserved = true;
        e.onBO();
      }
    }
    return e.isBeingObserved;
  }
  if (e.observers_.size === 0 && tu.inBatch > 0) {
    tl(e);
  }
  return false;
}
function tv(e) {
  if (e.lowestObserverState_ !== h.STALE_) {
    e.lowestObserverState_ = h.STALE_;
    e.observers_.forEach((e) => {
      if (e.dependenciesState_ === h.UP_TO_DATE_) {
        e.onBecomeStale_();
      }
      e.dependenciesState_ = h.STALE_;
    });
  }
}
export var qT = (() => {
  function e(e = "Reaction", t, n, r) {
    this.name_ = undefined;
    this.onInvalidate_ = undefined;
    this.errorHandler_ = undefined;
    this.requiresObservable_ = undefined;
    this.observing_ = [];
    this.newObserving_ = [];
    this.dependenciesState_ = h.NOT_TRACKING_;
    this.runId_ = 0;
    this.unboundDepsCount_ = 0;
    this.flags_ = 0;
    this.isTracing_ = d.NONE;
    this.name_ = e;
    this.onInvalidate_ = t;
    this.errorHandler_ = n;
    this.requiresObservable_ = r;
  }
  const e_prototype = e.prototype;
  e_prototype.onBecomeStale_ = function () {
    this.schedule_();
  };
  e_prototype.schedule_ = function () {
    if (!this.isScheduled) {
      this.isScheduled = true;
      tu.pendingReactions.push(this);
      tb();
    }
  };
  e_prototype.runReaction_ = function () {
    if (!this.isDisposed) {
      tf();
      this.isScheduled = false;
      const e = tu.trackingContext;
      tu.trackingContext = this;
      if (e6(this)) {
        this.isTrackPending = true;
        try {
          this.onInvalidate_();
        } catch (error) {
          this.reportExceptionInDerivation_(error);
        }
      }
      tu.trackingContext = e;
      th();
    }
  };
  e_prototype.track = function (e) {
    if (!this.isDisposed) {
      tf();
      this.isRunning = true;
      const t = tu.trackingContext;
      tu.trackingContext = this;
      const n = e5(this, e, undefined);
      tu.trackingContext = t;
      this.isRunning = false;
      this.isTrackPending = false;
      if (this.isDisposed) {
        e7(this);
      }
      if (e4(n)) {
        this.reportExceptionInDerivation_(n.cause);
      }
      th();
    }
  };
  e_prototype.reportExceptionInDerivation_ = function (e) {
    const t = this;
    if (this.errorHandler_) {
      return void this.errorHandler_(e, this);
    }
    if (tu.disableErrorBoundaries) {
      throw e;
    }
    if (!tu.suppressReactionErrors) {
      console.error("[mobx] uncaught error in '" + this + "'", e);
    }
    tu.globalReactionErrorHandlers.forEach((n) => n(e, t));
  };
  e_prototype.dispose = function () {
    if (!this.isDisposed) {
      this.isDisposed = true;
      if (!this.isRunning) {
        tf();
        e7(this);
        th();
      }
    }
  };
  e_prototype.getDisposer_ = function (e) {
    const t = this;
    const n = function n() {
      t.dispose();
      if (!(e == null || e.removeEventListener == null)) {
        e.removeEventListener("abort", n);
      }
    };
    if (!(e == null || e.addEventListener == null)) {
      e.addEventListener("abort", n);
    }
    n[BQ] = this;
    return n;
  };
  e_prototype.toString = function () {
    return "Reaction[" + this.name_ + "]";
  };
  e_prototype.trace = function (e = false) {};
  return W(e, [
    {
      key: "isDisposed",
      get: function () {
        return !!(this.flags_ & e.isDisposedMask_);
      },
      set: function (t) {
        this.flags_ = G(this.flags_, e.isDisposedMask_, t);
      },
    },
    {
      key: "isScheduled",
      get: function () {
        return !!(this.flags_ & e.isScheduledMask_);
      },
      set: function (t) {
        this.flags_ = G(this.flags_, e.isScheduledMask_, t);
      },
    },
    {
      key: "isTrackPending",
      get: function () {
        return !!(this.flags_ & e.isTrackPendingMask_);
      },
      set: function (t) {
        this.flags_ = G(this.flags_, e.isTrackPendingMask_, t);
      },
    },
    {
      key: "isRunning",
      get: function () {
        return !!(this.flags_ & e.isRunningMask_);
      },
      set: function (t) {
        this.flags_ = G(this.flags_, e.isRunningMask_, t);
      },
    },
    {
      key: "diffValue",
      get: function () {
        return +!!(this.flags_ & e.diffValueMask_);
      },
      set: function (t) {
        this.flags_ = G(this.flags_, e.diffValueMask_, t === 1);
      },
    },
  ]);
})();
qT.isDisposedMask_ = 1;
qT.isScheduledMask_ = 2;
qT.isTrackPendingMask_ = 4;
qT.isRunningMask_ = 8;
qT.diffValueMask_ = 16;
var tp = function (e) {
  return e();
};
function tb() {
  if (!(tu.inBatch > 0 || tu.isRunningReactions)) {
    tp(tg);
  }
}
function tg() {
  tu.isRunningReactions = true;
  for (let e = tu.pendingReactions, t = 0; e.length > 0;) {
    if (++t == 100) {
      console.error("[mobx] cycle in reaction: " + e[0]);
      e.splice(0);
    }
    const n = e.splice(0);
    for (let r = 0, i = n.length; r < i; r++) {
      n[r].runReaction_();
    }
  }
  tu.isRunningReactions = false;
}
var ty = D("Reaction", qT);
const tm = "action";
const tO = "autoAction";
const tw = "<unnamed action>";
const tS = eu(tm);
const tA = eu("action.bound", {
  bound: true,
});
const tj = eu(tO, {
  autoAction: true,
});
const tk = eu("autoAction.bound", {
  autoAction: true,
  bound: true,
});
function tx(autoAction) {
  return function (t, n) {
    if (P(t)) {
      return eF(t.name || tw, t, autoAction);
    }
    if (P(n)) {
      return eF(t, n, autoAction);
    }
    if (ee(n)) {
      return (autoAction ? tj : tS).decorate_20223_(t, n);
    }
    if (E(n)) {
      return Z(t, n, autoAction ? tj : tS);
    }
    if (E(t)) {
      return Q(
        eu(autoAction ? tO : tm, {
          name: t,
          autoAction,
        }),
      );
    }
  };
}
export var XI = tx(false);
Object.assign(XI, tS);
var tE = tx(true);
export function h5(e) {
  return eX(e.name || tw, false, e, this, undefined);
}
function tR(e) {
  return P(e) && e.isMobxAction === true;
}
export function fm(e, t = w) {
  let n;
  let r;
  let i;
  let o;
  let a;
  const s = (n = (r = t) == null ? undefined : r.name) != null ? n : "Autorun";
  if (t.scheduler || t.delay) {
    const u = tC(t);
    let c = false;
    a = new qT(
      s,
      function () {
        if (!c) {
          c = true;
          u(function () {
            c = false;
            if (!a.isDisposed) {
              a.track(l);
            }
          });
        }
      },
      t.onError,
      t.requiresObservable,
    );
  } else {
    a = new qT(
      s,
      function () {
        this.track(l);
      },
      t.onError,
      t.requiresObservable,
    );
  }
  function l() {
    e(a);
  }
  if (!((i = t) != null && (i = i.signal) != null && i.aborted)) {
    a.schedule_();
  }
  return a.getDisposer_((o = t) == null ? undefined : o.signal);
}
Object.assign(tE, tj);
XI.bound = Q(tA);
tE.bound = Q(tk);
var tV = function (e) {
  return e();
};
function tC(e) {
  if (e.scheduler) {
    return e.scheduler;
  }
  if (e.delay) {
    return function (t) {
      return setTimeout(t, e.delay);
    };
  }
  return tV;
}
export function mJ(e, t, n = w) {
  let r;
  let i;
  let o;
  let a;
  let s;
  let u;
  const c = (o = n.name) != null ? o : "Reaction";
  const l = XI(
    c,
    n.onError
      ? ((r = n.onError),
        (i = t),
        function () {
          try {
            return i.apply(this, arguments);
          } catch (error) {
            r.call(this, error);
          }
        })
      : t,
  );
  const f = !n.scheduler && !n.delay;
  const h = tC(n);
  let d = true;
  let v = false;
  const _ = n.compareStructural ? m3.structural : n.equals || m3.default;
  var p = new qT(
    c,
    function () {
      if (d || f) {
        b();
      } else if (!v) {
        v = true;
        h(b);
      }
    },
    n.onError,
    n.requiresObservable,
  );
  function b() {
    v = false;
    if (!p.isDisposed) {
      let t = false;
      const r = u;
      p.track(function () {
        const n = vx(false, () => e(p));
        t = d || !_(u, n);
        u = n;
      });
      if (d && n.fireImmediately) {
        l(u, r, p);
      } else if (!d && t) {
        l(u, r, p);
      }
      d = false;
    }
  }
  if (!((a = n) != null && (a = a.signal) != null && a.aborted)) {
    p.schedule_();
  }
  return p.getDisposer_((s = n) == null ? undefined : s.signal);
}
function tN(e, t, n) {
  return tB("onBUO", e, t, n);
}
function tB(e, t, n, r) {
  const i = typeof r === "function" ? nL(t, n) : nL(t);
  const o = P(r) ? r : n;
  const a = e + "L";
  if (i[a]) {
    i[a].add(o);
  } else {
    i[a] = new Set([o]);
  }
  return function () {
    const e = i[a];
    if (e) {
      e.delete(o);
      if (e.size === 0) {
        delete i[a];
      }
    }
  };
}
const tL = "always";
export function jK(e) {
  if (e.isolateGlobalState === true) {
    (() => {
      if (tu.pendingReactions.length || tu.inBatch || tu.isRunningReactions) {
        r(36);
      }
      ts = true;
      if (ta) {
        const e = p();
        if (--e.__mobxInstanceCount == 0) {
          e.__mobxGlobals = undefined;
        }
        tu = new to();
      }
    })();
  }
  let t;
  let n;
  const e_useProxies = e.useProxies;
  const e_enforceActions = e.enforceActions;
  if (e_useProxies !== undefined) {
    tu.useProxies =
      e_useProxies === tL ||
      (e_useProxies !== "never" && typeof Proxy !== "undefined");
  }
  if (e_useProxies === "ifavailable") {
    tu.verifyProxies = true;
  }
  if (e_enforceActions !== undefined) {
    const a = e_enforceActions === tL ? tL : e_enforceActions === "observed";
    tu.enforceActions = a;
    tu.allowStateChanges = a !== true && a !== tL;
  }
  [
    "computedRequiresReaction",
    "reactionRequiresObservable",
    "observableRequiresReaction",
    "disableErrorBoundaries",
    "safeDescriptors",
  ].forEach((t) => {
    if (t in e) {
      tu[t] = !!e[t];
    }
  });
  tu.allowStateReads = !tu.observableRequiresReaction;
  if (e.reactionScheduler) {
    t = e.reactionScheduler;
    n = tp;
    tp = function (e) {
      return t(function () {
        return n(e);
      });
    };
  }
}
function tU(e, t, n, r) {
  const i = q(t);
  nK(() => {
    const t = nj(e, r)[BQ];
    I(i).forEach((e) => {
      t.extend_(e, i[e], !n || !(e in n) || n[e]);
    });
  });
  return e;
}
export function yl(e, t) {
  return (function e(t) {
    const n = {
      name: t.name_,
    };
    if (t.observing_ && t.observing_.length > 0) {
      n.dependencies = Array.from(new Set(t.observing_)).map(e);
    }
    return n;
  })(nL(e, t));
}
let tq = 0;
function tG() {
  this.message = "FLOW_CANCELLED";
}
tG.prototype = Object.create(Error.prototype);
const tz = ed("flow");
const tH = ed("flow.bound", {
  bound: true,
});
var tW = Object.assign(function (e, t) {
  if (ee(t)) {
    return tz.decorate_20223_(e, t);
  }
  if (E(t)) {
    return Z(e, t, tz);
  }
  const n = e.name || "<unnamed flow>";
  const r = function () {
    let t;
    const r = arguments;
    const i = ++tq;
    const o = XI(n + " - runid: " + i + " - init", e).apply(this, r);
    let a;
    const s = new Promise((resolve, reject) => {
      let s = 0;
      function u(e) {
        let t;
        a = undefined;
        try {
          t = XI(n + " - runid: " + i + " - yield " + s++, o.next).call(o, e);
        } catch (error) {
          return reject(error);
        }
        l(t);
      }
      function c(e) {
        let t;
        a = undefined;
        try {
          t = XI(n + " - runid: " + i + " - yield " + s++, o.throw).call(o, e);
        } catch (error) {
          return reject(error);
        }
        l(t);
      }
      function l(t) {
        if (P(t == null ? undefined : t.then)) {
          return void t.then(l, reject);
        }
        if (t.done) {
          return resolve(t.value);
        }
        return (a = Promise.resolve(t.value)).then(u, c);
      }
      t = reject;
      u(undefined);
    });
    s.cancel = XI(n + " - runid: " + i + " - cancel", function () {
      try {
        if (a) {
          t$(a);
        }
        const e = o.return(undefined);
        const n = Promise.resolve(e.value);
        n.then(x, x);
        t$(n);
        t(new tG());
      } catch (error) {
        t(error);
      }
    });
    return s;
  };
  r.isMobXFlow = true;
  return r;
}, tz);
function t$(e) {
  if (P(e.cancel)) {
    e.cancel();
  }
}
function tF(e) {
  return (e == null ? undefined : e.isMobXFlow) === true;
}
function tX(e) {
  return !!e && (nP(e) || !!e[BQ] || er(e) || ty(e) || e2(e));
}
export function lB(e, t, n, r) {
  let i;
  let o;
  let a;
  let s;
  let u;
  let c;
  let l;
  if (P(n)) {
    i = e;
    o = t;
    a = n;
    s = r;
    return nI(i, o).observe_(a, s);
  }
  u = e;
  c = t;
  l = n;
  return nI(u).observe_(c, l);
}
function tJ(e, t, n) {
  e.set(t, n);
  return n;
}
export function HO(e, t) {
  return (function e(t, n) {
    if (t == null || typeof t !== "object" || t instanceof Date || !tX(t)) {
      return t;
    }
    if (e0(t) || e2(t)) {
      return e(t.get(), n);
    }
    if (n.has(t)) {
      return n.get(t);
    }
    if (nh(t)) {
      const i = tJ(n, t, Array(t.length));
      t.forEach((t, r) => {
        i[r] = e(t, n);
      });
      return i;
    }
    if (nm(t)) {
      const o = tJ(n, t, new Set());
      t.forEach((t) => {
        o.add(e(t, n));
      });
      return o;
    }
    if (np(t)) {
      const a = tJ(n, t, new Map());
      t.forEach((t, r) => {
        a.set(r, e(t, n));
      });
      return a;
    }
    const s = tJ(n, t, {});
    ((e) => {
      if (nP(e)) {
        return e[BQ].ownKeys_();
      }
      r(38);
    })(t).forEach((r) => {
      if (Object.prototype.propertyIsEnumerable.call(t, r)) {
        s[r] = e(t[r], n);
      }
    });
    return s;
  })(e, new Map());
}
function tZ(e, t = undefined) {
  tf();
  try {
    return e.apply(t);
  } finally {
    th();
  }
}
export function z7(e, t, n) {
  if (arguments.length == 1 || (t && typeof t === "object")) {
    return ((e, t) => {
      if (t != null && (n = t.signal) != null && n.aborted) {
        return Object.assign(Promise.reject(Error("WHEN_ABORTED")), {
          cancel: function () {
            return null;
          },
        });
      }
      var n;
      let r;
      let i;
      const o = new Promise((resolve, onError) => {
        let a;
        const s = t1(e, resolve, {
          ...t,
          onError,
        });
        r = function () {
          s();
          onError(Error("WHEN_CANCELLED"));
        };
        i = function () {
          s();
          onError(Error("WHEN_ABORTED"));
        };
        if (
          !(t == null || (a = t.signal) == null || a.addEventListener == null)
        ) {
          a.addEventListener("abort", i);
        }
      }).finally(() => {
        let e;
        if (
          t == null ||
          (e = t.signal) == null ||
          e.removeEventListener == null
        ) {
          return undefined;
        }
        return e.removeEventListener("abort", i);
      });
      o.cancel = r;
      return o;
    })(e, t);
  }
  return t1(e, t, n || {});
}
function t1(e, t, n) {
  if (typeof n.timeout === "number") {
    var r;
    const i = Error("WHEN_TIMEOUT");
    r = setTimeout(() => {
      if (!a[BQ].isDisposed) {
        a();
        if (n.onError) {
          n.onError(i);
        } else {
          throw i;
        }
      }
    }, n.timeout);
  }
  n.name = "When";
  const o = eF("When-effect", t);
  var a = fm((t) => {
    if (vx(false, e)) {
      t.dispose();
      if (r) {
        clearTimeout(r);
      }
      o();
    }
  }, n);
  return a;
}
tW.bound = Q(tH);
var t2 = {
  has: function (e, t) {
    return e[BQ].has_(t);
  },
  get: function (e, t) {
    return e[BQ].get_(t);
  },
  set: function (e, t, n) {
    let r;
    return !!E(t) && ((r = e[BQ].set_(t, n, true)) == null || r);
  },
  deleteProperty: function (e, t) {
    let n;
    return !!E(t) && ((n = e[BQ].delete_(t, true)) == null || n);
  },
  defineProperty: function (e, t, n) {
    let r;
    return (r = e[BQ].defineProperty_(t, n)) == null || r;
  },
  ownKeys: function (e) {
    return e[BQ].ownKeys_();
  },
  preventExtensions: function (e) {
    r(13);
  },
};
function t3(e) {
  return e.interceptors_ !== undefined && e.interceptors_.length > 0;
}
function t4(e, t) {
  const n = e.interceptors_ || (e.interceptors_ = []);
  n.push(t);
  return k(() => {
    const e = n.indexOf(t);
    if (e !== -1) {
      n.splice(e, 1);
    }
  });
}
function t6(e, t) {
  const n = te();
  try {
    for (
      let i = [].concat(e.interceptors_ || []), o = 0, a = i.length;
      o < a && ((t = i[o](t)) && !t.type && r(14), t);
      o++
    );
    return t;
  } finally {
    tt(n);
  }
}
function t8(e) {
  return e.changeListeners_ !== undefined && e.changeListeners_.length > 0;
}
function t5(e, t) {
  const n = e.changeListeners_ || (e.changeListeners_ = []);
  n.push(t);
  return k(() => {
    const e = n.indexOf(t);
    if (e !== -1) {
      n.splice(e, 1);
    }
  });
}
function t7(e, t) {
  const n = te();
  let e_changeListeners_ = e.changeListeners_;
  if (e_changeListeners_) {
    e_changeListeners_ = e_changeListeners_.slice();
    for (let i = 0, o = e_changeListeners_.length; i < o; i++) {
      e_changeListeners_[i](t);
    }
    tt(n);
  }
}
export function Gn(e, t, n) {
  nK(() => {
    const r = nj(e, n)[BQ];
    if (t == null) {
      if (!K(e, J)) {
        V(e, J, {
          ...e[J],
        });
      }
      t = e[J];
    }
    I(t).forEach((e) => r.make_(e, t[e]));
  });
  return e;
}
const ne = Symbol("mobx-keys");
export function l_(e, t, n) {
  if (R(e)) {
    return tU(e, e, t, n);
  }
  nK(() => {
    const r = nj(e, n)[BQ];
    if (!e[ne]) {
      const i = Object.getPrototypeOf(e);
      const o = new Set([].concat(I(e), I(i)));
      o.delete("constructor");
      o.delete(BQ);
      V(i, ne, o);
    }
    e[ne].forEach((e) => r.make_(e, !t || !(e in t) || t[e]));
  });
  return e;
}
const nn = "splice";
var nr = "update";
var ni = {
  get: function (e, t) {
    const n = e[BQ];
    if (t === BQ) {
      return n;
    }
    if (t === "length") {
      return n.getArrayLength_();
    }
    if (typeof t !== "string" || isNaN(t)) {
      if (K(na, t)) {
        return na[t];
      }
      return e[t];
    }
    return n.get_(parseInt(t));
  },
  set: function (e, t, n) {
    const r = e[BQ];
    if (t === "length") {
      r.setArrayLength_(n);
    }
    if (typeof t === "symbol" || isNaN(t)) {
      e[t] = n;
    } else {
      r.set_(parseInt(t), n);
    }
    return true;
  },
  preventExtensions: function () {
    r(15);
  },
};
class no {
  constructor(e = "ObservableArray", t, n, r) {
    this.owned_ = undefined;
    this.legacyMode_ = undefined;
    this.atom_ = undefined;
    this.values_ = [];
    this.interceptors_ = undefined;
    this.changeListeners_ = undefined;
    this.enhancer_ = undefined;
    this.dehancer = undefined;
    this.proxy_ = undefined;
    this.lastKnownLength_ = 0;
    this.owned_ = n;
    this.legacyMode_ = r;
    this.atom_ = new en(e);
    this.enhancer_ = function (e, n) {
      return t(e, n, "ObservableArray[..]");
    };
  }
  dehanceValue_(e) {
    if (this.dehancer !== undefined) {
      return this.dehancer(e);
    }
    return e;
  }
  dehanceValues_(e) {
    if (this.dehancer !== undefined && e.length > 0) {
      return e.map(this.dehancer);
    }
    return e;
  }
  intercept_(e) {
    return t4(this, e);
  }
  observe_(e, t = false) {
    if (t) {
      e({
        observableKind: "array",
        object: this.proxy_,
        debugObjectName: this.atom_.name_,
        type: "splice",
        index: 0,
        added: this.values_.slice(),
        addedCount: this.values_.length,
        removed: [],
        removedCount: 0,
      });
    }
    return t5(this, e);
  }
  getArrayLength_() {
    this.atom_.reportObserved();
    return this.values_.length;
  }
  setArrayLength_(e) {
    if (typeof e !== "number" || isNaN(e) || e < 0) {
      r("Out of range: " + e);
    }
    const length = this.values_.length;
    if (e !== length) {
      if (e > length) {
        const n = Array(e - length);
        for (let i = 0; i < e - length; i++) {
          n[i] = undefined;
        }
        this.spliceWithArray_(length, 0, n);
      } else {
        this.spliceWithArray_(e, length - e);
      }
    }
  }
  updateArrayLength_(e, t) {
    if (e !== this.lastKnownLength_) {
      r(16);
    }
    this.lastKnownLength_ += t;
    if (this.legacyMode_ && t > 0) {
      nB(e + t + 1);
    }
  }
  spliceWithArray_(e, removedCount, n) {
    const r = this;
    this.atom_;
    const length = this.values_.length;
    if (e === undefined) {
      e = 0;
    } else if (e > length) {
      e = length;
    } else if (e < 0) {
      e = Math.max(0, length + e);
    }
    removedCount =
      arguments.length == 1
        ? length - e
        : removedCount == null
          ? 0
          : Math.max(0, Math.min(removedCount, length - e));
    if (n === undefined) {
      n = O;
    }
    if (t3(this)) {
      const o = t6(this, {
        object: this.proxy_,
        type: nn,
        index: e,
        removedCount,
        added: n,
      });
      if (!o) {
        return O;
      }
      removedCount = o.removedCount;
      n = o.added;
    }
    n = n.length === 0 ? n : n.map((e) => r.enhancer_(e, undefined));
    if (this.legacyMode_) {
      const a = n.length - removedCount;
      this.updateArrayLength_(length, a);
    }
    const s = this.spliceItemsIntoValues_(e, removedCount, n);
    if (removedCount !== 0 || n.length !== 0) {
      this.notifyArraySplice_(e, n, s);
    }
    return this.dehanceValues_(s);
  }
  spliceItemsIntoValues_(e, t, n) {
    if (n.length < 10000) {
      let r;
      return (r = this.values_).splice.apply(r, [e, t].concat(n));
    }
    const i = this.values_.slice(e, e + t);
    const o = this.values_.slice(e + t);
    this.values_.length += n.length - t;
    for (let a = 0; a < n.length; a++) {
      this.values_[e + a] = n[a];
    }
    for (let s = 0; s < o.length; s++) {
      this.values_[e + n.length + s] = o[s];
    }
    return i;
  }
  notifyArrayChildUpdate_(e, t, oldValue) {
    const r = !this.owned_ && false;
    const i = t8(this);
    const o =
      i || r
        ? {
            observableKind: "array",
            object: this.proxy_,
            type: nr,
            debugObjectName: this.atom_.name_,
            index: e,
            newValue: t,
            oldValue,
          }
        : null;
    this.atom_.reportChanged();
    if (i) {
      t7(this, o);
    }
  }
  notifyArraySplice_(e, t, removed) {
    const r = !this.owned_ && false;
    const i = t8(this);
    const o =
      i || r
        ? {
            observableKind: "array",
            object: this.proxy_,
            debugObjectName: this.atom_.name_,
            type: nn,
            index: e,
            removed,
            added: t,
            removedCount: removed.length,
            addedCount: t.length,
          }
        : null;
    this.atom_.reportChanged();
    if (i) {
      t7(this, o);
    }
  }
  get_(e) {
    if (this.legacyMode_ && e >= this.values_.length) {
      return void console.warn("[mobx] Out of bounds read: " + e);
    }
    this.atom_.reportObserved();
    return this.dehanceValue_(this.values_[e]);
  }
  set_(e, t) {
    const values_ = this.values_;
    if (this.legacyMode_ && e > values_.length) {
      r(17, e, values_.length);
    }
    if (e < values_.length) {
      this.atom_;
      const i = values_[e];
      if (t3(this)) {
        const o = t6(this, {
          type: nr,
          object: this.proxy_,
          index: e,
          newValue: t,
        });
        if (!o) {
          return;
        }
        t = o.newValue;
      }
      if ((t = this.enhancer_(t, i)) !== i) {
        values_[e] = t;
        this.notifyArrayChildUpdate_(e, t, i);
      }
    } else {
      for (
        var a = Array(e + 1 - values_.length), s = 0;
        s < a.length - 1;
        s++
      ) {
        a[s] = undefined;
      }
      a[a.length - 1] = t;
      this.spliceWithArray_(values_.length, 0, a);
    }
  }
}
var na = {
  clear: function () {
    return this.splice(0);
  },
  replace: function (e) {
    const t = this[BQ];
    return t.spliceWithArray_(0, t.values_.length, e);
  },
  toJSON: function () {
    return this.slice();
  },
  splice: function (e, t) {
    for (
      var n = arguments.length, r = Array(n > 2 ? n - 2 : 0), i = 2;
      i < n;
      i++
    ) {
      r[i - 2] = arguments[i];
    }
    const o = this[BQ];
    switch (arguments.length) {
      case 0:
        return [];
      case 1:
        return o.spliceWithArray_(e);
      case 2:
        return o.spliceWithArray_(e, t);
    }
    return o.spliceWithArray_(e, t, r);
  },
  spliceWithArray: function (e, t, n) {
    return this[BQ].spliceWithArray_(e, t, n);
  },
  push: function () {
    const e = this[BQ];
    for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) {
      n[r] = arguments[r];
    }
    e.spliceWithArray_(e.values_.length, 0, n);
    return e.values_.length;
  },
  pop: function () {
    return this.splice(Math.max(this[BQ].values_.length - 1, 0), 1)[0];
  },
  shift: function () {
    return this.splice(0, 1)[0];
  },
  unshift: function () {
    const e = this[BQ];
    for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) {
      n[r] = arguments[r];
    }
    e.spliceWithArray_(0, 0, n);
    return e.values_.length;
  },
  reverse: function () {
    if (tu.trackingDerivation) {
      r(37, "reverse");
    }
    this.replace(this.slice().reverse());
    return this;
  },
  sort: function () {
    if (tu.trackingDerivation) {
      r(37, "sort");
    }
    const e = this.slice();
    e.sort.apply(e, arguments);
    this.replace(e);
    return this;
  },
  remove: function (e) {
    const t = this[BQ];
    const n = t.dehanceValues_(t.values_).indexOf(e);
    return n > -1 && (this.splice(n, 1), true);
  },
};
function ns(e, t) {
  if (typeof Array.prototype[e] === "function") {
    na[e] = t(e);
  }
}
function nu(e) {
  return function () {
    const t = this[BQ];
    t.atom_.reportObserved();
    const n = t.dehanceValues_(t.values_);
    return n[e].apply(n, arguments);
  };
}
function nc(e) {
  return function (t, n) {
    const r = this;
    const i = this[BQ];
    i.atom_.reportObserved();
    return i.dehanceValues_(i.values_)[e](function (e, i) {
      return t.call(n, e, i, r);
    });
  };
}
function nl(e) {
  return function () {
    const t = this;
    const n = this[BQ];
    n.atom_.reportObserved();
    const r = n.dehanceValues_(n.values_);
    const i = arguments[0];
    arguments[0] = function (e, n, r) {
      return i(e, n, r, t);
    };
    return r[e].apply(r, arguments);
  };
}
ns("at", nu);
ns("concat", nu);
ns("flat", nu);
ns("includes", nu);
ns("indexOf", nu);
ns("join", nu);
ns("lastIndexOf", nu);
ns("slice", nu);
ns("toString", nu);
ns("toLocaleString", nu);
ns("toSorted", nu);
ns("toSpliced", nu);
ns("with", nu);
ns("every", nc);
ns("filter", nc);
ns("find", nc);
ns("findIndex", nc);
ns("findLast", nc);
ns("findLastIndex", nc);
ns("flatMap", nc);
ns("forEach", nc);
ns("map", nc);
ns("some", nc);
ns("toReversed", nc);
ns("reduce", nl);
ns("reduceRight", nl);
var nf = D("ObservableArrayAdministration", no);
function nh(e) {
  return T(e) && nf(e[BQ]);
}
const nd = {};
const nv = "delete";
var n_ = (() => {
  function e(e, t = ea, n = "ObservableMap") {
    const i = this;
    this.enhancer_ = undefined;
    this.name_ = undefined;
    this[BQ] = nd;
    this.data_ = undefined;
    this.hasMap_ = undefined;
    this.keysAtom_ = undefined;
    this.interceptors_ = undefined;
    this.changeListeners_ = undefined;
    this.dehancer = undefined;
    this.enhancer_ = t;
    this.name_ = n;
    if (!P(Map)) {
      r(18);
    }
    nK(() => {
      i.keysAtom_ = MN("ObservableMap.keys()");
      i.data_ = new Map();
      i.hasMap_ = new Map();
      if (e) {
        i.merge(e);
      }
    });
  }
  const e_prototype = e.prototype;
  e_prototype.has_ = function (e) {
    return this.data_.has(e);
  };
  e_prototype.has = function (e) {
    const t = this;
    if (!tu.trackingDerivation) {
      return this.has_(e);
    }
    let n = this.hasMap_.get(e);
    if (!n) {
      const r = (n = new eZ(
        this.has_(e),
        enhancer,
        "ObservableMap.key?",
        false,
      ));
      this.hasMap_.set(e, r);
      tN(r, function () {
        return t.hasMap_.delete(e);
      });
    }
    return n.get();
  };
  e_prototype.set = function (e, t) {
    const n = this.has_(e);
    if (t3(this)) {
      const r = t6(this, {
        type: n ? nr : "add",
        object: this,
        newValue: t,
        name: e,
      });
      if (!r) {
        return this;
      }
      t = r.newValue;
    }
    if (n) {
      this.updateValue_(e, t);
    } else {
      this.addValue_(e, t);
    }
    return this;
  };
  e_prototype.delete = function (e) {
    const t = this;
    e8(this.keysAtom_);
    if (
      t3(this) &&
      !t6(this, {
        type: nv,
        object: this,
        name: e,
      })
    ) {
      return false;
    }
    if (this.has_(e)) {
      const n = t8(this);
      const r = n
        ? {
            observableKind: "map",
            debugObjectName: this.name_,
            type: nv,
            object: this,
            oldValue: this.data_.get(e).value_,
            name: e,
          }
        : null;
      tZ(() => {
        let n;
        t.keysAtom_.reportChanged();
        if ((n = t.hasMap_.get(e)) != null) {
          n.setNewValue_(false);
        }
        t.data_.get(e).setNewValue_(undefined);
        t.data_.delete(e);
      });
      if (n) {
        t7(this, r);
      }
      return true;
    }
    return false;
  };
  e_prototype.updateValue_ = function (e, t) {
    const n = this.data_.get(e);
    if ((t = n.prepareNewValue_(t)) !== tu.UNCHANGED) {
      const r = t8(this);
      const i = r
        ? {
            observableKind: "map",
            debugObjectName: this.name_,
            type: nr,
            object: this,
            oldValue: n.value_,
            name: e,
            newValue: t,
          }
        : null;
      n.setNewValue_(t);
      if (r) {
        t7(this, i);
      }
    }
  };
  e_prototype.addValue_ = function (e, t) {
    const n = this;
    this.keysAtom_;
    tZ(() => {
      let r;
      const i = new eZ(t, n.enhancer_, "ObservableMap.key", false);
      n.data_.set(e, i);
      t = i.value_;
      if ((r = n.hasMap_.get(e)) != null) {
        r.setNewValue_(true);
      }
      n.keysAtom_.reportChanged();
    });
    const r = t8(this);
    const i = r
      ? {
          observableKind: "map",
          debugObjectName: this.name_,
          type: "add",
          object: this,
          name: e,
          newValue: t,
        }
      : null;
    if (r) {
      t7(this, i);
    }
  };
  e_prototype.get = function (e) {
    if (this.has(e)) {
      return this.dehanceValue_(this.data_.get(e).get());
    }
    return this.dehanceValue_(undefined);
  };
  e_prototype.dehanceValue_ = function (e) {
    if (this.dehancer !== undefined) {
      return this.dehancer(e);
    }
    return e;
  };
  e_prototype.keys = function () {
    this.keysAtom_.reportObserved();
    return this.data_.keys();
  };
  e_prototype.values = function () {
    const e = this;
    const t = this.keys();
    return nb({
      next: function () {
        const n = t.next();
        const n_done = n.done;
        const n_value = n.value;
        return {
          done: n_done,
          value: n_done ? undefined : e.get(n_value),
        };
      },
    });
  };
  e_prototype.entries = function () {
    const e = this;
    const t = this.keys();
    return nb({
      next: function () {
        const n = t.next();
        const n_done = n.done;
        const n_value = n.value;
        return {
          done: n_done,
          value: n_done ? undefined : [n_value, e.get(n_value)],
        };
      },
    });
  };
  e_prototype[Symbol.iterator] = function () {
    return this.entries();
  };
  e_prototype.forEach = function (e, t) {
    let n;
    for (const r = $(this); !(n = r()).done;) {
      const i = n.value;
      const o = i[0];
      const a = i[1];
      e.call(t, a, o, this);
    }
  };
  e_prototype.merge = function (e) {
    const t = this;
    if (np(e)) {
      e = new Map(e);
    }
    tZ(() => {
      if (R(e)) {
        ((e) => {
          const t = Object.keys(e);
          if (!L) {
            return t;
          }
          const n = Object.getOwnPropertySymbols(e);
          if (n.length) {
            return [].concat(
              t,
              n.filter((t) => Object.prototype.propertyIsEnumerable.call(e, t)),
            );
          }
          return t;
        })(e).forEach((n) => t.set(n, e[n]));
      } else if (Array.isArray(e)) {
        e.forEach((e) => {
          const n = e[0];
          const r = e[1];
          return t.set(n, r);
        });
      } else if (N(e)) {
        if (
          Object.getPrototypeOf(
            Object.getPrototypeOf(Object.getPrototypeOf(e)),
          ) !== null
        ) {
          r(19, e);
        }
        e.forEach((e, n) => t.set(n, e));
      } else if (e != null) {
        r(20, e);
      }
    });
    return this;
  };
  e_prototype.clear = function () {
    const e = this;
    tZ(() => {
      O8(() => {
        let t;
        for (const n = $(e.keys()); !(t = n()).done;) {
          const r = t.value;
          e.delete(r);
        }
      });
    });
  };
  e_prototype.replace = function (e) {
    const t = this;
    tZ(() => {
      let n;
      const i = ((e) => {
        if (N(e) || np(e)) {
          return e;
        }
        if (Array.isArray(e)) {
          return new Map(e);
        }
        if (!R(e)) {
          return r(21, e);
        }
        const t = new Map();
        for (const n in e) {
          t.set(n, e[n]);
        }
        return t;
      })(e);
      const o = new Map();
      let a = false;
      for (const s = $(t.data_.keys()); !(n = s()).done;) {
        const u = n.value;
        if (!i.has(u)) {
          if (t.delete(u)) {
            a = true;
          } else {
            const c = t.data_.get(u);
            o.set(u, c);
          }
        }
      }
      let l;
      for (const f = $(i.entries()); !(l = f()).done;) {
        const h = l.value;
        const d = h[0];
        const v = h[1];
        const _ = t.data_.has(d);
        t.set(d, v);
        if (t.data_.has(d)) {
          const p = t.data_.get(d);
          o.set(d, p);
          if (!_) {
            a = true;
          }
        }
      }
      if (!a) {
        if (t.data_.size !== o.size) {
          t.keysAtom_.reportChanged();
        } else {
          const b = t.data_.keys();
          const g = o.keys();
          for (let y = b.next(), m = g.next(); !y.done;) {
            if (y.value !== m.value) {
              t.keysAtom_.reportChanged();
              break;
            }
            y = b.next();
            m = g.next();
          }
        }
      }
      t.data_ = o;
    });
    return this;
  };
  e_prototype.toString = function () {
    return "[object ObservableMap]";
  };
  e_prototype.toJSON = function () {
    return Array.from(this);
  };
  e_prototype.observe_ = function (e, t) {
    return t5(this, e);
  };
  e_prototype.intercept_ = function (e) {
    return t4(this, e);
  };
  return W(e, [
    {
      key: "size",
      get: function () {
        this.keysAtom_.reportObserved();
        return this.data_.size;
      },
    },
    {
      key: Symbol.toStringTag,
      get: function () {
        return "Map";
      },
    },
  ]);
})();
var np = D("ObservableMap", n_);
function nb(e) {
  e[Symbol.toStringTag] = "MapIterator";
  return nW(e);
}
const ng = {};
var ny = (() => {
  function e(e, t = ea, n = "ObservableSet") {
    const i = this;
    this.name_ = undefined;
    this[BQ] = ng;
    this.data_ = new Set();
    this.atom_ = undefined;
    this.changeListeners_ = undefined;
    this.interceptors_ = undefined;
    this.dehancer = undefined;
    this.enhancer_ = undefined;
    this.name_ = n;
    if (!P(Set)) {
      r(22);
    }
    this.enhancer_ = function (e, r) {
      return t(e, r, n);
    };
    nK(() => {
      i.atom_ = MN(i.name_);
      if (e) {
        i.replace(e);
      }
    });
  }
  const e_prototype = e.prototype;
  e_prototype.dehanceValue_ = function (e) {
    if (this.dehancer !== undefined) {
      return this.dehancer(e);
    }
    return e;
  };
  e_prototype.clear = function () {
    const e = this;
    tZ(() => {
      O8(() => {
        let t;
        for (const n = $(e.data_.values()); !(t = n()).done;) {
          const r = t.value;
          e.delete(r);
        }
      });
    });
  };
  e_prototype.forEach = function (e, t) {
    let n;
    for (const r = $(this); !(n = r()).done;) {
      const i = n.value;
      e.call(t, i, i, this);
    }
  };
  e_prototype.add = function (e) {
    const t = this;
    e8(this.atom_);
    if (t3(this)) {
      const n = t6(this, {
        type: "add",
        object: this,
        newValue: e,
      });
      if (!n) {
        return this;
      }
      e = n.newValue;
    }
    if (!this.has(e)) {
      tZ(() => {
        t.data_.add(t.enhancer_(e, undefined));
        t.atom_.reportChanged();
      });
      const r = t8(this);
      const i = r
        ? {
            observableKind: "set",
            debugObjectName: this.name_,
            type: "add",
            object: this,
            newValue: e,
          }
        : null;
      if (r) {
        t7(this, i);
      }
    }
    return this;
  };
  e_prototype.delete = function (e) {
    const t = this;
    if (
      t3(this) &&
      !t6(this, {
        type: nv,
        object: this,
        oldValue: e,
      })
    ) {
      return false;
    }
    if (this.has(e)) {
      const n = t8(this);
      const r = n
        ? {
            observableKind: "set",
            debugObjectName: this.name_,
            type: nv,
            object: this,
            oldValue: e,
          }
        : null;
      tZ(() => {
        t.atom_.reportChanged();
        t.data_.delete(e);
      });
      if (n) {
        t7(this, r);
      }
      return true;
    }
    return false;
  };
  e_prototype.has = function (e) {
    this.atom_.reportObserved();
    return this.data_.has(this.dehanceValue_(e));
  };
  e_prototype.entries = function () {
    const e = this.values();
    return nO({
      next: function () {
        const t = e.next();
        const t_value = t.value;
        const t_done = t.done;
        if (t_done) {
          return {
            value: undefined,
            done: t_done,
          };
        }
        return {
          value: [t_value, t_value],
          done: t_done,
        };
      },
    });
  };
  e_prototype.keys = function () {
    return this.values();
  };
  e_prototype.values = function () {
    this.atom_.reportObserved();
    const e = this;
    const t = this.data_.values();
    return nO({
      next: function () {
        const n = t.next();
        const n_value = n.value;
        const n_done = n.done;
        if (n_done) {
          return {
            value: undefined,
            done: n_done,
          };
        }
        return {
          value: e.dehanceValue_(n_value),
          done: n_done,
        };
      },
    });
  };
  e_prototype.intersection = function (e) {
    if (B(e) && !nm(e)) {
      return e.intersection(this);
    }
    return new Set(this).intersection(e);
  };
  e_prototype.union = function (e) {
    if (B(e) && !nm(e)) {
      return e.union(this);
    }
    return new Set(this).union(e);
  };
  e_prototype.difference = function (e) {
    return new Set(this).difference(e);
  };
  e_prototype.symmetricDifference = function (e) {
    if (B(e) && !nm(e)) {
      return e.symmetricDifference(this);
    }
    return new Set(this).symmetricDifference(e);
  };
  e_prototype.isSubsetOf = function (e) {
    return new Set(this).isSubsetOf(e);
  };
  e_prototype.isSupersetOf = function (e) {
    return new Set(this).isSupersetOf(e);
  };
  e_prototype.isDisjointFrom = function (e) {
    if (B(e) && !nm(e)) {
      return e.isDisjointFrom(this);
    }
    return new Set(this).isDisjointFrom(e);
  };
  e_prototype.replace = function (e) {
    const t = this;
    if (nm(e)) {
      e = new Set(e);
    }
    tZ(() => {
      if (Array.isArray(e)) {
        t.clear();
        e.forEach((e) => t.add(e));
      } else if (B(e)) {
        t.clear();
        e.forEach((e) => t.add(e));
      } else if (e != null) {
        r("Cannot initialize set from " + e);
      }
    });
    return this;
  };
  e_prototype.observe_ = function (e, t) {
    return t5(this, e);
  };
  e_prototype.intercept_ = function (e) {
    return t4(this, e);
  };
  e_prototype.toJSON = function () {
    return Array.from(this);
  };
  e_prototype.toString = function () {
    return "[object ObservableSet]";
  };
  e_prototype[Symbol.iterator] = function () {
    return this.values();
  };
  return W(e, [
    {
      key: "size",
      get: function () {
        this.atom_.reportObserved();
        return this.data_.size;
      },
    },
    {
      key: Symbol.toStringTag,
      get: function () {
        return "Set";
      },
    },
  ]);
})();
var nm = D("ObservableSet", ny);
function nO(e) {
  e[Symbol.toStringTag] = "SetIterator";
  return nW(e);
}
const nw = Object.create(null);
const nS = "remove";
class nA {
  constructor(e, t = new Map(), n, r = ek) {
    this.target_ = undefined;
    this.values_ = undefined;
    this.name_ = undefined;
    this.defaultAnnotation_ = undefined;
    this.keysAtom_ = undefined;
    this.changeListeners_ = undefined;
    this.interceptors_ = undefined;
    this.proxy_ = undefined;
    this.isPlainObject_ = undefined;
    this.appliedAnnotations_ = undefined;
    this.pendingKeys_ = undefined;
    this.target_ = e;
    this.values_ = t;
    this.name_ = n;
    this.defaultAnnotation_ = r;
    this.keysAtom_ = new en("ObservableObject.keys");
    this.isPlainObject_ = R(this.target_);
  }
  getObservablePropValue_(e) {
    return this.values_.get(e).get();
  }
  setObservablePropValue_(e, t) {
    const n = this.values_.get(e);
    if (n instanceof e1) {
      n.set(t);
      return true;
    }
    if (t3(this)) {
      const r = t6(this, {
        type: nr,
        object: this.proxy_ || this.target_,
        name: e,
        newValue: t,
      });
      if (!r) {
        return null;
      }
      t = r.newValue;
    }
    if ((t = n.prepareNewValue_(t)) !== tu.UNCHANGED) {
      const i = t8(this);
      const o = i
        ? {
            type: nr,
            observableKind: "object",
            debugObjectName: this.name_,
            object: this.proxy_ || this.target_,
            oldValue: n.value_,
            name: e,
            newValue: t,
          }
        : null;
      n.setNewValue_(t);
      if (i) {
        t7(this, o);
      }
    }
    return true;
  }
  get_(e) {
    if (tu.trackingDerivation && !K(this.target_, e)) {
      this.has_(e);
    }
    return this.target_[e];
  }
  set_(e, t, n) {
    if (n === undefined) {
      n = false;
    }
    if (K(this.target_, e)) {
      if (this.values_.has(e)) {
        return this.setObservablePropValue_(e, t);
      }
      if (n) {
        return Reflect.set(this.target_, e, t);
      }
      this.target_[e] = t;
      return true;
    }
    return this.extend_(
      e,
      {
        value: t,
        enumerable: true,
        writable: true,
        configurable: true,
      },
      this.defaultAnnotation_,
      n,
    );
  }
  has_(e) {
    if (!tu.trackingDerivation) {
      return e in this.target_;
    }
    if (!this.pendingKeys_) {
      this.pendingKeys_ = new Map();
    }
    let t = this.pendingKeys_.get(e);
    if (!t) {
      t = new eZ(e in this.target_, enhancer, "ObservableObject.key?", false);
      this.pendingKeys_.set(e, t);
    }
    return t.get();
  }
  make_(e, t) {
    if (t === true) {
      t = this.defaultAnnotation_;
    }
    if (t !== false) {
      nT(this, t, e);
      if (!(e in this.target_)) {
        let n;
        if ((n = this.target_[J]) != null && n[e]) {
          return;
        }
        r(1, t.annotationType_, this.name_ + "." + e.toString());
      }
      for (let i = this.target_; i && i !== Object.prototype;) {
        const o = Object.getOwnPropertyDescriptor(i, e);
        if (o) {
          const a = t.make_(this, e, o, i);
          if (a === 0) {
            return;
          }
          if (a === 1) {
            break;
          }
        }
        i = Object.getPrototypeOf(i);
      }
      nE(this, t, e);
    }
  }
  extend_(e, t, n, r = false) {
    if (n === true) {
      n = this.defaultAnnotation_;
    }
    if (n === false) {
      return this.defineProperty_(e, t, r);
    }
    const i = n.extend_(this, e, t, r);
    if (i) {
      nE(this, n, e);
    }
    return i;
  }
  defineProperty_(e, t, n = false) {
    this.keysAtom_;
    try {
      tf();
      const r = this.delete_(e);
      if (!r) {
        return r;
      }
      if (t3(this)) {
        const i = t6(this, {
          object: this.proxy_ || this.target_,
          name: e,
          type: "add",
          newValue: t.value,
        });
        if (!i) {
          return null;
        }
        const o = i.newValue;
        if (t.value !== o) {
          t = {
            ...t,
            value: o,
          };
        }
      }
      if (n) {
        if (!Reflect.defineProperty(this.target_, e, t)) {
          return false;
        }
      } else {
        Object.defineProperty(this.target_, e, t);
      }
      this.notifyPropertyAddition_(e, t.value);
    } finally {
      th();
    }
    return true;
  }
  defineObservableProperty_(e, t, n, r = false) {
    this.keysAtom_;
    try {
      tf();
      const i = this.delete_(e);
      if (!i) {
        return i;
      }
      if (t3(this)) {
        const o = t6(this, {
          object: this.proxy_ || this.target_,
          name: e,
          type: "add",
          newValue: t,
        });
        if (!o) {
          return null;
        }
        t = o.newValue;
      }
      const a = nx(e);
      const s = {
        configurable: !tu.safeDescriptors || this.isPlainObject_,
        enumerable: true,
        get: a.get,
        set: a.set,
      };
      if (r) {
        if (!Reflect.defineProperty(this.target_, e, s)) {
          return false;
        }
      } else {
        Object.defineProperty(this.target_, e, s);
      }
      const u = new eZ(t, n, "ObservableObject.key", false);
      this.values_.set(e, u);
      this.notifyPropertyAddition_(e, u.value_);
    } finally {
      th();
    }
    return true;
  }
  defineComputedProperty_(e, t, n = false) {
    this.keysAtom_;
    try {
      tf();
      const r = this.delete_(e);
      if (!r) {
        return r;
      }
      if (
        t3(this) &&
        !t6(this, {
          object: this.proxy_ || this.target_,
          name: e,
          type: "add",
          newValue: undefined,
        })
      ) {
        return null;
      }
      if (!t.name) {
        t.name = "ObservableObject.key";
      }
      t.context = this.proxy_ || this.target_;
      const i = nx(e);
      const o = {
        configurable: !tu.safeDescriptors || this.isPlainObject_,
        enumerable: false,
        get: i.get,
        set: i.set,
      };
      if (n) {
        if (!Reflect.defineProperty(this.target_, e, o)) {
          return false;
        }
      } else {
        Object.defineProperty(this.target_, e, o);
      }
      this.values_.set(e, new e1(t));
      this.notifyPropertyAddition_(e, undefined);
    } finally {
      th();
    }
    return true;
  }
  delete_(e, t = false) {
    e8(this.keysAtom_);
    if (!K(this.target_, e)) {
      return true;
    }
    if (
      t3(this) &&
      !t6(this, {
        object: this.proxy_ || this.target_,
        name: e,
        type: nS,
      })
    ) {
      return null;
    }
    try {
      tf();
      let n;
      let r;
      const i = t8(this);
      const o = this.values_.get(e);
      let a;
      if (!o && (i || 0)) {
        a =
          (r = Object.getOwnPropertyDescriptor(this.target_, e)) == null
            ? undefined
            : r.value;
      }
      if (t) {
        if (!Reflect.deleteProperty(this.target_, e)) {
          return false;
        }
      } else {
        delete this.target_[e];
      }
      if (o) {
        this.values_.delete(e);
        if (o instanceof eZ) {
          a = o.value_;
        }
        tv(o);
      }
      this.keysAtom_.reportChanged();
      if (!((n = this.pendingKeys_) == null || (n = n.get(e)) == null)) {
        n.set(e in this.target_);
      }
      if (i || 0) {
        const s = {
          type: nS,
          observableKind: "object",
          object: this.proxy_ || this.target_,
          debugObjectName: this.name_,
          oldValue: a,
          name: e,
        };
        if (i) {
          t7(this, s);
        }
      }
    } finally {
      th();
    }
    return true;
  }
  observe_(e, t) {
    return t5(this, e);
  }
  intercept_(e) {
    return t4(this, e);
  }
  notifyPropertyAddition_(e, t) {
    let n;
    const r = t8(this);
    if (r) {
      const i = r
        ? {
            type: "add",
            observableKind: "object",
            debugObjectName: this.name_,
            object: this.proxy_ || this.target_,
            name: e,
            newValue: t,
          }
        : null;
      if (r) {
        t7(this, i);
      }
    }
    if (!((n = this.pendingKeys_) == null || (n = n.get(e)) == null)) {
      n.set(true);
    }
    this.keysAtom_.reportChanged();
  }
  ownKeys_() {
    this.keysAtom_.reportObserved();
    return I(this.target_);
  }
  keys_() {
    this.keysAtom_.reportObserved();
    return Object.keys(this.target_);
  }
}
function nj(e, t) {
  if (K(e, BQ)) {
    return e;
  }
  let n;
  let r;
  const i =
    (r = t == null ? undefined : t.name) != null ? r : "ObservableObject";
  const o = new nA(
    e,
    new Map(),
    String(i),
    t ? ((n = t.defaultDecorator) != null ? n : ex(t)) : undefined,
  );
  V(e, BQ, o);
  return e;
}
var nk = D("ObservableObjectAdministration", nA);
function nx(e) {
  return (
    nw[e] ||
    (nw[e] = {
      get: function () {
        return this[BQ].getObservablePropValue_(e);
      },
      set: function (t) {
        return this[BQ].setObservablePropValue_(e, t);
      },
    })
  );
}
function nP(e) {
  return !!T(e) && nk(e[BQ]);
}
function nE(e, t, n) {
  let r;
  if ((r = e.target_[J]) != null) {
    delete r[n];
  }
}
function nT(e, t, n) {}
const nR = nN(0);
s = false;
Object.defineProperty((u = {}), "0", {
  set: function () {
    s = true;
  },
});
Object.create(u)[0] = 1;
const nM = s === false;
var nV = 0;
const nC = function () {};
c = Array.prototype;
if (Object.setPrototypeOf) {
  Object.setPrototypeOf(nC.prototype, c);
} else if (nC.prototype.__proto__ !== undefined) {
  nC.prototype.__proto__ = c;
} else {
  nC.prototype = c;
}
var nD = ((e) => {
  function t(t, n, r = "ObservableArray", i = false) {
    let o;
    o = e.call(this) || this;
    nK(() => {
      const e = new no(r, n, i, true);
      e.proxy_ = o;
      C(o, BQ, e);
      if (t && t.length) {
        o.spliceWithArray(0, 0, t);
      }
      if (nM) {
        Object.defineProperty(o, "0", nR);
      }
    });
    return o;
  }
  X(t, e);
  const t_prototype = t.prototype;
  t_prototype.concat = function () {
    this[BQ].atom_.reportObserved();
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) {
      t[n] = arguments[n];
    }
    return Array.prototype.concat.apply(
      this.slice(),
      t.map((e) => {
        if (nh(e)) {
          return e.slice();
        }
        return e;
      }),
    );
  };
  t_prototype[Symbol.iterator] = function () {
    const e = this;
    let t = 0;
    return nW({
      next: function () {
        if (t < e.length) {
          return {
            value: e[t++],
            done: false,
          };
        }
        return {
          done: true,
          value: undefined,
        };
      },
    });
  };
  return W(t, [
    {
      key: "length",
      get: function () {
        return this[BQ].getArrayLength_();
      },
      set: function (e) {
        this[BQ].setArrayLength_(e);
      },
    },
    {
      key: Symbol.toStringTag,
      get: function () {
        return "Array";
      },
    },
  ]);
})(nC);
function nN(e) {
  return {
    enumerable: false,
    configurable: true,
    get: function () {
      return this[BQ].get_(e);
    },
    set: function (t) {
      this[BQ].set_(e, t);
    },
  };
}
function nB(e) {
  if (e > nV) {
    let t;
    for (let n = nV; n < e + 100; n++) {
      t = n;
      Object.defineProperty(nD.prototype, "" + t, nN(t));
    }
    nV = e;
  }
}
function nL(e, t) {
  if (typeof e === "object" && e !== null) {
    if (nh(e)) {
      if (t !== undefined) {
        r(23);
      }
      return e[BQ].atom_;
    }
    if (nm(e)) {
      return e.atom_;
    }
    if (np(e)) {
      if (t === undefined) {
        return e.keysAtom_;
      }
      const n = e.data_.get(t) || e.hasMap_.get(t);
      if (!n) {
        r(25, t, getDebugName(e));
      }
      return n;
    }
    if (nP(e)) {
      if (!t) {
        return r(26);
      }
      const i = e[BQ].values_.get(t);
      if (!i) {
        r(27, t, getDebugName(e));
      }
      return i;
    }
    if (er(e) || e2(e) || ty(e)) {
      return e;
    }
  } else if (P(e) && ty(e[BQ])) {
    return e[BQ];
  }
  r(28);
}
function nI(e, t) {
  if (!e) {
    r(29);
  }
  if (t !== undefined) {
    return nI(nL(e, t));
  }
  if (er(e) || e2(e) || ty(e) || np(e) || nm(e)) {
    return e;
  }
  if (e[BQ]) {
    return e[BQ];
  }
  r(24, e);
}
function getDebugName(e, t) {
  let n;
  if (t !== undefined) {
    n = nL(e, t);
  } else {
    if (tR(e)) {
      return e.name;
    }
    n = nP(e) || np(e) || nm(e) ? nI(e) : nL(e);
  }
  return n.name_;
}
function nK(e) {
  const t = te();
  const n = eJ(true);
  tf();
  try {
    return e();
  } finally {
    th();
    eQ(n);
    tt(t);
  }
}
Object.entries(na).forEach((e) => {
  const t = e[0];
  const n = e[1];
  if (t !== "concat") {
    V(nD.prototype, t, n);
  }
});
nB(1000);
var toString = Object.prototype.toString;
function nG(e, t, n = -1) {
  return (function e(t, n, r, i, o) {
    if (t === n) {
      return t !== 0 || 1 / t == 1 / n;
    }
    if (t == null || n == null) {
      return false;
    }
    if (t != t) {
      return n != n;
    }
    const a = typeof t;
    if (a !== "function" && a !== "object" && typeof n !== "object") {
      return false;
    }
    const s = toString.call(t);
    if (s !== toString.call(n)) {
      return false;
    }
    switch (s) {
      case "[object RegExp]":
      case "[object String]":
        return "" + t == "" + n;
      case "[object Number]":
        if (+t != +t) {
          return +n != +n;
        }
        if (+t == 0) {
          return 1 / t == 1 / n;
        }
        return +t == +n;
      case "[object Date]":
      case "[object Boolean]":
        return +t == +n;
      case "[object Symbol]":
        return (
          typeof Symbol !== "undefined" &&
          Symbol.valueOf.call(t) === Symbol.valueOf.call(n)
        );
      case "[object Map]":
      case "[object Set]":
        if (r >= 0) {
          r++;
        }
    }
    t = nz(t);
    n = nz(n);
    const u = s === "[object Array]";
    if (!u) {
      if (typeof t !== "object" || typeof n !== "object") {
        return false;
      }
      const c = t.constructor;
      const l = n.constructor;
      if (
        c !== l &&
        !(P(c) && c instanceof c && P(l) && l instanceof l) &&
        "constructor" in t &&
        "constructor" in n
      ) {
        return false;
      }
    }
    if (r === 0) {
      return false;
    }
    if (r < 0) {
      r = -1;
    }
    o = o || [];
    for (var f = (i = i || []).length; f--;) {
      if (i[f] === t) {
        return o[f] === n;
      }
    }
    i.push(t);
    o.push(n);
    if (u) {
      if ((f = t.length) !== n.length) {
        return false;
      }
      while (f--) {
        if (!e(t[f], n[f], r - 1, i, o)) {
          return false;
        }
      }
    } else {
      const h = Object.keys(t);
      const d = h.length;
      if (Object.keys(n).length !== d) {
        return false;
      }
      for (let v = 0; v < d; v++) {
        const _ = h[v];
        if (!(K(n, _) && e(t[_], n[_], r - 1, i, o))) {
          return false;
        }
      }
    }
    i.pop();
    o.pop();
    return true;
  })(e, t, n);
}
function nz(e) {
  if (nh(e)) {
    return e.slice();
  }
  if (N(e) || np(e) || B(e) || nm(e)) {
    return Array.from(e.entries());
  }
  return e;
}
var nH = ((v = p().Iterator) == null ? undefined : v.prototype) || {};
function nW(e) {
  e[Symbol.iterator] = n$;
  return Object.assign(Object.create(nH), e);
}
function n$() {
  return this;
}
["Symbol", "Map", "Set"].forEach((e) => {
  if (p()[e] === undefined) {
    r("MobX requires global '" + e + "' to be available or polyfilled");
  }
});
if (typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ === "object") {
  __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
    spy: function (e) {
      console.warn("[mobx.spy] Is a no-op in production builds");
      return function () {};
    },
    extras: {
      getDebugName,
    },
    $mobx: BQ,
  });
}
