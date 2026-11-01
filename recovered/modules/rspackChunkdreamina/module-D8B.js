import r from "QWK";
import a from "Dm";
import o from "puv";
import s from "Kt";
import n from "kF";
import u from "Ib";
class c extends n.v {
  constructor(...e) {
    super(...e);
    this.eventName = "subject_setting_action";
  }
}
export class w extends n.o {
  _getCollectorClass() {
    return c;
  }
  _validateParams(e) {
    this._validateRequiredFields(e);
    this._validateConfirmFields(e);
  }
  _validateRequiredFields(e) {
    ["action", "enter_from"].forEach((t) => {
      a.F4(e[t], "[SubjectSettingActionReporter] ".concat(t, " is required"));
    });
  }
  _validateConfirmFields(e) {
    if (e.action === u.R.Confirm) {
      a.F4(
        e.subject_name,
        "[SubjectSettingActionReporter] subject_name is required",
      );
      a.F4(
        e.material_cnt,
        "[SubjectSettingActionReporter] material_cnt is required",
      );
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
w = r.Cg(
  [
    r.Qj(0, s._),
    r.Sn("design:type", Function),
    r.Sn("design:paramtypes", [s._ === undefined ? Object : s._]),
  ],
  w,
);
