import n from "./module-O9_6.js";
const o = /[^\0-\u007E]/;
const a = /[.\u3002\uFF0E\uFF61]/g;
const i = "Overflow: input needs wider integers to process";
const c = n(a.exec);
const l = n("".charCodeAt);
const h = n([].join);
const p = n([].push);
const v = n("".replace);
const d = n("".split);
const g = n("".toLowerCase);
const y = (t) => {
  const r = [];
  for (let e = 0, n = t.length; e < n;) {
    const o = l(t, e++);
    if (o >= 55296 && o <= 56319 && e < n) {
      const a = l(t, e++);
      if ((64512 & a) == 56320) {
        p(r, ((1023 & o) << 10) + (1023 & a) + 65536);
      } else {
        p(r, o);
        e--;
      }
    } else {
      p(r, o);
    }
  }
  return r;
};
const m = (t) => t + 22 + 75 * (t < 26);
const b = (t, r, e) => {
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
  let a = 128;
  let c = 0;
  let l = 72;
  for (r = 0; r < t.length; r++) {
    if ((e = t[r]) < 128) {
      p(n, String.fromCharCode(e));
    }
  }
  const n_length = n.length;
  let d = n_length;
  for (n_length && p(n, "-"); d < length;) {
    let g = 2147483647;
    for (r = 0; r < t.length; r++) {
      if ((e = t[r]) >= a && e < g) {
        g = e;
      }
    }
    const A = d + 1;
    if (g - a > Math.floor((2147483647 - c) / A)) {
      throw RangeError(i);
    }
    c += (g - a) * A;
    a = g;
    for (r = 0; r < t.length; r++) {
      if ((e = t[r]) < a && ++c > 2147483647) {
        throw RangeError(i);
      }
      if (e === a) {
        let w = c;
        let x = 36;
        while (true) {
          const E = x <= l ? 1 : x >= l + 26 ? 26 : x - l;
          if (w < E) {
            break;
          }
          const S = w - E;
          const O = 36 - E;
          p(n, String.fromCharCode(m(E + (S % O))));
          w = Math.floor(S / O);
          x += 36;
        }
        p(n, String.fromCharCode(m(w)));
        l = b(c, A, d === n_length);
        c = 0;
        d++;
      }
    }
    c++;
    a++;
  }
  return h(n, "");
};
export default function (t) {
  let r;
  let e;
  const n = [];
  const i = d(v(g(t), a, "."), ".");
  for (r = 0; r < i.length; r++) {
    p(n, c(o, (e = i[r])) ? "xn--" + A(e) : e);
  }
  return h(n, ".");
}
