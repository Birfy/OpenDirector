import r from "QWK";
import o from "Dm";
import n from "Kt";
import a from "kF";
class s extends a.v {
  constructor(...e) {
    super(...e);
    this.eventName = "agent_session_operate";
  }
}
export class Z extends a.o {
  _getCollectorClass() {
    return s;
  }
  _validateParams(e) {
    this._validateRequiredFields(e);
  }
  _validateRequiredFields(e) {
    ["action"].forEach((t) => {
      o.F4(e[t], "[AgentSessionOperateReporter] ".concat(t, " is required"));
    });
  }
  constructor(e, t) {
    super(e, t);
    this._containerService = t;
  }
}
Z = r.Cg(
  [
    r.Qj(1, n._),
    r.Sn("design:type", Function),
    r.Sn("design:paramtypes", [
      typeof Partial === "undefined" ? Object : Partial,
      n._ === undefined ? Object : n._,
    ]),
  ],
  Z,
);
