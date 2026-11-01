import r from "oa";
import a from "bk";
import o from "qa";
import i from "z8";
import l from "bT";
import s from "B59";
import { gl } from "./module-HP_3.js";
import u from "nE";
import d from "qO";
export var Q = l.createContext(undefined);
export var g = l.memo(function (e) {
  let n;
  const { item, renderDragOverlay, sortingStrategy, disabled, children } = e;
  const f = o._(e, [
    "item",
    "renderDragOverlay",
    "sortingStrategy",
    "disabled",
    "children",
  ]);
  const { active } = s.fF();
  const { id, contentGeneratorRef } = l.useContext(d.b);
  const className = l.useContext(Q);
  const droppable = !!(
    (active == null || (n = active.data.current) == null
      ? undefined
      : n.scene) && active.data.current.scene !== "content-generator"
  );
  const {
    setNodeRef,
    isDragging,
    attributes,
    listeners,
    transform,
    transition,
  } = gl({
    id: "".concat(item.id, "-").concat(id),
    strategy: sortingStrategy,
    data: {
      scene: "content-generator",
      collisionDetection: s.fp,
      renderDragOverlay,
      autoScroll: {
        enabled: true,
        canScroll: (e) => {
          var n;
          var t;
          return (
            (n =
              contentGeneratorRef == null ||
              (t = contentGeneratorRef.current) == null
                ? undefined
                : t.contains(e)) != null && n
          );
        },
      },
      extra: {
        contentGeneratorIdentifier: id,
      },
    },
    disabled: {
      draggable: disabled || droppable,
      droppable,
    },
  });
  const style = l.useMemo(
    () => ({
      transform: u.Ks.Transform.toString(transform),
      transition: (active == null ? undefined : active.id)
        ? transition
        : "none",
      opacity: +!isDragging,
      width: "100%",
      height: "100%",
    }),
    [isDragging, transform, transition, active == null ? undefined : active.id],
  );
  const k = l.useMemo(
    () =>
      listeners &&
      Object.fromEntries(
        Object.entries(listeners).map((e) => {
          var [n, t] = e;
          return [
            n,
            (e) => {
              if (e.currentTarget.contains(e.target)) {
                t(e);
              }
            },
          ];
        }),
      ),
    [listeners],
  );
  const children_1 = l.isValidElement(children)
    ? l.cloneElement(children, f)
    : children;
  return i.jsx(
    "div",
    a._(
      r._(
        {
          ref: setNodeRef,
          style,
        },
        attributes,
        k,
      ),
      {
        children: className
          ? i.jsx("div", {
              className,
              children: children_1,
            })
          : children_1,
      },
    ),
  );
});
