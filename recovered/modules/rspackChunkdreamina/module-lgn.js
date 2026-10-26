import r from "zxf";
import i from "XfL";
import o from "Zr";
import s from "le8";
import a from "Ne";
import l from "mV";
import d from "WKV";
const u = (e, t) => {
  for (var n in t) {
    Object.defineProperty(e, n, {
      get: t[n],
      enumerable: true,
    });
  }
};
function p(e) {
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
class h {
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
          let n = t(...e)(o);
          if (!(tr.getMeta("preventDispatch") || this.hasCustomState)) {
            view.dispatch(tr);
          }
          return n;
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
    let c = {
      ...Object.fromEntries(
        Object.entries(rawCommands).map(([e, n]) => [
          e,
          (...e) => {
            let r = this.buildProps(l, t);
            let i = n(...e)(r);
            s.push(i);
            return c;
          },
        ]),
      ),
      run,
    };
    return c;
  }
  createCan(e) {
    let { rawCommands, state } = this;
    let r = e || state.tr;
    let i = this.buildProps(r, false);
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
      chain: () => this.createChain(r, false),
    };
  }
  buildProps(e, t = true) {
    let { rawCommands, editor, state } = this;
    let { view } = editor;
    let s = {
      tr: e,
      editor,
      view,
      state: p({
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
export var Pi = {};
u(Pi, {
  blur: () => m,
  clearContent: () => g,
  clearNodes: () => v,
  command: () => y,
  createParagraphNear: () => b,
  cut: () => w,
  deleteCurrentNode: () => k,
  deleteNode: () => M,
  deleteRange: () => E,
  deleteSelection: () => S,
  enter: () => C,
  exitCode: () => T,
  extendMarkRange: () => j,
  first: () => $,
  focus: () => F,
  forEach: () => U,
  insertContent: () => _,
  insertContentAt: () => K,
  joinBackward: () => J,
  joinDown: () => Z,
  joinForward: () => G,
  joinItemBackward: () => Q,
  joinItemForward: () => X,
  joinTextblockBackward: () => ee,
  joinTextblockForward: () => et,
  joinUp: () => Y,
  keyboardShortcut: () => er,
  lift: () => eo,
  liftEmptyBlock: () => es,
  liftListItem: () => ea,
  newlineInCode: () => el,
  resetAttributes: () => eu,
  scrollIntoView: () => ep,
  selectAll: () => eh,
  selectNodeBackward: () => ef,
  selectNodeForward: () => em,
  selectParentNode: () => eg,
  selectTextblockEnd: () => ev,
  selectTextblockStart: () => ey,
  setContent: () => ew,
  setMark: () => e4,
  setMeta: () => e5,
  setNode: () => e7,
  setNodeSelection: () => te,
  setTextDirection: () => tt,
  setTextSelection: () => tn,
  sinkListItem: () => tr,
  splitBlock: () => to,
  splitListItem: () => ts,
  toggleList: () => td,
  toggleMark: () => tc,
  toggleNode: () => tu,
  toggleWrap: () => tp,
  undoInputRule: () => th,
  unsetAllMarks: () => tf,
  unsetMark: () => tm,
  unsetTextDirection: () => tg,
  updateAttributes: () => tv,
  wrapIn: () => ty,
  wrapInList: () => tb,
});
var m =
  () =>
  ({ editor, view }) => {
    requestAnimationFrame(() => {
      var n;
      if (!editor.isDestroyed) {
        view.dom.blur();
        if ((n = window == null ? undefined : window.getSelection()) != null) {
          n.removeAllRanges();
        }
      }
    });
    return true;
  };
var g =
  (emitUpdate = true) =>
  ({ commands }) =>
    commands.setContent("", {
      emitUpdate,
    });
var v =
  () =>
  ({ state, tr, dispatch }) => {
    let { selection } = tr;
    let { ranges } = selection;
    return (
      !dispatch ||
      (ranges.forEach(({ $from, $to }) => {
        state.doc.nodesBetween($from.pos, $to.pos, (e, n) => {
          if (e.type.isText) {
            return;
          }
          let { doc, mapping } = tr;
          let s = doc.resolve(mapping.map(n));
          let a = doc.resolve(mapping.map(n + e.nodeSize));
          let l = s.blockRange(a);
          if (!l) {
            return;
          }
          let d = r.jP(l);
          if (e.type.isTextblock) {
            let { defaultType } = s.parent.contentMatchAt(s.index());
            tr.setNodeMarkup(l.start, defaultType);
          }
          if (d || d === 0) {
            tr.lift(l, d);
          }
        });
      }),
      true)
    );
  };
var y = (e) => (t) => e(t);
var b =
  () =>
  ({ state, dispatch }) =>
    i.Z1(state, dispatch);
var w =
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
var k =
  () =>
  ({ tr, dispatch }) => {
    let { selection } = tr;
    let r = selection.$anchor.node();
    if (r.content.size > 0) {
      return false;
    }
    let $anchor = tr.selection.$anchor;
    for (let n = $anchor.depth; n > 0; n -= 1) {
      if ($anchor.node(n).type === r.type) {
        if (dispatch) {
          let t = $anchor.before(n);
          let r = $anchor.after(n);
          tr.delete(t, r).scrollIntoView();
        }
        return true;
      }
    }
    return false;
  };
export function Pg(e, t) {
  if (typeof e === "string") {
    if (!t.nodes[e]) {
      throw Error(
        `There is no node type named '${e}'. Maybe you forgot to add the extension?`,
      );
    }
    return t.nodes[e];
  }
  return e;
}
var M =
  (e) =>
  ({ tr, state, dispatch }) => {
    let i = Pg(e, state.schema);
    let $anchor = tr.selection.$anchor;
    for (let e = $anchor.depth; e > 0; e -= 1) {
      if ($anchor.node(e).type === i) {
        if (dispatch) {
          let n = $anchor.before(e);
          let r = $anchor.after(e);
          tr.delete(n, r).scrollIntoView();
        }
        return true;
      }
    }
    return false;
  };
var E =
  (e) =>
  ({ tr, dispatch }) => {
    let { from, to } = e;
    if (dispatch) {
      tr.delete(from, to);
    }
    return true;
  };
var S =
  () =>
  ({ state, dispatch }) =>
    i.ic(state, dispatch);
var C =
  () =>
  ({ commands }) =>
    commands.keyboardShortcut("Enter");
var T =
  () =>
  ({ state, dispatch }) =>
    i.I$(state, dispatch);
function O(e) {
  return Object.prototype.toString.call(e) === "[object RegExp]";
}
function A(
  e,
  t,
  n = {
    strict: true,
  },
) {
  let r = Object.keys(t);
  return (
    !r.length ||
    r.every((r) => {
      if (n.strict) {
        return t[r] === e[r];
      }
      if (O(t[r])) {
        return t[r].test(e[r]);
      }
      return t[r] === e[r];
    })
  );
}
function P(e, t, n = {}) {
  return e.find(
    (e) =>
      e.type === t &&
      A(Object.fromEntries(Object.keys(n).map((t) => [t, e.attrs[t]])), n),
  );
}
function D(e, t, n = {}) {
  return !!P(e, t, n);
}
function N(e, t, n) {
  if (!e || !t) {
    return;
  }
  let r = e.parent.childAfter(e.parentOffset);
  if (!(r.node && r.node.marks.some((e) => e.type === t))) {
    r = e.parent.childBefore(e.parentOffset);
  }
  if (!r.node || !r.node.marks.some((e) => e.type === t)) {
    return;
  }
  if (!n) {
    let e = r.node.marks.find((e) => e.type === t);
    if (e) {
      n = e.attrs;
    }
  }
  if (!P([...r.node.marks], t, n)) {
    return;
  }
  let r_index = r.index;
  let o = e.start() + r.offset;
  let s = r_index + 1;
  let a = o + r.node.nodeSize;
  while (r_index > 0 && D([...e.parent.child(r_index - 1).marks], t, n)) {
    r_index -= 1;
    o -= e.parent.child(r_index).nodeSize;
  }
  while (s < e.parent.childCount && D([...e.parent.child(s).marks], t, n)) {
    a += e.parent.child(s).nodeSize;
    s += 1;
  }
  return {
    from: o,
    to: a,
  };
}
function I(e, schema) {
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
var j =
  (e, t) =>
  ({ tr, state, dispatch }) => {
    let s = I(e, state.schema);
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
var $ = (e) => (t) => {
  let n = typeof e === "function" ? e(t) : e;
  for (let e = 0; e < n.length; e += 1) {
    if (n[e](t)) {
      return true;
    }
  }
  return false;
};
function R(selection) {
  return selection instanceof o.U3;
}
function z(e = 0, t = 0, n = 0) {
  return Math.min(Math.max(e, t), n);
}
function L(doc, t = null) {
  if (!t) {
    return null;
  }
  let n = o.LN.atStart(doc);
  let r = o.LN.atEnd(doc);
  if (t === "start" || t === true) {
    return n;
  }
  if (t === "end") {
    return r;
  }
  let n_from = n.from;
  let s = r.to;
  if (t === "all") {
    return o.U3.create(doc, z(0, n_from, s), z(doc.content.size, n_from, s));
  }
  return o.U3.create(doc, z(t, n_from, s), z(t, n_from, s));
}
function B() {
  return (
    navigator.platform === "Android" || /android/i.test(navigator.userAgent)
  );
}
function V() {
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
var F =
  (e = null, t = {}) =>
  ({ editor, view, tr, dispatch }) => {
    t = {
      scrollIntoView: true,
      ...t,
    };
    let s = () => {
      if (V() || B()) {
        view.dom.focus();
      }
      if (
        typeof navigator !== "undefined" &&
        /^((?!chrome|android).)*safari/i.test(navigator.userAgent) &&
        !V() &&
        !B()
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
    if (dispatch && e === null && !R(editor.state.selection)) {
      s();
      return true;
    }
    let a = L(tr.doc, e) || editor.state.selection;
    let l = editor.state.selection.eq(a);
    if (dispatch) {
      if (!l) {
        tr.setSelection(a);
      }
      if (l && tr.storedMarks) {
        tr.setStoredMarks(tr.storedMarks);
      }
      s();
    }
    return true;
  };
var U = (e, t) => (n) =>
  e.every((e, r) =>
    t(e, {
      ...n,
      index: r,
    }),
  );
var _ =
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
const q = (e) => {
  let e_childNodes = e.childNodes;
  for (let n = e_childNodes.length - 1; n >= 0; n -= 1) {
    let r = e_childNodes[n];
    if (r.nodeType === 3 && r.nodeValue && /^(\n\s\s|\n)$/.test(r.nodeValue)) {
      e.removeChild(r);
    } else if (r.nodeType === 1) {
      q(r);
    }
  }
  return e;
};
function W(e) {
  if (typeof window === "undefined") {
    throw Error(
      "[tiptap error]: there is no window object available, so this function cannot be used",
    );
  }
  let t = `<body>${e}</body>`;
  return q(new window.DOMParser().parseFromString(t, "text/html").body);
}
function H(e, t, n) {
  if (e instanceof s.bP || e instanceof s.FK) {
    return e;
  }
  n = {
    slice: true,
    parseOptions: {},
    ...n,
  };
  let r = typeof e === "object" && e !== null;
  let i = typeof e === "string";
  if (r) {
    try {
      if (Array.isArray(e) && e.length > 0) {
        return s.FK.fromArray(e.map((e) => t.nodeFromJSON(e)));
      }
      let r = t.nodeFromJSON(e);
      if (n.errorOnInvalidContent) {
        r.check();
      }
      return r;
    } catch (cause) {
      if (n.errorOnInvalidContent) {
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
      return H("", t, n);
    }
  }
  if (i) {
    if (n.errorOnInvalidContent) {
      let r = false;
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
                  r = true;
                  i = typeof e === "string" ? e : e.outerHTML;
                  return null;
                },
              },
            ],
          },
        }),
      });
      if (n.slice) {
        s.S4.fromSchema(o).parseSlice(W(e), n.parseOptions);
      } else {
        s.S4.fromSchema(o).parse(W(e), n.parseOptions);
      }
      if (n.errorOnInvalidContent && r) {
        throw Error("[tiptap error]: Invalid HTML content", {
          cause: Error(`Invalid element found: ${i}`),
        });
      }
    }
    let r = s.S4.fromSchema(t);
    if (n.slice) {
      return r.parseSlice(W(e), n.parseOptions).content;
    }
    return r.parse(W(e), n.parseOptions);
  }
  return H("", t, n);
}
var K =
  (e, t, n) =>
  ({ tr, dispatch, editor }) => {
    var d;
    if (dispatch) {
      let a;
      let c;
      n = {
        parseOptions: editor.options.parseOptions,
        updateSelection: true,
        applyInputRules: false,
        applyPasteRules: false,
        ...n,
      };
      let u = (error) => {
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
        ...n.parseOptions,
      };
      if (
        !n.errorOnInvalidContent &&
        !editor.options.enableContentCheck &&
        editor.options.emitContentError
      ) {
        try {
          H(t, editor.schema, {
            parseOptions: p,
            errorOnInvalidContent: true,
          });
        } catch (error) {
          u(error);
        }
      }
      try {
        a = H(t, editor.schema, {
          parseOptions: p,
          errorOnInvalidContent:
            (d = n.errorOnInvalidContent) != null
              ? d
              : editor.options.enableContentCheck,
        });
      } catch (error) {
        u(error);
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
      let g = true;
      (!("type" in a) ? a : [a]).forEach((e) => {
        e.check();
        m = !!m && e.isText && e.marks.length === 0;
        g = !!g && e.isBlock;
      });
      if (from === to && g) {
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
          c = t.map((e) => e.text || "").join("");
        } else if (t instanceof s.FK) {
          let e = "";
          t.forEach((t) => {
            if (t.text) {
              e += t.text;
            }
          });
          c = e;
        } else {
          c = typeof t === "object" && t && t.text ? t.text : t;
        }
        tr.insertText(c, from, to);
      } else {
        c = a;
        let e = tr.doc.resolve(from);
        let t = e.node();
        let n = e.parentOffset === 0;
        let r = t.isText || t.isTextblock;
        let o = t.content.size > 0;
        if (n && r && o && g) {
          from = Math.max(0, from - 1);
        }
        tr.replaceWith(from, to, c);
      }
      if (n.updateSelection) {
        ((e, t) => {
          let n = e.steps.length - 1;
          if (n < t) {
            return;
          }
          let i = e.steps[n];
          if (!(i instanceof r.Ln || i instanceof r.Wg)) {
            return;
          }
          let s = e.mapping.maps[n];
          let a = 0;
          s.forEach((e, t, n, r) => {
            if (a === 0) {
              a = r;
            }
          });
          e.setSelection(o.LN.near(e.doc.resolve(a), -1));
        })(tr, tr.steps.length - 1);
      }
      if (n.applyInputRules) {
        tr.setMeta("applyInputRules", {
          from,
          text: c,
        });
      }
      if (n.applyPasteRules) {
        tr.setMeta("applyPasteRules", {
          from,
          text: c,
        });
      }
    }
    return true;
  };
var Y =
  () =>
  ({ state, dispatch }) =>
    i.G2(state, dispatch);
var Z =
  () =>
  ({ state, dispatch }) =>
    i.bh(state, dispatch);
var J =
  () =>
  ({ state, dispatch }) =>
    i.Qv(state, dispatch);
var G =
  () =>
  ({ state, dispatch }) =>
    i.eT(state, dispatch);
var Q =
  () =>
  ({ state, dispatch, tr }) => {
    try {
      let i = r.N0(state.doc, state.selection.$from.pos, -1);
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
var X =
  () =>
  ({ state, dispatch, tr }) => {
    try {
      let i = r.N0(state.doc, state.selection.$from.pos, 1);
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
var ee =
  () =>
  ({ state, dispatch }) =>
    i.eB(state, dispatch);
var et =
  () =>
  ({ state, dispatch }) =>
    i._G(state, dispatch);
function en() {
  return typeof navigator !== "undefined" && /Mac/.test(navigator.platform);
}
var er =
  (e) =>
  ({ editor, view, tr, dispatch }) => {
    let o = ((e) => {
      let t;
      let n;
      let r;
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
          n = true;
        } else if (/^s(hift)?$/i.test(s)) {
          r = true;
        } else if (/^mod$/i.test(s)) {
          if (V() || en()) {
            i = true;
          } else {
            n = true;
          }
        } else {
          throw Error(`Unrecognized modifier name: ${s}`);
        }
      }
      if (t) {
        s = `Alt-${s}`;
      }
      if (n) {
        s = `Ctrl-${s}`;
      }
      if (i) {
        s = `Meta-${s}`;
      }
      if (r) {
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
export function rU(e, t, n = {}) {
  let { from, to, empty } = e.selection;
  let s = t ? Pg(t, e.schema) : null;
  let a = [];
  e.doc.nodesBetween(from, to, (e, t) => {
    if (e.isText) {
      return;
    }
    let n = Math.max(from, t);
    let o = Math.min(to, t + e.nodeSize);
    a.push({
      node: e,
      from: n,
      to: o,
    });
  });
  let l = to - from;
  let d = a
    .filter((e) => !s || s.name === e.node.type.name)
    .filter((e) =>
      A(e.node.attrs, n, {
        strict: false,
      }),
    );
  if (empty) {
    return !!d.length;
  }
  return d.reduce((acc, item) => acc + item.to - item.from, 0) >= l;
}
var eo =
  (e, t = {}) =>
  ({ state, dispatch }) => {
    let o = Pg(e, state.schema);
    return !!rU(state, o, t) && i.yY(state, dispatch);
  };
var es =
  () =>
  ({ state, dispatch }) =>
    i.iz(state, dispatch);
var ea =
  (e) =>
  ({ state, dispatch }) => {
    let r = Pg(e, state.schema);
    return a.T2(r)(state, dispatch);
  };
var el =
  () =>
  ({ state, dispatch }) =>
    i.pC(state, dispatch);
function ed(e, schema) {
  if (schema.nodes[e]) {
    return "node";
  }
  if (schema.marks[e]) {
    return "mark";
  }
  return null;
}
function ec(attrs, t) {
  let n = typeof t === "string" ? [t] : t;
  return Object.keys(attrs).reduce((acc, key) => {
    if (!n.includes(key)) {
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
    let a = ed(typeof e === "string" ? e : e.name, state.schema);
    if (!a) {
      return false;
    }
    if (a === "node") {
      o = Pg(e, state.schema);
    }
    if (a === "mark") {
      s = I(e, state.schema);
    }
    let l = false;
    tr.selection.ranges.forEach((e) => {
      state.doc.nodesBetween(e.$from.pos, e.$to.pos, (e, r) => {
        if (o && o === e.type) {
          l = true;
          if (dispatch) {
            tr.setNodeMarkup(r, undefined, ec(e.attrs, t));
          }
        }
        if (s && e.marks.length) {
          e.marks.forEach((o) => {
            if (s === o.type) {
              l = true;
              if (dispatch) {
                tr.addMark(r, r + e.nodeSize, s.create(ec(o.attrs, t)));
              }
            }
          });
        }
      });
    });
    return l;
  };
var ep =
  () =>
  ({ tr, dispatch }) => {
    if (dispatch) {
      tr.scrollIntoView();
    }
    return true;
  };
var eh =
  () =>
  ({ tr, dispatch }) => {
    if (dispatch) {
      let t = new o.i5(tr.doc);
      tr.setSelection(t);
    }
    return true;
  };
var ef =
  () =>
  ({ state, dispatch }) =>
    i._e(state, dispatch);
var em =
  () =>
  ({ state, dispatch }) =>
    i.Sd(state, dispatch);
var eg =
  () =>
  ({ state, dispatch }) =>
    i.hy(state, dispatch);
var ev =
  () =>
  ({ state, dispatch }) =>
    i.ec(state, dispatch);
var ey =
  () =>
  ({ state, dispatch }) =>
    i.$f(state, dispatch);
function eb(e, schema, n = {}, r = {}) {
  return H(e, schema, {
    slice: false,
    parseOptions: n,
    errorOnInvalidContent: r.errorOnInvalidContent,
  });
}
var ew =
  (e, { errorOnInvalidContent, emitUpdate = true, parseOptions = {} } = {}) =>
  ({ editor, tr, dispatch, commands }) => {
    let { doc } = tr;
    if (parseOptions.preserveWhitespace !== "full") {
      let a = eb(e, editor.schema, parseOptions, {
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
function ek(e, t) {
  let n = I(t, e.schema);
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
  let a = s.find((e) => e.type.name === n.name);
  if (a) {
    return {
      ...a.attrs,
    };
  }
  return {};
}
export function T7(e, t) {
  let n = new r.dL(e);
  t.forEach((e) => {
    e.steps.forEach((e) => {
      n.step(e);
    });
  });
  return n;
}
export function Nx(e, t, n) {
  let r = [];
  e.nodesBetween(t.from, t.to, (e, pos) => {
    if (n(e)) {
      r.push({
        node: e,
        pos,
      });
    }
  });
  return r;
}
function eE(e, t) {
  for (let depth = e.depth; depth > 0; depth -= 1) {
    let r = e.node(depth);
    if (t(r)) {
      return {
        pos: depth > 0 ? e.before(depth) : 0,
        start: e.start(depth),
        depth,
        node: r,
      };
    }
  }
}
export { eE as eL };
function eS(e) {
  return (t) => eE(t.$from, e);
}
export function iI(e, t, n) {
  if (e.config[t] === undefined && e.parent) {
    return iI(e.parent, t, n);
  }
  if (typeof e.config[t] === "function") {
    return e.config[t].bind({
      ...n,
      parent: e.parent ? iI(e.parent, t, n) : null,
    });
  }
  return e.config[t];
}
function eT(e) {
  return e
    .map((e) => {
      let t = {
        name: e.name,
        options: e.options,
        storage: e.storage,
      };
      let n = iI(e, "addExtensions", t);
      if (n) {
        return [e, ...eT(n())];
      }
      return e;
    })
    .flat(10);
}
export { eT as tp };
export function su(e, t) {
  let n = s.ZF.fromSchema(t).serializeFragment(e);
  let r = document.implementation.createHTMLDocument().createElement("div");
  r.appendChild(n);
  return r.innerHTML;
}
function eA(e) {
  return typeof e === "function";
}
export function gk(e, t, ...n) {
  if (eA(e)) {
    if (t) {
      return e.bind(t)(...n);
    }
    return e(...n);
  }
  return e;
}
function eD(e) {
  let baseExtensions = e.filter((e) => e.type === "extension");
  return {
    baseExtensions,
    nodeExtensions: e.filter((e) => e.type === "node"),
    markExtensions: e.filter((e) => e.type === "mark"),
  };
}
function eN(e) {
  let t = [];
  let { nodeExtensions, markExtensions } = eD(e);
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
    let n = {
      name: e.name,
      options: e.options,
      storage: e.storage,
      extensions,
    };
    let r = iI(e, "addGlobalAttributes", n);
    if (r) {
      r().forEach((e) => {
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
          Object.entries(e.attributes).forEach(([e, r]) => {
            t.push({
              type,
              name: e,
              attribute: {
                ...o,
                ...r,
              },
            });
          });
        });
      });
    }
  });
  extensions.forEach((e) => {
    let n = {
      name: e.name,
      options: e.options,
      storage: e.storage,
    };
    let r = iI(e, "addAttributes", n);
    if (r) {
      Object.entries(r()).forEach(([n, r]) => {
        let attribute = {
          ...o,
          ...r,
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
          name: n,
          attribute,
        });
      });
    }
  });
  return t;
}
function eI(e) {
  let t = [];
  let n = ((e) => {
    let t = [];
    let n = "";
    let r = false;
    let i = false;
    let o = 0;
    let e_length = e.length;
    for (let a = 0; a < e_length; a += 1) {
      let s = e[a];
      if (s === "'" && !i) {
        r = !r;
        n += s;
        continue;
      }
      if (s === '"' && !r) {
        i = !i;
        n += s;
        continue;
      }
      if (!r && !i) {
        if (s === "(") {
          o += 1;
          n += s;
          continue;
        }
        if (s === ")" && o > 0) {
          o -= 1;
          n += s;
          continue;
        }
        if (s === ";" && o === 0) {
          t.push(n);
          n = "";
          continue;
        }
      }
      n += s;
    }
    if (n) {
      t.push(n);
    }
    return t;
  })(e || "");
  let n_length = n.length;
  for (let e = 0; e < n_length; e += 1) {
    let r = n[e];
    let i = r.indexOf(":");
    if (i === -1) {
      continue;
    }
    let o = r.slice(0, i).trim();
    let s = r.slice(i + 1).trim();
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
      let n = {
        ...acc,
      };
      Object.entries(item).forEach(([e, t]) => {
        if (!n[e]) {
          n[e] = t;
          return;
        }
        if (e === "class") {
          let r = t ? String(t).split(" ") : [];
          let i = n[e] ? n[e].split(" ") : [];
          let o = r.filter((e) => !i.includes(e));
          n[e] = [...i, ...o].join(" ");
        } else if (e === "style") {
          let r = new Map([...eI(n[e]), ...eI(t)]);
          n[e] = Array.from(r.entries())
            .map(([e, t]) => `${e}: ${t}`)
            .join("; ");
        } else {
          n[e] = t;
        }
      });
      return n;
    }, {});
}
export function zU(e, t) {
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
function eR(e, t) {
  if ("style" in e) {
    return e;
  }
  return {
    ...e,
    getAttrs: (n) => {
      let r = e.getAttrs ? e.getAttrs(n) : e.attrs;
      if (r === false) {
        return false;
      }
      let i = t.reduce((acc, item) => {
        var r;
        let i = item.attribute.parseHTML
          ? item.attribute.parseHTML(n)
          : typeof (r = n.getAttribute(item.name)) !== "string"
            ? r
            : r.match(/^[+-]?(?:\d*\.)?\d+$/)
              ? Number(r)
              : r === "true" || (r !== "false" && r);
        if (i == null) {
          return acc;
        }
        return {
          ...acc,
          [item.name]: i,
        };
      }, {});
      return {
        ...r,
        ...i,
      };
    },
  };
}
function ez(e) {
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
function eL(e) {
  let t;
  let n;
  let r = {};
  if (
    !((t = e == null ? undefined : e.attribute) == null
      ? undefined
      : t.isRequired) &&
    "default" in ((e == null ? undefined : e.attribute) || {})
  ) {
    r.default = e.attribute.default;
  }
  if (
    ((n = e == null ? undefined : e.attribute) == null
      ? undefined
      : n.validate) !== undefined
  ) {
    r.validate = e.attribute.validate;
  }
  return [e.name, r];
}
function eB(e, editor) {
  let n;
  let r = eN(e);
  let { nodeExtensions, markExtensions } = eD(e);
  let topNode =
    (n = nodeExtensions.find((e) => iI(e, "topNode"))) == null
      ? undefined
      : n.name;
  let nodes = Object.fromEntries(
    nodeExtensions.map((n) => {
      let i = r.filter((e) => e.type === n.name);
      let o = {
        name: n.name,
        options: n.options,
        storage: n.storage,
        editor,
      };
      let s = ez({
        ...e.reduce((acc, item) => {
          let r = iI(item, "extendNodeSchema", o);
          return {
            ...acc,
            ...(r ? r(n) : {}),
          };
        }, {}),
        content: gk(iI(n, "content", o)),
        marks: gk(iI(n, "marks", o)),
        group: gk(iI(n, "group", o)),
        inline: gk(iI(n, "inline", o)),
        atom: gk(iI(n, "atom", o)),
        selectable: gk(iI(n, "selectable", o)),
        draggable: gk(iI(n, "draggable", o)),
        code: gk(iI(n, "code", o)),
        whitespace: gk(iI(n, "whitespace", o)),
        linebreakReplacement: gk(iI(n, "linebreakReplacement", o)),
        defining: gk(iI(n, "defining", o)),
        isolating: gk(iI(n, "isolating", o)),
        attrs: Object.fromEntries(i.map(eL)),
      });
      let a = gk(iI(n, "parseHTML", o));
      if (a) {
        s.parseDOM = a.map((e) => eR(e, i));
      }
      let l = iI(n, "renderHTML", o);
      if (l) {
        s.toDOM = (e) =>
          l({
            node: e,
            HTMLAttributes: zU(e, i),
          });
      }
      let d = iI(n, "renderText", o);
      if (d) {
        s.toText = d;
      }
      return [n.name, s];
    }),
  );
  let marks = Object.fromEntries(
    markExtensions.map((n) => {
      let i = r.filter((e) => e.type === n.name);
      let o = {
        name: n.name,
        options: n.options,
        storage: n.storage,
        editor,
      };
      let s = ez({
        ...e.reduce((acc, item) => {
          let r = iI(item, "extendMarkSchema", o);
          return {
            ...acc,
            ...(r ? r(n) : {}),
          };
        }, {}),
        inclusive: gk(iI(n, "inclusive", o)),
        excludes: gk(iI(n, "excludes", o)),
        group: gk(iI(n, "group", o)),
        spanning: gk(iI(n, "spanning", o)),
        code: gk(iI(n, "code", o)),
        attrs: Object.fromEntries(i.map(eL)),
      });
      let a = gk(iI(n, "parseHTML", o));
      if (a) {
        s.parseDOM = a.map((e) => eR(e, i));
      }
      let l = iI(n, "renderHTML", o);
      if (l) {
        s.toDOM = (e) =>
          l({
            mark: e,
            HTMLAttributes: zU(e, i),
          });
      }
      return [n.name, s];
    }),
  );
  return new s.Sj({
    topNode,
    nodes,
    marks,
  });
}
function eV(e) {
  return e.sort((e, t) => {
    let n = iI(e, "priority") || 100;
    let r = iI(t, "priority") || 100;
    if (n > r) {
      return -1;
    }
    return +(n < r);
  });
}
function eF(e) {
  let t;
  let n = eV(eT(e));
  let r = Array.from(
    new Set((t = n.map((e) => e.name)).filter((e, n) => t.indexOf(e) !== n)),
  );
  if (r.length) {
    console.warn(
      `[tiptap warn]: Duplicate extension names found: [${r.map((e) => `'${e}'`).join(", ")}]. This can lead to issues.`,
    );
  }
  return n;
}
export function yQ(e, t) {
  let n = eB(eF(t), undefined);
  let r = W(e);
  return s.S4.fromSchema(n).parse(r).toJSON();
}
function e_(e, t, n) {
  let { from, to } = t;
  let { blockSeparator = "\n\n", textSerializers = {} } = n || {};
  let a = "";
  e.nodesBetween(from, to, (e, n, l, d) => {
    var c;
    if (e.isBlock && n > from) {
      a += blockSeparator;
    }
    let u = textSerializers == null ? undefined : textSerializers[e.type.name];
    if (u) {
      if (l) {
        a += u({
          node: e,
          pos: n,
          parent: l,
          index: d,
          range: t,
        });
      }
      return false;
    }
    if (e.isText) {
      a +=
        (c = e == null ? undefined : e.text) == null
          ? undefined
          : c.slice(Math.max(from, n) - n, to - n);
    }
  });
  return a;
}
function eq(schema) {
  return Object.fromEntries(
    Object.entries(schema.nodes)
      .filter(([, e]) => e.spec.toText)
      .map(([e, t]) => [e, t.spec.toText]),
  );
}
export function gu(e, t) {
  let n = ed(typeof t === "string" ? t : t.name, e.schema);
  switch (n) {
    case "node":
      return ((e, t) => {
        let n = Pg(t, e.schema);
        let { from, to } = e.selection;
        let o = [];
        e.doc.nodesBetween(from, to, (e) => {
          o.push(e);
        });
        let s = o.reverse().find((e) => e.type.name === n.name);
        if (s) {
          return {
            ...s.attrs,
          };
        }
        return {};
      })(e, t);
    case "mark":
      return ek(e, t);
    default:
      return {};
  }
}
export function FF(e) {
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
      let n = {};
      return e.filter((e) => {
        let r = t(e);
        return !Object.prototype.hasOwnProperty.call(n, r) && (n[r] = true);
      });
    })(i)).length === 1
  ) {
    return t;
  }
  return t.filter(
    (e, n) =>
      !t
        .filter((e, t) => t !== n)
        .some(
          (t) =>
            e.oldRange.from >= t.oldRange.from &&
            e.oldRange.to <= t.oldRange.to &&
            e.newRange.from >= t.newRange.from &&
            e.newRange.to <= t.newRange.to,
        ),
  );
}
export function hO(e, t, n) {
  let r = [];
  if (e === t) {
    n.resolve(e)
      .marks()
      .forEach((t) => {
        let i = N(n.resolve(e), t.type);
        if (i) {
          r.push({
            mark: t,
            ...i,
          });
        }
      });
  } else {
    n.nodesBetween(e, t, (e, t) => {
      if (e && (e == null ? undefined : e.nodeSize) !== undefined) {
        r.push(
          ...e.marks.map((n) => ({
            from: t,
            to: t + e.nodeSize,
            mark: n,
          })),
        );
      }
    });
  }
  return r;
}
export var fl = (e, t, n, r = 20) => {
  let i = e.doc.resolve(n);
  let o = r;
  let s = null;
  while (o > 0 && s === null) {
    let e = i.node(o);
    if ((e == null ? undefined : e.type.name) === t) {
      s = e;
    } else {
      o -= 1;
    }
  }
  return [s, o];
};
function eZ(name, schema) {
  return schema.nodes[name] || schema.marks[name] || null;
}
function eJ(attributes, name, attrs) {
  return Object.fromEntries(
    Object.entries(attrs).filter(([n]) => {
      let r = attributes.find((e) => e.type === name && e.name === n);
      return !!r && r.attribute.keepOnSplit;
    }),
  );
}
function eG(e, t, n = {}) {
  let { empty, ranges } = e.selection;
  let o = t ? I(t, e.schema) : null;
  if (empty) {
    return !!(e.storedMarks || e.selection.$from.marks())
      .filter((e) => !o || o.name === e.type.name)
      .find((e) =>
        A(e.attrs, n, {
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
      let n = Math.max($from_pos, t);
      let l = Math.min($to_pos, t + e.nodeSize);
      s += l - n;
      a.push(
        ...e.marks.map((e) => ({
          mark: e,
          from: n,
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
      A(e.mark.attrs, n, {
        strict: false,
      }),
    )
    .reduce((acc, item) => acc + item.to - item.from, 0);
  let d = a
    .filter((e) => !o || (e.mark.type !== o && e.mark.type.excludes(o)))
    .reduce((acc, item) => acc + item.to - item.from, 0);
  return (l > 0 ? l + d : l) >= s;
}
export var QN = (e, t) => {
  let { $from, $to, $anchor } = e.selection;
  if (t) {
    let n = eS((e) => e.type.name === t)(e.selection);
    if (!n) {
      return false;
    }
    let r = e.doc.resolve(n.pos + 1);
    return $anchor.pos + 1 === r.end();
  }
  return !($to.parentOffset < $to.parent.nodeSize - 2) && $from.pos === $to.pos;
};
export var J_ = (e) => {
  let { $from, $to } = e.selection;
  return !($from.parentOffset > 0) && $from.pos === $to.pos;
};
function e0(e, t) {
  if (Array.isArray(t)) {
    return t.some((t) => (typeof t === "string" ? t : t.name) === e.name);
  }
  return t;
}
function e1(name, extensions) {
  let { nodeExtensions } = eD(extensions);
  let r = nodeExtensions.find((t) => t.name === name);
  if (!r) {
    return false;
  }
  let i = {
    name: r.name,
    options: r.options,
    storage: r.storage,
  };
  let o = gk(iI(r, "group", i));
  return typeof o === "string" && o.split(" ").includes("list");
}
export function Op(e, { checkChildren = true, ignoreWhitespace = false } = {}) {
  let r;
  if (ignoreWhitespace) {
    if (e.type.name === "hardBreak") {
      return true;
    }
    if (e.isText) {
      return !/\S/.test((r = e.text) != null ? r : "");
    }
  }
  if (e.isText) {
    return !e.text;
  }
  if (e.isAtom || e.isLeaf) {
    return false;
  }
  if (e.content.childCount === 0) {
    return true;
  }
  if (checkChildren) {
    let r = true;
    e.content.forEach((e) => {
      if (r !== false) {
        if (
          !Op(e, {
            ignoreWhitespace,
            checkChildren,
          })
        ) {
          r = false;
        }
      }
    });
    return r;
  }
  return false;
}
export function BQ(e) {
  return e instanceof o.nh;
}
const e9 = class e {
  constructor(e) {
    this.position = e;
  }
  static fromJSON(t) {
    return new e(t.position);
  }
  toJSON() {
    return {
      position: this.position,
    };
  }
};
function getUpdatedPosition(e, t) {
  let mapResult = t.mapping.mapResult(e.position);
  return {
    position: new e9(mapResult.pos),
    mapResult,
  };
}
function createMappablePosition(e) {
  return new e9(e);
}
var e4 =
  (e, t = {}) =>
  ({ tr, state, dispatch }) => {
    let { selection } = tr;
    let { empty, ranges } = selection;
    let l = I(e, state.schema);
    if (dispatch) {
      if (empty) {
        let e = ek(state, l);
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
          state.doc.nodesBetween(pos, pos_1, (e, r) => {
            let s = Math.max(r, pos);
            let a = Math.min(r + e.nodeSize, pos_1);
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
    return ((e, t, n) => {
      let r;
      let { selection } = t;
      let o = null;
      if (R(selection)) {
        o = selection.$cursor;
      }
      if (o) {
        let t = (r = e.storedMarks) != null ? r : o.marks();
        return (
          o.parent.type.allowsMarkType(n) &&
          (!!n.isInSet(t) || !t.some((e) => e.type.excludes(n)))
        );
      }
      let { ranges } = selection;
      return ranges.some(({ $from, $to }) => {
        let i =
          $from.depth === 0 &&
          e.doc.inlineContent &&
          e.doc.type.allowsMarkType(n);
        e.doc.nodesBetween($from.pos, $to.pos, (e, t, r) => {
          if (i) {
            return false;
          }
          if (e.isInline) {
            let t = !r || r.type.allowsMarkType(n);
            let o =
              !!n.isInSet(e.marks) || !e.marks.some((e) => e.type.excludes(n));
            i = t && o;
          }
          return !i;
        });
        return i;
      });
    })(state, tr, l);
  };
var e5 =
  (e, t) =>
  ({ tr }) => {
    tr.setMeta(e, t);
    return true;
  };
var e7 =
  (e, t = {}) =>
  ({ state, dispatch, chain }) => {
    let s;
    let a = Pg(e, state.schema);
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
var te =
  (e) =>
  ({ tr, dispatch }) => {
    if (dispatch) {
      let { doc } = tr;
      let r = z(e, 0, doc.content.size);
      let i = o.nh.create(doc, r);
      tr.setSelection(i);
    }
    return true;
  };
var tt =
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
      tr.doc.nodesBetween(o, s, (t, r) => {
        if (!t.isText) {
          tr.setNodeMarkup(r, undefined, {
            ...t.attrs,
            dir,
          });
        }
      });
    }
    return true;
  };
var tn =
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
      let l = z(from, s, a);
      let d = z(to, s, a);
      let c = o.U3.create(doc, l, d);
      tr.setSelection(c);
    }
    return true;
  };
var tr =
  (e) =>
  ({ state, dispatch }) => {
    let r = Pg(e, state.schema);
    return a.$B(r)(state, dispatch);
  };
function ti(state, splittableMarks) {
  let n =
    state.storedMarks ||
    (state.selection.$to.parentOffset && state.selection.$from.marks());
  if (n) {
    let r = n.filter((e) => {
      if (splittableMarks == null) {
        return undefined;
      }
      return splittableMarks.includes(e.type.name);
    });
    state.tr.ensureMarks(r);
  }
}
var to =
  ({ keepMarks = true } = {}) =>
  ({ tr, state, dispatch, editor }) => {
    let { selection, doc } = tr;
    let { $from, $to } = selection;
    let u = eJ(
      editor.extensionManager.attributes,
      $from.node().type.name,
      $from.node().attrs,
    );
    if (selection instanceof o.nh && selection.node.isBlock) {
      return (
        !!$from.parentOffset &&
        !!r.zy(doc, $from.pos) &&
        (dispatch &&
          (keepMarks && ti(state, editor.extensionManager.splittableMarks),
          tr.split($from.pos).scrollIntoView()),
        true)
      );
    }
    if (!$from.parent.isBlock) {
      return false;
    }
    let p = $to.parentOffset === $to.parent.content.size;
    let h =
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
    let f =
      p && h
        ? [
            {
              type: h,
              attrs: u,
            },
          ]
        : undefined;
    let m = r.zy(tr.doc, tr.mapping.map($from.pos), 1, f);
    if (
      !f &&
      !m &&
      r.zy(
        tr.doc,
        tr.mapping.map($from.pos),
        1,
        h
          ? [
              {
                type: h,
              },
            ]
          : undefined,
      )
    ) {
      m = true;
      f = h
        ? [
            {
              type: h,
              attrs: u,
            },
          ]
        : undefined;
    }
    if (dispatch) {
      if (
        m &&
        (selection instanceof o.U3 && tr.deleteSelection(),
        tr.split(tr.mapping.map($from.pos), 1, f),
        h && !p && !$from.parentOffset && $from.parent.type !== h)
      ) {
        let e = tr.mapping.map($from.before());
        let n = tr.doc.resolve(e);
        if ($from.node(-1).canReplaceWith(n.index(), n.index() + 1, h)) {
          tr.setNodeMarkup(tr.mapping.map($from.before()), h);
        }
      }
      if (keepMarks) {
        ti(state, editor.extensionManager.splittableMarks);
      }
      tr.scrollIntoView();
    }
    return m;
  };
var ts =
  (e, t = {}) =>
  ({ tr, state, dispatch, editor }) => {
    var d;
    let c = Pg(e, state.schema);
    let { $from, $to } = state.selection;
    let node = state.selection.node;
    if ((node && node.isBlock) || $from.depth < 2 || !$from.sameParent($to)) {
      return false;
    }
    let f = $from.node(-1);
    if (f.type !== c) {
      return false;
    }
    let attributes = editor.extensionManager.attributes;
    if (
      $from.parent.content.size === 0 &&
      $from.node(-1).childCount === $from.indexAfter(-1)
    ) {
      if (
        $from.depth === 2 ||
        $from.node(-3).type !== c ||
        $from.index(-2) !== $from.node(-2).childCount - 1
      ) {
        return false;
      }
      if (dispatch) {
        let e = s.FK.empty;
        let r = $from.index(-1) ? 1 : $from.index(-2) ? 2 : 3;
        for (let t = $from.depth - r; t >= $from.depth - 3; t -= 1) {
          e = s.FK.from($from.node(t).copy(e));
        }
        let i =
          $from.indexAfter(-1) < $from.node(-2).childCount
            ? 1
            : $from.indexAfter(-2) < $from.node(-3).childCount
              ? 2
              : 3;
        let a = {
          ...eJ(attributes, $from.node().type.name, $from.node().attrs),
          ...t,
        };
        let l =
          ((d = c.contentMatch.defaultType) == null
            ? undefined
            : d.createAndFill(a)) || undefined;
        e = e.append(s.FK.from(c.createAndFill(null, l) || undefined));
        let p = $from.before($from.depth - (r - 1));
        tr.replace(p, $from.after(-i), new s.Ji(e, 4 - r, 0));
        let h = -1;
        tr.doc.nodesBetween(p, tr.doc.content.size, (e, t) => {
          if (h > -1) {
            return false;
          }
          if (e.isTextblock && e.content.size === 0) {
            h = t + 1;
          }
        });
        if (h > -1) {
          tr.setSelection(o.U3.near(tr.doc.resolve(h)));
        }
        tr.scrollIntoView();
      }
      return true;
    }
    let g = $to.pos === $from.end() ? f.contentMatchAt(0).defaultType : null;
    let v = {
      ...eJ(attributes, f.type.name, f.attrs),
      ...t,
    };
    let y = {
      ...eJ(attributes, $from.node().type.name, $from.node().attrs),
      ...t,
    };
    tr.delete($from.pos, $to.pos);
    let b = g
      ? [
          {
            type: c,
            attrs: v,
          },
          {
            type: g,
            attrs: y,
          },
        ]
      : [
          {
            type: c,
            attrs: v,
          },
        ];
    if (!r.zy(tr.doc, $from.pos, 2)) {
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
const ta = (e, t) => {
  let n = eS((e) => e.type === t)(e.selection);
  if (!n) {
    return true;
  }
  let i = e.doc.resolve(Math.max(0, n.pos - 1)).before(n.depth);
  if (i === undefined) {
    return true;
  }
  let o = e.doc.nodeAt(i);
  return (
    !(n.node.type === (o == null ? undefined : o.type) && r.n9(e.doc, n.pos)) ||
    (e.join(n.pos), true)
  );
};
const tl = (e, t) => {
  let n = eS((e) => e.type === t)(e.selection);
  if (!n) {
    return true;
  }
  let i = e.doc.resolve(n.start).after(n.depth);
  if (i === undefined) {
    return true;
  }
  let o = e.doc.nodeAt(i);
  return (
    !(n.node.type === (o == null ? undefined : o.type) && r.n9(e.doc, i)) ||
    (e.join(i), true)
  );
};
var td =
  (e, t, n, r = {}) =>
  ({ editor, tr, state, dispatch, chain, commands, can }) => {
    let { extensions, splittableMarks } = editor.extensionManager;
    let f = Pg(e, state.schema);
    let m = Pg(t, state.schema);
    let { selection, storedMarks } = state;
    let { $from, $to } = selection;
    let w = $from.blockRange($to);
    let k =
      storedMarks || (selection.$to.parentOffset && selection.$from.marks());
    if (!w) {
      return false;
    }
    let M = eS((e) => e1(e.type.name, extensions))(selection);
    let E = selection.from === 0 && selection.to === state.doc.content.size;
    let content = state.doc.content.content;
    let C = content.length === 1 ? content[0] : null;
    let T =
      E && C && e1(C.type.name, extensions)
        ? {
            node: C,
            pos: 0,
            depth: 0,
          }
        : null;
    let O = M != null ? M : T;
    let A = !!M && w.depth >= 1 && w.depth - M.depth <= 1;
    let P = !!T;
    if ((A || P) && O) {
      if (O.node.type === f) {
        if (E && P) {
          return chain()
            .command(({ tr, dispatch }) => {
              let n = ((e) => {
                let e_doc = e.doc;
                let t_firstChild = e_doc.firstChild;
                if (!t_firstChild) {
                  return null;
                }
                let r = t_firstChild.nodeSize - 1;
                return o.U3.create(e_doc, 1, r);
              })(tr);
              return (
                !!n && (tr.setSelection(n), dispatch && dispatch(tr), true)
              );
            })
            .liftListItem(m)
            .run();
        }
        return commands.liftListItem(m);
      }
      if (e1(O.node.type.name, extensions) && f.validContent(O.node.content)) {
        return chain()
          .command(() => {
            tr.setNodeMarkup(O.pos, f);
            return true;
          })
          .command(() => ta(tr, f))
          .command(() => tl(tr, f))
          .run();
      }
    }
    if (n && k && dispatch) {
      return chain()
        .command(() => {
          let e = can().wrapInList(f, r);
          let t = k.filter((e) => splittableMarks.includes(e.type.name));
          tr.ensureMarks(t);
          return !!e || commands.clearNodes();
        })
        .wrapInList(f, r)
        .command(() => ta(tr, f))
        .command(() => tl(tr, f))
        .run();
    }
    return chain()
      .command(() => !!can().wrapInList(f, r) || commands.clearNodes())
      .wrapInList(f, r)
      .command(() => ta(tr, f))
      .command(() => tl(tr, f))
      .run();
  };
var tc =
  (e, t = {}, n = {}) =>
  ({ state, commands }) => {
    let { extendEmptyMarkRange = false } = n;
    let s = I(e, state.schema);
    if (eG(state, s, t)) {
      return commands.unsetMark(s, {
        extendEmptyMarkRange,
      });
    }
    return commands.setMark(s, t);
  };
var tu =
  (e, t, n = {}) =>
  ({ state, commands }) => {
    let o;
    let s = Pg(e, state.schema);
    let a = Pg(t, state.schema);
    let l = rU(state, s, n);
    if (state.selection.$anchor.sameParent(state.selection.$head)) {
      o = state.selection.$anchor.parent.attrs;
    }
    if (l) {
      return commands.setNode(a, o);
    }
    return commands.setNode(s, {
      ...o,
      ...n,
    });
  };
var tp =
  (e, t = {}) =>
  ({ state, commands }) => {
    let i = Pg(e, state.schema);
    if (rU(state, i, t)) {
      return commands.lift(i);
    }
    return commands.wrapIn(i, t);
  };
var th =
  () =>
  ({ state, dispatch }) => {
    let state_plugins = state.plugins;
    for (let r = 0; r < state_plugins.length; r += 1) {
      let i;
      let state_plugin = state_plugins[r];
      if (
        state_plugin.spec.isInputRules &&
        (i = state_plugin.getState(state))
      ) {
        if (dispatch) {
          let t = state.tr;
          let n = i.transform;
          for (let e = n.steps.length - 1; e >= 0; e -= 1) {
            t.step(n.steps[e].invert(n.docs[e]));
          }
          if (i.text) {
            let n = t.doc.resolve(i.from).marks();
            t.replaceWith(i.from, i.to, state.schema.text(i.text, n));
          } else {
            t.delete(i.from, i.to);
          }
        }
        return true;
      }
    }
    return false;
  };
var tf =
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
var tm =
  (e, t = {}) =>
  ({ tr, state, dispatch }) => {
    var o;
    let { extendEmptyMarkRange = false } = t;
    let { selection } = tr;
    let l = I(e, state.schema);
    let { $from, empty, ranges } = selection;
    if (!dispatch) {
      return true;
    }
    if (empty && extendEmptyMarkRange) {
      let { from, to } = selection;
      let r =
        (o = $from.marks().find((e) => e.type === l)) == null
          ? undefined
          : o.attrs;
      let i = N($from, l, r);
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
var tg =
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
      tr.doc.nodesBetween(i, o, (e, n) => {
        if (e.isText) {
          return;
        }
        let r = {
          ...e.attrs,
        };
        delete r.dir;
        tr.setNodeMarkup(n, undefined, r);
      });
    }
    return true;
  };
var tv =
  (e, t = {}) =>
  ({ tr, state, dispatch }) => {
    let o = null;
    let s = null;
    let a = ed(typeof e === "string" ? e : e.name, state.schema);
    if (!a) {
      return false;
    }
    if (a === "node") {
      o = Pg(e, state.schema);
    }
    if (a === "mark") {
      s = I(e, state.schema);
    }
    let l = false;
    tr.selection.ranges.forEach((e) => {
      let a;
      let d;
      let c;
      let u;
      let pos = e.$from.pos;
      let pos_1 = e.$to.pos;
      if (tr.selection.empty) {
        state.doc.nodesBetween(pos, pos_1, (e, t) => {
          if (o && o === e.type) {
            l = true;
            c = Math.max(t, pos);
            u = Math.min(t + e.nodeSize, pos_1);
            a = t;
            d = e;
          }
        });
      } else {
        state.doc.nodesBetween(pos, pos_1, (e, r) => {
          if (r < pos && o && o === e.type) {
            l = true;
            c = Math.max(r, pos);
            u = Math.min(r + e.nodeSize, pos_1);
            a = r;
            d = e;
          }
          if (r >= pos && r <= pos_1) {
            if (o && o === e.type) {
              l = true;
              if (dispatch) {
                tr.setNodeMarkup(r, undefined, {
                  ...e.attrs,
                  ...t,
                });
              }
            }
            if (s && e.marks.length) {
              e.marks.forEach((o) => {
                if (s === o.type && ((l = true), dispatch)) {
                  let i = Math.max(r, pos);
                  let a = Math.min(r + e.nodeSize, pos_1);
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
      if (d) {
        if (a !== undefined && dispatch) {
          tr.setNodeMarkup(a, undefined, {
            ...d.attrs,
            ...t,
          });
        }
        if (s && d.marks.length) {
          d.marks.forEach((e) => {
            if (s === e.type && dispatch) {
              tr.addMark(
                c,
                u,
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
var ty =
  (e, t = {}) =>
  ({ state, dispatch }) => {
    let o = Pg(e, state.schema);
    return i.Im(o, t)(state, dispatch);
  };
var tb =
  (e, t = {}) =>
  ({ state, dispatch }) => {
    let i = Pg(e, state.schema);
    return a.Sd(i, t)(state, dispatch);
  };
class tw {
  constructor() {
    this.callbacks = {};
  }
  on(e, t) {
    if (!this.callbacks[e]) {
      this.callbacks[e] = [];
    }
    this.callbacks[e].push(t);
    return this;
  }
  emit(e, ...t) {
    let n = this.callbacks[e];
    if (n) {
      n.forEach((e) => e.apply(this, t));
    }
    return this;
  }
  off(e, t) {
    let n = this.callbacks[e];
    if (n) {
      if (t) {
        this.callbacks[e] = n.filter((e) => e !== t);
      } else {
        delete this.callbacks[e];
      }
    }
    return this;
  }
  once(e, t) {
    let n = (...r) => {
      this.off(e, n);
      t.apply(this, r);
    };
    return this.on(e, n);
  }
  removeAllListeners() {
    this.callbacks = {};
  }
}
class tk {
  constructor(e) {
    var t;
    this.find = e.find;
    this.handler = e.handler;
    this.undoable = (t = e.undoable) == null || t;
  }
}
function tx(e) {
  let t;
  let { editor, from, to, text, rules, plugin } = e;
  let { view } = editor;
  if (view.composing) {
    return false;
  }
  let d = view.state.doc.resolve(from);
  if (
    d.parent.type.spec.code ||
    ((t = d.nodeBefore || d.nodeAfter) == null
      ? undefined
      : t.marks.find((e) => e.type.spec.code))
  ) {
    return false;
  }
  let c = false;
  let u =
    ((e, t = 500) => {
      let n = "";
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
          n +=
            e.isAtom && !e.isText
              ? l
              : l.slice(0, Math.max(0, e_parentOffset - t));
        },
      );
      return n;
    })(d) + text;
  rules.forEach((e) => {
    if (c) {
      return;
    }
    let t = ((e, t) => {
      if (O(t)) {
        return t.exec(e);
      }
      let n = t(e);
      if (!n) {
        return null;
      }
      let r = [n.text];
      r.index = n.index;
      r.input = e;
      r.data = n.data;
      if (n.replaceWith) {
        if (!n.text.includes(n.replaceWith)) {
          console.warn(
            '[tiptap warn]: "inputRuleMatch.replaceWith" must be part of "inputRuleMatch.text".',
          );
        }
        r.push(n.replaceWith);
      }
      return r;
    })(u, e.find);
    if (!t) {
      return;
    }
    let s = view.state.tr;
    let d = p({
      state: view.state,
      transaction: s,
    });
    let f = {
      from: from - (t[0].length - text.length),
      to,
    };
    let { commands, chain, can } = new h({
      editor,
      state: d,
    });
    if (
      e.handler({
        state: d,
        range: f,
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
      c = true;
    }
  });
  return c;
}
function tM(e) {
  return (
    Object.prototype.toString.call(e).slice(8, -1) === "Object" &&
    e.constructor === Object &&
    Object.getPrototypeOf(e) === Object.prototype
  );
}
class tE {
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
      ...(gk(
        iI(this, "addOptions", {
          name: this.name,
        }),
      ) || {}),
    };
  }
  get storage() {
    return {
      ...(gk(
        iI(this, "addStorage", {
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
        (function e(t, n) {
          let r = {
            ...t,
          };
          if (tM(t) && tM(n)) {
            Object.keys(n).forEach((i) => {
              if (tM(n[i]) && tM(t[i])) {
                r[i] = e(t[i], n[i]);
              } else {
                r[i] = n[i];
              }
            });
          }
          return r;
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
export var CU = class e extends tE {
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
class tC {
  constructor(e) {
    this.find = e.find;
    this.handler = e.handler;
  }
}
let tT = null;
class tO {
  constructor(e, t) {
    this.splittableMarks = [];
    this.editor = t;
    this.baseExtensions = e;
    this.extensions = eF(e);
    this.schema = eB(this.extensions, t);
    this.setupExtensions();
  }
  get commands() {
    return this.extensions.reduce((acc, extension) => {
      let n = {
        name: extension.name,
        options: extension.options,
        storage: this.editor.extensionStorage[extension.name],
        editor: this.editor,
        type: eZ(extension.name, this.schema),
      };
      let r = iI(extension, "addCommands", n);
      if (r) {
        return {
          ...acc,
          ...r(),
        };
      }
      return acc;
    }, {});
  }
  get plugins() {
    let { editor } = this;
    return eV([...this.extensions].reverse()).flatMap((t) => {
      let n = {
        name: t.name,
        options: t.options,
        storage: this.editor.extensionStorage[t.name],
        editor,
        type: eZ(t.name, this.schema),
      };
      let r = [];
      let i = iI(t, "addKeyboardShortcuts", n);
      let a = {};
      if (t.type === "mark" && iI(t, "exitable", n)) {
        a.ArrowRight = () =>
          CU.handleExit({
            editor,
            mark: t,
          });
      }
      if (i) {
        let t = Object.fromEntries(
          Object.entries(i()).map(([t, n]) => [
            t,
            () =>
              n({
                editor,
              }),
          ]),
        );
        a = {
          ...a,
          ...t,
        };
      }
      let l = d.w(a);
      r.push(l);
      let c = iI(t, "addInputRules", n);
      if (e0(t, editor.options.enableInputRules) && c) {
        let t = c();
        if (t && t.length) {
          let n = ((e) => {
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
                        text = su(s.FK.from(text), o.schema);
                      }
                      let { from } = l;
                      let a = from + text.length;
                      tx({
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
                  tx({
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
                        tx({
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
                    tx({
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
          let i = Array.isArray(n) ? n : [n];
          r.push(...i);
        }
      }
      let u = iI(t, "addPasteRules", n);
      if (e0(t, editor.options.enablePasteRules) && u) {
        let t = u();
        if (t && t.length) {
          let n = ((e) => {
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
            let c = ({ state, from, to, rule, pasteEvt }) => {
              let state_tr = state.tr;
              if (
                ((e) => {
                  let { editor, state, from, to, rule, pasteEvent, dropEvent } =
                    e;
                  let { commands, chain, can } = new h({
                    editor,
                    state,
                  });
                  let u = [];
                  state.doc.nodesBetween(from, to, (e, t) => {
                    var p;
                    var h;
                    var f;
                    var m;
                    var g;
                    if (
                      ((h = (p = e.type) == null ? undefined : p.spec) == null
                        ? undefined
                        : h.code) ||
                      !(e.isText || e.isTextblock || e.isInline)
                    ) {
                      return;
                    }
                    let v =
                      (g =
                        (m = (f = e.content) == null ? undefined : f.size) !=
                        null
                          ? m
                          : e.nodeSize) != null
                        ? g
                        : 0;
                    let y = Math.max(from, t);
                    let b = Math.min(to, t + v);
                    if (!(y >= b)) {
                      ((e, t, n) => {
                        if (O(t)) {
                          return [...e.matchAll(t)];
                        }
                        let r = t(e, n);
                        if (r) {
                          return r.map((t) => {
                            let n = [t.text];
                            n.index = t.index;
                            n.input = e;
                            n.data = t.data;
                            if (t.replaceWith) {
                              if (!t.text.includes(t.replaceWith)) {
                                console.warn(
                                  '[tiptap warn]: "pasteRuleMatch.replaceWith" must be part of "pasteRuleMatch.text".',
                                );
                              }
                              n.push(t.replaceWith);
                            }
                            return n;
                          });
                        }
                        return [];
                      })(
                        e.isText
                          ? e.text || ""
                          : e.textBetween(y - t, b - t, undefined, "\uFFFC"),
                        rule.find,
                        pasteEvent,
                      ).forEach((e) => {
                        if (e.index === undefined) {
                          return;
                        }
                        let t = y + e.index + 1;
                        let r = t + e[0].length;
                        let i = {
                          from: state.tr.mapping.map(t),
                          to: state.tr.mapping.map(r),
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
                        u.push(p);
                      });
                    }
                  });
                  return u.every((e) => e !== null);
                })({
                  editor,
                  state: p({
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
                      var r;
                      if (
                        (i = (
                          (r = e.dom.parentElement) == null
                            ? undefined
                            : r.contains(t.target)
                        )
                          ? e.dom.parentElement
                          : null)
                      ) {
                        tT = editor;
                      }
                    };
                    let r = () => {
                      if (tT) {
                        tT = null;
                      }
                    };
                    window.addEventListener("dragstart", t);
                    window.addEventListener("dragend", r);
                    return {
                      destroy() {
                        window.removeEventListener("dragstart", t);
                        window.removeEventListener("dragend", r);
                      },
                    };
                  },
                  props: {
                    handleDOMEvents: {
                      drop: (e, n) => {
                        l = i === e.dom.parentElement;
                        dropEvent = n;
                        if (!l) {
                          let e = tT;
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
                        var n;
                        let r =
                          (n = t.clipboardData) == null
                            ? undefined
                            : n.getData("text/html");
                        pasteEvt_1 = t;
                        a = !!(r == null
                          ? undefined
                          : r.includes("data-pm-slice"));
                        return false;
                      },
                    },
                  },
                  appendTransaction: (t, n, r) => {
                    let i = t[0];
                    let o = i.getMeta("uiEvent") === "paste" && !a;
                    let u = i.getMeta("uiEvent") === "drop" && !l;
                    let p = i.getMeta("applyPasteRules");
                    let h = !!p;
                    if (!o && !u && !h) {
                      return;
                    }
                    if (h) {
                      var f;
                      var m;
                      let t;
                      let { text } = p;
                      if (typeof text !== "string") {
                        text = su(s.FK.from(text), r.schema);
                      }
                      let { from } = p;
                      let b_1 = from + text.length;
                      return c({
                        rule,
                        state: r,
                        from,
                        to: {
                          b: b_1,
                        },
                        pasteEvt:
                          ((f = text),
                          (m = (t = new ClipboardEvent("paste", {
                            clipboardData: new DataTransfer(),
                          })).clipboardData) == null ||
                            m.setData("text/html", f),
                          t),
                      });
                    }
                    let g = n.doc.content.findDiffStart(r.doc.content);
                    let v = n.doc.content.findDiffEnd(r.doc.content);
                    if (typeof g === "number" && v && g !== v.b) {
                      return c({
                        rule,
                        state: r,
                        from: g,
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
          r.push(...n);
        }
      }
      let f = iI(t, "addProseMirrorPlugins", n);
      if (f) {
        let e = f();
        r.push(...e);
      }
      return r;
    });
  }
  get attributes() {
    return eN(this.extensions);
  }
  get nodeViews() {
    let { editor } = this;
    let { nodeExtensions } = eD(this.extensions);
    return Object.fromEntries(
      nodeExtensions
        .filter((e) => !!iI(e, "addNodeView"))
        .map((t) => {
          let n = this.attributes.filter((e) => e.type === t.name);
          let r = {
            name: t.name,
            options: t.options,
            storage: this.editor.extensionStorage[t.name],
            editor,
            type: Pg(t.name, this.schema),
          };
          let i = iI(t, "addNodeView", r);
          if (!i) {
            return [];
          }
          let o = i();
          if (o) {
            return [
              t.name,
              (r, i, getPos, decorations, innerDecorations) => {
                let d = zU(r, n);
                return o({
                  node: r,
                  view: i,
                  getPos,
                  decorations,
                  innerDecorations,
                  editor,
                  extension: t,
                  HTMLAttributes: d,
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
    return eV([...this.extensions].reverse()).reduceRight((next, item) => {
      let r = {
        name: item.name,
        options: item.options,
        storage: this.editor.extensionStorage[item.name],
        editor,
        type: eZ(item.name, this.schema),
      };
      let i = iI(item, "dispatchTransaction", r);
      if (i) {
        return (transaction) => {
          i.call(r, {
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
    return eV([...this.extensions]).reduce(
      (acc, item) => {
        let r = {
          name: item.name,
          options: item.options,
          storage: this.editor.extensionStorage[item.name],
          editor,
          type: eZ(item.name, this.schema),
        };
        let i = iI(item, "transformPastedHTML", r);
        if (i) {
          return (t, n) => {
            let o = acc(t, n);
            return i.call(r, o);
          };
        }
        return acc;
      },
      e || ((e) => e),
    );
  }
  get markViews() {
    let { editor } = this;
    let { markExtensions } = eD(this.extensions);
    return Object.fromEntries(
      markExtensions
        .filter((e) => !!iI(e, "addMarkView"))
        .map((t) => {
          let n = this.attributes.filter((e) => e.type === t.name);
          let r = {
            name: t.name,
            options: t.options,
            storage: this.editor.extensionStorage[t.name],
            editor,
            type: I(t.name, this.schema),
          };
          let i = iI(t, "addMarkView", r);
          if (i) {
            return [
              t.name,
              (r, o, inline) => {
                let a = zU(r, n);
                return i()({
                  mark: r,
                  view: o,
                  inline,
                  editor,
                  extension: t,
                  HTMLAttributes: a,
                  updateAttributes: (t) => {
                    nt(r, editor, t);
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
      let n = {
        name: e.name,
        options: e.options,
        storage: this.editor.extensionStorage[e.name],
        editor: this.editor,
        type: eZ(e.name, this.schema),
      };
      if (
        e.type === "mark" &&
        ((t = gk(iI(e, "keepOnSplit", n))) == null || t)
      ) {
        this.splittableMarks.push(e.name);
      }
      let r = iI(e, "onBeforeCreate", n);
      let i = iI(e, "onCreate", n);
      let o = iI(e, "onUpdate", n);
      let s = iI(e, "onSelectionUpdate", n);
      let a = iI(e, "onTransaction", n);
      let l = iI(e, "onFocus", n);
      let d = iI(e, "onBlur", n);
      let c = iI(e, "onDestroy", n);
      if (r) {
        this.editor.on("beforeCreate", r);
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
      if (d) {
        this.editor.on("blur", d);
      }
      if (c) {
        this.editor.on("destroy", c);
      }
    });
  }
}
tO.resolve = eF;
tO.sort = eV;
tO.flatten = eT;
export var XO = {};
u(XO, {
  ClipboardTextSerializer: () => tD,
  Commands: () => tN,
  Delete: () => tI,
  Drop: () => tj,
  Editable: () => t$,
  FocusEvents: () => tz,
  Keymap: () => tL,
  Paste: () => tB,
  Tabindex: () => tV,
  TextDirection: () => tF,
  focusEventsPluginKey: () => tR,
});
export var YY = class e extends tE {
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
var tD = YY.create({
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
            let textSerializers = eq(schema);
            return e_(
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
var tN = YY.create({
  name: "commands",
  addCommands: () => ({
    ...Pi,
  }),
});
var tI = YY.create({
  name: "delete",
  onUpdate({ transaction, appendedTransactions }) {
    let n;
    let i;
    let o;
    let s = () => {
      var n;
      var i;
      var o;
      var s;
      if (
        (s =
          (o =
            (i =
              (n = this.editor.options.coreExtensionOptions) == null
                ? undefined
                : n.delete) == null
              ? undefined
              : i.filterTransaction) == null
            ? undefined
            : o.call(i, transaction)) != null
          ? s
          : transaction.getMeta("y-sync$")
      ) {
        return;
      }
      let combinedTransform = T7(transaction.before, [
        transaction,
        ...appendedTransactions,
      ]);
      FF(combinedTransform).forEach((t) => {
        if (
          combinedTransform.mapping.mapResult(t.oldRange.from).deletedAfter &&
          combinedTransform.mapping.mapResult(t.oldRange.to).deletedBefore
        ) {
          combinedTransform.before.nodesBetween(
            t.oldRange.from,
            t.oldRange.to,
            (n, r) => {
              let i = r + n.nodeSize - 2;
              let o = t.oldRange.from <= r && i <= t.oldRange.to;
              this.editor.emit("delete", {
                type: "node",
                node: n,
                from: r,
                to: i,
                newFrom: combinedTransform.mapping.map(r),
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
      let a_mapping = combinedTransform.mapping;
      combinedTransform.steps.forEach((t, n) => {
        var i;
        var o;
        if (t instanceof r.Ys) {
          let r = a_mapping.slice(n).map(t.from, -1);
          let s = a_mapping.slice(n).map(t.to);
          let d = a_mapping.invert().map(r, -1);
          let c = a_mapping.invert().map(s);
          let u =
            r > 0 &&
            ((i = combinedTransform.doc.nodeAt(r - 1)) == null
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
              from: d,
              to: c,
            },
            newRange: {
              from: r,
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
          (n = this.editor.options.coreExtensionOptions) == null
            ? undefined
            : n.delete) == null
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
var tj = YY.create({
  name: "drop",
  addProseMirrorPlugins() {
    return [
      new o.k_({
        key: new o.hs("tiptapDrop"),
        props: {
          handleDrop: (e, t, n, moved) => {
            this.editor.emit("drop", {
              editor: this.editor,
              event: t,
              slice: n,
              moved,
            });
          },
        },
      }),
    ];
  },
});
var t$ = YY.create({
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
var tR = new o.hs("focusEvents");
var tz = YY.create({
  name: "focusEvents",
  addProseMirrorPlugins() {
    let { editor } = this;
    return [
      new o.k_({
        key: tR,
        props: {
          handleDOMEvents: {
            focus: (t, n) => {
              editor.isFocused = true;
              let r = editor.state.tr
                .setMeta("focus", {
                  event: n,
                })
                .setMeta("addToHistory", false);
              t.dispatch(r);
              return false;
            },
            blur: (t, n) => {
              editor.isFocused = false;
              let r = editor.state.tr
                .setMeta("blur", {
                  event: n,
                })
                .setMeta("addToHistory", false);
              t.dispatch(r);
              return false;
            },
          },
        },
      }),
    ];
  },
});
var tL = YY.create({
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
            let d =
              $anchor.parent.isTextblock && pos > 0
                ? tr.doc.resolve(pos - 1)
                : $anchor;
            let isolating = d.parent.type.spec.isolating;
            let u = $anchor.pos - $anchor.parentOffset;
            let p =
              isolating && d.parent.childCount === 1
                ? u === $anchor.pos
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
    let n = {
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
    let r = {
      ...n,
    };
    let i = {
      ...n,
      "Ctrl-h": Backspace,
      "Alt-Backspace": Backspace,
      "Ctrl-d": Delete,
      "Ctrl-Alt-Backspace": Delete,
      "Alt-Delete": Delete,
      "Alt-d": Delete,
      "Ctrl-a": () => this.editor.commands.selectTextblockStart(),
      "Ctrl-e": () => this.editor.commands.selectTextblockEnd(),
    };
    if (V() || en()) {
      return i;
    }
    return r;
  },
  addProseMirrorPlugins() {
    return [
      new o.k_({
        key: new o.hs("clearDocument"),
        appendTransaction: (e, t, n) => {
          if (e.some((e) => e.getMeta("composition"))) {
            return;
          }
          let r = e.some((e) => e.docChanged) && !t.doc.eq(n.doc);
          let i = e.some((e) => e.getMeta("preventClearDocument"));
          if (!r || i) {
            return;
          }
          let { empty, from, to } = t.selection;
          let from_1 = o.LN.atStart(t.doc).from;
          let c = o.LN.atEnd(t.doc).to;
          if (empty || from !== from_1 || to !== c || !Op(n.doc)) {
            return;
          }
          let u = n.tr;
          let f = p({
            state: n,
            transaction: u,
          });
          let { commands } = new h({
            editor: this.editor,
            state: f,
          });
          commands.clearNodes();
          if (u.steps.length) {
            return u;
          }
        },
      }),
    ];
  },
});
var tB = YY.create({
  name: "paste",
  addProseMirrorPlugins() {
    return [
      new o.k_({
        key: new o.hs("tiptapPaste"),
        props: {
          handlePaste: (e, t, n) => {
            this.editor.emit("paste", {
              editor: this.editor,
              event: t,
              slice: n,
            });
          },
        },
      }),
    ];
  },
});
var tV = YY.create({
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
var tF = YY.create({
  name: "textDirection",
  addOptions: () => ({
    direction: undefined,
  }),
  addGlobalAttributes() {
    if (!this.options.direction) {
      return [];
    }
    let { nodeExtensions } = eD(this.extensions);
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
const tU = class e {
  constructor(e, t, n = false, r = null) {
    this.currentNode = null;
    this.actualDepth = null;
    this.isBlock = n;
    this.resolvedPos = e;
    this.editor = t;
    this.currentNode = r;
  }
  get name() {
    return this.node.type.name;
  }
  get node() {
    return this.currentNode || this.resolvedPos.node();
  }
  get element() {
    return this.editor.view.domAtPos(this.pos).node;
  }
  get depth() {
    let e;
    if ((e = this.actualDepth) != null) {
      return e;
    }
    return this.resolvedPos.depth;
  }
  get pos() {
    return this.resolvedPos.pos;
  }
  get content() {
    return this.node.content;
  }
  set content(e) {
    let from = this.from;
    let n = this.to;
    if (this.isBlock) {
      if (this.content.size === 0) {
        return void console.error(
          `You can\u2019t set content on a block node. Tried to set content on ${this.name} at ${this.pos}`,
        );
      }
      from = this.from + 1;
      n = this.to - 1;
    }
    this.editor.commands.insertContentAt(
      {
        from,
        to: n,
      },
      e,
    );
  }
  get attributes() {
    return this.node.attrs;
  }
  get textContent() {
    return this.node.textContent;
  }
  get size() {
    return this.node.nodeSize;
  }
  get from() {
    if (this.isBlock) {
      return this.pos;
    }
    return this.resolvedPos.start(this.resolvedPos.depth);
  }
  get range() {
    return {
      from: this.from,
      to: this.to,
    };
  }
  get to() {
    if (this.isBlock) {
      return this.pos + this.size;
    }
    return this.resolvedPos.end(this.resolvedPos.depth) + +!this.node.isText;
  }
  get parent() {
    if (this.depth === 0) {
      return null;
    }
    let t = this.resolvedPos.start(this.resolvedPos.depth - 1);
    return new e(this.resolvedPos.doc.resolve(t), this.editor);
  }
  get before() {
    let t = this.resolvedPos.doc.resolve(this.from - (this.isBlock ? 1 : 2));
    if (t.depth !== this.depth) {
      t = this.resolvedPos.doc.resolve(this.from - 3);
    }
    return new e(t, this.editor);
  }
  get after() {
    let t = this.resolvedPos.doc.resolve(this.to + (this.isBlock ? 2 : 1));
    if (t.depth !== this.depth) {
      t = this.resolvedPos.doc.resolve(this.to + 3);
    }
    return new e(t, this.editor);
  }
  get children() {
    let t = [];
    this.node.content.forEach((n, r) => {
      let i = n.isBlock && !n.isTextblock;
      let o = n.isAtom && !n.isText;
      let n_isInline = n.isInline;
      let a = this.pos + r + +!o;
      if (a < 0 || a > this.resolvedPos.doc.nodeSize - 2) {
        return;
      }
      let l = this.resolvedPos.doc.resolve(a);
      if (!i && !n_isInline && l.depth <= this.depth) {
        return;
      }
      let d = new e(l, this.editor, i, i || n_isInline ? n : null);
      if (i) {
        d.actualDepth = this.depth + 1;
      }
      t.push(d);
    });
    return t;
  }
  get firstChild() {
    return this.children[0] || null;
  }
  get lastChild() {
    let children = this.children;
    return children[children.length - 1] || null;
  }
  closest(e, t = {}) {
    let n = null;
    let parent = this.parent;
    while (parent && !n) {
      if (parent.node.type.name === e) {
        if (Object.keys(t).length > 0) {
          let e = parent.node.attrs;
          let n = Object.keys(t);
          for (let r = 0; r < n.length; r += 1) {
            let i = n[r];
            if (e[i] !== t[i]) {
              break;
            }
          }
        } else {
          n = parent;
        }
      }
      parent = parent.parent;
    }
    return n;
  }
  querySelector(e, t = {}) {
    return this.querySelectorAll(e, t, true)[0] || null;
  }
  querySelectorAll(e, t = {}, n = false) {
    let r = [];
    if (!this.children || this.children.length === 0) {
      return r;
    }
    let i = Object.keys(t);
    this.children.forEach((o) => {
      if (!(n && r.length > 0)) {
        if (
          o.node.type.name === e &&
          i.every((e) => t[e] === o.node.attrs[e])
        ) {
          r.push(o);
        }
        if (!(n && r.length > 0)) {
          r = r.concat(o.querySelectorAll(e, t, n));
        }
      }
    });
    return r;
  }
  setAttribute(e) {
    let { tr } = this.editor.state;
    tr.setNodeMarkup(this.from, undefined, {
      ...this.node.attrs,
      ...e,
    });
    this.editor.view.dispatch(tr);
  }
};
const t_ = `.ProseMirror {
  position: relative;
}

.ProseMirror {
  word-wrap: break-word;
  white-space: pre-wrap;
  white-space: break-spaces;
  -webkit-font-variant-ligatures: none;
  font-variant-ligatures: none;
  font-feature-settings: "liga" 0; /* the above doesn't seem to work in Edge */
}

.ProseMirror [contenteditable="false"] {
  white-space: normal;
}

.ProseMirror [contenteditable="false"] [contenteditable="true"] {
  white-space: pre-wrap;
}

.ProseMirror pre {
  white-space: pre-wrap;
}

img.ProseMirror-separator {
  display: inline !important;
  border: none !important;
  margin: 0 !important;
  width: 0 !important;
  height: 0 !important;
}

.ProseMirror-gapcursor {
  display: none;
  pointer-events: none;
  position: absolute;
  margin: 0;
}

.ProseMirror-gapcursor:after {
  content: "";
  display: block;
  position: absolute;
  top: -2px;
  width: 20px;
  border-top: 1px solid black;
  animation: ProseMirror-cursor-blink 1.1s steps(2, start) infinite;
}

@keyframes ProseMirror-cursor-blink {
  to {
    visibility: hidden;
  }
}

.ProseMirror-hideselection *::selection {
  background: transparent;
}

.ProseMirror-hideselection *::-moz-selection {
  background: transparent;
}

.ProseMirror-hideselection * {
  caret-color: transparent;
}

.ProseMirror-focused .ProseMirror-gapcursor {
  display: block;
}`;
export var KE = class extends tw {
  constructor(e = {}) {
    super();
    this.css = null;
    this.className = "tiptap";
    this.editorView = null;
    this.isFocused = false;
    this.isInitialized = false;
    this.extensionStorage = {};
    this.instanceId = Math.random().toString(36).slice(2, 9);
    this.options = {
      element:
        typeof document !== "undefined" ? document.createElement("div") : null,
      content: "",
      injectCSS: true,
      injectNonce: undefined,
      extensions: [],
      autofocus: false,
      editable: true,
      textDirection: undefined,
      editorProps: {},
      parseOptions: {},
      coreExtensionOptions: {},
      enableInputRules: true,
      enablePasteRules: true,
      enableCoreExtensions: true,
      enableContentCheck: false,
      emitContentError: false,
      onBeforeCreate: () => null,
      onCreate: () => null,
      onMount: () => null,
      onUnmount: () => null,
      onUpdate: () => null,
      onSelectionUpdate: () => null,
      onTransaction: () => null,
      onFocus: () => null,
      onBlur: () => null,
      onDestroy: () => null,
      onContentError: ({ error }) => {
        throw error;
      },
      onPaste: () => null,
      onDrop: () => null,
      onDelete: () => null,
      enableExtensionDispatchTransaction: true,
    };
    this.isCapturingTransaction = false;
    this.capturedTransaction = null;
    this.utils = {
      getUpdatedPosition,
      createMappablePosition,
    };
    this.setOptions(e);
    this.createExtensionManager();
    this.createCommandManager();
    this.createSchema();
    this.on("beforeCreate", this.options.onBeforeCreate);
    this.emit("beforeCreate", {
      editor: this,
    });
    this.on("mount", this.options.onMount);
    this.on("unmount", this.options.onUnmount);
    this.on("contentError", this.options.onContentError);
    this.on("create", this.options.onCreate);
    this.on("update", this.options.onUpdate);
    this.on("selectionUpdate", this.options.onSelectionUpdate);
    this.on("transaction", this.options.onTransaction);
    this.on("focus", this.options.onFocus);
    this.on("blur", this.options.onBlur);
    this.on("destroy", this.options.onDestroy);
    this.on("drop", ({ event, slice, moved }) =>
      this.options.onDrop(event, slice, moved),
    );
    this.on("paste", ({ event, slice }) => this.options.onPaste(event, slice));
    this.on("delete", this.options.onDelete);
    let doc = this.createDoc();
    let n = L(doc, this.options.autofocus);
    this.editorState = o.$t.create({
      doc,
      schema: this.schema,
      selection: n || undefined,
    });
    if (this.options.element) {
      this.mount(this.options.element);
    }
  }
  mount(e) {
    if (typeof document === "undefined") {
      throw Error(
        "[tiptap error]: The editor cannot be mounted because there is no 'document' defined in this environment.",
      );
    }
    this.createView(e);
    this.emit("mount", {
      editor: this,
    });
    if (this.css && !document.head.contains(this.css)) {
      document.head.appendChild(this.css);
    }
    window.setTimeout(() => {
      if (!this.isDestroyed) {
        if (
          this.options.autofocus !== false &&
          this.options.autofocus !== null
        ) {
          this.commands.focus(this.options.autofocus);
        }
        this.emit("create", {
          editor: this,
        });
        this.isInitialized = true;
      }
    }, 0);
  }
  unmount() {
    if (this.editorView) {
      let e = this.editorView.dom;
      if (e == null ? undefined : e.editor) {
        delete e.editor;
      }
      this.editorView.destroy();
    }
    this.editorView = null;
    this.isInitialized = false;
    if (this.css && !document.querySelectorAll(`.${this.className}`).length) {
      try {
        if (typeof this.css.remove === "function") {
          this.css.remove();
        } else if (this.css.parentNode) {
          this.css.parentNode.removeChild(this.css);
        }
      } catch (error) {
        console.warn("Failed to remove CSS element:", error);
      }
    }
    this.css = null;
    this.emit("unmount", {
      editor: this,
    });
  }
  get storage() {
    return this.extensionStorage;
  }
  get commands() {
    return this.commandManager.commands;
  }
  chain() {
    return this.commandManager.chain();
  }
  can() {
    return this.commandManager.can();
  }
  injectCSS() {
    if (this.options.injectCSS && typeof document !== "undefined") {
      this.css = ((e, t) => {
        let n = document.querySelector("style[data-tiptap-style]");
        if (n !== null) {
          return n;
        }
        let r = document.createElement("style");
        if (t) {
          r.setAttribute("nonce", t);
        }
        r.setAttribute("data-tiptap-style", "");
        r.innerHTML = e;
        document.getElementsByTagName("head")[0].appendChild(r);
        return r;
      })(t_, this.options.injectNonce);
    }
  }
  setOptions(e = {}) {
    this.options = {
      ...this.options,
      ...e,
    };
    if (this.editorView && this.state && !this.isDestroyed) {
      if (this.options.editorProps) {
        this.view.setProps(this.options.editorProps);
      }
      this.view.updateState(this.state);
    }
  }
  setEditable(editable, t = true) {
    this.setOptions({
      editable,
    });
    if (t) {
      this.emit("update", {
        editor: this,
        transaction: this.state.tr,
        appendedTransactions: [],
      });
    }
  }
  get isEditable() {
    return this.options.editable && this.view && this.view.editable;
  }
  get view() {
    if (this.editorView) {
      return this.editorView;
    }
    return new Proxy(
      {
        state: this.editorState,
        updateState: (e) => {
          this.editorState = e;
        },
        dispatch: (e) => {
          this.dispatchTransaction(e);
        },
        composing: false,
        dragging: null,
        editable: true,
        isDestroyed: false,
      },
      {
        get: (e, t) => {
          if (this.editorView) {
            return this.editorView[t];
          }
          if (t === "state") {
            return this.editorState;
          }
          if (t in e) {
            return Reflect.get(e, t);
          }
          throw Error(
            `[tiptap error]: The editor view is not available. Cannot access view['${t}']. The editor may not be mounted yet.`,
          );
        },
      },
    );
  }
  get state() {
    if (this.editorView) {
      this.editorState = this.view.state;
    }
    return this.editorState;
  }
  registerPlugin(e, t) {
    let plugins = eA(t)
      ? t(e, [...this.state.plugins])
      : [...this.state.plugins, e];
    let r = this.state.reconfigure({
      plugins,
    });
    this.view.updateState(r);
    return r;
  }
  unregisterPlugin(e) {
    if (this.isDestroyed) {
      return;
    }
    let plugins = this.state.plugins;
    let n = plugins;
    [].concat(e).forEach((e) => {
      let t = typeof e === "string" ? `${e}$` : e.key;
      n = n.filter((e) => !e.key.startsWith(t));
    });
    if (plugins.length === n.length) {
      return;
    }
    let r = this.state.reconfigure({
      plugins: n,
    });
    this.view.updateState(r);
    return r;
  }
  createExtensionManager() {
    let e;
    let t;
    let n = [
      ...(this.options.enableCoreExtensions
        ? [
            t$,
            tD.configure({
              blockSeparator:
                (t =
                  (e = this.options.coreExtensionOptions) == null
                    ? undefined
                    : e.clipboardTextSerializer) == null
                  ? undefined
                  : t.blockSeparator,
            }),
            tN,
            tz,
            tL,
            tV,
            tj,
            tB,
            tI,
            tF.configure({
              direction: this.options.textDirection,
            }),
          ].filter(
            (e) =>
              typeof this.options.enableCoreExtensions !== "object" ||
              this.options.enableCoreExtensions[e.name] !== false,
          )
        : []),
      ...this.options.extensions,
    ].filter((e) =>
      ["extension", "node", "mark"].includes(e == null ? undefined : e.type),
    );
    this.extensionManager = new tO(n, this);
  }
  createCommandManager() {
    this.commandManager = new h({
      editor: this,
    });
  }
  createSchema() {
    this.schema = this.extensionManager.schema;
  }
  createDoc() {
    let e;
    try {
      e = eb(this.options.content, this.schema, this.options.parseOptions, {
        errorOnInvalidContent: this.options.enableContentCheck,
      });
    } catch (error) {
      if (
        !(error instanceof Error) ||
        ![
          "[tiptap error]: Invalid JSON content",
          "[tiptap error]: Invalid HTML content",
        ].includes(error.message)
      ) {
        throw error;
      }
      this.emit("contentError", {
        editor: this,
        error,
        disableCollaboration: () => {
          if (
            "collaboration" in this.storage &&
            typeof this.storage.collaboration === "object" &&
            this.storage.collaboration
          ) {
            this.storage.collaboration.isDisabled = true;
          }
          this.options.extensions = this.options.extensions.filter(
            (e) => e.name !== "collaboration",
          );
          this.createExtensionManager();
        },
      });
      e = eb(this.options.content, this.schema, this.options.parseOptions, {
        errorOnInvalidContent: false,
      });
    }
    return e;
  }
  createView(e) {
    let { editorProps, enableExtensionDispatchTransaction } = this.options;
    let r =
      editorProps.dispatchTransaction || this.dispatchTransaction.bind(this);
    let dispatchTransaction = enableExtensionDispatchTransaction
      ? this.extensionManager.dispatchTransaction(r)
      : r;
    let editorProps_transformPastedHTML = editorProps.transformPastedHTML;
    let transformPastedHTML = this.extensionManager.transformPastedHTML(
      editorProps_transformPastedHTML,
    );
    this.editorView = new l.Lz(e, {
      ...editorProps,
      attributes: {
        role: "textbox",
        ...(editorProps == null ? undefined : editorProps.attributes),
      },
      dispatchTransaction,
      transformPastedHTML,
      state: this.editorState,
      markViews: this.extensionManager.markViews,
      nodeViews: this.extensionManager.nodeViews,
    });
    let a = this.state.reconfigure({
      plugins: this.extensionManager.plugins,
    });
    this.view.updateState(a);
    this.prependClass();
    this.injectCSS();
    this.view.dom.editor = this;
  }
  createNodeViews() {
    if (!this.view.isDestroyed) {
      this.view.setProps({
        markViews: this.extensionManager.markViews,
        nodeViews: this.extensionManager.nodeViews,
      });
    }
  }
  prependClass() {
    this.view.dom.className = `${this.className} ${this.view.dom.className}`;
  }
  captureTransaction(e) {
    this.isCapturingTransaction = true;
    e();
    this.isCapturingTransaction = false;
    let capturedTransaction = this.capturedTransaction;
    this.capturedTransaction = null;
    return capturedTransaction;
  }
  dispatchTransaction(e) {
    if (this.view.isDestroyed) {
      return;
    }
    if (this.isCapturingTransaction) {
      if (!this.capturedTransaction) {
        this.capturedTransaction = e;
        return;
      }
      e.steps.forEach((e) => {
        var t;
        if ((t = this.capturedTransaction) == null) {
          return undefined;
        }
        return t.step(e);
      });
      return;
    }
    let { state, transactions } = this.state.applyTransaction(e);
    let r = !this.state.selection.eq(state.selection);
    let i = transactions.includes(e);
    let state_1 = this.state;
    this.emit("beforeTransaction", {
      editor: this,
      transaction: e,
      nextState: state,
    });
    if (!i) {
      return;
    }
    this.view.updateState(state);
    this.emit("transaction", {
      editor: this,
      transaction: e,
      appendedTransactions: transactions.slice(1),
    });
    if (r) {
      this.emit("selectionUpdate", {
        editor: this,
        transaction: e,
      });
    }
    let s = transactions.findLast(
      (e) => e.getMeta("focus") || e.getMeta("blur"),
    );
    let a = s == null ? undefined : s.getMeta("focus");
    let l = s == null ? undefined : s.getMeta("blur");
    if (a) {
      this.emit("focus", {
        editor: this,
        event: a.event,
        transaction: s,
      });
    }
    if (l) {
      this.emit("blur", {
        editor: this,
        event: l.event,
        transaction: s,
      });
    }
    if (
      !(
        e.getMeta("preventUpdate") ||
        !transactions.some((e) => e.docChanged) ||
        state_1.doc.eq(state.doc)
      )
    ) {
      this.emit("update", {
        editor: this,
        transaction: e,
        appendedTransactions: transactions.slice(1),
      });
    }
  }
  getAttributes(e) {
    return gu(this.state, e);
  }
  isActive(e, t) {
    let n = typeof e === "string" ? e : null;
    let r = typeof e === "string" ? t : e;
    return ((e, t, n = {}) => {
      if (!t) {
        return rU(e, null, n) || eG(e, null, n);
      }
      let r = ed(t, e.schema);
      if (r === "node") {
        return rU(e, t, n);
      }
      return r === "mark" && eG(e, t, n);
    })(this.state, n, r);
  }
  getJSON() {
    return this.state.doc.toJSON();
  }
  getHTML() {
    return su(this.state.doc.content, this.schema);
  }
  getText(e) {
    let t;
    let n;
    let r;
    let { blockSeparator = "\n\n", textSerializers = {} } = e || {};
    t = this.state.doc;
    n = {
      blockSeparator,
      textSerializers: {
        ...eq(this.schema),
        ...textSerializers,
      },
    };
    r = {
      from: 0,
      to: t.content.size,
    };
    return e_(t, r, n);
  }
  get isEmpty() {
    return Op(this.state.doc);
  }
  destroy() {
    this.emit("destroy");
    this.unmount();
    this.removeAllListeners();
  }
  get isDestroyed() {
    let e;
    let t;
    return (
      (t = (e = this.editorView) == null ? undefined : e.isDestroyed) == null ||
      t
    );
  }
  $node(e, t) {
    let n;
    return (
      ((n = this.$doc) == null ? undefined : n.querySelector(e, t)) || null
    );
  }
  $nodes(e, t) {
    let n;
    return (
      ((n = this.$doc) == null ? undefined : n.querySelectorAll(e, t)) || null
    );
  }
  $pos(e) {
    return new tU(this.state.doc.resolve(e), this);
  }
  get $doc() {
    return this.$pos(0);
  }
};
export function OX(e) {
  return new tk({
    find: e.find,
    handler: ({ state, range, match }) => {
      let i = gk(e.getAttributes, undefined, match);
      if (i === false || i === null) {
        return null;
      }
      let { tr } = state;
      let s = match[match.length - 1];
      let a = match[0];
      if (s) {
        let r = a.search(/\S/);
        let l = range.from + a.indexOf(s);
        let d = l + s.length;
        if (
          hO(range.from, range.to, state.doc)
            .filter((t) =>
              t.mark.type.excluded.find(
                (n) => n === e.type && n !== t.mark.type,
              ),
            )
            .filter((e) => e.to > l).length
        ) {
          return null;
        }
        if (d < range.to) {
          tr.delete(d, range.to);
        }
        if (l > range.from) {
          tr.delete(range.from + r, l);
        }
        let c = range.from + r + s.length;
        tr.addMark(range.from + r, c, e.type.create(i || {}));
        tr.removeStoredMark(e.type);
      }
    },
    undoable: e.undoable,
  });
}
export function Ce(e) {
  return new tk({
    find: e.find,
    handler: ({ state, range, match }) => {
      let i = gk(e.getAttributes, undefined, match) || {};
      let { tr } = state;
      let range_from = range.from;
      let range_to = range.to;
      let l = e.type.create(i);
      if (match[1]) {
        let e = range_from + match[0].lastIndexOf(match[1]);
        if (e > range_to) {
          e = range_to;
        } else {
          range_to = e + match[1].length;
        }
        let t = match[0][match[0].length - 1];
        tr.insertText(t, range_from + match[0].length - 1);
        tr.replaceWith(e, range_to, l);
      } else if (match[0]) {
        let t = e.type.isInline ? range_from : range_from - 1;
        tr.insert(t, e.type.create(i)).delete(
          tr.mapping.map(range_from),
          tr.mapping.map(range_to),
        );
      }
      tr.scrollIntoView();
    },
    undoable: e.undoable,
  });
}
export function JJ(e) {
  return new tk({
    find: e.find,
    handler: ({ state, range, match }) => {
      let i = state.doc.resolve(range.from);
      let o = gk(e.getAttributes, undefined, match) || {};
      if (!i.node(-1).canReplaceWith(i.index(-1), i.indexAfter(-1), e.type)) {
        return null;
      }
      state.tr
        .delete(range.from, range.to)
        .setBlockType(range.from, range.from, e.type, o);
    },
    undoable: e.undoable,
  });
}
export function tG(e) {
  return new tk({
    find: e.find,
    handler: ({ state, range, match, chain }) => {
      let s = gk(e.getAttributes, undefined, match) || {};
      let a = state.tr.delete(range.from, range.to);
      let l = a.doc.resolve(range.from).blockRange();
      let d = l && r.oM(l, e.type, s);
      if (!d) {
        return null;
      }
      a.wrap(l, d);
      if (e.keepMarks && e.editor) {
        let { selection, storedMarks } = state;
        let { splittableMarks } = e.editor.extensionManager;
        let o =
          storedMarks ||
          (selection.$to.parentOffset && selection.$from.marks());
        if (o) {
          let e = o.filter((e) => splittableMarks.includes(e.type.name));
          a.ensureMarks(e);
        }
      }
      if (e.keepAttributes) {
        let t =
          e.type.name === "bulletList" || e.type.name === "orderedList"
            ? "listItem"
            : "taskList";
        chain().updateAttributes(t, s).run();
      }
      let nodeBefore = a.doc.resolve(range.from - 1).nodeBefore;
      if (
        nodeBefore &&
        nodeBefore.type === e.type &&
        r.n9(a.doc, range.from - 1) &&
        (!e.joinPredicate || e.joinPredicate(match, nodeBefore))
      ) {
        a.join(range.from - 1);
      }
    },
    undoable: e.undoable,
  });
}
export function AB(e, t) {
  let { selection } = e;
  let { $from } = selection;
  if (selection instanceof o.nh) {
    let e = $from.index();
    return $from.parent.canReplaceWith(e, e + 1, t);
  }
  let $from_depth = $from.depth;
  while ($from_depth >= 0) {
    let e = $from.index($from_depth);
    if ($from.node($from_depth).contentMatchAt(e).matchType(t)) {
      return true;
    }
    $from_depth -= 1;
  }
  return false;
}
export function GG(e) {
  return e.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
}
export function jT(e) {
  return e
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, "&");
}
export function zb(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function tX(e) {
  if (!(e == null ? undefined : e.trim())) {
    return {};
  }
  let t = {};
  let n = [];
  let r = e.replace(/["']([^"']*)["']/g, (e) => {
    n.push(e);
    return `__QUOTED_${n.length - 1}__`;
  });
  let i = r.match(/(?:^|\s)\.([a-zA-Z][\w-]*)/g);
  if (i) {
    t.class = i.map((e) => e.trim().slice(1)).join(" ");
  }
  let o = r.match(/(?:^|\s)#([a-zA-Z][\w-]*)/);
  if (o) {
    t.id = o[1];
  }
  Array.from(r.matchAll(/([a-zA-Z][\w-]*)\s*=\s*(__QUOTED_\d+__)/g)).forEach(
    ([, e, r]) => {
      var i;
      let o =
        n[
          parseInt(
            ((i = r.match(/__QUOTED_(\d+)__/)) == null ? undefined : i[1]) ||
              "0",
            10,
          )
        ];
      if (o) {
        t[e] = o.slice(1, -1);
      }
    },
  );
  let s = r
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
function t0(e) {
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
  Object.entries(e).forEach(([e, n]) => {
    if (e !== "class" && e !== "id") {
      if (n === true) {
        t.push(e);
      } else if (n !== false && n != null) {
        t.push(`${e}="${String(n)}"`);
      }
    }
  });
  return t.join(" ");
}
function t1(e) {
  let {
    nodeName,
    name,
    parseAttributes = tX,
    serializeAttributes = t0,
    defaultAttributes = {},
    requiredAttributes = [],
    allowedAttributes,
  } = e;
  let l = name || nodeName;
  return {
    parseMarkdown: (e, n) => {
      let r = {
        ...defaultAttributes,
        ...e.attributes,
      };
      return n.createNode(nodeName, r, []);
    },
    markdownTokenizer: {
      name: nodeName,
      level: "block",
      start(e) {
        let t;
        let n = RegExp(`^:::${l}(?:\\s|$)`, "m");
        let r = (t = e.match(n)) == null ? undefined : t.index;
        if (r !== undefined) {
          return r;
        }
        return -1;
      },
      tokenize(e, n, i) {
        let o = RegExp(`^:::${l}(?:\\s+\\{([^}]*)\\})?\\s*:::(?:\\n|$)`);
        let a = e.match(o);
        if (!a) {
          return;
        }
        let d = parseAttributes(a[1] || "");
        if (!requiredAttributes.find((e) => !(e in d))) {
          return {
            type: nodeName,
            raw: a[0],
            attributes: d,
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
          allowedAttributes.forEach((n) => {
            if (n in e) {
              t[n] = e[n];
            }
          });
          return t;
        })(e.attrs || {}),
      );
      let n = t ? ` {${t}}` : "";
      return `:::${l}${n} :::`;
    },
  };
}
function t2(e) {
  let {
    nodeName,
    name,
    getContent,
    parseAttributes = tX,
    serializeAttributes = t0,
    defaultAttributes = {},
    content = "block",
    allowedAttributes,
  } = e;
  let d = name || nodeName;
  return {
    parseMarkdown: (e, n) => {
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
            ? n.parseChildren(e.tokens || [])
            : n.parseInline(e.tokens || []);
      }
      let o = {
        ...defaultAttributes,
        ...e.attributes,
      };
      return n.createNode(nodeName, o, i);
    },
    markdownTokenizer: {
      name: nodeName,
      level: "block",
      start(e) {
        let t;
        let n = RegExp(`^:::${d}`, "m");
        let r = (t = e.match(n)) == null ? undefined : t.index;
        if (r !== undefined) {
          return r;
        }
        return -1;
      },
      tokenize(e, n, r) {
        let o;
        let s = RegExp(`^:::${d}(?:\\s+\\{([^}]*)\\})?\\s*\\n`);
        let l = e.match(s);
        if (!l) {
          return;
        }
        let [c, u = ""] = l;
        let p = parseAttributes(u);
        let h = 1;
        let c_length = c.length;
        let content_1 = "";
        let g = /^:::([\w-]*)(\s.*)?/gm;
        let v = e.slice(c_length);
        for (g.lastIndex = 0; ;) {
          let n = g.exec(v);
          if (n === null) {
            break;
          }
          let i = n.index;
          let s = n[1];
          if ((o = n[2]) == null || !o.endsWith(":::")) {
            if (s) {
              h += 1;
            } else if ((h -= 1) == 0) {
              let o = v.slice(0, i);
              content_1 = o.trim();
              let raw = e.slice(0, c_length + i + n[0].length);
              let tokens = [];
              if (content_1) {
                if (content === "block") {
                  for (
                    (tokens = r.blockTokens(o)).forEach((e) => {
                      if (e.text && (!e.tokens || e.tokens.length === 0)) {
                        e.tokens = r.inlineTokens(e.text);
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
                  tokens = r.inlineTokens(content_1);
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
      let n = serializeAttributes(
        ((e) => {
          if (!allowedAttributes) {
            return e;
          }
          let t = {};
          allowedAttributes.forEach((n) => {
            if (n in e) {
              t[n] = e[n];
            }
          });
          return t;
        })(e.attrs || {}),
      );
      let r = n ? ` {${n}}` : "";
      let i = t.renderChildren(e.content || [], "\n\n");
      return `:::${d}${r}

${i}

:::`;
    },
  };
}
function t3(e) {
  if (!e.trim()) {
    return {};
  }
  let t = {};
  let n = /(\w+)=(?:"([^"]*)"|'([^']*)')/g;
  let r = n.exec(e);
  while (r !== null) {
    let [, i, o, s] = r;
    t[i] = o || s;
    r = n.exec(e);
  }
  return t;
}
function t9(e) {
  return Object.entries(e)
    .filter(([, e]) => e != null)
    .map(([e, t]) => `${e}="${t}"`)
    .join(" ");
}
export function ur(e) {
  let {
    nodeName,
    name,
    getContent,
    parseAttributes = t3,
    serializeAttributes = t9,
    defaultAttributes = {},
    selfClosing = false,
    allowedAttributes,
  } = e;
  let d = name || nodeName;
  let c = d.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return {
    parseMarkdown: (e, n) => {
      let i = {
        ...defaultAttributes,
        ...e.attributes,
      };
      if (selfClosing) {
        return n.createNode(nodeName, i);
      }
      let o = getContent ? getContent(e) : e.content || "";
      if (o) {
        return n.createNode(nodeName, i, [n.createTextNode(o)]);
      }
      return n.createNode(nodeName, i, []);
    },
    markdownTokenizer: {
      name: nodeName,
      level: "inline",
      start(e) {
        let t = selfClosing
          ? RegExp(`\\[${c}\\s*[^\\]]*\\]`)
          : RegExp(`\\[${c}\\s*[^\\]]*\\][\\s\\S]*?\\[\\/${c}\\]`);
        let n = e.match(t);
        let r = n == null ? undefined : n.index;
        if (r !== undefined) {
          return r;
        }
        return -1;
      },
      tokenize(e, n, r) {
        let o = selfClosing
          ? RegExp(`^\\[${c}\\s*([^\\]]*)\\]`)
          : RegExp(`^\\[${c}\\s*([^\\]]*)\\]([\\s\\S]*?)\\[\\/${c}\\]`);
        let s = e.match(o);
        if (!s) {
          return;
        }
        let l = "";
        let d = "";
        if (selfClosing) {
          let [, e] = s;
          d = e;
        } else {
          let [, e, t] = s;
          d = e;
          l = t || "";
        }
        let u = parseAttributes(d.trim());
        return {
          type: nodeName,
          raw: s[0],
          content: l.trim(),
          attributes: u,
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
      let n = serializeAttributes(
        ((e) => {
          if (!allowedAttributes) {
            return e;
          }
          let t = {};
          allowedAttributes.forEach((n) => {
            let r = typeof n === "string" ? n : n.name;
            let i = typeof n === "string" ? undefined : n.skipIfDefault;
            if (r in e) {
              let n = e[r];
              if (i !== undefined && n === i) {
                return;
              }
              t[r] = n;
            }
          });
          return t;
        })(e.attrs || {}),
      );
      let i = n ? ` ${n}` : "";
      if (selfClosing) {
        return `[${d}${i}]`;
      }
      return `[${d}${i}]${t}[/${d}]`;
    },
  };
}
export function Dd(e, t, n) {
  let r;
  let i;
  let o;
  let s;
  let a = e.split("\n");
  let items = [];
  let d = "";
  let c = 0;
  let u = t.baseIndentSize || 2;
  while (c < a.length) {
    let e;
    let p = a[c];
    let h = p.match(t.itemPattern);
    if (!h) {
      if (items.length > 0) {
        break;
      } else {
        if (p.trim() !== "") {
          return;
        }
        c += 1;
        d = `${d}${p}
`;
        continue;
      }
    }
    let f = t.extractItemData(h);
    let { indentLevel, mainContent } = f;
    d = `${d}${p}
`;
    let v = [mainContent];
    for (c += 1; c < a.length;) {
      let e = a[c];
      if (e.trim() === "") {
        let t = a.slice(c + 1).findIndex((e) => e.trim() !== "");
        if (t === -1) {
          break;
        }
        if (
          (((i =
            (r = a[c + 1 + t].match(/^(\s*)/)) == null ? undefined : r[1]) ==
          null
            ? undefined
            : i.length) || 0) > indentLevel
        ) {
          v.push(e);
          d = `${d}${e}
`;
          c += 1;
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
        d = `${d}${e}
`;
        c += 1;
      } else {
        break;
      }
    }
    let y = v.slice(1);
    if (y.length > 0) {
      let r = y.map((e) => e.slice(indentLevel + u)).join("\n");
      if (r.trim()) {
        e = t.customNestedParser ? t.customNestedParser(r) : n.blockTokens(r);
      }
    }
    let b = t.createToken(f, e);
    items.push(b);
  }
  if (items.length !== 0) {
    return {
      items,
      raw: d,
    };
  }
}
export function kj(e, t, n, r) {
  if (!e || !Array.isArray(e.content)) {
    return "";
  }
  let i = typeof n === "function" ? n(r) : n;
  let [o, ...s] = e.content;
  let a = t.renderChildren([o]);
  let l = `${i}${a}`;
  if (s && s.length > 0) {
    s.forEach((e, n) => {
      var r;
      var i;
      let o =
        (i = (r = t.renderChild) == null ? undefined : r.call(t, e, n + 1)) !=
        null
          ? i
          : t.renderChildren([e]);
      if (o != null) {
        let n = o
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

${n}`
            : `
${n}`;
      }
    });
  }
  return l;
}
u(
  {},
  {
    createAtomBlockMarkdownSpec: () => t1,
    createBlockMarkdownSpec: () => t2,
    createInlineMarkdownSpec: () => ur,
    parseAttributes: () => tX,
    parseIndentedBlocks: () => Dd,
    renderNestedMarkdownContent: () => kj,
    serializeAttributes: () => t0,
  },
);
const t5 = new WeakMap();
export function fD(e, t) {
  let n = t5.get(e);
  if (!n) {
    let t = {
      callbacks: new Set(),
      rafId: null,
      handler: () => {
        if (t.rafId !== null) {
          cancelAnimationFrame(t.rafId);
        }
        t.rafId = requestAnimationFrame(() => {
          t.rafId = null;
          t.callbacks.forEach((e) => e());
        });
      },
    };
    t5.set(e, t);
    e.on("update", t.handler);
    n = t;
  }
  n.callbacks.add(t);
}
export function YT(e, t) {
  let n = t5.get(e);
  if (n) {
    n.callbacks.delete(t);
    if (n.callbacks.size === 0) {
      if (n.rafId !== null) {
        cancelAnimationFrame(n.rafId);
      }
      e.off("update", n.handler);
      t5.delete(e);
    }
  }
}
function nt(e, editor, n = {}) {
  let { state } = editor;
  let { doc, tr } = state;
  doc.descendants((t, r) => {
    let i = tr.mapping.map(r);
    let s = tr.mapping.map(r) + t.nodeSize;
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
    Object.keys(n).forEach((e) => {
      if (n[e] !== a.attrs[e]) {
        l = true;
      }
    });
    if (l) {
      let t = e.type.create({
        ...e.attrs,
        ...n,
      });
      tr.removeMark(i, s, e.type);
      tr.addMark(i, s, t);
    }
  });
  if (tr.docChanged) {
    editor.view.dispatch(tr);
  }
}
export var Db = class {
  constructor(e, t, n) {
    this.component = e;
    this.editor = t.editor;
    this.options = {
      ...n,
    };
    this.mark = t.mark;
    this.HTMLAttributes = t.HTMLAttributes;
  }
  get dom() {
    return this.editor.view.dom;
  }
  get contentDOM() {
    return null;
  }
  updateAttributes(e, t) {
    nt(t || this.mark, this.editor, e);
  }
  ignoreMutation(e) {
    return (
      !this.dom ||
      !this.contentDOM ||
      (typeof this.options.ignoreMutation === "function"
        ? this.options.ignoreMutation({
            mutation: e,
          })
        : !(
            e.type === "selection" ||
            (this.dom.contains(e.target) &&
              e.type === "childList" &&
              (V() || B()) &&
              this.editor.isFocused &&
              [
                ...Array.from(e.addedNodes),
                ...Array.from(e.removedNodes),
              ].every((e) => e.isContentEditable))
          ) &&
          ((this.contentDOM === e.target && e.type === "attributes") ||
            !this.contentDOM.contains(e.target)))
    );
  }
};
export var bP = class e extends tE {
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
export var Yv = class {
  constructor(e, t, n) {
    this.isDragging = false;
    this.component = e;
    this.editor = t.editor;
    this.options = {
      stopEvent: null,
      ignoreMutation: null,
      ...n,
    };
    this.extension = t.extension;
    this.node = t.node;
    this.decorations = t.decorations;
    this.innerDecorations = t.innerDecorations;
    this.view = t.view;
    this.HTMLAttributes = t.HTMLAttributes;
    this.getPos = t.getPos;
    this.mount();
  }
  mount() {}
  get dom() {
    return this.editor.view.dom;
  }
  get contentDOM() {
    return null;
  }
  onDragStart(e) {
    let t;
    let n;
    let r;
    let i;
    let s;
    let a;
    let l;
    let { view } = this.editor;
    let e_target = e.target;
    let u =
      e_target.nodeType === 3
        ? (t = e_target.parentElement) == null
          ? undefined
          : t.closest("[data-drag-handle]")
        : e_target.closest("[data-drag-handle]");
    if (
      !this.dom ||
      ((n = this.contentDOM) == null ? undefined : n.contains(e_target)) ||
      !u
    ) {
      return;
    }
    let p = 0;
    let h = 0;
    if (this.dom !== u) {
      let t = this.dom.getBoundingClientRect();
      let n = u.getBoundingClientRect();
      let o =
        (i = e.offsetX) != null
          ? i
          : (r = e.nativeEvent) == null
            ? undefined
            : r.offsetX;
      let l =
        (a = e.offsetY) != null
          ? a
          : (s = e.nativeEvent) == null
            ? undefined
            : s.offsetY;
      p = n.x - t.x + o;
      h = n.y - t.y + l;
    }
    let f = this.dom.cloneNode(true);
    try {
      let e = this.dom.getBoundingClientRect();
      f.style.width = `${Math.round(e.width)}px`;
      f.style.height = `${Math.round(e.height)}px`;
      f.style.boxSizing = "border-box";
      f.style.pointerEvents = "none";
    } catch {}
    let m = null;
    try {
      (m = document.createElement("div")).style.position = "absolute";
      m.style.top = "-9999px";
      m.style.left = "-9999px";
      m.style.pointerEvents = "none";
      m.appendChild(f);
      document.body.appendChild(m);
      if ((l = e.dataTransfer) != null) {
        l.setDragImage(f, p, h);
      }
    } finally {
      if (m) {
        setTimeout(() => {
          try {
            if (m != null) {
              m.remove();
            }
          } catch {}
        }, 0);
      }
    }
    let g = this.getPos();
    if (typeof g !== "number") {
      return;
    }
    let v = o.nh.create(view.state.doc, g);
    let y = view.state.tr.setSelection(v);
    view.dispatch(y);
  }
  stopEvent(e) {
    let t;
    if (!this.dom) {
      return false;
    }
    if (typeof this.options.stopEvent === "function") {
      return this.options.stopEvent({
        event: e,
      });
    }
    let e_target = e.target;
    if (
      !(
        this.dom.contains(e_target) &&
        !((t = this.contentDOM) == null ? undefined : t.contains(e_target))
      )
    ) {
      return false;
    }
    let r = e.type.startsWith("drag");
    let i = e.type === "dragover" || e.type === "dragenter";
    let s = e.type === "drop";
    if (
      (["INPUT", "BUTTON", "SELECT", "TEXTAREA"].includes(e_target.tagName) ||
        e_target.isContentEditable) &&
      !s &&
      !r
    ) {
      return true;
    }
    let { isEditable } = this.editor;
    let { isDragging } = this;
    let d = !!this.node.type.spec.draggable;
    let c = o.nh.isSelectable(this.node);
    let u = e.type === "copy";
    let p = e.type === "paste";
    let h = e.type === "cut";
    let f = e.type === "mousedown";
    if (!d && c && r && e.target === this.dom) {
      e.preventDefault();
    }
    if (d && r && !isDragging && e.target === this.dom) {
      e.preventDefault();
      return false;
    }
    if (d && isEditable && !isDragging && f) {
      let e = e_target.closest("[data-drag-handle]");
      if (e && (this.dom === e || this.dom.contains(e))) {
        this.isDragging = true;
        document.addEventListener(
          "dragend",
          () => {
            this.isDragging = false;
          },
          {
            once: true,
          },
        );
        document.addEventListener(
          "drop",
          () => {
            this.isDragging = false;
          },
          {
            once: true,
          },
        );
        document.addEventListener(
          "mouseup",
          () => {
            this.isDragging = false;
          },
          {
            once: true,
          },
        );
      }
    }
    return !isDragging && !i && !s && !u && !p && !h && (!f || !c) && true;
  }
  ignoreMutation(e) {
    return (
      !this.dom ||
      !this.contentDOM ||
      (typeof this.options.ignoreMutation === "function"
        ? this.options.ignoreMutation({
            mutation: e,
          })
        : !!this.node.isLeaf ||
          !!this.node.isAtom ||
          (!(
            e.type === "selection" ||
            (this.dom.contains(e.target) &&
              e.type === "childList" &&
              (V() || B()) &&
              this.editor.isFocused &&
              [
                ...Array.from(e.addedNodes),
                ...Array.from(e.removedNodes),
              ].every((e) => e.isContentEditable))
          ) &&
            ((this.contentDOM === e.target && e.type === "attributes") ||
              !this.contentDOM.contains(e.target))))
    );
  }
  updateAttributes(e) {
    this.editor.commands.command(({ tr }) => {
      let n = this.getPos();
      return (
        typeof n === "number" &&
        (tr.setNodeMarkup(n, undefined, {
          ...this.node.attrs,
          ...e,
        }),
        true)
      );
    });
  }
  deleteNode() {
    let e = this.getPos();
    if (typeof e !== "number") {
      return;
    }
    let t = e + this.node.nodeSize;
    this.editor.commands.deleteRange({
      from: e,
      to: t,
    });
  }
};
export function Zc(e) {
  return new tC({
    find: e.find,
    handler: ({ state, range, match, pasteEvent }) => {
      let o = gk(e.getAttributes, undefined, match, pasteEvent);
      if (o === false || o === null) {
        return null;
      }
      let { tr } = state;
      let a = match[match.length - 1];
      let l = match[0];
      let range_to = range.to;
      if (a) {
        let i = l.search(/\S/);
        let c = range.from + l.indexOf(a);
        let u = c + a.length;
        if (
          hO(range.from, range.to, state.doc)
            .filter((t) =>
              t.mark.type.excluded.find(
                (n) => n === e.type && n !== t.mark.type,
              ),
            )
            .filter((e) => e.to > c).length
        ) {
          return null;
        }
        if (u < range.to) {
          tr.delete(u, range.to);
        }
        if (c > range.from) {
          tr.delete(range.from + i, c);
        }
        range_to = range.from + i + a.length;
        tr.addMark(range.from + i, range_to, e.type.create(o || {}));
        if (
          !(
            match.index !== undefined &&
            match.input !== undefined &&
            match.index + match[0].length >= match.input.length
          )
        ) {
          tr.removeStoredMark(e.type);
        }
      }
    },
  });
}
