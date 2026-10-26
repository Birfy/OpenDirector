import {
  allSchemaProperties,
  isOwnProperty,
  usePattern,
} from "./module-gcE.js";
import { _, nil, not, or } from "./module-uEg.js";
import i from "./module-drl.js";
import { Type, alwaysValidSchema, schemaRefOrVal } from "./module-c5o.js";
export default {
  keyword: "additionalProperties",
  type: ["object"],
  schemaType: ["boolean", "object"],
  allowUndefined: true,
  trackErrors: true,
  error: {
    message: "must NOT have additional properties",
    params: ({ params }) =>
      (0, _)`{additionalProperty: ${params.additionalProperty}}`,
  },
  code(e) {
    let { gen, schema, parentSchema, data, errsCount, it } = e;
    if (!errsCount) {
      throw Error("ajv implementation error");
    }
    let { allErrors, opts } = it;
    it.props = true;
    if (opts.removeAdditional !== "all" && alwaysValidSchema(it, schema)) {
      return;
    }
    let p = allSchemaProperties(parentSchema.properties);
    let h = allSchemaProperties(parentSchema.patternProperties);
    function m(additionalProperty) {
      gen.code((0, _)`delete ${data}[${additionalProperty}]`);
    }
    function g(additionalProperty) {
      if (
        opts.removeAdditional === "all" ||
        (opts.removeAdditional && schema === false)
      ) {
        return void m(additionalProperty);
      }
      if (schema === false) {
        e.setParams({
          additionalProperty,
        });
        e.error();
        if (!allErrors) {
          gen.break();
        }
        return;
      }
      if (typeof schema === "object" && !alwaysValidSchema(it, schema)) {
        let r = gen.name("valid");
        if (opts.removeAdditional === "failing") {
          y(additionalProperty, r, false);
          gen.if(not(r), () => {
            e.reset();
            m(additionalProperty);
          });
        } else {
          y(additionalProperty, r);
          if (!allErrors) {
            gen.if(not(r), () => gen.break());
          }
        }
      }
    }
    function y(dataProp, r, a) {
      let s = {
        keyword: "additionalProperties",
        dataProp,
        dataPropType: Type.Str,
      };
      if (a === false) {
        Object.assign(s, {
          compositeRule: true,
          createErrors: false,
          allErrors: false,
        });
      }
      e.subschema(s, r);
    }
    gen.forIn("key", data, (r) => {
      if (p.length || h.length) {
        gen.if(
          ((r) => {
            let i;
            if (p.length > 8) {
              let e = schemaRefOrVal(it, parentSchema.properties, "properties");
              i = isOwnProperty(gen, e, r);
            } else {
              i = p.length ? or(...p.map((e) => (0, _)`${r} === ${e}`)) : nil;
            }
            if (h.length) {
              i = or(
                i,
                ...h.map((t) => (0, _)`${usePattern(e, t)}.test(${r})`),
              );
            }
            return not(i);
          })(r),
          () => g(r),
        );
      } else {
        g(r);
      }
    });
    e.ok((0, _)`${errsCount} === ${i.errors}`);
  },
};
