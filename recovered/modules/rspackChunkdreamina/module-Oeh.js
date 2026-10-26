import o from "./module-yK.js";
function n() {
  "use strict";
  n = function () {
    return r;
  };
  n.default = n;
  let e;
  var r = {};
  const Object_prototype = Object.prototype;
  const i_hasOwnProperty = Object_prototype.hasOwnProperty;
  const s = typeof Symbol === "function" ? Symbol : {};
  const a = s.iterator || "@@iterator";
  const c = s.asyncIterator || "@@asyncIterator";
  const l = s.toStringTag || "@@toStringTag";
  function f(t, e, value, o) {
    return Object.defineProperty(t, e, {
      value,
      enumerable: !o,
      configurable: !o,
      writable: !o,
    });
  }
  try {
    f({}, "");
  } catch (t) {
    f = function (t, e, r) {
      return (t[e] = r);
    };
  }
  function p(t, r, o, n) {
    let i;
    let u;
    const s = Object.create((r && r.prototype instanceof d ? r : d).prototype);
    f(
      s,
      "_invoke",
      ((i = new constructor(n || [])),
      (u = 1),
      function (r, n) {
        if (u === 3) {
          throw Error("Generator is already running");
        }
        if (u === 4) {
          if (r === "throw") {
            throw n;
          }
          return {
            value: e,
            done: true,
          };
        }
        i.method = r;
        for (i.arg = n; ;) {
          const s = i.delegate;
          if (s) {
            const a = (function t(r, o) {
              const o_method = o.method;
              const i = r.i[o_method];
              if (i === e) {
                o.delegate = null;
                if (
                  !(
                    o_method === "throw" &&
                    r.i.return &&
                    ((o.method = "return"),
                    (o.arg = e),
                    t(r, o),
                    o.method === "throw")
                  )
                ) {
                  if (o_method !== "return") {
                    o.method = "throw";
                    o.arg = TypeError(
                      "The iterator does not provide a '" +
                        o_method +
                        "' method",
                    );
                  }
                }
                return y;
              }
              const u = h(i, r.i, o.arg);
              if (u.type === "throw") {
                o.method = "throw";
                o.arg = u.arg;
                o.delegate = null;
                return y;
              }
              const u_arg = u.arg;
              if (u_arg) {
                if (u_arg.done) {
                  o[r.r] = u_arg.value;
                  o.next = r.n;
                  if (o.method !== "return") {
                    o.method = "next";
                    o.arg = e;
                  }
                  o.delegate = null;
                  return y;
                }
                return u_arg;
              }
              o.method = "throw";
              o.arg = TypeError("iterator result is not an object");
              o.delegate = null;
              return y;
            })(s, i);
            if (a) {
              if (a === y) {
                continue;
              }
              return a;
            }
          }
          if (i.method === "next") {
            i.sent = i._sent = i.arg;
          } else if (i.method === "throw") {
            if (u === 1) {
              u = 4;
              throw i.arg;
            }
            i.dispatchException(i.arg);
          } else {
            if (i.method === "return") {
              i.abrupt("return", i.arg);
            }
          }
          u = 3;
          const c = h(t, o, i);
          if (c.type === "normal") {
            u = i.done ? 4 : 2;
            if (c.arg === y) {
              continue;
            }
            return {
              value: c.arg,
              done: i.done,
            };
          }
          if (c.type === "throw") {
            u = 4;
            i.method = "throw";
            i.arg = c.arg;
          }
        }
      }),
      true,
    );
    return s;
  }
  function h(t, e, r) {
    try {
      return {
        type: "normal",
        arg: t.call(e, r),
      };
    } catch (arg) {
      return {
        type: "throw",
        arg,
      };
    }
  }
  r.wrap = p;
  var y = {};
  function d() {}
  function v() {}
  function b() {}
  let x = {};
  f(x, a, function () {
    return this;
  });
  const Object_getPrototypeOf = Object.getPrototypeOf;
  const m =
    Object_getPrototypeOf &&
    Object_getPrototypeOf(Object_getPrototypeOf(E([])));
  if (m && m !== Object_prototype && i_hasOwnProperty.call(m, a)) {
    x = m;
  }
  const g = (b.prototype = d.prototype = Object.create(x));
  function w(t) {
    ["next", "throw", "return"].forEach((e) => {
      f(t, e, function (t) {
        return this._invoke(e, t);
      });
    });
  }
  function O(t, e) {
    let r;
    f(
      this,
      "_invoke",
      function (n, i) {
        function s() {
          return new e(function (r, s) {
            (function r(n, i, s, a) {
              const c = h(t[n], t, i);
              if (c.type !== "throw") {
                const l = c.arg;
                const f = l.value;
                if (
                  f &&
                  o(f) == "object" &&
                  i_hasOwnProperty.call(f, "__await")
                ) {
                  return e.resolve(f.__await).then(
                    (t) => {
                      r("next", t, s, a);
                    },
                    (t) => {
                      r("throw", t, s, a);
                    },
                  );
                }
                return e.resolve(f).then(
                  (t) => {
                    l.value = t;
                    s(l);
                  },
                  (t) => r("throw", t, s, a),
                );
              }
              a(c.arg);
            })(n, i, r, s);
          });
        }
        return (r = r ? r.then(s, s) : s());
      },
      true,
    );
  }
  function j(t) {
    this.tryEntries.push(t);
  }
  function A(t) {
    const r = t[4] || {};
    r.type = "normal";
    r.arg = e;
    t[4] = r;
  }
  function constructor(t) {
    this.tryEntries = [[-1]];
    t.forEach(j, this);
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
        let n = -1;
        const i = function r() {
          while (++n < t.length) {
            if (i_hasOwnProperty.call(t, n)) {
              r.value = t[n];
              r.done = false;
              return r;
            }
          }
          r.value = e;
          r.done = true;
          return r;
        };
        return (i.next = i);
      }
    }
    throw TypeError(o(t) + " is not iterable");
  }
  v.prototype = b;
  f(g, "constructor", b);
  f(b, "constructor", v);
  v.displayName = f(b, l, "GeneratorFunction");
  r.isGeneratorFunction = function (t) {
    const e = typeof t === "function" && t.constructor;
    return (
      !!e && (e === v || (e.displayName || e.name) === "GeneratorFunction")
    );
  };
  r.mark = function (t) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(t, b);
    } else {
      t.__proto__ = b;
      f(t, l, "GeneratorFunction");
    }
    t.prototype = Object.create(g);
    return t;
  };
  r.awrap = function (__await) {
    return {
      __await,
    };
  };
  w(O.prototype);
  f(O.prototype, c, function () {
    return this;
  });
  r.AsyncIterator = O;
  r.async = function (t, e, o, n, i = Promise) {
    const u = new O(p(t, e, o, n), i);
    if (r.isGeneratorFunction(e)) {
      return u;
    }
    return u.next().then((t) => {
      if (t.done) {
        return t.value;
      }
      return u.next();
    });
  };
  w(g);
  f(g, l, "Generator");
  f(g, a, function () {
    return this;
  });
  f(g, "toString", function () {
    return "[object Generator]";
  });
  r.keys = function (t) {
    const e = Object(t);
    const r = [];
    for (var o in e) {
      r.unshift(o);
    }
    return function t() {
      while (r.length) {
        if ((o = r.pop()) in e) {
          t.value = o;
          t.done = false;
          return t;
        }
      }
      t.done = true;
      return t;
    };
  };
  r.values = E;
  constructor.prototype = {
    constructor,
    reset: function (t) {
      this.prev = this.next = 0;
      this.sent = this._sent = e;
      this.done = false;
      this.delegate = null;
      this.method = "next";
      this.arg = e;
      this.tryEntries.forEach(A);
      if (!t) {
        for (const r in this) {
          if (
            r.charAt(0) === "t" &&
            i_hasOwnProperty.call(this, r) &&
            !isNaN(+r.slice(1))
          ) {
            this[r] = e;
          }
        }
      }
    },
    stop: function () {
      this.done = true;
      const t = this.tryEntries[0][4];
      if (t.type === "throw") {
        throw t.arg;
      }
      return this.rval;
    },
    dispatchException: function (t) {
      if (this.done) {
        throw t;
      }
      const r = this;
      function o(e) {
        u.type = "throw";
        u.arg = t;
        r.next = e;
      }
      for (let n = r.tryEntries.length - 1; n >= 0; --n) {
        const i = this.tryEntries[n];
        var u = i[4];
        const s = this.prev;
        const a = i[1];
        const c = i[2];
        if (i[0] === -1) {
          o("end");
          return false;
        }
        if (!a && !c) {
          throw Error("try statement without catch or finally");
        }
        if (i[0] != null && i[0] <= s) {
          if (s < a) {
            this.method = "next";
            this.arg = e;
            o(a);
            return true;
          }
          if (s < c) {
            o(c);
            return false;
          }
        }
      }
    },
    abrupt: function (t, e) {
      for (let r = this.tryEntries.length - 1; r >= 0; --r) {
        const o = this.tryEntries[r];
        if (o[0] > -1 && o[0] <= this.prev && this.prev < o[2]) {
          var n = o;
          break;
        }
      }
      if (n && (t === "break" || t === "continue") && n[0] <= e && e <= n[2]) {
        n = null;
      }
      const i = n ? n[4] : {};
      i.type = t;
      i.arg = e;
      if (n) {
        this.method = "next";
        this.next = n[2];
        return y;
      }
      return this.complete(i);
    },
    complete: function (t, e) {
      if (t.type === "throw") {
        throw t.arg;
      }
      if (t.type === "break" || t.type === "continue") {
        this.next = t.arg;
      } else if (t.type === "return") {
        this.rval = this.arg = t.arg;
        this.method = "return";
        this.next = "end";
      } else if (t.type === "normal" && e) {
        this.next = e;
      }
      return y;
    },
    finish: function (t) {
      for (let e = this.tryEntries.length - 1; e >= 0; --e) {
        const r = this.tryEntries[e];
        if (r[2] === t) {
          this.complete(r[4], r[3]);
          A(r);
          return y;
        }
      }
    },
    catch: function (t) {
      for (let e = this.tryEntries.length - 1; e >= 0; --e) {
        const r = this.tryEntries[e];
        if (r[0] === t) {
          const o = r[4];
          if (o.type === "throw") {
            var n = o.arg;
            A(r);
          }
          return n;
        }
      }
      throw Error("illegal catch attempt");
    },
    delegateYield: function (t, r, n_1) {
      this.delegate = {
        i: E(t),
        r,
        n: n_1,
      };
      if (this.method === "next") {
        this.arg = e;
      }
      return y;
    },
  };
  return r;
}
export { n as default };
n.default = n;
