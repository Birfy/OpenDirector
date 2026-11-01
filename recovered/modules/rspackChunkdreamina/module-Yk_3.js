import n from "QWK";
import r from "cY";
export class j {
  get hasLogin() {
    return this._accountService.hasLogin;
  }
  login(e) {
    return this._accountService.login({
      platform: e.platform,
      source: e.source,
    });
  }
  onDidLogin(e) {
    return this._accountService.onDidLogin(e);
  }
  constructor(e) {
    this._accountService = e;
  }
}
j = n.Cg(
  [
    n.Qj(0, r.i),
    n.Sn("design:type", Function),
    n.Sn("design:paramtypes", [
      typeof IJimengAccountServiceType === "undefined"
        ? Object
        : IJimengAccountServiceType,
    ]),
  ],
  j,
);
