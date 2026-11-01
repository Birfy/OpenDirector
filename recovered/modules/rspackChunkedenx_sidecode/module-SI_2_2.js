import { Buffer } from "./module-pH.js";
import { ec } from "./module-jm.js";
import te from "./module-ai.js";
export default function (J) {
  return new tn(J);
}
var tr = {
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
class tn {
  constructor(J) {
    this.curveType = tr[J];
    if (!this.curveType) {
      this.curveType = {
        name: J,
      };
    }
    this.curve = new ec(this.curveType.name);
    this.keys = undefined;
  }
  generateKeys(J, Z) {
    this.keys = this.curve.genKeyPair();
    return this.getPublicKey(J, Z);
  }
  computeSecret(J, Z, Q) {
    Z = Z || "utf8";
    if (!Buffer.isBuffer(J)) {
      J = new Buffer(J, Z);
    }
    return ti(
      this.curve
        .keyFromPublic(J)
        .getPublic()
        .mul(this.keys.getPrivate())
        .getX(),
      Q,
      this.curveType.byteLength,
    );
  }
  getPublicKey(J, Z) {
    const Q = this.keys.getPublic(Z === "compressed", true);
    if (Z === "hybrid") {
      if (Q[Q.length - 1] % 2) {
        Q[0] = 7;
      } else {
        Q[0] = 6;
      }
    }
    return ti(Q, J);
  }
  getPrivateKey(J) {
    return ti(this.keys.getPrivate(), J);
  }
  setPublicKey(J, Z) {
    Z = Z || "utf8";
    if (!Buffer.isBuffer(J)) {
      J = new Buffer(J, Z);
    }
    this.keys._importPublic(J);
    return this;
  }
  setPrivateKey(J, Z) {
    Z = Z || "utf8";
    if (!Buffer.isBuffer(J)) {
      J = new Buffer(J, Z);
    }
    let Q = new te(J);
    Q = Q.toString(16);
    this.keys = this.curve.genKeyPair();
    this.keys._importPrivate(Q);
    return this;
  }
}
function ti(J, Z, Q) {
  if (!Array.isArray(J)) {
    J = J.toArray();
  }
  let tt = new Buffer(J);
  if (Q && tt.length < Q) {
    const te = new Buffer(Q - tt.length);
    te.fill(0);
    tt = Buffer.concat([te, tt]);
  }
  if (Z) {
    return tt.toString(Z);
  }
  return tt;
}
tr.p224 = tr.secp224r1;
tr.p256 = tr.secp256r1 = tr.prime256v1;
tr.p192 = tr.secp192r1 = tr.prime192v1;
tr.p384 = tr.secp384r1;
tr.p521 = tr.secp521r1;
