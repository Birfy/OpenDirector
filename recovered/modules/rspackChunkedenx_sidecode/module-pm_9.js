import "./module-PC_9.js";
import n from "./module-A_10.js";
import o from "./module-J_10.js";
import i from "./module-M_2_9.js";
import a from "./module-O9_9.js";
import s from "./module-r9_9.js";
import u from "./module-BZO_9.js";
import c from "./module-vE_9.js";
import f from "./module-I_10.js";
import l from "./module-dFV_9.js";
import h from "./module-HZ_9.js";
import v from "./module-L7_9.js";
import d from "./module-b_9.js";
import p from "./module-A2_10.js";
import g from "./module-Y_10.js";
import y from "./module-D_2_9.js";
import m from "./module-WG_2_9.js";
import b from "./module-S9_9.js";
import w from "./module-d_10.js";
import A from "./module-y_2_9.js";
import x from "./module-ng_10.js";
import E from "./module-Za_9.js";
import S from "./module-w_10.js";
import O from "./module-wz_10.js";
import _ from "./module-Qn_10.js";
import R from "./module-eXf_9.js";
import M from "./module-lN_9.js";
import I from "./module-ze_10.js";
const T = M("iterator");
const k = "URLSearchParams";
const N = k + "Iterator";
const d_set = d.set;
const getState = d.getterFor(k);
const D = d.getterFor(N);
const C = (t) => {
  if (!s) {
    return o[t];
  }
  const e = Object.getOwnPropertyDescriptor(o, t);
  return e && e.value;
};
const L = C("fetch");
const U = C("Request");
const B = C("Headers");
const V = U && U.prototype;
const Y = B && B.prototype;
const o_RegExp = o.RegExp;
const o_TypeError = o.TypeError;
const o_decodeURIComponent = o.decodeURIComponent;
const o_encodeURIComponent = o.encodeURIComponent;
const J = a("".charAt);
const H = a([].join);
const q = a([].push);
const K = a("".replace);
const Q = a([].shift);
const Z = a([].splice);
const $ = a("".split);
const tt = a("".slice);
const te = /\+/g;
const tr = [, , , ,];
const tn = function (t) {
  try {
    return o_decodeURIComponent(t);
  } catch (e) {
    return t;
  }
};
const to = (t) => {
  let e;
  let r = K(t, te, " ");
  let n = 4;
  try {
    return o_decodeURIComponent(r);
  } catch (t) {
    while (n) {
      r = K(
        r,
        tr[(e = n--) - 1] ||
          (tr[e - 1] = o_RegExp("((?:%[\\da-f]{2}){" + e + "})", "gi")),
        tn,
      );
    }
    return r;
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
const tu = (t) => K(o_encodeURIComponent(t), ti, ts);
const tc = v(
  function (t, kind) {
    d_set(this, {
      type: N,
      iterator: O(getState(t).entries),
      kind,
    });
  },
  "Iterator",
  function () {
    const t = D(this);
    const t_kind = t.kind;
    const r = t.iterator.next();
    const r_value = r.value;
    if (!r.done) {
      r.value =
        t_kind === "keys"
          ? r_value.key
          : t_kind === "values"
            ? r_value.value
            : [r_value.key, r_value.value];
    }
    return r;
  },
  true,
);
const tf = function (t) {
  this.entries = [];
  this.url = null;
  if (t !== undefined) {
    if (A(t)) {
      this.parseObject(t);
    } else {
      this.parseQuery(
        typeof t === "string" ? (J(t, 0) === "?" ? tt(t, 1) : t) : x(t),
      );
    }
  }
};
tf.prototype = {
  type: k,
  bindURL: function (t) {
    this.url = t;
    this.update();
  },
  parseObject: function (t) {
    let e;
    let r;
    let n;
    let o;
    let a;
    let s;
    let u;
    const c = _(t);
    if (c) {
      for (r = (e = O(t, c)).next; !(n = i(r, e)).done;) {
        if (
          (s = i((a = (o = O(w(n.value))).next), o)).done ||
          (u = i(a, o)).done ||
          !i(a, o).done
        ) {
          throw o_TypeError("Expected sequence with length 2");
        }
        q(this.entries, {
          key: x(s.value),
          value: x(u.value),
        });
      }
    } else {
      for (const f in t) {
        if (y(t, f)) {
          q(this.entries, {
            key: f,
            value: x(t[f]),
          });
        }
      }
    }
  },
  parseQuery: function (t) {
    if (t) {
      let e;
      let r;
      for (let n = $(t, "&"), o = 0; o < n.length;) {
        if ((e = n[o++]).length) {
          r = $(e, "=");
          q(this.entries, {
            key: to(Q(r)),
            value: to(H(r, "=")),
          });
        }
      }
    }
  },
  serialize: function () {
    let t;
    for (var e = this.entries, r = [], n = 0; n < e.length;) {
      q(r, tu((t = e[n++]).key) + "=" + tu(t.value));
    }
    return H(r, "&");
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
  p(this, tl_prototype);
  const t = arguments.length > 0 ? arguments[0] : undefined;
  const e = d_set(this, new tf(t));
  if (!s) {
    this.size = e.entries.length;
  }
};
var tl_prototype = URLSearchParams.prototype;
l(
  tl_prototype,
  {
    append: function (t, e) {
      const r = getState(this);
      R(arguments.length, 2);
      q(r.entries, {
        key: x(t),
        value: x(e),
      });
      if (!s) {
        this.length++;
      }
      r.updateURL();
    },
    delete: function (t) {
      const e = getState(this);
      const r = R(arguments.length, 1);
      for (
        var n = e.entries,
          o = x(t),
          i = r < 2 ? undefined : arguments[1],
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
      e.updateURL();
    },
    get: function (t) {
      const entries = getState(this).entries;
      R(arguments.length, 1);
      const r = x(t);
      for (let n = 0; n < entries.length; n++) {
        if (entries[n].key === r) {
          return entries[n].value;
        }
      }
      return null;
    },
    getAll: function (t) {
      const entries = getState(this).entries;
      R(arguments.length, 1);
      const r = x(t);
      const n = [];
      for (let o = 0; o < entries.length; o++) {
        if (entries[o].key === r) {
          q(n, entries[o].value);
        }
      }
      return n;
    },
    has: function (t) {
      for (
        let e = getState(this).entries,
          r = R(arguments.length, 1),
          n = x(t),
          o = r < 2 ? undefined : arguments[1],
          i = o === undefined ? o : x(o),
          a = 0;
        a < e.length;
      ) {
        const s = e[a++];
        if (s.key === n && (i === undefined || s.value === i)) {
          return true;
        }
      }
      return false;
    },
    set: function (t, e) {
      let r;
      const n = getState(this);
      R(arguments.length, 1);
      for (
        var o = n.entries, i = false, a = x(t), u = x(e), c = 0;
        c < o.length;
        c++
      ) {
        if ((r = o[c]).key === a) {
          if (i) {
            Z(o, c--, 1);
          } else {
            i = true;
            r.value = u;
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
      I(t.entries, function (t, e) {
        if (t.key > e.key) {
          return 1;
        }
        return -1;
      });
      t.updateURL();
    },
    forEach: function (t) {
      let e;
      for (
        let r = getState(this).entries,
          n = m(t, arguments.length > 1 ? arguments[1] : undefined),
          o = 0;
        o < r.length;
      ) {
        n((e = r[o++]).value, e.key, this);
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
h(URLSearchParams, k);
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
if (!u && g(B)) {
  const tv = a(Y.has);
  const td = a(Y.set);
  const tp = (t) => {
    if (A(t)) {
      let e;
      const r = t.body;
      if (b(r) === k) {
        if (!tv((e = t.headers ? new B(t.headers) : new B()), "content-type")) {
          td(
            e,
            "content-type",
            "application/x-www-form-urlencoded;charset=UTF-8",
          );
        }
        return E(t, {
          body: S(0, x(r)),
          headers: S(0, e),
        });
      }
    }
    return t;
  };
  if (g(L)) {
    n(
      {
        global: true,
        enumerable: true,
        dontCallGetSet: true,
        forced: true,
      },
      {
        fetch: function (t) {
          return L(t, arguments.length > 1 ? tp(arguments[1]) : {});
        },
      },
    );
  }
  if (g(U)) {
    const Request = function (t) {
      p(this, V);
      return new U(t, arguments.length > 1 ? tp(arguments[1]) : {});
    };
    V.constructor = Request;
    Request.prototype = V;
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
