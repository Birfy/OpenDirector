import n from "./module-A_8.js";
import o from "./module-r9_7.js";
import i from "./module-YR_7.js";
import a from "./module-vo_7.js";
import s from "./module-A2_8.js";
import u from "./module-vE_7.js";
import c from "./module-dFV_7.js";
import f from "./module-I_8.js";
import l from "./module-lN_7.js";
import h from "./module-b_7.js";
import v from "./module-er1_7.js";
const p = i("Promise");
const d = i("SuppressedError");
const y = l("asyncDispose");
const m = l("toStringTag");
const b = "AsyncDisposableStack";
const h_set = h.set;
const w = h.getterFor(b);
const x = "async-dispose";
const E = "disposed";
const S = (r) => {
  const t = w(r);
  if (t.state === E) {
    throw ReferenceError(b + " already disposed");
  }
  return t;
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
c(O_prototype, {
  disposeAsync: function () {
    const r = this;
    return new p(function (t, e) {
      let n;
      const i = w(r);
      if (i.state === E) {
        return t(undefined);
      }
      i.state = E;
      if (!o) {
        r.disposed = true;
      }
      const i_stack = i.stack;
      let a_length = i_stack.length;
      let u = false;
      const c = function (r) {
        if (u) {
          n = new d(r, n);
        } else {
          u = true;
          n = r;
        }
        f();
      };
      var f = function () {
        if (a_length) {
          const r = i_stack[--a_length];
          i_stack[a_length] = null;
          try {
            p.resolve(r()).then(f, c);
          } catch (error) {
            c(error);
          }
        } else {
          i.stack = null;
          if (u) {
            e(n);
          } else {
            t(undefined);
          }
        }
      };
      f();
    });
  },
  use: function (r) {
    v(S(this), r, x);
    return r;
  },
  adopt: function (r, t) {
    const e = S(this);
    a(t);
    v(e, undefined, x, function () {
      return t(r);
    });
    return r;
  },
  defer: function (r) {
    const t = S(this);
    a(r);
    v(t, undefined, x, r);
  },
  move: function () {
    const r = S(this);
    const t = new AsyncDisposableStack();
    w(t).stack = r.stack;
    r.stack = [];
    r.state = E;
    if (!o) {
      this.disposed = true;
    }
    return t;
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
u(O_prototype, y, O_prototype.disposeAsync, {
  name: "disposeAsync",
});
u(O_prototype, m, b, {
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
