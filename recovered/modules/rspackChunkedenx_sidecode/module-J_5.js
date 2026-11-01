"use strict";
const n = function (t) {
  return t && t.Math === Math && t;
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
