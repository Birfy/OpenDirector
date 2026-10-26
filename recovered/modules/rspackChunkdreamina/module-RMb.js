import a from "z8";
import r from "bT";
import _i from "xb";
import l from "LUO";
const s = "resizer-sbWsJ8";
const c = "resizer-left-VMtfyp";
const u = "resizer-right-rlj12n";
const className_1 = "scale-time-u9npqG";
const m = (e, t) => {
  if (e && t) {
    return "ew-resize";
  }
  if (e) {
    return "w-resize";
  }
  if (t) {
    return "e-resize";
  }
  return "default";
};
const p = (e) => "".concat(e.toFixed(1), "s");
const v = () => ({
  draggingLeftResizer: false,
  draggingRightResizer: false,
  initialClientX: 0,
  initialStartTime: 0,
  initialEndTime: 0,
});
export var I = r.memo(function (e) {
  const {
    className,
    trackWidth,
    duration,
    startTime,
    endTime,
    minDuration,
    maxDuration,
    label,
    readOnly = false,
    playheadTime,
    playheadVisible = false,
    trackBackground,
    onStartTimeChange,
    onEndTimeChange,
    onDrag,
    onDragEnd,
  } = e;
  const N = endTime - startTime;
  const R = duration > 0 ? (trackWidth * startTime) / duration : 0;
  const A = duration > 0 ? (trackWidth * N) / duration : 0;
  const S = r.useMemo(
    () => ({
      "--thumb-left": "".concat(R, "px"),
      "--thumb-width": "".concat(A, "px"),
    }),
    [R, A],
  );
  const F = r.useMemo(
    () => m(startTime > 0 && N < maxDuration, N > minDuration),
    [minDuration, maxDuration, N, startTime],
  );
  const W = r.useMemo(
    () => m(N > minDuration, endTime < duration && N < maxDuration),
    [minDuration, maxDuration, N, endTime, duration],
  );
  const E = r.useMemo(
    () => ({
      cursor: readOnly ? undefined : F,
    }),
    [readOnly, F],
  );
  const I = r.useMemo(
    () => ({
      cursor: readOnly ? undefined : W,
    }),
    [readOnly, W],
  );
  const L = r.useMemo(() => {
    if (playheadTime === undefined || duration <= 0) {
      return 0;
    }
    return (trackWidth * playheadTime) / duration;
  }, [duration, playheadTime, trackWidth]);
  const D = r.useMemo(
    () => ({
      transform: "translateX(".concat(L, "px)"),
      display: playheadVisible ? undefined : "none",
    }),
    [L, playheadVisible],
  );
  const PRef = r.useRef(v());
  const Z = r.useCallback(
    (e) => {
      var PRef_current = PRef.current;
      if (e.target instanceof Element) {
        if (!e.target.classList.contains(u)) {
          PRef_current.draggingLeftResizer = true;
        }
        if (!e.target.classList.contains(c)) {
          PRef_current.draggingRightResizer = true;
        }
      }
      PRef_current.initialClientX = e.clientX;
      PRef_current.initialStartTime = startTime;
      PRef_current.initialEndTime = endTime;
    },
    [startTime, endTime],
  );
  const O = r.useCallback(
    (e) => {
      var {
        draggingLeftResizer,
        draggingRightResizer,
        initialClientX,
        initialStartTime,
        initialEndTime,
      } = PRef.current;
      if (draggingLeftResizer || draggingRightResizer) {
        var c = e.clientX - initialClientX;
        var u = trackWidth > 0 ? (duration * c) / trackWidth : 0;
        var d = l.q(
          initialStartTime + u,
          draggingRightResizer ? 0 : Math.max(initialEndTime - maxDuration, 0),
          draggingRightResizer ? duration : initialEndTime - minDuration,
        );
        var m = l.q(
          initialEndTime + u,
          draggingLeftResizer ? 0 : initialStartTime + minDuration,
          draggingLeftResizer
            ? duration
            : Math.min(initialStartTime + maxDuration, duration),
        );
        if (draggingLeftResizer) {
          var p =
            draggingRightResizer && m === duration
              ? duration - initialEndTime + initialStartTime
              : d;
          if (onStartTimeChange != null) {
            onStartTimeChange(p);
          }
        }
        if (draggingRightResizer) {
          if (onEndTimeChange != null) {
            onEndTimeChange(
              draggingLeftResizer && !d ? initialEndTime - initialStartTime : m,
            );
          }
        }
        if (onDrag != null) {
          onDrag();
        }
      }
    },
    [
      trackWidth,
      duration,
      minDuration,
      maxDuration,
      onStartTimeChange,
      onEndTimeChange,
      onDrag,
    ],
  );
  const z = r.useCallback(() => {
    var PRef_current = PRef.current;
    if (PRef_current.draggingLeftResizer || PRef_current.draggingRightResizer) {
      PRef.current = v();
      if (onDragEnd != null) {
        onDragEnd();
      }
    }
  }, [onDragEnd]);
  r.useEffect(() => {
    window.addEventListener("mousemove", O);
    window.addEventListener("mouseup", z);
    return () => {
      window.removeEventListener("mousemove", O);
      window.removeEventListener("mouseup", z);
    };
  }, [O, z]);
  const V = !!label && A >= 100;
  const H = A >= 36;
  const $ = A >= 36;
  const J = !V && H;
  const U = J && A < 54;
  return a.jsxs("div", {
    className: _i("track-vKkn5a", className, {
      "read-only-wDvd3A": readOnly,
    }),
    style: S,
    children: [
      trackBackground
        ? a.jsx("div", {
            className: "track-background-TwMFLw",
            children: trackBackground,
          })
        : null,
      a.jsxs("div", {
        className: "thumb-ILqnF9",
        onMouseDown: readOnly ? undefined : Z,
        children: [
          a.jsx("div", {
            className: _i(s, c),
            style: E,
          }),
          a.jsxs("div", {
            className: _i("info-tXDgQo", {
              "info-duration-only-F3Dcbb": J,
              "info-duration-compact-bP80Yh": U,
            }),
            children: [
              V
                ? a.jsx("span", {
                    className: "label-Dp5yh2",
                    children: label,
                  })
                : null,
              H
                ? a.jsx("span", {
                    className: "reserved-duration-vl6qHk",
                    children: p(N),
                  })
                : null,
            ],
          }),
          a.jsx("div", {
            className: _i(s, u),
            style: I,
          }),
        ],
      }),
      a.jsx("div", {
        className: "playhead-UAn8re",
        style: D,
        children: a.jsx("div", {
          className: "playhead-line-Cp2NcO",
        }),
      }),
      a.jsxs("div", {
        className: "scale-IHtwFy",
        children: [
          a.jsx("span", {
            className: className_1,
            children: p($ ? startTime : N),
          }),
          $
            ? a.jsx("span", {
                className: className_1,
                children: p(endTime),
              })
            : null,
        ],
      }),
    ],
  });
});
