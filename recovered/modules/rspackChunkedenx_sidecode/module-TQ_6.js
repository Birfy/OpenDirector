import n from "./module-A_7.js";
import o from "./module-r9_6.js";
import a from "./module-YR_6.js";
import i from "./module-vo_6.js";
import s from "./module-A2_7.js";
import c from "./module-vE_6.js";
import u from "./module-dFV_6.js";
import f from "./module-I_7.js";
import l from "./module-lN_6.js";
import h from "./module-b_6.js";
import p from "./module-er1_6.js";
const v = a("Promise");
const d = a("SuppressedError");
const y = l("asyncDispose");
const m = l("toStringTag");
const b = "AsyncDisposableStack";
const h_set = h.set;
const w = h.getterFor(b);
const x = "async-dispose";
const E = "disposed";
const S = (t) => {
  const r = w(t);
  if (r.state === E) {
    throw ReferenceError(b + " already disposed");
  }
  return r;
};
const AsyncDisposableStack = function () {
  h_set(s(this, O_prototype), {
    type: b,
    state: "pending",
    stack: [],
  });
  if (!o) {
    this.disposed = false;
  }
};
var O_prototype = AsyncDisposableStack.prototype;
u(O_prototype, {
  disposeAsync: function () {
    const t = this;
    return new v(function (r, e) {
      let n;
      const a = w(t);
      if (a.state === E) {
        return r(undefined);
      }
      a.state = E;
      if (!o) {
        t.disposed = true;
      }
      const a_stack = a.stack;
      let i_length = a_stack.length;
      let c = false;
      const u = function (t) {
        if (c) {
          n = new d(t, n);
        } else {
          c = true;
          n = t;
        }
        f();
      };
      var f = function () {
        if (i_length) {
          const t = a_stack[--i_length];
          a_stack[i_length] = null;
          try {
            v.resolve(t()).then(f, u);
          } catch (error) {
            u(error);
          }
        } else {
          a.stack = null;
          if (c) {
            e(n);
          } else {
            r(undefined);
          }
        }
      };
      f();
    });
  },
  use: function (t) {
    p(S(this), t, x);
    return t;
  },
  adopt: function (t, r) {
    const e = S(this);
    i(r);
    p(e, undefined, x, function () {
      return r(t);
    });
    return t;
  },
  defer: function (t) {
    const r = S(this);
    i(t);
    p(r, undefined, x, t);
  },
  move: function () {
    const t = S(this);
    const r = new AsyncDisposableStack();
    w(r).stack = t.stack;
    t.stack = [];
    t.state = E;
    if (!o) {
      this.disposed = true;
    }
    return r;
  },
});
if (o) {
  f(O_prototype, "disposed", {
    configurable: true,
    get: function () {
      return w(this).state === E;
    },
  });
}
c(O_prototype, y, O_prototype.disposeAsync, {
  name: "disposeAsync",
});
c(O_prototype, m, b, {
  nonWritable: true,
});
n(
  {
    global: true,
    constructor: true,
  },
  {
    AsyncDisposableStack,
  },
);
