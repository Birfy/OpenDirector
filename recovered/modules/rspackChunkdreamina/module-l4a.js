import { Buffer } from "b58";
import f from "./module-ZRF.js";
function n(t, e, r) {
  const e_length = e.length;
  const a = f(e, t._cache);
  t._cache = t._cache.slice(e_length);
  t._prev = Buffer.concat([t._prev, r ? e : a]);
  return a;
}
export const encrypt = function (t, e, r) {
  let f;
  let a = Buffer.allocUnsafe(0);
  while (e.length) {
    if (t._cache.length === 0) {
      t._cache = t._cipher.encryptBlock(t._prev);
      t._prev = Buffer.allocUnsafe(0);
    }
    if (t._cache.length <= e.length) {
      f = t._cache.length;
      a = Buffer.concat([a, n(t, e.slice(0, f), r)]);
      e = e.slice(f);
    } else {
      a = Buffer.concat([a, n(t, e, r)]);
      break;
    }
  }
  return a;
};
