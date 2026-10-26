import { Iv } from "./module-Dm.js";
import { GC } from "./module-K8.js";
import { $ } from "./module-LQ_2.js";
import { v as v_1 } from "./module-A7.js";
import { jG } from "./module-o7_2.js";
let a;
let o;
let n = /^[^\x25]+/;
let c = /^\x25\x25/;
let l = /^\x25([vVbBdDsS])/;
let m = new Map();
function s(e, ...t) {
  if (!t.length) {
    return e;
  }
  try {
    let r = ((e) => {
      let t = [];
      if (m.has(e)) {
        return m.get(e);
      }
      let r = e;
      while (r) {
        let e = n.exec(r);
        if (e) {
          t.push(e[0]);
          r = r.substring(e[0].length);
          continue;
        }
        if ((e = c.exec(r))) {
          t.push("%");
          r = r.substring(e[0].length);
          continue;
        }
        if ((e = l.exec(r)) && e.length > 1) {
          t.push({
            placeholder: e[1],
          });
          r = r.substring(e[0].length);
        } else {
          Iv();
        }
      }
      m.set(e, t);
      return t;
    })(e);
    return ((e, ...t) => {
      let r = "";
      let a = 0;
      for (let o of e) {
        if (typeof o === "string") {
          r += o;
          continue;
        }
        if (t[a] === undefined) {
          r += "undefined";
          continue;
        }
        switch (o.placeholder.toLowerCase()) {
          case "s":
            r += String(t[a++]);
            break;
          case "d":
            r += Number(t[a++]);
            break;
          case "b":
            r += t[a++];
            break;
          case "v":
            r += JSON.stringify(t[a++]);
            break;
          default:
            Iv();
        }
      }
      for (; a < t.length; a++) {
        r += ` ${t[a]}`;
      }
      return r;
    })(r, ...t);
  } catch (t) {
    return `[invalid formatted message]${e}`;
  }
}
function v() {
  return new Date().toISOString();
}
class _ extends jG {
  setLevel(e) {
    if (this._level !== e) {
      this._level = e;
      this._onDidChangeLogLevel.fire(this._level);
    }
  }
  getLevel() {
    return this._level;
  }
  dispose() {
    this._loggerService.removeLogger(this._label);
    super.dispose();
  }
  _checkLogLevel(e) {
    return this._level <= e;
  }
  constructor(e, t) {
    super();
    this._level = 1;
    this._onDidChangeLogLevel = this._register(new v_1());
    this._label = e;
    this._loggerService = t;
    this.onDidChangeLogLevel = this._onDidChangeLogLevel.event;
  }
}
class f extends _ {
  debug(e, ...t) {
    if (this._checkLogLevel($.Debug)) {
      if (this._useColors) {
        console.log(
          `\x1b[90m[main ${v()}]\x1b[0m`,
          `[${this._logPrefix}]`,
          e,
          ...t,
        );
      } else {
        console.log(`[main ${v()}]`, `[${this._logPrefix}]`, e, ...t);
      }
    }
  }
  info(e, ...t) {
    if (this._checkLogLevel($.Info)) {
      if (this._useColors) {
        console.log(
          `\x1b[90m[main ${v()}]\x1b[0m`,
          `[${this._logPrefix}]`,
          e,
          ...t,
        );
      } else {
        console.log(`[main ${v()}]`, `[${this._logPrefix}]`, e, ...t);
      }
    }
  }
  warn(e, ...t) {
    if (this._checkLogLevel($.Warning)) {
      if (this._useColors) {
        console.warn(
          `\x1b[93m[main ${v()}]\x1b[0m`,
          `[${this._logPrefix}]`,
          e,
          ...t,
        );
      } else {
        console.warn(`[main ${v()}]`, `[${this._logPrefix}]`, e, ...t);
      }
    }
  }
  error(e, ...t) {
    if (this._checkLogLevel($.Error)) {
      if (this._useColors) {
        console.error(
          `\x1b[91m[main ${v()}]\x1b[0m`,
          `[${this._logPrefix}]`,
          e,
          ...t,
        );
      } else {
        console.error(`[main ${v()}]`, `[${this._logPrefix}]`, e, ...t);
      }
    }
  }
  constructor(e, t, r = {}) {
    var a;
    var o;
    super(e, t);
    this._useColors = false;
    this.setLevel((a = r.logLevel) != null ? a : 1);
    this._logPrefix = (o = r.logPrefix) != null ? o : "";
  }
}
let h = {
  timeZone: "Asia/Shanghai",
};
class S {
  build() {
    return this._contextParams;
  }
  constructor(e) {
    this._contextParams = e;
  }
}
a = o || (o = {});
a.DEBUG = "debug";
a.INFO = "info";
a.WARN = "warn";
a.ERROR = "error";
export class K extends _ {
  showConsole() {
    this._consoleLogger = new f(this._label, this._loggerService, {
      logPrefix: this._logPrefix,
      logLevel: this._level,
    });
  }
  hideConsole() {
    this._consoleLogger = undefined;
  }
  debug(e, ...t) {
    if (!this._checkLogLevel($.Debug)) {
      return;
    }
    let r = s(e, ...t);
    this._slardarAdapter.sendLog(
      "debug",
      this._addPrefix(r),
      this._contextParamsBuilder.build(),
    );
    if (this._consoleLogger) {
      this._consoleLogger.debug(e, ...t);
    }
  }
  info(e, ...t) {
    if (!this._checkLogLevel($.Info)) {
      return;
    }
    let r = s(e, ...t);
    this._slardarAdapter.sendLog(
      "info",
      this._addPrefix(r),
      this._contextParamsBuilder.build(),
    );
    if (this._consoleLogger) {
      this._consoleLogger.info(e, ...t);
    }
  }
  warn(e, ...t) {
    if (!this._checkLogLevel($.Warning)) {
      return;
    }
    let r = this._transformErrorMessage(e, ...t);
    this._slardarAdapter.sendLog(
      "warn",
      this._addPrefix(r),
      this._contextParamsBuilder.build(),
    );
    if (this._consoleLogger) {
      this._consoleLogger.warn(e, ...t);
    }
  }
  error(e, ...t) {
    if (!this._checkLogLevel($.Error)) {
      return;
    }
    let r = this._transformErrorMessage(e, ...t);
    this._slardarAdapter.sendLog(
      "error",
      this._addPrefix(r),
      this._contextParamsBuilder.build(),
    );
    if (this._consoleLogger) {
      this._consoleLogger.error(e, ...t);
    }
  }
  _addPrefix(e) {
    return `${this._label ? `[${this._label}]` : ""}${this._timePrefix ? `[${new Date().toLocaleString("en-US", h)}]${this._logPrefix ? ` [${this._logPrefix}]` : ""}` : ""}${e}`;
  }
  _transformErrorMessage(e, ...t) {
    if (e instanceof Error) {
      return s(e.message, ...t);
    }
    if (GC(e)) {
      return s(e.toString(), ...t);
    }
    return s(e, ...t);
  }
  constructor(e, t, r, a = {}) {
    var o;
    var i;
    var n;
    var c;
    var l;
    super(r, t);
    this._slardarAdapter = e;
    this.setLevel((i = a.logLevel) != null ? i : 1);
    this._timePrefix = (n = a.timePrefix) == null || n;
    this._logPrefix = (c = a.logPrefix) != null ? c : "";
    if (
      ((o = a.contextParams) == null ? undefined : o.build) &&
      typeof a.contextParams.build === "function"
    ) {
      this._contextParamsBuilder = a.contextParams;
    } else {
      this._contextParamsBuilder = new S(
        (l = a.contextParams) != null ? l : {},
      );
    }
  }
}
