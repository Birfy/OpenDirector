import n from "./module-Bi.js";
import i from "./module-osk.js";
import o from "./module-Vva.js";
export default s;
((s.prototype = Object.create(n.prototype)).constructor = s).className =
  "OneOf";
function s(e, t, r, i) {
  if (!Array.isArray(t)) {
    r = t;
    t = undefined;
  }
  n.call(this, e, r);
  if (!(t === undefined || Array.isArray(t))) {
    throw TypeError("fieldNames must be an Array");
  }
  this.oneof = t || [];
  this.fieldsArray = [];
  this.comment = i;
}
function a(e) {
  if (e.parent) {
    for (let t = 0; t < e.fieldsArray.length; ++t) {
      if (!e.fieldsArray[t].parent) {
        e.parent.add(e.fieldsArray[t]);
      }
    }
  }
}
s.fromJSON = function (e, t) {
  return new s(e, t.oneof, t.options, t.comment);
};
s.prototype.toJSON = function (e) {
  const t = !!e && !!e.keepComments;
  return o.toObject([
    "options",
    this.options,
    "oneof",
    this.oneof,
    "comment",
    t ? this.comment : undefined,
  ]);
};
s.prototype.add = function (e) {
  if (!(e instanceof i)) {
    throw TypeError("field must be a Field");
  }
  if (e.parent && e.parent !== this.parent) {
    e.parent.remove(e);
  }
  this.oneof.push(e.name);
  this.fieldsArray.push(e);
  e.partOf = this;
  a(this);
  return this;
};
s.prototype.remove = function (e) {
  if (!(e instanceof i)) {
    throw TypeError("field must be a Field");
  }
  let t = this.fieldsArray.indexOf(e);
  if (t < 0) {
    throw Error(e + " is not a member of " + this);
  }
  this.fieldsArray.splice(t, 1);
  if ((t = this.oneof.indexOf(e.name)) > -1) {
    this.oneof.splice(t, 1);
  }
  e.partOf = null;
  return this;
};
s.prototype.onAdd = function (e) {
  n.prototype.onAdd.call(this, e);
  for (let t = 0; t < this.oneof.length; ++t) {
    const r = e.get(this.oneof[t]);
    if (r && !r.partOf) {
      r.partOf = this;
      this.fieldsArray.push(r);
    }
  }
  a(this);
};
s.prototype.onRemove = function (e) {
  let t;
  for (let r = 0; r < this.fieldsArray.length; ++r) {
    if ((t = this.fieldsArray[r]).parent) {
      t.parent.remove(t);
    }
  }
  n.prototype.onRemove.call(this, e);
};
Object.defineProperty(s.prototype, "isProto3Optional", {
  get: function () {
    if (this.fieldsArray == null || this.fieldsArray.length !== 1) {
      return false;
    }
    const e = this.fieldsArray[0];
    return e.options != null && e.options.proto3_optional === true;
  },
});
s.d = function () {
  const e = Array(arguments.length);
  for (let t = 0; t < arguments.length;) {
    e[t] = arguments[t++];
  }
  return function (t, r) {
    o.decorateType(t.constructor).add(new s(r, e));
    Object.defineProperty(t, r, {
      get: o.oneOfGetter(e),
      set: o.oneOfSetter(e),
    });
  };
};
