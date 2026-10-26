import { _, operators, str } from "./module-uEg.js";
let s = operators;
let i = {
  maximum: {
    okStr: "<=",
    ok: s.LTE,
    fail: s.GT,
  },
  minimum: {
    okStr: ">=",
    ok: s.GTE,
    fail: s.LT,
  },
  exclusiveMaximum: {
    okStr: "<",
    ok: s.LT,
    fail: s.GTE,
  },
  exclusiveMinimum: {
    okStr: ">",
    ok: s.GT,
    fail: s.LTE,
  },
};
export default {
  keyword: Object.keys(i),
  type: "number",
  schemaType: "number",
  $data: true,
  error: {
    message: ({ keyword, schemaCode }) =>
      (0, str)`must be ${i[keyword].okStr} ${schemaCode}`,
    params: ({ keyword, schemaCode }) =>
      (0, _)`{comparison: ${i[keyword].okStr}, limit: ${schemaCode}}`,
  },
  code(e) {
    let { keyword, data, schemaCode } = e;
    e.fail$data(
      (0, _)`${data} ${i[keyword].fail} ${schemaCode} || isNaN(${data})`,
    );
  },
};
