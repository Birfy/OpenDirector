import n from "./module-A_19.js";
import o from "./module-r9_18.js";
import i from "./module-YR_18.js";
import a from "./module-vo_18.js";
import s from "./module-A2_19.js";
import u from "./module-vE_18.js";
import c from "./module-dFV_18.js";
import f from "./module-I_19.js";
import h from "./module-lN_18.js";
import l from "./module-b_18.js";
import v from "./module-er1_18.js";
const p = i("Promise");
const d = i("SuppressedError");
const y = h("asyncDispose");
const b = h("toStringTag");
const m = "AsyncDisposableStack";
const l_set = l.set;
const x = l.getterFor(m);
const w = "async-dispose";
const S = "disposed";
const E = (r) => {
  const t = x(r);
  if (t.state === S) {
    throw ReferenceError(m + " already disposed");
  }
  return t;
};
const AsyncDisposableStack = function () {
  l_set(s(this, O_prototype), {
    type: m,
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
      const i = x(r);
      if (i.state === S) {
        return t(undefined);
      }
      i.state = S;
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
    v(E(this), r, w);
    return r;
  },
  adopt: function (r, t) {
    const e = E(this);
    a(t);
    v(e, undefined, w, function () {
      return t(r);
    });
    return r;
  },
  defer: function (r) {
    const t = E(this);
    a(r);
    v(t, undefined, w, r);
  },
  move: function () {
    const r = E(this);
    const t = new AsyncDisposableStack();
    x(t).stack = r.stack;
    r.stack = [];
    r.state = S;
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
