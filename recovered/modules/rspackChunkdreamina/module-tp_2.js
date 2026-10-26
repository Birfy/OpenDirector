import n from "z8";
import r from "cO";
import a from "bT";
import o from "SEl";
export var w = a.memo(function (e) {
  const { url, coverUrl, width, height, duration, label } = e;
  const [d, setD] = a.useState(0);
  const style = a.useMemo(
    () => ({
      "--video-preview-card-aspect-ratio": `${width && height ? width / height : 1}`,
    }),
    [width, height],
  );
  a.useEffect(() => {
    setD(0);
  }, [url]);
  const onTimeUpdate = a.useCallback((e) => {
    setD(e.currentTarget.currentTime);
  }, []);
  return n.jsxs("div", {
    className: "preview-f2UN0V",
    style,
    children: [
      n.jsx("video", {
        src: r.m(url, null, {
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
            "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1-W1Je%1-%mlNalIy$1RJNWRHTkhPWFZh$np$d1kzaz$kRnB-$W5CWl$6RjNZMjFXTW1*WFZqTk1WMD$vWTIx%mRt%nRiR3Rh$npoMFkwaEtiR1J0-kd4a2$%RnFX$mhL-TB4d$$uc*xSMFo1$2pO$2$nPT0",
        }),
        poster: coverUrl,
        className: "video-A3Sxv0",
        crossOrigin: "anonymous",
        draggable: false,
        autoPlay: true,
        loop: true,
        muted: true,
        onTimeUpdate,
      }),
      n.jsx("div", {
        className: "mask-BUNsAt",
      }),
      label
        ? n.jsx("div", {
            className: "label-DqfU7r",
            children: label,
          })
        : null,
      duration
        ? n.jsx("span", {
            className: "duration-yVDk1I",
            children: o.X(Math.max(0, duration - d), "mm:ss"),
          })
        : null,
    ],
  });
});
