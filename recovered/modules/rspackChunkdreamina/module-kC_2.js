import n from "lgn";
const o = /(^|[^`])`([^`]+)`(?!`)$/;
const i = /(^|[^`])`([^`]+)`(?!`)/g;
export var Ay = n.CU.create({
  name: "code",
  addOptions: () => ({
    HTMLAttributes: {},
  }),
  excludes: "_",
  code: true,
  exitable: true,
  parseHTML: () => [
    {
      tag: "code",
    },
  ],
  renderHTML({ HTMLAttributes }) {
    return ["code", n.KV(this.options.HTMLAttributes, HTMLAttributes), 0];
  },
  addCommands() {
    return {
      setCode:
        () =>
        ({ commands }) =>
          commands.setMark(this.name),
      toggleCode:
        () =>
        ({ commands }) =>
          commands.toggleMark(this.name),
      unsetCode:
        () =>
        ({ commands }) =>
          commands.unsetMark(this.name),
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-e": () => this.editor.commands.toggleCode(),
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
