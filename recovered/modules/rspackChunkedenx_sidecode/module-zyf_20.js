import n from "./module-O9_20.js";
const o = /[^\0-\u007E]/;
const i = /[.\u3002\uFF0E\uFF61]/g;
const a = "Overflow: input needs wider integers to process";
const c = n(i.exec);
const l = n("".charCodeAt);
const h = n([].join);
const v = n([].push);
const p = n("".replace);
const d = n("".split);
const g = n("".toLowerCase);
const y = (t) => {
  const r = [];
  for (let e = 0, n = t.length; e < n;) {
    const o = l(t, e++);
    if (o >= 55296 && o <= 56319 && e < n) {
      const i = l(t, e++);
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
const w = (t) => {
  let r;
  let e;
  const n = [];
  const length = (t = y(t)).length;
  let i = 128;
  let c = 0;
  let l = 72;
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
    const w = d + 1;
    if (g - i > Math.floor((2147483647 - c) / w)) {
      throw RangeError(a);
    }
    c += (g - i) * w;
    i = g;
    for (r = 0; r < t.length; r++) {
      if ((e = t[r]) < i && ++c > 2147483647) {
        throw RangeError(a);
      }
      if (e === i) {
        let A = c;
        let x = 36;
        while (true) {
          const S = x <= l ? 1 : x >= l + 26 ? 26 : x - l;
          if (A < S) {
            break;
          }
          const E = A - S;
          const O = 36 - S;
          v(n, String.fromCharCode(m(S + (E % O))));
          A = Math.floor(E / O);
          x += 36;
        }
        v(n, String.fromCharCode(m(A)));
        l = b(c, w, d === n_length);
        c = 0;
        d++;
      }
    }
    c++;
    i++;
  }
  return h(n, "");
};
export default function (t) {
  let r;
  let e;
  const n = [];
  const a = d(p(g(t), i, "."), ".");
  for (r = 0; r < a.length; r++) {
    v(n, c(o, (e = a[r])) ? "xn--" + w(e) : e);
  }
  return h(n, ".");
}
