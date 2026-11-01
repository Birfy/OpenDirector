import n from "./module-O9.js";
const o = /[^\0-\u007E]/;
const i = /[.\u3002\uFF0E\uFF61]/g;
const a = "Overflow: input needs wider integers to process";
const u = n(i.exec);
const h = n("".charCodeAt);
const l = n([].join);
const v = n([].push);
const p = n("".replace);
const d = n("".split);
const g = n("".toLowerCase);
const y = (t) => {
  const r = [];
  for (let e = 0, n = t.length; e < n;) {
    const o = h(t, e++);
    if (o >= 55296 && o <= 56319 && e < n) {
      const i = h(t, e++);
      if ((64512 & i) == 56320) {
        v(r, ((1023 & o) << 10) + (1023 & i) + 65536);
      } else {
        v(r, o);
        e--;
      }
    } else {
      v(r, o);
    }
  }
  return r;
};
const b = (t) => t + 22 + 75 * (t < 26);
const m = (t, r, e) => {
  let n = 0;
  t = e ? Math.floor(t / 700) : t >> 1;
  for (t += Math.floor(t / r); t > 455;) {
    t = Math.floor(t / 35);
    n += 36;
  }
  return Math.floor(n + (36 * t) / (t + 38));
};
const A = (t) => {
  let r;
  let e;
  const n = [];
  const length = (t = y(t)).length;
  let i = 128;
  let u = 0;
  let h = 72;
  for (r = 0; r < t.length; r++) {
    if ((e = t[r]) < 128) {
      v(n, String.fromCharCode(e));
    }
  }
  const n_length = n.length;
  let d = n_length;
  for (n_length && v(n, "-"); d < length;) {
    let g = 2147483647;
    for (r = 0; r < t.length; r++) {
      if ((e = t[r]) >= i && e < g) {
        g = e;
      }
    }
    const A = d + 1;
    if (g - i > Math.floor((2147483647 - u) / A)) {
      throw RangeError(a);
    }
    u += (g - i) * A;
    i = g;
    for (r = 0; r < t.length; r++) {
      if ((e = t[r]) < i && ++u > 2147483647) {
        throw RangeError(a);
      }
      if (e === i) {
        let x = u;
        let w = 36;
        while (true) {
          const S = w <= h ? 1 : w >= h + 26 ? 26 : w - h;
          if (x < S) {
            break;
          }
          const E = x - S;
          const O = 36 - S;
          v(n, String.fromCharCode(b(S + (E % O))));
          x = Math.floor(E / O);
          w += 36;
        }
        v(n, String.fromCharCode(b(x)));
        h = m(u, A, d === n_length);
        u = 0;
        d++;
      }
    }
    u++;
    i++;
  }
  return l(n, "");
};
export default function (t) {
  let r;
  let e;
  const n = [];
  const a = d(p(g(t), i, "."), ".");
  for (r = 0; r < a.length; r++) {
    v(n, u(o, (e = a[r])) ? "xn--" + A(e) : e);
  }
  return l(n, ".");
}
