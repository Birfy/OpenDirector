import s from "NY";
import a from "QWK";
import r from "mN";
import o from "Kt";
import l from "D5";
import d from "z8";
import u from "Kpt";
import h from "lj";
import m from "wF";
import p from "YC";
import g from "ED";
import _ from "c6";
import v from "Oln";
import b from "w3";
import f from "cY";
import k from "HX";
export { H as UiStaticConfig } from "./module-Fx_2.js";
class c extends l.O {
  _registerDynamicSharedServices() {}
  _registerChildLevelServices(e) {
    return Promise.resolve();
  }
}
const y = g.PA(function () {
  m.h(f.i);
  m.h(_.f);
  let e;
  const t = m.h(h.K);
  const i = b.zy();
  (e = t.getRouteConfigByPath(i.pathname)) == null || e.id;
  k.Du.Home;
  return d.jsxs("div", {
    className: "credit-container-OEwmjO",
    children: [null, d.jsx(v._, {})],
  });
});
class S {
  content() {
    return d.jsx(m.Z, {
      instantiationService: this._containerService,
      children: d.jsx(p.t, {
        fallback: d.jsx("div", {}),
        children: d.jsx(y, {}),
      }),
    });
  }
  dispose() {}
  constructor(e, t) {
    this._containerService = e;
    this._platformUiConfigurationService = t;
    this._platformUiConfigurationService.registerConfig({
      [u.N.SideMenu]: [
        {
          id: "SiderMenuCredit",
          content: () => this.content(),
        },
      ],
    });
  }
}
S = a.Cg(
  [
    a.Qj(0, o._),
    a.Qj(1, h.K),
    a.Sn("design:type", Function),
    a.Sn("design:paramtypes", [
      o._ === undefined ? Object : o._,
      h.K === undefined ? Object : h.K,
    ]),
  ],
  S,
);
class w {
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
        this._instance = this._childContainerService.createInstance(S);
      })
      .call(this);
  }
  constructor(e) {
    this._pageContainerServiceFactory = e.createInstance(c);
    this._bootstrap();
  }
}
export var contribution = {
  id: "SiderMenuCredit",
  ctor: (w = a.Cg(
    [
      a.Qj(0, o._),
      a.Sn("design:type", Function),
      a.Sn("design:paramtypes", [o._ === undefined ? Object : o._]),
    ],
    w,
  )),
  instantiationPhase: r.J.Eager,
  registerWhenLogin: false,
};
