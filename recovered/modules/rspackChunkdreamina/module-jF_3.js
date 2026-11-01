if (require.j == "wl4") var a = require("./module-r6.js");
function o(e, t) {
  return e.getSortIndex() - t.getSortIndex();
}
export class P {
  get timerTasks() {
    return this._timerTasks;
  }
  get waitingTasks() {
    return this._waitingTasks;
  }
  advance(e) {
    let t = this._timerTasks.peek();
    while (t !== null) {
      if (t.getCallback() === null) {
        this._timerTasks.remove();
      } else {
        if (!(t.getStartTime() <= e)) {
          return;
        }
        this._timerTasks.remove();
        t.setSortIndex(t.getExpirationTime());
        this._waitingTasks.insert(t);
      }
      t = this._timerTasks.peek();
    }
  }
  constructor() {
    this._timerTasks = new a.H(o);
    this._waitingTasks = new a.H(o);
  }
}
