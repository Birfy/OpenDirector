function n(e, t) {
  if (t == null || t > e.length) {
    t = e.length;
  }
  for (var r = 0, n = Array(t); r < t; r++) {
    n[r] = e[r];
  }
  return n;
}
function i(e, t, r, n, i, a, s) {
  try {
    var o = e[a](s);
    var u = o.value;
  } catch (error) {
    return void r(error);
  }
  if (o.done) {
    t(u);
  } else {
    Promise.resolve(u).then(n, i);
  }
}
export function Rx(e) {
  return function () {
    const t = this;
    const r = arguments;
    return new Promise((resolve, reject) => {
      const s = e.apply(t, r);
      function o(e) {
        i(s, resolve, reject, o, u, "next", e);
      }
      function u(e) {
        i(s, resolve, reject, o, u, "throw", e);
      }
      o(undefined);
    });
  };
}
export function qW(e, t, r) {
  t = h(t);
  return ((e, t) => {
    if (t && (typeof t === "object" || typeof t === "function")) {
      return t;
    }
    if (t !== undefined) {
      throw TypeError(
        "Derived constructors may only return object or undefined",
      );
    }
    if (e === undefined) {
      throw ReferenceError(
        "this hasn't been initialised - super() hasn't been called",
      );
    }
    return e;
  })(e, v() ? Reflect.construct(t, r || [], h(e).constructor) : t.apply(e, r));
}
export function xs(e, t) {
  if (!(e instanceof t)) {
    throw TypeError("Cannot call a class as a function");
  }
}
function u(e, t) {
  for (let r = 0; r < t.length; r++) {
    const n = t[r];
    n.enumerable = n.enumerable || false;
    n.configurable = true;
    if ("value" in n) {
      n.writable = true;
    }
    Object.defineProperty(e, x(n.key), n);
  }
}
export function j6(e, t, r) {
  if (t) {
    u(e.prototype, t);
  }
  if (r) {
    u(e, r);
  }
  Object.defineProperty(e, "prototype", {
    writable: false,
  });
  return e;
}
export function vG(e, t) {
  let r =
    (typeof Symbol !== "undefined" && e[Symbol.iterator]) || e["@@iterator"];
  if (!r) {
    if (
      Array.isArray(e) ||
      (r = ((e) => {
        if (e) {
          if (typeof e === "string") {
            return n(e, undefined);
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
            return n(e, undefined);
          }
          return undefined;
        }
      })(e)) ||
      (t && e && typeof e.length === "number")
    ) {
      if (r) {
        e = r;
      }
      let i = 0;
      const a = function () {};
      return {
        s: a,
        n: function () {
          if (i >= e.length) {
            return {
              done: true,
            };
          }
          return {
            done: false,
            value: e[i++],
          };
        },
        e: function (e) {
          throw e;
        },
        f: a,
      };
    }
    throw TypeError(
      "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
    );
  }
  let s;
  let o = true;
  let u = false;
  return {
    s: function () {
      r = r.call(e);
    },
    n: function () {
      const e = r.next();
      o = e.done;
      return e;
    },
    e: function (e) {
      u = true;
      s = e;
    },
    f: function () {
      try {
        if (!(o || r.return == null)) {
          r.return();
        }
      } finally {
        if (u) {
          throw s;
        }
      }
    },
  };
}
export function n8(e, t, r) {
  if ((t = x(t)) in e) {
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
function d() {
  return (d =
    typeof Reflect !== "undefined" && Reflect.get
      ? Reflect.get.bind()
      : function (e, t, r) {
          const n = ((e, t) => {
            while (!{}.hasOwnProperty.call(e, t) && (e = h(e)) !== null);
            return e;
          })(e, t);
          if (n) {
            const i = Object.getOwnPropertyDescriptor(n, t);
            if (i.get) {
              return i.get.call(arguments.length < 3 ? e : r);
            }
            return i.value;
          }
        }).apply(null, arguments);
}
function h(e) {
  return (h = Object.setPrototypeOf
    ? Object.getPrototypeOf.bind()
    : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
}
export function B(e, t) {
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
    b(e, t);
  }
}
function v() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    );
  } catch (e) {}
  return (v = function () {
    return !!e;
  })();
}
function m(e, t) {
  const r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    let n = Object.getOwnPropertySymbols(e);
    if (t) {
      n = n.filter((t) => Object.getOwnPropertyDescriptor(e, t).enumerable);
    }
    r.push.apply(r, n);
  }
  return r;
}
export function T1(e) {
  for (let t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    if (t % 2) {
      m(Object(r), true).forEach((t) => {
        e[t] = r[t];
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(e, Object.getOwnPropertyDescriptors(r));
    } else {
      m(Object(r)).forEach((t) => {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
  }
  return e;
}
export function $i(e, t) {
  if (e == null) {
    return {};
  }
  let r;
  let n;
  const i = ((e, t) => {
    if (e == null) {
      return {};
    }
    const r = {};
    for (const n in e) {
      if ({}.hasOwnProperty.call(e, n)) {
        if (t.indexOf(n) !== -1) {
          continue;
        }
        r[n] = e[n];
      }
    }
    return r;
  })(e, t);
  if (Object.getOwnPropertySymbols) {
    const a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) {
      r = a[n];
      if (t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r)) {
        i[r] = e[r];
      }
    }
  }
  return i;
}
export function P4() {
  P4 = function () {
    return t;
  };
  let e;
  var t = {};
  const Object_prototype = Object.prototype;
  const r_hasOwnProperty = Object_prototype.hasOwnProperty;
  const i = typeof Symbol === "function" ? Symbol : {};
  const a = i.iterator || "@@iterator";
  const s = i.asyncIterator || "@@asyncIterator";
  const o = i.toStringTag || "@@toStringTag";
  function u(e, t, value, n) {
    return Object.defineProperty(e, t, {
      value,
      enumerable: !n,
      configurable: !n,
      writable: !n,
    });
  }
  try {
    u({}, "");
  } catch (e) {
    u = function (e, t, r) {
      return (e[t] = r);
    };
  }
  function l(t, r, n, i) {
    let a;
    let s;
    const o = Object.create((r && r.prototype instanceof d ? r : d).prototype);
    u(
      o,
      "_invoke",
      ((a = new constructor(i || [])),
      (s = 1),
      function (r, i) {
        if (s === 3) {
          throw Error("Generator is already running");
        }
        if (s === 4) {
          if (r === "throw") {
            throw i;
          }
          return {
            value: e,
            done: true,
          };
        }
        a.method = r;
        for (a.arg = i; ;) {
          const o = a.delegate;
          if (o) {
            const u = (function t(r, n) {
              const n_method = n.method;
              const a = r.i[n_method];
              if (a === e) {
                n.delegate = null;
                if (
                  !(
                    n_method === "throw" &&
                    r.i.return &&
                    ((n.method = "return"),
                    (n.arg = e),
                    t(r, n),
                    n.method === "throw")
                  )
                ) {
                  if (n_method !== "return") {
                    n.method = "throw";
                    n.arg = TypeError(
                      "The iterator does not provide a '" +
                        n_method +
                        "' method",
                    );
                  }
                }
                return f;
              }
              const s = c(a, r.i, n.arg);
              if (s.type === "throw") {
                n.method = "throw";
                n.arg = s.arg;
                n.delegate = null;
                return f;
              }
              const s_arg = s.arg;
              if (s_arg) {
                if (s_arg.done) {
                  n[r.r] = s_arg.value;
                  n.next = r.n;
                  if (n.method !== "return") {
                    n.method = "next";
                    n.arg = e;
                  }
                  n.delegate = null;
                  return f;
                }
                return s_arg;
              }
              n.method = "throw";
              n.arg = TypeError("iterator result is not an object");
              n.delegate = null;
              return f;
            })(o, a);
            if (u) {
              if (u === f) {
                continue;
              }
              return u;
            }
          }
          if (a.method === "next") {
            a.sent = a._sent = a.arg;
          } else if (a.method === "throw") {
            if (s === 1) {
              s = 4;
              throw a.arg;
            }
            a.dispatchException(a.arg);
          } else {
            if (a.method === "return") {
              a.abrupt("return", a.arg);
            }
          }
          s = 3;
          const l = c(t, n, a);
          if (l.type === "normal") {
            s = a.done ? 4 : 2;
            if (l.arg === f) {
              continue;
            }
            return {
              value: l.arg,
              done: a.done,
            };
          }
          if (l.type === "throw") {
            s = 4;
            a.method = "throw";
            a.arg = l.arg;
          }
        }
      }),
      true,
    );
    return o;
  }
  function c(e, t, r) {
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
  t.wrap = l;
  var f = {};
  function d() {}
  function h() {}
  function p() {}
  let v = {};
  u(v, a, function () {
    return this;
  });
  const Object_getPrototypeOf = Object.getPrototypeOf;
  const y =
    Object_getPrototypeOf &&
    Object_getPrototypeOf(Object_getPrototypeOf(E([])));
  if (y && y !== Object_prototype && r_hasOwnProperty.call(y, a)) {
    v = y;
  }
  const g = (p.prototype = d.prototype = Object.create(v));
  function b(e) {
    ["next", "throw", "return"].forEach((t) => {
      u(e, t, function (e) {
        return this._invoke(t, e);
      });
    });
  }
  function k(e, t) {
    let r;
    u(
      this,
      "_invoke",
      function (i, a) {
        function s() {
          return new t(function (r, s) {
            (function r(i, a, s, o) {
              const u = c(e[i], e, a);
              if (u.type !== "throw") {
                const l = u.arg;
                const f = l.value;
                if (
                  f &&
                  typeof f === "object" &&
                  r_hasOwnProperty.call(f, "__await")
                ) {
                  return t.resolve(f.__await).then(
                    (e) => {
                      r("next", e, s, o);
                    },
                    (e) => {
                      r("throw", e, s, o);
                    },
                  );
                }
                return t.resolve(f).then(
                  (e) => {
                    l.value = e;
                    s(l);
                  },
                  (e) => r("throw", e, s, o),
                );
              }
              o(u.arg);
            })(i, a, r, s);
          });
        }
        return (r = r ? r.then(s, s) : s());
      },
      true,
    );
  }
  function x(e) {
    this.tryEntries.push(e);
  }
  function S(t) {
    const r = t[4] || {};
    r.type = "normal";
    r.arg = e;
    t[4] = r;
  }
  function constructor(e) {
    this.tryEntries = [[-1]];
    e.forEach(x, this);
    this.reset(true);
  }
  function E(t) {
    if (t != null) {
      const r = t[a];
      if (r) {
        return r.call(t);
      }
      if (typeof t.next === "function") {
        return t;
      }
      if (!isNaN(t.length)) {
        let i = -1;
        const s = function r() {
          while (++i < t.length) {
            if (r_hasOwnProperty.call(t, i)) {
              r.value = t[i];
              r.done = false;
              return r;
            }
          }
          r.value = e;
          r.done = true;
          return r;
        };
        return (s.next = s);
      }
    }
    throw TypeError(`${typeof t} is not iterable`);
  }
  h.prototype = p;
  u(g, "constructor", p);
  u(p, "constructor", h);
  h.displayName = u(p, o, "GeneratorFunction");
  t.isGeneratorFunction = function (e) {
    const t = typeof e === "function" && e.constructor;
    return (
      !!t && (t === h || (t.displayName || t.name) === "GeneratorFunction")
    );
  };
  t.mark = function (e) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(e, p);
    } else {
      e.__proto__ = p;
      u(e, o, "GeneratorFunction");
    }
    e.prototype = Object.create(g);
    return e;
  };
  t.awrap = function (__await) {
    return {
      __await,
    };
  };
  b(k.prototype);
  u(k.prototype, s, function () {
    return this;
  });
  t.AsyncIterator = k;
  t.async = function (e, r, n, i, a = Promise) {
    const s = new k(l(e, r, n, i), a);
    if (t.isGeneratorFunction(r)) {
      return s;
    }
    return s.next().then((e) => {
      if (e.done) {
        return e.value;
      }
      return s.next();
    });
  };
  b(g);
  u(g, o, "Generator");
  u(g, a, function () {
    return this;
  });
  u(g, "toString", function () {
    return "[object Generator]";
  });
  t.keys = function (e) {
    const t = Object(e);
    const r = [];
    for (var n in t) {
      r.unshift(n);
    }
    return function e() {
      while (r.length) {
        if ((n = r.pop()) in t) {
          e.value = n;
          e.done = false;
          return e;
        }
      }
      e.done = true;
      return e;
    };
  };
  t.values = E;
  constructor.prototype = {
    constructor,
    reset: function (t) {
      this.prev = this.next = 0;
      this.sent = this._sent = e;
      this.done = false;
      this.delegate = null;
      this.method = "next";
      this.arg = e;
      this.tryEntries.forEach(S);
      if (!t) {
        for (const r in this) {
          if (
            r.charAt(0) === "t" &&
            r_hasOwnProperty.call(this, r) &&
            !isNaN(+r.slice(1))
          ) {
            this[r] = e;
          }
        }
      }
    },
    stop: function () {
      this.done = true;
      const e = this.tryEntries[0][4];
      if (e.type === "throw") {
        throw e.arg;
      }
      return this.rval;
    },
    dispatchException: function (t) {
      if (this.done) {
        throw t;
      }
      const r = this;
      function n(e) {
        s.type = "throw";
        s.arg = t;
        r.next = e;
      }
      for (let i = r.tryEntries.length - 1; i >= 0; --i) {
        const a = this.tryEntries[i];
        var s = a[4];
        const o = this.prev;
        const u = a[1];
        const l = a[2];
        if (a[0] === -1) {
          n("end");
          return false;
        }
        if (!u && !l) {
          throw Error("try statement without catch or finally");
        }
        if (a[0] != null && a[0] <= o) {
          if (o < u) {
            this.method = "next";
            this.arg = e;
            n(u);
            return true;
          }
          if (o < l) {
            n(l);
            return false;
          }
        }
      }
    },
    abrupt: function (e, t) {
      for (let r = this.tryEntries.length - 1; r >= 0; --r) {
        const n = this.tryEntries[r];
        if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) {
          var i = n;
          break;
        }
      }
      if (i && (e === "break" || e === "continue") && i[0] <= t && t <= i[2]) {
        i = null;
      }
      const a = i ? i[4] : {};
      a.type = e;
      a.arg = t;
      if (i) {
        this.method = "next";
        this.next = i[2];
        return f;
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
      return f;
    },
    finish: function (e) {
      for (let t = this.tryEntries.length - 1; t >= 0; --t) {
        const r = this.tryEntries[t];
        if (r[2] === e) {
          this.complete(r[4], r[3]);
          S(r);
          return f;
        }
      }
    },
    catch: function (e) {
      for (let t = this.tryEntries.length - 1; t >= 0; --t) {
        const r = this.tryEntries[t];
        if (r[0] === e) {
          const n = r[4];
          if (n.type === "throw") {
            var i = n.arg;
            S(r);
          }
          return i;
        }
      }
      throw Error("illegal catch attempt");
    },
    delegateYield: function (t, r, n) {
      this.delegate = {
        i: E(t),
        r,
        n,
      };
      if (this.method === "next") {
        this.arg = e;
      }
      return f;
    },
  };
  return t;
}
function b(e, t) {
  return (b = Object.setPrototypeOf
    ? Object.setPrototypeOf.bind()
    : function (e, t) {
        e.__proto__ = t;
        return e;
      })(e, t);
}
export function hz(e, t, r, n) {
  const i = d(h(1 & n ? e.prototype : e), t, r);
  if (2 & n && typeof i === "function") {
    return function (e) {
      return i.apply(r, e);
    };
  }
  return i;
}
function x(e) {
  const t = ((e, t) => {
    if (typeof e !== "object" || !e) {
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
  return t + "";
}
export function uk(e) {
  return (uk =
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
export function Xx(e) {
  const t = typeof Map === "function" ? new Map() : undefined;
  return (Xx = function (e) {
    if (
      e === null ||
      !((e) => {
        try {
          return Function.toString.call(e).indexOf("[native code]") !== -1;
        } catch (t) {
          return typeof e === "function";
        }
      })(e)
    ) {
      return e;
    }
    if (typeof e !== "function") {
      throw TypeError("Super expression must either be null or a function");
    }
    if (t !== undefined) {
      if (t.has(e)) {
        return t.get(e);
      }
      t.set(e, r);
    }
    function r() {
      return (function (e, t, r) {
        if (v()) {
          return Reflect.construct.apply(null, arguments);
        }
        const n = [null];
        n.push.apply(n, t);
        const i = new (e.bind.apply(e, n))();
        if (r) {
          b(i, r.prototype);
        }
        return i;
      })(e, arguments, h(this).constructor);
    }
    r.prototype = Object.create(e.prototype, {
      constructor: {
        value: r,
        enumerable: false,
        writable: true,
        configurable: true,
      },
    });
    return b(r, e);
  })(e);
}
