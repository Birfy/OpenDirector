import { isJSONType } from "./module-Qmb.js";
import { schemaHasRulesForType } from "./module-zw_2.js";
import { reportError } from "./module-erD.js";
import { _, and, nil, not, operators } from "./module-uEg.js";
import { schemaRefOrVal, toHash } from "./module-c5o.js";
export var DataType;
let s;
export function getJSONTypes(e) {
  let t = Array.isArray(e) ? e : e ? [e] : [];
  if (t.every(isJSONType)) {
    return t;
  }
  throw Error("type must be JSONType or JSONType[]: " + t.join(","));
}
s = DataType || (DataType = {});
s[(s.Correct = 0)] = "Correct";
s[(s.Wrong = 1)] = "Wrong";
export const getSchemaTypes = function (e) {
  let t = getJSONTypes(e.type);
  if (t.includes("null")) {
    if (e.nullable === false) {
      throw Error("type: null contradicts nullable: false");
    }
  } else {
    if (!t.length && e.nullable !== undefined) {
      throw Error('"nullable" cannot be used without "type"');
    }
    if (e.nullable === true) {
      t.push("null");
    }
  }
  return t;
};
export const coerceAndCheckDataType = function (e, t) {
  let r;
  let s;
  let { gen, data, opts } = e;
  r = t;
  let c = (s = opts.coerceTypes)
    ? r.filter((e) => u.has(e) || (s === "array" && e === "array"))
    : [];
  let f =
    t.length > 0 &&
    !(c.length === 0 && t.length === 1 && schemaHasRulesForType(e, t[0]));
  if (f) {
    let r = checkDataTypes(t, data, opts.strictNumbers, DataType.Wrong);
    gen.if(r, () => {
      if (c.length) {
        ((e, t, r) => {
          let { gen, data, opts } = e;
          let o = gen.let("dataType", (0, _)`typeof ${data}`);
          let n = gen.let("coerced", (0, _)`undefined`);
          for (let e of (opts.coerceTypes === "array" &&
            gen.if(
              (0,
              _)`${o} == 'object' && Array.isArray(${data}) && ${data}.length == 1`,
              () =>
                gen
                  .assign(data, (0, _)`${data}[0]`)
                  .assign(o, (0, _)`typeof ${data}`)
                  .if(checkDataTypes(t, data, opts.strictNumbers), () =>
                    gen.assign(n, data),
                  ),
            ),
          gen.if((0, _)`${n} !== undefined`),
          r)) {
            if (u.has(e) || (e === "array" && opts.coerceTypes === "array")) {
              ((e) => {
                switch (e) {
                  case "string":
                    gen
                      .elseIf((0, _)`${o} == "number" || ${o} == "boolean"`)
                      .assign(n, (0, _)`"" + ${data}`)
                      .elseIf((0, _)`${data} === null`)
                      .assign(n, (0, _)`""`);
                    return;
                  case "number":
                    gen
                      .elseIf((0, _)`${o} == "boolean" || ${data} === null
              || (${o} == "string" && ${data} && ${data} == +${data})`)
                      .assign(n, (0, _)`+${data}`);
                    return;
                  case "integer":
                    gen
                      .elseIf((0, _)`${o} === "boolean" || ${data} === null
              || (${o} === "string" && ${data} && ${data} == +${data} && !(${data} % 1))`)
                      .assign(n, (0, _)`+${data}`);
                    return;
                  case "boolean":
                    gen
                      .elseIf(
                        (0,
                        _)`${data} === "false" || ${data} === 0 || ${data} === null`,
                      )
                      .assign(n, false)
                      .elseIf((0, _)`${data} === "true" || ${data} === 1`)
                      .assign(n, true);
                    return;
                  case "null":
                    gen.elseIf(
                      (0,
                      _)`${data} === "" || ${data} === 0 || ${data} === false`,
                    );
                    gen.assign(n, null);
                    return;
                  case "array":
                    gen
                      .elseIf((0, _)`${o} === "string" || ${o} === "number"
              || ${o} === "boolean" || ${data} === null`)
                      .assign(n, (0, _)`[${data}]`);
                }
              })(e);
            }
          }
          gen.else();
          reportTypeError(e);
          gen.endIf();
          gen.if((0, _)`${n} !== undefined`, () => {
            gen.assign(data, n);
            (({ gen, parentData, parentDataProperty }, a) => {
              gen.if((0, _)`${parentData} !== undefined`, () =>
                gen.assign((0, _)`${parentData}[${parentDataProperty}]`, a),
              );
            })(e, n);
          });
        })(e, t, c);
      } else {
        reportTypeError(e);
      }
    });
  }
  return f;
};
let u = new Set(["string", "number", "integer", "boolean", "null"]);
export function checkDataType(e, t, r, s = DataType.Correct) {
  let i;
  let o = s === DataType.Correct ? operators.EQ : operators.NEQ;
  switch (e) {
    case "null":
      return (0, _)`${t} ${o} null`;
    case "array":
      i = (0, _)`Array.isArray(${t})`;
      break;
    case "object":
      i = (0, _)`${t} && typeof ${t} == "object" && !Array.isArray(${t})`;
      break;
    case "integer":
      i = n((0, _)`!(${t} % 1) && !isNaN(${t})`);
      break;
    case "number":
      i = n();
      break;
    default:
      return (0, _)`typeof ${t} ${o} ${e}`;
  }
  if (s === DataType.Correct) {
    return i;
  }
  return not(i);
  function n(e = nil) {
    return and(
      (0, _)`typeof ${t} == "number"`,
      e,
      r ? (0, _)`isFinite(${t})` : nil,
    );
  }
}
export function checkDataTypes(e, t, r, a) {
  let s;
  if (e.length === 1) {
    return checkDataType(e[0], t, r, a);
  }
  let i = toHash(e);
  if (i.array && i.object) {
    let e = (0, _)`typeof ${t} != "object"`;
    s = i.null ? e : (0, _)`!${t} || ${e}`;
    delete i.null;
    delete i.array;
    delete i.object;
  } else {
    s = nil;
  }
  for (let e in (i.number && delete i.integer, i)) {
    s = and(s, checkDataType(e, t, r, a));
  }
  return s;
}
let h = {
  message: ({ schema }) => `must be ${schema}`,
  params: ({ schema, schemaValue }) => {
    if (typeof schema === "string") {
      return (0, _)`{type: ${schema}}`;
    }
    return (0, _)`{type: ${schemaValue}}`;
  },
};
export function reportTypeError(e) {
  let t = ((it) => {
    let { gen, data, schema } = it;
    let s = schemaRefOrVal(it, schema, "type");
    return {
      gen,
      keyword: "type",
      data,
      schema: schema.type,
      schemaCode: s,
      schemaValue: s,
      parentSchema: schema,
      params: {},
      it,
    };
  })(e);
  reportError(t, h);
}
