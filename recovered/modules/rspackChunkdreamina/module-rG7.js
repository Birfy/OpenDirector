import i from "NY";
import n from "oa";
import a from "bk";
import o from "z8";
import s from "zbK";
import c from "bT";
import l from "ED";
import d from "p21";
import u from "wF";
import p from "xi";
import m from "Kt";
import h from "pf";
import v from "sXG";
import _ from "F3";
import y from "MgG";
import g from "sIr";
import { c as c_1 } from "./module-H1y.js";
import { Yl } from "./module-iAN.js";
import x from "vY4";
import P from "oU";
import C from "pm";
import S from "gjS";
import A from "Q5x";
import k from "Uze";
import I from "jh7";
import j from "EIx";
import { v as v_1 } from "./module-CQu.js";
import { vf } from "./module-M4z.js";
import M from "xb";
import F from "f0";
import O from "wb";
import L from "MK";
import E from "oh";
import V from "cO";
import z from "gLs";
import J from "dI5";
import Y from "Ae";
import ee from "mqj";
import ey from "VPK";
import eg from "ex6";
import ef from "A6R";
import ex from "SI";
import eP from "hr";
import eC from "SC";
import eT from "svX";
import { T } from "./module-S2.js";
import eR from "m3t";
import eF from "h4d";
import eW from "z2h";
import eB from "EYk";
import eD from "Qey";
import eU from "yw";
import eq from "PQ";
import "siR";
import eK from "F6v";
import eZ from "vLV";
const $ = "titleHighlight-jqxK6N";
const W = "titleWhite-iI1qET";
const B = "hasActivePlan-VGKzD3";
function useD(e) {
  const {
    isTeamPage,
    subscriptionPageHeaderTexts,
    titleResourceInfo,
    isBannerEnabled,
    interceptionGuide,
    onGetCredits,
    onOpenVipRedeem,
  } = e;
  const d = u.h(E.$);
  const p = c.useMemo(() => {
    if (isTeamPage) {
      return {
        main: L.Ay.t(
          "web_team_membership_buy_title",
          {},
          "订阅即梦团队会员，解锁团队空间，资产无缝衔接",
        ),
        sub: "",
        normal: "",
        isNeedToWrapRow: false,
      };
    }
    var e = F.w(d.vipPriceList);
    if (e) {
      var r;
      var i;
      var { lowPriceTrialInfo, vipBenefitPackage, currencyCode } = e;
      var main = "".concat(
        L.Ay.t("free_trial_normal_des", {
          price: O.X(
            currencyCode,
            e.currencyTips,
            lowPriceTrialInfo == null
              ? undefined
              : lowPriceTrialInfo.trialPrice,
            true,
          ),
        }),
        " ",
      );
      var sub = L.Ay.t("free_trial_vip_title", {
        num:
          (r =
            vipBenefitPackage == null ||
            (i = vipBenefitPackage.userTrialCredit) == null
              ? undefined
              : i.amount) != null
            ? r
            : 0,
      });
      var isNeedToWrapRow = main.length + sub.length > 50;
      return {
        main,
        sub,
        normal: "",
        isNeedToWrapRow,
      };
    }
    return {
      main: L.Ay.t(
        "web_dre_m10n_subscription_page_new_title",
        {},
        "Unleash the power of Dreamina",
      ),
      sub: "",
      normal: L.Ay.t(
        "web_dre_m10n_subscription_page_new_title",
        {},
        "Unleash the power of Dreamina",
      ),
      isNeedToWrapRow: false,
    };
  }, [d.vipPriceList, isTeamPage]);
  const children = c.useMemo(() => {
    if (isTeamPage) {
      return o.jsx("span", {
        className: $,
        children: p.main,
      });
    }
    var e = !!titleResourceInfo;
    if (titleResourceInfo == null ? undefined : titleResourceInfo.title) {
      return o.jsx(o.Fragment, {
        children: o.jsx("span", {
          className: $,
          style: {
            color:
              titleResourceInfo == null ? undefined : titleResourceInfo.color,
          },
          children:
            titleResourceInfo == null ? undefined : titleResourceInfo.title,
        }),
      });
    }
    if (
      subscriptionPageHeaderTexts == null
        ? undefined
        : subscriptionPageHeaderTexts.yearlyOffHeader1
    ) {
      var { yearlyOffHeader1, creditsOffHeader2 } = subscriptionPageHeaderTexts;
      return o.jsxs(o.Fragment, {
        children: [
          o.jsx("div", {
            className: M(W, e && B),
            children: yearlyOffHeader1,
          }),
          o.jsx("div", {
            className: $,
            children: creditsOffHeader2,
          }),
        ],
      });
    }
    return o.jsxs(o.Fragment, {
      children: [
        o.jsx("span", {
          className: $,
          children: p.main,
        }),
        o.jsx("span", {
          className: M(W, e && B),
          children: p.sub,
        }),
      ],
    });
  }, [
    isTeamPage,
    p.main,
    p.sub,
    subscriptionPageHeaderTexts,
    titleResourceInfo,
  ]);
  const h = c.useMemo(() => {
    var e = isTeamPage
      ? undefined
      : interceptionGuide ||
        (subscriptionPageHeaderTexts == null
          ? undefined
          : subscriptionPageHeaderTexts.periodSubheader);
    var i = L.Ay.t(
      "web_dre_m10n_subscription_page_new_subtitle_placeholder",
      {},
      "buy credits",
    );
    var n = onGetCredits
      ? o.jsx("span", {
          className: "getCredits-TPg3GU",
          onClick: onGetCredits,
          children: i,
        })
      : null;
    var d = L.Ay.t(
      "web_dre_m10n_subscription_page_new_subtitle",
      {
        buy_credits: i,
      },
      "Select a plan that meets your needs or {buy_credits}",
    );
    var u =
      !isTeamPage && onOpenVipRedeem
        ? o.jsx("span", {
            className: "redeem-BRiSO5",
            onClick: onOpenVipRedeem,
            children: L.Ay.t(
              "web_m10n_member_page_entry_redeem_code",
              {},
              "会员兑换",
            ),
          })
        : null;
    var p = e === d ? undefined : e;
    var m = null;
    var buy_credits = n || u;
    if (!isTeamPage && buy_credits) {
      m = L.Ay.t(
        "web_dre_m10n_subscription_page_new_subtitle",
        {
          buy_credits,
        },
        "Select a plan that meets your needs or {buy_credits}",
      );
    }
    var v = [];
    if (p || m) {
      v.push({
        key: "description",
        content: p || m,
      });
    }
    if (p && n) {
      v.push({
        key: "get-credits",
        content: n,
      });
    }
    if (u && (p || n)) {
      v.push({
        key: "redeem",
        content: u,
      });
    }
    if (v.length) {
      return o.jsx(o.Fragment, {
        children: v.map((e, t) => {
          var { key, content } = e;
          return o.jsxs(
            c.Fragment,
            {
              children: [
                t > 0
                  ? o.jsx("span", {
                      className: "divider-vxI09u",
                    })
                  : null,
                content,
              ],
            },
            key,
          );
        }),
      });
    }
    return null;
  }, [
    interceptionGuide,
    isTeamPage,
    subscriptionPageHeaderTexts,
    onGetCredits,
    onOpenVipRedeem,
  ]);
  return o.jsxs("div", {
    className: "defaultContent-aOdFba",
    children: [
      o.jsx("div", {
        className: M("title-ymoBGY", {
          "needWrapRow-D44l9m": p.isNeedToWrapRow,
          "titleWithBanner-RMhEZB": isBannerEnabled,
          "teamTitle-zQRJTK": isTeamPage,
        }),
        children,
      }),
      h
        ? o.jsx("div", {
            className: "desc-SqldTt",
            children: h,
          })
        : null,
    ],
  });
}
const H = (bgType, bgColor, background, i, n) => {
  if (bgType === "bg_image") {
    return {};
  }
  if (bgType === "bg_gradient_color" && background) {
    return {
      background,
    };
  }
  return {
    backgroundColor: bgColor || n,
  };
};
const U = "shadowElement-BxvDTa";
const q = "title-VTRgCk";
const K = "description-ghty5o";
const Z = "overseaText-J72ACD";
const X = (e) => {
  var {
    value,
    label,
    bgColor,
    bgType,
    bgGradientColor,
    bgImage,
    fontColor,
    labelColor,
  } = e;
  return o.jsxs("div", {
    className: "timeBlock-vCPm_K",
    style: a._(
      n._(
        {},
        H(bgType, bgColor, bgGradientColor, undefined),
        bgType && bgType !== "bg_color"
          ? {}
          : {
              backgroundColor: bgColor
                ? "rgb(from ".concat(bgColor, " r g b / 0.5)")
                : undefined,
            },
      ),
      {
        position: "relative",
        overflow: "hidden",
      },
    ),
    children: [
      bgType === "bg_image" &&
        bgImage &&
        o.jsx("img", {
          src: V.m(bgImage, null, {
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
              "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWQxbFh%bkpa$jJSc1kzaz$hMk50$m1oa$-yeDFX$k01-W1Je%1-%mFXRXBx$2xNNW$tTnR%WFpaTWpsMFkw-z$k$nB-TlRCam$%bHBaRmhP-0dKdFZuc*pl$*xxWWpJe*R*cFlTbXBo$jBaelR*aENhR1Z%T1dwa%1qRjNZakkx-kdKd$$ucE1NMD$2WWpOamRH%nRiS*RN$np*MldrZEdjMHd5$*5aa$dFSjJZbTFXZFdSS$R-Wmti$3gz$EZo%2RtTkRP$3BpTWp*M1lqSTFiR0p1$W5wT%0wNHhX$z$P-W1Od*JIZ*tSMngyWW1re*FWbFhOWFZh$0$sM$pFaE9ORmxZ%201a1dFMDk",
          }),
          alt: "",
          crossOrigin: "anonymous",
          style: {
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
          },
        }),
      o.jsx("div", {
        className: "timeValue-s8mjx8",
        style: {
          color: fontColor || "#FFFFFF",
          position: "relative",
          zIndex: 1,
        },
        children: value,
      }),
      o.jsx("div", {
        className: "timeLabel-VGFkCO",
        style: {
          color: labelColor || "#FFFFFF",
          position: "relative",
          zIndex: 1,
        },
        children: label,
      }),
    ],
  });
};
const useG = (e) => {
  var { className, subscribePageResourceInfo } = e;
  var { isOversea } = u.h(z.o);
  var [s, setS] = c.useState(0);
  c.useEffect(() => {
    if (
      subscribePageResourceInfo == null ||
      (e = subscribePageResourceInfo.expireTime) == null
        ? undefined
        : e.expireEndTime
    ) {
      var e;
      var { expireEndTime } = subscribePageResourceInfo.expireTime;
      var i =
        expireEndTime > 100000000000 ? expireEndTime : 1000 * expireEndTime;
      var n = () => {
        setS(Math.max(0, Math.floor((i - Date.now()) / 1000)));
      };
      n();
      var a = setInterval(n, 1000);
      return () => clearInterval(a);
    }
  }, [subscribePageResourceInfo]);
  var d = c.useMemo(() => {
    var e = Math.floor(s / 86400);
    var t = Math.floor((s % 86400) / 3600);
    var r = Math.floor((s % 3600) / 60);
    var i = s % 60;
    return {
      days: String(e).padStart(2, "0"),
      hours: String(t).padStart(2, "0"),
      minutes: String(r).padStart(2, "0"),
      seconds: String(i).padStart(2, "0"),
    };
  }, [s]);
  var pRef = c.useRef(null);
  var mRef = c.useRef(null);
  var [h, setH] = c.useState(24);
  c.useLayoutEffect(() => {
    if (!isOversea) {
      return void setH(24);
    }
    var pRef_current = pRef.current;
    var mRef_current = mRef.current;
    var r = () => {
      var r = 16;
      for (var i = 24; i >= 16; i -= 1) {
        if (pRef_current != null) {
          pRef_current.style.setProperty("font-size", "".concat(i, "px"));
        }
        if (mRef_current != null) {
          mRef_current.style.setProperty("font-size", "".concat(i, "px"));
        }
        var n =
          !pRef_current ||
          pRef_current.scrollWidth <= pRef_current.clientWidth + 1;
        var a = mRef_current
          ? Number.parseFloat(window.getComputedStyle(mRef_current).lineHeight)
          : 0;
        var o =
          !mRef_current ||
          (Number.isFinite(a) && mRef_current.scrollHeight <= 2 * a + 1);
        if (n && o) {
          r = i;
          break;
        }
      }
      setH((e) => {
        if (e === r) {
          return e;
        }
        return r;
      });
    };
    r();
    var n = new ResizeObserver(r);
    if (pRef_current) {
      n.observe(pRef_current);
    }
    if (mRef_current) {
      n.observe(mRef_current);
    }
    return () => n.disconnect();
  }, [
    isOversea,
    subscribePageResourceInfo == null
      ? undefined
      : subscribePageResourceInfo.enable,
    subscribePageResourceInfo == null
      ? undefined
      : subscribePageResourceInfo.title,
    subscribePageResourceInfo == null
      ? undefined
      : subscribePageResourceInfo.description,
  ]);
  if (
    !(subscribePageResourceInfo == null
      ? undefined
      : subscribePageResourceInfo.enable)
  ) {
    return o.jsx(o.Fragment, {});
  }
  var {
    title,
    description,
    descriptionColor,
    tag,
    expireTime,
    bgColor,
    bgType,
    bgGradientColor,
    bgImage,
    titleColor,
  } = subscribePageResourceInfo;
  var k =
    (expireTime == null ? undefined : expireTime.expireEndTime) > 100000000000
      ? expireTime == null
        ? undefined
        : expireTime.expireEndTime
      : (expireTime == null ? undefined : expireTime.expireEndTime) * 1000;
  var I =
    (expireTime == null ? undefined : expireTime.enable) && k && k > Date.now();
  return o.jsxs("div", {
    className: M(
      "container-o_dP5j",
      !isOversea && "domesticContainer-Wcrstl",
      className,
    ),
    style: a._(n._({}, H(bgType, bgColor, bgGradientColor, undefined)), {
      position: "relative",
      overflow: "hidden",
    }),
    children: [
      bgType === "bg_image" &&
        bgImage &&
        o.jsx("img", {
          src: V.m(bgImage, null, {
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
              "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWQxbFh%bkpa$jJSc1kzaz$hMk50$m1oa$-yeDFX$k01-W1Je%1-%mFXRXBx$2xNNW$tTnR%WFpaTWpsMFkw-z$k$nB-TlRCam$%bHBaRmhP-0dKdFZuc*pl$*xxWWpJe*R*cFlTbXBo$jBaelR*aENhR1Z%T1dwa%1qRjNZakkx-kdKd$$ucE1NMD$2WWpOamRH%nRiS*RN$np*MldrZEdjMHd5$*5aa$dFSjJZbTFXZFdSS$R-Wmti$3gz$EZo%2RtTkRP$3BpTWp*M1lqSTFiR0p1$W5wT%0wNHhX$z$P-W1Od*JIZ*tSMngyWW1re*FWbFhOWFZh$0$sM$pFaE9ORmxZ%201a1dFMDk",
          }),
          alt: "",
          crossOrigin: "anonymous",
          style: {
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
          },
        }),
      o.jsxs("div", {
        className: "leftContent-T3Ut5T",
        style: {
          position: "relative",
          zIndex: 1,
        },
        children: [
          tag &&
            tag.length > 0 &&
            o.jsx("div", {
              className: "tags-fuSGhY",
              children: tag.map((e, t) =>
                o.jsxs(
                  "div",
                  {
                    className: "tag-bTitHc",
                    style: a._(
                      n._(
                        {},
                        H(e.bgType, e.bgColor, e.bgGradientColor, undefined),
                      ),
                      {
                        position: "relative",
                        overflow: "hidden",
                      },
                    ),
                    children: [
                      e.bgType === "bg_image" &&
                        e.bgImage &&
                        o.jsx("img", {
                          src: V.m(e.bgImage, null, {
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
                              "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWQxbFh%bkpa$jJSc1kzaz$hMk50$m1oa$-yeDFX$k01-W1Je%1-%mFXRXBx$2xNNW$tTnR%WFpaTWpsMFkw-z$k$nB-TlRCam$%bHBaRmhP-0dKdFZuc*pl$*xxWWpJe*R*cFlTbXBo$jBaelR*aENhR1Z%T1dwa%1qRjNZakkx-kdKd$$ucE1NMD$2WWpOamRH%nRiS*RN$np*MldrZEdjMHd5$*5aa$dFSjJZbTFXZFdSS$R-Wmti$3gz$EZo%2RtTkRP$3BpTWp*M1lqSTFiR0p1$W5wT%0wNHhX$z$P-W1Od*JIZ*tSMngyWW1re*FWbFhOWFZh$0$sM$pFaE9ORmxZ%201a1dFMDk",
                          }),
                          alt: "",
                          crossOrigin: "anonymous",
                          style: {
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            zIndex: 0,
                          },
                        }),
                      e.icon &&
                        o.jsx("img", {
                          src: V.m(e.icon, null, {
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
                              "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWQxbFh%bkpa$jJSc1kzaz$hMk50$m1oa$-yeDFX$k01-W1Je%1-%mFXRXBx$2xNNW$tTnR%WFpaTWpsMFkw-z$k$nB-TlRCam$%bHBaRmhP-0dKdFZuc*pl$*xxWWpJe*R*cFlTbXBo$jBaelR*aENhR1Z%T1dwa%1qRjNZakkx-kdKd$$ucE1NMD$2WWpOamRH%nRiS*RN$np*MldrZEdjMHd5$*5aa$dFSjJZbTFXZFdSS$R-Wmti$3gz$EZo%2RtTkRP$3BpTWp*M1lqSTFiR0p1$W5wT%0wNHhX$z$P-W1Od*JIZ*tSMngyWW1re*FWbFhOWFZh$0$sM$pFaE9ORmxZ%201a1dFMDk",
                          }),
                          alt: "",
                          crossOrigin: "anonymous",
                          style: {
                            width: 12,
                            height: 12,
                            marginRight: 4,
                            position: "relative",
                            zIndex: 1,
                          },
                        }),
                      o.jsx("span", {
                        className: "tagText-eTBuh5",
                        style: {
                          color: e.color || "#0F0F12",
                          position: "relative",
                          zIndex: 1,
                        },
                        children: e.text,
                      }),
                    ],
                  },
                  t,
                ),
              ),
            }),
          o.jsxs("div", {
            style: {
              position: "relative",
            },
            children: [
              isOversea &&
                o.jsx("div", {
                  ref: pRef,
                  className: M(q, Z, U),
                  style: {
                    color: titleColor || "#FFFFFF",
                    fontSize: h,
                  },
                  children: o.jsx("span", {
                    children: title,
                  }),
                }),
              isOversea &&
                description &&
                o.jsx("div", {
                  ref: mRef,
                  className: M(K, Z, U),
                  style: {
                    color: descriptionColor || "#FFFFFF",
                    fontSize: h,
                  },
                  children: o.jsx("span", {
                    children: description,
                  }),
                }),
              o.jsx("div", {
                className: M(q, isOversea && Z),
                style: {
                  color: titleColor || "#FFFFFF",
                  fontSize: isOversea ? h : undefined,
                },
                children: title,
              }),
              description &&
                o.jsx("div", {
                  className: M(K, isOversea && Z),
                  style: {
                    color: descriptionColor || "#FFFFFF",
                    fontSize: isOversea ? h : undefined,
                  },
                  children: description,
                }),
            ],
          }),
        ],
      }),
      I &&
        o.jsx("div", {
          className: "rightContent-STRuzQ",
          style: {
            position: "relative",
            zIndex: 1,
          },
          children: o.jsxs("div", {
            className: "countdown-nyQ9sP",
            children: [
              o.jsx(X, {
                value: d.days,
                label: L.Ay.t("web_m10n_banner_countdown_days", {}, "Days"),
                bgColor: expireTime.bgColor,
                bgType: expireTime.bgType,
                bgGradientColor: expireTime.bgGradientColor,
                bgImage: expireTime.bgImage,
                fontColor: expireTime.fontColor,
                labelColor: expireTime.labelColor,
              }),
              o.jsx(X, {
                value: d.hours,
                label: L.Ay.t("web_m10n_banner_countdown_hours", {}, "Hours"),
                bgColor: expireTime.bgColor,
                bgType: expireTime.bgType,
                bgGradientColor: expireTime.bgGradientColor,
                bgImage: expireTime.bgImage,
                fontColor: expireTime.fontColor,
                labelColor: expireTime.labelColor,
              }),
              o.jsx(X, {
                value: d.minutes,
                label: L.Ay.t(
                  "web_m10n_banner_countdown_minutes",
                  {},
                  "Minutes",
                ),
                bgColor: expireTime.bgColor,
                bgType: expireTime.bgType,
                bgGradientColor: expireTime.bgGradientColor,
                bgImage: expireTime.bgImage,
                fontColor: expireTime.fontColor,
                labelColor: expireTime.labelColor,
              }),
              o.jsx(X, {
                value: d.seconds,
                label: L.Ay.t(
                  "web_m10n_banner_countdown_seconds",
                  {},
                  "Seconds",
                ),
                bgColor: expireTime.bgColor,
                bgType: expireTime.bgType,
                bgGradientColor: expireTime.bgGradientColor,
                bgImage: expireTime.bgImage,
                fontColor: expireTime.fontColor,
                labelColor: expireTime.labelColor,
              }),
            ],
          }),
        }),
    ],
  });
};
function Q(e) {
  let t;
  let r;
  const {
    isTeamPage,
    subscriptionPageHeaderTexts,
    subscribePageBannerResourceInfo,
    profileSummary,
    interceptionGuide,
    onOpenCreditRechargeModal,
    onOpenVipRedeem,
  } = e;
  const u = v_1();
  const p =
    u === "dark"
      ? subscribePageBannerResourceInfo == null ||
        (t = subscribePageBannerResourceInfo.bannerDark) == null
        ? undefined
        : t.enable
      : subscribePageBannerResourceInfo == null ||
          (r = subscribePageBannerResourceInfo.banner) == null
        ? undefined
        : r.enable;
  return o.jsxs("div", {
    className: "defaultContentContainer-m2ufiB",
    children: [
      profileSummary
        ? o.jsx("div", {
            className: M(
              "profileSummary-TYfcYP",
              !p && "profileSummaryWithoutBanner-LsEQck",
            ),
            children: profileSummary,
          })
        : null,
      o.jsx(useG, {
        className: M(
          "bannerContainer-bKoWDE",
          isTeamPage && "teamBannerContainer-YwHJWq",
          profileSummary && "bannerAfterProfileSummary-ZY41Gf",
        ),
        subscribePageResourceInfo:
          u === "dark"
            ? subscribePageBannerResourceInfo == null
              ? undefined
              : subscribePageBannerResourceInfo.bannerDark
            : subscribePageBannerResourceInfo == null
              ? undefined
              : subscribePageBannerResourceInfo.banner,
      }),
      o.jsx(useD, {
        isTeamPage,
        subscriptionPageHeaderTexts,
        isBannerEnabled: !!p,
        titleResourceInfo: {
          title:
            subscribePageBannerResourceInfo == null
              ? undefined
              : subscribePageBannerResourceInfo.title,
          color:
            u === "dark"
              ? subscribePageBannerResourceInfo == null
                ? undefined
                : subscribePageBannerResourceInfo.titleColorDark
              : subscribePageBannerResourceInfo == null
                ? undefined
                : subscribePageBannerResourceInfo.titleColor,
        },
        interceptionGuide,
        onOpenVipRedeem,
        onGetCredits: onOpenCreditRechargeModal,
      }),
    ],
  });
}
const et = "textManageButton-wp9s0U";
const er = "container-FDtGBe";
const ei = "allPlan-hv4WMD";
const en = "header-_emUWl";
const ea = "vipUserCardNew-gYzYQM";
const eo = "hideBanner-y1ErL6";
const es = "topRightButtonContainer-jDw9qH";
const ec = "bigBtn-RaHt_3";
const el = "titleHighlight-lHdCfC";
const ed = "titleWhite-ejmrEa";
const eu = "teamMainTitle-bdfskC";
const ep = "desc-Rq_JjD";
const em = "interceptionGuide-YvbEFi";
const eh = "bannerWrap-iFrny5";
const subscriptionManageInvoiceGuideShown =
  Y.X.subscriptionManageInvoiceGuideShown;
