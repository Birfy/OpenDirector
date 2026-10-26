import { KeywordCxt } from "./module-eI2.js";
import { allSchemaProperties, propertyInData } from "./module-gcE.js";
import { alwaysValidSchema, mergeEvaluated, toHash } from "./module-c5o.js";
import o from "./module-hC_2.js";
export default {
  keyword: "properties",
  type: "object",
  schemaType: "object",
  code(e) {
    let { gen, schema, parentSchema, data, it } = e;
    if (
      it.opts.removeAdditional === "all" &&
      parentSchema.additionalProperties === undefined
    ) {
      o.code(new KeywordCxt(it, o, "additionalProperties"));
    }
    let c = allSchemaProperties(schema);
    for (let e of c) {
      it.definedProperties.add(e);
    }
    if (it.opts.unevaluated && c.length && it.props !== true) {
      it.props = mergeEvaluated.props(gen, toHash(c), it.props);
    }
    let u = c.filter((e) => !alwaysValidSchema(it, schema[e]));
    if (u.length === 0) {
      return;
    }
    let f = gen.name("valid");
    for (let a of u) {
      let p;
      p = a;
      if (
        it.opts.useDefaults &&
        !it.compositeRule &&
        schema[p].default !== undefined
      ) {
        h(a);
      } else {
        gen.if(propertyInData(gen, data, a, it.opts.ownProperties));
        h(a);
        if (!it.allErrors) {
          gen.else().var(f, true);
        }
        gen.endIf();
      }
      e.it.definedProperties.add(a);
      e.ok(f);
    }
    function h(t) {
      e.subschema(
        {
          keyword: "properties",
          schemaProp: t,
          dataProp: t,
        },
        f,
      );
    }
  },
};
