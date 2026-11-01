import { BQ, Op, YY, gk, iI } from "./module-lgn.js";
import i from "Zr";
import { A } from "./module-cNn.js";
import s from "mV";
import { z } from "./module-rpl.js";
import { ZS, b6, tN } from "./module-oR_2.js";
YY.create({
  name: "characterCount",
  addOptions: () => ({
    limit: null,
    mode: "textSize",
    textCounter: (e) => e.length,
    wordCounter: (e) => e.split(" ").filter((e) => e !== "").length,
  }),
  addStorage: () => ({
    characters: () => 0,
    words: () => 0,
  }),
  onBeforeCreate() {
    this.storage.characters = (e) => {
      let t = (e == null ? undefined : e.node) || this.editor.state.doc;
      if (
        ((e == null ? undefined : e.mode) || this.options.mode) === "textSize"
      ) {
        let e = t.textBetween(0, t.content.size, undefined, " ");
        return this.options.textCounter(e);
      }
      return t.nodeSize;
    };
    this.storage.words = (e) => {
      let t = (e == null ? undefined : e.node) || this.editor.state.doc;
      let n = t.textBetween(0, t.content.size, " ", " ");
      return this.options.wordCounter(n);
    };
  },
  addProseMirrorPlugins() {
    let e = false;
    return [
      new i.k_({
        key: new i.hs("characterCount"),
        appendTransaction: (t, n, r) => {
          if (e) {
            return;
          }
          let limit = this.options.limit;
          if (limit == null || limit === 0) {
            e = true;
            return;
          }
          let o = this.storage.characters({
            node: r.doc,
          });
          if (o > limit) {
            console.warn(
              `[CharacterCount] Initial content exceeded limit of ${limit} characters. Content was automatically trimmed.`,
            );
            let t = r.tr.deleteRange(0, o - limit);
            e = true;
            return t;
          }
          e = true;
        },
        filterTransaction: (e, t) => {
          let limit = this.options.limit;
          if (!e.docChanged || limit === 0 || limit == null) {
            return true;
          }
          let r = this.storage.characters({
            node: t.doc,
          });
          let i = this.storage.characters({
            node: e.doc,
          });
          if (i <= limit || (r > limit && i > limit && i <= r)) {
            return true;
          }
          if ((r > limit && i > limit && i > r) || !e.getMeta("paste")) {
            return false;
          }
          let pos = e.selection.$head.pos;
          e.deleteRange(pos - (i - limit), pos);
          return !(
            this.storage.characters({
              node: e.doc,
            }) > limit
          );
        },
      }),
    ];
  },
});
export var QO = YY.create({
  name: "dropCursor",
  addOptions: () => ({
    color: "currentColor",
    width: 1,
    class: undefined,
  }),
  addProseMirrorPlugins() {
    return [A(this.options)];
  },
});
YY.create({
  name: "focus",
  addOptions: () => ({
    className: "has-focus",
    mode: "all",
  }),
  addProseMirrorPlugins() {
    return [
      new i.k_({
        key: new i.hs("focus"),
        props: {
          decorations: ({ doc, selection }) => {
            let { isEditable, isFocused } = this.editor;
            let { anchor } = selection;
            let o = [];
            if (!isEditable || !isFocused) {
              return s.zF.create(doc, []);
            }
            let a = 0;
            if (this.options.mode === "deepest") {
              doc.descendants((e, t) => {
                if (!e.isText) {
                  if (!(anchor >= t && anchor <= t + e.nodeSize - 1)) {
                    return false;
                  }
                  a += 1;
                }
              });
            }
            let l = 0;
            doc.descendants(
              (e, t) =>
                !e.isText &&
                !!(anchor >= t && anchor <= t + e.nodeSize - 1) &&
                (((l += 1),
                (this.options.mode === "deepest" && a - l > 0) ||
                  (this.options.mode === "shallowest" && l > 1))
                  ? this.options.mode === "deepest"
                  : void o.push(
                      s.NZ.node(t, t + e.nodeSize, {
                        class: this.options.className,
                      }),
                    )),
            );
            return s.zF.create(doc, o);
          },
        },
      }),
    ];
  },
});
export var vR = YY.create({
  name: "gapCursor",
  addProseMirrorPlugins: () => [z()],
  extendNodeSchema(e) {
    let t;
    let n = {
      name: e.name,
      options: e.options,
      storage: e.storage,
    };
    return {
      allowGapCursor: (t = gk(iI(e, "allowGapCursor", n))) != null ? t : null,
    };
  },
});
export var Or = YY.create({
  name: "placeholder",
  addOptions: () => ({
    emptyEditorClass: "is-editor-empty",
    emptyNodeClass: "is-empty",
    placeholder: "Write something …",
    showOnlyWhenEditable: true,
    showOnlyCurrent: true,
    includeChildren: false,
  }),
  addProseMirrorPlugins() {
    return [
      new i.k_({
        key: new i.hs("placeholder"),
        props: {
          decorations: ({ doc, selection }) => {
            let n =
              this.editor.isEditable || !this.options.showOnlyWhenEditable;
            let { anchor } = selection;
            let o = [];
            if (!n) {
              return null;
            }
            let isEmpty = this.editor.isEmpty;
            doc.descendants((node, pos) => {
              let hasAnchor = anchor >= pos && anchor <= pos + node.nodeSize;
              let l = !node.isLeaf && Op(node);
              if ((hasAnchor || !this.options.showOnlyCurrent) && l) {
                let r = [this.options.emptyNodeClass];
                if (isEmpty) {
                  r.push(this.options.emptyEditorClass);
                }
                let i = s.NZ.node(pos, pos + node.nodeSize, {
                  class: r.join(" "),
                  "data-placeholder":
                    typeof this.options.placeholder === "function"
                      ? this.options.placeholder({
                          editor: this.editor,
                          node,
                          pos,
                          hasAnchor,
                        })
                      : this.options.placeholder,
                });
                o.push(i);
              }
              return this.options.includeChildren;
            });
            return s.zF.create(doc, o);
          },
        },
      }),
    ];
  },
});
function p({ types, node }) {
  return (
    (node && Array.isArray(types) && types.includes(node.type)) ||
    (node == null ? undefined : node.type) === types
  );
}
YY.create({
  name: "selection",
  addOptions: () => ({
    className: "selection",
  }),
  addProseMirrorPlugins() {
    let { editor, options } = this;
    return [
      new i.k_({
        key: new i.hs("selection"),
        props: {
          decorations: (n) => {
            if (
              n.selection.empty ||
              editor.isFocused ||
              !editor.isEditable ||
              BQ(n.selection) ||
              editor.view.dragging
            ) {
              return null;
            }
            return s.zF.create(n.doc, [
              s.NZ.inline(n.selection.from, n.selection.to, {
                class: options.className,
              }),
            ]);
          },
        },
      }),
    ];
  },
});
YY.create({
  name: "trailingNode",
  addOptions: () => ({
    node: "paragraph",
    notAfter: [],
  }),
  addProseMirrorPlugins() {
    let e = new i.hs(this.name);
    let types = Object.entries(this.editor.schema.nodes)
      .map(([, e]) => e)
      .filter((e) =>
        (this.options.notAfter || [])
          .concat(this.options.node)
          .includes(e.name),
      );
    return [
      new i.k_({
        key: e,
        appendTransaction: (t, n, r) => {
          let { doc, tr, schema } = r;
          let a = e.getState(r);
          let size = doc.content.size;
          let d = schema.nodes[this.options.node];
          if (a) {
            return tr.insert(size, d.create());
          }
        },
        state: {
          init: (e, n) =>
            !p({
              node: n.tr.doc.lastChild,
              types,
            }),
          apply: (e, n) => {
            if (e.docChanged) {
              return !p({
                node: e.doc.lastChild,
                types,
              });
            }
            return n;
          },
        },
      }),
    ];
  },
});
export var lb = YY.create({
  name: "undoRedo",
  addOptions: () => ({
    depth: 100,
    newGroupDelay: 500,
  }),
  addCommands: () => ({
    undo:
      () =>
      ({ state, dispatch }) =>
        tN(state, dispatch),
    redo:
      () =>
      ({ state, dispatch }) =>
        ZS(state, dispatch),
  }),
  addProseMirrorPlugins() {
    return [b6(this.options)];
  },
  addKeyboardShortcuts() {
    return {
      "Mod-z": () => this.editor.commands.undo(),
      "Shift-Mod-z": () => this.editor.commands.redo(),
      "Mod-y": () => this.editor.commands.redo(),
      "Mod-я": () => this.editor.commands.undo(),
      "Shift-Mod-я": () => this.editor.commands.redo(),
    };
  },
});
