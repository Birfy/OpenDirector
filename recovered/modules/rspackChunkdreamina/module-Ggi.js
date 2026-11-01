Symbol("ZodOutput");
Symbol("ZodInput");
export class rs {
  constructor() {
    this._map = new Map();
    this._idmap = new Map();
  }
  add(e, ...t) {
    let n = t[0];
    this._map.set(e, n);
    if (n && typeof n === "object" && "id" in n) {
      if (this._idmap.has(n.id)) {
        throw Error(`ID ${n.id} already exists in the registry`);
      }
      this._idmap.set(n.id, e);
    }
    return this;
  }
  clear() {
    this._map = new Map();
    this._idmap = new Map();
    return this;
  }
  remove(e) {
    let t = this._map.get(e);
    if (t && typeof t === "object" && "id" in t) {
      this._idmap.delete(t.id);
    }
    this._map.delete(e);
    return this;
  }
  get(e) {
    let parent = e._zod.parent;
    if (parent) {
      let n = {
        ...(this.get(parent) ?? {}),
      };
      delete n.id;
      return {
        ...n,
        ...this._map.get(e),
      };
    }
    return this._map.get(e);
  }
  has(e) {
    return this._map.has(e);
  }
}
export let fd = new rs();
