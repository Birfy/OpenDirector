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
const g = a("Promise");
const d = a("SuppressedError");
const m = l("asyncDispose");
const y = l("toStringTag");
const b = "AsyncDisposableStack";
const h_set = h.set;
const I = h.getterFor(b);
const w = "async-dispose";
const C = "disposed";
const B = (t) => {
  const e = I(t);
  if (e.state === C) {
    throw ReferenceError(b + " already disposed");
  }
  return e;
};
const AsyncDisposableStack = function () {
  h_set(s(this, S_prototype), {
    type: b,
    state: "pending",
    stack: [],
  });
  if (!i) {
    this.disposed = false;
  }
};
var S_prototype = AsyncDisposableStack.prototype;
c(S_prototype, {
  disposeAsync: function () {
    const t = this;
    return new g(function (e, r) {
      let n;
      const a = I(t);
      if (a.state === C) {
        return e(undefined);
      }
      a.state = C;
      if (!i) {
        t.disposed = true;
      }
      const a_stack = a.stack;
      let o_length = a_stack.length;
      let A = false;
      const c = function (t) {
        if (A) {
          n = new d(t, n);
        } else {
          A = true;
          n = t;
        }
        u();
      };
      var u = function () {
        if (o_length) {
          const t = a_stack[--o_length];
          a_stack[o_length] = null;
          try {
            g.resolve(t()).then(u, c);
          } catch (error) {
            c(error);
          }
        } else {
          a.stack = null;
          if (A) {
            r(n);
          } else {
            e(undefined);
          }
        }
      };
      u();
    });
  },
  use: function (t) {
    f(B(this), t, w);
    return t;
  },
  adopt: function (t, e) {
    const r = B(this);
    o(e);
    f(r, undefined, w, function () {
      return e(t);
    });
    return t;
  },
  defer: function (t) {
    const e = B(this);
    o(t);
    f(e, undefined, w, t);
  },
  move: function () {
    const t = B(this);
    const e = new AsyncDisposableStack();
    I(e).stack = t.stack;
    t.stack = [];
    t.state = C;
    if (!i) {
      this.disposed = true;
    }
    return e;
  },
});
if (i) {
  u(S_prototype, "disposed", {
    configurable: true,
    get: function () {
      return I(this).state === C;
    },
  });
}
A(S_prototype, m, S_prototype.disposeAsync, {
  name: "disposeAsync",
});
A(S_prototype, y, b, {
  nonWritable: true,
});
n(
  {
    global: true,
    constructor: true,
  },
  {
    AsyncDisposableStack,
  },
);
