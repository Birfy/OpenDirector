import { CU, FK, Ji, bP } from "./module-le8.js";
import { Ln, Wg, dL } from "./module-zxf.js";
let o = Object.create(null);
export class LN {
  constructor(e, t, n) {
    this.$anchor = e;
    this.$head = t;
    this.ranges = n || [new yn(e.min(t), e.max(t))];
  }
  get anchor() {
    return this.$anchor.pos;
  }
  get head() {
    return this.$head.pos;
  }
  get from() {
    return this.$from.pos;
  }
  get to() {
    return this.$to.pos;
  }
  get $from() {
    return this.ranges[0].$from;
  }
  get $to() {
    return this.ranges[0].$to;
  }
  get empty() {
    let ranges = this.ranges;
    for (let t = 0; t < ranges.length; t++) {
      if (ranges[t].$from.pos != ranges[t].$to.pos) {
        return false;
      }
    }
    return true;
  }
  content() {
    return this.$from.doc.slice(this.from, this.to, true);
  }
  replace(e, t = Ji.empty) {
    let lastChild = t.content.lastChild;
    let i = null;
    for (let e = 0; e < t.openEnd; e++) {
      i = lastChild;
      lastChild = lastChild.lastChild;
    }
    let length = e.steps.length;
    let ranges = this.ranges;
    for (let l = 0; l < ranges.length; l++) {
      let { $from, $to } = ranges[l];
      let c = e.mapping.slice(length);
      e.replaceRange(c.map($from.pos), c.map($to.pos), l ? Ji.empty : t);
      if (l == 0) {
        y(
          e,
          length,
          (lastChild ? lastChild.isInline : i && i.isTextblock) ? -1 : 1,
        );
      }
    }
  }
  replaceWith(e, t) {
    let length = e.steps.length;
    let ranges = this.ranges;
    for (let i = 0; i < ranges.length; i++) {
      let { $from, $to } = ranges[i];
      let l = e.mapping.slice(length);
      let a = l.map($from.pos);
      let h = l.map($to.pos);
      if (i) {
        e.deleteRange(a, h);
      } else {
        e.replaceRangeWith(a, h, t);
        y(e, length, t.isInline ? -1 : 1);
      }
    }
  }
  static findFrom(e, t, n = false) {
    let r = e.parent.inlineContent
      ? new U3(e)
      : g(e.node(0), e.parent, e.pos, e.index(), t, n);
    if (r) {
      return r;
    }
    for (let r = e.depth - 1; r >= 0; r--) {
      let i =
        t < 0
          ? g(e.node(0), e.node(r), e.before(r + 1), e.index(r), t, n)
          : g(e.node(0), e.node(r), e.after(r + 1), e.index(r) + 1, t, n);
      if (i) {
        return i;
      }
    }
    return null;
  }
  static near(e, t = 1) {
    return this.findFrom(e, t) || this.findFrom(e, -t) || new i5(e.node(0));
  }
  static atStart(e) {
    return g(e, e, 0, 0, 1) || new i5(e);
  }
  static atEnd(e) {
    return g(e, e, e.content.size, e.childCount, -1) || new i5(e);
  }
  static fromJSON(e, t) {
    if (!t || !t.type) {
      throw RangeError("Invalid input for Selection.fromJSON");
    }
    let n = o[t.type];
    if (!n) {
      throw RangeError(`No selection type ${t.type} defined`);
    }
    return n.fromJSON(e, t);
  }
  static jsonID(e, t) {
    if (e in o) {
      throw RangeError("Duplicate use of selection JSON ID " + e);
    }
    o[e] = t;
    t.prototype.jsonID = e;
    return t;
  }
  getBookmark() {
    return U3.between(this.$anchor, this.$head).getBookmark();
  }
}
LN.prototype.visible = true;
export class yn {
  constructor(e, t) {
    this.$from = e;
    this.$to = t;
  }
}
let a = false;
function h(e) {
  if (!(a || e.parent.inlineContent)) {
    a = true;
    console.warn(
      "TextSelection endpoint not pointing into a node with inline content (" +
        e.parent.type.name +
        ")",
    );
  }
}
export class U3 extends LN {
  constructor(e, t = e) {
    h(e);
    h(t);
    super(e, t);
  }
  get $cursor() {
    if (this.$anchor.pos == this.$head.pos) {
      return this.$head;
    }
    return null;
  }
  map(e, t) {
    let n = e.resolve(t.map(this.head));
    if (!n.parent.inlineContent) {
      return LN.near(n);
    }
    let r = e.resolve(t.map(this.anchor));
    return new U3(r.parent.inlineContent ? r : n, n);
  }
  replace(e, t = Ji.empty) {
    super.replace(e, t);
    if (t == Ji.empty) {
      let t = this.$from.marksAcross(this.$to);
      if (t) {
        e.ensureMarks(t);
      }
    }
  }
  eq(e) {
    return e instanceof U3 && e.anchor == this.anchor && e.head == this.head;
  }
  getBookmark() {
    return new d(this.anchor, this.head);
  }
  toJSON() {
    return {
      type: "text",
      anchor: this.anchor,
      head: this.head,
    };
  }
  static fromJSON(e, t) {
    if (typeof t.anchor !== "number" || typeof t.head !== "number") {
      throw RangeError("Invalid input for TextSelection.fromJSON");
    }
    return new U3(e.resolve(t.anchor), e.resolve(t.head));
  }
  static create(e, t, n = t) {
    let r = e.resolve(t);
    return new this(r, n == t ? r : e.resolve(n));
  }
  static between(e, t, n) {
    let r = e.pos - t.pos;
    if (!n || r) {
      n = r >= 0 ? 1 : -1;
    }
    if (!t.parent.inlineContent) {
      let e = LN.findFrom(t, n, true) || LN.findFrom(t, -n, true);
      if (!e) {
        return LN.near(t, n);
      }
      t = e.$head;
    }
    if (!e.parent.inlineContent) {
      if (r == 0) {
        e = t;
      } else if (
        (e = (LN.findFrom(e, -n, true) || LN.findFrom(e, n, true)).$anchor)
          .pos <
          t.pos !=
        r < 0
      ) {
        e = t;
      }
    }
    return new U3(e, t);
  }
}
LN.jsonID("text", U3);
class d {
  constructor(e, t) {
    this.anchor = e;
    this.head = t;
  }
  map(e) {
    return new d(e.map(this.anchor), e.map(this.head));
  }
  resolve(e) {
    return U3.between(e.resolve(this.anchor), e.resolve(this.head));
  }
}
export class nh extends LN {
  constructor(e) {
    let t = e.nodeAfter;
    let n = e.node(0).resolve(e.pos + t.nodeSize);
    super(e, n);
    this.node = t;
  }
  map(e, t) {
    let { deleted, pos } = t.mapResult(this.anchor);
    let i = e.resolve(pos);
    if (deleted) {
      return LN.near(i);
    }
    return new nh(i);
  }
  content() {
    return new Ji(FK.from(this.node), 0, 0);
  }
  eq(e) {
    return e instanceof nh && e.anchor == this.anchor;
  }
  toJSON() {
    return {
      type: "node",
      anchor: this.anchor,
    };
  }
  getBookmark() {
    return new f(this.anchor);
  }
  static fromJSON(e, t) {
    if (typeof t.anchor !== "number") {
      throw RangeError("Invalid input for NodeSelection.fromJSON");
    }
    return new nh(e.resolve(t.anchor));
  }
  static create(e, t) {
    return new nh(e.resolve(t));
  }
  static isSelectable(e) {
    return !e.isText && e.type.spec.selectable !== false;
  }
}
nh.prototype.visible = false;
LN.jsonID("node", nh);
class f {
  constructor(e) {
    this.anchor = e;
  }
  map(e) {
    let { deleted, pos } = e.mapResult(this.anchor);
    if (deleted) {
      return new d(pos, pos);
    }
    return new f(pos);
  }
  resolve(e) {
    let t = e.resolve(this.anchor);
    let t_nodeAfter = t.nodeAfter;
    if (t_nodeAfter && nh.isSelectable(t_nodeAfter)) {
      return new nh(t);
    }
    return LN.near(t);
  }
}
export class i5 extends LN {
  constructor(e) {
    super(e.resolve(0), e.resolve(e.content.size));
  }
  replace(e, t = Ji.empty) {
    if (t == Ji.empty) {
      e.delete(0, e.doc.content.size);
      let t = LN.atStart(e.doc);
      if (!t.eq(e.selection)) {
        e.setSelection(t);
      }
    } else {
      super.replace(e, t);
    }
  }
  toJSON() {
    return {
      type: "all",
    };
  }
  static fromJSON(e) {
    return new i5(e);
  }
  map(e) {
    return new i5(e);
  }
  eq(e) {
    return e instanceof i5;
  }
  getBookmark() {
    return m;
  }
}
LN.jsonID("all", i5);
let m = {
  map() {
    return this;
  },
  resolve: (e) => new i5(e),
};
function g(e, t, n, r, i, o = false) {
  if (t.inlineContent) {
    return U3.create(e, n);
  }
  for (let s = r - (i > 0 ? 0 : 1); i > 0 ? s < t.childCount : s >= 0; s += i) {
    let r = t.child(s);
    if (r.isAtom) {
      if (!o && nh.isSelectable(r)) {
        return nh.create(e, n - (i < 0 ? r.nodeSize : 0));
      }
    } else {
      let t = g(e, r, n + i, i < 0 ? r.childCount : 0, i, o);
      if (t) {
        return t;
      }
    }
    n += r.nodeSize * i;
  }
  return null;
}
function y(e, t, n) {
  let r;
  let o = e.steps.length - 1;
  if (o < t) {
    return;
  }
  let l = e.steps[o];
  if (l instanceof Ln || l instanceof Wg) {
    e.mapping.maps[o].forEach((e, t, n, i) => {
      if (r == null) {
        r = i;
      }
    });
    e.setSelection(LN.near(e.doc.resolve(r), n));
  }
}
class w extends dL {
  constructor(e) {
    super(e.doc);
    this.curSelectionFor = 0;
    this.updated = 0;
    this.meta = Object.create(null);
    this.time = Date.now();
    this.curSelection = e.selection;
    this.storedMarks = e.storedMarks;
  }
  get selection() {
    if (this.curSelectionFor < this.steps.length) {
      this.curSelection = this.curSelection.map(
        this.doc,
        this.mapping.slice(this.curSelectionFor),
      );
      this.curSelectionFor = this.steps.length;
    }
    return this.curSelection;
  }
  setSelection(e) {
    if (e.$from.doc != this.doc) {
      throw RangeError(
        "Selection passed to setSelection must point at the current document",
      );
    }
    this.curSelection = e;
    this.curSelectionFor = this.steps.length;
    this.updated = (1 | this.updated) & -3;
    this.storedMarks = null;
    return this;
  }
  get selectionSet() {
    return (1 & this.updated) > 0;
  }
  setStoredMarks(e) {
    this.storedMarks = e;
    this.updated |= 2;
    return this;
  }
  ensureMarks(e) {
    if (!CU.sameSet(this.storedMarks || this.selection.$from.marks(), e)) {
      this.setStoredMarks(e);
    }
    return this;
  }
  addStoredMark(e) {
    return this.ensureMarks(
      e.addToSet(this.storedMarks || this.selection.$head.marks()),
    );
  }
  removeStoredMark(e) {
    return this.ensureMarks(
      e.removeFromSet(this.storedMarks || this.selection.$head.marks()),
    );
  }
  get storedMarksSet() {
    return (2 & this.updated) > 0;
  }
  addStep(e, t) {
    super.addStep(e, t);
    this.updated = -3 & this.updated;
    this.storedMarks = null;
  }
  setTime(e) {
    this.time = e;
    return this;
  }
  replaceSelection(e) {
    this.selection.replace(this, e);
    return this;
  }
  replaceSelectionWith(e, t = true) {
    let selection = this.selection;
    if (t) {
      e = e.mark(
        this.storedMarks ||
          (selection.empty
            ? selection.$from.marks()
            : selection.$from.marksAcross(selection.$to) || CU.none),
      );
    }
    selection.replaceWith(this, e);
    return this;
  }
  deleteSelection() {
    this.selection.replace(this);
    return this;
  }
  insertText(e, t, n) {
    let schema = this.doc.type.schema;
    if (t == null) {
      if (e) {
        return this.replaceSelectionWith(schema.text(e), true);
      }
      return this.deleteSelection();
    }
    {
      if (n == null) {
        n = t;
      }
      n = n == null ? t : n;
      if (!e) {
        return this.deleteRange(t, n);
      }
      let i = this.storedMarks;
      if (!i) {
        let e = this.doc.resolve(t);
        i = n == t ? e.marks() : e.marksAcross(this.doc.resolve(n));
      }
      this.replaceRangeWith(t, n, schema.text(e, i));
      if (!this.selection.empty) {
        this.setSelection(LN.near(this.selection.$to));
      }
      return this;
    }
  }
  setMeta(e, t) {
    this.meta[typeof e === "string" ? e : e.key] = t;
    return this;
  }
  getMeta(e) {
    return this.meta[typeof e === "string" ? e : e.key];
  }
  get isGeneric() {
    for (let e in this.meta) {
      return false;
    }
    return true;
  }
  scrollIntoView() {
    this.updated |= 4;
    return this;
  }
  get scrolledIntoView() {
    return (4 & this.updated) > 0;
  }
}
function k(e, t) {
  if (t && e) {
    return e.bind(t);
  }
  return e;
}
class b {
  constructor(e, t, n) {
    this.name = e;
    this.init = k(t.init, n);
    this.apply = k(t.apply, n);
  }
}
let x = [
  new b("doc", {
    init: (e) => e.doc || e.schema.topNodeType.createAndFill(),
    apply: (e) => e.doc,
  }),
  new b("selection", {
    init: (e, t) => e.selection || LN.atStart(t.doc),
    apply: (e) => e.selection,
  }),
  new b("storedMarks", {
    init: (e) => e.storedMarks || null,
    apply: (e, t, n, r) => {
      if (r.selection.$cursor) {
        return e.storedMarks;
      }
      return null;
    },
  }),
  new b("scrollToSelection", {
    init: () => 0,
    apply: (e, t) => {
      if (e.scrolledIntoView) {
        return t + 1;
      }
      return t;
    },
  }),
];
class v {
  constructor(e, t) {
    this.schema = e;
    this.plugins = [];
    this.pluginsByKey = Object.create(null);
    this.fields = x.slice();
    if (t) {
      t.forEach((e) => {
        if (this.pluginsByKey[e.key]) {
          throw RangeError(
            "Adding different instances of a keyed plugin (" + e.key + ")",
          );
        }
        this.plugins.push(e);
        this.pluginsByKey[e.key] = e;
        if (e.spec.state) {
          this.fields.push(new b(e.key, e.spec.state, e));
        }
      });
    }
  }
}
export class $t {
  constructor(e) {
    this.config = e;
  }
  get schema() {
    return this.config.schema;
  }
  get plugins() {
    return this.config.plugins;
  }
  apply(e) {
    return this.applyTransaction(e).state;
  }
  filterTransaction(e, t = -1) {
    for (let n = 0; n < this.config.plugins.length; n++) {
      if (n != t) {
        let t = this.config.plugins[n];
        if (
          t.spec.filterTransaction &&
          !t.spec.filterTransaction.call(t, e, this)
        ) {
          return false;
        }
      }
    }
    return true;
  }
  applyTransaction(e) {
    if (!this.filterTransaction(e)) {
      return {
        state: this,
        transactions: [],
      };
    }
    let transactions = [e];
    let state = this.applyInner(e);
    let r = null;
    while (true) {
      let i = false;
      for (let o = 0; o < this.config.plugins.length; o++) {
        let plugin = this.config.plugins[o];
        if (plugin.spec.appendTransaction) {
          let l = r ? r[o].n : 0;
          let a = r ? r[o].state : this;
          let h =
            l < transactions.length &&
            plugin.spec.appendTransaction.call(
              plugin,
              l ? transactions.slice(l) : transactions,
              a,
              state,
            );
          if (h && state.filterTransaction(h, o)) {
            h.setMeta("appendedTransaction", e);
            if (!r) {
              r = [];
              for (let e = 0; e < this.config.plugins.length; e++) {
                r.push(
                  e < o
                    ? {
                        state,
                        n: transactions.length,
                      }
                    : {
                        state: this,
                        n: 0,
                      },
                );
              }
            }
            transactions.push(h);
            state = state.applyInner(h);
            i = true;
          }
          if (r) {
            r[o] = {
              state,
              n: transactions.length,
            };
          }
        }
      }
      if (!i) {
        return {
          state,
          transactions,
        };
      }
    }
  }
  applyInner(e) {
    if (!e.before.eq(this.doc)) {
      throw RangeError("Applying a mismatched transaction");
    }
    let t = new $t(this.config);
    let fields = this.config.fields;
    for (let r = 0; r < fields.length; r++) {
      let field = fields[r];
      t[field.name] = field.apply(e, this[field.name], this, t);
    }
    return t;
  }
  get tr() {
    return new w(this);
  }
  static create(e) {
    let t = new v(e.doc ? e.doc.type.schema : e.schema, e.plugins);
    let n = new $t(t);
    for (let r = 0; r < t.fields.length; r++) {
      n[t.fields[r].name] = t.fields[r].init(e, n);
    }
    return n;
  }
  reconfigure(e) {
    let t = new v(this.schema, e.plugins);
    let t_fields = t.fields;
    let r = new $t(t);
    for (let t = 0; t < t_fields.length; t++) {
      let i = t_fields[t].name;
      r[i] = this.hasOwnProperty(i) ? this[i] : t_fields[t].init(e, r);
    }
    return r;
  }
  toJSON(e) {
    let t = {
      doc: this.doc.toJSON(),
      selection: this.selection.toJSON(),
    };
    if (this.storedMarks) {
      t.storedMarks = this.storedMarks.map((e) => e.toJSON());
    }
    if (e && typeof e === "object") {
      for (let n in e) {
        if (n == "doc" || n == "selection") {
          throw RangeError(
            "The JSON fields `doc` and `selection` are reserved",
          );
        }
        let r = e[n];
        let i = r.spec.state;
        if (i && i.toJSON) {
          t[n] = i.toJSON.call(r, this[r.key]);
        }
      }
    }
    return t;
  }
  static fromJSON(e, t, n) {
    if (!t) {
      throw RangeError("Invalid input for EditorState.fromJSON");
    }
    if (!e.schema) {
      throw RangeError("Required config field 'schema' missing");
    }
    let i = new v(e.schema, e.plugins);
    let o = new $t(i);
    i.fields.forEach((i) => {
      if (i.name == "doc") {
        o.doc = bP.fromJSON(e.schema, t.doc);
      } else if (i.name == "selection") {
        o.selection = LN.fromJSON(o.doc, t.selection);
      } else if (i.name == "storedMarks") {
        if (t.storedMarks) {
          o.storedMarks = t.storedMarks.map(e.schema.markFromJSON);
        }
      } else {
        if (n) {
          for (let r in n) {
            let s = n[r];
            let l = s.spec.state;
            if (
              s.key == i.name &&
              l &&
              l.fromJSON &&
              Object.prototype.hasOwnProperty.call(t, r)
            ) {
              o[i.name] = l.fromJSON.call(s, e, t[r], o);
              return;
            }
          }
        }
        o[i.name] = i.init(e, o);
      }
    });
    return o;
  }
}
export class k_ {
  constructor(e) {
    this.spec = e;
    this.props = {};
    if (e.props) {
      (function e(t, n, r) {
        for (let i in t) {
          let o = t[i];
          if (o instanceof Function) {
            o = o.bind(n);
          } else if (i == "handleDOMEvents") {
            o = e(o, n, {});
          }
          r[i] = o;
        }
        return r;
      })(e.props, this, this.props);
    }
    this.key = e.key ? e.key.key : M("plugin");
  }
  getState(e) {
    return e[this.key];
  }
}
let N = Object.create(null);
function M(e) {
  if (e in N) {
    return e + "$" + ++N[e];
  }
  N[e] = 0;
  return e + "$";
}
export class hs {
  constructor(e = "key") {
    this.key = M(e);
  }
  get(e) {
    return e.config.pluginsByKey[this.key];
  }
  getState(e) {
    return e[this.key];
  }
}
