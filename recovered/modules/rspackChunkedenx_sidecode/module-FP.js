import n from "./module-Xy_2.js";
import o from "./module-M_2.js";
import i from "./module-O9.js";
import a from "./module-xg.js";
import s from "./module-d.js";
import u from "./module-Mi.js";
import c from "./module-Su.js";
import f from "./module-vj.js";
import h from "./module-V0.js";
import l from "./module-Gl.js";
import v from "./module-dV.js";
import p from "./module-ng.js";
import d from "./module-C.js";
import g from "./module-wL.js";
import y from "./module-uc.js";
import b from "./module-X7.js";
import m from "./module-Tc.js";
import A from "./module-X.js";
const m_UNSUPPORTED_Y = m.UNSUPPORTED_Y;
const push = [].push;
const E = i(/./.exec);
const O = i(push);
const R = i("".slice);
a(
  "split",
  function (t, r, e) {
    let i;
    i =
      "abbc".split(/(b)*/)[1] === "c" ||
      "test".split(/(?:)/, -1).length !== 4 ||
      "ab".split(/(?:ab)*/).length !== 2 ||
      ".".split(/(.?)(.?)/).length !== 4 ||
      ".".split(/()()/).length > 1 ||
      "".split(/.?/).length
        ? function (t, e) {
            let i;
            let a;
            let s;
            const u = p(f(this));
            const h = e === undefined ? 4294967295 : e >>> 0;
            if (h === 0) {
              return [];
            }
            if (t === undefined) {
              return [u];
            }
            if (!c(t)) {
              return o(r, u, t, h);
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
          ? function (t, e) {
              if (t === undefined && e === 0) {
                return [];
              }
              return o(r, this, t, e);
            }
          : r;
    return [
      function (r, e) {
        const n = f(this);
        const a = u(r) ? undefined : d(r, t);
        if (a) {
          return o(a, r, n, e);
        }
        return o(i, p(n), r, e);
      },
      function (t, n) {
        const o = s(this);
        const a = p(t);
        const u = e(i, o, a, n, i !== r);
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
