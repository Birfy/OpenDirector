import n from "cO";
import s from "HX";
import a from "K7I";
import o from "uhN";
export function _(e, t, i) {
  let r;
  let query;
  let c;
  o.Kz(e, {
    action: a.qh.Click,
    element: "entry",
    enterFrom: a.ME.Settings,
    entryPoint: i,
    region: "cn",
  });
  r = s.Du.DesktopDownload;
  query = {
    enter_from: a.ME.Settings,
    entry_point: i,
    from: "settings",
  };
  c = t.generatePath(
    r,
    query
      ? {
          query,
        }
      : undefined,
  );
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
        "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1-W1Je%5%Qmpi$3hwWkZo%2NHSXlOWHBNTTA1d1drZFdl$Xh-T$d4aWJs$jJZekpXT%dSS*JI$mFl$*w2$2xo%01HRlhO$z$qZ$R*N$lqTldNRnB%T$hWWld*cHdXakpHT%d*WE9-$k1ibEo2$1ZoS2Jt%ll%$DA9",
    }),
    "_blank",
    "noopener,noreferrer",
  );
}
