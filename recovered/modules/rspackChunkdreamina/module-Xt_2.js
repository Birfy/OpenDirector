export function R(e) {
  let t;
  let i;
  let r =
    (t = e.originVideo) != null
      ? t
      : (i = e.transcodedVideo) == null
        ? undefined
        : i.origin;
  if (!r && e.transcodedVideo) {
    r = Object.values(e.transcodedVideo)
      .filter((e) => {
        if (e == null) {
          return undefined;
        }
        return e.height;
      })
      .sort((e, t) => {
        var i;
        var r;
        return (
          ((i = t == null ? undefined : t.height) != null ? i : 0) -
          ((r = e == null ? undefined : e.height) != null ? r : 0)
        );
      })[0];
  }
  return r;
}
