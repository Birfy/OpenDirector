import { allSchemaProperties, usePattern } from "./module-gcE.js";
import { Name, _, not } from "./module-uEg.js";
import {
  alwaysValidSchema,
  checkStrictMode,
  Type,
  evaluatedPropsToName,
} from "./module-c5o.js";
export default {
  keyword: "patternProperties",
  type: "object",
  schemaType: "object",
  code(e) {
    let { gen, schema, data, parentSchema, it } = e;
    let { opts } = it;
    let u = allSchemaProperties(schema);
    let f = u.filter((e) => alwaysValidSchema(it, schema[e]));
    if (
      u.length === 0 ||
      (f.length === u.length && (!it.opts.unevaluated || it.props === true))
    ) {
      return;
    }
    let p =
      opts.strictSchema &&
      !opts.allowMatchingProperties &&
      parentSchema.properties;
    let h = gen.name("valid");
    if (!(it.props === true || it.props instanceof Name)) {
      it.props = evaluatedPropsToName(gen, it.props);
    }
    let { props } = it;
    for (let e of u) {
      if (p) {
        ((e) => {
          for (let t in p) {
            if (new RegExp(e).test(t)) {
              checkStrictMode(
                it,
                `property ${t} matches pattern ${e} (use allowMatchingProperties)`,
              );
            }
          }
        })(e);
      }
      if (it.allErrors) {
        g(e);
      } else {
        gen.var(h, true);
        g(e);
        gen.if(h);
      }
    }
    function g(schemaProp) {
      gen.forIn("key", data, (dataProp) => {
        gen.if((0, _)`${usePattern(e, schemaProp)}.test(${dataProp})`, () => {
          let a = f.includes(schemaProp);
          if (!a) {
            e.subschema(
              {
                keyword: "patternProperties",
                schemaProp,
                dataProp,
                dataPropType: Type.Str,
              },
              h,
            );
          }
          if (it.opts.unevaluated && props !== true) {
            gen.assign((0, _)`${props}[${dataProp}]`, true);
          } else if (!(a || it.allErrors)) {
            gen.if(not(h), () => gen.break());
          }
        });
      });
    }
  },
};
