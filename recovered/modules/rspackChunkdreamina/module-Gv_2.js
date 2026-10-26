import n from "./module-g.js";
import o from "./module-o.js";
import i from "./module-Ok_2.js";
import a from "./module-mH_3.js";
import s from "./module-AU_3.js";
import u from "./module-VV_4.js";
const p = o(s);
const h = o("".slice);
const v = o((1).toFixed);
const d = (e, t, r) => {
  if (t === 0) {
    return r;
  }
  if (t % 2 == 1) {
    return d(e, t - 1, r * e);
  }
  return d(e * e, t / 2, r);
};
const g = (e) => {
  let t = 0;
  for (var r = e; r >= 4096;) {
    t += 12;
    r /= 4096;
  }
  while (r >= 2) {
    t += 1;
    r /= 2;
  }
  return t;
};
const y = (e, t, r) => {
  for (let n = -1, o = r; ++n < 6;) {
    o += t * e[n];
    e[n] = o % 10000000;
    o = Math.floor(o / 10000000);
  }
};
const m = (e, t) => {
  for (let r = 6, n = 0; --r >= 0;) {
    n += e[r];
    e[r] = Math.floor(n / t);
    n = (n % t) * 10000000;
  }
};
const x = (e) => {
  for (var t = 6, r = ""; --t >= 0;) {
    if (r !== "" || t === 0 || e[t] !== 0) {
      const n = String(e[t]);
      r = r === "" ? n : r + p("0", 7 - n.length) + n;
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
          v(0.00008, 3) !== "0.000" ||
          v(0.9, 0) !== "1" ||
          v(1.255, 2) !== "1.25" ||
          v(1000000000000000100, 0) !== "1000000000000000128"
        );
      }) ||
      !u(function () {
        v({});
      }),
  },
  {
    toFixed: function (e) {
      let t;
      let r;
      let n;
      let o;
      let s = a(this);
      const u = i(e);
      const l = [0, 0, 0, 0, 0, 0];
      let v = "";
      let b = "0";
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
        v = "-";
        s = -s;
      }
      if (s > 1e-21) {
        r =
          ((t = g(s * d(2, 69, 1)) - 69) < 0
            ? s * d(2, -t, 1)
            : s / d(2, t, 1)) * 4503599627370496;
        if ((t = 52 - t) > 0) {
          y(l, 0, r);
          for (n = u; n >= 7;) {
            y(l, 10000000, 0);
            n -= 7;
          }
          y(l, d(10, n, 1), 0);
          for (n = t - 1; n >= 23;) {
            m(l, 8388608);
            n -= 23;
          }
          m(l, 1 << n);
          y(l, 1, 1);
          m(l, 2);
          b = x(l);
        } else {
          y(l, 0, r);
          y(l, 1 << -t, 0);
          b = x(l) + p("0", u);
        }
      }
      if (u > 0) {
        return (
          v +
          ((o = b.length) <= u
            ? "0." + p("0", u - o) + b
            : h(b, 0, o - u) + "." + h(b, o - u))
        );
      }
      return v + b;
    },
  },
);
