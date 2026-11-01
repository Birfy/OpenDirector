import i from "./module-ZRF.js";
export const encrypt = function (t, e) {
  const r = i(e, t._prev);
  t._prev = t._cipher.encryptBlock(r);
  return t._prev;
};
export const decrypt = function (t, e) {
  const t__prev = t._prev;
  t._prev = e;
  return i(t._cipher.decryptBlock(e), t__prev);
};
