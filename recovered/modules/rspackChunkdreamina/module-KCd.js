import r from "QWK";
import a from "Dm";
import o from "Kt";
import s from "kF";
class n extends s.v {
  constructor(...e) {
    super(...e);
    this.eventName = "subject_search_status";
  }
}
class u extends s.o {
  _getCollectorClass() {
    return n;
  }
  _validateParams(e) {
    ["status"].forEach((t) => {
      a.F4(e[t], "[SubjectSearchStatusReporter] ".concat(t, " is required"));
    });
  }
  constructor(e) {
    super({}, e);
    this._containerService = e;
  }
}
export { u as a };
u = r.Cg(
  [
    r.Qj(0, o._),
    r.Sn("design:type", Function),
    r.Sn("design:paramtypes", [o._ === undefined ? Object : o._]),
  ],
  u,
);
