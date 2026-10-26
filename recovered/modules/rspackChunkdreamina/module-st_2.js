if (require.j == "wl4") {
  var a;
  var o;
  var i = require("./module-Dm.js");
}
if (require.j == "wl4") var n = require("./module-L8k.js");
if (require.j == "wl4") var c = require("./module-O2.js");
if (require.j == "wl4") var l = require("./module-SB.js");
a = o || (o = {});
a[(a.Eager = 0)] = "Eager";
a[(a.Delayed = 1)] = "Delayed";
export class L {
  get registry() {
    return this._registry;
  }
  register(e, t, r) {
    if (!(t instanceof n.d)) {
      t = new n.d(t, [], !!r);
    }
    if (this._checkDuplicate) {
      i.X3(
        !this._ids.has(e.toString()),
        `service: ${e.toString()} duplicate register.`,
      );
      this._ids.add(e.toString());
    }
    this._registry.push([e, t]);
  }
  registerInstance(e, t, r) {
    let a;
    if (this._checkDuplicate) {
      i.X3(
        !this._ids.has(e.toString()),
        `service: ${e.toString()} duplicate register.`,
      );
      this._ids.add(e.toString());
    }
    this._registry.push([e, t]);
    this._serviceOwnership.set(
      e,
      (a = r == null ? undefined : r.ownership) != null ? a : l.t.Owned,
    );
  }
  makeCollection() {
    let e = new c.a({
      ownership: this._serviceOwnership,
    });
    for (let [t, r] of this.registry) {
      e.set(t, r);
    }
    return e;
  }
  constructor(e = {}) {
    var t;
    this._registry = [];
    this._serviceOwnership = new l.n();
    this._ids = new Set();
    this._checkDuplicate = (t = e.checkDuplicate) != null && t;
  }
}
