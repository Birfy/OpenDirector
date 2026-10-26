import { Buffer } from "b58";
export const encrypt = function (t, e, r) {
  for (var f = e.length, n = Buffer.allocUnsafe(f), a = -1; ++a < f;) {
    n[a] = ((t, e, r) => {
      let f;
      let n;
      let a;
      for (var s = -1, o = 0; ++s < 8;) {
        f = t._cipher.encryptBlock(t._prev);
        n = e & (1 << (7 - s)) ? 128 : 0;
        o += (128 & (a = f[0] ^ n)) >> (s % 8);
        t._prev = ((t, e) => {
          const t_length = t.length;
          let f = -1;
          const n = Buffer.allocUnsafe(t.length);
          for (t = Buffer.concat([t, Buffer.from([e])]); ++f < t_length;) {
            n[f] = (t[f] << 1) | (t[f + 1] >> 7);
          }
          return n;
        })(t._prev, r ? n : a);
      }
      return o;
    })(t, e[a], r);
  }
  return n;
};
