import { Buffer } from "wS";
import { ec } from "./module-yR.js";
import n from "./module-cGB.js";
export default function (t) {
  return new s(t);
}
var a = {
  secp256k1: {
    name: "secp256k1",
    byteLength: 32,
  },
  secp224r1: {
    name: "p224",
    byteLength: 28,
  },
  prime256v1: {
    name: "p256",
    byteLength: 32,
  },
  prime192v1: {
    name: "p192",
    byteLength: 24,
  },
  ed25519: {
    name: "ed25519",
    byteLength: 32,
  },
  secp384r1: {
    name: "p384",
    byteLength: 48,
  },
  secp521r1: {
    name: "p521",
    byteLength: 66,
  },
};
class s {
  constructor(t) {
    this.curveType = a[t];
    if (!this.curveType) {
      this.curveType = {
        name: t,
      };
    }
    this.curve = new ec(this.curveType.name);
    this.keys = undefined;
  }
  generateKeys(t, e) {
    this.keys = this.curve.genKeyPair();
    return this.getPublicKey(t, e);
  }
  computeSecret(t, e, r) {
    e = e || "utf8";
    if (!Buffer.isBuffer(t)) {
      t = new Buffer(t, e);
    }
    return o(
      this.curve
        .keyFromPublic(t)
        .getPublic()
        .mul(this.keys.getPrivate())
        .getX(),
      r,
      this.curveType.byteLength,
    );
  }
  getPublicKey(t, e) {
    const r = this.keys.getPublic(e === "compressed", true);
    if (e === "hybrid") {
      if (r[r.length - 1] % 2) {
        r[0] = 7;
      } else {
        r[0] = 6;
      }
    }
    return o(r, t);
  }
  getPrivateKey(t) {
    return o(this.keys.getPrivate(), t);
  }
  setPublicKey(t, e) {
    e = e || "utf8";
    if (!Buffer.isBuffer(t)) {
      t = new Buffer(t, e);
    }
    this.keys._importPublic(t);
    return this;
  }
  setPrivateKey(t, e) {
    e = e || "utf8";
    if (!Buffer.isBuffer(t)) {
      t = new Buffer(t, e);
    }
    let r = new n(t);
    r = r.toString(16);
    this.keys = this.curve.genKeyPair();
    this.keys._importPrivate(r);
    return this;
  }
}
function o(t, e, r) {
  if (!Array.isArray(t)) {
    t = t.toArray();
  }
  let f = new Buffer(t);
  if (r && f.length < r) {
    const n = new Buffer(r - f.length);
    n.fill(0);
    f = Buffer.concat([n, f]);
  }
  if (e) {
    return f.toString(e);
  }
  return f;
}
a.p224 = a.secp224r1;
a.p256 = a.secp256r1 = a.prime256v1;
a.p192 = a.secp192r1 = a.prime192v1;
a.p384 = a.secp384r1;
a.p521 = a.secp521r1;
