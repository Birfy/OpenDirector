export var r = require("lgn").YY.create({
  name: "promptAutocomplete",
  addStorage: () => ({
    candidate: null,
  }),
  addCommands() {
    return {
      setAutocompleteCandidate: (e) => (u) => {
        var { editor, dispatch } = u;
        return (
          !editor.isDestroyed &&
          (dispatch && (this.storage.candidate = e), true)
        );
      },
    };
  },
  addKeyboardShortcuts() {
    return {
      Tab: () => {
        var e;
        var { editor } = this;
        var { candidate } = this.storage;
        if (
          !candidate ||
          editor.isDestroyed ||
          !editor.isEditable ||
          editor.view.composing ||
          !editor.isEmpty ||
          editor.state.doc.childCount !== 1 ||
          ((e = editor.state.doc.firstChild) == null
            ? undefined
            : e.type.name) !== "paragraph"
        ) {
          return false;
        }
        var t = candidate.split(/\r\n?|\n/).map((text) => ({
          type: "paragraph",
          content: text
            ? [
                {
                  type: "text",
                  text,
                },
              ]
            : undefined,
        }));
        return editor.commands.insertContent(t);
      },
    };
  },
  onTransaction(e) {
    const { transaction } = e;
    if (transaction.docChanged) {
      this.storage.candidate = null;
    }
  },
  onDestroy() {
    this.storage.candidate = null;
  },
});
