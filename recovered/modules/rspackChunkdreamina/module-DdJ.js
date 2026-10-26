import r from "QWK";
import a from "Dm";
import o from "Kt";
import s from "kF";
class n extends s.v {
  constructor(...e) {
    super(...e);
    this.eventName = "generate_subject_voice_status";
  }
}
export class p extends s.o {
  _getCollectorClass() {
    return n;
  }
  _validateParams(e) {
    ["status"].forEach((t) => {
      a.F4(
        e[t],
        "[GenerateSubjectVoiceStatusReporter] ".concat(t, " is required"),
      );
    });
  }
  constructor(e) {
    super({}, e);
    this._containerService = e;
  }
}
p = r.Cg(
  [
    r.Qj(0, o._),
    r.Sn("design:type", Function),
    r.Sn("design:paramtypes", [o._ === undefined ? Object : o._]),
  ],
  p,
);
