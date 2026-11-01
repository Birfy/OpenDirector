if (require.j == "wl4") var a = require("./module-Tw_2.js");
if (require.j == "wl4") var o = require("./module-vL_3.js");
export class N {
  dispose() {
    this._task.clearCallback();
  }
  updatePriorityLevel(priorityLevel) {
    let t = this._task.getCallback();
    if (!t) {
      return;
    }
    this._task.clearCallback();
    let r = a.Wl(t, {
      priorityLevel,
    });
    let i = this._task.getStartTime();
    let n = a.uN(priorityLevel);
    r.setStartTime(i);
    r.setExpirationTime(i + n);
    o.K().addTask(r);
    this._task = r;
  }
  constructor(e) {
    this._task = e;
  }
}
