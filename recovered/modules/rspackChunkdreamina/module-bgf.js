import i from "QWK";
import r from "Dm";
import n from "Kt";
import o from "kF";
class s extends o.v {
  constructor(...e) {
    super(...e);
    this.eventName = "reference_popup";
  }
}
export class f extends o.o {
  _getCollectorClass() {
    return s;
  }
  _validateParams(e) {
    this._validateRequiredFields(e);
    this._validateAction(e);
  }
  _validateRequiredFields(e) {
    ["action"].forEach((t) => {
      r.F4(e[t], "[ReferencePopupReporter] ".concat(t, " is required"));
    });
  }
  _validateAction(e) {
    switch (e.action) {
      case "click_reference":
      case "adjust_reference_level":
        r.F4(
          e.reference_set,
          "[ReferencePopupReporter] reference_set is required when action is ".concat(
            e.action,
          ),
        );
    }
  }
  constructor(e) {
    super({}, e);
    this._containerService = e;
  }
}
f = i.Cg(
  [
    i.Qj(0, n._),
    i.Sn("design:type", Function),
    i.Sn("design:paramtypes", [n._ === undefined ? Object : n._]),
  ],
  f,
);
