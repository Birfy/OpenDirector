import r from "oa";
import n from "bk";
import a from "qa";
import o from "z8";
import s from "cO";
import l from "bT";
export function q(e) {
  const { fallbackContent, fallbackUrls = [], imageRef } = e;
  const d = a._(e, ["fallbackContent", "fallbackUrls", "imageRef"]);
  const [u, setU] = l.useState(0);
  const p = fallbackUrls[u];
  if (p) {
    return o.jsx(
      "img",
      n._(r._({}, d), {
        ref: imageRef,
        src: s.m(p, null, {
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
            "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1-W1Je%1-%mlNalIy$1RJNWRHTkhPWFZh$np$d1kzaz$jR0p-%m01-$$6RnNZMj$LZ*1OcE1XM$pWM2h6$1cxR2FtRj$PWEJp$jBad$dsTXhiR051%25aamF%RnRX$mQ0-zFsdFJtc*hl$F$3WXpOb2FHTnRaREZqZHowOQ",
        }),
        onError: () => setU((e) => e + 1),
      }),
    );
  }
  return o.jsx(o.Fragment, {
    children: fallbackContent,
  });
}
