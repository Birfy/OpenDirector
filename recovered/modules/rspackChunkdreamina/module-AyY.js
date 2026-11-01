import r from "z8";
import a from "cO";
import n from "Qey";
export var X = "/auth-application/page";
export function P(e) {
  const { entryRef, onClick } = e;
  return r.jsxs(r.Fragment, {
    children: [
      n.F2.t("web_auth_exemption_hint_prefix", {}, "（已有授权"),
      r.jsx("a", {
        ref: entryRef,
        onClick,
        className: "auth-exemption-link-bpRRej",
        href: a.m(X, null, {
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
            "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWQxbFh%bkpa$jJSc1kzaz$hMk50$m1oa$-yeDFX$k01-$ZsW$RteE1NMD%1$1hrNW$scFlTakpo$jA1c1kzaz$hMk50$m1oa$-yeDFX$k14-%dSWF$uQmtRekZ3WW01%2JHTnRSbXBr%jJ4Mlltaz$hR1JZ$W05T$-xWTBXb*N4ZDJSS*JIWmlh$EZ6W$ZjMWNreFlXbkJh$0dOM$pFaE9ORmxZ%201a1dFMDk",
        }),
        target: "_blank",
        rel: "noreferrer",
        children: n.F2.t("web_auth_exemption_link", {}, "申请豁免"),
      }),
      n.F2.t("web_auth_exemption_hint_suffix", {}, "）"),
    ],
  });
}
