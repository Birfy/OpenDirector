import $ from "./module-H8.js";
function tt(J, Z) {
  tr(J, Z);
  te(J);
}
function te(J) {
  if (!(J._writableState && !J._writableState.emitClose)) {
    if (!J._readableState || J._readableState.emitClose) {
      J.emit("close");
    }
  }
}
function tr(J, Z) {
  J.emit("error", Z);
}
export default {
  destroy: function (J, Z) {
    const Q = this;
    const tn = this._readableState && this._readableState.destroyed;
    const ti = this._writableState && this._writableState.destroyed;
    if (tn || ti) {
      if (Z) {
        Z(J);
      } else {
        if (J) {
          if (this._writableState) {
            if (!this._writableState.errorEmitted) {
              this._writableState.errorEmitted = true;
              $.nextTick(tr, this, J);
            }
          } else {
            $.nextTick(tr, this, J);
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
            if (Q._writableState.errorEmitted) {
              $.nextTick(te, Q);
            } else {
              Q._writableState.errorEmitted = true;
              $.nextTick(tt, Q, J);
            }
          } else {
            $.nextTick(tt, Q, J);
          }
        } else if (Z) {
          $.nextTick(te, Q);
          Z(J);
        } else {
          $.nextTick(te, Q);
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
  errorOrDestroy: function (J, Z) {
    const J__readableState = J._readableState;
    const J__writableState = J._writableState;
    if (
      (J__readableState && J__readableState.autoDestroy) ||
      (J__writableState && J__writableState.autoDestroy)
    ) {
      J.destroy(Z);
    } else {
      J.emit("error", Z);
    }
  },
};
