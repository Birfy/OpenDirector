import "./module-PC_4.js";
import n from "./module-A_5.js";
import i from "./module-J_5.js";
import o from "./module-M_2_4.js";
import s from "./module-O9_4.js";
import a from "./module-r9_4.js";
import u from "./module-BZO_4.js";
import c from "./module-vE_4.js";
import f from "./module-I_5.js";
import h from "./module-dFV_4.js";
import l from "./module-HZ_4.js";
import v from "./module-L7_4.js";
import p from "./module-b_4.js";
import d from "./module-A2_5.js";
import g from "./module-Y_5.js";
import y from "./module-D_2_4.js";
import b from "./module-WG_2_4.js";
import m from "./module-S9_4.js";
import A from "./module-d_5.js";
import x from "./module-y_2_4.js";
import w from "./module-ng_5.js";
import S from "./module-Za_4.js";
import E from "./module-w_5.js";
import O from "./module-wz_5.js";
import R from "./module-Qn_5.js";
import M from "./module-eXf_4.js";
import I from "./module-lN_4.js";
import k from "./module-ze_5.js";
const T = I("iterator");
const j = "URLSearchParams";
const N = j + "Iterator";
const p_set = p.set;
const getState = p.getterFor(j);
const C = p.getterFor(N);
const L = (t) => {
  if (!a) {
    return i[t];
  }
  const r = Object.getOwnPropertyDescriptor(i, t);
  return r && r.value;
};
const U = L("fetch");
const V = L("Request");
const Y = L("Headers");
const B = V && V.prototype;
const X = Y && Y.prototype;
const i_RegExp = i.RegExp;
const i_TypeError = i.TypeError;
const i_decodeURIComponent = i.decodeURIComponent;
const i_encodeURIComponent = i.encodeURIComponent;
const J = s("".charAt);
const q = s([].join);
const K = s([].push);
const H = s("".replace);
const Q = s([].shift);
const Z = s([].splice);
const $ = s("".split);
const tt = s("".slice);
const tr = /\+/g;
const te = [, , , ,];
const tn = function (t) {
  try {
    return i_decodeURIComponent(t);
  } catch (r) {
    return t;
  }
};
const ti = (t) => {
  let r;
  let e = H(t, tr, " ");
  let n = 4;
  try {
    return i_decodeURIComponent(e);
  } catch (t) {
    while (n) {
      e = H(
        e,
        te[(r = n--) - 1] ||
          (te[r - 1] = i_RegExp("((?:%[\\da-f]{2}){" + r + "})", "gi")),
        tn,
      );
    }
    return e;
  }
};
const to = /[!'()~]|%20/g;
const ts = {
  "!": "%21",
  "'": "%27",
  "(": "%28",
  ")": "%29",
  "~": "%7E",
  "%20": "+",
};
const ta = function (t) {
  return ts[t];
};
const tu = (t) => H(i_encodeURIComponent(t), to, ta);
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
    const t = C(this);
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
    let i;
    let s;
    let a;
    let u;
    const c = R(t);
    if (c) {
      for (e = (r = O(t, c)).next; !(n = o(e, r)).done;) {
        if (
          (a = o((s = (i = O(A(n.value))).next), i)).done ||
          (u = o(s, i)).done ||
          !o(s, i).done
        ) {
          throw i_TypeError("Expected sequence with length 2");
        }
        K(this.entries, {
          key: w(a.value),
          value: w(u.value),
        });
      }
    } else {
      for (const f in t) {
        if (y(t, f)) {
          K(this.entries, {
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
      for (let n = $(t, "&"), i = 0; i < n.length;) {
        if ((r = n[i++]).length) {
          e = $(r, "=");
          K(this.entries, {
            key: ti(Q(e)),
            value: ti(q(e, "=")),
          });
        }
      }
    }
  },
  serialize: function () {
    let t;
    for (var r = this.entries, e = [], n = 0; n < r.length;) {
      K(e, tu((t = r[n++]).key) + "=" + tu(t.value));
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
  d(this, th_prototype);
  const t = arguments.length > 0 ? arguments[0] : undefined;
  const r = p_set(this, new tf(t));
  if (!a) {
    this.size = r.entries.length;
  }
};
var th_prototype = URLSearchParams.prototype;
h(
  th_prototype,
  {
    append: function (t, r) {
      const e = getState(this);
      M(arguments.length, 2);
      K(e.entries, {
        key: w(t),
        value: w(r),
      });
      if (!a) {
        this.length++;
      }
      e.updateURL();
    },
    delete: function (t) {
      const r = getState(this);
      const e = M(arguments.length, 1);
      for (
        var n = r.entries,
          i = w(t),
          o = e < 2 ? undefined : arguments[1],
          s = o === undefined ? o : w(o),
          u = 0;
        u < n.length;
      ) {
        const c = n[u];
        if (c.key === i && (s === undefined || c.value === s)) {
          Z(n, u, 1);
          if (s !== undefined) {
            break;
          }
        } else {
          u++;
        }
      }
      if (!a) {
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
      for (let i = 0; i < entries.length; i++) {
        if (entries[i].key === e) {
          K(n, entries[i].value);
        }
      }
      return n;
    },
    has: function (t) {
      for (
        let r = getState(this).entries,
          e = M(arguments.length, 1),
          n = w(t),
          i = e < 2 ? undefined : arguments[1],
          o = i === undefined ? i : w(i),
          s = 0;
        s < r.length;
      ) {
        const a = r[s++];
        if (a.key === n && (o === undefined || a.value === o)) {
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
        var i = n.entries, o = false, s = w(t), u = w(r), c = 0;
        c < i.length;
        c++
      ) {
        if ((e = i[c]).key === s) {
          if (o) {
            Z(i, c--, 1);
          } else {
            o = true;
            e.value = u;
          }
        }
      }
      if (!o) {
        K(i, {
          key: s,
          value: u,
        });
      }
      if (!a) {
        this.size = i.length;
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
          i = 0;
        i < e.length;
      ) {
        n((r = e[i++]).value, r.key, this);
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
c(th_prototype, T, th_prototype.entries, {
  name: "entries",
});
c(
  th_prototype,
  "toString",
  function () {
    return getState(this).serialize();
  },
  {
    enumerable: true,
  },
);
if (a) {
  f(th_prototype, "size", {
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
  const tv = s(X.has);
  const tp = s(X.set);
  const td = (t) => {
    if (x(t)) {
      let r;
      const e = t.body;
      if (m(e) === j) {
        if (!tv((r = t.headers ? new Y(t.headers) : new Y()), "content-type")) {
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
      d(this, B);
      return new V(t, arguments.length > 1 ? td(arguments[1]) : {});
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
