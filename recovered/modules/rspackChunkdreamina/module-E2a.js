export class _CodeOrName {}
export var IDENTIFIER = /^[a-z$_][a-z$_0-9]*$/i;
export class Name extends _CodeOrName {
  constructor(e) {
    super();
    if (!IDENTIFIER.test(e)) {
      throw Error("CodeGen: name must be a valid identifier");
    }
    this.str = e;
  }
  toString() {
    return this.str;
  }
  emptyStr() {
    return false;
  }
  get names() {
    return {
      [this.str]: 1,
    };
  }
}
export class _Code extends _CodeOrName {
  constructor(e) {
    super();
    this._items = typeof e === "string" ? [e] : e;
  }
  toString() {
    return this.str;
  }
  emptyStr() {
    if (this._items.length > 1) {
      return false;
    }
    let e = this._items[0];
    return e === "" || e === '""';
  }
  get str() {
    let e;
    if ((e = this._str) != null) {
      return e;
    }
    return (this._str = this._items.reduce(
      (acc, _item) => `${acc}${_item}`,
      "",
    ));
  }
  get names() {
    let e;
    if ((e = this._names) != null) {
      return e;
    }
    return (this._names = this._items.reduce((acc, _item) => {
      if (_item instanceof Name) {
        acc[_item.str] = (acc[_item.str] || 0) + 1;
      }
      return acc;
    }, {}));
  }
}
export function _(e, ...t) {
  let r = [e[0]];
  let a = 0;
  while (a < t.length) {
    addCodeArg(r, t[a]);
    r.push(e[++a]);
  }
  return new _Code(r);
}
export const nil = new _Code("");
let o = new _Code("+");
export function str(e, ...t) {
  let r = [safeStringify(e[0])];
  let i = 0;
  while (i < t.length) {
    r.push(o);
    addCodeArg(r, t[i]);
    r.push(o, safeStringify(e[++i]));
  }
  ((e) => {
    let t = 1;
    while (t < e.length - 1) {
      if (e[t] === o) {
        let r;
        let s;
        r = e[t - 1];
        let i =
          (s = e[t + 1]) === '""'
            ? r
            : r === '""'
              ? s
              : typeof r === "string"
                ? s instanceof Name || r[r.length - 1] !== '"'
                  ? undefined
                  : typeof s !== "string"
                    ? `${r.slice(0, -1)}${s}"`
                    : s[0] === '"'
                      ? r.slice(0, -1) + s.slice(1)
                      : undefined
                : typeof s !== "string" || s[0] !== '"' || r instanceof Name
                  ? undefined
                  : `"${r}${s.slice(1)}`;
        if (i !== undefined) {
          e.splice(t - 1, 3, i);
          continue;
        }
        e[t++] = "+";
      }
      t++;
    }
  })(r);
  return new _Code(r);
}
export function addCodeArg(e, t) {
  let r;
  if (t instanceof _Code) {
    e.push(...t._items);
  } else if (t instanceof Name) {
    e.push(t);
  } else {
    e.push(
      typeof (r = t) === "number" || typeof r === "boolean" || r === null
        ? r
        : safeStringify(Array.isArray(r) ? r.join(",") : r),
    );
  }
}
export function safeStringify(e) {
  return JSON.stringify(e)
    .replace(/\u2028/g, "\\u2028")
    .replace(/\u2029/g, "\\u2029");
}
export const strConcat = function (e, t) {
  if (t.emptyStr()) {
    return e;
  }
  if (e.emptyStr()) {
    return t;
  }
  return str`${e}${t}`;
};
export const stringify = function (e) {
  return new _Code(safeStringify(e));
};
export const getProperty = function (e) {
  if (typeof e === "string" && IDENTIFIER.test(e)) {
    return new _Code(`.${e}`);
  }
  return _`[${e}]`;
};
export const getEsmExportName = function (e) {
  if (typeof e === "string" && IDENTIFIER.test(e)) {
    return new _Code(`${e}`);
  }
  throw Error(
    `CodeGen: invalid export name: ${e}, use explicit $id name mapping`,
  );
};
export const regexpCode = function (e) {
  return new _Code(e.toString());
};
