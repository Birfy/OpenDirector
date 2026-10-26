import r from "z8";
import a from "bT";
import o from "B59";
import * as i from "./module-HP_3.js";
import l from "qO";
const s = function (e, n) {
  const t =
    arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  const { includeIntersectingEdges = false } = t;
  const a = (e, n, t, a) => {
    if (includeIntersectingEdges) {
      return n >= t && e <= a;
    }
    return n > t && e < a;
  };
  return (
    a(e.left, e.right, n.left, n.right) && a(e.top, e.bottom, n.top, n.bottom)
  );
};
export var Q = a.memo(function (e) {
  let n;
  const { items, sortingStrategy, onMove, onRemove, children } = e;
  const { id, contentGeneratorRef } = a.useContext(l.b);
  const { active, dragOverlay } = o.fF();
  const disabled = !!(
    (active == null || (n = active.data.current) == null
      ? undefined
      : n.scene) && active.data.current.scene !== "content-generator"
  );
  const h = a.useCallback((e) => "".concat(e, "-").concat(id), [id]);
  const y = a.useCallback(
    (e) => {
      if (
        ((t = e.data.current) == null ? undefined : t.scene) !==
        "content-generator"
      ) {
        return false;
      }
      var n;
      var t;
      var { contentGeneratorIdentifier } =
        (n = e.data.current.extra) != null ? n : {};
      return contentGeneratorIdentifier === id;
    },
    [id],
  );
  const x = a.useCallback(
    (e) => {
      var { active } = e;
      if (y(active)) {
        var t = active.rect.current.translated;
        if (t) {
          return new DOMRect(t.left, t.top, t.width, t.height);
        }
      }
    },
    [y],
  );
  const items_1 = a.useMemo(() => items.map((e) => h(e.id)), [items, h]);
  const onDragEnd = a.useCallback(
    (e) => {
      var n;
      var { active, over } = e;
      var o =
        contentGeneratorRef == null || (n = contentGeneratorRef.current) == null
          ? undefined
          : n.getBoundingClientRect();
      var i = x(e);
      if (i && o) {
        if (!s(i, o)) {
          var l = items.find((e) => h(e.id) === active.id);
          if (l) {
            if (onRemove != null) {
              onRemove(l.id);
            }
          }
          return;
        }
        if (over && active.id !== over.id) {
          var c = items.findIndex((e) => h(e.id) === active.id);
          var m = items.findIndex((e) => h(e.id) === over.id);
          if (c !== -1 && m !== -1 && c !== m) {
            onMove(c, m);
          }
        }
      }
    },
    [contentGeneratorRef, x, items, h, onMove, onRemove],
  );
  const onDragMove = a.useCallback(
    (e) => {
      var n;
      var t =
        contentGeneratorRef == null || (n = contentGeneratorRef.current) == null
          ? undefined
          : n.getBoundingClientRect();
      var r = x(e);
      if (r && t) {
        var a = !s(r, t);
        if (dragOverlay.nodeRef.current) {
          dragOverlay.nodeRef.current.style.opacity = a ? "0.5" : "1";
        }
      }
    },
    [dragOverlay.nodeRef, contentGeneratorRef, x],
  );
  o.E5({
    onDragMove,
    onDragEnd,
  });
  return r.jsx(i.gB, {
    items: items_1,
    disabled,
    strategy: sortingStrategy,
    children,
  });
});
