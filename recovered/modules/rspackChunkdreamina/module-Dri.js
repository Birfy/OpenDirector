import a from "oa";
import r from "bk";
import i from "qa";
import o from "z8";
import l from "bT";
import s from "wF";
import c from "Kt";
import u from "Dla";
import d from "cO";
import _m from "xb";
import v from "Ly";
import h from "h6l";
import f from "SEl";
const g = l.memo(function (e) {
  const { coverUrl, duration } = e;
  const s = i._(e, ["coverUrl", "duration"]);
  const c = l.useMemo(() => v.N(duration), [duration]);
  return o.jsxs(
    h.O,
    r._(a._({}, s), {
      children: [
        o.jsx("img", {
          alt: "",
          src: d.m(coverUrl, null, {
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
              "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1-W1Je%1-%mlNalIy$1RJNWRHTkhPWFZh$np$d1kzaz$l$nB-$214amJWWjFX$EpWZ*1OdFZtMWFXRXBzWW0xT2JFeFlXbkJh%jFaMlRETktiRnB0$m5s-$Z6$nFXbE14TW1*WF$te*ll$E$6W$Zo%2IweFh%blpr-lZaN$RHN$Nlb$ZI%m5s-%0xWj-",
          }),
          className: "image-Erh1bE",
          crossOrigin: "anonymous",
          draggable: "false",
        }),
        o.jsx("span", {
          className: _m("duration-E3bzoA", {
            "visible-Av672j": c,
          }),
          "data-reference-video-duration": true,
          children: c,
        }),
      ],
    }),
  );
});
const b = l.memo(function (e) {
  const { videoUrl } = e;
  const n = i._(e, ["videoUrl"]);
  const [s, setS] = l.useState();
  const u = l.useMemo(() => {
    if (s === undefined) {
      return "";
    }
    return f.X(s, "mm:ss");
  }, [s]);
  const onLoadedMetadata = l.useCallback((e) => {
    setS(Math.round(e.currentTarget.duration));
  }, []);
  return o.jsxs(
    h.O,
    r._(a._({}, n), {
      children: [
        o.jsx("video", {
          src: d.m(videoUrl, null, {
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
              "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1-W1Je%1-%mlNalIy$1RJNWRHTkhPWFZh$np$d1kzaz$l$nB-$214amJWWjFX$EpWZ*1OdFZtMWFXRXBzWW0xT2JFeFlXbkJh%jFaMlRETktiRnB0$m5s-$Z6$nFXbE14TW1*WF$te*ll$E$6W$Zo%2IweFlXbkJh%jFaMlRHN$Nlb$ZI%m5s-%0xWj-",
          }),
          className: "player-R_ztMG",
          muted: true,
          controls: false,
          draggable: false,
          onLoadedMetadata,
        }),
        o.jsx("div", {
          className: "mask-EMKoBn",
        }),
        o.jsx("span", {
          className: _m("duration-X_KQEe", {
            "visible-SjawZV": u,
          }),
          "data-reference-video-duration": true,
          children: u,
        }),
      ],
    }),
  );
});
export var z = l.memo(function (e) {
  const { videoUrl, coverUrl, duration, onClick } = e;
  const p = i._(e, ["videoUrl", "coverUrl", "duration", "onClick"]);
  const v = s.h(c._);
  const onClick_1 = l.useCallback(
    (e) => {
      if (onClick != null) {
        onClick(e);
      }
      if (!e.defaultPrevented && videoUrl) {
        u.H(v, {
          items: [
            {
              type: "video",
              url: videoUrl,
              coverUrl,
            },
          ],
        });
      }
    },
    [v, videoUrl, coverUrl, onClick],
  );
  if (coverUrl) {
    return o.jsx(
      g,
      r._(a._({}, p), {
        coverUrl,
        duration: duration != null ? duration : 0,
        onClick: onClick_1,
      }),
    );
  }
  return o.jsx(
    b,
    r._(a._({}, p), {
      videoUrl,
      onClick: onClick_1,
    }),
  );
});
