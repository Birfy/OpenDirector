import n from "z8";
import "EX";
import "WJ";
import t from "tK";
import a from "gei";
import o from "bT";
import _l from "xb";
import c from "Kt";
import u from "wF";
import d from "yw";
import m from "A6R";
import p from "fGo";
import { m as m_1 } from "./module-XY.js";
import g from "MK";
import _ from "gLs";
import h from "gjS";
import b from "Vy9";
import y from "oa";
import f from "bk";
import M from "p21";
import T from "SC";
import N from "SI";
import x from "hr";
import I from "dI5";
import { D as D_1 } from "./module-pm_2.js";
import * as A from "./module-svX.js";
import * as C from "./module-ex6.js";
import k from "jh7";
import w from "VN";
import * as z from "./module-jdi.js";
import R from "NY";
import O from "qfb";
import "HZH";
import "M2c";
import "Vgx";
import L from "I7V";
import F from "k7J";
import W from "WyQ";
import U from "EC";
import V from "Z2";
import Z from "qVb";
import B from "gwv";
import $ from "WIi";
const D = {
  title: "title-jB4vXT",
  defaultContent: "defaultContent-izsnCJ",
  desc: "desc-qwv39y",
  planCard: "planCard-je7Yuw",
  planItem: "planItem-BsmXlL",
  top: "top-xqVsEb",
  vipIcon: "vipIcon-kdb1Yu",
  levelName: "levelName-wc9wwc",
  infoTitle: "infoTitle-bxHSTs",
  infoValue: "infoValue-Y8UdUt",
  planItemSingle: "planItemSingle-LsQZiQ",
  left: "left-MpKfTV",
  right: "right-OK8DUK",
  membershipValidityInfoIcon: "membershipValidityInfoIcon-JpTGlm",
  autoRenewalCard: "autoRenewalCard-KXN22T",
  flexBox: "flexBox-VdCqaZ",
  bigTitle: "bigTitle-DY3kPs",
  bigBtn: "bigBtn-GXwmiV",
  infoList: "infoList-w7AeEa",
  smallTitle: "smallTitle-EfPaDw",
  info: "info-J4ItVy",
  text: "text-wqntkB",
  renewalPrice: "renewalPrice-JbjLZJ",
  originalPrice: "originalPrice-abGv7Y",
  copyIcon: "copyIcon-PGfmfI",
};
function S(e) {
  if (!(!Number.isSafeInteger(e) || Number(e) <= 0)) {
    return (Number(e) / 100).toFixed(2).replace(/\.00$/, "");
  }
}
function E(e) {
  const { agreementFen, billingFen, formattedPrice, isOversea } = e;
  if (isOversea) {
    return n.jsx("span", {
      children: formattedPrice || "-",
    });
  }
  const o = S(agreementFen);
  const l = S(billingFen);
  const s =
    o &&
    l &&
    billingFen !== undefined &&
    agreementFen !== undefined &&
    billingFen > agreementFen;
  if (o) {
    return n.jsxs("span", {
      className: D.renewalPrice,
      children: [
        n.jsxs("span", {
          children: ["￥", o],
        }),
        s
          ? n.jsx("span", {
              className: D.originalPrice,
              children: l,
            })
          : null,
      ],
    });
  }
  return n.jsx("span", {
    children: "-",
  });
}
function useP(e) {
  let r;
  let i;
  const { scope, forceTheme, reportParam, onClose, onViewSubscriptionPlans } =
    e;
  const p = u.h(w._);
  const v = u.h(k.r3);
  const b = u.h(_.o);
  const {
    vipLevels,
    currentAutoRenewPlan,
    isVipExpired,
    currentVipLevel,
    curVipLevelTips,
  } =
    M.F(p, (e) => {
      var r;
      var i;
      var n;
      return {
        vipLevels: ((r = e.vipInfo) == null ? undefined : r.vipLevels) || [],
        isVipExpired: e.isVipExpired,
        currentAutoRenewPlan:
          (i = e.vipInfo) == null ? undefined : i.currentAutoRenewPlan,
        currentVipLevel: e.currentVipLevel,
        curVipLevelTips:
          (n = e.vipInfo) == null ? undefined : n.curVipLevelTips,
      };
    }) || {};
  const { isTeamMode, teamMembership } =
    M.F(v, (e) => ({
      isTeamMode: e.snapshot.isTeamMode,
      teamMembership: e.snapshot.team,
    })) || {};
  const Z = scope ? scope === "team" : isTeamMode;
  const { source, subPage } = reportParam || {};
  const subscribeId =
    currentAutoRenewPlan == null ? undefined : currentAutoRenewPlan.subscribeId;
  const b_isOversea = b.isOversea;
  const { refreshSignPrice, signPrice } = ((e) => {
    let r;
    const { enabled, reportParam, subscribeId } = e;
    const containerService = u.h(c._);
    const l = u.h(O.Q);
    const sRef = o.useRef(0);
    const [d, setD] = o.useState({
      isLoaded: false,
    });
    const p = d.subscribeId === subscribeId;
    const v = p ? d.signPrice : undefined;
    const refreshSignPrice_1 = o.useCallback(
      function () {
        const e =
          !(arguments.length > 0) || arguments[0] === undefined || arguments[0];
        return R._(function* () {
          const r = ++sRef.current;
          if (e) {
            setD({
              isLoaded: false,
              subscribeId,
            });
          }
          if (!enabled || !subscribeId) {
            if (r === sRef.current) {
              setD({
                isLoaded: true,
                subscribeId,
              });
            }
            return;
          }
          const signPrice_1 = yield l
            .getSignInfo(subscribeId)
            .catch(() => undefined);
          if (r === sRef.current) {
            setD({
              isLoaded: true,
              signPrice: signPrice_1,
              subscribeId,
            });
          }
        })();
      },
      [enabled, subscribeId, l],
    );
    o.useEffect(() => {
      refreshSignPrice_1();
      return () => {
        sRef.current += 1;
      };
    }, [refreshSignPrice_1]);
    ((e) => {
      const { containerService, isSignInfoLoaded, productId, source, subPage } =
        e;
      const lRef = o.useRef(false);
      o.useEffect(() => {
        if (isSignInfoLoaded && !lRef.current) {
          lRef.current = true;
          h.zH(containerService, {
            action: "show",
            currentPage: "manage",
            currentTab: "manage_plans",
            productId,
            source,
            subPage,
          });
        }
      }, [containerService, isSignInfoLoaded, productId, source, subPage]);
    })({
      containerService,
      isSignInfoLoaded: p && d.isLoaded,
      productId: (r = v == null ? undefined : v.productId) != null ? r : "",
      source: reportParam.source,
      subPage: reportParam.subPage,
    });
    return {
      refreshSignPrice: refreshSignPrice_1,
      signPrice: v,
    };
  })({
    enabled: !b_isOversea,
    reportParam,
    subscribeId,
  });
  const details = o.useMemo(() => {
    var e;
    var r;
    return D_1(
      (r = teamMembership.teamInfo) == null || (e = r.subscriptionInfo) == null
        ? undefined
        : e.vipDetail,
    );
  }, [
    (i = teamMembership.teamInfo) == null || (r = i.subscriptionInfo) == null
      ? undefined
      : r.vipDetail,
  ]);
  const K = Z && teamMembership.status !== k.lz.Expired;
  const q = o.useMemo(() => {
    try {
      return vipLevels.map((e) => {
        var r =
          currentAutoRenewPlan &&
          (currentAutoRenewPlan == null
            ? undefined
            : currentAutoRenewPlan.level) === e.level;
        var i = e.level === currentVipLevel;
        var title = isVipExpired
          ? g.Ay.t(
              "web_dre_m10n_management_page_expired_date",
              {},
              "Expired time",
            )
          : r
            ? i
              ? g.Ay.t(
                  "web_dre_m10n_management_page_next_billing_date",
                  {},
                  "Renew on",
                )
              : g.Ay.t(
                  "web_dre_m10n_management_page_starting_from_date",
                  {},
                  "Starts on",
                )
            : g.Ay.t(
                "web_dre_m10n_management_page_plan_ends_date",
                {},
                "Expired on",
              );
        var endTime = r
          ? i
            ? x.i(
                "yyyy-MM-dd hh:mm",
                1000 * currentAutoRenewPlan.nextRenewalTime,
              )
            : x.i("yyyy-MM-dd hh:mm", 1000 * e.beginTime)
          : x.i("yyyy-MM-dd hh:mm", 1000 * e.endTime);
        return f._(y._({}, e), {
          title,
          levelName: ""
            .concat(
              N.DZ({
                level: e.level,
              }),
            )
            .concat(
              i && curVipLevelTips ? "（".concat(curVipLevelTips, "）") : "",
            ),
          endTime,
          inactive: isVipExpired,
        });
      });
    } catch (e) {
      return [];
    }
  }, [
    vipLevels,
    currentAutoRenewPlan,
    currentVipLevel,
    isVipExpired,
    curVipLevelTips,
  ]);
  const G = o.useMemo(() => {
    if (!Z) {
      return [];
    }
    var e;
    var r;
    var i =
      (teamMembership == null ? undefined : teamMembership.status) ===
      k.lz.Active;
    var n = teamMembership == null ? undefined : teamMembership.vipLevel;
    var t =
      i &&
      (e = T.IM(
        teamMembership == null || (r = teamMembership.teamInfo) == null
          ? undefined
          : r.subscriptionInfo,
      )) != null
        ? e
        : teamMembership == null
          ? undefined
          : teamMembership.expireTime;
    return [
      {
        level: i && T.ny(n) ? n : "teams",
        title: i
          ? g.Ay.t(
              "web_dre_m10n_management_page_plan_ends_date",
              {},
              "Expired on",
            )
          : g.Ay.t(
              "web_dre_m10n_management_page_expired_date",
              {},
              "Expired time",
            ),
        levelName:
          i && T.ny(n)
            ? N.Qk(n)
            : g.Ay.t("web_team_membership", {}, "Team membership"),
        endTime: t ? x.i("yyyy-MM-dd hh:mm", 1000 * t) : "--",
        inactive: !i,
      },
    ];
  }, [Z, teamMembership]);
  const ee = Z ? G : q;
  const er = o.useMemo(() => {
    try {
      if (
        !(currentAutoRenewPlan == null
          ? undefined
          : currentAutoRenewPlan.subscribeId)
      ) {
        return;
      }
      return {
        levelName: ""
          .concat(
            N.JI({
              level: currentAutoRenewPlan.level,
            }),
          )
          .concat(curVipLevelTips ? "（".concat(curVipLevelTips, "）") : ""),
        infoList: [
          {
            title: g.Ay.t(
              "web_dre_m10n_management_page_auto_renew_subscription_type",
              {},
              "Subscription Methods",
            ),
            value:
              currentAutoRenewPlan.cycle === 12
                ? g.Ay.t(
                    "web_dre_m10n_management_page_auto_renew_subscription_type_yearly",
                    {},
                    "YEARLY",
                  )
                : currentAutoRenewPlan.cycle === 3
                  ? g.Ay.t(
                      "web_dre_m10n_management_page_auto_renew_subscription_type_quarterly",
                      {},
                      "QUARTERLY",
                    )
                  : g.Ay.t(
                      "web_dre_m10n_management_page_auto_renew_subscription_type_monthly",
                      {},
                      "MONTHLY",
                    ),
          },
          {
            title: g.Ay.t(
              "web_dre_m10n_management_page_auto_renew_amount",
              {},
              "Price",
            ),
            value: n.jsx(E, {
              agreementFen:
                signPrice == null ? undefined : signPrice.agreementFen,
              billingFen: signPrice == null ? undefined : signPrice.billingFen,
              formattedPrice: currentAutoRenewPlan.nextRenewalFee,
              isOversea: b_isOversea,
            }),
          },
          {
            title: g.Ay.t(
              "web_dre_m10n_management_page_auto_renew_billing_date",
              {},
              "Next billing time",
            ),
            value: x.i(
              "yyyy-MM-dd hh:mm",
              1000 * currentAutoRenewPlan.nextRenewalTime,
            ),
          },
          {
            title: g.Ay.t(
              "web_dre_m10n_management_page_auto_renew_payment_method",
              {},
              "Payment method",
            ),
            value: ((e) => {
              switch (e) {
                case "ALI":
                  return "支付宝";
                case "WX":
                  return "微信支付";
                case "HZ":
                  return "抖音支付";
                case "APPLE_IAP_PAY":
                  return "App Store";
                default:
                  return e;
              }
            })(currentAutoRenewPlan.payChannel),
          },
        ],
      };
    } catch (e) {
      return;
    }
  }, [currentAutoRenewPlan, curVipLevelTips, b_isOversea, signPrice]);
  const onAwardSuccess = o.useCallback(
    () => refreshSignPrice(false),
    [refreshSignPrice],
  );
  const flow = z.d({
    forceTheme,
    onAwardSuccess,
    signInfo: signPrice,
    reportParam: {
      currentTab: "manage_plans",
      source,
      subPage,
    },
  });
  const et = (e) => {
    var { title, desc, btnText, onClick } = e;
    return n.jsxs("div", {
      className: D.defaultContent,
      children: [
        n.jsx("div", {
          className: D.title,
          children: title,
        }),
        desc &&
          n.jsx("div", {
            className: D.desc,
            children: desc,
          }),
        btnText &&
          n.jsx(I.I, {
            onClick,
            text: btnText,
            type: "tertiary",
          }),
      ],
    });
  };
  return n.jsxs(n.Fragment, {
    children: [
      n.jsxs("div", {
        className: D.container,
        children: [
          n.jsx("div", {
            className: D.title,
            children: g.Ay.t(
              "web_dre_m10n_management_page_membership",
              {},
              "My plans",
            ),
          }),
          ee.length
            ? n.jsx("div", {
                className: D.planCard,
                children:
                  ee.length > 1
                    ? ee.map((e, r) =>
                        n.jsxs(
                          "div",
                          {
                            className: D.planItem,
                            children: [
                              n.jsxs("div", {
                                className: D.top,
                                children: [
                                  n.jsx(C.z, {
                                    className: D.vipIcon,
                                    inactive: e.inactive,
                                    size: 16,
                                    level: e.level,
                                  }),
                                  n.jsx("div", {
                                    className: D.levelName,
                                    children: e.levelName,
                                  }),
                                ],
                              }),
                              n.jsx("div", {
                                className: D.infoTitle,
                                children: e.title,
                              }),
                              n.jsx("div", {
                                className: D.infoValue,
                                children: e.endTime,
                              }),
                            ],
                          },
                          r,
                        ),
                      )
                    : ee.map((e, r) =>
                        n.jsxs(
                          "div",
                          {
                            className: D.planItemSingle,
                            children: [
                              n.jsxs("div", {
                                className: D.left,
                                children: [
                                  n.jsx(C.z, {
                                    inactive: e.inactive,
                                    className: D.vipIcon,
                                    size: 16,
                                    level: e.level,
                                  }),
                                  n.jsx("div", {
                                    className: D.levelName,
                                    children: e.levelName,
                                  }),
                                ],
                              }),
                              n.jsxs("div", {
                                className: D.right,
                                children: [
                                  n.jsx("div", {
                                    className: D.infoTitle,
                                    children: e.title,
                                  }),
                                  n.jsxs("div", {
                                    className: D.infoValue,
                                    children: [
                                      K
                                        ? n.jsx(A.q, {
                                            details,
                                            children: n.jsx(m.HNP, {
                                              className:
                                                D.membershipValidityInfoIcon,
                                              size: 16,
                                            }),
                                          })
                                        : null,
                                      n.jsx("span", {
                                        children: e.endTime,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          },
                          r,
                        ),
                      ),
              })
            : et({
                title:
                  scope === "personal"
                    ? g.Ay.t(
                        "web_dre_m10n_management_page_plan_empty",
                        {},
                        "暂无个人订阅记录",
                      )
                    : "",
              }),
          n.jsx("div", {
            className: D.title,
            style: {
              marginTop: "8px",
            },
            children: g.Ay.t(
              "dre_m10n_management_page_auto_renew",
              {},
              "Auto renewal",
            ),
          }),
          Z
            ? et({
                title: g.Ay.t(
                  "web_dre_m10n_management_page_auto_renew_null",
                  {},
                  "You don't have an auto-renewal program yet",
                ),
              })
            : er
              ? n.jsxs("div", {
                  className: D.autoRenewalCard,
                  children: [
                    n.jsxs("div", {
                      className: D.flexBox,
                      children: [
                        n.jsx("div", {
                          className: D.bigTitle,
                          children: er.levelName,
                        }),
                        n.jsx(I.I, {
                          type: "tertiary",
                          text: g.Ay.t(
                            "web_dre_m10n_management_page_auto_renew_cancel",
                            {},
                            "Cancel auto-renewal",
                          ),
                          className: D.bigBtn,
                          onClick: () => void flow.start(),
                          loading: flow.isPreparing,
                          disabled: flow.isActive,
                        }),
                      ],
                    }),
                    n.jsx("div", {
                      className: D.infoList,
                      children: er.infoList.map((e, r) =>
                        n.jsxs(
                          "div",
                          {
                            className: D.flexBox,
                            children: [
                              n.jsx("div", {
                                className: D.smallTitle,
                                children: e.title,
                              }),
                              n.jsx("div", {
                                className: D.info,
                                children: n.jsx("div", {
                                  className: D.text,
                                  children: e.value,
                                }),
                              }),
                            ],
                          },
                          r,
                        ),
                      ),
                    }),
                  ],
                })
              : et({
                  title: g.Ay.t(
                    "web_dre_m10n_management_page_auto_renew_null",
                    {},
                    "You don't have an auto-renewal program yet",
                  ),
                  btnText:
                    scope === "personal" &&
                    isTeamMode &&
                    !onViewSubscriptionPlans
                      ? undefined
                      : g.Ay.t(
                          "web_dre_m10n_management_page_auto_renew_see_more",
                          {},
                          "View subscription plans",
                        ),
                  onClick: () => {
                    onClose();
                    if (onViewSubscriptionPlans != null) {
                      onViewSubscriptionPlans();
                    }
                  },
                }),
        ],
      }),
      n.jsx(z.S, {
        flow,
      }),
    ],
  });
}
const J = "container-CiXVDA";
const Q = "flex-box-R7df_R";
const H = "init-spin-YxUlCJ";
const Y = "spin-w_mVqo";
const X = {
  INIT: "待补款",
  PROCESSING: "待补款",
  SUCCESS: "已支付",
  SHIPPED: "已支付",
  CLOSED: "订单取消",
};
function useK(e) {
  const { reportParam, scope } = e;
  const t = u.h(c._);
  const a = u.h($.G);
  const { isOversea } = u.h(_.o);
  const [s] = o.useState(() => t.createInstance(Z.c));
  const pRef = o.useRef();
  const vRef = o.useRef();
  const bRef = o.useRef(false);
  const [T, setT] = o.useState("loading");
  const { loading, hasMore, recordList } =
    M.F(s, (e) => ({
      loading: e.loading,
      hasMore: e.hasMore,
      recordList: e.recordList || [],
    })) || {};
  const [ref, k] = U.A(undefined, {
    rootMargin: "0px 0px 100px 0px",
  });
  const w = o.useMemo(() => {
    try {
      return recordList.map((e) => {
        var r = [];
        if (e.subscriptionMethods) {
          r.push({
            title: g.Ay.t(
              "web_dre_m10n_management_page_tab_order_history_subscription_type",
              {},
              "Plan",
            ),
            value: e.subscriptionMethods,
          });
        }
        var { title } = e;
        return {
          title,
          orderId: e.orderId,
          corporateTransfer: {
            productLevel: B.G9(e.productLevel),
            selectedProduct:
              e.purchaseType === "credit"
                ? B.Jw.Credit
                : B.pp({
                    priceType: e.subscribeType === "auto" ? "auto" : "un-auto",
                    cycleUnit: e.cycleUnit,
                    subscribeCycle: e.subscribeCycle,
                  }),
            selectedProductName: title,
            orderAmount: e.orderAmount,
          },
          infoList: [
            ...r,
            ...(e.price
              ? [
                  {
                    title: g.Ay.t(
                      "web_dre_m10n_management_page_tab_order_history_price",
                      {},
                      "Price",
                    ),
                    value: e.price,
                  },
                ]
              : []),
            {
              title: g.Ay.t(
                "web_dre_m10n_management_page_tab_order_history_date",
                {},
                "Date of purchase",
              ),
              value: e.purchaseDate,
            },
            {
              title: g.Ay.t(
                "web_dre_m10n_management_page_tab_order_history_order_no",
                {},
                "Order number",
              ),
              value: e.orderId,
              iconType: "copy",
            },
            {
              title: g.Ay.t(
                "web_dre_m10n_management_page_tab_order_history_payment_method",
                {},
                "Payment method",
              ),
              value: e.paymentMethod,
            },
            ...(!isOversea
              ? [
                  {
                    title:
                      e.payChannel === "corporate_payment"
                        ? "订单状态"
                        : "退款状态",
                    value:
                      e.payChannel === "corporate_payment"
                        ? (e.orderStatus && X[e.orderStatus]) || "-"
                        : N.uI(e.refundStatus),
                    tooltip: e.statusTooltip,
                    canViewOrder:
                      e.payChannel === "corporate_payment" &&
                      (e.orderStatus === "INIT" ||
                        e.orderStatus === "PROCESSING"),
                  },
                ]
              : []),
          ].map((e) =>
            f._(y._({}, e), {
              value: String(e.value) || "-",
            }),
          ),
        };
      });
    } catch (e) {
      return [];
    }
  }, [recordList, isOversea]);
  o.useEffect(
    () => () => {
      var e;
      if ((e = pRef.current) == null) {
        return undefined;
      }
      return e.call(pRef);
    },
    [],
  );
  o.useEffect(() => {
    var e = false;
    bRef.current = false;
    vRef.current = undefined;
    setT("loading");
    var r = (e) => {
      vRef.current = e;
      bRef.current = true;
      setT("ready");
      s.loadOrderRecordList(e);
    };
    (scope === "personal"
      ? Promise.resolve(undefined)
      : a.getSubscribeTeamSpaceContext()
    )
      .then((n) => {
        var t;
        if (!e) {
          if (
            scope === "team" &&
            ((n == null ? undefined : n.currentSpaceType) !== "team" ||
              !((t = n.currentTeamId) == null ? undefined : t.trim()))
          ) {
            return void setT("unavailable");
          }
          r(n);
        }
      })
      .catch(() => {
        if (!e) {
          if (scope === "team") {
            return void setT("unavailable");
          }
          r();
        }
      });
    return () => {
      e = true;
    };
  }, [s, a, scope]);
  o.useEffect(() => {
    if (k && bRef.current) {
      s.loadOrderRecordList(vRef.current);
    }
  }, [k, s]);
  const D = (e) => {
    var { title, desc } = e;
    return n.jsxs("div", {
      className: "default-content-Pjert5",
      children: [
        n.jsx("div", {
          className: "title-BsxgRc",
          children: title,
        }),
        desc &&
          n.jsx("div", {
            className: "desc-HHgKvA",
            children: desc,
          }),
      ],
    });
  };
  if (T !== "ready") {
    return n.jsx("div", {
      className: J,
      children:
        T === "loading"
          ? n.jsx("div", {
              className: H,
              children: n.jsx(F.A, {
                className: Y,
                size: 24,
              }),
            })
          : D({
              title: g.Ay.t(
                "web_canva_loading_failed_please_try_again",
                {},
                "加载失败，请重试",
              ),
            }),
    });
  }
  return n.jsxs("div", {
    className: J,
    children: [
      loading && !w.length
        ? n.jsx("div", {
            className: H,
            children: n.jsx(F.A, {
              className: Y,
              size: 24,
            }),
          })
        : null,
      loading || w.length
        ? null
        : D({
            title: g.Ay.t(
              "web_dre_m10n_management_page_tab_order_history_null",
              {},
              "You don't have an payment record yet",
            ),
          }),
      w.length
        ? w.map((e) =>
            ((e) => {
              var { title, orderId, infoList } = e;
              return n.jsxs(
                "div",
                {
                  className: "record-card-hDZVVx",
                  children: [
                    n.jsx("div", {
                      className: Q,
                      children: n.jsx("div", {
                        className: "big-title-qlyRJQ",
                        children: title,
                      }),
                    }),
                    n.jsx("div", {
                      className: "info-list-RZoxKx",
                      children: infoList.map((i, a) =>
                        n.jsxs(
                          "div",
                          {
                            className: Q,
                            children: [
                              n.jsx("div", {
                                className: "small-title-wfdrbQ",
                                children: i.title,
                              }),
                              n.jsxs("div", {
                                className: "info-IKfqih",
                                children: [
                                  i.iconType === "copy" &&
                                    n.jsx(m.cOt, {
                                      className: "copy-icon-iRvZUJ",
                                      size: 16,
                                      style: {
                                        cursor: "pointer",
                                      },
                                      onClick: () => {
                                        let e;
                                        e = i.value;
                                        return R._(function* () {
                                          try {
                                            yield navigator.clipboard.writeText(
                                              String(e),
                                            );
                                            W.A.success({
                                              icon: n.jsx(m.MOf, {
                                                size: 20,
                                                color:
                                                  "var(--functional-success)",
                                              }),
                                              content: g.Ay.t(
                                                "copy_success",
                                                {},
                                                "Copied",
                                              ),
                                            });
                                          } catch (e) {
                                            W.A.warning(
                                              g.Ay.t(
                                                "web_copy_failed_please_retry",
                                                {},
                                                "Couldn't copy. Try again.",
                                              ),
                                            );
                                          }
                                        })();
                                      },
                                    }),
                                  n.jsx("div", {
                                    className: "text-jbpEB8",
                                    children:
                                      i.tooltip || i.canViewOrder
                                        ? n.jsxs("span", {
                                            className: "status-actions-uorORi",
                                            children: [
                                              n.jsxs("span", {
                                                className:
                                                  "status-with-tooltip-PgE6mn",
                                                children: [
                                                  n.jsx("span", {
                                                    children: i.value,
                                                  }),
                                                  i.tooltip
                                                    ? n.jsx(L.A, {
                                                        content: i.tooltip,
                                                        checkOverflow: false,
                                                        children: n.jsx(
                                                          "span",
                                                          {
                                                            className:
                                                              "status-info-icon-JTjaK9",
                                                            children: n.jsx(
                                                              d.G_L,
                                                              {
                                                                size: 12,
                                                                "aria-label":
                                                                  "订单状态说明",
                                                              },
                                                            ),
                                                          },
                                                        ),
                                                      })
                                                    : null,
                                                ],
                                              }),
                                              i.canViewOrder
                                                ? n.jsxs(n.Fragment, {
                                                    children: [
                                                      n.jsx("span", {
                                                        className:
                                                          "status-divider-WsfiGV",
                                                        "aria-hidden": "true",
                                                      }),
                                                      n.jsx("button", {
                                                        type: "button",
                                                        className:
                                                          "view-order-button-RpkxcO",
                                                        onClick: () =>
                                                          ((e) => {
                                                            if (
                                                              bRef.current &&
                                                              !pRef.current
                                                            ) {
                                                              try {
                                                                var i =
                                                                  vRef.current;
                                                                var n =
                                                                  (i == null
                                                                    ? undefined
                                                                    : i.currentSpaceType) ===
                                                                  "team";
                                                                h.zH(
                                                                  t,
                                                                  f._(
                                                                    y._(
                                                                      {},
                                                                      reportParam,
                                                                    ),
                                                                    {
                                                                      action:
                                                                        "click_view",
                                                                      currentPage:
                                                                        "manage",
                                                                      currentTab:
                                                                        "payment_record",
                                                                    },
                                                                  ),
                                                                );
                                                                pRef.current =
                                                                  V.j({
                                                                    containerService:
                                                                      t,
                                                                    orderId:
                                                                      e.orderId,
                                                                    source: n
                                                                      ? B.U0
                                                                          .TeamOrder
                                                                      : B.U0
                                                                          .PersonOrder,
                                                                    teamId: n
                                                                      ? i.currentTeamId
                                                                      : undefined,
                                                                    teamType: n
                                                                      ? B.y3
                                                                          .Team
                                                                      : B.y3
                                                                          .Personal,
                                                                    productLevel:
                                                                      n
                                                                        ? undefined
                                                                        : e
                                                                            .corporateTransfer
                                                                            .productLevel,
                                                                    selectedProduct:
                                                                      e
                                                                        .corporateTransfer
                                                                        .selectedProduct,
                                                                    selectedProductName:
                                                                      e
                                                                        .corporateTransfer
                                                                        .selectedProductName,
                                                                    orderAmount:
                                                                      e
                                                                        .corporateTransfer
                                                                        .orderAmount,
                                                                    onClose:
                                                                      () => {
                                                                        pRef.current =
                                                                          undefined;
                                                                      },
                                                                  });
                                                              } catch (e) {
                                                                W.A.error(
                                                                  "订单详情打开失败，请重试",
                                                                );
                                                              }
                                                            }
                                                          })(e),
                                                        children: "查看",
                                                      }),
                                                    ],
                                                  })
                                                : null,
                                            ],
                                          })
                                        : i.value,
                                  }),
                                ],
                              }),
                            ],
                          },
                          a,
                        ),
                      ),
                    }),
                  ],
                },
                orderId,
              );
            })(e),
          )
        : null,
      n.jsx("div", {
        className: "load-spin-fijDIg",
        ref,
        style: {
          display: hasMore && w.length ? "flex" : "none",
        },
        children: n.jsx(F.A, {
          className: Y,
          size: 16,
        }),
      }),
      loading || !w.length || hasMore
        ? null
        : n.jsx("div", {
            className: "no-more-nsrLQO",
            children: g.Ay.t(
              "dre_m10n_credit_balance_end",
              {},
              "You’ve reached the end",
            ),
          }),
    ],
  });
}
const q = "scrollView-kIdWMR";
const G = {
  manage_plans: (e) => {
    var {
      onClose,
      onViewSubscriptionPlans,
      reportParam,
      forceTheme,
      scope,
      style,
    } = e;
    return n.jsx("div", {
      className: q,
      style,
      children: n.jsx(useP, {
        scope,
        forceTheme,
        onClose,
        onViewSubscriptionPlans,
        reportParam,
      }),
    });
  },
  payment_record: (e) => {
    var { style, reportParam, scope } = e;
    return n.jsx("div", {
      className: q,
      style,
      children: n.jsx(useK, {
        reportParam,
        scope,
      }),
    });
  },
};
function useEe(e) {
  const { onClose, onViewSubscriptionPlans, reportParam, forceTheme, scope } =
    e;
  const p = u.h(c._);
  const y = u.h(_.o);
  const { source, subPage } = reportParam;
  const [T, setT] = o.useState("manage_plans");
  const x = !y.isOversea;
  const I = () => {
    if (onClose != null) {
      onClose();
    }
  };
  return n.jsxs("div", {
    className: "subscriptionManageModal-HoynZ2",
    children: [
      n.jsxs("div", {
        className: "header-JQLJPi",
        children: [
          n.jsx("div", {
            className: "title-pWqNvI",
            children: g.Ay.t(
              "web_dre_m10n_management_page_title",
              {},
              "Manage Subscription",
            ),
          }),
          n.jsx("div", {
            className: "closeBtn-AFXNkM",
            onClick: I,
            children: n.jsx(m.CX2, {
              className: "closeBtnIcon-Ogr55i",
            }),
          }),
        ],
      }),
      n.jsxs("div", {
        className: "container-dH7JHG",
        children: [
          n.jsxs("div", {
            className: "tabsArea-SIvHE_",
            children: [
              n.jsxs(t.A, {
                className: "tabs-DnOyT6",
                activeTab: T,
                onChange: (clickTab) => {
                  h.zH(p, {
                    action: "click_tab",
                    currentPage: "manage",
                    currentTab: T,
                    clickTab,
                    source,
                    subPage,
                  });
                  setT(clickTab);
                },
                renderTabTitle: (children) =>
                  n.jsx("div", {
                    className: "tabTitleWrapper-dyajoY",
                    children,
                  }),
                children: [
                  n.jsx(
                    t.A.TabPane,
                    {
                      title: g.Ay.t(
                        "web_dre_m10n_management_page_tab_manage_plan",
                        {},
                        "Manage Plans",
                      ),
                    },
                    "manage_plans",
                  ),
                  n.jsx(
                    t.A.TabPane,
                    {
                      title: g.Ay.t(
                        "web_dre_m10n_management_page_tab_order_history",
                        {},
                        "Payment Records",
                      ),
                    },
                    "payment_record",
                  ),
                ],
              }),
              x
                ? n.jsxs("button", {
                    className: "invoiceEntry-EV_pYs",
                    type: "button",
                    onClick: () => {
                      h.zH(p, {
                        action: "click_invoice",
                        currentPage: "manage",
                        currentTab: T,
                        source,
                        subPage,
                      });
                      b._(p, {
                        action: "click_invoice",
                        currentPage: "subscription_management_page",
                        source,
                      });
                      m_1({
                        containerService: p,
                        reportParam,
                        scope,
                        forceTheme,
                      });
                    },
                    children: [
                      g.Ay.t("web_dre_invoice_entry", {}, "去开票"),
                      n.jsx(d.Vjx, {
                        size: 12,
                      }),
                    ],
                  })
                : null,
            ],
          }),
          ["manage_plans", "payment_record"].map((e) => {
            var r = G[e];
            return n.jsx(
              r,
              {
                scope,
                forceTheme,
                onClose: I,
                onViewSubscriptionPlans,
                style: {
                  display: e === T ? "block" : "none",
                },
                reportParam,
              },
              e,
            );
          }),
        ],
      }),
    ],
  });
}
export { useEe as G };
function er(e) {
  const {
    containerService,
    reportParam,
    forceTheme,
    onViewSubscriptionPlans,
    scope,
  } = e;
  var c = a.A.confirm({
    title: null,
    footer: null,
    icon: null,
    simple: true,
    closable: false,
    maskClosable: true,
    maskStyle: p.S(8),
    wrapClassName: _l(
      "subscriptionManageModalWrapper-CqZS4q",
      forceTheme === "light" && "lv-theme-force_light",
      forceTheme === "light" && "standaloneLightTheme-SrUTIv",
      forceTheme === "dark" && "lv-theme-force_dark",
      forceTheme === "dark" && "standaloneDarkTheme-GdgxbO",
    ),
    content: n.jsx(u.Z, {
      instantiationService: containerService,
      children: n.jsx(useEe, {
        scope,
        forceTheme,
        onClose: () => c.close(),
        onViewSubscriptionPlans,
        reportParam,
      }),
    }),
  });
}
export { er as d };
