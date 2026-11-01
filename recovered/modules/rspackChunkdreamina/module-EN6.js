import i from "QWK";
import r from "Dm";
import n from "Kt";
import o from "kF";
class s extends o.v {
  constructor(...e) {
    super(...e);
    this.eventName = "reference_subject_item";
  }
}
export class c extends o.o {
  _getCollectorClass() {
    return s;
  }
  _validateParams(e) {
    this._validateRequiredFields(e);
    this._validateAction(e);
  }
  _validateRequiredFields(e) {
    ["action", "item"].forEach((t) => {
      r.F4(e[t], "[ReferenceSubjectItemReporter] ".concat(t, " is required"));
    });
  }
  _validateAction(e) {
    if (
      [
        "brush_slider",
        "eraser_slider",
        "select_scale",
        "add_scale",
        "minus_scale",
      ].includes(e.item)
    ) {
      r.F4(
        e.value,
        "[ReferenceSubjectItemReporter] value is required when item is ".concat(
          e.item,
        ),
      );
    }
  }
  constructor(e) {
    super({}, e);
    this._containerService = e;
  }
}
c = i.Cg(
  [
    i.Qj(0, n._),
    i.Sn("design:type", Function),
    i.Sn("design:paramtypes", [n._ === undefined ? Object : n._]),
  ],
  c,
);
