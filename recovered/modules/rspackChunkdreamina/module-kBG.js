import { alwaysValidSchema } from "./module-c5o.js";
export default {
  keyword: "not",
  schemaType: ["object", "boolean"],
  trackErrors: true,
  code(e) {
    let { gen, schema, it } = e;
    if (alwaysValidSchema(it, schema)) {
      return void e.fail();
    }
    let i = gen.name("valid");
    e.subschema(
      {
        keyword: "not",
        compositeRule: true,
        createErrors: false,
        allErrors: false,
      },
      i,
    );
    e.failResult(
      i,
      () => e.reset(),
      () => e.error(),
    );
  },
  error: {
    message: "must NOT be valid",
  },
};
