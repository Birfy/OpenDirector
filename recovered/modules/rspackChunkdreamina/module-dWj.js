import n from "zxf";
import i from "XfL";
import o from "Zr";
import s from "le8";
import a from "Ne";
import "mV";
import l from "WKV";
const f = (e, t) => {
  for (var r in t) {
    Object.defineProperty(e, r, {
      get: t[r],
      enumerable: true,
    });
  }
};
function c(e) {
  let { state, transaction } = e;
  let { selection } = transaction;
  let { doc } = transaction;
  let { storedMarks } = transaction;
  return {
    ...state,
    apply: state.apply.bind(state),
    applyTransaction: state.applyTransaction.bind(state),
    plugins: state.plugins,
    schema: state.schema,
    reconfigure: state.reconfigure.bind(state),
    toJSON: state.toJSON.bind(state),
    get storedMarks() {
      return storedMarks;
    },
    get selection() {
      return selection;
    },
    get doc() {
      return doc;
    },
    get tr() {
      selection = transaction.selection;
      doc = transaction.doc;
      storedMarks = transaction.storedMarks;
      return transaction;
    },
  };
}
class p {
  constructor(e) {
    this.editor = e.editor;
    this.rawCommands = this.editor.extensionManager.commands;
    this.customState = e.state;
  }
  get hasCustomState() {
    return !!this.customState;
  }
  get state() {
    return this.customState || this.editor.state;
  }
  get commands() {
    let { rawCommands, editor, state } = this;
    let { view } = editor;
    let { tr } = state;
    let o = this.buildProps(tr);
    return Object.fromEntries(
      Object.entries(rawCommands).map(([e, t]) => [
        e,
        (...e) => {
          let r = t(...e)(o);
          if (!(tr.getMeta("preventDispatch") || this.hasCustomState)) {
            view.dispatch(tr);
          }
          return r;
        },
      ]),
    );
  }
  get chain() {
    return () => this.createChain();
  }
  get can() {
    return () => this.createCan();
  }
  createChain(e, t = true) {
    let { rawCommands, editor, state } = this;
    let { view } = editor;
    let s = [];
    let a = !!e;
    let l = e || state.tr;
    let run = () => {
      if (!(a || !t || l.getMeta("preventDispatch") || this.hasCustomState)) {
        view.dispatch(l);
      }
      return s.every((e) => e === true);
    };
    let f = {
      ...Object.fromEntries(
        Object.entries(rawCommands).map(([e, r]) => [
          e,
          (...e) => {
            let n = this.buildProps(l, t);
            let i = r(...e)(n);
            s.push(i);
            return f;
          },
        ]),
      ),
      run,
    };
    return f;
  }
  createCan(e) {
    let { rawCommands, state } = this;
    let n = e || state.tr;
    let i = this.buildProps(n, false);
    return {
      ...Object.fromEntries(
        Object.entries(rawCommands).map(([e, t]) => [
          e,
          (...e) =>
            t(...e)({
              ...i,
              dispatch: undefined,
            }),
        ]),
      ),
      chain: () => this.createChain(n, false),
    };
  }
  buildProps(e, t = true) {
    let { rawCommands, editor, state } = this;
    let { view } = editor;
    let s = {
      tr: e,
      editor,
      view,
      state: c({
        state,
        transaction: e,
      }),
      dispatch: t ? () => undefined : undefined,
      chain: () => this.createChain(e, t),
      can: () => this.createCan(e),
      get commands() {
        return Object.fromEntries(
          Object.entries(rawCommands).map(([e, t]) => [
            e,
            (...e) => t(...e)(s),
          ]),
        );
      },
    };
    return s;
  }
}
const d = {};
f(d, {
  blur: () => h,
  clearContent: () => m,
  clearNodes: () => y,
  command: () => v,
  createParagraphNear: () => g,
  cut: () => b,
  deleteCurrentNode: () => w,
  deleteNode: () => x,
  deleteRange: () => O,
  deleteSelection: () => _,
  enter: () => E,
  exitCode: () => j,
  extendMarkRange: () => I,
  first: () => C,
  focus: () => L,
  forEach: () => F,
  insertContent: () => z,
  insertContentAt: () => q,
  joinBackward: () => K,
  joinDown: () => W,
  joinForward: () => X,
  joinItemBackward: () => Z,
  joinItemForward: () => Q,
  joinTextblockBackward: () => G,
  joinTextblockForward: () => Y,
  joinUp: () => H,
  keyboardShortcut: () => et,
  lift: () => en,
  liftEmptyBlock: () => ei,
  liftListItem: () => eo,
  newlineInCode: () => es,
  resetAttributes: () => eu,
  scrollIntoView: () => ef,
  selectAll: () => ec,
  selectNodeBackward: () => ep,
  selectNodeForward: () => ed,
  selectParentNode: () => eh,
  selectTextblockEnd: () => em,
  selectTextblockStart: () => ey,
  setContent: () => ev,
  setMark: () => e$,
  setMeta: () => eD,
  setNode: () => eL,
  setNodeSelection: () => eF,
  setTextDirection: () => ez,
  setTextSelection: () => eV,
  sinkListItem: () => eJ,
  splitBlock: () => eq,
  splitListItem: () => eH,
  toggleList: () => eX,
  toggleMark: () => eZ,
  toggleNode: () => eQ,
  toggleWrap: () => eG,
  undoInputRule: () => eY,
  unsetAllMarks: () => e0,
  unsetMark: () => e1,
  unsetTextDirection: () => e2,
  updateAttributes: () => e3,
  wrapIn: () => e6,
  wrapInList: () => e4,
});
var h =
  () =>
  ({ editor, view }) => {
    requestAnimationFrame(() => {
      var r;
      if (!editor.isDestroyed) {
        view.dom.blur();
        if ((r = window == null ? undefined : window.getSelection()) != null) {
          r.removeAllRanges();
        }
      }
    });
    return true;
  };
var m =
  (emitUpdate = true) =>
  ({ commands }) =>
    commands.setContent("", {
      emitUpdate,
    });
var y =
  () =>
  ({ state, tr, dispatch }) => {
    let { selection } = tr;
    let { ranges } = selection;
    return (
      !dispatch ||
      (ranges.forEach(({ $from, $to }) => {
        state.doc.nodesBetween($from.pos, $to.pos, (e, r) => {
          if (e.type.isText) {
            return;
          }
          let { doc, mapping } = tr;
          let s = doc.resolve(mapping.map(r));
          let a = doc.resolve(mapping.map(r + e.nodeSize));
          let l = s.blockRange(a);
          if (!l) {
            return;
          }
          let u = n.jP(l);
          if (e.type.isTextblock) {
            let { defaultType } = s.parent.contentMatchAt(s.index());
            tr.setNodeMarkup(l.start, defaultType);
          }
          if (u || u === 0) {
            tr.lift(l, u);
          }
        });
      }),
      true)
    );
  };
var v = (e) => (t) => e(t);
var g =
  () =>
  ({ state, dispatch }) =>
    i.Z1(state, dispatch);
var b =
  (e, t) =>
  ({ editor, tr }) => {
    let { state } = editor;
    let s = state.doc.slice(e.from, e.to);
    tr.deleteRange(e.from, e.to);
    let a = tr.mapping.map(t);
    tr.insert(a, s.content);
    tr.setSelection(new o.U3(tr.doc.resolve(Math.max(a - 1, 0))));
    return true;
  };
var w =
  () =>
  ({ tr, dispatch }) => {
    let { selection } = tr;
    let n = selection.$anchor.node();
    if (n.content.size > 0) {
      return false;
    }
    let $anchor = tr.selection.$anchor;
    for (let r = $anchor.depth; r > 0; r -= 1) {
      if ($anchor.node(r).type === n.type) {
        if (dispatch) {
          let t = $anchor.before(r);
          let n = $anchor.after(r);
          tr.delete(t, n).scrollIntoView();
        }
        return true;
      }
    }
    return false;
  };
function k(e, schema) {
  if (typeof e === "string") {
    if (!schema.nodes[e]) {
      throw Error(
        `There is no node type named '${e}'. Maybe you forgot to add the extension?`,
      );
    }
    return schema.nodes[e];
  }
  return e;
}
var x =
  (e) =>
  ({ tr, state, dispatch }) => {
    let i = k(e, state.schema);
    let $anchor = tr.selection.$anchor;
    for (let e = $anchor.depth; e > 0; e -= 1) {
      if ($anchor.node(e).type === i) {
        if (dispatch) {
          let r = $anchor.before(e);
          let n = $anchor.after(e);
          tr.delete(r, n).scrollIntoView();
        }
        return true;
      }
    }
    return false;
  };
var O =
  (e) =>
  ({ tr, dispatch }) => {
    let { from, to } = e;
    if (dispatch) {
      tr.delete(from, to);
    }
    return true;
  };
var _ =
  () =>
  ({ state, dispatch }) =>
    i.ic(state, dispatch);
var E =
  () =>
  ({ commands }) =>
    commands.keyboardShortcut("Enter");
var j =
  () =>
  ({ state, dispatch }) =>
    i.I$(state, dispatch);
function A(e) {
  return Object.prototype.toString.call(e) === "[object RegExp]";
}
function S(
  e,
  t,
  r = {
    strict: true,
  },
) {
  let n = Object.keys(t);
  return (
    !n.length ||
    n.every((n) => {
      if (r.strict) {
        return t[n] === e[n];
      }
      if (A(t[n])) {
        return t[n].test(e[n]);
      }
      return t[n] === e[n];
    })
  );
}
function T(e, t, r = {}) {
  return e.find(
    (e) =>
      e.type === t &&
      S(Object.fromEntries(Object.keys(r).map((t) => [t, e.attrs[t]])), r),
  );
}
function M(e, t, r = {}) {
  return !!T(e, t, r);
}
function N($from, t, r) {
  if (!$from || !t) {
    return;
  }
  let n = $from.parent.childAfter($from.parentOffset);
  if (!(n.node && n.node.marks.some((e) => e.type === t))) {
    n = $from.parent.childBefore($from.parentOffset);
  }
  if (!n.node || !n.node.marks.some((e) => e.type === t)) {
    return;
  }
  if (!r) {
    let e = n.node.marks.find((e) => e.type === t);
    if (e) {
      r = e.attrs;
    }
  }
  if (!T([...n.node.marks], t, r)) {
    return;
  }
  let n_index = n.index;
  let o = $from.start() + n.offset;
  let s = n_index + 1;
  let a = o + n.node.nodeSize;
  while (n_index > 0 && M([...$from.parent.child(n_index - 1).marks], t, r)) {
    n_index -= 1;
    o -= $from.parent.child(n_index).nodeSize;
  }
  while (
    s < $from.parent.childCount &&
    M([...$from.parent.child(s).marks], t, r)
  ) {
    a += $from.parent.child(s).nodeSize;
    s += 1;
  }
  return {
    from: o,
    to: a,
  };
}
function R(e, schema) {
  if (typeof e === "string") {
    if (!schema.marks[e]) {
      throw Error(
        `There is no mark type named '${e}'. Maybe you forgot to add the extension?`,
      );
    }
    return schema.marks[e];
  }
  return e;
}
var I =
  (e, t) =>
  ({ tr, state, dispatch }) => {
    let s = R(e, state.schema);
    let { doc, selection } = tr;
    let { $from, from, to } = selection;
    if (dispatch) {
      let e = N($from, s, t);
      if (e && e.from <= from && e.to >= to) {
        let t = o.U3.create(doc, e.from, e.to);
        tr.setSelection(t);
      }
    }
    return true;
  };
var C = (e) => (t) => {
  let r = typeof e === "function" ? e(t) : e;
  for (let e = 0; e < r.length; e += 1) {
    if (r[e](t)) {
      return true;
    }
  }
  return false;
};
function P(selection) {
  return selection instanceof o.U3;
}
function B(e = 0, t = 0, r = 0) {
  return Math.min(Math.max(e, t), r);
}
function $() {
  return (
    navigator.platform === "Android" || /android/i.test(navigator.userAgent)
  );
}
function D() {
  return (
    [
      "iPad Simulator",
      "iPhone Simulator",
      "iPod Simulator",
      "iPad",
      "iPhone",
      "iPod",
    ].includes(navigator.platform) ||
    (navigator.userAgent.includes("Mac") && "ontouchend" in document)
  );
}
var L =
  (e = null, t = {}) =>
  ({ editor, view, tr, dispatch }) => {
    t = {
      scrollIntoView: true,
      ...t,
    };
    let a = () => {
      if (D() || $()) {
        view.dom.focus();
      }
      if (
        typeof navigator !== "undefined" &&
        /^((?!chrome|android).)*safari/i.test(navigator.userAgent) &&
        !D() &&
        !$()
      ) {
        view.dom.focus({
          preventScroll: true,
        });
      }
      requestAnimationFrame(() => {
        if (!editor.isDestroyed) {
          view.focus();
          if (t == null ? undefined : t.scrollIntoView) {
            editor.commands.scrollIntoView();
          }
        }
      });
    };
    try {
      if ((view.hasFocus() && e === null) || e === false) {
        return true;
      }
    } catch {
      return false;
    }
    if (dispatch && e === null && !P(editor.state.selection)) {
      a();
      return true;
    }
    let l =
      ((e, t = null) => {
        if (!t) {
          return null;
        }
        let r = o.LN.atStart(e);
        let n = o.LN.atEnd(e);
        if (t === "start" || t === true) {
          return r;
        }
        if (t === "end") {
          return n;
        }
        let r_from = r.from;
        let s = n.to;
        if (t === "all") {
          return o.U3.create(e, B(0, r_from, s), B(e.content.size, r_from, s));
        }
        return o.U3.create(e, B(t, r_from, s), B(t, r_from, s));
      })(tr.doc, e) || editor.state.selection;
    let u = editor.state.selection.eq(l);
    if (dispatch) {
      if (!u) {
        tr.setSelection(l);
      }
      if (u && tr.storedMarks) {
        tr.setStoredMarks(tr.storedMarks);
      }
      a();
    }
    return true;
  };
