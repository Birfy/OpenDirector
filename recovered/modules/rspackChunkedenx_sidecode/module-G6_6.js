import n from "./module-A_7.js";
import o from "./module-O9_6.js";
import a from "./module-V6_7.js";
import i from "./module-GH_6.js";
import s from "./module-KM_6.js";
import c from "./module-X_7.js";
const h = o(s);
const p = o("".slice);
const v = o((1).toFixed);
const d = (t, r, e) => {
  if (r === 0) {
    return e;
  }
  if (r % 2 == 1) {
    return d(t, r - 1, e * t);
  }
  return d(t * t, r / 2, e);
};
const g = (t) => {
  let r = 0;
  for (var e = t; e >= 4096;) {
    r += 12;
    e /= 4096;
  }
  while (e >= 2) {
    r += 1;
    e /= 2;
  }
  return r;
};
const y = (t, r, e) => {
  for (let n = -1, o = e; ++n < 6;) {
    o += r * t[n];
    t[n] = o % 10000000;
    o = Math.floor(o / 10000000);
  }
};
const m = (t, r) => {
  for (let e = 6, n = 0; --e >= 0;) {
    n += t[e];
    t[e] = Math.floor(n / r);
    n = (n % r) * 10000000;
  }
};
const b = (t) => {
  for (var r = 6, e = ""; --r >= 0;) {
    if (e !== "" || r === 0 || t[r] !== 0) {
      const n = String(t[r]);
      e = e === "" ? n : e + h("0", 7 - n.length) + n;
    }
  }
  return e;
};
n(
  {
    target: "Number",
    proto: true,
    forced:
      c(function () {
        return (
          v(0.00008, 3) !== "0.000" ||
          v(0.9, 0) !== "1" ||
          v(1.255, 2) !== "1.25" ||
          v(1000000000000000100, 0) !== "1000000000000000128"
        );
      }) ||
      !c(function () {
        v({});
      }),
  },
  {
    toFixed: function (t) {
      let r;
      let e;
      let n;
      let o;
      let s = i(this);
      const c = a(t);
      const l = [0, 0, 0, 0, 0, 0];
      let v = "";
      let A = "0";
      if (c < 0 || c > 20) {
        throw RangeError("Incorrect fraction digits");
      }
      if (s != s) {
        return "NaN";
      }
      if (s <= -1e21 || s >= 1e21) {
        return String(s);
      }
      if (s < 0) {
        v = "-";
        s = -s;
      }
      if (s > 1e-21) {
        e =
          ((r = g(s * d(2, 69, 1)) - 69) < 0
            ? s * d(2, -r, 1)
            : s / d(2, r, 1)) * 4503599627370496;
        if ((r = 52 - r) > 0) {
          y(l, 0, e);
          for (n = c; n >= 7;) {
            y(l, 10000000, 0);
            n -= 7;
          }
          y(l, d(10, n, 1), 0);
          for (n = r - 1; n >= 23;) {
            m(l, 8388608);
            n -= 23;
          }
          m(l, 1 << n);
          y(l, 1, 1);
          m(l, 2);
          A = b(l);
        } else {
          y(l, 0, e);
          y(l, 1 << -r, 0);
          A = b(l) + h("0", c);
        }
      }
      if (c > 0) {
        return (
          v +
          ((o = A.length) <= c
            ? "0." + h("0", c - o) + A
            : p(A, 0, o - c) + "." + p(A, o - c))
        );
      }
      return v + A;
    },
  },
);
