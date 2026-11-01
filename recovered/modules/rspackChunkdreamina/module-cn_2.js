import r from "z8";
import n from "zS";
import a from "cO";
import o from "bT";
import _s from "xb";
import c from "oa";
import d from "qa";
import { Q } from "./module-y3.js";
const m = o.memo(function (e) {
  const { className } = e;
  const i = d._(e, ["className"]);
  return r.jsx(
    Q,
    c._(
      {
        className: _s("avatar-vq21JV", className),
      },
      i,
    ),
  );
});
export var e = o.memo(function (e) {
  const { src, style, className, skeleton } = e;
  const { visible, handleFetchDone } = ((e) => {
    const [t, setT] = o.useState(false);
    const r = n.A(() => undefined);
    const a = n.A(() => setT(true));
    const handleFetchDone_1 = o.useMemo(() => {
      if (e) {
        return a;
      }
      return r;
    }, [e, r, a]);
    return {
      visible: o.useMemo(() => !!(e && !t), [e, t]),
      handleFetchDone: handleFetchDone_1,
    };
  })(skeleton);
  return r.jsxs("div", {
    style,
    className: _s("dreamina-component-avatar-container", className),
    children: [
      r.jsx("img", {
        alt: "",
        src: a.m(src, null, {
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
            "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1-W1Je%1-%mlNalIy$1RJNWRHTkhPWFZh$np$d1kzaz$hR1J0%mpCWldFbDJX$mhh-%dSSFJubE1ibEo2Wl$kR2$Wb3pWbm89",
        }),
        className: "dreamina-component-avatar",
        crossOrigin: "anonymous",
        onLoad: handleFetchDone,
        onError: handleFetchDone,
        draggable: false,
      }),
      visible
        ? r.jsx(m, {
            className: "dreamina-component-avatar-skeleton",
          })
        : null,
    ],
  });
});
