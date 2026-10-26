import r from "WKV";
import i from "Zr";
import o from "le8";
import s from "mV";
class a extends i.LN {
  constructor(e) {
    super(e, e);
  }
  map(e, t) {
    let n = e.resolve(t.map(this.head));
    if (a.valid(n)) {
      return new a(n);
    }
    return i.LN.near(n);
  }
  content() {
    return o.Ji.empty;
  }
  eq(e) {
    return e instanceof a && e.head == this.head;
  }
  toJSON() {
    return {
      type: "gapcursor",
      pos: this.head,
    };
  }
  static fromJSON(e, t) {
    if (typeof t.pos !== "number") {
      throw RangeError("Invalid input for GapCursor.fromJSON");
    }
    return new a(e.resolve(t.pos));
  }
  getBookmark() {
    return new l(this.anchor);
  }
  static valid(e) {
    let e_parent = e.parent;
    if (
      e_parent.isTextblock ||
      !((e) => {
        for (let t = e.depth; t >= 0; t--) {
          let n = e.index(t);
          let r = e.node(t);
          if (n == 0) {
            if (r.type.spec.isolating) {
              return true;
            }
            continue;
          }
          for (let e = r.child(n - 1); ; e = e.lastChild) {
            if (
              (e.childCount == 0 && !e.inlineContent) ||
              e.isAtom ||
              e.type.spec.isolating
            ) {
              return true;
            }
            if (e.inlineContent) {
              return false;
            }
          }
        }
        return true;
      })(e) ||
      !((e) => {
        for (let t = e.depth; t >= 0; t--) {
          let n = e.indexAfter(t);
          let r = e.node(t);
          if (n == r.childCount) {
            if (r.type.spec.isolating) {
              return true;
            }
            continue;
          }
          for (let e = r.child(n); ; e = e.firstChild) {
            if (
              (e.childCount == 0 && !e.inlineContent) ||
              e.isAtom ||
              e.type.spec.isolating
            ) {
              return true;
            }
            if (e.inlineContent) {
              return false;
            }
          }
        }
        return true;
      })(e)
    ) {
      return false;
    }
    let allowGapCursor = e_parent.type.spec.allowGapCursor;
    if (allowGapCursor != null) {
      return allowGapCursor;
    }
    let defaultType = e_parent.contentMatchAt(e.index()).defaultType;
    return defaultType && defaultType.isTextblock;
  }
  static findGapCursorFrom(e, t, n = false) {
    e: while (true) {
      if (!n && a.valid(e)) {
        return e;
      }
      let r = e.pos;
      let o = null;
      for (let n = e.depth; ; n--) {
        let i = e.node(n);
        if (t > 0 ? e.indexAfter(n) < i.childCount : e.index(n) > 0) {
          o = i.child(t > 0 ? e.indexAfter(n) : e.index(n) - 1);
          break;
        }
        if (n == 0) {
          return null;
        }
        r += t;
        let s = e.doc.resolve(r);
        if (a.valid(s)) {
          return s;
        }
      }
      while (true) {
        let s = t > 0 ? o.firstChild : o.lastChild;
        if (!s) {
          if (o.isAtom && !o.isText && !i.nh.isSelectable(o)) {
            e = e.doc.resolve(r + o.nodeSize * t);
            n = false;
            continue e;
          }
          break;
        }
        o = s;
        r += t;
        let l = e.doc.resolve(r);
        if (a.valid(l)) {
          return l;
        }
      }
      return null;
    }
  }
}
a.prototype.visible = false;
a.findFrom = a.findGapCursorFrom;
i.LN.jsonID("gapcursor", a);
class l {
  constructor(e) {
    this.pos = e;
  }
  map(e) {
    return new l(e.map(this.pos));
  }
  resolve(e) {
    let t = e.resolve(this.pos);
    if (a.valid(t)) {
      return new a(t);
    }
    return i.LN.near(t);
  }
}
export function z() {
  return new i.k_({
    props: {
      decorations,
      createSelectionBetween: (e, t, n) => {
        if (t.pos == n.pos && a.valid(n)) {
          return new a(n);
        }
        return null;
      },
      handleClick,
      handleKeyDown,
      handleDOMEvents: {
        beforeinput,
      },
    },
  });
}
let handleKeyDown = r.K({
  ArrowLeft: u("horiz", -1),
  ArrowRight: u("horiz", 1),
  ArrowUp: u("vert", -1),
  ArrowDown: u("vert", 1),
});
function u(e, t) {
  let n = e == "vert" ? (t > 0 ? "down" : "up") : t > 0 ? "right" : "left";
  return function (e, r, o) {
    let e_selection = e.selection;
    let l = t > 0 ? e_selection.$to : e_selection.$from;
    let s_empty = e_selection.empty;
    if (e_selection instanceof i.U3) {
      if (!o.endOfTextblock(n) || l.depth == 0) {
        return false;
      }
      s_empty = false;
      l = e.doc.resolve(t > 0 ? l.after() : l.before());
    }
    let c = a.findGapCursorFrom(l, t, s_empty);
    return !!c && (r && r(e.tr.setSelection(new a(c))), true);
  };
}
function handleClick(e, t, n) {
  if (!e || !e.editable) {
    return false;
  }
  let r = e.state.doc.resolve(t);
  if (!a.valid(r)) {
    return false;
  }
  let o = e.posAtCoords({
    left: n.clientX,
    top: n.clientY,
  });
  return (
    !(o && o.inside > -1 && i.nh.isSelectable(e.state.doc.nodeAt(o.inside))) &&
    (e.dispatch(e.state.tr.setSelection(new a(r))), true)
  );
}
function beforeinput(e, t) {
  if (
    t.inputType != "insertCompositionText" ||
    !(e.state.selection instanceof a)
  ) {
    return false;
  }
  let { $from } = e.state.selection;
  let r = $from.parent
    .contentMatchAt($from.index())
    .findWrapping(e.state.schema.nodes.text);
  if (!r) {
    return false;
  }
  let empty = o.FK.empty;
  for (let e = r.length - 1; e >= 0; e--) {
    empty = o.FK.from(r[e].createAndFill(null, empty));
  }
  let l = e.state.tr.replace($from.pos, $from.pos, new o.Ji(empty, 0, 0));
  l.setSelection(i.U3.near(l.doc.resolve($from.pos + 1)));
  e.dispatch(l);
  return false;
}
function decorations(e) {
  if (!(e.selection instanceof a)) {
    return null;
  }
  let t = document.createElement("div");
  t.className = "ProseMirror-gapcursor";
  return s.zF.create(e.doc, [
    s.NZ.widget(e.selection.head, t, {
      key: "gapcursor",
    }),
  ]);
}
