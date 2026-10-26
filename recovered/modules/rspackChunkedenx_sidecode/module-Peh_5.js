import n from "./module-A_6.js";
import i from "./module-r9_5.js";
import o from "./module-J_6.js";
import s from "./module-YR_5.js";
import a from "./module-O9_5.js";
import u from "./module-M_2_5.js";
import c from "./module-Y_6.js";
import f from "./module-y_2_5.js";
import h from "./module-EV_6.js";
import l from "./module-D_2_5.js";
import v from "./module-ng_6.js";
import p from "./module-F4_6.js";
import d from "./module-er_5.js";
import g from "./module-X_6.js";
import y from "./module-zq_2_5.js";
import b from "./module-eZ_5.js";
const o_JSON = o.JSON;
const o_Number = o.Number;
const o_SyntaxError = o.SyntaxError;
const w = o_JSON && o_JSON.parse;
const S = s("Object", "keys");
const O = a("".charAt);
const R = a("".slice);
const M = a(/./.exec);
const I = a([].push);
const k = /^\d$/;
const T = /^[1-9]$/;
const j = /^(?:-|\d)$/;
const N = /^[\t\n\r ]$/;
const F = (t, r) => {
  const e = new L((t = v(t)), 0);
  const n = e.parse();
  const n_value = n.value;
  const o = e.skip(N, n.end);
  if (o < t.length) {
    throw o_SyntaxError(
      'Unexpected extra character: "' +
        O(t, o) +
        '" after the parsed data at: ' +
        o,
    );
  }
  if (c(r)) {
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
  let i;
  let o;
  let s;
  let a;
  let c;
  const v = t[r];
  const d = n && v === n.value;
  const g =
    d && typeof n.source === "string"
      ? {
          source: n.source,
        }
      : {};
  if (f(v)) {
    const y = h(v);
    const b = d ? n.nodes : y ? [] : {};
    if (y) {
      i = b.length;
      s = p(v);
      for (a = 0; a < s; a++) {
        C(v, a, P(v, "" + a, e, a < i ? b[a] : undefined));
      }
    } else {
      s = p((o = S(v)));
      for (a = 0; a < s; a++) {
        C(v, (c = o[a]), P(v, c, e, l(b, c) ? b[c] : undefined));
      }
    }
  }
  return u(e, t, r, v, g);
};
var C = (t, r, e) => {
  if (i) {
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
    const r = this.skip(N, this.index);
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
    throw o_SyntaxError('Unexpected character: "' + n + '" at: ' + r);
  },
  node: function (t, r, e, n, i) {
    return new D(r, n, t ? null : R(this.source, e, n), i);
  },
  object: function () {
    for (
      var t = this.source, r = this.index + 1, e = false, n = {}, i = {};
      r < t.length;
    ) {
      if (O(t, (r = this.until(['"', "}"], r))) === "}" && !e) {
        r++;
        break;
      }
      let o = this.fork(r).string();
      const s = o.value;
      r = o.end;
      r = this.until([":"], r) + 1;
      r = this.skip(N, r);
      d(i, s, (o = this.fork(r).parse()));
      d(n, s, o.value);
      const a = O(t, (r = this.until([",", "}"], o.end)));
      if (a === ",") {
        e = true;
        r++;
      } else if (a === "}") {
        r++;
        break;
      }
    }
    return this.node(1, n, this.index, r, i);
  },
  array: function () {
    for (
      var t = this.source, r = this.index + 1, e = false, n = [], i = [];
      r < t.length;
    ) {
      if (O(t, (r = this.skip(N, r))) === "]" && !e) {
        r++;
        break;
      }
      const o = this.fork(r).parse();
      I(i, o);
      I(n, o.value);
      if (O(t, (r = this.until([",", "]"], o.end))) === ",") {
        e = true;
        r++;
      } else if (O(t, r) === "]") {
        r++;
        break;
      }
    }
    return this.node(1, n, this.index, r, i);
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
      throw o_SyntaxError("Failed to parse number at: " + e);
    }
    if (O(source, e) === ".") {
      e = this.skip(k, ++e);
    }
    if (
      (O(source, e) === "e" || O(source, e) === "E") &&
      ((O(source, ++e) === "+" || O(source, e) === "-") && e++,
      e === (e = this.skip(k, e)))
    ) {
      throw o_SyntaxError("Failed to parse number's exponent value at: " + e);
    }
    return this.node(0, o_Number(R(source, index, e)), index, e);
  },
  keyword: function (t) {
    const r = "" + t;
    const index = this.index;
    const n = index + r.length;
    if (R(this.source, index, n) !== r) {
      throw o_SyntaxError("Failed to parse value at: " + index);
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
    throw o_SyntaxError('Unexpected character: "' + e + '" at: ' + r);
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
      if (V && !c(r)) {
        return w(t);
      }
      return F(t, r);
    },
  },
);
