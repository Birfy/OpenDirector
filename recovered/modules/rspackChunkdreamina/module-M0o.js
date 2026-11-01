import r from "GuR";
export function Y(e) {
  if (e == null ? undefined : e.vid) {
    let t;
    let i;
    let a;
    const audioUrl =
      (t = (i = e.audioUrl) != null ? i : e.url) != null ? t : e.link;
    if (audioUrl) {
      return {
        vid: e.vid,
        audioUrl,
        duration:
          (a = e.duration) != null
            ? a
            : e.durationMs
              ? e.durationMs / 1000
              : undefined,
        title: e.title,
        source: r.u.VoiceSourceTypeGenerated,
      };
    }
  }
}
