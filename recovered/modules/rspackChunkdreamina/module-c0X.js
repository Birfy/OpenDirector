import n from "./module-Bwy.js";
import i from "./module-Taa.js";
import o from "./module-P62.js";
import s from "./module-osk.js";
import a from "./module-uCb.js";
import l from "./module-Va0.js";
import u from "./module-nkd.js";
import Reader from "./module-XuH.js";
import Writer from "./module-zge.js";
import util from "./module-Vva.js";
import d from "./module-CpW.js";
import h from "./module-TBQ.js";
import m from "./module-DhY.js";
import { fromObject, toObject } from "./module-DTh.js";
import v from "./module-wEB.js";
export default g;
((g.prototype = Object.create(n.prototype)).constructor = g).className = "Type";
function g(e, t) {
  n.call(this, e, t);
  this.fields = {};
  this.oneofs = undefined;
  this.extensions = undefined;
  this.reserved = undefined;
  this.group = undefined;
  this._fieldsById = null;
  this._fieldsArray = null;
  this._oneofsArray = null;
  this._ctor = null;
}
function b(e) {
  e._fieldsById = e._fieldsArray = e._oneofsArray = null;
  delete e.encode;
  delete e.decode;
  delete e.verify;
  return e;
}
Object.defineProperties(g.prototype, {
  fieldsById: {
    get: function () {
      if (this._fieldsById) {
        return this._fieldsById;
      }
      this._fieldsById = {};
      for (let e = Object.keys(this.fields), t = 0; t < e.length; ++t) {
        const r = this.fields[e[t]];
        const n = r.id;
        if (this._fieldsById[n]) {
          throw Error("duplicate id " + n + " in " + this);
        }
        this._fieldsById[n] = r;
      }
      return this._fieldsById;
    },
  },
  fieldsArray: {
    get: function () {
      return (
        this._fieldsArray || (this._fieldsArray = util.toArray(this.fields))
      );
    },
  },
  oneofsArray: {
    get: function () {
      return (
        this._oneofsArray || (this._oneofsArray = util.toArray(this.oneofs))
      );
    },
  },
  ctor: {
    get: function () {
      return this._ctor || (this.ctor = g.generateConstructor(this)());
    },
    set: function (e) {
      const e_prototype = e.prototype;
      if (!(e_prototype instanceof u)) {
        (e.prototype = new u()).constructor = e;
        util.merge(e.prototype, e_prototype);
      }
      e.$type = e.prototype.$type = this;
      util.merge(e, u, true);
      this._ctor = e;
      for (var r = 0; r < this.fieldsArray.length; ++r) {
        this._fieldsArray[r].resolve();
      }
      const n = {};
      for (r = 0; r < this.oneofsArray.length; ++r) {
        n[this._oneofsArray[r].resolve().name] = {
          get: util.oneOfGetter(this._oneofsArray[r].oneof),
          set: util.oneOfSetter(this._oneofsArray[r].oneof),
        };
      }
      if (r) {
        Object.defineProperties(e.prototype, n);
      }
    },
  },
});
g.generateConstructor = function (e) {
  let t;
  const r = util.codegen(["p"], e.name);
  for (let n = 0; n < e.fieldsArray.length; ++n) {
    if ((t = e._fieldsArray[n]).map) {
      r("this%s={}", util.safeProp(t.name));
    } else if (t.repeated) {
      r("this%s=[]", util.safeProp(t.name));
    }
  }
  return r(
    "if(p)for(var ks=Object.keys(p),i=0;i<ks.length;++i)if(p[ks[i]]!=null)",
  )("this[ks[i]]=p[ks[i]]");
};
g.fromJSON = function (e, t) {
  const r = new g(e, t.options);
  r.extensions = t.extensions;
  r.reserved = t.reserved;
  for (var u = Object.keys(t.fields), f = 0; f < u.length; ++f) {
    r.add(
      (t.fields[u[f]].keyType !== undefined ? a.fromJSON : s.fromJSON)(
        u[f],
        t.fields[u[f]],
      ),
    );
  }
  if (t.oneofs) {
    u = Object.keys(t.oneofs);
    for (f = 0; f < u.length; ++f) {
      r.add(o.fromJSON(u[f], t.oneofs[u[f]]));
    }
  }
  if (t.nested) {
    u = Object.keys(t.nested);
    for (f = 0; f < u.length; ++f) {
      const c = t.nested[u[f]];
      r.add(
        (c.id !== undefined
          ? s.fromJSON
          : c.fields !== undefined
            ? g.fromJSON
            : c.values !== undefined
              ? i.fromJSON
              : c.methods !== undefined
                ? l.fromJSON
                : n.fromJSON)(u[f], c),
      );
    }
  }
  if (t.extensions && t.extensions.length) {
    r.extensions = t.extensions;
  }
  if (t.reserved && t.reserved.length) {
    r.reserved = t.reserved;
  }
  if (t.group) {
    r.group = true;
  }
  if (t.comment) {
    r.comment = t.comment;
  }
  if (t.edition) {
    r._edition = t.edition;
  }
  r._defaultEdition = "proto3";
  return r;
};
g.prototype.toJSON = function (e) {
  const t = n.prototype.toJSON.call(this, e);
  const r = !!e && !!e.keepComments;
  return util.toObject([
    "edition",
    this._editionToJSON(),
    "options",
    (t && t.options) || undefined,
    "oneofs",
    n.arrayToJSON(this.oneofsArray, e),
    "fields",
    n.arrayToJSON(
      this.fieldsArray.filter((e) => !e.declaringField),
      e,
    ) || {},
    "extensions",
    this.extensions && this.extensions.length ? this.extensions : undefined,
    "reserved",
    this.reserved && this.reserved.length ? this.reserved : undefined,
    "group",
    this.group || undefined,
    "nested",
    (t && t.nested) || undefined,
    "comment",
    r ? this.comment : undefined,
  ]);
};
g.prototype.resolveAll = function () {
  if (!this._needsRecursiveResolve) {
    return this;
  }
  n.prototype.resolveAll.call(this);
  const oneofsArray = this.oneofsArray;
  for (r = 0; r < oneofsArray.length;) {
    oneofsArray[r++].resolve();
  }
  for (var t = this.fieldsArray, r = 0; r < t.length;) {
    t[r++].resolve();
  }
  return this;
};
g.prototype._resolveFeaturesRecursive = function (e) {
  if (this._needsRecursiveFeatureResolution) {
    e = this._edition || e;
    n.prototype._resolveFeaturesRecursive.call(this, e);
    this.oneofsArray.forEach((t) => {
      t._resolveFeatures(e);
    });
    this.fieldsArray.forEach((t) => {
      t._resolveFeatures(e);
    });
  }
  return this;
};
g.prototype.get = function (e) {
  return (
    this.fields[e] ||
    (this.oneofs && this.oneofs[e]) ||
    (this.nested && this.nested[e]) ||
    null
  );
};
g.prototype.add = function (e) {
  if (this.get(e.name)) {
    throw Error("duplicate name '" + e.name + "' in " + this);
  }
  if (e instanceof s && e.extend === undefined) {
    if (this._fieldsById ? this._fieldsById[e.id] : this.fieldsById[e.id]) {
      throw Error("duplicate id " + e.id + " in " + this);
    }
    if (this.isReservedId(e.id)) {
      throw Error("id " + e.id + " is reserved in " + this);
    }
    if (this.isReservedName(e.name)) {
      throw Error("name '" + e.name + "' is reserved in " + this);
    }
    if (e.parent) {
      e.parent.remove(e);
    }
    this.fields[e.name] = e;
    e.message = this;
    e.onAdd(this);
    return b(this);
  }
  if (e instanceof o) {
    if (!this.oneofs) {
      this.oneofs = {};
    }
    this.oneofs[e.name] = e;
    e.onAdd(this);
    return b(this);
  }
  return n.prototype.add.call(this, e);
};
g.prototype.remove = function (e) {
  if (e instanceof s && e.extend === undefined) {
    if (!this.fields || this.fields[e.name] !== e) {
      throw Error(e + " is not a member of " + this);
    }
    delete this.fields[e.name];
    e.parent = null;
    e.onRemove(this);
    return b(this);
  }
  if (e instanceof o) {
    if (!this.oneofs || this.oneofs[e.name] !== e) {
      throw Error(e + " is not a member of " + this);
    }
    delete this.oneofs[e.name];
    e.parent = null;
    e.onRemove(this);
    return b(this);
  }
  return n.prototype.remove.call(this, e);
};
g.prototype.isReservedId = function (e) {
  return n.isReservedId(this.reserved, e);
};
g.prototype.isReservedName = function (e) {
  return n.isReservedName(this.reserved, e);
};
g.prototype.create = function (e) {
  return new this.ctor(e);
};
g.prototype.setup = function () {
  const fullName = this.fullName;
  const types = [];
  for (let r = 0; r < this.fieldsArray.length; ++r) {
    types.push(this._fieldsArray[r].resolve().resolvedType);
  }
  this.encode = d(this)({
    Writer,
    types,
    util,
  });
  this.decode = h(this)({
    Reader,
    types,
    util,
  });
  this.verify = m(this)({
    types,
    util,
  });
  this.fromObject = fromObject(this)({
    types,
    util,
  });
  this.toObject = toObject(this)({
    types,
    util,
  });
  const n = v[fullName];
  if (n) {
    const i = Object.create(this);
    i.fromObject = this.fromObject;
    this.fromObject = n.fromObject.bind(i);
    i.toObject = this.toObject;
    this.toObject = n.toObject.bind(i);
  }
  return this;
};
g.prototype.encode = function (e, t) {
  return this.setup().encode(e, t);
};
g.prototype.encodeDelimited = function (e, t) {
  return this.encode(e, t && t.len ? t.fork() : t).ldelim();
};
g.prototype.decode = function (e, t) {
  return this.setup().decode(e, t);
};
g.prototype.decodeDelimited = function (e) {
  if (!(e instanceof Reader)) {
    e = Reader.create(e);
  }
  return this.decode(e, e.uint32());
};
g.prototype.verify = function (e) {
  return this.setup().verify(e);
};
g.prototype.fromObject = function (e) {
  return this.setup().fromObject(e);
};
g.prototype.toObject = function (e, t) {
  return this.setup().toObject(e, t);
};
g.d = function (e) {
  return function (t) {
    util.decorateType(t, e);
  };
};
