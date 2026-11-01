import r from "bT";
import a from "B59";
import o from "nE";
function i(e, n, t) {
  let r = e.slice();
  r.splice(t < 0 ? r.length + t : t, 0, r.splice(n, 1)[0]);
  return r;
}
function l(e) {
  return e !== null && e >= 0;
}
let strategy_1 = (e) => {
  let { rects, activeIndex, overIndex, index } = e;
  let o = i(rects, overIndex, activeIndex);
  let l = rects[index];
  let s = o[index];
  if (s && l) {
    return {
      x: s.left - l.left,
      y: s.top - l.top,
      scaleX: s.width / l.width,
      scaleY: s.height / l.height,
    };
  }
  return null;
};
let c = "Sortable";
let UContext = r.createContext({
  activeIndex: -1,
  containerId: c,
  disableTransforms: false,
  items: [],
  overIndex: -1,
  useDragOverlay: false,
  sortedRects: [],
  strategy: strategy_1,
  disabled: {
    draggable: false,
    droppable: false,
  },
});
export function gB(e) {
  let { children, id, items, strategy = strategy_1, disabled = false } = e;
  let {
    active,
    dragOverlay,
    droppableRects,
    over,
    measureDroppableContainers,
  } = a.fF();
  let f = o.YG(c, id);
  let useDragOverlay = dragOverlay.rect !== null;
  let items_1 = r.useMemo(
    () =>
      items.map((e) => {
        if (typeof e === "object" && "id" in e) {
          return e.id;
        }
        return e;
      }),
    [items],
  );
  let x = active != null;
  let activeIndex = active ? items_1.indexOf(active.id) : -1;
  let overIndex = over ? items_1.indexOf(over.id) : -1;
  let $Ref = r.useRef(items_1);
  let _ = !((e, n) => {
    if (e === n) {
      return true;
    }
    if (e.length !== n.length) {
      return false;
    }
    for (let t = 0; t < e.length; t++) {
      if (e[t] !== n[t]) {
        return false;
      }
    }
    return true;
  })(items_1, $Ref.current);
  let disableTransforms = (overIndex !== -1 && activeIndex === -1) || _;
  let disabled_1 =
    typeof disabled === "boolean"
      ? {
          draggable: disabled,
          droppable: disabled,
        }
      : disabled;
  o.Es(() => {
    if (_ && x) {
      measureDroppableContainers(items_1);
    }
  }, [_, items_1, x, measureDroppableContainers]);
  r.useEffect(() => {
    $Ref.current = items_1;
  }, [items_1]);
  let value = r.useMemo(
    () => ({
      activeIndex,
      containerId: f,
      disabled: disabled_1,
      disableTransforms,
      items: items_1,
      overIndex,
      useDragOverlay,
      sortedRects: items_1.reduce((acc, item, index) => {
        let r = droppableRects.get(item);
        if (r) {
          acc[index] = r;
        }
        return acc;
      }, Array(items_1.length)),
      strategy,
    }),
    [
      activeIndex,
      f,
      disabled_1.draggable,
      disabled_1.droppable,
      disableTransforms,
      items_1,
      overIndex,
      droppableRects,
      useDragOverlay,
      strategy,
    ],
  );
  return r.createElement(
    UContext.Provider,
    {
      value,
    },
    children,
  );
}
let m = (e) => {
  let { id, items, activeIndex, overIndex } = e;
  return i(items, activeIndex, overIndex).indexOf(id);
};
let v = (e) => {
  let {
    containerId,
    isSorting,
    wasDragging,
    index,
    items,
    newIndex,
    previousItems,
    previousContainerId,
    transition,
  } = e;
  return (
    !!transition &&
    !!wasDragging &&
    (previousItems === items || index !== newIndex) &&
    (!!isSorting || (newIndex !== index && containerId === previousContainerId))
  );
};
let p = {
  duration: 200,
  easing: "ease",
};
let property = "transform";
let b = o.Ks.Transition.toString({
  property,
  duration: 0,
  easing: "linear",
});
let f = {
  roleDescription: "sortable",
};
export function gl(e) {
  let draggable;
  let t;
  let i;
  let s;
  let {
    animateLayoutChanges = v,
    attributes,
    disabled,
    data,
    getNewIndex = m,
    id,
    strategy,
    resizeObserverConfig,
    transition = p,
  } = e;
  let {
    items,
    containerId,
    activeIndex,
    disabled: disabled_1,
    disableTransforms,
    sortedRects,
    overIndex,
    useDragOverlay,
    strategy: strategy_1,
  } = r.useContext(UContext);
  draggable = disabled;
  t = disabled_1;
  let M =
    typeof draggable === "boolean"
      ? {
          draggable,
          droppable: false,
        }
      : {
          draggable:
            (i = draggable == null ? undefined : draggable.draggable) != null
              ? i
              : t.draggable,
          droppable:
            (s = draggable == null ? undefined : draggable.droppable) != null
              ? s
              : t.droppable,
        };
  let index = items.indexOf(id);
  let data_1 = r.useMemo(
    () => ({
      sortable: {
        containerId,
        index,
        items,
      },
      ...data,
    }),
    [containerId, data, index, items],
  );
  let updateMeasurementsFor = r.useMemo(
    () => items.slice(items.indexOf(id)),
    [items, id],
  );
  let { rect, node, isOver, setNodeRef } = a.zM({
    id,
    data: data_1,
    disabled: M.droppable,
    resizeObserverConfig: {
      updateMeasurementsFor,
      ...resizeObserverConfig,
    },
  });
  let {
    active,
    activatorEvent,
    activeNodeRect,
    attributes: attributes_1,
    setNodeRef: setNodeRef_1,
    listeners,
    isDragging,
    over,
    setActivatorNodeRef,
    transform,
  } = a.PM({
    id,
    data: data_1,
    attributes: {
      ...f,
      ...attributes,
    },
    disabled: M.draggable,
  });
  let setNodeRef_2 = o.jn(setNodeRef, setNodeRef_1);
  let isSorting = !!active;
  let ee = isSorting && !disableTransforms && l(activeIndex) && l(overIndex);
  let en = !useDragOverlay && isDragging;
  let et = en && ee ? transform : null;
  let er = ee
    ? et != null
      ? et
      : (strategy != null ? strategy : strategy_1)({
          rects: sortedRects,
          activeNodeRect,
          activeIndex,
          overIndex,
          index,
        })
    : null;
  let newIndex =
    l(activeIndex) && l(overIndex)
      ? getNewIndex({
          id,
          items,
          activeIndex,
          overIndex,
        })
      : index;
  let activeId = active == null ? undefined : active.id;
  let eiRef = r.useRef({
    activeId,
    items,
    newIndex,
    containerId,
  });
  let el = items !== eiRef.current.items;
  let es = animateLayoutChanges({
    active,
    containerId,
    isDragging,
    isSorting,
    id,
    index,
    items,
    newIndex: eiRef.current.newIndex,
    previousItems: eiRef.current.items,
    previousContainerId: eiRef.current.containerId,
    transition,
    wasDragging: eiRef.current.activeId != null,
  });
  let ec = ((e) => {
    let { disabled, index, node, rect } = e;
    let [s, setS] = r.useState(null);
    let uRef = r.useRef(index);
    o.Es(() => {
      if (!disabled && index !== uRef.current && node.current) {
        let e = rect.current;
        if (e) {
          let n = a.Sj(node.current, {
            ignoreTransform: true,
          });
          let t = {
            x: e.left - n.left,
            y: e.top - n.top,
            scaleX: e.width / n.width,
            scaleY: e.height / n.height,
          };
          if (t.x || t.y) {
            setS(t);
          }
        }
      }
      if (index !== uRef.current) {
        uRef.current = index;
      }
    }, [disabled, index, node, rect]);
    r.useEffect(() => {
      if (s) {
        setS(null);
      }
    }, [s]);
    return s;
  })({
    disabled: !es,
    index,
    node,
    rect,
  });
  r.useEffect(() => {
    if (isSorting && eiRef.current.newIndex !== newIndex) {
      eiRef.current.newIndex = newIndex;
    }
    if (containerId !== eiRef.current.containerId) {
      eiRef.current.containerId = containerId;
    }
    if (items !== eiRef.current.items) {
      eiRef.current.items = items;
    }
  }, [isSorting, newIndex, containerId, items]);
  r.useEffect(() => {
    if (activeId === eiRef.current.activeId) {
      return;
    }
    if (activeId && !eiRef.current.activeId) {
      eiRef.current.activeId = activeId;
      return;
    }
    let e = setTimeout(() => {
      eiRef.current.activeId = activeId;
    }, 50);
    return () => clearTimeout(e);
  }, [activeId]);
  return {
    active,
    activeIndex,
    attributes: attributes_1,
    data: data_1,
    rect,
    index,
    newIndex,
    items,
    isOver,
    isSorting,
    isDragging,
    listeners,
    node,
    overIndex,
    over,
    setNodeRef: setNodeRef_2,
    setActivatorNodeRef,
    setDroppableNodeRef: setNodeRef,
    setDraggableNodeRef: setNodeRef_1,
    transform: ec != null ? ec : er,
    transition:
      ec || (el && eiRef.current.newIndex === index)
        ? b
        : (!en || o.kx(activatorEvent)) && transition && (isSorting || es)
          ? o.Ks.Transition.toString({
              ...transition,
              property,
            })
          : undefined,
  };
}
a.vL.Down;
a.vL.Right;
a.vL.Up;
a.vL.Left;
