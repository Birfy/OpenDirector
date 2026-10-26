import { Buffer } from "wS";
import f from "./module-ZRF.js";
export const encrypt = function (t, e) {
  while (t._cache.length < e.length) {
    t._cache = Buffer.concat([
      t._cache,
      ((t._prev = t._cipher.encryptBlock(t._prev)), t._prev),
    ]);
  }
  const r = t._cache.slice(0, e.length);
  t._cache = t._cache.slice(e.length);
  return f(e, r);
};
