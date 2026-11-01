import n from "./module-A_17.js";
import o from "./module-r9_16.js";
import i from "./module-YR_16.js";
import a from "./module-vo_16.js";
import s from "./module-A2_17.js";
import u from "./module-vE_16.js";
import c from "./module-dFV_16.js";
import f from "./module-I_17.js";
import l from "./module-lN_16.js";
import h from "./module-b_16.js";
import v from "./module-er1_16.js";
const p = i("SuppressedError");
const g = l("dispose");
const y = l("toStringTag");
const m = "DisposableStack";
const h_set = h.set;
const A = h.getterFor(m);
const x = "sync-dispose";
const w = "disposed";
const S = (t) => {
  const r = A(t);
  if (r.state === w) {
    throw ReferenceError(m + " already disposed");
  }
  return r;
};
const DisposableStack = function () {
  h_set(s(this, E_prototype), {
    type: m,
    state: "pending",
    stack: [],
  });
  if (!o) {
    this.disposed = false;
  }
};
var E_prototype = DisposableStack.prototype;
c(E_prototype, {
  dispose: function () {
    let t;
    const r = A(this);
    if (r.state !== w) {
      r.state = w;
      if (!o) {
        this.disposed = true;
      }
      const e = r.stack;
      for (var n = e.length, i = false; n;) {
        const a = e[--n];
        e[n] = null;
        try {
          a();
        } catch (error) {
          if (i) {
            t = new p(error, t);
          } else {
            i = true;
            t = error;
          }
        }
      }
      r.stack = null;
      if (i) {
        throw t;
      }
    }
  },
  use: function (t) {
    v(S(this), t, x);
    return t;
  },
  adopt: function (t, r) {
    const e = S(this);
    a(r);
    v(e, undefined, x, function () {
      r(t);
    });
    return t;
  },
  defer: function (t) {
    const r = S(this);
    a(t);
    v(r, undefined, x, t);
  },
  move: function () {
    const t = S(this);
    const r = new DisposableStack();
    A(r).stack = t.stack;
    t.stack = [];
    t.state = w;
    if (!o) {
      this.disposed = true;
    }
    return r;
  },
});
if (o) {
  f(E_prototype, "disposed", {
    configurable: true,
    get: function () {
      return A(this).state === w;
    },
  });
}
u(E_prototype, g, E_prototype.dispose, {
  name: "dispose",
});
u(E_prototype, y, m, {
  nonWritable: true,
});
n(
  {
    global: true,
    constructor: true,
  },
  {
    DisposableStack,
  },
);
