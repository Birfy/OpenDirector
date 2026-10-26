import n from "./module-A_17.js";
import o from "./module-TA_16.js";
import i from "./module-YR_16.js";
import a from "./module-X_17.js";
import s from "./module-Za_16.js";
import u from "./module-w_17.js";
import { f as f_1 } from "./module-t_17.js";
import f from "./module-vE_16.js";
import l from "./module-I_17.js";
import h from "./module-D_2_16.js";
import v from "./module-A2_17.js";
import p from "./module-d_17.js";
import d from "./module-ab_16.js";
import g from "./module-Yw_16.js";
import y from "./module-rr_16.js";
import m from "./module-VQ_17.js";
import b from "./module-b_16.js";
import A from "./module-r9_16.js";
import x from "./module-N_16.js";
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
const b_set = b.set;
const k = b.getterFor(w);
const T = "stack" in E(w);
const j = (t) => {
  if (h(y, t) && y[t].m) {
    return y[t].c;
  }
  return 0;
};
const N = function () {
  v(this, F);
  const arguments_length = arguments.length;
  const message = g(arguments_length < 1 ? undefined : arguments[0]);
  const e = g(arguments_length < 2 ? undefined : arguments[1], "Error");
  const code = j(e);
  b_set(this, {
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
  if (T) {
    const o = E(message);
    o.name = w;
    f_1(this, "stack", u(1, m(o.stack, 1)));
  }
};
var F = (N.prototype = s(E_prototype));
const P = (get) => ({
  enumerable: true,
  configurable: true,
  get,
});
const D = (t) =>
  P(function () {
    return k(this)[t];
  });
if (A) {
  l(F, "code", D("code"));
  l(F, "message", D("message"));
  l(F, "name", D("name"));
}
f_1(F, "constructor", u(1, N));
const C = a(function () {
  return !(new O() instanceof E);
});
const L =
  C ||
  a(function () {
    return E_prototype.toString !== d || String(new O(1, 2)) !== "2: 1";
  });
const _ =
  C ||
  a(function () {
    return new O(1, "DataCloneError").code !== 25;
  });
const U = C || O[S] !== 25 || R[S] !== 25;
const forced = x ? L || _ || U : C;
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
if (_ && A && O === Y) {
  l(
    Y_prototype,
    "code",
    P(function () {
      return j(p(this).name);
    }),
  );
}
for (const X in y) {
  if (h(y, X)) {
    const W = y[X];
    const G = W.s;
    const z = u(6, W.c);
    if (!h(Y, G)) {
      f_1(Y, G, z);
    }
    if (!h(Y_prototype, G)) {
      f_1(Y_prototype, G, z);
    }
  }
}
