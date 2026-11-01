import { _, not } from "./module-uEg.js";
import { alwaysValidSchema } from "./module-c5o.js";
export default {
  keyword: "propertyNames",
  type: "object",
  schemaType: ["object", "boolean"],
  error: {
    message: "property name must be valid",
    params: ({ params }) => (0, _)`{propertyName: ${params.propertyName}}`,
  },
  code(e) {
    let { gen, schema, data, it } = e;
    if (alwaysValidSchema(it, schema)) {
      return;
    }
    let n = gen.name("valid");
    gen.forIn("key", data, (r) => {
      e.setParams({
        propertyName: r,
      });
      e.subschema(
        {
          keyword: "propertyNames",
          data: r,
          dataTypes: ["string"],
          propertyName: r,
          compositeRule: true,
        },
        n,
      );
      gen.if(not(n), () => {
        e.error(true);
        if (!it.allErrors) {
          gen.break();
        }
      });
    });
    e.ok(n);
  },
};
