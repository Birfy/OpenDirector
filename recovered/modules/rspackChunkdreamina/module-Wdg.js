import { _, str } from "./module-uEg.js";
export default {
  keyword: "multipleOf",
  type: "number",
  schemaType: "number",
  $data: true,
  error: {
    message: ({ schemaCode }) => (0, str)`must be multiple of ${schemaCode}`,
    params: ({ schemaCode }) => (0, _)`{multipleOf: ${schemaCode}}`,
  },
  code(e) {
    let { gen, data, schemaCode, it } = e;
    let multipleOfPrecision = it.opts.multipleOfPrecision;
    let n = gen.let("res");
    let l = multipleOfPrecision
      ? (0, _)`Math.abs(Math.round(${n}) - ${n}) > 1e-${multipleOfPrecision}`
      : (0, _)`${n} !== parseInt(${n})`;
    e.fail$data(
      (0, _)`(${schemaCode} === 0 || (${n} = ${data}/${schemaCode}, ${l}))`,
    );
  },
};
