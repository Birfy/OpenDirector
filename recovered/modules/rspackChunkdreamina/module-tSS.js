export const encrypt = function (t, e) {
  return t._cipher.encryptBlock(e);
};
export const decrypt = function (t, e) {
  return t._cipher.decryptBlock(e);
};
