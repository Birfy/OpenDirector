import t from "z8";
import n from "bT";
import i from "yw";
import r from "hUS";
export var q = n.memo(function (e) {
  const { className, size, playing, loading = false } = e;
  if (loading) {
    return t.jsx(r.w, {
      className,
      size,
    });
  }
  if (playing) {
    return t.jsx(i._Zj, {
      className,
      size,
    });
  }
  return t.jsx(i.AYg, {
    className,
    size,
  });
});
