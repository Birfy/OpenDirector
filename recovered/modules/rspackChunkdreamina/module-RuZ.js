import n from "lgn";
import { Y } from "./module-ksh.js";
const i = /(?:^|\s)(\*\*(?!\s+\*\*)((?:[^*]+))\*\*(?!\s+\*\*))$/;
const l = /(?:^|\s)(\*\*(?!\s+\*\*)((?:[^*]+))\*\*(?!\s+\*\*))/g;
const s = /(?:^|\s)(__(?!\s+__)((?:[^_]+))__(?!\s+__))$/;
const a = /(?:^|\s)(__(?!\s+__)((?:[^_]+))__(?!\s+__))/g;
export var Ay = n.CU.create({
  name: "bold",
  addOptions: () => ({
    HTMLAttributes: {},
  }),
  parseHTML() {
    return [
      {
        tag: "strong",
      },
      {
        tag: "b",
        getAttrs: (e) => e.style.fontWeight !== "normal" && null,
      },
      {
        style: "font-weight=400",
        clearMark: (e) => e.type.name === this.name,
      },
      {
        style: "font-weight",
        getAttrs: (e) => /^(bold(er)?|[5-9]\d{2,})$/.test(e) && null,
      },
    ];
  },
  renderHTML({ HTMLAttributes }) {
    return Y("strong", {
      ...n.KV(this.options.HTMLAttributes, HTMLAttributes),
      children: Y("slot", {}),
    });
  },
  markdownTokenName: "strong",
  parseMarkdown: (e, t) => t.applyMark("bold", t.parseInline(e.tokens || [])),
  markdownOptions: {
    htmlReopen: {
      open: "<strong>",
      close: "</strong>",
    },
  },
  renderMarkdown: (e, t) => `**${t.renderChildren(e)}**`,
  addCommands() {
    return {
      setBold:
        () =>
        ({ commands }) =>
          commands.setMark(this.name),
      toggleBold:
        () =>
        ({ commands }) =>
          commands.toggleMark(this.name),
      unsetBold:
        () =>
        ({ commands }) =>
          commands.unsetMark(this.name),
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-b": () => this.editor.commands.toggleBold(),
      "Mod-B": () => this.editor.commands.toggleBold(),
    };
  },
  addInputRules() {
    return [
      n.OX({
        find: i,
        type: this.type,
      }),
      n.OX({
        find: s,
        type: this.type,
      }),
    ];
  },
  addPasteRules() {
    return [
      n.Zc({
        find: l,
        type: this.type,
      }),
      n.Zc({
        find: a,
        type: this.type,
      }),
    ];
  },
});
export { Ay as yN };
