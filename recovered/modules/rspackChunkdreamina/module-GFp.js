import n from "NY";
import a from "oa";
import o from "bk";
import s from "z8";
import _c from "xb";
import d from "SJ";
import u from "VPK";
import p from "dm";
import m from "bo";
import h from "M8X";
import v from "wF";
import _ from "CFa";
import y from "JZn";
import g from "Nbm";
import b from "gLs";
import f from "TFP";
import x from "jh7";
import P from "pHz";
import C from "KH";
import S from "Q5x";
import A from "xMb";
import k from "Pen";
import I from "WIi";
import j from "Uze";
import w from "ibs";
import N from "zbK";
import { Lm, Q2, gP } from "./module-Dz.js";
import E from "zP9";
import $ from "EuO";
import W from "Chy";
import B from "hR";
import D from "cO";
import V from "bT";
import H from "ED";
import z from "p21";
import "eu";
import U from "Kt";
import q from "xa";
import K from "Pl";
import Z from "LX";
import X from "EYk";
import G from "oh";
import Q from "VN";
import { VU, Xx, vf } from "./module-M4z.js";
import * as Y from "./module-CQu.js";
import { VQ } from "./module-dH4.js";
import { $ as $_1 } from "./module-rG7.js";
import eo from "Rom";
import { A as A_1 } from "./module-hx3.js";
import el from "xi";
import ed from "QJ";
let i;
function M() {
  const handledOrderIds = new Set();
  return (t) =>
    (function (e) {
      return n
        ._(function* (e) {
          const {
            orderId,
            teamContext,
            subscribeTeamSpaceService,
            refreshTeamGoodsInfo,
            handledOrderIds,
          } = e;
          if (
            handledOrderIds == null ? undefined : handledOrderIds.has(orderId)
          ) {
            return {
              skipped: true,
            };
          }
          if (handledOrderIds != null) {
            handledOrderIds.add(orderId);
          }
          const teamSyncResult =
            yield subscribeTeamSpaceService.syncTeamSubscribeAfterPaid({
              orderId,
              purchaseSource: teamContext.purchaseSource,
              currentTeamId: teamContext.currentTeamId,
            });
          const teamGoodsRefreshResult = yield Promise.resolve(
            refreshTeamGoodsInfo == null ? undefined : refreshTeamGoodsInfo(),
          ).catch(() => undefined);
          return {
            skipped: false,
            orderId,
            scene: teamSyncResult.scene,
            targetTeam: teamSyncResult.targetTeam,
            teamSyncResult,
            teamGoodsRefreshResult,
          };
        })
        .apply(this, arguments);
    })(
      o._(a._({}, t), {
        handledOrderIds,
      }),
    );
}
function R(e, purchaseSource) {
  if (purchaseSource) {
    return o._(a._({}, e), {
      purchaseSource,
    });
  }
  return e;
}
function F(e) {
  return n
    ._(function* (e) {
      const { getSubscribeTeamSpaceContext, purchaseSource, teamContext } = e;
      if (teamContext) {
        return R(teamContext, purchaseSource);
      }
      return R(yield getSubscribeTeamSpaceContext(), purchaseSource);
    })
    .apply(this, arguments);
}
function O(e) {
  const { pageKind, containerService, teamContext } = e;
  if (pageKind === N.Ac.Team) {
    return g.X3(m.p3(), containerService, teamContext);
  }
  return g.AT(m.p3(), containerService);
}
const er = "jimeng_api_sale";
const source_1 = "vip_page_api_entrance";
const en = "/ai-tool/jimeng-api";
const ea = H.PA((e) => {
  var t;
  var r;
  var i;
  var {
    pageKind,
    source,
    vipPayManager,
    teamContext,
    isOpenedFromPersonalSubscribePage,
    showTeamSubscribeEntry,
    onOpenTeamSubscribe,
    defaultSubscriptionTab,
    showPageKindTabs,
    isPageKindSwitching,
    onPageKindChange,
    enableStandaloneCreditsPackPurchaseModal,
    forceTheme,
    onCloseSubscribePage,
  } = e;
  var P = v.h(X.a);
  var C = v.h(U._);
  var A = v.h(S.bE);
  var k = v.h(j.s);
  var I = v.h(q.o);
  var w = Y.v();
  var { isPhase2SubscribePage } = vf();
  var subscriptionPageHeaderTexts =
    (t = P.resourcePosition) == null ? undefined : t.subscriptionPageHeadTexts;
  var [F, setF] = V.useState();
  V.useEffect(() => {
    if (source) {
      vipPayManager.updateReportParam({
        source,
      });
    }
  }, [source, vipPayManager]);
  V.useEffect(() => {
    var e = false;
    I.getExperimentParams({
      keys: [er],
      aid: Number(K._P()),
    })
      .then((t) => {
        var r = t.ok ? t.value.params[er] : undefined;
        if (!e) {
          setF(r);
        }
      })
      .catch(() => {
        if (!e) {
          setF(undefined);
        }
      });
    return () => {
      e = true;
    };
  }, [I]);
  var L = v.h(Q._);
  var { isVip, isVipExpired } = z.F(L, (e) => ({
    isVip: e.isVip,
    isVipExpired: e.isVipExpired,
  }));
  var W = v.h(x.r3);
  var { personalIsActive, personalStatus } = z.F(W, (e) => ({
    personalIsActive: e.personal.isActive,
    personalStatus: e.personal.status,
  }));
  var ea = pageKind === N.Ac.Team;
  var eo = v.h(G.$);
  var es = z.F(eo, (e) => {
    if (ea) {
      return [];
    }
    return e.vipTabList;
  });
  var ec = V.useMemo(() => {
    var e;
    var t;
    return (
      !ea &&
      ((t = es[0]) == null || (e = t.productIds) == null
        ? undefined
        : e.length) === 3
    );
  }, [ea, es]);
  var shouldShowJimengApiSaleEntry = V.useCallback(
    () =>
      ((e) => {
        const { experimentValue, isOversea, pathname } = e;
        return (
          !isOversea &&
          ((e) => {
            if (typeof e !== "string") {
              return false;
            }
            try {
              const t = JSON.parse(e);
              return t.enable === true;
            } catch (e) {
              return false;
            }
          })(experimentValue) &&
          !(pathname === en || pathname.startsWith("".concat(en, "/")))
        );
      })({
        experimentValue: F,
        isOversea: false,
        pathname: typeof window === "undefined" ? "" : window.location.pathname,
      }),
    [F],
  );
  var showJimengApiSaleEntry = shouldShowJimengApiSaleEntry();
  var onOpenJimengApiSalesUsagePage = V.useCallback(() => {
    Z.WS(C, {
      action: "click_api_button",
      source: source_1,
      teamType: "personal",
      customReportParams: {
        page: "api",
      },
    });
    window.open(
      D.m(`/ai-tool/jimeng-api/console/usage?source=`.concat(source_1), null, {
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
          "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWQxbFh%bkpa$jJSc1kzaz$hMk50$m1oa$-yeDFX$k01-W1Je%1-%mFXRXBx$2xNNW$tTnR%WFpaTWpsMFkw-z$k$nB-TlRCam$%bHBaRmhP-0dKdFZuc*pl$*xxWWpJe*R*cFlTbXBo$jBaelR*aENhR1Z%T1dwa%1qRjNZakkx-kdKd$$ucE1NMD$2WWpOamRH%nRiS*RN$np*MldrZEdjMHd5$*5aa$dFSjJZbTFXZFdSS$R-Wmti$3gz$EZkT2RtSn$$bXhp-mx*MllW-zFhMXBZWjNWa1NFNDBX$mhL-m1SW$R%MD0",
      }),
      "_blank",
      "noopener,noreferrer",
    );
  }, [C]);
  var material = (pageKind === N.Ac.Team ? k : A).material;
  var em =
    w === "dark"
      ? material == null || (r = material.bannerDark) == null
        ? undefined
        : r.enable
      : material == null || (i = material.banner) == null
        ? undefined
        : i.enable;
  var eh = !ea && (isVip || isVipExpired);
  var ev = ea && !isOpenedFromPersonalSubscribePage && !!teamContext;
  var e_ =
    ea &&
    isOpenedFromPersonalSubscribePage &&
    teamContext.currentSpaceType === N.cU.Personal &&
    teamContext.subscriptionStatus === N.pT.None &&
    !teamContext.currentTeamId &&
    (personalIsActive || personalStatus === x.lz.Expired);
  var ey = eh || ev || e_;
  var style = V.useMemo(
    () =>
      a._(
        {
          paddingTop: isPhase2SubscribePage
            ? "16px"
            : em && !ey
              ? "36px"
              : ea
                ? "48px"
                : "60px",
        },
        ec
          ? {
              "--price-list-max-width": "1100px",
            }
          : {},
      ),
    [em, ec, ea, ey, isPhase2SubscribePage],
  );
  var eb =
    pageKind === N.Ac.Team
      ? s.jsxs(s.Fragment, {
          children: [
            s.jsx($_1, {
              pageKind: N.Ac.Team,
              vipPayManager,
              subscriptionPageHeaderTexts,
              teamContext,
              isOpenedFromPersonalSubscribePage,
              showSubscriptionManageGuideTooltip:
                isPhase2SubscribePage && isOpenedFromPersonalSubscribePage,
              showJimengApiSaleEntry,
              shouldShowJimengApiSaleEntry,
              onOpenJimengApiSalesUsagePage,
              enableStandaloneCreditsPackPurchaseModal,
              forceTheme,
              onCloseSubscribePage,
            }),
            s.jsx(VQ, {
              pageKind: N.Ac.Team,
              source,
              vipPayManager,
              subscriptionPageHeaderTexts,
              teamContext,
              showPageKindTabs,
              isPageKindSwitching,
              onPageKindChange,
              enableStandaloneCreditsPackPurchaseModal,
              forceTheme,
              onCloseSubscribePage,
            }),
          ],
        })
      : s.jsxs(s.Fragment, {
          children: [
            s.jsx($_1, {
              pageKind: N.Ac.Personal,
              vipPayManager,
              subscriptionPageHeaderTexts,
              showSubscriptionManageGuideTooltip: true,
              showJimengApiSaleEntry,
              shouldShowJimengApiSaleEntry,
              onOpenJimengApiSalesUsagePage,
              enableStandaloneCreditsPackPurchaseModal,
              forceTheme,
              onCloseSubscribePage,
            }),
            s.jsx(VQ, {
              pageKind: N.Ac.Personal,
              source,
              vipPayManager,
              subscriptionPageHeaderTexts,
              showTeamSubscribeEntry,
              onOpenTeamSubscribe,
              defaultSubscriptionTab,
              showPageKindTabs,
              isPageKindSwitching,
              onPageKindChange,
              enableStandaloneCreditsPackPurchaseModal,
              forceTheme,
              onCloseSubscribePage,
            }),
          ],
        });
  return s.jsx("div", {
    className: `wrapper-KDcqM7 ${isPageKindSwitching ? "switching-wVU5ep" : ""}`,
    style,
    "aria-busy": isPageKindSwitching,
    onWheel: (e) => e.stopPropagation(),
    children: eb,
  });
});
class ec {
  get snapshot() {
    return this._snapshot;
  }
  switchPageKind(e) {
    return n
      ._(function* () {
        if (
          this._disposed ||
          e === this._snapshot.pageKind ||
          this._snapshot.status === "switching"
        ) {
          return false;
        }
        const t = ++this._latestSwitchRequestId;
        this._updateStatus("switching");
        try {
          const r =
            e === N.Ac.Team
              ? yield this._dependencies.resolveTeamContext()
              : undefined;
          yield this._dependencies.fetchPageGoods(e, r);
          if (!this._isLatestRequest(t)) {
            return false;
          }
          const i = this._dependencies.createVipPayManager(e, r);
          if (!this._isLatestRequest(t)) {
            i.dispose();
            return false;
          }
          const n = this._snapshot.vipPayManager;
          this._snapshot = {
            pageKind: e,
            status: "ready",
            version: this._snapshot.version + 1,
            teamContext: r,
            vipPayManager: i,
          };
          this._dependencies.onSnapshotChange(this._snapshot);
          n.dispose();
          return true;
        } catch (e) {
          if (this._isLatestRequest(t)) {
            this._updateStatus("error");
          }
          return false;
        }
      })
      .call(this);
  }
  cancelPendingSwitch() {
    if (!(this._disposed || this._snapshot.status !== "switching")) {
      this._latestSwitchRequestId += 1;
    }
  }
  dispose() {
    if (!this._disposed) {
      this._disposed = true;
      this._latestSwitchRequestId += 1;
      this._snapshot.vipPayManager.dispose();
    }
  }
  _updateStatus(status) {
    this._snapshot = o._(a._({}, this._snapshot), {
      status,
    });
    this._dependencies.onSnapshotChange(this._snapshot);
  }
  _isLatestRequest(e) {
    return !this._disposed && e === this._latestSwitchRequestId;
  }
  constructor(e, t) {
    this._dependencies = t;
    this._latestSwitchRequestId = 0;
    this._disposed = false;
    this._snapshot = e;
  }
}
function eu(onPersonalPaymentSuccess) {
  let t = false;
  return (r) => {
    if (!t && onPersonalPaymentSuccess) {
      t = true;
      try {
        Promise.resolve(onPersonalPaymentSuccess(r)).catch(() => undefined);
      } catch (e) {}
    }
  };
}
function ep(e) {
  return Array.from(
    document.querySelectorAll(".lv-modal, .lv-modal-mask"),
  ).some((t) => !e.has(t));
}
function em(containerService) {
  try {
    return h.cQ(containerService, x.r3).isTeamMode;
  } catch (e) {
    return false;
  }
}
const eh = (e) => {
  var t;
  var r;
  var {
    containerService,
    reportParam,
    vipPayManager,
    pageKind,
    contextViewId,
    teamContext,
    teamContentComponent,
    isOpenedFromPersonalSubscribePage,
    onOpenTeamSubscribe,
    onTeamSubscribeEntryResolved,
    onBeforeClose,
    onPersonalPaymentSuccess,
    onSuccess,
    defaultSubscriptionTab,
    enableStandaloneCreditsPackPurchaseModal,
    forceTheme,
    onAfterClose,
  } = e;
  var H = pageKind === N.Ac.Team;
  var z = h.cQ(containerService, b.o);
  var U = !z.isOversea;
  var variant =
    U && ((t = z.subscriptionPhase2Policy) == null ? undefined : t.fullPage)
      ? VU.Phase2
      : U && !H
        ? VU.NewPage
        : VU.Control;
  if (!(variant === VU.Control || H)) {
    h.cQ(containerService, C.Bn).fetchResourcePosition();
  }
  var K = H
    ? o._(a._({}, reportParam), {
        teamType: "team",
        teamId: teamContext == null ? undefined : teamContext.currentTeamId,
        customReportParams: a._(
          {
            business_extra: "{}",
          },
          reportParam.customReportParams,
        ),
      })
    : reportParam;
  var { source } = K;
  var X = y.Y(containerService, contextViewId);
  var G = new Set(document.querySelectorAll(".lv-modal, .lv-modal-mask"));
  if (H) {
    vipPayManager.updateProductScene(N.fq.Teams);
  } else {
    var Q = m.p3();
    vipPayManager.updateProductScene(N.fq.Personal);
    vipPayManager.setCurrentProductByIndex(Q, 0);
  }
  vipPayManager.updateReportParam(
    a._(
      {
        interceptionType: undefined,
        minVipLevel: undefined,
      },
      K,
    ),
  );
  var ee = document.createElement("div");
  document.body.appendChild(ee);
  var et = d.H(ee);
  var er = h.cQ(containerService, f.Oh);
  var ei = true;
  var en = false;
  var eo = teamContext;
  var showTeamSubscribeEntry = false;
  var el = () => undefined;
  var ed = () => {
    if (onBeforeClose != null) {
      onBeforeClose();
    }
    el();
    p.y(300).then(() => {
      try {
        et.unmount();
        ee.remove();
        X.unmount();
        vipPayManager.dispose();
        en = true;
      } finally {
        if (onAfterClose != null) {
          onAfterClose();
        }
      }
    });
  };
  var em = () => {
    if (ei) {
      ei = false;
      ed();
    }
  };
  var eh = () =>
    n._(function* () {
      const e = document.querySelector(".paymentRetentionModalWrapper");
      const t = ep(G);
      if (!e && !t) {
        if (H) {
          return void (
            ei &&
            ((ei = false),
            vipPayManager.reportPopup({
              action: "close",
            }),
            ed())
          );
        }
        if (ei) {
          vipPayManager.reportPopup({
            action: "close",
          });
          const r = er.material;
          if (
            r &&
            er.markShownInSession() &&
            (er.reportAction(f.xh.Show),
            B.R({
              containerService,
              resourcePositionService: er,
              action: "show",
            }),
            (yield E.t({
              containerService,
              material: r,
              onShow: () => undefined,
              onClick: (e) => {
                er.reportAction(f.xh.Click, {
                  clickButton: e,
                });
                B.R({
                  containerService,
                  resourcePositionService: er,
                  action: e === "main" ? "click_to_vip_page" : "close_button",
                });
              },
            })) === "continuePay")
          ) {
            return;
          }
          em();
        }
      }
    })();
  el = () => {
    if (!en) {
      if (H) {
        if (!eo) {
          return;
        }
        et.render(
          s.jsx(v.Z, {
            instantiationService: containerService,
            children: s.jsx(Xx, {
              variant,
              children: s.jsx(u.HO, {
                visible: ei,
                height: "100vh",
                onClose: eh,
                closeButtonClassName:
                  variant === VU.Phase2
                    ? A_1.domesticSubscriptionCloseButton
                    : undefined,
                className: _c(
                  forceTheme === "light" && "lv-theme-force_light",
                  forceTheme === "light" && A_1.standaloneLightTheme,
                  forceTheme === "dark" && "lv-theme-force_dark",
                  forceTheme === "dark" && A_1.standaloneDarkTheme,
                ),
                children: s.jsx(Y.B, {
                  theme: forceTheme,
                  children: teamContentComponent
                    ? s.jsx(teamContentComponent, {
                        vipPayManager,
                        source,
                        teamContext: eo,
                        forceTheme,
                      })
                    : s.jsx(ea, {
                        pageKind: N.Ac.Team,
                        vipPayManager,
                        source,
                        teamContext: eo,
                        isOpenedFromPersonalSubscribePage,
                        enableStandaloneCreditsPackPurchaseModal,
                        forceTheme,
                        onCloseSubscribePage: em,
                      }),
                }),
              }),
            }),
          }),
        );
        return;
      }
      et.render(
        s.jsx(v.Z, {
          instantiationService: containerService,
          children: s.jsx(Xx, {
            variant,
            children: s.jsx(u.HO, {
              visible: ei,
              height: "100vh",
              onClose: eh,
              closeButtonClassName:
                variant === VU.Phase2
                  ? A_1.domesticSubscriptionCloseButton
                  : undefined,
              className: _c(
                forceTheme === "light" && "lv-theme-force_light",
                forceTheme === "light" && A_1.standaloneLightTheme,
                forceTheme === "dark" && "lv-theme-force_dark",
                forceTheme === "dark" && A_1.standaloneDarkTheme,
              ),
              children: s.jsx(Y.B, {
                theme: forceTheme,
                children: s.jsx(ea, {
                  pageKind: N.Ac.Personal,
                  vipPayManager,
                  source,
                  showTeamSubscribeEntry,
                  onOpenTeamSubscribe: onOpenTeamSubscribe
                    ? () => {
                        if (r) {
                          onOpenTeamSubscribe(r);
                        }
                      }
                    : undefined,
                  defaultSubscriptionTab,
                  enableStandaloneCreditsPackPurchaseModal,
                  forceTheme,
                  onCloseSubscribePage: em,
                }),
              }),
            }),
          }),
        }),
      );
    }
  };
  var ev = H || onOpenTeamSubscribe ? h.cQ(containerService, I.G) : undefined;
  if (!H && onOpenTeamSubscribe && ev) {
    ev.resolveTeamSubscribeEntry()
      .then((e) => {
        if (!en && e.visible) {
          showTeamSubscribeEntry = true;
          r = e.teamContext;
          if (onTeamSubscribeEntryResolved != null) {
            onTeamSubscribeEntryResolved(e.teamContext);
          }
          el();
        }
      })
      .catch(() => undefined);
  }
  var e_ = eu(onPersonalPaymentSuccess);
  var ey = M();
  vipPayManager.onSuccess(() => {
    if (!H) {
      if (!ei || en) {
        return;
      }
      e_(vipPayManager.personalPaymentSuccessContext);
      em();
      return;
    }
    if (
      ev &&
      ((e = vipPayManager.orderInfo) == null ? undefined : e.orderId) &&
      eo
    ) {
      var e;
      var t = eo;
      ey({
        orderId: vipPayManager.orderInfo.orderId,
        teamContext: t,
        subscribeTeamSpaceService: ev,
        refreshTeamGoodsInfo: () => g.X3(m.p3(), containerService, t),
      })
        .then((e) =>
          n._(function* () {
            if (!e.skipped) {
              const r =
                e.scene !== N.yY.SeatUpgrade &&
                ev.hasTeamSubscribeSuccessHandler();
              if (
                r &&
                (!e.targetTeam ||
                  ((i = e.teamSyncResult) == null
                    ? undefined
                    : i.subscriptionRefreshed) !== true)
              ) {
                throw Error("Failed to resolve the target team after payment");
              }
              yield onSuccess == null ? undefined : onSuccess(e);
              if (r && (yield ev.runTeamSubscribeSuccessHandler(e))) {
                return void em();
              }
              if (ei && !en) {
                vipPayManager.updateProductScene(N.fq.Teams);
                try {
                  var i;
                  let n;
                  const s = yield ev.getSubscribeTeamSpaceContext();
                  eo = o._(a._({}, s), {
                    currentTeamId:
                      (n = t.currentTeamId) != null ? n : s.currentTeamId,
                    purchaseSource: t.purchaseSource,
                  });
                  el();
                } catch (e) {}
                em();
              }
            }
          })(),
        )
        .catch(() => {
          if (ei && !en) {
            if (
              t.purchaseSource !== N.UA.SeatUpgrade &&
              ev.hasTeamSubscribeSuccessHandler()
            ) {
              gP();
            }
            em();
          }
        });
    }
  });
  X.onUnmount(() => {
    em();
  });
  el();
  return {
    close: em,
  };
};
const ev = (e) => {
  var t;
  var {
    containerService,
    reportParam,
    initialPageKind,
    initialTeamContext,
    pageKindTabsTeamContextRequest,
    resolveTeamContext,
    preparePageGoods,
    onPersonalPaymentSuccess,
    onSuccess,
    defaultSubscriptionTab,
    enableStandaloneCreditsPackPurchaseModal,
    forceTheme,
    onAfterClose,
  } = e;
  var O =
    ((t = h.cQ(containerService, b.o).subscriptionPhase2Policy) == null
      ? undefined
      : t.fullPage) === true;
  var $ = initialPageKind === N.Ac.Team ? _.u.TEAM_VIP_MODAL : _.u.VIP_MODAL;
  var W = y.Y(containerService, $);
  var D = new Set(document.querySelectorAll(".lv-modal, .lv-modal-mask"));
  var V = h.cQ(containerService, f.Oh);
  var H = h.cQ(containerService, I.G);
  var z = document.createElement("div");
  document.body.appendChild(z);
  var U = d.H(z);
  var q = true;
  var K = false;
  var showPageKindTabs = false;
  var X = () => undefined;
  var G = {};
  var Q = eu(onPersonalPaymentSuccess);
  var ee = () => {
    if (!G.current) {
      throw Error("Subscribe page session is not ready");
    }
    return G.current;
  };
  var et = () => {
    if (q) {
      ee().cancelPendingSwitch();
      q = false;
      X();
      p.y(300).then(() => {
        try {
          K = true;
          ee().dispose();
          U.unmount();
          z.remove();
          W.unmount();
        } finally {
          if (onAfterClose != null) {
            onAfterClose();
          }
        }
      });
    }
  };
  var er = () =>
    n._(function* () {
      const e = document.querySelector(".paymentRetentionModalWrapper");
      const t = ep(D);
      if (!e && !t) {
        ee().snapshot.vipPayManager.reportPopup({
          action: "close",
        });
        if (ee().snapshot.pageKind === N.Ac.Team) {
          return void et();
        }
        const i = V.material;
        if (
          i &&
          V.markShownInSession() &&
          (V.reportAction(f.xh.Show),
          B.R({
            containerService,
            resourcePositionService: V,
            action: "show",
          }),
          (yield E.t({
            containerService,
            material: i,
            onShow: () => undefined,
            onClick: (e) => {
              V.reportAction(f.xh.Click, {
                clickButton: e,
              });
              B.R({
                containerService,
                resourcePositionService: V,
                action: e === "main" ? "click_to_vip_page" : "close_button",
              });
            },
          })) === "continuePay")
        ) {
          return;
        }
        et();
      }
    })();
  var createVipPayManager = (e, t) => {
    var s;
    var c =
      e === N.Ac.Team &&
      (t == null ? undefined : t.purchaseSource) !== N.UA.SeatUpgrade &&
      H.hasTeamSubscribeSuccessHandler();
    var l = Lm(containerService, {
      shouldShowSuccessMessage: () => !c,
    });
    l.updateReportParam(
      o._(
        a._(
          {
            interceptionType: undefined,
            minVipLevel: undefined,
          },
          reportParam,
        ),
        {
          teamType: e === N.Ac.Team ? "team" : undefined,
          teamId:
            e === N.Ac.Team
              ? t == null
                ? undefined
                : t.currentTeamId
              : undefined,
        },
      ),
    );
    if (e === N.Ac.Team) {
      l.updateProductScene(N.fq.Teams);
      if (t) {
        s = M();
        l.onSuccess(() => {
          var e;
          if (
            !K &&
            q &&
            ee().snapshot.vipPayManager === l &&
            ((e = l.orderInfo) == null ? undefined : e.orderId)
          ) {
            s({
              orderId: l.orderInfo.orderId,
              teamContext: t,
              subscribeTeamSpaceService: H,
              refreshTeamGoodsInfo: () => g.X3(m.p3(), containerService, t),
            })
              .then((e) =>
                n._(function* () {
                  if (!e.skipped) {
                    let t;
                    const r =
                      e.scene !== N.yY.SeatUpgrade &&
                      H.hasTeamSubscribeSuccessHandler();
                    if (
                      r &&
                      (!e.targetTeam ||
                        ((t = e.teamSyncResult) == null
                          ? undefined
                          : t.subscriptionRefreshed) !== true)
                    ) {
                      throw Error(
                        "Failed to resolve the target team after payment",
                      );
                    }
                    yield onSuccess == null ? undefined : onSuccess(e);
                    if (r && (yield H.runTeamSubscribeSuccessHandler(e))) {
                      return void et();
                    }
                    if (q && !K) {
                      et();
                    }
                  }
                })(),
              )
              .catch(() => {
                if (q && !K) {
                  if (
                    t.purchaseSource !== N.UA.SeatUpgrade &&
                    H.hasTeamSubscribeSuccessHandler()
                  ) {
                    gP();
                  }
                  et();
                }
              });
          }
        });
      }
    } else {
      l.updateProductScene(N.fq.Personal);
      l.setCurrentProductByIndex(m.p3(), 0).catch(() => undefined);
      l.onSuccess(() => {
        if (!K && q && ee().snapshot.vipPayManager === l) {
          Q(l.personalPaymentSuccessContext);
          et();
        }
      });
    }
    return l;
  };
  var en = createVipPayManager(initialPageKind, initialTeamContext);
  G.current = new ec(
    {
      pageKind: initialPageKind,
      status: "ready",
      version: 0,
      teamContext: initialTeamContext,
      vipPayManager: en,
    },
    {
      resolveTeamContext,
      fetchPageGoods: (e, t) => {
        e_(containerService, e);
        return preparePageGoods(e, t);
      },
      createVipPayManager,
      onSnapshotChange: () => X(),
    },
  );
  X = () => {
    if (!K) {
      var e = ee().snapshot;
      var t = {
        key: "".concat(e.pageKind, "-").concat(e.version),
        vipPayManager: e.vipPayManager,
        source: reportParam.source,
        showPageKindTabs,
        isPageKindSwitching: e.status === "switching",
        onPageKindChange: showPageKindTabs
          ? (e) => {
              if (!ep(D)) {
                ee().switchPageKind(e);
              }
            }
          : undefined,
        enableStandaloneCreditsPackPurchaseModal,
        forceTheme,
        onCloseSubscribePage: et,
      };
      var n =
        e.pageKind === N.Ac.Team && e.teamContext
          ? s.jsx(
              ea,
              o._(a._({}, t), {
                pageKind: N.Ac.Team,
                teamContext: e.teamContext,
                isOpenedFromPersonalSubscribePage:
                  initialPageKind === N.Ac.Personal,
              }),
            )
          : s.jsx(
              ea,
              o._(a._({}, t), {
                pageKind: N.Ac.Personal,
                defaultSubscriptionTab,
              }),
            );
      U.render(
        s.jsx(v.Z, {
          instantiationService: containerService,
          children: s.jsx(Xx, {
            variant: O ? VU.Phase2 : VU.NewPage,
            children: s.jsx(u.HO, {
              visible: q,
              height: "100vh",
              onClose: er,
              closeButtonClassName: O
                ? A_1.domesticSubscriptionCloseButton
                : undefined,
              className: _c(
                forceTheme === "light" && "lv-theme-force_light",
                forceTheme === "light" && A_1.standaloneLightTheme,
                forceTheme === "dark" && "lv-theme-force_dark",
                forceTheme === "dark" && A_1.standaloneDarkTheme,
              ),
              children: s.jsx(Y.B, {
                theme: forceTheme,
                children: n,
              }),
            }),
          }),
        }),
      );
    }
  };
  if (pageKindTabsTeamContextRequest) {
    pageKindTabsTeamContextRequest
      .then((e) => {
        if (e && !K && q) {
          showPageKindTabs = true;
          e_(containerService, N.Ac.Team);
          preparePageGoods(N.Ac.Team, e).catch(() => undefined);
          X();
        }
      })
      .catch(() => undefined);
  }
  W.onUnmount(et);
  X();
  return {
    close: et,
  };
};
function e_(containerService, t) {
  return n._(function* () {
    const r = h.cQ(containerService, A.Bo);
    const i = h.cQ(containerService, S.bE);
    const a = h.cQ(containerService, w.o);
    const o = h.cQ(containerService, j.s);
    const s = t === N.Ac.Team;
    if (!s) {
      h.cQ(containerService, P.w$).fetchResourcePosition();
    }
    const c = (e) =>
      n._(function* () {
        e.tryUpdateMaterialFromPreFetch();
        if (e.material) {
          e.preFetchResourcePosition().catch(() => undefined);
        } else if (
          (yield e.preFetchResourcePosition().catch(() => false)) === true
        ) {
          e.tryUpdateMaterialFromPreFetch();
        }
      })();
    yield Promise.all([c(s ? a : r), c(s ? o : i)]);
  })();
}
const ey = (e, t) => {
  var { containerService } = e;
  if (h.cQ(containerService, b.o).isOversea) {
    return null;
  }
  if ((i == null ? undefined : i.containerService) === containerService) {
    return i.handle;
  }
  e_(containerService, N.Ac.Team).catch(() => undefined);
  return ((e, t) => {
    var r;
    var {
      containerService,
      reportParam,
      purchaseSource,
      onSuccess,
      teamContext,
      enableStandaloneCreditsPackPurchaseModal,
      forceTheme,
      onAfterClose,
      onOpenError,
    } = e;
    var v = false;
    var y = Lm(
      containerService,
      a._(
        {
          shouldShowSuccessMessage: () => !v,
        },
        t == null ? undefined : t.payManagerOptions,
      ),
    );
    var g = h.cQ(containerService, I.G);
    var b = false;
    var f = false;
    var openToken = Symbol("team-subscribe-open");
    var P = () => {
      if ((i == null ? undefined : i.openToken) === openToken) {
        i = undefined;
      }
    };
    var onAfterClose_1 = () => {
      if (!f) {
        f = true;
        if (onAfterClose != null) {
          onAfterClose();
        }
      }
    };
    var S = (e) => {
      if (!b) {
        b = true;
        P();
        y.dispose();
        try {
          if (onOpenError != null) {
            onOpenError(e);
          }
        } finally {
          onAfterClose_1();
        }
      }
    };
    F({
      getSubscribeTeamSpaceContext: () => g.getSubscribeTeamSpaceContext(),
      purchaseSource,
      teamContext,
    })
      .then((e) => {
        if (!b) {
          v =
            e.purchaseSource !== N.UA.SeatUpgrade &&
            g.hasTeamSubscribeSuccessHandler();
          if (t == null ? undefined : t.teamGoodsRequest) {
            t.teamGoodsRequest.catch(() => undefined);
          } else {
            O({
              pageKind: N.Ac.Team,
              containerService,
              teamContext: e,
            }).catch(() => undefined);
          }
          try {
            r = eh({
              containerService,
              reportParam,
              vipPayManager: y,
              pageKind: N.Ac.Team,
              contextViewId: _.u.TEAM_VIP_MODAL,
              teamContext: e,
              teamContentComponent: t == null ? undefined : t.contentComponent,
              isOpenedFromPersonalSubscribePage:
                t == null ? undefined : t.isOpenedFromPersonalSubscribePage,
              onSuccess,
              enableStandaloneCreditsPackPurchaseModal,
              forceTheme,
              onAfterClose: onAfterClose_1,
            });
            P();
          } catch (error) {
            S(error);
          }
        }
      })
      .catch((e) => {
        S(e);
      });
    var handle = {
      close: () => {
        if (!b) {
          b = true;
          P();
          if (r) {
            return void r.close();
          }
          y.dispose();
          onAfterClose_1();
        }
      },
    };
    i = {
      containerService,
      openToken,
      handle,
    };
    return handle;
  })(e, t);
};
export var Je = (e, t) => ey(e, t);
export var iT = (e) => {
  var t = h.cQ(e.containerService, b.o);
  if (
    W.U({
      isOversea: t.isOversea,
      isTeam: !!e.teamContext || em(e.containerService),
      interceptionType: e.reportParam.interceptionType,
      policy: t.subscriptionPhase2Policy,
      trigger: e.reportParam.interceptionTrigger,
    })
  ) {
    return $.M(
      o._(a._({}, e), {
        onViewAllPlans: () => ef(e),
      }),
    );
  }
  return ef(e);
};
var ef = (e) => {
  var t;
  var { containerService } = e;
  var i = h.cQ(containerService, b.o);
  if (!i.isOversea && em(containerService)) {
    return ey(
      o._(a._({}, e), {
        purchaseSource: (t = e.purchaseSource) != null ? t : N.UA.TeamSubscribe,
      }),
    );
  }
  e_(containerService, N.Ac.Personal).catch(() => undefined);
  h.cQ(containerService, f.Oh).fetchResourcePosition();
  if (i.isOversea) {
    return ((e) => {
      var {
        containerService,
        reportParam,
        defaultSubscriptionTab,
        forceTheme,
        onAfterClose,
        onPersonalPaymentSuccess,
      } = e;
      var g = Q2(containerService);
      return ((e) => {
        var {
          containerService,
          reportParam,
          vipPayManager,
          defaultSubscriptionTab,
          forceTheme,
          onAfterClose,
          onPersonalPaymentSuccess,
        } = e;
        var { source } = reportParam;
        var x = y.Y(containerService, _.u.VIP_MODAL);
        var P = m.p3();
        vipPayManager.setCurrentProductByIndex(P, 0);
        vipPayManager.updateReportParam(reportParam);
        var C = document.createElement("div");
        document.body.appendChild(C);
        var S = d.H(C);
        var A = true;
        var k = false;
        var I = false;
        var j = false;
        var w = false;
        var N = h.cQ(containerService, f.Oh);
        var M = () => {
          if (A && !j) {
            j = true;
            A = false;
            F();
            p.y(300).then(() => {
              try {
                S.unmount();
                C.remove();
                x.unmount();
                if (vipPayManager != null) {
                  vipPayManager.dispose();
                }
                k = true;
              } finally {
                if (!I) {
                  I = true;
                  if (onAfterClose != null) {
                    onAfterClose();
                  }
                }
              }
            });
          }
        };
        if (onPersonalPaymentSuccess) {
          vipPayManager.onSuccess(() => {
            if (!j && A && !w) {
              w = true;
              try {
                Promise.resolve(
                  onPersonalPaymentSuccess(
                    vipPayManager.personalPaymentSuccessContext,
                  ),
                ).catch(() => undefined);
              } catch (e) {}
              M();
            }
          });
        }
        var R = () =>
          n._(function* () {
            if (A) {
              vipPayManager.reportPopup({
                action: "close",
              });
              const e = N.material;
              if (
                !(
                  e &&
                  N.markShownInSession() &&
                  (N.reportAction(f.xh.Show),
                  B.R({
                    containerService,
                    resourcePositionService: N,
                    action: "show",
                  }),
                  (yield E.t({
                    containerService,
                    material: e,
                    onShow: () => undefined,
                    onClick: (e) => {
                      N.reportAction(f.xh.Click, {
                        clickButton: e,
                      });
                      B.R({
                        containerService,
                        resourcePositionService: N,
                        action:
                          e === "main" ? "click_to_vip_page" : "close_button",
                      });
                    },
                  })) === "continuePay")
                )
              ) {
                M();
              }
            }
          })();
        x.onUnmount(() => {
          M();
        });
        var F = () => {
          if (!k) {
            S.render(
              s.jsx(v.Z, {
                instantiationService: containerService,
                children: s.jsx(u.HO, {
                  visible: A,
                  height: "100vh",
                  onClose: R,
                  className: _c(
                    forceTheme === "light" && "lv-theme-force_light",
                    forceTheme === "light" && A_1.standaloneLightTheme,
                    forceTheme === "dark" && "lv-theme-force_dark",
                    forceTheme === "dark" && A_1.standaloneDarkTheme,
                  ),
                  children: s.jsx(Y.B, {
                    theme: forceTheme,
                    children: s.jsx(eo.T, {
                      containerService,
                      vipPayManager,
                      source,
                      defaultSubscriptionTab,
                      forceTheme,
                      onCloseSubscribePage: M,
                    }),
                  }),
                }),
              }),
            );
          }
        };
        F();
        return {
          close: M,
        };
      })({
        containerService,
        reportParam,
        vipPayManager: g,
        defaultSubscriptionTab,
        forceTheme,
        onAfterClose,
        onPersonalPaymentSuccess,
      });
    })(e);
  }
  if (
    e.enableTeamSubscriptionEntry !== false &&
    (e.enableSubscriptionPageKindTabs !== undefined
      ? e.enableSubscriptionPageKindTabs
      : !i.isOversea)
  ) {
    return ((e, initialPageKind) => {
      var r;
      var i;
      var n;
      var { containerService, purchaseSource, teamContext, onAfterClose } = e;
      var u = h.cQ(containerService, I.G);
      var p = teamContext;
      var m = new Map();
      if (initialPageKind === N.Ac.Personal) {
        h.cQ(containerService, C.Bn).fetchResourcePosition();
      }
      h.cQ(containerService, k.qH).fetchResourcePosition();
      var v = () => {
        if (i == null) {
          i = u.resolveTeamSubscribeEntry().then((e) => {
            if (e.visible) {
              return F({
                getSubscribeTeamSpaceContext: () =>
                  u.getSubscribeTeamSpaceContext(),
                purchaseSource:
                  purchaseSource != null ? purchaseSource : N.UA.TeamSubscribe,
                teamContext: e.teamContext,
              }).then((e) => {
                p = e;
                return e;
              });
            }
          });
        }
        return i;
      };
      var resolveTeamContext = () => {
        if (p) {
          return Promise.resolve(p);
        }
        if (r == null) {
          r = (
            initialPageKind === N.Ac.Personal
              ? v().then((e) => {
                  if (!e) {
                    throw Error("Team subscription entry is unavailable");
                  }
                  return e;
                })
              : F({
                  getSubscribeTeamSpaceContext: () =>
                    u.getSubscribeTeamSpaceContext(),
                  purchaseSource:
                    purchaseSource != null
                      ? purchaseSource
                      : N.UA.TeamSubscribe,
                  teamContext,
                })
          )
            .then((e) => {
              p = e;
              return e;
            })
            .catch((e) => {
              r = undefined;
              throw e;
            });
        }
        return r;
      };
      var preparePageGoods = (e, t) => {
        var r = m.get(e);
        if (r) {
          return r;
        }
        var i = O({
          pageKind: e,
          containerService,
          teamContext: t,
        });
        m.set(e, i);
        i.catch(() => {
          if (m.get(e) === i) {
            m.delete(e);
          }
        });
        return i;
      };
      var g = (e) => {
        (e === N.Ac.Team
          ? resolveTeamContext().then((t) => preparePageGoods(e, t))
          : preparePageGoods(e)
        ).catch(() => undefined);
      };
      if (initialPageKind === N.Ac.Personal) {
        g(N.Ac.Personal);
        return ev(
          o._(a._({}, e), {
            initialPageKind,
            pageKindTabsTeamContextRequest: v(),
            resolveTeamContext,
            preparePageGoods,
          }),
        );
      }
      var b = false;
      resolveTeamContext()
        .then((initialTeamContext) => {
          if (!b) {
            g(N.Ac.Team);
            g(N.Ac.Personal);
            n = ev(
              o._(a._({}, e), {
                initialPageKind,
                initialTeamContext,
                resolveTeamContext,
                preparePageGoods,
              }),
            );
          }
        })
        .catch(() => undefined);
      return {
        close: () => {
          if (!b) {
            b = true;
            if (n) {
              n.close();
            } else if (onAfterClose != null) {
              onAfterClose();
            }
          }
        },
      };
    })(e, N.Ac.Personal);
  }
  return ((e) => {
    var t;
    var {
      containerService,
      defaultSubscriptionTab,
      enableTeamSubscriptionEntry,
      enableStandaloneCreditsPackPurchaseModal,
      forceTheme,
      onAfterClose,
      onPersonalPaymentSuccess,
      onSuccess,
      reportParam,
    } = e;
    var p = Lm(containerService);
    var m = null;
    var v = (e) => {
      if (t == null) {
        t = O({
          pageKind: N.Ac.Team,
          containerService,
          teamContext: e,
        }).catch((e) => {
          t = undefined;
          throw e;
        });
      }
      return t;
    };
    O({
      pageKind: N.Ac.Personal,
      containerService,
    }).catch(() => undefined);
    return eh(
      a._(
        {
          containerService,
          reportParam,
          vipPayManager: p,
          pageKind: N.Ac.Personal,
          contextViewId: _.u.VIP_MODAL,
          defaultSubscriptionTab,
          enableStandaloneCreditsPackPurchaseModal,
          forceTheme,
          onAfterClose,
          onPersonalPaymentSuccess,
          onBeforeClose: () => {
            if (m != null) {
              m.close();
            }
            m = null;
          },
        },
        enableTeamSubscriptionEntry === false
          ? {}
          : {
              onTeamSubscribeEntryResolved: (e) => {
                v(e).catch(() => undefined);
                try {
                  var t = h.cQ(containerService, w.o);
                  var i = h.cQ(containerService, j.s);
                  t.preFetchResourcePosition().catch(() => undefined);
                  i.preFetchResourcePosition().catch(() => undefined);
                } catch (e) {}
              },
              onOpenTeamSubscribe: (e) => {
                if (m != null) {
                  m.close();
                }
                var t;
                var teamGoodsRequest = v(e);
                m =
                  (t = ey(
                    {
                      containerService,
                      reportParam,
                      onSuccess,
                      purchaseSource: N.UA.TeamSubscribe,
                      teamContext: e,
                      enableSubscriptionPageKindTabs: false,
                      enableStandaloneCreditsPackPurchaseModal,
                      forceTheme,
                    },
                    {
                      isOpenedFromPersonalSubscribePage: true,
                      teamGoodsRequest,
                    },
                  )) != null
                    ? t
                    : null;
              },
            },
      ),
    );
  })(e);
};
export function XH(e) {
  return ((e) => {
    let t;
    const {
      containerService,
      reportParam,
      teamContext,
      onPaid,
      onSuccess,
      onRenewMembership,
    } = e;
    if (h.cQ(containerService, b.o).isOversea) {
      return null;
    }
    const u = Lm(containerService);
    const p = h.cQ(containerService, I.G);
    const v = M();
    let _ = false;
    let y = false;
    let f = false;
    let x = false;
    let P = false;
    let C = null;
    let S = null;
    u.updateProductScene(N.fq.Teams);
    u.updateReportParam(
      o._(a._({}, reportParam), {
        teamType: "team",
      }),
    );
    const A = u.onSuccess(() => {
      if (((e = u.orderInfo) == null ? undefined : e.orderId) && t) {
        var e;
        var i = t;
        try {
          if (onPaid != null) {
            onPaid();
          }
        } catch (error) {
          el.V.warn(
            "Failed to handle team seat upgrade onPaid callback:",
            error,
          );
        }
        n._(function* () {
          try {
            let e;
            let t;
            yield v({
              orderId:
                (e = (t = u.orderInfo) == null ? undefined : t.orderId) != null
                  ? e
                  : "",
              teamContext: i,
              subscribeTeamSpaceService: p,
              refreshTeamGoodsInfo: () => g.X3(m.p3(), containerService, i),
            });
          } catch (error) {
            el.V.warn(
              "Failed to sync team subscription after seat upgrade payment:",
              error,
            );
          }
          try {
            yield onSuccess == null ? undefined : onSuccess();
          } catch (error) {
            el.V.warn(
              "Failed to handle team seat upgrade onSuccess callback:",
              error,
            );
          }
        })();
      }
    });
    const k = () => {
      if (!x) {
        x = true;
        A.dispose();
        u.dispose();
      }
    };
    const j = () => {
      if (P) {
        P = false;
        u.reportPopup({
          action: "close_purchase_seats",
        });
      }
    };
    const w = () => {
      if (!y) {
        y = true;
        j();
        if (C != null) {
          C.close();
        }
        k();
      }
    };
    const close = () => {
      if (!_) {
        _ = true;
        w();
        if (S != null) {
          S.close();
        }
        S = null;
      }
    };
    const O = (e) => {
      if (!_) {
        t = e;
        u.updateReportParam(
          o._(a._({}, reportParam), {
            teamType: "team",
            teamId: e.currentTeamId,
          }),
        );
        if (
          !(C = ed.J({
            containerService,
            teamContext: e,
            vipPayManager: u,
            onRenewMembership: () => {
              if (!_ && !y) {
                f = true;
                w();
                if (!(S = onRenewMembership(e))) {
                  _ = true;
                }
              }
            },
            onClose: () => {
              j();
              C = null;
              y = true;
              if (!f) {
                _ = true;
              }
              k();
            },
          }))
        ) {
          return void close();
        }
        P = true;
        u.reportPopup({
          action: "show_purchase_seats",
        });
      }
    };
    if (teamContext) {
      O(teamContext);
    } else {
      F({
        getSubscribeTeamSpaceContext: () => p.getSubscribeTeamSpaceContext(),
        purchaseSource: N.UA.SeatUpgrade,
      })
        .then(O)
        .catch(() => {
          close();
        });
    }
    return {
      close,
    };
  })(
    o._(a._({}, e), {
      onRenewMembership: (t) =>
        Je({
          containerService: e.containerService,
          reportParam: e.reportParam,
          purchaseSource: N.UA.Renew,
          teamContext: t,
          onSuccess: e.onSuccess,
        }),
    }),
  );
}
