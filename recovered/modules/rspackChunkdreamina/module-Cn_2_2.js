import n from "./module-g.js";
import o from "./module-o.js";
import i from "./module-Ok_2.js";
import a from "./module-mH_3.js";
import s from "./module-AU_3.js";
import u from "./module-w.js";
import c from "./module-VV_4.js";
const p = isFinite;
const y = o((1).toExponential);
const m = o(s);
const x = o("".slice);
const b =
  y(-6.9e-11, 4) === "-6.9000e-11" &&
  y(1.255, 2) === "1.25e+0" &&
  y(12345, 3) === "1.235e+4" &&
  y(25, 0) === "3e+1";
n(
  {
    target: "Number",
    proto: true,
    forced:
      !b ||
      !(
        c(function () {
          y(1, Infinity);
        }) &&
        c(function () {
          y(1, -Infinity);
        })
      ) ||
      !!c(function () {
        y(Infinity, Infinity);
        y(0 / 0, Infinity);
      }),
  },
  {
    toExponential: function (e) {
      let t = a(this);
      if (e === undefined) {
        return y(t);
      }
      const r = i(e);
      if (!p(t)) {
        return String(t);
      }
      if (r < 0 || r > 20) {
        throw RangeError("Incorrect fraction digits");
      }
      if (b) {
        return y(t, r);
      }
      let n = "";
      let o = "";
      let s = 0;
      let c = "";
      let w = "";
      if (t < 0) {
        n = "-";
        t = -t;
      }
      if (t === 0) {
        s = 0;
        o = m("0", r + 1);
      } else {
        s = Math.floor(u(t));
        let A = 0;
        const E = 10 ** (s - r);
        A = Math.round(t / E);
        if (2 * t >= (2 * A + 1) * E) {
          A += 1;
        }
        if (A >= 10 ** (r + 1)) {
          A /= 10;
          s += 1;
        }
        o = String(A);
      }
      if (r !== 0) {
        o = x(o, 0, 1) + "." + x(o, 1);
      }
      if (s === 0) {
        c = "+";
        w = "0";
      } else {
        c = s > 0 ? "+" : "-";
        w = String(Math.abs(s));
      }
      return n + (o += "e" + c + w);
    },
  },
);
