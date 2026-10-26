import n from "./module-A_5.js";
import i from "./module-M_2_4.js";
import o from "./module-r9_4.js";
import s from "./module-FG_4.js";
import a from "./module-vo_4.js";
import u from "./module-d_5.js";
import c from "./module-A2_5.js";
import f from "./module-Y_5.js";
import h from "./module-Mi_4.js";
import l from "./module-y_2_4.js";
import v from "./module-C_5.js";
import p from "./module-vE_4.js";
import d from "./module-dFV_4.js";
import g from "./module-I_5.js";
import y from "./module-qI_4.js";
import b from "./module-lN_4.js";
import m from "./module-b_4.js";
import forced from "./module-dy_6.js";
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
    if (!o) {
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
  if (!o) {
    this.closed = false;
  }
  try {
    if ((e = v(t, "start"))) {
      i(e, t, this);
    }
  } catch (error) {
    y(error);
  }
  if (!n.isClosed()) {
    const s = (n.subscriptionObserver = new N(n));
    try {
      const u = r(s);
      if (!h(u)) {
        n.cleanup = f(u.unsubscribe)
          ? function () {
              u.unsubscribe();
            }
          : a(u);
      }
    } catch (error) {
      s.error(error);
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
if (o) {
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
  if (!o) {
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
            i(n, e, t);
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
            i(n, e, t);
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
            i(e, r);
          }
        } catch (error) {
          y(error);
        }
        subscriptionState.clean();
      }
    },
  },
);
if (o) {
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
    subscriber: a(t),
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
s(w);
