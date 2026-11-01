import n from "z8";
import s from "bT";
import _a from "xb";
import r from "yw";
import { KE, R_, ae } from "./module-co_3.js";
import { A as A_1 } from "./module-ZmS.js";
import u from "Cl8";
import * as h from "./module-CZm.js";
import p from "LaG";
import g from "Ri8";
import _ from "cO";
import v from "Qey";
import y from "cz";
import f from "Yt0";
import w from "G4";
import N from "zS";
import R from "ED";
import A from "wF";
import M from "Kt";
import $ from "nV";
import "xj";
import W from "R8";
import D from "B3";
function d(e) {
  const { label, showEntryHint, onClick, onDismissEntryHint } = e;
  return n.jsx(KE, {
    icon: n.jsxs("span", {
      className: A_1.bindCapcutIcon,
      children: [
        n.jsx(r.lP$, {}),
        showEntryHint
          ? n.jsx("span", {
              className: A_1.bindCapcutEntryHint,
            })
          : null,
      ],
    }),
    label,
    onClick: () => {
      if (showEntryHint) {
        if (onDismissEntryHint != null) {
          onDismissEntryHint();
        }
      }
      if (onClick != null) {
        onClick();
      }
    },
  });
}
function m(e) {
  const { label, onClick, report } = e;
  const enabled = h.o();
  const { entryRef, onEntryClick } = u.G(
    {
      source: "menu",
    },
    {
      enabled,
      report,
    },
  );
  return n.jsx(KE, {
    buttonRef: entryRef,
    icon: n.jsx(r.WN2, {}),
    label,
    onClick: () => {
      onEntryClick();
      if (onClick != null) {
        onClick();
      }
    },
  });
}
function useB(e) {
  const { label, sessionVisible, onClick, onShow } = e;
  const r = h.o();
  const [buttonRef, u] = p.lV();
  const mRef = s.useRef(false);
  const bRef = s.useRef(onShow);
  s.useEffect(() => {
    bRef.current = onShow;
  }, [onShow]);
  s.useEffect(() => {
    if (!sessionVisible) {
      mRef.current = false;
    }
  }, [sessionVisible]);
  s.useEffect(() => {
    if (sessionVisible && r && u && !mRef.current && bRef.current) {
      mRef.current = true;
      bRef.current();
    }
  }, [sessionVisible, r, u]);
  return n.jsx(KE, {
    buttonRef,
    icon: n.jsx("span", {
      className: A_1.cliIcon,
      children: n.jsx(g.q, {}),
    }),
    label,
    onClick,
  });
}
const k = "text-block-F1Prj5";
const S = "link-CKLA2h";
const C = "separator-le7Ukw";
function T() {
  return n.jsxs("div", {
    className: "qualification-content-MmY5dh",
    children: [
      n.jsxs("div", {
        className: k,
        children: [
          n.jsxs("p", {
            children: [
              n.jsx("a", {
                className: S,
                href: _.m(y.X3(), null, {
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
                    "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1-W1Je%5%Qmpi$3hwWkZo%2NHSXlOWHBNTTA1d1drZFdl$Xh-T$d4aWJs$jJZekpXT%dSS*JI$mFl$*xxWWpJe*QySXlO$3hp-mxKNlRESktN$015-khW-$dFNTZ%RmQ0-0Zre$Zu$mpNbF-yWTFo$2FHSkhiRzFo$jA1b1pFZHNkb%pwT$dwa%1q$XdXb*MxT%$4d$$uc*xSMFo1$2pO$2$nPT0",
                }),
                target: "_blank",
                rel: "noopener noreferrer",
                children: v.Ay.t(
                  "web_new_dreamina_bottom_compliance_license",
                  {},
                  "营业执照",
                ),
              }),
              n.jsx("span", {
                className: C,
                children: " | ",
              }),
              n.jsx("a", {
                className: S,
                href: _.m(y.IO(), null, {
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
                    "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1-W1Je%5%Qmpi$3hwWkZo%2NHSXlOWHBNTTA1d1drZFdl$Xh-T$d4aWJs$jJZekpXT%dSS*JI$mFl$*xxWWpJe*QySXlO$3hp-mxKNlRESktN$015-khW-$dFNTZ%RmQ0-0Zre$Zu$mpNbF-yWTFo$2FHSkhiRzFo$jA1b1pFZHNkb%pwT$dwa%1q$XdXb*MxT%$4d$$uc*xSMFo1$2pO$2$nPT0",
                }),
                target: "_blank",
                rel: "noopener noreferrer",
                children: v.Ay.t(
                  "web_new_dreamina_bottom_compliance_number",
                  {},
                  "ICP 备案：粤 ICP 备 13065114 号 - 22",
                ),
              }),
              n.jsx("span", {
                className: C,
                children: " | ",
              }),
            ],
          }),
          n.jsxs("p", {
            children: [
              n.jsx("span", {
                children: v.Ay.t(
                  "web_new_ICP_certificate",
                  {},
                  "粤 B2-20190879",
                ),
              }),
              n.jsx("span", {
                className: C,
                children: " |",
              }),
            ],
          }),
        ],
      }),
      n.jsxs("div", {
        className: "police-row-HIRBIp",
        children: [
          n.jsx("span", {
            className: "gongan-icon-b1e1DO",
            children: n.jsx("img", {
              src: _.m(f, null, {
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
                  "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1-W1Je%5%Qmpi$3hwWkZo%2NHSXlOWHBNTTA1d1drZFdl$Xh-T$d4aWJs$jJZekpXT%dSS*JI$mFl$*xxWWpJe*QySXlO$3hp-mxKNlRESktN$015-khW-$dFNTZ%RmQ0-0Zre$Zu$mpNbF-yWTFo$2FHSkhiRzFo$jA1b1pFZHNkb%pwT$dwa%1q$XdXb*MxT%$4d$$uc*xSMFo1$2pO$2$nPT0",
              }),
              alt: "IconGongAn",
              loading: "lazy",
            }),
          }),
          n.jsx("a", {
            className: S,
            href: _.m(y.FC(), null, {
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
                "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1-W1Je%5%Qmpi$3hwWkZo%2NHSXlOWHBNTTA1d1drZFdl$Xh-T$d4aWJs$jJZekpXT%dSS*JI$mFl$*xxWWpJe*QySXlO$3hp-mxKNlRESktN$015-khW-$dFNTZ%RmQ0-0Zre$Zu$mpNbF-yWTFo$2FHSkhiRzFo$jA1b1pFZHNkb%pwT$dwa%1q$XdXb*MxT%$4d$$uc*xSMFo1$2pO$2$nPT0",
            }),
            target: "_blank",
            rel: "noopener noreferrer",
            children: v.Ay.t(
              "web_new_gongan_number_jimeng_web",
              {},
              "粤公网安备 44030002004191 号",
            ),
          }),
          n.jsx("span", {
            className: C,
            children: " |",
          }),
        ],
      }),
      n.jsxs("div", {
        className: k,
        children: [
          n.jsxs("p", {
            children: [
              n.jsx("span", {
                children: v.Ay.t(
                  "web_new_dreamina_bottom_compliance_developer",
                  {},
                  "开发者：深圳市脸萌科技有限公司",
                ),
              }),
              n.jsx("span", {
                className: C,
                children: " |",
              }),
            ],
          }),
          n.jsx("p", {
            children: n.jsx("span", {
              children: v.Ay.t(
                "web_new_dreamina_bottom_compliance_address",
                {},
                "地址：深圳市南山区招商街道水湾社区太子路 51 号太子广场 1104",
              ),
            }),
          }),
        ],
      }),
    ],
  });
}
function x(e) {
  const e_parentElement = e.parentElement;
  if (e_parentElement) {
    const i = e_parentElement.getBoundingClientRect().top;
    const n = Math.max(
      8,
      Math.min(i, document.documentElement.clientHeight - 8 - e.offsetHeight),
    );
    const s = `${n - i}px`;
    if (e.style.top !== s) {
      e.style.top = s;
    }
  }
}
function useJ(e) {
  const { children } = e;
  const iRef = s.useRef(null);
  const a = h.o();
  w.E(() => {
    if (a && iRef.current) {
      x(iRef.current);
    }
  });
  w.E(() => {
    var e;
    var iRef_current = iRef.current;
    var n = iRef_current == null ? undefined : iRef_current.parentElement;
    if (a && iRef_current && n) {
      var s = () => {
        if (e === undefined) {
          e = requestAnimationFrame(() => {
            e = undefined;
            x(iRef_current);
          });
        }
      };
      var o = (e) => {
        if (!(e.target instanceof Node && iRef_current.contains(e.target))) {
          s();
        }
      };
      var r =
        typeof ResizeObserver === "function"
          ? new ResizeObserver(s)
          : undefined;
      if (r != null) {
        r.observe(iRef_current);
      }
      if (r != null) {
        r.observe(n);
      }
      window.addEventListener("resize", s);
      window.addEventListener("scroll", o, true);
      return () => {
        if (r != null) {
          r.disconnect();
        }
        window.removeEventListener("resize", s);
        window.removeEventListener("scroll", o, true);
        if (e !== undefined) {
          cancelAnimationFrame(e);
        }
      };
    }
  }, [a]);
  return n.jsx("div", {
    ref: iRef,
    className: A_1.settingsSubMenuSlot,
    children,
  });
}
function E(e) {
  const { imageUrl, title, description, copyLinkLabel, onCopyLink } = e;
  return n.jsxs("div", {
    className: "download-app-content-LreDIM",
    children: [
      n.jsxs("div", {
        className: "download-app-text-fzKMmM",
        children: [
          n.jsx("div", {
            className: "download-app-title-xWerUa",
            children: title,
          }),
          n.jsx("div", {
            className: "download-app-description-flq2Ti",
            children: description,
          }),
          n.jsx(W.A, {
            type: "primary",
            className: "copy-link-button-ANkKfY",
            onClick: onCopyLink,
            children: copyLinkLabel,
          }),
        ],
      }),
      n.jsx("div", {
        className: "download-app-image-wrap-egw94s",
        children: n.jsx("img", {
          src: _.m(imageUrl, null, {
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
              "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1-W1Je%5%Qmpi$3hwWkZo%2NHSXlOWHBNTTA1d1drZFdl$Xh-T$d4aWJs$jJZekpXT%dSS*JI$mFl$*xxWWpJe*QySXlO$3hp-mxKNlRESlNkb$F5TlhOa%1rWnJ%RmRHZDJORE1Xc*lNal$3$2xjM%1Fd3l$blprTWpWellqSkdhMHh-%m5kalF6RnFZakkxT%ZwWE5%Qk1ibEo2Wl$kR2$Wb3pWbm89",
          }),
          alt: "",
          crossOrigin: "anonymous",
          className: "download-app-image-fgZwBO",
        }),
      }),
    ],
  });
}
function onClick(e) {
  e.stopPropagation();
}
const P = R.PA(function (e) {
  const { labels } = e;
  const i = A.h(M._);
  const a = s.useMemo(() => i.createInstance($.P7), [i]);
  const { appConfig, isLoading } = a.data;
  s.useEffect(
    () => () => {
      a.dispose();
    },
    [a],
  );
  const onMouseEnter = N.A(() => {
    a.reportAppDownloadShow();
  });
  N.A(() => {
    a.reportAppDownloadClick();
  });
  const onCopyLink = N.A(() => {
    a.copyDownLinkToClipboard();
  });
  if (
    !isLoading &&
    appConfig !== null &&
    appConfig.enableDownload &&
    appConfig.downloadUrl &&
    appConfig.imageUrl
  ) {
    return n.jsx(KE, {
      icon: n.jsx(r.izE, {}),
      label: labels.downloadApp,
      onClick: undefined,
      onMouseEnter,
      suffix: n.jsx(r.Vjx, {
        className: A_1.menuChevron,
      }),
      children: n.jsx("div", {
        className: A_1.downloadAppSubMenuSlot,
        onClick,
        children: n.jsx(E, {
          imageUrl: appConfig.imageUrl,
          title: labels.downloadAppTitle,
          description: labels.downloadAppDescription,
          copyLinkLabel: labels.copyLink,
          onCopyLink,
        }),
      }),
    });
  }
  return null;
});
function Z(e) {
  const { labels, onClickDreaminaClient } = e;
  return n.jsx(KE, {
    icon: n.jsx(r.X_C, {}),
    label: n.jsxs("span", {
      className: A_1.labMenuLabel,
      children: [
        n.jsx("span", {
          className: A_1.labMenuLabelText,
          children: labels.dreaminaLab,
        }),
        n.jsx("span", {
          className: A_1.labBetaTag,
          children: labels.dreaminaLabBeta,
        }),
      ],
    }),
    suffix: n.jsx(r.Vjx, {
      className: A_1.menuChevron,
    }),
    children: n.jsx("div", {
      className: ""
        .concat(A_1.settingsSubMenuSlot, " ")
        .concat(A_1.labSubMenuSlot),
      children: n.jsx("div", {
        className: A_1.settingsSubMenuCard,
        children: n.jsxs("button", {
          type: "button",
          className: A_1.settingsSubMenuItem,
          onClick: (e) => {
            e.stopPropagation();
            onClickDreaminaClient();
          },
          children: [
            n.jsx("span", {
              className: A_1.settingsSubMenuIcon,
              children: n.jsx(r.zxk, {}),
            }),
            n.jsx("span", {
              className: A_1.settingsSubMenuLabel,
              children: labels.dreaminaClient,
            }),
          ],
        }),
      }),
    }),
  });
}
const K = [
  "downloadAppEntry",
  "protocolEntry",
  "themeEntry",
  "watermarkEntry",
  "languageEntry",
  "authReqPortalEntry",
];
function O(e) {
  const { icon, label, children } = e;
  const children_1 = s.Children.toArray(children);
  if (children_1.length === 0) {
    return null;
  }
  return n.jsx(KE, {
    icon,
    label,
    suffix: n.jsx(r.Vjx, {
      className: A_1.menuChevron,
    }),
    children: n.jsx("div", {
      className: A_1.settingsSubMenuSlot,
      children: n.jsx("div", {
        className: A_1.settingsSubMenuCard,
        children: children_1,
      }),
    }),
  });
}
function J(e) {
  const { labels, menuRegion } = e;
  if (menuRegion === "row-ttp") {
    return n.jsxs(n.Fragment, {
      children: [
        e.standaloneEntries,
        O({
          icon: n.jsx(r.QuO, {}),
          label: labels.cliAndPluginSettings,
          children: [e.cliEntry, e.pluginEntries],
        }),
        s.Children.toArray(K.map((t) => e[t])),
      ],
    });
  }
  const {
    cliEntry,
    pluginEntries,
    themeEntry,
    watermarkEntry,
    modelTrainingEntry,
    bindCapcutEntry,
    benefitRedemptionEntry,
    authReqPortalEntry,
    updateLogEntry,
    classroomEntry,
    tutorialCenterEntry,
    downloadAppEntry,
    dreaminaLabEntry,
    protocolEntry,
    qualificationEntry,
  } = e;
  return n.jsxs(n.Fragment, {
    children: [
      O({
        icon: n.jsx(r.QuO, {}),
        label: labels.cliAndPluginSettings,
        children: [cliEntry, pluginEntries],
      }),
      themeEntry,
      benefitRedemptionEntry,
      O({
        icon: n.jsx(r.p0W, {}),
        label: labels.productUpdatesAndTutorials,
        children: [updateLogEntry, tutorialCenterEntry, classroomEntry],
      }),
      downloadAppEntry,
      dreaminaLabEntry,
      O({
        icon: n.jsx(r.k3W, {}),
        label: labels.systemSettings,
        children: [watermarkEntry, modelTrainingEntry, bindCapcutEntry],
      }),
      O({
        icon: n.jsx("span", {
          className: A_1.otherMenuIcon,
          children: n.jsx(r.xcf, {}),
        }),
        label: labels.other,
        children: [authReqPortalEntry, protocolEntry, qualificationEntry],
      }),
    ],
  });
}
function L(e) {
  const {
    labels,
    showClassroomEntry,
    authReqPortalEntry,
    onClickClassroom,
    protocolRow,
    qualificationRow,
  } = e;
  return n.jsx(KE, {
    icon: n.jsx(r.wGz, {}),
    label: labels.other,
    suffix: n.jsx(r.Vjx, {
      className: A_1.menuChevron,
    }),
    children: n.jsx("div", {
      className: _a(
        A_1.settingsSubMenuSlot,
        A_1.bottomAlignedSubMenuSlot,
        A_1.otherSubMenuSlot,
      ),
      children: n.jsxs("div", {
        className: _a(A_1.settingsSubMenuCard, A_1.nestedSettingsSubMenuCard),
        children: [
          showClassroomEntry
            ? n.jsx(KE, {
                icon: n.jsx(r.kET, {}),
                label: labels.classroom,
                onClick: onClickClassroom,
              })
            : null,
          authReqPortalEntry,
          protocolRow,
          qualificationRow,
        ],
      }),
    }),
  });
}
function H(e) {
  const { icon, label, mode, onSelect, selected } = e;
  return n.jsxs("button", {
    type: "button",
    "aria-pressed": selected,
    className: A_1.themeSubMenuItem,
    onClick: (e) => {
      e.stopPropagation();
      onSelect(mode);
    },
    children: [
      n.jsx("span", {
        className: A_1.settingsSubMenuIcon,
        children: icon,
      }),
      n.jsx("span", {
        className: A_1.settingsSubMenuLabel,
        children: label,
      }),
      selected
        ? n.jsx(r.iWP, {
            className: A_1.settingsSubMenuCheck,
          })
        : null,
    ],
  });
}
function I(e) {
  const {
    currentTheme,
    currentThemeLabel,
    followSystem,
    labels,
    showFollowSystem,
    systemTheme,
    onSelectTheme,
  } = e;
  return n.jsx(KE, {
    icon: currentTheme === D.l.Light ? n.jsx(r.pj_, {}) : n.jsx(r.dpS, {}),
    label: currentThemeLabel,
    suffix: n.jsx(r.Vjx, {
      className: A_1.menuChevron,
    }),
    children: n.jsx("div", {
      className: A_1.settingsSubMenuSlot,
      children: n.jsxs("div", {
        className: A_1.settingsSubMenuCard,
        children: [
          n.jsx(H, {
            mode: D.l.Light,
            icon: n.jsx(r.pj_, {}),
            label: labels.lightMode,
            selected: !followSystem && currentTheme === D.l.Light,
            onSelect: onSelectTheme,
          }),
          n.jsx(H, {
            mode: D.l.Dark,
            icon: n.jsx(r.dpS, {}),
            label: labels.darkMode,
            selected: !followSystem && currentTheme === D.l.Dark,
            onSelect: onSelectTheme,
          }),
          showFollowSystem
            ? n.jsx(H, {
                mode: "system",
                icon: n.jsx(r.zxk, {}),
                label: n.jsxs("span", {
                  className: A_1.followSystemLabel,
                  children: [
                    labels.followSystem,
                    n.jsx("span", {
                      className: A_1.dotSeparator,
                      children: "·",
                    }),
                    n.jsx("span", {
                      className: A_1.systemThemeLabel,
                      children:
                        systemTheme === D.l.Dark
                          ? labels.systemDark
                          : labels.systemLight,
                    }),
                  ],
                }),
                selected: followSystem,
                onSelect: onSelectTheme,
              })
            : null,
        ],
      }),
    }),
  });
}
function V(e) {
  const { label, onClick } = e;
  return n.jsx(KE, {
    icon: n.jsxs("svg", {
      width: "1em",
      height: "1em",
      viewBox: "0 0 48 48",
      fill: "none",
      "aria-hidden": "true",
      children: [
        n.jsx("path", {
          d: "M5 7H16C20.4183 7 24 10.5817 24 15V42C24 38.6863 21.3137 36 18 36H5V7Z",
          style: {
            fill: "none",
          },
          stroke: "currentColor",
          strokeWidth: "4",
          strokeLinejoin: "round",
        }),
        n.jsx("path", {
          d: "M43 7H32C27.5817 7 24 10.5817 24 15V42C24 38.6863 26.6863 36 30 36H43V7Z",
          style: {
            fill: "none",
          },
          stroke: "currentColor",
          strokeWidth: "4",
          strokeLinejoin: "round",
        }),
      ],
    }),
    label,
    onClick,
  });
}
function X(e) {
  const {
    visible = true,
    reportAuthExemption,
    variant = "flat",
    labels,
    currentTheme,
    systemTheme,
    followSystem,
    currentThemeLabel,
    currentLanguageLocale,
    currentLanguageLabel = "English",
    supportedLanguages = [],
    topContent,
    leadingContent,
    mainFrameStandaloneContent,
    hoverGroup,
    mainFrame2026 = false,
    mainFrameMenuRegion = "cn",
    subMenuPlacement = "right",
    withTopPadding = false,
    showWatermarkEntry = false,
    showCliEntry = true,
    showModelTrainingEntry = false,
    showAuthReqPortal = false,
    showDreaminaLabEntry = false,
    showBindCapcutEntry = false,
    showBindCapcutEntryHint = false,
    showBenefitRedemptionEntry = false,
    showClassroomEntry = false,
    showAuthReqPortalEntry = false,
    showDownloadAppEntry = false,
    showUpdateLogEntry = true,
    showTutorialCenterEntry = true,
    showLanguageEntry = false,
    showQualificationEntry = true,
    showUserSafetyGuideEntry = false,
    showCookiesPolicyEntry = false,
    showAiFunctionClaimEntry = true,
    showDsaComplianceEntry = false,
    downloadAppEntryPlacement = "afterProtocol",
    showLogout = false,
    logoutDivider,
    onSelectTheme,
    onSelectLanguage,
    onClickWatermark,
    onClickModelTraining,
    onClickAuthReqPortal,
    onClickCliConfig,
    onShowCliConfig,
    onClickDreaminaClient,
    onClickBindCapcut,
    onDismissBindCapcutEntryHint,
    onClickBenefitRedemption,
    onClickClassroom,
    onClickUpdateLog,
    onClickTutorialCenter,
    onClickProtocol,
    onClickQualification,
    onOpenUserAgreement,
    onOpenPrivacyPolicy,
    onOpenCommunityGuidelines,
    onOpenUserSafetyGuide,
    onOpenCookiesPolicy,
    onOpenAiFunctionClaim,
    onOpenDsaCompliance,
    onLogout,
  } = e;
  const eA = R_();
  const downloadAppEntry = showDownloadAppEntry
    ? n.jsx(P, {
        labels,
      })
    : null;
  const dreaminaLabEntry =
    showDreaminaLabEntry && onClickDreaminaClient
      ? n.jsx(Z, {
          labels,
          onClickDreaminaClient,
        })
      : null;
  const isAvatarVariant = variant === "avatar";
  const themeEntry = n.jsx(I, {
    currentTheme,
    currentThemeLabel,
    followSystem,
    labels,
    showFollowSystem: !mainFrame2026,
    systemTheme,
    onSelectTheme,
  });
  const watermarkEntry = showWatermarkEntry
    ? n.jsx(KE, {
        icon: n.jsx(r.UqS, {}),
        label: labels.watermark,
        suffix: null,
        onClick: onClickWatermark,
      })
    : null;
  const modelTrainingEntry = showModelTrainingEntry
    ? n.jsx(KE, {
        icon: n.jsx(r.aoA, {
          color: "currentColor",
        }),
        label: labels.modelTraining,
        onClick: onClickModelTraining,
      })
    : null;
  const authReqPortalEntry = (
    isAvatarVariant ? showAuthReqPortalEntry : showAuthReqPortal
  )
    ? n.jsx(m, {
        label: labels.authReqPortal,
        onClick: onClickAuthReqPortal,
        report: reportAuthExemption,
      })
    : null;
  const cliEntry = showCliEntry
    ? n.jsx(useB, {
        label: mainFrame2026 ? labels.cliConfigTool : labels.cli,
        sessionVisible: visible,
        onClick: onClickCliConfig,
        onShow: onShowCliConfig,
      })
    : null;
  const bindCapcutEntry = showBindCapcutEntry
    ? n.jsx(d, {
        label: labels.bindCapcut,
        showEntryHint: showBindCapcutEntryHint,
        onClick: onClickBindCapcut,
        onDismissEntryHint: onDismissBindCapcutEntryHint,
      })
    : null;
  const benefitRedemptionEntry =
    isAvatarVariant && showBenefitRedemptionEntry
      ? n.jsx(KE, {
          icon: n.jsx(r.kZs, {}),
          label: labels.benefitRedemption,
          onClick: onClickBenefitRedemption,
        })
      : null;
  const updateLogEntry = showUpdateLogEntry
    ? n.jsx(KE, {
        icon: n.jsx(r.p0W, {}),
        label: labels.updateLog,
        onClick: onClickUpdateLog,
      })
    : null;
  const classroomEntry =
    isAvatarVariant && showClassroomEntry
      ? n.jsx(KE, {
          icon: n.jsx(r.kET, {}),
          label: labels.classroom,
          onClick: onClickClassroom,
        })
      : null;
  const tutorialCenterEntry = showTutorialCenterEntry
    ? n.jsx(V, {
        label: mainFrame2026 ? labels.teachingZone : labels.tutorialCenter,
        onClick: onClickTutorialCenter,
      })
    : null;
  const { languageEntry, protocolEntry, qualificationEntry } = ((e) => {
    const {
      currentLanguageLabel,
      currentLanguageLocale,
      isAvatarVariant,
      labels,
      mainFrame2026,
      showAiFunctionClaimEntry,
      showCookiesPolicyEntry,
      showDsaComplianceEntry,
      showLanguageEntry,
      showQualificationEntry,
      showUserSafetyGuideEntry,
      supportedLanguages,
      onClickProtocol,
      onClickQualification,
      onOpenAiFunctionClaim,
      onOpenCommunityGuidelines,
      onOpenCookiesPolicy,
      onOpenDsaCompliance,
      onOpenPrivacyPolicy,
      onOpenUserAgreement,
      onOpenUserSafetyGuide,
      onSelectLanguage,
    } = e;
    const languageEntry_1 = showLanguageEntry
      ? n.jsx(KE, {
          icon: n.jsx(r.KW9, {}),
          label: "".concat(labels.language, ": ").concat(currentLanguageLabel),
          suffix: n.jsx(r.Vjx, {
            className: A_1.menuChevron,
          }),
          children: n.jsx(useJ, {
            children: n.jsx("div", {
              className: _a(A_1.settingsSubMenuCard, A_1.languageSubMenuCard),
              children: supportedLanguages.map((e) => {
                var { locale, text } = e;
                return n.jsxs(
                  "button",
                  {
                    type: "button",
                    className: A_1.settingsSubMenuItem,
                    onClick: () => {
                      if (onSelectLanguage == null) {
                        return undefined;
                      }
                      return onSelectLanguage(locale);
                    },
                    children: [
                      n.jsx("span", {
                        className: A_1.settingsSubMenuLabel,
                        children: text,
                      }),
                      locale === currentLanguageLocale
                        ? n.jsx(r.iWP, {
                            className: A_1.settingsSubMenuCheck,
                          })
                        : null,
                    ],
                  },
                  locale,
                );
              }),
            }),
          }),
        })
      : null;
    return {
      languageEntry: languageEntry_1,
      protocolEntry: n.jsx(KE, {
        icon: n.jsx(r.e38, {}),
        label: labels.protocol,
        onClick: onClickProtocol,
        suffix: n.jsx(r.Vjx, {
          className: A_1.menuChevron,
        }),
        children: n.jsx("div", {
          className: _a(A_1.settingsSubMenuSlot, {
            [A_1.bottomAlignedSubMenuSlot]: !mainFrame2026,
            [A_1.thirdLevelSubMenuSlot]: mainFrame2026 || isAvatarVariant,
            [A_1.avatarProtocolSubMenuSlot]: isAvatarVariant,
          }),
          children: n.jsxs("div", {
            className: _a(A_1.settingsSubMenuCard, {
              [A_1.nestedSettingsSubMenuCard]: mainFrame2026 || isAvatarVariant,
            }),
            children: [
              n.jsx("button", {
                type: "button",
                className: A_1.settingsSubMenuItem,
                onClick: onOpenUserAgreement,
                children: labels.userAgreement,
              }),
              n.jsx("button", {
                type: "button",
                className: A_1.settingsSubMenuItem,
                onClick: onOpenPrivacyPolicy,
                children: labels.privacyPolicy,
              }),
              n.jsx("button", {
                type: "button",
                className: A_1.settingsSubMenuItem,
                onClick: onOpenCommunityGuidelines,
                children: labels.communityGuidelines,
              }),
              showUserSafetyGuideEntry
                ? n.jsx("button", {
                    type: "button",
                    className: A_1.settingsSubMenuItem,
                    onClick: onOpenUserSafetyGuide,
                    children: labels.userSafetyGuide,
                  })
                : null,
              showCookiesPolicyEntry
                ? n.jsx("button", {
                    type: "button",
                    className: A_1.settingsSubMenuItem,
                    onClick: onOpenCookiesPolicy,
                    children: labels.cookiesPolicy,
                  })
                : null,
              showAiFunctionClaimEntry
                ? n.jsx("button", {
                    type: "button",
                    className: A_1.settingsSubMenuItem,
                    onClick: onOpenAiFunctionClaim,
                    children: labels.aiFunctionClaim,
                  })
                : null,
              showDsaComplianceEntry
                ? n.jsx("button", {
                    type: "button",
                    className: A_1.settingsSubMenuItem,
                    onClick: onOpenDsaCompliance,
                    children: labels.dsaCompliance,
                  })
                : null,
            ],
          }),
        }),
      }),
      qualificationEntry: showQualificationEntry
        ? n.jsx(KE, {
            icon: n.jsx(r.R0G, {}),
            label: labels.qualification,
            onClick: onClickQualification,
            suffix: n.jsx(r.Vjx, {
              className: A_1.menuChevron,
            }),
            children: n.jsx("div", {
              className: _a(
                A_1.settingsSubMenuSlot,
                A_1.bottomAlignedSubMenuSlot,
                A_1.qualificationSubMenuSlot,
                {
                  [A_1.thirdLevelSubMenuSlot]: mainFrame2026 || isAvatarVariant,
                },
              ),
              children: n.jsx("div", {
                className: A_1.qualificationSubMenuCard,
                children: n.jsx(T, {}),
              }),
            }),
          })
        : null,
    };
  })({
    currentLanguageLabel,
    currentLanguageLocale,
    isAvatarVariant,
    labels,
    mainFrame2026,
    showAiFunctionClaimEntry,
    showCookiesPolicyEntry,
    showDsaComplianceEntry,
    showLanguageEntry,
    showQualificationEntry,
    showUserSafetyGuideEntry,
    supportedLanguages,
    onClickProtocol,
    onClickQualification,
    onOpenAiFunctionClaim,
    onOpenCommunityGuidelines,
    onOpenCookiesPolicy,
    onOpenDsaCompliance,
    onOpenPrivacyPolicy,
    onOpenUserAgreement,
    onOpenUserSafetyGuide,
    onSelectLanguage,
  });
  return n.jsx(h.w, {
    visible,
    children: s.createElement(
      ae.Provider,
      {
        value: hoverGroup != null ? hoverGroup : eA,
      },
      n.jsxs("div", {
        "data-side-menu-settings-list": true,
        className: _a(A_1.settingsList, {
          [A_1.withTopPadding]: withTopPadding,
          [A_1.subMenusOpenLeft]: subMenuPlacement === "left",
          [A_1.avatarSettingsListWithLogout]: isAvatarVariant && showLogout,
          [A_1.mainFrameSettingsList]: mainFrame2026,
        }),
        children: [
          topContent,
          mainFrame2026
            ? null
            : n.jsxs(n.Fragment, {
                children: [
                  leadingContent,
                  themeEntry,
                  watermarkEntry,
                  modelTrainingEntry,
                  languageEntry,
                  isAvatarVariant ? null : authReqPortalEntry,
                  cliEntry,
                  bindCapcutEntry,
                  benefitRedemptionEntry,
                  updateLogEntry,
                  tutorialCenterEntry,
                  isAvatarVariant ||
                  downloadAppEntryPlacement !== "beforeProtocol"
                    ? null
                    : downloadAppEntry,
                  isAvatarVariant ? downloadAppEntry : null,
                  isAvatarVariant ? dreaminaLabEntry : null,
                  isAvatarVariant
                    ? n.jsx(L, {
                        labels,
                        showClassroomEntry,
                        authReqPortalEntry,
                        onClickClassroom,
                        protocolRow: protocolEntry,
                        qualificationRow: qualificationEntry,
                      })
                    : protocolEntry,
                  isAvatarVariant ||
                  downloadAppEntryPlacement !== "afterProtocol"
                    ? null
                    : downloadAppEntry,
                  isAvatarVariant ? null : qualificationEntry,
                  isAvatarVariant ? null : dreaminaLabEntry,
                  isAvatarVariant && showLogout
                    ? n.jsx("div", {
                        className: A_1.settingsDivider,
                      })
                    : null,
                ],
              }),
          mainFrame2026
            ? n.jsx(n.Fragment, {
                children: n.jsx(J, {
                  labels,
                  menuRegion: mainFrameMenuRegion,
                  cliEntry,
                  pluginEntries: leadingContent,
                  standaloneEntries: mainFrameStandaloneContent,
                  themeEntry,
                  watermarkEntry,
                  modelTrainingEntry,
                  languageEntry,
                  bindCapcutEntry,
                  benefitRedemptionEntry,
                  authReqPortalEntry,
                  updateLogEntry,
                  classroomEntry,
                  tutorialCenterEntry,
                  downloadAppEntry,
                  dreaminaLabEntry,
                  protocolEntry,
                  qualificationEntry,
                }),
              })
            : null,
          mainFrame2026 && showLogout ? logoutDivider : null,
          showLogout
            ? n.jsx(KE, {
                icon: n.jsx(r.EwR, {}),
                label: labels.logout,
                onClick: onLogout,
              })
            : null,
        ],
      }),
    ),
  });
}
export { X as O };
