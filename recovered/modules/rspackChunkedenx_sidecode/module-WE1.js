import { Buffer } from "./module-pH.js";
import tt from "./module-CH.js";
import te from "./module-lz.js";
import tr from "./module-XrI.js";
const tn = {
  binary: true,
  hex: true,
  base64: true,
};
export var getDiffieHellman = function (J) {
  return new tr(new Buffer(te[J].prime, "hex"), new Buffer(te[J].gen, "hex"));
};
export { getDiffieHellman as createDiffieHellmanGroup };
export { getDiffieHellman as DiffieHellmanGroup };
export var DiffieHellman = function J(Z, Q, te, ti) {
  if (Buffer.isBuffer(Q) || tn[Q] === undefined) {
    return J(Z, "binary", Q, te);
  }
  Q = Q || "binary";
  ti = ti || "binary";
  te = te || new Buffer([2]);
  if (!Buffer.isBuffer(te)) {
    te = new Buffer(te, ti);
  }
  if (typeof Z === "number") {
    return new tr(tt(Z, te), te, true);
  }
  if (!Buffer.isBuffer(Z)) {
    Z = new Buffer(Z, Q);
  }
  return new tr(Z, te, true);
};
export { DiffieHellman as createDiffieHellman };
