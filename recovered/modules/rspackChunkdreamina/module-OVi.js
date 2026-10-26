import n from "lgn";
export var A = n.CU.create({
  name: "underline",
  addOptions: () => ({
    HTMLAttributes: {},
  }),
  parseHTML: () => [
    {
      tag: "u",
    },
    {
      style: "text-decoration",
      consuming: false,
      getAttrs: (e) => !!e.includes("underline") && {},
    },
  ],
  renderHTML({ HTMLAttributes }) {
    return ["u", n.KV(this.options.HTMLAttributes, HTMLAttributes), 0];
  },
  parseMarkdown(e, t) {
    return t.applyMark(this.name || "underline", t.parseInline(e.tokens || []));
  },
  renderMarkdown: (e, t) => `++${t.renderChildren(e)}++`,
  markdownTokenizer: {
    name: "underline",
    level: "inline",
    start: (e) => e.indexOf("++"),
    tokenize(e, t, r) {
      let n = /^(\+\+)([\s\S]+?)(\+\+)/.exec(e);
      if (!n) {
        return;
      }
      let text = n[2].trim();
      return {
        type: "underline",
        raw: n[0],
        text,
        tokens: r.inlineTokens(text),
      };
    },
  },
  addCommands() {
    return {
      setUnderline:
        () =>
        ({ commands }) =>
          commands.setMark(this.name),
      toggleUnderline:
        () =>
        ({ commands }) =>
          commands.toggleMark(this.name),
      unsetUnderline:
        () =>
        ({ commands }) =>
          commands.unsetMark(this.name),
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-u": () => this.editor.commands.toggleUnderline(),
      "Mod-U": () => this.editor.commands.toggleUnderline(),
    };
  },
});
export { A as z };
