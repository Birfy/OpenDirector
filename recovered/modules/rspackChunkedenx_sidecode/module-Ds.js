import $ from "./module-ai.js";
import { assert } from "./module-ty_2_2.js";
class te {
  constructor(J, Z) {
    this.ec = J;
    this.priv = null;
    this.pub = null;
    if (Z.priv) {
      this._importPrivate(Z.priv, Z.privEnc);
    }
    if (Z.pub) {
      this._importPublic(Z.pub, Z.pubEnc);
    }
  }
  static fromPublic(J, pub, pubEnc) {
    if (pub instanceof te) {
      return pub;
    }
    return new te(J, {
      pub,
      pubEnc,
    });
  }
  static fromPrivate(J, priv, privEnc) {
    if (priv instanceof te) {
      return priv;
    }
    return new te(J, {
      priv,
      privEnc,
    });
  }
  validate() {
    const J = this.getPublic();
    if (J.isInfinity()) {
      return {
        result: false,
        reason: "Invalid public key",
      };
    }
    if (J.validate()) {
      if (J.mul(this.ec.curve.n).isInfinity()) {
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
  getPublic(J, Z) {
    if (typeof J === "string") {
      Z = J;
      J = null;
    }
    if (!this.pub) {
      this.pub = this.ec.g.mul(this.priv);
    }
    if (Z) {
      return this.pub.encode(Z, J);
    }
    return this.pub;
  }
  getPrivate(J) {
    if (J === "hex") {
      return this.priv.toString(16, 2);
    }
    return this.priv;
  }
  _importPrivate(J, Z) {
    this.priv = new $(J, Z || 16);
    this.priv = this.priv.umod(this.ec.curve.n);
  }
  _importPublic(J, Z) {
    if (J.x || J.y) {
      if (this.ec.curve.type === "mont") {
        assert(J.x, "Need x coordinate");
      } else if (
        this.ec.curve.type === "short" ||
        this.ec.curve.type === "edwards"
      ) {
        assert(J.x && J.y, "Need both x and y coordinate");
      }
      this.pub = this.ec.curve.point(J.x, J.y);
      return;
    }
    this.pub = this.ec.curve.decodePoint(J, Z);
  }
  derive(J) {
    if (!J.validate()) {
      assert(J.validate(), "public point not validated");
    }
    return J.mul(this.priv).getX();
  }
  sign(J, Z, Q) {
    return this.ec.sign(J, this, Z, Q);
  }
  verify(J, Z) {
    return this.ec.verify(J, Z, this);
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
export default te;
