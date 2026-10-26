import "./module-eI2.js";
import { ValueScope } from "./module-uEg.js";
import a from "./module-ZKU.js";
import s from "./module-yC_2.js";
import { getRules } from "./module-Qmb.js";
import { SchemaEnv, compileSchema, resolveSchema } from "./module-VKO.js";
import { getSchemaRefs, normalizeId } from "./module-BKK.js";
import { getJSONTypes } from "./module-CPo.js";
import { eachItem } from "./module-c5o.js";
import u from "./module-aT_4.js";
import f from "./module-Bsl.js";
let p = (e, t) => new RegExp(e, t);
p.code = "new RegExp";
let h = ["removeAdditional", "useDefaults", "coerceTypes"];
let prefixes = new Set([
  "validate",
  "serialize",
  "parse",
  "wrapper",
  "root",
  "schema",
  "keyword",
  "pattern",
  "formats",
  "validate$data",
  "func",
  "obj",
  "Error",
]);
let g = {
  errorDataPath: "",
  format: "`validateFormats: false` can be used instead.",
  nullable: '"nullable" keyword is supported by default.',
  jsonPointers: "Deprecated jsPropertySyntax can be used instead.",
  extendRefs: "Deprecated ignoreKeywordsWithRef can be used instead.",
  missingRefs:
    "Pass empty schema with $id that should be ignored to ajv.addSchema.",
  processCode:
    "Use option `code: {process: (code, schemaEnv: object) => string}`",
  sourceCode: "Use option `code: {source: true}`",
  strictDefaults: "It is default now, see option `strict`.",
  strictKeywords: "It is default now, see option `strict`.",
  uniqueItems: '"uniqueItems" keyword is always validated.',
  unknownFormats:
    "Disable strict mode or pass `true` to `ajv.addFormat` (or `formats` option).",
  cache: "Map is used as cache, schema object as key.",
  serialize: "Map is used as cache, schema object as key.",
  ajvErrors: "It is default now.",
};
let y = {
  ignoreKeywordsWithRef: "",
  jsPropertySyntax: "",
  unicode: '"minLength"/"maxLength" account for unicode characters by default.',
};
class v {
  constructor(e = {}) {
    var t;
    var r;
    var a;
    var s;
    var o;
    var l;
    var d;
    var c;
    var u;
    var h;
    var v;
    var $;
    var T;
    var P;
    var I;
    var x;
    var j;
    var R;
    var N;
    var C;
    var O;
    var q;
    var A;
    var z;
    var M;
    var L;
    let Y;
    let H;
    let optimize;
    let regExp;
    let uriResolver;
    this.schemas = {};
    this.refs = {};
    this.formats = Object.create(null);
    this._compilations = new Set();
    this._loading = {};
    this._cache = new Map();
    e = this.opts = {
      ...e,
      ...((Y = (t = e).strict),
      (optimize =
        (H = (r = t.code) == null ? undefined : r.optimize) === true ||
        H === undefined
          ? 1
          : H || 0),
      (regExp =
        (s = (a = t.code) == null ? undefined : a.regExp) != null ? s : p),
      (uriResolver = (o = t.uriResolver) != null ? o : f),
      {
        strictSchema: (d = (l = t.strictSchema) != null ? l : Y) == null || d,
        strictNumbers: (u = (c = t.strictNumbers) != null ? c : Y) == null || u,
        strictTypes:
          (v = (h = t.strictTypes) != null ? h : Y) != null ? v : "log",
        strictTuples:
          (T = ($ = t.strictTuples) != null ? $ : Y) != null ? T : "log",
        strictRequired:
          (I = (P = t.strictRequired) != null ? P : Y) != null && I,
        code: t.code
          ? {
              ...t.code,
              optimize,
              regExp,
            }
          : {
              optimize,
              regExp,
            },
        loopRequired: (x = t.loopRequired) != null ? x : 200,
        loopEnum: (j = t.loopEnum) != null ? j : 200,
        meta: (R = t.meta) == null || R,
        messages: (N = t.messages) == null || N,
        inlineRefs: (C = t.inlineRefs) == null || C,
        schemaId: (O = t.schemaId) != null ? O : "$id",
        addUsedSchema: (q = t.addUsedSchema) == null || q,
        validateSchema: (A = t.validateSchema) == null || A,
        validateFormats: (z = t.validateFormats) == null || z,
        unicodeRegExp: (M = t.unicodeRegExp) == null || M,
        int32range: (L = t.int32range) == null || L,
        uriResolver,
      }),
    };
    let { es5, lines } = this.opts.code;
    this.scope = new ValueScope({
      scope: {},
      prefixes,
      es5,
      lines,
    });
    this.logger = ((e) => {
      if (e === false) {
        return S;
      }
      if (e === undefined) {
        return console;
      }
      if (e.log && e.warn && e.error) {
        return e;
      }
      throw Error("logger must implement log, warn and error methods");
    })(e.logger);
    let Z = e.validateFormats;
    e.validateFormats = false;
    this.RULES = getRules();
    _.call(this, g, e, "NOT SUPPORTED");
    _.call(this, y, e, "DEPRECATED", "warn");
    this._metaOpts = E.call(this);
    if (e.formats) {
      b.call(this);
    }
    this._addVocabularies();
    this._addDefaultMetaSchema();
    if (e.keywords) {
      k.call(this, e.keywords);
    }
    if (typeof e.meta === "object") {
      this.addMetaSchema(e.meta);
    }
    w.call(this);
    e.validateFormats = Z;
  }
  _addVocabularies() {
    this.addKeyword("$async");
  }
  _addDefaultMetaSchema() {
    let { $data, meta, schemaId } = this.opts;
    let a = u;
    if (schemaId === "id") {
      a = {
        ...u,
      };
      a.id = a.$id;
      delete a.$id;
    }
    if (meta && $data) {
      this.addMetaSchema(a, a[schemaId], false);
    }
  }
  defaultMeta() {
    let { meta, schemaId } = this.opts;
    return (this.opts.defaultMeta =
      typeof meta === "object" ? meta[schemaId] || meta : undefined);
  }
  validate(e, t) {
    let r;
    if (typeof e === "string") {
      if (!(r = this.getSchema(e))) {
        throw Error(`no schema with key or ref "${e}"`);
      }
    } else {
      r = this.compile(e);
    }
    let a = r(t);
    if (!("$async" in r)) {
      this.errors = r.errors;
    }
    return a;
  }
  compile(e, t) {
    let r = this._addSchema(e, t);
    return r.validate || this._compileSchemaEnv(r);
  }
  compileAsync(e, t) {
    if (typeof this.opts.loadSchema !== "function") {
      throw Error("options.loadSchema should be a function");
    }
    let { loadSchema } = this.opts;
    return a.call(this, e, t);
    async function a(e, t) {
      await i.call(this, e.$schema);
      let r = this._addSchema(e, t);
      return r.validate || o.call(this, r);
    }
    async function i(e) {
      if (e && !this.getSchema(e)) {
        await a.call(
          this,
          {
            $ref: e,
          },
          true,
        );
      }
    }
    async function o(e) {
      try {
        return this._compileSchemaEnv(e);
      } catch (error) {
        if (!(error instanceof s)) {
          throw error;
        }
        n.call(this, error);
        await l.call(this, error.missingSchema);
        return o.call(this, e);
      }
    }
    function n({ missingSchema, missingRef }) {
      if (this.refs[missingSchema]) {
        throw Error(
          `AnySchema ${missingSchema} is loaded but ${missingRef} cannot be resolved`,
        );
      }
    }
    async function l(e) {
      let r = await d.call(this, e);
      if (!this.refs[e]) {
        await i.call(this, r.$schema);
      }
      if (!this.refs[e]) {
        this.addSchema(r, e, t);
      }
    }
    async function d(e) {
      let t = this._loading[e];
      if (t) {
        return t;
      }
      try {
        return await (this._loading[e] = loadSchema(e));
      } finally {
        delete this._loading[e];
      }
    }
  }
  addSchema(e, t, r, a = this.opts.validateSchema) {
    let s;
    if (Array.isArray(e)) {
      for (let t of e) {
        this.addSchema(t, undefined, r, a);
      }
      return this;
    }
    if (typeof e === "object") {
      let { schemaId } = this.opts;
      if ((s = e[schemaId]) !== undefined && typeof s !== "string") {
        throw Error(`schema ${schemaId} must be string`);
      }
    }
    t = normalizeId(t || s);
    this._checkUnique(t);
    this.schemas[t] = this._addSchema(e, r, t, a, true);
    return this;
  }
  addMetaSchema(e, t, r = this.opts.validateSchema) {
    this.addSchema(e, t, true, r);
    return this;
  }
  validateSchema(e, t) {
    let r;
    if (typeof e === "boolean") {
      return true;
    }
    if ((r = e.$schema) !== undefined && typeof r !== "string") {
      throw Error("$schema must be a string");
    }
    if (!(r = r || this.opts.defaultMeta || this.defaultMeta())) {
      this.logger.warn("meta-schema not available");
      this.errors = null;
      return true;
    }
    let a = this.validate(r, e);
    if (!a && t) {
      let e = "schema is invalid: " + this.errorsText();
      if (this.opts.validateSchema === "log") {
        this.logger.error(e);
      } else {
        throw Error(e);
      }
    }
    return a;
  }
  getSchema(e) {
    let t;
    while (typeof (t = $.call(this, e)) === "string") {
      e = t;
    }
    if (t === undefined) {
      let { schemaId } = this.opts;
      let a = new SchemaEnv({
        schema: {},
        schemaId,
      });
      if (!(t = resolveSchema.call(this, a, e))) {
        return;
      }
      this.refs[e] = t;
    }
    return t.validate || this._compileSchemaEnv(t);
  }
  removeSchema(e) {
    if (e instanceof RegExp) {
      this._removeAllSchemas(this.schemas, e);
      this._removeAllSchemas(this.refs, e);
      return this;
    }
    switch (typeof e) {
      case "undefined":
        this._removeAllSchemas(this.schemas);
        this._removeAllSchemas(this.refs);
        this._cache.clear();
        return this;
      case "string": {
        let t = $.call(this, e);
        if (typeof t === "object") {
          this._cache.delete(t.schema);
        }
        delete this.schemas[e];
        delete this.refs[e];
        return this;
      }
      case "object": {
        this._cache.delete(e);
        let t = e[this.opts.schemaId];
        if (t) {
          t = normalizeId(t);
          delete this.schemas[t];
          delete this.refs[t];
        }
        return this;
      }
      default:
        throw Error("ajv.removeSchema: invalid parameter");
    }
  }
  addVocabulary(e) {
    for (let t of e) {
      this.addKeyword(t);
    }
    return this;
  }
  addKeyword(e, t) {
    let r;
    if (typeof e === "string") {
      r = e;
      if (typeof t === "object") {
        this.logger.warn(
          "these parameters are deprecated, see docs for addKeyword",
        );
        t.keyword = r;
      }
    } else if (typeof e === "object" && t === undefined) {
      if (Array.isArray((r = (t = e).keyword)) && !r.length) {
        throw Error("addKeywords: keyword must be string or non-empty array");
      }
    } else {
      throw Error("invalid addKeywords parameters");
    }
    P.call(this, r, t);
    if (!t) {
      eachItem(r, (e) => I.call(this, e));
      return this;
    }
    j.call(this, t);
    let a = {
      ...t,
      type: getJSONTypes(t.type),
      schemaType: getJSONTypes(t.schemaType),
    };
    eachItem(
      r,
      a.type.length === 0
        ? (e) => I.call(this, e, a)
        : (e) => a.type.forEach((t) => I.call(this, e, a, t)),
    );
    return this;
  }
  getKeyword(e) {
    let t = this.RULES.all[e];
    if (typeof t === "object") {
      return t.definition;
    }
    return !!t;
  }
  removeKeyword(e) {
    let { RULES } = this;
    for (let r of (delete RULES.keywords[e],
    delete RULES.all[e],
    RULES.rules)) {
      let t = r.rules.findIndex((t) => t.keyword === e);
      if (t >= 0) {
        r.rules.splice(t, 1);
      }
    }
    return this;
  }
  addFormat(e, t) {
    if (typeof t === "string") {
      t = new RegExp(t);
    }
    this.formats[e] = t;
    return this;
  }
  errorsText(e = this.errors, { separator = ", ", dataVar = "data" } = {}) {
    if (e && e.length !== 0) {
      return e
        .map((e) => `${dataVar}${e.instancePath} ${e.message}`)
        .reduce((acc, item) => acc + separator + item);
    }
    return "No errors";
  }
  $dataMetaSchema(e, t) {
    let all = this.RULES.all;
    for (let a of ((e = JSON.parse(JSON.stringify(e))), t)) {
      let t = a.split("/").slice(1);
      let s = e;
      for (let e of t) {
        s = s[e];
      }
      for (let e in all) {
        let t = all[e];
        if (typeof t !== "object") {
          continue;
        }
        let { $data } = t.definition;
        let i = s[e];
        if ($data && i) {
          s[e] = N(i);
        }
      }
    }
    return e;
  }
  _removeAllSchemas(e, t) {
    for (let r in e) {
      let a = e[r];
      if (!t || t.test(r)) {
        if (typeof a === "string") {
          delete e[r];
        } else if (a && !a.meta) {
          this._cache.delete(a.schema);
          delete e[r];
        }
      }
    }
  }
  _addSchema(
    schema,
    meta,
    baseId,
    a = this.opts.validateSchema,
    s = this.opts.addUsedSchema,
  ) {
    let i;
    let { schemaId } = this.opts;
    if (typeof schema === "object") {
      i = schema[schemaId];
    } else if (this.opts.jtd) {
      throw Error("schema must be object");
    } else if (typeof schema !== "boolean") {
      throw Error("schema must be object or boolean");
    }
    let d = this._cache.get(schema);
    if (d !== undefined) {
      return d;
    }
    baseId = normalizeId(i || baseId);
    let localRefs = getSchemaRefs.call(this, schema, baseId);
    d = new SchemaEnv({
      schema,
      schemaId,
      meta,
      baseId,
      localRefs,
    });
    this._cache.set(d.schema, d);
    if (s && !baseId.startsWith("#")) {
      if (baseId) {
        this._checkUnique(baseId);
      }
      this.refs[baseId] = d;
    }
    if (a) {
      this.validateSchema(schema, true);
    }
    return d;
  }
  _checkUnique(e) {
    if (this.schemas[e] || this.refs[e]) {
      throw Error(`schema with key or id "${e}" already exists`);
    }
  }
  _compileSchemaEnv(e) {
    if (e.meta) {
      this._compileMetaSchema(e);
    } else {
      compileSchema.call(this, e);
    }
    if (!e.validate) {
      throw Error("ajv implementation error");
    }
    return e.validate;
  }
  _compileMetaSchema(e) {
    let opts = this.opts;
    this.opts = this._metaOpts;
    try {
      compileSchema.call(this, e);
    } finally {
      this.opts = opts;
    }
  }
}
function _(e, t, r, a = "error") {
  for (let s in e) {
    if (s in t) {
      this.logger[a](`${r}: option ${s}. ${e[s]}`);
    }
  }
}
function $(e) {
  e = normalizeId(e);
  return this.schemas[e] || this.refs[e];
}
function w() {
  let schemas = this.opts.schemas;
  if (schemas) {
    if (Array.isArray(schemas)) {
      this.addSchema(schemas);
    } else {
      for (let t in schemas) {
        this.addSchema(schemas[t], t);
      }
    }
  }
}
function b() {
  for (let e in this.opts.formats) {
    let t = this.opts.formats[e];
    if (t) {
      this.addFormat(e, t);
    }
  }
}
function k(e) {
  if (Array.isArray(e)) {
    return void this.addVocabulary(e);
  }
  for (let t in (this.logger.warn(
    "keywords option as map is deprecated, pass array",
  ),
  e)) {
    let r = e[t];
    if (!r.keyword) {
      r.keyword = t;
    }
    this.addKeyword(r);
  }
}
function E() {
  let e = {
    ...this.opts,
  };
  for (let t of h) {
    delete e[t];
  }
  return e;
}
v.ValidationError = a;
v.MissingRefError = s;
export default v;
let S = {
  log() {},
  warn() {},
  error() {},
};
let T = /^[a-z_$][a-z0-9_$:-]*$/i;
function P(e, t) {
  let { RULES } = this;
  eachItem(e, (e) => {
    if (RULES.keywords[e]) {
      throw Error(`Keyword ${e} is already defined`);
    }
    if (!T.test(e)) {
      throw Error(`Keyword ${e} has invalid name`);
    }
  });
  if (t && t.$data && !("code" in t || "validate" in t)) {
    throw Error('$data keyword must have "code" or "validate" function');
  }
}
function I(keyword, t, r) {
  let a;
  let s = t == null ? undefined : t.post;
  if (r && s) {
    throw Error('keyword with "post" flag cannot have "type"');
  }
  let { RULES } = this;
  let o = s ? RULES.post : RULES.rules.find(({ type }) => type === r);
  if (!o) {
    o = {
      type: r,
      rules: [],
    };
    RULES.rules.push(o);
  }
  RULES.keywords[keyword] = true;
  if (!t) {
    return;
  }
  let n = {
    keyword,
    definition: {
      ...t,
      type: getJSONTypes(t.type),
      schemaType: getJSONTypes(t.schemaType),
    },
  };
  if (t.before) {
    x.call(this, o, n, t.before);
  } else {
    o.rules.push(n);
  }
  RULES.all[keyword] = n;
  if ((a = t.implements) != null) {
    a.forEach((e) => this.addKeyword(e));
  }
}
function x(e, t, r) {
  let a = e.rules.findIndex((e) => e.keyword === r);
  if (a >= 0) {
    e.rules.splice(a, 0, t);
  } else {
    e.rules.push(t);
    this.logger.warn(`rule ${r} is not defined`);
  }
}
function j(e) {
  let { metaSchema } = e;
  if (metaSchema !== undefined) {
    if (e.$data && this.opts.$data) {
      metaSchema = N(metaSchema);
    }
    e.validateSchema = this.compile(metaSchema, true);
  }
}
let R = {
  $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#",
};
function N(e) {
  return {
    anyOf: [e, R],
  };
}
