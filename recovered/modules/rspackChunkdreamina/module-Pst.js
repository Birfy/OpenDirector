import { j6, n8, uk, xs } from "./module-Yx.js";
export var f = {
  DEBUG: 1,
  LOG: 2,
  WARN: 3,
  ERROR: 4,
};
const a = [
  "Boolean",
  "Number",
  "String",
  "Undefined",
  "Null",
  "Date",
  "Object",
];
export var V = (() => {
  function e(t, r) {
    xs(this, e);
    this.name = t || "";
    this._prefix = "[".concat(this.name, "]");
    this.logCacheLevel = (r == null ? undefined : r.logCacheLevel) || 3;
    this.logMaxSize = (r == null ? undefined : r.logMaxSize) || 204800;
    this.logSize = 0;
    this.logTextArray = [];
  }
  return j6(
    e,
    [
      {
        key: "debug",
        value: function () {
          let t;
          for (var r = arguments.length, n = Array(r), a = 0; a < r; a++) {
            n[a] = arguments[a];
          }
          this.logCache.apply(this, [f.DEBUG].concat(n));
          if (!e.disabled) {
            (t = console).debug.apply(t, [this._prefix, o()].concat(n));
          }
        },
      },
      {
        key: "log",
        value: function () {
          let t;
          for (var r = arguments.length, n = Array(r), a = 0; a < r; a++) {
            n[a] = arguments[a];
          }
          this.logCache.apply(this, [f.LOG].concat(n));
          if (!e.disabled) {
            (t = console).log.apply(t, [this._prefix, o()].concat(n));
          }
        },
      },
      {
        key: "warn",
        value: function () {
          let t;
          for (var r = arguments.length, n = Array(r), a = 0; a < r; a++) {
            n[a] = arguments[a];
          }
          this.logCache.apply(this, [f.WARN].concat(n));
          if (!e.disabled) {
            (t = console).warn.apply(t, [this._prefix, o()].concat(n));
          }
        },
      },
      {
        key: "error",
        value: function () {
          let t;
          for (var r = arguments.length, n = Array(r), a = 0; a < r; a++) {
            n[a] = arguments[a];
          }
          this.logCache.apply(this, [f.ERROR].concat(n));
          if (!e.disabled) {
            (t = console).error.apply(t, [this._prefix, o()].concat(n));
          }
        },
      },
      {
        key: "logCache",
        value: function (e) {
          if (!(e < this.logCacheLevel)) {
            let t = "";
            try {
              for (
                var r = arguments.length, i = Array(r > 1 ? r - 1 : 0), s = 1;
                s < r;
                s++
              ) {
                i[s - 1] = arguments[s];
              }
              const u = i.map((e) =>
                (function e(t, r, i) {
                  if (!i) {
                    i = 1;
                  }
                  if (!r) {
                    r = 2;
                  }
                  const s = {};
                  if (!t || uk(t) !== "object") {
                    return t;
                  }
                  const o = Object.prototype.toString.call(t).slice(8, -1);
                  if (!a.includes(o)) {
                    return o;
                  }
                  if (!(i > r)) {
                    for (const u in t) {
                      if (Object.prototype.hasOwnProperty.call(t, u)) {
                        if (i === r) {
                          s[u] = ((e) => {
                            if (uk(e) !== "object") {
                              return e;
                            }
                            const t = Object.prototype.toString
                              .call(e)
                              .slice(8, -1);
                            switch (t) {
                              case "Array":
                              case "Uint8Array":
                              case "ArrayBuffer":
                                return t + "[" + e.length + "]";
                              case "Object":
                                return "{}";
                              default:
                                return t;
                            }
                          })(t[u]);
                        } else if (uk(t[u]) === "object") {
                          s[u] = e(t[u], r, i + 1);
                        } else {
                          s[u] = t[u];
                        }
                      }
                    }
                    return s;
                  }
                })(e),
              );
              t = this._prefix + o() + JSON.stringify(u);
            } catch (e) {
              return;
            }
            if (e >= this.logCacheLevel) {
              this.logSize += t.length;
              this.logTextArray.push(t);
            }
            if (this.logSize > this.logMaxSize) {
              const l = this.logTextArray.shift();
              this.logSize -= l.length;
            }
          }
        },
      },
      {
        key: "getLogCache",
        value: function () {
          const e = this.logTextArray.join("\n");
          this.reset();
          return e;
        },
      },
      {
        key: "reset",
        value: function () {
          this.logTextArray = [];
          this.logSize = 0;
        },
      },
      {
        key: "table",
        value: function () {
          let t;
          if (!e.disabled) {
            console.group(this._prefix);
            (t = console).table.apply(t, arguments);
            console.groupEnd();
          }
        },
      },
      {
        key: "setLogLevel",
        value: function (e) {
          this.logCacheLevel = e;
        },
      },
    ],
    [
      {
        key: "enable",
        value: function () {
          e.disabled = false;
        },
      },
      {
        key: "disable",
        value: function () {
          e.disabled = true;
        },
      },
    ],
  );
})();
function o() {
  return new Date().toLocaleString();
}
n8(V, "disabled", true);
