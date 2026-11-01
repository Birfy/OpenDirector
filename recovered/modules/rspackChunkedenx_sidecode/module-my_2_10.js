import n from "./module-A_11.js";
import o from "./module-M_2_10.js";
import i from "./module-r9_10.js";
import a from "./module-FG_10.js";
import s from "./module-vo_10.js";
import u from "./module-d_11.js";
import c from "./module-A2_11.js";
import f from "./module-Y_11.js";
import l from "./module-Mi_10.js";
import h from "./module-y_2_10.js";
import v from "./module-C_11.js";
import p from "./module-vE_10.js";
import d from "./module-dFV_10.js";
import g from "./module-I_11.js";
import y from "./module-qI_10.js";
import b from "./module-lN_10.js";
import m from "./module-b_10.js";
import forced from "./module-dy_12.js";
const x = b("observable");
const w = "Observable";
const S = "Subscription";
const E = "SubscriptionObserver";
const m_getterFor = m.getterFor;
const m_set = m.set;
const M = m_getterFor(w);
const I = m_getterFor(S);
const k = m_getterFor(E);
const T = function (t) {
  this.observer = u(t);
  this.cleanup = undefined;
  this.subscriptionObserver = undefined;
};
T.prototype = {
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
const j = function (t, r) {
  let e;
  const n = m_set(this, new T(t));
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
      const u = r(a);
      if (!l(u)) {
        n.cleanup = f(u.unsubscribe)
          ? function () {
              u.unsubscribe();
            }
          : s(u);
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
j.prototype = d(
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
  g(j.prototype, "closed", {
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
  c(this, F_prototype);
  m_set(this, {
    type: w,
    subscriber: s(t),
  });
};
var F_prototype = Observable.prototype;
d(F_prototype, {
  subscribe: function (next) {
    const arguments_length = arguments.length;
    return new j(
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
p(F_prototype, x, function () {
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
