import n from "./module-A_10.js";
import o from "./module-TA_9.js";
import i from "./module-YR_9.js";
import a from "./module-X_10.js";
import s from "./module-Za_9.js";
import u from "./module-w_10.js";
import { f as f_1 } from "./module-t_10.js";
import f from "./module-vE_9.js";
import l from "./module-I_10.js";
import h from "./module-D_2_9.js";
import v from "./module-A2_10.js";
import d from "./module-d_10.js";
import p from "./module-ab_9.js";
import g from "./module-Yw_9.js";
import y from "./module-rr_9.js";
import m from "./module-VQ_10.js";
import b from "./module-b_9.js";
import w from "./module-r9_9.js";
import A from "./module-N_9.js";
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
const _ = O && O.prototype;
const S_prototype = S.prototype;
const b_set = b.set;
const I = b.getterFor(x);
const T = "stack" in S(x);
const k = (t) => {
  if (h(y, t) && y[t].m) {
    return y[t].c;
  }
  return 0;
};
const N = function () {
  v(this, j);
  const arguments_length = arguments.length;
  const message = g(arguments_length < 1 ? undefined : arguments[0]);
  const r = g(arguments_length < 2 ? undefined : arguments[1], "Error");
  const code = k(r);
  b_set(this, {
    type: x,
    name: r,
    message,
    code,
  });
  if (!w) {
    this.name = r;
    this.message = message;
    this.code = code;
  }
  if (T) {
    const o = S(message);
    o.name = x;
    f_1(this, "stack", u(1, m(o.stack, 1)));
  }
};
var j = (N.prototype = s(S_prototype));
const P = (get) => ({
  enumerable: true,
  configurable: true,
  get,
});
const D = (t) =>
  P(function () {
    return I(this)[t];
  });
if (w) {
  l(j, "code", D("code"));
  l(j, "message", D("message"));
  l(j, "name", D("name"));
}
f_1(j, "constructor", u(1, N));
const F = a(function () {
  return !(new O() instanceof S);
});
const C =
  F ||
  a(function () {
    return S_prototype.toString !== p || String(new O(1, 2)) !== "2: 1";
  });
const L =
  F ||
  a(function () {
    return new O(1, "DataCloneError").code !== 25;
  });
const U = F || O[E] !== 25 || _[E] !== 25;
const forced = A ? C || L || U : F;
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
const V = i(x);
const V_prototype = V.prototype;
if (C && (A || O === V)) {
  f(V_prototype, "toString", p);
}
if (L && w && O === V) {
  l(
    V_prototype,
    "code",
    P(function () {
      return k(d(this).name);
    }),
  );
}
for (const W in y) {
  if (h(y, W)) {
    const X = y[W];
    const G = X.s;
    const z = u(6, X.c);
    if (!h(V, G)) {
      f_1(V, G, z);
    }
    if (!h(V_prototype, G)) {
      f_1(V_prototype, G, z);
    }
  }
}
