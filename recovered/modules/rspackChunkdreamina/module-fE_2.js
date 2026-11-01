if (require.j == "wl4") var a = require("./module-kBz.js");
if (require.j == "wl4") var o = require("./module-UK_2.js");
if (require.j == "wl4") var i = require("./module-A7.js");
export class k {
  get value() {
    if (!this._didRun) {
      this._handle.dispose();
      this._executor();
    }
    if (this._error) {
      throw this._error;
    }
    return this._value;
  }
  get isInitialized() {
    return this._didRun;
  }
  get onExecutor() {
    if (!this._executorEmitter) {
      this._executorEmitter = new i.v();
    }
    return this._executorEmitter.event;
  }
  dispose() {
    this._handle.dispose();
  }
  constructor(e) {
    this._didRun = false;
    this._executor = () => {
      try {
        this._value = e();
      } catch (error) {
        this._error = error;
        throw error;
      } finally {
        this._didRun = true;
        if (this._value && this._executorEmitter) {
          this._executorEmitter.fire();
        }
      }
    };
    this._handle = a.V(() => this._executor(), {
      priorityLevel: o.J.IdlePriority,
    });
  }
}
