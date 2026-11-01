import n from "./module-A_10.js";
import o from "./module-r9_9.js";
import i from "./module-J_10.js";
import a from "./module-YR_9.js";
import s from "./module-O9_9.js";
import u from "./module-M_2_9.js";
import c from "./module-Y_10.js";
import f from "./module-y_2_9.js";
import l from "./module-EV_10.js";
import h from "./module-D_2_9.js";
import v from "./module-ng_10.js";
import d from "./module-F4_10.js";
import p from "./module-er_9.js";
import g from "./module-X_10.js";
import y from "./module-zq_2_9.js";
import m from "./module-eZ_9.js";
const i_JSON = i.JSON;
const i_Number = i.Number;
const i_SyntaxError = i.SyntaxError;
const x = i_JSON && i_JSON.parse;
const E = a("Object", "keys");
const O = s("".charAt);
const _ = s("".slice);
const R = s(/./.exec);
const M = s([].push);
const I = /^\d$/;
const T = /^[1-9]$/;
const k = /^(?:-|\d)$/;
const N = /^[\t\n\r ]$/;
const j = (t, e) => {
  const r = new C((t = v(t)), 0);
  const n = r.parse();
  const n_value = n.value;
  const i = r.skip(N, n.end);
  if (i < t.length) {
    throw i_SyntaxError(
      'Unexpected extra character: "' +
        O(t, i) +
        '" after the parsed data at: ' +
        i,
    );
  }
  if (c(e)) {
    return P(
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
var P = (t, e, r, n) => {
  let o;
  let i;
  let a;
  let s;
  let c;
  const v = t[e];
  const p = n && v === n.value;
  const g =
    p && typeof n.source === "string"
      ? {
          source: n.source,
        }
      : {};
  if (f(v)) {
    const y = l(v);
    const m = p ? n.nodes : y ? [] : {};
    if (y) {
      o = m.length;
      a = d(v);
      for (s = 0; s < a; s++) {
        D(v, s, P(v, "" + s, r, s < o ? m[s] : undefined));
      }
    } else {
      a = d((i = E(v)));
      for (s = 0; s < a; s++) {
        D(v, (c = i[s]), P(v, c, r, h(m, c) ? m[c] : undefined));
      }
    }
  }
  return u(r, t, e, v, g);
};
var D = (t, e, r) => {
  if (o) {
    const n = Object.getOwnPropertyDescriptor(t, e);
    if (n && !n.configurable) {
      return;
    }
  }
  if (r === undefined) {
    delete t[e];
  } else {
    p(t, e, r);
  }
};
const F = function (t, e, r, n) {
  this.value = t;
  this.end = e;
  this.source = r;
  this.nodes = n;
};
var C = function (t, e) {
  this.source = t;
  this.index = e;
};
C.prototype = {
  fork: function (t) {
    return new C(this.source, t);
  },
  parse: function () {
    const source = this.source;
    const e = this.skip(N, this.index);
    const r = this.fork(e);
    const n = O(source, e);
    if (R(k, n)) {
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
    throw i_SyntaxError('Unexpected character: "' + n + '" at: ' + e);
  },
  node: function (t, e, r, n, o) {
    return new F(e, n, t ? null : _(this.source, r, n), o);
  },
  object: function () {
    for (
      var t = this.source, e = this.index + 1, r = false, n = {}, o = {};
      e < t.length;
    ) {
      if (O(t, (e = this.until(['"', "}"], e))) === "}" && !r) {
        e++;
        break;
      }
      let i = this.fork(e).string();
      const a = i.value;
      e = i.end;
      e = this.until([":"], e) + 1;
      e = this.skip(N, e);
      p(o, a, (i = this.fork(e).parse()));
      p(n, a, i.value);
      const s = O(t, (e = this.until([",", "}"], i.end)));
      if (s === ",") {
        r = true;
        e++;
      } else if (s === "}") {
        e++;
        break;
      }
    }
    return this.node(1, n, this.index, e, o);
  },
  array: function () {
    for (
      var t = this.source, e = this.index + 1, r = false, n = [], o = [];
      e < t.length;
    ) {
      if (O(t, (e = this.skip(N, e))) === "]" && !r) {
        e++;
        break;
      }
      const i = this.fork(e).parse();
      M(o, i);
      M(n, i.value);
      if (O(t, (e = this.until([",", "]"], i.end))) === ",") {
        r = true;
        e++;
      } else if (O(t, e) === "]") {
        e++;
        break;
      }
    }
    return this.node(1, n, this.index, e, o);
  },
  string: function () {
    const index = this.index;
    const e = y(this.source, this.index + 1);
    return this.node(0, e.value, index, e.end);
  },
  number: function () {
    const source = this.source;
    const index = this.index;
    let r = index;
    if (O(source, r) === "-") {
      r++;
    }
    if (O(source, r) === "0") {
      r++;
    } else if (R(T, O(source, r))) {
      r = this.skip(I, ++r);
    } else {
      throw i_SyntaxError("Failed to parse number at: " + r);
    }
    if (O(source, r) === ".") {
      r = this.skip(I, ++r);
    }
    if (
      (O(source, r) === "e" || O(source, r) === "E") &&
      ((O(source, ++r) === "+" || O(source, r) === "-") && r++,
      r === (r = this.skip(I, r)))
    ) {
      throw i_SyntaxError("Failed to parse number's exponent value at: " + r);
    }
    return this.node(0, i_Number(_(source, index, r)), index, r);
  },
  keyword: function (t) {
    const e = "" + t;
    const index = this.index;
    const n = index + e.length;
    if (_(this.source, index, n) !== e) {
      throw i_SyntaxError("Failed to parse value at: " + index);
    }
    return this.node(0, t, index, n);
  },
  skip: function (t, e) {
    for (const r = this.source; e < r.length && R(t, O(r, e)); e++);
    return e;
  },
  until: function (t, e) {
    e = this.skip(N, e);
    const r = O(this.source, e);
    for (let n = 0; n < t.length; n++) {
      if (t[n] === r) {
        return e;
      }
    }
    throw i_SyntaxError('Unexpected character: "' + r + '" at: ' + e);
  },
};
const forced = g(function () {
  let t;
  const e = "9007199254740993";
  x(e, function (e, r, n) {
    t = n.source;
  });
  return t !== e;
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
    parse: function (t, e) {
      if (U && !c(e)) {
        return x(t);
      }
      return j(t, e);
    },
  },
);
