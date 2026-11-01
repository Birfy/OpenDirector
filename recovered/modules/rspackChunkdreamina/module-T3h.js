export function q(e) {
  let t;
  let a;
  const { transcodedVideo } = e;
  const i =
    (t =
      (a = transcodedVideo == null ? undefined : transcodedVideo["720p"]) !=
      null
        ? a
        : transcodedVideo == null
          ? undefined
          : transcodedVideo["360p"]) != null
      ? t
      : transcodedVideo == null
        ? undefined
        : transcodedVideo.origin;
  if (i == null) {
    return undefined;
  }
  return i.videoUrl;
}
export function D(e) {
  let t;
  let a;
  if ((t = (a = e.originVideo) == null ? undefined : a.videoUrl) != null) {
    return t;
  }
  return q(e);
}
