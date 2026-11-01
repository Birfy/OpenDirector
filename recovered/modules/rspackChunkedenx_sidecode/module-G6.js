import n from "./module-A.js";
import o from "./module-O9.js";
import i from "./module-V6.js";
import a from "./module-GH.js";
import s from "./module-KM.js";
import u from "./module-X.js";
const l = o(s);
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
      e = e === "" ? n : e + l("0", 7 - n.length) + n;
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
      const h = [0, 0, 0, 0, 0, 0];
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
          y(h, 0, e);
          for (n = u; n >= 7;) {
            y(h, 10000000, 0);
            n -= 7;
          }
          y(h, d(10, n, 1), 0);
          for (n = r - 1; n >= 23;) {
            b(h, 8388608);
            n -= 23;
          }
          b(h, 1 << n);
          y(h, 1, 1);
          b(h, 2);
          A = m(h);
        } else {
          y(h, 0, e);
          y(h, 1 << -r, 0);
          A = m(h) + l("0", u);
        }
      }
      if (u > 0) {
        return (
          p +
          ((o = A.length) <= u
            ? "0." + l("0", u - o) + A
            : v(A, 0, o - u) + "." + v(A, o - u))
        );
      }
      return p + A;
    },
  },
);
