import n from "NY";
import i from "z8";
import "WJ";
import a from "gei";
import s from "cO";
import o from "bT";
import _c from "xb";
import _d from "bfR";
import p from "A6R";
import m from "p21";
import h from "bo";
import g from "wF";
import v from "M8X";
import b from "fg";
import _ from "ar";
import y from "ofP";
import f from "h4d";
import A from "zbK";
import { I } from "./module-dI5.js";
import { V as V_1 } from "./module-Kox.js";
import * as R from "./module-IY.js";
import k from "fGo";
import C from "CFa";
import T from "JZn";
import N from "MK";
import S from "gwv";
import P from "gLs";
import j from "pHz";
import M from "fPt";
import E from "Uf";
import { CX, KR, KW, qQ } from "./module-GM.js";
import { t as t_1 } from "./module-zP9.js";
import { t as t_2 } from "./module-ldK.js";
import $ from "./module-pO3.js";
import J from "./module-VS.js";
import Z from "./module-tO4.js";
const W =
  "data:image/png;base64,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";
const O = "qrcode-img-RgkPOV";
const D = "locked-mask-wfCGgT";
const L = "white-button-n8lsAz";
const z = "pay-png-GqQXEt";
const V = "err-text-kZAXI3";
const H = "closeBtn-GU86ZB";
const Q = "qrCodeModal-UG1rJa";
const K = "commerceModal-GJuUcv";
const U = (e) => {
  var {
    isLoading,
    isError,
    isAgree,
    isVipExpired,
    isOrderFailed,
    handleResetCode,
    handleAgree,
    errorMessage,
  } = e;
  var { isOversea } = g.h(P.o);
  var children = i.jsxs("div", {
    className: D,
    children: [
      i.jsx(R.a, {
        size: 0,
      }),
      i.jsx("div", {
        className: "loading-text-ODj2WB",
        children: N.Ay.t(
          "dre_m10n_sub_qr_refreshing_cn",
          {},
          "二维码获取中...",
        ),
      }),
    ],
  });
  if (isOrderFailed && !isLoading) {
    children = i.jsxs("div", {
      className: D,
      children: [
        i.jsx("div", {
          className: V,
          children: N.Ay.t("dre_m10n_sub_qr_expired_cn", {}, "二维码已失效"),
        }),
        i.jsx(I, {
          className: L,
          onClick: handleResetCode,
          text: N.Ay.t("dre_m10n_sub_qr_refresh_cn", {}, "刷新二维码"),
        }),
      ],
    });
  }
  if (isError && !isLoading) {
    children = i.jsxs("div", {
      className: D,
      children: [
        i.jsx("div", {
          className: V,
          children:
            errorMessage ||
            N.Ay.t("dre_m10n_sub_qr_refresh_fail_cn", {}, "二维码获取失败"),
        }),
        i.jsx(I, {
          className: L,
          onClick: handleResetCode,
          text: N.Ay.t("dre_m10n_sub_qr_request_again_cn", {}, "重新获取"),
        }),
      ],
    });
  }
  if (!isAgree) {
    children = i.jsxs("div", {
      className: D,
      children: [
        i.jsx("div", {
          className: "agreementF-dtN10a",
          children: "支付前请阅读",
        }),
        i.jsx("a", {
          href: s.m(y.y.COMMERCIAL_AGREEMENT(isOversea), null, {
            logType: "js.href/src",
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
              "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWQxbFh%bkpa$jJSc1kzaz$hMk50$m1oa$-yeDFX$k01-W1Je%1-%mFXRXBx$2xNNW$tTnR%WFpaTWpsMFkw-z$k$nB-TlRCam$%bHBaRmhP-0dKdFZuc*pl$*xxWWpJe*R*cFlTbXBo$jBaelR*aENhR1Z%T1dwa%1qRjNZakkx-kdKd$$ucE1NMFo1$EZkT2RscEhWWFpo$npWcldsa*5k$1JJ$*pSWldFcH$aRmhO%FE9PQ",
          }),
          className: "agreementS-WcGCl5",
          target: "_blank",
          rel: "noreferrer",
          children: N.Ay.t(
            "dre_m10n_subscription_page_business_service_agreement",
            {},
            "《“即梦”付费服务协议（含自动续费条款）》",
          ),
        }),
        i.jsx(I, {
          className: "agreement-button-yT8Id8",
          onClick: () => {
            handleAgree();
          },
          text: "同意并支付",
        }),
      ],
    });
  }
  if (isVipExpired) {
    children = i.jsxs("div", {
      className: D,
      children: [
        i.jsx(p.h5B, {
          className: "warn-icon-uJfT5x",
          size: 16,
        }),
        i.jsx("div", {
          className: "vip-text-vzPTWG",
          children: "会员已到期 无法充值积分",
        }),
      ],
    });
  }
  return i.jsx("div", {
    className: "mask-iREIr4",
    children,
  });
};
export var rg = (e) => {
  var r;
  var {
    payManager,
    hideWechatCode,
    hideAliPayCode,
    hideBytePayCode,
    scanHintPosition = "bottom",
    onAgree,
    onResetCode,
    getOrderErrorMessage,
  } = e;
  var { isLoading, coverUrl, isError, isAgree, isVipExpired, isOrderFailed } =
    m.F(payManager, (e) => ({
      isLoading: e.qrCodeLoading,
      coverUrl: e.qrCodeUrl,
      isError: e.orderError,
      isAgree: e.isAgreeAgreement,
      isVipExpired: e.isVipExpiredError,
      isOrderFailed: e.isOrderFailed,
    }));
  var [R, setR] = o.useState(false);
  var C =
    !isLoading && isAgree && !isError && !isVipExpired && !isOrderFailed && R;
  var T = (r = C ? coverUrl : W) != null ? r : W;
  o.useEffect(() => {
    setR(false);
  }, [coverUrl]);
  var S = i.jsxs("div", {
    className: _c(
      "pay-text-NRMzB7",
      scanHintPosition === "top" && "pay-text-top-_GPHfO",
    ),
    children: [
      N.Ay.t("web_team_credits_buy_scan_tip", {}, "请扫码完成支付"),
      hideAliPayCode
        ? null
        : i.jsx(V_1, {
            className: z,
            src: s.m(Z, null, {
              logType: "js.href/src",
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
                "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWQxbFh%bkpa$jJSc1kzaz$hMk50$m1oa$-yeDFX$k01-W1Je%1-%mFXRXBx$2xNNW$tTnR%WFpaTWpsMFkw-z$k$nB-TlRCam$%bHBaRmhP-0dKdFZuc*pl$*xxWWpJe*R*cFlTbXBo$jBaelR*aENhR1Z%T1dwa%1qRjNZakkx-kdKd$$ucE1NMFo1$EZkT2RscEhWWFpo$npWcldsa*5k$1JJ$*pSWldFcH$aRmhO%FE9PQ",
            }),
            alt: "zhifubao_cover_url",
            crossOrigin: "anonymous",
          }),
      hideWechatCode
        ? null
        : i.jsx(V_1, {
            className: z,
            src: s.m(J, null, {
              logType: "js.href/src",
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
                "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWQxbFh%bkpa$jJSc1kzaz$hMk50$m1oa$-yeDFX$k01-W1Je%1-%mFXRXBx$2xNNW$tTnR%WFpaTWpsMFkw-z$k$nB-TlRCam$%bHBaRmhP-0dKdFZuc*pl$*xxWWpJe*R*cFlTbXBo$jBaelR*aENhR1Z%T1dwa%1qRjNZakkx-kdKd$$ucE1NMFo1$EZkT2RscEhWWFpo$npWcldsa*5k$1JJ$*pSWldFcH$aRmhO%FE9PQ",
            }),
            alt: "wechat_cover_url",
            crossOrigin: "anonymous",
          }),
      hideBytePayCode
        ? null
        : i.jsx(V_1, {
            className: z,
            src: s.m($, null, {
              logType: "js.href/src",
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
                "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWQxbFh%bkpa$jJSc1kzaz$hMk50$m1oa$-yeDFX$k01-W1Je%1-%mFXRXBx$2xNNW$tTnR%WFpaTWpsMFkw-z$k$nB-TlRCam$%bHBaRmhP-0dKdFZuc*pl$*xxWWpJe*R*cFlTbXBo$jBaelR*aENhR1Z%T1dwa%1qRjNZakkx-kdKd$$ucE1NMFo1$EZkT2RscEhWWFpo$npWcldsa*5k$1JJ$*pSWldFcH$aRmhO%FE9PQ",
            }),
            alt: "douyin_cover_url",
            crossOrigin: "anonymous",
          }),
    ],
  });
  return i.jsxs("div", {
    className: "wrapper-w2cXjJ",
    children: [
      scanHintPosition === "top" ? S : null,
      i.jsx("div", {
        className: _c(
          "qrcode-wrapper-v393qV",
          C && "qrcodeNoBorder-NCCgUh",
          scanHintPosition === "top" &&
            "qrcode-wrapper-without-bottom-gap-UnL8md",
        ),
        children: i.jsxs("div", {
          style: {
            background: C ? "#fff" : "none",
          },
          className: "qrcode-w8a7nB",
          children: [
            i.jsx(V_1, {
              crossOrigin: "anonymous",
              onLoad: (e) =>
                n._(function* () {
                  try {
                    let r;
                    let t;
                    yield (t = e.target) == null || (r = t.decode) == null
                      ? undefined
                      : r.call(t);
                  } catch (e) {}
                  setR(true);
                })(),
              className: _c(
                O,
                "qrcode-img-top-gqpc99",
                !C && "qrcode-hide-7OvI4e",
              ),
              src: s.m(coverUrl, null, {
                logType: "js.href/src",
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
                  "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWQxbFh%bkpa$jJSc1kzaz$hMk50$m1oa$-yeDFX$k01-W1Je%1-%mFXRXBx$2xNNW$tTnR%WFpaTWpsMFkw-z$k$nB-TlRCam$%bHBaRmhP-0dKdFZuc*pl$*xxWWpJe*R*cFlTbXBo$jBaelR*aENhR1Z%T1dwa%1qRjNZakkx-kdKd$$ucE1NMFo1$EZkT2RscEhWWFpo$npWcldsa*5k$1JJ$*pSWldFcH$aRmhO%FE9PQ",
              }),
              alt: "qr_code_cover_url",
            }),
            !C &&
              i.jsx(V_1, {
                crossOrigin: "anonymous",
                className: O,
                src: s.m(T, null, {
                  logType: "js.href/src",
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
                    "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWQxbFh%bkpa$jJSc1kzaz$hMk50$m1oa$-yeDFX$k01-W1Je%1-%mFXRXBx$2xNNW$tTnR%WFpaTWpsMFkw-z$k$nB-TlRCam$%bHBaRmhP-0dKdFZuc*pl$*xxWWpJe*R*cFlTbXBo$jBaelR*aENhR1Z%T1dwa%1qRjNZakkx-kdKd$$ucE1NMFo1$EZkT2RscEhWWFpo$npWcldsa*5k$1JJ$*pSWldFcH$aRmhO%FE9PQ",
                }),
                alt: "qr_code_cover_url",
              }),
            !C &&
              i.jsx(U, {
                handleAgree: () => {
                  setR(false);
                  if (onAgree) {
                    return void onAgree();
                  }
                  var e = h.p3();
                  payManager.updateIsAgreeAgreement(e, true);
                },
                isAgree,
                isError,
                isLoading,
                handleResetCode: () => {
                  if (onResetCode) {
                    setR(false);
                    onResetCode(isError ? "order_error" : "expired");
                    return;
                  }
                  var e;
                  var r;
                  var n = h.p3();
                  payManager.setCurrentProduct(
                    n,
                    (e =
                      (r = payManager.currentProduct) == null
                        ? undefined
                        : r.productId) != null
                      ? e
                      : "",
                  );
                },
                isVipExpired,
                isOrderFailed,
                errorMessage:
                  getOrderErrorMessage == null
                    ? undefined
                    : getOrderErrorMessage(),
              }),
          ],
        }),
      }),
      scanHintPosition === "bottom" ? S : null,
    ],
  });
};
const useG = (e) => {
  var r;
  var {
    price,
    payManager,
    onAgree,
    onResetCode,
    getOrderErrorMessage,
    corporatePayment,
  } = e;
  var { isOversea } = g.h(P.o);
  var { hasLogin } = f.o();
  var [h, setH] = o.useState(false);
  var b =
    (r = payManager.currentProduct) &&
    "limitPayChannel" in r &&
    r.limitPayChannel
      ? r.limitPayChannel
      : ["alipay", "wx", "bytepay"];
  var hideWechatCode = !b.includes("wx");
  var hideAliPayCode = !b.includes("alipay");
  var hideBytePayCode = !b.includes("bytepay");
  var w = KW({
    sourceProduct:
      corporatePayment == null ? undefined : corporatePayment.sourceProduct,
    product: corporatePayment == null ? undefined : corporatePayment.product,
    hasLogin,
    isOversea,
  });
  return i.jsxs("div", {
    className: "qrCodeContainer-aBIj36",
    children: [
      i.jsxs("div", {
        className: "modalTitle-xgdWki",
        children: [
          "扫码支付",
          i.jsx("span", {
            children: _d(price, {
              symbol: "",
              precision: 2 * !!price.includes("."),
            }).format(),
          }),
          "元",
        ],
      }),
      !h &&
        i.jsx(rg, {
          hideAliPayCode,
          hideWechatCode,
          hideBytePayCode,
          payManager,
          scanHintPosition: w ? "top" : "bottom",
          onAgree,
          onResetCode,
          getOrderErrorMessage,
        }),
      w && corporatePayment
        ? i.jsx(KR, {
            payManager,
            product: corporatePayment.product,
            initTradeParams: corporatePayment.initTradeParams,
            orderManagementText: corporatePayment.orderManagementText,
            tracking: corporatePayment.tracking,
            reportContext: corporatePayment.reportContext,
            onEntryShow: corporatePayment.onEntryShow,
            onEntryClick: corporatePayment.onEntryClick,
            onEvent: corporatePayment.onEvent,
            onSuccess: corporatePayment.onSuccess,
            canStartPayment: corporatePayment.canStartPayment,
            onVisibilityChange: setH,
          })
        : i.jsx("div", {
            className: "agreementPrivacy-BiP_N_",
            children: i.jsx("a", {
              target: "_blank",
              rel: "noreferrer",
              href: s.m(y.y.COMMERCIAL_AGREEMENT(isOversea), null, {
                logType: "js.href/src",
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
                  "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWQxbFh%bkpa$jJSc1kzaz$hMk50$m1oa$-yeDFX$k01-W1Je%1-%mFXRXBx$2xNNW$tTnR%WFpaTWpsMFkw-z$k$nB-TlRCam$%bHBaRmhP-0dKdFZuc*pl$*xxWWpJe*R*cFlTbXBo$jBaelR*aENhR1Z%T1dwa%1qRjNZakkx-kdKd$$ucE1NMFo1$EZkT2RscEhWWFpo$npWcldsa*5k$1JJ$*pSWldFcH$aRmhO%FE9PQ",
              }),
              children: N.Ay.t(
                "dre_m10n_subscription_page_business_service_agreement",
                {},
                '《"即梦"付费服务协议（含自动续费条款）》',
              ),
            }),
          }),
    ],
  });
};
export var cp = (e) => {
  var r;
  var t;
  var {
    containerService,
    price,
    payManager,
    corporatePayment,
    onAgree,
    onResetCode,
    getOrderErrorMessage,
    onContinuePay,
    onReportClose,
    onAfterClose,
    forceTheme,
    closeWithSubscribeModal,
  } = e;
  var A = payManager.onSuccess(() => {
    if (t != null) {
      t.close();
    }
  });
  var x = closeWithSubscribeModal
    ? (r = T.c(containerService, C.u.VIP_MODAL)) == null
      ? undefined
      : r.onUnmount(() => {
          if (t == null) {
            return undefined;
          }
          return t.close();
        })
    : undefined;
  var w = false;
  return (t = a.A.confirm({
    wrapClassName: _c(
      Q,
      K,
      forceTheme === "light" && "lv-theme-force_light",
      forceTheme === "light" && "standaloneLightTheme-gJC6GO",
      forceTheme === "dark" && "lv-theme-force_dark",
      forceTheme === "dark" && "standaloneDarkTheme-x15Ds6",
    ),
    maskStyle: k.S(10),
    title: null,
    footer: null,
    simple: false,
    escToExit: false,
    afterClose: () => {
      A.dispose();
      if (x != null) {
        x.dispose();
      }
      var resourcePositionService;
      var r;
      var t =
        !!onContinuePay &&
        w &&
        !((r = payManager.orderResult) == null ? undefined : r.ok);
      w = false;
      if (onReportClose != null) {
        onReportClose();
      }
      payManager.disposeCurrentTask();
      if (t) {
        (resourcePositionService = v.cQ(containerService, j.w$))
          .getMaterialForShow()
          .then((material) => {
            var t;
            if (material && ((t = payManager.orderResult) == null || !t.ok)) {
              t_1({
                containerService,
                material,
                onShow: () => {
                  if (resourcePositionService.markShownInSession()) {
                    resourcePositionService.reportAction(j.Ty.Show);
                    t_2({
                      containerService,
                      resourcePositionService,
                      action: "show",
                    });
                  }
                },
                onClick: (clickButton) => {
                  resourcePositionService.reportAction(j.Ty.Click, {
                    clickButton,
                  });
                  t_2({
                    containerService,
                    resourcePositionService,
                    action:
                      clickButton === "main"
                        ? "click_to_vip_page"
                        : "close_button",
                  });
                },
              }).then((e) => {
                if (e === "continuePay") {
                  if (onContinuePay != null) {
                    onContinuePay();
                  }
                }
              });
            }
          });
      }
      if (onAfterClose != null) {
        onAfterClose();
      }
    },
    icon: null,
    closeIcon: i.jsx(p.CX2, {
      className: H,
      onClick: (e) => {
        if (e != null) {
          e.stopPropagation();
        }
        if (!w) {
          w = true;
          if (t != null) {
            t.close();
          }
        }
      },
    }),
    closable: true,
    maskClosable: false,
    content: i.jsx(g.Z, {
      instantiationService: containerService,
      children: i.jsx(useG, {
        price,
        payManager,
        corporatePayment,
        onAgree,
        onResetCode,
        getOrderErrorMessage,
      }),
    }),
  }));
};
export var lR = (e) => {
  var {
    containerService,
    price,
    payManager,
    productId,
    forceTheme,
    enablePaymentRetention = true,
  } = e;
  var o = h.p3();
  payManager.updateIsAgreeAgreement(o, false);
  payManager.setCurrentProduct(o, productId);
  return cp({
    containerService,
    price,
    payManager,
    forceTheme,
    closeWithSubscribeModal: !enablePaymentRetention,
    onReportClose: () => {
      payManager.reportPopup({
        action: "close_qr_code_modal",
      });
    },
    onContinuePay: enablePaymentRetention
      ? () =>
          lR({
            containerService,
            price,
            payManager,
            productId,
            forceTheme,
          })
      : undefined,
  });
};
export var i4 = (e) => {
  var {
    containerService,
    payManager,
    price,
    selectedSku,
    teamContext,
    tradeType,
    isCompensateTrade,
    extraOverrides,
    forceTheme,
  } = e;
  var d = h.p3();
  payManager.updateIsAgreeAgreement(d, false, false);
  var u = () => {
    var ctx = h.p3();
    payManager
      .updateIsAgreeAgreement(ctx, true, false)
      .then(() =>
        M.R({
          ctx,
          selectedSku,
          vipPayManager: payManager,
          input: {
            teamContext,
            tradeType,
            isCompensateTrade,
            extraOverrides,
          },
        }),
      )
      .catch(() => undefined);
  };
  payManager.updateProductScene(A.fq.Teams);
  payManager
    .setCurrentProduct(d, selectedSku.productId, false)
    .catch(() => undefined);
  var p = v.cQ(containerService, _.k);
  var initTradeParams = b.w(
    E.x({
      appId: Number(p.appId),
      selectedSku,
      teamContext,
      tradeType,
      isCompensateTrade,
      extraOverrides,
    }),
    true,
  );
  var g = (action) => {
    payManager.reportPopup({
      action,
      currentTabKey: "team",
      toProduct: selectedSku,
      extra: {
        sku: selectedSku.productId,
      },
    });
  };
  var y = cp({
    containerService,
    price,
    payManager,
    forceTheme,
    onReportClose: () => {
      payManager.reportPopup({
        action: "close_qr_code_modal",
      });
    },
    corporatePayment: {
      sourceProduct: selectedSku,
      product: {
        productId: selectedSku.productId,
        pmsTrade: selectedSku.pmsTrade,
      },
      initTradeParams,
      orderManagementText: CX.subscriptionPurchaseRecord,
      tracking: {
        source: teamContext.enterFrom,
        productType: selectedSku.priceType,
        orderAmount: selectedSku.totalAmount,
      },
      reportContext: {
        source: S.U0.Team,
        teamId: teamContext.currentTeamId,
        teamType: S.y3.Team,
        selectedProduct: S.pp(selectedSku),
        selectedProductName: selectedSku.productTips,
        orderAmount: selectedSku.totalAmount,
        productId: selectedSku.productId,
      },
      onEntryShow: () => g("show_corporate_transfer"),
      onEntryClick: () => g("click_corporate_transfer"),
      onSuccess: (e) => {
        payManager.completeExternalPayment(
          {
            orderId: e.orderId,
            payParams: "",
            codeImgUrl: "",
          },
          qQ(e),
        );
      },
    },
    onAgree: u,
    onResetCode: u,
  });
  payManager.registerPaymentPresentation(() => y.close());
  return y;
};
export var s8 = (e) => {
  var r;
  var {
    containerService,
    price,
    payManager,
    product,
    onCorporateTransferShow,
    onCorporateTransferClick,
  } = e;
  var d = h.p3();
  payManager.updateIsAgreeAgreement(d, false);
  payManager.setCurrentProduct(d, product.productId);
  payManager.onSuccess(() => {
    if (r != null) {
      r.close();
    }
  });
  return (r = a.A.confirm({
    wrapClassName: [Q, K],
    maskStyle: {
      backdropFilter: "blur(10px)",
      WebkitBackdropFilter: "blur(10px)",
    },
    title: null,
    footer: null,
    simple: false,
    escToExit: false,
    afterClose: () => {
      if (r != null) {
        r.close();
      }
      payManager.disposeCurrentTask();
    },
    icon: null,
    closeIcon: i.jsx(p.CX2, {
      className: H,
    }),
    closable: true,
    maskClosable: false,
    content: i.jsx(g.Z, {
      instantiationService: containerService,
      children: i.jsx(useG, {
        price,
        payManager,
        corporatePayment: {
          sourceProduct: product,
          product: {
            productId: product.productId,
            pmsTrade: product.pmsTrade,
            consumablesInfo: {
              consumablesType: "token",
              consumablesId: "token",
            },
          },
          orderManagementText: CX.developerOrderManagement,
          tracking: {
            productType: product.goodsType,
            orderAmount: product.amount,
          },
          reportContext: {
            source: S.U0.Api,
            teamType: S.y3.Personal,
            selectedProduct: S.Jw.Token,
            orderAmount: product.amount,
            productId: product.productId,
          },
          onEntryShow: onCorporateTransferShow,
          onEntryClick: onCorporateTransferClick,
          onSuccess: (e) => {
            payManager.completeExternalPayment(
              {
                orderId: e.orderId,
                payParams: "",
                goodsIdStr: product.goodsIdStr,
                goodsType: product.goodsType,
              },
              qQ(e),
            );
          },
        },
      }),
    }),
  }));
};
