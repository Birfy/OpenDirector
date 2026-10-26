import { $L, Ln, N0, Wg, jP, n9, oM, zy } from "./module-zxf.js";
import { FK, Ji } from "./module-le8.js";
import { LN, U3, i5, nh } from "./module-Zr.js";
export let ic = (e, t) =>
  !e.selection.empty && (t && t(e.tr.deleteSelection().scrollIntoView()), true);
function l(e, t) {
  let { $cursor } = e.selection;
  if (
    $cursor &&
    (t ? t.endOfTextblock("backward", e) : !($cursor.parentOffset > 0))
  ) {
    return $cursor;
  }
  return null;
}
export let Qv = (e, t, n) => {
  let s = l(e, n);
  if (!s) {
    return false;
  }
  let a = p(s);
  if (!a) {
    let n = s.blockRange();
    let i = n && jP(n);
    return i != null && (t && t(e.tr.lift(n, i).scrollIntoView()), true);
  }
  let a_nodeBefore = a.nodeBefore;
  if (S(e, a, t, -1)) {
    return true;
  }
  if (
    s.parent.content.size == 0 &&
    (c(a_nodeBefore, "end") || nh.isSelectable(a_nodeBefore))
  ) {
    for (let n = s.depth; ; n--) {
      let l = $L(e.doc, s.before(n), s.after(n), Ji.empty);
      if (l && l.slice.size < l.to - l.from) {
        if (t) {
          let n = e.tr.step(l);
          n.setSelection(
            c(a_nodeBefore, "end")
              ? LN.findFrom(n.doc.resolve(n.mapping.map(a.pos, -1)), -1)
              : nh.create(n.doc, a.pos - a_nodeBefore.nodeSize),
          );
          t(n.scrollIntoView());
        }
        return true;
      }
      if (n == 1 || s.node(n - 1).childCount > 1) {
        break;
      }
    }
  }
  return (
    !!a_nodeBefore.isAtom &&
    a.depth == s.depth - 1 &&
    (t && t(e.tr.delete(a.pos - a_nodeBefore.nodeSize, a.pos).scrollIntoView()),
    true)
  );
};
function h(e, t, n) {
  let t_nodeBefore = t.nodeBefore;
  let l = t.pos - 1;
  for (; !t_nodeBefore.isTextblock; l--) {
    if (t_nodeBefore.type.spec.isolating) {
      return false;
    }
    let e = t_nodeBefore.lastChild;
    if (!e) {
      return false;
    }
    t_nodeBefore = e;
  }
  let t_nodeAfter = t.nodeAfter;
  let h = t.pos + 1;
  for (; !t_nodeAfter.isTextblock; h++) {
    if (t_nodeAfter.type.spec.isolating) {
      return false;
    }
    let e = t_nodeAfter.firstChild;
    if (!e) {
      return false;
    }
    t_nodeAfter = e;
  }
  let c = $L(e.doc, l, h, Ji.empty);
  if (!c || c.from != l || (c instanceof Ln && c.slice.size >= h - l)) {
    return false;
  }
  if (n) {
    let t = e.tr.step(c);
    t.setSelection(U3.create(t.doc, l));
    n(t.scrollIntoView());
  }
  return true;
}
function c(e, t, n = false) {
  for (let r = e; r; r = t == "start" ? r.firstChild : r.lastChild) {
    if (r.isTextblock) {
      return true;
    }
    if (n && r.childCount != 1) {
      break;
    }
  }
  return false;
}
export let _e = (e, t, n) => {
  let { $head, empty } = e.selection;
  let s = $head;
  if (!empty) {
    return false;
  }
  if ($head.parent.isTextblock) {
    if (n ? !n.endOfTextblock("backward", e) : $head.parentOffset > 0) {
      return false;
    }
    s = p($head);
  }
  let l = s && s.nodeBefore;
  return (
    !!l &&
    !!nh.isSelectable(l) &&
    (t &&
      t(
        e.tr
          .setSelection(nh.create(e.doc, s.pos - l.nodeSize))
          .scrollIntoView(),
      ),
    true)
  );
};
function p(e) {
  if (!e.parent.type.spec.isolating) {
    for (let t = e.depth - 1; t >= 0; t--) {
      if (e.index(t) > 0) {
        return e.doc.resolve(e.before(t + 1));
      }
      if (e.node(t).type.spec.isolating) {
        break;
      }
    }
  }
  return null;
}
function f(e, t) {
  let { $cursor } = e.selection;
  if (
    $cursor &&
    (t
      ? t.endOfTextblock("forward", e)
      : !($cursor.parentOffset < $cursor.parent.content.size))
  ) {
    return $cursor;
  }
  return null;
}
export let eT = (e, t, n) => {
  let s = f(e, n);
  if (!s) {
    return false;
  }
  let l = g(s);
  if (!l) {
    return false;
  }
  let l_nodeAfter = l.nodeAfter;
  if (S(e, l, t, 1)) {
    return true;
  }
  if (
    s.parent.content.size == 0 &&
    (c(l_nodeAfter, "start") || nh.isSelectable(l_nodeAfter))
  ) {
    let n = $L(e.doc, s.before(), s.after(), Ji.empty);
    if (n && n.slice.size < n.to - n.from) {
      if (t) {
        let r = e.tr.step(n);
        r.setSelection(
          c(l_nodeAfter, "start")
            ? LN.findFrom(r.doc.resolve(r.mapping.map(l.pos)), 1)
            : nh.create(r.doc, r.mapping.map(l.pos)),
        );
        t(r.scrollIntoView());
      }
      return true;
    }
  }
  return (
    !!l_nodeAfter.isAtom &&
    l.depth == s.depth - 1 &&
    (t && t(e.tr.delete(l.pos, l.pos + l_nodeAfter.nodeSize).scrollIntoView()),
    true)
  );
};
export let Sd = (e, t, n) => {
  let { $head, empty } = e.selection;
  let s = $head;
  if (!empty) {
    return false;
  }
  if ($head.parent.isTextblock) {
    if (
      n
        ? !n.endOfTextblock("forward", e)
        : $head.parentOffset < $head.parent.content.size
    ) {
      return false;
    }
    s = g($head);
  }
  let l = s && s.nodeAfter;
  return (
    !!l &&
    !!nh.isSelectable(l) &&
    (t && t(e.tr.setSelection(nh.create(e.doc, s.pos)).scrollIntoView()), true)
  );
};
function g(e) {
  if (!e.parent.type.spec.isolating) {
    for (let t = e.depth - 1; t >= 0; t--) {
      let n = e.node(t);
      if (e.index(t) + 1 < n.childCount) {
        return e.doc.resolve(e.after(t + 1));
      }
      if (n.type.spec.isolating) {
        break;
      }
    }
  }
  return null;
}
export let pC = (e, t) => {
  let { $head, $anchor } = e.selection;
  return (
    !!$head.parent.type.spec.code &&
    !!$head.sameParent($anchor) &&
    (t && t(e.tr.insertText("\n").scrollIntoView()), true)
  );
};
function w(e) {
  for (let t = 0; t < e.edgeCount; t++) {
    let { type } = e.edge(t);
    if (type.isTextblock && !type.hasRequiredAttrs()) {
      return type;
    }
  }
  return null;
}
export let I$ = (e, t) => {
  let { $head, $anchor } = e.selection;
  if (!$head.parent.type.spec.code || !$head.sameParent($anchor)) {
    return false;
  }
  let i = $head.node(-1);
  let s = $head.indexAfter(-1);
  let l = w(i.contentMatchAt(s));
  if (!l || !i.canReplaceWith(s, s, l)) {
    return false;
  }
  if (t) {
    let r = $head.after();
    let i = e.tr.replaceWith(r, r, l.createAndFill());
    i.setSelection(LN.near(i.doc.resolve(r), 1));
    t(i.scrollIntoView());
  }
  return true;
};
export let Z1 = (e, t) => {
  let e_selection = e.selection;
  let { $from, $to } = e_selection;
  if (
    e_selection instanceof i5 ||
    $from.parent.inlineContent ||
    $to.parent.inlineContent
  ) {
    return false;
  }
  let s = w($to.parent.contentMatchAt($to.indexAfter()));
  if (!s || !s.isTextblock) {
    return false;
  }
  if (t) {
    let n = (
      !$from.parentOffset && $to.index() < $to.parent.childCount ? $from : $to
    ).pos;
    let l = e.tr.insert(n, s.createAndFill());
    l.setSelection(U3.create(l.doc, n + 1));
    t(l.scrollIntoView());
  }
  return true;
};
export let iz = (e, t) => {
  let { $cursor } = e.selection;
  if (!$cursor || $cursor.parent.content.size) {
    return false;
  }
  if ($cursor.depth > 1 && $cursor.after() != $cursor.end(-1)) {
    let i = $cursor.before();
    if (zy(e.doc, i)) {
      if (t) {
        t(e.tr.split(i).scrollIntoView());
      }
      return true;
    }
  }
  let i = $cursor.blockRange();
  let o = i && jP(i);
  return o != null && (t && t(e.tr.lift(i, o).scrollIntoView()), true);
};
export let aw = (e, t) => {
  let { $from, $to } = e.selection;
  if (e.selection instanceof nh && e.selection.node.isBlock) {
    return (
      !!$from.parentOffset &&
      !!zy(e.doc, $from.pos) &&
      (t && t(e.tr.split($from.pos).scrollIntoView()), true)
    );
  }
  if (!$from.depth) {
    return false;
  }
  let s = [];
  let l;
  let a;
  let h = false;
  let c = false;
  for (let e = $from.depth; ; e--) {
    if ($from.node(e).isBlock) {
      let t;
      h = $from.end(e) == $from.pos + ($from.depth - e);
      c = $from.start(e) == $from.pos - ($from.depth - e);
      a = w($from.node(e - 1).contentMatchAt($from.indexAfter(e - 1)));
      s.unshift(
        t ||
          (h && a
            ? {
                type: a,
              }
            : null),
      );
      l = e;
      break;
    }
    if (e == 1) {
      return false;
    }
    s.unshift(null);
  }
  let d = e.tr;
  if (e.selection instanceof U3 || e.selection instanceof i5) {
    d.deleteSelection();
  }
  let p = d.mapping.map($from.pos);
  let f = zy(d.doc, p, s.length, s);
  if (!f) {
    s[0] = a
      ? {
          type: a,
        }
      : null;
    f = zy(d.doc, p, s.length, s);
  }
  d.split(p, s.length, s);
  if (!h && c && $from.node(l).type != a) {
    let e = d.mapping.map($from.before(l));
    let t = d.doc.resolve(e);
    if (a && $from.node(l - 1).canReplaceWith(t.index(), t.index() + 1, a)) {
      d.setNodeMarkup(d.mapping.map($from.before(l)), a);
    }
  }
  if (t) {
    t(d.scrollIntoView());
  }
  return true;
};
function S(e, t, n, s) {
  let l;
  let a;
  let h;
  let t_nodeBefore = t.nodeBefore;
  let t_nodeAfter = t.nodeAfter;
  let f;
  let u;
  let m = t_nodeBefore.type.spec.isolating || t_nodeAfter.type.spec.isolating;
  if (
    !m &&
    ((l = t.nodeBefore),
    (a = t.nodeAfter),
    (h = t.index()),
    l &&
      a &&
      l.type.compatibleContent(a.type) &&
      (!l.content.size && t.parent.canReplace(h - 1, h)
        ? (n && n(e.tr.delete(t.pos - l.nodeSize, t.pos).scrollIntoView()),
          true)
        : !!t.parent.canReplace(h, h + 1) &&
          !!(a.isTextblock || n9(e.doc, t.pos)) &&
          (n && n(e.tr.join(t.pos).scrollIntoView()), true)))
  ) {
    return true;
  }
  let g = !m && t.parent.canReplace(t.index(), t.index() + 1);
  if (
    g &&
    (f = (u = t_nodeBefore.contentMatchAt(
      t_nodeBefore.childCount,
    )).findWrapping(t_nodeAfter.type)) &&
    u.matchType(f[0] || t_nodeAfter.type).validEnd
  ) {
    if (n) {
      let o = t.pos + t_nodeAfter.nodeSize;
      let s = FK.empty;
      for (let e = f.length - 1; e >= 0; e--) {
        s = FK.from(f[e].create(null, s));
      }
      s = FK.from(t_nodeBefore.copy(s));
      let l = e.tr.step(
        new Wg(t.pos - 1, o, t.pos, o, new Ji(s, 1, 0), f.length, true),
      );
      let a = l.doc.resolve(o + 2 * f.length);
      if (
        a.nodeAfter &&
        a.nodeAfter.type == t_nodeBefore.type &&
        n9(l.doc, a.pos)
      ) {
        l.join(a.pos);
      }
      n(l.scrollIntoView());
    }
    return true;
  }
  let y =
    t_nodeAfter.type.spec.isolating || (s > 0 && m) ? null : LN.findFrom(t, 1);
  let w = y && y.$from.blockRange(y.$to);
  let k = w && jP(w);
  if (k != null && k >= t.depth) {
    if (n) {
      n(e.tr.lift(w, k).scrollIntoView());
    }
    return true;
  }
  if (g && c(t_nodeAfter, "start", true) && c(t_nodeBefore, "end")) {
    let o = t_nodeBefore;
    let s = [];
    while ((s.push(o), !o.isTextblock)) {
      o = o.lastChild;
    }
    let l = t_nodeAfter;
    let a = 1;
    for (; !l.isTextblock; l = l.firstChild) {
      a++;
    }
    if (o.canReplace(o.childCount, o.childCount, l.content)) {
      if (n) {
        let o = FK.empty;
        for (let e = s.length - 1; e >= 0; e--) {
          o = FK.from(s[e].copy(o));
        }
        n(
          e.tr
            .step(
              new Wg(
                t.pos - s.length,
                t.pos + t_nodeAfter.nodeSize,
                t.pos + a,
                t.pos + t_nodeAfter.nodeSize - a,
                new Ji(o, s.length, 0),
                0,
                true,
              ),
            )
            .scrollIntoView(),
        );
      }
      return true;
    }
  }
  return false;
}
function C(e) {
  return function (t, n) {
    let t_selection = t.selection;
    let i = e < 0 ? t_selection.$from : t_selection.$to;
    let i_depth = i.depth;
    while (i.node(i_depth).isInline) {
      if (!i_depth) {
        return false;
      }
      i_depth--;
    }
    return (
      !!i.node(i_depth).isTextblock &&
      (n &&
        n(
          t.tr.setSelection(
            U3.create(t.doc, e < 0 ? i.start(i_depth) : i.end(i_depth)),
          ),
        ),
      true)
    );
  };
}
export let $f = C(-1);
export let ec = C(1);
export function Im(e, t = null) {
  return function (n, i) {
    let { $from, $to } = n.selection;
    let l = $from.blockRange($to);
    let a = l && oM(l, e, t);
    return !!a && (i && i(n.tr.wrap(l, a).scrollIntoView()), true);
  };
}
export function y_(e, t = null) {
  return function (n, r) {
    let i = false;
    for (let r = 0; r < n.selection.ranges.length && !i; r++) {
      let {
        $from: { pos },
        $to: { pos: pos_1 },
      } = n.selection.ranges[r];
      n.doc.nodesBetween(pos, pos_1, (r, o) => {
        if (i) {
          return false;
        }
        if (!(!r.isTextblock || r.hasMarkup(e, t))) {
          if (r.type == e) {
            i = true;
          } else {
            let t = n.doc.resolve(o);
            let r = t.index();
            i = t.parent.canReplaceWith(r, r + 1, e);
          }
        }
      });
    }
    if (!i) {
      return false;
    }
    if (r) {
      let i = n.tr;
      for (let r = 0; r < n.selection.ranges.length; r++) {
        let {
          $from: { pos },
          $to: { pos: pos_1 },
        } = n.selection.ranges[r];
        i.setBlockType(pos, pos_1, e, t);
      }
      r(i.scrollIntoView());
    }
    return true;
  };
}
function D(...e) {
  return function (t, n, r) {
    for (let i = 0; i < e.length; i++) {
      if (e[i](t, n, r)) {
        return true;
      }
    }
    return false;
  };
}
let Backspace = D(ic, Qv, _e);
let Delete = D(ic, eT, Sd);
let R = {
  Enter: D(pC, Z1, iz, aw),
  "Mod-Enter": I$,
  Backspace,
  "Mod-Backspace": Backspace,
  "Shift-Backspace": Backspace,
  Delete,
  "Mod-Delete": Delete,
  "Mod-a": (e, t) => {
    if (t) {
      t(e.tr.setSelection(new i5(e.doc)));
    }
    return true;
  },
};
let I = {
  "Ctrl-h": R.Backspace,
  "Alt-Backspace": R["Mod-Backspace"],
  "Ctrl-d": R.Delete,
  "Ctrl-Alt-Backspace": R["Mod-Delete"],
  "Alt-Delete": R["Mod-Delete"],
  "Alt-d": R["Mod-Delete"],
  "Ctrl-a": $f,
  "Ctrl-e": ec,
};
for (let e in R) {
  I[e] = R[e];
}
if (typeof navigator !== "undefined") {
  /Mac|iP(hone|[oa]d)/.test(navigator.platform);
} else if (typeof os !== "undefined" && os.platform) {
  os.platform();
}
export const G2 = (e, t) => {
  let e_selection = e.selection;
  let i = e_selection instanceof nh;
  let s;
  if (i) {
    if (e_selection.node.isTextblock || !n9(e.doc, e_selection.from)) {
      return false;
    }
    s = e_selection.from;
  } else if ((s = N0(e.doc, e_selection.from, -1)) == null) {
    return false;
  }
  if (t) {
    let n = e.tr.join(s);
    if (i) {
      n.setSelection(
        nh.create(n.doc, s - e.doc.resolve(s).nodeBefore.nodeSize),
      );
    }
    t(n.scrollIntoView());
  }
  return true;
};
export const _G = (e, t, n) => {
  let r = f(e, n);
  if (!r) {
    return false;
  }
  let i = g(r);
  return !!i && h(e, i, t);
};
export const bh = (e, t) => {
  let e_selection = e.selection;
  let i;
  if (e_selection instanceof nh) {
    if (e_selection.node.isTextblock || !n9(e.doc, e_selection.to)) {
      return false;
    }
    i = e_selection.to;
  } else if ((i = N0(e.doc, e_selection.to, 1)) == null) {
    return false;
  }
  if (t) {
    t(e.tr.join(i).scrollIntoView());
  }
  return true;
};
export const eB = (e, t, n) => {
  let r = l(e, n);
  if (!r) {
    return false;
  }
  let i = p(r);
  return !!i && h(e, i, t);
};
export const hy = (e, t) => {
  let { $from, to } = e.selection;
  let i;
  let s = $from.sharedDepth(to);
  return (
    s != 0 &&
    ((i = $from.before(s)),
    t && t(e.tr.setSelection(nh.create(e.doc, i))),
    true)
  );
};
export const yY = (e, t) => {
  let { $from, $to } = e.selection;
  let o = $from.blockRange($to);
  let s = o && jP(o);
  return s != null && (t && t(e.tr.lift(o, s).scrollIntoView()), true);
};
