const r = function () {};
const n = Object.keys(console).reduce((acc, key) => {
  acc[key] = r;
  return acc;
}, {});
export class V {
  static setLogInstance(e) {
    this._instance = e;
  }
  static setEnvironmentFlag(e) {
    V._isProductionEnv = e;
  }
  static debug(e) {
    for (
      var t = arguments.length, i = Array(t > 1 ? t - 1 : 0), r = 1;
      r < t;
      r++
    ) {
      i[r - 1] = arguments[r];
    }
    V._instance.debug(e, ...i);
  }
  static log(e) {
    for (
      var t = arguments.length, i = Array(t > 1 ? t - 1 : 0), r = 1;
      r < t;
      r++
    ) {
      i[r - 1] = arguments[r];
    }
    V._instance.log(e, ...i);
  }
  static error(e) {
    for (
      var t = arguments.length, i = Array(t > 1 ? t - 1 : 0), r = 1;
      r < t;
      r++
    ) {
      i[r - 1] = arguments[r];
    }
    V._instance.error(e, ...i);
  }
  static info(e) {
    for (
      var t = arguments.length, i = Array(t > 1 ? t - 1 : 0), r = 1;
      r < t;
      r++
    ) {
      i[r - 1] = arguments[r];
    }
    V._instance.info(e, ...i);
  }
  static time(e) {
    V._instance.time(e);
  }
  static timeLog(e) {
    for (
      var t = arguments.length, i = Array(t > 1 ? t - 1 : 0), r = 1;
      r < t;
      r++
    ) {
      i[r - 1] = arguments[r];
    }
    V._instance.timeLog(e, ...i);
  }
  static timeEnd(e) {
    V._instance.timeEnd(e);
  }
  static warn(e) {
    for (
      var t = arguments.length, i = Array(t > 1 ? t - 1 : 0), r = 1;
      r < t;
      r++
    ) {
      i[r - 1] = arguments[r];
    }
    V._instance.warn(e, ...i);
  }
  static hideConsole() {
    global.console = n;
    V.setLogInstance(n);
  }
  static showConsole() {
    global.console = V._console;
    V.setLogInstance(V._console);
  }
}
V._instance = n;
V._isProductionEnv = true;
V._console = console;
global.showConsole = V.showConsole;
global.hideConsole = V.hideConsole;
