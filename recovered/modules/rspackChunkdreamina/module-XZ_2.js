import { Buffer } from "wS";
import f from "./module-kh_2.js";
import n from "./module-lzm.js";
import a from "./module-iwn.js";
const s = {
  binary: true,
  hex: true,
  base64: true,
};
export var getDiffieHellman = function (t) {
  return new a(new Buffer(n[t].prime, "hex"), new Buffer(n[t].gen, "hex"));
};
export { getDiffieHellman as createDiffieHellmanGroup };
export { getDiffieHellman as DiffieHellmanGroup };
export var DiffieHellman = function t(e, r, n, o) {
  if (Buffer.isBuffer(r) || s[r] === undefined) {
    return t(e, "binary", r, n);
  }
  r = r || "binary";
  o = o || "binary";
  n = n || new Buffer([2]);
  if (!Buffer.isBuffer(n)) {
    n = new Buffer(n, o);
  }
  if (typeof e === "number") {
    return new a(f(e, n), n, true);
  }
  if (!Buffer.isBuffer(e)) {
    e = new Buffer(e, r);
  }
  return new a(e, n, true);
};
export { DiffieHellman as createDiffieHellman };
