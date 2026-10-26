function $(J) {
  return Object.prototype.toString.call(J);
}
export const isArray = function (J) {
  if (Array.isArray) {
    return Array.isArray(J);
  }
  return $(J) === "[object Array]";
};
export const isBoolean = function (J) {
  return typeof J === "boolean";
};
export const isNull = function (J) {
  return J === null;
};
export const isNullOrUndefined = function (J) {
  return J == null;
};
export const isNumber = function (J) {
  return typeof J === "number";
};
export const isString = function (J) {
  return typeof J === "string";
};
export const isSymbol = function (J) {
  return typeof J === "symbol";
};
export const isUndefined = function (J) {
  return J === undefined;
};
export const isRegExp = function (J) {
  return $(J) === "[object RegExp]";
};
export const isObject = function (J) {
  return typeof J === "object" && J !== null;
};
export const isDate = function (J) {
  return $(J) === "[object Date]";
};
export const isError = function (J) {
  return $(J) === "[object Error]" || J instanceof Error;
};
export const isFunction = function (J) {
  return typeof J === "function";
};
export const isPrimitive = function (J) {
  return (
    J === null ||
    typeof J === "boolean" ||
    typeof J === "number" ||
    typeof J === "string" ||
    typeof J === "symbol" ||
    J === undefined
  );
};
export const isBuffer = require("./module-pH.js").Buffer.isBuffer;
