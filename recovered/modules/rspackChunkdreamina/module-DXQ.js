import a from "z8";
import n from "Qey";
import o from "bT";
import _l from "xb";
import { A } from "./module-t4.js";
export function v(e) {
  const { getMarkdown, applyMarkdown, onChange } = e;
  const [n, setN] = o.useState(false);
  const [i, setI] = o.useState("");
  const handleToggleSourceMode = o.useCallback(() => {
    if (n) {
      applyMarkdown(i);
    } else {
      setI(getMarkdown());
    }
    setN((e) => !e);
  }, [applyMarkdown, getMarkdown, n, i]);
  return {
    isSourceMode: n,
    sourceValue: i,
    handleToggleSourceMode,
    handleSourceChange: o.useCallback(
      (e) => {
        setI(e);
        if (onChange != null) {
          onChange(e);
        }
      },
      [onChange],
    ),
  };
}
export var P = o.memo(function (e) {
  const {
    value,
    className,
    readOnly = false,
    showLineNumbers = true,
    onChange,
  } = e;
  const uRef = o.useRef(null);
  const [v, setV] = o.useState(0);
  const h = o.useMemo(() => value.split("\n"), [value]);
  const p = o.useCallback((e) => {
    var uRef_current = uRef.current;
    if (uRef_current) {
      uRef_current.style.transform = "translateY(-".concat(e, "px)");
    }
  }, []);
  const f = o.useCallback((e) => {
    setV(e.value.slice(0, e.selectionStart).split("\n").length - 1);
  }, []);
  const g = o.useCallback(
    (e) => {
      var e_currentTarget = e.currentTarget;
      p(e_currentTarget.scrollTop);
      if (typeof requestAnimationFrame === "function") {
        requestAnimationFrame(() => f(e_currentTarget));
      } else {
        f(e_currentTarget);
      }
    },
    [p, f],
  );
  const onScroll = o.useCallback(
    (e) => {
      p(e.currentTarget.scrollTop);
    },
    [p],
  );
  const onChange_1 = o.useCallback(
    (e) => {
      onChange(e.target.value);
    },
    [onChange],
  );
  return a.jsx("div", {
    className: _l(
      A.sourceMode,
      !showLineNumbers && A.sourceModeFlush,
      className,
    ),
    children: a.jsxs("div", {
      className: A.sourceContent,
      children: [
        a.jsx("div", {
          ref: uRef,
          className: A.sourceBackdrop,
          "aria-hidden": "true",
          children: h.map((e, t) =>
            a.jsxs(
              "div",
              {
                className: _l(A.sourceLine, t === v && A.sourceLineActive),
                children: [
                  showLineNumbers
                    ? a.jsx("span", {
                        className: A.lineNumber,
                        children: t + 1,
                      })
                    : null,
                  a.jsx("span", {
                    className: A.lineText,
                    children: e || "\u200B",
                  }),
                ],
              },
              t,
            ),
          ),
        }),
        a.jsx("textarea", {
          "aria-label": [
            "Markdown",
            n.Ay.t("octo_canvas_agent_node_type_text_label", {}, "文本"),
          ].join(" · "),
          className: A.sourceTextarea,
          value,
          readOnly,
          onChange: onChange_1,
          onClick: g,
          onFocus: g,
          onInput: g,
          onKeyUp: g,
          onMouseUp: g,
          onSelect: g,
          onScroll,
          spellCheck: false,
          autoCapitalize: "off",
          autoCorrect: "off",
        }),
      ],
    }),
  });
});
