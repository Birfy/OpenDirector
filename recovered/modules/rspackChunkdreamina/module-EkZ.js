let r;
l = c || (c = {});
l.assertEqual = (e) => {};
l.assertIs = function (e) {};
l.assertNever = function (e) {
  throw Error();
};
l.arrayToEnum = (e) => {
  let t = {};
  for (let a of e) {
    t[a] = a;
  }
  return t;
};
l.getValidEnumValues = (e) => {
  let t = l.objectKeys(e).filter((t) => typeof e[e[t]] !== "number");
  let a = {};
  for (let r of t) {
    a[r] = e[r];
  }
  return l.objectValues(a);
};
l.objectValues = (e) => l.objectKeys(e).map((t) => e[t]);
l.objectKeys =
  typeof Object.keys === "function"
    ? (e) => Object.keys(e)
    : (e) => {
        let t = [];
        for (let a in e) {
          if (Object.prototype.hasOwnProperty.call(e, a)) {
            t.push(a);
          }
        }
        return t;
      };
l.find = (e, t) => {
  for (let a of e) {
    if (t(a)) {
      return a;
    }
  }
};
l.isInteger =
  typeof Number.isInteger === "function"
    ? (e) => Number.isInteger(e)
    : (e) => typeof e === "number" && Number.isFinite(e) && Math.floor(e) === e;
