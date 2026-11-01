import n from "./module-O9_19.js";
const o = /[^\0-\u007E]/;
const i = /[.\u3002\uFF0E\uFF61]/g;
const a = "Overflow: input needs wider integers to process";
const u = n(i.exec);
const l = n("".charCodeAt);
const h = n([].join);
const v = n([].push);
const p = n("".replace);
const d = n("".split);
const g = n("".toLowerCase);
const y = (r) => {
  const t = [];
  for (let e = 0, n = r.length; e < n;) {
    const o = l(r, e++);
    if (o >= 55296 && o <= 56319 && e < n) {
      const i = l(r, e++);
      if ((64512 & i) == 56320) {
        v(t, ((1023 & o) << 10) + (1023 & i) + 65536);
      } else {
        v(t, o);
        e--;
      }
    } else {
      v(t, o);
    }
  }
  return t;
};
const b = (r) => r + 22 + 75 * (r < 26);
const m = (r, t, e) => {
  let n = 0;
  r = e ? Math.floor(r / 700) : r >> 1;
  for (r += Math.floor(r / t); r > 455;) {
    r = Math.floor(r / 35);
    n += 36;
  }
  return Math.floor(n + (36 * r) / (r + 38));
};
const A = (r) => {
  let t;
  let e;
  const n = [];
  const length = (r = y(r)).length;
  let i = 128;
  let u = 0;
  let l = 72;
  for (t = 0; t < r.length; t++) {
    if ((e = r[t]) < 128) {
      v(n, String.fromCharCode(e));
    }
  }
  const n_length = n.length;
  let d = n_length;
  for (n_length && v(n, "-"); d < length;) {
    let g = 2147483647;
    for (t = 0; t < r.length; t++) {
      if ((e = r[t]) >= i && e < g) {
        g = e;
      }
    }
    const A = d + 1;
    if (g - i > Math.floor((2147483647 - u) / A)) {
      throw RangeError(a);
    }
    u += (g - i) * A;
    i = g;
    for (t = 0; t < r.length; t++) {
      if ((e = r[t]) < i && ++u > 2147483647) {
        throw RangeError(a);
      }
      if (e === i) {
        let x = u;
        let w = 36;
        while (true) {
          const S = w <= l ? 1 : w >= l + 26 ? 26 : w - l;
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
        l = m(u, A, d === n_length);
        u = 0;
        d++;
      }
    }
    u++;
    i++;
  }
  return h(n, "");
};
export default function (r) {
  let t;
  let e;
  const n = [];
  const a = d(p(g(r), i, "."), ".");
  for (t = 0; t < a.length; t++) {
    v(n, u(o, (e = a[t])) ? "xn--" + A(e) : e);
  }
  return h(n, ".");
}
