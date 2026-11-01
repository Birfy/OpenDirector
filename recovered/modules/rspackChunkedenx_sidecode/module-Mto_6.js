import s from "./module-A_7.js";
import c from "./module-N_6.js";
import u from "./module-p2_6.js";
import f from "./module-J_7.js";
import l from "./module-M_2_6.js";
import h from "./module-vE_6.js";
import p from "./module-d4_6.js";
import v from "./module-HZ_6.js";
import d from "./module-FG_6.js";
import g from "./module-vo_6.js";
import y from "./module-Y_7.js";
import m from "./module-y_2_6.js";
import b from "./module-A2_7.js";
import A from "./module-V0_6.js";
import _w from "./module-Z6_6.js";
import x from "./module-we_7.js";
import E from "./module-qI_6.js";
import S from "./module-FS_6.js";
import O from "./module-nA_6.js";
import R from "./module-b_6.js";
import M from "./module-xl_7.js";
import I from "./module-FK_6.js";
import k from "./module-Qa_7.js";
let n;
let o;
let a;
let i;
const _w_set = _w.set;
const T = "Promise";
const I_CONSTRUCTOR = I.CONSTRUCTOR;
const I_REJECTION_EVENT = I.REJECTION_EVENT;
const I_SUBCLASSING = I.SUBCLASSING;
const P = R.getterFor(T);
const R_set = R.set;
const D = M && M.prototype;
let Promise = M;
let _ = D;
const f_TypeError = f.TypeError;
const f_document = f.document;
const f_process = f.process;
let Y = k.f;
const B = Y;
const z = !!(f_document && f_document.createEvent && f.dispatchEvent);
const X = "unhandledrejection";
const H = (t) => {
  let r;
  return !!(m(t) && y((r = t.then))) && r;
};
const G = (t, r) => {
  let e;
  let n;
  let o;
  const r_value = r.value;
  const i = r.state === 1;
  const s = i ? t.ok : t.fail;
  const t_resolve = t.resolve;
  const t_reject = t.reject;
  const t_domain = t.domain;
  try {
    if (s) {
      if (!i) {
        if (r.rejection === 2) {
          Z(r);
        }
        r.rejection = 1;
      }
      if (s === true) {
        e = r_value;
      } else {
        if (t_domain) {
          t_domain.enter();
        }
        e = s(r_value);
        if (t_domain) {
          t_domain.exit();
          o = true;
        }
      }
      if (e === t.promise) {
        t_reject(f_TypeError("Promise-chain cycle"));
      } else if ((n = H(e))) {
        l(n, e, t_resolve, t_reject);
      } else {
        t_resolve(e);
      }
    } else {
      t_reject(r_value);
    }
  } catch (error) {
    if (t_domain && !o) {
      t_domain.exit();
    }
    t_reject(error);
  }
};
const J = (t, r) => {
  if (!t.notified) {
    t.notified = true;
    x(function () {
      let e;
      for (const n = t.reactions; (e = n.get());) {
        G(e, t);
      }
      t.notified = false;
      if (r && !t.rejection) {
        K(t);
      }
    });
  }
};
const q = (t, promise, reason) => {
  let n;
  let o;
  if (z) {
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
  if (!I_REJECTION_EVENT && (o = f["on" + t])) {
    o(n);
  } else if (t === X) {
    E("Unhandled promise rejection", reason);
  }
};
var K = (t) => {
  l(_w_set, f, function () {
    let r;
    const t_facade = t.facade;
    const t_value = t.value;
    if (
      Q(t) &&
      ((r = S(function () {
        if (u) {
          f_process.emit("unhandledRejection", t_value, t_facade);
        } else {
          q(X, t_facade, t_value);
        }
      })),
      (t.rejection = u || Q(t) ? 2 : 1),
      r.error)
    ) {
      throw r.value;
    }
  });
};
var Q = (t) => t.rejection !== 1 && !t.parent;
var Z = (t) => {
  l(_w_set, f, function () {
    const t_facade = t.facade;
    if (u) {
      f_process.emit("rejectionHandled", t_facade);
    } else {
      q("rejectionhandled", t_facade, t.value);
    }
  });
};
const $ = (t, r, e) =>
  function (n) {
    t(r, n, e);
  };
const tt = function (t, r, e) {
  if (!t.done) {
    t.done = true;
    if (e) {
      t = e;
    }
    t.value = r;
    t.state = 2;
    J(t, true);
  }
};
const tr = function (t, r, e) {
  if (!t.done) {
    t.done = true;
    if (e) {
      t = e;
    }
    try {
      if (t.facade === r) {
        throw f_TypeError("Promise can't be resolved itself");
      }
      const n = H(r);
      if (n) {
        x(function () {
          const e = {
            done: false,
          };
          try {
            l(n, r, $(tr, e, t), $(tt, e, t));
          } catch (error) {
            tt(e, error, t);
          }
        });
      } else {
        t.value = r;
        t.state = 1;
        J(t, false);
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
  I_CONSTRUCTOR &&
  ((_ = (Promise = function (t) {
    b(this, _);
    g(t);
    l(n, this);
    const r = P(this);
    try {
      t($(tr, r), $(tt, r));
    } catch (error) {
      tt(r, error);
    }
  }).prototype),
  ((n = function (t) {
    R_set(this, {
      type: T,
      done: false,
      notified: false,
      parent: false,
      reactions: new O(),
      rejection: false,
      state: 0,
      value: undefined,
    });
  }).prototype = h(_, "then", function (t, r) {
    const e = P(this);
    const n = Y(A(this, Promise));
    e.parent = true;
    n.ok = !y(t) || t;
    n.fail = y(r) && r;
    n.domain = u ? f_process.domain : undefined;
    if (e.state === 0) {
      e.reactions.add(n);
    } else {
      x(function () {
        G(n, e);
      });
    }
    return n.promise;
  })),
  (o = function () {
    const t = new n();
    const r = P(t);
    this.promise = t;
    this.resolve = $(tr, r);
    this.reject = $(tt, r);
  }),
  (k.f = Y =
    function (t) {
      if (t === Promise || t === a) {
        return new o();
      }
      return B(t);
    }),
  !c && y(M) && D !== Object.prototype)
) {
  i = D.then;
  if (!I_SUBCLASSING) {
    h(
      D,
      "then",
      function (t, r) {
        const e = this;
        return new Promise(function (t, r) {
          l(i, e, t, r);
        }).then(t, r);
      },
      {
        unsafe: true,
      },
    );
  }
  try {
    delete D.constructor;
  } catch (t) {}
  if (p) {
    p(D, _);
  }
}
s(
  {
    global: true,
    constructor: true,
    wrap: true,
    forced: I_CONSTRUCTOR,
  },
  {
    Promise,
  },
);
v(Promise, T, false, true);
d(T);
