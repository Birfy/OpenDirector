import n from "./module-Bi.js";
import i from "./module-Bwy.js";
import o from "./module-Vva.js";
export default s;
((s.prototype = Object.create(n.prototype)).constructor = s).className = "Enum";
function s(e, t, r, i, o, s) {
  n.call(this, e, r);
  if (t && typeof t !== "object") {
    throw TypeError("values must be an object");
  }
  this.valuesById = {};
  this.values = Object.create(this.valuesById);
  this.comment = i;
  this.comments = o || {};
  this.valuesOptions = s;
  this._valuesFeatures = {};
  this.reserved = undefined;
  if (t) {
    for (let a = Object.keys(t), l = 0; l < a.length; ++l) {
      if (typeof t[a[l]] === "number") {
        this.valuesById[(this.values[a[l]] = t[a[l]])] = a[l];
      }
    }
  }
}
s.prototype._resolveFeatures = function (e) {
  e = this._edition || e;
  n.prototype._resolveFeatures.call(this, e);
  Object.keys(this.values).forEach((e) => {
    var t = {
      ...this._features,
    };
    this._valuesFeatures[e] = Object.assign(
      t,
      this.valuesOptions &&
        this.valuesOptions[e] &&
        this.valuesOptions[e].features,
    );
  });
  return this;
};
s.fromJSON = function (e, t) {
  const r = new s(e, t.values, t.options, t.comment, t.comments);
  r.reserved = t.reserved;
  if (t.edition) {
    r._edition = t.edition;
  }
  r._defaultEdition = "proto3";
  return r;
};
s.prototype.toJSON = function (e) {
  const t = !!e && !!e.keepComments;
  return o.toObject([
    "edition",
    this._editionToJSON(),
    "options",
    this.options,
    "valuesOptions",
    this.valuesOptions,
    "values",
    this.values,
    "reserved",
    this.reserved && this.reserved.length ? this.reserved : undefined,
    "comment",
    t ? this.comment : undefined,
    "comments",
    t ? this.comments : undefined,
  ]);
};
s.prototype.add = function (e, t, r, n) {
  if (!o.isString(e)) {
    throw TypeError("name must be a string");
  }
  if (!o.isInteger(t)) {
    throw TypeError("id must be an integer");
  }
  if (this.values[e] !== undefined) {
    throw Error("duplicate name '" + e + "' in " + this);
  }
  if (this.isReservedId(t)) {
    throw Error("id " + t + " is reserved in " + this);
  }
  if (this.isReservedName(e)) {
    throw Error("name '" + e + "' is reserved in " + this);
  }
  if (this.valuesById[t] !== undefined) {
    if (!(this.options && this.options.allow_alias)) {
      throw Error("duplicate id " + t + " in " + this);
    }
    this.values[e] = t;
  } else {
    this.valuesById[(this.values[e] = t)] = e;
  }
  if (n) {
    if (this.valuesOptions === undefined) {
      this.valuesOptions = {};
    }
    this.valuesOptions[e] = n || null;
  }
  this.comments[e] = r || null;
  return this;
};
s.prototype.remove = function (e) {
  if (!o.isString(e)) {
    throw TypeError("name must be a string");
  }
  const t = this.values[e];
  if (t == null) {
    throw Error("name '" + e + "' does not exist in " + this);
  }
  delete this.valuesById[t];
  delete this.values[e];
  delete this.comments[e];
  if (this.valuesOptions) {
    delete this.valuesOptions[e];
  }
  return this;
};
s.prototype.isReservedId = function (e) {
  return i.isReservedId(this.reserved, e);
};
s.prototype.isReservedName = function (e) {
  return i.isReservedName(this.reserved, e);
};