function useE(e) {
  const {
    onOpenSubscriptionManageModal,
    showSubscriptionManageGuideTooltip,
    fontWeight,
    appearance = "button",
  } = e;
  const [a, setA] = c.useState(false);
  const l = !!showSubscriptionManageGuideTooltip;
  const dRef = c.useRef("unclaimed");
  c.useEffect(() => {
    if (!l) {
      if (dRef.current === "active") {
        dRef.current = "consumed";
      }
      setA(false);
      return;
    }
    if (dRef.current !== "consumed") {
      if (dRef.current === "unclaimed") {
        if (
          !(() => {
            try {
              if (
                ee.r.getItem(subscriptionManageInvoiceGuideShown) === "true"
              ) {
                return false;
              }
              ee.r.setItem(subscriptionManageInvoiceGuideShown, "true");
              return true;
            } catch (e) {
              return false;
            }
          })()
        ) {
          dRef.current = "consumed";
          return;
        }
        dRef.current = "active";
      }
      setA(true);
      var e = window.setTimeout(() => {
        dRef.current = "consumed";
        setA(false);
      }, 3000);
      return () => {
        window.clearTimeout(e);
      };
    }
  }, [l]);
  return o.jsx(J.I, {
    type: appearance === "text" ? "text" : "tertiary",
    text: L.Ay.t(
      "web_dre_m10n_subscription_page_plans_billing",
      {},
      "Plans & Billing",
    ),
    className: appearance === "text" ? et : ec,
    style:
      fontWeight === undefined
        ? undefined
        : {
            fontWeight,
          },
    onClick: onOpenSubscriptionManageModal,
    toolTipsContent: "新增发票申请功能，支持在线申请和管理发票",
    popupVisible: l && a,
    showArrow: true,
    toolTipsPosition: "bottom",
    triggerProps: {
      autoFitPosition: false,
      popupAlign: {
        bottom: 12,
      },
    },
    toolTipsClassName: "subscriptionManageGuideTooltip-Ue7p7L",
  });
}
function eb(e) {
  const {
    compact = false,
    teamName,
    avatarColor,
    isVip,
    isVipExpired,
    currentVipLevel,
    expiredVipLevel,
    teamStatusNode,
  } = e;
  return o.jsxs("div", {
    className: `teamProfileWrap-eFqk8_ ${compact ? "compact-eJFs_Y" : ""}`,
    children: [
      o.jsx(ey._V, {
        size: compact ? 24 : 48,
        teamName,
        avatarColor,
        className: "teamAvatar-bwMHTz",
      }),
      o.jsxs("div", {
        className: "teamInfoWrap-CTKDTI",
        children: [
          o.jsxs("div", {
            className: "teamNameWrap-a_m86i",
            children: [
              o.jsx("div", {
                className: "teamName-XtCU0e",
                children: teamName,
              }),
              isVip || isVipExpired
                ? o.jsx(eg.z, {
                    className: "vipIcon-L8clfZ",
                    size: 20,
                    level: isVip ? currentVipLevel : expiredVipLevel,
                    inactive: isVipExpired,
                  })
                : null,
            ],
          }),
          o.jsx("div", {
            className: "teamStatusWrap-bURSqA",
            children: teamStatusNode,
          }),
        ],
      }),
    ],
  });
}
function useEA(e) {
  const {
    expireTime,
    credit,
    showExpiredStatusText = false,
    teamVipLevel,
    membershipValidityDetails = [],
    onOpenTeamCreditHistoryModal,
  } = e;
  const l = c.useMemo(() => {
    var e = [];
    if (showExpiredStatusText) {
      e.push({
        key: "membershipExpired",
        value: L.Ay.t(
          "web_team_membership_status_expired",
          {},
          "团队会员已过期",
        ),
      });
      return e;
    }
    var r = ((e) => {
      if (e) {
        return eP.i("yyyy.MM.dd hh:mm", 1000 * e);
      }
    })(expireTime);
    if (r) {
      var a = eC.ny(teamVipLevel)
        ? ex.Qk(teamVipLevel)
        : L.Ay.t("web_team_membership", {}, "团队会员");
      e.push({
        key: "expireTime",
        value: o.jsxs(o.Fragment, {
          children: [
            a,
            "： ",
            o.jsx("span", {
              className: "time-PLI76g",
              children: r,
            }),
          ],
        }),
      });
    }
    return e;
  }, [expireTime, showExpiredStatusText, teamVipLevel]);
  return o.jsxs("div", {
    className: "infos-bjuH55",
    children: [
      l.map((e) => {
        var t;
        return o.jsxs(
          c.Fragment,
          {
            children: [
              o.jsx("div", {
                className: `infoItem-l8OmGg `.concat(
                  (t = e.className) != null ? t : "",
                ),
                children: e.value,
              }),
              e.key === "expireTime" && membershipValidityDetails.length > 0
                ? o.jsx(eT.q, {
                    details: membershipValidityDetails,
                    children: o.jsx(ef.HNP, {
                      className: "membershipValidityInfoIcon-Wxdfwb",
                      size: 16,
                    }),
                  })
                : null,
            ],
          },
          e.key,
        );
      }),
      o.jsx(T, {
        credit,
        onGetCredits: onOpenTeamCreditHistoryModal,
      }),
    ],
  });
}
const ek = "container-V6ZMzO";
const eI = "divider-PEc7XS";
const ej = "actions-SBF5gR";
const ew = "banner-Bz_nB_";
const eN = "teamBanner-n4ddrs";
function useEM(e) {
  let t;
  let r;
  const {
    isDomesticRedesign = false,
    model,
    teamRole,
    membershipValidityDetails = [],
    isVip,
    isVipExpired,
    currentVipLevel,
    expiredVipLevel,
    credit,
    subscribePageBannerResourceInfo,
    titleResourceInfo,
    subscriptionPageHeaderTexts,
    onOpenSubscriptionManageModal,
    onOpenTeamCreditRechargeModal,
    onOpenTeamCreditHistoryModal,
    showSubscriptionManageGuideTooltip,
  } = e;
  const P = v_1();
  const C =
    !isVipExpired && (teamRole === s.t0.Owner || teamRole === s.t0.Admin);
  const showExpiredStatusText =
    isVipExpired && (teamRole === s.t0.Admin || teamRole === s.t0.Member);
  const A =
    P === "dark"
      ? subscribePageBannerResourceInfo == null ||
        (t = subscribePageBannerResourceInfo.bannerDark) == null
        ? undefined
        : t.enable
      : subscribePageBannerResourceInfo == null ||
          (r = subscribePageBannerResourceInfo.banner) == null
        ? undefined
        : r.enable;
  const k = c.useMemo(() => {
    if (titleResourceInfo == null ? undefined : titleResourceInfo.title) {
      return o.jsx("div", {
        className: "".concat(el, " ").concat(eu),
        style: {
          color: titleResourceInfo.color,
          marginBottom: 32,
        },
        children: titleResourceInfo.title,
      });
    }
    if (
      subscriptionPageHeaderTexts == null
        ? undefined
        : subscriptionPageHeaderTexts.yearlyOffHeader1
    ) {
      var { yearlyOffHeader1, creditsOffHeader2, periodSubheader } =
        subscriptionPageHeaderTexts;
      return o.jsxs(o.Fragment, {
        children: [
          o.jsx("div", {
            className: "".concat(el, " ").concat(eu),
            children: yearlyOffHeader1,
          }),
          o.jsx("div", {
            className: ed,
            children: creditsOffHeader2,
          }),
          o.jsx("div", {
            className: ep,
            children: periodSubheader,
          }),
        ],
      });
    }
    return o.jsx("div", {
      className: "".concat(ei, " ").concat(eu),
      children: L.Ay.t(
        "web_team_membership_buy_title",
        {},
        "订阅即梦团队会员，解锁团队空间，资产无缝衔接",
      ),
    });
  }, [subscriptionPageHeaderTexts, titleResourceInfo]);
  const I = {
    buyCredits:
      onOpenTeamCreditRechargeModal &&
      o.jsx(
        J.I,
        {
          type: isDomesticRedesign ? "text" : "tertiary",
          text: L.Ay.t(
            "web_dre_m10n_subscription_page_get_credits",
            {},
            "Get credits",
          ),
          className: isDomesticRedesign ? et : ec,
          onClick: onOpenTeamCreditRechargeModal,
        },
        "buyCredits",
      ),
    manageSubscription:
      onOpenSubscriptionManageModal &&
      o.jsx(
        useE,
        {
          appearance: isDomesticRedesign ? "text" : undefined,
          fontWeight: isDomesticRedesign ? 400 : undefined,
          onOpenSubscriptionManageModal,
          showSubscriptionManageGuideTooltip,
        },
        "manageSubscription",
      ),
  };
  const j = model.actions.actionItems.map((e) => I[e]).filter(Boolean);
  return o.jsxs("div", {
    className: isDomesticRedesign
      ? "".concat(ek, " ").concat("teamContainer-VvAA8q")
      : er,
    children: [
      o.jsxs("div", {
        className: ""
          .concat(ea, " ")
          .concat(A || isDomesticRedesign ? "" : eo, " ")
          .concat(isDomesticRedesign ? "domesticTeamHeader-aDTpMR" : ""),
        children: [
          o.jsx("div", {
            className: en,
            children: o.jsx(eb, {
              compact: isDomesticRedesign,
              teamName: model.teamName,
              avatarColor: model.avatarColor,
              isVip,
              isVipExpired,
              currentVipLevel,
              expiredVipLevel,
              teamStatusNode: o.jsx(useEA, {
                expireTime: model.expireTime,
                credit,
                showExpiredStatusText,
                teamVipLevel: currentVipLevel,
                membershipValidityDetails: C ? membershipValidityDetails : [],
                onOpenTeamCreditHistoryModal,
              }),
            }),
          }),
          j.length > 0
            ? o.jsx("div", {
                className: isDomesticRedesign
                  ? ej
                  : ""
                      .concat(es, " ")
                      .concat("teamTopRightButtonContainer-SVEoSN"),
                children: j,
              })
            : null,
        ],
      }),
      (!isDomesticRedesign || A) &&
        o.jsx(useG, {
          className: isDomesticRedesign ? "".concat(ew, " ").concat(eN) : eh,
          subscribePageResourceInfo:
            P === "dark"
              ? subscribePageBannerResourceInfo == null
                ? undefined
                : subscribePageBannerResourceInfo.bannerDark
              : subscribePageBannerResourceInfo == null
                ? undefined
                : subscribePageBannerResourceInfo.banner,
        }),
      !isDomesticRedesign && k,
    ],
  });
}
function eO(e) {
  const {
    isVip,
    isVipExpired,
    currentVipLevel,
    expiredVipLevel,
    vipStatusNode,
  } = e;
  const { avatar, name } = eF.o().userProfile || {};
  return o.jsxs("div", {
    className: "userProfileWrap-cRulur",
    children: [
      o.jsx(eR.e, {
        className: "avatar-MheqGa",
        src: V.m(avatar, null, {
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
            "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWQxbFh%bkpa$jJSc1kzaz$hMk50$m1oa$-yeDFX$k01-W1Je%1-%mFXRXBx$2xNNW$tTnR%WFpaTWpsMFkw-z$k$nB-TlRCam$%bHBaRmhP-0dKdFZuc*pl$*xxWWpJe*R*cFlTbXBo$jBaelR*aENhR1Z%T1dwa%1qRjNZakkx-kdKd$$ucE1NMD$2WWpOamRH%nRiS*RN$np*MldrZEdjMHd5$*5aa$dFSjJZbTFXZFdSS$R-Wmti$3gz$EZo%2RtTkRP$3BpTWp*M1lqSTFiR0p1$W5wT%0xWjZXb*hKZEdOS$NuWmFi$3h6$2xNe*FsbFlTbXRN-mxKNlp$ZEdl$m96$m5vPQ",
        }),
        enableClick: false,
      }),
      o.jsxs("div", {
        className: "userInfoWrap-nnhGbu",
        children: [
          o.jsxs("div", {
            className: "userNameWrap-breYGN",
            children: [
              o.jsx("div", {
                className: "userName-WBuuxc",
                children: name,
              }),
              isVip || isVipExpired
                ? o.jsx(eg.z, {
                    className: "vipIcon-p9EHXB",
                    size: 20,
                    level: isVip ? currentVipLevel : expiredVipLevel,
                    inactive: isVipExpired,
                  })
                : null,
            ],
          }),
          o.jsx("div", {
            className: "vipStatusWrap-VoeQYR",
            children: vipStatusNode,
          }),
        ],
      }),
    ],
  });
}
const eL = {
  infos: "infos-nKCB7d",
  divider: "divider-yPzLfR",
  infoItem: "infoItem-no1Adg",
  plan: "plan-V4EN2Q",
  bold: "bold-ACgbsr",
};
function useEE(e) {
  const {
    isVip,
    isVipExpired,
    currentVipLevel,
    vipInfo,
    credit,
    onOpenCreditHistoryModal,
    onBuyCredits,
    showCredit = true,
  } = e;
  const u = c.useMemo(() => {
    try {
      if (isVip) {
        var e = ex.JI({
          level: currentVipLevel,
        });
        var { endTime, currentAutoRenewPlan } = vipInfo || {};
        var s =
          currentAutoRenewPlan &&
          currentAutoRenewPlan.level ===
            (vipInfo == null ? undefined : vipInfo.curVipLevel);
        var c = s ? ex.xg(currentAutoRenewPlan.cycle) : "";
        return [
          {
            title: L.Ay.t("web_dre_m10n_subscription_page_plans", {}, "Plan"),
            value: e || "-",
            extraCls: eL.plan,
          },
          s
            ? {
                title: L.Ay.t(
                  "dre_m10n_subscription_page_staus",
                  {},
                  "Billing cycle",
                ),
                value: c || "-",
              }
            : undefined,
          s
            ? {
                title: L.Ay.t(
                  "web_dre_m10n_subscription_page_next_billing_day",
                  {},
                  "Renews on",
                ),
                value: eP.i(
                  "yyyy.MM.dd hh:mm",
                  1000 * currentAutoRenewPlan.nextRenewalTime,
                ),
                extraCls: eL.bold,
              }
            : undefined,
          !s && endTime
            ? {
                title: L.Ay.t(
                  "web_dre_m10n_subscription_page_expire_time",
                  {},
                  "Expires on",
                ),
                value: eP.i("yyyy.MM.dd hh:mm", 1000 * endTime),
                extraCls: eL.bold,
              }
            : undefined,
        ].filter(Boolean);
      }
      if (isVipExpired) {
        return [
          {
            title: L.Ay.t("web_dre_m10n_subscription_page_plans", {}, "Plan"),
            value: L.Ay.t("web_dre_m10n_subscription_plans_free", {}, "FREE"),
          },
          {
            title: L.Ay.t(
              "web_dre_m10n_subscription_page_expire_time",
              {},
              "Expires on",
            ),
            value: L.Ay.t(
              "web_dre_m10n_subscription_page_staus_forever",
              {},
              "Forever",
            ),
          },
        ];
      }
      return [];
    } catch (e) {
      return [];
    }
  }, [isVip, isVipExpired, currentVipLevel, vipInfo]);
  return o.jsxs("div", {
    className: eL.infos,
    children: [
      u.map((e) =>
        o.jsx(
          "div",
          {
            className: ""
              .concat(eL.infoItem, " ")
              .concat((e == null ? undefined : e.extraCls) || ""),
            children: o.jsx("div", {
              className: eL.value,
              children: e == null ? undefined : e.value,
            }),
          },
          e == null ? undefined : e.title,
        ),
      ),
      showCredit
        ? o.jsx(T, {
            credit,
            onGetCredits: onOpenCreditHistoryModal,
            onBuyCredits,
          })
        : null,
    ],
  });
}
function e$(e) {
  let t;
  let r;
  const {
    isVip,
    isVipExpired,
    currentVipLevel,
    subscribePageBannerResourceInfo,
    expiredVipLevel,
    titleResourceInfo,
    vipInfo,
    credit,
    subscriptionPageHeaderTexts,
    onOpenCreditHistoryModal,
    onOpenSubscriptionManageModal,
    onOpenCreditRechargeModal,
    onOpenVipRedeem,
    showSubscriptionManageGuideTooltip,
    canShowApiEntry,
    showJimengApiSaleEntry,
    shouldShowJimengApiSaleEntry,
    onOpenJimengApiSalesUsagePage,
    interceptionGuide,
    groupCreditEntries,
    showCreditPurchaseEntry = true,
  } = e;
  const k = v_1();
  const I =
    k === "dark"
      ? subscribePageBannerResourceInfo == null ||
        (t = subscribePageBannerResourceInfo.bannerDark) == null
        ? undefined
        : t.enable
      : subscribePageBannerResourceInfo == null ||
          (r = subscribePageBannerResourceInfo.banner) == null
        ? undefined
        : r.enable;
  const j = c.useMemo(() => {
    if (titleResourceInfo == null ? undefined : titleResourceInfo.title) {
      return o.jsxs(o.Fragment, {
        children: [
          o.jsx("div", {
            className: el,
            style: {
              color: titleResourceInfo.color,
              marginBottom: 32 * !interceptionGuide,
              marginTop: 40,
            },
            children: titleResourceInfo.title,
          }),
          interceptionGuide
            ? o.jsx("div", {
                className: em,
                children: interceptionGuide,
              })
            : null,
        ],
      });
    }
    if (
      subscriptionPageHeaderTexts == null
        ? undefined
        : subscriptionPageHeaderTexts.yearlyOffHeader1
    ) {
      var { yearlyOffHeader1, creditsOffHeader2, periodSubheader } =
        subscriptionPageHeaderTexts;
      return o.jsxs(o.Fragment, {
        children: [
          o.jsx("div", {
            className: el,
            children: yearlyOffHeader1,
          }),
          o.jsx("div", {
            className: ed,
            children: creditsOffHeader2,
          }),
          interceptionGuide || periodSubheader
            ? o.jsx("div", {
                className: ep,
                children: interceptionGuide || periodSubheader,
              })
            : null,
        ],
      });
    }
    return o.jsxs(o.Fragment, {
      children: [
        o.jsx("div", {
          className: ""
            .concat(ei, " ")
            .concat(
              interceptionGuide ? "allPlanWithInterceptionGuide-bp1R1y" : "",
            ),
          children: L.Ay.t(
            "web_dre_m10n_subscription_page_subtitle",
            {},
            "All Plans",
          ),
        }),
        interceptionGuide
          ? o.jsx("div", {
              className: em,
              children: interceptionGuide,
            })
          : null,
      ],
    });
  }, [interceptionGuide, subscriptionPageHeaderTexts, titleResourceInfo]);
  return o.jsxs("div", {
    className: er,
    children: [
      o.jsxs("div", {
        className: "".concat(ea, " ").concat(I ? "" : eo),
        children: [
          o.jsx("div", {
            className: en,
            children: o.jsx(eO, {
              isVip,
              isVipExpired,
              currentVipLevel,
              expiredVipLevel,
              vipStatusNode: o.jsx(useEE, {
                isVip,
                isVipExpired,
                currentVipLevel,
                vipInfo,
                credit,
                onOpenCreditHistoryModal,
                onBuyCredits:
                  groupCreditEntries && showCreditPurchaseEntry
                    ? onOpenCreditRechargeModal
                    : undefined,
              }),
            }),
          }),
          o.jsxs("div", {
            className: es,
            children: [
              !groupCreditEntries && showCreditPurchaseEntry
                ? o.jsx(J.I, {
                    type: "tertiary",
                    text: L.Ay.t(
                      "web_dre_m10n_subscription_page_get_credits",
                      {},
                      "Get credits",
                    ),
                    className: ec,
                    style: {
                      fontWeight: 500,
                    },
                    onClick: onOpenCreditRechargeModal,
                  })
                : null,
              o.jsx(useE, {
                onOpenSubscriptionManageModal,
                showSubscriptionManageGuideTooltip,
                fontWeight: 500,
              }),
              onOpenVipRedeem
                ? o.jsx(J.I, {
                    type: "tertiary",
                    text: L.Ay.t(
                      "web_m10n_member_page_entry_redeem_code",
                      {},
                      "会员兑换",
                    ),
                    className: ec,
                    style: {
                      fontWeight: 500,
                    },
                    onClick: onOpenVipRedeem,
                  })
                : null,
              canShowApiEntry &&
              showJimengApiSaleEntry &&
              (shouldShowJimengApiSaleEntry == null
                ? undefined
                : shouldShowJimengApiSaleEntry()) &&
              onOpenJimengApiSalesUsagePage
                ? o.jsx(J.I, {
                    type: "tertiary",
                    text: L.Ay.t(
                      "jimeng_api_sales_api_service",
                      {},
                      "API Services",
                    ),
                    className: ec,
                    style: {
                      fontWeight: 500,
                    },
                    onClick: onOpenJimengApiSalesUsagePage,
                  })
                : null,
            ],
          }),
        ],
      }),
      o.jsx(useG, {
        className: eh,
        subscribePageResourceInfo:
          k === "dark"
            ? subscribePageBannerResourceInfo == null
              ? undefined
              : subscribePageBannerResourceInfo.bannerDark
            : subscribePageBannerResourceInfo == null
              ? undefined
              : subscribePageBannerResourceInfo.banner,
      }),
      j,
    ],
  });
}
function eV(e, t, r) {
  const i = L.Ay.t(e, t, r);
  if (!/<(#[0-9a-f]{6})>[\s\S]*?<\/\1>/i.test(i)) {
    return i;
  }
  const n = i.replace(/<\/?#[0-9a-f]{6}>/gi, (e) => "'".concat(e, "'"));
  try {
    const a = new eD.SV(n, L.Ay.language || "en").format(t);
    if (Array.isArray(a)) {
      return a.join("");
    }
    return String(a);
  } catch (e) {
    return i;
  }
}
function eH(e) {
  if (!e) {
    return e;
  }
  const t = [];
  let r = 0;
  for (const i of e.matchAll(/<(#[0-9a-f]{6})>([\s\S]*?)<\/\1>/gi)) {
    t.push(
      e.slice(r, i.index),
      c.createElement(
        "span",
        {
          key: i.index,
          style: {
            color: i[1],
          },
        },
        i[2],
      ),
    );
    r = i.index + i[0].length;
  }
  if (t.length) {
    return c.createElement("span", null, ...t, e.slice(r));
  }
  return e;
}
function ez(e) {
  const { guideKey, copyMode, eligiblePlanNames, featureText, minVipLevel } = e;
  if (guideKey) {
    return eH(
      eV(
        "web_dre_m10n_subscription_page_tooltips",
        {
          string0: L.Ay.t(guideKey, {}, guideKey),
        },
        "Upgrade to use this feature: {string0}",
      ),
    );
  }
  if (copyMode && featureText && minVipLevel && eligiblePlanNames) {
    return eH(
      ((e) => {
        const { copyMode, eligiblePlanNames, featureText, minVipLevel } = e;
        if (featureText && (copyMode === "any" || copyMode === "enumerate")) {
          if (copyMode === "any" || minVipLevel === "standard") {
            return eV(
              "web_dre_subscription_unlock_any",
              {
                feature: featureText,
              },
              "订阅任意会员，解锁 ".concat(featureText),
            );
          }
          if (!(eligiblePlanNames.length < 1)) {
            const plan_name = eligiblePlanNames[0];
            if (eligiblePlanNames.length === 1) {
              return eV(
                "web_dre_subscription_unlock_single",
                {
                  plan_name,
                  feature: featureText,
                },
                "订阅".concat(plan_name, "，解锁 ").concat(featureText),
              );
            }
            return eV(
              "web_dre_subscription_unlock_threshold",
              {
                plan_name,
                feature: featureText,
              },
              "订阅".concat(plan_name, "及以上等级，解锁 ").concat(featureText),
            );
          }
        }
      })({
        copyMode,
        eligiblePlanNames,
        featureText,
        minVipLevel,
      }),
    );
  }
}
function eX(e) {
  if (e !== undefined && Number.isFinite(e) && !(e <= 0)) {
    const t = e < 1000000000000 ? 1000 * e : e;
    if (Number.isFinite(new Date(t).getTime())) {
      return t;
    }
    return undefined;
  }
}
function eG(e) {
  let t;
  const { isVip, vipLevel, vipInfo } = e;
  if (!isVip) {
    return o.jsx("span", {
      children: L.Ay.t("web_dre_subscription_phase2_free_plan", {}, "免费版"),
    });
  }
  const a = eX(vipInfo == null ? undefined : vipInfo.endTime);
  const s = (
    (t = vipInfo == null ? undefined : vipInfo.vipLevels) != null ? t : []
  ).flatMap((e) => {
    var begin = eX(e.beginTime);
    var end = eX(e.endTime);
    if (begin === undefined || end === undefined || begin > end) {
      return [];
    }
    return [
      {
        level: e.level,
        begin,
        end,
      },
    ];
  });
  const c = L.Ay.t(
    "web_teams_multiple_membership_popup_title",
    {},
    "有效期详情",
  );
  return o.jsxs("span", {
    className: "membership-eHbPn7",
    children: [
      o.jsx("span", {
        children: ex.JI({
          level: vipLevel,
        }),
      }),
      a !== undefined &&
        o.jsx("span", {
          children: eP.i("yyyy.MM.dd hh:mm", a),
        }),
      s.length > 1 &&
        o.jsx(eK.A, {
          className: eZ.A.popover,
          position: "bottom",
          trigger: ["hover", "focus"],
          popupHoverStay: true,
          showArrow: false,
          style: {
            maxWidth: 360,
            zIndex: 1002,
          },
          getPopupContainer: (e) => e.ownerDocument.body,
          content: o.jsxs("div", {
            className: eZ.A.detailPopoverContent,
            children: [
              o.jsx("div", {
                className: eZ.A.title,
                children: c,
              }),
              o.jsx("div", {
                className: eZ.A.scrollView,
                children: o.jsx("div", {
                  className: eZ.A.detailList,
                  children: s.map((e, t) =>
                    o.jsxs(
                      "div",
                      {
                        className: eZ.A.detailItem,
                        children: [
                          o.jsxs("div", {
                            className: eZ.A.detailRow,
                            children: [
                              o.jsx("span", {
                                className: eZ.A.detailLabel,
                                children: L.Ay.t(
                                  "web_dre_m10n_subscription_page_plans",
                                  {},
                                  "Plan",
                                ),
                              }),
                              o.jsx("span", {
                                className: eZ.A.detailValue,
                                children:
                                  ex.JI({
                                    level: e.level,
                                  }) || "-",
                              }),
                            ],
                          }),
                          o.jsxs("div", {
                            className: eZ.A.detailRow,
                            children: [
                              o.jsx("span", {
                                className: eZ.A.detailLabel,
                                children: L.Ay.t(
                                  "web_teams_multiple_membership_popup_valid_time",
                                  {},
                                  "有效期",
                                ),
                              }),
                              o.jsxs("span", {
                                className: ""
                                  .concat(eZ.A.detailValue, " ")
                                  .concat(eZ.A.validityRange),
                                children: [
                                  eP.i("yyyy-MM-dd hh:mm", e.begin),
                                  " ～",
                                  " ",
                                  eP.i("yyyy-MM-dd hh:mm", e.end),
                                ],
                              }),
                            ],
                          }),
                        ],
                      },
                      "".concat(e.level, ":").concat(e.begin, ":").concat(t),
                    ),
                  ),
                }),
              }),
            ],
          }),
          children: o.jsx("span", {
            className: "membershipInfo-WGmQ6F",
            tabIndex: 0,
            "aria-label": c,
            children: o.jsx(eU.G_L, {
              "aria-hidden": "true",
            }),
          }),
        }),
    ],
  });
}
const value = {
  enable: false,
};
function eJ(e) {
  const {
    isVip,
    isVipExpired = false,
    vipLevel,
    vipInfo,
    credit,
    onBuyCredits,
    onOpenCreditHistory,
    onManageSubscription,
    onRedeem,
    onOpenApi,
    showSubscriptionManageGuideTooltip,
  } = e;
  const { userProfile } = eF.o();
  const { avatar, name } = userProfile || {};
  return o.jsxs("div", {
    className: "header-hqC89C",
    children: [
      o.jsxs("div", {
        className: "profile-U6mZ6Y",
        children: [
          o.jsx("div", {
            className: "avatar-ZIBV3e",
            children: o.jsx(eq.W.Provider, {
              value,
              children: o.jsx(eR.e, {
                src: V.m(avatar, null, {
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
                    "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWQxbFh%bkpa$jJSc1kzaz$hMk50$m1oa$-yeDFX$k01-W1Je%1-%mFXRXBx$2xNNW$tTnR%WFpaTWpsMFkw-z$k$nB-TlRCam$%bHBaRmhP-0dKdFZuc*pl$*xxWWpJe*R*cFlTbXBo$jBaelR*aENhR1Z%T1dwa%1qRjNZakkx-kdKd$$ucE1NMD$2WWpOamRH%nRiS*RN$np*MldrZEdjMHd5$*5aa$dFSjJZbTFXZFdSS$R-Wmti$3gz$EZo%2RtTkRP$3BpTWp*M1lqSTFiR0p1$W5wT%1sSjJZb*RXZW1SS*JHcE1XRTR4$1c1T2FtTnRiS*Rr%jJ4Mllta3hiMXB-%m10-$dFbDFaRWhPTkZsW$NtNWtXRTA5",
                }),
                enableClick: false,
                width: 24,
                height: 24,
                lazy: false,
              }),
            }),
          }),
          o.jsx("span", {
            className: "name-ljsRpw",
            title: name,
            children: name,
          }),
          o.jsx("span", {
            className: eI,
            "aria-hidden": "true",
          }),
          o.jsx(eG, {
            isVip,
            vipLevel,
            vipInfo,
          }),
          onOpenCreditHistory &&
            o.jsxs(o.Fragment, {
              children: [
                o.jsx("span", {
                  className: eI,
                  "aria-hidden": "true",
                }),
                o.jsxs("button", {
                  type: "button",
                  className: "credit-UyV4oq",
                  onClick: onOpenCreditHistory,
                  children: [
                    o.jsx("span", {
                      children: L.Ay.t(
                        "web_dre_subscription_phase2_credits",
                        {},
                        "积分",
                      ),
                    }),
                    o.jsxs("span", {
                      className: "creditValue-ea59iY",
                      children: [
                        o.jsx(eU.mC1, {
                          className: "creditIcon-Tza3kk",
                        }),
                        o.jsx("span", {
                          children: credit || 0,
                        }),
                        o.jsx(eU.Vjx, {
                          className: "creditDetailsIcon-kZ7CRN",
                          "aria-hidden": "true",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
        ],
      }),
      o.jsxs("div", {
        className: ej,
        children: [
          !isVip &&
            onBuyCredits &&
            o.jsx("button", {
              type: "button",
              onClick: onBuyCredits,
              children: L.Ay.t(
                "web_dre_m10n_subscription_page_get_credits",
                {},
                "Get credits",
              ),
            }),
          (isVip || isVipExpired) &&
            onManageSubscription &&
            o.jsx(useE, {
              onOpenSubscriptionManageModal: onManageSubscription,
              showSubscriptionManageGuideTooltip,
              fontWeight: 400,
              appearance: "text",
            }),
          onRedeem &&
            o.jsx("button", {
              type: "button",
              onClick: onRedeem,
              children: L.Ay.t(
                "web_m10n_member_page_entry_redeem_code",
                {},
                "会员兑换",
              ),
            }),
          onOpenApi &&
            o.jsx("button", {
              type: "button",
              onClick: onOpenApi,
              children: L.Ay.t(
                "jimeng_api_sales_api_service",
                {},
                "API Services",
              ),
            }),
        ],
      }),
    ],
  });
}
function useEY(e) {
  const { content, durationMs = 10000 } = e;
  const { interceptionToastShown } = vf();
  const [n, setN] = c.useState();
  const [s, setS] = c.useState(false);
  c.useEffect(() => {
    if (
      !(
        !content ||
        n ||
        (interceptionToastShown != null && interceptionToastShown.current)
      )
    ) {
      if (interceptionToastShown) {
        interceptionToastShown.current = true;
      }
      setN(content);
    }
  }, [content, n, interceptionToastShown]);
  c.useEffect(() => {
    if (n && !s) {
      var e = window.setTimeout(() => setS(true), durationMs);
      return () => window.clearTimeout(e);
    }
  }, [durationMs, n, s]);
  if (content && n && !s) {
    return o.jsx("div", {
      role: "status",
      "aria-live": "polite",
      children: o.jsxs("button", {
        type: "button",
        className: "toast-vAFFHw",
        onClick: () => setS(true),
        children: [
          o.jsx(eU.G_L, {
            className: "icon-SRV3Dm",
          }),
          o.jsx("span", {
            children: n,
          }),
        ],
      }),
    });
  }
  return null;
}
function e0(e) {
  const {
    isActive,
    status,
    vipLevel,
    vipInfo,
    credit,
    onOpenCreditHistoryModal,
  } = e;
  const isVipExpired = status === I.lz.Expired;
  return o.jsx(eO, {
    isVip: isActive,
    isVipExpired,
    currentVipLevel: vipLevel,
    expiredVipLevel: vipInfo == null ? undefined : vipInfo.expiredVipLevel,
    vipStatusNode: o.jsx(useEE, {
      isVip: isActive,
      isVipExpired,
      currentVipLevel: vipLevel,
      vipInfo,
      credit,
      onOpenCreditHistoryModal,
      showCredit: false,
    }),
  });
}
var e1 = l.PA((e) => {
  var {
    pageKind,
    subscriptionPageHeaderTexts,
    vipPayManager,
    forceTheme,
    teamContext,
    isOpenedFromPersonalSubscribePage,
    showSubscriptionManageGuideTooltip,
    showJimengApiSaleEntry,
    shouldShowJimengApiSaleEntry,
    enableStandaloneCreditsPackPurchaseModal,
    onOpenJimengApiSalesUsagePage,
    onCloseSubscribePage,
  } = e;
  var isTeamPage = pageKind === s.Ac.Team;
  var { isNewSubscribePage, isPhase2SubscribePage } = vf();
  var U = v.n();
  var q = vipPayManager.hideCreditPurchaseEntry === true;
  var groupCreditEntries = isNewSubscribePage && !isTeamPage;
  var Z = isPhase2SubscribePage && !isTeamPage;
  var isDomesticRedesign = isPhase2SubscribePage && isTeamPage;
  var interceptionGuide = ((e) => {
    const t = u.h(E.$);
    const r = u.h(eB.a);
    const { isNewSubscribePage } = vf();
    const priceList = d.F(t, (e) => e.vipPriceList);
    const e_interceptionType = e.interceptionType;
    const e_commercialScene = e.commercialScene;
    const e_commercialSceneOptions = e.commercialSceneOptions;
    const e_minVipLevel = e.minVipLevel;
    const e_guideKey = e.guideKey;
    const e_enableSubscriptionGuide = e.enableSubscriptionGuide;
    return c.useMemo(() => {
      if (
        !((e) => {
          const { isOversea, isNewSubscribePage } = e;
          return isOversea || isNewSubscribePage;
        })({
          isOversea: false,
          isNewSubscribePage,
        }) &&
        !e_enableSubscriptionGuide
      ) {
        return;
      }
      if (e_guideKey && e_enableSubscriptionGuide) {
        return ez({
          guideKey: e_guideKey,
        });
      }
      if (
        e_interceptionType === eW.C.VIP_INSUFFICIENT &&
        e_commercialScene &&
        e_minVipLevel
      ) {
        var e = r.commercialBenefitsManager.getPluginVipModalConfig(
          e_commercialScene,
          e_commercialSceneOptions,
        );
        var featureText = e == null ? undefined : e.vipModalFeatureText;
        var copyMode = e == null ? undefined : e.vipModalPlanCopyMode;
        if (featureText && copyMode) {
          var eligiblePlanNames = ((e) => {
            const { priceList, minVipLevel } = e;
            const i = new Set();
            priceList.forEach((e) => {
              var t;
              var { level, disablePurchase } = e;
              if (
                !disablePurchase &&
                ((t = ex.MG[level]),
                level &&
                  typeof t === "number" &&
                  t > ex.MG[""] &&
                  !eC.ny(level)) &&
                ex.MG[level] >= ex.MG[minVipLevel]
              ) {
                i.add(level);
              }
            });
            return Array.from(i)
              .sort((e, t) => ex.MG[e] - ex.MG[t])
              .map((level) =>
                ex.DZ({
                  level,
                }),
              )
              .filter(Boolean);
          })({
            priceList,
            minVipLevel: e_minVipLevel,
          });
          if (eligiblePlanNames.length) {
            return ez({
              copyMode,
              eligiblePlanNames,
              featureText,
              minVipLevel: e_minVipLevel,
            });
          }
        }
      }
    }, [
      e_commercialScene,
      e_commercialSceneOptions,
      r,
      e_enableSubscriptionGuide,
      e_guideKey,
      e_interceptionType,
      isNewSubscribePage,
      e_minVipLevel,
      priceList,
    ]);
  })(vipPayManager);
  var Y = u.h(I.r3);
  var ee = u.h(j.Q);
  var et = v_1();
  var {
    isActive,
    status,
    vipLevel,
    personalIsActive,
    personalStatus,
    personalVipLevel,
    personalVipInfo,
    teamId,
    teamVipDetail,
    isTeamMode,
  } = d.F(Y, (e) => {
    var t;
    var r;
    return {
      isActive: e.effective.isActive,
      status: e.effective.status,
      vipLevel: e.effective.vipLevel,
      personalIsActive: e.personal.isActive,
      personalStatus: e.personal.status,
      personalVipLevel: e.personal.vipLevel,
      personalVipInfo: e.personal.vipInfo,
      teamId: e.team.teamId,
      teamVipDetail:
        (r = e.team.teamInfo) == null || (t = r.subscriptionInfo) == null
          ? undefined
          : t.vipDetail,
      isTeamMode: e.isTeamMode,
    };
  });
  var canShowApiEntry =
    !isTeamMode && personalIsActive && personalVipLevel === "ultra";
  var isVip = isTeamPage
    ? (teamContext == null ? undefined : teamContext.subscriptionStatus) ===
      s.pT.Active
    : isActive;
  var eh = isTeamPage
    ? (teamContext == null ? undefined : teamContext.subscriptionStatus) ===
      s.pT.Expired
    : status === "expired";
  var expiredVipLevel = isTeamPage
    ? "teams"
    : personalVipInfo == null
      ? undefined
      : personalVipInfo.expiredVipLevel;
  var membershipValidityDetails = c.useMemo(() => {
    if (
      isTeamPage &&
      (teamContext == null ? undefined : teamContext.currentTeamId) &&
      teamId === teamContext.currentTeamId
    ) {
      return C.D(teamVipDetail);
    }
    return [];
  }, [
    isTeamPage,
    teamContext == null ? undefined : teamContext.currentTeamId,
    teamId,
    teamVipDetail,
  ]);
  var credit = _.S();
  var containerService = u.h(m._);
  var eb = u.h(A.bE);
  var ef = u.h(k.s);
  var eP =
    isTeamPage &&
    !isOpenedFromPersonalSubscribePage &&
    (teamContext == null ? undefined : teamContext.currentSpaceType) ===
      s.cU.Team &&
    teamContext.role === s.t0.Owner &&
    !!teamContext.currentTeamId;
  var model = c.useMemo(() => {
    if (isTeamPage && teamContext) {
      var e = a._(
        n._(
          {},
          ((e) => {
            let t;
            const { teamContext } = e;
            const i = teamContext.subscriptionStatus === s.pT.Active;
            const n = teamContext.subscriptionStatus === s.pT.Expired;
            const visible =
              teamContext.currentSpaceType === s.cU.Team && (i || n);
            const o = teamContext.role === s.t0.Owner;
            let actionItems = [];
            if (visible && o) {
              actionItems = ["buyCredits", "manageSubscription"];
            }
            return {
              visible,
              teamName: teamContext.teamName,
              avatarColor: teamContext.avatarColor,
              currentTeamMemberLimit: teamContext.currentTeamMemberLimit,
              expireTime:
                (t = teamContext.currentTeamVipExpireTime) != null
                  ? t
                  : teamContext.expireTime,
              actions: {
                actionItems,
              },
            };
          })({
            teamContext,
          }),
        ),
        {
          expireTime: ((e) => {
            let t;
            let r;
            const { teamContext, membershipTeamId, vipDetail } = e;
            if (teamContext.subscriptionStatus !== s.pT.Active) {
              return teamContext.expireTime;
            }
            const o =
              (t = teamContext.currentTeamVipExpireTime) != null
                ? t
                : teamContext.expireTime;
            if (
              teamContext.currentSpaceType !== s.cU.Team ||
              teamContext.role !== s.t0.Member ||
              !teamContext.currentTeamId ||
              membershipTeamId !== teamContext.currentTeamId
            ) {
              return o;
            }
            const c =
              vipDetail == null || (r = vipDetail[0]) == null
                ? undefined
                : r.endTime;
            if (typeof c === "number" && Number.isFinite(c) && c > 0) {
              return c;
            }
            return o;
          })({
            teamContext,
            membershipTeamId: teamId,
            vipDetail: teamVipDetail,
          }),
        },
      );
      if (eP) {
        return e;
      }
      return a._(n._({}, e), {
        actions: {
          actionItems: e.actions.actionItems.filter((e) => e !== "buyCredits"),
        },
      });
    }
  }, [eP, isTeamPage, teamContext, teamId, teamVipDetail]);
  var eS = c.useCallback(() => {
    var e;
    g.x(
      a._(
        n._(
          {
            containerService,
            reportParam: n._(
              {
                source:
                  (e = vipPayManager.commercialSource) != null
                    ? e
                    : "multi_vip_popup_get_credits",
                scene: vipPayManager.commercialScene,
                sceneOptions: vipPayManager.commercialSceneOptions,
              },
              vipPayManager.commercialCustomReportParams && {
                customReportParams: vipPayManager.commercialCustomReportParams,
              },
            ),
          },
          enableStandaloneCreditsPackPurchaseModal === undefined
            ? {}
            : {
                enableStandaloneCreditsPackPurchaseModal,
              },
        ),
        {
          forceTheme,
        },
      ),
    );
    vipPayManager.reportPopup({
      action: "click_get_credits",
    });
  }, [
    containerService,
    enableStandaloneCreditsPackPurchaseModal,
    forceTheme,
    vipPayManager,
  ]);
  var eA = c.useCallback(
    (scope) =>
      i._(function* () {
        yield y.CA(containerService, true);
        x.d({
          scope,
          containerService,
          reportParam: {
            source: S.ok.MultiVipPopupTop,
          },
          forceTheme,
        });
        vipPayManager.reportPopup({
          action: "click_plans_and_billing",
        });
      })(),
    [containerService, forceTheme, vipPayManager],
  );
  var onOpenSubscriptionManageModal = c.useCallback(() => eA(), [eA]);
  var onManageSubscription = c.useCallback(() => eA("personal"), [eA]);
  var eR =
    (!isTeamPage ||
      (isDomesticRedesign && isOpenedFromPersonalSubscribePage)) &&
    ee.hasOpenHandler();
  c.useEffect(() => {
    if (eR) {
      vipPayManager.reportPopup({
        action: "vip_exchange_show",
        extra: {
          vip_service_entrance_position: "top",
        },
      });
    }
  }, [eR, vipPayManager]);
  var eF = c.useCallback(() => {
    vipPayManager.reportPopup({
      action: "vip_exchange_click",
      extra: {
        vip_service_entrance_position: "top",
      },
    });
    ee.open().catch((e) => {
      p.V.error("Failed to open VIP redeem modal:", e);
    });
  }, [vipPayManager, ee]);
  var eO = eR ? eF : undefined;
  var eL = c.useCallback(() => {
    Yl(
      n._(
        {
          containerService,
          forceTheme,
        },
        onCloseSubscribePage && {
          onBeforeLocateNavigate: onCloseSubscribePage,
        },
      ),
    );
    vipPayManager.reportPopup({
      action: "credits_detail",
    });
  }, [containerService, forceTheme, onCloseSubscribePage, vipPayManager]);
  var onOpenTeamCreditRechargeModal = c.useCallback(() => {
    var e;
    if (teamContext == null ? undefined : teamContext.currentTeamId) {
      c_1({
        containerService,
        reportParam: n._(
          {
            source:
              (e = vipPayManager.commercialSource) != null
                ? e
                : "multi_vip_popup_get_credits",
            scene: vipPayManager.commercialScene,
            sceneOptions: vipPayManager.commercialSceneOptions,
          },
          vipPayManager.commercialCustomReportParams && {
            customReportParams: vipPayManager.commercialCustomReportParams,
          },
        ),
        targetTeamId: teamContext.currentTeamId,
        teamCreditTradeType: "consumables",
        teamProfile: {
          teamName: teamContext.teamName,
          avatarColor: teamContext.avatarColor,
          expireTime: teamContext.expireTime,
          membershipStatus: teamContext.subscriptionStatus,
        },
        forceTheme,
      });
      vipPayManager.reportPopup({
        action: "click_get_credits",
      });
    }
  }, [
    containerService,
    forceTheme,
    teamContext == null ? undefined : teamContext.currentTeamId,
    teamContext == null ? undefined : teamContext.teamName,
    teamContext == null ? undefined : teamContext.avatarColor,
    teamContext == null ? undefined : teamContext.expireTime,
    teamContext == null ? undefined : teamContext.subscriptionStatus,
    vipPayManager,
  ]);
  var onOpenTeamCreditHistoryModal = c.useCallback(() => {
    P.p({
      containerService,
      queryScope: h.x8.Member,
      teamId: teamContext == null ? undefined : teamContext.currentTeamId,
    });
    vipPayManager.reportPopup({
      action: "credits_detail",
    });
  }, [
    containerService,
    teamContext == null ? undefined : teamContext.currentTeamId,
    vipPayManager,
  ]);
  var eV = !isTeamPage && (isVip || eh);
  var eH =
    isTeamPage &&
    !isOpenedFromPersonalSubscribePage &&
    !!(model == null ? undefined : model.visible);
  var eU =
    isTeamPage &&
    isOpenedFromPersonalSubscribePage &&
    (teamContext == null ? undefined : teamContext.currentSpaceType) ===
      s.cU.Personal &&
    teamContext.subscriptionStatus === s.pT.None &&
    !teamContext.currentTeamId &&
    (personalIsActive || personalStatus === I.lz.Expired);
  var eq = eS;
  if (isTeamPage) {
    eq = eP ? onOpenTeamCreditRechargeModal : undefined;
  }
  var material = (isTeamPage ? ef : eb).material;
  var titleResourceInfo = {
    title: material == null ? undefined : material.title,
    color:
      et === "dark"
        ? material == null
          ? undefined
          : material.titleColorDark
        : material == null
          ? undefined
          : material.titleColor,
  };
  var subscribePageResourceInfo =
    et === "dark"
      ? material == null
        ? undefined
        : material.bannerDark
      : material == null
        ? undefined
        : material.banner;
  var eG = !!(subscribePageResourceInfo == null
    ? undefined
    : subscribePageResourceInfo.enable);
  var eQ =
    Z || (isDomesticRedesign && !eH)
      ? o.jsxs("div", {
          className: ek,
          "data-banner-visible": eG,
          children: [
            o.jsx(eJ, {
              isVip: personalIsActive,
              isVipExpired: personalStatus === I.lz.Expired,
              vipLevel: personalVipLevel,
              vipInfo: personalVipInfo,
              credit,
              onBuyCredits: eS,
              onOpenCreditHistory: eL,
              onManageSubscription,
              onRedeem: eO,
              showSubscriptionManageGuideTooltip,
              onOpenApi:
                personalIsActive &&
                personalVipLevel === "ultra" &&
                showJimengApiSaleEntry &&
                (shouldShowJimengApiSaleEntry == null
                  ? undefined
                  : shouldShowJimengApiSaleEntry())
                  ? onOpenJimengApiSalesUsagePage
                  : undefined,
            }),
            eG &&
              o.jsx(useG, {
                className: ""
                  .concat(ew, " ")
                  .concat(isDomesticRedesign ? eN : ""),
                subscribePageResourceInfo,
              }),
          ],
        })
      : eH && model
        ? o.jsx(useEM, {
            isDomesticRedesign,
            model,
            teamRole: teamContext == null ? undefined : teamContext.role,
            membershipValidityDetails,
            isVip,
            isVipExpired: eh,
            currentVipLevel: vipLevel,
            expiredVipLevel,
            credit,
            subscribePageBannerResourceInfo: material,
            titleResourceInfo,
            subscriptionPageHeaderTexts,
            onOpenSubscriptionManageModal,
            onOpenTeamCreditRechargeModal,
            onOpenTeamCreditHistoryModal,
            showSubscriptionManageGuideTooltip,
          })
        : eV
          ? o.jsx(e$, {
              isVip,
              isVipExpired: eh,
              currentVipLevel: vipLevel,
              expiredVipLevel,
              vipInfo: personalVipInfo,
              credit,
              subscribePageBannerResourceInfo: material,
              titleResourceInfo,
              subscriptionPageHeaderTexts,
              onOpenCreditHistoryModal: eL,
              onOpenSubscriptionManageModal,
              onOpenCreditRechargeModal: eS,
              onOpenVipRedeem: eO,
              showSubscriptionManageGuideTooltip,
              canShowApiEntry,
              showJimengApiSaleEntry,
              shouldShowJimengApiSaleEntry,
              onOpenJimengApiSalesUsagePage,
              interceptionGuide,
              groupCreditEntries,
              showCreditPurchaseEntry: !q && !U,
            })
          : o.jsx(Q, {
              isTeamPage,
              subscribePageBannerResourceInfo: material,
              subscriptionPageHeaderTexts,
              profileSummary: eU
                ? o.jsx(e0, {
                    isActive: personalIsActive,
                    status: personalStatus,
                    vipLevel: personalVipLevel,
                    vipInfo: personalVipInfo,
                    credit,
                    onOpenCreditHistoryModal: eL,
                  })
                : undefined,
              interceptionGuide: isTeamPage ? undefined : interceptionGuide,
              onOpenCreditRechargeModal:
                q || groupCreditEntries || (U && !isTeamPage) ? undefined : eq,
              onOpenVipRedeem: isTeamPage ? undefined : eO,
            });
  return o.jsxs(o.Fragment, {
    children: [
      eQ,
      o.jsx(useEY, {
        content: Z ? interceptionGuide : undefined,
        durationMs: undefined,
      }),
    ],
  });
});
export { e1 as $ };
