import n from "oa";
import o from "bk";
import l from "lgn";
import i from "um";
import s from "RuZ";
import c from "oht";
import d from "kC";
import u from "IWD";
import v from "E3";
import m from "t0k";
import h from "Kcg";
import p from "ydi";
import f from "b5M";
import g from "ed";
import b from "xdS";
import w from "MG";
import x from "JOA";
import y from "edH";
import k from "v4";
import _ from "tdP";
import A from "iya";
import C from "K3";
import j from "OVi";
import M from "le8";
import N from "Zr";
import S from "siZ";
import L from "zxf";
import E from "mV";
import T from "X9s";
let a;
const z = l.bP.create({
  name: "subjectTag",
  group: "inline",
  inline: true,
  atom: true,
  addAttributes: () => ({
    label: {
      default: null,
      parseHTML: (e) => e.textContent,
      renderHTML: () => ({}),
    },
  }),
  parseHTML: () => [
    {
      tag: "subject",
    },
  ],
  renderHTML(e) {
    let t;
    let r;
    const { node, HTMLAttributes } = e;
    const o =
      (t =
        (r = node.attrs.label) == null
          ? undefined
          : r.replace(/_[^_]*$/, "")) != null
        ? t
        : "";
    return [
      "span",
      l.KV(HTMLAttributes, {
        "data-type": this.name,
      }),
      "@".concat(o),
    ];
  },
  addStorage: () => ({
    markdown: {
      serialize(e, t) {
        e.write("<subject>".concat(t.attrs.label, "</subject>"));
      },
      parse: {},
    },
  }),
});
const types = ["heading", "paragraph"];
const alignments = ["left", "center", "right", "justify"];
function F(e) {
  const e_firstChild = e.firstChild;
  if (!e_firstChild) {
    return false;
  }
  let r = false;
  e_firstChild.forEach((e) => {
    if (e.type.name === "tableHeader") {
      r = true;
    }
  });
  return r;
}
function R(e, t) {
  let r = 0;
  for (let a = 0; a < e.childCount; a++) {
    const n = e.child(a);
    const o = n.attrs.colspan || 1;
    if (t >= r && t < r + o) {
      return n;
    }
    r += o;
  }
  return null;
}
function H(e, t) {
  const r = F(e);
  let headerText = "";
  let n = 0;
  let bodyMaxText = "";
  for (let l = 0; l < e.childCount; l++) {
    const i = R(e.child(l), t);
    if (i) {
      const s = i.textContent.trim();
      if (l === 0 && r) {
        headerText = s;
        continue;
      }
      const c = [...s].length;
      if (c > n) {
        n = c;
        bodyMaxText = s;
      }
    }
  }
  const length = [...headerText].length;
  return {
    headerText,
    bodyMaxText,
    maxCharCount: Math.max(length, n),
  };
}
function I(e, t, r, n, o) {
  let l = 0;
  let i = true;
  let s = false;
  let t_firstElementChild = t.firstElementChild;
  const e_firstChild = e.firstChild;
  const u = ((e) => {
    if (
      typeof window === "undefined" ||
      typeof window.getComputedStyle !== "function"
    ) {
      return {
        headerFont: null,
        bodyFont: null,
      };
    }
    const t = window.getComputedStyle(e);
    const r = t.fontSize || "16px";
    const a = t.fontFamily || "sans-serif";
    return {
      headerFont: "600 ".concat(r, " ").concat(a),
      bodyFont: ""
        .concat(t.fontWeight || "normal", " ")
        .concat(r, " ")
        .concat(a),
    };
  })(r);
  if (e_firstChild) {
    for (let v = 0, m = 0; v < e_firstChild.childCount; v++) {
      for (
        let { colspan, colwidth } = e_firstChild.child(v).attrs, f = 0;
        f < colspan;
        f++, m++
      ) {
        let g;
        let b;
        const w = H(e, m);
        const allowManualOnAutoFit = n === m;
        const y = (function (e, t, width, n) {
          const { allowManualOnAutoFit = false } =
            arguments.length > 4 && arguments[4] !== undefined
              ? arguments[4]
              : {};
          const l = H(e, t);
          if (width && allowManualOnAutoFit) {
            return {
              mode: "manual",
              width,
            };
          }
          if (l.maxCharCount <= 10) {
            return {
              mode: "auto-fit",
              width: ((e, t, r) => {
                const n = F(e);
                let o = 48;
                for (let l = 0; l < e.childCount; l++) {
                  const i = R(e.child(l), t);
                  if (i) {
                    const s = i.textContent.trim();
                    if (s) {
                      const c = l === 0 && n;
                      const d = ((e, t) => {
                        const r =
                          a !== undefined
                            ? a
                            : (a =
                                typeof document === "undefined"
                                  ? null
                                  : document
                                      .createElement("canvas")
                                      .getContext("2d"));
                        if (r && t) {
                          r.font = t;
                          return r.measureText(e).width;
                        }
                        return null;
                      })(s, c ? r.headerFont : r.bodyFont);
                      o = Math.max(
                        o,
                        Math.max(
                          d != null ? d : 0,
                          (function (e) {
                            const t =
                              arguments.length > 1 &&
                              arguments[1] !== undefined &&
                              arguments[1];
                            let r = 0;
                            for (const a of e) {
                              if (/[^\u0000-\u00ff]/.test(a)) {
                                r += t ? 18.5 : 16;
                                continue;
                              }
                              r += t ? 9.72 : 9;
                            }
                            return r;
                          })(s, c),
                        ) +
                          26 +
                          3,
                      );
                    }
                  }
                }
                return Math.ceil(o);
              })(e, t, n),
            };
          }
          if (width) {
            return {
              mode: "manual",
              width,
            };
          }
          return {
            mode: "flex",
          };
        })(
          e,
          m,
          allowManualOnAutoFit
            ? o
            : w.maxCharCount > 10
              ? colwidth == null
                ? undefined
                : colwidth[f]
              : undefined,
          u,
          {
            allowManualOnAutoFit,
          },
        );
        if (y.mode === "auto-fit") {
          s = true;
          l += (g = y.width) != null ? g : 48;
        } else if (y.mode === "manual") {
          l += (b = y.width) != null ? b : 80;
        } else {
          i = false;
          l += 190;
        }
        const k = ((e, t) => {
          if (t) {
            return t;
          }
          const r = document.createElement("col");
          e.appendChild(r);
          return r;
        })(t, t_firstElementChild);
        ((e, t) => {
          e.style.removeProperty("width");
          e.style.removeProperty("min-width");
          e.style.removeProperty("max-width");
          switch (t.mode) {
            case "manual":
              let r;
              e.style.width = "".concat(
                Math.max((r = t.width) != null ? r : 0, 80),
                "px",
              );
              break;
            case "auto-fit":
              const a = "".concat(t.width, "px");
              e.style.width = a;
              e.style.minWidth = a;
              e.style.maxWidth = a;
              break;
            case "flex":
              e.style.minWidth = `${190}px`;
          }
        })(k, y);
        t_firstElementChild = k.nextElementSibling;
      }
    }
  }
  while (t_firstElementChild) {
    const _ = t_firstElementChild.nextElementSibling;
    t_firstElementChild.remove();
    t_firstElementChild = _;
  }
  r.style.removeProperty("table-layout");
  if (s) {
    r.style.tableLayout = "fixed";
    r.style.width = "100%";
    r.style.minWidth = "";
    return;
  }
  if (i) {
    r.style.width = "".concat(l, "px");
    r.style.minWidth = "";
  } else {
    r.style.width = "";
    r.style.minWidth = "".concat(l, "px");
  }
}
class D {
  update(e) {
    return (
      e.type === this.node.type &&
      ((this.node = e), this._syncColumnLayout(), true)
    );
  }
  _syncColumnLayout() {
    const e = this._buildLayoutSyncKey(this.node);
    if (e !== this._lastLayoutSyncKey) {
      this._lastLayoutSyncKey = e;
      I(this.node, this.colgroup, this.table);
    }
  }
  _buildLayoutSyncKey(e) {
    const e_firstChild = e.firstChild;
    if (!e_firstChild) {
      return "";
    }
    let r = 0;
    const a = [];
    for (let n = 0; n < e_firstChild.childCount; n++) {
      for (
        let { colspan, colwidth } = e_firstChild.child(n).attrs, i = 0;
        i < colspan;
        i++, r++
      ) {
        const s = H(e, r);
        const c = colwidth == null ? undefined : colwidth[i];
        a.push(
          ""
            .concat(r, ":")
            .concat(s.maxCharCount, ":")
            .concat(c != null ? c : ""),
        );
      }
    }
    return "".concat(e.childCount, "|").concat(a.join(","));
  }
  ignoreMutation(e) {
    if (e.type === "attributes") {
      const { target } = e;
      return target === this.table || this.colgroup.contains(target);
    }
    return false;
  }
  constructor(e) {
    this.node = e;
    this._lastLayoutSyncKey = "";
    this.dom = document.createElement("div");
    this.dom.className = "tableWrapper";
    this.table = this.dom.appendChild(document.createElement("table"));
    this.colgroup = this.table.appendChild(document.createElement("colgroup"));
    this.contentDOM = this.table.appendChild(document.createElement("tbody"));
    this._syncColumnLayout();
  }
}
function O(e) {
  return S.QQ.getState(e);
}
function Q(e, setHandle) {
  e.dispatch(
    e.state.tr.setMeta(S.QQ, {
      setHandle,
    }),
  );
}
function X(e, t, r, a) {
  const n = e.posAtCoords({
    left: t.clientX + (r === "right" ? -a : a),
    top: t.clientY,
  });
  if (!n) {
    return -1;
  }
  const o = S.KW(e.state.doc.resolve(n.pos));
  if (!o) {
    return -1;
  }
  if (r === "right") {
    return o.pos;
  }
  const l = S.J3.get(o.node(-1));
  const i = o.start(-1);
  const s = l.map.indexOf(o.pos - i);
  if (s % l.width == 0) {
    return -1;
  }
  return i + l.map[s - 1];
}
function J(dragging, t) {
  return Math.max(80, dragging.startWidth + t.clientX - dragging.startX);
}
function V(e, activeHandle, r) {
  let a;
  const n = e.state.doc.resolve(activeHandle);
  const o = n.node(-1);
  const l = n.start(-1);
  const i =
    S.J3.get(o).colCount(n.pos - l) +
    ((a = n.nodeAfter) == null ? undefined : a.attrs.colspan) -
    1;
  const s = ((e, t) => {
    for (var r = e.domAtPos(t).node; r && r.nodeName !== "TABLE";) {
      r = r.parentNode;
    }
    return r;
  })(e, n.start(-1));
  if (s) {
    I(o, s.firstElementChild, s, i, r);
  }
}
function K(e) {
  const textAlign = e.attrs.textAlign;
  return !!textAlign && textAlign !== "left";
}
function U(e, t) {
  const r = l.su(M.FK.from(t), t.type.schema);
  e.write(r);
  e.closeBlock(t);
}
function q(e) {
  const { state } = e;
  const { from, to } = state.selection;
  let n = false;
  state.doc.nodesBetween(from, to, (e) => {
    if (e.type.name === "table") {
      n = true;
    }
    return !n;
  });
  return n;
}
const B = new Set(["bulletList", "orderedList"]);
function $(resizable, t) {
  return [
    v.A,
    y.A.extend({
      addCommands() {
        let e;
        let r;
        const a =
          (e = (r = this.parent) == null ? undefined : r.call(this)) != null
            ? e
            : {};
        return o._(n._({}, a), {
          setParagraph: () => (e) => {
            var r;
            var n;
            var o;
            var l;
            var i =
              (r = (n = a.setParagraph) == null ? undefined : n.call(a)(e)) !=
                null && r;
            if (i) {
              if ((o = (l = t.current).onHeadingChange) != null) {
                o.call(l, 0);
              }
            }
            return i;
          },
        });
      },
      addStorage: () => ({
        markdown: {
          serialize(e, t) {
            if (K(t)) {
              U(e, t);
            } else {
              e.renderInline(t);
              e.closeBlock(t);
            }
          },
          parse: {},
        },
      }),
    }),
    A.A,
    h.A,
    m.A,
    p.A.extend({
      addCommands() {
        let e;
        let r;
        const a =
          (e = (r = this.parent) == null ? undefined : r.call(this)) != null
            ? e
            : {};
        return o._(n._({}, a), {
          toggleHeading: function () {
            for (var e = arguments.length, r = Array(e), n = 0; n < e; n++) {
              r[n] = arguments[n];
            }
            const [o] = r;
            return (e) => {
              if (q(e)) {
                return false;
              }
              var r;
              var n;
              var l;
              var i;
              var s = e.editor.isActive("heading", {
                level: o.level,
              });
              var c =
                (r =
                  (n = a.toggleHeading) == null
                    ? undefined
                    : n.call(a, o)(e)) != null && r;
              if (c) {
                if ((l = (i = t.current).onHeadingChange) != null) {
                  l.call(i, s ? 0 : o.level);
                }
              }
              return c;
            };
          },
        });
      },
      addStorage: () => ({
        markdown: {
          serialize(e, t) {
            if (K(t)) {
              U(e, t);
            } else {
              e.write("".concat(e.repeat("#", t.attrs.level), " "));
              e.renderInline(t);
              e.closeBlock(t);
            }
          },
          parse: {},
        },
      }),
    }),
    k.Ay.extend({
      addKeyboardShortcuts: () => ({
        "Mod-Shift-x": (e) => {
          var { editor } = e;
          return editor.commands.toggleStrike();
        },
      }),
      addStorage: () => ({
        markdown: {
          serialize: {
            open: "<s>",
            close: "</s>",
          },
          parse: {},
        },
      }),
      addCommands() {
        let e;
        let r;
        const a =
          (e = (r = this.parent) == null ? undefined : r.call(this)) != null
            ? e
            : {};
        return o._(n._({}, a), {
          toggleStrike: () => (e) => {
            var r;
            var n;
            var o;
            var l;
            var i =
              (r = (n = a.toggleStrike) == null ? undefined : n.call(a)(e)) !=
                null && r;
            if (i) {
              if ((o = (l = t.current).onStrikethroughToggle) != null) {
                o.call(l);
              }
            }
            return i;
          },
        });
      },
    }),
    j.A.extend({
      addCommands() {
        let e;
        let r;
        const a =
          (e = (r = this.parent) == null ? undefined : r.call(this)) != null
            ? e
            : {};
        return o._(n._({}, a), {
          toggleUnderline: () => (e) => {
            var r;
            var n;
            var o;
            var l;
            var i =
              (r =
                (n = a.toggleUnderline) == null ? undefined : n.call(a)(e)) !=
                null && r;
            if (i) {
              if ((o = (l = t.current).onUnderlineToggle) != null) {
                o.call(l);
              }
            }
            return i;
          },
        });
      },
    }),
    s.Ay.extend({
      addKeyboardShortcuts: () => ({
        "Mod-b": (e) => {
          var { editor } = e;
          return editor.commands.toggleBold();
        },
      }),
      addCommands() {
        let e;
        let r;
        const a =
          (e = (r = this.parent) == null ? undefined : r.call(this)) != null
            ? e
            : {};
        return o._(n._({}, a), {
          toggleBold: () => (e) => {
            var r;
            var n;
            var o;
            var l;
            var i =
              (r = (n = a.toggleBold) == null ? undefined : n.call(a)(e)) !=
                null && r;
            if (i) {
              if ((o = (l = t.current).onBoldToggle) != null) {
                o.call(l);
              }
            }
            return i;
          },
        });
      },
    }),
    g.Ay.extend({
      addCommands() {
        let e;
        let r;
        const a =
          (e = (r = this.parent) == null ? undefined : r.call(this)) != null
            ? e
            : {};
        return o._(n._({}, a), {
          toggleItalic: () => (e) => {
            var r;
            var n;
            var o;
            var l;
            var i =
              (r = (n = a.toggleItalic) == null ? undefined : n.call(a)(e)) !=
                null && r;
            if (i) {
              if ((o = (l = t.current).onItalicToggle) != null) {
                o.call(l);
              }
            }
            return i;
          },
        });
      },
    }),
    d.Ay,
    u.Ay,
    b.Ay.configure({
      autolink: false,
      linkOnPaste: false,
      openOnClick: !resizable,
      HTMLAttributes: {
        target: "_blank",
        rel: "noopener noreferrer",
      },
    }),
    c.A.extend({
      addCommands() {
        let e;
        let r;
        const a =
          (e = (r = this.parent) == null ? undefined : r.call(this)) != null
            ? e
            : {};
        return o._(n._({}, a), {
          toggleBulletList: () => (e) => {
            if (q(e)) {
              return false;
            }
            var r;
            var n;
            var o;
            var l;
            var i =
              (r =
                (n = a.toggleBulletList) == null ? undefined : n.call(a)(e)) !=
                null && r;
            if (i) {
              if ((o = (l = t.current).onBulletListToggle) != null) {
                o.call(l);
              }
            }
            return i;
          },
        });
      },
    }),
    x.A.extend({
      addCommands() {
        let e;
        let r;
        const a =
          (e = (r = this.parent) == null ? undefined : r.call(this)) != null
            ? e
            : {};
        return o._(n._({}, a), {
          toggleOrderedList: () => (e) => {
            if (q(e)) {
              return false;
            }
            var r;
            var n;
            var o;
            var l;
            var i =
              (r =
                (n = a.toggleOrderedList) == null ? undefined : n.call(a)(e)) !=
                null && r;
            if (i) {
              if ((o = (l = t.current).onOrderedListToggle) != null) {
                o.call(l);
              }
            }
            return i;
          },
        });
      },
    }),
    w.A,
    i.Ay.extend({
      addCommands() {
        let e;
        let r;
        const a =
          (e = (r = this.parent) == null ? undefined : r.call(this)) != null
            ? e
            : {};
        return o._(n._({}, a), {
          toggleBlockquote: () => (e) => {
            if (q(e)) {
              return false;
            }
            var { state, dispatch } = e;
            var { $from, $to } = state.selection;
            var blockquote = state.schema.nodes.blockquote;
            for (var { depth } = $from; depth >= 0; depth--) {
              if ($from.node(depth).type === blockquote) {
                var s;
                var c;
                var d = $from.before(depth);
                var u = d + $from.node(depth).nodeSize;
                if ($to.pos > u) {
                  break;
                }
                if (dispatch) {
                  var v = $from.node(depth);
                  var m = state.doc.resolve(d + 1);
                  var h = state.doc.resolve(d + v.nodeSize - 1);
                  var p = new M.u$(m, h, depth);
                  dispatch(state.tr.lift(p, depth - 1).scrollIntoView());
                }
                if ((s = (c = t.current).onBlockquoteToggle) != null) {
                  s.call(c);
                }
                return true;
              }
            }
            var f = $from.sharedDepth($to.pos);
            for (var g = f; g >= 0; g--) {
              var b;
              var w;
              var x = new M.u$($from, $to, g);
              var y = L.oM(x, blockquote);
              if (y) {
                if (dispatch) {
                  dispatch(state.tr.wrap(x, y).scrollIntoView());
                }
                if ((b = (w = t.current).onBlockquoteToggle) != null) {
                  b.call(w);
                }
                return true;
              }
            }
            return false;
          },
        });
      },
    }),
    C.A.extend({
      addCommands() {
        let e;
        let r;
        const a =
          (e = (r = this.parent) == null ? undefined : r.call(this)) != null
            ? e
            : {};
        return o._(n._({}, a), {
          setTextAlign: (e) => (r) => {
            if (
              ((e) => {
                const { state } = e;
                const { from, to } = state.selection;
                let n = false;
                state.doc.nodesBetween(from, to, (e) => {
                  if (B.has(e.type.name)) {
                    n = true;
                  }
                  return !n;
                });
                return n;
              })(r)
            ) {
              return false;
            }
            var n;
            var o;
            var l;
            var i;
            var s =
              (n =
                (o = a.setTextAlign) == null ? undefined : o.call(a, e)(r)) !=
                null && n;
            if (s) {
              if ((l = (i = t.current).onAlignmentChange) != null) {
                l.call(i, e);
              }
            }
            return s;
          },
        });
      },
    }).configure({
      types,
      alignments,
    }),
    _.XI.extend({
      addProseMirrorPlugins() {
        let e;
        let t;
        let r;
        return [
          ((e = this.options.handleWidth),
          (t = this.options.lastColumnResizable),
          (r = new N.k_({
            key: S.QQ,
            state: {
              init(e, t) {
                let a;
                let n;
                const o = (a = r.spec.props) == null ? undefined : a.nodeViews;
                const l =
                  (n = t.schema.nodes.table) == null ? undefined : n.name;
                if (l && o) {
                  o[l] = (e) => new D(e);
                }
                return new S.WX(-1, false);
              },
              apply: (e, t) => t.apply(e),
            },
            props: {
              attributes: (e) => {
                var t = S.QQ.getState(e);
                if (t && t.activeHandle > -1) {
                  return {
                    class: "resize-cursor",
                  };
                }
                return {};
              },
              handleDOMEvents: {
                mousemove: (r, a) => {
                  ((e, t, r, a) => {
                    if (e.editable) {
                      const n = O(e.state);
                      if (n && !n.dragging) {
                        const o = ((e) => {
                          for (
                            var t = e instanceof HTMLElement ? e : null;
                            t && t.nodeName !== "TD" && t.nodeName !== "TH";
                          ) {
                            t = t.classList.contains("ProseMirror")
                              ? null
                              : t.parentElement;
                          }
                          return t;
                        })(t.target);
                        let l = -1;
                        if (o) {
                          const { left, right } = o.getBoundingClientRect();
                          if (t.clientX - left <= r) {
                            l = X(e, t, "left", r);
                          } else if (right - t.clientX <= r) {
                            l = X(e, t, "right", r);
                          }
                        }
                        if (l !== n.activeHandle) {
                          if (!a && l !== -1) {
                            let c;
                            const d = e.state.doc.resolve(l);
                            const u = d.node(-1);
                            const v = S.J3.get(u);
                            if (
                              v.colCount(d.pos - d.start(-1)) +
                                ((c = d.nodeAfter) == null
                                  ? undefined
                                  : c.attrs.colspan) -
                                1 ==
                              v.width - 1
                            ) {
                              return;
                            }
                          }
                          Q(e, l);
                        }
                      }
                    }
                  })(r, a, e, t);
                },
                mouseleave: (e) => {
                  if (e.editable) {
                    var t = O(e.state);
                    if (t && t.activeHandle > -1 && !t.dragging) {
                      Q(e, -1);
                    }
                  }
                },
                mousedown: (e, t) =>
                  ((e, t) => {
                    if (!e.editable) {
                      return false;
                    }
                    let r;
                    const a =
                      (r = e.dom.ownerDocument.defaultView) != null
                        ? r
                        : window;
                    const l = O(e.state);
                    if (!l || l.activeHandle === -1 || l.dragging) {
                      return false;
                    }
                    const i = e.state.doc.nodeAt(l.activeHandle);
                    if (!i) {
                      return false;
                    }
                    const startWidth = ((e, t, r) => {
                      let a;
                      let n;
                      const o =
                        (a = r.colwidth) == null
                          ? undefined
                          : a[r.colwidth.length - 1];
                      if (o) {
                        return o;
                      }
                      const l = e.domAtPos(t);
                      let offsetWidth = l.node.childNodes[l.offset].offsetWidth;
                      let r_colspan = r.colspan;
                      if ((n = r.colwidth) != null) {
                        n.forEach((e) => {
                          if (e) {
                            offsetWidth -= e;
                            r_colspan--;
                          }
                        });
                      }
                      return offsetWidth / r_colspan;
                    })(e, l.activeHandle, i.attrs);
                    e.dispatch(
                      e.state.tr.setMeta(S.QQ, {
                        setDragging: {
                          startX: t.clientX,
                          startWidth,
                        },
                      }),
                    );
                    var c = {
                      move(t) {
                        if (!t.buttons) {
                          return void c.finish(t);
                        }
                        const r = O(e.state);
                        if (r == null ? undefined : r.dragging) {
                          V(e, r.activeHandle, J(r.dragging, t));
                        }
                      },
                      finish(t) {
                        a.removeEventListener("mouseup", c.finish);
                        a.removeEventListener("mousemove", c.move);
                        const r = O(e.state);
                        if (r == null ? undefined : r.dragging) {
                          ((e, t, r) => {
                            const a = e.state.doc.resolve(t);
                            const l = a.node(-1);
                            for (
                              var i = S.J3.get(l),
                                s = a.start(-1),
                                c =
                                  i.colCount(a.pos - s) +
                                  ((v = a.nodeAfter) == null
                                    ? undefined
                                    : v.attrs.colspan) -
                                  1,
                                { tr } = e.state,
                                u = 0;
                              u < i.height;
                              u++
                            ) {
                              var v;
                              let m;
                              const h = u * i.width + c;
                              if (!u || i.map[h] !== i.map[h - i.width]) {
                                const p = i.map[h];
                                const f = l.nodeAt(p);
                                if (f) {
                                  const g = f.attrs;
                                  const b =
                                    g.colspan === 1 ? 0 : c - i.colCount(p);
                                  if (
                                    ((m = g.colwidth) == null
                                      ? undefined
                                      : m[b]) !== r
                                  ) {
                                    const colwidth = g.colwidth
                                      ? g.colwidth.slice()
                                      : Array(g.colspan).fill(0);
                                    colwidth[b] = r;
                                    tr.setNodeMarkup(
                                      s + p,
                                      undefined,
                                      o._(n._({}, g), {
                                        colwidth,
                                      }),
                                    );
                                  }
                                }
                              }
                            }
                            if (tr.docChanged) {
                              e.dispatch(tr);
                            }
                          })(e, r.activeHandle, J(r.dragging, t));
                          e.dispatch(
                            e.state.tr.setMeta(S.QQ, {
                              setDragging: null,
                            }),
                          );
                        }
                      },
                    };
                    V(e, l.activeHandle, startWidth);
                    a.addEventListener("mouseup", c.finish);
                    a.addEventListener("mousemove", c.move);
                    t.preventDefault();
                    return true;
                  })(e, t),
              },
              decorations: (e) => {
                var t = S.QQ.getState(e);
                if (t && t.activeHandle > -1) {
                  return ((e, t) => {
                    const r = [];
                    const a = e.doc.resolve(t);
                    const n = a.node(-1);
                    if (!n) {
                      return E.zF.empty;
                    }
                    for (
                      let o = S.J3.get(n),
                        l = a.start(-1),
                        i =
                          o.colCount(a.pos - l) +
                          ((c = a.nodeAfter) == null
                            ? undefined
                            : c.attrs.colspan) -
                          1,
                        s = 0;
                      s < o.height;
                      s++
                    ) {
                      var c;
                      let d;
                      const u = i + s * o.width;
                      if (
                        (i === o.width - 1 || o.map[u] !== o.map[u + 1]) &&
                        (s === 0 || o.map[u] !== o.map[u - o.width])
                      ) {
                        const v = o.map[u];
                        const m = n.nodeAt(v);
                        if (m) {
                          const h = l + v + m.nodeSize - 1;
                          const p = document.createElement("div");
                          p.className = "column-resize-handle";
                          if ((d = O(e)) == null ? undefined : d.dragging) {
                            r.push(
                              E.NZ.node(l + v, l + v + m.nodeSize, {
                                class: "column-resize-dragging",
                              }),
                            );
                          }
                          r.push(E.NZ.widget(h, p));
                        }
                      }
                    }
                    return E.zF.create(e.doc, r);
                  })(e, t.activeHandle);
                }
              },
              nodeViews: {},
            },
          }))),
          S.LF({
            allowTableNodeSelection: this.options.allowTableNodeSelection,
          }),
        ];
      },
      addStorage: () => ({
        markdown: {
          serialize(e, t) {
            r = true;
            a = true;
            t.forEach((e) => {
              if (r) {
                e.forEach((e) => {
                  if (r) {
                    if (
                      e.attrs.colspan > 1 ||
                      e.attrs.rowspan > 1 ||
                      e.childCount > 1
                    ) {
                      r = false;
                      return;
                    }
                    if (
                      a
                        ? e.type.name !== "tableHeader"
                        : e.type.name === "tableHeader"
                    ) {
                      r = false;
                    }
                  }
                });
                a = false;
              }
            });
            if (!r) {
              var r;
              var a;
              const n = l.su(M.FK.from(t), t.type.schema);
              e.write(n);
              e.closeBlock(t);
              return;
            }
            t.forEach((t, r, a) => {
              e.write("| ");
              t.forEach((t, r, a) => {
                if (a) {
                  e.write(" | ");
                }
                var t_firstChild = t.firstChild;
                if (
                  t_firstChild == null
                    ? undefined
                    : t_firstChild.textContent.trim()
                ) {
                  if (K(t_firstChild)) {
                    var o = l.su(
                      M.FK.from(t_firstChild),
                      t_firstChild.type.schema,
                    );
                    e.write(o);
                  } else {
                    e.renderInline(t_firstChild);
                  }
                }
              });
              e.write(" |");
              e.ensureNewLine();
              if (a === 0) {
                var n = Array.from(
                  {
                    length: t.childCount,
                  },
                  () => "---",
                ).join(" | ");
                e.write("| ".concat(n, " |"));
                e.ensureNewLine();
              }
            });
            e.closeBlock(t);
          },
          parse: {},
        },
      }),
    }).configure({
      resizable,
      cellMinWidth: 190,
      HTMLAttributes: {
        class: "markdown-editor-table",
      },
    }),
    _.Hj,
    _.nA.extend({
      content: "paragraph+",
    }),
    _.A0.extend({
      content: "paragraph+",
    }),
    z,
    T.o.configure({
      html: true,
      transformPastedText: true,
      breaks: true,
    }),
    f.A,
  ];
}
export { $ as k };
