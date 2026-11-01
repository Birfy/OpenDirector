import n from "./module-A.js";
import o from "./module-TA.js";
import i from "./module-YR.js";
import a from "./module-X.js";
import s from "./module-Za.js";
import u from "./module-w.js";
import { f as f_1 } from "./module-t.js";
import f from "./module-vE.js";
import h from "./module-I.js";
import l from "./module-D_2.js";
import v from "./module-A2.js";
import p from "./module-d.js";
import d from "./module-ab.js";
import g from "./module-Yw.js";
import y from "./module-rr.js";
import b from "./module-VQ.js";
import m from "./module-b.js";
import A from "./module-r9.js";
import x from "./module-N.js";
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
      return j(p(this).name);
    }),
  );
}
for (const X in y) {
  if (l(y, X)) {
    const G = y[X];
    const J = G.s;
    const _ = u(6, G.c);
    if (!l(B, J)) {
      f_1(B, J, _);
    }
    if (!l(B_prototype, J)) {
      f_1(B_prototype, J, _);
    }
  }
}
