import r from "QWK";
import a from "Dm";
import o from "M8X";
import s from "Kt";
import n from "rr";
import u from "kF";
class c extends u.v {
  constructor(...e) {
    super(...e);
    this.eventName = "import_material";
  }
}
export class k extends u.o {
  _getCollectorClass() {
    return c;
  }
  _validateParams(e) {
    this._validateRequiredFields(e);
    this._validatePosition(e);
  }
  _setWorkspaceId() {
    try {
      const e = o.cQ(this._containerService, n.D).data.selectedWorkspaceId;
      if (e !== undefined) {
        this._params.workspaceId = e;
      }
    } catch (e) {}
  }
  _validateRequiredFields(e) {
    [
      "action_type",
      "material_source",
      "material_type",
      "position",
      "status",
    ].forEach((t) => {
      a.F4(e[t], "[ImportMaterialReporter] ".concat(t, " is required"));
    });
  }
  _validatePosition(e) {
    if (e.position === "generation") {
      a.F4(
        e.modal,
        "[ImportMaterialReporter] modal is required when position is generation",
      );
    }
  }
  constructor(e) {
    super({}, e);
    this._containerService = e;
    this._setWorkspaceId();
  }
}
k = r.Cg(
  [
    r.Qj(0, s._),
    r.Sn("design:type", Function),
    r.Sn("design:paramtypes", [s._ === undefined ? Object : s._]),
  ],
  k,
);
