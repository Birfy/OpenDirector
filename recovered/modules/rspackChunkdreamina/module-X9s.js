import n from "lgn";
import o from "le8";
import i from "zqv";
import b from "qcX";
import k from "Zr";
let l = new o.Sj({
  nodes: {
    doc: {
      content: "block+",
    },
    paragraph: {
      content: "inline*",
      group: "block",
      parseDOM: [
        {
          tag: "p",
        },
      ],
      toDOM: () => ["p", 0],
    },
    blockquote: {
      content: "block+",
      group: "block",
      parseDOM: [
        {
          tag: "blockquote",
        },
      ],
      toDOM: () => ["blockquote", 0],
    },
    horizontal_rule: {
      group: "block",
      parseDOM: [
        {
          tag: "hr",
        },
      ],
      toDOM: () => ["div", ["hr"]],
    },
    heading: {
      attrs: {
        level: {
          default: 1,
        },
      },
      content: "(text | image)*",
      group: "block",
      defining: true,
      parseDOM: [
        {
          tag: "h1",
          attrs: {
            level: 1,
          },
        },
        {
          tag: "h2",
          attrs: {
            level: 2,
          },
        },
        {
          tag: "h3",
          attrs: {
            level: 3,
          },
        },
        {
          tag: "h4",
          attrs: {
            level: 4,
          },
        },
        {
          tag: "h5",
          attrs: {
            level: 5,
          },
        },
        {
          tag: "h6",
          attrs: {
            level: 6,
          },
        },
      ],
      toDOM: (e) => ["h" + e.attrs.level, 0],
    },
    code_block: {
      content: "text*",
      group: "block",
      code: true,
      defining: true,
      marks: "",
      attrs: {
        params: {
          default: "",
        },
      },
      parseDOM: [
        {
          tag: "pre",
          preserveWhitespace: "full",
          getAttrs: (e) => ({
            params: e.getAttribute("data-params") || "",
          }),
        },
      ],
      toDOM: (e) => [
        "pre",
        e.attrs.params
          ? {
              "data-params": e.attrs.params,
            }
          : {},
        ["code", 0],
      ],
    },
    ordered_list: {
      content: "list_item+",
      group: "block",
      attrs: {
        order: {
          default: 1,
        },
        tight: {
          default: false,
        },
      },
      parseDOM: [
        {
          tag: "ol",
          getAttrs: (e) => ({
            order: e.hasAttribute("start") ? +e.getAttribute("start") : 1,
            tight: e.hasAttribute("data-tight"),
          }),
        },
      ],
      toDOM: (e) => [
        "ol",
        {
          start: e.attrs.order == 1 ? null : e.attrs.order,
          "data-tight": e.attrs.tight ? "true" : null,
        },
        0,
      ],
    },
    bullet_list: {
      content: "list_item+",
      group: "block",
      attrs: {
        tight: {
          default: false,
        },
      },
      parseDOM: [
        {
          tag: "ul",
          getAttrs: (e) => ({
            tight: e.hasAttribute("data-tight"),
          }),
        },
      ],
      toDOM: (e) => [
        "ul",
        {
          "data-tight": e.attrs.tight ? "true" : null,
        },
        0,
      ],
    },
    list_item: {
      content: "block+",
      defining: true,
      parseDOM: [
        {
          tag: "li",
        },
      ],
      toDOM: () => ["li", 0],
    },
    text: {
      group: "inline",
    },
    image: {
      inline: true,
      attrs: {
        src: {},
        alt: {
          default: null,
        },
        title: {
          default: null,
        },
      },
      group: "inline",
      draggable: true,
      parseDOM: [
        {
          tag: "img[src]",
          getAttrs: (e) => ({
            src: e.getAttribute("src"),
            title: e.getAttribute("title"),
            alt: e.getAttribute("alt"),
          }),
        },
      ],
      toDOM: (e) => ["img", e.attrs],
    },
    hard_break: {
      inline: true,
      group: "inline",
      selectable: false,
      parseDOM: [
        {
          tag: "br",
        },
      ],
      toDOM: () => ["br"],
    },
  },
  marks: {
    em: {
      parseDOM: [
        {
          tag: "i",
        },
        {
          tag: "em",
        },
        {
          style: "font-style=italic",
        },
        {
          style: "font-style=normal",
          clearMark: (e) => e.type.name == "em",
        },
      ],
      toDOM: () => ["em"],
    },
    strong: {
      parseDOM: [
        {
          tag: "strong",
        },
        {
          tag: "b",
          getAttrs: (e) => e.style.fontWeight != "normal" && null,
        },
        {
          style: "font-weight=400",
          clearMark: (e) => e.type.name == "strong",
        },
        {
          style: "font-weight",
          getAttrs: (e) => /^(bold(er)?|[5-9]\d{2,})$/.test(e) && null,
        },
      ],
      toDOM: () => ["strong"],
    },
    link: {
      attrs: {
        href: {},
        title: {
          default: null,
        },
      },
      inclusive: false,
      parseDOM: [
        {
          tag: "a[href]",
          getAttrs: (e) => ({
            href: e.getAttribute("href"),
            title: e.getAttribute("title"),
          }),
        },
      ],
      toDOM: (e) => ["a", e.attrs],
    },
    code: {
      code: true,
      parseDOM: [
        {
          tag: "code",
        },
      ],
      toDOM: () => ["code"],
    },
  },
});
class s {
  constructor(e, t) {
    this.schema = e;
    this.tokenHandlers = t;
    this.stack = [
      {
        type: e.topNodeType,
        attrs: null,
        content: [],
        marks: o.CU.none,
      },
    ];
  }
  top() {
    return this.stack[this.stack.length - 1];
  }
  push(e) {
    if (this.stack.length) {
      this.top().content.push(e);
    }
  }
  addText(e) {
    if (!e) {
      return;
    }
    let t = this.top();
    let t_content = t.content;
    let n = t_content[t_content.length - 1];
    let i = this.schema.text(e, t.marks);
    let l;
    if (
      n &&
      (l = ((e, t) => {
        if (e.isText && t.isText && o.CU.sameSet(e.marks, t.marks)) {
          return e.withText(e.text + t.text);
        }
      })(n, i))
    ) {
      t_content[t_content.length - 1] = l;
    } else {
      t_content.push(i);
    }
  }
  openMark(e) {
    let t = this.top();
    t.marks = e.addToSet(t.marks);
  }
  closeMark(e) {
    let t = this.top();
    t.marks = e.removeFromSet(t.marks);
  }
  parseTokens(e) {
    for (let t = 0; t < e.length; t++) {
      let r = e[t];
      let n = this.tokenHandlers[r.type];
      if (!n) {
        throw Error(
          "Token type `" + r.type + "` not supported by Markdown parser",
        );
      }
      n(this, r, e, t);
    }
  }
  addNode(e, t, r) {
    let n = this.top();
    let o = e.createAndFill(t, r, n ? n.marks : []);
    if (o) {
      this.push(o);
      return o;
    }
    return null;
  }
  openNode(type, attrs) {
    this.stack.push({
      type,
      attrs,
      content: [],
      marks: o.CU.none,
    });
  }
  closeNode() {
    let e = this.stack.pop();
    return this.addNode(e.type, e.attrs, e.content);
  }
}
function a(e, t, r, n) {
  if (e.getAttrs) {
    return e.getAttrs(t, r, n);
  }
  if (e.attrs instanceof Function) {
    return e.attrs(t);
  }
  return e.attrs;
}
function u(e, t) {
  return (
    e.noCloseToken || t == "code_inline" || t == "code_block" || t == "fence"
  );
}
function d(content) {
  if (content[content.length - 1] == "\n") {
    return content.slice(0, content.length - 1);
  }
  return content;
}
function c() {}
function p(e, t) {
  while (++t < e.length) {
    if (e[t].type != "list_item_open") {
      return e[t].hidden;
    }
  }
  return false;
}
new (class {
  constructor(e, t, r) {
    this.schema = e;
    this.tokenizer = t;
    this.tokens = r;
    this.tokenHandlers = ((e, t) => {
      let r = Object.create(null);
      for (let n in t) {
        let o = t[n];
        if (o.block) {
          let t = e.nodeType(o.block);
          if (u(o, n)) {
            r[n] = (e, r, n, i) => {
              e.openNode(t, a(o, r, n, i));
              e.addText(d(r.content));
              e.closeNode();
            };
          } else {
            r[n + "_open"] = (e, r, n, i) => e.openNode(t, a(o, r, n, i));
            r[n + "_close"] = (e) => e.closeNode();
          }
        } else if (o.node) {
          let t = e.nodeType(o.node);
          r[n] = (e, r, n, i) => e.addNode(t, a(o, r, n, i));
        } else if (o.mark) {
          let t = e.marks[o.mark];
          if (u(o, n)) {
            r[n] = (e, r, n, i) => {
              e.openMark(t.create(a(o, r, n, i)));
              e.addText(d(r.content));
              e.closeMark(t);
            };
          } else {
            r[n + "_open"] = (e, r, n, i) =>
              e.openMark(t.create(a(o, r, n, i)));
            r[n + "_close"] = (e) => e.closeMark(t);
          }
        } else if (o.ignore) {
          if (u(o, n)) {
            r[n] = c;
          } else {
            r[n + "_open"] = c;
            r[n + "_close"] = c;
          }
        } else {
          throw RangeError("Unrecognized parsing spec " + JSON.stringify(o));
        }
      }
      r.text = (e, t) => e.addText(t.content);
      r.inline = (e, t) => e.parseTokens(t.children);
      r.softbreak = r.softbreak || ((e) => e.addText(" "));
      return r;
    })(e, r);
  }
  parse(e, t = {}) {
    let r = new s(this.schema, this.tokenHandlers);
    let n;
    r.parseTokens(this.tokenizer.parse(e, t));
    do {
      n = r.closeNode();
    } while (r.stack.length);
    return n || this.schema.topNodeType.createAndFill();
  }
})(
  l,
  i.A("commonmark", {
    html: false,
  }),
  {
    blockquote: {
      block: "blockquote",
    },
    paragraph: {
      block: "paragraph",
    },
    list_item: {
      block: "list_item",
    },
    bullet_list: {
      block: "bullet_list",
      getAttrs: (e, t, r) => ({
        tight: p(t, r),
      }),
    },
    ordered_list: {
      block: "ordered_list",
      getAttrs: (e, t, r) => ({
        order: +e.attrGet("start") || 1,
        tight: p(t, r),
      }),
    },
    heading: {
      block: "heading",
      getAttrs: (e) => ({
        level: +e.tag.slice(1),
      }),
    },
    code_block: {
      block: "code_block",
      noCloseToken: true,
    },
    fence: {
      block: "code_block",
      getAttrs: (e) => ({
        params: e.info || "",
      }),
      noCloseToken: true,
    },
    hr: {
      node: "horizontal_rule",
    },
    image: {
      node: "image",
      getAttrs: (e) => ({
        src: e.attrGet("src"),
        title: e.attrGet("title") || null,
        alt: (e.children[0] && e.children[0].content) || null,
      }),
    },
    hardbreak: {
      node: "hard_break",
    },
    em: {
      mark: "em",
    },
    strong: {
      mark: "strong",
    },
    link: {
      mark: "link",
      getAttrs: (e) => ({
        href: e.attrGet("href"),
        title: e.attrGet("title") || null,
      }),
    },
    code_inline: {
      mark: "code",
      noCloseToken: true,
    },
  },
);
let h = {
  open: "",
  close: "",
  mixable: true,
};
let f = new (class {
  constructor(e, t, r = {}) {
    this.nodes = e;
    this.marks = t;
    this.options = r;
  }
  serialize(e, t = {}) {
    t = {
      ...this.options,
      ...t,
    };
    let r = new g(this.nodes, this.marks, t);
    r.renderContent(e);
    return r.out;
  }
})(
  {
    blockquote(e, t) {
      e.wrapBlock("> ", null, t, () => e.renderContent(t));
    },
    code_block(e, t) {
      let r = t.textContent.match(/`{3,}/gm);
      let n = r ? r.sort().slice(-1)[0] + "`" : "```";
      e.write(`${n + (t.attrs.params || "")}\n`);
      e.text(t.textContent, false);
      e.write("\n");
      e.write(n);
      e.closeBlock(t);
    },
    heading(e, t) {
      e.write(e.repeat("#", t.attrs.level) + " ");
      e.renderInline(t, false);
      e.closeBlock(t);
    },
    horizontal_rule(e, t) {
      e.write(t.attrs.markup || "---");
      e.closeBlock(t);
    },
    bullet_list(e, t) {
      e.renderList(t, "  ", () => (t.attrs.bullet || "*") + " ");
    },
    ordered_list(e, t) {
      let r = t.attrs.order || 1;
      let length = String(r + t.childCount - 1).length;
      let o = e.repeat(" ", length + 2);
      e.renderList(t, o, (t) => {
        let o = String(r + t);
        return `${e.repeat(" ", length - o.length) + o}. `;
      });
    },
    list_item(e, t) {
      e.renderContent(t);
    },
    paragraph(e, t) {
      e.renderInline(t);
      e.closeBlock(t);
    },
    image(e, t) {
      e.write(
        "![" +
          e.esc(t.attrs.alt || "") +
          "](" +
          t.attrs.src.replace(/[\(\)]/g, "\\$&") +
          (t.attrs.title
            ? ' "' + t.attrs.title.replace(/"/g, '\\"') + '"'
            : "") +
          ")",
      );
    },
    hard_break(e, t, r, n) {
      for (let o = n + 1; o < r.childCount; o++) {
        if (r.child(o).type != t.type) {
          return void e.write("\\\n");
        }
      }
    },
    text(e, t) {
      e.text(t.text, !e.inAutolink);
    },
  },
  {
    em: {
      open: "*",
      close: "*",
      mixable: true,
      expelEnclosingWhitespace: true,
    },
    strong: {
      open: "**",
      close: "**",
      mixable: true,
      expelEnclosingWhitespace: true,
    },
    link: {
      open: (e, t, r, n) => {
        e.inAutolink = ((e, t, r) => {
          if (e.attrs.title || !/^\w+:/.test(e.attrs.href)) {
            return false;
          }
          let n = t.child(r);
          return (
            !!n.isText &&
            n.text == e.attrs.href &&
            n.marks[n.marks.length - 1] == e &&
            (r == t.childCount - 1 || !e.isInSet(t.child(r + 1).marks))
          );
        })(t, r, n);
        if (e.inAutolink) {
          return "<";
        }
        return "[";
      },
      close(e, t, r, n) {
        let { inAutolink } = e;
        e.inAutolink = undefined;
        if (inAutolink) {
          return ">";
        }
        return (
          "](" +
          t.attrs.href.replace(/[\(\)"]/g, "\\$&") +
          (t.attrs.title ? ` "${t.attrs.title.replace(/"/g, '\\"')}"` : "") +
          ")"
        );
      },
      mixable: true,
    },
    code: {
      open: (e, t, r, n) => m(r.child(n), -1),
      close: (e, t, r, n) => m(r.child(n - 1), 1),
      escape: false,
    },
  },
);
function m(e, t) {
  let r = /`+/g;
  let n;
  let o = 0;
  if (e.isText) {
    while ((n = r.exec(e.text))) {
      o = Math.max(o, n[0].length);
    }
  }
  let i = o > 0 && t > 0 ? " `" : "`";
  for (let e = 0; e < o; e++) {
    i += "`";
  }
  if (o > 0 && t < 0) {
    i += " ";
  }
  return i;
}
class g {
  constructor(e, t, r) {
    this.nodes = e;
    this.marks = t;
    this.options = r;
    this.delim = "";
    this.out = "";
    this.closed = null;
    this.inAutolink = undefined;
    this.atBlockStart = false;
    this.inTightList = false;
    if (this.options.tightLists === undefined) {
      this.options.tightLists = false;
    }
    if (this.options.hardBreakNodeName === undefined) {
      this.options.hardBreakNodeName = "hard_break";
    }
  }
  flushClose(e = 2) {
    if (this.closed) {
      if (!this.atBlank()) {
        this.out += "\n";
      }
      if (e > 1) {
        let t = this.delim;
        let r = /\s+$/.exec(t);
        if (r) {
          t = t.slice(0, t.length - r[0].length);
        }
        for (let r = 1; r < e; r++) {
          this.out += t + "\n";
        }
      }
      this.closed = null;
    }
  }
  getMark(e) {
    let t = this.marks[e];
    if (!t) {
      if (this.options.strict !== false) {
        throw Error(`Mark type \`${e}\` not supported by Markdown renderer`);
      }
      t = h;
    }
    return t;
  }
  wrapBlock(e, t, r, n) {
    let delim = this.delim;
    this.write(t != null ? t : e);
    this.delim += e;
    n();
    this.delim = delim;
    this.closeBlock(r);
  }
  atBlank() {
    return /(^|\n)$/.test(this.out);
  }
  ensureNewLine() {
    if (!this.atBlank()) {
      this.out += "\n";
    }
  }
  write(e) {
    this.flushClose();
    if (this.delim && this.atBlank()) {
      this.out += this.delim;
    }
    if (e) {
      this.out += e;
    }
  }
  closeBlock(e) {
    this.closed = e;
  }
  text(e, t = true) {
    let r = e.split("\n");
    for (let e = 0; e < r.length; e++) {
      this.write();
      if (!t && r[e][0] == "[" && /(^|[^\\])\!$/.test(this.out)) {
        this.out = this.out.slice(0, this.out.length - 1) + "\\!";
      }
      this.out += t ? this.esc(r[e], this.atBlockStart) : r[e];
      if (e != r.length - 1) {
        this.out += "\n";
      }
    }
  }
  render(e, t, r) {
    if (this.nodes[e.type.name]) {
      this.nodes[e.type.name](this, e, t, r);
    } else if (this.options.strict !== false) {
      throw Error(
        "Token type `" + e.type.name + "` not supported by Markdown renderer",
      );
    } else {
      if (!e.type.isLeaf) {
        if (e.type.inlineContent) {
          this.renderInline(e);
        } else {
          this.renderContent(e);
        }
        if (e.isBlock) {
          this.closeBlock(e);
        }
      }
    }
  }
  renderContent(e) {
    e.forEach((t, r, n) => this.render(t, e, n));
  }
  renderInline(e, t = true) {
    this.atBlockStart = t;
    let r = [];
    let n = "";
    let o = (t, o, i) => {
      let l = t ? t.marks : [];
      if (t && t.type.name === this.options.hardBreakNodeName) {
        l = l.filter((t) => {
          if (i + 1 == e.childCount) {
            return false;
          }
          let r = e.child(i + 1);
          return t.isInSet(r.marks) && (!r.isText || /\S/.test(r.text));
        });
      }
      let s = n;
      n = "";
      if (
        t &&
        t.isText &&
        l.some((e) => {
          let t = this.getMark(e.type.name);
          return t && t.expelEnclosingWhitespace && !e.isInSet(r);
        })
      ) {
        let [e, n, o] = /^(\s*)(.*)$/m.exec(t.text);
        if (n) {
          s += n;
          if (!(t = o ? t.withText(o) : null)) {
            l = r;
          }
        }
      }
      if (
        t &&
        t.isText &&
        l.some((t) => {
          let r = this.getMark(t.type.name);
          return (
            r && r.expelEnclosingWhitespace && !this.isMarkAhead(e, i + 1, t)
          );
        })
      ) {
        let [e, o, i] = /^(.*?)(\s*)$/m.exec(t.text);
        if (i) {
          n = i;
          if (!(t = o ? t.withText(o) : null)) {
            l = r;
          }
        }
      }
      let a = l.length ? l[l.length - 1] : null;
      let u = a && this.getMark(a.type.name).escape === false;
      let d = l.length - !!u;
      e: for (let e = 0; e < d; e++) {
        let t = l[e];
        if (!this.getMark(t.type.name).mixable) {
          break;
        }
        for (let n = 0; n < r.length; n++) {
          let o = r[n];
          if (!this.getMark(o.type.name).mixable) {
            break;
          }
          if (t.eq(o)) {
            if (e > n) {
              l = l
                .slice(0, n)
                .concat(t)
                .concat(l.slice(n, e))
                .concat(l.slice(e + 1, d));
            } else if (n > e) {
              l = l
                .slice(0, e)
                .concat(l.slice(e + 1, n))
                .concat(t)
                .concat(l.slice(n, d));
            }
            continue e;
          }
        }
      }
      let c = 0;
      while (c < Math.min(r.length, d) && l[c].eq(r[c])) {
        ++c;
      }
      while (c < r.length) {
        this.text(this.markString(r.pop(), false, e, i), false);
      }
      if (s) {
        this.text(s);
      }
      if (t) {
        while (r.length < d) {
          let t = l[r.length];
          r.push(t);
          this.text(this.markString(t, true, e, i), false);
          this.atBlockStart = false;
        }
        if (u && t.isText) {
          this.text(
            this.markString(a, true, e, i) +
              t.text +
              this.markString(a, false, e, i + 1),
            false,
          );
        } else {
          this.render(t, e, i);
        }
        this.atBlockStart = false;
      }
      if ((t == null ? undefined : t.isText) && t.nodeSize > 0) {
        this.atBlockStart = false;
      }
    };
    e.forEach(o);
    o(null, 0, e.childCount);
    this.atBlockStart = false;
  }
  renderList(e, t, r) {
    if (this.closed && this.closed.type == e.type) {
      this.flushClose(3);
    } else if (this.inTightList) {
      this.flushClose(1);
    }
    let n =
      e.attrs.tight !== undefined ? e.attrs.tight : this.options.tightLists;
    let inTightList = this.inTightList;
    this.inTightList = n;
    e.forEach((o, i, l) => {
      if (l && n) {
        this.flushClose(1);
      }
      this.wrapBlock(t, r(l), e, () => this.render(o, e, l));
    });
    this.inTightList = inTightList;
  }
  esc(e, t = false) {
    e = e.replace(/[`*\\~\[\]_]/g, (t, r) => {
      if (
        t == "_" &&
        r > 0 &&
        r + 1 < e.length &&
        e[r - 1].match(/\w/) &&
        e[r + 1].match(/\w/)
      ) {
        return t;
      }
      return "\\" + t;
    });
    if (t) {
      e = e
        .replace(/^(\+[ ]|[\-*>])/, "\\$&")
        .replace(/^(\s*)(#{1,6})(\s|$)/, "$1\\$2$3")
        .replace(/^(\s*\d+)\.\s/, "$1\\. ");
    }
    if (this.options.escapeExtraCharacters) {
      e = e.replace(this.options.escapeExtraCharacters, "\\$&");
    }
    return e;
  }
  quote(e) {
    let t = e.indexOf('"') == -1 ? '""' : e.indexOf("'") == -1 ? "''" : "()";
    return t[0] + e + t[1];
  }
  repeat(e, t) {
    let r = "";
    for (let n = 0; n < t; n++) {
      r += e;
    }
    return r;
  }
  markString(e, t, r, n) {
    let o = this.getMark(e.type.name);
    let i = t ? o.open : o.close;
    if (typeof i === "string") {
      return i;
    }
    return i(this, e, r, n);
  }
  getEnclosingWhitespace(e) {
    return {
      leading: (e.match(/^(\s+)/) || [undefined])[0],
      trailing: (e.match(/(\s+)$/) || [undefined])[0],
    };
  }
  isMarkAhead(e, t, r) {
    for (; ; t++) {
      if (t >= e.childCount) {
        return false;
      }
      let n = e.child(t);
      if (n.type.name != this.options.hardBreakNodeName) {
        return r.isInSet(n.marks);
      }
      t++;
    }
  }
}
const w = (e, t, r) => {
  let n;
  if ((n = typeof t !== "symbol" ? t + "" : t) in e) {
    Object.defineProperty(e, n, {
      enumerable: true,
      configurable: true,
      writable: true,
      value: r,
    });
  } else {
    e[n] = r;
  }
  return r;
};
let D = n.YY.create({
  name: "markdownTightLists",
  addOptions: () => ({
    tight: true,
    tightClass: "tight",
    listTypes: ["bulletList", "orderedList"],
  }),
  addGlobalAttributes() {
    return [
      {
        types: this.options.listTypes,
        attributes: {
          tight: {
            default: this.options.tight,
            parseHTML: (e) =>
              e.getAttribute("data-tight") === "true" || !e.querySelector("p"),
            renderHTML: (e) => ({
              class: e.tight ? this.options.tightClass : null,
              "data-tight": e.tight ? "true" : null,
            }),
          },
        },
      },
    ];
  },
  addCommands() {
    const e = this;
    return {
      toggleTight: function () {
        let t =
          arguments.length > 0 && arguments[0] !== undefined
            ? arguments[0]
            : null;
        return (r) => {
          let { editor, commands } = r;
          return e.options.listTypes.some((e) =>
            ((e) => {
              if (!editor.isActive(e)) {
                return false;
              }
              let r = editor.getAttributes(e);
              return commands.updateAttributes(e, {
                tight: t != null ? t : !(r != null && r.tight),
              });
            })(e),
          );
        };
      },
    };
  },
});
let y = i.A();
function C(src, t) {
  y.inline.State.prototype.scanDelims.call({
    src,
    posMax: src.length,
  });
  return new y.inline.State(src, null, null, []).scanDelims(t, true);
}
function v(e, t, r, n) {
  let o = e.substring(0, r) + e.substring(r + t.length);
  return o.substring(0, r + n) + t + o.substring(r + n);
}
class F extends g {
  constructor(e, t, r) {
    super(e, t, r != null ? r : {});
    w(this, "inTable", false);
    this.inlines = [];
  }
  render(e, t, r) {
    super.render(e, t, r);
    for (let e = this.inlines.length - 1; e >= 0; e--) {
      let t = this.inlines[e];
      if (t.start != null && t.end != null) {
        let { delimiter, start, end } = this.normalizeInline(t);
        this.out = ((text, t, from, to) => {
          let o = {
            text,
            from,
            to,
          };
          if (
            (o = ((e, t, r, n) => {
              let o = n;
              let i = e;
              while (o > r && !C(i, o).can_close) {
                i = v(i, t, o, -1);
                o--;
              }
              return {
                text: i,
                from: r,
                to: o,
              };
            })(
              (o = ((e, t, r, n) => {
                let o = r;
                let i = e;
                while (o < n && !C(i, o).can_open) {
                  i = v(i, t, o, 1);
                  o++;
                }
                return {
                  text: i,
                  from: o,
                  to: n,
                };
              })(o.text, t, o.from, o.to)).text,
              t,
              o.from,
              o.to,
            )).to -
              o.from <
            t.length + 1
          ) {
            o.text =
              o.text.substring(0, o.from) + o.text.substring(o.to + t.length);
          }
          return o.text;
        })(this.out, delimiter, start, end);
        this.inlines = this.inlines.filter((e) => e.end == null);
        break;
      }
    }
  }
  markString(e, t, r, n) {
    let o = this.marks[e.type.name];
    if (o.expelEnclosingWhitespace) {
      if (t) {
        this.inlines.push({
          markName: e.type.name,
          start: this.out.length,
          delimiter: o.open,
        });
      } else {
        for (let t = this.inlines.length - 1; t >= 0; t--) {
          if (
            this.inlines[t].markName === e.type.name &&
            this.inlines[t].end == null
          ) {
            this.inlines[t].end = this.out.length;
            break;
          }
        }
      }
    }
    return super.markString(e, t, r, n);
  }
  normalizeInline(e) {
    let { start, end } = e;
    while (this.out.charAt(start).match(/\s/)) {
      start++;
    }
    return {
      ...e,
      start,
    };
  }
}
let E = n.CU.create({
  name: "markdownHTMLMark",
  addStorage: () => ({
    markdown: {
      serialize: {
        open(e, t) {
          let r;
          let n;
          if (this.editor.storage.markdown.options.html) {
            if ((r = (n = x(t)) == null ? undefined : n[0]) != null) {
              return r;
            }
            return "";
          }
          console.warn(
            `Tiptap Markdown: "${t.type.name}" mark is only available in html mode`,
          );
          return "";
        },
        close(e, t) {
          let r;
          let n;
          if (
            this.editor.storage.markdown.options.html &&
            (r = (n = x(t)) == null ? undefined : n[1]) != null
          ) {
            return r;
          }
          return "";
        },
      },
      parse: {},
    },
  }),
});
function x(e) {
  let schema = e.type.schema;
  let r = schema.text(" ", [e]);
  let i = n.su(o.FK.from(r), schema).match(/^(<.*?>) (<\/.*?>)$/);
  if (i) {
    return [i[1], i[2]];
  }
  return null;
}
function M(e) {
  let t = `<body>${e}</body>`;
  return new window.DOMParser().parseFromString(t, "text/html").body;
}
let T = n.bP.create({
  name: "markdownHTMLNode",
  addStorage: () => ({
    markdown: {
      serialize(e, t, r) {
        let i;
        let l;
        let s;
        let a;
        let u;
        if (this.editor.storage.markdown.options.html) {
          e.write(
            ((i = t),
            (l = r),
            (s = i.type.schema),
            (a = n.su(o.FK.from(i), s)),
            i.isBlock &&
            (l instanceof o.FK || l.type.name === s.topNodeType.name)
              ? (((u = M(a).firstElementChild).innerHTML = u.innerHTML.trim()
                  ? `
${u.innerHTML}
`
                  : `
`),
                u.outerHTML)
              : a),
          );
        } else {
          console.warn(
            `Tiptap Markdown: "${t.type.name}" node is only available in html mode`,
          );
          e.write(`[${t.type.name}]`);
        }
        if (t.isBlock) {
          e.closeBlock(t);
        }
      },
      parse: {},
    },
  }),
});
let L = n.bP
  .create({
    name: "blockquote",
  })
  .extend({
    addStorage: () => ({
      markdown: {
        serialize: f.nodes.blockquote,
        parse: {},
      },
    }),
  });
let S = n.bP
  .create({
    name: "bulletList",
  })
  .extend({
    addStorage: () => ({
      markdown: {
        serialize(e, t) {
          return e.renderList(
            t,
            "  ",
            () =>
              (this.editor.storage.markdown.options.bulletListMarker || "-") +
              " ",
          );
        },
        parse: {},
      },
    }),
  });
let B = n.bP
  .create({
    name: "codeBlock",
  })
  .extend({
    addStorage: () => ({
      markdown: {
        serialize(e, t) {
          e.write("```" + (t.attrs.language || "") + "\n");
          e.text(t.textContent, false);
          e.ensureNewLine();
          e.write("```");
          e.closeBlock(t);
        },
        parse: {
          setup(e) {
            let t;
            e.set({
              langPrefix:
                (t = this.options.languageClassPrefix) != null
                  ? t
                  : "language-",
            });
          },
          updateDOM(e) {
            e.innerHTML = e.innerHTML.replace(
              /\n<\/code><\/pre>/g,
              "</code></pre>",
            );
          },
        },
      },
    }),
  });
