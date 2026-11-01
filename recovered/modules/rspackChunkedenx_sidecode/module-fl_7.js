import n from "./module-Xy_2_7.js";
import o from "./module-M_2_7.js";
import i from "./module-O9_7.js";
import a from "./module-xg_8.js";
import s from "./module-X_8.js";
import u from "./module-d_8.js";
import c from "./module-Y_8.js";
import f from "./module-Mi_7.js";
import l from "./module-V6_8.js";
import h from "./module-dV_7.js";
import v from "./module-ng_8.js";
import p from "./module-vj_8.js";
import d from "./module-Gl_7.js";
import g from "./module-C_8.js";
import y from "./module-S5_7.js";
import m from "./module-uc_7.js";
const b = require("./module-lN_7.js")("replace");
const x = i([].concat);
const E = i([].push);
const S = i("".indexOf);
const O = i("".slice);
const R = "a".replace(/./, "$0") === "$0";
const M = !!/./[b] && /./[b]("a", "$0") === "";
a(
  "replace",
  function (r, t, e) {
    const i = M ? "$" : "$0";
    return [
      function (r, e) {
        const n = p(this);
        const i = f(r) ? undefined : g(r, b);
        if (i) {
          return o(i, r, n, e);
        }
        return o(t, v(n), r, e);
      },
      function (r, o) {
        const a = u(this);
        const s = v(r);
        if (typeof o === "string" && S(o, i) === -1 && S(o, "$<") === -1) {
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
        for (var b = []; (N = m(a, s)) !== null && (E(b, N), a_global);) {
          if (v(N[0]) === "") {
            a.lastIndex = d(s, h(a.lastIndex), T);
          }
        }
        let R = "";
        let M = 0;
        for (let I = 0; I < b.length; I++) {
          let k;
          var T;
          let j;
          for (
            var N = b[I],
              P = v(N[0]),
              F = Math.max(Math.min(l(N.index), s.length), 0),
              C = [],
              D = 1;
            D < N.length;
            D++
          ) {
            E(C, (k = N[D]) === undefined ? k : String(k));
          }
          const L = N.groups;
          if (p) {
            const U = x([P], C, F, s);
            if (L !== undefined) {
              E(U, L);
            }
            j = v(n(o, undefined, U));
          } else {
            j = y(P, s, F, C, L, o);
          }
          if (F >= M) {
            R += O(s, M, F) + j;
            M = F + P.length;
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
