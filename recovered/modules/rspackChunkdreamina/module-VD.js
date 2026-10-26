import s from "oa";
import i from "bk";
import r from "z8";
import n from "zS";
import o from "Nx";
import l from "bT";
import c from "PC";
import _d from "xb";
const m = l.forwardRef(function (e, t) {
  const {
    visible,
    isReady,
    className,
    tooltipPosition,
    position,
    onMouseLeave,
    onMouseEnter,
    children,
  } = e;
  const vRef = l.useRef(null);
  const ref = n.A((e) => {
    vRef.current = e;
    if (t) {
      if (typeof t === "function") {
        t(e);
      } else {
        t.current = e;
      }
    }
  });
  l.useEffect(() => {
    if (vRef.current) {
      if (visible) {
        vRef.current.classList.remove("hidden");
        vRef.current.classList.add("visible");
      } else {
        vRef.current.classList.remove("visible");
        vRef.current.classList.add("hidden");
      }
    }
  }, [visible]);
  if (visible) {
    return c.createPortal(
      r.jsx("div", {
        className: _d(
          "simple-tooltip",
          className,
          position,
          isReady ? "visible" : "hidden",
        ),
        ref,
        style: tooltipPosition,
        onMouseEnter,
        onMouseLeave,
        children: r.jsx("div", {
          className: "simple-tooltip-content",
          children: r.jsx("div", {
            className: "simple-tooltip-content-inner",
            children,
          }),
        }),
      }),
      document.body,
    );
  }
  return null;
});
export function S(e) {
  const {
    position = "top",
    content,
    className,
    children,
    disabled,
    autoHideMs,
    blockHoverOpen,
    triggerProps: { focusDelay = 200, popupAlign } = {},
  } = e;
  const [f, setF] = l.useState(false);
  const [isReady, setIsReady] = l.useState(false);
  const [S, setS] = l.useState({});
  const TRef = l.useRef(null);
  const MRef = l.useRef(null);
  const LRef = l.useRef();
  const jRef = l.useRef();
  const xRef = l.useRef();
  const wRef = l.useRef(false);
  const N = n.A((t) => {
    var a;
    setF(t);
    if ((a = e.onVisibleChange) != null) {
      a.call(e, t);
    }
  });
  const { run, cancel } = o.A(N, focusDelay);
  const F = n.A(function () {
    const e =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    const t =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    const a =
      arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    const s =
      arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    const window_innerWidth = window.innerWidth;
    const window_innerHeight = window.innerHeight;
    return {
      offsetX: e < 0 ? e : 0,
      offsetY: t < 0 ? t : 0,
      offsetRight: e + a > window_innerWidth ? window_innerWidth - e - a : 0,
      offsetBottom: t + s > window_innerHeight ? window_innerHeight - t - s : 0,
    };
  });
  const I = n.A((e, a, r) => {
    var { x, y: y_1, width, height } = e;
    var { width: width_1, height: height_1 } = a;
    var m = x;
    var h = y_1;
    var g = (width_1 - width) / 2;
    var v = (height_1 - height) / 2;
    if (["left", "right"].includes(position)) {
      m = position === "left" ? m - width_1 - 5 : m + width + 5;
      h -= v;
    } else if (["top", "bottom"].includes(position)) {
      h = position === "top" ? h - height_1 - 5 : h + height + 5;
      m -= g;
    }
    var p = {
      left: 0,
      top: 0,
    };
    if (r == null ? undefined : r[position]) {
      if (typeof r[position] === "number") {
        switch (position) {
          case "left":
            p.left -= r[position];
            break;
          case "right":
            p.left += r[position];
            break;
          case "top":
            p.top -= r[position];
            break;
          case "bottom":
            p.top += r[position];
        }
      } else if (Array.isArray(r[position]) && r[position].length >= 2) {
        switch (position) {
          case "left":
            p.left -= r[position][0];
            p.top += r[position][1];
            break;
          case "right":
          case "bottom":
            p.left += r[position][0];
            p.top += r[position][1];
            break;
          case "top":
            p.left += r[position][0];
            p.top -= r[position][1];
        }
      }
    }
    var { offsetX, offsetY, offsetRight, offsetBottom } = F(
      (m += p.left),
      (h += p.top),
      width_1,
      height_1,
    );
    if (["left", "right"].includes(position)) {
      if (offsetY) {
        h -= offsetY;
      }
      if (offsetBottom) {
        h += offsetBottom;
      }
      if (offsetX && !offsetRight) {
        m += width_1 + 10 + width;
      }
      if (offsetRight && !offsetX) {
        m -= width_1 + 10 + width;
      }
    } else if (["top", "bottom"].includes(position)) {
      if (offsetX) {
        m -= offsetX;
      }
      if (offsetRight) {
        m += offsetRight;
      }
      if (offsetY && !offsetBottom) {
        h += height_1 + 10 + height;
      }
      if (offsetBottom && !offsetY) {
        h -= height_1 + 10 + height;
      }
    }
    return i._(s._({}, S), {
      left: "".concat(m, "px"),
      top: "".concat(h, "px"),
    });
  });
  const W = n.A(() => {
    if (TRef.current && LRef.current && jRef.current) {
      return I(LRef.current.getBoundingClientRect(), jRef.current, popupAlign);
    }
    return {};
  });
  const $ = l.Children.only(children);
  const onMouseLeave = n.A(() => {
    wRef.current = false;
    run(false);
  });
  const closeTooltipImmediately = n.A(() => {
    cancel();
    wRef.current = false;
    setF((t) => {
      if (t) {
        var a;
        if ((a = e.onVisibleChange) != null) {
          a.call(e, false);
        }
      }
      return false;
    });
  });
  const C = n.A((e) => {
    var t;
    var a;
    wRef.current = true;
    if (!LRef.current) {
      LRef.current = e.currentTarget;
    }
    if ((t = (a = $.props).onMouseEnter) != null) {
      t.call(a, e);
    }
    if (!(disabled || blockHoverOpen)) {
      cancel();
      run(true);
    }
  });
  l.useEffect(() => {
    if (TRef.current && LRef.current) {
      var e = typeof content === "string" ? content : undefined;
      if (!jRef.current || xRef.current !== e) {
        var t = TRef.current.getBoundingClientRect();
        jRef.current = {
          width: t.width,
          height: t.height,
        };
        xRef.current = e;
      }
      setS(W());
      setIsReady(f);
    }
  }, [f, W, content]);
  l.useEffect(() => {
    if (!disabled && wRef.current) {
      cancel();
      run(true);
    }
  }, [cancel, run, disabled]);
  ((e) => {
    const { blockHoverOpen, visible, autoHideMs, closeTooltipImmediately } = e;
    l.useEffect(() => {
      if (blockHoverOpen) {
        closeTooltipImmediately();
      }
    }, [blockHoverOpen, closeTooltipImmediately]);
    l.useEffect(() => {
      if (visible && autoHideMs && !blockHoverOpen) {
        var e = window.setTimeout(closeTooltipImmediately, autoHideMs);
        return () => window.clearTimeout(e);
      }
    }, [visible, autoHideMs, blockHoverOpen, closeTooltipImmediately]);
    l.useEffect(() => {
      if (visible) {
        document.addEventListener("pointerdown", closeTooltipImmediately, true);
        window.addEventListener("blur", closeTooltipImmediately);
        return () => {
          document.removeEventListener(
            "pointerdown",
            closeTooltipImmediately,
            true,
          );
          window.removeEventListener("blur", closeTooltipImmediately);
        };
      }
    }, [visible, closeTooltipImmediately]);
  })({
    blockHoverOpen,
    visible: f,
    autoHideMs,
    closeTooltipImmediately,
  });
  l.useEffect(() => {
    var e;
    var t = ((e) => {
      let t;
      for (let a = e; a && a !== document.body;) {
        t = a;
        if (
          ["scroll", "auto"].includes(
            window.getComputedStyle(t).getPropertyValue("overflow-y"),
          ) &&
          t.scrollHeight > t.clientHeight
        ) {
          return a;
        }
        a = a.parentElement;
      }
      return null;
    })(MRef.current);
    if (t) {
      if (!(t == null || (e = t.addEventListener) == null)) {
        e.call(t, "scroll", closeTooltipImmediately);
      }
    }
    return () => {
      var e;
      if (!(t == null || (e = t.removeEventListener) == null)) {
        e.call(t, "scroll", closeTooltipImmediately);
      }
    };
  }, [f, closeTooltipImmediately]);
  const O = n.A(() =>
    l.cloneElement($, {
      onMouseEnter: C,
      onMouseLeave,
    }),
  );
  const Z = n.A(() => {
    cancel();
  });
  return r.jsxs(r.Fragment, {
    children: [
      r.jsx(m, {
        ref: TRef,
        visible: f,
        isReady,
        position,
        tooltipPosition: S,
        onMouseEnter: Z,
        onMouseLeave,
        className,
        children: content,
      }),
      O(),
      r.jsx("div", {
        ref: MRef,
        className: "simple-tooltip-scroll-anchor",
      }),
    ],
  });
}
S.displayName = "SimpleTooltip";
