import n from "lgn";
import o from "Zr";
const i = /^```([a-z]+)?[\s\n]$/;
const l = /^~~~([a-z]+)?[\s\n]$/;
export var Ay = n.bP.create({
  name: "codeBlock",
  addOptions: () => ({
    languageClassPrefix: "language-",
    exitOnTripleEnter: true,
    exitOnArrowDown: true,
    defaultLanguage: null,
    enableTabIndentation: false,
    tabSize: 4,
    HTMLAttributes: {},
  }),
  content: "text*",
  marks: "",
  group: "block",
  code: true,
  defining: true,
  addAttributes() {
    return {
      language: {
        default: this.options.defaultLanguage,
        parseHTML: (e) => {
          var t;
          let { languageClassPrefix } = this.options;
          let n = [
            ...(((t = e.firstElementChild) == null ? undefined : t.classList) ||
              []),
          ]
            .filter((e) => e.startsWith(languageClassPrefix))
            .map((e) => e.replace(languageClassPrefix, ""))[0];
          return n || null;
        },
        rendered: false,
      },
    };
  },
  parseHTML: () => [
    {
      tag: "pre",
      preserveWhitespace: "full",
    },
  ],
  renderHTML({ node, HTMLAttributes }) {
    return [
      "pre",
      n.KV(this.options.HTMLAttributes, HTMLAttributes),
      [
        "code",
        {
          class: node.attrs.language
            ? this.options.languageClassPrefix + node.attrs.language
            : null,
        },
        0,
      ],
    ];
  },
  addCommands() {
    return {
      setCodeBlock:
        (e) =>
        ({ commands }) =>
          commands.setNode(this.name, e),
      toggleCodeBlock:
        (e) =>
        ({ commands }) =>
          commands.toggleNode(this.name, "paragraph", e),
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Alt-c": () => this.editor.commands.toggleCodeBlock(),
      Backspace: () => {
        let { empty, $anchor } = this.editor.state.selection;
        let r = $anchor.pos === 1;
        return (
          !!empty &&
          $anchor.parent.type.name === this.name &&
          (!!r || !$anchor.parent.textContent.length) &&
          this.editor.commands.clearNodes()
        );
      },
      Tab: ({ editor }) => {
        if (!this.options.enableTabIndentation) {
          return false;
        }
        let { state } = editor;
        let { selection } = state;
        let { $from, empty } = selection;
        if ($from.parent.type !== this.type) {
          return false;
        }
        let i = " ".repeat(this.options.tabSize);
        if (empty) {
          return editor.commands.insertContent(i);
        }
        return editor.commands.command(({ tr }) => {
          let { from, to } = selection;
          let l = state.doc
            .textBetween(from, to, "\n", "\n")
            .split("\n")
            .map((e) => i + e)
            .join("\n");
          tr.replaceWith(from, to, state.schema.text(l));
          return true;
        });
      },
      "Shift-Tab": ({ editor }) => {
        if (!this.options.enableTabIndentation) {
          return false;
        }
        let { state } = editor;
        let { selection } = state;
        let { $from, empty } = selection;
        return (
          $from.parent.type === this.type &&
          (empty
            ? editor.commands.command(({ tr }) => {
                var r;
                let { pos } = $from;
                let l = $from.start();
                let s = $from.end();
                let a = state.doc.textBetween(l, s, "\n", "\n").split("\n");
                let u = 0;
                let d = 0;
                let c = pos - l;
                for (let e = 0; e < a.length; e += 1) {
                  if (d + a[e].length >= c) {
                    u = e;
                    break;
                  }
                  d += a[e].length + 1;
                }
                let p = Math.min(
                  (((r = a[u].match(/^ */)) == null ? undefined : r[0]) || "")
                    .length,
                  this.options.tabSize,
                );
                if (p === 0) {
                  return true;
                }
                let h = l;
                for (let e = 0; e < u; e += 1) {
                  h += a[e].length + 1;
                }
                tr.delete(h, h + p);
                if (pos - h <= p) {
                  tr.setSelection(o.U3.create(tr.doc, h));
                }
                return true;
              })
            : editor.commands.command(({ tr }) => {
                let { from, to } = selection;
                let i = state.doc
                  .textBetween(from, to, "\n", "\n")
                  .split("\n")
                  .map((e) => {
                    var t;
                    let r = Math.min(
                      (((t = e.match(/^ */)) == null ? undefined : t[0]) || "")
                        .length,
                      this.options.tabSize,
                    );
                    return e.slice(r);
                  })
                  .join("\n");
                tr.replaceWith(from, to, state.schema.text(i));
                return true;
              }))
        );
      },
      Enter: ({ editor }) => {
        if (!this.options.exitOnTripleEnter) {
          return false;
        }
        let { state } = editor;
        let { selection } = state;
        let { $from, empty } = selection;
        if (!empty || $from.parent.type !== this.type) {
          return false;
        }
        let i = $from.parentOffset === $from.parent.nodeSize - 2;
        let l = $from.parent.textContent.endsWith("\n\n");
        return (
          !!i &&
          !!l &&
          editor
            .chain()
            .command(({ tr }) => {
              tr.delete($from.pos - 2, $from.pos);
              return true;
            })
            .exitCode()
            .run()
        );
      },
      ArrowDown: ({ editor }) => {
        if (!this.options.exitOnArrowDown) {
          return false;
        }
        let { state } = editor;
        let { selection, doc } = state;
        let { $from, empty } = selection;
        if (
          !empty ||
          $from.parent.type !== this.type ||
          $from.parentOffset !== $from.parent.nodeSize - 2
        ) {
          return false;
        }
        let s = $from.after();
        return (
          s !== undefined &&
          (doc.nodeAt(s)
            ? editor.commands.command(({ tr }) => {
                tr.setSelection(o.LN.near(doc.resolve(s)));
                return true;
              })
            : editor.commands.exitCode())
        );
      },
    };
  },
  addInputRules() {
    return [
      n.JJ({
        find: i,
        type: this.type,
        getAttributes: (e) => ({
          language: e[1],
        }),
      }),
      n.JJ({
        find: l,
        type: this.type,
        getAttributes: (e) => ({
          language: e[1],
        }),
      }),
    ];
  },
  addProseMirrorPlugins() {
    return [
      new o.k_({
        key: new o.hs("codeBlockVSCodeHandler"),
        props: {
          handlePaste: (e, t) => {
            if (!t.clipboardData || this.editor.isActive(this.type.name)) {
              return false;
            }
            let r = t.clipboardData.getData("text/plain");
            let n = t.clipboardData.getData("vscode-editor-data");
            let i = n ? JSON.parse(n) : undefined;
            let language = i == null ? undefined : i.mode;
            if (!r || !language) {
              return false;
            }
            let { tr, schema } = e.state;
            let u = schema.text(r.replace(/\r\n?/g, "\n"));
            tr.replaceSelectionWith(
              this.type.create(
                {
                  language,
                },
                u,
              ),
            );
            if (tr.selection.$from.parent.type !== this.type) {
              tr.setSelection(
                o.U3.near(tr.doc.resolve(Math.max(0, tr.selection.from - 2))),
              );
            }
            tr.setMeta("paste", true);
            e.dispatch(tr);
            return true;
          },
        },
      }),
    ];
  },
});
