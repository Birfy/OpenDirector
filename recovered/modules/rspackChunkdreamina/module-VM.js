import r from "QWK";
import n from "kF";
import a from "Dm";
import o from "Kt";
import s from "sw";
import c from "xL";
class l extends c.N {
  _validateParams(e) {
    a.X3(
      typeof e.project_id === "string" && e.project_id.trim().length > 0,
      "[CanvasTemplateReporter] project_id is required",
    );
    a.X3(
      typeof e.name === "string" && e.name.trim().length > 0,
      "[CanvasTemplateReporter] name is required",
    );
  }
  constructor(e, t) {
    super(e, t);
    this._containerService = t;
  }
}
l = r.Cg(
  [
    r.Qj(1, o._),
    r.Sn("design:type", Function),
    r.Sn("design:paramtypes", [
      typeof Partial === "undefined" ? Object : Partial,
      o._ === undefined ? Object : o._,
    ]),
  ],
  l,
);
class d extends n.v {
  constructor(...e) {
    super(...e);
    this.eventName = "canvas_template_show";
  }
}
class u extends l {
  _getCollectorClass() {
    return d;
  }
}
class h extends n.v {
  constructor(...e) {
    super(...e);
    this.eventName = "canvas_template_click";
  }
}
class p extends l {
  _getCollectorClass() {
    return h;
  }
}
function v(e) {
  return {
    projectId: e.projectId,
    name: s.T(e.name),
  };
}
export function OA(e, t) {
  e.createInstance(u, v(t)).report();
}
export function xb(e, t) {
  e.createInstance(p, v(t)).report();
}
