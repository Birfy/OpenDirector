import a from "oa";
import r from "bk";
import n from "qa";
import o from "z8";
import l from "cO";
import s from "bT";
export function q(t) {
  const { fallbackContent, fallbackUrls = [], imageRef } = t;
  const c = n._(t, ["fallbackContent", "fallbackUrls", "imageRef"]);
  const [d, setD] = s.useState(0);
  const m = fallbackUrls[d];
  if (m) {
    return o.jsx(
      "img",
      r._(a._({}, c), {
        ref: imageRef,
        src: l.m(m, null, {
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
        onError: () => setD((t) => t + 1),
      }),
    );
  }
  return o.jsx(o.Fragment, {
    children: fallbackContent,
  });
}
