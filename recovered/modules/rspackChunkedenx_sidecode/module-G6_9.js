import n from "./module-A_10.js";
import o from "./module-O9_9.js";
import i from "./module-V6_10.js";
import a from "./module-GH_9.js";
import s from "./module-KM_9.js";
import u from "./module-X_10.js";
const h = o(s);
const v = o("".slice);
const d = o((1).toFixed);
const p = (t, e, r) => {
  if (e === 0) {
    return r;
  }
  if (e % 2 == 1) {
    return p(t, e - 1, r * t);
  }
  return p(t * t, e / 2, r);
};
const g = (t) => {
  let e = 0;
  for (var r = t; r >= 4096;) {
    e += 12;
    r /= 4096;
  }
  while (r >= 2) {
    e += 1;
    r /= 2;
  }
  return e;
};
const y = (t, e, r) => {
  for (let n = -1, o = r; ++n < 6;) {
    o += e * t[n];
    t[n] = o % 10000000;
    o = Math.floor(o / 10000000);
  }
};
const m = (t, e) => {
  for (let r = 6, n = 0; --r >= 0;) {
    n += t[r];
    t[r] = Math.floor(n / e);
    n = (n % e) * 10000000;
  }
};
const b = (t) => {
  for (var e = 6, r = ""; --e >= 0;) {
    if (r !== "" || e === 0 || t[e] !== 0) {
      const n = String(t[e]);
      r = r === "" ? n : r + h("0", 7 - n.length) + n;
    }
  }
  return r;
};
n(
  {
    target: "Number",
    proto: true,
    forced:
      u(function () {
        return (
          d(0.00008, 3) !== "0.000" ||
          d(0.9, 0) !== "1" ||
          d(1.255, 2) !== "1.25" ||
          d(1000000000000000100, 0) !== "1000000000000000128"
        );
      }) ||
      !u(function () {
        d({});
      }),
  },
  {
    toFixed: function (t) {
      let e;
      let r;
      let n;
      let o;
      let s = a(this);
      const u = i(t);
      const l = [0, 0, 0, 0, 0, 0];
      let d = "";
      let w = "0";
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
        d = "-";
        s = -s;
      }
      if (s > 1e-21) {
        r =
          ((e = g(s * p(2, 69, 1)) - 69) < 0
            ? s * p(2, -e, 1)
            : s / p(2, e, 1)) * 4503599627370496;
        if ((e = 52 - e) > 0) {
          y(l, 0, r);
          for (n = u; n >= 7;) {
            y(l, 10000000, 0);
            n -= 7;
          }
          y(l, p(10, n, 1), 0);
          for (n = e - 1; n >= 23;) {
            m(l, 8388608);
            n -= 23;
          }
          m(l, 1 << n);
          y(l, 1, 1);
          m(l, 2);
          w = b(l);
        } else {
          y(l, 0, r);
          y(l, 1 << -e, 0);
          w = b(l) + h("0", u);
        }
      }
      if (u > 0) {
        return (
          d +
          ((o = w.length) <= u
            ? "0." + h("0", u - o) + w
            : v(w, 0, o - u) + "." + v(w, o - u))
        );
      }
      return d + w;
    },
  },
);
