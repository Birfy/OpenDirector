export var A = require("lgn").YY.create({
  name: "textAlign",
  addOptions: () => ({
    types: [],
    alignments: ["left", "center", "right", "justify"],
    defaultAlignment: null,
  }),
  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          textAlign: {
            default: this.options.defaultAlignment,
            parseHTML: (e) => {
              let textAlign = e.style.textAlign;
              if (this.options.alignments.includes(textAlign)) {
                return textAlign;
              }
              return this.options.defaultAlignment;
            },
            renderHTML: (e) => {
              if (e.textAlign) {
                return {
                  style: `text-align: ${e.textAlign}`,
                };
              }
              return {};
            },
          },
        },
      },
    ];
  },
  addCommands() {
    return {
      setTextAlign:
        (e) =>
        ({ commands }) =>
          !!this.options.alignments.includes(e) &&
          this.options.types
            .map((r) =>
              commands.updateAttributes(r, {
                textAlign: e,
              }),
            )
            .every((e) => e),
      unsetTextAlign:
        () =>
        ({ commands }) =>
          this.options.types
            .map((t) => commands.resetAttributes(t, "textAlign"))
            .every((e) => e),
      toggleTextAlign:
        (e) =>
        ({ editor, commands }) =>
          !!this.options.alignments.includes(e) &&
          (editor.isActive({
            textAlign: e,
          })
            ? commands.unsetTextAlign()
            : commands.setTextAlign(e)),
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-l": () => this.editor.commands.setTextAlign("left"),
      "Mod-Shift-e": () => this.editor.commands.setTextAlign("center"),
      "Mod-Shift-r": () => this.editor.commands.setTextAlign("right"),
      "Mod-Shift-j": () => this.editor.commands.setTextAlign("justify"),
    };
  },
});
