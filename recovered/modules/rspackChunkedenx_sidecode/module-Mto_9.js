import s from "./module-A_10.js";
import u from "./module-N_9.js";
import c from "./module-p2_9.js";
import f from "./module-J_10.js";
import l from "./module-M_2_9.js";
import h from "./module-vE_9.js";
import v from "./module-d4_9.js";
import d from "./module-HZ_9.js";
import p from "./module-FG_9.js";
import g from "./module-vo_9.js";
import y from "./module-Y_10.js";
import m from "./module-y_2_9.js";
import b from "./module-A2_10.js";
import w from "./module-V0_9.js";
import _A from "./module-Z6_9.js";
import x from "./module-we_10.js";
import E from "./module-qI_9.js";
import S from "./module-FS_9.js";
import O from "./module-nA_9.js";
import _ from "./module-b_9.js";
import R from "./module-xl_10.js";
import M from "./module-FK_9.js";
import I from "./module-Qa_10.js";
let n;
let o;
let i;
let a;
const _A_set = _A.set;
const T = "Promise";
const M_CONSTRUCTOR = M.CONSTRUCTOR;
const M_REJECTION_EVENT = M.REJECTION_EVENT;
const M_SUBCLASSING = M.SUBCLASSING;
const P = _.getterFor(T);
const __set = _.set;
const F = R && R.prototype;
let Promise = R;
let L = F;
const f_TypeError = f.TypeError;
const f_document = f.document;
const f_process = f.process;
let Y = I.f;
const W = Y;
const X = !!(f_document && f_document.createEvent && f.dispatchEvent);
const G = "unhandledrejection";
const z = (t) => {
  let e;
  return !!(m(t) && y((e = t.then))) && e;
};
const J = (t, e) => {
  let r;
  let n;
  let o;
  const e_value = e.value;
  const a = e.state === 1;
  const s = a ? t.ok : t.fail;
  const t_resolve = t.resolve;
  const t_reject = t.reject;
  const t_domain = t.domain;
  try {
    if (s) {
      if (!a) {
        if (e.rejection === 2) {
          Z(e);
        }
        e.rejection = 1;
      }
      if (s === true) {
        r = e_value;
      } else {
        if (t_domain) {
          t_domain.enter();
        }
        r = s(e_value);
        if (t_domain) {
          t_domain.exit();
          o = true;
        }
      }
      if (r === t.promise) {
        t_reject(f_TypeError("Promise-chain cycle"));
      } else if ((n = z(r))) {
        l(n, r, t_resolve, t_reject);
      } else {
        t_resolve(r);
      }
    } else {
      t_reject(e_value);
    }
  } catch (error) {
    if (t_domain && !o) {
      t_domain.exit();
    }
    t_reject(error);
  }
};
const H = (t, e) => {
  if (!t.notified) {
    t.notified = true;
    x(function () {
      let r;
      for (const n = t.reactions; (r = n.get());) {
        J(r, t);
      }
      t.notified = false;
      if (e && !t.rejection) {
        K(t);
      }
    });
  }
};
const q = (t, promise, reason) => {
  let n;
  let o;
  if (X) {
    n = f_document.createEvent("Event");
    n.promise = promise;
    n.reason = reason;
    n.initEvent(t, false, true);
    f.dispatchEvent(n);
  } else {
    n = {
      promise,
      reason,
    };
  }
  if (!M_REJECTION_EVENT && (o = f["on" + t])) {
    o(n);
  } else if (t === G) {
    E("Unhandled promise rejection", reason);
  }
};
var K = (t) => {
  l(_A_set, f, function () {
    let e;
    const t_facade = t.facade;
    const t_value = t.value;
    if (
      Q(t) &&
      ((e = S(function () {
        if (c) {
          f_process.emit("unhandledRejection", t_value, t_facade);
        } else {
          q(G, t_facade, t_value);
        }
      })),
      (t.rejection = c || Q(t) ? 2 : 1),
      e.error)
    ) {
      throw e.value;
    }
  });
};
var Q = (t) => t.rejection !== 1 && !t.parent;
var Z = (t) => {
  l(_A_set, f, function () {
    const t_facade = t.facade;
    if (c) {
      f_process.emit("rejectionHandled", t_facade);
    } else {
      q("rejectionhandled", t_facade, t.value);
    }
  });
};
const $ = (t, e, r) =>
  function (n) {
    t(e, n, r);
  };
const tt = function (t, e, r) {
  if (!t.done) {
    t.done = true;
    if (r) {
      t = r;
    }
    t.value = e;
    t.state = 2;
    H(t, true);
  }
};
const te = function (t, e, r) {
  if (!t.done) {
    t.done = true;
    if (r) {
      t = r;
    }
    try {
      if (t.facade === e) {
        throw f_TypeError("Promise can't be resolved itself");
      }
      const n = z(e);
      if (n) {
        x(function () {
          const r = {
            done: false,
          };
          try {
            l(n, e, $(te, r, t), $(tt, r, t));
          } catch (error) {
            tt(r, error, t);
          }
        });
      } else {
        t.value = e;
        t.state = 1;
        H(t, false);
      }
    } catch (error) {
      tt(
        {
          done: false,
        },
        error,
        t,
      );
    }
  }
};
if (
  M_CONSTRUCTOR &&
  ((L = (Promise = function (t) {
    b(this, L);
    g(t);
    l(n, this);
    const e = P(this);
    try {
      t($(te, e), $(tt, e));
    } catch (error) {
      tt(e, error);
    }
  }).prototype),
  ((n = function (t) {
    __set(this, {
      type: T,
      done: false,
      notified: false,
      parent: false,
      reactions: new O(),
      rejection: false,
      state: 0,
      value: undefined,
    });
  }).prototype = h(L, "then", function (t, e) {
    const r = P(this);
    const n = Y(w(this, Promise));
    r.parent = true;
    n.ok = !y(t) || t;
    n.fail = y(e) && e;
    n.domain = c ? f_process.domain : undefined;
    if (r.state === 0) {
      r.reactions.add(n);
    } else {
      x(function () {
        J(n, r);
      });
    }
    return n.promise;
  })),
  (o = function () {
    const t = new n();
    const e = P(t);
    this.promise = t;
    this.resolve = $(te, e);
    this.reject = $(tt, e);
  }),
  (I.f = Y =
    function (t) {
      if (t === Promise || t === i) {
        return new o();
      }
      return W(t);
    }),
  !u && y(R) && F !== Object.prototype)
) {
  a = F.then;
  if (!M_SUBCLASSING) {
    h(
      F,
      "then",
      function (t, e) {
        const r = this;
        return new Promise(function (t, e) {
          l(a, r, t, e);
        }).then(t, e);
      },
      {
        unsafe: true,
      },
    );
  }
  try {
    delete F.constructor;
  } catch (t) {}
  if (v) {
    v(F, L);
  }
}
s(
  {
    global: true,
    constructor: true,
    wrap: true,
    forced: M_CONSTRUCTOR,
  },
  {
    Promise,
  },
);
d(Promise, T, false, true);
p(T);
