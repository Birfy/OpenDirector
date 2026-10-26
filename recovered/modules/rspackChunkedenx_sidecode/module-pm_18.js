import "./module-PC_18.js";
import n from "./module-A_19.js";
import o from "./module-J_19.js";
import i from "./module-M_2_18.js";
import a from "./module-O9_18.js";
import s from "./module-r9_18.js";
import u from "./module-BZO_18.js";
import c from "./module-vE_18.js";
import f from "./module-I_19.js";
import h from "./module-dFV_18.js";
import l from "./module-HZ_18.js";
import v from "./module-L7_18.js";
import p from "./module-b_18.js";
import d from "./module-A2_19.js";
import g from "./module-Y_19.js";
import y from "./module-D_2_18.js";
import b from "./module-WG_2_18.js";
import m from "./module-S9_18.js";
import A from "./module-d_19.js";
import x from "./module-y_2_18.js";
import w from "./module-ng_19.js";
import S from "./module-Za_18.js";
import E from "./module-w_19.js";
import O from "./module-wz_19.js";
import R from "./module-Qn_19.js";
import M from "./module-eXf_18.js";
import I from "./module-lN_18.js";
import k from "./module-ze_19.js";
const T = I("iterator");
const j = "URLSearchParams";
const N = j + "Iterator";
const p_set = p.set;
const getState = p.getterFor(j);
const C = p.getterFor(N);
const L = (r) => {
  if (!s) {
    return o[r];
  }
  const t = Object.getOwnPropertyDescriptor(o, r);
  return t && t.value;
};
const U = L("fetch");
const V = L("Request");
const Y = L("Headers");
const B = V && V.prototype;
const X = Y && Y.prototype;
const o_RegExp = o.RegExp;
const o_TypeError = o.TypeError;
const o_decodeURIComponent = o.decodeURIComponent;
const o_encodeURIComponent = o.encodeURIComponent;
const J = a("".charAt);
const q = a([].join);
const K = a([].push);
const H = a("".replace);
const Q = a([].shift);
const Z = a([].splice);
const $ = a("".split);
const rr = a("".slice);
const rt = /\+/g;
const re = [, , , ,];
const rn = function (r) {
  try {
    return o_decodeURIComponent(r);
  } catch (t) {
    return r;
  }
};
const ro = (r) => {
  let t;
  let e = H(r, rt, " ");
  let n = 4;
  try {
    return o_decodeURIComponent(e);
  } catch (r) {
    while (n) {
      e = H(
        e,
        re[(t = n--) - 1] ||
          (re[t - 1] = o_RegExp("((?:%[\\da-f]{2}){" + t + "})", "gi")),
        rn,
      );
    }
    return e;
  }
};
const ri = /[!'()~]|%20/g;
const ra = {
  "!": "%21",
  "'": "%27",
  "(": "%28",
  ")": "%29",
  "~": "%7E",
  "%20": "+",
};
const rs = function (r) {
  return ra[r];
};
const ru = (r) => H(o_encodeURIComponent(r), ri, rs);
const rc = v(
  function (r, kind) {
    p_set(this, {
      type: N,
      iterator: O(getState(r).entries),
      kind,
    });
  },
  "Iterator",
  function () {
    const r = C(this);
    const r_kind = r.kind;
    const e = r.iterator.next();
    const e_value = e.value;
    if (!e.done) {
      e.value =
        r_kind === "keys"
          ? e_value.key
          : r_kind === "values"
            ? e_value.value
            : [e_value.key, e_value.value];
    }
    return e;
  },
  true,
);
const rf = function (r) {
  this.entries = [];
  this.url = null;
  if (r !== undefined) {
    if (x(r)) {
      this.parseObject(r);
    } else {
      this.parseQuery(
        typeof r === "string" ? (J(r, 0) === "?" ? rr(r, 1) : r) : w(r),
      );
    }
  }
};
rf.prototype = {
  type: j,
  bindURL: function (r) {
    this.url = r;
    this.update();
  },
  parseObject: function (r) {
    let t;
    let e;
    let n;
    let o;
    let a;
    let s;
    let u;
    const c = R(r);
    if (c) {
      for (e = (t = O(r, c)).next; !(n = i(e, t)).done;) {
        if (
          (s = i((a = (o = O(A(n.value))).next), o)).done ||
          (u = i(a, o)).done ||
          !i(a, o).done
        ) {
          throw o_TypeError("Expected sequence with length 2");
        }
        K(this.entries, {
          key: w(s.value),
          value: w(u.value),
        });
      }
    } else {
      for (const f in r) {
        if (y(r, f)) {
          K(this.entries, {
            key: f,
            value: w(r[f]),
          });
        }
      }
    }
  },
  parseQuery: function (r) {
    if (r) {
      let t;
      let e;
      for (let n = $(r, "&"), o = 0; o < n.length;) {
        if ((t = n[o++]).length) {
          e = $(t, "=");
          K(this.entries, {
            key: ro(Q(e)),
            value: ro(q(e, "=")),
          });
        }
      }
    }
  },
  serialize: function () {
    let r;
    for (var t = this.entries, e = [], n = 0; n < t.length;) {
      K(e, ru((r = t[n++]).key) + "=" + ru(r.value));
    }
    return q(e, "&");
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
  d(this, rh_prototype);
  const r = arguments.length > 0 ? arguments[0] : undefined;
  const t = p_set(this, new rf(r));
  if (!s) {
    this.size = t.entries.length;
  }
};
var rh_prototype = URLSearchParams.prototype;
h(
  rh_prototype,
  {
    append: function (r, t) {
      const e = getState(this);
      M(arguments.length, 2);
      K(e.entries, {
        key: w(r),
        value: w(t),
      });
      if (!s) {
        this.length++;
      }
      e.updateURL();
    },
    delete: function (r) {
      const t = getState(this);
      const e = M(arguments.length, 1);
      for (
        var n = t.entries,
          o = w(r),
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
      t.updateURL();
    },
    get: function (r) {
      const entries = getState(this).entries;
      M(arguments.length, 1);
      const e = w(r);
      for (let n = 0; n < entries.length; n++) {
        if (entries[n].key === e) {
          return entries[n].value;
        }
      }
      return null;
    },
    getAll: function (r) {
      const entries = getState(this).entries;
      M(arguments.length, 1);
      const e = w(r);
      const n = [];
      for (let o = 0; o < entries.length; o++) {
        if (entries[o].key === e) {
          K(n, entries[o].value);
        }
      }
      return n;
    },
    has: function (r) {
      for (
        let t = getState(this).entries,
          e = M(arguments.length, 1),
          n = w(r),
          o = e < 2 ? undefined : arguments[1],
          i = o === undefined ? o : w(o),
          a = 0;
        a < t.length;
      ) {
        const s = t[a++];
        if (s.key === n && (i === undefined || s.value === i)) {
          return true;
        }
      }
      return false;
    },
    set: function (r, t) {
      let e;
      const n = getState(this);
      M(arguments.length, 1);
      for (
        var o = n.entries, i = false, a = w(r), u = w(t), c = 0;
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
        K(o, {
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
      const r = getState(this);
      k(r.entries, function (r, t) {
        if (r.key > t.key) {
          return 1;
        }
        return -1;
      });
      r.updateURL();
    },
    forEach: function (r) {
      let t;
      for (
        let e = getState(this).entries,
          n = b(r, arguments.length > 1 ? arguments[1] : undefined),
          o = 0;
        o < e.length;
      ) {
        n((t = e[o++]).value, t.key, this);
      }
    },
    keys: function () {
      return new rc(this, "keys");
    },
    values: function () {
      return new rc(this, "values");
    },
    entries: function () {
      return new rc(this, "entries");
    },
  },
  {
    enumerable: true,
  },
);
c(rh_prototype, T, rh_prototype.entries, {
  name: "entries",
});
c(
  rh_prototype,
  "toString",
  function () {
    return getState(this).serialize();
  },
  {
    enumerable: true,
  },
);
if (s) {
  f(rh_prototype, "size", {
    get: function () {
      return getState(this).entries.length;
    },
    configurable: true,
    enumerable: true,
  });
}
l(URLSearchParams, j);
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
if (!u && g(Y)) {
  const rv = a(X.has);
  const rp = a(X.set);
  const rd = (r) => {
    if (x(r)) {
      let t;
      const e = r.body;
      if (m(e) === j) {
        if (!rv((t = r.headers ? new Y(r.headers) : new Y()), "content-type")) {
          rp(
            t,
            "content-type",
            "application/x-www-form-urlencoded;charset=UTF-8",
          );
        }
        return S(r, {
          body: E(0, w(e)),
          headers: E(0, t),
        });
      }
    }
    return r;
  };
  if (g(U)) {
    n(
      {
        global: true,
        enumerable: true,
        dontCallGetSet: true,
        forced: true,
      },
      {
        fetch: function (r) {
          return U(r, arguments.length > 1 ? rd(arguments[1]) : {});
        },
      },
    );
  }
  if (g(V)) {
    const Request = function (r) {
      d(this, B);
      return new V(r, arguments.length > 1 ? rd(arguments[1]) : {});
    };
    B.constructor = Request;
    Request.prototype = B;
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
