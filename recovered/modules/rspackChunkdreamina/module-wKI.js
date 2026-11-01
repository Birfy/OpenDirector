import n from "NY";
import s from "QWK";
import a from "mN";
import o from "Kt";
import r from "D5";
import c from "oa";
import d from "bk";
import u from "z8";
import h from "cO";
import m from "Kpt";
import p from "lj";
import g from "wF";
import b from "o7";
import _ from "xi";
import v from "YC";
import y from "HX";
import f from "sA";
import k from "TL";
import S from "un";
Object.defineProperty(exports, "UiStaticConfig", {
  enumerable: true,
  get: () => j.H,
});
class l extends r.O {
  _registerDynamicSharedServices() {}
  _registerChildLevelServices(e) {
    return Promise.resolve();
  }
}
const C = require("bT").memo(function (e) {
  const { children, onClick } = e;
  return u.jsx("button", {
    className: "trigger-XvlUv2",
    onClick,
    type: "button",
    children,
  });
});
class T extends b.jG {
  _registerRender3DPluginEntranceConfig() {
    this._dreaminaUiConfigurationService.registerConfig({
      [m.N.SideMenu]: [
        {
          id: "SiderMenuRender3DPluginEntrance",
          type: "icon",
          MenuWrapper: (e) => this.content(e),
          shouldHidden: () => !this._isRender3DPluginEntryAvailable(),
        },
      ],
    });
  }
  _isRender3DPluginEntryAvailable() {
    return f.x(this._dreaminaModelConfigFeatureLoaderService.getInstanceSync());
  }
  _initRender3DPluginEntryGate() {
    return n
      ._(function* () {
        try {
          const e =
            yield this._dreaminaModelConfigFeatureLoaderService.getInstance();
          this._register(
            e.onVideoConfigUpdated(() => {
              this._registerRender3DPluginEntranceConfig();
            }),
          );
          this._registerRender3DPluginEntranceConfig();
        } catch (error) {
          _.V.error(
            "[SiderMenuRender3DPluginEntranceController] init entry gate failed",
            error,
          );
        }
      })
      .call(this);
  }
  content(e) {
    return u.jsx(g.Z, {
      instantiationService: this._containerService,
      children: u.jsx(v.t, {
        fallback: u.jsx("div", {}),
        children: u.jsx(
          C,
          d._(c._({}, e), {
            onClick: () => {
              this._containerService.createInstance(S.D, {}).report();
              window.open(
                h.m(
                  this._dreaminaUiConfigurationService.generatePath(
                    y.Du.Render3DPlugin,
                  ),
                  null,
                  {
                    logType: "js.window.location",
                    reportOnly: "false",
                    blackConfig: "{}",
                    configMode: "merge",
                    isCloseSSRReport: true,
                    bid: "cc_dreamina",
                    region: "cn",
                    urlLimit: "-1",
                    htmlLimit: "-1",
                    isSaveValidUrl: false,
                    isRuntimeLog: false,
                    isDOMParser: false,
                    escapeRule: "escape-report",
                    reportUrl:
                      "https://mon.zijieapi.com/monitor_browser/collect/batch/security/?bid=cc_dreamina",
                    htmlparserOptions: "{}",
                    scmBranch: "-",
                    scmName: "-",
                    scmVersion: "-",
                    webpackPluginVersion: "3.6.0",
                    filename:
                      "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1-W1Je%5%Qmpi$3hwWkZo%2NHSXlOWHBNTTA1d1drZFdl$Xh-T$d4aWJs$jJZMjFXZFZwSFZubE1WRT$y$EZoQ2My%lhaSEJp-$R*c1ltN$Nl$mx-Tldw-$$6bHFZakkxT%dOdE9-TmlSM$o1$Ec1%2$t$khSbmxhTTFaNg",
                  },
                ),
                "_blank",
                "noopener",
              );
            },
          }),
        ),
      }),
    });
  }
  constructor(e, t, i) {
    super();
    this._containerService = e;
    this._dreaminaUiConfigurationService = t;
    this._dreaminaModelConfigFeatureLoaderService = i;
    this._registerRender3DPluginEntranceConfig();
    this._initRender3DPluginEntryGate();
  }
}
T = s.Cg(
  [
    s.Qj(0, o._),
    s.Qj(1, p.K),
    s.Qj(2, k.S),
    s.Sn("design:type", Function),
    s.Sn("design:paramtypes", [
      o._ === undefined ? Object : o._,
      p.K === undefined ? Object : p.K,
      k.S === undefined ? Object : k.S,
    ]),
  ],
  T,
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
    return n
      ._(function* () {
        this._childContainerService =
          yield this._pageContainerServiceFactory.createChild();
        this._instance = this._childContainerService.createInstance(T);
      })
      .call(this);
  }
  constructor(e) {
    this._pageContainerServiceFactory = e.createInstance(l);
    this._bootstrap();
  }
}
export var contribution = {
  id: "SiderMenuRender3DPluginEntrance",
  ctor: (w = s.Cg(
    [
      s.Qj(0, o._),
      s.Sn("design:type", Function),
      s.Sn("design:paramtypes", [o._ === undefined ? Object : o._]),
    ],
    w,
  )),
  instantiationPhase: a.J.Eager,
  registerWhenLogin: false,
};
var j = require("./module-ir_2.js");
