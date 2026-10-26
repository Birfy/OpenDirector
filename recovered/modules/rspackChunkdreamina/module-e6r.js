import a from "z8";
import r from "bT";
import i from "B59";
export function B(e) {
  let t;
  let n;
  const { children } = e;
  const [l, setL] = r.useState(null);
  const c = i.MS(i.cA, {
    activationConstraint: {
      distance: 2,
    },
  });
  const u = i.MS(i.uN);
  const onDragStart = r.useCallback((e) => {
    var { active } = e;
    setL(active);
  }, []);
  const m = r.useCallback(() => {
    setL(null);
  }, []);
  const p = l == null ? undefined : l.data.current;
  const v = p == null ? undefined : p.collisionDetection;
  const collisionDetection = r.useCallback(
    (e) => {
      if (e.pointerCoordinates) {
        return (v != null ? v : i.Qo)(e);
      }
      return i.Qo(e);
    },
    [v],
  );
  return a.jsxs(i.Mp, {
    autoScroll: (t = p == null ? undefined : p.autoScroll) != null && t,
    sensors: [c, u],
    onDragStart,
    onDragEnd: m,
    onDragCancel: m,
    collisionDetection,
    measuring: p == null ? undefined : p.measuring,
    children: [
      children,
      a.jsx(i.Hd, {
        style: p == null ? undefined : p.dragOverlayStyle,
        dropAnimation: null,
        modifiers: p == null ? undefined : p.modifiers,
        children:
          p == null || (n = p.renderDragOverlay) == null
            ? undefined
            : n.call(p),
      }),
    ],
  });
}
