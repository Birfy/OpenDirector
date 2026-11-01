import r from "QWK";
import s from "Dm";
import i from "Kt";
import n from "kF";
class d extends n.v {
  constructor(...e) {
    super(...e);
    this.eventName = "perf_resource_upload";
  }
}
export class A extends n.o {
  _getCollectorClass() {
    return d;
  }
  _validateParams(e) {
    this._validateRequiredFields(e);
  }
  _validateRequiredFields(e) {
    ["category", "size", "type", "status", "is_hit_cache"].forEach((t) => {
      s.F4(e[t], "[PerfResourceUploadReporter] ".concat(t, " is required"));
    });
  }
  constructor(e, t) {
    super(e, t);
    this._containerService = t;
    this._reportDev = true;
  }
}
A = r.Cg(
  [
    r.Qj(1, i._),
    r.Sn("design:type", Function),
    r.Sn("design:paramtypes", [
      typeof Partial === "undefined" ? Object : Partial,
      i._ === undefined ? Object : i._,
    ]),
  ],
  A,
);
