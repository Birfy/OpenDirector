import n from "./module-Xy_2.js";
import o from "./module-M_2.js";
import i from "./module-O9.js";
import a from "./module-xg.js";
import s from "./module-X.js";
import u from "./module-d.js";
import c from "./module-Y.js";
import f from "./module-Mi.js";
import h from "./module-V6.js";
import l from "./module-dV.js";
import v from "./module-ng.js";
import p from "./module-vj.js";
import d from "./module-Gl.js";
import g from "./module-C.js";
import y from "./module-S5.js";
import b from "./module-uc.js";
const m = require("./module-lN.js")("replace");
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
        const a = u(this);
        const s = v(t);
        if (typeof o === "string" && E(o, i) === -1 && E(o, "$<") === -1) {
          const f = e(r, a, s, o);
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
              C = [],
              D = 1;
            D < N.length;
            D++
          ) {
            S(C, (k = N[D]) === undefined ? k : String(k));
          }
          const L = N.groups;
          if (p) {
            const U = w([F], C, P, s);
            if (L !== undefined) {
              S(U, L);
            }
            j = v(n(o, undefined, U));
          } else {
            j = y(F, s, P, C, L, o);
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
