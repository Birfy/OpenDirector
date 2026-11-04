import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
} from "react";
import { CanvasIcon } from "./CanvasIcon";
import { clampSeekTime, formatMediaTime } from "./mediaPlayback";
import { useT } from "../i18n/I18nProvider.tsx";

export { clampSeekTime, formatMediaTime } from "./mediaPlayback";

export type VideoControlsProps = {
  media: HTMLVideoElement | null;
  playing: boolean;
  duration: number;
  currentTime: number;
  muted: boolean;
  onTogglePlay: () => void;
  onSeek: (time: number) => void;
  onToggleMute: () => void;
  onToggleFullscreen: () => void;
  fullscreen: boolean;
};

/**
 * Floating playback controls for a canvas video node.
 *
 * Every interactive surface carries `nodrag nopan nowheel` so a pointer
 * gesture on the scrubber never moves the node or pans the canvas.
 */
export function VideoControls({
  playing,
  duration,
  currentTime,
  muted,
  onTogglePlay,
  onSeek,
  onToggleMute,
  onToggleFullscreen,
  fullscreen,
}: VideoControlsProps) {
  const t = useT();
  const track = useRef<HTMLDivElement>(null);
  const [scrubbing, setScrubbing] = useState(false);
  const [scrubTime, setScrubTime] = useState(0);

  const percent = (() => {
    const position = scrubbing ? scrubTime : currentTime;
    if (!duration || !Number.isFinite(duration)) return 0;
    return Math.min(Math.max((position / duration) * 100, 0), 100);
  })();
  const shown = scrubbing ? scrubTime : currentTime;

  const timeFromPointer = useCallback(
    (clientX: number) => {
      const element = track.current;
      if (!element) return 0;
      const rect = element.getBoundingClientRect();
      if (rect.width <= 0) return 0;
      const ratio = (clientX - rect.left) / rect.width;
      return clampSeekTime(ratio * duration, duration);
    },
    [duration],
  );

  const beginScrub = (event: ReactPointerEvent<HTMLDivElement>) => {
    event.stopPropagation();
    event.preventDefault();
    event.currentTarget.setPointerCapture(event.pointerId);
    setScrubbing(true);
    setScrubTime(timeFromPointer(event.clientX));
  };

  const moveScrub = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!scrubbing) return;
    event.stopPropagation();
    setScrubTime(timeFromPointer(event.clientX));
  };

  const endScrub = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!scrubbing) return;
    event.stopPropagation();
    const target = timeFromPointer(event.clientX);
    setScrubbing(false);
    onSeek(target);
  };

  // Keep the pending scrub position in sync while the video advances.
  useEffect(() => {
    if (!scrubbing) setScrubTime(currentTime);
  }, [currentTime, scrubbing]);

  return (
    <div
      className="cw-video-controls nodrag nopan nowheel"
      role="group"
      aria-label={t("canvasNodes.video.controls")}
      onPointerDown={(event) => event.stopPropagation()}
      onClick={(event) => event.stopPropagation()}
      onDoubleClick={(event) => event.stopPropagation()}
    >
      <button
        type="button"
        className="cw-video-control-button"
        aria-label={
          playing ? t("canvasNodes.video.pause") : t("canvasNodes.video.play")
        }
        title={
          playing ? t("canvasNodes.video.pause") : t("canvasNodes.video.play")
        }
        onClick={(event) => {
          event.stopPropagation();
          onTogglePlay();
        }}
      >
        <CanvasIcon name={playing ? "pause" : "play"} />
      </button>
      <span className="cw-video-time" aria-live="off">
        {formatMediaTime(shown)}
        <span className="cw-video-time-divider"> / </span>
        {formatMediaTime(duration)}
      </span>
      <div
        ref={track}
        className="cw-video-scrubber"
        role="slider"
        tabIndex={0}
        aria-label={t("canvasNodes.video.progress")}
        aria-valuemin={0}
        aria-valuemax={Math.round(duration) || 0}
        aria-valuenow={Math.round(shown) || 0}
        aria-valuetext={`${formatMediaTime(shown)} / ${formatMediaTime(duration)}`}
        onPointerDown={beginScrub}
        onPointerMove={moveScrub}
        onPointerUp={endScrub}
        onPointerCancel={endScrub}
        onKeyDown={(event) => {
          if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
          event.stopPropagation();
          event.preventDefault();
          const step = event.key === "ArrowLeft" ? -5 : 5;
          onSeek(clampSeekTime(currentTime + step, duration));
        }}
      >
        <div className="cw-video-scrubber-rail" aria-hidden="true" />
        <div
          className="cw-video-scrubber-fill"
          aria-hidden="true"
          style={{ width: `${percent}%` }}
        />
        <div
          className="cw-video-scrubber-thumb"
          aria-hidden="true"
          style={{ left: `${percent}%` }}
        />
      </div>
      <button
        type="button"
        className="cw-video-control-button"
        aria-label={
          muted ? t("canvasNodes.video.unmute") : t("canvasNodes.video.mute")
        }
        title={
          muted ? t("canvasNodes.video.unmute") : t("canvasNodes.video.mute")
        }
        onClick={(event) => {
          event.stopPropagation();
          onToggleMute();
        }}
      >
        <CanvasIcon name={muted ? "volumeOff" : "volumeHigh"} />
      </button>
      <button
        type="button"
        className="cw-video-control-button"
        aria-label={
          fullscreen
            ? t("canvasNodes.video.exitFullscreen")
            : t("canvasNodes.video.fullscreen")
        }
        title={
          fullscreen
            ? t("canvasNodes.video.exitFullscreen")
            : t("canvasNodes.video.fullscreen")
        }
        onClick={(event) => {
          event.stopPropagation();
          onToggleFullscreen();
        }}
      >
        <CanvasIcon name={fullscreen ? "exitFullscreen" : "fullscreen"} />
      </button>
    </div>
  );
}
