import { _, not, str } from "./module-uEg.js";
import { Type, alwaysValidSchema, checkStrictMode } from "./module-c5o.js";
export function validateAdditionalItems(e, t) {
  let { gen, schema, data, keyword, it } = e;
  it.items = true;
  let d = gen.const("len", (0, _)`${data}.length`);
  if (schema === false) {
    e.setParams({
      len: t.length,
    });
    e.pass((0, _)`${d} <= ${t.length}`);
  } else if (typeof schema === "object" && !alwaysValidSchema(it, schema)) {
    let i = gen.var("valid", (0, _)`${d} <= ${t.length}`);
    gen.if(not(i), () => {
      var o;
      o = i;
      gen.forRange("i", t.length, d, (dataProp) => {
        e.subschema(
          {
            keyword,
            dataProp,
            dataPropType: Type.Num,
          },
          o,
        );
        if (!it.allErrors) {
          gen.if(not(o), () => gen.break());
        }
      });
    });
    e.ok(i);
  }
}
export default {
  keyword: "additionalItems",
  type: "array",
  schemaType: ["boolean", "object"],
  before: "uniqueItems",
  error: {
    message: ({ params: { len } }) =>
      (0, str)`must NOT have more than ${len} items`,
    params: ({ params: { len } }) => (0, _)`{limit: ${len}}`,
  },
  code(e) {
    let { parentSchema, it } = e;
    let { items } = parentSchema;
    if (Array.isArray(items)) {
      validateAdditionalItems(e, items);
    } else {
      checkStrictMode(
        it,
        '"additionalItems" is ignored when "items" is not an array of schemas',
      );
    }
  },
};
