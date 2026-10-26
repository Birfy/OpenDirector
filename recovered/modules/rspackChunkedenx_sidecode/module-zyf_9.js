import n from "./module-O9_9.js";
const o = /[^\0-\u007E]/;
const i = /[.\u3002\uFF0E\uFF61]/g;
const a = "Overflow: input needs wider integers to process";
const u = n(i.exec);
const l = n("".charCodeAt);
const h = n([].join);
const v = n([].push);
const d = n("".replace);
const p = n("".split);
const g = n("".toLowerCase);
const y = (t) => {
  const e = [];
  for (let r = 0, n = t.length; r < n;) {
    const o = l(t, r++);
    if (o >= 55296 && o <= 56319 && r < n) {
      const i = l(t, r++);
      if ((64512 & i) == 56320) {
        v(e, ((1023 & o) << 10) + (1023 & i) + 65536);
      } else {
        v(e, o);
        r--;
      }
    } else {
      v(e, o);
    }
  }
  return e;
};
const m = (t) => t + 22 + 75 * (t < 26);
const b = (t, e, r) => {
  let n = 0;
  t = r ? Math.floor(t / 700) : t >> 1;
  for (t += Math.floor(t / e); t > 455;) {
    t = Math.floor(t / 35);
    n += 36;
  }
  return Math.floor(n + (36 * t) / (t + 38));
};
const w = (t) => {
  let e;
  let r;
  const n = [];
  const length = (t = y(t)).length;
  let i = 128;
  let u = 0;
  let l = 72;
  for (e = 0; e < t.length; e++) {
    if ((r = t[e]) < 128) {
      v(n, String.fromCharCode(r));
    }
  }
  const n_length = n.length;
  let p = n_length;
  for (n_length && v(n, "-"); p < length;) {
    let g = 2147483647;
    for (e = 0; e < t.length; e++) {
      if ((r = t[e]) >= i && r < g) {
        g = r;
      }
    }
    const w = p + 1;
    if (g - i > Math.floor((2147483647 - u) / w)) {
      throw RangeError(a);
    }
    u += (g - i) * w;
    i = g;
    for (e = 0; e < t.length; e++) {
      if ((r = t[e]) < i && ++u > 2147483647) {
        throw RangeError(a);
      }
      if (r === i) {
        let A = u;
        let x = 36;
        while (true) {
          const E = x <= l ? 1 : x >= l + 26 ? 26 : x - l;
          if (A < E) {
            break;
          }
          const S = A - E;
          const O = 36 - E;
          v(n, String.fromCharCode(m(E + (S % O))));
          A = Math.floor(S / O);
          x += 36;
        }
        v(n, String.fromCharCode(m(A)));
        l = b(u, w, p === n_length);
        u = 0;
        p++;
      }
    }
    u++;
    i++;
  }
  return h(n, "");
};
export default function (t) {
  let e;
  let r;
  const n = [];
  const a = p(d(g(t), i, "."), ".");
  for (e = 0; e < a.length; e++) {
    v(n, u(o, (r = a[e])) ? "xn--" + w(r) : r);
  }
  return h(n, ".");
}
