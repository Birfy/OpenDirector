import { checkStrictMode } from "./module-c5o.js";
export default {
  keyword: ["then", "else"],
  schemaType: ["object", "boolean"],
  code({ keyword, parentSchema, it }) {
    if (parentSchema.if === undefined) {
      checkStrictMode(it, `"${keyword}" without "if" is ignored`);
    }
  },
};
