import a from "QWK";
import r from "kF";
import n from "A3X";
import o from "JBM";
import l from "Dm";
import s from "Kt";
import u from "xL";
import { m } from "./module-DoA.js";
import { a as a_1 } from "./module-QpQ.js";
import { Q } from "./module-qC.js";
import { E } from "./module-Fj.js";
import { V } from "./module-i1g.js";
import { M } from "./module-B3u.js";
class f extends r.v {
  constructor(...t) {
    super(...t);
    this.eventName = "template_play";
  }
}
class g extends u.N {
  _validateParams(t) {
    [
      "template_id",
      "template_type_id",
      "draw_type",
      "play_duration",
      "action",
      "template_id",
      "template_type_id",
    ].forEach((e) => {
      l.F4(t[e], "[TemplatePlayReporter] ".concat(e, " is required"));
    });
  }
  _getCollectorClass() {
    return f;
  }
  _transformData2ReportParams(t) {
    let e;
    l.X3(n.s(t), "[TemplatePlayReporter] required video template");
    m(this, t);
    a_1(this, t);
    Q(this, t);
    E(this, t);
    V(this, t);
    this.setParams({
      playDefinition: M(t, this._params.playDefinition),
    });
    o.l.setVideoReferenceSubjectParams(
      this,
      (e = t.aigcImageParams) == null ? undefined : e.text2videoParams,
    );
  }
  constructor(t, e, i) {
    super(t, i);
    this._containerService = i;
    this._transformData2ReportParams(e.data);
  }
}
export { g as s };
g = a.Cg(
  [
    a.Qj(2, s._),
    a.Sn("design:type", Function),
    a.Sn("design:paramtypes", [
      typeof Partial === "undefined" ? Object : Partial,
      typeof TemplatePlayContext === "undefined" ? Object : TemplatePlayContext,
      s._ === undefined ? Object : s._,
    ]),
  ],
  g,
);
