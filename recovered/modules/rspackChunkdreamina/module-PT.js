import n from "oa";
import i from "z8";
import a from "bT";
import s from "gY";
import o from "CFa";
import { I } from "./module-Hk9.js";
import l from "bk";
import d from "qa";
import "HZH";
import u from "I7V";
import _p from "xb";
import { A as A_1 } from "./module-yTc.js";
import g from "wF";
import v from "Kt";
import b from "JZn";
import _ from "A6R";
import f from "NY";
import A from "zS";
import x from "p21";
import w from "csY";
import R from "MgG";
import k from "MK";
import C from "EYk";
import T from "jh7";
import N from "Iv";
import S from "Yvt";
import { PK, he } from "./module-Jh_2.js";
import { f as f_1 } from "./module-wYv.js";
import M from "CgK";
import E from "dm";
import F from "oh";
import { k as k_1 } from "./module-er_2.js";
import B from "X5";
import W from "SI";
import $ from "zbK";
import J from "Ek";
import Z from "hr";
import O from "GFp";
import D from "VN";
import U from "Ae";
import X from "mqj";
export { _s as _ } from "./module-Jh_2.js";
const y = a.forwardRef((e, r) => {
  var {
    children,
    className,
    content,
    onVisibleChange,
    waitingContextViewIds,
    tooltipStyle,
    needCloseIcon = false,
  } = e;
  var x = d._(e, [
    "children",
    "className",
    "content",
    "onVisibleChange",
    "waitingContextViewIds",
    "tooltipStyle",
    "needCloseIcon",
  ]);
  var [w, setW] = a.useState(false);
  var [k, setK] = a.useState(undefined);
  var TRef = a.useRef();
  var NRef = a.useRef();
  var SRef = a.useRef(false);
  var PRef = a.useRef(content);
  var jRef = a.useRef(onVisibleChange);
  var M = g.h(v._);
  PRef.current = content;
  jRef.current = onVisibleChange;
  var E = a.useCallback((e) => {
    var r;
    if (SRef.current !== e) {
      SRef.current = e;
      setW(e);
      if ((r = jRef.current) != null) {
        r.call(jRef, e);
      }
    }
  }, []);
  var F = a.useCallback(() => {
    if (TRef.current) {
      clearTimeout(TRef.current);
      TRef.current = undefined;
    }
  }, []);
  var I = a.useCallback(() => {
    var e;
    if ((e = NRef.current) != null) {
      e.dispose();
    }
    NRef.current = undefined;
  }, []);
  var B = function (e) {
    const r =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3000;
    F();
    if (!s.A(e)) {
      setK(e);
    }
    TRef.current = setTimeout(() => {
      TRef.current = undefined;
      setK(PRef.current);
      E(false);
    }, r);
    E(true);
  };
  var hide = () => {
    I();
    if (SRef.current) {
      F();
      setK(PRef.current);
      E(false);
    }
  };
  var show = function (e) {
    let r;
    const t =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3000;
    const n = arguments.length > 2 ? arguments[2] : undefined;
    I();
    if (
      !(n == null ? undefined : n.skipWaitingContextView) &&
      waitingContextViewIds
    ) {
      for (const i of waitingContextViewIds) {
        if ((r = b.c(M, i))) {
          break;
        }
      }
    }
    if (r) {
      const a = r.onUnmount(() => {
        NRef.current = undefined;
        B(e, t);
      });
      NRef.current = a;
    } else {
      B(e, t);
    }
  };
  a.useImperativeHandle(r, () => ({
    show,
    hide,
  }));
  a.useEffect(
    () => () => {
      F();
      I();
    },
    [F, I],
  );
  return i.jsx(
    u.A,
    l._(
      n._(
        {
          className: _p(
            A_1.timeoutTooltip,
            tooltipStyle === "grey" && A_1.greyTip,
            className,
          ),
          content: i.jsxs("div", {
            className: A_1.flexBox,
            children: [
              k != null ? k : content,
              needCloseIcon
                ? i.jsx(_.CX2, {
                    onClick: () => {
                      hide();
                    },
                    size: 12,
                    className: A_1.closeIcon,
                  })
                : undefined,
            ],
          }),
          showArrow: true,
          triggerProps: {
            popupAlign: {
              bottom: 4,
            },
          },
        },
        x,
      ),
      {
        popupVisible: w,
        onVisibleChange: (e) => {
          if (!TRef.current && content) {
            E(e);
          }
        },
        children,
      },
    ),
  );
});
const L = "web_teams_subscription_status_hover_membership_expire";
const z = "web_teams_subscription_status_hover_membership_expire_not_creator";
const V = "web_teams_subscription_status_hover_two_membership_expire_admin";
const H = "web_teams_subscription_status_hover_two_membership_expire";
const Q =
  "web_teams_subscription_status_hover_multiple_membership_expire_admin";
