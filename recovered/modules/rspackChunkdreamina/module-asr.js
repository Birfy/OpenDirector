import r from "z8";
import n from "cO";
import _a from "xb";
function s(e) {
  const { children, className, description, image, title } = e;
  return r.jsxs("div", {
    className: _a("empty-page-OoTx3D", className),
    children: [
      typeof image === "string"
        ? r.jsx("img", {
            src: n.m(image, null, {
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
                "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1-W1Je%1-%mlNalIy$1RJNWRHTkhPWFZh$np$d1kzaz$hMk50$m1oa$-yeDFX$k14-kdKW$FqQmx$emxyWTIx$2FHSlhiSFZa$Xp*c1lsaENNR1Z%T$hOWldHeDJaRmhSZFdSS$Rq%lpXRXB1WkZoTlBRPT0",
            }),
            alt: description || title,
            crossOrigin: "anonymous",
            className: "image-QXworG",
          })
        : image,
      typeof title === "string"
        ? r.jsx("div", {
            className: "title-xDGnd7",
            children: title,
          })
        : null,
      typeof description === "string"
        ? r.jsx("div", {
            className: "description-biJ90H",
            children: description,
          })
        : null,
      children
        ? r.jsx("div", {
            className: "footer-M9DjK3",
            children,
          })
        : null,
    ],
  });
}
export { s as r };
