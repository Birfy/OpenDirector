import n from "./module-Xy_2_8.js";
import i from "./module-M_2_8.js";
import o from "./module-O9_8.js";
import s from "./module-xg_9.js";
import a from "./module-X_9.js";
import u from "./module-d_9.js";
import c from "./module-Y_9.js";
import f from "./module-Mi_8.js";
import h from "./module-V6_9.js";
import l from "./module-dV_8.js";
import v from "./module-ng_9.js";
import p from "./module-vj_9.js";
import d from "./module-Gl_8.js";
import g from "./module-C_9.js";
import y from "./module-S5_8.js";
import b from "./module-uc_8.js";
const m = require("./module-lN_8.js")("replace");
const w = o([].concat);
const S = o([].push);
const E = o("".indexOf);
const O = o("".slice);
const R = "a".replace(/./, "$0") === "$0";
const M = !!/./[m] && /./[m]("a", "$0") === "";
s(
  "replace",
  function (t, r, e) {
    const o = M ? "$" : "$0";
    return [
      function (t, e) {
        const n = p(this);
        const o = f(t) ? undefined : g(t, m);
        if (o) {
          return i(o, t, n, e);
        }
        return i(r, v(n), t, e);
      },
      function (t, i) {
        const s = u(this);
        const a = v(t);
        if (typeof i === "string" && E(i, o) === -1 && E(i, "$<") === -1) {
          const f = e(r, s, a, i);
          if (f.done) {
            return f.value;
          }
        }
        const p = c(i);
        if (!p) {
          i = v(i);
        }
        const s_global = s.global;
        if (s_global) {
          T = s.unicode;
          s.lastIndex = 0;
        }
        for (var m = []; (N = b(s, a)) !== null && (S(m, N), s_global);) {
          if (v(N[0]) === "") {
            s.lastIndex = d(a, l(s.lastIndex), T);
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
              P = Math.max(Math.min(h(N.index), a.length), 0),
              C = [],
              D = 1;
            D < N.length;
            D++
          ) {
            S(C, (k = N[D]) === undefined ? k : String(k));
          }
          const L = N.groups;
          if (p) {
            const U = w([F], C, P, a);
            if (L !== undefined) {
              S(U, L);
            }
            j = v(n(i, undefined, U));
          } else {
            j = y(F, a, P, C, L, i);
          }
          if (P >= M) {
            R += O(a, M, P) + j;
            M = P + F.length;
          }
        }
        return R + O(a, M);
      },
    ];
  },
  !!a(function () {
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
