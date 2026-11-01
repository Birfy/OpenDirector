import { Buffer } from "b58";
export const encrypt = function (t, e, r) {
  for (var f = e.length, n = Buffer.allocUnsafe(f), a = -1; ++a < f;) {
    n[a] = ((t, e, r) => {
      const f = t._cipher.encryptBlock(t._prev)[0] ^ e;
      t._prev = Buffer.concat([t._prev.slice(1), Buffer.from([r ? e : f])]);
      return f;
    })(t, e[a], r);
  }
  return n;
};
