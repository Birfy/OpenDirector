import $ from "./module-EH.js";
function tt(J, Z) {
  J.emit("error", Z);
}
export default {
  destroy: function (J, Z) {
    const Q = this;
    const te = this._readableState && this._readableState.destroyed;
    const tr = this._writableState && this._writableState.destroyed;
    if (te || tr) {
      if (Z) {
        Z(J);
      } else {
        if (J) {
          if (this._writableState) {
            if (!this._writableState.errorEmitted) {
              this._writableState.errorEmitted = true;
              $.nextTick(tt, this, J);
            }
          } else {
            $.nextTick(tt, this, J);
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
      this._destroy(J || null, function (J) {
        if (!Z && J) {
          if (Q._writableState) {
            if (!Q._writableState.errorEmitted) {
              Q._writableState.errorEmitted = true;
              $.nextTick(tt, Q, J);
            }
          } else {
            $.nextTick(tt, Q, J);
          }
        } else if (Z) {
          Z(J);
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
