import { _, operators, str } from "./module-uEg.js";
export default {
  keyword: ["maxItems", "minItems"],
  type: "array",
  schemaType: "number",
  $data: true,
  error: {
    message: ({ keyword, schemaCode }) =>
      (0,
      str)`must NOT have ${keyword === "maxItems" ? "more" : "fewer"} than ${schemaCode} items`,
    params: ({ schemaCode }) => (0, _)`{limit: ${schemaCode}}`,
  },
  code(e) {
    let { keyword, data, schemaCode } = e;
    let i = keyword === "maxItems" ? operators.GT : operators.LT;
    e.fail$data((0, _)`${data}.length ${i} ${schemaCode}`);
  },
};
