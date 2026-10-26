import i from "Zr";
import l from "le8";
import s from "mV";
import a from "WKV";
import u from "zxf";
let n;
let o;
if (typeof WeakMap !== "undefined") {
  let e = new WeakMap();
  n = (t) => e.get(t);
  o = (t, r) => {
    e.set(t, r);
    return r;
  };
} else {
  let e = [];
  let t = 0;
  n = (t) => {
    for (let r = 0; r < e.length; r += 2) {
      if (e[r] == t) {
        return e[r + 1];
      }
    }
  };
  o = (r, n) => {
    if (t == 10) {
      t = 0;
    }
    e[t++] = r;
    return (e[t++] = n);
  };
}
export var J3 = class {
  constructor(e, t, r, n) {
    this.width = e;
    this.height = t;
    this.map = r;
    this.problems = n;
  }
  findCell(e) {
    for (let t = 0; t < this.map.length; t++) {
      let r = this.map[t];
      if (r != e) {
        continue;
      }
      let left = t % this.width;
      let top = (t / this.width) | 0;
      let right = left + 1;
      let bottom = top + 1;
      for (let e = 1; right < this.width && this.map[t + e] == r; e++) {
        right++;
      }
      for (
        let e = 1;
        bottom < this.height && this.map[t + this.width * e] == r;
        e++
      ) {
        bottom++;
      }
      return {
        left,
        top,
        right,
        bottom,
      };
    }
    throw RangeError(`No cell with offset ${e} found`);
  }
  colCount(e) {
    for (let t = 0; t < this.map.length; t++) {
      if (this.map[t] == e) {
        return t % this.width;
      }
    }
    throw RangeError(`No cell with offset ${e} found`);
  }
  nextCell(e, t, r) {
    let { left, right, top, bottom } = this.findCell(e);
    if (t == "horiz") {
      if (r < 0 ? left == 0 : right == this.width) {
        return null;
      }
      return this.map[top * this.width + (r < 0 ? left - 1 : right)];
    }
    if (r < 0 ? top == 0 : bottom == this.height) {
      return null;
    }
    return this.map[left + this.width * (r < 0 ? top - 1 : bottom)];
  }
  rectBetween(e, t) {
    let { left, right, top, bottom } = this.findCell(e);
    let {
      left: left_1,
      right: right_1,
      top: top_1,
      bottom: bottom_1,
    } = this.findCell(t);
    return {
      left: Math.min(left, left_1),
      top: Math.min(top, top_1),
      right: Math.max(right, right_1),
      bottom: Math.max(bottom, bottom_1),
    };
  }
  cellsInRect(e) {
    let t = [];
    let r = {};
    for (let n = e.top; n < e.bottom; n++) {
      for (let o = e.left; o < e.right; o++) {
        let i = n * this.width + o;
        let l = this.map[i];
        if (!r[l]) {
          r[l] = true;
          if (
            !(
              (o == e.left && o && this.map[i - 1] == l) ||
              (n == e.top && n && this.map[i - this.width] == l)
            )
          ) {
            t.push(l);
          }
        }
      }
    }
    return t;
  }
  positionAt(e, t, r) {
    for (let n = 0, o = 0; ; n++) {
      let i = o + r.child(n).nodeSize;
      if (n == e) {
        let r = t + e * this.width;
        let n = (e + 1) * this.width;
        while (r < n && this.map[r] < o) {
          r++;
        }
        if (r == n) {
          return i - 1;
        }
        return this.map[r];
      }
      o = i;
    }
  }
  static get(e) {
    return (
      n(e) ||
      o(
        e,
        ((e) => {
          if (e.type.spec.tableRole != "table") {
            throw RangeError("Not a table node: " + e.type.name);
          }
          let t = ((e) => {
            let t = -1;
            let r = false;
            for (let n = 0; n < e.childCount; n++) {
              let o = e.child(n);
              let i = 0;
              if (r) {
                for (let t = 0; t < n; t++) {
                  let r = e.child(t);
                  for (let e = 0; e < r.childCount; e++) {
                    let o = r.child(e);
                    if (t + o.attrs.rowspan > n) {
                      i += o.attrs.colspan;
                    }
                  }
                }
              }
              for (let e = 0; e < o.childCount; e++) {
                let t = o.child(e);
                i += t.attrs.colspan;
                if (t.attrs.rowspan > 1) {
                  r = true;
                }
              }
              if (t == -1) {
                t = i;
              } else if (t != i) {
                t = Math.max(t, i);
              }
            }
            return t;
          })(e);
          let e_childCount = e.childCount;
          let n = [];
          let o = 0;
          let i = null;
          let l = [];
          for (let e = 0, o = t * e_childCount; e < o; e++) {
            n[e] = 0;
          }
          for (let s = 0, a = 0; s < e_childCount; s++) {
            let u = e.child(s);
            a++;
            for (let e = 0; ; e++) {
              while (o < n.length && n[o] != 0) {
                o++;
              }
              if (e == u.childCount) {
                break;
              }
              let d = u.child(e);
              let { colspan, rowspan, colwidth } = d.attrs;
              for (let e = 0; e < rowspan; e++) {
                if (e + s >= e_childCount) {
                  (i || (i = [])).push({
                    type: "overlong_rowspan",
                    pos: a,
                    n: rowspan - e,
                  });
                  break;
                }
                let u = o + e * t;
                for (let e = 0; e < colspan; e++) {
                  if (n[u + e] == 0) {
                    n[u + e] = a;
                  } else {
                    (i || (i = [])).push({
                      type: "collision",
                      row: s,
                      pos: a,
                      n: colspan - e,
                    });
                  }
                  let r = colwidth && colwidth[e];
                  if (r) {
                    let n = ((u + e) % t) * 2;
                    let o = l[n];
                    if (o == null || (o != r && l[n + 1] == 1)) {
                      l[n] = r;
                      l[n + 1] = 1;
                    } else if (o == r) {
                      l[n + 1]++;
                    }
                  }
                }
              }
              o += colspan;
              a += d.nodeSize;
            }
            let d = (s + 1) * t;
            let n_1 = 0;
            while (o < d) {
              if (n[o++] == 0) {
                n_1++;
              }
            }
            if (n_1) {
              (i || (i = [])).push({
                type: "missing",
                row: s,
                n: n_1,
              });
            }
            a++;
          }
          if (t === 0 || e_childCount === 0) {
            (i || (i = [])).push({
              type: "zero_sized",
            });
          }
          let s = new J3(t, e_childCount, n, i);
          let a = false;
          for (let e = 0; !a && e < l.length; e += 2) {
            if (l[e] != null && l[e + 1] < e_childCount) {
              a = true;
            }
          }
          if (a) {
            ((e, t, r) => {
              if (!e.problems) {
                e.problems = [];
              }
              let n = {};
              for (let o = 0; o < e.map.length; o++) {
                let i = e.map[o];
                if (n[i]) {
                  continue;
                }
                n[i] = true;
                let l = r.nodeAt(i);
                if (!l) {
                  throw RangeError(`No cell with offset ${i} found`);
                }
                let s = null;
                let a = l.attrs;
                for (let r = 0; r < a.colspan; r++) {
                  let n = t[2 * ((o + r) % e.width)];
                  if (!(n == null || (a.colwidth && a.colwidth[r] == n))) {
                    (s ||
                      (s = ((e) => {
                        if (e.colwidth) {
                          return e.colwidth.slice();
                        }
                        let t = [];
                        for (let r = 0; r < e.colspan; r++) {
                          t.push(0);
                        }
                        return t;
                      })(a)))[r] = n;
                  }
                }
                if (s) {
                  e.problems.unshift({
                    type: "colwidth mismatch",
                    pos: i,
                    colwidth: s,
                  });
                }
              }
            })(s, l, e);
          }
          return s;
        })(e),
      )
    );
  }
};
function c(e) {
  let tableNodeTypes = e.cached.tableNodeTypes;
  if (!tableNodeTypes) {
    for (let r in ((tableNodeTypes = e.cached.tableNodeTypes = {}), e.nodes)) {
      let n = e.nodes[r];
      let o = n.spec.tableRole;
      if (o) {
        tableNodeTypes[o] = n;
      }
    }
  }
  return tableNodeTypes;
}
const p = new i.hs("selectingCells");
export function KW(e) {
  for (let t = e.depth - 1; t > 0; t--) {
    if (e.node(t).type.spec.tableRole == "row") {
      return e.node(0).resolve(e.before(t + 1));
    }
  }
  return null;
}
function f(e) {
  let $head = e.selection.$head;
  for (let e = $head.depth; e > 0; e--) {
    if ($head.node(e).type.spec.tableRole == "row") {
      return true;
    }
  }
  return false;
}
function m(e) {
  let e_selection = e.selection;
  if ("$anchorCell" in e_selection && e_selection.$anchorCell) {
    if (e_selection.$anchorCell.pos > e_selection.$headCell.pos) {
      return e_selection.$anchorCell;
    }
    return e_selection.$headCell;
  }
  if (
    "node" in e_selection &&
    e_selection.node &&
    e_selection.node.type.spec.tableRole == "cell"
  ) {
    return e_selection.$anchor;
  }
  let r =
    KW(e_selection.$head) ||
    ((e) => {
      for (let t = e.nodeAfter, r = e.pos; t; t = t.firstChild, r++) {
        let n = t.type.spec.tableRole;
        if (n == "cell" || n == "header_cell") {
          return e.doc.resolve(r);
        }
      }
      for (let t = e.nodeBefore, r = e.pos; t; t = t.lastChild, r--) {
        let n = t.type.spec.tableRole;
        if (n == "cell" || n == "header_cell") {
          return e.doc.resolve(r - t.nodeSize);
        }
      }
    })(e_selection.$head);
  if (r) {
    return r;
  }
  throw RangeError(`No cell found around position ${e_selection.head}`);
}
function g(e) {
  return e.parent.type.spec.tableRole == "row" && !!e.nodeAfter;
}
function b(e, t) {
  return e.depth == t.depth && e.pos >= t.start(-1) && e.pos <= t.end(-1);
}
function k(e, t, r) {
  let n = e.node(-1);
  let o = J3.get(n);
  let i = e.start(-1);
  let l = o.nextCell(e.pos - i, t, r);
  if (l == null) {
    return null;
  }
  return e.node(0).resolve(i + l);
}
function A(e, t, r = 1) {
  let n = {
    ...e,
    colspan: e.colspan - r,
  };
  if (n.colwidth) {
    n.colwidth = n.colwidth.slice();
    n.colwidth.splice(t, r);
    if (!n.colwidth.some((e) => e > 0)) {
      n.colwidth = null;
    }
  }
  return n;
}
function w(attrs, t, r = 1) {
  let n = {
    ...attrs,
    colspan: attrs.colspan + r,
  };
  if (n.colwidth) {
    n.colwidth = n.colwidth.slice();
    for (let e = 0; e < r; e++) {
      n.colwidth.splice(t, 0, 0);
    }
  }
  return n;
}
export var rn = class e extends i.LN {
  constructor(e, t = e) {
    let r = e.node(-1);
    let n = J3.get(r);
    let o = e.start(-1);
    let l = n.rectBetween(e.pos - o, t.pos - o);
    let s = e.node(0);
    let a = n.cellsInRect(l).filter((e) => e != t.pos - o);
    a.unshift(t.pos - o);
    let u = a.map((e) => {
      let t = r.nodeAt(e);
      if (!t) {
        throw RangeError(`No cell with offset ${e} found`);
      }
      let n = o + e + 1;
      return new i.yn(s.resolve(n), s.resolve(n + t.content.size));
    });
    super(u[0].$from, u[0].$to, u);
    this.$anchorCell = e;
    this.$headCell = t;
  }
  map(t, r) {
    let n = t.resolve(r.map(this.$anchorCell.pos));
    let o = t.resolve(r.map(this.$headCell.pos));
    if (g(n) && g(o) && b(n, o)) {
      let t = this.$anchorCell.node(-1) != n.node(-1);
      if (t && this.isRowSelection()) {
        return e.rowSelection(n, o);
      }
      if (t && this.isColSelection()) {
        return e.colSelection(n, o);
      }
      return new e(n, o);
    }
    return i.U3.between(n, o);
  }
  content() {
    let e = this.$anchorCell.node(-1);
    let t = J3.get(e);
    let r = this.$anchorCell.start(-1);
    let n = t.rectBetween(this.$anchorCell.pos - r, this.$headCell.pos - r);
    let o = {};
    let i = [];
    for (let r = n.top; r < n.bottom; r++) {
      let s = [];
      for (let i = r * t.width + n.left, l = n.left; l < n.right; l++, i++) {
        let r = t.map[i];
        if (o[r]) {
          continue;
        }
        o[r] = true;
        let l = t.findCell(r);
        let a = e.nodeAt(r);
        if (!a) {
          throw RangeError(`No cell with offset ${r} found`);
        }
        let u = n.left - l.left;
        let d = l.right - n.right;
        if (u > 0 || d > 0) {
          let e = a.attrs;
          if (u > 0) {
            e = A(e, 0, u);
          }
          if (d > 0) {
            e = A(e, e.colspan - d, d);
          }
          if (l.left < n.left) {
            if (!(a = a.type.createAndFill(e))) {
              throw RangeError(
                `Could not create cell with attrs ${JSON.stringify(e)}`,
              );
            }
          } else {
            a = a.type.create(e, a.content);
          }
        }
        if (l.top < n.top || l.bottom > n.bottom) {
          let e = {
            ...a.attrs,
            rowspan: Math.min(l.bottom, n.bottom) - Math.max(l.top, n.top),
          };
          a =
            l.top < n.top
              ? a.type.createAndFill(e)
              : a.type.create(e, a.content);
        }
        s.push(a);
      }
      i.push(e.child(r).copy(l.FK.from(s)));
    }
    let s = this.isColSelection() && this.isRowSelection() ? e : i;
    return new l.Ji(l.FK.from(s), 1, 1);
  }
  replace(e, t = l.Ji.empty) {
    let length = e.steps.length;
    let ranges = this.ranges;
    for (let o = 0; o < ranges.length; o++) {
      let { $from, $to } = ranges[o];
      let a = e.mapping.slice(length);
      e.replace(a.map($from.pos), a.map($to.pos), o ? l.Ji.empty : t);
    }
    let o = i.LN.findFrom(
      e.doc.resolve(e.mapping.slice(length).map(this.to)),
      -1,
    );
    if (o) {
      e.setSelection(o);
    }
  }
  replaceWith(e, t) {
    this.replace(e, new l.Ji(l.FK.from(t), 0, 0));
  }
  forEachCell(e) {
    let t = this.$anchorCell.node(-1);
    let r = J3.get(t);
    let n = this.$anchorCell.start(-1);
    let o = r.cellsInRect(
      r.rectBetween(this.$anchorCell.pos - n, this.$headCell.pos - n),
    );
    for (let r = 0; r < o.length; r++) {
      e(t.nodeAt(o[r]), n + o[r]);
    }
  }
  isColSelection() {
    let e = this.$anchorCell.index(-1);
    let t = this.$headCell.index(-1);
    return (
      !(Math.min(e, t) > 0) &&
      Math.max(
        e + this.$anchorCell.nodeAfter.attrs.rowspan,
        t + this.$headCell.nodeAfter.attrs.rowspan,
      ) == this.$headCell.node(-1).childCount
    );
  }
  static colSelection(t, r = t) {
    let n = t.node(-1);
    let o = J3.get(n);
    let i = t.start(-1);
    let l = o.findCell(t.pos - i);
    let s = o.findCell(r.pos - i);
    let a = t.node(0);
    if (l.top <= s.top) {
      if (l.top > 0) {
        t = a.resolve(i + o.map[l.left]);
      }
      if (s.bottom < o.height) {
        r = a.resolve(i + o.map[o.width * (o.height - 1) + s.right - 1]);
      }
    } else {
      if (s.top > 0) {
        r = a.resolve(i + o.map[s.left]);
      }
      if (l.bottom < o.height) {
        t = a.resolve(i + o.map[o.width * (o.height - 1) + l.right - 1]);
      }
    }
    return new e(t, r);
  }
  isRowSelection() {
    let e = this.$anchorCell.node(-1);
    let t = J3.get(e);
    let r = this.$anchorCell.start(-1);
    let n = t.colCount(this.$anchorCell.pos - r);
    let o = t.colCount(this.$headCell.pos - r);
    return (
      !(Math.min(n, o) > 0) &&
      Math.max(
        n + this.$anchorCell.nodeAfter.attrs.colspan,
        o + this.$headCell.nodeAfter.attrs.colspan,
      ) == t.width
    );
  }
  eq(t) {
    return (
      t instanceof e &&
      t.$anchorCell.pos == this.$anchorCell.pos &&
      t.$headCell.pos == this.$headCell.pos
    );
  }
  static rowSelection(t, r = t) {
    let n = t.node(-1);
    let o = J3.get(n);
    let i = t.start(-1);
    let l = o.findCell(t.pos - i);
    let s = o.findCell(r.pos - i);
    let a = t.node(0);
    if (l.left <= s.left) {
      if (l.left > 0) {
        t = a.resolve(i + o.map[l.top * o.width]);
      }
      if (s.right < o.width) {
        r = a.resolve(i + o.map[o.width * (s.top + 1) - 1]);
      }
    } else {
      if (s.left > 0) {
        r = a.resolve(i + o.map[s.top * o.width]);
      }
      if (l.right < o.width) {
        t = a.resolve(i + o.map[o.width * (l.top + 1) - 1]);
      }
    }
    return new e(t, r);
  }
  toJSON() {
    return {
      type: "cell",
      anchor: this.$anchorCell.pos,
      head: this.$headCell.pos,
    };
  }
  static fromJSON(t, r) {
    return new e(t.resolve(r.anchor), t.resolve(r.head));
  }
  static create(t, r, n = r) {
    return new e(t.resolve(r), t.resolve(n));
  }
  getBookmark() {
    return new y(this.$anchorCell.pos, this.$headCell.pos);
  }
};
rn.prototype.visible = false;
i.LN.jsonID("cell", rn);
var y = class e {
  constructor(e, t) {
    this.anchor = e;
    this.head = t;
  }
  map(t) {
    return new e(t.map(this.anchor), t.map(this.head));
  }
  resolve(e) {
    let t = e.resolve(this.anchor);
    let r = e.resolve(this.head);
    if (
      t.parent.type.spec.tableRole == "row" &&
      r.parent.type.spec.tableRole == "row" &&
      t.index() < t.parent.childCount &&
      r.index() < r.parent.childCount &&
      b(t, r)
    ) {
      return new rn(t, r);
    }
    return i.LN.near(r, 1);
  }
};
function decorations(e) {
  if (!(e.selection instanceof rn)) {
    return null;
  }
  let t = [];
  e.selection.forEachCell((e, r) => {
    t.push(
      s.NZ.node(r, r + e.nodeSize, {
        class: "selectedCell",
      }),
    );
  });
  return s.zF.create(e.doc, t);
}
const v = new i.hs("fix-tables");
export function rP(e, t) {
  let r;
  let n = (t, n) => {
    if (t.type.spec.tableRole == "table") {
      r = ((e, t, r, n) => {
        let o;
        let i;
        let l = J3.get(t);
        if (!l.problems) {
          return n;
        }
        if (!n) {
          n = e.tr;
        }
        let s = [];
        for (let e = 0; e < l.height; e++) {
          s.push(0);
        }
        for (let e = 0; e < l.problems.length; e++) {
          let problem = l.problems[e];
          if (problem.type == "collision") {
            let e = t.nodeAt(problem.pos);
            if (!e) {
              continue;
            }
            let i = e.attrs;
            for (let e = 0; e < i.rowspan; e++) {
              s[problem.row + e] += problem.n;
            }
            n.setNodeMarkup(
              n.mapping.map(r + 1 + problem.pos),
              null,
              A(i, i.colspan - problem.n, problem.n),
            );
          } else if (problem.type == "missing") {
            s[problem.row] += problem.n;
          } else if (problem.type == "overlong_rowspan") {
            let e = t.nodeAt(problem.pos);
            if (!e) {
              continue;
            }
            n.setNodeMarkup(n.mapping.map(r + 1 + problem.pos), null, {
              ...e.attrs,
              rowspan: e.attrs.rowspan - problem.n,
            });
          } else if (problem.type == "colwidth mismatch") {
            let e = t.nodeAt(problem.pos);
            if (!e) {
              continue;
            }
            n.setNodeMarkup(n.mapping.map(r + 1 + problem.pos), null, {
              ...e.attrs,
              colwidth: problem.colwidth,
            });
          } else if (problem.type == "zero_sized") {
            let e = n.mapping.map(r);
            n.delete(e, e + t.nodeSize);
          }
        }
        for (let e = 0; e < s.length; e++) {
          if (s[e]) {
            if (o == null) {
              o = e;
            }
            i = e;
          }
        }
        for (let a = 0, u = r + 1; a < l.height; a++) {
          let r = t.child(a);
          let l = u + r.nodeSize;
          let d = s[a];
          if (d > 0) {
            let t = "cell";
            if (r.firstChild) {
              t = r.firstChild.type.spec.tableRole;
            }
            let s = [];
            for (let r = 0; r < d; r++) {
              let r = c(e.schema)[t].createAndFill();
              if (r) {
                s.push(r);
              }
            }
            let p = (a == 0 || o == a - 1) && i == a ? u + 1 : l - 1;
            n.insert(n.mapping.map(p), s);
          }
          u = l;
        }
        return n.setMeta(v, {
          fixTables: true,
        });
      })(e, t, n, r);
    }
  };
  if (t) {
    if (t.doc != e.doc) {
      (function e(t, r, n, o) {
        let t_childCount = t.childCount;
        let r_childCount = r.childCount;
        e: for (let s = 0, a = 0; s < r_childCount; s++) {
          let l = r.child(s);
          for (let e = a, r = Math.min(t_childCount, s + 3); e < r; e++) {
            if (t.child(e) == l) {
              a = e + 1;
              n += l.nodeSize;
              continue e;
            }
          }
          o(l, n);
          if (a < t_childCount && t.child(a).sameMarkup(l)) {
            e(t.child(a), l, n + 1, o);
          } else {
            l.nodesBetween(0, l.content.size, o, n + 1);
          }
          n += l.nodeSize;
        }
      })(t.doc, e.doc, 0, n);
    }
  } else {
    e.doc.descendants(n);
  }
  return r;
}
function E(e) {
  let e_selection = e.selection;
  let r = m(e);
  let table = r.node(-1);
  let tableStart = r.start(-1);
  let map = J3.get(table);
  return {
    ...(e_selection instanceof rn
      ? map.rectBetween(
          e_selection.$anchorCell.pos - tableStart,
          e_selection.$headCell.pos - tableStart,
        )
      : map.findCell(r.pos - tableStart)),
    tableStart,
    map,
    table,
  };
}
function x(e, { map, tableStart, table }, o) {
  let i = o > 0 ? -1 : 0;
  if (
    ((e, t, r) => {
      let header_cell = c(t.type.schema).header_cell;
      for (let o = 0; o < e.height; o++) {
        if (t.nodeAt(e.map[r + o * e.width]).type != header_cell) {
          return false;
        }
      }
      return true;
    })(map, table, o + i)
  ) {
    i = o == 0 || o == map.width ? null : 0;
  }
  for (let l = 0; l < map.height; l++) {
    let s = l * map.width + o;
    if (o > 0 && o < map.width && map.map[s - 1] == map.map[s]) {
      let i = map.map[s];
      let a = table.nodeAt(i);
      e.setNodeMarkup(
        e.mapping.map(tableStart + i),
        null,
        w(a.attrs, o - map.colCount(i)),
      );
      l += a.attrs.rowspan - 1;
    } else {
      let a =
        i == null
          ? c(table.type.schema).cell
          : table.nodeAt(map.map[s + i]).type;
      let u = map.positionAt(l, o, table);
      e.insert(e.mapping.map(tableStart + u), a.createAndFill());
    }
  }
  return e;
}
export function RC(e, t) {
  if (!f(e)) {
    return false;
  }
  if (t) {
    let r = E(e);
    t(x(e.tr, r, r.left));
  }
  return true;
}
export function GU(e, t) {
  if (!f(e)) {
    return false;
  }
  if (t) {
    let r = E(e);
    t(x(e.tr, r, r.right));
  }
  return true;
}
export function gR(e, t) {
  if (!f(e)) {
    return false;
  }
  if (t) {
    let r = E(e);
    let n = e.tr;
    if (r.left == 0 && r.right == r.map.width) {
      return false;
    }
    for (
      let e = r.right - 1;
      !((e, { map, table, tableStart }, o) => {
        let length = e.mapping.maps.length;
        for (let l = 0; l < map.height;) {
          let s = l * map.width + o;
          let a = map.map[s];
          let u = table.nodeAt(a);
          let d = u.attrs;
          if (
            (o > 0 && map.map[s - 1] == a) ||
            (o < map.width - 1 && map.map[s + 1] == a)
          ) {
            e.setNodeMarkup(
              e.mapping.slice(length).map(tableStart + a),
              null,
              A(d, o - map.colCount(a)),
            );
          } else {
            let t = e.mapping.slice(length).map(tableStart + a);
            e.delete(t, t + u.nodeSize);
          }
          l += d.rowspan;
        }
      })(n, r, e),
        e != r.left;
      e--
    ) {
      let e = r.tableStart ? n.doc.nodeAt(r.tableStart - 1) : n.doc;
      if (!e) {
        throw RangeError("No table found");
      }
      r.table = e;
      r.map = J3.get(e);
    }
    t(n);
  }
  return true;
}
function S(e, { map, tableStart, table }, o) {
  let i;
  let l = tableStart;
  for (let e = 0; e < o; e++) {
    l += table.child(e).nodeSize;
  }
  let s = [];
  let a = o > 0 ? -1 : 0;
  if (
    ((e, t, r) => {
      let n;
      let header_cell = c(t.type.schema).header_cell;
      for (let i = 0; i < e.width; i++) {
        if (
          ((n = t.nodeAt(e.map[i + r * e.width])) == null
            ? undefined
            : n.type) != header_cell
        ) {
          return false;
        }
      }
      return true;
    })(map, table, o + a)
  ) {
    a = o == 0 || o == map.height ? null : 0;
  }
  for (let l = 0, u = map.width * o; l < map.width; l++, u++) {
    if (o > 0 && o < map.height && map.map[u] == map.map[u - map.width]) {
      let o = map.map[u];
      let i = table.nodeAt(o).attrs;
      e.setNodeMarkup(tableStart + o, null, {
        ...i,
        rowspan: i.rowspan + 1,
      });
      l += i.colspan - 1;
    } else {
      let e =
        a == null
          ? c(table.type.schema).cell
          : (i = table.nodeAt(map.map[u + a * map.width])) == null
            ? undefined
            : i.type;
      let r = e == null ? undefined : e.createAndFill();
      if (r) {
        s.push(r);
      }
    }
  }
  e.insert(l, c(table.type.schema).row.create(null, s));
  return e;
}
export function JD(e, t) {
  if (!f(e)) {
    return false;
  }
  if (t) {
    let r = E(e);
    t(S(e.tr, r, r.top));
  }
  return true;
}
export function gC(e, t) {
  if (!f(e)) {
    return false;
  }
  if (t) {
    let r = E(e);
    t(S(e.tr, r, r.bottom));
  }
  return true;
}
export function aR(e, t) {
  if (!f(e)) {
    return false;
  }
  if (t) {
    let r = E(e);
    let n = e.tr;
    if (r.top == 0 && r.bottom == r.map.height) {
      return false;
    }
    for (
      let e = r.bottom - 1;
      !((e, { map, table, tableStart }, o) => {
        let i = 0;
        for (let e = 0; e < o; e++) {
          i += table.child(e).nodeSize;
        }
        let l = i + table.child(o).nodeSize;
        let length = e.mapping.maps.length;
        e.delete(i + tableStart, l + tableStart);
        let a = new Set();
        for (let i = 0, l = o * map.width; i < map.width; i++, l++) {
          let u = map.map[l];
          if (!a.has(u)) {
            a.add(u);
            if (o > 0 && u == map.map[l - map.width]) {
              let t = table.nodeAt(u).attrs;
              e.setNodeMarkup(
                e.mapping.slice(length).map(u + tableStart),
                null,
                {
                  ...t,
                  rowspan: t.rowspan - 1,
                },
              );
              i += t.colspan - 1;
            } else if (o < map.height && u == map.map[l + map.width]) {
              let l = table.nodeAt(u);
              let a = l.attrs;
              let d = l.type.create(
                {
                  ...a,
                  rowspan: l.attrs.rowspan - 1,
                },
                l.content,
              );
              let c = map.positionAt(o + 1, i, table);
              e.insert(e.mapping.slice(length).map(tableStart + c), d);
              i += a.colspan - 1;
            }
          }
        }
      })(n, r, e),
        e != r.top;
      e--
    ) {
      let e = r.tableStart ? n.doc.nodeAt(r.tableStart - 1) : n.doc;
      if (!e) {
        throw RangeError("No table found");
      }
      r.table = e;
      r.map = J3.get(r.table);
    }
    t(n);
  }
  return true;
}
function O(e) {
  let e_content = e.content;
  return (
    e_content.childCount == 1 &&
    e_content.child(0).isTextblock &&
    e_content.child(0).childCount == 0
  );
}
export function w7(e, t) {
  let e_selection = e.selection;
  if (
    !(e_selection instanceof rn) ||
    e_selection.$anchorCell.pos == e_selection.$headCell.pos
  ) {
    return false;
  }
  let n = E(e);
  let { map } = n;
  if (
    (({ width, height, map }, n) => {
      let o = n.top * width + n.left;
      let i = o;
      let l = (n.bottom - 1) * width + n.left;
      let s = o + (n.right - n.left - 1);
      for (let t = n.top; t < n.bottom; t++) {
        if (
          (n.left > 0 && map[i] == map[i - 1]) ||
          (n.right < width && map[s] == map[s + 1])
        ) {
          return true;
        }
        i += width;
        s += width;
      }
      for (let i = n.left; i < n.right; i++) {
        if (
          (n.top > 0 && map[o] == map[o - width]) ||
          (n.bottom < height && map[l] == map[l + width])
        ) {
          return true;
        }
        o++;
        l++;
      }
      return false;
    })(map, n)
  ) {
    return false;
  }
  if (t) {
    let r;
    let i;
    let s = e.tr;
    let a = {};
    let u = l.FK.empty;
    for (let e = n.top; e < n.bottom; e++) {
      for (let t = n.left; t < n.right; t++) {
        let l = map.map[e * map.width + t];
        let d = n.table.nodeAt(l);
        if (!a[l] && d) {
          a[l] = true;
          if (r == null) {
            r = l;
            i = d;
          } else {
            if (!O(d)) {
              u = u.append(d.content);
            }
            let e = s.mapping.map(l + n.tableStart);
            s.delete(e, e + d.nodeSize);
          }
        }
      }
    }
    if (r == null || i == null) {
      return true;
    }
    s.setNodeMarkup(r + n.tableStart, null, {
      ...w(i.attrs, i.attrs.colspan, n.right - n.left - i.attrs.colspan),
      rowspan: n.bottom - n.top,
    });
    if (u.size) {
      let e = r + 1 + i.content.size;
      let t = O(i) ? r + 1 : e;
      s.replaceWith(t + n.tableStart, e + n.tableStart, u);
    }
    s.setSelection(new rn(s.doc.resolve(r + n.tableStart)));
    t(s);
  }
  return true;
}
export function L0(e, t) {
  let r;
  let n = c(e.schema);
  return ((r = ({ node }) => n[node.type.spec.tableRole]),
  (e, t) => {
    var n;
    let node;
    let i;
    let e_selection = e.selection;
    if (e_selection instanceof rn) {
      if (e_selection.$anchorCell.pos != e_selection.$headCell.pos) {
        return false;
      }
      node = e_selection.$anchorCell.nodeAfter;
      i = e_selection.$anchorCell.pos;
    } else {
      if (
        !(node = ((e) => {
          for (let t = e.depth; t > 0; t--) {
            let r = e.node(t).type.spec.tableRole;
            if (r === "cell" || r === "header_cell") {
              return e.node(t);
            }
          }
          return null;
        })(e_selection.$from))
      ) {
        return false;
      }
      i = (n = KW(e_selection.$from)) == null ? undefined : n.pos;
    }
    if (
      node == null ||
      i == null ||
      (node.attrs.colspan == 1 && node.attrs.rowspan == 1)
    ) {
      return false;
    }
    if (t) {
      let n;
      let s = node.attrs;
      let a = [];
      let u = s.colwidth;
      if (s.rowspan > 1) {
        s = {
          ...s,
          rowspan: 1,
        };
      }
      if (s.colspan > 1) {
        s = {
          ...s,
          colspan: 1,
        };
      }
      let d = E(e);
      let c = e.tr;
      for (let e = 0; e < d.right - d.left; e++) {
        a.push(
          u
            ? {
                ...s,
                colwidth: u && u[e] ? [u[e]] : null,
              }
            : s,
        );
      }
      for (let e = d.top; e < d.bottom; e++) {
        let t = d.map.positionAt(e, d.left, d.table);
        if (e == d.top) {
          t += node.nodeSize;
        }
        for (let col = d.left, l = 0; col < d.right; col++, l++) {
          if (col != d.left || e != d.top) {
            c.insert(
              (n = c.mapping.map(t + d.tableStart, 1)),
              r({
                node,
                row: e,
                col,
              }).createAndFill(a[l]),
            );
          }
        }
      }
      c.setNodeMarkup(
        i,
        r({
          node,
          row: d.top,
          col: d.left,
        }),
        a[0],
      );
      if (e_selection instanceof rn) {
        c.setSelection(
          new rn(
            c.doc.resolve(e_selection.$anchorCell.pos),
            n ? c.doc.resolve(n) : undefined,
          ),
        );
      }
      t(c);
    }
    return true;
  })(e, t);
}
export function i4(e, t) {
  return function (r, n) {
    if (!f(r)) {
      return false;
    }
    let o = m(r);
    if (o.nodeAfter.attrs[e] === t) {
      return false;
    }
    if (n) {
      let i = r.tr;
      if (r.selection instanceof rn) {
        r.selection.forEachCell((r, n) => {
          if (r.attrs[e] !== t) {
            i.setNodeMarkup(n, null, {
              ...r.attrs,
              [e]: t,
            });
          }
        });
      } else {
        i.setNodeMarkup(o.pos, null, {
          ...o.nodeAfter.attrs,
          [e]: t,
        });
      }
      n(i);
    }
    return true;
  };
}
function z(e, t, r) {
  let n = t.map.cellsInRect({
    left: 0,
    top: 0,
    right: e == "row" ? t.map.width : 1,
    bottom: e == "column" ? t.map.height : 1,
  });
  for (let e = 0; e < n.length; e++) {
    let o = t.table.nodeAt(n[e]);
    if (o && o.type !== r.header_cell) {
      return false;
    }
  }
  return true;
}
export function iS(e, t) {
  if (
    (t = t || {
      useDeprecatedLogic: false,
    }).useDeprecatedLogic
  ) {
    return function (t, r) {
      if (!f(t)) {
        return false;
      }
      if (r) {
        let n = c(t.schema);
        let o = E(t);
        let i = t.tr;
        let l = o.map.cellsInRect(
          e == "column"
            ? {
                left: o.left,
                top: 0,
                right: o.right,
                bottom: o.map.height,
              }
            : e == "row"
              ? {
                  left: 0,
                  top: o.top,
                  right: o.map.width,
                  bottom: o.bottom,
                }
              : o,
        );
        let s = l.map((e) => o.table.nodeAt(e));
        for (let e = 0; e < l.length; e++) {
          if (s[e].type == n.header_cell) {
            i.setNodeMarkup(o.tableStart + l[e], n.cell, s[e].attrs);
          }
        }
        if (i.steps.length == 0) {
          for (let e = 0; e < l.length; e++) {
            i.setNodeMarkup(o.tableStart + l[e], n.header_cell, s[e].attrs);
          }
        }
        r(i);
      }
      return true;
    };
  }
  return function (t, r) {
    if (!f(t)) {
      return false;
    }
    if (r) {
      let n = c(t.schema);
      let o = E(t);
      let i = t.tr;
      let l = z("row", o, n);
      let s = z("column", o, n);
      let a = +!!(e === "column" ? l : e === "row" && s);
      let u =
        e == "column"
          ? {
              left: 0,
              top: a,
              right: 1,
              bottom: o.map.height,
            }
          : e == "row"
            ? {
                left: a,
                top: 0,
                right: o.map.width,
                bottom: 1,
              }
            : o;
      let d =
        e == "column"
          ? s
            ? n.cell
            : n.header_cell
          : e == "row"
            ? l
              ? n.cell
              : n.header_cell
            : n.cell;
      o.map.cellsInRect(u).forEach((e) => {
        let t = e + o.tableStart;
        let r = i.doc.nodeAt(t);
        if (r) {
          i.setNodeMarkup(t, d, r.attrs);
        }
      });
      r(i);
    }
    return true;
  };
}
iS("row", {
  useDeprecatedLogic: true,
});
iS("column", {
  useDeprecatedLogic: true,
});
export var _G = iS("cell", {
  useDeprecatedLogic: true,
});
export function D8(e) {
  return function (t, r) {
    if (!f(t)) {
      return false;
    }
    let n = ((e, t) => {
      if (t < 0) {
        let t = e.nodeBefore;
        if (t) {
          return e.pos - t.nodeSize;
        }
        for (let t = e.index(-1) - 1, r = e.before(); t >= 0; t--) {
          let n = e.node(-1).child(t);
          let o = n.lastChild;
          if (o) {
            return r - 1 - o.nodeSize;
          }
          r -= n.nodeSize;
        }
      } else {
        if (e.index() < e.parent.childCount - 1) {
          return e.pos + e.nodeAfter.nodeSize;
        }
        let t = e.node(-1);
        for (let r = e.indexAfter(-1), n = e.after(); r < t.childCount; r++) {
          let e = t.child(r);
          if (e.childCount) {
            return n + 1;
          }
          n += e.nodeSize;
        }
      }
      return null;
    })(m(t), e);
    if (n == null) {
      return false;
    }
    if (r) {
      let e = t.doc.resolve(n);
      r(
        t.tr
          .setSelection(
            i.U3.between(e, e.node(0).resolve(e.pos + e.nodeAfter.nodeSize)),
          )
          .scrollIntoView(),
      );
    }
    return true;
  };
}
export function kG(e, t) {
  let $anchor = e.selection.$anchor;
  for (let n = $anchor.depth; n > 0; n--) {
    if ($anchor.node(n).type.spec.tableRole == "table") {
      if (t) {
        t(e.tr.delete($anchor.before(n), $anchor.after(n)).scrollIntoView());
      }
      return true;
    }
  }
  return false;
}
function K(e, t) {
  let e_selection = e.selection;
  if (!(e_selection instanceof rn)) {
    return false;
  }
  if (t) {
    let n = e.tr;
    let o = c(e.schema).cell.createAndFill().content;
    e_selection.forEachCell((e, t) => {
      if (!e.content.eq(o)) {
        n.replace(
          n.mapping.map(t + 1),
          n.mapping.map(t + e.nodeSize - 1),
          new l.Ji(o, 0, 0),
        );
      }
    });
    if (n.docChanged) {
      t(n);
    }
  }
  return true;
}
function U(e, t) {
  let r = e.createAndFill();
  return new u.dL(r).replace(0, r.content.size, t).doc;
}
function W(e, t, r, n, o, i, l, s) {
  if (l == 0 || l == t.height) {
    return false;
  }
  let a = false;
  for (let u = o; u < i; u++) {
    let o = l * t.width + u;
    let i = t.map[o];
    if (t.map[o - t.width] == i) {
      a = true;
      let o = r.nodeAt(i);
      let { top, left } = t.findCell(i);
      e.setNodeMarkup(e.mapping.slice(s).map(i + n), null, {
        ...o.attrs,
        rowspan: l - top,
      });
      e.insert(
        e.mapping.slice(s).map(t.positionAt(l, left, r)),
        o.type.createAndFill({
          ...o.attrs,
          rowspan: top + o.attrs.rowspan - l,
        }),
      );
      u += o.attrs.colspan - 1;
    }
  }
  return a;
}
function G(e, t, r, n, top, i, l, s) {
  if (l == 0 || l == t.width) {
    return false;
  }
  let a = false;
  for (let u = top; u < i; u++) {
    let o = u * t.width + l;
    let i = t.map[o];
    if (t.map[o - 1] == i) {
      a = true;
      let o = r.nodeAt(i);
      let d = t.colCount(i);
      let c = e.mapping.slice(s).map(i + n);
      e.setNodeMarkup(c, null, A(o.attrs, l - d, o.attrs.colspan - (l - d)));
      e.insert(c + o.nodeSize, o.type.createAndFill(A(o.attrs, 0, l - d)));
      u += o.attrs.rowspan - 1;
    }
  }
  return a;
}
function J(state, dispatch, r, n, o) {
  let i = r ? state.doc.nodeAt(r - 1) : state.doc;
  if (!i) {
    throw Error("No table found");
  }
  let s = J3.get(i);
  let { top, left } = n;
  let p = left + o.width;
  let h = top + o.height;
  let f = state.tr;
  let m = 0;
  function g() {
    if (!(i = r ? f.doc.nodeAt(r - 1) : f.doc)) {
      throw Error("No table found");
    }
    s = J3.get(i);
    m = f.mapping.maps.length;
  }
  if (
    ((e, t, r, n, o, i) => {
      let s;
      let a;
      let u = c(e.doc.type.schema);
      if (o > t.width) {
        for (let i = 0, l = 0; i < t.height; i++) {
          let d;
          let c = r.child(i);
          l += c.nodeSize;
          let p = [];
          d =
            c.lastChild == null || c.lastChild.type == u.cell
              ? s || (s = u.cell.createAndFill())
              : a || (a = u.header_cell.createAndFill());
          for (let e = t.width; e < o; e++) {
            p.push(d);
          }
          e.insert(e.mapping.slice(0).map(l - 1 + n), p);
        }
      }
      if (i > t.height) {
        let d = [];
        for (
          let e = 0, n = (t.height - 1) * t.width;
          e < Math.max(t.width, o);
          e++
        ) {
          let o =
            !(e >= t.width) && r.nodeAt(t.map[n + e]).type == u.header_cell;
          d.push(
            o
              ? a || (a = u.header_cell.createAndFill())
              : s || (s = u.cell.createAndFill()),
          );
        }
        let c = u.row.create(null, l.FK.from(d));
        let p = [];
        for (let e = t.height; e < i; e++) {
          p.push(c);
        }
        e.insert(e.mapping.slice(0).map(n + r.nodeSize - 2), p);
      }
      return !!(s || a);
    })(f, s, i, r, p, h)
  ) {
    g();
  }
  if (W(f, s, i, r, left, p, top, m)) {
    g();
  }
  if (W(f, s, i, r, left, p, h, m)) {
    g();
  }
  if (G(f, s, i, r, top, h, left, m)) {
    g();
  }
  if (G(f, s, i, r, top, h, p, m)) {
    g();
  }
  for (let e = top; e < h; e++) {
    let t = s.positionAt(e, left, i);
    let n = s.positionAt(e, p, i);
    f.replace(
      f.mapping.slice(m).map(t + r),
      f.mapping.slice(m).map(n + r),
      new l.Ji(o.rows[e - top], 0, 0),
    );
  }
  g();
  f.setSelection(
    new rn(
      f.doc.resolve(r + s.positionAt(top, left, i)),
      f.doc.resolve(r + s.positionAt(h - 1, p - 1, i)),
    ),
  );
  dispatch(f);
}
const handleKeyDown = a.K({
  ArrowLeft: Z("horiz", -1),
  ArrowRight: Z("horiz", 1),
  ArrowUp: Z("vert", -1),
  ArrowDown: Z("vert", 1),
  "Shift-ArrowLeft": X("horiz", -1),
  "Shift-ArrowRight": X("horiz", 1),
  "Shift-ArrowUp": X("vert", -1),
  "Shift-ArrowDown": X("vert", 1),
  Backspace: K,
  "Mod-Backspace": K,
  Delete: K,
  "Mod-Delete": K,
});
function Y(e, t, r) {
  return (
    !r.eq(e.selection) && (t && t(e.tr.setSelection(r).scrollIntoView()), true)
  );
}
function Z(e, t) {
  return (r, n, o) => {
    if (!o) {
      return false;
    }
    let r_selection = r.selection;
    if (r_selection instanceof rn) {
      return Y(r, n, i.LN.near(r_selection.$headCell, t));
    }
    if (e != "horiz" && !r_selection.empty) {
      return false;
    }
    let s = er(o, e, t);
    if (s == null) {
      return false;
    }
    if (e == "horiz") {
      return Y(r, n, i.LN.near(r.doc.resolve(r_selection.head + t), t));
    }
    {
      let o;
      let l = r.doc.resolve(s);
      let a = k(l, e, t);
      o = a
        ? i.LN.near(a, 1)
        : t < 0
          ? i.LN.near(r.doc.resolve(l.before(-1)), -1)
          : i.LN.near(r.doc.resolve(l.after(-1)), 1);
      return Y(r, n, o);
    }
  };
}
function X(e, t) {
  return (r, n, o) => {
    let i;
    if (!o) {
      return false;
    }
    let r_selection = r.selection;
    if (r_selection instanceof rn) {
      i = r_selection;
    } else {
      let n = er(o, e, t);
      if (n == null) {
        return false;
      }
      i = new rn(r.doc.resolve(n));
    }
    let s = k(i.$headCell, e, t);
    return !!s && Y(r, n, new rn(i.$anchorCell, s));
  };
}
function handleTripleClick(e, t) {
  let r = KW(e.state.doc.resolve(t));
  return !!r && (e.dispatch(e.state.tr.setSelection(new rn(r))), true);
}
function handlePaste(e, t, r) {
  if (!f(e.state)) {
    return false;
  }
  let n = ((e) => {
    if (!e.size) {
      return null;
    }
    let { content, openStart, openEnd } = e;
    while (
      content.childCount == 1 &&
      ((openStart > 0 && openEnd > 0) ||
        content.child(0).type.spec.tableRole == "table")
    ) {
      openStart--;
      openEnd--;
      content = content.child(0).content;
    }
    let o = content.child(0);
    let tableRole = o.type.spec.tableRole;
    let schema = o.type.schema;
    let a = [];
    if (tableRole == "row") {
      for (let e = 0; e < content.childCount; e++) {
        let o = content.child(e).content;
        let i = e ? 0 : Math.max(0, openStart - 1);
        let u = e < content.childCount - 1 ? 0 : Math.max(0, openEnd - 1);
        if (i || u) {
          o = U(c(schema).row, new l.Ji(o, i, u)).content;
        }
        a.push(o);
      }
    } else {
      if (tableRole != "cell" && tableRole != "header_cell") {
        return null;
      }
      a.push(
        openStart || openEnd
          ? U(c(schema).row, new l.Ji(content, openStart, openEnd)).content
          : content,
      );
    }
    return ((e, rows) => {
      let r = [];
      for (let e = 0; e < rows.length; e++) {
        let row = rows[e];
        for (let t = row.childCount - 1; t >= 0; t--) {
          let { rowspan, colspan } = row.child(t).attrs;
          for (let t = e; t < e + rowspan; t++) {
            r[t] = (r[t] || 0) + colspan;
          }
        }
      }
      let width = 0;
      for (let e = 0; e < r.length; e++) {
        width = Math.max(width, r[e]);
      }
      for (let o = 0; o < r.length; o++) {
        if (o >= rows.length) {
          rows.push(l.FK.empty);
        }
        if (r[o] < width) {
          let i = c(e).cell.createAndFill();
          let s = [];
          for (let e = r[o]; e < width; e++) {
            s.push(i);
          }
          rows[o] = rows[o].append(l.FK.from(s));
        }
      }
      return {
        height: rows.length,
        width,
        rows,
      };
    })(schema, a);
  })(r);
  let selection = e.state.selection;
  if (selection instanceof rn) {
    if (!n) {
      n = {
        width: 1,
        height: 1,
        rows: [l.FK.from(U(c(e.state.schema).cell, r))],
      };
    }
    let t = selection.$anchorCell.node(-1);
    let i = selection.$anchorCell.start(-1);
    let s = J3.get(t).rectBetween(
      selection.$anchorCell.pos - i,
      selection.$headCell.pos - i,
    );
    n = (({ width, height, rows }, n, o) => {
      if (width != n) {
        let t = [];
        let o = [];
        for (let e = 0; e < rows.length; e++) {
          let row = rows[e];
          let s = [];
          for (let r = t[e] || 0, o = 0; r < n; o++) {
            let l = row.child(o % row.childCount);
            if (r + l.attrs.colspan > n) {
              l = l.type.createChecked(
                A(l.attrs, l.attrs.colspan, r + l.attrs.colspan - n),
                l.content,
              );
            }
            s.push(l);
            r += l.attrs.colspan;
            for (let r = 1; r < l.attrs.rowspan; r++) {
              t[e + r] = (t[e + r] || 0) + l.attrs.colspan;
            }
          }
          o.push(l.FK.from(s));
        }
        rows = o;
        width = n;
      }
      if (height != o) {
        let e = [];
        for (let n = 0, i = 0; n < o; n++, i++) {
          let s = [];
          let a = rows[i % height];
          for (let e = 0; e < a.childCount; e++) {
            let t = a.child(e);
            if (n + t.attrs.rowspan > o) {
              t = t.type.create(
                {
                  ...t.attrs,
                  rowspan: Math.max(1, o - t.attrs.rowspan),
                },
                t.content,
              );
            }
            s.push(t);
          }
          e.push(l.FK.from(s));
        }
        rows = e;
        height = o;
      }
      return {
        width,
        height,
        rows,
      };
    })(n, s.right - s.left, s.bottom - s.top);
    J(e.state, e.dispatch, i, s, n);
    return true;
  }
  if (!n) {
    return false;
  }
  {
    let t = m(e.state);
    let r = t.start(-1);
    J(e.state, e.dispatch, r, J3.get(t.node(-1)).findCell(t.pos - r), n);
    return true;
  }
}
function mousedown(e, t) {
  let r;
  let n;
  if (t.ctrlKey || t.metaKey) {
    return;
  }
  let o = en(e, t.target);
  if (t.shiftKey && e.state.selection instanceof rn) {
    i(e.state.selection.$anchorCell, t);
    t.preventDefault();
  } else if (
    t.shiftKey &&
    o &&
    (n = KW(e.state.selection.$anchor)) != null &&
    ((r = eo(e, t)) == null ? undefined : r.pos) != n.pos
  ) {
    i(n, t);
    t.preventDefault();
  } else if (!o) {
    return;
  }
  function i(t, r) {
    let n = eo(e, r);
    let o = p.getState(e.state) == null;
    if (!n || !b(t, n)) {
      if (!o) {
        return;
      } else {
        n = t;
      }
    }
    let i = new rn(t, n);
    if (o || !e.state.selection.eq(i)) {
      let r = e.state.tr.setSelection(i);
      if (o) {
        r.setMeta(p, t.pos);
      }
      e.dispatch(r);
    }
  }
  function l() {
    e.root.removeEventListener("mouseup", l);
    e.root.removeEventListener("dragstart", l);
    e.root.removeEventListener("mousemove", s);
    if (p.getState(e.state) != null) {
      e.dispatch(e.state.tr.setMeta(p, -1));
    }
  }
  function s(r) {
    let n;
    let s = p.getState(e.state);
    if (s != null) {
      n = e.state.doc.resolve(s);
    } else if (en(e, r.target) != o && !(n = eo(e, t))) {
      return l();
    }
    if (n) {
      i(n, r);
    }
  }
  e.root.addEventListener("mouseup", l);
  e.root.addEventListener("dragstart", l);
  e.root.addEventListener("mousemove", s);
}
function er(e, t, r) {
  if (!(e.state.selection instanceof i.U3)) {
    return null;
  }
  let { $head } = e.state.selection;
  for (let o = $head.depth - 1; o >= 0; o--) {
    let i = $head.node(o);
    if (
      (r < 0 ? $head.index(o) : $head.indexAfter(o)) !=
      (r < 0 ? 0 : i.childCount)
    ) {
      break;
    }
    if (
      i.type.spec.tableRole == "cell" ||
      i.type.spec.tableRole == "header_cell"
    ) {
      let i = $head.before(o);
      let l = t == "vert" ? (r > 0 ? "down" : "up") : r > 0 ? "right" : "left";
      if (e.endOfTextblock(l)) {
        return i;
      }
      return null;
    }
  }
  return null;
}
function en(e, t) {
  for (; t && t != e.dom; t = t.parentNode) {
    if (t.nodeName == "TD" || t.nodeName == "TH") {
      return t;
    }
  }
  return null;
}
function eo(e, t) {
  let r = e.posAtCoords({
    left: t.clientX,
    top: t.clientY,
  });
  if (r && r) {
    return KW(e.state.doc.resolve(r.pos));
  }
  return null;
}
class ei {
  constructor(e, t) {
    this.node = e;
    this.defaultCellMinWidth = t;
    this.dom = document.createElement("div");
    this.dom.className = "tableWrapper";
    this.table = this.dom.appendChild(document.createElement("table"));
    this.table.style.setProperty("--default-cell-min-width", `${t}px`);
    this.colgroup = this.table.appendChild(document.createElement("colgroup"));
    el(e, this.colgroup, this.table, t);
    this.contentDOM = this.table.appendChild(document.createElement("tbody"));
  }
  update(e) {
    return (
      e.type == this.node.type &&
      ((this.node = e),
      el(e, this.colgroup, this.table, this.defaultCellMinWidth),
      true)
    );
  }
  ignoreMutation(e) {
    return (
      e.type == "attributes" &&
      (e.target == this.table || this.colgroup.contains(e.target))
    );
  }
}
function el(e, t, r, n, o, i) {
  let l;
  let s = 0;
  let a = true;
  let t_firstChild = t.firstChild;
  let e_firstChild = e.firstChild;
  if (e_firstChild) {
    for (let e = 0, r = 0; e < e_firstChild.childCount; e++) {
      let { colspan, colwidth } = e_firstChild.child(e).attrs;
      for (let e = 0; e < colspan; e++, r++) {
        let l = o == r ? i : colwidth && colwidth[e];
        let d = l ? l + "px" : "";
        s += l || n;
        if (!l) {
          a = false;
        }
        if (t_firstChild) {
          if (t_firstChild.style.width != d) {
            t_firstChild.style.width = d;
          }
          t_firstChild = t_firstChild.nextSibling;
        } else {
          let e = document.createElement("col");
          e.style.width = d;
          t.appendChild(e);
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
    if (a) {
      r.style.width = s + "px";
      r.style.minWidth = "";
    } else {
      r.style.width = "";
      r.style.minWidth = s + "px";
    }
  }
}
export var QQ = new i.hs("tableColumnResizing");
export function AL({
  handleWidth = 5,
  cellMinWidth = 25,
  defaultCellMinWidth = 100,
  View = ei,
  lastColumnResizable = true,
} = {}) {
  let l = new i.k_({
    key: QQ,
    state: {
      init(e, t) {
        let o;
        let i;
        let s =
          (i = (o = l.spec) == null ? undefined : o.props) == null
            ? undefined
            : i.nodeViews;
        let name = c(t.schema).table.name;
        if (View && s) {
          s[name] = (e, t) => new View(e, defaultCellMinWidth, t);
        }
        return new WX(-1, false);
      },
      apply: (e, t) => t.apply(e),
    },
    props: {
      attributes: (e) => {
        let t = QQ.getState(e);
        if (t && t.activeHandle > -1) {
          return {
            class: "resize-cursor",
          };
        }
        return {};
      },
      handleDOMEvents: {
        mousemove: (t, r) => {
          ((e, t, r, n) => {
            if (!e.editable) {
              return;
            }
            let o = QQ.getState(e.state);
            if (o && !o.dragging) {
              let i = ((e) => {
                while (e && e.nodeName != "TD" && e.nodeName != "TH") {
                  e =
                    e.classList && e.classList.contains("ProseMirror")
                      ? null
                      : e.parentNode;
                }
                return e;
              })(t.target);
              let l = -1;
              if (i) {
                let { left, right } = i.getBoundingClientRect();
                if (t.clientX - left <= r) {
                  l = ed(e, t, "left", r);
                } else if (right - t.clientX <= r) {
                  l = ed(e, t, "right", r);
                }
              }
              if (l != o.activeHandle) {
                if (!n && l !== -1) {
                  let t = e.state.doc.resolve(l);
                  let r = t.node(-1);
                  let n = J3.get(r);
                  let o = t.start(-1);
                  if (
                    n.colCount(t.pos - o) + t.nodeAfter.attrs.colspan - 1 ==
                    n.width - 1
                  ) {
                    return;
                  }
                }
                ep(e, l);
              }
            }
          })(t, r, handleWidth, lastColumnResizable);
        },
        mouseleave: (e) => {
          ((e) => {
            if (!e.editable) {
              return;
            }
            let t = QQ.getState(e.state);
            if (t && t.activeHandle > -1 && !t.dragging) {
              ep(e, -1);
            }
          })(e);
        },
        mousedown: (e, n) => {
          ((e, t, r, n) => {
            let o;
            if (!e.editable) {
              return;
            }
            let i = (o = e.dom.ownerDocument.defaultView) != null ? o : window;
            let l = QQ.getState(e.state);
            if (!l || l.activeHandle == -1 || l.dragging) {
              return;
            }
            let s = e.state.doc.nodeAt(l.activeHandle);
            let startWidth = ((e, t, { colspan, colwidth }) => {
              let o = colwidth && colwidth[colwidth.length - 1];
              if (o) {
                return o;
              }
              let i = e.domAtPos(t);
              let offsetWidth = i.node.childNodes[i.offset].offsetWidth;
              let s = colspan;
              if (colwidth) {
                for (let e = 0; e < colspan; e++) {
                  if (colwidth[e]) {
                    offsetWidth -= colwidth[e];
                    s--;
                  }
                }
              }
              return offsetWidth / s;
            })(e, l.activeHandle, s.attrs);
            function u(t) {
              i.removeEventListener("mouseup", u);
              i.removeEventListener("mousemove", c);
              let n = QQ.getState(e.state);
              if (n == null ? undefined : n.dragging) {
                ((e, t, r) => {
                  let n = e.state.doc.resolve(t);
                  let o = n.node(-1);
                  let i = J3.get(o);
                  let l = n.start(-1);
                  let s = i.colCount(n.pos - l) + n.nodeAfter.attrs.colspan - 1;
                  let a = e.state.tr;
                  for (let e = 0; e < i.height; e++) {
                    let t = e * i.width + s;
                    if (e && i.map[t] == i.map[t - i.width]) {
                      continue;
                    }
                    let n = i.map[t];
                    let u = o.nodeAt(n).attrs;
                    let d = u.colspan == 1 ? 0 : s - i.colCount(n);
                    if (u.colwidth && u.colwidth[d] == r) {
                      continue;
                    }
                    let c = u.colwidth
                      ? u.colwidth.slice()
                      : Array(u.colspan).fill(0);
                    c[d] = r;
                    a.setNodeMarkup(l + n, null, {
                      ...u,
                      colwidth: c,
                    });
                  }
                  if (a.docChanged) {
                    e.dispatch(a);
                  }
                })(e, n.activeHandle, ec(n.dragging, t, r));
                e.dispatch(
                  e.state.tr.setMeta(QQ, {
                    setDragging: null,
                  }),
                );
              }
            }
            function c(t) {
              if (!t.which) {
                return u(t);
              }
              let o = QQ.getState(e.state);
              if (o && o.dragging) {
                let i = ec(o.dragging, t, r);
                eh(e, o.activeHandle, i, n);
              }
            }
            e.dispatch(
              e.state.tr.setMeta(QQ, {
                setDragging: {
                  startX: t.clientX,
                  startWidth,
                },
              }),
            );
            eh(e, l.activeHandle, startWidth, n);
            i.addEventListener("mouseup", u);
            i.addEventListener("mousemove", c);
            t.preventDefault();
          })(e, n, cellMinWidth, defaultCellMinWidth);
        },
      },
      decorations: (e) => {
        let t = QQ.getState(e);
        if (t && t.activeHandle > -1) {
          return ((e, t) => {
            let r;
            let n = [];
            let o = e.doc.resolve(t);
            let i = o.node(-1);
            if (!i) {
              return s.zF.empty;
            }
            let l = J3.get(i);
            let a = o.start(-1);
            let u = l.colCount(o.pos - a) + o.nodeAfter.attrs.colspan - 1;
            for (let t = 0; t < l.height; t++) {
              let o = u + t * l.width;
              if (
                (u == l.width - 1 || l.map[o] != l.map[o + 1]) &&
                (t == 0 || l.map[o] != l.map[o - l.width])
              ) {
                let t = l.map[o];
                let u = a + t + i.nodeAt(t).nodeSize - 1;
                let d = document.createElement("div");
                d.className = "column-resize-handle";
                if ((r = QQ.getState(e)) == null ? undefined : r.dragging) {
                  n.push(
                    s.NZ.node(a + t, a + t + i.nodeAt(t).nodeSize, {
                      class: "column-resize-dragging",
                    }),
                  );
                }
                n.push(s.NZ.widget(u, d));
              }
            }
            return s.zF.create(e.doc, n);
          })(e, t.activeHandle);
        }
      },
      nodeViews: {},
    },
  });
  return l;
}
export var WX = class e {
  constructor(e, t) {
    this.activeHandle = e;
    this.dragging = t;
  }
  apply(t) {
    let r = t.getMeta(QQ);
    if (r && r.setHandle != null) {
      return new e(r.setHandle, false);
    }
    if (r && r.setDragging !== undefined) {
      return new e(this.activeHandle, r.setDragging);
    }
    if (this.activeHandle > -1 && t.docChanged) {
      let r = t.mapping.map(this.activeHandle, -1);
      if (!g(t.doc.resolve(r))) {
        r = -1;
      }
      return new e(r, this.dragging);
    }
    return this;
  }
};
function ed(e, t, r, n) {
  let o = e.posAtCoords({
    left: t.clientX + (r == "right" ? -n : n),
    top: t.clientY,
  });
  if (!o) {
    return -1;
  }
  let { pos } = o;
  let l = KW(e.state.doc.resolve(pos));
  if (!l) {
    return -1;
  }
  if (r == "right") {
    return l.pos;
  }
  let s = J3.get(l.node(-1));
  let a = l.start(-1);
  let u = s.map.indexOf(l.pos - a);
  if (u % s.width == 0) {
    return -1;
  }
  return a + s.map[u - 1];
}
function ec(dragging, t, r) {
  let n = t.clientX - dragging.startX;
  return Math.max(r, dragging.startWidth + n);
}
function ep(e, setHandle) {
  e.dispatch(
    e.state.tr.setMeta(QQ, {
      setHandle,
    }),
  );
}
function eh(e, activeHandle, r, n) {
  let o = e.state.doc.resolve(activeHandle);
  let i = o.node(-1);
  let l = o.start(-1);
  let s = J3.get(i).colCount(o.pos - l) + o.nodeAfter.attrs.colspan - 1;
  let node = e.domAtPos(o.start(-1)).node;
  while (node && node.nodeName != "TABLE") {
    node = node.parentNode;
  }
  if (node) {
    el(i, node.firstChild, node, n, s, r);
  }
}
export function LF({ allowTableNodeSelection = false } = {}) {
  return new i.k_({
    key: p,
    state: {
      init: () => null,
      apply(e, t) {
        let r = e.getMeta(p);
        if (r != null) {
          if (r == -1) {
            return null;
          }
          return r;
        }
        if (t == null || !e.docChanged) {
          return t;
        }
        let { deleted, pos } = e.mapping.mapResult(t);
        if (deleted) {
          return null;
        }
        return pos;
      },
    },
    props: {
      decorations,
      handleDOMEvents: {
        mousedown,
      },
      createSelectionBetween: (e) => {
        if (p.getState(e.state) != null) {
          return e.state.selection;
        }
        return null;
      },
      handleTripleClick,
      handleKeyDown,
      handlePaste,
    },
    appendTransaction: (t, r, n) =>
      ((e, t, r) => {
        let n;
        let o;
        let selection = (t || e).selection;
        let doc = (t || e).doc;
        if (
          selection instanceof i.nh &&
          (o = selection.node.type.spec.tableRole)
        ) {
          if (o == "cell" || o == "header_cell") {
            n = rn.create(doc, selection.from);
          } else if (o == "row") {
            let e = doc.resolve(selection.from + 1);
            n = rn.rowSelection(e, e);
          } else if (!r) {
            let e = J3.get(selection.node);
            let t = selection.from + 1;
            let r = t + e.map[e.width * e.height - 1];
            n = rn.create(doc, t + 1, r);
          }
        } else {
          if (
            selection instanceof i.U3 &&
            (({ $from, $to }) => {
              if ($from.pos == $to.pos || $from.pos < $to.pos - 6) {
                return false;
              }
              let $from_pos = $from.pos;
              let $to_pos = $to.pos;
              let $from_depth = $from.depth;
              for (
                ;
                $from_depth >= 0 &&
                !($from.after($from_depth + 1) < $from.end($from_depth));
                $from_depth--, $from_pos++
              );
              for (
                let e = $to.depth;
                e >= 0 && !($to.before(e + 1) > $to.start(e));
                e--, $to_pos--
              );
              return (
                $from_pos == $to_pos &&
                /row|table/.test($from.node($from_depth).type.spec.tableRole)
              );
            })(selection)
          ) {
            n = i.U3.create(doc, selection.from);
          } else if (
            selection instanceof i.U3 &&
            (({ $from, $to }) => {
              let r;
              let n;
              for (let t = $from.depth; t > 0; t--) {
                let n = $from.node(t);
                if (
                  n.type.spec.tableRole === "cell" ||
                  n.type.spec.tableRole === "header_cell"
                ) {
                  r = n;
                  break;
                }
              }
              for (let e = $to.depth; e > 0; e--) {
                let r = $to.node(e);
                if (
                  r.type.spec.tableRole === "cell" ||
                  r.type.spec.tableRole === "header_cell"
                ) {
                  n = r;
                  break;
                }
              }
              return r !== n && $to.parentOffset === 0;
            })(selection)
          ) {
            n = i.U3.create(
              doc,
              selection.$from.start(),
              selection.$from.end(),
            );
          }
        }
        if (n) {
          (t || (t = e.tr)).setSelection(n);
        }
        return t;
      })(n, rP(n, r), allowTableNodeSelection),
  });
}
