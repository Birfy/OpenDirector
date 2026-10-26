import { Buffer } from "b58";
import f from "irr";
export default function (t, e, r, n) {
  if (!Buffer.isBuffer(t)) {
    t = Buffer.from(t, "binary");
  }
  if (
    e &&
    (Buffer.isBuffer(e) || (e = Buffer.from(e, "binary")), e.length !== 8)
  ) {
    throw RangeError("salt should be Buffer with 8 byte length");
  }
  for (
    var a = r / 8,
      s = Buffer.alloc(a),
      iv = Buffer.alloc(n || 0),
      h = Buffer.alloc(0);
    a > 0 || n > 0;
  ) {
    const d = new f();
    d.update(h);
    d.update(t);
    if (e) {
      d.update(e);
    }
    h = d.digest();
    let c = 0;
    if (a > 0) {
      const u = s.length - a;
      c = Math.min(a, h.length);
      h.copy(s, u, 0, c);
      a -= c;
    }
    if (c < h.length && n > 0) {
      const l = iv.length - n;
      const b = Math.min(n, h.length - c);
      h.copy(iv, l, c, c + b);
      n -= b;
    }
  }
  h.fill(0);
  return {
    key: s,
    iv,
  };
}
