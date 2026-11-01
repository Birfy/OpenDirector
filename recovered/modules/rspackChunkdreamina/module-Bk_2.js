import i from "QWK";
import r from "Dm";
import n from "Kt";
import o from "kF";
class s extends o.v {
  constructor(...e) {
    super(...e);
    this.eventName = "picture_ratio";
  }
}
export class D extends o.o {
  _getCollectorClass() {
    return s;
  }
  _validateParams(e) {
    this._validateRequiredFields(e);
    this._validateAction(e);
  }
  _validateRequiredFields(e) {
    ["action"].forEach((t) => {
      r.F4(e[t], "[PictureRatioReporter] ".concat(t, " is required"));
    });
  }
  _validateAction(e) {
    if (e.action === "click") {
      r.F4(
        e.item,
        "[PictureRatioReporter] item is required when action is click",
      );
      if (e.item === "ratio") {
        r.F4(
          e.ratio_value,
          "[PictureRatioReporter] ratioValue is required when item is ratio",
        );
      }
    }
  }
  constructor(e) {
    super({}, e);
    this._containerService = e;
  }
}
D = i.Cg(
  [
    i.Qj(0, n._),
    i.Sn("design:type", Function),
    i.Sn("design:paramtypes", [n._ === undefined ? Object : n._]),
  ],
  D,
);
