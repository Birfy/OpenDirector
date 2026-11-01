import r from "z8";
import o from "bT";
import { QO } from "./module-mY_2.js";
import { A } from "./module-Ww_2.js";
function useS(e) {
  let {
    prefixCls,
    style,
    children,
    direction,
    disabled,
    droppable,
    onDrop,
    onDragStart,
    onDragEnd,
    onDragOver,
    onDragLeave,
  } = e;
  let mRef = o.useRef(null);
  let vRef = o.useRef(null);
  let [g, setG] = o.useState("none");
  let [b, setB] = o.useState(false);
  let [w, setW] = o.useState(null);
  o.useEffect(
    () => () => {
      if (vRef.current) {
        clearTimeout(vRef.current);
      }
    },
    [],
  );
  o.useEffect(() => {
    if (g === "dragged") {
      vRef.current = setTimeout(() => setG("none"), 1000);
    }
  }, [g]);
  return r.jsx("li", {
    draggable: true,
    ref: mRef,
    style,
    className: A(`${prefixCls}-item`, {
      [`${prefixCls}-item-${g}`]: g !== "none",
      [`${prefixCls}-item-gap-${w}`]: w,
      [`${prefixCls}-item-disabled`]: disabled,
      [`${prefixCls}-item-dragover`]: b,
    }),
    onDragStart: (e) => {
      e.stopPropagation();
      setG("dragging");
      try {
        e.dataTransfer.setData("text/plain", "");
      } catch (e) {}
      if (onDragStart) {
        onDragStart(e);
      }
    },
    onDragEnd: (e) => {
      e.stopPropagation();
      setB(false);
      setG("dragged");
      if (onDragEnd) {
        onDragEnd(e);
      }
    },
    onDragOver: (e) => {
      if (droppable) {
        e.stopPropagation();
        e.preventDefault();
        let t = mRef.current.getBoundingClientRect();
        if (direction === "vertical") {
          setW(
            e.pageY > window.pageYOffset + t.top + t.height / 2
              ? "bottom"
              : "top",
          );
        } else {
          setW(
            e.pageX > window.pageXOffset + t.left + t.width / 2
              ? "right"
              : "left",
          );
        }
        setB(true);
        if (onDragOver) {
          onDragOver(e);
        }
      }
    },
    onDragLeave: (e) => {
      if (droppable) {
        e.stopPropagation();
        setB(false);
        if (onDragLeave) {
          onDragLeave(e);
        }
      }
    },
    onDrop: (e) => {
      if (droppable) {
        e.stopPropagation();
        e.preventDefault();
        setB(false);
        setW(null);
        setG("none");
        if (onDrop) {
          onDrop(e, w);
        }
      }
    },
    children,
  });
}
function useA(e) {
  let { getPrefixCls } = o.useContext(QO);
  let prefixCls = getPrefixCls("draggable");
  let { className, children, direction, onIndexChange, itemWrapperStyle } = e;
  let [f, setF] = o.useState(null);
  return r.jsx("div", {
    className: A(prefixCls, className),
    children: o.Children.map(children, (children_1, t) =>
      r.jsx(useS, {
        style: itemWrapperStyle,
        prefixCls,
        direction,
        onDragStart: () => setF(t),
        onDragEnd: () => setF(null),
        onDrop: (e, n) => {
          let r = n === "left" || n === "top" ? t : t + 1;
          if (onIndexChange && f !== r) {
            onIndexChange(r, f);
          }
        },
        children: children_1,
      }),
    ),
  });
}
export { useA as A };
useS.defaultProps = {
  droppable: true,
};
useA.defaultProps = {
  direction: "vertical",
};
