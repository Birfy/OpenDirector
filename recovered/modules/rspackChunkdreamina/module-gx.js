import o from "rCO";
export default (function () {
  "use strict";
  function t(t) {
    return typeof t === "function";
  }
  let e;
  let n;
  let i;
  let u;
  const s = Array.isArray
    ? Array.isArray
    : (t) => Object.prototype.toString.call(t) === "[object Array]";
  let a = 0;
  let c;
  let l;
  let f = function (t, e) {
    x[a] = t;
    x[a + 1] = e;
    if ((a += 2) === 2) {
      if (l) {
        l(_);
      } else {
        m();
      }
    }
  };
  const p = typeof window !== "undefined" ? window : undefined;
  const h = p || {};
  const y = h.MutationObserver || h.WebKitMutationObserver;
  const d =
    typeof self === "undefined" &&
    o !== undefined &&
    {}.toString.call(o) === "[object process]";
  const v =
    typeof Uint8ClampedArray !== "undefined" &&
    typeof importScripts !== "undefined" &&
    typeof MessageChannel !== "undefined";
  function b() {
    const t = setTimeout;
    return function () {
      return t(_, 1);
    };
  }
  var x = Array(1000);
  function _() {
    for (let t = 0; t < a; t += 2) {
      x[t](x[t + 1]);
      x[t] = undefined;
      x[t + 1] = undefined;
    }
    a = 0;
  }
  var m;
  function g(t, e) {
    const r = this;
    const o = new this.constructor(j);
    if (o[O] === undefined) {
      I(o);
    }
    const r__state = r._state;
    if (r__state) {
      const i = arguments[r__state - 1];
      f(function () {
        return C(r__state, o, i, r._result);
      });
    } else {
      G(r, o, t, e);
    }
    return o;
  }
  function w(t) {
    if (t && typeof t === "object" && t.constructor === this) {
      return t;
    }
    const e = new this(j);
    E(e, t);
    return e;
  }
  if (d) {
    m = function () {
      return o.nextTick(_);
    };
  } else if (y) {
    e = 0;
    n = new y(_);
    i = document.createTextNode("");
    n.observe(i, {
      characterData: true,
    });
    m = function () {
      i.data = e = ++e % 2;
    };
  } else if (v) {
    (u = new MessageChannel()).port1.onmessage = _;
    m = function () {
      return u.port2.postMessage(0);
    };
  } else {
    m =
      p === undefined
        ? (() => {
            try {
              const t = Function("return this")().require("vertx");
              c = t.runOnLoop || t.runOnContext;
              if (c !== undefined) {
                return function () {
                  c(_);
                };
              }
              return b();
            } catch (t) {
              return b();
            }
          })()
        : b();
  }
  var O = Math.random().toString(36).substring(2);
  function j() {}
  let A;
  function S(e, r, o) {
    if (
      r.constructor === e.constructor &&
      o === g &&
      r.constructor.resolve === w
    ) {
      if (r._state === 1) {
        M(e, r._result);
      } else if (r._state === 2) {
        T(e, r._result);
      } else {
        G(
          r,
          undefined,
          function (t) {
            return E(e, t);
          },
          function (t) {
            return T(e, t);
          },
        );
      }
    } else if (o === undefined) {
      M(e, r);
    } else if (t(o)) {
      f(function (t) {
        let e = false;
        const n = ((t, e, r, o) => {
          try {
            t.call(e, r, o);
          } catch (error) {
            return error;
          }
        })(
          o,
          r,
          function (o) {
            if (!e) {
              e = true;
              if (r !== o) {
                E(t, o);
              } else {
                M(t, o);
              }
            }
          },
          function (r) {
            if (!e) {
              e = true;
              T(t, r);
            }
          },
          t._label,
        );
        if (!e && n) {
          e = true;
          T(t, n);
        }
      }, e);
    } else {
      M(e, r);
    }
  }
  function E(t, e) {
    if (t === e) {
      T(t, TypeError("You cannot resolve a promise with itself"));
    } else {
      r = typeof e;
      if (e !== null && (r === "object" || r === "function")) {
        var r;
        let o;
        try {
          o = e.then;
        } catch (error) {
          T(t, error);
          return;
        }
        S(t, e, o);
      } else {
        M(t, e);
      }
    }
  }
  function P(t) {
    if (t._onerror) {
      t._onerror(t._result);
    }
    k(t);
  }
  function M(t, e) {
    if (t._state === A) {
      t._result = e;
      t._state = 1;
      if (t._subscribers.length !== 0) {
        f(k, t);
      }
    }
  }
  function T(t, e) {
    if (t._state === A) {
      t._state = 2;
      t._result = e;
      f(P, t);
    }
  }
  function G(t, e, r, o) {
    const t__subscribers = t._subscribers;
    const n_length = t__subscribers.length;
    t._onerror = null;
    t__subscribers[n_length] = e;
    t__subscribers[n_length + 1] = r;
    t__subscribers[n_length + 2] = o;
    if (n_length === 0 && t._state) {
      f(k, t);
    }
  }
  function k(t) {
    const t__subscribers = t._subscribers;
    const t__state = t._state;
    if (t__subscribers.length !== 0) {
      let o;
      let n;
      const i = t._result;
      for (let u = 0; u < t__subscribers.length; u += 3) {
        o = t__subscribers[u];
        n = t__subscribers[u + t__state];
        if (o) {
          C(t__state, o, n, i);
        } else {
          n(i);
        }
      }
      t._subscribers.length = 0;
    }
  }
  function C(e, r, o, n) {
    const i = t(o);
    let u;
    let s;
    let a = true;
    if (i) {
      try {
        u = o(n);
      } catch (error) {
        a = false;
        s = error;
      }
      if (r === u) {
        return void T(
          r,
          TypeError("A promises callback cannot return that same promise."),
        );
      }
    } else {
      u = n;
    }
    if (r._state === A) {
      if (i && a) {
        E(r, u);
      } else if (a === false) {
        T(r, s);
      } else if (e === 1) {
        M(r, u);
      } else if (e === 2) {
        T(r, u);
      }
    }
  }
  let F = 0;
  function I(t) {
    t[O] = F++;
    t._state = undefined;
    t._result = undefined;
    t._subscribers = [];
  }
  class N {
    constructor(t, e) {
      this._instanceConstructor = t;
      this.promise = new t(j);
      if (!this.promise[O]) {
        I(this.promise);
      }
      if (s(e)) {
        this.length = e.length;
        this._remaining = e.length;
        this._result = Array(this.length);
        if (this.length === 0) {
          M(this.promise, this._result);
        } else {
          this.length = this.length || 0;
          this._enumerate(e);
          if (this._remaining === 0) {
            M(this.promise, this._result);
          }
        }
      } else {
        T(this.promise, Error("Array Methods must be provided an Array"));
      }
    }
    _enumerate(t) {
      for (let e = 0; this._state === A && e < t.length; e++) {
        this._eachEntry(t[e], e);
      }
    }
    _eachEntry(t, e) {
      const _instanceConstructor = this._instanceConstructor;
      const r_resolve = _instanceConstructor.resolve;
      if (r_resolve === w) {
        let n;
        let i;
        let u = false;
        try {
          n = t.then;
        } catch (error) {
          u = true;
          i = error;
        }
        if (n === g && t._state !== A) {
          this._settledAt(t._state, e, t._result);
        } else if (typeof n !== "function") {
          this._remaining--;
          this._result[e] = t;
        } else if (_instanceConstructor === K) {
          const s = new _instanceConstructor(j);
          if (u) {
            T(s, i);
          } else {
            S(s, t, n);
          }
          this._willSettleAt(s, e);
        } else {
          this._willSettleAt(
            new _instanceConstructor(function (e) {
              return e(t);
            }),
            e,
          );
        }
      } else {
        this._willSettleAt(r_resolve(t), e);
      }
    }
    _settledAt(t, e, r) {
      const promise = this.promise;
      if (promise._state === A) {
        this._remaining--;
        if (t === 2) {
          T(promise, r);
        } else {
          this._result[e] = r;
        }
      }
      if (this._remaining === 0) {
        M(promise, this._result);
      }
    }
    _willSettleAt(t, e) {
      const r = this;
      G(
        t,
        undefined,
        function (t) {
          return r._settledAt(1, e, t);
        },
        function (t) {
          return r._settledAt(2, e, t);
        },
      );
    }
  }
  const K = (function () {
    class e {
      constructor(t) {
        this[O] = F++;
        this._result = this._state = undefined;
        this._subscribers = [];
        if (j !== t) {
          if (typeof t !== "function") {
            (() => {
              throw TypeError(
                "You must pass a resolver function as the first argument to the promise constructor",
              );
            })();
          }
          if (this instanceof e) {
            ((t, e) => {
              try {
                e(
                  function (e) {
                    E(t, e);
                  },
                  function (e) {
                    T(t, e);
                  },
                );
              } catch (error) {
                T(t, error);
              }
            })(this, t);
          } else {
            (() => {
              throw TypeError(
                "Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.",
              );
            })();
          }
        }
      }
      catch(t) {
        return this.then(null, t);
      }
      finally(e) {
        const constructor = this.constructor;
        if (t(e)) {
          return this.then(
            (t) => constructor.resolve(e()).then(() => t),
            (t) =>
              constructor.resolve(e()).then(() => {
                throw t;
              }),
          );
        }
        return this.then(e, e);
      }
    }
    return e;
  })();
  K.prototype.then = g;
  K.all = function (t) {
    return new N(this, t).promise;
  };
  K.race = function (t) {
    const e = this;
    return new e(
      s(t)
        ? function (r, o) {
            for (let n = t.length, i = 0; i < n; i++) {
              e.resolve(t[i]).then(r, o);
            }
          }
        : function (t, e) {
            return e(TypeError("You must pass an array to race."));
          },
    );
  };
  K.resolve = w;
  K.reject = function (t) {
    const e = new this(j);
    T(e, t);
    return e;
  };
  K._setScheduler = function (t) {
    l = t;
  };
  K._setAsap = function (t) {
    f = t;
  };
  K._asap = f;
  K.polyfill = function () {
    let t;
    if (global !== undefined) {
      t = global;
    } else if (typeof self !== "undefined") {
      t = self;
    } else {
      try {
        t = Function("return this")();
      } catch (t) {
        throw Error(
          "polyfill failed because global object is unavailable in this environment",
        );
      }
    }
    const t_Promise = t.Promise;
    if (t_Promise) {
      let o = null;
      try {
        o = Object.prototype.toString.call(t_Promise.resolve());
      } catch (t) {}
      if (o === "[object Promise]" && !t_Promise.cast) {
        return;
      }
    }
    t.Promise = K;
  };
  K.Promise = K;
  return K;
})();
