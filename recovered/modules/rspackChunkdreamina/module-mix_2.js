import n from "./module-l.js";
import o from "./module-p3.js";
import i from "./module-o.js";
import a from "./module-v1_2.js";
import s from "./module-VV_4.js";
import u from "./module-IF_2.js";
import c from "./module-r.js";
import f from "./module-D.js";
import l from "./module-Ok_2.js";
import p from "./module-L_2.js";
import h from "./module-BC_2.js";
import v from "./module-H_2.js";
import d from "./module-n4.js";
import g from "./module-T_2.js";
import y from "./module-Zi_4.js";
import m from "./module-Ct_3.js";
const x = require("./module-Nt_3.js")("replace");
const A = i([].concat);
const E = i([].push);
const j = i("".indexOf);
const I = i("".slice);
const R = "a".replace(/./, "$0") === "$0";
const z = !!/./[x] && /./[x]("a", "$0") === "";
a(
  "replace",
  function (e, t, r) {
    const i = z ? "$" : "$0";
    return [
      function (e, r) {
        const n = v(this);
        const i = f(e) ? undefined : g(e, x);
        if (i) {
          return o(i, e, n, r);
        }
        return o(t, h(n), e, r);
      },
      function (e, o) {
        const a = u(this);
        const s = h(e);
        if (typeof o === "string" && j(o, i) === -1 && j(o, "$<") === -1) {
          const f = r(t, a, s, o);
          if (f.done) {
            return f.value;
          }
        }
        const v = c(o);
        if (!v) {
          o = h(o);
        }
        const a_global = a.global;
        if (a_global) {
          _ = a.unicode;
          a.lastIndex = 0;
        }
        for (var x = []; (k = m(a, s)) !== null && (E(x, k), a_global);) {
          if (h(k[0]) === "") {
            a.lastIndex = d(s, p(a.lastIndex), _);
          }
        }
        let R = "";
        let z = 0;
        for (let O = 0; O < x.length; O++) {
          let S;
          var _;
          let T;
          for (
            var k = x[O],
              M = h(k[0]),
              B = Math.max(Math.min(l(k.index), s.length), 0),
              q = [],
              N = 1;
            N < k.length;
            N++
          ) {
            E(q, (S = k[N]) === undefined ? S : String(S));
          }
          const P = k.groups;
          if (v) {
            const F = A([M], q, B, s);
            if (P !== undefined) {
              E(F, P);
            }
            T = h(n(o, undefined, F));
          } else {
            T = y(M, s, B, q, P, o);
          }
          if (B >= z) {
            R += I(s, z, B) + T;
            z = B + M.length;
          }
        }
        return R + I(s, z);
      },
    ];
  },
  !!s(function () {
    const e = /./;
    e.exec = function () {
      const e = [];
      e.groups = {
        a: "7",
      };
      return e;
    };
    return "".replace(e, "$<a>") !== "7";
  }) ||
    !R ||
    z,
);
