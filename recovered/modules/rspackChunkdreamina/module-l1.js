export function M(e) {
  let t;
  const r =
    (t = e.rules) == null
      ? undefined
      : t.filter((t) => {
          var r;
          var i;
          var a;
          var n;
          var o;
          var s;
          r = e.resolutionType;
          return (
            ((i = t.resolutions) == null ||
              !i.length ||
              !!(r && t.resolutions.includes(r))) &&
            ((a = e.quality),
            (n = t.qualities) == null ||
              !n.length ||
              !!(a && t.qualities.includes(a))) &&
            ((o = e.imageInputNum),
            (s = t.imageInputNumRanges) == null ||
              !s.length ||
              (typeof o === "number" &&
                t.imageInputNumRanges.some((e) => o >= e.min && o <= e.max)))
          );
        });
  if (r == null ? undefined : r.length) {
    const i = r.filter((e) => {
      var t;
      if ((t = e.imageInputNumRanges) == null) {
        return undefined;
      }
      return t.length;
    });
    const a = i.length ? i : r;
    const n = a.filter((e) => {
      var t;
      if ((t = e.qualities) == null) {
        return undefined;
      }
      return t.length;
    });
    const o = n.length ? n : a;
    return o[o.length - 1];
  }
}
