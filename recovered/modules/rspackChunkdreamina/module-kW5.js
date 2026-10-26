import a from "qa";
import n from "z8";
import o from "bT";
import l from "QmW";
import _i from "xb";
import { k as k_1 } from "./module-qsz.js";
import { I as I_1 } from "./module-Dl_2.js";
import * as u from "./module-DXQ.js";
import { V } from "./module-RY_3.js";
import { M as M_1 } from "./module-IYU.js";
import { A as A_1 } from "./module-s7m.js";
import { A as A_2 } from "./module-t4.js";
function useF(e) {
  const tRef = o.useRef(e);
  tRef.current = e;
  return tRef;
}
var g = o.memo(function (e) {
  const {
    className,
    editorContentClassName,
    style,
    editable = false,
    value,
    defaultValue,
    toolbar,
    onChange,
    onWordCountChange,
    showSourceToggle = false,
  } = e;
  const A = a._(e, [
    "className",
    "editorContentClassName",
    "style",
    "editable",
    "value",
    "defaultValue",
    "toolbar",
    "onChange",
    "onWordCountChange",
    "showSourceToggle",
  ]);
  const C = useF(onChange);
  const j = useF(onWordCountChange);
  const M = useF(A);
  const N = o.useCallback(
    (e) => {
      var t;
      var r;
      var a;
      if ((t = j.current) != null) {
        t.call(
          j,
          ((r = e.state.doc.textBetween(0, e.state.doc.content.size, "", "")),
          ((a = typeof Intl === "undefined" ? undefined : Intl.Segmenter)
            ? Array.from(
                new a(undefined, {
                  granularity: "grapheme",
                }).segment(r),
                (e) => e.segment,
              )
            : Array.from(r)
          ).filter((e) => !RegExp("\\s", "u").test(e)).length),
        );
      }
    },
    [j],
  );
  const onUpdate = o.useCallback(
    (e) => {
      var t;
      var { editor } = e;
      if ((t = C.current) != null) {
        t.call(C, editor.storage.markdown.getMarkdown());
      }
      N(editor);
    },
    [C, N],
  );
  const extensions = o.useMemo(() => k_1(editable, M), [editable, M]);
  const E = l.hG(
    {
      extensions,
      editable,
      content: value != null ? value : defaultValue,
      onUpdate,
    },
    [extensions, editable],
  );
  o.useEffect(() => {
    var e = () => {
      N(E);
    };
    if (typeof requestAnimationFrame === "function") {
      var t = requestAnimationFrame(e);
      return () => cancelAnimationFrame(t);
    }
    var r = setTimeout(e, 0);
    return () => clearTimeout(r);
  }, [E, N]);
  const getMarkdown = o.useCallback(
    () => E.storage.markdown.getMarkdown(),
    [E],
  );
  const applyMarkdown = o.useCallback(
    (e) => {
      var t;
      E.commands.setContent(e, {
        emitUpdate: false,
      });
      if ((t = C.current) != null) {
        t.call(C, e);
      }
      N(E);
    },
    [E, C, N],
  );
  const onChange_1 = o.useCallback(
    (e) => {
      var t;
      if ((t = C.current) != null) {
        t.call(C, e);
      }
    },
    [C],
  );
  const {
    isSourceMode,
    sourceValue,
    handleToggleSourceMode,
    handleSourceChange,
  } = u.v({
    getMarkdown,
    applyMarkdown,
    onChange: onChange_1,
  });
  o.useEffect(() => {
    if (
      value !== undefined &&
      !isSourceMode &&
      E.storage.markdown.getMarkdown() !== value
    ) {
      var { from, to } = E.state.selection;
      E.commands.setContent(value, {
        emitUpdate: false,
      });
      E.commands.setTextSelection({
        from,
        to,
      });
      N(E);
    }
  }, [E, isSourceMode, N, value]);
  const I = o.useMemo(() => {
    if (editable || showSourceToggle) {
      if (toolbar) {
        return toolbar(E);
      }
      if (!editable && showSourceToggle) {
        return n.jsx("div", {
          className: A_1.toolbar,
          children: n.jsx(V, {
            isSourceMode,
            onToggle: handleToggleSourceMode,
          }),
        });
      }
      return n.jsx(M_1, {
        editor: E,
        isSourceMode,
        onToggleSourceMode: showSourceToggle
          ? handleToggleSourceMode
          : undefined,
      });
    }
    return null;
  }, [
    editable,
    E,
    handleToggleSourceMode,
    isSourceMode,
    showSourceToggle,
    toolbar,
  ]);
  return n.jsx(I_1, {
    value: E,
    children: n.jsxs("div", {
      className: _i(A_2.markdownEditor, className),
      style,
      children: [
        I,
        isSourceMode
          ? n.jsx(u.P, {
              className: editorContentClassName,
              value: sourceValue,
              readOnly: !editable,
              onChange: handleSourceChange,
            })
          : n.jsx(l.$Z, {
              className: _i(A_2.editorContent, editorContentClassName),
              editor: E,
            }),
      ],
    }),
  });
});
export { g as n };
