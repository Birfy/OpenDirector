import $ from "./module-TVO.js";
function ee(Z, Q) {
  Z.emit("error", Q);
}
export default {
  destroy: function (Z, Q) {
    const X = this;
    const et = this._readableState && this._readableState.destroyed;
    const er = this._writableState && this._writableState.destroyed;
    if (et || er) {
      if (Q) {
        Q(Z);
      } else {
        if (Z) {
          if (this._writableState) {
            if (!this._writableState.errorEmitted) {
              this._writableState.errorEmitted = true;
              $.nextTick(ee, this, Z);
            }
          } else {
            $.nextTick(ee, this, Z);
          }
        }
      }
    } else {
      if (this._readableState) {
        this._readableState.destroyed = true;
      }
      if (this._writableState) {
        this._writableState.destroyed = true;
      }
      this._destroy(Z || null, function (Z) {
        if (!Q && Z) {
          if (X._writableState) {
            if (!X._writableState.errorEmitted) {
              X._writableState.errorEmitted = true;
              $.nextTick(ee, X, Z);
            }
          } else {
            $.nextTick(ee, X, Z);
          }
        } else if (Q) {
          Q(Z);
        }
      });
    }
    return this;
  },
  undestroy: function () {
    if (this._readableState) {
      this._readableState.destroyed = false;
      this._readableState.reading = false;
      this._readableState.ended = false;
      this._readableState.endEmitted = false;
    }
    if (this._writableState) {
      this._writableState.destroyed = false;
      this._writableState.ended = false;
      this._writableState.ending = false;
      this._writableState.finalCalled = false;
      this._writableState.prefinished = false;
      this._writableState.finished = false;
      this._writableState.errorEmitted = false;
    }
  },
};
