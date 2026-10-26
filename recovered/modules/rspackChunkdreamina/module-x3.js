import { alwaysValidSchema } from "./module-c5o.js";
export default {
  keyword: "allOf",
  schemaType: "array",
  code(e) {
    let { gen, schema, it } = e;
    if (!Array.isArray(schema)) {
      throw Error("ajv implementation error");
    }
    let i = gen.name("valid");
    schema.forEach((t, schemaProp) => {
      if (alwaysValidSchema(it, t)) {
        return;
      }
      let o = e.subschema(
        {
          keyword: "allOf",
          schemaProp,
        },
        i,
      );
      e.ok(i);
      e.mergeEvaluated(o);
    });
  },
};
