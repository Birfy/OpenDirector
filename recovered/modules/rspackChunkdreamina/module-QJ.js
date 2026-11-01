import n from "z8";
import i from "bT";
import a from "SJ";
import _s from "xb";
import c from "p21";
import l from "VPK";
import d from "bo";
import u from "wF";
import p from "SC";
import m from "SI";
import h from "CFa";
import g from "JZn";
import v from "E0B";
import b from "E8";
import _ from "ex6";
import y from "MK";
import f from "Iv";
import A from "jh7";
import x from "hr";
import w from "cJ";
import j from "oa";
import M from "bk";
import E from "ofP";
import F from "fPt";
import I from "gLs";
import B from "cO";
import W from "./module-pO3.js";
import $ from "./module-VS.js";
import J from "./module-tO4.js";
import D from "hx3";
const R = "creditText-n_dhlL";
const className = "pointsUnit-h1hwSw";
function C(e) {
  return {
    compensationExtraCreditAmount: y.Ay.t(
      "web_team_membership_grant_credits_label",
      {},
      "购买后本月发放积分",
    ),
    compensationPayAmount: y.Ay.t(
      "web_team_membership_pay_difference_label",
      {},
      "需要支付差价",
    ),
  }[e];
}
function T(e) {
  return e != null && e !== "";
}
function N(e, r) {
  let t;
  if ((t = e.summaryRows.find((e) => e.key === r)) == null) {
    return undefined;
  }
  return t.value;
}
function S(seat_count) {
  return y.Ay.t(
    "web_team_seats_buy_count",
    {
      seat_count,
    },
    "{seat_count}席位",
  );
}
function P() {
  return y.Ay.t("web_team_seats_select_title", {}, "选择席位数量");
}
const Z = ["alipay", "wx", "bytepay"];
const O = [
  {
    channel: "alipay",
    key: "alipay",
    ariaLabel: "支付宝",
    iconUrl: J,
  },
  {
    channel: "wx",
    key: "wechatpay",
    ariaLabel: "微信支付",
    iconUrl: $,
  },
  {
    channel: "bytepay",
    key: "bytepay",
    ariaLabel: "抖音支付",
    iconUrl: W,
  },
];
const classes = {
  CommerceQuantityCheckoutModal_currentQuantityLabel: R,
  CommerceQuantityCheckoutModal_currentQuantityValue: R,
  CommerceQuantityCheckoutModal_summaryRows: "pointsPaymentContainer-k_KtPQ",
  CommerceQuantityCheckoutModal_summaryRow: "pointsSection-W5EM6D",
  CommerceQuantityCheckoutModal_summaryLabel: "sectionTitle-VPyE0U",
  CommerceQuantityCheckoutModal_summaryValue: "summaryValue-hDZCai",
  CommerceQuantityCheckoutModal_notice: "notice-fhORzC",
};
function useZ(e) {
  const {
    visible,
    forceTheme,
    showCurrentCredit = true,
    prices,
    teamContext,
    vipPayManager,
    status = "ready",
    onRetry,
    onRenewMembership,
    onCancel,
  } = e;
  const J = p.ny(teamContext.currentTeamVipLevel)
    ? y.Ay.t(
        "web_dreamina_teams_add_seats",
        {
          string0: m.Qk(teamContext.currentTeamVipLevel),
        },
        "购买{string0}席位",
      )
    : y.Ay.t("web_team_seats_buy_title", {}, "购买席位");
  const ref = i.useCallback(
    (e) => {
      var r;
      if (!(e == null || (r = e.closest('[role="dialog"]')) == null)) {
        r.setAttribute("aria-label", J);
      }
    },
    [J],
  );
  const V = u.h(A.r3);
  const H = u.h(f.sG);
  const { effectiveIsActive, effectiveVipLevel } = c.F(V, (e) => ({
    effectiveIsActive: e.effective.isActive,
    effectiveVipLevel: e.effective.vipLevel,
  }));
  const U = c.F(H, (e) => e.teamTotalCredit);
  const XRef = i.useRef(() => undefined);
  const onConfirm = i.useCallback(
    (toProduct) => {
      vipPayManager.reportPopup({
        action: "click_purchase_seats_pay",
        toProduct,
        extra: {
          sku: toProduct.productId,
          payAmount: toProduct.totalAmount,
          payCurrency: toProduct.currencyCode,
        },
      });
      XRef.current(toProduct);
    },
    [vipPayManager],
  );
  const Y = v.l({
    prices,
    teamContext,
    onConfirm,
  });
  const selectedUpgradeSku = Y.model.selectedUpgradeSku;
  const canPurchase = !!(
    Y.model.quantity &&
    !Y.model.disabled &&
    selectedUpgradeSku &&
    !selectedUpgradeSku.disablePurchase
  );
  const { hasGeneratedQRCode, payment, requestQRCode } = ((e) => {
    const {
      vipPayManager,
      teamContext,
      selectedUpgradeSku,
      canPurchase,
      onPaySuccess,
    } = e;
    const { isOversea } = u.h(I.o);
    const p =
      selectedUpgradeSku == null ? undefined : selectedUpgradeSku.productId;
    const [m, setM] = i.useState();
    const [hasGeneratedQRCode_1, setHasGeneratedQRCode] = i.useState(false);
    const b = m == null ? undefined : m.productId;
    const {
      qrCodeUrl,
      qrCodeLoading,
      orderError,
      orderId,
      isOrderFailed,
      currentProduct,
    } = c.F(vipPayManager, (e) => {
      var r;
      return {
        qrCodeUrl: e.qrCodeUrl,
        qrCodeLoading: e.qrCodeLoading,
        orderError: e.orderError,
        orderId: (r = e.orderInfo) == null ? undefined : r.orderId,
        isOrderFailed: e.isOrderFailed,
        currentProduct: e.currentProduct,
      };
    });
    const requestQRCode_1 = i.useCallback(
      (selectedSku) => {
        if (canPurchase && selectedSku && !selectedSku.disablePurchase) {
          setM({
            productId: selectedSku.productId,
            previousOrderId: orderId,
          });
          var ctx = d.p3();
          vipPayManager
            .updateIsAgreeAgreement(ctx, true, false)
            .then(() =>
              F.R({
                ctx,
                selectedSku,
                vipPayManager,
                input: {
                  teamContext,
                  isCompensateTrade: true,
                },
              }),
            )
            .catch(() => {
              setM((r) => {
                if (
                  (r == null ? undefined : r.productId) ===
                  selectedSku.productId
                ) {
                  return undefined;
                }
                return r;
              });
            });
        }
      },
      [canPurchase, orderId, teamContext, vipPayManager],
    );
    const CRef = i.useRef(selectedUpgradeSku);
    i.useEffect(() => {
      CRef.current = selectedUpgradeSku;
    }, [selectedUpgradeSku]);
    i.useEffect(() => {
      var e = vipPayManager.onSuccess(() => {
        onPaySuccess();
      });
      return () => e.dispose();
    }, [onPaySuccess, vipPayManager]);
    const qrCodeStatus = i.useMemo(() => {
      var e = b === p;
      var r =
        (currentProduct == null ? undefined : currentProduct.productId) === p;
      if (e) {
        if (!r || qrCodeLoading) {
          return "loading";
        }
        if (orderError || isOrderFailed) {
          return "failed";
        }
        if (
          orderId &&
          orderId !== (m == null ? undefined : m.previousOrderId) &&
          qrCodeUrl
        ) {
          return "ready";
        }
        return "loading";
      }
      return "idle";
    }, [
      currentProduct == null ? undefined : currentProduct.productId,
      isOrderFailed,
      orderError,
      orderId,
      qrCodeLoading,
      m == null ? undefined : m.previousOrderId,
      qrCodeUrl,
      b,
      p,
    ]);
    i.useEffect(() => {
      if (qrCodeStatus === "ready") {
        setHasGeneratedQRCode(true);
      }
    }, [qrCodeStatus]);
    return {
      hasGeneratedQRCode: hasGeneratedQRCode_1,
      payment: i.useMemo(() => {
        if (canPurchase) {
          var e;
          var r;
          var t;
          var i = {
            agreementText: "支付前请阅读",
            agreementHref: E.y.COMMERCIAL_AGREEMENT(isOversea),
            agreementLinkText: y.Ay.t(
              "dre_m10n_subscription_page_business_service_agreement",
              {},
              "《“即梦”付费服务协议（含自动续费条款）》",
            ),
          };
          return M._(
            j._(
              {
                qrCodeUrl: qrCodeStatus === "ready" ? qrCodeUrl : undefined,
                qrCodeStatus,
                qrImageAlt: "qr_code_cover_url",
                qrLoadingText: y.Ay.t(
                  "dre_m10n_sub_qr_refreshing_cn",
                  {},
                  "二维码获取中...",
                ),
                qrErrorText: isOrderFailed
                  ? y.Ay.t("dre_m10n_sub_qr_expired_cn", {}, "二维码已失效")
                  : y.Ay.t(
                      "dre_m10n_sub_qr_refresh_fail_cn",
                      {},
                      "二维码获取失败",
                    ),
                qrReloadText: isOrderFailed
                  ? y.Ay.t("dre_m10n_sub_qr_refresh_cn", {}, "刷新二维码")
                  : y.Ay.t("dre_m10n_sub_qr_request_again_cn", {}, "重新获取"),
                scanHint: "请扫码完成支付",
              },
              i,
            ),
            {
              showPaymentAgreement: true,
              paymentMethods:
                ((r =
                  (e =
                    (t =
                      selectedUpgradeSku == null
                        ? undefined
                        : selectedUpgradeSku.limitPayChannel) != null
                      ? t
                      : currentProduct == null
                        ? undefined
                        : currentProduct.limitPayChannel) != null
                    ? e
                    : [...Z]),
                O.filter((e) => r.includes(e.channel)).map((e) => ({
                  key: e.key,
                  ariaLabel: e.ariaLabel,
                  icon: n.jsx("img", {
                    src: B.m(e.iconUrl, null, {
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
                        "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWQxbFh%bkpa$jJSc1kzaz$hMk50$m1oa$-yeDFX$k01-W1Je%1-%mFXRXBx$2xNNW$tTnR%WFpaTWpsMFkw-z$k$nB-TlRCam$%bHBaRmhP-0dKdFZuc*pl$*xxWWpJe*R*cFlTbXBo$jBaelR*aENhR1Z%T1dwa%1qRjNZakkx-kdKd$$ucE1NMD$2WWpOamRH%nRiS*RN$np*MldrZEdjMHd5$*5aa$dFSjJZbTFXZFdSS$R-WmtSM$pvWWxNe*$scFhSakJN$0ZaM1dqTkthRnBI$lhSWk1taHNX$EowZ*1SW$$-%mlWemxy$1ZkM2RtTkhSalZp$jFaM$pFTXhkRnBZ$W05a%1sSjZ%Rz$TZW1WSFJub*FNM$o2",
                    }),
                    alt: "",
                    crossOrigin: "anonymous",
                  }),
                }))),
              onReloadQrCode: () => requestQRCode_1(CRef.current),
            },
          );
        }
      }, [
        canPurchase,
        currentProduct == null ? undefined : currentProduct.limitPayChannel,
        isOrderFailed,
        isOversea,
        qrCodeStatus,
        qrCodeUrl,
        requestQRCode_1,
        selectedUpgradeSku == null
          ? undefined
          : selectedUpgradeSku.limitPayChannel,
      ]),
      requestQRCode: requestQRCode_1,
    };
  })({
    vipPayManager,
    teamContext,
    selectedUpgradeSku,
    canPurchase,
    onPaySuccess: onCancel,
  });
  i.useEffect(() => {
    XRef.current = requestQRCode;
  }, [requestQRCode]);
  const ei = i.useCallback(
    (e) => {
      if (hasGeneratedQRCode) {
        requestQRCode(e);
      }
    },
    [hasGeneratedQRCode, requestQRCode],
  );
  const ea = i.useMemo(() => {
    var e;
    return ((e, r, t) => {
      if (e.quantity) {
        const { quantity } = e;
        return {
          label: P(),
          value: quantity.value,
          options: quantity.options.map((e) => ({
            value: e.memberLimit,
            label: S(e.memberLimit - r),
          })),
          readOnly: quantity.readOnly,
          onChange: (r, i) => {
            var a;
            var s = quantity.options.find((e) => e.memberLimit === i.value);
            if (s) {
              if ((a = e.onQuantityChange) != null) {
                a.call(e, s);
              }
              if (t != null) {
                t(s.sku);
              }
            }
          },
        };
      }
    })(Y.model, (e = teamContext.currentTeamMemberLimit) != null ? e : 0, ei);
  }, [ei, Y.model, teamContext.currentTeamMemberLimit]);
  const es = i.useMemo(
    () =>
      ((e) => {
        const r = N(e, "compensationExtraCreditAmount");
        const t = N(e, "compensationPayAmount");
        if (T(r) && T(t)) {
          return [
            {
              key: "compensationExtraCreditAmount",
              label: C("compensationExtraCreditAmount"),
              value: ((e) => {
                let r;
                let amount_1;
                let i;
                r = String(e);
                const { prefix, amount, suffix } =
                  (i = (amount_1 = y.Ay.t(
                    "web_team_seats_buy_grant_credits_unit",
                    {
                      grant_credits: r,
                    },
                    "{grant_credits} /席位",
                  )).indexOf(r)) < 0
                    ? {
                        prefix: "",
                        amount: amount_1,
                        suffix: "",
                      }
                    : {
                        prefix: amount_1.slice(0, i),
                        amount: r,
                        suffix: amount_1.slice(i + r.length),
                      };
                return n.jsxs("span", {
                  className: "pointsValueWrapper-kavXXU",
                  children: [
                    n.jsx(w.D, {
                      className: "pointsIcon-AeBRnd",
                      width: 12,
                      height: 12,
                    }),
                    prefix
                      ? n.jsx("span", {
                          className,
                          children: prefix,
                        })
                      : null,
                    n.jsx("span", {
                      className: "pointsAmount-OGCCkM",
                      children: amount,
                    }),
                    suffix
                      ? n.jsx("span", {
                          className,
                          children: suffix,
                        })
                      : null,
                  ],
                });
              })(r),
            },
            {
              key: "compensationPayAmount",
              label: C("compensationPayAmount"),
              value: n.jsx("span", {
                className: "priceValueWrapper-D52M31",
                children: n.jsx("span", {
                  className: "priceAmount-DHxvqW",
                  children: t,
                }),
              }),
            },
          ];
        }
      })(Y.model),
    [Y.model],
  );
  const eo = i.useMemo(() => {
    var e;
    var r;
    r = (e = teamContext.currentTeamMemberLimit) != null ? e : 0;
    return {
      label: P(),
      value: r,
      options: [
        {
          value: r,
          label: S(r),
          disabled: true,
        },
      ],
      readOnly: true,
      disabled: true,
    };
  }, [teamContext]);
  const quantity = ea != null ? ea : eo;
  const el = i.useMemo(() => {
    var e;
    return {
      label: y.Ay.t("web_team_credits_buy_remaining_label", {}, "剩余积分"),
      value:
        ((e = U != null ? U : 0),
        n.jsxs("span", {
          className: "teamCreditBalanceValueWrapper-eZiehc",
          children: [
            n.jsx(w.D, {
              width: 12,
              height: 12,
            }),
            n.jsx("span", {
              children: e,
            }),
          ],
        })),
    };
  }, [U]);
  const summaryRows = i.useMemo(() => {
    if (status === "ready" && ea) {
      return es;
    }
  }, [ea, es, status]);
  const teamContext_teamName = teamContext.teamName;
  const title = n.jsxs("span", {
    className: "teamSpaceContainer-uvu12Z",
    children: [
      n.jsx("span", {
        className: "teamSpaceTitle-1sTnK5",
        children: teamContext_teamName,
      }),
      effectiveIsActive
        ? n.jsx(_.z, {
            className: "vipIcon-W6Q8Ij",
            size: 16,
            level: effectiveVipLevel,
          })
        : null,
    ],
  });
  return n.jsx(l.MN, {
    className: _s(
      "modal-wDmeVR",
      forceTheme === "light" && [
        "lv-theme-force_light",
        D.A.standaloneLightTheme,
      ],
      forceTheme === "dark" && ["lv-theme-force_dark", D.A.standaloneDarkTheme],
    ),
    visible,
    status,
    title: n.jsx("span", {
      ref,
      children: J,
    }),
    profile: {
      avatarSlot: n.jsx(l._V, {
        size: "100%",
        teamName: teamContext_teamName,
        avatarColor: teamContext.avatarColor,
      }),
      title,
      subtitle: ((e) => {
        let r;
        const t = ((e) => {
          if (e !== undefined && e !== "") {
            const r = Number(e);
            if (Number.isFinite(r)) {
              return x.i("yyyy.MM.dd", 1000 * r);
            }
            return e;
          }
        })((r = e.currentTeamVipExpireTime) != null ? r : e.expireTime);
        if (t) {
          if (p.ny(e.currentTeamVipLevel)) {
            return y.Ay.t(
              "web_dreamina_teams_expire_date",
              {
                string0: m.Qk(e.currentTeamVipLevel),
                string1: t,
              },
              "{string0}将于{string1}过期",
            );
          }
          return y.Ay.t(
            "web_team_space_membership_expire_tip",
            {
              expire_date: t,
            },
            "会员将于 {expire_date} 到期",
          );
        }
      })(teamContext),
      metaSlot: n.jsx("button", {
        className: "membershipRenewButton-iEMG1q",
        type: "button",
        onClick: onRenewMembership,
        children: y.Ay.t(
          "web_teams_subscription_status_hover_renew_btn",
          {},
          "续费会员",
        ),
      }),
    },
    currentQuantity: showCurrentCredit ? el : undefined,
    quantity,
    summaryRows,
    classes,
    payment,
    confirmText: y.Ay.t("web_team_payment_agreement_btn", {}, "同意并支付"),
    confirmDisabled: !canPurchase,
    confirmLoading: status === "loading",
    errorMessage: y.Ay.t(
      "web_new_result_toast_neterror_retry",
      {},
      "网络异常，请重试",
    ),
    retryText: y.Ay.t("subject_panel_retry", {}, "重试"),
    onCancel,
    onConfirm: Y.model.onConfirm,
    onRetry,
    noticeSlot: y.Ay.t(
      "web_team_seat_purchase_prorated_tip",
      {},
      "温馨提示：当前购买席位价格及可获得的积分数量已按照团队会员剩余生效时长折算。",
    ),
  });
}
function useV(e) {
  const {
    visible,
    forceTheme,
    showCurrentCredit,
    containerService,
    teamContext,
    vipPayManager,
    onRenewMembership,
    onCancel,
  } = e;
  const [p, setP] = i.useState("loading");
  const [prices, setH] = i.useState([]);
  const vRef = i.useRef(0);
  const onRetry = i.useCallback(() => {
    var e = vRef.current + 1;
    vRef.current = e;
    setP("loading");
    setH([]);
    b.HJ(d.p3(), containerService, teamContext)
      .then((r) => {
        if (vRef.current === e) {
          setH(r);
          setP("success");
        }
      })
      .catch(() => {
        if (vRef.current === e) {
          setP("error");
        }
      });
  }, [containerService, teamContext]);
  i.useEffect(() => {
    onRetry();
  }, [onRetry]);
  i.useEffect(
    () => () => {
      vRef.current += 1;
    },
    [],
  );
  let status = "ready";
  if (p === "loading") {
    status = "loading";
  } else if (p === "error") {
    status = "error";
  }
  return n.jsx(useZ, {
    visible,
    prices,
    forceTheme,
    showCurrentCredit,
    teamContext,
    vipPayManager,
    status,
    onRetry,
    onRenewMembership,
    onCancel,
  });
}
function H(e) {
  const {
    forceTheme,
    showCurrentCredit,
    containerService,
    teamContext,
    vipPayManager,
    onRenewMembership,
    onClose,
  } = e;
  if (typeof document === "undefined") {
    return null;
  }
  const d = document.createElement("div");
  document.body.appendChild(d);
  const p = a.H(d);
  const m = g.Y(containerService, h.u.TEAM_SEAT_UPGRADE_CHECKOUT_MODAL);
  let visible = true;
  let b = false;
  let _ = () => undefined;
  const y = () => {
    p.unmount();
    d.remove();
    m.unmount();
    if (onClose != null) {
      onClose();
    }
  };
  function f() {
    if (!b) {
      b = true;
      visible = false;
      _();
      setTimeout(y, 0);
    }
  }
  (_ = () => {
    p.render(
      n.jsx(u.Z, {
        instantiationService: containerService,
        children: n.jsx(useV, {
          visible,
          forceTheme,
          showCurrentCredit,
          containerService,
          teamContext,
          vipPayManager,
          onRenewMembership,
          onCancel: f,
        }),
      }),
    );
  })();
  m.onUnmount(() => {
    f();
  });
  return {
    close: f,
  };
}
export { H as J };
