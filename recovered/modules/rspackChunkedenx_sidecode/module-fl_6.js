import n from "./module-Xy_2_6.js";
import o from "./module-M_2_6.js";
import a from "./module-O9_6.js";
import i from "./module-xg_7.js";
import s from "./module-X_7.js";
import c from "./module-d_7.js";
import u from "./module-Y_7.js";
import f from "./module-Mi_6.js";
import l from "./module-V6_7.js";
import h from "./module-dV_6.js";
import p from "./module-ng_7.js";
import v from "./module-vj_7.js";
import d from "./module-Gl_6.js";
import g from "./module-C_7.js";
import y from "./module-S5_6.js";
import m from "./module-uc_6.js";
const b = require("./module-lN_6.js")("replace");
const x = a([].concat);
const E = a([].push);
const S = a("".indexOf);
const O = a("".slice);
const R = "a".replace(/./, "$0") === "$0";
const M = !!/./[b] && /./[b]("a", "$0") === "";
i(
  "replace",
  function (t, r, e) {
    const a = M ? "$" : "$0";
    return [
      function (t, e) {
        const n = v(this);
        const a = f(t) ? undefined : g(t, b);
        if (a) {
          return o(a, t, n, e);
        }
        return o(r, p(n), t, e);
      },
      function (t, o) {
        const i = c(this);
        const s = p(t);
        if (typeof o === "string" && S(o, a) === -1 && S(o, "$<") === -1) {
          const f = e(r, i, s, o);
          if (f.done) {
            return f.value;
          }
        }
        const v = u(o);
        if (!v) {
          o = p(o);
        }
        const i_global = i.global;
        if (i_global) {
          T = i.unicode;
          i.lastIndex = 0;
        }
        for (var b = []; (F = m(i, s)) !== null && (E(b, F), i_global);) {
          if (p(F[0]) === "") {
            i.lastIndex = d(s, h(i.lastIndex), T);
          }
        }
        let R = "";
        let M = 0;
        for (let I = 0; I < b.length; I++) {
          let k;
          var T;
          let j;
          for (
            var F = b[I],
              N = p(F[0]),
              P = Math.max(Math.min(l(F.index), s.length), 0),
              C = [],
              D = 1;
            D < F.length;
            D++
          ) {
            E(C, (k = F[D]) === undefined ? k : String(k));
          }
          const L = F.groups;
          if (v) {
            const _ = x([N], C, P, s);
            if (L !== undefined) {
              E(_, L);
            }
            j = p(n(o, undefined, _));
          } else {
            j = y(N, s, P, C, L, o);
          }
          if (P >= M) {
            R += O(s, M, P) + j;
            M = P + N.length;
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
