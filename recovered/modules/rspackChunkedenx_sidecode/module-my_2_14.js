import n from "./module-A_15.js";
import o from "./module-M_2_14.js";
import i from "./module-r9_14.js";
import a from "./module-FG_14.js";
import s from "./module-vo_14.js";
import c from "./module-d_15.js";
import u from "./module-A2_15.js";
import f from "./module-Y_15.js";
import l from "./module-Mi_14.js";
import h from "./module-y_2_14.js";
import v from "./module-C_15.js";
import p from "./module-vE_14.js";
import d from "./module-dFV_14.js";
import g from "./module-I_15.js";
import y from "./module-qI_14.js";
import b from "./module-lN_14.js";
import m from "./module-b_14.js";
import forced from "./module-dy_16.js";
const x = b("observable");
const w = "Observable";
const S = "Subscription";
const E = "SubscriptionObserver";
const m_getterFor = m.getterFor;
const m_set = m.set;
const M = m_getterFor(w);
const I = m_getterFor(S);
const k = m_getterFor(E);
const j = function (t) {
  this.observer = c(t);
  this.cleanup = undefined;
  this.subscriptionObserver = undefined;
};
j.prototype = {
  type: S,
  clean: function () {
    const cleanup = this.cleanup;
    if (cleanup) {
      this.cleanup = undefined;
      try {
        cleanup();
      } catch (error) {
        y(error);
      }
    }
  },
  close: function () {
    if (!i) {
      const t = this.facade;
      const r = this.subscriptionObserver;
      t.closed = true;
      if (r) {
        r.closed = true;
      }
    }
    this.observer = undefined;
  },
  isClosed: function () {
    return this.observer === undefined;
  },
};
const T = function (t, r) {
  let e;
  const n = m_set(this, new j(t));
  if (!i) {
    this.closed = false;
  }
  try {
    if ((e = v(t, "start"))) {
      o(e, t, this);
    }
  } catch (error) {
    y(error);
  }
  if (!n.isClosed()) {
    const a = (n.subscriptionObserver = new N(n));
    try {
      const c = r(a);
      if (!l(c)) {
        n.cleanup = f(c.unsubscribe)
          ? function () {
              c.unsubscribe();
            }
          : s(c);
      }
    } catch (error) {
      a.error(error);
      return;
    }
    if (n.isClosed()) {
      n.clean();
    }
  }
};
T.prototype = d(
  {},
  {
    unsubscribe: function () {
      const t = I(this);
      if (!t.isClosed()) {
        t.close();
        t.clean();
      }
    },
  },
);
if (i) {
  g(T.prototype, "closed", {
    configurable: true,
    get: function () {
      return I(this).isClosed();
    },
  });
}
var N = function (subscriptionState) {
  m_set(this, {
    type: E,
    subscriptionState,
  });
  if (!i) {
    this.closed = false;
  }
};
N.prototype = d(
  {},
  {
    next: function (t) {
      const subscriptionState = k(this).subscriptionState;
      if (!subscriptionState.isClosed()) {
        const e = subscriptionState.observer;
        try {
          const n = v(e, "next");
          if (n) {
            o(n, e, t);
          }
        } catch (error) {
          y(error);
        }
      }
    },
    error: function (t) {
      const subscriptionState = k(this).subscriptionState;
      if (!subscriptionState.isClosed()) {
        const e = subscriptionState.observer;
        subscriptionState.close();
        try {
          const n = v(e, "error");
          if (n) {
            o(n, e, t);
          } else {
            y(t);
          }
        } catch (error) {
          y(error);
        }
        subscriptionState.clean();
      }
    },
    complete: function () {
      const subscriptionState = k(this).subscriptionState;
      if (!subscriptionState.isClosed()) {
        const r = subscriptionState.observer;
        subscriptionState.close();
        try {
          const e = v(r, "complete");
          if (e) {
            o(e, r);
          }
        } catch (error) {
          y(error);
        }
        subscriptionState.clean();
      }
    },
  },
);
if (i) {
  g(N.prototype, "closed", {
    configurable: true,
    get: function () {
      return k(this).subscriptionState.isClosed();
    },
  });
}
const Observable = function (t) {
  u(this, P_prototype);
  m_set(this, {
    type: w,
    subscriber: s(t),
  });
};
var P_prototype = Observable.prototype;
d(P_prototype, {
  subscribe: function (next) {
    const arguments_length = arguments.length;
    return new T(
      f(next)
        ? {
            next,
            error: arguments_length > 1 ? arguments[1] : undefined,
            complete: arguments_length > 2 ? arguments[2] : undefined,
          }
        : h(next)
          ? next
          : {},
      M(this).subscriber,
    );
  },
});
p(P_prototype, x, function () {
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
a(w);
