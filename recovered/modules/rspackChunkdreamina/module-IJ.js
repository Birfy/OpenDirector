import { _, nil, not, stringify } from "./module-uEg.js";
import s from "./module-drl.js";
import { callValidateCode } from "./module-gcE.js";
import { extendErrors } from "./module-erD.js";
function n(e) {
  let { gen, data, it } = e;
  gen.if(it.parentData, () =>
    gen.assign(data, (0, _)`${it.parentData}[${it.parentDataProperty}]`),
  );
}
function l(gen, keyword, ref) {
  if (ref === undefined) {
    throw Error(`keyword "${keyword}" failed to compile`);
  }
  return gen.scopeValue(
    "keyword",
    typeof ref === "function"
      ? {
          ref,
        }
      : {
          ref,
          code: stringify(ref),
        },
  );
}
export const macroKeywordCode = function (e, t) {
  let { gen, keyword, schema, parentSchema, it } = e;
  let schema_1 = t.macro.call(it.self, schema, parentSchema, it);
  let topSchemaRef = l(gen, keyword, schema_1);
  if (it.opts.validateSchema !== false) {
    it.self.validateSchema(schema_1, true);
  }
  let u = gen.name("valid");
  e.subschema(
    {
      schema: schema_1,
      schemaPath: nil,
      errSchemaPath: `${it.errSchemaPath}/${keyword}`,
      topSchemaRef,
      compositeRule: true,
    },
    u,
  );
  e.pass(u, () => e.error(true));
};
export const funcKeywordCode = function (e, t) {
  let r;
  let { gen, keyword, schema, parentSchema, $data, it } = e;
  (({ schemaEnv }, t) => {
    if (t.async && !schemaEnv.$async) {
      throw Error("async keyword in sync schema");
    }
  })(it, t);
  let m = l(
    gen,
    keyword,
    !$data && t.compile
      ? t.compile.call(it.self, schema, parentSchema, it)
      : t.validate,
  );
  let g = gen.let("valid");
  function y(r = t.async ? (0, _)`await ` : nil) {
    let o = it.opts.passContext ? s.this : s.self;
    let n = !(("compile" in t && !$data) || t.schema === false);
    gen.assign(g, (0, _)`${r}${callValidateCode(e, m, o, n)}`, t.modifying);
  }
  function v(e) {
    let r;
    gen.if(not((r = t.valid) != null ? r : g), e);
  }
  e.block$data(g, function () {
    if (t.errors === false) {
      y();
      if (t.modifying) {
        n(e);
      }
      v(() => e.error());
    } else {
      let r;
      let i;
      let l = t.async
        ? ((r = gen.let("ruleErrs", null)),
          gen.try(
            () => y((0, _)`await `),
            (e) =>
              gen.assign(g, false).if(
                (0, _)`${e} instanceof ${it.ValidationError}`,
                () => gen.assign(r, (0, _)`${e}.errors`),
                () => gen.throw(e),
              ),
          ),
          r)
        : ((i = (0, _)`${m}.errors`), gen.assign(i, null), y(nil), i);
      if (t.modifying) {
        n(e);
      }
      v(() =>
        ((e, t) => {
          let { gen } = e;
          gen.if(
            (0, _)`Array.isArray(${t})`,
            () => {
              gen
                .assign(
                  s.vErrors,
                  (0,
                  _)`${s.vErrors} === null ? ${t} : ${s.vErrors}.concat(${t})`,
                )
                .assign(s.errors, (0, _)`${s.vErrors}.length`);
              extendErrors(e);
            },
            () => e.error(),
          );
        })(e, l),
      );
    }
  });
  e.ok((r = t.valid) != null ? r : g);
};
export const validSchemaType = function (e, t, r = false) {
  return (
    !t.length ||
    t.some((t) => {
      switch (t) {
        case "array":
          return Array.isArray(e);
        case "object":
          return e && typeof e === "object" && !Array.isArray(e);
        default:
          return typeof e == t || (r && e === undefined);
      }
    })
  );
};
export const validateKeywordUsage = function (
  { schema, opts, self, errSchemaPath },
  s,
  i,
) {
  if (Array.isArray(s.keyword) ? !s.keyword.includes(i) : s.keyword !== i) {
    throw Error("ajv implementation error");
  }
  let s_dependencies = s.dependencies;
  if (
    s_dependencies == null
      ? undefined
      : s_dependencies.some(
          (t) => !Object.prototype.hasOwnProperty.call(schema, t),
        )
  ) {
    throw Error(
      `parent schema must have dependencies of ${i}: ${s_dependencies.join(",")}`,
    );
  }
  if (s.validateSchema && !s.validateSchema(schema[i])) {
    let e =
      `keyword "${i}" value is invalid at path "${errSchemaPath}": ` +
      self.errorsText(s.validateSchema.errors);
    if (opts.validateSchema === "log") {
      self.logger.error(e);
    } else {
      throw Error(e);
    }
  }
};
