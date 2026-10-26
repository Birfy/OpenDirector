import n from "./module-A.js";
import o from "./module-r9.js";
import i from "./module-YR.js";
import a from "./module-vo.js";
import s from "./module-A2.js";
import u from "./module-vE.js";
import c from "./module-dFV.js";
import f from "./module-I.js";
import h from "./module-lN.js";
import l from "./module-b.js";
import v from "./module-er1.js";
const p = i("SuppressedError");
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
