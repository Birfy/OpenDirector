import a from "QWK";
import r from "kF";
import { S } from "./module-BDO_2.js";
import o from "Dm";
import l from "Kt";
import s from "xL";
import { m } from "./module-DoA.js";
import { Q } from "./module-qC.js";
import { M } from "./module-B3u.js";
class h extends r.v {
  constructor(...t) {
    super(...t);
    this.eventName = "story_play";
  }
}
export class v extends s.N {
  _validateParams(t) {
    ["action", "template_id", "template_type_id", "draw_type"].forEach((e) => {
      o.F4(t[e], "[StoryPlayReporter] ".concat(e, " is required"));
    });
  }
  _getCollectorClass() {
    return h;
  }
  _transformData2ReportParams(t) {
    o.X3(S(t), "[StoryPlayReporter] required short video template");
    m(this, t);
    Q(this, t);
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
v = a.Cg(
  [
    a.Qj(2, l._),
    a.Sn("design:type", Function),
    a.Sn("design:paramtypes", [
      typeof Partial === "undefined" ? Object : Partial,
      typeof StoryPlayContext === "undefined" ? Object : StoryPlayContext,
      l._ === undefined ? Object : l._,
    ]),
  ],
  v,
);
