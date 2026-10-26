import { Name, _ } from "./module-uEg.js";
import { alwaysValidSchema } from "./module-c5o.js";
export default {
  keyword: "oneOf",
  schemaType: "array",
  trackErrors: true,
  error: {
    message: "must match exactly one schema in oneOf",
    params: ({ params }) => (0, _)`{passingSchemas: ${params.passing}}`,
  },
  code(e) {
    let { gen, schema, parentSchema, it } = e;
    if (!Array.isArray(schema)) {
      throw Error("ajv implementation error");
    }
    if (it.opts.discriminator && parentSchema.discriminator) {
      return;
    }
    let n = gen.let("valid", false);
    let passing = gen.let("passing", null);
    let d = gen.name("_valid");
    e.setParams({
      passing,
    });
    gen.block(function () {
      schema.forEach((r, schemaProp) => {
        let c;
        if (alwaysValidSchema(it, r)) {
          gen.var(d, true);
        } else {
          c = e.subschema(
            {
              keyword: "oneOf",
              schemaProp,
              compositeRule: true,
            },
            d,
          );
        }
        if (schemaProp > 0) {
          gen
            .if((0, _)`${d} && ${n}`)
            .assign(n, false)
            .assign(passing, (0, _)`[${passing}, ${schemaProp}]`)
            .else();
        }
        gen.if(d, () => {
          gen.assign(n, true);
          gen.assign(passing, schemaProp);
          if (c) {
            e.mergeEvaluated(c, Name);
          }
        });
      });
    });
    e.result(
      n,
      () => e.reset(),
      () => e.error(true),
    );
  },
};
