import s from "z8";
import i from "cO";
import _r from "xb";
export function r(e) {
  const { children, className, description, image, title } = e;
  return s.jsxs("div", {
    className: _r("empty-page-OoTx3D", className),
    children: [
      typeof image === "string"
        ? s.jsx("img", {
            src: i.m(image, null, {
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
        ? s.jsx("div", {
            className: "title-xDGnd7",
            children: title,
          })
        : null,
      typeof description === "string"
        ? s.jsx("div", {
            className: "description-biJ90H",
            children: description,
          })
        : null,
      children
        ? s.jsx("div", {
            className: "footer-M9DjK3",
            children,
          })
        : null,
    ],
  });
}
