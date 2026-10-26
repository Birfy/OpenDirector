import a from "QWK";
import r from "Dm";
import s from "Kt";
import l from "kF";
class n extends l.v {
  constructor(...t) {
    super(...t);
    this.eventName = "skill_create_status";
  }
}
export class j extends l.o {
  _getCollectorClass() {
    return n;
  }
  _validateParams(t) {
    r.F4(t.status, "[SkillCreateStatusReporter] status is required");
    r.F4(t.enter_from, "[SkillCreateStatusReporter] enter_from is required");
  }
  constructor(t, e) {
    super(t, e);
    this._containerService = e;
  }
}
j = a.Cg(
  [
    a.Qj(1, s._),
    a.Sn("design:type", Function),
    a.Sn("design:paramtypes", [
      typeof SkillCreateStatusParams === "undefined"
        ? Object
        : SkillCreateStatusParams,
      s._ === undefined ? Object : s._,
    ]),
  ],
  j,
);
