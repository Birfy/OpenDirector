import r from "oa";
import o from "bk";
import i from "vpF";
import s from "C4S";
import c from "g9a";
import d from "QWN";
import f from "ev";
import m from "w4G";
import g from "KH9";
import { W5, b0, cy } from "./module-V9.js";
let _isAMomentObject = i()._isAMomentObject;
if (_isAMomentObject) {
  i.extend = () => {};
}
i.extend((e, t, n) => {
  n = function (e, n) {
    if (W5(e)) {
      return e.clone();
    }
    let r = typeof n === "object" ? n : {};
    r.date = e;
    r.args = arguments;
    return new t(r);
  };
  let t_prototype = t.prototype;
  let r_$utils = t_prototype.$utils;
  t_prototype.$utils = function () {
    let e = r_$utils();
    e.i = W5;
    return e;
  };
  n.isDayjs = W5;
});
i.extend(s);
i.extend(c);
i.extend(d);
i.extend(f);
i.extend(m);
i.extend(g);
export let yf = i;
export let vX = {
  add: (e, t, n) => {
    if (_isAMomentObject) {
      return e.clone().add(t, n);
    }
    return e.add(t, n);
  },
  subtract: (e, t, n) => {
    if (_isAMomentObject) {
      return e.clone().subtract(t, n);
    }
    return e.subtract(t, n);
  },
  startOf: (e, t) => {
    if (_isAMomentObject) {
      return e.clone().startOf(t);
    }
    return e.startOf(t);
  },
  endOf: (e, t) => {
    if (_isAMomentObject) {
      return e.clone().endOf(t);
    }
    return e.endOf(t);
  },
  set: (e, t, n) => {
    if (_isAMomentObject) {
      return e.clone().set(t, n);
    }
    return e.set(t, n);
  },
  isSameWeek: (e, t, n, i) => {
    if (_isAMomentObject) {
      return e
        .locale(i, {
          week: {
            dow: n,
          },
        })
        .isSame(t, "week");
    }
    return e
      .locale(
        o._(r._({}, yf.Ls[i]), {
          weekStart: n,
        }),
      )
      .isSame(t, "week");
  },
};
let O = {
  year: 0,
  month: 1,
  day: 2,
  hour: 3,
  minute: 4,
  second: 5,
};
let C = {};
let N = (e, timeZone) => {
  let n;
  let r;
  let o;
  n = new Date(e);
  let i = (!(o = C[(r = `${timeZone}|short`)]) &&
    ((o = new Intl.DateTimeFormat("en-US", {
      hour12: false,
      timeZone,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    })),
    (C[r] = o)),
  o).formatToParts(n);
  let l = [];
  for (let e = 0; e < i.length; e += 1) {
    let { type, value } = i[e];
    let r = O[type];
    if (r >= 0) {
      l[r] = parseInt(value, 10);
    }
  }
  let s = l[3];
  let a = Date.UTC(l[0], l[1] - 1, l[2], s === 24 ? 0 : s, l[4], l[5], 0);
  let c = Number(e);
  let u = c % 1000;
  return (a - (c -= u)) / 60000;
};
export function hY(e, t) {
  if (b0(e) && !t) {
    return yf();
  }
  return xT(yf(), e, t);
}
export function xT(e, t, n, r) {
  let o;
  if (!e || (b0(t) && !n)) {
    return e;
  }
  let i = -e.toDate().getTimezoneOffset();
  let l = b0(t)
    ? n
      ? ((o = e.valueOf()),
        ((e, t, n) => {
          let r = e - 60 * t * 1000;
          let o = N(r, n);
          if (t === o) {
            return [r, t];
          }
          let i = N((r -= (o - t) * 60000), n);
          if (o === i) {
            return [r, o];
          }
          return [e - 60 * Math.min(o, i) * 1000, Math.max(o, i)];
        })(o, N(new Date().getTime(), n), n)[1])
      : i
    : t;
  let s = Math.abs(l) <= 16 ? 60 * l : l;
  return yf(yf(e).valueOf() + 60 * (r ? i - s : s - i) * 1000);
}
export function jw(e, t, n) {
  return xT(e, t, n, true);
}
export function lU(e) {
  let t = "";
  ["H", "h", "m", "s", "A", "a"].some(
    (n) => e.indexOf(n) !== -1 && ((t = `${n}${e.split(` ${n}`)[1]}`), true),
  );
  return t || "HH:mm:ss";
}
export function de(e, t, n, r) {
  if (!e) {
    return;
  }
  let o = (e) => {
    if (W5(e)) {
      return yf(e.valueOf());
    }
    if (typeof e === "string") {
      let n = yf(e, t);
      if (n.isValid()) {
        return n;
      }
      return yf(e, "YYYY-MM-DD");
    }
    return yf(e);
  };
  let i = (e) => {
    if (n !== undefined || r) {
      return xT(o(e), n, r);
    }
    return o(e);
  };
  if (cy(e)) {
    return e.map((e) => {
      if (e) {
        return i(e);
      }
    });
  }
  return i(e);
}
export function p(e, t) {
  let n = e.year();
  let r = e.month();
  let o = e.date();
  if (t) {
    let e = t;
    e = vX.set(e, "year", n);
    e = vX.set(e, "month", r);
    return (e = vX.set(e, "date", o));
  }
  return e;
}
export function q0(e) {
  if (!e || !e[0] || !e[1]) {
    return e;
  }
  let t = [...e];
  t.sort((e, t) => e.valueOf() - t.valueOf());
  return t;
}
export function YW(e, t) {
  return (
    (t !== undefined || e !== undefined) &&
    ((t && !e) || (!t && e) || yf(t).valueOf() !== yf(e).valueOf())
  );
}
export function Bh(e, t) {
  return (
    (t !== undefined || e !== undefined) &&
    ((t && !e) ||
      (!t && e) ||
      (cy(t) && cy(e) && yf(t[0]).valueOf() !== yf(e[0]).valueOf()) ||
      yf(t[1]).valueOf() !== yf(e[1]).valueOf())
  );
}
export function fn(e, t) {
  return typeof e === "string" && yf(e, t).format(t) === e;
}
