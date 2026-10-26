import $ from "./module-EH.js";
import tr from "./module-Dq_3_2.js";
import tn from "./module-jB.js";
const tt =
  Object.keys ||
  ((J) => {
    const Z = [];
    for (const Q in J) {
      Z.push(Q);
    }
    return Z;
  });
export default ts;
const te = Object.create(require("./module-H96.js"));
te.inherits = require("./module-ULy.js");
te.inherits(ts, tr);
for (let ti = tt(tn.prototype), to = 0; to < ti.length; to++) {
  const ta = ti[to];
  if (!ts.prototype[ta]) {
    ts.prototype[ta] = tn.prototype[ta];
  }
}
function ts(J) {
  if (!(this instanceof ts)) {
    return new ts(J);
  }
  tr.call(this, J);
  tn.call(this, J);
  if (J && J.readable === false) {
    this.readable = false;
  }
  if (J && J.writable === false) {
    this.writable = false;
  }
  this.allowHalfOpen = true;
  if (J && J.allowHalfOpen === false) {
    this.allowHalfOpen = false;
  }
  this.once("end", tf);
}
function tf() {
  if (!(this.allowHalfOpen || this._writableState.ended)) {
    $.nextTick(tu, this);
  }
}
function tu(J) {
  J.end();
}
Object.defineProperty(ts.prototype, "writableHighWaterMark", {
  enumerable: false,
  get: function () {
    return this._writableState.highWaterMark;
  },
});
Object.defineProperty(ts.prototype, "destroyed", {
  get: function () {
    return (
      this._readableState !== undefined &&
      this._writableState !== undefined &&
      this._readableState.destroyed &&
      this._writableState.destroyed
    );
  },
  set: function (J) {
    if (
      this._readableState !== undefined &&
      this._writableState !== undefined
    ) {
      this._readableState.destroyed = J;
      this._writableState.destroyed = J;
    }
  },
});
ts.prototype._destroy = function (J, Z) {
  this.push(null);
  this.end();
  $.nextTick(Z, J);
};
