import i from "QWK";
import r from "Dm";
import n from "Kt";
import o from "kF";
class s extends o.v {
  constructor(...e) {
    super(...e);
    this.eventName = "identification_status";
  }
}
export class W extends o.o {
  _getCollectorClass() {
    return s;
  }
  _validateParams(e) {
    this._validateRequiredFields(e);
    this._validateStatusRelatedFields(e);
  }
  _validateRequiredFields(e) {
    ["status", "type"].forEach((t) => {
      r.F4(e[t], "[IdentificationStatusReporter] ".concat(t, " is required"));
    });
  }
  _validateStatusRelatedFields(e) {
    if (e.status === "fail") {
      r.F4(
        e.fail_reason,
        "[IdentificationStatusReporter] fail_reason is required when status is fail",
      );
    }
  }
  constructor(e) {
    super({}, e);
    this._containerService = e;
    this.setParams({
      importType: "aigc_image",
    });
  }
}
W = i.Cg(
  [
    i.Qj(0, n._),
    i.Sn("design:type", Function),
    i.Sn("design:paramtypes", [n._ === undefined ? Object : n._]),
  ],
  W,
);
