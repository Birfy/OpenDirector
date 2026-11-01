import n from "./module-A_24.js";
import o from "./module-r9_23.js";
import i from "./module-J_24.js";
import a from "./module-YR_23.js";
import s from "./module-O9_23.js";
import c from "./module-M_2_23.js";
import u from "./module-Y_24.js";
import f from "./module-y_2_23.js";
import l from "./module-EV_24.js";
import h from "./module-D_2_23.js";
import v from "./module-ng_24.js";
import p from "./module-F4_24.js";
import d from "./module-er_23.js";
import g from "./module-X_24.js";
import y from "./module-zq_2_23.js";
import b from "./module-eZ_23.js";
const i_JSON = i.JSON;
const i_Number = i.Number;
const i_SyntaxError = i.SyntaxError;
const w = i_JSON && i_JSON.parse;
const S = a("Object", "keys");
const O = s("".charAt);
const R = s("".slice);
const M = s(/./.exec);
const I = s([].push);
const k = /^\d$/;
const j = /^[1-9]$/;
const T = /^(?:-|\d)$/;
const N = /^[\t\n\r ]$/;
const P = (t, r) => {
  const e = new L((t = v(t)), 0);
  const n = e.parse();
  const n_value = n.value;
  const i = e.skip(N, n.end);
  if (i < t.length) {
    throw i_SyntaxError(
      'Unexpected extra character: "' +
        O(t, i) +
        '" after the parsed data at: ' +
        i,
    );
  }
  if (u(r)) {
    return F(
      {
        "": n_value,
      },
      "",
      r,
      n,
    );
  }
  return n_value;
};
var F = (t, r, e, n) => {
  let o;
  let i;
  let a;
  let s;
  let u;
  const v = t[r];
  const d = n && v === n.value;
  const g =
    d && typeof n.source === "string"
      ? {
          source: n.source,
        }
      : {};
  if (f(v)) {
    const y = l(v);
    const b = d ? n.nodes : y ? [] : {};
    if (y) {
      o = b.length;
      a = p(v);
      for (s = 0; s < a; s++) {
        D(v, s, F(v, "" + s, e, s < o ? b[s] : undefined));
      }
    } else {
      a = p((i = S(v)));
      for (s = 0; s < a; s++) {
        D(v, (u = i[s]), F(v, u, e, h(b, u) ? b[u] : undefined));
      }
    }
  }
  return c(e, t, r, v, g);
};
var D = (t, r, e) => {
  if (o) {
    const n = Object.getOwnPropertyDescriptor(t, r);
    if (n && !n.configurable) {
      return;
    }
  }
  if (e === undefined) {
    delete t[r];
  } else {
    d(t, r, e);
  }
};
const C = function (t, r, e, n) {
  this.value = t;
  this.end = r;
  this.source = e;
  this.nodes = n;
};
var L = function (t, r) {
  this.source = t;
  this.index = r;
};
L.prototype = {
  fork: function (t) {
    return new L(this.source, t);
  },
  parse: function () {
    const source = this.source;
    const r = this.skip(N, this.index);
    const e = this.fork(r);
    const n = O(source, r);
    if (M(T, n)) {
      return e.number();
    }
    switch (n) {
      case "{":
        return e.object();
      case "[":
        return e.array();
      case '"':
        return e.string();
      case "t":
        return e.keyword(true);
      case "f":
        return e.keyword(false);
      case "n":
        return e.keyword(null);
    }
    throw i_SyntaxError('Unexpected character: "' + n + '" at: ' + r);
  },
  node: function (t, r, e, n, o) {
    return new C(r, n, t ? null : R(this.source, e, n), o);
  },
  object: function () {
    for (
      var t = this.source, r = this.index + 1, e = false, n = {}, o = {};
      r < t.length;
    ) {
      if (O(t, (r = this.until(['"', "}"], r))) === "}" && !e) {
        r++;
        break;
      }
      let i = this.fork(r).string();
      const a = i.value;
      r = i.end;
      r = this.until([":"], r) + 1;
      r = this.skip(N, r);
      d(o, a, (i = this.fork(r).parse()));
      d(n, a, i.value);
      const s = O(t, (r = this.until([",", "}"], i.end)));
      if (s === ",") {
        e = true;
        r++;
      } else if (s === "}") {
        r++;
        break;
      }
    }
    return this.node(1, n, this.index, r, o);
  },
  array: function () {
    for (
      var t = this.source, r = this.index + 1, e = false, n = [], o = [];
      r < t.length;
    ) {
      if (O(t, (r = this.skip(N, r))) === "]" && !e) {
        r++;
        break;
      }
      const i = this.fork(r).parse();
      I(o, i);
      I(n, i.value);
      if (O(t, (r = this.until([",", "]"], i.end))) === ",") {
        e = true;
        r++;
      } else if (O(t, r) === "]") {
        r++;
        break;
      }
    }
    return this.node(1, n, this.index, r, o);
  },
  string: function () {
    const index = this.index;
    const r = y(this.source, this.index + 1);
    return this.node(0, r.value, index, r.end);
  },
  number: function () {
    const source = this.source;
    const index = this.index;
    let e = index;
    if (O(source, e) === "-") {
      e++;
    }
    if (O(source, e) === "0") {
      e++;
    } else if (M(j, O(source, e))) {
      e = this.skip(k, ++e);
    } else {
      throw i_SyntaxError("Failed to parse number at: " + e);
    }
    if (O(source, e) === ".") {
      e = this.skip(k, ++e);
    }
    if (
      (O(source, e) === "e" || O(source, e) === "E") &&
      ((O(source, ++e) === "+" || O(source, e) === "-") && e++,
      e === (e = this.skip(k, e)))
    ) {
      throw i_SyntaxError("Failed to parse number's exponent value at: " + e);
    }
    return this.node(0, i_Number(R(source, index, e)), index, e);
  },
  keyword: function (t) {
    const r = "" + t;
    const index = this.index;
    const n = index + r.length;
    if (R(this.source, index, n) !== r) {
      throw i_SyntaxError("Failed to parse value at: " + index);
    }
    return this.node(0, t, index, n);
  },
  skip: function (t, r) {
    for (const e = this.source; r < e.length && M(t, O(e, r)); r++);
    return r;
  },
  until: function (t, r) {
    r = this.skip(N, r);
    const e = O(this.source, r);
    for (let n = 0; n < t.length; n++) {
      if (t[n] === e) {
        return r;
      }
    }
    throw i_SyntaxError('Unexpected character: "' + e + '" at: ' + r);
  },
};
const forced = g(function () {
  let t;
  const r = "9007199254740993";
  w(r, function (r, e, n) {
    t = n.source;
  });
  return t !== r;
});
const V =
  b &&
  !g(function () {
    return 1 / w("-0 	") != -Infinity;
  });
n(
  {
    target: "JSON",
    stat: true,
    forced,
  },
  {
    parse: function (t, r) {
      if (V && !u(r)) {
        return w(t);
      }
      return P(t, r);
    },
  },
);
