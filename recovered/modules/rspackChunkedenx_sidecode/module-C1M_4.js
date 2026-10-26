import n from "./module-A_5.js";
import i from "./module-r9_4.js";
import o from "./module-YR_4.js";
import s from "./module-vo_4.js";
import a from "./module-A2_5.js";
import u from "./module-vE_4.js";
import c from "./module-dFV_4.js";
import f from "./module-I_5.js";
import h from "./module-lN_4.js";
import l from "./module-b_4.js";
import v from "./module-er1_4.js";
const p = o("SuppressedError");
const g = h("dispose");
const y = h("toStringTag");
const b = "DisposableStack";
const l_set = l.set;
const A = l.getterFor(b);
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
  l_set(a(this, E_prototype), {
    type: b,
    state: "pending",
    stack: [],
  });
  if (!i) {
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
      if (!i) {
        this.disposed = true;
      }
      const e = r.stack;
      for (var n = e.length, o = false; n;) {
        const s = e[--n];
        e[n] = null;
        try {
          s();
        } catch (error) {
          if (o) {
            t = new p(error, t);
          } else {
            o = true;
            t = error;
          }
        }
      }
      r.stack = null;
      if (o) {
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
    s(r);
    v(e, undefined, x, function () {
      r(t);
    });
    return t;
  },
  defer: function (t) {
    const r = S(this);
    s(t);
    v(r, undefined, x, t);
  },
  move: function () {
    const t = S(this);
    const r = new DisposableStack();
    A(r).stack = t.stack;
    t.stack = [];
    t.state = w;
    if (!i) {
      this.disposed = true;
    }
    return r;
  },
});
if (i) {
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
u(E_prototype, y, b, {
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
