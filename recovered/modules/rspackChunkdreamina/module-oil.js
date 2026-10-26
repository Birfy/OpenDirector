import n from "cO";
import s from "HX";
export function x(e, t) {
  const [i, a] = e.generatePath(s.Du.CliInstall).split("#");
  const [r, o = ""] = i.split("?");
  const l = new URLSearchParams(o);
  l.set("from_page", t);
  const c = ""
    .concat(r, "?")
    .concat(l.toString())
    .concat(a ? "#".concat(a) : "");
  window.open(
    n.m(c, null, {
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
        "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1-W1Je%5%Qmpi$3hwWkZo%2NHSXlOWHBNTTA1d1drZFdl$Xh-T$d4aWJs$jJX$Eo0-0$4WFZu$mtTRXBvWW0xT2JFd3lPW*Rh$npSMFd%SjRjRXh--khWak0xSm9Za2QzZEdOSFJtNWF$el$3WXpKR2$Wb3pWbm89",
    }),
    "_blank",
    "noopener",
  );
}
