import i from "./module-Bi.js";
import o from "./module-Taa.js";
import { defaults, long } from "./module-kxL.js";
import a from "./module-Vva.js";
export default u;
let n;
((u.prototype = Object.create(i.prototype)).constructor = u).className =
  "Field";
var l = /^required|optional|repeated$/;
function u(e, t, r, n, o, u, f) {
  if (a.isObject(n)) {
    f = o;
    u = n;
    o = undefined;
    n = undefined;
  } else if (a.isObject(o)) {
    f = u;
    u = o;
    o = undefined;
  }
  i.call(this, e, u);
  if (!a.isInteger(t) || t < 0) {
    throw TypeError("id must be a non-negative integer");
  }
  if (!a.isString(r)) {
    throw TypeError("type must be a string");
  }
  if (n !== undefined && !l.test((n = n.toString().toLowerCase()))) {
    throw TypeError("rule must be a string rule");
  }
  if (o !== undefined && !a.isString(o)) {
    throw TypeError("extend must be a string");
  }
  if (n === "proto3_optional") {
    n = "optional";
  }
  this.rule = n && n !== "optional" ? n : undefined;
  this.type = r;
  this.id = t;
  this.extend = o || undefined;
  this.repeated = n === "repeated";
  this.map = false;
  this.message = null;
  this.partOf = null;
  this.typeDefault = null;
  this.defaultValue = null;
  this.long = !!a.Long && long[r] !== undefined;
  this.bytes = r === "bytes";
  this.resolvedType = null;
  this.extensionField = null;
  this.declaringField = null;
  this.comment = f;
}
u.fromJSON = function (e, t) {
  const r = new u(e, t.id, t.type, t.rule, t.extend, t.options, t.comment);
  if (t.edition) {
    r._edition = t.edition;
  }
  r._defaultEdition = "proto3";
  return r;
};
Object.defineProperty(u.prototype, "required", {
  get: function () {
    return this._features.field_presence === "LEGACY_REQUIRED";
  },
});
Object.defineProperty(u.prototype, "optional", {
  get: function () {
    return !this.required;
  },
});
Object.defineProperty(u.prototype, "delimited", {
  get: function () {
    return (
      this.resolvedType instanceof n &&
      this._features.message_encoding === "DELIMITED"
    );
  },
});
Object.defineProperty(u.prototype, "packed", {
  get: function () {
    return this._features.repeated_field_encoding === "PACKED";
  },
});
Object.defineProperty(u.prototype, "hasPresence", {
  get: function () {
    return (
      !this.repeated &&
      !this.map &&
      (this.partOf ||
        this.declaringField ||
        this.extensionField ||
        this._features.field_presence !== "IMPLICIT")
    );
  },
});
u.prototype.setOption = function (e, t, r) {
  return i.prototype.setOption.call(this, e, t, r);
};
u.prototype.toJSON = function (e) {
  const t = !!e && !!e.keepComments;
  return a.toObject([
    "edition",
    this._editionToJSON(),
    "rule",
    (this.rule !== "optional" && this.rule) || undefined,
    "type",
    this.type,
    "id",
    this.id,
    "extend",
    this.extend,
    "options",
    this.options,
    "comment",
    t ? this.comment : undefined,
  ]);
};
u.prototype.resolve = function () {
  if (this.resolved) {
    return this;
  }
  if ((this.typeDefault = defaults[this.type]) === undefined) {
    this.resolvedType = (
      this.declaringField ? this.declaringField.parent : this.parent
    ).lookupTypeOrEnum(this.type);
    if (this.resolvedType instanceof n) {
      this.typeDefault = null;
    } else {
      this.typeDefault =
        this.resolvedType.values[Object.keys(this.resolvedType.values)[0]];
    }
  } else if (this.options && this.options.proto3_optional) {
    this.typeDefault = null;
  }
  if (this.options && this.options.default != null) {
    this.typeDefault = this.options.default;
    if (
      this.resolvedType instanceof o &&
      typeof this.typeDefault === "string"
    ) {
      this.typeDefault = this.resolvedType.values[this.typeDefault];
    }
  }
  if (this.options) {
    if (
      !(
        this.options.packed === undefined ||
        !this.resolvedType ||
        this.resolvedType instanceof o
      )
    ) {
      delete this.options.packed;
    }
    if (!Object.keys(this.options).length) {
      this.options = undefined;
    }
  }
  if (this.long) {
    this.typeDefault = a.Long.fromNumber(
      this.typeDefault,
      this.type.charAt(0) === "u",
    );
    if (Object.freeze) {
      Object.freeze(this.typeDefault);
    }
  } else if (this.bytes && typeof this.typeDefault === "string") {
    let e;
    if (a.base64.test(this.typeDefault)) {
      a.base64.decode(
        this.typeDefault,
        (e = a.newBuffer(a.base64.length(this.typeDefault))),
        0,
      );
    } else {
      a.utf8.write(
        this.typeDefault,
        (e = a.newBuffer(a.utf8.length(this.typeDefault))),
        0,
      );
    }
    this.typeDefault = e;
  }
  if (this.map) {
    this.defaultValue = a.emptyObject;
  } else if (this.repeated) {
    this.defaultValue = a.emptyArray;
  } else {
    this.defaultValue = this.typeDefault;
  }
  if (this.parent instanceof n) {
    this.parent.ctor.prototype[this.name] = this.defaultValue;
  }
  return i.prototype.resolve.call(this);
};
u.prototype._inferLegacyProtoFeatures = function (e) {
  if (e !== "proto2" && e !== "proto3") {
    return {};
  }
  const t = {};
  if (this.rule === "required") {
    t.field_presence = "LEGACY_REQUIRED";
  }
  if (this.parent && defaults[this.type] === undefined) {
    const r = this.parent.get(this.type.split(".").pop());
    if (r && r instanceof n && r.group) {
      t.message_encoding = "DELIMITED";
    }
  }
  if (this.getOption("packed") === true) {
    t.repeated_field_encoding = "PACKED";
  } else if (this.getOption("packed") === false) {
    t.repeated_field_encoding = "EXPANDED";
  }
  return t;
};
u.prototype._resolveFeatures = function (e) {
  return i.prototype._resolveFeatures.call(this, this._edition || e);
};
u.d = function (e, t, r, n) {
  if (typeof t === "function") {
    t = a.decorateType(t).name;
  } else if (t && typeof t === "object") {
    t = a.decorateEnum(t).name;
  }
  return function (i, o) {
    a.decorateType(i.constructor).add(
      new u(o, e, t, r, {
        default: n,
      }),
    );
  };
};
u._configure = function (e) {
  n = e;
};