var F = (e, t) => (r) =>
  e.every((e, n) =>
    t(e, {
      ...r,
      index: n,
    }),
  );
var z =
  (e, t) =>
  ({ tr, commands }) =>
    commands.insertContentAt(
      {
        from: tr.selection.from,
        to: tr.selection.to,
      },
      e,
      t,
    );
const V = (e) => {
  let e_childNodes = e.childNodes;
  for (let r = e_childNodes.length - 1; r >= 0; r -= 1) {
    let n = e_childNodes[r];
    if (n.nodeType === 3 && n.nodeValue && /^(\n\s\s|\n)$/.test(n.nodeValue)) {
      e.removeChild(n);
    } else if (n.nodeType === 1) {
      V(n);
    }
  }
  return e;
};
function J(e) {
  if (typeof window === "undefined") {
    throw Error(
      "[tiptap error]: there is no window object available, so this function cannot be used",
    );
  }
  let t = `<body>${e}</body>`;
  return V(new window.DOMParser().parseFromString(t, "text/html").body);
}
function U(e, t, r) {
  if (e instanceof s.bP || e instanceof s.FK) {
    return e;
  }
  r = {
    slice: true,
    parseOptions: {},
    ...r,
  };
  let n = typeof e === "object" && e !== null;
  let i = typeof e === "string";
  if (n) {
    try {
      if (Array.isArray(e) && e.length > 0) {
        return s.FK.fromArray(e.map((e) => t.nodeFromJSON(e)));
      }
      let n = t.nodeFromJSON(e);
      if (r.errorOnInvalidContent) {
        n.check();
      }
      return n;
    } catch (cause) {
      if (r.errorOnInvalidContent) {
        throw Error("[tiptap error]: Invalid JSON content", {
          cause,
        });
      }
      console.warn(
        "[tiptap warn]: Invalid content.",
        "Passed value:",
        e,
        "Error:",
        cause,
      );
      return U("", t, r);
    }
  }
  if (i) {
    if (r.errorOnInvalidContent) {
      let n = false;
      let i = "";
      let o = new s.Sj({
        topNode: t.spec.topNode,
        marks: t.spec.marks,
        nodes: t.spec.nodes.append({
          __tiptap__private__unknown__catch__all__node: {
            content: "inline*",
            group: "block",
            parseDOM: [
              {
                tag: "*",
                getAttrs: (e) => {
                  n = true;
                  i = typeof e === "string" ? e : e.outerHTML;
                  return null;
                },
              },
            ],
          },
        }),
      });
      if (r.slice) {
        s.S4.fromSchema(o).parseSlice(J(e), r.parseOptions);
      } else {
        s.S4.fromSchema(o).parse(J(e), r.parseOptions);
      }
      if (r.errorOnInvalidContent && n) {
        throw Error("[tiptap error]: Invalid HTML content", {
          cause: Error(`Invalid element found: ${i}`),
        });
      }
    }
    let n = s.S4.fromSchema(t);
    if (r.slice) {
      return n.parseSlice(J(e), r.parseOptions).content;
    }
    return n.parse(J(e), r.parseOptions);
  }
  return U("", t, r);
}
var q =
  (e, t, r) =>
  ({ tr, dispatch, editor }) => {
    var u;
    if (dispatch) {
      let a;
      let f;
      r = {
        parseOptions: editor.options.parseOptions,
        updateSelection: true,
        applyInputRules: false,
        applyPasteRules: false,
        ...r,
      };
      let c = (error) => {
        editor.emit("contentError", {
          editor,
          error,
          disableCollaboration: () => {
            if (
              "collaboration" in editor.storage &&
              typeof editor.storage.collaboration === "object" &&
              editor.storage.collaboration
            ) {
              editor.storage.collaboration.isDisabled = true;
            }
          },
        });
      };
      let p = {
        preserveWhitespace: "full",
        ...r.parseOptions,
      };
      if (
        !r.errorOnInvalidContent &&
        !editor.options.enableContentCheck &&
        editor.options.emitContentError
      ) {
        try {
          U(t, editor.schema, {
            parseOptions: p,
            errorOnInvalidContent: true,
          });
        } catch (error) {
          c(error);
        }
      }
      try {
        a = U(t, editor.schema, {
          parseOptions: p,
          errorOnInvalidContent:
            (u = r.errorOnInvalidContent) != null
              ? u
              : editor.options.enableContentCheck,
        });
      } catch (error) {
        c(error);
        return false;
      }
      let { from, to } =
        typeof e === "number"
          ? {
              from: e,
              to: e,
            }
          : {
              from: e.from,
              to: e.to,
            };
      let m = true;
      let y = true;
      (!("type" in a) ? a : [a]).forEach((e) => {
        e.check();
        m = !!m && e.isText && e.marks.length === 0;
        y = !!y && e.isBlock;
      });
      if (from === to && y) {
        let { parent } = tr.doc.resolve(from);
        if (
          !(!parent.isTextblock || parent.type.spec.code || parent.childCount)
        ) {
          from -= 1;
          to += 1;
        }
      }
      if (m) {
        if (Array.isArray(t)) {
          f = t.map((e) => e.text || "").join("");
        } else if (t instanceof s.FK) {
          let e = "";
          t.forEach((t) => {
            if (t.text) {
              e += t.text;
            }
          });
          f = e;
        } else {
          f = typeof t === "object" && t && t.text ? t.text : t;
        }
        tr.insertText(f, from, to);
      } else {
        f = a;
        let e = tr.doc.resolve(from);
        let t = e.node();
        let r = e.parentOffset === 0;
        let n = t.isText || t.isTextblock;
        let o = t.content.size > 0;
        if (r && n && o && y) {
          from = Math.max(0, from - 1);
        }
        tr.replaceWith(from, to, f);
      }
      if (r.updateSelection) {
        ((e, t) => {
          let r = e.steps.length - 1;
          if (r < t) {
            return;
          }
          let i = e.steps[r];
          if (!(i instanceof n.Ln || i instanceof n.Wg)) {
            return;
          }
          let s = e.mapping.maps[r];
          let a = 0;
          s.forEach((e, t, r, n) => {
            if (a === 0) {
              a = n;
            }
          });
          e.setSelection(o.LN.near(e.doc.resolve(a), -1));
        })(tr, tr.steps.length - 1);
      }
      if (r.applyInputRules) {
        tr.setMeta("applyInputRules", {
          from,
          text: f,
        });
      }
      if (r.applyPasteRules) {
        tr.setMeta("applyPasteRules", {
          from,
          text: f,
        });
      }
    }
    return true;
  };
var H =
  () =>
  ({ state, dispatch }) =>
    i.G2(state, dispatch);
var W =
  () =>
  ({ state, dispatch }) =>
    i.bh(state, dispatch);
var K =
  () =>
  ({ state, dispatch }) =>
    i.Qv(state, dispatch);
var X =
  () =>
  ({ state, dispatch }) =>
    i.eT(state, dispatch);
var Z =
  () =>
  ({ state, dispatch, tr }) => {
    try {
      let i = n.N0(state.doc, state.selection.$from.pos, -1);
      if (i == null) {
        return false;
      }
      tr.join(i, 2);
      if (dispatch) {
        dispatch(tr);
      }
      return true;
    } catch {
      return false;
    }
  };
var Q =
  () =>
  ({ state, dispatch, tr }) => {
    try {
      let i = n.N0(state.doc, state.selection.$from.pos, 1);
      if (i == null) {
        return false;
      }
      tr.join(i, 2);
      if (dispatch) {
        dispatch(tr);
      }
      return true;
    } catch {
      return false;
    }
  };
var G =
  () =>
  ({ state, dispatch }) =>
    i.eB(state, dispatch);
var Y =
  () =>
  ({ state, dispatch }) =>
    i._G(state, dispatch);
function ee() {
  return typeof navigator !== "undefined" && /Mac/.test(navigator.platform);
}
var et =
  (e) =>
  ({ editor, view, tr, dispatch }) => {
    let o = ((e) => {
      let t;
      let r;
      let n;
      let i;
      let o = e.split(/-(?!$)/);
      let s = o[o.length - 1];
      if (s === "Space") {
        s = " ";
      }
      for (let e = 0; e < o.length - 1; e += 1) {
        let s = o[e];
        if (/^(cmd|meta|m)$/i.test(s)) {
          i = true;
        } else if (/^a(lt)?$/i.test(s)) {
          t = true;
        } else if (/^(c|ctrl|control)$/i.test(s)) {
          r = true;
        } else if (/^s(hift)?$/i.test(s)) {
          n = true;
        } else if (/^mod$/i.test(s)) {
          if (D() || ee()) {
            i = true;
          } else {
            r = true;
          }
        } else {
          throw Error(`Unrecognized modifier name: ${s}`);
        }
      }
      if (t) {
        s = `Alt-${s}`;
      }
      if (r) {
        s = `Ctrl-${s}`;
      }
      if (i) {
        s = `Meta-${s}`;
      }
      if (n) {
        s = `Shift-${s}`;
      }
      return s;
    })(e).split(/-(?!$)/);
    let s = o.find((e) => !["Alt", "Ctrl", "Meta", "Shift"].includes(e));
    let a = new KeyboardEvent("keydown", {
      key: s === "Space" ? " " : s,
      altKey: o.includes("Alt"),
      ctrlKey: o.includes("Ctrl"),
      metaKey: o.includes("Meta"),
      shiftKey: o.includes("Shift"),
      bubbles: true,
      cancelable: true,
    });
    let l = editor.captureTransaction(() => {
      view.someProp("handleKeyDown", (e) => e(view, a));
    });
    if (l != null) {
      l.steps.forEach((e) => {
        let t = e.map(tr.mapping);
        if (t && dispatch) {
          tr.maybeStep(t);
        }
      });
    }
    return true;
  };
function er(state, t, r = {}) {
  let { from, to, empty } = state.selection;
  let s = t ? k(t, state.schema) : null;
  let a = [];
  state.doc.nodesBetween(from, to, (e, t) => {
    if (e.isText) {
      return;
    }
    let r = Math.max(from, t);
    let o = Math.min(to, t + e.nodeSize);
    a.push({
      node: e,
      from: r,
      to: o,
    });
  });
  let l = to - from;
  let u = a
    .filter((e) => !s || s.name === e.node.type.name)
    .filter((e) =>
      S(e.node.attrs, r, {
        strict: false,
      }),
    );
  if (empty) {
    return !!u.length;
  }
  return u.reduce((acc, item) => acc + item.to - item.from, 0) >= l;
}
var en =
  (e, t = {}) =>
  ({ state, dispatch }) => {
    let o = k(e, state.schema);
    return !!er(state, o, t) && i.yY(state, dispatch);
  };
var ei =
  () =>
  ({ state, dispatch }) =>
    i.iz(state, dispatch);
var eo =
  (e) =>
  ({ state, dispatch }) => {
    let n = k(e, state.schema);
    return a.T2(n)(state, dispatch);
  };
var es =
  () =>
  ({ state, dispatch }) =>
    i.pC(state, dispatch);
function ea(e, schema) {
  if (schema.nodes[e]) {
    return "node";
  }
  if (schema.marks[e]) {
    return "mark";
  }
  return null;
}
function el(attrs, t) {
  let r = typeof t === "string" ? [t] : t;
  return Object.keys(attrs).reduce((acc, key) => {
    if (!r.includes(key)) {
      acc[key] = attrs[key];
    }
    return acc;
  }, {});
}
var eu =
  (e, t) =>
  ({ tr, state, dispatch }) => {
    let o = null;
    let s = null;
    let a = ea(typeof e === "string" ? e : e.name, state.schema);
    if (!a) {
      return false;
    }
    if (a === "node") {
      o = k(e, state.schema);
    }
    if (a === "mark") {
      s = R(e, state.schema);
    }
    let l = false;
    tr.selection.ranges.forEach((e) => {
      state.doc.nodesBetween(e.$from.pos, e.$to.pos, (e, n) => {
        if (o && o === e.type) {
          l = true;
          if (dispatch) {
            tr.setNodeMarkup(n, undefined, el(e.attrs, t));
          }
        }
        if (s && e.marks.length) {
          e.marks.forEach((o) => {
            if (s === o.type) {
              l = true;
              if (dispatch) {
                tr.addMark(n, n + e.nodeSize, s.create(el(o.attrs, t)));
              }
            }
          });
        }
      });
    });
    return l;
  };
var ef =
  () =>
  ({ tr, dispatch }) => {
    if (dispatch) {
      tr.scrollIntoView();
    }
    return true;
  };
var ec =
  () =>
  ({ tr, dispatch }) => {
    if (dispatch) {
      let t = new o.i5(tr.doc);
      tr.setSelection(t);
    }
    return true;
  };
var ep =
  () =>
  ({ state, dispatch }) =>
    i._e(state, dispatch);
var ed =
  () =>
  ({ state, dispatch }) =>
    i.Sd(state, dispatch);
var eh =
  () =>
  ({ state, dispatch }) =>
    i.hy(state, dispatch);
var em =
  () =>
  ({ state, dispatch }) =>
    i.ec(state, dispatch);
var ey =
  () =>
  ({ state, dispatch }) =>
    i.$f(state, dispatch);
