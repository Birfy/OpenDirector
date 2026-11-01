import n from "./module-A_9.js";
import i from "./module-r9_8.js";
import o from "./module-YR_8.js";
import s from "./module-vo_8.js";
import a from "./module-A2_9.js";
import u from "./module-vE_8.js";
import c from "./module-dFV_8.js";
import f from "./module-I_9.js";
import h from "./module-lN_8.js";
import l from "./module-b_8.js";
import v from "./module-er1_8.js";
const p = o("Promise");
const d = o("SuppressedError");
const y = h("asyncDispose");
const b = h("toStringTag");
const m = "AsyncDisposableStack";
const l_set = l.set;
const x = l.getterFor(m);
const w = "async-dispose";
const S = "disposed";
const E = (t) => {
  const r = x(t);
  if (r.state === S) {
    throw ReferenceError(m + " already disposed");
  }
  return r;
};
const AsyncDisposableStack = function () {
  l_set(a(this, O_prototype), {
    type: m,
    state: "pending",
    stack: [],
  });
  if (!i) {
    this.disposed = false;
  }
};
var O_prototype = AsyncDisposableStack.prototype;
c(O_prototype, {
  disposeAsync: function () {
    const t = this;
    return new p(function (r, e) {
      let n;
      const o = x(t);
      if (o.state === S) {
        return r(undefined);
      }
      o.state = S;
      if (!i) {
        t.disposed = true;
      }
      const o_stack = o.stack;
      let s_length = o_stack.length;
      let u = false;
      const c = function (t) {
        if (u) {
          n = new d(t, n);
        } else {
          u = true;
          n = t;
        }
        f();
      };
      var f = function () {
        if (s_length) {
          const t = o_stack[--s_length];
          o_stack[s_length] = null;
          try {
            p.resolve(t()).then(f, c);
          } catch (error) {
            c(error);
          }
        } else {
          o.stack = null;
          if (u) {
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
    v(E(this), t, w);
    return t;
  },
  adopt: function (t, r) {
    const e = E(this);
    s(r);
    v(e, undefined, w, function () {
      return r(t);
    });
    return t;
  },
  defer: function (t) {
    const r = E(this);
    s(t);
    v(r, undefined, w, t);
  },
  move: function () {
    const t = E(this);
    const r = new AsyncDisposableStack();
    x(r).stack = t.stack;
    t.stack = [];
    t.state = S;
    if (!i) {
      this.disposed = true;
    }
    return r;
  },
});
if (i) {
  f(O_prototype, "disposed", {
    configurable: true,
    get: function () {
      return x(this).state === S;
    },
  });
}
u(O_prototype, y, O_prototype.disposeAsync, {
  name: "disposeAsync",
});
u(O_prototype, b, m, {
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
