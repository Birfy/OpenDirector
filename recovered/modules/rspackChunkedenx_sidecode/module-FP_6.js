import n from "./module-Xy_2_6.js";
import o from "./module-M_2_6.js";
import a from "./module-O9_6.js";
import i from "./module-xg_7.js";
import s from "./module-d_7.js";
import c from "./module-Mi_6.js";
import u from "./module-Su_6.js";
import f from "./module-vj_7.js";
import l from "./module-V0_6.js";
import h from "./module-Gl_6.js";
import p from "./module-dV_6.js";
import v from "./module-ng_7.js";
import d from "./module-C_7.js";
import g from "./module-wL_6.js";
import y from "./module-uc_6.js";
import m from "./module-X7_6.js";
import b from "./module-Tc_6.js";
import A from "./module-X_7.js";
const b_UNSUPPORTED_Y = b.UNSUPPORTED_Y;
const push = [].push;
const S = a(/./.exec);
const O = a(push);
const R = a("".slice);
i(
  "split",
  function (t, r, e) {
    let a;
    a =
      "abbc".split(/(b)*/)[1] === "c" ||
      "test".split(/(?:)/, -1).length !== 4 ||
      "ab".split(/(?:ab)*/).length !== 2 ||
      ".".split(/(.?)(.?)/).length !== 4 ||
      ".".split(/()()/).length > 1 ||
      "".split(/.?/).length
        ? function (t, e) {
            let a;
            let i;
            let s;
            const c = v(f(this));
            const l = e === undefined ? 4294967295 : e >>> 0;
            if (l === 0) {
              return [];
            }
            if (t === undefined) {
              return [c];
            }
            if (!u(t)) {
              return o(r, c, t, l);
            }
            for (
              var h = [],
                p =
                  (t.ignoreCase ? "i" : "") +
                  (t.multiline ? "m" : "") +
                  (t.unicode ? "u" : "") +
                  (t.sticky ? "y" : ""),
                d = 0,
                y = RegExp(t.source, p + "g");
              (a = o(m, y, c)) &&
              (!((i = y.lastIndex) > d) ||
                (O(h, R(c, d, a.index)),
                a.length > 1 && a.index < c.length && n(push, h, g(a, 1)),
                (s = a[0].length),
                (d = i),
                !(h.length >= l)));
            ) {
              if (y.lastIndex === a.index) {
                y.lastIndex++;
              }
            }
            if (d === c.length) {
              if (s || !S(y, "")) {
                O(h, "");
              }
            } else {
              O(h, R(c, d));
            }
            if (h.length > l) {
              return g(h, 0, l);
            }
            return h;
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
        const i = c(r) ? undefined : d(r, t);
        if (i) {
          return o(i, r, n, e);
        }
        return o(a, v(n), r, e);
      },
      function (t, n) {
        const o = s(this);
        const i = v(t);
        const c = e(a, o, i, n, a !== r);
        if (c.done) {
          return c.value;
        }
        const u = l(o, RegExp);
        const o_unicode = o.unicode;
        const d =
          (o.ignoreCase ? "i" : "") +
          (o.multiline ? "m" : "") +
          (o.unicode ? "u" : "") +
          (b_UNSUPPORTED_Y ? "g" : "y");
        const g = new u(b_UNSUPPORTED_Y ? "^(?:" + o.source + ")" : o, d);
        const m = n === undefined ? 4294967295 : n >>> 0;
        if (m === 0) {
          return [];
        }
        if (i.length === 0) {
          if (y(g, i) === null) {
            return [i];
          }
          return [];
        }
        let b = 0;
        for (var A = 0, E = []; A < i.length;) {
          g.lastIndex = b_UNSUPPORTED_Y ? 0 : A;
          let S;
          const M = y(g, b_UNSUPPORTED_Y ? R(i, A) : i);
          if (
            M === null ||
            (S = Math.min(
              p(g.lastIndex + (b_UNSUPPORTED_Y ? A : 0)),
              i.length,
            )) === b
          ) {
            A = h(i, A, o_unicode);
          } else {
            O(E, R(i, b, A));
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
        O(E, R(i, b));
        return E;
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
  b_UNSUPPORTED_Y,
);