let R = n.bP
  .create({
    name: "hardBreak",
  })
  .extend({
    addStorage: () => ({
      markdown: {
        serialize(e, t, r, n) {
          for (let o = n + 1; o < r.childCount; o++) {
            if (r.child(o).type != t.type) {
              return void e.write(
                e.inTable
                  ? T.storage.markdown.serialize.call(this, e, t, r)
                  : "\\\n",
              );
            }
          }
        },
        parse: {},
      },
    }),
  });
let $ = n.bP
  .create({
    name: "heading",
  })
  .extend({
    addStorage: () => ({
      markdown: {
        serialize: f.nodes.heading,
        parse: {},
      },
    }),
  });
let O = n.bP
  .create({
    name: "horizontalRule",
  })
  .extend({
    addStorage: () => ({
      markdown: {
        serialize: f.nodes.horizontal_rule,
        parse: {},
      },
    }),
  });
let N = n.bP
  .create({
    name: "image",
  })
  .extend({
    addStorage: () => ({
      markdown: {
        serialize: f.nodes.image,
        parse: {},
      },
    }),
  });
let H = n.bP
  .create({
    name: "listItem",
  })
  .extend({
    addStorage: () => ({
      markdown: {
        serialize: f.nodes.list_item,
        parse: {},
      },
    }),
  });
