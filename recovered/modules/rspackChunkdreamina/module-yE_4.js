import "sK";
import n from "g";
import i from "u";
import a from "p3";
import o from "o";
import s from "F";
import A from "VJ";
import c from "xX";
import u from "Tg";
import l from "IG";
import h from "Ii";
import f from "ib";
import g from "G";
import d from "i9";
import p from "r";
import m from "h";
import y from "fM";
import b from "xE";
import v from "IF";
import I from "N";
import w from "BC";
import C from "lY";
import B from "M";
import S from "jn";
import E from "UZ";
import k from "lU";
import D from "Nt";
import x from "DD";
const F = D("iterator");
const Q = "URLSearchParams";
const N = Q + "Iterator";
const g_set = g.set;
const getState = g.getterFor(Q);
const G = g.getterFor(N);
const T = (t) => {
  if (!s) {
    return i[t];
  }
  const e = Object.getOwnPropertyDescriptor(i, t);
  return e && e.value;
};
const Y = T("fetch");
const U = T("Request");
const W = T("Headers");
const M = U && U.prototype;
const J = W && W.prototype;
const i_RegExp = i.RegExp;
const i_TypeError = i.TypeError;
const i_decodeURIComponent = i.decodeURIComponent;
const i_encodeURIComponent = i.encodeURIComponent;
const P = o("".charAt);
const q = o([].join);
const V = o([].push);
const X = o("".replace);
const z = o([].shift);
const _ = o([].splice);
const $ = o("".split);
const tt = o("".slice);
const te = /\+/g;
const tr = [, , , ,];
const tn = function (t) {
  try {
    return i_decodeURIComponent(t);
  } catch (e) {
    return t;
  }
};
const ti = (t) => {
  let e;
  let r = X(t, te, " ");
  let n = 4;
  try {
    return i_decodeURIComponent(r);
  } catch (t) {
    while (n) {
      r = X(
        r,
        tr[(e = n--) - 1] ||
          (tr[e - 1] = i_RegExp("((?:%[\\da-f]{2}){" + e + "})", "gi")),
        tn,
      );
    }
    return r;
  }
};
const ta = /[!'()~]|%20/g;
const to = {
  "!": "%21",
  "'": "%27",
  "(": "%28",
  ")": "%29",
  "~": "%7E",
  "%20": "+",
};
const ts = function (t) {
  return to[t];
};
const tA = (t) => X(i_encodeURIComponent(t), ta, ts);
const tc = f(
  function (t, kind) {
    g_set(this, {
      type: N,
      iterator: S(getState(t).entries),
      kind,
    });
  },
  "Iterator",
  function () {
    const t = G(this);
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
const tu = function (t) {
  this.entries = [];
  this.url = null;
  if (t !== undefined) {
    if (I(t)) {
      this.parseObject(t);
    } else {
      this.parseQuery(
        typeof t === "string" ? (P(t, 0) === "?" ? tt(t, 1) : t) : w(t),
      );
    }
  }
};
tu.prototype = {
  type: Q,
  bindURL: function (t) {
    this.url = t;
    this.update();
  },
  parseObject: function (t) {
    let e;
    let r;
    let n;
    let i;
    let o;
    let s;
    let A;
    const c = E(t);
    if (c) {
      for (r = (e = S(t, c)).next; !(n = a(r, e)).done;) {
        if (
          (s = a((o = (i = S(v(n.value))).next), i)).done ||
          (A = a(o, i)).done ||
          !a(o, i).done
        ) {
          throw i_TypeError("Expected sequence with length 2");
        }
        V(this.entries, {
          key: w(s.value),
          value: w(A.value),
        });
      }
    } else {
      for (const u in t) {
        if (m(t, u)) {
          V(this.entries, {
            key: u,
            value: w(t[u]),
          });
        }
      }
    }
  },
  parseQuery: function (t) {
    if (t) {
      let e;
      let r;
      for (let n = $(t, "&"), i = 0; i < n.length;) {
        if ((e = n[i++]).length) {
          r = $(e, "=");
          V(this.entries, {
            key: ti(z(r)),
            value: ti(q(r, "=")),
          });
        }
      }
    }
  },
  serialize: function () {
    let t;
    for (var e = this.entries, r = [], n = 0; n < e.length;) {
      V(r, tA((t = e[n++]).key) + "=" + tA(t.value));
    }
    return q(r, "&");
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
  const e = g_set(this, new tu(t));
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
      k(arguments.length, 2);
      V(r.entries, {
        key: w(t),
        value: w(e),
      });
      if (!s) {
        this.length++;
      }
      r.updateURL();
    },
    delete: function (t) {
      const e = getState(this);
      const r = k(arguments.length, 1);
      for (
        var n = e.entries,
          i = w(t),
          a = r < 2 ? undefined : arguments[1],
          o = a === undefined ? a : w(a),
          A = 0;
        A < n.length;
      ) {
        const c = n[A];
        if (c.key === i && (o === undefined || c.value === o)) {
          _(n, A, 1);
          if (o !== undefined) {
            break;
          }
        } else {
          A++;
        }
      }
      if (!s) {
        this.size = n.length;
      }
      e.updateURL();
    },
    get: function (t) {
      const entries = getState(this).entries;
      k(arguments.length, 1);
      const r = w(t);
      for (let n = 0; n < entries.length; n++) {
        if (entries[n].key === r) {
          return entries[n].value;
        }
      }
      return null;
    },
    getAll: function (t) {
      const entries = getState(this).entries;
      k(arguments.length, 1);
      const r = w(t);
      const n = [];
      for (let i = 0; i < entries.length; i++) {
        if (entries[i].key === r) {
          V(n, entries[i].value);
        }
      }
      return n;
    },
    has: function (t) {
      for (
        let e = getState(this).entries,
          r = k(arguments.length, 1),
          n = w(t),
          i = r < 2 ? undefined : arguments[1],
          a = i === undefined ? i : w(i),
          o = 0;
        o < e.length;
      ) {
        const s = e[o++];
        if (s.key === n && (a === undefined || s.value === a)) {
          return true;
        }
      }
      return false;
    },
    set: function (t, e) {
      let r;
      const n = getState(this);
      k(arguments.length, 1);
      for (
        var i = n.entries, a = false, o = w(t), A = w(e), c = 0;
        c < i.length;
        c++
      ) {
        if ((r = i[c]).key === o) {
          if (a) {
            _(i, c--, 1);
          } else {
            a = true;
            r.value = A;
          }
        }
      }
      if (!a) {
        V(i, {
          key: o,
          value: A,
        });
      }
      if (!s) {
        this.size = i.length;
      }
      n.updateURL();
    },
    sort: function () {
      const t = getState(this);
      x(t.entries, function (t, e) {
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
          n = y(t, arguments.length > 1 ? arguments[1] : undefined),
          i = 0;
        i < r.length;
      ) {
        n((e = r[i++]).value, e.key, this);
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
c(tl_prototype, F, tl_prototype.entries, {
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
  u(tl_prototype, "size", {
    get: function () {
      return getState(this).entries.length;
    },
    configurable: true,
    enumerable: true,
  });
}
h(URLSearchParams, Q);
n(
  {
    global: true,
    constructor: true,
    forced: !A,
  },
  {
    URLSearchParams,
  },
);
if (!A && p(W)) {
  const tf = o(J.has);
  const tg = o(J.set);
  const td = (t) => {
    if (I(t)) {
      let e;
      const r = t.body;
      if (b(r) === Q) {
        if (!tf((e = t.headers ? new W(t.headers) : new W()), "content-type")) {
          tg(
            e,
            "content-type",
            "application/x-www-form-urlencoded;charset=UTF-8",
          );
        }
        return C(t, {
          body: B(0, w(r)),
          headers: B(0, e),
        });
      }
    }
    return t;
  };
  if (p(Y)) {
    n(
      {
        global: true,
        enumerable: true,
        dontCallGetSet: true,
        forced: true,
      },
      {
        fetch: function (t) {
          return Y(t, arguments.length > 1 ? td(arguments[1]) : {});
        },
      },
    );
  }
  if (p(U)) {
    const Request = function (t) {
      d(this, M);
      return new U(t, arguments.length > 1 ? td(arguments[1]) : {});
    };
    M.constructor = Request;
    Request.prototype = M;
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
