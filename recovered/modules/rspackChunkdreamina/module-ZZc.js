import { _, operators, str } from "./module-uEg.js";
import { useFunc } from "./module-c5o.js";
import i from "./module-vNm.js";
export default {
  keyword: ["maxLength", "minLength"],
  type: "string",
  schemaType: "number",
  $data: true,
  error: {
    message: ({ keyword, schemaCode }) =>
      (0,
      str)`must NOT have ${keyword === "maxLength" ? "more" : "fewer"} than ${schemaCode} characters`,
    params: ({ schemaCode }) => (0, _)`{limit: ${schemaCode}}`,
  },
  code(e) {
    let { keyword, data, schemaCode, it } = e;
    let l = keyword === "maxLength" ? operators.GT : operators.LT;
    let d =
      it.opts.unicode === false
        ? (0, _)`${data}.length`
        : (0, _)`${useFunc(e.gen, i)}(${data})`;
    e.fail$data((0, _)`${d} ${l} ${schemaCode}`);
  },
};
