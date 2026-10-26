export var publicEncrypt = require("./module-K7.js");
export var privateDecrypt = require("./module-sH.js");
export const privateEncrypt = function (J, Q) {
  return publicEncrypt(J, Q, true);
};
export const publicDecrypt = function (J, Q) {
  return privateDecrypt(J, Q, true);
};
