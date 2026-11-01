import n from "./module-Xy_2_23.js";
import o from "./module-M_2_23.js";
import i from "./module-O9_23.js";
import a from "./module-xg_24.js";
import s from "./module-X_24.js";
import c from "./module-d_24.js";
import u from "./module-Y_24.js";
import f from "./module-Mi_23.js";
import l from "./module-V6_24.js";
import h from "./module-dV_23.js";
import v from "./module-ng_24.js";
import p from "./module-vj_24.js";
import d from "./module-Gl_23.js";
import g from "./module-C_24.js";
import y from "./module-S5_23.js";
import b from "./module-uc_23.js";
const m = require("./module-lN_23.js")("replace");
const w = i([].concat);
const S = i([].push);
const E = i("".indexOf);
const O = i("".slice);
const R = "a".replace(/./, "$0") === "$0";
const M = !!/./[m] && /./[m]("a", "$0") === "";
a(
  "replace",
  function (t, r, e) {
    const i = M ? "$" : "$0";
    return [
      function (t, e) {
        const n = p(this);
        const i = f(t) ? undefined : g(t, m);
        if (i) {
          return o(i, t, n, e);
        }
        return o(r, v(n), t, e);
      },
      function (t, o) {
        const a = c(this);
        const s = v(t);
        if (typeof o === "string" && E(o, i) === -1 && E(o, "$<") === -1) {
          const f = e(r, a, s, o);
          if (f.done) {
            return f.value;
          }
        }
        const p = u(o);
        if (!p) {
          o = v(o);
        }
        const a_global = a.global;
        if (a_global) {
          j = a.unicode;
          a.lastIndex = 0;
        }
        for (var m = []; (N = b(a, s)) !== null && (S(m, N), a_global);) {
          if (v(N[0]) === "") {
            a.lastIndex = d(s, h(a.lastIndex), j);
          }
        }
        let R = "";
        let M = 0;
        for (let I = 0; I < m.length; I++) {
          let k;
          var j;
          let T;
          for (
            var N = m[I],
              P = v(N[0]),
              F = Math.max(Math.min(l(N.index), s.length), 0),
              D = [],
              C = 1;
            C < N.length;
            C++
          ) {
            S(D, (k = N[C]) === undefined ? k : String(k));
          }
          const L = N.groups;
          if (p) {
            const U = w([P], D, F, s);
            if (L !== undefined) {
              S(U, L);
            }
            T = v(n(o, undefined, U));
          } else {
            T = y(P, s, F, D, L, o);
          }
          if (F >= M) {
            R += O(s, M, F) + T;
            M = F + P.length;
          }
        }
        return R + O(s, M);
      },
    ];
  },
  !!s(function () {
    const t = /./;
    t.exec = function () {
      const t = [];
      t.groups = {
        a: "7",
      };
      return t;
    };
    return "".replace(t, "$<a>") !== "7";
  }) ||
    !R ||
    M,
);
