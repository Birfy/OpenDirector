import n from "lgn";
const o = /(?:^|\s)(\*(?!\s+\*)((?:[^*]+))\*(?!\s+\*))$/;
const i = /(?:^|\s)(\*(?!\s+\*)((?:[^*]+))\*(?!\s+\*))/g;
const l = /(?:^|\s)(_(?!\s+_)((?:[^_]+))_(?!\s+_))$/;
const s = /(?:^|\s)(_(?!\s+_)((?:[^_]+))_(?!\s+_))/g;
export var Ay = n.CU.create({
  name: "italic",
  addOptions: () => ({
    HTMLAttributes: {},
  }),
  parseHTML() {
    return [
      {
        tag: "em",
      },
      {
        tag: "i",
        getAttrs: (e) => e.style.fontStyle !== "normal" && null,
      },
      {
        style: "font-style=normal",
        clearMark: (e) => e.type.name === this.name,
      },
      {
        style: "font-style=italic",
      },
    ];
  },
  renderHTML({ HTMLAttributes }) {
    return ["em", n.KV(this.options.HTMLAttributes, HTMLAttributes), 0];
  },
  addCommands() {
    return {
      setItalic:
        () =>
        ({ commands }) =>
          commands.setMark(this.name),
      toggleItalic:
        () =>
        ({ commands }) =>
          commands.toggleMark(this.name),
      unsetItalic:
        () =>
        ({ commands }) =>
          commands.unsetMark(this.name),
    };
  },
  markdownTokenName: "em",
  parseMarkdown: (e, t) => t.applyMark("italic", t.parseInline(e.tokens || [])),
  markdownOptions: {
    htmlReopen: {
      open: "<em>",
      close: "</em>",
    },
  },
  renderMarkdown: (e, t) => `*${t.renderChildren(e)}*`,
  addKeyboardShortcuts() {
    return {
      "Mod-i": () => this.editor.commands.toggleItalic(),
      "Mod-I": () => this.editor.commands.toggleItalic(),
    };
  },
  addInputRules() {
    return [
      n.OX({
        find: o,
        type: this.type,
      }),
      n.OX({
        find: l,
        type: this.type,
      }),
    ];
  },
  addPasteRules() {
    return [
      n.Zc({
        find: i,
        type: this.type,
      }),
      n.Zc({
        find: s,
        type: this.type,
      }),
    ];
  },
});
export { Ay as J2 };
