import { _, operators, str } from "./module-uEg.js";
export default {
  keyword: ["maxProperties", "minProperties"],
  type: "object",
  schemaType: "number",
  $data: true,
  error: {
    message: ({ keyword, schemaCode }) =>
      (0,
      str)`must NOT have ${keyword === "maxProperties" ? "more" : "fewer"} than ${schemaCode} properties`,
    params: ({ schemaCode }) => (0, _)`{limit: ${schemaCode}}`,
  },
  code(e) {
    let { keyword, data, schemaCode } = e;
    let i = keyword === "maxProperties" ? operators.GT : operators.LT;
    e.fail$data((0, _)`Object.keys(${data}).length ${i} ${schemaCode}`);
  },
};
