import n from "NY";
import s from "QWK";
import a from "mN";
import r from "Kt";
import o from "D5";
import c from "oa";
import d from "bk";
import u from "z8";
import h from "lj";
import m from "wF";
import p from "o7";
import g from "YC";
import _ from "dnp";
import v from "ecK";
import b from "pr";
Object.defineProperty(exports, "UiStaticConfig", {
  enumerable: true,
  get: () => N.H,
});
class l extends o.O {
  _registerDynamicSharedServices() {}
  _registerChildLevelServices(e) {
    return Promise.resolve();
  }
}
const f = require("bT").memo(function (e) {
  const { children, onClick } = e;
  return u.jsx("div", {
    role: "button",
    tabIndex: 0,
    "aria-label": "CLI",
    onKeyDown: b.q,
    className: "trigger-kEYp3O",
    onClick,
    children,
  });
});
const k = require("./module-oil.js");
class y extends p.jG {
  content(e) {
    return u.jsx(m.Z, {
      instantiationService: this._containerService,
      children: u.jsx(g.t, {
        fallback: u.jsx("div", {}),
        children: u.jsx(
          f,
          d._(c._({}, e), {
            onClick: () => {
              _.z(this._containerService, {
                action: "click_cli",
              });
              k.x(
                this._dreaminaUiConfigurationService,
                v.y(this._containerService),
              );
            },
          }),
        ),
      }),
    });
  }
  constructor(e, t) {
    super();
    this._containerService = e;
    this._dreaminaUiConfigurationService = t;
  }
}
y = s.Cg(
  [
    s.Qj(0, r._),
    s.Qj(1, h.K),
    s.Sn("design:type", Function),
    s.Sn("design:paramtypes", [
      r._ === undefined ? Object : r._,
      h.K === undefined ? Object : h.K,
    ]),
  ],
  y,
);
class S {
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
    return n
      ._(function* () {
        this._childContainerService =
          yield this._pageContainerServiceFactory.createChild();
        this._instance = this._childContainerService.createInstance(y);
      })
      .call(this);
  }
  constructor(e) {
    this._pageContainerServiceFactory = e.createInstance(l);
    this._bootstrap();
  }
}
export var contribution = {
  id: "SiderMenuCliEntrance",
  ctor: (S = s.Cg(
    [
      s.Qj(0, r._),
      s.Sn("design:type", Function),
      s.Sn("design:paramtypes", [r._ === undefined ? Object : r._]),
    ],
    S,
  )),
  instantiationPhase: a.J.Eager,
  registerWhenLogin: false,
};
var N = require("./module-BS_2.js");
