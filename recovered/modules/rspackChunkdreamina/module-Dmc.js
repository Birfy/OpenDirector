import a from "rp";
import n from "z8";
import "Vx";
import o from "Ix";
import l from "bT";
import i from "QmW";
import s from "Qey";
import { K } from "./module-xz3.js";
import { O } from "./module-TWp.js";
import { r as r_1 } from "./module-qNY.js";
function v(e, t) {
  const r = s.Ay.t(e, {}, t);
  if (r === e) {
    return t;
  }
  return r;
}
function selector(e) {
  const { $from } = e.editor.state.selection;
  for (let r = $from.depth; r > 0; r -= 1) {
    const n = ((e) => {
      const r = $from.node(e);
      if (r.type.name !== "table") {
        return "continue";
      }
      const r_firstChild = r.firstChild;
      if (!r_firstChild || r_firstChild.childCount === 0) {
        return {
          v: false,
        };
      }
      let v_1 = true;
      r_firstChild.forEach((e) => {
        if (e.type.name !== "tableHeader") {
          v_1 = false;
        }
      });
      return {
        v: v_1,
      };
    })(r);
    if (a._(n) === "object") {
      return n.v;
    }
  }
  return false;
}
function h() {
  return n.jsxs("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      n.jsx("rect", {
        x: "9",
        y: "10",
        width: "1",
        height: "9",
        fill: "currentColor",
      }),
      n.jsx("rect", {
        x: "14",
        y: "10",
        width: "1",
        height: "9",
        fill: "currentColor",
      }),
      n.jsx("rect", {
        x: "20",
        y: "14",
        width: "1",
        height: "16",
        transform: "rotate(90 20 14)",
        fill: "currentColor",
      }),
      n.jsx("rect", {
        x: "20",
        y: "9",
        width: "1",
        height: "16",
        transform: "rotate(90 20 9)",
        fill: "currentColor",
      }),
      n.jsx("rect", {
        opacity: "0.6",
        x: "5",
        y: "5",
        width: "14",
        height: "4",
        fill: "currentColor",
      }),
      n.jsx("path", {
        d: "M5.5 4H18.5C19.3284 4 20 4.67157 20 5.5V18.5C20 19.3284 19.3284 20 18.5 20H5.5C4.67157 20 4 19.3284 4 18.5V5.5C4 4.67157 4.67157 4 5.5 4Z",
        stroke: "currentColor",
        strokeWidth: "2",
      }),
    ],
  });
}
export var b = l.memo(function (e) {
  const { editor, disabled = false } = e;
  const a = i.er({
    editor,
    selector: r_1,
  });
  const active = i.er({
    editor,
    selector,
  });
  const icon = l.useMemo(() => n.jsx(h, {}), []);
  const content = l.useMemo(
    () =>
      n.jsx(O, {
        label: active
          ? v("web_doc_table_header_row_cancel", "取消标题行")
          : v("web_doc_table_header_row_set", "设置标题行"),
      }),
    [active],
  );
  const onClick = l.useCallback(() => {
    editor.chain().focus().toggleHeaderRow().run();
  }, [editor]);
  return n.jsx(o.A, {
    content,
    children: n.jsx(K, {
      "aria-label": s.Ay.t("web_doc_table_header_row_set", {}, "设置标题行"),
      active,
      disabled: disabled || !a,
      icon,
      onClick,
    }),
  });
});
