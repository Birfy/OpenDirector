import s from "./module-A_24.js";
import c from "./module-N_23.js";
import u from "./module-p2_23.js";
import f from "./module-J_24.js";
import l from "./module-M_2_23.js";
import h from "./module-vE_23.js";
import v from "./module-d4_23.js";
import p from "./module-HZ_23.js";
import d from "./module-FG_23.js";
import g from "./module-vo_23.js";
import y from "./module-Y_24.js";
import b from "./module-y_2_23.js";
import m from "./module-A2_24.js";
import A from "./module-V0_23.js";
import _x from "./module-Z6_23.js";
import w from "./module-we_24.js";
import S from "./module-qI_23.js";
import E from "./module-FS_23.js";
import O from "./module-nA_23.js";
import R from "./module-b_23.js";
import M from "./module-xl_24.js";
import I from "./module-FK_23.js";
import k from "./module-Qa_24.js";
let n;
let o;
let i;
let a;
const _x_set = _x.set;
const j = "Promise";
const I_CONSTRUCTOR = I.CONSTRUCTOR;
const I_REJECTION_EVENT = I.REJECTION_EVENT;
const I_SUBCLASSING = I.SUBCLASSING;
const F = R.getterFor(j);
const R_set = R.set;
const C = M && M.prototype;
let Promise = M;
let U = C;
const f_TypeError = f.TypeError;
const f_document = f.document;
const f_process = f.process;
let B = k.f;
const z = B;
const W = !!(f_document && f_document.createEvent && f.dispatchEvent);
const X = "unhandledrejection";
const G = (t) => {
  let r;
  return !!(b(t) && y((r = t.then))) && r;
};
const J = (t, r) => {
  let e;
  let n;
  let o;
  const r_value = r.value;
  const a = r.state === 1;
  const s = a ? t.ok : t.fail;
  const t_resolve = t.resolve;
  const t_reject = t.reject;
  const t_domain = t.domain;
  try {
    if (s) {
      if (!a) {
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
      } else if ((n = G(e))) {
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
const q = (t, r) => {
  if (!t.notified) {
    t.notified = true;
    w(function () {
      let e;
      for (const n = t.reactions; (e = n.get());) {
        J(e, t);
      }
      t.notified = false;
      if (r && !t.rejection) {
        K(t);
      }
    });
  }
};
const H = (t, promise, reason) => {
  let n;
  let o;
  if (W) {
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
    S("Unhandled promise rejection", reason);
  }
};
var K = (t) => {
  l(_x_set, f, function () {
    let r;
    const t_facade = t.facade;
    const t_value = t.value;
    if (
      Q(t) &&
      ((r = E(function () {
        if (u) {
          f_process.emit("unhandledRejection", t_value, t_facade);
        } else {
          H(X, t_facade, t_value);
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
  l(_x_set, f, function () {
    const t_facade = t.facade;
    if (u) {
      f_process.emit("rejectionHandled", t_facade);
    } else {
      H("rejectionhandled", t_facade, t.value);
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
    q(t, true);
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
      const n = G(r);
      if (n) {
        w(function () {
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
        q(t, false);
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
  ((U = (Promise = function (t) {
    m(this, U);
    g(t);
    l(n, this);
    const r = F(this);
    try {
      t($(tr, r), $(tt, r));
    } catch (error) {
      tt(r, error);
    }
  }).prototype),
  ((n = function (t) {
    R_set(this, {
      type: j,
      done: false,
      notified: false,
      parent: false,
      reactions: new O(),
      rejection: false,
      state: 0,
      value: undefined,
    });
  }).prototype = h(U, "then", function (t, r) {
    const e = F(this);
    const n = B(A(this, Promise));
    e.parent = true;
    n.ok = !y(t) || t;
    n.fail = y(r) && r;
    n.domain = u ? f_process.domain : undefined;
    if (e.state === 0) {
      e.reactions.add(n);
    } else {
      w(function () {
        J(n, e);
      });
    }
    return n.promise;
  })),
  (o = function () {
    const t = new n();
    const r = F(t);
    this.promise = t;
    this.resolve = $(tr, r);
    this.reject = $(tt, r);
  }),
  (k.f = B =
    function (t) {
      if (t === Promise || t === i) {
        return new o();
      }
      return z(t);
    }),
  !c && y(M) && C !== Object.prototype)
) {
  a = C.then;
  if (!I_SUBCLASSING) {
    h(
      C,
      "then",
      function (t, r) {
        const e = this;
        return new Promise(function (t, r) {
          l(a, e, t, r);
        }).then(t, r);
      },
      {
        unsafe: true,
      },
    );
  }
  try {
    delete C.constructor;
  } catch (t) {}
  if (v) {
    v(C, U);
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
p(Promise, j, false, true);
d(j);
