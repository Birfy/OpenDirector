import n from "z8";
import "WJ";
import i from "gei";
import a from "cO";
import s from "bT";
import o from "VPK";
import c from "ppy";
import l from "bo";
import d from "wF";
import u from "Kt";
import p from "ofP";
import m from "MK";
import h from "gwv";
export var CX = {
  subscriptionPurchaseRecord: "订阅管理-购买记录",
  developerOrderManagement: "开发者平台-订单管理",
};
export function KW(e) {
  const { sourceProduct, product, hasLogin, isOversea, eligible = true } = e;
  return !!(
    eligible &&
    !isOversea &&
    hasLogin &&
    product &&
    typeof sourceProduct === "object" &&
    sourceProduct !== null &&
    sourceProduct.enableCorporatePayment === true
  );
}
export function qQ(e) {
  return {
    status: "success",
    payChannel: "corporate_payment",
    paymentMethod: "corporate_payment",
    realAmount: e.progress.payableAmount,
    expirationTime: 1000 * e.progress.closeTime,
    sysTime: Date.now(),
  };
}
export function KR(e) {
  const {
    payManager,
    product,
    initTradeParams,
    orderManagementText,
    tracking,
    reportContext,
    onEntryShow,
    onEntryClick,
    onEvent,
    onSuccess,
    onVisibilityChange,
    canStartPayment,
  } = e;
  const k = d.h(u._);
  const service = d.h(c.b_);
  const [visible, setVisible] = s.useState(false);
  const SRef = s.useRef();
  const PRef = s.useRef(false);
  const jRef = s.useRef(onEntryShow);
  jRef.current = onEntryShow;
  s.useEffect(() => {
    var e;
    if (SRef.current !== product.productId) {
      SRef.current = product.productId;
      if ((e = jRef.current) != null) {
        e.call(jRef);
      }
    }
  }, [product.productId]);
  const M = (e) => {
    setVisible(e);
    if (onVisibilityChange != null) {
      onVisibilityChange(e);
    }
  };
  const onOk = () => {
    if (!canStartPayment || canStartPayment()) {
      PRef.current = false;
      payManager.suspendCurrentTask();
      M(true);
    }
  };
  return n.jsxs(n.Fragment, {
    children: [
      n.jsxs("button", {
        type: "button",
        className: "entry-O4oZKP",
        onClick: () => {
          if (!canStartPayment || canStartPayment()) {
            if (onEntryClick != null) {
              onEntryClick();
            }
            i.A.confirm({
              title: "对公转账",
              content: n.jsxs("span", {
                children: [
                  "请先阅读并同意",
                  n.jsx("a", {
                    target: "_blank",
                    rel: "noreferrer",
                    href: a.m(p.y.COMMERCIAL_AGREEMENT(false), null, {
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
                        "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWQxbFh%bkpa$jJSc1kzaz$hMk50$m1oa$-yeDFX$k01-W1Je%1-%mFXRXBx$2xNNW$tTnR%WFpaTWpsMFkw-z$k$nB-TlRCam$%bHBaRmhP-0dKdFZuc*pl$*xxWWpJe*R*cFlTbXBo$jBaelR*aENhR1Z%T1dwa%1qRjNZakkx-kdKd$$ucE1Naz%yWTI1Q2RtTnRSakJh$Xp*M1dWaHNkRnB-TlRCT$-xWjFaRWhLTl$3eWJI$mFSM$kw$Ec1%2$t$khSbmxhTTFaNg",
                    }),
                    style: {
                      color: "var(--brand-main-default)",
                    },
                    children: m.Ay.t(
                      "dre_m10n_subscription_page_business_service_agreement",
                      {},
                      "《“即梦”付费服务协议（含自动续费条款）》",
                    ),
                  }),
                ],
              }),
              icon: null,
              maskClosable: false,
              okText: "同意并继续",
              cancelText: "取消",
              onOk,
            });
          }
        },
        children: [
          "我要对公转账",
          n.jsx("span", {
            "aria-hidden": "true",
            children: "›",
          }),
        ],
      }),
      n.jsxs("div", {
        className: "invoiceTips-to2SIs",
        children: [
          n.jsx("div", {
            children: "扫码支付可开个人、单位增值税「普通发票」",
          }),
          n.jsx("div", {
            children: "对公转账可开单位增值税「专用发票」",
          }),
        ],
      }),
      n.jsx(o.zr, {
        visible,
        product,
        initTradeParams,
        orderManagementText,
        phoneBinding: {
          service,
        },
        tracking,
        onEvent: (e) => {
          if (reportContext) {
            h.ZH(k, reportContext, e);
          }
          if (onEvent != null) {
            onEvent(e);
          }
        },
        onSuccess: (e) => {
          PRef.current = true;
          M(false);
          if (onSuccess != null) {
            onSuccess(e);
          }
        },
        onClose: () => {
          M(false);
          if (PRef.current) {
            PRef.current = false;
            return;
          }
          payManager.resumeCurrentTask(l.p3()).catch(() => undefined);
        },
      }),
    ],
  });
}