var ev =
  (e, { errorOnInvalidContent, emitUpdate = true, parseOptions = {} } = {}) =>
  ({ editor, tr, dispatch, commands }) => {
    let { doc } = tr;
    if (parseOptions.preserveWhitespace !== "full") {
      let a = ((e, t, r = {}, n = {}) =>
        U(e, t, {
          slice: false,
          parseOptions: r,
          errorOnInvalidContent: n.errorOnInvalidContent,
        }))(e, editor.schema, parseOptions, {
        errorOnInvalidContent:
          errorOnInvalidContent != null
            ? errorOnInvalidContent
            : editor.options.enableContentCheck,
      });
      if (dispatch) {
        tr.replaceWith(0, doc.content.size, a).setMeta(
          "preventUpdate",
          !emitUpdate,
        );
      }
      return true;
    }
    if (dispatch) {
      tr.setMeta("preventUpdate", !emitUpdate);
    }
    return commands.insertContentAt(
      {
        from: 0,
        to: doc.content.size,
      },
      e,
      {
        parseOptions,
        errorOnInvalidContent:
          errorOnInvalidContent != null
            ? errorOnInvalidContent
            : editor.options.enableContentCheck,
      },
    );
  };
function eg(e) {
  return (t) =>
    ((e, t) => {
      for (let depth = e.depth; depth > 0; depth -= 1) {
        let n = e.node(depth);
        if (t(n)) {
          return {
            pos: depth > 0 ? e.before(depth) : 0,
            start: e.start(depth),
            depth,
            node: n,
          };
        }
      }
    })(t.$from, e);
}
function eb(e, t, r) {
  if (e.config[t] === undefined && e.parent) {
    return eb(e.parent, t, r);
  }
  if (typeof e.config[t] === "function") {
    return e.config[t].bind({
      ...r,
      parent: e.parent ? eb(e.parent, t, r) : null,
    });
  }
  return e.config[t];
}
function ew(e) {
  return e
    .map((e) => {
      let t = {
        name: e.name,
        options: e.options,
        storage: e.storage,
      };
      let r = eb(e, "addExtensions", t);
      if (r) {
        return [e, ...ew(r())];
      }
      return e;
    })
    .flat(10);
}
function ek(e, schema) {
  let r = s.ZF.fromSchema(schema).serializeFragment(e);
  let n = document.implementation.createHTMLDocument().createElement("div");
  n.appendChild(r);
  return n.innerHTML;
}
function ex(e, t, ...r) {
  if (typeof e === "function") {
    if (t) {
      return e.bind(t)(...r);
    }
    return e(...r);
  }
  return e;
}
function eO(e) {
  let baseExtensions = e.filter((e) => e.type === "extension");
  return {
    baseExtensions,
    nodeExtensions: e.filter((e) => e.type === "node"),
    markExtensions: e.filter((e) => e.type === "mark"),
  };
}
function e_(e) {
  let t = [];
  let { nodeExtensions, markExtensions } = eO(e);
  let extensions = [...nodeExtensions, ...markExtensions];
  let o = {
    default: null,
    validate: undefined,
    rendered: true,
    renderHTML: null,
    parseHTML: null,
    keepOnSplit: true,
    isRequired: false,
  };
  let s = nodeExtensions.filter((e) => e.name !== "text").map((e) => e.name);
  let a = markExtensions.map((e) => e.name);
  let l = [...s, ...a];
  e.forEach((e) => {
    let r = {
      name: e.name,
      options: e.options,
      storage: e.storage,
      extensions,
    };
    let n = eb(e, "addGlobalAttributes", r);
    if (n) {
      n().forEach((e) => {
        (Array.isArray(e.types)
          ? e.types
          : e.types === "*"
            ? l
            : e.types === "nodes"
              ? s
              : e.types === "marks"
                ? a
                : []
        ).forEach((type) => {
          Object.entries(e.attributes).forEach(([e, n]) => {
            t.push({
              type,
              name: e,
              attribute: {
                ...o,
                ...n,
              },
            });
          });
        });
      });
    }
  });
  extensions.forEach((e) => {
    let r = {
      name: e.name,
      options: e.options,
      storage: e.storage,
    };
    let n = eb(e, "addAttributes", r);
    if (n) {
      Object.entries(n()).forEach(([r, n]) => {
        let attribute = {
          ...o,
          ...n,
        };
        if (
          typeof (attribute == null ? undefined : attribute.default) ===
          "function"
        ) {
          attribute.default = attribute.default();
        }
        if (
          (attribute == null ? undefined : attribute.isRequired) &&
          (attribute == null ? undefined : attribute.default) === undefined
        ) {
          delete attribute.default;
        }
        t.push({
          type: e.name,
          name: r,
          attribute,
        });
      });
    }
  });
  return t;
}
function eE(e) {
  let t = [];
  let r = ((e) => {
    let t = [];
    let r = "";
    let n = false;
    let i = false;
    let o = 0;
    let e_length = e.length;
    for (let a = 0; a < e_length; a += 1) {
      let s = e[a];
      if (s === "'" && !i) {
        n = !n;
        r += s;
        continue;
      }
      if (s === '"' && !n) {
        i = !i;
        r += s;
        continue;
      }
      if (!n && !i) {
        if (s === "(") {
          o += 1;
          r += s;
          continue;
        }
        if (s === ")" && o > 0) {
          o -= 1;
          r += s;
          continue;
        }
        if (s === ";" && o === 0) {
          t.push(r);
          r = "";
          continue;
        }
      }
      r += s;
    }
    if (r) {
      t.push(r);
    }
    return t;
  })(e || "");
  let r_length = r.length;
  for (let e = 0; e < r_length; e += 1) {
    let n = r[e];
    let i = n.indexOf(":");
    if (i === -1) {
      continue;
    }
    let o = n.slice(0, i).trim();
    let s = n.slice(i + 1).trim();
    if (o && s) {
      t.push([o, s]);
    }
  }
  return t;
}
export function KV(...e) {
  return e
    .filter((e) => !!e)
    .reduce((acc, item) => {
      let r = {
        ...acc,
      };
      Object.entries(item).forEach(([e, t]) => {
        if (!r[e]) {
          r[e] = t;
          return;
        }
        if (e === "class") {
          let n = t ? String(t).split(" ") : [];
          let i = r[e] ? r[e].split(" ") : [];
          let o = n.filter((e) => !i.includes(e));
          r[e] = [...i, ...o].join(" ");
        } else if (e === "style") {
          let n = new Map([...eE(r[e]), ...eE(t)]);
          r[e] = Array.from(n.entries())
            .map(([e, t]) => `${e}: ${t}`)
            .join("; ");
        } else {
          r[e] = t;
        }
      });
      return r;
    }, {});
}
function eA(e, t) {
  return t
    .filter((t) => t.type === e.type.name)
    .filter((e) => e.attribute.rendered)
    .map((t) => {
      if (t.attribute.renderHTML) {
        return t.attribute.renderHTML(e.attrs) || {};
      }
      return {
        [t.name]: e.attrs[t.name],
      };
    })
    .reduce((acc, item) => KV(acc, item), {});
}
function eS(e, t) {
  if ("style" in e) {
    return e;
  }
  return {
    ...e,
    getAttrs: (r) => {
      let n = e.getAttrs ? e.getAttrs(r) : e.attrs;
      if (n === false) {
        return false;
      }
      let i = t.reduce((acc, item) => {
        var n;
        let i = item.attribute.parseHTML
          ? item.attribute.parseHTML(r)
          : typeof (n = r.getAttribute(item.name)) !== "string"
            ? n
            : n.match(/^[+-]?(?:\d*\.)?\d+$/)
              ? Number(n)
              : n === "true" || (n !== "false" && n);
        if (i == null) {
          return acc;
        }
        return {
          ...acc,
          [item.name]: i,
        };
      }, {});
      return {
        ...n,
        ...i,
      };
    },
  };
}
function eT(e) {
  return Object.fromEntries(
    Object.entries(e).filter(
      ([e, t]) =>
        !(
          e === "attrs" &&
          ((e = {}) => Object.keys(e).length === 0 && e.constructor === Object)(
            t,
          )
        ) && t != null,
    ),
  );
}
function eM(e) {
  let t;
  let r;
  let n = {};
  if (
    !((t = e == null ? undefined : e.attribute) == null
      ? undefined
      : t.isRequired) &&
    "default" in ((e == null ? undefined : e.attribute) || {})
  ) {
    n.default = e.attribute.default;
  }
  if (
    ((r = e == null ? undefined : e.attribute) == null
      ? undefined
      : r.validate) !== undefined
  ) {
    n.validate = e.attribute.validate;
  }
  return [e.name, n];
}
function eN(e) {
  return e.sort((e, t) => {
    let r = eb(e, "priority") || 100;
    let n = eb(t, "priority") || 100;
    if (r > n) {
      return -1;
    }
    return +(r < n);
  });
}
function eR(e) {
  let t;
  let r = eN(ew(e));
  let n = Array.from(
    new Set((t = r.map((e) => e.name)).filter((e, r) => t.indexOf(e) !== r)),
  );
  if (n.length) {
    console.warn(
      `[tiptap warn]: Duplicate extension names found: [${n.map((e) => `'${e}'`).join(", ")}]. This can lead to issues.`,
    );
  }
  return r;
}
function eI(name, schema) {
  return schema.nodes[name] || schema.marks[name] || null;
}
function eC(attributes, name, attrs) {
  return Object.fromEntries(
    Object.entries(attrs).filter(([r]) => {
      let n = attributes.find((e) => e.type === name && e.name === r);
      return !!n && n.attribute.keepOnSplit;
    }),
  );
}
function eP(e, t) {
  if (Array.isArray(t)) {
    return t.some((t) => (typeof t === "string" ? t : t.name) === e.name);
  }
  return t;
}
function eB(name, extensions) {
  let { nodeExtensions } = eO(extensions);
  let n = nodeExtensions.find((t) => t.name === name);
  if (!n) {
    return false;
  }
  let i = {
    name: n.name,
    options: n.options,
    storage: n.storage,
  };
  let o = ex(eb(n, "group", i));
  return typeof o === "string" && o.split(" ").includes("list");
}
var e$ =
  (e, t = {}) =>
  ({ tr, state, dispatch }) => {
    let { selection } = tr;
    let { empty, ranges } = selection;
    let l = R(e, state.schema);
    if (dispatch) {
      if (empty) {
        let e = ((e, t) => {
          let r = R(t, e.schema);
          let { from, to, empty } = e.selection;
          let s = [];
          if (empty) {
            if (e.storedMarks) {
              s.push(...e.storedMarks);
            }
            s.push(...e.selection.$head.marks());
          } else {
            e.doc.nodesBetween(from, to, (e) => {
              s.push(...e.marks);
            });
          }
          let a = s.find((e) => e.type.name === r.name);
          if (a) {
            return {
              ...a.attrs,
            };
          }
          return {};
        })(state, l);
        tr.addStoredMark(
          l.create({
            ...e,
            ...t,
          }),
        );
      } else {
        ranges.forEach((e) => {
          let pos = e.$from.pos;
          let pos_1 = e.$to.pos;
          state.doc.nodesBetween(pos, pos_1, (e, n) => {
            let s = Math.max(n, pos);
            let a = Math.min(n + e.nodeSize, pos_1);
            if (e.marks.find((e) => e.type === l)) {
              e.marks.forEach((e) => {
                if (l === e.type) {
                  tr.addMark(
                    s,
                    a,
                    l.create({
                      ...e.attrs,
                      ...t,
                    }),
                  );
                }
              });
            } else {
              tr.addMark(s, a, l.create(t));
            }
          });
        });
      }
    }
    return ((e, t, r) => {
      let n;
      let { selection } = t;
      let o = null;
      if (P(selection)) {
        o = selection.$cursor;
      }
      if (o) {
        let t = (n = e.storedMarks) != null ? n : o.marks();
        return (
          o.parent.type.allowsMarkType(r) &&
          (!!r.isInSet(t) || !t.some((e) => e.type.excludes(r)))
        );
      }
      let { ranges } = selection;
      return ranges.some(({ $from, $to }) => {
        let i =
          $from.depth === 0 &&
          e.doc.inlineContent &&
          e.doc.type.allowsMarkType(r);
        e.doc.nodesBetween($from.pos, $to.pos, (e, t, n) => {
          if (i) {
            return false;
          }
          if (e.isInline) {
            let t = !n || n.type.allowsMarkType(r);
            let o =
              !!r.isInSet(e.marks) || !e.marks.some((e) => e.type.excludes(r));
            i = t && o;
          }
          return !i;
        });
        return i;
      });
    })(state, tr, l);
  };
var eD =
  (e, t) =>
  ({ tr }) => {
    tr.setMeta(e, t);
    return true;
  };
var eL =
  (e, t = {}) =>
  ({ state, dispatch, chain }) => {
    let s;
    let a = k(e, state.schema);
    if (state.selection.$anchor.sameParent(state.selection.$head)) {
      s = state.selection.$anchor.parent.attrs;
    }
    if (a.isTextblock) {
      return chain()
        .command(
          ({ commands }) =>
            !!i.y_(a, {
              ...s,
              ...t,
            })(state) || commands.clearNodes(),
        )
        .command(({ state }) =>
          i.y_(a, {
            ...s,
            ...t,
          })(state, dispatch),
        )
        .run();
    }
    console.warn(
      '[tiptap warn]: Currently "setNode()" only supports text block nodes.',
    );
    return false;
  };
var eF =
  (e) =>
  ({ tr, dispatch }) => {
    if (dispatch) {
      let { doc } = tr;
      let n = B(e, 0, doc.content.size);
      let i = o.nh.create(doc, n);
      tr.setSelection(i);
    }
    return true;
  };
var ez =
  (dir, t) =>
  ({ tr, state, dispatch }) => {
    let o;
    let s;
    let { selection } = state;
    if (typeof t === "number") {
      o = t;
      s = t;
    } else if (t && "from" in t && "to" in t) {
      o = t.from;
      s = t.to;
    } else {
      o = selection.from;
      s = selection.to;
    }
    if (dispatch) {
      tr.doc.nodesBetween(o, s, (t, n) => {
        if (!t.isText) {
          tr.setNodeMarkup(n, undefined, {
            ...t.attrs,
            dir,
          });
        }
      });
    }
    return true;
  };
