import n from "./module-Xy_2_5.js";
import i from "./module-M_2_5.js";
import o from "./module-O9_5.js";
import s from "./module-xg_6.js";
import a from "./module-d_6.js";
import u from "./module-Mi_5.js";
import c from "./module-Su_5.js";
import f from "./module-vj_6.js";
import h from "./module-V0_5.js";
import l from "./module-Gl_5.js";
import v from "./module-dV_5.js";
import p from "./module-ng_6.js";
import d from "./module-C_6.js";
import g from "./module-wL_5.js";
import y from "./module-uc_5.js";
import b from "./module-X7_5.js";
import m from "./module-Tc_5.js";
import A from "./module-X_6.js";
const m_UNSUPPORTED_Y = m.UNSUPPORTED_Y;
const push = [].push;
const E = o(/./.exec);
const O = o(push);
const R = o("".slice);
s(
  "split",
  function (t, r, e) {
    let o;
    o =
      "abbc".split(/(b)*/)[1] === "c" ||
      "test".split(/(?:)/, -1).length !== 4 ||
      "ab".split(/(?:ab)*/).length !== 2 ||
      ".".split(/(.?)(.?)/).length !== 4 ||
      ".".split(/()()/).length > 1 ||
      "".split(/.?/).length
        ? function (t, e) {
            let o;
            let s;
            let a;
            const u = p(f(this));
            const h = e === undefined ? 4294967295 : e >>> 0;
            if (h === 0) {
              return [];
            }
            if (t === undefined) {
              return [u];
            }
            if (!c(t)) {
              return i(r, u, t, h);
            }
            for (
              var l = [],
                v =
                  (t.ignoreCase ? "i" : "") +
                  (t.multiline ? "m" : "") +
                  (t.unicode ? "u" : "") +
                  (t.sticky ? "y" : ""),
                d = 0,
                y = RegExp(t.source, v + "g");
              (o = i(b, y, u)) &&
              (!((s = y.lastIndex) > d) ||
                (O(l, R(u, d, o.index)),
                o.length > 1 && o.index < u.length && n(push, l, g(o, 1)),
                (a = o[0].length),
                (d = s),
                !(l.length >= h)));
            ) {
              if (y.lastIndex === o.index) {
                y.lastIndex++;
              }
            }
            if (d === u.length) {
              if (a || !E(y, "")) {
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
          ? function (t, e) {
              if (t === undefined && e === 0) {
                return [];
              }
              return i(r, this, t, e);
            }
          : r;
    return [
      function (r, e) {
        const n = f(this);
        const s = u(r) ? undefined : d(r, t);
        if (s) {
          return i(s, r, n, e);
        }
        return i(o, p(n), r, e);
      },
      function (t, n) {
        const i = a(this);
        const s = p(t);
        const u = e(o, i, s, n, o !== r);
        if (u.done) {
          return u.value;
        }
        const c = h(i, RegExp);
        const i_unicode = i.unicode;
        const d =
          (i.ignoreCase ? "i" : "") +
          (i.multiline ? "m" : "") +
          (i.unicode ? "u" : "") +
          (m_UNSUPPORTED_Y ? "g" : "y");
        const g = new c(m_UNSUPPORTED_Y ? "^(?:" + i.source + ")" : i, d);
        const b = n === undefined ? 4294967295 : n >>> 0;
        if (b === 0) {
          return [];
        }
        if (s.length === 0) {
          if (y(g, s) === null) {
            return [s];
          }
          return [];
        }
        let m = 0;
        for (var A = 0, S = []; A < s.length;) {
          g.lastIndex = m_UNSUPPORTED_Y ? 0 : A;
          let E;
          const M = y(g, m_UNSUPPORTED_Y ? R(s, A) : s);
          if (
            M === null ||
            (E = Math.min(
              v(g.lastIndex + (m_UNSUPPORTED_Y ? A : 0)),
              s.length,
            )) === m
          ) {
            A = l(s, A, i_unicode);
          } else {
            O(S, R(s, m, A));
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
        O(S, R(s, m));
        return S;
      },
    ];
  },
  !!A(function () {
    const t = /(?:)/;
    const t_exec = t.exec;
    t.exec = function () {
      return t_exec.apply(this, arguments);
    };
    const e = "ab".split(t);
    return e.length !== 2 || e[0] !== "a" || e[1] !== "b";
  }),
  m_UNSUPPORTED_Y,
);
