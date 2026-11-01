const toString = Object.prototype.toString;
function o(e) {
  return toString.call(e) === "[object Array]";
}
function i(e) {
  return toString.call(e) === "[object Object]";
}
function c(e) {
  return toString.call(e) === "[object String]";
}
function a(e) {
  return toString.call(e) === "[object Function]";
}
function s(obj) {
  return obj == null || obj === "";
}
function l(obj) {
  return o(obj) && !obj.length;
}
const u = (e, t) => {
  if (typeof e !== "object" || typeof t !== "object") {
    return e === t;
  }
  if (a(e) && a(t)) {
    return e === t || e.toString() === t.toString();
  }
  if (Object.keys(e).length !== Object.keys(t).length) {
    return false;
  }
  for (const r in e) {
    if (!u(e[r], t[r])) {
      return false;
    }
  }
  return true;
};
const f = (e, t) => {
  const r = {
    ...e,
  };
  Object.keys(t || {}).forEach((e) => {
    const n = r[e];
    const o = t == null ? undefined : t[e];
    r[e] = i(n)
      ? {
          ...n,
          ...o,
        }
      : o || n;
  });
  return r;
};
const p = (validateMessages, t) => {
  for (
    var r = t.split("."), n = validateMessages, o = 0;
    o < r.length && (n = n && n[r[o]]) !== undefined;
    o++
  );
  return n;
};
const h = "#{field} is not a #{type} type";
const d = {
  required: "#{field} is required",
  type: {
    ip: h,
    email: h,
    url: h,
    string: h,
    number: h,
    array: h,
    object: h,
    boolean: h,
  },
  number: {
    min: "`#{value}` is not greater than `#{min}`",
    max: "`#{value}` is not less than `#{max}`",
    equal: "`#{value}` is not equal to `#{equal}`",
    range: "`#{value}` is not in range `#{min} ~ #{max}`",
    positive: "`#{value}` is not a positive number",
    negative: "`#{value}` is not a negative number",
  },
  string: {
    maxLength: "#{field} cannot be longer than #{maxLength} characters",
    minLength: "#{field} must be at least #{minLength} characters",
    length: "#{field} must be exactly #{length} characters",
    match: "`#{value}` does not match pattern #{pattern}",
    uppercase: "`#{value}` must be all uppercase",
    lowercase: "`#{value}` must be all lowercased",
  },
  array: {
    length: "#{field} must be exactly #{length} in length",
    minLength: "#{field} cannot be less than #{minLength} in length",
    maxLength: "#{field} cannot be greater than #{maxLength} in length",
    includes: "#{field} is not includes #{includes}",
    deepEqual: "#{field} is not deep equal with #{deepEqual}",
    empty: "#{field} is not an empty array",
  },
  object: {
    deepEqual: "#{field} is not deep equal to expected value",
    hasKeys: "#{field} does not contain required fields",
    empty: "#{field} is not an empty object",
  },
  boolean: {
    true: "Expect true but got `#{value}`",
    false: "Expect false but got `#{value}`",
  },
};
const b = function (e, t) {
  const r = this;
  this.getValidateMsg = function (e, t = {}) {
    const n = {
      ...t,
      value: r.obj,
      field: r.field,
      type: r.type,
    };
    const s = p(r.validateMessages, e);
    if (a(s)) {
      return s(n);
    }
    if (c(s)) {
      return s.replace(/\#\{.+?\}/g, (e) => {
        const t = e.slice(2, -1);
        if (t in n) {
          if (i(n[t]) || o(n[t])) {
            try {
              return JSON.stringify(n[t]);
            } catch (e) {
              return n[t];
            }
          }
          return String(n[t]);
        }
        return e;
      });
    }
    return s;
  };
  if (i(t) && c(e) && t.trim) {
    this.obj = e.trim();
  } else if (i(t) && t.ignoreEmptyString && e === "") {
    this.obj = undefined;
  } else {
    this.obj = e;
  }
  this.message = t.message;
  this.type = t.type;
  this.error = null;
  this.field = t.field || t.type;
  this.validateMessages = f(d, t.validateMessages);
};
const y = {
  not: {
    configurable: true,
  },
  isRequired: {
    configurable: true,
  },
  end: {
    configurable: true,
  },
};
y.not.get = function () {
  this._not = !this._not;
  return this;
};
y.isRequired.get = function () {
  if (s(this.obj) || l(this.obj)) {
    const e = this.getValidateMsg("required");
    this.error = {
      value: this.obj,
      type: this.type,
      requiredError: true,
      message:
        this.message || (i(e) ? e : (this._not ? "[NOT MODE]:" : "") + e),
    };
  }
  return this;
};
y.end.get = function () {
  return this.error;
};
b.prototype.addError = function (e) {
  if (!this.error && e) {
    this.error = {
      value: this.obj,
      type: this.type,
      message:
        this.message || (i(e) ? e : (this._not ? "[NOT MODE]:" : "") + e),
    };
  }
};
b.prototype.validate = function (e, t) {
  if (this._not ? e : !e) {
    this.addError(t);
  }
  return this;
};
b.prototype.collect = function (e) {
  if (e) {
    e(this.error);
  }
};
Object.defineProperties(b.prototype, y);
const g = (function (e) {
  class t extends e {
    constructor(t, r) {
      super(t, {
        ...r,
        type: "string",
      });
      this.validate(
        !r || !r.strict || c(this.obj),
        this.getValidateMsg("type.string"),
      );
    }
    maxLength(e) {
      if (this.obj) {
        return this.validate(
          this.obj.length <= e,
          this.getValidateMsg("string.maxLength", {
            maxLength: e,
          }),
        );
      }
      return this;
    }
    minLength(e) {
      if (this.obj) {
        return this.validate(
          this.obj.length >= e,
          this.getValidateMsg("string.minLength", {
            minLength: e,
          }),
        );
      }
      return this;
    }
    length(e) {
      if (this.obj) {
        return this.validate(
          this.obj.length === e,
          this.getValidateMsg("string.length", {
            length: e,
          }),
        );
      }
      return this;
    }
    match(pattern) {
      const t = pattern instanceof RegExp;
      if (t) {
        pattern.lastIndex = 0;
      }
      return this.validate(
        this.obj === undefined || (t && pattern.test(this.obj)),
        this.getValidateMsg("string.match", {
          pattern,
        }),
      );
    }
  }
  if (e) {
    t.__proto__ = e;
  }
  const r = {
    uppercase: {
      configurable: true,
    },
    lowercase: {
      configurable: true,
    },
  };
  r.uppercase.get = function () {
    if (this.obj) {
      return this.validate(
        this.obj.toUpperCase() === this.obj,
        this.getValidateMsg("string.uppercase"),
      );
    }
    return this;
  };
  r.lowercase.get = function () {
    if (this.obj) {
      return this.validate(
        this.obj.toLowerCase() === this.obj,
        this.getValidateMsg("string.lowercase"),
      );
    }
    return this;
  };
  Object.defineProperties(t.prototype, r);
  return t;
})(b);
const O = (function (e) {
  class t extends e {
    constructor(t, r) {
      let o;
      super(t, {
        ...r,
        type: "number",
      });
      this.validate(
        !r ||
          !r.strict ||
          ((o = this.obj), toString.call(o) === "[object Number]" && o == o),
        this.getValidateMsg("type.number"),
      );
    }
    min(e) {
      if (s(this.obj)) {
        return this;
      }
      return this.validate(
        this.obj >= e,
        this.getValidateMsg("number.min", {
          min: e,
        }),
      );
    }
    max(e) {
      if (s(this.obj)) {
        return this;
      }
      return this.validate(
        this.obj <= e,
        this.getValidateMsg("number.max", {
          max: e,
        }),
      );
    }
    equal(equal) {
      if (s(this.obj)) {
        return this;
      }
      return this.validate(
        this.obj === equal,
        this.getValidateMsg("number.equal", {
          equal,
        }),
      );
    }
    range(e, t) {
      if (s(this.obj)) {
        return this;
      }
      return this.validate(
        this.obj >= e && this.obj <= t,
        this.getValidateMsg("number.range", {
          min: e,
          max: t,
        }),
      );
    }
  }
  if (e) {
    t.__proto__ = e;
  }
  const r = {
    positive: {
      configurable: true,
    },
    negative: {
      configurable: true,
    },
  };
  r.positive.get = function () {
    if (s(this.obj)) {
      return this;
    }
    return this.validate(this.obj > 0, this.getValidateMsg("number.positive"));
  };
  r.negative.get = function () {
    if (s(this.obj)) {
      return this;
    }
    return this.validate(this.obj < 0, this.getValidateMsg("number.negative"));
  };
  Object.defineProperties(t.prototype, r);
  return t;
})(b);
const v = (function (e) {
  class t extends e {
    constructor(t, r) {
      super(t, {
        ...r,
        type: "array",
      });
      this.validate(
        !r || !r.strict || o(this.obj),
        this.getValidateMsg("type.array", {
          value: this.obj,
          type: this.type,
        }),
      );
    }
    length(e) {
      if (this.obj) {
        return this.validate(
          this.obj.length === e,
          this.getValidateMsg("array.length", {
            value: this.obj,
            length: e,
          }),
        );
      }
      return this;
    }
    minLength(e) {
      if (this.obj) {
        return this.validate(
          this.obj.length >= e,
          this.getValidateMsg("array.minLength", {
            value: this.obj,
            minLength: e,
          }),
        );
      }
      return this;
    }
    maxLength(e) {
      if (this.obj) {
        return this.validate(
          this.obj.length <= e,
          this.getValidateMsg("array.maxLength", {
            value: this.obj,
            maxLength: e,
          }),
        );
      }
      return this;
    }
    includes(includes) {
      const t = this;
      if (this.obj) {
        return this.validate(
          includes.every((e) => t.obj.indexOf(e) !== -1),
          this.getValidateMsg("array.includes", {
            value: this.obj,
            includes,
          }),
        );
      }
      return this;
    }
    deepEqual(e) {
      if (this.obj) {
        return this.validate(
          u(this.obj, e),
          this.getValidateMsg("array.deepEqual", {
            value: this.obj,
            deepEqual: e,
          }),
        );
      }
      return this;
    }
  }
  if (e) {
    t.__proto__ = e;
  }
  const r = {
    empty: {
      configurable: true,
    },
  };
  r.empty.get = function () {
    return this.validate(
      l(this.obj),
      this.getValidateMsg("array.empty", {
        value: this.obj,
      }),
    );
  };
  Object.defineProperties(t.prototype, r);
  return t;
})(b);
const m = (function (e) {
  class t extends e {
    constructor(t, r) {
      super(t, {
        ...r,
        type: "object",
      });
      this.validate(
        !r || !r.strict || i(this.obj),
        this.getValidateMsg("type.object"),
      );
    }
    deepEqual(e) {
      if (this.obj) {
        return this.validate(
          u(this.obj, e),
          this.getValidateMsg("object.deepEqual", {
            deepEqual: e,
          }),
        );
      }
      return this;
    }
    hasKeys(keys) {
      const t = this;
      if (this.obj) {
        return this.validate(
          keys.every((e) => t.obj[e]),
          this.getValidateMsg("object.hasKeys", {
            keys,
          }),
        );
      }
      return this;
    }
  }
  if (e) {
    t.__proto__ = e;
  }
  const r = {
    empty: {
      configurable: true,
    },
  };
  r.empty.get = function () {
    let e;
    return this.validate(
      i((e = this.obj)) && Object.keys(e).length === 0,
      this.getValidateMsg("object.empty"),
    );
  };
  Object.defineProperties(t.prototype, r);
  return t;
})(b);
const j = ((e) => {
  function t(t, r) {
    let o;
    e.call(this, t, {
      ...r,
      type: "boolean",
    });
    this.validate(
      !r ||
        !r.strict ||
        ((o = this.obj), toString.call(o) === "[object Boolean]"),
      this.getValidateMsg("type.boolean"),
    );
  }
  if (e) {
    t.__proto__ = e;
  }
  t.prototype = Object.create(e && e.prototype);
  t.prototype.constructor = t;
  const r = {
    true: {
      configurable: true,
    },
    false: {
      configurable: true,
    },
  };
  r.true.get = function () {
    return this.validate(
      this.obj === true,
      this.getValidateMsg("boolean.true"),
    );
  };
  r.false.get = function () {
    return this.validate(
      this.obj === false,
      this.getValidateMsg("boolean.false"),
    );
  };
  Object.defineProperties(t.prototype, r);
  return t;
})(b);
const w =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const P = RegExp(
  "^(?!mailto:)(?:(?:http|https|ftp)://)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$",
  "i",
);
const k =
  /^(2(5[0-5]{1}|[0-4]\d{1})|[0-1]?\d{1,2})(\.(2(5[0-5]{1}|[0-4]\d{1})|[0-1]?\d{1,2})){3}$/;
