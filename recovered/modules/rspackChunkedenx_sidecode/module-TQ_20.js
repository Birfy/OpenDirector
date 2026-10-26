import n from "./module-A_21.js";
import o from "./module-r9_20.js";
import i from "./module-YR_20.js";
import a from "./module-vo_20.js";
import s from "./module-A2_21.js";
import c from "./module-vE_20.js";
import u from "./module-dFV_20.js";
import f from "./module-I_21.js";
import l from "./module-lN_20.js";
import h from "./module-b_20.js";
import v from "./module-er1_20.js";
const p = i("Promise");
const d = i("SuppressedError");
const y = l("asyncDispose");
const m = l("toStringTag");
const b = "AsyncDisposableStack";
const h_set = h.set;
const A = h.getterFor(b);
const x = "async-dispose";
const S = "disposed";
const E = (t) => {
  const r = A(t);
  if (r.state === S) {
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
    return new p(function (r, e) {
      let n;
      const i = A(t);
      if (i.state === S) {
        return r(undefined);
      }
      i.state = S;
      if (!o) {
        t.disposed = true;
      }
      const i_stack = i.stack;
      let a_length = i_stack.length;
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
        if (a_length) {
          const t = i_stack[--a_length];
          i_stack[a_length] = null;
          try {
            p.resolve(t()).then(f, u);
          } catch (error) {
            u(error);
          }
        } else {
          i.stack = null;
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
    v(E(this), t, x);
    return t;
  },
  adopt: function (t, r) {
    const e = E(this);
    a(r);
    v(e, undefined, x, function () {
      return r(t);
    });
    return t;
  },
  defer: function (t) {
    const r = E(this);
    a(t);
    v(r, undefined, x, t);
  },
  move: function () {
    const t = E(this);
    const r = new AsyncDisposableStack();
    A(r).stack = t.stack;
    t.stack = [];
    t.state = S;
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
      return A(this).state === S;
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
