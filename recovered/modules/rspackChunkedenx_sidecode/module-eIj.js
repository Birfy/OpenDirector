import $ from "./module-qJ_12.js";
export const encrypt = function (J, Z) {
  const Q = $(Z, J._prev);
  J._prev = J._cipher.encryptBlock(Q);
  return J._prev;
};
export const decrypt = function (J, Z) {
  const J__prev = J._prev;
  J._prev = Z;
  return $(J._cipher.decryptBlock(Z), J__prev);
};
