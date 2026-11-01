import n from "z8";
import r from "cO";
import a from "bT";
import o from "OQ";
import s from "VD";
export var S = a.memo(function (e) {
  const { images, label, renderActionButton } = e;
  if (!images.length) {
    return null;
  }
  const [l, ...c] = images;
  return n.jsxs("div", {
    className: "container-Dtl7Hq",
    "data-count": images.length,
    children: [
      n.jsx(o.sg, {
        src: r.m(l, null, {
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
            "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1-W1Je%1-%mlNalIy$1RJNWRHTkhPWFZh$np$d1kzaz$kR1J-Z%RCaF$6RXlZ$mRXTTB4W*JI%lpWMlJz$EZoQ2$WcFlXbkJh$0dOMllsaFdjMlJI-TNSa2JXeHNaS*t4-0dKWFJtNWF$ek-zWTIx$01tRlhWak5N-mxKNlp$ZEdl$m96$m5vPQ",
        }),
        alt: "",
        className: "main-image-_qyKs8",
        crossOrigin: "anonymous",
      }),
      c.length > 0
        ? n.jsx("div", {
            className: "side-column-tbv0wL",
            children: c.map((e) =>
              n.jsx(
                o.sg,
                {
                  src: r.m(e, null, {
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
                      "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1-W1Je%1-%mlNalIy$1RJNWRHTkhPWFZh$np$d1kzaz$kR1J-Z%RCaF$6RXlZ$mRXTTB4W*JI%lpWMlJz$EZoQ2$WcFlXbkJh$0dOMllsaFdjMlJI-TNSa2JXeHNaS*t4-0dKWFJtNWF$ek-zWTIx$01tRlhWak5N-mxKNlp$ZEdl$m96$m5vPQ",
                  }),
                  alt: "",
                  className: "side-image-QTnn6D",
                  crossOrigin: "anonymous",
                },
                e,
              ),
            ),
          })
        : null,
      n.jsxs("div", {
        className: "header-mAI3oF",
        children: [
          label
            ? n.jsx(s.S, {
                content: label,
                children: n.jsx("span", {
                  className: "label-Z4hcFd",
                  children: label,
                }),
              })
            : null,
          n.jsx("div", {
            className: "actions-O7FWY9",
            children: renderActionButton,
          }),
        ],
      }),
    ],
  });
});
