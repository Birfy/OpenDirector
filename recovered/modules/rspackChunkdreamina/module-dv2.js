import n from "NY";
import s from "QWK";
import a from "mN";
import r from "Kt";
import o from "D5";
import c from "oa";
import d from "z8";
import u from "Kpt";
import h from "lj";
import m from "wF";
import p from "YC";
import g from "cO";
import _ from "Qey";
import v from "pr";
import b from "bT";
import f from "Kd";
import k from "O2b";
class l extends o.O {
  _registerDynamicSharedServices() {}
  _registerChildLevelServices(e) {
    return Promise.resolve();
  }
}
const y = b.memo(function (e) {
  const { children } = e;
  const i = m.h(r._);
  const n = b.useCallback(
    (action) => {
      i.createInstance(k.Y, {
        action,
      }).report();
    },
    [i],
  );
  b.useEffect(() => {
    n("show");
  }, [n]);
  const onClick = b.useCallback(() => {
    window.open(
      g.m(f.a.SITE.apiProductLink, null, {
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
          "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1-W1Je%5%Qmpi$3hwWkZo%2NHSXlOWHBNTTA1d1drZFdl$Xh-T$d4aWJs$jJX$mhD-0$4W*JI$mti$*x5$2xNe*JHSn$$bmxa$npWc$dsTT$hb%l5T$hka%1q$nNZbT$TZWt3e$JuZ*h$ekZ3WW01-WRtRXlWWFJh%jJ4NlkwZDRhR1Z%T1doalIydDBZ$mMxTW1JeWRHeE1WM%p3WXpOQ2MxbFlhM1Zr%0%0MFdWaEtib$JZ$FQwPQ",
      }),
    );
    n("click");
  }, [n]);
  return d.jsx("div", {
    role: "button",
    tabIndex: 0,
    "aria-label": _.Ay.t("web_new_homepage_api", {}, "API 调用"),
    onKeyDown: v.q,
    className: "trigger-uF3Idc",
    onClick,
    children,
  });
});
class S {
  content(e) {
    return d.jsx(m.Z, {
      instantiationService: this._containerService,
      children: d.jsx(p.t, {
        fallback: d.jsx("div", {}),
        children: d.jsx(y, c._({}, e)),
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
          id: "SiderMenuApiInvokeEntrance",
          type: "icon",
          MenuWrapper: (e) => this.content(e),
          shouldHidden: () => true,
        },
      ],
    });
  }
}
S = s.Cg(
  [
    s.Qj(0, r._),
    s.Qj(1, h.K),
    s.Sn("design:type", Function),
    s.Sn("design:paramtypes", [
      r._ === undefined ? Object : r._,
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
    return n
      ._(function* () {
        this._childContainerService =
          yield this._pageContainerServiceFactory.createChild();
        this._instance = this._childContainerService.createInstance(S);
      })
      .call(this);
  }
  constructor(e) {
    this._pageContainerServiceFactory = e.createInstance(l);
    this._bootstrap();
  }
}
export var contribution = {
  id: "SiderMenuApiInvokeEntrance",
  ctor: (w = s.Cg(
    [
      s.Qj(0, r._),
      s.Sn("design:type", Function),
      s.Sn("design:paramtypes", [r._ === undefined ? Object : r._]),
    ],
    w,
  )),
  instantiationPhase: a.J.Eager,
  registerWhenLogin: false,
};
