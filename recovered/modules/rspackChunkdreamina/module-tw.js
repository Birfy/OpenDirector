export default ((e) => {
  if (typeof ArrayBuffer === "function") {
    const t = e.lib.WordArray;
    const r = t.init;
    (t.init = function (e) {
      if (e instanceof ArrayBuffer) {
        e = new Uint8Array(e);
      }
      if (
        e instanceof Int8Array ||
        (typeof Uint8ClampedArray !== "undefined" &&
          e instanceof Uint8ClampedArray) ||
        e instanceof Int16Array ||
        e instanceof Uint16Array ||
        e instanceof Int32Array ||
        e instanceof Uint32Array ||
        e instanceof Float32Array ||
        e instanceof Float64Array
      ) {
        e = new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
      }
      if (e instanceof Uint8Array) {
        for (var t = e.byteLength, i = [], s = 0; s < t; s++) {
          i[s >>> 2] |= e[s] << (24 - (s % 4) * 8);
        }
        r.call(this, i, t);
      } else {
        r.apply(this, arguments);
      }
    }).prototype = t;
  }
  return e.lib.WordArray;
})(require("./module-kV_2.js"));
