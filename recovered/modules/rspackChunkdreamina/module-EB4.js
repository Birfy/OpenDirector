import a from "QWK";
import r from "kF";
import n from "HSE";
import o from "LLl";
import l from "hA";
import { a as a_1 } from "./module-Knp_2.js";
import u from "JBM";
import c from "Bdi";
import d from "Dm";
import h from "Kt";
import m from "xL";
import { i } from "./module-X3U.js";
import { m as m_1 } from "./module-DoA.js";
import { s } from "./module-oei.js";
import { b as b_1 } from "./module-O27.js";
import { a as a_2 } from "./module-QpQ.js";
import { Q } from "./module-qC.js";
import { E } from "./module-Fj.js";
import { V } from "./module-i1g.js";
class b extends r.v {
  constructor(...t) {
    super(...t);
    this.eventName = "template_click";
  }
}
export class y extends m.N {
  _validateParams(t) {
    [
      "enter_scenario",
      "is_shared",
      "template_id",
      "template_type_id",
      "draw_type",
    ].forEach((e) => {
      d.F4(t[e], "[TemplateClickReporter] ".concat(e, " is required"));
    });
  }
  _getCollectorClass() {
    return b;
  }
  _transformData2ReportParams(t) {
    if (n.J(t)) {
      this._params.picCount = t.collection.length;
    } else if (o.Y(t) || l.T(t)) {
      this._params.picCount = 1;
    }
    i(this);
    m_1(this, t);
    s(this, t);
    b_1(this, t);
    a_2(this, t);
    Q(this, t);
    E(this, t);
    V(this, t);
    if (a_1(t)) {
      let e;
      u.l.setVideoReferenceSubjectParams(
        this,
        (e = t.aigcImageParams) == null ? undefined : e.text2videoParams,
      );
    } else {
      if (o.Y(t)) {
        c.X.setImageReferenceSubjectParams(this, t.unifiedEditInput);
      }
    }
  }
  constructor(t, e, i) {
    super(t, i);
    this._containerService = i;
    this._transformData2ReportParams(e.data);
  }
}
y = a.Cg(
  [
    a.Qj(2, h._),
    a.Sn("design:type", Function),
    a.Sn("design:paramtypes", [
      typeof Partial === "undefined" ? Object : Partial,
      typeof TemplateClickContext === "undefined"
        ? Object
        : TemplateClickContext,
      h._ === undefined ? Object : h._,
    ]),
  ],
  y,
);