const E = ((e) => {
  function t(t, r) {
    e.call(this, t, {
      ...r,
      type: "type",
    });
  }
  if (e) {
    t.__proto__ = e;
  }
  t.prototype = Object.create(e && e.prototype);
  t.prototype.constructor = t;
  const r = {
    email: {
      configurable: true,
    },
    url: {
      configurable: true,
    },
    ip: {
      configurable: true,
    },
  };
  r.email.get = function () {
    this.type = "email";
    return this.validate(
      this.obj === undefined || w.test(this.obj),
      this.getValidateMsg("type.email"),
    );
  };
  r.url.get = function () {
    this.type = "url";
    return this.validate(
      this.obj === undefined || P.test(this.obj),
      this.getValidateMsg("type.url"),
    );
  };
  r.ip.get = function () {
    this.type = "ip";
    return this.validate(
      this.obj === undefined || k.test(this.obj),
      this.getValidateMsg("type.ip"),
    );
  };
  Object.defineProperties(t.prototype, r);
  return t;
})(b);
const C = ((e) => {
  function t(t, r) {
    e.call(this, t, {
      ...r,
      type: "custom",
    });
  }
  if (e) {
    t.__proto__ = e;
  }
  t.prototype = Object.create(e && e.prototype);
  t.prototype.constructor = t;
  const r = {
    validate: {
      configurable: true,
    },
  };
  r.validate.get = function () {
    const e = this;
    return function (t, r) {
      let n;
      if (t) {
        if ((n = t(e.obj, e.addError.bind(e))) && n.then) {
          if (r) {
            n.then(
              () => {
                if (r) {
                  r(e.error);
                }
              },
              (e) => {
                console.error(e);
              },
            );
          }
          return [n, e];
        }
        if (r) {
          r(e.error);
        }
        return e.error;
      }
    };
  };
  Object.defineProperties(t.prototype, r);
  return t;
})(b);
const N = function (e, t) {
  return new x(e, {
    field: "value",
    ...t,
  });
};
N.globalConfig = {};
N.setGlobalConfig = function (e) {
  N.globalConfig = e || {};
};
var x = function (e, t) {
  const N_globalConfig = N.globalConfig;
  const n = {
    ...N_globalConfig,
    ...t,
    validateMessages: f(N_globalConfig.validateMessages, t.validateMessages),
  };
  this.string = new g(e, n);
  this.number = new O(e, n);
  this.array = new v(e, n);
  this.object = new m(e, n);
  this.boolean = new j(e, n);
  this.type = new E(e, n);
  this.custom = new C(e, n);
};
export class Sj {
  constructor(e, t = {}) {
    this.schema = e;
    this.options = t;
  }
  messages(e) {
    this.options = {
      ...this.options,
      validateMessages: f(this.options.validateMessages, e),
    };
  }
  validate(e, t) {
    const r = this;
    if (i(e)) {
      const n = [];
      var c = null;
      if (this.schema) {
        Object.keys(this.schema).forEach((t) => {
          if (o(r.schema[t])) {
            for (
              let i = 0;
              i < r.schema[t].length &&
              ((o) => {
                const i = r.schema[t][o];
                const i_type = i.type;
                const i_message = i.message;
                if (!i_type && !i.validator) {
                  throw "You must specify a type to field " + t + "!";
                }
                const u = {
                  ...r.options,
                  message: i_message,
                  field: t,
                };
                if ("ignoreEmptyString" in i) {
                  u.ignoreEmptyString = i.ignoreEmptyString;
                }
                if ("strict" in i) {
                  u.strict = i.strict;
                }
                const f = new x(e[t], u);
                let p = f.type[i_type] || null;
                if (!p) {
                  if (i.validator) {
                    p = f.custom.validate(i.validator);
                    if (
                      Object.prototype.toString.call(p) === "[object Array]" &&
                      p[0].then
                    ) {
                      n.push({
                        function: p[0],
                        _this: p[1],
                        key: t,
                      });
                    } else if (p) {
                      a(t, p);
                    }
                    return;
                  } else {
                    p = f[i_type];
                  }
                }
                Object.keys(i).forEach((e) => {
                  if (i.required) {
                    p = p.isRequired;
                  }
                  if (
                    e !== "message" &&
                    p[e] &&
                    i[e] &&
                    typeof p[e] === "object"
                  ) {
                    p = p[e];
                  }
                  if (
                    p[e] &&
                    i[e] !== undefined &&
                    typeof p[e] === "function"
                  ) {
                    p = p[e](i[e]);
                  }
                });
                p.collect(function (e) {
                  if (e) {
                    a(t, e);
                  }
                });
                if (c) {
                  return "break";
                }
              })(i) !== "break";
              i++
            );
          }
        });
      }
      if (n.length > 0) {
        Promise.all(n.map((e) => e.function)).then(() => {
          n.forEach((e) => {
            if (e._this.error) {
              a(e.key, e._this.error);
            }
          });
          if (t) {
            t(c);
          }
        });
      } else if (t) {
        t(c);
      }
    }
    function a(e, t) {
      if (!c) {
        c = {};
      }
      if (!c[e] || t.requiredError) {
        c[e] = t;
      }
    }
  }
}