var eV =
  (e) =>
  ({ tr, dispatch }) => {
    if (dispatch) {
      let { doc } = tr;
      let { from, to } =
        typeof e === "number"
          ? {
              from: e,
              to: e,
            }
          : e;
      let s = o.U3.atStart(doc).from;
      let a = o.U3.atEnd(doc).to;
      let l = B(from, s, a);
      let u = B(to, s, a);
      let f = o.U3.create(doc, l, u);
      tr.setSelection(f);
    }
    return true;
  };
var eJ =
  (e) =>
  ({ state, dispatch }) => {
    let n = k(e, state.schema);
    return a.$B(n)(state, dispatch);
  };
function eU(state, splittableMarks) {
  let r =
    state.storedMarks ||
    (state.selection.$to.parentOffset && state.selection.$from.marks());
  if (r) {
    let n = r.filter((e) => {
      if (splittableMarks == null) {
        return undefined;
      }
      return splittableMarks.includes(e.type.name);
    });
    state.tr.ensureMarks(n);
  }
}
var eq =
  ({ keepMarks = true } = {}) =>
  ({ tr, state, dispatch, editor }) => {
    let { selection, doc } = tr;
    let { $from, $to } = selection;
    let c = eC(
      editor.extensionManager.attributes,
      $from.node().type.name,
      $from.node().attrs,
    );
    if (selection instanceof o.nh && selection.node.isBlock) {
      return (
        !!$from.parentOffset &&
        !!n.zy(doc, $from.pos) &&
        (dispatch &&
          (keepMarks && eU(state, editor.extensionManager.splittableMarks),
          tr.split($from.pos).scrollIntoView()),
        true)
      );
    }
    if (!$from.parent.isBlock) {
      return false;
    }
    let p = $to.parentOffset === $to.parent.content.size;
    let d =
      $from.depth === 0
        ? undefined
        : ((e) => {
            for (let t = 0; t < e.edgeCount; t += 1) {
              let { type } = e.edge(t);
              if (type.isTextblock && !type.hasRequiredAttrs()) {
                return type;
              }
            }
            return null;
          })($from.node(-1).contentMatchAt($from.indexAfter(-1)));
    let h =
      p && d
        ? [
            {
              type: d,
              attrs: c,
            },
          ]
        : undefined;
    let m = n.zy(tr.doc, tr.mapping.map($from.pos), 1, h);
    if (
      !h &&
      !m &&
      n.zy(
        tr.doc,
        tr.mapping.map($from.pos),
        1,
        d
          ? [
              {
                type: d,
              },
            ]
          : undefined,
      )
    ) {
      m = true;
      h = d
        ? [
            {
              type: d,
              attrs: c,
            },
          ]
        : undefined;
    }
    if (dispatch) {
      if (
        m &&
        (selection instanceof o.U3 && tr.deleteSelection(),
        tr.split(tr.mapping.map($from.pos), 1, h),
        d && !p && !$from.parentOffset && $from.parent.type !== d)
      ) {
        let e = tr.mapping.map($from.before());
        let r = tr.doc.resolve(e);
        if ($from.node(-1).canReplaceWith(r.index(), r.index() + 1, d)) {
          tr.setNodeMarkup(tr.mapping.map($from.before()), d);
        }
      }
      if (keepMarks) {
        eU(state, editor.extensionManager.splittableMarks);
      }
      tr.scrollIntoView();
    }
    return m;
  };
var eH =
  (e, t = {}) =>
  ({ tr, state, dispatch, editor }) => {
    var u;
    let f = k(e, state.schema);
    let { $from, $to } = state.selection;
    let node = state.selection.node;
    if ((node && node.isBlock) || $from.depth < 2 || !$from.sameParent($to)) {
      return false;
    }
    let h = $from.node(-1);
    if (h.type !== f) {
      return false;
    }
    let attributes = editor.extensionManager.attributes;
    if (
      $from.parent.content.size === 0 &&
      $from.node(-1).childCount === $from.indexAfter(-1)
    ) {
      if (
        $from.depth === 2 ||
        $from.node(-3).type !== f ||
        $from.index(-2) !== $from.node(-2).childCount - 1
      ) {
        return false;
      }
      if (dispatch) {
        let e = s.FK.empty;
        let n = $from.index(-1) ? 1 : $from.index(-2) ? 2 : 3;
        for (let t = $from.depth - n; t >= $from.depth - 3; t -= 1) {
          e = s.FK.from($from.node(t).copy(e));
        }
        let i =
          $from.indexAfter(-1) < $from.node(-2).childCount
            ? 1
            : $from.indexAfter(-2) < $from.node(-3).childCount
              ? 2
              : 3;
        let a = {
          ...eC(attributes, $from.node().type.name, $from.node().attrs),
          ...t,
        };
        let l =
          ((u = f.contentMatch.defaultType) == null
            ? undefined
            : u.createAndFill(a)) || undefined;
        e = e.append(s.FK.from(f.createAndFill(null, l) || undefined));
        let p = $from.before($from.depth - (n - 1));
        tr.replace(p, $from.after(-i), new s.Ji(e, 4 - n, 0));
        let d = -1;
        tr.doc.nodesBetween(p, tr.doc.content.size, (e, t) => {
          if (d > -1) {
            return false;
          }
          if (e.isTextblock && e.content.size === 0) {
            d = t + 1;
          }
        });
        if (d > -1) {
          tr.setSelection(o.U3.near(tr.doc.resolve(d)));
        }
        tr.scrollIntoView();
      }
      return true;
    }
    let y = $to.pos === $from.end() ? h.contentMatchAt(0).defaultType : null;
    let v = {
      ...eC(attributes, h.type.name, h.attrs),
      ...t,
    };
    let g = {
      ...eC(attributes, $from.node().type.name, $from.node().attrs),
      ...t,
    };
    tr.delete($from.pos, $to.pos);
    let b = y
      ? [
          {
            type: f,
            attrs: v,
          },
          {
            type: y,
            attrs: g,
          },
        ]
      : [
          {
            type: f,
            attrs: v,
          },
        ];
    if (!n.zy(tr.doc, $from.pos, 2)) {
      return false;
    }
    if (dispatch) {
      let { selection, storedMarks } = state;
      let { splittableMarks } = editor.extensionManager;
      let o =
        storedMarks || (selection.$to.parentOffset && selection.$from.marks());
      tr.split($from.pos, 2, b).scrollIntoView();
      if (!o || !dispatch) {
        return true;
      }
      let s = o.filter((e) => splittableMarks.includes(e.type.name));
      tr.ensureMarks(s);
    }
    return true;
  };
const eW = (e, t) => {
  let r = eg((e) => e.type === t)(e.selection);
  if (!r) {
    return true;
  }
  let i = e.doc.resolve(Math.max(0, r.pos - 1)).before(r.depth);
  if (i === undefined) {
    return true;
  }
  let o = e.doc.nodeAt(i);
  return (
    !(r.node.type === (o == null ? undefined : o.type) && n.n9(e.doc, r.pos)) ||
    (e.join(r.pos), true)
  );
};
const eK = (e, t) => {
  let r = eg((e) => e.type === t)(e.selection);
  if (!r) {
    return true;
  }
  let i = e.doc.resolve(r.start).after(r.depth);
  if (i === undefined) {
    return true;
  }
  let o = e.doc.nodeAt(i);
  return (
    !(r.node.type === (o == null ? undefined : o.type) && n.n9(e.doc, i)) ||
    (e.join(i), true)
  );
};
var eX =
  (e, t, r, n = {}) =>
  ({ editor, tr, state, dispatch, chain, commands, can }) => {
    let { extensions, splittableMarks } = editor.extensionManager;
    let h = k(e, state.schema);
    let m = k(t, state.schema);
    let { selection, storedMarks } = state;
    let { $from, $to } = selection;
    let w = $from.blockRange($to);
    let x =
      storedMarks || (selection.$to.parentOffset && selection.$from.marks());
    if (!w) {
      return false;
    }
    let O = eg((e) => eB(e.type.name, extensions))(selection);
    let _ = selection.from === 0 && selection.to === state.doc.content.size;
    let content = state.doc.content.content;
    let j = content.length === 1 ? content[0] : null;
    let A =
      _ && j && eB(j.type.name, extensions)
        ? {
            node: j,
            pos: 0,
            depth: 0,
          }
        : null;
    let S = O != null ? O : A;
    let T = !!O && w.depth >= 1 && w.depth - O.depth <= 1;
    let M = !!A;
    if ((T || M) && S) {
      if (S.node.type === h) {
        if (_ && M) {
          return chain()
            .command(({ tr, dispatch }) => {
              let r = ((e) => {
                let e_doc = e.doc;
                let t_firstChild = e_doc.firstChild;
                if (!t_firstChild) {
                  return null;
                }
                let n = t_firstChild.nodeSize - 1;
                return o.U3.create(e_doc, 1, n);
              })(tr);
              return (
                !!r && (tr.setSelection(r), dispatch && dispatch(tr), true)
              );
            })
            .liftListItem(m)
            .run();
        }
        return commands.liftListItem(m);
      }
      if (eB(S.node.type.name, extensions) && h.validContent(S.node.content)) {
        return chain()
          .command(() => {
            tr.setNodeMarkup(S.pos, h);
            return true;
          })
          .command(() => eW(tr, h))
          .command(() => eK(tr, h))
          .run();
      }
    }
    if (r && x && dispatch) {
      return chain()
        .command(() => {
          let e = can().wrapInList(h, n);
          let t = x.filter((e) => splittableMarks.includes(e.type.name));
          tr.ensureMarks(t);
          return !!e || commands.clearNodes();
        })
        .wrapInList(h, n)
        .command(() => eW(tr, h))
        .command(() => eK(tr, h))
        .run();
    }
    return chain()
      .command(() => !!can().wrapInList(h, n) || commands.clearNodes())
      .wrapInList(h, n)
      .command(() => eW(tr, h))
      .command(() => eK(tr, h))
      .run();
  };
var eZ =
  (e, t = {}, r = {}) =>
  ({ state, commands }) => {
    let { extendEmptyMarkRange = false } = r;
    let s = R(e, state.schema);
    if (
      !((e, t, r = {}) => {
        let { empty, ranges } = e.selection;
        let o = t ? R(t, e.schema) : null;
        if (empty) {
          return !!(e.storedMarks || e.selection.$from.marks())
            .filter((e) => !o || o.name === e.type.name)
            .find((e) =>
              S(e.attrs, r, {
                strict: false,
              }),
            );
        }
        let s = 0;
        let a = [];
        ranges.forEach(({ $from, $to }) => {
          let $from_pos = $from.pos;
          let $to_pos = $to.pos;
          e.doc.nodesBetween($from_pos, $to_pos, (e, t) => {
            if (o && e.inlineContent && !e.type.allowsMarkType(o)) {
              return false;
            }
            if (!e.isText && !e.marks.length) {
              return;
            }
            let r = Math.max($from_pos, t);
            let l = Math.min($to_pos, t + e.nodeSize);
            s += l - r;
            a.push(
              ...e.marks.map((mark) => ({
                mark,
                from: r,
                to: l,
              })),
            );
          });
        });
        if (s === 0) {
          return false;
        }
        let l = a
          .filter((e) => !o || o.name === e.mark.type.name)
          .filter((e) =>
            S(e.mark.attrs, r, {
              strict: false,
            }),
          )
          .reduce((acc, item) => acc + item.to - item.from, 0);
        let u = a
          .filter((e) => !o || (e.mark.type !== o && e.mark.type.excludes(o)))
          .reduce((acc, item) => acc + item.to - item.from, 0);
        return (l > 0 ? l + u : l) >= s;
      })(state, s, t)
    ) {
      return commands.setMark(s, t);
    }
    return commands.unsetMark(s, {
      extendEmptyMarkRange,
    });
  };
var eQ =
  (e, t, r = {}) =>
  ({ state, commands }) => {
    let o;
    let s = k(e, state.schema);
    let a = k(t, state.schema);
    let l = er(state, s, r);
    if (state.selection.$anchor.sameParent(state.selection.$head)) {
      o = state.selection.$anchor.parent.attrs;
    }
    if (l) {
      return commands.setNode(a, o);
    }
    return commands.setNode(s, {
      ...o,
      ...r,
    });
  };
var eG =
  (e, t = {}) =>
  ({ state, commands }) => {
    let i = k(e, state.schema);
    if (er(state, i, t)) {
      return commands.lift(i);
    }
    return commands.wrapIn(i, t);
  };
var eY =
  () =>
  ({ state, dispatch }) => {
    let state_plugins = state.plugins;
    for (let n = 0; n < state_plugins.length; n += 1) {
      let i;
      let state_plugin = state_plugins[n];
      if (
        state_plugin.spec.isInputRules &&
        (i = state_plugin.getState(state))
      ) {
        if (dispatch) {
          let t = state.tr;
          let r = i.transform;
          for (let e = r.steps.length - 1; e >= 0; e -= 1) {
            t.step(r.steps[e].invert(r.docs[e]));
          }
          if (i.text) {
            let r = t.doc.resolve(i.from).marks();
            t.replaceWith(i.from, i.to, state.schema.text(i.text, r));
          } else {
            t.delete(i.from, i.to);
          }
        }
        return true;
      }
    }
    return false;
  };
var e0 =
  () =>
  ({ tr, dispatch }) => {
    let { selection } = tr;
    let { empty, ranges } = selection;
    return (
      !!empty ||
      (dispatch &&
        ranges.forEach((t) => {
          tr.removeMark(t.$from.pos, t.$to.pos);
        }),
      true)
    );
  };
