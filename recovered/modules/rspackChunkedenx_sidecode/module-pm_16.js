import "./module-PC_16.js";
import n from "./module-A_17.js";
import o from "./module-J_17.js";
import i from "./module-M_2_16.js";
import a from "./module-O9_16.js";
import s from "./module-r9_16.js";
import u from "./module-BZO_16.js";
import c from "./module-vE_16.js";
import f from "./module-I_17.js";
import l from "./module-dFV_16.js";
import h from "./module-HZ_16.js";
import v from "./module-L7_16.js";
import p from "./module-b_16.js";
import d from "./module-A2_17.js";
import g from "./module-Y_17.js";
import y from "./module-D_2_16.js";
import m from "./module-WG_2_16.js";
import b from "./module-S9_16.js";
import A from "./module-d_17.js";
import x from "./module-y_2_16.js";
import w from "./module-ng_17.js";
import S from "./module-Za_16.js";
import E from "./module-w_17.js";
import O from "./module-wz_17.js";
import R from "./module-Qn_17.js";
import M from "./module-eXf_16.js";
import I from "./module-lN_16.js";
import k from "./module-ze_17.js";
const T = I("iterator");
const j = "URLSearchParams";
const N = j + "Iterator";
const p_set = p.set;
const getState = p.getterFor(j);
const D = p.getterFor(N);
const L = (t) => {
  if (!s) {
    return o[t];
  }
  const r = Object.getOwnPropertyDescriptor(o, t);
  return r && r.value;
};
const _ = L("fetch");
const U = L("Request");
const V = L("Headers");
const Y = U && U.prototype;
const B = V && V.prototype;
const o_RegExp = o.RegExp;
const o_TypeError = o.TypeError;
const o_decodeURIComponent = o.decodeURIComponent;
const o_encodeURIComponent = o.encodeURIComponent;
const J = a("".charAt);
const K = a([].join);
const q = a([].push);
const H = a("".replace);
const Q = a([].shift);
const Z = a([].splice);
const $ = a("".split);
const tt = a("".slice);
const tr = /\+/g;
const te = [, , , ,];
const tn = function (t) {
  try {
    return o_decodeURIComponent(t);
  } catch (r) {
    return t;
  }
};
const to = (t) => {
  let r;
  let e = H(t, tr, " ");
  let n = 4;
  try {
    return o_decodeURIComponent(e);
  } catch (t) {
    while (n) {
      e = H(
        e,
        te[(r = n--) - 1] ||
          (te[r - 1] = o_RegExp("((?:%[\\da-f]{2}){" + r + "})", "gi")),
        tn,
      );
    }
    return e;
  }
};
const ti = /[!'()~]|%20/g;
const ta = {
  "!": "%21",
  "'": "%27",
  "(": "%28",
  ")": "%29",
  "~": "%7E",
  "%20": "+",
};
const ts = function (t) {
  return ta[t];
};
const tu = (t) => H(o_encodeURIComponent(t), ti, ts);
const tc = v(
  function (t, kind) {
    p_set(this, {
      type: N,
      iterator: O(getState(t).entries),
      kind,
    });
  },
  "Iterator",
  function () {
    const t = D(this);
    const t_kind = t.kind;
    const e = t.iterator.next();
    const e_value = e.value;
    if (!e.done) {
      e.value =
        t_kind === "keys"
          ? e_value.key
          : t_kind === "values"
            ? e_value.value
            : [e_value.key, e_value.value];
    }
    return e;
  },
  true,
);
const tf = function (t) {
  this.entries = [];
  this.url = null;
  if (t !== undefined) {
    if (x(t)) {
      this.parseObject(t);
    } else {
      this.parseQuery(
        typeof t === "string" ? (J(t, 0) === "?" ? tt(t, 1) : t) : w(t),
      );
    }
  }
};
tf.prototype = {
  type: j,
  bindURL: function (t) {
    this.url = t;
    this.update();
  },
  parseObject: function (t) {
    let r;
    let e;
    let n;
    let o;
    let a;
    let s;
    let u;
    const c = R(t);
    if (c) {
      for (e = (r = O(t, c)).next; !(n = i(e, r)).done;) {
        if (
          (s = i((a = (o = O(A(n.value))).next), o)).done ||
          (u = i(a, o)).done ||
          !i(a, o).done
        ) {
          throw o_TypeError("Expected sequence with length 2");
        }
        q(this.entries, {
          key: w(s.value),
          value: w(u.value),
        });
      }
    } else {
      for (const f in t) {
        if (y(t, f)) {
          q(this.entries, {
            key: f,
            value: w(t[f]),
          });
        }
      }
    }
  },
  parseQuery: function (t) {
    if (t) {
      let r;
      let e;
      for (let n = $(t, "&"), o = 0; o < n.length;) {
        if ((r = n[o++]).length) {
          e = $(r, "=");
          q(this.entries, {
            key: to(Q(e)),
            value: to(K(e, "=")),
          });
        }
      }
    }
  },
  serialize: function () {
    let t;
    for (var r = this.entries, e = [], n = 0; n < r.length;) {
      q(e, tu((t = r[n++]).key) + "=" + tu(t.value));
    }
    return K(e, "&");
  },
  update: function () {
    this.entries.length = 0;
    this.parseQuery(this.url.query);
  },
  updateURL: function () {
    if (this.url) {
      this.url.update();
    }
  },
};
const URLSearchParams = function () {
  d(this, tl_prototype);
  const t = arguments.length > 0 ? arguments[0] : undefined;
  const r = p_set(this, new tf(t));
  if (!s) {
    this.size = r.entries.length;
  }
};
var tl_prototype = URLSearchParams.prototype;
l(
  tl_prototype,
  {
    append: function (t, r) {
      const e = getState(this);
      M(arguments.length, 2);
      q(e.entries, {
        key: w(t),
        value: w(r),
      });
      if (!s) {
        this.length++;
      }
      e.updateURL();
    },
    delete: function (t) {
      const r = getState(this);
      const e = M(arguments.length, 1);
      for (
        var n = r.entries,
          o = w(t),
          i = e < 2 ? undefined : arguments[1],
          a = i === undefined ? i : w(i),
          u = 0;
        u < n.length;
      ) {
        const c = n[u];
        if (c.key === o && (a === undefined || c.value === a)) {
          Z(n, u, 1);
          if (a !== undefined) {
            break;
          }
        } else {
          u++;
        }
      }
      if (!s) {
        this.size = n.length;
      }
      r.updateURL();
    },
    get: function (t) {
      const entries = getState(this).entries;
      M(arguments.length, 1);
      const e = w(t);
      for (let n = 0; n < entries.length; n++) {
        if (entries[n].key === e) {
          return entries[n].value;
        }
      }
      return null;
    },
    getAll: function (t) {
      const entries = getState(this).entries;
      M(arguments.length, 1);
      const e = w(t);
      const n = [];
      for (let o = 0; o < entries.length; o++) {
        if (entries[o].key === e) {
          q(n, entries[o].value);
        }
      }
      return n;
    },
    has: function (t) {
      for (
        let r = getState(this).entries,
          e = M(arguments.length, 1),
          n = w(t),
          o = e < 2 ? undefined : arguments[1],
          i = o === undefined ? o : w(o),
          a = 0;
        a < r.length;
      ) {
        const s = r[a++];
        if (s.key === n && (i === undefined || s.value === i)) {
          return true;
        }
      }
      return false;
    },
    set: function (t, r) {
      let e;
      const n = getState(this);
      M(arguments.length, 1);
      for (
        var o = n.entries, i = false, a = w(t), u = w(r), c = 0;
        c < o.length;
        c++
      ) {
        if ((e = o[c]).key === a) {
          if (i) {
            Z(o, c--, 1);
          } else {
            i = true;
            e.value = u;
          }
        }
      }
      if (!i) {
        q(o, {
          key: a,
          value: u,
        });
      }
      if (!s) {
        this.size = o.length;
      }
      n.updateURL();
    },
    sort: function () {
      const t = getState(this);
      k(t.entries, function (t, r) {
        if (t.key > r.key) {
          return 1;
        }
        return -1;
      });
      t.updateURL();
    },
    forEach: function (t) {
      let r;
      for (
        let e = getState(this).entries,
          n = m(t, arguments.length > 1 ? arguments[1] : undefined),
          o = 0;
        o < e.length;
      ) {
        n((r = e[o++]).value, r.key, this);
      }
    },
    keys: function () {
      return new tc(this, "keys");
    },
    values: function () {
      return new tc(this, "values");
    },
    entries: function () {
      return new tc(this, "entries");
    },
  },
  {
    enumerable: true,
  },
);
c(tl_prototype, T, tl_prototype.entries, {
  name: "entries",
});
c(
  tl_prototype,
  "toString",
  function () {
    return getState(this).serialize();
  },
  {
    enumerable: true,
  },
);
if (s) {
  f(tl_prototype, "size", {
    get: function () {
      return getState(this).entries.length;
    },
    configurable: true,
    enumerable: true,
  });
}
h(URLSearchParams, j);
n(
  {
    global: true,
    constructor: true,
    forced: !u,
  },
  {
    URLSearchParams,
  },
);
if (!u && g(V)) {
  const tv = a(B.has);
  const tp = a(B.set);
  const td = (t) => {
    if (x(t)) {
      let r;
      const e = t.body;
      if (b(e) === j) {
        if (!tv((r = t.headers ? new V(t.headers) : new V()), "content-type")) {
          tp(
            r,
            "content-type",
            "application/x-www-form-urlencoded;charset=UTF-8",
          );
        }
        return S(t, {
          body: E(0, w(e)),
          headers: E(0, r),
        });
      }
    }
    return t;
  };
  if (g(_)) {
    n(
      {
        global: true,
        enumerable: true,
        dontCallGetSet: true,
        forced: true,
      },
      {
        fetch: function (t) {
          return _(t, arguments.length > 1 ? td(arguments[1]) : {});
        },
      },
    );
  }
  if (g(U)) {
    const Request = function (t) {
      d(this, Y);
      return new U(t, arguments.length > 1 ? td(arguments[1]) : {});
    };
    Y.constructor = Request;
    Request.prototype = Y;
    n(
      {
        global: true,
        constructor: true,
        dontCallGetSet: true,
        forced: true,
      },
      {
        Request,
      },
    );
  }
}
export default {
  URLSearchParams,
  getState,
};
