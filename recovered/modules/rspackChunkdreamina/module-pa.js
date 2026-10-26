import a from "oa";
import r from "bk";
import o from "qa";
import l from "z8";
import i from "bT";
import _c from "xb";
import u from "Qey";
import d from "yw";
import { y as y_1 } from "./module-fSn.js";
import v from "pr";
import f from "hUS";
import { t as t_1 } from "./module-Gvb.js";
import { v5 } from "./module-rY.js";
export var x = i.memo(function (e) {
  const {
    className,
    style,
    referenceRenderProps = {},
    accept,
    active = false,
    loading = false,
    disabled = false,
    multiple,
    readOnly = false,
    icon,
    label,
    onCancel,
    onChange,
    onClick,
  } = e;
  const A = o._(e, [
    "className",
    "style",
    "referenceRenderProps",
    "accept",
    "active",
    "loading",
    "disabled",
    "multiple",
    "readOnly",
    "icon",
    "label",
    "onCancel",
    "onChange",
    "onClick",
  ]);
  var {
    visualIndex = 0,
    groupCollapsed = false,
    indexInGroup = visualIndex,
    axisAligned = false,
  } = referenceRenderProps;
  const { id } = A;
  const onChange_1 = i.useCallback(
    (e) => {
      if (multiple) {
        if (onChange != null) {
          onChange(e);
        }
      } else if (onChange != null) {
        onChange(e[0]);
      }
    },
    [multiple, onChange],
  );
  const {
    setNodeRef,
    isDragAccepted,
    handleDragEnter,
    handleDragLeave,
    handleDragOver,
    handleDrop,
  } = t_1({
    droppableId: id != null ? id : "reference-upload-".concat(visualIndex),
    accept,
    disabled,
    readOnly,
    multiple,
    onChange: onChange_1,
  });
  const I = i.useMemo(
    () => groupCollapsed && indexInGroup > 0,
    [groupCollapsed, indexInGroup],
  );
  const K = i.useMemo(() => {
    if (I || axisAligned) {
      return 0;
    }
    return v5[visualIndex % v5.length];
  }, [I, visualIndex, axisAligned]);
  const style_1 = i.useMemo(
    () =>
      a._(
        {
          "--rotate": "".concat(K, "deg"),
        },
        style,
      ),
    [K, style],
  );
  const Q = i.useMemo(() => l.jsx(d.xZp, {}), []);
  const U = i.useMemo(() => l.jsx(f.w, {}), []);
  const H = i.useMemo(
    () =>
      i.cloneElement(loading ? U : icon != null ? icon : Q, {
        className: "icon-oTHDYE",
      }),
    [loading, U, icon, Q],
  );
  const Y = i.useCallback(
    (e) => {
      if (onClick != null) {
        onClick(e);
      }
      if (!(e.defaultPrevented || readOnly)) {
        y_1({
          accept,
          multiple,
          onFilesSelected: (e) => {
            if (multiple) {
              if (onChange != null) {
                onChange(e);
              }
            } else if (onChange != null) {
              onChange(e[0]);
            }
          },
          onCancel,
        });
      }
    },
    [accept, multiple, onCancel, onChange, onClick, readOnly],
  );
  return l.jsxs(
    "div",
    r._(
      a._(
        {
          ref: setNodeRef,
          role: "button",
          tabIndex: disabled || readOnly ? -1 : 0,
          "aria-label":
            label ||
            u.Ay.t(
              "web_mainframe_canvas_reference_btn_tooltip",
              {},
              "上传参考",
            ),
          "aria-disabled": disabled || readOnly,
          "aria-busy": loading,
          onKeyDown: v.q,
        },
        A,
      ),
      {
        className: _c("reference-upload-Jp_yFQ", className, {
          "light-eWKixE": indexInGroup === 0,
          "mini-tyirw4": I,
          "disabled-LTCqMF": disabled,
          "active-PkHBP8": active || isDragAccepted,
        }),
        style: style_1,
        onClick: disabled ? undefined : Y,
        onDragEnter: handleDragEnter,
        onDragLeave: handleDragLeave,
        onDragOver: handleDragOver,
        onDrop: handleDrop,
        children: [
          H,
          label
            ? l.jsx("div", {
                className: "label-qT3wG6",
                children: label,
              })
            : null,
        ],
      },
    ),
  );
});
