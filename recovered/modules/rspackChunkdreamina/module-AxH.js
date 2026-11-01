import r from "QWK";
import o from "Dm";
import n from "Kt";
import a from "kF";
class s extends a.v {
  constructor(...e) {
    super(...e);
    this.eventName = "click_modal_switch";
  }
}
export class t extends a.o {
  _getCollectorClass() {
    return s;
  }
  _validateParams(e) {
    this._validateRequiredFields(e);
  }
  _validateRequiredFields(e) {
    ["before", "after", "position"].forEach((t) => {
      o.F4(e[t], "[ClickModalSwitchReporter] ".concat(t, " is required"));
    });
  }
  constructor(e) {
    super({}, e);
    this._containerService = e;
  }
}
t = r.Cg(
  [
    r.Qj(0, n._),
    r.Sn("design:type", Function),
    r.Sn("design:paramtypes", [n._ === undefined ? Object : n._]),
  ],
  t,
);
