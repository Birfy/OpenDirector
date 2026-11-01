import i from "./module-cGB.js";
import { assert } from "./module-M1_2.js";
class n {
  constructor(t, e) {
    this.ec = t;
    this.priv = null;
    this.pub = null;
    if (e.priv) {
      this._importPrivate(e.priv, e.privEnc);
    }
    if (e.pub) {
      this._importPublic(e.pub, e.pubEnc);
    }
  }
  static fromPublic(t, pub, pubEnc) {
    if (pub instanceof n) {
      return pub;
    }
    return new n(t, {
      pub,
      pubEnc,
    });
  }
  static fromPrivate(t, priv, privEnc) {
    if (priv instanceof n) {
      return priv;
    }
    return new n(t, {
      priv,
      privEnc,
    });
  }
  validate() {
    const t = this.getPublic();
    if (t.isInfinity()) {
      return {
        result: false,
        reason: "Invalid public key",
      };
    }
    if (t.validate()) {
      if (t.mul(this.ec.curve.n).isInfinity()) {
        return {
          result: true,
          reason: null,
        };
      }
      return {
        result: false,
        reason: "Public key * N != O",
      };
    }
    return {
      result: false,
      reason: "Public key is not a point",
    };
  }
  getPublic(t, e) {
    if (typeof t === "string") {
      e = t;
      t = null;
    }
    if (!this.pub) {
      this.pub = this.ec.g.mul(this.priv);
    }
    if (e) {
      return this.pub.encode(e, t);
    }
    return this.pub;
  }
  getPrivate(t) {
    if (t === "hex") {
      return this.priv.toString(16, 2);
    }
    return this.priv;
  }
  _importPrivate(t, e) {
    this.priv = new i(t, e || 16);
    this.priv = this.priv.umod(this.ec.curve.n);
  }
  _importPublic(t, e) {
    if (t.x || t.y) {
      if (this.ec.curve.type === "mont") {
        assert(t.x, "Need x coordinate");
      } else if (
        this.ec.curve.type === "short" ||
        this.ec.curve.type === "edwards"
      ) {
        assert(t.x && t.y, "Need both x and y coordinate");
      }
      this.pub = this.ec.curve.point(t.x, t.y);
      return;
    }
    this.pub = this.ec.curve.decodePoint(t, e);
  }
  derive(t) {
    if (!t.validate()) {
      assert(t.validate(), "public point not validated");
    }
    return t.mul(this.priv).getX();
  }
  sign(t, e, r) {
    return this.ec.sign(t, this, e, r);
  }
  verify(t, e) {
    return this.ec.verify(t, e, this);
  }
  inspect() {
    return (
      "<Key priv: " +
      (this.priv && this.priv.toString(16, 2)) +
      " pub: " +
      (this.pub && this.pub.inspect()) +
      " >"
    );
  }
}
export default n;
