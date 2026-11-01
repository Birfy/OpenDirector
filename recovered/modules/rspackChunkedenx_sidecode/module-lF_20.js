import n from "./module-A_21.js";
import o from "./module-TA_20.js";
import i from "./module-YR_20.js";
import a from "./module-X_21.js";
import s from "./module-Za_20.js";
import c from "./module-w_21.js";
import { f as f_1 } from "./module-t_21.js";
import f from "./module-vE_20.js";
import l from "./module-I_21.js";
import h from "./module-D_2_20.js";
import v from "./module-A2_21.js";
import p from "./module-d_21.js";
import d from "./module-ab_20.js";
import g from "./module-Yw_20.js";
import y from "./module-rr_20.js";
import m from "./module-VQ_21.js";
import b from "./module-b_20.js";
import w from "./module-r9_20.js";
import A from "./module-N_20.js";
const x = "DOMException";
const S = "DATA_CLONE_ERR";
const E = i("Error");
const O =
  i(x) ||
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
const _ = b.getterFor(x);
const k = "stack" in E(x);
const T = (t) => {
  if (h(y, t) && y[t].m) {
    return y[t].c;
  }
  return 0;
};
const j = function () {
  v(this, N);
  const arguments_length = arguments.length;
  const message = g(arguments_length < 1 ? undefined : arguments[0]);
  const e = g(arguments_length < 2 ? undefined : arguments[1], "Error");
  const code = T(e);
  b_set(this, {
    type: x,
    name: e,
    message,
    code,
  });
  if (!w) {
    this.name = e;
    this.message = message;
    this.code = code;
  }
  if (k) {
    const o = E(message);
    o.name = x;
    f_1(this, "stack", c(1, m(o.stack, 1)));
  }
};
var N = (j.prototype = s(E_prototype));
const D = (get) => ({
  enumerable: true,
  configurable: true,
  get,
});
const P = (t) =>
  D(function () {
    return _(this)[t];
  });
if (w) {
  l(N, "code", P("code"));
  l(N, "message", P("message"));
  l(N, "name", P("name"));
}
f_1(N, "constructor", c(1, j));
const C = a(function () {
  return !(new O() instanceof E);
});
const F =
  C ||
  a(function () {
    return E_prototype.toString !== d || String(new O(1, 2)) !== "2: 1";
  });
const L =
  C ||
  a(function () {
    return new O(1, "DataCloneError").code !== 25;
  });
const U = C || O[S] !== 25 || R[S] !== 25;
const forced = A ? F || L || U : C;
n(
  {
    global: true,
    constructor: true,
    forced,
  },
  {
    DOMException: forced ? j : O,
  },
);
const B = i(x);
const B_prototype = B.prototype;
if (F && (A || O === B)) {
  f(B_prototype, "toString", d);
}
if (L && w && O === B) {
  l(
    B_prototype,
    "code",
    D(function () {
      return T(p(this).name);
    }),
  );
}
for (const Y in y) {
  if (h(y, Y)) {
    const W = y[Y];
    const q = W.s;
    const H = c(6, W.c);
    if (!h(B, q)) {
      f_1(B, q, H);
    }
    if (!h(B_prototype, q)) {
      f_1(B_prototype, q, H);
    }
  }
}
