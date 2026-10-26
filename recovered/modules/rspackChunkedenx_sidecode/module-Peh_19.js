import n from "./module-A_20.js";
import o from "./module-r9_19.js";
import i from "./module-J_20.js";
import a from "./module-YR_19.js";
import s from "./module-O9_19.js";
import u from "./module-M_2_19.js";
import c from "./module-Y_20.js";
import f from "./module-y_2_19.js";
import l from "./module-EV_20.js";
import h from "./module-D_2_19.js";
import v from "./module-ng_20.js";
import p from "./module-F4_20.js";
import d from "./module-er_19.js";
import g from "./module-X_20.js";
import y from "./module-zq_2_19.js";
import b from "./module-eZ_19.js";
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
const T = /^[1-9]$/;
const j = /^(?:-|\d)$/;
const N = /^[\t\n\r ]$/;
const F = (r, t) => {
  const e = new L((r = v(r)), 0);
  const n = e.parse();
  const n_value = n.value;
  const i = e.skip(N, n.end);
  if (i < r.length) {
    throw i_SyntaxError(
      'Unexpected extra character: "' +
        O(r, i) +
        '" after the parsed data at: ' +
        i,
    );
  }
  if (c(t)) {
    return P(
      {
        "": n_value,
      },
      "",
      t,
      n,
    );
  }
  return n_value;
};
var P = (r, t, e, n) => {
  let o;
  let i;
  let a;
  let s;
  let c;
  const v = r[t];
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
        C(v, s, P(v, "" + s, e, s < o ? b[s] : undefined));
      }
    } else {
      a = p((i = S(v)));
      for (s = 0; s < a; s++) {
        C(v, (c = i[s]), P(v, c, e, h(b, c) ? b[c] : undefined));
      }
    }
  }
  return u(e, r, t, v, g);
};
var C = (r, t, e) => {
  if (o) {
    const n = Object.getOwnPropertyDescriptor(r, t);
    if (n && !n.configurable) {
      return;
    }
  }
  if (e === undefined) {
    delete r[t];
  } else {
    d(r, t, e);
  }
};
const D = function (r, t, e, n) {
  this.value = r;
  this.end = t;
  this.source = e;
  this.nodes = n;
};
var L = function (r, t) {
  this.source = r;
  this.index = t;
};
L.prototype = {
  fork: function (r) {
    return new L(this.source, r);
  },
  parse: function () {
    const source = this.source;
    const t = this.skip(N, this.index);
    const e = this.fork(t);
    const n = O(source, t);
    if (M(j, n)) {
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
    throw i_SyntaxError('Unexpected character: "' + n + '" at: ' + t);
  },
  node: function (r, t, e, n, o) {
    return new D(t, n, r ? null : R(this.source, e, n), o);
  },
  object: function () {
    for (
      var r = this.source, t = this.index + 1, e = false, n = {}, o = {};
      t < r.length;
    ) {
      if (O(r, (t = this.until(['"', "}"], t))) === "}" && !e) {
        t++;
        break;
      }
      let i = this.fork(t).string();
      const a = i.value;
      t = i.end;
      t = this.until([":"], t) + 1;
      t = this.skip(N, t);
      d(o, a, (i = this.fork(t).parse()));
      d(n, a, i.value);
      const s = O(r, (t = this.until([",", "}"], i.end)));
      if (s === ",") {
        e = true;
        t++;
      } else if (s === "}") {
        t++;
        break;
      }
    }
    return this.node(1, n, this.index, t, o);
  },
  array: function () {
    for (
      var r = this.source, t = this.index + 1, e = false, n = [], o = [];
      t < r.length;
    ) {
      if (O(r, (t = this.skip(N, t))) === "]" && !e) {
        t++;
        break;
      }
      const i = this.fork(t).parse();
      I(o, i);
      I(n, i.value);
      if (O(r, (t = this.until([",", "]"], i.end))) === ",") {
        e = true;
        t++;
      } else if (O(r, t) === "]") {
        t++;
        break;
      }
    }
    return this.node(1, n, this.index, t, o);
  },
  string: function () {
    const index = this.index;
    const t = y(this.source, this.index + 1);
    return this.node(0, t.value, index, t.end);
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
    } else if (M(T, O(source, e))) {
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
  keyword: function (r) {
    const t = "" + r;
    const index = this.index;
    const n = index + t.length;
    if (R(this.source, index, n) !== t) {
      throw i_SyntaxError("Failed to parse value at: " + index);
    }
    return this.node(0, r, index, n);
  },
  skip: function (r, t) {
    for (const e = this.source; t < e.length && M(r, O(e, t)); t++);
    return t;
  },
  until: function (r, t) {
    t = this.skip(N, t);
    const e = O(this.source, t);
    for (let n = 0; n < r.length; n++) {
      if (r[n] === e) {
        return t;
      }
    }
    throw i_SyntaxError('Unexpected character: "' + e + '" at: ' + t);
  },
};
const forced = g(function () {
  let r;
  const t = "9007199254740993";
  w(t, function (t, e, n) {
    r = n.source;
  });
  return r !== t;
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
    parse: function (r, t) {
      if (V && !c(t)) {
        return w(r);
      }
      return F(r, t);
    },
  },
);
