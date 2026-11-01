import n from "./module-Xy_2_17.js";
import o from "./module-M_2_17.js";
import i from "./module-O9_17.js";
import a from "./module-xg_18.js";
import s from "./module-d_18.js";
import u from "./module-Mi_17.js";
import c from "./module-Su_17.js";
import f from "./module-vj_18.js";
import h from "./module-V0_17.js";
import l from "./module-Gl_17.js";
import v from "./module-dV_17.js";
import p from "./module-ng_18.js";
import d from "./module-C_18.js";
import g from "./module-wL_17.js";
import y from "./module-uc_17.js";
import b from "./module-X7_17.js";
import m from "./module-Tc_17.js";
import A from "./module-X_18.js";
const m_UNSUPPORTED_Y = m.UNSUPPORTED_Y;
const push = [].push;
const E = i(/./.exec);
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
            const h = e === undefined ? 4294967295 : e >>> 0;
            if (h === 0) {
              return [];
            }
            if (r === undefined) {
              return [u];
            }
            if (!c(r)) {
              return o(t, u, r, h);
            }
            for (
              var l = [],
                v =
                  (r.ignoreCase ? "i" : "") +
                  (r.multiline ? "m" : "") +
                  (r.unicode ? "u" : "") +
                  (r.sticky ? "y" : ""),
                d = 0,
                y = RegExp(r.source, v + "g");
              (i = o(b, y, u)) &&
              (!((a = y.lastIndex) > d) ||
                (O(l, R(u, d, i.index)),
                i.length > 1 && i.index < u.length && n(push, l, g(i, 1)),
                (s = i[0].length),
                (d = a),
                !(l.length >= h)));
            ) {
              if (y.lastIndex === i.index) {
                y.lastIndex++;
              }
            }
            if (d === u.length) {
              if (s || !E(y, "")) {
                O(l, "");
              }
            } else {
              O(l, R(u, d));
            }
            if (l.length > h) {
              return g(l, 0, h);
            }
            return l;
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
        const c = h(o, RegExp);
        const o_unicode = o.unicode;
        const d =
          (o.ignoreCase ? "i" : "") +
          (o.multiline ? "m" : "") +
          (o.unicode ? "u" : "") +
          (m_UNSUPPORTED_Y ? "g" : "y");
        const g = new c(m_UNSUPPORTED_Y ? "^(?:" + o.source + ")" : o, d);
        const b = n === undefined ? 4294967295 : n >>> 0;
        if (b === 0) {
          return [];
        }
        if (a.length === 0) {
          if (y(g, a) === null) {
            return [a];
          }
          return [];
        }
        let m = 0;
        for (var A = 0, S = []; A < a.length;) {
          g.lastIndex = m_UNSUPPORTED_Y ? 0 : A;
          let E;
          const M = y(g, m_UNSUPPORTED_Y ? R(a, A) : a);
          if (
            M === null ||
            (E = Math.min(
              v(g.lastIndex + (m_UNSUPPORTED_Y ? A : 0)),
              a.length,
            )) === m
          ) {
            A = l(a, A, o_unicode);
          } else {
            O(S, R(a, m, A));
            if (S.length === b) {
              return S;
            }
            for (let I = 1; I <= M.length - 1; I++) {
              O(S, M[I]);
              if (S.length === b) {
                return S;
              }
            }
            m = E;
            A = E;
          }
        }
        O(S, R(a, m));
        return S;
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
  m_UNSUPPORTED_Y,
);
