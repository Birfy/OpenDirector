class a {
  constructor(e, t) {
    this.key = e;
    this.data = t;
    this.incoming = new Map();
    this.outgoing = new Map();
  }
}
export class T {
  leafs() {
    let e = [];
    for (let t of this._nodes.values()) {
      if (t.outgoing.size === 0) {
        e.push(t);
      }
    }
    return e;
  }
  insertEdge(e, t) {
    let r = this.lookupOrInsertNode(e);
    let a = this.lookupOrInsertNode(t);
    r.outgoing.set(a.key, a);
    a.incoming.set(r.key, r);
  }
  removeNode(e) {
    let t = this._hashFn(e);
    for (let e of (this._nodes.delete(t), this._nodes.values())) {
      e.outgoing.delete(t);
      e.incoming.delete(t);
    }
  }
  lookup(e) {
    return this._nodes.get(this._hashFn(e));
  }
  lookupOrInsertNode(e) {
    let t = this._hashFn(e);
    let r = this._nodes.get(t);
    if (!r) {
      r = new a(t, e);
      this._nodes.set(t, r);
    }
    return r;
  }
  isEmpty() {
    return this._nodes.size === 0;
  }
  toString() {
    let e = [];
    for (let [t, r] of this._nodes) {
      e.push(`${t}
	(-> incoming)[${[...r.incoming.keys()].join(", ")}]
	(outgoing ->)[${[...r.outgoing.keys()].join(",")}]
`);
    }
    return e.join("\n");
  }
  findCycleSlow() {
    for (let [e, t] of this._nodes) {
      let r = new Set([e]);
      let a = this._findCycle(t, r);
      if (a) {
        return a;
      }
    }
  }
  _findCycle(e, t) {
    for (let [r, a] of e.outgoing) {
      if (t.has(r)) {
        return [...t, r].join(" -> ");
      }
      t.add(r);
      let e = this._findCycle(a, t);
      if (e) {
        return e;
      }
      t.delete(r);
    }
  }
  constructor(e) {
    this._hashFn = e;
    this._nodes = new Map();
  }
}
