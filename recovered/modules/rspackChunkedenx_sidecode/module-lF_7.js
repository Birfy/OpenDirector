import n from "./module-A_8.js";
import o from "./module-TA_7.js";
import i from "./module-YR_7.js";
import a from "./module-X_8.js";
import s from "./module-Za_7.js";
import u from "./module-w_8.js";
import { f as f_1 } from "./module-t_8.js";
import f from "./module-vE_7.js";
import l from "./module-I_8.js";
import h from "./module-D_2_7.js";
import v from "./module-A2_8.js";
import p from "./module-d_8.js";
import d from "./module-ab_7.js";
import g from "./module-Yw_7.js";
import y from "./module-rr_7.js";
import m from "./module-VQ_8.js";
import b from "./module-b_7.js";
import A from "./module-r9_7.js";
import w from "./module-N_7.js";
const x = "DOMException";
const E = "DATA_CLONE_ERR";
const S = i("Error");
const O =
  i(x) ||
  (() => {
    try {
      new (
        i("MessageChannel") || o("worker_threads").MessageChannel
      )().port1.postMessage(new WeakMap());
    } catch (error) {
      if (error.name === E && error.code === 25) {
        return error.constructor;
      }
    }
  })();
const R = O && O.prototype;
const S_prototype = S.prototype;
const b_set = b.set;
const k = b.getterFor(x);
const T = "stack" in S(x);
const j = (r) => {
  if (h(y, r) && y[r].m) {
    return y[r].c;
  }
  return 0;
};
const N = function () {
  v(this, P);
  const arguments_length = arguments.length;
  const message = g(arguments_length < 1 ? undefined : arguments[0]);
  const e = g(arguments_length < 2 ? undefined : arguments[1], "Error");
  const code = j(e);
  b_set(this, {
    type: x,
    name: e,
    message,
    code,
  });
  if (!A) {
    this.name = e;
    this.message = message;
    this.code = code;
  }
  if (T) {
    const o = S(message);
    o.name = x;
    f_1(this, "stack", u(1, m(o.stack, 1)));
  }
};
var P = (N.prototype = s(S_prototype));
const F = (get) => ({
  enumerable: true,
  configurable: true,
  get,
});
const C = (r) =>
  F(function () {
    return k(this)[r];
  });
if (A) {
  l(P, "code", C("code"));
  l(P, "message", C("message"));
  l(P, "name", C("name"));
}
f_1(P, "constructor", u(1, N));
const D = a(function () {
  return !(new O() instanceof S);
});
const L =
  D ||
  a(function () {
    return S_prototype.toString !== d || String(new O(1, 2)) !== "2: 1";
  });
const U =
  D ||
  a(function () {
    return new O(1, "DataCloneError").code !== 25;
  });
const W = D || O[E] !== 25 || R[E] !== 25;
const forced = w ? L || U || W : D;
n(
  {
    global: true,
    constructor: true,
    forced,
  },
  {
    DOMException: forced ? N : O,
  },
);
const Y = i(x);
const Y_prototype = Y.prototype;
if (L && (w || O === Y)) {
  f(Y_prototype, "toString", d);
}
if (U && A && O === Y) {
  l(
    Y_prototype,
    "code",
    F(function () {
      return j(p(this).name);
    }),
  );
}
for (const B in y) {
  if (h(y, B)) {
    const X = y[B];
    const G = X.s;
    const J = u(6, X.c);
    if (!h(Y, G)) {
      f_1(Y, G, J);
    }
    if (!h(Y_prototype, G)) {
      f_1(Y_prototype, G, J);
    }
  }
}