let P = n.bP
  .create({
    name: "orderedList",
  })
  .extend({
    addStorage: () => ({
      markdown: {
        serialize(e, t, r, n) {
          let o = t.attrs.start || 1;
          let length = String(o + t.childCount - 1).length;
          let l = e.repeat(" ", length + 2);
          let s =
            ((e, t, r) => {
              let n = 0;
              for (
                ;
                r - n > 0 && t.child(r - n - 1).type.name === e.type.name;
                n++
              );
              return n;
            })(t, r, n) % 2
              ? ") "
              : ". ";
          e.renderList(t, l, (t) => {
            let r = String(o + t);
            return e.repeat(" ", length - r.length) + r + s;
          });
        },
        parse: {},
      },
    }),
  });
let z = n.bP
  .create({
    name: "paragraph",
  })
  .extend({
    addStorage: () => ({
      markdown: {
        serialize: f.nodes.paragraph,
        parse: {},
      },
    }),
  });
function _(e) {
  let t;
  let r;
  if (
    (t = e == null || (r = e.content) == null ? undefined : r.content) != null
  ) {
    return t;
  }
  return [];
}
let I = n.bP
  .create({
    name: "table",
  })
  .extend({
    addStorage: () => ({
      markdown: {
        serialize(e, t, r) {
          let n;
          let o;
          let i;
          o = (n = _(t))[0];
          i = n.slice(1);
          if (
            _(o).some(
              (e) => e.type.name !== "tableHeader" || j(e) || e.childCount > 1,
            ) ||
            i.some((e) =>
              _(e).some(
                (e) =>
                  e.type.name === "tableHeader" || j(e) || e.childCount > 1,
              ),
            )
          ) {
            T.storage.markdown.serialize.call(this, e, t, r);
          } else {
            e.inTable = true;
            t.forEach((t, r, n) => {
              e.write("| ");
              t.forEach((t, r, n) => {
                if (n) {
                  e.write(" | ");
                }
                let t_firstChild = t.firstChild;
                if (t_firstChild.textContent.trim()) {
                  e.renderInline(t_firstChild);
                }
              });
              e.write(" |");
              e.ensureNewLine();
              if (!n) {
                let r = Array.from({
                  length: t.childCount,
                })
                  .map(() => "---")
                  .join(" | ");
                e.write(`| ${r} |`);
                e.ensureNewLine();
              }
            });
            e.closeBlock(t);
            e.inTable = false;
          }
        },
        parse: {},
      },
    }),
  });
