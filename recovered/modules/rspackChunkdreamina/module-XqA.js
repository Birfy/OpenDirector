if (require.j == "wl4") var a = require("./module-Dm.js");
if (require.j == "wl4") var o = require("./module-nO5.js");
export class B {
  get userLocationInfo() {
    return this._locationInfo;
  }
  updateRequestInfo(e) {
    let { domainMap, locationInfo } = e;
    this._domainMap = domainMap;
    this._locationInfo = locationInfo;
    this.initializationBarrier.open();
  }
  getRequestURL(e) {
    a.X3(
      this._domainMap,
      "updateRequestInfo should be call first before logic",
    );
    a.X3(
      this._locationInfo,
      "updateRequestInfo should be call first before logic",
    );
    return this._getRequestUrlImpl(e);
  }
  _getRequestUrlImpl(e) {
    return `${this._domainMap[e.domainType]}${e.path}`;
  }
  constructor() {
    this.initializationBarrier = new o.W();
  }
}
