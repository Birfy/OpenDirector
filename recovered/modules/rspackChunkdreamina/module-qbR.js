import n from "z8";
import "qrE";
import "xj";
import s from "RH";
import a from "R8";
import r from "zS";
import o from "cO";
import * as l from "./module-u1a.js";
import c from "bT";
import d from "ED";
import u from "Qey";
import h from "yw";
import m from "wF";
import p from "Kt";
import { Z1 } from "./module-nV_3.js";
const className = "app-description-UIJYe6";
const { SubMenu } = s.A;
export var S = c.memo(
  d.PA(function (e) {
    const { menuKey, onClick, onShow } = e;
    const d = m.h(p._);
    const b = c.useMemo(() => d.createInstance(Z1), [d]);
    const { appConfig, isLoading } = b.data;
    c.useEffect(
      () => () => {
        b.dispose();
      },
      [b],
    );
    const y = c.useCallback(() => {
      b.copyDownLinkToClipboard();
    }, [b]);
    const S = r.A(() => {
      if (onClick != null) {
        onClick();
      }
      b.reportAppDownloadClick();
    });
    const onVisibleChange = r.A((e) => {
      if (e) {
        if (onShow != null) {
          onShow();
        }
        b.reportAppDownloadShow();
      }
    });
    if (appConfig === null || isLoading) {
      return null;
    }
    return n.jsx(
      SubMenu,
      {
        className: "app-download-sub-menu-header-Kk6UfC",
        triggerProps: {
          className: "app-download-sub-menu-container-PSCUKE",
          trigger: "hover",
          showArrow: false,
          onClick: S,
          onVisibleChange,
        },
        title: n.jsx(l.r, {
          icon: n.jsx(h.izE, {}),
          label: u.Ay.t("web_home_siedbar_mobile_app_download", {}, "即梦APP"),
        }),
        children: n.jsxs("div", {
          className: "app-download-container-a3SXxm",
          children: [
            n.jsx("img", {
              alt: "",
              src: o.m(appConfig.imageUrl, null, {
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
                  "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1-W1Je%5%Qmpi$3hwWkZo%2NHSXlOWHBNTTA1d1drZFdl$Xh-T$d4aWJs$jJX$mhDZDB4WF$uWmtNalZ6WWpKR2Ewd3l%blpp$0$KMlltM$dk$1JJ$FhaWldFSjN%RmRTZ*1Re%5-TmlNa1py$EZje*JHSn$WWFJo$0ZKc1lsTT$hR05J%$hS-$J6a3pZbTE0Z*xsWF$-%mlWM$oxWkZNe*NH%khWblJN-mxKNlp$ZEdl$m96$m5vPQ",
              }),
              crossOrigin: "anonymous",
            }),
            n.jsxs("main", {
              className: "app-download-content-LVqXSf",
              children: [
                n.jsxs("div", {
                  className,
                  children: [
                    n.jsx("div", {
                      className: "app-title-ZNtDgY",
                      children: u.Ay.t(
                        "web_new_homepage_sidebar_appdownload_tittle",
                        {},
                        "即梦AI APP上线啦！",
                      ),
                    }),
                    n.jsx("p", {
                      className,
                      children: u.Ay.t(
                        "web_new_homepage_sidebar_appdownload_description",
                        {},
                        "扫码或者复制链接到手机端，在移动端继续展开AI创作之旅",
                      ),
                    }),
                  ],
                }),
                n.jsx("footer", {
                  className: "btn-container-ZZdne4",
                  children: n.jsx(a.A, {
                    type: "primary",
                    onClick: y,
                    children: u.Ay.t("web_new_ccug_copy_link", {}, "复制链接"),
                  }),
                }),
              ],
            }),
          ],
        }),
      },
      menuKey,
    );
  }),
);