var e1 =
  (e, t = {}) =>
  ({ tr, state, dispatch }) => {
    var o;
    let { extendEmptyMarkRange = false } = t;
    let { selection } = tr;
    let l = R(e, state.schema);
    let { $from, empty, ranges } = selection;
    if (!dispatch) {
      return true;
    }
    if (empty && extendEmptyMarkRange) {
      let { from, to } = selection;
      let n =
        (o = $from.marks().find((e) => e.type === l)) == null
          ? undefined
          : o.attrs;
      let i = N($from, l, n);
      if (i) {
        from = i.from;
        to = i.to;
      }
      tr.removeMark(from, to, l);
    } else {
      ranges.forEach((e) => {
        tr.removeMark(e.$from.pos, e.$to.pos, l);
      });
    }
    tr.removeStoredMark(l);
    return true;
  };
var e2 =
  (e) =>
  ({ tr, state, dispatch }) => {
    let i;
    let o;
    let { selection } = state;
    if (typeof e === "number") {
      i = e;
      o = e;
    } else if (e && "from" in e && "to" in e) {
      i = e.from;
      o = e.to;
    } else {
      i = selection.from;
      o = selection.to;
    }
    if (dispatch) {
      tr.doc.nodesBetween(i, o, (e, r) => {
        if (e.isText) {
          return;
        }
        let n = {
          ...e.attrs,
        };
        delete n.dir;
        tr.setNodeMarkup(r, undefined, n);
      });
    }
    return true;
  };
var e3 =
  (e, t = {}) =>
  ({ tr, state, dispatch }) => {
    let o = null;
    let s = null;
    let a = ea(typeof e === "string" ? e : e.name, state.schema);
    if (!a) {
      return false;
    }
    if (a === "node") {
      o = k(e, state.schema);
    }
    if (a === "mark") {
      s = R(e, state.schema);
    }
    let l = false;
    tr.selection.ranges.forEach((e) => {
      let a;
      let u;
      let f;
      let c;
      let pos = e.$from.pos;
      let pos_1 = e.$to.pos;
      if (tr.selection.empty) {
        state.doc.nodesBetween(pos, pos_1, (e, t) => {
          if (o && o === e.type) {
            l = true;
            f = Math.max(t, pos);
            c = Math.min(t + e.nodeSize, pos_1);
            a = t;
            u = e;
          }
        });
      } else {
        state.doc.nodesBetween(pos, pos_1, (e, n) => {
          if (n < pos && o && o === e.type) {
            l = true;
            f = Math.max(n, pos);
            c = Math.min(n + e.nodeSize, pos_1);
            a = n;
            u = e;
          }
          if (n >= pos && n <= pos_1) {
            if (o && o === e.type) {
              l = true;
              if (dispatch) {
                tr.setNodeMarkup(n, undefined, {
                  ...e.attrs,
                  ...t,
                });
              }
            }
            if (s && e.marks.length) {
              e.marks.forEach((o) => {
                if (s === o.type && ((l = true), dispatch)) {
                  let i = Math.max(n, pos);
                  let a = Math.min(n + e.nodeSize, pos_1);
                  tr.addMark(
                    i,
                    a,
                    s.create({
                      ...o.attrs,
                      ...t,
                    }),
                  );
                }
              });
            }
          }
        });
      }
      if (u) {
        if (a !== undefined && dispatch) {
          tr.setNodeMarkup(a, undefined, {
            ...u.attrs,
            ...t,
          });
        }
        if (s && u.marks.length) {
          u.marks.forEach((e) => {
            if (s === e.type && dispatch) {
              tr.addMark(
                f,
                c,
                s.create({
                  ...e.attrs,
                  ...t,
                }),
              );
            }
          });
        }
      }
    });
    return l;
  };
var e6 =
  (e, t = {}) =>
  ({ state, dispatch }) => {
    let o = k(e, state.schema);
    return i.Im(o, t)(state, dispatch);
  };
var e4 =
  (e, t = {}) =>
  ({ state, dispatch }) => {
    let i = k(e, state.schema);
    return a.Sd(i, t)(state, dispatch);
  };
