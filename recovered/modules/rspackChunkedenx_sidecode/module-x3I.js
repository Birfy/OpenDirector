export const encrypt = function (J, Z) {
  return J._cipher.encryptBlock(Z);
};
export const decrypt = function (J, Z) {
  return J._cipher.decryptBlock(Z);
};
