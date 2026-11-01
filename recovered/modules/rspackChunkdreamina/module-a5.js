import $ from "./module-TVO.js";
import er from "./module-D8_2.js";
import en from "./module-Jr.js";
const ee =
  Object.keys ||
  ((Z) => {
    const Q = [];
    for (const X in Z) {
      Q.push(X);
    }
    return Q;
  });
export default es;
const et = Object.create(require("Rp"));
et.inherits = require("Hs");
et.inherits(es, er);
for (let ei = ee(en.prototype), ea = 0; ea < ei.length; ea++) {
  const eo = ei[ea];
  if (!es.prototype[eo]) {
    es.prototype[eo] = en.prototype[eo];
  }
}
function es(Z) {
  if (!(this instanceof es)) {
    return new es(Z);
  }
  er.call(this, Z);
  en.call(this, Z);
  if (Z && Z.readable === false) {
    this.readable = false;
  }
  if (Z && Z.writable === false) {
    this.writable = false;
  }
  this.allowHalfOpen = true;
  if (Z && Z.allowHalfOpen === false) {
    this.allowHalfOpen = false;
  }
  this.once("end", ef);
}
function ef() {
  if (!(this.allowHalfOpen || this._writableState.ended)) {
    $.nextTick(eu, this);
  }
}
function eu(Z) {
  Z.end();
}
Object.defineProperty(es.prototype, "writableHighWaterMark", {
  enumerable: false,
  get: function () {
    return this._writableState.highWaterMark;
  },
});
Object.defineProperty(es.prototype, "destroyed", {
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
es.prototype._destroy = function (Z, Q) {
  this.push(null);
  this.end();
  $.nextTick(Q, Z);
};
