import r from "oa";
import a from "H26";
import n from "rGr";
export function M(e, t, i) {
  const { vid, title, originAudio } = t;
  const { audioUrl, url, duration, durationMs } =
    originAudio != null ? originAudio : {};
  return e.createInstance(
    n.e,
    r._(
      {
        uri:
          vid != null ? vid : originAudio == null ? undefined : originAudio.vid,
        url: audioUrl || url || "",
        duration: durationMs ? durationMs / a.K : duration,
        name:
          title != null
            ? title
            : originAudio == null
              ? undefined
              : originAudio.title,
      },
      i,
    ),
  );
}
