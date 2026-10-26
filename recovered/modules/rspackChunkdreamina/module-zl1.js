import a from "QWK";
import r from "kF";
import n from "A3X";
import o from "Dm";
import l from "Kt";
import s from "xL";
import { i } from "./module-X3U.js";
import { m } from "./module-DoA.js";
import { a as a_1 } from "./module-QpQ.js";
import { Q } from "./module-qC.js";
import { E } from "./module-Fj.js";
import { V } from "./module-i1g.js";
import { M } from "./module-B3u.js";
class f extends r.v {
  constructor(...t) {
    super(...t);
    this.eventName = "template_play_finished";
  }
}
export class _ extends s.N {
  report() {
    if (
      this._params.playDuration &&
      this._params.templateDuration &&
      this._params.playDuration >= this._params.templateDuration
    ) {
      super.report();
    }
  }
  _validateParams(t) {
    [
      "is_shared",
      "play_duration",
      "template_id",
      "template_duration",
      "template_type_id",
      "draw_type",
      "action",
    ].forEach((e) => {
      o.F4(t[e], "[TemplatePlayFinishedReporter] ".concat(e, " is required"));
    });
  }
  _getCollectorClass() {
    return f;
  }
  _transformData2ReportParams(t) {
    o.X3(n.s(t), "[TemplatePlayFinishedReporter] required video template");
    i(this);
    m(this, t);
    a_1(this, t);
    Q(this, t);
    E(this, t);
    V(this, t);
    this.setParams({
      playDefinition: M(t, this._params.playDefinition),
    });
  }
  constructor(t, e, i) {
    super(t, i);
    this._containerService = i;
    this._transformData2ReportParams(e.data);
  }
}
_ = a.Cg(
  [
    a.Qj(2, l._),
    a.Sn("design:type", Function),
    a.Sn("design:paramtypes", [
      typeof Partial === "undefined" ? Object : Partial,
      typeof TemplatePlayFinishedContext === "undefined"
        ? Object
        : TemplatePlayFinishedContext,
      l._ === undefined ? Object : l._,
    ]),
  ],
  _,
);
