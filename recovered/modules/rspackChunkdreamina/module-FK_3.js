import r from "oa";
import l from "bk";
import n from "z8";
import "rQ6";
import i from "RwR";
import s from "zS";
import o from "bT";
import _u from "xb";
import { W } from "./module-U3.js";
import { F, N as N_1 } from "./module-au_2.js";
import { t as t_1 } from "./module-L6Z.js";
import { D } from "./module-BST.js";
export var R = o.memo(function (e) {
  const {
    className,
    menuItemClassName,
    contextMenuClassName,
    style,
    containerProps,
    disable = false,
    onVisibleChange,
    children,
    options,
    baseOptions = F,
    extraOptions = F,
    getPopupContainer,
  } = e;
  const CRef = o.useRef(null);
  const [w, setW] = o.useState(false);
  const P = o.useMemo(
    () =>
      N_1({
        options,
        baseOptions,
        extraOptions,
      }),
    [baseOptions, extraOptions, options],
  );
  const N = o.useCallback(() => {
    if (onVisibleChange != null) {
      onVisibleChange(false);
    }
    setW(false);
  }, [onVisibleChange]);
  const E = s.A((e, t) => {
    e.stopPropagation();
    N();
    if (t != null) {
      t();
    }
  });
  const onContextMenu = o.useCallback(
    (e) => {
      e.preventDefault();
      if (!disable) {
        if (onVisibleChange != null) {
          onVisibleChange(true);
        }
        setW(true);
      }
    },
    [disable, onVisibleChange],
  );
  const j = o.useCallback(
    (e) => {
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
      return n.jsxs(
        o.Fragment,
        {
          children: [
            n.jsx(W, {
              visible: appendDividerBefore,
            }),
            n.jsx(D, {
              disable,
              onClick: (e) => {
                E(e, handler);
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
    },
    [E, menuItemClassName],
  );
  const A = o.useMemo(
    () =>
      n.jsx("div", {
        className: _u("context-menu-oOLvZF", contextMenuClassName),
        children: P.map(j),
      }),
    [contextMenuClassName, j, P],
  );
  const T = s.A(() => {
    if (w) {
      N();
    }
  });
  o.useEffect(() => {
    if (CRef.current && w) {
      var e = t_1(CRef.current);
      e.forEach((e) => {
        e.addEventListener("scroll", T);
      });
      return () => {
        e.forEach((e) => {
          e.removeEventListener("scroll", T);
        });
      };
    }
  }, [T, w]);
  return n.jsx(i.A, {
    alignPoint: true,
    position: "bl",
    trigger: ["contextMenu", "click"],
    popup: () => A,
    popupVisible: w,
    disabled: disable,
    onClickOutside: N,
    onClick: N,
    getPopupContainer,
    children: n.jsx(
      "div",
      l._(
        r._(
          {
            ref: CRef,
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
  });
});
