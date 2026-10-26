import $ from "rCO";
import et from "./module-TSU.js";
import er from "./module-Cg5.js";
const ee =
  Object.keys ||
  ((Z) => {
    const Q = [];
    for (const X in Z) {
      Q.push(X);
    }
    return Q;
  });
export default eo;
require("Hs")(eo, et);
for (let en = ee(er.prototype), ei = 0; ei < en.length; ei++) {
  const ea = en[ei];
  if (!eo.prototype[ea]) {
    eo.prototype[ea] = er.prototype[ea];
  }
}
function eo(Z) {
  if (!(this instanceof eo)) {
    return new eo(Z);
  }
  et.call(this, Z);
  er.call(this, Z);
  this.allowHalfOpen = true;
  if (Z) {
    if (Z.readable === false) {
      this.readable = false;
    }
    if (Z.writable === false) {
      this.writable = false;
    }
    if (Z.allowHalfOpen === false) {
      this.allowHalfOpen = false;
      this.once("end", es);
    }
  }
}
function es() {
  if (!this._writableState.ended) {
    $.nextTick(ef, this);
  }
}
function ef(Z) {
  Z.end();
}
Object.defineProperty(eo.prototype, "writableHighWaterMark", {
  enumerable: false,
  get: function () {
    return this._writableState.highWaterMark;
  },
});
Object.defineProperty(eo.prototype, "writableBuffer", {
  enumerable: false,
  get: function () {
    return this._writableState && this._writableState.getBuffer();
  },
});
Object.defineProperty(eo.prototype, "writableLength", {
  enumerable: false,
  get: function () {
    return this._writableState.length;
  },
});
Object.defineProperty(eo.prototype, "destroyed", {
  enumerable: false,
  get: function () {
    return (
      this._readableState !== undefined &&
      this._writableState !== undefined &&
      this._readableState.destroyed &&
      this._writableState.destroyed
    );
  },
  set: function (Z) {
    if (
      this._readableState !== undefined &&
      this._writableState !== undefined
    ) {
      this._readableState.destroyed = Z;
      this._writableState.destroyed = Z;
    }
  },
});
