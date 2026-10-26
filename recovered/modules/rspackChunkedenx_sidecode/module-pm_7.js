import "./module-PC_7.js";
import n from "./module-A_8.js";
import o from "./module-J_8.js";
import i from "./module-M_2_7.js";
import a from "./module-O9_7.js";
import s from "./module-r9_7.js";
import u from "./module-BZO_7.js";
import c from "./module-vE_7.js";
import f from "./module-I_8.js";
import l from "./module-dFV_7.js";
import h from "./module-HZ_7.js";
import v from "./module-L7_7.js";
import p from "./module-b_7.js";
import d from "./module-A2_8.js";
import g from "./module-Y_8.js";
import y from "./module-D_2_7.js";
import m from "./module-WG_2_7.js";
import b from "./module-S9_7.js";
import A from "./module-d_8.js";
import w from "./module-y_2_7.js";
import x from "./module-ng_8.js";
import E from "./module-Za_7.js";
import S from "./module-w_8.js";
import O from "./module-wz_8.js";
import R from "./module-Qn_8.js";
import M from "./module-eXf_7.js";
import I from "./module-lN_7.js";
import k from "./module-ze_8.js";
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
const W = L("Request");
const V = L("Headers");
const Y = W && W.prototype;
const _ = V && V.prototype;
const o_RegExp = o.RegExp;
const o_TypeError = o.TypeError;
const o_decodeURIComponent = o.decodeURIComponent;
const o_encodeURIComponent = o.encodeURIComponent;
const z = a("".charAt);
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
    if (w(r)) {
      this.parseObject(r);
    } else {
      this.parseQuery(
        typeof r === "string" ? (z(r, 0) === "?" ? rr(r, 1) : r) : x(r),
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
          key: x(s.value),
          value: x(u.value),
        });
      }
    } else {
      for (const f in r) {
        if (y(r, f)) {
          K(this.entries, {
            key: f,
            value: x(r[f]),
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
  d(this, rl_prototype);
  const r = arguments.length > 0 ? arguments[0] : undefined;
  const t = p_set(this, new rf(r));
  if (!s) {
    this.size = t.entries.length;
  }
};
var rl_prototype = URLSearchParams.prototype;
l(
  rl_prototype,
  {
    append: function (r, t) {
      const e = getState(this);
      M(arguments.length, 2);
      K(e.entries, {
        key: x(r),
        value: x(t),
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
          o = x(r),
          i = e < 2 ? undefined : arguments[1],
          a = i === undefined ? i : x(i),
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
      const e = x(r);
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
      const e = x(r);
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
          n = x(r),
          o = e < 2 ? undefined : arguments[1],
          i = o === undefined ? o : x(o),
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
        var o = n.entries, i = false, a = x(r), u = x(t), c = 0;
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
          n = m(r, arguments.length > 1 ? arguments[1] : undefined),
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
c(rl_prototype, T, rl_prototype.entries, {
  name: "entries",
});
c(
  rl_prototype,
  "toString",
  function () {
    return getState(this).serialize();
  },
  {
    enumerable: true,
  },
);
if (s) {
  f(rl_prototype, "size", {
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
  const rv = a(_.has);
  const rp = a(_.set);
  const rd = (r) => {
    if (w(r)) {
      let t;
      const e = r.body;
      if (b(e) === j) {
        if (!rv((t = r.headers ? new V(r.headers) : new V()), "content-type")) {
          rp(
            t,
            "content-type",
            "application/x-www-form-urlencoded;charset=UTF-8",
          );
        }
        return E(r, {
          body: S(0, x(e)),
          headers: S(0, t),
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
  if (g(W)) {
    const Request = function (r) {
      d(this, Y);
      return new W(r, arguments.length > 1 ? rd(arguments[1]) : {});
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
