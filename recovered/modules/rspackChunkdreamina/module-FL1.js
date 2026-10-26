import i from "NY";
import n from "oa";
import a from "bk";
import o from "bT";
import s from "p21";
import c from "wF";
import l from "Kt";
import d from "s1";
import u from "wb";
import p from "w3w";
import m from "MWC";
import h from "YY";
import v from "fE6";
import { m as m_1 } from "./module-zF1.js";
import { g as g_1 } from "./module-yyo_2.js";
import g from "vY4";
import b from "jt";
import f from "MK";
import x from "gjS";
import P from "NF";
import C from "gLs";
import S from "VN";
import { _6 } from "./module-vxf.js";
function useK(
  payManager,
  currentSubscribedProductId,
  forceTheme,
  enableStandaloneCreditsPackPurchaseModal,
  I,
) {
  const { enablePaymentRetention = true } =
    arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};
  const w = c.h(S._);
  const containerService = c.h(l._);
  const M = c.h(d._l);
  const R = c.h(C.o);
  const { vipInfo, isVip } = s.F(w, (e) => ({
    vipInfo: e.vipInfo,
    isVip: e.isVip,
  }));
  const { isOversea } = R;
  const [loadingProductId, setLoadingProductId] = o.useState();
  const WRef = o.useRef();
  const BRef = o.useRef(true);
  o.useEffect(() => {
    BRef.current = true;
    return () => {
      BRef.current = false;
    };
  }, []);
  return {
    handlePurchase: o.useCallback(
      (o) =>
        i._(function* () {
          let s;
          let c;
          let l;
          const {
            productId,
            priceType,
            disablePurchase,
            skuId,
            pmsTrade,
            currencyCode,
            currencyTips,
            priceTips,
            canLowPriceTrial,
            lowPriceTrialInfo,
            changeType,
          } = o;
          const isFreeItem = o.level === "";
          if (!WRef.current && BRef.current) {
            const K = () => {
              if (changeType === "UPGRADE") {
                return "upgrade";
              }
              return "subchange";
            };
            const Z = _6({
              goodsInfo: o,
              userInfo: vipInfo,
              isFreeItem,
              currentSubscribedProductId,
            });
            s = vipInfo == null ? undefined : vipInfo.currentAutoRenewPlan;
            c = Z === "ManageSubscription";
            const X =
              g_1(s == null ? undefined : s.payChannel) &&
              priceType === "auto" &&
              !c;
            const G =
              isOversea &&
              m_1(payManager) &&
              g_1(payManager.currentChannel) &&
              priceType === "auto" &&
              Z === "Upgrade";
            const Q = (e) => b.jV(e.cause);
            const J = (t) => {
              var r = {
                action: "vip_pay_fail",
                toProduct: o,
              };
              var logId = Q(t);
              if (m_1(payManager)) {
                payManager.reportPopup(
                  a._(n._({}, r), {
                    errorCode: t.code,
                    errorMessage: t.msg,
                    errorStage: "pre_create",
                    logId,
                  }),
                );
              } else {
                payManager.reportPopup(
                  a._(n._({}, r), {
                    extra: {
                      errorCode: t.code,
                      errorMessage: t.msg,
                      errorStage: "pre_create",
                      logId,
                    },
                  }),
                );
              }
            };
            const Y = () =>
              i._(function* () {
                if (!G) {
                  return true;
                }
                const t = yield M.getPreCreateInfo({
                  pid: productId,
                  scene: "vip",
                  skuId,
                  pmsTrade,
                });
                if (t.ok) {
                  l = t;
                  return true;
                }
                m.p.warning(f.Ay.t(t.msg, {}, t.msg));
                if (m_1(payManager)) {
                  payManager.reportPopup({
                    action: "cross_channel_block",
                    toProduct: o,
                    errorCode: t.code,
                    errorMessage: t.msg,
                    errorStage: "pre_create",
                    logId: Q(t),
                  });
                }
                return false;
              })();
            if (!isOversea && X) {
              P.ex(containerService, {
                action: "show",
                changeType: K(),
                currentPlan: P.P8(vipInfo),
                changePlan: P.ML(o),
                userSubscribeType: P.st(vipInfo),
                currentPage: P.PC,
              });
              p.w.confirm({
                icon: null,
                title: f.Ay.t(
                  "web_dre_m10n_management_page_auto_renew_cancel_fail_title",
                  {},
                  "温馨提示",
                ),
                content: f.Ay.t(
                  "dm_app_subs_cross_end_desc",
                  {},
                  "您的IOS设备存在一笔生效中订阅，为避免重复扣费，请先前往APPstore中取消该订阅",
                ),
                okText: f.Ay.t(
                  "web_dre_m10n_management_page_auto_renew_cancel_fail_button",
                  {},
                  "我知道了",
                ),
                footer: (e, t) => t,
                onOk: () => {
                  P.ex(containerService, {
                    action: "click_confirm",
                    changeType: K(),
                    currentPlan: P.P8(vipInfo),
                    changePlan: P.ML(o),
                    userSubscribeType: P.st(vipInfo),
                    currentPage: P.PC,
                  });
                },
                onCancel: () => {
                  P.ex(containerService, {
                    action: "cancel",
                    changeType: K(),
                    currentPlan: P.P8(vipInfo),
                    changePlan: P.ML(o),
                    userSubscribeType: P.st(vipInfo),
                    currentPage: P.PC,
                  });
                },
              });
              return;
            }
            if (!disablePurchase || Z === "ManageSubscription") {
              const ee =
                vipInfo == null ? undefined : vipInfo.currentAutoRenewPlan;
              WRef.current = productId;
              setLoadingProductId(productId);
              try {
                switch (true) {
                  case !isVip || (isVip && !ee && priceType === "auto"):
                    if (!isVip) {
                      yield i._(function* () {
                        if ((yield Y()) && BRef.current) {
                          const t = u.X(
                            currencyCode,
                            currencyTips,
                            lowPriceTrialInfo == null
                              ? undefined
                              : lowPriceTrialInfo.trialPrice,
                            true,
                          );
                          yield v.p({
                            enablePaymentRetention,
                            containerService,
                            payManager,
                            price: canLowPriceTrial ? t : priceTips,
                            productId,
                            forceTheme,
                          });
                          payManager.reportPopup({
                            action: "vip_pay",
                            toProduct: o,
                          });
                        }
                      })();
                      break;
                    }
                    const et = yield M.getPreCreateInfo({
                      pid: productId,
                      scene: "vip",
                      skuId,
                      pmsTrade,
                    });
                    if (!BRef.current) {
                      return;
                    }
                    if (!et.ok) {
                      return void J(et);
                    }
                    yield h.X({
                      isPresentationActive: () => BRef.current,
                      enablePaymentRetention,
                      payManager,
                      containerService,
                      forceTheme,
                      enableStandaloneCreditsPackPurchaseModal,
                      preCreateRes: et.value,
                      toProductId: productId,
                      currentSubscribedProductId,
                      reportParam: {
                        source: "multi_vip_popup_click_subscribe",
                      },
                    });
                    payManager.reportPopup({
                      action: "vip_pay",
                      toProduct: o,
                    });
                    break;
                  case ["CurrentPlan", "ManageSubscription"].includes(Z):
                    g.d({
                      containerService,
                      scope: "personal",
                      reportParam: {
                        source: x.ok.MultiVipPopupManagePlan,
                      },
                      forceTheme,
                    });
                    payManager.reportPopup({
                      action: "click_current_plan",
                      toProduct: o,
                    });
                    break;
                  case Z === "SwitchFree":
                    if ((yield I()) === false) {
                      break;
                    }
                    payManager.reportPopup({
                      action: "cancel_subscribe",
                      toProduct: o,
                    });
                    break;
                  case ["SubscribeTo", "Upgrade", "Purchase"].includes(Z):
                    if (!(yield Y())) {
                      break;
                    }
                    const er =
                      l != null
                        ? l
                        : yield M.getPreCreateInfo({
                            pid: productId,
                            scene: "vip",
                            skuId,
                            pmsTrade,
                          });
                    if (!BRef.current) {
                      return;
                    }
                    if (!er.ok) {
                      return void J(er);
                    }
                    yield h.X({
                      isPresentationActive: () => BRef.current,
                      enablePaymentRetention,
                      payManager,
                      containerService,
                      forceTheme,
                      enableStandaloneCreditsPackPurchaseModal,
                      preCreateRes: er.value,
                      toProductId: productId,
                      currentSubscribedProductId,
                      reportParam: {
                        source: "multi_vip_popup_click_subscribe",
                      },
                    });
                    payManager.reportPopup({
                      action: "vip_pay",
                      toProduct: o,
                    });
                }
              } finally {
                WRef.current = undefined;
                setLoadingProductId(undefined);
              }
            }
          }
        })(),
      [
        vipInfo,
        isVip,
        isOversea,
        containerService,
        M,
        payManager,
        currentSubscribedProductId,
        forceTheme,
        enableStandaloneCreditsPackPurchaseModal,
        I,
        enablePaymentRetention,
      ],
    ),
    loadingProductId,
  };
}
export { useK as k };
