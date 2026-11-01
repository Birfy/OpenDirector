import n from "z8";
import t from "cO";
import _a from "xb";
import l from "dI5";
export var i = (e) => {
  var {
    title,
    desc,
    btnClassName,
    btnText,
    coverType,
    poster,
    coverUrl,
    titleClassName,
    wrapperClassName,
    onBtnClick,
    btnDisabled,
    btnTooltip,
  } = e;
  var h = (() => {
    switch (true) {
      case coverType === "video" && !!coverUrl:
        return n.jsx("video", {
          poster,
          muted: true,
          autoPlay: true,
          loop: true,
          playsInline: true,
          "x5-playsinline": "true",
          className: "cover-video-MV6cmt",
          crossOrigin: "anonymous",
          children: n.jsx("source", {
            src: t.m(coverUrl, null, {
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
                "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWQxbFh%bkpa$jJSc1kzaz$hMk50$m1oa$-yeDFX$k01-W1Je%1-%mFXRXBx$2xNNW$tTnR%WFpaTWpsMFkw-z$k$nB-TlRCam$%bHBaRmhP-0dKdFZuc*pl$*wzWkZoS2JFeFh%blpp$np*c1kyM%9jRmx-ZDNSa00wc*9ZM*hD-kdOcE9%SmhXR%-w$2toS2RtTkRN$3RpTTJSM$R*ZE9kb%p1$W14aWJsRjJZ$mMx-TFwW$oz$mtTRTQw$1ZoS2Jt%ll%$DA9",
            }),
            type: "video/mp4",
          }),
        });
      case coverType === "image" && !!coverUrl:
        return n.jsx("img", {
          className: "cover-image-n4sVEj",
          draggable: false,
          src: t.m(coverUrl, null, {
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
              "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWQxbFh%bkpa$jJSc1kzaz$hMk50$m1oa$-yeDFX$k01-W1Je%1-%mFXRXBx$2xNNW$tTnR%WFpaTWpsMFkw-z$k$nB-TlRCam$%bHBaRmhP-0dKdFZuc*pl$*wzWkZoS2JFeFh%blpp$np*c1kyM%9jRmx-ZDNSa00wc*9ZM*hD-kdOcE9%SmhXR%-w$2toS2RtTkRN$3RpTTJSM$R*ZE9kb%p1$W14aWJsRjJZ$mMx-TFwW$oz$mtTRTQw$1ZoS2Jt%ll%$DA9",
          }),
          crossOrigin: "anonymous",
        });
      default:
        return null;
    }
  })();
  return n.jsx("div", {
    "data-ignore": true,
    className: _a("vip-content-XqIwvA", wrapperClassName),
    children: n.jsxs("div", {
      className: "container-uNm5ag",
      children: [
        h,
        n.jsxs("div", {
          className: "desc-wrap-qPeCfV",
          children: [
            title &&
              n.jsx("div", {
                className: _a(
                  "title-Mx_C1d",
                  {
                    "has-margin-top-HMX9ij": !h,
                  },
                  titleClassName,
                ),
                children: title,
              }),
            desc &&
              n.jsx("div", {
                className: _a("desc-h09XbV"),
                children: desc,
              }),
            btnText &&
              n.jsx(l.I, {
                text: btnText,
                className: _a("btn-FPAk7a", btnClassName),
                disabled: btnDisabled,
                toolTipsContent: btnTooltip,
                triggerProps: btnTooltip
                  ? {
                      style: {
                        zIndex: 1002,
                      },
                    }
                  : undefined,
                onClick: onBtnClick,
              }),
          ],
        }),
      ],
    }),
  });
};
