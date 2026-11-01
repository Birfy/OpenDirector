import { j6, n8, xs } from "./module-KQ.js";
export var V = (() => {
  function e(t, r) {
    xs(this, e);
    this.name = t || "";
    this._prefix = "[".concat(this.name, "]");
    e.disabled = r;
  }
  return j6(
    e,
    [
      {
        key: "debug",
        value: function () {
          let t;
          if (!e.disabled) {
            for (var r = arguments.length, n = Array(r), i = 0; i < r; i++) {
              n[i] = arguments[i];
            }
            (t = console).debug.apply(t, [this._prefix].concat(n));
          }
        },
      },
      {
        key: "log",
        value: function () {
          let t;
          if (!e.disabled) {
            for (var r = arguments.length, n = Array(r), i = 0; i < r; i++) {
              n[i] = arguments[i];
            }
            (t = console).log.apply(t, [this._prefix].concat(n));
          }
        },
      },
      {
        key: "warn",
        value: function () {
          let t;
          if (!e.disabled) {
            for (var r = arguments.length, n = Array(r), i = 0; i < r; i++) {
              n[i] = arguments[i];
            }
            (t = console).warn.apply(t, [this._prefix].concat(n));
          }
        },
      },
      {
        key: "error",
        value: function () {
          let t;
          if (!e.disabled) {
            for (var r = arguments.length, n = Array(r), i = 0; i < r; i++) {
              n[i] = arguments[i];
            }
            (t = console).error.apply(t, [this._prefix].concat(n));
          }
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
n8(V, "disabled", true);
