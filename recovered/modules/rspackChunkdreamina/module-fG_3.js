import r from "CQ";
import n from "RVr";
import a from "Ral";
import o from "NY";
import s from "oa";
import l from "bE";
import c from "z7R";
import d from "zi";
import u from "vrE";
import h from "CtwG";
import g from "lj";
import v from "oe";
import _ from "M8X";
import p from "UN";
import f from "B3";
import b from "zP";
import y from "cE";
import S from "n3";
import w from "du";
import D from "WG";
import C from "YR";
import R from "j7";
import k from "puv";
import N from "HX";
import x from "aiQ";
import P from "AVa";
import M from "ecK";
import E from "tk";
import F from "xi";
import j from "RII";
import W from "Cc8";
import $ from "Ev";
import I from "Egb";
import A from "zSz";
import L from "st";
import O from "yf8";
function m(e, t) {
  const i = Object.entries(
    s._(
      {
        branch: "release/1250",
      },
      t,
    ),
  ).reduce((acc, entry) => {
    var [i, r] = entry;
    if (r !== undefined) {
      acc[i] = r;
    }
    return acc;
  }, {});
  const r = Object.fromEntries(
    Object.entries(i).map((e) => {
      var [t, i] = e;
      return [t, String(i)];
    }),
  );
  e.setEventParams(i);
  e.setLogParams(i);
  e.setCaptureParams(r);
}
function T(vipService) {
  if (vipService.isVipReady) {
    return +!!vipService.isVip;
  }
  return -1;
}
class z extends r.G {
  _executePhase(e, t) {
    switch (t) {
      case "UserInit":
        this._whenUserInit(e);
        break;
      case "Prepare":
        this._whenPrepare(e);
        break;
      case "Completed":
        this._whenCompleted(e);
    }
  }
  _whenUserInit(e) {}
  _whenPrepare(e) {
    let t;
    let r;
    let W;
    let z;
    let H;
    let Z;
    this._containerService.invokeFunction((e) =>
      o._(function* () {
        let t;
        let i;
        let r;
        let n;
        const a = e.get(l.c);
        const o = e.get(h.F);
        const s = e.get(c.jV);
        if (a.hasLogin) {
          const { uid } = a.userProfile;
          o.setConfig({
            userId: uid,
          });
        } else {
          u.J(a.onDidLogin)(() => {
            var { uid } = a.userProfile;
            o.setConfig({
              userId: uid,
            });
          });
        }
        const { membershipService, vipService } = yield s.getInstance();
        const p = {
          standard: "standard",
          artisan: "artisan",
          maestro: "maestro",
          ultra: "ultra",
          "": "free",
          teams: "teams",
          teams_super: "teams",
        };
        const f = () => {
          m(o, d.v(membershipService));
        };
        m(o, {
          is_vip:
            ((t = vipService.isVipReady),
            (i = vipService.isVip),
            t ? +!!i : -1),
          user_subscribe_type:
            p[
              (r =
                (n = vipService.vipInfo) == null ? undefined : n.curVipLevel) !=
              null
                ? r
                : ""
            ],
        });
        f();
        vipService.onVipInfoChange((e) => {
          m(o, {
            is_vip: +!!e.flag,
            user_subscribe_type: p[e.curVipLevel],
          });
        });
        membershipService.onMembershipChange(f);
      })(),
    );
    (t = this._containerService).invokeFunction((e) =>
      o._(function* () {
        let i;
        let r;
        let n;
        let a;
        let l;
        let u;
        let h;
        let m;
        const R = e.get(b.n);
        const k = e.get(p.k);
        const N = e.get(D.D);
        const x = e.get(C.B);
        const P = () => ({
          theme_mode: x.getTheme() === f.l.Light ? "light" : "dark",
        });
        k.setCustomParams(P());
        x.onDidThemeChange(() => {
          k.setCustomParams(P());
        });
        const gpu_exist =
          document.createElement("canvas").getContext("webgl") instanceof
          WebGLRenderingContext
            ? "1"
            : "0";
        const E = {
          branch: N.appScmBuildBranch,
          resolution: (i = window._canvas_resolution) != null ? i : 480,
          gpu_exist,
          network_type:
            (r =
              (l = navigator.connection) == null
                ? undefined
                : l.effectiveType) != null
              ? r
              : "",
          downlink:
            (n = (u = navigator.connection) == null ? undefined : u.downlink) !=
            null
              ? n
              : "",
          rtt:
            (a = (h = navigator.connection) == null ? undefined : h.rtt) != null
              ? a
              : "",
          web_id: yield k.getWebId(),
          is_new_frame: 1,
          store_country:
            ((m = window.__locationInfo) == null ? undefined : m.code) || "",
        };
        k.setCustomParams(E);
        k.setCustomParams({
          language: R.currentLocale,
        });
        k.setConfig({
          language: R.currentLocale,
        });
        o._(function* () {
          let e;
          let i;
          let r;
          let n;
          const a = _.cQ(t, p.k);
          const o = _.cQ(t, g.K);
          const l = _.cQ(t, c.jV);
          const u = {
            standard: "standard",
            artisan: "artisan",
            maestro: "maestro",
            ultra: "ultra",
            "": "free",
            teams: "teams",
            teams_super: "teams",
          };
          const { membershipService, vipService } = yield l.getInstance();
          const f = () => {
            var e = s._({}, d.v(membershipService));
            a.setCustomParams(e);
            a.setCommonEventParams(e);
          };
          a.setCustomParams({
            is_vip: T(vipService),
            user_subscribe_type:
              u[
                (e =
                  (r = vipService.vipInfo) == null
                    ? undefined
                    : r.curVipLevel) != null
                  ? e
                  : ""
              ],
          });
          a.setCommonEventParams({
            is_vip: T(vipService),
            user_subscribe_type:
              u[
                (i =
                  (n = vipService.vipInfo) == null
                    ? undefined
                    : n.curVipLevel) != null
                  ? i
                  : ""
              ],
          });
          f();
          vipService.onVipInfoChange((e) => {
            var t;
            var i;
            a.setCustomParams({
              is_vip: +!!e.flag,
              user_subscribe_type: u[e.curVipLevel],
            });
            a.setCommonEventParams({
              is_vip: T(vipService),
              user_subscribe_type:
                u[
                  (t =
                    (i = vipService.vipInfo) == null
                      ? undefined
                      : i.curVipLevel) != null
                    ? t
                    : ""
                ],
            });
          });
          membershipService.onMembershipChange(f);
          const b = () => {
            var historyRoutes =
              o.getRouteManager().observableData.historyRoutes;
            var page = y.p(t);
            return {
              url_path: location.pathname,
              referrer: historyRoutes.length > 1 ? historyRoutes.at(-2) : "",
              page,
              tab: page === S.W.Create ? w.t2(t) : undefined,
            };
          };
          a.setCommonEventParams(b());
          o.onRouteConfigChange(() => {
            a.setCommonEventParams(b());
          });
          o.onKeepAliveChange((e) => {
            if (e.status === v.V.Activated) {
              a.setCommonEventParams(b());
            }
          });
        })();
      })(),
    );
    n.X.initialize(this._containerService);
    a.s(this._containerService);
    ((e) => {
      let t;
      let r;
      let n;
      if (
        ((t = location) == null ? undefined : t.pathname) !==
        I.a$.baseName + I.ph[N.Du.ThirdPartyCallback]
      ) {
        const a =
          (n = window) == null || (r = n.location) == null ? undefined : r.href;
        const s = _.cQ(e, l.c);
        const c = () =>
          o._(function* () {
            try {
              let t;
              const r = new L.L();
              const { IUgUserInfoDataService, UgUserInfoDataService } =
                yield require.e("vnr").then(require.bind(require, "xFN"));
              r.register(IUgUserInfoDataService, UgUserInfoDataService);
              const s = new _.nP(r.makeCollection(), e);
              const l = _.cQ(s, IUgUserInfoDataService);
              const c = _.cQ(s, D.D);
              const d = yield l.getUgUserInfo();
              if (d.ok && !d.value.isWebRegistered) {
                try {
                  window.uetq =
                    ((t = window) == null ? undefined : t.uetq) || [];
                  window.uetq.push("event", "signup", {
                    revenue_value: 1,
                    currency: "CNY",
                  });
                } catch (error) {
                  F.V.error("[reportUetConversion error] ".concat(error));
                }
                s.createInstance(O.P, {
                  eventTs: Math.floor(Date.now() / 1000),
                  growthDeepevent: "4",
                  landingPageUrl: a != null ? a : "",
                  appId: Number(c.appId),
                  eventName: "ug_signup_status",
                  status: "success",
                  signupMethod: "douyin",
                }).report();
              }
            } catch (error) {
              F.V.error("[reportUserRegisterInfo error] ".concat(error));
            }
          })();
        if (s.hasLogin) {
          c();
        } else {
          u.J(s.onDidLogin)(c);
        }
      }
    })(this._containerService);
    (r = this._containerService)
      .invokeFunction((e) => e.get(g.K))
      .onKeepAliveChange((e) => {
        if (e.status === v.V.Activated) {
          var routeId = e.routeId;
          var teamId = k.y();
          var n = new E.a(
            {},
            teamId
              ? {
                  teamId,
                }
              : {},
            r,
          );
          n.setCurrentPage(routeId, W);
          if (routeId === N.Du.Home) {
            n.setTab(w.t2(r));
          }
          n.setGenerationEnterFrom(routeId, e.locationState);
          if (routeId === N.Du.ShortDrama) {
            n.setEnterFrom("other");
          }
          if (
            x.U(e.locationState) &&
            (P.i(e.locationState, "fromSideMenu") &&
              e.locationState.fromSideMenu === true &&
              n.setEnterFrom("page_click"),
            P.i(e.locationState, "pageViewAttribution") &&
              x.U(e.locationState.pageViewAttribution))
          ) {
            var { pageViewAttribution } = e.locationState;
            if (
              P.i(pageViewAttribution, "enterFrom") &&
              typeof pageViewAttribution.enterFrom === "string"
            ) {
              n.setEnterFrom(pageViewAttribution.enterFrom);
            }
            if (
              P.i(pageViewAttribution, "fromPage") &&
              typeof pageViewAttribution.fromPage === "string"
            ) {
              n.setFromPage(pageViewAttribution.fromPage);
            }
          }
          var o = new URLSearchParams(window.location.search);
          var s = o.get("enter_from");
          var l = o.get("from_page");
          var c = o.get("ai_feature_name");
          if (c) {
            n.setAiFeatureName(c);
          }
          if (s) {
            var d =
              routeId === N.Du.AIGeneratedRecord && s === "ai_function"
                ? "ai_function_banner"
                : s === "all_tools_click"
                  ? "other"
                  : s;
            n.setEnterFrom(d);
          }
          if (routeId === N.Du.CliInstall) {
            n.setFromPage(M.W(l));
          } else if (l) {
            n.setFromPage(l);
          }
          n.report();
          W = {
            urlPath: window.location.href,
            routeId,
          };
        }
      });
    this._containerService
      .invokeFunction((e) => e.get(g.K))
      .onKeepAliveChange((e) => {
        if (e.status === v.V.Activated) {
          R.w();
        }
      });
    z = this._containerService;
    H = _.cQ(z, l.c);
    Z = location.pathname === I.a$.baseName + I.ph[N.Du.ThirdPartyCallback];
    if (!(H.hasLogin || $.Fr || Z)) {
      u.J(H.onDidLogin)(() => {
        var e = _.cQ(z, j.l);
        if (H instanceof A.t && H.fromLogin) {
          e.reportPv(
            {
              source: "login",
            },
            {
              forceReport: true,
            },
          );
        }
      });
    }
  }
  _whenCompleted(e) {
    this._params.customReportEvents.forEach((e) => e(this._containerService));
    ((e) => {
      try {
        const t = _.cQ(e, j.l);
        const i = (e) => {
          for (var i of e) {
            if (i.name === W.IM) {
              var r;
              var status =
                ((r = i.detail) == null ? undefined : r.status) || "";
              if (
                status !== "success" ||
                !Number.isFinite(i.startTime) ||
                i.startTime <= 0
              ) {
                return true;
              }
              var a = {
                value: Math.round(i.startTime),
                status,
              };
              t.reportBusinessEvent(W.IM, a);
              F.V.info("[ccfmp] reported to tea:", a);
              return true;
            }
          }
          return false;
        };
        const r = performance.getEntriesByName(W.IM, "mark");
        if (r.length > 0) {
          return void i(r);
        }
        var n = new PerformanceObserver((e) => {
          if (i(e.getEntries())) {
            n.disconnect();
          }
        });
        n.observe({
          type: "mark",
          buffered: true,
        });
      } catch (error) {
        F.V.warn("[ccfmp] reportCcfmpToTea error:", error);
      }
    })(this._containerService);
  }
  constructor(e, t) {
    super();
    this._params = e;
    this._containerService = t;
    this._name = "report";
    t.invokeFunction((e) => {
      var t = e.get(p.k);
      var i = e.get(h.F);
      var r = {
        branch: "release/1250",
      };
      t.setCustomParams(r);
      i.setEventParams(r);
      var n = Object.entries(r).reduce((acc, entry) => {
        var [i, r] = entry;
        if (r !== undefined) {
          acc[i] = String(r);
        }
        return acc;
      }, {});
      i.setCaptureParams(n);
      i.setLogParams(r);
    });
  }
}
export { z as M };
