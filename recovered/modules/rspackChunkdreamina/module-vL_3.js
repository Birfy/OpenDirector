let a;
if (require.j == "wl4") var o = require("./module-Fsv.js");
if (require.j == "wl4") var i = require("./module-jF_3.js");
if (require.j == "wl4") var n = require("./module-Tw_2.js");
if (require.j == "wl4") var c = require("./module-Dm.js");
if (require.j == "wl4") var l = require("./module-z7_2.js");
class m {
  get taskQueue() {
    return this._taskQueue;
  }
  get executor() {
    return this._executor;
  }
  setEnableInputPending(e) {
    this._enableInputPending = e;
  }
  addTask(e) {
    let t = n.Ln();
    if (e.getStartTime() > t) {
      e.setSortIndex(e.getStartTime());
      this._taskQueue.timerTasks.insert(e);
      if (
        this._taskQueue.waitingTasks.peek() === null &&
        e === this._taskQueue.timerTasks.peek()
      ) {
        if (this._isHostTimeoutScheduled) {
          this._executor.cancelHostTimeout();
        } else {
          this._isHostTimeoutScheduled = true;
        }
        this._executor.requestHostTimeout(
          this._handleHostTimeout,
          e.getStartTime() - t,
        );
      }
    } else {
      e.setSortIndex(e.getExpirationTime());
      this._taskQueue.waitingTasks.insert(e);
      if (!(this._isHostCallbackScheduled || this._isWorking)) {
        this._isHostCallbackScheduled = true;
        this._executor.requestHostCallback(this._handleHostCallback);
      }
    }
  }
  requestHostTimeout(e) {
    this._requestHostTimeout(e);
  }
  _requestHostTimeout(e) {
    c.X3(!this._isHostCallbackScheduled);
    c.X3(!this._isHostTimeoutScheduled);
    let t = this._taskQueue.timerTasks.peek();
    if (t !== null) {
      this._isHostTimeoutScheduled = true;
      this._executor.requestHostTimeout(
        this._handleHostTimeout,
        t.getStartTime() - e,
      );
    }
  }
  constructor() {
    this._isHostTimeoutScheduled = false;
    this._isHostCallbackScheduled = false;
    this._isWorking = false;
    this._enableInputPending = true;
    this._executor = l.M();
    this._taskQueue = new i.P();
    this._actuator = new o.Q(this._taskQueue, this);
    this.shouldYieldToHost = (() => {
      try {
        var e;
        var t;
        if (
          ((t = global.navigator) == null || (e = t.scheduling) == null
            ? undefined
            : e.isInputPending) !== undefined
        ) {
          let { scheduling } = global.navigator;
          return (t) =>
            !!(this._enableInputPending && scheduling.isInputPending()) ||
            n.Ln() >= t;
        }
      } catch (e) {}
      return (e) => n.Ln() >= e;
    })();
    this._handleHostTimeout = () => {
      this._isHostTimeoutScheduled = false;
      let e = n.Ln();
      this._taskQueue.advance(e);
      if (!this._isHostCallbackScheduled) {
        if (this._taskQueue.waitingTasks.peek() !== null) {
          this._isHostCallbackScheduled = true;
          this._executor.requestHostCallback(this._handleHostCallback);
          return;
        }
        this._requestHostTimeout(e);
      }
    };
    this._handleHostCallback = (e, t, r) => {
      this._isHostCallbackScheduled = false;
      if (this._isHostTimeoutScheduled) {
        this._isHostTimeoutScheduled = false;
        this._executor.cancelHostTimeout();
      }
      this._isWorking = true;
      try {
        return this._actuator.workLoop(e, t, r);
      } finally {
        this._isWorking = false;
      }
    };
  }
}
export function K() {
  if (!a) {
    a = new m();
  }
  return a;
}
