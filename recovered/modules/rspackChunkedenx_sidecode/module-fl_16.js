import n from "./module-Xy_2_16.js";
import o from "./module-M_2_16.js";
import i from "./module-O9_16.js";
import a from "./module-xg_17.js";
import s from "./module-X_17.js";
import u from "./module-d_17.js";
import c from "./module-Y_17.js";
import f from "./module-Mi_16.js";
import l from "./module-V6_17.js";
import h from "./module-dV_16.js";
import v from "./module-ng_17.js";
import p from "./module-vj_17.js";
import d from "./module-Gl_16.js";
import g from "./module-C_17.js";
import y from "./module-S5_16.js";
import m from "./module-uc_16.js";
const b = require("./module-lN_16.js")("replace");
const w = i([].concat);
const S = i([].push);
const E = i("".indexOf);
const O = i("".slice);
const R = "a".replace(/./, "$0") === "$0";
const M = !!/./[b] && /./[b]("a", "$0") === "";
a(
  "replace",
  function (t, r, e) {
    const i = M ? "$" : "$0";
    return [
      function (t, e) {
        const n = p(this);
        const i = f(t) ? undefined : g(t, b);
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
        for (var b = []; (N = m(a, s)) !== null && (S(b, N), a_global);) {
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
              F = v(N[0]),
              P = Math.max(Math.min(l(N.index), s.length), 0),
              D = [],
              C = 1;
            C < N.length;
            C++
          ) {
            S(D, (k = N[C]) === undefined ? k : String(k));
          }
          const L = N.groups;
          if (p) {
            const _ = w([F], D, P, s);
            if (L !== undefined) {
              S(_, L);
            }
            j = v(n(o, undefined, _));
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
