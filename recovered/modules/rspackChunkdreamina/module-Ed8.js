function strip(e, t = 15) {
  return +parseFloat(Number(e).toPrecision(t));
}
function digitLength(e) {
  const t = e.toString().split(/[eE]/);
  const n = (t[0].split(".")[1] || "").length - (t[1] || 0);
  if (n > 0) {
    return n;
  }
  return 0;
}
function float2Fixed(e) {
  if (e.toString().indexOf("e") === -1) {
    return Number(e.toString().replace(".", ""));
  }
  const t = digitLength(e);
  if (t > 0) {
    return strip(Number(e) * 10 ** t);
  }
  return Number(e);
}
function o(e) {
  if (m && (e > Number.MAX_SAFE_INTEGER || e < Number.MIN_SAFE_INTEGER)) {
    console.warn(
      e +
        " is beyond boundary when transfer to integer, the results may not be accurate",
    );
  }
}
function l(e) {
  return function () {
    const t = [];
    for (let n = 0; n < arguments.length; n++) {
      t[n] = arguments[n];
    }
    const i = t[0];
    return t.slice(1).reduce((acc, item) => e(acc, item), i);
  };
}
export var Hn = l((e, t) => {
  const n = float2Fixed(e);
  const i = float2Fixed(t);
  const l = digitLength(e) + digitLength(t);
  const u = n * i;
  o(u);
  return u / 10 ** l;
});
export var tY = l((e, t) => {
  const n = 10 ** Math.max(digitLength(e), digitLength(t));
  return (Hn(e, n) + Hn(t, n)) / n;
});
export var Rd = l((e, t) => {
  const n = 10 ** Math.max(digitLength(e), digitLength(t));
  return (Hn(e, n) - Hn(t, n)) / n;
});
export var Qr = l((e, t) => {
  const n = float2Fixed(e);
  const l = float2Fixed(t);
  o(n);
  o(l);
  return Hn(n / l, strip(10 ** (digitLength(t) - digitLength(e))));
});
var m = true;
export const Ay = {
  strip,
  plus: tY,
  minus: Rd,
  times: Hn,
  divide: Qr,
  round: function (e, t) {
    const n = 10 ** t;
    let i = Qr(Math.round(Math.abs(Hn(e, n))), n);
    if (e < 0 && i !== 0) {
      i = Hn(i, -1);
    }
    return i;
  },
  digitLength,
  float2Fixed,
  enableBoundaryChecking: function (e = true) {
    m = e;
  },
};
