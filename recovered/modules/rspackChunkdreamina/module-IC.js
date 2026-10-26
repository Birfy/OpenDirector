import n from "lgn";
import r from "le8";
import { V0 } from "./module-NTt.js";
import o from "Zr";
function s(e) {
  return (
    e.options.suggestions.length
      ? e.options.suggestions
      : [e.options.suggestion]
  ).map((overrideSuggestionOptions) =>
    (({ editor, overrideSuggestionOptions, extensionName, char = "@" }) => ({
      editor,
      char,
      pluginKey: new o.hs(),
      command: ({ editor, range, props }) => {
        var a;
        var o;
        var s;
        let nodeAfter = editor.view.state.selection.$to.nodeAfter;
        if (
          (a = nodeAfter == null ? undefined : nodeAfter.text) == null
            ? undefined
            : a.startsWith(" ")
        ) {
          range.to += 1;
        }
        editor
          .chain()
          .focus()
          .insertContentAt(range, [
            {
              type: extensionName,
              attrs: {
                ...props,
                mentionSuggestionChar: char,
              },
            },
            {
              type: "text",
              text: " ",
            },
          ])
          .run();
        if (
          (s =
            (o = editor.view.dom.ownerDocument.defaultView) == null
              ? undefined
              : o.getSelection()) != null
        ) {
          s.collapseToEnd();
        }
      },
      allow: ({ state, range }) => {
        let n = state.doc.resolve(range.from);
        let r = state.schema.nodes[extensionName];
        return !!n.parent.type.contentMatch.matchType(r);
      },
      ...overrideSuggestionOptions,
    }))({
      editor: e.editor,
      overrideSuggestionOptions,
      extensionName: e.name,
      char: overrideSuggestionOptions.char,
    }),
  );
}
function l(e, mentionSuggestionChar) {
  let i = s(e);
  let n = i.find((e) => e.char === mentionSuggestionChar);
  return n || (i.length ? i[0] : null);
}
export var A = n.bP.create({
  name: "mention",
  priority: 101,
  addOptions: () => ({
    HTMLAttributes: {},
    renderText({ node, suggestion }) {
      let i;
      let n;
      return `${(i = suggestion == null ? undefined : suggestion.char) != null ? i : "@"}${(n = node.attrs.label) != null ? n : node.attrs.id}`;
    },
    deleteTriggerWithBackspace: false,
    renderHTML({ options, node, suggestion }) {
      let r;
      let a;
      return [
        "span",
        n.KV(this.HTMLAttributes, options.HTMLAttributes),
        `${(r = suggestion == null ? undefined : suggestion.char) != null ? r : "@"}${(a = node.attrs.label) != null ? a : node.attrs.id}`,
      ];
    },
    suggestions: [],
    suggestion: {},
  }),
  group: "inline",
  inline: true,
  selectable: false,
  atom: true,
  addAttributes: () => ({
    id: {
      default: null,
      parseHTML: (e) => e.getAttribute("data-id"),
      renderHTML: (e) => {
        if (e.id) {
          return {
            "data-id": e.id,
          };
        }
        return {};
      },
    },
    label: {
      default: null,
      parseHTML: (e) => e.getAttribute("data-label"),
      renderHTML: (e) => {
        if (e.label) {
          return {
            "data-label": e.label,
          };
        }
        return {};
      },
    },
    mentionSuggestionChar: {
      default: "@",
      parseHTML: (e) => e.getAttribute("data-mention-suggestion-char"),
      renderHTML: (e) => ({
        "data-mention-suggestion-char": e.mentionSuggestionChar,
      }),
    },
  }),
  parseHTML() {
    return [
      {
        tag: `span[data-type="${this.name}"]`,
      },
    ];
  },
  renderHTML({ node, HTMLAttributes }) {
    let suggestion = l(this, node.attrs.mentionSuggestionChar);
    if (this.options.renderLabel !== undefined) {
      console.warn(
        "renderLabel is deprecated use renderText and renderHTML instead",
      );
      return [
        "span",
        n.KV(
          {
            "data-type": this.name,
          },
          this.options.HTMLAttributes,
          HTMLAttributes,
        ),
        this.options.renderLabel({
          options: this.options,
          node,
          suggestion,
        }),
      ];
    }
    let options = {
      ...this.options,
    };
    options.HTMLAttributes = n.KV(
      {
        "data-type": this.name,
      },
      this.options.HTMLAttributes,
      HTMLAttributes,
    );
    let a = this.options.renderHTML({
      options,
      node,
      suggestion,
    });
    if (typeof a === "string") {
      return [
        "span",
        n.KV(
          {
            "data-type": this.name,
          },
          this.options.HTMLAttributes,
          HTMLAttributes,
        ),
        a,
      ];
    }
    return a;
  },
  ...n.ur({
    nodeName: "mention",
    name: "@",
    selfClosing: true,
    allowedAttributes: [
      "id",
      "label",
      {
        name: "mentionSuggestionChar",
        skipIfDefault: "@",
      },
    ],
    parseAttributes: (e) => {
      let t = {};
      let i = /(\w+)=(?:"([^"]*)"|'([^']*)')/g;
      let n = i.exec(e);
      while (n !== null) {
        let [, r, a, o] = n;
        let s = a != null ? a : o;
        t[r === "char" ? "mentionSuggestionChar" : r] = s;
        n = i.exec(e);
      }
      return t;
    },
    serializeAttributes: (e) =>
      Object.entries(e)
        .filter(([, e]) => e != null)
        .map(([e, t]) => `${e === "mentionSuggestionChar" ? "char" : e}="${t}"`)
        .join(" "),
  }),
  renderText({ node }) {
    let t = {
      options: this.options,
      node,
      suggestion: l(this, node.attrs.mentionSuggestionChar),
    };
    if (this.options.renderLabel !== undefined) {
      console.warn(
        "renderLabel is deprecated use renderText and renderHTML instead",
      );
      return this.options.renderLabel(t);
    }
    return this.options.renderText(t);
  },
  addKeyboardShortcuts() {
    return {
      Backspace: () =>
        this.editor.commands.command(({ tr, state }) => {
          let i = false;
          let { selection } = state;
          let { empty, anchor } = selection;
          if (!empty) {
            return false;
          }
          let s = new r.bP();
          let l = 0;
          state.doc.nodesBetween(anchor - 1, anchor, (e, t) => {
            if (e.type.name === this.name) {
              i = true;
              s = e;
              l = t;
              return false;
            }
          });
          if (i) {
            tr.insertText(
              this.options.deleteTriggerWithBackspace
                ? ""
                : s.attrs.mentionSuggestionChar,
              l,
              l + s.nodeSize,
            );
          }
          return i;
        }),
    };
  },
  addProseMirrorPlugins() {
    return s(this).map(V0);
  },
});
export { A as P };
