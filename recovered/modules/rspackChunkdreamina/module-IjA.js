import r from "z8";
import a from "Qey";
import o from "pr";
import i from "bT";
import l from "ED";
import s from "yw";
import c from "krN";
import u from "eoi";
import d from "ja";
import v from "cO";
import p from "SEl";
const m = l.PA(function (e) {
  let n;
  const { subject, label, renderActionButton } = e;
  const { audioInfo, selectedVoice } = subject.content;
  const c =
    audioInfo != null
      ? audioInfo
      : selectedVoice == null
        ? undefined
        : selectedVoice.audioInfo;
  const uRef = i.useRef(null);
  const url =
    (n = c == null ? undefined : c.audioUrl) != null
      ? n
      : c == null
        ? undefined
        : c.url;
  const duration = c == null ? undefined : c.duration;
  i.useEffect(() => {
    var uRef_current = uRef.current;
    if (uRef_current != null) {
      uRef_current.play();
    }
    return () => {
      if (uRef_current != null) {
        uRef_current.pause();
      }
    };
  }, [url]);
  if (url) {
    return r.jsxs("div", {
      className: "audio-preview-qmtmdU",
      children: [
        r.jsxs("div", {
          className: "audio-header-Yicup2",
          children: [
            r.jsx("span", {
              className: "audio-label-N8IKOE",
              children: label,
            }),
            renderActionButton,
          ],
        }),
        r.jsx(d.q, {
          ref: uRef,
          url,
          duration,
          className: "audio-player-JBGNHh",
          containerHeight: 40,
        }),
      ],
    });
  }
  return null;
});
const style = {
  "--subject-mention-preview-aspect-ratio": "1",
};
const b = l.PA(function (e) {
  const { subject, label, renderActionButton } = e;
  const { videoInfo } = subject.content;
  const {
    videoUrl = "",
    coverUrl = "",
    duration = 0,
  } = videoInfo != null ? videoInfo : {};
  const [u, setU] = i.useState(0);
  i.useEffect(() => {
    setU(0);
  }, [videoUrl]);
  const onTimeUpdate = i.useCallback((e) => {
    setU(e.currentTarget.currentTime);
  }, []);
  if (videoUrl) {
    return r.jsxs("div", {
      className: "video-preview-bn2ysf",
      style,
      children: [
        r.jsx("video", {
          src: v.m(videoUrl, null, {
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
              "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1-lZwWFJqQmtXRXBzWTNrNWFtSXlO$EJh$np$d1R*Z*tiR0p0$m5sWld*SjJZMms1-0dKd$$te*pi$FZvWWtNN%1HRllRakJa$0$*MFdsa*9NRnB-TlhwaFZ6bDFZM2s1ZW1SWFNuRmFWMDR3$EZje*JHSn$$bkJpTWpSMFpFZEdia3d6$*p*WmJ-QnNX$E5SZEdKWFZu$mtSMngyWW1reE1tRlh$bXhpZ$R*M1kyM$dNb%Z-$mpOTWJsSjZa$WRHZ$ZvelZubz0",
          }),
          poster: coverUrl,
          className: "video-Qg8868",
          crossOrigin: "anonymous",
          draggable: false,
          autoPlay: true,
          loop: true,
          playsInline: true,
          onTimeUpdate,
        }),
        r.jsx("div", {
          className: "mask-LwX8mh",
        }),
        r.jsxs("div", {
          className: "video-header-51QoDf",
          children: [
            r.jsx("span", {
              className: "video-label-Sm3pQN",
              children: label,
            }),
            renderActionButton,
          ],
        }),
        duration
          ? r.jsx("span", {
              className: "duration-Aj9k7_",
              children: p.X(Math.max(0, duration - u), "mm:ss"),
            })
          : null,
      ],
    });
  }
  return null;
});
function useF(e) {
  const { onClick } = e;
  const onClick_1 = i.useCallback(
    (e) => {
      e.stopPropagation();
      onClick();
    },
    [onClick],
  );
  return r.jsx("span", {
    role: "button",
    tabIndex: 0,
    onKeyDown: o.q,
    "aria-label": [
      a.Ay.t("octo_director_stage_content_edit", {}, "编辑"),
      a.Ay.t("video_unified_edit", {}, "参考内容"),
    ].join(" · "),
    className: "preview-edit-button-ass3xP",
    onClick: onClick_1,
    children: r.jsx(s.GI1, {
      size: 14,
    }),
  });
}
export var L = l.PA(function (e) {
  let n;
  let t;
  var { subject, contentType = c.uZ(subject), label, editable, onEdit } = e;
  const renderActionButton = i.useMemo(() => {
    if (editable) {
      return r.jsx(useF, {
        onClick: onEdit,
      });
    }
    return null;
  }, [editable, onEdit]);
  if (contentType === c.yC.Video) {
    return r.jsx(b, {
      subject,
      label,
      renderActionButton,
    });
  }
  if (contentType === c.yC.Audio) {
    return r.jsx(m, {
      subject,
      label,
      renderActionButton,
    });
  }
  const images = [
    (t = subject.content.mainImage) == null ? undefined : t.imageUrl,
    ...((n = subject.content.auxiliaryImages) != null ? n : []).map(
      (e) => e.imageUrl,
    ),
  ].filter((e) => !!e);
  return r.jsx(u.S, {
    images,
    label,
    renderActionButton,
  });
});
