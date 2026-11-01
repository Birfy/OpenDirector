import a from "z8";
import i from "cO";
import n from "bT";
import _o from "xb";
import l from "Qey";
import c from "cz";
export var H = n.memo(function (e) {
  let t;
  const { className, children } = e;
  const o = c.G2({
    region:
      typeof window === "undefined"
        ? ""
        : (
            ((t = window.__locationInfo) == null ? undefined : t.code) || ""
          ).toLowerCase(),
    lang: l.Ay.language,
  });
  return a.jsx("a", {
    className: _o("link-kOZ2kK", className),
    href: i.m(o, null, {
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
        "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWQxbFh%bkpa$jJSc1kzaz$hMk50$m1oa$-yeDFX$k01-$ZsW$RteE1NMD%1$1hrNWFtSXlNWFJpTWpSMld%ST$kR05IT1hW-$Z6$XdZM2s1ZDJOd*JESlpWMDQx$EZoQ2RtSkhiR3Bs$Xp*ellW-zFja3d6%W5saFd*c*9X$E5yZEdOSE9-TmhWMDQx$EZkN*NHSnRjM1Zr%0%0MFdWaEtib$JZ$FQwPQ",
    }),
    target: "_blank",
    rel: "noreferrer",
    children,
  });
});
export function r(children) {
  return a.jsx(
    H,
    {
      children,
    },
    "privacy-policy",
  );
}
