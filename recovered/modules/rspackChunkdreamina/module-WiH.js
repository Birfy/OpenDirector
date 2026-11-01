import r from "QWK";
import a from "Dm";
import o from "Kt";
import s from "kF";
class n extends s.v {
  constructor(...e) {
    super(...e);
    this.eventName = "content_audit_status";
  }
}
export class g extends s.o {
  _getCollectorClass() {
    return n;
  }
  _validateParams(e) {
    ["status", "review_type"].forEach((t) => {
      a.F4(e[t], "[ContentAuditStatusReporter] ".concat(t, " is required"));
    });
  }
  constructor(e) {
    super({}, e);
    this._containerService = e;
  }
}
g = r.Cg(
  [
    r.Qj(0, o._),
    r.Sn("design:type", Function),
    r.Sn("design:paramtypes", [o._ === undefined ? Object : o._]),
  ],
  g,
);
