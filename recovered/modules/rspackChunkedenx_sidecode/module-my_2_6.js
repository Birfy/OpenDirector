import n from "./module-A_7.js";
import o from "./module-M_2_6.js";
import a from "./module-r9_6.js";
import i from "./module-FG_6.js";
import s from "./module-vo_6.js";
import c from "./module-d_7.js";
import u from "./module-A2_7.js";
import f from "./module-Y_7.js";
import l from "./module-Mi_6.js";
import h from "./module-y_2_6.js";
import p from "./module-C_7.js";
import v from "./module-vE_6.js";
import d from "./module-dFV_6.js";
import g from "./module-I_7.js";
import y from "./module-qI_6.js";
import m from "./module-lN_6.js";
import b from "./module-b_6.js";
import forced from "./module-dy_8.js";
const w = m("observable");
const x = "Observable";
const E = "Subscription";
const S = "SubscriptionObserver";
const b_getterFor = b.getterFor;
const b_set = b.set;
const M = b_getterFor(x);
const I = b_getterFor(E);
const k = b_getterFor(S);
const T = function (t) {
  this.observer = c(t);
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
    if (!a) {
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
  const n = b_set(this, new T(t));
  if (!a) {
    this.closed = false;
  }
  try {
    if ((e = p(t, "start"))) {
      o(e, t, this);
    }
  } catch (error) {
    y(error);
  }
  if (!n.isClosed()) {
    const i = (n.subscriptionObserver = new F(n));
    try {
      const c = r(i);
      if (!l(c)) {
        n.cleanup = f(c.unsubscribe)
          ? function () {
              c.unsubscribe();
            }
          : s(c);
      }
    } catch (error) {
      i.error(error);
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
if (a) {
  g(j.prototype, "closed", {
    configurable: true,
    get: function () {
      return I(this).isClosed();
    },
  });
}
var F = function (subscriptionState) {
  b_set(this, {
    type: S,
    subscriptionState,
  });
  if (!a) {
    this.closed = false;
  }
};
F.prototype = d(
  {},
  {
    next: function (t) {
      const subscriptionState = k(this).subscriptionState;
      if (!subscriptionState.isClosed()) {
        const e = subscriptionState.observer;
        try {
          const n = p(e, "next");
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
          const n = p(e, "error");
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
          const e = p(r, "complete");
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
if (a) {
  g(F.prototype, "closed", {
    configurable: true,
    get: function () {
      return k(this).subscriptionState.isClosed();
    },
  });
}
const Observable = function (t) {
  u(this, N_prototype);
  b_set(this, {
    type: x,
    subscriber: s(t),
  });
};
var N_prototype = Observable.prototype;
d(N_prototype, {
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
v(N_prototype, w, function () {
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
i(x);
