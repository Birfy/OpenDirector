import { Name, _, str, strConcat } from "./module-uEg.js";
import { Type, getErrorPath } from "./module-c5o.js";
import i from "./module-drl.js";
function o(gen, t) {
  let r = gen.const("err", t);
  gen.if(
    (0, _)`${i.vErrors} === null`,
    () => gen.assign(i.vErrors, (0, _)`[${r}]`),
    (0, _)`${i.vErrors}.push(${r})`,
  );
  gen.code((0, _)`${i.errors}++`);
}
function n(e, t) {
  let { gen, validateName, schemaEnv } = e;
  if (schemaEnv.$async) {
    gen.throw((0, _)`new ${e.ValidationError}(${t})`);
  } else {
    gen.assign((0, _)`${validateName}.errors`, t);
    gen.return(false);
  }
}
export var y = {
  message: ({ keyword }) => (0, str)`must pass "${keyword}" keyword validation`,
};
export const keyword$DataError = {
  message: ({ keyword, schemaType }) => {
    if (schemaType) {
      return (0, str)`"${keyword}" keyword must be ${schemaType} ($data)`;
    }
    return (0, str)`"${keyword}" keyword is invalid ($data)`;
  },
};
export const reportError = function (e, r = y, s, i) {
  let { it } = e;
  let { gen, compositeRule, allErrors } = it;
  let p = d(e, r, s);
  if (i != null ? i : compositeRule || allErrors) {
    o(gen, p);
  } else {
    n(it, (0, _)`[${p}]`);
  }
};
export const reportExtraError = function (e, r = y, a) {
  let { it } = e;
  let { gen, compositeRule, allErrors } = it;
  o(gen, d(e, r, a));
  if (!(compositeRule || allErrors)) {
    n(it, i.vErrors);
  }
};
export const resetErrorsCount = function (e, t) {
  e.assign(i.errors, t);
  e.if((0, _)`${i.vErrors} !== null`, () =>
    e.if(
      t,
      () => e.assign((0, _)`${i.vErrors}.length`, t),
      () => e.assign(i.vErrors, null),
    ),
  );
};
export const extendErrors = function ({
  gen,
  keyword,
  schemaValue,
  data,
  errsCount,
  it,
}) {
  if (errsCount === undefined) {
    throw Error("ajv implementation error");
  }
  let l = gen.name("err");
  gen.forRange("i", errsCount, i.errors, (o) => {
    gen.const(l, (0, _)`${i.vErrors}[${o}]`);
    gen.if((0, _)`${l}.instancePath === undefined`, () =>
      gen.assign(
        (0, _)`${l}.instancePath`,
        strConcat(i.instancePath, it.errorPath),
      ),
    );
    gen.assign(
      (0, _)`${l}.schemaPath`,
      (0, str)`${it.errSchemaPath}/${keyword}`,
    );
    if (it.opts.verbose) {
      gen.assign((0, _)`${l}.schema`, schemaValue);
      gen.assign((0, _)`${l}.data`, data);
    }
  });
};
let l = {
  keyword: new Name("keyword"),
  schemaPath: new Name("schemaPath"),
  params: new Name("params"),
  propertyName: new Name("propertyName"),
  message: new Name("message"),
  schema: new Name("schema"),
  parentSchema: new Name("parentSchema"),
};
function d(e, t, r) {
  let { createErrors } = e.it;
  if (createErrors === false) {
    return (0, _)`{}`;
  }
  return ((e, t, r = {}) => {
    let { gen, it } = e;
    let d = [
      (({ errorPath }, { instancePath }) => {
        let r = instancePath
          ? (0, str)`${errorPath}${getErrorPath(instancePath, Type.Str)}`
          : errorPath;
        return [i.instancePath, strConcat(i.instancePath, r)];
      })(it, r),
      (({ keyword, it: { errSchemaPath } }, { schemaPath, parentSchema }) => {
        let o = parentSchema
          ? errSchemaPath
          : (0, str)`${errSchemaPath}/${keyword}`;
        if (schemaPath) {
          o = (0, str)`${o}${getErrorPath(schemaPath, Type.Str)}`;
        }
        return [l.schemaPath, o];
      })(e, r),
    ];
    ((e, { params, message }, s) => {
      let { keyword, data, schemaValue, it } = e;
      let { opts, propertyName, topSchemaRef, schemaPath } = it;
      s.push(
        [l.keyword, keyword],
        [
          l.params,
          typeof params === "function" ? params(e) : params || (0, _)`{}`,
        ],
      );
      if (opts.messages) {
        s.push([
          l.message,
          typeof message === "function" ? message(e) : message,
        ]);
      }
      if (opts.verbose) {
        s.push(
          [l.schema, schemaValue],
          [l.parentSchema, (0, _)`${topSchemaRef}${schemaPath}`],
          [i.data, data],
        );
      }
      if (propertyName) {
        s.push([l.propertyName, propertyName]);
      }
    })(e, t, d);
    return gen.object(...d);
  })(e, t, r);
}
