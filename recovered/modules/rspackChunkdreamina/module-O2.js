class a {
  get entries() {
    return this._entries;
  }
  get ownerships() {
    let e;
    if ((e = this._ownership) == null) {
      return undefined;
    }
    return e.entries;
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
  constructor(e) {
    for (let [t, r] of ((this._entries = new Map()),
    (e == null ? undefined : e.entries) || [])) {
      this.set(t, r);
    }
    if (e == null ? undefined : e.ownership) {
      this._ownership = e.ownership;
    }
  }
}
export { a };