function e8(e) {
  let t;
  let { editor, from, to, text, rules, plugin } = e;
  let { view } = editor;
  if (view.composing) {
    return false;
  }
  let u = view.state.doc.resolve(from);
  if (
    u.parent.type.spec.code ||
    ((t = u.nodeBefore || u.nodeAfter) == null
      ? undefined
      : t.marks.find((e) => e.type.spec.code))
  ) {
    return false;
  }
  let f = false;
  let d =
    ((e, t = 500) => {
      let r = "";
      let e_parentOffset = e.parentOffset;
      e.parent.nodesBetween(
        Math.max(0, e_parentOffset - t),
        e_parentOffset,
        (e, t, parent, o) => {
          var s;
          var a;
          let l =
            ((a = (s = e.type.spec).toText) == null
              ? undefined
              : a.call(s, {
                  node: e,
                  pos: t,
                  parent,
                  index: o,
                })) ||
            e.textContent ||
            "%leaf%";
          r +=
            e.isAtom && !e.isText
              ? l
              : l.slice(0, Math.max(0, e_parentOffset - t));
        },
      );
      return r;
    })(u) + text;
  rules.forEach((e) => {
    if (f) {
      return;
    }
    let t = ((e, t) => {
      if (A(t)) {
        return t.exec(e);
      }
      let r = t(e);
      if (!r) {
        return null;
      }
      let n = [r.text];
      n.index = r.index;
      n.input = e;
      n.data = r.data;
      if (r.replaceWith) {
        if (!r.text.includes(r.replaceWith)) {
          console.warn(
            '[tiptap warn]: "inputRuleMatch.replaceWith" must be part of "inputRuleMatch.text".',
          );
        }
        n.push(r.replaceWith);
      }
      return n;
    })(d, e.find);
    if (!t) {
      return;
    }
    let s = view.state.tr;
    let u = c({
      state: view.state,
      transaction: s,
    });
    let h = {
      from: from - (t[0].length - text.length),
      to,
    };
    let { commands, chain, can } = new p({
      editor,
      state: u,
    });
    if (
      e.handler({
        state: u,
        range: h,
        match: t,
        commands,
        chain,
        can,
      }) !== null &&
      s.steps.length
    ) {
      if (e.undoable) {
        s.setMeta(plugin, {
          transform: s,
          from,
          to,
          text,
        });
      }
      view.dispatch(s);
      f = true;
    }
  });
  return f;
}
function e5(e) {
  return (
    Object.prototype.toString.call(e).slice(8, -1) === "Object" &&
    e.constructor === Object &&
    Object.getPrototypeOf(e) === Object.prototype
  );
}
class e7 {
  constructor(e = {}) {
    this.type = "extendable";
    this.parent = null;
    this.child = null;
    this.name = "";
    this.config = {
      name: this.name,
    };
    this.config = {
      ...this.config,
      ...e,
    };
    this.name = this.config.name;
  }
  get options() {
    return {
      ...(ex(
        eb(this, "addOptions", {
          name: this.name,
        }),
      ) || {}),
    };
  }
  get storage() {
    return {
      ...(ex(
        eb(this, "addStorage", {
          name: this.name,
          options: this.options,
        }),
      ) || {}),
    };
  }
  configure(e = {}) {
    let t = this.extend({
      ...this.config,
      addOptions: () =>
        (function e(t, r) {
          let n = {
            ...t,
          };
          if (e5(t) && e5(r)) {
            Object.keys(r).forEach((i) => {
              if (e5(r[i]) && e5(t[i])) {
                n[i] = e(t[i], r[i]);
              } else {
                n[i] = r[i];
              }
            });
          }
          return n;
        })(this.options, e),
    });
    t.name = this.name;
    t.parent = this.parent;
    return t;
  }
  extend(e = {}) {
    let t = new this.constructor({
      ...this.config,
      ...e,
    });
    t.parent = this;
    this.child = t;
    t.name = "name" in e ? e.name : t.parent.name;
    return t;
  }
}
const e9 = class e extends e7 {
  constructor() {
    super(...arguments);
    this.type = "mark";
  }
  static create(t = {}) {
    return new e(typeof t === "function" ? t() : t);
  }
  static handleExit({ editor, mark }) {
    let { tr } = editor.state;
    let $from = editor.state.selection.$from;
    if ($from.pos === $from.end()) {
      let i = $from.marks();
      if (!i.find((e) => (e == null ? undefined : e.type.name) === mark.name)) {
        return false;
      }
      let o = i.find(
        (e) => (e == null ? undefined : e.type.name) === mark.name,
      );
      if (o) {
        tr.removeStoredMark(o);
      }
      tr.insertText(" ", $from.pos);
      editor.view.dispatch(tr);
      return true;
    }
    return false;
  }
  configure(e) {
    return super.configure(e);
  }
  extend(e) {
    let t = typeof e === "function" ? e() : e;
    return super.extend(t);
  }
};
let te = null;
class tt {
  constructor(e, t) {
    this.splittableMarks = [];
    this.editor = t;
    this.baseExtensions = e;
    this.extensions = eR(e);
    this.schema = ((e, editor) => {
      let r;
      let n = e_(e);
      let { nodeExtensions, markExtensions } = eO(e);
      let topNode =
        (r = nodeExtensions.find((e) => eb(e, "topNode"))) == null
          ? undefined
          : r.name;
      let nodes = Object.fromEntries(
        nodeExtensions.map((r) => {
          let i = n.filter((e) => e.type === r.name);
          let o = {
            name: r.name,
            options: r.options,
            storage: r.storage,
            editor,
          };
          let s = eT({
            ...e.reduce((acc, item) => {
              let n = eb(item, "extendNodeSchema", o);
              return {
                ...acc,
                ...(n ? n(r) : {}),
              };
            }, {}),
            content: ex(eb(r, "content", o)),
            marks: ex(eb(r, "marks", o)),
            group: ex(eb(r, "group", o)),
            inline: ex(eb(r, "inline", o)),
            atom: ex(eb(r, "atom", o)),
            selectable: ex(eb(r, "selectable", o)),
            draggable: ex(eb(r, "draggable", o)),
            code: ex(eb(r, "code", o)),
            whitespace: ex(eb(r, "whitespace", o)),
            linebreakReplacement: ex(eb(r, "linebreakReplacement", o)),
            defining: ex(eb(r, "defining", o)),
            isolating: ex(eb(r, "isolating", o)),
            attrs: Object.fromEntries(i.map(eM)),
          });
          let a = ex(eb(r, "parseHTML", o));
          if (a) {
            s.parseDOM = a.map((e) => eS(e, i));
          }
          let l = eb(r, "renderHTML", o);
          if (l) {
            s.toDOM = (e) =>
              l({
                node: e,
                HTMLAttributes: eA(e, i),
              });
          }
          let u = eb(r, "renderText", o);
          if (u) {
            s.toText = u;
          }
          return [r.name, s];
        }),
      );
      let marks = Object.fromEntries(
        markExtensions.map((r) => {
          let i = n.filter((e) => e.type === r.name);
          let o = {
            name: r.name,
            options: r.options,
            storage: r.storage,
            editor,
          };
          let s = eT({
            ...e.reduce((acc, item) => {
              let n = eb(item, "extendMarkSchema", o);
              return {
                ...acc,
                ...(n ? n(r) : {}),
              };
            }, {}),
            inclusive: ex(eb(r, "inclusive", o)),
            excludes: ex(eb(r, "excludes", o)),
            group: ex(eb(r, "group", o)),
            spanning: ex(eb(r, "spanning", o)),
            code: ex(eb(r, "code", o)),
            attrs: Object.fromEntries(i.map(eM)),
          });
          let a = ex(eb(r, "parseHTML", o));
          if (a) {
            s.parseDOM = a.map((e) => eS(e, i));
          }
          let l = eb(r, "renderHTML", o);
          if (l) {
            s.toDOM = (e) =>
              l({
                mark: e,
                HTMLAttributes: eA(e, i),
              });
          }
          return [r.name, s];
        }),
      );
      return new s.Sj({
        topNode,
        nodes,
        marks,
      });
    })(this.extensions, t);
    this.setupExtensions();
  }
  get commands() {
    return this.extensions.reduce((acc, extension) => {
      let r = {
        name: extension.name,
        options: extension.options,
        storage: this.editor.extensionStorage[extension.name],
        editor: this.editor,
        type: eI(extension.name, this.schema),
      };
      let n = eb(extension, "addCommands", r);
      if (n) {
        return {
          ...acc,
          ...n(),
        };
      }
      return acc;
    }, {});
  }
  get plugins() {
    let { editor } = this;
    return eN([...this.extensions].reverse()).flatMap((t) => {
      let r = {
        name: t.name,
        options: t.options,
        storage: this.editor.extensionStorage[t.name],
        editor,
        type: eI(t.name, this.schema),
      };
      let n = [];
      let i = eb(t, "addKeyboardShortcuts", r);
      let a = {};
      if (t.type === "mark" && eb(t, "exitable", r)) {
        a.ArrowRight = () =>
          e9.handleExit({
            editor,
            mark: t,
          });
      }
      if (i) {
        let t = Object.fromEntries(
          Object.entries(i()).map(([t, r]) => [
            t,
            () =>
              r({
                editor,
              }),
          ]),
        );
        a = {
          ...a,
          ...t,
        };
      }
      let u = l.w(a);
      n.push(u);
      let f = eb(t, "addInputRules", r);
      if (eP(t, editor.options.enableInputRules) && f) {
        let t = f();
        if (t && t.length) {
          let r = ((e) => {
            let { editor, rules } = e;
            let plugin = new o.k_({
              state: {
                init: () => null,
                apply(e, i, o) {
                  let a = e.getMeta(plugin);
                  if (a) {
                    return a;
                  }
                  let l = e.getMeta("applyInputRules");
                  if (l) {
                    setTimeout(() => {
                      let { text } = l;
                      if (typeof text !== "string") {
                        text = ek(s.FK.from(text), o.schema);
                      }
                      let { from } = l;
                      let a = from + text.length;
                      e8({
                        editor,
                        from,
                        to: a,
                        text,
                        rules,
                        plugin,
                      });
                    });
                  }
                  if (e.selectionSet || e.docChanged) {
                    return null;
                  }
                  return i;
                },
              },
              props: {
                handleTextInput: (e, i, o, text) =>
                  e8({
                    editor,
                    from: i,
                    to: o,
                    text,
                    rules,
                    plugin,
                  }),
                handleDOMEvents: {
                  compositionend: (e) => {
                    setTimeout(() => {
                      let { $cursor } = e.state.selection;
                      if ($cursor) {
                        e8({
                          editor,
                          from: $cursor.pos,
                          to: $cursor.pos,
                          text: "",
                          rules,
                          plugin,
                        });
                      }
                    });
                    return false;
                  },
                },
                handleKeyDown(e, i) {
                  if (i.key !== "Enter") {
                    return false;
                  }
                  let { $cursor } = e.state.selection;
                  return (
                    !!$cursor &&
                    e8({
                      editor,
                      from: $cursor.pos,
                      to: $cursor.pos,
                      text: "\n",
                      rules,
                      plugin,
                    })
                  );
                },
              },
              isInputRules: true,
            });
            return plugin;
          })({
            editor,
            rules: t,
          });
          let i = Array.isArray(r) ? r : [r];
          n.push(...i);
        }
      }
      let d = eb(t, "addPasteRules", r);
      if (eP(t, editor.options.enablePasteRules) && d) {
        let t = d();
        if (t && t.length) {
          let r = ((e) => {
            let dropEvent;
            let { editor, rules } = e;
            let i = null;
            let a = false;
            let l = false;
            let pasteEvt_1 =
              typeof ClipboardEvent !== "undefined"
                ? new ClipboardEvent("paste")
                : null;
            try {
              dropEvent =
                typeof DragEvent !== "undefined" ? new DragEvent("drop") : null;
            } catch {
              dropEvent = null;
            }
            let f = ({ state, from, to, rule, pasteEvt }) => {
              let state_tr = state.tr;
              if (
                ((e) => {
                  let { editor, state, from, to, rule, pasteEvent, dropEvent } =
                    e;
                  let { commands, chain, can } = new p({
                    editor,
                    state,
                  });
                  let c = [];
                  state.doc.nodesBetween(from, to, (e, t) => {
                    var p;
                    var d;
                    var h;
                    var m;
                    var y;
                    if (
                      ((d = (p = e.type) == null ? undefined : p.spec) == null
                        ? undefined
                        : d.code) ||
                      !(e.isText || e.isTextblock || e.isInline)
                    ) {
                      return;
                    }
                    let v =
                      (y =
                        (m = (h = e.content) == null ? undefined : h.size) !=
                        null
                          ? m
                          : e.nodeSize) != null
                        ? y
                        : 0;
                    let g = Math.max(from, t);
                    let b = Math.min(to, t + v);
                    if (!(g >= b)) {
                      ((e, t, r) => {
                        if (A(t)) {
                          return [...e.matchAll(t)];
                        }
                        let n = t(e, r);
                        if (n) {
                          return n.map((t) => {
                            let r = [t.text];
                            r.index = t.index;
                            r.input = e;
                            r.data = t.data;
                            if (t.replaceWith) {
                              if (!t.text.includes(t.replaceWith)) {
                                console.warn(
                                  '[tiptap warn]: "pasteRuleMatch.replaceWith" must be part of "pasteRuleMatch.text".',
                                );
                              }
                              r.push(t.replaceWith);
                            }
                            return r;
                          });
                        }
                        return [];
                      })(
                        e.isText
                          ? e.text || ""
                          : e.textBetween(g - t, b - t, undefined, "\uFFFC"),
                        rule.find,
                        pasteEvent,
                      ).forEach((e) => {
                        if (e.index === undefined) {
                          return;
                        }
                        let t = g + e.index + 1;
                        let n = t + e[0].length;
                        let i = {
                          from: state.tr.mapping.map(t),
                          to: state.tr.mapping.map(n),
                        };
                        let p = rule.handler({
                          state,
                          range: i,
                          match: e,
                          commands,
                          chain,
                          can,
                          pasteEvent,
                          dropEvent,
                        });
                        c.push(p);
                      });
                    }
                  });
                  return c.every((e) => e !== null);
                })({
                  editor,
                  state: c({
                    state,
                    transaction: state_tr,
                  }),
                  from: Math.max(from - 1, 0),
                  to: to.b - 1,
                  rule,
                  pasteEvent: pasteEvt,
                  dropEvent,
                }) &&
                state_tr.steps.length
              ) {
                try {
                  dropEvent =
                    typeof DragEvent !== "undefined"
                      ? new DragEvent("drop")
                      : null;
                } catch {
                  dropEvent = null;
                }
                pasteEvt_1 =
                  typeof ClipboardEvent !== "undefined"
                    ? new ClipboardEvent("paste")
                    : null;
                return state_tr;
              }
            };
            return rules.map(
              (rule) =>
                new o.k_({
                  view(e) {
                    let t = (t) => {
                      var n;
                      if (
                        (i = (
                          (n = e.dom.parentElement) == null
                            ? undefined
                            : n.contains(t.target)
                        )
                          ? e.dom.parentElement
                          : null)
                      ) {
                        te = editor;
                      }
                    };
                    let n = () => {
                      if (te) {
                        te = null;
                      }
                    };
                    window.addEventListener("dragstart", t);
                    window.addEventListener("dragend", n);
                    return {
                      destroy() {
                        window.removeEventListener("dragstart", t);
                        window.removeEventListener("dragend", n);
                      },
                    };
                  },
                  props: {
                    handleDOMEvents: {
                      drop: (e, r) => {
                        l = i === e.dom.parentElement;
                        dropEvent = r;
                        if (!l) {
                          let e = te;
                          if (e == null ? undefined : e.isEditable) {
                            setTimeout(() => {
                              let selection = e.state.selection;
                              if (selection) {
                                e.commands.deleteRange({
                                  from: selection.from,
                                  to: selection.to,
                                });
                              }
                            }, 10);
                          }
                        }
                        return false;
                      },
                      paste: (e, t) => {
                        var r;
                        let n =
                          (r = t.clipboardData) == null
                            ? undefined
                            : r.getData("text/html");
                        pasteEvt_1 = t;
                        a = !!(n == null
                          ? undefined
                          : n.includes("data-pm-slice"));
                        return false;
                      },
                    },
                  },
                  appendTransaction: (t, r, n) => {
                    let i = t[0];
                    let o = i.getMeta("uiEvent") === "paste" && !a;
                    let c = i.getMeta("uiEvent") === "drop" && !l;
                    let p = i.getMeta("applyPasteRules");
                    let d = !!p;
                    if (!o && !c && !d) {
                      return;
                    }
                    if (d) {
                      var h;
                      var m;
                      let t;
                      let { text } = p;
                      if (typeof text !== "string") {
                        text = ek(s.FK.from(text), n.schema);
                      }
                      let { from } = p;
                      let b_1 = from + text.length;
                      return f({
                        rule,
                        state: n,
                        from,
                        to: {
                          b: b_1,
                        },
                        pasteEvt:
                          ((h = text),
                          (m = (t = new ClipboardEvent("paste", {
                            clipboardData: new DataTransfer(),
                          })).clipboardData) == null ||
                            m.setData("text/html", h),
                          t),
                      });
                    }
                    let y = r.doc.content.findDiffStart(n.doc.content);
                    let v = r.doc.content.findDiffEnd(n.doc.content);
                    if (typeof y === "number" && v && y !== v.b) {
                      return f({
                        rule,
                        state: n,
                        from: y,
                        to: v,
                        pasteEvt: pasteEvt_1,
                      });
                    }
                  },
                }),
            );
          })({
            editor,
            rules: t,
          });
          n.push(...r);
        }
      }
      let h = eb(t, "addProseMirrorPlugins", r);
      if (h) {
        let e = h();
        n.push(...e);
      }
      return n;
    });
  }
  get attributes() {
    return e_(this.extensions);
  }
  get nodeViews() {
    let { editor } = this;
    let { nodeExtensions } = eO(this.extensions);
    return Object.fromEntries(
      nodeExtensions
        .filter((e) => !!eb(e, "addNodeView"))
        .map((t) => {
          let r = this.attributes.filter((e) => e.type === t.name);
          let n = {
            name: t.name,
            options: t.options,
            storage: this.editor.extensionStorage[t.name],
            editor,
            type: k(t.name, this.schema),
          };
          let i = eb(t, "addNodeView", n);
          if (!i) {
            return [];
          }
          let o = i();
          if (o) {
            return [
              t.name,
              (n, i, getPos, decorations, innerDecorations) => {
                let u = eA(n, r);
                return o({
                  node: n,
                  view: i,
                  getPos,
                  decorations,
                  innerDecorations,
                  editor,
                  extension: t,
                  HTMLAttributes: u,
                });
              },
            ];
          }
          return [];
        }),
    );
  }
  dispatchTransaction(e) {
    let { editor } = this;
    return eN([...this.extensions].reverse()).reduceRight((next, item) => {
      let n = {
        name: item.name,
        options: item.options,
        storage: this.editor.extensionStorage[item.name],
        editor,
        type: eI(item.name, this.schema),
      };
      let i = eb(item, "dispatchTransaction", n);
      if (i) {
        return (transaction) => {
          i.call(n, {
            transaction,
            next,
          });
        };
      }
      return next;
    }, e);
  }
  transformPastedHTML(e) {
    let { editor } = this;
    return eN([...this.extensions]).reduce(
      (acc, item) => {
        let n = {
          name: item.name,
          options: item.options,
          storage: this.editor.extensionStorage[item.name],
          editor,
          type: eI(item.name, this.schema),
        };
        let i = eb(item, "transformPastedHTML", n);
        if (i) {
          return (t, r) => {
            let o = acc(t, r);
            return i.call(n, o);
          };
        }
        return acc;
      },
      e || ((e) => e),
    );
  }
  get markViews() {
    let { editor } = this;
    let { markExtensions } = eO(this.extensions);
    return Object.fromEntries(
      markExtensions
        .filter((e) => !!eb(e, "addMarkView"))
        .map((t) => {
          let r = this.attributes.filter((e) => e.type === t.name);
          let n = {
            name: t.name,
            options: t.options,
            storage: this.editor.extensionStorage[t.name],
            editor,
            type: R(t.name, this.schema),
          };
          let i = eb(t, "addMarkView", n);
          if (i) {
            return [
              t.name,
              (n, o, inline) => {
                let a = eA(n, r);
                return i()({
                  mark: n,
                  view: o,
                  inline,
                  editor,
                  extension: t,
                  HTMLAttributes: a,
                  updateAttributes: (t) => {
                    ((e, t, r = {}) => {
                      let { state } = t;
                      let { doc, tr } = state;
                      doc.descendants((t, n) => {
                        let i = tr.mapping.map(n);
                        let s = tr.mapping.map(n) + t.nodeSize;
                        let a = null;
                        t.marks.forEach((t) => {
                          if (t !== e) {
                            return false;
                          }
                          a = t;
                        });
                        if (!a) {
                          return;
                        }
                        let l = false;
                        Object.keys(r).forEach((e) => {
                          if (r[e] !== a.attrs[e]) {
                            l = true;
                          }
                        });
                        if (l) {
                          let t = e.type.create({
                            ...e.attrs,
                            ...r,
                          });
                          tr.removeMark(i, s, e.type);
                          tr.addMark(i, s, t);
                        }
                      });
                      if (tr.docChanged) {
                        t.view.dispatch(tr);
                      }
                    })(n, editor, t);
                  },
                });
              },
            ];
          }
          return [];
        }),
    );
  }
  setupExtensions() {
    let extensions = this.extensions;
    this.editor.extensionStorage = Object.fromEntries(
      extensions.map((e) => [e.name, e.storage]),
    );
    extensions.forEach((e) => {
      var t;
      let r = {
        name: e.name,
        options: e.options,
        storage: this.editor.extensionStorage[e.name],
        editor: this.editor,
        type: eI(e.name, this.schema),
      };
      if (
        e.type === "mark" &&
        ((t = ex(eb(e, "keepOnSplit", r))) == null || t)
      ) {
        this.splittableMarks.push(e.name);
      }
      let n = eb(e, "onBeforeCreate", r);
      let i = eb(e, "onCreate", r);
      let o = eb(e, "onUpdate", r);
      let s = eb(e, "onSelectionUpdate", r);
      let a = eb(e, "onTransaction", r);
      let l = eb(e, "onFocus", r);
      let u = eb(e, "onBlur", r);
      let f = eb(e, "onDestroy", r);
      if (n) {
        this.editor.on("beforeCreate", n);
      }
      if (i) {
        this.editor.on("create", i);
      }
      if (o) {
        this.editor.on("update", o);
      }
      if (s) {
        this.editor.on("selectionUpdate", s);
      }
      if (a) {
        this.editor.on("transaction", a);
      }
      if (l) {
        this.editor.on("focus", l);
      }
      if (u) {
        this.editor.on("blur", u);
      }
      if (f) {
        this.editor.on("destroy", f);
      }
    });
  }
}
tt.resolve = eR;
tt.sort = eN;
tt.flatten = ew;
f(
  {},
  {
    ClipboardTextSerializer: () => tn,
    Commands: () => ti,
    Delete: () => to,
    Drop: () => ts,
    Editable: () => ta,
    FocusEvents: () => tu,
    Keymap: () => tf,
    Paste: () => tc,
    Tabindex: () => tp,
    TextDirection: () => td,
    focusEventsPluginKey: () => tl,
  },
);
const tr = class e extends e7 {
  constructor() {
    super(...arguments);
    this.type = "extension";
  }
  static create(t = {}) {
    return new e(typeof t === "function" ? t() : t);
  }
  configure(e) {
    return super.configure(e);
  }
  extend(e) {
    let t = typeof e === "function" ? e() : e;
    return super.extend(t);
  }
};
var tn = tr.create({
  name: "clipboardTextSerializer",
  addOptions: () => ({
    blockSeparator: undefined,
  }),
  addProseMirrorPlugins() {
    return [
      new o.k_({
        key: new o.hs("clipboardTextSerializer"),
        props: {
          clipboardTextSerializer: () => {
            let { editor } = this;
            let { state, schema } = editor;
            let { doc, selection } = state;
            let { ranges } = selection;
            let s = Math.min(...ranges.map((e) => e.$from.pos));
            let a = Math.max(...ranges.map((e) => e.$to.pos));
            let textSerializers = Object.fromEntries(
              Object.entries(schema.nodes)
                .filter(([, e]) => e.spec.toText)
                .map(([e, t]) => [e, t.spec.toText]),
            );
            return ((e, t, r) => {
              let { from, to } = t;
              let { blockSeparator = "\n\n", textSerializers = {} } = r || {};
              let a = "";
              e.nodesBetween(from, to, (e, r, l, u) => {
                var f;
                if (e.isBlock && r > from) {
                  a += blockSeparator;
                }
                let c =
                  textSerializers == null
                    ? undefined
                    : textSerializers[e.type.name];
                if (c) {
                  if (l) {
                    a += c({
                      node: e,
                      pos: r,
                      parent: l,
                      index: u,
                      range: t,
                    });
                  }
                  return false;
                }
                if (e.isText) {
                  a +=
                    (f = e == null ? undefined : e.text) == null
                      ? undefined
                      : f.slice(Math.max(from, r) - r, to - r);
                }
              });
              return a;
            })(
              doc,
              {
                from: s,
                to: a,
              },
              {
                ...(this.options.blockSeparator !== undefined
                  ? {
                      blockSeparator: this.options.blockSeparator,
                    }
                  : {}),
                textSerializers,
              },
            );
          },
        },
      }),
    ];
  },
});
var ti = tr.create({
  name: "commands",
  addCommands: () => ({
    ...d,
  }),
});
var to = tr.create({
  name: "delete",
  onUpdate({ transaction, appendedTransactions }) {
    let r;
    let i;
    let o;
    let s = () => {
      var r;
      var i;
      var o;
      var s;
      var a;
      var l;
      let u;
      if (
        (s =
          (o =
            (i =
              (r = this.editor.options.coreExtensionOptions) == null
                ? undefined
                : r.delete) == null
              ? undefined
              : i.filterTransaction) == null
            ? undefined
            : o.call(i, transaction)) != null
          ? s
          : transaction.getMeta("y-sync$")
      ) {
        return;
      }
      a = transaction.before;
      l = [transaction, ...appendedTransactions];
      u = new n.dL(a);
      l.forEach((e) => {
        e.steps.forEach((e) => {
          u.step(e);
        });
      });
      let combinedTransform = u;
      ((e) => {
        let t;
        let { mapping, steps } = e;
        let i = [];
        mapping.maps.forEach((e, t) => {
          let o = [];
          if (e.ranges.length) {
            e.forEach((e, t) => {
              o.push({
                from: e,
                to: t,
              });
            });
          } else {
            let { from, to } = steps[t];
            if (from === undefined || to === undefined) {
              return;
            }
            o.push({
              from,
              to,
            });
          }
          o.forEach(({ from, to }) => {
            let o = mapping.slice(t).map(from, -1);
            let s = mapping.slice(t).map(to);
            let a = mapping.invert().map(o, -1);
            let l = mapping.invert().map(s);
            i.push({
              oldRange: {
                from: a,
                to: l,
              },
              newRange: {
                from: o,
                to: s,
              },
            });
          });
        });
        if (
          (t = ((e, t = JSON.stringify) => {
            let r = {};
            return e.filter((e) => {
              let n = t(e);
              return (
                !Object.prototype.hasOwnProperty.call(r, n) && (r[n] = true)
              );
            });
          })(i)).length === 1
        ) {
          return t;
        }
        return t.filter(
          (e, r) =>
            !t
              .filter((e, t) => t !== r)
              .some(
                (t) =>
                  e.oldRange.from >= t.oldRange.from &&
                  e.oldRange.to <= t.oldRange.to &&
                  e.newRange.from >= t.newRange.from &&
                  e.newRange.to <= t.newRange.to,
              ),
        );
      })(combinedTransform).forEach((t) => {
        if (
          combinedTransform.mapping.mapResult(t.oldRange.from).deletedAfter &&
          combinedTransform.mapping.mapResult(t.oldRange.to).deletedBefore
        ) {
          combinedTransform.before.nodesBetween(
            t.oldRange.from,
            t.oldRange.to,
            (r, n) => {
              let i = n + r.nodeSize - 2;
              let o = t.oldRange.from <= n && i <= t.oldRange.to;
              this.editor.emit("delete", {
                type: "node",
                node: r,
                from: n,
                to: i,
                newFrom: combinedTransform.mapping.map(n),
                newTo: combinedTransform.mapping.map(i),
                deletedRange: t.oldRange,
                newRange: t.newRange,
                partial: !o,
                editor: this.editor,
                transaction,
                combinedTransform,
              });
            },
          );
        }
      });
      let f_mapping = combinedTransform.mapping;
      combinedTransform.steps.forEach((t, r) => {
        var i;
        var o;
        if (t instanceof n.Ys) {
          let n = f_mapping.slice(r).map(t.from, -1);
          let s = f_mapping.slice(r).map(t.to);
          let a = f_mapping.invert().map(n, -1);
          let l = f_mapping.invert().map(s);
          let u =
            n > 0 &&
            ((i = combinedTransform.doc.nodeAt(n - 1)) == null
              ? undefined
              : i.marks.some((e) => e.eq(t.mark)));
          let p =
            (o = combinedTransform.doc.nodeAt(s)) == null
              ? undefined
              : o.marks.some((e) => e.eq(t.mark));
          this.editor.emit("delete", {
            type: "mark",
            mark: t.mark,
            from: t.from,
            to: t.to,
            deletedRange: {
              from: a,
              to: l,
            },
            newRange: {
              from: n,
              to: s,
            },
            partial: !!(p || u),
            editor: this.editor,
            transaction,
            combinedTransform,
          });
        }
      });
    };
    if (
      (o =
        (i =
          (r = this.editor.options.coreExtensionOptions) == null
            ? undefined
            : r.delete) == null
          ? undefined
          : i.async) == null ||
      o
    ) {
      setTimeout(s, 0);
    } else {
      s();
    }
  },
});
var ts = tr.create({
  name: "drop",
  addProseMirrorPlugins() {
    return [
      new o.k_({
        key: new o.hs("tiptapDrop"),
        props: {
          handleDrop: (e, t, r, moved) => {
            this.editor.emit("drop", {
              editor: this.editor,
              event: t,
              slice: r,
              moved,
            });
          },
        },
      }),
    ];
  },
});
var ta = tr.create({
  name: "editable",
  addProseMirrorPlugins() {
    return [
      new o.k_({
        key: new o.hs("editable"),
        props: {
          editable: () => this.editor.options.editable,
        },
      }),
    ];
  },
});
var tl = new o.hs("focusEvents");
var tu = tr.create({
  name: "focusEvents",
  addProseMirrorPlugins() {
    let { editor } = this;
    return [
      new o.k_({
        key: tl,
        props: {
          handleDOMEvents: {
            focus: (t, r) => {
              editor.isFocused = true;
              let n = editor.state.tr
                .setMeta("focus", {
                  event: r,
                })
                .setMeta("addToHistory", false);
              t.dispatch(n);
              return false;
            },
            blur: (t, r) => {
              editor.isFocused = false;
              let n = editor.state.tr
                .setMeta("blur", {
                  event: r,
                })
                .setMeta("addToHistory", false);
              t.dispatch(n);
              return false;
            },
          },
        },
      }),
    ];
  },
});
var tf = tr.create({
  name: "keymap",
  addKeyboardShortcuts() {
    let Backspace = () =>
      this.editor.commands.first(({ commands }) => [
        () => commands.undoInputRule(),
        () =>
          commands.command(({ tr }) => {
            let { selection, doc } = tr;
            let { empty, $anchor } = selection;
            let { pos, parent } = $anchor;
            let u =
              $anchor.parent.isTextblock && pos > 0
                ? tr.doc.resolve(pos - 1)
                : $anchor;
            let isolating = u.parent.type.spec.isolating;
            let c = $anchor.pos - $anchor.parentOffset;
            let p =
              isolating && u.parent.childCount === 1
                ? c === $anchor.pos
                : o.LN.atStart(doc).from === pos;
            return (
              !!empty &&
              !!parent.type.isTextblock &&
              !parent.textContent.length &&
              !!p &&
              (!p || $anchor.parent.type.name !== "paragraph") &&
              commands.clearNodes()
            );
          }),
        () => commands.deleteSelection(),
        () => commands.joinBackward(),
        () => commands.selectNodeBackward(),
      ]);
    let Delete = () =>
      this.editor.commands.first(({ commands }) => [
        () => commands.deleteSelection(),
        () => commands.deleteCurrentNode(),
        () => commands.joinForward(),
        () => commands.selectNodeForward(),
      ]);
    let r = {
      Enter: () =>
        this.editor.commands.first(({ commands }) => [
          () => commands.newlineInCode(),
          () => commands.createParagraphNear(),
          () => commands.liftEmptyBlock(),
          () => commands.splitBlock(),
        ]),
      "Mod-Enter": () => this.editor.commands.exitCode(),
      Backspace,
      "Mod-Backspace": Backspace,
      "Shift-Backspace": Backspace,
      Delete,
      "Mod-Delete": Delete,
      "Mod-a": () => this.editor.commands.selectAll(),
    };
    let n = {
      ...r,
    };
    let i = {
      ...r,
      "Ctrl-h": Backspace,
      "Alt-Backspace": Backspace,
      "Ctrl-d": Delete,
      "Ctrl-Alt-Backspace": Delete,
      "Alt-Delete": Delete,
      "Alt-d": Delete,
      "Ctrl-a": () => this.editor.commands.selectTextblockStart(),
      "Ctrl-e": () => this.editor.commands.selectTextblockEnd(),
    };
    if (D() || ee()) {
      return i;
    }
    return n;
  },
  addProseMirrorPlugins() {
    return [
      new o.k_({
        key: new o.hs("clearDocument"),
        appendTransaction: (e, t, r) => {
          if (e.some((e) => e.getMeta("composition"))) {
            return;
          }
          let n = e.some((e) => e.docChanged) && !t.doc.eq(r.doc);
          let i = e.some((e) => e.getMeta("preventClearDocument"));
          if (!n || i) {
            return;
          }
          let { empty, from, to } = t.selection;
          let from_1 = o.LN.atStart(t.doc).from;
          let f = o.LN.atEnd(t.doc).to;
          if (
            empty ||
            from !== from_1 ||
            to !== f ||
            !(function e(
              t,
              { checkChildren = true, ignoreWhitespace = false } = {},
            ) {
              let i;
              if (ignoreWhitespace) {
                if (t.type.name === "hardBreak") {
                  return true;
                }
                if (t.isText) {
                  return !/\S/.test((i = t.text) != null ? i : "");
                }
              }
              if (t.isText) {
                return !t.text;
              }
              if (t.isAtom || t.isLeaf) {
                return false;
              }
              if (t.content.childCount === 0) {
                return true;
              }
              if (checkChildren) {
                let i = true;
                t.content.forEach((t) => {
                  if (i !== false) {
                    if (
                      !e(t, {
                        ignoreWhitespace,
                        checkChildren,
                      })
                    ) {
                      i = false;
                    }
                  }
                });
                return i;
              }
              return false;
            })(r.doc)
          ) {
            return;
          }
          let d = r.tr;
          let h = c({
            state: r,
            transaction: d,
          });
          let { commands } = new p({
            editor: this.editor,
            state: h,
          });
          commands.clearNodes();
          if (d.steps.length) {
            return d;
          }
        },
      }),
    ];
  },
});
var tc = tr.create({
  name: "paste",
  addProseMirrorPlugins() {
    return [
      new o.k_({
        key: new o.hs("tiptapPaste"),
        props: {
          handlePaste: (e, t, r) => {
            this.editor.emit("paste", {
              editor: this.editor,
              event: t,
              slice: r,
            });
          },
        },
      }),
    ];
  },
});
var tp = tr.create({
  name: "tabindex",
  addProseMirrorPlugins() {
    return [
      new o.k_({
        key: new o.hs("tabindex"),
        props: {
          attributes: () => {
            if (this.editor.isEditable) {
              return {
                tabindex: "0",
              };
            }
            return {};
          },
        },
      }),
    ];
  },
});
var td = tr.create({
  name: "textDirection",
  addOptions: () => ({
    direction: undefined,
  }),
  addGlobalAttributes() {
    if (!this.options.direction) {
      return [];
    }
    let { nodeExtensions } = eO(this.extensions);
    return [
      {
        types: nodeExtensions
          .filter((e) => e.name !== "text")
          .map((e) => e.name),
        attributes: {
          dir: {
            default: this.options.direction,
            parseHTML: (e) => {
              let t = e.getAttribute("dir");
              if (t && (t === "ltr" || t === "rtl" || t === "auto")) {
                return t;
              }
              return this.options.direction;
            },
            renderHTML: (e) => {
              if (e.dir) {
                return {
                  dir: e.dir,
                };
              }
              return {};
            },
          },
        },
      },
    ];
  },
  addProseMirrorPlugins() {
    return [
      new o.k_({
        key: new o.hs("textDirection"),
        props: {
          attributes: () => {
            let direction = this.options.direction;
            if (direction) {
              return {
                dir: direction,
              };
            }
            return {};
          },
        },
      }),
    ];
  },
});
function th(e) {
  if (!(e == null ? undefined : e.trim())) {
    return {};
  }
  let t = {};
  let r = [];
  let n = e.replace(/["']([^"']*)["']/g, (e) => {
    r.push(e);
    return `__QUOTED_${r.length - 1}__`;
  });
  let i = n.match(/(?:^|\s)\.([a-zA-Z][\w-]*)/g);
  if (i) {
    t.class = i.map((e) => e.trim().slice(1)).join(" ");
  }
  let o = n.match(/(?:^|\s)#([a-zA-Z][\w-]*)/);
  if (o) {
    t.id = o[1];
  }
  Array.from(n.matchAll(/([a-zA-Z][\w-]*)\s*=\s*(__QUOTED_\d+__)/g)).forEach(
    ([, e, n]) => {
      var i;
      let o =
        r[
          parseInt(
            ((i = n.match(/__QUOTED_(\d+)__/)) == null ? undefined : i[1]) ||
              "0",
            10,
          )
        ];
      if (o) {
        t[e] = o.slice(1, -1);
      }
    },
  );
  let s = n
    .replace(/(?:^|\s)\.([a-zA-Z][\w-]*)/g, "")
    .replace(/(?:^|\s)#([a-zA-Z][\w-]*)/g, "")
    .replace(/([a-zA-Z][\w-]*)\s*=\s*__QUOTED_\d+__/g, "")
    .trim();
  if (s) {
    s.split(/\s+/)
      .filter(Boolean)
      .forEach((e) => {
        if (e.match(/^[a-zA-Z][\w-]*$/)) {
          t[e] = true;
        }
      });
  }
  return t;
}
function tm(e) {
  if (!e || Object.keys(e).length === 0) {
    return "";
  }
  let t = [];
  if (e.class) {
    String(e.class)
      .split(/\s+/)
      .filter(Boolean)
      .forEach((e) => t.push(`.${e}`));
  }
  if (e.id) {
    t.push(`#${e.id}`);
  }
  Object.entries(e).forEach(([e, r]) => {
    if (e !== "class" && e !== "id") {
      if (r === true) {
        t.push(e);
      } else if (r !== false && r != null) {
        t.push(`${e}="${String(r)}"`);
      }
    }
  });
  return t.join(" ");
}
function ty(e) {
  let {
    nodeName,
    name,
    parseAttributes = th,
    serializeAttributes = tm,
    defaultAttributes = {},
    requiredAttributes = [],
    allowedAttributes,
  } = e;
  let l = name || nodeName;
  return {
    parseMarkdown: (e, r) => {
      let n = {
        ...defaultAttributes,
        ...e.attributes,
      };
      return r.createNode(nodeName, n, []);
    },
    markdownTokenizer: {
      name: nodeName,
      level: "block",
      start(e) {
        let t;
        let r = RegExp(`^:::${l}(?:\\s|$)`, "m");
        let n = (t = e.match(r)) == null ? undefined : t.index;
        if (n !== undefined) {
          return n;
        }
        return -1;
      },
      tokenize(e, r, i) {
        let o = RegExp(`^:::${l}(?:\\s+\\{([^}]*)\\})?\\s*:::(?:\\n|$)`);
        let a = e.match(o);
        if (!a) {
          return;
        }
        let u = parseAttributes(a[1] || "");
        if (!requiredAttributes.find((e) => !(e in u))) {
          return {
            type: nodeName,
            raw: a[0],
            attributes: u,
          };
        }
      },
    },
    renderMarkdown: (e) => {
      let t = serializeAttributes(
        ((e) => {
          if (!allowedAttributes) {
            return e;
          }
          let t = {};
          allowedAttributes.forEach((r) => {
            if (r in e) {
              t[r] = e[r];
            }
          });
          return t;
        })(e.attrs || {}),
      );
      let r = t ? ` {${t}}` : "";
      return `:::${l}${r} :::`;
    },
  };
}
function tv(e) {
  let {
    nodeName,
    name,
    getContent,
    parseAttributes = th,
    serializeAttributes = tm,
    defaultAttributes = {},
    content = "block",
    allowedAttributes,
  } = e;
  let u = name || nodeName;
  return {
    parseMarkdown: (e, r) => {
      let i;
      if (getContent) {
        let t = getContent(e);
        i =
          typeof t === "string"
            ? [
                {
                  type: "text",
                  text: t,
                },
              ]
            : t;
      } else {
        i =
          content === "block"
            ? r.parseChildren(e.tokens || [])
            : r.parseInline(e.tokens || []);
      }
      let o = {
        ...defaultAttributes,
        ...e.attributes,
      };
      return r.createNode(nodeName, o, i);
    },
    markdownTokenizer: {
      name: nodeName,
      level: "block",
      start(e) {
        let t;
        let r = RegExp(`^:::${u}`, "m");
        let n = (t = e.match(r)) == null ? undefined : t.index;
        if (n !== undefined) {
          return n;
        }
        return -1;
      },
      tokenize(e, r, n) {
        let o;
        let s = RegExp(`^:::${u}(?:\\s+\\{([^}]*)\\})?\\s*\\n`);
        let l = e.match(s);
        if (!l) {
          return;
        }
        let [f, c = ""] = l;
        let p = parseAttributes(c);
        let d = 1;
        let f_length = f.length;
        let content_1 = "";
        let y = /^:::([\w-]*)(\s.*)?/gm;
        let v = e.slice(f_length);
        for (y.lastIndex = 0; ;) {
          let r = y.exec(v);
          if (r === null) {
            break;
          }
          let i = r.index;
          let s = r[1];
          if ((o = r[2]) == null || !o.endsWith(":::")) {
            if (s) {
              d += 1;
            } else if ((d -= 1) == 0) {
              let o = v.slice(0, i);
              content_1 = o.trim();
              let raw = e.slice(0, f_length + i + r[0].length);
              let tokens = [];
              if (content_1) {
                if (content === "block") {
                  for (
                    (tokens = n.blockTokens(o)).forEach((e) => {
                      if (e.text && (!e.tokens || e.tokens.length === 0)) {
                        e.tokens = n.inlineTokens(e.text);
                      }
                    });
                    tokens.length > 0;
                  ) {
                    let e = tokens[tokens.length - 1];
                    if (
                      e.type !== "paragraph" ||
                      (e.text && e.text.trim() !== "")
                    ) {
                      break;
                    }
                    tokens.pop();
                  }
                } else {
                  tokens = n.inlineTokens(content_1);
                }
              }
              return {
                type: nodeName,
                raw,
                attributes: p,
                content: content_1,
                tokens,
              };
            }
          }
        }
      },
    },
    renderMarkdown: (e, t) => {
      let r = serializeAttributes(
        ((e) => {
          if (!allowedAttributes) {
            return e;
          }
          let t = {};
          allowedAttributes.forEach((r) => {
            if (r in e) {
              t[r] = e[r];
            }
          });
          return t;
        })(e.attrs || {}),
      );
      let n = r ? ` {${r}}` : "";
      let i = t.renderChildren(e.content || [], "\n\n");
      return `:::${u}${n}

${i}

:::`;
    },
  };
}
function tg(e) {
  if (!e.trim()) {
    return {};
  }
  let t = {};
  let r = /(\w+)=(?:"([^"]*)"|'([^']*)')/g;
  let n = r.exec(e);
  while (n !== null) {
    let [, i, o, s] = n;
    t[i] = o || s;
    n = r.exec(e);
  }
  return t;
}
function tb(e) {
  return Object.entries(e)
    .filter(([, e]) => e != null)
    .map(([e, t]) => `${e}="${t}"`)
    .join(" ");
}
function tw(e) {
  let {
    nodeName,
    name,
    getContent,
    parseAttributes = tg,
    serializeAttributes = tb,
    defaultAttributes = {},
    selfClosing = false,
    allowedAttributes,
  } = e;
  let u = name || nodeName;
  let f = u.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return {
    parseMarkdown: (e, r) => {
      let i = {
        ...defaultAttributes,
        ...e.attributes,
      };
      if (selfClosing) {
        return r.createNode(nodeName, i);
      }
      let o = getContent ? getContent(e) : e.content || "";
      if (o) {
        return r.createNode(nodeName, i, [r.createTextNode(o)]);
      }
      return r.createNode(nodeName, i, []);
    },
    markdownTokenizer: {
      name: nodeName,
      level: "inline",
      start(e) {
        let t = selfClosing
          ? RegExp(`\\[${f}\\s*[^\\]]*\\]`)
          : RegExp(`\\[${f}\\s*[^\\]]*\\][\\s\\S]*?\\[\\/${f}\\]`);
        let r = e.match(t);
        let n = r == null ? undefined : r.index;
        if (n !== undefined) {
          return n;
        }
        return -1;
      },
      tokenize(e, r, n) {
        let o = selfClosing
          ? RegExp(`^\\[${f}\\s*([^\\]]*)\\]`)
          : RegExp(`^\\[${f}\\s*([^\\]]*)\\]([\\s\\S]*?)\\[\\/${f}\\]`);
        let s = e.match(o);
        if (!s) {
          return;
        }
        let l = "";
        let u = "";
        if (selfClosing) {
          let [, e] = s;
          u = e;
        } else {
          let [, e, t] = s;
          u = e;
          l = t || "";
        }
        let c = parseAttributes(u.trim());
        return {
          type: nodeName,
          raw: s[0],
          content: l.trim(),
          attributes: c,
        };
      },
    },
    renderMarkdown: (e) => {
      let t = "";
      if (getContent) {
        t = getContent(e);
      } else if (e.content && e.content.length > 0) {
        t = e.content
          .filter((e) => e.type === "text")
          .map((e) => e.text)
          .join("");
      }
      let r = serializeAttributes(
        ((e) => {
          if (!allowedAttributes) {
            return e;
          }
          let t = {};
          allowedAttributes.forEach((r) => {
            let n = typeof r === "string" ? r : r.name;
            let i = typeof r === "string" ? undefined : r.skipIfDefault;
            if (n in e) {
              let r = e[n];
              if (i !== undefined && r === i) {
                return;
              }
              t[n] = r;
            }
          });
          return t;
        })(e.attrs || {}),
      );
      let i = r ? ` ${r}` : "";
      if (selfClosing) {
        return `[${u}${i}]`;
      }
      return `[${u}${i}]${t}[/${u}]`;
    },
  };
}
function tk(e, t, r) {
  let n;
  let i;
  let o;
  let s;
  let a = e.split("\n");
  let items = [];
  let u = "";
  let f = 0;
  let c = t.baseIndentSize || 2;
  while (f < a.length) {
    let e;
    let p = a[f];
    let d = p.match(t.itemPattern);
    if (!d) {
      if (items.length > 0) {
        break;
      } else {
        if (p.trim() !== "") {
          return;
        }
        f += 1;
        u = `${u}${p}
`;
        continue;
      }
    }
    let h = t.extractItemData(d);
    let { indentLevel, mainContent } = h;
    u = `${u}${p}
`;
    let v = [mainContent];
    for (f += 1; f < a.length;) {
      let e = a[f];
      if (e.trim() === "") {
        let t = a.slice(f + 1).findIndex((e) => e.trim() !== "");
        if (t === -1) {
          break;
        }
        if (
          (((i =
            (n = a[f + 1 + t].match(/^(\s*)/)) == null ? undefined : n[1]) ==
          null
            ? undefined
            : i.length) || 0) > indentLevel
        ) {
          v.push(e);
          u = `${u}${e}
`;
          f += 1;
          continue;
        }
        break;
      }
      if (
        (((s = (o = e.match(/^(\s*)/)) == null ? undefined : o[1]) == null
          ? undefined
          : s.length) || 0) > indentLevel
      ) {
        v.push(e);
        u = `${u}${e}
`;
        f += 1;
      } else {
        break;
      }
    }
    let g = v.slice(1);
    if (g.length > 0) {
      let n = g.map((e) => e.slice(indentLevel + c)).join("\n");
      if (n.trim()) {
        e = t.customNestedParser ? t.customNestedParser(n) : r.blockTokens(n);
      }
    }
    let b = t.createToken(h, e);
    items.push(b);
  }
  if (items.length !== 0) {
    return {
      items,
      raw: u,
    };
  }
}
function tx(e, t, r, n) {
  if (!e || !Array.isArray(e.content)) {
    return "";
  }
  let i = typeof r === "function" ? r(n) : r;
  let [o, ...s] = e.content;
  let a = t.renderChildren([o]);
  let l = `${i}${a}`;
  if (s && s.length > 0) {
    s.forEach((e, r) => {
      var n;
      var i;
      let o =
        (i = (n = t.renderChild) == null ? undefined : n.call(t, e, r + 1)) !=
        null
          ? i
          : t.renderChildren([e]);
      if (o != null) {
        let r = o
          .split("\n")
          .map((e) => {
            if (e) {
              return t.indent(e);
            }
            return t.indent("");
          })
          .join("\n");
        l +=
          e.type === "paragraph"
            ? `

${r}`
            : `
${r}`;
      }
    });
  }
  return l;
}
f(
  {},
  {
    createAtomBlockMarkdownSpec: () => ty,
    createBlockMarkdownSpec: () => tv,
    createInlineMarkdownSpec: () => tw,
    parseAttributes: () => th,
    parseIndentedBlocks: () => tk,
    renderNestedMarkdownContent: () => tx,
    serializeAttributes: () => tm,
  },
);
export var bP = class e extends e7 {
  constructor() {
    super(...arguments);
    this.type = "node";
  }
  static create(t = {}) {
    return new e(typeof t === "function" ? t() : t);
  }
  configure(e) {
    return super.configure(e);
  }
  extend(e) {
    let t = typeof e === "function" ? e() : e;
    return super.extend(t);
  }
};
