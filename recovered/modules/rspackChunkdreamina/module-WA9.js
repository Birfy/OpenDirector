import a from "cO";
import { t as t_1 } from "./module-N7_2.js";
export function W(e, t, i) {
  const r = URL.createObjectURL(e);
  const o = document.createElement("a");
  o.href = a.m(r, null, {
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
      "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWQxbFh%bkpa$jJSc1kzaz$hMk50$m1oa$-yeDFX$k01-$ZsW$RteE1NMD%1$1hrNWFtSXlNWFJpTWpSMlp*aFNjR0pJ$Fha-WJXeHpXbE01-TJJelpI$mlSemxv$2tNe*FXSkhP$2xN-mxKNldWaEtib$JZ$FQwPQ",
  });
  o.download = t_1(t, i);
  document.body.appendChild(o);
  o.click();
  o.remove();
  window.URL.revokeObjectURL(r);
}
