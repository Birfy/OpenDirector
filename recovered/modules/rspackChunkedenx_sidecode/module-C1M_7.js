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
const p = i("SuppressedError");
const g = l("dispose");
const y = l("toStringTag");
const m = "DisposableStack";
const h_set = h.set;
const A = h.getterFor(m);
const w = "sync-dispose";
const x = "disposed";
const E = (r) => {
  const t = A(r);
  if (t.state === x) {
    throw ReferenceError(m + " already disposed");
  }
  return t;
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
c(S_prototype, {
  dispose: function () {
    let r;
    const t = A(this);
    if (t.state !== x) {
      t.state = x;
      if (!o) {
        this.disposed = true;
      }
      const e = t.stack;
      for (var n = e.length, i = false; n;) {
        const a = e[--n];
        e[n] = null;
        try {
          a();
        } catch (error) {
          if (i) {
            r = new p(error, r);
          } else {
            i = true;
            r = error;
          }
        }
      }
      t.stack = null;
      if (i) {
        throw r;
      }
    }
  },
  use: function (r) {
    v(E(this), r, w);
    return r;
  },
  adopt: function (r, t) {
    const e = E(this);
    a(t);
    v(e, undefined, w, function () {
      t(r);
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
    const t = new DisposableStack();
    A(t).stack = r.stack;
    r.stack = [];
    r.state = x;
    if (!o) {
      this.disposed = true;
    }
    return t;
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
u(S_prototype, g, S_prototype.dispose, {
  name: "dispose",
});
u(S_prototype, y, m, {
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
