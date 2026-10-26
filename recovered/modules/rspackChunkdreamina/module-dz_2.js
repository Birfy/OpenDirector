import n from "./module-o.js";
const o = /[^\0-\u007E]/;
const i = /[.\u3002\uFF0E\uFF61]/g;
const a = "Overflow: input needs wider integers to process";
const u = n(i.exec);
const l = n("".charCodeAt);
const p = n([].join);
const h = n([].push);
const v = n("".replace);
const d = n("".split);
const g = n("".toLowerCase);
const y = (e) => {
  const t = [];
  for (let r = 0, n = e.length; r < n;) {
    const o = l(e, r++);
    if (o >= 55296 && o <= 56319 && r < n) {
      const i = l(e, r++);
      if ((64512 & i) == 56320) {
        h(t, ((1023 & o) << 10) + (1023 & i) + 65536);
      } else {
        h(t, o);
        r--;
      }
    } else {
      h(t, o);
    }
  }
  return t;
};
const m = (e) => e + 22 + 75 * (e < 26);
const x = (e, t, r) => {
  let n = 0;
  e = r ? Math.floor(e / 700) : e >> 1;
  for (e += Math.floor(e / t); e > 455;) {
    e = Math.floor(e / 35);
    n += 36;
  }
  return Math.floor(n + (36 * e) / (e + 38));
};
const b = (e) => {
  let t;
  let r;
  const n = [];
  const length = (e = y(e)).length;
  let i = 128;
  let u = 0;
  let l = 72;
  for (t = 0; t < e.length; t++) {
    if ((r = e[t]) < 128) {
      h(n, String.fromCharCode(r));
    }
  }
  const n_length = n.length;
  let d = n_length;
  for (n_length && h(n, "-"); d < length;) {
    let g = 2147483647;
    for (t = 0; t < e.length; t++) {
      if ((r = e[t]) >= i && r < g) {
        g = r;
      }
    }
    const b = d + 1;
    if (g - i > Math.floor((2147483647 - u) / b)) {
      throw RangeError(a);
    }
    u += (g - i) * b;
    i = g;
    for (t = 0; t < e.length; t++) {
      if ((r = e[t]) < i && ++u > 2147483647) {
        throw RangeError(a);
      }
      if (r === i) {
        let w = u;
        let A = 36;
        while (true) {
          const E = A <= l ? 1 : A >= l + 26 ? 26 : A - l;
          if (w < E) {
            break;
          }
          const j = w - E;
          const I = 36 - E;
          h(n, String.fromCharCode(m(E + (j % I))));
          w = Math.floor(j / I);
          A += 36;
        }
        h(n, String.fromCharCode(m(w)));
        l = x(u, b, d === n_length);
        u = 0;
        d++;
      }
    }
    u++;
    i++;
  }
  return p(n, "");
};
export default function (e) {
  let t;
  let r;
  const n = [];
  const a = d(v(g(e), i, "."), ".");
  for (t = 0; t < a.length; t++) {
    h(n, u(o, (r = a[t])) ? "xn--" + b(r) : r);
  }
  return p(n, ".");
}
