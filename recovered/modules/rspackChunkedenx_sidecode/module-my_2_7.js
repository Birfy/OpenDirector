import n from "./module-A_8.js";
import o from "./module-M_2_7.js";
import i from "./module-r9_7.js";
import a from "./module-FG_7.js";
import s from "./module-vo_7.js";
import u from "./module-d_8.js";
import c from "./module-A2_8.js";
import f from "./module-Y_8.js";
import l from "./module-Mi_7.js";
import h from "./module-y_2_7.js";
import v from "./module-C_8.js";
import p from "./module-vE_7.js";
import d from "./module-dFV_7.js";
import g from "./module-I_8.js";
import y from "./module-qI_7.js";
import m from "./module-lN_7.js";
import b from "./module-b_7.js";
import forced from "./module-dy_9.js";
const w = m("observable");
const x = "Observable";
const E = "Subscription";
const S = "SubscriptionObserver";
const b_getterFor = b.getterFor;
const b_set = b.set;
const M = b_getterFor(x);
const I = b_getterFor(E);
const k = b_getterFor(S);
const T = function (r) {
  this.observer = u(r);
  this.cleanup = undefined;
  this.subscriptionObserver = undefined;
};
T.prototype = {
  type: E,
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
  const n = b_set(this, new T(r));
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
  b_set(this, {
    type: S,
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
  c(this, P_prototype);
  b_set(this, {
    type: x,
    subscriber: s(r),
  });
};
var P_prototype = Observable.prototype;
d(P_prototype, {
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
p(P_prototype, w, function () {
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
a(x);
