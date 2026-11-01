import s from "NY";
import a from "QWK";
import r from "mN";
import o from "Kt";
import l from "D5";
import d from "z8";
import u from "bE";
import h from "TK";
import m from "lj";
import p from "wF";
import g from "YC";
export { H as UiStaticConfig } from "./module-hQ_2.js";
class c extends l.O {
  _registerDynamicSharedServices() {}
  _registerChildLevelServices(e) {
    return Promise.resolve();
  }
}
const _ = require("bT").memo(function () {
  return d.jsx("div", {
    children: "Image Editor",
  });
});
class v {
  content() {
    return d.jsx(p.Z, {
      instantiationService: this._containerService,
      children: d.jsx(g.t, {
        fallback: d.jsx("div", {}),
        children: d.jsx(_, {}),
      }),
    });
  }
  dispose() {}
  constructor(e, t, i, n) {
    this._containerService = e;
    this._platformUiConfigurationService = t;
    this._accountService = i;
    this._configurationService = n;
  }
}
v = a.Cg(
  [
    a.Qj(0, o._),
    a.Qj(1, m.K),
    a.Qj(2, u.c),
    a.Qj(3, h.a),
    a.Sn("design:type", Function),
    a.Sn("design:paramtypes", [
      o._ === undefined ? Object : o._,
      m.K === undefined ? Object : m.K,
      u.c === undefined ? Object : u.c,
      h.a === undefined ? Object : h.a,
    ]),
  ],
  v,
);
class b {
  dispose() {
    let e;
    let t;
    if ((e = this._childContainerService) != null) {
      e.dispose();
    }
    if ((t = this._instance) != null) {
      t.dispose();
    }
  }
  _bootstrap() {
    return s
      ._(function* () {
        this._childContainerService =
          yield this._pageContainerServiceFactory.createChild();
        this._instance = this._childContainerService.createInstance(v);
      })
      .call(this);
  }
  constructor(e) {
    this._pageContainerServiceFactory = e.createInstance(c);
    this._bootstrap();
  }
}
export var contribution = {
  id: "SiderMenuImageEditor",
  ctor: (b = a.Cg(
    [
      a.Qj(0, o._),
      a.Sn("design:type", Function),
      a.Sn("design:paramtypes", [o._ === undefined ? Object : o._]),
    ],
    b,
  )),
  instantiationPhase: r.J.Eager,
  registerWhenLogin: false,
};
