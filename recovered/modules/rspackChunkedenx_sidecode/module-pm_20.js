import "./module-PC_20.js";
import n from "./module-A_21.js";
import o from "./module-J_21.js";
import i from "./module-M_2_20.js";
import a from "./module-O9_20.js";
import s from "./module-r9_20.js";
import c from "./module-BZO_20.js";
import u from "./module-vE_20.js";
import f from "./module-I_21.js";
import l from "./module-dFV_20.js";
import h from "./module-HZ_20.js";
import v from "./module-L7_20.js";
import p from "./module-b_20.js";
import d from "./module-A2_21.js";
import g from "./module-Y_21.js";
import y from "./module-D_2_20.js";
import m from "./module-WG_2_20.js";
import b from "./module-S9_20.js";
import w from "./module-d_21.js";
import A from "./module-y_2_20.js";
import x from "./module-ng_21.js";
import S from "./module-Za_20.js";
import E from "./module-w_21.js";
import O from "./module-wz_21.js";
import R from "./module-Qn_21.js";
import M from "./module-eXf_20.js";
import I from "./module-lN_20.js";
import _ from "./module-ze_21.js";
const k = I("iterator");
const T = "URLSearchParams";
const j = T + "Iterator";
const p_set = p.set;
const getState = p.getterFor(T);
const P = p.getterFor(j);
const F = (t) => {
  if (!s) {
    return o[t];
  }
  const r = Object.getOwnPropertyDescriptor(o, t);
  return r && r.value;
};
const L = F("fetch");
const U = F("Request");
const V = F("Headers");
const B = U && U.prototype;
const z = V && V.prototype;
const o_RegExp = o.RegExp;
const o_TypeError = o.TypeError;
const o_decodeURIComponent = o.decodeURIComponent;
const o_encodeURIComponent = o.encodeURIComponent;
const X = a("".charAt);
const G = a([].join);
const J = a([].push);
const K = a("".replace);
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
  let e = K(t, tr, " ");
  let n = 4;
  try {
    return o_decodeURIComponent(e);
  } catch (t) {
    while (n) {
      e = K(
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
const tc = (t) => K(o_encodeURIComponent(t), ti, ts);
const tu = v(
  function (t, kind) {
    p_set(this, {
      type: j,
      iterator: O(getState(t).entries),
      kind,
    });
  },
  "Iterator",
  function () {
    const t = P(this);
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
    if (A(t)) {
      this.parseObject(t);
    } else {
      this.parseQuery(
        typeof t === "string" ? (X(t, 0) === "?" ? tt(t, 1) : t) : x(t),
      );
    }
  }
};
tf.prototype = {
  type: T,
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
    let c;
    const u = R(t);
    if (u) {
      for (e = (r = O(t, u)).next; !(n = i(e, r)).done;) {
        if (
          (s = i((a = (o = O(w(n.value))).next), o)).done ||
          (c = i(a, o)).done ||
          !i(a, o).done
        ) {
          throw o_TypeError("Expected sequence with length 2");
        }
        J(this.entries, {
          key: x(s.value),
          value: x(c.value),
        });
      }
    } else {
      for (const f in t) {
        if (y(t, f)) {
          J(this.entries, {
            key: f,
            value: x(t[f]),
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
          J(this.entries, {
            key: to(Q(e)),
            value: to(G(e, "=")),
          });
        }
      }
    }
  },
  serialize: function () {
    let t;
    for (var r = this.entries, e = [], n = 0; n < r.length;) {
      J(e, tc((t = r[n++]).key) + "=" + tc(t.value));
    }
    return G(e, "&");
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
      J(e.entries, {
        key: x(t),
        value: x(r),
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
          o = x(t),
          i = e < 2 ? undefined : arguments[1],
          a = i === undefined ? i : x(i),
          c = 0;
        c < n.length;
      ) {
        const u = n[c];
        if (u.key === o && (a === undefined || u.value === a)) {
          Z(n, c, 1);
          if (a !== undefined) {
            break;
          }
        } else {
          c++;
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
      const e = x(t);
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
      const e = x(t);
      const n = [];
      for (let o = 0; o < entries.length; o++) {
        if (entries[o].key === e) {
          J(n, entries[o].value);
        }
      }
      return n;
    },
    has: function (t) {
      for (
        let r = getState(this).entries,
          e = M(arguments.length, 1),
          n = x(t),
          o = e < 2 ? undefined : arguments[1],
          i = o === undefined ? o : x(o),
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
        var o = n.entries, i = false, a = x(t), c = x(r), u = 0;
        u < o.length;
        u++
      ) {
        if ((e = o[u]).key === a) {
          if (i) {
            Z(o, u--, 1);
          } else {
            i = true;
            e.value = c;
          }
        }
      }
      if (!i) {
        J(o, {
          key: a,
          value: c,
        });
      }
      if (!s) {
        this.size = o.length;
      }
      n.updateURL();
    },
    sort: function () {
      const t = getState(this);
      _(t.entries, function (t, r) {
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
      return new tu(this, "keys");
    },
    values: function () {
      return new tu(this, "values");
    },
    entries: function () {
      return new tu(this, "entries");
    },
  },
  {
    enumerable: true,
  },
);
u(tl_prototype, k, tl_prototype.entries, {
  name: "entries",
});
u(
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
h(URLSearchParams, T);
n(
  {
    global: true,
    constructor: true,
    forced: !c,
  },
  {
    URLSearchParams,
  },
);
if (!c && g(V)) {
  const tv = a(z.has);
  const tp = a(z.set);
  const td = (t) => {
    if (A(t)) {
      let r;
      const e = t.body;
      if (b(e) === T) {
        if (!tv((r = t.headers ? new V(t.headers) : new V()), "content-type")) {
          tp(
            r,
            "content-type",
            "application/x-www-form-urlencoded;charset=UTF-8",
          );
        }
        return S(t, {
          body: E(0, x(e)),
          headers: E(0, r),
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
          return L(t, arguments.length > 1 ? td(arguments[1]) : {});
        },
      },
    );
  }
  if (g(U)) {
    const Request = function (t) {
      d(this, B);
      return new U(t, arguments.length > 1 ? td(arguments[1]) : {});
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
