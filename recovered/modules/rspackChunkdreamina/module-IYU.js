import a from "oa";
import n from "bk";
import o from "qa";
import l from "z8";
import i from "bT";
import _s from "xb";
import d from "QmW";
import u from "Qey";
import v from "yw";
import { A$, FX, Jz } from "./module-U0_2.js";
import { P as P_1 } from "./module-Qp_3.js";
import { U } from "./module-zQo.js";
import { O } from "./module-TWp.js";
import * as C from "./module-z7v_2.js";
import { X } from "./module-Fkh.js";
import { O as O_1 } from "./module-Vf_2.js";
import * as N from "./module-Dmc.js";
import { r as r_1 } from "./module-qNY.js";
import * as W from "./module-OK4.js";
import * as F from "./module-XQ_3.js";
import { V } from "./module-RY_3.js";
import * as H from "./module-EGk.js";
import * as I from "./module-oxX.js";
import { A as A_1 } from "./module-s7m.js";
const f = [-4, 8];
const g = i.memo(function (e) {
  let t;
  const { options, value, onChange, className } = e;
  const g = o._(e, ["options", "value", "onChange", "className"]);
  const bRef = i.useRef(null);
  P_1(
    bRef,
    (t = g["aria-label"]) != null ? t : u.Ay.t("web_doc_text", {}, "正文"),
    g["aria-labelledby"],
  );
  const w = i.useMemo(
    () => options.find((e) => e.value === value),
    [options, value],
  );
  const arrowIcon = i.useMemo(() => l.jsx(v.rIS, {}), []);
  const triggerProps = i.useMemo(
    () => ({
      autoAlignPopupWidth: false,
      position: "bl",
      className: "popup-G5H_E0",
      popupAlign: {
        top: f,
        bottom: f,
      },
    }),
    [],
  );
  const renderFormat = i.useCallback(
    () =>
      l.jsx(l.Fragment, {
        children: w == null ? undefined : w.icon,
      }),
    [w == null ? undefined : w.icon],
  );
  return l.jsx(
    U,
    n._(
      a._(
        {
          ref: bRef,
        },
        g,
      ),
      {
        options,
        value,
        onChange,
        renderFormat,
        arrowIcon,
        triggerProps,
        className: _s("select-BmNLU0", className),
      },
    ),
  );
});
const w = ["left", "center", "right"];
const x = [
  {
    value: "left",
    get label() {
      return u.Ay.t("web_doc_left_align", {}, "左对齐");
    },
    shortcut: "".concat(Jz, " + ").concat(FX, " + L"),
  },
  {
    value: "center",
    get label() {
      return u.Ay.t("web_doc_centre_align", {}, "居中对齐");
    },
    shortcut: "".concat(Jz, " + ").concat(FX, " + E"),
  },
  {
    value: "right",
    get label() {
      return u.Ay.t("web_doc_right_align", {}, "右对齐");
    },
    shortcut: "".concat(Jz, " + ").concat(FX, " + R"),
  },
];
const y = {
  left: v.UFF,
  center: v.uG2,
  right: v.H5E,
};
const k = new Set(["bulletList", "orderedList"]);
function _(e) {
  let t;
  const { editor } = e;
  const { from, to } = editor.state.selection;
  let alignmentDisabled = false;
  editor.state.doc.nodesBetween(from, to, (e) => {
    if (k.has(e.type.name)) {
      alignmentDisabled = true;
    }
    return !alignmentDisabled;
  });
  return {
    textAlign:
      (t = w.find((textAlign) =>
        editor.isActive({
          textAlign,
        }),
      )) != null
        ? t
        : "left",
    alignmentDisabled,
  };
}
const A = i.memo(function (e) {
  const { editor, disabled = false } = e;
  const { textAlign, alignmentDisabled } = d.er({
    editor,
    selector: _,
  });
  const options = i.useMemo(
    () =>
      x.map((e) => {
        var { value, label, shortcut } = e;
        var n = y[value];
        return {
          value,
          icon: l.jsx(n, {}),
          label,
          extra: {
            tooltipProps: {
              position: "right",
              content: l.jsx(O, {
                label: shortcut,
              }),
            },
          },
        };
      }),
    [],
  );
  const s = i.useCallback(
    (e) => {
      editor.chain().focus().setTextAlign(e).run();
    },
    [editor],
  );
  return l.jsx(g, {
    disabled: disabled || alignmentDisabled,
    options,
    value: textAlign,
    onChange: s,
  });
});
const L = [1, 2, 3, 4, 5, 6];
const E = [
  {
    value: "0",
    get label() {
      return u.Ay.t("web_doc_text", {}, "正文");
    },
    shortcut: "".concat(Jz, " + ").concat(A$, " + 0"),
  },
  {
    value: "1",
    get label() {
      return u.Ay.t("web_doc_headline_one", {}, "一级标题");
    },
    shortcut: "".concat(Jz, " + ").concat(A$, " + 1"),
    markdownSyntax: "#",
  },
  {
    value: "2",
    get label() {
      return u.Ay.t("web_doc_headline_two", {}, "二级标题");
    },
    shortcut: "".concat(Jz, " + ").concat(A$, " + 2"),
    markdownSyntax: "##",
  },
  {
    value: "3",
    get label() {
      return u.Ay.t("web_doc_headline_three", {}, "三级标题");
    },
    shortcut: "".concat(Jz, " + ").concat(A$, " + 3"),
    markdownSyntax: "###",
  },
  {
    value: "4",
    get label() {
      return u.Ay.t("web_doc_headline_four", {}, "四级标题");
    },
    shortcut: "".concat(Jz, " + ").concat(A$, " + 4"),
    markdownSyntax: "####",
  },
  {
    value: "5",
    get label() {
      return u.Ay.t("web_doc_headline_five", {}, "五级标题");
    },
    shortcut: "".concat(Jz, " + ").concat(A$, " + 5"),
    markdownSyntax: "#####",
  },
  {
    value: "6",
    get label() {
      return u.Ay.t("web_doc_headline_six", {}, "六级标题");
    },
    shortcut: "".concat(Jz, " + ").concat(A$, " + 6"),
    markdownSyntax: "######",
  },
];
const T = {
  0: v.UVZ,
  1: v.J1S,
  2: v.QiU,
  3: v.Xlm,
  4: v.QJ_,
  5: v.X2$,
  6: v.QoY,
};
function z(e) {
  const { editor } = e;
  for (const r of L) {
    if (
      editor.isActive("heading", {
        level: r,
      })
    ) {
      return r;
    }
  }
  return 0;
}
const P = i.memo(function (e) {
  const { editor, disabled = false } = e;
  const a = d.er({
    editor,
    selector: z,
  });
  const n = d.er({
    editor,
    selector: r_1,
  });
  const o = u.Ay.t("web_doc_shortkey_space", {}, "空格");
  const s = i.useMemo(
    () =>
      E.map((e) => {
        var { value, label, shortcut, markdownSyntax } = e;
        var i = T[value];
        return {
          value,
          icon: l.jsx(i, {}),
          label,
          extra: {
            tooltipProps: {
              position: "right",
              content: l.jsx(O, {
                label: shortcut,
                markdownSyntax:
                  markdownSyntax !== undefined
                    ? "".concat(markdownSyntax, " ").concat(o)
                    : undefined,
              }),
            },
          },
        };
      }),
    [o],
  );
  const c = i.useCallback(
    (e) => {
      var r = parseInt(e, 10);
      if (r > 0) {
        editor
          .chain()
          .focus()
          .toggleHeading({
            level: r,
          })
          .run();
      } else {
        editor.chain().focus().setParagraph().run();
      }
    },
    [editor],
  );
  return l.jsx(g, {
    disabled: disabled || n,
    options: s,
    value: s[a].value,
    onChange: c,
  });
});
export var M = i.memo(function (e) {
  const { editor, isSourceMode = false, onToggleSourceMode, className } = e;
  const d = o._(e, [
    "editor",
    "isSourceMode",
    "onToggleSourceMode",
    "className",
  ]);
  return l.jsxs(
    "div",
    n._(a._({}, d), {
      className: _s(A_1.toolbar, className),
      children: [
        l.jsx(P, {
          editor,
          disabled: isSourceMode,
        }),
        l.jsx(F.b, {
          editor,
          disabled: isSourceMode,
        }),
        l.jsx(O_1, {
          editor,
          disabled: isSourceMode,
        }),
        l.jsx(C.b, {
          editor,
          disabled: isSourceMode,
        }),
        l.jsx(N.b, {
          editor,
          disabled: isSourceMode,
        }),
        l.jsx("span", {
          className: A_1.divider,
        }),
        l.jsx(A, {
          editor,
          disabled: isSourceMode,
        }),
        l.jsx("span", {
          className: A_1.divider,
        }),
        l.jsx(X, {
          editor,
          disabled: isSourceMode,
        }),
        l.jsx(H.r, {
          editor,
          disabled: isSourceMode,
        }),
        l.jsx(W.c, {
          editor,
          disabled: isSourceMode,
        }),
        l.jsx(I.s, {
          editor,
          disabled: isSourceMode,
        }),
        onToggleSourceMode !== undefined
          ? l.jsxs(l.Fragment, {
              children: [
                l.jsx("span", {
                  className: A_1.divider,
                }),
                l.jsx(V, {
                  isSourceMode,
                  onToggle: onToggleSourceMode,
                }),
              ],
            })
          : null,
      ],
    }),
  );
});
