import { _, str } from "./module-uEg.js";
import { alwaysValidSchema } from "./module-c5o.js";
import { validateArray } from "./module-gcE.js";
import { validateAdditionalItems } from "./module-Sk8.js";
export default {
  keyword: "items",
  type: "array",
  schemaType: ["object", "boolean"],
  before: "uniqueItems",
  error: {
    message: ({ params: { len } }) =>
      (0, str)`must NOT have more than ${len} items`,
    params: ({ params: { len } }) => (0, _)`{limit: ${len}}`,
  },
  code(e) {
    let { schema, parentSchema, it } = e;
    let { prefixItems } = parentSchema;
    it.items = true;
    if (!alwaysValidSchema(it, schema)) {
      if (prefixItems) {
        validateAdditionalItems(e, prefixItems);
      } else {
        e.ok(validateArray(e));
      }
    }
  },
};
