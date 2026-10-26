import i from "./module-ZRF.js";
import { Buffer } from "b58";
import n from "./module-Vzb.js";
export const encrypt = function (t, e) {
  const r = Math.ceil(e.length / 16);
  const length = t._cache.length;
  t._cache = Buffer.concat([t._cache, Buffer.allocUnsafe(16 * r)]);
  for (let s = 0; s < r; s++) {
    const o = ((t) => {
      const e = t._cipher.encryptBlockRaw(t._prev);
      n(t._prev);
      return e;
    })(t);
    const h = length + 16 * s;
    t._cache.writeUInt32BE(o[0], h + 0);
    t._cache.writeUInt32BE(o[1], h + 4);
    t._cache.writeUInt32BE(o[2], h + 8);
    t._cache.writeUInt32BE(o[3], h + 12);
  }
  const d = t._cache.slice(0, e.length);
  t._cache = t._cache.slice(e.length);
  return i(e, d);
};
