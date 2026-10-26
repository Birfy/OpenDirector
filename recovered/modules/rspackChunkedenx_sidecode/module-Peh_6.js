import n from "./module-A_7.js";
import o from "./module-r9_6.js";
import a from "./module-J_7.js";
import i from "./module-YR_6.js";
import s from "./module-O9_6.js";
import c from "./module-M_2_6.js";
import u from "./module-Y_7.js";
import f from "./module-y_2_6.js";
import l from "./module-EV_7.js";
import h from "./module-D_2_6.js";
import p from "./module-ng_7.js";
import v from "./module-F4_7.js";
import d from "./module-er_6.js";
import g from "./module-X_7.js";
import y from "./module-zq_2_6.js";
import m from "./module-eZ_6.js";
const a_JSON = a.JSON;
const a_Number = a.Number;
const a_SyntaxError = a.SyntaxError;
const x = a_JSON && a_JSON.parse;
const E = i("Object", "keys");
const O = s("".charAt);
const R = s("".slice);
const M = s(/./.exec);
const I = s([].push);
const k = /^\d$/;
const T = /^[1-9]$/;
const j = /^(?:-|\d)$/;
const F = /^[\t\n\r ]$/;
const N = (t, r) => {
  const e = new L((t = p(t)), 0);
  const n = e.parse();
  const n_value = n.value;
  const a = e.skip(F, n.end);
  if (a < t.length) {
    throw a_SyntaxError(
      'Unexpected extra character: "' +
        O(t, a) +
        '" after the parsed data at: ' +
        a,
    );
  }
  if (u(r)) {
    return P(
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
var P = (t, r, e, n) => {
  let o;
  let a;
  let i;
  let s;
  let u;
  const p = t[r];
  const d = n && p === n.value;
  const g =
    d && typeof n.source === "string"
      ? {
          source: n.source,
        }
      : {};
  if (f(p)) {
    const y = l(p);
    const m = d ? n.nodes : y ? [] : {};
    if (y) {
      o = m.length;
      i = v(p);
      for (s = 0; s < i; s++) {
        C(p, s, P(p, "" + s, e, s < o ? m[s] : undefined));
      }
    } else {
      i = v((a = E(p)));
      for (s = 0; s < i; s++) {
        C(p, (u = a[s]), P(p, u, e, h(m, u) ? m[u] : undefined));
      }
    }
  }
  return c(e, t, r, p, g);
};
var C = (t, r, e) => {
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
const D = function (t, r, e, n) {
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
    const r = this.skip(F, this.index);
    const e = this.fork(r);
    const n = O(source, r);
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
    throw a_SyntaxError('Unexpected character: "' + n + '" at: ' + r);
  },
  node: function (t, r, e, n, o) {
    return new D(r, n, t ? null : R(this.source, e, n), o);
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
      let a = this.fork(r).string();
      const i = a.value;
      r = a.end;
      r = this.until([":"], r) + 1;
      r = this.skip(F, r);
      d(o, i, (a = this.fork(r).parse()));
      d(n, i, a.value);
      const s = O(t, (r = this.until([",", "}"], a.end)));
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
      if (O(t, (r = this.skip(F, r))) === "]" && !e) {
        r++;
        break;
      }
      const a = this.fork(r).parse();
      I(o, a);
      I(n, a.value);
      if (O(t, (r = this.until([",", "]"], a.end))) === ",") {
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
    } else if (M(T, O(source, e))) {
      e = this.skip(k, ++e);
    } else {
      throw a_SyntaxError("Failed to parse number at: " + e);
    }
    if (O(source, e) === ".") {
      e = this.skip(k, ++e);
    }
    if (
      (O(source, e) === "e" || O(source, e) === "E") &&
      ((O(source, ++e) === "+" || O(source, e) === "-") && e++,
      e === (e = this.skip(k, e)))
    ) {
      throw a_SyntaxError("Failed to parse number's exponent value at: " + e);
    }
    return this.node(0, a_Number(R(source, index, e)), index, e);
  },
  keyword: function (t) {
    const r = "" + t;
    const index = this.index;
    const n = index + r.length;
    if (R(this.source, index, n) !== r) {
      throw a_SyntaxError("Failed to parse value at: " + index);
    }
    return this.node(0, t, index, n);
  },
  skip: function (t, r) {
    for (const e = this.source; r < e.length && M(t, O(e, r)); r++);
    return r;
  },
  until: function (t, r) {
    r = this.skip(F, r);
    const e = O(this.source, r);
    for (let n = 0; n < t.length; n++) {
      if (t[n] === e) {
        return r;
      }
    }
    throw a_SyntaxError('Unexpected character: "' + e + '" at: ' + r);
  },
};
const forced = g(function () {
  let t;
  const r = "9007199254740993";
  x(r, function (r, e, n) {
    t = n.source;
  });
  return t !== r;
});
const U =
  m &&
  !g(function () {
    return 1 / x("-0 	") != -Infinity;
  });
n(
  {
    target: "JSON",
    stat: true,
    forced,
  },
  {
    parse: function (t, r) {
      if (U && !u(r)) {
        return x(t);
      }
      return N(t, r);
    },
  },
);
