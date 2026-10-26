import n from "./module-Xy_2_7.js";
import o from "./module-M_2_7.js";
import i from "./module-O9_7.js";
import a from "./module-xg_8.js";
import s from "./module-d_8.js";
import u from "./module-Mi_7.js";
import c from "./module-Su_7.js";
import f from "./module-vj_8.js";
import l from "./module-V0_7.js";
import h from "./module-Gl_7.js";
import v from "./module-dV_7.js";
import p from "./module-ng_8.js";
import d from "./module-C_8.js";
import g from "./module-wL_7.js";
import y from "./module-uc_7.js";
import m from "./module-X7_7.js";
import b from "./module-Tc_7.js";
import A from "./module-X_8.js";
const b_UNSUPPORTED_Y = b.UNSUPPORTED_Y;
const push = [].push;
const S = i(/./.exec);
const O = i(push);
const R = i("".slice);
a(
  "split",
  function (r, t, e) {
    let i;
    i =
      "abbc".split(/(b)*/)[1] === "c" ||
      "test".split(/(?:)/, -1).length !== 4 ||
      "ab".split(/(?:ab)*/).length !== 2 ||
      ".".split(/(.?)(.?)/).length !== 4 ||
      ".".split(/()()/).length > 1 ||
      "".split(/.?/).length
        ? function (r, e) {
            let i;
            let a;
            let s;
            const u = p(f(this));
            const l = e === undefined ? 4294967295 : e >>> 0;
            if (l === 0) {
              return [];
            }
            if (r === undefined) {
              return [u];
            }
            if (!c(r)) {
              return o(t, u, r, l);
            }
            for (
              var h = [],
                v =
                  (r.ignoreCase ? "i" : "") +
                  (r.multiline ? "m" : "") +
                  (r.unicode ? "u" : "") +
                  (r.sticky ? "y" : ""),
                d = 0,
                y = RegExp(r.source, v + "g");
              (i = o(m, y, u)) &&
              (!((a = y.lastIndex) > d) ||
                (O(h, R(u, d, i.index)),
                i.length > 1 && i.index < u.length && n(push, h, g(i, 1)),
                (s = i[0].length),
                (d = a),
                !(h.length >= l)));
            ) {
              if (y.lastIndex === i.index) {
                y.lastIndex++;
              }
            }
            if (d === u.length) {
              if (s || !S(y, "")) {
                O(h, "");
              }
            } else {
              O(h, R(u, d));
            }
            if (h.length > l) {
              return g(h, 0, l);
            }
            return h;
          }
        : "0".split(undefined, 0).length
          ? function (r, e) {
              if (r === undefined && e === 0) {
                return [];
              }
              return o(t, this, r, e);
            }
          : t;
    return [
      function (t, e) {
        const n = f(this);
        const a = u(t) ? undefined : d(t, r);
        if (a) {
          return o(a, t, n, e);
        }
        return o(i, p(n), t, e);
      },
      function (r, n) {
        const o = s(this);
        const a = p(r);
        const u = e(i, o, a, n, i !== t);
        if (u.done) {
          return u.value;
        }
        const c = l(o, RegExp);
        const o_unicode = o.unicode;
        const d =
          (o.ignoreCase ? "i" : "") +
          (o.multiline ? "m" : "") +
          (o.unicode ? "u" : "") +
          (b_UNSUPPORTED_Y ? "g" : "y");
        const g = new c(b_UNSUPPORTED_Y ? "^(?:" + o.source + ")" : o, d);
        const m = n === undefined ? 4294967295 : n >>> 0;
        if (m === 0) {
          return [];
        }
        if (a.length === 0) {
          if (y(g, a) === null) {
            return [a];
          }
          return [];
        }
        let b = 0;
        for (var A = 0, E = []; A < a.length;) {
          g.lastIndex = b_UNSUPPORTED_Y ? 0 : A;
          let S;
          const M = y(g, b_UNSUPPORTED_Y ? R(a, A) : a);
          if (
            M === null ||
            (S = Math.min(
              v(g.lastIndex + (b_UNSUPPORTED_Y ? A : 0)),
              a.length,
            )) === b
          ) {
            A = h(a, A, o_unicode);
          } else {
            O(E, R(a, b, A));
            if (E.length === m) {
              return E;
            }
            for (let I = 1; I <= M.length - 1; I++) {
              O(E, M[I]);
              if (E.length === m) {
                return E;
              }
            }
            b = S;
            A = S;
          }
        }
        O(E, R(a, b));
        return E;
      },
    ];
  },
  !!A(function () {
    const r = /(?:)/;
    const r_exec = r.exec;
    r.exec = function () {
      return r_exec.apply(this, arguments);
    };
    const e = "ab".split(r);
    return e.length !== 2 || e[0] !== "a" || e[1] !== "b";
  }),
  b_UNSUPPORTED_Y,
);
