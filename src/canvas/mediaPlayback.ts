/** Shared formatting and clamping helpers for canvas media playback. */

/** Format a media timestamp as `mm:ss`, degrading to `h:mm:ss` past an hour. */
export function formatMediaTime(seconds: number): string {
  if (!Number.isFinite(seconds) || seconds < 0) return "00:00";
  const total = Math.floor(seconds);
  const hours = Math.floor(total / 3600);
  const minutes = Math.floor((total % 3600) / 60);
  const secs = total % 60;
  const mm = String(minutes).padStart(2, "0");
  const ss = String(secs).padStart(2, "0");
  return hours ? `${hours}:${mm}:${ss}` : `${mm}:${ss}`;
}

/**
 * Clamp a seek request into the media's playable range.
 *
 * Metadata that has not loaded yet reports `NaN`, which must not turn into a
 * seek; those requests collapse to the start of the media.
 */
export function clampSeekTime(value: number, duration: number): number {
  if (!Number.isFinite(duration) || duration <= 0) return 0;
  if (!Number.isFinite(value)) return 0;
  return Math.min(Math.max(value, 0), duration);
}
