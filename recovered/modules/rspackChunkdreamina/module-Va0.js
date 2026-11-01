import n from "./module-Bwy.js";
import i from "./module-j3x.js";
import o from "./module-Vva.js";
import { Service } from "./module-Sll_2.js";
export default a;
((a.prototype = Object.create(n.prototype)).constructor = a).className =
  "Service";
function a(e, t) {
  n.call(this, e, t);
  this.methods = {};
  this._methodsArray = null;
}
function l(e) {
  e._methodsArray = null;
  return e;
}
a.fromJSON = function (e, t) {
  const r = new a(e, t.options);
  if (t.methods) {
    for (let n = Object.keys(t.methods), o = 0; o < n.length; ++o) {
      r.add(i.fromJSON(n[o], t.methods[n[o]]));
    }
  }
  if (t.nested) {
    r.addJSON(t.nested);
  }
  if (t.edition) {
    r._edition = t.edition;
  }
  r.comment = t.comment;
  r._defaultEdition = "proto3";
  return r;
};
a.prototype.toJSON = function (e) {
  const t = n.prototype.toJSON.call(this, e);
  const r = !!e && !!e.keepComments;
  return o.toObject([
    "edition",
    this._editionToJSON(),
    "options",
    (t && t.options) || undefined,
    "methods",
    n.arrayToJSON(this.methodsArray, e) || {},
    "nested",
    (t && t.nested) || undefined,
    "comment",
    r ? this.comment : undefined,
  ]);
};
Object.defineProperty(a.prototype, "methodsArray", {
  get: function () {
    return this._methodsArray || (this._methodsArray = o.toArray(this.methods));
  },
});
a.prototype.get = function (e) {
  return this.methods[e] || n.prototype.get.call(this, e);
};
a.prototype.resolveAll = function () {
  if (!this._needsRecursiveResolve) {
    return this;
  }
  n.prototype.resolve.call(this);
  for (let e = this.methodsArray, t = 0; t < e.length; ++t) {
    e[t].resolve();
  }
  return this;
};
a.prototype._resolveFeaturesRecursive = function (e) {
  if (this._needsRecursiveFeatureResolution) {
    e = this._edition || e;
    n.prototype._resolveFeaturesRecursive.call(this, e);
    this.methodsArray.forEach((t) => {
      t._resolveFeaturesRecursive(e);
    });
  }
  return this;
};
a.prototype.add = function (e) {
  if (this.get(e.name)) {
    throw Error("duplicate name '" + e.name + "' in " + this);
  }
  if (e instanceof i) {
    this.methods[e.name] = e;
    e.parent = this;
    return l(this);
  }
  return n.prototype.add.call(this, e);
};
a.prototype.remove = function (e) {
  if (e instanceof i) {
    if (this.methods[e.name] !== e) {
      throw Error(e + " is not a member of " + this);
    }
    delete this.methods[e.name];
    e.parent = null;
    return l(this);
  }
  return n.prototype.remove.call(this, e);
};
a.prototype.create = function (e, t, r) {
  let m;
  const i = new Service(e, t, r);
  for (let a = 0; a < this.methodsArray.length; ++a) {
    const l = o
      .lcFirst((m = this._methodsArray[a]).resolve().name)
      .replace(/[^$\w_]/g, "");
    i[l] = o.codegen(
      ["r", "c"],
      o.isReserved(l) ? l + "_" : l,
    )("return this.rpcCall(m,q,s,r,c)")({
      m,
      q: m.resolvedRequestType.ctor,
      s: m.resolvedResponseType.ctor,
    });
  }
  return i;
};
