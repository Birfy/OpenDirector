import n from "lgn";
export var A = n.bP.create({
  name: "heading",
  addOptions: () => ({
    levels: [1, 2, 3, 4, 5, 6],
    HTMLAttributes: {},
  }),
  content: "inline*",
  group: "block",
  defining: true,
  addAttributes: () => ({
    level: {
      default: 1,
      rendered: false,
    },
  }),
  parseHTML() {
    return this.options.levels.map((e) => ({
      tag: `h${e}`,
      attrs: {
        level: e,
      },
    }));
  },
  renderHTML({ node, HTMLAttributes }) {
    let r = this.options.levels.includes(node.attrs.level)
      ? node.attrs.level
      : this.options.levels[0];
    return [`h${r}`, n.KV(this.options.HTMLAttributes, HTMLAttributes), 0];
  },
  parseMarkdown: (e, t) =>
    t.createNode(
      "heading",
      {
        level: e.depth || 1,
      },
      t.parseInline(e.tokens || []),
    ),
  renderMarkdown: (e, t) => {
    var r;
    let n = ((r = e.attrs) == null ? undefined : r.level)
      ? parseInt(e.attrs.level, 10)
      : 1;
    let o = "#".repeat(n);
    if (e.content) {
      return `${o} ${t.renderChildren(e.content)}`;
    }
    return "";
  },
  addCommands() {
    return {
      setHeading:
        (e) =>
        ({ commands }) =>
          !!this.options.levels.includes(e.level) &&
          commands.setNode(this.name, e),
      toggleHeading:
        (e) =>
        ({ commands }) =>
          !!this.options.levels.includes(e.level) &&
          commands.toggleNode(this.name, "paragraph", e),
    };
  },
  addKeyboardShortcuts() {
    return this.options.levels.reduce(
      (acc, level) => ({
        ...acc,
        ...{
          [`Mod-Alt-${level}`]: () =>
            this.editor.commands.toggleHeading({
              level,
            }),
        },
      }),
      {},
    );
  },
  addInputRules() {
    return this.options.levels.map((e) =>
      n.JJ({
        find: RegExp(`^(#{${Math.min(...this.options.levels)},${e}})\\s$`),
        type: this.type,
        getAttributes: {
          level: e,
        },
      }),
    );
  },
});
export { A as D };
