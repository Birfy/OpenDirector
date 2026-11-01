import n from "mO";
import s from "QWK";
import a from "mN";
import r from "Kt";
import o from "oa";
import l from "bk";
import c from "bE";
import d from "Kpt";
import u from "lj";
import h from "o7";
import m from "WY2";
import p from "ELv";
import g from "zg4";
export { H as UiStaticConfig } from "mO";
class _ extends h.jG {
  _registerSideMenu() {
    if (
      this._accountService.hasLogin &&
      this._octoCapabilityService.canShowEntry()
    ) {
      this._dreaminaUiConfigurationService.registerConfig({
        [d.N.SideMenu]: [
          l._(o._({}, n.b), {
            onClick: () => {
              g.E({
                octoCapabilityService: this._octoCapabilityService,
                octoPrepareService: this._octoPrepareService,
              });
            },
          }),
        ],
      });
      this._octoPrepareService.warmupDemoProject();
    } else {
      this._dreaminaUiConfigurationService.unRegisterConfig(n.b.id);
    }
  }
  constructor(e, t, i, s) {
    super();
    this._dreaminaUiConfigurationService = e;
    this._accountService = t;
    this._octoCapabilityService = i;
    this._octoPrepareService = s;
    this._register(
      this._accountService.onDidLogin(() => {
        this._registerSideMenu();
      }),
    );
    this._register(
      this._accountService.onDidLogout(() => {
        this._dreaminaUiConfigurationService.unRegisterConfig(n.b.id);
      }),
    );
    this._register(
      this._octoCapabilityService.onDidChange(() => {
        this._registerSideMenu();
      }),
    );
    this._registerSideMenu();
  }
}
_ = s.Cg(
  [
    s.Qj(0, u.K),
    s.Qj(1, c.c),
    s.Qj(2, m.y),
    s.Qj(3, p.P),
    s.Sn("design:type", Function),
    s.Sn("design:paramtypes", [
      u.K === undefined ? Object : u.K,
      c.c === undefined ? Object : c.c,
      m.y === undefined ? Object : m.y,
      p.P === undefined ? Object : p.P,
    ]),
  ],
  _,
);
class v {
  dispose() {
    this._instance.dispose();
  }
  constructor(e) {
    this._instance = e.createInstance(_);
  }
}
export var contribution = {
  id: "SiderMenuOcto",
  ctor: (v = s.Cg(
    [
      s.Qj(0, r._),
      s.Sn("design:type", Function),
      s.Sn("design:paramtypes", [r._ === undefined ? Object : r._]),
    ],
    v,
  )),
  instantiationPhase: a.J.Eager,
};
