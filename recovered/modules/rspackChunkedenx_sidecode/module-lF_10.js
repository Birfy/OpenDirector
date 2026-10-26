import n from "./module-A_11.js";
import o from "./module-TA_10.js";
import i from "./module-YR_10.js";
import a from "./module-X_11.js";
import s from "./module-Za_10.js";
import u from "./module-w_11.js";
import { f as f_1 } from "./module-t_11.js";
import f from "./module-vE_10.js";
import l from "./module-I_11.js";
import h from "./module-D_2_10.js";
import v from "./module-A2_11.js";
import p from "./module-d_11.js";
import d from "./module-ab_10.js";
import g from "./module-Yw_10.js";
import y from "./module-rr_10.js";
import b from "./module-VQ_11.js";
import m from "./module-b_10.js";
import A from "./module-r9_10.js";
import x from "./module-N_10.js";
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
  if (T) {
    const o = E(message);
    o.name = w;
    f_1(this, "stack", u(1, b(o.stack, 1)));
  }
};
var F = (N.prototype = s(E_prototype));
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
  l(F, "code", C("code"));
  l(F, "message", C("message"));
  l(F, "name", C("name"));
}
f_1(F, "constructor", u(1, N));
const D = a(function () {
  return !(new O() instanceof E);
});
const L =
  D ||
  a(function () {
    return E_prototype.toString !== d || String(new O(1, 2)) !== "2: 1";
  });
const U =
  D ||
  a(function () {
    return new O(1, "DataCloneError").code !== 25;
  });
const V = D || O[S] !== 25 || R[S] !== 25;
const forced = x ? L || U || V : D;
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
const B = i(w);
const B_prototype = B.prototype;
if (L && (x || O === B)) {
  f(B_prototype, "toString", d);
}
if (U && A && O === B) {
  l(
    B_prototype,
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
    const J = u(6, W.c);
    if (!h(B, G)) {
      f_1(B, G, J);
    }
    if (!h(B_prototype, G)) {
      f_1(B_prototype, G, J);
    }
  }
}
