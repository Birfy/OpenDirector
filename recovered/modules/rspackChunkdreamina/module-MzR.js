if (require.j == "wl4") var a = require("./module-Tw_2.js");
export class j {
  get needContinue() {
    return this._needContinue;
  }
  continueExecute(e) {
    this._needContinue = true;
    this._task.setCallback(e);
  }
  execute(e, t = {}) {
    let r = a.Wl(e, t);
    this._scheduler.addTask(r);
  }
  constructor(e, t) {
    this._task = e;
    this._scheduler = t;
    this._needContinue = false;
  }
}
