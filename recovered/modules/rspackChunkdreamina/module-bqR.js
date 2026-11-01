import { validateTuple } from "./module-rcD.js";
export default {
  keyword: "prefixItems",
  type: "array",
  schemaType: ["array"],
  before: "uniqueItems",
  code: (e) => validateTuple(e, "items"),
};
