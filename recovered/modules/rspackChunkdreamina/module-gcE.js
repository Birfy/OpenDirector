import { _, and, getProperty, nil, not, or, strConcat } from "./module-uEg.js";
import { Type, alwaysValidSchema, useFunc } from "./module-c5o.js";
import i from "./module-drl.js";
export const checkReportMissingProp = function (e, t) {
  let { gen, data, it } = e;
  gen.if(noPropertyInData(gen, data, t, it.opts.ownProperties), () => {
    e.setParams(
      {
        missingProperty: (0, _)`${t}`,
      },
      true,
    );
    e.error();
  });
};
export const checkMissingProp = function ({ gen, data, it: { opts } }, s, i) {
  return or(
    ...s.map((s) =>
      and(
        noPropertyInData(gen, data, s, opts.ownProperties),
        (0, _)`${i} = ${s}`,
      ),
    ),
  );
};
export function isOwnProperty(e, t, r) {
  return (0, _)`${e.scopeValue("func", {
    ref: Object.prototype.hasOwnProperty,
    code: (0, _)`Object.prototype.hasOwnProperty`,
  })}.call(${t}, ${r})`;
}
export function noPropertyInData(e, t, r, s) {
  let i = (0, _)`${t}${getProperty(r)} === undefined`;
  if (s) {
    return or(i, not(isOwnProperty(e, t, r)));
  }
  return i;
}
export const reportMissingProp = function (e, missingProperty) {
  e.setParams(
    {
      missingProperty,
    },
    true,
  );
  e.error();
};
export const propertyInData = function (e, t, r, s) {
  let i = (0, _)`${t}${getProperty(r)} !== undefined`;
  if (s) {
    return (0, _)`${i} && ${isOwnProperty(e, t, r)}`;
  }
  return i;
};
export const allSchemaProperties = function (e) {
  if (e) {
    return Object.keys(e).filter((e) => e !== "__proto__");
  }
  return [];
};
export const callValidateCode = function (
  { schemaCode, data, it: { gen, topSchemaRef, schemaPath, errorPath }, it },
  d,
  c,
  u,
) {
  let f = u
    ? (0, _)`${schemaCode}, ${data}, ${topSchemaRef}${schemaPath}`
    : data;
  let p = [
    [i.instancePath, strConcat(i.instancePath, errorPath)],
    [i.parentData, it.parentData],
    [i.parentDataProperty, it.parentDataProperty],
    [i.rootData, i.rootData],
  ];
  if (it.opts.dynamicRef) {
    p.push([i.dynamicAnchors, i.dynamicAnchors]);
  }
  let h = (0, _)`${f}, ${gen.object(...p)}`;
  if (c !== nil) {
    return (0, _)`${d}.call(${c}, ${h})`;
  }
  return (0, _)`${d}(${h})`;
};
let d = (0, _)`new RegExp`;
export const usePattern = function ({ gen, it: { opts } }, r) {
  let s = opts.unicodeRegExp ? "u" : "";
  let { regExp } = opts.code;
  let ref = regExp(r, s);
  return gen.scopeValue("pattern", {
    key: ref.toString(),
    ref,
    code: (0,
    _)`${regExp.code === "new RegExp" ? d : useFunc(gen, regExp)}(${r}, ${s})`,
  });
};
export const validateArray = function (e) {
  let { gen, data, keyword, it } = e;
  let n = gen.name("valid");
  if (it.allErrors) {
    let e = gen.let("valid", true);
    l(() => gen.assign(e, false));
    return e;
  }
  gen.var(n, true);
  l(() => gen.break());
  return n;
  function l(o) {
    let l = gen.const("len", (0, _)`${data}.length`);
    gen.forRange("i", 0, l, (dataProp) => {
      e.subschema(
        {
          keyword,
          dataProp,
          dataPropType: Type.Num,
        },
        n,
      );
      gen.if(not(n), o);
    });
  }
};
export const validateUnion = function (e) {
  let { gen, schema, keyword, it } = e;
  if (!Array.isArray(schema)) {
    throw Error("ajv implementation error");
  }
  if (schema.some((e) => alwaysValidSchema(it, e)) && !it.opts.unevaluated) {
    return;
  }
  let n = gen.let("valid", false);
  let l = gen.name("_valid");
  gen.block(() =>
    schema.forEach((r, schemaProp) => {
      let o = e.subschema(
        {
          keyword,
          schemaProp,
          compositeRule: true,
        },
        l,
      );
      gen.assign(n, (0, _)`${n} || ${l}`);
      if (!e.mergeValidEvaluated(o, l)) {
        gen.if(not(n));
      }
    }),
  );
  e.result(
    n,
    () => e.reset(),
    () => e.error(true),
  );
};
