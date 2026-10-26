const n = function (r) {
  return r && r.Math === Math && r;
};
module.exports =
  n(typeof globalThis === "object" && globalThis) ||
  n(typeof window === "object" && window) ||
  n(typeof self === "object" && self) ||
  n(typeof global === "object" && global) ||
  (function () {
    return this;
  })() ||
  this ||
  Function("return this")();
