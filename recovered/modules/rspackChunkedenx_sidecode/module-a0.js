import { assert, cachedProperty, encode, parseBytes } from "./module-ty_2_2.js";
const assert_1 = assert;
const parseBytes_1 = parseBytes;
const cachedProperty_1 = cachedProperty;
function tn(J, Z) {
  this.eddsa = J;
  this._secret = parseBytes_1(Z.secret);
  if (J.isPoint(Z.pub)) {
    this._pub = Z.pub;
  } else {
    this._pubBytes = parseBytes_1(Z.pub);
  }
}
tn.fromPublic = function (J, pub) {
  if (pub instanceof tn) {
    return pub;
  }
  return new tn(J, {
    pub,
  });
};
tn.fromSecret = function (J, secret) {
  if (secret instanceof tn) {
    return secret;
  }
  return new tn(J, {
    secret,
  });
};
tn.prototype.secret = function () {
  return this._secret;
};
cachedProperty_1(tn, "pubBytes", function () {
  return this.eddsa.encodePoint(this.pub());
});
cachedProperty_1(tn, "pub", function () {
  if (this._pubBytes) {
    return this.eddsa.decodePoint(this._pubBytes);
  }
  return this.eddsa.g.mul(this.priv());
});
cachedProperty_1(tn, "privBytes", function () {
  const eddsa = this.eddsa;
  const Z = this.hash();
  const Q = eddsa.encodingLength - 1;
  const $ = Z.slice(0, eddsa.encodingLength);
  $[0] &= 248;
  $[Q] &= 127;
  $[Q] |= 64;
  return $;
});
cachedProperty_1(tn, "priv", function () {
  return this.eddsa.decodeInt(this.privBytes());
});
cachedProperty_1(tn, "hash", function () {
  return this.eddsa.hash().update(this.secret()).digest();
});
cachedProperty_1(tn, "messagePrefix", function () {
  return this.hash().slice(this.eddsa.encodingLength);
});
tn.prototype.sign = function (J) {
  assert_1(this._secret, "KeyPair can only verify");
  return this.eddsa.sign(J, this);
};
tn.prototype.verify = function (J, Z) {
  return this.eddsa.verify(J, Z, this);
};
tn.prototype.getSecret = function (J) {
  assert_1(this._secret, "KeyPair is public only");
  return encode(this.secret(), J);
};
tn.prototype.getPublic = function (J) {
  return encode(this.pubBytes(), J);
};
export default tn;
