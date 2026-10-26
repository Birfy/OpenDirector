import a from "QWK";
import r from "kF";
import { a as a_1 } from "./module-Knp_2.js";
import o from "JBM";
import l from "LLl";
import s from "Bdi";
import u from "Dm";
import c from "Kt";
import d from "xL";
import { i } from "./module-X3U.js";
import { m } from "./module-DoA.js";
import { s as s_1 } from "./module-oei.js";
import { b } from "./module-O27.js";
import { a as a_2 } from "./module-QpQ.js";
import { Q } from "./module-qC.js";
import { E } from "./module-Fj.js";
import { V } from "./module-i1g.js";
class k extends r.v {
  constructor(...t) {
    super(...t);
    this.eventName = "template_show";
  }
}
export class $ extends d.N {
  _validateParams(t) {
    ["is_shared", "template_id", "template_type_id", "draw_type"].forEach(
      (e) => {
        u.F4(t[e], "[TemplateShowReporter] ".concat(e, " is required"));
      },
    );
  }
  _getCollectorClass() {
    return k;
  }
  _transformData2ReportParams(t) {
    i(this);
    m(this, t);
    s_1(this, t);
    b(this, t);
    a_2(this, t);
    Q(this, t);
    E(this, t);
    V(this, t);
    if (a_1(t)) {
      let e;
      o.l.setVideoReferenceSubjectParams(
        this,
        (e = t.aigcImageParams) == null ? undefined : e.text2videoParams,
      );
    } else {
      if (l.Y(t)) {
        s.X.setImageReferenceSubjectParams(this, t.unifiedEditInput);
      }
    }
  }
  constructor(t, e, i) {
    super(t, i);
    this._containerService = i;
    this._transformData2ReportParams(e.data);
  }
}
$ = a.Cg(
  [
    a.Qj(2, c._),
    a.Sn("design:type", Function),
    a.Sn("design:paramtypes", [
      typeof Partial === "undefined" ? Object : Partial,
      typeof TemplateShowContext === "undefined" ? Object : TemplateShowContext,
      c._ === undefined ? Object : c._,
    ]),
  ],
  $,
);
