import n from "oa";
import i from "bk";
import a from "qa";
import s from "z8";
import o from "zS";
import c from "cO";
import l from "bT";
import d from "OQ";
export var V = l.forwardRef((e, ref) => {
  var {
    src,
    sources,
    loader,
    errLoader,
    draggable = false,
    crossOrigin = "anonymous",
    style,
    className,
    imageClassName,
    imageStyle = {},
    isHeroImage,
    lazy = true,
    resolutionUrlMap,
    elementTiming,
    sizePickMode,
    "data-apm-action": data_apm_action = className || "mweb-image",
  } = e;
  var k = a._(e, [
    "src",
    "sources",
    "loader",
    "errLoader",
    "draggable",
    "crossOrigin",
    "style",
    "className",
    "imageClassName",
    "imageStyle",
    "isHeroImage",
    "lazy",
    "resolutionUrlMap",
    "elementTiming",
    "sizePickMode",
    "data-apm-action",
  ]);
  var onContextMenu = o.A((e) => {
    var r;
    if ((r = k.onContextMenu) != null) {
      r.call(k, e);
    }
    e.preventDefault();
  });
  return s.jsx(
    d.sg,
    i._(
      n._(
        {
          src: c.m(src, null, {
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
              "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWQxbFh%bkpa$jJSc1kzaz$hMk50$m1oa$-yeDFX$k01-W1Je%1-%mFXRXBx$2xNNW$tTnR%WFpaTWpsMFkw-z$k$nB-TlRCam$%bHBX$mhP-k$3eWJI%lpWMlJz$ERKc2RWcEhWalJN-mxKNlp$ZEdl$m96$m5vPQ",
          }),
          sources,
          placeholder: loader,
          errorPlaceHolder: errLoader,
          draggable,
          crossOrigin,
          layoutStyle: style,
          imageStyle,
          layoutClassName: className,
          imageClassName,
          isHeroImage,
          lazy,
          sizePickMode:
            sizePickMode != null
              ? sizePickMode
              : resolutionUrlMap
                ? "legacy"
                : "none",
          resolutionUrlMap,
          ref,
          elementTiming,
          "data-apm-action": data_apm_action,
        },
        k,
      ),
      {
        onContextMenu,
      },
    ),
  );
});
V.displayName = "MWebImage";
