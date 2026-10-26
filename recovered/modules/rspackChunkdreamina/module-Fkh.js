import a from "z8";
import "Vx";
import n from "Ix";
import o from "bT";
import l from "QmW";
import i from "Qey";
import s from "yw";
import { K } from "./module-xz3.js";
import { Jz } from "./module-U0_2.js";
import { O } from "./module-TWp.js";
function selector(e) {
  return e.editor.isActive("bold");
}
export var X = o.memo(function (e) {
  const { editor, disabled = false } = e;
  const active = l.er({
    editor,
    selector,
  });
  const icon = o.useMemo(() => a.jsx(s.QyI, {}), []);
  const p = i.Ay.t("web_doc_shortkey_space", {}, "空格");
  const f = i.Ay.t("web_doc_shortkey_text", {}, "文本");
  const content = o.useMemo(
    () =>
      a.jsx(O, {
        label: ""
          .concat(i.Ay.t("web_doc_bold", {}, "粗体"), " (")
          .concat(Jz, " + B)"),
        markdownSyntax: "**".concat(f, "** ").concat(p),
      }),
    [f, p],
  );
  const onClick = o.useCallback(() => {
    editor.chain().focus().toggleBold().run();
  }, [editor]);
  return a.jsx(n.A, {
    content,
    children: a.jsx(K, {
      "aria-label": i.Ay.t("web_doc_bold", {}, "粗体"),
      active,
      disabled,
      icon,
      onClick,
    }),
  });
});
