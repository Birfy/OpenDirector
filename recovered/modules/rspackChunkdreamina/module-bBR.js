import { assert, cachedProperty, encode, parseBytes } from "./module-M1_2.js";
const assert_1 = assert;
const parseBytes_1 = parseBytes;
const cachedProperty_1 = cachedProperty;
function s(t, e) {
  this.eddsa = t;
  this._secret = parseBytes_1(e.secret);
  if (t.isPoint(e.pub)) {
    this._pub = e.pub;
  } else {
    this._pubBytes = parseBytes_1(e.pub);
  }
}
s.fromPublic = function (t, pub) {
  if (pub instanceof s) {
    return pub;
  }
  return new s(t, {
    pub,
  });
};
s.fromSecret = function (t, secret) {
  if (secret instanceof s) {
    return secret;
  }
  return new s(t, {
    secret,
  });
};
s.prototype.secret = function () {
  return this._secret;
};
cachedProperty_1(s, "pubBytes", function () {
  return this.eddsa.encodePoint(this.pub());
});
cachedProperty_1(s, "pub", function () {
  if (this._pubBytes) {
    return this.eddsa.decodePoint(this._pubBytes);
  }
  return this.eddsa.g.mul(this.priv());
});
cachedProperty_1(s, "privBytes", function () {
  const eddsa = this.eddsa;
  const e = this.hash();
  const r = eddsa.encodingLength - 1;
  const i = e.slice(0, eddsa.encodingLength);
  i[0] &= 248;
  i[r] &= 127;
  i[r] |= 64;
  return i;
});
cachedProperty_1(s, "priv", function () {
  return this.eddsa.decodeInt(this.privBytes());
});
cachedProperty_1(s, "hash", function () {
  return this.eddsa.hash().update(this.secret()).digest();
});
cachedProperty_1(s, "messagePrefix", function () {
  return this.hash().slice(this.eddsa.encodingLength);
});
s.prototype.sign = function (t) {
  assert_1(this._secret, "KeyPair can only verify");
  return this.eddsa.sign(t, this);
};
s.prototype.verify = function (t, e) {
  return this.eddsa.verify(t, e, this);
};
s.prototype.getSecret = function (t) {
  assert_1(this._secret, "KeyPair is public only");
  return encode(this.secret(), t);
};
s.prototype.getPublic = function (t) {
  return encode(this.pubBytes(), t);
};
export default s;
