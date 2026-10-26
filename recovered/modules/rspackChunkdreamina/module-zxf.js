import { CU, FK, Ji, sX, vI } from "./module-le8.js";
class i {
  constructor(e, t, n) {
    this.pos = e;
    this.delInfo = t;
    this.recover = n;
  }
  get deleted() {
    return (8 & this.delInfo) > 0;
  }
  get deletedBefore() {
    return (5 & this.delInfo) > 0;
  }
  get deletedAfter() {
    return (6 & this.delInfo) > 0;
  }
  get deletedAcross() {
    return (4 & this.delInfo) > 0;
  }
}
class o {
  constructor(e, t = false) {
    this.ranges = e;
    this.inverted = t;
    if (!e.length && o.empty) {
      return o.empty;
    }
  }
  recover(e) {
    let t = 0;
    let n = 65535 & e;
    if (!this.inverted) {
      for (let e = 0; e < n; e++) {
        t += this.ranges[3 * e + 2] - this.ranges[3 * e + 1];
      }
    }
    return this.ranges[3 * n] + t + (e - (65535 & e)) / 65536;
  }
  mapResult(e, t = 1) {
    return this._map(e, t, false);
  }
  map(e, t = 1) {
    return this._map(e, t, true);
  }
  _map(e, t, n) {
    let r = 0;
    let o = this.inverted ? 2 : 1;
    let s = this.inverted ? 1 : 2;
    for (let l = 0; l < this.ranges.length; l += 3) {
      let a = this.ranges[l] - (this.inverted ? r : 0);
      if (a > e) {
        break;
      }
      let h = this.ranges[l + o];
      let c = this.ranges[l + s];
      let d = a + h;
      if (e <= d) {
        let o = h ? (e == a ? -1 : e == d ? 1 : t) : t;
        let s = a + r + (o < 0 ? 0 : c);
        if (n) {
          return s;
        }
        let p = e == (t < 0 ? a : d) ? null : l / 3 + (e - a) * 65536;
        let f = e == a ? 2 : e == d ? 1 : 4;
        if (t < 0 ? e != a : e != d) {
          f |= 8;
        }
        return new i(s, f, p);
      }
      r += c - h;
    }
    if (n) {
      return e + r;
    }
    return new i(e + r, 0, null);
  }
  touches(e, t) {
    let n = 0;
    let r = 65535 & t;
    let i = this.inverted ? 2 : 1;
    let o = this.inverted ? 1 : 2;
    for (let t = 0; t < this.ranges.length; t += 3) {
      let s = this.ranges[t] - (this.inverted ? n : 0);
      if (s > e) {
        break;
      }
      let l = this.ranges[t + i];
      if (e <= s + l && t == 3 * r) {
        return true;
      }
      n += this.ranges[t + o] - l;
    }
    return false;
  }
  forEach(e) {
    let t = this.inverted ? 2 : 1;
    let n = this.inverted ? 1 : 2;
    for (let r = 0, i = 0; r < this.ranges.length; r += 3) {
      let range = this.ranges[r];
      let s = range - (this.inverted ? i : 0);
      let l = range + (this.inverted ? 0 : i);
      let a = this.ranges[r + t];
      let h = this.ranges[r + n];
      e(s, s + a, l, l + h);
      i += h - a;
    }
  }
  invert() {
    return new o(this.ranges, !this.inverted);
  }
  toString() {
    return (this.inverted ? "-" : "") + JSON.stringify(this.ranges);
  }
  static offset(e) {
    if (e == 0) {
      return o.empty;
    }
    return new o(e < 0 ? [0, -e, 0] : [0, 0, e]);
  }
}
o.empty = new o([]);
export class X9 {
  constructor(e, t, n = 0, r = e ? e.length : 0) {
    this.mirror = t;
    this.from = n;
    this.to = r;
    this._maps = e || [];
    this.ownData = !(e || t);
  }
  get maps() {
    return this._maps;
  }
  slice(e = 0, t = this.maps.length) {
    return new X9(this._maps, this.mirror, e, t);
  }
  appendMap(e, t) {
    if (!this.ownData) {
      this._maps = this._maps.slice();
      this.mirror = this.mirror && this.mirror.slice();
      this.ownData = true;
    }
    this.to = this._maps.push(e);
    if (t != null) {
      this.setMirror(this._maps.length - 1, t);
    }
  }
  appendMapping(e) {
    for (let t = 0, n = this._maps.length; t < e._maps.length; t++) {
      let r = e.getMirror(t);
      this.appendMap(e._maps[t], r != null && r < t ? n + r : undefined);
    }
  }
  getMirror(e) {
    if (this.mirror) {
      for (let t = 0; t < this.mirror.length; t++) {
        if (this.mirror[t] == e) {
          return this.mirror[t + (t % 2 ? -1 : 1)];
        }
      }
    }
  }
  setMirror(e, t) {
    if (!this.mirror) {
      this.mirror = [];
    }
    this.mirror.push(e, t);
  }
  appendMappingInverted(e) {
    for (
      let t = e.maps.length - 1, n = this._maps.length + e._maps.length;
      t >= 0;
      t--
    ) {
      let r = e.getMirror(t);
      this.appendMap(
        e._maps[t].invert(),
        r != null && r > t ? n - r - 1 : undefined,
      );
    }
  }
  invert() {
    let e = new X9();
    e.appendMappingInverted(this);
    return e;
  }
  map(e, t = 1) {
    if (this.mirror) {
      return this._map(e, t, true);
    }
    for (let n = this.from; n < this.to; n++) {
      e = this._maps[n].map(e, t);
    }
    return e;
  }
  mapResult(e, t = 1) {
    return this._map(e, t, false);
  }
  _map(e, t, n) {
    let r = 0;
    for (let n = this.from; n < this.to; n++) {
      let i = this._maps[n].mapResult(e, t);
      if (i.recover != null) {
        let t = this.getMirror(n);
        if (t != null && t > n && t < this.to) {
          n = t;
          e = this._maps[t].recover(i.recover);
          continue;
        }
      }
      r |= i.delInfo;
      e = i.pos;
    }
    if (n) {
      return e;
    }
    return new i(e, r, null);
  }
}
let l = Object.create(null);
class a {
  getMap() {
    return o.empty;
  }
  merge(e) {
    return null;
  }
  static fromJSON(e, t) {
    if (!t || !t.stepType) {
      throw RangeError("Invalid input for Step.fromJSON");
    }
    let n = l[t.stepType];
    if (!n) {
      throw RangeError(`No step type ${t.stepType} defined`);
    }
    return n.fromJSON(e, t);
  }
  static jsonID(e, t) {
    if (e in l) {
      throw RangeError("Duplicate use of step JSON ID " + e);
    }
    l[e] = t;
    t.prototype.jsonID = e;
    return t;
  }
}
class h {
  constructor(e, t) {
    this.doc = e;
    this.failed = t;
  }
  static ok(e) {
    return new h(e, null);
  }
  static fail(e) {
    return new h(null, e);
  }
  static fromReplace(e, t, n, i) {
    try {
      return h.ok(e.replace(t, n, i));
    } catch (error) {
      if (error instanceof vI) {
        return h.fail(error.message);
      }
      throw error;
    }
  }
}
function c(content, t, n) {
  let i = [];
  for (let r = 0; r < content.childCount; r++) {
    let o = content.child(r);
    if (o.content.size) {
      o = o.copy(c(o.content, t, o));
    }
    if (o.isInline) {
      o = t(o, n, r);
    }
    i.push(o);
  }
  return FK.fromArray(i);
}
class d extends a {
  constructor(e, t, n) {
    super();
    this.from = e;
    this.to = t;
    this.mark = n;
  }
  apply(e) {
    let t = e.slice(this.from, this.to);
    let n = e.resolve(this.from);
    let i = n.node(n.sharedDepth(this.to));
    let o = new Ji(
      c(
        t.content,
        (e, t) => {
          if (e.isAtom && t.type.allowsMarkType(this.mark.type)) {
            return e.mark(this.mark.addToSet(e.marks));
          }
          return e;
        },
        i,
      ),
      t.openStart,
      t.openEnd,
    );
    return h.fromReplace(e, this.from, this.to, o);
  }
  invert() {
    return new Ys(this.from, this.to, this.mark);
  }
  map(e) {
    let t = e.mapResult(this.from, 1);
    let n = e.mapResult(this.to, -1);
    if ((t.deleted && n.deleted) || t.pos >= n.pos) {
      return null;
    }
    return new d(t.pos, n.pos, this.mark);
  }
  merge(e) {
    if (
      e instanceof d &&
      e.mark.eq(this.mark) &&
      this.from <= e.to &&
      this.to >= e.from
    ) {
      return new d(
        Math.min(this.from, e.from),
        Math.max(this.to, e.to),
        this.mark,
      );
    }
    return null;
  }
  toJSON() {
    return {
      stepType: "addMark",
      mark: this.mark.toJSON(),
      from: this.from,
      to: this.to,
    };
  }
  static fromJSON(e, t) {
    if (typeof t.from !== "number" || typeof t.to !== "number") {
      throw RangeError("Invalid input for AddMarkStep.fromJSON");
    }
    return new d(t.from, t.to, e.markFromJSON(t.mark));
  }
}
a.jsonID("addMark", d);
export class Ys extends a {
  constructor(e, t, n) {
    super();
    this.from = e;
    this.to = t;
    this.mark = n;
  }
  apply(e) {
    let t = e.slice(this.from, this.to);
    let n = new Ji(
      c(t.content, (e) => e.mark(this.mark.removeFromSet(e.marks)), e),
      t.openStart,
      t.openEnd,
    );
    return h.fromReplace(e, this.from, this.to, n);
  }
  invert() {
    return new d(this.from, this.to, this.mark);
  }
  map(e) {
    let t = e.mapResult(this.from, 1);
    let n = e.mapResult(this.to, -1);
    if ((t.deleted && n.deleted) || t.pos >= n.pos) {
      return null;
    }
    return new Ys(t.pos, n.pos, this.mark);
  }
  merge(e) {
    if (
      e instanceof Ys &&
      e.mark.eq(this.mark) &&
      this.from <= e.to &&
      this.to >= e.from
    ) {
      return new Ys(
        Math.min(this.from, e.from),
        Math.max(this.to, e.to),
        this.mark,
      );
    }
    return null;
  }
  toJSON() {
    return {
      stepType: "removeMark",
      mark: this.mark.toJSON(),
      from: this.from,
      to: this.to,
    };
  }
  static fromJSON(e, t) {
    if (typeof t.from !== "number" || typeof t.to !== "number") {
      throw RangeError("Invalid input for RemoveMarkStep.fromJSON");
    }
    return new Ys(t.from, t.to, e.markFromJSON(t.mark));
  }
}
a.jsonID("removeMark", Ys);
class f extends a {
  constructor(e, t) {
    super();
    this.pos = e;
    this.mark = t;
  }
  apply(e) {
    let t = e.nodeAt(this.pos);
    if (!t) {
      return h.fail("No node at mark step's position");
    }
    let n = t.type.create(t.attrs, null, this.mark.addToSet(t.marks));
    return h.fromReplace(
      e,
      this.pos,
      this.pos + 1,
      new Ji(FK.from(n), 0, +!t.isLeaf),
    );
  }
  invert(e) {
    let t = e.nodeAt(this.pos);
    if (t) {
      let e = this.mark.addToSet(t.marks);
      if (e.length == t.marks.length) {
        for (let n = 0; n < t.marks.length; n++) {
          if (!t.marks[n].isInSet(e)) {
            return new f(this.pos, t.marks[n]);
          }
        }
        return new f(this.pos, this.mark);
      }
    }
    return new u(this.pos, this.mark);
  }
  map(e) {
    let t = e.mapResult(this.pos, 1);
    if (t.deletedAfter) {
      return null;
    }
    return new f(t.pos, this.mark);
  }
  toJSON() {
    return {
      stepType: "addNodeMark",
      pos: this.pos,
      mark: this.mark.toJSON(),
    };
  }
  static fromJSON(e, t) {
    if (typeof t.pos !== "number") {
      throw RangeError("Invalid input for AddNodeMarkStep.fromJSON");
    }
    return new f(t.pos, e.markFromJSON(t.mark));
  }
}
a.jsonID("addNodeMark", f);
class u extends a {
  constructor(e, t) {
    super();
    this.pos = e;
    this.mark = t;
  }
  apply(e) {
    let t = e.nodeAt(this.pos);
    if (!t) {
      return h.fail("No node at mark step's position");
    }
    let n = t.type.create(t.attrs, null, this.mark.removeFromSet(t.marks));
    return h.fromReplace(
      e,
      this.pos,
      this.pos + 1,
      new Ji(FK.from(n), 0, +!t.isLeaf),
    );
  }
  invert(e) {
    let t = e.nodeAt(this.pos);
    if (t && this.mark.isInSet(t.marks)) {
      return new f(this.pos, this.mark);
    }
    return this;
  }
  map(e) {
    let t = e.mapResult(this.pos, 1);
    if (t.deletedAfter) {
      return null;
    }
    return new u(t.pos, this.mark);
  }
  toJSON() {
    return {
      stepType: "removeNodeMark",
      pos: this.pos,
      mark: this.mark.toJSON(),
    };
  }
  static fromJSON(e, t) {
    if (typeof t.pos !== "number") {
      throw RangeError("Invalid input for RemoveNodeMarkStep.fromJSON");
    }
    return new u(t.pos, e.markFromJSON(t.mark));
  }
}
a.jsonID("removeNodeMark", u);
export class Ln extends a {
  constructor(e, t, n, r = false) {
    super();
    this.from = e;
    this.to = t;
    this.slice = n;
    this.structure = r;
  }
  apply(e) {
    if (this.structure && y(e, this.from, this.to)) {
      return h.fail("Structure replace would overwrite content");
    }
    return h.fromReplace(e, this.from, this.to, this.slice);
  }
  getMap() {
    return new o([this.from, this.to - this.from, this.slice.size]);
  }
  invert(e) {
    return new Ln(
      this.from,
      this.from + this.slice.size,
      e.slice(this.from, this.to),
    );
  }
  map(e) {
    let t = e.mapResult(this.from, 1);
    let n = e.mapResult(this.to, -1);
    if (t.deletedAcross && n.deletedAcross) {
      return null;
    }
    return new Ln(t.pos, Math.max(t.pos, n.pos), this.slice, this.structure);
  }
  merge(e) {
    if (!(e instanceof Ln) || e.structure || this.structure) {
      return null;
    }
    if (
      this.from + this.slice.size != e.from ||
      this.slice.openEnd ||
      e.slice.openStart
    ) {
      if (e.to != this.from || this.slice.openStart || e.slice.openEnd) {
        return null;
      } else {
        let t =
          this.slice.size + e.slice.size == 0
            ? Ji.empty
            : new Ji(
                e.slice.content.append(this.slice.content),
                e.slice.openStart,
                this.slice.openEnd,
              );
        return new Ln(e.from, this.to, t, this.structure);
      }
    }
    {
      let t =
        this.slice.size + e.slice.size == 0
          ? Ji.empty
          : new Ji(
              this.slice.content.append(e.slice.content),
              this.slice.openStart,
              e.slice.openEnd,
            );
      return new Ln(this.from, this.to + (e.to - e.from), t, this.structure);
    }
  }
  toJSON() {
    let e = {
      stepType: "replace",
      from: this.from,
      to: this.to,
    };
    if (this.slice.size) {
      e.slice = this.slice.toJSON();
    }
    if (this.structure) {
      e.structure = true;
    }
    return e;
  }
  static fromJSON(e, t) {
    if (typeof t.from !== "number" || typeof t.to !== "number") {
      throw RangeError("Invalid input for ReplaceStep.fromJSON");
    }
    return new Ln(t.from, t.to, Ji.fromJSON(e, t.slice), !!t.structure);
  }
}
a.jsonID("replace", Ln);
export class Wg extends a {
  constructor(e, t, n, r, i, o, s = false) {
    super();
    this.from = e;
    this.to = t;
    this.gapFrom = n;
    this.gapTo = r;
    this.slice = i;
    this.insert = o;
    this.structure = s;
  }
  apply(e) {
    if (
      this.structure &&
      (y(e, this.from, this.gapFrom) || y(e, this.gapTo, this.to))
    ) {
      return h.fail("Structure gap-replace would overwrite content");
    }
    let t = e.slice(this.gapFrom, this.gapTo);
    if (t.openStart || t.openEnd) {
      return h.fail("Gap is not a flat range");
    }
    let n = this.slice.insertAt(this.insert, t.content);
    if (n) {
      return h.fromReplace(e, this.from, this.to, n);
    }
    return h.fail("Content does not fit in gap");
  }
  getMap() {
    return new o([
      this.from,
      this.gapFrom - this.from,
      this.insert,
      this.gapTo,
      this.to - this.gapTo,
      this.slice.size - this.insert,
    ]);
  }
  invert(e) {
    let t = this.gapTo - this.gapFrom;
    return new Wg(
      this.from,
      this.from + this.slice.size + t,
      this.from + this.insert,
      this.from + this.insert + t,
      e
        .slice(this.from, this.to)
        .removeBetween(this.gapFrom - this.from, this.gapTo - this.from),
      this.gapFrom - this.from,
      this.structure,
    );
  }
  map(e) {
    let t = e.mapResult(this.from, 1);
    let n = e.mapResult(this.to, -1);
    let r = this.from == this.gapFrom ? t.pos : e.map(this.gapFrom, -1);
    let i = this.to == this.gapTo ? n.pos : e.map(this.gapTo, 1);
    if ((t.deletedAcross && n.deletedAcross) || r < t.pos || i > n.pos) {
      return null;
    }
    return new Wg(t.pos, n.pos, r, i, this.slice, this.insert, this.structure);
  }
  toJSON() {
    let e = {
      stepType: "replaceAround",
      from: this.from,
      to: this.to,
      gapFrom: this.gapFrom,
      gapTo: this.gapTo,
      insert: this.insert,
    };
    if (this.slice.size) {
      e.slice = this.slice.toJSON();
    }
    if (this.structure) {
      e.structure = true;
    }
    return e;
  }
  static fromJSON(e, t) {
    if (
      typeof t.from !== "number" ||
      typeof t.to !== "number" ||
      typeof t.gapFrom !== "number" ||
      typeof t.gapTo !== "number" ||
      typeof t.insert !== "number"
    ) {
      throw RangeError("Invalid input for ReplaceAroundStep.fromJSON");
    }
    return new Wg(
      t.from,
      t.to,
      t.gapFrom,
      t.gapTo,
      Ji.fromJSON(e, t.slice),
      t.insert,
      !!t.structure,
    );
  }
}
function y(e, t, n) {
  let r = e.resolve(t);
  let i = n - t;
  let r_depth = r.depth;
  while (
    i > 0 &&
    r_depth > 0 &&
    r.indexAfter(r_depth) == r.node(r_depth).childCount
  ) {
    r_depth--;
    i--;
  }
  if (i > 0) {
    let e = r.node(r_depth).maybeChild(r.indexAfter(r_depth));
    while (i > 0) {
      if (!e || e.isLeaf) {
        return true;
      }
      e = e.firstChild;
      i--;
    }
  }
  return false;
}
function w(e, t, n, i = n.contentMatch, o = true) {
  let s = e.doc.nodeAt(t);
  let l = [];
  let a = t + 1;
  for (let t = 0; t < s.childCount; t++) {
    let h = s.child(t);
    let c = a + h.nodeSize;
    let d = i.matchType(h.type);
    if (d) {
      i = d;
      for (let t = 0; t < h.marks.length; t++) {
        if (!n.allowsMarkType(h.marks[t].type)) {
          e.step(new Ys(a, c, h.marks[t]));
        }
      }
      if (o && h.isText && n.whitespace != "pre") {
        let e;
        let t = /\r?\n|\r/g;
        let i;
        while ((e = t.exec(h.text))) {
          if (!i) {
            i = new Ji(
              FK.from(n.schema.text(" ", n.allowedMarks(h.marks))),
              0,
              0,
            );
          }
          l.push(new Ln(a + e.index, a + e.index + e[0].length, i));
        }
      }
    } else {
      l.push(new Ln(a, c, Ji.empty));
    }
    a = c;
  }
  if (!i.validEnd) {
    let t = i.fillBefore(FK.empty, true);
    e.replace(a, a, new Ji(t, 0, 0));
  }
  for (let t = l.length - 1; t >= 0; t--) {
    e.step(l[t]);
  }
}
export function jP(e) {
  let t = e.parent.content.cutByIndex(e.startIndex, e.endIndex);
  for (let n = e.depth; ; --n) {
    let r = e.$from.node(n);
    let i = e.$from.index(n);
    let o = e.$to.indexAfter(n);
    if (n < e.depth && r.canReplace(i, o, t)) {
      return n;
    }
    if (
      n == 0 ||
      r.type.spec.isolating ||
      !(
        (i == 0 || r.canReplace(i, r.childCount)) &&
        (o == r.childCount || r.canReplace(0, o))
      )
    ) {
      break;
    }
  }
  return null;
}
export function oM(e, t, attrs = null, r = e) {
  let i = ((e, t) => {
    let { parent, startIndex, endIndex } = e;
    let o = parent.contentMatchAt(startIndex).findWrapping(t);
    if (!o) {
      return null;
    }
    let s = o.length ? o[0] : t;
    if (parent.canReplaceWith(startIndex, endIndex, s)) {
      return o;
    }
    return null;
  })(e, t);
  let o =
    i &&
    ((e, t) => {
      let { parent, startIndex, endIndex } = e;
      let o = parent.child(startIndex);
      let s = t.contentMatch.findWrapping(o.type);
      if (!s) {
        return null;
      }
      let contentMatch = (s.length ? s[s.length - 1] : t).contentMatch;
      for (let e = startIndex; contentMatch && e < endIndex; e++) {
        contentMatch = contentMatch.matchType(parent.child(e).type);
      }
      if (contentMatch && contentMatch.validEnd) {
        return s;
      }
      return null;
    })(r, t);
  if (o) {
    return i
      .map(x)
      .concat({
        type: t,
        attrs,
      })
      .concat(o.map(x));
  }
  return null;
}
function x(type) {
  return {
    type,
    attrs: null,
  };
}
function v(e, t, n, r) {
  t.forEach((i, o) => {
    if (i.isText) {
      let s;
      let l = /\r?\n|\r/g;
      while ((s = l.exec(i.text))) {
        let i = e.mapping.slice(r).map(n + 1 + o + s.index);
        e.replaceWith(i, i + 1, t.type.schema.linebreakReplacement.create());
      }
    }
  });
}
function S(e, t, n, r) {
  t.forEach((i, o) => {
    if (i.type == i.type.schema.linebreakReplacement) {
      let i = e.mapping.slice(r).map(n + 1 + o);
      e.replaceWith(i, i + 1, t.type.schema.text("\n"));
    }
  });
}
export function zy(e, t, n = 1, r) {
  let i = e.resolve(t);
  let o = i.depth - n;
  let s = (r && r[r.length - 1]) || i.parent;
  if (
    o < 0 ||
    i.parent.type.spec.isolating ||
    !i.parent.canReplace(i.index(), i.parent.childCount) ||
    !s.type.validContent(
      i.parent.content.cutByIndex(i.index(), i.parent.childCount),
    )
  ) {
    return false;
  }
  for (let e = i.depth - 1, t = n - 2; e > o; e--, t--) {
    let n = i.node(e);
    let o = i.index(e);
    if (n.type.spec.isolating) {
      return false;
    }
    let s = n.content.cutByIndex(o, n.childCount);
    let l = r && r[t + 1];
    if (l) {
      s = s.replaceChild(0, l.type.create(l.attrs));
    }
    let a = (r && r[t]) || n;
    if (!n.canReplace(o + 1, n.childCount) || !a.type.validContent(s)) {
      return false;
    }
  }
  let l = i.indexAfter(o);
  let a = r && r[0];
  return i.node(o).canReplaceWith(l, l, a ? a.type : i.node(o + 1).type);
}
export function n9(e, t) {
  let n = e.resolve(t);
  let r = n.index();
  return M(n.nodeBefore, n.nodeAfter) && n.parent.canReplace(r, r + 1);
}
function M(e, t) {
  return !!(
    e &&
    t &&
    !e.isLeaf &&
    ((e, t) => {
      if (!t.content.size) {
        e.type.compatibleContent(t.type);
      }
      let n = e.contentMatchAt(e.childCount);
      let { linebreakReplacement } = e.type.schema;
      for (let i = 0; i < t.childCount; i++) {
        let o = t.child(i);
        let s =
          o.type == linebreakReplacement ? e.type.schema.nodes.text : o.type;
        if (!(n = n.matchType(s)) || !e.type.allowsMarks(o.marks)) {
          return false;
        }
      }
      return n.validEnd;
    })(e, t)
  );
}
export function N0(e, t, n = -1) {
  let r = e.resolve(t);
  for (let e = r.depth; ; e--) {
    let i;
    let o;
    let s = r.index(e);
    if (e == r.depth) {
      i = r.nodeBefore;
      o = r.nodeAfter;
    } else if (n > 0) {
      i = r.node(e + 1);
      s++;
      o = r.node(e).maybeChild(s);
    } else {
      i = r.node(e).maybeChild(s - 1);
      o = r.node(e + 1);
    }
    if (i && !i.isTextblock && M(i, o) && r.node(e).canReplace(s, s + 1)) {
      return t;
    }
    if (e == 0) {
      break;
    }
    t = n < 0 ? r.before(e) : r.after(e);
  }
}
export function Um(e, t, n) {
  let r = e.resolve(t);
  if (!n.content.size) {
    return t;
  }
  let n_content = n.content;
  for (let e = 0; e < n.openStart; e++) {
    n_content = n_content.firstChild.content;
  }
  for (let e = 1; e <= (n.openStart == 0 && n.size ? 2 : 1); e++) {
    for (let t = r.depth; t >= 0; t--) {
      let n =
        t == r.depth
          ? 0
          : r.pos <= (r.start(t + 1) + r.end(t + 1)) / 2
            ? -1
            : 1;
      let o = r.index(t) + +(n > 0);
      let s = r.node(t);
      let l = false;
      if (e == 1) {
        l = s.canReplace(o, o, n_content);
      } else {
        let e = s.contentMatchAt(o).findWrapping(n_content.firstChild.type);
        l = e && s.canReplaceWith(o, o, e[0]);
      }
      if (l) {
        if (n == 0) {
          return r.pos;
        }
        if (n < 0) {
          return r.before(t + 1);
        }
        return r.after(t + 1);
      }
    }
  }
  return null;
}
export function $L(e, t, n = t, i = Ji.empty) {
  if (t == n && !i.size) {
    return null;
  }
  let o = e.resolve(t);
  let s = e.resolve(n);
  if (E(o, s, i)) {
    return new Ln(t, n, i);
  }
  return new A(o, s, i).fit();
}
function E(e, t, n) {
  return (
    !n.openStart &&
    !n.openEnd &&
    e.start() == t.start() &&
    e.parent.canReplace(e.index(), t.index(), n.content)
  );
}
a.jsonID("replaceAround", Wg);
class A {
  constructor(e, t, n) {
    this.$from = e;
    this.$to = t;
    this.unplaced = n;
    this.frontier = [];
    this.placed = FK.empty;
    for (let t = 0; t <= e.depth; t++) {
      let n = e.node(t);
      this.frontier.push({
        type: n.type,
        match: n.contentMatchAt(e.indexAfter(t)),
      });
    }
    for (let t = e.depth; t > 0; t--) {
      this.placed = FK.from(e.node(t).copy(this.placed));
    }
  }
  get depth() {
    return this.frontier.length - 1;
  }
  fit() {
    while (this.unplaced.size) {
      let e = this.findFittable();
      if (e) {
        this.placeNodes(e);
      } else if (!this.openMore()) {
        this.dropNode();
      }
    }
    let e = this.mustMoveInline();
    let t = this.placed.size - this.depth - this.$from.depth;
    let $from = this.$from;
    let i = this.close(e < 0 ? this.$to : $from.doc.resolve(e));
    if (!i) {
      return null;
    }
    let placed = this.placed;
    let n_depth = $from.depth;
    let i_depth = i.depth;
    while (n_depth && i_depth && placed.childCount == 1) {
      placed = placed.firstChild.content;
      n_depth--;
      i_depth--;
    }
    let a = new Ji(placed, n_depth, i_depth);
    if (e > -1) {
      return new Wg($from.pos, e, this.$to.pos, this.$to.end(), a, t);
    }
    if (a.size || $from.pos != this.$to.pos) {
      return new Ln($from.pos, i.pos, a);
    }
    return null;
  }
  findFittable() {
    let openStart = this.unplaced.openStart;
    for (
      let t = this.unplaced.content, n = 0, r = this.unplaced.openEnd;
      n < openStart;
      n++
    ) {
      let i = t.firstChild;
      if (t.childCount > 1) {
        r = 0;
      }
      if (i.type.spec.isolating && r <= n) {
        openStart = n;
        break;
      }
      t = i.content;
    }
    for (let t = 1; t <= 2; t++) {
      for (
        let sliceDepth = t == 1 ? openStart : this.unplaced.openStart;
        sliceDepth >= 0;
        sliceDepth--
      ) {
        let parent = null;
        let i = (
          sliceDepth
            ? (parent = z(this.unplaced.content, sliceDepth - 1).firstChild)
                .content
            : this.unplaced.content
        ).firstChild;
        for (
          let frontierDepth = this.depth;
          frontierDepth >= 0;
          frontierDepth--
        ) {
          let { type, match } = this.frontier[frontierDepth];
          let wrap;
          let inject = null;
          if (
            t == 1 &&
            (i
              ? match.matchType(i.type) ||
                (inject = match.fillBefore(FK.from(i), false))
              : parent && type.compatibleContent(parent.type))
          ) {
            return {
              sliceDepth,
              frontierDepth,
              parent,
              inject,
            };
          }
          if (t == 2 && i && (wrap = match.findWrapping(i.type))) {
            return {
              sliceDepth,
              frontierDepth,
              parent,
              wrap,
            };
          }
          if (parent && match.matchType(parent.type)) {
            break;
          }
        }
      }
    }
  }
  openMore() {
    let { content, openStart, openEnd } = this.unplaced;
    let i = z(content, openStart);
    return (
      !!i.childCount &&
      !i.firstChild.isLeaf &&
      ((this.unplaced = new Ji(
        content,
        openStart + 1,
        Math.max(
          openEnd,
          i.size + openStart >= content.size - openEnd ? openStart + 1 : 0,
        ),
      )),
      true)
    );
  }
  dropNode() {
    let { content, openStart, openEnd } = this.unplaced;
    let i = z(content, openStart);
    if (i.childCount <= 1 && openStart > 0) {
      let o = content.size - openStart <= openStart + i.size;
      this.unplaced = new Ji(
        R(content, openStart - 1, 1),
        openStart - 1,
        o ? openStart - 1 : openEnd,
      );
    } else {
      this.unplaced = new Ji(R(content, openStart, 1), openStart, openEnd);
    }
  }
  placeNodes({ sliceDepth, frontierDepth, parent, inject, wrap }) {
    while (this.depth > frontierDepth) {
      this.closeFrontierNode();
    }
    if (wrap) {
      for (let e = 0; e < wrap.length; e++) {
        this.openFrontierNode(wrap[e]);
      }
    }
    let unplaced = this.unplaced;
    let l = parent ? parent.content : unplaced.content;
    let a = unplaced.openStart - sliceDepth;
    let h = 0;
    let c = [];
    let { match, type } = this.frontier[frontierDepth];
    if (inject) {
      for (let e = 0; e < inject.childCount; e++) {
        c.push(inject.child(e));
      }
      match = match.matchFragment(inject);
    }
    let f = l.size + sliceDepth - (unplaced.content.size - unplaced.openEnd);
    while (h < l.childCount) {
      let e = l.child(h);
      let t = match.matchType(e.type);
      if (!t) {
        break;
      }
      if (++h > 1 || a == 0 || e.content.size) {
        match = t;
        c.push(
          (function e(t, n, i) {
            if (n <= 0) {
              return t;
            }
            let t_content = t.content;
            if (n > 1) {
              t_content = t_content.replaceChild(
                0,
                e(
                  t_content.firstChild,
                  n - 1,
                  t_content.childCount == 1 ? i - 1 : 0,
                ),
              );
            }
            if (n > 0) {
              t_content = t.type.contentMatch
                .fillBefore(t_content)
                .append(t_content);
              if (i <= 0) {
                t_content = t_content.append(
                  t.type.contentMatch
                    .matchFragment(t_content)
                    .fillBefore(FK.empty, true),
                );
              }
            }
            return t.copy(t_content);
          })(
            e.mark(type.allowedMarks(e.marks)),
            h == 1 ? a : 0,
            h == l.childCount ? f : -1,
          ),
        );
      }
    }
    let u = h == l.childCount;
    if (!u) {
      f = -1;
    }
    this.placed = I(this.placed, frontierDepth, FK.from(c));
    this.frontier[frontierDepth].match = match;
    if (
      u &&
      f < 0 &&
      parent &&
      parent.type == this.frontier[this.depth].type &&
      this.frontier.length > 1
    ) {
      this.closeFrontierNode();
    }
    for (let e = 0, t = l; e < f; e++) {
      let e = t.lastChild;
      this.frontier.push({
        type: e.type,
        match: e.contentMatchAt(e.childCount),
      });
      t = e.content;
    }
    this.unplaced = u
      ? sliceDepth == 0
        ? Ji.empty
        : new Ji(
            R(unplaced.content, sliceDepth - 1, 1),
            sliceDepth - 1,
            f < 0 ? unplaced.openEnd : sliceDepth - 1,
          )
      : new Ji(
          R(unplaced.content, sliceDepth, h),
          unplaced.openStart,
          unplaced.openEnd,
        );
  }
  mustMoveInline() {
    if (!this.$to.parent.isTextblock) {
      return -1;
    }
    let e = this.frontier[this.depth];
    let t;
    if (
      !e.type.isTextblock ||
      !F(this.$to, this.$to.depth, e.type, e.match, false) ||
      (this.$to.depth == this.depth &&
        (t = this.findCloseLevel(this.$to)) &&
        t.depth == this.depth)
    ) {
      return -1;
    }
    let { depth } = this.$to;
    let r = this.$to.after(depth);
    while (depth > 1 && r == this.$to.end(--depth)) {
      ++r;
    }
    return r;
  }
  findCloseLevel(e) {
    t: for (let depth = Math.min(this.depth, e.depth); depth >= 0; depth--) {
      let { match, type } = this.frontier[depth];
      let i =
        depth < e.depth && e.end(depth + 1) == e.pos + (e.depth - (depth + 1));
      let fit = F(e, depth, type, match, i);
      if (fit) {
        for (let n = depth - 1; n >= 0; n--) {
          let { match: match_1, type: type_1 } = this.frontier[n];
          let i = F(e, n, type_1, match_1, true);
          if (!i || i.childCount) {
            continue t;
          }
        }
        return {
          depth,
          fit,
          move: i ? e.doc.resolve(e.after(depth + 1)) : e,
        };
      }
    }
  }
  close(e) {
    let t = this.findCloseLevel(e);
    if (!t) {
      return null;
    }
    while (this.depth > t.depth) {
      this.closeFrontierNode();
    }
    if (t.fit.childCount) {
      this.placed = I(this.placed, t.depth, t.fit);
    }
    e = t.move;
    for (let n = t.depth + 1; n <= e.depth; n++) {
      let t = e.node(n);
      let r = t.type.contentMatch.fillBefore(t.content, true, e.index(n));
      this.openFrontierNode(t.type, t.attrs, r);
    }
    return e;
  }
  openFrontierNode(e, t = null, n) {
    let i = this.frontier[this.depth];
    i.match = i.match.matchType(e);
    this.placed = I(this.placed, this.depth, FK.from(e.create(t, n)));
    this.frontier.push({
      type: e,
      match: e.contentMatch,
    });
  }
  closeFrontierNode() {
    let e = this.frontier.pop().match.fillBefore(FK.empty, true);
    if (e.childCount) {
      this.placed = I(this.placed, this.frontier.length, e);
    }
  }
}
function R(content, t, n) {
  if (t == 0) {
    return content.cutByIndex(n, content.childCount);
  }
  return content.replaceChild(
    0,
    content.firstChild.copy(R(content.firstChild.content, t - 1, n)),
  );
}
function I(e, t, n) {
  if (t == 0) {
    return e.append(n);
  }
  return e.replaceChild(
    e.childCount - 1,
    e.lastChild.copy(I(e.lastChild.content, t - 1, n)),
  );
}
function z(e, t) {
  for (let n = 0; n < t; n++) {
    e = e.firstChild.content;
  }
  return e;
}
function F(e, t, type, match, i) {
  let o = e.node(t);
  let s = i ? e.indexAfter(t) : e.index(t);
  if (s == o.childCount && !type.compatibleContent(o.type)) {
    return null;
  }
  let l = match.fillBefore(o.content, true, s);
  if (
    l &&
    !((e, t, n) => {
      for (let r = n; r < t.childCount; r++) {
        if (!e.allowsMarks(t.child(r).marks)) {
          return true;
        }
      }
      return false;
    })(type, o.content, s)
  ) {
    return l;
  }
  return null;
}
function P(e, t) {
  let n = [];
  let r = Math.min(e.depth, t.depth);
  for (let i = r; i >= 0; i--) {
    let r = e.start(i);
    if (
      r < e.pos - (e.depth - i) ||
      t.end(i) > t.pos + (t.depth - i) ||
      e.node(i).type.spec.isolating ||
      t.node(i).type.spec.isolating
    ) {
      break;
    }
    if (
      r == t.start(i) ||
      (i == e.depth &&
        i == t.depth &&
        e.parent.inlineContent &&
        t.parent.inlineContent &&
        i &&
        t.start(i - 1) == r - 1)
    ) {
      n.push(i);
    }
  }
  return n;
}
class B extends a {
  constructor(e, t, n) {
    super();
    this.pos = e;
    this.attr = t;
    this.value = n;
  }
  apply(e) {
    let t = e.nodeAt(this.pos);
    if (!t) {
      return h.fail("No node at attribute step's position");
    }
    let n = Object.create(null);
    for (let e in t.attrs) {
      n[e] = t.attrs[e];
    }
    n[this.attr] = this.value;
    let i = t.type.create(n, null, t.marks);
    return h.fromReplace(
      e,
      this.pos,
      this.pos + 1,
      new Ji(FK.from(i), 0, +!t.isLeaf),
    );
  }
  getMap() {
    return o.empty;
  }
  invert(e) {
    return new B(this.pos, this.attr, e.nodeAt(this.pos).attrs[this.attr]);
  }
  map(e) {
    let t = e.mapResult(this.pos, 1);
    if (t.deletedAfter) {
      return null;
    }
    return new B(t.pos, this.attr, this.value);
  }
  toJSON() {
    return {
      stepType: "attr",
      pos: this.pos,
      attr: this.attr,
      value: this.value,
    };
  }
  static fromJSON(e, t) {
    if (typeof t.pos !== "number" || typeof t.attr !== "string") {
      throw RangeError("Invalid input for AttrStep.fromJSON");
    }
    return new B(t.pos, t.attr, t.value);
  }
}
a.jsonID("attr", B);
class V extends a {
  constructor(e, t) {
    super();
    this.attr = e;
    this.value = t;
  }
  apply(e) {
    let t = Object.create(null);
    for (let n in e.attrs) {
      t[n] = e.attrs[n];
    }
    t[this.attr] = this.value;
    let n = e.type.create(t, e.content, e.marks);
    return h.ok(n);
  }
  getMap() {
    return o.empty;
  }
  invert(e) {
    return new V(this.attr, e.attrs[this.attr]);
  }
  map(e) {
    return this;
  }
  toJSON() {
    return {
      stepType: "docAttr",
      attr: this.attr,
      value: this.value,
    };
  }
  static fromJSON(e, t) {
    if (typeof t.attr !== "string") {
      throw RangeError("Invalid input for DocAttrStep.fromJSON");
    }
    return new V(t.attr, t.value);
  }
}
a.jsonID("docAttr", V);
let $ = class extends Error {};
$ = function e(t) {
  let n = Error.call(this, t);
  n.__proto__ = e.prototype;
  return n;
};
$.prototype = Object.create(Error.prototype);
$.prototype.constructor = $;
$.prototype.name = "TransformError";
export class dL {
  constructor(e) {
    this.doc = e;
    this.steps = [];
    this.docs = [];
    this.mapping = new X9();
  }
  get before() {
    if (this.docs.length) {
      return this.docs[0];
    }
    return this.doc;
  }
  step(e) {
    let t = this.maybeStep(e);
    if (t.failed) {
      throw new $(t.failed);
    }
    return this;
  }
  maybeStep(e) {
    let t = e.apply(this.doc);
    if (!t.failed) {
      this.addStep(e, t.doc);
    }
    return t;
  }
  get docChanged() {
    return this.steps.length > 0;
  }
  addStep(e, t) {
    this.docs.push(this.doc);
    this.steps.push(e);
    this.mapping.appendMap(e.getMap());
    this.doc = t;
  }
  replace(e, t = e, n = Ji.empty) {
    let i = $L(this.doc, e, t, n);
    if (i) {
      this.step(i);
    }
    return this;
  }
  replaceWith(e, t, n) {
    return this.replace(e, t, new Ji(FK.from(n), 0, 0));
  }
  delete(e, t) {
    return this.replace(e, t, Ji.empty);
  }
  insert(e, t) {
    return this.replaceWith(e, e, t);
  }
  replaceRange(e, t, n) {
    ((e, t, n, i) => {
      if (!i.size) {
        return e.deleteRange(t, n);
      }
      let o = e.doc.resolve(t);
      let s = e.doc.resolve(n);
      if (E(o, s, i)) {
        return e.step(new Ln(t, n, i));
      }
      let l = P(o, e.doc.resolve(n));
      if (l[l.length - 1] == 0) {
        l.pop();
      }
      let a = -(o.depth + 1);
      l.unshift(a);
      for (let e = o.depth, t = o.pos - 1; e > 0; e--, t--) {
        let n = o.node(e).type.spec;
        if (n.defining || n.definingAsContext || n.isolating) {
          break;
        }
        if (l.indexOf(e) > -1) {
          a = e;
        } else if (o.before(e) == t) {
          l.splice(1, 0, -e);
        }
      }
      let h = l.indexOf(a);
      let c = [];
      let i_openStart = i.openStart;
      for (let e = i.content, t = 0; ; t++) {
        let n = e.firstChild;
        c.push(n);
        if (t == i.openStart) {
          break;
        }
        e = n.content;
      }
      for (let e = i_openStart - 1; e >= 0; e--) {
        let p;
        let t = c[e];
        let n = (p = t.type).spec.defining || p.spec.definingForContent;
        if (n && !t.sameMarkup(o.node(Math.abs(a) - 1))) {
          i_openStart = e;
        } else if (n || !t.type.isTextblock) {
          break;
        }
      }
      for (let t = i.openStart; t >= 0; t--) {
        let a = (t + i_openStart + 1) % (i.openStart + 1);
        let p = c[a];
        if (p) {
          for (let t = 0; t < l.length; t++) {
            let c = l[(t + h) % l.length];
            let d = true;
            if (c < 0) {
              d = false;
              c = -c;
            }
            let f = o.node(c - 1);
            let u = o.index(c - 1);
            if (f.canReplaceWith(u, u, p.type, p.marks)) {
              return e.replace(
                o.before(c),
                d ? s.after(c) : n,
                new Ji(
                  (function e(t, n, i, o, s) {
                    if (n < i) {
                      let r = t.firstChild;
                      t = t.replaceChild(
                        0,
                        r.copy(e(r.content, n + 1, i, o, r)),
                      );
                    }
                    if (n > o) {
                      let e = s.contentMatchAt(0);
                      let n = e.fillBefore(t).append(t);
                      t = n.append(
                        e.matchFragment(n).fillBefore(FK.empty, true),
                      );
                    }
                    return t;
                  })(i.content, 0, i.openStart, a),
                  a,
                  i.openEnd,
                ),
              );
            }
          }
        }
      }
      let length = e.steps.length;
      for (
        let r = l.length - 1;
        r >= 0 && (e.replace(t, n, i), !(e.steps.length > length));
        r--
      ) {
        let e = l[r];
        if (!(e < 0)) {
          t = o.before(e);
          n = s.after(e);
        }
      }
    })(this, e, t, n);
    return this;
  }
  replaceRangeWith(e, t, n) {
    let i = e;
    let o = t;
    if (!n.isInline && i == o && this.doc.resolve(i).parent.content.size) {
      let e = ((e, t, n) => {
        let r = e.resolve(t);
        if (r.parent.canReplaceWith(r.index(), r.index(), n)) {
          return t;
        }
        if (r.parentOffset == 0) {
          for (let e = r.depth - 1; e >= 0; e--) {
            let t = r.index(e);
            if (r.node(e).canReplaceWith(t, t, n)) {
              return r.before(e + 1);
            }
            if (t > 0) {
              return null;
            }
          }
        }
        if (r.parentOffset == r.parent.content.size) {
          for (let e = r.depth - 1; e >= 0; e--) {
            let t = r.indexAfter(e);
            if (r.node(e).canReplaceWith(t, t, n)) {
              return r.after(e + 1);
            }
            if (t < r.node(e).childCount) {
              break;
            }
          }
        }
        return null;
      })(this.doc, i, n.type);
      if (e != null) {
        o = e;
        i = e;
      }
    }
    this.replaceRange(i, o, new Ji(FK.from(n), 0, 0));
    return this;
  }
  deleteRange(e, t) {
    ((e, t, n) => {
      let r = e.doc.resolve(t);
      let i = e.doc.resolve(n);
      let o = P(r, i);
      for (let t = 0; t < o.length; t++) {
        let n = o[t];
        let s = t == o.length - 1;
        if ((s && n == 0) || r.node(n).type.contentMatch.validEnd) {
          return e.delete(r.start(n), i.end(n));
        }
        if (
          n > 0 &&
          (s || r.node(n - 1).canReplace(r.index(n - 1), i.indexAfter(n - 1)))
        ) {
          return e.delete(r.before(n), i.after(n));
        }
      }
      for (let o = 1; o <= r.depth && o <= i.depth; o++) {
        if (
          t - r.start(o) == r.depth - o &&
          n > r.end(o) &&
          i.end(o) - n != i.depth - o &&
          r.start(o - 1) == i.start(o - 1) &&
          r.node(o - 1).canReplace(r.index(o - 1), i.index(o - 1))
        ) {
          return e.delete(r.before(o), n);
        }
      }
      e.delete(t, n);
    })(this, e, t);
    return this;
  }
  lift(e, t) {
    ((e, t, n) => {
      let { $from, $to, depth } = t;
      let l = $from.before(depth + 1);
      let a = $to.after(depth + 1);
      let h = l;
      let c = a;
      let FK_empty = FK.empty;
      let p = 0;
      for (let e = depth, t = false; e > n; e--) {
        if (t || $from.index(e) > 0) {
          t = true;
          FK_empty = FK.from($from.node(e).copy(FK_empty));
          p++;
        } else {
          h--;
        }
      }
      let FK_empty_1 = FK.empty;
      let u = 0;
      for (let e = depth, t = false; e > n; e--) {
        if (t || $to.after(e + 1) < $to.end(e)) {
          t = true;
          FK_empty_1 = FK.from($to.node(e).copy(FK_empty_1));
          u++;
        } else {
          c++;
        }
      }
      e.step(
        new Wg(
          h,
          c,
          l,
          a,
          new Ji(FK_empty.append(FK_empty_1), p, u),
          FK_empty.size - p,
          true,
        ),
      );
    })(this, e, t);
    return this;
  }
  join(e, t = 1) {
    ((e, t, n) => {
      let i = null;
      let { linebreakReplacement } = e.doc.type.schema;
      let s = e.doc.resolve(t - n);
      let type = s.node().type;
      if (linebreakReplacement && type.inlineContent) {
        let e = type.whitespace == "pre";
        let t = !!type.contentMatch.matchType(linebreakReplacement);
        if (e && !t) {
          i = false;
        } else if (!e && t) {
          i = true;
        }
      }
      let length = e.steps.length;
      if (i === false) {
        let r = e.doc.resolve(t + n);
        S(e, r.node(), r.before(), length);
      }
      if (type.inlineContent) {
        w(e, t + n - 1, type, s.node().contentMatchAt(s.index()), i == null);
      }
      let h = e.mapping.slice(length);
      let c = h.map(t - n);
      e.step(new Ln(c, h.map(t + n, -1), Ji.empty, true));
      if (i === true) {
        let t = e.doc.resolve(c);
        v(e, t.node(), t.before(), e.steps.length);
      }
    })(this, e, t);
    return this;
  }
  wrap(e, t) {
    ((e, t, n) => {
      let FK_empty = FK.empty;
      for (let e = n.length - 1; e >= 0; e--) {
        if (FK_empty.size) {
          let t = n[e].type.contentMatch.matchFragment(FK_empty);
          if (!t || !t.validEnd) {
            throw RangeError(
              "Wrapper type given to Transform.wrap does not form valid content of its parent wrapper",
            );
          }
        }
        FK_empty = FK.from(n[e].type.create(n[e].attrs, FK_empty));
      }
      let t_start = t.start;
      let t_end = t.end;
      e.step(
        new Wg(
          t_start,
          t_end,
          t_start,
          t_end,
          new Ji(FK_empty, 0, 0),
          n.length,
          true,
        ),
      );
    })(this, e, t);
    return this;
  }
  setBlockType(e, t = e, n, i = null) {
    const o = this;
    if (!n.isTextblock) {
      throw RangeError("Type given to setBlockType should be a textblock");
    }
    let length = o.steps.length;
    o.doc.nodesBetween(e, t, (e, t) => {
      var l;
      var a;
      var h;
      let c;
      let d;
      let p = typeof i === "function" ? i(e) : i;
      if (
        e.isTextblock &&
        !e.hasMarkup(n, p) &&
        ((l = o.doc),
        (a = o.mapping.slice(length).map(t)),
        (h = n),
        (d = (c = l.resolve(a)).index()),
        c.parent.canReplaceWith(d, d + 1, h))
      ) {
        let i = null;
        if (n.schema.linebreakReplacement) {
          let e = n.whitespace == "pre";
          let t = !!n.contentMatch.matchType(n.schema.linebreakReplacement);
          if (e && !t) {
            i = false;
          } else if (!e && t) {
            i = true;
          }
        }
        if (i === false) {
          S(o, e, t, length);
        }
        w(o, o.mapping.slice(length).map(t, 1), n, undefined, i === null);
        let l = o.mapping.slice(length);
        let a = l.map(t, 1);
        let h = l.map(t + e.nodeSize, 1);
        o.step(
          new Wg(
            a,
            h,
            a + 1,
            h - 1,
            new Ji(FK.from(n.create(p, null, e.marks)), 0, 0),
            1,
            true,
          ),
        );
        if (i === true) {
          v(o, e, t, length);
        }
        return false;
      }
    });
    return this;
  }
  setNodeMarkup(e, t, n = null, i) {
    ((e, t, n, i, o) => {
      let s = e.doc.nodeAt(t);
      if (!s) {
        throw RangeError("No node at given position");
      }
      if (!n) {
        n = s.type;
      }
      let l = n.create(i, null, o || s.marks);
      if (s.isLeaf) {
        return e.replaceWith(t, t + s.nodeSize, l);
      }
      if (!n.validContent(s.content)) {
        throw RangeError("Invalid content for node type " + n.name);
      }
      e.step(
        new Wg(
          t,
          t + s.nodeSize,
          t + 1,
          t + s.nodeSize - 1,
          new Ji(FK.from(l), 0, 0),
          1,
          true,
        ),
      );
    })(this, e, t, n, i);
    return this;
  }
  setNodeAttribute(e, t, n) {
    this.step(new B(e, t, n));
    return this;
  }
  setDocAttribute(e, t) {
    this.step(new V(e, t));
    return this;
  }
  addNodeMark(e, t) {
    this.step(new f(e, t));
    return this;
  }
  removeNodeMark(e, t) {
    let n = this.doc.nodeAt(e);
    if (!n) {
      throw RangeError("No node at position " + e);
    }
    if (t instanceof CU) {
      if (t.isInSet(n.marks)) {
        this.step(new u(e, t));
      }
    } else {
      let r = n.marks;
      let i;
      let o = [];
      while ((i = t.isInSet(r))) {
        o.push(new u(e, i));
        r = i.removeFromSet(r);
      }
      for (let e = o.length - 1; e >= 0; e--) {
        this.step(o[e]);
      }
    }
    return this;
  }
  split(e, t = 1, n) {
    ((e, t, n = 1, i) => {
      let o = e.doc.resolve(t);
      let FK_empty = FK.empty;
      let FK_empty_1 = FK.empty;
      for (let e = o.depth, t = o.depth - n, a = n - 1; e > t; e--, a--) {
        FK_empty = FK.from(o.node(e).copy(FK_empty));
        let t = i && i[a];
        FK_empty_1 = FK.from(
          t ? t.type.create(t.attrs, FK_empty_1) : o.node(e).copy(FK_empty_1),
        );
      }
      e.step(new Ln(t, t, new Ji(FK_empty.append(FK_empty_1), n, n), true));
    })(this, e, t, n);
    return this;
  }
  addMark(e, t, n) {
    let r;
    let i;
    let o;
    let s;
    let l;
    r = this;
    s = [];
    l = [];
    r.doc.nodesBetween(e, t, (r, a, h) => {
      if (!r.isInline) {
        return;
      }
      let r_marks = r.marks;
      if (!n.isInSet(r_marks) && h.type.allowsMarkType(n.type)) {
        let h = Math.max(a, e);
        let f = Math.min(a + r.nodeSize, t);
        let u = n.addToSet(r_marks);
        for (let e = 0; e < r_marks.length; e++) {
          if (!r_marks[e].isInSet(u)) {
            if (i && i.to == h && i.mark.eq(r_marks[e])) {
              i.to = f;
            } else {
              s.push((i = new Ys(h, f, r_marks[e])));
            }
          }
        }
        if (o && o.to == h) {
          o.to = f;
        } else {
          l.push((o = new d(h, f, n)));
        }
      }
    });
    s.forEach((e) => r.step(e));
    l.forEach((e) => r.step(e));
    return this;
  }
  removeMark(e, t, n) {
    let i;
    let o;
    let step;
    i = this;
    o = [];
    step = 0;
    i.doc.nodesBetween(e, t, (i, l) => {
      if (!i.isInline) {
        return;
      }
      step++;
      let a = null;
      if (n instanceof sX) {
        let e = i.marks;
        let t;
        while ((t = n.isInSet(e))) {
          (a || (a = [])).push(t);
          e = t.removeFromSet(e);
        }
      } else {
        if (n) {
          if (n.isInSet(i.marks)) {
            a = [n];
          }
        } else {
          a = i.marks;
        }
      }
      if (a && a.length) {
        let to = Math.min(l + i.nodeSize, t);
        for (let t = 0; t < a.length; t++) {
          let style = a[t];
          let i;
          for (let e = 0; e < o.length; e++) {
            let t = o[e];
            if (t.step == step - 1 && style.eq(o[e].style)) {
              i = t;
            }
          }
          if (i) {
            i.to = to;
            i.step = step;
          } else {
            o.push({
              style,
              from: Math.max(l, e),
              to,
              step,
            });
          }
        }
      }
    });
    o.forEach((e) => i.step(new Ys(e.from, e.to, e.style)));
    return this;
  }
  clearIncompatible(e, t, n) {
    w(this, e, t, n);
    return this;
  }
}
