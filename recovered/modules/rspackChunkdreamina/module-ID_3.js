import n from "g";
import i from "F";
import a from "Y";
import o from "B";
import s from "i9";
import A from "xX";
import c from "IG";
import u from "Tg";
import l from "Nt";
import h from "G";
import f from "qF";
const g = a("SuppressedError");
const p = l("dispose");
const m = l("toStringTag");
const y = "DisposableStack";
const h_set = h.set;
const v = h.getterFor(y);
const I = "sync-dispose";
const w = "disposed";
const C = (t) => {
  const e = v(t);
  if (e.state === w) {
    throw ReferenceError(y + " already disposed");
  }
  return e;
};
const DisposableStack = function () {
  h_set(s(this, B_prototype), {
    type: y,
    state: "pending",
    stack: [],
  });
  if (!i) {
    this.disposed = false;
  }
};
var B_prototype = DisposableStack.prototype;
c(B_prototype, {
  dispose: function () {
    let t;
    const e = v(this);
    if (e.state !== w) {
      e.state = w;
      if (!i) {
        this.disposed = true;
      }
      const r = e.stack;
      for (var n = r.length, a = false; n;) {
        const o = r[--n];
        r[n] = null;
        try {
          o();
        } catch (error) {
          if (a) {
            t = new g(error, t);
          } else {
            a = true;
            t = error;
          }
        }
      }
      e.stack = null;
      if (a) {
        throw t;
      }
    }
  },
  use: function (t) {
    f(C(this), t, I);
    return t;
  },
  adopt: function (t, e) {
    const r = C(this);
    o(e);
    f(r, undefined, I, function () {
      e(t);
    });
    return t;
  },
  defer: function (t) {
    const e = C(this);
    o(t);
    f(e, undefined, I, t);
  },
  move: function () {
    const t = C(this);
    const e = new DisposableStack();
    v(e).stack = t.stack;
    t.stack = [];
    t.state = w;
    if (!i) {
      this.disposed = true;
    }
    return e;
  },
});
if (i) {
  u(B_prototype, "disposed", {
    configurable: true,
    get: function () {
      return v(this).state === w;
    },
  });
}
A(B_prototype, p, B_prototype.dispose, {
  name: "dispose",
});
A(B_prototype, m, y, {
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
