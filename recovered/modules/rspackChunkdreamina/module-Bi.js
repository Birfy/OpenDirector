import n from "./module-P62.js";
import o from "./module-Vva.js";
export default u;
u.className = "ReflectionObject";
let i;
const s = {
  enum_type: "OPEN",
  field_presence: "EXPLICIT",
  json_format: "ALLOW",
  message_encoding: "LENGTH_PREFIXED",
  repeated_field_encoding: "PACKED",
  utf8_validation: "VERIFY",
};
const a = {
  enum_type: "CLOSED",
  field_presence: "EXPLICIT",
  json_format: "LEGACY_BEST_EFFORT",
  message_encoding: "LENGTH_PREFIXED",
  repeated_field_encoding: "EXPANDED",
  utf8_validation: "NONE",
};
const l = {
  enum_type: "OPEN",
  field_presence: "IMPLICIT",
  json_format: "ALLOW",
  message_encoding: "LENGTH_PREFIXED",
  repeated_field_encoding: "PACKED",
  utf8_validation: "VERIFY",
};
function u(e, t) {
  if (!o.isString(e)) {
    throw TypeError("name must be a string");
  }
  if (t && !o.isObject(t)) {
    throw TypeError("options must be an object");
  }
  this.options = t;
  this.parsedOptions = null;
  this.name = e;
  this._edition = null;
  this._defaultEdition = "proto2";
  this._features = {};
  this._featuresResolved = false;
  this.parent = null;
  this.resolved = false;
  this.comment = null;
  this.filename = null;
}
Object.defineProperties(u.prototype, {
  root: {
    get: function () {
      for (var e = this; e.parent !== null;) {
        e = e.parent;
      }
      return e;
    },
  },
  fullName: {
    get: function () {
      const e = [this.name];
      for (let t = this.parent; t;) {
        e.unshift(t.name);
        t = t.parent;
      }
      return e.join(".");
    },
  },
});
u.prototype.toJSON = function () {
  throw Error();
};
u.prototype.onAdd = function (e) {
  if (this.parent && this.parent !== e) {
    this.parent.remove(this);
  }
  this.parent = e;
  this.resolved = false;
  const e_root = e.root;
  if (e_root instanceof i) {
    e_root._handleAdd(this);
  }
};
u.prototype.onRemove = function (e) {
  const e_root = e.root;
  if (e_root instanceof i) {
    e_root._handleRemove(this);
  }
  this.parent = null;
  this.resolved = false;
};
u.prototype.resolve = function () {
  if (!this.resolved) {
    if (this.root instanceof i) {
      this.resolved = true;
    }
  }
  return this;
};
u.prototype._resolveFeaturesRecursive = function (e) {
  return this._resolveFeatures(this._edition || e);
};
u.prototype._resolveFeatures = function (e) {
  if (!this._featuresResolved) {
    let t = {};
    if (!e) {
      throw Error("Unknown edition for " + this.fullName);
    }
    const r = Object.assign(
      this.options
        ? {
            ...this.options.features,
          }
        : {},
      this._inferLegacyProtoFeatures(e),
    );
    if (this._edition) {
      if (e === "proto2") {
        t = {
          ...a,
        };
      } else if (e === "proto3") {
        t = {
          ...l,
        };
      } else if (e === "2023") {
        t = {
          ...s,
        };
      } else {
        throw Error("Unknown edition: " + e);
      }
      this._features = Object.assign(t, r || {});
      this._featuresResolved = true;
      return;
    }
    if (this.partOf instanceof n) {
      const i = {
        ...this.partOf._features,
      };
      this._features = Object.assign(i, r || {});
    } else if (this.declaringField);
    else if (this.parent) {
      const o = {
        ...this.parent._features,
      };
      this._features = Object.assign(o, r || {});
    } else {
      throw Error("Unable to find a parent for " + this.fullName);
    }
    if (this.extensionField) {
      this.extensionField._features = this._features;
    }
    this._featuresResolved = true;
  }
};
u.prototype._inferLegacyProtoFeatures = function () {
  return {};
};
u.prototype.getOption = function (e) {
  if (this.options) {
    return this.options[e];
  }
};
u.prototype.setOption = function (e, t, r) {
  if (!this.options) {
    this.options = {};
  }
  if (/^features\./.test(e)) {
    o.setProperty(this.options, e, t, r);
  } else if (!(r && this.options[e] !== undefined)) {
    if (this.getOption(e) !== t) {
      this.resolved = false;
    }
    this.options[e] = t;
  }
  return this;
};
u.prototype.setParsedOption = function (e, t, r) {
  if (!this.parsedOptions) {
    this.parsedOptions = [];
  }
  const parsedOptions = this.parsedOptions;
  if (r) {
    let i = parsedOptions.find((t) =>
      Object.prototype.hasOwnProperty.call(t, e),
    );
    if (i) {
      const s = i[e];
      o.setProperty(s, r, t);
    } else {
      i = {};
      i[e] = o.setProperty({}, r, t);
      parsedOptions.push(i);
    }
  } else {
    const a = {};
    a[e] = t;
    parsedOptions.push(a);
  }
  return this;
};
u.prototype.setOptions = function (e, t) {
  if (e) {
    for (let r = Object.keys(e), n = 0; n < r.length; ++n) {
      this.setOption(r[n], e[r[n]], t);
    }
  }
  return this;
};
u.prototype.toString = function () {
  const className = this.constructor.className;
  const fullName = this.fullName;
  if (fullName.length) {
    return className + " " + fullName;
  }
  return className;
};
u.prototype._editionToJSON = function () {
  if (this._edition && this._edition !== "proto3") {
    return this._edition;
  }
};
u._configure = function (e) {
  i = e;
};
