import r from "z8";
import l from "zS";
import n from "Qey";
import { W } from "./module-cS_3.js";
import s from "pr";
import o from "yw";
import _u from "xb";
import c from "bT";
import { X } from "./module-nkz.js";
export var f = (e) => {
  var {
    volume,
    muted,
    player,
    onVolumeChange,
    iconSize,
    hideVolumeProgress = false,
    alwaysShowVolumeProgress = false,
    iconWrapperClassName,
  } = e;
  var [el, setEl] = c.useState(null);
  var ref = c.useCallback((e) => {
    setEl(e);
  }, []);
  var x = l.A((e) => {
    if (player) {
      if (player.muted) {
        player.muted = false;
      }
      if (e < 0.01) {
        player.muted = true;
        player.volume = 0;
      } else {
        player.muted = false;
        player.volume = e;
      }
      if (onVolumeChange != null) {
        onVolumeChange(e);
      }
    }
  });
  var controlledProgress = c.useMemo(() => {
    if (muted) {
      return 0;
    }
    return volume;
  }, [volume, muted]);
  var { progress, isDragging } = X({
    el,
    zeroAt: "left",
    controlledProgress,
    onDragMove: x,
    onDragStart: x,
    onDragEnd: x,
    throttle: 100,
  });
  var style = c.useMemo(() => {
    let e;
    return {
      right: ((e = 1 - progress), `${100 * e}%`),
    };
  }, [progress]);
  var onClick = l.A(() => {
    if (player) {
      player.muted = !player.muted;
      if (onVolumeChange != null) {
        onVolumeChange(player.muted ? 0 : player.volume);
      }
    }
  });
  var P = c.useMemo(
    () =>
      r.jsx("div", {
        role: "button",
        tabIndex: player ? 0 : -1,
        "aria-disabled": !player,
        onKeyDown: s.q,
        "aria-label": muted
          ? n.Ay.t(
              "octo_canvas_timeline_preview_mute_control_label",
              {},
              "开启原声",
            )
          : n.Ay.t(
              "octo_canvas_timeline_all_tracks_mute_control_label",
              {},
              "静音",
            ),
        className: _u("volume-icon-wrapper-asJWR_", iconWrapperClassName),
        onClick,
        children: muted
          ? r.jsx(o.J8v, {
              size: iconSize,
            })
          : r.jsx(o.aDK, {
              size: iconSize,
            }),
      }),
    [muted, iconWrapperClassName, onClick, iconSize, player],
  );
  return r.jsxs("div", {
    className: _u("volume-wrapper-V647mX", {
      "active-g06xVM": isDragging,
      "always-show-progress-HwCDfw": alwaysShowVolumeProgress,
    }),
    onClick: (e) => {
      e.stopPropagation();
    },
    children: [
      hideVolumeProgress
        ? null
        : r.jsx("div", {
            className: "progress-wrapper-nx36OU",
            ref,
            role: "slider",
            tabIndex: player ? 0 : -1,
            "aria-label": n.Ay.t(
              "octo_canvas_agent_attachment_video_volume_label",
              {
                fileName: n.Ay.t("frame_change_video_title", {}, "视频"),
              },
              "{fileName} 的音量",
            ),
            "aria-disabled": !player,
            "aria-valuemin": 0,
            "aria-valuemax": 100,
            "aria-valuenow": Math.round(100 * controlledProgress),
            onKeyDown: (e) => {
              if (player) {
                var t = W(e.key, controlledProgress, 0, 1, 0.05);
                if (t !== undefined) {
                  e.preventDefault();
                  e.stopPropagation();
                  x(t);
                }
              }
            },
            children: r.jsxs("div", {
              className: "bg-rvsEgA",
              children: [
                r.jsx("div", {
                  className: "current-NShOAz",
                  style,
                }),
                r.jsx("div", {
                  className: "handler-kl_Sri",
                  style,
                }),
              ],
            }),
          }),
      P,
    ],
  });
};
