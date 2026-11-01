import n from "./module-A_14.js";
import o from "./module-M_2_13.js";
import i from "./module-r9_13.js";
import a from "./module-FG_13.js";
import s from "./module-vo_13.js";
import u from "./module-d_14.js";
import c from "./module-A2_14.js";
import f from "./module-Y_14.js";
import h from "./module-Mi_13.js";
import l from "./module-y_2_13.js";
import v from "./module-C_14.js";
import p from "./module-vE_13.js";
import d from "./module-dFV_13.js";
import g from "./module-I_14.js";
import y from "./module-qI_13.js";
import b from "./module-lN_13.js";
import m from "./module-b_13.js";
import forced from "./module-dy_15.js";
const x = b("observable");
const w = "Observable";
const S = "Subscription";
const E = "SubscriptionObserver";
const m_getterFor = m.getterFor;
const m_set = m.set;
const M = m_getterFor(w);
const I = m_getterFor(S);
const k = m_getterFor(E);
const T = function (r) {
  this.observer = u(r);
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
      const r = this.facade;
      const t = this.subscriptionObserver;
      r.closed = true;
      if (t) {
        t.closed = true;
      }
    }
    this.observer = undefined;
  },
  isClosed: function () {
    return this.observer === undefined;
  },
};
const j = function (r, t) {
  let e;
  const n = m_set(this, new T(r));
  if (!i) {
    this.closed = false;
  }
  try {
    if ((e = v(r, "start"))) {
      o(e, r, this);
    }
  } catch (error) {
    y(error);
  }
  if (!n.isClosed()) {
    const a = (n.subscriptionObserver = new N(n));
    try {
      const u = t(a);
      if (!h(u)) {
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
      const r = I(this);
      if (!r.isClosed()) {
        r.close();
        r.clean();
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
    next: function (r) {
      const subscriptionState = k(this).subscriptionState;
      if (!subscriptionState.isClosed()) {
        const e = subscriptionState.observer;
        try {
          const n = v(e, "next");
          if (n) {
            o(n, e, r);
          }
        } catch (error) {
          y(error);
        }
      }
    },
    error: function (r) {
      const subscriptionState = k(this).subscriptionState;
      if (!subscriptionState.isClosed()) {
        const e = subscriptionState.observer;
        subscriptionState.close();
        try {
          const n = v(e, "error");
          if (n) {
            o(n, e, r);
          } else {
            y(r);
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
        const t = subscriptionState.observer;
        subscriptionState.close();
        try {
          const e = v(t, "complete");
          if (e) {
            o(e, t);
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
const Observable = function (r) {
  c(this, F_prototype);
  m_set(this, {
    type: w,
    subscriber: s(r),
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
        : l(next)
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
