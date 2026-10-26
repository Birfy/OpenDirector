import n from "oa";
import i from "bk";
import a from "qa";
import s from "z8";
import "WJ";
import o from "gei";
import c from "bT";
import _l from "xb";
import u from "bo";
import p from "M8X";
import m from "wF";
import h from "CFa";
import g from "JZn";
import v from "gLs";
import b from "GHw";
import _ from "hF";
import y from "fGo";
import f from "Dz";
import A from "fCR";
import x from "NY";
import w from "k6";
import R from "pf";
import k from "iAN";
import C from "oU";
import "Vgx";
import T from "WyQ";
import N from "cO";
import S from "A6R";
import P from "p21";
import j from "VPK";
import "eu";
import M from "k5";
import E from "RJ";
import F from "ofP";
import I from "h4d";
import B from "MK";
import W from "gwv";
import $ from "Iv";
import J from "oh";
import Z from "VN";
import { CX, KR, KW, qQ } from "./module-GM.js";
import * as D from "./module-DVK.js";
import L from "yw";
import { G7, M1, kX } from "./module-IQ.js";
import K from "db";
import U from "bjy";
import "HZH";
import G from "I7V";
import Y from "SC";
import q from "SI";
import ee from "hr";
import er from "ex6";
import et from "jh7";
import * as ei from "./module-m3t.js";
import ed from "GFp";
import { I as I_1 } from "./module-dI5.js";
import em from "bfR";
import * as eg from "./module-fL.js";
import eT from "F3";
import { N as N_1 } from "./module-ekP.js";
import eD from "dw4";
import eL from "bI5";
import ez from "hag";
const z = (e) => {
  var { credit, handleShowHistoryClick, isTeamCredit = false } = e;
  return s.jsxs("div", {
    className: "creditInfo-RXc6Cd",
    children: [
      isTeamCredit
        ? B.Ay.t("web_team_credits_buy_remaining_label", {}, "剩余积分")
        : B.Ay.t("dre_m10n_purchase_credits_left", {}, "Credits left:"),
      s.jsxs("div", {
        className: "credit-ePVP20",
        onClick: handleShowHistoryClick,
        children: [
          s.jsx(L.mC1, {
            className: "creditIcon-RDEWch",
          }),
          credit != null ? credit : 0,
        ],
      }),
    ],
  });
};
const H = (e) => {
  var {
    fuelProducts = [],
    activityProducts,
    regularProducts,
    selectedProductId,
    onSelectProduct,
  } = e;
  return s.jsx(j.pZ, {
    className: "activityProductSection-P0ZxG2",
    groups: kX({
      fuelProducts,
      activityProducts,
      regularProducts,
    }),
    selectedProductId,
    onSelectProduct: (e) => {
      var i;
      var s = [...activityProducts, ...fuelProducts, ...regularProducts].find(
        (r) => r.productId === e,
      );
      onSelectProduct(
        e,
        s == null || (i = s.number) == null ? undefined : i.toString(),
      );
    },
    presentation: "dialog",
    ariaLabel: "积分商品",
  });
};
const Q = {
  cnFooter: "cnFooter-nywLBE",
  creditRule: "creditRule-PWimxF",
  overseaFooter: "overseaFooter-uqmuBK",
  reminder: "reminder-wDyVQ7",
  link: "link-BG3rtp",
  activityLayout: "activityLayout-fVra4r",
};
const X = (e) => {
  var { isOversea, activityLayout = false, overseaActivityLayout = false } = e;
  var i = K.W();
  var { region, lang } = U.S();
  if (isOversea) {
    return s.jsxs("div", {
      className: _l(Q.overseaFooter, overseaActivityLayout && Q.activityLayout),
      children: [
        s.jsx("div", {
          className: Q.policyAgreement,
          children: B.Ay.t(
            "dre_m10n_purchase_credits_legal",
            {
              agreement: s.jsx("a", {
                target: "_blank",
                rel: "noreferrer",
                className: Q.link,
                href: N.m(
                  F.y.USER_AGREEMENT(true, {
                    region,
                    lang,
                  }),
                  null,
                  {
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
                      "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWQxbFh%bkpa$jJSc1kzaz$hMk50$m1oa$-yeDFX$k01-W1Je%1-%mFXRXBx$2xNNW$tTnR%WFpaTWpsMFkw-z$k$nB-TlRCam$%bHBaRmhP-0dKdFZuc*pl$*xxWWpJe*R*cFlTbXBo$jBaelR*aENhR1Z%T1dwa%1qRjNZakkx-kdKd$$ucE1Naz%1$2xk%2NH%kRNW*xh$jA1dldWaEtibHB%T$hSa%1sSm9Za001-W1Je%1-Z*lNalZzWW01%2$rd3lXblppTTFKc1kyaz$jR0p0$W14bFF6$XdZek5v-%dOdFpERmpkejA5",
                  },
                ),
                children: B.Ay.t(
                  "dre_m10n_sub_legal_tos",
                  {},
                  "Terms of Service",
                ),
              }),
              privacy_policy: s.jsx("a", {
                target: "_blank",
                rel: "noreferrer",
                className: Q.link,
                href: N.m(
                  F.y.PRIVACY_POLICY(true, {
                    region,
                    lang,
                  }),
                  null,
                  {
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
                      "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWQxbFh%bkpa$jJSc1kzaz$hMk50$m1oa$-yeDFX$k01-W1Je%1-%mFXRXBx$2xNNW$tTnR%WFpaTWpsMFkw-z$k$nB-TlRCam$%bHBaRmhP-0dKdFZuc*pl$*xxWWpJe*R*cFlTbXBo$jBaelR*aENhR1Z%T1dwa%1qRjNZakkx-kdKd$$ucE1Naz%1$2xk%2NH%kRNW*xh$jA1dldWaEtibHB%T$hSa%1sSm9Za001-W1Je%1-Z*lNalZzWW01%2$rd3lXblppTTFKc1kyaz$jR0p0$W14bFF6$XdZek5v-%dOdFpERmpkejA5",
                  },
                ),
                children: B.Ay.t(
                  "web_new_my_privacy_policy_tab",
                  {},
                  "Privacy Policy",
                ),
              }),
            },
            "By continuing, you have read and agree to Dreamina’s {agreement}",
          ),
        }),
        s.jsx("div", {
          className: Q.reminder,
          children: B.Ay.t(
            "dre_m10n_purchase_credits_note",
            {},
            "Note: Credits cannot be used to purchase subscriptions, transferred to another account, or exchanged to cash for withdrawal. Purchased credits cannot be refunded and they are valid for 2 years.",
          ),
        }),
      ],
    });
  }
  return s.jsxs("div", {
    className: Q.cnFooter,
    children: [
      activityLayout
        ? "温馨提示：积分不可兑换会员，不可转赠，也不可提现；"
        : B.Ay.t(
            "dre_m10n_purchase_credits_note",
            {},
            "Note: Credits cannot be used to purchase subscriptions, transferred to another account, or exchanged to cash for withdrawal. Purchased credits cannot be refunded and they are valid for 2 years.",
          ),
      s.jsx("a", {
        target: "_blank",
        rel: "noreferrer",
        href: N.m(i, null, {
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
            "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWQxbFh%bkpa$jJSc1kzaz$hMk50$m1oa$-yeDFX$k01-W1Je%1-%mFXRXBx$2xNNW$tTnR%WFpaTWpsMFkw-z$k$nB-TlRCam$%bHBaRmhP-0dKdFZuc*pl$*xxWWpJe*R*cFlTbXBo$jBaelR*aENhR1Z%T1dwa%1qRjNZakkx-kdKd$$ucE1Naz%1$2xk%2NH%kRNW*xh$jA1dldWaEtibHB%T$hSa%1sSm9Za001-W1Je%1-Z*lNalZzWW01%2$rd3lXblppTTFKc1kyaz$jR0p0$W14bFF6$XdZek5v-%dOdFpERmpkejA5",
        }),
        className: Q.creditRule,
        children: B.Ay.t("dre_m10n_purchase_credits_rules", {}, "Rules"),
      }),
    ],
  });
};
function en(e) {
  const { profile } = e;
  const t = m.h(et.r3);
  const { effectiveVipLevel, teamExpireTime, expiredTeamVipLevel } = P.F(
    t,
    (e) => {
      var r;
      var t;
      var n;
      return {
        effectiveVipLevel: e.effective.vipLevel,
        teamExpireTime:
          e.team.isActive &&
          (r = Y.IM(
            (t = e.team.teamInfo) == null ? undefined : t.subscriptionInfo,
          )) != null
            ? r
            : e.team.expireTime,
        expiredTeamVipLevel: Y.Ee(
          (n = e.team.teamInfo) == null ? undefined : n.subscriptionInfo,
        ),
      };
    },
  );
  const profile_teamName = profile.teamName;
  const children = ((e, r, t) => {
    if ((r === "active" || r === "expired") && e !== undefined && e !== "") {
      const n = Number(e);
      if (Number.isFinite(n) && !(n <= 0)) {
        const i = 1000 * n;
        const a = ee.i("yyyy.MM.dd", i);
        if (r === "expired" || Date.now() >= i) {
          return B.Ay.t(
            "dre_m10n_sub_expired_desc",
            {
              date: a,
            },
            "Your subscription has expired on {date}.",
          );
        }
        if (Y.ny(t)) {
          return B.Ay.t(
            "web_dreamina_teams_expire_date",
            {
              string0: q.Qk(t),
              string1: a,
            },
            "{string0}将于{string1}过期",
          );
        }
        return B.Ay.t(
          "web_team_space_membership_expire_tip",
          {
            expire_date: a,
          },
          "会员将于 {expire_date} 到期",
        );
      }
    }
  })(
    teamExpireTime != null ? teamExpireTime : profile.expireTime,
    profile.membershipStatus,
    profile.membershipStatus === "active" ? effectiveVipLevel : undefined,
  );
  const l =
    profile.membershipStatus === "active" ||
    profile.membershipStatus === "expired";
  const level =
    profile.membershipStatus === "expired"
      ? expiredTeamVipLevel
      : effectiveVipLevel;
  return s.jsxs("div", {
    className: "teamSpaceContainer-QLQVFG",
    children: [
      s.jsx(j._V, {
        size: 40,
        teamName: profile_teamName,
        avatarColor: profile.avatarColor,
        className: "teamAvatar-uFfwBD",
      }),
      s.jsxs("div", {
        className: "teamInfoWrapper-ZOtFdZ",
        children: [
          s.jsxs("div", {
            className: "teamTitleWrapper-XkJDQx",
            children: [
              s.jsx(G.A, {
                content: profile_teamName,
                checkOverflow: true,
                children: s.jsx("span", {
                  className: "teamTitle-E3M2yz",
                  children: profile_teamName,
                }),
              }),
              l
                ? s.jsx(er.z, {
                    className: "teamRatingIcon-Q3QlDW",
                    level,
                    inactive: profile.membershipStatus === "expired",
                    size: 16,
                  })
                : null,
            ],
          }),
          children
            ? s.jsx("div", {
                className: "membershipExpiryInfo-Z_Adqu",
                children,
              })
            : null,
        ],
      }),
    ],
  });
}
const ea = {
  avatar: "avatar-_KGEvt",
  "user-info-wrapper": "user-info-wrapper-dU9gdn",
  userInfoWrapper: "user-info-wrapper-dU9gdn",
  "user-info": "user-info-QB_a3k",
  userInfo: "user-info-QB_a3k",
  "user-name-wrapper": "user-name-wrapper-NF496o",
  userNameWrapper: "user-name-wrapper-NF496o",
  "user-name": "user-name-TkUADM",
  userName: "user-name-TkUADM",
  "vip-tag": "vip-tag-n5VOs_",
  vipTag: "vip-tag-n5VOs_",
  "vip-end-time-wrapper": "vip-end-time-wrapper-WiNcI8",
  vipEndTimeWrapper: "vip-end-time-wrapper-WiNcI8",
  "vip-end-time": "vip-end-time-p_503n",
  vipEndTime: "vip-end-time-p_503n",
  "renewals-btn": "renewals-btn-iZr5TP",
  renewalsBtn: "renewals-btn-iZr5TP",
};
const es = (e) => {
  var { userProfile, userNameMaxWidth = 335, onShowVipBtnClick } = e;
  var { avatar = "", name = "" } = userProfile != null ? userProfile : {};
  var o = m.h(Z._);
  var { isVip, isVipExpired, currentVipLevel, vipInfo, expiredVipLevel } =
    P.F(o, (e) => {
      var r;
      return {
        isVip: e.isVip,
        isVipExpired: e.isVipExpired,
        currentVipLevel: e.currentVipLevel,
        expiredVipLevel:
          (r = e.vipInfo) == null ? undefined : r.expiredVipLevel,
        vipInfo: e.vipInfo,
      };
    }) || {};
  var { endTime = 0 } = vipInfo != null ? vipInfo : {};
  var date = ee.i("yyyy.MM.dd", 1000 * endTime);
  var v = endTime > 0 && Date.now() >= 1000 * endTime;
  return s.jsxs("div", {
    className: ea.userInfoWrapper,
    children: [
      s.jsx(ei.e, {
        alt: "avatar",
        src: N.m(avatar, null, {
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
            "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWQxbFh%bkpa$jJSc1kzaz$hMk50$m1oa$-yeDFX$k01-W1Je%1-%mFXRXBx$2xNNW$tTnR%WFpaTWpsMFkw-z$k$nB-TlRCam$%bHBaRmhP-0dKdFZuc*pl$*xxWWpJe*R*cFlTbXBo$jBaelR*aENhR1Z%T1dwa%1qRjNZakkx-kdKd$$ucE1Naz%1$2xk%2NH%kRNW*xh$jA1dldWaEtibHB%T$hSa%1sSm9Za001-W1Je%1-Z*lNalZzWW01%2$rd3pWbnBh$0$sMFlW-zFi$0o1T1hCaWJWSnNa$%0xT%dNemFHa*pi$1F4WTNjO$BRPT0",
        }),
        className: ea.avatar,
      }),
      s.jsxs("div", {
        className: ea.userInfo,
        children: [
          s.jsxs("div", {
            className: ea.userNameWrapper,
            children: [
              s.jsx(G.A, {
                content: name,
                checkOverflow: true,
                children: s.jsx("span", {
                  className: ea.userName,
                  style: {
                    maxWidth: userNameMaxWidth,
                  },
                  children: name,
                }),
              }),
              s.jsx(er.z, {
                level: isVip ? currentVipLevel : expiredVipLevel,
                inactive: isVipExpired,
                className: ea.vipIcon,
                size: 16,
              }),
            ],
          }),
          endTime
            ? s.jsx("div", {
                className: ea.vipEndTimeWrapper,
                children: s.jsx("span", {
                  className: ea.vipEndTime,
                  children: v
                    ? B.Ay.t(
                        "dre_m10n_sub_expired_desc",
                        {
                          date,
                        },
                        "Your subscription has expired on {date}.",
                      )
                    : B.Ay.t(
                        "dre_m10n_credits_title_expire_purchase_another",
                        {
                          date,
                          purchase_another_1_month: s.jsx("span", {
                            className: ea.renewalsBtn,
                            onClick: onShowVipBtnClick,
                            children: B.Ay.t(
                              "dre_m10n_credits_title_expire_purchase_another_btn",
                              {},
                              "Purchase another 1 month",
                            ),
                          }),
                        },
                        "Your subscription will expire on {date}. {purchase_another_1_month}",
                      ),
                }),
              })
            : null,
        ],
      }),
    ],
  });
};
const eo = {
  creditRechargeModal: "creditRechargeModal-GLnMWx",
  activityCreditRechargeModal: "activityCreditRechargeModal-devbGt",
  main: "main-ELVjVx",
  corporatePaymentCreditRechargeModal:
    "corporatePaymentCreditRechargeModal-e1vJIr",
  teamCreditRechargeModal: "teamCreditRechargeModal-FGctkj",
  header: "header-j0p0qP",
  headerDivider: "headerDivider-jRXFgJ",
  closeBtn: "closeBtn-aBv7mE",
  closeBtnIcon: "closeBtnIcon-oRujxl",
  mainTitle: "mainTitle-TzGWEs",
  activityMainTitle: "activityMainTitle-T62lH8",
  content: "content-tZAEVY",
  activityContent: "activityContent-lYIstY",
  arrowDivider: "arrowDivider-J8Pvrd",
  productWrapper: "productWrapper-SeMG0K",
  activityFooter: "activityFooter-cCig6Z",
  productItem: "productItem-Uy_7Gi",
  qrCodeWrapper: "qrCodeWrapper-LSgfAe",
  agreementPrivacy: "agreementPrivacy-w7g9FH",
};
const useEc = (e) => {
  var r;
  var t;
  var n;
  var i;
  var {
    creditScene,
    creditPayManager,
    containerService,
    handleShowHistory,
    handleShowVip,
    onClose,
    source,
    teamProfile,
    targetTeamId,
    teamCreditTradeType,
    creditPriceList,
  } = e;
  var x = p.cQ(containerService, $.sG);
  var w = p.cQ(containerService, J.$);
  var { isOversea } = p.cQ(containerService, v.o);
  var k = p.cQ(containerService, Z._);
  var C = I.o();
  var C_hasLogin = C.hasLogin;
  var userProfile = C_hasLogin ? C.userProfile : undefined;
  var { isVip, vipInfo } =
    (r = P.F(k, (e) => ({
      isVip: e.isVip,
      vipInfo: e.vipInfo,
    }))) != null
      ? r
      : {};
  var { isAgree } =
    (t = P.F(creditPayManager, (e) => ({
      isAgree: e.isAgreeAgreement,
    }))) != null
      ? t
      : {};
  var YRef = c.useRef(
    creditPayManager == null || (i = creditPayManager.currentProduct) == null
      ? undefined
      : i.productId,
  );
  var qRef = c.useRef();
  var { localCredit, teamTotalCredit } = P.F(x, (e) => ({
    localCredit: e.localCredit,
    teamTotalCredit: e.teamTotalCredit,
  }));
  var et =
    (n =
      creditPriceList != null
        ? creditPriceList
        : w == null
          ? undefined
          : w.creditPriceList) != null
      ? n
      : [];
  var {
    activityProducts,
    fuelProducts,
    regularProducts,
    defaultProductId,
    useActivityLayout,
  } = G7({
    creditPriceList: et,
    initialProductId: YRef.current,
    isPersonalRecharge: creditScene !== "team",
    isVip: !!isVip,
  });
  var [eu, setEu] = c.useState(
    defaultProductId != null ? defaultProductId : "",
  );
  var [em, setEm] = c.useState(false);
  var eg = creditScene === "team";
  var sourceProduct = c.useMemo(
    () => et.find((e) => e.productId === eu),
    [et, eu],
  );
  var product = c.useMemo(() => {
    if (
      (sourceProduct == null ? undefined : sourceProduct.productId) &&
      sourceProduct.pmsTrade &&
      (!eg || (sourceProduct.goodsId && sourceProduct.goodsType))
    ) {
      return {
        productId: sourceProduct.productId,
        pmsTrade: sourceProduct.pmsTrade,
        consumablesInfo: {
          consumablesType: eg ? sourceProduct.goodsType : "credit",
          consumablesId: eg ? sourceProduct.goodsId : "credit",
        },
      };
    }
  }, [eg, sourceProduct]);
  var initTradeParams = c.useMemo(() => {
    if (
      eg &&
      targetTeamId &&
      teamCreditTradeType &&
      (sourceProduct == null ? undefined : sourceProduct.productId) &&
      sourceProduct.pmsTrade &&
      sourceProduct.goodsId &&
      sourceProduct.goodsType
    ) {
      return M.y({
        appId: Number(E.R(isOversea)),
        targetTeamId,
        productId: sourceProduct.productId,
        pmsTrade: sourceProduct.pmsTrade,
        amount: sourceProduct.amount,
        tradeType: teamCreditTradeType,
        consumablesId: sourceProduct.goodsId,
        consumablesType: sourceProduct.goodsType,
      });
    }
  }, [isOversea, eg, sourceProduct, targetTeamId, teamCreditTradeType]);
  var ey = KW({
    sourceProduct,
    product,
    eligible: !!(creditPayManager && (!eg || initTradeParams)),
    hasLogin: C_hasLogin,
    isOversea,
  });
  var ef = c.useMemo(
    () => ({
      source,
      productType: sourceProduct == null ? undefined : sourceProduct.goodsType,
      productDisplayName:
        typeof (sourceProduct == null ? undefined : sourceProduct.number) ===
        "number"
          ? "".concat(sourceProduct.number, "积分")
          : undefined,
      orderAmount: sourceProduct == null ? undefined : sourceProduct.amount,
    }),
    [sourceProduct, source],
  );
  var canStartPayment = () => {
    if (!eg) {
      return true;
    }
    var e =
      creditPayManager == null
        ? undefined
        : creditPayManager.purchaseEligibility;
    return (
      e === "allowed" ||
      (e === "renew"
        ? T.A.warning(
            B.Ay.t(
              "web_dre_team_credit_members_only",
              {},
              "仅限有效团队会员购买积分，请开通或续费团队会员",
            ),
          )
        : T.A.warning(
            B.Ay.t(
              "web_dre_team_credit_state_changed",
              {},
              "团队状态已变化，请重新打开积分购买弹窗",
            ),
          ),
      false)
    );
  };
  var ex = (e) => {
    var r = u.p3();
    setEu(e);
    if (creditPayManager != null) {
      creditPayManager.setCurrentProduct(r, e);
    }
    if (creditPayManager != null) {
      creditPayManager.reportPopup({
        action: "select_product",
      });
    }
  };
  c.useEffect(() => {
    if (creditPayManager != null) {
      creditPayManager.reportPopup({
        action: "show",
      });
    }
    T.A.config({
      maxCount: 1,
    });
    return () => {
      if (creditPayManager != null) {
        creditPayManager.disposeCurrentTask();
      }
      T.A.config({
        maxCount: undefined,
      });
    };
  }, []);
  c.useEffect(() => {
    var e;
    setEu(defaultProductId != null ? defaultProductId : "");
    if (
      defaultProductId &&
      creditPayManager &&
      ((e = creditPayManager.currentProduct) == null
        ? undefined
        : e.productId) !== defaultProductId
    ) {
      creditPayManager.setCurrentProduct(u.p3(), defaultProductId);
    }
  }, [creditPayManager, defaultProductId]);
  var ew = _l(eo.creditRechargeModal, {
    [eo.activityCreditRechargeModal]: useActivityLayout,
    [eo.corporatePaymentCreditRechargeModal]: ey,
    [eo.teamCreditRechargeModal]: eg && !isOversea,
  });
  return s.jsxs("div", {
    className: ew,
    children: [
      s.jsxs("div", {
        className: eo.header,
        children: [
          teamProfile
            ? s.jsx(en, {
                profile: teamProfile,
              })
            : s.jsx(es, {
                isOversea,
                isVip,
                vipInfo,
                userProfile,
                onShowVipBtnClick: () => {
                  handleShowVip("click_renew_vip_credits_page");
                },
              }),
          s.jsx(z, {
            credit: teamProfile ? teamTotalCredit : localCredit,
            handleShowHistoryClick: () => {
              handleShowHistory(u.p3());
              if (creditPayManager != null) {
                creditPayManager.reportPopup({
                  action: "check_detail",
                });
              }
            },
            isTeamCredit: teamProfile !== undefined,
          }),
          s.jsx("div", {
            className: eo.headerDivider,
          }),
          s.jsx("div", {
            onClick: onClose,
            className: eo.closeBtn,
            children: s.jsx(S.CX2, {
              className: eo.closeBtnIcon,
            }),
          }),
        ],
      }),
      s.jsxs("div", {
        className: eo.main,
        children: [
          s.jsx("div", {
            className: eo.backgroundShadow,
          }),
          s.jsx("div", {
            className: _l(eo.mainTitle, {
              [eo.activityMainTitle]: useActivityLayout,
            }),
            children: B.Ay.t("web_dre_m10n_buy_credits_title", {}, "积分购买"),
          }),
          s.jsxs("div", {
            className: _l(eo.content, {
              [eo.activityContent]: useActivityLayout,
            }),
            children: [
              useActivityLayout
                ? s.jsx(H, {
                    fuelProducts,
                    activityProducts,
                    regularProducts,
                    selectedProductId: eu,
                    onSelectProduct: ex,
                  })
                : s.jsxs("div", {
                    className: eo.productWrapper,
                    children: [
                      s.jsx(j.pZ, {
                        groups: [M1(regularProducts)],
                        selectedProductId: eu,
                        onSelectProduct: ex,
                        presentation: "dialog",
                        ariaLabel: B.Ay.t(
                          "web_dre_m10n_buy_credits_title",
                          {},
                          "积分购买",
                        ),
                      }),
                      s.jsx(X, {
                        isOversea,
                      }),
                    ],
                  }),
              s.jsx("img", {
                src: N.m(
                  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNSIgaGVpZ2h0PSIxODAiIHZpZXdCb3g9IjAgMCA1IDE4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggb3BhY2l0eT0iMC4zIiBkPSJNMSAwTDAuOTk5OTk2IDg2LjQ2NTNMNCA5MEwwLjk5OTk5NyA5My41MzQ3TDAuOTk5OTkzIDE4MCIgc3Ryb2tlPSJ1cmwoI3BhaW50MF9saW5lYXJfNjg2XzEwNTg4MCkiIHN0cm9rZS13aWR0aD0iMC41Ii8+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXJfNjg2XzEwNTg4MCIgeDE9IjIuNSIgeTE9IjUuNDM4MDciIHgyPSIyLjQ5OTk5IiB5Mj0iMTc0LjU2MiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjRUJGOEZGIiBzdG9wLW9wYWNpdHk9IjAiLz4KPHN0b3Agb2Zmc2V0PSIwLjQ5OTk0IiBzdG9wLWNvbG9yPSIjRUJGOEZGIiBzdG9wLW9wYWNpdHk9IjAuNSIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNFQkY4RkYiIHN0b3Atb3BhY2l0eT0iMCIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+Cjwvc3ZnPgo=",
                  null,
                  {
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
                      "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWQxbFh%bkpa$jJSc1kzaz$hMk50$m1oa$-yeDFX$k01-W1Je%1-%mFXRXBx$2xNNW$tTnR%WFpaTWpsMFkw-z$k$nB-TlRCam$%bHBaRmhP-0dKdFZuc*pl$*xxWWpJe*R*cFlTbXBo$jBaelR*aENhR1Z%T1dwa%1qRjNZakkx-kdKd$$ucE1Naz%1$2xk%2NH%kRNW*xh$jA1dldWaEtibHB%T$hSa%1sSm9Za001-W1Je%1-Z*lNalZzWW01%2$rd3l$blpp$jFaNlpFZHNha3h-$*5s-$-xSndaR%14-W1Je%5%QmFWel$3$ERKc2RWcEhWalJN-mxKNlp$ZEdl$m96$m5vPQ",
                  },
                ),
                className: eo.arrowDivider,
                height: 180,
                width: 5,
                crossOrigin: "anonymous",
              }),
              s.jsxs("div", {
                className: eo.qrCodeWrapper,
                children: [
                  !em &&
                    creditPayManager &&
                    s.jsx(D.rg, {
                      payManager: creditPayManager,
                      onAgree: eg
                        ? () => {
                            if (canStartPayment()) {
                              if (creditPayManager != null) {
                                creditPayManager.updateIsAgreeAgreement(
                                  u.p3(),
                                  true,
                                );
                              }
                            }
                          }
                        : undefined,
                      scanHintPosition: ey ? "top" : "bottom",
                    }),
                  ey
                    ? null
                    : s.jsxs("div", {
                        className: eo.agreementPrivacy,
                        children: [
                          s.jsx("span", {
                            children: isAgree ? "您已同意" : "",
                          }),
                          s.jsx("a", {
                            target: "_blank",
                            rel: "noreferrer",
                            href: N.m(
                              F.y.COMMERCIAL_AGREEMENT(isOversea),
                              null,
                              {
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
                                  "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWQxbFh%bkpa$jJSc1kzaz$hMk50$m1oa$-yeDFX$k01-W1Je%1-%mFXRXBx$2xNNW$tTnR%WFpaTWpsMFkw-z$k$nB-TlRCam$%bHBaRmhP-0dKdFZuc*pl$*xxWWpJe*R*cFlTbXBo$jBaelR*aENhR1Z%T1dwa%1qRjNZakkx-kdKd$$ucE1Naz%1$2xk%2NH%kRNW*xh$jA1dldWaEtibHB%T$hSa%1sSm9Za001-W1Je%1-Z*lNalZzWW01%2$rd3l$blpp$jFaNlpFZHNha3h-$*5s-$-xSndaR%14-W1Je%5%QmFWel$3$ERKc2RWcEhWalJN-mxKNlp$ZEdl$m96$m5vPQ",
                              },
                            ),
                            children: B.Ay.t(
                              "dre_m10n_subscription_page_business_service_agreement",
                              {},
                              "《“即梦”付费服务协议（含自动续费条款）》",
                            ),
                          }),
                        ],
                      }),
                  ey &&
                    creditPayManager &&
                    product &&
                    s.jsx(KR, {
                      payManager: creditPayManager,
                      canStartPayment,
                      product,
                      initTradeParams,
                      orderManagementText: CX.subscriptionPurchaseRecord,
                      tracking: ef,
                      reportContext: {
                        source: W.U0.CreditPopup,
                        teamId: eg ? targetTeamId : undefined,
                        teamType: eg ? W.y3.Team : W.y3.Personal,
                        selectedProduct: W.Jw.Credit,
                        orderAmount:
                          sourceProduct == null
                            ? undefined
                            : sourceProduct.amount,
                        productId:
                          sourceProduct == null
                            ? undefined
                            : sourceProduct.productId,
                      },
                      onEntryShow: () => {
                        if (product) {
                          if (creditPayManager != null) {
                            creditPayManager.reportPopup({
                              action: "show_corporate_transfer",
                              payChannel: "corporate_payment",
                              productId: product.productId,
                              customReportParams: ef,
                            });
                          }
                        }
                      },
                      onEntryClick: () => {
                        if (product) {
                          if (creditPayManager != null) {
                            creditPayManager.reportPopup({
                              action: "click_corporate_transfer",
                              payChannel: "corporate_payment",
                              productId: product.productId,
                              customReportParams: ef,
                            });
                          }
                        }
                      },
                      onEvent: (e) => {
                        var customReportParams = {
                          corporate_payment_type: e.transferMode,
                          corporate_payment_product_type: e.productType,
                          corporate_payment_product_name: e.productDisplayName,
                          corporate_payment_order_amount: e.orderAmount,
                          corporate_payment_order_status: e.payStatus,
                          corporate_payment_source: e.source,
                        };
                        if (
                          e.type === "order_ready" &&
                          e.orderId &&
                          qRef.current !== e.orderId
                        ) {
                          qRef.current = e.orderId;
                          if (creditPayManager != null) {
                            creditPayManager.reportPopup({
                              action: "show_corporate_payment",
                              payChannel: "corporate_payment",
                              orderId: e.orderId,
                              productId: e.productId,
                              customReportParams,
                            });
                          }
                          return;
                        }
                        if (e.type === "confirm_click") {
                          if (creditPayManager != null) {
                            creditPayManager.reportPopup({
                              action: "confirm_corporate_payment",
                              payChannel: "corporate_payment",
                              orderId: e.orderId,
                              productId: e.productId,
                              customReportParams,
                            });
                          }
                        }
                      },
                      onVisibilityChange: (e) => {
                        setEm(e);
                        if (e) {
                          qRef.current = undefined;
                        }
                      },
                      onSuccess: (e) => {
                        if (sourceProduct) {
                          creditPayManager.completeExternalPayment(
                            eg
                              ? {
                                  orderId: e.orderId,
                                }
                              : {
                                  orderId: e.orderId,
                                  payParams: "",
                                  goodsIdStr: sourceProduct.goodsId,
                                  goodsType: sourceProduct.goodsType,
                                },
                            qQ(e),
                          );
                        }
                        onClose();
                      },
                    }),
                ],
              }),
            ],
          }),
          useActivityLayout &&
            s.jsx("div", {
              className: eo.activityFooter,
              children: s.jsx(X, {
                isOversea,
                activityLayout: true,
              }),
            }),
        ],
      }),
    ],
  });
};
const el = (e) => {
  var { mode, modalMap } = e;
  return s.jsx("div", {
    className: "modalSwitcherWrapper-xzJh4q",
    children: s.jsx("div", {
      children: modalMap[mode],
    }),
  });
};
const useEu = (e) => {
  var {
    source,
    creditScene,
    creditPayManager,
    vipPayManager,
    containerService,
    forceTheme,
    onClose,
    onPaymentSuccess,
    teamProfile,
    targetTeamId,
    teamCreditTradeType,
    creditPriceList,
  } = e;
  var f = p.cQ(containerService, v.o);
  var A = p.cQ(containerService, $.sG);
  var { isOversea } = f;
  var [N, setN] = c.useState("CreditRecharge");
  var onClose_1 = () => {
    vipPayManager.disposeCurrentTask();
    setN("CreditRecharge");
  };
  var handleShowVip = (source_1) => {
    if (g.c(containerService, h.u.VIP_MODAL)) {
      onClose();
    } else {
      ed.iT({
        containerService,
        forceTheme,
        onPersonalPaymentSuccess: onPaymentSuccess,
        reportParam: {
          source: source_1,
          customReportParams: vipPayManager.commercialCustomReportParams,
        },
      });
    }
  };
  var M = w.Or(
    "SwitchableDomesticCreditModal",
    (e) =>
      x._(function* () {
        setN("CreditHistory");
        if (!teamProfile) {
          yield Promise.all([
            A.changeHistoryType(e, $.Ce.NOT_LIMITED),
            A.syncHistoryData(e, $.Ce.CONSUMED),
            A.syncHistoryData(e, $.Ce.ISSUED),
          ]);
        }
      })(),
    "handleShowHistory",
  );
  var E = c.useMemo(
    () => ({
      CreditRecharge: s.jsx(useEc, {
        source,
        creditScene,
        creditPayManager,
        containerService,
        isOverSea: isOversea,
        handleShowHistory: M,
        handleShowVip,
        onClose,
        teamProfile,
        targetTeamId,
        teamCreditTradeType,
        creditPriceList,
      }),
      CreditHistory: teamProfile
        ? s.jsx(C.i, {
            containerService,
            queryScope: R.x8.TeamPool,
            reportParams: n._(
              {
                team_type: "team",
              },
              targetTeamId
                ? {
                    team_id: targetTeamId,
                  }
                : {},
            ),
            onClose: onClose_1,
          })
        : s.jsx(k.T7, {
            onClose: onClose_1,
            containerService,
            forceTheme,
            showBackBtn: true,
          }),
    }),
    [
      containerService,
      creditScene,
      creditPayManager,
      creditPriceList,
      forceTheme,
      onClose_1,
      M,
      handleShowVip,
      isOversea,
      onClose,
      onPaymentSuccess,
      source,
      teamProfile,
      teamCreditTradeType,
      targetTeamId,
    ],
  );
  return s.jsx(el, {
    mode: N,
    modalMap: E,
  });
};
function ev(e) {
  const { price } = e;
  const t = eg.O(price);
  if (t === undefined) {
    return null;
  }
  return s.jsxs("del", {
    className: "originalPrice-cZZw_G",
    children: [price.currencyTips, eg.Q(t)],
  });
}
const useEb = (e) => {
  var {
    creditPriceList,
    defaultProductId,
    className,
    productItemClassName,
    disabled = false,
    showOriginalPrice = false,
    columnCount = 3,
    selectedProductId,
    respectProductDisabled = false,
    ariaLabel,
    formatPrice,
    formatCredits,
    getPriceDecoration,
    onSelectProduct,
  } = e;
  var [_, set_] = c.useState(defaultProductId != null ? defaultProductId : "");
  var f = selectedProductId != null ? selectedProductId : _;
  return s.jsx("div", {
    className: _l("productList-ZFBxcX", className, {
      "sixColumnProductList-q7AHv9": columnCount === 6,
    }),
    "data-credit-product-layout": "standard",
    role: ariaLabel ? "radiogroup" : undefined,
    "aria-label": ariaLabel,
    children: creditPriceList.map((price) => {
      var r;
      var t;
      var n =
        disabled || (respectProductDisabled && price.disablePurchase === true);
      var c =
        getPriceDecoration == null ? undefined : getPriceDecoration(price);
      var l =
        !(price == null ? undefined : price.priceTips) ||
        (price == null || (r = price.priceTips) == null
          ? undefined
          : r.includes(price.currencyTips))
          ? (price.amount / 100).toFixed(2)
          : price == null
            ? undefined
            : price.priceTips;
      return s.jsxs(
        ariaLabel ? "button" : "div",
        {
          className: _l("productItemWrapper-EbGrux", productItemClassName, {
            "selected-u_Fvdd": price.productId === f,
            "disabled-Pbm2mk": n,
            "nativeProductItem-npx_PB": !!ariaLabel,
          }),
          "data-credit-product-variant": "standard",
          type: ariaLabel ? "button" : undefined,
          role: ariaLabel ? "radio" : undefined,
          "aria-checked": ariaLabel ? price.productId === f : undefined,
          disabled: ariaLabel ? n : undefined,
          tabIndex: ariaLabel ? (price.productId === f ? 0 : -1) : undefined,
          "aria-disabled": n,
          onKeyDown: ariaLabel
            ? (e) => {
                var r;
                var t;
                var n = ["ArrowRight", "ArrowDown"].includes(e.key)
                  ? 1
                  : ["ArrowLeft", "ArrowUp"].includes(e.key)
                    ? -1
                    : 0;
                if (n || e.key === "Home" || e.key === "End") {
                  e.preventDefault();
                  var i = Array.from(
                    (r =
                      (t = e.currentTarget.parentElement) == null
                        ? undefined
                        : t.querySelectorAll(
                            'button[role="radio"]:not(:disabled)',
                          )) != null
                      ? r
                      : [],
                  );
                  var a = i.indexOf(e.currentTarget);
                  var s =
                    e.key === "Home"
                      ? i[0]
                      : e.key === "End"
                        ? i.at(-1)
                        : i[(a + n + i.length) % i.length];
                  if (s != null) {
                    s.focus();
                  }
                  if (s != null) {
                    s.click();
                  }
                }
              }
            : undefined,
          onClick: () => {
            var r;
            if (
              !(disabled || (respectProductDisabled && price.disablePurchase))
            ) {
              if (selectedProductId === undefined) {
                set_(price.productId);
              }
              onSelectProduct(
                price.productId,
                (r = price.number) == null ? undefined : r.toString(),
              );
            }
          },
          children: [
            (c == null ? undefined : c.badgeText) &&
              s.jsx("span", {
                className: "discountBadge-a2i1V4",
                children: c.badgeText,
              }),
            s.jsxs("div", {
              className: "productItemCredit-teqH0h",
              children: [
                s.jsx(L.mC1, {
                  className: "productItemCreditIcon-tOWltt",
                }),
                formatCredits
                  ? formatCredits(price)
                  : (t = price.number) == null
                    ? undefined
                    : t.toLocaleString("en-US"),
              ],
            }),
            s.jsxs("div", {
              className: "productItemAmount-KfQcgD",
              children: [
                s.jsx("span", {
                  className: "produceItemCurrencyTips-jjBlrz",
                  children: price.currencyTips,
                }),
                s.jsx("span", {
                  children: formatPrice ? formatPrice(price) : eg.Q(l),
                }),
                (c == null ? undefined : c.originalPriceText)
                  ? s.jsx("del", {
                      className: "originalPrice-v5aHmy",
                      children: c.originalPriceText,
                    })
                  : showOriginalPrice &&
                    s.jsx(ev, {
                      price,
                    }),
              ],
            }),
          ],
        },
        price.productId,
      );
    }),
  });
};
const e_ = "creditRechargeModal-HhIjlk";
const ey = "catalogModal-qDpS1G";
const ef = "header-oucNs6";
const eA = "closeBtn-mTIpOf";
const ex = "productList-uD2qRe";
const ew = "nativeCloseBtn-LkEJKR";
const eR = "catalogStatus-BvbcDA";
const ek = "headerTitle-vaUO01";
const eC = "closeBtnIcon-Ddy6MJ";
const eN = {
  userInfoWrapper: "userInfoWrapper-ZhbGDd",
  userInfoContent: "userInfoContent-fhI7mh",
  avatar: "avatar-q9GqaV",
  userName: "userName-u8r_07",
  creditIcon: "creditIcon-UEs_qm",
  listContent: "listContent-rWbuOx",
  listContainer: "listContainer-SBBX7Y",
  listTitle: "listTitle-xWcAxN",
  activityLayout: "activityLayout-GZ8MJW",
};
const useES = (e) => {
  var r;
  var t;
  var n;
  var {
    userNameMaxWidth = 250,
    handleShowHistoryClick,
    activityLayout = false,
  } = e;
  var l = m.h(Z._);
  var u = eT.S();
  var { userProfile } = I.o();
  var { avatar = "", name = "" } = userProfile != null ? userProfile : {};
  var { isVip, isVipExpired, currentVipLevel, vipInfo, expiredVipLevel } =
    P.F(l, (e) => {
      var r;
      return {
        isVip: e.isVip,
        isVipExpired: e.isVipExpired,
        currentVipLevel: e.currentVipLevel,
        expiredVipLevel:
          (r = e.vipInfo) == null ? undefined : r.expiredVipLevel,
        vipInfo: e.vipInfo,
      };
    }) || {};
  var { endTime = 0 } = vipInfo != null ? vipInfo : {};
  var x = ee.i("yyyy-MM-dd", 1000 * endTime);
  var w = ee.i(
    "yyyy-MM-dd",
    ((r =
      vipInfo == null || (t = vipInfo.currentAutoRenewPlan) == null
        ? undefined
        : t.nextRenewalTime) != null
      ? r
      : 0) * 1000,
  );
  var R =
    (vipInfo == null ? undefined : vipInfo.currentAutoRenewPlan) &&
    (vipInfo == null || (n = vipInfo.currentAutoRenewPlan) == null
      ? undefined
      : n.level) === (vipInfo == null ? undefined : vipInfo.curVipLevel);
  var k = c.useMemo(
    () => [
      R
        ? {
            title: B.Ay.t(
              "web_dre_m10n_subscription_page_next_billing_day",
              {},
              "Renews on",
            ),
            content: w,
          }
        : undefined,
      !R && endTime
        ? {
            title: B.Ay.t(
              "web_dre_m10n_subscription_page_expire_time",
              {},
              "Expires on",
            ),
            content: x,
          }
        : undefined,
      {
        title: B.Ay.t(
          "web_dre_m10n_subscription_page_credits_left",
          {},
          "Credits left",
        ),
        content: s.jsxs("div", {
          onClick: handleShowHistoryClick,
          className: eN.creditIcon,
          children: [
            s.jsx(L.mC1, {
              size: 16,
            }),
            u != null ? u : 0,
          ],
        }),
      },
    ],
    [endTime, x, handleShowHistoryClick, R, u, w],
  );
  return s.jsxs("div", {
    className: _l(eN.userInfoWrapper, activityLayout && eN.activityLayout),
    children: [
      s.jsxs("div", {
        className: eN.userInfoContent,
        children: [
          s.jsx(ei.e, {
            enableClick: false,
            alt: "avatar",
            src: N.m(avatar, null, {
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
                "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWQxbFh%bkpa$jJSc1kzaz$hMk50$m1oa$-yeDFX$k01-W1Je%1-%mFXRXBx$2xNNW$tTnR%WFpaTWpsMFkw-z$k$nB-TlRCam$%bHBaRmhP-0dKdFZuc*pl$*xxWWpJe*R*cFlTbXBo$jBaelR*aENhR1Z%T1dwa%1qRjNZakkx-kdKd$$ucE1Naz%1$2xk%2NH%kRNW*xh$jA1dldWaEtibHB%T$hSa%1sSm9Za001-W1Je%1-Z*lNalZzWW01%2$rd3lP$Eph$0$wNldsZEZkR1JZ$*14amF%RndZbTFhZ*t3eWJI$mFSM$kw$Ec1%2$t$khSbmxhTTFaNg",
            }),
            className: eN.avatar,
          }),
          s.jsx(G.A, {
            content: name,
            checkOverflow: true,
            children: s.jsx("span", {
              className: eN.userName,
              style: {
                maxWidth: userNameMaxWidth,
              },
              children: name,
            }),
          }),
          s.jsx(er.z, {
            level: isVip ? currentVipLevel : expiredVipLevel,
            inactive: isVipExpired,
            className: eN.vipIcon,
            size: 16,
          }),
        ],
      }),
      s.jsx("div", {
        className: eN.listContent,
        children: k.map(
          (e) =>
            e &&
            s.jsxs(
              "div",
              {
                className: eN.listContainer,
                children: [
                  s.jsx("div", {
                    className: eN.listTitle,
                    children: e.title,
                  }),
                  s.jsx("div", {
                    className: eN.listContent,
                    children: e.content,
                  }),
                ],
              },
              e.title,
            ),
        ),
      }),
    ],
  });
};
const eP = {
  activityProductIds: new Set([
    "dreamina.credits.point.recharge.7",
    "dreamina.credits.point.recharge.8",
    "dreamina.credits.point.recharge.9",
    "dreamina.credits.point.recharge.10",
    "dreamina.credits.point.recharge.11",
    "dreamina.credits.point.recharge.12",
  ]),
};
function ej(e, r) {
  let t;
  const n =
    arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : eP;
  const activityProducts = [];
  const regularProducts = [];
  for (const s of e) {
    (n.activityProductIds.has(s.productId)
      ? activityProducts
      : regularProducts
    ).push(s);
  }
  const o = e.find((e) => e.productId === r && !e.disablePurchase);
  return {
    activityProducts,
    regularProducts,
    useActivityLayout: activityProducts.length > 0,
    selectedProductId:
      (t = o != null ? o : e.find((e) => !e.disablePurchase)) == null
        ? undefined
        : t.productId,
  };
}
function eM(e) {
  let r;
  const t = (r = e.priceTips) != null ? r : (e.amount / 100).toFixed(2);
  return em(t, {
    symbol: "",
    precision: 2 * !!t.includes("."),
  }).format();
}
function eE(e, r) {
  if (e.number === undefined) {
    return "";
  }
  return new Intl.NumberFormat(r).format(e.number);
}
function eF(e) {
  let r;
  const e_originPriceAmount = e.originPriceAmount;
  const a =
    typeof e_originPriceAmount === "number" &&
    Number.isFinite(e_originPriceAmount) &&
    e_originPriceAmount > e.amount &&
    e.amount >= 0;
  const s = a
    ? ((r = e.originPriceAmountTips) == null ? undefined : r.trim()) ||
      eM(
        i._(n._({}, e), {
          amount: e_originPriceAmount,
          priceTips: undefined,
        }),
      )
    : e_originPriceAmount === undefined
      ? e.originPriceTips
      : undefined;
  const num = a
    ? Number(((1 - e.amount / e_originPriceAmount) * 100).toPrecision(3))
    : undefined;
  return {
    originalPriceText: s
      ? s.includes(e.currencyTips)
        ? s
        : "".concat(e.currencyTips).concat(s)
      : undefined,
    badgeText:
      num !== undefined
        ? B.Ay.t(
            "web_credits_sku_tag_discount",
            {
              num,
            },
            "{num}% OFF",
          )
        : undefined,
  };
}
function eI(e, r) {
  return i._(
    n._(
      {
        id: e.productId,
        creditsText: eE(e, r),
        pricePrefixText: e.currencyTips,
        priceText: "".concat(e.currencyTips).concat(eM(e)),
      },
      eF(e),
    ),
    {
      disabled: e.disablePurchase === true,
    },
  );
}
const useEB = (e) => {
  var r;
  var t;
  var n;
  var i;
  var a;
  var {
    creditPayManager,
    containerService,
    handleShowHistory,
    onClose,
    useGroupedProducts,
    onPaymentActiveChange,
  } = e;
  var _ = p.cQ(containerService, J.$);
  var { isOversea } = p.cQ(containerService, v.o);
  var { currentProduct, isVipExpiredError, isOrderLoading } =
    (r = P.F(creditPayManager, (e) => ({
      currentProduct: e.currentProduct,
      isVipExpiredError: e.isVipExpiredError,
      isOrderLoading: e.isOrderLoading,
    }))) != null
      ? r
      : {};
  var w = useGroupedProducts
    ? (t =
        creditPayManager == null
          ? undefined
          : creditPayManager.creditPriceList) != null
      ? t
      : []
    : _.creditPriceList;
  var R = ej(w, currentProduct == null ? undefined : currentProduct.productId);
  var k = !!(useGroupedProducts && R.useActivityLayout);
  var disabled = !!(
    isVipExpiredError ||
    isOrderLoading ||
    (useGroupedProducts && (!currentProduct || currentProduct.disablePurchase))
  );
  var N = (e, r) => {
    if (
      !isOrderLoading &&
      (!useGroupedProducts ||
        w.some((r) => r.productId === e && !r.disablePurchase))
    ) {
      var t = u.p3();
      if (creditPayManager != null) {
        creditPayManager.setCurrentProduct(t, e);
      }
      if (creditPayManager != null) {
        creditPayManager.reportPopup({
          action: "select_product",
        });
      }
    }
  };
  c.useEffect(() => {
    var e;
    var r;
    var t = u.p3();
    if (creditPayManager != null) {
      creditPayManager.reportPopup({
        action: "show",
      });
    }
    if (
      !useGroupedProducts ||
      (creditPayManager == null ? undefined : creditPayManager.currentProduct)
    ) {
      if (creditPayManager != null) {
        creditPayManager.setCurrentProduct(
          t,
          (e =
            creditPayManager == null ||
            (r = creditPayManager.currentProduct) == null
              ? undefined
              : r.productId) != null
            ? e
            : "",
        );
      }
    }
    T.A.config({
      maxCount: 1,
    });
    return () => {
      T.A.config({
        maxCount: undefined,
      });
    };
  }, []);
  var M =
    (n = currentProduct == null ? undefined : currentProduct.priceTips) != null
      ? n
      : (
          ((i = currentProduct == null ? undefined : currentProduct.amount) !=
          null
            ? i
            : 0) / 100
        ).toFixed(2);
  return s.jsxs("div", {
    className: _l(e_, useGroupedProducts && ey, k && "activityModal-_HHG4D"),
    children: [
      s.jsxs("div", {
        className: ef,
        children: [
          s.jsx("div", {
            className: ek,
            children: B.Ay.t(
              "web_dre_m10n_buy_credits_title",
              {},
              "Recharge Credits",
            ),
          }),
          useGroupedProducts
            ? s.jsx("button", {
                type: "button",
                onClick: onClose,
                className: _l(eA, ew),
                "aria-label": B.Ay.t("dreamina_web_common_close", {}, "Close"),
                children: s.jsx(S.CX2, {
                  className: eC,
                  "aria-hidden": "true",
                }),
              })
            : s.jsx("div", {
                onClick: onClose,
                className: eA,
                children: s.jsx(S.CX2, {
                  className: eC,
                }),
              }),
        ],
      }),
      s.jsx(useES, {
        handleShowHistoryClick: () => {
          handleShowHistory(u.p3());
          if (creditPayManager != null) {
            creditPayManager.reportPopup({
              action: "check_detail",
            });
          }
        },
        activityLayout: k,
      }),
      s.jsx("div", {
        className: "line-lVwP6L",
      }),
      s.jsxs("div", {
        className: "main-TxGMMi",
        children: [
          useGroupedProducts && w.length === 0
            ? s.jsx("div", {
                className: eR,
                role: "status",
                children: B.Ay.t(
                  "genetate_sidebar_search_empty_text",
                  {},
                  "No results found",
                ),
              })
            : useGroupedProducts && R.useActivityLayout
              ? s.jsx(j.pZ, {
                  className: ex,
                  classes: {
                    CommerceCreditProductSelector_heading:
                      "activityHeading-u_fNlL",
                    CommerceCreditProductSelector_title: "activityTitle-kukNxs",
                    CommerceCreditProductSelector_description:
                      "activityDescription-BdUBHa",
                    CommerceCreditProductSelector_grid: "activityGrid-Lr9G8F",
                    CommerceCreditProductSelector_card: "activityCard-yrVws2",
                    CommerceCreditProductSelector_cardHeader:
                      "activityCardHeader-SbjZdU",
                    CommerceCreditProductSelector_body:
                      "activityCardBody-Y9zLKz",
                    CommerceCreditProductSelector_credits:
                      "activityCredits-TbKX2V",
                    CommerceCreditProductSelector_priceRow:
                      "activityPriceRow-z26Y5Q",
                    CommerceCreditProductSelector_footer:
                      "activityCardFooter-Xq15vF",
                    CommerceCreditProductSelector_hint: "activityHint-kThfnE",
                  },
                  groups: (function (e, r) {
                    const t =
                      arguments.length > 2 && arguments[2] !== undefined
                        ? arguments[2]
                        : eP;
                    const { activityProducts, regularProducts } = ej(
                      e,
                      undefined,
                      t,
                    );
                    const a = [];
                    if (activityProducts.length) {
                      a.push({
                        id: "activity",
                        variant: "promotion",
                        columns: 3,
                        title: ((e, r) => {
                          const { beginTime, endTime } = e != null ? e : {};
                          if (
                            beginTime &&
                            endTime &&
                            Number.isFinite(beginTime) &&
                            Number.isFinite(endTime) &&
                            !(beginTime > endTime)
                          ) {
                            const i = new Intl.DateTimeFormat(r, {
                              month: "short",
                              day: "numeric",
                            });
                            return B.Ay.t(
                              "web_credits_power_credits_desc1",
                              {
                                str1: i.format(new Date(1000 * beginTime)),
                                str2: i.format(new Date(1000 * endTime)),
                              },
                              "Power credits · Up to 5 purchases · Available {str1} to {str2}",
                            );
                          }
                        })(activityProducts[0], r),
                        description: B.Ay.t(
                          "web_credits_power_credits_desc2",
                          {
                            num: 3,
                          },
                          "Valid for {num} months after purchase. Purchased credits can’t be redeemed for cash.",
                        ),
                        items: activityProducts.map((e) => eI(e, r)),
                      });
                    }
                    if (regularProducts.length) {
                      a.push({
                        id: "regular",
                        variant: "standard",
                        columns: 3,
                        title: B.Ay.t(
                          "web_credits_regular_credits_desc1",
                          {},
                          "Flexible credits · Unlimited purchases",
                        ),
                        description: B.Ay.t(
                          "web_credits_regular_credits_desc2",
                          {
                            num: 2,
                          },
                          "Valid for {num} years after purchase. Purchased credits can’t be redeemed for cash.",
                        ),
                        items: regularProducts.map((e) => eI(e, r)),
                      });
                    }
                    return a;
                  })(w, B.Ay.language),
                  selectedProductId:
                    currentProduct == null
                      ? undefined
                      : currentProduct.productId,
                  onSelectProduct: N,
                  disabled: isOrderLoading,
                  presentation: "dialog",
                  ariaLabel: B.Ay.t(
                    "web_dre_m10n_buy_credits_title",
                    {},
                    "Buy credits",
                  ),
                })
              : s.jsx(useEb, {
                  defaultProductId:
                    creditPayManager == null ||
                    (a = creditPayManager.currentProduct) == null
                      ? undefined
                      : a.productId,
                  onSelectProduct: N,
                  creditPriceList: w,
                  productItemClassName: "productItem-d45PVj",
                  className: ex,
                  disabled: isOrderLoading,
                  selectedProductId: useGroupedProducts
                    ? currentProduct == null
                      ? undefined
                      : currentProduct.productId
                    : undefined,
                  respectProductDisabled: useGroupedProducts,
                  formatPrice: useGroupedProducts ? eM : undefined,
                  getPriceDecoration: useGroupedProducts ? eF : undefined,
                  formatCredits: useGroupedProducts
                    ? (e) => eE(e, B.Ay.language)
                    : undefined,
                  ariaLabel: useGroupedProducts
                    ? B.Ay.t(
                        "web_dre_m10n_buy_credits_title",
                        {},
                        "Buy credits",
                      )
                    : undefined,
                }),
          s.jsx(I_1, {
            type: "secondary",
            className: _l("purchaseBtn-jsYDDs", {
              "disabled-lxxSaF": isVipExpiredError,
            }),
            disabled,
            loading: isOrderLoading,
            PrevDiv: s.jsx(s.Fragment, {
              children: B.Ay.t(
                "dre_m10n_subscribe_purchase_btn",
                {
                  price: s.jsxs("div", {
                    className: "price-H3J6kJ",
                    children: [
                      s.jsx("span", {
                        className: "currencyTips-ZWSjgM",
                        children:
                          currentProduct == null
                            ? undefined
                            : currentProduct.currencyTips,
                      }),
                      useGroupedProducts && currentProduct
                        ? eM(currentProduct)
                        : em(M, {
                            symbol: "",
                            precision: 2 * !!M.includes("."),
                          }).format(),
                    ],
                  }),
                },
                "Purchase ({price})",
              ),
            }),
            onClick: () => {
              if (!disabled) {
                var e = u.p3();
                if (onPaymentActiveChange != null) {
                  onPaymentActiveChange(true);
                }
                if (creditPayManager != null) {
                  creditPayManager
                    .purchase(e)
                    .catch(() => {
                      if (onPaymentActiveChange != null) {
                        onPaymentActiveChange(false);
                      }
                      T.A.error(
                        B.Ay.t(
                          "dre_m10n_purchase_error_general",
                          {},
                          "Something went wrong. Try again later.",
                        ),
                      );
                    })
                    .finally(() => {
                      if (
                        !(
                          creditPayManager.orderInfo ||
                          onPaymentActiveChange == null
                        )
                      ) {
                        onPaymentActiveChange(false);
                      }
                    });
                }
                if (creditPayManager != null) {
                  creditPayManager.reportPopup({
                    action: "click_purchase",
                  });
                }
              }
            },
          }),
          s.jsx(X, {
            isOversea,
            overseaActivityLayout: k,
          }),
        ],
      }),
    ],
  });
};
const useE = (e) => {
  var {
    creditPayManager,
    vipPayManager,
    containerService,
    forceTheme,
    onClose,
    useGroupedProducts,
    onPaymentActiveChange,
    onReturnToCatalog,
  } = e;
  var m = p.cQ(containerService, v.o);
  var h = p.cQ(containerService, $.sG);
  var { isOversea } = m;
  var [b, setB] = c.useState("CreditRecharge");
  var y = () => {
    vipPayManager.disposeCurrentTask();
    creditPayManager.disposeCurrentTask();
    setB("CreditRecharge");
    if (onReturnToCatalog != null) {
      onReturnToCatalog();
    }
  };
  var handleShowHistory = w.Or(
    "SwitchableOverseaCreditModal",
    (e) =>
      x._(function* () {
        setB("CreditHistory");
        yield Promise.all([
          h.changeHistoryType(e, $.Ce.NOT_LIMITED),
          h.syncHistoryData(e, $.Ce.CONSUMED),
          h.syncHistoryData(e, $.Ce.ISSUED),
        ]);
      })(),
    "handleShowHistory",
  );
  c.useEffect(() => {
    var e = creditPayManager.onGenerateOrderSuccess(() => {
      setB("OrderStatusMode");
    });
    var t = useGroupedProducts
      ? creditPayManager.onGenerateOrderError(() => {
          if (onPaymentActiveChange == null) {
            return undefined;
          }
          return onPaymentActiveChange(false);
        })
      : undefined;
    return () => {
      e.dispose();
      if (t != null) {
        t.dispose();
      }
    };
  }, [creditPayManager, onPaymentActiveChange, useGroupedProducts]);
  var A = {
    CreditRecharge: s.jsx(useEB, {
      creditPayManager,
      containerService,
      isOverSea: isOversea,
      handleShowHistory,
      onClose,
      useGroupedProducts,
      onPaymentActiveChange,
    }),
    CreditHistory: s.jsx(k.T7, {
      onClose: y,
      containerService,
      forceTheme,
      showBackBtn: true,
    }),
    OrderStatusMode: s.jsx(N_1, {
      containerService,
      payManager: creditPayManager,
      showBackBtn: true,
      onClose,
      onBack: y,
      onPayAgain: () =>
        x._(function* () {
          const e = u.p3();
          if (onPaymentActiveChange != null) {
            onPaymentActiveChange(true);
          }
          try {
            yield creditPayManager.purchase(e);
          } catch (e) {
            if (onPaymentActiveChange != null) {
              onPaymentActiveChange(false);
            }
          }
        })(),
    }),
  };
  return s.jsx(el, {
    mode: b,
    modalMap: A,
  });
};
const eJ = "focusContainer-bT6emq";
const eZ = "standaloneLightTheme-mFYPFA";
const eO = "standaloneDarkTheme-HwX2PC";
class eV {
  refresh() {
    return x
      ._(function* () {
        if (this.isCurrent()) {
          const e = ++this.requestVersion;
          this.loading = true;
          this.pendingProducts = undefined;
          this.pendingError = false;
          this.rememberSelection();
          if (!this.paymentActive) {
            this.releaseManager();
            this.status = "loading";
            this.dependencies.onChange();
          }
          try {
            const r = yield this.dependencies.loadProducts();
            if (!this.isCurrent() || e !== this.requestVersion) {
              return;
            }
            if (this.paymentActive) {
              this.pendingProducts = r;
            } else {
              this.apply(r);
            }
          } catch (r) {
            if (!this.isCurrent() || e !== this.requestVersion) {
              return;
            }
            if (this.paymentActive) {
              this.pendingError = true;
            } else {
              this.status = "error";
              this.dependencies.onChange();
            }
          } finally {
            if (e === this.requestVersion) {
              this.loading = false;
            }
          }
        }
      })
      .call(this);
  }
  setPaymentActive(e) {
    if (this.isCurrent()) {
      this.paymentActive = e;
      if (!e) {
        this.applyPending();
      }
    }
  }
  returnToCatalog() {
    if (this.isCurrent()) {
      this.paymentActive = false;
      if (!this.applyPending()) {
        if (this.loading) {
          this.rememberSelection();
          this.releaseManager();
          this.status = "loading";
          this.dependencies.onChange();
        } else {
          this.refresh();
        }
      }
    }
  }
  dispose() {
    if (!this.disposed) {
      this.disposed = true;
      this.requestVersion++;
      this.pendingProducts = undefined;
      this.releaseManager();
    }
  }
  isCurrent() {
    return !this.disposed && this.dependencies.isCurrent();
  }
  rememberSelection() {
    let e;
    let r;
    let t;
    this.selectedProductId =
      (e =
        (t = this.manager) == null || (r = t.currentProduct) == null
          ? undefined
          : r.productId) != null
        ? e
        : this.selectedProductId;
  }
  releaseManager() {
    let e;
    if ((e = this.manager) != null) {
      e.dispose();
    }
    this.manager = undefined;
  }
  apply(e) {
    this.rememberSelection();
    this.releaseManager();
    this.manager = this.dependencies.createManager(e, this.selectedProductId);
    this.status = "ready";
    this.revision++;
    this.dependencies.onChange();
  }
  applyPending() {
    if (this.pendingProducts) {
      const e = this.pendingProducts;
      this.pendingProducts = undefined;
      this.apply(e);
      return true;
    }
    return (
      !!this.pendingError &&
      ((this.pendingError = false),
      this.releaseManager(),
      (this.status = "error"),
      this.dependencies.onChange(),
      true)
    );
  }
  constructor(e) {
    this.dependencies = e;
    this.status = "loading";
    this.revision = 0;
    this.disposed = false;
    this.requestVersion = 0;
    this.loading = false;
    this.paymentActive = false;
    this.pendingError = false;
    this.selectedProductId = e.initialProductId;
  }
}
function useEH(e) {
  const {
    containerService,
    vipPayManager,
    onClose,
    sessionRef,
    defaultProductId,
    reportParam,
    onSuccess,
    forceTheme,
  } = e;
  const [, hDispatch] = c.useReducer((e) => e + 1, 0);
  const sessionRef_current = sessionRef.current;
  c.useEffect(() => {
    var e;
    var t = p.cQ(containerService, ez.F);
    var s = p.cQ(containerService, $.sG);
    var c = p.cQ(containerService, eL.aH);
    var d = () => {
      var e;
      var r;
      var n = t.getSnapshot();
      var i = s.getCurrentAccountSnapshot();
      return JSON.stringify([
        n.hasLogin,
        n.userId,
        n.uniqueId,
        (e = n.userProfile) == null ? undefined : e.uid,
        (r = n.userProfile) == null ? undefined : r.region,
        i.account.accountKey,
        i.version,
      ]);
    };
    var m = d();
    var isCurrent = () =>
      t.getSnapshot().hasLogin &&
      s.currentAccount.accountType === "personal" &&
      d() === m;
    var v = false;
    var b = new eV({
      initialProductId: defaultProductId,
      isCurrent,
      onChange: () => {
        if (!v) {
          hDispatch();
        }
      },
      loadProducts: () =>
        x._(function* () {
          let e;
          const r = yield c.fetchCreditPriceList(u.p3(), {
            goodsTypes: ["credit"],
          });
          if (!r.ok) {
            throw Error("Credit catalog request failed");
          }
          if ((e = r.value.priceList) != null) {
            return e;
          }
          return [];
        })(),
      createManager: (e, t) => {
        var n = A.N({
          containerService,
          reportParams: reportParam,
          creditRechargeContext: {
            creditScene: "personal",
            creditPriceList: e,
          },
        });
        n.setRefreshCreditGoodsAfterPayment(false);
        var selectedProductId = ej(e, t).selectedProductId;
        if (selectedProductId) {
          n.setCurrentProduct(u.p3(), selectedProductId);
        }
        n.onSuccess(() => {
          if (isCurrent() && !v) {
            Promise.resolve(onSuccess == null ? undefined : onSuccess()).catch(
              () => undefined,
            );
            b.refresh();
          }
        });
        return n;
      },
    });
    sessionRef.current = b;
    var _ = () => {
      if (!isCurrent()) {
        b.dispose();
        onClose();
      }
    };
    var y = (e = t.subscribe) == null ? undefined : e.call(t, _);
    var f = eD.mJ(d, _);
    if (isCurrent()) {
      b.refresh();
    } else {
      onClose();
    }
    return () => {
      v = true;
      if (y != null) {
        y();
      }
      f();
      b.dispose();
      if (sessionRef.current === b) {
        sessionRef.current = undefined;
      }
    };
  }, [
    containerService,
    onClose,
    defaultProductId,
    onSuccess,
    reportParam,
    sessionRef,
  ]);
  if (sessionRef_current == null ? undefined : sessionRef_current.manager) {
    return s.jsx(
      useE,
      {
        creditPayManager: sessionRef_current.manager,
        vipPayManager,
        containerService,
        forceTheme,
        source: reportParam.source,
        onClose,
        useGroupedProducts: true,
        onPaymentActiveChange: (e) => sessionRef_current.setPaymentActive(e),
        onReturnToCatalog: () => sessionRef_current.returnToCatalog(),
      },
      sessionRef_current.revision,
    );
  }
  return s.jsxs("div", {
    className: _l(e_, ey),
    "aria-busy":
      (sessionRef_current == null ? undefined : sessionRef_current.status) !==
      "error",
    children: [
      s.jsxs("div", {
        className: ef,
        children: [
          s.jsx("h2", {
            className: ek,
            children: B.Ay.t(
              "web_dre_m10n_buy_credits_title",
              {},
              "Buy credits",
            ),
          }),
          s.jsx("button", {
            type: "button",
            className: _l(eA, ew),
            "aria-label": B.Ay.t("dreamina_web_common_close", {}, "Close"),
            onClick: onClose,
            children: s.jsx(S.CX2, {
              "aria-hidden": "true",
            }),
          }),
        ],
      }),
      s.jsx("div", {
        className: eR,
        role: "status",
        children:
          (sessionRef_current == null
            ? undefined
            : sessionRef_current.status) === "error"
            ? s.jsxs(s.Fragment, {
                children: [
                  s.jsx("p", {
                    children: B.Ay.t(
                      "dre_m10n_purchase_error_general",
                      {},
                      "Something went wrong. Try again later.",
                    ),
                  }),
                  s.jsx("button", {
                    type: "button",
                    onClick: () => {
                      sessionRef_current.refresh();
                    },
                    children: B.Ay.t(
                      "dre_m10n_payment_details_retry_btn",
                      {},
                      "Retry",
                    ),
                  }),
                ],
              })
            : B.Ay.t("web_new_content_loading", {}, "Loading..."),
      }),
    ],
  });
}
const eQ = (e) => {
  var {
    containerService,
    reportParam,
    creditScene,
    targetTeamId,
    teamCreditTradeType,
    teamProfile,
    onSuccess,
    defaultProductId,
    onAfterClose,
    forceTheme,
    creditPriceList,
  } = e;
  var { source, teamType, teamId } = reportParam;
  var P = a._(reportParam, ["source", "teamType", "teamId"]);
  var j = creditScene === "team";
  var isOversea = p.cQ(containerService, v.o).isOversea;
  var reportParams = n._(
    i._(n._({}, reportParam), {
      teamType: j ? "team" : "personal",
    }),
    j && targetTeamId
      ? {
          teamId: targetTeamId,
        }
      : {},
    j
      ? {
          customReportParams: n._(
            {
              business_extra: "{}",
            },
            reportParam.customReportParams,
          ),
        }
      : {},
  );
  var F = isOversea ? f.Q2(containerService) : f.Lm(containerService);
  var creditPayManager = A.N({
    containerService,
    reportParams,
    creditRechargeContext: {
      creditScene,
      targetTeamId,
      teamCreditTradeType,
      creditPriceList,
    },
  });
  var B = g.Y(containerService, h.u.CREDIT_MODAL);
  var W = g.c(containerService, h.u.VIP_MODAL);
  F.updateReportParam(P);
  if (defaultProductId) {
    creditPayManager.setCurrentProduct(u.p3(), defaultProductId);
  }
  var $ = null;
  var J = false;
  var Z = (e) => {
    creditPayManager.dispose();
    F.dispose();
    if ($ != null) {
      $.close();
    }
    B.unmount();
    if (typeof e === "boolean" && e) {
      if (W != null) {
        W.unmount();
      }
    }
    if (!J) {
      J = true;
      if (onAfterClose != null) {
        onAfterClose();
      }
    }
  };
  creditPayManager.onSuccess(() => {
    Promise.resolve(onSuccess == null ? undefined : onSuccess()).catch(
      () => undefined,
    );
    if (!isOversea) {
      Z(true);
    }
  });
  $ = o.A.confirm({
    footer: null,
    icon: null,
    simple: true,
    closable: false,
    maskClosable: false,
    autoFocus: !!isOversea || undefined,
    maskStyle: y.S(8),
    afterClose: Z,
    wrapClassName: _l(
      "credit-recharge-modal",
      forceTheme === "light" && "lv-theme-force_light",
      forceTheme === "light" && eZ,
      forceTheme === "dark" && "lv-theme-force_dark",
      forceTheme === "dark" && eO,
    ),
    content: s.jsx(m.Z, {
      instantiationService: containerService,
      children: isOversea
        ? s.jsx("div", {
            tabIndex: -1,
            "data-autofocus": "true",
            className: eJ,
            children: s.jsx(useE, {
              creditPayManager,
              containerService,
              forceTheme,
              onClose: Z,
              vipPayManager: F,
              source,
            }),
          })
        : s.jsx(useEu, {
            creditPayManager,
            containerService,
            forceTheme,
            onClose: Z,
            onPaymentSuccess: onSuccess,
            vipPayManager: F,
            source,
            creditScene,
            teamProfile,
            targetTeamId,
            teamCreditTradeType,
            creditPriceList,
          }),
    }),
  });
  return {
    close: () => $.close(),
  };
};
var eK = (e) => {
  var r;
  var { containerService, creditScene = "personal" } = e;
  var l = p.cQ(containerService, v.o);
  if (
    l.isOversea &&
    l.supportsOverseaCreditGroups &&
    creditScene === "personal" &&
    p.cQ(containerService, $.sG).currentAccount.accountType === "personal"
  ) {
    return ((e) => {
      const { containerService } = e;
      const t = g.Y(containerService, h.u.CREDIT_MODAL);
      const a = f.Q2(containerService);
      const sessionRef = {
        current: undefined,
      };
      let l = false;
      const u = {};
      const p = () => {
        var r;
        var n;
        var i;
        if (!l) {
          l = true;
          if ((r = sessionRef.current) != null) {
            r.dispose();
          }
          a.dispose();
          if ((n = u.current) != null) {
            n.close();
          }
          t.unmount();
          if ((i = e.onAfterClose) != null) {
            i.call(e);
          }
        }
      };
      u.current = o.A.confirm({
        footer: null,
        icon: null,
        simple: true,
        closable: false,
        maskClosable: false,
        autoFocus: true,
        maskStyle: y.S(8),
        afterClose: p,
        wrapClassName: _l(
          "credit-recharge-modal",
          e.forceTheme === "light" && "lv-theme-force_light",
          e.forceTheme === "light" && eZ,
          e.forceTheme === "dark" && "lv-theme-force_dark",
          e.forceTheme === "dark" && eO,
        ),
        content: s.jsx(m.Z, {
          instantiationService: containerService,
          children: s.jsx("div", {
            tabIndex: -1,
            "data-autofocus": "true",
            className: eJ,
            children: s.jsx(
              useEH,
              i._(n._({}, e), {
                vipPayManager: a,
                onClose: p,
                sessionRef,
              }),
            ),
          }),
        }),
      });
      return {
        close: p,
      };
    })(
      i._(n._({}, e), {
        containerService,
        reportParam: i._(n._({}, e.reportParam), {
          teamType: "personal",
        }),
      }),
    );
  }
  if (
    !_.kO({
      enableStandaloneCreditsPackPurchaseModal:
        e.enableStandaloneCreditsPackPurchaseModal,
      isTeamPurchase: creditScene === "team",
      isOversea: l.isOversea,
      isStandaloneHost: b.O() !== "dreamina-feature-container",
    })
  ) {
    return eQ(e);
  }
  var u = false;
  var A = false;
  var onAfterClose = () => {
    var r;
    if (!A) {
      A = true;
      if ((r = e.onAfterClose) != null) {
        r.call(e);
      }
    }
  };
  Promise.all([
    require.e("z9t"),
    require.e("dmi"),
    require.e("tj5a"),
    require.e("lsa"),
    require.e("uoi"),
    require.e("e7a"),
    require.e("72p"),
  ])
    .then(require.bind(require, "./module-Hdh.js"))
    .then((t) => {
      var { showCreditsPackPurchaseModal } = t;
      if (!u) {
        r = showCreditsPackPurchaseModal({
          containerService,
          reportParam: e.reportParam,
          defaultProductId: e.defaultProductId,
          enableStandaloneCreditsPackPurchaseModal:
            e.enableStandaloneCreditsPackPurchaseModal,
          forceTheme: e.forceTheme,
          onAfterClose,
          onSuccess: e.onSuccess,
        });
      }
    })
    .catch(() => {
      if (!u) {
        try {
          var t;
          if (
            !(r =
              (t = eQ(
                i._(n._({}, e), {
                  onAfterClose,
                }),
              )) != null
                ? t
                : undefined)
          ) {
            onAfterClose();
          }
        } catch (e) {
          onAfterClose();
        }
      }
    });
  return {
    close: () => {
      if (!u) {
        u = true;
        if (r) {
          r.close();
        } else {
          onAfterClose();
        }
      }
    },
  };
};
export { eK as x };
