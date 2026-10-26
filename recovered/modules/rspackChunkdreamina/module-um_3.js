import n from "lgn";
import { Y } from "./module-ksh.js";
const find = /^\s*>\s$/;
export var Ay = n.bP.create({
  name: "blockquote",
  addOptions: () => ({
    HTMLAttributes: {},
  }),
  content: "block+",
  group: "block",
  defining: true,
  parseHTML: () => [
    {
      tag: "blockquote",
    },
  ],
  renderHTML({ HTMLAttributes }) {
    return Y("blockquote", {
      ...n.KV(this.options.HTMLAttributes, HTMLAttributes),
      children: Y("slot", {}),
    });
  },
  parseMarkdown: (e, t) => {
    var r;
    let n = (r = t.parseBlockChildren) != null ? r : t.parseChildren;
    return t.createNode("blockquote", undefined, n(e.tokens || []));
  },
  renderMarkdown: (e, t) => {
    if (!e.content) {
      return "";
    }
    let r = [];
    e.content.forEach((e, n) => {
      var o;
      var i;
      let l = (
        (i = (o = t.renderChild) == null ? undefined : o.call(t, e, n)) != null
          ? i
          : t.renderChildren([e])
      )
        .split("\n")
        .map((e) => {
          if (e.trim() === "") {
            return ">";
          }
          return `> ${e}`;
        });
      r.push(l.join("\n"));
    });
    return r.join(`
>
`);
  },
  addCommands() {
    return {
      setBlockquote:
        () =>
        ({ commands }) =>
          commands.wrapIn(this.name),
      toggleBlockquote:
        () =>
        ({ commands }) =>
          commands.toggleWrap(this.name),
      unsetBlockquote:
        () =>
        ({ commands }) =>
          commands.lift(this.name),
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-b": () => this.editor.commands.toggleBlockquote(),
    };
  },
  addInputRules() {
    return [
      n.tG({
        find,
        type: this.type,
      }),
    ];
  },
});
export { Ay as Cv };
