import n from "lgn";
export var A = n.bP.create({
  name: "hardBreak",
  markdownTokenName: "br",
  addOptions: () => ({
    keepMarks: true,
    HTMLAttributes: {},
  }),
  inline: true,
  group: "inline",
  selectable: false,
  linebreakReplacement: true,
  parseHTML: () => [
    {
      tag: "br",
    },
  ],
  renderHTML({ HTMLAttributes }) {
    return ["br", n.KV(this.options.HTMLAttributes, HTMLAttributes)];
  },
  renderText: () => "\n",
  renderMarkdown: () => `  
`,
  parseMarkdown: () => ({
    type: "hardBreak",
  }),
  addCommands() {
    return {
      setHardBreak:
        () =>
        ({ commands, chain, state, editor }) =>
          commands.first([
            () => commands.exitCode(),
            () =>
              commands.command(() => {
                let { selection, storedMarks } = state;
                if (selection.$from.parent.type.spec.isolating) {
                  return false;
                }
                let { keepMarks } = this.options;
                let { splittableMarks } = editor.extensionManager;
                let s =
                  storedMarks ||
                  (selection.$to.parentOffset && selection.$from.marks());
                return chain()
                  .insertContent({
                    type: this.name,
                  })
                  .command(({ tr, dispatch }) => {
                    if (dispatch && s && keepMarks) {
                      let t = s.filter((e) =>
                        splittableMarks.includes(e.type.name),
                      );
                      tr.ensureMarks(t);
                    }
                    return true;
                  })
                  .run();
              }),
          ]),
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Enter": () => this.editor.commands.setHardBreak(),
      "Shift-Enter": () => this.editor.commands.setHardBreak(),
    };
  },
});
export { A as B };
