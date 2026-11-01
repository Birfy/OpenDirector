import a from "QWK";
import r from "Dm";
import s from "Kt";
import l from "kF";
class n extends l.v {
  constructor(...t) {
    super(...t);
    this.eventName = "agent_skills_action";
  }
}
export class P extends l.o {
  _getCollectorClass() {
    return n;
  }
  _validateParams(t) {
    ["action", "action_method"].forEach((e) => {
      r.F4(t[e], "[AgentSkillsActionReporter] ".concat(e, " is required"));
    });
    if (t.action === "select") {
      ["skill_id", "skill_name", "skill_source"].forEach((e) => {
        r.F4(t[e], "[AgentSkillsActionReporter] ".concat(e, " is required"));
      });
    }
  }
  constructor(t, e) {
    super(t, e);
    this._containerService = e;
  }
}
P = a.Cg(
  [
    a.Qj(1, s._),
    a.Sn("design:type", Function),
    a.Sn("design:paramtypes", [
      typeof Partial === "undefined" ? Object : Partial,
      s._ === undefined ? Object : s._,
    ]),
  ],
  P,
);