function j(e) {
  return e.attrs.colspan > 1 || e.attrs.rowspan > 1;
}
let V = n.bP
  .create({
    name: "taskItem",
  })
  .extend({
    addStorage: () => ({
      markdown: {
        serialize(e, t) {
          let r = t.attrs.checked ? "[x]" : "[ ]";
          e.write(`${r} `);
          e.renderContent(t);
        },
        parse: {
          updateDOM(e) {
            [...e.querySelectorAll(".task-list-item")].forEach((e) => {
              let t = e.querySelector("input");
              e.setAttribute("data-type", "taskItem");
              if (t) {
                e.setAttribute("data-checked", t.checked);
                t.remove();
              }
            });
          },
        },
      },
    }),
  });
let K = n.bP
  .create({
    name: "taskList",
  })
  .extend({
    addStorage: () => ({
      markdown: {
        serialize: S.storage.markdown.serialize,
        parse: {
          setup(e) {
            e.use(b);
          },
          updateDOM(e) {
            [...e.querySelectorAll(".contains-task-list")].forEach((e) => {
              e.setAttribute("data-type", "taskList");
            });
          },
        },
      },
    }),
  });
let U = [
  L,
  S,
  B,
  R,
  $,
  O,
  T,
  N,
  H,
  P,
  z,
  I,
  V,
  K,
  n.bP
    .create({
      name: "text",
    })
    .extend({
      addStorage: () => ({
        markdown: {
          serialize(e, t) {
            let r;
            e.text(
              (r = t.text) == null
                ? undefined
                : r.replace(/</g, "&lt;").replace(/>/g, "&gt;"),
            );
          },
          parse: {},
        },
      }),
    }),
  n.CU.create({
    name: "bold",
  }).extend({
    addStorage: () => ({
      markdown: {
        serialize: f.marks.strong,
        parse: {},
      },
    }),
  }),
  n.CU.create({
    name: "code",
  }).extend({
    addStorage: () => ({
      markdown: {
        serialize: f.marks.code,
        parse: {},
      },
    }),
  }),
  E,
  n.CU.create({
    name: "italic",
  }).extend({
    addStorage: () => ({
      markdown: {
        serialize: f.marks.em,
        parse: {},
      },
    }),
  }),
  n.CU.create({
    name: "link",
  }).extend({
    addStorage: () => ({
      markdown: {
        serialize: f.marks.link,
        parse: {},
      },
    }),
  }),
  n.CU.create({
    name: "strike",
  }).extend({
    addStorage: () => ({
      markdown: {
        serialize: {
          open: "~~",
          close: "~~",
          expelEnclosingWhitespace: true,
        },
        parse: {},
      },
    }),
  }),
];
function W(e) {
  let t;
  let r;
  let n = (t = e.storage) == null ? undefined : t.markdown;
  let o =
    (r = U.find((t) => t.name === e.name)) == null
      ? undefined
      : r.storage.markdown;
  if (n || o) {
    return {
      ...o,
      ...n,
    };
  }
  return null;
}
class G {
  constructor(e) {
    w(this, "editor", null);
    this.editor = e;
  }
  serialize(e) {
    let t = new F(this.nodes, this.marks, {
      hardBreakNodeName: R.name,
    });
    t.renderContent(e);
    return t.out;
  }
  get nodes() {
    let e;
    return {
      ...Object.fromEntries(
        Object.keys(this.editor.schema.nodes).map((e) => [
          e,
          this.serializeNode(T),
        ]),
      ),
      ...Object.fromEntries(
        (e = this.editor.extensionManager.extensions
          .filter((e) => e.type === "node" && this.serializeNode(e))
          .map((e) => [e.name, this.serializeNode(e)])) != null
          ? e
          : [],
      ),
    };
  }
  get marks() {
    let e;
    return {
      ...Object.fromEntries(
        Object.keys(this.editor.schema.marks).map((e) => [
          e,
          this.serializeMark(E),
        ]),
      ),
      ...Object.fromEntries(
        (e = this.editor.extensionManager.extensions
          .filter((e) => e.type === "mark" && this.serializeMark(e))
          .map((e) => [e.name, this.serializeMark(e)])) != null
          ? e
          : [],
      ),
    };
  }
  serializeNode(e) {
    let t;
    if ((t = W(e)) == null || (t = t.serialize) == null) {
      return undefined;
    }
    return t.bind({
      editor: this.editor,
      options: e.options,
    });
  }
  serializeMark(e) {
    let t;
    let r = (t = W(e)) == null ? undefined : t.serialize;
    if (r) {
      return {
        ...r,
        open:
          typeof r.open === "function"
            ? r.open.bind({
                editor: this.editor,
                options: e.options,
              })
            : r.open,
        close:
          typeof r.close === "function"
            ? r.close.bind({
                editor: this.editor,
                options: e.options,
              })
            : r.close,
      };
    }
    return null;
  }
}
class J {
  constructor(e, t) {
    w(this, "editor", null);
    w(this, "md", null);
    let { html, linkify, breaks } = t;
    this.editor = e;
    this.md = this.withPatchedRenderer(
      i.A({
        html,
        linkify,
        breaks,
      }),
    );
  }
  parse(content) {
    let { inline } =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    if (typeof content === "string") {
      this.editor.extensionManager.extensions.forEach((e) => {
        var t;
        if (
          (t = W(e)) == null ||
          (t = t.parse) == null ||
          (t = t.setup) == null
        ) {
          return undefined;
        }
        return t.call(
          {
            editor: this.editor,
            options: e.options,
          },
          this.md,
        );
      });
      let r = M(this.md.render(content));
      this.editor.extensionManager.extensions.forEach((e) => {
        var t;
        if (
          (t = W(e)) == null ||
          (t = t.parse) == null ||
          (t = t.updateDOM) == null
        ) {
          return undefined;
        }
        return t.call(
          {
            editor: this.editor,
            options: e.options,
          },
          r,
        );
      });
      this.normalizeDOM(r, {
        inline,
        content,
      });
      return r.innerHTML;
    }
    return content;
  }
  normalizeDOM(e, t) {
    let { inline, content } = t;
    this.normalizeBlocks(e);
    e.querySelectorAll("*").forEach((e) => {
      var t;
      if (
        !(
          ((t = e.nextSibling) == null ? undefined : t.nodeType) !==
            Node.TEXT_NODE || e.closest("pre")
        )
      ) {
        e.nextSibling.textContent = e.nextSibling.textContent.replace(
          /^\n/,
          "",
        );
      }
    });
    if (inline) {
      this.normalizeInline(e, content);
    }
    return e;
  }
  normalizeBlocks(e) {
    let t = Object.values(this.editor.schema.nodes)
      .filter((e) => e.isBlock)
      .map((e) => {
        var t;
        if ((t = e.spec.parseDOM) == null) {
          return undefined;
        }
        return t.map((e) => e.tag);
      })
      .flat()
      .filter(Boolean)
      .join(",");
    if (t) {
      [...e.querySelectorAll(t)].forEach((e) => {
        if (e.parentElement.matches("p")) {
          ((e) => {
            let e_parentElement = e.parentElement;
            let r = e_parentElement.cloneNode();
            while (
              e_parentElement.firstChild &&
              e_parentElement.firstChild !== e
            ) {
              r.appendChild(e_parentElement.firstChild);
            }
            if (r.childNodes.length > 0) {
              e_parentElement.parentElement.insertBefore(r, e_parentElement);
            }
            e_parentElement.parentElement.insertBefore(e, e_parentElement);
            if (e_parentElement.childNodes.length === 0) {
              e_parentElement.remove();
            }
          })(e);
        }
      });
    }
  }
  normalizeInline(e, t) {
    let r;
    let n;
    let o;
    let i;
    let l;
    if ((r = e.firstElementChild) != null && r.matches("p")) {
      let r = e.firstElementChild;
      let { nextElementSibling } = r;
      let a =
        (n = (o = t.match(/^\s+/)) == null ? undefined : o[0]) != null ? n : "";
      let u = nextElementSibling
        ? ""
        : (i = (l = t.match(/\s+$/)) == null ? undefined : l[0]) != null
          ? i
          : "";
      if (t.match(/^\n\n/)) {
        r.innerHTML = `${r.innerHTML}${u}`;
        return;
      }
      let d = r.parentNode;
      while (r.firstChild) {
        d.insertBefore(r.firstChild, r);
      }
      d.removeChild(r);
      e.innerHTML = `${a}${e.innerHTML}${u}`;
    }
  }
  withPatchedRenderer(e) {
    let t = (e) =>
      function () {
        let t = e(...arguments);
        if (t === "\n") {
          return t;
        }
        if (t[t.length - 1] === "\n") {
          return t.slice(0, -1);
        }
        return t;
      };
    e.renderer.rules.hardbreak = t(e.renderer.rules.hardbreak);
    e.renderer.rules.softbreak = t(e.renderer.rules.softbreak);
    e.renderer.rules.fence = t(e.renderer.rules.fence);
    e.renderer.rules.code_block = t(e.renderer.rules.code_block);
    e.renderer.renderToken = t(e.renderer.renderToken.bind(e.renderer));
    return e;
  }
}
let q = n.YY.create({
  name: "markdownClipboard",
  addOptions: () => ({
    transformPastedText: false,
    transformCopiedText: false,
  }),
  addProseMirrorPlugins() {
    return [
      new k.k_({
        key: new k.hs("markdownClipboard"),
        props: {
          clipboardTextParser: (e, context, r) => {
            if (r || !this.options.transformPastedText) {
              return null;
            }
            let n = this.editor.storage.markdown.parser.parse(e, {
              inline: true,
            });
            return o.S4.fromSchema(this.editor.schema).parseSlice(M(n), {
              preserveWhitespace: true,
              context,
            });
          },
          clipboardTextSerializer: (e) => {
            if (this.options.transformCopiedText) {
              return this.editor.storage.markdown.serializer.serialize(
                e.content,
              );
            }
            return null;
          },
        },
      }),
    ];
  },
});
let Y = n.YY.create({
  name: "markdown",
  priority: 50,
  addOptions: () => ({
    html: true,
    tightLists: true,
    tightListClass: "tight",
    bulletListMarker: "-",
    linkify: false,
    breaks: false,
    transformPastedText: false,
    transformCopiedText: false,
  }),
  addCommands() {
    let e = n.XO.Commands.config.addCommands();
    return {
      setContent: (t, r) => (n) =>
        e.setContent(n.editor.storage.markdown.parser.parse(t), r)(n),
      insertContentAt: (t, r, n) => (o) =>
        e.insertContentAt(
          t,
          o.editor.storage.markdown.parser.parse(r, {
            inline: true,
          }),
          n,
        )(o),
    };
  },
  onBeforeCreate() {
    this.editor.storage.markdown = {
      options: {
        ...this.options,
      },
      parser: new J(this.editor, this.options),
      serializer: new G(this.editor),
      getMarkdown: () =>
        this.editor.storage.markdown.serializer.serialize(
          this.editor.state.doc,
        ),
    };
    this.editor.options.initialContent = this.editor.options.content;
    this.editor.options.content = this.editor.storage.markdown.parser.parse(
      this.editor.options.content,
    );
  },
  onCreate() {
    this.editor.options.content = this.editor.options.initialContent;
    delete this.editor.options.initialContent;
  },
  addStorage: () => ({}),
  addExtensions() {
    return [
      D.configure({
        tight: this.options.tightLists,
        tightClass: this.options.tightListClass,
      }),
      q.configure({
        transformPastedText: this.options.transformPastedText,
        transformCopiedText: this.options.transformCopiedText,
      }),
    ];
  },
});
export { Y as o };
