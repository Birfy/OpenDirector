import a from "z8";
import "Vx";
import n from "Ix";
import o from "bT";
import l from "QmW";
import i from "Qey";
import s from "yw";
import { K } from "./module-xz3.js";
import { FX, Jz } from "./module-U0_2.js";
import { O } from "./module-TWp.js";
import { r as r_1 } from "./module-qNY.js";
function selector(e) {
  return e.editor.isActive("bulletList");
}
var h = o.memo(function (e) {
  const { editor, disabled = false } = e;
  const active = l.er({
    editor,
    selector,
  });
  const p = l.er({
    editor,
    selector: r_1,
  });
  const icon = o.useMemo(() => a.jsx(s.y_z, {}), []);
  const g = i.Ay.t("web_doc_shortkey_space", {}, "空格");
  const content = o.useMemo(
    () =>
      a.jsx(O, {
        label: ""
          .concat(i.Ay.t("web_doc_bulletpoint", {}, "无序列表"), " (")
          .concat(Jz, " + ")
          .concat(FX, " + 8)"),
        markdownSyntax: "- ".concat(g),
      }),
    [g],
  );
  const onClick = o.useCallback(() => {
    editor.chain().focus().toggleBulletList().run();
  }, [editor]);
  return a.jsx(n.A, {
    content,
    children: a.jsx(K, {
      "aria-label": i.Ay.t("web_doc_bulletpoint", {}, "无序列表"),
      active,
      disabled: disabled || p,
      icon,
      onClick,
    }),
  });
});
export { h as O };
