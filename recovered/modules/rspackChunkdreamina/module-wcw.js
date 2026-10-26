import n from "yI";
let i;
export function v6() {
  let resolve;
  let reject;
  return {
    promise: new Promise((resolvePromise, rejectPromise) => {
      resolve = resolvePromise;
      reject = rejectPromise;
    }),
    resolve,
    reject,
  };
}
const o = () => undefined;
const c = {
  debug: o,
  error: o,
  info: o,
  log: o,
  time: o,
  timeEnd: o,
  timeLog: o,
  warn: o,
};
export class Ve {
  static setLogInstance(e) {
    Ve._instance = e;
  }
  static setEnvironmentFlag(e) {}
  static hideConsole() {
    globalThis.console = c;
    Ve._instance = c;
  }
  static showConsole() {
    globalThis.console = Ve._console;
    Ve._instance = Ve._console;
  }
  static debug(e) {
    for (
      var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), i = 1;
      i < t;
      i++
    ) {
      r[i - 1] = arguments[i];
    }
    Ve._instance.debug(e, ...r);
  }
  static error(e) {
    for (
      var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), i = 1;
      i < t;
      i++
    ) {
      r[i - 1] = arguments[i];
    }
    Ve._instance.error(e, ...r);
  }
  static info(e) {
    for (
      var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), i = 1;
      i < t;
      i++
    ) {
      r[i - 1] = arguments[i];
    }
    Ve._instance.info(e, ...r);
  }
  static log(e) {
    for (
      var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), i = 1;
      i < t;
      i++
    ) {
      r[i - 1] = arguments[i];
    }
    Ve._instance.log(e, ...r);
  }
  static time(e) {
    Ve._instance.time(e);
  }
  static timeEnd(e) {
    Ve._instance.timeEnd(e);
  }
  static timeLog(e) {
    for (
      var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), i = 1;
      i < t;
      i++
    ) {
      r[i - 1] = arguments[i];
    }
    Ve._instance.timeLog(e, ...r);
  }
  static warn(e) {
    for (
      var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), i = 1;
      i < t;
      i++
    ) {
      r[i - 1] = arguments[i];
    }
    Ve._instance.warn(e, ...r);
  }
}
Ve._instance = c;
Ve._console = console;
globalThis.showConsole = () => Ve.showConsole();
globalThis.hideConsole = () => Ve.hideConsole();
const s = () => {
  if (globalThis.performance === undefined) {
    return undefined;
  }
  return globalThis.performance;
};
const d = function (e) {
  const detail =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  const r = s();
  if (r && e) {
    if (!r.getEntriesByName(e).length) {
      r.mark(e, {
        detail,
      });
    }
  }
};
export var jo = function (e) {
  const t =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (e) {
    d("".concat(e, "_START"), t);
  }
};
export var qD = function (e) {
  const t =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (e) {
    d("".concat(e, "_END"), t);
  }
};
export var HQ = function (e) {
  const t =
    arguments.length > 1 && arguments[1] !== undefined
      ? arguments[1]
      : "".concat(e, "_START");
  const r =
    arguments.length > 2 && arguments[2] !== undefined
      ? arguments[2]
      : "".concat(e, "_END");
  const i = s();
  if (i) {
    try {
      return i.measure(e, t, r);
    } catch (e) {
      return;
    }
  }
};
export var qc = function (e) {
  const t =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : e;
  const r = s();
  if (r && e) {
    r.clearMarks("".concat(e, "_START"));
    r.clearMarks("".concat(e, "_END"));
    r.clearMeasures(t);
  }
};
export function sg() {
  const e =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  const t =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return function (r, i, a) {
    const a_value = a.value;
    a.value = n.A(a_value, e, t);
    return a;
  };
}
const g = "PERSISTENT_CACHE";
const h = new Map();
const p = () => {
  try {
    var e;
    if (
      globalThis.localStorage !== undefined &&
      ((e = globalThis.navigator) == null ? undefined : e.cookieEnabled)
    ) {
      return globalThis.localStorage;
    }
  } catch (e) {}
};
const y = (e) => {
  if (e) {
    try {
      return JSON.parse(e);
    } catch (error) {
      Ve.log("JSON.parse failed", error == null ? undefined : error.message);
      return;
    }
  }
};
const T = (e) => {
  var t = p();
  if (t) {
    try {
      return t.getItem(e);
    } catch (error) {
      Ve.log(
        "localStorage.getItem failed",
        error == null ? undefined : error.message,
      );
    }
  }
  return h.get(e);
};
const b = () => {
  var e = p();
  if (!e && i) {
    return i;
  }
  var t = y(T(g));
  if (
    t &&
    typeof t === "object" &&
    Array.isArray(t.FIFO) &&
    t.data &&
    typeof t.data === "object"
  ) {
    if (!e) {
      i = t;
    }
    return t;
  }
  var r = {
    FIFO: [],
    data: {},
  };
  if (!e) {
    i = r;
  }
  return r;
};
const C = (e, t) => {
  var r = e.FIFO.indexOf(t);
  if (r !== -1) {
    e.FIFO.splice(r, 1);
  }
  e.FIFO.unshift(t);
};
export var i0 = {
  set(e, t) {
    const r = b();
    r.data[e] = t;
    C(r, e);
    try {
      ((e, t) => {
        var r = p();
        if (r) {
          try {
            r.setItem(e, t);
            return;
          } catch (error) {
            Ve.log(
              "localStorage.setItem failed",
              error == null ? undefined : error.message,
            );
          }
        }
        h.set(e, t);
      })(g, JSON.stringify(r));
      i = r;
    } catch (error) {
      Ve.log(
        "JSON.stringify failed",
        error == null ? undefined : error.message,
      );
    }
  },
  get(e) {
    const t = b();
    if (t.FIFO.includes(e)) {
      C(t, e);
      return t.data[e];
    }
    return y(T(e));
  },
};
Object.defineProperty(exports, "dx", {
  enumerable: true,
  get: () => "c",
});
Object.defineProperty(exports, "k8", {
  enumerable: true,
  get: () => "t",
});
Object.defineProperty(exports, "rT", {
  enumerable: true,
  get: () => "a",
});
