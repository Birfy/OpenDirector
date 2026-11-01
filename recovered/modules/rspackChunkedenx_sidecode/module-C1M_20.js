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
const p = i("SuppressedError");
const g = l("dispose");
const y = l("toStringTag");
const m = "DisposableStack";
const h_set = h.set;
const w = h.getterFor(m);
const A = "sync-dispose";
const x = "disposed";
const S = (t) => {
  const r = w(t);
  if (r.state === x) {
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
u(E_prototype, {
  dispose: function () {
    let t;
    const r = w(this);
    if (r.state !== x) {
      r.state = x;
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
    v(S(this), t, A);
    return t;
  },
  adopt: function (t, r) {
    const e = S(this);
    a(r);
    v(e, undefined, A, function () {
      r(t);
    });
    return t;
  },
  defer: function (t) {
    const r = S(this);
    a(t);
    v(r, undefined, A, t);
  },
  move: function () {
    const t = S(this);
    const r = new DisposableStack();
    w(r).stack = t.stack;
    t.stack = [];
    t.state = x;
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
      return w(this).state === x;
    },
  });
}
c(E_prototype, g, E_prototype.dispose, {
  name: "dispose",
});
c(E_prototype, y, m, {
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
