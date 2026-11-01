import n from "./module-A_16.js";
import o from "./module-TA_15.js";
import i from "./module-YR_15.js";
import a from "./module-X_16.js";
import s from "./module-Za_15.js";
import u from "./module-w_16.js";
import { f as f_1 } from "./module-t_16.js";
import f from "./module-vE_15.js";
import h from "./module-I_16.js";
import l from "./module-D_2_15.js";
import v from "./module-A2_16.js";
import p from "./module-d_16.js";
import d from "./module-ab_15.js";
import g from "./module-Yw_15.js";
import y from "./module-rr_15.js";
import b from "./module-VQ_16.js";
import m from "./module-b_15.js";
import A from "./module-r9_15.js";
import x from "./module-N_15.js";
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
const j = (r) => {
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
const D = (r) =>
  P(function () {
    return k(this)[r];
  });
if (A) {
  h(F, "code", D("code"));
  h(F, "message", D("message"));
  h(F, "name", D("name"));
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
      return j(p(this).name);
    }),
  );
}
for (const W in y) {
  if (l(y, W)) {
    const _ = y[W];
    const G = _.s;
    const z = u(6, _.c);
    if (!l(B, G)) {
      f_1(B, G, z);
    }
    if (!l(B_prototype, G)) {
      f_1(B_prototype, G, z);
    }
  }
}
