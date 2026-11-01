let $;
export class Rand {
  constructor(J) {
    this.rand = J;
  }
  generate(J) {
    return this._rand(J);
  }
  _rand(J) {
    if (this.rand.getBytes) {
      return this.rand.getBytes(J);
    }
    for (var Z = new Uint8Array(J), Q = 0; Q < Z.length; Q++) {
      Z[Q] = this.rand.getByte();
    }
    return Z;
  }
}
export default function (J) {
  if (!$) {
    $ = new Rand(null);
  }
  return $.generate(J);
}
if (typeof self === "object") {
  if (self.crypto && self.crypto.getRandomValues) {
    Rand.prototype._rand = function (J) {
      const Z = new Uint8Array(J);
      self.crypto.getRandomValues(Z);
      return Z;
    };
  } else if (self.msCrypto && self.msCrypto.getRandomValues) {
    Rand.prototype._rand = function (J) {
      const Z = new Uint8Array(J);
      self.msCrypto.getRandomValues(Z);
      return Z;
    };
  } else if (typeof window === "object") {
    Rand.prototype._rand = function () {
      throw Error("Not implemented yet");
    };
  }
} else {
  try {
    const te = require("./module-lu.js");
    if (typeof te.randomBytes !== "function") {
      throw Error("Not supported");
    }
    Rand.prototype._rand = function (J) {
      return te.randomBytes(J);
    };
  } catch (J) {}
}