l.joinValues = function (e, t = " | ") {
  return e
    .map((e) => {
      if (typeof e === "string") {
        return `'${e}'`;
      }
      return e;
    })
    .join(t);
};
l.jsonStringifyReplacer = (e, t) => {
  if (typeof t === "bigint") {
    return t.toString();
  }
  return t;
};
(h || (h = {})).mergeShapes = (e, t) => ({
  ...e,
  ...t,
});
let s = c.arrayToEnum([
  "string",
  "nan",
  "number",
  "integer",
  "float",
  "boolean",
  "date",
  "bigint",
  "symbol",
  "function",
  "undefined",
  "null",
  "array",
  "object",
  "unknown",
  "promise",
  "void",
  "never",
  "map",
  "set",
]);
let i = (e) => {
  switch (typeof e) {
    case "undefined":
      return s.undefined;
    case "string":
      return s.string;
    case "number":
      if (Number.isNaN(e)) {
        return s.nan;
      }
      return s.number;
    case "boolean":
      return s.boolean;
    case "function":
      return s.function;
    case "bigint":
      return s.bigint;
    case "symbol":
      return s.symbol;
    case "object":
      if (Array.isArray(e)) {
        return s.array;
      }
      if (e === null) {
        return s.null;
      }
      if (
        e.then &&
        typeof e.then === "function" &&
        e.catch &&
        typeof e.catch === "function"
      ) {
        return s.promise;
      }
      if (typeof Map !== "undefined" && e instanceof Map) {
        return s.map;
      }
      if (typeof Set !== "undefined" && e instanceof Set) {
        return s.set;
      }
      if (typeof Date !== "undefined" && e instanceof Date) {
        return s.date;
      }
      return s.object;
    default:
      return s.unknown;
  }
};
let n = c.arrayToEnum([
  "invalid_type",
  "invalid_literal",
  "custom",
  "invalid_union",
  "invalid_union_discriminator",
  "invalid_enum_value",
  "unrecognized_keys",
  "invalid_arguments",
  "invalid_return_type",
  "invalid_date",
  "invalid_string",
  "too_small",
  "too_big",
  "invalid_intersection_types",
  "not_multiple_of",
  "not_finite",
]);
class d extends Error {
  get errors() {
    return this.issues;
  }
  constructor(e) {
    super();
    this.issues = [];
    this.addIssue = (e) => {
      this.issues = [...this.issues, e];
    };
    this.addIssues = (e = []) => {
      this.issues = [...this.issues, ...e];
    };
    let t = new.target.prototype;
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(this, t);
    } else {
      this.__proto__ = t;
    }
    this.name = "ZodError";
    this.issues = e;
  }
  format(e) {
    let t = e || ((e) => e.message);
    let a = {
      _errors: [],
    };
    let r = (e) => {
      for (let s of e.issues) {
        if (s.code === "invalid_union") {
          s.unionErrors.map(r);
        } else if (s.code === "invalid_return_type") {
          r(s.returnTypeError);
        } else if (s.code === "invalid_arguments") {
          r(s.argumentsError);
        } else if (s.path.length === 0) {
          a._errors.push(t(s));
        } else {
          let e = a;
          let r = 0;
          while (r < s.path.length) {
            let a = s.path[r];
            if (r === s.path.length - 1) {
              e[a] = e[a] || {
                _errors: [],
              };
              e[a]._errors.push(t(s));
            } else {
              e[a] = e[a] || {
                _errors: [],
              };
            }
            e = e[a];
            r++;
          }
        }
      }
    };
    r(this);
    return a;
  }
  static assert(e) {
    if (!(e instanceof d)) {
      throw Error(`Not a ZodError: ${e}`);
    }
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, c.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(e = (e) => e.message) {
    let fieldErrors = {};
    let formErrors = [];
    for (let r of this.issues) {
      if (r.path.length > 0) {
        let a = r.path[0];
        fieldErrors[a] = fieldErrors[a] || [];
        fieldErrors[a].push(e(r));
      } else {
        formErrors.push(e(r));
      }
    }
    return {
      formErrors,
      fieldErrors,
    };
  }
  get formErrors() {
    return this.flatten();
  }
}
d.create = (e) => new d(e);
let o;
let u;
var l;
var c;
var h;
let p;
export var kY;
const f = (e, t) => {
  let a;
  switch (e.code) {
    case n.invalid_type:
      a =
        e.received === s.undefined
          ? "Required"
          : `Expected ${e.expected}, received ${e.received}`;
      break;
    case n.invalid_literal:
      a = `Invalid literal value, expected ${JSON.stringify(e.expected, c.jsonStringifyReplacer)}`;
      break;
    case n.unrecognized_keys:
      a = `Unrecognized key(s) in object: ${c.joinValues(e.keys, ", ")}`;
      break;
    case n.invalid_union:
      a = "Invalid input";
      break;
    case n.invalid_union_discriminator:
      a = `Invalid discriminator value. Expected ${c.joinValues(e.options)}`;
      break;
    case n.invalid_enum_value:
      a = `Invalid enum value. Expected ${c.joinValues(e.options)}, received '${e.received}'`;
      break;
    case n.invalid_arguments:
      a = "Invalid function arguments";
      break;
    case n.invalid_return_type:
      a = "Invalid function return type";
      break;
    case n.invalid_date:
      a = "Invalid date";
      break;
    case n.invalid_string:
      if (typeof e.validation === "object") {
        if ("includes" in e.validation) {
          a = `Invalid input: must include "${e.validation.includes}"`;
          if (typeof e.validation.position === "number") {
            a = `${a} at one or more positions greater than or equal to ${e.validation.position}`;
          }
        } else if ("startsWith" in e.validation) {
          a = `Invalid input: must start with "${e.validation.startsWith}"`;
        } else if ("endsWith" in e.validation) {
          a = `Invalid input: must end with "${e.validation.endsWith}"`;
        } else {
          c.assertNever(e.validation);
        }
      } else {
        a = e.validation !== "regex" ? `Invalid ${e.validation}` : "Invalid";
      }
      break;
    case n.too_small:
      a =
        e.type === "array"
          ? `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "more than"} ${e.minimum} element(s)`
          : e.type === "string"
            ? `String must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "over"} ${e.minimum} character(s)`
            : e.type === "number" || e.type === "bigint"
              ? `Number must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${e.minimum}`
              : e.type === "date"
                ? `Date must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(e.minimum))}`
                : "Invalid input";
      break;
    case n.too_big:
      a =
        e.type === "array"
          ? `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "less than"} ${e.maximum} element(s)`
          : e.type === "string"
            ? `String must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "under"} ${e.maximum} character(s)`
            : e.type === "number"
              ? `Number must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}`
              : e.type === "bigint"
                ? `BigInt must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}`
                : e.type === "date"
                  ? `Date must be ${e.exact ? "exactly" : e.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(e.maximum))}`
                  : "Invalid input";
      break;
    case n.custom:
      a = "Invalid input";
      break;
    case n.invalid_intersection_types:
      a = "Intersection results could not be merged";
      break;
    case n.not_multiple_of:
      a = `Number must be a multiple of ${e.multipleOf}`;
      break;
    case n.not_finite:
      a = "Number must be finite";
      break;
    default:
      a = t.defaultError;
      c.assertNever(e);
  }
  return {
    message: a,
  };
};
o = p || (p = {});
o.errToObj = (e) => {
  if (typeof e === "string") {
    return {
      message: e,
    };
  }
  return e || {};
};
o.toString = (e) => {
  if (typeof e === "string") {
    return e;
  }
  return e?.message;
};
function _(e, issueData) {
  let a = ((e) => {
    let { data, path, errorMaps, issueData } = e;
    let path_1 = [...path, ...(issueData.path || [])];
    let n = {
      ...issueData,
      path: path_1,
    };
    if (issueData.message !== undefined) {
      return {
        ...issueData,
        path: path_1,
        message: issueData.message,
      };
    }
    let d = "";
    for (let e of errorMaps
      .filter((e) => !!e)
      .slice()
      .reverse()) {
      d = e(n, {
        data,
        defaultError: d,
      }).message;
    }
    return {
      ...issueData,
      path: path_1,
      message: d,
    };
  })({
    issueData,
    data: e.data,
    path: e.path,
    errorMaps: [
      e.common.contextualErrorMap,
      e.schemaErrorMap,
      f,
      undefined,
    ].filter((e) => !!e),
  });
  e.common.issues.push(a);
}
class v {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    if (this.value === "valid") {
      this.value = "dirty";
    }
  }
  abort() {
    if (this.value !== "aborted") {
      this.value = "aborted";
    }
  }
  static mergeArray(e, t) {
    let a = [];
    for (let r of t) {
      if (r.status === "aborted") {
        return g;
      }
      if (r.status === "dirty") {
        e.dirty();
      }
      a.push(r.value);
    }
    return {
      status: e.value,
      value: a,
    };
  }
  static async mergeObjectAsync(e, t) {
    let a = [];
    for (let e of t) {
      let t = await e.key;
      let r = await e.value;
      a.push({
        key: t,
        value: r,
      });
    }
    return v.mergeObjectSync(e, a);
  }
  static mergeObjectSync(e, t) {
    let a = {};
    for (let r of t) {
      let { key, value } = r;
      if (key.status === "aborted" || value.status === "aborted") {
        return g;
      }
      if (key.status === "dirty") {
        e.dirty();
      }
      if (value.status === "dirty") {
        e.dirty();
      }
      if (
        key.value !== "__proto__" &&
        (value.value !== undefined || r.alwaysSet)
      ) {
        a[key.value] = value.value;
      }
    }
    return {
      status: e.value,
      value: a,
    };
  }
}
let g = Object.freeze({
  status: "aborted",
});
let y = (e) => ({
  status: "dirty",
  value: e,
});
let k = (e) => ({
  status: "valid",
  value: e,
});
let b = (e) => typeof Promise !== "undefined" && e instanceof Promise;
class x {
  constructor(e, t, a, r) {
    this._cachedPath = [];
    this.parent = e;
    this.data = t;
    this._path = a;
    this._key = r;
  }
  get path() {
    if (!this._cachedPath.length) {
      if (Array.isArray(this._key)) {
        this._cachedPath.push(...this._path, ...this._key);
      } else {
        this._cachedPath.push(...this._path, this._key);
      }
    }
    return this._cachedPath;
  }
}
let w = (e, t) => {
  if (t.status === "valid") {
    return {
      success: true,
      data: t.value,
    };
  }
  if (!e.common.issues.length) {
    throw Error("Validation failed but no issues detected.");
  }
  return {
    success: false,
    get error() {
      if (this._error) {
        return this._error;
      }
      let t = new d(e.common.issues);
      this._error = t;
      return this._error;
    },
  };
};
function S(e) {
  if (!e) {
    return {};
  }
  let { errorMap, invalid_type_error, required_error, description } = e;
  if (errorMap && (invalid_type_error || required_error)) {
    throw Error(
      'Can\'t use "invalid_type_error" or "required_error" in conjunction with custom error map.',
    );
  }
  if (errorMap) {
    return {
      errorMap,
      description,
    };
  }
  return {
    errorMap: (t, s) => {
      let { message } = e;
      if (t.code === "invalid_enum_value") {
        return {
          message: message ?? s.defaultError,
        };
      }
      if (s.data === undefined) {
        return {
          message: message ?? required_error ?? s.defaultError,
        };
      }
      if (t.code !== "invalid_type") {
        return {
          message: s.defaultError,
        };
      }
      return {
        message: message ?? invalid_type_error ?? s.defaultError,
      };
    },
    description,
  };
}
class T {
  get description() {
    return this._def.description;
  }
  _getType(e) {
    return i(e.data);
  }
  _getOrReturnCtx(e, t) {
    return (
      t || {
        common: e.parent.common,
        data: e.data,
        parsedType: i(e.data),
        schemaErrorMap: this._def.errorMap,
        path: e.path,
        parent: e.parent,
      }
    );
  }
  _processInputParams(e) {
    return {
      status: new v(),
      ctx: {
        common: e.parent.common,
        data: e.data,
        parsedType: i(e.data),
        schemaErrorMap: this._def.errorMap,
        path: e.path,
        parent: e.parent,
      },
    };
  }
  _parseSync(e) {
    let t = this._parse(e);
    if (b(t)) {
      throw Error("Synchronous parse encountered promise.");
    }
    return t;
  }
  _parseAsync(e) {
    return Promise.resolve(this._parse(e));
  }
  parse(e, t) {
    let a = this.safeParse(e, t);
    if (a.success) {
      return a.data;
    }
    throw a.error;
  }
  safeParse(e, t) {
    let a = {
      common: {
        issues: [],
        async: t?.async ?? false,
        contextualErrorMap: t?.errorMap,
      },
      path: t?.path || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: e,
      parsedType: i(e),
    };
    let r = this._parseSync({
      data: e,
      path: a.path,
      parent: a,
    });
    return w(a, r);
  }
  "~validate"(e) {
    let t = {
      common: {
        issues: [],
        async: !!this["~standard"].async,
      },
      path: [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: e,
      parsedType: i(e),
    };
    if (!this["~standard"].async) {
      try {
        let a = this._parseSync({
          data: e,
          path: [],
          parent: t,
        });
        if (a.status === "valid") {
          return {
            value: a.value,
          };
        }
        return {
          issues: t.common.issues,
        };
      } catch (error) {
        if (error?.message?.toLowerCase()?.includes("encountered")) {
          this["~standard"].async = true;
        }
        t.common = {
          issues: [],
          async: true,
        };
      }
    }
    return this._parseAsync({
      data: e,
      path: [],
      parent: t,
    }).then((e) => {
      if (e.status === "valid") {
        return {
          value: e.value,
        };
      }
      return {
        issues: t.common.issues,
      };
    });
  }
  async parseAsync(e, t) {
    let a = await this.safeParseAsync(e, t);
    if (a.success) {
      return a.data;
    }
    throw a.error;
  }
  async safeParseAsync(e, t) {
    let a = {
      common: {
        issues: [],
        contextualErrorMap: t?.errorMap,
        async: true,
      },
      path: t?.path || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: e,
      parsedType: i(e),
    };
    let r = this._parse({
      data: e,
      path: a.path,
      parent: a,
    });
    return w(a, await (b(r) ? r : Promise.resolve(r)));
  }
  refine(e, t) {
    return this._refinement((a, r) => {
      let s = e(a);
      let i = () =>
        r.addIssue({
          code: n.custom,
          ...(typeof t === "string" || t === undefined
            ? {
                message: t,
              }
            : typeof t === "function"
              ? t(a)
              : t),
        });
      if (typeof Promise !== "undefined" && s instanceof Promise) {
        return s.then((e) => !!e || (i(), false));
      }
      return !!s || (i(), false);
    });
  }
  refinement(e, t) {
    return this._refinement(
      (a, r) =>
        !!e(a) || (r.addIssue(typeof t === "function" ? t(a, r) : t), false),
    );
  }
  _refinement(refinement) {
    return new ef({
      schema: this,
      typeName: kY.ZodEffects,
      effect: {
        type: "refinement",
        refinement,
      },
    });
  }
  superRefine(e) {
    return this._refinement(e);
  }
  constructor(e) {
    this.spa = this.safeParseAsync;
    this._def = e;
    this.parse = this.parse.bind(this);
    this.safeParse = this.safeParse.bind(this);
    this.parseAsync = this.parseAsync.bind(this);
    this.safeParseAsync = this.safeParseAsync.bind(this);
    this.spa = this.spa.bind(this);
    this.refine = this.refine.bind(this);
    this.refinement = this.refinement.bind(this);
    this.superRefine = this.superRefine.bind(this);
    this.optional = this.optional.bind(this);
    this.nullable = this.nullable.bind(this);
    this.nullish = this.nullish.bind(this);
    this.array = this.array.bind(this);
    this.promise = this.promise.bind(this);
    this.or = this.or.bind(this);
    this.and = this.and.bind(this);
    this.transform = this.transform.bind(this);
    this.brand = this.brand.bind(this);
    this.default = this.default.bind(this);
    this.catch = this.catch.bind(this);
    this.describe = this.describe.bind(this);
    this.pipe = this.pipe.bind(this);
    this.readonly = this.readonly.bind(this);
    this.isNullable = this.isNullable.bind(this);
    this.isOptional = this.isOptional.bind(this);
    this["~standard"] = {
      version: 1,
      vendor: "zod",
      validate: (e) => this["~validate"](e),
    };
  }
  optional() {
    return Ii.create(this, this._def);
  }
  nullable() {
    return ev.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return ea.create(this);
  }
  promise() {
    return em.create(this, this._def);
  }
  or(e) {
    return es.create([this, e], this._def);
  }
  and(e) {
    return ei.create(this, e, this._def);
  }
  transform(e) {
    return new ef({
      ...S(this._def),
      schema: this,
      typeName: kY.ZodEffects,
      effect: {
        type: "transform",
        transform: e,
      },
    });
  }
  default(e) {
    return new eg({
      ...S(this._def),
      innerType: this,
      defaultValue: typeof e === "function" ? e : () => e,
      typeName: kY.ZodDefault,
    });
  }
  brand() {
    return new eb({
      typeName: kY.ZodBranded,
      type: this,
      ...S(this._def),
    });
  }
  catch(e) {
    return new ey({
      ...S(this._def),
      innerType: this,
      catchValue: typeof e === "function" ? e : () => e,
      typeName: kY.ZodCatch,
    });
  }
  describe(description) {
    return new this.constructor({
      ...this._def,
      description,
    });
  }
  pipe(e) {
    return ex.create(this, e);
  }
  readonly() {
    return ew.create(this);
  }
  isOptional() {
    return this.safeParse(undefined).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
let C = /^c[^\s-]{8,}$/i;
let O = /^[0-9a-z]+$/;
let Z = /^[0-9A-HJKMNP-TV-Z]{26}$/i;
let j =
  /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i;
let A = /^[a-z0-9_-]{21}$/i;
let I = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/;
let N =
  /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/;
let R =
  /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
let E =
  /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
let F =
  /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/;
let $ =
  /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/;
let U =
  /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
let L = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
let z =
  /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/;
let D =
  "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))";
let V = RegExp(`^${D}$`);
function K(e) {
  let t = "[0-5]\\d";
  if (e.precision) {
    t = `${t}\\.\\d{${e.precision}}`;
  } else if (e.precision == null) {
    t = `${t}(\\.\\d+)?`;
  }
  let a = e.precision ? "+" : "?";
  return `([01]\\d|2[0-3]):[0-5]\\d(:${t})${a}`;
}
class M extends T {
  _parse(e) {
    let t;
    let a;
    let i;
    let d;
    let o;
    if (this._def.coerce) {
      e.data = String(e.data);
    }
    if (this._getType(e) !== s.string) {
      let t = this._getOrReturnCtx(e);
      _(t, {
        code: n.invalid_type,
        expected: s.string,
        received: t.parsedType,
      });
      return g;
    }
    let u = new v();
    for (let s of this._def.checks) {
      if (s.kind === "min") {
        if (e.data.length < s.value) {
          _((o = this._getOrReturnCtx(e, o)), {
            code: n.too_small,
            minimum: s.value,
            type: "string",
            inclusive: true,
            exact: false,
            message: s.message,
          });
          u.dirty();
        }
      } else if (s.kind === "max") {
        if (e.data.length > s.value) {
          _((o = this._getOrReturnCtx(e, o)), {
            code: n.too_big,
            maximum: s.value,
            type: "string",
            inclusive: true,
            exact: false,
            message: s.message,
          });
          u.dirty();
        }
      } else if (s.kind === "length") {
        let t = e.data.length > s.value;
        let a = e.data.length < s.value;
        if (t || a) {
          o = this._getOrReturnCtx(e, o);
          if (t) {
            _(o, {
              code: n.too_big,
              maximum: s.value,
              type: "string",
              inclusive: true,
              exact: true,
              message: s.message,
            });
          } else if (a) {
            _(o, {
              code: n.too_small,
              minimum: s.value,
              type: "string",
              inclusive: true,
              exact: true,
              message: s.message,
            });
          }
          u.dirty();
        }
      } else if (s.kind === "email") {
        if (!R.test(e.data)) {
          _((o = this._getOrReturnCtx(e, o)), {
            validation: "email",
            code: n.invalid_string,
            message: s.message,
          });
          u.dirty();
        }
      } else if (s.kind === "emoji") {
        if (!r) {
          r = RegExp(
            "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$",
            "u",
          );
        }
        if (!r.test(e.data)) {
          _((o = this._getOrReturnCtx(e, o)), {
            validation: "emoji",
            code: n.invalid_string,
            message: s.message,
          });
          u.dirty();
        }
      } else if (s.kind === "uuid") {
        if (!j.test(e.data)) {
          _((o = this._getOrReturnCtx(e, o)), {
            validation: "uuid",
            code: n.invalid_string,
            message: s.message,
          });
          u.dirty();
        }
      } else if (s.kind === "nanoid") {
        if (!A.test(e.data)) {
          _((o = this._getOrReturnCtx(e, o)), {
            validation: "nanoid",
            code: n.invalid_string,
            message: s.message,
          });
          u.dirty();
        }
      } else if (s.kind === "cuid") {
        if (!C.test(e.data)) {
          _((o = this._getOrReturnCtx(e, o)), {
            validation: "cuid",
            code: n.invalid_string,
            message: s.message,
          });
          u.dirty();
        }
      } else if (s.kind === "cuid2") {
        if (!O.test(e.data)) {
          _((o = this._getOrReturnCtx(e, o)), {
            validation: "cuid2",
            code: n.invalid_string,
            message: s.message,
          });
          u.dirty();
        }
      } else if (s.kind === "ulid") {
        if (!Z.test(e.data)) {
          _((o = this._getOrReturnCtx(e, o)), {
            validation: "ulid",
            code: n.invalid_string,
            message: s.message,
          });
          u.dirty();
        }
      } else if (s.kind === "url") {
        try {
          new URL(e.data);
        } catch {
          _((o = this._getOrReturnCtx(e, o)), {
            validation: "url",
            code: n.invalid_string,
            message: s.message,
          });
          u.dirty();
        }
      } else {
        if (s.kind === "regex") {
          s.regex.lastIndex = 0;
          if (!s.regex.test(e.data)) {
            _((o = this._getOrReturnCtx(e, o)), {
              validation: "regex",
              code: n.invalid_string,
              message: s.message,
            });
            u.dirty();
          }
        } else if (s.kind === "trim") {
          e.data = e.data.trim();
        } else if (s.kind === "includes") {
          if (!e.data.includes(s.value, s.position)) {
            _((o = this._getOrReturnCtx(e, o)), {
              code: n.invalid_string,
              validation: {
                includes: s.value,
                position: s.position,
              },
              message: s.message,
            });
            u.dirty();
          }
        } else if (s.kind === "toLowerCase") {
          e.data = e.data.toLowerCase();
        } else if (s.kind === "toUpperCase") {
          e.data = e.data.toUpperCase();
        } else if (s.kind === "startsWith") {
          if (!e.data.startsWith(s.value)) {
            _((o = this._getOrReturnCtx(e, o)), {
              code: n.invalid_string,
              validation: {
                startsWith: s.value,
              },
              message: s.message,
            });
            u.dirty();
          }
        } else if (s.kind === "endsWith") {
          if (!e.data.endsWith(s.value)) {
            _((o = this._getOrReturnCtx(e, o)), {
              code: n.invalid_string,
              validation: {
                endsWith: s.value,
              },
              message: s.message,
            });
            u.dirty();
          }
        } else if (s.kind === "datetime") {
          if (
            !((e) => {
              let t = `${D}T${K(e)}`;
              let a = [];
              a.push(e.local ? "Z?" : "Z");
              if (e.offset) {
                a.push("([+-]\\d{2}:?\\d{2})");
              }
              t = `${t}(${a.join("|")})`;
              return RegExp(`^${t}$`);
            })(s).test(e.data)
          ) {
            _((o = this._getOrReturnCtx(e, o)), {
              code: n.invalid_string,
              validation: "datetime",
              message: s.message,
            });
            u.dirty();
          }
        } else if (s.kind === "date") {
          if (!V.test(e.data)) {
            _((o = this._getOrReturnCtx(e, o)), {
              code: n.invalid_string,
              validation: "date",
              message: s.message,
            });
            u.dirty();
          }
        } else if (s.kind === "time") {
          if (!RegExp(`^${K(s)}$`).test(e.data)) {
            _((o = this._getOrReturnCtx(e, o)), {
              code: n.invalid_string,
              validation: "time",
              message: s.message,
            });
            u.dirty();
          }
        } else if (s.kind === "duration") {
          if (!N.test(e.data)) {
            _((o = this._getOrReturnCtx(e, o)), {
              validation: "duration",
              code: n.invalid_string,
              message: s.message,
            });
            u.dirty();
          }
        } else if (s.kind === "ip") {
          t = e.data;
          if (
            !(
              (((a = s.version) === "v4" || !a) && E.test(t)) ||
              ((a === "v6" || !a) && $.test(t))
            ) &&
            1
          ) {
            _((o = this._getOrReturnCtx(e, o)), {
              validation: "ip",
              code: n.invalid_string,
              message: s.message,
            });
            u.dirty();
          }
        } else if (s.kind === "jwt") {
          if (
            !((e, t) => {
              if (!I.test(e)) {
                return false;
              }
              try {
                let [a] = e.split(".");
                if (!a) {
                  return false;
                }
                let r = a
                  .replace(/-/g, "+")
                  .replace(/_/g, "/")
                  .padEnd(a.length + ((4 - (a.length % 4)) % 4), "=");
                let s = JSON.parse(atob(r));
                if (
                  typeof s !== "object" ||
                  s === null ||
                  ("typ" in s && s?.typ !== "JWT") ||
                  !s.alg ||
                  (t && s.alg !== t)
                ) {
                  return false;
                }
                return true;
              } catch {
                return false;
              }
            })(e.data, s.alg)
          ) {
            _((o = this._getOrReturnCtx(e, o)), {
              validation: "jwt",
              code: n.invalid_string,
              message: s.message,
            });
            u.dirty();
          }
        } else if (s.kind === "cidr") {
          i = e.data;
          if (
            !(
              (((d = s.version) === "v4" || !d) && F.test(i)) ||
              ((d === "v6" || !d) && U.test(i))
            ) &&
            1
          ) {
            _((o = this._getOrReturnCtx(e, o)), {
              validation: "cidr",
              code: n.invalid_string,
              message: s.message,
            });
            u.dirty();
          }
        } else if (s.kind === "base64") {
          if (!L.test(e.data)) {
            _((o = this._getOrReturnCtx(e, o)), {
              validation: "base64",
              code: n.invalid_string,
              message: s.message,
            });
            u.dirty();
          }
        } else if (s.kind === "base64url") {
          if (!z.test(e.data)) {
            _((o = this._getOrReturnCtx(e, o)), {
              validation: "base64url",
              code: n.invalid_string,
              message: s.message,
            });
            u.dirty();
          }
        } else {
          c.assertNever(s);
        }
      }
    }
    return {
      status: u.value,
      value: e.data,
    };
  }
  _regex(e, validation, a) {
    return this.refinement((t) => e.test(t), {
      validation,
      code: n.invalid_string,
      ...p.errToObj(a),
    });
  }
  _addCheck(e) {
    return new M({
      ...this._def,
      checks: [...this._def.checks, e],
    });
  }
  email(e) {
    return this._addCheck({
      kind: "email",
      ...p.errToObj(e),
    });
  }
  url(e) {
    return this._addCheck({
      kind: "url",
      ...p.errToObj(e),
    });
  }
  emoji(e) {
    return this._addCheck({
      kind: "emoji",
      ...p.errToObj(e),
    });
  }
  uuid(e) {
    return this._addCheck({
      kind: "uuid",
      ...p.errToObj(e),
    });
  }
  nanoid(e) {
    return this._addCheck({
      kind: "nanoid",
      ...p.errToObj(e),
    });
  }
  cuid(e) {
    return this._addCheck({
      kind: "cuid",
      ...p.errToObj(e),
    });
  }
  cuid2(e) {
    return this._addCheck({
      kind: "cuid2",
      ...p.errToObj(e),
    });
  }
  ulid(e) {
    return this._addCheck({
      kind: "ulid",
      ...p.errToObj(e),
    });
  }
  base64(e) {
    return this._addCheck({
      kind: "base64",
      ...p.errToObj(e),
    });
  }
  base64url(e) {
    return this._addCheck({
      kind: "base64url",
      ...p.errToObj(e),
    });
  }
  jwt(e) {
    return this._addCheck({
      kind: "jwt",
      ...p.errToObj(e),
    });
  }
  ip(e) {
    return this._addCheck({
      kind: "ip",
      ...p.errToObj(e),
    });
  }
  cidr(e) {
    return this._addCheck({
      kind: "cidr",
      ...p.errToObj(e),
    });
  }
  datetime(e) {
    if (typeof e === "string") {
      return this._addCheck({
        kind: "datetime",
        precision: null,
        offset: false,
        local: false,
        message: e,
      });
    }
    return this._addCheck({
      kind: "datetime",
      precision: e?.precision === undefined ? null : e?.precision,
      offset: e?.offset ?? false,
      local: e?.local ?? false,
      ...p.errToObj(e?.message),
    });
  }
  date(message) {
    return this._addCheck({
      kind: "date",
      message,
    });
  }
  time(e) {
    if (typeof e === "string") {
      return this._addCheck({
        kind: "time",
        precision: null,
        message: e,
      });
    }
    return this._addCheck({
      kind: "time",
      precision: e?.precision === undefined ? null : e?.precision,
      ...p.errToObj(e?.message),
    });
  }
  duration(e) {
    return this._addCheck({
      kind: "duration",
      ...p.errToObj(e),
    });
  }
  regex(regex, t) {
    return this._addCheck({
      kind: "regex",
      regex,
      ...p.errToObj(t),
    });
  }
  includes(e, t) {
    return this._addCheck({
      kind: "includes",
      value: e,
      position: t?.position,
      ...p.errToObj(t?.message),
    });
  }
  startsWith(e, t) {
    return this._addCheck({
      kind: "startsWith",
      value: e,
      ...p.errToObj(t),
    });
  }
  endsWith(e, t) {
    return this._addCheck({
      kind: "endsWith",
      value: e,
      ...p.errToObj(t),
    });
  }
  min(e, t) {
    return this._addCheck({
      kind: "min",
      value: e,
      ...p.errToObj(t),
    });
  }
  max(e, t) {
    return this._addCheck({
      kind: "max",
      value: e,
      ...p.errToObj(t),
    });
  }
  length(e, t) {
    return this._addCheck({
      kind: "length",
      value: e,
      ...p.errToObj(t),
    });
  }
  nonempty(e) {
    return this.min(1, p.errToObj(e));
  }
  trim() {
    return new M({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: "trim",
        },
      ],
    });
  }
  toLowerCase() {
    return new M({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: "toLowerCase",
        },
      ],
    });
  }
  toUpperCase() {
    return new M({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: "toUpperCase",
        },
      ],
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((e) => e.kind === "datetime");
  }
  get isDate() {
    return !!this._def.checks.find((e) => e.kind === "date");
  }
  get isTime() {
    return !!this._def.checks.find((e) => e.kind === "time");
  }
  get isDuration() {
    return !!this._def.checks.find((e) => e.kind === "duration");
  }
  get isEmail() {
    return !!this._def.checks.find((e) => e.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((e) => e.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((e) => e.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((e) => e.kind === "uuid");
  }
  get isNANOID() {
    return !!this._def.checks.find((e) => e.kind === "nanoid");
  }
  get isCUID() {
    return !!this._def.checks.find((e) => e.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((e) => e.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((e) => e.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((e) => e.kind === "ip");
  }
  get isCIDR() {
    return !!this._def.checks.find((e) => e.kind === "cidr");
  }
  get isBase64() {
    return !!this._def.checks.find((e) => e.kind === "base64");
  }
  get isBase64url() {
    return !!this._def.checks.find((e) => e.kind === "base64url");
  }
  get minLength() {
    let e = null;
    for (let t of this._def.checks) {
      if (t.kind === "min" && (e === null || t.value > e)) {
        e = t.value;
      }
    }
    return e;
  }
  get maxLength() {
    let e = null;
    for (let t of this._def.checks) {
      if (t.kind === "max" && (e === null || t.value < e)) {
        e = t.value;
      }
    }
    return e;
  }
}
M.create = (e) =>
  new M({
    checks: [],
    typeName: kY.ZodString,
    coerce: e?.coerce ?? false,
    ...S(e),
  });
class W extends T {
  constructor() {
    super(...arguments);
    this.min = this.gte;
    this.max = this.lte;
    this.step = this.multipleOf;
  }
  _parse(e) {
    let t;
    if (this._def.coerce) {
      e.data = Number(e.data);
    }
    if (this._getType(e) !== s.number) {
      let t = this._getOrReturnCtx(e);
      _(t, {
        code: n.invalid_type,
        expected: s.number,
        received: t.parsedType,
      });
      return g;
    }
    let a = new v();
    for (let r of this._def.checks) {
      if (r.kind === "int") {
        if (!c.isInteger(e.data)) {
          _((t = this._getOrReturnCtx(e, t)), {
            code: n.invalid_type,
            expected: "integer",
            received: "float",
            message: r.message,
          });
          a.dirty();
        }
      } else if (r.kind === "min") {
        if (r.inclusive ? e.data < r.value : e.data <= r.value) {
          _((t = this._getOrReturnCtx(e, t)), {
            code: n.too_small,
            minimum: r.value,
            type: "number",
            inclusive: r.inclusive,
            exact: false,
            message: r.message,
          });
          a.dirty();
        }
      } else if (r.kind === "max") {
        if (r.inclusive ? e.data > r.value : e.data >= r.value) {
          _((t = this._getOrReturnCtx(e, t)), {
            code: n.too_big,
            maximum: r.value,
            type: "number",
            inclusive: r.inclusive,
            exact: false,
            message: r.message,
          });
          a.dirty();
        }
      } else if (r.kind === "multipleOf") {
        if (
          ((e, t) => {
            let length = (e.toString().split(".")[1] || "").length;
            let length_1 = (t.toString().split(".")[1] || "").length;
            let s = length > length_1 ? length : length_1;
            return (
              (Number.parseInt(e.toFixed(s).replace(".", "")) %
                Number.parseInt(t.toFixed(s).replace(".", ""))) /
              10 ** s
            );
          })(e.data, r.value) !== 0
        ) {
          _((t = this._getOrReturnCtx(e, t)), {
            code: n.not_multiple_of,
            multipleOf: r.value,
            message: r.message,
          });
          a.dirty();
        }
      } else if (r.kind === "finite") {
        if (!Number.isFinite(e.data)) {
          _((t = this._getOrReturnCtx(e, t)), {
            code: n.not_finite,
            message: r.message,
          });
          a.dirty();
        }
      } else {
        c.assertNever(r);
      }
    }
    return {
      status: a.value,
      value: e.data,
    };
  }
  gte(e, t) {
    return this.setLimit("min", e, true, p.toString(t));
  }
  gt(e, t) {
    return this.setLimit("min", e, false, p.toString(t));
  }
  lte(e, t) {
    return this.setLimit("max", e, true, p.toString(t));
  }
  lt(e, t) {
    return this.setLimit("max", e, false, p.toString(t));
  }
  setLimit(e, t, a, r) {
    return new W({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: e,
          value: t,
          inclusive: a,
          message: p.toString(r),
        },
      ],
    });
  }
  _addCheck(e) {
    return new W({
      ...this._def,
      checks: [...this._def.checks, e],
    });
  }
  int(e) {
    return this._addCheck({
      kind: "int",
      message: p.toString(e),
    });
  }
  positive(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: false,
      message: p.toString(e),
    });
  }
  negative(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: false,
      message: p.toString(e),
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: true,
      message: p.toString(e),
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: true,
      message: p.toString(e),
    });
  }
  multipleOf(e, t) {
    return this._addCheck({
      kind: "multipleOf",
      value: e,
      message: p.toString(t),
    });
  }
  finite(e) {
    return this._addCheck({
      kind: "finite",
      message: p.toString(e),
    });
  }
  safe(e) {
    return this._addCheck({
      kind: "min",
      inclusive: true,
      value: Number.MIN_SAFE_INTEGER,
      message: p.toString(e),
    })._addCheck({
      kind: "max",
      inclusive: true,
      value: Number.MAX_SAFE_INTEGER,
      message: p.toString(e),
    });
  }
  get minValue() {
    let e = null;
    for (let t of this._def.checks) {
      if (t.kind === "min" && (e === null || t.value > e)) {
        e = t.value;
      }
    }
    return e;
  }
  get maxValue() {
    let e = null;
    for (let t of this._def.checks) {
      if (t.kind === "max" && (e === null || t.value < e)) {
        e = t.value;
      }
    }
    return e;
  }
  get isInt() {
    return !!this._def.checks.find(
      (e) =>
        e.kind === "int" || (e.kind === "multipleOf" && c.isInteger(e.value)),
    );
  }
  get isFinite() {
    let e = null;
    let t = null;
    for (let a of this._def.checks) {
      if (a.kind === "finite" || a.kind === "int" || a.kind === "multipleOf") {
        return true;
      } else {
        if (a.kind === "min") {
          if (t === null || a.value > t) {
            t = a.value;
          }
        } else if (a.kind === "max" && (e === null || a.value < e)) {
          e = a.value;
        }
      }
    }
    return Number.isFinite(t) && Number.isFinite(e);
  }
}
W.create = (e) =>
  new W({
    checks: [],
    typeName: kY.ZodNumber,
    coerce: e?.coerce || false,
    ...S(e),
  });
