import { Reporter, EncoderBuffer, DecoderBuffer } from "./module-Yc.js";
import tr from "./module-fn_2.js";
const tn = [
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
const ti = [
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
].concat(tn);
class to {
  constructor(J, Z) {
    const Q = {};
    this._baseState = Q;
    Q.enc = J;
    Q.parent = Z || null;
    Q.children = null;
    Q.tag = null;
    Q.args = null;
    Q.reverseArgs = null;
    Q.choice = null;
    Q.optional = false;
    Q.any = false;
    Q.obj = false;
    Q.use = null;
    Q.useDecoder = null;
    Q.key = null;
    Q.default = null;
    Q.explicit = null;
    Q.implicit = null;
    Q.contains = null;
    if (!Q.parent) {
      Q.children = [];
      this._wrap();
    }
  }
  clone() {
    const _baseState = this._baseState;
    const Z = {};
    ta.forEach((Q) => {
      Z[Q] = _baseState[Q];
    });
    const Q = new this.constructor(Z.parent);
    Q._baseState = Z;
    return Q;
  }
  _wrap() {
    const _baseState = this._baseState;
    ti.forEach(function (Z) {
      this[Z] = function () {
        const Q = new this.constructor(this);
        _baseState.children.push(Q);
        return Q[Z].apply(Q, arguments);
      };
    }, this);
  }
  _init(J) {
    const _baseState = this._baseState;
    tr(_baseState.parent === null);
    J.call(this);
    _baseState.children = _baseState.children.filter(function (J) {
      return J._baseState.parent === this;
    }, this);
    tr.equal(
      _baseState.children.length,
      1,
      "Root node can have only one child",
    );
  }
  _useArgs(J) {
    const _baseState = this._baseState;
    const Q = J.filter(function (J) {
      return J instanceof this.constructor;
    }, this);
    J = J.filter(function (J) {
      return !(J instanceof this.constructor);
    }, this);
    if (Q.length !== 0) {
      tr(_baseState.children === null);
      _baseState.children = Q;
      Q.forEach(function (J) {
        J._baseState.parent = this;
      }, this);
    }
    if (J.length !== 0) {
      tr(_baseState.args === null);
      _baseState.args = J;
      _baseState.reverseArgs = J.map((J) => {
        if (typeof J !== "object" || J.constructor !== Object) {
          return J;
        }
        const Z = {};
        Object.keys(J).forEach((Q) => {
          if (Q == (0 | Q)) {
            Q |= 0;
          }
          Z[J[Q]] = Q;
        });
        return Z;
      });
    }
  }
  use(J) {
    tr(J);
    const _baseState = this._baseState;
    tr(_baseState.use === null);
    _baseState.use = J;
    return this;
  }
  optional() {
    this._baseState.optional = true;
    return this;
  }
  def(J) {
    const _baseState = this._baseState;
    tr(_baseState.default === null);
    _baseState.default = J;
    _baseState.optional = true;
    return this;
  }
  explicit(J) {
    const _baseState = this._baseState;
    tr(_baseState.explicit === null && _baseState.implicit === null);
    _baseState.explicit = J;
    return this;
  }
  implicit(J) {
    const _baseState = this._baseState;
    tr(_baseState.explicit === null && _baseState.implicit === null);
    _baseState.implicit = J;
    return this;
  }
  obj() {
    const _baseState = this._baseState;
    const Z = Array.prototype.slice.call(arguments);
    _baseState.obj = true;
    if (Z.length !== 0) {
      this._useArgs(Z);
    }
    return this;
  }
  key(J) {
    const _baseState = this._baseState;
    tr(_baseState.key === null);
    _baseState.key = J;
    return this;
  }
  any() {
    this._baseState.any = true;
    return this;
  }
  choice(J) {
    const _baseState = this._baseState;
    tr(_baseState.choice === null);
    _baseState.choice = J;
    this._useArgs(Object.keys(J).map((Z) => J[Z]));
    return this;
  }
  contains(J) {
    const _baseState = this._baseState;
    tr(_baseState.use === null);
    _baseState.contains = J;
    return this;
  }
  _decode(J, Z) {
    let Q;
    const _baseState = this._baseState;
    if (_baseState.parent === null) {
      return J.wrapResult(_baseState.children[0]._decode(J, Z));
    }
    let $_default = _baseState.default;
    let tr = true;
    let tn = null;
    if (_baseState.key !== null) {
      tn = J.enterKey(_baseState.key);
    }
    if (_baseState.optional) {
      let ti = null;
      if (_baseState.explicit !== null) {
        ti = _baseState.explicit;
      } else if (_baseState.implicit !== null) {
        ti = _baseState.implicit;
      } else if (_baseState.tag !== null) {
        ti = _baseState.tag;
      }
      if (ti !== null || _baseState.any) {
        tr = this._peekTag(J, ti, _baseState.any);
        if (J.isError(tr)) {
          return tr;
        }
      } else {
        var to = J.save();
        try {
          if (_baseState.choice === null) {
            this._decodeGeneric(_baseState.tag, J, Z);
          } else {
            this._decodeChoice(J, Z);
          }
          tr = true;
        } catch (J) {
          tr = false;
        }
        J.restore(to);
      }
    }
    if (_baseState.obj && tr) {
      Q = J.enterObject();
    }
    if (tr) {
      if (_baseState.explicit !== null) {
        const ta = this._decodeTag(J, _baseState.explicit);
        if (J.isError(ta)) {
          return ta;
        }
        J = ta;
      }
      const ts = J.offset;
      if (_baseState.use === null && _baseState.choice === null) {
        if (_baseState.any) var to = J.save();
        const tf = this._decodeTag(
          J,
          _baseState.implicit !== null ? _baseState.implicit : _baseState.tag,
          _baseState.any,
        );
        if (J.isError(tf)) {
          return tf;
        }
        if (_baseState.any) {
          $_default = J.raw(to);
        } else {
          J = tf;
        }
      }
      if (Z && Z.track && _baseState.tag !== null) {
        Z.track(J.path(), ts, J.length, "tagged");
      }
      if (Z && Z.track && _baseState.tag !== null) {
        Z.track(J.path(), J.offset, J.length, "content");
      }
      if (!_baseState.any) {
        $_default =
          _baseState.choice === null
            ? this._decodeGeneric(_baseState.tag, J, Z)
            : this._decodeChoice(J, Z);
      }
      if (J.isError($_default)) {
        return $_default;
      }
      if (
        !(
          _baseState.any ||
          _baseState.choice !== null ||
          _baseState.children === null
        )
      ) {
        _baseState.children.forEach((Q) => {
          Q._decode(J, Z);
        });
      }
      if (
        _baseState.contains &&
        (_baseState.tag === "octstr" || _baseState.tag === "bitstr")
      ) {
        const tu = new DecoderBuffer($_default);
        $_default = this._getUse(
          _baseState.contains,
          J._reporterState.obj,
        )._decode(tu, Z);
      }
    }
    if (_baseState.obj && tr) {
      $_default = J.leaveObject(Q);
    }
    if (_baseState.key !== null && ($_default !== null || tr === true)) {
      J.leaveKey(tn, _baseState.key, $_default);
    } else if (tn !== null) {
      J.exitKey(tn);
    }
    return $_default;
  }
  _decodeGeneric(J, Z, Q) {
    const _baseState = this._baseState;
    if (J === "seq" || J === "set") {
      return null;
    }
    if (J === "seqof" || J === "setof") {
      return this._decodeList(Z, J, _baseState.args[0], Q);
    }
    if (/str$/.test(J)) {
      return this._decodeStr(Z, J, Q);
    }
    if (J === "objid" && _baseState.args) {
      return this._decodeObjid(Z, _baseState.args[0], _baseState.args[1], Q);
    }
    if (J === "objid") {
      return this._decodeObjid(Z, null, null, Q);
    }
    if (J === "gentime" || J === "utctime") {
      return this._decodeTime(Z, J, Q);
    } else if (J === "null_") {
      return this._decodeNull(Z, Q);
    } else if (J === "bool") {
      return this._decodeBool(Z, Q);
    } else if (J === "objDesc") {
      return this._decodeStr(Z, J, Q);
    } else if (J === "int" || J === "enum") {
      return this._decodeInt(Z, _baseState.args && _baseState.args[0], Q);
    }
    if (_baseState.use !== null) {
      return this._getUse(_baseState.use, Z._reporterState.obj)._decode(Z, Q);
    }
    return Z.error("unknown tag: " + J);
  }
  _getUse(J, Z) {
    const _baseState = this._baseState;
    _baseState.useDecoder = this._use(J, Z);
    tr(_baseState.useDecoder._baseState.parent === null);
    _baseState.useDecoder = _baseState.useDecoder._baseState.children[0];
    if (_baseState.implicit !== _baseState.useDecoder._baseState.implicit) {
      _baseState.useDecoder = _baseState.useDecoder.clone();
      _baseState.useDecoder._baseState.implicit = _baseState.implicit;
    }
    return _baseState.useDecoder;
  }
  _decodeChoice(J, Z) {
    const _baseState = this._baseState;
    let $ = null;
    let tt = false;
    Object.keys(_baseState.choice).some((te) => {
      const tr = J.save();
      const tn = _baseState.choice[te];
      try {
        const ti = tn._decode(J, Z);
        if (J.isError(ti)) {
          return false;
        }
        $ = {
          type: te,
          value: ti,
        };
        tt = true;
      } catch (Z) {
        J.restore(tr);
        return false;
      }
      return true;
    }, this);
    if (tt) {
      return $;
    }
    return J.error("Choice not matched");
  }
  _createEncoderBuffer(J) {
    return new EncoderBuffer(J, this.reporter);
  }
  _encode(J, Z, Q) {
    const _baseState = this._baseState;
    if (_baseState.default === null || _baseState.default !== J) {
      const tt = this._encodeValue(J, Z, Q);
      if (tt !== undefined && !this._skipDefault(tt, Z, Q)) {
        return tt;
      }
    }
  }
  _encodeValue(J, Z, Q) {
    var tt;
    const _baseState = this._baseState;
    if (_baseState.parent === null) {
      return _baseState.children[0]._encode(J, Z || new Reporter());
    }
    var tt = null;
    this.reporter = Z;
    if (_baseState.optional && J === undefined) {
      if (_baseState.default === null) {
        return;
      } else {
        J = _baseState.default;
      }
    }
    let tr = null;
    let tn = false;
    if (_baseState.any) {
      tt = this._createEncoderBuffer(J);
    } else if (_baseState.choice) {
      tt = this._encodeChoice(J, Z);
    } else if (_baseState.contains) {
      tr = this._getUse(_baseState.contains, Q)._encode(J, Z);
      tn = true;
    } else if (_baseState.children) {
      tr = _baseState.children
        .map((Q) => {
          if (Q._baseState.tag === "null_") {
            return Q._encode(null, Z, J);
          }
          if (Q._baseState.key === null) {
            return Z.error("Child should have a key");
          }
          const $ = Z.enterKey(Q._baseState.key);
          if (typeof J !== "object") {
            return Z.error("Child expected, but input is not object");
          }
          const tt = Q._encode(J[Q._baseState.key], Z, J);
          Z.leaveKey($);
          return tt;
        }, this)
        .filter((J) => J);
      tr = this._createEncoderBuffer(tr);
    } else if (_baseState.tag === "seqof" || _baseState.tag === "setof") {
      if (!(_baseState.args && _baseState.args.length === 1)) {
        return Z.error("Too many args for : " + _baseState.tag);
      }
      if (!Array.isArray(J)) {
        return Z.error("seqof/setof, but data is not Array");
      }
      const ti = this.clone();
      ti._baseState.implicit = null;
      tr = this._createEncoderBuffer(
        J.map(function (Q) {
          const _baseState = this._baseState;
          return this._getUse(_baseState.args[0], J)._encode(Q, Z);
        }, ti),
      );
    } else {
      if (_baseState.use !== null) {
        tt = this._getUse(_baseState.use, Q)._encode(J, Z);
      } else {
        tr = this._encodePrimitive(_baseState.tag, J);
        tn = true;
      }
    }
    if (!_baseState.any && _baseState.choice === null) {
      const to =
        _baseState.implicit !== null ? _baseState.implicit : _baseState.tag;
      const ta = _baseState.implicit === null ? "universal" : "context";
      if (to === null) {
        if (_baseState.use === null) {
          Z.error("Tag could be omitted only for .use()");
        }
      } else if (_baseState.use === null) {
        tt = this._encodeComposite(to, tn, ta, tr);
      }
    }
    if (_baseState.explicit !== null) {
      tt = this._encodeComposite(_baseState.explicit, false, "context", tt);
    }
    return tt;
  }
  _encodeChoice(J, Z) {
    const _baseState = this._baseState;
    const $ = _baseState.choice[J.type];
    if (!$) {
      tr(
        false,
        J.type +
          " not found in " +
          JSON.stringify(Object.keys(_baseState.choice)),
      );
    }
    return $._encode(J.value, Z);
  }
  _encodePrimitive(J, Z) {
    const _baseState = this._baseState;
    if (/str$/.test(J)) {
      return this._encodeStr(Z, J);
    }
    if (J === "objid" && _baseState.args) {
      return this._encodeObjid(
        Z,
        _baseState.reverseArgs[0],
        _baseState.args[1],
      );
    }
    if (J === "objid") {
      return this._encodeObjid(Z, null, null);
    }
    if (J === "gentime" || J === "utctime") {
      return this._encodeTime(Z, J);
    }
    if (J === "null_") {
      return this._encodeNull();
    } else if (J === "int" || J === "enum") {
      return this._encodeInt(Z, _baseState.args && _baseState.reverseArgs[0]);
    } else if (J === "bool") {
      return this._encodeBool(Z);
    } else if (J === "objDesc") {
      return this._encodeStr(Z, J);
    } else {
      throw Error("Unsupported tag: " + J);
    }
  }
  _isNumstr(J) {
    return /^[0-9 ]*$/.test(J);
  }
  _isPrintstr(J) {
    return /^[A-Za-z0-9 '\(\)\+,\-\.\/:=\?]*$/.test(J);
  }
}
export default to;
const ta = [
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
].forEach((J) => {
  to.prototype[J] = function () {
    throw Error(J + " not implemented for encoding: " + this._baseState.enc);
  };
});
tn.forEach((J) => {
  to.prototype[J] = function () {
    const _baseState = this._baseState;
    const Q = Array.prototype.slice.call(arguments);
    tr(_baseState.tag === null);
    _baseState.tag = J;
    this._useArgs(Q);
    return this;
  };
});
