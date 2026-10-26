import n from "./module-A_12.js";
import o from "./module-TA_11.js";
import i from "./module-YR_11.js";
import a from "./module-X_12.js";
import s from "./module-Za_11.js";
import u from "./module-w_12.js";
import { f as f_1 } from "./module-t_12.js";
import f from "./module-vE_11.js";
import h from "./module-I_12.js";
import l from "./module-D_2_11.js";
import v from "./module-A2_12.js";
import p from "./module-d_12.js";
import d from "./module-ab_11.js";
import g from "./module-Yw_11.js";
import y from "./module-rr_11.js";
import b from "./module-VQ_12.js";
import m from "./module-b_11.js";
import A from "./module-r9_11.js";
import x from "./module-N_11.js";
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
const T = (r) => {
  if (l(y, r) && y[r].m) {
    return y[r].c;
  }
  return 0;
};
const N = function () {
  v(this, F);
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
    f_1(this, "stack", u(1, b(o.stack, 1)));
  }
};
var F = (N.prototype = s(E_prototype));
const P = (get) => ({
  enumerable: true,
  configurable: true,
  get,
});
const C = (r) =>
  P(function () {
    return k(this)[r];
  });
if (A) {
  h(F, "code", C("code"));
  h(F, "message", C("message"));
  h(F, "name", C("name"));
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
  h(
    B_prototype,
    "code",
    P(function () {
      return T(p(this).name);
    }),
  );
}
for (const X in y) {
  if (l(y, X)) {
    const G = y[X];
    const z = G.s;
    const _ = u(6, G.c);
    if (!l(B, z)) {
      f_1(B, z, _);
    }
    if (!l(B_prototype, z)) {
      f_1(B_prototype, z, _);
    }
  }
}
