import r from "QWK";
import n from "kF";
import { T } from "./module-dkM.js";
import o from "Dm";
import s from "Kt";
import c from "xL";
class l extends n.v {
  constructor(...e) {
    super(...e);
    this.eventName = "tab_enter";
  }
}
export class $ extends c.N {
  _validateParams(e) {
    ["before", "after"].forEach((t) => {
      o.F4(e[t], "[TabEnterReporter] ".concat(String(t), " is required"));
    });
    if (e.asset_position === "generation_asset") {
      o.F4(
        e.enter_from,
        "[TabEnterReporter] enter_from is required when asset_position is generation_asset",
      );
    }
  }
  _getCollectorClass() {
    return l;
  }
  constructor(e, t) {
    super(T(e), t);
    this._containerService = t;
  }
}
$ = r.Cg(
  [
    r.Qj(1, s._),
    r.Sn("design:type", Function),
    r.Sn("design:paramtypes", [
      typeof Partial === "undefined" ? Object : Partial,
      s._ === undefined ? Object : s._,
    ]),
  ],
  $,
);
