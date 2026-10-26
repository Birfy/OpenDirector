import { _, str } from "./module-uEg.js";
import { alwaysValidSchema } from "./module-c5o.js";
import {
  checkMissingProp,
  checkReportMissingProp,
  propertyInData,
  reportMissingProp,
} from "./module-gcE.js";
export var z3 = {
  message: ({ params: { property, depsCount, deps } }) =>
    (0,
    str)`must have ${depsCount === 1 ? "property" : "properties"} ${deps} when property ${property} is present`,
  params: ({ params: { property, depsCount, deps, missingProperty } }) => (0,
  _)`{property: ${property},
    missingProperty: ${missingProperty},
    depsCount: ${depsCount},
    deps: ${deps}}`,
};
let o = {
  keyword: "dependencies",
  type: "object",
  schemaType: "object",
  error: z3,
  code(e) {
    let [t, r] = (({ schema }) => {
      let t = {};
      let r = {};
      for (let a in schema) {
        if (a !== "__proto__") {
          (Array.isArray(schema[a]) ? t : r)[a] = schema[a];
        }
      }
      return [t, r];
    })(e);
    ((e, t = e.schema) => {
      let { gen, data, it } = e;
      if (Object.keys(t).length === 0) {
        return;
      }
      let n = gen.let("missing");
      for (let property in t) {
        let d = t[property];
        if (d.length === 0) {
          continue;
        }
        let c = propertyInData(gen, data, property, it.opts.ownProperties);
        e.setParams({
          property,
          depsCount: d.length,
          deps: d.join(", "),
        });
        if (it.allErrors) {
          gen.if(c, () => {
            for (let t of d) {
              checkReportMissingProp(e, t);
            }
          });
        } else {
          gen.if((0, _)`${c} && (${checkMissingProp(e, d, n)})`);
          reportMissingProp(e, n);
          gen.else();
        }
      }
    })(e, t);
    ((e, t = e.schema) => {
      let { gen, data, keyword, it } = e;
      let l = gen.name("valid");
      for (let schemaProp in t) {
        if (!alwaysValidSchema(it, t[schemaProp])) {
          gen.if(
            propertyInData(gen, data, schemaProp, it.opts.ownProperties),
            () => {
              let t = e.subschema(
                {
                  keyword,
                  schemaProp,
                },
                l,
              );
              e.mergeValidEvaluated(t, l);
            },
            () => gen.var(l, true),
          );
          e.ok(l);
        }
      }
    })(e, r);
  },
};
export default o;
