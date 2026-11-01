if (require.j == "wl4") var a = require("./module-MzR.js");
if (require.j == "wl4") var o = require("./module-Tw_2.js");
export class Q {
  workLoop(e, t, r) {
    let i = t;
    this._taskQueue.advance(i);
    let n = this._taskQueue.waitingTasks.peek();
    while (
      n !== null &&
      !(
        n.getExpirationTime() > i &&
        (!e || this._scheduler.shouldYieldToHost(r))
      )
    ) {
      if (n.getCallback() === undefined) {
        this._taskQueue.waitingTasks.remove();
      } else {
        let e = n.getCallback();
        let t = n.getExpirationTime() <= i;
        let c = r - i;
        n.clearCallback();
        let l = new a.j(n, this._scheduler);
        e(l, t, c);
        if (!l.needContinue) {
          this._taskQueue.waitingTasks.remove();
        }
        i = o.Ln();
        this._taskQueue.advance(i);
      }
      n = this._taskQueue.waitingTasks.peek();
    }
    return n !== null || (this._scheduler.requestHostTimeout(i), false);
  }
  constructor(e, t) {
    this._taskQueue = e;
    this._scheduler = t;
  }
}
