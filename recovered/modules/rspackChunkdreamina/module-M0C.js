import n from "NY";
import s from "QWK";
import a from "mN";
import o from "Kt";
import * as r from "./module-pvg.js";
import l from "D5";
import c from "avO";
import d from "pgX7";
import u from "kyL";
import h from "dJB";
import p from "oa";
import g from "z8";
import b from "yw";
import _ from "bE";
import v from "z7R";
import y from "Kpt";
import f from "lj";
import k from "wF";
import S from "o7";
import C from "xi";
import T from "YC";
import w from "zS";
import x from "cO";
import j from "ED";
import N from "rL";
import R from "z6W";
import A from "gCi";
import M from "oil";
import $ from "z2";
import W from "dnp";
import E from "K7I";
import F from "ecK";
import P from "NYO";
import Z from "u3";
import K from "y6s";
import { _ as __1 } from "./module-Ij_2.js";
import "qrE";
import J from "RH";
import L from "bT";
import D from "Qey";
import H from "cz";
import I from "B3";
import V from "zP";
import X from "Cc";
import B from "jrj";
import z from "Cl8";
import Q from "u1a";
import q from "X8";
import G from "qbR";
import Y from "YR";
import ee from "Oel";
import et from "./module-zC_2.js";
import er from "Egb";
import el from "HX";
import ec from "wFY";
import { B as B_1 } from "./module-r0L.js";
import ep from "obbG";
import eb from "B0";
import _ev from "xb";
import { O } from "./module-ppd.js";
import "Yt0";
import * as eT from "./module-Qz_2.js";
import "Su";
import ew from "MzS";
import ex from "of9";
import eM from "dw4";
export { H as UiStaticConfig } from "./module-Ev3_2.js";
class m extends l.O {
  _registerDynamicSharedServices() {
    this._dynamicDependencyService.register(u.E, h.L);
    this._dynamicDependencyService.register(c.h, d.s);
  }
  _registerChildLevelServices() {
    return Promise.resolve();
  }
}
function U(e) {
  const { label, onClick, visible, report } = e;
  const { entryRef, onEntryClick } = z.G(
    {
      source: "menu",
    },
    {
      enabled: visible,
      report,
    },
  );
  return g.jsx(
    J.A.Item,
    {
      onClick: () => {
        onEntryClick();
        if (onClick != null) {
          onClick();
        }
      },
      children: g.jsx("span", {
        ref: entryRef,
        children: g.jsx(Q.r, {
          icon: g.jsx(b.WN2, {}),
          label,
        }),
      }),
    },
    "auth-req-portal",
  );
}
const ei = L.memo(
  j.PA(function (e) {
    const { menuKey, onClick } = e;
    const n = k.h(Z.x);
    const s = k.h(o._);
    const { isBound } = n;
    const { dismissed, dismiss } = ee.k(et.A);
    const c = !isBound && !dismissed;
    const d = w.A(() => {
      if (!(isBound || dismissed)) {
        dismiss();
      }
      W.z(s, {
        action: isBound ? "capcut_bound" : "bind_capcut",
      });
      if (onClick != null) {
        onClick(menuKey);
      }
    });
    const u = L.useMemo(() => {
      if (isBound) {
        return D.Ay.t("jm_capcut_sidebar_view_label", {}, "已绑定剪映账号");
      }
      return D.Ay.t("jm_capcut_sidebar_bind_label", {}, "绑定剪映账号");
    }, [isBound]);
    return g.jsxs(
      J.A.Item,
      {
        onClick: d,
        children: [
          g.jsxs("div", {
            className: "menu-item-content-zowJI4",
            children: [
              g.jsx(b.lP$, {
                className: "bind-capcut-account-icon-eb2Pfy",
              }),
              c
                ? g.jsx("div", {
                    className: "blue-dot-KoBXxx",
                  })
                : null,
            ],
          }),
          u,
        ],
      },
      menuKey,
    );
  }),
);
ei.displayName = "BindCapcutAccountMenuItem";
const popupStyle = {
  position: "relative",
  width: 196,
  padding: 4,
  borderRadius: 12,
};
const es = L.memo(function (e) {
  const { labels, onClick } = e;
  return g.jsx(
    J.A.SubMenu,
    {
      triggerProps: {
        className: "sub-menu-container-kdvL6B",
        popupStyle,
        trigger: "hover",
        showArrow: false,
      },
      title: g.jsx(Q.r, {
        icon: g.jsx(b.X_C, {}),
        label: labels.dreaminaLab,
        suffix: g.jsx("span", {
          className: "beta-kOXp8k",
          children: labels.dreaminaLabBeta,
        }),
      }),
      children: g.jsxs(
        J.A.Item,
        {
          className: "menu-item-npHVcf",
          onClick,
          children: [
            g.jsx(b.zxk, {
              className: "icon-JJ8AGD",
            }),
            labels.dreaminaClient,
          ],
        },
        "desktop-client",
      ),
    },
    "dreamina-lab",
  );
});
const { SubMenu } = J.A;
const eo = L.memo(function (e) {
  let t;
  const { menuKey, onClick } = e;
  const s = k.h(V.n);
  const a = (t = s == null ? undefined : s.supportLanguages) != null ? t : [];
  let o = "English";
  a.forEach((e) => {
    var { locale, text } = e;
    if (locale === (s == null ? undefined : s.currentLocale)) {
      o = text;
    }
  });
  const label = ""
    .concat(D.F2.t("language_mweb_new", {}, "Language"), ": ")
    .concat(o);
  const l = L.useCallback(
    (e) => {
      if (s != null) {
        s.changeLocale(e);
      }
    },
    [s],
  );
  const c = w.A(() => {
    if (onClick != null) {
      onClick(menuKey);
    }
  });
  return g.jsx(
    SubMenu,
    {
      triggerProps: {
        className: "language-sub-menu-container-OY3DAz",
        trigger: "hover",
        showArrow: false,
        onClick: c,
      },
      title: g.jsx(Q.r, {
        icon: g.jsx(b.KW9, {}),
        label,
      }),
      children: a.map((e) => {
        var { locale, text } = e;
        return g.jsxs(
          J.A.Item,
          {
            onClick: () => l(locale),
            children: [
              text,
              (s == null ? undefined : s.currentLocale) === locale
                ? g.jsx(b.iWP, {})
                : null,
            ],
          },
          locale,
        );
      }),
    },
    menuKey,
  );
});
const ed = L.memo(function (e) {
  const { menuKey, onClick } = e;
  const n = k.h(_.c);
  const s = k.h(o._);
  const a = w.A(() => {
    ec.B(s);
    var e = "".concat(location.origin).concat(er.Js).concat(er.ph[el.Du.Home]);
    n.logout(e);
    if (onClick != null) {
      onClick(menuKey);
    }
  });
  return g.jsx(
    J.A.Item,
    {
      onClick: a,
      children: g.jsx(Q.r, {
        icon: g.jsx(b.EwR, {}),
        label: D.Ay.t("web_new_login_quit_button", {}, "退出"),
      }),
    },
    menuKey,
  );
});
const { SubMenu: SubMenu_1 } = J.A;
const eh = L.memo(function (e) {
  const { region, menuKey, onClick } = e;
  const currentLocale = k.h(V.n).currentLocale;
  const a = w.A((e) => {
    if (onClick != null) {
      onClick(menuKey);
    }
    window.open(
      x.m(e, null, {
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
          "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1-W1Je%5%Qmpi$3hwWkZo%2NHSXlOWHBNTTA1d1drZFdl$Xh-T$d4aWJs$jJZekpXT%dSS*JI$mFl$*xxWWpJe*QySXlO$3hp-mxKNlRETkNl$0l6$W5aWk1qbHp%RmN4-kdKd$Z-%mhXRkpzWWxNNWQyTnRP$EJpTWs1MllrTXhkRnB-TlR*T$-yd3dXb*N3ZFdSS$Rq%lpXRXB1WkZoTlBRPT0",
      }),
      "_blank",
    );
  });
  const o = L.useCallback(() => {
    a(
      H.Tz({
        region,
        lang: currentLocale,
      }),
    );
  }, [currentLocale, a, region]);
  const r = L.useCallback(() => {
    a(
      H.G2({
        region,
        lang: currentLocale,
      }),
    );
  }, [currentLocale, a, region]);
  const l = L.useCallback(() => {
    a(
      H.SO({
        region,
        lang: currentLocale,
      }),
    );
  }, [currentLocale, a, region]);
  const c = L.useCallback(() => {
    a(H.ZL());
  }, [a]);
  const d = L.useCallback(() => {
    a(H.KE());
  }, [a]);
  const u = L.useCallback(() => {
    a(H.Qn());
  }, [a]);
  const h = L.useCallback(() => {
    a(
      H.Zn({
        region,
        lang: currentLocale,
      }),
    );
  }, [currentLocale, a, region]);
  const m = L.useCallback(() => {
    a(
      H.kd({
        region,
        lang: currentLocale,
      }),
    );
  }, [currentLocale, a, region]);
  const p = L.useMemo(
    () => [
      {
        condition: true,
        component: g.jsx(
          J.A.Item,
          {
            onClick: o,
            children: D.Ay.t("dre_m10n_sub_legal_tos", {}, "用户服务协议"),
          },
          "user_agreement",
        ),
      },
      {
        condition: true,
        component: g.jsx(
          J.A.Item,
          {
            onClick: r,
            children: D.Ay.t("web_new_my_privacy_policy_tab", {}, "隐私政策"),
          },
          "privacy_policy",
        ),
      },
      {
        condition: true,
        component: g.jsx(
          J.A.Item,
          {
            onClick: l,
            children: D.Ay.t(
              "web_home_legal_community_guidelines",
              {},
              "社区自律公约",
            ),
          },
          "community_guidelines",
        ),
      },
      {
        condition: false,
        component: g.jsx(
          J.A.Item,
          {
            onClick: c,
            children: D.Ay.t(
              "web_home_legal_user_safety_guide",
              {},
              "用户安全指南",
            ),
          },
          "user_safety_guide",
        ),
      },
      {
        condition: false,
        component: g.jsx(
          J.A.Item,
          {
            onClick: m,
            children: D.Ay.t(
              "web_home_legal_cookies_policy",
              {},
              "Cookies Policy",
            ),
          },
          "cookies_policy",
        ),
      },
      {
        condition: true,
        component: g.jsx(
          J.A.Item,
          {
            onClick: d,
            children: D.Ay.t(
              "web_home_legal_ai_feature_notice",
              {},
              "AI功能使用须知",
            ),
          },
          "ai_function_claim",
        ),
      },
      {
        condition: false,
        component: g.jsx(
          J.A.Item,
          {
            onClick: u,
            children: D.Ay.t(
              "web_new_creator_service_policy",
              {},
              "创作者服务协议",
            ),
          },
          "creator_service_agreement",
        ),
      },
      {
        condition: false,
        component: g.jsx(
          J.A.Item,
          {
            onClick: h,
            children: D.Ay.t(
              "dsa_compliance",
              {},
              "符合《数字服务法案》 (DSA) 的要求",
            ),
          },
          "dsa_compliance",
        ),
      },
    ],
    [region, d, l, u, h, r, o, c, m],
  );
  const _ = w.A(() => {
    if (onClick != null) {
      onClick(menuKey);
    }
  });
  return g.jsx(
    SubMenu_1,
    {
      triggerProps: {
        className: "protocol-sub-menu-container-Ja2bzc",
        trigger: "hover",
        showArrow: false,
        onClick: _,
      },
      title: g.jsx(Q.r, {
        icon: g.jsx(b.e38, {}),
        label: D.Ay.t("web_home_legal_entry", {}, "平台协议"),
      }),
      children: p.map((e) => {
        var { condition, component } = e;
        if (condition) {
          return component;
        }
        return null;
      }),
    },
    menuKey,
  );
});
const eg = L.memo(function (e) {
  const { menuKey, onClick, onShow, onThemeChanged } = e;
  const a = k.h(Y.B);
  const currentThemeValue = X.D();
  const r = a.getSystemTheme();
  const l = a.isFollowSystem();
  return g.jsx(ep.J, {
    menuKey,
    title: g.jsx(Q.r, {
      icon:
        currentThemeValue === I.l.Light ? g.jsx(b.pj_, {}) : g.jsx(b.dpS, {}),
      label:
        currentThemeValue === I.l.Light
          ? D.Ay.t("web_home_nav_bar_theme", {}, "浅色模式")
          : D.Ay.t("web_home_nav_bar_theme_dark_mode", {}, "深色模式"),
    }),
    className: "theme-sub-menu-container-e9965H",
    currentThemeValue,
    systemTheme: r,
    followSystem: l,
    trigger: "hover",
    showArrow: false,
    fontSize: 13,
    iconSize: 16,
    fontWeight: 400,
    checkIconSize: 16,
    paddingX: 14,
    paddingY: 12,
    onClick: (e) => {
      if (onClick == null) {
        return undefined;
      }
      return onClick(e);
    },
    onShow: (e) => {
      if (onShow == null) {
        return undefined;
      }
      return onShow(e);
    },
    onThemeChanged,
  });
});
const e_ = L.memo(function (e) {
  const { menuKey, onClick } = e;
  const s = k.h(eb.N);
  const [a, setA] = L.useState(false);
  const r = D.Ay.t("drm_web_ai_watermark_title", {}, "AI生成水印设置");
  const l = w.A(() =>
    n._(function* () {
      if (!a) {
        setA(true);
        if (onClick != null) {
          onClick(menuKey);
        }
        yield s.showWatermarkSettingModal(true, "settings");
        setA(false);
      }
    })(),
  );
  return g.jsx(
    J.A.Item,
    {
      onClick: l,
      children: g.jsx(Q.r, {
        icon: g.jsx(b.UqS, {}),
        label: r,
        title: r,
        suffix: null,
      }),
    },
    menuKey,
  );
});
const ek = "top-actions-setting-dropdown-container-b1vbrn";
function eS(e) {
  const {
    visible,
    reportAuthExemption,
    labels,
    currentTheme,
    systemTheme,
    followSystem,
    currentThemeLabel,
    leadingContent,
    isTopActions = false,
    showAuthReqPortal = false,
    showDreaminaLabEntry = false,
    showModelTrainingEntry = false,
    onSelectTheme,
    onClickAuthReqPortal,
    onClickModelTraining,
    onClickCliConfig,
    onShowCliConfig,
    onClickDreaminaClient,
    onClickUpdateLog,
    onClickTutorialCenter,
    onClickProtocol,
    onClickQualification,
    onOpenUserAgreement,
    onOpenPrivacyPolicy,
    onOpenCommunityGuidelines,
    onOpenAiFunctionClaim,
  } = e;
  return g.jsx("div", {
    className: _ev("domestic-setting-dropdown-container-OuuWsU", {
      [ek]: isTopActions,
    }),
    onClick: (e) => e.stopPropagation(),
    onMouseOver: (e) => e.stopPropagation(),
    children: g.jsx(O, {
      visible,
      reportAuthExemption,
      labels,
      currentTheme,
      systemTheme,
      followSystem,
      currentThemeLabel,
      leadingContent,
      mainFrame2026: isTopActions,
      subMenuPlacement: isTopActions ? "left" : "right",
      showAuthReqPortal,
      showDreaminaLabEntry,
      showModelTrainingEntry,
      showDownloadAppEntry: true,
      downloadAppEntryPlacement: "beforeProtocol",
      onSelectTheme,
      onClickAuthReqPortal,
      onClickModelTraining,
      onClickCliConfig,
      onShowCliConfig,
      onClickDreaminaClient,
      onClickUpdateLog,
      onClickTutorialCenter,
      onClickProtocol,
      onClickQualification,
      onOpenUserAgreement,
      onOpenPrivacyPolicy,
      onOpenCommunityGuidelines,
      onOpenAiFunctionClaim,
    }),
  });
}
const ej = {
  left: 8,
  right: 18,
  top: 8,
  bottom: 8,
};
function useEN(e) {
  const { children, droplist, isTopActions, popupVisible, onVisibleChange } = e;
  const oRef = L.useRef(null);
  const [r, l] = ex.BJ({
    anchorRef: oRef,
    enabled: isTopActions,
  });
  const position = isTopActions ? "br" : "rb";
  const trigger = ((e) => {
    const { isTopActions, isOversea } = e;
    if (isTopActions || isOversea) {
      return "click";
    }
    return "hover";
  })({
    isTopActions,
    isOversea: false,
  });
  const u = w.A((e) => {
    if (e) {
      l();
    }
    onVisibleChange(e);
  });
  return g.jsx(ew.A, {
    trigger,
    droplist,
    popupVisible,
    position,
    popupAlign: isTopActions
      ? {
          bottom: [r, 4],
        }
      : ej,
    triggerProps: {
      className: _ev("setting-dropdown-trigger-_CVRTu", {
        "top-actions-setting-dropdown-trigger-s9i0D5": isTopActions,
      }),
    },
    onVisibleChange: u,
    children: g.jsx("div", {
      ref: oRef,
      className: "dropdown-trigger-O7JVMC",
      onMouseEnter: l,
      onFocus: l,
      children,
    }),
  });
}
const eR = L.memo(function (e) {
  const {
    children,
    hasPublishAuthority,
    hasLogin,
    region,
    isCommercialRegion,
    isShowBindCapCutAccount,
    isShowAuthReqPortal,
    isShowAppDownload,
    guestQuickActionConfigs,
    menuWrapperPlacement,
    isShowDreaminaLabEntry,
    isShowModelTraining,
    onSettingItemClick,
    onSettingCenterShow,
    onShowCliConfig,
    onClickUpdateLog,
    onClickTutorialCenter,
    onClickAuthReqPortal,
    onThemeReportClick,
    onClickModelTraining,
  } = e;
  const [T, setT] = L.useState(false);
  const N = B.I();
  const R = k.h(V.n);
  const M = k.h(Y.B);
  const currentTheme = X.D();
  const [W, setW] = L.useState(() => M.getSystemTheme());
  const [F, setF] = L.useState(() => M.isFollowSystem());
  const R_currentLocale = R.currentLocale;
  const labels = B_1();
  const O = A.cp(false, isShowDreaminaLabEntry);
  const currentThemeLabel =
    currentTheme === I.l.Light ? labels.lightMode : labels.darkMode;
  L.useEffect(() => {
    var e = M.onDidFollowSystemChange((e) => {
      setF(e);
    });
    var t = M.onDidSystemThemeChange((e) => {
      setW(e);
    });
    return () => {
      e.dispose();
      t.dispose();
    };
  }, [M]);
  const ee = w.A(() => {
    if (onClickUpdateLog != null) {
      onClickUpdateLog();
    }
    setT(true);
  });
  const et = w.A(() => {
    if (onClickTutorialCenter != null) {
      onClickTutorialCenter();
    }
    setT(true);
  });
  const en = w.A(() => {
    if (onClickAuthReqPortal != null) {
      onClickAuthReqPortal();
    }
    setT(true);
  });
  const ea = w.A((e) => {
    if (onSettingItemClick != null) {
      onSettingItemClick(e);
    }
    setT(true);
  });
  const onSelectTheme = w.A((e) => {
    if (e === "system") {
      M.setFollowSystem(true);
      M.setTheme(M.getSystemTheme());
      if (onThemeReportClick != null) {
        onThemeReportClick("follow_system");
      }
      setT(true);
      return;
    }
    M.setFollowSystem(false);
    M.setTheme(e);
    if (onThemeReportClick != null) {
      onThemeReportClick(e === I.l.Light ? "light_mode" : "dark_mode");
    }
    setT(true);
  });
  const onOpenUserAgreement = w.A(() => {
    ea("protocol");
    window.open(
      x.m(
        H.Tz({
          region,
          lang: R_currentLocale,
        }),
        null,
        {
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
            "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1-W1Je%5%Qmpi$3hwWkZo%2NHSXlOWHBNTTA1d1drZFdl$Xh-T$d4aWJs$jJZekpXT%dSS*JI$mFl$*xxWWpJe*QySXlO$3hp-mxKNlRETk9iR1JJ$W5CaWJXTjBXa2hLZ*1OSF$uWmtNalIyWXpK$01H%khiSFZhZ$R*clkyMD$kMXBIT1ROaWF%$XdZek5v-%dOdFpERmpkejA5",
        },
      ),
      "_blank",
    );
    setT(true);
  });
  const onOpenPrivacyPolicy = w.A(() => {
    ea("protocol");
    window.open(
      x.m(
        H.G2({
          region,
          lang: R_currentLocale,
        }),
        null,
        {
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
            "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1-W1Je%5%Qmpi$3hwWkZo%2NHSXlOWHBNTTA1d1drZFdl$Xh-T$d4aWJs$jJZekpXT%dSS*JI$mFl$*xxWWpJe*QySXlO$3hp-mxKNlRETk9iR1JJ$W5CaWJXTjBXa2hLZ*1OSF$uWmtNalIyWXpK$01H%khiSFZhZ$R*clkyMD$kMXBIT1ROaWF%$XdZek5v-%dOdFpERmpkejA5",
        },
      ),
      "_blank",
    );
    setT(true);
  });
  const onOpenCommunityGuidelines = w.A(() => {
    ea("protocol");
    window.open(
      x.m(
        H.SO({
          region,
          lang: R_currentLocale,
        }),
        null,
        {
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
            "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1-W1Je%5%Qmpi$3hwWkZo%2NHSXlOWHBNTTA1d1drZFdl$Xh-T$d4aWJs$jJZekpXT%dSS*JI$mFl$*xxWWpJe*QySXlO$3hp-mxKNlRETk9iR1JJ$W5CaWJXTjBXa2hLZ*1OSF$uWmtNalIyWXpK$01H%khiSFZhZ$R*clkyMD$kMXBIT1ROaWF%$XdZek5v-%dOdFpERmpkejA5",
        },
      ),
      "_blank",
    );
    setT(true);
  });
  const onOpenAiFunctionClaim = w.A(() => {
    ea("protocol");
    window.open(
      x.m(H.KE(), null, {
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
          "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1-W1Je%5%Qmpi$3hwWkZo%2NHSXlOWHBNTTA1d1drZFdl$Xh-T$d4aWJs$jJZekpXT%dSS*JI$mFl$*xxWWpJe*QySXlO$3hp-mxKNlRETk9iR1JJ$W5CaWJXTjBXa2hLZ*1OSF$uWmtNalIyWXpK$01H%khiSFZhZ$R*clkyMD$kMXBIT1ROaWF%$XdZek5v-%dOdFpERmpkejA5",
      }),
      "_blank",
    );
    setT(true);
  });
  const onClickQualification = w.A(() => {
    ea("qualification");
    window.open(
      x.m(H.X3(), null, {
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
          "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1-W1Je%5%Qmpi$3hwWkZo%2NHSXlOWHBNTTA1d1drZFdl$Xh-T$d4aWJs$jJZekpXT%dSS*JI$mFl$*xxWWpJe*QySXlO$3hp-mxKNlRETk9iR1JJ$W5CaWJXTjBXa2hLZ*1OSF$uWmtNalIyWXpK$01H%khiSFZhZ$R*clkyMD$kMXBIT1ROaWF%$XdZek5v-%dOdFpERmpkejA5",
      }),
      "_blank",
    );
  });
  const ev = L.useMemo(
    () => [
      {
        key: "app-download",
        condition: isShowAppDownload,
        component: g.jsx(
          G.S,
          {
            menuKey: "app-download",
            onClick: () => ea("app-download"),
            onShow: () => {
              if (onSettingItemClick == null) {
                return undefined;
              }
              return onSettingItemClick("app-download");
            },
          },
          "app-download",
        ),
      },
      {
        key: "desktop-client",
        condition: O === "oversea",
        component: g.jsx(
          es,
          {
            labels,
            onClick: () => ea("desktop-client"),
          },
          "desktop-client",
        ),
      },
      {
        key: "protocol",
        condition: true,
        component: g.jsx(
          eh,
          {
            menuKey: "protocol",
            hasPublishAuthority,
            region,
            onClick: ea,
          },
          "protocol",
        ),
      },
      {
        key: "update-log",
        condition: true,
        component: g.jsx(
          J.A.Item,
          {
            onClick: ee,
            children: g.jsx(Q.r, {
              icon: g.jsx(b.p0W, {}),
              label: D.Ay.t("web_update_doc", {}, "更新日志"),
            }),
          },
          "update-log",
        ),
      },
      {
        key: "theme",
        condition: true,
        component: g.jsx(
          eg,
          {
            menuKey: "theme",
            onClick: onSettingItemClick,
            onThemeChanged: onThemeReportClick,
          },
          "theme",
        ),
      },
      {
        key: "watermark",
        condition: hasLogin && true,
        component: g.jsx(
          e_,
          {
            menuKey: "watermark",
            onClick: onSettingItemClick,
          },
          "watermark",
        ),
      },
      {
        key: "auth-req-portal",
        condition: hasLogin && isShowAuthReqPortal,
        component: g.jsx(
          U,
          {
            visible: T,
            report: N,
            onClick: en,
            label: D.Ay.t("auth_exemption_application", {}, "版权授权管理"),
          },
          "auth-req-portal",
        ),
      },
      {
        key: "language",
        condition: false,
        component: g.jsx(
          eo,
          {
            menuKey: "language",
            onClick: onSettingItemClick,
          },
          "language",
        ),
      },
      {
        key: "bind-capcut-account",
        condition: hasLogin && isShowBindCapCutAccount,
        component: g.jsx(
          ei,
          {
            menuKey: "bind-capcut-account",
            onClick: onSettingItemClick,
          },
          "bind-capcut-account",
        ),
      },
      {
        key: "logout",
        condition: !q.Z() && hasLogin,
        component: g.jsx(
          ed,
          {
            menuKey: "logout",
            onClick: onSettingItemClick,
          },
          "logout",
        ),
      },
    ],
    [
      hasPublishAuthority,
      region,
      ea,
      onSettingItemClick,
      ee,
      en,
      isShowAppDownload,
      O,
      labels,
      hasLogin,
      isCommercialRegion,
      onThemeReportClick,
      isShowBindCapCutAccount,
      isShowAuthReqPortal,
      T,
      N,
    ],
  );
  const isTopActions = menuWrapperPlacement === "top-actions";
  ((e) => {
    const { children, guestQuickActionConfigs, isTopActions = false } = e;
    J.A;
    _ev("setting-dropdown-container-HL8uct", {
      [ek]: isTopActions,
    });
    eT.n;
  })({
    guestQuickActionConfigs,
    isTopActions,
    children: ev.map((e) => {
      var { condition, component } = e;
      if (condition) {
        return component;
      }
      return null;
    }),
  });
  const droplist = g.jsx(eS, {
    visible: T,
    reportAuthExemption: N,
    labels,
    currentTheme,
    systemTheme: W,
    followSystem: F,
    currentThemeLabel,
    leadingContent: g.jsx(eT.n, {
      configs: guestQuickActionConfigs,
      variant: "domestic",
    }),
    isTopActions,
    showAuthReqPortal: hasLogin && isShowAuthReqPortal,
    showDreaminaLabEntry: O === "domestic",
    showModelTrainingEntry: hasLogin && isShowModelTraining,
    onSelectTheme,
    onClickAuthReqPortal: en,
    onClickModelTraining,
    onClickCliConfig: () => ea("cli-config"),
    onShowCliConfig,
    onClickDreaminaClient: () => ea("desktop-client"),
    onClickUpdateLog: ee,
    onClickTutorialCenter: et,
    onClickProtocol: () => ea("protocol"),
    onClickQualification,
    onOpenUserAgreement,
    onOpenPrivacyPolicy,
    onOpenCommunityGuidelines,
    onOpenAiFunctionClaim,
  });
  const ew = w.A((e) => {
    setT(e);
    if (e) {
      if (onSettingCenterShow != null) {
        onSettingCenterShow();
      }
    }
  });
  return g.jsx(useEN, {
    isTopActions,
    droplist,
    popupVisible: T,
    onVisibleChange: ew,
    children,
  });
});
const eA = j.PA(function (e) {
  const { children, menuWrapperPlacement, store } = e;
  const s = k.h(o._);
  const a = k.h(f.K);
  const l = k.h(P.k);
  const c = k.h($.M);
  const { isShowBindCapcutEntry } = k.h(Z.x);
  const [, u] = R.o({
    featureKey: N.bp.AUTH_REQ_PORTAL,
  });
  const isShowModelTraining = K.q();
  const isShowAuthReqPortal = r.Og(u == null ? undefined : u.status);
  const p = A.$p(false, false);
  const isShowDreaminaLabEntry = A.$R(p);
  const onSettingItemClick = w.A((e) => {
    switch (e) {
      case "protocol":
        W.z(s, {
          action: "agreement",
        });
        break;
      case "bind-capcut-account":
        c.getInstance().then((e) => {
          e.startBindingFlow({
            enterFrom: "settings_page",
          });
        });
        break;
      case "watermark":
        W.z(s, {
          action: "watermark_page",
        });
        break;
      case "cli-config":
        W.z(s, {
          action: "click_cli",
        });
        M.x(a, F.y(s));
        break;
      case "desktop-client":
        __1(s, a, E.Ii.SettingsCenter);
        break;
      case "qualification":
        W.z(s, {
          action: "qualification",
        });
        break;
      case "language":
        W.z(s, {
          action: "language",
        });
    }
  });
  const onClickModelTraining = w.A(() => {
    W.z(s, {
      action: "model_training_page",
    });
    l.showModelTrainingSettingModal({
      scope: "personal",
    });
  });
  const onShowCliConfig = w.A(() => {
    W.z(s, {
      action: "show_cli",
    });
  });
  const onSettingCenterShow = w.A(() => {
    W.z(s, {
      action: "show",
    });
  });
  const onThemeReportClick = w.A((e) => {
    W.z(s, {
      action: {
        light_mode: "light_mode",
        dark_mode: "dark_mode",
        follow_system: "follow_system",
      }[e],
    });
  });
  const onClickUpdateLog = w.A(() => {
    W.z(s, {
      action: "changelog",
    });
    window.open(
      "https://bytedance.larkoffice.com/wiki/QxMCwlqmhisbwhklwPLctMyNncb",
      "_blank",
    );
  });
  const j = w.A(() => {
    W.z(s, {
      action: "tutorial",
    });
    window.open(
      x.m(r.LA, null, {
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
          "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1-W1Je%5%Qmpi$3hwWkZo%2NHSXlOWHBNTTA1d1drZFdl$Xh-T$d4aWJs$jJZekpXT%dSS*JI$mFl$*xxWWpJe*QySXlO$3hp-mxKNlRETk9iR1JJ$W5CaWJXTjBX$EpXZFdSSFZubE1NMD$zWk$o%2NHSnRZM1JaTWxaM$pFZFdl$Xh1$W5wbFIwWj$Xak5XZWc9PQ",
      }),
      "_blank",
    );
  });
  const onClickAuthReqPortal = w.A(() => {
    W.z(s, {
      action: "exemption_apply",
    });
    window.open(
      x.m(r.Jv, null, {
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
          "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1-W1Je%5%Qmpi$3hwWkZo%2NHSXlOWHBNTTA1d1drZFdl$Xh-T$d4aWJs$jJZekpXT%dSS*JI$mFl$*xxWWpJe*QySXlO$3hp-mxKNlRETk9iR1JJ$W5CaWJXTjBX$EpXZFdSSFZubE1NMD$zWk$o%2NHSnRZM1JaTWxaM$pFZFdl$Xh1$W5wbFIwWj$Xak5XZWc9PQ",
      }),
      "_blank",
    );
  });
  const guestQuickActionConfigs =
    store.hasLogin || menuWrapperPlacement !== "top-actions"
      ? []
      : ["SiderMenuRender3DPluginEntrance"]
          .map((e) => a.getSideMenuConfigs().find((t) => t.id === e))
          .filter((e) => {
            var t;
            return (
              e !== undefined &&
              !((t = e.shouldHidden) == null ? undefined : t.call(e))
            );
          });
  return g.jsx(g.Fragment, {
    children: g.jsx(eR, {
      hasPublishAuthority: store.hasPublishAuthority,
      hasLogin: store.hasLogin,
      region: store.region,
      isCommercialRegion: store.isCommercialRegion,
      isShowBindCapCutAccount: isShowBindCapcutEntry,
      isShowAuthReqPortal,
      isShowAppDownload: true,
      guestQuickActionConfigs,
      menuWrapperPlacement,
      isShowDreaminaLabEntry,
      isShowModelTraining,
      onSettingItemClick,
      onClickModelTraining,
      onSettingCenterShow,
      onShowCliConfig,
      onClickUpdateLog,
      onClickTutorialCenter: j,
      onClickAuthReqPortal,
      onThemeReportClick,
      children,
    }),
  });
});
class e$ {
  get hasPublishAuthority() {
    return this._hasPublishAuthority;
  }
  get region() {
    return this._region;
  }
  get hasLogin() {
    return this._hasLogin;
  }
  get isCommercialRegion() {
    return this._isCommercialRegion;
  }
  setHasPublishAuthority(e) {
    this._hasPublishAuthority = e;
  }
  setRegion(e) {
    this._region = e;
  }
  setHasLogin(e) {
    this._hasLogin = e;
  }
  setIsCommercialRegion(e) {
    this._isCommercialRegion = e;
  }
  constructor() {
    this._hasPublishAuthority = false;
    this._hasLogin = false;
    this._region = "";
    this._isCommercialRegion = true;
    eM.l_(this);
  }
}
class eW extends S.jG {
  _registerOverseaConfig() {
    this._platformUiConfigurationService.registerConfig({
      [y.N.SideMenu]: [
        {
          id: "SiderMenuSetting",
          MenuWrapper: (e) => this.content(e),
        },
      ],
    });
  }
  _registerDomesticConfig() {
    if (!this._hasRegisteredDomesticConfig) {
      this._platformUiConfigurationService.registerConfig({
        [y.N.SideMenu]: [
          {
            id: "SiderMenuSetting",
            type: "icon",
            icon: () => g.jsx(b.dd8, {}),
            order: 996,
            position: "bottom",
            MenuWrapper: (e) => this.content(e),
          },
        ],
      });
      this._hasRegisteredDomesticConfig = true;
    }
  }
  _unRegisterDomesticConfig() {
    if (this._hasRegisteredDomesticConfig) {
      this._platformUiConfigurationService.unRegisterConfig("SiderMenuSetting");
      this._hasRegisteredDomesticConfig = false;
    }
  }
  content(e) {
    return g.jsx(k.Z, {
      instantiationService: this._containerService,
      children: g.jsx(T.t, {
        fallback: g.jsx("div", {}),
        children: g.jsx(
          eA,
          p._(
            {
              store: this._settingStore,
            },
            e,
          ),
        ),
      }),
    });
  }
  _initStoreValue() {
    const { region } = this._accountService.userProfile;
    this._settingStore.setRegion("cn");
    this._settingStore.setHasLogin(true);
    this._settingStore.setIsCommercialRegion(true);
    this._userPublishAuthorityService
      .getHasDefaultPublishAuthority()
      .then((e) => {
        this._settingStore.setHasPublishAuthority(e);
      });
  }
  _initDomesticStoreValue(e) {
    this._settingStore.setRegion("cn");
    this._settingStore.setHasLogin(e);
    this._settingStore.setIsCommercialRegion(true);
  }
  _syncCommercialRegion() {
    return n
      ._(function* () {
        const e = ++this._commercialRegionRequestId;
        try {
          const t =
            yield this._dreaminaCommercialFeatureLoaderService.getInstance();
          if (
            e !== this._commercialRegionRequestId ||
            !this._accountService.hasLogin
          ) {
            return;
          }
          const i = () => {
            if (
              e === this._commercialRegionRequestId &&
              this._accountService.hasLogin
            ) {
              var { commercialStrategyService } = t;
              this._settingStore.setIsCommercialRegion(
                commercialStrategyService.isReady &&
                  !commercialStrategyService.isInFreemiumStage,
              );
            }
          };
          this._disposeCommercialRegionListener();
          const n = t.onReadyChange(i);
          const s = t.commercialStrategyService.onIsInFreemiumStageChange(i);
          this._commercialRegionDisposable = {
            dispose: () => {
              n.dispose();
              s.dispose();
            },
          };
          i();
        } catch (error) {
          if (e !== this._commercialRegionRequestId) {
            return;
          }
          C.V.error(
            "Failed to get commercial feature for watermark menu:",
            error,
          );
          this._settingStore.setIsCommercialRegion(false);
        }
      })
      .call(this);
  }
  _disposeCommercialRegionListener() {
    let e;
    if ((e = this._commercialRegionDisposable) != null) {
      e.dispose();
    }
    this._commercialRegionDisposable = undefined;
  }
  _bindEvents() {
    if (this._accountService.hasLogin) {
      this._initStoreValue();
    } else {
      this._store.add(
        this._accountService.onDidLogin(() => {
          this._initStoreValue();
        }),
      );
    }
    this._store.add(
      this._accountService.onDidLogout(() => {
        this._commercialRegionRequestId += 1;
        this._disposeCommercialRegionListener();
        this._settingStore.setHasLogin(false);
        this._settingStore.setIsCommercialRegion(true);
      }),
    );
  }
  _bindDomesticEvents() {
    this._store.add(
      this._accountService.onDidLogin(() => {
        this._initDomesticStoreValue(true);
        this._unRegisterDomesticConfig();
      }),
    );
    this._store.add(
      this._accountService.onDidLogout(() => {
        this._initDomesticStoreValue(false);
        this._registerDomesticConfig();
      }),
    );
    this._store.add({
      dispose: () => {
        this._unRegisterDomesticConfig();
      },
    });
  }
  constructor(e, t, i, n, s) {
    super();
    this._containerService = e;
    this._platformUiConfigurationService = t;
    this._accountService = i;
    this._dreaminaCommercialFeatureLoaderService = n;
    this._userPublishAuthorityService = s;
    this._settingStore = new e$();
    this._commercialRegionRequestId = 0;
    this._hasRegisteredDomesticConfig = false;
    this._initDomesticStoreValue(this._accountService.hasLogin);
    if (!this._accountService.hasLogin) {
      this._registerDomesticConfig();
    }
    this._bindDomesticEvents();
  }
}
eW = s.Cg(
  [
    s.Qj(0, o._),
    s.Qj(1, f.K),
    s.Qj(2, _.c),
    s.Qj(3, v.jV),
    s.Qj(4, u.E),
    s.Sn("design:type", Function),
    s.Sn("design:paramtypes", [
      o._ === undefined ? Object : o._,
      f.K === undefined ? Object : f.K,
      _.c === undefined ? Object : _.c,
      v.jV === undefined ? Object : v.jV,
      u.E === undefined ? Object : u.E,
    ]),
  ],
  eW,
);
class eE {
  dispose() {
    let e;
    let t;
    if ((e = this._childContainerService) != null) {
      e.dispose();
    }
    if ((t = this._instance) != null) {
      t.dispose();
    }
  }
  _bootstrap() {
    return n
      ._(function* () {
        this._childContainerService =
          yield this._pageContainerServiceFactory.createChild();
        this._instance = this._childContainerService.createInstance(eW);
      })
      .call(this);
  }
  constructor(e) {
    this._pageContainerServiceFactory = e.createInstance(m);
    this._bootstrap();
  }
}
eE = s.Cg(
  [
    s.Qj(0, o._),
    s.Sn("design:type", Function),
    s.Sn("design:paramtypes", [o._ === undefined ? Object : o._]),
  ],
  eE,
);
export var contribution = {
  id: r.h1,
  ctor: eE,
  instantiationPhase: a.J.Eager,
  registerWhenLogin: false,
};
