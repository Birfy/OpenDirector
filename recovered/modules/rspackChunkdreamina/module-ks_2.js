import r from "NY";
import n from "cO";
import a from "xi";
export function y(e) {
  const t = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
  return new Promise((resolve, reject) => {
    var a = new Image();
    if (!t) {
      a.crossOrigin = "anonymous";
    }
    a.onload = function () {
      resolve(a);
    };
    a.onerror = function (e) {
      reject(e);
    };
    a.src = n.m(e, null, {
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
        "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1-W1Je%1-%mlNalIyWkZo%2NHSkl%WFpo$np*b1dqSlZkb*x0%m5w-$$6$XdZekpHZ$ZvelZubz0",
    });
  });
}
let l = null;
export function U() {
  return r._(function* () {
    if (l !== null) {
      return l;
    }
    try {
      yield y(
        "data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=",
      );
      l = true;
      return true;
    } catch (error) {
      a.V.error("isSupportWebp", error);
      l = false;
      return false;
    }
  })();
}
