import n from "./module-Xy_2_15.js";
import o from "./module-M_2_15.js";
import i from "./module-O9_15.js";
import a from "./module-xg_16.js";
import s from "./module-X_16.js";
import u from "./module-d_16.js";
import c from "./module-Y_16.js";
import f from "./module-Mi_15.js";
import h from "./module-V6_16.js";
import l from "./module-dV_15.js";
import v from "./module-ng_16.js";
import p from "./module-vj_16.js";
import d from "./module-Gl_15.js";
import g from "./module-C_16.js";
import y from "./module-S5_15.js";
import b from "./module-uc_15.js";
const m = require("./module-lN_15.js")("replace");
const w = i([].concat);
const S = i([].push);
const E = i("".indexOf);
const O = i("".slice);
const R = "a".replace(/./, "$0") === "$0";
const M = !!/./[m] && /./[m]("a", "$0") === "";
a(
  "replace",
  function (r, t, e) {
    const i = M ? "$" : "$0";
    return [
      function (r, e) {
        const n = p(this);
        const i = f(r) ? undefined : g(r, m);
        if (i) {
          return o(i, r, n, e);
        }
        return o(t, v(n), r, e);
      },
      function (r, o) {
        const a = u(this);
        const s = v(r);
        if (typeof o === "string" && E(o, i) === -1 && E(o, "$<") === -1) {
          const f = e(t, a, s, o);
          if (f.done) {
            return f.value;
          }
        }
        const p = c(o);
        if (!p) {
          o = v(o);
        }
        const a_global = a.global;
        if (a_global) {
          T = a.unicode;
          a.lastIndex = 0;
        }
        for (var m = []; (N = b(a, s)) !== null && (S(m, N), a_global);) {
          if (v(N[0]) === "") {
            a.lastIndex = d(s, l(a.lastIndex), T);
          }
        }
        let R = "";
        let M = 0;
        for (let I = 0; I < m.length; I++) {
          let k;
          var T;
          let j;
          for (
            var N = m[I],
              F = v(N[0]),
              P = Math.max(Math.min(h(N.index), s.length), 0),
              D = [],
              C = 1;
            C < N.length;
            C++
          ) {
            S(D, (k = N[C]) === undefined ? k : String(k));
          }
          const L = N.groups;
          if (p) {
            const U = w([F], D, P, s);
            if (L !== undefined) {
              S(U, L);
            }
            j = v(n(o, undefined, U));
          } else {
            j = y(F, s, P, D, L, o);
          }
          if (P >= M) {
            R += O(s, M, P) + j;
            M = P + F.length;
          }
        }
        return R + O(s, M);
      },
    ];
  },
  !!s(function () {
    const r = /./;
    r.exec = function () {
      const r = [];
      r.groups = {
        a: "7",
      };
      return r;
    };
    return "".replace(r, "$<a>") !== "7";
  }) ||
    !R ||
    M,
);
