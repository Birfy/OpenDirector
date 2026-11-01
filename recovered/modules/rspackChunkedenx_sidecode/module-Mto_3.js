import a from "./module-A_4.js";
import u from "./module-N_3.js";
import c from "./module-p2_3.js";
import f from "./module-J_4.js";
import h from "./module-M_2_3.js";
import l from "./module-vE_3.js";
import v from "./module-d4_3.js";
import p from "./module-HZ_3.js";
import d from "./module-FG_3.js";
import g from "./module-vo_3.js";
import y from "./module-Y_4.js";
import b from "./module-y_2_3.js";
import m from "./module-A2_4.js";
import A from "./module-V0_3.js";
import _x from "./module-Z6_3.js";
import w from "./module-we_4.js";
import S from "./module-qI_3.js";
import E from "./module-FS_3.js";
import O from "./module-nA_3.js";
import R from "./module-b_3.js";
import M from "./module-xl_4.js";
import I from "./module-FK_3.js";
import k from "./module-Qa_4.js";
let n;
let i;
let o;
let s;
const _x_set = _x.set;
const T = "Promise";
const I_CONSTRUCTOR = I.CONSTRUCTOR;
const I_REJECTION_EVENT = I.REJECTION_EVENT;
const I_SUBCLASSING = I.SUBCLASSING;
const P = R.getterFor(T);
const R_set = R.set;
const C = M && M.prototype;
let Promise = M;
let U = C;
const f_TypeError = f.TypeError;
const f_document = f.document;
const f_process = f.process;
let X = k.f;
const W = X;
const G = !!(f_document && f_document.createEvent && f.dispatchEvent);
const _ = "unhandledrejection";
const z = (t) => {
  let r;
  return !!(b(t) && y((r = t.then))) && r;
};
const J = (t, r) => {
  let e;
  let n;
  let i;
  const r_value = r.value;
  const s = r.state === 1;
  const a = s ? t.ok : t.fail;
  const t_resolve = t.resolve;
  const t_reject = t.reject;
  const t_domain = t.domain;
  try {
    if (a) {
      if (!s) {
        if (r.rejection === 2) {
          Z(r);
        }
        r.rejection = 1;
      }
      if (a === true) {
        e = r_value;
      } else {
        if (t_domain) {
          t_domain.enter();
        }
        e = a(r_value);
        if (t_domain) {
          t_domain.exit();
          i = true;
        }
      }
      if (e === t.promise) {
        t_reject(f_TypeError("Promise-chain cycle"));
      } else if ((n = z(e))) {
        h(n, e, t_resolve, t_reject);
      } else {
        t_resolve(e);
      }
    } else {
      t_reject(r_value);
    }
  } catch (error) {
    if (t_domain && !i) {
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
        H(t);
      }
    });
  }
};
const K = (t, promise, reason) => {
  let n;
  let i;
  if (G) {
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
  if (!I_REJECTION_EVENT && (i = f["on" + t])) {
    i(n);
  } else if (t === _) {
    S("Unhandled promise rejection", reason);
  }
};
var H = (t) => {
  h(_x_set, f, function () {
    let r;
    const t_facade = t.facade;
    const t_value = t.value;
    if (
      Q(t) &&
      ((r = E(function () {
        if (c) {
          f_process.emit("unhandledRejection", t_value, t_facade);
        } else {
          K(_, t_facade, t_value);
        }
      })),
      (t.rejection = c || Q(t) ? 2 : 1),
      r.error)
    ) {
      throw r.value;
    }
  });
};
var Q = (t) => t.rejection !== 1 && !t.parent;
var Z = (t) => {
  h(_x_set, f, function () {
    const t_facade = t.facade;
    if (c) {
      f_process.emit("rejectionHandled", t_facade);
    } else {
      K("rejectionhandled", t_facade, t.value);
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
      const n = z(r);
      if (n) {
        w(function () {
          const e = {
            done: false,
          };
          try {
            h(n, r, $(tr, e, t), $(tt, e, t));
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
    h(n, this);
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
  }).prototype = l(U, "then", function (t, r) {
    const e = P(this);
    const n = X(A(this, Promise));
    e.parent = true;
    n.ok = !y(t) || t;
    n.fail = y(r) && r;
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
  (i = function () {
    const t = new n();
    const r = P(t);
    this.promise = t;
    this.resolve = $(tr, r);
    this.reject = $(tt, r);
  }),
  (k.f = X =
    function (t) {
      if (t === Promise || t === o) {
        return new i();
      }
      return W(t);
    }),
  !u && y(M) && C !== Object.prototype)
) {
  s = C.then;
  if (!I_SUBCLASSING) {
    l(
      C,
      "then",
      function (t, r) {
        const e = this;
        return new Promise(function (t, r) {
          h(s, e, t, r);
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
a(
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
