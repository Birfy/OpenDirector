import n from "lgn";
const o = /(?:^|\s)(~~(?!\s+~~)((?:[^~]+))~~(?!\s+~~))$/;
const i = /(?:^|\s)(~~(?!\s+~~)((?:[^~]+))~~(?!\s+~~))/g;
export var Ay = n.CU.create({
  name: "strike",
  addOptions: () => ({
    HTMLAttributes: {},
  }),
  parseHTML: () => [
    {
      tag: "s",
    },
    {
      tag: "del",
    },
    {
      tag: "strike",
    },
    {
      style: "text-decoration",
      consuming: false,
      getAttrs: (e) => !!e.includes("line-through") && {},
    },
  ],
  renderHTML({ HTMLAttributes }) {
    return ["s", n.KV(this.options.HTMLAttributes, HTMLAttributes), 0];
  },
  markdownTokenName: "del",
  parseMarkdown: (e, t) => t.applyMark("strike", t.parseInline(e.tokens || [])),
  renderMarkdown: (e, t) => `~~${t.renderChildren(e)}~~`,
  addCommands() {
    return {
      setStrike:
        () =>
        ({ commands }) =>
          commands.setMark(this.name),
      toggleStrike:
        () =>
        ({ commands }) =>
          commands.toggleMark(this.name),
      unsetStrike:
        () =>
        ({ commands }) =>
          commands.unsetMark(this.name),
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-s": () => this.editor.commands.toggleStrike(),
    };
  },
  addInputRules() {
    return [
      n.OX({
        find: o,
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
    ];
  },
});
export { Ay as n };
