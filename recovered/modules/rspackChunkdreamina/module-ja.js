import a from "oa";
import n from "z8";
import o from "bT";
import { H as H_1 } from "./module-N2P.js";
import i from "ED";
import _s from "xb";
import d from "wF";
import { X } from "./module-SEl.js";
import v from "xi";
import { K, Y } from "./module-Ai_3.js";
import h from "Qey";
import p from "pr";
import f from "yw";
import g from "hUS";
import x from "zS";
import y from "gY";
import k from "nkz";
const className_1 = "icon-GhaNAU";
const w = o.memo(function (e) {
  const { isPlaying, isLoading, onToggle, renderLoading, className, disabled } =
    e;
  const d = o.useCallback(() => {
    if (isLoading) {
      if (renderLoading) {
        return renderLoading();
      }
      return n.jsx(g.w, {
        className: className_1,
        size: 12,
      });
    }
    if (isPlaying) {
      return n.jsx(f._Zj, {
        className: className_1,
      });
    }
    return n.jsx(f.AYg, {
      className: className_1,
    });
  }, [isPlaying, isLoading, renderLoading]);
  const onClick = o.useCallback(() => {
    if (!(disabled || isLoading)) {
      onToggle();
    }
  }, [disabled, isLoading, onToggle]);
  return n.jsx("div", {
    className: _s("audio-controls-LFs52d", className),
    role: "button",
    tabIndex: disabled || isLoading ? -1 : 0,
    "aria-label": isPlaying
      ? h.Ay.t("ai_music_pause", {}, "暂停")
      : h.Ay.t("ai_music_play", {}, "播放"),
    "aria-busy": isLoading,
    onKeyDown: p.q,
    onClick,
    "aria-disabled": disabled || isLoading || undefined,
    "data-disabled": !!disabled || undefined,
    children: d(),
  });
});
const _ = {
  "progress-wrapper": "progress-wrapper-lVFiAT",
  progressWrapper: "progress-wrapper-lVFiAT",
  bg: "bg-JfOMxv",
  current: "current-UuTMLC",
  handler: "handler-oWEGO_",
};
const A = o.memo(function (e) {
  const { progress, onSeek, disableDrag = false, className } = e;
  const [el, setEl] = o.useState(null);
  const [controlledProgress, setControlledProgress] = o.useState(progress);
  o.useEffect(() => {
    if (!y.A(progress)) {
      setControlledProgress(progress);
    }
  }, [progress]);
  const v = x.A((e) => {
    setControlledProgress(e);
    if (onSeek != null) {
      onSeek(e);
    }
  });
  const { progress: progress_1, isDragging } = k.X({
    el,
    zeroAt: "left",
    controlledProgress,
    onDragMove: v,
    onDragStart: v,
    onDragEnd: v,
    throttle: 16,
  });
  const p = o.useMemo(() => {
    let e;
    return {
      right: ((e = 1 - progress_1), `${100 * e}%`),
    };
  }, [progress_1]);
  return n.jsx("div", {
    className: _s(_.progressWrapper, className, {
      [_.active]: isDragging,
    }),
    ref: setEl,
    children: n.jsxs("div", {
      className: _.bg,
      children: [
        n.jsx("div", {
          className: _.current,
          style: p,
        }),
        !disableDrag &&
          n.jsx("div", {
            className: _.handler,
            style: p,
          }),
      ],
    }),
  });
});
const C = {
  "player-controller": "player-controller-ZmJDDQ",
  playerController: "player-controller-ZmJDDQ",
  "left-section": "left-section-aFA0KB",
  leftSection: "left-section-aFA0KB",
  "time-info": "time-info-NcYPa5",
  timeInfo: "time-info-NcYPa5",
  now: "now-qdq80F",
  duration: "duration-yPYXvC",
  "progress-container": "progress-container-obO29S",
  progressContainer: "progress-container-obO29S",
};
export var q = i.PA(
  o.forwardRef(function (e, t) {
    const {
      url,
      className,
      containerWidth,
      containerHeight,
      enableProgress = false,
      controlsClassName,
      controlsStyle,
      controlsTimelineClassName,
      disableDragProgress,
      duration,
    } = e;
    const k = H_1(url, duration) || 0;
    const _ = d.h(Y);
    const { currentAudioInfo, playState, progress } = _.observableData;
    const S = o.useMemo(
      () =>
        (currentAudioInfo == null ? undefined : currentAudioInfo.url) === url,
      [currentAudioInfo == null ? undefined : currentAudioInfo.url, url],
    );
    const isPlaying = S && playState === K.Playing;
    const E = !!url;
    const T = S ? progress / 1000 : 0;
    const progress_1 = k > 0 ? T / k : 0;
    const P = o.useMemo(
      () =>
        a._(
          {
            width: containerWidth,
            height: containerHeight,
          },
          controlsStyle,
        ),
      [containerWidth, containerHeight, controlsStyle],
    );
    const W = o.useCallback((e) => {
      v.V.warn("[AudioPreviewPlayer] play failed", e);
    }, []);
    const play = o.useCallback(() => {
      if (url) {
        if (S) {
          return _.play();
        }
        _.setAudioList({
          audios: [
            {
              id: url,
              url,
            },
          ],
        });
        return _.play(0);
      }
      v.V.warn("[AudioPreviewPlayer] play skipped because audio url is empty");
      return Promise.resolve();
    }, [url, S, _]);
    const pause = o.useCallback(() => {
      var e;
      if (
        ((e = _.observableData.currentAudioInfo) == null
          ? undefined
          : e.url) === url
      ) {
        _.pause();
      }
    }, [url, _]);
    const H = o.useCallback(() => {
      if (isPlaying) {
        pause();
      } else {
        play().catch(W);
      }
    }, [isPlaying, pause, play, W]);
    const onSeek = o.useCallback(
      (e) => {
        if (url) {
          var t = e * k * 1000;
          if (S) {
            _.seek(t);
          } else {
            _.setAudioList({
              audios: [
                {
                  id: url,
                  url,
                },
              ],
            });
            _.play(0)
              .then(() => {
                _.seek(t);
              })
              .catch(W);
          }
        }
      },
      [url, k, S, _, W],
    );
    o.useEffect(
      () => () => {
        pause();
      },
      [pause],
    );
    o.useImperativeHandle(
      t,
      () => ({
        play,
        pause,
        toggle: H,
        seek: (e) => {
          if (k > 0) {
            onSeek(e / k);
          }
        },
        getCurrentTime: () => T,
        getDuration: () => k,
        getIsPlaying: () => isPlaying,
      }),
      [play, pause, H, onSeek, T, k, isPlaying],
    );
    return n.jsxs("div", {
      className: _s(C.playerController, controlsClassName, className),
      style: P,
      children: [
        n.jsxs("div", {
          className: C.leftSection,
          children: [
            n.jsx(w, {
              isPlaying,
              isLoading: false,
              onToggle: H,
              disabled: !E,
            }),
            n.jsxs("div", {
              className: C.timeInfo,
              children: [
                n.jsx("span", {
                  className: C.now,
                  children: X(T, "mm:ss"),
                }),
                n.jsx("span", {
                  className: C.dividing,
                  children: "/",
                }),
                n.jsx("span", {
                  className: C.duration,
                  children: X(k, "mm:ss"),
                }),
              ],
            }),
          ],
        }),
        enableProgress
          ? n.jsx(A, {
              className: _s(C.progressContainer, controlsTimelineClassName),
              progress: progress_1,
              onSeek,
              disableDrag: disableDragProgress,
            })
          : null,
      ],
    });
  }),
);
q.displayName = "AudioPreviewPlayer";
