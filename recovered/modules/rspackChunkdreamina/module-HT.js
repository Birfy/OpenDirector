import r from "oa";
import n from "QWK";
import a from "kF";
import o from "Dm";
import s from "Kt";
import c from "xL";
const l = new Set([
  "select",
  "pin",
  "unpin",
  "rename",
  "copy",
  "delete",
  "settings_show",
]);
class d extends a.v {
  constructor(...e) {
    super(...e);
    this.eventName = "canvas_project_action";
  }
}
export class B extends c.N {
  _validateParams(e) {
    ["action", "action_method"].forEach((t) => {
      o.F4(e[t], "[CanvasProjectActionReporter] ".concat(t, " is required"));
    });
    if (l.has(e.action)) {
      o.X3(
        typeof e.project_id === "string" && e.project_id.trim().length > 0,
        "[CanvasProjectActionReporter] project_id is required for project actions",
      );
    }
  }
  _getCollectorClass() {
    return d;
  }
  constructor(e, t) {
    super(
      r._(
        {
          actionMethod: "click",
        },
        e,
      ),
      t,
    );
    this._containerService = t;
  }
}
B = n.Cg(
  [
    n.Qj(1, s._),
    n.Sn("design:type", Function),
    n.Sn("design:paramtypes", [
      typeof Partial === "undefined" ? Object : Partial,
      s._ === undefined ? Object : s._,
    ]),
  ],
  B,
);