const K = "web_teams_subscription_status_hover_multiple_membership_expire";
const G = {
  renewalBtn: "renewalBtn-mdySdy",
  expiringTooltipContentNum: "expiringTooltipContentNum-niU8MI",
  infoTooltips: "infoTooltips-MXYJ3p",
};
function Y(e) {
  if (e) {
    return Z.i("yyyy-MM-dd hh:mm", e);
  }
}
function q(onClick) {
  return i.jsx("span", {
    className: G.renewalBtn,
    onClick,
    children: k.Ay.t(
      "web_teams_subscription_status_hover_renew_btn",
      {},
      "续费会员",
    ),
  });
}
var ee = a.memo(function (e) {
  const {
    children,
    disabled,
    contextViewIds = [],
    tipPos = "right",
    tipHorizontalOffset,
  } = e;
  const { vipInfoTooltipRef, paymentResultRef, vipTooltipContent } = (() => {
    var e;
    var r;
    var containerService = g.h(v._);
    var o = g.h(F.$);
    var c = g.h(D._);
    var d = g.h(T.r3);
    var u = g.h(B.ICommercialTeamWorkspaceService);
    var pRef = a.useRef(null);
    var mRef = a.useRef(null);
    var { isVip, vipInfo } =
      (e = x.F(c, (e) => ({
        isVip: e.isVip,
        vipInfo: e.vipInfo,
        currentVipLevel: e.currentVipLevel,
      }))) != null
        ? e
        : {};
    var {
      hasCurrentTeamMembershipContext,
      teamMembershipStatus,
      teamMembershipUnavailableReason,
      teamInfo,
    } = x.F(d, (e) => ({
      hasCurrentTeamMembershipContext: e.isTeamMode,
      teamMembershipStatus: e.team.status,
      teamMembershipUnavailableReason: e.team.unavailableReason,
      teamInfo: e.team.teamInfo,
    }));
    var role = x.F(u, (e) => {
      var r;
      return J.OR(
        (r = e.state.currentTeam) == null ? undefined : r.currentRole,
        e.state.permission,
      );
    });
    var CRef = a.useRef(vipInfo);
    var [S, setS] = a.useState(0);
    var j = g.h(N.sG);
    var { receiveCreditResult } =
      (r = x.F(j, (e) => ({
        receiveCreditResult: e.creditReceiveManager.receiveCreditResult,
      }))) != null
        ? r
        : {};
    var E = A.A(() => {
      O.iT({
        containerService,
        reportParam: {
          source: "top_account_button_tooltip",
        },
      });
    });
    var I = A.A(() => {
      O.iT({
        containerService,
        reportParam: {
          source: "top_account_button_tooltip",
        },
      });
    });
    var ee = A.A(() => {
      O.Je({
        containerService,
        purchaseSource: $.UA.Renew,
        reportParam: {
          source: "top_account_button_tooltip",
        },
      });
    });
    var er = a.useMemo(() => {
      var { endTime = 0 } = vipInfo != null ? vipInfo : {};
      var r = Math.ceil(
        (endTime - Math.floor(new Date().getTime() / 1000)) / W.xz,
      );
      if (r > 0) {
        return r;
      }
    }, [vipInfo]);
    var et = a.useMemo(
      () =>
        ((e) => {
          let r;
          let t;
          const {
            teamMembershipStatus,
            teamMembershipUnavailableReason,
            teamInfo,
            role = "unknown",
          } = e;
          if (
            teamMembershipStatus === "active" ||
            (teamMembershipStatus === "expired" &&
              teamMembershipUnavailableReason === "seat_limit_exceeded")
          ) {
            const o = Array.isArray(
              (t =
                teamInfo == null || (r = teamInfo.subscriptionInfo) == null
                  ? undefined
                  : r.vipDetail),
            )
              ? t.flatMap((e) => {
                  var r;
                  var seatCount =
                    typeof (r = e.memberLimit) === "number" &&
                    Number.isFinite(r) &&
                    r > 0
                      ? r
                      : undefined;
                  var expireTimeMs = ((e) => {
                    if (e !== undefined && Number.isFinite(e) && !(e <= 0)) {
                      if (e > 100000000000) {
                        return e;
                      }
                      return 1000 * e;
                    }
                  })(e.endTime);
                  if (seatCount === undefined || expireTimeMs === undefined) {
                    return [];
                  }
                  return [
                    {
                      seatCount,
                      expireTimeMs,
                    },
                  ];
                })
              : [];
            if (o.length !== 0) {
              const c = teamMembershipStatus === "active" && role === "owner";
              if (o.length === 1 || role === "collaborator") {
                if (c) {
                  return {
                    type: "packages",
                    i18nKey: z,
                    segments: [o[0]],
                    canRenew: true,
                  };
                }
                return {
                  type: "packages",
                  i18nKey: L,
                  segments: [o[0]],
                  canRenew: false,
                };
              }
              if (o.length === 2) {
                if (c) {
                  return {
                    type: "packages",
                    i18nKey: H,
                    segments: [o[0], o[1]],
                    canRenew: true,
                  };
                }
                return {
                  type: "packages",
                  i18nKey: V,
                  segments: [o[0], o[1]],
                  canRenew: false,
                };
              }
              if (c) {
                return {
                  type: "packages",
                  i18nKey: K,
                  segments: [o[0], o[1]],
                  finalExpireTimeMs: Math.max(...o.map((e) => e.expireTimeMs)),
                  canRenew: true,
                };
              }
              return {
                type: "packages",
                i18nKey: Q,
                segments: [o[0], o[1]],
                finalExpireTimeMs: Math.max(...o.map((e) => e.expireTimeMs)),
                canRenew: false,
              };
            }
          }
        })({
          teamMembershipStatus,
          teamMembershipUnavailableReason,
          teamInfo,
          role,
        }),
      [teamInfo, role, teamMembershipStatus, teamMembershipUnavailableReason],
    );
    var en = a.useMemo(() => {
      if (et) {
        return ((e, r) => {
          switch (e.i18nKey) {
            case L:
            case z:
              let t;
              const [i] = e.segments;
              const string0 = i.seatCount;
              const string1 = (t = Y(i.expireTimeMs)) != null ? t : "";
              if (e.i18nKey === L) {
                return k.Ay.t(
                  e.i18nKey,
                  {
                    string0,
                    string1,
                  },
                  "{string0}席位团队会员将于{string1}过期",
                );
              }
              return k.Ay.t(
                e.i18nKey,
                {
                  string0,
                  string1,
                  string2: q(r),
                },
                "{string0}席位团队会员将于{string1}过期。{string2}",
              );
            case V:
            case H:
              let o;
              let c;
              const [d, u] = e.segments;
              const p = {
                string0: d.seatCount,
                string1: (o = Y(d.expireTimeMs)) != null ? o : "",
                string2: u.seatCount,
                string3: (c = Y(u.expireTimeMs)) != null ? c : "",
              };
              if (e.i18nKey === H) {
                return k.Ay.t(
                  e.i18nKey,
                  l._(n._({}, p), {
                    string4: q(r),
                  }),
                  "{string0}席位团队会员将于{string1}到期，{string2}席位团队会员将于{string3}到期。{string4}",
                );
              }
              return k.Ay.t(
                e.i18nKey,
                p,
                "{string0}席位团队会员将于{string1}到期，{string2}席位团队会员将于{string3}到期",
              );
            case Q:
            case K:
              let m;
              let h;
              let g;
              const [v, b] = e.segments;
              const _ = {
                string0: v.seatCount,
                string1: (m = Y(v.expireTimeMs)) != null ? m : "",
                string2: b.seatCount,
                string3: (h = Y(b.expireTimeMs)) != null ? h : "",
                string4: (g = Y(e.finalExpireTimeMs)) != null ? g : "",
              };
              if (e.i18nKey === K) {
                return k.Ay.t(
                  e.i18nKey,
                  l._(n._({}, _), {
                    string5: q(r),
                  }),
                  "{string0}席位团队会员将于{string1}到期，{string2}席位团队会员将于{string3}到期，其他席位团队会员权益将按序依次生效直至{string4}过期。{string5}",
                );
              }
              return k.Ay.t(
                e.i18nKey,
                _,
                "{string0}席位团队会员将于{string1}到期，{string2}席位团队会员将于{string3}到期，其他席位团队会员权益将按序依次生效直至{string4}过期",
              );
            default:
              return;
          }
        })(et, ee);
      }
    }, [ee, et]);
    var vipTooltipContent_1 = a.useMemo(() => {
      if (hasCurrentTeamMembershipContext) {
        return en;
      }
      var {
        endTime = 0,
        currentAutoRenewPlan,
        curVipLevel,
      } = vipInfo != null ? vipInfo : {};
      var n = Math.floor(new Date().getTime() / 1000);
      var a = isVip && endTime && endTime > n;
      var date = Z.i("yyyy-MM-dd hh:mm", 1000 * endTime);
      if (!isVip || n > endTime) {
        if (endTime === 0) {
          return i.jsxs(i.Fragment, {
            children: [
              k.Ay.t(
                "dre_m10n_not_pro_member",
                {},
                "You haven't subscribed yet",
              ),
              i.jsx("span", {
                onClick: I,
                className: G.renewalBtn,
                children: k.Ay.t("web_m10n_btn_subscribe", {}, "去开通"),
              }),
            ],
          });
        } else {
          return k.Ay.t(
            "dre_m10n_sub_expired_desc",
            {
              date,
            },
            "Your subscription has expired on {date}. ",
          );
        }
      }
      if (currentAutoRenewPlan && currentAutoRenewPlan.level === curVipLevel) {
        return k.Ay.t(
          "web_dre_m10n_upgrade_plans_auto_renew_toast",
          {
            string0: Z.i(
              "yyyy-MM-dd hh:mm",
              1000 * currentAutoRenewPlan.nextRenewalTime,
            ),
          },
          "Renews on {string0} ",
        );
      }
      if (a) {
        return i.jsx(i.Fragment, {
          children: k.Ay.t(
            "dre_m10n_sub_expire_date_renew",
            {
              date,
              strong0: (children_1) =>
                i.jsx(
                  "span",
                  {
                    className: G.renewalBtn,
                    onClick: E,
                    children: children_1,
                  },
                  children_1,
                ),
              renew: k.Ay.t(
                "dre_m10n_sub_expire_date_renew_placeholder",
                {},
                "Renew",
              ),
            },
            "Your subscription will expire on {date}. <strong0>{renew}</strong0>",
          ),
        });
      }
    }, [hasCurrentTeamMembershipContext, en, vipInfo, isVip, I, E]);
    ((e) => {
      var { shouldShowPopup, show } = e;
      var n = A.A(show);
      a.useEffect(() => {
        if (shouldShowPopup) {
          var e = U.X.vipExpiryTooltipShowedTime;
          var t = Number(X.r.getItem(e));
          var i = t && !isNaN(t) ? new Date(t) : undefined;
          var a = Date.now();
          var o = new Date(a);
          var c = Math.abs(a - t) / 1000 / 3600;
          if (
            s.A(i) ||
            o.getDate() !== (i == null ? undefined : i.getDate()) ||
            c > 24
          ) {
            n();
            X.r.setItem(e, a.toString());
          }
        }
      }, []);
    })({
      shouldShowPopup: a.useMemo(() => {
        if (
          !er ||
          er > 5 ||
          !(receiveCreditResult == null ? undefined : receiveCreditResult.ok)
        ) {
          return false;
        }
        var { isFirstReceive, hasPopup } = receiveCreditResult.value;
        return !isFirstReceive && hasPopup;
      }, [receiveCreditResult, er]),
      show: () => {
        if (vipTooltipContent_1) {
          var e;
          if ((e = pRef.current) != null) {
            e.show(vipTooltipContent_1, 3000);
          }
        }
      },
    });
    var ea = A.A((e) => {
      var r;
      var { endTime, flag, curVipLevel } = e != null ? e : {};
      var {
        endTime: endTime_1,
        flag: flag_1,
        curVipLevel: curVipLevel_1,
      } = (u = CRef.current) != null ? u : {};
      var l = endTime && endTime_1 && endTime > endTime_1;
      var d = curVipLevel && curVipLevel_1 !== curVipLevel;
      if (!flag_1 && flag) {
        if ((p = mRef.current) != null) {
          p.show(
            k.Ay.t(
              "dre_m10n_subscribed_credits",
              {},
              "Subscribed to 1-month plan",
            ),
            3000,
          );
        }
      } else if (l && d) {
        var u;
        var p;
        var h;
        var g;
        var v;
        var { vipPriceList } = o;
        var { vipBenefitPackage } =
          vipPriceList.find((e) => e.level === curVipLevel) || {};
        if ((v = mRef.current) != null) {
          v.show(
            k.Ay.t(
              "web_dre_m10n_upgrade_for_credits_toast",
              {
                string0: W.JI({
                  level: curVipLevel,
                }),
                number0:
                  (h =
                    S != null
                      ? S
                      : vipBenefitPackage == null ||
                          (g = vipBenefitPackage.userCredit) == null
                        ? undefined
                        : g.amount) != null
                    ? h
                    : "",
              },
              "You’ve upgraded to {string0} and got {number0} subscription credits",
            ),
            3000,
          );
        }
      } else {
        if (l) {
          if ((r = mRef.current) != null) {
            r.show(
              k.Ay.t("dre_m10n_renew_credits", {}, "Renewed to 1-month plan"),
              6000,
            );
          }
        }
      }
      CRef.current = e;
    });
    a.useEffect(() => {
      var e = c == null ? undefined : c.onVipInfoChange(ea);
      return () => {
        if (e != null) {
          e.dispose();
        }
      };
    }, [ea, c]);
    a.useEffect(() => {
      var e = j.onLocalCreditChange((e, r, t) => {
        setS(t);
      });
      return () => {
        e.dispose();
      };
    }, [j]);
    return {
      vipInfoTooltipRef: pRef,
      paymentResultRef: mRef,
      vipTooltipContent: vipTooltipContent_1,
    };
  })();
  const { infoTooltipRef } = (() => {
    let e;
    const r = g.h(N.sG);
    const { isHitCreditPackageGroupExperiment } = g.h(C.a);
    const n = g.h(T.r3);
    const i = x.F(n, (e) => e.isTeamMode);
    const s = g.h(v._);
    const oRef = a.useRef(null);
    const cRef = a.useRef(null);
    const l = w.b();
    const d = A.A((e, n, num, l, d) =>
      f._(function* () {
        let l;
        let u;
        let p;
        if (
          !(
            (n === "FREEMIUM_RECEIVE" &&
              !(yield r.creditReceiveManager.canReceiveDailyCredit())) ||
            Date.now() / 1000 - d.createTime > 180 ||
            isHitCreditPackageGroupExperiment
          )
        ) {
          if (e === S.y.ADD && n === "FREEMIUM_RECEIVE" && r.isFirstReceived) {
            if ((l = cRef.current) != null) {
              l.show(num);
            }
          } else if (e === S.y.ADD && n === "FREEMIUM_RECEIVE") {
            if ((u = oRef.current) != null) {
              u.show(
                k.Ay.t(
                  "dre_m10n_daily_credits_toast",
                  {
                    num,
                  },
                  "You've got {num} daily free credits",
                ),
                3000,
              );
            }
          } else if (e !== S.y.ADD || n !== "ONE_OFF_PURCHASE" || i) {
            if (n === "VIP_GIFT") {
              R.ev(s, true);
            }
          } else if ((p = oRef.current) != null) {
            p.show(
              k.Ay.t(
                "dre_m10n_purchase_credits_toast",
                {
                  num,
                },
                "Purchased {num} credits",
              ),
              3000,
            );
          }
        }
      })(),
    );
    const { receiveCreditResult, hasShow } =
      (e = x.F(r, (e) => ({
        receiveCreditResult: e.creditReceiveManager.receiveCreditResult,
        hasShow: e.creditReceiveManager.hasShow,
      }))) != null
        ? e
        : {};
    a.useEffect(() => {
      if (!l && !isHitCreditPackageGroupExperiment && receiveCreditResult) {
        var { creditReceiveManager } = r;
        var n = false;
        creditReceiveManager.canReceiveDailyCredit().then((r) => {
          if (!n && r && receiveCreditResult.ok && !hasShow) {
            var t;
            var i;
            var { isFirstReceive, hasPopup, receiveQuota } =
              receiveCreditResult.value;
            if (isFirstReceive) {
              creditReceiveManager.setHasShow();
              if ((t = cRef.current) != null) {
                t.show(receiveQuota);
              }
            } else if (!hasPopup) {
              creditReceiveManager.setHasShow();
              if ((i = oRef.current) != null) {
                i.show(
                  k.Ay.t(
                    "dre_m10n_daily_credits_toast",
                    {
                      num: receiveQuota,
                    },
                    "You've got {num} daily free credits",
                  ),
                  3000,
                );
              }
            }
          }
        });
        return () => {
          n = true;
        };
      }
    }, [r, receiveCreditResult, hasShow, l]);
    a.useEffect(() => {
      if (!l) {
        var e = r == null ? undefined : r.onLocalCreditChange(d);
        return () => {
          if (e != null) {
            e.dispose();
          }
        };
      }
    }, [r, d, l]);
    const m = A.A((e) => {
      var { content, duration = 3000, skipWaitingContextView, onShow } = e;
      if (content) {
        if (oRef.current) {
          oRef.current.show(content, duration, {
            skipWaitingContextView,
          });
          if (onShow != null) {
            onShow();
          }
        }
      }
    });
    a.useEffect(() => {
      he().forEach(m);
      return PK(m);
    }, [m]);
    return {
      infoTooltipRef: oRef,
      firstTimePopoverRef: cRef,
    };
  })();
  const {
    commerceLandingModalContent,
    popupVisible,
    onVisibleChange,
    tooltipClassName,
  } = ((e) => {
    let r;
    const t = g.h(v._);
    const n = g.h(N.sG);
    const { vipPriceList } = g.h(F.$);
    const { isHitCreditPackageGroupExperiment } = g.h(C.a);
    const oRef = a.useRef(false);
    const cRef = a.useRef(false);
    const lRef = a.useRef(false);
    const dRef = a.useRef(n.creditReceiveManager.receiveCreditResult);
    const uRef = a.useRef(null);
    const { receiveCreditResult } =
      (r = x.F(n, (e) => ({
        receiveCreditResult: e.creditReceiveManager.receiveCreditResult,
      }))) != null
        ? r
        : {};
    const [m, setM] = a.useState();
    dRef.current = receiveCreditResult;
    var b = a.useCallback(() => {
      if (!oRef.current) {
        if (cRef.current) {
          lRef.current = true;
          return;
        }
        cRef.current = true;
        lRef.current = false;
        var r = dRef.current;
        var n = t.createInstance(k_1);
        uRef.current = n;
        n.getModal(e)
          .then((e) => {
            setM(e);
            var dRef_current = dRef.current;
            var n = dRef_current !== r;
            if (n) {
              lRef.current = true;
            }
            oRef.current = !!e || (!n && !!dRef_current);
          })
          .catch(() => {
            setM(undefined);
          })
          .finally(() => {
            cRef.current = false;
            if (lRef.current && !oRef.current) {
              b();
            }
          });
      }
    }, [t, e]);
    a.useEffect(() => {
      b();
    }, [b, vipPriceList, receiveCreditResult]);
    const _ = a.useCallback(
      (r, i) =>
        f._(function* () {
          if (
            r === S.y.ADD &&
            i === "FREEMIUM_RECEIVE" &&
            !oRef.current &&
            (yield n.creditReceiveManager.canReceiveDailyCredit()) &&
            !oRef.current
          ) {
            const a = t.createInstance(k_1);
            uRef.current = a;
            a.getModal(e).then((e) => setM(e));
            oRef.current = true;
          }
        })(),
      [n, e, t],
    );
    a.useEffect(() => {
      if (isHitCreditPackageGroupExperiment) {
        var e = n == null ? undefined : n.onLocalCreditChange(_);
        return () => {
          if (e != null) {
            e.dispose();
          }
        };
      }
    }, [n, _, isHitCreditPackageGroupExperiment]);
    const [y, setY] = a.useState(false);
    M.A(
      () =>
        f._(function* () {
          if (m == null ? undefined : m.isFirstShow) {
            let e;
            let r;
            setY(true);
            if (!(m == null || (e = m.afterOpen) == null)) {
              e.call(m);
            }
            yield E.u(5000);
            setY(false);
            if (
              !(
                !isHitCreditPackageGroupExperiment ||
                ((r = uRef.current) == null ? undefined : r.getIsNewUser())
              )
            ) {
              setM(undefined);
            }
          }
        })(),
      [m],
    );
    const w = a.useCallback(
      (e) => {
        var r;
        var t;
        setY(e);
        if (e) {
          if (!(m == null || (r = m.afterOpen) == null)) {
            r.call(m);
          }
        } else if (!(m == null || (t = m.afterClose) == null)) {
          t.call(m);
        }
      },
      [m],
    );
    const tooltipClassName_1 = a.useMemo(() => {
      if (m == null) {
        return undefined;
      }
      return m.className;
    }, [m]);
    return {
      commerceLandingModalContent: m == null ? undefined : m.content,
      popupVisible: y,
      onVisibleChange: w,
      tooltipClassName: tooltipClassName_1,
    };
  })(contextViewIds);
  const {
    ccpcCommerceLandingModalContent,
    ccpcPopupVisible,
    onCCPCVisibleChange,
    ccpcTooltipClassName,
  } = f_1(contextViewIds);
  const [ec, setEc] = a.useState(false);
  const [ed, setEd] = a.useState(false);
  const ep = tipPos === "bottom" && tipHorizontalOffset !== undefined;
  const position = ep ? "br" : tipPos;
  const triggerProps = a.useMemo(
    () => ({
      popupAlign: {
        right: 7,
        bottom: ep ? [tipHorizontalOffset, 8] : 8,
      },
      boundaryOffset: {
        left: 8,
      },
    }),
    [ep, tipHorizontalOffset],
  );
  const waitingContextViewIds = a.useMemo(
    () => [...contextViewIds, ...Object.values(o.u)],
    [contextViewIds],
  );
  const disabled_1 =
    s.A(vipTooltipContent) ||
    disabled ||
    ec ||
    !!commerceLandingModalContent ||
    !!ccpcCommerceLandingModalContent;
  a.useEffect(() => {
    if (disabled_1) {
      setEd(false);
    }
  }, [disabled_1]);
  const eb = a.useCallback(
    (e) => {
      setEd(!disabled_1 && e);
    },
    [disabled_1],
  );
  return i.jsx(y, {
    waitingContextViewIds,
    triggerProps,
    ref: infoTooltipRef,
    showArrow: false,
    position,
    children: i.jsx(y, {
      waitingContextViewIds,
      triggerProps,
      ref: paymentResultRef,
      showArrow: false,
      position,
      children: i.jsx(y, {
        waitingContextViewIds,
        triggerProps,
        position,
        showArrow: false,
        ref: vipInfoTooltipRef,
        onVisibleChange: setEc,
        className: G.timeoutTooltips,
        children: i.jsx(I, {
          popupVisible: ccpcPopupVisible,
          triggerProps: n._({}, triggerProps),
          position,
          trigger: "hover",
          showArrow: false,
          disabled:
            s.A(ccpcCommerceLandingModalContent) ||
            disabled ||
            !!commerceLandingModalContent,
          className: ccpcTooltipClassName,
          content: ccpcCommerceLandingModalContent,
          onVisibleChange: onCCPCVisibleChange,
          children: i.jsx(I, {
            popupVisible,
            triggerProps,
            position,
            trigger: "hover",
            showArrow: false,
            disabled: s.A(commerceLandingModalContent) || disabled,
            className: tooltipClassName,
            content: commerceLandingModalContent,
            onVisibleChange,
            children: i.jsx(I, {
              trigger: "hover",
              position,
              showArrow: false,
              triggerProps,
              content: vipTooltipContent,
              popupVisible: ed && !disabled_1,
              disabled: disabled_1,
              onVisibleChange: eb,
              className: G.infoTooltips,
              children,
            }),
          }),
        }),
      }),
    }),
  });
});
export { ee as H };
