import $ from "./module-H8.js";
import te from "./module-Z9.js";
import tr from "./module-mP.js";
const tt =
  Object.keys ||
  ((J) => {
    const Z = [];
    for (const Q in J) {
      Z.push(Q);
    }
    return Z;
  });
export default ta;
require("./module-ULy.js")(ta, te);
for (let tn = tt(tr.prototype), ti = 0; ti < tn.length; ti++) {
  const to = tn[ti];
  if (!ta.prototype[to]) {
    ta.prototype[to] = tr.prototype[to];
  }
}
function ta(J) {
  if (!(this instanceof ta)) {
    return new ta(J);
  }
  te.call(this, J);
  tr.call(this, J);
  this.allowHalfOpen = true;
  if (J) {
    if (J.readable === false) {
      this.readable = false;
    }
    if (J.writable === false) {
      this.writable = false;
    }
    if (J.allowHalfOpen === false) {
      this.allowHalfOpen = false;
      this.once("end", ts);
    }
  }
}
function ts() {
  if (!this._writableState.ended) {
    $.nextTick(tf, this);
  }
}
function tf(J) {
  J.end();
}
Object.defineProperty(ta.prototype, "writableHighWaterMark", {
  enumerable: false,
  get: function () {
    return this._writableState.highWaterMark;
  },
});
Object.defineProperty(ta.prototype, "writableBuffer", {
  enumerable: false,
  get: function () {
    return this._writableState && this._writableState.getBuffer();
  },
});
Object.defineProperty(ta.prototype, "writableLength", {
  enumerable: false,
  get: function () {
    return this._writableState.length;
  },
});
Object.defineProperty(ta.prototype, "destroyed", {
  enumerable: false,
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
