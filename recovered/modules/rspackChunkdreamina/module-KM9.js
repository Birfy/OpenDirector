import { Name, _, getProperty } from "./module-uEg.js";
import { DiscrError } from "./module-O31.js";
import { SchemaEnv, resolveRef } from "./module-VKO.js";
import o from "./module-yC_2.js";
import { schemaHasRulesButRef } from "./module-c5o.js";
export default {
  keyword: "discriminator",
  type: "object",
  schemaType: "object",
  error: {
    message: ({ params: { discrError, tagName } }) => {
      if (discrError === DiscrError.Tag) {
        return `tag "${tagName}" must be string`;
      }
      return `value of tag "${tagName}" must be in oneOf`;
    },
    params: ({ params: { discrError, tag, tagName } }) =>
      (0, _)`{error: ${discrError}, tag: ${tagName}, tagValue: ${tag}}`,
  },
  code(e) {
    let { gen, data, schema, parentSchema, it } = e;
    let { oneOf } = parentSchema;
    if (!it.opts.discriminator) {
      throw Error("discriminator: requires discriminator option");
    }
    let schema_propertyName = schema.propertyName;
    if (typeof schema_propertyName !== "string") {
      throw Error("discriminator: requires propertyName");
    }
    if (schema.mapping) {
      throw Error("discriminator: mapping is not supported");
    }
    if (!oneOf) {
      throw Error("discriminator: requires oneOf keyword");
    }
    let p = gen.let("valid", false);
    let tag = gen.const(
      "tag",
      (0, _)`${data}${getProperty(schema_propertyName)}`,
    );
    gen.if(
      (0, _)`typeof ${tag} == "string"`,
      () =>
        (() => {
          let r = (() => {
            let e;
            let t = {};
            let r = s(parentSchema);
            let a = true;
            for (let t = 0; t < oneOf.length; t++) {
              let d = oneOf[t];
              if (
                (d == null ? undefined : d.$ref) &&
                !schemaHasRulesButRef(d, it.self.RULES)
              ) {
                let e = d.$ref;
                if (
                  (d = resolveRef.call(
                    it.self,
                    it.schemaEnv.root,
                    it.baseId,
                    e,
                  )) instanceof SchemaEnv
                ) {
                  d = d.schema;
                }
                if (d === undefined) {
                  throw new o(it.opts.uriResolver, it.baseId, e);
                }
              }
              let p =
                (e = d == null ? undefined : d.properties) == null
                  ? undefined
                  : e[schema_propertyName];
              if (typeof p !== "object") {
                throw Error(
                  `discriminator: oneOf subschemas (or referenced schemas) must have "properties/${schema_propertyName}"`,
                );
              }
              a = a && (r || s(d));
              ((e, t) => {
                if (e.const) {
                  l(e.const, t);
                } else if (e.enum) {
                  for (let r of e.enum) {
                    l(r, t);
                  }
                } else {
                  throw Error(
                    `discriminator: "properties/${schema_propertyName}" must have "const" or "enum"`,
                  );
                }
              })(p, t);
            }
            if (!a) {
              throw Error(
                `discriminator: "${schema_propertyName}" must be required`,
              );
            }
            return t;
            function s({ required }) {
              return (
                Array.isArray(required) &&
                required.includes(schema_propertyName)
              );
            }
            function l(e, r) {
              if (typeof e !== "string" || e in t) {
                throw Error(
                  `discriminator: "${schema_propertyName}" values must be unique strings`,
                );
              }
              t[e] = r;
            }
          })();
          for (let s in (gen.if(false), r)) {
            gen.elseIf((0, _)`${tag} === ${s}`);
            gen.assign(
              p,
              ((schemaProp) => {
                let s = gen.name("valid");
                let i = e.subschema(
                  {
                    keyword: "oneOf",
                    schemaProp,
                  },
                  s,
                );
                e.mergeEvaluated(i, Name);
                return s;
              })(r[s]),
            );
          }
          gen.else();
          e.error(false, {
            discrError: DiscrError.Mapping,
            tag,
            tagName: schema_propertyName,
          });
          gen.endIf();
        })(),
      () =>
        e.error(false, {
          discrError: DiscrError.Tag,
          tag,
          tagName: schema_propertyName,
        }),
    );
    e.ok(p);
  },
};
