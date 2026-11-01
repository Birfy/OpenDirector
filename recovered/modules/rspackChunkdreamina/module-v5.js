import a from "oa";
import r from "bk";
import o from "qa";
import l from "z8";
import i from "bT";
import c from "B59";
import _s from "xb";
import { R as R_1 } from "./module-Du8.js";
import m from "BO";
import v from "Ev";
import { E as E_1 } from "./module-G4.js";
import { Z } from "./module-X0.js";
import h from "zP7";
import { N } from "./module-Om.js";
import { v5, vw } from "./module-rY.js";
const x = i.memo(function (e) {
  const { groupCollapsed, axisAligned, layout, disabled, children } = e;
  const [c, setC] = i.useState(disabled);
  const classNames = i.useMemo(
    () => ({
      enter: "reference-item-enter-zRZYjt",
      enterActive: "reference-item-enter-active-OlGhtf",
      exit: "reference-item-exit-WAmsW2",
      exitActive: "reference-item-exit-active-wxf_9c",
    }),
    [],
  );
  i.useEffect(() => {
    var e = requestAnimationFrame(() => setC(disabled));
    return () => cancelAnimationFrame(e);
  }, [disabled]);
  return l.jsx(N, {
    component: null,
    children: children.map((e, r) => {
      var o;
      var { referenceRenderProps = {} } = e.props;
      var { visualIndex = r } = referenceRenderProps;
      var m = vw[visualIndex % vw.length];
      var v = v5[visualIndex % v5.length];
      var f = (o = e.key) != null ? o : r;
      return l.jsx(
        h.A,
        {
          timeout: 300,
          classNames,
          children: l.jsx("div", {
            "data-index": r,
            className: _s("reference-item-bb5Qg2", {
              "expanded-jc3BMo": !groupCollapsed,
              "stacked-aDURlF": layout === "stacked",
              "tiled-gFb_lP": layout === "tiled",
              "disabled-_rBTXG": c,
            }),
            style: {
              "--index-in-group": "".concat(r),
              "--rotate": `${axisAligned ? 0 : groupCollapsed ? -m : -v}deg`,
            },
            children: e,
          }),
        },
        f,
      );
    }),
  });
});
const y = "tiled-L_WSMA";
export var V = i.memo(function (e) {
  let t;
  const {
    className,
    style,
    visualIndexOffset = 0,
    axisAligned = false,
    disabled = false,
    layout = "default",
    children,
    onMouseLeave,
  } = e;
  const N = o._(e, [
    "className",
    "style",
    "visualIndexOffset",
    "axisAligned",
    "disabled",
    "layout",
    "children",
    "onMouseLeave",
  ]);
  const { collapsed } = i.useContext(R_1);
  const j = i.useMemo(() => layout === "stacked", [layout]);
  const T = i.useMemo(() => layout === "tiled", [layout]);
  const [A, setA] = i.useState(false);
  const RRef = i.useRef(null);
  const MRef = i.useRef(false);
  const SRef = i.useRef(false);
  const zRef = i.useRef(false);
  const { isHovered, handleMouseEnter, handleMouseLeave } = m.D({
    delay: 100,
  });
  i.useEffect(() => {
    if (isHovered) {
      setA(true);
    }
  }, [isHovered]);
  const { active } = c.fF();
  const { isDragging } = (() => {
    const [isDragging_1, setIsDragging] = i.useState(false);
    const nRef = i.useRef(0);
    const aRef = i.useRef(null);
    i.useEffect(() => {
      var e = (dataTransfer) => {
        if (v.nr) {
          return (
            dataTransfer.effectAllowed === "all" ||
            dataTransfer.effectAllowed === "copy" ||
            dataTransfer.types.includes("Files") ||
            (dataTransfer.types.length === 0 &&
              dataTransfer.effectAllowed !== "none")
          );
        }
        return dataTransfer.types.includes("Files");
      };
      var r = (r) => {
        if (r.dataTransfer && e(r.dataTransfer)) {
          r.preventDefault();
          if (aRef.current) {
            window.clearTimeout(aRef.current);
            aRef.current = null;
          }
          nRef.current += 1;
          if (nRef.current === 1) {
            setIsDragging(true);
          }
        }
      };
      var o = (r) => {
        if (r.dataTransfer && e(r.dataTransfer)) {
          r.preventDefault();
          nRef.current -= 1;
          if (nRef.current <= 0) {
            aRef.current = window.setTimeout(() => {
              nRef.current = 0;
              setIsDragging(false);
              aRef.current = null;
            }, 50);
          }
        }
      };
      var l = (t) => {
        if (t.dataTransfer && e(t.dataTransfer)) {
          t.preventDefault();
          if (!v.nr) {
            t.dataTransfer.dropEffect = "copy";
          }
        }
      };
      var i = (r) => {
        if (r.dataTransfer && e(r.dataTransfer)) {
          if (aRef.current) {
            window.clearTimeout(aRef.current);
            aRef.current = null;
          }
          nRef.current = 0;
          setIsDragging(false);
        }
      };
      document.addEventListener("dragenter", r, true);
      document.addEventListener("dragleave", o, true);
      document.addEventListener("dragover", l, true);
      document.addEventListener("drop", i, true);
      return () => {
        document.removeEventListener("dragenter", r, true);
        document.removeEventListener("dragleave", o, true);
        document.removeEventListener("dragover", l, true);
        document.removeEventListener("drop", i, true);
        if (aRef.current) {
          window.clearTimeout(aRef.current);
        }
      };
    }, []);
    return {
      isDragging: isDragging_1,
    };
  })();
  const B = !!(active || isDragging);
  const G =
    (active == null || (t = active.data.current) == null
      ? undefined
      : t.scene) === "content-generator";
  E_1(() => {
    var e = MRef.current && !G;
    MRef.current = G;
    if (e && SRef.current) {
      SRef.current = false;
      zRef.current = true;
      setA(true);
      var t = () => {
        var e;
        zRef.current = false;
        if (!((e = RRef.current) == null ? undefined : e.matches(":hover"))) {
          setA(false);
        }
      };
      document.addEventListener("pointermove", t, {
        capture: true,
        once: true,
      });
      return () => {
        zRef.current = false;
        document.removeEventListener("pointermove", t, true);
      };
    }
  }, [G]);
  const onMouseLeave_1 = i.useCallback(
    (e) => {
      if (onMouseLeave != null) {
        onMouseLeave(e);
      }
      if (G) {
        SRef.current = true;
        return;
      }
      if (!zRef.current) {
        setA(false);
      }
    },
    [onMouseLeave, G],
  );
  const onCollapseReferenceGroup = i.useCallback(() => {
    setA(false);
  }, []);
  const q = i.useMemo(
    () =>
      (Array.isArray(children) ? children : [children]).filter((e) =>
        i.isValidElement(e),
      ),
    [children],
  );
  const Q = i.useMemo(() => q.length, [q]);
  const U = i.useMemo(
    () => !disabled && (T || B || A || Q <= 1),
    [disabled, T, B, A, Q],
  );
  const H = i.useMemo(
    () => !disabled && !j && !T && (B || A) && Q > 1,
    [disabled, j, T, B, A, Q],
  );
  const style_1 = i.useMemo(
    () =>
      r._(a._({}, style), {
        "--reference-count": "".concat(Q),
        "--reference-item-width": `${48}px`,
        "--reference-item-height": `${64}px`,
        "--reference-item-gap": `${axisAligned ? 8 : 4}px`,
      }),
    [style, Q, axisAligned],
  );
  const V = i.useMemo(
    () =>
      _s("reference-group-content-hUalkz", {
        "expanded-i34Z3O": U,
        "stacked-nbmUEp": j,
        [y]: T,
      }),
    [U, j, T],
  );
  const children_1 = i.useMemo(
    () =>
      l.jsx(x, {
        groupCollapsed: !U,
        axisAligned,
        layout,
        disabled: disabled || G,
        children: q.map((e, indexInGroup) => {
          var n;
          return i.cloneElement(e, {
            key: (n = e.key) != null ? n : indexInGroup,
            referenceRenderProps: r._(a._({}, e.props.referenceRenderProps), {
              visualIndex: visualIndexOffset + indexInGroup,
              groupCollapsed: !U,
              indexInGroup,
              axisAligned,
              layout,
              onCollapseReferenceGroup,
            }),
          });
        }),
      }),
    [
      q,
      U,
      visualIndexOffset,
      axisAligned,
      layout,
      onCollapseReferenceGroup,
      disabled,
      G,
    ],
  );
  return l.jsxs(
    "div",
    r._(
      a._(
        {
          ref: RRef,
        },
        N,
      ),
      {
        className: _s("reference-group-BMsz7K", className, {
          "collapsed-ujzTY5": collapsed,
          "axis-aligned-dYrn1v": axisAligned,
          [y]: T,
        }),
        style: style_1,
        onMouseLeave: onMouseLeave_1,
        children: [
          j || T
            ? null
            : l.jsx("div", {
                className: _s("reference-group-background-bjmxoQ", {
                  "visible-RUxz3R": H,
                }),
              }),
          j
            ? null
            : l.jsx("div", {
                className: "reference-group-hover-trigger-heVtNl",
                onMouseEnter: handleMouseEnter,
                onMouseLeave: handleMouseLeave,
              }),
          T
            ? l.jsx(Z, {
                className: "reference-group-scroll-container-iF4KlJ",
                contentClassName: V,
                disabled: disabled || B,
                children: children_1,
              })
            : l.jsx("div", {
                className: V,
                children: children_1,
              }),
        ],
      },
    ),
  );
});
