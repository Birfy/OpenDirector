function i(t) {
  return Object.prototype.toString.call(t);
}
export const isArray = function (t) {
  if (Array.isArray) {
    return Array.isArray(t);
  }
  return i(t) === "[object Array]";
};
export const isBoolean = function (t) {
  return typeof t === "boolean";
};
export const isNull = function (t) {
  return t === null;
};
export const isNullOrUndefined = function (t) {
  return t == null;
};
export const isNumber = function (t) {
  return typeof t === "number";
};
export const isString = function (t) {
  return typeof t === "string";
};
export const isSymbol = function (t) {
  return typeof t === "symbol";
};
export const isUndefined = function (t) {
  return t === undefined;
};
export const isRegExp = function (t) {
  return i(t) === "[object RegExp]";
};
export const isObject = function (t) {
  return typeof t === "object" && t !== null;
};
export const isDate = function (t) {
  return i(t) === "[object Date]";
};
export const isError = function (t) {
  return i(t) === "[object Error]" || t instanceof Error;
};
export const isFunction = function (t) {
  return typeof t === "function";
};
export const isPrimitive = function (t) {
  return (
    t === null ||
    typeof t === "boolean" ||
    typeof t === "number" ||
    typeof t === "string" ||
    typeof t === "symbol" ||
    t === undefined
  );
};
export const isBuffer = require("wS").Buffer.isBuffer;
