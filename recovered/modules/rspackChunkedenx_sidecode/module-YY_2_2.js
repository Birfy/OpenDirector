import { Buffer } from "./module-s6_2_2.js";
import tt from "./module-IB_3_2.js";
export default function (J, Z, Q, te) {
  if (!Buffer.isBuffer(J)) {
    J = Buffer.from(J, "binary");
  }
  if (
    Z &&
    (Buffer.isBuffer(Z) || (Z = Buffer.from(Z, "binary")), Z.length !== 8)
  ) {
    throw RangeError("salt should be Buffer with 8 byte length");
  }
  for (
    var tr = Q / 8,
      tn = Buffer.alloc(tr),
      iv = Buffer.alloc(te || 0),
      to = Buffer.alloc(0);
    tr > 0 || te > 0;
  ) {
    const ta = new tt();
    ta.update(to);
    ta.update(J);
    if (Z) {
      ta.update(Z);
    }
    to = ta.digest();
    let ts = 0;
    if (tr > 0) {
      const tf = tn.length - tr;
      ts = Math.min(tr, to.length);
      to.copy(tn, tf, 0, ts);
      tr -= ts;
    }
    if (ts < to.length && te > 0) {
      const tu = iv.length - te;
      const tc = Math.min(te, to.length - ts);
      to.copy(iv, tu, ts, ts + tc);
      te -= tc;
    }
  }
  to.fill(0);
  return {
    key: tn,
    iv,
  };
}
