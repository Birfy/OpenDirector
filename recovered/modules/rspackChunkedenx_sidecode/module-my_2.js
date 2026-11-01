import n from "./module-A.js";
import o from "./module-M_2.js";
import i from "./module-r9.js";
import a from "./module-FG.js";
import s from "./module-vo.js";
import u from "./module-d.js";
import c from "./module-A2.js";
import f from "./module-Y.js";
import h from "./module-Mi.js";
import l from "./module-y_2.js";
import v from "./module-C.js";
import p from "./module-vE.js";
import d from "./module-dFV.js";
import g from "./module-I.js";
import y from "./module-qI.js";
import b from "./module-lN.js";
import m from "./module-b.js";
import forced from "./module-dy.js";
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
