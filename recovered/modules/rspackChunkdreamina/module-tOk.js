import a from "oR";
import t from "Zr";
import i from "mV";
import o from "Qey";
import r from "f3";
import s from "lNt";
function c(e, tagName) {
  const n =
    !(arguments.length > 2) || arguments[2] === undefined || arguments[2];
  const e_firstChild = e.firstChild;
  const t = e_firstChild == null ? undefined : e_firstChild.firstChild;
  if (
    e.childCount === 1 &&
    (e_firstChild == null ? undefined : e_firstChild.type.name) ===
      "paragraph" &&
    e_firstChild.childCount === 1 &&
    (t == null ? undefined : t.type.name) === tagName &&
    typeof t.attrs.id === "string" &&
    t.attrs.id &&
    (!n ||
      (typeof t.attrs.displayName === "string" &&
        [r.fc.User, r.fc.Platform, r.fc.Market].includes(t.attrs.source)))
  ) {
    return {
      id: t.attrs.id,
      end: 1 + t.nodeSize,
    };
  }
}
export function w(e) {
  const l = o.Ay.t("web_skill_form_input_explain_usage_hint", {}, s.x8);
  const n = o.Ay.t("web_skill_form_input_explain_usage_tab", {}, "Tab");
  const r = (doc) => {
    if (e.isEnabled()) {
      var n = c(doc, e.tagName);
      if (n && e.isSkillAvailable(n.id)) {
        return n;
      }
      return undefined;
    }
  };
  return new t.k_({
    key: new t.hs("".concat(e.tagName, "-usage-guide")),
    props: {
      decorations: (a) => {
        if (!e.isEnabled()) {
          var o = c(a.doc, e.tagName, false);
          if (!o) {
            return null;
          }
          var s = e.getPlaceholder(o.id);
          if (s) {
            return i.zF.create(a.doc, [
              i.NZ.node(0, a.doc.firstChild.nodeSize, {
                "data-paragraph-placeholder": s,
              }),
            ]);
          }
          return null;
        }
        var d = r(a.doc);
        if (d) {
          return i.zF.create(a.doc, [
            i.NZ.widget(
              d.end,
              (e) => {
                var a = e.dom.ownerDocument.createElement("span");
                a.className = "hint-pdkyqr";
                a.contentEditable = "false";
                a.addEventListener("mousedown", (l) => {
                  if (
                    l.button === 0 &&
                    !l.shiftKey &&
                    !l.ctrlKey &&
                    !l.altKey &&
                    !l.metaKey &&
                    e.editable &&
                    !e.composing
                  ) {
                    var n = r(e.state.doc);
                    if (n) {
                      l.preventDefault();
                      e.dispatch(
                        e.state.tr.setSelection(
                          t.U3.create(e.state.doc, n.end),
                        ),
                      );
                      e.focus();
                    }
                  }
                });
                a.append(l);
                var i = e.dom.ownerDocument.createElement("kbd");
                i.textContent = n;
                a.append(i);
                return a;
              },
              {
                side: 1,
                key: "skill-usage-".concat(d.id),
                ignoreSelection: true,
              },
            ),
          ]);
        }
        return null;
      },
      handleKeyDown: (n, i) => {
        if (
          i.key !== "Tab" ||
          i.shiftKey ||
          i.ctrlKey ||
          i.altKey ||
          i.metaKey ||
          i.isComposing ||
          i.keyCode === 229 ||
          n.composing
        ) {
          return false;
        }
        var o;
        var s = r(n.state.doc);
        var { selection } = n.state;
        if (
          !s ||
          !(selection instanceof t.U3) ||
          !selection.empty ||
          selection.from !== s.end
        ) {
          return false;
        }
        var d = a.xq(n.state.tr).insertText(l, s.end);
        d.setSelection(t.U3.create(d.doc, s.end + l.length));
        n.dispatch(d.scrollIntoView());
        n.dispatch(a.xq(n.state.tr));
        if ((o = e.onUsagePromptInserted) != null) {
          o.call(e, s.id);
        }
        return true;
      },
    },
  });
}
