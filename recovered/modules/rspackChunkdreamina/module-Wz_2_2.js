import n from "g";
import i from "cG";
import a from "Y";
import o from "VV";
import s from "lY";
import A from "M";
import { f as f_1 } from "R";
import u from "xX";
import l from "Tg";
import h from "h";
import f from "i9";
import g from "IF";
import d from "XJ";
import p from "Gq";
import m from "LP";
import y from "pv";
import b from "G";
import v from "F";
import I from "K";
const w = "DOMException";
const C = "DATA_CLONE_ERR";
const B = a("Error");
const S =
  a(w) ||
  (() => {
    try {
      new (
        a("MessageChannel") || i("worker_threads").MessageChannel
      )().port1.postMessage(new WeakMap());
    } catch (error) {
      if (error.name === C && error.code === 25) {
        return error.constructor;
      }
    }
  })();
const E = S && S.prototype;
const B_prototype = B.prototype;
const b_set = b.set;
const x = b.getterFor(w);
const F = "stack" in B(w);
const Q = (t) => {
  if (h(m, t) && m[t].m) {
    return m[t].c;
  }
  return 0;
};
const N = function () {
  f(this, R);
  const arguments_length = arguments.length;
  const message = p(arguments_length < 1 ? undefined : arguments[0]);
  const r = p(arguments_length < 2 ? undefined : arguments[1], "Error");
  const code = Q(r);
  b_set(this, {
    type: w,
    name: r,
    message,
    code,
  });
  if (!v) {
    this.name = r;
    this.message = message;
    this.code = code;
  }
  if (F) {
    const i = B(message);
    i.name = w;
    f_1(this, "stack", A(1, y(i.stack, 1)));
  }
};
var R = (N.prototype = s(B_prototype));
const K = (get) => ({
  enumerable: true,
  configurable: true,
  get,
});
const G = (t) =>
  K(function () {
    return x(this)[t];
  });
if (v) {
  l(R, "code", G("code"));
  l(R, "message", G("message"));
  l(R, "name", G("name"));
}
f_1(R, "constructor", A(1, N));
const O = o(function () {
  return !(new S() instanceof B);
});
const T =
  O ||
  o(function () {
    return B_prototype.toString !== d || String(new S(1, 2)) !== "2: 1";
  });
const Y =
  O ||
  o(function () {
    return new S(1, "DataCloneError").code !== 25;
  });
const U = O || S[C] !== 25 || E[C] !== 25;
const forced = I ? T || Y || U : O;
n(
  {
    global: true,
    constructor: true,
    forced,
  },
  {
    DOMException: forced ? N : S,
  },
);
const M = a(w);
const M_prototype = M.prototype;
if (T && (I || S === M)) {
  u(M_prototype, "toString", d);
}
if (Y && v && S === M) {
  l(
    M_prototype,
    "code",
    K(function () {
      return Q(g(this).name);
    }),
  );
}
for (const L in m) {
  if (h(m, L)) {
    const H = m[L];
    const Z = H.s;
    const j = A(6, H.c);
    if (!h(M, Z)) {
      f_1(M, Z, j);
    }
    if (!h(M_prototype, Z)) {
      f_1(M_prototype, Z, j);
    }
  }
}
