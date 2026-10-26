import r from "QWK";
import o from "Dm";
import n from "Kt";
import a from "kF";
class s extends a.v {
  constructor(...e) {
    super(...e);
    this.eventName = "voice_clone_generate_status";
  }
}
export class m extends a.o {
  _getCollectorClass() {
    return s;
  }
  _validateParams(e) {
    this._validateRequiredFields(e);
    this._validateStatus(e);
  }
  _validateRequiredFields(e) {
    ["process_duration", "voice_duration", "submit_id", "status"].forEach(
      (t) => {
        o.F4(
          e[t],
          "[VoiceCloneGenerateStatusReporter] ".concat(t, " is required"),
        );
      },
    );
  }
  _validateStatus(e) {
    if (e.status === "fail") {
      o.F4(
        e.error_msg,
        "[VoiceCloneGenerateStatusReporter] error_msg is required when status is fail",
      );
    }
  }
  constructor(e) {
    super({}, e);
    this._containerService = e;
  }
}
m = r.Cg(
  [
    r.Qj(0, n._),
    r.Sn("design:type", Function),
    r.Sn("design:paramtypes", [n._ === undefined ? Object : n._]),
  ],
  m,
);
