import r from "NY";
import n from "bT";
import a from "Qey";
import o from "Ut";
import s from "bE";
import l from "IH";
import c from "MAm";
import d from "c6";
import u from "aX";
import h from "e3";
import m from "KV";
import g from "Y6";
import v from "yMd";
import _ from "CR";
import p from "kT";
import f from "AAv";
import b from "on";
import y from "bt";
import S from "nss";
import w from "z7R";
import D from "xm";
import C from "gu";
import T from "Yvt";
import R from "lj";
import k from "Kpt";
import N from "CQ";
import x from "M8X";
import P from "xi";
import M from "aEB";
import E from "HX";
import F from "Mvd";
import j from "Rt";
import W from "c5";
import $ from "kL";
import I from "pt";
import A from "jf";
const L = new Set([
  E.Du.Home,
  E.Du.ShortDrama,
  E.Du.Explore,
  E.Du.Asset,
  E.Du.Elements,
  E.Du.AIImage,
  E.Du.AIVideo,
  E.Du.AIAgent,
  E.Du.CanvasHome,
  E.Du.Tools,
]);
class O extends N.G {
  getPerPieceTaskCache() {
    return new Map(this._perPieceTaskCache);
  }
  getPerPieceTask(e) {
    return this._perPieceTaskCache.get(e);
  }
  dispose() {
    let e;
    let t;
    this._isDisposed = true;
    if ((e = this._commercialFeature) != null) {
      e.setLocateAgentHistoryRecord(undefined);
    }
    if ((t = this._commercialFeature) != null) {
      t.setVipRedeemOpenHandler(undefined);
    }
    this._commercialFeature = undefined;
    this._clearBenefitUpdateTimer();
    this._removeVisibilityChangeListener();
    super.dispose();
  }
  _executePhase(e, t) {
    if (t === "Completed") {
      this._whenCompleted();
    }
  }
  _whenCompleted() {
    return r
      ._(function* () {
        x.cQ(this._containerService, $.g);
        yield this._registerVipRedeemOpenHandler();
        this._registerAgentHistoryRecordLocator();
        yield this._registerTeamSubscribeSuccessHandler();
        yield this._registerCreditChangeListener();
        yield this._initializeTaskListeners();
        yield this._registerCreditInsufficientModalSwitchFreeModelConfig();
        this._registerBenefitUpdateInterval();
        this._registerVisibilityChangeListener();
        j.K(this._containerService);
        const e = x.cQ(this._containerService, R.K);
        const commerceTopBannerManager = x.cQ(this._containerService, l.h);
        try {
          if (yield commerceTopBannerManager.fetchTopBanner()) {
            e.registerConfig({
              [k.N.TopBanner]: [
                {
                  id: "commerce-top-banner",
                  order: 0,
                  content: () =>
                    n.createElement(c.B, {
                      commerceTopBannerManager,
                      isVisibleOnCurrentPage:
                        this._isCommerceTopBannerVisibleOnCurrentPage,
                    }),
                },
              ],
            });
          }
        } catch (error) {
          P.V.error("Failed to fetch commerce top banner:", error);
        }
      })
      .call(this);
  }
  _getCommercialFeature() {
    return r
      ._(function* () {
        try {
          const { IDreaminaCommercialFeatureLoaderService } = yield Promise.all(
            [
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
              require.e("weo"),
              require.e("msj"),
              require.e("u6"),
              require.e("snd"),
              require.e("en3k"),
              require.e("adh"),
              require.e("p3"),
              require.e("fjg"),
              require.e("qge"),
              require.e("4s"),
              require.e("z1t"),
              require.e("vn"),
              require.e("27r"),
              require.e("7s9"),
              require.e("wbo"),
              require.e("fce"),
              require.e("gj"),
              require.e("jm7"),
              require.e("z9"),
              require.e("tu"),
              require.e("x8p"),
              require.e("65w"),
              require.e("c3u"),
              require.e("isx"),
            ],
          ).then(require.bind(require, "XE9"));
          const t = x.cQ(
            this._containerService,
            IDreaminaCommercialFeatureLoaderService,
          );
          return yield t.getInstance();
        } catch (error) {
          P.V.error("Failed to get commercial feature:", error);
          throw error;
        }
      })
      .call(this);
  }
  _registerTeamSubscribeSuccessHandler() {
    return r
      ._(function* () {
        const e = yield this._getCommercialFeature();
        const t = x.cQ(this._containerService, s.c);
        const commercialTeamContextService = x.cQ(this._containerService, d.f);
        const n = x.cQ(this._containerService, R.K);
        e.setTeamSubscribeSuccessHandler((result) =>
          (function (e) {
            return r
              ._(function* (e) {
                const {
                  commercialTeamContextService,
                  navigateToTeamManagement,
                  navigateToTeamManagementAfterSwitch,
                  notifyTeamMembershipBuySuccess,
                  result,
                } = e;
                if (result.scene !== "seat_upgrade") {
                  if (!result.targetTeam) {
                    throw Error(
                      "Target team is unavailable after team subscription payment",
                    );
                  }
                  if (
                    commercialTeamContextService.currentTeamId !==
                    String(result.targetTeam.teamId)
                  ) {
                    if (
                      !(yield commercialTeamContextService.selectTeam(
                        result.targetTeam,
                      ))
                    ) {
                      throw Error("Failed to select the target team");
                    }
                    navigateToTeamManagementAfterSwitch(result.targetTeam);
                    return;
                  }
                  commercialTeamContextService.syncCurrentTeamInfo(
                    result.targetTeam,
                  );
                  navigateToTeamManagement();
                  notifyTeamMembershipBuySuccess();
                }
              })
              .apply(this, arguments);
          })({
            commercialTeamContextService,
            navigateToTeamManagement: () => {
              n.navigate(E.Du.TeamManagement);
            },
            navigateToTeamManagementAfterSwitch: (e) => {
              F.en(e, t.userProfile.uid, {
                toast: "membership-buy-success",
              });
            },
            notifyTeamMembershipBuySuccess: F.VK,
            result,
          }),
        );
      })
      .call(this);
  }
  _registerVipRedeemOpenHandler() {
    return r
      ._(function* () {
        try {
          const commercialFeature = yield this._getCommercialFeature();
          if (this._isDisposed) {
            return;
          }
          this._commercialFeature = commercialFeature;
          commercialFeature.setVipRedeemOpenHandler(() =>
            r
              ._(function* () {
                try {
                  const { openDreaminaRedeemModal } = yield Promise.all([
                    require.e("z9t"),
                    require.e("dmi"),
                    require.e("tj5a"),
                    require.e("lsa"),
                    require.e("uoi"),
                    require.e("e7a"),
                    require.e("72p"),
                    require.e("syx"),
                  ]).then(require.bind(require, "n8"));
                  yield openDreaminaRedeemModal({
                    containerService: this._containerService,
                    commercialFeature,
                  });
                } catch (error) {
                  P.V.error("Failed to open Dreamina redeem modal:", error);
                }
              })
              .call(this),
          );
        } catch (error) {
          P.V.error("Failed to register Dreamina redeem modal handler:", error);
        }
      })
      .call(this);
  }
  _registerAgentHistoryRecordLocator() {
    if (this._commercialFeature) {
      const e = x.cQ(this._containerService, R.K);
      const t = this._containerService.createInstance(I.P);
      this._commercialFeature.setLocateAgentHistoryRecord(
        (historyRecordId, n) =>
          r._(function* () {
            let r;
            const a = yield t.locateHistoryRecordList({
              direction: A._z.PageUp,
              hideStoryAgentResult: true,
              historyRecordId,
              mode: o.DAAIGCMode.creationAgent,
              nextCount: 10,
              preCount: 10,
            });
            if (
              !a.ok ||
              a.value.targetAgentConversationDeleted ||
              !a.value.list.some(
                (e) => u.e(e) && e.idModel.recordId === historyRecordId,
              )
            ) {
              throw Error("Agent history record is unavailable");
            }
            if (!(n == null || (r = n.onBeforeNavigate) == null)) {
              r.call(n);
            }
            e.navigate(E.Du.AIGeneratedRecord, {
              state: {
                from: "asset-locate-button",
                historyRecordId,
                mode: o.DAAIGCMode.creationAgent,
              },
            });
          })(),
      );
    }
  }
  _registerCreditChangeListener() {
    return r
      ._(function* () {
        try {
          const { commercialCreditService } =
            yield this._getCommercialFeature();
          commercialCreditService.onLocalCreditChange(
            this._handleCreditChange.bind(this),
          );
        } catch (error) {
          P.V.error("Failed to register credit change listener:", error);
          throw error;
        }
      })
      .call(this);
  }
  _handleCreditChange(e, t, i, r) {
    if (e === T.y.ADD && t === "REFUND") {
      try {
        const n = x.cQ(this._containerService, M.Ot);
        const o = this._perPieceTaskCache.get(r);
        const s = o && h.A(o) ? o : undefined;
        const l = s == null ? undefined : s.finishedImageCount;
        const num = s == null ? undefined : s.maxGenerateCount;
        if (
          typeof l === "number" &&
          Number.isSafeInteger(l) &&
          l >= 0 &&
          typeof num === "number" &&
          Number.isSafeInteger(num) &&
          num > 0 &&
          l < num
        ) {
          n.warning(
            a.Ay.t(
              "dreamina_image4_toast",
              {
                num,
              },
              "Credits refunded for the images that less than {num} copies",
            ),
          );
        } else {
          n.warning(
            a.Ay.t(
              "web_m10n_toast_use_failed_credits_return",
              {},
              "使用失败，积分已返还",
            ),
          );
        }
      } catch (error) {
        P.V.warn("Failed to show credit refund notification:", error);
      }
    }
  }
  _initializeTaskListeners() {
    return r
      ._(function* () {
        try {
          const { IContentGeneratorTaskFeatureLoaderService } = yield require
            .e("wk4")
            .then(require.bind(require, "mfk"));
          const t = x.cQ(
            this._containerService,
            IContentGeneratorTaskFeatureLoaderService,
          );
          const r = yield t.getInstance();
          const n = x.cQ(this._containerService, m.j);
          this._store.add(
            r.onAigcDataTaskCreated((e) => {
              this._cachePerPieceTask(e);
            }),
          );
          this._store.add(
            r.onAigcDataTaskRestored((e) => {
              this._cachePerPieceTask(e);
            }),
          );
          this._store.add(
            r.onAigcDataTaskRemoved((e) => {
              this._removePerPieceTask(e.uniqueKey);
            }),
          );
          this._store.add(
            r.onAigcDataTaskGeneratedFailed((e) => {
              this._handleAigcDataTaskGeneratedFailed(e);
            }),
          );
          this._store.add(
            n.registerDomainModelChangeListener({
              eventType: g.T.Update,
              modelType: g.$.AIGCData,
              callback: (e, t) => {
                if (this._perPieceTaskCache.has(e)) {
                  this._cachePerPieceTask(t);
                }
              },
            }),
          );
        } catch (error) {
          P.V.warn("Failed to initialize per-piece task listeners:", error);
        }
      })
      .call(this);
  }
  _cachePerPieceTask(e) {
    if (h.A(e) && this._isPerPieceModel(e)) {
      this._perPieceTaskCache.set(e.uniqueKey, e);
    }
  }
  _removePerPieceTask(e) {
    if (this._perPieceTaskCache.has(e)) {
      this._perPieceTaskCache.delete(e);
    }
  }
  _isPerPieceModel(e) {
    let t;
    let i;
    return (
      h.A(e) &&
      ((i = e.modelInfo) == null || (t = i.feats) == null
        ? undefined
        : t.includes(v.Si.PerPiece)) === true
    );
  }
  _handleAigcDataTaskGeneratedFailed(e) {
    if (
      e.statusModel.errorCode === _.Q.ErrCreditPreDeductNotEnough ||
      e.statusModel.errorCode === _.Q.ErrCreditPreDeductNotEnough1
    ) {
      this._forceUpdateBenefitStrategy();
    }
  }
  _registerBenefitUpdateInterval() {
    return r
      ._(function* () {
        try {
          this._clearBenefitUpdateTimer();
          const e = x.cQ(this._containerService, p.R);
          const t = yield e.getImcConfigByKey(
            f.r1.CommercialBenefitUpdateConfig,
          );
          if (!(t == null ? undefined : t.enable) || t.interval <= 0) {
            return;
          }
          const i = Date.now();
          const r = new Date();
          r.setHours(0, 0, 0, 0);
          const n = r.getTime() + 1000 * t.startTime;
          const a = 1000 * t.interval;
          let o = n;
          if (i >= n) {
            const s = Math.floor((i - n) / a) + 1;
            o = n + s * a;
          }
          const l = Math.max(0, o - i);
          this._benefitUpdateTimer = window.setTimeout(() => {
            this._forceUpdateBenefitStrategy();
            this._clearBenefitUpdateTimer();
            this._benefitUpdateInterval = window.setInterval(() => {
              this._forceUpdateBenefitStrategy();
            }, a);
          }, l);
        } catch (error) {
          P.V.error("Failed to register benefit update interval:", error);
        }
      })
      .call(this);
  }
  _forceUpdateBenefitStrategy() {
    return r
      ._(function* () {
        try {
          const e = yield this._getCommercialFeature();
          yield e.forceUpdateBenefitStrategy();
        } catch (error) {
          P.V.error("Failed to force update benefit strategy:", error);
        }
      })
      .call(this);
  }
  _clearBenefitUpdateTimer() {
    if (this._benefitUpdateTimer) {
      window.clearTimeout(this._benefitUpdateTimer);
      this._benefitUpdateTimer = undefined;
    }
    if (this._benefitUpdateInterval) {
      window.clearInterval(this._benefitUpdateInterval);
      this._benefitUpdateInterval = undefined;
    }
  }
  _registerVisibilityChangeListener() {
    this._visibilityChangeHandler = () => {
      if (document.visibilityState !== "visible") {
        this._clearBenefitUpdateTimer();
      }
    };
    document.addEventListener(
      "visibilitychange",
      this._visibilityChangeHandler,
    );
  }
  _removeVisibilityChangeListener() {
    if (this._visibilityChangeHandler) {
      document.removeEventListener(
        "visibilitychange",
        this._visibilityChangeHandler,
      );
      this._visibilityChangeHandler = undefined;
    }
  }
  _registerCreditInsufficientModalSwitchFreeModelConfig() {
    return r
      ._(function* () {
        const { commercialStrategyService } =
          yield this._getCommercialFeature();
        commercialStrategyService.registerCreditInsufficientModalSwitchFreeModelConfig(
          {
            shouldShowSwitchButton: (e) =>
              this._shouldShowSwitchFreeModelButton(e),
            text: a.Ay.t(
              "m10n_credits_insufficient_popup_btn1",
              {},
              "Switch model",
            ),
            onClick: (e) =>
              r
                ._(function* () {
                  if (e) {
                    const t = x.cQ(this._containerService, W.O);
                    const { imageGeneratorManager } = yield t.getInstance();
                    yield imageGeneratorManager.dataAdapter.switchToFreeModelBySceneOptions(
                      e,
                    );
                  }
                })
                .call(this),
          },
        );
      })
      .call(this);
  }
  _shouldShowSwitchFreeModelButton(e) {
    if (!e || !b.W(e) || !e.modelReqKey || y.Y.includes(e.scene)) {
      return false;
    }
    const t = x.cQ(this._containerService, S.Y).getInstanceSync();
    if (!t) {
      return false;
    }
    const data = t.imageModelConfigData.data;
    if (!(data == null ? undefined : data.ok)) {
      return false;
    }
    const { modelList } = data.value;
    if (modelList.length === 0) {
      return false;
    }
    const n = x.cQ(this._containerService, w.jV).getInstanceSync();
    if (!n) {
      return false;
    }
    const { commercialStrategyService } = n;
    for (const o of modelList) {
      if (this._hasFreeResolution(o, commercialStrategyService)) {
        return true;
      }
    }
    return false;
  }
  _hasFreeResolution(e, t) {
    return D.F(e, t, C.Sk.ImageBasicGenerate) !== null;
  }
  constructor(e) {
    super();
    this._containerService = e;
    this._name = "commercialization";
    this._perPieceTaskCache = new Map();
    this._visibilityChangeHandler = undefined;
    this._isDisposed = false;
    this._isCommerceTopBannerVisibleOnCurrentPage = () => {
      var e;
      var t;
      var i;
      var r = x.cQ(this._containerService, R.K);
      return (
        !!(
          (e = r.currentRoutePath
            ? (t = r.getRouteConfigByPath(r.currentRoutePath)) == null
              ? undefined
              : t.id
            : (i = r.currentKeepAliveData) == null
              ? undefined
              : i.routeId) !== undefined && L.has(e)
        ) && !!r.isSideMenuVisible
      );
    };
  }
}
export { O as c };
