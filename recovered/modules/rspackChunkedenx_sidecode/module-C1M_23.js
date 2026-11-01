import n from "./module-A_24.js";
import o from "./module-r9_23.js";
import i from "./module-YR_23.js";
import a from "./module-vo_23.js";
import s from "./module-A2_24.js";
import c from "./module-vE_23.js";
import u from "./module-dFV_23.js";
import f from "./module-I_24.js";
import l from "./module-lN_23.js";
import h from "./module-b_23.js";
import v from "./module-er1_23.js";
const p = i("SuppressedError");
const g = l("dispose");
const y = l("toStringTag");
const b = "DisposableStack";
const h_set = h.set;
const A = h.getterFor(b);
const x = "sync-dispose";
const w = "disposed";
const S = (t) => {
  const r = A(t);
  if (r.state === w) {
    throw ReferenceError(b + " already disposed");
  }
  return r;
};
const DisposableStack = function () {
  h_set(s(this, E_prototype), {
    type: b,
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
c(E_prototype, g, E_prototype.dispose, {
  name: "dispose",
});
c(E_prototype, y, b, {
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
