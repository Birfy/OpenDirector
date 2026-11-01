import n from "lgn";
import o from "Zr";
import {
  AL,
  D8,
  GU,
  JD,
  L0,
  LF,
  RC,
  _G,
  aR,
  gC,
  gR,
  i4,
  iS,
  kG,
  rP,
  rn,
  w7,
} from "./module-siZ.js";
function l(e) {
  if (e === "left" || e === "right" || e === "center") {
    return e;
  }
  return null;
}
function s() {
  return {
    default: null,
    parseHTML: (e) => {
      let t;
      let r;
      t = (e.style.textAlign || "").trim().toLowerCase();
      r = (e.getAttribute("align") || "").trim().toLowerCase();
      return l(t || r);
    },
    renderHTML: (e) => {
      if (e.align) {
        return {
          style: `text-align: ${e.align}`,
        };
      }
      return {};
    },
  };
}
export var nA = n.bP.create({
  name: "tableCell",
  addOptions: () => ({
    HTMLAttributes: {},
  }),
  content: "block+",
  addAttributes: () => ({
    colspan: {
      default: 1,
    },
    rowspan: {
      default: 1,
    },
    colwidth: {
      default: null,
      parseHTML: (e) => {
        var t;
        var r;
        let n = e.getAttribute("colwidth");
        let o = n ? n.split(",").map((e) => parseInt(e, 10)) : null;
        if (!o) {
          let n =
            (t = e.closest("table")) == null
              ? undefined
              : t.querySelectorAll("colgroup > col");
          let o = Array.from(
            ((r = e.parentElement) == null ? undefined : r.children) || [],
          ).indexOf(e);
          if (o && o > -1 && n && n[o]) {
            let e = n[o].getAttribute("width");
            if (e) {
              return [parseInt(e, 10)];
            }
            return null;
          }
        }
        return o;
      },
    },
    align: s(),
  }),
  tableRole: "cell",
  isolating: true,
  parseHTML: () => [
    {
      tag: "td",
    },
  ],
  renderHTML({ HTMLAttributes }) {
    return ["td", n.KV(this.options.HTMLAttributes, HTMLAttributes), 0];
  },
});
export var A0 = n.bP.create({
  name: "tableHeader",
  addOptions: () => ({
    HTMLAttributes: {},
  }),
  content: "block+",
  addAttributes: () => ({
    colspan: {
      default: 1,
    },
    rowspan: {
      default: 1,
    },
    colwidth: {
      default: null,
      parseHTML: (e) => {
        let t = e.getAttribute("colwidth");
        if (t) {
          return t.split(",").map((e) => parseInt(e, 10));
        }
        return null;
      },
    },
    align: s(),
  }),
  tableRole: "header_cell",
  isolating: true,
  parseHTML: () => [
    {
      tag: "th",
    },
  ],
  renderHTML({ HTMLAttributes }) {
    return ["th", n.KV(this.options.HTMLAttributes, HTMLAttributes), 0];
  },
});
export var Hj = n.bP.create({
  name: "tableRow",
  addOptions: () => ({
    HTMLAttributes: {},
  }),
  content: "(tableCell | tableHeader)*",
  tableRole: "row",
  parseHTML: () => [
    {
      tag: "tr",
    },
  ],
  renderHTML({ HTMLAttributes }) {
    return ["tr", n.KV(this.options.HTMLAttributes, HTMLAttributes), 0];
  },
});
function c(e, t) {
  if (t) {
    return ["width", `${Math.max(t, e)}px`];
  }
  return ["min-width", `${e}px`];
}
function p(e, colgroup, table, n, o, i) {
  let l;
  let s = 0;
  let a = true;
  let t_firstChild = colgroup.firstChild;
  let e_firstChild = e.firstChild;
  if (e_firstChild !== null) {
    for (let e = 0, r = 0; e < e_firstChild.childCount; e += 1) {
      let { colspan, colwidth } = e_firstChild.child(e).attrs;
      for (let e = 0; e < colspan; e += 1, r += 1) {
        let l = o === r ? i : colwidth && colwidth[e];
        let d = l ? `${l}px` : "";
        s += l || n;
        if (!l) {
          a = false;
        }
        if (t_firstChild) {
          if (t_firstChild.style.width !== d) {
            let [e, t] = c(n, l);
            t_firstChild.style.setProperty(e, t);
          }
          t_firstChild = t_firstChild.nextSibling;
        } else {
          let e = document.createElement("col");
          let [r, o] = c(n, l);
          e.style.setProperty(r, o);
          colgroup.appendChild(e);
        }
      }
    }
  }
  while (t_firstChild) {
    let e = t_firstChild.nextSibling;
    if ((l = t_firstChild.parentNode) != null) {
      l.removeChild(t_firstChild);
    }
    t_firstChild = e;
  }
  let p =
    e.attrs.style &&
    typeof e.attrs.style === "string" &&
    /\bwidth\s*:/i.test(e.attrs.style);
  if (a && !p) {
    table.style.width = `${s}px`;
    table.style.minWidth = "";
  } else {
    table.style.width = "";
    table.style.minWidth = `${s}px`;
  }
}
class View {
  constructor(e, t) {
    this.node = e;
    this.cellMinWidth = t;
    this.dom = document.createElement("div");
    this.dom.className = "tableWrapper";
    this.table = this.dom.appendChild(document.createElement("table"));
    if (e.attrs.style) {
      this.table.style.cssText = e.attrs.style;
    }
    this.colgroup = this.table.appendChild(document.createElement("colgroup"));
    p(e, this.colgroup, this.table, t);
    this.contentDOM = this.table.appendChild(document.createElement("tbody"));
  }
  update(e) {
    return (
      e.type === this.node.type &&
      ((this.node = e),
      p(e, this.colgroup, this.table, this.cellMinWidth),
      true)
    );
  }
  ignoreMutation(e) {
    let e_target = e.target;
    let r = this.dom.contains(e_target);
    let n = this.contentDOM.contains(e_target);
    return (
      !!r &&
      !n &&
      (e.type === "attributes" ||
        e.type === "childList" ||
        e.type === "characterData")
    );
  }
}
function f(e, t) {
  if (t) {
    return e.createChecked(null, t);
  }
  return e.createAndFill();
}
const m = ({ editor }) => {
  let { selection } = editor.state;
  if (!(selection instanceof rn)) {
    return false;
  }
  let r = 0;
  let o = n.eL(selection.ranges[0].$from, (e) => e.type.name === "table");
  if (o != null) {
    o.node.descendants((e) => {
      if (e.type.name === "table") {
        return false;
      }
      if (["tableCell", "tableHeader"].includes(e.type.name)) {
        r += 1;
      }
    });
  }
  return r === selection.ranges.length && (editor.commands.deleteTable(), true);
};
const g = (e, t, r = {}) => {
  let n;
  let o = (n = r.cellLineSeparator) != null ? n : "\x1f";
  if (!e || !e.content || e.content.length === 0) {
    return "";
  }
  let i = [];
  e.content.forEach((e) => {
    let r = [];
    if (e.content) {
      e.content.forEach((e) => {
        var n;
        let text = (
          (e.content && Array.isArray(e.content) && e.content.length > 1
            ? e.content.map((e) => t.renderChildren(e)).join(o)
            : e.content
              ? t.renderChildren(e.content)
              : "") || ""
        )
          .replace(/\s+/g, " ")
          .trim();
        let isHeader = e.type === "tableHeader";
        let align = l((n = e.attrs) == null ? undefined : n.align);
        r.push({
          text,
          isHeader,
          align,
        });
      });
    }
    i.push(r);
  });
  let s = i.reduce((acc, item) => Math.max(acc, item.length), 0);
  if (s === 0) {
    return "";
  }
  let a = Array(s).fill(0);
  i.forEach((e) => {
    var t;
    for (let r = 0; r < s; r += 1) {
      let n = (((t = e[r]) == null ? undefined : t.text) || "").length;
      if (n > a[r]) {
        a[r] = n;
      }
      if (a[r] < 3) {
        a[r] = 3;
      }
    }
  });
  let u = (e, t) => e + " ".repeat(Math.max(0, t - e.length));
  let d = i[0];
  let c = d.some((e) => e.isHeader);
  let p = Array(s).fill(null);
  i.forEach((e) => {
    var t;
    for (let r = 0; r < s; r += 1) {
      if (!p[r] && ((t = e[r]) == null ? undefined : t.align)) {
        p[r] = e[r].align;
      }
    }
  });
  let h = "\n";
  let f = Array(s)
    .fill(0)
    .map((e, t) => (c && d[t] && d[t].text) || "");
  h += `| ${f.map((e, t) => u(e, a[t])).join(" | ")} |
| ${a
    .map((e, t) => {
      let r = Math.max(3, e);
      let n = p[t];
      switch (n) {
        case "left":
          return `:${"-".repeat(r)}`;
        case "right":
          return `${"-".repeat(r)}:`;
        case "center":
          return `:${"-".repeat(r)}:`;
        default:
          return "-".repeat(r);
      }
    })
    .join(" | ")} |
`;
  (c ? i.slice(1) : i).forEach((e) => {
    h += `| ${Array(s)
      .fill(0)
      .map((t, r) => u((e[r] && e[r].text) || "", a[r]))
      .join(" | ")} |
`;
  });
  return h;
};
export var XI = n.bP.create({
  name: "table",
  addOptions: () => ({
    HTMLAttributes: {},
    resizable: false,
    renderWrapper: false,
    handleWidth: 5,
    cellMinWidth: 25,
    View,
    lastColumnResizable: true,
    allowTableNodeSelection: false,
  }),
  content: "tableRow+",
  tableRole: "table",
  isolating: true,
  group: "block",
  parseHTML: () => [
    {
      tag: "table",
    },
  ],
  renderHTML({ node, HTMLAttributes }) {
    let { colgroup, tableWidth, tableMinWidth } = ((e, t) => {
      let r = 0;
      let n = true;
      let o = [];
      let e_firstChild = e.firstChild;
      if (!e_firstChild) {
        return {};
      }
      for (let e = 0, l = 0; e < e_firstChild.childCount; e += 1) {
        let { colspan, colwidth } = e_firstChild.child(e).attrs;
        for (let e = 0; e < colspan; e += 1, l += 1) {
          let i = l === undefined ? undefined : colwidth && colwidth[e];
          r += i || t;
          if (!i) {
            n = false;
          }
          let [s, u] = c(t, i);
          o.push([
            "col",
            {
              style: `${s}: ${u}`,
            },
          ]);
        }
      }
      let tableWidth_1 = n ? `${r}px` : "";
      let tableMinWidth_1 = n ? "" : `${r}px`;
      return {
        colgroup: ["colgroup", {}, ...o],
        tableWidth: tableWidth_1,
        tableMinWidth: tableMinWidth_1,
      };
    })(node, this.options.cellMinWidth);
    let HTMLAttributes_style = HTMLAttributes.style;
    let s = [
      "table",
      n.KV(this.options.HTMLAttributes, HTMLAttributes, {
        style:
          HTMLAttributes_style ||
          (tableWidth ? `width: ${tableWidth}` : `min-width: ${tableMinWidth}`),
      }),
      colgroup,
      ["tbody", 0],
    ];
    if (this.options.renderWrapper) {
      return [
        "div",
        {
          class: "tableWrapper",
        },
        s,
      ];
    }
    return s;
  },
  parseMarkdown: (e, t) => {
    let r = [];
    let n = Array.isArray(e.align) ? e.align : [];
    if (e.header) {
      let o = [];
      e.header.forEach((e, r) => {
        var i;
        let s = l((i = n[r]) != null ? i : e.align);
        o.push(
          t.createNode(
            "tableHeader",
            s
              ? {
                  align: s,
                }
              : {},
            [
              {
                type: "paragraph",
                content: t.parseInline(e.tokens),
              },
            ],
          ),
        );
      });
      r.push(t.createNode("tableRow", {}, o));
    }
    if (e.rows) {
      e.rows.forEach((e) => {
        let o = [];
        e.forEach((e, r) => {
          var i;
          let s = l((i = n[r]) != null ? i : e.align);
          o.push(
            t.createNode(
              "tableCell",
              s
                ? {
                    align: s,
                  }
                : {},
              [
                {
                  type: "paragraph",
                  content: t.parseInline(e.tokens),
                },
              ],
            ),
          );
        });
        r.push(t.createNode("tableRow", {}, o));
      });
    }
    return t.createNode("table", undefined, r);
  },
  renderMarkdown: (e, t) => g(e, t),
  addCommands: () => ({
    insertTable:
      ({ rows = 3, cols = 3, withHeaderRow = true } = {}) =>
      ({ tr, dispatch, editor }) => {
        let s = ((e, t, r, n) => {
          let o = ((e) => {
            if (e.cached.tableNodeTypes) {
              return e.cached.tableNodeTypes;
            }
            let t = {};
            Object.keys(e.nodes).forEach((r) => {
              let n = e.nodes[r];
              if (n.spec.tableRole) {
                t[n.spec.tableRole] = n;
              }
            });
            e.cached.tableNodeTypes = t;
            return t;
          })(e);
          let i = [];
          let l = [];
          for (let e = 0; e < r; e += 1) {
            let e = f(o.cell, undefined);
            if (e) {
              l.push(e);
            }
            if (n) {
              let e = f(o.header_cell, undefined);
              if (e) {
                i.push(e);
              }
            }
          }
          let s = [];
          for (let e = 0; e < t; e += 1) {
            s.push(o.row.createChecked(null, n && e === 0 ? i : l));
          }
          return o.table.createChecked(null, s);
        })(editor.schema, rows, cols, withHeaderRow);
        if (dispatch) {
          let e = tr.selection.from + 1;
          tr.replaceSelectionWith(s)
            .scrollIntoView()
            .setSelection(o.U3.near(tr.doc.resolve(e)));
        }
        return true;
      },
    addColumnBefore:
      () =>
      ({ state, dispatch }) =>
        RC(state, dispatch),
    addColumnAfter:
      () =>
      ({ state, dispatch }) =>
        GU(state, dispatch),
    deleteColumn:
      () =>
      ({ state, dispatch }) =>
        gR(state, dispatch),
    addRowBefore:
      () =>
      ({ state, dispatch }) =>
        JD(state, dispatch),
    addRowAfter:
      () =>
      ({ state, dispatch }) =>
        gC(state, dispatch),
    deleteRow:
      () =>
      ({ state, dispatch }) =>
        aR(state, dispatch),
    deleteTable:
      () =>
      ({ state, dispatch }) =>
        kG(state, dispatch),
    mergeCells:
      () =>
      ({ state, dispatch }) =>
        w7(state, dispatch),
    splitCell:
      () =>
      ({ state, dispatch }) =>
        L0(state, dispatch),
    toggleHeaderColumn:
      () =>
      ({ state, dispatch }) =>
        iS("column")(state, dispatch),
    toggleHeaderRow:
      () =>
      ({ state, dispatch }) =>
        iS("row")(state, dispatch),
    toggleHeaderCell:
      () =>
      ({ state, dispatch }) =>
        _G(state, dispatch),
    mergeOrSplit:
      () =>
      ({ state, dispatch }) =>
        !!w7(state, dispatch) || L0(state, dispatch),
    setCellAttribute:
      (e, t) =>
      ({ state, dispatch }) =>
        i4(e, t)(state, dispatch),
    goToNextCell:
      () =>
      ({ state, dispatch }) =>
        D8(1)(state, dispatch),
    goToPreviousCell:
      () =>
      ({ state, dispatch }) =>
        D8(-1)(state, dispatch),
    fixTables:
      () =>
      ({ state, dispatch }) => {
        if (dispatch) {
          rP(state);
        }
        return true;
      },
    setCellSelection:
      (e) =>
      ({ tr, dispatch }) => {
        if (dispatch) {
          let r = rn.create(tr.doc, e.anchorCell, e.headCell);
          tr.setSelection(r);
        }
        return true;
      },
  }),
  addKeyboardShortcuts() {
    return {
      Tab: () =>
        !!this.editor.commands.goToNextCell() ||
        (!!this.editor.can().addRowAfter() &&
          this.editor.chain().addRowAfter().goToNextCell().run()),
      "Shift-Tab": () => this.editor.commands.goToPreviousCell(),
      Backspace: m,
      "Mod-Backspace": m,
      Delete: m,
      "Mod-Delete": m,
    };
  },
  addProseMirrorPlugins() {
    return [
      ...(this.options.resizable && this.editor.isEditable
        ? [
            AL({
              handleWidth: this.options.handleWidth,
              cellMinWidth: this.options.cellMinWidth,
              defaultCellMinWidth: this.options.cellMinWidth,
              View: this.options.View,
              lastColumnResizable: this.options.lastColumnResizable,
            }),
          ]
        : []),
      LF({
        allowTableNodeSelection: this.options.allowTableNodeSelection,
      }),
    ];
  },
  extendNodeSchema(e) {
    let t = {
      name: e.name,
      options: e.options,
      storage: e.storage,
    };
    return {
      tableRole: n.gk(n.iI(e, "tableRole", t)),
    };
  },
});
export var R0 = n.YY.create({
  name: "tableKit",
  addExtensions() {
    let e = [];
    if (this.options.table !== false) {
      e.push(XI.configure(this.options.table));
    }
    if (this.options.tableCell !== false) {
      e.push(nA.configure(this.options.tableCell));
    }
    if (this.options.tableHeader !== false) {
      e.push(A0.configure(this.options.tableHeader));
    }
    if (this.options.tableRow !== false) {
      e.push(Hj.configure(this.options.tableRow));
    }
    return e;
  },
});