class Q extends T {
  constructor() {
    super(...arguments);
    this.min = this.gte;
    this.max = this.lte;
  }
  _parse(e) {
    let t;
    if (this._def.coerce) {
      try {
        e.data = BigInt(e.data);
      } catch {
        return this._getInvalidInput(e);
      }
    }
    if (this._getType(e) !== s.bigint) {
      return this._getInvalidInput(e);
    }
    let a = new v();
    for (let r of this._def.checks) {
      if (r.kind === "min") {
        if (r.inclusive ? e.data < r.value : e.data <= r.value) {
          _((t = this._getOrReturnCtx(e, t)), {
            code: n.too_small,
            type: "bigint",
            minimum: r.value,
            inclusive: r.inclusive,
            message: r.message,
          });
          a.dirty();
        }
      } else if (r.kind === "max") {
        if (r.inclusive ? e.data > r.value : e.data >= r.value) {
          _((t = this._getOrReturnCtx(e, t)), {
            code: n.too_big,
            type: "bigint",
            maximum: r.value,
            inclusive: r.inclusive,
            message: r.message,
          });
          a.dirty();
        }
      } else if (r.kind === "multipleOf") {
        if (e.data % r.value !== BigInt(0)) {
          _((t = this._getOrReturnCtx(e, t)), {
            code: n.not_multiple_of,
            multipleOf: r.value,
            message: r.message,
          });
          a.dirty();
        }
      } else {
        c.assertNever(r);
      }
    }
    return {
      status: a.value,
      value: e.data,
    };
  }
  _getInvalidInput(e) {
    let t = this._getOrReturnCtx(e);
    _(t, {
      code: n.invalid_type,
      expected: s.bigint,
      received: t.parsedType,
    });
    return g;
  }
  gte(e, t) {
    return this.setLimit("min", e, true, p.toString(t));
  }
  gt(e, t) {
    return this.setLimit("min", e, false, p.toString(t));
  }
  lte(e, t) {
    return this.setLimit("max", e, true, p.toString(t));
  }
  lt(e, t) {
    return this.setLimit("max", e, false, p.toString(t));
  }
  setLimit(e, t, a, r) {
    return new Q({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: e,
          value: t,
          inclusive: a,
          message: p.toString(r),
        },
      ],
    });
  }
  _addCheck(e) {
    return new Q({
      ...this._def,
      checks: [...this._def.checks, e],
    });
  }
  positive(e) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: false,
      message: p.toString(e),
    });
  }
  negative(e) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: false,
      message: p.toString(e),
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: true,
      message: p.toString(e),
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: true,
      message: p.toString(e),
    });
  }
  multipleOf(e, t) {
    return this._addCheck({
      kind: "multipleOf",
      value: e,
      message: p.toString(t),
    });
  }
  get minValue() {
    let e = null;
    for (let t of this._def.checks) {
      if (t.kind === "min" && (e === null || t.value > e)) {
        e = t.value;
      }
    }
    return e;
  }
  get maxValue() {
    let e = null;
    for (let t of this._def.checks) {
      if (t.kind === "max" && (e === null || t.value < e)) {
        e = t.value;
      }
    }
    return e;
  }
}
Q.create = (e) =>
  new Q({
    checks: [],
    typeName: kY.ZodBigInt,
    coerce: e?.coerce ?? false,
    ...S(e),
  });
