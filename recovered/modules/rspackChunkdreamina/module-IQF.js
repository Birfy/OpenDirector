import a from "z8";
import r from "bT";
import _i from "xb";
import l from "YK2";
export function L(e) {
  const { disabled, previewKey, className, content, children } = e;
  const [u, setU] = r.useState(false);
  const mRef = r.useRef(null);
  const [popupAlign, setPopupAlign] = r.useState({
    right: 4,
    left: 4,
  });
  r.useEffect(() => setU(false), [previewKey, disabled]);
  return a.jsx(l.n, {
    className: _i("popover-TqDohF", className),
    disabled,
    popupVisible: u && !disabled,
    triggerProps: {
      position: "rt",
      popupAlign,
    },
    onVisibleChange: (e) => {
      var mRef_current = mRef.current;
      var a =
        mRef_current == null
          ? undefined
          : mRef_current.closest(
              '.lv-select-option, [data-slot="dropdown-menu-item"]',
            );
      var r =
        mRef_current == null
          ? undefined
          : mRef_current.closest(
              '.lv-select-popup, [data-slot="dropdown-menu-content"], [data-slot="dropdown-menu-sub-content"]',
            );
      if (e && mRef_current && a && r) {
        var i = mRef_current.getBoundingClientRect();
        var o = a.getBoundingClientRect();
        var l = r.getBoundingClientRect();
        var s = o.top - i.top;
        setPopupAlign({
          right: [l.right - i.right + 4, s],
          left: [i.left - l.left + 4, s],
        });
      }
      setU(e && !disabled);
    },
    content:
      u && !disabled
        ? a.jsx("div", {
            onPointerDown: (e) => e.stopPropagation(),
            onMouseDown: (e) => {
              e.preventDefault();
              e.stopPropagation();
            },
            onClick: (e) => e.stopPropagation(),
            children: content,
          })
        : null,
    children: a.jsx("span", {
      ref: mRef,
      className: "option-trigger-JYgBgv",
      children,
    }),
  });
}
