import {
  checkMissingProp,
  checkReportMissingProp,
  noPropertyInData,
  propertyInData,
  reportMissingProp,
} from "./module-gcE.js";
import { _, nil, not, str } from "./module-uEg.js";
import { checkStrictMode } from "./module-c5o.js";
export default {
  keyword: "required",
  type: "object",
  schemaType: "array",
  $data: true,
  error: {
    message: ({ params: { missingProperty } }) =>
      (0, str)`must have required property '${missingProperty}'`,
    params: ({ params: { missingProperty } }) =>
      (0, _)`{missingProperty: ${missingProperty}}`,
  },
  code(e) {
    let { gen, schema, schemaCode, data, $data, it } = e;
    let { opts } = it;
    if (!$data && schema.length === 0) {
      return;
    }
    let u = schema.length >= opts.loopRequired;
    if (it.allErrors) {
      (() => {
        if (u || $data) {
          e.block$data(nil, f);
        } else {
          for (let t of schema) {
            checkReportMissingProp(e, t);
          }
        }
      })();
    } else {
      (() => {
        let i = gen.let("missing");
        if (u || $data) {
          let r = gen.let("valid", true);
          e.block$data(r, () => {
            var l;
            var d;
            l = i;
            d = r;
            e.setParams({
              missingProperty: l,
            });
            gen.forOf(
              l,
              schemaCode,
              () => {
                gen.assign(d, propertyInData(gen, data, l, opts.ownProperties));
                gen.if(not(d), () => {
                  e.error();
                  gen.break();
                });
              },
              nil,
            );
          });
          e.ok(r);
        } else {
          gen.if(checkMissingProp(e, schema, i));
          reportMissingProp(e, i);
          gen.else();
        }
      })();
    }
    if (opts.strictRequired) {
      let t = e.parentSchema.properties;
      let { definedProperties } = e.it;
      for (let e of schema) {
        if (
          (t == null ? undefined : t[e]) === undefined &&
          !definedProperties.has(e)
        ) {
          let t = it.schemaEnv.baseId + it.errSchemaPath;
          let r = `required property "${e}" is not defined at "${t}" (strictRequired)`;
          checkStrictMode(it, r, it.opts.strictRequired);
        }
      }
    }
    function f() {
      gen.forOf("prop", schemaCode, (r) => {
        e.setParams({
          missingProperty: r,
        });
        gen.if(noPropertyInData(gen, data, r, opts.ownProperties), () =>
          e.error(),
        );
      });
    }
  },
};
