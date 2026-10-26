import n from "./module-A_10.js";
import o from "./module-r9_9.js";
import i from "./module-YR_9.js";
import a from "./module-vo_9.js";
import s from "./module-A2_10.js";
import u from "./module-vE_9.js";
import c from "./module-dFV_9.js";
import f from "./module-I_10.js";
import l from "./module-lN_9.js";
import h from "./module-b_9.js";
import v from "./module-er1_9.js";
const d = i("Promise");
const p = i("SuppressedError");
const y = l("asyncDispose");
const m = l("toStringTag");
const b = "AsyncDisposableStack";
const h_set = h.set;
const A = h.getterFor(b);
const x = "async-dispose";
const E = "disposed";
const S = (t) => {
  const e = A(t);
  if (e.state === E) {
    throw ReferenceError(b + " already disposed");
  }
  return e;
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
    const t = this;
    return new d(function (e, r) {
      let n;
      const i = A(t);
      if (i.state === E) {
        return e(undefined);
      }
      i.state = E;
      if (!o) {
        t.disposed = true;
      }
      const i_stack = i.stack;
      let a_length = i_stack.length;
      let u = false;
      const c = function (t) {
        if (u) {
          n = new p(t, n);
        } else {
          u = true;
          n = t;
        }
        f();
      };
      var f = function () {
        if (a_length) {
          const t = i_stack[--a_length];
          i_stack[a_length] = null;
          try {
            d.resolve(t()).then(f, c);
          } catch (error) {
            c(error);
          }
        } else {
          i.stack = null;
          if (u) {
            r(n);
          } else {
            e(undefined);
          }
        }
      };
      f();
    });
  },
  use: function (t) {
    v(S(this), t, x);
    return t;
  },
  adopt: function (t, e) {
    const r = S(this);
    a(e);
    v(r, undefined, x, function () {
      return e(t);
    });
    return t;
  },
  defer: function (t) {
    const e = S(this);
    a(t);
    v(e, undefined, x, t);
  },
  move: function () {
    const t = S(this);
    const e = new AsyncDisposableStack();
    A(e).stack = t.stack;
    t.stack = [];
    t.state = E;
    if (!o) {
      this.disposed = true;
    }
    return e;
  },
});
if (o) {
  f(O_prototype, "disposed", {
    configurable: true,
    get: function () {
      return A(this).state === E;
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
