import s from "./module-A_19.js";
import u from "./module-N_18.js";
import c from "./module-p2_18.js";
import f from "./module-J_19.js";
import h from "./module-M_2_18.js";
import l from "./module-vE_18.js";
import v from "./module-d4_18.js";
import p from "./module-HZ_18.js";
import d from "./module-FG_18.js";
import g from "./module-vo_18.js";
import y from "./module-Y_19.js";
import b from "./module-y_2_18.js";
import m from "./module-A2_19.js";
import A from "./module-V0_18.js";
import _x from "./module-Z6_18.js";
import w from "./module-we_19.js";
import S from "./module-qI_18.js";
import E from "./module-FS_18.js";
import O from "./module-nA_18.js";
import R from "./module-b_18.js";
import M from "./module-xl_19.js";
import I from "./module-FK_18.js";
import k from "./module-Qa_19.js";
let n;
let o;
let i;
let a;
const _x_set = _x.set;
const T = "Promise";
const I_CONSTRUCTOR = I.CONSTRUCTOR;
const I_REJECTION_EVENT = I.REJECTION_EVENT;
const I_SUBCLASSING = I.SUBCLASSING;
const P = R.getterFor(T);
const R_set = R.set;
const D = M && M.prototype;
let Promise = M;
let U = D;
const f_TypeError = f.TypeError;
const f_document = f.document;
const f_process = f.process;
let X = k.f;
const W = X;
const G = !!(f_document && f_document.createEvent && f.dispatchEvent);
const _ = "unhandledrejection";
const z = (r) => {
  let t;
  return !!(b(r) && y((t = r.then))) && t;
};
const J = (r, t) => {
  let e;
  let n;
  let o;
  const t_value = t.value;
  const a = t.state === 1;
  const s = a ? r.ok : r.fail;
  const r_resolve = r.resolve;
  const r_reject = r.reject;
  const r_domain = r.domain;
  try {
    if (s) {
      if (!a) {
        if (t.rejection === 2) {
          Z(t);
        }
        t.rejection = 1;
      }
      if (s === true) {
        e = t_value;
      } else {
        if (r_domain) {
          r_domain.enter();
        }
        e = s(t_value);
        if (r_domain) {
          r_domain.exit();
          o = true;
        }
      }
      if (e === r.promise) {
        r_reject(f_TypeError("Promise-chain cycle"));
      } else if ((n = z(e))) {
        h(n, e, r_resolve, r_reject);
      } else {
        r_resolve(e);
      }
    } else {
      r_reject(t_value);
    }
  } catch (error) {
    if (r_domain && !o) {
      r_domain.exit();
    }
    r_reject(error);
  }
};
const q = (r, t) => {
  if (!r.notified) {
    r.notified = true;
    w(function () {
      let e;
      for (const n = r.reactions; (e = n.get());) {
        J(e, r);
      }
      r.notified = false;
      if (t && !r.rejection) {
        H(r);
      }
    });
  }
};
const K = (r, promise, reason) => {
  let n;
  let o;
  if (G) {
    n = f_document.createEvent("Event");
    n.promise = promise;
    n.reason = reason;
    n.initEvent(r, false, true);
    f.dispatchEvent(n);
  } else {
    n = {
      promise,
      reason,
    };
  }
  if (!I_REJECTION_EVENT && (o = f["on" + r])) {
    o(n);
  } else if (r === _) {
    S("Unhandled promise rejection", reason);
  }
};
var H = (r) => {
  h(_x_set, f, function () {
    let t;
    const r_facade = r.facade;
    const r_value = r.value;
    if (
      Q(r) &&
      ((t = E(function () {
        if (c) {
          f_process.emit("unhandledRejection", r_value, r_facade);
        } else {
          K(_, r_facade, r_value);
        }
      })),
      (r.rejection = c || Q(r) ? 2 : 1),
      t.error)
    ) {
      throw t.value;
    }
  });
};
var Q = (r) => r.rejection !== 1 && !r.parent;
var Z = (r) => {
  h(_x_set, f, function () {
    const r_facade = r.facade;
    if (c) {
      f_process.emit("rejectionHandled", r_facade);
    } else {
      K("rejectionhandled", r_facade, r.value);
    }
  });
};
const $ = (r, t, e) =>
  function (n) {
    r(t, n, e);
  };
const rr = function (r, t, e) {
  if (!r.done) {
    r.done = true;
    if (e) {
      r = e;
    }
    r.value = t;
    r.state = 2;
    q(r, true);
  }
};
const rt = function (r, t, e) {
  if (!r.done) {
    r.done = true;
    if (e) {
      r = e;
    }
    try {
      if (r.facade === t) {
        throw f_TypeError("Promise can't be resolved itself");
      }
      const n = z(t);
      if (n) {
        w(function () {
          const e = {
            done: false,
          };
          try {
            h(n, t, $(rt, e, r), $(rr, e, r));
          } catch (error) {
            rr(e, error, r);
          }
        });
      } else {
        r.value = t;
        r.state = 1;
        q(r, false);
      }
    } catch (error) {
      rr(
        {
          done: false,
        },
        error,
        r,
      );
    }
  }
};
if (
  I_CONSTRUCTOR &&
  ((U = (Promise = function (r) {
    m(this, U);
    g(r);
    h(n, this);
    const t = P(this);
    try {
      r($(rt, t), $(rr, t));
    } catch (error) {
      rr(t, error);
    }
  }).prototype),
  ((n = function (r) {
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
  }).prototype = l(U, "then", function (r, t) {
    const e = P(this);
    const n = X(A(this, Promise));
    e.parent = true;
    n.ok = !y(r) || r;
    n.fail = y(t) && t;
    n.domain = c ? f_process.domain : undefined;
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
    const r = new n();
    const t = P(r);
    this.promise = r;
    this.resolve = $(rt, t);
    this.reject = $(rr, t);
  }),
  (k.f = X =
    function (r) {
      if (r === Promise || r === i) {
        return new o();
      }
      return W(r);
    }),
  !u && y(M) && D !== Object.prototype)
) {
  a = D.then;
  if (!I_SUBCLASSING) {
    l(
      D,
      "then",
      function (r, t) {
        const e = this;
        return new Promise(function (r, t) {
          h(a, e, r, t);
        }).then(r, t);
      },
      {
        unsafe: true,
      },
    );
  }
  try {
    delete D.constructor;
  } catch (r) {}
  if (v) {
    v(D, U);
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
p(Promise, T, false, true);
d(T);
