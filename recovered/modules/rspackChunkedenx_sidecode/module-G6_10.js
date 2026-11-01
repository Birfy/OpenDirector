import n from "./module-A_11.js";
import o from "./module-O9_10.js";
import i from "./module-V6_11.js";
import a from "./module-GH_10.js";
import s from "./module-KM_10.js";
import u from "./module-X_11.js";
const h = o(s);
const v = o("".slice);
const p = o((1).toFixed);
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
const b = (t, r) => {
  for (let e = 6, n = 0; --e >= 0;) {
    n += t[e];
    t[e] = Math.floor(n / r);
    n = (n % r) * 10000000;
  }
};
const m = (t) => {
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
      u(function () {
        return (
          p(0.00008, 3) !== "0.000" ||
          p(0.9, 0) !== "1" ||
          p(1.255, 2) !== "1.25" ||
          p(1000000000000000100, 0) !== "1000000000000000128"
        );
      }) ||
      !u(function () {
        p({});
      }),
  },
  {
    toFixed: function (t) {
      let r;
      let e;
      let n;
      let o;
      let s = a(this);
      const u = i(t);
      const l = [0, 0, 0, 0, 0, 0];
      let p = "";
      let A = "0";
      if (u < 0 || u > 20) {
        throw RangeError("Incorrect fraction digits");
      }
      if (s != s) {
        return "NaN";
      }
      if (s <= -1e21 || s >= 1e21) {
        return String(s);
      }
      if (s < 0) {
        p = "-";
        s = -s;
      }
      if (s > 1e-21) {
        e =
          ((r = g(s * d(2, 69, 1)) - 69) < 0
            ? s * d(2, -r, 1)
            : s / d(2, r, 1)) * 4503599627370496;
        if ((r = 52 - r) > 0) {
          y(l, 0, e);
          for (n = u; n >= 7;) {
            y(l, 10000000, 0);
            n -= 7;
          }
          y(l, d(10, n, 1), 0);
          for (n = r - 1; n >= 23;) {
            b(l, 8388608);
            n -= 23;
          }
          b(l, 1 << n);
          y(l, 1, 1);
          b(l, 2);
          A = m(l);
        } else {
          y(l, 0, e);
          y(l, 1 << -r, 0);
          A = m(l) + h("0", u);
        }
      }
      if (u > 0) {
        return (
          p +
          ((o = A.length) <= u
            ? "0." + h("0", u - o) + A
            : v(A, 0, o - u) + "." + v(A, o - u))
        );
      }
      return p + A;
    },
  },
);
