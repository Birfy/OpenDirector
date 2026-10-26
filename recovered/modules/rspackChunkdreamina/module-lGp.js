import s from "TF4";
import { BW, KW, Lm, xL } from "./module-gi5.js";
import l from "EkZ";
let a;
let o = Symbol("Let zodToJsonSchema decide on which parser to use");
let n = {
  name: undefined,
  $refStrategy: "root",
  basePath: ["#"],
  effectStrategy: "input",
  pipeStrategy: "all",
  dateStrategy: "format:date-time",
  mapStrategy: "entries",
  removeAdditionalStrategy: "passthrough",
  allowedAdditionalProperties: true,
  rejectedAdditionalProperties: false,
  definitionPath: "definitions",
  target: "jsonSchema7",
  strictUnions: false,
  definitions: {},
  errorMessages: false,
  markdownDescription: false,
  patternStrategy: "escape",
  applyRegexFlags: false,
  emailStrategy: "format:email",
  base64Strategy: "contentEncoding:base64",
  nameStrategy: "ref",
  openAiAnyTypeName: "OpenAiAnyType",
};
let d = (e, t) => {
  let r = 0;
  for (; r < e.length && r < t.length && e[r] === t[r]; r++);
  return [(e.length - r).toString(), ...t.slice(r)].join("/");
};
function c(e) {
  if (e.target !== "openAi") {
    return {};
  }
  let t = [...e.basePath, e.definitionPath, e.openAiAnyTypeName];
  e.flags.hasReferencedOpenAiAnyType = true;
  return {
    $ref: e.$refStrategy === "relative" ? d(t, e.currentPath) : t.join("/"),
  };
}
function u(e, t, r, a) {
  if (a?.errorMessages && r) {
    e.errorMessage = {
      ...e.errorMessage,
      [t]: r,
    };
  }
}
function f(e, t, r, a, s) {
  e[t] = r;
  u(e, t, a, s);
}
function p(e, t) {
  return O(e.type._def, t);
}
let h = /^[cC][^\s-]{8,}$/;
let m = /^[0-9a-z]+$/;
let g = /^[0-9A-HJKMNP-TV-Z]{26}$/;
let y =
  /^(?!\.)(?!.*\.\.)([a-zA-Z0-9_'+\-\.]*)[a-zA-Z0-9_+-]@([a-zA-Z0-9][a-zA-Z0-9\-]*\.)+[a-zA-Z]{2,}$/;
let v = () => {
  if (a === undefined) {
    a = RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u");
  }
  return a;
};
let _ =
  /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/;
let $ =
  /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
let w = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
let b =
  /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/;
let k = /^[a-zA-Z0-9_-]{21}$/;
let E = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/;
function S(e, t) {
  let r = {
    type: "string",
  };
  if (e.checks) {
    for (let a of e.checks) {
      switch (a.kind) {
        case "min":
          f(
            r,
            "minLength",
            typeof r.minLength === "number"
              ? Math.max(r.minLength, a.value)
              : a.value,
            a.message,
            t,
          );
          break;
        case "max":
          f(
            r,
            "maxLength",
            typeof r.maxLength === "number"
              ? Math.min(r.maxLength, a.value)
              : a.value,
            a.message,
            t,
          );
          break;
        case "email":
          switch (t.emailStrategy) {
            case "format:email":
              I(r, "email", a.message, t);
              break;
            case "format:idn-email":
              I(r, "idn-email", a.message, t);
              break;
            case "pattern:zod":
              x(r, y, a.message, t);
          }
          break;
        case "url":
          I(r, "uri", a.message, t);
          break;
        case "uuid":
          I(r, "uuid", a.message, t);
          break;
        case "regex":
          x(r, a.regex, a.message, t);
          break;
        case "cuid":
          x(r, h, a.message, t);
          break;
        case "cuid2":
          x(r, m, a.message, t);
          break;
        case "startsWith":
          x(r, RegExp(`^${T(a.value, t)}`), a.message, t);
          break;
        case "endsWith":
          x(r, RegExp(`${T(a.value, t)}$`), a.message, t);
          break;
        case "datetime":
          I(r, "date-time", a.message, t);
          break;
        case "date":
          I(r, "date", a.message, t);
          break;
        case "time":
          I(r, "time", a.message, t);
          break;
        case "duration":
          I(r, "duration", a.message, t);
          break;
        case "length":
          f(
            r,
            "minLength",
            typeof r.minLength === "number"
              ? Math.max(r.minLength, a.value)
              : a.value,
            a.message,
            t,
          );
          f(
            r,
            "maxLength",
            typeof r.maxLength === "number"
              ? Math.min(r.maxLength, a.value)
              : a.value,
            a.message,
            t,
          );
          break;
        case "includes":
          x(r, RegExp(T(a.value, t)), a.message, t);
          break;
        case "ip":
          if (a.version !== "v6") {
            I(r, "ipv4", a.message, t);
          }
          if (a.version !== "v4") {
            I(r, "ipv6", a.message, t);
          }
          break;
        case "base64url":
          x(r, b, a.message, t);
          break;
        case "jwt":
          x(r, E, a.message, t);
          break;
        case "cidr":
          if (a.version !== "v6") {
            x(r, _, a.message, t);
          }
          if (a.version !== "v4") {
            x(r, $, a.message, t);
          }
          break;
        case "emoji":
          x(r, v(), a.message, t);
          break;
        case "ulid":
          x(r, g, a.message, t);
          break;
        case "base64":
          switch (t.base64Strategy) {
            case "format:binary":
              I(r, "binary", a.message, t);
              break;
            case "contentEncoding:base64":
              f(r, "contentEncoding", "base64", a.message, t);
              break;
            case "pattern:zod":
              x(r, w, a.message, t);
          }
          break;
        case "nanoid":
          x(r, k, a.message, t);
      }
    }
  }
  return r;
}
function T(e, t) {
  if (t.patternStrategy === "escape") {
    return ((e) => {
      let t = "";
      for (let r = 0; r < e.length; r++) {
        if (!P.has(e[r])) {
          t += "\\";
        }
        t += e[r];
      }
      return t;
    })(e);
  }
  return e;
}
let P = new Set("ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvxyz0123456789");
function I(e, t, message, a) {
  if (e.format || e.anyOf?.some((e) => e.format)) {
    if (!e.anyOf) {
      e.anyOf = [];
    }
    if (e.format) {
      e.anyOf.push({
        format: e.format,
        ...(e.errorMessage &&
          a.errorMessages && {
            errorMessage: {
              format: e.errorMessage.format,
            },
          }),
      });
      delete e.format;
      if (e.errorMessage) {
        delete e.errorMessage.format;
        if (Object.keys(e.errorMessage).length === 0) {
          delete e.errorMessage;
        }
      }
    }
    e.anyOf.push({
      format: t,
      ...(message &&
        a.errorMessages && {
          errorMessage: {
            format: message,
          },
        }),
    });
  } else {
    f(e, "format", t, message, a);
  }
}
function x(e, t, pattern, a) {
  if (e.pattern || e.allOf?.some((e) => e.pattern)) {
    if (!e.allOf) {
      e.allOf = [];
    }
    if (e.pattern) {
      e.allOf.push({
        pattern: e.pattern,
        ...(e.errorMessage &&
          a.errorMessages && {
            errorMessage: {
              pattern: e.errorMessage.pattern,
            },
          }),
      });
      delete e.pattern;
      if (e.errorMessage) {
        delete e.errorMessage.pattern;
        if (Object.keys(e.errorMessage).length === 0) {
          delete e.errorMessage;
        }
      }
    }
    e.allOf.push({
      pattern: j(t, a),
      ...(pattern &&
        a.errorMessages && {
          errorMessage: {
            pattern,
          },
        }),
    });
  } else {
    f(e, "pattern", j(t, a), pattern, a);
  }
}
function j(e, t) {
  if (!t.applyRegexFlags || !e.flags) {
    return e.source;
  }
  let r = {
    i: e.flags.includes("i"),
    m: e.flags.includes("m"),
    s: e.flags.includes("s"),
  };
  let a = r.i ? e.source.toLowerCase() : e.source;
  let s = "";
  let i = false;
  let o = false;
  let n = false;
  for (let e = 0; e < a.length; e++) {
    if (i) {
      s += a[e];
      i = false;
      continue;
    }
    if (r.i) {
      if (o) {
        if (a[e].match(/[a-z]/)) {
          if (n) {
            s += a[e];
            s += `${a[e - 2]}-${a[e]}`.toUpperCase();
            n = false;
          } else if (a[e + 1] === "-" && a[e + 2]?.match(/[a-z]/)) {
            s += a[e];
            n = true;
          } else {
            s += `${a[e]}${a[e].toUpperCase()}`;
          }
          continue;
        }
      } else if (a[e].match(/[a-z]/)) {
        s += `[${a[e]}${a[e].toUpperCase()}]`;
        continue;
      }
    }
    if (r.m) {
      if (a[e] === "^") {
        s += `(^|(?<=[\r
]))`;
        continue;
      } else if (a[e] === "$") {
        s += `($|(?=[\r
]))`;
        continue;
      }
    }
    if (r.s && a[e] === ".") {
      s += o
        ? `${a[e]}\r
`
        : `[${a[e]}\r
]`;
      continue;
    }
    s += a[e];
    if (a[e] === "\\") {
      i = true;
    } else if (o && a[e] === "]") {
      o = false;
    } else if (!(o || a[e] !== "[")) {
      o = true;
    }
  }
  try {
    new RegExp(s);
  } catch {
    console.warn(
      `Could not convert regex pattern at ${t.currentPath.join("/")} to a flag-independent form! Falling back to the flag-ignorant source`,
    );
    return e.source;
  }
  return s;
}
function R(e, t) {
  if (t.target === "openAi") {
    console.warn(
      "Warning: OpenAI may not support records in schemas! Try an array of key-value pairs instead.",
    );
  }
  if (t.target === "openApi3" && e.keyType?._def.typeName === l.kY.ZodEnum) {
    return {
      type: "object",
      required: e.keyType._def.values,
      properties: e.keyType._def.values.reduce(
        (acc, value) => ({
          ...acc,
          [value]:
            O(e.valueType._def, {
              ...t,
              currentPath: [...t.currentPath, "properties", value],
            }) ?? c(t),
        }),
        {},
      ),
      additionalProperties: t.rejectedAdditionalProperties,
    };
  }
  let r = {
    type: "object",
    additionalProperties:
      O(e.valueType._def, {
        ...t,
        currentPath: [...t.currentPath, "additionalProperties"],
      }) ?? t.allowedAdditionalProperties,
  };
  if (t.target === "openApi3") {
    return r;
  }
  if (
    e.keyType?._def.typeName === l.kY.ZodString &&
    e.keyType._def.checks?.length
  ) {
    let { type, ...rest } = S(e.keyType._def, t);
    return {
      ...r,
      propertyNames: rest,
    };
  }
  if (e.keyType?._def.typeName === l.kY.ZodEnum) {
    return {
      ...r,
      propertyNames: {
        enum: e.keyType._def.values,
      },
    };
  }
  if (
    e.keyType?._def.typeName === l.kY.ZodBranded &&
    e.keyType._def.type._def.typeName === l.kY.ZodString &&
    e.keyType._def.type._def.checks?.length
  ) {
    let { type, ...rest } = p(e.keyType._def, t);
    return {
      ...r,
      propertyNames: rest,
    };
  }
  return r;
}
let N = {
  ZodString: "string",
  ZodNumber: "number",
  ZodBigInt: "integer",
  ZodBoolean: "boolean",
  ZodNull: "null",
};
let C = (e, t) => {
  let anyOf = (
    e.options instanceof Map ? Array.from(e.options.values()) : e.options
  )
    .map((e, r) =>
      O(e._def, {
        ...t,
        currentPath: [...t.currentPath, "anyOf", `${r}`],
      }),
    )
    .filter(
      (e) =>
        !!e &&
        (!t.strictUnions ||
          (typeof e === "object" && Object.keys(e).length > 0)),
    );
  if (anyOf.length) {
    return {
      anyOf,
    };
  }
};
function O(def, t, r = false) {
  let a = t.seen.get(def);
  if (t.override) {
    let s = t.override?.(def, t, a, r);
    if (s !== o) {
      return s;
    }
  }
  if (a && !r) {
    let e = q(a, t);
    if (e !== undefined) {
      return e;
    }
  }
  let s = {
    def,
    path: t.currentPath,
    jsonSchema: undefined,
  };
  t.seen.set(def, s);
  let i = ((e, t, r) => {
    switch (t) {
      case l.kY.ZodString:
        return S(e, r);
      case l.kY.ZodNumber:
        let a = {
          type: "number",
        };
        if (!e.checks) {
          return a;
        }
        for (let t of e.checks) {
          switch (t.kind) {
            case "int":
              a.type = "integer";
              u(a, "type", t.message, r);
              break;
            case "min":
              if (r.target === "jsonSchema7") {
                if (t.inclusive) {
                  f(a, "minimum", t.value, t.message, r);
                } else {
                  f(a, "exclusiveMinimum", t.value, t.message, r);
                }
              } else {
                if (!t.inclusive) {
                  a.exclusiveMinimum = true;
                }
                f(a, "minimum", t.value, t.message, r);
              }
              break;
            case "max":
              if (r.target === "jsonSchema7") {
                if (t.inclusive) {
                  f(a, "maximum", t.value, t.message, r);
                } else {
                  f(a, "exclusiveMaximum", t.value, t.message, r);
                }
              } else {
                if (!t.inclusive) {
                  a.exclusiveMaximum = true;
                }
                f(a, "maximum", t.value, t.message, r);
              }
              break;
            case "multipleOf":
              f(a, "multipleOf", t.value, t.message, r);
          }
        }
        return a;
      case l.kY.ZodObject:
        return ((e, t) => {
          let r = t.target === "openAi";
          let a = {
            type: "object",
            properties: {},
          };
          let s = [];
          let i = e.shape();
          for (let e in i) {
            let o = i[e];
            if (o === undefined || o._def === undefined) {
              continue;
            }
            let n = ((e) => {
              try {
                return e.isOptional();
              } catch {
                return true;
              }
            })(o);
            if (n && r) {
              if (o._def.typeName === "ZodOptional") {
                o = o._def.innerType;
              }
              if (!o.isNullable()) {
                o = o.nullable();
              }
              n = false;
            }
            let l = O(o._def, {
              ...t,
              currentPath: [...t.currentPath, "properties", e],
              propertyPath: [...t.currentPath, "properties", e],
            });
            if (l !== undefined) {
              a.properties[e] = l;
              if (!n) {
                s.push(e);
              }
            }
          }
          if (s.length) {
            a.required = s;
          }
          let o = ((e, t) => {
            if (e.catchall._def.typeName !== "ZodNever") {
              return O(e.catchall._def, {
                ...t,
                currentPath: [...t.currentPath, "additionalProperties"],
              });
            }
            switch (e.unknownKeys) {
              case "passthrough":
                return t.allowedAdditionalProperties;
              case "strict":
                return t.rejectedAdditionalProperties;
              case "strip":
                if (t.removeAdditionalStrategy === "strict") {
                  return t.allowedAdditionalProperties;
                }
                return t.rejectedAdditionalProperties;
            }
          })(e, t);
          if (o !== undefined) {
            a.additionalProperties = o;
          }
          return a;
        })(e, r);
      case l.kY.ZodBigInt:
        let s = {
          type: "integer",
          format: "int64",
        };
        if (!e.checks) {
          return s;
        }
        for (let t of e.checks) {
          switch (t.kind) {
            case "min":
              if (r.target === "jsonSchema7") {
                if (t.inclusive) {
                  f(s, "minimum", t.value, t.message, r);
                } else {
                  f(s, "exclusiveMinimum", t.value, t.message, r);
                }
              } else {
                if (!t.inclusive) {
                  s.exclusiveMinimum = true;
                }
                f(s, "minimum", t.value, t.message, r);
              }
              break;
            case "max":
              if (r.target === "jsonSchema7") {
                if (t.inclusive) {
                  f(s, "maximum", t.value, t.message, r);
                } else {
                  f(s, "exclusiveMaximum", t.value, t.message, r);
                }
              } else {
                if (!t.inclusive) {
                  s.exclusiveMaximum = true;
                }
                f(s, "maximum", t.value, t.message, r);
              }
              break;
            case "multipleOf":
              f(s, "multipleOf", t.value, t.message, r);
          }
        }
        return s;
      case l.kY.ZodBoolean:
        return {
          type: "boolean",
        };
      case l.kY.ZodDate:
        return (function e(t, r, a) {
          let s = a ?? r.dateStrategy;
          if (Array.isArray(s)) {
            return {
              anyOf: s.map((a, s) => e(t, r, a)),
            };
          }
          switch (s) {
            case "string":
            case "format:date-time":
              return {
                type: "string",
                format: "date-time",
              };
            case "format:date":
              return {
                type: "string",
                format: "date",
              };
            case "integer":
              const i = t;
              const o = r;
              let n = {
                type: "integer",
                format: "unix-time",
              };
              if (o.target === "openApi3") {
                return n;
              }
              for (let e of i.checks) {
                switch (e.kind) {
                  case "min":
                    f(n, "minimum", e.value, e.message, o);
                    break;
                  case "max":
                    f(n, "maximum", e.value, e.message, o);
                }
              }
              return n;
          }
        })(e, r);
      case l.kY.ZodUndefined:
        return {
          not: c(r),
        };
      case l.kY.ZodNull:
        if (r.target === "openApi3") {
          return {
            enum: ["null"],
            nullable: true,
          };
        }
        return {
          type: "null",
        };
      case l.kY.ZodArray:
        let i;
        i = {
          type: "array",
        };
        if (e.type?._def && e.type?._def?.typeName !== l.kY.ZodAny) {
          i.items = O(e.type._def, {
            ...r,
            currentPath: [...r.currentPath, "items"],
          });
        }
        if (e.minLength) {
          f(i, "minItems", e.minLength.value, e.minLength.message, r);
        }
        if (e.maxLength) {
          f(i, "maxItems", e.maxLength.value, e.maxLength.message, r);
        }
        if (e.exactLength) {
          f(i, "minItems", e.exactLength.value, e.exactLength.message, r);
          f(i, "maxItems", e.exactLength.value, e.exactLength.message, r);
        }
        return i;
      case l.kY.ZodUnion:
      case l.kY.ZodDiscriminatedUnion:
        if (r.target === "openApi3") {
          return C(e, r);
        }
        let o =
          e.options instanceof Map ? Array.from(e.options.values()) : e.options;
        if (
          o.every(
            (e) =>
              e._def.typeName in N && (!e._def.checks || !e._def.checks.length),
          )
        ) {
          let e = o.reduce((acc, item) => {
            let r = N[item._def.typeName];
            if (r && !acc.includes(r)) {
              return [...acc, r];
            }
            return acc;
          }, []);
          return {
            type: e.length > 1 ? e : e[0],
          };
        }
        if (
          o.every((e) => e._def.typeName === "ZodLiteral" && !e.description)
        ) {
          let e = o.reduce((acc, item) => {
            let r = typeof item._def.value;
            switch (r) {
              case "string":
              case "number":
              case "boolean":
                return [...acc, r];
              case "bigint":
                return [...acc, "integer"];
              case "object":
                if (item._def.value === null) {
                  return [...acc, "null"];
                }
              default:
                return acc;
            }
          }, []);
          if (e.length === o.length) {
            let t = e.filter((e, t, r) => r.indexOf(e) === t);
            return {
              type: t.length > 1 ? t : t[0],
              enum: o.reduce((acc, item) => {
                if (acc.includes(item._def.value)) {
                  return acc;
                }
                return [...acc, item._def.value];
              }, []),
            };
          }
        } else if (o.every((e) => e._def.typeName === "ZodEnum")) {
          return {
            type: "string",
            enum: o.reduce(
              (acc, item) => [
                ...acc,
                ...item._def.values.filter((t) => !acc.includes(t)),
              ],
              [],
            ),
          };
        }
        return C(e, r);
      case l.kY.ZodIntersection:
        let n;
        let d;
        let allOf;
        n = [
          O(e.left._def, {
            ...r,
            currentPath: [...r.currentPath, "allOf", "0"],
          }),
          O(e.right._def, {
            ...r,
            currentPath: [...r.currentPath, "allOf", "1"],
          }),
        ].filter((e) => !!e);
        d =
          r.target === "jsonSchema2019-09"
            ? {
                unevaluatedProperties: false,
              }
            : undefined;
        allOf = [];
        n.forEach((e) => {
          if ((!("type" in e) || e.type !== "string") && "allOf" in e) {
            allOf.push(...e.allOf);
            if (e.unevaluatedProperties === undefined) {
              d = undefined;
            }
          } else {
            let t = e;
            if (
              "additionalProperties" in e &&
              e.additionalProperties === false
            ) {
              let { additionalProperties, ...rest } = e;
              t = rest;
            } else {
              d = undefined;
            }
            allOf.push(t);
          }
        });
        if (allOf.length) {
          return {
            allOf,
            ...d,
          };
        }
        return undefined;
      case l.kY.ZodTuple:
        if (e.rest) {
          return {
            type: "array",
            minItems: e.items.length,
            items: e.items
              .map((e, t) =>
                O(e._def, {
                  ...r,
                  currentPath: [...r.currentPath, "items", `${t}`],
                }),
              )
              .reduce((acc, item) => {
                if (item === undefined) {
                  return acc;
                }
                return [...acc, item];
              }, []),
            additionalItems: O(e.rest._def, {
              ...r,
              currentPath: [...r.currentPath, "additionalItems"],
            }),
          };
        }
        return {
          type: "array",
          minItems: e.items.length,
          maxItems: e.items.length,
          items: e.items
            .map((e, t) =>
              O(e._def, {
                ...r,
                currentPath: [...r.currentPath, "items", `${t}`],
              }),
            )
            .reduce((acc, item) => {
              if (item === undefined) {
                return acc;
              }
              return [...acc, item];
            }, []),
        };
      case l.kY.ZodRecord:
        return R(e, r);
      case l.kY.ZodLiteral:
        let m;
        if (
          (m = typeof e.value) != "bigint" &&
          m !== "number" &&
          m !== "boolean" &&
          m !== "string"
        ) {
          return {
            type: Array.isArray(e.value) ? "array" : "object",
          };
        }
        if (r.target === "openApi3") {
          return {
            type: m === "bigint" ? "integer" : m,
            enum: [e.value],
          };
        }
        return {
          type: m === "bigint" ? "integer" : m,
          const: e.value,
        };
      case l.kY.ZodEnum:
        return {
          type: "string",
          enum: Array.from(e.values),
        };
      case l.kY.ZodNativeEnum:
        let g;
        let y;
        let v;
        g = e.values;
        return {
          type:
            (v = Array.from(
              new Set(
                (y = Object.keys(e.values)
                  .filter((e) => typeof g[g[e]] !== "number")
                  .map((e) => g[e])).map((e) => typeof e),
              ),
            )).length === 1
              ? v[0] === "string"
                ? "string"
                : "number"
              : ["string", "number"],
          enum: y,
        };
      case l.kY.ZodNullable:
        if (
          [
            "ZodString",
            "ZodNumber",
            "ZodBigInt",
            "ZodBoolean",
            "ZodNull",
          ].includes(e.innerType._def.typeName) &&
          (!e.innerType._def.checks || !e.innerType._def.checks.length)
        ) {
          if (r.target === "openApi3") {
            return {
              type: N[e.innerType._def.typeName],
              nullable: true,
            };
          }
          return {
            type: [N[e.innerType._def.typeName], "null"],
          };
        }
        if (r.target === "openApi3") {
          let t = O(e.innerType._def, {
            ...r,
            currentPath: [...r.currentPath],
          });
          if (t && "$ref" in t) {
            return {
              allOf: [t],
              nullable: true,
            };
          }
          return (
            t && {
              ...t,
              nullable: true,
            }
          );
        }
        let _ = O(e.innerType._def, {
          ...r,
          currentPath: [...r.currentPath, "anyOf", "0"],
        });
        return (
          _ && {
            anyOf: [
              _,
              {
                type: "null",
              },
            ],
          }
        );
      case l.kY.ZodOptional:
        if (r.currentPath.toString() === r.propertyPath?.toString()) {
          return O(e.innerType._def, r);
        }
        let $ = O(e.innerType._def, {
          ...r,
          currentPath: [...r.currentPath, "anyOf", "1"],
        });
        if ($) {
          return {
            anyOf: [
              {
                not: c(r),
              },
              $,
            ],
          };
        }
        return c(r);
      case l.kY.ZodMap:
        if (r.mapStrategy === "record") {
          return R(e, r);
        }
        return {
          type: "array",
          maxItems: 125,
          items: {
            type: "array",
            items: [
              O(e.keyType._def, {
                ...r,
                currentPath: [...r.currentPath, "items", "items", "0"],
              }) || c(r),
              O(e.valueType._def, {
                ...r,
                currentPath: [...r.currentPath, "items", "items", "1"],
              }) || c(r),
            ],
            minItems: 2,
            maxItems: 2,
          },
        };
      case l.kY.ZodSet:
        let w;
        w = {
          type: "array",
          uniqueItems: true,
          items: O(e.valueType._def, {
            ...r,
            currentPath: [...r.currentPath, "items"],
          }),
        };
        if (e.minSize) {
          f(w, "minItems", e.minSize.value, e.minSize.message, r);
        }
        if (e.maxSize) {
          f(w, "maxItems", e.maxSize.value, e.maxSize.message, r);
        }
        return w;
      case l.kY.ZodLazy:
        return () => e.getter()._def;
      case l.kY.ZodPromise:
        return O(e.type._def, r);
      case l.kY.ZodNaN:
      case l.kY.ZodNever:
        if (r.target === "openAi") {
          return undefined;
        }
        return {
          not: c({
            ...r,
            currentPath: [...r.currentPath, "not"],
          }),
        };
      case l.kY.ZodEffects:
        if (r.effectStrategy === "input") {
          return O(e.schema._def, r);
        }
        return c(r);
      case l.kY.ZodAny:
      case l.kY.ZodUnknown:
        return c(r);
      case l.kY.ZodDefault:
        return {
          ...O(e.innerType._def, r),
          default: e.defaultValue(),
        };
      case l.kY.ZodBranded:
        return p(e, r);
      case l.kY.ZodReadonly:
      case l.kY.ZodCatch:
        return O(e.innerType._def, r);
      case l.kY.ZodPipeline:
        if (r.pipeStrategy === "input") {
          return O(e.in._def, r);
        }
        if (r.pipeStrategy === "output") {
          return O(e.out._def, r);
        }
        let b = O(e.in._def, {
          ...r,
          currentPath: [...r.currentPath, "allOf", "0"],
        });
        let k = O(e.out._def, {
          ...r,
          currentPath: [...r.currentPath, "allOf", b ? "1" : "0"],
        });
        return {
          allOf: [b, k].filter((e) => e !== undefined),
        };
      case l.kY.ZodFunction:
      case l.kY.ZodVoid:
      case l.kY.ZodSymbol:
      default:
        return;
    }
  })(def, def.typeName, t);
  let n = typeof i === "function" ? O(i(), t) : i;
  if (n) {
    A(def, t, n);
  }
  if (t.postProcess) {
    let r = t.postProcess(n, def, t);
    s.jsonSchema = n;
    return r;
  }
  s.jsonSchema = n;
  return n;
}
let q = (e, t) => {
  switch (t.$refStrategy) {
    case "root":
      return {
        $ref: e.path.join("/"),
      };
    case "relative":
      return {
        $ref: d(t.currentPath, e.path),
      };
    case "none":
    case "seen":
      if (
        e.path.length < t.currentPath.length &&
        e.path.every((e, r) => t.currentPath[r] === e)
      ) {
        console.warn(
          `Recursive reference detected at ${t.currentPath.join("/")}! Defaulting to any`,
        );
        return c(t);
      }
      if (t.$refStrategy === "seen") {
        return c(t);
      }
      return undefined;
  }
};
let A = (def, t, r) => {
  if (def.description) {
    r.description = def.description;
    if (t.markdownDescription) {
      r.markdownDescription = def.description;
    }
  }
  return r;
};
export function Dk(e, t) {
  if (KW(e)) {
    let r;
    return s.b(e, {
      target:
        (r = t?.target) &&
        r !== "jsonSchema7" &&
        r !== "draft-7" &&
        (r === "jsonSchema2019-09" || r === "draft-2020-12")
          ? "draft-2020-12"
          : "draft-7",
      io: t?.pipeStrategy ?? "input",
    });
  }
  return ((e, t) => {
    let r;
    let currentPath;
    currentPath =
      (r =
        typeof t === "string"
          ? {
              ...n,
              name: t,
            }
          : {
              ...n,
              ...t,
            }).name !== undefined
        ? [...r.basePath, r.definitionPath, r.name]
        : r.basePath;
    let s = {
      ...r,
      flags: {
        hasReferencedOpenAiAnyType: false,
      },
      currentPath,
      propertyPath: undefined,
      seen: new Map(
        Object.entries(r.definitions).map(([e, t]) => [
          t._def,
          {
            def: t._def,
            path: [...r.basePath, r.definitionPath, e],
            jsonSchema: undefined,
          },
        ]),
      ),
    };
    let i =
      typeof t === "object" && t.definitions
        ? Object.entries(t.definitions).reduce(
            (acc, [t, r]) => ({
              ...acc,
              [t]:
                O(
                  r._def,
                  {
                    ...s,
                    currentPath: [...s.basePath, s.definitionPath, t],
                  },
                  true,
                ) ?? c(s),
            }),
            {},
          )
        : undefined;
    let o =
      typeof t === "string"
        ? t
        : t?.nameStrategy === "title"
          ? undefined
          : t?.name;
    let l =
      O(
        e._def,
        o === undefined
          ? s
          : {
              ...s,
              currentPath: [...s.basePath, s.definitionPath, o],
            },
        false,
      ) ?? c(s);
    let d =
      typeof t === "object" &&
      t.name !== undefined &&
      t.nameStrategy === "title"
        ? t.name
        : undefined;
    if (d !== undefined) {
      l.title = d;
    }
    if (s.flags.hasReferencedOpenAiAnyType) {
      if (!i) {
        i = {};
      }
      if (!i[s.openAiAnyTypeName]) {
        i[s.openAiAnyTypeName] = {
          type: ["string", "number", "integer", "boolean", "array", "null"],
          items: {
            $ref:
              s.$refStrategy === "relative"
                ? "1"
                : [...s.basePath, s.definitionPath, s.openAiAnyTypeName].join(
                    "/",
                  ),
          },
        };
      }
    }
    let u =
      o === undefined
        ? i
          ? {
              ...l,
              [s.definitionPath]: i,
            }
          : l
        : {
            $ref: [
              ...(s.$refStrategy === "relative" ? [] : s.basePath),
              s.definitionPath,
              o,
            ].join("/"),
            [s.definitionPath]: {
              ...i,
              [o]: l,
            },
          };
    if (s.target === "jsonSchema7") {
      u.$schema = "http://json-schema.org/draft-07/schema#";
    } else if (s.target === "jsonSchema2019-09" || s.target === "openAi") {
      u.$schema = "https://json-schema.org/draft/2019-09/schema#";
    }
    if (
      s.target === "openAi" &&
      ("anyOf" in u ||
        "oneOf" in u ||
        "allOf" in u ||
        ("type" in u && Array.isArray(u.type)))
    ) {
      console.warn(
        "Warning: OpenAI may not support schemas with unions as roots! Try wrapping it in an object property.",
      );
    }
    return u;
  })(e, {
    strictUnions: t?.strictUnions ?? true,
    pipeStrategy: t?.pipeStrategy ?? "input",
  });
}
export function v$(e) {
  let t = BW(e);
  let r = t?.method;
  if (!r) {
    throw Error("Schema is missing a method literal");
  }
  let a = Lm(r);
  if (typeof a !== "string") {
    throw Error("Schema method literal must be a string");
  }
  return a;
}
export function EQ(e, t) {
  let r = xL(e, t);
  if (!r.success) {
    throw r.error;
  }
  return r.data;
}
