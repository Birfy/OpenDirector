import s from "QWK";
import n from "Dm";
import r from "Kt";
import o from "kF";
class a extends o.v {
  constructor(...t) {
    super(...t);
    this.eventName = "markdown_adjust_action";
  }
}
export class K extends o.o {
  _getCollectorClass() {
    return a;
  }
  _validateParams(t) {
    for (const e of ["action", "markdown_id"]) {
      n.F4(
        t[e],
        "[MarkdownAdjustActionReporter] ".concat(e.toString(), " is required"),
      );
    }
  }
  constructor(t, e) {
    super(t, e);
    this._containerService = e;
  }
}
K = s.Cg(
  [
    s.Qj(1, r._),
    s.Sn("design:type", Function),
    s.Sn("design:paramtypes", [
      typeof Partial === "undefined" ? Object : Partial,
      r._ === undefined ? Object : r._,
    ]),
  ],
  K,
);
