export var t;
let o;
o = t || (t = {});
o[(o.Owned = 1)] = "Owned";
o[(o.Reference = 2)] = "Reference";
export class n {
  get entries() {
    return this._entries;
  }
  set(e, t) {
    this._entries.set(e, t);
  }
  has(e) {
    return this._entries.has(e);
  }
  get(e) {
    return this._entries.get(e);
  }
  constructor(...e) {
    for (let [t, r] of ((this._entries = new Map()), e)) {
      this.set(t, r);
    }
  }
}
