import r from "z8";
import n from "bE";
import a from "z7R";
import o from "fHC";
import s from "iRw";
import l from "Kpt";
import c from "w3";
import d from "lj";
import u from "CQ";
import h from "nO5";
import m from "M8X";
import g from "vrE";
import v from "yJ";
import _ from "R5";
import p from "iN";
import f from "QaK";
import b from "HX";
import y from "Egb";
import S from "NY";
import w from "fg";
import D from "rL";
import C from "jC8";
import T from "Z4";
import R from "oeS";
import k from "RII";
import F from "WG";
import j from "m0";
import W from "AH";
import $ from "dX0";
import { jg, l6 } from "./module-uk_3.js";
import { yo } from "./module-Li_2.js";
import L from "dw4";
import O from "KV";
import z from "aEB";
import H from "m8";
import B from "TK";
import U from "T7";
import K from "FV";
import J from "YJ";
import G from "xi";
import X from "YR";
import "cO";
import "gK";
import et from "SJ";
import ei from "jV7";
import er from "xb";
import ea from "tO";
import eo from "wF";
import es from "Ev";
import el from "h5";
import "./module-mm_2.js";
import ec from "e6r";
import ed from "w1m";
import eh from "B3";
import ev from "cy";
import e_ from "c5";
import ep from "rr";
function N(e, t, i) {
  i.invokeFunction((e) => e.get(k.l)).reportDevEvent("agw-inject:".concat(e), {
    success: t ? "true" : "false",
  });
}
const x = "beta-test";
const P = new Set([D.bp.COMMERCE_BLACKLIST, D.bp.DREAMINA_WAITING_COUNTRY]);
const M = new WeakMap();
function E(e, t) {
  return S._(function* () {
    let i;
    let r;
    let n;
    const a = {
      regionFallback:
        (i = (r = M.get(e)) == null ? undefined : r.regionFallback) != null
          ? i
          : {},
    };
    if (t) {
      const o = C.X(w.o(t));
      P.forEach((e) => {
        var t = o[e];
        if (t) {
          a.regionFallback[e] = t;
        }
      });
    }
    M.set(e, a);
    const s = e.invokeFunction((e) => e.get(R.U));
    const l = e.invokeFunction((e) => e.get(T.o));
    const c = (e) => {
      P.forEach((t) => {
        if (e == null ? undefined : e[t]) {
          return void delete a.regionFallback[t];
        }
        var i = a.regionFallback[t];
        if (i) {
          l.setValue(t, i);
        }
      });
    };
    try {
      n = yield s.getFeatureBetaTestPermission({
        featureKeys: D.QW,
      });
    } catch (t) {
      if (M.get(e) !== a) {
        return;
      }
      c();
      l.init();
      return;
    }
    if (M.get(e) === a) {
      if (!n.ok) {
        c();
        l.init();
        return;
      }
      const d = n.value;
      const u = C.X(d);
      if (typeof window !== "undefined") {
        window.__beta_test__ = w.w(d);
      }
      Object.keys(u).forEach((e) => {
        var t = u[e];
        l.setValue(e, t);
      });
      c(u);
      l.init();
    }
  })();
}
class Z {
  get environmentService() {
    return this._containerService.invokeFunction((e) => e.get(F.D));
  }
  get accountService() {
    return this._containerService.invokeFunction((e) => e.get(n.c));
  }
  get notificationService() {
    return this._containerService.invokeFunction((e) => e.get(z.Ot));
  }
  get dreaminaUiConfigurationService() {
    return this._containerService.invokeFunction((e) => e.get(d.K));
  }
  get domainModelChangeSyncService() {
    return this._containerService.invokeFunction((e) => e.get(O.j));
  }
  get resourceService() {
    return this._containerService.invokeFunction((e) => e.get(H.j));
  }
  get __dreaminaUid() {
    return this._containerService.invokeFunction(
      (e) => e.get(n.c).userProfile.uid,
    );
  }
  get toJS() {
    return L.HO;
  }
  constructor(e) {
    this._containerService = e;
  }
}
const V = (_containerService) => {
  _containerService.invokeFunction((e) =>
    S._(function* () {
      const t = e.get(B.a);
      const i = e.get(a.jV);
      if (e.get(n.c).hasLogin) {
        t.serverAbTestManager.initAndExposeAbTest();
        const imageProHdCommerceConfig =
          yield t.serverAbTestManager.getAbTestValue(U.s.DreaminaProHD);
        if (imageProHdCommerceConfig) {
          (yield i.getInstance()).setServerAbTestValue({
            imageProHdCommerceConfig,
          });
        }
      }
    })(),
  );
};
function Q(e) {
  if (e) {
    localStorage.setItem(K.o.authorInviteCode, e);
  } else {
    localStorage.removeItem(K.o.authorInviteCode);
  }
}
function q(e) {
  return function (t) {
    if (t) {
      localStorage.setItem(e, t);
    } else {
      localStorage.removeItem(e);
    }
  };
}
const Y = new WeakMap();
const ee = () =>
  Promise.all([
    require.e("9ed"),
    require.e("8o4"),
    require.e("mo4"),
    require.e("46qd"),
    require.e("1sx"),
    require.e("lb8"),
    require.e("rle"),
    require.e("b7h"),
    require.e("5ws"),
    require.e("84i"),
    require.e("x4o"),
    require.e("pvu"),
    require.e("h0h"),
    require.e(894),
    require.e("z9t"),
    require.e("dmi"),
    require.e("tj5a"),
    require.e("lsa"),
    require.e("uoi"),
    require.e("e7a"),
    require.e("72p"),
    require.e("zf5"),
    require.e("1gm"),
    require.e("dks"),
    require.e("59ls"),
    require.e("z4v"),
    require.e("2ej"),
    require.e("a8k"),
    require.e("eqf"),
    require.e("s1o"),
    require.e("as"),
    require.e("1w"),
    require.e("b7w"),
  ]).then(require.bind(require, "GM5"));
