import a from "NY";
import r from "z8";
import "Vx";
import i from "Ix";
import o from "cO";
import l from "bT";
import _s from "xb";
import u from "Qey";
import d from "iuD";
import m from "mC";
import { I as I_1 } from "./module-RMb.js";
import { i as i_1 } from "./module-Qrs.js";
import { M as M_1 } from "./module-Rqk.js";
import "xj";
import g from "R8";
import f from "yw";
import b from "hUS";
const _ = l.memo(function (e) {
  const { className, loading = false, playing, onPlay, onPause } = e;
  const icon = l.useMemo(() => {
    if (loading) {
      return r.jsx(b.w, {
        size: 16,
      });
    }
    if (playing) {
      return r.jsx(f._Zj, {
        size: 16,
      });
    }
    return r.jsx(f.AYg, {
      size: 16,
    });
  }, [loading, playing]);
  const onClick = l.useCallback(() => {
    var e;
    if ((e = playing ? onPause : onPlay) != null) {
      e();
    }
  }, [playing, onPause, onPlay]);
  return r.jsx(g.A, {
    "aria-label": playing
      ? u.Ay.t("ai_music_pause", {}, "暂停")
      : u.Ay.t("ai_music_play", {}, "播放"),
    "aria-busy": loading,
    className: _s("audio-play-pause-button-CNICCa", className),
    icon,
    onClick,
  });
});
export var B = l.memo(
  l.forwardRef(function (e, t) {
    let n;
    var {
      audio,
      className,
      loading = false,
      name,
      audioBuffer,
      duration = (n = audioBuffer == null ? undefined : audioBuffer.duration) !=
      null
        ? n
        : 0,
      scrollbarWidth,
      minReservedDuration,
      maxReservedDuration,
      startTime,
      endTime,
      onStartTimeChange,
      onEndTimeChange,
      onPlay,
      onPause,
    } = e;
    const readOnly = !audioBuffer;
    const FRef = l.useRef(audio != null ? audio : new Audio());
    const W = i_1(FRef.current);
    const E = M_1(FRef.current);
    const playheadTime = l.useMemo(() => startTime + E, [startTime, E]);
    const LRef = l.useRef(null);
    const onPlay_1 = l.useCallback(
      () =>
        a._(function* () {
          if (onPlay != null) {
            onPlay();
          }
          if (audioBuffer) {
            const e = yield d.n(m.r(audioBuffer, startTime, endTime));
            if (LRef.current) {
              URL.revokeObjectURL(LRef.current);
            }
            LRef.current = URL.createObjectURL(e);
            FRef.current.src = o.m(LRef.current, null, {
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
                "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1-W1Je%1-%mlNalIy$1RJNWRHTkhPWFZh$np$d1kzaz$hR1J-$W5CaW$%RXdZMjFzZEdKWFZubE1Na1l4$2tkc2RreFl$bmxo$np*MFdsaEpk$1JJ$*pSWldFcH$aRmhO%FE9PQ",
            });
            FRef.current.play();
          }
        })(),
      [audioBuffer, startTime, endTime, onPlay],
    );
    const onPause_1 = l.useCallback(() => {
      if (onPause != null) {
        onPause();
      }
      if (audioBuffer) {
        FRef.current.pause();
      }
    }, [audioBuffer, onPause]);
    const onDrag = l.useCallback(() => {
      FRef.current.pause();
      FRef.current.currentTime = 0;
    }, []);
    const onDragEnd = l.useCallback(() => {
      onPlay_1();
    }, [onPlay_1]);
    l.useImperativeHandle(t, () => FRef.current);
    l.useLayoutEffect(
      () => () => {
        FRef.current.pause();
        if (LRef.current) {
          URL.revokeObjectURL(LRef.current);
        }
        FRef.current.src = "";
      },
      [],
    );
    return r.jsxs("div", {
      className: _s("audio-trimmer-KMA97n", className, {
        "read-only-rt7PaQ": readOnly,
      }),
      children: [
        r.jsx(i.A, {
          content: W
            ? u.Ay.t("web_new_ai_music_pause", {}, "暂停")
            : u.Ay.t("web_new_ai_music_play", {}, "播放"),
          children: r.jsx(_, {
            loading,
            playing: W,
            onPlay: onPlay_1,
            onPause: onPause_1,
          }),
        }),
        r.jsx(I_1, {
          className: "track-QUhuuT",
          trackWidth: scrollbarWidth,
          duration,
          startTime,
          endTime,
          minDuration: minReservedDuration,
          maxDuration: maxReservedDuration,
          label: name,
          readOnly,
          playheadTime,
          playheadVisible: W,
          onStartTimeChange,
          onEndTimeChange,
          onDrag,
          onDragEnd,
        }),
      ],
    });
  }),
);
