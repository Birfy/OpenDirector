import s from "./module-Bi.js";
import a from "./module-osk.js";
import l from "./module-Vva.js";
import u from "./module-P62.js";
export default c;
let n;
let i;
let o;
((c.prototype = Object.create(s.prototype)).constructor = c).className =
  "Namespace";
function f(e, t) {
  if (e && e.length) {
    const r = {};
    for (let n = 0; n < e.length; ++n) {
      r[e[n].name] = e[n].toJSON(t);
    }
    return r;
  }
}
function c(e, t) {
  s.call(this, e, t);
  this.nested = undefined;
  this._nestedArray = null;
  this._lookupCache = {};
  this._needsRecursiveFeatureResolution = true;
  this._needsRecursiveResolve = true;
}
function p(e) {
  e._nestedArray = null;
  e._lookupCache = {};
  for (let t = e; (t = t.parent);) {
    t._lookupCache = {};
  }
  return e;
}
c.fromJSON = function (e, t) {
  return new c(e, t.options).addJSON(t.nested);
};
c.arrayToJSON = f;
c.isReservedId = function (e, t) {
  if (e) {
    for (let r = 0; r < e.length; ++r) {
      if (typeof e[r] !== "string" && e[r][0] <= t && e[r][1] > t) {
        return true;
      }
    }
  }
  return false;
};
c.isReservedName = function (e, t) {
  if (e) {
    for (let r = 0; r < e.length; ++r) {
      if (e[r] === t) {
        return true;
      }
    }
  }
  return false;
};
Object.defineProperty(c.prototype, "nestedArray", {
  get: function () {
    return this._nestedArray || (this._nestedArray = l.toArray(this.nested));
  },
});
c.prototype.toJSON = function (e) {
  return l.toObject([
    "options",
    this.options,
    "nested",
    f(this.nestedArray, e),
  ]);
};
c.prototype.addJSON = function (e) {
  if (e) {
    let t;
    for (let r = Object.keys(e), s = 0; s < r.length; ++s) {
      t = e[r[s]];
      this.add(
        (t.fields !== undefined
          ? n.fromJSON
          : t.values !== undefined
            ? o.fromJSON
            : t.methods !== undefined
              ? i.fromJSON
              : t.id !== undefined
                ? a.fromJSON
                : c.fromJSON)(r[s], t),
      );
    }
  }
  return this;
};
c.prototype.get = function (e) {
  return (this.nested && this.nested[e]) || null;
};
c.prototype.getEnum = function (e) {
  if (this.nested && this.nested[e] instanceof o) {
    return this.nested[e].values;
  }
  throw Error("no such enum: " + e);
};
c.prototype.add = function (e) {
  if (
    !(
      (e instanceof a && e.extend !== undefined) ||
      e instanceof n ||
      e instanceof u ||
      e instanceof o ||
      e instanceof i ||
      e instanceof c
    )
  ) {
    throw TypeError("object must be a valid nested object");
  }
  if (this.nested) {
    const t = this.get(e.name);
    if (t) {
      if (
        t instanceof c &&
        e instanceof c &&
        !(t instanceof n || t instanceof i)
      ) {
        for (let r = t.nestedArray, s = 0; s < r.length; ++s) {
          e.add(r[s]);
        }
        this.remove(t);
        if (!this.nested) {
          this.nested = {};
        }
        e.setOptions(t.options, true);
      } else {
        throw Error("duplicate name '" + e.name + "' in " + this);
      }
    }
  } else {
    this.nested = {};
  }
  this.nested[e.name] = e;
  if (
    !(
      this instanceof n ||
      this instanceof i ||
      this instanceof o ||
      this instanceof a ||
      e._edition
    )
  ) {
    e._edition = e._defaultEdition;
  }
  this._needsRecursiveFeatureResolution = true;
  this._needsRecursiveResolve = true;
  for (let l = this; (l = l.parent);) {
    l._needsRecursiveFeatureResolution = true;
    l._needsRecursiveResolve = true;
  }
  e.onAdd(this);
  return p(this);
};
c.prototype.remove = function (e) {
  if (!(e instanceof s)) {
    throw TypeError("object must be a ReflectionObject");
  }
  if (e.parent !== this) {
    throw Error(e + " is not a member of " + this);
  }
  delete this.nested[e.name];
  if (!Object.keys(this.nested).length) {
    this.nested = undefined;
  }
  e.onRemove(this);
  return p(this);
};
c.prototype.define = function (e, t) {
  if (l.isString(e)) {
    e = e.split(".");
  } else if (!Array.isArray(e)) {
    throw TypeError("illegal path");
  }
  if (e && e.length && e[0] === "") {
    throw Error("path must be relative");
  }
  let r = this;
  while (e.length > 0) {
    const n = e.shift();
    if (r.nested && r.nested[n]) {
      if (!((r = r.nested[n]) instanceof c)) {
        throw Error("path conflicts with non-namespace objects");
      }
    } else {
      r.add((r = new c(n)));
    }
  }
  if (t) {
    r.addJSON(t);
  }
  return r;
};
c.prototype.resolveAll = function () {
  if (!this._needsRecursiveResolve) {
    return this;
  }
  this._resolveFeaturesRecursive(this._edition);
  const nestedArray = this.nestedArray;
  let t = 0;
  for (this.resolve(); t < nestedArray.length;) {
    if (nestedArray[t] instanceof c) {
      nestedArray[t++].resolveAll();
    } else {
      nestedArray[t++].resolve();
    }
  }
  this._needsRecursiveResolve = false;
  return this;
};
c.prototype._resolveFeaturesRecursive = function (e) {
  if (this._needsRecursiveFeatureResolution) {
    this._needsRecursiveFeatureResolution = false;
    e = this._edition || e;
    s.prototype._resolveFeaturesRecursive.call(this, e);
    this.nestedArray.forEach((t) => {
      t._resolveFeaturesRecursive(e);
    });
  }
  return this;
};
c.prototype.lookup = function (e, t, r) {
  if (typeof t === "boolean") {
    r = t;
    t = undefined;
  } else if (t && !Array.isArray(t)) {
    t = [t];
  }
  if (l.isString(e) && e.length) {
    if (e === ".") {
      return this.root;
    }
    e = e.split(".");
  } else if (!e.length) {
    return this;
  }
  const n = e.join(".");
  if (e[0] === "") {
    return this.root.lookup(e.slice(1), t);
  }
  let i =
    this.root._fullyQualifiedObjects &&
    this.root._fullyQualifiedObjects["." + n];
  if (
    (i && (!t || t.indexOf(i.constructor) > -1)) ||
    ((i = this._lookupImpl(e, n)) && (!t || t.indexOf(i.constructor) > -1))
  ) {
    return i;
  }
  if (r) {
    return null;
  }
  for (let o = this; o.parent;) {
    if (
      (i = o.parent._lookupImpl(e, n)) &&
      (!t || t.indexOf(i.constructor) > -1)
    ) {
      return i;
    }
    o = o.parent;
  }
  return null;
};
c.prototype._lookupImpl = function (e, t) {
  if (Object.prototype.hasOwnProperty.call(this._lookupCache, t)) {
    return this._lookupCache[t];
  }
  let r = this.get(e[0]);
  let n = null;
  if (r) {
    if (e.length === 1) {
      n = r;
    } else if (r instanceof c) {
      e = e.slice(1);
      n = r._lookupImpl(e, e.join("."));
    }
  } else {
    for (let i = 0; i < this.nestedArray.length; ++i) {
      if (
        this._nestedArray[i] instanceof c &&
        (r = this._nestedArray[i]._lookupImpl(e, t))
      ) {
        n = r;
      }
    }
  }
  this._lookupCache[t] = n;
  return n;
};
c.prototype.lookupType = function (e) {
  const t = this.lookup(e, [n]);
  if (!t) {
    throw Error("no such type: " + e);
  }
  return t;
};
c.prototype.lookupEnum = function (e) {
  const t = this.lookup(e, [o]);
  if (!t) {
    throw Error("no such Enum '" + e + "' in " + this);
  }
  return t;
};
c.prototype.lookupTypeOrEnum = function (e) {
  const t = this.lookup(e, [n, o]);
  if (!t) {
    throw Error("no such Type or Enum '" + e + "' in " + this);
  }
  return t;
};
c.prototype.lookupService = function (e) {
  const t = this.lookup(e, [i]);
  if (!t) {
    throw Error("no such Service '" + e + "' in " + this);
  }
  return t;
};
c._configure = function (e, t, r) {
  n = e;
  i = t;
  o = r;
};
