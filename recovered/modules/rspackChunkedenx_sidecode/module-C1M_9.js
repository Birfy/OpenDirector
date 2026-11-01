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
const d = i("SuppressedError");
const g = l("dispose");
const y = l("toStringTag");
const m = "DisposableStack";
const h_set = h.set;
const w = h.getterFor(m);
const A = "sync-dispose";
const x = "disposed";
const E = (t) => {
  const e = w(t);
  if (e.state === x) {
    throw ReferenceError(m + " already disposed");
  }
  return e;
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
    let t;
    const e = w(this);
    if (e.state !== x) {
      e.state = x;
      if (!o) {
        this.disposed = true;
      }
      const r = e.stack;
      for (var n = r.length, i = false; n;) {
        const a = r[--n];
        r[n] = null;
        try {
          a();
        } catch (error) {
          if (i) {
            t = new d(error, t);
          } else {
            i = true;
            t = error;
          }
        }
      }
      e.stack = null;
      if (i) {
        throw t;
      }
    }
  },
  use: function (t) {
    v(E(this), t, A);
    return t;
  },
  adopt: function (t, e) {
    const r = E(this);
    a(e);
    v(r, undefined, A, function () {
      e(t);
    });
    return t;
  },
  defer: function (t) {
    const e = E(this);
    a(t);
    v(e, undefined, A, t);
  },
  move: function () {
    const t = E(this);
    const e = new DisposableStack();
    w(e).stack = t.stack;
    t.stack = [];
    t.state = x;
    if (!o) {
      this.disposed = true;
    }
    return e;
  },
});
if (o) {
  f(S_prototype, "disposed", {
    configurable: true,
    get: function () {
      return w(this).state === x;
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
