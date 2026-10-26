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
const p = i("Promise");
const d = i("SuppressedError");
const y = h("asyncDispose");
const b = h("toStringTag");
const m = "AsyncDisposableStack";
const l_set = l.set;
const x = l.getterFor(m);
const w = "async-dispose";
const S = "disposed";
const E = (t) => {
  const r = x(t);
  if (r.state === S) {
    throw ReferenceError(m + " already disposed");
  }
  return r;
};
const AsyncDisposableStack = function () {
  l_set(s(this, O_prototype), {
    type: m,
    state: "pending",
    stack: [],
  });
  if (!o) {
    this.disposed = false;
  }
};
var O_prototype = AsyncDisposableStack.prototype;
c(O_prototype, {
  disposeAsync: function () {
    const t = this;
    return new p(function (r, e) {
      let n;
      const i = x(t);
      if (i.state === S) {
        return r(undefined);
      }
      i.state = S;
      if (!o) {
        t.disposed = true;
      }
      const i_stack = i.stack;
      let a_length = i_stack.length;
      let u = false;
      const c = function (t) {
        if (u) {
          n = new d(t, n);
        } else {
          u = true;
          n = t;
        }
        f();
      };
      var f = function () {
        if (a_length) {
          const t = i_stack[--a_length];
          i_stack[a_length] = null;
          try {
            p.resolve(t()).then(f, c);
          } catch (error) {
            c(error);
          }
        } else {
          i.stack = null;
          if (u) {
            e(n);
          } else {
            r(undefined);
          }
        }
      };
      f();
    });
  },
  use: function (t) {
    v(E(this), t, w);
    return t;
  },
  adopt: function (t, r) {
    const e = E(this);
    a(r);
    v(e, undefined, w, function () {
      return r(t);
    });
    return t;
  },
  defer: function (t) {
    const r = E(this);
    a(t);
    v(r, undefined, w, t);
  },
  move: function () {
    const t = E(this);
    const r = new AsyncDisposableStack();
    x(r).stack = t.stack;
    t.stack = [];
    t.state = S;
    if (!o) {
      this.disposed = true;
    }
    return r;
  },
});
if (o) {
  f(O_prototype, "disposed", {
    configurable: true,
    get: function () {
      return x(this).state === S;
    },
  });
}
u(O_prototype, y, O_prototype.disposeAsync, {
  name: "disposeAsync",
});
u(O_prototype, b, m, {
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
