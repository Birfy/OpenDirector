if (require.j == "wl4") var a = require("./module-Dm.js");
export class d {
  unRegisterConfig(e) {
    a.Iv(
      "There is no such scenario yet, and no support capability is provided for the time being. If necessary, please contact infrastructure support",
    );
  }
  _listenerMiddlewareChange() {
    this._middlewareManager.onMiddlewareChange((e) => {
      this._middlewareChange(e);
    });
  }
  constructor(e) {
    this._middlewareManager = e;
    this._listenerMiddlewareChange();
  }
}
