import r from "bT";
import a from "xm3";
import o from "Du8";
import i from "wF";
import l from "I9";
var useS = () => {
  var e;
  var n;
  var t;
  var s;
  var c;
  var { contentGeneratorManager } = i.h(a.V);
  var {
    data: { contentGeneratorType },
  } = contentGeneratorManager;
  var { contentGeneratorType: contentGeneratorType_1, contentGeneratorTypes } =
    r.useContext(o.R);
  var p =
    contentGeneratorType_1 != null
      ? contentGeneratorType_1
      : contentGeneratorType;
  var g = r.useMemo(() => {
    if (contentGeneratorTypes) {
      return new Set(contentGeneratorTypes);
    }
    return null;
  }, [contentGeneratorTypes]);
  var b = l.w();
  var f =
    !g || g.has(p)
      ? p
      : (e =
            contentGeneratorTypes == null
              ? undefined
              : contentGeneratorTypes[0]) != null
        ? e
        : p;
  var h = r.useMemo(() => b.filter((e) => !e.disabled), [b]);
  if (h.some((e) => e.value === f)) {
    return f;
  }
  if (
    (n =
      (t = (s = h[0]) == null ? undefined : s.value) != null
        ? t
        : (c = b[0]) == null
          ? undefined
          : c.value) != null
  ) {
    return n;
  }
  return f;
};
export { useS as o };
