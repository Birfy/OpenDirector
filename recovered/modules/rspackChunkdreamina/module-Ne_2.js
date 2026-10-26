import { Wg, jP, n9, oM, zy } from "./module-zxf.js";
import { FK, Ji, u$ } from "./module-le8.js";
export function Sd(e, t = null) {
  return function (n, o) {
    let { $from, $to } = n.selection;
    let a = $from.blockRange($to);
    if (!a) {
      return false;
    }
    let h = o ? n.tr : null;
    return (
      !!((e, t, n, o = null) => {
        let s = false;
        let l = t;
        let doc = t.$from.doc;
        if (
          t.depth >= 2 &&
          t.$from.node(t.depth - 1).type.compatibleContent(n) &&
          t.startIndex == 0
        ) {
          if (t.$from.index(t.depth - 1) == 0) {
            return false;
          }
          let e = doc.resolve(t.start - 2);
          l = new u$(e, e, t.depth);
          if (t.endIndex < t.parent.childCount) {
            t = new u$(t.$from, doc.resolve(t.$to.end(t.depth)), t.depth);
          }
          s = true;
        }
        let h = oM(l, n, o, t);
        return (
          !!h &&
          (e &&
            ((e, t, n, o, s) => {
              let FK_empty = FK.empty;
              for (let e = n.length - 1; e >= 0; e--) {
                FK_empty = FK.from(n[e].type.create(n[e].attrs, FK_empty));
              }
              e.step(
                new Wg(
                  t.start - 2 * !!o,
                  t.end,
                  t.start,
                  t.end,
                  new Ji(FK_empty, 0, 0),
                  n.length,
                  true,
                ),
              );
              let a = 0;
              for (let e = 0; e < n.length; e++) {
                if (n[e].type == s) {
                  a = e + 1;
                }
              }
              let h = n.length - a;
              let c = t.start + n.length - 2 * !!o;
              let t_parent = t.parent;
              for (
                let n = t.startIndex, i = t.endIndex, o = true;
                n < i;
                n++, o = false
              ) {
                if (!o && zy(e.doc, c, h)) {
                  e.split(c, h);
                  c += 2 * h;
                }
                c += t_parent.child(n).nodeSize;
              }
            })(e, t, h, s, n),
          true)
        );
      })(h, a, e, t) && (o && o(h.scrollIntoView()), true)
    );
  };
}
export function T2(e) {
  return function (t, n) {
    let { $from, $to } = t.selection;
    let l = $from.blockRange(
      $to,
      (t) => t.childCount > 0 && t.firstChild.type == e,
    );
    return (
      !!l &&
      (!n ||
        ($from.node(l.depth - 1).type == e
          ? ((e, t, n, o) => {
              let s = e.tr;
              let o_end = o.end;
              let a = o.$to.end(o.depth);
              if (o_end < a) {
                s.step(
                  new Wg(
                    o_end - 1,
                    a,
                    o_end,
                    a,
                    new Ji(FK.from(n.create(null, o.parent.copy())), 1, 0),
                    1,
                    true,
                  ),
                );
                o = new u$(
                  s.doc.resolve(o.$from.pos),
                  s.doc.resolve(a),
                  o.depth,
                );
              }
              let h = jP(o);
              if (h == null) {
                return false;
              }
              s.lift(o, h);
              let c = s.mapping.map(o_end, -1) - 1;
              if (n9(s.doc, c)) {
                s.join(c);
              }
              t(s.scrollIntoView());
              return true;
            })(t, n, e, l)
          : ((e, t, n) => {
              let o = e.tr;
              let n_parent = n.parent;
              for (
                let e = n.end, t = n.endIndex - 1, r = n.startIndex;
                t > r;
                t--
              ) {
                e -= n_parent.child(t).nodeSize;
                o.delete(e - 1, e + 1);
              }
              let l = o.doc.resolve(n.start);
              let l_nodeAfter = l.nodeAfter;
              if (o.mapping.map(n.end) != n.start + l.nodeAfter.nodeSize) {
                return false;
              }
              let h = n.startIndex == 0;
              let c = n.endIndex == n_parent.childCount;
              let d = l.node(-1);
              let p = l.index(-1);
              if (
                !d.canReplace(
                  p + +!h,
                  p + 1,
                  l_nodeAfter.content.append(c ? FK.empty : FK.from(n_parent)),
                )
              ) {
                return false;
              }
              let l_pos = l.pos;
              let u = l_pos + l_nodeAfter.nodeSize;
              o.step(
                new Wg(
                  l_pos - !!h,
                  u + +!!c,
                  l_pos + 1,
                  u - 1,
                  new Ji(
                    (h ? FK.empty : FK.from(n_parent.copy(FK.empty))).append(
                      c ? FK.empty : FK.from(n_parent.copy(FK.empty)),
                    ),
                    +!h,
                    +!c,
                  ),
                  +!h,
                ),
              );
              t(o.scrollIntoView());
              return true;
            })(t, n, l)))
    );
  };
}
export function $B(e) {
  return function (t, n) {
    let { $from, $to } = t.selection;
    let l = $from.blockRange(
      $to,
      (t) => t.childCount > 0 && t.firstChild.type == e,
    );
    if (!l) {
      return false;
    }
    let l_startIndex = l.startIndex;
    if (l_startIndex == 0) {
      return false;
    }
    let l_parent = l.parent;
    let c = l_parent.child(l_startIndex - 1);
    if (c.type != e) {
      return false;
    }
    if (n) {
      let o = c.lastChild && c.lastChild.type == l_parent.type;
      let s = FK.from(o ? e.create() : null);
      let a = new Ji(
        FK.from(e.create(null, FK.from(l_parent.type.create(null, s)))),
        o ? 3 : 1,
        0,
      );
      let d = l.start;
      let p = l.end;
      n(
        t.tr
          .step(new Wg(d - (o ? 3 : 1), p, d, p, a, 1, true))
          .scrollIntoView(),
      );
    }
    return true;
  };
}
