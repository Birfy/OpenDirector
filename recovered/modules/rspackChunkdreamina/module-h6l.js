import r from "oa";
import a from "bk";
import o from "qa";
import i from "z8";
import l from "bT";
import s from "B59";
import _c from "xb";
import d from "hUS";
import m from "Gvb";
import v from "rY";
import { K as K_1 } from "./module-Ri.js";
import * as g from "./module-nxQ.js";
import { A as A_1 } from "./module-Rm.js";
export var O = l.memo(function (e) {
  let n;
  const {
    referenceId,
    className,
    style,
    referenceRenderProps = {},
    onRemove,
    onMention,
    mentionLabel,
    removeButtonAttributes,
    children,
    active = false,
    loading,
    icon,
    label,
    overlayMasked = false,
    accept,
    onDropFromLocal,
  } = e;
  const E = o._(e, [
    "referenceId",
    "className",
    "style",
    "referenceRenderProps",
    "onRemove",
    "onMention",
    "mentionLabel",
    "removeButtonAttributes",
    "children",
    "active",
    "loading",
    "icon",
    "label",
    "overlayMasked",
    "accept",
    "onDropFromLocal",
  ]);
  const {
    visualIndex = 0,
    groupCollapsed,
    axisAligned = false,
  } = referenceRenderProps;
  const { active: active_1 } = s.fF();
  const A = !!(
    (active_1 == null || (n = active_1.data.current) == null
      ? undefined
      : n.scene) &&
    active_1.data.current.scene !== "ai-generated-record-list" &&
    active_1.data.current.scene !== "infinite-canvas-agent"
  );
  const onChange = l.useCallback(
    (e) => {
      if (e[0]) {
        if (onDropFromLocal != null) {
          onDropFromLocal(e[0], referenceId);
        }
      }
    },
    [onDropFromLocal, referenceId],
  );
  const droppableData = l.useMemo(
    () => ({
      visualIndex,
    }),
    [visualIndex],
  );
  const {
    setNodeRef,
    isDragAccepted,
    handleDragEnter,
    handleDragLeave,
    handleDragOver,
    handleDrop,
  } = m.t({
    droppableId: "reference-".concat(referenceId),
    accept,
    droppableData,
    droppable: !A,
    onChange,
  });
  const X = l.useMemo(
    () => v.tH(visualIndex, groupCollapsed, axisAligned),
    [groupCollapsed, visualIndex, axisAligned],
  );
  const style_1 = l.useMemo(
    () =>
      a._(r._({}, style), {
        "--rotate": "".concat(X, "deg"),
      }),
    [style, X],
  );
  const K = !!(children || overlayMasked);
  const onClick = l.useCallback(
    (e) => {
      if (referenceId) {
        e.stopPropagation();
        if (onRemove != null) {
          onRemove(referenceId);
        }
      }
    },
    [referenceId, onRemove],
  );
  return i.jsx(
    K_1,
    a._(r._({}, E), {
      active: active || isDragAccepted,
      className,
      content: children,
      style: style_1,
      onDragEnter: handleDragEnter,
      onDragLeave: handleDragLeave,
      onDragOver: handleDragOver,
      onDrop: handleDrop,
      rootRef: setNodeRef,
      adornments: i.jsxs(i.Fragment, {
        children: [
          loading || icon || label
            ? i.jsxs("div", {
                className: _c(A_1.overlayContainer, {
                  [A_1.mask]: K,
                }),
                children: [
                  i.jsx("div", {
                    className: A_1.overlayIcon,
                    children: loading ? i.jsx(d.w, {}) : icon,
                  }),
                  typeof label === "string" &&
                    i.jsx("div", {
                      className: A_1.overlayLabel,
                      children: label,
                    }),
                ],
              })
            : null,
          onRemove
            ? i.jsx(
                g.m,
                a._(r._({}, removeButtonAttributes), {
                  onClick,
                }),
              )
            : null,
          onMention
            ? i.jsx(g.m, {
                action: "mention",
                "aria-label": mentionLabel,
                onClick: (e) => {
                  e.stopPropagation();
                  onMention();
                },
              })
            : null,
        ],
      }),
    }),
  );
});
