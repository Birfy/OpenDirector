import { j6, xs } from "./module-KQ.js";
export var A = j6(
  function e() {
    xs(this, e);
    this.buffer = new Uint8Array(0);
  },
  [
    {
      key: "write",
      value: function () {
        const e = this;
        for (var t = arguments.length, r = Array(t), n = 0; n < t; n++) {
          r[n] = arguments[n];
        }
        r.forEach((t) => {
          if (t) {
            e.buffer = (function (e) {
              let t = 0;
              for (
                var r = arguments.length, n = Array(r > 1 ? r - 1 : 0), i = 1;
                i < r;
                i++
              ) {
                n[i - 1] = arguments[i];
              }
              n.forEach((e) => {
                t += e.length;
              });
              const a = new e(t);
              let s = 0;
              n.forEach((e) => {
                a.set(e, s);
                s += e.length;
              });
              return a;
            })(Uint8Array, e.buffer, t);
          } else {
            window.console.warn(t);
          }
        });
      },
    },
  ],
  [
    {
      key: "writeUint16",
      value: function (e) {
        return new Uint8Array([(e >> 8) & 255, 255 & e]);
      },
    },
    {
      key: "writeUint32",
      value: function (e) {
        return new Uint8Array([
          e >> 24,
          (e >> 16) & 255,
          (e >> 8) & 255,
          255 & e,
        ]);
      },
    },
  ],
);