class q extends T {
  _parse(e) {
    if (this._def.coerce) {
      e.data = !!e.data;
    }
    if (this._getType(e) !== s.boolean) {
      let t = this._getOrReturnCtx(e);
      _(t, {
        code: n.invalid_type,
        expected: s.boolean,
        received: t.parsedType,
      });
      return g;
    }
    return k(e.data);
  }
}
q.create = (e) =>
  new q({
    typeName: kY.ZodBoolean,
    coerce: e?.coerce || false,
    ...S(e),
  });
class B extends T {
  _parse(e) {
    let t;
    if (this._def.coerce) {
      e.data = new Date(e.data);
    }
    if (this._getType(e) !== s.date) {
      let t = this._getOrReturnCtx(e);
      _(t, {
        code: n.invalid_type,
        expected: s.date,
        received: t.parsedType,
      });
      return g;
    }
    if (Number.isNaN(e.data.getTime())) {
      _(this._getOrReturnCtx(e), {
        code: n.invalid_date,
      });
      return g;
    }
    let a = new v();
    for (let r of this._def.checks) {
      if (r.kind === "min") {
        if (e.data.getTime() < r.value) {
          _((t = this._getOrReturnCtx(e, t)), {
            code: n.too_small,
            message: r.message,
            inclusive: true,
            exact: false,
            minimum: r.value,
            type: "date",
          });
          a.dirty();
        }
      } else if (r.kind === "max") {
        if (e.data.getTime() > r.value) {
          _((t = this._getOrReturnCtx(e, t)), {
            code: n.too_big,
            message: r.message,
            inclusive: true,
            exact: false,
            maximum: r.value,
            type: "date",
          });
          a.dirty();
        }
      } else {
        c.assertNever(r);
      }
    }
    return {
      status: a.value,
      value: new Date(e.data.getTime()),
    };
  }
  _addCheck(e) {
    return new B({
      ...this._def,
      checks: [...this._def.checks, e],
    });
  }
  min(e, t) {
    return this._addCheck({
      kind: "min",
      value: e.getTime(),
      message: p.toString(t),
    });
  }
  max(e, t) {
    return this._addCheck({
      kind: "max",
      value: e.getTime(),
      message: p.toString(t),
    });
  }
  get minDate() {
    let e = null;
    for (let t of this._def.checks) {
      if (t.kind === "min" && (e === null || t.value > e)) {
        e = t.value;
      }
    }
    if (e != null) {
      return new Date(e);
    }
    return null;
  }
  get maxDate() {
    let e = null;
    for (let t of this._def.checks) {
      if (t.kind === "max" && (e === null || t.value < e)) {
        e = t.value;
      }
    }
    if (e != null) {
      return new Date(e);
    }
    return null;
  }
}
B.create = (e) =>
  new B({
    checks: [],
    coerce: e?.coerce || false,
    typeName: kY.ZodDate,
    ...S(e),
  });
