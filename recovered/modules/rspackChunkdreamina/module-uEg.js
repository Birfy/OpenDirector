import {
  Name,
  _ as __1,
  _Code,
  _CodeOrName,
  addCodeArg,
  nil,
} from "./module-E2a.js";
import { Scope, varKinds } from "./module-sOW.js";
export { _ } from "./module-E2a.js";
export { str } from "./module-E2a.js";
export { strConcat } from "./module-E2a.js";
export { nil } from "./module-E2a.js";
export { getProperty } from "./module-E2a.js";
export { stringify } from "./module-E2a.js";
export { regexpCode } from "./module-E2a.js";
export { Name } from "./module-E2a.js";
export { Scope } from "./module-sOW.js";
export { ValueScope } from "./module-sOW.js";
export { ValueScopeName } from "./module-sOW.js";
export { varKinds } from "./module-sOW.js";
export var operators = {
  GT: new _Code(">"),
  GTE: new _Code(">="),
  LT: new _Code("<"),
  LTE: new _Code("<="),
  EQ: new _Code("==="),
  NEQ: new _Code("!=="),
  NOT: new _Code("!"),
  OR: new _Code("||"),
  AND: new _Code("&&"),
  ADD: new _Code("+"),
};
class n {
  optimizeNodes() {
    return this;
  }
  optimizeNames(e, t) {
    return this;
  }
}
class l extends n {
  constructor(e, t, r) {
    super();
    this.varKind = e;
    this.name = t;
    this.rhs = r;
  }
  render({ es5, _n }) {
    let r = es5 ? varKinds.var : this.varKind;
    let a = this.rhs === undefined ? "" : ` = ${this.rhs}`;
    return `${r} ${this.name}${a};` + _n;
  }
  optimizeNames(e, t) {
    if (e[this.name.str]) {
      if (this.rhs) {
        this.rhs = R(this.rhs, e, t);
      }
      return this;
    }
  }
  get names() {
    if (this.rhs instanceof _CodeOrName) {
      return this.rhs.names;
    }
    return {};
  }
}
class d extends n {
  constructor(e, t, r) {
    super();
    this.lhs = e;
    this.rhs = t;
    this.sideEffects = r;
  }
  render({ _n }) {
    return `${this.lhs} = ${this.rhs};` + _n;
  }
  optimizeNames(e, t) {
    if (!(this.lhs instanceof Name) || e[this.lhs.str] || this.sideEffects) {
      this.rhs = R(this.rhs, e, t);
      return this;
    }
  }
  get names() {
    return j(
      this.lhs instanceof Name
        ? {}
        : {
            ...this.lhs.names,
          },
      this.rhs,
    );
  }
}
class c extends d {
  constructor(e, t, r, a) {
    super(e, r, a);
    this.op = t;
  }
  render({ _n }) {
    return `${this.lhs} ${this.op}= ${this.rhs};` + _n;
  }
}
class u extends n {
  constructor(e) {
    super();
    this.label = e;
    this.names = {};
  }
  render({ _n }) {
    return `${this.label}:` + _n;
  }
}
class f extends n {
  constructor(e) {
    super();
    this.label = e;
    this.names = {};
  }
  render({ _n }) {
    let t = this.label ? ` ${this.label}` : "";
    return `break${t};` + _n;
  }
}
class p extends n {
  constructor(e) {
    super();
    this.error = e;
  }
  render({ _n }) {
    return `throw ${this.error};` + _n;
  }
  get names() {
    return this.error.names;
  }
}
class h extends n {
  constructor(e) {
    super();
    this.code = e;
  }
  render({ _n }) {
    return `${this.code};` + _n;
  }
  optimizeNodes() {
    if (`${this.code}`) {
      return this;
    }
  }
  optimizeNames(e, t) {
    this.code = R(this.code, e, t);
    return this;
  }
  get names() {
    if (this.code instanceof _CodeOrName) {
      return this.code.names;
    }
    return {};
  }
}
class m extends n {
  constructor(e = []) {
    super();
    this.nodes = e;
  }
  render(e) {
    return this.nodes.reduce((acc, node) => acc + node.render(e), "");
  }
  optimizeNodes() {
    let { nodes } = this;
    let nodes_length = nodes.length;
    while (nodes_length--) {
      let r = nodes[nodes_length].optimizeNodes();
      if (Array.isArray(r)) {
        nodes.splice(nodes_length, 1, ...r);
      } else if (r) {
        nodes[nodes_length] = r;
      } else {
        nodes.splice(nodes_length, 1);
      }
    }
    if (nodes.length > 0) {
      return this;
    }
  }
  optimizeNames(e, t) {
    let { nodes } = this;
    let nodes_length = nodes.length;
    while (nodes_length--) {
      let s = nodes[nodes_length];
      if (!s.optimizeNames(e, t)) {
        ((e, t) => {
          for (let r in t) {
            e[r] = (e[r] || 0) - (t[r] || 0);
          }
        })(e, s.names);
        nodes.splice(nodes_length, 1);
      }
    }
    if (nodes.length > 0) {
      return this;
    }
  }
  get names() {
    return this.nodes.reduce((acc, node) => x(acc, node.names), {});
  }
}
class g extends m {
  render(e) {
    return "{" + e._n + super.render(e) + "}" + e._n;
  }
}
class y extends m {}
class v extends g {}
v.kind = "else";
class _ extends g {
  constructor(e, t) {
    super(t);
    this.condition = e;
  }
  render(e) {
    let t = `if(${this.condition})` + super.render(e);
    if (this.else) {
      t += "else " + this.else.render(e);
    }
    return t;
  }
  optimizeNodes() {
    super.optimizeNodes();
    let condition = this.condition;
    if (condition === true) {
      return this.nodes;
    }
    let _else = this.else;
    if (_else) {
      let e = _else.optimizeNodes();
      _else = this.else = Array.isArray(e) ? new v(e) : e;
    }
    if (_else) {
      if (condition === false) {
        if (_else instanceof _) {
          return _else;
        }
        return _else.nodes;
      }
      if (this.nodes.length) {
        return this;
      }
      return new _(not(condition), _else instanceof _ ? [_else] : _else.nodes);
    }
    if (condition !== false && this.nodes.length) {
      return this;
    }
  }
  optimizeNames(e, t) {
    let r;
    this.else = (r = this.else) == null ? undefined : r.optimizeNames(e, t);
    if (super.optimizeNames(e, t) || this.else) {
      this.condition = R(this.condition, e, t);
      return this;
    }
  }
  get names() {
    let e = super.names;
    j(e, this.condition);
    if (this.else) {
      x(e, this.else.names);
    }
    return e;
  }
}
_.kind = "if";
class $ extends g {}
$.kind = "for";
class w extends $ {
  constructor(e) {
    super();
    this.iteration = e;
  }
  render(e) {
    return `for(${this.iteration})` + super.render(e);
  }
  optimizeNames(e, t) {
    if (super.optimizeNames(e, t)) {
      this.iteration = R(this.iteration, e, t);
      return this;
    }
  }
  get names() {
    return x(super.names, this.iteration.names);
  }
}
class b extends $ {
  constructor(e, t, r, a) {
    super();
    this.varKind = e;
    this.name = t;
    this.from = r;
    this.to = a;
  }
  render(e) {
    let t = e.es5 ? varKinds.var : this.varKind;
    let { name, from, to } = this;
    return (
      `for(${t} ${name}=${from}; ${name}<${to}; ${name}++)` + super.render(e)
    );
  }
  get names() {
    let e = j(super.names, this.from);
    return j(e, this.to);
  }
}
class k extends $ {
  constructor(e, t, r, a) {
    super();
    this.loop = e;
    this.varKind = t;
    this.name = r;
    this.iterable = a;
  }
  render(e) {
    return (
      `for(${this.varKind} ${this.name} ${this.loop} ${this.iterable})` +
      super.render(e)
    );
  }
  optimizeNames(e, t) {
    if (super.optimizeNames(e, t)) {
      this.iterable = R(this.iterable, e, t);
      return this;
    }
  }
  get names() {
    return x(super.names, this.iterable.names);
  }
}
class E extends g {
  constructor(e, t, r) {
    super();
    this.name = e;
    this.args = t;
    this.async = r;
  }
  render(e) {
    let t = this.async ? "async " : "";
    return `${t}function ${this.name}(${this.args})` + super.render(e);
  }
}
E.kind = "func";
class S extends m {
  render(e) {
    return "return " + super.render(e);
  }
}
S.kind = "return";
class T extends g {
  render(e) {
    let t = "try" + super.render(e);
    if (this.catch) {
      t += this.catch.render(e);
    }
    if (this.finally) {
      t += this.finally.render(e);
    }
    return t;
  }
  optimizeNodes() {
    let e;
    let t;
    super.optimizeNodes();
    if ((e = this.catch) != null) {
      e.optimizeNodes();
    }
    if ((t = this.finally) != null) {
      t.optimizeNodes();
    }
    return this;
  }
  optimizeNames(e, t) {
    let r;
    let a;
    super.optimizeNames(e, t);
    if ((r = this.catch) != null) {
      r.optimizeNames(e, t);
    }
    if ((a = this.finally) != null) {
      a.optimizeNames(e, t);
    }
    return this;
  }
  get names() {
    let e = super.names;
    if (this.catch) {
      x(e, this.catch.names);
    }
    if (this.finally) {
      x(e, this.finally.names);
    }
    return e;
  }
}
class P extends g {
  constructor(e) {
    super();
    this.error = e;
  }
  render(e) {
    return `catch(${this.error})` + super.render(e);
  }
}
P.kind = "catch";
class I extends g {
  render(e) {
    return "finally" + super.render(e);
  }
}
function x(e, names) {
  for (let r in names) {
    e[r] = (e[r] || 0) + (names[r] || 0);
  }
  return e;
}
function j(e, t) {
  if (t instanceof _CodeOrName) {
    return x(e, t.names);
  }
  return e;
}
function R(e, t, r) {
  let s;
  if (e instanceof Name) {
    return i(e);
  }
  if (
    !(
      (s = e) instanceof _Code &&
      s._items.some(
        (e) => e instanceof Name && t[e.str] === 1 && r[e.str] !== undefined,
      )
    )
  ) {
    return e;
  }
  return new _Code(
    e._items.reduce((acc, t) => {
      if (t instanceof Name) {
        t = i(t);
      }
      if (t instanceof _Code) {
        acc.push(...t._items);
      } else {
        acc.push(t);
      }
      return acc;
    }, []),
  );
  function i(e) {
    let a = r[e.str];
    if (a === undefined || t[e.str] !== 1) {
      return e;
    }
    delete t[e.str];
    return a;
  }
}
export function not(e) {
  if (typeof e === "boolean" || typeof e === "number" || e === null) {
    return !e;
  }
  return (0, __1)`!${A(e)}`;
}
I.kind = "finally";
export class CodeGen {
  constructor(parent, t = {}) {
    this._values = {};
    this._blockStarts = [];
    this._constants = {};
    this.opts = {
      ...t,
      _n: t.lines ? "\n" : "",
    };
    this._extScope = parent;
    this._scope = new Scope({
      parent,
    });
    this._nodes = [new y()];
  }
  toString() {
    return this._root.render(this.opts);
  }
  name(e) {
    return this._scope.name(e);
  }
  scopeName(e) {
    return this._extScope.name(e);
  }
  scopeValue(e, t) {
    let r = this._extScope.value(e, t);
    (this._values[r.prefix] || (this._values[r.prefix] = new Set())).add(r);
    return r;
  }
  getScopeValue(e, t) {
    return this._extScope.getValue(e, t);
  }
  scopeRefs(e) {
    return this._extScope.scopeRefs(e, this._values);
  }
  scopeCode() {
    return this._extScope.scopeCode(this._values);
  }
  _def(e, t, r, a) {
    let s = this._scope.toName(t);
    if (r !== undefined && a) {
      this._constants[s.str] = r;
    }
    this._leafNode(new l(e, s, r));
    return s;
  }
  const(e, t, r) {
    return this._def(varKinds.const, e, t, r);
  }
  let(e, t, r) {
    return this._def(varKinds.let, e, t, r);
  }
  var(e, t, r) {
    return this._def(varKinds.var, e, t, r);
  }
  assign(e, t, r) {
    return this._leafNode(new d(e, t, r));
  }
  add(e, r) {
    return this._leafNode(new c(e, operators.ADD, r));
  }
  code(e) {
    if (typeof e === "function") {
      e();
    } else if (e !== nil) {
      this._leafNode(new h(e));
    }
    return this;
  }
  object(...e) {
    let t = ["{"];
    for (let [r, s] of e) {
      if (t.length > 1) {
        t.push(",");
      }
      t.push(r);
      if (r !== s || this.opts.es5) {
        t.push(":");
        addCodeArg(t, s);
      }
    }
    t.push("}");
    return new _Code(t);
  }
  if(e, t, r) {
    this._blockNode(new _(e));
    if (t && r) {
      this.code(t).else().code(r).endIf();
    } else if (t) {
      this.code(t).endIf();
    } else if (r) {
      throw Error('CodeGen: "else" body without "then" body');
    }
    return this;
  }
  elseIf(e) {
    return this._elseNode(new _(e));
  }
  else() {
    return this._elseNode(new v());
  }
  endIf() {
    return this._endBlockNode(_, v);
  }
  _for(e, t) {
    this._blockNode(e);
    if (t) {
      this.code(t).endFor();
    }
    return this;
  }
  for(e, t) {
    return this._for(new w(e), t);
  }
  forRange(e, t, r, a, i = this.opts.es5 ? varKinds.var : varKinds.let) {
    let o = this._scope.toName(e);
    return this._for(new b(i, o, t, r), () => a(o));
  }
  forOf(e, t, r, i = varKinds.const) {
    let o = this._scope.toName(e);
    if (this.opts.es5) {
      let e = t instanceof Name ? t : this.var("_arr", t);
      return this.forRange("_i", 0, (0, __1)`${e}.length`, (t) => {
        this.var(o, (0, __1)`${e}[${t}]`);
        r(o);
      });
    }
    return this._for(new k("of", i, o, t), () => r(o));
  }
  forIn(e, t, r, i = this.opts.es5 ? varKinds.var : varKinds.const) {
    if (this.opts.ownProperties) {
      return this.forOf(e, (0, __1)`Object.keys(${t})`, r);
    }
    let o = this._scope.toName(e);
    return this._for(new k("in", i, o, t), () => r(o));
  }
  endFor() {
    return this._endBlockNode($);
  }
  label(e) {
    return this._leafNode(new u(e));
  }
  break(e) {
    return this._leafNode(new f(e));
  }
  return(e) {
    let t = new S();
    this._blockNode(t);
    this.code(e);
    if (t.nodes.length !== 1) {
      throw Error('CodeGen: "return" should have one node');
    }
    return this._endBlockNode(S);
  }
  try(e, t, r) {
    if (!t && !r) {
      throw Error('CodeGen: "try" without "catch" and "finally"');
    }
    let a = new T();
    this._blockNode(a);
    this.code(e);
    if (t) {
      let e = this.name("e");
      this._currNode = a.catch = new P(e);
      t(e);
    }
    if (r) {
      this._currNode = a.finally = new I();
      this.code(r);
    }
    return this._endBlockNode(P, I);
  }
  throw(e) {
    return this._leafNode(new p(e));
  }
  block(e, t) {
    this._blockStarts.push(this._nodes.length);
    if (e) {
      this.code(e).endBlock(t);
    }
    return this;
  }
  endBlock(e) {
    let t = this._blockStarts.pop();
    if (t === undefined) {
      throw Error("CodeGen: not in self-balancing block");
    }
    let r = this._nodes.length - t;
    if (r < 0 || (e !== undefined && r !== e)) {
      throw Error(`CodeGen: wrong number of nodes: ${r} vs ${e} expected`);
    }
    this._nodes.length = t;
    return this;
  }
  func(e, t = nil, r, s) {
    this._blockNode(new E(e, t, r));
    if (s) {
      this.code(s).endFunc();
    }
    return this;
  }
  endFunc() {
    return this._endBlockNode(E);
  }
  optimize(e = 1) {
    while (e-- > 0) {
      this._root.optimizeNodes();
      this._root.optimizeNames(this._root.names, this._constants);
    }
  }
  _leafNode(e) {
    this._currNode.nodes.push(e);
    return this;
  }
  _blockNode(e) {
    this._currNode.nodes.push(e);
    this._nodes.push(e);
  }
  _endBlockNode(e, t) {
    let _currNode = this._currNode;
    if (_currNode instanceof e || (t && _currNode instanceof t)) {
      this._nodes.pop();
      return this;
    }
    throw Error(
      `CodeGen: not in block "${t ? `${e.kind}/${t.kind}` : e.kind}"`,
    );
  }
  _elseNode(e) {
    let _currNode = this._currNode;
    if (!(_currNode instanceof _)) {
      throw Error('CodeGen: "else" without "if"');
    }
    this._currNode = _currNode.else = e;
    return this;
  }
  get _root() {
    return this._nodes[0];
  }
  get _currNode() {
    let _nodes = this._nodes;
    return _nodes[_nodes.length - 1];
  }
  set _currNode(e) {
    let _nodes = this._nodes;
    _nodes[_nodes.length - 1] = e;
  }
}
let C = q(operators.AND);
export const and = function (...e) {
  return e.reduce(C);
};
let O = q(operators.OR);
function q(e) {
  return (t, r) => {
    if (t === nil) {
      return r;
    }
    if (r === nil) {
      return t;
    }
    return (0, __1)`${A(t)} ${e} ${A(r)}`;
  };
}
function A(e) {
  if (e instanceof Name) {
    return e;
  }
  return (0, __1)`(${e})`;
}
export const or = function (...e) {
  return e.reduce(O);
};
