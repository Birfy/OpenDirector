import i from "QWK";
import r from "kF";
import n from "Dm";
import o from "Kt";
import l from "xL";
export var OO = {
  AiFunction: "ai_function",
  StyleControl: "style_control",
  FunctionBar: "function_bar",
  EmptyCanvas: "empty_canvas",
  SubjectList: "subject_list",
  SubjectCreatePopup: "subject_create_popup",
};
class d extends r.v {
  constructor(...e) {
    super(...e);
    this.eventName = "asset_select_popup";
  }
}
export class sK extends l.N {
  _validateParams(e) {
    [].forEach((t) => {
      n.F4(
        e[t],
        "[AssetSelectPopupReporter] ".concat(String(t), " is required"),
      );
    });
  }
  _getCollectorClass() {
    return d;
  }
  constructor(e, t) {
    super(e, t);
    this._containerService = t;
  }
}
export function v7(e, t) {
  e.createInstance(sK, t).report();
}
sK = i.Cg(
  [
    i.Qj(1, o._),
    i.Sn("design:type", Function),
    i.Sn("design:paramtypes", [
      typeof Partial === "undefined" ? Object : Partial,
      o._ === undefined ? Object : o._,
    ]),
  ],
  sK,
);
