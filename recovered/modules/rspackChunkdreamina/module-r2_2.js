import t from "NY";
import n from "oa";
import i from "bk";
import r from "qa";
import o from "z8";
import l from "cO";
import s from "bT";
import d from "SNb";
import c from "FFd";
import m from "n3Q";
import _p from "xb";
const F = s.memo(
  s.forwardRef(function (e, u) {
    const { icon, label, active, className } = e;
    const m = r._(e, ["icon", "label", "active", "className"]);
    const [p, F] = c.G();
    s.useImperativeHandle(u, () => p.current, [p]);
    return o.jsxs(
      "span",
      i._(
        n._(
          {
            ref: p,
            "data-drag-handle": true,
          },
          m,
        ),
        {
          className: _p("tag-aVkLFu", className, {
            "active-DAvFZz": active,
            "dragging-lJZaKS": F,
          }),
          children: [
            icon
              ? o.jsx("span", {
                  className: "icon-vuZ3Jw",
                  children: icon,
                })
              : null,
            o.jsx("span", {
              className: "label-My8JF2",
              children: label,
            }),
          ],
        },
      ),
    );
  }),
);
const A = "media-cover-vssxGm";
const h = s.memo(function (e) {
  const { src, contentType, className, aspectRatio, onAspectRatioChange } = e;
  const style = s.useMemo(
    () => ({
      "--content-generator-media-cover-aspect-ratio": "".concat(
        aspectRatio != null ? aspectRatio : 1,
      ),
    }),
    [aspectRatio],
  );
  const onLoad = s.useCallback(
    (e) => {
      if (onAspectRatioChange != null) {
        onAspectRatioChange(
          e.currentTarget.naturalWidth / e.currentTarget.naturalHeight,
        );
      }
    },
    [onAspectRatioChange],
  );
  const onLoadedMetadata = s.useCallback(
    (e) => {
      if (onAspectRatioChange != null) {
        onAspectRatioChange(
          e.currentTarget.videoWidth / e.currentTarget.videoHeight,
        );
      }
    },
    [onAspectRatioChange],
  );
  if (src) {
    if (contentType) {
      if (contentType.startsWith("image")) {
        return o.jsx("img", {
          alt: "",
          src: l.m(src, null, {
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
              "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1-lZwWFJqQmtXRXBzWTNrNWFtSXlO$EJh$np$d1R*Z*tiR0p0$m5sWld*SjJZMms1-0dKd$$te*pi$FZvWWtNNWQyTnRWbnBh$np$d1dWaFNjR0l5Tldoa$F6RnFZakl4ZDJJe%5Xe*libEo2$ERKT2RtSn$$bXhp-mx*MFdqSldk$nBZ%21oa1J6bD$%RmN4-kZwS*JHaE1XRkpv$25rNWFtSXlO$EJh$np$d1R*Z*tiR0p0$m5sWld*SjJZMmt4ZEZwWF$uQlp$ekZxWWpO-WJHTnBO$EJqTTJob1kyMWtN$04z%FQwPQ",
          }),
          className: _p(A, className),
          style,
          crossOrigin: "anonymous",
          draggable: false,
          onLoad,
        });
      }
      return o.jsx("video", {
        src: l.m(src, null, {
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
            "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1-lZwWFJqQmtXRXBzWTNrNWFtSXlO$EJh$np$d1R*Z*tiR0p0$m5sWld*SjJZMms1-0dKd$$te*pi$FZvWWtNNWQyTnRWbnBh$np$d1dWaFNjR0l5Tldoa$F6RnFZakl4ZDJJe%5Xe*libEo2$ERKT2RtSn$$bXhp-mx*MFdqSldk$nBZ%21oa1J6bD$%RmN4-kZwS*JHaE1XRkpv$25rNWFtSXlO$EJh$np$d1R*Z*tiR0p0$m5sWld*SjJZMmt4ZEZwWF$uQlp$ekZxWWpO-WJHTnBO$EJqTTJob1kyMWtN$04z%FQwPQ",
        }),
        className: _p(A, className),
        style,
        crossOrigin: "anonymous",
        draggable: false,
        onLoadedMetadata,
      });
    }
    return o.jsx("div", {
      className: _p(A, className),
    });
  }
  return null;
});
export var X = s.memo(function (e) {
  const { src, poster, contentType, aspectRatio, triggerProps } = e;
  const E = r._(e, [
    "src",
    "poster",
    "contentType",
    "aspectRatio",
    "triggerProps",
  ]);
  const [ref, D] = c.G();
  const [b, setB] = s.useState(undefined);
  const [C, setC] = s.useState(1);
  const xRef = s.useRef(null);
  const _ = s.useCallback(
    (e, u) =>
      t._(function* () {
        if (!e) {
          return void setB(undefined);
        }
        try {
          let a;
          const t =
            (a = (yield fetch(e, u)).headers.get("content-type")) == null
              ? undefined
              : a.toLowerCase();
          setB(t);
        } catch (e) {
          setB(undefined);
        }
      })(),
    [],
  );
  s.useEffect(() => {
    var e;
    if ((e = xRef.current) != null) {
      e.abort();
    }
    if (contentType) {
      setB(contentType);
    } else {
      xRef.current = new AbortController();
      _(src, {
        signal: xRef.current.signal,
      });
    }
  }, [src, contentType, _]);
  s.useEffect(() => {
    setC(aspectRatio != null ? aspectRatio : 1);
  }, [aspectRatio]);
  const triggerProps_1 = s.useMemo(
    () =>
      i._(
        n._(
          {
            position: "bottom",
          },
          triggerProps,
        ),
        {
          popupAlign: n._(
            {
              top: d.vw,
              bottom: d.vw,
            },
            triggerProps == null ? undefined : triggerProps.popupAlign,
          ),
        },
      ),
    [triggerProps],
  );
  const content = s.useMemo(
    () =>
      o.jsx(h, {
        src: l.m(src, null, {
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
            "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1-lZwWFJqQmtXRXBzWTNrNWFtSXlO$EJh$np$d1R*Z*tiR0p0$m5sWld*SjJZMms1-0dKd$$te*pi$FZvWWtNNWQyTnRWbnBh$np$d1dWaFNjR0l5Tldoa$F6RnFZakl4ZDJJe%5Xe*libEo2$ERKT2RtSn$$bXhp-mx*MFdqSldk$nBZ%21oa1J6bD$%RmN4-kZwS*JHaE1XRkpv$25rNWFtSXlO$EJh$np$d1R*Z*tiR0p0$m5sWld*SjJZMmt4ZEZwWF$uQlp$ek$3$1ZkamRX%kl%alJa$0$wd$p*aE5Q%T09",
        }),
        contentType: b,
        className: "media-preview-GJKfU2",
        aspectRatio: C,
      }),
    [src, b, C],
  );
  const N = s.useMemo(() => {
    if (poster != null) {
      return poster;
    }
    return src;
  }, [poster, src]);
  const icon = s.useMemo(() => {
    if (N) {
      return o.jsx(h, {
        src: l.m(N, null, {
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
            "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1-lZwWFJqQmtXRXBzWTNrNWFtSXlO$EJh$np$d1R*Z*tiR0p0$m5sWld*SjJZMms1-0dKd$$te*pi$FZvWWtNNWQyTnRWbnBh$np$d1dWaFNjR0l5Tldoa$F6RnFZakl4ZDJJe%5Xe*libEo2$ERKT2RtSn$$bXhp-mx*MFdqSldk$nBZ%21oa1J6bD$%RmN4-kZwS*JHaE1XRkpv$25rNWFtSXlO$EJh$np$d1R*Z*tiR0p0$m5sWld*SjJZMmt4ZEZwWF$uQlp$ek$3$1ZkamRX%kl%alJa$0$wd$p*aE5Q%T09",
        }),
        contentType: b,
        className: "media-thumbnail-_vGc80",
        onAspectRatioChange: setC,
      });
    }
    return null;
  }, [N, b]);
  return o.jsx(
    m.I,
    i._(
      n._(
        {
          trigger: "hover",
          triggerProps: triggerProps_1,
          className: "popover-AgrSJp",
          disabled: !src,
          content,
        },
        D
          ? {
              popupVisible: false,
            }
          : {},
      ),
      {
        children: o.jsx(
          F,
          i._(
            n._(
              {
                ref,
              },
              E,
            ),
            {
              icon,
            },
          ),
        ),
      },
    ),
  );
});
