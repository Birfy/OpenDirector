import { Name, _, nil } from "./module-E2a.js";
export var UsedValueState;
let s;
class o extends Error {
  constructor(e) {
    super(`CodeGen: "code" for ${e} not defined`);
    this.value = e.value;
  }
}
s = UsedValueState || (UsedValueState = {});
s[(s.Started = 0)] = "Started";
s[(s.Completed = 1)] = "Completed";
export var varKinds = {
  const: new Name("const"),
  let: new Name("let"),
  var: new Name("var"),
};
export class Scope {
  constructor({ prefixes, parent } = {}) {
    this._names = {};
    this._prefixes = prefixes;
    this._parent = parent;
  }
  toName(e) {
    if (e instanceof Name) {
      return e;
    }
    return this.name(e);
  }
  name(e) {
    return new Name(this._newName(e));
  }
  _newName(e) {
    let t = this._names[e] || this._nameGroup(e);
    return `${e}${t.index++}`;
  }
  _nameGroup(prefix) {
    let t;
    let r;
    if (
      ((r = (t = this._parent) == null ? undefined : t._prefixes) == null
        ? undefined
        : r.has(prefix)) ||
      (this._prefixes && !this._prefixes.has(prefix))
    ) {
      throw Error(`CodeGen: prefix "${prefix}" is not allowed in this scope`);
    }
    return (this._names[prefix] = {
      prefix,
      index: 0,
    });
  }
}
export class ValueScopeName extends Name {
  constructor(e, t) {
    super(t);
    this.prefix = e;
  }
  setValue(e, { property, itemIndex }) {
    this.value = e;
    this.scopePath = (0, _)`.${new Name(property)}[${itemIndex}]`;
  }
}
let d = (0, _)`\n`;
export class ValueScope extends Scope {
  constructor(e) {
    super(e);
    this._values = {};
    this._scope = e.scope;
    this.opts = {
      ...e,
      _n: e.lines ? d : nil,
    };
  }
  get() {
    return this._scope;
  }
  name(e) {
    return new ValueScopeName(e, this._newName(e));
  }
  value(e, t) {
    let r;
    if (t.ref === undefined) {
      throw Error("CodeGen: ref must be passed in value");
    }
    let a = this.toName(e);
    let { prefix } = a;
    let i = (r = t.key) != null ? r : t.ref;
    let o = this._values[prefix];
    if (o) {
      let e = o.get(i);
      if (e) {
        return e;
      }
    } else {
      o = this._values[prefix] = new Map();
    }
    o.set(i, a);
    let n = this._scope[prefix] || (this._scope[prefix] = []);
    let n_length = n.length;
    n[n_length] = t.ref;
    a.setValue(t, {
      property: prefix,
      itemIndex: n_length,
    });
    return a;
  }
  getValue(e, t) {
    let r = this._values[e];
    if (r) {
      return r.get(t);
    }
  }
  scopeRefs(e, t = this._values) {
    return this._reduceValues(t, (t) => {
      if (t.scopePath === undefined) {
        throw Error(`CodeGen: name "${t}" has no value`);
      }
      return (0, _)`${e}${t.scopePath}`;
    });
  }
  scopeCode(e = this._values, t, r) {
    return this._reduceValues(
      e,
      (e) => {
        if (e.value === undefined) {
          throw Error(`CodeGen: name "${e}" has no value`);
        }
        return e.value.code;
      },
      t,
      r,
    );
  }
  _reduceValues(e, r, s = {}, n) {
    let l = nil;
    for (let d in e) {
      let c = e[d];
      if (!c) {
        continue;
      }
      let u = (s[d] = s[d] || new Map());
      c.forEach((e) => {
        if (u.has(e)) {
          return;
        }
        u.set(e, UsedValueState.Started);
        let s = r(e);
        if (s) {
          let r = this.opts.es5 ? varKinds.var : varKinds.const;
          l = (0, _)`${l}${r} ${e} = ${s};${this.opts._n}`;
        } else if ((s = n == null ? undefined : n(e))) {
          l = (0, _)`${l}${s}${this.opts._n}`;
        } else {
          throw new o(e);
        }
        u.set(e, UsedValueState.Completed);
      });
    }
    return l;
  }
}
