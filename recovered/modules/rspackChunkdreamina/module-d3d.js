const _webpackExports = {};
((e) => {
  "use strict";
  const t =
    typeof globalThis !== "undefined"
      ? globalThis
      : typeof window !== "undefined"
        ? window
        : global !== undefined
          ? global
          : typeof self !== "undefined"
            ? self
            : {};
  function n(e) {
    if (
      e &&
      e.__esModule &&
      Object.prototype.hasOwnProperty.call(e, "default")
    ) {
      return e.default;
    }
    return e;
  }
  const i = (e) => e && e.Math == Math && e;
  const globalThis_1 =
    i(typeof globalThis === "object" && globalThis) ||
    i(typeof window === "object" && window) ||
    i(typeof self === "object" && self) ||
    i(typeof t === "object" && t) ||
    (function () {
      return this;
    })() ||
    Function("return this")();
  const a = {};
  const c = (e) => {
    try {
      return !!e();
    } catch (e) {
      return true;
    }
  };
  const s = !c(
    () =>
      Object.defineProperty({}, 1, {
        get: function () {
          return 7;
        },
      })[1] != 7,
  );
  const u = {};
  const propertyIsEnumerable = {}.propertyIsEnumerable;
  const Object_getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
  u.f =
    Object_getOwnPropertyDescriptor &&
    !propertyIsEnumerable.call(
      {
        1: 2,
      },
      1,
    )
      ? function (e) {
          const t = Object_getOwnPropertyDescriptor(this, e);
          return !!t && t.enumerable;
        }
      : propertyIsEnumerable;
  const l = (e, t) => ({
    enumerable: !(1 & e),
    configurable: !(2 & e),
    writable: !(4 & e),
    value: t,
  });
  const toString = {}.toString;
  const d = function (e) {
    return toString.call(e).slice(8, -1);
  };
  const split = "".split;
  const v = c(() => !Object("z").propertyIsEnumerable(0))
    ? function (e) {
        if (d(e) == "String") {
          return split.call(e, "");
        }
        return Object(e);
      }
    : Object;
  const g = (e) => {
    if (e == null) {
      throw TypeError("Can't call method on " + e);
    }
    return e;
  };
  const b = (e) => v(g(e));
  const E = (e) => {
    if (typeof e === "object") {
      return e !== null;
    }
    return typeof e === "function";
  };
  const m = (e, t) => {
    let r;
    let n;
    if (!E(e)) {
      return e;
    }
    if (
      (t && typeof (r = e.toString) === "function" && !E((n = r.call(e)))) ||
      (typeof (r = e.valueOf) === "function" && !E((n = r.call(e)))) ||
      (!t && typeof (r = e.toString) === "function" && !E((n = r.call(e))))
    ) {
      return n;
    }
    throw TypeError("Can't convert object to primitive value");
  };
  const T = (e) => Object(g(e));
  const hasOwnProperty = {}.hasOwnProperty;
  const A = (e, t) => hasOwnProperty.call(T(e), t);
  const o_document = globalThis_1.document;
  const x = E(o_document) && E(o_document.createElement);
  const w = (e) => {
    if (x) {
      return o_document.createElement(e);
    }
    return {};
  };
  const I =
    !s &&
    !c(
      () =>
        Object.defineProperty(w("div"), "a", {
          get: function () {
            return 7;
          },
        }).a != 7,
    );
  const Object_getOwnPropertyDescriptor_1 = Object.getOwnPropertyDescriptor;
  a.f = s
    ? Object_getOwnPropertyDescriptor_1
    : function (e, t) {
        e = b(e);
        t = m(t, true);
        if (I) {
          try {
            return Object_getOwnPropertyDescriptor_1(e, t);
          } catch (e) {}
        }
        if (A(e, t)) {
          return l(!u.f.call(e, t), e[t]);
        }
      };
  const R = {};
  const B = (e) => {
    if (!E(e)) {
      throw TypeError(String(e) + " is not an object");
    }
    return e;
  };
  const Object_defineProperty = Object.defineProperty;
  R.f = s
    ? Object_defineProperty
    : function (e, t, r) {
        B(e);
        t = m(t, true);
        B(r);
        if (I) {
          try {
            return Object_defineProperty(e, t, r);
          } catch (e) {}
        }
        if ("get" in r || "set" in r) {
          throw TypeError("Accessors not supported");
        }
        if ("value" in r) {
          e[t] = r.value;
        }
        return e;
      };
  const M = s
    ? (e, t, r) => R.f(e, t, l(1, r))
    : (e, t, r) => {
        e[t] = r;
        return e;
      };
  const P = {
    exports: {},
  };
  const L = (e, t) => {
    try {
      M(globalThis_1, e, t);
    } catch (r) {
      globalThis_1[e] = t;
    }
    return t;
  };
  const O = "__core-js_shared__";
  const H = globalThis_1[O] || L(O, {});
  const Function_toString = Function.toString;
  if (typeof H.inspectSource !== "function") {
    H.inspectSource = function (e) {
      return Function_toString.call(e);
    };
  }
  const H_inspectSource = H.inspectSource;
  const o_WeakMap = globalThis_1.WeakMap;
  const G =
    typeof o_WeakMap === "function" &&
    /native code/.test(H_inspectSource(o_WeakMap));
  const j = {
    exports: {},
  };
  (j.exports = function (e, t) {
    return H[e] || (H[e] = t !== undefined ? t : {});
  })("versions", []).push({
    version: "3.12.1",
    mode: "global",
    copyright: "© 2021 Denis Pushkarev (zloirock.ru)",
  });
  let F;
  let K;
  let Y;
  const j_exports = j.exports;
  let X = 0;
  const W = Math.random();
  const z = function (e) {
    return (
      "Symbol(" +
      String(e === undefined ? "" : e) +
      ")_" +
      (++X + W).toString(36)
    );
  };
  const q = j_exports("keys");
  const Z = (e) => q[e] || (q[e] = z(e));
  const $ = {};
  const J = "Object already initialized";
  const o_WeakMap_1 = globalThis_1.WeakMap;
  if (G || H.state) {
    const ee = H.state || (H.state = new o_WeakMap_1());
    const et = ee.get;
    const er = ee.has;
    const en = ee.set;
    F = function (e, t) {
      if (er.call(ee, e)) {
        throw TypeError(J);
      }
      t.facade = e;
      en.call(ee, e, t);
      return t;
    };
    K = function (e) {
      return et.call(ee, e) || {};
    };
    Y = function (e) {
      return er.call(ee, e);
    };
  } else {
    const ei = Z("state");
    $[ei] = true;
    F = function (e, t) {
      if (A(e, ei)) {
        throw TypeError(J);
      }
      t.facade = e;
      M(e, ei, t);
      return t;
    };
    K = function (e) {
      if (A(e, ei)) {
        return e[ei];
      }
      return {};
    };
    Y = function (e) {
      return A(e, ei);
    };
  }
  const eo = F;
  const ea = K;
  const ec = (e) => {
    if (Y(e)) {
      return K(e);
    }
    return F(e, {});
  };
  const es = function (e) {
    return function (t) {
      let r;
      if (!E(t) || (r = K(t)).type !== e) {
        throw TypeError("Incompatible receiver, " + e + " required");
      }
      return r;
    };
  };
  const eu = String(String).split("String");
  (P.exports = function (e, t, r, n) {
    let i;
    const a = !!n && !!n.unsafe;
    let c = !!n && !!n.enumerable;
    const s = !!n && !!n.noTargetGet;
    if (typeof r === "function") {
      if (!(typeof t !== "string" || A(r, "name"))) {
        M(r, "name", t);
      }
      if (!(i = ec(r)).source) {
        i.source = eu.join(typeof t === "string" ? t : "");
      }
    }
    if (e !== globalThis_1) {
      if (a) {
        if (!s && e[t]) {
          c = true;
        }
      } else {
        delete e[t];
      }
      if (c) {
        e[t] = r;
      } else {
        M(e, t, r);
      }
    } else if (c) {
      e[t] = r;
    } else {
      L(t, r);
    }
  })(Function.prototype, "toString", function () {
    return (
      (typeof this === "function" && ea(this).source) || H_inspectSource(this)
    );
  });
  const P_exports = P.exports;
  const eh = (e) => {
    if (typeof e === "function") {
      return e;
    }
  };
  const el = function (e, t) {
    if (arguments.length < 2) {
      return eh(globalThis_1[e]) || eh(globalThis_1[e]);
    }
    return (
      (globalThis_1[e] && globalThis_1[e][t]) ||
      (globalThis_1[e] && globalThis_1[e][t])
    );
  };
  const ep = {};
  const Math_ceil = Math.ceil;
  const Math_floor = Math.floor;
  const ev = (e) => {
    if (isNaN((e *= 1))) {
      return 0;
    }
    return (e > 0 ? Math_floor : Math_ceil)(e);
  };
  const Math_min = Math.min;
  const eb = (e) => {
    if (e > 0) {
      return Math_min(ev(e), 9007199254740991);
    }
    return 0;
  };
  const Math_max = Math.max;
  const Math_min_1 = Math.min;
  const eT = (e, t) => {
    const r = ev(e);
    if (r < 0) {
      return Math_max(r + t, 0);
    }
    return Math_min_1(r, t);
  };
  const eS = (e) =>
    function (t, r, n) {
      let i;
      const o = b(t);
      const a = eb(o.length);
      let c = eT(n, a);
      if (e && r != r) {
        while (a > c) {
          if ((i = o[c++]) != i) {
            return true;
          }
        }
      } else {
        for (; a > c; c++) {
          if ((e || c in o) && o[c] === r) {
            return e || c || 0;
          }
        }
      }
      return !e && -1;
    };
  const eA = {
    includes: eS(true),
    indexOf: eS(false),
  };
  const eA_indexOf = eA.indexOf;
  const ex = (e, t) => {
    let r;
    const n = b(e);
    let i = 0;
    const o = [];
    for (r in n) {
      if (!A($, r) && A(n, r)) {
        o.push(r);
      }
    }
    while (t.length > i) {
      if (A(n, (r = t[i++]))) {
        if (!~eA_indexOf(o, r)) {
          o.push(r);
        }
      }
    }
    return o;
  };
  const ew = [
    "constructor",
    "hasOwnProperty",
    "isPrototypeOf",
    "propertyIsEnumerable",
    "toLocaleString",
    "toString",
    "valueOf",
  ];
  const eI = ew.concat("length", "prototype");
  ep.f =
    Object.getOwnPropertyNames ||
    function (e) {
      return ex(e, eI);
    };
  const ek = {};
  ek.f = Object.getOwnPropertySymbols;
  const eR =
    el("Reflect", "ownKeys") ||
    ((e) => {
      const t = ep.f(B(e));
      const r = ek.f;
      if (r) {
        return t.concat(r(e));
      }
      return t;
    });
  const eB = /#|\.prototype\./;
  const eC = function (e, t) {
    const r = eP[eM(e)];
    return r == eO || (r != eL && (typeof t === "function" ? c(t) : !!t));
  };
  var eM = (eC.normalize = function (e) {
    return String(e).replace(eB, ".").toLowerCase();
  });
  var eP = (eC.data = {});
  var eL = (eC.NATIVE = "N");
  var eO = (eC.POLYFILL = "P");
  const eH = a.f;
  const eN = (e, t) => {
    for (let r = eR(t), n = R.f, i = a.f, o = 0; o < r.length; o++) {
      const c = r[o];
      if (!A(e, c)) {
        n(e, c, i(t, c));
      }
    }
  };
  const eU = (e, t) => {
    let r;
    let n;
    let i;
    let a;
    let c;
    const e_target = e.target;
    const e_global = e.global;
    const e_stat = e.stat;
    if (
      (r = e_global
        ? globalThis_1
        : e_stat
          ? globalThis_1[e_target] || L(e_target, {})
          : (globalThis_1[e_target] || {}).prototype)
    ) {
      for (n in t) {
        a = t[n];
        i = e.noTargetGet ? (c = eH(r, n)) && c.value : r[n];
        if (
          !eC(e_global ? n : e_target + (e_stat ? "." : "#") + n, e.forced) &&
          i !== undefined
        ) {
          if (typeof a == typeof i) {
            continue;
          }
          eN(a, i);
        }
        if (e.sham || (i && i.sham)) {
          M(a, "sham", true);
        }
        P_exports(r, n, a, e);
      }
    }
  };
  function eD() {
    eD = function () {
      return e;
    };
    var e = {};
    const Object_prototype = Object.prototype;
    const t_hasOwnProperty = Object_prototype.hasOwnProperty;
    const n =
      Object.defineProperty ||
      ((e, t, r) => {
        e[t] = r.value;
      });
    const i = typeof Symbol === "function" ? Symbol : {};
    const o = i.iterator || "@@iterator";
    const a = i.asyncIterator || "@@asyncIterator";
    const c = i.toStringTag || "@@toStringTag";
    function s(e, t, r) {
      Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true,
      });
      return e[t];
    }
    try {
      s({}, "");
    } catch (e) {
      s = function (e, t, r) {
        return (e[t] = r);
      };
    }
    function u(e, t, r, i) {
      let o;
      let a;
      let c;
      let s;
      const u = Object.create(
        (t && t.prototype instanceof l ? t : l).prototype,
      );
      n(u, "_invoke", {
        value:
          ((o = e),
          (a = r),
          (c = new constructor(i || [])),
          (s = "suspendedStart"),
          function (e, t) {
            if (s === "executing") {
              throw Error("Generator is already running");
            }
            if (s === "completed") {
              if (e === "throw") {
                throw t;
              }
              return {
                value: undefined,
                done: true,
              };
            }
            c.method = e;
            for (c.arg = t; ;) {
              const r = c.delegate;
              if (r) {
                const n = (function e(t, r) {
                  const r_method = r.method;
                  const i = t.iterator[r_method];
                  if (i === undefined) {
                    r.delegate = null;
                    if (
                      !(
                        r_method === "throw" &&
                        t.iterator.return &&
                        ((r.method = "return"),
                        (r.arg = undefined),
                        e(t, r),
                        r.method === "throw")
                      )
                    ) {
                      if (r_method !== "return") {
                        r.method = "throw";
                        r.arg = TypeError(
                          "The iterator does not provide a '" +
                            r_method +
                            "' method",
                        );
                      }
                    }
                    return h;
                  }
                  const o = f(i, t.iterator, r.arg);
                  if (o.type === "throw") {
                    r.method = "throw";
                    r.arg = o.arg;
                    r.delegate = null;
                    return h;
                  }
                  const o_arg = o.arg;
                  if (o_arg) {
                    if (o_arg.done) {
                      r[t.resultName] = o_arg.value;
                      r.next = t.nextLoc;
                      if (r.method !== "return") {
                        r.method = "next";
                        r.arg = undefined;
                      }
                      r.delegate = null;
                      return h;
                    }
                    return o_arg;
                  }
                  r.method = "throw";
                  r.arg = TypeError("iterator result is not an object");
                  r.delegate = null;
                  return h;
                })(r, c);
                if (n) {
                  if (n === h) {
                    continue;
                  }
                  return n;
                }
              }
              if (c.method === "next") {
                c.sent = c._sent = c.arg;
              } else if (c.method === "throw") {
                if (s === "suspendedStart") {
                  s = "completed";
                  throw c.arg;
                }
                c.dispatchException(c.arg);
              } else {
                if (c.method === "return") {
                  c.abrupt("return", c.arg);
                }
              }
              s = "executing";
              const i = f(o, a, c);
              if (i.type === "normal") {
                s = c.done ? "completed" : "suspendedYield";
                if (i.arg === h) {
                  continue;
                }
                return {
                  value: i.arg,
                  done: c.done,
                };
              }
              if (i.type === "throw") {
                s = "completed";
                c.method = "throw";
                c.arg = i.arg;
              }
            }
          }),
      });
      return u;
    }
    function f(e, t, r) {
      try {
        return {
          type: "normal",
          arg: e.call(t, r),
        };
      } catch (arg) {
        return {
          type: "throw",
          arg,
        };
      }
    }
    e.wrap = u;
    var h = {};
    function l() {}
    function p() {}
    function d() {}
    let y = {};
    s(y, o, function () {
      return this;
    });
    const Object_getPrototypeOf = Object.getPrototypeOf;
    const g =
      Object_getPrototypeOf &&
      Object_getPrototypeOf(Object_getPrototypeOf(_([])));
    if (g && g !== Object_prototype && t_hasOwnProperty.call(g, o)) {
      y = g;
    }
    const b = (d.prototype = l.prototype = Object.create(y));
    function E(e) {
      ["next", "throw", "return"].forEach((t) => {
        s(e, t, function (e) {
          return this._invoke(t, e);
        });
      });
    }
    function m(e, t) {
      let i;
      n(this, "_invoke", {
        value: function (n, o) {
          function a() {
            return new t(function (i, a) {
              (function n(i, o, a, c) {
                const s = f(e[i], e, o);
                if (s.type !== "throw") {
                  const u = s.arg;
                  const h = u.value;
                  if (
                    h &&
                    typeof h === "object" &&
                    t_hasOwnProperty.call(h, "__await")
                  ) {
                    return t.resolve(h.__await).then(
                      (e) => {
                        n("next", e, a, c);
                      },
                      (e) => {
                        n("throw", e, a, c);
                      },
                    );
                  }
                  return t.resolve(h).then(
                    (e) => {
                      u.value = e;
                      a(u);
                    },
                    (e) => n("throw", e, a, c),
                  );
                }
                c(s.arg);
              })(n, o, i, a);
            });
          }
          return (i = i ? i.then(a, a) : a());
        },
      });
    }
    function T(e) {
      const t = {
        tryLoc: e[0],
      };
      if (1 in e) {
        t.catchLoc = e[1];
      }
      if (2 in e) {
        t.finallyLoc = e[2];
        t.afterLoc = e[3];
      }
      this.tryEntries.push(t);
    }
    function S(e) {
      const t = e.completion || {};
      t.type = "normal";
      delete t.arg;
      e.completion = t;
    }
    function constructor(e) {
      this.tryEntries = [
        {
          tryLoc: "root",
        },
      ];
      e.forEach(T, this);
      this.reset(true);
    }
    function _(e) {
      if (e) {
        const t = e[o];
        if (t) {
          return t.call(e);
        }
        if (typeof e.next === "function") {
          return e;
        }
        if (!isNaN(e.length)) {
          let n = -1;
          const i = function t() {
            while (++n < e.length) {
              if (t_hasOwnProperty.call(e, n)) {
                t.value = e[n];
                t.done = false;
                return t;
              }
            }
            t.value = undefined;
            t.done = true;
            return t;
          };
          return (i.next = i);
        }
      }
      return {
        next,
      };
    }
    function next() {
      return {
        value: undefined,
        done: true,
      };
    }
    p.prototype = d;
    n(b, "constructor", {
      value: d,
      configurable: true,
    });
    n(d, "constructor", {
      value: p,
      configurable: true,
    });
    p.displayName = s(d, c, "GeneratorFunction");
    e.isGeneratorFunction = function (e) {
      const t = typeof e === "function" && e.constructor;
      return (
        !!t && (t === p || (t.displayName || t.name) === "GeneratorFunction")
      );
    };
    e.mark = function (e) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(e, d);
      } else {
        e.__proto__ = d;
        s(e, c, "GeneratorFunction");
      }
      e.prototype = Object.create(b);
      return e;
    };
    e.awrap = function (__await) {
      return {
        __await,
      };
    };
    E(m.prototype);
    s(m.prototype, a, function () {
      return this;
    });
    e.AsyncIterator = m;
    e.async = function (t, r, n, i, o = Promise) {
      const a = new m(u(t, r, n, i), o);
      if (e.isGeneratorFunction(r)) {
        return a;
      }
      return a.next().then((e) => {
        if (e.done) {
          return e.value;
        }
        return a.next();
      });
    };
    E(b);
    s(b, c, "Generator");
    s(b, o, function () {
      return this;
    });
    s(b, "toString", function () {
      return "[object Generator]";
    });
    e.keys = function (e) {
      const t = Object(e);
      const r = [];
      for (const n in t) {
        r.push(n);
      }
      r.reverse();
      return function e() {
        while (r.length) {
          const n = r.pop();
          if (n in t) {
            e.value = n;
            e.done = false;
            return e;
          }
        }
        e.done = true;
        return e;
      };
    };
    e.values = _;
    constructor.prototype = {
      constructor,
      reset: function (e) {
        this.prev = 0;
        this.next = 0;
        this.sent = this._sent = undefined;
        this.done = false;
        this.delegate = null;
        this.method = "next";
        this.arg = undefined;
        this.tryEntries.forEach(S);
        if (!e) {
          for (const t in this) {
            if (
              t.charAt(0) === "t" &&
              t_hasOwnProperty.call(this, t) &&
              !isNaN(+t.slice(1))
            ) {
              this[t] = undefined;
            }
          }
        }
      },
      stop: function () {
        this.done = true;
        const completion = this.tryEntries[0].completion;
        if (completion.type === "throw") {
          throw completion.arg;
        }
        return this.rval;
      },
      dispatchException: function (e) {
        if (this.done) {
          throw e;
        }
        const t = this;
        function n(r, n) {
          a.type = "throw";
          a.arg = e;
          t.next = r;
          if (n) {
            t.method = "next";
            t.arg = undefined;
          }
          return !!n;
        }
        for (let i = this.tryEntries.length - 1; i >= 0; --i) {
          const o = this.tryEntries[i];
          var a = o.completion;
          if (o.tryLoc === "root") {
            return n("end");
          }
          if (o.tryLoc <= this.prev) {
            const c = t_hasOwnProperty.call(o, "catchLoc");
            const s = t_hasOwnProperty.call(o, "finallyLoc");
            if (c && s) {
              if (this.prev < o.catchLoc) {
                return n(o.catchLoc, true);
              }
              if (this.prev < o.finallyLoc) {
                return n(o.finallyLoc);
              }
            } else if (c) {
              if (this.prev < o.catchLoc) {
                return n(o.catchLoc, true);
              }
            } else {
              if (!s) {
                throw Error("try statement without catch or finally");
              }
              if (this.prev < o.finallyLoc) {
                return n(o.finallyLoc);
              }
            }
          }
        }
      },
      abrupt: function (e, t) {
        for (let n = this.tryEntries.length - 1; n >= 0; --n) {
          const i = this.tryEntries[n];
          if (
            i.tryLoc <= this.prev &&
            t_hasOwnProperty.call(i, "finallyLoc") &&
            this.prev < i.finallyLoc
          ) {
            var o = i;
            break;
          }
        }
        if (
          o &&
          (e === "break" || e === "continue") &&
          o.tryLoc <= t &&
          t <= o.finallyLoc
        ) {
          o = null;
        }
        const a = o ? o.completion : {};
        a.type = e;
        a.arg = t;
        if (o) {
          this.method = "next";
          this.next = o.finallyLoc;
          return h;
        }
        return this.complete(a);
      },
      complete: function (e, t) {
        if (e.type === "throw") {
          throw e.arg;
        }
        if (e.type === "break" || e.type === "continue") {
          this.next = e.arg;
        } else if (e.type === "return") {
          this.rval = this.arg = e.arg;
          this.method = "return";
          this.next = "end";
        } else if (e.type === "normal" && t) {
          this.next = t;
        }
        return h;
      },
      finish: function (e) {
        for (let t = this.tryEntries.length - 1; t >= 0; --t) {
          const r = this.tryEntries[t];
          if (r.finallyLoc === e) {
            this.complete(r.completion, r.afterLoc);
            S(r);
            return h;
          }
        }
      },
      catch: function (e) {
        for (let t = this.tryEntries.length - 1; t >= 0; --t) {
          const r = this.tryEntries[t];
          if (r.tryLoc === e) {
            const n = r.completion;
            if (n.type === "throw") {
              var i = n.arg;
              S(r);
            }
            return i;
          }
        }
        throw Error("illegal catch attempt");
      },
      delegateYield: function (e, resultName, nextLoc) {
        this.delegate = {
          iterator: _(e),
          resultName,
          nextLoc,
        };
        if (this.method === "next") {
          this.arg = undefined;
        }
        return h;
      },
    };
    return e;
  }
  function eG(e) {
    return (eG =
      typeof Symbol === "function" && typeof Symbol.iterator === "symbol"
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            if (
              e &&
              typeof Symbol === "function" &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
            ) {
              return "symbol";
            }
            return typeof e;
          })(e);
  }
  function ej(e, t, r, n, i, o, a) {
    try {
      var c = e[o](a);
      var s = c.value;
    } catch (error) {
      return void r(error);
    }
    if (c.done) {
      t(s);
    } else {
      Promise.resolve(s).then(n, i);
    }
  }
  function eF(e) {
    return function () {
      const t = this;
      const r = arguments;
      return new Promise((resolve, reject) => {
        const o = e.apply(t, r);
        function a(e) {
          ej(o, resolve, reject, a, c, "next", e);
        }
        function c(e) {
          ej(o, resolve, reject, a, c, "throw", e);
        }
        a(undefined);
      });
    };
  }
  function eK(e, t) {
    if (!(e instanceof t)) {
      throw TypeError("Cannot call a class as a function");
    }
  }
  function eY(e, t) {
    for (let r = 0; r < t.length; r++) {
      const n = t[r];
      n.enumerable = n.enumerable || false;
      n.configurable = true;
      if ("value" in n) {
        n.writable = true;
      }
      Object.defineProperty(e, eJ(n.key), n);
    }
  }
  function eV(e, t, r) {
    if (t) {
      eY(e.prototype, t);
    }
    if (r) {
      eY(e, r);
    }
    Object.defineProperty(e, "prototype", {
      writable: false,
    });
    return e;
  }
  function eX(e, t, r) {
    if ((t = eJ(t)) in e) {
      Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true,
      });
    } else {
      e[t] = r;
    }
    return e;
  }
  function eW(e, t) {
    if (typeof t !== "function" && t !== null) {
      throw TypeError("Super expression must either be null or a function");
    }
    e.prototype = Object.create(t && t.prototype, {
      constructor: {
        value: e,
        writable: true,
        configurable: true,
      },
    });
    Object.defineProperty(e, "prototype", {
      writable: false,
    });
    if (t) {
      eq(e, t);
    }
  }
  function ez(e) {
    return (ez = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        })(e);
  }
  function eq(e, t) {
    return (eq = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (e, t) {
          e.__proto__ = t;
          return e;
        })(e, t);
  }
  function eZ(e) {
    if (e === undefined) {
      throw ReferenceError(
        "this hasn't been initialised - super() hasn't been called",
      );
    }
    return e;
  }
  function e$(e) {
    const t = (() => {
      if (
        typeof Reflect === "undefined" ||
        !Reflect.construct ||
        Reflect.construct.sham
      ) {
        return false;
      }
      if (typeof Proxy === "function") {
        return true;
      }
      try {
        Boolean.prototype.valueOf.call(
          Reflect.construct(Boolean, [], function () {}),
        );
        return true;
      } catch (e) {
        return false;
      }
    })();
    return function () {
      let r;
      const n = ez(e);
      r = t
        ? Reflect.construct(n, arguments, ez(this).constructor)
        : n.apply(this, arguments);
      if (r && (typeof r === "object" || typeof r === "function")) {
        return r;
      }
      if (r !== undefined) {
        throw TypeError(
          "Derived constructors may only return object or undefined",
        );
      }
      return eZ(this);
    };
  }
  function eJ(e) {
    const t = ((e, t) => {
      if (typeof e !== "object" || e === null) {
        return e;
      }
      const r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        const n = r.call(e, t || "default");
        if (typeof n !== "object") {
          return n;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    })(e, "string");
    if (typeof t === "symbol") {
      return t;
    }
    return String(t);
  }
  eU(
    {
      global: true,
    },
    {
      globalThis: globalThis_1,
    },
  );
  let eQ;
  let e0;
  const e1 = el("navigator", "userAgent") || "";
  const o_process = globalThis_1.process;
  const e8 = o_process && o_process.versions;
  const e3 = e8 && e8.v8;
  if (e3) {
    e0 = (eQ = e3.split("."))[0] < 4 ? 1 : eQ[0] + eQ[1];
  } else if (
    e1 &&
    (!(eQ = e1.match(/Edge\/(\d+)/)) || eQ[1] >= 74) &&
    (eQ = e1.match(/Chrome\/(\d+)/))
  ) {
    e0 = eQ[1];
  }
  let e4;
  const e5 = e0 && +e0;
  const e6 =
    !!Object.getOwnPropertySymbols &&
    !c(() => !String(Symbol()) || (!Symbol.sham && e5 && e5 < 41));
  const e7 = e6 && !Symbol.sham && typeof Symbol.iterator === "symbol";
  const e9 = j_exports("wks");
  const o_Symbol = globalThis_1.Symbol;
  const tt = e7 ? o_Symbol : (o_Symbol && o_Symbol.withoutSetter) || z;
  const tr = (e) => {
    if (!(A(e9, e) && (e6 || typeof e9[e] === "string"))) {
      if (e6 && A(o_Symbol, e)) {
        e9[e] = o_Symbol[e];
      } else {
        e9[e] = tt("Symbol." + e);
      }
    }
    return e9[e];
  };
  const tn = Object.keys || ((e) => ex(e, ew));
  const ti = s
    ? Object.defineProperties
    : (e, t) => {
        B(e);
        let r;
        const n = tn(t);
        for (let i = n.length, o = 0; i > o;) {
          R.f(e, (r = n[o++]), t[r]);
        }
        return e;
      };
  const to = el("document", "documentElement");
  const ta = "prototype";
  const tc = "script";
  const ts = Z("IE_PROTO");
  const tu = function () {};
  const tf = (e) => "<" + tc + ">" + e + "</" + tc + ">";
  let th = function () {
    try {
      e4 = document.domain && new ActiveXObject("htmlfile");
    } catch (e) {}
    th = e4
      ? ((e = e4).write(tf("")),
        e.close(),
        (t = e.parentWindow.Object),
        (e = null),
        t)
      : ((n = w("iframe")),
        (i = "java" + tc + ":"),
        (n.style.display = "none"),
        to.appendChild(n),
        (n.src = String(i)),
        (r = n.contentWindow.document).open(),
        r.write(tf("document.F=Object")),
        r.close(),
        r.F);
    var e;
    var t;
    var r;
    var n;
    var i;
    for (let o = ew.length; o--;) {
      delete th[ta][ew[o]];
    }
    return th();
  };
  $[ts] = true;
  const tl =
    Object.create ||
    ((e, t) => {
      let r;
      if (e !== null) {
        tu[ta] = B(e);
        r = new tu();
        tu[ta] = null;
        r[ts] = e;
      } else {
        r = th();
      }
      if (t === undefined) {
        return r;
      }
      return ti(r, t);
    });
  const tp = tr("unscopables");
  const Array_prototype = Array.prototype;
  if (Array_prototype[tp] == null) {
    R.f(Array_prototype, tp, {
      configurable: true,
      value: tl(null),
    });
  }
  let ty;
  let tv;
  let tg;
  const tb = {};
  const tE = !c(() => {
    function e() {}
    e.prototype.constructor = null;
    return Object.getPrototypeOf(new e()) !== e.prototype;
  });
  const tm = Z("IE_PROTO");
  const Object_prototype = Object.prototype;
  const tS = tE
    ? Object.getPrototypeOf
    : (e) => {
        if (A((e = T(e)), tm)) {
          return e[tm];
        }
        if (typeof e.constructor === "function" && e instanceof e.constructor) {
          return e.constructor.prototype;
        }
        if (e instanceof Object) {
          return Object_prototype;
        }
        return null;
      };
  const tA = tr("iterator");
  let t_ = false;
  if ([].keys) {
    if ("next" in (tg = [].keys())) {
      if ((tv = tS(tS(tg))) !== Object.prototype) {
        ty = tv;
      }
    } else {
      t_ = true;
    }
  }
  if (
    ty == null ||
    c(() => {
      const e = {};
      return ty[tA].call(e) !== e;
    })
  ) {
    ty = {};
  }
  if (!A(ty, tA)) {
    M(ty, tA, function () {
      return this;
    });
  }
  const tx = ty;
  const tw = t_;
  const tI = R.f;
  const tk = tr("toStringTag");
  const tR = (e, t, r) => {
    if (e && !A((e = r ? e : e.prototype), tk)) {
      tI(e, tk, {
        configurable: true,
        value: t,
      });
    }
  };
  const tB = function () {
    return this;
  };
  const tC = (e) => {
    if (!E(e) && e !== null) {
      throw TypeError("Can't set " + String(e) + " as a prototype");
    }
    return e;
  };
  const tM =
    Object.setPrototypeOf ||
    ("__proto__" in {}
      ? (() => {
          let e;
          let t = false;
          const r = {};
          try {
            (e = Object.getOwnPropertyDescriptor(
              Object.prototype,
              "__proto__",
            ).set).call(r, []);
            t = r instanceof Array;
          } catch (e) {}
          return function (r, n) {
            B(r);
            tC(n);
            if (t) {
              e.call(r, n);
            } else {
              r.__proto__ = n;
            }
            return r;
          };
        })()
      : undefined);
  const tP = (e, t, r) => {
    const n = t + " Iterator";
    e.prototype = tl(tx, {
      next: l(1, r),
    });
    tR(e, n, false);
    tb[n] = tB;
    return e;
  };
  const tL = tr("iterator");
  const tO = "keys";
  const tH = "values";
  const tN = "entries";
  const tU = function () {
    return this;
  };
  const tD = (e, t, r, n, i, o, a) => {
    tP(r, t, n);
    let c;
    let s;
    let u;
    const f = (e) => {
      if (e === i && y) {
        return y;
      }
      if (!tw && e in e_prototype) {
        return e_prototype[e];
      }
      switch (e) {
        case tO:
        case tH:
        case tN:
          return function () {
            return new r(this, e);
          };
      }
      return function () {
        return new r(this);
      };
    };
    const h = t + " Iterator";
    let l = false;
    var e_prototype = e.prototype;
    const d =
      e_prototype[tL] || e_prototype["@@iterator"] || (i && e_prototype[i]);
    var y = (!tw && d) || f(i);
    const v = (t == "Array" && e_prototype.entries) || d;
    if (v) {
      c = tS(v.call(new e()));
      if (tx !== Object.prototype && c.next) {
        if (tS(c) !== tx) {
          if (tM) {
            tM(c, tx);
          } else if (typeof c[tL] !== "function") {
            M(c, tL, tU);
          }
        }
        tR(c, h, true);
      }
    }
    if (i == tH && d && d.name !== tH) {
      l = true;
      y = function () {
        return d.call(this);
      };
    }
    if (e_prototype[tL] !== y) {
      M(e_prototype, tL, y);
    }
    tb[t] = y;
    if (i) {
      s = {
        values: f(tH),
        keys: o ? y : f(tO),
        entries: f(tN),
      };
      if (a) {
        for (u in s) {
          if (!(!tw && !l && u in e_prototype)) {
            P_exports(e_prototype, u, s[u]);
          }
        }
      } else {
        eU(
          {
            target: t,
            proto: true,
            forced: tw || l,
          },
          s,
        );
      }
    }
    return s;
  };
  const tG = (e) => {
    Array_prototype[tp][e] = true;
  };
  const tj = "Array Iterator";
  const tF = es(tj);
  const tK = tD(
    Array,
    "Array",
    function (e, t) {
      eo(this, {
        type: tj,
        target: b(e),
        index: 0,
        kind: t,
      });
    },
    function () {
      const e = tF(this);
      const e_target = e.target;
      const e_kind = e.kind;
      const n = e.index++;
      if (!e_target || n >= e_target.length) {
        e.target = undefined;
        return {
          value: undefined,
          done: true,
        };
      }
      if (e_kind == "keys") {
        return {
          value: n,
          done: false,
        };
      }
      if (e_kind == "values") {
        return {
          value: e_target[n],
          done: false,
        };
      }
      return {
        value: [n, e_target[n]],
        done: false,
      };
    },
    "values",
  );
  tb.Arguments = tb.Array;
  tG("keys");
  tG("values");
  tG("entries");
  const tY = {
    exports: {},
  };
  const tV = !c(() => Object.isExtensible(Object.preventExtensions({})));
  const tX = R.f;
  const tW = z("meta");
  let tz = 0;
  const tq = Object.isExtensible || (() => true);
  const tZ = (e) => {
    tX(e, tW, {
      value: {
        objectID: `O${++tz}`,
        weakData: {},
      },
    });
  };
  var t$ = (tY.exports = {
    REQUIRED: false,
    fastKey: function (e, t) {
      if (!E(e)) {
        if (typeof e === "symbol") {
          return e;
        }
        return (typeof e === "string" ? "S" : "P") + e;
      }
      if (!A(e, tW)) {
        if (!tq(e)) {
          return "F";
        }
        if (!t) {
          return "E";
        }
        tZ(e);
      }
      return e[tW].objectID;
    },
    getWeakData: function (e, t) {
      if (!A(e, tW)) {
        if (!tq(e)) {
          return true;
        }
        if (!t) {
          return false;
        }
        tZ(e);
      }
      return e[tW].weakData;
    },
    onFreeze: function (e) {
      if (tV && t$.REQUIRED && tq(e) && !A(e, tW)) {
        tZ(e);
      }
      return e;
    },
  });
  $[tW] = true;
  const tY_exports = tY.exports;
  const tQ = tr("iterator");
  const Array_prototype_1 = Array.prototype;
  const t1 = (e) =>
    e !== undefined && (tb.Array === e || Array_prototype_1[tQ] === e);
  const t2 = (e) => {
    if (typeof e !== "function") {
      throw TypeError(String(e) + " is not a function");
    }
    return e;
  };
  const t8 = (e, t, r) => {
    t2(e);
    if (t === undefined) {
      return e;
    }
    switch (r) {
      case 0:
        return function () {
          return e.call(t);
        };
      case 1:
        return function (r) {
          return e.call(t, r);
        };
      case 2:
        return function (r, n) {
          return e.call(t, r, n);
        };
      case 3:
        return function (r, n, i) {
          return e.call(t, r, n, i);
        };
    }
    return function () {
      return e.apply(t, arguments);
    };
  };
  const t3 = {};
  t3[tr("toStringTag")] = "z";
  const t4 = String(t3) === "[object z]";
  const t5 = tr("toStringTag");
  const t6 =
    d(
      (function () {
        return arguments;
      })(),
    ) == "Arguments";
  const t7 = t4
    ? d
    : (e) => {
        let t;
        let r;
        let n;
        if (e === undefined) {
          return "Undefined";
        }
        if (e === null) {
          return "Null";
        }
        if (
          typeof (r = ((e, t) => {
            try {
              return e[t];
            } catch (e) {}
          })((t = Object(e)), t5)) === "string"
        ) {
          return r;
        }
        if (t6) {
          return d(t);
        }
        if ((n = d(t)) == "Object" && typeof t.callee === "function") {
          return "Arguments";
        }
        return n;
      };
  const t9 = tr("iterator");
  const re = (e) => {
    if (e != null) {
      return e[t9] || e["@@iterator"] || tb[t7(e)];
    }
  };
  const rt = (e) => {
    const e_return = e.return;
    if (e_return !== undefined) {
      return B(e_return.call(e)).value;
    }
  };
  const rr = function (e, t) {
    this.stopped = e;
    this.result = t;
  };
  const rn = (e, t, r) => {
    let n;
    let i;
    let o;
    let a;
    let c;
    let s;
    let u;
    const f = r && r.that;
    const h = !(!r || !r.AS_ENTRIES);
    const l = !(!r || !r.IS_ITERATOR);
    const p = !(!r || !r.INTERRUPTED);
    const d = t8(t, f, 1 + h + p);
    const y = function (e) {
      if (n) {
        rt(n);
      }
      return new rr(true, e);
    };
    const v = (e) => {
      if (h) {
        B(e);
        if (p) {
          return d(e[0], e[1], y);
        }
        return d(e[0], e[1]);
      }
      if (p) {
        return d(e, y);
      }
      return d(e);
    };
    if (l) {
      n = e;
    } else {
      if (typeof (i = re(e)) !== "function") {
        throw TypeError("Target is not iterable");
      }
      if (t1(i)) {
        o = 0;
        for (a = eb(e.length); a > o; o++) {
          if ((c = v(e[o])) && c instanceof rr) {
            return c;
          }
        }
        return new rr(false);
      }
      n = i.call(e);
    }
    for (s = n.next; !(u = s.call(n)).done;) {
      try {
        c = v(u.value);
      } catch (error) {
        rt(n);
        throw error;
      }
      if (typeof c === "object" && c && c instanceof rr) {
        return c;
      }
    }
    return new rr(false);
  };
  const ri = (e, t, r) => {
    if (!(e instanceof t)) {
      throw TypeError(`Incorrect ${r ? r + " " : ""}invocation`);
    }
    return e;
  };
  const ro = tr("iterator");
  let ra = false;
  try {
    let rc = 0;
    const rs = {
      next: function () {
        return {
          done: !!rc++,
        };
      },
      return: function () {
        ra = true;
      },
    };
    rs[ro] = function () {
      return this;
    };
    Array.from(rs, function () {
      throw 2;
    });
  } catch (e) {}
  const ru = (e, t) => {
    if (!t && !ra) {
      return false;
    }
    let r = false;
    try {
      const n = {};
      n[ro] = function () {
        return {
          next: function () {
            return {
              done: (r = true),
            };
          },
        };
      };
      e(n);
    } catch (e) {}
    return r;
  };
  const rf = (e, t, r) => {
    let n;
    let i;
    if (
      tM &&
      typeof (n = t.constructor) === "function" &&
      n !== r &&
      E((i = n.prototype)) &&
      i !== r.prototype
    ) {
      tM(e, i);
    }
    return e;
  };
  const rh = (e, t, r) => {
    for (const n in t) {
      P_exports(e, n, t[n], r);
    }
    return e;
  };
  const rl = tr("species");
  const rp = (e) => {
    const t = el(e);
    const r = R.f;
    if (s && t && !t[rl]) {
      r(t, rl, {
        configurable: true,
        get: function () {
          return this;
        },
      });
    }
  };
  const rd = R.f;
  const tJ_fastKey = tY_exports.fastKey;
  const rv = eo;
  const rg = es;
  ((e, t) => {
    const r = "Map".indexOf("Map") !== -1;
    const n = "Map".indexOf("Weak") !== -1;
    const i = r ? "set" : "add";
    const o_Map = globalThis_1.Map;
    const s = o_Map && o_Map.prototype;
    let u = o_Map;
    const f = {};
    const h = (e) => {
      const t = s[e];
      P_exports(
        s,
        e,
        e == "add"
          ? function (e) {
              t.call(this, e === 0 ? 0 : e);
              return this;
            }
          : e == "delete"
            ? function (e) {
                return !(n && !E(e)) && t.call(this, e === 0 ? 0 : e);
              }
            : e == "get"
              ? function (e) {
                  if (n && !E(e)) {
                    return undefined;
                  }
                  return t.call(this, e === 0 ? 0 : e);
                }
              : e == "has"
                ? function (e) {
                    return !(n && !E(e)) && t.call(this, e === 0 ? 0 : e);
                  }
                : function (e, r) {
                    t.call(this, e === 0 ? 0 : e, r);
                    return this;
                  },
      );
    };
    if (
      eC(
        "Map",
        typeof o_Map !== "function" ||
          !(
            n ||
            (s.forEach &&
              !c(() => {
                new o_Map().entries().next();
              }))
          ),
      )
    ) {
      u = t.getConstructor(e, "Map", r, i);
      tY_exports.REQUIRED = true;
    } else if (eC("Map", true)) {
      const l = new u();
      const p = l[i](n ? {} : -0, 1) != l;
      const d = c(() => {
        l.has(1);
      });
      const y = ru((e) => {
        new o_Map(e);
      });
      const v =
        !n &&
        c(() => {
          const e = new o_Map();
          for (let t = 5; t--;) {
            e[i](t, t);
          }
          return !e.has(-0);
        });
      if (!y) {
        u = e(function (e, t) {
          ri(e, u, "Map");
          const n = rf(new o_Map(), e, u);
          if (t != null) {
            rn(t, n[i], {
              that: n,
              AS_ENTRIES: r,
            });
          }
          return n;
        });
        u.prototype = s;
        s.constructor = u;
      }
      if (d || v) {
        h("delete");
        h("has");
        if (r) {
          h("get");
        }
      }
      if (v || p) {
        h(i);
      }
      if (n && s.clear) {
        delete s.clear;
      }
    }
    f.Map = u;
    eU(
      {
        global: true,
        forced: u != o_Map,
      },
      f,
    );
    tR(u, "Map");
    if (!n) {
      t.setStrong(u, "Map", r);
    }
  })(
    function (e) {
      return function () {
        return e(this, arguments.length ? arguments[0] : undefined);
      };
    },
    {
      getConstructor: function (e, t, r, n) {
        var i = e(function (e, o) {
          ri(e, i, t);
          rv(e, {
            type: t,
            index: tl(null),
            first: undefined,
            last: undefined,
            size: 0,
          });
          if (!s) {
            e.size = 0;
          }
          if (o != null) {
            rn(o, e[n], {
              that: e,
              AS_ENTRIES: r,
            });
          }
        });
        const o = rg(t);
        const a = (e, t, r) => {
          let n;
          let i;
          const a = o(e);
          let u = c(e, t);
          if (u) {
            u.value = r;
          } else {
            a.last = u = {
              index: (i = tJ_fastKey(t, true)),
              key: t,
              value: r,
              previous: (n = a.last),
              next: undefined,
              removed: false,
            };
            if (!a.first) {
              a.first = u;
            }
            if (n) {
              n.next = u;
            }
            if (s) {
              a.size++;
            } else {
              e.size++;
            }
            if (i !== "F") {
              a.index[i] = u;
            }
          }
          return e;
        };
        var c = (e, t) => {
          let r;
          const n = o(e);
          const i = tJ_fastKey(t);
          if (i !== "F") {
            return n.index[i];
          }
          for (r = n.first; r; r = r.next) {
            if (r.key == t) {
              return r;
            }
          }
        };
        rh(i.prototype, {
          clear: function () {
            const e = o(this);
            const e_index = e.index;
            for (let r = e.first; r;) {
              r.removed = true;
              if (r.previous) {
                r.previous = r.previous.next = undefined;
              }
              delete e_index[r.index];
              r = r.next;
            }
            e.first = e.last = undefined;
            if (s) {
              e.size = 0;
            } else {
              this.size = 0;
            }
          },
          delete: function (e) {
            const t = o(this);
            const r = c(this, e);
            if (r) {
              const n = r.next;
              const i = r.previous;
              delete t.index[r.index];
              r.removed = true;
              if (i) {
                i.next = n;
              }
              if (n) {
                n.previous = i;
              }
              if (t.first == r) {
                t.first = n;
              }
              if (t.last == r) {
                t.last = i;
              }
              if (s) {
                t.size--;
              } else {
                this.size--;
              }
            }
            return !!r;
          },
          forEach: function (e) {
            for (
              let t,
                r = o(this),
                n = t8(e, arguments.length > 1 ? arguments[1] : undefined, 3);
              (t = t ? t.next : r.first);
            ) {
              n(t.value, t.key, this);
              while (t && t.removed) {
                t = t.previous;
              }
            }
          },
          has: function (e) {
            return !!c(this, e);
          },
        });
        rh(
          i.prototype,
          r
            ? {
                get: function (e) {
                  const t = c(this, e);
                  return t && t.value;
                },
                set: function (e, t) {
                  return a(this, e === 0 ? 0 : e, t);
                },
              }
            : {
                add: function (e) {
                  return a(this, (e = e === 0 ? 0 : e), e);
                },
              },
        );
        if (s) {
          rd(i.prototype, "size", {
            get: function () {
              return o(this).size;
            },
          });
        }
        return i;
      },
      setStrong: function (e, t, r) {
        const n = t + " Iterator";
        const i = rg(t);
        const o = rg(n);
        tD(
          e,
          t,
          function (e, t) {
            rv(this, {
              type: n,
              target: e,
              state: i(e),
              kind: t,
              last: undefined,
            });
          },
          function () {
            const e = o(this);
            const e_kind = e.kind;
            for (var r = e.last; r && r.removed;) {
              r = r.previous;
            }
            if (e.target && (e.last = r = r ? r.next : e.state.first)) {
              if (e_kind == "keys") {
                return {
                  value: r.key,
                  done: false,
                };
              }
              if (e_kind == "values") {
                return {
                  value: r.value,
                  done: false,
                };
              }
              return {
                value: [r.key, r.value],
                done: false,
              };
            }
            e.target = undefined;
            return {
              value: undefined,
              done: true,
            };
          },
          r ? "entries" : "values",
          !r,
          true,
        );
        rp(t);
      },
    },
  );
  if (!t4) {
    P_exports(
      Object.prototype,
      "toString",
      t4
        ? {}.toString
        : function () {
            return "[object " + t7(this) + "]";
          },
      {
        unsafe: true,
      },
    );
  }
  const rb = (e) =>
    function (t, r) {
      let n;
      let i;
      const o = String(g(t));
      const a = ev(r);
      const o_length = o.length;
      if (a < 0 || a >= o_length) {
        if (e) {
          return "";
        }
        return undefined;
      }
      if (
        (n = o.charCodeAt(a)) < 55296 ||
        n > 56319 ||
        a + 1 === o_length ||
        (i = o.charCodeAt(a + 1)) < 56320 ||
        i > 57343
      ) {
        if (e) {
          return o.charAt(a);
        }
        return n;
      }
      if (e) {
        return o.slice(a, a + 2);
      }
      return i - 56320 + ((n - 55296) << 10) + 65536;
    };
  const rE = {
    codeAt: rb(false),
    charAt: rb(true),
  };
  const rE_charAt = rE.charAt;
  const rT = "String Iterator";
  const rS = es(rT);
  tD(
    String,
    "String",
    function (e) {
      eo(this, {
        type: rT,
        string: String(e),
        index: 0,
      });
    },
    function () {
      let e;
      const t = rS(this);
      const t_string = t.string;
      const t_index = t.index;
      if (t_index >= t_string.length) {
        return {
          value: undefined,
          done: true,
        };
      }
      e = rE_charAt(t_string, t_index);
      t.index += e.length;
      return {
        value: e,
        done: false,
      };
    },
  );
  const rA = function () {
    let e;
    const t = B(this);
    const r = t2(t.delete);
    let n = true;
    for (let i = 0, o = arguments.length; i < o; i++) {
      e = r.call(t, arguments[i]);
      n = n && e;
    }
    return !!n;
  };
  eU(
    {
      target: "Map",
      proto: true,
      real: true,
      forced: false,
    },
    {
      deleteAll: function () {
        return rA.apply(this, arguments);
      },
    },
  );
  const r_ = (e) => Map.prototype.entries.call(e);
  eU(
    {
      target: "Map",
      proto: true,
      real: true,
      forced: false,
    },
    {
      every: function (e) {
        const t = B(this);
        const r = r_(t);
        const n = t8(e, arguments.length > 1 ? arguments[1] : undefined, 3);
        return !rn(
          r,
          function (e, r, i) {
            if (!n(r, e, t)) {
              return i();
            }
          },
          {
            AS_ENTRIES: true,
            IS_ITERATOR: true,
            INTERRUPTED: true,
          },
        ).stopped;
      },
    },
  );
  const rx = tr("species");
  const rw = (e, t) => {
    let r;
    const constructor = B(e).constructor;
    if (constructor === undefined || (r = B(constructor)[rx]) == null) {
      return t;
    }
    return t2(r);
  };
  eU(
    {
      target: "Map",
      proto: true,
      real: true,
      forced: false,
    },
    {
      filter: function (e) {
        const t = B(this);
        const r = r_(t);
        const n = t8(e, arguments.length > 1 ? arguments[1] : undefined, 3);
        const i = new (rw(t, el("Map")))();
        const o = t2(i.set);
        rn(
          r,
          function (e, r) {
            if (n(r, e, t)) {
              o.call(i, e, r);
            }
          },
          {
            AS_ENTRIES: true,
            IS_ITERATOR: true,
          },
        );
        return i;
      },
    },
  );
  eU(
    {
      target: "Map",
      proto: true,
      real: true,
      forced: false,
    },
    {
      find: function (e) {
        const t = B(this);
        const r = r_(t);
        const n = t8(e, arguments.length > 1 ? arguments[1] : undefined, 3);
        return rn(
          r,
          function (e, r, i) {
            if (n(r, e, t)) {
              return i(r);
            }
          },
          {
            AS_ENTRIES: true,
            IS_ITERATOR: true,
            INTERRUPTED: true,
          },
        ).result;
      },
    },
  );
  eU(
    {
      target: "Map",
      proto: true,
      real: true,
      forced: false,
    },
    {
      findKey: function (e) {
        const t = B(this);
        const r = r_(t);
        const n = t8(e, arguments.length > 1 ? arguments[1] : undefined, 3);
        return rn(
          r,
          function (e, r, i) {
            if (n(r, e, t)) {
              return i(e);
            }
          },
          {
            AS_ENTRIES: true,
            IS_ITERATOR: true,
            INTERRUPTED: true,
          },
        ).result;
      },
    },
  );
  eU(
    {
      target: "Map",
      proto: true,
      real: true,
      forced: false,
    },
    {
      includes: function (e) {
        return rn(
          r_(B(this)),
          function (t, r, n) {
            if (r === e || (r != r && e != e)) {
              return n();
            }
          },
          {
            AS_ENTRIES: true,
            IS_ITERATOR: true,
            INTERRUPTED: true,
          },
        ).stopped;
      },
    },
  );
  eU(
    {
      target: "Map",
      proto: true,
      real: true,
      forced: false,
    },
    {
      keyOf: function (e) {
        return rn(
          r_(B(this)),
          function (t, r, n) {
            if (r === e) {
              return n(t);
            }
          },
          {
            AS_ENTRIES: true,
            IS_ITERATOR: true,
            INTERRUPTED: true,
          },
        ).result;
      },
    },
  );
  eU(
    {
      target: "Map",
      proto: true,
      real: true,
      forced: false,
    },
    {
      mapKeys: function (e) {
        const t = B(this);
        const r = r_(t);
        const n = t8(e, arguments.length > 1 ? arguments[1] : undefined, 3);
        const i = new (rw(t, el("Map")))();
        const o = t2(i.set);
        rn(
          r,
          function (e, r) {
            o.call(i, n(r, e, t), r);
          },
          {
            AS_ENTRIES: true,
            IS_ITERATOR: true,
          },
        );
        return i;
      },
    },
  );
  eU(
    {
      target: "Map",
      proto: true,
      real: true,
      forced: false,
    },
    {
      mapValues: function (e) {
        const t = B(this);
        const r = r_(t);
        const n = t8(e, arguments.length > 1 ? arguments[1] : undefined, 3);
        const i = new (rw(t, el("Map")))();
        const o = t2(i.set);
        rn(
          r,
          function (e, r) {
            o.call(i, e, n(r, e, t));
          },
          {
            AS_ENTRIES: true,
            IS_ITERATOR: true,
          },
        );
        return i;
      },
    },
  );
  eU(
    {
      target: "Map",
      proto: true,
      real: true,
      forced: false,
    },
    {
      merge: function (e) {
        const t = B(this);
        const r = t2(t.set);
        for (let n = 0; n < arguments.length;) {
          rn(arguments[n++], r, {
            that: t,
            AS_ENTRIES: true,
          });
        }
        return t;
      },
    },
  );
  eU(
    {
      target: "Map",
      proto: true,
      real: true,
      forced: false,
    },
    {
      reduce: function (e) {
        const t = B(this);
        const r = r_(t);
        let n = arguments.length < 2;
        let i = n ? undefined : arguments[1];
        t2(e);
        rn(
          r,
          function (r, o) {
            if (n) {
              n = false;
              i = o;
            } else {
              i = e(i, o, r, t);
            }
          },
          {
            AS_ENTRIES: true,
            IS_ITERATOR: true,
          },
        );
        if (n) {
          throw TypeError("Reduce of empty map with no initial value");
        }
        return i;
      },
    },
  );
  eU(
    {
      target: "Map",
      proto: true,
      real: true,
      forced: false,
    },
    {
      some: function (e) {
        const t = B(this);
        const r = r_(t);
        const n = t8(e, arguments.length > 1 ? arguments[1] : undefined, 3);
        return rn(
          r,
          function (e, r, i) {
            if (n(r, e, t)) {
              return i();
            }
          },
          {
            AS_ENTRIES: true,
            IS_ITERATOR: true,
            INTERRUPTED: true,
          },
        ).stopped;
      },
    },
  );
  eU(
    {
      target: "Map",
      proto: true,
      real: true,
      forced: false,
    },
    {
      update: function (e, t) {
        const r = B(this);
        const arguments_length = arguments.length;
        t2(t);
        const i = r.has(e);
        if (!i && arguments_length < 3) {
          throw TypeError("Updating absent value");
        }
        const o = i
          ? r.get(e)
          : t2(arguments_length > 2 ? arguments[2] : undefined)(e, r);
        r.set(e, t(o, e, r));
        return r;
      },
    },
  );
  const rI = {
    CSSRuleList: 0,
    CSSStyleDeclaration: 0,
    CSSValueList: 0,
    ClientRectList: 0,
    DOMRectList: 0,
    DOMStringList: 0,
    DOMTokenList: 1,
    DataTransferItemList: 0,
    FileList: 0,
    HTMLAllCollection: 0,
    HTMLCollection: 0,
    HTMLFormElement: 0,
    HTMLSelectElement: 0,
    MediaList: 0,
    MimeTypeArray: 0,
    NamedNodeMap: 0,
    NodeList: 1,
    PaintRequestList: 0,
    Plugin: 0,
    PluginArray: 0,
    SVGLengthList: 0,
    SVGNumberList: 0,
    SVGPathSegList: 0,
    SVGPointList: 0,
    SVGStringList: 0,
    SVGTransformList: 0,
    SourceBufferList: 0,
    StyleSheetList: 0,
    TextTrackCueList: 0,
    TextTrackList: 0,
    TouchList: 0,
  };
  const rk = tr("iterator");
  const rR = tr("toStringTag");
  const tK_values = tK.values;
  for (const rC in rI) {
    const rM = globalThis_1[rC];
    const rP = rM && rM.prototype;
    if (rP) {
      if (rP[rk] !== tK_values) {
        try {
          M(rP, rk, tK_values);
        } catch (e) {
          rP[rk] = tK_values;
        }
      }
      if (!rP[rR]) {
        M(rP, rR, rC);
      }
      if (rI[rC]) {
        for (const rL in tK) {
          if (rP[rL] !== tK[rL]) {
            try {
              M(rP, rL, tK[rL]);
            } catch (e) {
              rP[rL] = tK[rL];
            }
          }
        }
      }
    }
  }
  const rO = Array.isArray || ((e) => d(e) == "Array");
  const rH = tr("species");
  const rN = function (e, t) {
    let r;
    if (rO(e)) {
      if (
        typeof (r = e.constructor) === "function" &&
        (r === Array || rO(r.prototype))
      ) {
        r = undefined;
      } else if (E(r) && (r = r[rH]) === null) {
        r = undefined;
      }
    }
    return new (r === undefined ? Array : r)(t === 0 ? 0 : t);
  };
  const push = [].push;
  const rD = (e) => {
    const t = e == 1;
    const r = e == 2;
    const n = e == 3;
    const i = e == 4;
    const o = e == 6;
    const a = e == 7;
    const c = e == 5 || o;
    return function (s, u, f, h) {
      let l;
      let p;
      const d = T(s);
      const y = v(d);
      const g = t8(u, f, 3);
      for (
        var b = eb(y.length),
          E = 0,
          m = h || rN,
          S = t ? m(s, b) : r || a ? m(s, 0) : undefined;
        b > E;
        E++
      ) {
        if ((c || E in y) && ((p = g((l = y[E]), E, d)), e)) {
          if (t) {
            S[E] = p;
          } else if (p) {
            switch (e) {
              case 3:
                return true;
              case 5:
                return l;
              case 6:
                return E;
              case 2:
                push.call(S, l);
            }
          } else {
            switch (e) {
              case 4:
                return false;
              case 7:
                push.call(S, l);
            }
          }
        }
      }
      if (o) {
        return -1;
      }
      if (n || i) {
        return i;
      }
      return S;
    };
  };
  const rG = {
    forEach: rD(0),
    map: rD(1),
    filter: rD(2),
    some: rD(3),
    every: rD(4),
    find: rD(5),
    findIndex: rD(6),
    filterOut: rD(7),
  };
  const rj = tr("species");
  const rF = (e) =>
    e5 >= 51 ||
    !c(() => {
      const t = [];
      (t.constructor = {})[rj] = function () {
        return {
          foo: 1,
        };
      };
      return t[e](Boolean).foo !== 1;
    });
  const rG_map = rG.map;
  eU(
    {
      target: "Array",
      proto: true,
      forced: !rF("map"),
    },
    {
      map: function (e) {
        return rG_map(this, e, arguments.length > 1 ? arguments[1] : undefined);
      },
    },
  );
  eU(
    {
      target: "Object",
      stat: true,
      forced: c(() => {
        tn(1);
      }),
    },
    {
      keys: function (e) {
        return tn(T(e));
      },
    },
  );
  const rY = (e, t, r) => {
    const n = m(t);
    if (n in e) {
      R.f(e, n, l(0, r));
    } else {
      e[n] = r;
    }
  };
  const rV = tr("isConcatSpreadable");
  const rX = "Maximum allowed index exceeded";
  const rW =
    e5 >= 51 ||
    !c(() => {
      const e = [];
      e[rV] = false;
      return e.concat()[0] !== e;
    });
  const rz = rF("concat");
  const rq = (e) => {
    if (!E(e)) {
      return false;
    }
    const t = e[rV];
    if (t !== undefined) {
      return !!t;
    }
    return rO(e);
  };
  eU(
    {
      target: "Array",
      proto: true,
      forced: !rW || !rz,
    },
    {
      concat: function (e) {
        let t;
        let r;
        let n;
        let i;
        let o;
        const a = T(this);
        const c = rN(a, 0);
        let s = 0;
        t = -1;
        for (n = arguments.length; t < n; t++) {
          if (rq((o = t === -1 ? a : arguments[t]))) {
            if (s + (i = eb(o.length)) > 9007199254740991) {
              throw TypeError(rX);
            }
            for (r = 0; r < i; r++, s++) {
              if (r in o) {
                rY(c, s, o[r]);
              }
            }
          } else {
            if (s >= 9007199254740991) {
              throw TypeError(rX);
            }
            rY(c, s++, o);
          }
        }
        c.length = s;
        return c;
      },
    },
  );
  let rZ;
  let r$;
  let rJ;
  const o_Promise = globalThis_1.Promise;
  const r0 = /(?:iphone|ipod|ipad).*applewebkit/i.test(e1);
  const r1 = d(globalThis_1.process) == "process";
  const o_location = globalThis_1.location;
  let o_setImmediate = globalThis_1.setImmediate;
  let o_clearImmediate = globalThis_1.clearImmediate;
  const o_process_1 = globalThis_1.process;
  const o_MessageChannel = globalThis_1.MessageChannel;
  const o_Dispatch = globalThis_1.Dispatch;
  let r7 = 0;
  const r9 = {};
  const ne = "onreadystatechange";
  const nt = (e) => {
    if (r9.hasOwnProperty(e)) {
      const t = r9[e];
      delete r9[e];
      t();
    }
  };
  const nr = (e) =>
    function () {
      nt(e);
    };
  const nn = function (e) {
    nt(e.data);
  };
  const ni = function (e) {
    globalThis_1.postMessage(
      e + "",
      o_location.protocol + "//" + o_location.host,
    );
  };
  if (!(o_setImmediate && o_clearImmediate)) {
    o_setImmediate = function (e) {
      const t = [];
      for (let r = 1; arguments.length > r;) {
        t.push(arguments[r++]);
      }
      r9[++r7] = function () {
        (typeof e === "function" ? e : Function(e)).apply(undefined, t);
      };
      rZ(r7);
      return r7;
    };
    o_clearImmediate = function (e) {
      delete r9[e];
    };
    if (r1) {
      rZ = function (e) {
        o_process_1.nextTick(nr(e));
      };
    } else if (o_Dispatch && o_Dispatch.now) {
      rZ = function (e) {
        o_Dispatch.now(nr(e));
      };
    } else if (o_MessageChannel && !r0) {
      rJ = (r$ = new o_MessageChannel()).port2;
      r$.port1.onmessage = nn;
      rZ = t8(rJ.postMessage, rJ, 1);
    } else if (
      globalThis_1.addEventListener &&
      typeof postMessage === "function" &&
      !globalThis_1.importScripts &&
      o_location &&
      o_location.protocol !== "file:" &&
      !c(ni)
    ) {
      rZ = ni;
      globalThis_1.addEventListener("message", nn, false);
    } else {
      rZ =
        ne in w("script")
          ? function (e) {
              to.appendChild(w("script"))[ne] = function () {
                to.removeChild(this);
                nt(e);
              };
            }
          : function (e) {
              setTimeout(nr(e), 0);
            };
    }
  }
  let no;
  let na;
  let nc;
  let ns;
  let nu;
  let nf;
  let nh;
  let nl;
  const np = o_setImmediate;
  const nd = /web0s(?!.*chrome)/i.test(e1);
  const ny = a.f;
  const nv =
    globalThis_1.MutationObserver || globalThis_1.WebKitMutationObserver;
  const o_document_1 = globalThis_1.document;
  const o_process_2 = globalThis_1.process;
  const o_Promise_1 = globalThis_1.Promise;
  const nm = ny(globalThis_1, "queueMicrotask");
  const nT = nm && nm.value;
  if (!nT) {
    no = function () {
      let e;
      let t;
      for (r1 && (e = o_process_2.domain) && e.exit(); na;) {
        t = na.fn;
        na = na.next;
        try {
          t();
        } catch (error) {
          if (na) {
            ns();
          } else {
            nc = undefined;
          }
          throw error;
        }
      }
      nc = undefined;
      if (e) {
        e.enter();
      }
    };
    if (r0 || r1 || nd || !nv || !o_document_1) {
      if (o_Promise_1 && o_Promise_1.resolve) {
        nh = o_Promise_1.resolve(undefined);
        nh.constructor = o_Promise_1;
        nl = nh.then;
        ns = function () {
          nl.call(nh, no);
        };
      } else {
        ns = r1
          ? function () {
              o_process_2.nextTick(no);
            }
          : function () {
              np.call(globalThis_1, no);
            };
      }
    } else {
      nu = true;
      nf = o_document_1.createTextNode("");
      new nv(no).observe(nf, {
        characterData: true,
      });
      ns = function () {
        nf.data = nu = !nu;
      };
    }
  }
  const nS =
    nT ||
    ((fn) => {
      const t = {
        fn,
        next: undefined,
      };
      if (nc) {
        nc.next = t;
      }
      if (!na) {
        na = t;
        ns();
      }
      nc = t;
    });
  const nA = {};
  const n_ = function (e) {
    let t;
    let r;
    this.promise = new e(function (e, n) {
      if (t !== undefined || r !== undefined) {
        throw TypeError("Bad Promise constructor");
      }
      t = e;
      r = n;
    });
    this.resolve = t2(t);
    this.reject = t2(r);
  };
  nA.f = function (e) {
    return new n_(e);
  };
  let nx;
  let nw;
  let nI;
  let nk;
  const nR = typeof window === "object";
  const nB = (e, t) => {
    B(e);
    if (E(t) && t.constructor === e) {
      return t;
    }
    const r = nA.f(e);
    r.resolve(t);
    return r.promise;
  };
  const nC = function (e, reason) {
    const o_console = globalThis_1.console;
    if (o_console && o_console.error) {
      if (arguments.length == 1) {
        o_console.error(e);
      } else {
        o_console.error(e, reason);
      }
    }
  };
  const nM = (e) => {
    try {
      return {
        error: false,
        value: e(),
      };
    } catch (error) {
      return {
        error: true,
        value: error,
      };
    }
  };
  const nP = tr("species");
  const nL = "Promise";
  const nO = ea;
  const nH = es(nL);
  const nN = o_Promise && o_Promise.prototype;
  let Promise_1 = o_Promise;
  let nD = nN;
  const o_TypeError = globalThis_1.TypeError;
  const o_document_2 = globalThis_1.document;
  const o_process_3 = globalThis_1.process;
  let nK = nA.f;
  const nY = nK;
  const nV = !!(
    o_document_2 &&
    o_document_2.createEvent &&
    globalThis_1.dispatchEvent
  );
  const nX = typeof PromiseRejectionEvent === "function";
  const nW = "unhandledrejection";
  let nz = false;
  const nq = eC(nL, function () {
    const e = H_inspectSource(Promise_1) !== String(Promise_1);
    if (!e && e5 === 66) {
      return true;
    }
    if (e5 >= 51 && /native code/.test(Promise_1)) {
      return false;
    }
    const t = new Promise_1(function (e) {
      e(1);
    });
    const r = function (e) {
      e(
        function () {},
        function () {},
      );
    };
    (t.constructor = {})[nP] = r;
    return !(nz = t.then(() => {}) instanceof r) || (!e && nR && !nX);
  });
  const forced =
    nq ||
    !ru((e) => {
      Promise_1.all(e).catch(() => {});
    });
  const n$ = (e) => {
    let t;
    return !(!E(e) || typeof (t = e.then) !== "function") && t;
  };
  const nJ = (e, t) => {
    if (!e.notified) {
      e.notified = true;
      const r = e.reactions;
      nS(function () {
        const e_value = e.value;
        const i = e.state == 1;
        for (let o = 0; r.length > o;) {
          let a;
          let c;
          let s;
          const u = r[o++];
          const f = i ? u.ok : u.fail;
          const h = u.resolve;
          const l = u.reject;
          const p = u.domain;
          try {
            if (f) {
              if (!i) {
                if (e.rejection === 2) {
                  n2(e);
                }
                e.rejection = 1;
              }
              if (f === true) {
                a = e_value;
              } else {
                if (p) {
                  p.enter();
                }
                a = f(e_value);
                if (p) {
                  p.exit();
                  s = true;
                }
              }
              if (a === u.promise) {
                l(o_TypeError("Promise-chain cycle"));
              } else if ((c = n$(a))) {
                c.call(a, h, l);
              } else {
                h(a);
              }
            } else {
              l(e_value);
            }
          } catch (error) {
            if (p && !s) {
              p.exit();
            }
            l(error);
          }
        }
        e.reactions = [];
        e.notified = false;
        if (t && !e.rejection) {
          n0(e);
        }
      });
    }
  };
  const nQ = (e, promise, reason) => {
    let n;
    let i;
    if (nV) {
      n = o_document_2.createEvent("Event");
      n.promise = promise;
      n.reason = reason;
      n.initEvent(e, false, true);
      globalThis_1.dispatchEvent(n);
    } else {
      n = {
        promise,
        reason,
      };
    }
    if (!nX && (i = globalThis_1["on" + e])) {
      i(n);
    } else if (e === nW) {
      nC("Unhandled promise rejection", reason);
    }
  };
  var n0 = (e) => {
    np.call(globalThis_1, function () {
      let t;
      const e_facade = e.facade;
      const e_value = e.value;
      if (
        n1(e) &&
        ((t = nM(() => {
          if (r1) {
            o_process_3.emit("unhandledRejection", e_value, e_facade);
          } else {
            nQ(nW, e_facade, e_value);
          }
        })),
        (e.rejection = r1 || n1(e) ? 2 : 1),
        t.error)
      ) {
        throw t.value;
      }
    });
  };
  var n1 = (e) => e.rejection !== 1 && !e.parent;
  var n2 = (e) => {
    np.call(globalThis_1, function () {
      const e_facade = e.facade;
      if (r1) {
        o_process_3.emit("rejectionHandled", e_facade);
      } else {
        nQ("rejectionhandled", e_facade, e.value);
      }
    });
  };
  const n8 = (e, t, r) =>
    function (n) {
      e(t, n, r);
    };
  const n3 = function (e, t, r) {
    if (!e.done) {
      e.done = true;
      if (r) {
        e = r;
      }
      e.value = t;
      e.state = 2;
      nJ(e, true);
    }
  };
  const n4 = function (e, t, r) {
    if (!e.done) {
      e.done = true;
      if (r) {
        e = r;
      }
      try {
        if (e.facade === t) {
          throw o_TypeError("Promise can't be resolved itself");
        }
        const n = n$(t);
        if (n) {
          nS(function () {
            const r = {
              done: false,
            };
            try {
              n.call(t, n8(n4, r, e), n8(n3, r, e));
            } catch (error) {
              n3(r, error, e);
            }
          });
        } else {
          e.value = t;
          e.state = 1;
          nJ(e, false);
        }
      } catch (error) {
        n3(
          {
            done: false,
          },
          error,
          e,
        );
      }
    }
  };
  if (
    nq &&
    ((nD = (Promise_1 = function (e) {
      ri(this, Promise_1, nL);
      t2(e);
      nx.call(this);
      const t = nO(this);
      try {
        e(n8(n4, t), n8(n3, t));
      } catch (error) {
        n3(t, error);
      }
    }).prototype),
    ((nx = function (e) {
      eo(this, {
        type: nL,
        done: false,
        notified: false,
        parent: false,
        reactions: [],
        rejection: false,
        state: 0,
        value: undefined,
      });
    }).prototype = rh(nD, {
      then: function (e, t) {
        const r = nH(this);
        const n = nK(rw(this, Promise_1));
        n.ok = typeof e !== "function" || e;
        n.fail = typeof t === "function" && t;
        n.domain = r1 ? o_process_3.domain : undefined;
        r.parent = true;
        r.reactions.push(n);
        if (r.state != 0) {
          nJ(r, false);
        }
        return n.promise;
      },
      catch: function (e) {
        return this.then(undefined, e);
      },
    })),
    (nw = function () {
      const e = new nx();
      const t = nO(e);
      this.promise = e;
      this.resolve = n8(n4, t);
      this.reject = n8(n3, t);
    }),
    (nA.f = nK =
      function (e) {
        if (e === Promise_1 || e === nI) {
          return new nw();
        }
        return nY(e);
      }),
    typeof o_Promise === "function" && nN !== Object.prototype)
  ) {
    nk = nN.then;
    if (!nz) {
      P_exports(
        nN,
        "then",
        function (e, t) {
          const r = this;
          return new Promise_1(function (e, t) {
            nk.call(r, e, t);
          }).then(e, t);
        },
        {
          unsafe: true,
        },
      );
      P_exports(nN, "catch", nD.catch, {
        unsafe: true,
      });
    }
    try {
      delete nN.constructor;
    } catch (e) {}
    if (tM) {
      tM(nN, nD);
    }
  }
  eU(
    {
      global: true,
      wrap: true,
      forced: nq,
    },
    {
      Promise: Promise_1,
    },
  );
  tR(Promise_1, nL, false);
  rp(nL);
  nI = el(nL);
  eU(
    {
      target: nL,
      stat: true,
      forced: nq,
    },
    {
      reject: function (e) {
        const t = nK(this);
        t.reject.call(undefined, e);
        return t.promise;
      },
    },
  );
  eU(
    {
      target: nL,
      stat: true,
      forced: nq,
    },
    {
      resolve: function (e) {
        return nB(this, e);
      },
    },
  );
  eU(
    {
      target: nL,
      stat: true,
      forced,
    },
    {
      all: function (e) {
        const t = this;
        const r = nK(t);
        const r_resolve = r.resolve;
        const r_reject = r.reject;
        const o = nM(() => {
          const r = t2(t.resolve);
          const o = [];
          let a = 0;
          let c = 1;
          rn(e, function (e) {
            const s = a++;
            let u = false;
            o.push(undefined);
            c++;
            r.call(t, e).then((e) => {
              if (!u) {
                u = true;
                o[s] = e;
                if (!--c) {
                  r_resolve(o);
                }
              }
            }, r_reject);
          });
          if (!--c) {
            r_resolve(o);
          }
        });
        if (o.error) {
          r_reject(o.value);
        }
        return r.promise;
      },
      race: function (e) {
        const t = this;
        const r = nK(t);
        const r_reject = r.reject;
        const i = nM(() => {
          const i = t2(t.resolve);
          rn(e, function (e) {
            i.call(t, e).then(r.resolve, r_reject);
          });
        });
        if (i.error) {
          r_reject(i.value);
        }
        return r.promise;
      },
    },
  );
  let n5;
  const n6 =
    typeof ArrayBuffer !== "undefined" && typeof DataView !== "undefined";
  const n7 = R.f;
  const o_Int8Array = globalThis_1.Int8Array;
  const ie = o_Int8Array && o_Int8Array.prototype;
  const o_Uint8ClampedArray = globalThis_1.Uint8ClampedArray;
  const ir = o_Uint8ClampedArray && o_Uint8ClampedArray.prototype;
  let TypedArray = o_Int8Array && tS(o_Int8Array);
  let TypedArrayPrototype = ie && tS(ie);
  const Object_prototype_1 = Object.prototype;
  const ia_isPrototypeOf = Object_prototype_1.isPrototypeOf;
  const is = tr("toStringTag");
  const iu = z("TYPED_ARRAY_TAG");
  let NATIVE_ARRAY_BUFFER_VIEWS =
    n6 && !!tM && t7(globalThis_1.opera) !== "Opera";
  let il = false;
  const ip = {
    Int8Array: 1,
    Uint8Array: 1,
    Uint8ClampedArray: 1,
    Int16Array: 2,
    Uint16Array: 2,
    Int32Array: 4,
    Uint32Array: 4,
    Float32Array: 4,
    Float64Array: 8,
  };
  const id = {
    BigInt64Array: 8,
    BigUint64Array: 8,
  };
  const isTypedArray = function (e) {
    if (!E(e)) {
      return false;
    }
    const t = t7(e);
    return A(ip, t) || A(id, t);
  };
  for (n5 in ip) {
    if (!globalThis_1[n5]) {
      NATIVE_ARRAY_BUFFER_VIEWS = false;
    }
  }
  if (
    (!NATIVE_ARRAY_BUFFER_VIEWS ||
      typeof TypedArray !== "function" ||
      TypedArray === Function.prototype) &&
    ((TypedArray = function () {
      throw TypeError("Incorrect invocation");
    }),
    NATIVE_ARRAY_BUFFER_VIEWS)
  ) {
    for (n5 in ip) {
      if (globalThis_1[n5]) {
        tM(globalThis_1[n5], TypedArray);
      }
    }
  }
  if (
    (!NATIVE_ARRAY_BUFFER_VIEWS ||
      !TypedArrayPrototype ||
      TypedArrayPrototype === Object_prototype_1) &&
    ((TypedArrayPrototype = TypedArray.prototype), NATIVE_ARRAY_BUFFER_VIEWS)
  ) {
    for (n5 in ip) {
      if (globalThis_1[n5]) {
        tM(globalThis_1[n5].prototype, TypedArrayPrototype);
      }
    }
  }
  if (NATIVE_ARRAY_BUFFER_VIEWS && tS(ir) !== TypedArrayPrototype) {
    tM(ir, TypedArrayPrototype);
  }
  if (s && !A(TypedArrayPrototype, is)) {
    il = true;
    n7(TypedArrayPrototype, is, {
      get: function () {
        if (E(this)) {
          return this[iu];
        }
      },
    });
    for (n5 in ip) {
      if (globalThis_1[n5]) {
        M(globalThis_1[n5], iu, n5);
      }
    }
  }
  const iv = {
    NATIVE_ARRAY_BUFFER_VIEWS,
    TYPED_ARRAY_TAG: il && iu,
    aTypedArray: function (e) {
      if (isTypedArray(e)) {
        return e;
      }
      throw TypeError("Target is not a typed array");
    },
    aTypedArrayConstructor: function (e) {
      if (tM) {
        if (ia_isPrototypeOf.call(TypedArray, e)) {
          return e;
        }
      } else {
        for (const t in ip) {
          if (A(ip, n5)) {
            const r = globalThis_1[t];
            if (r && (e === r || ia_isPrototypeOf.call(r, e))) {
              return e;
            }
          }
        }
      }
      throw TypeError("Target is not a typed array constructor");
    },
    exportTypedArrayMethod: function (e, t, r) {
      if (s) {
        if (r) {
          for (const n in ip) {
            const i = globalThis_1[n];
            if (i && A(i.prototype, e)) {
              try {
                delete i.prototype[e];
              } catch (e) {}
            }
          }
        }
        if (!(TypedArrayPrototype[e] && !r)) {
          P_exports(
            TypedArrayPrototype,
            e,
            r ? t : (NATIVE_ARRAY_BUFFER_VIEWS && ie[e]) || t,
          );
        }
      }
    },
    exportTypedArrayStaticMethod: function (e, t, r) {
      let n;
      let i;
      if (s) {
        if (tM) {
          if (r) {
            for (n in ip) {
              if ((i = globalThis_1[n]) && A(i, e)) {
                try {
                  delete i[e];
                } catch (e) {}
              }
            }
          }
          if (TypedArray[e] && !r) {
            return;
          }
          try {
            return P_exports(
              TypedArray,
              e,
              r ? t : (NATIVE_ARRAY_BUFFER_VIEWS && TypedArray[e]) || t,
            );
          } catch (e) {}
        }
        for (n in ip) {
          if ((i = globalThis_1[n]) && (!i[e] || r)) {
            P_exports(i, e, t);
          }
        }
      }
    },
    isTypedArray,
    TypedArray,
    TypedArrayPrototype,
  };
  const iv_NATIVE_ARRAY_BUFFER_VIEWS = iv.NATIVE_ARRAY_BUFFER_VIEWS;
  const o_ArrayBuffer = globalThis_1.ArrayBuffer;
  const o_Int8Array_1 = globalThis_1.Int8Array;
  const im =
    !iv_NATIVE_ARRAY_BUFFER_VIEWS ||
    !c(() => {
      o_Int8Array_1(1);
    }) ||
    !c(() => {
      new o_Int8Array_1(-1);
    }) ||
    !ru((e) => {
      new o_Int8Array_1();
      new o_Int8Array_1(null);
      new o_Int8Array_1(1.5);
      new o_Int8Array_1(e);
    }, true) ||
    c(() => new o_Int8Array_1(new o_ArrayBuffer(2), 1, undefined).length !== 1);
  const iv_aTypedArrayConstructor = iv.aTypedArrayConstructor;
  iv.exportTypedArrayStaticMethod(
    "of",
    function () {
      for (
        var e = 0,
          t = arguments.length,
          r = new (iv_aTypedArrayConstructor(this))(t);
        t > e;
      ) {
        r[e] = arguments[e++];
      }
      return r;
    },
    im,
  );
  const iS = {
    exports: {},
  };
  const iA = (e) => {
    if (e === undefined) {
      return 0;
    }
    const t = ev(e);
    const r = eb(t);
    if (t !== r) {
      throw RangeError("Wrong length or index");
    }
    return r;
  };
  const Math_abs = Math.abs;
  const Math_pow = Math.pow;
  const Math_floor_1 = Math.floor;
  const Math_log = Math.log;
  const Math_LN2 = Math.LN2;
  const iR = function (e) {
    const t = T(this);
    const r = eb(t.length);
    const arguments_length = arguments.length;
    for (
      let i = eT(arguments_length > 1 ? arguments[1] : undefined, r),
        o = arguments_length > 2 ? arguments[2] : undefined,
        a = o === undefined ? r : eT(o, r);
      a > i;
    ) {
      t[i++] = e;
    }
    return t;
  };
  const iB = ep.f;
  const iC = R.f;
  const iM = ea;
  const iP = eo;
  const iL = "ArrayBuffer";
  const iO = "DataView";
  const iH = "prototype";
  const iN = "Wrong index";
  const iU = globalThis_1[iL];
  let iD = iU;
  let DataView_1 = globalThis_1[iO];
  const ij = DataView_1 && DataView_1[iH];
  const Object_prototype_2 = Object.prototype;
  const o_RangeError = globalThis_1.RangeError;
  const iY = (e, t, r) => {
    let n;
    let i;
    let o;
    const a = Array(r);
    let c = 8 * r - t - 1;
    const s = (1 << c) - 1;
    const u = s >> 1;
    const f = t === 23 ? Math_pow(2, -24) - Math_pow(2, -77) : 0;
    const h = +(e < 0 || (e === 0 && 1 / e < 0));
    let l = 0;
    for (
      (e = Math_abs(e)) != e || Infinity === e
        ? ((i = +(e != e)), (n = s))
        : ((n = Math_floor_1(Math_log(e) / Math_LN2)),
          e * (o = Math_pow(2, -n)) < 1 && (n--, (o *= 2)),
          (e += n + u >= 1 ? f / o : f * Math_pow(2, 1 - u)) * o >= 2 &&
            (n++, (o /= 2)),
          n + u >= s
            ? ((i = 0), (n = s))
            : n + u >= 1
              ? ((i = (e * o - 1) * Math_pow(2, t)), (n += u))
              : ((i = e * Math_pow(2, u - 1) * Math_pow(2, t)), (n = 0)));
      t >= 8;
      a[l++] = 255 & i, i /= 256, t -= 8
    );
    n = (n << t) | i;
    for (c += t; c > 0; a[l++] = 255 & n, n /= 256, c -= 8);
    a[--l] |= 128 * h;
    return a;
  };
  const iV = (e, t) => {
    let r;
    const e_length = e.length;
    const i = 8 * e_length - t - 1;
    const o = (1 << i) - 1;
    const a = o >> 1;
    let c = i - 7;
    let s = e_length - 1;
    let u = e[s--];
    let f = 127 & u;
    for (u >>= 7; c > 0; f = 256 * f + e[s], s--, c -= 8);
    r = f & ((1 << -c) - 1);
    f >>= -c;
    for (c += t; c > 0; r = 256 * r + e[s], s--, c -= 8);
    if (f === 0) {
      f = 1 - a;
    } else {
      if (f === o) {
        if (r) {
          return 0 / 0;
        }
        if (u) {
          return -Infinity;
        }
        return Infinity;
      }
      r += Math_pow(2, t);
      f -= a;
    }
    return (u ? -1 : 1) * r * Math_pow(2, f - t);
  };
  const iX = function (e) {
    return [255 & e];
  };
  const iW = function (e) {
    return [255 & e, (e >> 8) & 255];
  };
  const iz = function (e) {
    return [255 & e, (e >> 8) & 255, (e >> 16) & 255, (e >> 24) & 255];
  };
  const iq = (e) => (e[3] << 24) | (e[2] << 16) | (e[1] << 8) | e[0];
  const iZ = function (e) {
    return iY(e, 23, 4);
  };
  const i$ = function (e) {
    return iY(e, 52, 8);
  };
  const iJ = (e, t) => {
    iC(e[iH], t, {
      get: function () {
        return iM(this)[t];
      },
    });
  };
  const iQ = (e, t, r, n) => {
    const i = iA(r);
    const o = iM(e);
    if (i + t > o.byteLength) {
      throw o_RangeError(iN);
    }
    const bytes = iM(o.buffer).bytes;
    const c = i + o.byteOffset;
    const s = bytes.slice(c, c + t);
    if (n) {
      return s;
    }
    return s.reverse();
  };
  const i0 = (e, t, r, n, i, o) => {
    const a = iA(r);
    const c = iM(e);
    if (a + t > c.byteLength) {
      throw o_RangeError(iN);
    }
    const bytes = iM(c.buffer).bytes;
    const u = a + c.byteOffset;
    const f = n(+i);
    for (let h = 0; h < t; h++) {
      bytes[u + h] = f[o ? h : t - h - 1];
    }
  };
  if (n6) {
    if (
      !c(() => {
        iU(1);
      }) ||
      !c(() => {
        new iU(-1);
      }) ||
      c(() => {
        new iU();
        new iU(1.5);
        new iU(0 / 0);
        return iU.name != iL;
      })
    ) {
      let i1;
      const i2 = ((iD = function (e) {
        ri(this, iD);
        return new iU(iA(e));
      })[iH] = iU[iH]);
      for (let i8 = iB(iU), i3 = 0; i8.length > i3;) {
        if (!((i1 = i8[i3++]) in iD)) {
          M(iD, i1, iU[i1]);
        }
      }
      i2.constructor = iD;
    }
    if (tM && tS(ij) !== Object_prototype_2) {
      tM(ij, Object_prototype_2);
    }
    const i4 = new DataView_1(new iD(2));
    const i5 = ij.setInt8;
    i4.setInt8(0, 2147483648);
    i4.setInt8(1, 2147483649);
    if (!(!i4.getInt8(0) && i4.getInt8(1))) {
      rh(
        ij,
        {
          setInt8: function (e, t) {
            i5.call(this, e, (t << 24) >> 24);
          },
          setUint8: function (e, t) {
            i5.call(this, e, (t << 24) >> 24);
          },
        },
        {
          unsafe: true,
        },
      );
    }
  } else {
    iD = function (e) {
      ri(this, iD, iL);
      const t = iA(e);
      iP(this, {
        bytes: iR.call(Array(t), 0),
        byteLength: t,
      });
      if (!s) {
        this.byteLength = t;
      }
    };
    DataView_1 = function (e, t, r) {
      ri(this, DataView_1, iO);
      ri(e, iD, iO);
      const byteLength = iM(e).byteLength;
      const i = ev(t);
      if (i < 0 || i > byteLength) {
        throw o_RangeError("Wrong offset");
      }
      if (i + (r = r === undefined ? byteLength - i : eb(r)) > byteLength) {
        throw o_RangeError("Wrong length");
      }
      iP(this, {
        buffer: e,
        byteLength: r,
        byteOffset: i,
      });
      if (!s) {
        this.buffer = e;
        this.byteLength = r;
        this.byteOffset = i;
      }
    };
    if (s) {
      iJ(iD, "byteLength");
      iJ(DataView_1, "buffer");
      iJ(DataView_1, "byteLength");
      iJ(DataView_1, "byteOffset");
    }
    rh(DataView_1[iH], {
      getInt8: function (e) {
        return (iQ(this, 1, e)[0] << 24) >> 24;
      },
      getUint8: function (e) {
        return iQ(this, 1, e)[0];
      },
      getInt16: function (e) {
        const t = iQ(
          this,
          2,
          e,
          arguments.length > 1 ? arguments[1] : undefined,
        );
        return (((t[1] << 8) | t[0]) << 16) >> 16;
      },
      getUint16: function (e) {
        const t = iQ(
          this,
          2,
          e,
          arguments.length > 1 ? arguments[1] : undefined,
        );
        return (t[1] << 8) | t[0];
      },
      getInt32: function (e) {
        return iq(
          iQ(this, 4, e, arguments.length > 1 ? arguments[1] : undefined),
        );
      },
      getUint32: function (e) {
        return (
          iq(
            iQ(this, 4, e, arguments.length > 1 ? arguments[1] : undefined),
          ) >>> 0
        );
      },
      getFloat32: function (e) {
        return iV(
          iQ(this, 4, e, arguments.length > 1 ? arguments[1] : undefined),
          23,
        );
      },
      getFloat64: function (e) {
        return iV(
          iQ(this, 8, e, arguments.length > 1 ? arguments[1] : undefined),
          52,
        );
      },
      setInt8: function (e, t) {
        i0(this, 1, e, iX, t);
      },
      setUint8: function (e, t) {
        i0(this, 1, e, iX, t);
      },
      setInt16: function (e, t) {
        i0(this, 2, e, iW, t, arguments.length > 2 ? arguments[2] : undefined);
      },
      setUint16: function (e, t) {
        i0(this, 2, e, iW, t, arguments.length > 2 ? arguments[2] : undefined);
      },
      setInt32: function (e, t) {
        i0(this, 4, e, iz, t, arguments.length > 2 ? arguments[2] : undefined);
      },
      setUint32: function (e, t) {
        i0(this, 4, e, iz, t, arguments.length > 2 ? arguments[2] : undefined);
      },
      setFloat32: function (e, t) {
        i0(this, 4, e, iZ, t, arguments.length > 2 ? arguments[2] : undefined);
      },
      setFloat64: function (e, t) {
        i0(this, 8, e, i$, t, arguments.length > 2 ? arguments[2] : undefined);
      },
    });
  }
  tR(iD, iL);
  tR(DataView_1, iO);
  const i6 = {
    ArrayBuffer: iD,
    DataView: DataView_1,
  };
  const i7 = (e) => {
    const t = ev(e);
    if (t < 0) {
      throw RangeError("The argument can't be less than 0");
    }
    return t;
  };
  const i9 = (e, t) => {
    const r = i7(e);
    if (r % t) {
      throw RangeError("Wrong offset");
    }
    return r;
  };
  const iv_aTypedArrayConstructor_1 = iv.aTypedArrayConstructor;
  const ot = ep.f;
  const or = function (e) {
    let t;
    let r;
    let n;
    let i;
    let o;
    let a;
    let c = T(e);
    const arguments_length = arguments.length;
    let u = arguments_length > 1 ? arguments[1] : undefined;
    const f = u !== undefined;
    const h = re(c);
    if (h != null && !t1(h)) {
      a = (o = h.call(c)).next;
      for (c = []; !(i = a.call(o)).done;) {
        c.push(i.value);
      }
    }
    if (f && arguments_length > 2) {
      u = t8(u, arguments[2], 2);
    }
    r = eb(c.length);
    n = new (iv_aTypedArrayConstructor_1(this))(r);
    for (t = 0; r > t; t++) {
      n[t] = f ? u(c[t], t) : c[t];
    }
    return n;
  };
  const rG_forEach = rG.forEach;
  const oi = ea;
  const oo = R.f;
  const oa = a.f;
  const Math_round = Math.round;
  const o_RangeError_1 = globalThis_1.RangeError;
  const i6_ArrayBuffer = i6.ArrayBuffer;
  const i6_DataView = i6.DataView;
  const iv_NATIVE_ARRAY_BUFFER_VIEWS_1 = iv.NATIVE_ARRAY_BUFFER_VIEWS;
  const iv_TYPED_ARRAY_TAG = iv.TYPED_ARRAY_TAG;
  const iv_TypedArray = iv.TypedArray;
  const iv_TypedArrayPrototype = iv.TypedArrayPrototype;
  const iv_aTypedArrayConstructor_2 = iv.aTypedArrayConstructor;
  const iv_isTypedArray = iv.isTypedArray;
  const og = "BYTES_PER_ELEMENT";
  const ob = "Wrong length";
  const oE = (e, t) => {
    for (
      var r = 0, n = t.length, i = new (iv_aTypedArrayConstructor_2(e))(n);
      n > r;
    ) {
      i[r] = t[r++];
    }
    return i;
  };
  const om = (e, t) => {
    oo(e, t, {
      get: function () {
        return oi(this)[t];
      },
    });
  };
  const oT = (e) => {
    let t;
    return (
      e instanceof i6_ArrayBuffer ||
      (t = t7(e)) == "ArrayBuffer" ||
      t == "SharedArrayBuffer"
    );
  };
  const oS = (e, t) =>
    iv_isTypedArray(e) &&
    typeof t !== "symbol" &&
    t in e &&
    String(+t) == String(t);
  const getOwnPropertyDescriptor = function (e, t) {
    if (oS(e, (t = m(t, true)))) {
      return l(2, e[t]);
    }
    return oa(e, t);
  };
  const defineProperty = function (e, t, r) {
    if (
      !(oS(e, (t = m(t, true))) && E(r) && A(r, "value")) ||
      A(r, "get") ||
      A(r, "set") ||
      r.configurable ||
      (A(r, "writable") && !r.writable) ||
      (A(r, "enumerable") && !r.enumerable)
    ) {
      return oo(e, t, r);
    }
    e[t] = r.value;
    return e;
  };
  if (s) {
    if (!iv_NATIVE_ARRAY_BUFFER_VIEWS_1) {
      a.f = getOwnPropertyDescriptor;
      R.f = defineProperty;
      om(iv_TypedArrayPrototype, "buffer");
      om(iv_TypedArrayPrototype, "byteOffset");
      om(iv_TypedArrayPrototype, "byteLength");
      om(iv_TypedArrayPrototype, "length");
    }
    eU(
      {
        target: "Object",
        stat: true,
        forced: !iv_NATIVE_ARRAY_BUFFER_VIEWS_1,
      },
      {
        getOwnPropertyDescriptor,
        defineProperty,
      },
    );
    iS.exports = function (e, t, r) {
      const n = e.match(/\d+$/)[0] / 8;
      const i = `${e + (r ? "Clamped" : "")}Array`;
      const a = "get" + e;
      const c = "set" + e;
      const s = globalThis_1[i];
      let u = s;
      let f = u && u.prototype;
      const h = {};
      const l = (e, t) => {
        oo(e, t, {
          get: function () {
            let e;
            return (e = oi(this)).view[a](t * n + e.byteOffset, true);
          },
          set: function (e) {
            let i;
            let o;
            i = e;
            o = oi(this);
            if (r) {
              i = (i = Math_round(i)) < 0 ? 0 : i > 255 ? 255 : 255 & i;
            }
            o.view[c](t * n + o.byteOffset, i, true);
          },
          enumerable: true,
        });
      };
      if (iv_NATIVE_ARRAY_BUFFER_VIEWS_1) {
        if (im) {
          u = t(function (e, t, r, o) {
            ri(e, u, i);
            return rf(
              E(t)
                ? oT(t)
                  ? o !== undefined
                    ? new s(t, i9(r, n), o)
                    : r !== undefined
                      ? new s(t, i9(r, n))
                      : new s(t)
                  : iv_isTypedArray(t)
                    ? oE(u, t)
                    : or.call(u, t)
                : new s(iA(t)),
              e,
              u,
            );
          });
          if (tM) {
            tM(u, iv_TypedArray);
          }
          rG_forEach(ot(s), function (e) {
            if (!(e in u)) {
              M(u, e, s[e]);
            }
          });
          u.prototype = f;
        }
      } else {
        u = t(function (e, t, r, o) {
          ri(e, u, i);
          let a;
          let c;
          let length;
          let f = 0;
          let h = 0;
          if (E(t)) {
            if (!oT(t)) {
              if (iv_isTypedArray(t)) {
                return oE(u, t);
              }
              return or.call(u, t);
            }
            a = t;
            h = i9(r, n);
            const p = t.byteLength;
            if (o === undefined) {
              if (p % n || (c = p - h) < 0) {
                throw o_RangeError_1(ob);
              }
            } else if ((c = eb(o) * n) + h > p) {
              throw o_RangeError_1(ob);
            }
            length = c / n;
          } else {
            a = new i6_ArrayBuffer((c = (length = iA(t)) * n));
          }
          eo(e, {
            buffer: a,
            byteOffset: h,
            byteLength: c,
            length,
            view: new i6_DataView(a),
          });
          while (f < length) {
            l(e, f++);
          }
        });
        if (tM) {
          tM(u, iv_TypedArray);
        }
        f = u.prototype = tl(iv_TypedArrayPrototype);
      }
      if (f.constructor !== u) {
        M(f, "constructor", u);
      }
      if (iv_TYPED_ARRAY_TAG) {
        M(f, iv_TYPED_ARRAY_TAG, i);
      }
      h[i] = u;
      eU(
        {
          global: true,
          forced: u != s,
          sham: !iv_NATIVE_ARRAY_BUFFER_VIEWS_1,
        },
        h,
      );
      if (!(og in u)) {
        M(u, og, n);
      }
      if (!(og in f)) {
        M(f, og, n);
      }
      rp(i);
    };
  } else {
    iS.exports = function () {};
  }
  const iS_exports = iS.exports;
  iS_exports("Uint8", function (e) {
    return function (t, r, n) {
      return e(this, t, r, n);
    };
  });
  const Math_min_2 = Math.min;
  const oI =
    [].copyWithin ||
    function (e, t) {
      const r = T(this);
      const n = eb(r.length);
      let i = eT(e, n);
      let o = eT(t, n);
      const a = arguments.length > 2 ? arguments[2] : undefined;
      let c = Math_min_2((a === undefined ? n : eT(a, n)) - o, n - i);
      let s = 1;
      for (
        o < i && i < o + c && ((s = -1), (o += c - 1), (i += c - 1));
        c-- > 0;
      ) {
        if (o in r) {
          r[i] = r[o];
        } else {
          delete r[i];
        }
        i += s;
        o += s;
      }
      return r;
    };
  const iv_aTypedArray = iv.aTypedArray;
  iv.exportTypedArrayMethod("copyWithin", function (e, t) {
    return oI.call(
      iv_aTypedArray(this),
      e,
      t,
      arguments.length > 2 ? arguments[2] : undefined,
    );
  });
  const rG_every = rG.every;
  const iv_aTypedArray_1 = iv.aTypedArray;
  iv.exportTypedArrayMethod("every", function (e) {
    return rG_every(
      iv_aTypedArray_1(this),
      e,
      arguments.length > 1 ? arguments[1] : undefined,
    );
  });
  const iv_aTypedArray_2 = iv.aTypedArray;
  iv.exportTypedArrayMethod("fill", function (e) {
    return iR.apply(iv_aTypedArray_2(this), arguments);
  });
  const iv_aTypedArrayConstructor_3 = iv.aTypedArrayConstructor;
  const rG_filter = rG.filter;
  const oL = (e, t) => {
    const r = rw(e, e.constructor);
    for (
      var n = 0, i = t.length, o = new (iv_aTypedArrayConstructor_3(r))(i);
      i > n;
    ) {
      o[n] = t[n++];
    }
    return o;
  };
  const iv_aTypedArray_3 = iv.aTypedArray;
  iv.exportTypedArrayMethod("filter", function (e) {
    const t = rG_filter(
      iv_aTypedArray_3(this),
      e,
      arguments.length > 1 ? arguments[1] : undefined,
    );
    return oL(this, t);
  });
  const rG_find = rG.find;
  const iv_aTypedArray_4 = iv.aTypedArray;
  iv.exportTypedArrayMethod("find", function (e) {
    return rG_find(
      iv_aTypedArray_4(this),
      e,
      arguments.length > 1 ? arguments[1] : undefined,
    );
  });
  const rG_findIndex = rG.findIndex;
  const iv_aTypedArray_5 = iv.aTypedArray;
  iv.exportTypedArrayMethod("findIndex", function (e) {
    return rG_findIndex(
      iv_aTypedArray_5(this),
      e,
      arguments.length > 1 ? arguments[1] : undefined,
    );
  });
  const rG_forEach_1 = rG.forEach;
  const iv_aTypedArray_6 = iv.aTypedArray;
  iv.exportTypedArrayMethod("forEach", function (e) {
    rG_forEach_1(
      iv_aTypedArray_6(this),
      e,
      arguments.length > 1 ? arguments[1] : undefined,
    );
  });
  const eA_includes = eA.includes;
  const iv_aTypedArray_7 = iv.aTypedArray;
  iv.exportTypedArrayMethod("includes", function (e) {
    return eA_includes(
      iv_aTypedArray_7(this),
      e,
      arguments.length > 1 ? arguments[1] : undefined,
    );
  });
  const eA_indexOf_1 = eA.indexOf;
  const iv_aTypedArray_8 = iv.aTypedArray;
  iv.exportTypedArrayMethod("indexOf", function (e) {
    return eA_indexOf_1(
      iv_aTypedArray_8(this),
      e,
      arguments.length > 1 ? arguments[1] : undefined,
    );
  });
  const oX = tr("iterator");
  const o_Uint8Array = globalThis_1.Uint8Array;
  const tK_values_1 = tK.values;
  const tK_keys = tK.keys;
  const tK_entries = tK.entries;
  const iv_aTypedArray_9 = iv.aTypedArray;
  const iv_exportTypedArrayMethod = iv.exportTypedArrayMethod;
  const oQ = o_Uint8Array && o_Uint8Array.prototype[oX];
  const o0 = !!oQ && (oQ.name == "values" || oQ.name == null);
  const o1 = function () {
    return tK_values_1.call(iv_aTypedArray_9(this));
  };
  iv_exportTypedArrayMethod("entries", function () {
    return tK_entries.call(iv_aTypedArray_9(this));
  });
  iv_exportTypedArrayMethod("keys", function () {
    return tK_keys.call(iv_aTypedArray_9(this));
  });
  iv_exportTypedArrayMethod("values", o1, !o0);
  iv_exportTypedArrayMethod(oX, o1, !o0);
  const iv_aTypedArray_10 = iv.aTypedArray;
  const join = [].join;
  iv.exportTypedArrayMethod("join", function (e) {
    return join.apply(iv_aTypedArray_10(this), arguments);
  });
  const o3 = (e, t) => {
    const r = [][e];
    return (
      !!r &&
      c(() => {
        r.call(
          null,
          t ||
            function () {
              throw 1;
            },
          1,
        );
      })
    );
  };
  const Math_min_3 = Math.min;
  const lastIndexOf = [].lastIndexOf;
  const o6 = !!lastIndexOf && 1 / [1].lastIndexOf(1, -0) < 0;
  const o7 = o3("lastIndexOf");
  const o9 =
    o6 || !o7
      ? function (e) {
          if (o6) {
            return lastIndexOf.apply(this, arguments) || 0;
          }
          const t = b(this);
          const r = eb(t.length);
          let n = r - 1;
          if (arguments.length > 1) {
            n = Math_min_3(n, ev(arguments[1]));
          }
          if (n < 0) {
            n = r + n;
          }
          for (; n >= 0; n--) {
            if (n in t && t[n] === e) {
              return n || 0;
            }
          }
          return -1;
        }
      : lastIndexOf;
  const iv_aTypedArray_11 = iv.aTypedArray;
  iv.exportTypedArrayMethod("lastIndexOf", function (e) {
    return o9.apply(iv_aTypedArray_11(this), arguments);
  });
  const rG_map_1 = rG.map;
  const iv_aTypedArray_12 = iv.aTypedArray;
  const iv_aTypedArrayConstructor_4 = iv.aTypedArrayConstructor;
  iv.exportTypedArrayMethod("map", function (e) {
    return rG_map_1(
      iv_aTypedArray_12(this),
      e,
      arguments.length > 1 ? arguments[1] : undefined,
      function (e, t) {
        return new (iv_aTypedArrayConstructor_4(rw(e, e.constructor)))(t);
      },
    );
  });
  const ai = (e) =>
    function (t, r, n, i) {
      t2(r);
      const o = T(t);
      const a = v(o);
      const c = eb(o.length);
      let s = e ? c - 1 : 0;
      const u = e ? -1 : 1;
      if (n < 2) {
        while (true) {
          if (s in a) {
            i = a[s];
            s += u;
            break;
          }
          s += u;
          if (e ? s < 0 : c <= s) {
            throw TypeError("Reduce of empty array with no initial value");
          }
        }
      }
      for (; e ? s >= 0 : c > s; s += u) {
        if (s in a) {
          i = r(i, a[s], s, o);
        }
      }
      return i;
    };
  const ao = {
    left: ai(false),
    right: ai(true),
  };
  const ao_left = ao.left;
  const iv_aTypedArray_13 = iv.aTypedArray;
  iv.exportTypedArrayMethod("reduce", function (e) {
    return ao_left(
      iv_aTypedArray_13(this),
      e,
      arguments.length,
      arguments.length > 1 ? arguments[1] : undefined,
    );
  });
  const ao_right = ao.right;
  const iv_aTypedArray_14 = iv.aTypedArray;
  iv.exportTypedArrayMethod("reduceRight", function (e) {
    return ao_right(
      iv_aTypedArray_14(this),
      e,
      arguments.length,
      arguments.length > 1 ? arguments[1] : undefined,
    );
  });
  const iv_aTypedArray_15 = iv.aTypedArray;
  const iv_exportTypedArrayMethod_1 = iv.exportTypedArrayMethod;
  const Math_floor_2 = Math.floor;
  iv_exportTypedArrayMethod_1("reverse", function () {
    let e;
    let length = iv_aTypedArray_15(this).length;
    for (let r = Math_floor_2(length / 2), n = 0; n < r;) {
      e = this[n];
      this[n++] = this[--length];
      this[length] = e;
    }
    return this;
  });
  const iv_aTypedArray_16 = iv.aTypedArray;
  iv.exportTypedArrayMethod(
    "set",
    function (e) {
      iv_aTypedArray_16(this);
      const t = i9(arguments.length > 1 ? arguments[1] : undefined, 1);
      const length = this.length;
      const n = T(e);
      const i = eb(n.length);
      let o = 0;
      if (i + t > length) {
        throw RangeError("Wrong length");
      }
      while (o < i) {
        this[t + o] = n[o++];
      }
    },
    c(() => {
      new Int8Array(1).set({});
    }),
  );
  const iv_aTypedArray_17 = iv.aTypedArray;
  const iv_aTypedArrayConstructor_5 = iv.aTypedArrayConstructor;
  const slice = [].slice;
  iv.exportTypedArrayMethod(
    "slice",
    function (e, t) {
      const r = slice.call(iv_aTypedArray_17(this), e, t);
      const n = rw(this, this.constructor);
      for (
        var i = 0, o = r.length, a = new (iv_aTypedArrayConstructor_5(n))(o);
        o > i;
      ) {
        a[i] = r[i++];
      }
      return a;
    },
    c(() => {
      new Int8Array(1).slice();
    }),
  );
  const rG_some = rG.some;
  const iv_aTypedArray_18 = iv.aTypedArray;
  iv.exportTypedArrayMethod("some", function (e) {
    return rG_some(
      iv_aTypedArray_18(this),
      e,
      arguments.length > 1 ? arguments[1] : undefined,
    );
  });
  const iv_aTypedArray_19 = iv.aTypedArray;
  const sort = [].sort;
  iv.exportTypedArrayMethod("sort", function (e) {
    return sort.call(iv_aTypedArray_19(this), e);
  });
  const iv_aTypedArray_20 = iv.aTypedArray;
  iv.exportTypedArrayMethod("subarray", function (e, t) {
    const r = iv_aTypedArray_20(this);
    const r_length = r.length;
    const i = eT(e, r_length);
    return new (rw(r, r.constructor))(
      r.buffer,
      r.byteOffset + i * r.BYTES_PER_ELEMENT,
      eb((t === undefined ? r_length : eT(t, r_length)) - i),
    );
  });
  const o_Int8Array_2 = globalThis_1.Int8Array;
  const iv_aTypedArray_21 = iv.aTypedArray;
  const iv_exportTypedArrayMethod_2 = iv.exportTypedArrayMethod;
  const toLocaleString = [].toLocaleString;
  const slice_1 = [].slice;
  const aI =
    !!o_Int8Array_2 &&
    c(() => {
      toLocaleString.call(new o_Int8Array_2(1));
    });
  iv_exportTypedArrayMethod_2(
    "toLocaleString",
    function () {
      return toLocaleString.apply(
        aI ? slice_1.call(iv_aTypedArray_21(this)) : iv_aTypedArray_21(this),
        arguments,
      );
    },
    c(
      () =>
        [1, 2].toLocaleString() != new o_Int8Array_2([1, 2]).toLocaleString(),
    ) ||
      !c(() => {
        o_Int8Array_2.prototype.toLocaleString.call([1, 2]);
      }),
  );
  const iv_exportTypedArrayMethod_3 = iv.exportTypedArrayMethod;
  const o_Uint8Array_1 = globalThis_1.Uint8Array;
  const aB = (o_Uint8Array_1 && o_Uint8Array_1.prototype) || {};
  let toString_1 = [].toString;
  const join_1 = [].join;
  if (
    c(() => {
      toString_1.call({});
    })
  ) {
    toString_1 = function () {
      return join_1.call(this);
    };
  }
  const aP = aB.toString != toString_1;
  iv_exportTypedArrayMethod_3("toString", toString_1, aP);
  const aL = (() => {
    function e() {
      eK(this, e);
      let t;
      let r;
      const n = new Promise((resolve, reject) => {
        t = resolve;
        r = reject;
      });
      n.resolve = function (e) {
        t(e);
        n.state = "fulfilled";
      };
      n.reject = function (e) {
        r(e);
        n.state = "rejected";
        n.isBreak = e === "DESTROYED";
      };
      n.state = "pending";
      return n;
    }
    eV(e, [
      {
        key: "resolve",
        value: function (e) {},
      },
      {
        key: "reject",
        value: function (e) {},
      },
    ]);
    return e;
  })();
  const join_2 = [].join;
  const aH = v != Object;
  const aN = o3("join", ",");
  eU(
    {
      target: "Array",
      proto: true,
      forced: aH || !aN,
    },
    {
      join: function (e) {
        return join_2.call(b(this), e === undefined ? "," : e);
      },
    },
  );
  let aU;
  const aD = eV(function e() {
    const t =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    const t_url = t.url;
    const t_method = t.method;
    const i = t_method === undefined ? "GET" : t_method;
    const t_type = t.type;
    const a = t_type === undefined ? "arraybuffer" : t_type;
    const t_data = t.data;
    const s = t_data === undefined ? {} : t_data;
    eK(this, e);
    return new Promise((resolve, reject) => {
      const n = new window.XMLHttpRequest();
      const o = i.toUpperCase();
      const c = [];
      Object.keys(s).map((e) => {
        c.push("k=".concat(s[e]));
      });
      if (o === "GET") {
        let u = "";
        u =
          t_url.indexOf("?") < 0
            ? "".concat(t_url, "?").concat(c.join("&"))
            : (c == null ? undefined : c.length) > 0
              ? "".concat(t_url, "&").concat(c.join("&"))
              : t_url;
        n.open(o, u);
        if (a) {
          n.responseType = a;
        }
        n.send();
      } else {
        if (o !== "POST") {
          throw Error("xhr ".concat(o, " is not supported"));
        }
        n.open(o, t_url, true);
        if (a) {
          n.responseType = a;
        }
        n.setRequestHeader("Content-Type", "application/json");
        n.send(JSON.stringify(s));
      }
      n.onload = function () {
        if (n.status === 200 || n.status === 206) {
          resolve(n);
        } else {
          reject(n);
        }
      };
      n.onerror = function () {
        reject(n);
      };
    });
  });
  ((e, t, r) => {
    function n(e, t) {
      let r = parseInt(e.slice(t, t + 2), 16);
      if (r >>> 7 == 0) {
        return [1, r];
      }
      if (r >>> 6 == 2) {
        return [2, (r = ((63 & r) << 8) + parseInt(e.slice(t + 2, t + 4), 16))];
      }
      return [3, (r = ((63 & r) << 16) + parseInt(e.slice(t + 2, t + 6), 16))];
    }
    let i;
    let o = 0;
    const a = [];
    const c = [];
    for (i = 0; i < 4; ++i) {
      o += (3 & parseInt(e.slice(8 + 2 * i, 10 + 2 * i), 16)) << (2 * i);
    }
    const s = parseInt(e.slice(16, 24), 16);
    const u = 2 * parseInt(e.slice(32, 40), 16);
    for (i = 40; i < u + 40; i += 2) {
      a.push(parseInt(e.slice(i, i + 2), 16));
    }
    let f = u + 40;
    const h = parseInt(e.slice(f, f + 4), 16);
    f += 4;
    for (i = 0; i < h; ++i) {
      const l = n(e, f);
      f += 2 * l[0];
      let p = "";
      for (let d = 0; d < l[1]; ++d) {
        const y = n(e, f);
        p += String.fromCharCode(o ^ y[1]);
        f += 2 * y[0];
      }
      c.push(p);
    }
    t.p = null;
    (function e(t, r, n, i, o) {
      let s;
      let u;
      let f;
      let h;
      let l;
      let p = -1;
      const d = [];
      let y = null;
      let v = [r];
      u = Math.min(r.length, n);
      for (f = 0; f < u; ++f) {
        v.push(r[f]);
      }
      v.p = i;
      let g = [];
      while (true) {
        try {
          switch (a[t++]) {
            case 64:
              d[++p] = null;
              break;
            case 52:
              s = a[t++];
              d[++p] = (s << 24) >> 24;
              break;
            case 50:
              s = (a[t] << 8) + a[t + 1];
              t += 2;
              d[++p] = (s << 16) >> 16;
              break;
            case 31:
              s = ((s = ((s = a[t++]) << 8) + a[t++]) << 8) + a[t++];
              d[++p] = (s << 8) + a[t++];
              break;
            case 6:
              s = (a[t] << 8) + a[t + 1];
              t += 2;
              d[++p] = c[s];
              break;
            case 13:
              d[++p] = undefined;
              break;
            case 72:
              d[++p] = {};
              break;
            case 58:
              s = (a[t] << 8) + a[t + 1];
              t += 2;
              u = c[s];
              f = d[p--];
              d[p][u] = f;
              break;
            case 21:
              u = a[t++];
              f = a[t++];
              for (h = v; u > 0; --u) {
                h = h.p;
              }
              d[++p] = h[f];
              break;
            case 76:
              s = (a[t] << 8) + a[t + 1];
              t += 2;
              u = c[s];
              d[p] = d[p][u];
              break;
            case 25:
              u = d[p--];
              d[p] = d[p][u];
              break;
            case 55:
              u = a[t++];
              f = a[t++];
              for (h = v; u > 0; --u) {
                h = h.p;
              }
              h[f] = d[p--];
              break;
            case 18:
              u = d[p--];
              f = d[p--];
              h = d[p--];
              f[u] = h;
              break;
            case 61:
              u = a[t++];
              f = a[t++];
              h = v;
              for (h = v; u > 0; --u) {
                h = h.p;
              }
              d[++p] = h;
              d[++p] = f;
              break;
            case 46:
              u = d[p--];
              d[p] += u;
              break;
            case 41:
              u = d[p--];
              d[p] -= u;
              break;
            case 22:
              u = d[p--];
              d[p] %= u;
              break;
            case 68:
              u = d[p--];
              h = (f = d[p--])[u]++;
              d[++p] = h;
              break;
            case 59:
              u = d[p--];
              h = (f = d[p--])[u]--;
              d[++p] = h;
              break;
            case 11:
              u = d[p--];
              d[p] = d[p] === u;
              break;
            case 28:
              u = d[p--];
              d[p] = d[p] !== u;
              break;
            case 19:
              u = d[p--];
              d[p] = d[p] < u;
              break;
            case 17:
              u = d[p--];
              d[p] = d[p] <= u;
              break;
            case 32:
              u = d[p--];
              d[p] = d[p] > u;
              break;
            case 38:
              u = d[p--];
              d[p] = d[p] >= u;
              break;
            case 69:
              u = d[p--];
              d[p] = d[p] & u;
              break;
            case 63:
              u = d[p--];
              d[p] = d[p] ^ u;
              break;
            case 53:
              s = ((s = (a[t] << 8) + a[t + 1]) << 16) >> 16;
              t += 2;
              if (d[p]) {
                --p;
              } else {
                t += s;
              }
              break;
            case 1:
              u = d[p--];
              f = d[p--];
              f[u] = d[p];
              break;
            case 42:
              s = a[t++];
              u = d[p--];
              f = function e() {
                const t = e._v;
                return e._u(t[0], arguments, t[1], t[2], this);
              };
              f._v = [u, s, v];
              f._u = e;
              d[++p] = f;
              break;
            case 66:
              s = a[t++];
              u = d[p--];
              h = [
                (f = function e() {
                  const t = e._v;
                  return e._u(t[0], arguments, t[1], t[2], this);
                }),
              ];
              h.p = v;
              f._v = [u, s, h];
              f._u = e;
              d[++p] = f;
              break;
            case 48:
              u = d[p--];
              for (f = null; (h = g.pop());) {
                if (h[0] === 2 || h[0] === 3) {
                  f = h;
                  break;
                }
              }
              if (f) {
                t = f[2];
                f[0] = 0;
                g.push(f);
              } else {
                if (!y) {
                  return u;
                }
                t = y[1];
                o = y[2];
                v = y[3];
                g = y[4];
                d[++p] = u;
                y = y[0];
              }
              break;
            case 45:
              p -= s = a[t++];
              f = d.slice(p + 1, p + s + 1);
              u = d[p--];
              h = d[p--];
              if (u._u === e) {
                u = u._v;
                y = [y, t, o, v, g];
                t = u[0];
                if (h == null) {
                  h = (function () {
                    return this;
                  })();
                }
                o = h;
                v = [f].concat(f);
                v.length = Math.min(u[1], s) + 1;
                v.p = u[2];
                g = [];
              } else {
                l = u.apply(h, f);
                d[++p] = l;
              }
              break;
            case 70:
              s = a[t++];
              h = [undefined];
              for (l = s; l > 0; --l) {
                h[l] = d[p--];
              }
              f = d[p--];
              l = new (u = Function.bind.apply(f, h))();
              d[++p] = l;
              break;
            case 65:
              t += 2 + (s = ((s = (a[t] << 8) + a[t + 1]) << 16) >> 16);
              break;
            case 49:
              s = ((s = (a[t] << 8) + a[t + 1]) << 16) >> 16;
              t += 2;
              if (!(u = d[p--])) {
                t += s;
              }
              break;
            case 36:
              --p;
              break;
            case 2:
              u = d[p];
              d[++p] = u;
              break;
            default:
              throw Error("ioe");
          }
        } catch (error) {
          while ((s = g.pop()) && !s[0]);
          if (!s) {
            e: while (y) {
              for (u = y[4]; (s = u.pop());) {
                if (s[0]) {
                  break e;
                }
              }
              y = y[0];
            }
            if (!y) {
              throw error;
            }
            t = y[1];
            o = y[2];
            v = y[3];
            g = y[4];
            y = y[0];
          }
          if ((u = s[0]) === 1) {
            t = s[2];
            s[0] = 0;
            g.push(s);
            d[++p] = error;
          } else if (u === 2) {
            t = s[2];
            s[0] = 0;
            g.push(s);
          } else {
            t = s[3];
            s[0] = 2;
            g.push(s);
            d[++p] = error;
          }
        }
      }
    })(s, [], 0, t, r);
  })(
    "504B01017ebd341a000003611a34bc7c0000039f1500010600002635000715000106000111310018150001024c000234002d01060000024c000234002d012930150001060003263500071500010600041131001b150001024c000234002d01060003024c000234002d0129340a2e303200ff30150001340019024c00022d00150001340119024c00022d003f150001340219024c00022d003f060000024c000234002d012937000315000215000329340129370004150300150004460137000515030015000346013700061500033d0007012415000734002031004e1500011500021500032934022919024c00022d001500011500021500032934012919024c00022d003f1500011500021500072919024c00022d003f15000615000315000729123d00073b2441ffa934003d000701241500071500041331001915000115000734012e19150005150007123d0007442441ffdd481500053a00051500043a00061500063a00071500033a000830340037000234003d0002012415000134001c310017150001150001340129453d000101243d0002442441ffe015000230150001024c00022d00401502031500022d012e1500032e370004150301024c00091500043200ff452d013034553700033200fa370004340037000634003d000601241500061500021331007d15000634021634010b31002715000315000115000619024c00022d003f37000515000115000619024c00022d0037000341002415000415000115000619024c00022d003f37000515000115000619024c00022d0037000440150204150301024c00091500052d0115000634152d03150001150006123d0006442441ff7915000130401502021500012d013700021500024c000a370003150002370004401501021500041500032d023700051500054c00053700061500054c00063700071500054c0008370008401501051500061500072d02370006401501011500063400192d013700081500071500082934012937000915020015000934012e460137000a15020015000834012e460137000b06000b15000a15000912340015000b15000812340037000c34003d000c012415000c1500091331001915000615000c34012e1915000a15000c123d000c442441ffdd34003d000c012415000c1500081331001e1500061500071500082915000c2e1915000b15000c123d000c442441ffd815000a024c000c06000b2d01301f000002572a013701031f0000000042013700011f0000005f42023700021f0000015a42013700031f0000018a42033700041f000001b542023700050d30000d0180b60180bf0a80e580ee80e780f480c580e980e280e380c780f20180e70180fc0a80e580e980e880f080e380f480f280cd80e380ff0a80e580e980e880f080e380f480f280ca80e380e80d80e580e980e880f080e380f480f280cb80e380f280ee80e980e20980eb80e380f280ee80e980e280ca80e380e80c80e080f480e980eb80c580ee80e780f480c580e980e280e30680ea80e380e880e180f280ee000480ec80e980ef80e8",
    {
      0: Array,
      1: String,
      get 2() {
        return atob;
      },
      get 3() {
        return aU;
      },
      set 3(e) {
        aU = e;
      },
    },
    undefined,
  );
  let aG = null;
  function aj(vid, t, url) {
    const n = new aL();
    new aD({
      type: "json",
      method: "POST",
      url,
      data: {
        drm_type: "22",
        license_request: [
          {
            vid,
            kids: [].concat(t),
          },
        ],
      },
    })
      .then((r) => {
        let i = r == null ? undefined : r.response;
        if (typeof i === "string") {
          i = JSON.parse(i);
        }
        if (i) {
          const o = i.play_licenses[vid][t];
          n.resolve(o);
        } else {
          console.error(
            "getSecretKeyByKid end, vid,",
            vid,
            "，kid",
            t,
            "response null",
          );
          n.reject();
        }
      })
      .catch(() => {
        console.error("getSecretKeyByKid end, vid,", vid, "，kid", t, "catch");
        n.reject();
      });
    return n;
  }
  function aF() {
    return ((e, t, r) => {
      function n(e, t) {
        let r = parseInt(e.slice(t, t + 2), 16);
        if (r >>> 7 == 0) {
          return [1, r];
        }
        if (r >>> 6 == 2) {
          return [
            2,
            (r = ((63 & r) << 8) + parseInt(e.slice(t + 2, t + 4), 16)),
          ];
        }
        return [
          3,
          (r = ((63 & r) << 16) + parseInt(e.slice(t + 2, t + 6), 16)),
        ];
      }
      let i;
      let o = 0;
      const a = [];
      const c = [];
      for (i = 0; i < 4; ++i) {
        o += (3 & parseInt(e.slice(8 + 2 * i, 10 + 2 * i), 16)) << (2 * i);
      }
      const s = parseInt(e.slice(16, 24), 16);
      const u = 2 * parseInt(e.slice(32, 40), 16);
      for (i = 40; i < u + 40; i += 2) {
        a.push(parseInt(e.slice(i, i + 2), 16));
      }
      let f = u + 40;
      const h = parseInt(e.slice(f, f + 4), 16);
      f += 4;
      for (i = 0; i < h; ++i) {
        const l = n(e, f);
        f += 2 * l[0];
        let p = "";
        for (let d = 0; d < l[1]; ++d) {
          const y = n(e, f);
          p += String.fromCharCode(o ^ y[1]);
          f += 2 * y[0];
        }
        c.push(p);
      }
      t.p = null;
      return (function e(t, r, n, i, o) {
        let s;
        let u;
        let f;
        let h;
        let l;
        let p = -1;
        const d = [];
        let y = null;
        let v = [r];
        u = Math.min(r.length, n);
        for (f = 0; f < u; ++f) {
          v.push(r[f]);
        }
        v.p = i;
        let g = [];
        while (true) {
          try {
            switch (a[t++]) {
              case 64:
                d[++p] = null;
                break;
              case 52:
                s = a[t++];
                d[++p] = (s << 24) >> 24;
                break;
              case 31:
                s = ((s = ((s = a[t++]) << 8) + a[t++]) << 8) + a[t++];
                d[++p] = (s << 8) + a[t++];
                break;
              case 6:
                s = (a[t] << 8) + a[t + 1];
                t += 2;
                d[++p] = c[s];
                break;
              case 13:
                d[++p] = undefined;
                break;
              case 72:
                d[++p] = {};
                break;
              case 58:
                s = (a[t] << 8) + a[t + 1];
                t += 2;
                u = c[s];
                f = d[p--];
                d[p][u] = f;
                break;
              case 21:
                u = a[t++];
                f = a[t++];
                for (h = v; u > 0; --u) {
                  h = h.p;
                }
                d[++p] = h[f];
                break;
              case 76:
                s = (a[t] << 8) + a[t + 1];
                t += 2;
                u = c[s];
                d[p] = d[p][u];
                break;
              case 25:
                u = d[p--];
                d[p] = d[p][u];
                break;
              case 55:
                u = a[t++];
                f = a[t++];
                for (h = v; u > 0; --u) {
                  h = h.p;
                }
                h[f] = d[p--];
                break;
              case 3:
                s = (a[t] << 8) + a[t + 1];
                t += 2;
                u = c[s];
                f = d[p--];
                h = d[p--];
                f[u] = h;
                break;
              case 18:
                u = d[p--];
                f = d[p--];
                h = d[p--];
                f[u] = h;
                break;
              case 28:
                u = d[p--];
                d[p] = d[p] !== u;
                break;
              case 32:
                u = d[p--];
                d[p] = d[p] > u;
                break;
              case 53:
                s = ((s = (a[t] << 8) + a[t + 1]) << 16) >> 16;
                t += 2;
                if (d[p]) {
                  --p;
                } else {
                  t += s;
                }
                break;
              case 42:
                s = a[t++];
                u = d[p--];
                f = function e() {
                  const t = e._v;
                  return e._u(t[0], arguments, t[1], t[2], this);
                };
                f._v = [u, s, v];
                f._u = e;
                d[++p] = f;
                break;
              case 48:
                u = d[p--];
                for (f = null; (h = g.pop());) {
                  if (h[0] === 2 || h[0] === 3) {
                    f = h;
                    break;
                  }
                }
                if (f) {
                  t = f[2];
                  f[0] = 0;
                  g.push(f);
                } else {
                  if (!y) {
                    return u;
                  }
                  t = y[1];
                  o = y[2];
                  v = y[3];
                  g = y[4];
                  d[++p] = u;
                  y = y[0];
                }
                break;
              case 45:
                p -= s = a[t++];
                f = d.slice(p + 1, p + s + 1);
                u = d[p--];
                h = d[p--];
                if (u._u === e) {
                  u = u._v;
                  y = [y, t, o, v, g];
                  t = u[0];
                  if (h == null) {
                    h = (function () {
                      return this;
                    })();
                  }
                  o = h;
                  v = [f].concat(f);
                  v.length = Math.min(u[1], s) + 1;
                  v.p = u[2];
                  g = [];
                } else {
                  l = u.apply(h, f);
                  d[++p] = l;
                }
                break;
              case 70:
                s = a[t++];
                h = [undefined];
                for (l = s; l > 0; --l) {
                  h[l] = d[p--];
                }
                f = d[p--];
                l = new (u = Function.bind.apply(f, h))();
                d[++p] = l;
                break;
              case 65:
                t += 2 + (s = ((s = (a[t] << 8) + a[t + 1]) << 16) >> 16);
                break;
              case 49:
                s = ((s = (a[t] << 8) + a[t + 1]) << 16) >> 16;
                t += 2;
                if (!(u = d[p--])) {
                  t += s;
                }
                break;
              case 36:
                --p;
                break;
              case 2:
                u = d[p];
                d[++p] = u;
                break;
              default:
                throw Error("ioe");
            }
          } catch (error) {
            while ((s = g.pop()) && !s[0]);
            if (!s) {
              e: while (y) {
                for (u = y[4]; (s = u.pop());) {
                  if (s[0]) {
                    break e;
                  }
                }
                y = y[0];
              }
              if (!y) {
                throw error;
              }
              t = y[1];
              o = y[2];
              v = y[3];
              g = y[4];
              y = y[0];
            }
            if ((u = s[0]) === 1) {
              t = s[2];
              s[0] = 0;
              g.push(s);
              d[++p] = error;
            } else if (u === 2) {
              t = s[2];
              s[0] = 0;
              g.push(s);
            } else {
              t = s[3];
              s[0] = 2;
              g.push(s);
              d[++p] = error;
            }
          }
        }
      })(s, [], 0, t, r);
    })(
      "504B01017ebd341a0000003f1a34bc7c00000142401502011500012d0137000248483a00023700031500021500034c000215010312150105024c00031500032d01240d30150105024c00081500012d01240d301501034c00003400203500081501033400190d1c3100091501033400194100030600013700011501034c00003401203100091501033401194100010d3700021501034c00003402203100091501033402194100010d3700031501034c00003403203100091501033403194100010d3700041501004600370005150002310047401501011500022d0137000615000331002548483a00023700071500061500074c000215000312150005024c00031500072d012441000d150005024c00031500062d0124410039401501021500011500031500042d03370008060004150008030005150008024c00061f000000002a012d01024c00071f000000302a012d01241500053000090680ea80e380e880e180f280ee000980e580ea80e380e780f480cd80e380ff80f50780f480e380f580e980ea80f080e30e80f480e380f780f380e380f580f280d680f480e980eb80ef80f580e30280ef80e20480f280ee80e380e80580e580e780f280e580ee0680f480e380ec80e380e580f2",
      {
        get 0() {
          return aL;
        },
        get 1() {
          return aU;
        },
        get 2() {
          return aj;
        },
        3: arguments,
      },
      this,
    );
  }
  function aK(e) {
    let t;
    if (aG === null) {
      try {
        aG = localStorage && !!localStorage.getItem("secretkeylog");
      } catch (e) {}
    }
    for (
      var r = arguments.length, n = Array(r > 1 ? r - 1 : 0), i = 1;
      i < r;
      i++
    ) {
      n[i - 1] = arguments[i];
    }
    if (aG && console.log) {
      (t = console).log.apply(t, ["[XGSecretkey]", e].concat(n));
    }
  }
  const aY = {
    cipher: {},
    hash: {},
    keyexchange: {},
    mode: {},
    misc: {},
    codec: {},
    exception: {
      corrupt: function (e) {
        this.toString = function () {
          return "CORRUPT: " + this.message;
        };
        this.message = e;
      },
      invalid: function (e) {
        this.toString = function () {
          return "INVALID: " + this.message;
        };
        this.message = e;
      },
      bug: function (e) {
        this.toString = function () {
          return "BUG: " + this.message;
        };
        this.message = e;
      },
      notReady: function (e) {
        this.toString = function () {
          return "NOT READY: " + this.message;
        };
        this.message = e;
      },
    },
  };
  aY.cipher.aes = function (e) {
    if (!this._tables[0][0][0]) {
      this._precompute();
    }
    let t;
    let r;
    let n;
    let i;
    let o;
    const a = this._tables[0][4];
    const c = this._tables[1];
    const e_length = e.length;
    let u = 1;
    if (e_length !== 4 && e_length !== 6 && e_length !== 8) {
      throw new aY.exception.invalid("invalid aes key size");
    }
    this._key = [(i = e.slice(0)), (o = [])];
    for (t = e_length; t < 4 * e_length + 28; t++) {
      n = i[t - 1];
      if (t % e_length == 0 || (e_length === 8 && t % e_length == 4)) {
        n =
          (a[n >>> 24] << 24) ^
          (a[(n >> 16) & 255] << 16) ^
          (a[(n >> 8) & 255] << 8) ^
          a[255 & n];
        if (t % e_length == 0) {
          n = (n << 8) ^ (n >>> 24) ^ (u << 24);
          u = (u << 1) ^ (283 * (u >> 7));
        }
      }
      i[t] = i[t - e_length] ^ n;
    }
    for (r = 0; t; r++, t--) {
      n = i[3 & r ? t : t - 4];
      o[r] =
        t <= 4 || r < 4
          ? n
          : c[0][a[n >>> 24]] ^
            c[1][a[(n >> 16) & 255]] ^
            c[2][a[(n >> 8) & 255]] ^
            c[3][a[255 & n]];
    }
  };
  aY.cipher.aes.prototype = {
    encrypt: function (e) {
      return this._crypt(e, 0);
    },
    decrypt: function (e) {
      return this._crypt(e, 1);
    },
    _tables: [
      [[], [], [], [], []],
      [[], [], [], [], []],
    ],
    _precompute: function () {
      let e;
      let t;
      let r;
      let n;
      let i;
      let o;
      let a;
      let c;
      const s = this._tables[0];
      const u = this._tables[1];
      const f = s[4];
      const h = u[4];
      const l = [];
      const p = [];
      for (e = 0; e < 256; e++) {
        p[(l[e] = (e << 1) ^ (283 * (e >> 7))) ^ e] = e;
      }
      for (t = r = 0; !f[t]; t ^= n || 1, r = p[r] || 1) {
        o =
          ((o = r ^ (r << 1) ^ (r << 2) ^ (r << 3) ^ (r << 4)) >> 8) ^
          (255 & o) ^
          99;
        f[t] = o;
        h[o] = t;
        c =
          (16843009 * l[(i = l[(n = l[t])])]) ^
          (65537 * i) ^
          (257 * n) ^
          (16843008 * t);
        a = (257 * l[o]) ^ (16843008 * o);
        for (e = 0; e < 4; e++) {
          s[e][t] = a = (a << 24) ^ (a >>> 8);
          u[e][o] = c = (c << 24) ^ (c >>> 8);
        }
      }
      for (e = 0; e < 5; e++) {
        s[e] = s[e].slice(0);
        u[e] = u[e].slice(0);
      }
    },
    _crypt: function (e, t) {
      if (e.length !== 4) {
        throw new aY.exception.invalid("invalid aes block size");
      }
      let r;
      let n;
      let i;
      let o;
      const a = this._key[t];
      let c = e[0] ^ a[0];
      let s = e[t ? 3 : 1] ^ a[1];
      let u = e[2] ^ a[2];
      let f = e[t ? 1 : 3] ^ a[3];
      const h = a.length / 4 - 2;
      let l = 4;
      const p = [0, 0, 0, 0];
      const d = this._tables[t];
      const y = d[0];
      const v = d[1];
      const g = d[2];
      const b = d[3];
      const E = d[4];
      for (o = 0; o < h; o++) {
        r =
          y[c >>> 24] ^
          v[(s >> 16) & 255] ^
          g[(u >> 8) & 255] ^
          b[255 & f] ^
          a[l];
        n =
          y[s >>> 24] ^
          v[(u >> 16) & 255] ^
          g[(f >> 8) & 255] ^
          b[255 & c] ^
          a[l + 1];
        i =
          y[u >>> 24] ^
          v[(f >> 16) & 255] ^
          g[(c >> 8) & 255] ^
          b[255 & s] ^
          a[l + 2];
        f =
          y[f >>> 24] ^
          v[(c >> 16) & 255] ^
          g[(s >> 8) & 255] ^
          b[255 & u] ^
          a[l + 3];
        l += 4;
        c = r;
        s = n;
        u = i;
      }
      for (o = 0; o < 4; o++) {
        p[t ? 3 & -o : o] =
          (E[c >>> 24] << 24) ^
          (E[(s >> 16) & 255] << 16) ^
          (E[(u >> 8) & 255] << 8) ^
          E[255 & f] ^
          a[l++];
        r = c;
        c = s;
        s = u;
        u = f;
        f = r;
      }
      return p;
    },
  };
  aY.bitArray = {
    bitSlice: function (e, t, r) {
      e = aY.bitArray._shiftRight(e.slice(t / 32), 32 - (31 & t)).slice(1);
      if (r === undefined) {
        return e;
      }
      return aY.bitArray.clamp(e, r - t);
    },
    extract: function (e, t, r) {
      const n = Math.floor((-t - r) & 31);
      return (
        (-32 & ((t + r - 1) ^ t)
          ? (e[(t / 32) | 0] << (32 - n)) ^ (e[(t / 32 + 1) | 0] >>> n)
          : e[(t / 32) | 0] >>> n) &
        ((1 << r) - 1)
      );
    },
    concat: function (e, t) {
      if (e.length === 0 || t.length === 0) {
        return e.concat(t);
      }
      const r = e[e.length - 1];
      const n = aY.bitArray.getPartial(r);
      if (n === 32) {
        return e.concat(t);
      }
      return aY.bitArray._shiftRight(t, n, 0 | r, e.slice(0, e.length - 1));
    },
    bitLength: function (e) {
      let t;
      const e_length = e.length;
      if (e_length === 0) {
        return 0;
      }
      t = e[e_length - 1];
      return 32 * (e_length - 1) + aY.bitArray.getPartial(t);
    },
    clamp: function (e, t) {
      if (32 * e.length < t) {
        return e;
      }
      const length = (e = e.slice(0, Math.ceil(t / 32))).length;
      t &= 31;
      if (length > 0 && t) {
        e[length - 1] = aY.bitArray.partial(
          t,
          e[length - 1] & (2147483648 >> (t - 1)),
          1,
        );
      }
      return e;
    },
    partial: function (e, t, r) {
      if (e === 32) {
        return t;
      }
      return (r ? 0 | t : t << (32 - e)) + 1099511627776 * e;
    },
    getPartial: function (e) {
      return Math.round(e / 1099511627776) || 32;
    },
    equal: function (e, t) {
      if (aY.bitArray.bitLength(e) !== aY.bitArray.bitLength(t)) {
        return false;
      }
      let r;
      let n = 0;
      for (r = 0; r < e.length; r++) {
        n |= e[r] ^ t[r];
      }
      return n === 0;
    },
    _shiftRight: function (e, t, r, n) {
      let i;
      let o;
      let a;
      for (n === undefined && (n = []); t >= 32; t -= 32) {
        n.push(r);
        r = 0;
      }
      if (t === 0) {
        return n.concat(e);
      }
      for (i = 0; i < e.length; i++) {
        n.push(r | (e[i] >>> t));
        r = e[i] << (32 - t);
      }
      o = e.length ? e[e.length - 1] : 0;
      a = aY.bitArray.getPartial(o);
      n.push(aY.bitArray.partial((t + a) & 31, t + a > 32 ? r : n.pop(), 1));
      return n;
    },
    _xor4: function (e, t) {
      return [e[0] ^ t[0], e[1] ^ t[1], e[2] ^ t[2], e[3] ^ t[3]];
    },
    byteswapM: function (e) {
      let t;
      let r;
      for (t = 0; t < e.length; ++t) {
        r = e[t];
        e[t] =
          (r >>> 24) | ((r >>> 8) & 65280) | ((65280 & r) << 8) | (r << 24);
      }
      return e;
    },
  };
  aY.codec.utf8String = {
    fromBits: function (e) {
      let t;
      let r;
      let n = "";
      const i = aY.bitArray.bitLength(e);
      for (t = 0; t < i / 8; t++) {
        if ((3 & t) == 0) {
          r = e[t / 4];
        }
        n += String.fromCharCode(((r >>> 8) >>> 8) >>> 8);
        r <<= 8;
      }
      return decodeURIComponent(escape(n));
    },
    toBits: function (e) {
      e = unescape(encodeURIComponent(e));
      let t;
      const r = [];
      let n = 0;
      for (t = 0; t < e.length; t++) {
        n = (n << 8) | e.charCodeAt(t);
        if ((3 & t) == 3) {
          r.push(n);
          n = 0;
        }
      }
      if (3 & t) {
        r.push(aY.bitArray.partial(8 * (3 & t), n));
      }
      return r;
    },
  };
  aY.codec.base64 = {
    _chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    fromBits: function (e, t, r) {
      let n;
      let i = "";
      let o = 0;
      let _chars = aY.codec.base64._chars;
      let c = 0;
      const s = aY.bitArray.bitLength(e);
      if (r) {
        _chars = _chars.substr(0, 62) + "-_";
      }
      for (n = 0; 6 * i.length < s;) {
        i += _chars.charAt((c ^ (e[n] >>> o)) >>> 26);
        if (o < 6) {
          c = e[n] << (6 - o);
          o += 26;
          n++;
        } else {
          c <<= 6;
          o -= 6;
        }
      }
      while (3 & i.length && !t) {
        i += "=";
      }
      return i;
    },
    toBits: function (e, t) {
      e = e.replace(/\s|=/g, "");
      let r;
      let n;
      const i = [];
      let o = 0;
      let _chars = aY.codec.base64._chars;
      let c = 0;
      if (t) {
        _chars = _chars.substr(0, 62) + "-_";
      }
      for (r = 0; r < e.length; r++) {
        if ((n = _chars.indexOf(e.charAt(r))) < 0) {
          throw new aY.exception.invalid("this isn't base64!");
        }
        if (o > 26) {
          o -= 26;
          i.push(c ^ (n >>> o));
          c = n << (32 - o);
        } else {
          c ^= n << (32 - (o += 6));
        }
      }
      if (56 & o) {
        i.push(aY.bitArray.partial(56 & o, c, 1));
      }
      return i;
    },
  };
  aY.codec.base64url = {
    fromBits: function (e) {
      return aY.codec.base64.fromBits(e, 1, 1);
    },
    toBits: function (e) {
      return aY.codec.base64.toBits(e, 1);
    },
  };
  aY.mode.gcm = {
    name: "gcm",
    encrypt: function (e, t, r, n, i) {
      let o;
      const a = t.slice(0);
      const aY_bitArray = aY.bitArray;
      i = i || 128;
      n = n || [];
      o = aY.mode.gcm._ctrMode(true, e, a, n, r, i);
      return aY_bitArray.concat(o.data, o.tag);
    },
    decrypt: function (e, t, r, n, i) {
      let o;
      let a;
      let c = t.slice(0);
      const aY_bitArray = aY.bitArray;
      const u = aY_bitArray.bitLength(c);
      n = n || [];
      if ((i = i || 128) <= u) {
        a = aY_bitArray.bitSlice(c, u - i);
        c = aY_bitArray.bitSlice(c, 0, u - i);
      } else {
        a = c;
        c = [];
      }
      o = aY.mode.gcm._ctrMode(false, e, c, n, r, i);
      if (!aY_bitArray.equal(o.tag, a)) {
        throw new aY.exception.corrupt("gcm: tag doesn't match");
      }
      return o.data;
    },
    _galoisMultiply: function (e, t) {
      let r;
      let n;
      let i;
      let o;
      let a;
      const _xor4 = aY.bitArray._xor4;
      i = [0, 0, 0, 0];
      o = t.slice(0);
      for (r = 0; r < 128; r++) {
        if ((e[Math.floor(r / 32)] & (1 << (31 - (r % 32)))) != 0) {
          i = _xor4(i, o);
        }
        a = (1 & o[3]) != 0;
        for (n = 3; n > 0; n--) {
          o[n] = (o[n] >>> 1) | ((1 & o[n - 1]) << 31);
        }
        o[0] = o[0] >>> 1;
        if (a) {
          o[0] = -520093696 ^ o[0];
        }
      }
      return i;
    },
    _ghash: function (e, t, r) {
      let n;
      let i;
      const r_length = r.length;
      n = t.slice(0);
      for (i = 0; i < r_length; i += 4) {
        n[0] ^= r[i];
        n[1] ^= r[i + 1];
        n[2] ^= r[i + 2];
        n[3] ^= r[i + 3];
        n = aY.mode.gcm._galoisMultiply(n, e);
      }
      return n;
    },
    _ctrMode: function (e, t, r, n, i, o) {
      let a;
      let c;
      let s;
      let u;
      let f;
      let h;
      let l;
      let p;
      let d;
      let y;
      let v;
      let g;
      const aY_bitArray = aY.bitArray;
      d = r.length;
      y = aY_bitArray.bitLength(r);
      v = aY_bitArray.bitLength(n);
      g = aY_bitArray.bitLength(i);
      a = t.encrypt([0, 0, 0, 0]);
      if (g === 96) {
        c = i.slice(0);
        c = aY_bitArray.concat(c, [1]);
      } else {
        c = aY.mode.gcm._ghash(a, [0, 0, 0, 0], i);
        c = aY.mode.gcm._ghash(a, c, [0, 0, Math.floor(g / 4294967296), 0 | g]);
      }
      s = aY.mode.gcm._ghash(a, [0, 0, 0, 0], n);
      h = c.slice(0);
      l = s.slice(0);
      if (!e) {
        l = aY.mode.gcm._ghash(a, s, r);
      }
      for (f = 0; f < d; f += 4) {
        h[3]++;
        u = t.encrypt(h);
        r[f] ^= u[0];
        r[f + 1] ^= u[1];
        r[f + 2] ^= u[2];
        r[f + 3] ^= u[3];
      }
      r = aY_bitArray.clamp(r, y);
      if (e) {
        l = aY.mode.gcm._ghash(a, s, r);
      }
      p = [
        Math.floor(v / 4294967296),
        0 | v,
        Math.floor(y / 4294967296),
        0 | y,
      ];
      l = aY.mode.gcm._ghash(a, l, p);
      u = t.encrypt(c);
      l[0] ^= u[0];
      l[1] ^= u[1];
      l[2] ^= u[2];
      l[3] ^= u[3];
      return {
        tag: aY_bitArray.bitSlice(l, 0, o),
        data: r,
      };
    },
  };
  const aV = function () {
    const e = B(this);
    let t = "";
    if (e.global) {
      t += "g";
    }
    if (e.ignoreCase) {
      t += "i";
    }
    if (e.multiline) {
      t += "m";
    }
    if (e.dotAll) {
      t += "s";
    }
    if (e.unicode) {
      t += "u";
    }
    if (e.sticky) {
      t += "y";
    }
    return t;
  };
  const aX = {};
  aX.UNSUPPORTED_Y = c(() => {
    const e = RegExp("a", "y");
    e.lastIndex = 2;
    return e.exec("abcd") != null;
  });
  aX.BROKEN_CARET = c(() => {
    const e = RegExp("^r", "gy");
    e.lastIndex = 2;
    return e.exec("str") != null;
  });
  let aW;
  let az;
  const exec = RegExp.prototype.exec;
  const aZ = j_exports("native-string-replace", String.prototype.replace);
  let a$ = exec;
  aW = /a/;
  az = /b*/g;
  exec.call(aW, "a");
  exec.call(az, "a");
  const aJ = aW.lastIndex !== 0 || az.lastIndex !== 0;
  const aQ = aX.UNSUPPORTED_Y || aX.BROKEN_CARET;
  const a0 = /()??/.exec("")[1] !== undefined;
  if (aJ || a0 || aQ) {
    a$ = function (e) {
      let t;
      let r;
      let n;
      let i;
      const o = aQ && this.sticky;
      let a = aV.call(this);
      let source = this.source;
      let s = 0;
      let u = e;
      if (o) {
        if ((a = a.replace("y", "")).indexOf("g") === -1) {
          a += "g";
        }
        u = String(e).slice(this.lastIndex);
        if (
          this.lastIndex > 0 &&
          (!this.multiline ||
            (this.multiline && e[this.lastIndex - 1] !== "\n"))
        ) {
          source = "(?: " + source + ")";
          u = " " + u;
          s++;
        }
        r = RegExp("^(?:" + source + ")", a);
      }
      if (a0) {
        r = RegExp("^" + source + "$(?!\\s)", a);
      }
      if (aJ) {
        t = this.lastIndex;
      }
      n = exec.call(o ? r : this, u);
      if (o) {
        if (n) {
          n.input = n.input.slice(s);
          n[0] = n[0].slice(s);
          n.index = this.lastIndex;
          this.lastIndex += n[0].length;
        } else {
          this.lastIndex = 0;
        }
      } else if (aJ && n) {
        this.lastIndex = this.global ? n.index + n[0].length : t;
      }
      if (a0 && n && n.length > 1) {
        aZ.call(n[0], r, function () {
          for (i = 1; i < arguments.length - 2; i++) {
            if (arguments[i] === undefined) {
              n[i] = undefined;
            }
          }
        });
      }
      return n;
    };
  }
  const exec_1 = a$;
  eU(
    {
      target: "RegExp",
      proto: true,
      forced: /./.exec !== exec_1,
    },
    {
      exec: exec_1,
    },
  );
  const a2 = tr("species");
  const RegExp_prototype = RegExp.prototype;
  const a3 = !c(() => {
    const e = /./;
    e.exec = function () {
      const e = [];
      e.groups = {
        a: "7",
      };
      return e;
    };
    return "".replace(e, "$<a>") !== "7";
  });
  const REPLACE_KEEPS_$0 = "a".replace(/./, "$0") === "$0";
  const a5 = tr("replace");
  const REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE =
    !!/./[a5] && /./[a5]("a", "$0") === "";
  const a7 = !c(() => {
    const e = /(?:)/;
    const e_exec = e.exec;
    e.exec = function () {
      return e_exec.apply(this, arguments);
    };
    const r = "ab".split(e);
    return r.length !== 2 || r[0] !== "a" || r[1] !== "b";
  });
  const a9 = (e, t, r, n) => {
    const i = tr(e);
    const o = !c(() => {
      const t = {};
      t[i] = function () {
        return 7;
      };
      return ""[e](t) != 7;
    });
    const a =
      o &&
      !c(() => {
        let t = false;
        let r = /a/;
        if (e === "split") {
          r = {};
          r.constructor = {};
          r.constructor[a2] = function () {
            return r;
          };
          r.flags = "";
          r[i] = /./[i];
        }
        r.exec = function () {
          t = true;
          return null;
        };
        r[i]("");
        return !t;
      });
    if (
      !o ||
      !a ||
      (e === "replace" &&
        (!a3 ||
          !REPLACE_KEEPS_$0 ||
          REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE)) ||
      (e === "split" && !a7)
    ) {
      const s = /./[i];
      const u = r(
        i,
        ""[e],
        function (e, t, r, n, i) {
          const t_exec = t.exec;
          if (t_exec === exec_1 || t_exec === RegExp_prototype.exec) {
            if (o && !i) {
              return {
                done: true,
                value: s.call(t, r, n),
              };
            }
            return {
              done: true,
              value: e.call(r, t, n),
            };
          }
          return {
            done: false,
          };
        },
        {
          REPLACE_KEEPS_$0,
          REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,
        },
      );
      const f = u[0];
      const h = u[1];
      P_exports(String.prototype, e, f);
      P_exports(
        RegExp_prototype,
        i,
        t == 2
          ? function (e, t) {
              return h.call(e, this, t);
            }
          : function (e) {
              return h.call(e, this);
            },
      );
    }
    if (n) {
      M(RegExp_prototype[i], "sham", true);
    }
  };
  const rE_charAt_1 = rE.charAt;
  const ct = (e, t, r) => t + (r ? rE_charAt_1(e, t).length : 1);
  const Math_floor_3 = Math.floor;
  const replace = "".replace;
  const ci = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
  const co = /\$([$&'`]|\d{1,2})/g;
  const ca = (e, t) => {
    const e_exec = e.exec;
    if (typeof e_exec === "function") {
      const n = e_exec.call(e, t);
      if (typeof n !== "object") {
        throw TypeError(
          "RegExp exec method returned something other than an Object or null",
        );
      }
      return n;
    }
    if (d(e) !== "RegExp") {
      throw TypeError("RegExp#exec called on incompatible receiver");
    }
    return exec_1.call(e, t);
  };
  const cc = (e, t, r, n, i, o) => {
    const a = r + e.length;
    const n_length = n.length;
    let s = co;
    if (i !== undefined) {
      i = T(i);
      s = ci;
    }
    return replace.call(o, s, function (o, s) {
      let u;
      switch (s.charAt(0)) {
        case "$":
          return "$";
        case "&":
          return e;
        case "`":
          return t.slice(0, r);
        case "'":
          return t.slice(a);
        case "<":
          u = i[s.slice(1, -1)];
          break;
        default:
          const f = +s;
          if (f === 0) {
            return o;
          }
          if (f > n_length) {
            const h = Math_floor_3(f / 10);
            if (h === 0) {
              return o;
            }
            if (h <= n_length) {
              if (n[h - 1] === undefined) {
                return s.charAt(1);
              }
              return n[h - 1] + s.charAt(1);
            }
            return o;
          }
          u = n[f - 1];
      }
      if (u === undefined) {
        return "";
      }
      return u;
    });
  };
  const Math_max_1 = Math.max;
  const Math_min_4 = Math.min;
  a9("replace", 2, (e, t, r, n) => {
    const n_REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE =
      n.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE;
    const n_REPLACE_KEEPS_$0 = n.REPLACE_KEEPS_$0;
    const a = n_REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? "$" : "$0";
    return [
      function (r, n) {
        const i = g(this);
        const o = r == null ? undefined : r[e];
        if (o !== undefined) {
          return o.call(r, i, n);
        }
        return t.call(String(i), r, n);
      },
      function (e, n) {
        if (
          (!n_REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE &&
            n_REPLACE_KEEPS_$0) ||
          (typeof n === "string" && n.indexOf(a) === -1)
        ) {
          const c = r(t, e, this, n);
          if (c.done) {
            return c.value;
          }
        }
        const s = B(e);
        const u = String(this);
        const f = typeof n === "function";
        if (!f) {
          n = String(n);
        }
        const s_global = s.global;
        if (s_global) {
          var l = s.unicode;
          s.lastIndex = 0;
        }
        const p = [];
        while (true) {
          var d = ca(s, u);
          if (d === null || (p.push(d), !s_global)) {
            break;
          }
          if (String(d[0]) === "") {
            s.lastIndex = ct(u, eb(s.lastIndex), l);
          }
        }
        let y;
        let v = "";
        let g = 0;
        for (let b = 0; b < p.length; b++) {
          d = p[b];
          const E = String(d[0]);
          const m = Math_max_1(Math_min_4(ev(d.index), u.length), 0);
          const T = [];
          for (let S = 1; S < d.length; S++) {
            T.push((y = d[S]) === undefined ? y : String(y));
          }
          const A = d.groups;
          if (f) {
            const _ = [E].concat(T, m, u);
            if (A !== undefined) {
              _.push(A);
            }
            var x = String(n.apply(undefined, _));
          } else {
            x = cc(E, u, m, T, A, n);
          }
          if (m >= g) {
            v += u.slice(g, m) + x;
            g = m + E.length;
          }
        }
        return v + u.slice(g);
      },
    ];
  });
  const cf = "toString";
  const RegExp_prototype_1 = RegExp.prototype;
  const cl = RegExp_prototype_1[cf];
  const cp = c(
    () =>
      cl.call({
        source: "a",
        flags: "b",
      }) != "/a/b",
  );
  const cd = cl.name != cf;
  if (cp || cd) {
    P_exports(
      RegExp.prototype,
      cf,
      function () {
        const e = B(this);
        const t = String(e.source);
        const e_flags = e.flags;
        return (
          "/" +
          t +
          "/" +
          String(
            e_flags === undefined &&
              e instanceof RegExp &&
              !("flags" in RegExp_prototype_1)
              ? aV.call(e)
              : e_flags,
          )
        );
      },
      {
        unsafe: true,
      },
    );
  }
  const cy = rF("slice");
  const cv = tr("species");
  const slice_2 = [].slice;
  const Math_max_2 = Math.max;
  eU(
    {
      target: "Array",
      proto: true,
      forced: !cy,
    },
    {
      slice: function (e, t) {
        let r;
        let n;
        let i;
        const o = b(this);
        const a = eb(o.length);
        let c = eT(e, a);
        const s = eT(t === undefined ? a : t, a);
        if (
          rO(o) &&
          (typeof (r = o.constructor) === "function" &&
          (r === Array || rO(r.prototype))
            ? (r = undefined)
            : E(r) && (r = r[cv]) === null && (r = undefined),
          r === Array || r === undefined)
        ) {
          return slice_2.call(o, c, s);
        }
        n = new (r === undefined ? Array : r)(Math_max_2(s - c, 0));
        for (i = 0; c < s; c++, i++) {
          if (c in o) {
            rY(n, i, o[c]);
          }
        }
        n.length = i;
        return n;
      },
    },
  );
  const cE = "ArrayBuffer";
  const cm = i6[cE];
  eU(
    {
      global: true,
      forced: globalThis_1[cE] !== cm,
    },
    {
      ArrayBuffer: cm,
    },
  );
  rp(cE);
  const cT =
    "[	\n\v\f\r \xa0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]";
  const cS = RegExp("^" + cT + cT + "*");
  const cA = RegExp(`${cT + cT}*\$`);
  const c_ = (e) =>
    function (t) {
      let r = String(g(t));
      if (1 & e) {
        r = r.replace(cS, "");
      }
      if (2 & e) {
        r = r.replace(cA, "");
      }
      return r;
    };
  const cx = {
    start: c_(1),
    end: c_(2),
    trim: c_(3),
  };
  const cw = ep.f;
  const cI = a.f;
  const ck = R.f;
  const cx_trim = cx.trim;
  const cB = "Number";
  const cC = globalThis_1[cB];
  const cC_prototype = cC.prototype;
  const cP = d(tl(cC_prototype)) == cB;
  const cL = (e) => {
    let t;
    let r;
    let n;
    let i;
    let o;
    let a;
    let c;
    let s;
    let u = m(e, false);
    if (typeof u === "string" && u.length > 2) {
      if ((t = (u = cx_trim(u)).charCodeAt(0)) === 43 || t === 45) {
        if ((r = u.charCodeAt(2)) === 88 || r === 120) {
          return 0 / 0;
        }
      } else if (t === 48) {
        switch (u.charCodeAt(1)) {
          case 66:
          case 98:
            n = 2;
            i = 49;
            break;
          case 79:
          case 111:
            n = 8;
            i = 55;
            break;
          default:
            return +u;
        }
        a = (o = u.slice(2)).length;
        for (c = 0; c < a; c++) {
          if ((s = o.charCodeAt(c)) < 48 || s > i) {
            return 0 / 0;
          }
        }
        return parseInt(o, n);
      }
    }
    return +u;
  };
  if (eC(cB, !cC(" 0o1") || !cC("0b1") || cC("+0x1"))) {
    let cO;
    const cH = function (e) {
      const t = arguments.length < 1 ? 0 : e;
      const r = this;
      if (
        r instanceof cH &&
        (cP
          ? c(() => {
              cC_prototype.valueOf.call(r);
            })
          : d(r) != cB)
      ) {
        return rf(new cC(cL(t)), r, cH);
      }
      return cL(t);
    };
    for (
      let cN = s
          ? cw(cC)
          : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(
              ",",
            ),
        cU = 0;
      cN.length > cU;
      cU++
    ) {
      if (A(cC, (cO = cN[cU])) && !A(cH, cO)) {
        ck(cH, cO, cI(cC, cO));
      }
    }
    cH.prototype = cC_prototype;
    cC_prototype.constructor = cH;
    P_exports(globalThis_1, cB, cH);
  }
  a9("match", 1, (e, t, r) => [
    function (t) {
      const r = g(this);
      const n = t == null ? undefined : t[e];
      if (n !== undefined) {
        return n.call(t, r);
      }
      return new RegExp(t)[e](String(r));
    },
    function (e) {
      const n = r(t, e, this);
      if (n.done) {
        return n.value;
      }
      const i = B(e);
      const o = String(this);
      if (!i.global) {
        return ca(i, o);
      }
      const i_unicode = i.unicode;
      i.lastIndex = 0;
      let c;
      const s = [];
      let u = 0;
      while ((c = ca(i, o)) !== null) {
        const f = String(c[0]);
        s[u] = f;
        if (f === "") {
          i.lastIndex = ct(o, eb(i.lastIndex), i_unicode);
        }
        u++;
      }
      if (u === 0) {
        return null;
      }
      return s;
    },
  ]);
  let cD;
  let cG;
  let cj;
  let cF;
  var cK = {
    str2hex: function (e) {
      if (e === "") {
        return "";
      }
      const t = [];
      for (let r = 0; r < e.length; r++) {
        t.push(e.charCodeAt(r));
      }
      return t;
    },
    Base64ToHex: function (e) {
      const t =
        arguments.length > 1 && arguments[1] !== undefined && arguments[1];
      const r = window.atob(e.replace(/-/g, "+").replace(/_/g, "/"));
      if (t) {
        const n = [];
        for (let i = 0; i < r.length; i++) {
          n.push(r.charCodeAt(i));
        }
        return new Uint8Array(n).buffer;
      }
      let o = "";
      for (let a = 0; a < r.length; a++) {
        o += "0".concat(r.charCodeAt(a).toString(16)).substr(-2);
      }
      return o;
    },
    checkUnionInfoExpired: function () {
      const e =
        arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
      const t =
        arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
      const r =
        arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 30;
      if (t.indexOf(e) === 0) {
        const n = parseInt(cV(t.slice(e.length)));
        const i = new Date().getTime() - n;
        if (i > 0 && i <= 1000 * r) {
          return true;
        }
        console.error("UnionInfo timestamp expire!!!");
      } else {
        console.error("unionID and UnionInfo not match!!!");
      }
      return false;
    },
    getUnionInfo: function () {
      return ""
        .concat(
          arguments.length > 0 && arguments[0] !== undefined
            ? arguments[0]
            : "",
        )
        .concat(cY(new Date().getTime().toString()));
    },
    StringToArrayBuffer: function (e) {
      const t = new ArrayBuffer(e.length);
      const r = new Uint8Array(t);
      for (let n = 0; n < e.length; n++) {
        r[n] = e.charCodeAt(n);
      }
      return t;
    },
    ArrayBufferToString: function (e) {
      const t = [];
      e = ArrayBuffer.isView(e) ? e : new Uint8Array(e);
      for (let r = 0; r < e.length; r++) {
        t.push(String.fromCharCode(e[r]));
      }
      return t.join("");
    },
    isBase64: function (e) {
      return /^([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{4}|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{2}==)$/.test(
        e,
      );
    },
    fromHex: function (e) {
      const t = new Uint8Array(e.length / 2);
      for (let r = 0; r < e.length; r += 2) {
        t[r / 2] = window.parseInt(e.substr(r, 2), 16);
      }
      return t;
    },
    fromCharCode: function (e) {
      let t = "";
      for (let r = 0; r < e.length; r += 16000) {
        const n = e.subarray(r, r + 16000);
        t += String.fromCharCode.apply(null, n);
      }
      return t;
    },
    toBase64: function (e, t) {
      const r = cK.fromCharCode(e);
      t = t === undefined || t;
      const n = window.btoa(r).replace(/\+/g, "-").replace(/\//g, "_");
      if (t) {
        return n;
      }
      return n.replace(/=*$/, "");
    },
    toUTF8: function (e) {
      const t = encodeURIComponent(e);
      for (
        var r = unescape(t), n = new Uint8Array(r.length), i = 0;
        i < r.length;
        ++i
      ) {
        n[i] = r.charCodeAt(i);
      }
      return n.buffer;
    },
  };
  cG = function (e) {
    return e.split("").map((e) => e.charCodeAt(0));
  };
  cj = function (e) {
    return "0".concat(Number(e).toString(16)).substr(-2);
  };
  cF = function (e) {
    return cG("vodTimestampSalt").reduce((acc, item) => acc ^ item, e);
  };
  var cY = (e) => e.split("").map(cG).map(cF).map(cj).join("");
  cD = function (e) {
    return "vodTimestampSalt"
      .split("")
      .map((e) => e.charCodeAt(0))
      .reduce((acc, item) => acc ^ item, e);
  };
  var cV = (e) =>
    e
      .match(/.{1,2}/g)
      .map((e) => parseInt(e, 16))
      .map(cD)
      .map((e) => String.fromCharCode(e))
      .join("");
  function webCryptoDecrypt(e, t) {
    return cW.apply(this, arguments);
  }
  function cW() {
    return (cW = eF(
      eD().mark(function e(t, r) {
        let n;
        let tagLength;
        let o;
        let a;
        let c;
        return eD().wrap(
          function (e) {
            while (true) {
              switch ((e.prev = e.next)) {
                case 0:
                  n = r.iv;
                  tagLength = r.tagLength;
                  o = r.data;
                  a = null;
                  t = cK.StringToArrayBuffer(t);
                  o = cK.Base64ToHex(o, true);
                  e.prev = 4;
                  e.next = 7;
                  return crypto.subtle.importKey("raw", t, "AES-GCM", true, [
                    "encrypt",
                    "decrypt",
                  ]);
                case 7:
                  c = e.sent;
                  e.next = 13;
                  break;
                case 10:
                  e.prev = 10;
                  e.t0 = e.catch(4);
                  throw Error(
                    "importKey: ".concat(
                      (e.t0 === null || e.t0 === undefined
                        ? undefined
                        : e.t0.message) || e.t0,
                    ),
                  );
                case 13:
                  e.prev = 13;
                  e.next = 16;
                  return crypto.subtle.decrypt(
                    {
                      name: "AES-GCM",
                      iv: new Uint8Array(n),
                      tagLength,
                    },
                    c,
                    o,
                  );
                case 16:
                  a = e.sent;
                  e.next = 30;
                  break;
                case 19:
                  e.prev = 19;
                  e.t1 = e.catch(13);
                  if (String(e.t1) !== "OperationError") {
                    e.next = 25;
                    break;
                  }
                  throw Error("Wrong Password.");
                case 25:
                  if (String(e.t1) !== "InvalidAccessError") {
                    e.next = 29;
                    break;
                  }
                  throw Error("Invalid Key");
                case 29:
                  throw e.t1;
                case 30:
                  return e.abrupt("return", new TextDecoder("utf-8").decode(a));
                case 31:
                case "end":
                  return e.stop();
              }
            }
          },
          e,
          null,
          [
            [4, 10],
            [13, 19],
          ],
        );
      }),
    )).apply(this, arguments);
  }
  function cz(e, t) {
    return cq.apply(this, arguments);
  }
  function cq() {
    return (cq = eF(
      eD().mark(function* e(t, r) {
        let n;
        let i;
        let o;
        let a;
        let c;
        let s;
        let u;
        n = r.iv;
        i = r.tagLength;
        o = r.data;
        a = btoa(cK.ArrayBufferToString(n));
        c = aY.codec.base64.toBits(a);
        s = aY.codec.utf8String.toBits(t);
        u = new aY.cipher.aes(s);
        return aY.codec.utf8String.fromBits(
          aY.mode.gcm.decrypt(u, aY.codec.base64.toBits(o), c, [], i),
        );
      }),
    )).apply(this, arguments);
  }
  let cZ;
  const c$ = {
    webCryptoDecrypt,
    decrypt:
      ((cZ = eF(
        eD().mark(function e(t, r) {
          let n;
          let i;
          return eD().wrap(
            function (e) {
              while (true) {
                switch ((e.prev = e.next)) {
                  case 0:
                    if (typeof r === "string") {
                      r = JSON.parse(r);
                    }
                    if (
                      !r.enableSoftwareAES &&
                      (n = crypto) != null &&
                      n.subtle
                    ) {
                      e.next = 7;
                      break;
                    }
                    e.next = 4;
                    return cz(t, r);
                  case 4:
                  case 10:
                    i = e.sent;
                    e.next = 18;
                    break;
                  case 7:
                    e.prev = 7;
                    e.next = 10;
                    return webCryptoDecrypt(t, r);
                  case 13:
                    e.prev = 13;
                    e.t0 = e.catch(7);
                    e.next = 17;
                    return cz(t, r);
                  case 17:
                    i = e.sent;
                  case 18:
                    return e.abrupt("return", i);
                  case 19:
                  case "end":
                    return e.stop();
                }
              }
            },
            e,
            null,
            [[7, 13]],
          );
        }),
      )),
      function (e, t) {
        return cZ.apply(this, arguments);
      }),
  };
  const cJ = {
    exports: {},
  };
  cJ.exports = (function () {
    const e = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
    ];
    function t(e, t) {
      let r = e[0];
      let n = e[1];
      let i = e[2];
      let o = e[3];
      n =
        ((((n +=
          ((((i =
            ((((i +=
              ((((o =
                ((((o +=
                  ((((r =
                    ((((r += (((n & i) | (~n & o)) + t[0] - 680876936) | 0) <<
                      7) |
                      (r >>> 25)) +
                      n) |
                    0) &
                    n) |
                    (~r & i)) +
                    t[1] -
                    389564586) |
                  0) <<
                  12) |
                  (o >>> 20)) +
                  r) |
                0) &
                r) |
                (~o & n)) +
                t[2] +
                606105819) |
              0) <<
              17) |
              (i >>> 15)) +
              o) |
            0) &
            o) |
            (~i & r)) +
            t[3] -
            1044525330) |
          0) <<
          22) |
          (n >>> 10)) +
          i) |
        0;
      n =
        ((((n +=
          ((((i =
            ((((i +=
              ((((o =
                ((((o +=
                  ((((r =
                    ((((r += (((n & i) | (~n & o)) + t[4] - 176418897) | 0) <<
                      7) |
                      (r >>> 25)) +
                      n) |
                    0) &
                    n) |
                    (~r & i)) +
                    t[5] +
                    1200080426) |
                  0) <<
                  12) |
                  (o >>> 20)) +
                  r) |
                0) &
                r) |
                (~o & n)) +
                t[6] -
                1473231341) |
              0) <<
              17) |
              (i >>> 15)) +
              o) |
            0) &
            o) |
            (~i & r)) +
            t[7] -
            45705983) |
          0) <<
          22) |
          (n >>> 10)) +
          i) |
        0;
      n =
        ((((n +=
          ((((i =
            ((((i +=
              ((((o =
                ((((o +=
                  ((((r =
                    ((((r += (((n & i) | (~n & o)) + t[8] + 1770035416) | 0) <<
                      7) |
                      (r >>> 25)) +
                      n) |
                    0) &
                    n) |
                    (~r & i)) +
                    t[9] -
                    1958414417) |
                  0) <<
                  12) |
                  (o >>> 20)) +
                  r) |
                0) &
                r) |
                (~o & n)) +
                t[10] -
                42063) |
              0) <<
              17) |
              (i >>> 15)) +
              o) |
            0) &
            o) |
            (~i & r)) +
            t[11] -
            1990404162) |
          0) <<
          22) |
          (n >>> 10)) +
          i) |
        0;
      n =
        ((((n +=
          ((((i =
            ((((i +=
              ((((o =
                ((((o +=
                  ((((r =
                    ((((r += (((n & i) | (~n & o)) + t[12] + 1804603682) | 0) <<
                      7) |
                      (r >>> 25)) +
                      n) |
                    0) &
                    n) |
                    (~r & i)) +
                    t[13] -
                    40341101) |
                  0) <<
                  12) |
                  (o >>> 20)) +
                  r) |
                0) &
                r) |
                (~o & n)) +
                t[14] -
                1502002290) |
              0) <<
              17) |
              (i >>> 15)) +
              o) |
            0) &
            o) |
            (~i & r)) +
            t[15] +
            1236535329) |
          0) <<
          22) |
          (n >>> 10)) +
          i) |
        0;
      n =
        ((((n +=
          ((((i =
            ((((i +=
              ((((o =
                ((((o +=
                  ((((r =
                    ((((r += (((n & o) | (i & ~o)) + t[1] - 165796510) | 0) <<
                      5) |
                      (r >>> 27)) +
                      n) |
                    0) &
                    i) |
                    (n & ~i)) +
                    t[6] -
                    1069501632) |
                  0) <<
                  9) |
                  (o >>> 23)) +
                  r) |
                0) &
                n) |
                (r & ~n)) +
                t[11] +
                643717713) |
              0) <<
              14) |
              (i >>> 18)) +
              o) |
            0) &
            r) |
            (o & ~r)) +
            t[0] -
            373897302) |
          0) <<
          20) |
          (n >>> 12)) +
          i) |
        0;
      n =
        ((((n +=
          ((((i =
            ((((i +=
              ((((o =
                ((((o +=
                  ((((r =
                    ((((r += (((n & o) | (i & ~o)) + t[5] - 701558691) | 0) <<
                      5) |
                      (r >>> 27)) +
                      n) |
                    0) &
                    i) |
                    (n & ~i)) +
                    t[10] +
                    38016083) |
                  0) <<
                  9) |
                  (o >>> 23)) +
                  r) |
                0) &
                n) |
                (r & ~n)) +
                t[15] -
                660478335) |
              0) <<
              14) |
              (i >>> 18)) +
              o) |
            0) &
            r) |
            (o & ~r)) +
            t[4] -
            405537848) |
          0) <<
          20) |
          (n >>> 12)) +
          i) |
        0;
      n =
        ((((n +=
          ((((i =
            ((((i +=
              ((((o =
                ((((o +=
                  ((((r =
                    ((((r += (((n & o) | (i & ~o)) + t[9] + 568446438) | 0) <<
                      5) |
                      (r >>> 27)) +
                      n) |
                    0) &
                    i) |
                    (n & ~i)) +
                    t[14] -
                    1019803690) |
                  0) <<
                  9) |
                  (o >>> 23)) +
                  r) |
                0) &
                n) |
                (r & ~n)) +
                t[3] -
                187363961) |
              0) <<
              14) |
              (i >>> 18)) +
              o) |
            0) &
            r) |
            (o & ~r)) +
            t[8] +
            1163531501) |
          0) <<
          20) |
          (n >>> 12)) +
          i) |
        0;
      n =
        ((((n +=
          ((((i =
            ((((i +=
              ((((o =
                ((((o +=
                  ((((r =
                    ((((r += (((n & o) | (i & ~o)) + t[13] - 1444681467) | 0) <<
                      5) |
                      (r >>> 27)) +
                      n) |
                    0) &
                    i) |
                    (n & ~i)) +
                    t[2] -
                    51403784) |
                  0) <<
                  9) |
                  (o >>> 23)) +
                  r) |
                0) &
                n) |
                (r & ~n)) +
                t[7] +
                1735328473) |
              0) <<
              14) |
              (i >>> 18)) +
              o) |
            0) &
            r) |
            (o & ~r)) +
            t[12] -
            1926607734) |
          0) <<
          20) |
          (n >>> 12)) +
          i) |
        0;
      n =
        ((((n +=
          (((i =
            ((((i +=
              (((o =
                ((((o +=
                  (((r =
                    ((((r += ((n ^ i ^ o) + t[5] - 378558) | 0) << 4) |
                      (r >>> 28)) +
                      n) |
                    0) ^
                    n ^
                    i) +
                    t[8] -
                    2022574463) |
                  0) <<
                  11) |
                  (o >>> 21)) +
                  r) |
                0) ^
                r ^
                n) +
                t[11] +
                1839030562) |
              0) <<
              16) |
              (i >>> 16)) +
              o) |
            0) ^
            o ^
            r) +
            t[14] -
            35309556) |
          0) <<
          23) |
          (n >>> 9)) +
          i) |
        0;
      n =
        ((((n +=
          (((i =
            ((((i +=
              (((o =
                ((((o +=
                  (((r =
                    ((((r += ((n ^ i ^ o) + t[1] - 1530992060) | 0) << 4) |
                      (r >>> 28)) +
                      n) |
                    0) ^
                    n ^
                    i) +
                    t[4] +
                    1272893353) |
                  0) <<
                  11) |
                  (o >>> 21)) +
                  r) |
                0) ^
                r ^
                n) +
                t[7] -
                155497632) |
              0) <<
              16) |
              (i >>> 16)) +
              o) |
            0) ^
            o ^
            r) +
            t[10] -
            1094730640) |
          0) <<
          23) |
          (n >>> 9)) +
          i) |
        0;
      n =
        ((((n +=
          (((i =
            ((((i +=
              (((o =
                ((((o +=
                  (((r =
                    ((((r += ((n ^ i ^ o) + t[13] + 681279174) | 0) << 4) |
                      (r >>> 28)) +
                      n) |
                    0) ^
                    n ^
                    i) +
                    t[0] -
                    358537222) |
                  0) <<
                  11) |
                  (o >>> 21)) +
                  r) |
                0) ^
                r ^
                n) +
                t[3] -
                722521979) |
              0) <<
              16) |
              (i >>> 16)) +
              o) |
            0) ^
            o ^
            r) +
            t[6] +
            76029189) |
          0) <<
          23) |
          (n >>> 9)) +
          i) |
        0;
      n =
        ((((n +=
          (((i =
            ((((i +=
              (((o =
                ((((o +=
                  (((r =
                    ((((r += ((n ^ i ^ o) + t[9] - 640364487) | 0) << 4) |
                      (r >>> 28)) +
                      n) |
                    0) ^
                    n ^
                    i) +
                    t[12] -
                    421815835) |
                  0) <<
                  11) |
                  (o >>> 21)) +
                  r) |
                0) ^
                r ^
                n) +
                t[15] +
                530742520) |
              0) <<
              16) |
              (i >>> 16)) +
              o) |
            0) ^
            o ^
            r) +
            t[2] -
            995338651) |
          0) <<
          23) |
          (n >>> 9)) +
          i) |
        0;
      n =
        ((((n +=
          (((o =
            ((((o +=
              ((n ^
                ((r =
                  ((((r += ((i ^ (n | ~o)) + t[0] - 198630844) | 0) << 6) |
                    (r >>> 26)) +
                    n) |
                  0) |
                  ~i)) +
                t[7] +
                1126891415) |
              0) <<
              10) |
              (o >>> 22)) +
              r) |
            0) ^
            ((i =
              ((((i += ((r ^ (o | ~n)) + t[14] - 1416354905) | 0) << 15) |
                (i >>> 17)) +
                o) |
              0) |
              ~r)) +
            t[5] -
            57434055) |
          0) <<
          21) |
          (n >>> 11)) +
          i) |
        0;
      n =
        ((((n +=
          (((o =
            ((((o +=
              ((n ^
                ((r =
                  ((((r += ((i ^ (n | ~o)) + t[12] + 1700485571) | 0) << 6) |
                    (r >>> 26)) +
                    n) |
                  0) |
                  ~i)) +
                t[3] -
                1894986606) |
              0) <<
              10) |
              (o >>> 22)) +
              r) |
            0) ^
            ((i =
              ((((i += ((r ^ (o | ~n)) + t[10] - 1051523) | 0) << 15) |
                (i >>> 17)) +
                o) |
              0) |
              ~r)) +
            t[1] -
            2054922799) |
          0) <<
          21) |
          (n >>> 11)) +
          i) |
        0;
      n =
        ((((n +=
          (((o =
            ((((o +=
              ((n ^
                ((r =
                  ((((r += ((i ^ (n | ~o)) + t[8] + 1873313359) | 0) << 6) |
                    (r >>> 26)) +
                    n) |
                  0) |
                  ~i)) +
                t[15] -
                30611744) |
              0) <<
              10) |
              (o >>> 22)) +
              r) |
            0) ^
            ((i =
              ((((i += ((r ^ (o | ~n)) + t[6] - 1560198380) | 0) << 15) |
                (i >>> 17)) +
                o) |
              0) |
              ~r)) +
            t[13] +
            1309151649) |
          0) <<
          21) |
          (n >>> 11)) +
          i) |
        0;
      n =
        ((((n +=
          (((o =
            ((((o +=
              ((n ^
                ((r =
                  ((((r += ((i ^ (n | ~o)) + t[4] - 145523070) | 0) << 6) |
                    (r >>> 26)) +
                    n) |
                  0) |
                  ~i)) +
                t[11] -
                1120210379) |
              0) <<
              10) |
              (o >>> 22)) +
              r) |
            0) ^
            ((i =
              ((((i += ((r ^ (o | ~n)) + t[2] + 718787259) | 0) << 15) |
                (i >>> 17)) +
                o) |
              0) |
              ~r)) +
            t[9] -
            343485551) |
          0) <<
          21) |
          (n >>> 11)) +
          i) |
        0;
      e[0] = (r + e[0]) | 0;
      e[1] = (n + e[1]) | 0;
      e[2] = (i + e[2]) | 0;
      e[3] = (o + e[3]) | 0;
    }
    function r(e) {
      let t;
      const r = [];
      for (t = 0; t < 64; t += 4) {
        r[t >> 2] =
          e.charCodeAt(t) +
          (e.charCodeAt(t + 1) << 8) +
          (e.charCodeAt(t + 2) << 16) +
          (e.charCodeAt(t + 3) << 24);
      }
      return r;
    }
    function n(e) {
      let t;
      const r = [];
      for (t = 0; t < 64; t += 4) {
        r[t >> 2] =
          e[t] + (e[t + 1] << 8) + (e[t + 2] << 16) + (e[t + 3] << 24);
      }
      return r;
    }
    function i(e) {
      let n;
      let i;
      let o;
      let a;
      let c;
      let s;
      const e_length = e.length;
      const f = [1732584193, -271733879, -1732584194, 271733878];
      for (n = 64; n <= e_length; n += 64) {
        t(f, r(e.substring(n - 64, n)));
      }
      i = (e = e.substring(n - 64)).length;
      o = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      for (n = 0; n < i; n += 1) {
        o[n >> 2] |= e.charCodeAt(n) << ((n % 4) << 3);
      }
      o[n >> 2] |= 128 << ((n % 4) << 3);
      if (n > 55) {
        t(f, o);
        for (n = 0; n < 16; n += 1) {
          o[n] = 0;
        }
      }
      c = parseInt(
        (a = (a = 8 * e_length).toString(16).match(/(.*?)(.{0,8})$/))[2],
        16,
      );
      s = parseInt(a[1], 16) || 0;
      o[14] = c;
      o[15] = s;
      t(f, o);
      return f;
    }
    function o(t) {
      let r;
      for (r = 0; r < t.length; r += 1) {
        t[r] = ((t) => {
          let r;
          let n = "";
          for (r = 0; r < 4; r += 1) {
            n += e[(t >> (8 * r + 4)) & 15] + e[(t >> (8 * r)) & 15];
          }
          return n;
        })(t[r]);
      }
      return t.join("");
    }
    function a(e) {
      if (/[\u0080-\uFFFF]/.test(e)) {
        e = unescape(encodeURIComponent(e));
      }
      return e;
    }
    function c(e) {
      let t;
      const r = [];
      const e_length = e.length;
      for (t = 0; t < e_length - 1; t += 2) {
        r.push(parseInt(e.substr(t, 2), 16));
      }
      return String.fromCharCode.apply(String, r);
    }
    class s {
      constructor() {
        this.reset();
      }
      append(e) {
        this.appendBinary(a(e));
        return this;
      }
      appendBinary(e) {
        this._buff += e;
        this._length += e.length;
        let n;
        const length = this._buff.length;
        for (n = 64; n <= length; n += 64) {
          t(this._hash, r(this._buff.substring(n - 64, n)));
        }
        this._buff = this._buff.substring(n - 64);
        return this;
      }
      end(e) {
        let t;
        let r;
        const _buff = this._buff;
        const n_length = _buff.length;
        const a = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (t = 0; t < n_length; t += 1) {
          a[t >> 2] |= _buff.charCodeAt(t) << ((t % 4) << 3);
        }
        this._finish(a, n_length);
        r = o(this._hash);
        if (e) {
          r = c(r);
        }
        this.reset();
        return r;
      }
      reset() {
        this._buff = "";
        this._length = 0;
        this._hash = [1732584193, -271733879, -1732584194, 271733878];
        return this;
      }
      getState() {
        return {
          buff: this._buff,
          length: this._length,
          hash: this._hash.slice(),
        };
      }
      setState(e) {
        this._buff = e.buff;
        this._length = e.length;
        this._hash = e.hash;
        return this;
      }
      destroy() {
        delete this._hash;
        delete this._buff;
        delete this._length;
      }
      _finish(e, r) {
        let n;
        let i;
        let o;
        let a = r;
        e[a >> 2] |= 128 << ((a % 4) << 3);
        if (a > 55) {
          t(this._hash, e);
          for (a = 0; a < 16; a += 1) {
            e[a] = 0;
          }
        }
        i = parseInt(
          (n = (n = 8 * this._length).toString(16).match(/(.*?)(.{0,8})$/))[2],
          16,
        );
        o = parseInt(n[1], 16) || 0;
        e[14] = i;
        e[15] = o;
        t(this._hash, e);
      }
      static hash(e, t) {
        return s.hashBinary(a(e), t);
      }
      static hashBinary(e, t) {
        const r = o(i(e));
        if (t) {
          return c(r);
        }
        return r;
      }
      static ArrayBuffer() {
        this.reset();
      }
    }
    o(i("hello"));
    if (!(typeof ArrayBuffer === "undefined" || ArrayBuffer.prototype.slice)) {
      (() => {
        function e(e, byteLength) {
          if ((e = 0 | e || 0) < 0) {
            return Math.max(e + byteLength, 0);
          }
          return Math.min(e, byteLength);
        }
        ArrayBuffer.prototype.slice = function (t, r) {
          let n;
          let i;
          let o;
          let a;
          const byteLength = this.byteLength;
          const s = e(t, byteLength);
          let u = byteLength;
          if (r !== undefined) {
            u = e(r, byteLength);
          }
          if (s > u) {
            return new ArrayBuffer(0);
          }
          o = new Uint8Array((i = new ArrayBuffer((n = u - s))));
          a = new Uint8Array(this, s, n);
          o.set(a);
          return i;
        };
      })();
    }
    s.ArrayBuffer.prototype.append = function (e) {
      let r;
      let i;
      let o;
      r = this._buff.buffer;
      (i = new Uint8Array(r.byteLength + e.byteLength)).set(new Uint8Array(r));
      i.set(new Uint8Array(e), r.byteLength);
      const a = i;
      const a_length = a.length;
      this._length += e.byteLength;
      for (o = 64; o <= a_length; o += 64) {
        t(this._hash, n(a.subarray(o - 64, o)));
      }
      this._buff = new Uint8Array(
        o - 64 < a_length ? a.buffer.slice(o - 64) : 0,
      );
      return this;
    };
    s.ArrayBuffer.prototype.end = function (e) {
      let t;
      let r;
      const _buff = this._buff;
      const n_length = _buff.length;
      const a = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      for (t = 0; t < n_length; t += 1) {
        a[t >> 2] |= _buff[t] << ((t % 4) << 3);
      }
      this._finish(a, n_length);
      r = o(this._hash);
      if (e) {
        r = c(r);
      }
      this.reset();
      return r;
    };
    s.ArrayBuffer.prototype.reset = function () {
      this._buff = new Uint8Array(0);
      this._length = 0;
      this._hash = [1732584193, -271733879, -1732584194, 271733878];
      return this;
    };
    s.ArrayBuffer.prototype.getState = function () {
      let e;
      const t = s.prototype.getState.call(this);
      e = t.buff;
      t.buff = String.fromCharCode.apply(null, new Uint8Array(e));
      return t;
    };
    s.ArrayBuffer.prototype.setState = function (e) {
      e.buff = ((e, t) => {
        let r;
        const e_length = e.length;
        const i = new ArrayBuffer(e_length);
        const o = new Uint8Array(i);
        for (r = 0; r < e_length; r += 1) {
          o[r] = e.charCodeAt(r);
        }
        if (t) {
          return o;
        }
        return i;
      })(e.buff, true);
      return s.prototype.setState.call(this, e);
    };
    s.ArrayBuffer.prototype.destroy = s.prototype.destroy;
    s.ArrayBuffer.prototype._finish = s.prototype._finish;
    s.ArrayBuffer.hash = function (e, r) {
      const i = o(
        ((e) => {
          let r;
          let i;
          let o;
          let a;
          let c;
          let s;
          const e_length = e.length;
          const f = [1732584193, -271733879, -1732584194, 271733878];
          for (r = 64; r <= e_length; r += 64) {
            t(f, n(e.subarray(r - 64, r)));
          }
          i = (e = r - 64 < e_length ? e.subarray(r - 64) : new Uint8Array(0))
            .length;
          o = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
          for (r = 0; r < i; r += 1) {
            o[r >> 2] |= e[r] << ((r % 4) << 3);
          }
          o[r >> 2] |= 128 << ((r % 4) << 3);
          if (r > 55) {
            t(f, o);
            for (r = 0; r < 16; r += 1) {
              o[r] = 0;
            }
          }
          c = parseInt(
            (a = (a = 8 * e_length).toString(16).match(/(.*?)(.{0,8})$/))[2],
            16,
          );
          s = parseInt(a[1], 16) || 0;
          o[14] = c;
          o[15] = s;
          t(f, o);
          return f;
        })(new Uint8Array(e)),
      );
      if (r) {
        return c(i);
      }
      return i;
    };
    return s;
  })();
  const cQ = n(cJ.exports);
  const buffer = new Uint8Array([
    91, 104, 69, 75, 156, 171, 238, 71, 202, 4, 244, 5,
  ]).buffer;
  function c1(e, t) {
    return c2.apply(this, arguments);
  }
  function c2() {
    return (c2 = eF(
      eD().mark(function* e(data, r) {
        let n;
        let i;
        n = cQ.hash(r);
        i = yield c$.decrypt(n, {
          data,
          iv: buffer,
          tagLength: 128,
        });
        return i;
      }),
    )).apply(this, arguments);
  }
  const rG_forEach_2 = rG.forEach;
  const c3 = o3("forEach")
    ? [].forEach
    : function (e) {
        return rG_forEach_2(
          this,
          e,
          arguments.length > 1 ? arguments[1] : undefined,
        );
      };
  for (const c4 in rI) {
    const c5 = globalThis_1[c4];
    const c6 = c5 && c5.prototype;
    if (c6 && c6.forEach !== c3) {
      try {
        M(c6, "forEach", c3);
      } catch (e) {
        c6.forEach = c3;
      }
    }
  }
  iS_exports("Uint16", function (e) {
    return function (t, r, n) {
      return e(this, t, r, n);
    };
  });
  const c7 = {
    exports: {},
  };
  (function (e) {
    const hasOwnProperty = Object.prototype.hasOwnProperty;
    let r = "~";
    function n() {}
    function i(e, t, r) {
      this.fn = e;
      this.context = t;
      this.once = r || false;
    }
    function o(e, t, n, o, a) {
      if (typeof n !== "function") {
        throw TypeError("The listener must be a function");
      }
      const c = new i(n, o || e, a);
      const s = r ? r + t : t;
      if (e._events[s]) {
        if (e._events[s].fn) {
          e._events[s] = [e._events[s], c];
        } else {
          e._events[s].push(c);
        }
      } else {
        e._events[s] = c;
        e._eventsCount++;
      }
      return e;
    }
    function a(e, t) {
      if (--e._eventsCount == 0) {
        e._events = new n();
      } else {
        delete e._events[t];
      }
    }
    class c {
      constructor() {
        this._events = new n();
        this._eventsCount = 0;
      }
      eventNames() {
        let e;
        let n;
        const i = [];
        if (this._eventsCount === 0) {
          return i;
        }
        for (n in (e = this._events)) {
          if (hasOwnProperty.call(e, n)) {
            i.push(r ? n.slice(1) : n);
          }
        }
        if (Object.getOwnPropertySymbols) {
          return i.concat(Object.getOwnPropertySymbols(e));
        }
        return i;
      }
      listeners(e) {
        const t = r ? r + e : e;
        const n = this._events[t];
        if (!n) {
          return [];
        }
        if (n.fn) {
          return [n.fn];
        }
        for (var i = 0, o = n.length, a = Array(o); i < o; i++) {
          a[i] = n[i].fn;
        }
        return a;
      }
      listenerCount(e) {
        const t = r ? r + e : e;
        const n = this._events[t];
        if (n) {
          if (n.fn) {
            return 1;
          }
          return n.length;
        }
        return 0;
      }
      emit(e, t, n, i, o, a) {
        const c = r ? r + e : e;
        if (!this._events[c]) {
          return false;
        }
        let s;
        let u;
        const f = this._events[c];
        const arguments_length = arguments.length;
        if (f.fn) {
          if (f.once) {
            this.removeListener(e, f.fn, undefined, true);
          }
          switch (arguments_length) {
            case 1:
              f.fn.call(f.context);
              return true;
            case 2:
              f.fn.call(f.context, t);
              return true;
            case 3:
              f.fn.call(f.context, t, n);
              return true;
            case 4:
              f.fn.call(f.context, t, n, i);
              return true;
            case 5:
              f.fn.call(f.context, t, n, i, o);
              return true;
            case 6:
              f.fn.call(f.context, t, n, i, o, a);
              return true;
          }
          u = 1;
          for (s = Array(arguments_length - 1); u < arguments_length; u++) {
            s[u - 1] = arguments[u];
          }
          f.fn.apply(f.context, s);
        } else {
          let l;
          const p = f.length;
          for (u = 0; u < p; u++) {
            if (f[u].once) {
              this.removeListener(e, f[u].fn, undefined, true);
            }
            switch (arguments_length) {
              case 1:
                f[u].fn.call(f[u].context);
                break;
              case 2:
                f[u].fn.call(f[u].context, t);
                break;
              case 3:
                f[u].fn.call(f[u].context, t, n);
                break;
              case 4:
                f[u].fn.call(f[u].context, t, n, i);
                break;
              default:
                if (!s) {
                  l = 1;
                  for (
                    s = Array(arguments_length - 1);
                    l < arguments_length;
                    l++
                  ) {
                    s[l - 1] = arguments[l];
                  }
                }
                f[u].fn.apply(f[u].context, s);
            }
          }
        }
        return true;
      }
      on(e, t, r) {
        return o(this, e, t, r, false);
      }
      once(e, t, r) {
        return o(this, e, t, r, true);
      }
      removeListener(e, t, n, i) {
        const o = r ? r + e : e;
        if (!this._events[o]) {
          return this;
        }
        if (!t) {
          a(this, o);
          return this;
        }
        const c = this._events[o];
        if (c.fn) {
          if (!(c.fn !== t || (i && !c.once) || (n && c.context !== n))) {
            a(this, o);
          }
        } else {
          for (var s = 0, u = [], f = c.length; s < f; s++) {
            if (
              c[s].fn !== t ||
              (i && !c[s].once) ||
              (n && c[s].context !== n)
            ) {
              u.push(c[s]);
            }
          }
          if (u.length) {
            this._events[o] = u.length === 1 ? u[0] : u;
          } else {
            a(this, o);
          }
        }
        return this;
      }
      removeAllListeners(e) {
        let t;
        if (e) {
          t = r ? r + e : e;
          if (this._events[t]) {
            a(this, t);
          }
        } else {
          this._events = new n();
          this._eventsCount = 0;
        }
        return this;
      }
    }
    if (Object.create) {
      n.prototype = Object.create(null);
      if (!new n().__proto__) {
        r = false;
      }
    }
    c.prototype.off = c.prototype.removeListener;
    c.prototype.addListener = c.prototype.on;
    c.prefixed = r;
    c.EventEmitter = c;
    e.exports = c;
  })(c7);
  const c9 = n(c7.exports);
  const se = {
    ERROR: "error",
    ENCRYPTED: "encrypted",
    CDM_LICENSE_SUCCESS: "CDM_LICENSE_SUCCESS",
    CDM_LICENSE_ERROR: "CDM_LICENSE_ERROR",
  };
  const st = ((e) => {
    eW(r, e);
    var t = e$(r);
    function r(e) {
      let n;
      eK(this, r);
      eX(eZ((n = t.call(this))), "encryptHandle", function (e) {
        let t;
        let r;
        let i;
        const video = eZ(n).video;
        const a = eZ(n);
        if (n.KEYSYSTEM_TYPE === "org.w3.clearkey") {
          t = "keyids";
          r = JSON.stringify({
            kids: ["0123456789abcdef0123456789abcdef"],
          });
          i = new Uint8Array(cK.toUTF8(r));
        } else if (n.KEYSYSTEM_TYPE === "com.widevine.alpha") {
          t = "cenc";
          i =
            (e && new Uint8Array(e.initData)) ||
            new Uint8Array([
              0, 0, 0, 67, 112, 115, 115, 104, 0, 0, 0, 0, 237, 239, 139, 169,
              121, 214, 74, 206, 163, 200, 39, 220, 213, 29, 33, 237, 0, 0, 0,
              35, 8, 1, 18, 16, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51,
              0, 0, 0, 0, 26, 10, 105, 110, 116, 101, 114, 116, 114, 117, 115,
              116, 34, 1, 42,
            ]);
        } else if (n.KEYSYSTEM_TYPE === "com.microsoft.playready") {
          t = "cenc";
          i =
            (e && new Uint8Array(e.initData)) ||
            new Uint8Array([
              0, 0, 2, 38, 112, 115, 115, 104, 0, 0, 0, 0, 154, 4, 240, 121,
              152, 64, 66, 134, 171, 146, 230, 91, 224, 136, 95, 149, 0, 0, 2,
              6, 6, 2, 0, 0, 1, 0, 1, 0, 252, 1, 60, 0, 87, 0, 82, 0, 77, 0, 72,
              0, 69, 0, 65, 0, 68, 0, 69, 0, 82, 0, 32, 0, 120, 0, 109, 0, 108,
              0, 110, 0, 115, 0, 61, 0, 34, 0, 104, 0, 116, 0, 116, 0, 112, 0,
              58, 0, 47, 0, 47, 0, 115, 0, 99, 0, 104, 0, 101, 0, 109, 0, 97, 0,
              115, 0, 46, 0, 109, 0, 105, 0, 99, 0, 114, 0, 111, 0, 115, 0, 111,
              0, 102, 0, 116, 0, 46, 0, 99, 0, 111, 0, 109, 0, 47, 0, 68, 0, 82,
              0, 77, 0, 47, 0, 50, 0, 48, 0, 48, 0, 55, 0, 47, 0, 48, 0, 51, 0,
              47, 0, 80, 0, 108, 0, 97, 0, 121, 0, 82, 0, 101, 0, 97, 0, 100, 0,
              121, 0, 72, 0, 101, 0, 97, 0, 100, 0, 101, 0, 114, 0, 34, 0, 32,
              0, 118, 0, 101, 0, 114, 0, 115, 0, 105, 0, 111, 0, 110, 0, 61, 0,
              34, 0, 52, 0, 46, 0, 48, 0, 46, 0, 48, 0, 46, 0, 48, 0, 34, 0, 62,
              0, 60, 0, 68, 0, 65, 0, 84, 0, 65, 0, 62, 0, 60, 0, 80, 0, 82, 0,
              79, 0, 84, 0, 69, 0, 67, 0, 84, 0, 73, 0, 78, 0, 70, 0, 79, 0, 62,
              0, 60, 0, 75, 0, 69, 0, 89, 0, 76, 0, 69, 0, 78, 0, 62, 0, 49, 0,
              54, 0, 60, 0, 47, 0, 75, 0, 69, 0, 89, 0, 76, 0, 69, 0, 78, 0, 62,
              0, 60, 0, 65, 0, 76, 0, 71, 0, 73, 0, 68, 0, 62, 0, 65, 0, 69, 0,
              83, 0, 67, 0, 84, 0, 82, 0, 60, 0, 47, 0, 65, 0, 76, 0, 71, 0, 73,
              0, 68, 0, 62, 0, 60, 0, 47, 0, 80, 0, 82, 0, 79, 0, 84, 0, 69, 0,
              67, 0, 84, 0, 73, 0, 78, 0, 70, 0, 79, 0, 62, 0, 60, 0, 75, 0, 73,
              0, 68, 0, 62, 0, 77, 0, 122, 0, 77, 0, 122, 0, 77, 0, 122, 0, 77,
              0, 122, 0, 77, 0, 122, 0, 77, 0, 122, 0, 77, 0, 122, 0, 77, 0,
              122, 0, 65, 0, 65, 0, 65, 0, 65, 0, 65, 0, 65, 0, 61, 0, 61, 0,
              60, 0, 47, 0, 75, 0, 73, 0, 68, 0, 62, 0, 60, 0, 67, 0, 72, 0, 69,
              0, 67, 0, 75, 0, 83, 0, 85, 0, 77, 0, 62, 0, 65, 0, 49, 0, 53, 0,
              66, 0, 89, 0, 87, 0, 68, 0, 52, 0, 113, 0, 115, 0, 73, 0, 61, 0,
              60, 0, 47, 0, 67, 0, 72, 0, 69, 0, 67, 0, 75, 0, 83, 0, 85, 0, 77,
              0, 62, 0, 60, 0, 47, 0, 68, 0, 65, 0, 84, 0, 65, 0, 62, 0, 60, 0,
              47, 0, 87, 0, 82, 0, 77, 0, 72, 0, 69, 0, 65, 0, 68, 0, 69, 0, 82,
              0, 62, 0,
            ]);
        }
        a.EnsureMediaKeysCreated(video, a.KEYSYSTEM_TYPE, a.options)
          .then(
            () => {
              const e = video.mediaKeys.createSession();
              video.sessions.push(e);
              if (a.KEYSYSTEM_TYPE === "org.w3.clearkey") {
                e.addEventListener("message", a.updateSessionFunc(a.keys));
              } else if (
                a.KEYSYSTEM_TYPE === "com.widevine.alpha" ||
                a.KEYSYSTEM_TYPE === "com.microsoft.playready"
              ) {
                e.addEventListener("message", a.licenseRequestReady.bind(a));
              }
              return e.generateRequest(t, i.buffer);
            },
            () => a.bail(" failed to ensure MediaKeys on HTMLMediaElement"),
          )
          .then(
            () => {},
            () => a.bail(" Failed to generate request."),
          );
      });
      n.KEYSYSTEM_TYPE = "";
      n.keys = {};
      n.updateDrm(e);
      n.options = [];
      n.ensurePromise = undefined;
      n.kid = "kid";
      n.video = null;
      n.licenseStep = 0;
      return n;
    }
    eV(r, [
      {
        key: "updateDrm",
        value: function (e) {
          if (e != null && e.clearKeys) {
            this.KEYSYSTEM_TYPE = "org.w3.clearkey";
            this.keys = e.clearKeys;
          }
          if (e != null && e.clearKeys) {
            this.KEYSYSTEM_TYPE = "org.w3.clearkey";
          } else if (e != null && e.widevine) {
            this.KEYSYSTEM_TYPE = "com.widevine.alpha";
            this.keys = e.widevine;
          } else if (e != null && e.playready) {
            this.KEYSYSTEM_TYPE = "com.microsoft.playready";
            this.keys = e.playready;
          }
        },
      },
      {
        key: "updateKid",
        value: function (e) {
          if (this.kid === "kid" && this.keys[this.kid]) {
            this.keys[e] = this.keys[this.kid];
            delete this.keys.kid;
          }
          this.kid = e;
        },
      },
      {
        key: "setOptions",
        value: function () {
          this.options = [
            {
              initDataTypes: ["keyids", "webm"],
              audioCapabilities: [
                {
                  contentType: 'audio/mp4; codecs="mp4a.40.2"',
                },
              ],
              videoCapabilities: [
                {
                  contentType: 'video/mp4; codecs="avc1.42c01e"',
                },
                {
                  contentType: 'video/mp4; codecs="hev1.1.6.L120.90"',
                },
                {
                  contentType: 'video/webm; codecs="vp8"',
                },
              ],
            },
          ];
        },
      },
      {
        key: "bail",
        value: function (e) {
          console.error("[EME]", e);
          this.emit(se.ERROR, e);
        },
      },
      {
        key: "updateSessionFunc",
        value: function (e) {
          const t = this;
          return function (r) {
            const keys = [];
            const i = [];
            Object.keys(e).forEach((t) => {
              const r = e[t];
              const o = cK.fromHex(t);
              const a = cK.fromHex(r);
              const c = {
                kty: "oct",
                kid: cK.toBase64(o, false),
                k: cK.toBase64(a, false),
              };
              keys.push(c);
              i.push(c.kid);
            });
            const o = JSON.stringify({
              keys,
            });
            r.target.update(cK.StringToArrayBuffer(o)).then(
              () => {},
              () => t.bail(" MediaKeySession update failed"),
            );
          };
        },
      },
      {
        key: "keysChange",
        value: function () {},
      },
      {
        key: "EnsureMediaKeysCreated",
        value: function (e, t, r) {
          const n = this;
          if (!this.ensurePromise) {
            this.ensurePromise = navigator
              .requestMediaKeySystemAccess(t, r)
              .then(
                (e) => e.createMediaKeys(),
                () => n.bail(" Failed to request key system access."),
              )
              .then(
                (t) => e.setMediaKeys(t),
                () => n.bail(" failed to create MediaKeys object"),
              );
          }
          return this.ensurePromise;
        },
      },
      {
        key: "setupEME",
        value: function (e) {
          this.video = e;
          e.sessions = [];
          this.on(se.ENCRYPTED, this.encryptHandle);
        },
      },
      {
        key: "parseServerResponse",
        value: function (e) {
          const t = "https://schemas.xmlsoap.org/soap/envelope/";
          if (window.DOMParser) {
            const r = this.uintToString(e);
            const n = new window.DOMParser().parseFromString(r, "text/xml");
            const i = n ? n.getElementsByTagNameNS(t, "Envelope")[0] : null;
            const o = i ? i.getElementsByTagNameNS(t, "Body")[0] : null;
            if (o ? o.getElementsByTagNameNS(t, "Fault")[0] : null) {
              return null;
            }
          }
          return e;
        },
      },
      {
        key: "uintToString",
        value: function (e) {
          return decodeURIComponent(
            escape(String.fromCharCode.apply(null, new Uint8Array(e))),
          );
        },
      },
      {
        key: "licenseRequestReady",
        value: function (e) {
          const t = this;
          const r = new XMLHttpRequest();
          r.open("GET", this.keys.serverURL);
          r.onreadystatechange = function () {
            if (r.readyState === 4) {
              const n = e.message;
              let i = r.response;
              if (t.KEYSYSTEM_TYPE === "com.microsoft.playready") {
                i = JSON.parse(r.response);
                i = ""
                  .concat(i.licenseAcquisitionUrl, "?ExpressPlayToken=")
                  .concat(i.token);
              }
              const o = new XMLHttpRequest();
              o.keySession = e.target;
              o.responseType = "arraybuffer";
              o.withCredentials = false;
              o.open("POST", String(i));
              if (t.KEYSYSTEM_TYPE === "com.microsoft.playready") {
                o.setRequestHeader("Content-type", "text/xml");
              }
              o.onreadystatechange = function () {
                if (o.readyState === 4) {
                  let e;
                  if (o.status !== 200) {
                    return void t.emit(se.CDM_LICENSE_ERROR, {
                      data: t.licenseStep,
                    });
                  }
                  t.emit(se.CDM_LICENSE_SUCCESS, {
                    data: t.licenseStep,
                  });
                  t.licenseStep++;
                  e =
                    t.KEYSYSTEM_TYPE === "com.microsoft.playready"
                      ? t.parseServerResponse(o.response)
                      : new Uint8Array(o.response);
                  o.keySession
                    .update(e)
                    .catch(console.error.bind(console, "update() failed"));
                }
              };
              o.send(t.getLicenseRequestFromMessage(n));
            }
          };
          r.send();
        },
      },
      {
        key: "getLicenseRequestFromMessage",
        value: function (e) {
          if (this.KEYSYSTEM_TYPE === "com.microsoft.playready") {
            let t = null;
            const r = new DOMParser();
            const n = new Uint16Array(e);
            const i = String.fromCharCode.apply(null, n);
            const o = r.parseFromString(i, "application/xml");
            if (!o.getElementsByTagName("PlayReadyKeyMessage")[0]) {
              return e;
            }
            const a =
              o.getElementsByTagName("Challenge")[0].childNodes[0].nodeValue;
            if (a) {
              t = window.atob(a);
            }
            return t;
          }
          return new Uint8Array(e);
        },
      },
      {
        key: "destroy",
        value: function () {
          this.removeAllListeners();
          this.video = null;
        },
      },
    ]);
    return r;
  })(c9);
  const sessionId = "volcvui";
  const sn = new Map();
  const si = ((e) => {
    eW(n, e);
    let t;
    var r = e$(n);
    function n(e) {
      let t;
      eK(this, n);
      eX(eZ((t = r.call(this))), "EMEError", function (e) {
        t.emit(se.ERROR, e);
      });
      eX(eZ(t), "encryptHandle", function () {
        let e;
        if ((e = t.eme) != null) {
          e.emit(se.ENCRYPTED);
        }
      });
      t.config = n.defaultConfig;
      t.updateConfig(e);
      t.config.isEncrypt = !!(
        t.config.kid ||
        t.config.drm ||
        t.config.secretKey ||
        t.config.drmKeyToken ||
        t.config.keyValue ||
        t.config.drm
      );
      t.on(se.ENCRYPTED, t.encryptHandle);
      return t;
    }
    eV(
      n,
      [
        {
          key: "updateConfig",
          value: function (e) {
            const t = this;
            Object.keys(e).map((r) => {
              if (
                e[r] !== undefined &&
                e[r] !== null &&
                t.config[r] !== undefined
              ) {
                t.config[r] = e[r];
              }
            });
            this.log("set config", JSON.stringify(this.config));
          },
        },
        {
          key: "setupEME",
          value: function (e) {
            if (this.eme) {
              this.eme.setupEME(e);
            }
          },
        },
        {
          key: "setOptions",
          value: function (e) {
            if (this.eme) {
              this.eme.setOptions(e);
            }
          },
        },
        {
          key: "getSecretKeyByToken",
          value: function (e, t, r) {
            const n = this;
            const config = this.config;
            const o = e || config.kid;
            let a = t || config.playDomain;
            if (a.indexOf("//") < 0) {
              a = "//".concat(a);
            }
            const c = r || config.drmKeyToken;
            const s = cK.isBase64(c) ? window.atob(c) : c;
            let u = ""
              .concat(a, "?")
              .concat(s, "&PlayAuthIds=")
              .concat(o, "&ssl=true");
            if (s.indexOf("DrmType=") < 0) {
              u += `&DrmType=${config.useUnionInfoDRM ? "webdevice" : "22"}`;
            }
            this.log("getSecretKeyByToken start, vid,", config.vid, u);
            const f = new aL();
            new aD({
              type: "json",
              method: "GET",
              url: u,
            })
              .then((e) => {
                let t;
                let r;
                let e_response = e.response;
                if (typeof e_response === "string") {
                  e_response = JSON.parse(e_response);
                }
                if (
                  e_response &&
                  (t = e_response) != null &&
                  t.Result &&
                  ((r = e_response.Result.PlayAuthInfoList) == null
                    ? undefined
                    : r.length) > 0
                ) {
                  const a =
                    e_response.Result.PlayAuthInfoList[0].PlayAuthContent;
                  n.log(
                    "getSecretKeyByToken end, vid,",
                    config.vid,
                    ",res,",
                    JSON.stringify(e_response),
                  );
                  f.resolve(a);
                }
              })
              .catch((e) => {
                f.reject(e);
              });
            return f;
          },
        },
        {
          key: "getLicense",
          value: function () {
            const e = this;
            const config = this.config;
            const t_vid = config.vid;
            const t_kid = config.kid;
            const t_getLicenseUrl = config.getLicenseUrl;
            const o = new aL();
            Promise.resolve().then(
              eF(
                eD().mark(function t() {
                  let a;
                  let c;
                  let s;
                  let u;
                  let f;
                  let h;
                  let l;
                  let p;
                  let d;
                  let y;
                  let v;
                  let g;
                  return eD().wrap(
                    function (t) {
                      while (true) {
                        switch ((t.prev = t.next)) {
                          case 0:
                            a = {
                              method: "getLicense",
                              success: false,
                            };
                            t.next = 3;
                            return e._tryGetSecretKeyByToken(a, o);
                          case 3:
                            s = (c = e.config).secretKey;
                            u = c.keyValue;
                            if (!(t_kid || s || u || e.config.drm)) {
                              t.next = 39;
                              break;
                            }
                            t.prev = 5;
                            f = e.config.drm || u;
                            if (!(s || (t_kid && t_getLicenseUrl))) {
                              t.next = 11;
                              break;
                            }
                            t.next = 10;
                            return aF(t_vid, s, t_kid, t_getLicenseUrl);
                          case 10:
                            f = t.sent;
                          case 11:
                            h = f && f.clearKeys ? f.clearKeys[t_kid] : f;
                            d = (p = e.config).sessionId;
                            y = p.useUnionInfoDRM;
                            v = p.keyTokenExpiredDuration;
                            g = sn.get(d);
                            if (!h) {
                              h = e.config.keyValue;
                            }
                            if (
                              !y ||
                              !cK.checkUnionInfoExpired(
                                g.unionID,
                                g.unionInfo,
                                v,
                              )
                            ) {
                              t.next = 25;
                              break;
                            }
                            t.next = 19;
                            return c1(h, g.unionInfo);
                          case 19:
                            l = t.sent;
                            t.next = 23;
                            break;
                          case 22:
                            throw Error(
                              'The "transformUnionKey" should be provided in configuration as a function',
                            );
                          case 23:
                            t.next = 26;
                            break;
                          case 25:
                            l = h;
                          case 26:
                            if (f && f.clearKeys) {
                              f.clearKeys[t_kid] = l;
                              a.drm = f;
                            }
                            a.keyValue = l;
                            a.success = true;
                            o.resolve(a);
                            t.next = 37;
                            break;
                          case 32:
                            t.prev = 32;
                            t.t0 = t.catch(5);
                            a.success = false;
                            a.error = t.t0;
                            o.reject(a);
                          case 37:
                            t.next = 41;
                            break;
                          case 39:
                            a.success = true;
                            o.resolve(a);
                          case 41:
                          case "end":
                            return t.stop();
                        }
                      }
                    },
                    t,
                    null,
                    [[5, 32]],
                  );
                }),
              ),
            );
            return o;
          },
        },
        {
          key: "_tryGetSecretKeyByToken",
          value:
            ((t = eF(
              eD().mark(function* e(t, r) {
                let n;
                let i;
                let o;
                let a;
                i = (n = this.config).kid;
                o = n.drmKeyToken;
                a = n.playDomain;
                if (i && o && a) {
                  try {
                    this.config.secretKey = yield this.getSecretKeyByToken(
                      i,
                      a,
                      o,
                    );
                  } catch (error) {
                    t.success = false;
                    t.error = error;
                    r.reject(t);
                  }
                }
              }),
            )),
            function (e, r) {
              return t.apply(this, arguments);
            }),
        },
        {
          key: "updateKid",
          value: function (e) {
            if (this.eme) {
              this.eme.updateKid(e);
            }
          },
        },
        {
          key: "getLicenseSecret",
          value: function () {
            const e = this;
            const config = this.config;
            const t_vid = config.vid;
            const t_kid = config.kid;
            const t_getLicenseUrl = config.getLicenseUrl;
            const t_useEME = config.useEME;
            const t_keyValue = config.keyValue;
            if (this.config.useEME && !this.eme) {
              this.eme = new st();
              this.eme.on(se.ERROR, this.EMEError);
              this.eme.on(se.CDM_LICENSE_SUCCESS, function (t) {
                e.emit(se.CDM_LICENSE_SUCCESS, t);
              });
              this.eme.on(se.CDM_LICENSE_ERROR, function (t) {
                e.emit(se.CDM_LICENSE_ERROR, t);
              });
              const c = this.config.intertrustServerURL;
              if (t_kid && c) {
                const s = eX(
                  {},
                  window.navigator.userAgent
                    .toLocaleLowerCase()
                    .indexOf("chrome") > -1
                    ? "widevine"
                    : "playready",
                  {
                    serverURL: c + t_kid,
                  },
                );
                this.eme.updateDrm(s);
                return Promise.resolve();
              }
            }
            const u = new aL();
            Promise.resolve().then(
              eF(
                eD().mark(function t() {
                  let c;
                  let s;
                  let f;
                  let h;
                  let l;
                  let p;
                  let d;
                  let y;
                  return eD().wrap(
                    function (t) {
                      while (true) {
                        switch ((t.prev = t.next)) {
                          case 0:
                            c = {
                              method: "getLicense",
                              success: false,
                            };
                            t.next = 3;
                            return e._tryGetSecretKeyByToken(c, u);
                          case 3:
                            if ((s = e.config.secretKey) || t_keyValue) {
                              t.next = 8;
                              break;
                            }
                            t.next = 7;
                            return aj(t_vid, t_kid, t_getLicenseUrl);
                          case 7:
                            s = t.sent;
                          case 8:
                            if (t_useEME) {
                              if (s) {
                                s = aU(s);
                              }
                              if (t_keyValue) {
                                s = t_keyValue;
                              }
                            }
                            t.prev = 9;
                            h = (f = e.config).sessionId;
                            l = f.useUnionInfoDRM;
                            p = f.keyTokenExpiredDuration;
                            d = sn.get(h);
                            if (
                              !l ||
                              !cK.checkUnionInfoExpired(
                                d.unionID,
                                d.unionInfo,
                                p,
                              )
                            ) {
                              t.next = 18;
                              break;
                            }
                            if (!t_useEME) {
                              t.next = 17;
                              break;
                            }
                            t.next = 16;
                            return c1(s, d.unionInfo);
                          case 16:
                            s = t.sent;
                          case 17:
                            c.decryptKey = cK.StringToArrayBuffer(
                              cQ.hash(d.unionInfo),
                            );
                          case 18:
                            if (t_useEME) {
                              (y = {
                                clearKeys: {},
                              }).clearKeys[t_kid || "kid"] = s;
                              e.eme.updateDrm(y);
                              c.secretKey = null;
                            } else {
                              c.secretKey = s;
                            }
                            c.success = true;
                            u.resolve(c);
                            t.next = 28;
                            break;
                          case 23:
                            t.prev = 23;
                            t.t0 = t.catch(9);
                            c.success = false;
                            c.error = t.t0;
                            u.reject(c);
                          case 28:
                          case "end":
                            return t.stop();
                        }
                      }
                    },
                    t,
                    null,
                    [[9, 23]],
                  );
                }),
              ),
            );
            return u;
          },
        },
        {
          key: "destroy",
          value: function () {
            this.removeAllListeners();
            if (this.eme) {
              this.eme.destroy();
              this.eme = null;
            }
          },
        },
        {
          key: "log",
          value: function (e) {
            for (
              var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1;
              n < t;
              n++
            ) {
              r[n - 1] = arguments[n];
            }
            aK.apply(undefined, [e].concat(r));
          },
        },
        {
          key: "getSecretKey",
          value: function () {
            const config = this.config;
            const e_vid = config.vid;
            const e_kid = config.kid;
            const e_getLicenseUrl = config.getLicenseUrl;
            const e_drmKeyToken = config.drmKeyToken;
            const e_playDomain = config.playDomain;
            const e_secretKey = config.secretKey;
            if (e_getLicenseUrl && e_kid) {
              return aj(e_vid, e_kid, e_getLicenseUrl);
            }
            if (e_drmKeyToken && e_kid && e_playDomain) {
              return this.getSecretKeyByToken(
                e_kid,
                e_playDomain,
                e_drmKeyToken,
              );
            }
            return (
              e_secretKey ||
              (console.error("[DRM]DRM,getSecretKey args is invalid"), null)
            );
          },
        },
        {
          key: "getKeyValue",
          value: function () {
            const config = this.config;
            const e_vid = config.vid;
            const e_kid = config.kid;
            const e_getLicenseUrl = config.getLicenseUrl;
            return aF(e_vid, config.secretKey, e_kid, e_getLicenseUrl);
          },
        },
      ],
      [
        {
          key: "pluginName",
          get: function () {
            return "XGSecretKey";
          },
        },
        {
          key: "defaultConfig",
          get: function () {
            return {
              keyValue: null,
              kid: null,
              getLicenseUrl: "",
              secretKey: null,
              drm: null,
              vid: "",
              useUnionInfoDRM: false,
              transformUnionKey: null,
              drmKeyToken: null,
              keyTokenExpiredDuration: null,
              playDomain: null,
              sessionId,
              useEME: true,
              intertrustServerURL: null,
            };
          },
        },
        {
          key: "updateUnionInfo",
          value: function () {
            const unionID =
              arguments.length > 0 && arguments[0] !== undefined
                ? arguments[0]
                : "";
            const t =
              arguments.length > 1 && arguments[1] !== undefined
                ? arguments[1]
                : sessionId;
            const unionInfo = cK.getUnionInfo(unionID);
            sn.set(t, {
              unionID,
              unionInfo,
            });
            return unionInfo;
          },
        },
      ],
    );
    return n;
  })(c9);
  si.isWebAssemblySupported = function () {
    try {
      if (
        (typeof WebAssembly === "undefined" ? "undefined" : eG(WebAssembly)) ===
          "object" &&
        typeof WebAssembly.instantiate === "function"
      ) {
        const e = new WebAssembly.Module(
          Uint8Array.of(0, 97, 115, 109, 1, 0, 0, 0),
        );
        if (e instanceof WebAssembly.Module) {
          return new WebAssembly.Instance(e) instanceof WebAssembly.Instance;
        }
      }
    } catch (e) {}
    return false;
  };
  let so;
  let sa;
  const sc = tr("match");
  const ss = R.f;
  const su = ep.f;
  const sf = (e) => {
    let t;
    return E(e) && ((t = e[sc]) !== undefined ? !!t : d(e) == "RegExp");
  };
  const sh = tr("match");
  const o_RegExp = globalThis_1.RegExp;
  const sl_prototype = o_RegExp.prototype;
  const sd = /a/g;
  const sy = /a/g;
  const sv = new o_RegExp(sd) !== sd;
  const aX_UNSUPPORTED_Y = aX.UNSUPPORTED_Y;
  if (
    s &&
    eC(
      "RegExp",
      !sv ||
        aX_UNSUPPORTED_Y ||
        c(() => {
          sy[sh] = false;
          return (
            o_RegExp(sd) != sd ||
            o_RegExp(sy) == sy ||
            o_RegExp(sd, "i") != "/a/i"
          );
        }),
    )
  ) {
    const sb = function (e, t) {
      let r;
      const n = this instanceof sb;
      const i = sf(e);
      const o = t === undefined;
      if (!n && i && e.constructor === sb && o) {
        return e;
      }
      if (sv) {
        if (i && !o) {
          e = e.source;
        }
      } else if (e instanceof sb) {
        if (o) {
          t = aV.call(e);
        }
        e = e.source;
      }
      if (aX_UNSUPPORTED_Y && (r = !!t && t.indexOf("y") > -1)) {
        t = t.replace(/y/g, "");
      }
      const a = rf(
        sv ? new o_RegExp(e, t) : o_RegExp(e, t),
        n ? this : sl_prototype,
        sb,
      );
      if (aX_UNSUPPORTED_Y && r) {
        ec(a).sticky = true;
      }
      return a;
    };
    const sE = (e) => {
      if (!(e in sb)) {
        ss(sb, e, {
          configurable: true,
          get: function () {
            return o_RegExp[e];
          },
          set: function (t) {
            o_RegExp[e] = t;
          },
        });
      }
    };
    for (let sm = su(o_RegExp), sT = 0; sm.length > sT;) {
      sE(sm[sT++]);
    }
    sl_prototype.constructor = sb;
    sb.prototype = sl_prototype;
    P_exports(globalThis_1, "RegExp", sb);
  }
  rp("RegExp");
  e.isNativeFunction = undefined;
  e.checkMSEValid = undefined;
  e.checkEMEValid = undefined;
  ((e, t, r) => {
    function n(e, t) {
      let r = parseInt(e.slice(t, t + 2), 16);
      if (r >>> 7 == 0) {
        return [1, r];
      }
      if (r >>> 6 == 2) {
        return [2, (r = ((63 & r) << 8) + parseInt(e.slice(t + 2, t + 4), 16))];
      }
      return [3, (r = ((63 & r) << 16) + parseInt(e.slice(t + 2, t + 6), 16))];
    }
    let i;
    let o = 0;
    const a = [];
    const c = [];
    for (i = 0; i < 4; ++i) {
      o += (3 & parseInt(e.slice(8 + 2 * i, 10 + 2 * i), 16)) << (2 * i);
    }
    const s = parseInt(e.slice(16, 24), 16);
    const u = 2 * parseInt(e.slice(32, 40), 16);
    for (i = 40; i < u + 40; i += 2) {
      a.push(parseInt(e.slice(i, i + 2), 16));
    }
    let f = u + 40;
    const h = parseInt(e.slice(f, f + 4), 16);
    f += 4;
    for (i = 0; i < h; ++i) {
      const l = n(e, f);
      f += 2 * l[0];
      let p = "";
      for (let d = 0; d < l[1]; ++d) {
        const y = n(e, f);
        p += String.fromCharCode(o ^ y[1]);
        f += 2 * y[0];
      }
      c.push(p);
    }
    t.p = null;
    (function e(t, r, n, i, o) {
      let s;
      let u;
      let f;
      let h;
      let l;
      let p = -1;
      const d = [];
      let y = null;
      let v = [r];
      u = Math.min(r.length, n);
      for (f = 0; f < u; ++f) {
        v.push(r[f]);
      }
      v.p = i;
      let g = [];
      while (true) {
        try {
          switch (a[t++]) {
            case 23:
              d[++p] = true;
              break;
            case 51:
              d[++p] = false;
              break;
            case 64:
              d[++p] = null;
              break;
            case 52:
              s = a[t++];
              d[++p] = (s << 24) >> 24;
              break;
            case 31:
              s = ((s = ((s = a[t++]) << 8) + a[t++]) << 8) + a[t++];
              d[++p] = (s << 8) + a[t++];
              break;
            case 6:
              s = (a[t] << 8) + a[t + 1];
              t += 2;
              d[++p] = c[s];
              break;
            case 13:
              d[++p] = undefined;
              break;
            case 56:
              s = (a[t] << 8) + a[t + 1];
              t += 2;
              p = p - s + 1;
              u = d.slice(p, p + s);
              d[p] = u;
              break;
            case 21:
              u = a[t++];
              f = a[t++];
              for (h = v; u > 0; --u) {
                h = h.p;
              }
              d[++p] = h[f];
              break;
            case 76:
              s = (a[t] << 8) + a[t + 1];
              t += 2;
              u = c[s];
              d[p] = d[p][u];
              break;
            case 55:
              u = a[t++];
              f = a[t++];
              for (h = v; u > 0; --u) {
                h = h.p;
              }
              h[f] = d[p--];
              break;
            case 11:
              u = d[p--];
              d[p] = d[p] === u;
              break;
            case 28:
              u = d[p--];
              d[p] = d[p] !== u;
              break;
            case 53:
              s = ((s = (a[t] << 8) + a[t + 1]) << 16) >> 16;
              t += 2;
              if (d[p]) {
                --p;
              } else {
                t += s;
              }
              break;
            case 74:
              s = ((s = (a[t] << 8) + a[t + 1]) << 16) >> 16;
              t += 2;
              if (d[p]) {
                t += s;
              } else {
                --p;
              }
              break;
            case 7:
              d[p] = typeof d[p];
              break;
            case 42:
              s = a[t++];
              u = d[p--];
              f = function e() {
                const t = e._v;
                return e._u(t[0], arguments, t[1], t[2], this);
              };
              f._v = [u, s, v];
              f._u = e;
              d[++p] = f;
              break;
            case 48:
              u = d[p--];
              for (f = null; (h = g.pop());) {
                if (h[0] === 2 || h[0] === 3) {
                  f = h;
                  break;
                }
              }
              if (f) {
                t = f[2];
                f[0] = 0;
                g.push(f);
              } else {
                if (!y) {
                  return u;
                }
                t = y[1];
                o = y[2];
                v = y[3];
                g = y[4];
                d[++p] = u;
                y = y[0];
              }
              break;
            case 45:
              p -= s = a[t++];
              f = d.slice(p + 1, p + s + 1);
              u = d[p--];
              h = d[p--];
              if (u._u === e) {
                u = u._v;
                y = [y, t, o, v, g];
                t = u[0];
                if (h == null) {
                  h = (function () {
                    return this;
                  })();
                }
                o = h;
                v = [f].concat(f);
                v.length = Math.min(u[1], s) + 1;
                v.p = u[2];
                g = [];
              } else {
                l = u.apply(h, f);
                d[++p] = l;
              }
              break;
            case 70:
              s = a[t++];
              h = [undefined];
              for (l = s; l > 0; --l) {
                h[l] = d[p--];
              }
              f = d[p--];
              l = new (u = Function.bind.apply(f, h))();
              d[++p] = l;
              break;
            case 65:
              t += 2 + (s = ((s = (a[t] << 8) + a[t + 1]) << 16) >> 16);
              break;
            case 49:
              s = ((s = (a[t] << 8) + a[t + 1]) << 16) >> 16;
              t += 2;
              if (!(u = d[p--])) {
                t += s;
              }
              break;
            case 36:
              --p;
              break;
            case 2:
              u = d[p];
              d[++p] = u;
              break;
            default:
              throw Error("ioe");
          }
        } catch (error) {
          while ((s = g.pop()) && !s[0]);
          if (!s) {
            e: while (y) {
              for (u = y[4]; (s = u.pop());) {
                if (s[0]) {
                  break e;
                }
              }
              y = y[0];
            }
            if (!y) {
              throw error;
            }
            t = y[1];
            o = y[2];
            v = y[3];
            g = y[4];
            y = y[0];
          }
          if ((u = s[0]) === 1) {
            t = s[2];
            s[0] = 0;
            g.push(s);
            d[++p] = error;
          } else if (u === 2) {
            t = s[2];
            s[0] = 0;
            g.push(s);
          } else {
            t = s[3];
            s[0] = 2;
            g.push(s);
            d[++p] = error;
          }
        }
      }
    })(s, [], 0, t, r);
  })(
    "504B01017ebd341a000001901a34bc7c000001dc17370002150202024c00021500012d01310019150001024c00031f0000009d2a021500022d0237000241006d40150203060004024c0005401502041501012d01024c000615020306000706000846020600092d02024c000615020306000a060008460206000b2d0206000c2d022d013700031500010706000d0b310018150003024c000e150102024c000f1500012d012d014100013337000215000230150001350009401503071500022d01301502054c00104a00061502054c0011301502054c001230401502082d00370001401502092d0037000233370003150001350003150002310062380000370004150002310020150004024c00131500022d0124150004024c00131500024c00004c00142d0124150001310020150004024c00131500012d0124150004024c00131500014c00004c00152d0124401502071500042d013100041737000315000330380000370001150206070600161c350003150206310013150001024c00131502064c00004c00172d01241500014c001834000b31000417410009401502071500012d01301f000000002a013701071f000000ad2a003701081f000000bd2a003701091f000000c42a0037010a1f0000014c2a0037010b1501004c00004c00013700011501014c00004c00013700020d3000190980f680f480e980f280e980f280ff80f680e30880f280e980d580f280f480ef80e880e10780ef80f580c780f480f480e780ff0680f480e380e280f380e580e30180d80680e580e980e880e580e780f20780f480e380f680ea80e780e580e31480dd80a880ac80ad80b980d880a280fd80fb80ae80af80fa80dd80da80db80da80a980da80da80db0180e10380da80a280a02f80f280e980d580f280f480ef80e880e180fa80ae80e080f380e880e580f280ef80e980e880af80a880ac80b980ae80b980bb80da80da80da80ae80af80fa80a680e080e980f480a680a880ad80b980ae80b980bb80da80da80da80db80af0580a280b780a880ac80b90180a20880e080f380e880e580f280ef80e980e80480f280e380f580f20480e580e780ea80ea0b80cb80e380e280ef80e780d580e980f380f480e580e31180d180e380e480cd80ef80f280cb80e380e280ef80e780d580e980f380f480e580e30c80d580e980f380f480e580e380c480f380e080e080e380f40480f680f380f580ee0c80e780f680f680e380e880e280c480f380e080e080e380f40f80e780e280e280d580e980f380f480e580e380c480f380e080e080e380f40980f380e880e280e380e080ef80e880e380e20680f380f680e280e780f280e30680ea80e380e880e180f280ee",
    {
      0: Object,
      1: Function,
      2: Array,
      3: RegExp,
      4: String,
      get 5() {
        return self;
      },
      get 6() {
        if (typeof MediaKeySession !== "undefined") {
          return MediaKeySession;
        }
      },
      get 7() {
        return e.isNativeFunction;
      },
      set 7(t) {
        e.isNativeFunction = t;
      },
      get 8() {
        return so;
      },
      set 8(e) {
        so = e;
      },
      get 9() {
        return sa;
      },
      set 9(e) {
        sa = e;
      },
      get 10() {
        return e.checkMSEValid;
      },
      set 10(t) {
        e.checkMSEValid = t;
      },
      get 11() {
        return e.checkEMEValid;
      },
      set 11(t) {
        e.checkEMEValid = t;
      },
    },
    undefined,
  );
  e.EVENT_EME = se;
  e.TRANSFORM_IV = buffer;
  e.XGSecretKey = si;
  e.aes4js = c$;
  e.transformUnionKey = c1;
  e.util = cK;
})(_webpackExports);
export default _webpackExports;
