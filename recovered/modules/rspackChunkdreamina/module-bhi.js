import r from "QWK";
import a from "Dm";
import o from "puv";
import s from "Kt";
import n from "kF";
import { r as r_1 } from "./module-DsS.js";
class c extends n.v {
  constructor(...e) {
    super(...e);
    this.eventName = "subject_action";
  }
}
class d extends n.o {
  _getCollectorClass() {
    return c;
  }
  _validateParams(e) {
    a.F4(e.action, "[SubjectActionReporter] action is required");
    if (e.action === r_1.SubjectListShow) {
      a.F4(
        e.subject_list_show_from,
        "[SubjectActionReporter] subject_list_show_from is required",
      );
    }
    if (
      e.action === r_1.SubjectDelete ||
      e.action === r_1.SubjectDeleteConfirm ||
      e.action === r_1.SubjectSetting
    ) {
      a.F4(e.subject_id, "[SubjectActionReporter] subject_id is required");
    }
  }
  constructor(e) {
    var teamId = o.y();
    super(
      teamId
        ? {
            teamId,
          }
        : {},
      e,
    );
    this._containerService = e;
  }
}
export { d as o };
d = r.Cg(
  [
    r.Qj(0, s._),
    r.Sn("design:type", Function),
    r.Sn("design:paramtypes", [s._ === undefined ? Object : s._]),
  ],
  d,
);
