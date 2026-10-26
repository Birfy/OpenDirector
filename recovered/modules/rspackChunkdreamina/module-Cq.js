import { KV, bP } from "./module-dWj.js";
const i = "&nbsp;";
export var f = bP.create({
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
    let r = e.tokens || [];
    if (r.length === 1 && r[0].type === "image") {
      return t.parseChildren([r[0]]);
    }
    let n = t.parseInline(r);
    if (
      r.length === 1 &&
      r[0].type === "text" &&
      (r[0].raw === i ||
        r[0].text === i ||
        r[0].raw === "\xa0" ||
        r[0].text === "\xa0") &&
      n.length === 1 &&
      n[0].type === "text" &&
      (n[0].text === i || n[0].text === "\xa0")
    ) {
      return t.createNode("paragraph", undefined, []);
    }
    return t.createNode("paragraph", undefined, n);
  },
  renderMarkdown: (e, t, r) => {
    var n;
    var o;
    if (!e) {
      return "";
    }
    let s = Array.isArray(e.content) ? e.content : [];
    if (s.length === 0) {
      let e = Array.isArray(
        (n = r == null ? undefined : r.previousNode) == null
          ? undefined
          : n.content,
      )
        ? r.previousNode.content
        : [];
      if (
        ((o = r == null ? undefined : r.previousNode) == null
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
