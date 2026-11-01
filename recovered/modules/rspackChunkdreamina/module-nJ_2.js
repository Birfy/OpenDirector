import o from "NY";
import r from "QWK";
import a from "mN";
import s from "Kt";
import l from "D5";
import d from "eB";
import c from "jF2";
import u from "avO";
import p from "pgX7";
import S from "kyL";
import g from "dJB";
import m from "z8";
import C from "bT";
import v from "dw4";
import A from "ED";
import b from "Kpt";
import y from "lj";
import _ from "o7";
import D from "Ev";
import { Du } from "./module-HX_3.js";
import M from "Egb";
import E from "r9f";
import * as k from "./module-QL_2.js";
export { H as UiStaticConfig } from "./module-hz_4.js";
class h extends l.O {
  _registerDynamicSharedServices() {
    this._dynamicDependencyService.register(S.E, g.L);
    this._dynamicDependencyService.register(u.h, p.s);
  }
  _registerChildLevelServices(e) {
    return o
      ._(function* (e) {
        const { lazyServiceRegister } = e;
        yield lazyServiceRegister({
          lazy: d.x,
          real: c.i,
        });
        return Promise.resolve();
      })
      .apply(this, arguments);
  }
}
const f = ["/generate", "/image/generate"];
const I = ["/image-edit", "/story-editor"];
class H extends _.jG {
  content() {
    const { WrapperHelpCenterEntry } = this;
    return m.jsx(WrapperHelpCenterEntry, {});
  }
  dispose() {
    super.dispose();
  }
  _init() {
    const e = this._dreaminaUiConfigurationService.getRouteManager();
    this._register({
      dispose: v.mJ(
        () => e.observableData.currentRoute,
        (e) => {
          var t;
          t = e != null ? e : "";
          var i = f.includes(t)
            ? "Workbench"
            : I.includes(t)
              ? "Editor"
              : "Normal";
          this._customerCenterService.changeMode(i);
        },
        {
          fireImmediately: true,
        },
      ),
    });
    this._register({
      dispose: v.mJ(
        () => this._customerCenterService.mode,
        () => {
          var { right, bottom } = E.rO(this._customerCenterService.mode);
          this._dreaminaUiConfigurationService.updateAbsoluteSlotPosition(
            "AbsolutePositionSlotHelpCenter",
            {
              bottom,
              right,
            },
          );
        },
        {
          fireImmediately: true,
        },
      ),
    });
  }
  constructor(e, t) {
    super();
    this._dreaminaUiConfigurationService = e;
    this._customerCenterService = t;
    this.WrapperHelpCenterEntry = A.PA(() => {
      var { shouldShowEntry, mode } = this._customerCenterService;
      var i =
        !D.nr &&
        this._dreaminaUiConfigurationService.currentRoutePath !==
          M.ph[Du.ShortDrama];
      var n = C.useMemo(() => {
        var e;
        return {
          entryStyle: (e = ["Workbench", "WorkbenchFrame", "Editor"].includes(
            mode,
          ))
            ? {
                backgroundColor: "var(--background-dropdown-menu)",
                color: "var(--text-tertiary)",
              }
            : {},
          iconStyle: e
            ? {}
            : {
                width: "20px",
                height: "20px",
              },
        };
      }, [mode]);
      if (shouldShowEntry) {
        return m.jsx(k.t, {
          onClick: this._handleClickHelpCenter,
          onMouseEnter: i ? this._handleMouseEnterHelpCenter : undefined,
          onMouseLeave: i
            ? this._customerCenterService.handleHoverLeave
            : undefined,
          showTooltip: !i,
          style: n.entryStyle,
          iconStyle: n.iconStyle,
        });
      }
      return null;
    });
    this._handleClickHelpCenter = () => {
      this._customerCenterService.open(this._getPanelPosition());
    };
    this._handleMouseEnterHelpCenter = () => {
      this._customerCenterService.handleHoverEnter(this._getPanelPosition());
    };
    this._getPanelPosition = () => E.JK(this._customerCenterService.mode);
    this._customerCenterService.initializeOverseaHelpCenter(
      "home_bottom_right",
    );
    this._dreaminaUiConfigurationService.registerConfig({
      [b.N.AbsolutePositionSlot]: [
        {
          id: "AbsolutePositionSlotHelpCenter",
          content: () => this.content(),
        },
      ],
    });
    this._init();
  }
}
H = r.Cg(
  [
    r.Qj(0, y.K),
    r.Qj(1, c.i),
    r.Sn("design:type", Function),
    r.Sn("design:paramtypes", [
      y.K === undefined ? Object : y.K,
      c.i === undefined ? Object : c.i,
    ]),
  ],
  H,
);
class R {
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
    return o
      ._(function* () {
        this._childContainerService =
          yield this._pageContainerServiceFactory.createChild();
        this._instance = this._childContainerService.createInstance(H);
      })
      .call(this);
  }
  constructor(e) {
    this._pageContainerServiceFactory = e.createInstance(h);
    this._bootstrap();
  }
}
export var contribution = {
  id: "AbsolutePositionSlotHelpCenter",
  ctor: (R = r.Cg(
    [
      r.Qj(0, s._),
      r.Sn("design:type", Function),
      r.Sn("design:paramtypes", [s._ === undefined ? Object : s._]),
    ],
    R,
  )),
  instantiationPhase: a.J.Eager,
  registerWhenLogin: false,
};
