import r from "oa";
import n from "bk";
import i from "z8";
import s from "A3";
import o from "Lt";
import l from "bT";
import c from "E3";
import d from "zfx";
import u from "b5M";
import m from "edH";
import p from "iya";
import h from "QmW";
import _g from "xb";
import b from "r5O";
import f from "Qey";
import _ from "Du8";
import x from "qO";
import w from "ZYW";
import y from "xi";
import k from "HbB";
import j from "uz";
import N from "G4";
import T from "cI";
import C from "K5b";
import R from "PC";
import E from "uiO";
import W from "lgn";
import z from "k95";
const $ = l.memo(function (e) {
  const { editor } = e;
  const a = C.A();
  l.useEffect(() => {
    if (editor) {
      editor.on("transaction", a);
      return () => {
        editor.off("transaction", a);
      };
    }
  }, [editor, a]);
  if (!editor) {
    return null;
  }
  const children = Object.values(editor.extensionStorage)
    .filter(
      (e) =>
        E.U(e) &&
        "portalContainer" in e &&
        "portalElement" in e &&
        e.portalContainer instanceof HTMLElement &&
        e.portalElement !== undefined,
    )
    .map((e) => R.createPortal(e.portalElement, e.portalContainer));
  return i.jsx(i.Fragment, {
    children,
  });
});
const S = W.YY.create({
  name: "promptEditorKeyboardShortcuts",
  addOptions: () => ({
    submitOnModEnter: () => false,
    onPlainEnter: () => undefined,
  }),
  addKeyboardShortcuts() {
    return n._(
      r._(
        {},
        z.L({
          editor: this.editor,
          submitOnModEnter: () => this.options.submitOnModEnter(),
          onPlainEnter: () => this.options.onPlainEnter(),
          onSubmit: () =>
            this.editor.emit("submit", {
              editor: this.editor,
            }),
        }),
      ),
      {
        Escape: () =>
          !this.editor.view.composing &&
          (this.editor.emit("collapse", {
            editor: this.editor,
          }),
          true),
      },
    );
  },
});
const A = "collapsed-QdU9aL";
const F = {
  type: c.A.name,
  content: [
    {
      type: m.A.name,
      content: [],
    },
  ],
};
const P = (e) => {
  var t;
  var a;
  return (
    !!e &&
    (e.type === p.A.name
      ? !!((a = e.text) == null ? undefined : a.trim())
      : ((t = e.content) == null ? undefined : t.length)
        ? e.content.some(P)
        : !!(e.type && e.type !== c.A.name && e.type !== m.A.name))
  );
};
var M = l.memo(function (e) {
  let t;
  const {
    className,
    characterLimit,
    value = F,
    disabled = false,
    readOnly = false,
    extensions = [],
    onChange,
    onSubmit,
    onFocus,
    onBlur,
    onDrop,
    onPaste,
    prefixPlaceholder,
    onPrefixPlaceholderDelete,
  } = e;
  const id = l.useId();
  const K = characterLimit !== undefined;
  const H = K && characterLimit.count > characterLimit.max;
  const I = H
    ? f.Ay.t(
        "octo_canvas_generator_prompt_character_count",
        {
          num1: characterLimit.count,
          num2: characterLimit.max,
        },
        "{num1}/{num2} characters",
      )
    : "";
  const V = String(
    (t = characterLimit == null ? undefined : characterLimit.count) != null
      ? t
      : 0,
  );
  const U = I.indexOf(V);
  const X = U >= 0 ? I.slice(0, U) : "";
  const G = U >= 0 ? I.slice(U + V.length) : null;
  const Q = !!prefixPlaceholder;
  const Y = l.useContext(j.G);
  const eeRef = l.useRef(Y);
  eeRef.current = Y;
  const etRef = l.useRef(false);
  const eaRef = l.useRef(value);
  const er = !P(value);
  const enRef = l.useRef(null);
  const eiRef = l.useRef(null);
  const [es, setEs] = l.useState(0);
  const {
    appearance,
    collapsed,
    promptShrunk = false,
    onCollapsedChange,
  } = l.useContext(_.R);
  const { promptEditorRef } = l.useContext(x.b);
  const { submitButtonRef } = l.useContext(x.b);
  const [ref, eg] = T.C(e);
  l.useEffect(() => {
    if (!Q || !eiRef.current) {
      return void setEs(0);
    }
    var eiRef_current = eiRef.current;
    var t = () => {
      setEs(eiRef_current.getBoundingClientRect().width);
    };
    t();
    if (typeof ResizeObserver !== "undefined") {
      var a = new ResizeObserver(t);
      a.observe(eiRef_current);
      return () => {
        a.disconnect();
      };
    }
  }, [Q, prefixPlaceholder]);
  const style = n._(r._({}, eg), {
    "--content-generator-prompt-prefix-placeholder-width": es
      ? "".concat(es, "px")
      : "".concat(
          [...(prefixPlaceholder != null ? prefixPlaceholder : "")].length,
          "em",
        ),
  });
  const extensions_1 = l.useMemo(
    () => [
      c.A,
      d.A.configure({
        width: 2,
        color: "var(--brand-main-default)",
      }),
      u.A,
      m.A,
      p.A,
      S.configure({
        submitOnModEnter: () => eeRef.current.submitOnModEnter,
        onPlainEnter: () => {
          if (!etRef.current) {
            eeRef.current.onPlainEnter(P(eaRef.current));
          }
        },
      }),
      ...extensions,
    ],
    [extensions],
  );
  const editable = l.useMemo(
    () => !disabled && !readOnly,
    [disabled, readOnly],
  );
  const e_ = h.hG(
    {
      extensions: extensions_1,
      content: value,
      editable,
    },
    [extensions_1],
  );
  const exRef = l.useRef(false);
  const ew = l.useCallback((e, t, a, r) => {
    setTimeout(() => {
      if (!e.isDestroyed) {
        if (
          (r == null ? undefined : r.deferWhileComposing) &&
          exRef.current &&
          e.view.composing
        ) {
          if ((i = r.onDefer) != null) {
            i.call(r);
          }
          return;
        }
        var n;
        var i;
        var { selection } = e.state;
        var o = (r == null ? undefined : r.preserveSelection)
          ? {
              from: selection.from,
              to: selection.to,
            }
          : undefined;
        e.chain()
          .setMeta(
            "addToHistory",
            (n = r == null ? undefined : r.addToHistory) != null && n,
          )
          .setContent(t, a)
          .run();
        if (o) {
          e.chain().setMeta("addToHistory", false).setTextSelection(o).run();
        }
      }
    });
  }, []);
  const eyRef = l.useRef(value);
  const ekRef = l.useRef(null);
  const ejRef = l.useRef();
  const eNRef = l.useRef();
  const eTRef = l.useRef();
  const eCRef = l.useRef(false);
  const eRRef = l.useRef();
  eyRef.current = value;
  const eE = l.useCallback((shouldAddToHistory) => {
    ekRef.current = {
      shouldAddToHistory,
    };
  }, []);
  eNRef.current = () => {
    if (eTRef.current !== undefined) {
      cancelAnimationFrame(eTRef.current);
    }
    eTRef.current = requestAnimationFrame(() => {
      var e;
      var t;
      eTRef.current = undefined;
      if (((e = ejRef.current) == null ? undefined : e.call(ejRef)) === false) {
        if ((t = eNRef.current) != null) {
          t.call(eNRef);
        }
      }
    });
  };
  eRRef.current = l.useCallback(
    (e) => {
      e.stopPropagation();
      if (j.d(e, eeRef.current.submitOnModEnter) && !e.repeat) {
        y.V.warn(
          "[ContentGeneratorPromptEditor] submit by enter ".concat(
            JSON.stringify({
              submit_trigger: "prompt_enter",
            }),
          ),
        );
      }
      if (
        Q &&
        !P(eaRef.current) &&
        (e.key === "Backspace" || e.key === "Delete")
      ) {
        e.preventDefault();
        if (onPrefixPlaceholderDelete != null) {
          onPrefixPlaceholderDelete();
        }
        return;
      }
      switch (e.key) {
        case "PageUp":
        case "PageDown":
          e.preventDefault();
      }
    },
    [Q, onPrefixPlaceholderDelete],
  );
  const e$ = l.useCallback((e) => {
    var t;
    if ((t = eRRef.current) != null) {
      t.call(eRRef, e);
    }
  }, []);
  const onCreate = l.useCallback(
    (e) => {
      var { editor } = e;
      var { dom } = editor.view;
      exRef.current = true;
      var r = () => {
        var e;
        if ((e = eNRef.current) != null) {
          e.call(eNRef);
        }
      };
      dom.addEventListener("keydown", e$);
      dom.addEventListener("compositionend", r);
      editor.on("destroy", () => {
        exRef.current = false;
        dom.removeEventListener("keydown", e$);
        dom.removeEventListener("compositionend", r);
        if (eTRef.current !== undefined) {
          cancelAnimationFrame(eTRef.current);
          eTRef.current = undefined;
        }
      });
    },
    [e$],
  );
  const onUpdate = l.useCallback(
    (e) => {
      var { editor } = e;
      if (collapsed || promptShrunk) {
        if (onCollapsedChange != null) {
          onCollapsedChange(false);
        }
      }
      eaRef.current = editor.getJSON();
      ekRef.current = null;
      eCRef.current = true;
      if (onChange != null) {
        onChange(eaRef.current);
      }
      ew(e_, eaRef.current);
    },
    [e_, collapsed, promptShrunk, onCollapsedChange, onChange, ew],
  );
  const onFocus_1 = l.useCallback(
    (e) => {
      var { event } = e;
      if (onFocus == null) {
        return undefined;
      }
      return onFocus(event);
    },
    [onFocus],
  );
  const onBlur_1 = l.useCallback(
    (e) => {
      var { event } = e;
      eeRef.current.dismissHint();
      if (onBlur != null) {
        onBlur(event);
      }
    },
    [onBlur],
  );
  const onDrop_1 = l.useCallback(
    (e, t, a) => {
      if (!a) {
        e.stopPropagation();
        if (onDrop != null) {
          onDrop(e);
        }
      }
    },
    [onDrop],
  );
  const onPaste_1 = l.useCallback(
    (e) => {
      e.stopPropagation();
      if (onPaste != null) {
        onPaste(e);
      }
    },
    [onPaste],
  );
  const eM = h.hG(
    {
      extensions: extensions_1,
      content: value,
      editable: !disabled && !readOnly,
      onCreate,
      onUpdate,
      onFocus: onFocus_1,
      onBlur: onBlur_1,
      onDrop: onDrop_1,
      onPaste: onPaste_1,
      editorProps: {
        attributes: {
          role: "textbox",
          "aria-label": f.Ay.t("detail_prompt", {}, "提示词"),
          "aria-multiline": "true",
        },
        handleKeyDown: (e, t) => {
          etRef.current = t.repeat;
          return j.d(t, eeRef.current.submitOnModEnter) && t.repeat;
        },
      },
    },
    [extensions_1],
  );
  const eZ = l.useCallback(
    (e) =>
      n._(
        r._(
          {},
          e
            ? {
                addToHistory: true,
                preserveSelection: true,
              }
            : {},
        ),
        {
          deferWhileComposing: true,
          onDefer: () => eE(e),
        },
      ),
    [eE],
  );
  ejRef.current = () => {
    var ekRef_current = ekRef.current;
    if (!ekRef_current || eM.isDestroyed || !exRef.current) {
      return true;
    }
    if (eM.view.composing) {
      return false;
    }
    ekRef.current = null;
    var eyRef_current = eyRef.current;
    eaRef.current = eyRef_current;
    ew(
      eM,
      eyRef_current,
      {
        emitUpdate: false,
      },
      eZ(ekRef_current.shouldAddToHistory),
    );
    ew(e_, eyRef_current, {
      emitUpdate: false,
    });
    return true;
  };
  const eO = l.useCallback((e) => {
    var t;
    if ((t = enRef.current) != null) {
      t.style.setProperty(
        "--content-generator-prompt-prefix-placeholder-scroll-top",
        "".concat(e, "px"),
      );
    }
  }, []);
  l.useEffect(() => {
    if (!Q) {
      return void eO(0);
    }
    var dom = eM.view.dom;
    var t = () => {
      eO(dom.scrollTop);
    };
    t();
    dom.addEventListener("scroll", t, {
      passive: true,
    });
    return () => {
      dom.removeEventListener("scroll", t);
    };
  }, [eM, Q, eO]);
  l.useEffect(() => {
    var eCRef_current = eCRef.current;
    eCRef.current = false;
    if (b.A(value, eaRef.current)) {
      ekRef.current = null;
      return;
    }
    if (exRef.current && eM.view.composing) {
      eE(eCRef_current);
    } else {
      ekRef.current = null;
      eaRef.current = value;
      ew(
        eM,
        value,
        {
          emitUpdate: false,
        },
        eZ(eCRef_current),
      );
      ew(e_, value, {
        emitUpdate: false,
      });
    }
  }, [eM, e_, eZ, eE, value, ew]);
  l.useEffect(() => {
    eM.setOptions({
      editable,
    });
    e_.setOptions({
      editable,
    });
  }, [editable, eM, e_]);
  l.useEffect(() => {
    var attributes = r._({}, eM.options.editorProps.attributes);
    delete attributes["aria-invalid"];
    delete attributes["aria-describedby"];
    if (K) {
      attributes["aria-invalid"] = String(H);
      if (H) {
        attributes["aria-describedby"] = id;
      }
    }
    eM.setOptions({
      editorProps: n._(r._({}, eM.options.editorProps), {
        attributes,
      }),
    });
  }, [eM, K, H, id]);
  const eq = l.useCallback(() => {
    if (onCollapsedChange != null) {
      onCollapsedChange(true);
    }
  }, [onCollapsedChange]);
  const { run } = s.default(
    () => {
      eeRef.current.dismissHint();
      var e = submitButtonRef == null ? undefined : submitButtonRef.current;
      if (e) {
        if (!e.disabled) {
          e.click();
        }
        return;
      }
      if (onSubmit != null) {
        onSubmit();
      }
    },
    w.$,
    [],
    {
      leading: true,
      trailing: false,
    },
  );
  l.useEffect(() => {
    eM.on("collapse", eq);
    eM.on("submit", run);
    return () => {
      eM.off("collapse", eq);
      eM.off("submit", run);
    };
  }, [eM, eq, run]);
  const eL = collapsed || promptShrunk;
  const eDRef = l.useRef(eL);
  l.useEffect(() => {
    if (eL && !eDRef.current) {
      eM.view.dom.scrollTo({
        top: 0,
      });
      eM.commands.blur();
    }
  }, [eM, eL]);
  l.useEffect(() => {
    eDRef.current = eL;
  }, [eL]);
  N.E(() => {
    if (promptEditorRef) {
      promptEditorRef.current = eM;
    }
    return () => {
      if (promptEditorRef) {
        promptEditorRef.current = null;
      }
    };
  }, [eM, promptEditorRef]);
  return i.jsx(k._, {
    children: i.jsxs("div", {
      ref: enRef,
      className: _g("prompt-editor-container-dkRdBw", className, {
        [A]: collapsed,
        "legacy-V18ClL": !o.f(appearance),
        "prefix-placeholder-active-LSQzBY": Q,
        "prefix-placeholder-empty-JucgRF": Q && er,
      }),
      style,
      children: [
        Q
          ? i.jsx("span", {
              ref: eiRef,
              "aria-hidden": true,
              className: _g("prompt-prefix-placeholder-pZ0sUQ", {
                [A]: collapsed,
              }),
              children: prefixPlaceholder,
            })
          : null,
        i.jsx(h.$Z, {
          className: _g("prompt-editor-NlZGRz", {
            [A]: collapsed,
            "prompt-shrunk-ZQhJWf": promptShrunk,
          }),
          editor: eM,
        }),
        H
          ? i.jsx("output", {
              id,
              "aria-label": I,
              className: "character-count-dEElsp",
              children:
                G !== null
                  ? i.jsxs(i.Fragment, {
                      children: [
                        X
                          ? i.jsx("span", {
                              "aria-hidden": true,
                              children: X,
                            })
                          : null,
                        i.jsx("span", {
                          "aria-hidden": true,
                          className: "character-count-current-F3eXQG",
                          children: V,
                        }),
                        i.jsx("span", {
                          "aria-hidden": true,
                          children: G,
                        }),
                      ],
                    })
                  : i.jsx("span", {
                      "aria-hidden": true,
                      children: I,
                    }),
            })
          : null,
        i.jsx("div", {
          ref,
          className: "prompt-editor-sizer-wjKXjY",
          "aria-hidden": "true",
          "data-generator-preview-ignore": true,
          children: i.jsx(h.$Z, {
            editor: e_,
          }),
        }),
        i.jsx($, {
          editor: eM,
        }),
      ],
    }),
  });
});
export { M as k };
