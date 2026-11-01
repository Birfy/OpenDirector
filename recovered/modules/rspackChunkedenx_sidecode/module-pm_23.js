import "./module-PC_23.js";
import n from "./module-A_24.js";
import o from "./module-J_24.js";
import i from "./module-M_2_23.js";
import a from "./module-O9_23.js";
import s from "./module-r9_23.js";
import c from "./module-BZO_23.js";
import u from "./module-vE_23.js";
import f from "./module-I_24.js";
import l from "./module-dFV_23.js";
import h from "./module-HZ_23.js";
import v from "./module-L7_23.js";
import p from "./module-b_23.js";
import d from "./module-A2_24.js";
import g from "./module-Y_24.js";
import y from "./module-D_2_23.js";
import b from "./module-WG_2_23.js";
import m from "./module-S9_23.js";
import A from "./module-d_24.js";
import x from "./module-y_2_23.js";
import w from "./module-ng_24.js";
import S from "./module-Za_23.js";
import E from "./module-w_24.js";
import O from "./module-wz_24.js";
import R from "./module-Qn_24.js";
import M from "./module-eXf_23.js";
import I from "./module-lN_23.js";
import k from "./module-ze_24.js";
const j = I("iterator");
const T = "URLSearchParams";
const N = T + "Iterator";
const p_set = p.set;
const getState = p.getterFor(T);
const D = p.getterFor(N);
const L = (t) => {
  if (!s) {
    return o[t];
  }
  const r = Object.getOwnPropertyDescriptor(o, t);
  return r && r.value;
};
const U = L("fetch");
const V = L("Request");
const _ = L("Headers");
const Y = V && V.prototype;
const B = _ && _.prototype;
const o_RegExp = o.RegExp;
const o_TypeError = o.TypeError;
const o_decodeURIComponent = o.decodeURIComponent;
const o_encodeURIComponent = o.encodeURIComponent;
const J = a("".charAt);
const q = a([].join);
const H = a([].push);
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
          (s = i((a = (o = O(A(n.value))).next), o)).done ||
          (c = i(a, o)).done ||
          !i(a, o).done
        ) {
          throw o_TypeError("Expected sequence with length 2");
        }
        H(this.entries, {
          key: w(s.value),
          value: w(c.value),
        });
      }
    } else {
      for (const f in t) {
        if (y(t, f)) {
          H(this.entries, {
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
          H(this.entries, {
            key: to(Q(e)),
            value: to(q(e, "=")),
          });
        }
      }
    }
  },
  serialize: function () {
    let t;
    for (var r = this.entries, e = [], n = 0; n < r.length;) {
      H(e, tc((t = r[n++]).key) + "=" + tc(t.value));
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
      H(e.entries, {
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
          H(n, entries[o].value);
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
        var o = n.entries, i = false, a = w(t), c = w(r), u = 0;
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
        H(o, {
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
          n = b(t, arguments.length > 1 ? arguments[1] : undefined),
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
u(tl_prototype, j, tl_prototype.entries, {
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
if (!c && g(_)) {
  const tv = a(B.has);
  const tp = a(B.set);
  const td = (t) => {
    if (x(t)) {
      let r;
      const e = t.body;
      if (m(e) === T) {
        if (!tv((r = t.headers ? new _(t.headers) : new _()), "content-type")) {
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
  if (g(U)) {
    n(
      {
        global: true,
        enumerable: true,
        dontCallGetSet: true,
        forced: true,
      },
      {
        fetch: function (t) {
          return U(t, arguments.length > 1 ? td(arguments[1]) : {});
        },
      },
    );
  }
  if (g(V)) {
    const Request = function (t) {
      d(this, Y);
      return new V(t, arguments.length > 1 ? td(arguments[1]) : {});
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
