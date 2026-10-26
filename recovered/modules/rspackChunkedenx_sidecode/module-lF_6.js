import n from "./module-A_7.js";
import o from "./module-TA_6.js";
import a from "./module-YR_6.js";
import i from "./module-X_7.js";
import s from "./module-Za_6.js";
import c from "./module-w_7.js";
import { f as f_1 } from "./module-t_7.js";
import f from "./module-vE_6.js";
import l from "./module-I_7.js";
import h from "./module-D_2_6.js";
import p from "./module-A2_7.js";
import v from "./module-d_7.js";
import d from "./module-ab_6.js";
import g from "./module-Yw_6.js";
import y from "./module-rr_6.js";
import m from "./module-VQ_7.js";
import b from "./module-b_6.js";
import A from "./module-r9_6.js";
import w from "./module-N_6.js";
const x = "DOMException";
const E = "DATA_CLONE_ERR";
const S = a("Error");
const O =
  a(x) ||
  (() => {
    try {
      new (
        a("MessageChannel") || o("worker_threads").MessageChannel
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
const j = (t) => {
  if (h(y, t) && y[t].m) {
    return y[t].c;
  }
  return 0;
};
const F = function () {
  p(this, N);
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
    f_1(this, "stack", c(1, m(o.stack, 1)));
  }
};
var N = (F.prototype = s(S_prototype));
const P = (get) => ({
  enumerable: true,
  configurable: true,
  get,
});
const C = (t) =>
  P(function () {
    return k(this)[t];
  });
if (A) {
  l(N, "code", C("code"));
  l(N, "message", C("message"));
  l(N, "name", C("name"));
}
f_1(N, "constructor", c(1, F));
const D = i(function () {
  return !(new O() instanceof S);
});
const L =
  D ||
  i(function () {
    return S_prototype.toString !== d || String(new O(1, 2)) !== "2: 1";
  });
const _ =
  D ||
  i(function () {
    return new O(1, "DataCloneError").code !== 25;
  });
const U = D || O[E] !== 25 || R[E] !== 25;
const forced = w ? L || _ || U : D;
n(
  {
    global: true,
    constructor: true,
    forced,
  },
  {
    DOMException: forced ? F : O,
  },
);
const W = a(x);
const W_prototype = W.prototype;
if (L && (w || O === W)) {
  f(W_prototype, "toString", d);
}
if (_ && A && O === W) {
  l(
    W_prototype,
    "code",
    P(function () {
      return j(v(this).name);
    }),
  );
}
for (const B in y) {
  if (h(y, B)) {
    const z = y[B];
    const X = z.s;
    const H = c(6, z.c);
    if (!h(W, X)) {
      f_1(W, X, H);
    }
    if (!h(W_prototype, X)) {
      f_1(W_prototype, X, H);
    }
  }
}
