let i;
export class Rand {
  constructor(t) {
    this.rand = t;
  }
  generate(t) {
    return this._rand(t);
  }
  _rand(t) {
    if (this.rand.getBytes) {
      return this.rand.getBytes(t);
    }
    for (var e = new Uint8Array(t), r = 0; r < e.length; r++) {
      e[r] = this.rand.getByte();
    }
    return e;
  }
}
export default function (t) {
  if (!i) {
    i = new Rand(null);
  }
  return i.generate(t);
}
if (typeof self === "object") {
  if (self.crypto && self.crypto.getRandomValues) {
    Rand.prototype._rand = function (t) {
      const e = new Uint8Array(t);
      self.crypto.getRandomValues(e);
      return e;
    };
  } else if (self.msCrypto && self.msCrypto.getRandomValues) {
    Rand.prototype._rand = function (t) {
      const e = new Uint8Array(t);
      self.msCrypto.getRandomValues(e);
      return e;
    };
  } else if (typeof window === "object") {
    Rand.prototype._rand = function () {
      throw Error("Not implemented yet");
    };
  }
} else {
  try {
    const n = require("./module-luY.js");
    if (typeof n.randomBytes !== "function") {
      throw Error("Not supported");
    }
    Rand.prototype._rand = function (t) {
      return n.randomBytes(t);
    };
  } catch (t) {}
}
