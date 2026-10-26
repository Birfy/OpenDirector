import n from "./module-A_23.js";
import i from "./module-TA_22.js";
import o from "./module-YR_22.js";
import s from "./module-X_23.js";
import a from "./module-Za_22.js";
import u from "./module-w_23.js";
import { f as f_1 } from "./module-t_23.js";
import f from "./module-vE_22.js";
import h from "./module-I_23.js";
import l from "./module-D_2_22.js";
import v from "./module-A2_23.js";
import p from "./module-d_23.js";
import d from "./module-ab_22.js";
import g from "./module-Yw_22.js";
import y from "./module-rr_22.js";
import b from "./module-VQ_23.js";
import m from "./module-b_22.js";
import A from "./module-r9_22.js";
import x from "./module-N_22.js";
const w = "DOMException";
const S = "DATA_CLONE_ERR";
const E = o("Error");
const O =
  o(w) ||
  (() => {
    try {
      new (
        o("MessageChannel") || i("worker_threads").MessageChannel
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
  if (l(y, t) && y[t].m) {
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
    const i = E(message);
    i.name = w;
    f_1(this, "stack", u(1, b(i.stack, 1)));
  }
};
var F = (N.prototype = a(E_prototype));
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
  h(F, "code", C("code"));
  h(F, "message", C("message"));
  h(F, "name", C("name"));
}
f_1(F, "constructor", u(1, N));
const D = s(function () {
  return !(new O() instanceof E);
});
const L =
  D ||
  s(function () {
    return E_prototype.toString !== d || String(new O(1, 2)) !== "2: 1";
  });
const U =
  D ||
  s(function () {
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
const B = o(w);
const B_prototype = B.prototype;
if (L && (x || O === B)) {
  f(B_prototype, "toString", d);
}
if (U && A && O === B) {
  h(
    B_prototype,
    "code",
    P(function () {
      return j(p(this).name);
    }),
  );
}
for (const W in y) {
  if (l(y, W)) {
    const G = y[W];
    const _ = G.s;
    const z = u(6, G.c);
    if (!l(B, _)) {
      f_1(B, _, z);
    }
    if (!l(B_prototype, _)) {
      f_1(B_prototype, _, z);
    }
  }
}
