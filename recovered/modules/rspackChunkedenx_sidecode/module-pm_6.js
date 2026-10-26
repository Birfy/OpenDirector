import "./module-PC_6.js";
import n from "./module-A_7.js";
import o from "./module-J_7.js";
import a from "./module-M_2_6.js";
import i from "./module-O9_6.js";
import s from "./module-r9_6.js";
import c from "./module-BZO_6.js";
import u from "./module-vE_6.js";
import f from "./module-I_7.js";
import l from "./module-dFV_6.js";
import h from "./module-HZ_6.js";
import p from "./module-L7_6.js";
import v from "./module-b_6.js";
import d from "./module-A2_7.js";
import g from "./module-Y_7.js";
import y from "./module-D_2_6.js";
import m from "./module-WG_2_6.js";
import b from "./module-S9_6.js";
import A from "./module-d_7.js";
import w from "./module-y_2_6.js";
import x from "./module-ng_7.js";
import E from "./module-Za_6.js";
import S from "./module-w_7.js";
import O from "./module-wz_7.js";
import R from "./module-Qn_7.js";
import M from "./module-eXf_6.js";
import I from "./module-lN_6.js";
import k from "./module-ze_7.js";
const T = I("iterator");
const j = "URLSearchParams";
const F = j + "Iterator";
const v_set = v.set;
const getState = v.getterFor(j);
const C = v.getterFor(F);
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
const W = U && U.prototype;
const Y = V && V.prototype;
const o_RegExp = o.RegExp;
const o_TypeError = o.TypeError;
const o_decodeURIComponent = o.decodeURIComponent;
const o_encodeURIComponent = o.encodeURIComponent;
const G = i("".charAt);
const J = i([].join);
const q = i([].push);
const K = i("".replace);
const Q = i([].shift);
const Z = i([].splice);
const $ = i("".split);
const tt = i("".slice);
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
const ta = /[!'()~]|%20/g;
const ti = {
  "!": "%21",
  "'": "%27",
  "(": "%28",
  ")": "%29",
  "~": "%7E",
  "%20": "+",
};
const ts = function (t) {
  return ti[t];
};
const tc = (t) => K(o_encodeURIComponent(t), ta, ts);
const tu = p(
  function (t, kind) {
    v_set(this, {
      type: F,
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
    if (w(t)) {
      this.parseObject(t);
    } else {
      this.parseQuery(
        typeof t === "string" ? (G(t, 0) === "?" ? tt(t, 1) : t) : x(t),
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
    let i;
    let s;
    let c;
    const u = R(t);
    if (u) {
      for (e = (r = O(t, u)).next; !(n = a(e, r)).done;) {
        if (
          (s = a((i = (o = O(A(n.value))).next), o)).done ||
          (c = a(i, o)).done ||
          !a(i, o).done
        ) {
          throw o_TypeError("Expected sequence with length 2");
        }
        q(this.entries, {
          key: x(s.value),
          value: x(c.value),
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
      let r;
      let e;
      for (let n = $(t, "&"), o = 0; o < n.length;) {
        if ((r = n[o++]).length) {
          e = $(r, "=");
          q(this.entries, {
            key: to(Q(e)),
            value: to(J(e, "=")),
          });
        }
      }
    }
  },
  serialize: function () {
    let t;
    for (var r = this.entries, e = [], n = 0; n < r.length;) {
      q(e, tc((t = r[n++]).key) + "=" + tc(t.value));
    }
    return J(e, "&");
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
  const r = v_set(this, new tf(t));
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
          a = e < 2 ? undefined : arguments[1],
          i = a === undefined ? a : x(a),
          c = 0;
        c < n.length;
      ) {
        const u = n[c];
        if (u.key === o && (i === undefined || u.value === i)) {
          Z(n, c, 1);
          if (i !== undefined) {
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
          q(n, entries[o].value);
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
          a = o === undefined ? o : x(o),
          i = 0;
        i < r.length;
      ) {
        const s = r[i++];
        if (s.key === n && (a === undefined || s.value === a)) {
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
        var o = n.entries, a = false, i = x(t), c = x(r), u = 0;
        u < o.length;
        u++
      ) {
        if ((e = o[u]).key === i) {
          if (a) {
            Z(o, u--, 1);
          } else {
            a = true;
            e.value = c;
          }
        }
      }
      if (!a) {
        q(o, {
          key: i,
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
u(tl_prototype, T, tl_prototype.entries, {
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
h(URLSearchParams, j);
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
  const tp = i(Y.has);
  const tv = i(Y.set);
  const td = (t) => {
    if (w(t)) {
      let r;
      const e = t.body;
      if (b(e) === j) {
        if (!tp((r = t.headers ? new V(t.headers) : new V()), "content-type")) {
          tv(
            r,
            "content-type",
            "application/x-www-form-urlencoded;charset=UTF-8",
          );
        }
        return E(t, {
          body: S(0, x(e)),
          headers: S(0, r),
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
      d(this, W);
      return new U(t, arguments.length > 1 ? td(arguments[1]) : {});
    };
    W.constructor = Request;
    Request.prototype = W;
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
