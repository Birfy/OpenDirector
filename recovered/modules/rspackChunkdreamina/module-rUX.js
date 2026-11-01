import r from "R3";
import l from "JSz";
import { k } from "./module-Ea.js";
export var xd = (e) => "dreamina-video-player-".concat(e != null ? e : l.bz());
class s {
  get(e) {
    return this._playerPool.get(e);
  }
  create(e, t) {
    const a = this._playerPool.get(e.id);
    if (a) {
      a.updateConfig(e);
      return a;
    }
    const r = t.createInstance(k, e);
    this._keys.add(e.id);
    this._playerPool.put(e.id, r);
    return r;
  }
  clear(e) {
    const t = this._playerPool.get(e);
    if (t) {
      this._playerPool.remove(e);
      this._keys.delete(e);
      t.dispose();
    } else {
      this._keys.delete(e);
    }
  }
  clearAll() {
    for (const e of [...this._keys]) {
      this.clear(e);
    }
  }
  size() {
    return this._keys.size;
  }
  constructor(e) {
    this._keys = new Set();
    this._playerPool = new r.q(e);
    this._playerPool.onEvicted((e, t) => {
      this._keys.delete(e);
      t.dispose();
    });
  }
}
export function FY(e) {
  const { capacity } = e;
  return new s(capacity);
}
export var vN = FY({
  capacity: 70,
});
