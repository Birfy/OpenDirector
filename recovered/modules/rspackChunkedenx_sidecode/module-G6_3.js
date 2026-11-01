import n from "./module-A_4.js";
import i from "./module-O9_3.js";
import o from "./module-V6_4.js";
import s from "./module-GH_3.js";
import a from "./module-KM_3.js";
import u from "./module-X_4.js";
const l = i(a);
const v = i("".slice);
const p = i((1).toFixed);
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
  for (let n = -1, i = e; ++n < 6;) {
    i += r * t[n];
    t[n] = i % 10000000;
    i = Math.floor(i / 10000000);
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
      let i;
      let a = s(this);
      const u = o(t);
      const h = [0, 0, 0, 0, 0, 0];
      let p = "";
      let A = "0";
      if (u < 0 || u > 20) {
        throw RangeError("Incorrect fraction digits");
      }
      if (a != a) {
        return "NaN";
      }
      if (a <= -1e21 || a >= 1e21) {
        return String(a);
      }
      if (a < 0) {
        p = "-";
        a = -a;
      }
      if (a > 1e-21) {
        e =
          ((r = g(a * d(2, 69, 1)) - 69) < 0
            ? a * d(2, -r, 1)
            : a / d(2, r, 1)) * 4503599627370496;
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
          ((i = A.length) <= u
            ? "0." + l("0", u - i) + A
            : v(A, 0, i - u) + "." + v(A, i - u))
        );
      }
      return p + A;
    },
  },
);
