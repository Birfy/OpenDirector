import n from "g";
import i from "p3";
import a from "F";
import o from "DP";
import s from "B";
import A from "IF";
import c from "i9";
import u from "r";
import l from "D";
import h from "N";
import f from "T";
import g from "xX";
import d from "IG";
import p from "Tg";
import m from "AN";
import y from "Nt";
import b from "G";
import forced from "MM";
const I = y("observable");
const w = "Observable";
const C = "Subscription";
const B = "SubscriptionObserver";
const b_getterFor = b.getterFor;
const b_set = b.set;
const k = b_getterFor(w);
const D = b_getterFor(C);
const x = b_getterFor(B);
const F = function (t) {
  this.observer = A(t);
  this.cleanup = undefined;
  this.subscriptionObserver = undefined;
};
F.prototype = {
  type: C,
  clean: function () {
    const cleanup = this.cleanup;
    if (cleanup) {
      this.cleanup = undefined;
      try {
        cleanup();
      } catch (error) {
        m(error);
      }
    }
  },
  close: function () {
    if (!a) {
      const t = this.facade;
      const e = this.subscriptionObserver;
      t.closed = true;
      if (e) {
        e.closed = true;
      }
    }
    this.observer = undefined;
  },
  isClosed: function () {
    return this.observer === undefined;
  },
};
const Q = function (t, e) {
  let r;
  const n = b_set(this, new F(t));
  if (!a) {
    this.closed = false;
  }
  try {
    if ((r = f(t, "start"))) {
      i(r, t, this);
    }
  } catch (error) {
    m(error);
  }
  if (!n.isClosed()) {
    const o = (n.subscriptionObserver = new N(n));
    try {
      const A = e(o);
      if (!l(A)) {
        n.cleanup = u(A.unsubscribe)
          ? function () {
              A.unsubscribe();
            }
          : s(A);
      }
    } catch (error) {
      o.error(error);
      return;
    }
    if (n.isClosed()) {
      n.clean();
    }
  }
};
Q.prototype = d(
  {},
  {
    unsubscribe: function () {
      const t = D(this);
      if (!t.isClosed()) {
        t.close();
        t.clean();
      }
    },
  },
);
if (a) {
  p(Q.prototype, "closed", {
    configurable: true,
    get: function () {
      return D(this).isClosed();
    },
  });
}
var N = function (subscriptionState) {
  b_set(this, {
    type: B,
    subscriptionState,
  });
  if (!a) {
    this.closed = false;
  }
};
N.prototype = d(
  {},
  {
    next: function (t) {
      const subscriptionState = x(this).subscriptionState;
      if (!subscriptionState.isClosed()) {
        const r = subscriptionState.observer;
        try {
          const n = f(r, "next");
          if (n) {
            i(n, r, t);
          }
        } catch (error) {
          m(error);
        }
      }
    },
    error: function (t) {
      const subscriptionState = x(this).subscriptionState;
      if (!subscriptionState.isClosed()) {
        const r = subscriptionState.observer;
        subscriptionState.close();
        try {
          const n = f(r, "error");
          if (n) {
            i(n, r, t);
          } else {
            m(t);
          }
        } catch (error) {
          m(error);
        }
        subscriptionState.clean();
      }
    },
    complete: function () {
      const subscriptionState = x(this).subscriptionState;
      if (!subscriptionState.isClosed()) {
        const e = subscriptionState.observer;
        subscriptionState.close();
        try {
          const r = f(e, "complete");
          if (r) {
            i(r, e);
          }
        } catch (error) {
          m(error);
        }
        subscriptionState.clean();
      }
    },
  },
);
if (a) {
  p(N.prototype, "closed", {
    configurable: true,
    get: function () {
      return x(this).subscriptionState.isClosed();
    },
  });
}
const Observable = function (t) {
  c(this, R_prototype);
  b_set(this, {
    type: w,
    subscriber: s(t),
  });
};
var R_prototype = Observable.prototype;
d(R_prototype, {
  subscribe: function (next) {
    const arguments_length = arguments.length;
    return new Q(
      u(next)
        ? {
            next,
            error: arguments_length > 1 ? arguments[1] : undefined,
            complete: arguments_length > 2 ? arguments[2] : undefined,
          }
        : h(next)
          ? next
          : {},
      k(this).subscriber,
    );
  },
});
g(R_prototype, I, function () {
  return this;
});
n(
  {
    global: true,
    constructor: true,
    forced,
  },
  {
    Observable,
  },
);
o(w);
