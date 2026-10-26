import "./module-PC.js";
import n from "./module-A.js";
import o from "./module-J.js";
import i from "./module-M_2.js";
import a from "./module-O9.js";
import s from "./module-r9.js";
import u from "./module-BZO.js";
import c from "./module-vE.js";
import f from "./module-I.js";
import h from "./module-dFV.js";
import l from "./module-HZ.js";
import v from "./module-L7.js";
import p from "./module-b.js";
import d from "./module-A2.js";
import g from "./module-Y.js";
import y from "./module-D_2.js";
import b from "./module-WG_2.js";
import m from "./module-S9.js";
import A from "./module-d.js";
import x from "./module-y_2.js";
import w from "./module-ng.js";
import S from "./module-Za.js";
import E from "./module-w.js";
import O from "./module-wz.js";
import R from "./module-Qn.js";
import M from "./module-eXf.js";
import I from "./module-lN.js";
import k from "./module-ze.js";
const T = I("iterator");
const j = "URLSearchParams";
const N = j + "Iterator";
const p_set = p.set;
const getState = p.getterFor(j);
const C = p.getterFor(N);
const L = (t) => {
  if (!s) {
    return o[t];
  }
  const r = Object.getOwnPropertyDescriptor(o, t);
  return r && r.value;
};
const U = L("fetch");
const V = L("Request");
const Y = L("Headers");
const B = V && V.prototype;
const W = Y && Y.prototype;
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
        typeof t === "string" ? (z(t, 0) === "?" ? tt(t, 1) : t) : w(t),
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
        K(this.entries, {
          key: w(s.value),
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
      for (let n = $(t, "&"), o = 0; o < n.length;) {
        if ((r = n[o++]).length) {
          e = $(r, "=");
          K(this.entries, {
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
  if (!s) {
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
          K(n, entries[o].value);
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
if (s) {
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
  const tv = a(W.has);
  const tp = a(W.set);
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
