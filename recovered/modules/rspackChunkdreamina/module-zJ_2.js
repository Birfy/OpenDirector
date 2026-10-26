import n from "lgn";
const i = "textStyle";
const l = /^\s*([-+*])\s$/;
export var Rg = n.bP.create({
  name: "bulletList",
  addOptions: () => ({
    itemTypeName: "listItem",
    HTMLAttributes: {},
    keepMarks: false,
    keepAttributes: false,
  }),
  group: "block list",
  content() {
    return `${this.options.itemTypeName}+`;
  },
  parseHTML: () => [
    {
      tag: "ul",
    },
  ],
  renderHTML({ HTMLAttributes }) {
    return ["ul", n.KV(this.options.HTMLAttributes, HTMLAttributes), 0];
  },
  addCommands() {
    return {
      toggleBulletList:
        () =>
        ({ commands, chain }) => {
          if (this.options.keepAttributes) {
            return chain()
              .toggleList(
                this.name,
                this.options.itemTypeName,
                this.options.keepMarks,
              )
              .updateAttributes("listItem", this.editor.getAttributes(i))
              .run();
          }
          return commands.toggleList(
            this.name,
            this.options.itemTypeName,
            this.options.keepMarks,
          );
        },
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-8": () => this.editor.commands.toggleBulletList(),
    };
  },
  addInputRules() {
    let e = n.tG({
      find: l,
      type: this.type,
    });
    if (this.options.keepMarks || this.options.keepAttributes) {
      e = n.tG({
        find: l,
        type: this.type,
        keepMarks: this.options.keepMarks,
        keepAttributes: this.options.keepAttributes,
        getAttributes: () => this.editor.getAttributes(i),
        editor: this.editor,
      });
    }
    return [e];
  },
});
export var ck = n.bP.create({
  name: "listItem",
  addOptions: () => ({
    HTMLAttributes: {},
    bulletListTypeName: "bulletList",
    orderedListTypeName: "orderedList",
  }),
  content: "paragraph block*",
  defining: true,
  parseHTML: () => [
    {
      tag: "li",
    },
  ],
  renderHTML({ HTMLAttributes }) {
    return ["li", n.KV(this.options.HTMLAttributes, HTMLAttributes), 0];
  },
  addKeyboardShortcuts() {
    return {
      Enter: () => this.editor.commands.splitListItem(this.name),
      Tab: () => this.editor.commands.sinkListItem(this.name),
      "Shift-Tab": () => this.editor.commands.liftListItem(this.name),
    };
  },
});
const u = {};
const d = {
  findListItemPos: () => p,
  getNextListDepth: () => h,
  handleBackspace: () => b,
  handleDelete: () => w,
  hasListBefore: () => f,
  hasListItemAfter: () => D,
  hasListItemBefore: () => m,
  listItemHasSubList: () => g,
  nextListIsDeeper: () => k,
  nextListIsHigher: () => A,
};
for (const c in d) {
  Object.defineProperty(u, c, {
    get: d[c],
    enumerable: true,
  });
}
var p = (e, t) => {
  let { $from } = t.selection;
  let o = n.Pg(e, t.schema);
  let $from_depth = $from.depth;
  let $from_pos = $from.pos;
  let depth = null;
  while ($from_depth > 0 && depth === null) {
    if ($from.node($from_depth).type === o) {
      depth = $from_depth;
    } else {
      $from_depth -= 1;
      $from_pos -= 1;
    }
  }
  if (depth === null) {
    return null;
  }
  return {
    $pos: t.doc.resolve($from_pos),
    depth,
  };
};
var h = (e, t) => {
  let r = p(e, t);
  if (!r) {
    return false;
  }
  let [, o] = n.fl(t, e, r.$pos.pos + 4);
  return o;
};
var f = (e, t, r) => {
  let { $anchor } = e.selection;
  let o = Math.max(0, $anchor.pos - 2);
  let i = e.doc.resolve(o).node();
  return !!i && !!r.includes(i.type.name);
};
var m = (e, t) => {
  var r;
  let { $anchor } = t.selection;
  let o = t.doc.resolve($anchor.pos - 2);
  return (
    o.index() !== 0 &&
    ((r = o.nodeBefore) == null ? undefined : r.type.name) === e
  );
};
var g = (e, t, r) => {
  if (!r) {
    return false;
  }
  let o = n.Pg(e, t.schema);
  let i = false;
  r.descendants((e) => {
    if (e.type === o) {
      i = true;
    }
  });
  return i;
};
var b = (e, t, r) => {
  if (e.commands.undoInputRule()) {
    return true;
  }
  if (e.state.selection.from !== e.state.selection.to) {
    return false;
  }
  if (!n.rU(e.state, t) && f(e.state, t, r)) {
    let { $anchor } = e.state.selection;
    let n = e.state.doc.resolve($anchor.before() - 1);
    let o = [];
    n.node().descendants((node, pos) => {
      if (node.type.name === t) {
        o.push({
          node,
          pos,
        });
      }
    });
    let i = o.at(-1);
    if (!i) {
      return false;
    }
    let l = e.state.doc.resolve(n.start() + i.pos + 1);
    return e
      .chain()
      .cut(
        {
          from: $anchor.start() - 1,
          to: $anchor.end() + 1,
        },
        l.end(),
      )
      .joinForward()
      .run();
  }
  if (!n.rU(e.state, t) || !n.J_(e.state)) {
    return false;
  }
  let o = p(t, e.state);
  if (!o) {
    return false;
  }
  let i = e.state.doc.resolve(o.$pos.pos - 2).node(o.depth);
  let l = g(t, e.state, i);
  if (m(t, e.state) && !l) {
    return e.commands.joinItemBackward();
  }
  return e.chain().liftListItem(t).run();
};
var k = (e, t) => {
  let r = h(e, t);
  let n = p(e, t);
  return !!n && !!r && r > n.depth;
};
var A = (e, t) => {
  let r = h(e, t);
  let n = p(e, t);
  return !!n && !!r && r < n.depth;
};
var w = (e, t) => {
  if (!n.rU(e.state, t) || !n.QN(e.state, t)) {
    return false;
  }
  let { selection } = e.state;
  let { $from, $to } = selection;
  return (
    !(!selection.empty && $from.sameParent($to)) &&
    (k(t, e.state)
      ? e
          .chain()
          .focus(e.state.selection.from + 4)
          .lift(t)
          .joinBackward()
          .run()
      : A(t, e.state)
        ? e.chain().joinForward().joinBackward().run()
        : e.commands.joinItemForward())
  );
};
var D = (e, t) => {
  var r;
  let { $anchor } = t.selection;
  let o = t.doc.resolve($anchor.pos - $anchor.parentOffset - 2);
  return (
    o.index() !== o.parent.childCount - 1 &&
    ((r = o.nodeAfter) == null ? undefined : r.type.name) === e
  );
};
const y = n.YY.create({
  name: "listKeymap",
  addOptions: () => ({
    listTypes: [
      {
        itemName: "listItem",
        wrapperNames: ["bulletList", "orderedList"],
      },
      {
        itemName: "taskItem",
        wrapperNames: ["taskList"],
      },
    ],
  }),
  addKeyboardShortcuts() {
    return {
      Delete: ({ editor }) => {
        let t = false;
        this.options.listTypes.forEach(({ itemName }) => {
          if (
            editor.state.schema.nodes[itemName] !== undefined &&
            w(editor, itemName)
          ) {
            t = true;
          }
        });
        return t;
      },
      "Mod-Delete": ({ editor }) => {
        let t = false;
        this.options.listTypes.forEach(({ itemName }) => {
          if (
            editor.state.schema.nodes[itemName] !== undefined &&
            w(editor, itemName)
          ) {
            t = true;
          }
        });
        return t;
      },
      Backspace: ({ editor }) => {
        let t = false;
        this.options.listTypes.forEach(({ itemName, wrapperNames }) => {
          if (
            editor.state.schema.nodes[itemName] !== undefined &&
            b(editor, itemName, wrapperNames)
          ) {
            t = true;
          }
        });
        return t;
      },
      "Mod-Backspace": ({ editor }) => {
        let t = false;
        this.options.listTypes.forEach(({ itemName, wrapperNames }) => {
          if (
            editor.state.schema.nodes[itemName] !== undefined &&
            b(editor, itemName, wrapperNames)
          ) {
            t = true;
          }
        });
        return t;
      },
    };
  },
});
const C = "textStyle";
const v = /^(\d+)\.\s$/;
export var _J = n.bP.create({
  name: "orderedList",
  addOptions: () => ({
    itemTypeName: "listItem",
    HTMLAttributes: {},
    keepMarks: false,
    keepAttributes: false,
  }),
  group: "block list",
  content() {
    return `${this.options.itemTypeName}+`;
  },
  addAttributes: () => ({
    start: {
      default: 1,
      parseHTML: (e) => {
        if (e.hasAttribute("start")) {
          return parseInt(e.getAttribute("start") || "", 10);
        }
        return 1;
      },
    },
    type: {
      default: null,
      parseHTML: (e) => e.getAttribute("type"),
    },
  }),
  parseHTML: () => [
    {
      tag: "ol",
    },
  ],
  renderHTML({ HTMLAttributes }) {
    let { start, ...rest } = HTMLAttributes;
    if (start === 1) {
      return ["ol", n.KV(this.options.HTMLAttributes, rest), 0];
    }
    return ["ol", n.KV(this.options.HTMLAttributes, HTMLAttributes), 0];
  },
  addCommands() {
    return {
      toggleOrderedList:
        () =>
        ({ commands, chain }) => {
          if (this.options.keepAttributes) {
            return chain()
              .toggleList(
                this.name,
                this.options.itemTypeName,
                this.options.keepMarks,
              )
              .updateAttributes("listItem", this.editor.getAttributes(C))
              .run();
          }
          return commands.toggleList(
            this.name,
            this.options.itemTypeName,
            this.options.keepMarks,
          );
        },
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-7": () => this.editor.commands.toggleOrderedList(),
    };
  },
  addInputRules() {
    let e = n.tG({
      find: v,
      type: this.type,
      getAttributes: (e) => ({
        start: +e[1],
      }),
      joinPredicate: (e, t) => t.childCount + t.attrs.start === +e[1],
    });
    if (this.options.keepMarks || this.options.keepAttributes) {
      e = n.tG({
        find: v,
        type: this.type,
        keepMarks: this.options.keepMarks,
        keepAttributes: this.options.keepAttributes,
        getAttributes: (e) => ({
          start: +e[1],
          ...this.editor.getAttributes(C),
        }),
        joinPredicate: (e, t) => t.childCount + t.attrs.start === +e[1],
        editor: this.editor,
      });
    }
    return [e];
  },
});
const E = /^\s*(\[([( |x])?\])\s$/;
const x = n.bP.create({
  name: "taskItem",
  addOptions: () => ({
    nested: false,
    HTMLAttributes: {},
    taskListTypeName: "taskList",
    a11y: undefined,
  }),
  content() {
    if (this.options.nested) {
      return "paragraph block*";
    }
    return "paragraph+";
  },
  defining: true,
  addAttributes: () => ({
    checked: {
      default: false,
      keepOnSplit: false,
      parseHTML: (e) => {
        let t = e.getAttribute("data-checked");
        return t === "" || t === "true";
      },
      renderHTML: (e) => ({
        "data-checked": e.checked,
      }),
    },
  }),
  parseHTML() {
    return [
      {
        tag: `li[data-type="${this.name}"]`,
        priority: 51,
      },
    ];
  },
  renderHTML({ node, HTMLAttributes }) {
    return [
      "li",
      n.KV(this.options.HTMLAttributes, HTMLAttributes, {
        "data-type": this.name,
      }),
      [
        "label",
        [
          "input",
          {
            type: "checkbox",
            checked: node.attrs.checked ? "checked" : null,
          },
        ],
        ["span"],
      ],
      ["div", 0],
    ];
  },
  addKeyboardShortcuts() {
    let e = {
      Enter: () => this.editor.commands.splitListItem(this.name),
      "Shift-Tab": () => this.editor.commands.liftListItem(this.name),
    };
    if (this.options.nested) {
      return {
        ...e,
        Tab: () => this.editor.commands.sinkListItem(this.name),
      };
    }
    return e;
  },
  addNodeView() {
    return ({ node, HTMLAttributes, getPos, editor }) => {
      let dom = document.createElement("li");
      let i = document.createElement("label");
      let l = document.createElement("span");
      let s = document.createElement("input");
      let contentDOM = document.createElement("div");
      let u = (e) => {
        var t;
        var r;
        s.ariaLabel =
          ((r =
            (t = this.options.a11y) == null ? undefined : t.checkboxLabel) ==
          null
            ? undefined
            : r.call(t, e, s.checked)) ||
          `Task item checkbox for ${e.textContent || "empty task item"}`;
      };
      u(node);
      i.contentEditable = "false";
      s.type = "checkbox";
      s.addEventListener("mousedown", (e) => e.preventDefault());
      s.addEventListener("change", (t) => {
        if (!editor.isEditable && !this.options.onReadOnlyChecked) {
          s.checked = !s.checked;
          return;
        }
        let { checked } = t.target;
        if (editor.isEditable && typeof getPos === "function") {
          editor
            .chain()
            .focus(undefined, {
              scrollIntoView: false,
            })
            .command(({ tr }) => {
              let t = getPos();
              if (typeof t !== "number") {
                return false;
              }
              let n = tr.doc.nodeAt(t);
              tr.setNodeMarkup(t, undefined, {
                ...(n == null ? undefined : n.attrs),
                checked,
              });
              return true;
            })
            .run();
        }
        if (
          !(
            editor.isEditable ||
            !this.options.onReadOnlyChecked ||
            this.options.onReadOnlyChecked(node, checked)
          )
        ) {
          s.checked = !s.checked;
        }
      });
      Object.entries(this.options.HTMLAttributes).forEach(([e, t]) => {
        dom.setAttribute(e, t);
      });
      dom.dataset.checked = node.attrs.checked;
      s.checked = node.attrs.checked;
      i.append(s, l);
      dom.append(i, contentDOM);
      Object.entries(HTMLAttributes).forEach(([e, t]) => {
        dom.setAttribute(e, t);
      });
      return {
        dom,
        contentDOM,
        update: (e) =>
          e.type === this.type &&
          ((dom.dataset.checked = e.attrs.checked),
          (s.checked = e.attrs.checked),
          u(e),
          true),
      };
    };
  },
  addInputRules() {
    return [
      n.tG({
        find: E,
        type: this.type,
        getAttributes: (e) => ({
          checked: e[e.length - 1] === "x",
        }),
      }),
    ];
  },
});
const M = n.bP.create({
  name: "taskList",
  addOptions: () => ({
    itemTypeName: "taskItem",
    HTMLAttributes: {},
  }),
  group: "block list",
  content() {
    return `${this.options.itemTypeName}+`;
  },
  parseHTML() {
    return [
      {
        tag: `ul[data-type="${this.name}"]`,
        priority: 51,
      },
    ];
  },
  renderHTML({ HTMLAttributes }) {
    return [
      "ul",
      n.KV(this.options.HTMLAttributes, HTMLAttributes, {
        "data-type": this.name,
      }),
      0,
    ];
  },
  addCommands() {
    return {
      toggleTaskList:
        () =>
        ({ commands }) =>
          commands.toggleList(this.name, this.options.itemTypeName),
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-9": () => this.editor.commands.toggleTaskList(),
    };
  },
});
n.YY.create({
  name: "listKit",
  addExtensions() {
    let e = [];
    if (this.options.bulletList !== false) {
      e.push(Rg.configure(this.options.bulletList));
    }
    if (this.options.listItem !== false) {
      e.push(ck.configure(this.options.listItem));
    }
    if (this.options.listKeymap !== false) {
      e.push(y.configure(this.options.listKeymap));
    }
    if (this.options.orderedList !== false) {
      e.push(_J.configure(this.options.orderedList));
    }
    if (this.options.taskItem !== false) {
      e.push(x.configure(this.options.taskItem));
    }
    if (this.options.taskList !== false) {
      e.push(M.configure(this.options.taskList));
    }
    return e;
  },
});
