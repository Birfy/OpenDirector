import n from "g";
import i from "F";
import a from "u";
import o from "Y";
import s from "o";
import A from "p3";
import c from "r";
import u from "N";
import l from "DN";
import h from "h";
import f from "BC";
import g from "OG";
import d from "Id";
import p from "VV";
import m from "T8";
import y from "rz";
const a_JSON = a.JSON;
const a_Number = a.Number;
const a_SyntaxError = a.SyntaxError;
const w = a_JSON && a_JSON.parse;
const C = o("Object", "keys");
const S = s("".charAt);
const E = s("".slice);
const k = s(/./.exec);
const D = s([].push);
const x = /^\d$/;
const F = /^[1-9]$/;
const Q = /^(?:-|\d)$/;
const N = /^[\t\n\r ]$/;
const R = (t, e) => {
  const r = new T((t = f(t)), 0);
  const n = r.parse();
  const n_value = n.value;
  const a = r.skip(N, n.end);
  if (a < t.length) {
    throw a_SyntaxError(
      'Unexpected extra character: "' +
        S(t, a) +
        '" after the parsed data at: ' +
        a,
    );
  }
  if (c(e)) {
    return K(
      {
        "": n_value,
      },
      "",
      e,
      n,
    );
  }
  return n_value;
};
var K = (t, e, r, n) => {
  let i;
  let a;
  let o;
  let s;
  let c;
  const f = t[e];
  const d = n && f === n.value;
  const p =
    d && typeof n.source === "string"
      ? {
          source: n.source,
        }
      : {};
  if (u(f)) {
    const m = l(f);
    const y = d ? n.nodes : m ? [] : {};
    if (m) {
      i = y.length;
      o = g(f);
      for (s = 0; s < o; s++) {
        G(f, s, K(f, "" + s, r, s < i ? y[s] : undefined));
      }
    } else {
      o = g((a = C(f)));
      for (s = 0; s < o; s++) {
        G(f, (c = a[s]), K(f, c, r, h(y, c) ? y[c] : undefined));
      }
    }
  }
  return A(r, t, e, f, p);
};
var G = (t, e, r) => {
  if (i) {
    const n = Object.getOwnPropertyDescriptor(t, e);
    if (n && !n.configurable) {
      return;
    }
  }
  if (r === undefined) {
    delete t[e];
  } else {
    d(t, e, r);
  }
};
const O = function (t, e, r, n) {
  this.value = t;
  this.end = e;
  this.source = r;
  this.nodes = n;
};
var T = function (t, e) {
  this.source = t;
  this.index = e;
};
T.prototype = {
  fork: function (t) {
    return new T(this.source, t);
  },
  parse: function () {
    const source = this.source;
    const e = this.skip(N, this.index);
    const r = this.fork(e);
    const n = S(source, e);
    if (k(Q, n)) {
      return r.number();
    }
    switch (n) {
      case "{":
        return r.object();
      case "[":
        return r.array();
      case '"':
        return r.string();
      case "t":
        return r.keyword(true);
      case "f":
        return r.keyword(false);
      case "n":
        return r.keyword(null);
    }
    throw a_SyntaxError('Unexpected character: "' + n + '" at: ' + e);
  },
  node: function (t, e, r, n, i) {
    return new O(e, n, t ? null : E(this.source, r, n), i);
  },
  object: function () {
    for (
      var t = this.source, e = this.index + 1, r = false, n = {}, i = {};
      e < t.length;
    ) {
      if (S(t, (e = this.until(['"', "}"], e))) === "}" && !r) {
        e++;
        break;
      }
      let a = this.fork(e).string();
      const o = a.value;
      e = a.end;
      e = this.until([":"], e) + 1;
      e = this.skip(N, e);
      d(i, o, (a = this.fork(e).parse()));
      d(n, o, a.value);
      const s = S(t, (e = this.until([",", "}"], a.end)));
      if (s === ",") {
        r = true;
        e++;
      } else if (s === "}") {
        e++;
        break;
      }
    }
    return this.node(1, n, this.index, e, i);
  },
  array: function () {
    for (
      var t = this.source, e = this.index + 1, r = false, n = [], i = [];
      e < t.length;
    ) {
      if (S(t, (e = this.skip(N, e))) === "]" && !r) {
        e++;
        break;
      }
      const a = this.fork(e).parse();
      D(i, a);
      D(n, a.value);
      if (S(t, (e = this.until([",", "]"], a.end))) === ",") {
        r = true;
        e++;
      } else if (S(t, e) === "]") {
        e++;
        break;
      }
    }
    return this.node(1, n, this.index, e, i);
  },
  string: function () {
    const index = this.index;
    const e = m(this.source, this.index + 1);
    return this.node(0, e.value, index, e.end);
  },
  number: function () {
    const source = this.source;
    const index = this.index;
    let r = index;
    if (S(source, r) === "-") {
      r++;
    }
    if (S(source, r) === "0") {
      r++;
    } else if (k(F, S(source, r))) {
      r = this.skip(x, ++r);
    } else {
      throw a_SyntaxError("Failed to parse number at: " + r);
    }
    if (S(source, r) === ".") {
      r = this.skip(x, ++r);
    }
    if (
      (S(source, r) === "e" || S(source, r) === "E") &&
      ((S(source, ++r) === "+" || S(source, r) === "-") && r++,
      r === (r = this.skip(x, r)))
    ) {
      throw a_SyntaxError("Failed to parse number's exponent value at: " + r);
    }
    return this.node(0, a_Number(E(source, index, r)), index, r);
  },
  keyword: function (t) {
    const e = "" + t;
    const index = this.index;
    const n = index + e.length;
    if (E(this.source, index, n) !== e) {
      throw a_SyntaxError("Failed to parse value at: " + index);
    }
    return this.node(0, t, index, n);
  },
  skip: function (t, e) {
    for (const r = this.source; e < r.length && k(t, S(r, e)); e++);
    return e;
  },
  until: function (t, e) {
    e = this.skip(N, e);
    const r = S(this.source, e);
    for (let n = 0; n < t.length; n++) {
      if (t[n] === r) {
        return e;
      }
    }
    throw a_SyntaxError('Unexpected character: "' + r + '" at: ' + e);
  },
};
const forced = p(function () {
  let t;
  const e = "9007199254740993";
  w(e, function (e, r, n) {
    t = n.source;
  });
  return t !== e;
});
const U =
  y &&
  !p(function () {
    return 1 / w("-0 	") != -Infinity;
  });
n(
  {
    target: "JSON",
    stat: true,
    forced,
  },
  {
    parse: function (t, e) {
      if (U && !c(e)) {
        return w(t);
      }
      return R(t, e);
    },
  },
);