function eu(e) {
  const { containerService, dreaminaUiConfigurationService } = e;
  const imageResolutionCacheManager = m.cQ(containerService, ed.I);
  return r.jsx(eo.Z, {
    instantiationService: containerService,
    children: r.jsx(ec.B, {
      children: r.jsx(ea.n.Provider, {
        value: {
          imageResolutionCacheManager,
        },
        children: r.jsx("div", {
          className: er({
            "mobile-not-ipad": el.Pe,
            "global-dreamina-container": true,
            "global-dreamina-container-firefox": es.gm,
          }),
          children: dreaminaUiConfigurationService.render(),
        }),
      }),
    }),
  });
}
""
  .concat(window.location.protocol, "//sf16-web-login-neutral.")
  .concat(ei.dx, "ap")
  .concat(
    ei.dx,
    "utstatic.com/obj/capcut-web-login-static/webmssdk_cctbc/1.0.0.71/webmssdk.js",
  );
""
  .concat(window.location.protocol, "//sf16-web-tos-buz.")
  .concat(ei.dx, "ap")
  .concat(
    ei.dx,
    "utcdn-us.com/obj/capcut-web-buz-tx/webmssdk_cctbc/2.0.0.65/webmssdk.js",
  );
const em = [
  b.Du.Login,
  b.Du.DataSubjectRequestDownload,
  b.Du.DataSubjectRequest,
  b.Du.DataSubjectRequestSubmit,
  b.Du.DataSubjectRequestBlock,
];
class eg {
  static setViewportScaleInMobileNotIpad() {
    const e = document.querySelector('meta[name="viewport"]');
    if (e && el.Pe && !this._hasSetViewPort) {
      const t =
        "width=device-width, initial-scale=0.4, shrink-to-fit=no, viewport-fit=cover, minimum-scale=0.3, maximum-scale=3.0, user-scalable=no";
      e.content = t;
      setTimeout(() => {
        e.content = t.replace("user-scalable=no", "user-scalable=yes");
      }, 1000);
      this._hasSetViewPort = true;
    }
  }
  static resetViewport() {
    const e = document.querySelector('meta[name="viewport"]');
    if (e && this._hasSetViewPort) {
      e.content =
        "width=device-width, initial-scale=1.0, shrink-to-fit=no, viewport-fit=cover, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no";
      this._hasSetViewPort = false;
    }
  }
}
eg._hasSetViewPort = false;
class ef extends u.G {
  _executePhase(e, t) {
    switch (t) {
      case "Prepare":
        this._whenPrepare();
        break;
      case "Render":
        this._whenRender();
        break;
      case "Completed":
        this._whenCompleted();
    }
  }
  _whenPrepare() {
    let e;
    this._setDomain();
    this._setBarrier(
      "Prepare",
      h.k(
        (function (e) {
          const t =
            arguments.length > 1 && arguments[1] !== undefined
              ? arguments[1]
              : ee;
          const i = Y.get(e);
          if (i) {
            return i;
          }
          const r = S._(function* () {
            (yield t()).installMainFrame2026Sidebar(e, {
              tools: undefined,
            });
            try {
              e.invokeFunction((e) => {
                e.get(X.B).initializeAppearance();
              });
            } catch (error) {
              G.V.error(
                "[initMainFrame2026Theme] Failed to initialize theme appearance:",
                error,
              );
            }
          })();
          Y.set(e, r);
          return r;
        })(this._containerService),
      ),
    );
    $.k(this._containerService);
    e = this._containerService;
    window.__debugger = new Z(e);
    W.V(this._containerService);
    ((e) => {
      const t =
        typeof window === "undefined" ? undefined : window.__beta_test__;
      if (t) {
        const i = C.X(w.o(t));
        const r = e.invokeFunction((e) => e.get(T.o));
        Object.keys(i).forEach((e) => {
          var t = i[e];
          r.setValue(e, t);
        });
        r.init();
        N(x, true, e);
      } else {
        E(e);
        N(x, false, e);
      }
    })(this._containerService);
    j.d(this._containerService);
    this._getAccountService().onDidLogin(() => {
      E(this._containerService);
    });
    v.jo(f.Yv);
    this._waitI18n.then(() => {
      v.qD(f.Yv);
    });
  }
  _whenRender() {
    v.jo(f.Rk);
    let e;
    let buildRegion;
    let containerService;
    let n;
    const dreaminaUiConfigurationService =
      this._getDreaminaUiConfigurationService();
    (e = () => {
      var e;
      var t =
        (e = dreaminaUiConfigurationService.currentKeepAliveData) == null
          ? undefined
          : e.routeId;
      if (t) {
        if (em.includes(t)) {
          eg.resetViewport();
        } else {
          eg.setViewportScaleInMobileNotIpad();
        }
      }
    })();
    dreaminaUiConfigurationService.onKeepAliveChange(e);
    dreaminaUiConfigurationService.registerConfig({
      [l.N.PageRoute]: [
        {
          id: b.Du.FallBack,
          path: y.ph[b.Du.FallBack],
          isNeedCache: false,
          content: () =>
            r.jsx(c.C5, {
              to: y.ph[y.tq],
            }),
          skeleton: () => null,
        },
      ],
    });
    buildRegion = yo();
    containerService = this._containerService;
    n = document.getElementById("csr-root");
    et.H(n).render(
      r.jsx(eu, {
        buildRegion,
        containerService,
        dreaminaUiConfigurationService,
      }),
    );
    this._containerService.invokeFunction((e) => {
      var t = e.get(X.B);
      if (location.pathname.includes(y.a$.dataSubjectRequest)) {
        t.setTheme(eh.l.Light, {
          temporary: true,
        });
      }
    });
    v.qD(f.Rk);
    this._ignoreImgHoverBubbling();
  }
  _whenCompleted() {
    let e;
    V(this._containerService);
    this._containerService.invokeFunction((e) => {
      e.get(B.a).abTestManager.initAndExposeAbTest();
    });
    this._containerService.invokeFunction((e) => {
      e.get(_._).addPreloadTask({
        signal: "PAGE_LOAD",
        runTask: () => {
          this._initWebsocket();
        },
      });
    });
    this._containerService.invokeFunction((e) => {
      e.get(_._).addPreloadTask({
        signal: "PAGE_LOAD",
        runTask: () => {
          this._preloadCommercialFeature();
        },
      });
    });
    this._containerService.invokeFunction((e) => {
      e.get(ev.L2).getIsInternalNet(2500);
    });
    e = this._containerService;
    S._(function* () {
      const t = m.cQ(e, e_.O);
      const i = m.cQ(e, ep.D);
      (yield t.getInstance()).onContentGeneratorTypeChange((e) => {
        var t = new URL(window.location.href);
        t.searchParams.set("type", e);
        var selectedWorkspaceId = i.data.selectedWorkspaceId;
        if (selectedWorkspaceId !== undefined) {
          t.searchParams.set("workspace", String(selectedWorkspaceId));
        }
        window.history.replaceState({}, "", t.toString());
      });
    })();
  }
  _preloadCommercialFeature() {
    this._containerService.invokeFunction((e) => {
      e.get(a.jV).getInstance();
    });
  }
  _setDomain() {
    const e = m.cQ(this._containerService, F.D);
    const t = m.cQ(this._containerService, p.r);
    const i = m.cQ(this._containerService, n.c);
    const businessDomain = jg[e.appEnv][e.region];
    this._register(
      (function (e, t) {
        const i =
          arguments.length > 2 && arguments[2] !== undefined && arguments[2];
        let r = false;
        t(e.hasLogin || i ? e.userProfile : undefined);
        const n = [
          e.onDidLogin(() => {
            r = false;
            t(e.userProfile);
          }),
          e.onDidChangeProfile((e) => {
            if (!r) {
              t(e);
            }
          }),
          e.onDidLogout(() => {
            r = true;
            t(undefined);
          }),
        ];
        return {
          dispose: () => n.forEach((e) => e.dispose()),
        };
      })(
        i,
        (i) => {
          t.updateRequestInfo(
            ((e, t) => {
              let i;
              let r;
              let n;
              let a;
              let o;
              const { businessDomain, jianyingDomain, isOversea } = t;
              const d = isOversea
                ? e == null
                  ? undefined
                  : e.reqDomain
                : undefined;
              const u =
                (d == null ? undefined : d.web_domain) || businessDomain;
              return {
                domainMap: {
                  [p.X.DEFAULT]: businessDomain,
                  [p.X.TTS]: u,
                  [p.X.SAMI]: u,
                  [p.X.FRONTIER]:
                    (i = d == null ? undefined : d.frontier_domain) != null
                      ? i
                      : businessDomain,
                  [p.X.COMMERCE]:
                    (r = d == null ? undefined : d.commerce_domain) != null
                      ? r
                      : businessDomain,
                  [p.X.JIANYING]: isOversea ? u : jianyingDomain,
                },
                locationInfo: {
                  region: isOversea
                    ? (n = e == null ? undefined : e.region) != null
                      ? n
                      : ""
                    : "cn",
                  idc:
                    isOversea && (a = e == null ? undefined : e.newIdc) != null
                      ? a
                      : "",
                  idcEnum:
                    isOversea && (o = e == null ? undefined : e.idc) != null
                      ? o
                      : 0,
                },
              };
            })(i, {
              isOversea: false,
              businessDomain,
              jianyingDomain: l6[e.appEnv],
            }),
          );
        },
        false,
      ),
    );
    if (!i.hasLogin) {
      this._register(g.J(i.onDidLogin)(() => V(this._containerService)));
    }
  }
  _ignoreImgHoverBubbling() {
    document.body.addEventListener("mouseover", (e) => {
      if (
        e.target instanceof HTMLImageElement ||
        e.target instanceof HTMLPictureElement
      ) {
        e.stopPropagation();
        e.preventDefault();
      }
    });
    document.body.addEventListener("mouseover", (e) => {
      if (
        e.target instanceof HTMLImageElement ||
        e.target instanceof HTMLPictureElement
      ) {
        e.stopPropagation();
        e.preventDefault();
      }
    });
  }
  _initWebsocket() {
    return this._containerService.invokeFunction((e) => {
      var t = e.get(o.dE);
      var i = e.get(n.c);
      var r = () => {
        t.connect({
          config: s.Vz(""),
        });
      };
      if (i.hasLogin) {
        r();
      } else {
        i.onDidLogin(() => {
          r();
        });
      }
    });
  }
  _getDreaminaUiConfigurationService() {
    return this._containerService.invokeFunction((e) => e.get(d.K));
  }
  _getAccountService() {
    return this._containerService.invokeFunction((e) => e.get(n.c));
  }
  _checkRoutePath(e) {}
  constructor(e, t) {
    super();
    this._waitI18n = e;
    this._containerService = t;
    this._name = "frame";
    i = new URLSearchParams(window.location.search);
    r = {
      [J.A.authorInviteCode]: Q,
      [J.A.ugCampaignKey]: q(K.o.ugCampaignKey),
      [J.A.ugInviteParams]: q(K.o.ugInviteParams),
      [J.A.ugSecFromUid]: q(K.o.ugSecFromUid),
    };
    Object.values(J.A).forEach((e) => {
      var t;
      var n = i.get(e);
      if ((t = r[e]) != null) {
        t.call(r, n);
      }
    });
    var i;
    var r;
    var n = h.k(this._waitI18n);
    this._setBarrier("Prepare", n);
  }
}
export { ef as J };