class J extends T {
  _parse(e) {
    if (this._getType(e) !== s.symbol) {
      let t = this._getOrReturnCtx(e);
      _(t, {
        code: n.invalid_type,
        expected: s.symbol,
        received: t.parsedType,
      });
      return g;
    }
    return k(e.data);
  }
}
J.create = (e) =>
  new J({
    typeName: kY.ZodSymbol,
    ...S(e),
  });
class X extends T {
  _parse(e) {
    if (this._getType(e) !== s.undefined) {
      let t = this._getOrReturnCtx(e);
      _(t, {
        code: n.invalid_type,
        expected: s.undefined,
        received: t.parsedType,
      });
      return g;
    }
    return k(e.data);
  }
}
X.create = (e) =>
  new X({
    typeName: kY.ZodUndefined,
    ...S(e),
  });
class Y extends T {
  _parse(e) {
    if (this._getType(e) !== s.null) {
      let t = this._getOrReturnCtx(e);
      _(t, {
        code: n.invalid_type,
        expected: s.null,
        received: t.parsedType,
      });
      return g;
    }
    return k(e.data);
  }
}
Y.create = (e) =>
  new Y({
    typeName: kY.ZodNull,
    ...S(e),
  });
class G extends T {
  constructor() {
    super(...arguments);
    this._any = true;
  }
  _parse(e) {
    return k(e.data);
  }
}
G.create = (e) =>
  new G({
    typeName: kY.ZodAny,
    ...S(e),
  });
class H extends T {
  constructor() {
    super(...arguments);
    this._unknown = true;
  }
  _parse(e) {
    return k(e.data);
  }
}
H.create = (e) =>
  new H({
    typeName: kY.ZodUnknown,
    ...S(e),
  });
class ee extends T {
  _parse(e) {
    let t = this._getOrReturnCtx(e);
    _(t, {
      code: n.invalid_type,
      expected: s.never,
      received: t.parsedType,
    });
    return g;
  }
}
ee.create = (e) =>
  new ee({
    typeName: kY.ZodNever,
    ...S(e),
  });
class et extends T {
  _parse(e) {
    if (this._getType(e) !== s.undefined) {
      let t = this._getOrReturnCtx(e);
      _(t, {
        code: n.invalid_type,
        expected: s.void,
        received: t.parsedType,
      });
      return g;
    }
    return k(e.data);
  }
}
et.create = (e) =>
  new et({
    typeName: kY.ZodVoid,
    ...S(e),
  });
class ea extends T {
  _parse(e) {
    let { ctx, status } = this._processInputParams(e);
    let _def = this._def;
    if (ctx.parsedType !== s.array) {
      _(ctx, {
        code: n.invalid_type,
        expected: s.array,
        received: ctx.parsedType,
      });
      return g;
    }
    if (_def.exactLength !== null) {
      let e = ctx.data.length > _def.exactLength.value;
      let s = ctx.data.length < _def.exactLength.value;
      if (e || s) {
        _(ctx, {
          code: e ? n.too_big : n.too_small,
          minimum: s ? _def.exactLength.value : undefined,
          maximum: e ? _def.exactLength.value : undefined,
          type: "array",
          inclusive: true,
          exact: true,
          message: _def.exactLength.message,
        });
        status.dirty();
      }
    }
    if (_def.minLength !== null && ctx.data.length < _def.minLength.value) {
      _(ctx, {
        code: n.too_small,
        minimum: _def.minLength.value,
        type: "array",
        inclusive: true,
        exact: false,
        message: _def.minLength.message,
      });
      status.dirty();
    }
    if (_def.maxLength !== null && ctx.data.length > _def.maxLength.value) {
      _(ctx, {
        code: n.too_big,
        maximum: _def.maxLength.value,
        type: "array",
        inclusive: true,
        exact: false,
        message: _def.maxLength.message,
      });
      status.dirty();
    }
    if (ctx.common.async) {
      return Promise.all(
        [...ctx.data].map((e, a) =>
          _def.type._parseAsync(new x(ctx, e, ctx.path, a)),
        ),
      ).then((e) => v.mergeArray(status, e));
    }
    let i = [...ctx.data].map((e, a) =>
      _def.type._parseSync(new x(ctx, e, ctx.path, a)),
    );
    return v.mergeArray(status, i);
  }
  get element() {
    return this._def.type;
  }
  min(e, t) {
    return new ea({
      ...this._def,
      minLength: {
        value: e,
        message: p.toString(t),
      },
    });
  }
  max(e, t) {
    return new ea({
      ...this._def,
      maxLength: {
        value: e,
        message: p.toString(t),
      },
    });
  }
  length(e, t) {
    return new ea({
      ...this._def,
      exactLength: {
        value: e,
        message: p.toString(t),
      },
    });
  }
  nonempty(e) {
    return this.min(1, e);
  }
}
ea.create = (e, t) =>
  new ea({
    type: e,
    minLength: null,
    maxLength: null,
    exactLength: null,
    typeName: kY.ZodArray,
    ...S(t),
  });
