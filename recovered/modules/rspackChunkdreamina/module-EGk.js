import a from "z8";
import "Vx";
import n from "Ix";
import o from "bT";
import l from "QmW";
import i from "Qey";
import s from "yw";
import { FX, Jz } from "./module-U0_2.js";
import { K } from "./module-xz3.js";
import { O } from "./module-TWp.js";
function selector(e) {
  return e.editor.isActive("strike");
}
export var r = o.memo(function (e) {
  const { editor, disabled = false } = e;
  const active = l.er({
    editor,
    selector,
  });
  const icon = o.useMemo(() => a.jsx(s.TNc, {}), []);
  const p = i.Ay.t("web_doc_shortkey_space", {}, "空格");
  const f = i.Ay.t("web_doc_shortkey_text", {}, "文本");
  const content = o.useMemo(
    () =>
      a.jsx(O, {
        label: ""
          .concat(i.Ay.t("web_doc_delete_line", {}, "删除线"), " (")
          .concat(Jz, " + ")
          .concat(FX, " + X)"),
        markdownSyntax: "~~".concat(f, "~~ ").concat(p),
      }),
    [f, p],
  );
  const onClick = o.useCallback(() => {
    editor.chain().focus().toggleStrike().run();
  }, [editor]);
  return a.jsx(n.A, {
    content,
    children: a.jsx(K, {
      active,
      disabled,
      icon,
      onClick,
    }),
  });
});
