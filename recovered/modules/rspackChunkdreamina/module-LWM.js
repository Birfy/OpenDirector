import a from "oa";
import r from "bk";
import i from "z8";
import "Vx";
import "uw5";
import o from "Ix";
import l from "VAR";
import s from "bT";
import c from "Lt";
import u from "ED";
import _d from "xb";
import p from "Qey";
import v from "yw";
import h from "Du8";
import g from "sxn";
import f from "pX";
import b from "hUS";
import _ from "Pp";
import y from "cO";
import { s as s_1 } from "./module-Zyl.js";
const x = s.memo(function (e) {
  const { guideLinkHref, onGuideLinkClick, className } = e;
  const onMouseDown = s.useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);
  const o = s.useMemo(
    () =>
      p.Ay.t(
        "voice_input_mic_permission_tip",
        {
          strong: (e) =>
            i.jsx("a", {
              className: "bubble-link-jK7H8A",
              href: y.m(guideLinkHref, null, {
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
                  "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1-lZwWFJqQmtXRXBzWTNrNWFtSXlO$EJh$np$d1R*Z*tiR0p0$m5sWld*SjJZMms1-0dKd$$te*pi$FZvWWtNNWFtSXlO$EJa$jJ4M$dsaEpkRmt5T1hSalJ6bDFXb*MxT%dON%9Xc*lNal$3$2xjM%1FeFhaR3hp-lZaN$dWaFNkb%5wT$RKa%1teHFXbE14-0dKd$FqRmtRekZwWkZo%01HSXlOSFpaTWpsM$pFZFdk$1JET$c1-$Z6$nNZMjFHT%dJelN-%mpSM$o1WWxkc2$tTXliSFpp-$R*cFp*ZEth$0pI$lhWa1NFNDBX$mhL-m1SW$R%MD0",
              }),
              target: "_blank",
              rel: "noopener noreferrer",
              onClick: onGuideLinkClick,
              children: e,
            }),
        },
        "尚未获得麦克风权限 <strong>开启指南</strong>",
      ),
    [guideLinkHref, onGuideLinkClick],
  );
  return i.jsxs("div", {
    className: _d("bubble-uv7hro", className),
    onMouseDown,
    children: [
      i.jsx("div", {
        className: "bubble-content-kAXr7V",
        children: o,
      }),
      i.jsx("img", {
        src: y.m(
          "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDI0IDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cjxmb3JlaWduT2JqZWN0IHg9Ii0yMCIgeT0iLTIwIiB3aWR0aD0iNjQiIGhlaWdodD0iNDgiPjxkaXYgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwiIHN0eWxlPSJiYWNrZHJvcC1maWx0ZXI6Ymx1cigxMHB4KTtjbGlwLXBhdGg6dXJsKCNiZ2JsdXJfMF8xOTc0Ml8xNzIzNzVfY2xpcF9wYXRoKTtoZWlnaHQ6MTAwJTt3aWR0aDoxMDAlIj48L2Rpdj48L2ZvcmVpZ25PYmplY3Q+PHBhdGggZGF0YS1maWdtYS1iZy1ibHVyLXJhZGl1cz0iMjAiIGQ9Ik0xMC41MDUyIDcuMzI3ODVDMTEuMzAwOCA4LjIyNDA1IDEyLjY5OTIgOC4yMjQwNSAxMy40OTQ4IDcuMzI3ODVMMTguNDU5NCAyLjMxMTc3QzE5LjkyMzYgMC44MzIzOTUgMjEuOTE4NiAtNC41NDkxM2UtMDcgMjQgMEwxLjc0ODQ2ZS0wNiAtNS4yNDUzN2UtMDZDMi4wODE0NCAtNC43OTA0NWUtMDYgNC4wNzY0NCAwLjgzMjM5IDUuNTQwNjIgMi4zMTE3N0wxMC41MDUyIDcuMzI3ODVaIiBmaWxsPSIjMjIyNTJBIi8+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImJnYmx1cl8wXzE5NzQyXzE3MjM3NV9jbGlwX3BhdGgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIwIDIwKSI+PHBhdGggZD0iTTEwLjUwNTIgNy4zMjc4NUMxMS4zMDA4IDguMjI0MDUgMTIuNjk5MiA4LjIyNDA1IDEzLjQ5NDggNy4zMjc4NUwxOC40NTk0IDIuMzExNzdDMTkuOTIzNiAwLjgzMjM5NSAyMS45MTg2IC00LjU0OTEzZS0wNyAyNCAwTDEuNzQ4NDZlLTA2IC01LjI0NTM3ZS0wNkMyLjA4MTQ0IC00Ljc5MDQ1ZS0wNiA0LjA3NjQ0IDAuODMyMzkgNS41NDA2MiAyLjMxMTc3TDEwLjUwNTIgNy4zMjc4NVoiLz4KPC9jbGlwUGF0aD48L2RlZnM+Cjwvc3ZnPgo=",
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
              "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1-lZwWFJqQmtXRXBzWTNrNWFtSXlO$EJh$np$d1R*Z*tiR0p0$m5sWld*SjJZMms1-0dKd$$te*pi$FZvWWtNNWFtSXlO$EJa$jJ4M$dsaEpkRmt5T1hSalJ6bDFXb*MxT%dON%9Xc*lNal$3$2xjM%1FeFhaR3hp-lZaN$dWaFNkb%5wT$RKa%1teHFXbE14-0dKd$FqRmtRekZwWkZo%01HSXlOSFpaTWpsM$pFZFdk$1JET$c1-$Z6$nNZMjFHT%dJelN-%mpSM$o1WWxkc2$tTXliSFpp-$R*cFp*ZEth$0pI$lhWa1NFNDBX$mhL-m1SW$R%MD0",
          },
        ),
        className: "bubble-arrow-r1LIWD",
        alt: "",
        "aria-hidden": true,
      }),
    ],
  });
});
const C = s.memo(function (e) {
  const { className, waveformLevels } = e;
  return i.jsx("span", {
    className: _d("waveform-4WDECM", className),
    "aria-hidden": true,
    children: waveformLevels.map((e, t) =>
      i.jsx(
        "span",
        {
          className: "waveform-bar-Mqda05",
          style: {
            "--content-generator-voice-waveform-height": "".concat(e, "px"),
          },
        },
        t,
      ),
    ),
  });
});
const className_1 = "voice-input-icon-rIa0ej";
export var n = u.PA(function (e) {
  const { className, containerClassName, disabled, tooltipProps, onClick } = e;
  const { appearance, collapsed } = s.useContext(h.R);
  const size = c.f(appearance) ? 16 : 20;
  const { guideLinkHref, voiceInputManager } = s.useContext(s_1);
  const {
    status,
    waveformLevels = g.Ye,
    permissionDenied,
  } = voiceInputManager.store;
  const W = s.useMemo(
    () =>
      i.jsx(x, {
        guideLinkHref,
      }),
    [guideLinkHref],
  );
  const triggerProps = s.useMemo(
    () => ({
      showArrow: false,
      position: "top",
      clickOutsideToClose: true,
      containerScrollToClose: true,
      popupAlign: {
        top: 8,
      },
      onVisibleChange: (e) => {
        if (!e) {
          voiceInputManager.clearPermissionDenied();
        }
      },
    }),
    [voiceInputManager],
  );
  const icon = s.useMemo(() => {
    switch (status) {
      case f.t.Loading:
        return i.jsx("span", {
          className: className_1,
          children: i.jsx(b.w, {
            size,
            className: "voice-input-loading-icon-E1sQJy",
          }),
        });
      case f.t.Listening:
        return i.jsx(C, {
          waveformLevels,
          className: "voice-waveform-e8jnNC",
        });
      default:
        return i.jsx("span", {
          className: _d(className_1, "voice-input-icon-idle-w51JpG"),
          children: i.jsx(v.cmu, {
            size,
          }),
        });
    }
  }, [size, status, waveformLevels]);
  const L = s.useMemo(() => {
    if (status === f.t.Listening) {
      return p.Ay.t("voice_input_stop_tooltip", {}, "停止语音输入");
    }
    if (status !== f.t.Idle || permissionDenied) {
      return undefined;
    }
    return p.Ay.t("voice_input_mic_tooltip", {}, "语音识别");
  }, [status, permissionDenied]);
  if (collapsed) {
    return null;
  }
  return i.jsx(l.A, {
    trigger: [],
    popupVisible: permissionDenied,
    content: W,
    className: "permission-bubble-popover-bD0l3m",
    triggerProps,
    children: i.jsx(
      o.A,
      r._(
        a._(
          {
            content: L,
          },
          tooltipProps,
        ),
        {
          children: i.jsx("div", {
            className: _d(
              "voice-input-button-container-Fewssn",
              containerClassName,
              {
                "main-frame-2026-RsJoEE": c.f(appearance),
              },
            ),
            children: i.jsx(_.b, {
              type: "secondary",
              shape: "circle",
              icon,
              disabled,
              className: _d(
                "voice-input-button-SxnL7q",
                {
                  "voice-input-button-idle-h7x5su": status === f.t.Idle,
                },
                className,
              ),
              onClick,
            }),
          }),
        },
      ),
    ),
  });
});
