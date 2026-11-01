import { Reporter, EncoderBuffer, DecoderBuffer } from "./module-Ngd.js";
import a from "TnJ";
const s = [
  "seq",
  "seqof",
  "set",
  "setof",
  "objid",
  "bool",
  "gentime",
  "utctime",
  "null_",
  "enum",
  "int",
  "objDesc",
  "bitstr",
  "bmpstr",
  "charstr",
  "genstr",
  "graphstr",
  "ia5str",
  "iso646str",
  "numstr",
  "octstr",
  "printstr",
  "t61str",
  "unistr",
  "utf8str",
  "videostr",
];
const o = [
  "key",
  "obj",
  "use",
  "optional",
  "explicit",
  "implicit",
  "def",
  "choice",
  "any",
  "contains",
].concat(s);
class h {
  constructor(t, e) {
    const r = {};
    this._baseState = r;
    r.enc = t;
    r.parent = e || null;
    r.children = null;
    r.tag = null;
    r.args = null;
    r.reverseArgs = null;
    r.choice = null;
    r.optional = false;
    r.any = false;
    r.obj = false;
    r.use = null;
    r.useDecoder = null;
    r.key = null;
    r.default = null;
    r.explicit = null;
    r.implicit = null;
    r.contains = null;
    if (!r.parent) {
      r.children = [];
      this._wrap();
    }
  }
  clone() {
    const _baseState = this._baseState;
    const e = {};
    d.forEach((r) => {
      e[r] = _baseState[r];
    });
    const r = new this.constructor(e.parent);
    r._baseState = e;
    return r;
  }
  _wrap() {
    const _baseState = this._baseState;
    o.forEach(function (e) {
      this[e] = function () {
        const r = new this.constructor(this);
        _baseState.children.push(r);
        return r[e].apply(r, arguments);
      };
    }, this);
  }
  _init(t) {
    const _baseState = this._baseState;
    a(_baseState.parent === null);
    t.call(this);
    _baseState.children = _baseState.children.filter(function (t) {
      return t._baseState.parent === this;
    }, this);
    a.equal(_baseState.children.length, 1, "Root node can have only one child");
  }
  _useArgs(t) {
    const _baseState = this._baseState;
    const r = t.filter(function (t) {
      return t instanceof this.constructor;
    }, this);
    t = t.filter(function (t) {
      return !(t instanceof this.constructor);
    }, this);
    if (r.length !== 0) {
      a(_baseState.children === null);
      _baseState.children = r;
      r.forEach(function (t) {
        t._baseState.parent = this;
      }, this);
    }
    if (t.length !== 0) {
      a(_baseState.args === null);
      _baseState.args = t;
      _baseState.reverseArgs = t.map((t) => {
        if (typeof t !== "object" || t.constructor !== Object) {
          return t;
        }
        const e = {};
        Object.keys(t).forEach((r) => {
          if (r == (0 | r)) {
            r |= 0;
          }
          e[t[r]] = r;
        });
        return e;
      });
    }
  }
  use(t) {
    a(t);
    const _baseState = this._baseState;
    a(_baseState.use === null);
    _baseState.use = t;
    return this;
  }
  optional() {
    this._baseState.optional = true;
    return this;
  }
  def(t) {
    const _baseState = this._baseState;
    a(_baseState.default === null);
    _baseState.default = t;
    _baseState.optional = true;
    return this;
  }
  explicit(t) {
    const _baseState = this._baseState;
    a(_baseState.explicit === null && _baseState.implicit === null);
    _baseState.explicit = t;
    return this;
  }
  implicit(t) {
    const _baseState = this._baseState;
    a(_baseState.explicit === null && _baseState.implicit === null);
    _baseState.implicit = t;
    return this;
  }
  obj() {
    const _baseState = this._baseState;
    const e = Array.prototype.slice.call(arguments);
    _baseState.obj = true;
    if (e.length !== 0) {
      this._useArgs(e);
    }
    return this;
  }
  key(t) {
    const _baseState = this._baseState;
    a(_baseState.key === null);
    _baseState.key = t;
    return this;
  }
  any() {
    this._baseState.any = true;
    return this;
  }
  choice(t) {
    const _baseState = this._baseState;
    a(_baseState.choice === null);
    _baseState.choice = t;
    this._useArgs(Object.keys(t).map((e) => t[e]));
    return this;
  }
  contains(t) {
    const _baseState = this._baseState;
    a(_baseState.use === null);
    _baseState.contains = t;
    return this;
  }
  _decode(t, e) {
    let r;
    const _baseState = this._baseState;
    if (_baseState.parent === null) {
      return t.wrapResult(_baseState.children[0]._decode(t, e));
    }
    let i_default = _baseState.default;
    let a = true;
    let s = null;
    if (_baseState.key !== null) {
      s = t.enterKey(_baseState.key);
    }
    if (_baseState.optional) {
      let o = null;
      if (_baseState.explicit !== null) {
        o = _baseState.explicit;
      } else if (_baseState.implicit !== null) {
        o = _baseState.implicit;
      } else if (_baseState.tag !== null) {
        o = _baseState.tag;
      }
      if (o !== null || _baseState.any) {
        a = this._peekTag(t, o, _baseState.any);
        if (t.isError(a)) {
          return a;
        }
      } else {
        var h = t.save();
        try {
          if (_baseState.choice === null) {
            this._decodeGeneric(_baseState.tag, t, e);
          } else {
            this._decodeChoice(t, e);
          }
          a = true;
        } catch (t) {
          a = false;
        }
        t.restore(h);
      }
    }
    if (_baseState.obj && a) {
      r = t.enterObject();
    }
    if (a) {
      if (_baseState.explicit !== null) {
        const d = this._decodeTag(t, _baseState.explicit);
        if (t.isError(d)) {
          return d;
        }
        t = d;
      }
      const c = t.offset;
      if (_baseState.use === null && _baseState.choice === null) {
        if (_baseState.any) var h = t.save();
        const u = this._decodeTag(
          t,
          _baseState.implicit !== null ? _baseState.implicit : _baseState.tag,
          _baseState.any,
        );
        if (t.isError(u)) {
          return u;
        }
        if (_baseState.any) {
          i_default = t.raw(h);
        } else {
          t = u;
        }
      }
      if (e && e.track && _baseState.tag !== null) {
        e.track(t.path(), c, t.length, "tagged");
      }
      if (e && e.track && _baseState.tag !== null) {
        e.track(t.path(), t.offset, t.length, "content");
      }
      if (!_baseState.any) {
        i_default =
          _baseState.choice === null
            ? this._decodeGeneric(_baseState.tag, t, e)
            : this._decodeChoice(t, e);
      }
      if (t.isError(i_default)) {
        return i_default;
      }
      if (
        !(
          _baseState.any ||
          _baseState.choice !== null ||
          _baseState.children === null
        )
      ) {
        _baseState.children.forEach((r) => {
          r._decode(t, e);
        });
      }
      if (
        _baseState.contains &&
        (_baseState.tag === "octstr" || _baseState.tag === "bitstr")
      ) {
        const l = new DecoderBuffer(i_default);
        i_default = this._getUse(
          _baseState.contains,
          t._reporterState.obj,
        )._decode(l, e);
      }
    }
    if (_baseState.obj && a) {
      i_default = t.leaveObject(r);
    }
    if (_baseState.key !== null && (i_default !== null || a === true)) {
      t.leaveKey(s, _baseState.key, i_default);
    } else if (s !== null) {
      t.exitKey(s);
    }
    return i_default;
  }
  _decodeGeneric(t, e, r) {
    const _baseState = this._baseState;
    if (t === "seq" || t === "set") {
      return null;
    }
    if (t === "seqof" || t === "setof") {
      return this._decodeList(e, t, _baseState.args[0], r);
    }
    if (/str$/.test(t)) {
      return this._decodeStr(e, t, r);
    }
    if (t === "objid" && _baseState.args) {
      return this._decodeObjid(e, _baseState.args[0], _baseState.args[1], r);
    }
    if (t === "objid") {
      return this._decodeObjid(e, null, null, r);
    }
    if (t === "gentime" || t === "utctime") {
      return this._decodeTime(e, t, r);
    } else if (t === "null_") {
      return this._decodeNull(e, r);
    } else if (t === "bool") {
      return this._decodeBool(e, r);
    } else if (t === "objDesc") {
      return this._decodeStr(e, t, r);
    } else if (t === "int" || t === "enum") {
      return this._decodeInt(e, _baseState.args && _baseState.args[0], r);
    }
    if (_baseState.use !== null) {
      return this._getUse(_baseState.use, e._reporterState.obj)._decode(e, r);
    }
    return e.error("unknown tag: " + t);
  }
  _getUse(t, e) {
    const _baseState = this._baseState;
    _baseState.useDecoder = this._use(t, e);
    a(_baseState.useDecoder._baseState.parent === null);
    _baseState.useDecoder = _baseState.useDecoder._baseState.children[0];
    if (_baseState.implicit !== _baseState.useDecoder._baseState.implicit) {
      _baseState.useDecoder = _baseState.useDecoder.clone();
      _baseState.useDecoder._baseState.implicit = _baseState.implicit;
    }
    return _baseState.useDecoder;
  }
  _decodeChoice(t, e) {
    const _baseState = this._baseState;
    let i = null;
    let f = false;
    Object.keys(_baseState.choice).some((n) => {
      const a = t.save();
      const s = _baseState.choice[n];
      try {
        const o = s._decode(t, e);
        if (t.isError(o)) {
          return false;
        }
        i = {
          type: n,
          value: o,
        };
        f = true;
      } catch (e) {
        t.restore(a);
        return false;
      }
      return true;
    }, this);
    if (f) {
      return i;
    }
    return t.error("Choice not matched");
  }
  _createEncoderBuffer(t) {
    return new EncoderBuffer(t, this.reporter);
  }
  _encode(t, e, r) {
    const _baseState = this._baseState;
    if (_baseState.default === null || _baseState.default !== t) {
      const f = this._encodeValue(t, e, r);
      if (f !== undefined && !this._skipDefault(f, e, r)) {
        return f;
      }
    }
  }
  _encodeValue(t, e, r) {
    var f;
    const _baseState = this._baseState;
    if (_baseState.parent === null) {
      return _baseState.children[0]._encode(t, e || new Reporter());
    }
    var f = null;
    this.reporter = e;
    if (_baseState.optional && t === undefined) {
      if (_baseState.default === null) {
        return;
      } else {
        t = _baseState.default;
      }
    }
    let a = null;
    let s = false;
    if (_baseState.any) {
      f = this._createEncoderBuffer(t);
    } else if (_baseState.choice) {
      f = this._encodeChoice(t, e);
    } else if (_baseState.contains) {
      a = this._getUse(_baseState.contains, r)._encode(t, e);
      s = true;
    } else if (_baseState.children) {
      a = _baseState.children
        .map((r) => {
          if (r._baseState.tag === "null_") {
            return r._encode(null, e, t);
          }
          if (r._baseState.key === null) {
            return e.error("Child should have a key");
          }
          const i = e.enterKey(r._baseState.key);
          if (typeof t !== "object") {
            return e.error("Child expected, but input is not object");
          }
          const f = r._encode(t[r._baseState.key], e, t);
          e.leaveKey(i);
          return f;
        }, this)
        .filter((t) => t);
      a = this._createEncoderBuffer(a);
    } else if (_baseState.tag === "seqof" || _baseState.tag === "setof") {
      if (!(_baseState.args && _baseState.args.length === 1)) {
        return e.error("Too many args for : " + _baseState.tag);
      }
      if (!Array.isArray(t)) {
        return e.error("seqof/setof, but data is not Array");
      }
      const o = this.clone();
      o._baseState.implicit = null;
      a = this._createEncoderBuffer(
        t.map(function (r) {
          const _baseState = this._baseState;
          return this._getUse(_baseState.args[0], t)._encode(r, e);
        }, o),
      );
    } else {
      if (_baseState.use !== null) {
        f = this._getUse(_baseState.use, r)._encode(t, e);
      } else {
        a = this._encodePrimitive(_baseState.tag, t);
        s = true;
      }
    }
    if (!_baseState.any && _baseState.choice === null) {
      const h =
        _baseState.implicit !== null ? _baseState.implicit : _baseState.tag;
      const d = _baseState.implicit === null ? "universal" : "context";
      if (h === null) {
        if (_baseState.use === null) {
          e.error("Tag could be omitted only for .use()");
        }
      } else if (_baseState.use === null) {
        f = this._encodeComposite(h, s, d, a);
      }
    }
    if (_baseState.explicit !== null) {
      f = this._encodeComposite(_baseState.explicit, false, "context", f);
    }
    return f;
  }
  _encodeChoice(t, e) {
    const _baseState = this._baseState;
    const i = _baseState.choice[t.type];
    if (!i) {
      a(
        false,
        t.type +
          " not found in " +
          JSON.stringify(Object.keys(_baseState.choice)),
      );
    }
    return i._encode(t.value, e);
  }
  _encodePrimitive(t, e) {
    const _baseState = this._baseState;
    if (/str$/.test(t)) {
      return this._encodeStr(e, t);
    }
    if (t === "objid" && _baseState.args) {
      return this._encodeObjid(
        e,
        _baseState.reverseArgs[0],
        _baseState.args[1],
      );
    }
    if (t === "objid") {
      return this._encodeObjid(e, null, null);
    }
    if (t === "gentime" || t === "utctime") {
      return this._encodeTime(e, t);
    }
    if (t === "null_") {
      return this._encodeNull();
    } else if (t === "int" || t === "enum") {
      return this._encodeInt(e, _baseState.args && _baseState.reverseArgs[0]);
    } else if (t === "bool") {
      return this._encodeBool(e);
    } else if (t === "objDesc") {
      return this._encodeStr(e, t);
    } else {
      throw Error("Unsupported tag: " + t);
    }
  }
  _isNumstr(t) {
    return /^[0-9 ]*$/.test(t);
  }
  _isPrintstr(t) {
    return /^[A-Za-z0-9 '\(\)\+,\-\.\/:=\?]*$/.test(t);
  }
}
export default h;
const d = [
  "enc",
  "parent",
  "children",
  "tag",
  "args",
  "reverseArgs",
  "choice",
  "optional",
  "any",
  "obj",
  "use",
  "alteredUse",
  "key",
  "default",
  "explicit",
  "implicit",
  "contains",
];
[
  "_peekTag",
  "_decodeTag",
  "_use",
  "_decodeStr",
  "_decodeObjid",
  "_decodeTime",
  "_decodeNull",
  "_decodeInt",
  "_decodeBool",
  "_decodeList",
  "_encodeComposite",
  "_encodeStr",
  "_encodeObjid",
  "_encodeTime",
  "_encodeNull",
  "_encodeInt",
  "_encodeBool",
].forEach((t) => {
  h.prototype[t] = function () {
    throw Error(t + " not implemented for encoding: " + this._baseState.enc);
  };
});
s.forEach((t) => {
  h.prototype[t] = function () {
    const _baseState = this._baseState;
    const r = Array.prototype.slice.call(arguments);
    a(_baseState.tag === null);
    _baseState.tag = t;
    this._useArgs(r);
    return this;
  };
});
