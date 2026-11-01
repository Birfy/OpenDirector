function constructor(e) {
  this.content = e;
}
constructor.prototype = {
  constructor,
  find: function (e) {
    for (let t = 0; t < this.content.length; t += 2) {
      if (this.content[t] === e) {
        return t;
      }
    }
    return -1;
  },
  get: function (e) {
    const t = this.find(e);
    if (t == -1) {
      return undefined;
    }
    return this.content[t + 1];
  },
  update: function (e, t, n) {
    const i = n && n != e ? this.remove(n) : this;
    const o = i.find(e);
    const s = i.content.slice();
    if (o == -1) {
      s.push(n || e, t);
    } else {
      s[o + 1] = t;
      if (n) {
        s[o] = n;
      }
    }
    return new constructor(s);
  },
  remove: function (e) {
    const t = this.find(e);
    if (t == -1) {
      return this;
    }
    const n = this.content.slice();
    n.splice(t, 2);
    return new constructor(n);
  },
  addToStart: function (e, t) {
    return new constructor([e, t].concat(this.remove(e).content));
  },
  addToEnd: function (e, t) {
    const n = this.remove(e).content.slice();
    n.push(e, t);
    return new constructor(n);
  },
  addBefore: function (e, t, n) {
    const i = this.remove(t);
    const o = i.content.slice();
    const s = i.find(e);
    o.splice(s == -1 ? o.length : s, 0, t, n);
    return new constructor(o);
  },
  forEach: function (e) {
    for (let t = 0; t < this.content.length; t += 2) {
      e(this.content[t], this.content[t + 1]);
    }
  },
  prepend: function (e) {
    if ((e = constructor.from(e)).size) {
      return new constructor(e.content.concat(this.subtract(e).content));
    }
    return this;
  },
  append: function (e) {
    if ((e = constructor.from(e)).size) {
      return new constructor(this.subtract(e).content.concat(e.content));
    }
    return this;
  },
  subtract: function (e) {
    let t = this;
    e = constructor.from(e);
    for (let n = 0; n < e.content.length; n += 2) {
      t = t.remove(e.content[n]);
    }
    return t;
  },
  toObject: function () {
    const e = {};
    this.forEach((t, n) => {
      e[t] = n;
    });
    return e;
  },
  get size() {
    return this.content.length >> 1;
  },
};
constructor.from = function (e) {
  if (e instanceof constructor) {
    return e;
  }
  const t = [];
  if (e) {
    for (const n in e) {
      t.push(n, e[n]);
    }
  }
  return new constructor(t);
};
export class FK {
  constructor(e, t) {
    this.content = e;
    this.size = t || 0;
    if (t == null) {
      for (let t = 0; t < e.length; t++) {
        this.size += e[t].nodeSize;
      }
    }
  }
  nodesBetween(e, t, n, r = 0, i) {
    for (let o = 0, s = 0; s < t; o++) {
      let l = this.content[o];
      let a = s + l.nodeSize;
      if (a > e && n(l, r + s, i || null, o) !== false && l.content.size) {
        let i = s + 1;
        l.nodesBetween(
          Math.max(0, e - i),
          Math.min(l.content.size, t - i),
          n,
          r + i,
        );
      }
      s = a;
    }
  }
  descendants(e) {
    this.nodesBetween(0, this.size, e);
  }
  textBetween(e, t, n, r) {
    let i = "";
    let o = true;
    this.nodesBetween(
      e,
      t,
      (s, l) => {
        let a = s.isText
          ? s.text.slice(Math.max(e, l) - l, t - l)
          : s.isLeaf
            ? r
              ? typeof r === "function"
                ? r(s)
                : r
              : s.type.spec.leafText
                ? s.type.spec.leafText(s)
                : ""
            : "";
        if (s.isBlock && ((s.isLeaf && a) || s.isTextblock) && n) {
          if (o) {
            o = false;
          } else {
            i += n;
          }
        }
        i += a;
      },
      0,
    );
    return i;
  }
  append(e) {
    if (!e.size) {
      return this;
    }
    if (!this.size) {
      return e;
    }
    let lastChild = this.lastChild;
    let e_firstChild = e.firstChild;
    let r = this.content.slice();
    let o = 0;
    for (
      lastChild.isText &&
      lastChild.sameMarkup(e_firstChild) &&
      ((r[r.length - 1] = lastChild.withText(
        lastChild.text + e_firstChild.text,
      )),
      (o = 1));
      o < e.content.length;
      o++
    ) {
      r.push(e.content[o]);
    }
    return new FK(r, this.size + e.size);
  }
  cut(e, t = this.size) {
    if (e == 0 && t == this.size) {
      return this;
    }
    let n = [];
    let r = 0;
    if (t > e) {
      for (let i = 0, o = 0; o < t; i++) {
        let s = this.content[i];
        let l = o + s.nodeSize;
        if (l > e) {
          if (o < e || l > t) {
            s = s.isText
              ? s.cut(Math.max(0, e - o), Math.min(s.text.length, t - o))
              : s.cut(
                  Math.max(0, e - o - 1),
                  Math.min(s.content.size, t - o - 1),
                );
          }
          n.push(s);
          r += s.nodeSize;
        }
        o = l;
      }
    }
    return new FK(n, r);
  }
  cutByIndex(e, t) {
    if (e == t) {
      return FK.empty;
    }
    if (e == 0 && t == this.content.length) {
      return this;
    }
    return new FK(this.content.slice(e, t));
  }
  replaceChild(e, t) {
    let n = this.content[e];
    if (n == t) {
      return this;
    }
    let r = this.content.slice();
    let o = this.size + t.nodeSize - n.nodeSize;
    r[e] = t;
    return new FK(r, o);
  }
  addToStart(e) {
    return new FK([e].concat(this.content), this.size + e.nodeSize);
  }
  addToEnd(e) {
    return new FK(this.content.concat(e), this.size + e.nodeSize);
  }
  eq(e) {
    if (this.content.length != e.content.length) {
      return false;
    }
    for (let t = 0; t < this.content.length; t++) {
      if (!this.content[t].eq(e.content[t])) {
        return false;
      }
    }
    return true;
  }
  get firstChild() {
    if (this.content.length) {
      return this.content[0];
    }
    return null;
  }
  get lastChild() {
    if (this.content.length) {
      return this.content[this.content.length - 1];
    }
    return null;
  }
  get childCount() {
    return this.content.length;
  }
  child(e) {
    let t = this.content[e];
    if (!t) {
      throw RangeError("Index " + e + " out of range for " + this);
    }
    return t;
  }
  maybeChild(e) {
    return this.content[e] || null;
  }
  forEach(e) {
    for (let t = 0, n = 0; t < this.content.length; t++) {
      let r = this.content[t];
      e(r, n, t);
      n += r.nodeSize;
    }
  }
  findDiffStart(e, t = 0) {
    return (function e(t, n, r) {
      for (let i = 0; ; i++) {
        if (i == t.childCount || i == n.childCount) {
          if (t.childCount == n.childCount) {
            return null;
          }
          return r;
        }
        let o = t.child(i);
        let s = n.child(i);
        if (o == s) {
          r += o.nodeSize;
          continue;
        }
        if (!o.sameMarkup(s)) {
          return r;
        }
        if (o.isText && o.text != s.text) {
          for (let e = 0; o.text[e] == s.text[e]; e++) {
            r++;
          }
          return r;
        }
        if (o.content.size || s.content.size) {
          let t = e(o.content, s.content, r + 1);
          if (t != null) {
            return t;
          }
        }
        r += o.nodeSize;
      }
    })(this, e, t);
  }
  findDiffEnd(e, t = this.size, n = e.size) {
    return (function e(t, n, a_1, b_1) {
      for (let o = t.childCount, s = n.childCount; ;) {
        if (o == 0 || s == 0) {
          if (o == s) {
            return null;
          }
          return {
            a: a_1,
            b: b_1,
          };
        }
        let l = t.child(--o);
        let a = n.child(--s);
        let h = l.nodeSize;
        if (l == a) {
          a_1 -= h;
          b_1 -= h;
          continue;
        }
        if (!l.sameMarkup(a)) {
          return {
            a: a_1,
            b: b_1,
          };
        }
        if (l.isText && l.text != a.text) {
          let e = 0;
          let t = Math.min(l.text.length, a.text.length);
          while (
            e < t &&
            l.text[l.text.length - e - 1] == a.text[a.text.length - e - 1]
          ) {
            e++;
            a_1--;
            b_1--;
          }
          return {
            a: a_1,
            b: b_1,
          };
        }
        if (l.content.size || a.content.size) {
          let t = e(l.content, a.content, a_1 - 1, b_1 - 1);
          if (t) {
            return t;
          }
        }
        a_1 -= h;
        b_1 -= h;
      }
    })(this, e, t, n);
  }
  findIndex(e) {
    if (e == 0) {
      return s(0, e);
    }
    if (e == this.size) {
      return s(this.content.length, e);
    }
    if (e > this.size || e < 0) {
      throw RangeError(`Position ${e} outside of fragment (${this})`);
    }
    for (let t = 0, n = 0; ; t++) {
      let r = n + this.child(t).nodeSize;
      if (r >= e) {
        if (r == e) {
          return s(t + 1, r);
        }
        return s(t, n);
      }
      n = r;
    }
  }
  toString() {
    return "<" + this.toStringInner() + ">";
  }
  toStringInner() {
    return this.content.join(", ");
  }
  toJSON() {
    if (this.content.length) {
      return this.content.map((e) => e.toJSON());
    }
    return null;
  }
  static fromJSON(e, t) {
    if (!t) {
      return FK.empty;
    }
    if (!Array.isArray(t)) {
      throw RangeError("Invalid input for Fragment.fromJSON");
    }
    return new FK(t.map(e.nodeFromJSON));
  }
  static fromArray(e) {
    if (!e.length) {
      return FK.empty;
    }
    let t;
    let n = 0;
    for (let r = 0; r < e.length; r++) {
      let i = e[r];
      n += i.nodeSize;
      if (r && i.isText && e[r - 1].sameMarkup(i)) {
        if (!t) {
          t = e.slice(0, r);
        }
        t[t.length - 1] = i.withText(t[t.length - 1].text + i.text);
      } else if (t) {
        t.push(i);
      }
    }
    return new FK(t || e, n);
  }
  static from(e) {
    if (!e) {
      return FK.empty;
    }
    if (e instanceof FK) {
      return e;
    }
    if (Array.isArray(e)) {
      return this.fromArray(e);
    }
    if (e.attrs) {
      return new FK([e], e.nodeSize);
    }
    throw RangeError(
      "Can not convert " +
        e +
        " to a Fragment" +
        (e.nodesBetween
          ? " (looks like multiple versions of prosemirror-model were loaded)"
          : ""),
    );
  }
}
FK.empty = new FK([], 0);
let o = {
  index: 0,
  offset: 0,
};
function s(e, t) {
  o.index = e;
  o.offset = t;
  return o;
}
function l(e, t) {
  if (e === t) {
    return true;
  }
  if (!(e && typeof e === "object") || !(t && typeof t === "object")) {
    return false;
  }
  let n = Array.isArray(e);
  if (Array.isArray(t) != n) {
    return false;
  }
  if (n) {
    if (e.length != t.length) {
      return false;
    }
    for (let n = 0; n < e.length; n++) {
      if (!l(e[n], t[n])) {
        return false;
      }
    }
  } else {
    for (let n in e) {
      if (!(n in t) || !l(e[n], t[n])) {
        return false;
      }
    }
    for (let n in t) {
      if (!(n in e)) {
        return false;
      }
    }
  }
  return true;
}
export class CU {
  constructor(e, t) {
    this.type = e;
    this.attrs = t;
  }
  addToSet(e) {
    let t;
    let n = false;
    for (let r = 0; r < e.length; r++) {
      let i = e[r];
      if (this.eq(i)) {
        return e;
      }
      if (this.type.excludes(i.type)) {
        if (!t) {
          t = e.slice(0, r);
        }
      } else {
        if (i.type.excludes(this.type)) {
          return e;
        }
        if (!n && i.type.rank > this.type.rank) {
          if (!t) {
            t = e.slice(0, r);
          }
          t.push(this);
          n = true;
        }
        if (t) {
          t.push(i);
        }
      }
    }
    if (!t) {
      t = e.slice();
    }
    if (!n) {
      t.push(this);
    }
    return t;
  }
  removeFromSet(e) {
    for (let t = 0; t < e.length; t++) {
      if (this.eq(e[t])) {
        return e.slice(0, t).concat(e.slice(t + 1));
      }
    }
    return e;
  }
  isInSet(e) {
    for (let t = 0; t < e.length; t++) {
      if (this.eq(e[t])) {
        return true;
      }
    }
    return false;
  }
  eq(e) {
    return this == e || (this.type == e.type && l(this.attrs, e.attrs));
  }
  toJSON() {
    let e = {
      type: this.type.name,
    };
    for (let t in this.attrs) {
      e.attrs = this.attrs;
      break;
    }
    return e;
  }
  static fromJSON(e, t) {
    if (!t) {
      throw RangeError("Invalid input for Mark.fromJSON");
    }
    let n = e.marks[t.type];
    if (!n) {
      throw RangeError(`There is no mark type ${t.type} in this schema`);
    }
    let r = n.create(t.attrs);
    n.checkAttrs(r.attrs);
    return r;
  }
  static sameSet(e, t) {
    if (e == t) {
      return true;
    }
    if (e.length != t.length) {
      return false;
    }
    for (let n = 0; n < e.length; n++) {
      if (!e[n].eq(t[n])) {
        return false;
      }
    }
    return true;
  }
  static setFrom(e) {
    if (!e || (Array.isArray(e) && e.length == 0)) {
      return CU.none;
    }
    if (e instanceof CU) {
      return [e];
    }
    let t = e.slice();
    t.sort((e, t) => e.type.rank - t.type.rank);
    return t;
  }
}
CU.none = [];
export class vI extends Error {}
export class Ji {
  constructor(e, t, n) {
    this.content = e;
    this.openStart = t;
    this.openEnd = n;
  }
  get size() {
    return this.content.size - this.openStart - this.openEnd;
  }
  insertAt(e, t) {
    let n = (function e(t, n, r, i) {
      let { index, offset } = t.findIndex(n);
      let l = t.maybeChild(index);
      if (offset == n || l.isText) {
        if (i && !i.canReplace(index, index, r)) {
          return null;
        }
        return t.cut(0, n).append(r).append(t.cut(n));
      }
      let a = e(l.content, n - offset - 1, r, l);
      return a && t.replaceChild(index, l.copy(a));
    })(this.content, e + this.openStart, t);
    return n && new Ji(n, this.openStart, this.openEnd);
  }
  removeBetween(e, t) {
    return new Ji(
      (function e(t, n, r) {
        let { index, offset } = t.findIndex(n);
        let s = t.maybeChild(index);
        let { index: index_1, offset: offset_1 } = t.findIndex(r);
        if (offset == n || s.isText) {
          if (offset_1 != r && !t.child(index_1).isText) {
            throw RangeError("Removing non-flat range");
          }
          return t.cut(0, n).append(t.cut(r));
        }
        if (index != index_1) {
          throw RangeError("Removing non-flat range");
        }
        return t.replaceChild(
          index,
          s.copy(e(s.content, n - offset - 1, r - offset - 1)),
        );
      })(this.content, e + this.openStart, t + this.openStart),
      this.openStart,
      this.openEnd,
    );
  }
  eq(e) {
    return (
      this.content.eq(e.content) &&
      this.openStart == e.openStart &&
      this.openEnd == e.openEnd
    );
  }
  toString() {
    return this.content + "(" + this.openStart + "," + this.openEnd + ")";
  }
  toJSON() {
    if (!this.content.size) {
      return null;
    }
    let e = {
      content: this.content.toJSON(),
    };
    if (this.openStart > 0) {
      e.openStart = this.openStart;
    }
    if (this.openEnd > 0) {
      e.openEnd = this.openEnd;
    }
    return e;
  }
  static fromJSON(e, t) {
    if (!t) {
      return Ji.empty;
    }
    let n = t.openStart || 0;
    let r = t.openEnd || 0;
    if (typeof n !== "number" || typeof r !== "number") {
      throw RangeError("Invalid input for Slice.fromJSON");
    }
    return new Ji(FK.fromJSON(e, t.content), n, r);
  }
  static maxOpen(e, t = true) {
    let n = 0;
    let r = 0;
    for (
      let r = e.firstChild;
      r && !r.isLeaf && (t || !r.type.spec.isolating);
      r = r.firstChild
    ) {
      n++;
    }
    for (
      let n = e.lastChild;
      n && !n.isLeaf && (t || !n.type.spec.isolating);
      n = n.lastChild
    ) {
      r++;
    }
    return new Ji(e, n, r);
  }
}
function d(e, t) {
  if (!t.type.compatibleContent(e.type)) {
    throw new vI("Cannot join " + t.type.name + " onto " + e.type.name);
  }
}
function p(e, t, n) {
  let r = e.node(n);
  d(r, t.node(n));
  return r;
}
function f(e, t) {
  let n = t.length - 1;
  if (n >= 0 && e.isText && e.sameMarkup(t[n])) {
    t[n] = e.withText(t[n].text + e.text);
  } else {
    t.push(e);
  }
}
function u(e, t, n, r) {
  let i = (t || e).node(n);
  let o = 0;
  let s = t ? t.index(n) : i.childCount;
  if (e) {
    o = e.index(n);
    if (e.depth > n) {
      o++;
    } else if (e.textOffset) {
      f(e.nodeAfter, r);
      o++;
    }
  }
  for (let e = o; e < s; e++) {
    f(i.child(e), r);
  }
  if (t && t.depth == n && t.textOffset) {
    f(t.nodeBefore, r);
  }
}
function m(e, t) {
  e.type.checkContent(t);
  return e.copy(t);
}
function g(e, t, n) {
  let r = [];
  u(null, e, n, r);
  if (e.depth > n) {
    f(m(p(e, t, n + 1), g(e, t, n + 1)), r);
  }
  u(t, null, n, r);
  return new FK(r);
}
Ji.empty = new Ji(FK.empty, 0, 0);
class y {
  constructor(e, t, n) {
    this.pos = e;
    this.path = t;
    this.parentOffset = n;
    this.depth = t.length / 3 - 1;
  }
  resolveDepth(e) {
    if (e == null) {
      return this.depth;
    }
    if (e < 0) {
      return this.depth + e;
    }
    return e;
  }
  get parent() {
    return this.node(this.depth);
  }
  get doc() {
    return this.node(0);
  }
  node(e) {
    return this.path[3 * this.resolveDepth(e)];
  }
  index(e) {
    return this.path[3 * this.resolveDepth(e) + 1];
  }
  indexAfter(e) {
    e = this.resolveDepth(e);
    return this.index(e) + (e != this.depth || this.textOffset ? 1 : 0);
  }
  start(e) {
    if ((e = this.resolveDepth(e)) == 0) {
      return 0;
    }
    return this.path[3 * e - 1] + 1;
  }
  end(e) {
    e = this.resolveDepth(e);
    return this.start(e) + this.node(e).content.size;
  }
  before(e) {
    if (!(e = this.resolveDepth(e))) {
      throw RangeError("There is no position before the top-level node");
    }
    if (e == this.depth + 1) {
      return this.pos;
    }
    return this.path[3 * e - 1];
  }
  after(e) {
    if (!(e = this.resolveDepth(e))) {
      throw RangeError("There is no position after the top-level node");
    }
    if (e == this.depth + 1) {
      return this.pos;
    }
    return this.path[3 * e - 1] + this.path[3 * e].nodeSize;
  }
  get textOffset() {
    return this.pos - this.path[this.path.length - 1];
  }
  get nodeAfter() {
    let parent = this.parent;
    let t = this.index(this.depth);
    if (t == parent.childCount) {
      return null;
    }
    let n = this.pos - this.path[this.path.length - 1];
    let r = parent.child(t);
    if (n) {
      return parent.child(t).cut(n);
    }
    return r;
  }
  get nodeBefore() {
    let e = this.index(this.depth);
    let t = this.pos - this.path[this.path.length - 1];
    if (t) {
      return this.parent.child(e).cut(0, t);
    }
    if (e == 0) {
      return null;
    }
    return this.parent.child(e - 1);
  }
  posAtIndex(e, t) {
    t = this.resolveDepth(t);
    let n = this.path[3 * t];
    let r = t == 0 ? 0 : this.path[3 * t - 1] + 1;
    for (let t = 0; t < e; t++) {
      r += n.child(t).nodeSize;
    }
    return r;
  }
  marks() {
    let parent = this.parent;
    let t = this.index();
    if (parent.content.size == 0) {
      return CU.none;
    }
    if (this.textOffset) {
      return parent.child(t).marks;
    }
    let n = parent.maybeChild(t - 1);
    let r = parent.maybeChild(t);
    if (!n) {
      let e = n;
      n = r;
      r = e;
    }
    let n_marks = n.marks;
    for (let o = 0; o < n_marks.length; o++) {
      if (
        !(
          n_marks[o].type.spec.inclusive !== false ||
          (r && n_marks[o].isInSet(r.marks))
        )
      ) {
        n_marks = n_marks[o--].removeFromSet(n_marks);
      }
    }
    return n_marks;
  }
  marksAcross(e) {
    let t = this.parent.maybeChild(this.index());
    if (!t || !t.isInline) {
      return null;
    }
    let t_marks = t.marks;
    let r = e.parent.maybeChild(e.index());
    for (let i = 0; i < t_marks.length; i++) {
      if (
        !(
          t_marks[i].type.spec.inclusive !== false ||
          (r && t_marks[i].isInSet(r.marks))
        )
      ) {
        t_marks = t_marks[i--].removeFromSet(t_marks);
      }
    }
    return t_marks;
  }
  sharedDepth(e) {
    for (let t = this.depth; t > 0; t--) {
      if (this.start(t) <= e && this.end(t) >= e) {
        return t;
      }
    }
    return 0;
  }
  blockRange(e = this, t) {
    if (e.pos < this.pos) {
      return e.blockRange(this);
    }
    for (
      let n =
        this.depth - (this.parent.inlineContent || this.pos == e.pos ? 1 : 0);
      n >= 0;
      n--
    ) {
      if (e.pos <= this.end(n) && (!t || t(this.node(n)))) {
        return new u$(this, e, n);
      }
    }
    return null;
  }
  sameParent(e) {
    return this.pos - this.parentOffset == e.pos - e.parentOffset;
  }
  max(e) {
    if (e.pos > this.pos) {
      return e;
    }
    return this;
  }
  min(e) {
    if (e.pos < this.pos) {
      return e;
    }
    return this;
  }
  toString() {
    let e = "";
    for (let t = 1; t <= this.depth; t++) {
      e += `${(e ? "/" : "") + this.node(t).type.name}_` + this.index(t - 1);
    }
    return e + ":" + this.parentOffset;
  }
  static resolve(e, t) {
    if (!(t >= 0 && t <= e.content.size)) {
      throw RangeError("Position " + t + " out of range");
    }
    let n = [];
    let r = 0;
    let i = t;
    for (let t = e; ;) {
      let { index, offset } = t.content.findIndex(i);
      let s = i - offset;
      n.push(t, index, r + offset);
      if (!s || (t = t.child(index)).isText) {
        break;
      }
      i = s - 1;
      r += offset + 1;
    }
    return new y(t, n, i);
  }
  static resolveCached(e, t) {
    let n = b.get(e);
    if (n) {
      for (let e = 0; e < n.elts.length; e++) {
        let elt = n.elts[e];
        if (elt.pos == t) {
          return elt;
        }
      }
    } else {
      b.set(e, (n = new w()));
    }
    let r = (n.elts[n.i] = y.resolve(e, t));
    n.i = (n.i + 1) % k;
    return r;
  }
}
class w {
  constructor() {
    this.elts = [];
    this.i = 0;
  }
}
let k = 12;
let b = new WeakMap();
export class u$ {
  constructor(e, t, n) {
    this.$from = e;
    this.$to = t;
    this.depth = n;
  }
  get start() {
    return this.$from.before(this.depth + 1);
  }
  get end() {
    return this.$to.after(this.depth + 1);
  }
  get parent() {
    return this.$from.node(this.depth);
  }
  get startIndex() {
    return this.$from.index(this.depth);
  }
  get endIndex() {
    return this.$to.indexAfter(this.depth);
  }
}
let v = Object.create(null);
export class bP {
  constructor(e, t, n, r = CU.none) {
    this.type = e;
    this.attrs = t;
    this.marks = r;
    this.content = n || FK.empty;
  }
  get children() {
    return this.content.content;
  }
  get nodeSize() {
    if (this.isLeaf) {
      return 1;
    }
    return 2 + this.content.size;
  }
  get childCount() {
    return this.content.childCount;
  }
  child(e) {
    return this.content.child(e);
  }
  maybeChild(e) {
    return this.content.maybeChild(e);
  }
  forEach(e) {
    this.content.forEach(e);
  }
  nodesBetween(e, t, n, r = 0) {
    this.content.nodesBetween(e, t, n, r, this);
  }
  descendants(e) {
    this.nodesBetween(0, this.content.size, e);
  }
  get textContent() {
    if (this.isLeaf && this.type.spec.leafText) {
      return this.type.spec.leafText(this);
    }
    return this.textBetween(0, this.content.size, "");
  }
  textBetween(e, t, n, r) {
    return this.content.textBetween(e, t, n, r);
  }
  get firstChild() {
    return this.content.firstChild;
  }
  get lastChild() {
    return this.content.lastChild;
  }
  eq(e) {
    return this == e || (this.sameMarkup(e) && this.content.eq(e.content));
  }
  sameMarkup(e) {
    return this.hasMarkup(e.type, e.attrs, e.marks);
  }
  hasMarkup(e, t, n) {
    return (
      this.type == e &&
      l(this.attrs, t || e.defaultAttrs || v) &&
      CU.sameSet(this.marks, n || CU.none)
    );
  }
  copy(e = null) {
    if (e == this.content) {
      return this;
    }
    return new bP(this.type, this.attrs, e, this.marks);
  }
  mark(e) {
    if (e == this.marks) {
      return this;
    }
    return new bP(this.type, this.attrs, this.content, e);
  }
  cut(e, t = this.content.size) {
    if (e == 0 && t == this.content.size) {
      return this;
    }
    return this.copy(this.content.cut(e, t));
  }
  slice(e, t = this.content.size, n = false) {
    if (e == t) {
      return Ji.empty;
    }
    let r = this.resolve(e);
    let i = this.resolve(t);
    let o = n ? 0 : r.sharedDepth(t);
    let s = r.start(o);
    return new Ji(
      r.node(o).content.cut(r.pos - s, i.pos - s),
      r.depth - o,
      i.depth - o,
    );
  }
  replace(e, t, n) {
    const r = this.resolve(e);
    const o = this.resolve(t);
    if (n.openStart > r.depth) {
      throw new vI("Inserted content deeper than insertion position");
    }
    if (r.depth - n.openStart != o.depth - n.openEnd) {
      throw new vI("Inconsistent open depths");
    }
    return (function e(t, n, r, o) {
      let s = t.index(o);
      let l = t.node(o);
      if (s == n.index(o) && o < t.depth - r.openStart) {
        let i = e(t, n, r, o + 1);
        return l.copy(l.content.replaceChild(s, i));
      }
      if (!r.content.size) {
        return m(l, g(t, n, o));
      }
      if (r.openStart || r.openEnd || t.depth != o || n.depth != o) {
        let { start, end } = ((e, t) => {
          let n = t.depth - e.openStart;
          let r = t.node(n).copy(e.content);
          for (let e = n - 1; e >= 0; e--) {
            r = t.node(e).copy(FK.from(r));
          }
          return {
            start: r.resolveNoCache(e.openStart + n),
            end: r.resolveNoCache(r.content.size - e.openEnd - n),
          };
        })(r, t);
        return m(
          l,
          (function e(t, n, r, o, s) {
            let l = t.depth > s && p(t, n, s + 1);
            let a = o.depth > s && p(r, o, s + 1);
            let h = [];
            u(null, t, s, h);
            if (l && a && n.index(s) == r.index(s)) {
              d(l, a);
              f(m(l, e(t, n, r, o, s + 1)), h);
            } else {
              if (l) {
                f(m(l, g(t, n, s + 1)), h);
              }
              u(n, r, s, h);
              if (a) {
                f(m(a, g(r, o, s + 1)), h);
              }
            }
            u(o, null, s, h);
            return new FK(h);
          })(t, start, end, n, o),
        );
      }
      {
        let e = t.parent;
        let i = e.content;
        return m(
          e,
          i
            .cut(0, t.parentOffset)
            .append(r.content)
            .append(i.cut(n.parentOffset)),
        );
      }
    })(r, o, n, 0);
  }
  nodeAt(e) {
    for (let t = this; ;) {
      let { index, offset } = t.content.findIndex(e);
      if (!(t = t.maybeChild(index))) {
        return null;
      }
      if (offset == e || t.isText) {
        return t;
      }
      e -= offset + 1;
    }
  }
  childAfter(e) {
    let { index, offset } = this.content.findIndex(e);
    return {
      node: this.content.maybeChild(index),
      index,
      offset,
    };
  }
  childBefore(e) {
    if (e == 0) {
      return {
        node: null,
        index: 0,
        offset: 0,
      };
    }
    let { index, offset } = this.content.findIndex(e);
    if (offset < e) {
      return {
        node: this.content.child(index),
        index,
        offset,
      };
    }
    let node = this.content.child(index - 1);
    return {
      node,
      index: index - 1,
      offset: offset - node.nodeSize,
    };
  }
  resolve(e) {
    return y.resolveCached(this, e);
  }
  resolveNoCache(e) {
    return y.resolve(this, e);
  }
  rangeHasMark(e, t, n) {
    let r = false;
    if (t > e) {
      this.nodesBetween(e, t, (e) => {
        if (n.isInSet(e.marks)) {
          r = true;
        }
        return !r;
      });
    }
    return r;
  }
  get isBlock() {
    return this.type.isBlock;
  }
  get isTextblock() {
    return this.type.isTextblock;
  }
  get inlineContent() {
    return this.type.inlineContent;
  }
  get isInline() {
    return this.type.isInline;
  }
  get isText() {
    return this.type.isText;
  }
  get isLeaf() {
    return this.type.isLeaf;
  }
  get isAtom() {
    return this.type.isAtom;
  }
  toString() {
    if (this.type.spec.toDebugString) {
      return this.type.spec.toDebugString(this);
    }
    let name = this.type.name;
    if (this.content.size) {
      name += "(" + this.content.toStringInner() + ")";
    }
    return N(this.marks, name);
  }
  contentMatchAt(e) {
    let t = this.type.contentMatch.matchFragment(this.content, 0, e);
    if (!t) {
      throw Error("Called contentMatchAt on a node with invalid content");
    }
    return t;
  }
  canReplace(e, t, n = FK.empty, r = 0, o = n.childCount) {
    let s = this.contentMatchAt(e).matchFragment(n, r, o);
    let l = s && s.matchFragment(this.content, t);
    if (!l || !l.validEnd) {
      return false;
    }
    for (let e = r; e < o; e++) {
      if (!this.type.allowsMarks(n.child(e).marks)) {
        return false;
      }
    }
    return true;
  }
  canReplaceWith(e, t, n, r) {
    if (r && !this.type.allowsMarks(r)) {
      return false;
    }
    let i = this.contentMatchAt(e).matchType(n);
    let o = i && i.matchFragment(this.content, t);
    return !!o && o.validEnd;
  }
  canAppend(e) {
    if (e.content.size) {
      return this.canReplace(this.childCount, this.childCount, e.content);
    }
    return this.type.compatibleContent(e.type);
  }
  check() {
    this.type.checkContent(this.content);
    this.type.checkAttrs(this.attrs);
    let CU_none = CU.none;
    for (let t = 0; t < this.marks.length; t++) {
      let mark = this.marks[t];
      mark.type.checkAttrs(mark.attrs);
      CU_none = mark.addToSet(CU_none);
    }
    if (!CU.sameSet(CU_none, this.marks)) {
      throw RangeError(
        `Invalid collection of marks for node ${this.type.name}: ${this.marks.map((e) => e.type.name)}`,
      );
    }
    this.content.forEach((e) => e.check());
  }
  toJSON() {
    let e = {
      type: this.type.name,
    };
    for (let t in this.attrs) {
      e.attrs = this.attrs;
      break;
    }
    if (this.content.size) {
      e.content = this.content.toJSON();
    }
    if (this.marks.length) {
      e.marks = this.marks.map((e) => e.toJSON());
    }
    return e;
  }
  static fromJSON(e, t) {
    let n;
    if (!t) {
      throw RangeError("Invalid input for Node.fromJSON");
    }
    if (t.marks) {
      if (!Array.isArray(t.marks)) {
        throw RangeError("Invalid mark data for Node.fromJSON");
      }
      n = t.marks.map(e.markFromJSON);
    }
    if (t.type == "text") {
      if (typeof t.text !== "string") {
        throw RangeError("Invalid text node in JSON");
      }
      return e.text(t.text, n);
    }
    let r = FK.fromJSON(e, t.content);
    let o = e.nodeType(t.type).create(t.attrs, r, n);
    o.type.checkAttrs(o.attrs);
    return o;
  }
}
bP.prototype.text = undefined;
class C extends bP {
  constructor(e, t, n, r) {
    super(e, t, null, r);
    if (!n) {
      throw RangeError("Empty text nodes are not allowed");
    }
    this.text = n;
  }
  toString() {
    if (this.type.spec.toDebugString) {
      return this.type.spec.toDebugString(this);
    }
    return N(this.marks, JSON.stringify(this.text));
  }
  get textContent() {
    return this.text;
  }
  textBetween(e, t) {
    return this.text.slice(e, t);
  }
  get nodeSize() {
    return this.text.length;
  }
  mark(e) {
    if (e == this.marks) {
      return this;
    }
    return new C(this.type, this.attrs, this.text, e);
  }
  withText(e) {
    if (e == this.text) {
      return this;
    }
    return new C(this.type, this.attrs, e, this.marks);
  }
  cut(e = 0, t = this.text.length) {
    if (e == 0 && t == this.text.length) {
      return this;
    }
    return this.withText(this.text.slice(e, t));
  }
  eq(e) {
    return this.sameMarkup(e) && this.text == e.text;
  }
  toJSON() {
    let e = super.toJSON();
    e.text = this.text;
    return e;
  }
}
function N(marks, t) {
  for (let n = marks.length - 1; n >= 0; n--) {
    t = marks[n].type.name + "(" + t + ")";
  }
  return t;
}
class M {
  constructor(e) {
    this.validEnd = e;
    this.next = [];
    this.wrapCache = [];
  }
  static parse(e, t) {
    let n;
    let r;
    let i = new O(e, t);
    if (i.next == null) {
      return M.empty;
    }
    let o = (function e(t) {
      let n = [];
      do {
        n.push(
          ((t) => {
            let n = [];
            do {
              n.push(
                ((t) => {
                  let n = ((t) => {
                    if (t.eat("(")) {
                      let n = e(t);
                      if (!t.eat(")")) {
                        t.err("Missing closing paren");
                      }
                      return n;
                    }
                    if (/\W/.test(t.next)) {
                      t.err("Unexpected token '" + t.next + "'");
                    } else {
                      let e = ((e, t) => {
                        let e_nodeTypes = e.nodeTypes;
                        let r = e_nodeTypes[t];
                        if (r) {
                          return [r];
                        }
                        let i = [];
                        for (let e in e_nodeTypes) {
                          let r = e_nodeTypes[e];
                          if (r.isInGroup(t)) {
                            i.push(r);
                          }
                        }
                        if (i.length == 0) {
                          e.err("No node type or group '" + t + "' found");
                        }
                        return i;
                      })(t, t.next).map((e) => {
                        if (t.inline == null) {
                          t.inline = e.isInline;
                        } else if (t.inline != e.isInline) {
                          t.err("Mixing inline and block content");
                        }
                        return {
                          type: "name",
                          value: e,
                        };
                      });
                      t.pos++;
                      if (e.length == 1) {
                        return e[0];
                      }
                      return {
                        type: "choice",
                        exprs: e,
                      };
                    }
                  })(t);
                  while (true) {
                    if (t.eat("+")) {
                      n = {
                        type: "plus",
                        expr: n,
                      };
                    } else if (t.eat("*")) {
                      n = {
                        type: "star",
                        expr: n,
                      };
                    } else if (t.eat("?")) {
                      n = {
                        type: "opt",
                        expr: n,
                      };
                    } else if (t.eat("{")) {
                      n = ((e, expr) => {
                        let min = T(e);
                        let max = min;
                        if (e.eat(",")) {
                          max = e.next != "}" ? T(e) : -1;
                        }
                        if (!e.eat("}")) {
                          e.err("Unclosed braced range");
                        }
                        return {
                          type: "range",
                          min,
                          max,
                          expr,
                        };
                      })(t, n);
                    } else {
                      break;
                    }
                  }
                  return n;
                })(t),
              );
            } while (t.next && t.next != ")" && t.next != "|");
            if (n.length == 1) {
              return n[0];
            }
            return {
              type: "seq",
              exprs: n,
            };
          })(t),
        );
      } while (t.eat("|"));
      if (n.length == 1) {
        return n[0];
      }
      return {
        type: "choice",
        exprs: n,
      };
    })(i);
    if (i.next) {
      i.err("Unexpected trailing text");
    }
    n = ((e) => {
      let t = [[]];
      i(
        (function e(t, o) {
          if (t.type == "choice") {
            return t.exprs.reduce((acc, expr) => acc.concat(e(expr, o)), []);
          }
          if (t.type == "seq") {
            for (let r = 0; ; r++) {
              let s = e(t.exprs[r], o);
              if (r == t.exprs.length - 1) {
                return s;
              }
              i(s, (o = n()));
            }
          } else if (t.type == "star") {
            let s = n();
            r(o, s);
            i(e(t.expr, s), s);
            return [r(s)];
          } else if (t.type == "plus") {
            let s = n();
            i(e(t.expr, o), s);
            i(e(t.expr, s), s);
            return [r(s)];
          } else if (t.type == "opt") {
            return [r(o)].concat(e(t.expr, o));
          } else if (t.type == "range") {
            let s = o;
            for (let r = 0; r < t.min; r++) {
              let r = n();
              i(e(t.expr, s), r);
              s = r;
            }
            if (t.max == -1) {
              i(e(t.expr, s), s);
            } else {
              for (let o = t.min; o < t.max; o++) {
                let o = n();
                r(s, o);
                i(e(t.expr, s), o);
                s = o;
              }
            }
            return [r(s)];
          } else if (t.type == "name") {
            return [r(o, undefined, t.value)];
          } else {
            throw Error("Unknown expr type");
          }
        })(e, 0),
        n(),
      );
      return t;
      function n() {
        return t.push([]) - 1;
      }
      function r(e, to, term) {
        let i = {
          term,
          to,
        };
        t[e].push(i);
        return i;
      }
      function i(e, t) {
        e.forEach((e) => (e.to = t));
      }
    })(o);
    r = Object.create(null);
    let s = (function e(t) {
      let i = [];
      t.forEach((e) => {
        n[e].forEach(({ term, to }) => {
          let r;
          if (term) {
            for (let t = 0; t < i.length; t++) {
              if (i[t][0] == term) {
                r = i[t][1];
              }
            }
            E(n, to).forEach((t) => {
              if (!r) {
                i.push([term, (r = [])]);
              }
              if (r.indexOf(t) == -1) {
                r.push(t);
              }
            });
          }
        });
      });
      let o = (r[t.join(",")] = new M(t.indexOf(n.length - 1) > -1));
      for (let t = 0; t < i.length; t++) {
        let n = i[t][1].sort(D);
        o.next.push({
          type: i[t][0],
          next: r[n.join(",")] || e(n),
        });
      }
      return o;
    })(E(n, 0));
    ((e, t) => {
      for (let n = 0, r = [e]; n < r.length; n++) {
        let e = r[n];
        let i = !e.validEnd;
        let o = [];
        for (let t = 0; t < e.next.length; t++) {
          let { type, next } = e.next[t];
          o.push(type.name);
          if (i && !(type.isText || type.hasRequiredAttrs())) {
            i = false;
          }
          if (r.indexOf(next) == -1) {
            r.push(next);
          }
        }
        if (i) {
          t.err(
            "Only non-generatable nodes (" +
              o.join(", ") +
              ") in a required position (see https://prosemirror.net/docs/guide/#generatable)",
          );
        }
      }
    })(s, i);
    return s;
  }
  matchType(e) {
    for (let t = 0; t < this.next.length; t++) {
      if (this.next[t].type == e) {
        return this.next[t].next;
      }
    }
    return null;
  }
  matchFragment(e, t = 0, n = e.childCount) {
    let r = this;
    for (let i = t; r && i < n; i++) {
      r = r.matchType(e.child(i).type);
    }
    return r;
  }
  get inlineContent() {
    return this.next.length != 0 && this.next[0].type.isInline;
  }
  get defaultType() {
    for (let e = 0; e < this.next.length; e++) {
      let { type } = this.next[e];
      if (!(type.isText || type.hasRequiredAttrs())) {
        return type;
      }
    }
    return null;
  }
  compatible(e) {
    for (let t = 0; t < this.next.length; t++) {
      for (let n = 0; n < e.next.length; n++) {
        if (this.next[t].type == e.next[n].type) {
          return true;
        }
      }
    }
    return false;
  }
  fillBefore(e, t = false, n = 0) {
    let r = [this];
    return (function o(s, l) {
      let a = s.matchFragment(e, n);
      if (a && (!t || a.validEnd)) {
        return FK.from(l.map((e) => e.createAndFill()));
      }
      for (let e = 0; e < s.next.length; e++) {
        let { type, next } = s.next[e];
        if (
          !(type.isText || type.hasRequiredAttrs()) &&
          r.indexOf(next) == -1
        ) {
          r.push(next);
          let e = o(next, l.concat(type));
          if (e) {
            return e;
          }
        }
      }
      return null;
    })(this, []);
  }
  findWrapping(e) {
    for (let t = 0; t < this.wrapCache.length; t += 2) {
      if (this.wrapCache[t] == e) {
        return this.wrapCache[t + 1];
      }
    }
    let t = this.computeWrapping(e);
    this.wrapCache.push(e, t);
    return t;
  }
  computeWrapping(e) {
    let t = Object.create(null);
    let n = [
      {
        match: this,
        type: null,
        via: null,
      },
    ];
    while (n.length) {
      let via = n.shift();
      let i = via.match;
      if (i.matchType(e)) {
        let e = [];
        for (let t = via; t.type; t = t.via) {
          e.push(t.type);
        }
        return e.reverse();
      }
      for (let e = 0; e < i.next.length; e++) {
        let { type, next } = i.next[e];
        if (
          !(
            type.isLeaf ||
            type.hasRequiredAttrs() ||
            type.name in t ||
            (via.type && !next.validEnd)
          )
        ) {
          n.push({
            match: type.contentMatch,
            type,
            via,
          });
          t[type.name] = true;
        }
      }
    }
    return null;
  }
  get edgeCount() {
    return this.next.length;
  }
  edge(e) {
    if (e >= this.next.length) {
      throw RangeError(`There's no ${e}th edge in this content match`);
    }
    return this.next[e];
  }
  toString() {
    let e = [];
    (function t(n) {
      e.push(n);
      for (let r = 0; r < n.next.length; r++) {
        if (e.indexOf(n.next[r].next) == -1) {
          t(n.next[r].next);
        }
      }
    })(this);
    return e
      .map((t, n) => {
        let r = `${n + (t.validEnd ? "*" : " ")} `;
        for (let n = 0; n < t.next.length; n++) {
          r +=
            `${(n ? ", " : "") + t.next[n].type.name}->` +
            e.indexOf(t.next[n].next);
        }
        return r;
      })
      .join("\n");
  }
}
M.empty = new M(true);
class O {
  constructor(e, t) {
    this.string = e;
    this.nodeTypes = t;
    this.inline = null;
    this.pos = 0;
    this.tokens = e.split(/\s*(?=\b|\W|$)/);
    if (this.tokens[this.tokens.length - 1] == "") {
      this.tokens.pop();
    }
    if (this.tokens[0] == "") {
      this.tokens.shift();
    }
  }
  get next() {
    return this.tokens[this.pos];
  }
  eat(e) {
    return this.next == e && (this.pos++ || true);
  }
  err(e) {
    throw SyntaxError(e + " (in content expression '" + this.string + "')");
  }
}
function T(e) {
  if (/\D/.test(e.next)) {
    e.err("Expected number, got '" + e.next + "'");
  }
  let t = Number(e.next);
  e.pos++;
  return t;
}
function D(e, t) {
  return t - e;
}
function E(e, t) {
  let n = [];
  (function t(r) {
    let i = e[r];
    if (i.length == 1 && !i[0].term) {
      return t(i[0].to);
    }
    n.push(r);
    for (let e = 0; e < i.length; e++) {
      let { term, to } = i[e];
      if (!(term || n.indexOf(to) != -1)) {
        t(to);
      }
    }
  })(t);
  return n.sort(D);
}
function A(attrs) {
  let t = Object.create(null);
  for (let n in attrs) {
    let r = attrs[n];
    if (!r.hasDefault) {
      return null;
    }
    t[n] = r.default;
  }
  return t;
}
function R(attrs, t) {
  let n = Object.create(null);
  for (let r in attrs) {
    let i = t && t[r];
    if (i === undefined) {
      let t = attrs[r];
      if (t.hasDefault) {
        i = t.default;
      } else {
        throw RangeError("No value supplied for attribute " + r);
      }
    }
    n[r] = i;
  }
  return n;
}
function I(attrs, t, n, r) {
  for (let r in t) {
    if (!(r in attrs)) {
      throw RangeError(`Unsupported attribute ${r} for ${n} of type ${r}`);
    }
  }
  for (let n in attrs) {
    let r = attrs[n];
    if (r.validate) {
      r.validate(t[n]);
    }
  }
}
function z(e, attrs) {
  let n = Object.create(null);
  if (attrs) {
    for (let r in attrs) {
      n[r] = new P(e, r, attrs[r]);
    }
  }
  return n;
}
class F {
  constructor(e, t, n) {
    this.name = e;
    this.schema = t;
    this.spec = n;
    this.markSet = null;
    this.groups = n.group ? n.group.split(" ") : [];
    this.attrs = z(e, n.attrs);
    this.defaultAttrs = A(this.attrs);
    this.contentMatch = null;
    this.inlineContent = null;
    this.isBlock = !(n.inline || e == "text");
    this.isText = e == "text";
  }
  get isInline() {
    return !this.isBlock;
  }
  get isTextblock() {
    return this.isBlock && this.inlineContent;
  }
  get isLeaf() {
    return this.contentMatch == M.empty;
  }
  get isAtom() {
    return this.isLeaf || !!this.spec.atom;
  }
  isInGroup(e) {
    return this.groups.indexOf(e) > -1;
  }
  get whitespace() {
    return this.spec.whitespace || (this.spec.code ? "pre" : "normal");
  }
  hasRequiredAttrs() {
    for (let e in this.attrs) {
      if (this.attrs[e].isRequired) {
        return true;
      }
    }
    return false;
  }
  compatibleContent(e) {
    return this == e || this.contentMatch.compatible(e.contentMatch);
  }
  computeAttrs(e) {
    if (!e && this.defaultAttrs) {
      return this.defaultAttrs;
    }
    return R(this.attrs, e);
  }
  create(e = null, t, n) {
    if (this.isText) {
      throw Error("NodeType.create can't construct text nodes");
    }
    return new bP(this, this.computeAttrs(e), FK.from(t), CU.setFrom(n));
  }
  createChecked(e = null, t, n) {
    t = FK.from(t);
    this.checkContent(t);
    return new bP(this, this.computeAttrs(e), t, CU.setFrom(n));
  }
  createAndFill(e = null, t, n) {
    e = this.computeAttrs(e);
    if ((t = FK.from(t)).size) {
      let e = this.contentMatch.fillBefore(t);
      if (!e) {
        return null;
      }
      t = e.append(t);
    }
    let r = this.contentMatch.matchFragment(t);
    let o = r && r.fillBefore(FK.empty, true);
    if (o) {
      return new bP(this, e, t.append(o), CU.setFrom(n));
    }
    return null;
  }
  validContent(e) {
    let t = this.contentMatch.matchFragment(e);
    if (!t || !t.validEnd) {
      return false;
    }
    for (let t = 0; t < e.childCount; t++) {
      if (!this.allowsMarks(e.child(t).marks)) {
        return false;
      }
    }
    return true;
  }
  checkContent(e) {
    if (!this.validContent(e)) {
      throw RangeError(
        `Invalid content for node ${this.name}: ${e.toString().slice(0, 50)}`,
      );
    }
  }
  checkAttrs(e) {
    I(this.attrs, e, "node", this.name);
  }
  allowsMarkType(e) {
    return this.markSet == null || this.markSet.indexOf(e) > -1;
  }
  allowsMarks(e) {
    if (this.markSet == null) {
      return true;
    }
    for (let t = 0; t < e.length; t++) {
      if (!this.allowsMarkType(e[t].type)) {
        return false;
      }
    }
    return true;
  }
  allowedMarks(e) {
    let t;
    if (this.markSet == null) {
      return e;
    }
    for (let n = 0; n < e.length; n++) {
      if (this.allowsMarkType(e[n].type)) {
        if (t) {
          t.push(e[n]);
        }
      } else if (!t) {
        t = e.slice(0, n);
      }
    }
    if (t) {
      if (t.length) {
        return t;
      }
      return CU.none;
    }
    return e;
  }
  static compile(e, t) {
    let n = Object.create(null);
    e.forEach((e, r) => (n[e] = new F(e, t, r)));
    let r = t.spec.topNode || "doc";
    if (!n[r]) {
      throw RangeError("Schema is missing its top node type ('" + r + "')");
    }
    if (!n.text) {
      throw RangeError("Every schema needs a 'text' type");
    }
    for (let e in n.text.attrs) {
      throw RangeError("The text node type should not have attributes");
    }
    return n;
  }
}
class P {
  constructor(e, t, n) {
    let r;
    this.hasDefault = Object.prototype.hasOwnProperty.call(n, "default");
    this.default = n.default;
    this.validate =
      typeof n.validate === "string"
        ? ((r = n.validate.split("|")),
          (n) => {
            let i = n === null ? "null" : typeof n;
            if (r.indexOf(i) < 0) {
              throw RangeError(
                `Expected value of type ${r} for attribute ${t} on type ${e}, got ${i}`,
              );
            }
          })
        : n.validate;
  }
  get isRequired() {
    return !this.hasDefault;
  }
}
export class sX {
  constructor(e, t, n, r) {
    this.name = e;
    this.rank = t;
    this.schema = n;
    this.spec = r;
    this.attrs = z(e, r.attrs);
    this.excluded = null;
    let i = A(this.attrs);
    this.instance = i ? new CU(this, i) : null;
  }
  create(e = null) {
    if (!e && this.instance) {
      return this.instance;
    }
    return new CU(this, R(this.attrs, e));
  }
  static compile(e, t) {
    let n = Object.create(null);
    let r = 0;
    e.forEach((e, i) => (n[e] = new sX(e, r++, t, i)));
    return n;
  }
  removeFromSet(e) {
    for (let t = 0; t < e.length; t++) {
      if (e[t].type == this) {
        e = e.slice(0, t).concat(e.slice(t + 1));
        t--;
      }
    }
    return e;
  }
  isInSet(e) {
    for (let t = 0; t < e.length; t++) {
      if (e[t].type == this) {
        return e[t];
      }
    }
  }
  checkAttrs(e) {
    I(this.attrs, e, "mark", this.name);
  }
  excludes(e) {
    return this.excluded.indexOf(e) > -1;
  }
}
export class Sj {
  constructor(e) {
    this.linebreakReplacement = null;
    this.cached = Object.create(null);
    let t = (this.spec = {});
    for (let n in e) {
      t[n] = e[n];
    }
    t.nodes = constructor.from(e.nodes);
    t.marks = constructor.from(e.marks || {});
    this.nodes = F.compile(this.spec.nodes, this);
    this.marks = sX.compile(this.spec.marks, this);
    let n = Object.create(null);
    for (let e in this.nodes) {
      if (e in this.marks) {
        throw RangeError(e + " can not be both a node and a mark");
      }
      let t = this.nodes[e];
      let r = t.spec.content || "";
      let i = t.spec.marks;
      t.contentMatch = n[r] || (n[r] = M.parse(r, this.nodes));
      t.inlineContent = t.contentMatch.inlineContent;
      if (t.spec.linebreakReplacement) {
        if (this.linebreakReplacement) {
          throw RangeError("Multiple linebreak nodes defined");
        }
        if (!t.isInline || !t.isLeaf) {
          throw RangeError(
            "Linebreak replacement nodes must be inline leaf nodes",
          );
        }
        this.linebreakReplacement = t;
      }
      t.markSet =
        i == "_"
          ? null
          : i
            ? $(this, i.split(" "))
            : i != "" && t.inlineContent
              ? null
              : [];
    }
    for (let e in this.marks) {
      let t = this.marks[e];
      let n = t.spec.excludes;
      t.excluded = n == null ? [t] : n == "" ? [] : $(this, n.split(" "));
    }
    this.nodeFromJSON = (e) => bP.fromJSON(this, e);
    this.markFromJSON = (e) => CU.fromJSON(this, e);
    this.topNodeType = this.nodes[this.spec.topNode || "doc"];
    this.cached.wrappings = Object.create(null);
  }
  node(e, t = null, n, r) {
    if (typeof e === "string") {
      e = this.nodeType(e);
    } else if (e instanceof F) {
      if (e.schema != this) {
        throw RangeError(
          "Node type from different schema used (" + e.name + ")",
        );
      }
    } else {
      throw RangeError("Invalid node type: " + e);
    }
    return e.createChecked(t, n, r);
  }
  text(e, t) {
    let text = this.nodes.text;
    return new C(text, text.defaultAttrs, e, CU.setFrom(t));
  }
  mark(e, t) {
    if (typeof e === "string") {
      e = this.marks[e];
    }
    return e.create(t);
  }
  nodeType(e) {
    let t = this.nodes[e];
    if (!t) {
      throw RangeError("Unknown node type: " + e);
    }
    return t;
  }
}
function $(e, t) {
  let n = [];
  for (let r = 0; r < t.length; r++) {
    let i = t[r];
    let o = e.marks[i];
    let s = o;
    if (o) {
      n.push(o);
    } else {
      for (let t in e.marks) {
        let r = e.marks[t];
        if (
          i == "_" ||
          (r.spec.group && r.spec.group.split(" ").indexOf(i) > -1)
        ) {
          n.push((s = r));
        }
      }
    }
    if (!s) {
      throw SyntaxError("Unknown mark type: '" + t[r] + "'");
    }
  }
  return n;
}
export class S4 {
  constructor(e, t) {
    this.schema = e;
    this.rules = t;
    this.tags = [];
    this.styles = [];
    let n = (this.matchedStyles = []);
    t.forEach((e) => {
      if (e.tag != null) {
        this.tags.push(e);
      } else if (e.style != null) {
        let t = /[^=]*/.exec(e.style)[0];
        if (n.indexOf(t) < 0) {
          n.push(t);
        }
        this.styles.push(e);
      }
    });
    this.normalizeLists = !this.tags.some((t) => {
      if (!/^(ul|ol)\b/.test(t.tag) || !t.node) {
        return false;
      }
      let n = e.nodes[t.node];
      return n.contentMatch.matchType(n);
    });
  }
  parse(e, t = {}) {
    let n = new _(this, t, false);
    n.addAll(e, CU.none, t.from, t.to);
    return n.finish();
  }
  parseSlice(e, t = {}) {
    let n = new _(this, t, true);
    n.addAll(e, CU.none, t.from, t.to);
    return Ji.maxOpen(n.finish());
  }
  matchTag(e, t, n) {
    for (let o = n ? this.tags.indexOf(n) + 1 : 0; o < this.tags.length; o++) {
      let r;
      let i;
      let tag = this.tags[o];
      r = e;
      i = tag.tag;
      if (
        (
          r.matches ||
          r.msMatchesSelector ||
          r.webkitMatchesSelector ||
          r.mozMatchesSelector
        ).call(r, i) &&
        (tag.namespace === undefined || e.namespaceURI == tag.namespace) &&
        (!tag.context || t.matchesContext(tag.context))
      ) {
        if (tag.getAttrs) {
          let t = tag.getAttrs(e);
          if (t === false) {
            continue;
          }
          tag.attrs = t || undefined;
        }
        return tag;
      }
    }
  }
  matchStyle(e, t, n, r) {
    for (
      let i = r ? this.styles.indexOf(r) + 1 : 0;
      i < this.styles.length;
      i++
    ) {
      let style = this.styles[i];
      let o = style.style;
      if (
        o.indexOf(e) == 0 &&
        (!style.context || n.matchesContext(style.context)) &&
        (!(o.length > e.length) ||
          (o.charCodeAt(e.length) == 61 && o.slice(e.length + 1) == t))
      ) {
        if (style.getAttrs) {
          let e = style.getAttrs(t);
          if (e === false) {
            continue;
          }
          style.attrs = e || undefined;
        }
        return style;
      }
    }
  }
  static schemaRules(e) {
    let t = [];
    function n(e) {
      let n = e.priority == null ? 50 : e.priority;
      let r = 0;
      for (; r < t.length; r++) {
        let e = t[r];
        if ((e.priority == null ? 50 : e.priority) < n) {
          break;
        }
      }
      t.splice(r, 0, e);
    }
    for (let t in e.marks) {
      let r = e.marks[t].spec.parseDOM;
      if (r) {
        r.forEach((e) => {
          n((e = U(e)));
          if (!(e.mark || e.ignore || e.clearMark)) {
            e.mark = t;
          }
        });
      }
    }
    for (let t in e.nodes) {
      let r = e.nodes[t].spec.parseDOM;
      if (r) {
        r.forEach((e) => {
          n((e = U(e)));
          if (!(e.node || e.ignore || e.mark)) {
            e.node = t;
          }
        });
      }
    }
    return t;
  }
  static fromSchema(e) {
    return (
      e.cached.domParser || (e.cached.domParser = new S4(e, S4.schemaRules(e)))
    );
  }
}
let L = {
  address: true,
  article: true,
  aside: true,
  blockquote: true,
  canvas: true,
  dd: true,
  div: true,
  dl: true,
  fieldset: true,
  figcaption: true,
  figure: true,
  footer: true,
  form: true,
  h1: true,
  h2: true,
  h3: true,
  h4: true,
  h5: true,
  h6: true,
  header: true,
  hgroup: true,
  hr: true,
  li: true,
  noscript: true,
  ol: true,
  output: true,
  p: true,
  pre: true,
  section: true,
  table: true,
  tfoot: true,
  ul: true,
};
let K = {
  head: true,
  noscript: true,
  object: true,
  script: true,
  style: true,
  title: true,
};
let W = {
  ol: true,
  ul: true,
};
function q(e, t, n) {
  if (t != null) {
    return !!t | (2 * (t === "full"));
  }
  if (e && e.whitespace == "pre") {
    return 3;
  }
  return -5 & n;
}
class j {
  constructor(e, t, n, r, i, o) {
    this.type = e;
    this.attrs = t;
    this.marks = n;
    this.solid = r;
    this.options = o;
    this.content = [];
    this.activeMarks = CU.none;
    this.match = i || (4 & o ? null : e.contentMatch);
  }
  findWrapping(e) {
    if (!this.match) {
      if (!this.type) {
        return [];
      }
      let t = this.type.contentMatch.fillBefore(FK.from(e));
      if (t) {
        this.match = this.type.contentMatch.matchFragment(t);
      } else {
        let t = this.type.contentMatch;
        let n;
        if ((n = t.findWrapping(e.type))) {
          this.match = t;
          return n;
        }
        return null;
      }
    }
    return this.match.findWrapping(e.type);
  }
  finish(e) {
    if (!(1 & this.options)) {
      let e = this.content[this.content.length - 1];
      let t;
      if (e && e.isText && (t = /[ \t\r\n\u000c]+$/.exec(e.text))) {
        if (e.text.length == t[0].length) {
          this.content.pop();
        } else {
          this.content[this.content.length - 1] = e.withText(
            e.text.slice(0, e.text.length - t[0].length),
          );
        }
      }
    }
    let t = FK.from(this.content);
    if (!e && this.match) {
      t = t.append(this.match.fillBefore(FK.empty, true));
    }
    if (this.type) {
      return this.type.create(this.attrs, t, this.marks);
    }
    return t;
  }
  inlineContext(e) {
    if (this.type) {
      return this.type.inlineContent;
    }
    if (this.content.length) {
      return this.content[0].isInline;
    }
    return (
      e.parentNode && !L.hasOwnProperty(e.parentNode.nodeName.toLowerCase())
    );
  }
}
class _ {
  constructor(e, t, n) {
    this.parser = e;
    this.options = t;
    this.isOpen = n;
    this.open = 0;
    this.localPreserveWS = false;
    let r = t.topNode;
    let i;
    let o = q(null, t.preserveWhitespace, 0) | (4 * !!n);
    i = r
      ? new j(
          r.type,
          r.attrs,
          CU.none,
          true,
          t.topMatch || r.type.contentMatch,
          o,
        )
      : n
        ? new j(null, null, CU.none, true, null, o)
        : new j(e.schema.topNodeType, null, CU.none, true, null, o);
    this.nodes = [i];
    this.find = t.findPositions;
    this.needsBlock = false;
  }
  get top() {
    return this.nodes[this.open];
  }
  addDOM(e, t) {
    if (e.nodeType == 3) {
      this.addTextNode(e, t);
    } else if (e.nodeType == 1) {
      this.addElement(e, t);
    }
  }
  addTextNode(e, t) {
    let e_nodeValue = e.nodeValue;
    let top = this.top;
    let i =
      2 & top.options ? "full" : this.localPreserveWS || (1 & top.options) > 0;
    if (
      i === "full" ||
      top.inlineContext(e) ||
      /[^ \t\r\n\u000c]/.test(e_nodeValue)
    ) {
      if (i) {
        e_nodeValue =
          i !== "full"
            ? e_nodeValue.replace(/\r?\n|\r/g, " ")
            : e_nodeValue.replace(/\r\n?/g, "\n");
      } else {
        e_nodeValue = e_nodeValue.replace(/[ \t\r\n\u000c]+/g, " ");
        if (
          /^[ \t\r\n\u000c]/.test(e_nodeValue) &&
          this.open == this.nodes.length - 1
        ) {
          let t = top.content[top.content.length - 1];
          let i = e.previousSibling;
          if (
            !t ||
            (i && i.nodeName == "BR") ||
            (t.isText && /[ \t\r\n\u000c]$/.test(t.text))
          ) {
            e_nodeValue = e_nodeValue.slice(1);
          }
        }
      }
      if (e_nodeValue) {
        this.insertNode(
          this.parser.schema.text(e_nodeValue),
          t,
          !/\S/.test(e_nodeValue),
        );
      }
      this.findInText(e);
    } else {
      this.findInside(e);
    }
  }
  addElement(e, t, n) {
    let localPreserveWS = this.localPreserveWS;
    let top = this.top;
    if (e.tagName == "PRE" || /pre/.test(e.style && e.style.whiteSpace)) {
      this.localPreserveWS = true;
    }
    let o = e.nodeName.toLowerCase();
    let s;
    if (W.hasOwnProperty(o) && this.parser.normalizeLists) {
      ((e) => {
        for (let t = e.firstChild, n = null; t; t = t.nextSibling) {
          let e = t.nodeType == 1 ? t.nodeName.toLowerCase() : null;
          if (e && W.hasOwnProperty(e) && n) {
            n.appendChild(t);
            t = n;
          } else if (e == "li") {
            n = t;
          } else if (e) {
            n = null;
          }
        }
      })(e);
    }
    let l =
      (this.options.ruleFromNode && this.options.ruleFromNode(e)) ||
      (s = this.parser.matchTag(e, this, n));
    e: if (l ? l.ignore : K.hasOwnProperty(o)) {
      this.findInside(e);
      this.ignoreFallback(e, t);
    } else if (!l || l.skip || l.closeParent) {
      if (l && l.closeParent) {
        this.open = Math.max(0, this.open - 1);
      } else if (l && l.skip.nodeType) {
        e = l.skip;
      }
      let n;
      let r = this.needsBlock;
      if (L.hasOwnProperty(o)) {
        if (top.content.length && top.content[0].isInline && this.open) {
          this.open--;
          top = this.top;
        }
        n = true;
        if (!top.type) {
          this.needsBlock = true;
        }
      } else if (!e.firstChild) {
        this.leafFallback(e, t);
        break e;
      }
      let s = l && l.skip ? t : this.readStyles(e, t);
      if (s) {
        this.addAll(e, s);
      }
      if (n) {
        this.sync(top);
      }
      this.needsBlock = r;
    } else {
      let n = this.readStyles(e, t);
      if (n) {
        this.addElementByRule(e, l, n, l.consuming === false ? s : undefined);
      }
    }
    this.localPreserveWS = localPreserveWS;
  }
  leafFallback(e, t) {
    if (e.nodeName == "BR" && this.top.type && this.top.type.inlineContent) {
      this.addTextNode(e.ownerDocument.createTextNode("\n"), t);
    }
  }
  ignoreFallback(e, t) {
    if (
      !(e.nodeName != "BR" || (this.top.type && this.top.type.inlineContent))
    ) {
      this.findPlace(this.parser.schema.text("-"), t, true);
    }
  }
  readStyles(e, t) {
    let e_style = e.style;
    if (e_style && e_style.length) {
      for (let e = 0; e < this.parser.matchedStyles.length; e++) {
        let matchedStyle = this.parser.matchedStyles[e];
        let i = e_style.getPropertyValue(matchedStyle);
        if (i) {
          for (let e; ;) {
            let n = this.parser.matchStyle(matchedStyle, i, this, e);
            if (!n) {
              break;
            }
            if (n.ignore) {
              return null;
            }
            t = n.clearMark
              ? t.filter((e) => !n.clearMark(e))
              : t.concat(this.parser.schema.marks[n.mark].create(n.attrs));
            if (n.consuming === false) {
              e = n;
            } else {
              break;
            }
          }
        }
      }
    }
    return t;
  }
  addElementByRule(e, t, n, r) {
    let i;
    let o;
    if (t.node) {
      if ((o = this.parser.schema.nodes[t.node]).isLeaf) {
        if (!this.insertNode(o.create(t.attrs), n, e.nodeName == "BR")) {
          this.leafFallback(e, n);
        }
      } else {
        let e = this.enter(o, t.attrs || null, n, t.preserveWhitespace);
        if (e) {
          i = true;
          n = e;
        }
      }
    } else {
      let e = this.parser.schema.marks[t.mark];
      n = n.concat(e.create(t.attrs));
    }
    let top = this.top;
    if (o && o.isLeaf) {
      this.findInside(e);
    } else if (r) {
      this.addElement(e, n, r);
    } else if (t.getContent) {
      this.findInside(e);
      t.getContent(e, this.parser.schema).forEach((e) =>
        this.insertNode(e, n, false),
      );
    } else {
      let r = e;
      if (typeof t.contentElement === "string") {
        r = e.querySelector(t.contentElement);
      } else if (typeof t.contentElement === "function") {
        r = t.contentElement(e);
      } else if (t.contentElement) {
        r = t.contentElement;
      }
      this.findAround(e, r, true);
      this.addAll(r, n);
      this.findAround(e, r, false);
    }
    if (i && this.sync(top)) {
      this.open--;
    }
  }
  addAll(e, t, n, r) {
    let i = n || 0;
    for (
      let o = n ? e.childNodes[n] : e.firstChild,
        s = r == null ? null : e.childNodes[r];
      o != s;
      o = o.nextSibling, ++i
    ) {
      this.findAtPoint(e, i);
      this.addDOM(o, t);
    }
    this.findAtPoint(e, i);
  }
  findPlace(e, t, n) {
    let r;
    let i;
    for (let t = this.open, o = 0; t >= 0; t--) {
      let s = this.nodes[t];
      let l = s.findWrapping(e);
      if (
        l &&
        (!r || r.length > l.length + o) &&
        ((r = l), (i = s), !l.length)
      ) {
        break;
      }
      if (s.solid) {
        if (n) {
          break;
        }
        o += 2;
      }
    }
    if (!r) {
      return null;
    }
    this.sync(i);
    for (let e = 0; e < r.length; e++) {
      t = this.enterInner(r[e], null, t, false);
    }
    return t;
  }
  insertNode(e, t, n) {
    if (e.isInline && this.needsBlock && !this.top.type) {
      let e = this.textblockFromContext();
      if (e) {
        t = this.enterInner(e, null, t);
      }
    }
    let r = this.findPlace(e, t, n);
    if (r) {
      this.closeExtra();
      let t = this.top;
      if (t.match) {
        t.match = t.match.matchType(e.type);
      }
      let n = CU.none;
      for (let i of r.concat(e.marks)) {
        if (t.type ? t.type.allowsMarkType(i.type) : H(i.type, e.type)) {
          n = i.addToSet(n);
        }
      }
      t.content.push(e.mark(n));
      return true;
    }
    return false;
  }
  enter(e, t, n, r) {
    let i = this.findPlace(e.create(t), n, false);
    if (i) {
      i = this.enterInner(e, t, n, true, r);
    }
    return i;
  }
  enterInner(e, t, n, r = false, i) {
    this.closeExtra();
    let top = this.top;
    top.match = top.match && top.match.matchType(e);
    let s = q(e, i, top.options);
    if (4 & top.options && top.content.length == 0) {
      s |= 4;
    }
    let CU_none = CU.none;
    n = n.filter(
      (t) =>
        (top.type ? !top.type.allowsMarkType(t.type) : !H(t.type, e)) ||
        ((CU_none = t.addToSet(CU_none)), false),
    );
    this.nodes.push(new j(e, t, CU_none, r, null, s));
    this.open++;
    return n;
  }
  closeExtra(e = false) {
    let t = this.nodes.length - 1;
    if (t > this.open) {
      for (; t > this.open; t--) {
        this.nodes[t - 1].content.push(this.nodes[t].finish(e));
      }
      this.nodes.length = this.open + 1;
    }
  }
  finish() {
    this.open = 0;
    this.closeExtra(this.isOpen);
    return this.nodes[0].finish(!!(this.isOpen || this.options.topOpen));
  }
  sync(e) {
    for (let t = this.open; t >= 0; t--) {
      if (this.nodes[t] == e) {
        this.open = t;
        return true;
      } else {
        if (this.localPreserveWS) {
          this.nodes[t].options |= 1;
        }
      }
    }
    return false;
  }
  get currentPos() {
    this.closeExtra();
    let e = 0;
    for (let t = this.open; t >= 0; t--) {
      let n = this.nodes[t].content;
      for (let t = n.length - 1; t >= 0; t--) {
        e += n[t].nodeSize;
      }
      if (t) {
        e++;
      }
    }
    return e;
  }
  findAtPoint(e, t) {
    if (this.find) {
      for (let n = 0; n < this.find.length; n++) {
        if (this.find[n].node == e && this.find[n].offset == t) {
          this.find[n].pos = this.currentPos;
        }
      }
    }
  }
  findInside(e) {
    if (this.find) {
      for (let t = 0; t < this.find.length; t++) {
        if (
          this.find[t].pos == null &&
          e.nodeType == 1 &&
          e.contains(this.find[t].node)
        ) {
          this.find[t].pos = this.currentPos;
        }
      }
    }
  }
  findAround(e, t, n) {
    if (e != t && this.find) {
      for (let r = 0; r < this.find.length; r++) {
        if (
          this.find[r].pos == null &&
          e.nodeType == 1 &&
          e.contains(this.find[r].node) &&
          t.compareDocumentPosition(this.find[r].node) & (n ? 2 : 4)
        ) {
          this.find[r].pos = this.currentPos;
        }
      }
    }
  }
  findInText(e) {
    if (this.find) {
      for (let t = 0; t < this.find.length; t++) {
        if (this.find[t].node == e) {
          this.find[t].pos =
            this.currentPos - (e.nodeValue.length - this.find[t].offset);
        }
      }
    }
  }
  matchesContext(e) {
    if (e.indexOf("|") > -1) {
      return e.split(/\s*\|\s*/).some(this.matchesContext, this);
    }
    let t = e.split("/");
    let context = this.options.context;
    let r =
      !this.isOpen && (!context || context.parent.type == this.nodes[0].type);
    let i = -(context ? context.depth + 1 : 0) + +!r;
    let o = (e, s) => {
      for (; e >= 0; e--) {
        let l = t[e];
        if (l == "") {
          if (e == t.length - 1 || e == 0) {
            continue;
          }
          for (; s >= i; s--) {
            if (o(e - 1, s)) {
              return true;
            }
          }
          return false;
        }
        {
          let e =
            s > 0 || (s == 0 && r)
              ? this.nodes[s].type
              : context && s >= i
                ? context.node(s - i).type
                : null;
          if (!e || (e.name != l && !e.isInGroup(l))) {
            return false;
          }
          s--;
        }
      }
      return true;
    };
    return o(t.length - 1, this.open);
  }
  textblockFromContext() {
    let context = this.options.context;
    if (context) {
      for (let t = context.depth; t >= 0; t--) {
        let n = context
          .node(t)
          .contentMatchAt(context.indexAfter(t)).defaultType;
        if (n && n.isTextblock && n.defaultAttrs) {
          return n;
        }
      }
    }
    for (let e in this.parser.schema.nodes) {
      let t = this.parser.schema.nodes[e];
      if (t.isTextblock && t.defaultAttrs) {
        return t;
      }
    }
  }
}
function U(e) {
  let t = {};
  for (let n in e) {
    t[n] = e[n];
  }
  return t;
}
function H(e, t) {
  let nodes = t.schema.nodes;
  for (let r in nodes) {
    let i = nodes[r];
    if (!i.allowsMarkType(e)) {
      continue;
    }
    let o = [];
    let s = (e) => {
      o.push(e);
      for (let n = 0; n < e.edgeCount; n++) {
        let { type, next } = e.edge(n);
        if (type == t || (o.indexOf(next) < 0 && s(next))) {
          return true;
        }
      }
    };
    if (s(i.contentMatch)) {
      return true;
    }
  }
}
export class ZF {
  constructor(e, t) {
    this.nodes = e;
    this.marks = t;
  }
  serializeFragment(e, t = {}, n) {
    if (!n) {
      n = X(t).createDocumentFragment();
    }
    let r = n;
    let i = [];
    e.forEach((e) => {
      if (i.length || e.marks.length) {
        let n = 0;
        let o = 0;
        while (n < i.length && o < e.marks.length) {
          let t = e.marks[o];
          if (!this.marks[t.type.name]) {
            o++;
            continue;
          }
          if (!t.eq(i[n][0]) || t.type.spec.spanning === false) {
            break;
          }
          n++;
          o++;
        }
        while (n < i.length) {
          r = i.pop()[1];
        }
        while (o < e.marks.length) {
          let n = e.marks[o++];
          let s = this.serializeMark(n, e.isInline, t);
          if (s) {
            i.push([n, r]);
            r.appendChild(s.dom);
            r = s.contentDOM || s.dom;
          }
        }
      }
      r.appendChild(this.serializeNodeInner(e, t));
    });
    return n;
  }
  serializeNodeInner(e, t) {
    let { dom, contentDOM } = Q(
      X(t),
      this.nodes[e.type.name](e),
      null,
      e.attrs,
    );
    if (contentDOM) {
      if (e.isLeaf) {
        throw RangeError("Content hole not allowed in a leaf node spec");
      }
      this.serializeFragment(e.content, t, contentDOM);
    }
    return dom;
  }
  serializeNode(e, t = {}) {
    let n = this.serializeNodeInner(e, t);
    for (let r = e.marks.length - 1; r >= 0; r--) {
      let i = this.serializeMark(e.marks[r], e.isInline, t);
      if (i) {
        (i.contentDOM || i.dom).appendChild(n);
        n = i.dom;
      }
    }
    return n;
  }
  serializeMark(e, t, n = {}) {
    let r = this.marks[e.type.name];
    return r && Q(X(n), r(e, t), null, e.attrs);
  }
  static renderSpec(e, t, n = null, r) {
    return Q(e, t, n, r);
  }
  static fromSchema(e) {
    return (
      e.cached.domSerializer ||
      (e.cached.domSerializer = new ZF(
        this.nodesFromSchema(e),
        this.marksFromSchema(e),
      ))
    );
  }
  static nodesFromSchema(e) {
    let t = Z(e.nodes);
    if (!t.text) {
      t.text = (e) => e.text;
    }
    return t;
  }
  static marksFromSchema(e) {
    return Z(e.marks);
  }
}
function Z(e) {
  let t = {};
  for (let n in e) {
    let r = e[n].spec.toDOM;
    if (r) {
      t[n] = r;
    }
  }
  return t;
}
function X(e) {
  return e.document || window.document;
}
let Y = new WeakMap();
function Q(e, dom, n, r) {
  let contentDOM_1;
  let o;
  let s;
  if (typeof dom === "string") {
    return {
      dom: e.createTextNode(dom),
    };
  }
  if (dom.nodeType != null) {
    return {
      dom,
    };
  }
  if (dom.dom && dom.dom.nodeType != null) {
    return dom;
  }
  let l = dom[0];
  let a;
  if (typeof l !== "string") {
    throw RangeError("Invalid array passed to renderSpec");
  }
  if (
    r &&
    ((o = Y.get(r)) === undefined &&
      Y.set(
        r,
        ((s = null),
        !(function e(t) {
          if (t && typeof t === "object") {
            if (Array.isArray(t)) {
              if (typeof t[0] === "string") {
                if (!s) {
                  s = [];
                }
                s.push(t);
              } else {
                for (let n = 0; n < t.length; n++) {
                  e(t[n]);
                }
              }
            } else {
              for (let n in t) {
                e(t[n]);
              }
            }
          }
        })(r),
        (o = s)),
      ),
    (a = o)) &&
    a.indexOf(dom) > -1
  ) {
    throw RangeError(
      "Using an array from an attribute object as a DOM spec. This may be an attempted cross site scripting attack.",
    );
  }
  let h = l.indexOf(" ");
  if (h > 0) {
    n = l.slice(0, h);
    l = l.slice(h + 1);
  }
  let c = n ? e.createElementNS(n, l) : e.createElement(l);
  let d = dom[1];
  let p = 1;
  if (d && typeof d === "object" && d.nodeType == null && !Array.isArray(d)) {
    for (let e in ((p = 2), d)) {
      if (d[e] != null) {
        let t = e.indexOf(" ");
        if (t > 0) {
          c.setAttributeNS(e.slice(0, t), e.slice(t + 1), d[e]);
        } else if (e == "style" && c.style) {
          c.style.cssText = d[e];
        } else {
          c.setAttribute(e, d[e]);
        }
      }
    }
  }
  for (let o = p; o < dom.length; o++) {
    let s = dom[o];
    if (s === 0) {
      if (o < dom.length - 1 || o > p) {
        throw RangeError(
          "Content hole must be the only child of its parent node",
        );
      }
      return {
        dom: c,
        contentDOM: c,
      };
    }
    {
      let { dom, contentDOM } = Q(e, s, n, r);
      c.appendChild(dom);
      if (contentDOM) {
        if (contentDOM_1) {
          throw RangeError("Multiple content holes");
        }
        contentDOM_1 = contentDOM;
      }
    }
  }
  return {
    dom: c,
    contentDOM: contentDOM_1,
  };
}