class er extends T {
  constructor() {
    super(...arguments);
    this._cached = null;
    this.nonstrict = this.passthrough;
    this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null) {
      return this._cached;
    }
    let e = this._def.shape();
    let keys = c.objectKeys(e);
    this._cached = {
      shape: e,
      keys,
    };
    return this._cached;
  }
  _parse(e) {
    if (this._getType(e) !== s.object) {
      let t = this._getOrReturnCtx(e);
      _(t, {
        code: n.invalid_type,
        expected: s.object,
        received: t.parsedType,
      });
      return g;
    }
    let { status, ctx } = this._processInputParams(e);
    let { shape, keys } = this._getCached();
    let d = [];
    if (
      !(this._def.catchall instanceof ee && this._def.unknownKeys === "strip")
    ) {
      for (let e in ctx.data) {
        if (!keys.includes(e)) {
          d.push(e);
        }
      }
    }
    let o = [];
    for (let e of keys) {
      let t = shape[e];
      let s = ctx.data[e];
      o.push({
        key: {
          status: "valid",
          value: e,
        },
        value: t._parse(new x(ctx, s, ctx.path, e)),
        alwaysSet: e in ctx.data,
      });
    }
    if (this._def.catchall instanceof ee) {
      let e = this._def.unknownKeys;
      if (e === "passthrough") {
        for (let e of d) {
          o.push({
            key: {
              status: "valid",
              value: e,
            },
            value: {
              status: "valid",
              value: ctx.data[e],
            },
          });
        }
      } else if (e === "strict") {
        if (d.length > 0) {
          _(ctx, {
            code: n.unrecognized_keys,
            keys: d,
          });
          status.dirty();
        }
      } else if (e === "strip");
      else {
        throw Error("Internal ZodObject error: invalid unknownKeys value.");
      }
    } else {
      let e = this._def.catchall;
      for (let t of d) {
        let r = ctx.data[t];
        o.push({
          key: {
            status: "valid",
            value: t,
          },
          value: e._parse(new x(ctx, r, ctx.path, t)),
          alwaysSet: t in ctx.data,
        });
      }
    }
    if (ctx.common.async) {
      return Promise.resolve()
        .then(async () => {
          let e = [];
          for (let t of o) {
            let a = await t.key;
            let r = await t.value;
            e.push({
              key: a,
              value: r,
              alwaysSet: t.alwaysSet,
            });
          }
          return e;
        })
        .then((e) => v.mergeObjectSync(status, e));
    }
    return v.mergeObjectSync(status, o);
  }
  get shape() {
    return this._def.shape();
  }
  strict(e) {
    p.errToObj;
    return new er({
      ...this._def,
      unknownKeys: "strict",
      ...(e !== undefined
        ? {
            errorMap: (t, a) => {
              let r = this._def.errorMap?.(t, a).message ?? a.defaultError;
              if (t.code === "unrecognized_keys") {
                return {
                  message: p.errToObj(e).message ?? r,
                };
              }
              return {
                message: r,
              };
            },
          }
        : {}),
    });
  }
  strip() {
    return new er({
      ...this._def,
      unknownKeys: "strip",
    });
  }
  passthrough() {
    return new er({
      ...this._def,
      unknownKeys: "passthrough",
    });
  }
  extend(e) {
    return new er({
      ...this._def,
      shape: () => ({
        ...this._def.shape(),
        ...e,
      }),
    });
  }
  merge(e) {
    return new er({
      unknownKeys: e._def.unknownKeys,
      catchall: e._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...e._def.shape(),
      }),
      typeName: kY.ZodObject,
    });
  }
  setKey(e, t) {
    return this.augment({
      [e]: t,
    });
  }
  catchall(catchall) {
    return new er({
      ...this._def,
      catchall,
    });
  }
  pick(e) {
    let t = {};
    for (let a of c.objectKeys(e)) {
      if (e[a] && this.shape[a]) {
        t[a] = this.shape[a];
      }
    }
    return new er({
      ...this._def,
      shape: () => t,
    });
  }
  omit(e) {
    let t = {};
    for (let a of c.objectKeys(this.shape)) {
      if (!e[a]) {
        t[a] = this.shape[a];
      }
    }
    return new er({
      ...this._def,
      shape: () => t,
    });
  }
  deepPartial() {
    return (function e(t) {
      if (t instanceof er) {
        let a = {};
        for (let r in t.shape) {
          let s = t.shape[r];
          a[r] = Ii.create(e(s));
        }
        return new er({
          ...t._def,
          shape: () => a,
        });
      }
      if (t instanceof ea) {
        return new ea({
          ...t._def,
          type: e(t.element),
        });
      }
      if (t instanceof Ii) {
        return Ii.create(e(t.unwrap()));
      }
      if (t instanceof ev) {
        return ev.create(e(t.unwrap()));
      }
      if (t instanceof en) {
        return en.create(t.items.map((t) => e(t)));
      } else {
        return t;
      }
    })(this);
  }
  partial(e) {
    let t = {};
    for (let a of c.objectKeys(this.shape)) {
      let r = this.shape[a];
      if (e && !e[a]) {
        t[a] = r;
      } else {
        t[a] = r.optional();
      }
    }
    return new er({
      ...this._def,
      shape: () => t,
    });
  }
  required(e) {
    let t = {};
    for (let a of c.objectKeys(this.shape)) {
      if (e && !e[a]) {
        t[a] = this.shape[a];
      } else {
        let e = this.shape[a];
        while (e instanceof Ii) {
          e = e._def.innerType;
        }
        t[a] = e;
      }
    }
    return new er({
      ...this._def,
      shape: () => t,
    });
  }
  keyof() {
    return ec(c.objectKeys(this.shape));
  }
}
er.create = (e, t) =>
  new er({
    shape: () => e,
    unknownKeys: "strip",
    catchall: ee.create(),
    typeName: kY.ZodObject,
    ...S(t),
  });
er.strictCreate = (e, t) =>
  new er({
    shape: () => e,
    unknownKeys: "strict",
    catchall: ee.create(),
    typeName: kY.ZodObject,
    ...S(t),
  });
er.lazycreate = (shape, t) =>
  new er({
    shape,
    unknownKeys: "strip",
    catchall: ee.create(),
    typeName: kY.ZodObject,
    ...S(t),
  });
class es extends T {
  _parse(e) {
    let { ctx } = this._processInputParams(e);
    let options = this._def.options;
    if (ctx.common.async) {
      return Promise.all(
        options.map(async (e) => {
          let a = {
            ...ctx,
            common: {
              ...ctx.common,
              issues: [],
            },
            parent: null,
          };
          return {
            result: await e._parseAsync({
              data: ctx.data,
              path: ctx.path,
              parent: a,
            }),
            ctx: a,
          };
        }),
      ).then((e) => {
        for (let t of e) {
          if (t.result.status === "valid") {
            return t.result;
          }
        }
        for (let a of e) {
          if (a.result.status === "dirty") {
            ctx.common.issues.push(...a.ctx.common.issues);
            return a.result;
          }
        }
        let a = e.map((e) => new d(e.ctx.common.issues));
        _(ctx, {
          code: n.invalid_union,
          unionErrors: a,
        });
        return g;
      });
    }
    {
      let e;
      let r = [];
      for (let s of options) {
        let a = {
          ...ctx,
          common: {
            ...ctx.common,
            issues: [],
          },
          parent: null,
        };
        let result = s._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: a,
        });
        if (result.status === "valid") {
          return result;
        }
        if (!(result.status !== "dirty" || e)) {
          e = {
            result,
            ctx: a,
          };
        }
        if (a.common.issues.length) {
          r.push(a.common.issues);
        }
      }
      if (e) {
        ctx.common.issues.push(...e.ctx.common.issues);
        return e.result;
      }
      let s = r.map((e) => new d(e));
      _(ctx, {
        code: n.invalid_union,
        unionErrors: s,
      });
      return g;
    }
  }
  get options() {
    return this._def.options;
  }
}
es.create = (e, t) =>
  new es({
    options: e,
    typeName: kY.ZodUnion,
    ...S(t),
  });
class ei extends T {
  _parse(e) {
    let { status, ctx } = this._processInputParams(e);
    let r = (e, r) => {
      if (e.status === "aborted" || r.status === "aborted") {
        return g;
      }
      let d = (function e(t, a) {
        let r = i(t);
        let n = i(a);
        if (t === a) {
          return {
            valid: true,
            data: t,
          };
        }
        if (r === s.object && n === s.object) {
          let r = c.objectKeys(a);
          let s = c.objectKeys(t).filter((e) => r.indexOf(e) !== -1);
          let i = {
            ...t,
            ...a,
          };
          for (let r of s) {
            let s = e(t[r], a[r]);
            if (!s.valid) {
              return {
                valid: false,
              };
            }
            i[r] = s.data;
          }
          return {
            valid: true,
            data: i,
          };
        }
        if (r === s.array && n === s.array) {
          if (t.length !== a.length) {
            return {
              valid: false,
            };
          }
          let r = [];
          for (let s = 0; s < t.length; s++) {
            let i = e(t[s], a[s]);
            if (!i.valid) {
              return {
                valid: false,
              };
            }
            r.push(i.data);
          }
          return {
            valid: true,
            data: r,
          };
        }
        if (r === s.date && n === s.date && +t == +a) {
          return {
            valid: true,
            data: t,
          };
        }
        return {
          valid: false,
        };
      })(e.value, r.value);
      if (d.valid) {
        if (e.status === "dirty" || r.status === "dirty") {
          status.dirty();
        }
        return {
          status: status.value,
          value: d.data,
        };
      }
      _(ctx, {
        code: n.invalid_intersection_types,
      });
      return g;
    };
    if (ctx.common.async) {
      return Promise.all([
        this._def.left._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx,
        }),
        this._def.right._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx,
        }),
      ]).then(([e, t]) => r(e, t));
    }
    return r(
      this._def.left._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx,
      }),
      this._def.right._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx,
      }),
    );
  }
}
ei.create = (left, right, a) =>
  new ei({
    left,
    right,
    typeName: kY.ZodIntersection,
    ...S(a),
  });
