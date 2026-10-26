import r from "oa";
import n from "bk";
import i from "Bt1";
import { n as n_1 } from "./module-G8V.js";
import o from "l6";
import l from "C1";
import c from "gY";
import d from "RT";
import u from "M4O";
class m {
  static _sendLog(level, t) {
    let a;
    let r;
    for (
      var n = arguments.length, i = Array(n > 2 ? n - 2 : 0), m = 2;
      m < n;
      m++
    ) {
      i[m - 2] = arguments[m];
    }
    const extra = Object.create(null);
    const h = [];
    i.forEach((e) => {
      if (o.A(e) && l.A(e, (e) => c.A(e) || d.A(e) || u.A(e))) {
        Object.assign(extra, e);
      } else {
        h.push(e);
      }
    });
    if (!((r = n_1.sdk) == null || (a = r.sendLog) == null)) {
      a.call(r, {
        content: (function (e) {
          for (
            var t = arguments.length, a = Array(t > 1 ? t - 1 : 0), r = 1;
            r < t;
            r++
          ) {
            a[r - 1] = arguments[r];
          }
          return [e, ...a].join(" ");
        })(t, h),
        level,
        extra,
      });
    }
  }
  static info(e) {
    for (
      var t = arguments.length, a = Array(t > 1 ? t - 1 : 0), r = 1;
      r < t;
      r++
    ) {
      a[r - 1] = arguments[r];
    }
    m._sendLog("info", e, a);
  }
  static warn(e) {
    for (
      var t = arguments.length, a = Array(t > 1 ? t - 1 : 0), r = 1;
      r < t;
      r++
    ) {
      a[r - 1] = arguments[r];
    }
    m._sendLog("warn", e, a);
  }
  static error(e) {
    for (
      var t = arguments.length, a = Array(t > 1 ? t - 1 : 0), r = 1;
      r < t;
      r++
    ) {
      a[r - 1] = arguments[r];
    }
    m._sendLog("error", e, a);
  }
}
const p = Object.keys(console).reduce(
  (acc, key) =>
    n._(r._({}, acc), {
      [key]: i.A,
    }),
  {},
);
export class V {
  static setEnvironment(e) {
    V._isProduction = e;
  }
  static showConsole() {
    V._console = console;
  }
  static hideConsole() {
    V._console = p;
  }
  static debug() {
    for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) {
      t[a] = arguments[a];
    }
    if (!V._isProduction) {
      V._console.debug(...t);
    }
  }
  static time(e) {
    if (!V._isProduction) {
      V._console.time(e);
    }
  }
  static timeEnd(e) {
    if (!V._isProduction) {
      V._console.timeEnd(e);
    }
  }
  static log(e) {
    for (
      var t = arguments.length, a = Array(t > 1 ? t - 1 : 0), r = 1;
      r < t;
      r++
    ) {
      a[r - 1] = arguments[r];
    }
    if (!V._isProduction) {
      V._console.log(e, ...a);
    }
  }
  static info(e) {
    for (
      var t = arguments.length, a = Array(t > 1 ? t - 1 : 0), r = 1;
      r < t;
      r++
    ) {
      a[r - 1] = arguments[r];
    }
    if (V._isProduction) {
      m.info(e, ...a);
    }
    V._console.info(e, ...a);
  }
  static warn(e) {
    for (
      var t = arguments.length, a = Array(t > 1 ? t - 1 : 0), r = 1;
      r < t;
      r++
    ) {
      a[r - 1] = arguments[r];
    }
    if (V._isProduction) {
      m.warn(e, ...a);
    }
    V._console.warn(e, ...a);
  }
  static error(e) {
    for (
      var t = arguments.length, a = Array(t > 1 ? t - 1 : 0), r = 1;
      r < t;
      r++
    ) {
      a[r - 1] = arguments[r];
    }
    if (V._isProduction) {
      m.error(e, ...a);
    }
    V._console.error(e, ...a);
  }
}
V._isProduction = false;
V._console = console;
