export var publicEncrypt = require("./module-wtH.js");
export var privateDecrypt = require("./module-Z5.js");
export const privateEncrypt = function (Z, X) {
  return publicEncrypt(Z, X, true);
};
export const publicDecrypt = function (Z, X) {
  return privateDecrypt(Z, X, true);
};
