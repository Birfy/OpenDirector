import n from "z8";
import s from "zS";
import a from "bT";
import _r from "xb";
export var h = a.forwardRef(function (e, t) {
  const {
    content,
    children,
    containerClassName,
    contentClassName,
    contentStyle,
    isDisable = false,
    needStopPropagation = false,
    hasBackdropFilter = true,
    isUseHover,
    onVisibleChange,
    onMouseEnter,
    onMouseOut,
  } = e;
  const bRef = a.useRef(null);
  const SRef = a.useRef(null);
  const CRef = a.useRef(false);
  const wRef = a.useRef(false);
  const [x, setX] = a.useState(false);
  const onClick = (e) => {
    if (needStopPropagation) {
      if (e != null) {
        e.stopPropagation();
      }
    }
    if (!isDisable) {
      var t;
      var i;
      var n = !x;
      setX(n);
      var s = e
        ? {
            x: e.clientX,
            y: e.clientY,
          }
        : undefined;
      var { width = 0, height = 0 } =
        (t =
          (i = SRef.current) == null ? undefined : i.getBoundingClientRect()) !=
        null
          ? t
          : {};
      if (onVisibleChange != null) {
        onVisibleChange(n, s, {
          width,
          height,
        });
      }
    }
  };
  const M = s.A((e) => {
    var bRef_current = bRef.current;
    if (bRef_current && !bRef_current.contains(e.target) && x) {
      setX(false);
      if (onVisibleChange != null) {
        onVisibleChange(false);
      }
    }
  });
  const close = () => {
    setX(false);
    if (onVisibleChange != null) {
      onVisibleChange(false);
    }
  };
  const open = () => {
    onClick();
  };
  a.useEffect(() => {
    document.addEventListener("mousedown", M);
    return () => {
      document.removeEventListener("mousedown", M);
    };
  }, [M]);
  a.useImperativeHandle(t, () => ({
    close,
    open,
  }));
  return n.jsxs("div", {
    className: _r("container-wYfxYC", containerClassName),
    ref: bRef,
    children: [
      n.jsx("div", {
        onClick,
        onMouseEnter: () => {
          if (onMouseEnter != null) {
            onMouseEnter();
          }
          if (isUseHover && !isDisable) {
            CRef.current = true;
            setTimeout(() => {
              if (!x && (CRef.current || wRef.current)) {
                open();
              }
            }, 200);
          }
        },
        onMouseLeave: () => {
          if (onMouseOut != null) {
            onMouseOut();
          }
          if (isUseHover && !isDisable) {
            CRef.current = false;
            setTimeout(() => {
              if (!(CRef.current || wRef.current || !x)) {
                close();
              }
            }, 200);
          }
        },
        children,
      }),
      n.jsx("div", {
        ref: SRef,
        className: _r("panel-A1I20g", contentClassName, {
          "hide-bsIWtp": !x,
          "panel-with-backdrop-filter-fZRBLE": hasBackdropFilter,
        }),
        onMouseEnter: () => {
          if (isUseHover && !isDisable) {
            wRef.current = true;
            setTimeout(() => {
              if (!x && (CRef.current || wRef.current)) {
                open();
              }
            }, 200);
          }
        },
        onMouseLeave: () => {
          if (isUseHover && !isDisable) {
            wRef.current = false;
            setTimeout(() => {
              if (!(CRef.current || wRef.current || !x)) {
                close();
              }
            }, 200);
          }
        },
        style: contentStyle,
        children: content,
      }),
    ],
  });
});
