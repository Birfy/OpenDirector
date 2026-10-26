if (require.j == "wl4") var a = require("./module-zOM.js");
export class f {
  showConsole() {
    for (let [e, t] of (this._globalLogger.showConsole(), this._loggers)) {
      t.showConsole();
    }
    this._consoleGate = true;
  }
  hideConsole() {
    for (let [e, t] of (this._globalLogger.showConsole(), this._loggers)) {
      t.hideConsole();
    }
    this._consoleGate = false;
  }
  debug(e, ...t) {
    this._globalLogger.debug(e, ...t);
  }
  info(e, ...t) {
    this._globalLogger.info(e, ...t);
  }
  warn(e, ...t) {
    this._globalLogger.warn(e, ...t);
  }
  error(e, ...t) {
    this._globalLogger.error(e, ...t);
  }
  createLogger(e, t = {}) {
    if (this._loggers.has(e)) {
      return this._loggers.get(e);
    }
    let r = new a.K(this._slardarAdapter, this, e, t);
    if (this._consoleGate) {
      r.showConsole();
    }
    this._loggers.set(e, r);
    return r;
  }
  getLogger(e) {
    return this._loggers.get(e);
  }
  removeLogger(e) {
    return this._loggers.delete(e);
  }
  destroy(e) {
    return this._loggers.delete(e);
  }
  constructor(e, t) {
    this._slardarAdapter = e;
    this._loggers = new Map();
    this._consoleGate = false;
    this._globalLogger = new a.K(this._slardarAdapter, this, "global", t);
  }
}
