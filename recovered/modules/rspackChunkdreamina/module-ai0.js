import r from "QWK";
import n from "Dm";
import a from "M8X";
import o from "Kt";
import s from "rr";
import l from "kF";
class d extends l.v {
  constructor(...e) {
    super(...e);
    this.eventName = "import_material";
  }
}
export class k extends l.o {
  _getCollectorClass() {
    return d;
  }
  _validateParams(e) {
    this._validateRequiredFields(e);
    this._validatePosition(e);
  }
  _setWorkspaceId() {
    try {
      const e = a.cQ(this._containerService, s.D).data.selectedWorkspaceId;
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
      n.F4(e[t], "[ImportMaterialReporter] ".concat(t, " is required"));
    });
  }
  _validatePosition(e) {
    if (e.position === "generation") {
      n.F4(
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
    r.Qj(0, o._),
    r.Sn("design:type", Function),
    r.Sn("design:paramtypes", [o._ === undefined ? Object : o._]),
  ],
  k,
);
