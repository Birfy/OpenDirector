import { CodeGen, Name, _, nil, stringify } from "./module-uEg.js";
import ref from "./module-ZKU.js";
import i from "./module-drl.js";
import {
  _getFullPath,
  getFullPath,
  inlineRef,
  normalizeId,
  resolveUrl,
} from "./module-BKK.js";
import { schemaHasRulesButRef, unescapeFragment } from "./module-c5o.js";
import { validateFunctionCode } from "./module-eI2.js";
export class SchemaEnv {
  constructor(e) {
    var t;
    let r;
    this.refs = {};
    this.dynamicAnchors = {};
    if (typeof e.schema === "object") {
      r = e.schema;
    }
    this.schema = e.schema;
    this.schemaId = e.schemaId;
    this.root = e.root || this;
    this.baseId =
      (t = e.baseId) != null
        ? t
        : normalizeId(r == null ? undefined : r[e.schemaId || "$id"]);
    this.schemaPath = e.schemaPath;
    this.localRefs = e.localRefs;
    this.meta = e.meta;
    this.$async = r == null ? undefined : r.$async;
    this.refs = {};
  }
}
export function compileSchema(schemaEnv) {
  let ValidationError;
  let r;
  let n = f.call(this, schemaEnv);
  if (n) {
    return n;
  }
  let rootId = getFullPath(this.opts.uriResolver, schemaEnv.root.baseId);
  let { es5, lines } = this.opts.code;
  let { ownProperties } = this.opts;
  let gen = new CodeGen(this.scope, {
    es5,
    lines,
    ownProperties,
  });
  if (schemaEnv.$async) {
    ValidationError = gen.scopeValue("Error", {
      ref,
      code: (0, _)`require("ajv/dist/runtime/validation_error").default`,
    });
  }
  let validateName = gen.scopeName("validate");
  schemaEnv.validateName = validateName;
  let g = {
    gen,
    allErrors: this.opts.allErrors,
    data: i.data,
    parentData: i.parentData,
    parentDataProperty: i.parentDataProperty,
    dataNames: [i.data],
    dataPathArr: [nil],
    dataLevel: 0,
    dataTypes: [],
    definedProperties: new Set(),
    topSchemaRef: gen.scopeValue(
      "schema",
      this.opts.code.source === true
        ? {
            ref: schemaEnv.schema,
            code: stringify(schemaEnv.schema),
          }
        : {
            ref: schemaEnv.schema,
          },
    ),
    validateName,
    ValidationError,
    schema: schemaEnv.schema,
    schemaEnv,
    rootId,
    baseId: schemaEnv.baseId || rootId,
    schemaPath: nil,
    errSchemaPath: schemaEnv.schemaPath || (this.opts.jtd ? "" : "#"),
    errorPath: (0, _)`""`,
    opts: this.opts,
    self: this,
  };
  try {
    this._compilations.add(schemaEnv);
    validateFunctionCode(g);
    gen.optimize(this.opts.code.optimize);
    let validateCode = gen.toString();
    r = `${gen.scopeRefs(i.scope)}return ${validateCode}`;
    if (this.opts.code.process) {
      r = this.opts.code.process(r, schemaEnv);
    }
    let s = Function(`${i.self}`, `${i.scope}`, r)(this, this.scope.get());
    this.scope.value(validateName, {
      ref: s,
    });
    s.errors = null;
    s.schema = schemaEnv.schema;
    s.schemaEnv = schemaEnv;
    if (schemaEnv.$async) {
      s.$async = true;
    }
    if (this.opts.code.source === true) {
      s.source = {
        validateName,
        validateCode,
        scopeValues: gen._values,
      };
    }
    if (this.opts.unevaluated) {
      let { props, items } = g;
      s.evaluated = {
        props: props instanceof Name ? undefined : props,
        items: items instanceof Name ? undefined : items,
        dynamicProps: props instanceof Name,
        dynamicItems: items instanceof Name,
      };
      if (s.source) {
        s.source.evaluated = stringify(s.evaluated);
      }
    }
    schemaEnv.validate = s;
    return schemaEnv;
  } catch (error) {
    delete schemaEnv.validate;
    delete schemaEnv.validateName;
    if (r) {
      this.logger.error("Error compiling schema, function code:", r);
    }
    throw error;
  } finally {
    this._compilations.delete(schemaEnv);
  }
}
function u(e) {
  if (inlineRef(e.schema, this.opts.inlineRefs)) {
    return e.schema;
  }
  if (e.validate) {
    return e;
  }
  return compileSchema.call(this, e);
}
function f(e) {
  for (let a of this._compilations) {
    let t;
    let r;
    t = a;
    r = e;
    if (t.schema === r.schema && t.root === r.root && t.baseId === r.baseId) {
      return a;
    }
  }
}
function p(e, t) {
  let r;
  while (typeof (r = this.refs[t]) === "string") {
    t = r;
  }
  return r || this.schemas[t] || resolveSchema.call(this, e, t);
}
export function resolveSchema(e, t) {
  let r = this.opts.uriResolver.parse(t);
  let a = _getFullPath(this.opts.uriResolver, r);
  let s = getFullPath(this.opts.uriResolver, e.baseId, undefined);
  if (Object.keys(e.schema).length > 0 && a === s) {
    return g.call(this, r, e);
  }
  let i = normalizeId(a);
  let n = this.refs[i] || this.schemas[i];
  if (typeof n === "string") {
    let t = resolveSchema.call(this, e, n);
    if (typeof (t == null ? undefined : t.schema) !== "object") {
      return;
    }
    return g.call(this, r, t);
  }
  if (typeof (n == null ? undefined : n.schema) === "object") {
    if (!n.validate) {
      compileSchema.call(this, n);
    }
    if (i === normalizeId(t)) {
      let { schema } = n;
      let { schemaId } = this.opts;
      let a = schema[schemaId];
      if (a) {
        s = resolveUrl(this.opts.uriResolver, s, a);
      }
      return new SchemaEnv({
        schema,
        schemaId,
        root: e,
        baseId: s,
      });
    }
    return g.call(this, r, n);
  }
}
export const resolveRef = function (e, t, r) {
  let a;
  r = resolveUrl(this.opts.uriResolver, t, r);
  let s = e.refs[r];
  if (s) {
    return s;
  }
  let i = p.call(this, e, r);
  if (i === undefined) {
    let schema = (a = e.localRefs) == null ? undefined : a[r];
    let { schemaId } = this.opts;
    if (schema) {
      i = new SchemaEnv({
        schema,
        schemaId,
        root: e,
        baseId: t,
      });
    }
  }
  if (i !== undefined) {
    return (e.refs[r] = u.call(this, i));
  }
};
let m = new Set([
  "properties",
  "patternProperties",
  "enum",
  "dependencies",
  "definitions",
]);
function g(e, { baseId, schema, root }) {
  let s;
  let i;
  if (((s = e.fragment) == null ? undefined : s[0]) !== "/") {
    return;
  }
  for (let a of e.fragment.slice(1).split("/")) {
    if (typeof schema === "boolean") {
      return;
    }
    let e = schema[unescapeFragment(a)];
    if (e === undefined) {
      return;
    }
    let s = typeof (schema = e) === "object" && schema[this.opts.schemaId];
    if (!m.has(a) && s) {
      baseId = resolveUrl(this.opts.uriResolver, baseId, s);
    }
  }
  if (
    typeof schema !== "boolean" &&
    schema.$ref &&
    !schemaHasRulesButRef(schema, this.RULES)
  ) {
    let e = resolveUrl(this.opts.uriResolver, baseId, schema.$ref);
    i = resolveSchema.call(this, root, e);
  }
  let { schemaId } = this.opts;
  if (
    (i =
      i ||
      new SchemaEnv({
        schema,
        schemaId,
        root,
        baseId,
      })).schema !== i.root.schema
  ) {
    return i;
  }
}
