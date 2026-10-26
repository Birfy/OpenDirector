import n from "./module-A_24.js";
import o from "./module-TA_23.js";
import i from "./module-YR_23.js";
import a from "./module-X_24.js";
import s from "./module-Za_23.js";
import c from "./module-w_24.js";
import { f as f_1 } from "./module-t_24.js";
import f from "./module-vE_23.js";
import l from "./module-I_24.js";
import h from "./module-D_2_23.js";
import v from "./module-A2_24.js";
import p from "./module-d_24.js";
import d from "./module-ab_23.js";
import g from "./module-Yw_23.js";
import y from "./module-rr_23.js";
import b from "./module-VQ_24.js";
import m from "./module-b_23.js";
import A from "./module-r9_23.js";
import x from "./module-N_23.js";
const w = "DOMException";
const S = "DATA_CLONE_ERR";
const E = i("Error");
const O =
  i(w) ||
  (() => {
    try {
      new (
        i("MessageChannel") || o("worker_threads").MessageChannel
      )().port1.postMessage(new WeakMap());
    } catch (error) {
      if (error.name === S && error.code === 25) {
        return error.constructor;
      }
    }
  })();
const R = O && O.prototype;
const E_prototype = E.prototype;
const m_set = m.set;
const k = m.getterFor(w);
const j = "stack" in E(w);
const T = (t) => {
  if (h(y, t) && y[t].m) {
    return y[t].c;
  }
  return 0;
};
const N = function () {
  v(this, P);
  const arguments_length = arguments.length;
  const message = g(arguments_length < 1 ? undefined : arguments[0]);
  const e = g(arguments_length < 2 ? undefined : arguments[1], "Error");
  const code = T(e);
  m_set(this, {
    type: w,
    name: e,
    message,
    code,
  });
  if (!A) {
    this.name = e;
    this.message = message;
    this.code = code;
  }
  if (j) {
    const o = E(message);
    o.name = w;
    f_1(this, "stack", c(1, b(o.stack, 1)));
  }
};
var P = (N.prototype = s(E_prototype));
const F = (get) => ({
  enumerable: true,
  configurable: true,
  get,
});
const D = (t) =>
  F(function () {
    return k(this)[t];
  });
if (A) {
  l(P, "code", D("code"));
  l(P, "message", D("message"));
  l(P, "name", D("name"));
}
f_1(P, "constructor", c(1, N));
const C = a(function () {
  return !(new O() instanceof E);
});
const L =
  C ||
  a(function () {
    return E_prototype.toString !== d || String(new O(1, 2)) !== "2: 1";
  });
const U =
  C ||
  a(function () {
    return new O(1, "DataCloneError").code !== 25;
  });
const V = C || O[S] !== 25 || R[S] !== 25;
const forced = x ? L || U || V : C;
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
const Y = i(w);
const Y_prototype = Y.prototype;
if (L && (x || O === Y)) {
  f(Y_prototype, "toString", d);
}
if (U && A && O === Y) {
  l(
    Y_prototype,
    "code",
    F(function () {
      return T(p(this).name);
    }),
  );
}
for (const z in y) {
  if (h(y, z)) {
    const W = y[z];
    const X = W.s;
    const G = c(6, W.c);
    if (!h(Y, X)) {
      f_1(Y, X, G);
    }
    if (!h(Y_prototype, X)) {
      f_1(Y_prototype, X, G);
    }
  }
}
