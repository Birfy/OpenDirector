import { boolOrEmptySchema, topBoolOrEmptySchema } from "./module-kca.js";
import {
  coerceAndCheckDataType,
  getSchemaTypes,
  DataType,
  checkDataType,
  checkDataTypes,
  reportTypeError,
} from "./module-CPo.js";
import { shouldUseGroup, shouldUseRule } from "./module-zw_2.js";
import { assignDefaults } from "./module-U8Z.js";
import {
  funcKeywordCode,
  macroKeywordCode,
  validSchemaType,
  validateKeywordUsage,
} from "./module-IJ.js";
import {
  extendSubschemaData,
  extendSubschemaMode,
  getSubschema,
} from "./module-DR3.js";
import {
  Name,
  _ as __1,
  getProperty,
  nil,
  not,
  or,
  str,
} from "./module-uEg.js";
import u from "./module-drl.js";
import { resolveUrl } from "./module-BKK.js";
import {
  checkStrictMode,
  checkUnknownRules,
  mergeEvaluated,
  schemaHasRulesButRef,
  schemaRefOrVal,
  unescapeJsonPointer,
} from "./module-c5o.js";
import {
  keyword$DataError,
  reportError,
  reportExtraError,
  resetErrorsCount,
} from "./module-erD.js";
function m({ gen, validateName, schema, schemaEnv, opts }, i) {
  let o;
  if (opts.code.es5) {
    gen.func(
      validateName,
      (0, __1)`${u.data}, ${u.valCxt}`,
      schemaEnv.$async,
      () => {
        var t;
        var a;
        gen.code((0, __1)`"use strict"; ${g(schema, opts)}`);
        t = gen;
        a = opts;
        t.if(
          u.valCxt,
          () => {
            t.var(u.instancePath, (0, __1)`${u.valCxt}.${u.instancePath}`);
            t.var(u.parentData, (0, __1)`${u.valCxt}.${u.parentData}`);
            t.var(
              u.parentDataProperty,
              (0, __1)`${u.valCxt}.${u.parentDataProperty}`,
            );
            t.var(u.rootData, (0, __1)`${u.valCxt}.${u.rootData}`);
            if (a.dynamicRef) {
              t.var(
                u.dynamicAnchors,
                (0, __1)`${u.valCxt}.${u.dynamicAnchors}`,
              );
            }
          },
          () => {
            t.var(u.instancePath, (0, __1)`""`);
            t.var(u.parentData, (0, __1)`undefined`);
            t.var(u.parentDataProperty, (0, __1)`undefined`);
            t.var(u.rootData, u.data);
            if (a.dynamicRef) {
              t.var(u.dynamicAnchors, (0, __1)`{}`);
            }
          },
        );
        gen.code(i);
      },
    );
  } else {
    gen.func(
      validateName,
      (0,
      __1)`${u.data}, ${((o = opts), (0, __1)`{${u.instancePath}="", ${u.parentData}, ${u.parentDataProperty}, ${u.rootData}=${u.data}${o.dynamicRef ? (0, __1)`, ${u.dynamicAnchors}={}` : nil}}={}`)}`,
      schemaEnv.$async,
      () => gen.code(g(schema, opts)).code(i),
    );
  }
}
function g(schema, opts) {
  let r = typeof schema === "object" && schema[opts.schemaId];
  if (r && (opts.code.source || opts.code.process)) {
    return (0, __1)`/*# sourceURL=${r} */`;
  }
  return nil;
}
function y({ schema, self }) {
  if (typeof schema === "boolean") {
    return !schema;
  }
  for (let r in schema) {
    if (self.RULES.all[r]) {
      return true;
    }
  }
  return false;
}
function v(e) {
  return typeof e.schema !== "boolean";
}
function _(e) {
  checkUnknownRules(e);
  ((e) => {
    let { schema, errSchemaPath, opts, self } = e;
    if (
      schema.$ref &&
      opts.ignoreKeywordsWithRef &&
      schemaHasRulesButRef(schema, self.RULES)
    ) {
      self.logger.warn(
        `$ref: keywords ignored in schema at path "${errSchemaPath}"`,
      );
    }
  })(e);
}
function $(e, t) {
  if (e.opts.jtd) {
    return b(e, [], false, t);
  }
  let r = getSchemaTypes(e.schema);
  let a = coerceAndCheckDataType(e, r);
  b(e, r, !a, t);
}
function w({ gen, schemaEnv, schema, errSchemaPath, opts }) {
  let schema_$comment = schema.$comment;
  if (opts.$comment === true) {
    gen.code((0, __1)`${u.self}.logger.log(${schema_$comment})`);
  } else if (typeof opts.$comment === "function") {
    let r = (0, str)`${errSchemaPath}/$comment`;
    let s = gen.scopeValue("root", {
      ref: schemaEnv.root,
    });
    gen.code(
      (0, __1)`${u.self}.opts.$comment(${schema_$comment}, ${r}, ${s}.schema)`,
    );
  }
}
function b(e, t, r, a) {
  let s;
  let n;
  let l;
  let d;
  let { gen, schema, data, allErrors, opts, self } = e;
  let { RULES } = self;
  if (
    schema.$ref &&
    (opts.ignoreKeywordsWithRef || !schemaHasRulesButRef(schema, RULES))
  ) {
    return void gen.block(() => P(e, "$ref", RULES.all.$ref.definition));
  }
  function $(s) {
    if (shouldUseGroup(schema, s)) {
      if (s.type) {
        gen.if(checkDataType(s.type, data, opts.strictNumbers));
        k(e, s);
        if (t.length === 1 && t[0] === s.type && r) {
          gen.else();
          reportTypeError(e);
        }
        gen.endIf();
      } else {
        k(e, s);
      }
      if (!allErrors) {
        gen.if((0, __1)`${u.errors} === ${a || 0}`);
      }
    }
  }
  if (!opts.jtd) {
    s = e;
    n = t;
    if (!s.schemaEnv.meta && s.opts.strictTypes) {
      ((e, t) => {
        if (t.length) {
          if (!e.dataTypes.length) {
            e.dataTypes = t;
            return;
          }
          t.forEach((t) => {
            if (!E(e.dataTypes, t)) {
              S(
                e,
                `type "${t}" not allowed by context "${e.dataTypes.join(",")}"`,
              );
            }
          });
          ((e, t) => {
            let r = [];
            for (let a of e.dataTypes) {
              if (E(t, a)) {
                r.push(a);
              } else if (t.includes("integer") && a === "number") {
                r.push("integer");
              }
            }
            e.dataTypes = r;
          })(e, t);
        }
      })(s, n);
      if (!s.opts.allowUnionTypes) {
        l = s;
        if ((d = n).length > 1 && !(d.length === 2 && d.includes("null"))) {
          S(l, "use allowUnionTypes to allow union type keyword");
        }
      }
      ((e, t) => {
        let all = e.self.RULES.all;
        for (let a in all) {
          let s = all[a];
          if (typeof s === "object" && shouldUseRule(e.schema, s)) {
            let { type } = s.definition;
            if (
              type.length &&
              !type.some((e) => {
                var r;
                var a;
                r = t;
                a = e;
                return (
                  r.includes(a) || (a === "number" && r.includes("integer"))
                );
              })
            ) {
              S(e, `missing type "${type.join(",")}" for keyword "${a}"`);
            }
          }
        }
      })(s, s.dataTypes);
    }
  }
  gen.block(() => {
    for (let e of RULES.rules) {
      $(e);
    }
    $(RULES.post);
  });
}
function k(e, t) {
  let {
    gen,
    schema,
    opts: { useDefaults },
  } = e;
  if (useDefaults) {
    assignDefaults(e, t.type);
  }
  gen.block(() => {
    for (let r of t.rules) {
      if (shouldUseRule(schema, r)) {
        P(e, r.keyword, r.definition, t.type);
      }
    }
  });
}
function E(e, t) {
  return e.includes(t) || (t === "integer" && e.includes("number"));
}
function S(e, t) {
  let r = e.schemaEnv.baseId + e.errSchemaPath;
  t += ` at "${r}" (strictTypes)`;
  checkStrictMode(e, t, e.opts.strictTypes);
}
export const validateFunctionCode = function (e) {
  if (v(e) && (_(e), y(e))) {
    ((e) => {
      let { schema, opts, gen } = e;
      m(e, () => {
        if (opts.$comment && schema.$comment) {
          w(e);
        }
        ((e) => {
          let { schema, opts } = e;
          if (
            schema.default !== undefined &&
            opts.useDefaults &&
            opts.strictSchema
          ) {
            checkStrictMode(e, "default is ignored in the schema root");
          }
        })(e);
        gen.let(u.vErrors, null);
        gen.let(u.errors, 0);
        if (opts.unevaluated) {
          ((e) => {
            let { gen, validateName } = e;
            e.evaluated = gen.const(
              "evaluated",
              (0, __1)`${validateName}.evaluated`,
            );
            gen.if((0, __1)`${e.evaluated}.dynamicProps`, () =>
              gen.assign((0, __1)`${e.evaluated}.props`, (0, __1)`undefined`),
            );
            gen.if((0, __1)`${e.evaluated}.dynamicItems`, () =>
              gen.assign((0, __1)`${e.evaluated}.items`, (0, __1)`undefined`),
            );
          })(e);
        }
        $(e);
        ((e) => {
          let { gen, schemaEnv, validateName, ValidationError, opts } = e;
          if (schemaEnv.$async) {
            gen.if(
              (0, __1)`${u.errors} === 0`,
              () => gen.return(u.data),
              () => gen.throw((0, __1)`new ${ValidationError}(${u.vErrors})`),
            );
          } else {
            gen.assign((0, __1)`${validateName}.errors`, u.vErrors);
            if (opts.unevaluated) {
              (({ gen, evaluated, props, items }) => {
                if (props instanceof Name) {
                  gen.assign((0, __1)`${evaluated}.props`, props);
                }
                if (items instanceof Name) {
                  gen.assign((0, __1)`${evaluated}.items`, items);
                }
              })(e);
            }
            gen.return((0, __1)`${u.errors} === 0`);
          }
        })(e);
      });
    })(e);
  } else {
    m(e, () => topBoolOrEmptySchema(e));
  }
};
export class KeywordCxt {
  constructor(e, t, r) {
    validateKeywordUsage(e, t, r);
    this.gen = e.gen;
    this.allErrors = e.allErrors;
    this.keyword = r;
    this.data = e.data;
    this.schema = e.schema[r];
    this.$data = t.$data && e.opts.$data && this.schema && this.schema.$data;
    this.schemaValue = schemaRefOrVal(e, this.schema, r, this.$data);
    this.schemaType = t.schemaType;
    this.parentSchema = e.schema;
    this.params = {};
    this.it = e;
    this.def = t;
    if (this.$data) {
      this.schemaCode = e.gen.const("vSchema", getData(this.$data, e));
    } else {
      this.schemaCode = this.schemaValue;
      if (!validSchemaType(this.schema, t.schemaType, t.allowUndefined)) {
        throw Error(`${r} value must be ${JSON.stringify(t.schemaType)}`);
      }
    }
    if ("code" in t ? t.trackErrors : t.errors !== false) {
      this.errsCount = e.gen.const("_errs", u.errors);
    }
  }
  result(e, t, r) {
    this.failResult(not(e), t, r);
  }
  failResult(e, t, r) {
    this.gen.if(e);
    if (r) {
      r();
    } else {
      this.error();
    }
    if (t) {
      this.gen.else();
      t();
      if (this.allErrors) {
        this.gen.endIf();
      }
    } else if (this.allErrors) {
      this.gen.endIf();
    } else {
      this.gen.else();
    }
  }
  pass(e, t) {
    this.failResult(not(e), undefined, t);
  }
  fail(e) {
    if (e === undefined) {
      this.error();
      if (!this.allErrors) {
        this.gen.if(false);
      }
      return;
    }
    this.gen.if(e);
    this.error();
    if (this.allErrors) {
      this.gen.endIf();
    } else {
      this.gen.else();
    }
  }
  fail$data(e) {
    if (!this.$data) {
      return this.fail(e);
    }
    let { schemaCode } = this;
    this.fail(
      (0, __1)`${schemaCode} !== undefined && (${or(this.invalid$data(), e)})`,
    );
  }
  error(e, t, r) {
    if (t) {
      this.setParams(t);
      this._error(e, r);
      this.setParams({});
      return;
    }
    this._error(e, r);
  }
  _error(e, t) {
    (e ? reportExtraError : reportError)(this, this.def.error, t);
  }
  $dataError() {
    reportError(this, this.def.$dataError || keyword$DataError);
  }
  reset() {
    if (this.errsCount === undefined) {
      throw Error('add "trackErrors" to keyword definition');
    }
    resetErrorsCount(this.gen, this.errsCount);
  }
  ok(e) {
    if (!this.allErrors) {
      this.gen.if(e);
    }
  }
  setParams(e, t) {
    if (t) {
      Object.assign(this.params, e);
    } else {
      this.params = e;
    }
  }
  block$data(e, t, r = nil) {
    this.gen.block(() => {
      this.check$data(e, r);
      t();
    });
  }
  check$data(e = nil, t = nil) {
    if (!this.$data) {
      return;
    }
    let { gen, schemaCode, schemaType, def } = this;
    gen.if(or((0, __1)`${schemaCode} === undefined`, t));
    if (e !== nil) {
      gen.assign(e, true);
    }
    if (schemaType.length || def.validateSchema) {
      gen.elseIf(this.invalid$data());
      this.$dataError();
      if (e !== nil) {
        gen.assign(e, false);
      }
    }
    gen.else();
  }
  invalid$data() {
    let { gen, schemaCode, schemaType, def, it } = this;
    return or(
      (() => {
        if (schemaType.length) {
          if (!(schemaCode instanceof Name)) {
            throw Error("ajv implementation error");
          }
          let e = Array.isArray(schemaType) ? schemaType : [schemaType];
          return (0,
          __1)`${checkDataTypes(e, schemaCode, it.opts.strictNumbers, DataType.Wrong)}`;
        }
        return nil;
      })(),
      (() => {
        if (def.validateSchema) {
          let r = gen.scopeValue("validate$data", {
            ref: def.validateSchema,
          });
          return (0, __1)`!${r}(${schemaCode})`;
        }
        return nil;
      })(),
    );
  }
  subschema(e, t) {
    let r = getSubschema(this.it, e);
    extendSubschemaData(r, this.it, e);
    extendSubschemaMode(r, e);
    let s = {
      ...this.it,
      ...r,
      items: undefined,
      props: undefined,
    };
    ((e, t) => {
      if (v(e) && (_(e), y(e))) {
        return ((e, t) => {
          let r;
          let a;
          let { schema, gen, opts } = e;
          if (opts.$comment && schema.$comment) {
            w(e);
          }
          if ((a = (r = e).schema[r.opts.schemaId])) {
            r.baseId = resolveUrl(r.opts.uriResolver, r.baseId, a);
          }
          ((e) => {
            if (e.schema.$async && !e.schemaEnv.$async) {
              throw Error("async schema in sync schema");
            }
          })(e);
          let n = gen.const("_errs", u.errors);
          $(e, n);
          gen.var(t, (0, __1)`${n} === ${u.errors}`);
        })(e, t);
      }
      boolOrEmptySchema(e, t);
    })(s, t);
    return s;
  }
  mergeEvaluated(e, t) {
    let { it, gen } = this;
    if (it.opts.unevaluated) {
      if (it.props !== true && e.props !== undefined) {
        it.props = mergeEvaluated.props(gen, e.props, it.props, t);
      }
      if (it.items !== true && e.items !== undefined) {
        it.items = mergeEvaluated.items(gen, e.items, it.items, t);
      }
    }
  }
  mergeValidEvaluated(e, t) {
    let { it, gen } = this;
    if (it.opts.unevaluated && (it.props !== true || it.items !== true)) {
      gen.if(t, () => this.mergeEvaluated(e, Name));
      return true;
    }
  }
}
function P(e, t, definition, a) {
  let s = new KeywordCxt(e, definition, t);
  if ("code" in definition) {
    definition.code(s, a);
  } else if (s.$data && definition.validate) {
    funcKeywordCode(s, definition);
  } else if ("macro" in definition) {
    macroKeywordCode(s, definition);
  } else if (definition.compile || definition.validate) {
    funcKeywordCode(s, definition);
  }
}
let I = /^\/(?:[^~]|~0|~1)*$/;
let x = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
export function getData(e, { dataLevel, dataNames, dataPathArr }) {
  let s;
  let i;
  if (e === "") {
    return u.rootData;
  }
  if (e[0] === "/") {
    if (!I.test(e)) {
      throw Error(`Invalid JSON-pointer: ${e}`);
    }
    s = e;
    i = u.rootData;
  } else {
    let o = x.exec(e);
    if (!o) {
      throw Error(`Invalid JSON-pointer: ${e}`);
    }
    let l = +o[1];
    if ((s = o[2]) === "#") {
      if (l >= dataLevel) {
        throw Error(n("property/index", l));
      }
      return dataPathArr[dataLevel - l];
    }
    if (l > dataLevel) {
      throw Error(n("data", l));
    }
    i = dataNames[dataLevel - l];
    if (!s) {
      return i;
    }
  }
  let o = i;
  for (let e of s.split("/")) {
    if (e) {
      i = (0, __1)`${i}${getProperty(unescapeJsonPointer(e))}`;
      o = (0, __1)`${o} && ${i}`;
    }
  }
  return o;
  function n(e, r) {
    return `Cannot access ${e} ${r} levels up, current level is ${dataLevel}`;
  }
}
