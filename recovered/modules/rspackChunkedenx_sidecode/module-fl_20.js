import n from "./module-Xy_2_20.js";
import o from "./module-M_2_20.js";
import i from "./module-O9_20.js";
import a from "./module-xg_21.js";
import s from "./module-X_21.js";
import c from "./module-d_21.js";
import u from "./module-Y_21.js";
import f from "./module-Mi_20.js";
import l from "./module-V6_21.js";
import h from "./module-dV_20.js";
import v from "./module-ng_21.js";
import p from "./module-vj_21.js";
import d from "./module-Gl_20.js";
import g from "./module-C_21.js";
import y from "./module-S5_20.js";
import m from "./module-uc_20.js";
const b = require("./module-lN_20.js")("replace");
const x = i([].concat);
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
          k = a.unicode;
          a.lastIndex = 0;
        }
        for (var b = []; (j = m(a, s)) !== null && (S(b, j), a_global);) {
          if (v(j[0]) === "") {
            a.lastIndex = d(s, h(a.lastIndex), k);
          }
        }
        let R = "";
        let M = 0;
        for (let I = 0; I < b.length; I++) {
          let _;
          var k;
          let T;
          for (
            var j = b[I],
              N = v(j[0]),
              D = Math.max(Math.min(l(j.index), s.length), 0),
              P = [],
              C = 1;
            C < j.length;
            C++
          ) {
            S(P, (_ = j[C]) === undefined ? _ : String(_));
          }
          const F = j.groups;
          if (p) {
            const L = x([N], P, D, s);
            if (F !== undefined) {
              S(L, F);
            }
            T = v(n(o, undefined, L));
          } else {
            T = y(N, s, D, P, F, o);
          }
          if (D >= M) {
            R += O(s, M, D) + T;
            M = D + N.length;
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
