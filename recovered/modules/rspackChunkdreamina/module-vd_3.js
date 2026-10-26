import s from "./module-g.js";
import u from "./module-K.js";
import c from "./module-fd_4.js";
import f from "./module-u.js";
import l from "./module-p3.js";
import p from "./module-xX_2.js";
import h from "./module-P.js";
import v from "./module-Ii_2_2.js";
import d from "./module-DP_2.js";
import g from "./module-B.js";
import y from "./module-r.js";
import m from "./module-N.js";
import x from "./module-i9_3.js";
import b from "./module-MV_4.js";
import _w from "./module-u1_2.js";
import A from "./module-zr_2.js";
import E from "./module-AN_4.js";
import j from "./module-wG.js";
import I from "./module-Le.js";
import R from "./module-G_2.js";
import z from "./module-Lu.js";
import O from "./module-SY_3.js";
import S from "./module-W1_2.js";
let n;
let o;
let i;
let a;
const _w_set = _w.set;
const _ = "Promise";
const O_CONSTRUCTOR = O.CONSTRUCTOR;
const O_REJECTION_EVENT = O.REJECTION_EVENT;
const O_SUBCLASSING = O.SUBCLASSING;
const B = R.getterFor(_);
const R_set = R.set;
const N = z && z.prototype;
let Promise = z;
let F = N;
const f_TypeError = f.TypeError;
const f_document = f.document;
const f_process = f.process;
let U = S.f;
const D = U;
const G = !!(f_document && f_document.createEvent && f.dispatchEvent);
const Y = "unhandledrejection";
const W = (e) => {
  let t;
  return !!(m(e) && y((t = e.then))) && t;
};
const H = (e, t) => {
  let r;
  let n;
  let o;
  const t_value = t.value;
  const a = t.state === 1;
  const s = a ? e.ok : e.fail;
  const e_resolve = e.resolve;
  const e_reject = e.reject;
  const e_domain = e.domain;
  try {
    if (s) {
      if (!a) {
        if (t.rejection === 2) {
          Z(t);
        }
        t.rejection = 1;
      }
      if (s === true) {
        r = t_value;
      } else {
        if (e_domain) {
          e_domain.enter();
        }
        r = s(t_value);
        if (e_domain) {
          e_domain.exit();
          o = true;
        }
      }
      if (r === e.promise) {
        e_reject(f_TypeError("Promise-chain cycle"));
      } else if ((n = W(r))) {
        l(n, r, e_resolve, e_reject);
      } else {
        e_resolve(r);
      }
    } else {
      e_reject(t_value);
    }
  } catch (error) {
    if (e_domain && !o) {
      e_domain.exit();
    }
    e_reject(error);
  }
};
const $ = (e, t) => {
  if (!e.notified) {
    e.notified = true;
    A(function () {
      let r;
      for (const n = e.reactions; (r = n.get());) {
        H(r, e);
      }
      e.notified = false;
      if (t && !e.rejection) {
        K(e);
      }
    });
  }
};
const X = (e, promise, reason) => {
  let n;
  let o;
  if (G) {
    n = f_document.createEvent("Event");
    n.promise = promise;
    n.reason = reason;
    n.initEvent(e, false, true);
    f.dispatchEvent(n);
  } else {
    n = {
      promise,
      reason,
    };
  }
  if (!O_REJECTION_EVENT && (o = f["on" + e])) {
    o(n);
  } else if (e === Y) {
    E("Unhandled promise rejection", reason);
  }
};
var K = (e) => {
  l(_w_set, f, function () {
    let t;
    const e_facade = e.facade;
    const e_value = e.value;
    if (
      Q(e) &&
      ((t = j(function () {
        if (c) {
          f_process.emit("unhandledRejection", e_value, e_facade);
        } else {
          X(Y, e_facade, e_value);
        }
      })),
      (e.rejection = c || Q(e) ? 2 : 1),
      t.error)
    ) {
      throw t.value;
    }
  });
};
var Q = (e) => e.rejection !== 1 && !e.parent;
var Z = (e) => {
  l(_w_set, f, function () {
    const e_facade = e.facade;
    if (c) {
      f_process.emit("rejectionHandled", e_facade);
    } else {
      X("rejectionhandled", e_facade, e.value);
    }
  });
};
const J = (e, t, r) =>
  function (n) {
    e(t, n, r);
  };
const ee = function (e, t, r) {
  if (!e.done) {
    e.done = true;
    if (r) {
      e = r;
    }
    e.value = t;
    e.state = 2;
    $(e, true);
  }
};
const et = function (e, t, r) {
  if (!e.done) {
    e.done = true;
    if (r) {
      e = r;
    }
    try {
      if (e.facade === t) {
        throw f_TypeError("Promise can't be resolved itself");
      }
      const n = W(t);
      if (n) {
        A(function () {
          const r = {
            done: false,
          };
          try {
            l(n, t, J(et, r, e), J(ee, r, e));
          } catch (error) {
            ee(r, error, e);
          }
        });
      } else {
        e.value = t;
        e.state = 1;
        $(e, false);
      }
    } catch (error) {
      ee(
        {
          done: false,
        },
        error,
        e,
      );
    }
  }
};
if (
  O_CONSTRUCTOR &&
  ((F = (Promise = function (e) {
    x(this, F);
    g(e);
    l(n, this);
    const t = B(this);
    try {
      e(J(et, t), J(ee, t));
    } catch (error) {
      ee(t, error);
    }
  }).prototype),
  ((n = function (e) {
    R_set(this, {
      type: _,
      done: false,
      notified: false,
      parent: false,
      reactions: new I(),
      rejection: false,
      state: 0,
      value: undefined,
    });
  }).prototype = p(F, "then", function (e, t) {
    const r = B(this);
    const n = U(b(this, Promise));
    r.parent = true;
    n.ok = !y(e) || e;
    n.fail = y(t) && t;
    n.domain = c ? f_process.domain : undefined;
    if (r.state === 0) {
      r.reactions.add(n);
    } else {
      A(function () {
        H(n, r);
      });
    }
    return n.promise;
  })),
  (o = function () {
    const e = new n();
    const t = B(e);
    this.promise = e;
    this.resolve = J(et, t);
    this.reject = J(ee, t);
  }),
  (S.f = U =
    function (e) {
      if (e === Promise || e === i) {
        return new o();
      }
      return D(e);
    }),
  !u && y(z) && N !== Object.prototype)
) {
  a = N.then;
  if (!O_SUBCLASSING) {
    p(
      N,
      "then",
      function (e, t) {
        const r = this;
        return new Promise(function (e, t) {
          l(a, r, e, t);
        }).then(e, t);
      },
      {
        unsafe: true,
      },
    );
  }
  try {
    delete N.constructor;
  } catch (e) {}
  if (h) {
    h(N, F);
  }
}
s(
  {
    global: true,
    constructor: true,
    wrap: true,
    forced: O_CONSTRUCTOR,
  },
  {
    Promise,
  },
);
v(Promise, _, false, true);
d(_);
