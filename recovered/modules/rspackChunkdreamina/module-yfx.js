import a from "oa";
import r from "bk";
import o from "qa";
import l from "z8";
import i from "Qey";
import c from "bT";
import _s from "xb";
import { R as R_1 } from "./module-Du8.js";
import { G as G_1 } from "./module-uz.js";
import { N as N_1 } from "./module-Bxb.js";
import { C as C_1 } from "./module-cI.js";
import { X as X_1 } from "./module-O6V.js";
import { X as X_2 } from "./module-dC.js";
import { b as b_1 } from "./module-qO.js";
import { E as E_1 } from "./module-G4.js";
import x from "NY";
import y from "dm";
import k from "./module-Ps.js";
import C from "A3";
import w from "./module-ZYW.js";
import N from "xi";
import _ from "Ev";
const j = "collapsed-Ph9c4d";
const T = "collapse-transition-start-Pu2Rwm";
const A = "prefix-placeholder-active-YZcQvx";
export var f = c.memo(function (e) {
  let t;
  const {
    autoSize,
    className,
    onKeyDown,
    onScroll,
    onSubmit,
    onBlur,
    prefixPlaceholder,
  } = e;
  const L = o._(e, [
    "autoSize",
    "className",
    "onKeyDown",
    "onScroll",
    "onSubmit",
    "onBlur",
    "prefixPlaceholder",
  ]);
  const { value, placeholder, disabled, readOnly } = L;
  const { dismissHint } = c.useContext(G_1);
  const G = !!prefixPlaceholder;
  const I = !String(value != null ? value : "").length;
  const KRef = c.useRef(null);
  const qRef = c.useRef(null);
  const [Q, setQ] = c.useState(0);
  const { collapsed, collapseTransitionStart } = N_1();
  const { promptShrunk } = c.useContext(R_1);
  const { textAreaRef, inputRef } = (() => {
    var { promptInputRef } = c.useContext(b_1);
    var tRef = c.useRef(null);
    var nRef = c.useRef(null);
    E_1(() => {
      if (promptInputRef) {
        promptInputRef.current = tRef.current;
      }
    }, [promptInputRef]);
    return {
      textAreaRef: tRef,
      inputRef: nRef,
    };
  })();
  ((e) => {
    var { textAreaRef, inputRef } = e;
    var { collapsed, promptShrunk } = c.useContext(R_1);
    var o = c.useCallback(
      (e, t) =>
        x._(function* () {
          if (e && t && e === document.activeElement) {
            const { selectionStart, selectionEnd } = e;
            yield y.y(k.Pb);
            t.focus();
            t.setSelectionRange(selectionStart, selectionEnd);
            t.scrollTop = 0;
          }
        })(),
      [],
    );
    c.useEffect(() => {
      if (collapsed || promptShrunk) {
        var e = textAreaRef.current;
        if (e && promptShrunk) {
          e.scrollTop = 0;
        }
        if (e != null) {
          e.blur();
        }
        return;
      }
      o(inputRef.current, textAreaRef.current);
    }, [collapsed, promptShrunk, o, textAreaRef, inputRef]);
  })({
    textAreaRef,
    inputRef,
  });
  const [ref, X] = C_1(e);
  const { handlePromptInputKeyDown } = ((e, t) => {
    var justComposed_1;
    var a;
    var r;
    var {
      onKeyDown,
      onPrefixPlaceholderDelete,
      onSubmit,
      prefixPlaceholder,
      value,
    } = e;
    var { submitOnModEnter, onPlainEnter, dismissHint } = c.useContext(G_1);
    var { collapsed, promptShrunk, onCollapsedChange } = c.useContext(R_1);
    var { submitButtonRef } = c.useContext(b_1);
    justComposed_1 = c.useRef(false);
    a = c.useCallback(() => {
      justComposed_1.current = false;
    }, []);
    r = c.useCallback(() => {
      justComposed_1.current = true;
      requestAnimationFrame(() => {
        justComposed_1.current = false;
      });
    }, []);
    c.useEffect(() => {
      var t_current = t.current;
      if (t_current) {
        t_current.addEventListener("compositionstart", a);
        t_current.addEventListener("compositionend", r);
        return () => {
          t_current.removeEventListener("compositionstart", a);
          t_current.removeEventListener("compositionend", r);
        };
      }
    }, [a, r]);
    var { justComposed } = {
      justComposed: justComposed_1,
    };
    var { run } = C.default(
      (e) => {
        var t = submitButtonRef == null ? undefined : submitButtonRef.current;
        N.V.warn(
          "[ContentGeneratorPromptInput] submit by enter ".concat(
            JSON.stringify({
              submit_trigger: "prompt_enter",
            }),
          ),
        );
        if (t) {
          if (!t.disabled) {
            t.click();
          }
          return;
        }
        if (onSubmit != null) {
          onSubmit(e);
        }
      },
      w.$,
      [],
      {
        leading: true,
        trailing: false,
      },
    );
    return {
      handlePromptInputKeyDown: c.useCallback(
        (e) => {
          e.stopPropagation();
          if (onKeyDown != null) {
            onKeyDown(e);
          }
          if (!e.defaultPrevented) {
            var n;
            var a;
            var r;
            var i;
            var c;
            var d =
              e.nativeEvent.isComposing ||
              e.nativeEvent.keyCode === 229 ||
              (_.nr && justComposed.current);
            if (
              !d &&
              prefixPlaceholder &&
              !String(value != null ? value : "").trim() &&
              (e.key === "Backspace" || e.key === "Delete")
            ) {
              e.preventDefault();
              if (onPrefixPlaceholderDelete != null) {
                onPrefixPlaceholderDelete();
              }
              return;
            }
            switch (e.key) {
              case "Escape":
                if (
                  !(d || collapsed || promptShrunk || onCollapsedChange == null)
                ) {
                  onCollapsedChange(true);
                }
                break;
              case "Enter":
                if (!e.shiftKey && !d) {
                  if (submitOnModEnter && !e.ctrlKey && !e.metaKey) {
                    if (e.currentTarget instanceof HTMLInputElement) {
                      e.preventDefault();
                      if (onCollapsedChange != null) {
                        onCollapsedChange(false);
                      }
                      if ((r = t.current) != null) {
                        r.focus();
                      }
                      if ((i = t.current) != null) {
                        i.setRangeText(
                          "\n",
                          (n = e.currentTarget.selectionStart) != null
                            ? n
                            : t.current.value.length,
                          (a = e.currentTarget.selectionEnd) != null
                            ? a
                            : t.current.value.length,
                          "end",
                        );
                      }
                      if ((c = t.current) != null) {
                        c.dispatchEvent(
                          new Event("input", {
                            bubbles: true,
                          }),
                        );
                      }
                    }
                    if (!(e.altKey || e.repeat)) {
                      onPlainEnter(!!String(value != null ? value : "").trim());
                    }
                    break;
                  }
                  if (submitOnModEnter && e.altKey) {
                    break;
                  }
                  e.preventDefault();
                  if (!e.repeat) {
                    dismissHint();
                    run(e);
                  }
                }
                break;
              case "PageUp":
              case "PageDown":
                e.preventDefault();
            }
          }
        },
        [
          collapsed,
          promptShrunk,
          onCollapsedChange,
          onKeyDown,
          submitOnModEnter,
          onPlainEnter,
          dismissHint,
          t,
          onPrefixPlaceholderDelete,
          prefixPlaceholder,
          value,
          justComposed,
          run,
        ],
      ),
    };
  })(e, textAreaRef);
  const ee = c.useCallback((e) => {
    var t;
    if ((t = KRef.current) != null) {
      t.style.setProperty(
        "--content-generator-prompt-prefix-placeholder-scroll-top",
        "".concat(e, "px"),
      );
    }
  }, []);
  const onScroll_1 = c.useCallback(
    (e) => {
      if (G) {
        ee(e.currentTarget.scrollTop);
      }
      if (onScroll != null) {
        onScroll(e);
      }
    },
    [G, onScroll, ee],
  );
  c.useEffect(() => {
    var e;
    var t;
    if (G) {
      ee(
        (e = (t = textAreaRef.current) == null ? undefined : t.scrollTop) !=
          null
          ? e
          : 0,
      );
    } else {
      ee(0);
    }
  }, [G, textAreaRef, ee]);
  c.useEffect(() => {
    if (!G || !qRef.current) {
      return void setQ(0);
    }
    var qRef_current = qRef.current;
    var t = () => {
      setQ(qRef_current.getBoundingClientRect().width);
    };
    t();
    if (typeof ResizeObserver !== "undefined") {
      var n = new ResizeObserver(t);
      n.observe(qRef_current);
      return () => {
        n.disconnect();
      };
    }
  }, [G, prefixPlaceholder]);
  const style = r._(a._({}, X), {
    "--content-generator-prompt-prefix-placeholder-width": Q
      ? "".concat(Q, "px")
      : "".concat(
          [...(prefixPlaceholder != null ? prefixPlaceholder : "")].length,
          "em",
        ),
  });
  return l.jsxs("div", {
    ref: KRef,
    className: "prompt-container-i7dCBb",
    style,
    children: [
      l.jsxs("div", {
        ref,
        className: _s("prompt-textarea-sizer-xvfoQY", className, {
          [A]: G,
        }),
        children: [
          value,
          (value == null ? undefined : value.endsWith("\n"))
            ? l.jsx("br", {})
            : null,
        ],
      }),
      G
        ? l.jsx("span", {
            ref: qRef,
            "aria-hidden": true,
            className: _s("prompt-prefix-placeholder-Olj81X", className, {
              [j]: collapsed,
              [T]: collapseTransitionStart,
            }),
            children: prefixPlaceholder,
          })
        : null,
      l.jsx(
        X_2,
        r._(
          a._(
            {
              ref: textAreaRef,
              "aria-label": i.Ay.t("detail_prompt", {}, "提示词"),
            },
            L,
          ),
          {
            placeholder: G ? "" : placeholder,
            className: _s("prompt-textarea-E8nish", className, {
              [j]: collapsed,
              [T]: collapseTransitionStart,
              "prompt-shrunk-uAeQmW": promptShrunk,
              [A]: G,
              "prefix-placeholder-empty-hzkbia": G && I,
            }),
            onKeyDown: handlePromptInputKeyDown,
            onBlur: (e) => {
              dismissHint();
              if (onBlur != null) {
                onBlur(e);
              }
            },
            onScroll: onScroll_1,
          },
        ),
      ),
      l.jsx(X_1, {
        ref: inputRef,
        "aria-label":
          (t = L["aria-label"]) != null
            ? t
            : i.Ay.t("detail_prompt", {}, "提示词"),
        "aria-labelledby": L["aria-labelledby"],
        className: _s("prompt-input-vOuwLb", {
          [j]: collapsed,
          [T]: collapseTransitionStart,
          [A]: G,
        }),
        value,
        placeholder: G ? "" : placeholder,
        disabled,
        readOnly,
        onKeyDown: handlePromptInputKeyDown,
        onBlur: dismissHint,
      }),
      disabled
        ? l.jsx("div", {
            className: "prompt-input-disabled-overlay-L9IyYb",
          })
        : null,
    ],
  });
});
