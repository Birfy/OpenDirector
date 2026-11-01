import { hmac } from "./module-T6.js";
import { encode, toArray } from "./module-zT_2_2.js";
import te from "./module-fn_2.js";
class tr {
  constructor(J) {
    if (!(this instanceof tr)) {
      return new tr(J);
    }
    this.hash = J.hash;
    this.predResist = !!J.predResist;
    this.outLen = this.hash.outSize;
    this.minEntropy = J.minEntropy || this.hash.hmacStrength;
    this._reseed = null;
    this.reseedInterval = null;
    this.K = null;
    this.V = null;
    const Z = toArray(J.entropy, J.entropyEnc || "hex");
    const Q = toArray(J.nonce, J.nonceEnc || "hex");
    const $ = toArray(J.pers, J.persEnc || "hex");
    te(
      Z.length >= this.minEntropy / 8,
      "Not enough entropy. Minimum is: " + this.minEntropy + " bits",
    );
    this._init(Z, Q, $);
  }
  _init(J, Z, Q) {
    const $ = J.concat(Z).concat(Q);
    this.K = Array(this.outLen / 8);
    this.V = Array(this.outLen / 8);
    for (let tt = 0; tt < this.V.length; tt++) {
      this.K[tt] = 0;
      this.V[tt] = 1;
    }
    this._update($);
    this._reseed = 1;
    this.reseedInterval = 281474976710656;
  }
  _hmac() {
    return new hmac(this.hash, this.K);
  }
  _update(J) {
    let Z = this._hmac().update(this.V).update([0]);
    if (J) {
      Z = Z.update(J);
    }
    this.K = Z.digest();
    this.V = this._hmac().update(this.V).digest();
    if (J) {
      this.K = this._hmac().update(this.V).update([1]).update(J).digest();
      this.V = this._hmac().update(this.V).digest();
    }
  }
  reseed(J, Z, Q, $) {
    if (typeof Z !== "string") {
      $ = Q;
      Q = Z;
      Z = null;
    }
    J = toArray(J, Z);
    Q = toArray(Q, $);
    te(
      J.length >= this.minEntropy / 8,
      "Not enough entropy. Minimum is: " + this.minEntropy + " bits",
    );
    this._update(J.concat(Q || []));
    this._reseed = 1;
  }
  generate(J, Z, Q, $) {
    if (this._reseed > this.reseedInterval) {
      throw Error("Reseed is required");
    }
    if (typeof Z !== "string") {
      $ = Q;
      Q = Z;
      Z = null;
    }
    if (Q) {
      Q = toArray(Q, $ || "hex");
      this._update(Q);
    }
    for (var te = []; te.length < J;) {
      this.V = this._hmac().update(this.V).digest();
      te = te.concat(this.V);
    }
    const tr = te.slice(0, J);
    this._update(Q);
    this._reseed++;
    return encode(tr, Z);
  }
}
export default tr;
