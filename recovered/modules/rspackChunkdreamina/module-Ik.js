if (require.j == "wl4") var a = require("./module-Dm.js");
if (require.j == "wl4") var o = require("./module-vrE.js");
if (require.j == "wl4") var i = require("./module-aO_3.js");
if (require.j == "wl4") var n = require("./module-Z8.js");
export class P {
  isLocked() {
    return this._writer || this._readerCount !== 0;
  }
  lock() {
    return new Promise((resolve) => {
      if (this._writer) {
        let t = new n.j();
        this._waitingWriters.push(t);
        t.onActive(() => {
          this._writerEnterGate1(resolve);
        });
      } else {
        this._writerEnterGate1(resolve);
      }
    });
  }
  tryLock() {
    return !this._writer && !(this._readerCount > 0) && (this.lock(), true);
  }
  unLock() {
    a.F4(this._writer);
    this._writer.release();
  }
  lockShared() {
    return new Promise((resolve) => {
      if (this._writer) {
        if (!this._waitingReader) {
          this._waitingReader = new n.j();
        }
        this._waitingReader.onActive(() => {
          this._readerEnterGate1(resolve);
        });
      } else {
        this._readerEnterGate1(resolve);
      }
    });
  }
  tryLockShared() {
    return !this._writer && (this.lockShared(), true);
  }
  unLockShared() {
    a.F4(this._reader);
    if (this._writer) {
      a.X3(this._writer.status === i.J4.Unlocked);
    }
    this._reader.release();
  }
  get _readerCount() {
    if (this._reader) {
      return this._reader.counter;
    }
    return 0;
  }
  _writerEnterGate1(e) {
    a.X3(!this._writer);
    this._writer = new i.nS();
    if (this._readerCount > 0) {
      o.J(this._reader.onUnlocked)(() => {
        this._writerEnterGate2(e);
      });
    } else {
      this._writerEnterGate2(e);
    }
  }
  _writerEnterGate2(e) {
    a.F4(this._writer);
    a.X3(this._readerCount === 0);
    this._writer.acquire();
    o.J(this._writer.onUnlocked)(() => {
      a.F4(this._writer);
      this._writer = undefined;
      this._moveForward();
    });
    e();
  }
  _readerEnterGate1(e) {
    a.X3(!this._writer);
    this._waitingReader = undefined;
    if (this._reader) {
      this._reader.acquire();
    } else {
      this._reader = new i.US();
      this._reader.acquire();
      o.J(this._reader.onUnlocked)(() => {
        this._moveForward();
      });
    }
    e();
  }
  _moveForward() {
    if (!this._writer) {
      if (this._waitingWriters.length > 0) {
        return void this._waitingWriters.shift().notify();
      }
      if (this._waitingReader) {
        this._waitingReader.notify();
      }
    }
  }
  constructor() {
    this._waitingWriters = [];
  }
}