class en extends T {
  _parse(e) {
    let { status, ctx } = this._processInputParams(e);
    if (ctx.parsedType !== s.array) {
      _(ctx, {
        code: n.invalid_type,
        expected: s.array,
        received: ctx.parsedType,
      });
      return g;
    }
    if (ctx.data.length < this._def.items.length) {
      _(ctx, {
        code: n.too_small,
        minimum: this._def.items.length,
        inclusive: true,
        exact: false,
        type: "array",
      });
      return g;
    }
    if (!this._def.rest && ctx.data.length > this._def.items.length) {
      _(ctx, {
        code: n.too_big,
        maximum: this._def.items.length,
        inclusive: true,
        exact: false,
        type: "array",
      });
      status.dirty();
    }
    let r = [...ctx.data]
      .map((e, t) => {
        let r = this._def.items[t] || this._def.rest;
        if (r) {
          return r._parse(new x(ctx, e, ctx.path, t));
        }
        return null;
      })
      .filter((e) => !!e);
    if (ctx.common.async) {
      return Promise.all(r).then((e) => v.mergeArray(status, e));
    }
    return v.mergeArray(status, r);
  }
  get items() {
    return this._def.items;
  }
  rest(rest) {
    return new en({
      ...this._def,
      rest,
    });
  }
}
en.create = (items, t) => {
  if (!Array.isArray(items)) {
    throw Error("You must pass an array of schemas to z.tuple([ ... ])");
  }
  return new en({
    items,
    typeName: kY.ZodTuple,
    rest: null,
    ...S(t),
  });
};
class ed extends T {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(e) {
    let { status, ctx } = this._processInputParams(e);
    if (ctx.parsedType !== s.map) {
      _(ctx, {
        code: n.invalid_type,
        expected: s.map,
        received: ctx.parsedType,
      });
      return g;
    }
    let keyType = this._def.keyType;
    let valueType = this._def.valueType;
    let d = [...ctx.data.entries()].map(([e, t], s) => ({
      key: keyType._parse(new x(ctx, e, ctx.path, [s, "key"])),
      value: valueType._parse(new x(ctx, t, ctx.path, [s, "value"])),
    }));
    if (ctx.common.async) {
      let e = new Map();
      return Promise.resolve().then(async () => {
        for (let a of d) {
          let r = await a.key;
          let s = await a.value;
          if (r.status === "aborted" || s.status === "aborted") {
            return g;
          }
          if (r.status === "dirty" || s.status === "dirty") {
            status.dirty();
          }
          e.set(r.value, s.value);
        }
        return {
          status: status.value,
          value: e,
        };
      });
    }
    {
      let e = new Map();
      for (let a of d) {
        let r = a.key;
        let s = a.value;
        if (r.status === "aborted" || s.status === "aborted") {
          return g;
        }
        if (r.status === "dirty" || s.status === "dirty") {
          status.dirty();
        }
        e.set(r.value, s.value);
      }
      return {
        status: status.value,
        value: e,
      };
    }
  }
}
ed.create = (keyType, t, a) =>
  new ed({
    valueType: t,
    keyType,
    typeName: kY.ZodMap,
    ...S(a),
  });
class eo extends T {
  _parse(e) {
    let { status, ctx } = this._processInputParams(e);
    if (ctx.parsedType !== s.set) {
      _(ctx, {
        code: n.invalid_type,
        expected: s.set,
        received: ctx.parsedType,
      });
      return g;
    }
    let _def = this._def;
    if (_def.minSize !== null && ctx.data.size < _def.minSize.value) {
      _(ctx, {
        code: n.too_small,
        minimum: _def.minSize.value,
        type: "set",
        inclusive: true,
        exact: false,
        message: _def.minSize.message,
      });
      status.dirty();
    }
    if (_def.maxSize !== null && ctx.data.size > _def.maxSize.value) {
      _(ctx, {
        code: n.too_big,
        maximum: _def.maxSize.value,
        type: "set",
        inclusive: true,
        exact: false,
        message: _def.maxSize.message,
      });
      status.dirty();
    }
    let valueType = this._def.valueType;
    function d(e) {
      let a = new Set();
      for (let r of e) {
        if (r.status === "aborted") {
          return g;
        }
        if (r.status === "dirty") {
          status.dirty();
        }
        a.add(r.value);
      }
      return {
        status: status.value,
        value: a,
      };
    }
    let o = [...ctx.data.values()].map((e, t) =>
      valueType._parse(new x(ctx, e, ctx.path, t)),
    );
    if (ctx.common.async) {
      return Promise.all(o).then((e) => d(e));
    }
    return d(o);
  }
  min(e, t) {
    return new eo({
      ...this._def,
      minSize: {
        value: e,
        message: p.toString(t),
      },
    });
  }
  max(e, t) {
    return new eo({
      ...this._def,
      maxSize: {
        value: e,
        message: p.toString(t),
      },
    });
  }
  size(e, t) {
    return this.min(e, t).max(e, t);
  }
  nonempty(e) {
    return this.min(1, e);
  }
}
eo.create = (e, t) =>
  new eo({
    valueType: e,
    minSize: null,
    maxSize: null,
    typeName: kY.ZodSet,
    ...S(t),
  });
class eu extends T {
  get schema() {
    return this._def.getter();
  }
  _parse(e) {
    let { ctx } = this._processInputParams(e);
    return this._def.getter()._parse({
      data: ctx.data,
      path: ctx.path,
      parent: ctx,
    });
  }
}
eu.create = (getter, t) =>
  new eu({
    getter,
    typeName: kY.ZodLazy,
    ...S(t),
  });
class el extends T {
  _parse(e) {
    if (e.data !== this._def.value) {
      let t = this._getOrReturnCtx(e);
      _(t, {
        received: t.data,
        code: n.invalid_literal,
        expected: this._def.value,
      });
      return g;
    }
    return {
      status: "valid",
      value: e.data,
    };
  }
  get value() {
    return this._def.value;
  }
}
function ec(e, t) {
  return new eh({
    values: e,
    typeName: kY.ZodEnum,
    ...S(t),
  });
}
el.create = (e, t) =>
  new el({
    value: e,
    typeName: kY.ZodLiteral,
    ...S(t),
  });
class eh extends T {
  _parse(e) {
    if (typeof e.data !== "string") {
      let t = this._getOrReturnCtx(e);
      let a = this._def.values;
      _(t, {
        expected: c.joinValues(a),
        received: t.parsedType,
        code: n.invalid_type,
      });
      return g;
    }
    if (!this._cache) {
      this._cache = new Set(this._def.values);
    }
    if (!this._cache.has(e.data)) {
      let t = this._getOrReturnCtx(e);
      let a = this._def.values;
      _(t, {
        received: t.data,
        code: n.invalid_enum_value,
        options: a,
      });
      return g;
    }
    return k(e.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    let e = {};
    for (let t of this._def.values) {
      e[t] = t;
    }
    return e;
  }
  get Values() {
    let e = {};
    for (let t of this._def.values) {
      e[t] = t;
    }
    return e;
  }
  get Enum() {
    let e = {};
    for (let t of this._def.values) {
      e[t] = t;
    }
    return e;
  }
  extract(e, t = this._def) {
    return eh.create(e, {
      ...this._def,
      ...t,
    });
  }
  exclude(e, t = this._def) {
    return eh.create(
      this.options.filter((t) => !e.includes(t)),
      {
        ...this._def,
        ...t,
      },
    );
  }
}
eh.create = ec;
class ep extends T {
  _parse(e) {
    let t = c.getValidEnumValues(this._def.values);
    let a = this._getOrReturnCtx(e);
    if (a.parsedType !== s.string && a.parsedType !== s.number) {
      let e = c.objectValues(t);
      _(a, {
        expected: c.joinValues(e),
        received: a.parsedType,
        code: n.invalid_type,
      });
      return g;
    }
    if (!this._cache) {
      this._cache = new Set(c.getValidEnumValues(this._def.values));
    }
    if (!this._cache.has(e.data)) {
      let e = c.objectValues(t);
      _(a, {
        received: a.data,
        code: n.invalid_enum_value,
        options: e,
      });
      return g;
    }
    return k(e.data);
  }
  get enum() {
    return this._def.values;
  }
}
ep.create = (e, t) =>
  new ep({
    values: e,
    typeName: kY.ZodNativeEnum,
    ...S(t),
  });
class em extends T {
  unwrap() {
    return this._def.type;
  }
  _parse(e) {
    let { ctx } = this._processInputParams(e);
    if (ctx.parsedType !== s.promise && ctx.common.async === false) {
      _(ctx, {
        code: n.invalid_type,
        expected: s.promise,
        received: ctx.parsedType,
      });
      return g;
    }
    return k(
      (ctx.parsedType === s.promise
        ? ctx.data
        : Promise.resolve(ctx.data)
      ).then((e) =>
        this._def.type.parseAsync(e, {
          path: ctx.path,
          errorMap: ctx.common.contextualErrorMap,
        }),
      ),
    );
  }
}
em.create = (e, t) =>
  new em({
    type: e,
    typeName: kY.ZodPromise,
    ...S(t),
  });
class ef extends T {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    if (this._def.schema._def.typeName === kY.ZodEffects) {
      return this._def.schema.sourceType();
    }
    return this._def.schema;
  }
  _parse(e) {
    let { status, ctx } = this._processInputParams(e);
    let r = this._def.effect || null;
    let s = {
      addIssue: (e) => {
        _(ctx, e);
        if (e.fatal) {
          status.abort();
        } else {
          status.dirty();
        }
      },
      get path() {
        return ctx.path;
      },
    };
    s.addIssue = s.addIssue.bind(s);
    if (r.type === "preprocess") {
      let e = r.transform(ctx.data, s);
      if (ctx.common.async) {
        return Promise.resolve(e).then(async (data) => {
          if (status.value === "aborted") {
            return g;
          }
          let r = await this._def.schema._parseAsync({
            data,
            path: ctx.path,
            parent: ctx,
          });
          if (r.status === "aborted") {
            return g;
          }
          if (r.status === "dirty" || status.value === "dirty") {
            return y(r.value);
          }
          return r;
        });
      }
      {
        if (status.value === "aborted") {
          return g;
        }
        let r = this._def.schema._parseSync({
          data: e,
          path: ctx.path,
          parent: ctx,
        });
        if (r.status === "aborted") {
          return g;
        }
        if (r.status === "dirty" || status.value === "dirty") {
          return y(r.value);
        }
        return r;
      }
    }
    if (r.type === "refinement") {
      let e = (e) => {
        let t = r.refinement(e, s);
        if (ctx.common.async) {
          return Promise.resolve(t);
        }
        if (t instanceof Promise) {
          throw Error(
            "Async refinement encountered during synchronous parse operation. Use .parseAsync instead.",
          );
        }
        return e;
      };
      if (ctx.common.async !== false) {
        return this._def.schema
          ._parseAsync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx,
          })
          .then((a) => {
            if (a.status === "aborted") {
              return g;
            }
            if (a.status === "dirty") {
              status.dirty();
            }
            return e(a.value).then(() => ({
              status: status.value,
              value: a.value,
            }));
          });
      }
      {
        let r = this._def.schema._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx,
        });
        if (r.status === "aborted") {
          return g;
        }
        if (r.status === "dirty") {
          status.dirty();
        }
        e(r.value);
        return {
          status: status.value,
          value: r.value,
        };
      }
    }
    if (r.type === "transform") {
      if (ctx.common.async !== false) {
        return this._def.schema
          ._parseAsync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx,
          })
          .then((e) => {
            if (e.status !== "valid") {
              return g;
            }
            return Promise.resolve(r.transform(e.value, s)).then((e) => ({
              status: status.value,
              value: e,
            }));
          });
      } else {
        let e = this._def.schema._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx,
        });
        if (e.status !== "valid") {
          return g;
        }
        let i = r.transform(e.value, s);
        if (i instanceof Promise) {
          throw Error(
            "Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.",
          );
        }
        return {
          status: status.value,
          value: i,
        };
      }
    }
    c.assertNever(r);
  }
}
ef.create = (e, effect, a) =>
  new ef({
    schema: e,
    typeName: kY.ZodEffects,
    effect,
    ...S(a),
  });
