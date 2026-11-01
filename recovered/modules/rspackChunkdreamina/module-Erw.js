import r from "NY";
import n from "cO";
export function _(e, t, i) {
  return r._(function* () {
    const r = [...new Set(t)];
    if (r.length === 0) {
      return {};
    }
    const a = yield e.packImage({
      src: n.m(
        r.map((imageUri) => ({
          imageUri,
        })),
        null,
        {
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
            "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1-W1Je%1-%mlNalIyWkZo%2NHSkl%WFpo$np*b1dqSlZkb%5I%m1wa*$%RndZb*RH-mxw$E1%RmpiW*g2$EZkS05$eFlWbmxo$Xp$d1l6Skdl$m96$m5vPQ",
        },
      ),
      requires: [i],
    });
    if (a.ok) {
      return Object.fromEntries(
        r.flatMap((e) => {
          var t;
          var i;
          var r;
          var n =
            (r = a.value.uri2images[e]) == null ||
            (i = r[0]) == null ||
            (t = i.imageUrl) == null
              ? undefined
              : t.trim();
          if (n) {
            return [[e, n]];
          }
          return [];
        }),
      );
    }
  })();
}
