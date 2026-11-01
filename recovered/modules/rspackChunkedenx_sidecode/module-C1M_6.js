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
const v = a("SuppressedError");
const g = l("dispose");
const y = l("toStringTag");
const m = "DisposableStack";
const h_set = h.set;
const A = h.getterFor(m);
const w = "sync-dispose";
const x = "disposed";
const E = (t) => {
  const r = A(t);
  if (r.state === x) {
    throw ReferenceError(m + " already disposed");
  }
  return r;
};
const DisposableStack = function () {
  h_set(s(this, S_prototype), {
    type: m,
    state: "pending",
    stack: [],
  });
  if (!o) {
    this.disposed = false;
  }
};
var S_prototype = DisposableStack.prototype;
u(S_prototype, {
  dispose: function () {
    let t;
    const r = A(this);
    if (r.state !== x) {
      r.state = x;
      if (!o) {
        this.disposed = true;
      }
      const e = r.stack;
      for (var n = e.length, a = false; n;) {
        const i = e[--n];
        e[n] = null;
        try {
          i();
        } catch (error) {
          if (a) {
            t = new v(error, t);
          } else {
            a = true;
            t = error;
          }
        }
      }
      r.stack = null;
      if (a) {
        throw t;
      }
    }
  },
  use: function (t) {
    p(E(this), t, w);
    return t;
  },
  adopt: function (t, r) {
    const e = E(this);
    i(r);
    p(e, undefined, w, function () {
      r(t);
    });
    return t;
  },
  defer: function (t) {
    const r = E(this);
    i(t);
    p(r, undefined, w, t);
  },
  move: function () {
    const t = E(this);
    const r = new DisposableStack();
    A(r).stack = t.stack;
    t.stack = [];
    t.state = x;
    if (!o) {
      this.disposed = true;
    }
    return r;
  },
});
if (o) {
  f(S_prototype, "disposed", {
    configurable: true,
    get: function () {
      return A(this).state === x;
    },
  });
}
c(S_prototype, g, S_prototype.dispose, {
  name: "dispose",
});
c(S_prototype, y, m, {
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
