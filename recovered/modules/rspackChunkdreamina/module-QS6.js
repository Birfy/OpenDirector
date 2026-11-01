import r from "oa";
import a from "bk";
import o from "Zr";
import i from "QmW";
import l from "lgn";
export function y(e) {
  const {
    char,
    component,
    allow,
    allowCompositionWhitespace = false,
    onQueryChange,
    allowedPrefixes = null,
    getRendererContainer,
  } = e;
  const pluginKey = new o.hs("suggestion-".concat(char));
  const p = l.GG(char);
  const g = char.replace(/[-\\\]^]/g, "\\$&");
  const b = RegExp("".concat(p, "[^\\s").concat(g, "]*"), "g");
  const f = RegExp("".concat(p, "[^").concat(g, "]*"), "g");
  const compositionState = {
    isComposing: false,
  };
  const render = ((e) => {
    let n;
    let t;
    const {
      component,
      pluginKey,
      onQueryChange,
      getRendererContainer,
      compositionState,
    } = e;
    let c = null;
    let u = null;
    let d = null;
    let m = false;
    function v(e, n) {
      if ((!m || (n == null ? undefined : n.force)) && t !== e) {
        t = e;
        if (onQueryChange != null) {
          onQueryChange(e);
        }
      }
    }
    const p = () => {
      m = true;
      compositionState.isComposing = true;
    };
    const g = () => {
      m = false;
      compositionState.isComposing = false;
      if (n !== undefined) {
        clearTimeout(n);
      }
      n = setTimeout(() => {
        n = undefined;
        var e;
        var t = u;
        if (t && !t.isDestroyed) {
          t.view.dispatch(t.state.tr);
          var r = pluginKey.getState(t.state);
          if (r == null ? undefined : r.active) {
            v((e = r.query) != null ? e : "", {
              force: true,
            });
          }
        }
      });
    };
    function b() {
      if (n !== undefined) {
        clearTimeout(n);
        n = undefined;
      }
      if (u) {
        u.off("destroy", b);
      }
      if (d) {
        d.removeEventListener("compositionstart", p);
        d.removeEventListener("compositionend", g);
      }
      if (c == null ? undefined : c.element.parentNode) {
        c.element.parentNode.removeChild(c.element);
      }
      if (c != null) {
        c.destroy();
      }
      c = null;
      u = null;
      d = null;
      m = false;
      compositionState.isComposing = false;
      t = undefined;
    }
    return () => ({
      onStart(e) {
        let n;
        const { editor } = e;
        u = editor;
        compositionState.isComposing = m = editor.view.composing;
        (d = editor.view.dom).addEventListener("compositionstart", p);
        d.addEventListener("compositionend", g);
        editor.on("destroy", b);
        c = new i.NV(component, {
          props: {
            pluginKey,
            suggestionProps: e,
          },
          editor,
        });
        ((n =
          getRendererContainer == null ? undefined : getRendererContainer()) !=
        null
          ? n
          : document.body
        ).appendChild(c.element);
        v(e.query);
      },
      onUpdate(e) {
        if (c != null) {
          c.updateProps({
            pluginKey,
            suggestionProps: e,
          });
        }
        v(e.query);
      },
      onKeyDown(e) {
        let n;
        let t;
        return (
          (n = c == null || (t = c.ref) == null ? undefined : t.onKeyDown(e)) !=
            null && n
        );
      },
      onExit() {
        v("", {
          force: true,
        });
        b();
      },
    });
  })({
    component,
    pluginKey,
    onQueryChange,
    getRendererContainer,
    compositionState,
  });
  return {
    char,
    allowSpaces: false,
    startOfLine: false,
    allowedPrefixes,
    pluginKey,
    allow: (e) => {
      var t;
      return (
        ((e) => {
          const { editor, state, range, char, isActive } = e;
          const { $from } = state.selection;
          return (
            !!(editor.isFocused || isActive) &&
            $from.node().type.name === "paragraph" &&
            $from.parent.type.name !== "codeBlock" &&
            (!!isActive || state.doc.textBetween(range.from, range.to) === char)
          );
        })(
          a._(r._({}, e), {
            char,
          }),
        ) &&
        ((t = allow == null ? undefined : allow(e)) == null || t)
      );
    },
    findSuggestionMatch: (e) => {
      var n;
      var { $position, char } = e;
      var a =
        ((n = $position.nodeBefore) == null ? undefined : n.isText) &&
        $position.nodeBefore.text;
      if (!a) {
        return null;
      }
      var o = $position.pos - a.length;
      var i =
        compositionState.isComposing && allowCompositionWhitespace ? f : b;
      var l = [...a.matchAll(i)].at(-1);
      if (!l) {
        return null;
      }
      var s = a.slice(Math.max(0, l.index - 1), l.index);
      if (allowedPrefixes !== null && s && !allowedPrefixes.includes(s)) {
        return null;
      }
      var from = o + l.index;
      var to = from + l[0].length;
      if (from >= $position.pos || to < $position.pos) {
        return null;
      }
      return {
        range: {
          from,
          to,
        },
        query: l[0].slice(char.length),
        text: l[0],
      };
    },
    render,
  };
}
