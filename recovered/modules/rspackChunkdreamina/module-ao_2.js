import { hmac } from "./module-Tis.js";
import f from "Ht";
import n from "TnJ";
class a {
  constructor(t) {
    if (!(this instanceof a)) {
      return new a(t);
    }
    this.hash = t.hash;
    this.predResist = !!t.predResist;
    this.outLen = this.hash.outSize;
    this.minEntropy = t.minEntropy || this.hash.hmacStrength;
    this._reseed = null;
    this.reseedInterval = null;
    this.K = null;
    this.V = null;
    const e = f.toArray(t.entropy, t.entropyEnc || "hex");
    const r = f.toArray(t.nonce, t.nonceEnc || "hex");
    const i = f.toArray(t.pers, t.persEnc || "hex");
    n(
      e.length >= this.minEntropy / 8,
      "Not enough entropy. Minimum is: " + this.minEntropy + " bits",
    );
    this._init(e, r, i);
  }
  _init(t, e, r) {
    const i = t.concat(e).concat(r);
    this.K = Array(this.outLen / 8);
    this.V = Array(this.outLen / 8);
    for (let f = 0; f < this.V.length; f++) {
      this.K[f] = 0;
      this.V[f] = 1;
    }
    this._update(i);
    this._reseed = 1;
    this.reseedInterval = 281474976710656;
  }
  _hmac() {
    return new hmac(this.hash, this.K);
  }
  _update(t) {
    let e = this._hmac().update(this.V).update([0]);
    if (t) {
      e = e.update(t);
    }
    this.K = e.digest();
    this.V = this._hmac().update(this.V).digest();
    if (t) {
      this.K = this._hmac().update(this.V).update([1]).update(t).digest();
      this.V = this._hmac().update(this.V).digest();
    }
  }
  reseed(t, e, r, i) {
    if (typeof e !== "string") {
      i = r;
      r = e;
      e = null;
    }
    t = f.toArray(t, e);
    r = f.toArray(r, i);
    n(
      t.length >= this.minEntropy / 8,
      "Not enough entropy. Minimum is: " + this.minEntropy + " bits",
    );
    this._update(t.concat(r || []));
    this._reseed = 1;
  }
  generate(t, e, r, i) {
    if (this._reseed > this.reseedInterval) {
      throw Error("Reseed is required");
    }
    if (typeof e !== "string") {
      i = r;
      r = e;
      e = null;
    }
    if (r) {
      r = f.toArray(r, i || "hex");
      this._update(r);
    }
    for (var n = []; n.length < t;) {
      this.V = this._hmac().update(this.V).digest();
      n = n.concat(this.V);
    }
    const a = n.slice(0, t);
    this._update(r);
    this._reseed++;
    return f.encode(a, e);
  }
}
export default a;
