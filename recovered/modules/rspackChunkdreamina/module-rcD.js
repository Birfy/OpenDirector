import { _ } from "./module-uEg.js";
import {
  alwaysValidSchema,
  checkStrictMode,
  mergeEvaluated,
} from "./module-c5o.js";
import { validateArray } from "./module-gcE.js";
export function validateTuple(e, t, r = e.schema) {
  let { gen, parentSchema, data, keyword, it } = e;
  ((e) => {
    let { opts, errSchemaPath } = it;
    let r_length = r.length;
    let n =
      r_length === e.minItems && (r_length === e.maxItems || e[t] === false);
    if (opts.strictTuples && !n) {
      let e = `"${keyword}" is ${r_length}-tuple, but minItems or maxItems/${t} are not specified or different at path "${errSchemaPath}"`;
      checkStrictMode(it, e, opts.strictTuples);
    }
  })(parentSchema);
  if (it.opts.unevaluated && r.length && it.items !== true) {
    it.items = mergeEvaluated.items(gen, r.length, it.items);
  }
  let u = gen.name("valid");
  let f = gen.const("len", (0, _)`${data}.length`);
  r.forEach((t, r) => {
    if (!alwaysValidSchema(it, t)) {
      gen.if((0, _)`${f} > ${r}`, () =>
        e.subschema(
          {
            keyword,
            schemaProp: r,
            dataProp: r,
          },
          u,
        ),
      );
      e.ok(u);
    }
  });
}
export default {
  keyword: "items",
  type: "array",
  schemaType: ["object", "array", "boolean"],
  before: "uniqueItems",
  code(e) {
    let { schema, it } = e;
    if (Array.isArray(schema)) {
      return validateTuple(e, "additionalItems", schema);
    }
    it.items = true;
    if (!alwaysValidSchema(it, schema)) {
      e.ok(validateArray(e));
    }
  },
};