ef.createWithPreprocess = (e, t, a) =>
  new ef({
    schema: t,
    effect: {
      type: "preprocess",
      transform: e,
    },
    typeName: kY.ZodEffects,
    ...S(a),
  });
export class Ii extends T {
  _parse(e) {
    if (this._getType(e) === s.undefined) {
      return k(undefined);
    }
    return this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Ii.create = (e, t) =>
  new Ii({
    innerType: e,
    typeName: kY.ZodOptional,
    ...S(t),
  });
class ev extends T {
  _parse(e) {
    if (this._getType(e) === s.null) {
      return k(null);
    }
    return this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
ev.create = (e, t) =>
  new ev({
    innerType: e,
    typeName: kY.ZodNullable,
    ...S(t),
  });
class eg extends T {
  _parse(e) {
    let { ctx } = this._processInputParams(e);
    let ctx_data = ctx.data;
    if (ctx.parsedType === s.undefined) {
      ctx_data = this._def.defaultValue();
    }
    return this._def.innerType._parse({
      data: ctx_data,
      path: ctx.path,
      parent: ctx,
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
}
eg.create = (e, t) =>
  new eg({
    innerType: e,
    typeName: kY.ZodDefault,
    defaultValue: typeof t.default === "function" ? t.default : () => t.default,
    ...S(t),
  });
class ey extends T {
  _parse(e) {
    let { ctx } = this._processInputParams(e);
    let a = {
      ...ctx,
      common: {
        ...ctx.common,
        issues: [],
      },
    };
    let r = this._def.innerType._parse({
      data: a.data,
      path: a.path,
      parent: {
        ...a,
      },
    });
    if (b(r)) {
      return r.then((e) => ({
        status: "valid",
        value:
          e.status === "valid"
            ? e.value
            : this._def.catchValue({
                get error() {
                  return new d(a.common.issues);
                },
                input: a.data,
              }),
      }));
    }
    return {
      status: "valid",
      value:
        r.status === "valid"
          ? r.value
          : this._def.catchValue({
              get error() {
                return new d(a.common.issues);
              },
              input: a.data,
            }),
    };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
ey.create = (e, t) =>
  new ey({
    innerType: e,
    typeName: kY.ZodCatch,
    catchValue: typeof t.catch === "function" ? t.catch : () => t.catch,
    ...S(t),
  });
class ek extends T {
  _parse(e) {
    if (this._getType(e) !== s.nan) {
      let t = this._getOrReturnCtx(e);
      _(t, {
        code: n.invalid_type,
        expected: s.nan,
        received: t.parsedType,
      });
      return g;
    }
    return {
      status: "valid",
      value: e.data,
    };
  }
}
ek.create = (e) =>
  new ek({
    typeName: kY.ZodNaN,
    ...S(e),
  });
Symbol("zod_brand");
class eb extends T {
  _parse(e) {
    let { ctx } = this._processInputParams(e);
    let ctx_data = ctx.data;
    return this._def.type._parse({
      data: ctx_data,
      path: ctx.path,
      parent: ctx,
    });
  }
  unwrap() {
    return this._def.type;
  }
}
class ex extends T {
  _parse(e) {
    let { status, ctx } = this._processInputParams(e);
    if (ctx.common.async) {
      return (async () => {
        let e = await this._def.in._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx,
        });
        if (e.status === "aborted") {
          return g;
        }
        if (e.status === "dirty") {
          status.dirty();
          return y(e.value);
        }
        return this._def.out._parseAsync({
          data: e.value,
          path: ctx.path,
          parent: ctx,
        });
      })();
    }
    {
      let e = this._def.in._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx,
      });
      if (e.status === "aborted") {
        return g;
      }
      if (e.status === "dirty") {
        status.dirty();
        return {
          status: "dirty",
          value: e.value,
        };
      }
      return this._def.out._parseSync({
        data: e.value,
        path: ctx.path,
        parent: ctx,
      });
    }
  }
  static create(e, out) {
    return new ex({
      in: e,
      out,
      typeName: kY.ZodPipeline,
    });
  }
}
class ew extends T {
  _parse(e) {
    let t = this._def.innerType._parse(e);
    let a = (e) => {
      if (e.status === "valid") {
        e.value = Object.freeze(e.value);
      }
      return e;
    };
    if (b(t)) {
      return t.then((e) => a(e));
    }
    return a(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
ew.create = (e, t) =>
  new ew({
    innerType: e,
    typeName: kY.ZodReadonly,
    ...S(t),
  });
er.lazycreate;
u = kY || (kY = {});
u.ZodString = "ZodString";
u.ZodNumber = "ZodNumber";
u.ZodNaN = "ZodNaN";
u.ZodBigInt = "ZodBigInt";
u.ZodBoolean = "ZodBoolean";
u.ZodDate = "ZodDate";
u.ZodSymbol = "ZodSymbol";
u.ZodUndefined = "ZodUndefined";
u.ZodNull = "ZodNull";
u.ZodAny = "ZodAny";
u.ZodUnknown = "ZodUnknown";
u.ZodNever = "ZodNever";
u.ZodVoid = "ZodVoid";
u.ZodArray = "ZodArray";
u.ZodObject = "ZodObject";
u.ZodUnion = "ZodUnion";
u.ZodDiscriminatedUnion = "ZodDiscriminatedUnion";
u.ZodIntersection = "ZodIntersection";
u.ZodTuple = "ZodTuple";
u.ZodRecord = "ZodRecord";
u.ZodMap = "ZodMap";
u.ZodSet = "ZodSet";
u.ZodFunction = "ZodFunction";
u.ZodLazy = "ZodLazy";
u.ZodLiteral = "ZodLiteral";
u.ZodEnum = "ZodEnum";
u.ZodEffects = "ZodEffects";
u.ZodNativeEnum = "ZodNativeEnum";
u.ZodOptional = "ZodOptional";
u.ZodNullable = "ZodNullable";
u.ZodDefault = "ZodDefault";
u.ZodCatch = "ZodCatch";
u.ZodPromise = "ZodPromise";
u.ZodBranded = "ZodBranded";
u.ZodPipeline = "ZodPipeline";
u.ZodReadonly = "ZodReadonly";
export let Yj = M.create;
export let ai = W.create;
ek.create;
Q.create;
export let zM = q.create;
B.create;
J.create;
X.create;
Y.create;
export let bz = G.create;
export let L5 = H.create;
ee.create;
et.create;
export let YO = ea.create;
export let Ik = er.create;
er.strictCreate;
es.create;
ei.create;
en.create;
export let g1 = class e extends T {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(e) {
    let { status, ctx } = this._processInputParams(e);
    if (ctx.parsedType !== s.object) {
      _(ctx, {
        code: n.invalid_type,
        expected: s.object,
        received: ctx.parsedType,
      });
      return g;
    }
    let r = [];
    let keyType = this._def.keyType;
    let valueType = this._def.valueType;
    for (let e in ctx.data) {
      r.push({
        key: keyType._parse(new x(ctx, e, ctx.path, e)),
        value: valueType._parse(new x(ctx, ctx.data[e], ctx.path, e)),
        alwaysSet: e in ctx.data,
      });
    }
    if (ctx.common.async) {
      return v.mergeObjectAsync(status, r);
    }
    return v.mergeObjectSync(status, r);
  }
  get element() {
    return this._def.valueType;
  }
  static create(t, a, r) {
    return new e(
      a instanceof T
        ? {
            keyType: t,
            valueType: a,
            typeName: kY.ZodRecord,
            ...S(r),
          }
        : {
            keyType: M.create(),
            valueType: t,
            typeName: kY.ZodRecord,
            ...S(a),
          },
    );
  }
}.create;
ed.create;
eo.create;
eu.create;
let el_create = el.create;
export { el_create as eu };
export let k5 = eh.create;
ep.create;
em.create;
ef.create;
Ii.create;
ev.create;
ef.createWithPreprocess;
ex.create;
