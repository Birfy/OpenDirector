import t from "lgn";
import n from "edH";
import i from "Zr";
import r from "htj";
export var x = t.bP.create({
  name: r.t.ParagraphLeadingNode,
  group: "inline",
  inline: true,
  atom: true,
  selectable: false,
  parseHTML() {
    return [
      {
        tag: "span[data-".concat(this.name, "]"),
      },
    ];
  },
  renderHTML(e) {
    const { HTMLAttributes } = e;
    return [
      "span",
      t.KV(HTMLAttributes, {
        ["data-".concat(this.name)]: "",
      }),
    ];
  },
  addStorage: () => ({
    adjustSelectionForLeadingNode: undefined,
    previousValidSelection: undefined,
  }),
  addKeyboardShortcuts() {
    return {
      Backspace: (e) => {
        var u;
        var a;
        var { editor } = e;
        var { selection } = editor.state;
        var { $from } = selection;
        return (
          selection.empty &&
          (((u = $from.nodeBefore) == null ? undefined : u.type.name) ===
            this.name ||
            ($from.parent.type.name === n.A.name &&
              $from.parentOffset === 0 &&
              ((a = $from.parent.firstChild) == null
                ? undefined
                : a.type.name) === this.name))
        );
      },
      Delete: (e) => {
        var u;
        var a;
        var t;
        var { editor } = e;
        var { doc, selection } = editor.state;
        var { $to } = selection;
        return (
          selection.empty &&
          (((u = $to.nodeAfter) == null ? undefined : u.type.name) ===
            this.name ||
            ($to.parent.type.name === n.A.name &&
              $to.parentOffset === $to.parent.content.size &&
              ((t = doc.nodeAt($to.after($to.depth))) == null ||
              (a = t.firstChild) == null
                ? undefined
                : a.type.name) === this.name))
        );
      },
    };
  },
  onCreate() {
    this.storage.adjustSelectionForLeadingNode = () => {
      var e;
      var u;
      var a;
      var { state, view, options } = this.editor;
      var { doc, selection, tr } = state;
      var { from, to, $to } = selection;
      var { editable } = options;
      var { previousValidSelection } = this.storage;
      if (!editable) {
        this.storage.previousValidSelection = undefined;
        return;
      }
      if (
        ((e = $to.nodeAfter) == null ? undefined : e.type.name) === this.name
      ) {
        tr.setSelection(
          i.U3.create(
            doc,
            (a =
              previousValidSelection == null
                ? undefined
                : previousValidSelection.from) != null
              ? a
              : doc.content.size,
            previousValidSelection == null
              ? undefined
              : previousValidSelection.to,
          ),
        );
        view.dispatch(tr);
        return;
      }
      if (
        ((u = $to.nodeBefore) == null ? undefined : u.type.name) === n.A.name
      ) {
        tr.setSelection(i.U3.create(doc, from, to - 1));
        view.dispatch(tr);
        return;
      }
      var A = [];
      doc.nodesBetween(from, to, (e, u) => {
        if (e.type.name === this.name) {
          var a = u + e.nodeSize;
          if (u <= to && a > from) {
            A.push([u, a]);
          }
        }
      });
      if (!A.length) {
        this.storage.previousValidSelection = selection;
        return;
      }
      var h = [
        [from, A[0][0] - 1],
        ...A.map((e, u) => {
          var [, a] = e;
          if (u < A.length - 1) {
            return [a, A[u + 1][0] - 1];
          }
          return [a, to];
        }),
      ].filter((e) => {
        var [u, a] = e;
        return u <= a;
      });
      var E = (() => {
        if (previousValidSelection) {
          if (previousValidSelection.to < h[0][0]) {
            return h[0];
          }
          if (previousValidSelection.from > h[h.length - 1][1]) {
            return h[h.length - 1];
          }
          return h.find(
            (e) =>
              previousValidSelection.from <= e[1] &&
              previousValidSelection.to >= e[0],
          );
        }
      })();
      if (E) {
        var [f, D] = E;
        tr.setSelection(
          selection.anchor <= selection.head
            ? i.U3.create(doc, f, D)
            : i.U3.create(doc, D, f),
        );
        view.dispatch(tr);
      }
    };
  },
  onSelectionUpdate() {
    let e;
    let u;
    if ((e = (u = this.storage).adjustSelectionForLeadingNode) != null) {
      e.call(u);
    }
  },
  onFocus() {
    let e;
    let u;
    if ((e = (u = this.storage).adjustSelectionForLeadingNode) != null) {
      e.call(u);
    }
  },
  onBlur() {
    this.storage.previousValidSelection = undefined;
  },
});
