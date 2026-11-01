import n from "./module-Xy_2_9.js";
import o from "./module-M_2_9.js";
import i from "./module-O9_9.js";
import a from "./module-xg_10.js";
import s from "./module-X_10.js";
import u from "./module-d_10.js";
import c from "./module-Y_10.js";
import f from "./module-Mi_9.js";
import l from "./module-V6_10.js";
import h from "./module-dV_9.js";
import v from "./module-ng_10.js";
import d from "./module-vj_10.js";
import p from "./module-Gl_9.js";
import g from "./module-C_10.js";
import y from "./module-S5_9.js";
import m from "./module-uc_9.js";
const b = require("./module-lN_9.js")("replace");
const x = i([].concat);
const E = i([].push);
const S = i("".indexOf);
const O = i("".slice);
const _ = "a".replace(/./, "$0") === "$0";
const R = !!/./[b] && /./[b]("a", "$0") === "";
a(
  "replace",
  function (t, e, r) {
    const i = R ? "$" : "$0";
    return [
      function (t, r) {
        const n = d(this);
        const i = f(t) ? undefined : g(t, b);
        if (i) {
          return o(i, t, n, r);
        }
        return o(e, v(n), t, r);
      },
      function (t, o) {
        const a = u(this);
        const s = v(t);
        if (typeof o === "string" && S(o, i) === -1 && S(o, "$<") === -1) {
          const f = r(e, a, s, o);
          if (f.done) {
            return f.value;
          }
        }
        const d = c(o);
        if (!d) {
          o = v(o);
        }
        const a_global = a.global;
        if (a_global) {
          T = a.unicode;
          a.lastIndex = 0;
        }
        for (var b = []; (N = m(a, s)) !== null && (E(b, N), a_global);) {
          if (v(N[0]) === "") {
            a.lastIndex = p(s, h(a.lastIndex), T);
          }
        }
        let _ = "";
        let R = 0;
        for (let M = 0; M < b.length; M++) {
          let I;
          var T;
          let k;
          for (
            var N = b[M],
              j = v(N[0]),
              P = Math.max(Math.min(l(N.index), s.length), 0),
              D = [],
              F = 1;
            F < N.length;
            F++
          ) {
            E(D, (I = N[F]) === undefined ? I : String(I));
          }
          const C = N.groups;
          if (d) {
            const L = x([j], D, P, s);
            if (C !== undefined) {
              E(L, C);
            }
            k = v(n(o, undefined, L));
          } else {
            k = y(j, s, P, D, C, o);
          }
          if (P >= R) {
            _ += O(s, R, P) + k;
            R = P + j.length;
          }
        }
        return _ + O(s, R);
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
    !_ ||
    R,
);
