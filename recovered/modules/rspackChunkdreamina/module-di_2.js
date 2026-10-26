import $ from "rCO";
function ee(Z, Q) {
  er(Z, Q);
  et(Z);
}
function et(Z) {
  if (!(Z._writableState && !Z._writableState.emitClose)) {
    if (!Z._readableState || Z._readableState.emitClose) {
      Z.emit("close");
    }
  }
}
function er(Z, Q) {
  Z.emit("error", Q);
}
export default {
  destroy: function (Z, Q) {
    const X = this;
    const en = this._readableState && this._readableState.destroyed;
    const ei = this._writableState && this._writableState.destroyed;
    if (en || ei) {
      if (Q) {
        Q(Z);
      } else {
        if (Z) {
          if (this._writableState) {
            if (!this._writableState.errorEmitted) {
              this._writableState.errorEmitted = true;
              $.nextTick(er, this, Z);
            }
          } else {
            $.nextTick(er, this, Z);
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
            if (X._writableState.errorEmitted) {
              $.nextTick(et, X);
            } else {
              X._writableState.errorEmitted = true;
              $.nextTick(ee, X, Z);
            }
          } else {
            $.nextTick(ee, X, Z);
          }
        } else if (Q) {
          $.nextTick(et, X);
          Q(Z);
        } else {
          $.nextTick(et, X);
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
  errorOrDestroy: function (Z, Q) {
    const Z__readableState = Z._readableState;
    const Z__writableState = Z._writableState;
    if (
      (Z__readableState && Z__readableState.autoDestroy) ||
      (Z__writableState && Z__writableState.autoDestroy)
    ) {
      Z.destroy(Q);
    } else {
      Z.emit("error", Q);
    }
  },
};
