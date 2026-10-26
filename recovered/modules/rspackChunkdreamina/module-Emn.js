import a from "oa";
import r from "bk";
import i from "z8";
import o from "zS";
import l from "bT";
import s from "PC";
import _c from "xb";
import d from "U3";
import m from "au";
import p from "L6Z";
import v from "BST";
export var P = l.memo(function (e) {
  const {
    className,
    contextMenuClassName,
    menuItemClassName,
    style,
    containerProps,
    disable = false,
    resetKey,
    onVisibleChange,
    children,
    options,
    baseOptions = m.F,
    extraOptions = m.F,
  } = e;
  const j = l.useMemo(
    () =>
      m.N({
        options,
        baseOptions,
        extraOptions,
      }),
    [baseOptions, extraOptions, options],
  );
  const wRef = l.useRef(null);
  const MRef = l.useRef(null);
  const [T, setT] = l.useState(false);
  const [R, setR] = l.useState(false);
  const SRef = l.useRef(resetKey);
  const [F, setF] = l.useState({
    top: 0,
    left: 0,
  });
  const ERef = l.useRef({
    x: 0,
    y: 0,
  });
  const IRef = l.useRef(false);
  const LRef = l.useRef(null);
  const D = o.A((e, t) => {
    e.stopPropagation();
    if (onVisibleChange != null) {
      onVisibleChange(false);
    }
    setT(false);
    if (t != null) {
      t();
    }
  });
  const onContextMenu = o.A((e) => {
    e.preventDefault();
    if (!disable) {
      var { clientX, clientY } = e;
      ERef.current = {
        x: clientX,
        y: clientY,
      };
      if (onVisibleChange != null) {
        onVisibleChange(true);
      }
      setT(true);
    }
  });
  const Z = o.A(() => {
    if (onVisibleChange != null) {
      onVisibleChange(false);
    }
    setT(false);
    setR(false);
  });
  const onMouseDown = o.A(() => {
    IRef.current = true;
    clearTimeout(LRef.current);
    LRef.current = setTimeout(() => {
      IRef.current = false;
    }, 0);
  });
  const z = o.A((e) => {
    if (!(!MRef.current || MRef.current.contains(e.target) || IRef.current)) {
      Z();
    }
  });
  const V = o.A((e) => {
    var { innerWidth, innerHeight } = window;
    var { width, height } = e;
    var { y, x } = ERef.current;
    if (y + height > innerHeight) {
      y = innerHeight - height;
    }
    if (x + width > innerWidth) {
      x = innerWidth - width;
    }
    setF({
      top: y,
      left: x,
    });
  });
  l.useEffect(() => {
    if (SRef.current !== resetKey) {
      SRef.current = resetKey;
      if (T) {
        Z();
      }
    }
  }, [resetKey, T, Z]);
  l.useEffect(() => {
    if (wRef.current) {
      var e = p.t(wRef.current);
      e.forEach((e) => {
        e.addEventListener("scroll", Z);
      });
      return () => {
        e.forEach((e) => {
          e.removeEventListener("scroll", Z);
        });
      };
    }
  }, [Z]);
  l.useEffect(() => {
    if (T && MRef.current) {
      V(MRef.current.getBoundingClientRect());
      setR(true);
    }
  }, [T, V]);
  l.useEffect(() => {
    if (T) {
      document.addEventListener("mousedown", z);
    } else {
      document.removeEventListener("mousedown", z);
    }
    return () => {
      document.removeEventListener("mousedown", z);
    };
  }, [T, z]);
  const ref = o.A((e) => {
    var wRef_current = wRef.current;
    wRef.current = e;
    if (wRef_current) {
      wRef_current.removeEventListener("contextmenu", onContextMenu);
    }
    if (wRef.current) {
      wRef.current.addEventListener("contextmenu", onContextMenu);
    }
  });
  const $ = o.A((e) => {
    var {
      handler,
      key,
      text,
      disable,
      icon,
      render,
      appendDividerBefore,
      tooltip,
    } = e;
    return i.jsxs(
      l.Fragment,
      {
        children: [
          i.jsx(d.W, {
            visible: appendDividerBefore,
          }),
          i.jsx(v.D, {
            disable,
            onClick: (e) => {
              D(e, handler);
            },
            icon,
            text,
            render,
            tooltip,
            className: menuItemClassName,
          }),
        ],
      },
      key,
    );
  });
  const J = o.A(() => {
    var style_1 = {
      position: "fixed",
      top: "".concat(F.top, "px"),
      left: "".concat(F.left, "px"),
      zIndex: 9999,
      visibility: R ? "visible" : "hidden",
    };
    return s.createPortal(
      i.jsx("div", {
        className: _c("context-menu-VlLn1d", contextMenuClassName),
        style: style_1,
        ref: MRef,
        onMouseDown,
        children: j.map($),
      }),
      document.body,
    );
  });
  return i.jsxs(i.Fragment, {
    children: [
      i.jsx(
        "div",
        r._(
          a._(
            {
              ref,
            },
            containerProps,
          ),
          {
            className,
            style,
            onContextMenu,
            children,
          },
        ),
      ),
      T ? J() : null,
    ],
  });
});
