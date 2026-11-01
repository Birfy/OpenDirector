import { fd, rs } from "./module-Ggi.js";
import { w5 } from "./module-s2v.js";
class o {
  constructor(e) {
    this.counter = 0;
    this.metadataRegistry = e?.metadata ?? fd;
    this.target = e?.target ?? "draft-2020-12";
    this.unrepresentable = e?.unrepresentable ?? "throw";
    this.override = e?.override ?? (() => {});
    this.io = e?.io ?? "output";
    this.seen = new Map();
  }
  process(
    e,
    t = {
      path: [],
      schemaPath: [],
    },
  ) {
    let n;
    let def = e._zod.def;
    let o = this.seen.get(e);
    if (o) {
      o.count++;
      if (t.schemaPath.includes(e)) {
        o.cycle = t.path;
      }
      return o.schema;
    }
    let a = {
      schema: {},
      count: 1,
      cycle: undefined,
      path: t.path,
    };
    this.seen.set(e, a);
    let s = e._zod.toJSONSchema?.();
    if (s) {
      a.schema = s;
    } else {
      let n = {
        ...t,
        schemaPath: [...t.schemaPath, e],
        path: t.path,
      };
      let o = e._zod.parent;
      if (o) {
        a.ref = o;
        this.process(o, n);
        this.seen.get(o).isParent = true;
      } else {
        let t = a.schema;
        switch (def.type) {
          case "string": {
            t.type = "string";
            let { minimum, maximum, format, patterns, contentEncoding } =
              e._zod.bag;
            if (typeof minimum === "number") {
              t.minLength = minimum;
            }
            if (typeof maximum === "number") {
              t.maxLength = maximum;
            }
            if (format) {
              t.format =
                {
                  guid: "uuid",
                  url: "uri",
                  datetime: "date-time",
                  json_string: "json-string",
                  regex: "",
                }[format] ?? format;
              if (t.format === "") {
                delete t.format;
              }
            }
            if (contentEncoding) {
              t.contentEncoding = contentEncoding;
            }
            if (patterns && patterns.size > 0) {
              let e = [...patterns];
              if (e.length === 1) {
                t.pattern = e[0].source;
              } else if (e.length > 1) {
                a.schema.allOf = [
                  ...e.map((e) => ({
                    ...(this.target === "draft-7"
                      ? {
                          type: "string",
                        }
                      : {}),
                    pattern: e.source,
                  })),
                ];
              }
            }
            break;
          }
          case "number": {
            let {
              minimum,
              maximum,
              format,
              multipleOf,
              exclusiveMaximum,
              exclusiveMinimum,
            } = e._zod.bag;
            if (typeof format === "string" && format.includes("int")) {
              t.type = "integer";
            } else {
              t.type = "number";
            }
            if (typeof exclusiveMinimum === "number") {
              t.exclusiveMinimum = exclusiveMinimum;
            }
            if (typeof minimum === "number") {
              t.minimum = minimum;
              if (typeof exclusiveMinimum === "number") {
                if (exclusiveMinimum >= minimum) {
                  delete t.minimum;
                } else {
                  delete t.exclusiveMinimum;
                }
              }
            }
            if (typeof exclusiveMaximum === "number") {
              t.exclusiveMaximum = exclusiveMaximum;
            }
            if (typeof maximum === "number") {
              t.maximum = maximum;
              if (typeof exclusiveMaximum === "number") {
                if (exclusiveMaximum <= maximum) {
                  delete t.maximum;
                } else {
                  delete t.exclusiveMaximum;
                }
              }
            }
            if (typeof multipleOf === "number") {
              t.multipleOf = multipleOf;
            }
            break;
          }
          case "boolean":
          case "success":
            t.type = "boolean";
            break;
          case "bigint":
            if (this.unrepresentable === "throw") {
              throw Error("BigInt cannot be represented in JSON Schema");
            }
            break;
          case "symbol":
            if (this.unrepresentable === "throw") {
              throw Error("Symbols cannot be represented in JSON Schema");
            }
            break;
          case "null":
            t.type = "null";
            break;
          case "any":
          case "unknown":
            break;
          case "undefined":
            if (this.unrepresentable === "throw") {
              throw Error("Undefined cannot be represented in JSON Schema");
            }
            break;
          case "void":
            if (this.unrepresentable === "throw") {
              throw Error("Void cannot be represented in JSON Schema");
            }
            break;
          case "never":
            t.not = {};
            break;
          case "date":
            if (this.unrepresentable === "throw") {
              throw Error("Date cannot be represented in JSON Schema");
            }
            break;
          case "array": {
            let { minimum, maximum } = e._zod.bag;
            if (typeof minimum === "number") {
              t.minItems = minimum;
            }
            if (typeof maximum === "number") {
              t.maxItems = maximum;
            }
            t.type = "array";
            t.items = this.process(def.element, {
              ...n,
              path: [...n.path, "items"],
            });
            break;
          }
          case "object": {
            t.type = "object";
            t.properties = {};
            let e = def.shape;
            for (let r in e) {
              t.properties[r] = this.process(e[r], {
                ...n,
                path: [...n.path, "properties", r],
              });
            }
            let i = new Set(
              [...new Set(Object.keys(e))].filter((e) => {
                let _zod = def.shape[e]._zod;
                if (this.io === "input") {
                  return _zod.optin === undefined;
                }
                return _zod.optout === undefined;
              }),
            );
            if (i.size > 0) {
              t.required = Array.from(i);
            }
            if (def.catchall?._zod.def.type === "never") {
              t.additionalProperties = false;
            } else if (def.catchall) {
              if (def.catchall) {
                t.additionalProperties = this.process(def.catchall, {
                  ...n,
                  path: [...n.path, "additionalProperties"],
                });
              }
            } else if (this.io === "output") {
              t.additionalProperties = false;
            }
            break;
          }
          case "union":
            t.anyOf = def.options.map((e, t) =>
              this.process(e, {
                ...n,
                path: [...n.path, "anyOf", t],
              }),
            );
            break;
          case "intersection": {
            let e = this.process(def.left, {
              ...n,
              path: [...n.path, "allOf", 0],
            });
            let i = this.process(def.right, {
              ...n,
              path: [...n.path, "allOf", 1],
            });
            let o = (e) => "allOf" in e && Object.keys(e).length === 1;
            t.allOf = [...(o(e) ? e.allOf : [e]), ...(o(i) ? i.allOf : [i])];
            break;
          }
          case "tuple": {
            t.type = "array";
            let i = def.items.map((e, t) =>
              this.process(e, {
                ...n,
                path: [...n.path, "prefixItems", t],
              }),
            );
            if (this.target === "draft-2020-12") {
              t.prefixItems = i;
            } else {
              t.items = i;
            }
            if (def.rest) {
              let e = this.process(def.rest, {
                ...n,
                path: [...n.path, "items"],
              });
              if (this.target === "draft-2020-12") {
                t.items = e;
              } else {
                t.additionalItems = e;
              }
            }
            if (def.rest) {
              t.items = this.process(def.rest, {
                ...n,
                path: [...n.path, "items"],
              });
            }
            let { minimum, maximum } = e._zod.bag;
            if (typeof minimum === "number") {
              t.minItems = minimum;
            }
            if (typeof maximum === "number") {
              t.maxItems = maximum;
            }
            break;
          }
          case "record":
            t.type = "object";
            t.propertyNames = this.process(def.keyType, {
              ...n,
              path: [...n.path, "propertyNames"],
            });
            t.additionalProperties = this.process(def.valueType, {
              ...n,
              path: [...n.path, "additionalProperties"],
            });
            break;
          case "map":
            if (this.unrepresentable === "throw") {
              throw Error("Map cannot be represented in JSON Schema");
            }
            break;
          case "set":
            if (this.unrepresentable === "throw") {
              throw Error("Set cannot be represented in JSON Schema");
            }
            break;
          case "enum": {
            let e = w5(def.entries);
            if (e.every((e) => typeof e === "number")) {
              t.type = "number";
            }
            if (e.every((e) => typeof e === "string")) {
              t.type = "string";
            }
            t.enum = e;
            break;
          }
          case "literal": {
            let e = [];
            for (let t of def.values) {
              if (t === undefined) {
                if (this.unrepresentable === "throw") {
                  throw Error(
                    "Literal `undefined` cannot be represented in JSON Schema",
                  );
                }
              } else if (typeof t === "bigint") {
                if (this.unrepresentable === "throw") {
                  throw Error(
                    "BigInt literals cannot be represented in JSON Schema",
                  );
                } else {
                  e.push(Number(t));
                }
              } else {
                e.push(t);
              }
            }
            if (e.length === 0);
            else if (e.length === 1) {
              let n = e[0];
              t.type = n === null ? "null" : typeof n;
              t.const = n;
            } else {
              if (e.every((e) => typeof e === "number")) {
                t.type = "number";
              }
              if (e.every((e) => typeof e === "string")) {
                t.type = "string";
              }
              if (e.every((e) => typeof e === "boolean")) {
                t.type = "string";
              }
              if (e.every((e) => e === null)) {
                t.type = "null";
              }
              t.enum = e;
            }
            break;
          }
          case "file": {
            let n = {
              type: "string",
              format: "binary",
              contentEncoding: "binary",
            };
            let { minimum, maximum, mime } = e._zod.bag;
            if (minimum !== undefined) {
              n.minLength = minimum;
            }
            if (maximum !== undefined) {
              n.maxLength = maximum;
            }
            if (mime) {
              if (mime.length === 1) {
                n.contentMediaType = mime[0];
                Object.assign(t, n);
              } else {
                t.anyOf = mime.map((contentMediaType) => ({
                  ...n,
                  contentMediaType,
                }));
              }
            } else {
              Object.assign(t, n);
            }
            break;
          }
          case "transform":
            if (this.unrepresentable === "throw") {
              throw Error("Transforms cannot be represented in JSON Schema");
            }
            break;
          case "nullable":
            t.anyOf = [
              this.process(def.innerType, n),
              {
                type: "null",
              },
            ];
            break;
          case "nonoptional":
          case "promise":
          case "optional":
            this.process(def.innerType, n);
            a.ref = def.innerType;
            break;
          case "default":
            this.process(def.innerType, n);
            a.ref = def.innerType;
            t.default = JSON.parse(JSON.stringify(def.defaultValue));
            break;
          case "prefault":
            this.process(def.innerType, n);
            a.ref = def.innerType;
            if (this.io === "input") {
              t._prefault = JSON.parse(JSON.stringify(def.defaultValue));
            }
            break;
          case "catch": {
            let e;
            this.process(def.innerType, n);
            a.ref = def.innerType;
            try {
              e = def.catchValue(undefined);
            } catch {
              throw Error(
                "Dynamic catch values are not supported in JSON Schema",
              );
            }
            t.default = e;
            break;
          }
          case "nan":
            if (this.unrepresentable === "throw") {
              throw Error("NaN cannot be represented in JSON Schema");
            }
            break;
          case "template_literal": {
            let n = e._zod.pattern;
            if (!n) {
              throw Error("Pattern not found in template literal");
            }
            t.type = "string";
            t.pattern = n.source;
            break;
          }
          case "pipe": {
            let e =
              this.io === "input"
                ? def.in._zod.def.type === "transform"
                  ? def.out
                  : def.in
                : def.out;
            this.process(e, n);
            a.ref = e;
            break;
          }
          case "readonly":
            this.process(def.innerType, n);
            a.ref = def.innerType;
            t.readOnly = true;
            break;
          case "lazy": {
            let t = e._zod.innerType;
            this.process(t, n);
            a.ref = t;
            break;
          }
          case "custom":
            if (this.unrepresentable === "throw") {
              throw Error("Custom types cannot be represented in JSON Schema");
            }
        }
      }
    }
    let u = this.metadataRegistry.get(e);
    if (u) {
      Object.assign(a.schema, u);
    }
    if (
      this.io === "input" &&
      (function e(t, n) {
        let r = n ?? {
          seen: new Set(),
        };
        if (r.seen.has(t)) {
          return false;
        }
        r.seen.add(t);
        let def = t._zod.def;
        switch (def.type) {
          case "string":
          case "number":
          case "bigint":
          case "boolean":
          case "date":
          case "symbol":
          case "undefined":
          case "null":
          case "any":
          case "unknown":
          case "never":
          case "void":
          case "literal":
          case "enum":
          case "nan":
          case "file":
          case "template_literal":
          case "custom":
          case "success":
          case "catch":
            return false;
          case "array":
            return e(def.element, r);
          case "object":
            for (let t in def.shape) {
              if (e(def.shape[t], r)) {
                return true;
              }
            }
            return false;
          case "union":
            for (let t of def.options) {
              if (e(t, r)) {
                return true;
              }
            }
            return false;
          case "intersection":
            return e(def.left, r) || e(def.right, r);
          case "tuple":
            for (let t of def.items) {
              if (e(t, r)) {
                return true;
              }
            }
            if (def.rest && e(def.rest, r)) {
              return true;
            }
            return false;
          case "record":
          case "map":
            return e(def.keyType, r) || e(def.valueType, r);
          case "set":
            return e(def.valueType, r);
          case "promise":
          case "optional":
          case "nonoptional":
          case "nullable":
          case "readonly":
          case "default":
          case "prefault":
            return e(def.innerType, r);
          case "lazy":
            return e(def.getter(), r);
          case "transform":
            return true;
          case "pipe":
            return e(def.in, r) || e(def.out, r);
        }
        throw Error(`Unknown schema type: ${def.type}`);
      })(e)
    ) {
      delete a.schema.examples;
      delete a.schema.default;
    }
    this.io === "input" &&
      a.schema._prefault &&
      ((n = a.schema).default ?? (n.default = a.schema._prefault));
    delete a.schema._prefault;
    return this.seen.get(e).schema;
  }
  emit(e, t) {
    let n = {
      cycles: t?.cycles ?? "ref",
      reused: t?.reused ?? "inline",
      external: t?.external ?? undefined,
    };
    let r = this.seen.get(e);
    if (!r) {
      throw Error("Unprocessed schema. This is a bug in Zod.");
    }
    let i = (e) => {
      let t = this.target === "draft-2020-12" ? "$defs" : "definitions";
      if (n.external) {
        let r = n.external.registry.get(e[0])?.id;
        let i = n.external.uri ?? ((e) => e);
        if (r) {
          return {
            ref: i(r),
          };
        }
        let o = e[1].defId ?? e[1].schema.id ?? `schema${this.counter++}`;
        e[1].defId = o;
        return {
          defId: o,
          ref: `${i("__shared")}#/${t}/${o}`,
        };
      }
      if (e[1] === r) {
        return {
          ref: "#",
        };
      }
      let i = `#/${t}/`;
      let o = e[1].schema.id ?? `__schema${this.counter++}`;
      return {
        defId: o,
        ref: i + o,
      };
    };
    let o = (e) => {
      if (e[1].schema.$ref) {
        return;
      }
      let t = e[1];
      let { ref, defId } = i(e);
      t.def = {
        ...t.schema,
      };
      if (defId) {
        t.defId = defId;
      }
      let t_schema = t.schema;
      for (let e in t_schema) {
        delete t_schema[e];
      }
      t_schema.$ref = ref;
    };
    if (n.cycles === "throw") {
      for (let e of this.seen.entries()) {
        let t = e[1];
        if (t.cycle) {
          throw Error(`Cycle detected: #/${t.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
        }
      }
    }
    for (let t of this.seen.entries()) {
      let r = t[1];
      if (e === t[0]) {
        o(t);
        continue;
      }
      if (n.external) {
        let r = n.external.registry.get(t[0])?.id;
        if (e !== t[0] && r) {
          o(t);
          continue;
        }
      }
      if (
        this.metadataRegistry.get(t[0])?.id ||
        r.cycle ||
        (r.count > 1 && n.reused === "ref")
      ) {
        o(t);
        continue;
      }
    }
    let a = (zodSchema, t) => {
      let n = this.seen.get(zodSchema);
      let jsonSchema = n.def ?? n.schema;
      let i = {
        ...jsonSchema,
      };
      if (n.ref === null) {
        return;
      }
      let n_ref = n.ref;
      n.ref = null;
      if (n_ref) {
        a(n_ref, t);
        let e = this.seen.get(n_ref).schema;
        if (e.$ref && t.target === "draft-7") {
          jsonSchema.allOf = jsonSchema.allOf ?? [];
          jsonSchema.allOf.push(e);
        } else {
          Object.assign(jsonSchema, e);
          Object.assign(jsonSchema, i);
        }
      }
      if (!n.isParent) {
        this.override({
          zodSchema,
          jsonSchema,
          path: n.path ?? [],
        });
      }
    };
    for (let e of [...this.seen.entries()].reverse()) {
      a(e[0], {
        target: this.target,
      });
    }
    let s = {};
    if (this.target === "draft-2020-12") {
      s.$schema = "https://json-schema.org/draft/2020-12/schema";
    } else if (this.target === "draft-7") {
      s.$schema = "http://json-schema.org/draft-07/schema#";
    } else {
      console.warn(`Invalid target: ${this.target}`);
    }
    if (n.external?.uri) {
      let t = n.external.registry.get(e)?.id;
      if (!t) {
        throw Error("Schema is missing an `id` property");
      }
      s.$id = n.external.uri(t);
    }
    Object.assign(s, r.def);
    let u = n.external?.defs ?? {};
    for (let e of this.seen.entries()) {
      let t = e[1];
      if (t.def && t.defId) {
        u[t.defId] = t.def;
      }
    }
    if (!n.external) {
      if (Object.keys(u).length > 0) {
        if (this.target === "draft-2020-12") {
          s.$defs = u;
        } else {
          s.definitions = u;
        }
      }
    }
    try {
      return JSON.parse(JSON.stringify(s));
    } catch (e) {
      throw Error("Error converting schema to JSON.");
    }
  }
}
export function b(registry, t) {
  if (registry instanceof rs) {
    let n = new o(t);
    let defs = {};
    for (let t of registry._idmap.entries()) {
      let [e, r] = t;
      n.process(r);
    }
    let schemas = {};
    let external = {
      registry,
      uri: t?.uri,
      defs,
    };
    for (let r of registry._idmap.entries()) {
      let [e, o] = r;
      schemas[e] = n.emit(o, {
        ...t,
        external,
      });
    }
    if (Object.keys(defs).length > 0) {
      schemas.__shared = {
        [n.target === "draft-2020-12" ? "$defs" : "definitions"]: defs,
      };
    }
    return {
      schemas,
    };
  }
  let n = new o(t);
  n.process(registry);
  return n.emit(registry, t);
}
