import n from "./module-A_14.js";
import o from "./module-r9_13.js";
import i from "./module-YR_13.js";
import a from "./module-vo_13.js";
import s from "./module-A2_14.js";
import u from "./module-vE_13.js";
import c from "./module-dFV_13.js";
import f from "./module-I_14.js";
import h from "./module-lN_13.js";
import l from "./module-b_13.js";
import v from "./module-er1_13.js";
const p = i("SuppressedError");
const g = h("dispose");
const y = h("toStringTag");
const b = "DisposableStack";
const l_set = l.set;
const A = l.getterFor(b);
const x = "sync-dispose";
const w = "disposed";
const S = (r) => {
  const t = A(r);
  if (t.state === w) {
    throw ReferenceError(b + " already disposed");
  }
  return t;
};
const DisposableStack = function () {
  l_set(s(this, E_prototype), {
    type: b,
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
    let r;
    const t = A(this);
    if (t.state !== w) {
      t.state = w;
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
    v(S(this), r, x);
    return r;
  },
  adopt: function (r, t) {
    const e = S(this);
    a(t);
    v(e, undefined, x, function () {
      t(r);
    });
    return r;
  },
  defer: function (r) {
    const t = S(this);
    a(r);
    v(t, undefined, x, r);
  },
  move: function () {
    const r = S(this);
    const t = new DisposableStack();
    A(t).stack = r.stack;
    r.stack = [];
    r.state = w;
    if (!o) {
      this.disposed = true;
    }
    return t;
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
