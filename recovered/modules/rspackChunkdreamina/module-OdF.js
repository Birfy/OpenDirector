import t from "z8";
import "Vx";
import n from "Ix";
import i from "bT";
import r from "ED";
import _o from "xb";
import s from "Qey";
import d from "yw";
import c from "X0";
import m from "Pp";
import p from "Hvt";
import v from "ErZ";
import { $M, Au, rb } from "./module-bR6.js";
const className = "item-QYILJn";
const h = "item-visual-XB_35Q";
const E = {
  all: {
    get label() {
      return s.Ay.t("seedance_25_input_clear_all", {}, "清空全部");
    },
  },
  image: {
    get label() {
      return s.Ay.t("seedance_25_input_clear_all_pic", {}, "清除图片");
    },
  },
  video: {
    get label() {
      return s.Ay.t("seedance_25_input_clear_all_video", {}, "清除视频");
    },
  },
  audio: {
    get label() {
      return s.Ay.t("seedance_25_input_clear_all_audio", {}, "清除音频");
    },
  },
  document: {
    get label() {
      return s.Ay.t("seedance_25_input_clear_all_doc", {}, "清除文档");
    },
  },
};
var f = r.PA(function (e) {
  const {
    references,
    activeTab,
    size = "default",
    panelTabs,
    acceptedFileTypes,
    acceptedFileTypesByTab,
    uploadDisabled = false,
    canAddByTab,
    onActiveTabChange,
    onClearReferences,
    onCollapse,
    onMove,
    renderReference,
    renderUpload,
  } = e;
  const N = Au(references, activeTab, {
    acceptedFileTypes,
    acceptedFileTypesByTab,
    panelTabs,
    uploadDisabled,
    canAddByTab,
  });
  const T = rb(references, N.activeTab);
  const j = i.useMemo(
    () => ({
      all: s.Ay.t("seedance_25_input_all", {}, "全部"),
      image: s.Ay.t("seedance_25_input_pic", {}, "图片"),
      video: s.Ay.t("seedance_25_input_video", {}, "视频"),
      audio: s.Ay.t("seedance_25_input_audio", {}, "音频"),
      document: s.Ay.t("seedance_25_input_doc", {}, "文档"),
    }),
    [],
  );
  const w = N.tabs.map((e) => {
    var u;
    var a;
    return {
      value: e.value,
      label:
        ((u = j[e.value]),
        (a = e.count) > 0 ? "".concat(u, " (").concat(a, ")") : u),
    };
  });
  const referenceRenderProps = i.useMemo(
    () => ({
      axisAligned: true,
      groupCollapsed: false,
      indexInGroup: N.references.length,
      visualIndex: N.references.length,
    }),
    [N.references.length],
  );
  const $ = new Map(references.map((e, u) => [e.id, u]));
  const content = s.Ay.t(
    "seedance_25_input_collapse_panel",
    {},
    "收起素材面板",
  );
  const icon = i.useMemo(
    () =>
      t.jsx(d.tlL, {
        size: 16,
      }),
    [],
  );
  const N_uploadSlotVisible = N.uploadSlotVisible;
  const maxHeight = size === "small" ? 70 : N.maxHeight;
  const P = i.useMemo(
    () => ({
      acceptedFileTypes: N.acceptedFileTypes,
    }),
    [N.acceptedFileTypes],
  );
  const z = N_uploadSlotVisible
    ? renderUpload({
        acceptedFileTypes: N.uploadAcceptedFileTypes,
        dropAcceptedFileTypes: N.acceptedFileTypes,
        referenceRenderProps,
      })
    : null;
  const onClick = i.useCallback(() => {
    if (!T.disabled) {
      onClearReferences(T.referenceIds);
    }
  }, [T.disabled, T.referenceIds, onClearReferences]);
  const onMove_1 = i.useCallback(
    (e, a) => {
      var t = $M(references, N.activeTab, e, a);
      if (t) {
        onMove(t.fromIndex, t.toIndex);
      }
    },
    [onMove, references, N.activeTab],
  );
  return t.jsxs("div", {
    className: _o("panel-nO6xXf", {
      "small-XhJP1y": size === "small",
    }),
    children: [
      t.jsxs("div", {
        className: "header-mQc4i4",
        children: [
          t.jsx(c.Z, {
            className: "tabs-scroll-IaoX4y",
            contentClassName: "tabs-viewport-cwX1Wa",
            children: t.jsx("div", {
              className: "tabs-qdfOKn",
              role: "tablist",
              children: w.map((e) =>
                t.jsx(
                  m.b,
                  {
                    type: "secondary",
                    size: "default",
                    className: "tab-pVplPP",
                    role: "tab",
                    "aria-selected": e.value === N.activeTab,
                    onClick: () => onActiveTabChange(e.value),
                    children: e.label,
                  },
                  e.value,
                ),
              ),
            }),
          }),
          t.jsxs("div", {
            className: "header-actions-ORK2tm",
            children: [
              t.jsx(m.b, {
                type: "secondary",
                size: "default",
                className: "clear-button-Rz78x8",
                disabled: T.disabled,
                onClick,
                children: E[N.activeTab].label,
              }),
              t.jsx(n.A, {
                content,
                children: t.jsx(m.b, {
                  type: "secondary",
                  size: "default",
                  className: "collapse-button-mSTzCL",
                  icon,
                  "aria-label": content,
                  onClick: onCollapse,
                }),
              }),
            ],
          }),
        ],
      }),
      t.jsx(p.Q, {
        items: N.references,
        onMove: onMove_1,
        children: t.jsx(v.Q.Provider, {
          value: h,
          children: t.jsxs("div", {
            className: "list-XlpGyG",
            style: {
              maxHeight,
            },
            children: [
              N.empty
                ? null
                : N.references.map((e, u) => {
                    var a;
                    var n = (a = $.get(e.id)) != null ? a : u;
                    var i = renderReference(e, n, P);
                    if (i) {
                      return t.jsx(
                        "div",
                        {
                          className,
                          children: i,
                        },
                        e.id,
                      );
                    }
                    return null;
                  }),
              N_uploadSlotVisible && z
                ? t.jsx("div", {
                    className,
                    children: t.jsx("div", {
                      className: h,
                      children: z,
                    }),
                  })
                : null,
            ],
          }),
        }),
      }),
    ],
  });
});
export { f as c };
