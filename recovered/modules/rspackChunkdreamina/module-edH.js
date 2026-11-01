import { KV, bP } from "./module-lgn.js";
const i = "&nbsp;";
export var A = bP.create({
  name: "paragraph",
  priority: 1000,
  addOptions: () => ({
    HTMLAttributes: {},
  }),
  group: "block",
  content: "inline*",
  parseHTML: () => [
    {
      tag: "p",
    },
  ],
  renderHTML({ HTMLAttributes }) {
    return ["p", KV(this.options.HTMLAttributes, HTMLAttributes), 0];
  },
  parseMarkdown: (e, t) => {
    let n = e.tokens || [];
    if (n.length === 1 && n[0].type === "image") {
      return t.parseChildren([n[0]]);
    }
    let r = t.parseInline(n);
    if (
      n.length === 1 &&
      n[0].type === "text" &&
      (n[0].raw === i ||
        n[0].text === i ||
        n[0].raw === "\xa0" ||
        n[0].text === "\xa0") &&
      r.length === 1 &&
      r[0].type === "text" &&
      (r[0].text === i || r[0].text === "\xa0")
    ) {
      return t.createNode("paragraph", undefined, []);
    }
    return t.createNode("paragraph", undefined, r);
  },
  renderMarkdown: (e, t, n) => {
    var r;
    var o;
    if (!e) {
      return "";
    }
    let s = Array.isArray(e.content) ? e.content : [];
    if (s.length === 0) {
      let e = Array.isArray(
        (r = n == null ? undefined : n.previousNode) == null
          ? undefined
          : r.content,
      )
        ? n.previousNode.content
        : [];
      if (
        ((o = n == null ? undefined : n.previousNode) == null
          ? undefined
          : o.type) === "paragraph" &&
        e.length === 0
      ) {
        return i;
      }
      return "";
    }
    return t.renderChildren(s);
  },
  addCommands() {
    return {
      setParagraph:
        () =>
        ({ commands }) =>
          commands.setNode(this.name),
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Alt-0": () => this.editor.commands.setParagraph(),
    };
  },
});
export { A as f };
